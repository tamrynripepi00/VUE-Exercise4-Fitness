import { createStore } from 'vuex'

const store = createStore({
    state: {
        // Sessions required by exercise
        sessions: [
            {
                name: "Morning Yoga",
                coach: "Sarah",
                date: "2025-12-13",
                time: "09:00 - 10:00",
                capacity: "15",
                img:'https://tamrynripepi00.github.io/images/yoga.jpg'
            },
            {
                name: "Strength Training",
                coach: "Michael",
                date: "2025-12-17",
                time: "10:00 - 11:00",
                capacity: "15",
                img:'https://tamrynripepi00.github.io/images/strengthtraining.jpg'
            },
            {
                name: "Cardio Burn",
                coach: "Emma",
                date: "2025-12-20",
                time: "11:00 - 12:00",
                capacity: "20",
                img: 'https://tamrynripepi00.github.io/images/cardio.avif'
            },
            {
                name: "Evening Spin",
                coach: "Liam",
                date: "2025-12-27",
                time: "19:00 - 20:00",
                capacity: "20",
                img:'https://tamrynripepi00.github.io/images/spin.webp'
            }
        ]
    },

  // GETTERS
 getters: {
  allSessions: (state) => {
    console.log("Sessions from Vuex:", state.sessions);
    return state.sessions;
  }
},

  // MUTATIONS (only update state here)
  mutations: {
    UPDATE_CAPACITY(state, { name, capacity }) {
      const sessions = state.capacity.find(t => t.name === name);
      if (sessions) sessions.capacity = capacity;
    }
  },

  // ACTIONS (call mutations)
  actions: {
    updateCapacity({ commit }, payload) {
      commit("UPDATE_CAPACITY", payload);
    }
  }
}
);

export default store