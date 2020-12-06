<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username"> {{ fullName }}</h1>
      <div class="user-profile__admin-badge">
        ADmin
      </div>
      <div class="user-profile__follower-count">
        <strong>Follows : </strong> {{ followers }}
        <button @click="followUser">Follow</button>
      </div>
    </div>
    <div class="user-profile__twoots-wrapper">
      <div class="user-profile__twoot" v-for="twoot in user.twoots" :key="twoot.id">
        {{twoot.content}}
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: "UserProfile",
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: 'Xuyen2007',
        firstname: 'Xuyen',
        lastname: 'Tran Van',
        email: 'minhxuyn2705@gmail.com',
        isAdmin: true,
        twoots: [
          {id: 1, content: 'Twooter is Amazing !'},
          {id: 2, content: "Don't Forget to subsciber to the earth is Square !"}
        ]
      }
    }
  },
  watch: {
    followers(newFollowersCount, oldFollowersCount) {
      if (oldFollowersCount < newFollowersCount) {
        console.log(`${this.user.username} has gained a follower`)
      }
    }
  },
  methods: {
    followUser() {
      this.followers++
    }
  },
  mounted() {
    this.followUser()
  },
  computed: {
    fullName() {
      return `${this.user.username} ${this.user.email}`
    }
  }


}
</script>

<style scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
}

.user-profile__user-panel {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  background: #79c0e2;
  border-radius: 5px;
  border: 1px solid #DFE3E8;

}

.user-profile__admin-badge {
  background: red;
  color: white;
  border-radius: 5px;
}

</style>