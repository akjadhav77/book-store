import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";

const AddBook = () => {
  const history = useNavigate();

  const [input, setInput] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: "",
  });

  const [checked, setChecked] = useState(false);
  const [nameError, setNameError] = useState("");
  const [authorError, setAuthorError] = useState("");
  const [descError, setDescError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [imgError, setImgError] = useState("");

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, 'value', e.target.value)
  };

  // function to send request to the database
  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: String(input.name),
        author: String(input.author),
        description: String(input.description),
        price: Number(input.price),
        image: String(input.image),
        availability: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.name || !input.name.length) {
      setNameError("Name is required!");
      return false;
    }else {
      setNameError('')
    }
    if (!input.author || !input.author.length) {
      setAuthorError("Author is required!");
      return false;
    }else {
      setAuthorError('')
    }
    if (!input.description || !input.description.length) {
      setDescError("Description is required!");
      return false;
    }else {
      setDescError('')
    }
    if (!input.price || !input.price.length) {
      setPriceError("Price is required!");
      return false;
    }else {
      setPriceError('')
    }
    if (!input.image || !input.image.length) {
      setImgError("Image is required!");
      return false;
    }else {
      setImgError('')
    }
    // console.log(input, checked)
    sendRequest().then(() => history("/books"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth={700}
        alignContent="center"
        alignSelf="center"
        // marginLeft='auto'
        // marginRight='auto'
        margin="auto"
        marginTop={5}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          error={nameError && nameError.length ? true : false}
          value={input.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
          helperText={nameError}
        />
        <FormLabel>Author</FormLabel>
        <TextField
          error={authorError && authorError.length ? true : false}
          value={input.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
          helperText={authorError}
        />
        <FormLabel>Description</FormLabel>
        <TextField
          error={descError && descError.length ? true : false}
          value={input.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
          helperText={descError}
        />
        <FormLabel>Price</FormLabel>
        <TextField
          error={priceError && priceError.length ? true : false}
          value={input.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
          helperText={priceError}
        />
        <FormLabel>Image</FormLabel>
        <TextField
          error={imgError && imgError.length ? true : false}
          value={input.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
          helperText={imgError}
        />
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />

        <Button type="submit" variant="contained" sx={{ marginBottom: 10 }}>
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
