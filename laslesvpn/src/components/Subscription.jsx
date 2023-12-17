
const Subscription = () => {
  return (
    <div className="w-[100%] p-2 my-[30px]">
        <div className="w-[70%] mx-auto shadow-lg p-8  rounded-[10px] max-[900px]:w-[80%]">
           <div className="w-[90%] mx-auto flex justify-between items-center gap-[20px] max-[600px]:flex-col">
           
            <div className="flex-1">
                <div className="flex flex-col gap-[5px] max-[600px]:items-center">
                <span className="font-bold text-[30px] max-[700px]:text-[20px]">Subscribe Now</span>
                <span className="font-bold text-[30px] max-[700px]:text-[20px]">Get Special Features!</span>
                </div>
                <div>
                    <span className="text-[#4F5665] text-[14px] max-[700px]:text-[12px]">Let&apos;s subscribe with us and find the fun. </span>
                </div>
            </div>
            <div className="flex justify-end">
            <button className="py-3 px-4   shadow-xl  bg-[#F53855] text-white text-[12px] rounded-[10px] max-[600px]:py-2 max-[600px]:px-2 max-[600px]:text-[10px]">Subscribe Now</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Subscription