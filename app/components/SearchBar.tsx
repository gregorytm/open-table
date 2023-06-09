"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar(){
      const router = useRouter();
      const [location, setLocation] = useState("");
  return (
    <div className="text-left py-3 text-lg m-auto flex justify-center">
      <input
        className="bg-white rounded mr-3 px-2 p-2 w-[450px] text-black"
        type="text"
        placeholder="State, City, or Town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="rounded bg-red-600 px-9 py-2"
        onClick={() => {
          if (location === "") return;
          router.push(`/search?city=${location}`);
          setLocation("");
        }}
      >
        Let's Go!
      </button>
    </div>
  );
}