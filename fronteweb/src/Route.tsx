import Navbar from "componests/Navbar";
import CatalogMovie from "pages/CatalogMovie";
import MovieDetails from "pages/MovieDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
        <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <CatalogMovie />
            </Route>
            <Route path="/movies" exact>
                <CatalogMovie />
            </Route>
            <Route path="/movies/:movieId">
                <MovieDetails />
            </Route>
        </Switch>
        
        </BrowserRouter>
    );


export default Routes;