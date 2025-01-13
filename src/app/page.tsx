'use client';

import EmpathySection from '@/components/sections/EmpathySection';
import GrowthJourney from '@/components/sections/GrowthJourney';
import SuccessStories from '@/components/sections/SuccessStories';
import TurningPoint from '@/components/sections/TurningPoint';
import Solutions from '@/components/sections/Solutions';
import GetStarted from '@/components/sections/GetStarted';

export default function Home() {
    return (
        <main className="min-h-screen">
            <EmpathySection />
            <GrowthJourney />
            <SuccessStories />
            <TurningPoint />
            <Solutions />
            <GetStarted />
        </main>
    );
}
