import React from "react";

export default function Industries() {
  return (
    <div className="w-full h-fit bg-[#161632] px-4 py-6 border border-2 border-zinc-300">
      <h1 className="text-white text-center text-4xl pt-7 pb-7 font-bold">
        {" "}
        We Serve All Industries{" "}
      </h1>
      <div className="flex flex-row text-center justify-around">
        <div className=" flex flex-col items-center">
          <img
            src="https://newtalentinfotech.com/assets/uploaded_files/indrusties/serve1S2PT.png"
            className="w-[130px] h-20 pb-1"
            alt=""
          />
          <p className="text-white text-[15px] font-bold">B2B</p>
        </div>
        <div className=" flex flex-col items-center">
          <img
            src="https://newtalentinfotech.com/assets/uploaded_files/indrusties/serve4M4Ec.png"
            className="w-[130px] h-20 pb-1"
            alt=""
          />
          <p className="text-white text-[15px] font-bold">Matrimonial</p>
        </div>

        <div className=" flex flex-col items-center">
          <img
            src="https://newtalentinfotech.com/assets/uploaded_files/indrusties/health43sC.png"
            className="w-[130px] h-20 pb-1"
            alt=""
          />
          <p className="text-white text-[15px] font-bold">Health</p>
        </div>

        <div className=" flex flex-col items-center">
          <img
            src="https://newtalentinfotech.com/assets/uploaded_files/indrusties/serve3kXlE.png"
            className="w-[130px] h-20 pb-1"
            alt=""
          />
          <p className="text-white text-[15px] font-bold">Jobs</p>
        </div>

        <div className=" flex flex-col items-center">
          <img
            src="https://newtalentinfotech.com/assets/uploaded_files/indrusties/serve5z0MK.png"
            className="w-[130px] h-20 pb-1"
            alt=""
          />
          <p className="text-white text-[15px] font-bold">Real-State</p>
        </div>
        <div className="mr-2 flex flex-col items-center">
          <img
            src="https://newtalentinfotech.com/assets/uploaded_files/indrusties/serve6MVfM.png"
            className="w-[130px] h-20 pb-1"
            alt=""
          />
          <p className="text-white text-[15px] font-bold">E-commerce</p>
        </div>
      </div>
    </div>
  );
}
