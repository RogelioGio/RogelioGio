import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import { PageProvider } from "./PageContext";
import { Moon, Sun } from "lucide-react";
import About from "./components/About";
import Project from "./components/Project";
import Competencies from "./components/Contact";
import Contact from "./components/Contact";

export default function Index() {
    const [isDark, setDark] = useState(()=> {
        return localStorage.getItem("theme") === "dark" 
        // || window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const toggleTheme = () => {
        const root = document.documentElement;
        console.log(root.classList);
        if (root.classList.contains("dark")) {
            root.classList.remove("dark");
        } else {            
            root.classList.add("dark");
        }
    }

    const buttonHoverColor = isDark ? "hover:bg-gray-700" : "hover:bg-gray-300";

    return (
        <div className="relative">
            <button className={`fixed top-4 right-4 size-10 rounded-md text-text flex items-center justify-center hover:cursor-pointer ${buttonHoverColor} transition-all ease-in-out z-10`} onClick={()=>setDark(!isDark)}>
                {
                    isDark ? <Sun/> : <Moon/>
                }
            </button>
            <div>
                <PageProvider>
                    <Hero/>
                    <About/>
                    <Project/>
                    <Contact/>
                </PageProvider>
            </div>
        </div>
    )
}
