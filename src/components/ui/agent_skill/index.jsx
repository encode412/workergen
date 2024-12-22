"use client";
import { CoPilotLogo, D365Icon, OutlookIcon } from "@/constants/images";
import {
  ArrowDown01Icon,
  ArrowUp01Icon,
  ArrowUpRight01Icon,
  Cancel01Icon,
  File01Icon,
  Menu02Icon,
  Profile02Icon,
  ProfileIcon,
} from "hugeicons-react";
import Image from "next/image";
import React, { useState } from "react";

const AgentSkill = ({ handleCloseClick }) => {
  const [emails, setEmails] = useState([]);
  const [newEmail, setNewEmail] = useState("");

  const handleAddEmail = () => {
    if (newEmail.trim() !== "") {
      setEmails([...emails, newEmail]);
      setNewEmail("");
    }
  };

  const handleDeleteEmail = (index) => {
    const updatedEmails = [...emails];
    updatedEmails.splice(index, 1);
    setEmails(updatedEmails);
  };
  return (
    <div className="shadow-4xl h-[90%] w-[70%] animate-slide_up overflow-y-auto rounded-[10px] bg-primary px-10 py-3 drop-shadow-2xl">
      <div className="flex justify-end">
        <Cancel01Icon onClick={handleCloseClick} className="cursor-pointer" />
      </div>
      <div className="flex h-full flex-col justify-between gap-y-3 py-10">
        <div className="flex items-center gap-x-2">
          <Image width={25} height={25} src={CoPilotLogo} alt="copilot" />
          <span className="text-xl font-semibold text-dark">Agent skill</span>
        </div>
        <div className="rounded-[8px] bg-primary px-6 py-2 drop-shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-base font-medium text-dark">
              Check if on-hand delivery will allow all sales order to ship
              without delay
            </span>
            <ArrowUp01Icon />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 py-4 text-base text-dark">
              When
              <div className="flex items-center gap-x-1 rounded-[5px] bg-[#DAE4FD] p-2 py-1 text-sm text-[#372a8d]">
                <Profile02Icon /> <span>any vendor</span>
              </div>
              sends an email with changes to
              <div className="flex items-center gap-x-1 rounded-[5px] bg-[#DAE4FD] p-2 py-1 text-sm text-[#372a8d]">
                <File01Icon /> <span>confirmed purchase orders,</span>
              </div>
              check if the resulting
              <div className="flex items-center gap-x-1 rounded-[5px] bg-[#DAE4FD] p-2 py-1 text-sm text-[#372a8d]">
                <Menu02Icon /> <span>on-hand delivery will allow</span>
              </div>
              <div className="flex items-center gap-x-1 rounded-[5px] bg-[#DAE4FD] p-2 py-1 text-sm text-[#372a8d]">
                <File01Icon /> <span>all sales orders</span> to
              </div>
              <div className="flex items-center gap-x-1 rounded-[5px] bg-[#DAE4FD] p-2 py-1 text-sm text-[#372a8d]">
                <ArrowUpRight01Icon /> <span>ship without delay.</span>
              </div>
              If so,
              <div className="flex items-center gap-x-1 rounded-[5px] bg-[#DAE4FD] p-2 py-1 text-sm text-[#372a8d]">
                <ArrowUpRight01Icon /> <span>update the purchase order</span>
              </div>
              to reflect the change
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <Image alt="outlook" width={20} height={20} src={OutlookIcon} />
            <span className="text-lg font-semibold text-dark">
              Enable email access
            </span>
          </div>
          <span>
            Allow the agent to access email inboxes to read mail from unknown
            vendors
          </span>
          <div className="flex items-center gap-x-2">
            <div className="relative w-full">
              <input
                type="email"
                name="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full rounded-[5px] border border-[#bebebe] px-3 py-2 text-right"
              />
              <div className="absolute flex items-center gap-x-2 text-sm top-[4px] left-[10px]">
                {emails.map((email, index) => (
                  <div key={index} className="flex items-center gap-x-2 px-2 py-1 bg-lightgray">
                    <span>{email}</span>
                    <Cancel01Icon onClick={() => handleDeleteEmail(index)} size={20} className="cursor-pointer" />
                  </div>
                ))}
              </div>
            </div>
            <button
              className="w-[20%] rounded-[5px] bg-[#110faf] py-2 font-medium text-primary"
              onClick={handleAddEmail}
            >
              Allow access
            </button>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-end gap-x-2">
          <button className="rounded-[5px] bg-lightgray px-2 py-1 font-medium text-gray">
            Activate
          </button>
          <button className="rounded-[5px] border border-lightgray bg-primary px-2 py-1 font-medium text-dark">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentSkill;
