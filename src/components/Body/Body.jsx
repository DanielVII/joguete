import { Component } from "react";
import "./estilo.css";
import Card from "../Card";

class Body extends Component {
    render() {
        return (
            <div className="container-body">
                <Card />
            </div>
        );
    }
}

export default Body;
