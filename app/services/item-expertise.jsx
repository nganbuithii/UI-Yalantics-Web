import { MdArrowOutward } from "react-icons/md";
import { MdComment } from "react-icons/md"; // Thay đổi biểu tượng khi hover
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowDownLeft } from "react-icons/fi";

export default function ItemExpertise({ title }) {
    return (
        <div className="flex flex-row w-full bg-gray-400 p-4 border-gray-400 border-b-4 border-transparent hover:border-orange-500 hover:after:animate-border transition duration-300 ease-in-out my-3 px-10">

            <p className="text-white hover:text-orange-600">{title}</p>
            <div className=" top-2 right-2 flex items-end space-x-2">
                {/* Biểu tượng hiện tại */}
                <FiArrowUpRight  className="text-white text-2xl group-hover:hidden" />

                {/* Biểu tượng hiển thị khi hover */}
                <FiArrowDownLeft  className="text-white text-2xl hidden group-hover:block hover:text-orange-500" />
            </div>
        </div>
    );
}
