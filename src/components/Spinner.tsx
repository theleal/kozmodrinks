import clsx from "clsx";
import Icon from "../icons";

type Props = {
  className?: string;
};

export default function SpinnerText({ className }: Props) {
  const items = [
    { icon: "conservant", text: "SEM CONSERVANTES", size: 24 },
    { icon: "plant", text: "FRUTAS NATURAIS", size: 24 },
    { icon: "drink", text: "PRONTO PARA BEBER", size: 18 },
    { icon: "signal", text: "ENCONTRE SEU SIGNO", size: 24 },
    { icon: "conservant", text: "SEM CONSERVANTES", size: 24 },
    { icon: "plant", text: "FRUTAS NATURAIS", size: 24 },
    { icon: "drink", text: "PRONTO PARA BEBER", size: 18 },
    { icon: "signal", text: "ENCONTRE SEU SIGNO", size: 24 },
    { icon: "conservant", text: "SEM CONSERVANTES", size: 24 },
    { icon: "plant", text: "FRUTAS NATURAIS", size: 24 },
    { icon: "drink", text: "PRONTO PARA BEBER", size: 18 },
    { icon: "signal", text: "ENCONTRE SEU SIGNO", size: 24 },
  ] as const;

  return (
    <div className={clsx("overflow-hidden relative w-full", className)}>
      <div className="h-20 flex w-max animate-marquee whitespace-nowrap justify-center items-center">
        {items.concat(items).map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-3 text-white font-secondary font-light text-md"
          >
            <Icon
              className=""
              name={item.icon}
              size={item.size}
              color="white"
            />
            <p className="ml-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
