<script setup>
const props = defineProps({
  event: Object,
});
</script>
<template>

<div id="cardCont" >
  <section class="mx-auto my-5" style="max-width: 23rem;" >
      
    <div class="card testimonial-card mt-2 mb-3" id="sectionCard">
      <!-- <div class="card-up aqua-gradient"></div> -->
      <div class="avatar mx-auto white">
        <img :src="event['im:image'][2].label" class="rounded-circle img-fluid"
          :alt=artist id="imageSize">
      </div>
      <div class="card-body text-center">
        <h4 class="card-title font-weight-bold">{{event['im:name'].label}}</h4>
        <hr>
        <p><i class="fas fa-quote-left">Author: {{event['im:artist'].label}} </i></p>
      </div>
    </div>
    
  </section>
</div>

</template>
<style scoped>
#cardCont{
  width: 20em;
  /* height: 25em; */
  margin-left: 10px;
  margin-bottom: 10px;
}
#sectionCard{
  box-shadow:
       inset 0 -3em 3em rgba(0, 0, 0, 0.037),
             0 0  0 2px rgba(255, 255, 255, 0),
             0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
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
  background: linear-gradient(40deg, #080c10, #40584f) !important;
}

.testimonial-card .avatar {
  width: 120px;
  margin-top: -60px;
  overflow: hidden;
  border: 5px solid #fff;
  border-radius: 50%;
}
</style>