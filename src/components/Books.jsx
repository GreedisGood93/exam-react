import {  useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

export default function Books() {
    const books = useSelector(state => state.books);
    // const dispatch = useDispatch();
    return <div className='books-prevue'>
        {books.map((item, index) => <div 
        className='books-card'
        key={index}>
            <Link to={`/viewbook/${index}`}>
            {item.img !== undefined &&
                <img className='poster' src={item.img} alt="poster" />
            }
            

            <h2>{item.name}</h2>
            <p>Автор: {item.author}</p>
            <p>Дата издания: {item.published}</p>
            <p>Жанр: {item.genre}</p>
            </Link>
        </div>)}
    </div>
}