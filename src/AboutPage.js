import React, {Component} from "react"

const Home = () => {
    return (
        <section id="About" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-center">
                            <img src="img/sadaharu.png" height="200px" width="200px" alt="Me"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item h4">Cloud Security Engineer</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Troubleshooting</h5>
                                    <hr/>
                                    <p className="card-text">troubleshooting and analyzing technical problems to solve
                                        an incident.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Quality Solutions</h5>
                                    <hr/>
                                    <p className="card-text">Working with our customers and providing them high quality
                                        service and solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Monitoring</h5>
                                    <hr/>
                                    <p className="card-text">Act as the Eye for our backend services for Trend
                                        Micro's services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="text-center">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item h4">SKILLS</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="text-center">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Bootstrap 4</li>
                                <li className="list-group-item">React JS</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Python</li>
                                <li className="list-group-item">PHP</li>
                                <li className="list-group-item">Java</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Linux</li>
                                <li className="list-group-item">Windows</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}


class AboutPage extends Component {
    render() {
        return (
            <Home/>
        )
    }
}

export default AboutPage