<script>
    /* Клик вне элемента */
    export default {
        bind: function(el, binding, vNode) {
            if (typeof binding.value !== 'function') {
                const compName = vNode.context.name
                let warn = [Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be
                if (compName) { warn += Found in component '${compName}' }

                console.warn(warn)
            }
            const bubble = binding.modifiers.bubble
            const handler = (e) => {
                if (bubble || (!el.contains(e.target) && el !== e.target)) {
                    binding.value(e)
                }
            }
            el.__vueClickOutside__ = handler

            // Изменение на 'mousedown'
            document.addEventListener('mousedown', handler)
        },

        unbind: function(el) {
            // Проверка существования обработчика перед его удалением
            if(el.__vueClickOutside__) {
                document.removeEventListener('mousedown', el.__vueClickOutside__)
                el.__vueClickOutside__ = null
            }
        }
    }

</script>
