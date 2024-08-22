import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "./ui/button"
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

import { FaXmark } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Header from "./header";
import { useEffect } from "react";

export default function MenuRes({ onClose }) {
    useEffect(() => {
        // Vô hiệu hóa cuộn khi MenuRes được hiển thị
        document.body.classList.add('overflow-hidden');

        return () => {
            // Khôi phục cuộn khi MenuRes bị đóng
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <>
            <div className="mt-8 lg:bg-white md:bg-white 2xl:hidden lg:block md:block md:pb-20 lg:pb-20 text-black md:z-20 
            max-h-[100vh] sm:overflow-y-auto"> {/* Thêm các thuộc tính max-height và overflow-y */}

                <div className="flex justify-between items-center w-full md:pb-14 sm:">
                    <div className="lg:pl-28 md:pl-16 sm:pl-16">
                        <Link href="/home">
                            <Image
                                src="/images/logo_dark.svg"
                                alt="Logo"
                                width={130}
                                height={130}
                                className="object-contain xl:w-[90px] md:w-[120px] "
                            />
                        </Link>
                    </div>
                    <div className="lg:pr-5 md:pr-10 sm:pr-20 ">
                        <FaXmark onClick={onClose} className="text-5xl cursor-pointer lg:inline-block md:inline-block" />
                    </div>
                </div>


                <div className="sm:hidden md:block">
                    <div className="lg:w-[80%]  lg:mx-auto md:w-[90%]  md:mx-auto sm:w-[90%]  sm:mx-auto md:block lg:block xl:block">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="lg:text-[24px] lg:py-8 text-black  ">SERVICES</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                    <div className="lg:w-[80%]  lg:mx-auto md:w-[90%]  md:mx-auto sm:w-[90%]  sm:mx-auto">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="lg:text-[24px] lg:py-8 ">EXPERTISE</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                    <div className="lg:w-[80%]  lg:mx-auto md:w-[90%]  md:mx-auto sm:w-[90%]  sm:mx-auto">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="lg:text-[24px] lg:py-8 ">TECHNOLOGY</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                    <div className="lg:w-[80%]  lg:mx-auto md:w-[90%]  md:mx-auto sm:w-[90%]  sm:mx-auto">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="lg:text-[24px] lg:py-8 ">COMPANY</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                    <div className="lg:w-[80%]  lg:mx-auto md:w-[90%]  md:mx-auto sm:w-[90%]  sm:mx-auto">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="lg:text-[24px] lg:py-8 ">COMPANY</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </div>
                <div className="sm:block md:hidden sm:w-[90%] sm:mx-auto mt-6">
                    <Link href="/services">
                        <span className="block py-4 sm:text-2xl text-black hover:text-orange-500">SERVICES</span>
                    </Link>
                    <Link href="/expertise">
                        <span className="block py-4 sm:text-2xl text-black hover:text-orange-500">EXPERTISE</span>
                    </Link>
                    <Link href="/industries">
                        <span className="block py-4 sm:text-2xl text-black hover:text-orange-500">INDUSTRIES</span>
                    </Link>
                    <Link href="/success-stories">
                        <span className="block py-4 sm:text-2xl text-black hover:text-orange-500">SUCCESS STORIES</span>
                    </Link>
                    <Link href="/success-stories">
                        <span className="block py-4 sm:text-2xl text-black hover:text-orange-500">INSIGHTS</span>
                    </Link>
                    <Link href="/success-stories">
                        <span className="block py-4 sm:text-2xl text-black hover:text-orange-500">SOLUTION HUB</span>
                    </Link>
                    <Link href="/success-stories">
                        <span className="block py-4 sm:text-2xl text-black hover:text-orange-500">COMPANY</span>
                    </Link>

                </div>

                <div className="sm:flex sm:justify-center sm:w-full md:hidden">
                    <Button
                        className="border-2 border-orange-500 main-bg text-white hover:bg-orange-600 px-6 py-7 rounded-full text-lg font-semibold transition duration-300 ease-in-out
                        md:bg-orange-500
            "
                    >
                        CONTACT US
                    </Button>
                </div>

                <div className="flex flex-row justify-around items-center md:pt-10 ">
                    <div className="flex flex-row mt-10 items-center space-x-3">
                        <FaLinkedin className="text-4xl text-gray-400" />
                        <FaFacebookSquare className="text-4xl text-gray-400" />
                        <FaGithub className="text-4xl text-gray-400" />
                        <FaInstagram className="text-4xl text-gray-400" />
                        <FaYoutube className="text-4xl text-gray-400" />
                    </div>
                    <div>
                        <Button
                            className="border-2 border-orange-500 main-bg text-white hover:bg-orange-600 px-6 py-7 rounded-full text-lg font-semibold transition duration-300 ease-in-out
                            lg:bg-orange-500
             "
                        >
                            CONTACT US
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}