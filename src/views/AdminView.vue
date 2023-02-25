<template>
    <body>
        <NavbarComponent/>
        <h2>This is a Admin page</h2>
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
    
</style>