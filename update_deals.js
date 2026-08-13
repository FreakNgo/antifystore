const fs = require('fs');
const path = require('path');

const AFFILIATE_TAG = 'antify-21';

// Curry verified standard ASIN structures with proper trailing slashes
const freshDeals = [
    // === ₹200 DEALS CATEGORY ===
    { id: 1, category: 'rupees200', title: 'Portronics Fast Charging Cable', desc: 'Heavy-duty durable data sync charging cord for smartphones.', oldPrice: '₹399', price: '₹99', discount: '75% OFF', link: `https://www.amazon.in/dp/B0821213P7/?tag=${AFFILIATE_TAG}` },
    { id: 2, category: 'rupees200', title: 'Gizga Essentials Microfiber Cloths', desc: 'Ultra-soft absorbent cleaning cloths for laptops, tabs and screens.', oldPrice: '₹499', price: '₹149', discount: '70% OFF', link: `https://www.amazon.in/dp/B015W9BL60/?tag=${AFFILIATE_TAG}` },
    { id: 3, category: 'rupees200', title: 'ELV Desktop Mobile Stand', desc: 'Premium multi-angle adjustable desktop holder for all smartphones.', oldPrice: '₹499', price: '₹149', discount: '70% OFF', link: `https://www.amazon.in/dp/B07R451W27/?tag=${AFFILIATE_TAG}` },
    { id: 4, category: 'rupees200', title: 'Syska 9W LED Base Bulb', desc: 'Energy efficient bright home lighting solution bulb base.', oldPrice: '₹250', price: '₹99', discount: '60% OFF', link: `https://www.amazon.in/dp/B00V49B8M8/?tag=${AFFILIATE_TAG}` },

    // === ELECTRONICS CATEGORY ===
    { id: 5, category: 'electronics', title: 'boAt Bassheads 100 Wired Earphones', desc: 'In-ear wired earphones with super extra bass and integrated mic.', oldPrice: '₹999', price: '₹399', discount: '60% OFF', link: `https://www.amazon.in/dp/B071Z97T21/?tag=${AFFILIATE_TAG}` },
    { id: 6, category: 'electronics', title: 'SanDisk Cruzer Blade 32GB USB', desc: 'Ultra-compact portable flash drive for effortless data backups.', oldPrice: '₹650', price: '₹299', discount: '54% OFF', link: `https://www.amazon.in/dp/B007SPF16O/?tag=${AFFILIATE_TAG}` },
    { id: 7, category: 'electronics', title: 'Logitech M170 Wireless Mouse', desc: 'Reliable 2.4GHz wireless tracking precise compact mouse setup.', oldPrice: '₹895', price: '₹599', discount: '33% OFF', link: `https://www.amazon.in/dp/B01B73D5Q4/?tag=${AFFILIATE_TAG}` },

    // === CLOTHING CATEGORY ===
    { id: 8, category: 'clothing', title: 'Alan Jones Cotton Sweatshirt', desc: 'Premium comfortable breathable long sleeve casual winter wear.', oldPrice: '₹1,999', price: '₹599', discount: '70% OFF', link: `https://www.amazon.in/dp/B07KWSFKM4/?tag=${AFFILIATE_TAG}` },
    { id: 9, category: 'clothing', title: 'Symbol Men Cotton Polo Tee', desc: 'Classic polo collar solid casual regular fit t-shirt clothing.', oldPrice: '₹1,199', price: '₹399', discount: '66% OFF', link: `https://www.amazon.in/dp/B08682F8MS/?tag=${AFFILIATE_TAG}` },

    // === KITCHEN CATEGORY ===
    { id: 10, category: 'kitchen', title: 'Pigeon Polypropylene Mini Chopper', desc: 'Handy manual dynamic pull-string fruit and vegetable chopper.', oldPrice: '₹495', price: '₹249', discount: '50% OFF', link: `https://www.amazon.in/dp/B01LWYDEQ7/?tag=${AFFILIATE_TAG}` },
    { id: 11, category: 'kitchen', title: 'Cello H2O Stainless Steel Bottle', desc: 'Durable premium mirror finish cold storage single wall flask.', oldPrice: '₹999', price: '₹399', discount: '60% OFF', link: `https://www.amazon.in/dp/B01M3Y89B2/?tag=${AFFILIATE_TAG}` }
];

function updateDeals() {
    console.log("Injecting core matrix catalog...");
    const indexPath = path.join(__dirname, 'index.html');
    let htmlContent = fs.readFileSync(indexPath, 'utf8');

    const dataString = JSON.stringify(freshDeals, null, 1);
    const regex = /(const dailyDeals = )\[[\s\S]*?\];/;
    
    htmlContent = htmlContent.replace(regex, `$1${dataString};`);
    fs.writeFileSync(indexPath, htmlContent, 'utf8');
    
    console.log("Success: Clean HTML layout write operations completed.");
}

updateDeals();
