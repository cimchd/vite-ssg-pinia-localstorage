import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
// @ts-expect-error virtual import
import routes from "~pages";
import { createPinia  } from 'pinia';


// `export const createApp` is required
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    const pinia = createPinia();
    app.use(pinia);
  
    if (isClient) {
      pinia.state.value = initialState.pinia || {};
    } else {
      initialState.pinia = pinia.state.value;
    }
  }
)
