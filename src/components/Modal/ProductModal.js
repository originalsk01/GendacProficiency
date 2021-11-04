import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

const ProductModal = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState(0);

  //If we wish to edit a product then we request its details only once to fill in our fields
  useEffect(() => {
    fetch(props.url + "/" + props.productid)
      .then((res) => res.json())
      .then((result) => {
        setName(result.Name);
        setPrice(result.Price);
        setCategory(result.Category);
      });
  }, [props.productid]);//We check to see if the id has changed, if it has we update our modal

  //Function to make form submission
  const submitform = async (e) => {
    e.preventDefault();

    //We check if this is a new product or existing product to see if we update or post
    if (props.productid) {
      const Id = props.productid;
      const updatedProduct = {
        Id: Id,
        Name: name,
        Category: category,
        Price: price,
      };
      const res = await axios({
        method: "put",
        url: props.url + "/" + props.productid,
        data: JSON.stringify(updatedProduct),
        headers: { "Content-Type": "application/json" },
      })
        .then(() => {
          toast.success("Product Updated!", {
            onClose: () => window.location.reload(),
            theme: "dark",
          });
          toast.clearWaitingQueue(); //Removes any extra toasts queued up
        })
        .catch((error) => {
          toast.error(error.response.data.Message);
        });
    } else {
      //If it is a new product we then add it via post request
      const product = { name, price, category };
      //make our post request
      const res = await axios({
        method: "post",
        url: props.url,
        data: JSON.stringify(product),
        headers: { "Content-Type": "application/json" },
      })
        .then(() => {
          toast.success("Product added!", {
            onClose: () => window.location.reload(),
          });
        })
        .catch((error) => {
          if (error.response) {
            toast.error(error.response.data.Message);
          }
        });
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.addproduct ? "Add a new product" : "Edit Product Details"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={submitform}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="name"
                type="text"
                placeholder="Product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Price</Form.Label>
              <Form.Control
                className="formPrice"
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Label>Category</Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="formCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Please select a category</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Form.Select>
          <Button
            style={{
              marginTop: 10,
            }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
