import React, {ReactElement} from "react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import type {Option} from "vtm-baires-next-utils";

export type OnMenuItemSelectedDelegate = () => void;

type Props = {
    children: (delegate: OnMenuItemSelectedDelegate) => any;
};

const MenuLayout = ({children}: Props): ReactElement => {
    const [anchorEl, setAnchorEl] = React.useState<Option<EventTarget & HTMLButtonElement>>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton aria-label="online-menu-button"
                        id="online-menu-button"
                        aria-controls="online-menu-button"
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <Menu id="online-menu-actions"
                  MenuListProps={{
                      'aria-labelledby': 'online-menu-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                      style: {
                          // maxHeight: ITEM_HEIGHT * 4.5,
                          width: '35ch',
                      },
                  }}>
                {children(handleClose)}
            </Menu>
        </div>
    );
}

export default MenuLayout;
