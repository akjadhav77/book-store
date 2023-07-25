import React from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Book.css";

const Book = (props) => {
  const { _id, name, author, description, price, image } = props.book;

  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>By {author}</h3>
      <p>{description}</p>
      <h2>Rs {price}</h2>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button onClick={deleteHandler} sx={{ mt: "auto",  marginBottom:1 }}>
        Delete
      </Button>
    </div>
  );
};

export default Book;
