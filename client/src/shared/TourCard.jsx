import React from "react";
import { Card, CardBody } from "reactstrap";
import { MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import calculateAvgRating from "../util/util";

const TourCard = ({ tour }) => {
  const { avgRating } = calculateAvgRating(tour.reviews);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tour/${tour._id}`);
  };

  return (
    <Card
      className="border-0 shadow-sm rounded-3 overflow-hidden h-100 cursor-pointer transition"
      onClick={handleClick}
    >
      {/* Image */}
      <div className="position-relative overflow-hidden rounded">
        <img
          src={tour.photo}
          alt={tour.title}
          className="w-100 transition-transform duration-300 hover:scale-110"
          style={{ height: "220px", objectFit: "cover" }}
        />

        {tour.featured && (
          <span className="position-absolute top-0 end-0 m-2 bg-warning text-white px-3 py-1 rounded">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <CardBody className="d-flex flex-column justify-content-between">
        <div>
          {/* Location + Rating */}
          <div className="d-flex justify-content-between mb-2 text-muted small">
            <div className="d-flex align-items-center gap-1">
              <MapPin size={16} className="text-warning" />
              {tour.city}
            </div>

            <div className="d-flex align-items-center gap-1">
              <Star size={16} className="text-warning" />
              {avgRating} ({tour.reviews.length})
            </div>
          </div>

          {/* Hover Title */}
          <h5 className="fw-semibold hover:text-orange-500 transition-colors">
            {tour.title}
          </h5>

          <p className="text-muted small">{tour.desc}</p>
        </div>

        {/* Price + CTA */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h6 className="fw-bold text-dark mb-0">
            Rs.{tour.price}{" "}
            <span className="text-muted small">/ per person</span>
          </h6>

          <button
            className="btn btn-link text-warning p-0"
            onClick={(e) => {
              e.stopPropagation(); 
              navigate(`/tour/${tour._id}`);
            }}
          >
            Book Now
          </button>
        </div>
      </CardBody>
    </Card>
  );
};

export default TourCard;
