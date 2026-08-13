const fs = require('fs');
const path = require('path');

const AFFILIATE_TAG = 'antify-21';

// Large matrix of diverse budget deals mapped precisely to your site's target filters
const freshDeals = [
    // === ₹200 DEALS CATEGORY (10 Items) ===
    { id: 1, category: 'rupees200', title: 'Stainless Steel Mobile Stand', desc: 'Multi-angle adjustable desktop holder compatible with all smartphones.', oldPrice: '₹499', price: '₹149', discount: '70% OFF', link: `https://www.amazon.in/dp/B08L5XM456/?tag=${AFFILIATE_TAG}` },
    { id: 2, category: 'rupees200', title: 'Braided Type-C Fast Charging Cable', desc: '1.5-meter heavy-duty nylon braided data sync cord.', oldPrice: '₹399', price: '₹99', discount: '75% OFF', link: `https://www.amazon.in/dp/B09T2V1234/?tag=${AFFILIATE_TAG}` },
    { id: 3, category: 'rupees200', title: 'Microfiber Cleaning Cloths (4-Pack)', desc: 'Ultra-soft absorbent towels perfect for cars, screens, and lenses.', oldPrice: '₹599', price: '₹189', discount: '68% OFF', link: `https://www.amazon.in/dp/B07R1W8910/?tag=${AFFILIATE_TAG}` },
    { id: 4, category: 'rupees200', title: 'Silicone Cord Protectors (6-Piece)', desc: 'Spiral cable savers to protect charging wires from fraying.', oldPrice: '₹299', price: '₹79', discount: '73% OFF', link: `https://www.amazon.in/dp/B0B3C4D567/?tag=${AFFILIATE_TAG}` },
    { id: 5, category: 'rupees200', title: 'Pocket LED Keychain Flashlight', desc: 'Super bright compact tactical torch with carabiner clip.', oldPrice: '₹349', price: '₹129', discount: '63% OFF', link: `https://www.amazon.in/dp/B09W2K7890/?tag=${AFFILIATE_TAG}` },
    { id: 6, category: 'rupees200', title: 'Anti-Slip Dashboard Sticky Mat', desc: 'Heat-resistant premium grip pad for keys, coins, and phones.', oldPrice: '₹249', price: '₹89', discount: '64% OFF', link: `https://www.amazon.in/dp/B07V3X4567/?tag=${AFFILIATE_TAG}` },
    { id: 7, category: 'rupees200', title: 'Waterproof Passport & Card Holder', desc: 'Multi-slot travel security organizer sleeve pouch.', oldPrice: '₹499', price: '₹169', discount: '66% OFF', link: `https://www.amazon.in/dp/B08M6N8901/?tag=${AFFILIATE_TAG}` },
    { id: 8, category: 'rupees200', title: 'Universal Laptop Webcam Covers (3-Pack)', desc: 'Ultra-thin slide protection covers for privacy security.', oldPrice: '₹199', price: '₹69', discount: '65% OFF', link: `https://www.amazon.in/dp/B09C4B1234/?tag=${AFFILIATE_TAG}` },
    { id: 9, category: 'rupees200', title: 'Desk Cable Organizer Clips', desc: 'Self-adhesive wire management drop system for workspace.', oldPrice: '₹399', price: '₹139', discount: '65% OFF', link: `https://www.amazon.in/dp/B08X5Z5678/?tag=${AFFILIATE_TAG}` },
    { id: 10, category: 'rupees200', title: 'Mini Dual SIM Card Eject Pins Container', desc: 'Metal collection kit with storage protective keychain casing.', oldPrice: '₹199', price: '₹59', discount: '70% OFF', link: `https://www.amazon.in/dp/B07Y7M8901/?tag=${AFFILIATE_TAG}` },

    // === ELECTRONICS CATEGORY (10 Items) ===
    { id: 11, category: 'electronics', title: 'TWS Wireless Earbuds Pro', desc: 'Bluetooth 5.3 deep bass pods with 30-hour playback layout.', oldPrice: '₹2,999', price: '₹799', discount: '73% OFF', link: `https://www.amazon.in/dp/B0C2R4X789/?tag=${AFFILIATE_TAG}` },
    { id: 12, category: 'electronics', title: '10000mAh Compact Power Bank', desc: 'Dual port 12W fast charging portable power station.', oldPrice: '₹1,999', price: '₹649', discount: '67% OFF', link: `https://www.amazon.in/dp/B09V3C9876/?tag=${AFFILIATE_TAG}` },
    { id: 13, category: 'electronics', title: 'Ergonomic Wireless Mouse', desc: '2.4GHz optical precision tracking computer mouse with DPI adjustments.', oldPrice: '₹999', price: '₹299', discount: '70% OFF', link: `https://www.amazon.in/dp/B08B2N5432/?tag=${AFFILIATE_TAG}` },
    { id: 14, category: 'electronics', title: 'Smart Fitness Band Tracker', desc: 'OLED touch module with heart rate tracker and activity analytics.', oldPrice: '₹3,499', price: '₹999', discount: '71% OFF', link: `https://www.amazon.in/dp/B07N4M2109/?tag=${AFFILIATE_TAG}` },
    { id: 15, category: 'electronics', title: 'Extended RGB Gaming Mouse Pad', desc: 'Extra large non-slip rubber base desktop protective mat.', oldPrice: '₹1,499', price: '₹449', discount: '70% OFF', link: `https://www.amazon.in/dp/B09M5K8765/?tag=${AFFILIATE_TAG}` },
    { id: 16, category: 'electronics', title: 'Multi-Plug Surge Protector Extension', desc: '4-way matrix sockets with individual status indicators.', oldPrice: '₹999', price: '₹399', discount: '60% OFF', link: `https://www.amazon.in/dp/B08Z4P3210/?tag=${AFFILIATE_TAG}` },
    { id: 17, category: 'electronics', title: '5W Portable Bluetooth Speaker', desc: 'IPX5 waterproof mini sound box with rich bass profiles.', oldPrice: '₹1,299', price: '₹499', discount: '62% OFF', link: `https://www.amazon.in/dp/B07K6T5432/?tag=${AFFILIATE_TAG}` },
    { id: 18, category: 'electronics', title: 'Flexible Ring Light Setup', desc: 'Desktop tripod mount kit for video streaming optimization.', oldPrice: '₹1,999', price: '₹549', discount: '73% OFF', link: `https://www.amazon.in/dp/B09X7W2345/?tag=${AFFILIATE_TAG}` },
    { id: 19, category: 'electronics', title: '4K High-Speed HDMI Cable', desc: 'Gold-plated robust connector cable for monitors and TVs.', oldPrice: '₹699', price: '₹229', discount: '67% OFF', link: `https://www.amazon.in/dp/B08C4N8901/?tag=${AFFILIATE_TAG}` },
    { id: 20, category: 'electronics', title: 'Flexible Metal Desktop Phone Arm', desc: 'Long gooseneck clamp holder module for beds and tables.', oldPrice: '₹999', price: '₹329', discount: '67% OFF', link: `https://www.amazon.in/dp/B07P7L1234/?tag=${AFFILIATE_TAG}` },

    // === CLOTHING CATEGORY (10 Items) ===
    { id: 21, category: 'clothing', title: 'Classic Cotton Crewneck Tee', desc: 'Premium breathable combed cotton basic short sleeve shirt.', oldPrice: '₹799', price: '₹279', discount: '65% OFF', link: `https://www.amazon.in/dp/B08X7V1234/?tag=${AFFILIATE_TAG}` },
    { id: 22, category: 'clothing', title: 'Athletic Workout Shorts', desc: 'Quick-dry training shorts featuring functional zip pockets.', oldPrice: '₹999', price: '₹349', discount: '65% OFF', link: `https://www.amazon.in/dp/B09Y2M5678/?tag=${AFFILIATE_TAG}` },
    { id: 23, category: 'clothing', title: 'Loafer Socks (5-Pair Pack)', desc: 'Anti-slip silicone heel grip low cut invisible combed cotton.', oldPrice: '₹699', price: '₹249', discount: '64% OFF', link: `https://www.amazon.in/dp/B07W4N8901/?tag=${AFFILIATE_TAG}` },
    { id: 24, category: 'clothing', title: 'Unisex Polarized Sunglasses', desc: 'UV400 protective lightweight retro frame casual wear accessory.', oldPrice: '₹1,499', price: '₹399', discount: '73% OFF', link: `https://www.amazon.in/dp/B08V3C2345/?tag=${AFFILIATE_TAG}` },
    { id: 25, category: 'clothing', title: 'Adjustable Baseball Cap', desc: 'Classic vintage washed twill style sun protection hat.', oldPrice: '₹599', price: '₹219', discount: '63% OFF', link: `https://www.amazon.in/dp/B09C6N6789/?tag=${AFFILIATE_TAG}` },
    { id: 26, category: 'clothing', title: 'Canvas Casual Waist Belt', desc: 'Tactical military style flip-top buckle utility adjustment.', oldPrice: '₹499', price: '₹179', discount: '64% OFF', link: `https://www.amazon.in/dp/B07T4M3456/?tag=${AFFILIATE_TAG}` },
    { id: 27, category: 'clothing', title: 'Lightweight Winter Beanie Hat', desc: 'Thermal soft knit slouchy skull cap configuration.', oldPrice: '₹599', price: '₹199', discount: '67% OFF', link: `https://www.amazon.in/dp/B08B6B7890/?tag=${AFFILIATE_TAG}` },
    { id: 28, category: 'clothing', title: 'Slim Fit Joggers Trackpant', desc: 'Elasticated waistband dynamic flexible workout tracks.', oldPrice: '₹1,299', price: '₹449', discount: '65% OFF', link: `https://www.amazon.in/dp/B09X4X1234/?tag=${AFFILIATE_TAG}` },
    { id: 29, category: 'clothing', title: 'Microfiber Gym Towel Set', desc: 'Super fast dry travel workout towel configuration bundles.', oldPrice: '₹699', price: '₹269', discount: '61% OFF', link: `https://www.amazon.in/dp/B07V2K4567/?tag=${AFFILIATE_TAG}` },
    { id: 30, category: 'clothing', title: 'Leather Bifold Card Wallet', desc: 'Ultra slim functional front pocket security block structure.', oldPrice: '₹999', price: '₹299', discount: '70% OFF', link: `https://www.amazon.in/dp/B08N7C8901/?tag=${AFFILIATE_TAG}` },

    // === KITCHEN CATEGORY (10 Items) ===
    { id: 31, category: 'kitchen', title: 'Electronic Kitchen Scale', desc: 'High precision digital food weight scale with tare layout.', oldPrice: '₹999', price: '₹329', discount: '67% OFF', link: `https://www.amazon.in/dp/B07M8X1234/?tag=${AFFILIATE_TAG}` },
    { id: 32, category: 'kitchen', title: 'Handheld Milk Frother', desc: 'Battery operated electric foam whisk maker for coffee formatting.', oldPrice: '₹499', price: '₹199', discount: '60% OFF', link: `https://www.amazon.in/dp/B09B2C5678/?tag=${AFFILIATE_TAG}` },
    { id: 33, category: 'kitchen', title: 'Manual Vegetable Chopper Cord', desc: 'Powerful pull-string mechanical processing tool container.', oldPrice: '₹699', price: '₹249', discount: '64% OFF', link: `https://www.amazon.in/dp/B08X4V8901/?tag=${AFFILIATE_TAG}` },
    { id: 34, category: 'kitchen', title: 'Silicon Ice Cube Trays Set', desc: 'Flexible food-grade easy release geometric shape models.', oldPrice: '₹499', price: '₹189', discount: '62% OFF', link: `https://www.amazon.in/dp/B07W5X2345/?tag=${AFFILIATE_TAG}` },
    { id: 35, category: 'kitchen', title: 'Insulated Stainless Steel Bottle', desc: 'Double-walled vacuum thermal tracking flask (500ml).', oldPrice: '₹1,199', price: '₹479', discount: '60% OFF', link: `https://www.amazon.in/dp/B09V3M6789/?tag=${AFFILIATE_TAG}` },
    { id: 36, category: 'kitchen', title: 'Spice Rack Organizer Towers', desc: 'Revolving space saving spice storage sorting setups.', oldPrice: '₹899', price: '₹349', discount: '61% OFF', link: `https://www.amazon.in/dp/B08M5V3456/?tag=${AFFILIATE_TAG}` },
    { id: 37, category: 'kitchen', title: 'Oil Dispenser Glass Bottle', desc: 'Leakproof nozzle measuring container scale structures.', oldPrice: '₹599', price: '₹229', discount: '62% OFF', link: `https://www.amazon.in/dp/B07T2K8901/?tag=${AFFILIATE_TAG}` },
    { id: 38, category: 'kitchen', title: 'Egg Egg-Boiler Stand Ring', desc: 'Stainless steel safe placement separation support tools.', oldPrice: '₹399', price: '₹149', discount: '63% OFF', link: `https://www.amazon.in/dp/B09C4B5678/?tag=${AFFILIATE_TAG}` },
    { id: 39, category: 'kitchen', title: 'Reusable Silicon Pouch Bags', desc: 'Eco friendly preservation air airtight compression zipper kits.', oldPrice: '₹699', price: '₹279', discount: '60% OFF', link: `https://www.amazon.in/dp/B08V5N1234/?tag=${AFFILIATE_TAG}` },
    { id: 40, category: 'kitchen', title: 'Sink Drain Filtering Mesh', desc: 'Stainless steel anti blocking structural collection filters.', oldPrice: '₹299', price: '₹99', discount: '67% OFF', link: `https://www.amazon.in/dp/B07Y5X7890/?tag=${AFFILIATE_TAG}` },

    // === UTENSILS CATEGORY (10 Items) ===
    { id: 41, category: 'utensils', title: 'Non-Stick Induction Frying Pan', desc: 'Heavy gauge aluminium skillet base with double layer coating.', oldPrice: '₹1,499', price: '₹499', discount: '67% OFF', link: `https://www.amazon.in/dp/B08X5N1234/?tag=${AFFILIATE_TAG}` },
    { id: 42, category: 'utensils', title: 'Silicone Spatula Cook Set', desc: 'Heat-resistant seamless non-scratch flexible kitchen scrapers.', oldPrice: '₹799', price: '₹299', discount: '63% OFF', link: `https://www.amazon.in/dp/B09B3V5678/?tag=${AFFILIATE_TAG}` },
    { id: 43, category: 'utensils', title: 'Stainless Steel Whisks Set', desc: 'Dual bundle manual beating balloon balloon loop configurations.', oldPrice: '₹499', price: '₹169', discount: '66% OFF', link: `https://www.amazon.in/dp/B07W5X8901/?tag=${AFFILIATE_TAG}` },
    { id: 44, category: 'utensils', title: 'Deep Saucepan with Glass Lid', desc: 'Induction friendly premium mirror finish tea milk vessel.', oldPrice: '₹1,299', price: '₹449', discount: '65% OFF', link: `https://www.amazon.in/dp/B08V4B2345/?tag=${AFFILIATE_TAG}` },
    { id: 45, category: 'utensils', title: 'Wooden Serving Spoons (5-Piece)', desc: 'Natural organic durable non-stick eco cooking ladles.', oldPrice: '₹899', price: '₹329', discount: '63% OFF', link: `https://www.amazon.in/dp/B09C7C6789/?tag=${AFFILIATE_TAG}` },
    { id: 46, category: 'utensils', title: 'Stainless Steel Grater & Slicer', desc: 'Ergonomic handle multi purpose sharp grating tool panel.', oldPrice: '₹499', price: '₹189', discount: '62% OFF', link: `https://www.amazon.in/dp/B07T3M3456/?tag=${AFFILIATE_TAG}` },
    { id: 47, category: 'utensils', title: 'Heavy Duty Kitchen Shears', desc: 'Multi function stainless utility cutting bone scissor tool.', oldPrice: '₹699', price: '₹249', discount: '64% OFF', link: `https://www.amazon.in/dp/B08B5B7890/?tag=${AFFILIATE_TAG}` },
    { id: 48, category: 'utensils', title: 'Tong Food Grasper Clamp', desc: 'Locking mechanisms silicone head heat safe gripping systems.', oldPrice: '₹399', price: '₹139', discount: '65% OFF', link: `https://www.amazon.in/dp/B09X4X5678/?tag=${AFFILIATE_TAG}` },
    { id: 49, category: 'utensils', title: 'Potato Masher Wave Press', desc: 'Stainless structural grid base comfortable smashing support handle.', oldPrice: '₹349', price: '₹119', discount: '66% OFF', link: `https://www.amazon.in/dp/B07V2K7890/?tag=${AFFILIATE_TAG}` },
    { id: 50, category: 'utensils', title: 'Measuring Cups & Spoons Set', desc: '8 piece space nesting accurate kitchen liquid dry measure scale.', oldPrice: '₹399', price: '₹129', discount: '68% OFF', link: `https://www.amazon.in/dp/B08N7C1234/?tag=${AFFILIATE_TAG}` }
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
