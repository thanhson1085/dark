<template>
  <div>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
var Vue = require('vue');

export default {
  data() {
    return {
    };
  },
  components: {
  },
  created() {
    this.$Progress.start();
  },
  mounted () {
    this.$Progress.finish();
  },
  watch: {
    '$route'(to, from) {
    }
  },
  computed: {
  },
  methods: {
  }
}

</script>

<style>
  .question-list-item {
    width: 100%;
    margin: 0;
  }
  @media (min-width: 768px) {
    .question-list-item {
      width: 49%;
      margin: 0 0 20px 0;
    }
  }
  .question-player-custom {
    box-shadow: none !important;
    border-bottom: none;
  }

  @media (min-width: 768px) {
    .question-player-custom {
      width: 75%;
    }
  }
</style>
