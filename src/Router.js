import { BrowserRouter, Switch, Route } from "react-router-dom";
import Funding from "./routes/Funding";

function Router() {
    return <BrowserRouter>
        <Switch>
            <Route path="/">
                <Funding />
            </Route>
        </Switch>
    </BrowserRouter>;

}
export default Router;