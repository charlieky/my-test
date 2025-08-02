import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";

export const Header = () => {
  const [language, setLanguage] = useState("vi");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isLoggedIn] = useState(true); // Simulate logged in state for demo

  const navItems = [
  {
    name: "LỊCH TRỰC TIẾP, ",
    path: "/lich-truc-tiep",
    hasDropdown: true,
    dropdownItems: [
      { name: "BÓNG ĐÁ", icon: "/assets/icons/nav-hover/icon-nav-hover/bongda.svg", path: "/bong-da" },
      { name: "ĐUA BÌ", icon: "/assets/icons/nav-hover/icon-nav-hover/duabi.svg", path: "/dua-bi" },
      { name: "BÓNG RỔ", icon: "/assets/icons/nav-hover/icon-nav-hover/bongro.svg", path: "/bong-ro" },
      { name: "E-SPORTS", icon: "/assets/icons/nav-hover/icon-nav-hover/esport.svg", path: "/e-sports" },
      { name: "CASINO", icon: "/assets/icons/nav-hover/icon-nav-hover/casino.svg", path: "/casino" },
    ],
  },
  {
    name: "LỊCH THI ĐẤU",
    path: "/lich-thi-dau",
    hasDropdown: true,
    dropdownItems: [
      { name: "BÓNG ĐÁ", icon: "/assets/icons/nav-hover/icon-nav-hover/bongda.svg", path: "/lich-thi-dau/bong-da" },
      { name: "ĐUA BÌ", icon: "/assets/icons/nav-hover/icon-nav-hover/duabi.svg", path: "/lich-thi-dau/dua-bi" },
      { name: "BÓNG RỔ", icon: "/assets/icons/nav-hover/icon-nav-hover/bongro.svg", path: "/lich-thi-dau/bong-ro" },
      { name: "E-SPORTS", icon: "/assets/icons/nav-hover/icon-nav-hover/esport.svg", path: "/lich-thi-dau/e-sports" },
      { name: "CASINO", icon: "/assets/icons/nav-hover/icon-nav-hover/casino.svg", path: "/lich-thi-dau/casino" },
    ],
  },
 
  { name: "TỶ LỆ KÈO", path: "/ty-le-keo", hasDropdown: false },

   {
    name: "KẾT QUẢ",
    path: "/ket-qua",
    hasDropdown: true,
    dropdownItems: [
      { name: "BÓNG ĐÁ", icon: "/assets/icons/nav-hover/icon-nav-hover/bongda.svg", path: "/ket-qua/bong-da" },
      { name: "ĐUA BÌ", icon: "/assets/icons/nav-hover/icon-nav-hover/duabi.svg", path: "/ket-qua/dua-bi" },
      { name: "BÓNG RỔ", icon: "/assets/icons/nav-hover/icon-nav-hover/bongro.svg", path: "/ket-qua/bong-ro" },
      { name: "E-SPORTS", icon: "/assets/icons/nav-hover/icon-nav-hover/esport.svg", path: "/ket-qua/e-sports" },
      { name: "CASINO", icon: "/assets/icons/nav-hover/icon-nav-hover/casino.svg", path: "/ket-qua/casino" },
    ],
  },
  { name: "PHÒNG CHÁT", path: "/phong-chat", hasDropdown: false },
  { name: "TIN TỨC", path: "/tin-tuc", hasDropdown: false },
];



const handleMouseEnter = (navName: string) => {
  setHoveredNav(navName);
};

