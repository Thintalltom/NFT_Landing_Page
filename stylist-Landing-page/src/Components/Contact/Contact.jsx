import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "./contact.css";
const Contact = () => {
  const User = [
    {
      photo:
        "https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel sequi et magni, molestias atque, debitis cupiditate nisi porro minus dolor nulla est laboriosam ipsam voluptate soluta doloremque praesentium asperiores.",
      name: "Johnas john",
    },
    {
      photo:
        "https://media.istockphoto.com/id/1388645967/photo/pensive-thoughtful-contemplating-caucasian-young-man-thinking-about-future-planning-new.webp?b=1&s=170667a&w=0&k=20&c=iSQUfWESVgOxHtV5X7lrNxxzaf4b7fMrmI3dXxrFNbQ=",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel sequi et magni, molestias atque, debitis cupiditate nisi porro minus dolor nulla est laboriosam ipsam voluptate soluta doloremque praesentium asperiores.",
      name: "Andrew Steel",
    },
    {
      photo:
        "https://media.istockphoto.com/id/1446934118/photo/happy-business-man-listening-to-a-discussion-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=Glt32OkYik_UecuUajJQrY2i52QdwlxSAgXejVrRfqM=",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel sequi et magni, molestias atque, debitis cupiditate nisi porro minus dolor nulla est laboriosam ipsam voluptate soluta doloremque praesentium asperiores.",
      name: "Jonos jokes",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1664575603992-0f17b771dd91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel sequi et magni, molestias atque, debitis cupiditate nisi porro minus dolor nulla est laboriosam ipsam voluptate soluta doloremque praesentium asperiores.",
      name: "Flora Fol",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = User.length;
  const nextSlides = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };// current slide is equal to zero if length is less than 1 or current is added  1 more

  const prevSlides = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };// current slide is equal to zero if length is less than 1 or current is less than 1

  if (!Array.isArray(User) || User.length <= 0) {
    return User; ///this states that if the user.length is empty it is expected to return user again 
  }

  return (
    <div
      name="contact"
      className="bg-slate-100 relative max-w-[auto] min-h-[50vh]"
    >
      <p className="text-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Our Creators
      </p>

      <div className="justify-center max-w-[auto]  p-[10px]">
        <button onClick={prevSlides} className="mr-[10px] text-2xl  font-extrabold text-slate-300">
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlides} className="ml-[10px] text-2xl font-extrabold text-slate-300">
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      {User.map((user, index) => (
        <div className="flex  items-center align-center justify-center max-w-[auto] ">
          {index === current && (
            <div key={index} className="">
              <div className="flex flex-col text-center items-center">
                <img src={user.photo} className="max-w-[200px] roundedFig" />
                <p className="text-xl font-extrabold mt-[30px] text-center">
                  {user.name}
                </p>
                <p className="max-w-[30rem] p-[10px]">{user.text}</p>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className=" mt-[30px] text-center items-center">
           <p className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> developed by tomide</p> 
      </div>
    </div>
  );
};

export default Contact;
