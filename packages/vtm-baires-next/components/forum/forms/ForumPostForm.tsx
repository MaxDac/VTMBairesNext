import React from "react";
import ForumFormLayout from "../layout/ForumFormLayout";
import Button from "@mui/material/Button";
import {useTheme} from "@mui/material/styles";
import type {ReactElement} from "react";
import {FormTextField} from "vtm-baires-next-components";

type Props = {
    title: string;
    confirmButtonText: string;
    goBack: () => void;
    formik: any;
}

const ForumPostForm = ({title, confirmButtonText, goBack, formik}: Props): ReactElement => {
    const theme = useTheme();
    return (
        <ForumFormLayout title={title} goBack={goBack}>
            <form style={{
                width: '100%', // Fix IE 11 issue.
                marginTop: "10px",
            }} noValidate onSubmit={formik.handleSubmit}>
                <FormTextField formik={formik}
                               fieldName="text"
                               label="Testo dell'intervento"
                               fullWidth
                               multiline
                               minRows={4} />
                <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    sx={{
                        margin: theme.spacing(3, 0, 2),
                    }}>
                    {confirmButtonText}
                </Button>
            </form>
        </ForumFormLayout>
    );
}

export default ForumPostForm;
