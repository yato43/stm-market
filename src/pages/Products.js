import Card from "../components/Card";

import mechanism from "../image/test_mech.png";


function Products() {
    return (
        <div className="container">
            <h1>Станки</h1>

            <div className="goods">
                <Card image={mechanism} name='Полуавтомат шлифовально-заточный с ЧПУ 454-ой серии' link = '/t3000'/>
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