"use client";
import React, { useState } from "react";
import { Habit } from "../../../model/api";
import { twMerge } from "tailwind-merge";
import HeatmapCalendar from "./HeatmapCalendar";

const HeatmapContent = ({ className, ...props }) => {
  let habits: Array<Habit> = [
    { id: 1, name: "Gym" },
    { id: 2, name: "Running", metrics: "Miles" },
    { id: 3, name: "Reading", metrics: "Pages" },
  ];

  const [habtis, setHabits] = useState(Array<Habit>);

  return habits && habits.length > 0 ? (
    <div
      className={twMerge("grid gap-6 grid-cols-1 md:gap-10", className)}
      {...props}
    >
      <div className="overflow-x-auto rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-row lg:justify-between lg:p-4">
        <p>Search bar...</p>
        <button className="p-2 w-36 rounded cursor-pointer bg-indigo-400">
          New Habit
        </button>
      </div>

      {habits.map((habit, index) => {
        return habit ? <HeatmapCalendar /> : null;
      })}
    </div>
  ) : null;
};

export default HeatmapContent;
