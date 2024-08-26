"use client";

import { createContext, useState } from "react";

type GalleryContextType = {value: string | null, setValue: (value: string | null) => void}

export const GalleryContext = createContext<GalleryContextType>({ value: null, setValue: () => {} });

const GalleryContextProvider = ({ children } : { children: React.ReactNode }) => {

    const [value, setValue] = useState<string | null>(null);

    return <GalleryContext.Provider value={{ value, setValue }}>{children}</GalleryContext.Provider>

}

export default GalleryContextProvider;