import axios from 'axios';

export const getStuff = () => {
  return axios.get('/api/reviews/')
};

export const getSingleOrdersReview = id => {
  return axios.get(`/api/orders/${id}/reviews`)
};

export const getHelperReviews = id => {
  return axios.get(`/api/reviews/helper/${id}`)
};
