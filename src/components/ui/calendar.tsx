import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CalendarProps = {
    className?: string;
};

const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

const getYears = (startYear: number, numYears = 9) => {
    return Array.from({ length: numYears }, (_, i) => startYear + i);
};

function EtavoltCalendar({ className }: CalendarProps) {
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [viewMode, setViewMode] = useState<'year' | 'month'>('year');

    const startYear = Math.floor(selectedYear / 9) * 9 + 1;

    const handlePrevYears = () => setSelectedYear((prevYear) => prevYear - 9);
    const handleNextYears = () => setSelectedYear((prevYear) => prevYear + 9);

    const handleYearSelect = (year: number) => {
        setSelectedYear(year);
        setViewMode('month');
    };

    const handleMonthSelect = (monthIndex: number) => setSelectedMonth(monthIndex);

    const handleOk = () => {
        // console.log(`Selected Date: ${months[selectedMonth]} ${selectedYear}`);
    };

    const handleCancel = () => {
        setSelectedYear(new Date().getFullYear());
        setSelectedMonth(new Date().getMonth());
        setViewMode('year');
    };

    return (
        <div className={`p-4 rounded-lg shadow-md w-64 bg-white ${className}`}>
            <div className="flex justify-between items-center mb-4">
                {viewMode === 'year' ? (
                    <>
                        <button
                            className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"                            
                            onClick={handlePrevYears}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <div className="text-lg font-semibold">
                            {startYear} - {startYear + 8}
                        </div>
                        <button
                            className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                            onClick={handleNextYears}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                            onClick={() => setViewMode('year')}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <div className="text-lg font-semibold">{selectedYear}</div>
                        <span className="h-7 w-7" />
                    </>
                )}
            </div>

            {viewMode === 'year' ? (
                <div className="grid grid-cols-3 gap-2">
                    {getYears(startYear, 9).map((year) => (
                        <button
                            key={year}
                            onClick={() => handleYearSelect(year)}
                            className={`py-2 px-3  flex items-center justify-center text-sm rounded-full ${year === selectedYear
                                ? "bg-[#D0F0DD] text-[#1E8E32] border " // selected
                                : "bg-white text-black"
                                } hover:shadow-sm hover:bg-[#D0F0DD] hover:text-[#1E8E32]  `}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-2">
                    {months.map((month, index) => (
                        <button
                            key={month}
                            onClick={() => handleMonthSelect(index)}
                            className={`py-2 px-3 text-sm rounded-full ${index === selectedMonth
                                ? "bg-[#D0F0DD] text-[#1E8E32] border border-[#D0F0DD]"
                                : "bg-white text-black"
                                } hover:bg-[#D0F0DD] hover:text-[#1E8E32] hover:shadow-sm `}
                        >
                            {month}
                        </button>
                    ))}
                </div>
            )}

            <div className="mt-4 flex justify-between gap-2">
                <button
                    className=" text-sm py-1 px-4 rounded bg-white hover:bg-gray-400 border border-[#E5E7EB] flex-grow text-center"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                <button
                    className=" text-sm py-1 px-4 rounded bg-[#22AA39] border border-[#22AA39] text-white hover:bg-green-600 flex-grow text-center"
                    onClick={handleOk}
                >
                    OK
                </button>
            </div>


        </div>
    );
}

export { EtavoltCalendar };