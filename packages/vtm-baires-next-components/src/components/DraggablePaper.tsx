import * as React from "react";
import Draggable from "react-draggable";
import Paper from "@mui/material/Paper";
import type {ReactElement} from "react";

type Props = {
    handleId: string;
};

const DraggablePaper = (props: Props): ReactElement => {
    return (
        <Draggable handle={`#${props.handleId}`}
                   cancel={'[class*="MuiDialogContent-root"]'}>
            {/* @ts-ignore */}
            <Paper {...props} />
        </Draggable>
    );
};

export default DraggablePaper;
