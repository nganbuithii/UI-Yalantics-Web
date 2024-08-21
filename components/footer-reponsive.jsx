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
                        <div class="w-2/3 mx-auto sm:hidden lg:block md:block md:pb-4">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=" lg:text-[24px] md:text-[24px] md:pb-[25px] lg:pb-[25px]">Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div class="w-2/3 mx-auto sm:hidden lg:block md:block md:pb-4">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=" lg:text-[24px] md:text-[24px] md:pb-[25px] lg:pb-[25px]">Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div class="w-2/3 mx-auto sm:hidden lg:block md:block md:pb-4">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=" lg:text-[24px] md:text-[24px] md:pb-[25px] lg:pb-[25px]">Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div class="w-2/3 mx-auto sm:hidden lg:block md:block md:pb-4">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=" lg:text-[24px] md:text-[24px] md:pb-[25px] lg:pb-[25px]">Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div class="w-2/3 mx-auto sm:hidden lg:block md:block md:pb-4">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=" lg:text-[24px] md:text-[24px] md:pb-[25px] lg:pb-[25px]">Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div className="flex md:flex-row mt-16 sm:flex-col sm:justify-center ">
                            <div className="md:w-1/2 sm:w-[90%] mx-auto">
                                <div className="lg:text-center">
                                    <Button className="border-2 main-bg border-orange-500 text-white hover:bg-orange-600 md:px-12 md:py-7 rounded-full text-lg font-semibold transition duration-300 ease-in-out sm:w-full sm:py-7
            lg:w-1/2 lg:text-center lg:text-lg
            md:w-1/2 md:text-orange-500 md:text-base
        ">
                                        CONTACT US
                                    </Button>
                                </div>
                                <div className="flex flex-col md:flex-row mt-10 md:justify-center md:items-center">
                                    <div className="md:mx-4">
                                        <FaLinkedin className="lg:text-4xl md:text-2xl text-gray-400" />
                                    </div>
                                    <div className="md:mx-4">
                                        <FaFacebookSquare className="lg:text-4xl md:text-2xl text-gray-400" />
                                    </div>
                                    <div className="md:mx-4">
                                        <FaGithub className="lg:text-4xl md:text-2xl text-gray-400" />
                                    </div>
                                    <div className="md:mx-4">
                                        <FaInstagram className="lg:text-4xl md:text-2xl text-gray-400" />
                                    </div>
                                    <div className="md:mx-4">
                                        <FaYoutube className="lg:text-4xl md:text-2xl text-gray-400" />
                                    </div>
                                </div>
                                <div className="flex justify-center mt-10 md:mt-7">
                                    <Image
                                        src="/images/footer.png"
                                        // className="my-16"
                                        alt="logo"
                                        width={280}
                                        height={200}
                                    />
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