// ── Data ──────────────────────────────────────────────────────────────────────

const dressCodes = {
  casual: {
    hourglass:          { outfits: ["Wrap dress", "High-waist jeans + fitted top", "Bodycon midi skirt", "Belted jumpsuit"], tips: "Highlight your waist with belts or wrap styles. Fitted but not tight works best." },
    pear:               { outfits: ["A-line skirt", "Bootcut jeans + flowy blouse", "Off-shoulder top + wide-leg pants", "Maxi dress"], tips: "Draw attention upward with bold tops. A-line and flared bottoms balance your silhouette." },
    apple:              { outfits: ["Empire waist tunic", "Flowy maxi dress", "V-neck blouse + straight pants", "Wrap top + wide-leg trousers"], tips: "V-necks and empire waists elongate your torso. Avoid tight waistbands." },
    rectangle:          { outfits: ["Peplum top + skinny jeans", "Ruffled dress", "Crop top + high-waist skirt", "Belted shirt dress"], tips: "Create curves with ruffles, peplums, and belted styles. Layering adds dimension." },
    "inverted-triangle":{ outfits: ["Flared skirt + simple top", "Wide-leg pants + fitted tee", "A-line dress", "Bootcut jeans + tucked blouse"], tips: "Balance broad shoulders with volume on the bottom. Avoid shoulder pads and boat necks." }
  },
  office: {
    hourglass:          { outfits: ["Pencil skirt + blazer", "Wrap dress", "Tailored trousers + fitted blouse", "Sheath dress"], tips: "Structured pieces that follow your curves without being too tight. Midi length is ideal." },
    pear:               { outfits: ["Dark trousers + bright blazer", "A-line midi skirt + structured top", "Wide-leg pants + fitted jacket", "Shift dress"], tips: "Darker bottoms and statement tops create a polished, balanced look." },
    apple:              { outfits: ["Straight-leg trousers + longline blazer", "Wrap dress", "Tunic blouse + tailored pants", "Shift dress"], tips: "Longline blazers and wrap styles are your best friends for a professional look." },
    rectangle:          { outfits: ["Peplum blazer + trousers", "Belted shirt dress", "Ruffled blouse + pencil skirt", "Structured blazer + flared pants"], tips: "Add structure and shape with peplum cuts and belted waists." },
    "inverted-triangle":{ outfits: ["Wide-leg trousers + simple blouse", "A-line skirt + fitted top", "Flared pants + tucked shirt", "Midi dress with full skirt"], tips: "Soften shoulders with V-necks and raglan sleeves. Add volume below the waist." }
  },
  party: {
    hourglass:          { outfits: ["Bodycon dress", "Crop top + high-waist skirt", "Sequin wrap dress", "Off-shoulder mini dress"], tips: "Show off your shape with fitted silhouettes. Metallics and bold colors look stunning." },
    pear:               { outfits: ["Embellished top + dark skirt", "Strapless dress", "Flowy midi dress", "Statement blouse + slim pants"], tips: "Sparkle on top to draw the eye upward. Flowy skirts add elegance." },
    apple:              { outfits: ["Empire waist party dress", "Flowy maxi with slit", "Wrap dress in bold print", "Tunic top + wide-leg pants"], tips: "Flowy fabrics and empire waists are flattering and chic for parties." },
    rectangle:          { outfits: ["Ruffled mini dress", "Peplum top + sequin skirt", "Layered dress", "Crop top + flared skirt"], tips: "Go bold with ruffles, layers, and embellishments to create curves." },
    "inverted-triangle":{ outfits: ["Flared mini skirt + simple top", "Fit-and-flare dress", "Wide-leg sequin pants + fitted top", "Peplum dress"], tips: "Fit-and-flare silhouettes are perfect — they balance your frame beautifully." }
  },
  wedding: {
    hourglass:          { outfits: ["Mermaid gown", "Fit-and-flare dress", "Wrap midi dress", "Belted maxi dress"], tips: "Elegant fitted gowns showcase your figure. Avoid overly casual styles." },
    pear:               { outfits: ["A-line gown", "Empire waist dress", "Off-shoulder midi dress", "Flowy maxi dress"], tips: "A-line and empire waist gowns are universally flattering for weddings." },
    apple:              { outfits: ["Flowy chiffon maxi", "Empire waist gown", "Wrap dress", "Shift dress with embellishments"], tips: "Soft, flowy fabrics in rich colors look elegant and comfortable." },
    rectangle:          { outfits: ["Ball gown", "Ruffled midi dress", "Peplum dress", "Layered chiffon dress"], tips: "Ball gowns and layered styles create a romantic, feminine silhouette." },
    "inverted-triangle":{ outfits: ["A-line gown", "Fit-and-flare dress", "Flared midi skirt + embellished top", "Mermaid dress"], tips: "A-line and fit-and-flare gowns balance your proportions perfectly." }
  },
  date: {
    hourglass:          { outfits: ["Wrap dress", "Bodycon midi", "Off-shoulder top + high-waist jeans", "Slip dress"], tips: "Romantic and fitted. A wrap dress is a timeless date-night choice." },
    pear:               { outfits: ["Flowy midi dress", "Embellished top + dark jeans", "Wrap dress", "Strapless mini dress"], tips: "Draw attention to your upper body with statement tops and necklines." },
    apple:              { outfits: ["Wrap dress", "V-neck blouse + wide-leg pants", "Flowy maxi dress", "Empire waist dress"], tips: "Soft, romantic fabrics with V-necks are both flattering and elegant." },
    rectangle:          { outfits: ["Ruffled dress", "Crop top + high-waist skirt", "Peplum top + skinny jeans", "Layered midi dress"], tips: "Create curves with ruffles and peplums. A pop of color adds excitement." },
    "inverted-triangle":{ outfits: ["Fit-and-flare dress", "Flared skirt + fitted top", "Wide-leg pants + simple blouse", "A-line midi dress"], tips: "Soft necklines and volume below the waist create a balanced, romantic look." }
  },
  beach: {
    hourglass:          { outfits: ["Bikini + sarong wrap", "Halter maxi dress", "One-piece swimsuit + cover-up", "Crop top + high-waist shorts"], tips: "Bright colors and tropical prints look amazing. A sarong wrap is versatile." },
    pear:               { outfits: ["Ruffled bikini top + board shorts", "Tankini + sarong", "Off-shoulder cover-up dress", "High-waist bikini"], tips: "Ruffled tops and off-shoulder styles balance your silhouette at the beach." },
    apple:              { outfits: ["One-piece swimsuit", "Kaftan cover-up", "Tankini + flowy shorts", "Wrap dress as cover-up"], tips: "One-pieces and kaftans are stylish and comfortable for beach days." },
    rectangle:          { outfits: ["Bandeau bikini + ruffled skirt", "Printed maxi dress", "Crop top + high-waist bikini bottoms", "Fringe cover-up"], tips: "Ruffles, fringe, and prints add fun texture and create the illusion of curves." },
    "inverted-triangle":{ outfits: ["High-waist bikini bottoms + simple top", "Sarong wrap skirt", "Flared beach pants + bikini top", "Maxi skirt + bandeau"], tips: "High-waist bottoms and sarong wraps add volume to your lower half." }
  },
  formal: {
    hourglass:          { outfits: ["Floor-length gown", "Mermaid dress", "Fitted evening dress", "Strapless ball gown"], tips: "Classic floor-length gowns in rich fabrics like silk or velvet are stunning." },
    pear:               { outfits: ["A-line ball gown", "Empire waist gown", "Strapless gown with full skirt", "Off-shoulder evening dress"], tips: "Full skirts and strapless necklines create a classic, elegant formal look." },
    apple:              { outfits: ["Flowy chiffon gown", "Empire waist evening dress", "Wrap gown", "Column dress with draping"], tips: "Draped fabrics and empire waists are both flattering and sophisticated." },
    rectangle:          { outfits: ["Ball gown", "Ruffled evening dress", "Layered chiffon gown", "Peplum formal dress"], tips: "Ball gowns and layered styles create a dramatic, feminine formal silhouette." },
    "inverted-triangle":{ outfits: ["A-line gown", "Fit-and-flare evening dress", "Mermaid gown", "Full-skirt ball gown"], tips: "A-line and full-skirt gowns balance your proportions for a stunning formal look." }
  },
  gym: {
    hourglass:          { outfits: ["High-waist leggings + sports bra", "Fitted tank + yoga pants", "Compression shorts + crop top", "Racerback top + leggings"], tips: "High-waist leggings accentuate your waist. Choose moisture-wicking fabrics." },
    pear:               { outfits: ["Dark leggings + bright top", "Compression tights + loose tank", "High-waist shorts + fitted top", "Flared yoga pants + sports bra"], tips: "Dark bottoms and bright tops draw the eye upward. Compression wear is supportive." },
    apple:              { outfits: ["High-waist leggings + longline sports bra", "Loose tank + yoga pants", "Compression shorts + flowy top", "Athletic dress"], tips: "Longline sports bras and high-waist bottoms create a streamlined look." },
    rectangle:          { outfits: ["Colorblock leggings + crop top", "Patterned sports bra + shorts", "Ruched leggings + fitted tank", "Two-tone workout set"], tips: "Colorblock and patterned activewear adds visual interest and creates curves." },
    "inverted-triangle":{ outfits: ["Flared yoga pants + fitted top", "Wide-leg joggers + sports bra", "High-waist leggings + loose tank", "Athletic skirt + fitted top"], tips: "Flared and wide-leg bottoms balance your upper body. Avoid padded shoulders." }
  }
};

