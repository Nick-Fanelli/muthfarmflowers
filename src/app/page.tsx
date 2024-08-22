import Link from "next/link";
import Footer from "./(components)/Footer";
import Navbar from "./(components)/Navbar";

import { Dancing_Script } from "next/font/google"

const dancingScript = Dancing_Script({
    subsets: ['latin'],
});

export default function Home() {
    return (
        <>
            <Navbar />

            <section id="main" className="relative w-screen h-[80vh] flex justify-start items-start 2xl:justify-center 2xl:items-center">
                <div className="pt-10 pl-2 2xl:p-0">
                    <h1 className="text-[10vw] 2xl:text-[7vw] font-black text-yellow-300 leading-[7vw]">Muth Farm Flowers</h1>
                    <h3 className="text-[5vw] 2xl:text-[3vw] font-bold text-right text-orange-400 font-serif italic">A Growing Tradition</h3>
                </div>

                <div className="absolute inset-0 w-full h-full z-[-10] bg-cover" style={{backgroundImage: "url('heading.jpg')"}} />
            </section>

            <section id="welcome" className="md:flex w-full gap-5 px-10 md:pl-32 md:pr-0 py-32 relative xl:pl-64">

                <img src="tlborder.png" alt="Flowers" className="absolute top-[-75px] left-[-75px] z-[-1]" />

                <div className="w-full flex items-center text-center md:text-left mt-20">
                    <div className="mb-10 md:mb-0">
                        <h1 className="text-5xl leading-[100%] font-bold">Welcome to Muth Farm Flowers</h1>
                        <p className="text-2xl mt-10">Sustainably grown, fresh cut flowers for you or your special event or business. Proudly grown in Southern New Jersey, bouquets available at local Farmers Markets.</p>
                        <Link href="/about"><button className="btn mt-10">Learn More</button></Link>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center">
                    <img src="flower001.jpeg" alt="Image of flowers" className="w-[75%] lg:w-[50%] h-auto border-solid border-[10px] border-white rounded-2xl" />
                </div>

            </section>

            <section id="quote" className="w-full text-secondary-content text-center relative">
                <h1 className={`${dancingScript.className} text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl py-20 md:py-28`}>Our <span className="font-black">long lasting</span> cut flowers are a <span className="italic">pleasure</span> to work with!</h1>
                <div className="absolute bg-secondary top-0 left-0 right-0 bottom-0 z-[-2]"></div>
            </section>

            <section id="choose-us" className="md:flex w-full gap-5 px-10 md:px-32 py-32 relative">

                <img src="trborder.png" alt="Flowers" className="absolute top-[-75px] right-[-75px] z-[-1]" />

                <div className="w-full flex justify-center items-center mb-10 md:mb-0">
                    <img src="flower002.jpg" alt="Image of flowers" className="w-[75%] lg:w-[50%] h-auto border-solid border-[10px] border-white rounded-2xl" />
                </div>

                <div className="w-full flex items-center text-center md:text-left">
                    <div className="">
                        <h1 className="text-[8vw] md:text-[6vw] xl:text-[3vw] leading-[100%] font-bold mb-10">What We Offer</h1>

                        <ul className="list-disc ml-10 text-2xl mb-5 leading-10 text-left">
                            <li>Flower Bouquets and Arrangements</li>
                            <li>Custom Blends by Bucket</li>
                            <li>Wholesale</li>
                        </ul>

                        <button className="btn mt-10">Contact Us</button>
                    </div>
                </div>

            </section>

            <Footer />

        </>
    );
}
