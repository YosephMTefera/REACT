import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import logo from "../Images/Logologo.png";

const Footer = () => {
  return (
    <div className="w-[100%] p-2 bg-[#F8F8F8]">
        <div className="w-[80%] my-[50px] mx-auto flex justify-between items-start max-[900px]:flex-col">
            {/* footer logo */}
            <div className="w-[40%] flex flex-col gap-[20px] max-[900px]:w-[50%] max-[550px]:w-[70%]">
                <div>
                    <img src={logo} alt=""/>
                </div>
                <div className=" flex-1">
                    <span className="text-[#4F5665] text-[14px]"><b className="text-black">LaslesVPN</b> is a private virtual network that has unique features and has high security.</span>
                </div>
                <div className="flex items-center gap-[20px]">
                <FaFacebookF className="w-[30px] h-[30px] bg-white rounded-full p-2 text-[14px] text-[#F53855]" />
                <FaTwitter className="w-[30px] h-[30px] bg-white rounded-full p-2 text-[14px] text-[#F53855]"/>
                <FaInstagram  className="w-[30px] h-[30px] bg-white rounded-full p-2 text-[14px] text-[#F53855]"/>
                </div>
                <div>
                    <span className="text-[#AFB5C0] text-[12px]">©2020LaslesVPN</span>
                </div>
            </div>
            {/* links */}
            <div className="w-[40%] flex justify-between  items-start gap-[30px] max-[1200px]:w-[50%] max-[900px]:w-[100%] max-[900px]:my-[30px]">
            <div className="flex justify-between gap-[50px]">
                <div className="flex flex-col items-start gap-[20px]">
                    <span className="font-bold">Product</span>
                    <div className="flex flex-col text-[12px] gap-[10px] text-[#4F5665]">
                        <a href="/">Download</a>
                        <a href="/">Pricing</a>
                        <a href="/">Location</a>
                        <a href="/">Server</a>
                        <a href="/">Countries</a>
                        <a href="/">Blog</a>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-[20px]">
                    <span className="font-bold">Engage</span>
                    <div  className="flex flex-col text-[12px] gap-[10px] text-[#4F5665]">
                        <a href="/">LaslesVPN?</a>
                        <a href="/">FAQ</a>
                        <a href="/">Tutorials</a>
                        <a href="/">About Us</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Terms of Service</a>
                    </div>
                </div>
            </div>
            <div>
            <div className="flex flex-col items-start gap-[20px]">
                    <span className="font-bold">Earn Money</span>
                    <div className="flex flex-col text-[12px] gap-[10px] text-[#4F5665]">
                        <a href="/">Affiliate</a>
                        <a href="/">Become Partner</a>
                     
                    </div>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer