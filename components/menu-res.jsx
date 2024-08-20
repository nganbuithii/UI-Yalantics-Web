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
        {/* <Header/> */}
            <div className="mt-8  lg:bg-white md:bg-white 2xl:hidden lg:block md:block md:pb-20 lg:pb-20 text-black md:z-20">
                <div className="flex justify-between items-center w-full  pb-14">
                    <div className="lg:pl-28 md:pl-16">
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
                    <div className="lg:pr-28 md:pr-20">
                    <FaXmark onClick={onClose} className="text-5xl cursor-pointer lg:inline-block md:inline-block " />
                </div>
                </div>

                <div className="lg:w-[90%]  lg:mx-auto md:w-[90%]  md:mx-auto ">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="lg:text-[24px] lg:py-5 text-black  ">SERVICES</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="lg:w-[90%]  lg:mx-auto md:w-[90%]  md:mx-auto ">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="lg:text-[24px] lg:py-5 ">EXPERTISE</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="lg:w-[90%]  lg:mx-auto md:w-[90%]  md:mx-auto ">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="lg:text-[24px] lg:py-5 ">TECHNOLOGY</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="lg:w-[90%]  lg:mx-auto md:w-[90%]  md:mx-auto ">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="lg:text-[24px] lg:py-5 ">COMPANY</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="lg:w-[90%]  lg:mx-auto md:w-[90%]  md:mx-auto ">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="lg:text-[24px] lg:py-5 ">COMPANY</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="flex flex-row justify-around items-center md:pt-10"> {/* Đảm bảo căn giữa theo trục dọc */}
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
            xl:text-base xl:px-3 xl:py-5 xl:mr-16
            lg:bg-orange-500 lg:text-white
            md:bg-orange-500
        ">
                            CONTACT US
                        </Button>
                    </div>
                </div>


            </div>

        </>
    )


}