import Vue from "vue";
import App from "./app";
import router from "../router";

router.beforeEach((to,from,next)=>{

  console.log(to);
  console.log(from);
  console.log(next);

  App.logEvent({
    type: 'visit',
    name: to.name,
    time: new Date().valueOf(),
    params: {
      from: {
        name: from.name,
        path: from.path,
        query: from.query
      },
      to: {
        name: to.name,
        path: to.path,
        query: to.query
      }
    }
  })
  next()

})
