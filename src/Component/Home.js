import { useEffect, useState } from 'react';
import './Home.css';
import LastCity from './LastCity';
import Result from './Result';
const Home = () => {
    const [city, getCity] = useState("")
    const [disCity, equalCity] = useState("")
    const [main, saveApiobj] = useState({})
    const [error, setError] = useState(true)
    const [lastCity, saveLast] = useState([])
    // useEffect(() => {
    //     getCityweather()
       
    // }, [])
    const getCityweather = async () => {
        saveApiobj({})
        setError(true)
        try {
            let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e683e3208513fc4b5b3c30b96d3117b&units=metric`)
            result = await result.json()
            // console.log(result)
            if (result.cod!=="404") {
                equalCity(result.name)
                const api=result.main
                saveApiobj({ ...api })
                if(lastCity.length<3){
                    saveLast([...lastCity,disCity])
                }
                else{
                    lastCity.shift()
                    saveLast([...lastCity,disCity])
                }
              
            }
            else {
                setError(false)
            }
        }
        catch {
            // setError(false)
        }

    }
    return (
        <>
            <div className="box" style={{ color: "blue" }}>
                <div>
                    <h1>Weather App</h1>
                    <div className='search-bar'>
                        <input
                            placeholder="Enter city name"
                            onChange={(e) => { getCity(e.target.value) }}
                            value={city}
                        />
                        <span><button onClick={getCityweather}>Search</button></span>
                    </div>

                    {city ?
                        error ?

                            <Result city={disCity} result={main} />
                            :
                            <h1 style={{ color: "#fff", backgroundColor: "red" }}>Enter a valid city name</h1>
                        :
                        <LastCity last={lastCity} />


                    }
                </div>

            </div>
        </>
    )
}

export default Home;