import Header from "./Header";
import Hero from "./Hero";

export default function HomePage(){
    return(
        <section 
            className="min-h-screen rounded-bl-[100px] relative bg-linear-to-b from-light-red-300 to-light-red-400 overflow-hidden"
            >
            <div 
                className="absolute inset-0 bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/bg-pattern-intro-mobile.svg')", backgroundSize: "2400px" }}
            ></div>
            <div className="relative z-10">
                <Header />
                <Hero />
            </div>
        </section>
    )
}