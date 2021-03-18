import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Saves the review to the database
  saveReview: function(reviewData) {
    return axios.post("/api/reviews", reviewData);
  }
};
