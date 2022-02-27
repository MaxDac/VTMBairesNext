import * as React from "react";
import {ReactElement, useEffect, useMemo, useRef, useState} from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {menuIconStyle} from "../styles/menu-styles";
import {useCustomSnackbar} from "./notifications";
import {AlertType} from "vtm-baires-next-utils";

type Props = {
    id?: string;
    soundSourceUrl: string;
}

// TODO - Correct this component to be compatible with Typescript
const SoundWrapperComponent = ({id, soundSourceUrl}: Props): ReactElement => {
    const {enqueueSnackbar} = useCustomSnackbar()
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackDuration, setTrackDuration] = useState(0);
    const [trackCurrent, setTrackCurrent] = useState(0);
    const [volume, setVolume] = useState(30);

    const audioRef = useRef<any>();

    const playingIcon = () => isPlaying
        ? (<PauseIcon sx={menuIconStyle} />)
        : (<PlayArrowIcon sx={menuIconStyle} />);

    const volumeDown = useMemo(() => <VolumeDown sx={{color: "gray"}} />, []);

    const volumeUp = useMemo(() => <VolumeUp sx={{color: "gray"}} />, []);

    useEffect(() => {
        const handleRejection =
            (error: Error) => {
                console.error("Error while reproducing track", error);
                enqueueSnackbar({
                    type: AlertType.Warning,
                    message: "Non è stato possibile riprodurre l'audio che hai fornito"
                });
            };

        if (isPlaying) {
            audioRef.current?.play()?.catch(handleRejection);
        }
        else {
            audioRef.current?.pause()?.catch(handleRejection);
        }
    }, [isPlaying]);

    useEffect(() => {

        audioRef.current?.addEventListener("canplay", function() {
            // @ts-ignore
            this.volume = 0.3;
            // @ts-ignore
            setTrackDuration(_ => this.duration);
        });

        audioRef.current?.addEventListener("timeupdate", function() {
            // @ts-ignore
            setTrackCurrent((_: number) => this.currentTime);
        });

    }, []);

    const onVolumeChanged = (event: Event, value: number | number[], _activeThumb: number) => {
        if (audioRef.current?.volume != null) {
            audioRef.current.volume = (value as number) / 100;
        }

        setVolume((_n: number) => (value as number));
    };

    const onTrackChanged = (event: Event, value: number | number[], _activeThumb: number) => {
        if (audioRef.current?.currentTime != null) {
            audioRef.current.currentTime = value as number;
        }

        setTrackCurrent((_n: number) => value as number);
    };

    const getTrackCurrentFormatted = () => {
        const padding = (s: any) => String(s).padStart(2, "0");
        const totalSeconds = Math.round(trackCurrent);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds - minutes * 60;
        return `${padding(minutes)}:${padding(seconds)}`;
    };

    return (
        <Box>
            <Paper variant="outlined" sx={{mb: 1, px: 1, maxWidth: "410px", margin: "0 auto"}}>
                <Stack direction="row"
                       sx={{mb: 1, px: 1, maxWidth: "400px", margin: "0 auto"}}>
                    <Box sx={{ paddingRight: "1rem"}}>
                        <IconButton aria-label="Play"
                                    onClick={_ => setIsPlaying(p => !p)}>
                            {playingIcon()}
                        </IconButton>
                    </Box>
                    <Slider size="small"
                            max={trackDuration}
                            min={0}
                            defaultValue={0}
                            value={trackCurrent}
                            aria-label="Track"
                            onChange={onTrackChanged}
                            sx={{
                                width: "250px",
                                marginTop: "auto",
                                marginBottom: "auto"
                            }} />
                    <Typography sx={{
                        paddingLeft: "0.7rem",
                        marginTop: "auto",
                        marginBottom: "auto",
                        fontSize: "0.7rem",
                        color: "primary.dark"
                    }}>
                        {getTrackCurrentFormatted()}
                    </Typography>
                    <Stack direction="row"
                           spacing={1}
                           sx={{
                               width: "200px",
                               mb: 1,
                               px: 1,
                               marginTop: "auto",
                               marginBottom: "auto"
                           }}
                           alignItems="center">
                        {volumeDown}
                        <Slider aria-label="Volume"
                                max={100}
                                min={0}
                                value={volume}
                                onChange={onVolumeChanged} />
                        {volumeUp}
                    </Stack>
                </Stack>
                <audio id={id ?? "sound-control-wrapper"}
                       ref={audioRef}
                       src={soundSourceUrl} />
            </Paper>
        </Box>
    );
}

export default SoundWrapperComponent;
