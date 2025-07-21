import { useState } from "react";
import BookForm from "./Components/BookForm";
import BooksList from "./Components/BooksList";

function App() {
    
    const [books, setBooks] = useState([]);

    return (
        <div className="container my-3">
            <BookForm setBooks={setBooks} books={books} />
            <BooksList setBooks={setBooks} books={books} />
        </div>
    );
}

export default App;