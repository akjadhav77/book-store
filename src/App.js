import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import "./App.css";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetails from "./components/Book/BookDetails";
import BookList from "./components/Book/BookList";


function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/add" element={<AddBook/>} exact />
          <Route path="/books" element={<Books/>} exact />
          <Route path="/bookslist" element={<BookList/>} exact />
          <Route path="/about" element={<About/>} exact />
          <Route path="/books/:id" element={<BookDetails/>} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;
