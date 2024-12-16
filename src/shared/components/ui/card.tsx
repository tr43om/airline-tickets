import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/shared/utils/cn";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, asChild, ...props }, forwardedRef) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component
        ref={forwardedRef}
        className={cn(
          // base
          "relative w-full rounded-lg border  p-6 text-left shadow-sm",
          // background color
          "bg-white dark:bg-[#090E1A]",
          // border color
          "border-blue-100 dark:border-blue-900",
          className
        )}
        tremor-id="tremor-raw"
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export { Card, type CardProps };
