import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import BookingCard from "../../shared/BookingCard";

import { getSingleTour } from "../../Redux/slices/tourSlice";
import calculateAvgRating from "../../util/util";

const BASE_URL = "http://localhost:5000";

const TourDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    singleTour: tour,
    isLoading,
    isError,
    message,
  } = useSelector((state) => state.tour);

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (id) {
      dispatch(getSingleTour(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (tour && Array.isArray(tour.reviews)) {
      setReviews([...tour.reviews].reverse());
    }
  }, [tour]);

  if (isLoading) {
    return (
      <Container className="py-16 text-center">
        <h3>Loading tour details...</h3>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container className="py-16 text-center text-danger">
        <h3>{message || "Failed to load tour"}</h3>
      </Container>
    );
  }

  if (!tour) {
    return (
      <Container className="py-16 text-center">
        <h3>Tour not found</h3>
        <Link to="/tours" className="text-amber-600">
          Back to tours
        </Link>
      </Container>
    );
  }

  const formatDate = (iso) => {
    try {
      return new Date(iso).toLocaleDateString();
    } catch {
      return iso;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating) return alert("Select rating");
    if (!text.trim()) return alert("Write a review");

    const newReview = {
      name: "You",
      rating,
      text,
      date: new Date().toISOString(),
    };

    setReviews((prev) => [newReview, ...prev]);
    setRating(0);
    setHoverRating(0);
    setText("");
  };

  const { totalRating, avgRating } = calculateAvgRating(
    reviews.slice().reverse()
  );

  return (
    <Container className="py-12">
      <Row>
        {/* LEFT SIDE */}
        <Col lg="8">
          {/* IMAGE FIXED */}
          <img
            src={`${tour.photo}`}
            alt={tour.title}
            className="w-full h-[420px] object-cover rounded-lg mb-6"
          />

          <h2 className="text-2xl font-bold mb-2">{tour.title}</h2>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Star className="w-4 h-4 text-amber-400" />
            <span>{totalRating === 0 ? "Not rated" : avgRating}</span>
            <span>({reviews.length} reviews)</span>
          </div>

          <p className="mb-6">{tour.desc}</p>

          {/* REVIEW FORM */}
          <form onSubmit={handleSubmit} className="mb-6">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Share your thoughts"
              className="w-full border p-3 rounded mb-3"
            />

            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <Star
                  key={num}
                  className={`w-5 h-5 cursor-pointer ${
                    num <= (hoverRating || rating)
                      ? "text-amber-400"
                      : "text-gray-300"
                  }`}
                  onClick={() => setRating(num)}
                  onMouseEnter={() => setHoverRating(num)}
                  onMouseLeave={() => setHoverRating(0)}
                />
              ))}
            </div>

            <button className="bg-amber-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </form>

          {/* REVIEWS LIST */}
          {reviews.length > 0 ? (
            reviews.map((r, i) => (
              <div key={i} className="border-b py-3">
                <strong>{r.name || "Anonymous"}</strong>
                <div className="text-sm text-gray-500">
                  {formatDate(r.date)}
                </div>
                <p>{r.text}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </Col>

        {/* RIGHT SIDE */}
        <Col lg="4">
          <BookingCard
            price={tour.price}
            avgRating={avgRating}
            totalRating={totalRating}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TourDetails;
