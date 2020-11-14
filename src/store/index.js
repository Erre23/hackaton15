import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    user: {
      address: { 
        city: '',
        geo: {
          lat: '',
          lng: '',
          url: ''
        },
        street: '', 
        suite: '', 
        zipcode: ''
      },
      company: { 
        name: '', 
        catchPhrase: '', 
        bs: '' 
      },
      email: '',
      id: 0,
      name: '',
      phone: '',
      username: '',
      website: ''
    }
  },
  mutations: {
    clearUserMutation(state){
      state.user = {
        address: { 
          city: '',
          geo: {
            lat: '',
            lng: '',
            url: ''
          },
          street: '', 
          suite: '', 
          zipcode: ''
        },
        company: { 
          name: '', 
          catchPhrase: '', 
          bs: '' 
        },
        email: '',
        id: 0,
        name: '',
        phone: '',
        username: '',
        website: ''
      }
    },
    getUserMutation(state, payload){
      state.user = payload;
    },
    getUsersMutation(state, payload) {
      state.users = payload;
    }
  },
  actions: {
    async getUserAction({commit}, id) {  
      commit('clearUserMutation');    
      const info = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      let user = await info.json();
      user.address.geo.url = `https://www.google.com/maps/search/?api=1&query=${user.address.geo.lat},${user.address.geo.lng}`;
      commit('getUserMutation', user);
    },
    async getUsersAction({commit}) {
        const info = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await info.json();
        const users = data.map(i => {
          return {
            id: i.id,
            name: i.name.substring(0, 1).toUpperCase(),
          }
        });
        commit('getUsersMutation', users);
    }
  },
  modules: {
  }
})
