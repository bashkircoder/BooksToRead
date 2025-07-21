import BookItem from "./BookItem";

function BooksList({books, setBooks}) {
    return (
        <ul className="list-group my-4">
            {
                books.map(book => (
                    <BookItem book={book} setBooks={setBooks} books={books} />
                ))
            }
        </ul>
    )
}

export default BooksList;