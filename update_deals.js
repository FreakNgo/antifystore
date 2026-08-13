const fs = require('fs');
const path = require('path');

const AFFILIATE_TAG = 'antify-21';

// 100% Stable, Error-Proof Amazon India Direct Product Route Gateways
const freshDeals = [
    // === ₹200 DEALS CATEGORY ===
    { id: 1, category: 'rupees200', title: 'Premium Mobile Stands', desc: 'Multi-angle adjustable desktop holders compatible with all smartphones.', oldPrice: '₹499', price: '₹149', discount: '70% OFF', link: `https://www.amazon.in/s?k=mobile+stand&rh=p_36%3A-20000&tag=${AFFILIATE_TAG}` },
    { id: 2, category: 'rupees200', title: 'Gizga Microfiber Cloths', desc: 'Ultra-soft absorbent cleaning cloths for laptops, tabs, and screens.', oldPrice: '₹499', price: '₹149', discount: '70% OFF', link: `https://www.amazon.in/s?k=microfiber+cloth&rh=p_36%3A-20000&tag=${AFFILIATE_TAG}` },
    { id: 3, category: 'rupees200', title: 'Fast Charging Type-C Cables', desc: 'Heavy-duty durable high-speed data sync charging cords.', oldPrice: '₹399', price: '₹99', discount: '75% OFF', link: `https://www.amazon.in/s?k=type+c+cable&rh=p_36%3A-20000&tag=${AFFILIATE_TAG}` },

    // === ELECTRONICS CATEGORY ===
    { id: 4, category: 'electronics', title: 'boAt Wired Earphones', desc: 'In-ear wired earphones with super extra bass and integrated mic.', oldPrice: '₹999', price: '₹399', discount: '60% OFF', link: `https://www.amazon.in/s?k=boat+wired+earphones&tag=${AFFILIATE_TAG}` },
    { id: 5, category: 'electronics', title: 'SanDisk 32GB USB Flash Drives', desc: 'Ultra-compact portable flash drive for effortless data backups.', oldPrice: '₹650', price: '₹299', discount: '54% OFF', link: `https://www.amazon.in/s?k=sandisk+32gb+pen+drive&tag=${AFFILIATE_TAG}` },
    { id: 6, category: 'electronics', title: 'Logitech Wireless Mice', desc: 'Reliable 2.4GHz wireless tracking precise compact mouse setup.', oldPrice: '₹895', price: '₹599', discount: '33% OFF', link: `https://www.amazon.in/s?k=logitech+wireless+mouse&tag=${AFFILIATE_TAG}` },

    // === KITCHEN & UTENSILS ===
    { id: 7, category: 'kitchen', title: 'Pigeon Mini Vegetable Choppers', desc: 'Handy manual dynamic pull-string fruit and vegetable chopper.', oldPrice: '₹495', price: '₹249', discount: '50% OFF', link: `https://www.amazon.in/s?k=pigeon+mini+chopper&tag=${AFFILIATE_TAG}` },
    { id: 8, category: 'utensils', title: 'Prestige Non-Stick Tawas', desc: 'Omni non-stick induction base premium frying durable griddle.', oldPrice: '₹1,200', price: '₹699', discount: '41% OFF', link: `https://www.amazon.in/s?k=prestige+non+stick+tawa&tag=${AFFILIATE_TAG}` }
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
