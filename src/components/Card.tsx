import Image from "next/image";
import Icon from "../icons";

type CardProps = {
  username?: string;
  description?: string | React.ReactNode;
  product?: {
    name: string;
    imageUrl: string;
  };
};

export default function Card({ username, description, product }: CardProps) {
  return (
    <div className="bg-white flex flex-col py-7 px-12 rounded-2xl font-secondary text-gray-500 text-lg">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span className="bg-primary h-12 w-12 rounded-full flex items-center justify-center">
            <Icon name="user" size={24} color="white" />
          </span>
          <span>{username}</span>
        </div>
        <div className="flex gap-1.5">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="">
              <Icon name="star" size={20} color="#e0004d" />
            </span>
          ))}
        </div>
      </div>
      <div className="mt-2 mb-4">{description}</div>
      <div className="flex items-center w-max gap-6">
        <div className="flex gap-3 items-center  px-7 bg-[#E9C4EF] py-2 rounded-full">
          <Image
            src={product?.imageUrl || ""}
            alt={product?.name || ""}
            width={40}
            height={50}
          />
          <div className="text-[#5934B7] flex flex-col text-sm">
            <span className="font-bold">Recomendo este produto</span>
            <span className="font-normal">{product?.name}</span>
          </div>
        </div>
        <div className="bg-[#E9C4EF] aspect-square flex items-center justify-center p-6 rounded-full">
          <Icon name="like" size={28} color="#5934B7" />
        </div>
      </div>
    </div>
  );
}
