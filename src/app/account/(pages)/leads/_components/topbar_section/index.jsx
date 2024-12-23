import { MsTeamsLogo } from "@/constants/images";
import {
  Add01Icon,
  ArrowDown01Icon,
  ArrowDown02Icon,
  ArrowTurnBackwardIcon,
  ChartBarLineIcon,
  ChartBreakoutSquareIcon,
  DataRecoveryIcon,
  Delete02Icon,
  EditRoadIcon,
  LeftToRightListBulletIcon,
  OptionIcon,
  RefreshIcon,
  Sorting02Icon,
} from "hugeicons-react";
import Image from "next/image";
import React from "react";

const TopBarSection = () => {

  return (
    <header className="w-full bg-primary text-[15px] drop-shadow-md">
      <div className="flex w-full justify-between px-3 py-3">
        <div className="flex items-center gap-x-1">
          <span>My open leads</span>
          <ArrowDown01Icon size={22} color="#2F2F2F" />
        </div>

        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-x-1 cursor-pointer">
            <ChartBreakoutSquareIcon size={20} color="#2F2F2F" />
            <div className="group w-fit">Show chart <div className="h-[2px] w-0 bg-[#3d59b4] transition-all duration-500 group-hover:w-full"></div></div>
          </div>
          <div className="flex items-center gap-x-1 cursor-pointer">
            <LeftToRightListBulletIcon size={20} color="#0039a6" />
            <div className="group w-fit">
              Focused view{" "}
              <div className="h-[2px] w-0 bg-[#3d59b4] transition-all duration-500 group-hover:w-full"></div>
            </div>
          </div>
          <div className="flex items-center gap-x-1 cursor-pointer">
            <Add01Icon size={20} color="#0039a6" />
            <div className="group w-fit">
              New{" "}
              <div className="h-[2px] w-0 bg-[#3d59b4] transition-all duration-500 group-hover:w-full"></div>
            </div>
          </div>
          <div className="flex items-center gap-x-1 cursor-pointer">
            <RefreshIcon size={20} color="#2F2F2F" />
            <div className="group w-fit">
              Refresh{" "}
              <div className="h-[2px] w-0 bg-[#3d59b4] transition-all duration-500 group-hover:w-full"></div>
            </div>
          </div>
          <div className="flex items-center cursor-pointer">
            <Image src={MsTeamsLogo} width={40} height={40} alt="ms-teams" />
            <div className="group w-fit">
              Collaborate
              <div className="h-[2px] w-0 bg-[#3d59b4] transition-all duration-500 group-hover:w-full"></div>
            </div>
          </div>
          <div className="flex items-center gap-x-1 cursor-pointer">
            <Delete02Icon size={20} color="#2F2F2F" />
            <div className="group w-fit">
              Delete
              <div className="h-[2px] w-0 bg-[#3d59b4] transition-all duration-500 group-hover:w-full"></div>
            </div>
          </div>
          <div className="flex items-center gap-x-1 cursor-pointer">
            <ArrowDown01Icon size={20} color="#2F2F2F" />
            <OptionIcon />
          </div>
          <div className="flex items-center gap-x-3 rounded-[5px] font-medium border border-lightgray p-[5px] cursor-pointer">
            <DataRecoveryIcon size={20} color="#2F2F2F" />
            <div className="group w-fit">Smart data </div>
          </div>
          <div className="flex items-center gap-x-3 rounded-[5px] font-medium border border-lightgray p-[5px] cursor-pointer">
            <Sorting02Icon size={20} color="#2F2F2F" />
            <span>Edit Filters</span>
          </div>
          <div className="flex items-center gap-x-3 rounded-[5px] font-medium border border-lightgray p-[5px] cursor-pointer">
            <EditRoadIcon size={20} color="#2F2F2F" />
            <span>Edit Columns</span>
          </div>
          <div className="flex items-center gap-x-3 rounded-[5px] bg-blue-700 p-[5px] cursor-pointer">
            <ArrowDown01Icon size={20} color="#FFFFFF" />
            <ArrowTurnBackwardIcon size={20} color="#FFFFFF" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBarSection;
