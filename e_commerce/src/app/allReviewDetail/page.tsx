import React from 'react'
import ViewReview from "../../components/viewReview"

const AllReviewDetail = () => {
  return (
    <div className='mt-28 md:mt-24 w-full max-w-[100%] mx-auto'>
      <div className="p-6 md:p-14 mb-28 md:mb-40">
        <h2 className="satoshi1 text-center text-[1.8rem] md:text-[2.5rem] mb-5 pl-2 font-semibold">All Reviews</h2>
        <div className="">
          <ViewReview limit={1000} page={0} />
        </div>
      </div>
    </div>
  )
}

export default AllReviewDetail
