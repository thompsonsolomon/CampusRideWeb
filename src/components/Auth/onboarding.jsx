import { useState, useRef } from "react";
import { onboardingData } from "../../data";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate()

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const minSwipeDistance = 50; // px

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (distance > minSwipeDistance && current < onboardingData.length - 1) {
      // swipe left
      setCurrent((prev) => prev + 1);
    }

    if (distance < -minSwipeDistance && current > 0) {
      // swipe right
      setCurrent((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (current < onboardingData.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      console.log("Go to login");
      navigate("/auth/login");
    }
  };

  const handleSkip = () => {
    console.log("Skip onboarding");
    navigate("/auth/login");
  };

  return (
    <div className="h-screen max-h-screen w-full bg-white flex flex-col overflow-hidden">
      {/* Skip */}
      <div className="flex justify-end p-6 ">
        <button
          onClick={handleSkip}
          className="text-gray-500 text-sm"
        >
          Skip
        </button>
      </div>

      {/* Swipe Area */}
      <div
        className="flex-1 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {onboardingData.map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 flex flex-col items-center justify-center px-4"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-90 object-contain mb-10 select-none"
                draggable={false}
              />

              {/* Text */}
              <h2 className="text-[20px]  text-black font-bold text-center mb-[18px]">
                {item.title} <span className="text-yellow-500 ">{item.add}</span>
              </h2>
              <p className="text-gray-500 text-[14px] text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-3 mb-4">
        {onboardingData.map((_, index) => {
          const isActive = index === current;

          return (
            <div
              key={index}
              className={`
          h-2 rounded-full
          transition-all duration-300 ease-in-out
          ${isActive ? "w-9 bg-yellow-500 scale-110" : "w-2 bg-gray-300 scale-100"}
        `}
            />
          );
        })}
      </div>



      {/* Continue Button */}
      <div className="p-6 flex justify-center">
        <button
          onClick={handleNext}
          className="w-[90%] bg-yellow-500 text-white py-4 rounded-full text-lg font-semibold"
        >
          {current === onboardingData.length - 1
            ? "Get Started"
            : "Next"}
        </button>
      </div>
    </div>
  );
}
