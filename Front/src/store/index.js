import { createStore } from 'vuex';
import { auth } from './auth.module';

const Store = createStore({
  modules: {
    auth,
  }
})

export default Store;