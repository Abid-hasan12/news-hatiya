import React from 'react';
import HeroSection from './Home/HeroSection';
import CategoryGrid from './Home/CategoryGrid';
import TrendingBar from './Home/TrendingBar';
import Shorts from './Home/Shorts';
import MostRead from './Home/MostRead';
import VideoSection from './Home/VideoSection';
import SportsSection from './Home/SportsSection';
import WebStories from './Home/WebStories';
import PrintEdition from './Home/PrintEdition';
import SaraDesh from './Home/SaraDesh';
import EconomySection from './Home/EconomySection';
import EntertainmentSection from './Home/EntertainmentSection';
import JobsSection from './Home/JobsSection';
import WorldNews from './Home/WorldNews';
import IslamicNews from './Home/IslamicNews';
import LifestyleSection from './Home/LifestyleSection';
import OpinionAndAdda from './Home/OpinionAndAdda';
import TrendingTags from './Home/TrendingTags';

export default function Home() {
    return (
        <div className="home-page">
            {/* Sections List */}
            <HeroSection />
            <CategoryGrid />
            <TrendingBar />
            <Shorts />
            <MostRead />
            <VideoSection />
            <SportsSection />
            <WebStories />
            <PrintEdition />
            <SaraDesh />
            <EconomySection />
            <EntertainmentSection />
            <JobsSection />
            <WorldNews />
            <IslamicNews />
            <LifestyleSection />
            <OpinionAndAdda />
            <TrendingTags />

            {/* এরপরে পরবর্তী যে সেকশনটা বাকি আছে সেটার কোড আসবে */}
        </div>
    );
}