import {ReactElement} from "react";
import NewMessage from "../../../components/messages/NewMessage";
import MainLayout from "../../../components/layouts/MainLayout";

const Index = (): ReactElement => (
    <NewMessage />
);

Index.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default Index;
