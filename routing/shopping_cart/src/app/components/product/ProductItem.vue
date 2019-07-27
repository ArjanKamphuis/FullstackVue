<template>
    <section v-if="productItem" id="product-item" class="box">
        <span class="return-icon" @click="$router.go(-1)">
            <i class="fa fa-arrow-left is-primary"></i>
        </span>
        <div class="product-item--details">
            <h1 class="title is-4">
                <p>{{ productItem.title }}</p>
                <span class="tag product-item--tag">{{ productItem.product_type }}</span>
            </h1>
            <p class="product-item--description">{{ productItem.description }}</p>
            <p class="product-item--created-at">Founded: <span class="has-text-weight-bold">{{ productItem.created_at }}</span></p>
            <button @click="addAndGoToCart(productItem)" class="button is-primary product-item--button">Add to Cart</button>
        </div>
        <div class="product-item--image">
            <img :src="require(`../../assets/${productItem.image_tag}`)" :alt="`${productItem.image_tag}`">
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ProductItem',
        props: ['id'],
        computed: {
            productItem() {
                return this.$store.getters.productItemFromId(Number(this.id));
            }
        },
        methods: {
            addAndGoToCart(productItem) {
                this.$store.dispatch('addCartItem', productItem)
                    .then(() => {
                        this.$router.push('/cart');
                    });
            }
        }
    }
</script>

<style scoped>
    #product-item {
        display: flex;
        width: 100%;
        position: relative;
    }

    .return-icon {
        position: absolute;
        top: 5px;
        left: 10px;
        color: #00D1B2;
        cursor: pointer;
    }

    .product-item--details, .product-item--image {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .product-item--details {
        max-width: 50%;
        padding-left: 10px;
    }

    .product-item--description {
        padding-bottom: 10px;
    }

    .product-item--created-at {
        font-size: 12px;
        padding-bottom: 10px;
    }

    .product-item--button {
        max-width: 150px;
    }
</style>
