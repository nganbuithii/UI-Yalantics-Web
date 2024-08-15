'use client';
import { CiCircleCheck } from "react-icons/ci";


export default function BenefitItem({ title, content, className }) {
    return (
        <div className={`relative mx-2 ${className} `}>
            <CiCircleCheck className="text-orange-500 text-4xl font-bold mb-4" />

            <h4 className="leading-8 text-xl font-semibold text-[#1c1e24] tracking-wide mb-4 ">{title}</h4>

            <p className='text-[#494b50] tracking-wide text-lg mt-9'>{content}</p>


        </div>
    );
}
