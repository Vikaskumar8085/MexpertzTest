import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import { Col, Container, Row } from "react-bootstrap";
import Nav from "./Nav";

function ViewProduct() {
  const { id } = useParams();
  const [IsSingleData, setIsSingleData] = useState("");
  console.log(IsSingleData?.Storyadvenure?.content?.Paragraph);
  const [FilterValue, setIsFilter] = useState("Storyadvenure");

  const getSingleProduct = async () => {
    try {
      const apiCall = await axiosInstance.get(`/sciencefiction/${id}`);
      if (apiCall) {
        setIsSingleData(apiCall?.data);
      }
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [0]);
  return (
    <>
      <div className="ViewBox">
        <Nav />
        <Container>
          <div className="Filter">
            <Row>
              <Col sm={12}>
                <button onClick={() => setIsFilter("Storyadvenure")}>
                  Storyadvenure
                </button>
                <button onClick={() => setIsFilter("Wordexplore")}>
                  Wordexplore
                </button>
                <button
                  onClick={() => {
                    setIsFilter("Brainquest");
                  }}
                >
                  Brainquest
                </button>
              </Col>
            </Row>
          </div>

          <Row>
            <Col sm={12} xs={12}>
              <div className="View_Card">
                {FilterValue === "Storyadvenure" ? (
                  <div className="Story_data">
                    <div className="story_title">
                      <h1>{IsSingleData?.Storyadvenure?.Storytitle}</h1>
                    </div>
                    <div className="storyImage">
                      <img
                        src={` https://ik.imagekit.io/dev24/${
                          IsSingleData?.Image ? IsSingleData?.Image[0] : ""
                        }`}
                        className="img-fluid responsive"
                        alt="no-img"
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {FilterValue === "Wordexplore" ? (
                  <div className="Wordexplore">
                    {IsSingleData?.Wordexplore?.map((item, index) => {
                      return (
                        <div className="Wordexplore_Card">
                          <div className="Wordexplore_title">
                            <h5>{item?.Storytitle}</h5>
                            <p>{item?.Storyttext}</p>
                          </div>
                          <div className="wordImage">
                            <img
                              src={` https://ik.imagekit.io/dev24/${item?.Storyimage}`}
                              className="img-fluid responsive"
                              alt="no-img"
                            />
                          </div>
                          <div className="wordtext">
                            <h4>{item?.Storyitext}</h4>
                            <p>{item?.Synonyms}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
                {FilterValue === "Brainquest" ? (
                  <div className="Brainquest_block">
                    {IsSingleData?.Brainquest?.map((item, index) => {
                      return (
                        <div>
                          <h4 key={index + 1}>{item?.Question}</h4>
                          {item?.Option?.map((item, index) => {
                            return (
                              <ul>
                                <li key={index}>{item}</li>
                              </ul>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ViewProduct;
