import type {ReactElement} from "react";
import React, {useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from "@mui/material/Box";
import {mainFontFamily} from "vtm-baires-next-components";
import CharacterSheetInfoTab from "./CharacterSheetInfoTab";
import CharacterSheetStatsTab from "./CharacterSheetStatsTab";
import CharacterSheetDataTab from "./CharacterSheetDataTab";
import {TabPanel} from "@mui/lab";

type Props = {
    characterQuery: {id: string}
}

const a11yProps = (index: number) => ({
    id: `scrollable-force-tab-${index - 1}`,
    'aria-controls': `scrollable-force-tabpanel-${index - 1}`,
});

const CharacterSheetTabs = ({characterQuery}: Props): ReactElement => {
    const [value, setValue] = useState("0");

    const handleChange = (_: any, newValue: string) => {
        setValue(newValue);
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example">
                    <Tab label="Info" {...a11yProps(0)} sx={mainFontFamily} />
                    <Tab label="Scheda" {...a11yProps(1)} sx={mainFontFamily} />
                    <Tab label="Dati del Personaggio" {...a11yProps(2)} sx={mainFontFamily} />
                </Tabs>
            </Box>
            <TabPanel value="0">
                <CharacterSheetInfoTab characterQuery={characterQuery} />
            </TabPanel>
            <TabPanel value="1">
                <CharacterSheetStatsTab characterQuery={characterQuery} />
            </TabPanel>
            <TabPanel value="2">
                <CharacterSheetDataTab characterQuery={characterQuery} />
            </TabPanel>
        </Box>
    );
}

export default CharacterSheetTabs;
