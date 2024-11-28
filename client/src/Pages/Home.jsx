import { Flex, Divider } from "@chakra-ui/react";
import React from "react";
import Navbar2 from "../Components/Navbar/navbar2";
import Hero from "../Components/Sections/Hero";
import Features from "../Components/Sections/Features";
import Rewards from "../Components/Sections/Rewards";
import RewardCalculator from "../Components/Sections/Reward_Calculator";
import SocialSharingEngagement from "../Components/Sections/SocialSharingEngagement";
import Countdown from "../Components/Sections/Countdown";
import Early_Access from "../Components/Sections/Early_Access";
import Signup from "../Components/Registration/Signup";
import Ai_Chatbot from "../Components/Sections/Ai_Chatbot";
import Footer1 from "../Components/Footer/Footer1";
import Popup from "../Components/Popup";
import Referral_Tracker from "../Components/Referral_Tracker";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  const targetDate = "November 30, 2024";
  return (
    <>
      <Flex gap={"2vh"} direction={"column"} mt={"2vh"}>
        {/* <Navbar2 /> */}
        <Navbar />
        <Hero />
        <Divider />
        <Popup />
        <Features />
        <Divider />
        <Rewards />
        <RewardCalculator />
        <SocialSharingEngagement />
        <Countdown targetDate={targetDate} />
        <Early_Access />
        <Signup />
        <Ai_Chatbot />
        {/* <Footer1 /> */}
        <Footer/>
      </Flex>
    </>
  );
};

export default Home;