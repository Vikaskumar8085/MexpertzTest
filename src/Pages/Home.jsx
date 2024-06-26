import React, { useEffect, useState } from "react";
import axiosInstance from "../services/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../services/slice/ProductSlice";
import { Col, Container, Row } from "react-bootstrap";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const [filterValue, setIsfilterValue] = useState("");

  const productsdata = useSelector((state) => state?.products?.value);

  const products = productsdata?.filter((item) => {
    if (filterValue == "") {
      return item?.Status !== filterValue;
    } else if (item?.Status == "Completed") {
      return item?.Status === filterValue;
    } else if (item?.Status == "Published") {
      return item?.Status === filterValue;
    } else if (item?.Status == "Draft") {
      return item?.Status === filterValue;
    } else if (item?.Status == "In Progress") {
      return item?.Status === filterValue;
    }
  });

  const getallProduct = async () => {
    try {
      const apiCall = await axiosInstance.get("/sciencefiction");
      if (apiCall) {
        dispatch(addProduct(apiCall?.data));
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  useEffect(() => {
    getallProduct();
  }, [0]);
  return (
    <>
      <Nav />
      <div className="product_wrapper">
        <Container>
          {/* filter */}

          <Row>
            <Col sm={12}>
              <div className="ProductTitle">
                <h1>Science Fiction Stories</h1>
              </div>

              <div className="filter_product">
                <button
                  onClick={() => {
                    setIsfilterValue("");
                  }}
                >
                  All
                </button>
                <button
                  onClick={() => {
                    setIsfilterValue("Completed");
                  }}
                >
                  Completed{" "}
                </button>
                <button
                  onClick={() => {
                    setIsfilterValue("Published");
                  }}
                >
                  Published{" "}
                </button>
                <button
                  onClick={() => {
                    setIsfilterValue("In Progress");
                  }}
                >
                  Progress{" "}
                </button>
                <button
                  onClick={() => {
                    setIsfilterValue("Draft");
                  }}
                >
                  Draft{" "}
                </button>
              </div>
            </Col>
          </Row>
          {/* filter */}

          <Row>
            {Array.isArray(products)
              ? products.map((item, index) => {
                  console.log(item?._id, "item");
                  return (
                    <Col lg={3} md={4} xs={12} sm={6} className="my-2">
                      <div className="Product_Card">
                        <div className="product_image" key={index + 1}>
                          <Link to={`/view/${item?._id}`}>
                            <img
                              src={` https://ik.imagekit.io/dev24/${item?.Image[0]}`}
                              className="img-fluid w-100"
                              alt=""
                            />
                          </Link>
                        </div>
                        <article>
                          <h3>{item?.Storyadvenure?.Storytitle} </h3>
                          <button>{item?.Status}</button>
                        </article>
                      </div>
                    </Col>
                  );
                })
              : "No data "}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
