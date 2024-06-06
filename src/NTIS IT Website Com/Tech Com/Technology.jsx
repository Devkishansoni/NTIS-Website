import React, { useState } from "react";

export default function Technology() {
  const tech = [
    {
      img: "https://cdn.britannica.com/47/246247-050-F1021DE9/AI-text-to-image-photo-robot-with-computer.jpg",
      tittle: "Artificial intelligence",
      pg: "Artificial intelligence, in its broadest sense, is intelligence exhibited by machines, particularly computer systems.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAEfsg23XTqOnZnURfv3yxqir1j1yWt6f_Q&s",
      tittle: "Linux",
      pg: "Linux® is an open source operating system (OS). An operating system is the software that directly manages a system's hardware and resources, like CPU, memory, and storage.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkMTsyRHJ_jwQduPhFIggaHIuaDeL-BuL5w&s",
      tittle: ".Net.",
      pg: ". NET is an open-source platform for building desktop, web, and mobile applications that can run natively on any operating system. ",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:1200/0*bV6AQdCcj_2w_3u4.png",
      tittle: "Dev-Ops",
      pg: "DevOps is all about the unification and automation of processes, and DevOps engineers are instrumental in combining code, application maintenance, and application management. ",
    },
    {
      img: "https://assets-global.website-files.com/64b6a9e4e2e8460e691fd20f/64b6a9e4e2e8460e691fd484_Salesforce-logo%20(1).jpg",
      tittle: "Sales Force",
      pg: "Salesforce is a cloud-based Customer Relationship Management (CRM) platform that enables businesses to manage customer data, sales operations, and marketing campaigns.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoqa9h-SkUOrQAi9vXVgYTCMObmKf1grTY8w&s",
      tittle: "Android Development",
      pg: "Android development is the process of creating applications for devices running an Android operating system.",
    },
    {
      img: "https://play-lh.googleusercontent.com/u_f6r0YV93zRmSO4-SBUlyzpnyNAI0gNATKat6URmcPvtmuCl2P7K9kr6al2A2InHrE",
      tittle: "AWS",
      pg: "AWS provides a wide variety of courses, and those interested in enrolling can do so online and offline.",
    },
    {
      img: "https://www.mmthailand.com/wp-content/uploads/2019/10/shutterstock_1357559981-e1571363800279.jpg",
      tittle: "Robotic Process Automation",
      pg: "RPA is a software technology that makes it easy to build, deploy, and manage software robots that emulate humans actions interacting with digital systems and software.",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:640/1*ngkHgQq7ij1NBNr62er3zA.png",
      tittle: "Cloud Computing",
      pg: "Cloud computing technology gives users access to storage, files, software, and servers through their internet-connected devices: computers, smartphones, tablets, and wearables.",
    },
    {
      img: "https://www.chitkara.edu.in/wp-content/uploads/2021/04/data-science-Specialisation-Image.jpg",
      tittle: "Data Science",
      pg: "A data scientist is an analytics professional who is responsible for collecting, analyzing and interpreting data to help drive decision-making in an organization.",
    },
    {
      img: "https://assets-global.website-files.com/64cd04d84b8fffc53eed47cd/65532fae99c82474e16d8a6c_High-tech%202.png",
      tittle: "Machine Learning",
      pg: "Machine learning is a subset of AI, which uses algorithms that learn from data to make predictions.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtjucV_IcsjmAI8f78etnVp9yH2n8uuBFlPA&s",
      tittle: "iOS development",
      pg: "iOS application development is the process of making mobile applications for Apple hardware, including iPhone, iPad and iPod Touch.",
    },
  ];

  const [ad, setAd] = useState(6);

  const getCourse = () => {
    setAd(ad + 3);
    if (ad>=tech.length) {
      setAd(6)
    }
  };

  return (
    <>
      <div className="bg-white w-full h-fit border border-2 border-zinc-300 px-5 py-5">
        <h1 className="text-[#060615] text-[3rem] font-bold text-center pt-14">
          ..We're working these Technology..
        </h1>
        <div className="flex flex-row justify-center flex-wrap">
          {tech.slice(0, ad).map((item, index) => (
            <div
              key={index}
              className="tech-details-con rounded-bl-3xl rounded-tr-xl border border-l-2 border-b-2 border-t-0 border-r-0 border-[#2b2bf0] bg-[#eef0f1] shadow-2xl w-full sm:w-[380px] h-[200px] flex flex-col sm:flex-row items-center p-5 mt-11 m-5"
            >
              <div className="w-full sm:w-[230px] mr-2">
                <h1 className="text-black text-[20px] font-semibold pb-3">
                  {item.tittle}
                </h1>
                <p className="text-zinc-600 text-[14px]">{item.pg}</p>
              </div>
              <img
                src={item.img}
                className="rounded-xl w-full sm:w-[110px] h-24"
                alt={item.tittle}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="w-24 h-9 text-xs rounded-md text-white font-semibold bg-yellow-500 hover:bg-yellow-600 transition duration-300"
            onClick={getCourse}
          >
            More Courses
          </button>
        </div>
      </div>
    </>
  );
}
