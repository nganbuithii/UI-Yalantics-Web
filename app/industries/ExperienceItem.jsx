'use client';
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

export default function ExperienceItem({ title, content, className }) {
    return (
        <div className={`relative mx-2 ${className} group`}>
            <h4 className="leading-8 text-xl font-semibold text-white">{title}</h4>

            <p className='text-[#d2d2d3] tracking-wide mt-2.5 text-lg'>{content}</p>

            <div className="flex flex-row items-center space-x-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-base text-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out group-hover:text-orange-500">
                    READ MORE
                </p>
                <GoArrowRight className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out group-hover:text-orange-500" />
            </div>
            
            <Image 
                src="/images/indus1.webp" 
                alt="Description of the image" 
                width={220} 
                height={220} 
                className="absolute right-0 bottom-0 top-0 object-cover"
            />
        </div>
    );
}
