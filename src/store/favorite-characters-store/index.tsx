import { makeAutoObservable } from "mobx";
import { Character } from "types/character";

export class FavoriteCharactersStore {

    public favoriteCharactersUrlList: string[] = [];

    public charactersNewNameByUrl: Record<Character["url"], string> = {};

    constructor() {
        makeAutoObservable(this);
    }

    public addCharacter = (characterUrl: string): void => {
        this.favoriteCharactersUrlList.push(characterUrl);
    };

    public removeCharacter = (characterUrl: string): void => {
        this.favoriteCharactersUrlList = this.favoriteCharactersUrlList.filter(item => item !== characterUrl);
    };

    public setCharacterCustomName = (characterUrl: string, newName: string): void => {
        this.charactersNewNameByUrl[characterUrl] = newName;
    };
}
