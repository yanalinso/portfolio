import React, {Component} from "react";


const PageFooter = () => {
    return (
        <footer class="page-footer font-small blue">
            <div class="footer-copyright text-center py-3">
                © 2020 Copyright
            </div>
        </footer>
    )
}


class FooterPage extends Component {
    render() {
        return (
            <PageFooter/>
        )
    }

}

export default FooterPage