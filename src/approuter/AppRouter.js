import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../pages/Details";
import Cards from '../pages/Cards';
import Navbar from '../components/Navbar';
import UpdateBlog from '../pages/UpdateBlog';



const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/details" component={Details} />
                <Route path="/update" component={UpdateBlog} />
                <Route path="/main" component={Cards} />

            </Switch>
        </Router>
    )
}

export default AppRouter;
