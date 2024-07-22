import React, { useEffect, useState } from "react";
import { Container } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Admin = () => {
  const user = useSelector((state) => state.userData);
  return user ? (
    <div className="my-3 p-2 flex items-center justify-center">
      <Container className="sm:w-[80vw] w-[90vw] overflow-hidden ">
        <div className="w-full flex justify-center mb-4 relative rounded-md p-4 ">
          <img
            src="/user.jpg"
            alt="user image"
            className="rounded-t-xl w-full h-full object-cover"
            title={`demo image for you ${user.name}😅`}
          />
        </div>
        <div className="w-full mb-6 py-2 px-4 rounded-b-xl backdrop-invert-0  bg-white/10 flex-col items-center sm:justify-between justify-center sm:flex">
          <h1 className="text-2xl text-center font-serif ">Hey, {user.name}</h1>

          <Link
            className="my-4 text-center inline-block w-full sm:w-auto text-base font-medium text-gray-900 hover:text-gray-700"
            to="mailto:kkharoliya20@gmail.com"
            title="click me to mail"
          >
            Gmail <i className="ri-mail-send-line"></i> : {user.email}
          </Link>
        </div>
      </Container>
    </div>
  ) : (
    <div className="min-h-screen w-[100vw] bg-slate-900 text-4xl flex  items-center justify-center">
      <div className="w-72 h-72 flex  items-center justify-center rounded-full border-dotted p-4 border-white border-8 bg-transparent font-semibold text-red-600 overflow-hidden animate-bounce ease-in-out delay-200 duration-1000">
        <span className="animate-pulse ease-in-out delay-0 duration-800  ">
          Loading ...
        </span>
      </div>
    </div>
  );
};

export default Admin;
