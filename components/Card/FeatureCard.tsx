import Image from "next/image";
import { FeatureWhy } from "@/types";

export default function FeatureCard({ item }: { item: FeatureWhy }) {

  return (
    <div
      className="bg-white hover:scale-105 transition duration-200  p-3 space-y-4 rounded-md"
      key={item.id}
    >
      <div className=" w-fit p-3 text-white rounded-md bg-primary-500">
        <Image src={item.icon} alt="icon" width={50} height={50} />
      </div>
      <h3 className="font-medium text-st2 md:text-st1">
       {item.title}
      </h3>
      <p className="text-gray-20">
       {item.description}
      </p>
    </div>
  );
}
