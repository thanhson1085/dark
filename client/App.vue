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

                    <h1 class="keen-docs-content__toolbar-title">Passwords</h1>

                    <a
                        class="keen-docs-content__toolbar-action"
                        rel="noopener"
                        target="_blank"
                        :href="'https://github.com/JosephusPaye/Keen-UI/blob/master/' + $route.meta.sourceUrl"
                    >View Source</a>
                </div>
            </div>

            <div class="keen-docs-content__page-content" ref="pageContent">
              <section class="page page--ui-alert" id="create-secret">
                <h2 class="page__title">Create a new secret</h2>
                <div class="page__examples">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-12">
                        <ui-textbox
                        icon="lock"
                        label="Name"
                        placeholder="Enter a new name"
                        type="text"
                        v-model="name"
                        ></ui-textbox>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <ui-textbox
                        icon="vpn_key"
                        label="Password"
                        placeholder="Enter a new password"
                        type="text"
                        v-model="password"
                        ></ui-textbox>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <ui-button color="primary" @click="generatePassword" icon="refresh" :icon-position="iconPosition" :size="size" type="secondary">Generate Again</ui-button>
                        <ui-button color="primary" icon="content_copy" :icon-position="iconPosition" :size="size" type="secondary">Copy</ui-button>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <ui-slider show-marker v-model="passwordLength"></ui-slider>Password Length
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="page__demo-group">
                          <ui-switch v-model="includeSymbols">Include Symbols, e.g. @#$%</ui-switch>
                          <ui-switch v-model="includeNumbers">Include Numbers, e.g. 123456</ui-switch>
                          <ui-switch v-model="includeLowercaseCharacters">Include Lowercase Characters, e.g. abcdefgh</ui-switch>
                          <ui-switch v-model="includeUppercaseCharacters">Include Uppercase Characters, e.g. ABCDEFGH</ui-switch>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <ui-textbox
                            enforce-maxlength
                            help="Maximum 256 characters"
                            icon="face"
                            label="Description"
                            placeholder="Link, Description"

                            :multi-line="true"
                            :maxlength="256"
                            v-model="description"
                        ></ui-textbox>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <ui-fileupload multiple name="file10" color="primary" type="secondary"></ui-fileupload>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <ui-button @click="submit()" color="primary" icon="add" :icon-position="iconPosition" :size="size">Save</ui-button>
                      </div>
                    </div>
                        
                  </div>
                </div>
              </section>
              <section class="page page--ui-alert" id="list-secrets">
                <h2 class="page__title">List of secrets</h2>
                <ui-tabs raised>
                <ui-tab title="Props">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Secret</th>
                        <th>Description</th>
                      </tr>
                    </thead>

                    <tbody>
                    <tr>
                      <td>options *</td>
                      <td>Array</td>
                      <td>
                        <p>An array of options to show in the menu. Can be a plain array or an array of objects.</p>

                        <p>For an array of objects, each option can have the following properties:</p>
                        <ul>
                          <li><code>type</code>: (String) - the type of option. Can be set to <code>"divider"</code> for a divider.</li>
                          <li><code>label</code>: (String) - the option label text</li>
                          <li><code>secondaryText</code>: (String) - text to show to the right of the option in the dropdown. Can be used to show keyboard shortcuts.</li>
                          <li><code>icon</code>: (String) - an icon to show with the option. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</li>
                          <li><code>iconProps</code>: (String) - an object with any of the following props of <a href="#/ui-icon">UiIcon</a>: <code>iconSet</code>, <code>removeText</code> or <code>useSvg</code>. These will be passed as props to the rendered UiIcon component.</li>
                          <li><code>disabled</code>: (Boolean) - Whether or not the option is disabled.</li>
                        </ul>

                        <p>You can redefine these keys to fit your data using the <code>keys</code> prop.</p>
                      </td>
                    </tr>

                      </tbody>
                    </table>
                  </div>

                  </ui-tab>
                  </ui-tabs>
              </section>
            </div>
        </section>
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
 
export default {
  data() {
    return {
      includeSymbols: false,
      includeNumbers: true,
      includeLowercaseCharacters: true,
      includeUppercaseCharacters: true,
      showSidebar: false,
      description: '',
      passwordLength: 16,
      password: '',
      name: ''
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
    this.generatePassword();
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
      this.passwordLength = 16;
    },
    generatePassword() {
      const lowercaseCharacters = 'qwertyuiopasdfghjklzxcvbnm';
      const uppercaseCharacters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
      const symbols = '@#$%';
      const numbers = '1234567890';
      const randoms = [];
      if (this.includeSymbols) {
        randoms.push(symbols);
      }
      if (this.includeNumbers) {
        randoms.push(numbers);
      }
      if (this.includeLowercaseCharacters) {
        randoms.push(lowercaseCharacters);
      }
      if (this.includeUppercaseCharacters) {
        randoms.push(uppercaseCharacters);
      }
      this.password = '';
      for (var i=0; i < this.passwordLength; i++) {
        const a = randoms[Math.floor(Math.random() * randoms.length)];
        const c = a.charAt(Math.floor(Math.random() * a.length));
        this.password += c;
      }
    },
    submit() {
      this.$http.post('/api/v1/posts/create', {
        secret: this.password,
        name: this.name,
        description: this.description
      }).then(response => {
        // get body data
        console.log('response', response);
      }, response => {
        // error callback
        console.log('test response', response);
      });
    }
  },
  components: {
    Sidebar
  }
};
</script>
