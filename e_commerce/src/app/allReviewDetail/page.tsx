import React from 'react'
import ViewReview from "../../components/viewReview"
import Footer from "@/components/footer"

const AllReviewDetail = () => {
  return (
    <div className='mt-24 w-full max-w-[100%] mx-auto'>
      <div className="p-14 mb-20">
        <h2 className="satoshi1 text-[1.5rem] mb-2 pl-2 font-semibold">All Review</h2>
        <div className="">
          <ViewReview limit={1000} page={0} />
        </div>
      </div>
        <Footer />
    </div>
  )
}

export default AllReviewDetail
