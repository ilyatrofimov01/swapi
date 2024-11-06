import { Character } from "types/character";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Card, Typography, Divider } from "antd";
import { ROUTES } from "constants/routes";
import { observer } from "mobx-react-lite";
import FavoriteSelector from "../FavoriteSelector/FavoriteSelector";
import { useStore } from "store/useStore";

import "./index.scss";

interface CharacterCardProps {
    character: Character;
}

const { Title, Text } = Typography;

const CharacterCard = observer(function ({character}: CharacterCardProps): JSX.Element {
    const {favoriteCharactersStore: {charactersNewNameByUrl}} = useStore();

    const characterName = charactersNewNameByUrl[character.url] || character.name;
    const navigate = useNavigate();

    const onCardClick = (): void => {
        navigate({
            pathname: ROUTES.CHARACTER_DETAILS,
            search: createSearchParams({
                characterUrl: character.url
            }).toString()
        });
    };
    
    return (
        <Card
            hoverable 
            className="character-card"
            onClick={onCardClick}
        >
            <Title level={4} className="character-card-title">{characterName}</Title>
            <Divider />
            <div className="character-card-info">
                <Text><strong>Birth Year:</strong> {character.birth_year}</Text>
                <Text><strong>Gender:</strong> {character.gender}</Text>
                <Text><strong>Homeworld:</strong> {character.homeworld}</Text>
                <Text><strong>Height:</strong> {character.height} cm</Text>
                <Text><strong>Mass:</strong> {character.mass} kg</Text>
                <Text><strong>Eye Color:</strong> {character.eye_color}</Text>
            </div>
            <FavoriteSelector characterUrl={character.url} />
        </Card>
    );
});

export default CharacterCard;