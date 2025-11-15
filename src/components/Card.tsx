"use client";
import Image from "next/image";
import useMobile from "../hooks/useMobile";
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
  const isMobile = useMobile();
  return (
    <div className="bg-white flex flex-col lg:py-7 lg:px-12 px-6 py-4 gap-4 rounded-2xl font-secondary text-gray-500 lg:text-lg">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span className="bg-primary lg:h-12 lg:w-12 w-8 h-8 rounded-full flex items-center justify-center">
            <Icon name="user" size={isMobile ? 18 : 24} color="white" />
          </span>
          <span>{username}</span>
        </div>
        <div className="flex lg:gap-1.5 gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="">
              <Icon name="star" size={isMobile ? 12 : 20} color="#e0004d" />
            </span>
          ))}
        </div>
      </div>
      <div className="lg:mt-2 lg:mb-4 mt-1 mb-2">{description}</div>
      <div className="flex items-center w-max lg:gap-6 gap-3">
        <div className="flex gap-3 items-center  lg:px-7 py-2 px-5 bg-[#E9C4EF]   rounded-full">
          <Image
            src={product?.imageUrl || ""}
            alt={product?.name || ""}
            width={isMobile ? 20 : 40}
            height={isMobile ? 25 : 50}
          />
          <div className="text-[#5934B7] flex flex-col lg:text-sm text-xs">
            <span className="font-bold">Recomendo este produto</span>
            <span className="font-normal">{product?.name}</span>
          </div>
        </div>
        <div className="bg-[#E9C4EF] aspect-square flex items-center justify-center lg:p-6 p-3 rounded-full">
          <Icon name="like" size={isMobile ? 18 : 28} color="#5934B7" />
        </div>
      </div>
    </div>
  );
}
