import { BadgeCheckIcon, ChevronRightCircle, ChevronRightIcon, CircleCheck, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import ShapeGrid from "../assets/components/ShapeGrid";
import DecryptedText from "../assets/components/DecryptedText";
import ROOM from "../assets/ROOm.png";
import MBLearn from "../assets/Mblearn.png";
import Helpdesk from "../assets/ITHelpdesk.png";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
    const containerRef = useRef(null);
    const projects = [
        {
            "title": "ROOM:Room Observing Operating Manager ",
            "description": "The ROOM System is a focused, lightweight management platform designed to streamline the administrative overhead of property and utility oversight. While purposefully built as a small-scale application, it serves as a technical showcase for systematic data architecture. Rather than over-engineering, the project emphasizes high-utility workflows and a polished developer-centric UI.",
            "role": "Project Manager and Front-end Developer ",
            "technologies": "Ruby 3.3.11 / Rails 8.0, Tailwind CSS v4, WSL2 (Ubuntu 24.04) ",
            features: [
                {
                    "title": "Systematic Management",
                    "description": "A robust, state-driven approach to tracking room occupancy, equipment health, and scheduling."
                },
                {
                    "title": "Maintenance-First CRUD",
                    "description": "A complete suite for staff to manage room equipment and utilities, featuring seamless status editing to ensure digital records reflect physical reality."
                },
                {
                    "title": "Occupancy Dashboard:",
                    "description": "At-a-glance monitoring of with status."
                },
                {
                    "title": "Utility Tracking",
                    "description": "Manage equipment and inventory within the room inside the building."
                }
            ],
            "duration": {
                "start": "September 2023",
                "end": "January 2024"
            },
            image: ROOM
        },
        {
            "title": "MBLearn: Metrobank Learning Management System",
            "description": "The need for an effective, adaptable, and easy-to-use learning web application in the corporate environment is brought about by business demands to increase employee development while managing the cost. This study aims to identify new ways to improve Metrobank’s current online learning system called MBLearn using a more effective and user-friendly Online Learning Web Application.",
            "role": "System Analyst, Full Stack Developer, and UI/UX Designer",
            "technologies": "React JS, Tailwind CSS, PHP 8.2, Laravel(RESTful APIs),PostgreSQL(Neon DB) and Hostinger(Web Hosting) ",
            features: [
                {
                    "title": "Improved Interface",
                    "description": "Increase user engagement and Increase application's utilization by 10% by broadening the types of training courses that can be taken"
                },
                {
                    "title": "Administrative Efficiency",
                    "description": "Reduce time required for learning and development administration; Minimizing human errors in data entry, scheduling, and tracking ensuring more reliability."
                },
                {
                    "title": "Data Integrity",
                    "description": "Minimizing human error in record-keeping to ensure reliable tracking of employee progress and certifications."
                },
                {
                    "title": "Expanded Course Catalog",
                    "description": "Broadening the diversity of available professional training modules"
                }
            ],
            "duration": {
                "start": "August 2024",
                "end": "December 2025 "
            },
            image: MBLearn
        },
        {
            "title": "IT Support Help Desk ",
            "description": "The ICTD HelpDesk Project is a comprehensive ticket management and IT service portal developed for the Information and Communications Technology Division (ICTD). It is designed to provide a seamless technical support workflow, from initial reporting to final resolution, ensuring efficient service delivery within the organization",
            "role": "Full Stack Developer",
            "technologies": "React JS, Tailwind CSS, PHP 8.2, Laravel(RESTful APIs), MySQL(Maria DB)",
            features: [
                {
                    "title": "Standardized Flow",
                    "description": "Support tickets are processed, addressed, and resolved with appropriate actions and solutions. Ticket status updates are tracked by ticket timeline to monitor progress from creation to closure"
                },
                {
                    "title": "Accommodating and User-Friendly",
                    "description": "Submit service requests, facilitating the structured reporting, tracking and resolution of issues involving all organization-funded ICT resources. "
                },
                {
                    "title": "Real-Time Updates ",
                    "description": "Instant ticket notifications and live status tracking via WebSockets."
                },
                {
                    "title": "Automated Reporting",
                    "description": "One-click HTML-to-PDF generation for official maintenance and service logs."
                }
            ],
            "duration": {
                "start": "March 2026",
                "end": "April 2026 "
            },
            image: Helpdesk
        }
    ];


    useLayoutEffect(() => {
        const context = gsap.context(() => {

            gsap.from(".animate-text", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 50%",
                // markers: true,
            },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                delay: 0.5,
                ease: "back.out(1.7)",
            });

            const stars = gsap.utils.toArray(".star-animate");

           stars.forEach((star, i) => {
                const xDir = (i === 0 || i === 2) ? -1 : 1;
                const yDir = (i === 0 || i === 1) ? -1 : 1;

                const starTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom", // Starts as soon as the section enters the screen
                        end: "bottom top",    // Ends when it leaves
                        scrub: 1.5,           // This makes the ENTIRE movement smooth
                    }
                });

                starTl
                // 1. The Entrance: Fly from corner to original position
                .from(star, {
                    x: xDir * 600,
                    y: yDir * 600,
                    rotation: xDir * 180,
                    opacity: 0,
                    scale: 0,
                    ease: "power2.out"
                })
                // 2. The Transition/Parallax: Drift outward
                // By adding it to the same timeline, there is no "cut"
                .to(star, {
                    // x: xDir * 150,
                    // y: yDir * 150,
                    rotation: yDir * 45,
                    ease: "none"
                });
            });

            // Match the class name used in JSX
            const cards = gsap.utils.toArray(".stack-card");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${cards.length * 100}%`, 
                    pin: true,
                    scrub: 1,
                }
            });

            cards.forEach((card, index) => {
                // We animate from the second card (index 1) onwards
                if (index !== 0) {
                    tl.fromTo(card, 
                        { y: "100%" }, 
                        { y: "0%", ease: "none" }, 
                        `card-${index}`
                    );
                }
            });

        }, containerRef);
        
        return () => context.revert();
    }, []); // Added empty dependency array for best practice

    return (
        <div ref={containerRef} className="relative w-screen h-screen overflow-hidden bg-background">
           <div className="stack-card z-10 absolute inset-0 flex items-center justify-center font-helvena text-text bg-background">
                <div className="w-full h-full relative flex flex-col items-center justify-center gap-4">
                    <ShapeGrid 
                        speed={0.5}
                        squareSize={40}
                        direction='diagonal' // up, down, left, right, diagonal
                        borderColor="#2F293A"
                        hoverFillColor='#222'
                        shape='square' // square, hexagon, circle, triangle
                        direction="diagonal"
                        hoverColor="#222222"
                        size={40}
                        shape="square"
                        />
                    <div className="absolute top-0 left-0 w-full h-full grid grid-cols-3 grid-rows-3">
                        <div className="w-full h-full relative">
                            <Star className="text-primary absolute size-100 md:size-70 -top-40 md:top-0 md:left-0 -left-30 rotate-90 text-secondary-text opacity-40 star-animate"/>
                        </div>
                        <div className="w-full h-full col-start-3 relative">
                            <Star className="text-primary absolute size-100 md:size-40 md:-bottom-10 -bottom-40 md:right-20 -right-50 -rotate-10 text-secondary-text opacity-40 star-animate"/>
                        </div>
                        <div className="w-full h-full col-start-1 row-start-3 relative">
                            <Star className="text-primary absolute size-100 md:bottom-0 -bottom-5 md:left-0 -left-30 rotate-180 text-secondary-text opacity-40 star-animate"/>
                        </div>
                        <div className="w-full h-full col-start-3 row-start-3 relative">
                            <Star className="text-primary absolute size-70 md:bottom-20 -bottom-10 left-5 rotate-25 text-secondary-text opacity-40 star-animate"/>
                        </div>
                        {/* <Star className="text-primary" size={100}/> */}
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                        <div className="flex flex-row items-center gap-">
                            <DecryptedText
                                className="font-bold text-6xl md:text-7xl lg:text-9xl "
                                encryptedClassName="font-bold text-6xl md:text-7xl lg:text-9xl"
                                animateOn="view"
                                text="PROJECTS"
                                revealDirection="start"
                                sequential
                                useOriginalCharsOnly={false}
                            />
                        </div>   
                        <p className="text-xs md:text-base lg:text-lg animate-text">Different projects I have worked and participated in</p>
                    </div>
                </div>
            </div>

            <div className="stack-card z-20 absolute inset-0 flex items-center justify-center">
                <div className="w-full lg:h-[80vh] lg:w-[80vw] flex flex-col h-screen">
                    <div className="lg:grid grid-cols-[min-content_min-content_min-content] hidden">
                        <div className="size-15 flex justify-center items-center bg-primary-500 rounded-t-md "><p className="font-bold text-xl">01</p></div>
                    </div>
                    <div className="bg-tertiary-background h-full w-full rounded-r-md rounded-b-md grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 overflow-hidden">
                        <div className="p-10 flex flex-col gap-4 font-helvena w-full text-text">
                            <p className="text-sm">
                                {projects[0].duration.start} - {projects[0].duration.end}
                            </p>
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col">
                                    <p className="text-2xl font-bold">{projects[0].title}</p>
                                    <p className="text-sm">{projects[0].role}</p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row items-center gap-1">
                                            <Star className="text-primary" size={15}/>
                                            <p className="text-sm font-bold">Project Context</p>
                                        </div>
                                        <p className="text-sm">{projects[0].description}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row items-center gap-1">
                                            <Star className="text-primary" size={15}/>
                                            <p className="text-sm font-bold">Techstack</p>
                                        </div>
                                        <p className="text-sm">{projects[0].technologies}</p>
                                    </div>
                                    <div className="md:flex flex-col gap-2 hidden">
                                        <div className="flex flex-row items-center gap-1">
                                            <Star className="text-primary" size={15}/>
                                            <p className="text-sm font-bold">Key Features</p>
                                        </div>
                                        <div className="flex flex-col gap-4 pl-4">
                                            {
                                                projects[0].features.map((feature, index) => (
                                                    <div key={index} className="flex flex-row gap-1">
                                                        <div className="pt-0.5">
                                                            <CircleCheck className="text-primary shrink-0" size={15}/>
                                                        </div>
                                                        <div className="flex flex-col gap-1">
                                                            <p className="text-sm font-bold">{feature.title}</p>
                                                            <p className="text-sm">{feature.description}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-amber-600 w-full h-full">
                            <img src={projects[0].image} alt={projects[0].title} className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stack-card z-30 absolute inset-0 flex items-center justify-center">
                <div className="w-full lg:h-[80vh] lg:w-[80vw]  flex flex-col h-screen">
                    <div className="lg:grid grid-cols-[min-content_min-content_min-content] gap-2 hidden">
                        <div className="size-15 flex justify-center items-center rounded-t-md "></div>
                        <div className="size-15 flex justify-center items-center bg-primary-500 rounded-t-md "><p className="font-bold text-xl">02  </p></div>
                    </div>
                    <div className="bg-tertiary-background h-full w-full rounded-r-md rounded-b-md grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 overflow-hidden">
                        <div className="p-10 flex flex-col gap-4 font-helvena w-full text-text">
                            <p className="text-sm">
                                {projects[1].duration.start} - {projects[1].duration.end}
                            </p>
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col">
                                    <p className="text-2xl font-bold">{projects[1].title}</p>
                                    <p className="text-sm">{projects[1].role}</p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row items-center gap-1">
                                            <Star className="text-primary" size={15}/>
                                            <p className="text-sm font-bold">Project Context</p>
                                        </div>
                                        <p className="text-sm">{projects[1].description}</p>
                                    </div>
                                    <div className="flex-col gap-2 flex">
                                        <div className="flex flex-row items-center gap-1">
                                            <Star className="text-primary" size={15}/>
                                            <p className="text-sm font-bold">Techstack</p>
                                        </div>
                                        <p className="text-sm">{projects[1].technologies}</p>
                                    </div>
                                    <div className="flex-col gap-2 hidden md:flex">
                                        <div className="flex flex-row items-center gap-1">
                                            <Star className="text-primary" size={15}/>
                                            <p className="text-sm font-bold">Key Features</p>
                                        </div>
                                        <div className="flex flex-col gap-4 pl-4">
                                            {
                                                projects[1].features.map((feature, index) => (
                                                    <div key={index} className="flex flex-row gap-1">
                                                        <div className="pt-0.5">
                                                            <CircleCheck className="text-primary shrink-0" size={15}/>
                                                        </div>
                                                        <div className="flex flex-col gap-1">
                                                            <p className="text-sm font-bold">{feature.title}</p>
                                                            <p className="text-sm">{feature.description}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-amber-600 w-full h-full">
                            <img src={projects[1].image} alt={projects[1].title} className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stack-card z-40 absolute inset-0 flex items-center justify-center">
                 <div className="w-full lg:h-[80vh] lg:w-[80vw] flex flex-col h-screen">
                    <div className="lg:grid grid-cols-[min-content_min-content_min-content] gap-2 hidden">
                        <div className="size-15 flex justify-center items-center rounded-t-md "></div>
                        <div className="size-15 flex justify-center items-center rounded-t-md "></div>
                        <div className="size-15 flex justify-center items-center bg-primary-500 rounded-t-md "><p className="font-bold text-xl">03 </p></div>
                    </div>
                    <div className="bg-tertiary-background h-full w-full rounded-r-md rounded-b-md grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 overflow-hidden">
                        <div className="p-10 flex flex-col gap-4 font-helvena w-full text-text">
                            <p className="text-sm">
                                {projects[2].duration.start} - {projects[2].duration.end}
                            </p>
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col">
                                    <p className="text-2xl font-bold">{projects[2].title}</p>
                                    <p className="text-sm">{projects[2].role}</p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row items-center gap-1">
                                            <Star className="text-primary" size={15}/>
                                            <p className="text-sm font-bold">Project Context</p>
                                        </div>
                                        <p className="text-sm">{projects[2].description}</p>
                                    </div>
                                    <div className="flex-col gap-2 flex">
                                        <div className="flex flex-row items-center gap-1">
                                            <Star className="text-primary" size={15}/>
                                            <p className="text-sm font-bold">Techstack</p>
                                        </div>
                                        <p className="text-sm">{projects[2].technologies}</p>
                                    </div>
                                    <div className="flex-col gap-2 hidden md:flex">
                                        <div className="flex flex-row items-center gap-1">
                                            <Star className="text-primary" size={15}/>
                                            <p className="text-sm font-bold">Key Features</p>
                                        </div>
                                        <div className="flex flex-col gap-4 pl-4">
                                            {
                                                projects[2].features.map((feature, index) => (
                                                    <div key={index} className="flex flex-row gap-1">
                                                        <div className="pt-0.5">
                                                            <CircleCheck className="text-primary shrink-0" size={15}/>
                                                        </div>
                                                        <div className="flex flex-col gap-1">
                                                            <p className="text-sm font-bold">{feature.title}</p>
                                                            <p className="text-sm">{feature.description}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-amber-600 w-full h-full">
                            <img src={projects[2].image} alt={projects[2].title} className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Project;

{/* <div className="absolute top-0 left-0 w-screen h-screen">
                        hell
                    </div>
                    <div className="z-20">    
                        <h1 className="text-6xl md:text-7xl font-bold lg:text-9xl">PROJECTS</h1>
                        <p className="text-xs md:text-base lg:text-lg">Different projects I have worked and participated in</p>
                    </div> */}