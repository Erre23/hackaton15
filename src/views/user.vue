<template>
  <div class="container" style="max-width: 800px">
      <div class="card border-success text-success">
          <div class="card-header bg-success text-white border-success">
              DATOS DEL USUARIO
          </div>
          <div v-if='user.id === 0' class="card-body pt-1 pb-1">
            <p>No existen datos que mostrar</p>
          </div>
          <div v-else-if='user.id > 0' class="card-body pt-1 pb-1 text-left">
                <div class="row">
                    <div class="col-3">UserName:</div>
                    <div class="col-9 text-dark">{{user.username}}
                    </div>
                </div>
                <div class="row bg-green">
                    <div class="col-3">Name:</div>
                    <div class="col-9 text-dark">{{user.name}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">Phone:</div>
                    <div class="col-9 text-dark">{{user.phone}}
                    </div>
                </div>
                <div class="row bg-green">
                    <div class="col-3">Email:</div>
                    <div class="col-9 text-dark">{{user.email}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">Website:</div>
                    <div class="col-9 text-dark">{{user.website}}
                    </div>
                </div>
                <div class="row bg-green">
                    <div class="col-3">Address:</div>
                    <div class="col-9 text-dark">{{`${user.address.street} ${user.address.suite}, ${user.address.city}`}}
                        <a :href='user.address.geo.url' target="_blank">view in google maps</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">ZipCode:</div>
                    <div class="col-9 text-dark">{{user.address.zipcode}}
                    </div>
                </div>
                <div class="row bg-green">
                    <div class="col-3">Company:</div>
                    <div class="col-9 text-dark">{{`${user.company.name}`}}
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getUserAction'])
    },
    computed: {
        ...mapState(['user'])
    },
    created() {
        this.getUserAction(this.id);
    }
}
</script>

<style>
    .bg-green {
        background: #d9ffe1;;
    }
</style>