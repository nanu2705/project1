import React from "react";
import "./Cards/Card.scss";
import "./Home.scss";
import Banner from "../Banner/Banner";
import CardsContainer from "./Cards/CardsContainer";
import Work from "../Common/Workflow/Work";
import Counting from "../Common/Counting/Counting";
import Review from "../Common/Review/Review";



const Home = () => {
  
  return (
    <div className="home">
      <Banner />
      <CardsContainer />
      <Work/>
      <Counting/>
      <Review/>
     
    </div>
  );
};

export default Home;
