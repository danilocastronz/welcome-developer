import * as React from "react";
export interface State {
    textLabel: string;
    measureValue: string;
    size: number;
}
export declare const initialState: State;
export declare class ReactCard extends React.Component<{}, State> {
    constructor(props: any);
    private static updateCallback;
    static update(newState: State): void;
    state: State;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default ReactCard;
