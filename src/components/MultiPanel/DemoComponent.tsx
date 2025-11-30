import React from 'react';

export interface DemoComponentProps {
}

interface DemoComponentState {
    isDragging: boolean;
    activeSplitter: number | null;
    startPosition: number;
    startSizes: number[];
    paneSizes: number[];
}

export class DemoComponent extends React.Component<DemoComponentProps, DemoComponentState> {
    constructor(props: DemoComponentProps) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidUpdate(prevProps: DemoComponentProps) {
    }

    initializePaneSizes = () => {
    }

    render() {
        return (
            <>
            </>
        );
    }
}