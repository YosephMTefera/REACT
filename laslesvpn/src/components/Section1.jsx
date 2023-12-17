import operator from "../Images/operator.jpg";
import {FaUser} from 'react-icons/fa'
import {FaLocationDot} from 'react-icons/fa6'
import {HiServer} from 'react-icons/hi'

const Section1 = () => {
  return (
    <div className="w-[100%] mt-[150px] max-[910px]:my-[100px]">
        <div className="w-[80%] mx-auto flex flex-col justify-between gap-[10px] max-[1100px]:w-[90%]">
            <div className="flex justify-between gap-[40px] max-[700px]:w-[100%]  max-[700px]:flex-col-reverse max-[700px]:items-center">
            <div className="w-[50%] flex flex-col gap-[20px] max-[700px]:w-[100%] max-[700px]:items-center">
                <span className="text-[60px] font-normal max-[1500px]:text-[40px] max-[910px]:text-[30px] max-[700px]:w-[100%] max-[700px]:text-center">Want anything to be <br/> easy with <b>LaslesVPN</b></span>
                <p className="w-[70%] text-gray-500 text-[14px] max-[910px]:text-[12px] max-[700px]:w-[50%]">Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> discover interesting features from us</p>
                <div>
                    <button className="w-[30%] text-white text-[14px] bg-[#F53855] px-4 py-3 rounded-[10px] shadow-xl max-[910px]:w-[50%] max-[910px]:py-2 max-[700px]:w-[100%]">Get Started</button>
                </div>
            </div>
            <div className="w-[50%] max-[700px]:w-[80%]  max-[700px]:mx-auto max-[700px]:flex max-[700px]:items-center">
                <img src={operator} alt="" className="w-[80%] h-[100%] object-cover max-[700px]:w-[100%]"/>
                
            </div>
            </div>
            <div className="w-[100%] min-h-[150px] mx-auto flex items-center justify-center my-[100px] shadow-lg rounded-[10px]">
                <div className="w-[80%] py-4 mx-auto flex items-center justify-between max-[900px]:w-[90%] max-[600px]:flex-col">
                <div className="w-[30%] flex items-center gap-[20px] py-6 border-r border-gray-300 px-2 max-[600px]:w-[80%]">
                    <div className="w-[50px] h-[50px] bg-[#FFECEC] rounded-full flex justify-center items-center text-[#F53855] max-[600px]:w-[30px] max-[600px]:h-[30px]">
                    <FaUser  className="max-[600px]:text-[12px]"/>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <span className="font-bold max-[600px]:text-[14px]">90+</span>
                        <span className="text-[#4F5665] max-[700px]:text-[14px] max-[600px]:text-[12px]">Users</span>
                    </div>
                </div>
                <div className="w-[30%] h-[100%] py-6  flex jus items-center gap-[20px] border-r border-gray-300 max-[600px]:w-[80%]">
                    <div className="w-[50px] h-[50px] bg-[#FFECEC] rounded-full flex justify-center items-center text-[#F53855]  max-[600px]:w-[30px] max-[600px]:h-[30px]">
                    <FaLocationDot  className=" max-[600px]:text-[12px]"/>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <span className="font-bold  max-[600px]:text-[14px]">30+</span>
                        <span className="text-[#4F5665] max-[700px]:text-[14px]  max-[600px]:text-[12px]">Locations</span>
                    </div>
                </div>
                <div className="flex items-center gap-[20px] max-[600px]:w-[80%]">
                    <div className="w-[50px] h-[50px] bg-[#FFECEC] rounded-full flex justify-center items-center text-[#F53855]  max-[600px]:w-[30px] max-[600px]:h-[30px]">
                    <HiServer className=" max-[600px]:text-[12px]"/>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <span className="font-bold  max-[600px]:text-[14px]">50+</span>
                        <span className="text-[#4F5665]  max-[600px]:text-[12px]">Servers</span>
                    </div>
                </div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Section1