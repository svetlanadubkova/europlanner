import { type Route } from '@/types/trip';

interface RouteCardProps {
  route: Route;
  selected: boolean;
  onClick: () => void;
}

export const RouteCard = ({ route, selected, onClick }: RouteCardProps) => {
  const totalCost = route.flights.reduce((sum, flight) => sum + flight.price, 0);
  
  return (
    <div 
      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
        selected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
      }`}
      onClick={onClick}
    >
      <h3 className="font-bold mb-2">Route {route.id}</h3>
      <p className="text-sm text-gray-600 mb-2">Total Cost: ${totalCost}</p>
      <div className="space-y-2">
        {route.flights.map((flight, idx) => (
          <div key={idx} className="text-sm">
            <span className="font-medium">{flight.from} → {flight.to}</span>
            <br />
            <span className="text-gray-500">
              {flight.airline} • {flight.date}
              <br />
              {flight.departure} - {flight.arrival} ({flight.duration})
              <br />
              {flight.stops} • ${flight.price}
              {flight.notes && (
                <>
                  <br />
                  <span className="text-blue-600">{flight.notes}</span>
                </>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};