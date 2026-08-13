const fs = require('fs');
const path = require('path');

const AFFILIATE_TAG = 'antify-21';

const freshDeals = [
    // === ₹200 DEALS CATEGORY ===
    { id: 1, category: 'rupees200', title: 'Portronics Fast Charging Cable', desc: 'Heavy-duty durable data sync charging cord for smartphones.', label: 'Top Rated Find', link: `https://www.amazon.in/s?k=Portronics+Fast+Charging+Cable&tag=${AFFILIATE_TAG}` },
    { id: 2, category: 'rupees200', title: 'Gizga Essentials Microfiber Cloths', desc: 'Ultra-soft absorbent cleaning cloths for laptops, tabs and screens.', label: 'Best Seller', link: `https://www.amazon.in/s?k=Gizga+Essentials+Microfiber+Cloths&tag=${AFFILIATE_TAG}` },
    { id: 3, category: 'rupees200', title: 'ELV Desktop Mobile Stand', desc: 'Premium multi-angle adjustable desktop holder for all smartphones.', label: 'Highly Rated', link: `https://www.amazon.in/s?k=ELV+Desktop+Mobile+Stand&tag=${AFFILIATE_TAG}` },
    { id: 4, category: 'rupees200', title: 'Syska 9W LED Base Bulb', desc: 'Energy efficient bright home lighting solution bulb base.', label: 'Daily Essential', link: `https://www.amazon.in/s?k=Syska+9W+LED+Base+Bulb&tag=${AFFILIATE_TAG}` },
    { id: 5, category: 'rupees200', title: 'Cello H2O Plastic Bottle Set', desc: 'BPA-free food grade durable water bottles for daily home use.', label: 'Kitchen Special', link: `https://www.amazon.in/s?k=Cello+H2O+Plastic+Bottle+Set&tag=${AFFILIATE_TAG}` },
    { id: 6, category: 'rupees200', title: 'Pidilite Fevikwik Instant Gel', desc: 'Super strong instant adhesive glue for multiple repairs.', label: 'Quick Fix Pick', link: `https://www.amazon.in/s?k=Pidilite+Fevikwik+Instant+Gel&tag=${AFFILIATE_TAG}` },
    { id: 7, category: 'rupees200', title: 'Scotch-Brite Kitchen Sponge', desc: 'Heavy duty scrub pads for effective kitchen utensil cleaning.', label: 'Top Cleaning Choice', link: `https://www.amazon.in/s?k=Scotch-Brite+Kitchen+Sponge&tag=${AFFILIATE_TAG}` },
    { id: 8, category: 'rupees200', title: 'Dettol Liquid Handwash Refill', desc: 'Effective germ protection handwash fluid skin gentle formula.', label: 'Value Pack', link: `https://www.amazon.in/s?k=Dettol+Liquid+Handwash+Refill&tag=${AFFILIATE_TAG}` },
    { id: 9, category: 'rupees200', title: 'Wipro 9W Smart LED Bulb', desc: 'Energy saver lighting accent base for small room setups.', label: 'Smart Home Pick', link: `https://www.amazon.in/s?k=Wipro+9W+Smart+LED+Bulb&tag=${AFFILIATE_TAG}` },
    { id: 10, category: 'rupees200', title: 'Classmate Octane Gel Pens', desc: 'Smooth flowing dark ink gel pens pack for regular writing.', label: 'Stationery Pick', link: `https://www.amazon.in/s?k=Classmate+Octane+Gel+Pens&tag=${AFFILIATE_TAG}` },

    // === ELECTRONICS CATEGORY ===
    { id: 11, category: 'electronics', title: 'boAt Bassheads 100 Wired Earphones', desc: 'In-ear wired earphones with super extra bass and integrated mic.', label: 'Mega Value', link: `https://www.amazon.in/s?k=boAt+Bassheads+100+Wired+Earphones&tag=${AFFILIATE_TAG}` },
    { id: 12, category: 'electronics', title: 'SanDisk Cruzer Blade 32GB USB', desc: 'Ultra-compact portable flash drive for effortless data backups.', label: 'Top Seller', link: `https://www.amazon.in/s?k=SanDisk+Cruzer+Blade+32GB+USB&tag=${AFFILIATE_TAG}` },
    { id: 13, category: 'electronics', title: 'Logitech M170 Wireless Mouse', desc: 'Reliable 2.4GHz wireless tracking precise compact mouse setup.', label: 'Desk Essential', link: `https://www.amazon.in/s?k=Logitech+M170+Wireless+Mouse&tag=${AFFILIATE_TAG}` },
    { id: 14, category: 'electronics', title: 'TP-Link TL-WA850RE Wifi Extender', desc: 'Universal wall-plug wireless network signal booster station.', label: 'Network Boost', link: `https://www.amazon.in/s?k=TPLink+TLWA850RE+Wifi+Extender&tag=${AFFILIATE_TAG}` },
    { id: 15, category: 'electronics', title: 'JBL C100SI Wired Headphones', desc: 'Premium signature sound quality in-ear dynamic clear bass set.', label: 'Audio Choice', link: `https://www.amazon.in/s?k=JBL+C100SI+Wired+Headphones&tag=${AFFILIATE_TAG}` },
    { id: 16, category: 'electronics', title: 'Mi 10W Fast Charger Adapter', desc: 'Safe multi-protection reliable power delivery wall block travel charger.', label: 'Must Have Accessory', link: `https://www.amazon.in/s?k=Mi+10W+Fast+Charger+Adapter&tag=${AFFILIATE_TAG}` },
    { id: 17, category: 'electronics', title: 'boAt Wave Call Smartwatch', desc: 'Advanced tracking sleek display layout bluetooth calling wrist wearable.', label: 'Trending Wearable', link: `https://www.amazon.in/s?k=boAt+Wave+Call+Smartwatch&tag=${AFFILIATE_TAG}` },
    { id: 18, category: 'electronics', title: 'Zebronics Bluetooth Soundbar', desc: 'Compact dual speaker module setup for theatre room audio expansion.', label: 'Home Audio Deal', link: `https://www.amazon.in/s?k=Zebronics+Bluetooth+Soundbar&tag=${AFFILIATE_TAG}` },
    { id: 19, category: 'electronics', title: 'Ambrane 10000mAh Power Bank', desc: 'Dual output fast lithium polymer compact battery storage station.', label: 'Travel Essential', link: `https://www.amazon.in/s?k=Ambrane+10000mAh+Power+Bank&tag=${AFFILIATE_TAG}` },
    { id: 20, category: 'electronics', title: 'Syska 4-Way Extension Board', desc: 'Surge protector multi-plug grid with long heavy wire insulation.', label: 'Power Setup', link: `https://www.amazon.in/s?k=Syska+4Way+Extension+Board&tag=${AFFILIATE_TAG}` },

    // === CLOTHING CATEGORY ===
    { id: 21, category: 'clothing', title: 'Alan Jones Cotton Sweatshirt', desc: 'Premium comfortable breathable long sleeve casual winter wear.', label: 'Premium Comfort', link: `https://www.amazon.in/s?k=Alan+Jones+Cotton+Sweatshirt&tag=${AFFILIATE_TAG}` },
    { id: 22, category: 'clothing', title: 'Symbol Men Cotton Polo Tee', desc: 'Classic polo collar solid casual regular fit t-shirt clothing.', label: 'Casual Style', link: `https://www.amazon.in/s?k=Symbol+Men+Cotton+Polo+Tee&tag=${AFFILIATE_TAG}` },
    { id: 23, category: 'clothing', title: 'Lymio Casual Men Trackpants', desc: 'Regular fit athletic training joggers track pants with pockets.', label: 'Active Wear', link: `https://www.amazon.in/s?k=Lymio+Casual+Men+Trackpants&tag=${AFFILIATE_TAG}` },
    { id: 24, category: 'clothing', title: 'Van Heusen Men Cotton Briefs', desc: 'Super combed daily elasticated waist inner clothing essential.', label: 'Daily Comfort', link: `https://www.amazon.in/s?k=Van+Heusen+Men+Cotton+Briefs&tag=${AFFILIATE_TAG}` },
    { id: 25, category: 'clothing', title: 'Max Men Solid Regular T-Shirt', desc: 'Soft daily crew neck premium cotton blend comfort fit tee.', label: 'Essential Tee', link: `https://www.amazon.in/s?k=Max+Men+Solid+Regular+TShirt&tag=${AFFILIATE_TAG}` },
    { id: 26, category: 'clothing', title: 'Puma Unisex Ankle Socks Pack', desc: 'Cushioned performance knit sport training foot accessory bundle.', label: 'Sport Pack', link: `https://www.amazon.in/s?k=Puma+Unisex+Ankle+Socks+Pack&tag=${AFFILIATE_TAG}` },
    { id: 27, category: 'clothing', title: 'Bata Men Formal Leather Shoes', desc: 'Durable uniform dress footwear with sleek comfort base design.', label: 'Classic Formal', link: `https://www.amazon.in/s?k=Bata+Men+Formal+Leather+Shoes&tag=${AFFILIATE_TAG}` },
    { id: 28, category: 'clothing', title: 'Levis Men Straight Fit Jeans', desc: 'Classic heavy denim vintage washed long-lasting styling pants.', label: 'Timeless Denim', link: `https://www.amazon.in/s?k=Levis+Men+Straight+Fit+Jeans&tag=${AFFILIATE_TAG}` },
    { id: 29, category: 'clothing', title: 'Adidas Sports Track Jacket', desc: 'Full zip athletic performance windcheater running active wear.', label: 'Athletic Choice', link: `https://www.amazon.in/s?k=Adidas+Sports+Track+Jacket&tag=${AFFILIATE_TAG}` },
    { id: 30, category: 'clothing', title: 'Wildhorn Leather Men Wallet', desc: 'Premium finish multi slot bifold pocket credit card companion.', label: 'Genuine Leather', link: `https://www.amazon.in/s?k=Wildhorn+Leather+Men+Wallet&tag=${AFFILIATE_TAG}` },

    // === KITCHEN CATEGORY ===
    { id: 31, category: 'kitchen', title: 'Pigeon Polypropylene Mini Chopper', desc: 'Handy manual dynamic pull-string fruit and vegetable chopper.', label: 'Kitchen Helper', link: `https://www.amazon.in/s?k=Pigeon+Polypropylene+Mini+Chopper&tag=${AFFILIATE_TAG}` },
    { id: 32, category: 'kitchen', title: 'Cello H2O Stainless Steel Bottle', desc: 'Durable premium mirror finish cold storage single wall flask.', label: 'Sleek Storage', link: `https://www.amazon.in/s?k=Cello+H2O+Stainless+Steel+Bottle&tag=${AFFILIATE_TAG}` },
    { id: 33, category: 'kitchen', title: 'Kuber Industries Storage Containers', desc: 'Airtight food-grade modular kitchen space organizer boxes.', label: 'Pantry Organizer', link: `https://www.amazon.in/s?k=Kuber+Industries+Storage+Containers&tag=${AFFILIATE_TAG}` },
    { id: 34, category: 'kitchen', title: 'Milton Thermosteel Hot Flask', desc: 'Vacuum insulated long duration tea coffee temperature maintainer.', label: 'Insulated Premium', link: `https://www.amazon.in/s?k=Milton+Thermosteel+Hot+Flask&tag=${AFFILIATE_TAG}` },
    { id: 35, category: 'kitchen', title: 'Prestige Electric Kettle 1.5L', desc: 'Automatic cut off rapid boil stainless steel liquid heater.', label: 'Fast Boil Pick', link: `https://www.amazon.in/s?k=Prestige+Electric+Kettle+1.5L&tag=${AFFILIATE_TAG}` },
    { id: 36, category: 'kitchen', title: 'Butterfly Premium Gas Stove', desc: 'Toughened glass top dual burner high efficiency brass setup.', label: 'Cooktop Special', link: `https://www.amazon.in/s?k=Butterfly+Premium+Gas+Stove&tag=${AFFILIATE_TAG}` },
    { id: 37, category: 'kitchen', title: 'Borosil Glass Lunch Box Set', desc: 'Microwave safe leakproof office meal container set bags.', label: 'Office Essential', link: `https://www.amazon.in/s?k=Borosil+Glass+Lunch+Box+Set&tag=${AFFILIATE_TAG}` },
    { id: 38, category: 'kitchen', title: 'Kent 16068 Hand Milk Blender', desc: 'Powerful low noise electrical quick mix beverage whisk layout.', label: 'Quick Blender', link: `https://www.amazon.in/s?k=Kent+16068+Hand+Milk+Blender&tag=${AFFILIATE_TAG}` },
    { id: 39, category: 'kitchen', title: 'AmazonBasics Silicone Baking Mats', desc: 'Reusable non stick sheet tray liner tool configuration panels.', label: 'Baking Gear', link: `https://www.amazon.in/s?k=AmazonBasics+Silicone+Baking+Mats&tag=${AFFILIATE_TAG}` },
    { id: 40, category: 'kitchen', title: 'Hawkins Contura Pressure Cooker', desc: 'Hard anodized reliable performance faster uniform heating pot.', label: 'Chef Choice', link: `https://www.amazon.in/s?k=Hawkins+Contura+Pressure+Cooker&tag=${AFFILIATE_TAG}` },

    // === UTENSILS CATEGORY ===
    { id: 41, category: 'utensils', title: 'Prestige Aluminium Non-Stick Tawa', desc: 'Omni non-stick induction base premium frying durable griddle.', label: 'Daily Cooking', link: `https://www.amazon.in/s?k=Prestige+Aluminium+NonStick+Tawa&tag=${AFFILIATE_TAG}` },
    { id: 42, category: 'utensils', title: 'Signoraware Serving Ladles Set', desc: 'Heat-resistant premium non-scratch modular cooking spoon kit.', label: 'Scratch Free', link: `https://www.amazon.in/s?k=Signoraware+Serving+Ladles+Set&tag=${AFFILIATE_TAG}` },
    { id: 43, category: 'utensils', title: 'Hawkins Stainless Steel Saucepan', desc: 'Induction compatible heavy gauge tea milk cooking vessel pan.', label: 'Heavy Bottom Pan', link: `https://www.amazon.in/s?k=Hawkins+Stainless+Steel+Saucepan&tag=${AFFILIATE_TAG}` },
    { id: 44, category: 'utensils', title: 'Pigeon Non-Stick Kitchen Set', desc: 'Three piece premium cooktop kadhai frying pan flat tawa bundle.', label: 'Combo Pack', link: `https://www.amazon.in/s?k=Pigeon+NonStick+Kitchen+Set&tag=${AFFILIATE_TAG}` },
    { id: 45, category: 'utensils', title: 'Meyer Stainless Steel Kadhai', desc: 'Thick triple layer base anti scratch premium stir fry deep wok.', label: 'Premium Build', link: `https://www.amazon.in/s?k=Meyer+Stainless+Steel+Kadhai&tag=${AFFILIATE_TAG}` },
    { id: 46, category: 'utensils', title: 'Wonderchef Granite Cookware Set', desc: 'Die cast heavy construction non stick multi purpose designer pots.', label: 'Designer Collection', link: `https://www.amazon.in/s?k=Wonderchef+Granite+Cookware+Set&tag=${AFFILIATE_TAG}` },
    { id: 47, category: 'utensils', title: 'Vinod Stainless Steel Idli Maker', desc: 'Multi tier steam container module for traditional south cooking.', label: 'Breakfast Special', link: `https://www.amazon.in/s?k=Vinod+Stainless+Steel+Idli+Maker&tag=${AFFILIATE_TAG}` },
    { id: 48, category: 'utensils', title: 'Choity Potato Wave Masher', desc: 'Comfortable grip grid mesh pure smooth manual vegetable masher.', label: 'Easy Mash Tool', link: `https://www.amazon.in/s?k=Choity+Potato+Wave+Masher&tag=${AFFILIATE_TAG}` },
    { id: 49, category: 'utensils', title: 'Cartini Stainless Kitchen Scissors', desc: 'Razor sharp multi utility household scaling bone snipper tool.', label: 'Heavy Duty Shears', link: `https://www.amazon.in/s?k=Cartini+Stainless+Kitchen+Scissors&tag=${AFFILIATE_TAG}` },
    { id: 50, category: 'utensils', title: 'Dynamic Stainless Steel Whisks', desc: 'Heavy looping wire manual balloon cream egg blending tools.', label: 'Baking Essential', link: `https://www.amazon.in/s?k=Dynamic+Stainless+Steel+Whisks&tag=${AFFILIATE_TAG}` }
];

function updateDeals() {
    const indexPath = path.join(__dirname, 'index.html');
    let htmlContent = fs.readFileSync(indexPath, 'utf8');
    const dataString = JSON.stringify(freshDeals, null, 1);
    const regex = /(const dailyDeals = )\[[\s\S]*?\];/;
    htmlContent = htmlContent.replace(regex, `$1${dataString};`);
    fs.writeFileSync(indexPath, htmlContent, 'utf8');
    console.log("Success: Clean, API-ready store framework updated.");
}
updateDeals();
