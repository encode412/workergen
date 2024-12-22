"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Cancel01Icon,
  Edit01Icon,
  PlaneIcon,
  SentIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "hugeicons-react";
import {
  D365Icon,
  DealIcon,
  DecisionIcon,
  IntentIcon,
  LinkedinLogo,
  MailIcon,
  ShieldIcon,
  StarsIcon,
} from "@/constants/images";

const SelectedLeadModal = ({ lead, handleCloseModal }) => {
  const [tabState, setTabState] = useState("Research");

  const handleTabChange = (tab) => {
    setTabState(tab);
  };

  return (
    <div className="h-5/6 w-5/6 overflow-y-auto rounded-[6px] border border-[#bebebe] bg-primary shadow-4xl drop-shadow-xl animate-slide_up">
      <div className="flex h-full flex-col gap-y-4 px-10 py-8">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-x-2">
            <Image src={MailIcon} alt={"stars"} width={40} height={40} />
            <span className="text-xl font-semibold text-dark">
              Engage with {lead.name}
            </span>
          </div>
          <Cancel01Icon onClick={handleCloseModal} className="cursor-pointer" />
        </div>
        <div className="rounded-[6px] border border-lightgray bg-primary">
          <div className="flex items-center gap-x-2 px-3 py-2">
            <Image
              src={lead.image}
              alt={lead.name}
              width={60}
              height={60}
              className="rounded-[50%]"
            />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-dark">
                {lead.name}
              </span>
              <div className="flex items-center gap-x-1">
                <Image
                  src={LinkedinLogo}
                  alt={"linkedin"}
                  width={20}
                  height={20}
                />
                <span className="text-base text-gray">{lead.title}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-3 bg-primary">
          <div className="flex w-full justify-between rounded-[10px] bg-gradient-to-r from-[#e5f4f8] via-[#e3eaec] to-[#f3f4f5] px-5 py-4">
            <div className="flex items-center gap-x-4">
              <Image src={StarsIcon} alt={"stars"} width={30} height={30} />
              <span className="text-[#2546b3]">{lead.schedule_note}</span>
            </div>
            <div className="flex items-center gap-x-3">
              <button className="flex items-center gap-x-2 rounded-[4px] border border-lightgray bg-primary px-2 py-1 font-medium text-[#2867a5]">
                <Edit01Icon />
                <span>Edit</span>
              </button>
              <button className="flex items-center gap-x-2 rounded-[4px] border border-lightgray bg-gradient-to-r from-[#6465a8] via-[#5654ac] to-[#2867a5] px-2 py-1 font-medium text-primary">
                <SentIcon />
                <span>Approve and send</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-x-8 bg-primary px-4 py-4 pt-6 drop-shadow-md">
            <div
              className={`cursor-pointer decoration-primary transition-all duration-300 ease-in-out ${
                tabState === "Engage" ? "text-dark" : "text-[#667085]"
              }`}
              onClick={() => handleTabChange("Engage")}
            >
              <div className="group w-fit">
                Engage
                {tabState !== "Engage" && (
                  <div class="mt-1 h-[1.5px] w-0 bg-[#2546b3] transition-all duration-500 group-hover:w-full"></div>
                )}
              </div>
              {tabState === "Engage" && (
                <div className="absolute bottom-0 h-[3px] w-[4.5%] bg-[#2546b3]" />
              )}
            </div>
            <div
              className={`cursor-pointer decoration-primary transition-all duration-300 ease-in-out ${
                tabState === "Research" ? "text-dark" : "text-[#667085]"
              }`}
              onClick={() => handleTabChange("Research")}
            >
              <div className="group w-fit cursor-pointer">
                Research{" "}
                {tabState !== "Research" && (
                  <div class="mt-1 h-[1.5px] w-0 bg-[#2546b3] transition-all duration-500 group-hover:w-full"></div>
                )}
              </div>
              {tabState === "Research" && (
                <div className="absolute bottom-0 h-[3px] w-[4.5%] bg-[#2546b3]" />
              )}
            </div>
          </div>
          <div className="relative mt-8 flex flex-col gap-y-4 rounded-[10px] bg-gradient-to-r from-[#e5f4f8] via-[#e3eaec] to-[#f3f4f5] px-6 py-5">
            <div className="absolute right-[-5px] top-[-10px] flex h-[55px] w-[55px] justify-center rounded-[50%] bg-primary">
              <Image src={StarsIcon} alt={"stars"} width={30} height={30} />
            </div>
            <span className="text-lg text-[#2546b3]">
              Why i picked this lead
            </span>
            <ul className="flex list-disc flex-col gap-y-1 px-4 text-dark">
              {lead.reasons.map((reason) => (
                <li>{reason}</li>
              ))}
            </ul>
            <div className="flex w-full items-center gap-x-8">
              <div className="flex w-[20%] items-center gap-x-2 rounded-[10px] bg-primary px-3 py-2 drop-shadow-md">
                <Image
                  src={DecisionIcon}
                  alt={"decision maker"}
                  width={50}
                  height={50}
                />
                <div className="flex flex-col gap-y-3">
                  <span className="text-sm font-semibold text-gray">
                    Decision maker
                  </span>
                  <span>Yes</span>
                </div>
              </div>
              <div className="flex w-[20%] items-center gap-x-2 rounded-[10px] bg-primary px-3 py-2 drop-shadow-md">
                <Image src={DealIcon} alt={"deal"} width={50} height={50} />
                <div className="flex flex-col gap-y-3">
                  <span className="text-sm font-semibold text-gray">
                    Potential deal value
                  </span>
                  <span>$1M</span>
                </div>
              </div>
              <div className="flex w-[20%] items-center gap-x-2 rounded-[10px] bg-primary px-3 py-2 drop-shadow-md">
                <Image src={IntentIcon} alt={"intent"} width={50} height={50} />
                <div className="flex flex-col gap-y-3">
                  <span className="text-sm font-semibold text-gray">
                    Intent
                  </span>
                  <span>High</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between text-gray">
            <div className="flex items-center gap-x-2">
              <div className="border border-[#bebebe] bg-lightgray p-1">
                <Image src={ShieldIcon} alt={"shield"} width={20} height={20} />
              </div>
              <div className="flex items-center gap-x-2 border border-[#bebebe] bg-lightgray px-2 py-1 text-sm">
                <span>1</span>
                <Image src={D365Icon} alt={"d365"} width={20} height={20} />
                <span>D365 Sales</span>
              </div>
              <div className="border border-[#bebebe] bg-lightgray p-1">+2</div>
            </div>
            <div className="flex items-center gap-x-4">
              <di className="border border-[#bebebe] bg-lightgray p-1 text-sm">
                AI-generated content may be incorrect
              </di>
              <ThumbsUpIcon size={20} />
              <ThumbsDownIcon size={20} />
            </div>
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-y-2 rounded-[10px] border border-[#bebebe] border-opacity-50 bg-primary px-4 py-3 drop-shadow-md">
          <span className="font-semibold text-dark">About {lead.name}</span>
          <span className="font-medium text-dark text-opacity-80">
            {lead.about}
          </span>
        </div>
      </div>

      <div className="flex w-full justify-between px-10 py-10">
        <div className="flex items-center gap-x-5">
          <span className="text-gray">Showing 1 of 9</span>
          <div />
          <div className="flex-1 font-medium text-[#2546b3]">Show all</div>
        </div>
        <div>range</div>
        <div className="flex items-center gap-x-4">
          <ThumbsUpIcon color="#5F5F5F" />
          <ThumbsDownIcon color="#5F5F5F" />
        </div>
      </div>
    </div>
  );
};

export default SelectedLeadModal;
