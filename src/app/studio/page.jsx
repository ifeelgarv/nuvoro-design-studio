"use client";
import { useRevealer } from "@/hooks/useRevealer";

const Studio = () => {
  useRevealer();
  return (
    <>
      <div className="revealer"></div>
      <div className="studio">
        <div className="col">
          <h2>Our Story</h2>
        </div>
        <div className="col">
          <h2>
            At Nuvoro, we believe in the power of design to transform ideas into
            reality. Our design studio is a creative hub where innovation meets
            aesthetics, and every project is a unique journey. We are passionate
            about crafting exceptional experiences that resonate with our
            clients and their audiences.
          </h2>

          <div className="about-img">
            <img src="/studio.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Studio;
