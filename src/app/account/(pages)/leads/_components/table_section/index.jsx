"use client";
import { demoLeadsDetails } from "@/constants";
import { CoPilotLogo } from "@/constants/images";
import { ArrowDown01Icon, ArrowDown02Icon } from "hugeicons-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SelectedLeadModal from "../modals/selected-lead";

const TableSection = ({
  showModal: ismodalShown,
  selected: selectedLead,
  setShowSelected,
  setLead,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState({});
  const [showTopicModal, setShowTopicModal] = useState(false);
  const [currentLeadTopic, setCurrentLeadTopic] = useState("");

  const filteredLeads = demoLeadsDetails.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.created_on.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    setShowModal(ismodalShown);
    setSelected(selectedLead);
  }, [ismodalShown, selectedLead]);

  const handleLeadClick = (lead) => {
    setSelected(lead);
    setShowModal(true);
  };

  const handleMouseOver = (lead) => {
    setShowTopicModal(true);
    setCurrentLeadTopic(lead.schedule_note);
  };

  const handleMouseOut = () => {
    setShowTopicModal(false);
  };

  const handleCloseModal = () => {
    localStorage.setItem("showModal", false);
    setShowModal(false);
    setShowSelected(false);
    setLead(false);
  };

  return (
    <div className="relative">
      {showModal && (
        <div className="fixed left-[20%] top-[10%] z-[999] h-full overflow-auto">
          <SelectedLeadModal
            lead={selected}
            handleCloseModal={handleCloseModal}
          />
        </div>
      )}
      <div className="w-full rounded-[4px] bg-primary shadow-lg">
        <div className="flex w-full flex-col px-4 py-3">
          <div className="relative w-[30%]">
            <input
              type="text"
              name="search"
              placeholder="Sort, filter and search with Copilot"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-[5px] border border-lightgray bg-primary px-3 py-2 text-gray focus:bg-primary focus:outline-none"
            />
            <Image
              alt="copilot"
              src={CoPilotLogo}
              width={30}
              height={30}
              className="absolute right-2 top-1"
            />
          </div>

          <table className="mt-4 w-full table-auto border-collapse">
            <thead>
              <tr className="text-dark">
                <th className="py-3 pl-4 font-semibold">
                  <div className="flex items-end gap-x-2">
                    <span>Name</span>
                    <ArrowDown01Icon color="#5F5F5F" size={24} />
                  </div>
                </th>
                <th className="py-3 pl-4 font-semibold">
                  <div className="flex items-center gap-x-2">
                    <span>Topic</span>
                    <ArrowDown01Icon color="#5F5F5F" size={24} />
                  </div>
                </th>
                <th className="py-3 pl-4 font-semibold">
                  <div className="flex items-center gap-x-2">
                    <span>Status reason</span>
                    <ArrowDown01Icon color="#5F5F5F" size={24} />
                  </div>
                </th>
                <th className="py-3 pl-4 font-semibold">
                  <div className="flex items-center gap-x-1">
                    <span>Created on</span>
                    <ArrowDown02Icon color="#5F5F5F" size={24} />
                    <ArrowDown01Icon color="#5F5F5F" size={24} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {showTopicModal && (
                <div className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] rounded-md bg-primary p-4 drop-shadow-lg">
                  <p>{currentLeadTopic}</p>
                </div>
              )}
              {filteredLeads.map((lead) => (
                <tr
                  key={lead.id}
                  className="cursor-pointer border-t border-lightgray hover:bg-lightgray"
                  onClick={() => handleLeadClick(lead)}
                  onMouseOver={() => handleMouseOver(lead)}
                  onMouseOut={handleMouseOut}
                >
                  <td className="py-4 pl-4">
                    <div className="flex gap-x-2">
                      <input type="checkbox" name="select_lead" />
                      <span className="text-[#3258c0]">{lead.name}</span>
                    </div>
                  </td>
                  <td className="py-2 pl-4">{lead.topic}</td>
                  <td className="py-2 pl-4">{lead.status}</td>
                  <td className="py-2 pl-4">{lead.created_on}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableSection;
