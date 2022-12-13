<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutComponent></AboutComponent>
  </div>
</template>
<script >
import AboutComponent from '@/components/AboutComponent.vue';
  export default  {
    name: "about-component",
    props: [],
    mounted() {
    },
    data() {
        return {};
    },
    methods: {},
    computed: {},
    components: { AboutComponent }
}


</script>