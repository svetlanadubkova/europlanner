import { type TripData } from '@/types/trip';

const flightData = {
  toEdinburgh: [
    {
      airline: 'United Airlines',
      departure: 'EWR 8:00 PM',
      arrival: 'EDI 8:05 AM (+1)',
      duration: '7h 05m',
      price: 340,
      stops: 'Direct',
      from: 'NYC',
      to: 'Edinburgh',
    },
    {
      airline: 'Norse + easyJet',
      departure: 'JFK 6:20 PM',
      arrival: 'EDI 9:40 AM (+1)',
      duration: '10h 20m',
      price: 198,
      stops: '1 stop (LGW)',
      from: 'NYC',
      to: 'Edinburgh',
    },
  ],
  edinburghToAmsterdam: [
    {
      airline: 'easyJet',
      departure: '7:00 AM',
      arrival: '9:35 AM',
      duration: '1h 35m',
      price: 67,
      stops: 'Direct',
      from: 'Edinburgh',
      to: 'Amsterdam',
    },
    {
      airline: 'KLM',
      departure: '1:25 PM',
      arrival: '4:00 PM',
      duration: '1h 35m',
      price: 120,
      stops: 'Direct',
      from: 'Edinburgh',
      to: 'Amsterdam',
    },
    {
      airline: 'KLM Eco',
      departure: '9:10 AM',
      arrival: '11:45 AM',
      duration: '1h 35m',
      price: 152,
      stops: 'Direct',
      from: 'Edinburgh',
      to: 'Amsterdam',
    },
  ],
  edinburghToBerlin: [
    {
      airline: 'easyJet',
      departure: '10:25 AM',
      arrival: '1:35 PM',
      duration: '2h 10m',
      price: 107,
      stops: 'Direct',
      from: 'Edinburgh',
      to: 'Berlin',
    },
  ],
  berlinToAmsterdam: [
    {
      airline: 'easyJet',
      departure: '7:45 AM',
      arrival: '9:15 AM',
      duration: '1h 30m',
      price: 42,
      stops: 'Direct',
      from: 'Berlin',
      to: 'Amsterdam',
    },
    {
      airline: 'easyJet',
      departure: '6:10 AM',
      arrival: '7:40 AM',
      duration: '1h 30m',
      price: 44,
      stops: 'Direct',
      from: 'Berlin',
      to: 'Amsterdam',
    },
    {
      airline: 'KLM Cityhopper',
      departure: '10:45 AM',
      arrival: '12:10 PM',
      duration: '1h 25m',
      price: 107,
      stops: 'Direct',
      from: 'Berlin',
      to: 'Amsterdam',
    },
  ],
  amsterdamToBerlin: [
    {
      airline: 'easyJet',
      departure: '8:10 AM',
      arrival: '9:35 AM',
      duration: '1h 25m',
      price: 99,
      stops: 'Direct',
      from: 'Amsterdam',
      to: 'Berlin',
    },
  ],
  returnHome: [
    {
      airline: 'LEVEL (via BCN)',
      departure: 'BER 1:50 PM',
      arrival: 'JFK 9:40 PM',
      duration: '13h 50m',
      price: 305,
      stops: '1 stop',
      from: 'Berlin',
      to: 'NYC',
    },
    {
      airline: 'LEVEL (via BCN)',
      departure: 'AMS 2:25 PM',
      arrival: 'JFK 9:40 PM',
      duration: '13h 15m',
      price: 251,
      stops: '1 stop',
      from: 'Amsterdam',
      to: 'NYC',
    },
  ],
};

const attractions = {
  amsterdam: [
    'Canal cruise 🚤',
    'Coffeeshops (green & white license sticker) ☕',
    'Smart shops (magic truffles) 🍄',
    'Keukenhof Tulip Gardens 🌷',
    'Amsterdam Lookout/Over the Edge swing 🎢',
    '80s Roller Skating 🛼',
    'Anne Frank House 🏛️',
    '5D Flight VR Rollercoaster 🎮',
    'Free Classical Concerts 🎵',
    'Van Gogh Museum 🎨',
  ],
  berlin: [
    'Memorial to the Murdered Jews of Europe 🏛️',
    'Berlin Wall Memorial 🧱',
    "Teufelsberg's US Cold War Bunker 🏰",
    'Bike riding at Tempelhofer Feld (former airport) 🚲',
  ],
};

