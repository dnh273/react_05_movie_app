import './App.css';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from "react-router-dom";
import { HomeTemplate } from './Templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import Checkout from './pages/Checkout/Checkout';
import { lazy, Suspense } from 'react';
import { UserTemplate } from './Templates/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';

const CheckoutTemplateLazy = lazy(() =>
  import('./Templates/CheckoutTemplate/CheckoutTemplate')
)

export const history = createBrowserHistory()


function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path='/home' exact Component={Home}></HomeTemplate>
        <HomeTemplate path='/news' exact Component={News}></HomeTemplate>
        <UserTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path='/contact' exact Component={Contact}></HomeTemplate>
        <UserTemplate path='/login' exact Component={Login} />
        <Route path='/register' exact Component={Register}></Route>
        <HomeTemplate path='/' exact Component={Home}></HomeTemplate>
        <CheckoutTemplateLazy path="/checkout/:id" exact component={Checkout} />

      </Switch>
    </Router>
  );
}

export default App;
