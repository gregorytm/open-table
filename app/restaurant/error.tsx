"use client";

import Image from "next/image";
import errorMascot from "../../public/icons/error.png"

export default function Error({error}: {error: Error}){
  return (
  <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
    <Image  src={errorMascot} alt="error" className="w-56 mb-8" />
    <div className="bg-white px-9 py-14 shadow rounded">
      <h3 className="3xl font-bold text-black">Well, this is embarrasing</h3>
      <p className="text-reg font-bold text-black">{error.message}</p>
      <p className="mt-6 text-small text-black font-light">Error code:400</p>
    </div>
  </div>
  )
}