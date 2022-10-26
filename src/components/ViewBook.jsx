import {  useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';


export default function ViewBook(){
    const navigate = useNavigate()
    const books = useSelector(state => state.books);
    const index = useParams().id
    console.log(index)
    return <>
        <button onClick={()=> {navigate('/') }}>Главная</button>
        <div>
            <img src={books[index].img} alt="poster" />
        <div>
            <h2>{books[index].name}</h2>
            <h3>Описание:</h3>
            <p>{books[index].discrip}</p>
        </div>
        </div>
        
        
    </>
}