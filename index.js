const K_ICON = {
  extends: 'k-icon',
  template: `
    <span
      :aria-label="alt"
      :role="alt ? 'img' : null"
      :aria-hidden="!alt"
      :data-back="back"
      :data-size="size"
      :class="'k-icon k-icon-' + type"
    >
      <span v-if="emoji" class="k-icon-emoji">{{ type }}</span>
      <svg v-else :style="{ color: color }" viewBox="0 0 16 16">
        <use :xlink:href="type" />
      </svg>
    </span>
  `,
  computed: {
    fa() {
      return this.type.startsWith('fa-');
    }
  },
  methods: {
  }
};


/*

      */
panel.plugin("steirico/kirby-plugin-fa", {
  components: {
    'k-icon': K_ICON
  },
  use: [
    function(Vue) {
      const
        VUE_COMPONENTS = Vue.options.components;

      Object.keys(VUE_COMPONENTS).forEach(componentName => {
        const COMPONENT = {
          components: {
            'k-icon': K_ICON
          },
          extends: VUE_COMPONENTS[componentName]
        };
        Vue.component(componentName, COMPONENT);
      });
    }
  ]
});
