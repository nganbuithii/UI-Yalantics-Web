// components/OurOffice.jsx
import TooltipItem from '@/components/TooltipItem';

const OurOffice = () => {
    return (
        <div className='pt-10'>
             <p className="text-xl text-gray-500 ">Our office</p>
          
            <div className="flex flex-row justify-around">
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
