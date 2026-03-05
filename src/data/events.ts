export interface Event {
  id: string;
  title: string;
  culture: string;
  category: 'Festival' | 'Music' | 'Food' | 'Museum' | 'Community' | 'Theatre';
  date: string;
  startTime: string;
  endTime: string;
  venueName: string;
  address: string;
  neighborhood: string;
  priceType: 'Free' | 'Donation' | 'Paid';
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
    id: '1',
    title: 'Filipino Cultural Festival',
    culture: 'Filipino',
    category: 'Festival',
    date: '2026-03-15',
    startTime: '10:00 AM',
    endTime: '6:00 PM',
    venueName: 'Vancouver Convention Centre',
    address: '999 Canada Place, Vancouver, BC V6C 3C1',
    neighborhood: 'Vancouver',
    priceType: 'Free',
    priceRange: '$0',
    language: 'English / Filipino',
    familyFriendly: true,
    accessibility: {
      wheelchairAccess: true,
      quietSpace: false,
      captions: false
    },
    shortDescription: 'Celebrate Filipino culture with traditional performances, delicious cuisine, and vibrant community activities.',
    fullDescription: 'Join us for Vancouver\'s largest Filipino cultural celebration featuring live music and dance performances from award-winning artists, authentic Filipino food vendors, traditional crafts demonstrations, children\'s activities, and cultural exhibits. This year we\'re showcasing the rich diversity of Filipino regions and heritage.\n\nFree admission for all. Parking available at Convention Centre parkade.',
    tags: ['Music', 'Food', 'Dance', 'Family Friendly', 'Free'],
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizerName: 'Filipino-Canadian Community Association',
    organizerContactEmail: 'info@fcca-vancouver.ca',
    websiteUrl: 'https://fcca-vancouver.ca',
    transitInfo: 'SkyTrain Canada Line: Canada Place Station (direct access)',
    parkingInfo: 'Convention Centre parkade: $15/day',
    safetyNotes: 'Large crowds expected. Arrive early. Emergency services on site.',
    socialProof: {
      rating: 4.8,
      reviewsCount: 342
    }
  },
  {
    id: '2',
    title: 'Brazilian Food Market',
    culture: 'Brazilian',
    category: 'Food',
    date: '2026-03-18',
    startTime: '11:00 AM',
    endTime: '5:00 PM',
    venueName: 'Granville Island Public Market',
    address: '1689 Johnston St, Vancouver, BC V6H 3S2',
    neighborhood: 'Vancouver',
    priceType: 'Free',
    priceRange: 'Food costs vary',
    language: 'English / Portuguese',
    familyFriendly: true,
    accessibility: {
      wheelchairAccess: true,
      quietSpace: true,
      captions: false
    },
    shortDescription: 'Taste authentic Brazilian cuisine from local vendors showcasing regional dishes and flavors.',
    fullDescription: 'Experience the vibrant flavors of Brazil at Granville Island! Sample authentic Brazilian street food, pastries, tropical fruits, and beverages from award-winning vendors. Learn about Brazilian food culture through interactive cooking demonstrations and tastings. This market celebrates the rich culinary heritage of Brazil\'s diverse regions.',
    tags: ['Food', 'Market', 'Culinary', 'Family Friendly'],
    imageUrl: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizerName: 'Granville Island Markets',
    organizerContactEmail: 'events@granvilleis.com',
    websiteUrl: 'https://granvilleis.com',
    transitInfo: 'Bus 50, 51, or Aquabus ferry from downtown',
    parkingInfo: 'Paid parking: $2.50/hour on island',
    socialProof: {
      rating: 4.6,
      reviewsCount: 218
    }
  },
  {
    id: '3',
    title: 'Chinese New Year Celebration',
    culture: 'Chinese',
    category: 'Festival',
    date: '2026-03-20',
    startTime: '1:00 PM',
    endTime: '9:00 PM',
    venueName: 'Chinatown Spring Festival',
    address: '200 Keefer St, Vancouver, BC V6A 1X5',
    neighborhood: 'Vancouver',
    priceType: 'Free',
    priceRange: '$0',
    language: 'English / Mandarin / Cantonese',
    familyFriendly: true,
    accessibility: {
      wheelchairAccess: true,
      quietSpace: false,
      captions: false
    },
    shortDescription: 'Ring in the new year with traditional dragon parades, fireworks, cultural performances, and festive celebrations.',
    fullDescription: 'Vancouver\'s most anticipated cultural celebration returns! Join thousands as we celebrate the Lunar New Year with spectacular dragon and lion parades, traditional lion dances, cultural performances, fireworks display, martial arts demonstrations, and authentic Chinese cuisine. Experience centuries-old traditions brought to life in our vibrant community.',
    tags: ['Festival', 'Music', 'Dance', 'Family Friendly', 'Free'],
    imageUrl: 'https://images.pexels.com/photos/3680316/pexels-photo-3680316.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizerName: 'Chinatown Business Improvement Association',
    organizerContactEmail: 'events@vancouverchinatown.ca',
    ticketUrl: 'https://eventbrite.example.com/chinese-new-year',
    transitInfo: 'SkyTrain Stadium-Chinatown Station',
    parkingInfo: 'Limited street parking; recommend using SkyTrain',
    safetyNotes: 'Expect large crowds. Street closures in effect.',
    socialProof: {
      rating: 4.9,
      reviewsCount: 567
    }
  },
  {
    id: '4',
    title: 'Indigenous Storytelling Night',
    culture: 'First Nations',
    category: 'Theatre',
    date: '2026-03-22',
    startTime: '7:00 PM',
    endTime: '9:00 PM',
    venueName: 'Museum of Anthropology',
    address: '6393 NW Marine Dr, Vancouver, BC V6T 1Z1',
    neighborhood: 'Vancouver',
    priceType: 'Paid',
    priceRange: '$15–$25',
    language: 'English',
    familyFriendly: true,
    accessibility: {
      wheelchairAccess: true,
      quietSpace: true,
      captions: true
    },
    shortDescription: 'Experience powerful Indigenous storytelling that honors ancestral knowledge and contemporary voices.',
    fullDescription: 'Join acclaimed Indigenous storytellers as they share traditional and contemporary stories that celebrate Indigenous cultures, histories, and wisdom. This intimate evening showcases oral traditions that have been passed down through generations, offering audiences a deep connection to the rich heritage of First Nations peoples. All proceeds support Indigenous cultural programs.',
    tags: ['Theatre', 'Cultural', 'Educational', 'Family Friendly'],
    imageUrl: 'https://images.pexels.com/photos/5214407/pexels-photo-5214407.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizerName: 'Museum of Anthropology',
    organizerContactEmail: 'programming@moa.ubc.ca',
    ticketUrl: 'https://eventbrite.example.com/indigenous-storytelling',
    websiteUrl: 'https://moa.ubc.ca',
    transitInfo: 'Bus 4, 10, 14 to UBC campus',
    parkingInfo: '$2.50/hour in UBC parking lots',
    safetyNotes: 'Respectful silence requested during performances.',
    socialProof: {
      rating: 4.9,
      reviewsCount: 156
    }
  },
  {
    id: '5',
    title: 'Latin Music Festival',
    culture: 'Latin American',
    category: 'Music',
    date: '2026-03-25',
    startTime: '4:00 PM',
    endTime: '11:00 PM',
    venueName: 'Queen Elizabeth Park',
    address: '4600 Cambie St, Vancouver, BC V5Z 2Z1',
    neighborhood: 'Vancouver',
    priceType: 'Paid',
    priceRange: '$20–$35',
    language: 'English / Spanish',
    familyFriendly: false,
    accessibility: {
      wheelchairAccess: true,
      quietSpace: false,
      captions: false
    },
    shortDescription: 'Dance to live Latin music from top regional and international artists in Vancouver\'s most beautiful park.',
    fullDescription: 'Get ready to dance! The Latin Music Festival brings world-class Latin music artists to Queen Elizabeth Park for an unforgettable evening. From salsa and reggaeton to cumbia and bachata, enjoy non-stop entertainment from 4 PM to 11 PM. Food trucks, beverages, and a vibrant atmosphere guarantee a night you won\'t forget.\n\nPlease note: This is an adult-focused event (18+ recommended) with loud music and energetic dancing.',
    tags: ['Music', 'Dance', 'Live Performance', 'Party'],
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizerName: 'Latin Vancouver Events',
    organizerContactEmail: 'info@latinvancouver.ca',
    ticketUrl: 'https://eventbrite.example.com/latin-festival',
    transitInfo: 'SkyTrain Canada Line: King Edward Station, then bus to park',
    parkingInfo: 'Limited parking at park; arrive early or use transit',
    safetyNotes: 'Designated security and first aid stations throughout venue.',
    socialProof: {
      rating: 4.7,
      reviewsCount: 289
    }
  },
  {
    id: '6',
    title: 'Italian Street Food Fair',
    culture: 'Italian',
    category: 'Food',
    date: '2026-03-28',
    startTime: '12:00 PM',
    endTime: '8:00 PM',
    venueName: 'Commercial Drive Festival',
    address: 'Commercial Dr, Vancouver, BC V5L 3X1',
    neighborhood: 'Vancouver',
    priceType: 'Free',
    priceRange: 'Food costs vary',
    language: 'English / Italian',
    familyFriendly: true,
    accessibility: {
      wheelchairAccess: true,
      quietSpace: true,
      captions: false
    },
    shortDescription: 'Celebrate Italian cuisine and culture on vibrant Commercial Drive with authentic food vendors and entertainment.',
    fullDescription: 'Experience Little Italy at its best! Commercial Drive transforms into a pedestrian festival featuring authentic Italian street food vendors, artisan craftspeople, live Italian music, wine and espresso tastings, and cultural exhibitions. From fresh pasta to gelato, from traditional recipes passed down through generations to innovative new takes on classics—there\'s something for everyone.',
    tags: ['Food', 'Market', 'Cultural', 'Family Friendly', 'Free'],
    imageUrl: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizerName: 'Commercial Drive BIA',
    organizerContactEmail: 'events@commdr.com',
    websiteUrl: 'https://commdr.com',
    transitInfo: 'SkyTrain: Commercial-Broadway Station (direct access)',
    parkingInfo: 'Street parking available; metered parking nearby',
    socialProof: {
      rating: 4.8,
      reviewsCount: 412
    }
  },
  {
    id: '7',
    title: 'Japanese Cherry Blossom Festival',
    culture: 'Japanese',
    category: 'Festival',
    date: '2026-03-08',
    startTime: '9:00 AM',
    endTime: '5:00 PM',
    venueName: 'VanDusen Botanical Garden',
    address: '5251 Oak St, Vancouver, BC V6M 4H1',
    neighborhood: 'Vancouver',
    priceType: 'Paid',
    priceRange: '$15–$20',
    language: 'English / Japanese',
    familyFriendly: true,
    accessibility: {
      wheelchairAccess: true,
      quietSpace: true,
      captions: false
    },
    shortDescription: 'Celebrate spring with traditional performances, tea ceremonies, and stunning cherry blossoms in bloom.',
    fullDescription: 'Join us for the magical celebration of spring! Walk through over 250 cherry trees in full bloom while enjoying traditional Japanese music, authentic tea ceremonies, taiko drumming performances, and Japanese crafts. Local vendors offer Japanese cuisine and artisan goods. Perfect for families and photography enthusiasts.',
    tags: ['Festival', 'Music', 'Cultural', 'Family Friendly', 'Nature'],
    imageUrl: 'https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizerName: 'VanDusen Botanical Garden',
    organizerContactEmail: 'events@vandusengarden.org',
    ticketUrl: 'https://eventbrite.example.com/cherry-blossom',
    websiteUrl: 'https://vandusengarden.org',
    transitInfo: 'Bus 17, 25 to Oak and 37th Avenue',
    parkingInfo: 'Free parking on-site',
    socialProof: {
      rating: 4.9,
      reviewsCount: 523
    }
  },
  {
    id: '8',
    title: 'Korean Night Market',
    culture: 'Korean',
    category: 'Food',
    date: '2026-03-10',
    startTime: '6:00 PM',
    endTime: '11:00 PM',
    venueName: 'Robson Street Festival',
    address: 'Robson St, Vancouver, BC V6E 1B5',
    neighborhood: 'Vancouver',
    priceType: 'Free',
    priceRange: 'Food costs vary',
    language: 'English / Korean',
    familyFriendly: true,
    accessibility: {
      wheelchairAccess: true,
      quietSpace: false,
      captions: false
    },
    shortDescription: 'Experience Korean street food, K-pop performances, and vibrant cultural activities on downtown Robson Street.',
    fullDescription: 'Robson Street comes alive with the energy of Korea! Browse food vendors offering Korean street food classics—tteokbokki, hotteok, Korean fried chicken, and more. Enjoy live K-pop performances, karaoke contests, cultural booths, and shopping from local Korean businesses. Perfect for foodies and culture enthusiasts.',
    tags: ['Food', 'Music', 'Market', 'Family Friendly', 'Free'],
    imageUrl: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizerName: 'Korean Business Association Vancouver',
    organizerContactEmail: 'info@kbavancouver.ca',
    transitInfo: 'SkyTrain: Burrard, Granville, or Howe-Main stations',
    parkingInfo: 'Street parking and nearby parkades available',
    socialProof: {
      rating: 4.7,
      reviewsCount: 301
    }
  }
];

export const getEventById = (id: string): Event | undefined => {
  return events.find(event => event.id === id);
};

export const getEventsByNeighborhood = (neighborhood: string, excludeId?: string): Event[] => {
  return events.filter(e => e.neighborhood === neighborhood && e.id !== excludeId).slice(0, 4);
};

export const getEventsByCulture = (culture: string, excludeId?: string): Event[] => {
  return events.filter(e => e.culture === culture && e.id !== excludeId).slice(0, 4);
};
