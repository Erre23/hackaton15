<template>
    <div class="card card-erre border-success" title="Click for see detail">
        <router-link
            :to="{
                name: 'user',
                params: { id: userId }
            }"
        >
        <div class="circle">
            <h2>{{userName}}</h2>
        </div>
    </router-link>
    </div>
</template>

<script>
export default {
    props: {
        userName: String,
        userId: String
    }
}
</script>

<style>
    .card-erre {
        display: inline-block;
        height: 130px;
        width: 130px;
        margin: 11px;
        padding: 10px;
    }
    .card-erre:hover {
        cursor: pointer;
        box-shadow: 0px 0px 4px 3px #28a745;
    }
    .card-erre:hover > .circle {
        background: white;
    }
    .circle {
        display: flex;
        border: 1px solid #28a745;
        background: #c1eecb;
        height: 100%;
        width: 100%;
        border-radius: 100%;
        justify-content: center;
        align-items: center;
    }
    .circle > h2 {
        color: #28a745;
        text-decoration: none !important;
    }
    .circle > h2:hover {
        color: #28a745;
        text-decoration: none !important;
    }
</style>