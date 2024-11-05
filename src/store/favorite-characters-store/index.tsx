import { makeAutoObservable } from "mobx";

export class FavoriteCharactersStore {

    public favoriteCharactersUrlList: string[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public addCharacter = (characterUrl: string): void => {
        this.favoriteCharactersUrlList.push(characterUrl);
    };

    public removeCharacter = (characterUrl: string): void => {
        this.favoriteCharactersUrlList = this.favoriteCharactersUrlList.filter(item => item !== characterUrl);
    };
}
