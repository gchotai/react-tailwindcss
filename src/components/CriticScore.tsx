import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

interface Prop {
  score: number;
}

function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

const CriticScore = ({ score }: Prop) => {
  let color =
    score > 90
      ? "text-green-500"
      : score > 80
      ? "text-yellow-500"
      : "text-gray-500";
  return (
    <>
      <div className="bg-gray-500 px-[7px] flex items-center justify-center text-xs font-bold rounded-md">
        {/* <div
        className={cn(
          "px-[7px] flex items-center justify-center text-xs rounded-md",
          color
        )}
      > */}
        <span className={color}>{score}</span>
      </div>
    </>
  );
};

export default CriticScore;
