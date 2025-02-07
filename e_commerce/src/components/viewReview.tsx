"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { Review } from "../../types/products";
import groq from "groq";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

type ViewReviewProps = {
  limit?: number;
  page?: number;
};

const ViewReview: React.FC<ViewReviewProps> = ({limit = Infinity , page = 0 }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  
  useEffect(() => {
    const fetchReviews = async () => {
      const query = groq`*[_type == "review"]{_id, rating, name, comment, createdAt}`;
      try {
        const data: Review[] = await client.fetch(query);
        
        // Sort the reviews by createdAt in descending order
        const sortedReviews = data.sort((a, b) => {
          const dateA = new Date(a.createdAt).getTime();
          const dateB = new Date(b.createdAt).getTime();
          return dateB - dateA; // Sort by most recent first
        });
        
        // Calculate starting index based on page and limit
        const startIndex = page * limit;
        const reviewsToShow = sortedReviews.slice(startIndex, startIndex + limit);
        
        setReviews(reviewsToShow);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };
  
    fetchReviews();
  }, [limit, page]);

  // Function to render stars based on rating
  const renderStars = (rating?: number) => {
    if (rating === undefined || rating === null) return <p>No rating</p>;

    const fullStars = Math.floor(rating);
    const decimalPart = rating - fullStars;
    const halfStar = decimalPart >= 0.25 && decimalPart < 0.75; 
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-lg" />);
    }
    if (halfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} className="text-yellow-400 text-lg" />);
    }
    while (stars.length < 5) {
      stars.push(<FontAwesomeIcon key={`empty-${stars.length}`} icon={faStar} className="text-gray-300 text-lg" />);
    }

    return stars;
  };

  return (
    <div className="grid w-full grid-cols-2 gap-5">
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review._id} className="card p-8 border mb-2 rounded-xl hover:bg-[#efeeee]">
            {renderStars(review.rating)}
            <p className="text-[1.3rem] font-semibold">{review.name}</p>
            <p className="satoshi text-gray-700">&ldquo;{review.comment}&ldquo;</p>
            <p className="satoshi text-[0.9rem] text-gray-600 mt-4">Posted on {new Date(review.createdAt).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default ViewReview;
