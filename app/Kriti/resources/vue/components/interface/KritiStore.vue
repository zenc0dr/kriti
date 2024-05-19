<template>
    <div class="kriti-store">
        div.
    </div>
</template>

<script>
export default {
    name: "KritiStore",
    props: {
        active_code: {
            type: String,
            default: null
        }
    },
    emits: [
        'selectScheme',
        'update'
    ],
    methods: {
        getSchemes() {
            Kriti.api({
                url: 'kriti.api.Store:getSchemes',
                then: response => {
                    this.items = response.items
                    let active_item = localStorage.getItem('kriti-panel-active')
                    this.items.some(item => {
                        if (item.code === active_item) {
                            this.selectItem(item)
                            return true
                        }
                    })
                }
            })
        },
    }
}
</script>

<style scoped>

</style>
