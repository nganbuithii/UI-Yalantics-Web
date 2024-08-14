'use client'
import Footer from "@/components/footer";
import Header from "@/components/header";
import ContactForm from "../home/ContactForm";
import Image from "next/image";
import OurOffice from "../home/out-office";
import BreadCrum from "@/components/BreadCrum";

export default function ContactPage() {


    return (
        <>
            <Header />
            {/* Constract form */}
            <section className=" relative flex flex-row bg-[url('/images/bg-foot.png')] bg-cover bg-center pt-44 mt-30">
            <BreadCrum className="absolute top-28 left-5 pt-5" title1="YALANTICS" title2="CONTACT US"/>
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
    )
}