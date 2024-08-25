import { Metadata } from "next";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";

import fs from 'fs'
import path from "path";

export const metadata: Metadata = {
    title: "Gallery | Muth Farm Flowers"
};

const Gallery = () => {

    const files = fs.readdirSync(path.join('public', 'gallery'));

    return (

        <>
            <Navbar selectedElementIndex={2} />

            <h1>{files}</h1>

            <Footer />
        </>

    )

}

export default Gallery;