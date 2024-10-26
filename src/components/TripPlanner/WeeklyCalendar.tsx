import { type Route } from '@/types/trip';

interface DaySchedule {
  date: string;
  city: string;
  description: string[];
  timing?: string;
}

interface WeeklyCalendarProps {
  route: Route;
}

export const WeeklyCalendar = ({ route }: WeeklyCalendarProps) => {
  const getSchedule = (route: Route): DaySchedule[] => {
    const isAmsterdamFirst = route.name.includes("Amsterdam First");
    const firstCity = isAmsterdamFirst ? "Amsterdam" : "Berlin";
    const secondCity = isAmsterdamFirst ? "Berlin" : "Amsterdam";
    const firstCityDays = route.name.includes(`${firstCity} (2 days)`) ? 2 : 1;
    
    const firstFlight = route.flights[0];
    const secondFlight = route.flights[1];
    const thirdFlight = route.flights[2];
    const finalFlight = route.flights[3];
    
    return [
      {
        date: "Tuesday, April 1",
        city: "In Transit",
        description: ["Evening flight from NYC to Edinburgh"],
        timing: `${firstFlight.departure} - ${firstFlight.arrival}`
      },
      {
        date: "Wednesday, April 2",
        city: "Edinburgh",
        description: [
          "Morning arrival and hotel check-in",
          "Free day to explore Edinburgh Castle and Royal Mile",
          "Evening ghost tour"
        ]
      },
      {
        date: "Thursday, April 3",
        city: "Edinburgh",
        description: [
          "Arthur's Seat morning hike",
          "National Museum of Scotland",
          "Whisky tasting experience"
        ]
      },
      {
        date: "Friday, April 4",
        city: "Edinburgh",
        description: [
          "Day trip to Scottish Highlands",
          "Evening pub crawl in Grassmarket"
        ]
      },
      {
        date: "Saturday, April 5",
        city: firstCity,
        description: [`Flight to ${firstCity}`, `Afternoon exploration`],
        timing: `${secondFlight.departure} - ${secondFlight.arrival}`
      },
      {
        date: "Sunday, April 6",
        city: firstCityDays === 2 ? firstCity : secondCity,
        description: firstCityDays === 2 
          ? [`Full day in ${firstCity}`]
          : [`Flight to ${secondCity}`, `Afternoon exploration`],
        timing: firstCityDays === 2 ? undefined : `${thirdFlight.departure} - ${thirdFlight.arrival}`
      },
      {
        date: "Monday, April 7",
        city: secondCity,
        description: [`Full day in ${secondCity}`],
        timing: firstCityDays === 2 
          ? `${thirdFlight.departure} - ${thirdFlight.arrival}`
          : undefined
      },
      {
        date: "Tuesday, April 8",
        city: "In Transit",
        description: [`Afternoon flight home from ${secondCity}`],
        timing: `${finalFlight.departure} - ${finalFlight.arrival}`
      }
    ];
  };

  const schedule = getSchedule(route);

  return (
    <div className="grid grid-cols-8 gap-2 text-sm">
      {schedule.map((day, idx) => (
        <div 
          key={idx}
          className={`p-3 rounded-lg ${
            day.city === "In Transit" 
              ? 'bg-gray-100' 
              : day.city === "Edinburgh"
              ? 'bg-blue-50'
              : day.city === "Amsterdam"
              ? 'bg-green-50'
              : day.city === "Berlin"
              ? 'bg-purple-50'
              : 'bg-gray-50'
          }`}
        >
          <div className="font-medium">{day.date}</div>
          <div className={`text-xs mt-1 ${
            day.city === "In Transit" ? 'text-gray-600' : 'text-blue-600'
          }`}>
            {day.city}
          </div>
          {day.timing && (
            <div className="text-xs mt-1 text-orange-600 font-medium">
              {day.timing}
            </div>
          )}
          <div className="text-xs mt-1 text-gray-500">
            {day.description.map((desc, i) => (
              <div key={i} className="mb-1">{desc}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};