const handleMouseLeave = () => {
  setHoveredNav(null);
};


  return (
    <header className="w-full relative">
      {/* Logo with black background - spans both header bars */}
      <div className="absolute top-0 left-0 z-10 h-full">
        <div className="h-full items-center justify-center">
          <Link to="/" className="flex items-center justify-center">
            <img src="/assets/images/Header_Logo.png" alt="Logo" className="h-full" />
          </Link>
        </div>
      </div>
      
      {/* Top Navigation Bar - Yellow Background */}
      <div className="bg-yellow-400 text-black py-4 px-6">
        <div className="container mx-auto flex justify-end items-center">
          {/* Spacer to push content to the right of the logo */}
          <div className="w-64 hidden lg:block"></div>
          
          {/* Top Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 flex-grow justify-center">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to={item.path} 
                  className={`hover:text-white transition font-semibold ${hoveredNav === item.name ? 'text-white' : ''}`}
                >
                  {item.name}
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && hoveredNav === item.name && (
                  <div className="absolute top-full left-0 bg-black text-white rounded-b-md overflow-hidden z-20 min-w-[240px] shadow-lg">
                    {item.dropdownItems?.map((dropItem) => (
                      <Link 
                        key={dropItem.name}
                        to={dropItem.path}
                        className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition"
                      >
                        <img src={dropItem.icon} alt={dropItem.name} className="w-6 h-6" />
                        <span className="font-medium">{dropItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Auth Section */}
          <div className="hidden lg:flex items-center ml-6">
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                {/* Welcome message and coins */}
                <div className="flex items-center text-sm font-medium rounded-full bg-white/10 px-3 py-1.5 text-black">
                  <span className="mr-2">Xin chào, NguyenVanDen</span>
                  
                  {/* Coins display */}
                  <div className="flex items-center gap-1 bg-orange-100 rounded-full px-2 py-0.5">
                    <span className="text-yellow-600 font-bold">1000</span>
                    <button className="rounded-full bg-orange-500 text-white w-5 h-5 flex items-center justify-center text-xs font-bold">
                      +
                    </button>
                  </div>
                  
                  {/* User icons */}
                  <div className="flex items-center gap-1 ml-2">
                    <button className="text-yellow-600">
                      🏆
                    </button>
                    <button className="text-yellow-600">
                      📧
                    </button>
                    <button className="text-yellow-600">
                      🔔
                    </button>
                    <img 
                      src="https://i.pravatar.cc/40" 
                      alt="User" 
                      className="w-7 h-7 rounded-full border-2 border-yellow-600" 
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  className="bg-white text-black hover:bg-gray-100 rounded-full px-6 font-semibold"
                >
                  ĐĂNG KÝ
                </Button>
                <Button 
                  variant="default" 
                  className="bg-black hover:bg-gray-900 text-white rounded-full px-6 font-semibold"
                >
                  ĐĂNG NHẬP
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Secondary Navigation Bar with black background */}
      <div className="bg-black text-white py-2 px-6">
        <div className="container mx-auto flex flex-wrap items-center">
          {/* Spacer for the logo area on desktop */}
          <div className="w-64 hidden lg:block"></div>
          
          {/* Secondary Nav Items */}
          <div className="flex items-center space-x-4 overflow-x-auto pb-1 flex-grow">
            <NavButton 
              icon="/assets/icons/icon/bangtin.svg" 
              label="Bảng Tin" 
            />
            <NavButton 
              icon="/assets/icons/icon/reels.svg" 
              label="Reels" 
            />
            <NavButton 
              icon="/assets/icons/icon/highlight.svg" 
              label="Highlight" 
            />
            <NavButton 
              icon="/assets/icons/icon/tipkeo.svg" 
              label="Tip Kèo" 
            />
            <NavButton 
              icon="/assets/icons/icon/phimanh.svg" 
              label="Phim Ảnh" 
            />
            <NavButton 
              icon="/assets/icons/icon/truyentranh.svg" 
              label="Truyện Tranh" 
            />
          </div>

          {/* Language and Theme Toggle */}
          <div className="flex items-center space-x-3 ml-auto">
            {/* Language Button */}
            <Button 
              variant="ghost" 
              size="sm"
              className="rounded-full bg-red-500 text-white hover:bg-red-600 flex items-center  px-3"
              onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
            >
                    <img src="/assets/images/vn.png" alt="Logo" className="h-full" />
              <span className="text-sm">TIẾNG VIỆT</span>
            </Button>

            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-2 bg-white/10 px-2 py-1 rounded-full">
              <span className="text-yellow-400">☀️</span>
              <Switch />
              <span className="text-white">🌙</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// NavButton component for secondary navigation items with SVG icon
const NavButton = ({ icon, label }: { icon: string; label: string }) => (
  <button className="flex items-center space-x-2 px-3 py-1 hover:bg-gray-800 rounded-md transition">
    <img src={icon} alt={`${label} icon`} className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </button>
);