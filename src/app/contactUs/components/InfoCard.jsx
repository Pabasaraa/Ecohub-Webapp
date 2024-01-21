import React from "react";

const InfoCard = ({ heading, content, icon }) => {
  return (
    <div className="flex flex-col w-fit gap-4 text-center items-center">
      <div className="flex p-2 w-14 h-14 items-center justify-center rounded-full bg-green-500">
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-semibold text-neutral-800 tracking-wide">
          {heading}
        </p>
        <p className="text-md text-neutral-600">{content}</p>
      </div>
    </div>
  );
};

export default InfoCard;
