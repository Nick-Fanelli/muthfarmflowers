import Footer from "../(components)/Footer"
import Navbar from "../(components)/Navbar"
import CarouselItem from "./(components)/CarouselItem";



const Plants = () => {

    return (

        <>

            <Navbar selectedElementIndex={1} />

            <section id="early-season">
                <h1 className="text-5xl text-center mt-8 mb-3 gap-3 font-black">Early Season</h1>
                <h2 className="text-3xl text-center mb-8 italic">{"(May-July)"}</h2>

                <div className="lg:grid lg:grid-cols-2 lg:items-center">

                    <div className="lg:flex lg:justify-center">
                        <div>
                            <h2 className="hidden lg:block text-4xl font-black mb-6">Early Season List</h2>
                            <ul className="text-2xl text-center mb-10 lg:mb-0 lg:text-left lg:list-disc lg:ml-6">
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
                    </div>

                    <div className="carousel w-full mb-10 mt-3">
                        <CarouselItem name="Yarrow" imageFilepath="flowers/yarrow.jpg" idPrefix="early-season" idNumber={1} start={11} />
                        <CarouselItem name="Sweet William" imageFilepath="flowers/sweet-william.jpg" idPrefix="early-season" idNumber={2} />
                        <CarouselItem name="Statice" imageFilepath="flowers/statice.webp" idPrefix="early-season" idNumber={3} />
                        <CarouselItem name="Cosmos" imageFilepath="flowers/cosmos.jpg" idPrefix="early-season" idNumber={4} />
                        <CarouselItem name="Larkspur" imageFilepath="flowers/larkspur.jpg" idPrefix="early-season" idNumber={5} />
                        <CarouselItem name="Bachelor Button" imageFilepath="flowers/bachelor-button.webp" idPrefix="early-season" idNumber={6} />
                        <CarouselItem name="Coreopsis" imageFilepath="flowers/coreopsis.jpg" idPrefix="early-season" idNumber={7} />
                        <CarouselItem name="Feverfew" imageFilepath="flowers/feverfew.jpg" idPrefix="early-season" idNumber={8} />
                        <CarouselItem name="Scabiosa" imageFilepath="flowers/scabiosa.jpg" idPrefix="early-season" idNumber={9} />
                        <CarouselItem name="Nigella" imageFilepath="flowers/nigella.jpg" idPrefix="early-season" idNumber={10} />
                        <CarouselItem name="Ranunculus & Anemones" imageFilepath="flowers/ranunculus-anemones.jpg" idPrefix="early-season" idNumber={11} end />
                    </div>

                </div>
            </section>

            <div className="divider my-14 mx-10"></div>

            <section id="mid-season" className="">
                <h1 className="text-5xl text-center mt-8 mb-3 gap-3 font-black">Mid-Season</h1>
                <h2 className="text-3xl text-center mb-8 italic">{"(July-September)"}</h2>

                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:items-center">

                    <div className="carousel w-full mb-10 mt-3">
                        <CarouselItem name="Yarrow" imageFilepath="flowers/yarrow.jpg" idPrefix="early-season" idNumber={1} start={11} />
                        <CarouselItem name="Sweet William" imageFilepath="flowers/sweet-william.jpg" idPrefix="early-season" idNumber={2} />
                        <CarouselItem name="Statice" imageFilepath="flowers/statice.webp" idPrefix="early-season" idNumber={3} />
                        <CarouselItem name="Cosmos" imageFilepath="flowers/cosmos.jpg" idPrefix="early-season" idNumber={4} />
                        <CarouselItem name="Larkspur" imageFilepath="flowers/larkspur.jpg" idPrefix="early-season" idNumber={5} />
                        <CarouselItem name="Bachelor Button" imageFilepath="flowers/bachelor-button.webp" idPrefix="early-season" idNumber={6} />
                        <CarouselItem name="Coreopsis" imageFilepath="flowers/coreopsis.jpg" idPrefix="early-season" idNumber={7} />
                        <CarouselItem name="Feverfew" imageFilepath="flowers/feverfew.jpg" idPrefix="early-season" idNumber={8} />
                        <CarouselItem name="Scabiosa" imageFilepath="flowers/scabiosa.jpg" idPrefix="early-season" idNumber={9} />
                        <CarouselItem name="Nigella" imageFilepath="flowers/nigella.jpg" idPrefix="early-season" idNumber={10} />
                        <CarouselItem name="Ranunculus & Anemones" imageFilepath="flowers/ranunculus-anemones.jpg" idPrefix="early-season" idNumber={11} end />
                    </div>

                    <div className="lg:flex lg:justify-center mb-10 lg:mb-0">
                        <div>
                            <h2 className="hidden lg:block text-4xl font-black mb-6">Mid-Season List</h2>
                            <ul className="text-2xl text-center lg:text-left lg:list-disc lg:ml-6">
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
                    </div>
                </div>
            </section>

            <div className="divider my-14 mx-10"></div>

            <section id="late-season">
                <h1 className="text-5xl text-center mt-8 mb-3 gap-3 font-black">Late Season</h1>
                <h2 className="text-3xl text-center mb-8 italic">{"(September-October)"}</h2>

                <div className="lg:grid lg:grid-cols-2 lg:items-center">

                    <div className="lg:flex lg:justify-center">
                        <div>
                            <h2 className="hidden lg:block text-4xl font-black mb-6">Late Season List</h2>
                            <ul className="text-2xl text-center mb-10 lg:mb-0 lg:text-left lg:list-disc lg:ml-6">
                                <li>Dahlias</li>
                                <li>Snapdragon</li>
                                <li>Chrysanthemum</li>
                                <li>Ornamental Peppers and Grasses</li>
                                <li>Pumpkin Stick</li>
                                <li>Eucalyptus</li>
                            </ul>
                        </div>
                    </div>

                    <div className="carousel w-full mb-10 mt-3">
                        <CarouselItem name="Yarrow" imageFilepath="flowers/yarrow.jpg" idPrefix="early-season" idNumber={1} start={11} />
                        <CarouselItem name="Sweet William" imageFilepath="flowers/sweet-william.jpg" idPrefix="early-season" idNumber={2} />
                        <CarouselItem name="Statice" imageFilepath="flowers/statice.webp" idPrefix="early-season" idNumber={3} />
                        <CarouselItem name="Cosmos" imageFilepath="flowers/cosmos.jpg" idPrefix="early-season" idNumber={4} />
                        <CarouselItem name="Larkspur" imageFilepath="flowers/larkspur.jpg" idPrefix="early-season" idNumber={5} />
                        <CarouselItem name="Bachelor Button" imageFilepath="flowers/bachelor-button.webp" idPrefix="early-season" idNumber={6} />
                        <CarouselItem name="Coreopsis" imageFilepath="flowers/coreopsis.jpg" idPrefix="early-season" idNumber={7} />
                        <CarouselItem name="Feverfew" imageFilepath="flowers/feverfew.jpg" idPrefix="early-season" idNumber={8} />
                        <CarouselItem name="Scabiosa" imageFilepath="flowers/scabiosa.jpg" idPrefix="early-season" idNumber={9} />
                        <CarouselItem name="Nigella" imageFilepath="flowers/nigella.jpg" idPrefix="early-season" idNumber={10} />
                        <CarouselItem name="Ranunculus & Anemones" imageFilepath="flowers/ranunculus-anemones.jpg" idPrefix="early-season" idNumber={11} end />
                    </div>

                </div>
            </section>

            <section id="note" className="my-14 bg-secondary text-secondary-content py-14">

                <h1 className="text-center text-5xl font-black mb-6">Please Note</h1>
                <p className="text-center text-2xl mx-5">This is by no means a complete list! Perennials such as butterfly weed, spirea, coneflower, phlox, Joe Pye and others are grown as well. In addition, we succession plant our most popular varieties to ensure a good supply throughout the growing season. We also utilize fragrant herbal fillers in our bouquets and arrangements such as mints, dill, scented basils, lavender and eucalyptus.</p>

            </section>

            <section id="pricing">

                TODO: PRICING HERE
                
            </section>

            <Footer />

        </>

    )

}

export default Plants;