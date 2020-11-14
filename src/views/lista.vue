<template>
<div class="container">
  <div class="card border-success">
      <div class="card-header bg-success text-white">
          LISTA DE USUARIOS
      </div>
      <div class="card-body d-flex justify-content-begin flex-wrap">
          <card v-for='user in users' :userId='user.id' :userName='user.name' />
      </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import card from '@/components/card.vue'
export default {
    components: {
        card
    },
    methods: {
        ...mapActions(['getUsersAction'])
    },
    computed: {
        ...mapState(['users'])
    },
    created() {
        this.getUsersAction();
    }
}
</script>

<style>

</style>