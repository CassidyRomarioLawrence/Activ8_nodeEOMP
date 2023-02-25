<template>
    <body>
        <NavbarComponent/>
        <section id="men"><h2>Men</h2></section>
        <section id="women"><h2>Women</h2></section>
        <section id="accessories"><h2>Accessories</h2></section>
        <FooterComponent/>
    </body>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
    components: { NavbarComponent, FooterComponent }
}
</script>
<style scoped>
   
#men {
    height: 100vh;
    background-image: linear-gradient( rgba(0, 0, 0, 0.7), black);
}

#women {
    height: 100vh;
    background-image: linear-gradient( black, rgba(0, 0, 0, 0.7));
}

#accessories {
    height: 100vh;
    background-image: linear-gradient( rgba(0, 0, 0, 0.7), black);
}

h2 {
    text-align: center;
}

</style>