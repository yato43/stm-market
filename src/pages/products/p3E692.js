import {Container, Row, Table} from "react-bootstrap";
import productImg from "../../image/products/3e692.jpg"

export default function P3E692() {

    return (
        <Container id="product-container">
            <h1>Полуавтомат заточной для дисковых пил 3Е692</h1>
            <div className='info'>
                <div style={{
                    backgroundImage: 'url(' + productImg + ')',
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '10px',
                }} className="productImage">
                    <a href="/src/attachments/stm-market.ru_3Е692.pdf" download><button>Скачать ТХ PDF</button></a>
                </div>
                <h3>Описание</h3>
                <p>Предназначен для заточки круглых пил для металла  по ГОСТ 4047-82 и 18210-72 по профилю зуба и переходным режущим кромкам периферией абразивного круга, заправленного по радиусу. Заточка производится с применением смазочно-охлаждающей жидкости</p>


            </div>


            <h3>Технические характеристики</h3>

            <Table striped bordless hover>
                <thead>
                <tr className='tableTitle'>
                    <th>Характеристика</th>
                    <th>Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Пределы диаметров затачиваемых пил</td>
                    <td>250-1430 мм</td>
                </tr>
                <tr className="tableTitle">
                    <td>Величины углов (передний/задний) зубьев пил, град</td>
                    <td>5/3, 10/5,<br/> 15/8,  20/8,<br/> 20/12, 25/15</td>
                </tr>
                <tr className="tableTitle">
                    <td colSpan={2}>Шлифовальный круг по ГОСТ 2424-83: </td>
                </tr>
                <tr>
                    <td>Тип</td>
                    <td>ПП</td>
                </tr>
                <tr>
                    <td>Наружный диаметр</td>
                    <td>300 мм</td>
                </tr>
                <tr>
                    <td>Пределы высот</td>
                    <td>6-25 мм</td>
                </tr>
                <tr>
                    <td>Внутренний диаметр</td>
                    <td>76 мм</td>
                </tr>
                <tr className='tableTitle'>
                    <td>Частота вращения шпинделя шлифовального круга</td>
                    <td>2000 мм</td>
                </tr>
                <tr className='tableTitle'>
                    <td colSpan={2}>Числа двойных ходов шлифовальной головки в минуту:</td>
                </tr>
                <tr>
                    <td>Для пил по ГОСТ 4047-82</td>
                    <td>20…100</td>
                </tr>
                <tr>
                    <td>Для пил по ГОСТ 118210-72 </td>
                    <td>20…70</td>
                </tr>
                <tr>
                    <td>Наибольшее автоматическое перемещение <br/> шлифовального круга на врезание за цикл</td>
                    <td>5 мм</td>
                </tr>
                <tr>
                    <td>Пределы разности соседних зубьев затачиваемой пилы</td>
                    <td>0-2 мм</td>
                </tr>
                <tr className="tableTitle">
                    <td>Мощность электродвигателя главного привода</td>
                    <td>2,2 кВт</td>
                </tr>
                <tr className='tableTitle'>
                    <td>Количество управляемых координат</td>
                    <td>5</td>
                </tr>
                <tr className='tableTitle'>
                    <td colSpan={2}>Габаритные размеры полуавтомата с приставным оборудованием:</td>
                </tr>
                <tr>
                    <td>Длина</td>
                    <td>2450 мм</td>
                </tr>

                <tr>
                    <td>Ширина</td>
                    <td>1120 мм</td>
                </tr>
                <tr>
                    <td>Высота</td>
                    <td>1910 мм</td>
                </tr>
                <tr className='tableTitle'>
                    <td>Масса полуавтомата с приставным оборудованием</td>
                    <td>1800 кг</td>
                </tr>
                <tr className='tableTitle'>
                    <td colSpan={2}>* За дополнительную плату полуавтомат может быть оснащен оснасткой для заточки пил с другим сочетанием величин углов (согласно чертежа).
                        Скачать:</td>
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