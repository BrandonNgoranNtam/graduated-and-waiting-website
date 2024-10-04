import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

// Define mood labels or emojis based on the progress value
const getMoodLabel = (value: number) => {
  if (value <= 20) return "Absolutely Devastated 😭";
  if (value <= 30) return "Losing Hope 😞";
  if (value <= 40) return "A Bit Down 😕";
  if (value <= 60) return "Neutral 😐";
  if (value <= 80) return "Hopeful 😊";
  return "Feeling Great 😄";
};
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

// Mood Tracker Component
const MoodTracker = () => {
  const moodValue = 25; 

  return (
    <div className="mood-tracker p-4">
      <h2 className="text-lg font-bold mb-4">How Am I Feeling Today ?</h2>

      {/* Mood Label */}
      <div className="text-center text-2xl mb-2">
        {getMoodLabel(moodValue)}
      </div>

      {/* Progress Bar */}
      <Progress value={moodValue} className="mb-4" />

      {/* Mood Value Display */}
      <div className="text-center mt-4">
        Current Mood Level: {moodValue}
      </div>
    </div>
  );
};

export default MoodTracker;
