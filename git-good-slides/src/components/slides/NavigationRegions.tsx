import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationRegionsProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

const NavigationRegions = ({ onPrev, onNext, canGoPrev, canGoNext }: NavigationRegionsProps) => {
  return (
    <>
      {canGoPrev && (
        <button
          onClick={onPrev}
          className="nav-region-left group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 text-foreground/50 group-hover:text-accent transition-colors" />
        </button>
      )}
      {canGoNext && (
        <button
          onClick={onNext}
          className="nav-region-right group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 text-foreground/50 group-hover:text-accent transition-colors" />
        </button>
      )}
    </>
  );
};

export default NavigationRegions;
