import { BrowserRouter, Switch, Route } from "react-router-dom";
import Funding from "./routes/Funding";
import MakeFund from "./routes/MakeFund";
import InputForm from "./routes/InputForm";


function Router() {
    return <BrowserRouter>
        <Switch>
            <Route path="/make/ex">
                <InputForm/>
            </Route>
            <Route path="/make">
                <MakeFund/>
            </Route>
            <Route path="/">   {/* /:product_id ==> room 내부로 바꿔야함 */ }
                <Funding />
            </Route>
        </Switch>
    </BrowserRouter>;

}
export default Router;