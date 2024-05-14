<template>
    <div class="kriti-start">
        <div class="kriti-start__btn"></div>
    </div>
    <div class="kriti-menu">
        <div class="kriti-menu__btn">
            Репозиторий
        </div>
        <div class="kriti-menu__btn">
            Репозиторий
        </div>
    </div>
</template>

<script>
export default {
    name: "KritiMenu",
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
.kriti-start {
    position: fixed;
    top: 10px;
    left: 10px;
    background: #fff;
    padding: 9px;
    cursor: pointer;
    transition: 200ms;
    border-radius: 10px;

    &__btn {
        width: 30px;
        height: 30px;
        background-image: url(/kriti/images/icons/kriti-icon.svg);
        background-size: cover;
        background-repeat: no-repeat;
    }
}

.kriti-menu {
    &__btn {

    }
}
</style>
