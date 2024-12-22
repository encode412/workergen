"use client";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <div className="flex w-full">
      <div className="relative ml-16 flex w-3/4 items-center justify-center">
        <input
          type="text"
          name="search"
          id="search"
          className="w-1/2 rounded-[5px] border border-[#AEAEAE] px-10 py-2 placeholder:text-xs placeholder:font-medium placeholder:text-[#AEAEAE] md:placeholder:text-sm"
          placeholder="Search"
        />{" "}
      </div>

      <div className="ml-auto flex w-fit items-center gap-x-3 px-8">
        <div className="relative z-20">
          <div className="bg-lightblue text-primary absolute bottom-[16px] left-[10px] flex h-[20px] w-[20px] items-center justify-center rounded-[50%] font-semibold">
            5
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="flex flex-col"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
