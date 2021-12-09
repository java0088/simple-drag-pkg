import { defineComponent, ref, openBlock, createElementBlock, mergeProps, toHandlers, toDisplayString } from 'vue';

var script = defineComponent({
    name: 'SenDrag',
    props: {
        text: {
            type: String,
            default: '文本',
        },
    },
    setup() {
        const style = ref({
            left: '0px',
            top: '0px',
        });
        const events = {
            dragstart: (e) => {
                style.value.left = e.clientX + 'px';
                style.value.top = e.clientY + 'px';
            },
            drag: (e) => {
                style.value.left = e.clientX + 'px';
                style.value.top = e.clientY + 'px';
            },
            dragend: (e) => {
                style.value.left = e.clientX + 'px';
                style.value.top = e.clientY + 'px';
            },
        };
        return {
            events,
            style,
        };
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", mergeProps({
    class: "sen-drag",
    draggable: "true",
    style: _ctx.style
  }, toHandlers(_ctx.events)), toDisplayString(_ctx.text), 17 /* TEXT, FULL_PROPS */))
}

script.render = render;
script.__scopeId = "data-v-0e50d8ad";
script.__file = "src/Drag.vue";

const components = [script];
function install(app) {
    components.forEach((component) => {
        app.component(component.name, component);
    });
}
var index = {
    install,
};

export { script as Drag, index as default };
