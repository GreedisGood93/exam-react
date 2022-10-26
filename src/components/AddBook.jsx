import { useRef } from "react";
import { useDispatch } from 'react-redux';

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

    const createNewBook = (event) => {
        event.preventDefault();
        const name = inputName.current.value;
        const author = inpAuthor.current.value;
        const published = inpDate.current.value;
        const genre = {Detective:checkboxDetective.current.value,}
        console.log(genre)
        
    }
    return <>
        <dialog open className="modal-window">
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
            <p>Год издания <input 
            type="date"
            ref={inpDate}
            /></p>
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
        </form>
        </dialog>
        
    </>
}