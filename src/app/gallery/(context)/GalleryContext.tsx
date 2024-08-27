"use client";

import { createContext, useState } from "react";

type GalleryContextType = {value: { name: string, filepath: string } | null, setValue: (value: { name: string, filepath: string } | null) => void}

export const GalleryContext = createContext<GalleryContextType>({ value: null, setValue: () => {} });

const GalleryContextProvider = ({ children } : { children: React.ReactNode }) => {

    const [value, setValue] = useState<{name: string, filepath: string} | null>(null);

    return <GalleryContext.Provider value={{ value, setValue }}>{children}</GalleryContext.Provider>

}

export default GalleryContextProvider;