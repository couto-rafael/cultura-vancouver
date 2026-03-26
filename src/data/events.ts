export interface Event {
  id: string;
  title: string;
  culture: string;
  category: "Festival" | "Music" | "Food" | "Museum" | "Community" | "Theatre";
  date: string;
  startTime: string;
  endTime: string;
  venueName: string;
  address: string;
  neighborhood: string;
  priceType: "Free" | "Donation" | "Paid";
  priceRange: string;
  language: string;
  familyFriendly: boolean;
  accessibility: {
    wheelchairAccess: boolean;
    quietSpace: boolean;
    captions: boolean;
  };
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  imageUrl: string;
  organizerName: string;
  organizerContactEmail: string;
  ticketUrl?: string;
  websiteUrl?: string;
  transitInfo: string;
  parkingInfo: string;
  safetyNotes?: string;
  socialProof: {
    rating: number;
    reviewsCount: number;
  };
}

export const events: Event[] = [
  {
    id: "9",
    title: "Carnaval del Sol",
    culture: "Latin American",
    category: "Festival",
    date: "2026-07-11",
    startTime: "11:00 AM",
    endTime: "10:00 PM",
    venueName: "Concord Pacific Place",
    address: "88 Pacific Blvd, Vancouver, BC V6Z 0E6",
    neighborhood: "Vancouver",
    priceType: "Paid",
    priceRange: "$8 CAD",
    language: "English / Spanish / Portuguese",
    familyFriendly: true,
    accessibility: {
      wheelchairAccess: true,
      quietSpace: false,
      captions: false,
    },
    shortDescription:
      "Vancouver's biggest Latin American cultural celebration — two days of live music, dance, food, and community spirit under the summer sun.",
    fullDescription:
      "Carnaval del Sol returns for another spectacular edition on July 11 & 12, 2026! This beloved two-day festival is Vancouver's premier celebration of Latin American culture.\n\nExpect world-class live performances across multiple stages featuring salsa, cumbia, reggaeton, samba, and Andean music. Indulge in authentic Latin cuisine from over 40 food vendors, explore artisan markets, and join dance workshops led by professional instructors.\n\nWith dazzling costumes, vibrant colours, and an infectious energy that fills the entire waterfront site, Carnaval del Sol is a summer highlight for the whole family.",
    tags: [
      "Music",
      "Dance",
      "Food",
      "Family Friendly",
      "Festival",
      "Live Performance",
      "Outdoor",
    ],
    imageUrl:
      "data:image/png;base64,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b11tNr0tQRmklZiomZUMbK4d7GtJGBjqc5PTl30Hc9Kamtpd67YbjC1vV5p3Fn7wGPquuF9BI6FddBxtGo8HwGQGlupOYcTxJufotTpOJYlNheEyE0juCepz+i4tIIJBGCOoRdiXG0Wm5NLbha6KrB/roGv/AIhRi58LtEVzi42f1Z5GN1PM9mPhnb9Fc5X2nST/APXgub0s7/5VlgY4l3f6sIjpY/ouYkV73LgdaJATbr3W057hPG2UfTaoxcuCepIHE0Nfbqxndlzo3H4EEfVWKWxtRJjIRtk/5Aj1It6qYgYopkb/AKluoI/b1W+9GWhLaO9XN3R8kUDPwgud/iarjUT4UaaqdLaQjt1aIhVyTPmm7N24AnAAz3naApYsTxTPMn6tHjwzdpNgeQAGXkszrk02bqEWK03BOXQZfZERFAKJREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREX//Z",
    organizerName: "Carnaval del Sol Society",
    organizerContactEmail: "info@carnavaldelsol.ca",
    ticketUrl: "https://carnavaldelsol.ca/tickets",
    websiteUrl: "https://carnavaldelsol.ca",
    transitInfo:
      "SkyTrain: Stadium-Chinatown Station (10 min walk). False Creek Ferry from Granville Island.",
    parkingInfo:
      "Limited street parking. Impark lot on Pacific Blvd. Recommend using transit.",
    safetyNotes:
      "Large outdoor event. Wear sunscreen. Water stations throughout venue. Medical staff on site.",
    socialProof: {
      rating: 4.9,
      reviewsCount: 1243,
    },
  },
  {
    id: "1",
    title: "Filipino Cultural Festival",
    culture: "Filipino",
    category: "Festival",
    date: "2026-03-15",
    startTime: "10:00 AM",
    endTime: "6:00 PM",
    venueName: "Vancouver Convention Centre",
    address: "999 Canada Place, Vancouver, BC V6C 3C1",
    neighborhood: "Vancouver",
    priceType: "Free",
    priceRange: "$0",
    language: "English / Filipino",
    familyFriendly: true,
    accessibility: {
      wheelchairAccess: true,
      quietSpace: false,
      captions: false,
    },
    shortDescription:
      "Celebrate Filipino culture with traditional performances, delicious cuisine, and vibrant community activities.",
    fullDescription:
      "Join us for Vancouver's largest Filipino cultural celebration featuring live music and dance performances from award-winning artists, authentic Filipino food vendors, traditional crafts demonstrations, children's activities, and cultural exhibits.",
    tags: ["Music", "Food", "Dance", "Family Friendly", "Free"],
    imageUrl:
      "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
    organizerName: "Filipino-Canadian Community Association",
    organizerContactEmail: "info@fcca-vancouver.ca",
    websiteUrl: "https://fcca-vancouver.ca",
    transitInfo: "SkyTrain Canada Line: Canada Place Station (direct access)",
    parkingInfo: "Convention Centre parkade: $15/day",
    safetyNotes:
      "Large crowds expected. Arrive early. Emergency services on site.",
    socialProof: { rating: 4.8, reviewsCount: 342 },
  },
  {
    id: "2",
    title: "Brazilian Food Market",
    culture: "Brazilian",
    category: "Food",
    date: "2026-03-18",
    startTime: "11:00 AM",
    endTime: "5:00 PM",
    venueName: "Granville Island Public Market",
    address: "1689 Johnston St, Vancouver, BC V6H 3S2",
    neighborhood: "Vancouver",
    priceType: "Free",
    priceRange: "Food costs vary",
    language: "English / Portuguese",
    familyFriendly: true,
    accessibility: {
      wheelchairAccess: true,
      quietSpace: true,
      captions: false,
    },
    shortDescription:
      "Taste authentic Brazilian cuisine from local vendors showcasing regional dishes and flavors.",
    fullDescription:
      "Experience the vibrant flavors of Brazil at Granville Island! Sample authentic Brazilian street food, pastries, tropical fruits, and beverages from award-winning vendors.",
    tags: ["Food", "Market", "Culinary", "Family Friendly"],
    imageUrl:
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
    organizerName: "Granville Island Markets",
    organizerContactEmail: "events@granvilleis.com",
    websiteUrl: "https://granvilleis.com",
    transitInfo: "Bus 50, 51, or Aquabus ferry from downtown",
    parkingInfo: "Paid parking: $2.50/hour on island",
    socialProof: { rating: 4.6, reviewsCount: 218 },
  },
  {
    id: "3",
    title: "Chinese New Year Celebration",
    culture: "Chinese",
    category: "Festival",
    date: "2026-03-20",
    startTime: "1:00 PM",
    endTime: "9:00 PM",
    venueName: "Chinatown Spring Festival",
    address: "200 Keefer St, Vancouver, BC V6A 1X5",
    neighborhood: "Vancouver",
    priceType: "Free",
    priceRange: "$0",
    language: "English / Mandarin / Cantonese",
    familyFriendly: true,
    accessibility: {
      wheelchairAccess: true,
      quietSpace: false,
      captions: false,
    },
    shortDescription:
      "Ring in the new year with traditional dragon parades, fireworks, cultural performances, and festive celebrations.",
    fullDescription:
      "Vancouver's most anticipated cultural celebration returns! Join thousands as we celebrate the Lunar New Year with spectacular dragon and lion parades, traditional lion dances, cultural performances, fireworks display, and authentic Chinese cuisine.",
    tags: ["Festival", "Music", "Dance", "Family Friendly", "Free"],
    imageUrl:
      "https://images.pexels.com/photos/3680316/pexels-photo-3680316.jpeg?auto=compress&cs=tinysrgb&w=800",
    organizerName: "Chinatown Business Improvement Association",
    organizerContactEmail: "events@vancouverchinatown.ca",
    ticketUrl: "https://eventbrite.example.com/chinese-new-year",
    transitInfo: "SkyTrain Stadium-Chinatown Station",
    parkingInfo: "Limited street parking; recommend using SkyTrain",
    safetyNotes: "Expect large crowds. Street closures in effect.",
    socialProof: { rating: 4.9, reviewsCount: 567 },
  },
  {
    id: "4",
    title: "Indigenous Storytelling Night",
    culture: "First Nations",
    category: "Theatre",
    date: "2026-03-22",
    startTime: "7:00 PM",
    endTime: "9:00 PM",
    venueName: "Museum of Anthropology",
    address: "6393 NW Marine Dr, Vancouver, BC V6T 1Z1",
    neighborhood: "Vancouver",
    priceType: "Paid",
    priceRange: "$15–$25",
    language: "English",
    familyFriendly: true,
    accessibility: { wheelchairAccess: true, quietSpace: true, captions: true },
    shortDescription:
      "Experience powerful Indigenous storytelling that honors ancestral knowledge and contemporary voices.",
    fullDescription:
      "Join acclaimed Indigenous storytellers as they share traditional and contemporary stories that celebrate Indigenous cultures, histories, and wisdom.",
    tags: ["Theatre", "Cultural", "Educational", "Family Friendly"],
    imageUrl:
      "https://images.pexels.com/photos/5214407/pexels-photo-5214407.jpeg?auto=compress&cs=tinysrgb&w=800",
    organizerName: "Museum of Anthropology",
    organizerContactEmail: "programming@moa.ubc.ca",
    ticketUrl: "https://eventbrite.example.com/indigenous-storytelling",
    websiteUrl: "https://moa.ubc.ca",
    transitInfo: "Bus 4, 10, 14 to UBC campus",
    parkingInfo: "$2.50/hour in UBC parking lots",
    safetyNotes: "Respectful silence requested during performances.",
    socialProof: { rating: 4.9, reviewsCount: 156 },
  },
  {
    id: "5",
    title: "Latin Music Festival",
    culture: "Latin American",
    category: "Music",
    date: "2026-03-25",
    startTime: "4:00 PM",
    endTime: "11:00 PM",
    venueName: "Queen Elizabeth Park",
    address: "4600 Cambie St, Vancouver, BC V5Z 2Z1",
    neighborhood: "Vancouver",
    priceType: "Paid",
    priceRange: "$20–$35",
    language: "English / Spanish",
    familyFriendly: false,
    accessibility: {
      wheelchairAccess: true,
      quietSpace: false,
      captions: false,
    },
    shortDescription:
      "Dance to live Latin music from top regional and international artists in Vancouver's most beautiful park.",
    fullDescription:
      "Get ready to dance! The Latin Music Festival brings world-class Latin music artists to Queen Elizabeth Park for an unforgettable evening. From salsa and reggaeton to cumbia and bachata, enjoy non-stop entertainment from 4 PM to 11 PM.",
    tags: ["Music", "Dance", "Live Performance", "Party"],
    imageUrl:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
    organizerName: "Latin Vancouver Events",
    organizerContactEmail: "info@latinvancouver.ca",
    ticketUrl: "https://eventbrite.example.com/latin-festival",
    transitInfo: "SkyTrain Canada Line: King Edward Station, then bus to park",
    parkingInfo: "Limited parking at park; arrive early or use transit",
    safetyNotes: "Designated security and first aid stations throughout venue.",
    socialProof: { rating: 4.7, reviewsCount: 289 },
  },
  {
    id: "6",
    title: "Italian Street Food Fair",
    culture: "Italian",
    category: "Food",
    date: "2026-03-28",
    startTime: "12:00 PM",
    endTime: "8:00 PM",
    venueName: "Commercial Drive Festival",
    address: "Commercial Dr, Vancouver, BC V5L 3X1",
    neighborhood: "Vancouver",
    priceType: "Free",
    priceRange: "Food costs vary",
    language: "English / Italian",
    familyFriendly: true,
    accessibility: {
      wheelchairAccess: true,
      quietSpace: true,
      captions: false,
    },
    shortDescription:
      "Celebrate Italian cuisine and culture on vibrant Commercial Drive with authentic food vendors and entertainment.",
    fullDescription:
      "Experience Little Italy at its best! Commercial Drive transforms into a pedestrian festival featuring authentic Italian street food vendors, artisan craftspeople, live Italian music, wine and espresso tastings, and cultural exhibitions.",
    tags: ["Food", "Market", "Cultural", "Family Friendly", "Free"],
    imageUrl:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
    organizerName: "Commercial Drive BIA",
    organizerContactEmail: "events@commdr.com",
    websiteUrl: "https://commdr.com",
    transitInfo: "SkyTrain: Commercial-Broadway Station (direct access)",
    parkingInfo: "Street parking available; metered parking nearby",
    socialProof: { rating: 4.8, reviewsCount: 412 },
  },
  {
    id: "7",
    title: "Japanese Cherry Blossom Festival",
    culture: "Japanese",
    category: "Festival",
    date: "2026-03-08",
    startTime: "9:00 AM",
    endTime: "5:00 PM",
    venueName: "VanDusen Botanical Garden",
    address: "5251 Oak St, Vancouver, BC V6M 4H1",
    neighborhood: "Vancouver",
    priceType: "Paid",
    priceRange: "$15–$20",
    language: "English / Japanese",
    familyFriendly: true,
    accessibility: {
      wheelchairAccess: true,
      quietSpace: true,
      captions: false,
    },
    shortDescription:
      "Celebrate spring with traditional performances, tea ceremonies, and stunning cherry blossoms in bloom.",
    fullDescription:
      "Join us for the magical celebration of spring! Walk through over 250 cherry trees in full bloom while enjoying traditional Japanese music, authentic tea ceremonies, taiko drumming performances, and Japanese crafts.",
    tags: ["Festival", "Music", "Cultural", "Family Friendly", "Nature"],
    imageUrl:
      "https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=800",
    organizerName: "VanDusen Botanical Garden",
    organizerContactEmail: "events@vandusengarden.org",
    ticketUrl: "https://eventbrite.example.com/cherry-blossom",
    websiteUrl: "https://vandusengarden.org",
    transitInfo: "Bus 17, 25 to Oak and 37th Avenue",
    parkingInfo: "Free parking on-site",
    socialProof: { rating: 4.9, reviewsCount: 523 },
  },
  {
    id: "8",
    title: "Korean Night Market",
    culture: "Korean",
    category: "Food",
    date: "2026-03-10",
    startTime: "6:00 PM",
    endTime: "11:00 PM",
    venueName: "Robson Street Festival",
    address: "Robson St, Vancouver, BC V6E 1B5",
    neighborhood: "Vancouver",
    priceType: "Free",
    priceRange: "Food costs vary",
    language: "English / Korean",
    familyFriendly: true,
    accessibility: {
      wheelchairAccess: true,
      quietSpace: false,
      captions: false,
    },
    shortDescription:
      "Experience Korean street food, K-pop performances, and vibrant cultural activities on downtown Robson Street.",
    fullDescription:
      "Robson Street comes alive with the energy of Korea! Browse food vendors offering Korean street food classics and enjoy live K-pop performances, karaoke contests, cultural booths, and shopping from local Korean businesses.",
    tags: ["Food", "Music", "Market", "Family Friendly", "Free"],
    imageUrl:
      "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800",
    organizerName: "Korean Business Association Vancouver",
    organizerContactEmail: "info@kbavancouver.ca",
    transitInfo: "SkyTrain: Burrard, Granville, or Howe-Main stations",
    parkingInfo: "Street parking and nearby parkades available",
    socialProof: { rating: 4.7, reviewsCount: 301 },
  },
];

export const getEventById = (id: string): Event | undefined => {
  return events.find((event) => event.id === id);
};

export const getEventsByNeighborhood = (
  neighborhood: string,
  excludeId?: string,
): Event[] => {
  return events
    .filter((e) => e.neighborhood === neighborhood && e.id !== excludeId)
    .slice(0, 4);
};

export const getEventsByCulture = (
  culture: string,
  excludeId?: string,
): Event[] => {
  return events
    .filter((e) => e.culture === culture && e.id !== excludeId)
    .slice(0, 4);
};
