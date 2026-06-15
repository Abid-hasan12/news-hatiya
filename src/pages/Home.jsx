import React from 'react';
import { allNews, trendingTags, trendingTopicsData } from '../newsData'; // সেন্ট্রাল ফাইল থেকে ডাটা ইমপোর্ট

//  হোম পেজের সাব-কম্পোনেন্টসমূহ ইমপোর্ট
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

    // 🎯 ১. হিরো সেকশনের ডাটা ফিল্টারিং (বড় নিউজ ও সাইডবার)
    const bigFeaturedNews = allNews.find(news => news.isFeatured === true);
    const latestSidebar = allNews.filter(news => news.category === "সর্বশেষ").slice(0, 3);

    // 🎯 ২. ক্যাটাগরি গ্রিডের ডাটা প্রসেসিং (রাজনীতি, আন্তর্জাতিক, বিনোদন, খেলাধুলা)
    const gridCategories = [
        { name: "রাজনীতি", label: "রাজনীতি" },
        { name: "আন্তর্জাতিক", label: "আন্তর্জাতিক" },
        { name: "বিনোদন", label: "বিনোদন" },
        { name: "খেলাধুলা", label: "খেলাধুলা" }
    ];

    const processedGridData = gridCategories.map(cat => ({
        categoryName: cat.label,
        // প্রতিটা ক্যাটাগরির লেটেস্ট ৩টি করে নিউজ ফিল্টার করা হচ্ছে
        newsList: allNews.filter(news => news.category === cat.name).slice(0, 3)
    }));

    // 🎯 ৩. শর্টস সেকশনের ডাটা ফিল্টারিং
    const filteredShorts = allNews.filter(news => news.category === "শর্টস");

    // 🎯 ৪. সর্বাধিক পঠিত এবং ফ্যাক্টচেক ডাটা ফিল্টারিং
    const filteredMostRead = allNews.filter(news => news.category === "সর্বাধিক পঠিত").slice(0, 6);
    const bigFactCheck = allNews.find(news => news.category === "ফ্যাক্টচেক" && news.isMainFact === true);
    const sideFactCheckList = allNews.filter(news => news.category === "ফ্যাক্টচেক" && news.isMainFact === false).slice(0, 3);

    // 🎯 ৫. ভিডিও সেকশনের ডাটা ফিল্টারিং
    const bigVideo = allNews.find(news => news.category === "ভিডিও" && news.videoType === "featured");
    const middleVideosList = allNews.filter(news => news.category === "ভিডিও" && news.videoType === "list").slice(0, 3);
    const rightAnalysisVideo = allNews.find(news => news.category === "ভিডিও" && news.videoType === "analysis");

    // 🎯 ৬. খেলাধুলা সেকশনের ডাটা ফিল্টারিং
    const sportsLeadNews = allNews.find(news => news.category === "খেলাধুলা" && news.sportsType === "lead");
    const sportsSubGrid = allNews.filter(news => news.category === "খেলাধুলা" && news.sportsType === "subGrid").slice(0, 2);
    const sportsSidebarList = allNews.filter(news => news.category === "খেলাধুলা" && news.sportsType === "sidebar").slice(0, 4);
    const sportsFeatureCard = allNews.find(news => news.category === "খেলাধুলা" && news.sportsType === "feature");

    // 🎯 ৭. ওয়েব স্টোরি সেকশনের ডাটা ফিল্টারিং
    const filteredWebStories = allNews.filter(news => news.category === "ওয়েব স্টোরি");

    // 🎯 ৮. ছাপা সংস্করণ সেকশনের ডাটা ফিল্টারিং
    const filteredPrintEdition = allNews.filter(news => news.category === "ছাপা সংস্করণ").slice(0, 4);

    // 🎯 ৯. সারাদেশে সেকশনের ডাটা ফিল্টারিং
    const saraDeshLead = allNews.find(news => news.category === "সারাদেশ" && news.isSaraDeshLead === true);
    const saraDeshSideList = allNews.filter(news => news.category === "সারাদেশ" && news.isSaraDeshLead === false).slice(0, 2);

    // 🎯 ১০. অর্থনীতি সেকশনের ডাটা ফিল্টারিং
    const economyLead = allNews.find(news => news.category === "অর্থনীতি" && news.economyType === "lead");
    const economyMiddleList = allNews.filter(news => news.category === "অর্থনীতি" && news.economyType === "middleCard").slice(0, 2);
    const economyTextList = allNews.filter(news => news.category === "অর্থনীতি" && news.economyType === "textCard").slice(0, 2);

    // 🎯 ১১. বিনোদন সেকশনের ডাটা ফিল্টারিং
    const entLeadNews = allNews.find(news => news.category === "বিনোদন" && news.entType === "lead");
    const entSubCards = allNews.filter(news => news.category === "বিনোদন" && news.entType === "subCard").slice(0, 2);
    const entListNews = allNews.filter(news => news.category === "বিনোদন" && news.entType === "list").slice(0, 4);
    const entFeatureCard = allNews.find(news => news.category === "বিনোদন" && news.entType === "feature");

    // 🎯 ১২. চাকরি সেকশনের ডাটা ফিল্টারিং
    const jobLeadNews = allNews.find(news => news.category === "চাকরি" && news.jobType === "lead");
    const jobCircularList = allNews.filter(news => news.category === "চাকরি" && news.jobType === "circular").slice(0, 3);
    const jobGuideCard = allNews.find(news => news.category === "চাকরি" && news.jobType === "guide");

    // 🎯 ১৩. বিশ্ব সেকশনের ডাটা ফিল্টারিং
    const worldLeadNews = allNews.find(news => news.category === "বিশ্ব" && news.worldType === "lead");
    const worldMiddleList = allNews.filter(news => news.category === "বিশ্ব" && news.worldType === "middleCard").slice(0, 2);
    const worldBulletList = allNews.filter(news => news.category === "বিশ্ব" && news.worldType === "bullet").slice(0, 2);

    // 🎯 ১৪. ইসলাম সেকশনের ডাটা ফিল্টারিং
    const islamCardList = allNews.filter(news => news.category === "ইসলাম" && news.islamicType === "card").slice(0, 3);
    const islamTextList = allNews.filter(news => news.category === "ইসলাম" && news.islamicType === "text").slice(0, 2);

    // 🎯 ১৫. জীবনধারা সেকশনের ডাটা ফিল্টারিং
    const lifestyleMainList = allNews.filter(news => news.category === "জীবনধারা" && news.lifestyleType === "main").slice(0, 3);
    const lifestyleSidebarList = allNews.filter(news => news.category === "জীবনধারা" && news.lifestyleType === "sidebar").slice(0, 4);

    // 🎯 ১৬. মতামত ও আড্ডা সেকশনের ডাটা ফিল্টারিং
    const opinionLeadNews = allNews.find(news => news.category === "মতামত" && news.subType === "lead");
    const opinionSmallNewsList = allNews.filter(news => news.category === "মতামত" && news.subType === "small").slice(0, 6);
    const addaNewsList = allNews.filter(news => news.category === "আড্ডা").slice(0, 3);

    return (
        <div className="home-page">
            {/* ১. হিরো সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <HeroSection featuredNews={bigFeaturedNews} sidebarNews={latestSidebar} />

            {/* ২. ক্যাটাগরি গ্রিড (প্রসেসড ডাটা পাস করা হলো) */}
            <CategoryGrid gridData={processedGridData} />

            {/* ০. ট্রেন্ডিং বার সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <TrendingBar topics={trendingTopicsData} />

            {/* ৩. শর্টস সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <Shorts shortsData={filteredShorts} />

            {/* ৪. সর্বাধিক পঠিত ও ফ্যাক্টচেক সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <MostRead
                mostReadData={filteredMostRead}
                mainFactCheck={bigFactCheck}
                factCheckList={sideFactCheckList}
            />

            {/* ৫. ভিডিও সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <VideoSection
                featuredVideo={bigVideo}
                listVideos={middleVideosList}
                analysisVideo={rightAnalysisVideo}
            />

            {/* ৬. খেলাধুলা সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <SportsSection
                leadSports={sportsLeadNews}
                subGridSports={sportsSubGrid}
                sidebarSports={sportsSidebarList}
                featureSports={sportsFeatureCard}
            />
            {/* ৭. ওয়েব স্টোরি সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <WebStories storiesData={filteredWebStories} />

            {/* ৮. ছাপা সংস্করণ সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <PrintEdition printStories={filteredPrintEdition} />

            {/* ৯. সারাদেশে সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <SaraDesh leadNews={saraDeshLead} sideNews={saraDeshSideList} />

            {/* ১০. অর্থনীতি সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <EconomySection
                leadEconomy={economyLead}
                middleEconomy={economyMiddleList}
                textEconomy={economyTextList}
            />

            {/* ১১. বিনোদন সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <EntertainmentSection
                leadEnt={entLeadNews}
                subCardsEnt={entSubCards}
                listEnt={entListNews}
                featureEnt={entFeatureCard}
            />

            {/* ১২. চাকরি সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <JobsSection
                leadJob={jobLeadNews}
                circularJobs={jobCircularList}
                guideJob={jobGuideCard}
            />

            {/* ১৩. বিশ্ব সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <WorldNews
                leadWorld={worldLeadNews}
                middleWorld={worldMiddleList}
                bulletWorld={worldBulletList}
            />

            {/* ১৪. ইসলাম সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <IslamicNews
                cardsIslam={islamCardList}
                textIslam={islamTextList}
            />
            {/* ১৫. জীবনধারা সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <LifestyleSection
                mainLifestyle={lifestyleMainList}
                sidebarLifestyle={lifestyleSidebarList}
            />
            {/* ১৬. মতামত ও আড্ডা সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <OpinionAndAdda
                opinionLead={opinionLeadNews}
                opinionSmallList={opinionSmallNewsList}
                addaList={addaNewsList}
            />

            {/* ১৭. ট্রেন্ডিং ট্যাগ সেকশন (ডায়নামিক ডাটা পাস করা হলো) */}
            <TrendingTags tags={trendingTags} />
        </div>
    );
}