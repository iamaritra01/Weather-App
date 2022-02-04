import React, { useEffect, useState } from 'react';
import '../CSS/Style.css';
function Weather() {

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Mumbai");

    useEffect(()=>{
        const fetchApi = async() =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=dc9e20a1ea57b31026427a6f52bdcb22`
            const response = await fetch(url);
            // console.log(response);
            const resJSON =  await response.json();
            // console.log(resJSON);
            setCity(resJSON.main);
        };

        fetchApi();
    },[search] )
    return (
        <div>
            <div className='box'>
                <div className="inputData">
                    <input type="search" value={search} className='inputField'  onChange={(event) =>{
                        setSearch(event.target.value);
                    }}/>
                </div>
            
            {!city ? (
                <p>No Data Found</p>
            ): (
                <div>
                <div className="info">
                <h2 className='location'>  
                <i className="fas fa-street-view"></i> {search}
                </h2>
                <h1 className='temp'>
                    {city.temp} ℃
                </h1>

                <h3 className='tempmin_max'> Min : {city.temp_min}℃ | Max : {city.temp_min}℃</h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>
            )}
        </div>
        </div>
    );
}

export default Weather;