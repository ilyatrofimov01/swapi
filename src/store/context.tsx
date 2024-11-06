import { createContext } from "react";
import { FavoriteCharactersStore } from "./favorite-characters-store";

const rootStore = {
    favoriteCharactersStore: new FavoriteCharactersStore(),
};

export type RootStore = typeof rootStore;

export const StoresContext = createContext(rootStore);

export function StoresContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
    return <StoresContext.Provider value={rootStore}>{children}</StoresContext.Provider>;
}