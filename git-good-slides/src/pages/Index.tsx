import { useState, useEffect, useCallback } from "react";
import SlideWrapper from "@/components/slides/SlideWrapper";
import ProgressBar from "@/components/slides/ProgressBar";
import NavigationRegions from "@/components/slides/NavigationRegions";
import FullscreenToggle from "@/components/slides/FullscreenToggle";
import SlideTitleCard from "@/components/slides/SlideTitleCard";
import SlideTheCycle from "@/components/slides/SlideTheCycle";
import SlideWhoAmI from "@/components/slides/SlideWhoAmI";
import SlideTachiyomi from "@/components/slides/SlideTachiyomi";
import SlideTheEnd from "@/components/slides/SlideTheEnd";
import SlideDiscovery from "@/components/slides/SlideDiscovery";
import SlideContributions from "@/components/slides/SlideContributions";
import SlideMaintainers from "@/components/slides/SlideMaintainers";
import SlideActionPlan from "@/components/slides/SlideActionPlan";
import SlideConclusion from "@/components/slides/SlideConclusion";

const slides = [
  SlideTitleCard,
  SlideTheCycle,
  SlideWhoAmI,
  SlideTachiyomi,
  SlideTheEnd,
  SlideDiscovery,
  SlideContributions,
  SlideMaintainers,
  SlideActionPlan,
  SlideConclusion,
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const goToPrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Fullscreen toggle */}
      <FullscreenToggle />

      {/* Navigation regions */}
      <NavigationRegions
        onPrev={goToPrev}
        onNext={goToNext}
        canGoPrev={currentSlide > 0}
        canGoNext={currentSlide < slides.length - 1}
      />

      {/* Slide content */}
      <SlideWrapper slideKey={currentSlide} direction={direction}>
        <CurrentSlideComponent />
      </SlideWrapper>

      {/* Progress bar */}
      <ProgressBar current={currentSlide} total={slides.length} />

      {/* Keyboard hint */}
      <div className="fixed bottom-8 right-8 text-xs text-muted-foreground font-body hidden md:block">
        Use ← → or Space to navigate
      </div>
    </div>
  );
};

export default Index;
