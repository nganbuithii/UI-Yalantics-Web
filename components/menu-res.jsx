import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function MenuRes() {
    return (
        <>
            <div className="mt-44 lg:bg-pink-400">
                <div className="lg:w-full lg:mx-auto">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="lg:text-[24px] lg:py-5 ">SERVICES</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
               <div className="lg:w-full lg:mx-auto">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="lg:text-[24px] lg:py-5 ">EXPERTISE</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
               <div className="lg:w-full lg:mx-auto">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="lg:text-[24px] lg:py-5 ">TECHNOLOGY</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
               <div className="lg:w-full lg:mx-auto">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="lg:text-[24px] lg:py-5 ">COMPANY</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="lg:w-full lg:mx-auto">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="lg:text-[24px] lg:py-5 ">COMPANY</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
            </div>

        </>
    )


}