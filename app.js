const conditions = [
  {
    river: "Colorado River",
    section: "Two Rivers to New Castle",
    score: 82,
    flowCfs: 1630,
    flowThresholds: { veryLow: 700, low: 1000, primeLow: 1200, primeHigh: 1700, high: 2800, veryHigh: 4800 },
    flowBand: "ideal",
    flowPosition: 46,
    flowRecentCfs: [1500, 1490, 1510, 1540, 1560, 1580, 1600, 1590, 1610, 1620, 1630, 1630],
    flowTrendLabel: "rising",
    flowContext: "In the sweet spot for covering soft banks and mid-river seams from a boat.",
    flowGuidance: "Good mix of boat-friendly current and manageable edges for most anglers.",
    tempF: 47,
    tempNormalF: 44,
    tempTrend7dF: 2.1,
    tempTrendLabel: "warming",
    tempRecentF: [42, 42, 43, 43, 44, 44, 45, 45, 46, 46, 47, 47],
    tempRecentNormalF: [43, 43, 43, 43, 44, 44, 44, 44, 44, 44, 44, 44],
    tempBand: "steady",
    tempPosition: 54,
    tempContext: "Trout are usually willing to move a bit for food once the sun gets on the water.",
    tempGuidance: "Expect a steady midday bite with nymphs, emergers, and occasional short chase behavior.",
    clarity: "3-4 ft",
    clarityBand: "clear",
    clarityPosition: 70,
    clarityContext: "Fish can track flies well without getting overly spooky.",
    turbidityFnu: 6,
    turbidityBand: "clear",
    turbidityPosition: 14,
    turbidityRecentFnu: [7, 7, 6, 6, 5, 5, 6, 6, 7, 7, 6, 6],
    turbidityTrendLabel: "stable",
    turbidityContext: "This is clear water. Fish can inspect flies well, so cleaner drifts and longer leaders matter more.",
    turbidityGuidance: "Expect the river to fish on the clear side, with more visual inspection from trout.",
    access: "Good",
    status: "good",
    bestTime: "11 AM - 4 PM",
    techniques: ["nymph", "streamer", "float"],
    hatches: ["Midges", "Blue-winged olives"],
    summary: "Stable visibility and moderate spring flow make this a solid float or bank session, especially on seam edges."
  },
  {
    river: "Roaring Fork River",
    section: "Glenwood Canyon Mouth",
    score: 76,
    flowCfs: 780,
    flowThresholds: { veryLow: 225, low: 325, primeLow: 425, primeHigh: 625, high: 900, veryHigh: 1500 },
    flowBand: "pushy",
    flowPosition: 70,
    flowRecentCfs: [690, 700, 715, 728, 740, 752, 760, 770, 774, 778, 780, 780],
    flowTrendLabel: "rising",
    flowContext: "A little sporty for new waders, but productive if you stay on softer inside water.",
    flowGuidance: "Better for confident wading than casual stepping around.",
    tempF: 44,
    tempNormalF: 42,
    tempTrend7dF: 1.3,
    tempTrendLabel: "warming",
    tempRecentF: [40, 40, 40, 41, 41, 41, 42, 42, 42, 43, 43, 44],
    tempRecentNormalF: [41, 41, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42],
    tempBand: "cool",
    tempPosition: 38,
    tempContext: "Fish tend to hold tighter and feed in shorter windows when water is still this cool.",
    tempGuidance: "Best activity usually builds from late morning into afternoon.",
    clarity: "2-3 ft",
    clarityBand: "fishable",
    clarityPosition: 52,
    clarityContext: "Enough visibility for nymphing and bigger dries, but not true gin-clear water.",
    turbidityFnu: 14,
    turbidityBand: "stained",
    turbidityPosition: 34,
    turbidityRecentFnu: [12, 12, 13, 13, 14, 14, 15, 15, 14, 14, 14, 14],
    turbidityTrendLabel: "stable",
    turbidityContext: "A light stain gives fish some cover without turning the river into guesswork.",
    turbidityGuidance: "This is usually a friendly turbidity zone for nymphs, bigger dries, and short streamer looks.",
    access: "Fair",
    status: "good",
    bestTime: "1 PM - 5 PM",
    techniques: ["nymph", "dry-dropper", "wade"],
    hatches: ["Midges", "Early caddis"],
    summary: "Good midday window if the canyon wind stays down. Wade carefully near faster side channels."
  },
  {
    river: "Fryingpan River",
    section: "Basalt Tailwater",
    score: 91,
    flowCfs: 310,
    flowThresholds: { veryLow: 120, low: 190, primeLow: 240, primeHigh: 380, high: 520, veryHigh: 700 },
    flowBand: "ideal",
    flowPosition: 50,
    flowRecentCfs: [308, 308, 309, 309, 310, 310, 311, 311, 310, 310, 310, 310],
    flowTrendLabel: "stable",
    flowContext: "Classic technical tailwater level with strong bug visibility and stable lanes.",
    flowGuidance: "Friendly for careful wading, but fish are selective rather than easy.",
    tempF: 42,
    tempNormalF: 41,
    tempTrend7dF: 0.4,
    tempTrendLabel: "steady",
    tempRecentF: [41, 41, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42],
    tempRecentNormalF: [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
    tempBand: "cool",
    tempPosition: 30,
    tempContext: "Trout usually feed, but they often prefer precise drifts over aggressive movement.",
    tempGuidance: "Technical presentations matter more than speed or covering lots of water.",
    clarity: "5+ ft",
    clarityBand: "clear",
    clarityPosition: 92,
    clarityContext: "Very clear water favors fine presentations, small bugs, and longer leaders.",
    turbidityFnu: 3,
    turbidityBand: "clear",
    turbidityPosition: 8,
    turbidityRecentFnu: [3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3],
    turbidityTrendLabel: "stable",
    turbidityContext: "Extremely clear water pushes the river toward technical presentations and softer approach angles.",
    turbidityGuidance: "Fine tippet and controlled drifts matter when the water is this clear.",
    access: "Good",
    status: "excellent",
    bestTime: "10 AM - 3 PM",
    techniques: ["nymph", "dry-dropper", "wade"],
    hatches: ["Mysis", "Midges", "BWO"],
    summary: "Technical but highly productive tailwater conditions. Light tippet and small bugs should move fish consistently."
  },
  {
    river: "Fryingpan River",
    section: "Ruedi Tailwater",
    score: 86,
    flowCfs: 95,
    flowThresholds: { veryLow: 30, low: 50, primeLow: 70, primeHigh: 140, high: 220, veryHigh: 360 },
    flowBand: "ideal",
    flowPosition: 44,
    flowRecentCfs: [88, 89, 90, 91, 92, 93, 94, 94, 95, 95, 95, 95],
    flowTrendLabel: "stable",
    flowContext: "Classic upper Fryingpan tailwater current with defined seams, buckets, and soft feeding lanes.",
    flowGuidance: "Great for careful wading and technical drifts, especially when you slow down and fish likely lies thoroughly.",
    tempF: 40,
    tempNormalF: 39,
    tempTrend7dF: 0.5,
    tempTrendLabel: "steady",
    tempRecentF: [39, 39, 39, 39, 40, 40, 40, 40, 40, 40, 40, 40],
    tempRecentNormalF: [39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39],
    tempBand: "cool",
    tempPosition: 24,
    tempContext: "Cold tailwater temperatures usually keep fish steady but technical, with more precise feeding windows.",
    tempGuidance: "Small bugs, careful depth control, and a measured pace are usually better than covering lots of water quickly.",
    clarity: "5+ ft",
    clarityBand: "clear",
    clarityPosition: 94,
    clarityContext: "Very clear water makes fish easy to spook and rewards subtle presentations.",
    turbidityFnu: 2,
    turbidityBand: "clear",
    turbidityPosition: 6,
    turbidityRecentFnu: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    turbidityTrendLabel: "stable",
    turbidityContext: "Very clear water makes fish easy to spook and rewards subtle presentations.",
    turbidityGuidance: "Use fine tippet, longer leaders, and controlled drifts in the softest current lanes.",
    access: "Good",
    status: "excellent",
    bestTime: "10 AM - 3 PM",
    techniques: ["nymph", "wade", "dry-dropper"],
    hatches: ["Midges", "Mysis", "BWO"],
    summary: "Cold, clear, technical tailwater water just below Ruedi Dam. Strong option for anglers who want structure and precision."
  },
  {
    river: "Crystal River",
    section: "Carbondale Lower Reach",
    score: 64,
    flowCfs: 420,
    flowThresholds: { veryLow: 120, low: 220, primeLow: 260, primeHigh: 360, high: 520, veryHigh: 760 },
    flowBand: "pushy",
    flowPosition: 76,
    flowRecentCfs: [470, 465, 460, 454, 448, 442, 438, 432, 428, 424, 422, 420],
    flowTrendLabel: "falling",
    flowContext: "A touch heavy for delicate presentations, with better odds near bankside structure.",
    flowGuidance: "Best for short controlled wades and bigger bugs rather than finesse work.",
    tempF: 40,
    tempNormalF: 43,
    tempTrend7dF: -0.8,
    tempTrendLabel: "cooling",
    tempRecentF: [43, 43, 42, 42, 42, 41, 41, 41, 41, 40, 40, 40],
    tempRecentNormalF: [43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43],
    tempBand: "cold",
    tempPosition: 18,
    tempContext: "Cold water typically keeps trout glued to slower lies and shorter feeding bursts.",
    tempGuidance: "Fish slower, deeper, and with less expectation of chase eats.",
    clarity: "1-2 ft",
    clarityBand: "colored",
    clarityPosition: 30,
    clarityContext: "Reduced visibility favors streamers, darker bugs, and tight-to-cover drifts.",
    turbidityFnu: 38,
    turbidityBand: "dirty",
    turbidityPosition: 56,
    turbidityRecentFnu: [28, 29, 30, 31, 33, 34, 35, 36, 37, 37, 38, 38],
    turbidityTrendLabel: "rising",
    turbidityContext: "The river has enough suspended color to hide structure and push fish toward stronger silhouettes.",
    turbidityGuidance: "Use darker bugs, flash, and tighter targets when the water gets this dirty.",
    access: "Fair",
    status: "fair",
    bestTime: "Noon - 4 PM",
    techniques: ["streamer", "nymph", "wade"],
    hatches: ["Stonefly nymphs", "Midges"],
    summary: "Fishable but slightly colored. Streamers and heavier nymph rigs are the safer play than fine dry work."
  },
  {
    river: "Crystal River",
    section: "Redstone Upper Crystal",
    score: 72,
    flowCfs: 52,
    flowThresholds: { veryLow: 20, low: 35, primeLow: 45, primeHigh: 90, high: 160, veryHigh: 280 },
    flowBand: "ideal",
    flowPosition: 42,
    flowRecentCfs: [48, 48, 49, 49, 50, 50, 51, 51, 52, 52, 52, 52],
    flowTrendLabel: "stable",
    flowContext: "The upper Crystal here reads like a compact freestone with defined pockets, seams, and short feeding lanes.",
    flowGuidance: "Good for careful wading and tight presentations through plunge pockets, bends, and softer inside edges.",
    tempF: 38,
    tempNormalF: 37,
    tempTrend7dF: 0.4,
    tempTrendLabel: "steady",
    tempRecentF: [37, 37, 37, 37, 38, 38, 38, 38, 38, 38, 38, 38],
    tempRecentNormalF: [37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37],
    tempBand: "cold",
    tempPosition: 16,
    tempContext: "Cold upper-valley water often means shorter feeding windows and a stronger need to fish the softest current.",
    tempGuidance: "Small nymphs, precise drifts, and patience usually beat covering lots of water too quickly.",
    clarity: "4-5 ft",
    clarityBand: "clear",
    clarityPosition: 86,
    clarityContext: "The water is generally clear enough that trout get a long look at flies and movement.",
    turbidityFnu: 4,
    turbidityBand: "clear",
    turbidityPosition: 10,
    turbidityRecentFnu: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    turbidityTrendLabel: "stable",
    turbidityContext: "This reach usually fishes on the clear side, where stealth and clean line control matter.",
    turbidityGuidance: "Longer leaders and low-disturbance approaches help when the upper Crystal is this clear.",
    access: "Fair",
    status: "good",
    bestTime: "11 AM - 4 PM",
    techniques: ["nymph", "wade", "dry-dropper"],
    hatches: ["Midges", "Stonefly nymphs", "BWO"],
    summary: "A smaller, clearer upper Crystal option near Redstone where precision matters more than covering lots of water."
  },
  {
    river: "Colorado River",
    section: "South Canyon Wade Water",
    score: 71,
    flowCfs: 1540,
    flowThresholds: { veryLow: 700, low: 1000, primeLow: 1200, primeHigh: 1700, high: 2800, veryHigh: 4800 },
    flowBand: "pushy",
    flowPosition: 66,
    flowRecentCfs: [1450, 1460, 1470, 1485, 1490, 1505, 1510, 1525, 1530, 1535, 1540, 1540],
    flowTrendLabel: "rising",
    flowContext: "Current is moving with purpose. Wading windows exist, but the friendliest water is tight to soft shelves.",
    flowGuidance: "Good drift water, tougher beginner wading.",
    tempF: 46,
    tempNormalF: 44,
    tempTrend7dF: 1.7,
    tempTrendLabel: "warming",
    tempRecentF: [42, 42, 43, 43, 43, 44, 44, 45, 45, 45, 46, 46],
    tempRecentNormalF: [43, 43, 43, 43, 44, 44, 44, 44, 44, 44, 44, 44],
    tempBand: "steady",
    tempPosition: 48,
    tempContext: "This is often the point where fish begin to feed more consistently through the warmest part of the day.",
    tempGuidance: "Good window for indicator rigs and pockets that get a little sun.",
    clarity: "3 ft",
    clarityBand: "fishable",
    clarityPosition: 58,
    clarityContext: "Good working visibility for bigger nymph rigs and soft-edge searches.",
    turbidityFnu: 11,
    turbidityBand: "stained",
    turbidityPosition: 28,
    turbidityRecentFnu: [9, 9, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11],
    turbidityTrendLabel: "stable",
    turbidityContext: "Slightly tinted water helps hide some mistakes without making fish feel blind.",
    turbidityGuidance: "A touch of stain usually helps subsurface fishing and keeps the river approachable.",
    access: "Good",
    status: "good",
    bestTime: "12 PM - 5 PM",
    techniques: ["nymph", "wade", "streamer"],
    hatches: ["Midges", "BWO"],
    summary: "Decent wade option where side shelves hold softer current. Watch for afternoon gusts and rising push along the main channel."
  },
  {
    river: "Roaring Fork River",
    section: "Carbondale Confluence Zone",
    score: 68,
    flowCfs: 860,
    flowThresholds: { veryLow: 225, low: 325, primeLow: 425, primeHigh: 625, high: 900, veryHigh: 1500 },
    flowBand: "pushy",
    flowPosition: 72,
    flowRecentCfs: [840, 842, 844, 846, 848, 850, 852, 855, 856, 858, 860, 860],
    flowTrendLabel: "stable",
    flowContext: "The river has enough push to reward heavier rigs and structure-oriented casts.",
    flowGuidance: "Better for floats and targeted bank shots than broad easy wading.",
    tempF: 45,
    tempNormalF: 43,
    tempTrend7dF: 0.6,
    tempTrendLabel: "steady",
    tempRecentF: [43, 43, 43, 43, 44, 44, 44, 44, 45, 45, 45, 45],
    tempRecentNormalF: [42, 42, 42, 42, 43, 43, 43, 43, 43, 43, 43, 43],
    tempBand: "cool",
    tempPosition: 42,
    tempContext: "Trout are usually active enough to eat, but not yet in full high-energy mode.",
    tempGuidance: "Focus on defined feeding windows and slightly slower buckets.",
    clarity: "2 ft",
    clarityBand: "colored",
    clarityPosition: 38,
    clarityContext: "Visibility is fair but not clean, so stronger silhouettes and tighter targets help.",
    turbidityFnu: 22,
    turbidityBand: "stained",
    turbidityPosition: 42,
    turbidityRecentFnu: [18, 18, 19, 19, 20, 20, 21, 21, 21, 22, 22, 22],
    turbidityTrendLabel: "rising",
    turbidityContext: "This is stained but still readable water, where trout can still track bugs but get a bit more cover.",
    turbidityGuidance: "Good streamer and nymph color: visible enough to fish, colored enough to lean bigger.",
    access: "Good",
    status: "fair",
    bestTime: "1 PM - 6 PM",
    techniques: ["streamer", "float", "nymph"],
    hatches: ["Caddis", "Midges"],
    summary: "A workable bigger-water option with aggressive fish near structure, though visibility is a touch off for finesse presentations."
  },
  {
    river: "Roaring Fork River",
    section: "Emma Bridge Reach",
    score: 79,
    flowCfs: 340,
    flowThresholds: { veryLow: 120, low: 180, primeLow: 240, primeHigh: 420, high: 650, veryHigh: 1000 },
    flowBand: "ideal",
    flowPosition: 48,
    flowRecentCfs: [320, 322, 324, 327, 329, 331, 334, 336, 338, 339, 340, 340],
    flowTrendLabel: "stable",
    flowContext: "Healthy mid-valley Roaring Fork flow with enough push to define seams while keeping many wading lanes readable.",
    flowGuidance: "Good mix of riffle heads, softer buckets, and bank edges for anglers who move carefully and fish methodically.",
    tempF: 41,
    tempNormalF: 40,
    tempTrend7dF: 0.6,
    tempTrendLabel: "steady",
    tempRecentF: [40, 40, 40, 40, 40, 41, 41, 41, 41, 41, 41, 41],
    tempRecentNormalF: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
    tempBand: "cool",
    tempPosition: 28,
    tempContext: "Cold but fishable spring water usually means better feeding once the sun has been on the river for a while.",
    tempGuidance: "Late-morning to afternoon tends to be better than the first hour of daylight, especially with small nymphs and dries later.",
    clarity: "3-4 ft",
    clarityBand: "clear",
    clarityPosition: 76,
    turbidityFnu: 8,
    turbidityBand: "clear",
    turbidityPosition: 18,
    turbidityRecentFnu: [7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    turbidityTrendLabel: "stable",
    turbidityContext: "The river is clear enough for trout to inspect flies, but not so sterile that it feels empty.",
    turbidityGuidance: "Longer leaders and cleaner drifts help, though a little natural color still keeps the river approachable.",
    access: "Good",
    status: "good",
    bestTime: "11 AM - 5 PM",
    techniques: ["nymph", "wade", "dry-dropper"],
    hatches: ["Midges", "Caddis", "BWO"],
    summary: "A solid upper-middle Roaring Fork option with classic pocket water, seam lines, and better action once the day warms."
  }
];

let accessPoints = [];
let flowThresholdOverridesByPointId = new Map();

const generalWeather = {
  title: "Spring valley setup",
  airTempF: 58,
  wind: "8 mph SW",
  sky: "Partly cloudy",
  moonPhase: "Waxing crescent",
  moonIllumination: 0.22,
  moonTrend: "waxing",
  moonPhaseIndex: 1,
  sunrise: "7:01 AM",
  sunset: "7:28 PM",
  civilDawn: "6:33 AM",
  civilDusk: "7:56 PM",
  daylightDurationLabel: "12h 27m daylight",
  usableLightDurationLabel: "13h 23m with twilight",
  daylightRemainingLabel: "5h 14m until sunset",
  days: [
    { label: "Tue 3/24", icon: "partly", highF: 58, lowF: 34, precipIn: 0, dawnF: 29 },
    { label: "Wed 3/25", icon: "sunny", highF: 61, lowF: 36, precipIn: 0, dawnF: 31 },
    { label: "Thu 3/26", icon: "mostly", highF: 60, lowF: 35, precipIn: 0, dawnF: 30 },
    { label: "Fri 3/27", icon: "partly", highF: 57, lowF: 33, precipIn: 0, dawnF: 28 },
    { label: "Sat 3/28", icon: "cloudy", highF: 54, lowF: 32, precipIn: 0.08, dawnF: 27 }
  ],
  hourlyTrend: [
    { label: "3d 12a", tempF: 30 },
    { label: "3d 6a", tempF: 29 },
    { label: "3d 12p", tempF: 48 },
    { label: "3d 6p", tempF: 50 },
    { label: "2d 12a", tempF: 34 },
    { label: "2d 6a", tempF: 31 },
    { label: "2d 12p", tempF: 52 },
    { label: "2d 6p", tempF: 54 },
    { label: "Y 12a", tempF: 33 },
    { label: "Y 6a", tempF: 30 },
    { label: "Y 12p", tempF: 50 },
    { label: "Y 6p", tempF: 52 }
  ],
  warmestHourLabel: "3p",
  bestWindow: "Late morning to mid-afternoon",
  moonImpact: "Lower overnight light can help early fish feel comfortable in softer edges.",
  summary: "A mild afternoon with manageable wind usually helps keep trout active without making the river feel harsh."
};

const weatherLocation = {
  name: "Glenwood Springs",
  latitude: 39.5505,
  longitude: -107.3248
};

const LIVE_REFRESH_INTERVAL_MS = 30 * 60 * 1000;

const usgsParameterCodes = {
  temperature: "00010",
  flow: "00060",
  turbidity: "63680"
};

const mapCanvas = document.querySelector("#map-canvas");
const mapPanel = document.querySelector(".map-panel");
const mapDetailName = document.querySelector("#map-detail-name");
const mapDetailRiver = document.querySelector("#map-detail-river");
const mapDetailMeter = document.querySelector("#map-detail-meter");
const mapDetailScore = document.querySelector("#map-detail-score");
const mapDetailScoreBlock = document.querySelector(".map-detail__score");
const mapDetailMetrics = document.querySelector("#map-detail-metrics");
const mapDetailChips = document.querySelector("#map-detail-chips");
const mapDetailSummary = document.querySelector("#map-detail-summary");
const mapDetailClose = document.querySelector("#map-detail-close");
const weatherTitle = document.querySelector("#weather-title");
const weatherMoon = document.querySelector("#weather-moon");
const weatherMetrics = document.querySelector("#weather-metrics");
const weatherSummary = document.querySelector("#weather-summary");
const cameraMedia = document.querySelector("#camera-media");

const defaultCameraFeed = {
  id: null,
  label: "River camera",
  stationName: "Select a monitoring station",
  cameraPageUrl: null,
  usgsPageUrl: null,
  status: "no_camera_selected",
  fetchedAt: null,
  source: {
    provider: "USGS HIVIS",
    latestImageAt: null,
    timelapseGeneratedAt: null,
    ingestMinutes: 15,
    ingestPeriod: "daylight"
  },
  assets: {
    poster: null,
    latestStill: null,
    timelapse: null
  }
};

let activeAccessPointId = null;
let mapInstance = null;
let markerById = new Map();
let liveConditionOverridesByAccessPointId = new Map();
let specialStationDataByPointId = new Map();
let cameraFeed = { ...defaultCameraFeed };
let activeCameraFeedId = null;
let cameraSequenceTimer = null;
const specialDataSources = {
  "ruedi-reservoir": {
    label: "Ruedi Reservoir",
    sourceLabel: "USBR pool elevation",
    cachePath: "special-data-cache/ruedi-reservoir.json",
    fullPoolElevationFt: 7766
  }
};

function parseCsvRows(text) {
  const rows = [];
  let currentCell = "";
  let currentRow = [];
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    const nextCharacter = text[index + 1];

    if (character === "\"") {
      if (inQuotes && nextCharacter === "\"") {
        currentCell += "\"";
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (character === "," && !inQuotes) {
      currentRow.push(currentCell.trim());
      currentCell = "";
      continue;
    }

    if ((character === "\n" || character === "\r") && !inQuotes) {
      if (character === "\r" && nextCharacter === "\n") {
        index += 1;
      }

      currentRow.push(currentCell.trim());
      currentCell = "";

      if (currentRow.some((cell) => cell.length > 0)) {
        rows.push(currentRow);
      }

      currentRow = [];
      continue;
    }

    currentCell += character;
  }

  if (currentCell.length || currentRow.length) {
    currentRow.push(currentCell.trim());
    if (currentRow.some((cell) => cell.length > 0)) {
      rows.push(currentRow);
    }
  }

  if (rows.length < 2) {
    return [];
  }

  return rows;
}

function parseAccessPointsConfig(text) {
  const rows = parseCsvRows(text);
  if (!rows.length) {
    return [];
  }

  const header = rows[0];
  const expectedHeader = ["id", "name", "river", "section", "lat", "lng", "usgsSite", "accessType", "suitability", "note"];
  const extendedHeader = [...expectedHeader, "cameraFeedId"];
  const specialHeader = [...extendedHeader, "specialDataSource"];
  const headerMatchesBase = header.length === expectedHeader.length
      && expectedHeader.every((label, index) => header[index] === label);
  const headerMatchesExtended = header.length === extendedHeader.length
      && extendedHeader.every((label, index) => header[index] === label);
  const headerMatchesSpecial = header.length === specialHeader.length
      && specialHeader.every((label, index) => header[index] === label);

  if (!headerMatchesBase && !headerMatchesExtended && !headerMatchesSpecial) {
    throw new Error("Invalid access point CSV header.");
  }

  return rows.slice(1).map((parts, index) => {
    if (parts.length !== 10 && parts.length !== 11 && parts.length !== 12) {
      throw new Error(`Invalid access point config on row ${index + 2}: expected 10, 11, or 12 CSV fields.`);
    }

    const normalizedParts = [...parts];
    while (normalizedParts.length < 12) {
      normalizedParts.push("");
    }

    const [id, name, river, section, lat, lng, usgsSite, accessType, suitability, note, cameraFeedId, specialDataSource] = normalizedParts;
    const latitude = Number(lat);
    const longitude = Number(lng);
    const normalizedUsgsSite = normalizeUsgsSite(usgsSite);

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      throw new Error(`Invalid latitude/longitude on row ${index + 2}.`);
    }

    return {
      id,
      name,
      river,
      section,
      lat: latitude,
      lng: longitude,
      usgsSite: normalizedUsgsSite,
      accessType,
      suitability,
      note,
      cameraFeedId: String(cameraFeedId ?? "").trim(),
      specialDataSource: String(specialDataSource ?? "").trim()
    };
  });
}

function parseFlowThresholdsConfig(text) {
  const rows = parseCsvRows(text);
  if (!rows.length) {
    return new Map();
  }

  const header = rows[0];
  const expectedHeader = [
    "id",
    "name",
    "river",
    "section",
    "usgsSite",
    "veryLow",
    "low",
    "primeLow",
    "primeHigh",
    "high",
    "veryHigh",
    "notes"
  ];

  if (header.length !== expectedHeader.length || !expectedHeader.every((label, index) => header[index] === label)) {
    throw new Error("Invalid flow thresholds CSV header.");
  }

  return new Map(
    rows.slice(1)
      .filter((parts) => parts.some((part) => part.length > 0))
      .map((parts, index) => {
        if (parts.length !== expectedHeader.length) {
          throw new Error(`Invalid flow threshold config on row ${index + 2}: expected ${expectedHeader.length} CSV fields.`);
        }

        const [id, name, river, section, usgsSite, veryLow, low, primeLow, primeHigh, high, veryHigh, notes] = parts;
        const thresholds = [veryLow, low, primeLow, primeHigh, high, veryHigh].map((value) => Number(value));
        if (thresholds.some((value) => !Number.isFinite(value))) {
          throw new Error(`Invalid numeric flow thresholds on row ${index + 2}.`);
        }

        return [id, {
          id,
          name,
          river,
          section,
          usgsSite: normalizeUsgsSite(usgsSite),
          veryLow: thresholds[0],
          low: thresholds[1],
          primeLow: thresholds[2],
          primeHigh: thresholds[3],
          high: thresholds[4],
          veryHigh: thresholds[5],
          notes
        }];
      })
  );
}

async function loadAccessPointsConfig() {
  const response = await fetch("access-points.csv", { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Unable to load access-points.csv (${response.status}).`);
  }

  const text = await response.text();
  accessPoints = parseAccessPointsConfig(text);
}

async function loadFlowThresholdsConfig() {
  const response = await fetch("flow-thresholds.csv", { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Unable to load flow-thresholds.csv (${response.status}).`);
  }

  const text = await response.text();
  flowThresholdOverridesByPointId = parseFlowThresholdsConfig(text);
}

function statusClass(status) {
  return `status-${status}`;
}

function normalizeUsgsSite(site) {
  const trimmed = String(site ?? "").trim();
  if (!trimmed) {
    return "";
  }

  if (/^\d{1,8}$/.test(trimmed)) {
    return trimmed.padStart(8, "0");
  }

  return trimmed;
}

function usgsStationLabel(site) {
  return `USGS ${site}`;
}

function getAccessPointsForUsgsSite(site) {
  return accessPoints.filter((point) => point.usgsSite === site);
}

function getFlowThresholdsForPoint(point, baseCondition) {
  const override = flowThresholdOverridesByPointId.get(point.id);
  if (!override) {
    return baseCondition?.flowThresholds ?? null;
  }

  return {
    ...(baseCondition?.flowThresholds ?? {}),
    veryLow: override.veryLow,
    low: override.low,
    primeLow: override.primeLow,
    primeHigh: override.primeHigh,
    high: override.high,
    veryHigh: override.veryHigh
  };
}

function setLiveOverridesForSite(site, updater) {
  getAccessPointsForUsgsSite(site).forEach((point) => {
    const baseCondition = conditions.find((item) => item.section === point.section);
    if (!baseCondition) {
      return;
    }

    const existingOverride = liveConditionOverridesByAccessPointId.get(point.id) ?? {};
    liveConditionOverridesByAccessPointId.set(point.id, updater(baseCondition, existingOverride, point));
  });
}

function uniqueUsgsSites() {
  return [...new Set(accessPoints.map((point) => point.usgsSite).filter(Boolean))];
}

function setMetricUnavailableForSite(site, metric) {
  const config = {
    temp: {
      flag: "liveTempUnavailable",
      source: "liveTempSource",
      sourceText: `${usgsStationLabel(site)} • No temperature data`
    },
    flow: {
      flag: "liveFlowUnavailable",
      source: "liveFlowSource",
      sourceText: `${usgsStationLabel(site)} • No flow data`
    },
    turbidity: {
      flag: "liveTurbidityUnavailable",
      source: "liveTurbiditySource",
      sourceText: `${usgsStationLabel(site)} • No turbidity data`
    }
  };

  const metricConfig = config[metric];
  if (!metricConfig) {
    return;
  }

  setLiveOverridesForSite(site, (_baseCondition, existingOverride) => ({
    ...existingOverride,
    [metricConfig.flag]: true,
    [metricConfig.source]: metricConfig.sourceText
  }));
}

function statusLabel(status) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function metricMarkup(label, value) {
  return `
    <div class="metric">
      <p class="metric-label">${label}</p>
      <strong>${value}</strong>
    </div>
  `;
}

function specialStationMetricMarkup(point) {
  const extra = specialStationDataByPointId.get(point.id);
  if (!point?.specialDataSource) {
    return "";
  }

  if (!extra) {
    return `
      <div class="metric metric--reservoir">
        <p class="metric-label">Reservoir Level</p>
        <strong>Loading</strong>
        <p class="metric__note">Waiting for buffered reservoir data</p>
      </div>
    `;
  }

  if (extra.unavailable) {
    return `
      <div class="metric metric--reservoir">
        <p class="metric-label">Reservoir Level</p>
        <strong>No data</strong>
        <p class="metric__note">${extra.sourceLabel}</p>
      </div>
    `;
  }

  const belowFullText = Number.isFinite(extra.belowFullPoolFt)
    ? `${extra.belowFullPoolFt.toFixed(1)} ft below full pool`
    : "Full-pool comparison unavailable";
  const trendMarkup = reservoirTrendMarkup(extra);

  return `
    <div class="metric metric--reservoir">
      <p class="metric-label">Reservoir Level</p>
      <strong>${extra.elevationFt.toFixed(2)} ft</strong>
      <p class="metric__note">${belowFullText}</p>
      <p class="metric__note">${extra.sourceLabel} - ${extra.observedAtLabel}</p>
    </div>
    ${trendMarkup}
  `;
}

function reservoirTrendMarkup(extra) {
  const months = Array.isArray(extra.recentMonthlyAverages) ? [...extra.recentMonthlyAverages].slice(0, 6).reverse() : [];
  if (!months.length || !Number.isFinite(extra.elevationFt)) {
    return "";
  }

  const fullPoolElevationFt = Number(extra.fullPoolElevationFt);
  const dataValues = months.map((month) => Number(month.averageElevationFt)).filter(Number.isFinite);
  dataValues.push(Number(extra.elevationFt));
  const dataMin = Math.min(...dataValues);
  const dataMax = Math.max(...dataValues);
  const dataRange = Math.max(1, dataMax - dataMin);
  const padding = Math.max(4, dataRange * 0.35);
  let minTick = Math.floor((dataMin - padding) / 10) * 10;
  let maxTick = Math.ceil((dataMax + padding) / 10) * 10;
  if (Number.isFinite(fullPoolElevationFt)) {
    maxTick = Math.max(maxTick, Math.ceil(fullPoolElevationFt / 10) * 10);
  }
  if (maxTick - minTick < 20) {
    minTick -= 10;
    maxTick += 10;
  }
  const minValue = minTick;
  const maxValue = maxTick;
  const range = maxValue - minValue || 1;
  const chartLeft = 42;
  const chartRight = 322;
  const plotTop = 10;
  const plotBottom = 10;
  const width = chartRight - chartLeft;
  const height = 120;
  const plotHeight = height - plotTop - plotBottom;
  const xStep = months.length > 1 ? width / months.length : width;
  const yPositionForValue = (value) => plotTop + (plotHeight - ((Number(value) - minValue) / range) * plotHeight);
  const yTicks = [];
  for (let tick = minTick; tick <= maxTick; tick += 10) {
    yTicks.push({
      value: tick,
      y: yPositionForValue(tick)
    });
  }

  const monthlyPoints = months.map((month, index) => {
    const x = chartLeft + index * xStep;
    const y = yPositionForValue(month.averageElevationFt);
    return { x, y, label: month.monthLabel, value: Number(month.averageElevationFt) };
  });
  const latestPoint = {
    x: chartRight,
    y: yPositionForValue(extra.elevationFt)
  };
  const fullPoolY = Number.isFinite(fullPoolElevationFt) ? yPositionForValue(fullPoolElevationFt) : null;
  const linePath = [...monthlyPoints, latestPoint]
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ");
  const monthLabels = months.map((month) => `
    <span>${month.monthLabel.replace(" 20", " ")}</span>
  `).join("");

  return `
      <div class="reservoir-trend">
        <div class="reservoir-trend__header">
          <span class="metric-label">Last 6 months</span>
          <strong>Monthly avg + latest</strong>
        </div>
      <svg class="reservoir-trend__chart" viewBox="0 0 332 ${height}" aria-label="Ruedi Reservoir monthly average elevation with latest measurement">
        ${yTicks.map((tick) => `
          <line class="reservoir-trend__grid-line" x1="${chartLeft}" y1="${tick.y.toFixed(1)}" x2="${chartRight}" y2="${tick.y.toFixed(1)}" />
          <text class="reservoir-trend__y-label" x="${chartLeft - 8}" y="${(tick.y + 4).toFixed(1)}">${tick.value}</text>
        `).join("")}
          ${Number.isFinite(fullPoolY) ? `
            <line class="reservoir-trend__full-line" x1="${chartLeft}" y1="${fullPoolY.toFixed(1)}" x2="${chartRight}" y2="${fullPoolY.toFixed(1)}" />
            <text class="reservoir-trend__full-axis-label" x="${chartLeft - 8}" y="${(fullPoolY + 4).toFixed(1)}">${fullPoolElevationFt.toFixed(0)}</text>
            <text class="reservoir-trend__full-label" x="${chartRight + 6}" y="${(fullPoolY + 3).toFixed(1)}">FULL</text>
          ` : ""}
          <path class="reservoir-trend__line" d="${linePath}" />
        ${monthlyPoints.map((point) => `<circle class="reservoir-trend__point" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="3.5" />`).join("")}
        <circle class="reservoir-trend__latest" cx="${latestPoint.x.toFixed(1)}" cy="${latestPoint.y.toFixed(1)}" r="5" />
      </svg>
      <div class="reservoir-trend__labels">${monthLabels}<span>Latest</span></div>
    </div>
  `;
}

function weatherIconMarkup(type) {
  const icons = {
    sunny: `
      <svg viewBox="0 0 72 72" aria-hidden="true">
        <g class="weather-icon weather-icon--sun">
          <circle cx="36" cy="36" r="13"></circle>
          <g>
            <line x1="36" y1="6" x2="36" y2="18"></line>
            <line x1="36" y1="54" x2="36" y2="66"></line>
            <line x1="6" y1="36" x2="18" y2="36"></line>
            <line x1="54" y1="36" x2="66" y2="36"></line>
            <line x1="14.8" y1="14.8" x2="23.3" y2="23.3"></line>
            <line x1="48.7" y1="48.7" x2="57.2" y2="57.2"></line>
            <line x1="14.8" y1="57.2" x2="23.3" y2="48.7"></line>
            <line x1="48.7" y1="23.3" x2="57.2" y2="14.8"></line>
          </g>
        </g>
      </svg>
    `,
    mostly: `
      <svg viewBox="0 0 72 72" aria-hidden="true">
        <g class="weather-icon weather-icon--sun">
          <circle cx="44" cy="27" r="12"></circle>
          <g>
            <line x1="44" y1="7" x2="44" y2="16"></line>
            <line x1="44" y1="38" x2="44" y2="47"></line>
            <line x1="24" y1="27" x2="33" y2="27"></line>
            <line x1="55" y1="27" x2="64" y2="27"></line>
          </g>
        </g>
        <g class="weather-icon weather-icon--cloud">
          <path d="M22 50h26a8 8 0 0 0 0-16 12 12 0 0 0-22.8-3.8A9 9 0 0 0 22 50Z"></path>
        </g>
      </svg>
    `,
    cloudy: `
      <svg viewBox="0 0 72 72" aria-hidden="true">
        <g class="weather-icon weather-icon--cloud">
          <path d="M18 50h32a9 9 0 0 0 0-18 13 13 0 0 0-24.5-4.2A10 10 0 0 0 18 50Z"></path>
        </g>
      </svg>
    `,
    partly: `
      <svg viewBox="0 0 72 72" aria-hidden="true">
        <g class="weather-icon weather-icon--sun">
          <circle cx="44" cy="25" r="12"></circle>
          <g>
            <line x1="44" y1="6" x2="44" y2="15"></line>
            <line x1="44" y1="35" x2="44" y2="44"></line>
            <line x1="25" y1="25" x2="34" y2="25"></line>
            <line x1="54" y1="25" x2="63" y2="25"></line>
          </g>
        </g>
        <g class="weather-icon weather-icon--cloud">
          <path d="M16 51h30a8 8 0 0 0 0-16 11 11 0 0 0-20.8-3.4A9 9 0 0 0 16 51Z"></path>
        </g>
      </svg>
    `
  };

  return icons[type] ?? icons.partly;
}

function compactToggleMarkup(text, label = "?") {
  return "";
}

function moonPhasePath(illumination, trend) {
  const litWidth = Math.max(0.08, Math.min(illumination, 0.98)) * 36;

  if (trend === "waning") {
    return `M 18 0 A 18 18 0 1 0 18 36 A ${litWidth.toFixed(2)} 18 0 1 1 18 0 Z`;
  }

  return `M 18 0 A 18 18 0 1 1 18 36 A ${litWidth.toFixed(2)} 18 0 1 0 18 0 Z`;
}

function moonCycleMarkup(weather) {
  const civilDawnMs = weather.civilDawnIso ? new Date(weather.civilDawnIso).getTime() : null;
  const sunriseMs = weather.sunriseIso ? new Date(weather.sunriseIso).getTime() : null;
  const sunsetMs = weather.sunsetIso ? new Date(weather.sunsetIso).getTime() : null;
  const civilDuskMs = weather.civilDuskIso ? new Date(weather.civilDuskIso).getTime() : null;
  const nowMs = Date.now();
  const dayReference = sunriseMs ?? civilDawnMs ?? nowMs;
  const dayStart = new Date(dayReference);
  dayStart.setHours(0, 0, 0, 0);
  const dayStartMs = dayStart.getTime();
  const daySpan = 24 * 60 * 60 * 1000;
  const sunrisePct = sunriseMs ? clamp(((sunriseMs - dayStartMs) / daySpan) * 100, 0, 100) : 0;
  const sunsetPct = sunsetMs ? clamp(((sunsetMs - dayStartMs) / daySpan) * 100, 0, 100) : 100;
  const civilDawnPct = civilDawnMs ? clamp(((civilDawnMs - dayStartMs) / daySpan) * 100, 0, 100) : sunrisePct;
  const civilDuskPct = civilDuskMs ? clamp(((civilDuskMs - dayStartMs) / daySpan) * 100, 0, 100) : sunsetPct;
  const hourBlockCount = 24;
  const elapsedPct = clamp(((nowMs - dayStartMs) / daySpan) * 100, 0, 100);
  const daylightSpan = sunriseMs && sunsetMs ? Math.max(1, sunsetMs - sunriseMs) : 1;
  const remainingDaylightPct = sunriseMs && sunsetMs
    ? nowMs < sunriseMs
      ? 100
      : nowMs > sunsetMs
        ? 0
        : clamp(((sunsetMs - nowMs) / daylightSpan) * 100, 0, 100)
    : 0;
  const nowPct = elapsedPct;

  return `
    <div class="moon-strip__panel">
      <article class="moon-strip__tile moon-strip__tile--phase">
        <div class="moon-strip__phase-copy">
          <p class="panel-label">Current Moon</p>
          <strong>${weather.moonPhase}</strong>
          <span>${Math.round(weather.moonIllumination * 100)}% illuminated</span>
        </div>
        <svg class="moon-strip__orb" viewBox="0 0 36 36" aria-label="${weather.moonPhase}">
          <circle class="moon-strip__orb-base" cx="18" cy="18" r="18"></circle>
          <path class="moon-strip__orb-light" d="${moonPhasePath(weather.moonIllumination, weather.moonTrend)}"></path>
        </svg>
      </article>

      <article class="moon-strip__tile moon-strip__tile--sun">
        <div class="moon-strip__light-graphic">
            <div class="moon-strip__light-marker" style="left:${sunrisePct.toFixed(1)}%">
              <span>Sunrise</span>
              <strong>${weather.sunrise}</strong>
            </div>
              <div class="moon-strip__light-marker" style="left:${sunsetPct.toFixed(1)}%">
                <span>Sunset</span>
                <strong>${weather.sunset}</strong>
              </div>
            <div class="moon-strip__light-bar" style="--hour-count:${hourBlockCount}; --remaining-pct:${remainingDaylightPct.toFixed(1)}%; --elapsed-pct:${elapsedPct.toFixed(1)}%; --now-pct:${nowPct.toFixed(1)}%; --civil-dawn-pct:${civilDawnPct.toFixed(1)}%; --civil-dusk-pct:${civilDuskPct.toFixed(1)}%; --sunrise-pct:${sunrisePct.toFixed(1)}%; --sunset-pct:${sunsetPct.toFixed(1)}%;">
              <div class="moon-strip__light-grid"></div>
              <div class="moon-strip__light-window" aria-hidden="true"></div>
              <div class="moon-strip__light-fill" aria-hidden="true"></div>
              <div class="moon-strip__light-now" aria-hidden="true"></div>
              <div class="moon-strip__light-line moon-strip__light-line--sunrise" style="left:${sunrisePct.toFixed(1)}%"></div>
              <div class="moon-strip__light-line moon-strip__light-line--sunset" style="left:${sunsetPct.toFixed(1)}%"></div>
            </div>
          <div class="moon-strip__light-footer">
            <span>${weather.civilDawn} first light</span>
            <strong>${weather.daylightRemainingLabel}</strong>
            <span>${weather.civilDusk} last light</span>
          </div>
        </div>
      </article>
    </div>
  `;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function cardinalDirection(degrees) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const normalized = ((degrees % 360) + 360) % 360;
  return directions[Math.round(normalized / 45) % directions.length];
}

function weatherCodeDetails(code, isDay = 1) {
  if (code === 0) {
    return {
      label: "Clear",
      icon: "sunny"
    };
  }

  if (code === 1 || code === 2) {
    return {
      label: code === 1 ? "Mostly sunny" : "Partly cloudy",
      icon: "partly"
    };
  }

  if (code === 3) {
    return {
      label: "Cloudy",
      icon: "cloudy"
    };
  }

  if ([45, 48].includes(code)) {
    return {
      label: "Foggy",
      icon: isDay ? "cloudy" : "cloudy"
    };
  }

  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
    return {
      label: "Showers",
      icon: "cloudy"
    };
  }

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return {
      label: "Snow",
      icon: "cloudy"
    };
  }

  if ([95, 96, 99].includes(code)) {
    return {
      label: "Storms",
      icon: "cloudy"
    };
  }

  return {
    label: "Mixed sky",
    icon: isDay ? "mostly" : "cloudy"
  };
}

