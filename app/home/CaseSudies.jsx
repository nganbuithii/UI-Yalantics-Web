'use client';
import { Button } from '@/components/ui/button';
import 'animate.css';
import { FaSquareFull } from "react-icons/fa";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";

export default function CaseStudies({ title, items = [], className, image }) {
    return (
        <section className={`hover:bg-[url('https://yalantis.com/wp-content/uploads/2024/03/oxygen.webp')]  group bg-no-repeat bg-center relative border border-orange-100 px-10 py-6 sm:mx-3 xl:mx-0 lg:mx-0 md:mx-0 ${className}  xs:mx-3 relative`}>
            <h4 className="font-bold 2xl:text-2xl text-white sm:pt-10 sm:mb-16 tracking-wide leading-10 md:text-[18px] sm:text-xl xs:pt-3 xs:mb-10">{title}</h4>

            {items.map((item, index) => (
                <div key={index} className="font-normal 2xl:text-base leading-6 text-[#d2d2d3] flex items-baseline pl-7.5 py-4 ">
                    <FaSquareFull color="#f97316" className="text-orange-600 mr-7" fontSize={10} />
                    <p className="leading-6 tracking-wide 2xl:text-xl md:text-[16px]" >{item}</p>
                </div>
            ))}

            <div className='relative w-full ' >
                <Button className=" text-white bg-transparent px-6 py-2 text-xl duration-300 ease-in-out hover:bg-transparent mt-20 xl:text-[18px] xl:px-4  max-xl:px-4
            md:text-[16px] md:mr-16 sm:text-base xs:text-base">
                    SEE FULL CASE STUDIES


                </Button>
                <div className='absolute right-0 bottom-0'>
                <GoArrowDownRight className="absolute bottom-0 right-20 transform -translate-y-1/2 text-5xl text-orange-600 transition-opacity duration-300 ease-in-out group-hover:opacity-0
                xl:right-5 xl:text-4xl 
                sm:left-2/3
                md:text-xl xs:text-2xl  xs:bottom-[15px]
                " />
                <GoArrowUpRight className="absolute bottom-0 right-20 transform -translate-y-1/2 text-5xl text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100
                  xl:right-5 xl:text-4xl  sm:left-2/3
                md:text-xl  xs:text-2xl    xs:bottom-[15px]
                " />
                </div>

               
            </div>
        </section>
    );
}
