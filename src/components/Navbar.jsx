const Navbar = () => {
    return (
        <>
            <div className="h-20 bg-slate-900 w-screen  py-5 px-8 md:px-28 flex justify-between items-center rounded-b-3xl">
                <p className="text-lg text-white font-semibold">WeatherNow</p>
                <button className="btn btn-neutral btn-sm text-white"><a href="/">Refresh</a></button>
            </div>
        </>
    )
}

export default Navbar
