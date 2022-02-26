import FormSelectField, {SelectInputProps} from "./components/FormSelectField";
import FormTextField, {FormTextFieldProps} from "./components/FormTextField";
import PlainSelectField from "./components/PlainSelectField";
import SimpleImage from "./components/SimpleImage";
import CenteredBox from "./components/CenteredBox";
import ParsedText, {markdownComponents} from "./components/ParsedText";
import SoundWrapperComponent from "./components/SoundWrapperComponent";
import ResponsiveInnerContainer from "./components/ResponsiveInnerContainer";
import FormFileDropField from "./components/FormFileDropField";
import FormCheckboxField from "./components/FormCheckboxField";
import DraggablePaper from "./components/DraggablePaper";
import DefaultFallback from "./components/DefaultFallback";
import {propNotNullRendering, conditionalRendering} from "./components/render-utils";

import {
    MenuProps,
    menuIconStyle,
    menuTextStyle,
    menuTextStyleHover,
    MenuSecondaryTypeProps,
    MenuSecondaryText
} from "./styles/menu-styles";

import {ErrorBoundaryWithRetry} from "./components/ErrorBoundaryWithRetry";
import type {ErrorFallbackProps} from "./components/ErrorBoundaryWithRetry";

import BackdropProvider, {useWait} from "./components/BackdropProvider";
import type {BackdropContextProps} from "./components/BackdropProvider";

import DialogProvider, {useDialog} from "./components/DialogProvider";
import type {ShowDialogContextProps} from "./components/DialogProvider";

import {useCustomSnackbar} from "./components/notifications";
import {getSelectItems, baseMenuItems} from "./components/component-helpers";
import type {SelectProps} from "./components/component-helpers";

export type ComponentWithChildrenProps = {
    children: JSX.Element;
};

export const mainFontFamily = {
    fontFamily: 'DefaultTypewriter',
    color: "primary.main"
};

export {
    FormSelectField,
    FormTextField,
    PlainSelectField,
    menuIconStyle,
    menuTextStyle,
    menuTextStyleHover,
    MenuSecondaryText,
    ErrorBoundaryWithRetry,
    BackdropProvider,
    useWait,
    DialogProvider,
    useDialog,
    SimpleImage,
    CenteredBox,
    ParsedText,
    markdownComponents,
    SoundWrapperComponent,
    FormFileDropField,
    FormCheckboxField,
    ResponsiveInnerContainer,
    DraggablePaper,
    DefaultFallback,
    useCustomSnackbar,
    getSelectItems,
    baseMenuItems,
    propNotNullRendering,
    conditionalRendering
};

export type {
    SelectInputProps,
    FormTextFieldProps,
    MenuProps,
    MenuSecondaryTypeProps,
    BackdropContextProps,
    ShowDialogContextProps,
    ErrorFallbackProps,
    SelectProps
}
