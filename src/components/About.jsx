import { Blocks, Brush, Code, FileScan, FileSliders, GitPullRequestArrow, Icon, Star } from 'lucide-react';
import CurvedLoop from '../assets/components/CurvedLoop';
import Gio from '../assets/gio.png';
import RotatingText from '../assets/components/Rotating';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';


const About = () => {
    const container = useRef(null);
    const [textRotation, setTextRotation] = useState(false);
    gsap.registerPlugin(ScrollTrigger);

    
    useGSAP(() => {
        gsap.from(".competency-item", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 50%",
                toggleActions: "play none none none",
                // markers: true,
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
        })
        gsap.from('.aspire', {
            scrollTrigger: {
                trigger: container.current,
                start: "top 50%",
                toggleActions: "play none none none",
                //markers: true,
            },
            y: -50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            onComplete: () => {
                setTextRotation(true);
            }
        })
        gsap.from('.aspireContext', {
            scrollTrigger: {
                trigger: container.current,
                start: "top 50%",
                toggleActions: "play none none none",
                //markers: true,
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
        })
   },{scope: container});

    const roles = [
        "Full Stack Developer",
        "System Analyst",
        "UI/UX Designer",
        "Software Engineer",
    ];

    const competencies = [
        {
            "name": "System Analysis",
            "description": "Understanding the system workflow",
            "icon": FileSliders
        },
        {
            "name": "UX/UI Design",
            "description": "Designing interfaces per requirments of the project",
            "icon": Brush
        },
        {
            "name": "Full Stack Development",
            "description": "Proficient in backend and frontend development",
            "icon": Blocks
        },
        // {
        //     "name": "Object-Oriented Programming",
        //     "description": "Designing and implementing development using object-oriented principles and design patterns.",
        //     "icon": Code
        // },
        // {
        //     "name": "Agile Methodologies",
        //     "description": "Applying agile principles and practices to manage projects and deliver high-quality software in iterative cycles.",
        //     "icon": GitPullRequestArrow
        // }
    ];


    return (
        <div className="relative w-full h-screen overflow-hidden  items-center justify-center md:px-15 lg:px-20 font-helvena bg-secondary-background text-text">
            <CurvedLoop 
                marqueeText="About Me ✦ About me ✦ About me ✦ about me ✦ about me ✦ about me ✦ about me ✦ about me ✦ about me ✦ about me ✦ about me ✦ about me ✦ about me"
                speed={2}
                curveAmount={400}
                direction="right"
                interactive={false}
                className=" font-bold opacity-20 fill-secondary-text"

            />
            <div className='absolute bottom-0 left-0 w-full lg:h-full flex items-center justify-center'>
                <img src={Gio} alt="Gio" className="grayscale h-full object-cover "/>
            </div>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between py-6 md:py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-100 md:h-auto lg:h-full' ref={container}>
                    <div className='px-12 flex flex-col lg:justify-center lg:px-30'>
                        <div className='flex flex-row items-center gap-1 text-sm md:text-lg aspire'>
                            <Star className='size-5 text-secondary-text text-sm' strokeWidth={2}/>
                            <p className='font-medium text-secondary-text md:text-sm'>ASPIRING TO BE</p>
                        </div>
                        <RotatingText
                            texts={roles}
                            mainClassName="font-bold text-4xl md:text-5xl lg:text-6xl pb-4 aspire"
                            staggerFrom="last"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={3000}
                            splitBy="word"
                            auto={textRotation}
                            loop
                        />
                        <div className='aspireContext'>
                            <p className='text-sm md:text-sm lg:text-lg'>
                                Computer Science graduate with software developmental background that is focusing on client base project and
                                providing technical solution within outdated systems. this includes form automation and ease of processes within a
                                legacy system of the aformention clients 
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col px-12 gap-2 lg:justify-center lg:px-30'>
                        <div className='flex flex-row items-center gap-1 text-sm md:text-lg aspire'>
                            <Star className='size-5 text-secondary-text md:text-sm' strokeWidth={2}/>
                            <p className='font-medium text-secondary-text md:text-sm'>COMPETENCIES</p>
                        </div>
                        <div className='flex flex-col gap-4 lg:gap-2'>
                            {
                                // hover:-translate-y-2 hover:cursor-pointer transition-transform ease-in-out
                                competencies.map((competency, index) => (
                                    <div className='competency-item h-fit flex flex-col gap-2 border border-border-color-primary/20 rounded-md p-4 bg-white-400/30 backdrop-blur-sm shadow-lg' key={index}>
                                        <div className='flex flex-row items-center gap-2'>
                                            <competency.icon className='size-5 md:size-4 lg:size-5'/>
                                            <p className='text-sm md:text-sm lg:text-base font-bold'>{competency.name}</p>
                                        </div>
                                        <p className='text-xs md:text-xs lg:text-base text-muted-foreground'>
                                            {competency.description}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;