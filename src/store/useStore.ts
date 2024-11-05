import { useContext } from "react";
import { RootStore, StoresContext } from "./context";

export function useStore(): RootStore {
    const context = useContext(StoresContext);

    if (!context) {
        throw new Error("useStore must be used within a StoresContextProvider");
    }

    return context;
}
