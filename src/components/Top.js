import React from "react";
import img from "../images/DSCN0167.JPG";
const Top = () => {
  return (
    <>
      <div className="top-box">
        <img src={img} alt="" />
        <div className="content">
          <h2>I am Lavanya</h2>
          <h3>
            A self-motivated student looking for an entry-level position in the
            company where I can utilize the extensive knowledge I have gained
            during my degree. Well focused and determined towards my tasks. My
            motive is in not giving up.
          </h3>
          <button className="btn"><a href="#contact">Contact</a></button>
        </div>
      </div>
    </>
  );
};

export default Top;
