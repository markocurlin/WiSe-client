import { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from '../components/BarChart';

const HumidityAirPage = () => {
    const [humidityAirParams, setHumidityAirParams] = useState();
    useEffect(() => {
        axios.post('https://heroku-server-wise.herokuapp.com/data', { param: 'humidityair' }).then((res) => {
            const data = res.data;
        
            if (data.length !== 0) {
                setHumidityAirParams(data);
            }
        })
    }, [])

    return (
        <div className='container'>
            <div className='bar-chart'>
                <h1 className='bar-chart-title'>Vlažnost zraka</h1>
                {typeof humidityAirParams === 'undefined' ? <p></p> :
                <BarChart data={humidityAirParams} title='Vlažnost'/>}
            </div>
        </div>
    )
}

export default HumidityAirPage;