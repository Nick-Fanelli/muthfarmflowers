import { Metadata } from "next";

import fs from 'fs'
import path from "path";
import GalleryContextProvider from "./(context)/GalleryContext";
import Gallery from "./(components)/Gallery";

export const metadata: Metadata = {
    title: "Gallery | Muth Farm Flowers"
};

export type ImageDef = {
    name: string
    filepath: string
}

const Page = () => {

    const imageFilepaths = fs.readdirSync(path.join('public', 'gallery')).filter(filepath => (!filepath.startsWith('_') && !filepath.startsWith('.') && filepath !== "README.md"));
    const images: ImageDef[] = [];

    imageFilepaths.forEach(filepath => {
        let name = filepath.split('.')[0];
        name = name.replaceAll('_', ' ');

        if (name.startsWith('~'))
            name = "";

        images.push({ name, filepath });
    });

    return (

        <GalleryContextProvider>

            <Gallery images={images} />
            
        </GalleryContextProvider>

    )

}

export default Page;