function buildAreaPath(highs, lows, width, height, minValue, maxValue) {
  const xStep = highs.length === 1 ? 0 : width / (highs.length - 1);
  const yRange = maxValue - minValue || 1;
  const upper = highs.map((value, index) => {
    const x = index * xStep;
    const y = height - ((value - minValue) / yRange) * height;
    return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
  });
  const lower = lows
    .map((value, index) => {
      const x = width - index * xStep;
      const y = height - ((value - minValue) / yRange) * height;
      return `L ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");

  return `${upper.join(" ")} ${lower} Z`;
}

function celsiusToFahrenheit(value) {
  return (value * 9) / 5 + 32;
}

function roundToTenths(value) {
  return Math.round(value * 10) / 10;
}

function formatShortObservedAt(dateTime) {
  return new Date(dateTime).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function temperatureBandFromF(tempF) {
  if (tempF < 40) {
    return "cold";
  }
  if (tempF < 48) {
    return "cool";
  }
  if (tempF < 62) {
    return "steady";
  }
  return "warm";
}

function temperaturePositionFromF(tempF) {
  return clamp(((tempF - 32) / (68 - 32)) * 100, 0, 100);
}

function temperatureTrendLabelFromDelta(deltaF) {
  if (deltaF > 1) {
    return "warming";
  }
  if (deltaF < -1) {
    return "cooling";
  }
  return "steady";
}

function downsampleSeries(values, count) {
  if (values.length <= count) {
    return values.slice();
  }

  return Array.from({ length: count }, (_, index) => {
    const position = Math.round((index / (count - 1)) * (values.length - 1));
    return values[position];
  });
}

function buildTempContextFromBand(tempBand) {
  const contexts = {
    cold: "Near-freezing water usually keeps trout alive but sluggish, tight to slower lies, and feeding in short windows.",
    cool: "Cool water often means activity builds slowly and improves with the warmest part of the day.",
    steady: "This is a productive range where trout often feed more consistently through midday.",
    warm: "Warm water can become stressful for trout, so it deserves more caution as temperatures rise."
  };

  return contexts[tempBand] ?? contexts.cool;
}

function buildTempGuidanceFromBandAndTrend(tempBand, trendLabel) {
  const trendWord = trendLabel === "warming" ? "warming" : trendLabel === "cooling" ? "cooling" : "holding steady";
  const guidance = {
    cold: `Water is ${trendWord}. Focus on later-day windows, softer current, and precise drifts rather than chase behavior.`,
    cool: `Water is ${trendWord}. Late morning into afternoon should be the friendliest window.`,
    steady: `Water is ${trendWord}. Expect the best consistency once the sun has been on the river for a while.`,
    warm: `Water is ${trendWord}. Fish earlier and keep an eye on continued warming through the day.`
  };

  return guidance[tempBand] ?? guidance.cool;
}

function flowBandFromCfs(flowCfs, thresholds) {
  if (!thresholds) {
    return "ideal";
  }

  if (flowCfs < thresholds.low) {
    return "low";
  }
  if (flowCfs <= thresholds.primeHigh) {
    return "ideal";
  }
  if (flowCfs <= thresholds.high) {
    return "pushy";
  }
  return "blown";
}

function flowPositionFromCfs(flowCfs, thresholds) {
  if (!thresholds) {
    return 50;
  }

  const stops = [
    { value: thresholds.veryLow, position: 8 },
    { value: thresholds.low, position: 24 },
    { value: thresholds.primeLow, position: 38 },
    { value: thresholds.primeHigh, position: 56 },
    { value: thresholds.high, position: 78 },
    { value: thresholds.veryHigh, position: 96 }
  ];

  if (flowCfs <= stops[0].value) {
    return stops[0].position;
  }

  for (let index = 1; index < stops.length; index += 1) {
    const previous = stops[index - 1];
    const next = stops[index];

    if (flowCfs <= next.value) {
      const ratio = (flowCfs - previous.value) / (next.value - previous.value || 1);
      return Number((previous.position + ratio * (next.position - previous.position)).toFixed(1));
    }
  }

  return 98;
}

function flowTrendLabelFromDelta(delta) {
  if (delta > 20) {
    return "rising";
  }
  if (delta < -20) {
    return "falling";
  }
  return "stable";
}

function buildFlowContextFromBand(flowBand) {
  const contexts = {
    low: "Lean water with more exposed structure and more obvious soft slots.",
    ideal: "Balanced current that usually gives anglers enough push without crowding the softer holding water.",
    pushy: "More force in the main current, so the best looks shift toward slower edges and sheltered seams.",
    blown: "Heavy water that can crowd fish to the margins and make casual wading feel unrealistic."
  };

  return contexts[flowBand] ?? contexts.ideal;
}

function buildFlowGuidanceFromBandAndTrend(flowBand, trendLabel) {
  const guidance = {
    low: {
      rising: "Still on the lean side, but new water is starting to soften the river and cover structure.",
      stable: "Good for picking apart visible structure and easy inside buckets.",
      falling: "Water is slipping away from mid-river lanes, so target the deepest buckets."
    },
    ideal: {
      rising: "Healthy volume with a little extra push. Cover seams, banks, and transitions.",
      stable: "This is the comfortable middle: enough water to move fish, not so much that the whole river feels pushy.",
      falling: "Still in the good zone, with softer edges opening up as the river eases back."
    },
    pushy: {
      rising: "Current is building, so the easiest wading fades and fish tuck tighter to banks and structure.",
      stable: "Better for confident positioning than casual wading. Focus on softer inside water.",
      falling: "Still moving with authority, but the river is beginning to give back a few more edges."
    },
    blown: {
      rising: "Big water that is still climbing. Treat it like a margin game, not a broad wade day.",
      stable: "Heavy current throughout the reach. Best for boats or tight bank access.",
      falling: "Still big, but the river is backing off enough that edge water can start to organize."
    }
  };

  return guidance[flowBand]?.[trendLabel] ?? guidance[flowBand]?.stable ?? "";
}

function turbidityBandFromFnu(value) {
  if (value < 10) {
    return "clear";
  }
  if (value < 30) {
    return "stained";
  }
  if (value < 100) {
    return "dirty";
  }
  return "chocolate";
}

function turbidityPositionFromFnu(value) {
  const stops = [
    { value: 0, position: 6 },
    { value: 10, position: 24 },
    { value: 30, position: 46 },
    { value: 100, position: 74 },
    { value: 140, position: 96 }
  ];

  if (value <= stops[0].value) {
    return stops[0].position;
  }

  for (let index = 1; index < stops.length; index += 1) {
    const previous = stops[index - 1];
    const next = stops[index];

    if (value <= next.value) {
      const ratio = (value - previous.value) / (next.value - previous.value || 1);
      return Number((previous.position + ratio * (next.position - previous.position)).toFixed(1));
    }
  }

  return 98;
}

function turbidityTrendLabelFromDelta(delta) {
  if (delta > 8) {
    return "muddying";
  }
  if (delta < -8) {
    return "clearing";
  }
  return "holding";
}

function buildTurbidityContextFromBand(band) {
  const contexts = {
    clear: "Crystal-clear water makes trout more visual and more selective.",
    stained: "A light stain gives fish some comfort while keeping the river readable.",
    dirty: "Dirty water narrows the effective feeding lane and rewards stronger profiles.",
    chocolate: "Chocolate-milk water is mostly a blind presentation game, if it is fishable at all."
  };

  return contexts[band] ?? contexts.stained;
}

function buildTurbidityGuidanceFromBandAndTrend(band, trendLabel) {
  const guidance = {
    clear: {
      muddying: "Still clear, but adding a little color. Good time to fish before the river muddies more.",
      holding: "Clear water rewards clean drifts, longer leaders, and lower-profile bugs.",
      clearing: "Clearing water often sharpens visibility quickly, so fish may inspect more closely."
    },
    stained: {
      muddying: "Nice fishing stain if it holds here. Fish can still see, and they usually feel covered.",
      holding: "This is a friendly stain level for many anglers: visible, but forgiving.",
      clearing: "The river is cleaning up, which usually improves visibility with each day."
    },
    dirty: {
      muddying: "The river is getting dirtier, so shorten the leash and throw stronger silhouettes.",
      holding: "Dirty but workable in tight lanes, side seams, and soft bank water.",
      clearing: "Still dirty, but the river is beginning to organize and become easier to read."
    },
    chocolate: {
      muddying: "Visibility is collapsing fast. This is edging into full chocolate milk.",
      holding: "Chocolate-milk conditions. Most fishable shots are very close and very loud.",
      clearing: "Still muddy, but worth watching for when edges begin to clear first."
    }
  };

  return guidance[band]?.[trendLabel] ?? guidance[band]?.stable ?? "";
}

async function loadLiveUsgsWaterTemperature() {
  const params = new URLSearchParams({
    format: "json",
    sites: usgsStation.site,
    parameterCd: usgsStation.temperatureParameterCode,
    siteStatus: "all",
    period: "P7D"
  });

  const response = await fetch(`https://waterservices.usgs.gov/nwis/iv/?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`USGS request failed with ${response.status}`);
  }

  const payload = await response.json();
  const series = payload?.value?.timeSeries?.find((entry) =>
    entry.variable?.variableCode?.some((code) => code.value === usgsStation.temperatureParameterCode)
  );

  const values = series?.values?.[0]?.value ?? [];
  if (!values.length) {
    throw new Error("USGS response did not include water temperature values");
  }

  const temperatureSeriesF = values
    .map((entry) => ({
      valueF: roundToTenths(celsiusToFahrenheit(Number(entry.value))),
      dateTime: entry.dateTime
    }))
    .filter((entry) => Number.isFinite(entry.valueF));

  if (!temperatureSeriesF.length) {
    throw new Error("USGS water temperature series could not be parsed");
  }

  const current = temperatureSeriesF[temperatureSeriesF.length - 1];
  const allValuesF = temperatureSeriesF.map((entry) => entry.valueF);
  const recentThreeDays = temperatureSeriesF.filter(
    (entry) => new Date(entry.dateTime).getTime() >= new Date(current.dateTime).getTime() - 3 * 24 * 60 * 60 * 1000
  );
  const sampledSeries = downsampleSeries(recentThreeDays.map((entry) => entry.valueF), 36);
  const trendDeltaF = roundToTenths(allValuesF[allValuesF.length - 1] - allValuesF[0]);
  const trendLabel = temperatureTrendLabelFromDelta(trendDeltaF);
  const tempBand = temperatureBandFromF(current.valueF);
  const targetCondition = conditions.find(
    (item) => item.river === usgsStation.river && item.section === usgsStation.section
  );

  if (!targetCondition) {
    return;
  }

  targetCondition.tempF = Math.round(current.valueF);
  targetCondition.tempRecentF = sampledSeries.map((value) => roundToTenths(value));
  targetCondition.tempTrend7dF = trendDeltaF;
  targetCondition.tempTrendLabel = trendLabel;
  targetCondition.tempBand = tempBand;
  targetCondition.tempPosition = temperaturePositionFromF(current.valueF);
  targetCondition.tempContext = buildTempContextFromBand(tempBand);
  targetCondition.tempGuidance = buildTempGuidanceFromBandAndTrend(tempBand, trendLabel);
  targetCondition.liveTempSource = `${usgsStation.label} • ${formatShortObservedAt(current.dateTime)}`;
}

async function loadLiveUsgsFlow() {
  const params = new URLSearchParams({
    format: "json",
    sites: usgsStation.site,
    parameterCd: usgsStation.flowParameterCode,
    siteStatus: "all",
    period: "P7D"
  });

  const response = await fetch(`https://waterservices.usgs.gov/nwis/iv/?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`USGS request failed with ${response.status}`);
  }

  const payload = await response.json();
  const series = payload?.value?.timeSeries?.find((entry) =>
    entry.variable?.variableCode?.some((code) => code.value === usgsStation.flowParameterCode)
  );

  const values = series?.values?.[0]?.value ?? [];
  if (!values.length) {
    throw new Error("USGS response did not include discharge values");
  }

  const flowSeries = values
    .map((entry) => ({
      valueCfs: Number(entry.value),
      dateTime: entry.dateTime
    }))
    .filter((entry) => Number.isFinite(entry.valueCfs));

  if (!flowSeries.length) {
    throw new Error("USGS discharge series could not be parsed");
  }

  const current = flowSeries[flowSeries.length - 1];
  const recentThreeDays = flowSeries.filter(
    (entry) => new Date(entry.dateTime).getTime() >= new Date(current.dateTime).getTime() - 3 * 24 * 60 * 60 * 1000
  );
  const sampledSeries = downsampleSeries(recentThreeDays.map((entry) => entry.valueCfs), 36);
  const windowDelta = Math.round(sampledSeries[sampledSeries.length - 1] - sampledSeries[0]);
  const targetCondition = conditions.find(
    (item) => item.river === usgsStation.river && item.section === usgsStation.section
  );

  if (!targetCondition) {
    return;
  }

  const thresholds = targetCondition.flowThresholds;
  const flowBand = flowBandFromCfs(current.valueCfs, thresholds);
  const trendLabel = flowTrendLabelFromDelta(windowDelta);

  targetCondition.flowCfs = Math.round(current.valueCfs);
  targetCondition.flowRecentCfs = sampledSeries.map((value) => Math.round(value));
  targetCondition.flowTrendLabel = trendLabel;
  targetCondition.flowBand = flowBand;
  targetCondition.flowPosition = flowPositionFromCfs(current.valueCfs, thresholds);
  targetCondition.flowContext = buildFlowContextFromBand(flowBand);
  targetCondition.flowGuidance = buildFlowGuidanceFromBandAndTrend(flowBand, trendLabel);
  targetCondition.liveFlowSource = `${usgsStation.label} • ${formatShortObservedAt(current.dateTime)}`;
}

async function loadLiveUsgsTurbidity() {
  const params = new URLSearchParams({
    format: "json",
    sites: usgsStation.site,
    parameterCd: usgsStation.turbidityParameterCode,
    siteStatus: "all",
    period: "P7D"
  });

  const response = await fetch(`https://waterservices.usgs.gov/nwis/iv/?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`USGS request failed with ${response.status}`);
  }

  const payload = await response.json();
  const series = payload?.value?.timeSeries?.find((entry) =>
    entry.variable?.variableCode?.some((code) => code.value === usgsStation.turbidityParameterCode)
  );

  const values = series?.values?.[0]?.value ?? [];
  if (!values.length) {
    throw new Error("USGS response did not include turbidity values");
  }

  const turbiditySeries = values
    .map((entry) => ({
      valueFnu: roundToTenths(Number(entry.value)),
      dateTime: entry.dateTime
    }))
    .filter((entry) => Number.isFinite(entry.valueFnu));

  if (!turbiditySeries.length) {
    throw new Error("USGS turbidity series could not be parsed");
  }

  const current = turbiditySeries[turbiditySeries.length - 1];
  const recentThreeDays = turbiditySeries.filter(
    (entry) => new Date(entry.dateTime).getTime() >= new Date(current.dateTime).getTime() - 3 * 24 * 60 * 60 * 1000
  );
  const sampledSeries = downsampleSeries(recentThreeDays.map((entry) => entry.valueFnu), 36);
  const windowDelta = roundToTenths(sampledSeries[sampledSeries.length - 1] - sampledSeries[0]);
  const targetCondition = conditions.find(
    (item) => item.river === usgsStation.river && item.section === usgsStation.section
  );

  if (!targetCondition) {
    return;
  }

  const band = turbidityBandFromFnu(current.valueFnu);
  const trendLabel = turbidityTrendLabelFromDelta(windowDelta);

  targetCondition.turbidityFnu = roundToTenths(current.valueFnu);
  targetCondition.turbidityRecentFnu = sampledSeries.map((value) => roundToTenths(value));
  targetCondition.turbidityTrendLabel = trendLabel;
  targetCondition.turbidityBand = band;
  targetCondition.turbidityPosition = turbidityPositionFromFnu(current.valueFnu);
  targetCondition.turbidityContext = buildTurbidityContextFromBand(band);
  targetCondition.turbidityGuidance = buildTurbidityGuidanceFromBandAndTrend(band, trendLabel);
  targetCondition.liveTurbiditySource = `${usgsStation.label} • ${formatShortObservedAt(current.dateTime)}`;
}

async function loadLiveUsgsWaterTemperature(site) {
  const params = new URLSearchParams({
    format: "json",
    sites: site,
    parameterCd: usgsParameterCodes.temperature,
    siteStatus: "all",
    period: "P7D"
  });

  const response = await fetch(`https://waterservices.usgs.gov/nwis/iv/?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`USGS request failed with ${response.status}`);
  }

  const payload = await response.json();
  const series = payload?.value?.timeSeries?.find((entry) =>
    entry.variable?.variableCode?.some((code) => code.value === usgsParameterCodes.temperature)
  );

  const values = series?.values?.[0]?.value ?? [];
  if (!values.length) {
    throw new Error("USGS response did not include water temperature values");
  }

  const temperatureSeriesF = values
    .map((entry) => ({
      valueF: roundToTenths(celsiusToFahrenheit(Number(entry.value))),
      dateTime: entry.dateTime
    }))
    .filter((entry) => Number.isFinite(entry.valueF));

  if (!temperatureSeriesF.length) {
    throw new Error("USGS water temperature series could not be parsed");
  }

  const current = temperatureSeriesF[temperatureSeriesF.length - 1];
  const allValuesF = temperatureSeriesF.map((entry) => entry.valueF);
  const recentThreeDays = temperatureSeriesF.filter(
    (entry) => new Date(entry.dateTime).getTime() >= new Date(current.dateTime).getTime() - 3 * 24 * 60 * 60 * 1000
  );
  const sampledSeries = downsampleSeries(recentThreeDays.map((entry) => entry.valueF), 36);
  const trendDeltaF = roundToTenths(allValuesF[allValuesF.length - 1] - allValuesF[0]);
  const trendLabel = temperatureTrendLabelFromDelta(trendDeltaF);
  const tempBand = temperatureBandFromF(current.valueF);

  setLiveOverridesForSite(site, (baseCondition, existingOverride) => ({
    ...existingOverride,
    tempF: Math.round(current.valueF),
    tempRecentF: sampledSeries.map((value) => roundToTenths(value)),
    tempTrend7dF: trendDeltaF,
    tempTrendLabel: trendLabel,
    tempBand,
    tempPosition: temperaturePositionFromF(current.valueF),
    tempContext: buildTempContextFromBand(tempBand),
    tempGuidance: buildTempGuidanceFromBandAndTrend(tempBand, trendLabel),
    tempNormalF: baseCondition.tempNormalF,
    liveTempSource: `${usgsStationLabel(site)} • ${formatShortObservedAt(current.dateTime)}`
  }));
}

async function loadLiveUsgsFlow(site) {
  const params = new URLSearchParams({
    format: "json",
    sites: site,
    parameterCd: usgsParameterCodes.flow,
    siteStatus: "all",
    period: "P7D"
  });

  const response = await fetch(`https://waterservices.usgs.gov/nwis/iv/?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`USGS request failed with ${response.status}`);
  }

  const payload = await response.json();
  const series = payload?.value?.timeSeries?.find((entry) =>
    entry.variable?.variableCode?.some((code) => code.value === usgsParameterCodes.flow)
  );

  const values = series?.values?.[0]?.value ?? [];
  if (!values.length) {
    throw new Error("USGS response did not include discharge values");
  }

  const flowSeries = values
    .map((entry) => ({
      valueCfs: Number(entry.value),
      dateTime: entry.dateTime
    }))
    .filter((entry) => Number.isFinite(entry.valueCfs));

  if (!flowSeries.length) {
    throw new Error("USGS discharge series could not be parsed");
  }

  const current = flowSeries[flowSeries.length - 1];
  const recentThreeDays = flowSeries.filter(
    (entry) => new Date(entry.dateTime).getTime() >= new Date(current.dateTime).getTime() - 3 * 24 * 60 * 60 * 1000
  );
  const sampledSeries = downsampleSeries(recentThreeDays.map((entry) => entry.valueCfs), 36);
  const windowDelta = Math.round(sampledSeries[sampledSeries.length - 1] - sampledSeries[0]);
  const pointsForSite = getAccessPointsForUsgsSite(site);
  const firstMatchingPoint = pointsForSite.find((point) => conditions.some((item) => item.section === point.section));
  const firstMatchingCondition = firstMatchingPoint
    ? conditions.find((item) => item.section === firstMatchingPoint.section)
    : null;

  if (!firstMatchingCondition?.flowThresholds) {
    return;
  }

  const trendLabel = flowTrendLabelFromDelta(windowDelta);

  setLiveOverridesForSite(site, (baseCondition, existingOverride, point) => {
    const thresholds = getFlowThresholdsForPoint(point, baseCondition);
    const flowBand = flowBandFromCfs(current.valueCfs, thresholds);

    return {
      ...existingOverride,
      flowCfs: Math.round(current.valueCfs),
      flowRecentCfs: sampledSeries.map((value) => Math.round(value)),
      flowTrendLabel: trendLabel,
      flowBand,
      flowPosition: flowPositionFromCfs(current.valueCfs, thresholds),
      flowContext: buildFlowContextFromBand(flowBand),
      flowGuidance: buildFlowGuidanceFromBandAndTrend(flowBand, trendLabel),
      liveFlowSource: `${usgsStationLabel(site)} • ${formatShortObservedAt(current.dateTime)}`,
      flowThresholds: thresholds
    };
  });
}

async function loadLiveUsgsTurbidity(site) {
  const params = new URLSearchParams({
    format: "json",
    sites: site,
    parameterCd: usgsParameterCodes.turbidity,
    siteStatus: "all",
    period: "P7D"
  });

  const response = await fetch(`https://waterservices.usgs.gov/nwis/iv/?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`USGS request failed with ${response.status}`);
  }

  const payload = await response.json();
  const series = payload?.value?.timeSeries?.find((entry) =>
    entry.variable?.variableCode?.some((code) => code.value === usgsParameterCodes.turbidity)
  );

  const values = series?.values?.[0]?.value ?? [];
  if (!values.length) {
    throw new Error("USGS response did not include turbidity values");
  }

  const turbiditySeries = values
    .map((entry) => ({
      valueFnu: roundToTenths(Number(entry.value)),
      dateTime: entry.dateTime
    }))
    .filter((entry) => Number.isFinite(entry.valueFnu));

  if (!turbiditySeries.length) {
    throw new Error("USGS turbidity series could not be parsed");
  }

  const current = turbiditySeries[turbiditySeries.length - 1];
  const recentThreeDays = turbiditySeries.filter(
    (entry) => new Date(entry.dateTime).getTime() >= new Date(current.dateTime).getTime() - 3 * 24 * 60 * 60 * 1000
  );
  const sampledSeries = downsampleSeries(recentThreeDays.map((entry) => entry.valueFnu), 36);
  const windowDelta = roundToTenths(sampledSeries[sampledSeries.length - 1] - sampledSeries[0]);
  const band = turbidityBandFromFnu(current.valueFnu);
  const trendLabel = turbidityTrendLabelFromDelta(windowDelta);

  setLiveOverridesForSite(site, (baseCondition, existingOverride) => ({
    ...existingOverride,
    turbidityFnu: roundToTenths(current.valueFnu),
    turbidityRecentFnu: sampledSeries.map((value) => roundToTenths(value)),
    turbidityTrendLabel: trendLabel,
    turbidityBand: band,
    turbidityPosition: turbidityPositionFromFnu(current.valueFnu),
    turbidityContext: buildTurbidityContextFromBand(band),
    turbidityGuidance: buildTurbidityGuidanceFromBandAndTrend(band, trendLabel),
    clarityBand: baseCondition.clarityBand,
    liveTurbiditySource: `${usgsStationLabel(site)} • ${formatShortObservedAt(current.dateTime)}`
  }));
}

function buildGridLines(count, width, height) {
  if (count <= 1) {
    return "";
  }

  const xStep = width / (count - 1);
  return Array.from({ length: count }, (_, index) => {
    const x = index * xStep;
    return `<line x1="${x.toFixed(1)}" y1="0" x2="${x.toFixed(1)}" y2="${height}" />`;
  }).join("");
}

function buildDayMarkers(values, width, height, minValue, maxValue, className) {
  if (!values.length) {
    return "";
  }

  const xStep = values.length === 1 ? 0 : width / (values.length - 1);
  const yRange = maxValue - minValue || 1;

  return values
    .map((value, index) => {
      const x = index * xStep;
      const y = height - ((value - minValue) / yRange) * height;
      return `<circle class="${className}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.5" />`;
    })
    .join("");
}

function weatherHistoryMarkup(weather) {
  const hourlyValues = weather.hourlyTrend.map((entry) => entry.tempF);
  const windValues = weather.hourlyTrend.map((entry) => entry.windMph ?? 0);
  const minValue = Math.min(...hourlyValues) - 2;
  const maxValue = Math.max(...hourlyValues) + 2;
  const maxWind = Math.max(...windValues, 1);
  const width = 640;
  const height = 88;
  const indexedTrend = weather.hourlyTrend.map((entry, index) => ({ ...entry, index }));
  const observedEntries = indexedTrend.filter((entry) => !entry.isForecast);
  const rawForecastEntries = indexedTrend.filter((entry) => entry.isForecast);
  const forecastEntries = observedEntries.length && rawForecastEntries.length
    ? [observedEntries[observedEntries.length - 1], ...rawForecastEntries]
    : rawForecastEntries;
  const observedPath = buildLinePathSegment(observedEntries, width, height, minValue, maxValue, weather.hourlyTrend.length);
  const forecastPath = buildLinePathSegment(forecastEntries, width, height, minValue, maxValue, weather.hourlyTrend.length);
  const grid = buildGridLines(weather.hourlyTrend.length, width, height);
  const dayStarts = indexedTrend.filter((entry, index) => index === 0 || entry.dayKey !== indexedTrend[index - 1].dayKey);
  const todayStart = dayStarts.find((entry) => entry.isToday);
  const tomorrowStart = dayStarts.find((entry) => entry.isTomorrow);
  const highlightBlocks = [];

  if (todayStart) {
    const nextStart = tomorrowStart?.index ?? indexedTrend.length;
    const x = indexedTrend.length > 1 ? (todayStart.index / (indexedTrend.length - 1)) * width : 0;
    const segmentWidth = indexedTrend.length > 1
      ? ((nextStart - todayStart.index) / (indexedTrend.length - 1)) * width
      : width;
    highlightBlocks.push(
      `<rect class="weather-history__band weather-history__band--today" x="${x.toFixed(1)}" y="0" width="${segmentWidth.toFixed(1)}" height="${height}" />`
    );
  }

  if (tomorrowStart) {
    const x = indexedTrend.length > 1 ? (tomorrowStart.index / (indexedTrend.length - 1)) * width : 0;
    const segmentWidth = indexedTrend.length > 1
      ? ((indexedTrend.length - tomorrowStart.index) / (indexedTrend.length - 1)) * width
      : width;
    highlightBlocks.push(
      `<rect class="weather-history__band weather-history__band--forecast" x="${x.toFixed(1)}" y="0" width="${segmentWidth.toFixed(1)}" height="${height}" />`
    );
  }
  const windBars = buildWindBars(indexedTrend, width, height, maxWind);
  return `
    <div class="weather-history">
      <div class="weather-history__cards weather-history__cards--compact">
        ${weather.days.map((day) => `
          <article class="weather-day-card weather-day-card--compact${day.isToday ? " weather-day-card--today" : ""}${day.isForecast ? " weather-day-card--forecast" : ""}">
            <p class="weather-day-card__date">${day.label}</p>
            <div class="weather-day-card__temps">
              <strong>${day.highF}&deg;</strong>
              <span>${day.lowF}&deg;</span>
            </div>
            <span class="weather-day-card__source">${day.sourceLabel ?? (day.isForecast ? "Forecast" : "Observed")}</span>
          </article>
        `).join("")}
      </div>
      <div class="weather-history__chart-wrap">
        <div class="weather-history__labels">
          <span>${Math.round(maxValue)} F</span>
          <span>${Math.round((maxValue + minValue) / 2)} F</span>
          <span>${Math.round(minValue)} F</span>
        </div>
        <div
          class="weather-history__plot"
          data-width="${width}"
          data-height="${height}"
          data-min-value="${minValue}"
          data-max-value="${maxValue}"
        >
          <svg class="weather-history__chart weather-history__chart--compact" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-label="Observed and forecast hourly temperatures across the last three days, today, and tomorrow">
            <g class="weather-history__bands">${highlightBlocks.join("")}</g>
            <g class="weather-history__grid">${grid}</g>
            <g class="weather-history__wind">${windBars}</g>
            <path class="weather-history__high weather-history__high--observed" d="${observedPath}" />
            <path class="weather-history__high weather-history__high--forecast" d="${forecastPath}" />
            <line class="weather-history__cursor-line" x1="0" y1="0" x2="0" y2="${height}" />
            <circle class="weather-history__cursor-dot" cx="0" cy="0" r="4" />
          </svg>
          <div class="weather-history__tooltip" aria-hidden="true"></div>
        </div>
      </div>
      <div class="weather-history__header">
        <span class="metric-label">Hourly Pattern</span>
        <strong>Warmest lately around ${weather.warmestHourLabel}</strong>
      </div>
      <div class="weather-history__legend">
        <span><i class="legend-line legend-line--observed"></i>Observed</span>
        <span><i class="legend-line legend-line--forecast"></i>Forecast</span>
        <span><i class="legend-bars"></i>Wind</span>
        <span><i class="legend-swatch legend-swatch--today"></i>Today</span>
      </div>
    </div>
  `;
}

async function loadLiveWeather() {
  const params = new URLSearchParams({
    latitude: weatherLocation.latitude,
    longitude: weatherLocation.longitude,
    timezone: "America/Denver",
    past_days: "3",
    forecast_days: "2",
    temperature_unit: "fahrenheit",
    wind_speed_unit: "mph",
    precipitation_unit: "inch",
    current: [
      "temperature_2m",
      "weather_code",
      "cloud_cover",
      "wind_speed_10m",
      "wind_direction_10m",
      "is_day"
    ].join(","),
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_sum",
      "sunrise",
      "sunset"
    ].join(","),
    hourly: [
      "temperature_2m",
      "wind_speed_10m",
      "wind_direction_10m"
    ].join(",")
  });

  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`Open-Meteo request failed with ${response.status}`);
  }

  const data = await response.json();
  const current = data.current;
  const daily = data.daily;
  const hourly = data.hourly;

  if (!current || !daily || !hourly) {
    throw new Error("Open-Meteo response was missing forecast sections");
  }

  const currentDetails = weatherCodeDetails(current.weather_code, current.is_day);
  const todayDateKey = new Date().toLocaleDateString("sv-SE", { timeZone: "America/Denver" });
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrowDateKey = tomorrowDate.toLocaleDateString("sv-SE", { timeZone: "America/Denver" });

  const dayLabels = daily.time.map((value) => {
    if (value === todayDateKey) {
      return "Today";
    }

    if (value === tomorrowDateKey) {
      return "Tomorrow";
    }

    const date = new Date(`${value}T12:00:00`);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "numeric",
      day: "numeric"
    });
  });

  const dawnTemps = daily.time.map((value) => {
    const dawnKey = `${value}T06:00`;
    const dawnIndex = hourly.time.indexOf(dawnKey);
    if (dawnIndex >= 0) {
      return Math.round(hourly.temperature_2m[dawnIndex]);
    }

    return Math.round(daily.temperature_2m_min[daily.time.indexOf(value)] ?? daily.temperature_2m_min[0]);
  });

  generalWeather.title = `${weatherLocation.name} live weather`;
  generalWeather.airTempF = Math.round(current.temperature_2m);
  generalWeather.wind = `${Math.round(current.wind_speed_10m)} mph ${cardinalDirection(current.wind_direction_10m)}`;
  generalWeather.sky = currentDetails.label;
  generalWeather.summary = `${currentDetails.label} right now. This compact strip shows the last three days, today, tomorrow, and the average hourly warm-up pattern.`;
  const todayIndex = daily.time.indexOf(todayDateKey);
  if (todayIndex >= 0) {
    const lightContext = buildLightContext(daily.sunrise?.[todayIndex], weatherLocation.latitude, weatherLocation.longitude);
    if (lightContext) {
      generalWeather.sunrise = lightContext.sunrise;
      generalWeather.sunset = lightContext.sunset;
      generalWeather.civilDawn = lightContext.civilDawn;
      generalWeather.civilDusk = lightContext.civilDusk;
      generalWeather.daylightDurationLabel = lightContext.daylightDurationLabel;
      generalWeather.usableLightDurationLabel = lightContext.usableLightDurationLabel;
      generalWeather.daylightRemainingLabel = lightContext.daylightRemainingLabel;
    } else {
      generalWeather.sunrise = formatClockTime(daily.sunrise?.[todayIndex]);
      generalWeather.sunset = formatClockTime(daily.sunset?.[todayIndex]);
    }
  }
  generalWeather.days = daily.time.map((value, index) => {
    const details = weatherCodeDetails(daily.weather_code[index], 1);
    const isToday = value === todayDateKey;
    const isTomorrow = value === tomorrowDateKey;
    return {
      label: dayLabels[index],
      icon: details.icon,
      highF: Math.round(daily.temperature_2m_max[index]),
      lowF: Math.round(daily.temperature_2m_min[index]),
      precipIn: Number(daily.precipitation_sum[index].toFixed(2)),
      dawnF: dawnTemps[index],
      dayKey: value,
      isToday,
      isTomorrow,
      isForecast: isToday || isTomorrow,
      sourceLabel: isTomorrow ? "Forecast" : isToday ? "Live + forecast" : "Observed"
    };
  });

  const currentHourKey = current.time ? current.time.slice(0, 13) : `${todayDateKey}T23`;
  const trendDates = daily.time.slice(0, 5);
  const hourlyTrend = [];

  trendDates.forEach((dateKey, dateIndex) => {
    hourly.time.forEach((timeValue, hourIndex) => {
      if (!timeValue.startsWith(`${dateKey}T`)) {
        return;
      }

      const hour = Number(timeValue.slice(11, 13));
      const temp = hourly.temperature_2m[hourIndex];
      const windSpeed = hourly.wind_speed_10m?.[hourIndex];
      const windDirection = hourly.wind_direction_10m?.[hourIndex];
      if (!Number.isFinite(temp)) {
        return;
      }

      const dayLabel = dayLabels[dateIndex] ?? dateKey;
      const hourLabel = hour === 0 ? "12a" : hour < 12 ? `${hour}a` : hour === 12 ? "12p" : `${hour - 12}p`;
      const isToday = dateKey === todayDateKey;
      const isTomorrow = dateKey === tomorrowDateKey;
      const isForecast = timeValue.slice(0, 13) > currentHourKey;

      hourlyTrend.push({
        label: `${dayLabel} ${hourLabel}`,
        tempF: Math.round(temp),
        windMph: Number.isFinite(windSpeed) ? Math.round(windSpeed) : null,
        windDirection: Number.isFinite(windDirection) ? Math.round(windDirection) : null,
        dayLabel,
        dayKey: dateKey,
        hour,
        isToday,
        isTomorrow,
        isForecast
      });
    });
  });

  generalWeather.hourlyTrend = hourlyTrend;

  const observedTrend = generalWeather.hourlyTrend.filter((entry) => !entry.isForecast);
  const warmestHour = observedTrend.length
    ? observedTrend.reduce(
      (best, entry) => (entry.tempF > best.tempF ? entry : best),
      observedTrend[0]
    )
    : null;
  generalWeather.warmestHourLabel = warmestHour ? warmestHour.label : "midday";

  const recentWindow = generalWeather.days.slice(-2);
  const coldestDawn = Math.min(...generalWeather.days.map((day) => day.dawnF));
  const warmestHigh = Math.max(...generalWeather.days.map((day) => day.highF));
  const warmingBias =
    recentWindow.length > 1 && recentWindow[recentWindow.length - 1].highF > recentWindow[0].highF
      ? "Tomorrow looks a little warmer than today"
      : "Tomorrow looks fairly similar to today";

  generalWeather.bestWindow = `${warmingBias}; recent dawns hit ${coldestDawn} F, afternoons reached ${warmestHigh} F, and the warmest recent hour was around ${generalWeather.warmestHourLabel}.`;
}

function flowBandLabel(flowBand) {
  const labels = {
    low: "Low",
    ideal: "Ideal",
    pushy: "Pushy",
    blown: "Big water"
  };

  return labels[flowBand] ?? "Ideal";
}

function formatFlowRange(value) {
  return `${Math.round(value)}`;
}

function flowRangeMarkup(item) {
  const thresholds = item.flowThresholds;
  if (!thresholds) {
    return "";
  }

  return `
    <div class="flow-lane__ranges" aria-hidden="true">
      <span>0-${formatFlowRange(thresholds.low)}</span>
      <span>${formatFlowRange(thresholds.low)}-${formatFlowRange(thresholds.primeHigh)}</span>
      <span>${formatFlowRange(thresholds.primeHigh)}-${formatFlowRange(thresholds.high)}</span>
      <span>${formatFlowRange(thresholds.high)}+</span>
    </div>
  `;
}

function flowTrendDeltaLabel(delta) {
  const absDelta = Math.abs(delta);
  if (delta > 0) {
    return `^ ${absDelta} cfs / 3d`;
  }
  if (delta < 0) {
    return `v ${absDelta} cfs / 3d`;
  }
  return `= ${absDelta} cfs / 3d`;
}

function flowTrendBadgeLabel(trendLabel) {
  const labels = {
    rising: "Rising",
    falling: "Falling",
    stable: "Steady"
  };

  return labels[trendLabel] ?? "Steady";
}

function buildFlowZoneRects(width, height, item, minValue, maxValue) {
  const thresholds = item.flowThresholds;
  if (!thresholds) {
    return "";
  }

  const zones = [
    { className: "flow-history__zone flow-history__zone--low", start: minValue, end: thresholds.low },
    { className: "flow-history__zone flow-history__zone--ideal", start: thresholds.low, end: thresholds.primeHigh },
    { className: "flow-history__zone flow-history__zone--pushy", start: thresholds.primeHigh, end: thresholds.high },
    { className: "flow-history__zone flow-history__zone--blown", start: thresholds.high, end: maxValue }
  ];

  return zones.map((zone) => {
    const zoneStart = Math.max(zone.start, minValue);
    const zoneEnd = Math.min(zone.end, maxValue);

    if (zoneEnd <= zoneStart) {
      return "";
    }

    const top = height - ((zoneEnd - minValue) / (maxValue - minValue || 1)) * height;
    const bottom = height - ((zoneStart - minValue) / (maxValue - minValue || 1)) * height;
    return `<rect class="${zone.className}" x="0" y="${top.toFixed(1)}" width="${width}" height="${(bottom - top).toFixed(1)}" />`;
  }).join("");
}

function buildFlowSegmentPaths(values, width, height, item, minValue, maxValue) {
  if (values.length < 2) {
    return "";
  }

  const thresholds = item.flowThresholds ?? {};
  const xStep = width / (values.length - 1);
  const yRange = maxValue - minValue || 1;

  return values.slice(0, -1).map((value, index) => {
    const nextValue = values[index + 1];
    const x1 = index * xStep;
    const x2 = (index + 1) * xStep;
    const y1 = height - ((value - minValue) / yRange) * height;
    const y2 = height - ((nextValue - minValue) / yRange) * height;
    const midpoint = (value + nextValue) / 2;
    const bandClass =
      midpoint < (thresholds.low ?? midpoint + 1)
        ? "flow-history__segment--low"
        : midpoint <= (thresholds.primeHigh ?? midpoint)
          ? "flow-history__segment--ideal"
          : midpoint <= (thresholds.high ?? midpoint)
            ? "flow-history__segment--pushy"
            : "flow-history__segment--blown";

    return `<path class="flow-history__segment ${bandClass}" d="M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}" />`;
  }).join("");
}

function flowHistoryMarkup(item) {
  const actual = item.flowRecentCfs ?? Array.from({ length: 12 }, () => item.flowCfs);
  const averageValue = Math.round(actual.reduce((sum, value) => sum + value, 0) / actual.length);
  const averageLine = Array.from({ length: actual.length }, () => averageValue);
  const allValues = actual.concat(averageLine);
  const minValue = Math.max(0, Math.min(...allValues) * 0.88);
  const maxValue = Math.max(...allValues) * 1.08;
  const width = 260;
  const height = 92;
  const averagePath = buildLinePath(averageLine, width, height, minValue, maxValue);
  const actualSegments = buildFlowSegmentPaths(actual, width, height, item, minValue, maxValue);
  const zoneRects = buildFlowZoneRects(width, height, item, minValue, maxValue);
  const dayDividers = buildTemperatureDayDividers(3, width, height);
  const todayX = width;
  const todayY = height - ((actual[actual.length - 1] - minValue) / (maxValue - minValue || 1)) * height;
  const windowDelta = Math.round(actual[actual.length - 1] - actual[0]);

  return `
    <div class="flow-history">
      <div class="flow-history__header">
        <span class="metric-label">3 day pattern</span>
        <strong>${flowTrendBadgeLabel(item.flowTrendLabel)}</strong>
      </div>
      <svg class="flow-history__chart" viewBox="0 0 ${width} ${height}" aria-label="Recent flow versus 3 day average">
        ${zoneRects}
        ${dayDividers}
        <path class="flow-history__average" d="${averagePath}" />
        ${actualSegments}
        <circle class="flow-history__today" cx="${todayX}" cy="${todayY.toFixed(1)}" r="4.5" />
      </svg>
      <div class="flow-history__legend">
        <span><i class="legend-line legend-line--flow"></i>Now</span>
        <span><i class="legend-line legend-line--normal"></i>3d avg</span>
        <span>${flowTrendDeltaLabel(windowDelta)}</span>
      </div>
    </div>
  `;
}

function flowGraphicMarkup(item) {
  if (item.liveFlowUnavailable) {
    return `
      <div class="flow-card">
        <div class="flow-card__header">
          <div>
            <p class="metric-label">Flow Snapshot</p>
            <strong>No data</strong>
            ${item.liveFlowSource ? `<p class="flow-card__source">${item.liveFlowSource}</p>` : ""}
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="flow-card">
      <div class="flow-card__header">
        <div>
          <p class="metric-label">Flow Snapshot</p>
          <strong>${item.flowCfs} cfs</strong>
          ${item.liveFlowSource ? `<p class="flow-card__source">${item.liveFlowSource}</p>` : ""}
        </div>
        <span class="flow-band flow-band--${item.flowBand}">${flowBandLabel(item.flowBand)}</span>
      </div>
      <div class="flow-lane" aria-label="River flow context graphic">
        <div class="flow-lane__zones">
          <span>Low</span>
          <span>Ideal</span>
          <span>Pushy</span>
          <span>Big water</span>
        </div>
        <div class="flow-lane__track">
          <span class="flow-lane__marker" style="left:${item.flowPosition}%"></span>
        </div>
        ${flowRangeMarkup(item)}
      </div>
      ${flowHistoryMarkup(item)}
      ${compactToggleMarkup(item.flowGuidance)}
    </div>
  `;
}

function tempBandLabel(tempBand) {
  const labels = {
    cold: "Sluggish",
    cool: "Cool",
    steady: "Prime",
    warm: "Heat stress"
  };

  return labels[tempBand] ?? "Cool";
}

function temperatureRangeMarkup() {
  return `
    <div class="temp-lane__ranges" aria-hidden="true">
      <span>32-40F</span>
      <span>40-48F</span>
      <span>48-62F</span>
      <span>62F+</span>
    </div>
  `;
}

function prepareTemperatureHistorySeries(item) {
  const maxPoints = 36;
  const actual = downsampleSeries(item.tempRecentF, Math.min(maxPoints, item.tempRecentF.length));
  const normal = downsampleSeries(item.tempRecentNormalF, Math.min(maxPoints, item.tempRecentNormalF.length));
  return { actual, normal };
}

function temperatureTrendDeltaLabel(delta) {
  const absDelta = Math.abs(delta).toFixed(1);
  if (delta > 0) {
    return `^ ${absDelta} F / 3d`;
  }
  if (delta < 0) {
    return `v ${absDelta} F / 3d`;
  }
  return `= ${absDelta} F / 3d`;
}

function tempTrendSymbol(label) {
  if (label === "warming") {
    return "^";
  }
  if (label === "cooling") {
    return "v";
  }
  return "=";
}

function buildLinePath(values, width, height, minValue, maxValue) {
  if (!values.length) {
    return "";
  }

  const xStep = values.length === 1 ? 0 : width / (values.length - 1);
  const yRange = maxValue - minValue || 1;

  return values
    .map((value, index) => {
      const x = index * xStep;
      const y = height - ((value - minValue) / yRange) * height;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function buildLinePathSegment(entries, width, height, minValue, maxValue, totalCount) {
  if (!entries.length) {
    return "";
  }

  const xStep = totalCount <= 1 ? 0 : width / (totalCount - 1);
  const yRange = maxValue - minValue || 1;

  return entries
    .map((entry, index) => {
      const x = entry.index * xStep;
      const y = height - ((entry.tempF - minValue) / yRange) * height;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function buildWindBars(entries, width, height, maxWind) {
  if (!entries.length) {
    return "";
  }

  const barBase = height;
  const laneHeight = Math.max(14, Math.round(height * 0.24));
  const xStep = entries.length > 1 ? width / (entries.length - 1) : width;
  const barWidth = Math.max(2, Math.min(8, xStep * 0.6));

  return entries.map((entry) => {
    const x = entries.length > 1 ? entry.index * xStep : width / 2;
    const barHeight = Math.max(2, ((entry.windMph ?? 0) / maxWind) * laneHeight);
    const y = barBase - barHeight;
    const rectX = x - barWidth / 2;
    const className = entry.isForecast
      ? "weather-history__wind-bar weather-history__wind-bar--forecast"
      : "weather-history__wind-bar weather-history__wind-bar--observed";
    return `<rect class="${className}" x="${rectX.toFixed(1)}" y="${y.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${barHeight.toFixed(1)}" rx="${Math.min(2, barWidth / 2).toFixed(1)}" />`;
  }).join("");
}

function formatWeatherHour(hour) {
  if (hour === 0) {
    return "12a";
  }
  if (hour < 12) {
    return `${hour}a`;
  }
  if (hour === 12) {
    return "12p";
  }
  return `${hour - 12}p`;
}

function formatClockTime(dateTimeValue) {
  if (!dateTimeValue) {
    return "--";
  }

  return new Date(dateTimeValue).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Denver"
  });
}

const SOLAR_DAY_MS = 86400000;
const SOLAR_J1970 = 2440588;
const SOLAR_J2000 = 2451545;
const SOLAR_RAD = Math.PI / 180;
const SOLAR_OBLIQUITY = SOLAR_RAD * 23.4397;
const SOLAR_J0 = 0.0009;

function toJulianDate(date) {
  return date.getTime() / SOLAR_DAY_MS - 0.5 + SOLAR_J1970;
}

function fromJulianDate(value) {
  return new Date((value + 0.5 - SOLAR_J1970) * SOLAR_DAY_MS);
}

function solarDaysSinceJ2000(date) {
  return toJulianDate(date) - SOLAR_J2000;
}

function solarRightAscension(lambda, beta) {
  return Math.atan2(
    Math.sin(lambda) * Math.cos(SOLAR_OBLIQUITY) - Math.tan(beta) * Math.sin(SOLAR_OBLIQUITY),
    Math.cos(lambda)
  );
}

function solarDeclination(lambda, beta) {
  return Math.asin(
    Math.sin(beta) * Math.cos(SOLAR_OBLIQUITY) + Math.cos(beta) * Math.sin(SOLAR_OBLIQUITY) * Math.sin(lambda)
  );
}

function solarMeanAnomaly(days) {
  return SOLAR_RAD * (357.5291 + 0.98560028 * days);
}

function eclipticLongitude(anomaly) {
  const center = SOLAR_RAD * (1.9148 * Math.sin(anomaly) + 0.02 * Math.sin(2 * anomaly) + 0.0003 * Math.sin(3 * anomaly));
  const perihelion = SOLAR_RAD * 102.9372;
  return anomaly + center + perihelion + Math.PI;
}

function julianCycle(days, lw) {
  return Math.round(days - SOLAR_J0 - lw / (2 * Math.PI));
}

function approximateTransit(hourAngle, lw, cycle) {
  return SOLAR_J0 + (hourAngle + lw) / (2 * Math.PI) + cycle;
}

function solarTransitJulian(ds, anomaly, lambda) {
  return SOLAR_J2000 + ds + 0.0053 * Math.sin(anomaly) - 0.0069 * Math.sin(2 * lambda);
}

function solarHourAngle(angle, latitude, declination) {
  return Math.acos(
    (Math.sin(angle) - Math.sin(latitude) * Math.sin(declination)) /
    (Math.cos(latitude) * Math.cos(declination))
  );
}

function solarSetJulian(angle, lw, latitude, declination, cycle, anomaly, lambda) {
  const hourAngle = solarHourAngle(angle, latitude, declination);
  const ds = approximateTransit(hourAngle, lw, cycle);
  return solarTransitJulian(ds, anomaly, lambda);
}

function solarTimePairForAngle(angleDegrees, date, latitude, longitude) {
  const lw = -longitude * SOLAR_RAD;
  const phi = latitude * SOLAR_RAD;
  const days = solarDaysSinceJ2000(date);
  const cycle = julianCycle(days, lw);
  const ds = approximateTransit(0, lw, cycle);
  const anomaly = solarMeanAnomaly(ds);
  const lambda = eclipticLongitude(anomaly);
  const declination = solarDeclination(lambda, 0);
  const angle = angleDegrees * SOLAR_RAD;
  const setJulian = solarSetJulian(angle, lw, phi, declination, cycle, anomaly, lambda);
  const noonJulian = solarTransitJulian(ds, anomaly, lambda);
  const riseJulian = noonJulian - (setJulian - noonJulian);

  return {
    rise: fromJulianDate(riseJulian),
    set: fromJulianDate(setJulian)
  };
}

function formatDurationLabel(milliseconds, suffix = "") {
  if (!Number.isFinite(milliseconds) || milliseconds <= 0) {
    return `0m${suffix ? ` ${suffix}` : ""}`;
  }

  const totalMinutes = Math.round(milliseconds / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m${suffix ? ` ${suffix}` : ""}`;
  }

  return `${minutes}m${suffix ? ` ${suffix}` : ""}`;
}

function buildLightContext(dateTimeValue, latitude, longitude) {
  if (!dateTimeValue) {
    return null;
  }

  const localDate = new Date(dateTimeValue);
  if (Number.isNaN(localDate.getTime())) {
    return null;
  }

  const solarDate = new Date(localDate);
  solarDate.setHours(12, 0, 0, 0);

  const sunriseSet = solarTimePairForAngle(-0.833, solarDate, latitude, longitude);
  const civilTwilight = solarTimePairForAngle(-6, solarDate, latitude, longitude);
  const now = new Date();
  const daylightDurationMs = sunriseSet.set.getTime() - sunriseSet.rise.getTime();
  const usableLightDurationMs = civilTwilight.set.getTime() - civilTwilight.rise.getTime();
  const daylightRemainingMs = sunriseSet.set.getTime() - now.getTime();

  let daylightRemainingLabel = "";
  if (now < sunriseSet.rise) {
    daylightRemainingLabel = `${formatDurationLabel(daylightDurationMs)} of daylight ahead`;
  } else if (now <= sunriseSet.set) {
    daylightRemainingLabel = `${formatDurationLabel(daylightRemainingMs)} until sunset`;
  } else {
    daylightRemainingLabel = "Daylight ended";
  }

  return {
    sunriseIso: sunriseSet.rise.toISOString(),
    sunsetIso: sunriseSet.set.toISOString(),
    civilDawnIso: civilTwilight.rise.toISOString(),
    civilDuskIso: civilTwilight.set.toISOString(),
    sunrise: formatClockTime(sunriseSet.rise),
    sunset: formatClockTime(sunriseSet.set),
    civilDawn: formatClockTime(civilTwilight.rise),
    civilDusk: formatClockTime(civilTwilight.set),
    daylightDurationLabel: `${formatDurationLabel(daylightDurationMs)} daylight`,
    usableLightDurationLabel: `${formatDurationLabel(usableLightDurationMs)} with twilight`,
    daylightRemainingLabel
  };
}

function formatCameraDateTime(dateString) {
  if (!dateString) {
    return "Waiting for refresh";
  }

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return "Waiting for refresh";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Denver"
  }).format(date);
}

