import {ReactElement} from "react";
import {useRouter} from "next/router";
import CharacterSheet from "../../../components/character/CharacterSheet";

const Index = (): ReactElement => {
    const router = useRouter()
    const {id} = router.query

    return (
        <CharacterSheet id={id as string} reload />
    );
};

export default Index;
