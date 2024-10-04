"use client"

import { useState } from "react"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Button } from "@/components/ui/button"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Get the current month and generate the past 6 months
const today = new Date()
const currentMonth = today.getMonth()
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const pastSixMonths = months.slice(currentMonth - 5, currentMonth + 1)

// Initial chart data for months (adjust for different periods if needed)
const initialChartData = pastSixMonths.map((month) => ({
  month,
  hope: 0,
}))

initialChartData[4].hope = 3
initialChartData[5].hope = 1

// Chart configuration
const chartConfig = {
  hope: {
    label: "Hope",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

// HopeChart Component
export function HopeChart() {
  // State to keep track of the chart data
  const [chartData, setChartData] = useState(initialChartData)
  const [totalHope, setTotalHope] = useState(4)

  // Function to handle button clicks and increase hope
  const handleGiveHope = () => {
    // Update the hope count for the current month (for example, we'll increase "May" as the default)
    const updatedChartData = chartData.map((data) =>
      data.month === pastSixMonths[5] ? { ...data, hope: data.hope + 1 } : data
    )
    // Set the new chart data and update the total hope count
    setChartData(updatedChartData)
    setTotalHope(totalHope + 1)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hope Chart</CardTitle>
        <CardDescription>Click the button to give hope</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)} // Show abbreviated month names
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="hope" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex items-center justify-center gap-2 font-medium leading-none">
           {totalHope} total clicks{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <Button onClick={handleGiveHope} variant="outline" className="mx-auto">Give Hope!</Button>
        <div className="leading-none text-muted-foreground">
          Thank you for giving me hope !
        </div>
      </CardFooter>
    </Card>
  )
}


