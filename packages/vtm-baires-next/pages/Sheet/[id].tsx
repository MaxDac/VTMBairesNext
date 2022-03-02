import {ReactElement} from "react";
import {useRouter} from "next/router";
import CharacterSheet from "../../components/character/CharacterSheet";
import MainLayout from "../../components/layouts/MainLayout";

const Index = (): ReactElement => {
    const router = useRouter()
    const {id} = router.query

    return (
        <CharacterSheet id={id as string} />
    );
};

Index.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default Index;
