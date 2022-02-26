import * as React from 'react';
import {ReactElement, useMemo, useState} from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type {Option} from "vtm-baires-next-utils";
import {useDropzone} from "react-dropzone";
import {compressImage} from "vtm-baires-next-utils";
import {useTheme} from "@mui/material/styles";

export type FormFileDropFieldProps = {
    changed: (largeImage: Option<string>, smallImage: Option<string>) => void;
    fieldName: string;
    description?: string;
    acceptedFiles?: Option<string[]>;
    showLargePreview?: Option<boolean>;
    showChatPreviews?: Option<boolean>;
};

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#33333',
    color: '#33333',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const FormFileDropField = (props: FormFileDropFieldProps): ReactElement => {
    const theme = useTheme()
    const [largePreview, setLargePreview] = useState<string>("");
    const [preview, setPreview] = useState<string>("");

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        accept: props.acceptedFiles?.join(', ') ?? 'image/png',
        onDrop: async acceptedFiles => {
            if (acceptedFiles && acceptedFiles.length && acceptedFiles.length > 0) {
                const large = await compressImage(acceptedFiles[0], 200, 200);
                const small = await compressImage(acceptedFiles[0], 50, 50);

                setLargePreview(large);
                setPreview(small);

                props.changed(large, small);
            }
        }
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        // $FlowFixMe
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    const showPreview = () => {
        if ((props.showLargePreview || props.showChatPreviews) && preview && preview !== "") {
            const wrapStackItem = (item: any): any => (
                <Box sx={{padding: "1rem"}}>
                    {item}
                </Box>
            );

            const buildStackItems = () => {
                const previews = [];

                if (props.showLargePreview) {
                    previews.push(
                        wrapStackItem(
                            <img key={1} src={largePreview} alt="original size" />
                        )
                    );
                }

                if (props.showChatPreviews) {
                    previews.push(
                        wrapStackItem(
                            <img src={preview} alt="original size" />
                        ),
                        wrapStackItem(
                            <Avatar alt="preview" src={preview} style={{
                                width: theme.spacing(7),
                                height: theme.spacing(7),
                            }} />
                        )
                    );
                }

                if (previews.length > 0) {
                    return [
                        <Typography sx={{padding: "1rem"}}>Previews: </Typography>,
                        ...previews
                    ];
                }

                return previews;
            };

            return (<Stack direction="row">{buildStackItems()}</Stack>);
        }
        else {
            return <></>
        }
    };

    const getDescription = () =>
        props.description != null
            ? (<p>{props.description}</p>)
            : (<></>);

    return (
        <>
            <section className="container">
                {/* @ts-ignore */}
                <div {...getRootProps({style})}>
                    <input {...getInputProps()} />
                    {getDescription()}
                    <p>Trascina un file su questa area, o clicca per aggiungere un'immagine.</p>
                    <em>(Saranno accettati solo file png)</em>
                </div>
            </section>
            {showPreview()}
        </>
    );
}

export default FormFileDropField;
