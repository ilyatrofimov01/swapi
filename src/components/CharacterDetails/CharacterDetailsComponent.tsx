import { Card, Typography, Divider } from "antd";
import { Character } from "types/character";
import CharacterAttributes from "./CharacterAttributes/CharacterAttributes";
import CharacterSection from "./CharacterSection/CharacterSection";
import FavoriteSelector from "components/shared-components/FavoriteSelector/FavoriteSelector";
import EditableTitle from "./EditableTitle/EditableTitle";
import { observer } from "mobx-react-lite";
import { useStore } from "store/useStore";

import "./index.scss";

const { Text } = Typography;

interface CharacterDetailsProps {
    character: Character;
}

const CharacterDetailsComponent = observer(function ({ character }: CharacterDetailsProps): JSX.Element { 
    const {favoriteCharactersStore: {charactersNewNameByUrl}} = useStore();

    const characterName = charactersNewNameByUrl[character.url] || character.name;
    
    return (
        <div className="character-details">
            <Card className="character-card" style={{padding: 0}}>
                <EditableTitle characterName={characterName} characterUrl={character.url} />
                <CharacterAttributes character={character} />
                <Divider />
                <CharacterSection title="Films" items={character.films} />
                <CharacterSection title="Species" items={character.species} />
                <CharacterSection title="Vehicles" items={character.vehicles} />
                <CharacterSection title="Starships" items={character.starships} />
                <Divider />
                <Text type="secondary">Created: {new Date(character.created).toLocaleString()}</Text>
                <br />
                <Text type="secondary">Edited: {new Date(character.edited).toLocaleString()}</Text>
                <FavoriteSelector characterUrl={character.url} />
            </Card>
        </div>
    );
});

export default CharacterDetailsComponent;