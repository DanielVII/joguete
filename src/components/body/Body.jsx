import { Component } from "react";
import "./Body.css";
import Card from "../card/Card.jsx";

class Body extends Component {
    render() {
        return (
            <div class="container-body">
                <Card />
            </div>
        );
    }
}

export default Body;
