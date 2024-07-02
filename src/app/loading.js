"use client";

import { BarLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <BarLoader color="#626138" size={18} />
    </div>
  );
}
