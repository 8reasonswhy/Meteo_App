import styles from './Weather.module.scss'
import {Card} from "react-bootstrap";
import PositionSvg from "../Svgs/PositionSvg";
import DefaultWeather from "../Svgs/DefaultWeather";
import Thermometer from "../Svgs/Thermometer";
import Time from "../Svgs/Time";
import Wind from "../Svgs/Wind";
import { useSelector } from 'react-redux';
import Moment from 'react-moment';

export const Weather = () => {
    const weatherData = useSelector( (state)=> state.weather);

    return (
        <>
        
            <Card className={styles.container}>
                <Card.Body>
                    <Card.Title>
                    {weatherData.name} , {weatherData.sys.country} <PositionSvg color={'rgba(255,255,255,0.7)'}/>
                        <div className={styles.date}>
                            <div>
                                <Moment format='dddd D MMMM yyyy , hh:mm  '>
                                </Moment> AM</div>
                            <div><Time width={'15px'} height={'15px'}/></div>
                        </div>
                    </Card.Title>
                    <Card.Text as={'div'} className={styles.weather_infos}>
                        <div>
                            <DefaultWeather width={'250px'} height={'250px'}/>
                        </div>
                        <div className={styles.temperature}>
                            <div>{weatherData.main.feels_like}° C</div>
                            <div>
                                <Thermometer/>
                            </div>
                        </div>
                        <div>
                            Good Morning {weatherData.name}
                            <div className={styles.separator}></div>
                        </div>
                        <div className={styles.infos}>
                            <div className={styles.border_right}>
                                <div><DefaultWeather color={'#fff'}/></div>
                                <div>Sunrise</div>
                                <div> <Moment unix={true} format='hh:mm'>
                                    {weatherData.sys.sunrise}
                                </Moment>
                                    </div>
                            </div>
                            <div className={styles.border_right}>
                                <div><Wind/></div>
                                <div>Wind</div>
                                <div>{weatherData.wind.speed}m/s</div>
                            </div>
                            <div>
                                <div><Thermometer color={'#fff'} width={'25px'} height={'25px'}/></div>
                                <div>Temp</div>
                                <div>{weatherData.main.temp}° C</div>
                            </div>
                        </div>

                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}