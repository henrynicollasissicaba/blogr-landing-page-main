export default function Hero(){
    return(
        <div className="h-[70vh] flex flex-col items-center justify-center text-white text-center gap-6 px-4">
            <h1 className="text-4xl font-bold">A modern publishing platform</h1>
            <p className="text-[#ffffffc9]">Grow your audience and build your online brand</p>
            <div className="flex gap-4 justify-evenly items-center font-bold mt-10">
                <button 
                    className="px-6 py-2 bg-white text-light-red-400 rounded-4xl
                    hover:bg-white/30 hover:text-white cursor-pointer transition-colors"
                >
                    Start for Free
                </button>
                <button 
                    className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-4xl
                    hover:bg-white hover:text-light-red-400 cursor-pointer transition-colors"
                >
                    Learn More
                </button>
            </div>
        </div>
    )
}