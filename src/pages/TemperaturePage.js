import { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from '../components/BarChart';

const TemperaturePage = () => {
    const [temperatureParams, setTemperatureParams] = useState();
    useEffect(() => {
        axios.post('https://heroku-server-wise.herokuapp.com/data', { param: 'temperature' }).then((res) => {
            const data = res.data;
            if (data.length !== 0) {
                setTemperatureParams(data);
            }
        })
    }, [])

    return (
        <div className='container'>
            <div className='bar-chart'>
                <h1 className='bar-chart-title'>Temperatura</h1>
                {typeof temperatureParams === 'undefined' ? <p></p> :
                <BarChart data={temperatureParams} title='Temperatura'/>}
            </div>
        </div>
    )
}

export default TemperaturePage;