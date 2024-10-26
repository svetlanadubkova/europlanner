import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { RouteCard } from './RouteCard';
import { ItinerarySection } from './ItinerarySection';
import { WeeklyCalendar } from './WeeklyCalendar';
import { tripData } from '@/data/tripData';
import { type Route } from '@/types/trip';

export const TripPlanner = () => {
  const [selectedRoute, setSelectedRoute] = useState<Route>(tripData.possibleRoutes[0]);
  
  const getCityData = (routeName: string) => {
    const isAmsterdamFirst = routeName.includes("Amsterdam First");
    const firstCityDays = routeName.includes("2 days") ? 2 : 1;
    const secondCityDays = routeName.includes(isAmsterdamFirst ? "Berlin (2 days)" : "Amsterdam (2 days)") ? 2 : 1;
    
    return {
      firstCity: isAmsterdamFirst ? "Amsterdam" : "Berlin",
      secondCity: isAmsterdamFirst ? "Berlin" : "Amsterdam",
      firstCityDays,
      secondCityDays
    };
  };

  const { firstCity, secondCity, firstCityDays, secondCityDays } = getCityData(selectedRoute.name);

  const getRouteSubtitle = (route: Route) => {
    const lastFlight = route.flights[route.flights.length - 1];
    return `April 1-8, 2025 • NYC → Edinburgh → ${firstCity} → ${secondCity} → ${lastFlight.to}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Europe Trip Planner 🗺️</h1>
        <p className="text-gray-600">{getRouteSubtitle(selectedRoute)}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Choose Your Route 🛫</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tripData.possibleRoutes.map((route) => (
              <RouteCard
                key={route.id}
                route={route}
                selected={selectedRoute.id === route.id}
                onClick={() => setSelectedRoute(route)}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Schedule 📅</CardTitle>
        </CardHeader>
        <CardContent>
          <WeeklyCalendar route={selectedRoute} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Selected Itinerary Details ✈️</CardTitle>
        </CardHeader>
        <CardContent>
          <ItinerarySection 
            city={firstCity}
            days={firstCityDays}
            attractions={tripData.attractions[firstCity.toLowerCase()]}
            hostels={tripData.hostels[firstCity.toLowerCase()]}
          />
          <ItinerarySection 
            city={secondCity}
            days={secondCityDays}
            attractions={tripData.attractions[secondCity.toLowerCase()]}
            hostels={tripData.hostels[secondCity.toLowerCase()]}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Travel Tips 💡</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>🌍 The cheapest overall route is starting with Norse+easyJet to Edinburgh (saves $142 vs United)</li>
            <li>⏰ Consider early morning flights between cities to maximize sightseeing time</li>
            <li>🏨 Book hostels in advance, especially in Amsterdam where prices are higher</li>
            <li>🎫 Pre-book popular attractions like Anne Frank House and the Van Gogh Museum</li>
            <li>🚊 Look into city travel cards for public transportation in both cities</li>
            <li>🌧️ Pack layers and rain gear - April weather can be unpredictable</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};