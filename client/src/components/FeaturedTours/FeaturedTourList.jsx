import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import TourCard from "../../shared/TourCard";
import { getAllTours } from "../../Redux/slices/tourSlice";

const FeaturedTourList = () => {
  const dispatch = useDispatch();

  const { tours, isLoading, isError, message } = useSelector(
    (state) => state.tour
  );

  useEffect(() => {
    dispatch(getAllTours({ page: 1, limit: 8 }));
  }, [dispatch]);

  if (isLoading) {
    return <h4 className="text-center">Loading tours...</h4>;
  }

  if (isError) {
    return (
      <h4 className="text-center text-danger">
        {message || "Failed to load tours"}
      </h4>
    );
  }

  return (
    <section className="py-25 mt-0 bg-white">
      <div className="container">
        <Row>
          {Array.isArray(tours) && tours.length > 0 ? (
            tours.map((tour) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={tour._id}>
                <TourCard tour={tour} />
              </Col>
            ))
          ) : (
            <h5 className="text-center">No tours available</h5>
          )}
        </Row>
      </div>
    </section>
  );
};

export default FeaturedTourList;
