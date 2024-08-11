import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "./ui/button"
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"


export default function Footer() {
    return (
        <>
            <footer className="main-bg flex flex-row pt-10 pb-10 text-white">
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
                        <Button className="border-2 main-bg border-orange-500 text-white hover:bg-orange-600 px-6 py-7 rounded-full text-lg font-semibold transition duration-300 ease-in-out">
                            CONTACT US
                        </Button>

                    </div>
                    <div className="flex flex-row mt-10 ">
                        <div>
                            <FaLinkedin className="text-4xl text-gray-400 mr-8"/>
                        </div>
                        <div>
                            <FaFacebookSquare className="text-4xl text-gray-400 mr-8"/>
                        </div>
                        <div>
                            <FaGithub className="text-4xl text-gray-400 mr-8"/>
                        </div>
                        <div>
                            <FaInstagram className="text-4xl text-gray-400 mr-8"/>
                        </div>
                        <div>
                            <FaYoutube className="text-4xl text-gray-400 mr-8"/>
                        </div>
                    </div>
                </section>


            </footer>
        </>
    )
}