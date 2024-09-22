"use client"
import { useState } from "react";
import HeatmapGrid from "./HeatmapGrid";
import './styles.css';
import SubmissionForm from "./SubmissionForm";
import { FaCalendarAlt } from "react-icons/fa";

const HeatmapCalendar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const [selectedDate, setSelectedDate] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [activityData, setActivityData] = useState([
        { date: '2024-09-01', count: 5 },
        { date: '2024-09-02', count: 10 },
        { date: '2024-09-03', count: 0 },
        { date: '2024-09-04', count: 7 },
        { date: '2024-09-05', count: 12 },
        { date: '2024-09-06', count: 8 },
        { date: '2024-09-07', count: 6 },
        { date: '2024-09-08', count: 4 },
        { date: '2024-09-09', count: 9 },
        { date: '2024-09-10', count: 11 },
        { date: '2024-09-11', count: 15 },
        { date: '2024-09-12', count: 6 },
        { date: '2024-09-13', count: 8 },
        { date: '2024-09-14', count: 3 },
        { date: '2024-09-15', count: 7 },
        { date: '2024-09-16', count: 10 },
        { date: '2024-09-17', count: 14 },
        { date: '2024-09-18', count: 5 },
        { date: '2024-09-19', count: 9 },
        { date: '2024-09-20', count: 12 },
        { date: '2024-09-21', count: 7 },
        { date: '2024-09-22', count: 5 },
        { date: '2024-09-23', count: 11 },
        { date: '2024-09-24', count: 6 },
        { date: '2024-09-25', count: 8 },
        { date: '2024-09-26', count: 4 },
        { date: '2024-09-27', count: 9 },
        { date: '2024-09-28', count: 13 },
        { date: '2024-09-29', count: 3 },
        { date: '2024-09-30', count: 0 },
        { date: '2024-10-01', count: 6 },
        { date: '2024-10-02', count: 8 },
        { date: '2024-10-03', count: 5 },
        { date: '2024-10-04', count: 9 },
        { date: '2024-10-05', count: 12 },
        { date: '2024-10-06', count: 7 },
        { date: '2024-10-07', count: 11 },
        { date: '2024-10-08', count: 14 },
        { date: '2024-10-09', count: 0 },
        { date: '2024-10-10', count: 8 },
        { date: '2024-10-11', count: 15 },
        { date: '2024-10-12', count: 6 },
        { date: '2024-10-13', count: 8 },
        { date: '2024-10-14', count: 3 },
        { date: '2024-10-15', count: 7 },
        { date: '2024-10-16', count: 10 },
        { date: '2024-10-17', count: 14 },
        { date: '2024-10-18', count: 5 },
        { date: '2024-10-19', count: 9 },
        { date: '2024-10-20', count: 12 },
        { date: '2024-10-21', count: 7 },
        { date: '2024-10-22', count: 5 },
        { date: '2024-10-23', count: 11 },
        { date: '2024-10-24', count: 6 },
        { date: '2024-10-25', count: 8 },
        { date: '2024-10-26', count: 4 },
        { date: '2024-10-27', count: 9 },
        { date: '2024-10-28', count: 13 },
        { date: '2024-10-29', count: 3 },
        { date: '2024-10-30', count: 10 },
        { date: '2024-11-01', count: 6 },
        { date: '2024-11-02', count: 8 },
        { date: '2024-11-03', count: 5 },
        { date: '2024-11-04', count: 9 },
        { date: '2024-11-05', count: 12 },
        { date: '2024-11-06', count: 7 },
        { date: '2024-11-07', count: 11 },
        { date: '2024-11-08', count: 14 },
        { date: '2024-11-09', count: 4 },
        { date: '2024-11-10', count: 8 },
        { date: '2024-11-11', count: 1 },
        { date: '2024-11-12', count: 7 },
        { date: '2024-11-13', count: 12 },
        { date: '2024-11-14', count: 3 },
        { date: '2024-11-15', count: 7 },
        { date: '2024-11-16', count: 10 },
        { date: '2024-11-17', count: 14 },
        { date: '2024-11-18', count: 5 },
        { date: '2024-11-19', count: 9 },
        { date: '2024-11-20', count: 12 },
        { date: '2024-11-21', count: 7 },
        { date: '2024-11-22', count: 5 },
        { date: '2024-11-23', count: 11 },
        { date: '2024-11-24', count: 6 },
        { date: '2024-11-25', count: 8 },
        { date: '2024-11-26', count: 4 },
        { date: '2024-11-27', count: 9 },
        { date: '2024-11-28', count: 13 },
        { date: '2024-11-29', count: 3 },
        { date: '2024-11-30', count: 10 },
        { date: '2024-11-31', count: 10 },
        { date: '2024-12-01', count: 6 },
        { date: '2024-12-02', count: 8 },
        { date: '2024-12-03', count: 0 },
        { date: '2024-12-04', count: 9 },
        { date: '2024-12-05', count: 12 },
        { date: '2024-12-06', count: 7 },
        { date: '2024-12-07', count: 11 },
        { date: '2024-12-08', count: 14 },
        { date: '2024-12-09', count: 4 },
        { date: '2024-12-10', count: 8 },
        { date: '2024-12-11', count: 1 },
        { date: '2024-12-12', count: 7 },
        { date: '2024-12-13', count: 12 },
    ]);

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setIsFormVisible(true);
    };

    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

    const handleFormSubmit = (newEntry) => {
        // Check if the date already exists
        const existingIndex = activityData.findIndex(entry => entry.date === newEntry.date);
        let updatedData;

        if (existingIndex >= 0) {
            // Update existing entry
            updatedData = [...activityData];
            updatedData[existingIndex].count = newEntry.count;
        } else {
            // Add new entry
            updatedData = [...activityData, newEntry];
        }

        setActivityData(updatedData);
        setIsFormVisible(false); // Close form after submission
    };

    const [isHovered, setHovered] = useState(false);
    const hover = () => {
        setHovered(!isHovered);
    }



    return (
        <div className='overflow-x-auto rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
            <div className='flex flex-row justify-between px-12'>
                <h1 className='text-2xl'>Gym</h1>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-600 font-semibold">2024</span>
                    <div className="relative flex items-center justify-center">
                        <FaCalendarAlt className="text-gray-800" onClick={toggleDropdown} />
                    </div>
                </div>
            </div>
            {isDropdownVisible && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <ul className="py-1">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                    </ul>
                </div>
            )}
            <span className='flex flex-row justify-around py-2 text-black-300 text-xs text-right pl-12 pr-3'>
                <span className={isHovered ? 'underline' : ''}>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
            </span>
            <section className='w-full flex flex-row justify-center items-center'>
                <div className='flex'>
                    <span className='flex flex-col justify-around py-2 text-black-300 text-xs text-right pr-3'>
                        <span>Mon</span>
                        <span>Wed</span>
                        <span>Fri</span>
                    </span>
                    <HeatmapGrid startDate={'2024-01-01'} endDate={'2024-12-31'} dataValues={activityData} onDateClick={handleDateClick} />
                </div>
            </section>
            {isFormVisible && <SubmissionForm date={selectedDate} onClose={handleCloseForm} onSubmit={handleFormSubmit} />}
        </div>

    )

}

export default HeatmapCalendar;