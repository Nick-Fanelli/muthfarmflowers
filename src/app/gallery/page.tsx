import { Metadata } from "next";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";

import fs from 'fs'
import path from "path";

export const metadata: Metadata = {
    title: "Gallery | Muth Farm Flowers"
};

type Image = {
    name: string
    filepath: string
}

const Gallery = () => {

    const imageFilepaths = fs.readdirSync(path.join('public', 'gallery')).filter(filepath => !filepath.startsWith('_') && filepath !== "README.md");
    const images: Image[] = [];

    imageFilepaths.forEach(filepath => {
        let name = filepath.split('.')[0];
        name = name.replaceAll('_', ' ');

        if(name.startsWith('~'))
            name = "";

        images.push({ name, filepath });
    });

    return (

        <>
            <Navbar selectedElementIndex={2} />

            <h1 className="text-5xl font-black text-center mt-8 mb-10 gap-3">Image Gallery</h1>

            <section id="gallery" className="leading-none columns-1 sm:columns-2 xl:columns-3 2xl:columns-4 px-3">

                {
                    images.map(image => (
                        <div className="group/parent relative !overflow-hidden rounded-xl mb-3" key={image.filepath}>
                            <img src={`gallery/${image.filepath}`} alt="" className="w-full h-full cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-50" />
                            <p className="absolute top-1/2 left-1/2 text-white text-4xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/parent:opacity-100 transition-opacity ease-in-out duration-150">{image.name}</p>
                        </div>
                    ))
                }

            </section>


            <Footer />
        </>

    )

}

export default Gallery;