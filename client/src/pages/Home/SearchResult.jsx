import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";

import TourCard from "../../shared/TourCard";

const SearchResult = () => {
  const { searchResults, isLoading, isError, message } = useSelector(
    (state) => state.tour
  );

  // 🔄 Loading state
  if (isLoading) {
    return (
      <Container className="py-16 text-center">
        <h3>Searching tours...</h3>
      </Container>
    );
  }

  // ❌ Error state
  if (isError) {
    return (
      <Container className="py-16 text-center text-danger">
        <h3>{message}</h3>
      </Container>
    );
  }

  return (
    <section className="py-12 bg-gray-100">
      <Container>
      

        {Array.isArray(searchResults) && searchResults.length > 0 ? (
          <Row>
            {searchResults.map((tour) => (
              <Col
                lg="3"
                md="4"
                sm="6"
                className="mb-4"
                key={tour._id}
              >
                <TourCard tour={tour} />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center py-10">
            <h4 className="text-gray-600">
              No tours found for your search 😕
            </h4>
            <p className="text-sm text-gray-500 mt-2">
              Try changing location, distance, or group size
            </p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default SearchResult;
