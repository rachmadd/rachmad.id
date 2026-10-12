import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill text-[15px] font-medium no-underline transition-opacity";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-bg hover:opacity-85",
  outline:
    "border border-[rgb(var(--overlay-rgb)_/_0.16)] text-fg hover:border-[rgb(var(--overlay-rgb)_/_0.34)] hover:bg-[rgb(var(--overlay-rgb)_/_0.04)]",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: LinkProps | ButtonProps) {
  const classes = `${base} ${variants[variant]} min-h-[48px] px-[26px] ${className}`;

  if ("href" in props && props.href !== undefined) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
