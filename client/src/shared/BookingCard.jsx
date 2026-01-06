import React, { useState } from "react";
import { Star } from "lucide-react";

const BookingCard = ({ price, avgRating, totalRating }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guestSize, setGuestSize] = useState(1);

  const serviceCharge = 10;
  const totalAmount = price * guestSize + serviceCharge;

  const handleBooking = () => {
    if (!fullName || !phone || !date) {
      return alert("Please fill all details");
    }

    alert("Booking successful (demo)");
  };

  return (
    <div className="sticky top-39 border rounded-lg shadow bg-white p-5 ">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-gray-800">
          ${price} <span className="text-sm font-normal">/ per person</span>
        </h3>

        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Star className="w-4 h-4 text-amber-400" />
          <span>{avgRating || 0}</span>
          <span>({totalRating})</span>
        </div>
      </div>

      <hr className="mb-4" />

      <h4 className="font-semibold mb-3">Information</h4>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded p-2"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Phone"
          className="w-full border rounded p-2"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="flex gap-2">
          <input
            type="date"
            className="w-1/2 border rounded p-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            type="number"
            min="1"
            placeholder="Guest"
            className="w-1/2 border rounded p-2"
            value={guestSize}
            onChange={(e) => setGuestSize(e.target.value)}
          />
        </div>
      </div>

      <hr className="my-4" />

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>
            ${price} × {guestSize} person
          </span>
          <span>${price * guestSize}</span>
        </div>

        <div className="flex justify-between">
          <span>Service charge</span>
          <span>${serviceCharge}</span>
        </div>

        <hr />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${totalAmount}</span>
        </div>
      </div>

      <button
        onClick={handleBooking}
        className="w-full mt-4 bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-full font-semibold"
      >
        Book Now
      </button>
    </div>
  );
};

export default BookingCard;
