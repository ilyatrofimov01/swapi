import { Character } from "types/character";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Card, Typography, Divider } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { ROUTES } from "constants/routes";
import { useState } from "react";
import { useStore } from "store/useStore";
import "./index.scss";
import { observer } from "mobx-react-lite";

interface CharacterCardProps {
    character: Character;
}

const { Title, Text } = Typography;

const CharacterCard = observer(function ({character}: CharacterCardProps): JSX.Element {
    const {favoriteCharactersStore: {addCharacter, removeCharacter, favoriteCharactersUrlList}} = useStore();
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(false);
    const isFavorite = favoriteCharactersUrlList.includes(character.url);

    const toggleFavorite = (e: React.SyntheticEvent): void => {
        e.stopPropagation();

        if (isFavorite) {

            return removeCharacter(character.url);
        }
        addCharacter(character.url);
    };

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
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Title level={4} className="character-card-title">{character.name}</Title>
            <Divider />
            <div className="character-card-info">
                <Text><strong>Birth Year:</strong> {character.birth_year}</Text>
                <Text><strong>Gender:</strong> {character.gender}</Text>
                <Text><strong>Homeworld:</strong> {character.homeworld}</Text>
                <Text><strong>Height:</strong> {character.height} cm</Text>
                <Text><strong>Mass:</strong> {character.mass} kg</Text>
                <Text><strong>Eye Color:</strong> {character.eye_color}</Text>
            </div>
            <div className="favorite-icon-container" onClick={toggleFavorite}>
                {isFavorite
                    ? ( 
                        <HeartFilled className="icon" style={{ color: isFavorite? "red" : "grey" }} />
                    )
                    : (
                        hovered ? <HeartOutlined style={{ color: "gray" }} /> : null
                    )}
            </div>
        </Card>
    );
});

export default CharacterCard;