'use client';
import { useState } from "react";
import { client } from '../sanity/lib/client'; // Import Sanity client

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Great product! Highly recommended."
    }
  ]);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    if (name && comment) {
      const newReview = {
        _type: "review",
        name,
        rating,
        comment,
        createdAt: new Date().toISOString(), // Add timestamp
      };
  
      try {
        await client.create(newReview);
        setReviews([...reviews, { id: reviews.length + 1, ...newReview }]);
        setName("");
        setRating(5);
        setComment("");
        alert("Review submitted successfully!");
      } catch (error) {
        console.error("Error submitting review:", error);
        alert("Failed to submit review.");
      }
    }
  };
  
  

  return (
    <div className="mt-40 mb-40 p-4 bg-white rounded-lg shadow-md w-full max-w-[50rem] mx-auto">
      <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
      <div>
        {reviews.map((review) => (
          <div key={review.id} className="p-3 border border-gray-300 rounded-lg mb-2">
            <h3 className="font-medium">{review.name}</h3>
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < review.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
              ))}
            </div>
            <p className="text-sm text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-gray-300 pt-4">
        <h3 className="text-lg font-medium">Add a Review</h3>
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Your Name" 
          className="block w-full p-2 mb-2 border border-gray-300 rounded-md"
        />
        <select 
          value={rating} 
          onChange={(e) => setRating(Number(e.target.value))} 
          className="w-full p-2 mb-2 border border-gray-300 rounded-md"
        >
          {[5, 4, 3, 2, 1].map((star) => (
            <option key={star} value={star}>{star} Stars</option>
          ))}
        </select>
        <textarea 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          placeholder="Your Review" 
          className="block w-full p-2 mb-2 border border-gray-300 rounded-md"
        />
        <button 
          onClick={handleSubmit} 
          className="w-full p-2 bg-black text-white rounded-md cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewComponent;