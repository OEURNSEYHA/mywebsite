import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

function ButtonDragDrpMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 5, y: 410 });
  const [isDragging, setIsDragging] = useState(false);

  // Start dragging
  const handleStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // Handle dragging movement
  const handleMove = useCallback(
    (e) => {
      if (!isDragging) return;

      let x, y;

      if (e.type === "mousemove") {
        x = e.clientX;
        y = e.clientY;
      } else if (e.type === "touchmove") {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      }

      setButtonPosition({
        x: Math.max(0, Math.min(window.innerWidth - 60, x - 30)), // Stay within screen bounds
        y: Math.max(0, Math.min(window.innerHeight - 60, y - 30)),
      });
    },
    [isDragging]
  );

  // Stop dragging
  const handleEnd = () => {
    setIsDragging(false);
  };

  // Add and remove event listeners for dragging
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


 
  localStorage.setItem("test", "hllloeeelll");
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  
  const location = useLocation();
  const urlHome = "/";
  const urlOther = !urlHome.includes(location.pathname);

  return (
    <div className="md:hidden">
      {/* Draggable Floating Button */}
      <div
        className={`fixed  z-50 bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-transform duration-300 ease-in-out ${
          isDragging ? "scale-110" : ""
        }`}
        style={{
          top: `${buttonPosition.y}px`,
          left: `${buttonPosition.x}px`,
          width: "40px",
          height: "40px",
        }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Menu */}
      <div
        className={`fixed z-40 bg-white rounded-lg shadow-lg p-4 w-64 transition-all duration-300 ease-in-out transform ${
          menuOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{
          top: `${buttonPosition.y + 70}px`,
          left: `${Math.min(
            buttonPosition.x,
            window.innerWidth - 260
          )}px`, // Adjust to prevent the menu from overflowing off-screen
        }}
      >
        <ul className="space-y-2">
          <li className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
            <Link href="/" className="block text-gray-700"   to={urlOther ? "/" : "#"}
                onClick={() => scrollToSection("home")}>
              🏠 Home
            </Link>
          </li>
          <li className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
            <Link href="#" className="block text-gray-700" to={urlOther ? "/" : "#"}
                onClick={() => scrollToSection("about")}>
              👤 About Me
            </Link>
          </li>
          <li className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
            <Link href="#" className="block text-gray-700" to={urlOther ? "/" : "#"}
                onClick={() => scrollToSection("resume")}>
              🌱 Resume
            </Link>
          </li>
       
          <li className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
            <Link href="#" className="block text-gray-700" to={urlOther ? "/" : "#"}
                onClick={() => scrollToSection("skill")}>
              💼 Skill
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ButtonDragDrpMenu;
