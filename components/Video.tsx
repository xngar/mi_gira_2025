import React from "react";

const Video = () => {
  return (
    <div className=" bg-blue-700 ">
      <div className="bg-white flex items-center justify-center flex-col p-4 text-center">
        <h2 className="text-[60px] text-[#58167D]">Giras de Estudio</h2>
        <h3 className="text-[30px] text-[#58167D]">
          La mejor experiencia para disfrutar con tu curso
        </h3>
      </div>
      {/* video de youtube */}

      <div className="bg-[url('/fondo-video.jpg')] bg-cover bg-no-repeat bg-center h-[450px]">
        <div className="flex justify-center items-center h-full pt-6 pb-6">
          <iframe
            src="https://player.vimeo.com/video/109842581"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
