import React from "react";
import NavBar from "../HomePage/NavBar";
import sideimg from "../Images/contact1.webp"

const Contact = () => {
  return (
    <div>
      <div>
        <NavBar />
        <div className="pt-[100px] text-center">
          <div>Quick Contact Address</div>
          <div>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </div>
        </div>
        <div className="flex justify-evenly items-center m-10">
          <div className="border shadow-xl p-[80px]">
            <div className="text-[20px] font-bold pb-8">Contact Phone Number</div>
            <div>+444 555 666 777</div>
            <div>+444 555 666 777</div>
          </div>
          <div className="border shadow-xl p-[80px]">
            <div className="text-[20px] font-bold pb-8">Our Email Address</div>
            <div>admin@gmail.com</div>
            <div>example@gmail.com</div>
          </div>
          <div className="border shadow-xl p-[80px]">
            <div className="text-[20px] font-bold pb-8">Our Location</div>
            <div>5678 Bangla Main Road, cities 580</div>
            <div>GBnagla, example 54786</div>
          </div>
        </div>
        <div className="flex justify-between px-5">
            <div ><img src={sideimg} alt="contactus"/></div>
            <div className="border w-[50%]">
                <div className="text-[24px] font-bold ">Contact Us</div>
                <div>
                    <div>Your Name</div>
                    <div className=""><input /></div>
                </div>
                <div>
                    <div>Email</div>
                    <div><input /></div>
                </div>
                <div>
                    <div>Subject</div>
                    <div><input /></div>
                </div>
                <div>
                    <div>Write Message</div>
                    <div><input /></div>
                </div>
                <div>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
