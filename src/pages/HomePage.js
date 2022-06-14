import { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../components/Card';
//import background from './content/background.png'

const HomePage = () => {
    const [params, setParams] = useState(
        {
          temperature: '29 °C',
          humidity: '23 %',
          lux: '33 %'
        }
    );

    useEffect(() => {
        axios.get('https://eu1.cloud.thethings.network/api/v3/as/applications/pametni-vrt/webhooks/test/devices/eui-70b3d57ed0051d54/down/push').then(res => {
            console.log(res.data);
        });
        /*
        axios.get('https://heroku-server-wise.herokuapp.com/').then(res => {
            console.log(res.data);
        });
        /*axios.get('/').then(res => {
            console.log(res.data);
        });*/
    }, []);


    return (
        <div className='background'>
            <div className='container'>
                <div className='grid'>
                    <Card title='Temperatura' route='temperature' params={params.temperature}/>
                    <Card title='Vlažnost' route='humidity' params={params.humidity}/>
                </div>
                <div className='grid'>
                    <Card title='Svjetlost' route= 'lux' params={params.lux}/>
                    <Card title='Navodnjavanje'/>
                </div>
            </div>
        </div>
    )
}

export default HomePage