import React from 'react';
import dsclogo from "../../images/dsclogo.svg";
import "../../styles/home.scss";
export default class BrandingHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"brandingheader"}>
                <center>
                    <img src={dsclogo} className={"dsclogo"} align={"absmiddle"} />
                    <h1 className={"title"}>{this.props.page_title}</h1>
                </center>
            </div>
        )
    }
}