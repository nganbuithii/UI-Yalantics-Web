'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaSquareFull } from "react-icons/fa";
import ContactForm from "../home/ContactForm";
import { GrSchedule } from "react-icons/gr";


export default function SolutionHubPage() {

    return (
        <>
            <Header />
            <p>ùhi3ufhuifh</p>
            {/* Insights for engineers */}
            <section>
                <h1>Insights for engineers</h1>
            </section>

            {/* Constract form */}
            <section section className=" relative flex flex-row bg-white pt-44 mt-30" >

                <div className="w-1/2 bg-[#fafafa] p-6 rounded-lg shadow-lg mx-10">
                    <ContactForm />
                </div>

                <div className="w-1/2 text-black flex flex-col items-center justify-center p-6">

                    <Avatar className="flex items-center justify-center mb-4 w-40 h-40">
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


            </section >
            <Footer />
        </>
    )

}