import axios from "axios"

global.get = axios.get
global.put = axios.put
global.post = axios.post
global.patch = axios.patch

export type axios = typeof axios

declare global {
  var get: import("axios").AxiosInstance["get"]
  var put: import("axios").AxiosInstance["put"]
  var post: import("axios").AxiosInstance["post"]
  var patch: import("axios").AxiosInstance["patch"]

  namespace NodeJS {
    interface Global {
      get: import("axios").AxiosInstance["get"]
      put: import("axios").AxiosInstance["put"]
      post: import("axios").AxiosInstance["post"]
      patch: import("axios").AxiosInstance["patch"]
    }
  }
}
