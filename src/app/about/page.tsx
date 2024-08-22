import { Metadata } from "next";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About | Muth Farm Flowers"
};

const About = () => {

    return (
        <>
            <Navbar selectedElementIndex={0} />

            <section id="our-story" className="text-center px-5 mb-10 xl:grid xl:text-left xl:items-center xl:py-10 w-screen" style={{ gridTemplateColumns: "60% 40%" }}>
                <div className="my-8 xl:px-10">

                    <h1 className="text-5xl font-black mb-10">About Muth Farm Flowers</h1>

                    <p className="text-2xl my-10">Established in 2008, following decades of growing up on a family farm and growing garden and cut flowers, our product is grown organically, using sustainable methods without chemical fertilizers or pesticides.</p>

                    <p className="text-2xl my-10">Some of the sustainable practices routinely used include a yearly addition of well composted leaves and cover-cropping to improve soil tilth and fertility, and the use of drip irrigation to conserve water. Classic old fashioned favorite cut flowers as well as novel and unusual flowers are grown. Of special interest are flowers and herbs that encourage beneficial insects or provide nectar sources for pollinators, such as dill and butterfly weed.</p>

                    <p className="text-2xl my-10">You will never find bizarre dyed colors or glitter on our bouquets or arrangements. What you will find is nature's abundance of color nuances, textures and fragrances, picked at their peak for your optimal enjoyment. We strive to have an ever changing seasonal palette that will delight your senses. We also believe flowers should be an affordable luxury and provide excellent value for your money. Therefore, we grow flowers that have a long vase life, generally 5 to 7 days. With proper care, some can last 2 weeks or longer. Our flowers vase lives' are not lost in shipping or sitting in a warehouse.</p>

                    <p className="text-2xl my-10">Many flowers, such as dahlias, lisianthus and zinnias are easily bruised and don't ship well. Others lose their fragrance. Because our market base is local and we don't ship our flowers, we have the advantage of growing a large selection of blooms that are not seen in a typical store or florist shop. Our flowers are picked at the optimal time, carefully conditioned and minimally handled.</p>

                    <Link href="#"><button className="btn">See Plant List</button></Link>

                </div>

                <div className="xl:px-10">
                    <img src="about000.jpg" alt="" className="h-auto w-full border-white border-solid border-[10px] rounded-2xl my-10" />
                </div>

            </section>

            <section id="commitment" className="mt-10 text-center flex flex-col xl:flex-row-reverse xl:items-center mx-5 mb-10">

                <div className="xl:text-left xl:mx-[10vw] mb-10">
                    <h1 className="text-5xl font-black mb-10">Our Commitment</h1>

                    <p className="text-2xl my-10">When a flower is grown correctly from seed to bloom, picked at its peak, and handled properly post harvest, there is an unmistakable clarity of color and texture. We assure you, when you purchase flowers from Muth Farm Flowers, you are supporting our proud agricultural heritage and receiving a superior product as well. We love what we grow and how we grow...and we couldn't imagine doing it any other way.</p>

                    <Link href="#"><button className="btn">Contact Us</button></Link>
                </div>

                <img src="about001.jpg" alt="" className="max-h-[80vh] border-solid border-[10px] border-white rounded-2xl" />

            </section>

            {/* #1 Mobile */}
            <div className="grid grid-cols-2 px-5 xl:hidden mb-5 gap-3">

                <img src="about002.jpg" alt="Sign" className="object-contain w-full h-full border-white border-solid border-[10px] rounded-2xl" />
                <img src="about004.jpg" alt="Tractor" className="object-contain w-full h-full border-white border-solid border-[10px] rounded-2xl" />

            </div>

            {/* #1 Desktop */}
            <div className="grid-cols-3 px-10 gap-10 hidden xl:grid mb-10">

                <img src="about002.jpg" alt="Sign" className="object-contain w-full h-full border-white border-solid border-[10px] rounded-2xl" />
                <img src="about004.jpg" alt="Tractor" className="object-contain w-full h-full border-white border-solid border-[10px] rounded-2xl" />
                <img src="about008.jpg" alt="Sign" className="object-contain w-full h-full border-white border-solid border-[10px] rounded-2xl" />

            </div>

            {/* #2 Mobile */}
            <div className="grid grid-cols-2 px-5 xl:hidden mb-5 gap-3">

                <img src="about008a.jpg" alt="Sign" className="object-contain w-full h-full border-white border-solid border-[10px] rounded-2xl" />
                <img src="about006.jpg" alt="Tractor" className="object-contain w-full h-full border-white border-solid border-[10px] rounded-2xl" />

            </div>

            {/* #2 Desktop */}
            <div className="grid-cols-2 px-10 gap-10 hidden xl:grid mb-10">
                <img src="about006.jpg" alt="Picture of Ground Being Prepped for Flowers" className="object-contain w-full h-full border-white border-solid border-[10px] rounded-2xl" />
                <img src="about005.jpg" alt="Picture of Ground Being Prepped for Flowers" className="object-contain w-full h-full border-white border-solid border-[10px] rounded-2xl" />
            </div>

            {/* Mobile Only */}
            <div className="mx-5 mb-5 xl:hidden">
                <img src="about005.jpg" alt="Picture of Ground Being Prepped for Flowers" className="object-contain w-full h-full border-white border-solid border-[10px] rounded-2xl" />
            </div>

            <Footer />

        </>
    )

}

export default About;