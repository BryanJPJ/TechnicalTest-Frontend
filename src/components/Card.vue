<script setup>
defineProps({
  id: {
    type: Number,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
});
</script>
<template>

<div id="cardCont" >
  <section class="mx-auto my-5" style="max-width: 23rem;">
      
    <div class="card testimonial-card mt-2 mb-3">
      <div class="card-up aqua-gradient"></div>
      <div class="avatar mx-auto white">
        <img :src=image class="rounded-circle img-fluid"
          :alt=title>
      </div>
      <div class="card-body text-center">
        <h4 class="card-title font-weight-bold">{{title }}</h4>
        <hr>
        <p><i class="fas fa-quote-left"></i>Author: {{name}}</p>
      </div>
    </div>
    
  </section>
</div>

</template>
<style scoped>
#cardCont{
  width: 20em;
  height: 25em;
  margin-left: 10px;
  margin-bottom: 10px;
}
body {
	background-color: #f5f7fa;
}

.testimonial-card .card-up {
  height: 120px;
  overflow: hidden;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
}

.aqua-gradient {
  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;
}

.testimonial-card .avatar {
  width: 120px;
  margin-top: -60px;
  overflow: hidden;
  border: 5px solid #fff;
  border-radius: 50%;
}
</style>