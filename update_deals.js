const fs = require('fs');
const path = require('path');
const axios = require('axios');

const AFFILIATE_TAG = 'antify-21';

// Stable high-discount fallback items in case API tracking fails
const fallbackDeals = [
    { id: 1, category: 'electronics', title: 'Wireless Noise Cancelling Headphones', desc: 'Premium audio output quality with responsive dynamic baseline features.', oldPrice: '₹7,999', price: '₹3,499', discount: '56% OFF', link: `https://www.amazon.in/dp/B0C9R5A123/?tag=${AFFILIATE_TAG}` },
    { id: 2, category: 'clothing', title: 'Streetwear Oversized Hoodie', desc: 'Heavyweight loopback cotton blend framework knit structure.', oldPrice: '₹2,499', price: '₹999', discount: '60% OFF', link: `https://www.amazon.in/dp/B07X123XYZ/?tag=${AFFILIATE_TAG}` },
    { id: 3, category: 'kitchen', title: 'Digital Air Fryer Pro', desc: 'Touchscreen dynamic thermal cyclic cooking instrument interface.', oldPrice: '₹9,999', price: '₹4,899', discount: '51% OFF', link: `https://www.amazon.in/dp/B08Y987ABC/?tag=${AFFILIATE_TAG}` },
    { id: 4, category: 'utensils', title: 'Matte Black Cutlery Set', desc: 'Premium non-corrosive structural high-grade dining components.', oldPrice: '₹1,899', price: '₹799', discount: '58% OFF', link: `https://www.amazon.in/dp/B09Z456DEF/?tag=${AFFILIATE_TAG}` }
];

async function updateDeals() {
    console.log("Fetching live high-discount tracker matrices...");
    let freshDeals = [];

    try {
        const response = await axios.get('https://api.bluelynx.me/deals/amazon-in-top');
        
        if (response.data && response.data.length > 0) {
            freshDeals = response.data.slice(0, 6).map((deal, idx) => {
                const cleanAsin = deal.asin || 'B0CVRAW6R'; 
                return {
                    id: idx + 1,
                    category: deal.category || 'electronics', 
                    title: deal.title,
                    desc: deal.description || 'Top tier savings flash deal active on Amazon India marketplace structural frameworks.',
                    oldPrice: `₹${deal.originalPrice}`,
                    price: `₹${deal.currentPrice}`,
                    discount: `${deal.discountPercentage}% OFF`,
                    link: `https://www.amazon.in/dp/${cleanAsin}/?tag=${AFFILIATE_TAG}`
                };
            });
        }
    } catch (error) {
        console.log("External feed offline. Initializing curated database pipeline elements...");
        freshDeals = fallbackDeals;
    }

    const indexPath = path.join(__dirname, 'index.html');
    let htmlContent = fs.readFileSync(indexPath, 'utf8');

    const dataString = JSON.stringify(freshDeals, null, 1);
    const regex = /(const dailyDeals = )\[[\s\S]*?\];/;
    
    htmlContent = htmlContent.replace(regex, `$1${dataString};`);
    fs.writeFileSync(indexPath, htmlContent, 'utf8');
    
    console.log("Success: Clean HTML layout write operations completed.");
}

updateDeals();