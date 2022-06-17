import { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from '../components/BarChart';

const LuxPage = () => {
    const [luxParams, setLuxParams] = useState();
    useEffect(() => {
        axios.post('https://heroku-server-wise.herokuapp.com/data', { param: 'lux' }).then((res) => {
            const data = res.data;
        
            if (data.length !== 0) {
                setLuxParams(data);
            }
        })
    }, [])

    return (
        <div className='container'>
            <div className='bar-chart'>
                <h1 className='bar-chart-title'>Svjetlost</h1>
                {typeof luxParams === 'undefined' ? <p></p> :
                <BarChart data={luxParams} title='Svjetlost'/>}
            </div>
        </div>
    )
}

export default LuxPage;