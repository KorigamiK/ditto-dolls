import { Inter } from "@next/font/google";
// @ts-ignore
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import VideoDisplay from "../components/VideoDisplay";
import SimpleSteps from "../components/SimpleSteps";
import CustomizeNow from "../components/CustomizeNow";
import Others from "../components/Others";
import Detailing from "../components/Detailing";
import SeeMore from "../components/SeeMore";
import ChooseBest from "../components/ChooseBest";
import RealisticLooking from "../components/RealisticLooking";
import ImaginationPrinted from "../components/ImaginationPrinted";
import Footer from "../components/Footer";
import FAQ from "../components/Faq";
import Virtual from "../components/Virtual";
import ReviewSection from "../components/ReviewSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Nav />
            <Banner />
            <VideoDisplay />
            <SimpleSteps />
            <CustomizeNow />
            <Others />
            <Detailing />
            <SeeMore />
            <ChooseBest />
            <RealisticLooking />
            <ImaginationPrinted />
            <Virtual />
            <FAQ />
            <ReviewSection />
            <Footer />
        </>
    );
}
