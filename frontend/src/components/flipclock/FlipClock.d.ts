// frontend/src/components/flipclock/FlipClock.d.ts

declare module '@/components/flipclock/FlipClock' {
    import { Component } from 'react';

    interface FlipClockProps {
        graduationDate: string;
    }

    class FlipClock extends Component<FlipClockProps> {}

    export default FlipClock;
}
