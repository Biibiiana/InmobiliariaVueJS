<template>
    <div class="explore">
        <header>
            <h1>Explore</h1>
        </header>
        <main>
            <h2>Recommended</h2>
            <div class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                    <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span>
                    <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span>
                    <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span>
                    <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span>
                    <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5"></span>
                </div>
                <div class="swiper-wrapper" id="swiper-wrapper-8b797a68dbda4c3e" aria-live="polite">
                    <div class="swiper-slide swiper-slide-active" role="group" aria-label="1 / 5" style="width: 1184px;">
                        <div class="swiperSlideDiv" style="background: url(../assets/casa1.jpg) center center / cover no-repeat;">
                            <p class="swiperSlideText">Casa Centro</p>
                            <p class="swiperSlidePrice">1200€/mes </p>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-slide-next" role="group" aria-label="2 / 5" style="width: 1184px;">
                        <div class="swiperSlideDiv" style="background: url(../assets/habitacion1.jpg) center center / cover no-repeat;">
                            <p class="swiperSlideText">Habitación montaña</p>
                            <p class="swiperSlidePrice">180€/noche</p>
                        </div>
                    </div>
                    <div class="swiper-slide" role="group" aria-label="3 / 5" style="width: 1184px;">
                        <div class="swiperSlideDiv" style="background: url(../assets/casa2.jpg) center center / cover no-repeat;">
                            <p class="swiperSlideText">Casa moderna con piscina</p>
                            <p class="swiperSlidePrice">1500€/mes</p>
                        </div>
                    </div>
                    <div class="swiper-slide" role="group" aria-label="4 / 5" style="width: 1184px;">
                        <div class="swiperSlideDiv" style="background: url(../assets/habitacion2.jpg) center center / cover no-repeat;">
                            <p class="swiperSlideText">Habitación fen-sui</p>
                            <p class="swiperSlidePrice">120€/noche</p>
                        </div>
                    </div>
                    <div class="swiper-slide" role="group" aria-label="5 / 5" style="width: 1184px;">
                        <div class="swiperSlideDiv" style="background: url(../assets/casa3.jpg) center center / cover no-repeat;">
                            <p class="swiperSlideText">Cabaña Río</p>
                            <p class="swiperSlidePrice">800€/mes</p>
                        </div>
                    </div>
                </div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
            <h2>Categories</h2>
            <div class="exploreCategories">
                <a href="/category/rent">
                    <img src="../assets/rent.jpg" alt="rent" class="exploreCategoryImg">
                    <p class="exploreCategoryName">Alquilar</p>
                </a>
                <a href="/category/sale">
                    <img src="../assets/sell.jpg" alt="sell" class="exploreCategoryImg">
                    <p class="exploreCategoryName">Comprar</p>
                </a>
            </div>
        </main>
    </div>
</template>

<script>
export default{
    name: 'pPpal'
}
</script>