import Button from "./Button/Button";

export default function Hero(){
    return(
        <div className="h-[70vh] flex flex-col items-center justify-center text-white text-center gap-6 px-4">
            <h1 className="text-4xl font-bold">A modern publishing platform</h1>
            <p className="text-[#ffffffc9]">Grow your audience and build your online brand</p>
            <div className="flex gap-4 justify-evenly items-center mt-10">
                <Button variant="filled">Start for Free</Button>
                <Button variant="transparent" withBorder>Learn More</Button>
            </div>
        </div>
    )
}