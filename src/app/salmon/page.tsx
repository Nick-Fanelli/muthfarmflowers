import { Dancing_Script } from "next/font/google"

const dancingScript = Dancing_Script({
    subsets: ['latin'],
});

const salmonColor = "#ffc891";

export default function Home() {
    return (
        <>
            <div className={`navbar bg-[${salmonColor}] h-[2rem]`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>About Us</a></li>
                            <li><a>Plant List</a></li>
                            <li><a>Photo Gallery</a></li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Muth Farm Flowers</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>About Us</a></li>
                        <li><a>Plant List</a></li>
                        <li><a>Photo Gallery</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Contact Us</a> */}
                </div>
            </div>

            <section id="main" className="relative w-screen h-[80vh] bg-cover flex justify-start items-start 2xl:justify-center 2xl:items-center">
                <div className="pt-10 pl-2 2xl:p-0">
                    <h1 className="text-[10vw] 2xl:text-[7vw] font-black text-yellow-300 leading-[7vw]">Muth Farm Flowers</h1>
                    <h3 className="text-[5vw] 2xl:text-[3vw] font-bold text-right text-orange-400 font-serif italic">A Growing Tradition</h3>
                </div>

                <div className="absolute inset-0 w-full h-full z-[-10] bg-cover" style={{backgroundImage: "url('heading.jpg')"}} />
            </section>

            <section id="welcome" className="md:flex w-full gap-5 px-10 md:px-32 py-32 relative">

                <img src="tlborder.png" alt="Flowers" className="absolute top-[-75px] left-[-75px] z-[-1]" />

                <div className="w-full flex items-center text-center md:text-left">
                    <div className="mb-10 md:mb-0">
                        <h1 className="text-[8vw] md:text-[6vw] xl:text-[3vw] leading-[100%] font-bold">Welcome to Muth Farm Flowers</h1>
                        <p className="text-2xl mt-10">Sustainably grown, fresh cut flowers for you or your special event or business. Proudly grown in Southern New Jersey, bouquets available at local Farmers Markets.</p>
                        <button className="btn mt-10">Learn More</button>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center">
                    <img src="flower001.jpeg" alt="Image of flowers" className="w-[75%] lg:w-[50%] h-auto rounded-2xl border-solid border-[7px] border-base-300" />
                </div>

            </section>

            <section id="quote" className="w-full text-secondary-content text-center relative">
                <h1 className={`${dancingScript.className} text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl py-10 md:py-28`}>Our <span className="font-black">long lasting</span> cut flowers are a <span className="italic">pleasure</span> to work with!</h1>
                <div className={`absolute bg-[${salmonColor}] top-0 left-0 right-0 bottom-0 z-[-2]`}></div>
            </section>

            <section id="choose-us" className="md:flex w-full gap-5 px-10 md:px-32 py-32 relative">

                <img src="trborder.png" alt="Flowers" className="absolute top-[-75px] right-[-75px] z-[-1]" />

                <div className="w-full flex justify-center items-center mb-10 md:mb-0">
                    <img src="flower002.jpg" alt="Image of flowers" className="w-[75%] lg:w-[50%] h-auto rounded-2xl border-solid border-[7px] border-base-300" />
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

            <footer className={`bg-[${salmonColor}] text-secondary-content`}>
                <div className="md:flex text-center md:text-left justify-between px-10 items-center pt-10">
                    <div>
                        <h1 className="text-4xl font-bold">Muth Farm Flowers</h1>
                        <p className="text-xl">Williamstown, New Jersey, 08094</p>
                    </div>

                    <div className="text-center mt-5 md:mt-0 md:text-right">
                        <a className="text-xl font-black hover:link" href="tel:856-629-2462">856-629-2462</a>
                        <br />
                        <a className="text-xl font-black hover:link" href="mailto:info@muthfarmflowers.com">info@muthfarmflowers.com</a>
                    </div>
                </div>
                <p className="text-center pb-1 text-xl mt-5 md:mt-0">Copyright © 2024 Muth Farm Flowers</p>
            </footer>

        </>
    );
}