const shops = [
  { icon: "🛍️", name: "Zara",        desc: "Trendy & affordable fashion",       url: "https://www.zara.com",        tags: ["casual","office","party","date","formal","wedding"] },
  { icon: "👗", name: "H&M",          desc: "Everyday styles for every budget",  url: "https://www.hm.com",          tags: ["casual","office","party","beach","gym"] },
  { icon: "✨", name: "ASOS",         desc: "Huge range for all body types",     url: "https://www.asos.com",        tags: ["casual","party","date","beach","wedding","formal"] },
  { icon: "💎", name: "Nordstrom",    desc: "Premium & designer collections",    url: "https://www.nordstrom.com",   tags: ["formal","wedding","office","date"] },
  { icon: "🌸", name: "Anthropologie",desc: "Bohemian & romantic styles",        url: "https://www.anthropologie.com", tags: ["casual","date","wedding","beach"] },
  { icon: "🏋️", name: "Lululemon",   desc: "Premium activewear",                url: "https://www.lululemon.com",   tags: ["gym"] },
  { icon: "🎽", name: "Nike Women",   desc: "Sport & lifestyle wear",            url: "https://www.nike.com/w/womens", tags: ["gym","beach","casual"] },
  { icon: "🌺", name: "Revolve",      desc: "Influencer-loved party & date wear",url: "https://www.revolve.com",    tags: ["party","date","beach","casual"] },
  { icon: "👑", name: "Rent the Runway", desc: "Designer rentals for events",   url: "https://www.renttherunway.com", tags: ["formal","wedding","party"] },
  { icon: "🌿", name: "Reformation",  desc: "Sustainable & chic styles",        url: "https://www.thereformation.com", tags: ["casual","date","wedding","office"] },
  { icon: "💼", name: "Ann Taylor",   desc: "Classic workwear & office fashion", url: "https://www.anntaylor.com",  tags: ["office","formal","wedding"] },
  { icon: "🏖️", name: "Free People", desc: "Boho beach & casual vibes",        url: "https://www.freepeople.com",  tags: ["beach","casual","date"] }
];

