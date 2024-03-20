import PropTypes from 'prop-types';

const Card = ({ url, place, weather }) => {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    return (
        <>
            <div className=" w-11/12 p-3 bg-base-100 shadow-xl m-auto mt-10 md:mt-5 md:w-1/2 md:h-full md:ml-28">
                <figure><img src={url} alt={place} className='rounded-lg' /></figure>
                <div className=" mt-10 space-y-2">
                    <h2 className="card-title font-semibold text-xl">{place}</h2>
                    <p>Weather is : {capitalize(weather.desc)}</p>
                    <p>Temperature is : {weather.temp}F</p>
                    <p>Humidity is : {weather.humidity}%</p>
                </div>
            </div>

            {/* <div className="container px-5 py-24 m-auto mt-5 md:w-1/2 md:h-full md:ml-28">
                <div className="flex flex-wrap -m-4 glowing-effect rounded-3xl">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full  rounded-lg overflow-hidden">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center rounded-3xl" src={url} alt={place} />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Weathert Details</h2>
                                <h1 className="title-font text-lg font-bold text-white mb-3">{place}</h1>
                                <p>Weather is : {capitalize(weather.desc)}</p>
                                <p>Temperature is : {weather.temp}F</p>
                                <p>Humidity is : {weather.humidity}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

Card.propTypes = {
    url: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired
};

export default Card
