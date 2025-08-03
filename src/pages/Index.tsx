import { Header } from "@/components/layout/Header";
import { SportsCarousel } from "@/components/SportsCarousel";

export default function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-1 flex flex-col bg-gradient-to-br from-gray-50 to-blue-50 p-6">
        <div className="space-y-8 max-w-md mx-auto text-center mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
       
        </div>
        
        {/* Sports Games Carousel */}
        <SportsCarousel />
      </div>
    </div>
  );
}