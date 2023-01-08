
import Card from "../components/Card";
import {Link} from "react-router-dom";


function Products() {
    return (
        <div className="container">
            <h1>Станки</h1>

                <div className="goods">
                    <Link to="/t3000"><Card/></Link>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
        </div>
    );
}

export default Products