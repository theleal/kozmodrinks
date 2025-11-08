import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

export default function Button({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      className={clsx(
        "px-8 py-2 text-white rounded-full font-secondary text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
