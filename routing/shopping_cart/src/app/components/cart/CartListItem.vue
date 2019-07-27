<template>
    <div class="box">
        <div class="cart-item--details">
            <h2 class="is-inline has-text-weight-bold">
                <router-link :to="`/products/${cartItem.id}`">{{ cartItem.title }}</router-link>
            </h2>
            <div>
                <span class="cart-item--price has-text-primary has-text-weight-bold">${{ cartItem.price }} x {{ cartItem.quantity }}</span>
                <span>
                    <i @click="addCartItem(cartItem)" class="fa fa-arrow-circle-up cart-item--modify"></i>
                    <i @click="removeCartItem(cartItem)" class="fa fa-arrow-circle-down cart-item--modify"></i>
                </span>
            </div>
        </div>
        <div class="cart-item--image">
            <img :src="require(`../../assets/${cartItem.image_tag}`)" :alt="`${cartItem.image_tag}`">
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    
    export default {
        name: 'CartListItem',
        props: ['cartItem'],
        methods: {
            ...mapActions(['addCartItem', 'removeCartItem'])
        }
    }
</script>

<style scoped>
    .box {
        height: 90px;
        padding: 10px;
    }

    .cart-item--details {
        float: left;
        width: 250px;
        padding: 10px;
    }

    .cart-item--image img {
        float: right;
        height: 70px;
    }
    
    .cart-item--modify {
        cursor: pointer;
        margin: 0 1px;
    }
</style>
