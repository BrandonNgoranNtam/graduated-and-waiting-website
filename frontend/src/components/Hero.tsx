import React from 'react'
import FlipClock from "@/components/flipclock/FlipClock";
import useGraduationDate from '@/hooks/useGraduationDate';


const Hero = () => {
    const { graduationDate, loading, error } = useGraduationDate();

    return (
        <>

            <div className="relative overflow-hidden py-24 lg:py-32">
                <div className="container">
                    <div className="max-w-2xl text-center mx-auto">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                            Days Since My Graduation Without A Job
                        </h1>
                        <p className="mt-3 text-xl text-muted-foreground">
                            Tracking every second, application, and rejection until that dream offer arrives.
                        </p>
                    </div>
                    <div className="mt-10 relative max-w-5xl mx-auto">
                        {loading && <p>Loading...</p>}
                        {error && <p>Error: {error}</p>}
                        {graduationDate && (
                            <div className="flex items-center justify-center">
                                <FlipClock graduationDate={graduationDate} />
                            </div>
                        )}

                    </div>
                </div>
            </div>
            {/* End Hero */}
        </>
    )
}

export default Hero

