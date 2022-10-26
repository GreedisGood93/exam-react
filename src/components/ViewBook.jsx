import {  useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { deleteBook } from "../store"

export default function ViewBook(){
    const navigate = useNavigate()
    const books = useSelector(state => state.books);
    const index = useParams().id
    console.log(index)
    const dispatch = useDispatch()
    return <>
        <button onClick={()=> {navigate('/') }}>Главная</button>
        <div>
            <img src={books[index]?.img} alt="poster" />
        <div>
            <h2>{books[index].name}</h2>
            <h3>Описание:</h3>
            <p>{books[index].descrip}</p>
        </div>
        </div>
        <button onClick={()=> {dispatch(deleteBook(index))}}> Удалить Книгу</button>
        
    </>
}