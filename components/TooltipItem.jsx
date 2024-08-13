'use client'
import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import Image from 'next/image';
import { MdLocationOn } from 'react-icons/md';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const TooltipItem = ({ imageSrc, location, tooltipContent }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div
                        className="text-xl flex flex-row items-center cursor-pointer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Image src={imageSrc} alt="flag" width={40} height={20} />
                        <p className="ml-3">{location}</p>
                        {isHovered ? (
                            <RiArrowDropUpLine className="text-xl" />
                        ) : (
                            <RiArrowDropDownLine className="text-xl" />
                        )}
                    </div>
                </TooltipTrigger>
                <TooltipContent className="data-[state=open]:animate-slide-up data-[state=closed]:animate-slide-down">
                    <div className="flex flex-row">
                        <MdLocationOn className="text-orange-500 mr-3" />
                        <p>{tooltipContent}</p>
                    </div>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default TooltipItem;
