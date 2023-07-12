import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Funding from './routes/Funding';
import MakeFund from './routes/MakeFund';
import Room from './routes/Room';
import Home from './routes/Home';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/room/:roomId">
          <Room />
        </Route>
        <Route exact path="/room/:roomId/funding/:fundingId">
          <Funding />
        </Route>
        <Route exact path="/room/:roomId/make">
          <MakeFund />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
