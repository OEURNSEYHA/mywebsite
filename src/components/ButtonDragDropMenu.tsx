import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

interface Position {
  x: number;
  y: number;
}

const ButtonDragDropMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [buttonPosition, setButtonPosition] = useState<Position>({ x: 5, y: 410 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    
    let x: number, y: number;
    if (e instanceof MouseEvent) {
      x = e.clientX;
      y = e.clientY;
    } else {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    }

    setButtonPosition({
      x: Math.max(0, Math.min(window.innerWidth - 60, x - 30)),
      y: Math.max(0, Math.min(window.innerHeight - 60, y - 30)),
    });
  }, [isDragging]);

  const handleEnd = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("touchend", handleEnd);
    } else {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMove]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const location = useLocation();
  const isOtherPage = location.pathname !== "/";

  return (
    <div className="md:hidden">
      {/* Draggable Floating Button */}
      <div
        className={`fixed z-50 bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-transform duration-300 ease-in-out ${isDragging ? "scale-110" : ""}`}
        style={{ top: `${buttonPosition.y}px`, left: `${buttonPosition.x}px`, width: "40px", height: "40px" }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Menu */}
      {menuOpen && (
        <div
          className="fixed z-40 bg-white rounded-lg shadow-lg p-4 w-64 transition-all duration-300 ease-in-out"
          style={{ top: `${buttonPosition.y + 70}px`, left: `${Math.min(buttonPosition.x, window.innerWidth - 260)}px` }}
        >
          <ul className="space-y-2">
            {[
              { id: "home", label: "🏠 Home" },
              { id: "about", label: "👤 About Me" },
              { id: "resume", label: "🌱 Resume" },
              { id: "skill", label: "💼 Skill" }
            ].map((item) => (
              <li key={item.id} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
                <Link to={isOtherPage ? "/" : "#"} className="block text-gray-700" onClick={() => scrollToSection(item.id)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ButtonDragDropMenu;
