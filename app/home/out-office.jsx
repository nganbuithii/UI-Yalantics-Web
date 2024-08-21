// components/OurOffice.jsx
import TooltipItem from '@/components/TooltipItem';

const OurOffice = () => {
    return (
        <div className='pt-10 lg:pb-16'>
            <p className="text-xl text-gray-500 lg:pb-16 ">Our office</p>

            <div className="flex lg:flex-row justify-around md:flex-row md:mt-3 sm:flex-col  space-y-3">
                <TooltipItem
                    imageSrc="/images/flag.jpg"
                    location="VietNam"
                    tooltipContent="hello world"

                />
                <TooltipItem
                    imageSrc="/images/flag.jpg"
                    location="VietNam"
                    tooltipContent="hello world"

                />
                <TooltipItem
                    imageSrc="/images/flag.jpg"
                    location="VietNam"
                    tooltipContent="hello world"

                />
                <TooltipItem
                    imageSrc="/images/flag.jpg"
                    location="VietNam"
                    tooltipContent="hello world"

                />
            </div>
        </div>
    );
};

export default OurOffice;
