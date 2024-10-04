import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useGraduationDate from '@/hooks/useGraduationDate';
import { CardsStats } from "@/components/Stats";
import PainfulRejections from "@/components/PainfulRejections";
import MoodTracker from "@/components/MoodTracker";
import { HopeChart } from "@/components/HopeChart";
import { EmotionalRollercoaster } from "@/components/EmotionalRollercoaster";
import Hero from "@/components/Hero";


export default function Dashboard() {



    return (
        <>

            {/* <PageHeader>
                <PageHeaderHeading></PageHeaderHeading>
            </PageHeader> */}
            <Hero />
        
            <MoodTracker />
            <CardsStats />

            <div className=" pt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <HopeChart />
                <PainfulRejections />
            </div>
            <EmotionalRollercoaster />

        </>
    )
}

