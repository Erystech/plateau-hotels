import React from "react";
import Hero from "../components/sections/Hero";
import RoomCard from "../components/sections/RoomCard";
import FeaturedRooms from "../components/sections/featuredRooms";
import Rooms from "./Rooms";
import { Routes, Route } from "react-router-dom";
import Facilities from "../components/sections/Facilities";
import Footer from "../components/layout/footer";

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedRooms />
            < Facilities />
            <Footer />

        </>
    )
}

export default Home;