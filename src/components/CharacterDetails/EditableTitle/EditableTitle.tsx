import { EditOutlined } from "@ant-design/icons";
import { Button, Input, Space, Typography } from "antd";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import "./index.scss";
import { useStore } from "store/useStore";

const { Title } = Typography;

interface EditableTitleProps {
    characterName: string;
    characterUrl: string;
}

const EditableTitle = observer(function ({characterUrl, characterName}: EditableTitleProps) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [characterNewName, setCharacterNewName] = useState(characterName);
    const toggleEditMode = (): void => setIsEditMode(!isEditMode);

    const {favoriteCharactersStore: {setCharacterCustomName}} = useStore();

    const saveNewName = (): void => {
        setCharacterCustomName(characterUrl, characterNewName);
        setIsEditMode(false);
    };

    const discardNewName = (): void => {
        setCharacterNewName(characterName);
        setIsEditMode(false);
    };

    if (isEditMode) {
        return (
            <Space.Compact className="edit-container">
                <Input value={characterNewName} onChange={(e) => setCharacterNewName(e.target.value)} />
                <Button type="default" onClick={discardNewName}>Cancel</Button>
                <Button type="primary" onClick={saveNewName}>Save</Button>
            </Space.Compact>
        );
    }

    return (
        <Title level={2} className="character-name">{characterName} <Button icon={<EditOutlined />} onClick={toggleEditMode} /></Title>
    );

});

export default EditableTitle;