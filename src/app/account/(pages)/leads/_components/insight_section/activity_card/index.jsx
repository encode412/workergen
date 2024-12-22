import { Calendar01Icon, Message01Icon } from "hugeicons-react";
import Image from "next/image";
import React from "react";

const ActivityCard = ({ activity }) => {
  return (
    <div className="flex flex-col gap-y-2 border border-lightgray bg-primary drop-shadow-md px-6 py-4 rounded-[8px] hover:cursor-pointer hover:scale-105 transition-all ease-in-out">
      <div className="flex items-center gap-x-2">
        <Image src={activity.logo} alt="logo" width={20} height={20} className="rounded-[50%]" />
        <div className="flex flex-col">
          <span className="text-base font-semibold text-dark">{activity.title}</span>
          <span className="text-sm font-normal text-gray">{activity.note}</span>
        </div>
      </div>
      <div className="flex items-center bg-gradient-to-r from-[#e5f4f8] via-[#e3eaec] to-[#f3f4f5] px-3 py-2 rounded-[6px] gap-x-1">
        {activity.key === "schedule" ? <Calendar01Icon size={17} /> : <Message01Icon size={17}  />}
        <span className="text-base font-normal text-dark">{activity.schedule}</span>
      </div>
    </div>
  );
};

export default ActivityCard;
