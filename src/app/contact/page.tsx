import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from "../(components)/Footer";
import Navbar from "../(components)/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact | Muth Farm Flowers"
};

const Contact = () => {

    return (
        <>

            <Navbar selectedElementIndex={3} />

            <section id="contact-info" className="py-10 text-center mt-8 mb-16">

                <h1 className="font-black text-7xl lg:text-8xl mb-4">Muth Farm Flowers</h1>
                <h2 className="text-4xl lg:text-6xl mb-16 lg:mb-28 font-light">Mary Ellen Muth</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 text-center">
                    <div className="flex items-center flex-col mb-12 lg:mb-0">
                        <div className="bg-neutral w-24 h-24 rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faLocationDot} className="w-1/2 text-neutral-content" />
                        </div>
                        <h1 className="text-4xl font-black mt-5">Location</h1>
                        <h2 className="text-2xl font-bold mt-5">Williamstown</h2>
                        <h2 className="text-xl">New Jersey, 08094</h2>
                    </div>

                    <div className="flex items-center flex-col mb-12 lg:mb-0">
                        <div className="bg-neutral w-24 h-24 rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faPhone} className="w-1/2 text-neutral-content" />
                        </div>
                        <h1 className="text-4xl font-black mt-5">Phone</h1>
                        <a className="text-2xl font-bold mt-5 hover:link" href={"tel:856-629-2462"}>{"+1 (856) 629-2462"}</a>
                    </div>

                    <div className="flex items-center flex-col">
                        <div className="bg-neutral w-24 h-24 rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faMailBulk} className="w-1/2 text-neutral-content" />
                        </div>
                        <h1 className="text-4xl font-black mt-5">Email</h1>
                        <a className="text-2xl font-bold mt-5 hover:link" href={"mailto:info@muthfarmflowers.com"}>info@muthfarmflowers.com</a>
                    </div>
                </div>
                <h1 className="text-center font-bold text-3xl mt-5">Visitors welcome by appointment only.</h1>

            </section>

            <section id="associations" className="bg-secondary py-5">
                <h1 className="text-5xl font-black text-center mt-16 mb-14">Our Associations</h1>

                <div id="organizations" className="grid grid-cols-1 lg:grid-cols-2 pb-16 max-w-screen w-screen px-5">

                    <div className="flex justify-center">
                        <div className="card card-compact bg-base-content text-base-100 w-full lg:min-w-96 lg:w-6/12 shadow-xl">
                            <figure className="h-52 lg:h-1/2">
                                <img src="muthfamilyfarm.jpg" alt="" />
                            </figure>
                            <div className="card-body my-8">
                                <h2 className="card-title text-3xl font-black">Muth Family Farm</h2>
                                <p className="text-xl pb-5">Family operated certified organically grown produce.</p>
                                <Link className="btn" href="https://www.muthfamilyfarm.com/" target="_blank">Learn More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-16 mx-5 lg:mx-0 lg:mt-0">
                        <div className="card card-compact bg-base-content text-base-100 w-full lg:min-w-96 lg:w-6/12 shadow-xl">
                            <figure className="bg-base-200 h-52 lg:h-1/2 flex items-center justify-center">
                                <img src="ascfg-logo.png" alt="" />
                            </figure>
                            <div className="card-body my-8">
                                <h2 className="card-title text-3xl font-black">ASCFG</h2>
                                <p className="text-xl pb-5">Association of Specialty Cut Flower Growers. <span className="font-bold">Member Since 2008</span></p>
                                <Link className="btn" href="https://www.ascfg.org/" target="_blank">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section id="vase-life" className="my-20 lg:my-28 text-left">

                <h1 className="text-5xl font-black text-center lg:text-left lg:pl-16">For Optimal Vase Life of Fresh Cut Flowers</h1>

                <ul className="list-disc text-3xl pl-10 mt-12 lg:pl-24">
                    <li className="my-8">Always start with a <strong>super clean vase</strong>.</li>
                    <li className="my-8">Keep arrangement away from <strong>sun, heat, wind and ripening fruit</strong>.</li>
                    <li className="my-8">Use <strong>flower food</strong> as instructed on packet.</li>
                    <li className="my-8"><strong>Check the water level</strong>; top off as needed, especially the first few days.</li>
                    <li className="my-8">If <strong>no flower food available</strong>, trim stems 1/4&quot; and change water every few days. Add a few drops of household bleach to water to prevent decay.</li>
                    <li className="my-8"><strong>NEVER</strong> allow leaves in the water.</li>
                </ul>

            </section>

            <section id="aerial-view" className="flex justify-center items-center bg-secondary text-secondary-content pb-14 pt-5">

                <div className="flex flex-col mt-10 items-center w-full text-center">
                    <div className="w-full h-full flex justify-center text-center flex-col items-center">
                        <img src="aerial-view.jpg" alt="Aerial View" className="w-[95vw] md:w-[50%] lg:w-[30%] rounded-xl border-base-200 border-solid border-8" />
                        <p className="text-center text-xl mt-3 font-bold italic">Aerial View Muth Farm Circa 1960</p>
                    </div>
                </div>

            </section>

            <Footer />

        </>
    )

}

export default Contact;