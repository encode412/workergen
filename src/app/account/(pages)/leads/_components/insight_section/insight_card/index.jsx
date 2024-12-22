import { StarsIcon } from "@/constants/images";
import { Message01Icon } from "hugeicons-react";
import Image from "next/image";
import React from "react";

const InsightLeadCard = ({ lead, handleLeadClick }) => {
  const handleClick = () => {
    handleLeadClick(lead);
  };
  return (
    <div
      className="h-[270px] w-3/4 animate-slide_up cursor-pointer rounded-[10px] border border-lightgray bg-primary drop-shadow-sm"
      onClick={handleClick}
    >
      <div className="flex h-full flex-col justify-between px-5 py-4">
        <div className="flex items-center gap-x-2">
          <Image
            src={lead.image}
            alt={lead.name}
            width={40}
            height={40}
            className="rounded-[50%]"
          />
          <div className="flex flex-col">
            <span className="text-base font-semibold text-dark">
              {lead.name}
            </span>
            <span className="text-sm text-gray">{lead.title}</span>
          </div>
        </div>
        <div className="relative flex flex-col gap-y-2 rounded-[10px] rounded-tr-[20px] bg-gradient-to-r from-[#e5f4f8] via-[#e3eaec] to-[#f3f4f5] px-3 py-4">
          <div className="flex gap-x-1">
            <Message01Icon />
            <span className="text-base font-semibold text-dark">
              {lead.schedule}
            </span>
          </div>
          <span className="text-dark">{lead.schedule_note}</span>
          <div className="absolute right-[-5px] top-[-10px] flex h-[35px] w-[35px] justify-center rounded-[50%] bg-primary">
            <Image src={StarsIcon} alt={"stars"} width={20} height={20} />
          </div>
        </div>
        <div className="flex items-center gap-x-2 pl-4 text-sm text-gray">
          {lead.note}
        </div>
      </div>
    </div>
  );
};

export default InsightLeadCard;
