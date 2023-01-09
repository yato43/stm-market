
import {Link} from "react-router-dom";

export default function Card(props){
    return(
        <div className="card-block">
            <Link to={props.link}>
                <div className="cards" style={{
                backgroundImage: 'url(' + props.image + ')',
                backgroundSize: '90%, cover',
                backgroundRepeat: 'no-repeat',
                borderRadius: '10px',
                    backgroundPosition: "top center"
            }}>

                <p>{props.name}</p>

            </div></Link>
        </div>
    )
}