// ── State ─────────────────────────────────────────────────────────────────────
let selectedOccasion = null;
let selectedBody     = null;

// ── DOM refs ──────────────────────────────────────────────────────────────────
const occasionSection = document.getElementById('occasion-section');
const bodytypeSection = document.getElementById('bodytype-section');
const resultsSection  = document.getElementById('results-section');
const resultsContent  = document.getElementById('results-content');

// ── Helpers ───────────────────────────────────────────────────────────────────
function show(el)  { el.classList.remove('hidden'); }
function hide(el)  { el.classList.add('hidden'); }

function getShopsForOccasion(occasion) {
  return shops.filter(s => s.tags.includes(occasion));
}

function renderResults() {
  const data = dressCodes[selectedOccasion][selectedBody];
  const matchedShops = getShopsForOccasion(selectedOccasion);

  const occasionLabel = selectedOccasion.charAt(0).toUpperCase() + selectedOccasion.slice(1).replace('-', ' ');
  const bodyLabel     = selectedBody.charAt(0).toUpperCase() + selectedBody.slice(1).replace('-', ' ');

  const outfitItems = data.outfits.map(o => `<li>${o}</li>`).join('');
  const shopCards   = matchedShops.map(s => `
    <div class="shop-card">
      <div class="shop-icon">${s.icon}</div>
      <div class="shop-name">${s.name}</div>
      <div class="shop-desc">${s.desc}</div>
      <a href="${s.url}" target="_blank" rel="noopener noreferrer">Shop Now →</a>
    </div>
  `).join('');

  resultsContent.innerHTML = `
    <div class="result-header">
      <h2>Your Style Guide</h2>
      <p>${occasionLabel} look for ${bodyLabel} body type</p>
    </div>

    <div class="section-title">👗 Recommended Outfits</div>
    <ul class="outfit-list">${outfitItems}</ul>

    <div class="section-title">💡 Styling Tips</div>
    <div class="tips-box">${data.tips}</div>

    <div class="section-title">🛒 Where to Shop</div>
    <div class="shops-grid">${shopCards}</div>
  `;
}

// ── Event Listeners ───────────────────────────────────────────────────────────

// Occasion buttons
document.querySelectorAll('.occasion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedOccasion = btn.dataset.occasion;
    document.querySelectorAll('.occasion-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    hide(occasionSection);
    show(bodytypeSection);
  });
});

// Body type buttons
document.querySelectorAll('.body-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedBody = btn.dataset.body;
    document.querySelectorAll('.body-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderResults();
    hide(bodytypeSection);
    show(resultsSection);
  });
});

// Back buttons
document.getElementById('back-to-occasion').addEventListener('click', () => {
  hide(bodytypeSection);
  show(occasionSection);
});

document.getElementById('back-to-body').addEventListener('click', () => {
  hide(resultsSection);
  show(bodytypeSection);
});

// Reset
document.getElementById('reset-btn').addEventListener('click', () => {
  selectedOccasion = null;
  selectedBody     = null;
  document.querySelectorAll('.occasion-btn, .body-btn').forEach(b => b.classList.remove('active'));
  hide(resultsSection);
  show(occasionSection);
});
