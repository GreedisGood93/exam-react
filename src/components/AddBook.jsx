import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { addNewBook } from "../store";

export default function AddBook(){
    const inputName = useRef(null);
    const inpAuthor = useRef(null);
    const inpDate = useRef(null);
    const checkboxDetective = useRef(null);
    const checkboxThriller = useRef(null);
    const checkboxHistory = useRef(null);
    const checkboxRomance = useRef(null);
    const checkboxFantastic = useRef(null);
    const checkboxModernLiterature = useRef(null);
    const areaDescription = useRef(null)

    const dispatch = useDispatch();
    const [errForm, setErrForm] = useState(true)
    const createNewBook = (event) => {
        event.preventDefault();
        const name = inputName.current.value;
        const author = inpAuthor.current.value;
        const published = inpDate.current.value;
        const descrip = areaDescription.current.value;
        const genre = []
        if(checkboxDetective.current.checked){
            genre.push('Детектив')
        }
        if(checkboxThriller.current.checked){
            genre.push('Триллер')
        }
        if(checkboxHistory.current.checked){
            genre.push('Исторический')
        }
        if (checkboxRomance.current.checked) {
            genre.push('Роман')
        }
        if(checkboxFantastic.current.checked){
            genre.push('Фантастика')
        }
        if(checkboxModernLiterature.current.checked){
            genre.push('Современная литература')
        }
        if(name !== "" && author !== "" && published !== "" && genre.length !== 0){
            const newBook = {name, author, published, descrip, genre}
        dispatch(addNewBook(newBook))
        setShow(false)
        }  else setErrForm(false)

        

        console.log(genre)
    }

    const [show, setShow] = useState(false)
    return <>
    {
    !show 
    ?
    <button onClick={()=>{setShow(true)}}>Добавить книгу</button>
    :
        <div className="modal-contain" onClick={() => setShow(false)}>
        <div className="modal-window">
        <form onSubmit={createNewBook}>
        <h2>Добавление книги</h2>
        <p> 
            <input 
            type="text" 
            placeholder="Название"
            ref={inputName}
            /></p>
        
            <input 
            type="text" 
            placeholder="Автор"
            ref={inpAuthor}
            />
        <input 
        type="text"
        placeholder="Дата издания"
        ref={inpDate}
        min={1925}
        max={2022}
        />
        
            <div>
                <input type="checkbox"
                ref={checkboxDetective}
                />Детектив

                <input type="checkbox" 
                ref={checkboxThriller}
                />Триллер

                <input type="checkbox"
                ref={checkboxHistory}
                />Исторический
            </div>
            <div>
            <input type="checkbox"
            ref={checkboxRomance}
            />Роман

            <input type="checkbox" 
            ref={checkboxFantastic}
            />Фантастика

            <input type="checkbox" 
            ref={checkboxModernLiterature}
            />Современная Литература   
            </div>
            
        
        <textarea
        style={{'resize': 'none', 'marginTop': '30px'}}
        placeholder='Описание'
        cols="50" rows="10"
        ref={areaDescription}
        ></textarea>

        <button>Создать</button>
        {!errForm &&
        <p>Заполните все поля!</p>} 
    </form>
</div>
</div>
    }


    </>
}