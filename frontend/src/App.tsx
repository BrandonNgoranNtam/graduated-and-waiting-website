import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { router } from "./Router";
import { Analytics } from "@vercel/analytics/react"


export default function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
            <Analytics/>
        </ThemeProvider>
    )
}
