"use client";

import { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Initial chart data
const initialChartData = [
  { month: "September", mood: 50 },
  { month: "October", mood: 55 },
  { month: "November", mood: 60 },
  { month: "December", mood: 50 },
  { month: "January", mood: 50 },
  { month: "February", mood: 55 },
  { month: "March", mood: 60 },
  { month: "April", mood: 40 },
  { month: "May", mood: 45 },
  { month: "June", mood: 50 },
];

// Chart configuration
const chartConfig = {
  mood: {
    label: "Mood",
    color: "#8884d8", // Setting a fixed color to make sure the line is visible
  },
};

export function EmotionalRollercoaster() {
  const [chartData, setChartData] = useState(initialChartData);

  // Function to update the mood based on positive/negative buttons
  const updateMood = (change: number) => {
    setChartData((prevData) =>
      prevData.map((point, index) => ({
        ...point,
        mood: Math.max(0, Math.min(100, point.mood + (index === 5 ? change : 0))),
      }))
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Emotional Rollercoaster</CardTitle>
        <CardDescription>Job Search Mood Tracker</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 10,
              bottom: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis domain={[0, 100]} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              type="monotone"
              dataKey="mood"
              stroke={chartConfig.mood.color}
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* Positive event buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => updateMood(10)}
            className="p-2 bg-green-500 text-white rounded"
          >
            Found a promising company
          </button>
          <button
            onClick={() => updateMood(15)}
            className="p-2 bg-green-500 text-white rounded"
          >
            Nailed the interview
          </button>
        </div>

        {/* Negative event buttons */}
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => updateMood(-10)}
            className="p-2 bg-red-500 text-white rounded"
          >
            No response to email
          </button>
          <button
            onClick={() => updateMood(-15)}
            className="p-2 bg-red-500 text-white rounded"
          >
            Rejected
          </button>
        </div>

        {/* Additional information */}
        <div className="flex gap-2 font-medium leading-none mt-4">
          {chartData[5].mood > 50 ? (
            <>
              Trending up <TrendingUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Trending down <TrendingDown className="h-4 w-4" />
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
