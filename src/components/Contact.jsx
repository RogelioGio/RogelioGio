import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { Star } from "lucide-react";
import image from "../assets/gio.png";
import React_logo from "../assets/react_logo.png";
import Laravel_logo from "../assets/laravel_logo.png";
import Tailwind_logo from "../assets/tailwind_logo.png";
import JavaScript_logo from "../assets/javascript_logo.png";
import MariaDB_logo from "../assets/maria_logo.png";
import Mysql_logo from "../assets/mysql_logo.png";
import Ruby_logo from "../assets/ruby_logo.png";
import StickerPeel from "../assets/components/StickerPeel";

const Competencies = () => {
    const reachmehere = [
        {
            name: "Email",
            link: "mailto:giotalingdan@gmail.com"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/rogelio-talingdan-a7a705404 "
        },
        {
            name: "GitHub",
            link: "https://github.com/RogelioGio"
        }
    ];


    return (
      <div className="min-h-screen min-w-screen text-white bg-black container font-helvena px-10 md:px-50 lg:px-125 py-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 opacity-10 -translate-x-1/2 -translate-y-1/2 h-full w-full lg:w-fit">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-[500px] font-black text-primary-500 whitespace-nowrap leading-100 z-0">
              <p>ROGELIO GIO</p>
              <p>TALINGDAN</p>
            </div>
            <img src={image} alt="profile" className="object-cover grayscale h-full w-full z-20"/>
          </div>
        </div>


          {/* Sticker */}
          <div className="z-50 w-full h-full absolute top-0 left-0 hidden lg:flex">
            <StickerPeel
              imageSrc={React_logo}
              width={300}
              rotate={10}
              peelBackHoverPct={10}
              peelBackActivePct={40}
              shadowIntensity={0.5}
              lightingIntensity={0.2}
              initialPosition={{ x: 400, y: 100 }}
              peelDirection={299}
            />
            <StickerPeel
              imageSrc={Laravel_logo}
              width={300}
              rotate={0}
              peelBackHoverPct={0}
              peelBackActivePct={40}
              shadowIntensity={0.5}
              lightingIntensity={0.2}
              initialPosition={{ x: 1200, y: 600 }}
              peelDirection={299}
            />
            <StickerPeel
              imageSrc={Tailwind_logo}
              width={300}
              rotate={20}
              peelBackHoverPct={0}
              peelBackActivePct={40}
              shadowIntensity={0.5}
              lightingIntensity={0.2}
              initialPosition={{ x: 500, y: 600 }}
              peelDirection={299}
            />
             <StickerPeel
              imageSrc={JavaScript_logo}
              width={200}
              rotate={10}
              peelBackHoverPct={0}
              peelBackActivePct={40}
              shadowIntensity={0.5}
              lightingIntensity={0.2}
              initialPosition={{ x: 1250, y: 200 }}
              peelDirection={299}
            />
            <StickerPeel
              imageSrc={MariaDB_logo}
              width={300}
              rotate={-10}
              peelBackHoverPct={0}
              peelBackActivePct={40}
              shadowIntensity={0.5}
              lightingIntensity={0.2}
              initialPosition={{ x: 200, y: 400 }}
              peelDirection={299}
            />
            <StickerPeel
              imageSrc={Mysql_logo}
              width={400}
              rotate={-10}
              peelBackHoverPct={0}
              peelBackActivePct={40}
              shadowIntensity={0.5}
              lightingIntensity={0.2}
              initialPosition={{ x: 1400, y: 300 }}
              peelDirection={299}
            />
            {/* <StickerPeel
              imageSrc={Ruby_logo}
              width={200}
              rotate={0}
              peelBackHoverPct={0}
              peelBackActivePct={40}
              shadowIntensity={0.5}
              lightingIntensity={0.2}
              initialPosition={{ x: 900, y: 700 }}
              peelDirection={299}
            /> */}
          </div>

          <div className="flex items-center gap-2 text-primary-500 z-50">
            <Star className="size-5 text-primary"/>
            <p className="text-sm ">LET'S CONNECT</p>
          </div>
          <div className="flex flex-col items-center gap-4 z-50">
            <p className="text-5xl font-bold text-center">
              Lets start a project together
            </p>
            <p className="text-gray-400 text-center">
              Thank you for visiting here, I am open to new opportunities and collaborations. Feel free to reach out to me for any inquiries or project proposals and 'm looking forward to hearing from you!
            </p>   
            <div className="flex items-center gap-6 justify-center">
              {
                reachmehere.map((item, index) => {
                  const isLastItem = index === reachmehere.length - 1;
                  return (
                    <>
                      <a href={item.link} key={index} className="font-medium hover:bg-primary-500/20 transition-all ease-in-out text-white py-2 px-4 rounded-md">
                      {item.name}
                    </a>
                    {
                      !isLastItem && <div className="size-1 rounded-full bg-gray-500"/>
                    }
                    </>
                  )
                })
              }
            </div>      
          </div>


       

      </div>
    )
}
export default Competencies;
{/* <div className="absolute top-0 left-0 w-full h-full opacity-5 text-primary-500 transform translate-y-[-50%] translate-x-[-50%]">
            <img src={image} alt="profile" className="object-cover grayscale h-full"/>
            <div className="text-white text-center text-[200px] font-black transform translate-y-[-50%] translate-x-[-50%] left-100 leading-100 whitespace-nowrap">
              <p>ROGELIO GIO</p>
              <p>TALINGDAN</p>
            </div>
            <div className="bg-white size-96">
              hello
            </div>
          </div> */}