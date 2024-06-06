import React, { useState } from "react";
// import CSS from "./Home.css";

export default function Home() {
  const backImage = [
    {
      img: "https://img.freepik.com/free-photo/laptop-with-pen-pencil-paper-clips-sticky-notes-spiral-notepad-beige-background_23-2148042090.jpg?t=st=1717245859~exp=1717249459~hmac=75d4df223c229fbfe3ca9b411d096a301c2d8528f90c9c9d37b5a83eb7eff897&w=996",
      title: "Outsourcing",
      pg: "We Help Our Clients To Drive Excellence Through Our Integrated Business Outsourcing Solutions.",
    },
    {
      img: "https://img.freepik.com/free-photo/high-angle-wooden-figurine-with-academic-cap-laptop_23-2148756551.jpg?t=st=1717246277~exp=1717249877~hmac=6ab5c8bf26dd62f9166d0c7dd1d7f5349e29e642f49402c0065bbe757f8913ea&w=996",
      title: "Leadership",
      pg: "Providing Robust And Scalable Business Solutions By Combining Technical Expertise With Itmnc Strong Business Focused Leadership.",
    },
    {
      img: "https://5.imimg.com/data5/QE/FK/GLADMIN-37929460/software-development-service-500x500.png",
      title: "Digital Transformation",
      pg: "Rethinking Transformation To Build The Next Powerful Competitive Differentiation For The Digital Age.",
    },
    {
      img: "https://www.themandarin.com.au/wp-content/uploads/2024/03/AdobeStock_634807291-e1710458977404.jpeg?w=1024",
      title: "Application Development",
      pg: "Create Powerful Applications That Are Ready To Accelerate Productivity And Scalability To The Next Level.",
    },
  ];

  let [index, setIndex] = useState(0);

  const Increment = () => {
    setIndex((prevIndex) => (prevIndex + 1) % backImage.length);
  };

  const Decrement = () => {
    setIndex((prevIndex) => (prevIndex - 1 + backImage.length) % backImage.length);
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${backImage[index].img})` }}
        className="bg-cover bg-center main-cont w-full h-[100vh] border border-3 border-[gray]"
      >
        {/* Icon Container */}
        <div className="flex flex-row justify-end mr-8">
          <div className="flex flex-row w-[600px] h-8 px-1 bg-blue-800 shadow-md">
            <div className="w-[300px] h-7 bg-blue-950"></div>
            <div className="flex  p-2 gap-5 text-white">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
        {/* Home Company Logo container */}
        <div className="flex flex-row justify-around">
          <img
            src="https://newtalentinfotech.com/assets/logo.png"
            className="w-[170px] h-32"
          />
          <div className="text-[#ff3f3f] font-sans font-bold list-none flex flex-row gap-4 items-center">
            <li>About Us</li>
            <li>Contact Us</li>
            <button className="w-[150px] h-8 rounded-md border border-2 border-[white]">
              Get & Quote
            </button>
          </div>
        </div>

        {/* Scroll Icon Container */}
        <div className="flex flow-row justify-around items-center mt-24">
          <i
            className="fa-solid fa-less-than font-bold text-[red]"
            onClick={Decrement}
          ></i>
          <div className="flex flex-col w-[600px] mr-55">
            <h1 className="text-white font-bold text-[40px] pb-7">
              {backImage[index].title}
            </h1>
            <p className="text-[#0a0b21] font-semibold">{backImage[index].pg}</p>
          </div>
          <i
            className="fa-solid fa-greater-than font-bold text-[#f83e3e]"
            onClick={Increment}
          ></i>
        </div>
      </div>
    </>
  );
}
