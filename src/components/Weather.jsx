import search from '../assets/image/search.png'
import clear from '../assets/image/clear.png'
import cloud from '../assets/image/cloud.png'
import drizzle from '../assets/image/drizzle.png'
import humidity from '../assets/image/humidity.png'
import rain from '../assets/image/rain.png'
import snow from '../assets/image/snow.png'
import wind from '../assets/image/wind.png'


function Weather() {
  return (
    <>
      <div className="h-[100vh] mx-auto flex justify-center items-center ">
        <div className="w-[40%] my-[15px] flex  bg-gradient-to-b from-pink-600 via-purple-600 to-violet-800 rounded-lg">
          <input
            type="text"
            placeholder="search"
            className="w-2/3 h-[40px] my-[15px]  rounded-[10px] ml-[40px] mr-[20px] py-2 px-2 outline-none text-black font-semibold text-md"
          />
          <button className="bg-white w-[40px] my-[15px] mr-[7px] flex justify-center items-center rounded-full h-[40px]">
            <img className="" src={search} alt="search" />
          </button>
        </div>
        <img src={} alt="" />
      </div>
    </>
  );
}

export default Weather