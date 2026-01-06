import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TourCard from "../../shared/TourCard";
import SearchBar from "../../components/Searchbar";
import CommonSection from "../../components/Commonsection";
import { getAllTours } from "../../Redux/slices/tourSlice";

const Tours = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const limit = 8;

  const {
    tours,
    isLoading,
    isError,
    message,
    totalPages,
  } = useSelector((state) => state.tour);

  useEffect(() => {
    dispatch(getAllTours({ page, limit }));
  }, [dispatch, page]);

  return (
    <>
      <CommonSection title="All Tours" />

      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm -mt-8 p-4">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Featured Tours
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Choose from our popular trips and discover new places.
            </p>
          </div>
          {isLoading && (
            <p className="text-center text-gray-500">
              Loading tours...
            </p>
          )}

          {isError && (
            <p className="text-center text-red-500">
              {message}
            </p>
          )}

            {!isLoading && !isError && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {tours && tours.length > 0 ? (
                  tours.map((tour) => (
                    <div key={tour._id} className="h-full">
                      <TourCard tour={tour} />
                    </div>
                  ))
                ) : (
                  <p className="text-center col-span-full text-gray-500">
                    No tours available
                  </p>
                )}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center mt-10 gap-2">
                  {[...Array(totalPages).keys()].map((num) => (
                    <button
                      key={num}
                      onClick={() => setPage(num + 1)}
                      className={`px-4 py-2 rounded ${
                        page === num + 1
                          ? "bg-amber-500 text-white"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      {num + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Tours;
