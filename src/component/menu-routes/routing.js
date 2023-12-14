import { Routes,Route,BrowserRouter as Router} from 'react-router-dom';

import RouteDom from 'react-dom';
import Home from './home';
import EditProfile from './editProfile';
import Product from './product';

function RouteComponent() {
    <p>This is route component</p>
    return (
         
    <Router>
        <div>
           
            <Routes>
                <Route  path="/home">{<Home/>}</Route>
                <Route  path="/editProfile">{<EditProfile></EditProfile>}</Route>
            </Routes>
        </div>
    </Router>
    );
}

export default RouteComponent;