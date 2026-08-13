const fs = require('fs');
const path = require('path');

const AFFILIATE_TAG = 'antify-21';

// 100% Direct individual product pages using currently active Amazon India ASINs
const freshDeals = [
    // === ELECTRONICS CATEGORY ===
    { id: 1, category: 'electronics', title: 'boAt Bassheads 100 Wired Earphones', desc: 'In-ear wired earphones with super extra bass and integrated mic.', oldPrice: '₹999', price: '₹399', discount: '60% OFF', link: `https://www.amazon.in/dp/B071Z97T21?tag=${AFFILIATE_TAG}` },
    { id: 2, category: 'electronics', title: 'SanDisk Cruzer Blade 32GB USB Drive', desc: 'Ultra-compact portable flash drive for effortless data backups.', oldPrice: '₹650', price: '₹299', discount: '54% OFF', link: `https://www.amazon.in/dp/B007SPF16O?tag=${AFFILIATE_TAG}` },
    { id: 3, category: 'electronics', title: 'Logitech M170 Wireless Mouse', desc: 'Reliable 2.4GHz wireless tracking precise compact mouse setup.', oldPrice: '₹895', price: '₹599', discount: '33% OFF', link: `https://www.amazon.in/dp/B01B73D5Q4?tag=${AFFILIATE_TAG}` },

    // === KITCHEN & UTENSILS ===
    { id: 4, category: 'kitchen', title: 'Pigeon Polypropylene Mini Chopper', desc: 'Handy manual dynamic pull-string fruit and vegetable chopper.', oldPrice: '₹495', price: '₹249', discount: '50% OFF', link: `https://www.amazon.in/dp/B01LWYDEQ7?tag=${AFFILIATE_TAG}` },
    { id: 5, category: 'utensils', title: 'Prestige Aluminium Non-Stick Tawa', desc: 'Omni non-stick induction base premium frying durable griddle.', oldPrice: '₹1,200', price: '₹699', discount: '41% OFF', link: `https://www.amazon.in/dp/B00EICJ954?tag=${AFFILIATE_TAG}` }
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
