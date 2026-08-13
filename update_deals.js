const fs = require('fs');
const path = require('path');

const AFFILIATE_TAG = 'antify-21';

// Indestructible matrix catalog using smart targeted keyword search queries
const freshDeals = [
    // === ₹200 DEALS CATEGORY ===
    { id: 1, category: 'rupees200', title: 'Stainless Steel Mobile Stand', desc: 'Multi-angle adjustable desktop holder compatible with all smartphones.', oldPrice: '₹499', price: '₹149', discount: '70% OFF', link: `https://www.amazon.in/s?k=mobile+stand+under+200&tag=${AFFILIATE_TAG}` },
    { id: 2, category: 'rupees200', title: 'Braided Type-C Fast Charging Cable', desc: '1.5-meter heavy-duty nylon braided data sync cord.', oldPrice: '₹399', price: '₹99', discount: '75% OFF', link: `https://www.amazon.in/s?k=type+c+cable+under+200&tag=${AFFILIATE_TAG}` },
    { id: 3, category: 'rupees200', title: 'Microfiber Cleaning Cloths Pack', desc: 'Ultra-soft absorbent towels perfect for cars, screens, and lenses.', oldPrice: '₹599', price: '₹189', discount: '68% OFF', link: `https://www.amazon.in/s?k=microfiber+cloth+under+200&tag=${AFFILIATE_TAG}` },
    { id: 4, category: 'rupees200', title: 'Pocket LED Keychain Flashlight', desc: 'Super bright compact tactical torch with carabiner clip.', oldPrice: '₹349', price: '₹129', discount: '63% OFF', link: `https://www.amazon.in/s?k=keychain+flashlight+under+200&tag=${AFFILIATE_TAG}` },

    // === ELECTRONICS CATEGORY ===
    { id: 5, category: 'electronics', title: 'TWS Wireless Earbuds Pro', desc: 'Bluetooth 5.3 deep bass pods with extensive playback layout.', oldPrice: '₹2,999', price: '₹799', discount: '73% OFF', link: `https://www.amazon.in/s?k=wireless+earbuds+boat+noise&tag=${AFFILIATE_TAG}` },
    { id: 6, category: 'electronics', title: '10000mAh Compact Power Bank', desc: 'Dual port fast charging portable power station modules.', oldPrice: '₹1,999', price: '₹649', discount: '67% OFF', link: `https://www.amazon.in/s?k=10000mah+power+bank&tag=${AFFILIATE_TAG}` },
    { id: 7, category: 'electronics', title: 'Ergonomic Wireless Mouse', desc: 'Precision tracking computer mouse with DPI adjustments.', oldPrice: '₹999', price: '₹299', discount: '70% OFF', link: `https://www.amazon.in/s?k=wireless+mouse+logitech+dell&tag=${AFFILIATE_TAG}` },

    // === CLOTHING CATEGORY ===
    { id: 8, category: 'clothing', title: 'Classic Cotton Crewneck Tee', desc: 'Premium breathable combed cotton basic short sleeve shirt.', oldPrice: '₹799', price: '₹279', discount: '65% OFF', link: `https://www.amazon.in/s?k=men+cotton+tshirt+regular+fit&tag=${AFFILIATE_TAG}` },
    { id: 9, category: 'clothing', title: 'Athletic Workout Shorts', desc: 'Quick-dry training shorts featuring functional zip pockets.', oldPrice: '₹999', price: '₹349', discount: '65% OFF', link: `https://www.amazon.in/s?k=men+sports+shorts+with+pockets&tag=${AFFILIATE_TAG}` },

    // === KITCHEN CATEGORY ===
    { id: 10, category: 'kitchen', title: 'Electronic Kitchen Scale', desc: 'High precision digital food weight scale with tare layout.', oldPrice: '₹999', price: '₹329', discount: '67% OFF', link: `https://www.amazon.in/s?k=digital+kitchen+weight+scale&tag=${AFFILIATE_TAG}` },
    { id: 11, category: 'kitchen', title: 'Handheld Milk Frother', desc: 'Battery operated electric foam whisk maker for coffee formatting.', oldPrice: '₹499', price: '₹199', discount: '60% OFF', link: `https://www.amazon.in/s?k=electric+milk+frother+handheld&tag=${AFFILIATE_TAG}` },

    // === UTENSILS CATEGORY ===
    { id: 12, category: 'utensils', title: 'Non-Stick Induction Frying Pan', desc: 'Heavy gauge aluminium skillet base with double layer coating.', oldPrice: '₹1,499', price: '₹499', discount: '67% OFF', link: `https://www.amazon.in/s?k=non+stick+frying+pan+induction&tag=${AFFILIATE_TAG}` },
    { id: 13, category: 'utensils', title: 'Silicone Spatula Cook Set', desc: 'Heat-resistant seamless non-scratch flexible kitchen scrapers.', oldPrice: '₹799', price: '₹299', discount: '63% OFF', link: `https://www.amazon.in/s?k=silicone+spatula+set+for+kitchen&tag=${AFFILIATE_TAG}` }
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
