function BookItem({ book, books, setBooks }) {
    const toggleBook = (id) => {
        //находим задачу с Id, равным переданному и меняем в текущем объекте задачи статус на противоположный
        //массив с полученными задачами перезаписываем в состояние tasks
        setBooks(
            books.map((book) =>
                book.id === id ? { ...book, completed: !book.completed } : book
            )
        );
    };

    const deleteBook = (id) => {
        //фильтруем в новый массив задачи, id которых не равен переданному
        //массив с полученными задачами перезаписываем в состояние tasks
        setBooks(books.filter((book) => book.id !== id));
    };

    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <span
                className={book.completed ? "text-decoration-line-through" : ""}
            >
                {book.title} {book.author}
            </span>
            <div>
                <button onClick={() => toggleBook(book.id)} className="btn btn-outline-primary">
                    {book.completed ? "Отменить" : "Прочитано"}
                </button>
                <button onClick={() => deleteBook(book.id)} className="btn btn-outline-danger ms-2">Удалить</button>
            </div>
        </li>
    );
}

export default BookItem;