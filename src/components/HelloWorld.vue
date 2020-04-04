<template>
  <div class="hello">
    <ul>
      <li
        v-for="(menuItem, index) in $t('GENERAL.NAV_OPTIONS')"
        :key="index + 1"
      >
        {{ menuItem }}
      </li>
    </ul>
    <h1>{{ msg }}</h1>
    <h1>{{ $t('GENERAL.OK') }}</h1>
    <h1>{{ $t('GENERAL.CONTINUE') }}</h1>
    <h1>{{ $t('GENERAL.CANCEL') }}</h1>
    <h1>{{ $t('GENERAL.GUEST') }}</h1>
    <div>
      <button data-lang="tw" @click="setLang">中文</button>
      <button data-lang="en" @click="setLang">English</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    setActiveLanguage(lang) {
      localStorage.setItem('language', lang)
    },
    setLang(evt) {
      const lang = evt.target.dataset.lang
      this.setActiveLanguage(lang)
      return history.go(0)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
