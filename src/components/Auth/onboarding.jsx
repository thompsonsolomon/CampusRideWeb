import { useState, useRef } from "react";
import { onboardingData } from "../../data";

export default function Onboarding() {
  const [current, setCurrent] = useState(0);

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
      // navigate("/login");
    }
  };

  const handleSkip = () => {
    console.log("Skip onboarding");
    // navigate("/login");
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col overflow-hidden">
      {/* Skip */}
      <div className="flex justify-end p-6">
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
              className="w-full flex-shrink-0 flex flex-col items-center justify-center px-6"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-xs h-72 object-contain mb-10 select-none"
                draggable={false}
              />

              {/* Text */}
              <h2 className="text-2xl font-bold text-center mb-3">
                {item.title}
              </h2>
              <p className="text-gray-500 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="p-6">
        <button
          onClick={handleNext}
          className="w-full bg-black text-white py-4 rounded-xl text-lg font-semibold"
        >
          {current === onboardingData.length - 1
            ? "Get Started"
            : "Continue"}
        </button>
      </div>
    </div>
  );
}
