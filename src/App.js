import './App.css';
import TitlePage from './Pages/index';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import FilmDetail from './Pages/filmDetail';
import Layout from './Component/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/films' component={TitlePage} />
          <Route path='/films/:id' component={FilmDetail} />
          <Route path="*"><Redirect to="/films" /></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
