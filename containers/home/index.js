import React from "react";
import Slider from "@/components/slider";
import BuyCard from "@/components/buyCard";
import PhotoGalery from "@/components/galery";

function HomeContainer() {
  return (
    <div>
      <Slider />
      <BuyCard />

      <PhotoGalery />
    </div>
  );
}

export default HomeContainer;
