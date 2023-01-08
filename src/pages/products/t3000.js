import {Container, Row, Table} from "react-bootstrap";
import productImg from "../../image/products/454.jpg"

export default function T3000() {

    return (
        <Container id="product-container">
            <h1>t3000</h1>
            <div className='info'>
                <div style={{
                    backgroundImage: 'url(' + productImg + ')',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '10px',
                }} className="productImage">
                    <button>Скачать ТХ PDF</button>
                </div>
                <h3>Описание</h3>
                <p>Полуавтомат шлифовально-заточный с ЧПУ изготавливается по Техническому заданию, утвержденному
                    Покупателем, предназначен для изготовления и заточки различных режущих инструментов из быстрорежущих
                    сталей и твердых сплавов по различным поверхностям высокостойкими абразивными, эльборовыми и
                    алмазными шлифовальными кругами с применением смазочно-охлаждающей жидкости.</p>
                <h3>Особенности</h3>
                <p>На полуавтомате возможно шлифование других изделий со сложными фасонными поверхностями. Применение
                    устройства ЧПУ SINUMERIK 840DSL производства фирмы «SIEMENS» (Германия) гарантирует высокое качество
                    управления полуавтоматом, обеспечивает его надёжную и бесперебойную работу. Станочные перемещения
                    осуществляются синхронными двигателями с цифровыми приводами производства фирмы «SIEMENS». <br/>
                    Наличие пяти управляемых осей перемещений и применение удлиненной оправки для одновременной
                    установки трех шлифовальных кругов позволяет вести обработку изделий с одной установки по всем
                    поверхностям, что значительно увеличивает производительность за счет сокращения вспомогательного
                    времени, повышает точность обработанного изделия вследствие устранения погрешностей, возникающих при
                    переустановке шлифовальных кругов, и облегчает труд оператора.</p>
            </div>


            <h3>Технические характеристики</h3>

            <Table striped bordless hover>
                <thead>
                <tr>
                    <th>Характеристика</th>
                    <th>Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr className='tableTitle'>
                    <td colSpan={2}>Пределы заготовок:</td>

                </tr>
                <tr>
                    <td>Диапазон диаметров отверстий цанг</td>
                    <td>2…25 мм</td>
                </tr>
                <tr>
                    <td>Наибольший диаметр обрабатываемого изделия</td>
                    <td>200 мм</td>
                </tr>
                <tr>
                    <td>Наибольшая длина изделия, устанавливаемого в цанговом патроне</td>
                    <td>160 мм</td>
                </tr>
                <tr>
                    <td>Расстояние от зеркала поворотного стола до оси бабки изделия</td>
                    <td>125 мм</td>
                </tr>
                <tr className='tableTitle'>
                    <td>Наибольший диаметр шлифовального круга</td>
                    <td>150 мм</td>
                </tr>
                <tr className='tableTitle'>
                    <td colSpan={2}>Показатели рабочих и установочных перемещений:</td>
                </tr>
                <tr>
                    <td>наибольшее продольное перемещение шлифовальной головки (коорд. X)</td>
                    <td>200 мм</td>
                </tr>
                <tr>
                    <td>Наибольшее вертикальное перемещение шлифовальной головки (коорд. Y)</td>
                    <td>200 мм</td>
                </tr>
                <tr>
                    <td>Наибольшее поперечное перемещение бабки изделия (коорд. Z)</td>
                    <td>200 мм</td>
                </tr>
                <tr>
                    <td>Наибольший угол поворота шпинделя бабки изделия (коорд. А)</td>
                    <td>Не ограничен</td>
                </tr>
                <tr>
                    <td>Наиб. угол поворота бабки изделия в горизонтальной плоскости (коорд. В)</td>
                    <td>240±10 град.</td>
                </tr>
                <tr>
                    <td>Дискретность задания линейных/угловых перемещений по осям координат</td>
                    <td>0,001</td>
                </tr>
                <tr className='tableTitle'>
                    <td>Количество управляемых координат</td>
                    <td>5</td>
                </tr>
                <tr className='tableTitle'>
                    <td colSpan={2}>Показатели основных и вспомогательных движений:</td>
                </tr>
                <tr>
                    <td>Частота вращения шпинделя шлифовального круга</td>
                    <td>0…10000 об/мин</td>
                </tr>
                <tr className='tableTitle'>
                    <td>Пределы контурной скорости</td>
                    <td>0…6,00 м/мин</td>
                </tr>
                <tr className='tableTitle'>
                    <td colSpan={2}>Показатели силовой характеристики полуавтомата:</td>
                </tr>
                <tr>
                    <td>Мощность электродвигателя привода шлифовального круга</td>
                    <td>8 кВт</td>
                </tr>
                <tr className='tableTitle'>
                    <td>Суммарная мощность установленных на полуавтомате электродвигателей</td>
                    <td>15 кВт</td>
                </tr>
                <tr className='tableTitle'>
                    <td colSpan={2}>Другие параметры:</td>
                </tr>

                <tr>
                    <td>Род тока питающей сети</td>
                    <td>перем. 3-фазный</td>
                </tr>
                <tr>
                    <td>Напряжение</td>
                    <td>380±38 В</td>
                </tr>
                <tr>
                    <td>Частота тока</td>
                    <td>50±1 Гц</td>
                </tr>
                <tr>
                    <td>Габаритные размеры (с отдельно расположенным оборудованием) (ДхШхВ)</td>
                    <td>1350х3000х2020 мм</td>
                </tr>
                <tr>
                    <td>Масса</td>
                    <td>3500 кг</td>
                </tr>

                </tbody>
            </Table>


            <Row>
                <h3>Дополнительная информация</h3>
                <p>Высокая степень унификации деталей, сборочных единиц и узлов полуавтомата упрощает его
                    обслуживание. <br/>
                    Применение на полуавтомате открытой среды программирования G-code (ISO-7 bit) позволяет пользователю
                    для обработки изделий использовать управляющие программы собственной разработки или управляющие
                    программы, сформированные установленным программным обеспечением – СПУП (система подготовки
                    управляющих программ). <br/>
                    При поставке полуавтомат оснащается базовым программным обеспечением для формирования управляющих
                    программ по обработке цилиндрических фрез с прямым и сферическим торцом, конических фрез с прямым и
                    сферическим торцом и спиральных сверл. Возможно оснащение полуавтомата системой подготовки
                    управляющих программ для обработки других режущих инструментов и изделий.</p>
            </Row>
        </Container>
    )
}