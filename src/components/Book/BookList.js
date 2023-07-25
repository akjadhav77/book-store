import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.css";
import {
  Box,
  CardHeader,
  Table,
  // Container,
  Icon,
  IconButton,
  TableBody,
  TableCell,
  TableHead,
  styled,
  TableRow,
} from "@mui/material";
import "./Booklist.css";
import { Link, useNavigate, useParams } from "react-router-dom";

const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

// const StyledTable = styled(Table)(() => ({
//   whiteSpace: "pre",
//   "& thead": {
//     "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
//   },
//   "& tbody": {
//     "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
//   },
// }));

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
  border: "5px,",
}));

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);

  const history = useNavigate();

  const _id = books.id;
  //   const id = useParams().id;
  //   const [page, setPage] = useState(0);
  //   const [rowsPerPage, setRowsPerPage] = useState(5);

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  console.log(books);

  return (
    <div className="tableContainer" >
      <Container>
        <CardHeader>
          <>Books List</>
        </CardHeader>

        {books.length > 0 ? (
          <Box width="100%" overflow="auto">
            <TableHead>
              <TableRow >
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Author</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Update Action</TableCell>
                <TableCell align="center">Delete Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {books.map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell align="center">
                    {subscriber?.name || "_"}
                  </TableCell>
                  <TableCell align="center">
                    {subscriber?.author || "_"}
                  </TableCell>
                  <TableCell align="center">
                    {subscriber?.description || "-"}
                  </TableCell>
                  <TableCell align="center">
                    {subscriber?.price || "_"}
                  </TableCell>
                  <TableCell align="center">
                    <img src={subscriber?.image} alt="" />
                  </TableCell>

                  <TableCell align="right">
                    {/* <IconButton onClick={() => navigate("/employees/edit",{state: { Id: subscriber.empGeneratedId }})}> */}
                    <IconButton
                      LinkComponent={Link}
                      to={`/books/${subscriber?._id}`}
                      sx={{ fontSize: "16px", fontWeight: "700" }}
                    >
                      Update
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={async () => {
                        await axios
                          .delete(
                            `http://localhost:5000/books/${subscriber?._id}`
                          )
                          .then((res) => res.data)
                          .then(() => history("/"))
                          .then(() => history("/bookslist"));
                      }}
                      sx={{ fontSize: "16px", color: "red", fontWeight: "700" }}
                    >
                      Delete
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Box>
        ) : (
          error && (
            <Box display="flex" justifyContent="center" alignItems="center">
              No Data found
            </Box>
          )
        )}
      </Container>
    </div>
  );
};

export default BookList;
