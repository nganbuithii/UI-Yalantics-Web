'use client';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import 'animate.css';

export default function FAQ({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='2xl:w-[65%] mx-auto text-center mt-3 xl:w-[75%] lg:w-[90%] md:w-[90%] sm:w-[98%]
        md:text-base xs:w-[90%] xs:mx-auto'>
            <Accordion type="single" collapsible onValueChange={(value) => setIsOpen(value === 'item-1')}>
                <AccordionItem value="item-1" className='w-full'>
                    <AccordionTrigger className='bg-white px-8 py-6 text-xl flex items-center 
                    sm:text-lg justify-between w-full xl:px-6 max-xl:px-6 xl:py-4 max-xl:py-4 tracking-wide xs:text-base
                    md:' >
                        <span>{title}</span>
                        <span>
                            {isOpen ? <FaMinus /> : <FaPlus />}
                        </span>
                    </AccordionTrigger>
                    <AccordionContent className='text-xl w-full mx-auto text-center p-4'>
                        <div className='flex justify-center'>
                            {content}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
