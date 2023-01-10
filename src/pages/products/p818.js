import {Container, Table} from "react-bootstrap";
import productImg from "../../image/products/818.jpg"

export default function P818() {

    return (
        <Container id="product-container">
            <h1>Заточной станок ВЗ-818Е</h1>
            <div className='info'>
                <div style={{
                    backgroundImage: 'url(' + productImg + ')',
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '10px',
                }} className="productImage">
                    <a href="/src/attachments/818.7z" download><button>Скачать ТХ PDF</button></a>
                </div>
                <h3>Описание</h3>
                <p>Станок предназначен для заточки и доводки основных видов режущих инструментов из инструментальной стали, твердого сплава и минералокерамики абразивными, алмазными и эльборовыми кругами. На станке возможно выполнять шлифовальные работы: круглое  шлифование (наружное и внутреннее) и плоское шлифование.</p>
                <h3>Особенности</h3>
                <p>Конструктивные особенности станка:
                    <ul style={{display:'table-cell'}}>
                        <li>- замкнутые роликовые стальные направляющие стола и каретки, позволяющие устанавливать на стол тяжелые приспособления и детали без потери точности перемещения, а также обеспечивающие долговечность;</li>
                        <li>- беззазорный привод стола от маховика;</li>
                        <li>- двигатель шлифовального круга развернут в сторону, противоположную шпинделю, что существенно расширяет технологические возможности и щает время переналадки;</li>
                        <li>- пульт управления легко доступен оператору с любого из 3-х рабочих мест;малые габариты станка при больших технологических возможностях.</li>
                        <li>- гидрофицированный привод продольного перемещения стола.</li>
                        <li>- Конструкция станка защищена патентом.</li>
                    </ul>
                    </p>
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
                    <td colSpan={2}>Показатели заготовки, обрабатываемой на станке:</td>

                </tr>
                <tr>
                    <td>Наибольший диаметр изделия, устанавливаемого в центровых бабках</td>
                    <td>200 мм</td>
                </tr>
                <tr>
                    <td>Наибольшая длина изделия, устанавливаемого в центровых бабках</td>
                    <td>500 мм</td>
                </tr>
                <tr>
                    <td>Наибольшая длина обрабатываемой поверхности</td>
                    <td>225 мм</td>
                </tr>
                <tr>
                    <td>--с использованием приспособления 3Е642ЕП32</td>
                    <td>330  мм</td>
                </tr>
                <tr className='tableTitle'>
                    <td>--с использованием приспособлений 3Е642Е.П61 и 3Е642Е.П73</td>
                    <td>1040 мм</td>
                </tr>
                <tr className='tableTitle'>
                    <td colSpan={2}>Показатели инструмента, устанавливаемого на станке:</td>
                </tr>
                <tr>
                    <td>Наибольшие диаметры устанавливаемого шлифовального круга <br/> типа  1 по ИСО 525-86 (ГОСТ 2424-83), а также аналогичных <br/> по форме иразмерам эльборовых и алмазных шлифовальных кругов</td>
                    <td>150 мм</td>
                </tr>
                <tr className='tableTitle'>
                    <td>Остальных типов</td>
                    <td>125 мм</td>
                </tr>
                <tr className='tableTitle'>
                    <td colSpan={2}>Показатели рабочих и установочных перемещений:</td>
                </tr>
                <tr>
                    <td>Наибольшее продольное перемещение стола</td>
                    <td>350 мм</td>
                </tr>
                <tr>
                    <td colSpan={2}>Наибольший угол поворота стола в горизонтальной плоскости в среднем положении:</td>

                </tr>
                <tr>
                    <td>--по часовой стрелке</td>
                    <td>45 град.</td>
                </tr>
                <tr>
                    <td>--против часовой стрелки</td>
                    <td>45 град</td>
                </tr>
                <tr>
                    <td>Наибольшее вертикальное перемещение  шлифовальной головки</td>
                    <td>200 мм</td>
                </tr>
                <tr>
                    <td>Наибольшее поперечное перемещение  шлифовальной головки</td>
                    <td>200 мм</td>
                </tr>
                <tr>
                    <td>Наибольшее смещение оси шлифовального круга в горизонтальной <br/> плоскости за счет эксцентрической плиты</td>
                    <td>100 мм</td>
                </tr>
                <tr>
                    <td>Наибольший угол поворота шлифовальной головки  в горизонтальной плоскости</td>
                    <td>360 град.</td>
                </tr>
                <tr>
                    <td colSpan={2}>Наибольший угол поворота шлифовальной головки  в горизонтальной плоскости</td>

                </tr>
                <tr>
                    <td>--по часовой стрелке</td>
                    <td>200</td>
                </tr>
                <tr className='tableTitle'>
                    <td>--против часовой стрелки</td>
                    <td>20</td>
                </tr>

                <tr className='tableTitle'>
                    <td colSpan={2}>Показатели основных и вспомогательных движений:</td>
                </tr>
                <tr>
                    <td>Пределы частоты вращения шлифовального шпинделя мин-1</td>
                    <td>2800; <br/>4000; <br/>5600; <br/>8000 </td>
                </tr>
                <tr className='tableTitle'>
                    <td>Скорость вертикального механизированного перемещения шлифовальной головки</td>
                    <td>390 мм/мин</td>
                </tr>
                <tr className='tableTitle'>
                    <td colSpan={2}>Показатели силовой характеристики станка:</td>
                </tr>
                <tr>
                    <td>Мощность привода главного движения</td>
                    <td>0.71/0.85 кВт</td>
                </tr>
                <tr className='tableTitle'>
                    <td>Суммарная мощность установленных на станке электродвигателей</td>
                    <td>1.99/2.13 кВт</td>
                </tr>
                <tr className='tableTitle'>
                    <td colSpan={2}>Другие параметры:</td>
                </tr>
                <tr>
                    <td>Габаритные размеры (с отдельно расположенным оборудованием) (ДхШхВ)</td>
                    <td>1460х1530х1660 мм</td>
                </tr>
                <tr className='tableTitle'>
                    <td>Масса станка вместе с отдельно расположенными  агрегатами и электрооборудованием)</td>
                    <td>860 кг</td>
                </tr>
                <tr className='tableTitle'>
                    <td colSpan={2}>Показатели шероховатости обработки (в партии) образцов-изделий</td>
                </tr>
                <tr>
                    <td>Шлифование  торцом абразивного круга</td>
                    <td>Ra 0.32 мкм</td>
                </tr>
                <tr className='tableTitle'>
                    <td>Шлифование торцом алмазного круга</td>
                    <td>Ra 0.08 мкм</td>
                </tr>
                <tr className='tableTitle'>
                    <td>Класс точности станка по ГОСТ 8-82</td>
                    <td>В</td>
                </tr>



                </tbody>
            </Table>



        </Container>
    )
}