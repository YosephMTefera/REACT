import map from '../Images/map.png'
import netflix from '../Images/netflix.png'
import reddit from '../Images/reddit.png'
import discord from '../Images/discord.png'
import spotify from '../Images/spotify.png'

const GlobalNetwork = () => {
  return (
    <div className="w-[100%] mt-[100px] p-2">
        <div className="w-[100%] mx-auto flex flex-col">
            <div className="w-[100%] flex flex-col items-center justify-center gap-[10px]">
                <span className="text-[30px] font-bold max-[600px]:text-[25px] max-[500px]:text-[20px]">Huge Global Network of Fast VPN</span>
                <span className='text-[#4F5665] w-[30%] text-center max-[1000px]:w-[50%]  max-[600px]:text-[12px]'>See <b className='text-black'>LaslesVPN</b> everywhere to make it easier for you when you move locations.</span>
            </div>
            <div className='bg-[#F8F8F8] my-[50px]'>
            <div className="w-[100%] my-[100px] flex justify-center items-center">
                <img src={map} className='w-[50%] object-cover max-[1000px]:w-[80%]' alt="" />
            </div>
            <div className='w-[70%] my-[50px] mx-auto flex justify-between items-center max-[1000px]:w-[90%]'>
                <div className='w-[100%] h-[100%]'>
                    <img src={netflix} className='w-[50%] object-cover max-[1000px]:w-[80%]' alt=''/>
                </div>
                <div className='w-[100%]'>
                    <img className='w-[50%] object-cover  max-[1000px]:w-[80%]' src={reddit} alt=''/>
                </div>
                <div className='w-[100%]'>
                    <img className='w-[50%] object-cover  max-[1000px]:w-[80%]' src={discord} alt=''/>
                </div>
                <div className='w-[100%]'>
                    <img className='w-[50%] object-cover  max-[1000px]:w-[80%]' src={spotify} alt=''/>
                </div>
            </div>
            </div>
         
         
        </div>
    </div>
  )
}

export default GlobalNetwork