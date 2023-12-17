import { FaCheck } from 'react-icons/fa6'
import box from '../Images/FreeBox.png'

const Plan = () => {
  return (
    <div className="w-[100%] p-2">
        <div className="w-[80%] mx-auto flex flex-col items-center max-[1300px]:w-[90%]">
            <div className='w-[100%] my-[30px] flex flex-col text-center gap-[20px]'>
                <span className='font-bold text-[20px]'>Choose Your Plan</span>
                <span className='text-[14px] text-[#4F5665] text-center'>Let&apos;s choose the package that is best for you and explore it happily and cheerfully.</span>
            </div>
            <div className='w-[60%] flex justify-between items-center max-[1500px]:w-[80%] max-[1000px]:w-[100%] max-[800px]:flex-col'>
            <div className='border py-2 my-2 rounded-[10px] w-[30%] min-h-[500px] flex flex-col justify-between items-center gap-[30px] max-[800px]:w-[50%] max-[600px]:w-[80%]'>
                <div className='flex flex-col items-center gap-[30px]'>
                <div>
                    <img src={box} alt="" />
                </div>
                <div className='w-[100%] flex flex-col justify-center gap-[30px]'>
                    <span className='text-center font-bold'>Free Plan</span>
                    <div className='flex flex-col gap-[10px]'>
                    <div className="flex items-center gap-[10px]">
                <FaCheck className=" text-[#2FAB73] text-[12px]"/>
                <span className="text-[#4F5665] text-[14px]">Unlimited Bandwith</span>
                </div>
                <div className="flex items-center gap-[10px]">
                <FaCheck className=" text-[#2FAB73] text-[12px]"/>
                <span className="text-[#4F5665] text-[14px]">Encrypted Connection</span>
                </div>
                <div className="flex items-center gap-[10px]">
                <FaCheck className=" text-[#2FAB73] text-[12px]"/>
                <span className="text-[#4F5665] text-[14px]">No Traffic Logs.</span>
                </div>
                <div className="flex items-center gap-[10px]">
                <FaCheck className=" text-[#2FAB73] text-[12px]"/>
                <span className="text-[#4F5665] text-[14px]">Work on All Devices</span>
                </div>
                </div>
                </div>
                </div>
                <div className='w-[100%] flex flex-col justify-center items-center gap-[20px] font-bold'>
                    <span>Free</span>
                    <button className="py-1 px-4 w-[50%] bg-transparent border border-[#F53855] text-[#F53855] text-[12px] rounded-[20px]">Select</button>
                </div>
            </div>
            <div className='border py-2 my-2 rounded-[10px]  w-[30%] min-h-[500px] flex flex-col justify-between items-center gap-[30px] max-[800px]:w-[50%] max-[600px]:w-[80%]'>
                <div className='flex flex-col items-center gap-[30px]'>
                <div>
                    <img src={box} alt="" />
                </div>
                <div className='w-[100%] flex flex-col justify-center gap-[30px]'>
                    <span className='text-center font-bold'>Standard Plan</span>
                    <div className='flex flex-col gap-[10px]'>
                    <div className="flex items-center gap-[10px]">
                <FaCheck className=" text-[#2FAB73] text-[12px]"/>
                <span className="text-[#4F5665] text-[14px]">Unlimited Bandwith</span>
                </div>
                <div className="flex items-center gap-[10px]">
                <FaCheck className=" text-[#2FAB73] text-[12px]"/>
                <span className="text-[#4F5665] text-[14px]">Encrypted Connection</span>
                </div>
                <div className="flex items-center gap-[10px]">
                <FaCheck className=" text-[#2FAB73] text-[12px]"/>
                <span className="text-[#4F5665] text-[14px]">Yes Traffic Logs.</span>
                </div>
                <div className="flex items-center gap-[10px]">
                <FaCheck className=" text-[#2FAB73] text-[12px]"/>
                <span className="text-[#4F5665] text-[14px]">Work on All Devices</span>
                </div>
                <div className="flex items-center gap-[10px]">
                <FaCheck className=" text-[#2FAB73] text-[12px]"/>
                <span className="text-[#4F5665] text-[14px]">Connect Anywhere</span>
                </div>
                </div>
                </div>
                </div>
                <div className='w-[100%] flex flex-col justify-center items-center gap-[20px] font-bold'>
                    <span><b>$9</b> / mo</span>
                    <button className="py-1 px-4 w-[50%]  bg-transparent border border-[#F53855] text-[#F53855] text-[12px] rounded-[20px]">Select</button>
                </div>
            </div>
            <div className='border border-[#F53855] py-2 my-2 rounded-[10px]  w-[30%] min-h-[500px] flex flex-col justify-between items-center gap-[30px] max-[800px]:w-[50%] max-[600px]:w-[80%]'>
                <div className='flex flex-col items-center gap-[30px]'>
                <div>
                    <img src={box} alt="" />
                </div>
                <div className='w-[100%] flex flex-col justify-center gap-[30px]'>
                    <span className='text-center font-bold'>Premium Plan</span>
                    <div className='flex flex-col gap-[10px]'>
                    <div className="flex items-center gap-[10px]">
                <FaCheck className=" text-[#2FAB73] text-[12px]"/>
                <span className="text-[#4F5665] text-[14px]">Unlimited Bandwith</span>
                </div>
                <div className="flex items-center gap-[10px]">
                <FaCheck className=" text-[#2FAB73] text-[12px]"/>
                <span className="text-[#4F5665] text-[14px]">Encrypted Connection</span>
                </div>
                <div className="flex items-center gap-[10px]">
                <FaCheck className=" text-[#2FAB73] text-[12px]"/>
                <span className="text-[#4F5665] text-[14px]">Yes Traffic Logs.</span>
                </div>
                <div className="flex items-center gap-[10px]">
                <FaCheck className=" text-[#2FAB73] text-[12px]"/>
                <span className="text-[#4F5665] text-[14px]">Work on All Devices</span>
                </div>
                <div className="flex items-center gap-[10px]">
                <FaCheck className=" text-[#2FAB73] text-[12px]"/>
                <span className="text-[#4F5665] text-[14px]">Connect Anywhere</span>
                </div>
                <div className="flex items-center gap-[10px]">
                <FaCheck className=" text-[#2FAB73] text-[12px]"/>
                <span className="text-[#4F5665] text-[14px]">Get New Features</span>
                </div>
                </div>
                </div>
                </div>
                <div className='w-[100%] flex flex-col justify-center items-center gap-[20px] font-bold'>
                    <span>$12/mo</span>
                    <button className="py-1 px-4 w-[50%]  shadow-xl  bg-[#F53855] text-white text-[12px] rounded-[20px]">Select</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Plan