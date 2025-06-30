"use client";
import React from "react";
import { Category } from "@/sanity.types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

interface CategorySelectorProps {
  categories: Category[];
}

function CategorySelector({ categories }: CategorySelectorProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const router = useRouter();
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex justify-center border-black/80">
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="inline-flex justify-center space-x-2 cursor-pointer hover:bg-gray-200 text-black rounded-none font-normal py-2 px-4"
          >
            {value
              ? categories.find((category) => category._id === value)?.title
              : "Filter by Category"}
            <ChevronsUpDown className="ml-2 h-4 w-4  shrink-0 " />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 bg-pink-400">
        <Command>
          <CommandInput
            placeholder="Search category..."
            className="h-9"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const selectedCategory = categories.find((c) =>
                  c.title
                    ?.toLowerCase()
                    .includes(e.currentTarget.value.toLowerCase())
                );
                if (selectedCategory?.slug?.current) {
                  setValue(selectedCategory._id);
                  router.push(`/categories/${selectedCategory.slug.current}`);
                  setOpen(false);
                }
              }
            }}
          />

          <CommandList>
            <CommandEmpty>No Category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category, idx) => (
                <CommandItem
                  key={`category-${idx}`}
                  value={category.title}
                  onSelect={(currentValue) => {
                    setValue(category._id ? "" : category._id);
                    router.push(`/categories/${category.slug?.current}`);
                    setOpen(false);
                  }}
                >
                  {category.title}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === category._id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default CategorySelector;
