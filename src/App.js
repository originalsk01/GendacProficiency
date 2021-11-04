import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import ProductModal from "././components/Modal/ProductModal";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

function App() {
  const [editProduct, setEditProduct] = useState();

  //loading, error and product states
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  //Modal states
  const [modalShow, setModalShow] = useState(false);
  const [addProduct, setAddProduct] = useState(true);

  //Table Pagination states
  const [page, setPage] = useState(1);
  const [ascending, setAscending] = useState(false);
  const [pageNumbers, setPageNumbers] = useState(0);

  const pageSize = 50;
  const APIUrl =
    "https://gendacproficiencytest.azurewebsites.net/API/ProductsAPI";

  // Fetching the data we wish to use, put it in descending order so new products can be seen
  useEffect(() => {
    fetch(
      APIUrl +
        "?page=" +
        page +
        "&pageSize=" +
        pageSize +
        "&ascending=" +
        ascending
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result.Results);
          setPageNumbers(result.TotalNumberOfPages);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [page]); //Use Effect will rerun the query every time there is a change to the page numbers

  //Function used to send a delete request to the API, to delete the specific item
  function deleteProduct(name, id) {
    //Here we delete the product we clicked on
    axios.delete(`${APIUrl}/${id}`).then((res) => {
      //After we receive the data we show an alert to let them know it has been deleted
      swal({
        title: "Product Deleted!",
        text:
          "Product " +
          `${id}` +
          "\n Name: " +
          `${name}` +
          "\n Was successfully deleted!",
        icon: "success",
        buttons: "Great!",
      })
        //After they close the modal we then refresh the page to get our data
        .then((value) => {
          window.location.reload();
        });
    });
  }

  //We edit our variables to get the add product variable
  function showAddProduct() {
    setAddProduct(true);
    setModalShow(true);
  }

  //We edit our state variables to get the correct modal to open
  function showEditProduct(id) {
    setEditProduct(id);
    setAddProduct(false);
    setModalShow(true);
  }

  function goNextPage() {
    //Check if we are at the end of our list if we are we loop to the front
    if (page == pageNumbers) {
      setPage(1);
      return;
    }
    setPage(page + 1);
  }

  function goPreviousPage() {
    //Check if we are at the start of our list if we are we go to the end
    if (page == 1) {
      setPage(pageNumbers);
      return;
    }
    setPage(page - 1);
  }

  return (
    <div className="App">
      <h2 id="Product_bar">
        Gendac Product List{" "}
        <Button variant="success" onClick={() => showAddProduct()}>
          Add Product
        </Button>
      </h2>
      <br />
      <Table
        striped
        borded
        hover
        size="sm"
        style={{
          marginTop: 30,
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {!isLoaded
            ? "Loading..."
            : products.map((item, index) => (
                <tr key={index}>
                  <td>{item.Id}</td>
                  <td>{item.Name}</td>
                  <td>{item.Price}</td>
                  <td>{item.Category}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => showEditProduct(item.Id)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        deleteProduct(item.Name, item.Id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
      <div style={{ marginBottom: 30 }}>
        <Button variant="outline-primary" onClick={() => goPreviousPage()}>
          Previous Page
        </Button>
        <Button variant="outline-primary" onClick={() => goNextPage()}>
          Next Page
        </Button>{" "}
        <div>
          Page {page} of {pageNumbers}
        </div>
      </div>

      {/* Below is the modal, which shows when the button is clicked a different modal is shown depending on which button is clicked */}
      <ProductModal
        addproduct={addProduct}
        productid={editProduct}
        show={modalShow}
        url={APIUrl}
        onHide={() => setModalShow(false)}
      />
      <ToastContainer position="top-right" autoClose={1500} />
    </div>
  );
}

export default App;
