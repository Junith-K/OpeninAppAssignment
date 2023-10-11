"use client";
import Form from "@/components/Form";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai"
import {BsDiscord} from "react-icons/bs"

export default function Home() {
  const session = useSession();

  useEffect(() => {
    if (session.status == "authenticated") {
      redirect("/dashboard");
    }
  }, [session.status]);


  const triangleClipPath = "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)";
  const backgroundStyle = {
    clipPath: triangleClipPath,
    WebkitClipPath: triangleClipPath,
    background: "linear-gradient(180deg, #4285F4 0%, #286DE0 100%)",
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen" id="container">
      <div
        className="flex-1 flex flex-col max-lg:hidden justify-center items-center bg-[#F8FAFF] text-white font-bold text-4xl lg:text-[72px]"
        style={backgroundStyle}
      >
        <span className="text-white font-bold text-xl absolute top-4 left-4 font-Poppins p-8">
          LOGO
        </span>
        <h1 className="text-center font-Montserrat">Board.</h1>
        <br />
        <div className="flex justify-center items-center mt-5 lg:mt-0 absolute bottom-[8.5rem] lg:bottom-[2.5rem]">
          <div className="grid grid-cols-4 lg:grid-cols-4 gap-0 lg:gap-0">
            <AiFillGithub size={40} className="mr-10"/>
            <AiFillTwitterCircle size={40}/>
            <AiFillLinkedin size={40}/>
            <BsDiscord size={40}/>
          </div>
        </div>
      </div>
      <div className="bg-[#F8FAFF] flex-1 flex justify-center items-center">
        <Form />
      </div>
    </div>
  );
}
