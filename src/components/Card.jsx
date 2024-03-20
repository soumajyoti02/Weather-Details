import PropTypes from 'prop-types';

const Card = ({ url, place, weather }) => {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    return (
        <>
            <div className="card w-11/12 h-[23rem] bg-base-100 shadow-xl m-auto mt-10 md:w-1/2 md:h-full md:ml-28">
                <figure><img src={url} alt={place} className='rounded-lg' /></figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold text-xl">{place}</h2>
                    <p>Weather is : {capitalize(weather.desc)}</p>
                    <p>Temperature is : {weather.temp}F</p>
                    <p>Humidity is : {weather.humidity}%</p>
                </div>
            </div>
        </>
    )
}

Card.propTypes = {
    url: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired
};

export default Card
