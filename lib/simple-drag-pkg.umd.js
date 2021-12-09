(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.SimpleDrag = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var script = vue.defineComponent({
      name: 'SimpleDrag',
      props: {
          text: {
              type: String,
              default: '文本',
          },
      },
      setup() {
          const style = vue.ref({
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
    return (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
      class: "simple-drag",
      draggable: "true",
      style: _ctx.style
    }, vue.toHandlers(_ctx.events)), vue.toDisplayString(_ctx.text), 17 /* TEXT, FULL_PROPS */))
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

  exports.Drag = script;
  exports["default"] = index;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
