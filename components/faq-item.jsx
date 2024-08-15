'use client';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import 'animate.css';

export default function FAQ({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-[65%] mx-auto text-center mt-3 xl:w-[85%]'>
            <Accordion type="single" collapsible onValueChange={(value) => setIsOpen(value === 'item-1')}>
                <AccordionItem value="item-1" className='w-full'>
                    <AccordionTrigger className='bg-white px-8 py-6 text-xl flex items-center justify-between w-full'>
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
