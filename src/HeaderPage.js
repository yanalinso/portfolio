import React, {Component} from "react";


const PageHeader = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
                <div className="container">
                    <a href="https://yanalinso.github.io/react-portfolio">
                        <img src="img/logo1.png" width="200px" alt="Yanalinso"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#Home">Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#About">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <h1 className="font-weight-bold">Hi, I'am Ian.</h1>
                            <div className="row">
                                <div className="col">
                                    <div className="text-center">
                                        <div className="pr-4">
                                            <a href="https://www.facebook.com/yan.alinso" className="mr-4">
                                                <i className="fa fa-facebook-official fa-3x"/>
                                            </a>
                                            <a href="https://www.linkedin.com/in/ian-paul-alinso-b5b443182/">
                                                <i className="fa fa-linkedin-square fa-3x"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}


class HeaderPage extends Component {
    render() {
        return (
            <PageHeader/>
        )
    }

}

export default HeaderPage