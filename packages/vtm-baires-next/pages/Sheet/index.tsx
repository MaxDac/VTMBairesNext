import {ReactElement} from "react";
import CharacterSheet from "../../components/character/CharacterSheet";
import MainLayout from "../../components/layouts/MainLayout";

const Index = (): ReactElement => (
    <CharacterSheet />
);

Index.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default Index;
