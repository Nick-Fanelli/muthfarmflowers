"use client";

import Footer from "@/app/(components)/Footer";
import Navbar from "@/app/(components)/Navbar";
import { ImageDef } from "../page";
import { useContext, useRef } from "react";
import { GalleryContext } from "../(context)/GalleryContext";

type Props = {

    images: ImageDef[]

}

const Gallery = (props: Props) => {

    const dialogRef = useRef<HTMLDialogElement>(null);

    const context = useContext(GalleryContext);

    return (
        <>
            <dialog id="selected-image" className="modal outline-none" ref={dialogRef} onCancel={() => {
                context.setValue(null);
                dialogRef.current?.close();
            }}>

                <form method="dialog" action={() => {
                    context.setValue(null);
                    dialogRef.current?.close();
                }} className="absolute inset-0 w-screen h-screen z-8 outline-none">
                    <button className="w-full h-full cursor-default outline-none"></button>
                </form>

                <div className="absolute inset-0 w-screen h-screen flex justify-center items-center pointer-events-none outline-none">
                    <img src={`gallery/${context.value?.filepath}`} alt="" className="block rounded-2xl shadow-2xl pointer-events-none z-9 select-none max-w-[98vw] max-h-[98vh] outline-none" />
                    <h1 className="text-2xl lg:text-4xl absolute bottom-10 text-white shadow-3xl font-black">{context.value?.name}</h1>
                </div>
            </dialog>

            <div id="blur-wrapper" className={`${context.value !== null ? "blur-md" : ''}`}>
                <Navbar selectedElementIndex={2} />

                <h1 className="text-5xl font-black text-center mt-8 mb-10 gap-3">Image Gallery</h1>

                <section id="gallery" className="leading-none columns-1 sm:columns-2 xl:columns-3 2xl:columns-4 px-3 mb-5">

                    {
                        props.images.map(image => (
                            <div key={image.filepath} onClick={() => {
                                context.setValue({ name: image.name, filepath: image.filepath });
                                (document.getElementById("selected-image") as HTMLDialogElement)?.showModal();
                            }}>

                                <div className="group/parent relative !overflow-hidden rounded-xl mb-3">
                                    <img src={`gallery/${image.filepath}`} alt="" className="w-full h-full cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-50" />
                                    <p className="absolute top-1/2 left-1/2 text-white text-xl lg:text-4xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/parent:opacity-100 transition-opacity ease-in-out duration-150">{image.name}</p>
                                </div>
                            </div>
                        ))
                    }

                </section>

                <Footer />
            </div>
        </>
    )

}

export default Gallery;