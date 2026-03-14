import { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { children, className, variant = "primary", type = "button", ...props },
    ref
  ) {
    const baseStyles =
      "inline-flex cursor-pointer items-center justify-center rounded-md p-4 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
      primary:
        "bg-primary-500 text-white hover:bg-primary-00 focus:ring-primary-400",
      secondary:
        "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
      ghost:
        "bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-gray-500",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={`${baseStyles} ${variantStyles[variant]} ${className ?? ""}`.trim()}
        {...props}
      >
        {children}
      </button>
    );
  }
);
