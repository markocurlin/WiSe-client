import { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../components/Card';
//import background from './content/background.png'

const HomePage = () => {
    const [params, setParams] = useState(
        {
          temperature: '...',
          humidityAir: '...',
          lux: '...',
          humiditySoil: '...'
        }
    );

    useEffect(() => {
        axios.get('https://heroku-server-wise.herokuapp.com/').then(res => {
            let data = res.data;
            if (data.length !== 0) {
                setParams(
                    {
                        temperature: `${data[0]} °C`,
                        humidityAir: `${data[1]} %`,
                        lux: `${data[2]} %`,
                        humiditySoil: `${data[3]} %`
                    }
                )
            }
        });
    });

    return (
        <div className='background'>
            <div className='container'>
                <div className='grid'>
                    <Card title='Temperatura' route='temperature' params={params.temperature}/>
                    <Card title='Vlažnost zraka' route='humidity-air' params={params.humidityAir}/>
                </div>
                <div className='grid'>
                    <Card title='Svjetlost' route= 'lux' params={params.lux}/>
                    <Card title='Vlažnost zemlje' route='humidity-soil' params={params.humiditySoil}/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;