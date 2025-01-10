import React from "react";

const GameCardSkeleton = () => {
  return (
    <div className="bg-gray-700 rounded-xl overflow-hidden ">
      <img className="object-fill h-48 w-96" />
      <div className="flex flex-col p-3 h-20">
        <div className="text-white items-start justify-start flex font-medium text-xl"></div>
        <div className="flex flex-row justify-between"></div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
