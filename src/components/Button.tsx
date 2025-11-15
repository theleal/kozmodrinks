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
        "px-8 py-2 text-white rounded-full hover:cursor-pointer hover:opacity-80 transition-transform hover:scale-105 duration-300 font-secondary text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

