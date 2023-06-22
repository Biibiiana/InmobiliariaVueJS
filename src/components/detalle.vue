<template>
    <img src="{{ oferta.imagen }}" alt="">
    <h1>{{ oferta.nombre }} - {{ oferta.precio }}</h1>
    <p>{{ oferta.direccion }}</p>
    <div>
        <p class="fondoYbordes">{{ oferta.tipo }}</p>
        <p class="fondo2Ybordes" v-if="oferta.oferta = true">Está en oferta</p>
        <p class="fondo2Ybordes" v-else-if="oferta.oferta = false"></p>
    </div>
    <p>{{ oferta.habitaciones }} habitaciones</p>
    <p>{{ oferta.baño }} baños</p>
    <h3>Localizacion</h3>
    <img src="../assets/mapa.jpg" alt="">
    <button>Contactar</button>
</template>

<style>
    img {
        width: 100%;
    }

    .fondoYbordes {
        background-color: #f1f1f1;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
    }

    .fondo2Ybordes {
        background-color: #f1f1f1;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
    }

    button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }


</style>