const hostels = {
  amsterdam: [
    {
      name: "St. Christopher's at the Winston",
      location: 'Near Amsterdam Centraal',
      highlights:
        'Private rooms, in-house bar with food discounts, easy city-center access',
      price: '€150-€220 per night',
    },
    {
      name: 'ClinkNOORD',
      location: 'Across river from central station (free ferry)',
      highlights: 'Lively bar setup, private 2-bed rooms, artsy decor, café',
      price: '€210-€290 per night',
    },
    {
      name: 'The Bulldog Hostel',
      location: 'Short walk from central Amsterdam',
      highlights: 'Private rooms, bar and café, popular social spot',
      price: '€180-€250 per night',
    },
  ],
  berlin: [
    {
      name: "Wombat's City Hostel",
      location: 'Near Alexanderplatz',
      highlights: 'Private rooms, rooftop bar with city views, social vibe',
      price: '€130-€190 per night',
    },
    {
      name: 'Circus Hostel',
      location: 'Rosenthaler Platz',
      highlights: 'Private rooms, bar with events, close to Museum Island',
      price: '€140-€200 per night',
    },
    {
      name: "The Cat's Pajamas Hostel",
      location: 'Trendy Neukölln',
      highlights: 'Private rooms, cozy bar, laid-back vibe',
      price: '€130-€190 per night',
    },
  ],
};

