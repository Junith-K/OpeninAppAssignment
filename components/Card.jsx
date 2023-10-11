import React from "react";
import Image from "next/image";
import revenue from "../public/revenue.png";
import users from "../public/users.png";
import transaction from "../public/transaction.png";
import like from "../public/like.png";

const Card = () => {
  return (
    <div id="card-div">
      <div className="bg-[#FFFFFF] rounded-[20px] p-4 relative cursor-pointer border-[#E0E0E0] border-2">
        <Image
          src={revenue}
          width={36}
          height={36}
          className="my-2 p-2 rounded-[20px] cursor-pointer transition duration-500 bg-[#7FCD93]"
          alt="Card"
        />
        <p>Total Revenues</p>
        <h2 className="text-[1.53em] font-bold">$ 2,129,430</h2>
        <h2 className="absolute bottom-6 right-5 text-[.75em] rounded-2xl font-bold bg-[#E9F9EB] py-1 px-3 text-[#4AD15F]">
          + 2.5%
        </h2>
      </div>
      <div className="bg-[#FFFFFF] rounded-[20px] p-4 relative cursor-pointer border-[#E0E0E0] border-2">
        <Image
          src={transaction}
          width={36}
          height={36}
          className="my-2 p-2 rounded-[20px] cursor-pointer  transition duration-500 bg-[#DEBF85]"
          alt="Card"
        />
        <p>Total Transactions</p>
        <h2 className="text-[1.53em] font-bold">1520</h2>
        <h2 className="absolute bottom-6 right-5 text-[.75em] rounded-2xl font-bold bg-[#E9F9EB] py-1 px-3 text-[#4AD15F]">
          + 1.7%
        </h2>
      </div>
      <div className="bg-[#FFFFFF] rounded-[20px] p-4 relative cursor-pointer border-[#E0E0E0] border-2">
        <Image
          src={like}
          width={36}
          height={36}
          color="#FFF"
          className="my-2 p-2 rounded-[20px] cursor-pointer transition duration-500 bg-[#ECA4A4]"
          alt="Card"
        />
        <p>Total Likes</p>
        <h2 className="text-[1.53em] font-bold">9721</h2>
        <h2 className="absolute bottom-6 right-5 text-[.75em] rounded-2xl font-bold bg-[#E9F9EB] py-1 px-3 text-[#4AD15F]">
          + 1.4%
        </h2>
      </div>
      <div className="bg-[#FFFFFF] rounded-[20px] p-4 relative cursor-pointer border-[#E0E0E0] border-2">
        <Image
          src={users}
          width={36}
          height={36}
          className="my-2 p-2 rounded-[20px] cursor-pointer transition duration-500 bg-[#A9B0E5]"
          alt="Card"
        />
        <p>Total Users</p>
        <h2 className="text-[1.53em] font-bold">9721</h2>
        <h2 className="absolute bottom-6 right-5 text-[.75em] rounded-2xl font-bold bg-[#E9F9EB] py-1 px-3 text-[#4AD15F]">
          + 4.2%
        </h2>
      </div>
    </div>
  );
};

export default Card;
