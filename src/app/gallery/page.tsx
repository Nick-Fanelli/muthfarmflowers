import { Metadata } from "next";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";

export const metadata: Metadata = {
    title: "Gallery | Muth Farm Flowers"
};

const Gallery = () => {

    return (

        <>
            <Navbar selectedElementIndex={2} />

            <Footer />
        </>

    )

}

export default Gallery;