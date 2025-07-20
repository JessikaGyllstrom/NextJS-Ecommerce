"use server";
import { BasketItem } from "@/app/(store)/store";
import { imageUrl } from "@/lib/imageUrl";
import stripe from "@/lib/stripe";

export type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
};

export type GroupedBasketItem = {
  product: BasketItem["product"];
  quantity: number;
};

export async function createCheckoutSession(
  items: GroupedBasketItem[],
  metadata: Metadata
) {
  try {
    const itemsWithoutPrice = items.filter((item) => !item.product.price);
    if (itemsWithoutPrice.length > 0) {
      throw new Error(
        `Some products do not have a price: ${itemsWithoutPrice
          .map((item) => item.product.name)
          .join(", ")}`
      );
    }

    // Create line items for Stripe checkout
    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.product.name,
          images: item.product.image
            ? [imageUrl(item.product.image).url()]
            : [],
        },
        unit_amount: item.product.price
          ? Math.round(item.product.price * 100)
          : 0,
      },
      quantity: item.quantity,
    }));

    const existingCustomers = await stripe.customers.list({
      email: metadata.customerEmail,
    });

    const customer =
      existingCustomers.data.length > 0
        ? existingCustomers.data[0]
        : await stripe.customers.create({
            email: metadata.customerEmail,
            name: metadata.customerName,
          });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems.map((item) => ({
        ...item,
        price_data: {
          ...item.price_data,
          product_data: {
            ...item.price_data.product_data,
            name: item.price_data.product_data.name || "Unnamed Product", // Provide a default name
          },
        },
      })),
      mode: "payment",
      customer: customer.id,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}&clearBasket=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      metadata: {
        orderNumber: metadata.orderNumber,
        clerkUserId: metadata.clerkUserId,
        customerEmail: metadata.customerEmail,
        customerName: metadata.customerName,
      },
    });

    return session.url; // Return the checkout session URL
  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw new Error("Failed to create checkout session");
  }
}
