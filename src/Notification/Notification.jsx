import React from "react";

import Activity1 from "../Images/activity-01.webp";
import Activity2 from "../Images/activity-02.webp";
import Activity3 from "../Images/activity-03.webp";
import Activity4 from "../Images/activity-04.webp";
import Activity5 from "../Images/activity-05.webp";
import Activity6 from "../Images/activity-06.webp";
import clockIcon from "../Images/clock.svg";
import userIcon from "../Images/user.svg";


const Notification = () => {
  const notificationArray = [
    {
      activityImage: Activity1,
      activityName: "preatent",
      activityAmount: "0.50ETH",
      activityTime: "2.30 PM",
      activityDate: "20th June",
      activityUser: "Vedant Kulkarni",
    },
    {
      activityImage: Activity2,
      activityName: "#21 The Wonder",
      activityAmount: "0.50ETH",
      activityTime: "2.30 PM",
      activityDate: "20th June",
      activityUser: "Farik Shaikh",
    },
    {
      activityImage: Activity3,
      activityName: "Morgan 11",
      activityAmount: "0.50ETH",
      activityTime: "2.30 PM",
      activityDate: "20th June",
      activityUser: "John Doe",
    },
    {
      activityImage: Activity4,
      activityName: "Diamond Dog",
      activityAmount: "0.50ETH",
      activityTime: "2.30 PM",
      activityDate: "20th June",
      activityUser: "John Doe",
    },
    {
      activityImage: Activity5,
      activityName: "cAtal7",
      activityAmount: "0.50ETH",
      activityTime: "2.30 PM",
      activityDate: "20th June",
      activityUser: "John Doe",
    },
    {
      activityImage: Activity6,
      activityName: "Norgan12",
      activityAmount: "0.50ETH",
      activityTime: "2.30 PM",
      activityDate: "20th June",
      activityUser: "Olive Yew",
    },
  ];
  return (
    <div>
      {/* <NavBar /> */}
      <div className="pt-[100px] text-[24px] font-bold ">All following Activity</div>
      <div className="container mx-[10px]">
        {notificationArray.map((activityItem, index) => (
          <div className="flex border rounded-lg shadow-lg w-[50%] mx-auto my-5" key={index}>
            <div className="p-4">
              <a href={activityItem.activityImage} target="_self">
                <img
                  src={activityItem.activityImage}
                  alt={activityItem.activityName}
                  className="max-w-full h-auto"
                />
              </a>
            </div>
            <div className="p-4">
              <div className="font-bold">{activityItem.activityName}</div>
              <div>
                10 editions listed by Bits for {activityItem.activityAmount} each
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex items-center">
                  <img src={clockIcon} alt="Clock Icon" className="mr-1 h-4 w-4" />
                  <div>
                    {activityItem.activityTime} on {activityItem.activityDate}
                  </div>
                </div>
                <div className="flex items-center">
                  <img src={userIcon} alt="User Icon" className="mr-1 h-4 w-4" />
                  <div>{activityItem.activityUser}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Notification;