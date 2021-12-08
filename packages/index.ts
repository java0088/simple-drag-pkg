import { App } from 'vue'
import Drag from './Drag.vue'

const components = [Drag]

function install(app: App): void {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export { Drag }
export default {
  install,
}
