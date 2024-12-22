"use client";
import React, { useState } from "react";
import InsightLeadCard from "./insight_card";
import Image from "next/image";
import { CoPilotLogo } from "@/constants/images";
import { demoKeyActivitiesContent, demoLeadsDetails } from "@/constants";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowUp01Icon,
  Clock01Icon,
} from "hugeicons-react";
import ActivityCard from "./activity_card";

const InsightSection = ({ setSelected, setShowModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleLeadClick = (lead) => {
    setSelected(lead);
    setShowModal(true);
  };

  return (
    <div className="scale- rounded-[6px] bg-primary drop-shadow-md">
      <div className="flex flex-col gap-y-10 px-10 py-5">
        <div className="flex w-full items-center justify-between gap-x-2">
          <div className="flex w-3/4 items-center gap-x-2">
            <Image src={CoPilotLogo} alt="copilot" width={40} height={40} />
            <span className="text-xl font-semibold">
              Hi Mona, <span className="text-[#00308F]">68%</span> of goal
              achieved and rest can be achieved by focusing on 20 top leads
            </span>
          </div>
          <div className="gap-y- flex w-[67%] flex-col text-sm text-gray">
            <div className="flex w-full justify-between">
              <div className="flex items-center gap-x-1">
                <Clock01Icon size={16} />
                <span>1 month until Q4 ends</span>
              </div>
              <div className="flex gap-x-8">
                <div className="relative">
                  <div className="absolute left-[-5px] top-1 h-[29px] w-[1px] bg-black p-[1px]"></div>
                  <div>
                    <div />
                    Target
                    <span className="mx-4 font-semibold text-dark">
                      $45 million
                    </span>
                  </div>
                </div>
                <div>68% of target achieved</div>
              </div>
            </div>
            <div className="w-full py-1">
              <div className="flex h-[10px] w-full">
                <div className="w-1/4 rounded-l-[8px] bg-[#1c9984cb]"></div>
                <div className="w-[13%] bg-[#A7B6FF]"></div>
                <div className="w-[10%] bg-[#EBA7FF]"></div>
                <div className="w-[5%] bg-[#F3B58A]"></div>
                <div className="w-1/2 rounded-r-[8px] bg-[#e8e8e8]"></div>
              </div>
            </div>

            <div className="flex items-center gap-x-7">
              <div className="flex items-center gap-x-1">
                <div className="h-[10px] w-[10px] rounded-[50%] bg-[#1c9984cb] p-[2px]" />
                <span>Won $18m</span>
              </div>
              <div className="flex items-center gap-x-1">
                <div className="h-[10px] w-[10px] rounded-[50%] bg-[#A7B6FF] p-[2px]" />
                <span>Committed $8m</span>
              </div>
              <div className="flex items-center gap-x-1">
                <div className="h-[10px] w-[10px] rounded-[50%] bg-[#EBA7FF] p-[2px]" />
                <span>Best case $7m</span>
              </div>
              <div className="flex items-center gap-x-1">
                <div className="h-[10px] w-[10px] rounded-[50%] bg-[#F3B58A] p-[2px]" />
                <span>Qualified $3m</span>
              </div>
              <div className="flex items-center gap-x-1">
                <div className="h-[10px] w-[10px] rounded-[50%] bg-[#e8e8e8] p-[2px]" />
                <span>Leads $75m</span>
              </div>
            </div>
          </div>
          <ArrowUp01Icon className="mt-[1.2rem]" size={24} />
        </div>

        <div className="flex w-full items-center gap-x-14">
          <div className="relative flex w-full flex-col gap-y-3">
            <span className="text-lg font-normal text-dark">
              Copilot has pinpointed 20 key leads that show strong purchase
              intent and are actively engaging. These leads need your focus.
            </span>
            <div className="flex gap-x-3 overflow-x-auto">
              {demoLeadsDetails
                .slice(currentIndex, currentIndex + 2)
                .map((lead) => (
                  <InsightLeadCard
                    lead={lead}
                    key={lead.id}
                    handleLeadClick={handleLeadClick}
                  />
                ))}
            </div>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`${currentIndex === 0 && "hidden"} absolute left-[-2%] top-[50%] z-50 rounded-[50%] border border-lightgray p-2`}
            >
              <ArrowLeft01Icon size={20} color="#2F2F2F" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= demoLeadsDetails.length - 2}
              className="absolute right-[-2%] top-[50%] z-50 rounded-[50%] border border-lightgray p-2"
            >
              <ArrowRight01Icon size={20} color="#2F2F2F" />
            </button>
          </div>

          <div className="flex h-full w-1/2 flex-col justify-between gap-y-2">
            <span className="text-base font-normal text-dark">
              Other key activities
            </span>
            <div className="flex flex-col gap-y-4">
              {demoKeyActivitiesContent.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
            <div className="group mt-2 w-fit cursor-pointer text-base font-medium text-[#3d59b4]">
              Show all activities
              <div className="h-[2px] w-0 bg-[#3d59b4] transition-all duration-500 group-hover:w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightSection;
