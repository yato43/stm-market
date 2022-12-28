import mechanism from "../image/test_mech.png";

export default function Card(){
    return(
        <div className="cards">
            <img src={mechanism} alt=""/>
            <p>Заточные станки с ЧПУ</p>

        </div>
    )
}