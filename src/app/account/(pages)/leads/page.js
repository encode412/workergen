"use client"
import React, { useState } from "react";
import { InsightSection, TableSection, TopBarSection } from "./_components";

const LeadsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState({});

  const handleSelected = (value) => {
    setSelected(value);
  };

  const handleModal = (value) => {
    setShowModal(value);
  };
  return (
    <section className="flex flex-col gap-y-4">
      <TopBarSection />
      <InsightSection setSelected={handleSelected} setShowModal={handleModal} />
      <TableSection showModal={showModal} setShowSelected={setShowModal} setLead={setSelected} selected={selected} />
    </section>
  );
};

export default LeadsPage;
