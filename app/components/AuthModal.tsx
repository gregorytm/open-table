"use client"

import React, {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "./AuthModalInputs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignin }: { isSignin: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderContent =(signinContent: string, signupContent: string) => {
    return isSignin ? signinContent: signupContent
  };

  const handleChangeInput= (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const [inputs, setInputs] = useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    city:"",
    password:""
  })

  return (
    <div>
      <button
        className={`${renderContent(
          "bg-blue-400 text-white",
          ""
        )} text-black border p-1 px-4 rounded mr-3`}
        onClick={handleOpen}
      >
        {renderContent("Sign in", "Sign up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2 h-[600px]">
            <div className="font-bold text-center pb-2 border-b mb-2 text-black">
              <p>{renderContent("Sign in", "Create Account")}</p>
            </div>
            <div className="m-auto">
              <h2 className="text-2xl font-light text-center text-black">
                {renderContent(
                  "Log Into Your Account",
                  "Create your open table account"
                )}
              </h2>
              <AuthModalInputs
                inputs={inputs}
                handleChangeInput={handleChangeInput}
                isSignin={isSignin}
              />
              <button className="uppercase bg-red-600 w-full p-3 rounded text-sm mb-5 disabled:bg-gray-400">
                {renderContent("Sign In", "Create Account")}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
