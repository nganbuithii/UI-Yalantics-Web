import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "./ui/button"
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import Image from "next/image"
import Link from "next/link"


export default function FooterRes({ className }) {
    return (
        <>
            <div className={`${className}`}>
                <footer className="main-bg flex flex-row pt-10  text-white pb-28">
                    <section className="w-full ml-14 ">
                        <div class="w-2/3 mx-auto sm:hidden">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=" lg:text-[24px] md:text-[24px] md:pb-[25px] lg:pb-[25px]">Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div class="w-2/3 mx-auto sm:hidden">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=" lg:text-[24px] md:text-[24px] md:pb-[25px] lg:pb-[25px]">Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div class="w-2/3 mx-auto sm:hidden">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=" lg:text-[24px] md:text-[24px] md:pb-[25px] lg:pb-[25px]">Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div class="w-2/3 mx-auto sm:hidden">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=" lg:text-[24px] md:text-[24px] md:pb-[25px] lg:pb-[25px]">Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div class="w-2/3 mx-auto sm:hidden">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=" lg:text-[24px] md:text-[24px] md:pb-[25px] lg:pb-[25px]">Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div className="flex md:flex-row mt-16 sm:flex-col sm:justify-center">
                            <div className="md:w-1/2 sm:w-full ">
                                <div>
                                    <Button className="border-2 main-bg border-orange-500 text-white hover:bg-orange-600 md:px-12 md:py-7 rounded-full text-lg font-semibold transition duration-300 ease-in-out sm:w-full">
                                        CONTACT US
                                    </Button>

                                </div>
                                <div className="flex flex-row mt-10 ">
                                    <div>
                                        <FaLinkedin className="text-4xl text-gray-400 mr-8" />
                                    </div>
                                    <div>
                                        <FaFacebookSquare className="text-4xl text-gray-400 mr-8" />
                                    </div>
                                    <div>
                                        <FaGithub className="text-4xl text-gray-400 mr-8" />
                                    </div>
                                    <div>
                                        <FaInstagram className="text-4xl text-gray-400 mr-8" />
                                    </div>
                                    <div>
                                        <FaYoutube className="text-4xl text-gray-400 mr-8" />
                                    </div>
                                </div>
                                <div>
                                    <Image src="/images/footer.png" className="my-16" alt="logo" width={280} height={200}></Image>
                                </div>
                            </div>

                            <div className="md:w-1/2 flex flex-col md:items-end sm:w-full sm:items-center">
                                <Image src="/images/logo_white.svg" alt="logo" width={150} height={150} className="mb-6 mr-10" />
                                <p className="mt-6 text-sm text-gray-400 md:text-right mr-10 sm:text-center">
                                    ©Copyright 2024 Yalantis – Software engineering and IT consulting company. All rights reserved
                                </p>
                                <div className="mt-10 md:text-right sm:text-center">
                                    <p className="text-gray-400 underline mb-3 mr-10">Cookie Notice</p>
                                    <p className="text-gray-400 underline mb-3 mr-10">Private Notice</p>
                                    <p className="text-gray-400 underline mb-3 mr-10">Quantity Policy</p>
                                    <p className="text-gray-400 underline mb-3 mr-10">Yalantis Sustainability Policy</p>
                                </div>
                            </div>

                        </div>



                    </section>


                </footer>
            </div>
        </>
    )
}