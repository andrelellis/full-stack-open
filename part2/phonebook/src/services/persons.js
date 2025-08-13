import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const createOne = (newPerson) => {
  return axios.post(baseUrl, newPerson).then((response) => response.data);
};

const updateOne = (updatedPerson) => {
  return axios
    .put(`${baseUrl}/${updatedPerson.id}`, updatedPerson)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return {
        status: "error",
        message: `information for ${updatedPerson.name} has already been removed from server`,
      };
    });
};

const deleteOne = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

export default { getAll, createOne, updateOne, deleteOne };
