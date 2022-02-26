import * as React from "react";
import {ReactElement} from "react";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';
import {rangeArray} from "vtm-baires-next-utils";

const DefaultFallback = (): ReactElement => {
    const SkeletonRow = () => (
        <table style={{width: "100%"}}>
            <tbody>
                <tr>
                    <td style={{width: "50px"}}>
                        <Skeleton variant="circular">
                            <Avatar />
                        </Skeleton>
                    </td>
                    <td>
                        <Skeleton width="100%" />
                        <Skeleton width="100%" height="10px" />
                        <Skeleton width="100%" height="10px" />
                        <Skeleton width="100%" height="10px" />
                    </td>
                </tr>
            </tbody>
        </table>
    );

    const rows = () => {
        const rows = [];

        for (const idx of rangeArray(1, 5)) {
            rows.push(<SkeletonRow key={idx} />);
        }

        return rows;
    }

    return (
        <Box sx={{ width: "100%" }}>
            {rows()}
        </Box>
    );
}

export default DefaultFallback;
