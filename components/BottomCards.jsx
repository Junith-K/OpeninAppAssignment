import React, { useState } from "react";
import ProfileCards from "./ProfileCards";
import {BsPlus,BsWhatsapp} from "react-icons/bs"
import {RiYoutubeLine} from "react-icons/ri"
import {HiOutlineMail} from "react-icons/hi"
import {AiOutlineInstagram} from "react-icons/ai"

const BottomCards = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ytLink, setYtLiink] = useState("");
  const [instaLink, setInstaLink] = useState("");
  const [profilename, setProfileName] = useState("");
  const [profileemail, setProfileEmail] = useState("");
  const [profilephone, setProfilePhone] = useState("");
  const [profileytLink, setProfileYtLiink] = useState("");
  const [profileinstaLink, setProfileInstaLink] = useState("");
  const [basic, setBasic] = useState(false);
  const [social, setSocial] = useState(true);
  const [details, setDetails] = useState(false);
  // const profileDetail = [
  //   {
  //     name: "",
  //     email: "",
  //     phone: "",
  //     ytLink: "",
  //     instaLink: "",
  //   },
  // ];

  const handleModal = () => {
    const showModal = document.querySelector(".show-modal");
    showModal.classList.remove("hidden");
  };
  const hideModal = () => {
    const showModal = document.querySelector(".show-modal");
    showModal.classList.add("hidden");
  };

  const handleNext = () => {
    let val = false;
    if(name==""){
      const borderBasic = document.querySelector("#Name");
      borderBasic.classList.remove("border-gray-300");
      borderBasic.classList.add("border-[#EE8484]");
      val = true;
    }
     if(email==""){
      const borderBasic = document.querySelector("#Email");
      borderBasic.classList.remove("border-gray-300");
      borderBasic.classList.add("border-[#EE8484]");
      val = true;
    } 
     if(phone==""){
      const borderBasic = document.querySelector("#Phone");
      borderBasic.classList.remove("border-gray-300");
      borderBasic.classList.add("border-[#EE8484]");
      val = true;
    }
    if(val){
      return;
    }
    //next
    const nextBtn = document.querySelector("#nextBtn");
    nextBtn.classList.add("hidden");

    //back
    const back = document.querySelector("#back");
    back.classList.remove("hidden");

    //submit
    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.classList.remove("hidden");

    setSocial(false);
    setBasic(true);
    const borderBasic = document.querySelector("#basic");
    const borderSocial = document.querySelector("#social");

    borderBasic.classList.remove("border-b-[#3F84F8]");
    borderBasic.classList.add("border-b-[#D9D9D9]");

    borderSocial.classList.remove("border-b-[#D9D9D9]");
    borderSocial.classList.add("border-b-[#3F84F8]");
  };
  const handleBack = () => {
    //next
    const nextBtn = document.querySelector("#nextBtn");
    nextBtn.classList.remove("hidden");

    //back
    const back = document.querySelector("#back");
    back.classList.add("hidden");

    //submit
    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.classList.add("hidden");

    setSocial(true);
    setBasic(false);

    const borderBasic = document.querySelector("#basic");
    const borderSocial = document.querySelector("#social");

    borderBasic.classList.remove("border-b-[#D9D9D9]");
    borderBasic.classList.add("border-b-[#3F84F8]");

    borderSocial.classList.remove("border-b-[#3F84F8]");
    borderSocial.classList.add("border-b-[#D9D9D9]");
  };

  const handleSubmit = () => {
    // profileDetail.forEach((item) => {
    //   item.name = name;
    //   item.email = email;
    //   item.phone = phone;
    //   item.ytLink = ytLink;
    //   item.instaLink = instaLink;
    // });
    setProfileEmail(email);
    setProfileName(name);
    setProfilePhone(phone);
    setProfileInstaLink(instaLink);
    setProfileYtLiink(ytLink);
    setName("");
    setEmail("");
    setPhone("");
    setInstaLink("");
    setYtLiink("");
    setDetails(true);

    setBasic(false);
    setSocial(true);
    //next
    const nextBtn = document.querySelector("#nextBtn");
    nextBtn.classList.remove("hidden");

    //back
    const back = document.querySelector("#back");
    back.classList.add("hidden");

    //submit
    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.classList.add("hidden");

    const borderBasic = document.querySelector("#basic");
    const borderSocial = document.querySelector("#social");

    borderBasic.classList.remove("border-b-gray");
    borderBasic.classList.add("border-b-[#3F84F8]");

    borderSocial.classList.remove("border-b-[#3F84F8]");
    borderSocial.classList.add("border-b-gray");

    const showModal = document.querySelector(".show-modal");
    showModal.classList.add("hidden");
  };

  const setNa = (value) => {
    if(value!=""){
      const borderBasic = document.querySelector("#Name");
      borderBasic.classList.remove("border-[#EE8484]");
      borderBasic.classList.add("border-gray-300");
    }
    setName(value)
  }

  const setEm = (value) => {
    if(value!=""){
      const borderBasic = document.querySelector("#Email");
      borderBasic.classList.remove("border-[#EE8484]");
      borderBasic.classList.add("border-gray-300");
    }
    setEmail(value)
  }

  const setPh = (value) => {
    if(value!=""){
      const borderBasic = document.querySelector("#Phone");
      borderBasic.classList.remove("border-[#EE8484]");
      borderBasic.classList.add("border-gray-300");
    }
    setPhone(value)
  }

  return (
    <div id="bottomCardDiv" className="w-full">
      {/* MODAL */}
      <div className="show-modal rounder-[10px] h-screen w-[110%] fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-30 hidden">
        <div
          id="MODAL"
          className="bg-white rounded-[16px] shadow-lg w-[544px] h-[520px]"
        >
          <div className="border-b py-4 px-8 flex justify-between items-center h-[66px]">
            <h1 className="font-black font-MontserratBold">Add New Profile</h1>
            <button onClick={hideModal} className="text-[200]">&times;</button>
          </div>
          <div className="h-[377px]">
            <div
              id="ModalPRO"
              className="flex justify-between border-b-blue mx-auto w-[480px] mt-5"
            >
              <h2
                className="pb-2 w-[45%] text-center font-bold font-Montserrat cursor-pointer"
              >
                Basic
                <div id="basic" className="h-1 border-b-[#3F84F8] border-b-4 rounded-full mt-3"></div>
              </h2>
              <h2
                className="pb-2 w-[45%] text-center font-bold font-Montserrat cursor-pointer"
              >
                Social
                <div id="social" className="h-1 border-b-[#D9D9D9] border-b-4 rounded-full mt-3"></div>
              </h2>
            </div>
            {social && (
              <div className="flex flex-col justify-between py-4 px-8">
                <div className="flex flex-col mb-3 font-Montserrat">
                  <label htmlFor="Name">Enter Name*</label>
                  <input
                    type="text"
                    id="Name"
                    value={name}
                    required
                    onChange={(e) => setNa(e.target.value)}
                    placeholder="Eg. John Doe"
                    className="py-[16px] px-[12px] border border-gray-300 rounded-[12px] mb-3"
                  />
                </div>
                <div className="flex flex-col mb-3 font-Montserrat">
                  <label htmlFor="Email">Enter Email*</label>
                  <input
                    type="email"
                    id="Email"
                    value={email}
                    required
                    onChange={(e) => setEm(e.target.value)}
                    placeholder="Eg. John@xyz.com"
                    className="py-[16px] px-[12px] border border-gray-300 rounded-[12px] mb-3"
                  />
                </div>
                <div className="flex flex-col font-Montserrat">
                  <label htmlFor="Phone">Enter Phone*</label>
                  <input
                    type="number"
                    id="Phone"
                    value={phone}
                    required
                    onChange={(e) => setPh(e.target.value)}
                    placeholder="Eg.  9123456789"
                    className="py-[16px] px-[12px] border border-gray-300 rounded-[12px]"
                  />
                </div>
              </div>
            )}
            {basic && (
  <div className="flex flex-col justify-between py-4 px-8">
    <div className="flex flex-col mb-3">
      <label className="mb-5 text-underline" htmlFor="instaLink">Instagram Link <span className="font-extralight">(Optional)</span></label>
      <input
        type="text"
        id="instaLink"
        value={instaLink}
        onChange={(e) => setInstaLink(e.target.value)}
        placeholder="Eg. ..instagram.com/username"
        className="py-[16px] px-[12px] border border-gray-300 rounded-[12px] mb-5 "
      />
    </div>
    <div className="flex flex-col mb-3">
      <label className="mb-5 text-underline" htmlFor="ytLink">Youtube Link <span className="font-extralight">(Optional)</span></label>
      <input
        type="text"
        id="ytLink"
        value={ytLink}
        onChange={(e) => setYtLiink(e.target.value)}
        placeholder="Eg. ..youtube.com/username"
        className="py-[16px] px-[12px] border border-gray-300 rounded-[12px] "
      />
    </div>
  </div>
)}

          </div>
          <div className="flex justify-end px-8">
            <button
              id="back"
              className="px-3 py-2 border-[#999CA0] border-2 mr-2 text-black font-Montserrat w-fit-content rounded-[8px] hidden"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              id="nextBtn"
              className="px-3 py-2 bg-[#3E84F8] text-white font-Montserrat w-fit-content rounded-[8px]"
              onClick={handleNext}
            >
              Next
            </button>
            <button
              type="submit"
              id="submitBtn"
              className="px-3 py-2 bg-[#3E84F8] text-white font-Montserrat w-fit-content rounded-[8px] hidden"
              onClick={handleSubmit}
            >
              Done
            </button>
          </div>
        </div>
      </div>
  
        <div className="p-5 rounded-[20px] bg-white border-[#E0E0E0] border-2">
          <div className="flex justify-between items-center">
            <div className="flex-[7]">
              <h1 className="text-lg font-MontserratBold font-black">Top Products</h1>
            </div>
            <div className="flex-[8] text-sm flex justify-end items-center gap-2">
            <p className="font-extralight font-Montserrat">May - June 2021</p>
            </div>
          </div>
          
            <ProfileCards/>
          {/* </div>  */}
        </div>
        <div className="p-5 rounded-[20px] bg-white flex justify-center items-center modal border-[#E0E0E0] border-2">
          {!details && (
            <div className="flex flex-col justify-center align-middle cursor-pointer" onClick={handleModal}>
              <div className="bg-[#F2F2F2] w-min self-center p-3 rounded-full mb-4">
                <BsPlus size={50} color="#999CA0"/>
              </div>
              <h1 className="text-lg font-MontserratBold">Add Profile</h1>
            </div>
            // <Image
            //   src={AddProfile}
            //   alt="Add Profile Button"
            //   className="cursor-pointer"
            //   onClick={handleModal}
            // />
          )}
          {details && (
            <div
              className="flex flex-col justify-around h-full w-[100%]"
              id="profileCard"
            >
              <div className="text-left ml-4">
                <h3 className="font-bold text-2xl font-Montserrat">{profilename}</h3>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-between p-2 card-id gap-4">
                  <div className="flex justify-start">
                    <div className="bg-[#E9F9EB] mr-4 p-2 rounded-full cursor-pointer">
                    <BsWhatsapp size={20} color="#3CC952"/>
                    </div>
                    <p className="self-center underline font-Montserrat cursor-pointer text-[0.82rem]">{profilephone}</p>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-[#EBE6F9] mr-4 p-2 rounded-full cursor-pointer">
                      <HiOutlineMail size={20} color="#5C33CF"/>
                    </div>
                    <span className="self-center underline font-Montserrat  cursor-pointer text-[0.82rem]">{profileemail }</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between p-2 card-id">
                  <div className="flex justify-start">
                  <div className="bg-[#FFE9E9] mr-4 p-2 rounded-full cursor-pointer">
                      <AiOutlineInstagram size={20} color="#FF0000"/>
                    </div> 
                    <span className="self-center underline font-Montserrat cursor-pointer text-[0.82rem]">{profileinstaLink}</span>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-[#FFE9E9] mr-4 p-2 rounded-full cursor-pointer">
                      <RiYoutubeLine size={20} color="#FF0000"/>
                    </div>  
                    <span className="cursor-pointer text-[0.82rem] self-center underline font-Montserrat ">{profileytLink}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      
      {/* ProfileCards */}
      
    </div>
  
  );
};

export default BottomCards;
