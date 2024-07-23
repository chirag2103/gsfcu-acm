import React from "react";
import Spline from "@splinetool/react-spline"
import Navbar from "./Navbar";

const Home = () => {
    return (
      <>
        <Navbar/>
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <Spline scene="https://prod.spline.design/lde62xMj3EFkmvVF/scene.splinecode" />
        </div>
      </>
    );
}

export default Home