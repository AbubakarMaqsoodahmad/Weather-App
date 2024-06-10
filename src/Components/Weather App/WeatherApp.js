import React, { useState } from 'react'
import search_icon from "../Assets/search.png"
import clear_icon from "../Assets/clear.png"
import drizzle_icon from "../Assets/drizzle.png"
import humidity_icon from "../Assets/humidity.png"
import rain_incon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"
import cloud_icon from "../Assets/cloud.png"
const WeatherApp = () => {
    let api_key = "ce60ec7a8968965e51c063d0f0e7d186";
    const [wicon, setWicon] = useState(cloud_icon);
    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if (element[0].value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-rate")
        const temprature = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")
        humidity[0].innerHTML = Math.floor(data.main.humidity) + "%";
        wind[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
        temprature[0].innerHTML = Math.floor(data.main.temp) + "°C";
        location[0].innerHTML = data.name;
        if (data.weather[0].icon == "01d" || data.weather[0].icon == "01n") {
            setWicon(clear_icon);
        }
        else if (data.weather[0].icon == "02d" || data.weather[0].icon == "02n") {
            setWicon(cloud_icon);
        }
        else if (data.weather[0].icon == "03d" || data.weather[0].icon == "03n") {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon == "04d" || data.weather[0].icon == "04n") {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon == "09d" || data.weather[0].icon == "09n") {
            setWicon(rain_incon);
        }
        else if (data.weather[0].icon == "10d" || data.weather[0].icon == "10n") {
            setWicon(rain_incon);
        }
        else if (data.weather[0].icon == "13d" || data.weather[0].icon == "13n") {
            setWicon(snow_icon);
        }
        else {
            setWicon(clear_icon);
        }
    }
    return (
        <>
            <div className='max-w-screen-md py-5 mx-auto mt-4 shadow-xl bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-gray-600 rounded-2xl'>
                <div className='top-bar flex justify-center gap-3 pt-14 '>
                    <input type="text" className="cityInput flex w-72 h-14 bg-neutral-200 rounded-3xl text-sm  pl-10 text-slate-500 font-medium" placeholder='Search' />
                    <div onClick={() => { search() }} className="search-icon flex justify-center items-center w-16 h-14 bg-white rounded-2xl cursor-pointer">
                        <img src={search_icon} alt="" />
                    </div>
                </div>
                <div className='weather-img flex justify-center'>
                    <img src={wicon} alt='' />
                </div>
                <div className='weather-temp flex justify-center text-white text-5xl'>24°C</div>
                <div className='weather-location flex justify-center text-white text-5xl'> London</div>
                <div className='data-container'>
                    <div className='cont flex justify-center text-white font-medium space-x-24 mt-10 p-5 '>
                        <div className='element flex justify-between space-x-3'>
                            <img src={humidity_icon} alt=' ' className='icon' />
                            <div className='data'>
                                <div className='humidity-percent'>45%</div>
                                <div className='text'> Humidity</div>
                            </div>
                        </div>
                        <div className='element flex justify-center space-x-3'>
                            <img src={wind_icon} alt=' ' className='icon' />
                            <div className='data'>
                                <div className='wind-rate'>18km/h</div>
                                <div className='text'> Wind Speed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherApp;
