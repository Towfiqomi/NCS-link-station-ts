export type Data = Readonly<{
    linkStations: ReadonlyArray<LinkStations>;
    points: ReadonlyArray<Points>;
}>;

export type LinkStations = Readonly<{
    x : number;
    y: number;
    reach : number;
}>;
export type Points = Readonly<{
    x : number;
    y: number;
}>;