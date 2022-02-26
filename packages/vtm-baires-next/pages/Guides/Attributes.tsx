import React, {ReactElement, SyntheticEvent} from "react";
import Typography from "@mui/material/Typography";
import {guideStyle, titleStyle} from "../../components/guides/GuidesStyles";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import GuidesAttributesAttributes from "../../components/guides/GuidesAttributesAttributes";
import GuidesAttributesDisciplines from "../../components/guides/GuidesAttributesDisciplines";
import GuidesAttributesAdvantages from "../../components/guides/GuidesAttributesAdvantages";
import GuideLayout from "../../components/layouts/GuideLayout";
import {useCustomLazyLoadQueryNoVar} from "vtm-baires-next-utils/src/relay-utils";
import {attributesCompleteQuery} from "vtm-baires-next-services/graphql-queries/queries/info/AttributesCompleteQuery";
import {
    AttributesCompleteQuery
} from "vtm-baires-next-services/graphql-queries/queries/info/__generated__/AttributesCompleteQuery.graphql";
import {Attribute} from "vtm-baires-next-services/graphql-queries/queries/info/AttributesQuery";
import ParsedText from "../../../vtm-baires-next-components/src/components/ParsedText";
import type {Option} from "vtm-baires-next-utils";
import TabPanel from '@mui/lab/TabPanel';
import {TabContext} from "@mui/lab";

const a11yProps = (index: string) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};

const Attributes = (): ReactElement => {
    const [value, setValue] = React.useState("0");

    const handleChange = (event: SyntheticEvent, newValue: any) => {
        setValue(newValue);
    };

    const attributes = useCustomLazyLoadQueryNoVar<AttributesCompleteQuery>(attributesCompleteQuery, {
        fetchPolicy: "store-or-network"
    })?.attributes ?? [];

    const sortAttributes = (name: string) =>
        (a: Option<any>, b: Option<any>) => {
            if (name !== "Attribute") {
                if (a?.name != null && b?.name != null) {
                    if (a.name > b.name) return 1;
                    else if (a.name === b.name) return 0;
                    else return -1;
                }

                return 0;
            }
            else {
                return Number(a?.id) - Number(b?.id);
            }
        };

    const ShowAttribute = ({name, description}: {
        name: Option<string>,
        description: Option<string>
    }) => (
        <>
            <h3 style={titleStyle}>{name}</h3>
            <ParsedText text={description} internalDivSx={{fontSize: "0.9rem"}} />
        </>
    );

    const showAttributes = (name: string, section?: string) =>
        attributes
            .filter(a => a?.attributeType?.name === name)
            .filter(a => section == null || a?.attributeType?.section === section)
            .sort((a, b) => sortAttributes(name)(a, b))
            .map(a => (<ShowAttribute key={a?.id} 
                                      name={a?.name} 
                                      description={a?.description} />));

    return (
        <Box sx={{ width: '100%' }}>
            <Typography paragraph>
                <h1 style={titleStyle}>
                    Abilit&agrave;, Attributi e altri valori della Scheda
                </h1>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Si propongono di seguito una lista di Attributi, Abilit&agrave;, Discipline e Vantaggi disponibili in fase di creazione,
                con relativa descrizione.
            </Typography>

            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Attributi e Abilità" {...a11yProps("0")} />
                        <Tab label="Discipline" {...a11yProps("1")} />
                        <Tab label="Vantaggi" {...a11yProps("2")} />
                    </Tabs>
                </Box>
                <TabPanel value={value}>
                    <GuidesAttributesAttributes showAttributes={showAttributes} />
                </TabPanel>
                <TabPanel value={value}>
                    <GuidesAttributesDisciplines />
                </TabPanel>
                <TabPanel value={value}>
                    <GuidesAttributesAdvantages showAttributes={showAttributes} />
                </TabPanel>
            </TabContext>
        </Box>
    );
}

Attributes.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default Attributes;
