import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Funding from './routes/Funding';
import MakeFund from './routes/MakeFund';
import Room from './routes/Room';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:RoomId/make">
          <MakeFund />
        </Route>
        <Route path="/:RoomId">
          <Room />
        </Route>
        <Route path="/">
          {' '}
          {/* /:product_id ==> room 내부로 바꿔야함 */}
          <Funding />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
