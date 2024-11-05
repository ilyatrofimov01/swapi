import { Typography } from "antd";
import "./index.scss";
const { Title } = Typography;

interface CharacterSectionProps {
    title: string;
    items: string[];
}

function CharacterSection({ title, items }: CharacterSectionProps): JSX.Element | null {
    if (!items.length) return null;

    return (
        <div className="character-section">
            <Title level={4}>{title}</Title>
            <ul>
                {items.map((item) => (<li key={item}>{item}</li>))}
            </ul>
        </div>
    );
}

export default CharacterSection;