import React from "react";

const page = ({ params }: { params: { idArea: string } }) => {
  return <div>page {params.idArea}</div>;
};

export default page;
