import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {

	const [url, setUrl] = useState("")
	const [city, setCity] = useState("")
	const [loc, setLoc] = useState({ lat: "", lon: "" })
	const [weather, setWeather] = useState({ desc: "", temp: "", humidity: "" })

	useState(() => {
		setWeather({ desc: "", temp: "", humidity: "" })
		setLoc({ lat: "", lon: "" })
	})

	const access_key = "Z79VCnstJy-KX6RXnze1D1hphoCx5Y2brwCwbdEM-UA"
	const fetchData = async () => {
		const data = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=${access_key}`);

		const res = await data.json()
		setUrl(res.results[0].urls.small)

		const locData = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=bc76533245561d7f644ca293cd74cf67`);

		const locRes = await locData.json()
		setLoc({
			lat: locRes[0].lat,
			lon: locRes[0].lon
		})

		const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${loc.lat}&lon=${loc.lon}&appid=bc76533245561d7f644ca293cd74cf67`)

		const weatherRes = await weatherData.json()
		setWeather({
			desc: weatherRes.weather[0].description,
			temp: weatherRes.main.temp,
			humidity: weatherRes.main.humidity
		})

	}

	const handleChange = (e) => {
		setCity(e.target.value)
	}

	return (
		<>
			<Navbar />

			<div className="inputs m-auto w-11/12 md:w-[80%] mt-10 md:flex md:justify-between md:items-center md:h-[60vh] md:mt-20">
				<div className='md:w-1/2 md:h-full md:flex md:flex-col md:justify-center'>
					<label className="form-control w-full">
						<div className="label">
							<span className="label-text">Type Your City Name</span>
						</div>
						<input onChange={handleChange} value={city} name='city' type="text" placeholder="Type here" className="input input-bordered w-full input-secondary" />
					</label>
					<div className="flex justify-center items-center mt-6">
						<button onClick={fetchData} className="btn btn-active btn-secondary btn-sm text-yellow-100 font-bold">Get Weather</button>
					</div>
				</div>
				{url && <Card url={url} place={city} weather={weather} />}
			</div>
		</>
	)
}

export default App
