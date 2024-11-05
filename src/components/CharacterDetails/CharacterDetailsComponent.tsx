import { Card, Typography, Divider } from "antd";
import { Character } from "types/character";
import CharacterAttributes from "./CharacterAttributes/CharacterAttributes";
import CharacterSection from "./CharacterSection/CharacterSection";
import "./index.scss";

const { Title, Text } = Typography;

interface CharacterDetailsProps {
    character: Character;
}

function CharacterDetailsComponent({ character }: CharacterDetailsProps): JSX.Element {
    return (
        <div className="character-details">
            <Card className="character-card">
                <Title level={2} className="character-name">{character.name}</Title>
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
            </Card>
        </div>
    );
}

export default CharacterDetailsComponent;