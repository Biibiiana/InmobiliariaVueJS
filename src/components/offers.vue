<script setup>
mostrarDetalle = (oferta) => {
    router.push({name: 'detalle', params: {id: oferta.id}})
}
</script>

<template>
    <div class="category">
        <header>
            <p class="pageHeader">Ofertas</p>
        </header>
        <main>
            <ul class="categoryListings">
                <li class="categoryListing" v-for="oferta in ofertas" v-if="oferta.oferta = true" :key="oferta.id" v-on:click="mostrarDetalle(oferta)">
                    <a class="categoryListingLink" href="/category/sale/zOtzUylwMhi7Iovxhtyl">
                        <img :src="oferta.imagen" :alt="oferta.nombre">
                        <div class="categoryListingDetails" v-bind:class="[oferta.tipo == 'Venta' ? 'fondoVenta' : 'fondoAlquiler' ]">
                            <p class="categoryListingName">{{oferta.nombre}}</p>
                            <p class="categoryListingPrice">{{oferta.precio}}</p>
                            <div class="categoryListingInfoDiv">
                                <img src="../assets/cama.png" alt="bed">
                                <p class="categoryListingInfoText">{{oferta.habitaciones}} Habitaciones</p>
                                <img src="../assets/baño.png" alt="bath">
                                <p class="categoryListingInfoText">{{oferta.baño}}</p>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
    import { ref } from 'vue'

    // give each todo a unique id
    let id = 0

    const ofertas = ref([
        {id: id++, tipo: 'Alquiler', nombre: 'AAA', precio: 1000, habitaciones: 1, baño: 'compartido', direccion: 'Calle 12', oferta: true, imagen: '../assets/habitacion1.jpg'},
        {id: id++, tipo: 'Venta', nombre: 'BBB', precio: 1000000, habitaciones: 5, baño: '3 baños', direccion: 'Calle 13', oferta: false, imagen: '../assets/casa1.jpg'},
        {id: id++, tipo: 'Alquiler', nombre: 'AAA', precio: 1000, habitaciones: 1, baño: 'compartido', direccion: 'Calle 12', oferta: true, imagen: '../assets/habitacion1.jpg'},
        {id: id++, tipo: 'Venta', nombre: 'BBB', precio: 1000000, habitaciones: 5, baño: '3 baños', direccion: 'Calle 13', oferta: false, imagen: '../assets/casa1.jpg'},
        {id: id++, tipo: 'Alquiler', nombre: 'AAA', precio: 1000, habitaciones: 1, baño: 'compartido', direccion: 'Calle 12', oferta: true, imagen: '../assets/habitacion1.jpg'},
        {id: id++, tipo: 'Venta', nombre: 'BBB', precio: 1000000, habitaciones: 5, baño: '3 baños', direccion: 'Calle 13', oferta: false, imagen: '../assets/casa1.jpg'},
        {id: id++, tipo: 'Alquiler', nombre: 'AAA', precio: 1000, habitaciones: 1, baño: 'compartido', direccion: 'Calle 12', oferta: true, imagen: '../assets/habitacion1.jpg'},
        {id: id++, tipo: 'Venta', nombre: 'BBB', precio: 1000000, habitaciones: 5, baño: '3 baños', direccion: 'Calle 13', oferta: false, imagen: '../assets/casa1.jpg'},
        {id: id++, tipo: 'Alquiler', nombre: 'AAA', precio: 1000, habitaciones: 1, baño: 'compartido', direccion: 'Calle 12', oferta: true, imagen: '../assets/habitacion1.jpg'},
        {id: id++, tipo: 'Venta', nombre: 'BBB', precio: 1000000, habitaciones: 5, baño: '3 baños', direccion: 'Calle 13', oferta: false, imagen: '../assets/casa1.jpg'},
        {id: id++, tipo: 'Alquiler', nombre: 'AAA', precio: 1000, habitaciones: 1, baño: 'compartido', direccion: 'Calle 12', oferta: true, imagen: '../assets/habitacion1.jpg'},
        {id: id++, tipo: 'Venta', nombre: 'BBB', precio: 1000000, habitaciones: 5, baño: '3 baños', direccion: 'Calle 13', oferta: false, imagen: '../assets/casa1.jpg'},
        {id: id++, tipo: 'Alquiler', nombre: 'AAA', precio: 1000, habitaciones: 1, baño: 'compartido', direccion: 'Calle 12', oferta: true, imagen: '../assets/habitacion1.jpg'},
        {id: id++, tipo: 'Venta', nombre: 'BBB', precio: 1000000, habitaciones: 5, baño: '3 baños', direccion: 'Calle 13', oferta: false, imagen: '../assets/casa1.jpg'},
        {id: id++, tipo: 'Alquiler', nombre: 'AAA', precio: 1000, habitaciones: 1, baño: 'compartido', direccion: 'Calle 12', oferta: true, imagen: '../assets/habitacion1.jpg'},
        {id: id++, tipo: 'Venta', nombre: 'BBB', precio: 1000000, habitaciones: 5, baño: '3 baños', direccion: 'Calle 13', oferta: false, imagen: '../assets/casa1.jpg'},
        {id: id++, tipo: 'Alquiler', nombre: 'AAA', precio: 1000, habitaciones: 1, baño: 'compartido', direccion: 'Calle 12', oferta: true, imagen: '../assets/habitacion1.jpg'},
        {id: id++, tipo: 'Venta', nombre: 'BBB', precio: 1000000, habitaciones: 5, baño: '3 baños', direccion: 'Calle 13', oferta: false, imagen: '../assets/casa1.jpg'},
        {id: id++, tipo: 'Alquiler', nombre: 'AAA', precio: 1000, habitaciones: 1, baño: 'compartido', direccion: 'Calle 12', oferta: true, imagen: '../assets/habitacion1.jpg'},
        {id: id++, tipo: 'Venta', nombre: 'BBB', precio: 1000000, habitaciones: 5, baño: '3 baños', direccion: 'Calle 13', oferta: false, imagen: '../assets/casa1.jpg'},
        {id: id++, tipo: 'Alquiler', nombre: 'AAA', precio: 1000, habitaciones: 1, baño: 'compartido', direccion: 'Calle 12', oferta: true, imagen: '../assets/habitacion1.jpg'},
        {id: id++, tipo: 'Venta', nombre: 'BBB', precio: 1000000, habitaciones: 5, baño: '3 baños', direccion: 'Calle 13', oferta: false, imagen: '../assets/casa1.jpg'},
        {id: id++, tipo: 'Alquiler', nombre: 'AAA', precio: 1000, habitaciones: 1, baño: 'compartido', direccion: 'Calle 12', oferta: true, imagen: '../assets/habitacion1.jpg'},
        {id: id++, tipo: 'Venta', nombre: 'BBB', precio: 1000000, habitaciones: 5, baño: '3 baños', direccion: 'Calle 13', oferta: false, imagen: '../assets/casa1.jpg'},
        {id: id++, tipo: 'Alquiler', nombre: 'AAA', precio: 1000, habitaciones: 1, baño: 'compartido', direccion: 'Calle 12', oferta: true, imagen: '../assets/habitacion1.jpg'},
        {id: id++, tipo: 'Venta', nombre: 'BBB', precio: 1000000, habitaciones: 5, baño: '3 baños', direccion: 'Calle 13', oferta: false, imagen: '../assets/casa1.jpg'}
    ])
</script>