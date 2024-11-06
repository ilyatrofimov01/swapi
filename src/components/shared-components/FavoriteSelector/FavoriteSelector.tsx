import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { useStore } from "store/useStore";

import "./index.scss";

interface FavoriteSelectorProps {
    characterUrl: string;
}

const FavoriteSelector = observer((function ({characterUrl}: FavoriteSelectorProps): JSX.Element {
    const {favoriteCharactersStore: {addCharacter, removeCharacter, favoriteCharactersUrlList}} = useStore();
    const isFavorite = favoriteCharactersUrlList.includes(characterUrl);

    const toggleFavorite = (e: React.SyntheticEvent): void => {
        e.stopPropagation();

        if (isFavorite) {

            return removeCharacter(characterUrl);
        }
        addCharacter(characterUrl);
    };

    return (
        <div className="favorite-icon-container" onClick={toggleFavorite}>
            {isFavorite
                ? <HeartFilled className="heart-icon" style={{ color: "red" }} />
                : <HeartOutlined className="icon-hover" style={{ color: "gray" }} />}
        </div>
    );
}));

export default FavoriteSelector;