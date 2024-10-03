import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FlipClock from "@/components/flipclock/FlipClock";
import useGraduationDate from '@/hooks/useGraduationDate';
import { CardsStats } from "@/components/layouts/Stats";


export default function Dashboard() {

    const { graduationDate, loading, error } = useGraduationDate();


    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Graduated And Still Waiting</PageHeaderHeading>
            </PageHeader>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {graduationDate && (
                <div className="flex items-center justify-center">
                    <FlipClock graduationDate={graduationDate} />
                </div>
            )}

            <CardsStats />
        </>
    )
}

