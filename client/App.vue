<template>
    <div id="app" class="keen-docs">
        <sidebar class="is-desktop"></sidebar>

        <transition name="transition-fade">
            <div
                class="keen-docs-mobile-sidebar__backdrop"
                @click="showSidebar = false"
                v-show="showSidebar"
            ></div>
        </transition>

        <transition name="transition-slide">
            <sidebar class="is-mobile" v-show="showSidebar"></sidebar>
        </transition>

        <section class="keen-docs-content">
            <div class="keen-docs-content__toolbar">
                <div class="keen-docs-content__toolbar-content">
                    <ui-icon-button
                        class="keen-docs-content__toolbar-menu-button"
                        color="white"
                        icon="menu"
                        type="clear"

                        @click="showSidebar = true"
                    ></ui-icon-button>

                    <h1 class="keen-docs-content__toolbar-title">Secrets Keys</h1>

                    <a
                        class="keen-docs-content__toolbar-action"
                        rel="noopener"
                        target="_blank"
                        :href="'https://github.com/JosephusPaye/Keen-UI/blob/master/' + $route.meta.sourceUrl"
                    >View Source</a>
                </div>
            </div>

            <div class="keen-docs-content__page-content" ref="pageContent">
              <section class="page page--ui-alert">
                <h2 class="page__title">Add New Key</h2>
                <div class="page__examples">
                  <ui-textbox
                  icon="vpn_key"
                  label="Password"
                  placeholder="Enter a new secret key"
                  type="password"
                  v-model="textbox7"
                  ></ui-textbox>
                  <ui-button color="primary" icon="refresh" :icon-position="iconPosition" :size="size" type="secondary">Generate Again</ui-button>
                  <ui-button color="primary" icon="content_copy" :icon-position="iconPosition" :size="size" type="secondary">Copy</ui-button>
                  <ui-slider icon="volume_up" show-marker v-model="slider3"></ui-slider>
                  <div class="page__demo-group">
                      <ui-modal ref="modal6" title="With footer">
                          Hi there, World. What's happening?
                          <h4 class="page__demo-title">With marker</h4>

                          <div slot="footer">
                              <ui-button color="primary">Say Hi</ui-button>
                              <ui-button @click="closeModal('modal6')">Close</ui-button>
                          </div>
                      </ui-modal>

                      <ui-button @click="openModal('modal6')">With footer</ui-button>
                  </div>
                  <ui-textbox
                      enforce-maxlength
                      help="Maximum 256 characters"
                      icon="face"
                      label="Description"
                      placeholder="Link, Site Name, Site Description"

                      :multi-line="true"
                      :maxlength="256"
                      v-model="textbox15"
                  ></ui-textbox>
                  <ui-fileupload multiple name="file10" color="primary" type="secondary"></ui-fileupload>
                </div>
                <ui-button color="primary" icon="add" :icon-position="iconPosition" :size="size">Save</ui-button>
              </section>
            </div>
        </section>
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import {UiSlider, UiFileUpload, UiIconButton, UiAlert, UiTextbox, UiButton} from 'keen-ui';

export default {
  data() {
    return {
      showAlert1: true,
      showSidebar: false,
      textbox15: '',
      slider3: 60
    };
  },
  watch: {
    '$route'() {
      this.$nextTick(() => {
        window.Prism.highlightAll();
        this.$refs.pageContent.scrollTop = 0;
        this.showSidebar = false;
      });
    }
  },
  created() {
    this.$Progress.start();
  },
  mounted() {
    this.$Progress.finish();
  },
  methods: {
   openModal(ref) {
     this.$refs[ref].open();
   },
   closeModal(ref) {
     this.$refs[ref].close();
   },
   resetSliders() {
      this.slider3 = 60;
   }
  },
  components: {
    Sidebar,
    UiIconButton,
    UiButton,
    UiTextbox,
    UiAlert,
    UiSlider,
    UiFileUpload
  }
};
</script>