const possibleRoutes = [
  {
    id: 1,
    name: 'Amsterdam First (2 days) → Berlin (1 day)',
    flights: [
      {
        from: 'NYC',
        to: 'Edinburgh',
        airline: 'United Airlines',
        price: 340,
        departure: 'EWR 8:00 PM',
        arrival: 'EDI 8:05 AM (+1)',
        duration: '7h 05m',
        stops: 'Direct',
        date: 'April 1',
      },
      {
        from: 'Edinburgh',
        to: 'Amsterdam',
        airline: 'easyJet',
        price: 67,
        departure: '7:00 AM',
        arrival: '9:35 AM',
        duration: '1h 35m',
        stops: 'Direct',
        date: 'April 5',
      },
      {
        from: 'Amsterdam',
        to: 'Berlin',
        airline: 'easyJet',
        price: 99,
        departure: '8:10 AM',
        arrival: '9:35 AM',
        duration: '1h 25m',
        stops: 'Direct',
        date: 'April 7',
      },
      {
        from: 'Berlin',
        to: 'NYC',
        airline: 'LEVEL',
        price: 305,
        departure: 'BER 1:50 PM',
        arrival: 'JFK 9:40 PM',
        duration: '13h 50m',
        stops: '1 stop',
        date: 'April 8',
        notes: 'Via BCN',
      },
    ],
  },
  {
    id: 2,
    name: 'Amsterdam First (2 days) → Berlin (1 day) - Budget',
    flights: [
      {
        from: 'NYC',
        to: 'Edinburgh',
        airline: 'Norse + easyJet',
        price: 198,
        departure: 'JFK 6:20 PM',
        arrival: 'EDI 9:40 AM (+1)',
        duration: '10h 20m',
        stops: '1 stop (LGW)',
        date: 'April 1',
      },
      {
        from: 'Edinburgh',
        to: 'Amsterdam',
        airline: 'easyJet',
        price: 67,
        departure: '7:00 AM',
        arrival: '9:35 AM',
        duration: '1h 35m',
        stops: 'Direct',
        date: 'April 5',
      },
      {
        from: 'Amsterdam',
        to: 'Berlin',
        airline: 'easyJet',
        price: 99,
        departure: '8:10 AM',
        arrival: '9:35 AM',
        duration: '1h 25m',
        stops: 'Direct',
        date: 'April 7',
      },
      {
        from: 'Berlin',
        to: 'NYC',
        airline: 'LEVEL',
        price: 305,
        departure: 'BER 1:50 PM',
        arrival: 'JFK 9:40 PM',
        duration: '13h 50m',
        stops: '1 stop',
        date: 'April 8',
        notes: 'Via BCN',
      },
    ],
  },
  {
    id: 3,
    name: 'Amsterdam First (2 days) → Berlin (1 day) - KLM Option',
    flights: [
      {
        from: 'NYC',
        to: 'Edinburgh',
        airline: 'United Airlines',
        price: 340,
        departure: 'EWR 8:00 PM',
        arrival: 'EDI 8:05 AM (+1)',
        duration: '7h 05m',
        stops: 'Direct',
        date: 'April 1',
      },
      {
        from: 'Edinburgh',
        to: 'Amsterdam',
        airline: 'KLM',
        price: 120,
        departure: '1:25 PM',
        arrival: '4:00 PM',
        duration: '1h 35m',
        stops: 'Direct',
        date: 'April 5',
      },
      {
        from: 'Amsterdam',
        to: 'Berlin',
        airline: 'easyJet',
        price: 99,
        departure: '8:10 AM',
        arrival: '9:35 AM',
        duration: '1h 25m',
        stops: 'Direct',
        date: 'April 7',
      },
      {
        from: 'Berlin',
        to: 'NYC',
        airline: 'LEVEL',
        price: 305,
        departure: 'BER 1:50 PM',
        arrival: 'JFK 9:40 PM',
        duration: '13h 50m',
        stops: '1 stop',
        date: 'April 8',
        notes: 'Via BCN',
      },
    ],
  },
  {
    id: 4,
    name: 'Berlin First (2 days) → Amsterdam (1 day)',
    flights: [
      {
        from: 'NYC',
        to: 'Edinburgh',
        airline: 'United Airlines',
        price: 340,
        departure: 'EWR 8:00 PM',
        arrival: 'EDI 8:05 AM (+1)',
        duration: '7h 05m',
        stops: 'Direct',
        date: 'April 1',
      },
      {
        from: 'Edinburgh',
        to: 'Berlin',
        airline: 'easyJet',
        price: 107,
        departure: '10:25 AM',
        arrival: '1:35 PM',
        duration: '2h 10m',
        stops: 'Direct',
        date: 'April 5',
      },
      {
        from: 'Berlin',
        to: 'Amsterdam',
        airline: 'easyJet',
        price: 42,
        departure: '7:45 AM',
        arrival: '9:15 AM',
        duration: '1h 30m',
        stops: 'Direct',
        date: 'April 7',
      },
      {
        from: 'Amsterdam',
        to: 'NYC',
        airline: 'LEVEL',
        price: 251,
        departure: 'AMS 2:25 PM',
        arrival: 'JFK 9:40 PM',
        duration: '13h 15m',
        stops: '1 stop',
        date: 'April 8',
        notes: 'Via BCN',
      },
    ],
  },
  {
    id: 5,
    name: 'Berlin First (2 days) → Amsterdam (1 day) - Budget',
    flights: [
      {
        from: 'NYC',
        to: 'Edinburgh',
        airline: 'Norse + easyJet',
        price: 198,
        departure: 'JFK 6:20 PM',
        arrival: 'EDI 9:40 AM (+1)',
        duration: '10h 20m',
        stops: '1 stop (LGW)',
        date: 'April 1',
      },
      {
        from: 'Edinburgh',
        to: 'Berlin',
        airline: 'easyJet',
        price: 107,
        departure: '10:25 AM',
        arrival: '1:35 PM',
        duration: '2h 10m',
        stops: 'Direct',
        date: 'April 5',
      },
      {
        from: 'Berlin',
        to: 'Amsterdam',
        airline: 'easyJet',
        price: 42,
        departure: '7:45 AM',
        arrival: '9:15 AM',
        duration: '1h 30m',
        stops: 'Direct',
        date: 'April 7',
      },
      {
        from: 'Amsterdam',
        to: 'NYC',
        airline: 'LEVEL',
        price: 251,
        departure: 'AMS 2:25 PM',
        arrival: 'JFK 9:40 PM',
        duration: '13h 15m',
        stops: '1 stop',
        date: 'April 8',
        notes: 'Via BCN',
      },
    ],
  },
  {
    id: 6,
    name: 'Berlin First (2 days) → Amsterdam (1 day) - Alternative',
    flights: [
      {
        from: 'NYC',
        to: 'Edinburgh',
        airline: 'United Airlines',
        price: 340,
        departure: 'EWR 8:00 PM',
        arrival: 'EDI 8:05 AM (+1)',
        duration: '7h 05m',
        stops: 'Direct',
        date: 'April 1',
      },
      {
        from: 'Edinburgh',
        to: 'Berlin',
        airline: 'easyJet',
        price: 107,
        departure: '10:25 AM',
        arrival: '1:35 PM',
        duration: '2h 10m',
        stops: 'Direct',
        date: 'April 5',
      },
      {
        from: 'Berlin',
        to: 'Amsterdam',
        airline: 'KLM Cityhopper',
        price: 107,
        departure: '10:45 AM',
        arrival: '12:10 PM',
        duration: '1h 25m',
        stops: 'Direct',
        date: 'April 7',
      },
      {
        from: 'Amsterdam',
        to: 'NYC',
        airline: 'LEVEL',
        price: 251,
        departure: 'AMS 2:25 PM',
        arrival: 'JFK 9:40 PM',
        duration: '13h 15m',
        stops: '1 stop',
        date: 'April 8',
        notes: 'Via BCN',
      },
    ],
  },
];

export const tripData: TripData = {
  flightData,
  attractions,
  hostels,
  possibleRoutes,
};
