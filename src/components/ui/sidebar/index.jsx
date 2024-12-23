"use client";
import { AgentSkill, AgentSkillModal } from "@/components";
import {
  ArrowDown01Icon,
  AudioBook03Icon,
  CallAdd02Icon,
  ClipboardIcon,
  Clock01Icon,
  CreditCardChangeIcon,
  CubeIcon,
  DashboardCircleAddIcon,
  DashboardSquare01Icon,
  File02Icon,
  FileAudioIcon,
  FileStarIcon,
  FileYenIcon,
  FolderShared01Icon,
  Hamburger01Icon,
  Home01Icon,
  Home11Icon,
  Invoice01Icon,
  Megaphone01Icon,
  Menu01Icon,
  PinIcon,
  Profile02Icon,
  Rocket01Icon,
  TaskEdit02Icon,
  UserIcon,
  UserShield02Icon,
} from "hugeicons-react";
import Link from "next/link";
import React, { useState } from "react";

const sidebarItems = [
  {
    id: 1,
    icon: <Home11Icon />,
    label: "Home",
  },
  {
    id: 2,
    icon: <Clock01Icon size={22} color="#2F2F2F" />,
    label: "Recent",
    arrow: <ArrowDown01Icon />,
  },
  {
    id: 3,
    icon: <PinIcon size={20} color="#2F2F2F" />,
    label: "Pinned",
    arrow: <ArrowDown01Icon />,
  },
  {
    id: 14,
    icon: <Profile02Icon size={20} color="#2F2F2F" />,
    label: "Agent Skill",
  },
  {
    id: 4,
    header: "My work",
    items: [
      {
        id: 41,
        icon: <Rocket01Icon size={22} color="#2F2F2F" />,
        label: "Sales accelerator",
      },
      {
        id: 42,
        icon: <DashboardCircleAddIcon size={22} color="#2F2F2F" />,
        label: "Dashboard",
      },
      {
        id: 43,
        icon: <TaskEdit02Icon size={22} color="#2F2F2F" />,
        label: "Activities",
      },
    ],
  },
  {
    id: 5,
    header: "Customers",
    items: [
      {
        id: 51,
        icon: <FolderShared01Icon size={22} color="#2F2F2F" />,
        label: "Accounts",
      },
      {
        id: 52,
        icon: <UserIcon size={22} color="#2F2F2F" />,
        label: "Contacts",
      },
    ],
  },
  {
    id: 6,
    header: "Sales",
    items: [
      {
        id: 61,
        icon: <CallAdd02Icon size={22} color="#2F2F2F" />,
        label: "Leads",
      },
      {
        id: 62,
        icon: <CreditCardChangeIcon size={22} color="#2F2F2F" />,
        label: "Opportunities",
      },
      {
        id: 63,
        icon: <UserShield02Icon size={22} color="#2F2F2F" />,
        label: "Competitors",
      },
    ],
  },
  {
    id: 7,
    header: "Collateral",
    items: [
      {
        id: 71,
        icon: <FileStarIcon size={22} color="#2F2F2F" />,
        label: "Quotes",
      },
      {
        id: 72,
        icon: <File02Icon size={22} color="#2F2F2F" />,
        label: "Orders",
      },
      {
        id: 75,
        icon: <Invoice01Icon size={22} color="#2F2F2F" />,
        label: "Invoices",
      },
      {
        id: 73,
        icon: <CubeIcon size={22} color="#2F2F2F" />,
        label: "Products",
      },
      {
        id: 74,
        icon: <FileYenIcon size={22} color="#2F2F2F" />,
        label: "Sales Literature",
      },
    ],
  },
  {
    id: 8,
    header: "Marketing",
    items: [
      {
        id: 81,
        icon: <FileAudioIcon size={22} color="#2F2F2F" />,
        label: "Marketing Lists",
      },
      {
        id: 82,
        icon: <Megaphone01Icon size={22} color="#2F2F2F" />,
        label: "Quick Campaigns",
      },
    ],
  },
  {
    id: 9,
    header: "Perfomance",
    items: [
      {
        id: 91,
        icon: <Rocket01Icon size={22} color="#2F2F2F" />,
        label: "Sales",
      },
      {
        id: 92,
        icon: <DashboardSquare01Icon size={22} color="#2F2F2F" />,
        label: "Quick Campaigns",
      },
    ],
  },
];

const Sidebar = ({}) => {
  const [activeId, setActiveId] = useState();
  const [closeMenu, setCloseMenu] = useState(true);
  const [showAgent, setShowAgent] = useState(false);

  const handleAgentClick = (value) => {
    setShowAgent(value);
  };

  return (
    <>
      {showAgent && (
        <div className="absolute z-50 left-[30%] top-[20%]">
          <AgentSkillModal handleCloseClick={() => setShowAgent(false)} />
        </div>
      )}
      <div className={`${!closeMenu && "hidden"} absolute left-3 top-12 z-20`}>
        <Menu01Icon
          size={28}
          strokeWidth={2}
          color="#2F2F2F"
          className="cursor-pointer"
          onClick={() => setCloseMenu(false)}
        />
      </div>

      <section
        className={`animate-slide_left z-50 h-full w-[15%] overflow-y-auto border-r-2 border-[#D0D5DD] bg-lightgray ${closeMenu && "hidden"}`}
      >
        <div className="flex w-full flex-col gap-y-6">
          <div className="my-6 flex flex-col">
            <div className="flex flex-col gap-y-4">
              <div className="pl-4">
                <Menu01Icon
                  size={22}
                  color="#2F2F2F"
                  className="cursor-pointer"
                  onClick={() => setCloseMenu(true)}
                />
              </div>
              {sidebarItems.map((item) => (
                <div key={item.id} className="mt-4 flex flex-col gap-y-4">
                  {item.header && (
                    <span className="px-4 text-base font-semibold">
                      {item.header}
                    </span>
                  )}
                  {item.items ? (
                    item.items.map((subItem) => (
                      <div
                        key={subItem.id}
                        className="transition-colors ease-in hover:cursor-pointer hover:bg-primary"
                      >
                        <div className="flex items-center gap-x-3 px-4 py-2">
                          {subItem.icon}
                          <span className="text-[15px] font-normal">
                            {subItem.label}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div
                      className="transition-colors ease-in hover:cursor-pointer hover:bg-primary"
                      onClick={() => {
                        if (item.label === "Agent Skill") {
                          handleAgentClick(true);
                        }
                      }}
                    >
                      <div className="flex w-full items-center justify-between px-4">
                        <div className="flex w-full items-center gap-x-3 py-2">
                          {item.icon}
                          <span className="text-[15px] font-normal">
                            {item.label}
                          </span>
                        </div>
                        {item.arrow}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
