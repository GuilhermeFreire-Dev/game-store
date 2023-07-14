import { useEffect, useState } from "react";
import CardV from "../layout/Catalog/CardV";
import Carousel from "../layout/Catalog/Carousel";
import Footer from "../layout/Footer/Footer";
import Navbar from "../layout/Navbar/Navbar";
import axios from "axios";
import Highlights from "../layout/Homepage/Highlights";
import Promotions from "../layout/Homepage/Promotions";


function Home() {

  return (
    <>
      <Navbar></Navbar>
      <div className="pl-44 pr-44 pt-5 pb-10">
        <div className="rounded-xl 
                        pt-1 pr-10 pb-5 pl-10 mb-5
                        bg-opacity-80"
        >
          <Carousel></Carousel>
        </div>
        <Promotions></Promotions>
        <Highlights></Highlights>
        <h3 className="text-2xl mb-5 font-bold">Mais populares</h3>
        <div className="flex justify-between mb-10">
          <CardV></CardV>
          <CardV></CardV>
          <CardV></CardV>
          <CardV></CardV>
          <CardV></CardV>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;