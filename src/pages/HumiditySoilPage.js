import { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from '../components/BarChart';

const HumiditySoilPage = () => {
    const [humiditySoilParams, setHumiditySoilParams] = useState();
    useEffect(() => {
        axios.post('https://heroku-server-wise.herokuapp.com/data', { param: 'humiditysoil' }).then((res) => {
            const data = res.data;
        
            if (data.length !== 0) {
                setHumiditySoilParams(data);
            }
        })
    }, [])
    return (
        <div className='container'>
            <div className='bar-chart'>
                <h1 className='bar-chart-title'>Vlažnost zemlje</h1>
                {typeof humiditySoilParams === 'undefined' ? <p></p> :
                <BarChart data={humiditySoilParams} title='Vlažnost'/>}
            </div>
        </div>
    )
}

export default HumiditySoilPage;