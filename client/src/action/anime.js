import * as api from "../api/index.js";

export const addAnime = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addAnime(formData);
    dispatch({ type: "ADD", payload: data });
  } catch (error) {
    console.log(error);
  }
};
