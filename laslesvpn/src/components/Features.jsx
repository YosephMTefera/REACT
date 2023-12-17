import { FaCheck } from "react-icons/fa6";
import operator2 from "../Images/operator2.png";

const Features = () => {
  return (
    <div className="w-[100%] pt-2 bg-[#F8F8F8]">
        <div className="w-[70%] mt-[30px] mx-auto flex justify-between items-center max-[1300px]:gap-[50px] max-[1300px]:w-[90%] max-[700px]:flex-col">
        <div className="w-[50%] max-[700px]:w-[50%]  max-[700px]:mx-auto max-[700px]:flex max-[700px]:items-center">
                <img src={operator2} alt="" className="w-[100%] h-[100%] object-cover max-[700px]:w-[100%] max-[1300px]:w-[80%]"/>
                
            </div>
            <div className="w-[35%] my-[30px]  flex flex-col gap-[30px] max-[1300px]:w-[50%] max-[700px]:w-[80%]">
                <div className="w-[100%] flex flex-col gap-[5px]">
                <span className="text-[30px] font-bold max-[1300px]:text-[20px]">We Provide Many</span>
                <span className="text-[30px] font-bold max-[1300px]:text-[20px]">Features You Can Use</span>
                
                </div>
                <span className="text-[#4F5665] text-[14px] w-[85%]">You can explore the features that we provide with fun and have their own functions each feature.</span>
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center gap-[10px]">
                <FaCheck className="w-[25px] h-[25px] bg-[#2FAB73] text-white text-[12px]  p-2 rounded-full"/>
                <span className="text-[#4F5665] text-[14px]">Powerfull online protection</span>
                </div>
                <div className="flex items-center gap-[10px]">
                <FaCheck className="w-[25px] h-[25px] bg-[#2FAB73] text-white text-[12px]  p-2 rounded-full"/>
                <span className="text-[#4F5665] text-[14px]">Internet without borders.</span>
                </div>
                <div className="flex items-center gap-[10px]">
                <FaCheck className="w-[25px] h-[25px] bg-[#2FAB73] text-white text-[12px]  p-2 rounded-full"/>
                <span className="text-[#4F5665] text-[14px]">Supercharged VPN.</span>
                </div>
                <div className="flex items-center gap-[10px]">
                <FaCheck className="w-[25px] h-[25px] bg-[#2FAB73] text-white text-[12px]  p-2 rounded-full"/>
                <span className="text-[#4F5665] text-[14px]">No specific time limits.</span>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Features