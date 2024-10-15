import search from '../assets/image/search.png'
import clear from '../assets/image/clear.png'
import cloud from '../assets/image/cloud.png'
import drizzle from '../assets/image/drizzle.png'
import humidity from '../assets/image/humidity.png'
import rain from '../assets/image/rain.png'
import snow from '../assets/image/snow.png'
import wind from '../assets/image/wind.png'
import { useRef, useState } from 'react'
import { useEffect } from 'react'


function Weather() {

  const inputRef = useRef()

  const allIcons ={
    '01d':clear,
    '01n':clear,
    '02d':cloud,
    '02n':cloud,
    '03d':cloud,
    '03n':cloud,
    '04d':drizzle,
    '04n':drizzle,
    '09d' : rain,
    '09n' : rain,
    '10d' : rain,
    '10n' : rain,
    '13n' : snow,
    '13d' : snow,
  }
  const [weatherData,setWeatherData] =useState(false)
  const searchLocation =async (cityName)=>{
    if(cityName == ''){
      alert('error! , input field is empty.');
      
    }
    try{
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const data = await response.json();
      
      const icon = allIcons[data.weather[0].icon] || clear
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location : data.name,
        icon : icon,
        
      });
      
    }catch(error){}
  }
  
  
  useEffect(() => {
    searchLocation('bengaluru');
  },[]);
  return (
    <>
      <div className="h-[100vh] mx-auto flex justify-center items-center  font-serif  ">
        <div className="w-[50%] my-[15px] flex flex-wrap bg-gradient-to-b from-pink-600 via-purple-600 to-violet-800 rounded-lg">
          <input
            ref={inputRef}
            type="text"
            placeholder="search"
            className="w-2/3 h-[40px] my-[15px]  rounded-[10px] ml-[80px] mr-[20px] py-2 px-2 outline-none text-black font-semibold text-2xl"
          />
          <button
            onClick={() => searchLocation(inputRef.current.value)}
            className="bg-white w-[40px] my-[15px] mr-[7px] flex justify-center items-center rounded-full h-[40px]"
          >
            <img className="" src={search} alt="search" />
          </button>
          <div className="w-full flex justify-center">
            <img className="" width={150} src={weatherData.icon} alt="" />
          </div>
          <p className="w-full text-center text-[50px] py-[15px] font-bold">
            {weatherData.temperature}
          </p>
          <p className="w-full text-center text-[35px]  py-[15px] font-semibold">
            {weatherData.location}
          </p>
          <div className="w-full flex relative">
            <div className="grid grid-cols-[30%_auto] gap-4  px-[30px] py-[20px]">
              <img className="py-[12px]" src={humidity} alt="" />
              <div>
                <p className=" text-xl">{weatherData.humidity} %</p>
                <span className="font-semibold text-xl">humidity</span>
              </div>
            </div>
            <div className="absolute grid grid-cols-[20%_auto] gap-4  px-[30px] py-[20px] right-[10px] bottom-[12px]">
              <img className="py-[12px]" src={wind} alt="" />
              <div>
                <p className=" text-xl">{weatherData.windSpeed} km/hr</p>
                <span className="font-semibold text-xl ">wind speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;