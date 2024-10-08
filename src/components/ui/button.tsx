import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // green button
        default: "bg-[#28a745] text-white hover:bg-[#22AB3880] w-[138px] h-[36px] px-[16px] py-[10px] gap-[6px] border-[2px] border-[#22AB38] rounded-tl-[8px] shadow-[0px_1px_2px_0px_#1018280A] disabled:bg-[#BDBDBD] disabled:border-[#BDBDBD] disabled:cursor-not-allowed",

        // white button
        secondary: "bg-[#FFFFFF] text-[#22AB38] hover:bg-[#FFFFFF] w-[138px] h-[36px] px-[16px] py-[10px] gap-[6px] border-[2px] rounded-tl-[8px] border-[#22AB38] hover:text-[#22AB3880] hover:border-[#22AB3880] active:border-[22AB3880] shadow-[0px_1px_2px_0px_#1018280A] disabled:text-[#BDBDBD] disabled:border-[#BDBDBD] disabled:cursor-not-allowed",

        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const EtavoltButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
EtavoltButton.displayName = "Button"

export { EtavoltButton, buttonVariants }
