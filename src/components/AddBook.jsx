import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { addNewBook } from "../store";
import poster from '../poster/def_book.jpg'

export default function AddBook() {
    const [showModalWindow, setShowModalWindow] = useState(false);
    const [wrongInpList, setWrongInpList] = useState(false)
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
        const descrip = areaDescription.current.value;
        const id = Date.now();
        const genre = [];
        const like = 0;
        const img = poster;
        if (checkboxDetective.current.checked) {
            genre.push('Детектив')
        }
        if (checkboxThriller.current.checked) {
            genre.push('Триллер')
        }
        if (checkboxHistory.current.checked) {
            genre.push('Исторический')
        }
        if (checkboxRomance.current.checked) {
            genre.push('Роман')
        }
        if (checkboxFantastic.current.checked) {
            genre.push('Фантастика')
        }
        if (checkboxModernLiterature.current.checked) {
            genre.push('Современная литература')
        }
        console.log(name !== "" && author !== "" && published !== "" && genre.length !== 0)
        if (name !== "" && author !== "" && published !== "" && genre.length !== 0) {
            const newBook = { name, author, published, descrip, genre, id, like, img }
            dispatch(addNewBook(newBook))
            setShowModalWindow(false)
            setWrongInpList(false)
        } else {
            setWrongInpList(true)
        };
    }

    return <>
        <button
            onClick={() => setShowModalWindow(true)}
            style={{ 'marginLeft': '30px' }}
        >Добавить книгу</button>
        {
            showModalWindow
            &&
            <div className="modal-window">
                <form onSubmit={createNewBook}>
                    <button style={{ "position": "absolute", "right": 0, "top": 0 }}
                        onClick={() => setShowModalWindow(false)}
                    >x</button>
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
                        style={{ 'resize': 'none', 'marginTop': '30px' }}
                        placeholder='Описание'
                        cols="50" rows="10"
                        ref={areaDescription}
                    ></textarea>
                    <button>Создать</button>
                    {wrongInpList
                        &&
                        <p>Заполните все поля!</p>}
                </form>
            </div>
        }
    </>
}