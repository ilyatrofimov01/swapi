import { createContext } from "react";
import { FavoriteCharactersStore } from "./favorite-characters-store";

const rootStore = {
    favoriteCharactersStore: new FavoriteCharactersStore(),
};

export type RootStore = typeof rootStore;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const StoresContext = createContext(rootStore);

export function StoresContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
    return <StoresContext.Provider value={rootStore}>{children}</StoresContext.Provider>;
}
