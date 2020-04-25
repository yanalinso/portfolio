import React, {Component} from "react";
import ReactDOM from 'react-dom'
import HeaderPage from "./HeaderPage";
import AboutPage from "./AboutPage";
import FooterPage from "./FooterPage";

class App extends Component{

    render() {
        return (
            <div className="container-lg" id="Home">
                <HeaderPage/>
                <AboutPage/>
                <FooterPage/>
            </div>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById('root'))