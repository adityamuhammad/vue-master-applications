<template>
  <div>
    Dashboard Component
    <h3>Events Dashboard</h3>
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">SignOut</button>

    {{ $store.state }}
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
  methods : {
    signOut() {
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
  }
}
</script>
