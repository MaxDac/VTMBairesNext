import type {ReactElement} from "react";
import React from "react";
import {useFragment} from "react-relay";
import {characterStateFragment} from "vtm-baires-next-services/graphql-queries/queries/character/CharacterFragments";
import Typography from "@mui/material/Typography";
import {mainFontFamily, ParsedText} from "vtm-baires-next-components";
import {
    CharacterFragments_characterState$data,
    CharacterFragments_characterState$key
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/CharacterFragments_characterState.graphql";
import type {Option} from "vtm-baires-next-utils";

type Props = {
    characterQuery: CharacterFragments_characterState$key
};

const CharacterSheetOthersSection = ({characterQuery}: Props): ReactElement => {
    const sheet = useFragment<CharacterFragments_characterState$key>(
        characterStateFragment,
        characterQuery);

    return (
        <>
            <Clan sheet={sheet} />
            <Experience sheet={sheet} />
            <PredatorType sheet={sheet} />
            <Biography sheet={sheet} />
            <DisciplinePowers sheet={sheet} />
            <Specialties sheet={sheet} />
            <Advantages sheet={sheet} />
            <Convictions sheet={sheet} />
            <Objects sheet={sheet} />
            <Notes sheet={sheet} />
        </>
    );
}

const sectionTitleStyle = {
    fontFamily: 'DefaultTypewriter',
    color: "secondary.light",
    fontSize: "24px",
};

type InternalProps = {
    sheet: CharacterFragments_characterState$data
};

const PredatorType = ({sheet}: InternalProps) => (
    <>
        <Typography sx={sectionTitleStyle}>
            Tipo di Predatore
        </Typography>
        <Typography sx={{
            ...mainFontFamily,
            fontSize: "1.2rem",
            marginBottom: "10px"
        }}>
            {sheet?.predatorType?.name}
        </Typography>
        <Typography sx={{
            ...mainFontFamily,
            marginBottom: "10px"
        }}>
            Difficolt&agrave; della caccia: <b>{sheet?.huntDifficulty}</b>
        </Typography>
    </>
);

const Clan = ({sheet}: InternalProps) => (
    <>
        <Typography sx={sectionTitleStyle}>
            Clan
        </Typography>
        <Typography sx={{
            ...mainFontFamily,
            fontSize: "1.2rem",
            marginBottom: "10px"
        }}>
            {sheet?.clan?.name}
        </Typography>
    </>
);

const Experience = ({sheet}: InternalProps) => (
    <>
        <Typography sx={sectionTitleStyle}>
            Esperienza
        </Typography>
        <Typography sx={{
            ...mainFontFamily,
            marginBottom: "10px"
        }}>
            <b>{sheet?.experience}</b> punti esperienza disponibili su <b>{sheet?.totalExperience}</b>
        </Typography>
    </>
);

type InfoElementProps = {
    title: string;
    text: Option<string>;
    titleSx?: any;
    textSx?: any;
}

const InfoElement = ({title, text, titleSx, textSx}: InfoElementProps) => (
    <>
        <Typography sx={{
            ...sectionTitleStyle,
            ...titleSx
        }}>
            {title}
        </Typography>
        <ParsedText text={text ?? ""} internalDivSx={{
            ...mainFontFamily,
            ...textSx
        }} />
    </>
);

const Biography = ({sheet}: InternalProps) => (
    <InfoElement title="Biografia" text={sheet?.biography} titleSx={{
        fontSize: "2rem",
        marginTop: "1rem"
    }} />
);

const DisciplinePowers = ({sheet}: InternalProps) => (
    <InfoElement title="Poteri" text={sheet?.disciplinePowers} textSx={{
        marginBottom: "10px"
    }} />
);

const Specialties = ({sheet}: InternalProps) => (
    <InfoElement title="Specialità" text={sheet?.specialties} textSx={{
        marginBottom: "10px"
    }} />
);

const Advantages = ({sheet}: InternalProps) => (
    <InfoElement title="Vantaggi" text={sheet?.advantages} textSx={{
        marginBottom: "10px"
    }} />
);

const Convictions = ({sheet}: InternalProps) => (
    <InfoElement title="Convinzioni" text={sheet?.convictions} textSx={{
        marginBottom: "10px"
    }} />
);

const Objects = ({sheet}: InternalProps) => (
    <InfoElement title="Oggetti posseduti" text={sheet?.objects} textSx={{
        marginBottom: "10px"
    }} />
);

const Notes = ({sheet}: InternalProps) => (
    <InfoElement title="Note" text={sheet?.notes} textSx={{
        marginBottom: "10px"
    }} />
);

export default CharacterSheetOthersSection;
