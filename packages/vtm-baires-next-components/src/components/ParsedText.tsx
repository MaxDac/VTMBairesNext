import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ReactMarkdown from 'react-markdown';
import type {Option} from "vtm-baires-next-utils";
import {replaceAll} from "vtm-baires-next-utils";

type Props = {
    text: Option<string>;
    sx?: any;
    internalDivSx?: any;
    components?: any;
    ignoreDefaultComponents?: boolean;
    useDivsInsteadOfParagraphs?: boolean;
    useNaturalNewLine?: boolean;
}

export const markdownComponents: any = {
    h1: "h2",
    em: ({node, ...props}: any) => <span style={{color: 'red'}} {...props} />
}

type ComponentWithChildren = {
    children: ReactElement;
}

const ParsedText = ({
                        text,
                        sx,
                        internalDivSx,
                        components,
                        ignoreDefaultComponents,
                        useDivsInsteadOfParagraphs,
                        useNaturalNewLine
}: Props): JSX.Element => {
    const parseComponents = () => {
        if (!!components) {
            return components;
        }

        if (ignoreDefaultComponents === true) {
            return null;
        }

        return markdownComponents;
    };

    const ParagraphMapper = ({children}: ComponentWithChildren) => (
        <Typography component="div" paragraph sx={internalDivSx}>
            {children}
        </Typography>
    );

    const DivMapper = ({children}: ComponentWithChildren) => (
        <Box component="div" sx={internalDivSx}>
            {children}
        </Box>
    );

    const applyNewLine = (text: string) => {
        const components = () =>
            replaceAll(replaceAll(text, "[i]", "_"), "[/i]", "_")
                .split("\n")
                .filter(f => f != null && f !== "")
                .map((f, index) => {
                    const markdown = (
                        <ReactMarkdown components={parseComponents()}>
                            {f}
                        </ReactMarkdown>
                    );

                    return useDivsInsteadOfParagraphs
                        ? (<DivMapper key={index}>{markdown}</DivMapper>)
                        : (<ParagraphMapper key={index}>{markdown}</ParagraphMapper>)
                });

        return (
            <>
                {components()}
            </>
        )
    };

    const formattedText = (text: string) => {
        if (useNaturalNewLine) {
            return (
                <ReactMarkdown components={parseComponents()}>
                    {text}
                </ReactMarkdown>
            );
        }

        return applyNewLine(text);
    };

    return (
        <Typography component="div" sx={sx}>
            {formattedText(text ?? "")}
        </Typography>
    );
}

export default ParsedText;
