import { div } from "three/tsl";
import PixelBlast from "../assets/components/PixelBlast";
import DecryptedText from "../assets/components/DecryptedText";
import BlurText from "../assets/components/BlurText";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { frame, useSpring, motion } from "motion/react";
import {ChevronDown} from "lucide-react";
const Hero = () => {
    const listRef = useRef(null);
    const itemsRef = useRef(null);
    const cursorRef = useRef(null);

    const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);
    const [isVisible, setIsVisible] = useState(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(()=>{
            gsap.from(".launch-item", {
            y: 50,              
            opacity: 0,         
            duration: 1,        
            stagger: 0.15,      
            ease: "back.out(2)", 
            });

            gsap.from(".item", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "back.out(2)",
            });
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isVisible) setIsVisible(true);
            
            const element = cursorRef.current;
            if(element) {
                frame.read(() => {
                    x.set(e.clientX - element.offsetWidth / 2);
                    y.set(e.clientY - element.offsetHeight / 2);
                })
            }

        }
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("pointermove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("pointermove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        }
    },[x, y, isVisible]);
    
    const roles = [
        "Full Stack Developer",
        "System Analyst",
        "UI/UX Designer",
        "Software Engineer",
    ];

   


  return (
    <div className="w-full h-screen font-helvena bg-background text-text flex items-center justify-center relative">
            <div className="relative h-full w-full md:px-15 lg:px-20">
               <motion.div 
                    ref={cursorRef} 
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    className="absolute top-0 left-0 size-200 z-50 pointer-events-none"
                    style={{ x, y,
                        background: "radial-gradient(circle, rgba(245, 159, 10, 0.05) 0%, transparent 70%)"
                    }} 
                />

                <div className="w-full h-full flex items-center justify-center">
                    <div className="flex items-center justify-center flex-col gap-1 md:gap-4 lg:gap-6">
                        <DecryptedText
                            className="font-bold text-3xl md:text-5xl lg:text-8xl text-center"
                            encryptedClassName="font-bold text-3xl md:text-5xl lg:text-8xl text-center"
                            animateOn="view"
                            text="Rogelio Gio Talingdan"
                            revealDirection="start"
                            sequential
                            useOriginalCharsOnly={false}
                        />
                        <div className="flex-row items-center gap-4 text-xs md:text-xs lg:text-sm hidden md:flex lg:flex" ref={listRef}>
                        {roles.map((role, index) => {
                            const isLastRole = index === roles.length - 1;
                            return (
                            <div key={index} className="flex items-center gap-4">
                                <p className="shrink-0 launch-item">
                                {role}
                                </p>
                                {!isLastRole && (
                                <div className="launch-item size-2 bg-yellow-500 rounded-full shrink-0"></div>
                                )}
                            </div>
                            );
                        })}
                        </div>
                        <div ref={itemsRef} className="block md:hidden lg:hidden">
                            <p className="text-xs md:hidden launch-item">Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center flex-col gap-4 item">
            <p className="text-sm md:text-base lg:text-xs">Scroll down to explore</p> 
            <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
    </div>
  
    );
};

export default Hero;