function resolveCameraAssetPath(feedId, assetPath) {
  if (!assetPath) {
    return null;
  }

  if (/^https?:\/\//i.test(assetPath)) {
    return assetPath;
  }

  const normalized = assetPath.replace(/^\.\//, "");
  if (/^(images|camera-cache)\//i.test(normalized)) {
    return normalized;
  }

  return `camera-cache/${feedId}/${normalized}`;
}

function cameraFeedMarkup(feed) {
  const hasVideo = Boolean(feed.assets?.timelapse);
  const frameAssets = Array.isArray(feed.assets?.frames) ? feed.assets.frames : [];
  const hasFrameSequence = !hasVideo && frameAssets.length > 1;
  const poster = resolveCameraAssetPath(feed.id, feed.assets?.poster ?? feed.assets?.latestStill);
  const stillImage = resolveCameraAssetPath(feed.id, feed.assets?.latestStill ?? feed.assets?.poster);
  const timelapse = resolveCameraAssetPath(feed.id, feed.assets?.timelapse);
  const statusLabel = hasVideo ? "Buffered timelapse" : hasFrameSequence ? "1 day timelapse" : "Latest still";

  if (!poster && !stillImage && !timelapse) {
    return `
      <div class="camera-card camera-card--empty">
        <div class="camera-card__empty">
          <strong>No buffered camera for this point yet</strong>
          <span>Select a purple monitoring station with a linked webcam to preview river imagery here.</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="camera-card">
      <div class="camera-card__frame">
        ${
          hasVideo
            ? `
              <video
                class="camera-card__video"
                src="${timelapse}"
                poster="${poster ?? ""}"
                autoplay
                muted
                loop
                playsinline
                controls
              ></video>
            `
            : hasFrameSequence
              ? `
                <img
                  class="camera-card__image camera-card__image--sequence"
                  src="${stillImage ?? poster ?? ""}"
                  alt="${feed.stationName}"
                />
              `
            : `
              <img
                class="camera-card__image"
                src="${stillImage ?? ""}"
                alt="Latest buffered camera image for ${feed.stationName}"
              >
            `
        }
        <span class="camera-card__badge">${statusLabel}</span>
      </div>
      <div class="camera-card__footer">
        <span>${feed.source?.provider ?? "USGS"}</span>
        ${
          feed.cameraPageUrl
            ? `<a href="${feed.cameraPageUrl}" target="_blank" rel="noopener noreferrer">Open source camera</a>`
            : `<span>Camera not linked</span>`
        }
      </div>
    </div>
  `;
}

function renderCameraFeed() {
  if (!cameraMedia) {
    return;
  }

  cameraMedia.innerHTML = cameraFeedMarkup(cameraFeed);
  attachCameraSequencePlayer();
}

function cameraFallbackForPoint(point) {
  if (!point) {
    return { ...defaultCameraFeed };
  }

  const isCrystalRedstoneGauge = point.id === "redstone-gauge" || point.usgsSite === "09081600";

  return {
    ...defaultCameraFeed,
    id: isCrystalRedstoneGauge ? point.id : null,
    stationName: point.name,
    label: point.name,
    status: isCrystalRedstoneGauge ? "image_only" : "no_camera_for_station",
    source: {
      ...defaultCameraFeed.source,
      provider: isCrystalRedstoneGauge ? "Local placeholder" : defaultCameraFeed.source.provider
    },
    assets: {
      ...defaultCameraFeed.assets,
      latestStill: isCrystalRedstoneGauge ? "Images/Crystal_River_at_Redstone,_CO.jpg" : null,
      poster: isCrystalRedstoneGauge ? "Images/Crystal_River_at_Redstone,_CO.jpg" : null
    }
  };
}

async function loadCameraFeedForPoint(point) {
  const feedId = point?.cameraFeedId?.trim() || point?.usgsSite?.trim() || null;
  if (!feedId) {
    activeCameraFeedId = null;
    cameraFeed = cameraFallbackForPoint(point);
    renderCameraFeed();
    return;
  }

  if (activeCameraFeedId === feedId && cameraFeed.id === feedId) {
    renderCameraFeed();
    return;
  }

  try {
    const response = await fetch(`camera-cache/${feedId}/metadata.json`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Camera metadata request failed with ${response.status}`);
    }

    const metadata = await response.json();
    activeCameraFeedId = feedId;
    cameraFeed = {
      ...defaultCameraFeed,
      ...metadata,
      source: {
        ...defaultCameraFeed.source,
        ...(metadata.source ?? {})
      },
      assets: {
        ...defaultCameraFeed.assets,
        ...(metadata.assets ?? {})
      }
    };
  } catch (error) {
    activeCameraFeedId = feedId;
    cameraFeed = cameraFallbackForPoint(point);
    console.error("Unable to load buffered camera metadata.", error);
  }

  renderCameraFeed();
}

function attachCameraSequencePlayer() {
  if (cameraSequenceTimer) {
    window.clearInterval(cameraSequenceTimer);
    cameraSequenceTimer = null;
  }

  const frameAssets = Array.isArray(cameraFeed.assets?.frames) ? cameraFeed.assets.frames : [];
  if (frameAssets.length < 2 || !cameraMedia) {
    return;
  }

  const image = cameraMedia.querySelector(".camera-card__image--sequence");
  if (!image) {
    return;
  }

  const frameUrls = frameAssets
    .map((assetPath) => resolveCameraAssetPath(cameraFeed.id, assetPath))
    .filter(Boolean);

  if (frameUrls.length < 2) {
    return;
  }

  let frameIndex = 0;
  image.src = frameUrls[0];
  cameraSequenceTimer = window.setInterval(() => {
    frameIndex = (frameIndex + 1) % frameUrls.length;
    image.src = frameUrls[frameIndex];
  }, 180);
}

function attachWeatherChartInteractions() {
  const plot = weatherMetrics.querySelector(".weather-history__plot");
  if (!plot || !generalWeather.hourlyTrend.length) {
    return;
  }

  const tooltip = plot.querySelector(".weather-history__tooltip");
  const cursorLine = plot.querySelector(".weather-history__cursor-line");
  const cursorDot = plot.querySelector(".weather-history__cursor-dot");
  const width = Number(plot.dataset.width);
  const height = Number(plot.dataset.height);
  const minValue = Number(plot.dataset.minValue);
  const maxValue = Number(plot.dataset.maxValue);
  const xStep = generalWeather.hourlyTrend.length > 1 ? width / (generalWeather.hourlyTrend.length - 1) : 0;
  const yRange = maxValue - minValue || 1;

  const hideCursor = () => {
    plot.classList.remove("is-active");
  };

  const updateCursor = (clientX) => {
    const rect = plot.getBoundingClientRect();
    const relativeX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const ratio = rect.width ? relativeX / rect.width : 0;
    const index = Math.max(
      0,
      Math.min(generalWeather.hourlyTrend.length - 1, Math.round(ratio * (generalWeather.hourlyTrend.length - 1)))
    );
    const entry = generalWeather.hourlyTrend[index];
    if (!entry) {
      hideCursor();
      return;
    }

    const svgX = index * xStep;
    const svgY = height - ((entry.tempF - minValue) / yRange) * height;
    const label = `${entry.dayLabel} ${formatWeatherHour(entry.hour)}`;
    const sourceLabel = entry.isForecast ? "Forecast" : "Observed";
    const windLabel = Number.isFinite(entry.windMph)
      ? `${entry.windMph} mph ${cardinalDirection(entry.windDirection ?? 0)}`
      : "No wind data";

    cursorLine.setAttribute("x1", svgX.toFixed(1));
    cursorLine.setAttribute("x2", svgX.toFixed(1));
    cursorDot.setAttribute("cx", svgX.toFixed(1));
    cursorDot.setAttribute("cy", svgY.toFixed(1));
    tooltip.textContent = `${label} • ${entry.tempF} F • ${windLabel} • ${sourceLabel}`;

    const tooltipWidth = tooltip.offsetWidth || 120;
    const tooltipLeft = Math.max(10, Math.min(relativeX - tooltipWidth / 2, rect.width - tooltipWidth - 10));
    const tooltipTop = Math.max(6, (svgY / height) * rect.height - 34);

    tooltip.style.left = `${tooltipLeft}px`;
    tooltip.style.top = `${tooltipTop}px`;
    plot.classList.add("is-active");
  };

  plot.addEventListener("mousemove", (event) => {
    updateCursor(event.clientX);
  });

  plot.addEventListener("mouseenter", (event) => {
    updateCursor(event.clientX);
  });

  plot.addEventListener("mouseleave", hideCursor);

  plot.addEventListener("touchstart", (event) => {
    const touch = event.touches[0];
    if (touch) {
      updateCursor(touch.clientX);
    }
  }, { passive: true });

  plot.addEventListener("touchmove", (event) => {
    const touch = event.touches[0];
    if (touch) {
      updateCursor(touch.clientX);
    }
  }, { passive: true });

  plot.addEventListener("touchend", hideCursor, { passive: true });
}

function buildTemperatureZoneRects(width, height, minValue, maxValue) {
  const zones = [
    { className: "temp-history__zone temp-history__zone--cold", start: minValue, end: 40 },
    { className: "temp-history__zone temp-history__zone--cool", start: 40, end: 48 },
    { className: "temp-history__zone temp-history__zone--active", start: 48, end: 62 },
    { className: "temp-history__zone temp-history__zone--warm", start: 62, end: maxValue }
  ];

  return zones
    .map((zone) => {
      const zoneStart = Math.max(zone.start, minValue);
      const zoneEnd = Math.min(zone.end, maxValue);

      if (zoneEnd <= zoneStart) {
        return "";
      }

      const top = height - ((zoneEnd - minValue) / (maxValue - minValue || 1)) * height;
      const bottom = height - ((zoneStart - minValue) / (maxValue - minValue || 1)) * height;

      return `<rect class="${zone.className}" x="0" y="${top.toFixed(1)}" width="${width}" height="${(bottom - top).toFixed(1)}" />`;
    })
    .join("");
}

function buildTemperatureDayDividers(dayCount, width, height) {
  if (dayCount <= 1) {
    return "";
  }

  return Array.from({ length: dayCount - 1 }, (_, index) => {
    const x = ((index + 1) / dayCount) * width;
    return `<line class="temp-history__divider" x1="${x.toFixed(1)}" y1="0" x2="${x.toFixed(1)}" y2="${height}" />`;
  }).join("");
}

function buildTemperatureSegmentPaths(values, width, height, minValue, maxValue) {
  if (values.length < 2) {
    return "";
  }

  const xStep = width / (values.length - 1);
  const yRange = maxValue - minValue || 1;
  const thresholds = [40, 48, 62];

  function bandClassForTemp(tempF) {
    if (tempF < 40) {
      return "temp-history__segment--cold";
    }
    if (tempF < 48) {
      return "temp-history__segment--cool";
    }
    if (tempF < 62) {
      return "temp-history__segment--active";
    }
    return "temp-history__segment--warm";
  }

  return values
    .slice(0, -1)
    .map((value, index) => {
      const nextValue = values[index + 1];
      const startX = index * xStep;
      const endX = (index + 1) * xStep;
      const segmentPoints = [{ x: startX, temp: value }];

      if (value !== nextValue) {
        thresholds.forEach((threshold) => {
          const crossesThreshold =
            (value < threshold && nextValue > threshold) ||
            (value > threshold && nextValue < threshold);

          if (!crossesThreshold) {
            return;
          }

          const ratio = (threshold - value) / (nextValue - value);
          segmentPoints.push({
            x: startX + ratio * (endX - startX),
            temp: threshold
          });
        });
      }

      segmentPoints.push({ x: endX, temp: nextValue });
      segmentPoints.sort((a, b) => a.x - b.x);

      return segmentPoints
        .slice(0, -1)
        .map((point, subIndex) => {
          const nextPoint = segmentPoints[subIndex + 1];
          const y1 = height - ((point.temp - minValue) / yRange) * height;
          const y2 = height - ((nextPoint.temp - minValue) / yRange) * height;
          const midpoint = (point.temp + nextPoint.temp) / 2;
          const bandClass = bandClassForTemp(midpoint);

          return `<path class="temp-history__segment ${bandClass}" d="M ${point.x.toFixed(1)} ${y1.toFixed(1)} L ${nextPoint.x.toFixed(1)} ${y2.toFixed(1)}" />`;
        })
        .join("");
    })
    .join("");
}

function temperatureHistoryMarkup(item) {
  const { actual, normal } = prepareTemperatureHistorySeries(item);
  const allValues = actual.concat(normal);
  const minValue = Math.max(32, Math.min(...allValues) - 1);
  const maxValue = Math.max(...allValues) + 1;
  const width = 260;
  const height = 92;
  const normalPath = buildLinePath(normal, width, height, minValue, maxValue);
  const actualSegments = buildTemperatureSegmentPaths(actual, width, height, minValue, maxValue);
  const zoneRects = buildTemperatureZoneRects(width, height, minValue, maxValue);
  const dayDividers = buildTemperatureDayDividers(3, width, height);
  const todayX = width;
  const todayY = height - ((actual[actual.length - 1] - minValue) / (maxValue - minValue || 1)) * height;
  const windowDelta = roundToTenths(actual[actual.length - 1] - actual[0]);

  return `
    <div class="temp-history">
      <div class="temp-history__header">
        <span class="metric-label">3 day pattern</span>
        <strong>${tempBandLabel(item.tempBand)}</strong>
      </div>
      <svg class="temp-history__chart" viewBox="0 0 ${width} ${height}" aria-label="Recent water temperature versus seasonal normal">
        ${zoneRects}
        ${dayDividers}
        <path class="temp-history__normal" d="${normalPath}" />
        ${actualSegments}
        <circle class="temp-history__today" cx="${todayX}" cy="${todayY.toFixed(1)}" r="4.5" />
      </svg>
      <div class="temp-history__legend">
        <span><i class="legend-line legend-line--actual"></i>Now</span>
        <span><i class="legend-line legend-line--normal"></i>Average</span>
        <span>${temperatureTrendDeltaLabel(windowDelta)}</span>
      </div>
    </div>
  `;
}

function temperatureGraphicMarkup(item) {
  if (item.liveTempUnavailable) {
    return `
      <div class="temp-card">
        <div class="temp-card__header">
          <div>
            <p class="metric-label">Water Temperature</p>
            <strong>No data</strong>
            ${item.liveTempSource ? `<p class="temp-card__source">${item.liveTempSource}</p>` : ""}
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="temp-card">
      <div class="temp-card__header">
        <div>
          <p class="metric-label">Water Temperature</p>
          <strong>${item.tempF} F</strong>
          ${item.liveTempSource ? `<p class="temp-card__source">${item.liveTempSource}</p>` : ""}
        </div>
        <span class="temp-band temp-band--${item.tempBand}">${tempBandLabel(item.tempBand)}</span>
      </div>
      <div class="temp-lane" aria-label="Trout activity temperature graphic">
        <div class="temp-lane__track">
          <span class="temp-lane__marker" style="left:${item.tempPosition}%"></span>
        </div>
        <div class="temp-lane__zones">
          <span>Near freezing</span>
          <span>Waking up</span>
          <span>Prime</span>
          <span>Heat stress</span>
        </div>
        ${temperatureRangeMarkup()}
      </div>
      ${temperatureHistoryMarkup(item)}
      ${compactToggleMarkup(item.tempGuidance)}
    </div>
  `;
}

function turbidityBandLabel(band) {
  const labels = {
    clear: "Clear",
    stained: "Stained",
    dirty: "Dirty",
    chocolate: "Chocolate"
  };

  return labels[band] ?? "Stained";
}

function turbidityRangeMarkup() {
  return `
    <div class="turbidity-lane__ranges" aria-hidden="true">
      <span>0-10</span>
      <span>10-30</span>
      <span>30-100</span>
      <span>100+</span>
    </div>
  `;
}

function turbidityTrendDeltaLabel(delta) {
  const absDelta = Math.abs(delta).toFixed(1);
  if (delta > 0) {
    return `^ ${absDelta} FNU / 3d`;
  }
  if (delta < 0) {
    return `v ${absDelta} FNU / 3d`;
  }
  return `= ${absDelta} FNU / 3d`;
}

function turbidityTrendBadgeLabel(trendLabel) {
  const labels = {
    muddying: "Muddying",
    clearing: "Clearing",
    holding: "Holding"
  };

  return labels[trendLabel] ?? "Holding";
}

function buildTurbidityZoneRects(width, height, minValue, maxValue) {
  const zones = [
    { className: "turbidity-history__zone turbidity-history__zone--clear", start: minValue, end: 10 },
    { className: "turbidity-history__zone turbidity-history__zone--stained", start: 10, end: 30 },
    { className: "turbidity-history__zone turbidity-history__zone--dirty", start: 30, end: 100 },
    { className: "turbidity-history__zone turbidity-history__zone--chocolate", start: 100, end: maxValue }
  ];

  return zones
    .map((zone) => {
      const zoneStart = Math.max(zone.start, minValue);
      const zoneEnd = Math.min(zone.end, maxValue);

      if (zoneEnd <= zoneStart) {
        return "";
      }

      const top = height - ((zoneEnd - minValue) / (maxValue - minValue || 1)) * height;
      const bottom = height - ((zoneStart - minValue) / (maxValue - minValue || 1)) * height;

      return `<rect class="${zone.className}" x="0" y="${top.toFixed(1)}" width="${width}" height="${(bottom - top).toFixed(1)}" />`;
    })
    .join("");
}

function buildTurbiditySegmentPaths(values, width, height, minValue, maxValue) {
  if (values.length < 2) {
    return "";
  }

  const xStep = width / (values.length - 1);
  const yRange = maxValue - minValue || 1;

  return values
    .slice(0, -1)
    .map((value, index) => {
      const nextValue = values[index + 1];
      const x1 = index * xStep;
      const x2 = (index + 1) * xStep;
      const y1 = height - ((value - minValue) / yRange) * height;
      const y2 = height - ((nextValue - minValue) / yRange) * height;
      const midpoint = (value + nextValue) / 2;
      const bandClass =
        midpoint < 10
          ? "turbidity-history__segment--clear"
          : midpoint < 30
            ? "turbidity-history__segment--stained"
            : midpoint < 100
              ? "turbidity-history__segment--dirty"
              : "turbidity-history__segment--chocolate";

      return `<path class="turbidity-history__segment ${bandClass}" d="M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}" />`;
    })
    .join("");
}

function turbidityHistoryMarkup(item) {
  const actual = item.turbidityRecentFnu ?? Array.from({ length: 12 }, () => item.turbidityFnu);
  const averageValue = roundToTenths(actual.reduce((sum, value) => sum + value, 0) / actual.length);
  const averageLine = Array.from({ length: actual.length }, () => averageValue);
  const allValues = actual.concat(averageLine);
  const minValue = Math.max(0, Math.min(...allValues) * 0.85);
  const maxValue = Math.max(...allValues) * 1.12 + 1;
  const width = 260;
  const height = 92;
  const averagePath = buildLinePath(averageLine, width, height, minValue, maxValue);
  const actualSegments = buildTurbiditySegmentPaths(actual, width, height, minValue, maxValue);
  const zoneRects = buildTurbidityZoneRects(width, height, minValue, maxValue);
  const dayDividers = buildTemperatureDayDividers(3, width, height);
  const todayX = width;
  const todayY = height - ((actual[actual.length - 1] - minValue) / (maxValue - minValue || 1)) * height;
  const windowDelta = roundToTenths(actual[actual.length - 1] - actual[0]);

  return `
    <div class="turbidity-history">
      <div class="turbidity-history__header">
        <span class="metric-label">3 day pattern</span>
        <strong>${turbidityTrendBadgeLabel(item.turbidityTrendLabel)}</strong>
      </div>
      <svg class="turbidity-history__chart" viewBox="0 0 ${width} ${height}" aria-label="Recent turbidity versus 3 day average">
        ${zoneRects}
        ${dayDividers}
        <path class="turbidity-history__average" d="${averagePath}" />
        ${actualSegments}
        <circle class="turbidity-history__today" cx="${todayX}" cy="${todayY.toFixed(1)}" r="4.5" />
      </svg>
      <div class="turbidity-history__legend">
        <span><i class="legend-line legend-line--turbidity"></i>Now</span>
        <span><i class="legend-line legend-line--normal"></i>3d avg</span>
        <span>${turbidityTrendDeltaLabel(windowDelta)}</span>
      </div>
    </div>
  `;
}

function turbidityGraphicMarkup(item) {
  if (item.liveTurbidityUnavailable) {
    return `
      <div class="turbidity-card">
        <div class="turbidity-card__header">
          <div>
            <p class="metric-label">Turbidity</p>
            <strong>No data</strong>
            ${item.liveTurbiditySource ? `<p class="turbidity-card__source">${item.liveTurbiditySource}</p>` : ""}
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="turbidity-card">
      <div class="turbidity-card__header">
        <div>
          <p class="metric-label">Turbidity</p>
          <strong>${item.turbidityFnu} FNU</strong>
          ${item.liveTurbiditySource ? `<p class="turbidity-card__source">${item.liveTurbiditySource}</p>` : ""}
        </div>
        <span class="turbidity-band turbidity-band--${item.turbidityBand}">${turbidityBandLabel(item.turbidityBand)}</span>
      </div>
      <div class="turbidity-lane" aria-label="Water clarity turbidity graphic">
        <div class="turbidity-lane__track">
          <span class="turbidity-lane__marker" style="left:${item.turbidityPosition}%"></span>
        </div>
        <div class="turbidity-lane__zones">
          <span>Crystal</span>
          <span>Stained</span>
          <span>Dirty</span>
          <span>Choc milk</span>
        </div>
        ${turbidityRangeMarkup()}
      </div>
      ${turbidityHistoryMarkup(item)}
      ${compactToggleMarkup(item.turbidityGuidance)}
    </div>
  `;
}

function findConditionForAccess(point) {
  const baseCondition = conditions.find((item) => item.section === point.section);
  if (!baseCondition) {
    return null;
  }

  const resolvedBaseCondition = {
    ...baseCondition,
    flowThresholds: getFlowThresholdsForPoint(point, baseCondition)
  };
  const liveOverride = liveConditionOverridesByAccessPointId.get(point.id);
  if (!liveOverride) {
    return resolvedBaseCondition;
  }

  return {
    ...resolvedBaseCondition,
    ...liveOverride,
    flowThresholds: liveOverride.flowThresholds ?? resolvedBaseCondition.flowThresholds
  };
}

function formatSpecialObservedAt(dateString) {
  if (!dateString) {
    return "latest";
  }

  const date = new Date(`${dateString}T12:00:00`);
  if (Number.isNaN(date.getTime())) {
    return "latest";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "America/Denver"
  }).format(date);
}

async function loadSpecialStationData(point) {
  if (!point?.specialDataSource) {
    return;
  }

  const config = specialDataSources[point.specialDataSource];
  if (!config) {
    return;
  }

  const response = await fetch(config.cachePath, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Special data request failed with ${response.status}`);
  }

  const payload = await response.json();
  const elevationFt = Number(payload?.elevationFt);
  if (!Number.isFinite(elevationFt)) {
    throw new Error("Special data cache did not include a numeric reservoir elevation");
  }
  const belowFullPoolFt = Number.isFinite(Number(payload?.belowFullPoolFt))
    ? Number(payload.belowFullPoolFt)
    : Number.isFinite(config.fullPoolElevationFt)
      ? Math.max(0, config.fullPoolElevationFt - elevationFt)
      : null;

  specialStationDataByPointId.set(point.id, {
    type: "reservoir_level",
    label: payload?.label ?? config.label,
    sourceLabel: payload?.sourceLabel ?? config.sourceLabel,
    elevationFt,
    belowFullPoolFt,
    observedAt: payload?.observedAt ?? null,
    observedAtLabel: formatSpecialObservedAt(payload?.observedAt ?? null),
    recentMonthlyAverages: Array.isArray(payload?.recentMonthlyAverages) ? payload.recentMonthlyAverages : []
  });
}

function calculateFishabilityScore(condition) {
  const flowBase = {
    low: 24,
    ideal: 38,
    pushy: 24,
    blown: 10
  };

  const flowTrendAdjustment = {
    low: { rising: 4, stable: 1, falling: -3 },
    ideal: { rising: 2, stable: 4, falling: 1 },
    pushy: { rising: -4, stable: -1, falling: 3 },
    blown: { rising: -6, stable: -3, falling: 1 }
  };

  const tempBase = {
    cold: 12,
    cool: 22,
    steady: 30,
    warm: 14
  };

  const tempTrendAdjustment = {
    cold: { warming: 4, steady: 1, cooling: -3 },
    cool: { warming: 3, steady: 2, cooling: -2 },
    steady: { warming: 2, steady: 4, cooling: 0 },
    warm: { warming: -6, steady: -2, cooling: 2 }
  };

  const turbidityBase = {
    clear: 21,
    stained: 26,
    dirty: 15,
    chocolate: 2
  };

  const turbidityTrendAdjustment = {
    clear: { clearing: 0, holding: 1, muddying: -2 },
    stained: { clearing: 3, holding: 4, muddying: -1 },
    dirty: { clearing: 4, holding: -1, muddying: -5 },
    chocolate: { clearing: 1, holding: -4, muddying: -8 }
  };

  const flowScore =
    (flowBase[condition.flowBand] ?? 24) +
    (flowTrendAdjustment[condition.flowBand]?.[condition.flowTrendLabel] ?? 0);

  const tempScore =
    (tempBase[condition.tempBand] ?? 20) +
    (tempTrendAdjustment[condition.tempBand]?.[condition.tempTrendLabel] ?? 0);

  const turbidityScore =
    (turbidityBase[condition.turbidityBand] ?? 18) +
    (turbidityTrendAdjustment[condition.turbidityBand]?.[condition.turbidityTrendLabel] ?? 0);

  const score = flowScore + tempScore + turbidityScore;
  return Math.round(clamp(score, 0, 100));
}

function markerFillColor(status) {
  const colors = {
    excellent: "#1c8b6e",
    good: "#6ea53a",
    fair: "#d39b2a",
    tough: "#b85f43"
  };

  return colors[status] ?? colors.fair;
}

function isMonitoringStation(point) {
  return point.accessType?.toLowerCase().includes("gauge") || Boolean(point.usgsSite && point.accessType?.toLowerCase().includes("usgs"));
}

function buildMarkerIcon(point, status, isActive) {
  const monitoringStation = isMonitoringStation(point);
  const shapeClass = monitoringStation ? "map-marker--square" : "map-marker--circle";
  const activeClass = isActive ? "is-active" : "";
  const size = isActive ? 22 : 18;
  const fillColor = monitoringStation ? "#7b5fd6" : markerFillColor(status);

  return L.divIcon({
    className: "map-marker-icon",
    html: `<span class="map-marker ${shapeClass} ${activeClass}" style="--marker-fill:${fillColor}; --marker-size:${size}px;"></span>`,
    iconSize: [size + 8, size + 8],
    iconAnchor: [(size + 8) / 2, (size + 8) / 2]
  });
}

function ensureMap(points) {
  if (mapInstance) {
    return;
  }

  mapInstance = L.map("map-canvas", {
    zoomControl: true,
    scrollWheelZoom: true
  }).setView([39.53, -107.23], 10);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(mapInstance);

  points.forEach((point) => {
    const condition = findConditionForAccess(point);
    const marker = L.marker([point.lat, point.lng], { icon: buildMarkerIcon(point, condition?.status ?? "fair", false) })
      .addTo(mapInstance)
      .bindTooltip(point.name, { direction: "top", offset: [0, -6] });

    marker.on("click", () => {
      activeAccessPointId = point.id;
      render();
    });

    markerById.set(point.id, marker);
  });
}

function syncMapSelection(points) {
  points.forEach((point) => {
    const condition = findConditionForAccess(point);
    const marker = markerById.get(point.id);
    if (!marker) {
      return;
    }

    const isActive = point.id === activeAccessPointId;
    marker.setIcon(buildMarkerIcon(point, condition?.status ?? "fair", isActive));
  });

  const activePoint = points.find((point) => point.id === activeAccessPointId) ?? null;
  if (activePoint && mapInstance) {
    mapInstance.flyTo([activePoint.lat, activePoint.lng], Math.max(mapInstance.getZoom(), 12), {
      animate: true,
      duration: 0.75
    });
  }
}

function renderWeather() {
  weatherTitle.textContent = generalWeather.title;
  weatherMoon.innerHTML = moonCycleMarkup(generalWeather);
  weatherMetrics.innerHTML = [
    metricMarkup("Air", `${generalWeather.airTempF} F`),
    metricMarkup("Wind", generalWeather.wind),
    metricMarkup("Sky", generalWeather.sky)
  ].join("") + weatherHistoryMarkup(generalWeather);
  attachWeatherChartInteractions();
  weatherSummary.innerHTML = `
    <p class="moon-strip__note">
      ${generalWeather.daylightRemainingLabel}. ${generalWeather.moonImpact}
    </p>
  `;
}

function renderMapPoints(points) {
  if (!points.length) {
    return;
  }
  ensureMap(points);
  syncMapSelection(points);
}

function renderMapDetail(points) {
  const selectedPoint = points.find((point) => point.id === activeAccessPointId) ?? null;
  mapPanel?.classList.toggle("has-selection", Boolean(selectedPoint));

  if (!selectedPoint) {
    mapDetailName.textContent = "Choose a point";
    mapDetailRiver.textContent = "Tap a marker to inspect local conditions.";
    mapDetailScoreBlock.hidden = false;
    mapDetailScoreBlock.style.display = "";
    mapDetailMeter.style.width = "0%";
    mapDetailScore.textContent = "0 / 100";
    cameraFeed = { ...defaultCameraFeed };
    mapDetailMetrics.innerHTML = "";
    mapDetailChips.innerHTML = "";
    mapDetailSummary.innerHTML = "";
    renderCameraFeed();
    return;
  }

  activeAccessPointId = selectedPoint.id;
  void loadCameraFeedForPoint(selectedPoint);
  const reservoirOnlyPoint = selectedPoint.accessType?.toLowerCase().includes("reservoir");
  const condition = findConditionForAccess(selectedPoint);
  const fishabilityScore = condition ? calculateFishabilityScore(condition) : 0;

  mapDetailName.textContent = selectedPoint.name;
  mapDetailRiver.textContent = `${selectedPoint.river} / ${selectedPoint.section}`;
  mapDetailScoreBlock.hidden = reservoirOnlyPoint;
  mapDetailScoreBlock.style.display = reservoirOnlyPoint ? "none" : "";
  mapDetailMeter.style.width = reservoirOnlyPoint ? "0%" : `${fishabilityScore}%`;
  mapDetailScore.textContent = reservoirOnlyPoint ? "Reservoir" : `${fishabilityScore} / 100`;
  mapDetailMetrics.innerHTML = reservoirOnlyPoint
    ? [
        specialStationMetricMarkup(selectedPoint)
      ].join("")
    : [
        flowGraphicMarkup(condition),
        temperatureGraphicMarkup(condition),
        turbidityGraphicMarkup(condition)
      ].join("");
  mapDetailChips.innerHTML = "";
  mapDetailSummary.innerHTML = reservoirOnlyPoint
    ? compactToggleMarkup(selectedPoint.note, "Why")
    : compactToggleMarkup(
        `${condition.flowContext} ${condition.tempContext} Water temperature has been ${condition.tempTrendLabel} recently. ${condition.turbidityContext} ${condition.clarityContext} ${selectedPoint.note}`,
        "Why"
      );
}

function render() {
  const mapPoints = accessPoints;
  renderWeather();
  renderCameraFeed();
  renderMapDetail(mapPoints);
  renderMapPoints(mapPoints);
}

async function refreshLiveData() {
  liveConditionOverridesByAccessPointId = new Map();
  specialStationDataByPointId = new Map();

  try {
    await loadLiveWeather();
    renderWeather();
  } catch (error) {
    console.error("Unable to load live weather from Open-Meteo.", error);
  }

  for (const site of uniqueUsgsSites()) {
    try {
      await loadLiveUsgsWaterTemperature(site);
    } catch (error) {
      setMetricUnavailableForSite(site, "temp");
      console.error(`Unable to load live USGS temperature for station ${site}.`, error);
    }

    try {
      await loadLiveUsgsFlow(site);
    } catch (error) {
      setMetricUnavailableForSite(site, "flow");
      console.error(`Unable to load live USGS flow for station ${site}.`, error);
    }

    try {
      await loadLiveUsgsTurbidity(site);
    } catch (error) {
      setMetricUnavailableForSite(site, "turbidity");
      console.error(`Unable to load live USGS turbidity for station ${site}.`, error);
    }
  }

  for (const point of accessPoints.filter((item) => item.specialDataSource)) {
    try {
      await loadSpecialStationData(point);
    } catch (error) {
      specialStationDataByPointId.set(point.id, {
        unavailable: true,
        sourceLabel: specialDataSources[point.specialDataSource]?.sourceLabel ?? "Special data source"
      });
      console.error(`Unable to load special data for ${point.name}.`, error);
    }
  }

  const selectedPoint = accessPoints.find((point) => point.id === activeAccessPointId) ?? null;
  await loadCameraFeedForPoint(selectedPoint);
  renderMapDetail(accessPoints);
  renderCameraFeed();
}

async function init() {
  try {
    await loadAccessPointsConfig();
  } catch (error) {
    console.error("Unable to load access point config.", error);
    accessPoints = [];
  }

  try {
    await loadFlowThresholdsConfig();
  } catch (error) {
    console.error("Unable to load flow thresholds config.", error);
    flowThresholdOverridesByPointId = new Map();
  }

  render();
  await refreshLiveData();
  window.setInterval(refreshLiveData, LIVE_REFRESH_INTERVAL_MS);
}

mapDetailClose?.addEventListener("click", () => {
  activeAccessPointId = null;
  render();
});

init();
