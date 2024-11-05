import { Character } from "types/character";
import { Row, Col, Typography } from "antd";
const { Text } = Typography;

interface CharacterAttributeProps {
    character: Character;
}

function CharacterAttributes({ character }: CharacterAttributeProps): JSX.Element {

    return (
        <Row gutter={[16, 16]}>
            <Col span={12}>
                <Text strong>Height:</Text> <Text>{character.height} cm</Text>
            </Col>
            <Col span={12}>
                <Text strong>Mass:</Text> <Text>{character.mass} kg</Text>
            </Col>
            <Col span={12}>
                <Text strong>Hair Color:</Text> <Text>{character.hair_color || "N/A"}</Text>
            </Col>
            <Col span={12}>
                <Text strong>Skin Color:</Text> <Text>{character.skin_color || "N/A"}</Text>
            </Col>
            <Col span={12}>
                <Text strong>Eye Color:</Text> <Text>{character.eye_color || "N/A"}</Text>
            </Col>
            <Col span={12}>
                <Text strong>Birth Year:</Text> <Text>{character.birth_year || "N/A"}</Text>
            </Col>
            <Col span={12}>
                <Text strong>Gender:</Text> <Text>{character.gender || "N/A"}</Text>
            </Col>
            <Col span={12}>
                <Text strong>Homeworld:</Text> <Text>{character.homeworld || "N/A"}</Text>
            </Col>
        </Row>
    );
}

export default CharacterAttributes;