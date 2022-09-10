import axios from "axios";

export async function petition({
    url,
    method,
    body,
    constants,
    token,
    dispatch,
    headers,
    params,
  }) {
    const { REQUEST, SUCCESS, FAIL } = constants;
    let petitionHeaders = {
      "Content-Type": "application/json",
      token: token ? token : "",
      "Access-Control-Allow-Origin": "*"
    };
    let paramsPetition = {};
    if (headers) {
      petitionHeaders = { ...petitionHeaders, ...headers };
    }
    if(params){
      paramsPetition = params;
    }
    try {
      dispatch({ type: REQUEST });
      const { data } = await axios({
        method,
        url: process.env.REACT_APP_BASE_URL + url,
        data: body,
        params: paramsPetition,
      });
      dispatch({ type: SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: FAIL,
        payload: error.response?.data ? error.response.data : error.message,
      });
      throw error.response?.data ? error.response.data : error.message;
    }
  }