// ইংরেজি সংখ্যাকে বাংলা সংখ্যায় রূপান্তর করার হেল্পার ফাংশন
const toBanglaNumber = (num) => {
    const banglaDigits = {
        '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
        '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
    };
    return num.toString().replace(/[0-9]/g, (digit) => banglaDigits[digit]);
};

// মেইন timeAgo ফাংশন 
export const timeAgo = (dateString) => {
    if (!dateString) return "";

    const now = new Date();
    const past = new Date(dateString);
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;

    const elapsed = now - past;

    // যদি সময় ফিউচারের হয় 
    if (elapsed < 0) {
        return "এইমাত্র";
    }

    // ১ মিনিটের কম হলে
    if (elapsed < msPerMinute) {
        return "এইমাত্র";
    }
    // ৬০ মিনিটের কম হলে
    else if (elapsed < msPerHour) {
        const minutes = Math.floor(elapsed / msPerMinute);
        return `${toBanglaNumber(minutes)} মিনিট আগে`;
    }
    // ২৪ ঘণ্টার কম হলে
    else if (elapsed < msPerDay) {
        const hours = Math.floor(elapsed / msPerHour);
        return `${toBanglaNumber(hours)} ঘণ্টা আগে`;
    }
    // ৩০ দিনের কম হলে
    else if (elapsed < msPerMonth) {
        const days = Math.floor(elapsed / msPerDay);
        return `${toBanglaNumber(days)} দিন আগে`;
    }
    // ৩০ দিনের বেশি পুরোনো হলে
    else {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        // বাংলা ফরম্যাটে ডেট রিটার্ন করবে (যেমন: ২০ জুন, ২০২৬)
        return past.toLocaleDateString('bn-BD', options);
    }
};