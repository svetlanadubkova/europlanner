import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { type Hostel, type Attraction } from '@/types/trip';

interface ItinerarySectionProps {
  city: string;
  days: number;
  attractions: Attraction[];
  hostels: Hostel[];
}

export const ItinerarySection = ({
  city,
  days,
  attractions,
  hostels,
}: ItinerarySectionProps) => (
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-3">
      {city} ({days} {days === 1 ? 'day' : 'days'}) 🗺️
    </h3>
    <div className="space-y-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Attractions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-1">
            {attractions.slice(0, days * 5).map((attraction, idx) => (
              <li key={idx} className="text-gray-700">
                {attraction}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recommended Hostels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {hostels.map((hostel, idx) => (
              <div key={idx} className="border-b last:border-b-0 pb-3">
                <h4 className="font-medium">{hostel.name}</h4>
                <p className="text-sm text-gray-600">📍 {hostel.location}</p>
                <p className="text-sm text-gray-600">✨ {hostel.highlights}</p>
                <p className="text-sm text-gray-600">💰 {hostel.price}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);
