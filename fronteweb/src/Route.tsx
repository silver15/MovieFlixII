import Navbar from "componests/Navbar";
import CatalogMovie from "pages/CatalogMovie";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
        <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <CatalogMovie />
            </Route>
            <Route path="/movies">
                <CatalogMovie />
            </Route>
        </Switch>
        
        </BrowserRouter>
    );


export default Routes;