import { useState } from 'react';
import {  useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { likeCounter } from '../store';
import AddBook from './AddBook';

export default function Books() {
    const books = useSelector(state => state.books);
    const dispatch = useDispatch();
    return <>
    <AddBook/>
        <div className='books-prevue'>
        {books.map((item, index) => <div 
        className='books-card'
        key={index}>
            <Link to={`/viewbook/${index}`}>
            {item.img !== undefined &&
                <img className='poster' src={item.img} alt="poster" />
            }
            <div>
            <h2>{item.name}</h2>
            <p>Автор: {item.author}</p>
            <p>Дата издания: {item.published}</p>
            <p>Жанр: {item.genre}</p>
            </div>
            </Link>
            {item.like}
            <button onClick={()=>{dispatch(likeCounter(item.id))}}>Like</button>
            
            
        </div>)}
    </div>
    </>
}