import React from 'react';
import { allNews, trendingTags, trendingTopicsData } from '../newsData'; // সেন্ট্রাল ফাইল থেকে ডাটা ইমপোর্ট

//  হোম পেজের সাব-কম্পোনেন্টসমূহ ইমপোর্ট
import LatestNews from './Home/LatestNews';
import HatiyaSection from './Home/HatiyaSection';
import Politics from './Home/Politics';
import TrendingBar from './Home/TrendingBar';
import Shorts from './Home/Shorts';
import MostRead from './Home/MostRead';
import VideoSection from './Home/VideoSection';
import SportsSection from './Home/SportsSection';
import WebStories from './Home/WebStories';
import PrintEdition from './Home/PrintEdition';
import Bangladesh from './Home/Bangladesh';
import EconomySection from './Home/EconomySection';
import EntertainmentSection from './Home/EntertainmentSection';
import JobsSection from './Home/JobsSection';
import WorldNews from './Home/WorldNews';
import IslamicNews from './Home/IslamicNews';
import LifestyleSection from './Home/LifestyleSection';
import OpinionAndAdda from './Home/OpinionAndAdda';
import TrendingTags from './Home/TrendingTags';

// 🎯 অবজেক্ট ডিস্ট্রাকচারিং করে { onCategoryClick } রিসিভ করা হলো
export default function Home({ onCategoryClick }) {
    const safeAllNews = Array.isArray(allNews) ? allNews : [];

    // 🛠️ তোমার রিকোয়েস্ট অনুযায়ী এটি ইংরেজিতেই 'Hatiya' রাখা হলো
    const HATIYA_CATEGORY = 'Hatiya';

    const getCategoryNews = (category, extraFilter = () => true) => (
        safeAllNews.filter(news => news.category === category && extraFilter(news))
    );

    // ডুপ্লিকেট আইডি রিমুভ করার হেল্পার ফাংশন
    const removeDuplicateIds = (items, excludedItems = []) => {
        const excludedIds = new Set(excludedItems.filter(Boolean).map(item => item.id));
        return items.filter(item => !excludedIds.has(item.id));
    };

    // ১. হিরো সেকশনের ডাটা ফিল্টারিং (বড় নিউজ ও সাইডবার)
    const latestNewsList = getCategoryNews('সর্বশেষ');
    const bigFeaturedNews = [...latestNewsList].reverse().find(news => news.isFeatured === true) || [...latestNewsList].reverse()[0] || null;
    const latestSidebar = removeDuplicateIds(latestNewsList, [bigFeaturedNews]).slice(0, 6);

    // ২. Hatiya উপজেলার ডাটা ফিল্টারিং (নতুন নিউজ সবার আগে আসবে)
    const hatiyaNewsList = getCategoryNews(HATIYA_CATEGORY);
    const hatiyaLead = [...hatiyaNewsList].reverse()[0] || null;
    const hatiyaRelated = removeDuplicateIds(hatiyaNewsList, [hatiyaLead]);

    // ৩. রাজনীতি সেকশনের ডাটা ফিল্টারিং (নতুন নিউজ সবার আগে Lead হবে)
    const politicsNewsList = getCategoryNews('রাজনীতি');
    const politicsLead = [...politicsNewsList].reverse()[0] || null;
    const politicsRelated = removeDuplicateIds(politicsNewsList, [politicsLead]).slice(0, 3);

    // ৪. বিশ্ব সেকশনের ডাটা ফিল্টারিং
    const worldNewsList = getCategoryNews('বিশ্ব');
    const worldLeadNews = [...worldNewsList].reverse().find(news => news.worldType === "lead") || [...worldNewsList].reverse()[0] || null;
    const worldMiddleList = worldNewsList.filter(news => news.worldType === "middleCard" && news.id !== worldLeadNews?.id).slice(0, 2);
    const worldBulletList = worldNewsList.filter(news => news.worldType === "bullet" && news.id !== worldLeadNews?.id && !worldMiddleList.some(m => m.id === news.id)).slice(0, 2);

    // ৫. শর্টস সেকশনের ডাটা ফিল্টারিং
    const filteredShorts = getCategoryNews('শর্টস');

    // ৬. সর্বাধিক পঠিত এবং ফ্যাক্টচেক ডাটা ফিল্টারিং
    const filteredMostRead = getCategoryNews('সর্বাধিক পঠিত').slice(0, 6);
    const factCheckList = getCategoryNews('ফ্যাক্টচেক');
    const bigFactCheck = [...factCheckList].reverse().find(news => news.isMainFact === true) || [...factCheckList].reverse()[0] || null;
    const sideFactCheckList = removeDuplicateIds(factCheckList, [bigFactCheck]).slice(0, 3);

    // ७. ভিডিও সেকশনের ডাটা ফিল্টারিং
    const videoNewsList = getCategoryNews('ভিডিও');
    const bigVideo = [...videoNewsList].reverse().find(news => news.videoType === "featured") || [...videoNewsList].reverse()[0] || null;
    const rightAnalysisVideo = videoNewsList.find(news => news.videoType === "analysis") || null;
    const middleVideosList = videoNewsList.filter(news => news.videoType === "list" && news.id !== bigVideo?.id && news.id !== rightAnalysisVideo?.id).slice(0, 3);

    // ৮. খেলাধুলা সেকশনের ডাটা ফিল্টারিং
    const sportsNewsList = getCategoryNews('খেলাধুলা');
    const sportsLeadNews = [...sportsNewsList].reverse().find(news => news.sportsType === "lead") || [...sportsNewsList].reverse()[0] || null;
    const sportsFeatureCard = sportsNewsList.find(news => news.sportsType === "feature") || null;
    const sportsSubGrid = sportsNewsList.filter(news => news.sportsType === "subGrid" && news.id !== sportsLeadNews?.id && news.id !== sportsFeatureCard?.id).slice(0, 2);
    const sportsSidebarList = sportsNewsList.filter(news => news.sportsType === "sidebar" && news.id !== sportsLeadNews?.id && news.id !== sportsFeatureCard?.id && !sportsSubGrid.some(s => s.id === news.id)).slice(0, 4);

    // ৯. ওয়েব স্টোরি সেকশনের ডাটা ফিল্টারিং
    const filteredWebStories = getCategoryNews('ওয়েব স্টোরি');

    // ১০. ""`ছাপা সংস্করণ`"" সেকশনের ডাটা ফিল্টারিং
    const filteredPrintEdition = getCategoryNews('ছাপা সংস্করণ').slice(0, 4);

    // ১১. বাংলাদেশে সেকশনের ডাটা ফিল্টারিং
    const BangladeshNewsList = getCategoryNews('বাংলাদেশ');
    const BangladeshLead = [...BangladeshNewsList].reverse().find(news => news.isBangladeshLead === true) || [...BangladeshNewsList].reverse()[0] || null;
    const BangladeshSideList = removeDuplicateIds(BangladeshNewsList, [BangladeshLead]).slice(0, 2);

    // ১২. অর্থনীতি সেকশনের ডাটা ফিল্টারিং
    const economyNewsList = getCategoryNews('অর্থনীতি');
    const economyLead = [...economyNewsList].reverse().find(news => news.economyType === "lead") || [...economyNewsList].reverse()[0] || null;
    const economyMiddleList = economyNewsList.filter(news => news.economyType === "middleCard" && news.id !== economyLead?.id).slice(0, 2);
    const economyTextList = economyNewsList.filter(news => news.economyType === "textCard" && news.id !== economyLead?.id && !economyMiddleList.some(m => m.id === news.id)).slice(0, 2);

    // ১৩. বিনোদন সেকশনের ডাটা ফিল্টারিং
    const entertainmentNewsList = getCategoryNews('বিনোদন');
    const entLeadNews = [...entertainmentNewsList].reverse().find(news => news.entType === "lead") || [...entertainmentNewsList].reverse()[0] || null;
    const entFeatureCard = entertainmentNewsList.find(news => news.entType === "feature") || null;
    const entSubCards = entertainmentNewsList.filter(news => news.entType === "subCard" && news.id !== entLeadNews?.id && news.id !== entFeatureCard?.id).slice(0, 2);
    const entListNews = entertainmentNewsList.filter(news => news.entType === "list" && news.id !== entLeadNews?.id && news.id !== entFeatureCard?.id && !entSubCards.some(s => s.id === news.id)).slice(0, 4);

    // ১৪. চাকরি সেকশনের ডাটা ফিল্টারিং
    const jobNewsList = getCategoryNews('চাকরি');
    const jobLeadNews = [...jobNewsList].reverse().find(news => news.jobType === "lead") || [...jobNewsList].reverse()[0] || null;
    const jobGuideCard = jobNewsList.find(news => news.jobType === "guide") || null;
    const jobCircularList = jobNewsList.filter(news => news.jobType === "circular" && news.id !== jobLeadNews?.id && news.id !== jobGuideCard?.id).slice(0, 3);

    // ১৫. ইসলাম সেকশনের ডাটা ফিল্টারিং
    const islamNewsList = getCategoryNews('ইসলাম');
    const islamCardList = islamNewsList.filter(news => news.islamicType === "card").slice(0, 3);
    const islamTextList = islamNewsList.filter(news => news.islamicType === "text" && !islamCardList.some(c => c.id === news.id)).slice(0, 2);

    // ১৬. জীবনধারা সেকশনের ডাটা ফিল্টারিং
    const lifestyleNewsList = getCategoryNews('জীবনধারা');
    const lifestyleMainList = lifestyleNewsList.filter(news => news.lifestyleType === "main").slice(0, 3);
    const lifestyleSidebarList = lifestyleNewsList.filter(news => news.lifestyleType === "sidebar" && !lifestyleMainList.some(m => m.id === news.id)).slice(0, 4);

    // ১৭. মতামত ও আড্ডা সেকশনের ডাটা ফিল্টারিং
    const opinionNewsList = getCategoryNews('মতামত');
    const opinionLeadNews = [...opinionNewsList].reverse().find(news => news.subType === "lead") || [...opinionNewsList].reverse()[0] || null;
    const opinionSmallNewsList = opinionNewsList.filter(news => news.subType === "small" && news.id !== opinionLeadNews?.id).slice(0, 6);
    const addaNewsList = getCategoryNews('আড্ডা').slice(0, 3);

    return (
        <div className="home-page">
            {/* ১. হিরো সেকশন */}
            <LatestNews featuredNews={bigFeaturedNews} sidebarNews={latestSidebar}
                onSeeAllClick={() => onCategoryClick('সর্বশেষ', true)}
            />

            {/* ২. Hatiya সেকশন */}
            <HatiyaSection
                leadNews={hatiyaLead}
                relatedNews={hatiyaRelated}
                onSeeAllClick={() => onCategoryClick(HATIYA_CATEGORY, true)}
            />

            {/* 3. রাজনীতি সেকশন  */}
            <Politics
                leadNews={politicsLead}
                relatedNews={politicsRelated}
                onSeeAllClick={() => onCategoryClick('রাজনীতি', true)}
            />

            {/* 4. বিশ্ব সেকশন */}
            <WorldNews
                leadWorld={worldLeadNews}
                middleWorld={worldMiddleList}
                bulletWorld={worldBulletList}
                onSeeAllClick={() => onCategoryClick('বিশ্ব', true)}
            />

            {/* 5. ট্রেন্ডিং বার সেকশন */}
            <TrendingBar topics={trendingTopicsData} />

            {/* 6. শর্টস সেকশন */}
            <Shorts shortsData={filteredShorts} />

            {/* 7. সর্বাধিক পঠিত ও ফ্যাক্টচেক সেকশন */}
            <MostRead
                mostReadData={filteredMostRead}
                mainFactCheck={bigFactCheck}
                factCheckList={sideFactCheckList}
                onSeeAllClick={() => onCategoryClick('সর্বাধিক পঠিত', true)}
            />

            {/* 8. ভিডিও সেকশন */}
            <VideoSection
                featuredVideo={bigVideo}
                listVideos={middleVideosList}
                analysisVideo={rightAnalysisVideo}
                onSeeAllClick={() => onCategoryClick('ভিডিও', true)}
            />

            {/* 9. খেলাধুলা সেকশন */}
            <SportsSection
                leadSports={sportsLeadNews}
                subGridSports={sportsSubGrid}
                sidebarSports={sportsSidebarList}
                featureSports={sportsFeatureCard}
                onSeeAllClick={() => onCategoryClick('খেলাধুলা', true)}
            />

            {/* 10. ওয়েব স্টোরি সেকশন */}
            <WebStories
                storiesData={filteredWebStories}
                onSeeAllClick={() => onCategoryClick('ওয়েব স্টোরি', true)}
            />

            {/* 11. ছাপা সংস্করণ সেকশন */}
            <PrintEdition
                printStories={filteredPrintEdition}
                onSeeAllClick={() => onCategoryClick('ছাপা সংস্করণ', true)}
            />

            {/* 12. বাংলাদেশে সেকশন */}
            <Bangladesh
                leadNews={BangladeshLead}
                sideNews={BangladeshSideList}
                onSeeAllClick={() => onCategoryClick('বাংলাদেশ', true)}
            />

            {/* 13. অর্থনীতি সেকশন */}
            <EconomySection
                leadEconomy={economyLead}
                middleEconomy={economyMiddleList}
                textEconomy={economyTextList}
                onSeeAllClick={() => onCategoryClick('অর্থনীতি', true)}
            />

            {/* 14. বিনোদন সেকশন */}
            <EntertainmentSection
                leadEnt={entLeadNews}
                subCardsEnt={entSubCards}
                listEnt={entListNews}
                featureEnt={entFeatureCard}
                onSeeAllClick={() => onCategoryClick('বিনোদন', true)}
            />

            {/* 15. চাকরি সেকশন */}
            <JobsSection
                leadJob={jobLeadNews}
                circularJobs={jobCircularList}
                guideJob={jobGuideCard}
                onSeeAllClick={() => onCategoryClick('চাকরি', true)}
            />

            {/* 16. ইসলাম সেকশন */}
            <IslamicNews
                cardsIslam={islamCardList}
                textIslam={islamTextList}
                onSeeAllClick={() => onCategoryClick('ইসলাম', true)}
            />

            {/* 17. জীবনধারা সেকশন */}
            <LifestyleSection
                mainLifestyle={lifestyleMainList}
                sidebarLifestyle={lifestyleSidebarList}
                onSeeAllClick={() => onCategoryClick('জীবনধারা', true)}
            />

            {/* 18. মতামত ও আড্ডা সেকশন */}
            <OpinionAndAdda
                opinionLead={opinionLeadNews}
                opinionSmallList={opinionSmallNewsList}
                addaList={addaNewsList}
                onSeeAllClick={() => onCategoryClick('মতামত', true)}
            />

            {/* 19. ট্রেন্ডিং ট্যাগ সেকশন */}
            <TrendingTags tags={trendingTags} />
        </div>
    );
}