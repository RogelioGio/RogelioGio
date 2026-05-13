import Lenis from "lenis";
import { createContext, useContext, useEffect, useState } from "react";

const PageContext = createContext();

export const PageProvider = ({children}) => {
    const [lenisRef, setLenisRef] = useState(null);
    const [rafState, setRafState] = useState(null);

    useEffect(()=> {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            syncTouch: true,
        })
        let rf;

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        rf = requestAnimationFrame(raf)
        setLenisRef(lenis);
        setRafState(rf);

        return () => {
            cancelAnimationFrame(rf);
            lenis.destroy();
        }

    },[])
    return <PageContext.Provider value={lenisRef}>
            {children}
    </PageContext.Provider>
};

export const usePageContext = () => useContext(PageContext);
