'use client'
import Footer from "@/components/footer";
import Header from "@/components/header";
import ContactForm from "../home/ContactForm";
import Image from "next/image";
import OurOffice from "../home/out-office";
import BreadCrum from "@/components/BreadCrum";
import ItemExpertise from "../services/item-expertise";
import ItemExpert from "./ItemExpert";
import Banner from "@/components/banner";
import { BiSkipNextCircle, BiSolidSkipNextCircle } from "react-icons/bi";
import CaseStudies from "../home/CaseSudies";
import { GrSchedule } from "react-icons/gr";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { FaSquareFull } from "react-icons/fa";


export default function ExpertisePage() {


    return (
        <>
            <Header />
            <section className="relative flex flex-col justify-center items-center bg-[url('/images/bg-foot.png')] bg-cover bg-center h-[88vh]">
                {/* SVG Path */}
                <svg className="absolute top-40 left-0 w-full h-96 z-10" viewBox="0 0 640 640" xmlns="http://www.w3.org/2000/svg">
                    <path
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(255,99,0)"
                        stroke-opacity="1"
                        stroke-width="2"
                        d="M21.51,207.3 C65.94,89.23 177.69,4.54 308.51,3 C308.51,3 308.51,3 308.51,3 C478.34,1 616.03,139.9 616.03,313.26 C616.03,486.61 478.34,628.75 308.51,630.75 C138.69,632.75 1,493.85 1,320.49 C1,280.67 8.26,242.5 21.51,207.3"
                    />
                </svg>

                <div className="text-center px-4 relative z-20">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-orange-500  text-7xl mb-3">Expertise </p>
                        <p className=" text-white text-7xl"> and competencies</p>
                    </div>
                    <p className="leading-9 text-white tracking-wide mt-4 w-1/2 mx-auto text-2xl">
                        With our technical know-how and experience engineering sophisticated IT systems, we can help you achieve your business objectives in tune with your time, budget, and expectations.
                    </p>
                </div>
                <BreadCrum className="absolute top-1/4 left-5" title1="YALANTICS" title2="EXPERTISES" />
            </section>

            {/* Expertise and competencies */}
            <section className="main-bg pt-20">
                <div className="flex flex-row justify-center pb-9">
                    <p className="text-orange-500 text-6xl">Expertise </p>
                    <p className="text-white text-6xl ml-2"> and competencies</p>
                </div>

                <div className="flex flex-row bg-[#24262c] m-11 p-11">
                    <div className="w-[20%]">
                        <p className="text-orange-600 text-2xl">Technology excellence</p>
                        <p className="text-white tracking-wide mt-3">Create and enhance your software product with powerful and cost-effective technology</p>
                    </div>
                    <div className="w-[40%] mx-3">
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                    </div>
                    <div className="w-[40%]">
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                        <ItemExpertise title="IoT Service" />
                    </div>
                </div>

            </section>




            {/* Banner */}
            <section className="p-8 main-bg">
                <Banner className="bg-gradient-orrange" title="OUR EXPERTISE TO MEET YOUR BUSINESS OBJECTIVES
                " content="Our fine-tuned development processes and technical knowledge will help you create and optimize your software products according to your goals and ever-changing market demands." name="CONTACT US" />
            </section>

            {/* Exxpert Team */}
            <section className="main-bg pt-20">
                <div className="flex flex-row justify-center">
                    <span className="text-orange-500 text-6xl">Expert team
                    </span>
                    <span className="text-6xl text-white ml-3"> at your service
                    </span>
                </div>
                <div className="flex flex-row justify-around py-20 ">
                    <ItemExpert title="500+" content="Total expert" />
                    <ItemExpert title="500+" content="Total expert" />
                    <ItemExpert title="500+" content="Total expert" />
                    <ItemExpert title="500+" content="Total expert" />
                </div>

            </section>

            {/* Case studies */}
            <section className="main-bg pb-24">
                <div className="flex flex-row pt-20 pl-8 pb-12">
                    <h1 className="text-6xl text-orange-500 w-1/2">Case Studies <span className="text-white">of solutions
                        we’ve delivered</span></h1>
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

            {/* Technology */}
            <section className="pt-24 bg-[#f5f5f5]">

                <div className="pl-8">
                    <p className="text-7xl">Technology in Business</p>
                    <p className="text-orange-600 text-7xl">insights</p>
                </div>

                <div className="flex flex-row px-8 ">
                    <div className=" items-stretch flex flex-col w-[45%] my-11 mx-6 bg-white pb-16">
                        <div className="w-full relative h-[350px]">
                            <Image
                                src="/images/tech-1.png"
                                alt="technology"
                                layout="fill"
                                objectFit="cover"
                                className="absolute inset-0"
                            />
                        </div>

                        <div className="mt-4 py-11 px-6">
                            <p className="text-gray-500 text-xl">How to</p>
                            <p className="w-2/3 text-black  text-2xl font-medium mt-3 tracking-wide hover:text-orange-500">
                                Cloud migration checklist: 7 steps to successful app migration
                            </p>
                            <p className=" pt-5 text-lg">
                                In this extensive guide, we unveil the top reasons for cloud migration, touch upon security concerns, and discuss the process of cloud migration step-by-step.
                            </p>
                        </div>
                    </div>


                    <div className="items-stretch pl-1 w-[55%] py-11">
                        {/* item1 */}
                        <div className="flex flex-row mb-3.5 bg-white ">
                            <div className="w-[45%] ">
                                <div className="w-full relative h-[350px]">
                                    <Image
                                        src="/images/tech-2.png"
                                        alt="technology"
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute inset-0"
                                    />
                                </div>
                            </div>

                            {/* Phần nội dung */}
                            <div className="w-[55%] pl-4 px-6 py-8">
                                <p className="text-gray-500">How to</p>
                                <p className="text-black text-2xl font-bold tracking-wide hover:text-orange-500 my-4">
                                    Cloud migration checklist: 7 steps to successful app migration
                                </p>
                                <p>
                                    Cloud migration checklist: 7 steps to successful app migration Cloud migration checklist: 7 steps to successful app migration
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row bg-white ">
                        <div className="w-[45%] ">
                                <div className="w-full relative h-[350px]">
                                    <Image
                                        src="/images/tech-3.png"
                                        alt="technology"
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute inset-0"
                                    />
                                </div>
                            </div>

                            {/* Phần nội dung */}
                            <div className="w-[55%] pl-4 px-6 py-8">
                                <p className="text-gray-500">How to</p>
                                <p className="text-black text-2xl font-bold tracking-wide hover:text-orange-500 my-4">
                                    Cloud migration checklist: 7 steps to successful app migration
                                </p>
                                <p>
                                    Cloud migration checklist: 7 steps to successful app migration Cloud migration checklist: 7 steps to successful app migration
                                </p>
                            </div>
                        </div>






                    </div>
                </div>
            </section>


            {/* Constract form */}
            <section className=" relative flex flex-row bg-white pt-44 mt-30">

                <div className="w-1/2 bg-[#fafafa] p-6 rounded-lg shadow-lg mx-10">
                    <ContactForm />
                </div>

                <div className="w-1/2 text-black flex flex-col items-center justify-center p-6">

                    <Avatar className="flex items-center justify-center mb-4 w-40 h-40 mb-10">
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            className="rounded-full w-full h-full object-cover"
                        />
                        <AvatarFallback className="text-lg">CN</AvatarFallback>
                    </Avatar>

                    <p className="text-center tracking-wide font-bold mb-2 text-2xl">Lisa Panchenko</p>
                    <p className="text-center text-gray-600 mb-4">Senior Engineer Manager</p>
                    <Button
                        className="border-2 text-xl tracking-wide border-orange-600 bg-transparent hover:bg-transparent text-orange-600 rounded-full flex items-center justify-center py-7 px-3 mb-4"
                    >
                        <GrSchedule className="mr-2" />
                        SCHEDULE A CALL
                    </Button>

                    <hr className="border-t-2 border-orange-600 my-4 w-full" />

                    <div className="w-full text-left pt-10">
                        <p className="tracking-wide font-semibold mb-2 text-2xl ">Your steps with Yalantis</p>
                        <div className="flex flex-col space-y-2 text-xl">
                            <div className="flex items-center space-x-2 py-4">
                                <FaSquareFull className="text-orange-500 w-4 h-4 mr-3" />
                                <p className="text-gray-700">Schedule a call</p>
                            </div>
                            <div className="flex items-center space-x-2 py-4">
                                <FaSquareFull className="text-orange-500 w-4 h-4 mr-3" />
                                <p className="text-gray-700">Schedule a call</p>
                            </div>
                            <div className="flex items-center space-x-2 py-4">
                                <FaSquareFull className="text-orange-500 w-4 h-4 mr-3" />
                                <p className="text-gray-700">Schedule a call</p>
                            </div>
                            <div className="flex items-center space-x-2 py-4">
                                <FaSquareFull className="text-orange-500 w-4 h-4 mr-3" />
                                <p className="text-gray-700">Schedule a call</p>
                            </div>

                        </div>
                    </div>
                </div>


            </section>
            <Footer />
        </>
    )
}