import { GET_TODOS, DELETE_TODO, ADD_TODO } from "./type";
import axios from "axios";

export const getTodos = () => (dispatch) => {
  axios
    .get(`/api/todos`)
    .then((res) => {
      dispatch({
        type: GET_TODOS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const addTodo = (todo) => (dispatch) => {
  axios
    .post(`/api/todos/`, todo)
    .then((res) => {
      dispatch({
        type: ADD_TODO,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteTodo = (id) => (dispatch) => {
  axios
    .delete(`/api/todos/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
