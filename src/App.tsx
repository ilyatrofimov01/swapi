import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/auth/PrivateRoutes/PrivateRoutes";
import { ROUTES } from "constants/routes";
import { Login } from "pages/login";
import Home from "pages/home/Home";
import { CharacterDetails } from "pages/character-details/CharacterDetails";
import FavoriteCharactersList from "components/FavoriteCharactersList/FavoriteCharactersList";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.CHARACTER_DETAILS} element={<CharacterDetails />} />
                    <Route path={ROUTES.FAVORITES} element={<FavoriteCharactersList />} />
                </Route>
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path="*" element={<Navigate replace to={ROUTES.HOME} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;