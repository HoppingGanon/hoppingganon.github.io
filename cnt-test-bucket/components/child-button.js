const component = {
  template: `
  <div @click="$emit('click')" style="margin:50px; width: 100px; height: 30px; display: flex; justify-content: center; align-items: center;cursor: pointer;background-color: #7ff;">
    <div>
      {{ text }}
    </div>
  </div>`,
  props: {
    text: String,
  },
  emits: ["click"],
};

component;
