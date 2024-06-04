import React, { useState } from 'react'

const SwitchTabs = ({data, onTabChange}) => {

    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);

    const activeTab = (tab, index) => {
        setLeft(index * 100);
        setTimeout(() => {
            setSelectedTab(index);
        }, 300);
        onTabChange(tab, index)
    }
    
    return (
        <div className="h-[34px] bg-white rounded-[20px] p-[2px]">
            <div className="flex items-center h-[30px] relative">
                {data.map((tab, index) => (
                    <span
                        key={index}
                        className={`h-full flex items-center justify-center w-[100px] text-blackOne text-xs relative z-10 cursor-pointer transition-colors duration-300 ${selectedTab === index ? "text-white" : ""}`}
                        onClick={() => activeTab(tab, index)}
                    >
                        {tab}
                    </span>
                ))}
                <span className="h-[30px] w-[100px] rounded-[15px] bg-gradient-to-r from-cyan-500 to-blue-500 absolute left-0 transition-left duration-300 transition-leftMove" style={{ left }} />
            </div>
        </div>
    )
}

export default SwitchTabs
