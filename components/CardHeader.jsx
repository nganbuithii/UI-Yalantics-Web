
import { FaArrowRight } from "react-icons/fa";
import { Button } from "./ui/button";
export default function CardHeader({ title, content, className }) {
    return (
        <>
            <div className={` text-white ${className} hover:bg-slate-500 group`}>
                <h3 className="font-bold tracking-wide text-lg py-5">{title}</h3>
                <p>{content}</p>
                {/* <Button className="text-white bg-transparent px-6 py-2 text-xl duration-300 ease-in-out group-hover:text-orange-600 mt-3">
                    READ MORE <FaArrowRight className="ml-5 group-hover:ml-10" />
                </Button> */}
                <div className="flex flex-row pt-10">
                    <p className="text-orange-500 text-xl ">READ MORE</p>
                    <FaArrowRight className="ml-5 mt-1 group-hover:ml-10 text-orange-500" />
                </div>

            </div>
        </>
    )
}