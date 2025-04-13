import axios from "axios";
import router from "./routers";

axios.defaults.baseURL = import.meta.env.VITE_MAIN_API_URL;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.withCredentials = true;

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 419)
    ) {
      // console.log(error.response.config.url);
      if (
        error.response.status === 419 &&
        error.response.config.url != "api/dashboard/session-check"
      ) {
        alert.error({
          title: "Error",
          text: "Your session has expired. please login again to continue.",
        });
      }

      router.backHandler = false;
      router.push({ name: "login" });
      setTimeout(() => {
        router.backHandler = true;
      }, 0);
    } else {
      return Promise.reject(error);
    }
  }
);

export default axios;
