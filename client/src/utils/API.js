/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Saves the review to the database
  saveReview: function(reviewData) {
    return axios.post("/api/reviews", reviewData);
  },

  getReviews: function() {
    return axios.get("/api/reviews");
  },
};
