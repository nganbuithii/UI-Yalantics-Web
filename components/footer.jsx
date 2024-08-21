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


export default function Footer({className}) {
    return (
        <>
        <div className={`${className}`}>

     
            <footer className={`main-bg flex flex-row pt-10  text-white pb-28 xl:pt-[104px]`}>
                <section className="w-1/4 ml-14 ">
                    <div>
                        <p className="font-bold text-2xl">Services</p>
                        <p className="py-3">
                            custom software document
                        </p>
                        <p className="py-3">
                            deciate development team
                        </p>
                        <p className="py-3">It consulting</p>
                        <p className="py-3">Digital transformation</p>
                        <p className="py-3">Sraf augement services</p>
                    </div>
                    <div >
                        <p className="font-bold text-2xl mt-5">Success stories</p>
                        <p className="py-3">Client</p>
                        <p className="py-3">Case studies</p>
                    </div>

                    <div>
                        <p className="font-bold text-2xl mt-52">Company</p>
                        <p className="py-3">About</p>
                        <p className="py-3">Mission and value</p>
                        <p className="py-3">Management Team</p>
                        <p className="py-3">Industial conbution</p>
                        <p className="py-3">Our client and award</p>
                    </div>
                </section>

                <section className="w-1/4">
                    <div>
                        <p className=" text-2xl font-bold">       Expertises   </p>
                        <Accordion type="single" collapsible className="mr-10 py-3">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" collapsible className="mr-10">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Solutions</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                    <div>
                        <p className="text-2xl font-bold mt-10">Yalantis solution hub
                        </p>
                        <p className="py-3">Yalantis IoT Accelerator
                        </p>
                        <p className="py-3">Yalantis IoT Accelerator
                        </p>
                        <p className="py-3">Yalantis Payments
                        </p>
                        <p className="py-3">An AI-powered virtual assistant
                        </p>
                        <p className="py-3">DevOps Accelerator
                        </p>
                        <p className="py-3">Authorization Accelerator
                        </p>
                    </div>

                    <div className=" mt-18">
                        <p className="text-2xl font-bold">Y - Qualities
                        </p>
                    </div>

                    <div>
                        <p className="text-2xl font-bold mt-16">Insights
                        </p>
                        <p className="py-3">Yalantis IoT Accelerator
                        </p>
                        <p className="py-3">Yalantis IoT Accelerator
                        </p>
                        <p className="py-3">Yalantis Payments
                        </p>
                        <p className="py-3">An AI-powered virtual assistant
                        </p>
                        <p className="py-3">DevOps Accelerator
                        </p>
                        <p className="py-3">Authorization Accelerator
                        </p>
                    </div>
                </section>
                <section className="w-1/4 pl-10">
                    <p className="text-2xl font-bold">Industries
                    </p>
                    <p className="py-3">Fintech
                    </p>
                    <p className="py-3">Transportation and mobility
                    </p>
                    <p className="py-3">Manufacturing
                    </p>
                    <p className="py-3">Real estate
                    </p>
                    <p className="py-3">Software product
                    </p>
                    <p >Smart home and application
                    </p>
                </section>
                <section className="w-1/4">
                    <div>
                        <Button className="border-2 main-bg border-orange-500 text-white hover:bg-orange-600 px-12 py-7 rounded-full text-lg font-semibold transition duration-300 ease-in-out">
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
                    <div>
                        <Image src="/images/logo_white.svg" alt="logo" width={180} height={180}></Image>
                        <p className="mt-6 text-sm text-gray-400">
                            ©Copyright 2024 Yalantis – Software engineering and IT consulting company. All rights reserved
                        </p>
                        <div className="mt-10">
                            <p className="text-gray-400 underline mb-3">Cookie Notice</p>
                            <p className="text-gray-400 underline mb-3">Private Notice</p>
                            <p className="text-gray-400 underline mb-3">Quantity Policy</p>
                            <p className="text-gray-400 underline mb-3">Yalantis Sustainability Policy</p>

                        </div>





                    </div>

                </section>


            </footer>
            </div>

        </>
    )
}