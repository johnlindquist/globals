import axios from "axios"
export type axios = typeof axios

declare global {
  var get: typeof axios.get
  var put: typeof axios.put
  var post: typeof axios.post
  var patch: typeof axios.patch

  namespace NodeJS {
    interface Global {
      get: typeof axios.get
      put: typeof axios.put
      post: typeof axios.post
      patch: typeof axios.patch
    }
  }
}

global.get = axios.get
global.put = axios.put
global.post = axios.post
global.patch = axios.patch
