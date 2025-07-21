import { useState } from "react";

function BookForm({ books, setBooks }) {
    
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setBooks([...books, { id: Date.now(), title, author, completed: false }]);
        setTitle("");
        setAuthor("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="d-flex align-items-center">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Введите название книги..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Введите автора книги..."
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button className="btn btn-outline-success ms-3" type="submit">
                    Добавить
                </button>
            </div>
        </form>
    );
}

export default BookForm;