import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import { getMyOrders } from "@/sanity/lib/orders/getMyOrders";
import { formatCurrency } from "@/lib/formatCurrency";
async function Orders() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }
  const orders = await getMyOrders(userId);
  console.log("Orders:", orders);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-4 tracking-tight">My Orders</h1>
        {orders.length === 0 ? (
          <div className="space-y-6 text-center">
            <p className="text-gray-600">You have no orders yet.</p>
          </div>
        ) : (
          <div className=" py-8  ">
            {orders.map((order, idx) => (
              <div key={idx} className="bg-gray-50 my-6 ">
                <div className="py-4 px-8 bg-white border border-gray-200 rounded-lg shadow-lg text-gray-800 overflow-hidden mb-4 hover:shadow-2xl">
                  <div className="">
                    <p className="font-medium mt-2">Order Number</p>
                    <p className="text-md text-sage-500 mb-2">
                      {order.orderNumber}
                    </p>

                    <div className="sm:text-right text-left">
                      <p className="text-md text-gray-800 text-left text-medium">
                        Order Date
                      </p>
                      <p className="text-md text-gray-800 font-normal"></p>
                      <p className="font-medium text-left">
                        {order._createdAt
                          ? new Date(order._createdAt).toLocaleDateString()
                          : "N/A"}
                      </p>
                    </div>
                    {/* <OrderCard key={order._id} order={order} /> */}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="py-4">
                      <span className="text-gray-800 text-md">Status: </span>
                      <span
                        className={`ml-2 px-4 py-2 rounded-full text-md ${
                          order.status === "paid"
                            ? "bg-sage-200 text-gray-800"
                            : order.status === "pending"
                        }`}
                      >
                        {order.status}
                      </span>
                      <div className="flex mt-4 text-lg">
                        <p className="text-gray-800 font-bold">Total:</p>
                        <p className="text-gray-800 font-bold ml-2">
                          {formatCurrency(
                            order.totalPrice ?? 0,
                            order.currency
                          )}{" "}
                        </p>
                      </div>
                    </div>{" "}
                  </div>

                  {order.amountDiscount ? (
                    <div className="mt-4 sm:p-4 bg-red-50 rounded-lg">
                      <p className="text-red-600 font-medium mb-1 text-sm sm:text:base">
                        Discount Applied:{" "}
                        {formatCurrency(order.amountDiscount, order.currency)}
                      </p>
                      <p className="text-sm text-gray-600">
                        Original Subtotal:{" "}
                        {formatCurrency(
                          (order.totalPrice ?? 0) + order.amountDiscount,
                          order.currency
                        )}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Orders;
