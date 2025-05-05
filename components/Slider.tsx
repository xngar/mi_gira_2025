import Image from "next/image";
import React from "react";

const Slider = () => {
  return (
    <div className="h-[500px] bg-green-700 p-8 relative">
      <Image src="/Banner3.jpg" alt="Banner" layout="fill" objectFit="cover" />
    </div>
  );
};

export default Slider;
