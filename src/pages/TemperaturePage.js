import BarChart from '../components/BarChart';

const params = [ 25, 21, 17, -13, 32, 11, -16, -22, 10, 4, 21, 31 ];

const TemperaturePage = () => {
    return (
        <div className='container'>
            <div className='bar-chart'>
                <BarChart data={params}/>            
            </div>
        </div>
    )
}

export default TemperaturePage;