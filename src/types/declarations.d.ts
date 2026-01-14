declare module 'react-vertical-timeline-component' {
    import * as React from 'react';

    export interface VerticalTimelineProps {
        animate?: boolean;
        className?: string;
        layout?: '1-column' | '1-column-left' | '1-column-right' | '2-columns';
        lineColor?: string;
        children?: React.ReactNode;
    }

    export interface VerticalTimelineElementProps {
        children?: React.ReactNode;
        className?: string;
        contentArrowStyle?: React.CSSProperties;
        contentStyle?: React.CSSProperties;
        date?: string;
        dateClassName?: string;
        icon?: React.ReactNode;
        iconClassName?: string;
        iconOnClick?: () => void;
        iconStyle?: React.CSSProperties;
        onTimelineElementClick?: () => void;
        position?: string;
        style?: React.CSSProperties;
        textClassName?: string;
        intersectionObserverProps?: any;
        visible?: boolean;
    }

    export class VerticalTimeline extends React.Component<VerticalTimelineProps> { }
    export class VerticalTimelineElement extends React.Component<VerticalTimelineElementProps> { }
}
