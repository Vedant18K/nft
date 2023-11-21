import React from "react";
import single from "../Images/single.webp";
import multiple from "../Images/multiple.webp";
import { Link } from "react-router-dom";

const UserType = () => {
  return (
    <div>
      <div className="pt-[100px] text-center justify-between ">
        <div className="text-[24px] font-bold"> Upload Variants</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          <br />
          inventore, officiis. Alias aspernatur laboriosam ratione! Doloremque
          ipsa nesciunt sed!
        </div>
        <div className="flex justify-center gap-10 pt-4">
          <div className="">
            <div className="w-[300px]">
              <img src={single} alt={single} />
            </div>
            <Link to={"/create-nft"}><div className="p-4 mt-4 border bg-[#00a3ff] hover:bg-black text-white rounded-md">
              Create Single
            </div></Link>
          </div>
          <div>
            <div className="w-[300px]">
              <img src={single} alt={multiple} />
            </div>
            <Link to={"/create-nft"}><div className="p-4 mt-4  border bg-[#00a3ff] hover:bg-black text-white rounded-md">
              Create Multiple
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserType;
