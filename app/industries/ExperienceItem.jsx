'use client';
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

export default function ExperienceItem({ title, content, className }) {
    return (
        <div className={`relative ${className} `}>
            <h4 className="text-xl font-semibold text-white">{title}</h4>

            <p className='text-[#d2d2d3;] tracking-wide text-lg '>{content}</p>

            <div className="flex flex-row items-center space-x-2">
                <p className="text-base">READ MORE</p>
                <GoArrowRight />
            </div>
            <Image 
                src="/images/indus1.webp" 
                alt="Description of the image" 
                width={100} 
                height={100} 
                className="absolute object-cover"
            />
        </div>
    );
}
