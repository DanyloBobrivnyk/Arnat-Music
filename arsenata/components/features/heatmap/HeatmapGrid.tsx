"use client"
import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import './styles.css';  
type DataValue = {
  date: string;
  count: number;
};

type HeatmapGridProps = {
  startDate: string;
  endDate: string;
  dataValues?: DataValue[];
  onDateClick: (date: string) => void;
    // Adjust the type according to the actual data
};

const HeatmapGrid = ({ startDate, endDate, dataValues = [], onDateClick  }: HeatmapGridProps) => {
  let startingDate = new Date(startDate);
  let endingDate = new Date(endDate);
  const daysInMonth = Math.ceil((endingDate.getTime() - startingDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  const calenderGrid = Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(startingDate);
    date.setDate(startingDate.getDate() + i);
    return date.toISOString().slice(0, 10);
  });

  const highestValue = Array.isArray(dataValues)
    ? dataValues.reduce((a, b) => Math.max(a, b.count), -Infinity)
    : -Infinity;

  const getIntensity = (activityCount: number) => {
    return highestValue !== 0 ? Number(activityCount / highestValue) : 0;
  };

  const getColorFromIntensity = (intensity: number) => {
    const colorCodes = ['#1CF3E3', '#FFCCCC', '#FFAAAA', '#FF8888', '#FF6666', '#FF4444'];
    const colorIndex = Math.min(Math.floor(intensity * colorCodes.length), colorCodes.length - 1);
    return colorCodes[colorIndex];
  };

  return (
    <div className='grid grid-flow-col gap-0.5' style={{ gridTemplateRows: 'repeat(7, minmax(0, 1fr))' }}>
      {
        calenderGrid.map((day) => {
          const activityCount = dataValues.find(item => item.date === day)?.count || 0;
          const intensity = getIntensity(activityCount);
          const color = getColorFromIntensity(intensity);

          return (
            <button
              key={day}
              onClick={() => onDateClick(day)}
              //todo: remove href={`/posts?date=${day}`}
              className = {twMerge([
                'w-4 h-4 rounded cursor-pointer border-zinc-150',
                'hover-triger'
              ], activityCount === 0 ? "border-2" : 'border-0')}
              //className='w-4 h-4 rounded cursor-pointer bg-gray-400'
              title={`${activityCount} Posts on ${day}`}
              style={{ backgroundColor: activityCount === 0 ? "#E5F7F6" : color }}
            >
            </button>
          );
        })
      }
    </div>
  );
};

export default HeatmapGrid;
