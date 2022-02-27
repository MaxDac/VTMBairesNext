import type {Haven} from "vtm-baires-next-services/graphql-queries/queries/haven/GetHavensQuery";
import type {Option} from "vtm-baires-next-utils";

const cos30 = Math.cos(Math.PI / 6);

const sen30 = 0.5;

export type MapAreas = {
    id?: string;
    name?: string;
    title?: string;
    shape: string;
    coords: number[];
    active?: boolean;
    disabled?: boolean;
    href?: string;
    fillColor?: string;
    strokeColor?: string;
    lineWidth?: number;
    preFillColor?: string;
    haven: Haven;
};

/**
 * Groups the havens by the y coordinate.
 * @param havens The havens
 * @return {Map<number, Array<Haven>>} The grouped havens.
 */
export const groupHavens = (havens: ReadonlyArray<Option<Haven>>): Map<number, Array<Haven>> => {
    const ret = new Map<number, Array<Haven>>();

    for (const haven of havens) {
        if (haven?.y != null) {
            const y = haven.y;
            if (ret.has(y)) {
                ret.get(y)?.push(haven);
            }
            else {
                ret.set(y, [haven]);
            }
        }
    }

    return ret;
};

export const personalHavenPreFillColor = "#39C93940";
export const occupiedHavenPreFillColor = "#C9191980";
export const freeHavenPreFillColor = "#19791980";

export const personalHavenFillColor = "#39C93940";
export const occupiedHavenFillColor = "#F9393940";
export const freeHavenFillColor = "#59191940";

export const personalHavenFillColorWithoutOpacity = "#39C939";
export const occupiedHavenFillColorWithoutOpacity = "#F93939";
export const freeHavenFillColorWithoutOpacity = "#591919";

const buildAreaForStats = (characterId: Option<string>,
                           haven: Haven,
                           coords: Array<[number, number]>,
                           defaultTitle: string): MapAreas => {
    const fillColor =
        haven?.character?.id != null
            ? (haven.character.id === characterId
                ? "#39C93940"
                : "#C9191980")
            : "#19791980";

    const preFillColor =
        haven?.character?.id != null
            ? (haven.character.id === characterId
                ? "#39C93940"
                : "#F9393940")
            : "#59191940";

    return {
        id: haven.id,
        title: haven?.name ?? defaultTitle,
        shape: "poly",
        coords: coords.flatMap(([x, y]) => [x, y]),
        fillColor,
        strokeColor: "black",
        lineWidth: 2,
        preFillColor,
        haven: haven
    };
};

export const animalResonanceFillColor = "#00800040";
export const phlegmaticResonanceFillColor = "#ACACAC40";
export const cholericResonanceFillColor = "#FFA50040";
export const melancholyResonanceFillColor = "#00008040";
export const sanguineResonanceFillColor = "#DC143C40";
export const noResonanceFillColor = "#2F4F4F40";

const getResonanceColor = (haven: Haven) => {
    switch (haven.resonance) {
        case "Animale": return animalResonanceFillColor;
        case "Flemmatica": return phlegmaticResonanceFillColor;
        case "Collerica": return cholericResonanceFillColor;
        case "Malinconica": return melancholyResonanceFillColor;
        case "Sanguigna": return sanguineResonanceFillColor;
        default: return noResonanceFillColor;
    }
};

const buildAreaForResonances = (characterId: Option<string>, haven: Haven, coords: Array<[number, number]>, defaultTitle: string): MapAreas => {
    const color = getResonanceColor(haven);

    return {
        id: haven.id,
        title: haven?.name ?? defaultTitle,
        shape: "poly",
        coords: coords.flatMap(([x, y]) => [x, y]),
        fillColor: color,
        strokeColor: "black",
        lineWidth: 2,
        preFillColor: color,
        haven: haven
    };
};

/**
 * Builds the single area, given the coords and the other information of the area.
 * @param showResonances Determines whether to show the resonances color.
 * @param characterId The session character id.
 * @param haven The haven instance.
 * @param coords The area coords.
 * @param defaultTitle The default title.
 * @return {MapAreas} The area.
 */
export const buildArea = (showResonances: boolean, characterId: Option<string>, haven: Haven, coords: Array<[number, number]>, defaultTitle: string): MapAreas => {
    if (!showResonances) {
        return buildAreaForStats(characterId, haven, coords, defaultTitle);
    }

    return buildAreaForResonances(characterId, haven, coords, defaultTitle);
};

/**
 * Computes the hexagonal coords given the hexagon center and its radius.
 * @param center The hexagon center in coordinates.
 * @param radius The hexagon radius.
 * @return {[number,number][]} The hexagon map coordinates.
 */
export const computeHexagonCoords = (center: [number, number], radius: number): Array<[number, number]> => {
    const [x, y] = center;
    const r = radius;

    const positiveOrZero = (x: number) => x >= 0 ? x : 0;

    return [
        [x, positiveOrZero(y - r)],
        [Math.round(x + r * cos30), positiveOrZero(Math.round(y - r * sen30))],
        [Math.round(x + r * cos30), Math.round(y + r * sen30)],
        [Math.round(x), Math.round(y + r)],
        [positiveOrZero(Math.round(x - r * cos30)), Math.round(y + r * sen30)],
        [positiveOrZero(Math.round(x - r * cos30)), positiveOrZero(Math.round(y - r * sen30))]
    ];
};

/**
 * Draws a line of hexagons of determined length.
 * @param showResonances Determines whether to show the resonances colors in the areas or not.
 * @param characterId The session character id.
 * @param index The row index.
 * @param havens The havens.
 * @param radius Each hexagon radius.
 * @return {Array<MapAreas>} The array of map areas.
 */
export const drawLine = (showResonances: boolean,
                         characterId: Option<string>,
                         index: number,
                         havens: Array<Haven>,
                         radius: number): Array<MapAreas> => {
    const d = 2 * radius * cos30;

    const [x1, y1] = [
        radius + (index % 2 === 1 ? radius * cos30 : 0),
        radius + d * cos30 * index
    ];

    return havens.map((haven, i) => buildArea(
        showResonances,
        characterId,
        haven,
        computeHexagonCoords([x1 + d * i, y1], radius),
        `Posizione ${i} - ${index}`));
};
