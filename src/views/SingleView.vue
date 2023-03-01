<template>
    <div>
        <NavbarComponent/>
        <section id="single">

        </section>
        <FooterComponent/>
        
    </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
    components: { NavbarComponent, FooterComponent },
}
</script>
<style scoped>

#single {
    height: auto;
    background-image: linear-gradient(black, rgba(0, 0, 0, 0.7));
  }
</style>