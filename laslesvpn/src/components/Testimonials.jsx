import { testimonials } from "../utils/data"
import {MdStarRate} from 'react-icons/md'

const Testimonials = () => {
  return (
    <div className="w-[100%] p-2 ">
        <div className="w-[80%] my-[30px] mx-auto flex flex-col items-center">
            <div className="flex flex-col items-center gap-[10px]">
                <span className="text-[30px] font-bold w-[50%] text-center max-[800px]:w-[80%] max-[600px]:w-[100%] max-[600px]:text-[20px]">Trusted by Thousands of Happy Customers</span>
                    <span className="text-[14px] text-[#4F5665] w-[70%] text-center max-[600px]:w-[90%] max-[600px]:text-[12px]">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</span>

            </div>
            <div className="w-[100%] my-[30px] grid grid-cols-3 gap-[10px] max-[1150px]:grid-cols-2 max-[700px]:grid-cols-1">
                {testimonials.map((testimonial)=>{
                    return <div key={testimonial.id} className="w-[100%] min-h-[200px]  border p-2 rounded-[5px]">
                        <div className="w-[90%]  my-[20px] mx-auto flex flex-col gap-[20px]">
                        <div className="w-[100%] flex justify-between items-center">
                            <div className="flex items-center gap-[10px] flex-1">
                                <div className="w-[50px] h-[50px] rounded-full">
                                    <img className="w-[100%] h-[100%] object-cover rounded-full" src="https://www.indiafilings.com/learn/wp-content/uploads/2023/03/Can-a-single-person-own-a-firm-in-India.jpg" alt="" />
                                </div>
                                <div className="flex flex-col gap-[5px]">
                                    <span className="font-bold max-[600px]:text-[14px]">{testimonial.user}</span>
                                    <span className="text-[12px] max-[600px]:text-[10px]">{testimonial.location}</span>
                                </div>

                            </div>
                            <div className="flex  justify-center items-center gap-[10px]">
                                <span className="max-[600px]:text-[12px]">{testimonial.rating}</span>
                                <MdStarRate className="text-[#FEA250]"/>
                            </div>
                            
                            <div>
                              
                            </div>
                        </div>
                        <div>
                            <span className="text-[14px] max-[600px]:text-[12px]">{testimonial.content}</span>
                        </div>
                        </div>

                    </div>
                })}
            </div>
            
        </div>
    </div>
  )
}

export default Testimonials