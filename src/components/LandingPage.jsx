import React from "react";
import Header from "./includes/Header";
import AboutProgram from "./screens/AboutProgram";
import Campuses from "./screens/Campuses";
import Certification from "./screens/Certification";
import FaqSection from "./screens/FaqSection";
import Footer from "./screens/Footer";
import OTTSection from "./screens/OTTSection";
import SchoolJoin from "./screens/SchoolJoin";
import SchoolTefun from "./screens/SchoolTefun";
import Spotlight from "./screens/Spotlight";
import Technologies from "./screens/Technologies";

export default function LandingPage() {
    return (
        <>
            <Header />
            <Spotlight />
            <AboutProgram />
            <Campuses />
            <Technologies />
            <Certification />
            <SchoolTefun />
            <SchoolJoin />
            <OTTSection />
            <FaqSection />
            <Footer />
        </>
    );
}
