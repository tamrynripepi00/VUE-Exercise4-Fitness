<template>
  <div class="sessions">
    <div v-for="session in sessions" :key="session.name" class="sessions-card">
      <!-- Image -->
      <img :src="session.img" :alt="sessions.name" class="session-img" />

        <!-- <p v-if="session.name">
        
      </p> -->

      <!-- Name + price -->
      <h2>{{ session.name }}</h2>

      <h3>{{ session.coach }}</h3>

      <h3>{{ session.date }}</h3>

      <h4>{{ session.time }}</h4>

      <h4>Capacity: {{ session.capacity }}</h4>

      <!-- Book Button -->
       <button @click="bookSession(session)" class="book-btn">Book Session
       </button>
      </div>
    </div>
</template>


<script>
export default {
  computed: {
    sessions() {
      return this.$store.getters.allSessions;
    }
  }
}
</script>

<style scoped>
.sessions {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.sessions-card {
  width: 300px;
  padding: 15px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  margin-top: 50px;
  line-height: 35px;
  background-color: rgb(172, 99, 99);
  color: white;
  transition: transform 0.7s ease-in-out;
}

.sessions-card:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

.session-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

.book-btn {
  margin-top: 10px;
  padding: 8px 15px;
  background: rgb(255, 119, 0);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.book-btn:hover {
  background: rgb(139, 32, 0);
}

</style>

