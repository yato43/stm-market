import Card from "../components/Card";
import p454 from "../image/products/454.jpg";
import p531 from "../image/products/531.jpg";
import p3e692 from "../image/products/3e692.jpg";
import p676 from "../image/products/676.jpg";
import p681  from "../image/products/681.jpg";
import p721  from "../image/products/721.jpg";
import p780  from "../image/products/780.jpg";
import p818  from "../image/products/818.jpg";
import p400  from "../image/products/sr-400.jpg";


function Products() {
    return (
        <div className="container">
            <h1>Станки</h1>

            <div className="goods">
                <Card image={p454} name='Полуавтомат шлифовально-заточный с ЧПУ 454-ой серии' link = '/p454'/>
                <Card image={p531} name='Заточной станок с ЧПУ для концевого инструмента 531-й серии' link = '/p531'/>
                <Card image={p780} name='Станок для заточки протяжек 780-ой серии' link = '/p780'/>
                <Card image={p721} name='Станок для заточки червячных фрез 721-ой серии' link = '/p721'/>
                <Card image={p676} name='Полуавтомат зубошлифовальный с ЧПУ 676-ой серии' link = '/p676'/>
                <Card image={p681} name='Станок резьбошлифовальный с ЧПУ 681-ой серии' link = '/p681'/>
                <Card image={p818} name='Заточной станок ВЗ-818Е' link = '/p818'/>
                <Card image={p3e692} name='Полуавтомат заточной для дисковых пил 3Е692' link = '/p3Е692'/>
                <Card image={p400} name='Стенд для испытания шлифовальных кругов на разрыв вращением СР-400В' link = '/p400'/>

            </div>
        </div>
    );
}

export default Products