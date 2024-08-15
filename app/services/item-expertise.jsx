import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";

export default function ItemExpertise({ title }) {
    return (
        <div className="group relative flex flex-row w-full bg-[#2b2d32] pr-[24px] p-4 border-[#494b50] border-b-4 hover:border-orange-500 hover:after:animate-border transition duration-300 ease-in-out my-3 px-10 py-6">

            <p className="text-lg text-white group-hover:text-orange-600">{title}</p>
            <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                {/* Biểu tượng hiện tại */}
                <FiArrowUpRight className="text-white text-3xl group-hover:hidden" />

                {/* Biểu tượng hiển thị khi hover */}
                <FiArrowDownLeft className="text-white text-3xl hidden group-hover:block group-hover:text-orange-500" />
            </div>
        </div>
    );
}
