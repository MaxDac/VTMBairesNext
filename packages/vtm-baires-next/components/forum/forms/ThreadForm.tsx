import React from "react";
import ForumFormLayout from "../layout/ForumFormLayout";
import Button from "@mui/material/Button";
import {useTheme} from "@mui/material/styles";
import type {ReactElement} from "react";
import {boolean, object, string, array} from "yup";
import Box from "@mui/material/Box";
import type {Option} from "vtm-baires-next-utils";
import {useRecoilValue} from "recoil";
import {isUserMasterSelector} from "../../../session/selectors/recoil-selectors";
import {FormCheckboxField, FormTextField} from "vtm-baires-next-components";
import CharactersSelectControl from "../../CharactersSelectControl";

type Props = {
    title: string;
    description: string;
    onGame: Option<boolean>;
    goBack: () => void;
    formik: any;
    buttonText: string;
};

export const CreateNewThreadValidationSchema = (isMaster: boolean): any => {
    const defaultShape = {
        title: string().required("Richiesto"),
        description: string()
    };

    const shape =
        isMaster
            ? {
                ...defaultShape,
                highlighted: boolean().required(),
                characterIds: array().of(string())
            }
            : defaultShape;

    return object().shape(shape);
};

const ThreadForm = ({title, description, onGame, goBack, formik, buttonText}: Props): ReactElement => {
    const theme = useTheme();
    const isUserMaster = useRecoilValue(isUserMasterSelector);

    const highlightedControl = () =>
        isUserMaster
            ? (<FormCheckboxField formik={formik}
                                  fieldName="highlighted"
                                  label="Importante" />)
            : (<></>);

    const selectCharacterControl = () =>
        isUserMaster && onGame === true
            ? (
                <Box sx={{textAlign: "center"}}>
                    <CharactersSelectControl formik={formik}
                                             multiple
                                             fieldName="characterIds"
                                             label="Personaggi autorizzati"
                                             containerSx={{
                                                 width: "70%"
                                             }} />
                </Box>
            )
            : (<></>);

    return (
        <ForumFormLayout title={title}
                         description={description}
                         goBack={goBack}>
            <form style={{
                width: '100%',
                marginTop: "10px",
            }} noValidate onSubmit={formik.handleSubmit}>
                <FormTextField formik={formik} fieldName="title" label="Titolo" fullWidth />
                <FormTextField formik={formik} fieldName="description" label="Descrizione" fullWidth />
                {highlightedControl()}
                {selectCharacterControl()}
                <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    sx={{
                        margin: theme.spacing(3, 0, 2),
                    }}>
                    {buttonText}
                </Button>
            </form>
        </ForumFormLayout>
    );
}

export default ThreadForm;
