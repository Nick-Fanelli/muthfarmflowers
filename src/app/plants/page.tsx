import Footer from "../(components)/Footer"
import Navbar from "../(components)/Navbar"
import CarouselItem from "./(components)/CarouselItem";

import { Dancing_Script } from "next/font/google"

const dancingScript = Dancing_Script({
    subsets: ['latin'],
});

const Plants = () => {

    return (

        <>

            <Navbar selectedElementIndex={1} />

            <section id="plant-list" className="grid grid-cols-1 lg:flex lg:justify-evenly text-center mt-4 mb-20">

                <div>
                    <h1 className="text-5xl text-center mt-8 mb-3 gap-3 font-black">Early Season</h1>
                    <h2 className="text-3xl text-center mb-8 italic">{"(May-July)"}</h2>
                    <ul className="text-2xl text-center mb-10 lg:mb-0">
                        <li>Yarrow</li>
                        <li>Sweet William</li>
                        <li>Statice</li>
                        <li>Cosmos</li>
                        <li>Larkspur</li>
                        <li>Bachelor Button</li>
                        <li>Coreopsis</li>
                        <li>Feverfew</li>
                        <li>{"Queen Anne's Lace"}</li>
                        <li>Scabiosa</li>
                        <li>Nigella</li>
                        <li>Ranunculus & Anemones <i>{"(April/May)"}</i></li>
                    </ul>
                </div>

                <div className="divider mx-5 lg:divider-horizontal"></div>

                <div>
                    <h1 className="text-5xl text-center mt-8 mb-3 gap-3 font-black">Mid-Season</h1>
                    <h2 className="text-3xl text-center mb-8 italic">{"(July-September)"}</h2>
                    <ul className="text-2xl text-center mb-10">
                        <li>Zinnias</li>
                        <li>Lisianthus</li>
                        <li>Sunflowers</li>
                        <li>Celosia</li>
                        <li>Amaranthus</li>
                        <li>Marigolds</li>
                        <li>Aster</li>
                        <li>Gomphrena</li>
                        <li>Black-eyed Susan</li>
                        <li>Strawflower</li>
                    </ul>
                </div>

                <div className="divider mx-5 lg:divider-horizontal"></div>

                <div>
                    <h1 className="text-5xl text-center mt-8 mb-3 gap-3 font-black">Late Season</h1>
                    <h2 className="text-3xl text-center mb-8 italic">{"(September-October)"}</h2>
                    <ul className="text-2xl text-center mb-10">
                        <li>Dahlias</li>
                        <li>Snapdragon</li>
                        <li>Chrysanthemum</li>
                        <li>Ornamental Peppers and Grasses</li>
                        <li>Pumpkin Stick</li>
                        <li>Eucalyptus</li>
                    </ul>
                </div>

            </section>

            <section id="note" className="my-14 bg-secondary text-secondary-content py-14">

                <h1 className="text-center text-5xl font-black mb-12 mt-4">Please Note</h1>
                <p className="text-center text-2xl mx-5 lg:px-40 mb-6">This is by no means a complete list! Perennials such as butterfly weed, spirea, coneflower, phlox, Joe Pye and others are grown as well. In addition, we succession plant our most popular varieties to ensure a good supply throughout the growing season. We also utilize fragrant herbal fillers in our bouquets and arrangements such as mints, dill, scented basils, lavender and eucalyptus.</p>

            </section>

            <section id="pricing" className="my-10 mt-20">

                <h1 className="text-5xl font-black text-center mb-10">Pricing</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 items-center mb-20">
                    <div className="text-center px-20 mb-16 mt-8 lg:my-0">
                        <h1 className="text-4xl font-black mb-4">Bunch</h1>
                        <p className="text-2xl">Single variety-generally <strong>$8-12 / bunch</strong>. <i>Stem count varies depending on flower.</i></p>
                    </div>

                    <div className="text-center px-20 mb-16 lg:mb-0">
                        <h1 className="text-4xl font-black mb-4">Farmers Market Bouquet</h1>
                        <p className="text-2xl"><strong>Starting at $10.00</strong> <i>Custom extra.</i></p>
                    </div>

                    <div className="text-center px-20">
                        <h1 className="text-4xl font-black mb-4">Bucket of Mix Flowers</h1>
                        <p className="text-2xl"><strong>$75.00</strong> <i>Perfect for DIY brides and other events.</i> <span className={`${dancingScript.className} font-black text-3xl`}>{"What's in your bucket?"}</span> A custom color blend of focal and filler flowers for easy arranging. <strong>Approximately 80-100 stems.</strong></p>
                    </div>


                </div>


            </section>

            <Footer />

        </>

    )

}

export default Plants;