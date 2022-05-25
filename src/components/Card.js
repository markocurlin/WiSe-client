import {Link} from 'react-router-dom';

const Card = ({ title, route, params }) => {
    return(
        <Link className='link' to={`/${route}`}>
            <div className={`card`}>
                {typeof params === 'undefined' ? 
                    <div>
                        <p className='title'>Coming soon</p>
                        {/*<button>Kreni</button>*/}
                        <p className='params'>...</p>
                    </div> : 
                    <div>
                        <p className='title'>{title}</p>
                        <p className='params'>{params}</p>
                    </div>
                }
            </div>
        </Link>
    );
}

export default Card;