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

            <h1 className="text-5xl font-black text-center mt-8">Contact Us</h1>

            <section id="owner-info" className="w-screen mt-12 mb-16">
                <div className="card lg:card-side bg-secondary shadow-xl mx-1 lg:mx-10">
                    <figure className="w-full lg:w-5/12">
                        <img src="maryellenmuth.jpg" alt="Mary Ellen Muth" className="w-full h-auto" />
                    </figure>
                    <div className="card-body flex justify-center ml-[2vw] !px-0">
                        <span className="text-center lg:text-left">
                            <h1 className="font-black text-4xl sm:text-5xl lg:text-[5vw]">Mary Ellen Muth</h1>
                            <p className="text-2xl sm:text-3xl lg:text-[2.25vw] mt-3 lg:mt-[2vw] lg:leading-[3vw] font-bold">Muth Farm Flowers</p>
                            <p className="text-xl sm:text-2xl lg:text-[2vw]">Founder & Owner</p>
                        </span>
                    </div>
                </div>
            </section>

            <section id="contact-info" className="grid grid-cols-1 lg:grid-cols-3 text-center bg-secondary py-10">

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

            </section>

            <h1 className="text-5xl font-black text-center mt-16 mb-14">Our Associations</h1>

            <section id="organizations" className="grid grid-cols-1 md:grid-cols-2 pb-16">

                <div className="flex justify-center">
                    <div className="card card-compact bg-base-content text-base-100 min-w-96 w-6/12 shadow-xl">
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

                <div className="flex justify-center mt-16 mx-5 md:mx-0 md:mt-0">
                    <div className="card card-compact bg-base-content text-base-100 min-w-96 w-6/12 shadow-xl">
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

            </section>

            <Footer />

        </>
    )

}

export default Contact;