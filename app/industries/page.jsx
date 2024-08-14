
import BreadCrum from "@/components/BreadCrum";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ExperienceItem from "./ExperienceItem";
export default function IndustriesPage() {


    return (
        <>
            <Header />
            <section className="relative flex flex-col justify-center items-center bg-[url('/images/bg-foot.png')] bg-cover bg-center h-[93vh]">
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
                    <div className="flex flex-row items-center justify-center">
                        <p className="text-orange-500  text-7xl mr-3">Industries </p>
                        <p className=" text-white text-7xl"> in focus</p>
                    </div>
                    <p className="leading-9 text-white tracking-wide mt-4 w-[75%] mx-auto text-2xl">
                    Transform your business at an accelerated pace with domain experience, unique business process knowledge, and a dedicated delivery unit.
                    </p>
                </div>
                <BreadCrum className="absolute top-1/4 left-5" title1="YALANTICS" title2="EXPERTISES" />
            </section>

            {/* Đoạn 2 */}
            <section>
                <h1 className="text-6xl text-center">We have <span className="text-orange-500">experience</span> in these industries</h1>

                <div>
                    <div className="flex flex-row">
                        <ExperienceItem title="Health Care"  content="Custom EHR, EMR, ERX, and other medical solutions" className="bg-[#24262c] w-1/3 mx-2"/>
                        <ExperienceItem title="Health Care"  content="Custom EHR, EMR, ERX, and other medical solutions" className="bg-[#24262c] w-1/3"/>
                        <ExperienceItem title="Health Care"  content="Custom EHR, EMR, ERX, and other medical solutions" className="bg-[#24262c] w-1/3"/>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}