'use client';
import { Button } from '@/components/ui/button';
import 'animate.css';
import { FaArrowRight } from "react-icons/fa";

export default function Card({ title, content, className }) {
    return (
        <section className={`relative border border-orange-100 mx-3 px-10 py-10 mb-4 transition-transform transform hover:-translate-y-6 duration-300 ease-in-out group hover:bg-black ${className} `}>
            <h4 className="font-bold text-xl text-white pt-8 pb-8">{title}</h4>

            <p className='text-[#d2d2d3;] tracking-wide text-lg'>{content}</p>

            <Button className="text-white bg-transparent px-6 py-2 text-xl duration-300 ease-in-out group-hover:text-orange-600 pt-16 pb-8">
                READ MORE <FaArrowRight className="ml-5 group-hover:ml-10" />
            </Button>
        </section>
    );
}
