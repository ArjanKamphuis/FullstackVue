const inputForm = {
    template: `
        <div class="input-form">
            <form @submit="submitForm" class="ui form">
                <div class="field">
                    <input ref="newItem" type="text" placeholder="Add an item!">
                </div>
                <button class="ui button">Submit</button>
            </form>
        </div>
    `,
    methods: {
        submitForm(e) {
            e.preventDefault();
            console.log(this.$refs.newItem.value);
        }
    }
}

window.addEventListener('load', () => {
    new Vue({
        el: '#app',
        components: {
            'input-form': inputForm
        }
    });
});