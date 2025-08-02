import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const games = [
  {
    id: 1,
    image: "/assets/sections/Section/Thumnails_main.png"
  },
  {
    id: 2,
    image: "/assets/sections/Section/Thumnails_main1.png"
  },
  {
    id: 3,
    image: "/assets/sections/Section/Thumnails_main2.png"
  },
  {
    id: 4,
    image: "/assets/sections/Section/Thumnails_main.png"
  },
  {
    id: 5,
    image: "/assets/sections/Section/Thumnails_main1.png"
  },
  {
    id: 6,
    image: "/assets/sections/Section/Thumnails_main2.png"
  },
  {
    id: 7,
    image: "/assets/sections/Section/Thumnails_main.png"
  },
  {
    id: 8,
    image: "/assets/sections/Section/Thumnails_main1.png"
  },
  {
    id: 9,
    image: "/assets/sections/Section/Thumnails_main2.png"
  }
];

const secondRowGames = games.map(game => ({...game, id: game.id + 100}));
const thirdRowGames = games.map(game => ({...game, id: game.id + 200}));

const visibleGames = 5;

export function SportsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const next = () => {
    if (currentIndex < games.length - visibleGames) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(games.length - visibleGames);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth / visibleGames;
      sliderRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  }, [currentIndex]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const renderGameRow = (gamesData: { id: number; image: string }[], rowIndex: number = 0) => {
    return (
      <div className="mb-4 relative">
        {rowIndex > 0 && (
          <div className="mb-4 flex items-center">
            <h2 className="text-2xl font-bold"></h2>
          </div>
        )}
        
        <div className="relative overflow-hidden">
          {rowIndex === 0 && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <Button 
                onClick={prev} 
                variant="ghost" 
                className="h-12 w-12 rounded-full bg-white shadow-md hover:bg-gray-100 p-0"
              >
                <img src="/assets/sections/Section/left.png" alt="Previous" className="w-6 h-6" />
              </Button>
            </div>
          )}
          
          <div className="overflow-hidden">
            <div 
              className="flex space-x-4"
              ref={rowIndex === 0 ? sliderRef : undefined}
              style={rowIndex === 0 ? { transform: `translateX(-${currentIndex * (100 / visibleGames)}%)`, transition: "transform 500ms ease-in-out" } : {}}
            >
              {gamesData.map((game) => (
                <div 
                  key={game.id} 
                  className="relative flex-shrink-0"
                  style={{ width: `${120 / visibleGames}%` }}
                >
                  <div className="rounded-xl overflow-hidden h-full">
                    <img 
                      src={game.image} 
                      alt={`Game ${game.id}`} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {rowIndex === 0 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <Button 
                onClick={next} 
                variant="ghost" 
                className="h-12 w-12 rounded-full bg-white shadow-md hover:bg-gray-100 p-0"
              >
                <img src="/assets/sections/Section/right.png" alt="Next" className="w-6 h-6" />
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold"></h2>
       <div className="flex items-center">
  <Button 
    onClick={toggleExpanded}
    variant="ghost" 
    className="text-black-600 hover:text-black-800 flex items-center"
  >
    {isExpanded ? 'Thu gọn' : 'Xem tất cả'}
    {isExpanded ? (
      <ChevronUp className="h-5 w-5 ml-1" />
    ) : (
      <ChevronDown className="h-5 w-5 ml-1" />
    )}
  </Button>
</div>

      </div>
      
      {renderGameRow(games)}
      
      <div 
        className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {renderGameRow(secondRowGames, 1)}
        {renderGameRow(thirdRowGames, 2)}
      </div>
    </div>
  );
}
