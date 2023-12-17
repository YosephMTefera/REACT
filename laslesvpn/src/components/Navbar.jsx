import logo from "../Images/Logologo.png";

const Navbar = () => {
  return (
    <div className="w-[100%] h-[100px] bg-white flex justify-center items-center">
      <div className="w-[80%] mx-auto flex justify-between items-center max-[1000px]:w-[90%]">
        <div className="w-[100px]">
          <img src={logo} alt="" className="w-[100%]" />
        </div>
        <div className="flex items-center gap-[50px] text-[#4F5665] max-[1000px]:gap-[25px] max-[750px]:hidden">
          <a href="/">About</a>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Testimonials</a>
          <a href="/">Help</a>
        </div>
        <div className="flex items-center gap-[20px]">
          <button className="text-[14px]">Sign in</button>
          <button className="py-1 px-4 bg-transparent text-[14px] border border-[#F53855] text-[#F53855] rounded-[20px] hover:bg-[#F53855] hover:transition  hover:duration-[500ms] hover:ease-in-out hover:text-white hover:border-none">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
