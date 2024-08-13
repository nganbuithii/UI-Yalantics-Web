'use client'
import Header from "@/components/header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CardReadMore from "@/components/card";
import VideoCard from "@/components/video-card";
import Footer from "@/components/footer";
import Banner from "@/components/banner";
import OurOffice from "./out-office";
import ContactForm from "./ContactForm";
import CaseStudies from "./CaseSudies";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import FAQ from "@/components/faq-item";
import AboutUs from "./about";

import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { useState } from "react";
import { IoAttachSharp } from "react-icons/io5";
import { Checkbox } from "@/components/ui/checkbox";
import { BiSkipNextCircle, BiSolidSkipNextCircle } from "react-icons/bi";


export default function HomePage() {

    return (
        <>
            <Header />
            <section className="main-bg flex mt-14">
                <div className="w-3/5 p-5 mt-32"> {/* 60% chiều rộng */}
                    <p className="text-orange-500 text-7xl">Software development</p>
                    <p className="text-white text-7xl">company that delivers for</p>
                    <div className="flex justify-center space-x-4 mt-5"> {/* Khoảng cách giữa các hình */}
                        <Image src="/images/a1.png" alt="logo1" width={250} height={250} className="main-bg"></Image>
                        <Image src="/images/a1.png" alt="logo2" width={250} height={250}></Image>
                        <Image src="/images/a1.png" alt="logo3" width={250} height={250}></Image>
                    </div>
                    <Button className="mt-10 border-2 border-orange-500 bg-orange-500 text-white hover:bg-orange-600 px-6  rounded-full text-lg font-semibold transition duration-300 ease-in-out mx-10 py-7">
                        CONTACT US
                    </Button>
                </div>
                <div className="w-2/5 flex justify-center items-center"> {/* 40% chiều rộng */}
                    <Image src="/images/y.png" alt="y" width={620} height={620}></Image>
                </div>
            </section>

            <section className="flex flex-row main-bg">
                <div className=" py-10 pl-7">
                    <CardReadMore
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems",
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                </div>
                <div className="py-10">
                    <CardReadMore
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems",
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                </div>
                <div className="py-10">
                    <CardReadMore
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems",
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                </div>
                <div className=" py-10 pr-7">
                    <CardReadMore
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems",
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                </div>



            </section>
            <section className="main-bg py-12 pt-40">
                <h1 className="text-6xl text-white pb-11 px-7">Video testimonials
                </h1>
                <VideoCard />
            </section>
            <AboutUs />
            <section className="pb-40">
                <div className="flex flex-row justify-around">
                    <Image src="/images/logo.svg" width={150} height={150}></Image>
                    <Image src="/images/logo.svg" width={150} height={150}></Image>
                    <Image src="/images/logo.svg" width={150} height={150}></Image>
                    <Image src="/images/logo.svg" width={150} height={150}></Image>
                    <Image src="/images/logo.svg" width={150} height={150}></Image>
                    <Image src="/images/logo.svg" width={150} height={150}></Image>
                    <Image src="/images/logo.svg" width={150} height={150}></Image>
                </div>
            </section>

            {/* Case studies */}
            <section className="main-bg ">
                <div className="flex flex-row pt-20 pl-8 pb-12">
                    <h1 className="text-6xl text-white ">Case Studies</h1>
                    <div className="flex flex-row ml-auto space-x-4 pr-10">
                        <BiSkipNextCircle className="text-7xl text-gray-100" />
                        <BiSolidSkipNextCircle className="text-7xl text-gray-100" />
                    </div>
                </div>
                <div className="flex flex-row ml-10">

                    <CaseStudies
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems",
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                    <CaseStudies
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems",
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                    <CaseStudies
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems",
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                    <CaseStudies
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems",
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                    <CaseStudies
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems",
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />
                    <CaseStudies
                        title={"Developteam augement tation"}
                        items={[
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems",
                            "Solutions tailored to specific business needs",
                            "Innovative approaches to problem-solving",
                            "Seamless integration with existing systems"
                        ]}
                    />

                </div>

            </section>


            <section className="p-8">
                <Banner className="bg-gradient" title="NOT SURE WHICH ENGAGEMENT MODEL IS BEST FOR MEETING YOUR BUSINESS OBJECTIVES?
" content="Let us help you decide." name="CONTACT US"/>
            </section>

{/* FAQ */}
            <section className="bg-pink-100 justify-center pb-20">
                <h1 className=" text-center text-7xl text-black font-light pb-8 pt-20">FAQ</h1>
                <FAQ title="How does your software developer company ensure product security?
                " content="Our software development agency has obtained ISO 27001 and ISO 9001 certifications for software development groups. These certifications demonstrate that Yalantis’ management and development processes comply with international quality and security standards introduced by the International Organization for Standardization (ISO).
                

                 

                Being ISO 9001-certified, our software development firm delivers quality software engineering services in full accordance with the needs of our clients, employees, and regulatory bodies. Our processes are well-established and polished to continually improve performance and operational efficiency.

                 

                As an ISO 27001-certified software developer company, we build highly secure software solutions that comply with business, legal, contractual, and regulatory requirements, and we are constantly streamlining our information security management system.
                "/>
                <FAQ title="How does your software developer company ensure product security?
                " content="Our software development agency has obtained ISO 27001 and ISO 9001 certifications for software development groups. These certifications demonstrate that Yalantis’ management and development processes comply with international quality and security standards introduced by the International Organization for Standardization (ISO).
                

                 

                Being ISO 9001-certified, our software development firm delivers quality software engineering services in full accordance with the needs of our clients, employees, and regulatory bodies. Our processes are well-established and polished to continually improve performance and operational efficiency.

                 

                As an ISO 27001-certified software developer company, we build highly secure software solutions that comply with business, legal, contractual, and regulatory requirements, and we are constantly streamlining our information security management system.
                "/>
                <FAQ title="How does your software developer company ensure product security?
                " content="Our software development agency has obtained ISO 27001 and ISO 9001 certifications for software development groups. These certifications demonstrate that Yalantis’ management and development processes comply with international quality and security standards introduced by the International Organization for Standardization (ISO).
                

                 

                Being ISO 9001-certified, our software development firm delivers quality software engineering services in full accordance with the needs of our clients, employees, and regulatory bodies. Our processes are well-established and polished to continually improve performance and operational efficiency.

                 

                As an ISO 27001-certified software developer company, we build highly secure software solutions that comply with business, legal, contractual, and regulatory requirements, and we are constantly streamlining our information security management system.
                "/>
                <FAQ title="How does your software developer company ensure product security?
                " content="Our software development agency has obtained ISO 27001 and ISO 9001 certifications for software development groups. These certifications demonstrate that Yalantis’ management and development processes comply with international quality and security standards introduced by the International Organization for Standardization (ISO).
                

                 

                Being ISO 9001-certified, our software development firm delivers quality software engineering services in full accordance with the needs of our clients, employees, and regulatory bodies. Our processes are well-established and polished to continually improve performance and operational efficiency.

                 

                As an ISO 27001-certified software developer company, we build highly secure software solutions that comply with business, legal, contractual, and regulatory requirements, and we are constantly streamlining our information security management system.
                "/>
                <FAQ title="How does your software developer company ensure product security?
                " content="Our software development agency has obtained ISO 27001 and ISO 9001 certifications for software development groups. These certifications demonstrate that Yalantis’ management and development processes comply with international quality and security standards introduced by the International Organization for Standardization (ISO).
                

                 

                Being ISO 9001-certified, our software development firm delivers quality software engineering services in full accordance with the needs of our clients, employees, and regulatory bodies. Our processes are well-established and polished to continually improve performance and operational efficiency.

                 

                As an ISO 27001-certified software developer company, we build highly secure software solutions that comply with business, legal, contractual, and regulatory requirements, and we are constantly streamlining our information security management system.
                "/>
            </section>

            <section className="flex flex-row bg-[url('/images/bg-foot.png')] bg-cover bg-center pt-20 px-20">
                <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg mx-10">
                    <ContactForm />
                </div>

                <div className="w-1/2 text-white">
                    <p className="font-bold text-gray-600 text-xl">Yalantis in brief</p>
                    <div className="flex flex-row justify-around">
                        <div>
                            <p className=" text-5xl text-orange-700">15+</p>
                            <p className="py-5">year of experience</p>
                        </div>
                        <div>
                            <p className=" text-5xl text-orange-700">500+</p>
                            <p className="py-5">year of experience</p>
                        </div>
                        <div>
                            <p className=" text-5xl text-orange-700">35+</p>
                            <p className="py-5">year of experience</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-around pb-8">
                        <Image src="/images/kpmg.svg" width={250} height={250}></Image>
                        <Image src="/images/toyota.svg" width={250} height={250}></Image>
                        <Image src="/images/hom.svg" width={250} height={250}></Image>
                    </div>
                    <hr></hr>
                    <div className="flex flex-row justify-around pt-10">
                        <div>
                            <div>
                                <p className="text-xl text-gray-500">Project inquiries</p>
                                <p className="text-orange-500">hello@yayantis.com</p>
                            </div>
                            <div className="mt-5">
                                <p className="text-xl text-gray-500">Phone number</p>
                                <p>+84 185263 56</p>
                            </div>
                        </div>


                        <div>
                            <p className="text-xl text-gray-500">Carrers</p>
                            <p>carrers@yayantis.com</p>
                        </div>
                    </div>


                    <OurOffice />
                </div>
            </section>


            <Footer />
        </>
    );
}
