import AppHeader from "../appHeader/AppHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import ComicsPage from "../../pages/ComicsPage";
import Page404 from "../../pages/404";
import SingleComicsPage from "../../pages/SingleComicsPage";



const App = () => {

    return (
        <Router>
            <div className="app" >
                <AppHeader />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <MainPage />
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage />
                        </Route>
                        <Route exact path="/comics/:comicsID">
                            <SingleComicsPage />
                        </Route>
                        <Route path="*">
                            <Page404 />
                        </Route>
                    </Switch>
                </main>
            </div >
        </Router>
    )

}



export default App;