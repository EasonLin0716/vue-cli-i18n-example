import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { locale as en } from '@/common/config/i18n/en'
import { locale as tw } from '@/common/config/i18n/tw'

Vue.use(VueI18n)

let messages = {}
messages = { ...messages, en, tw }

const lang = localStorage.getItem('language') || 'tw'

const i18n = new VueI18n({
  locale: lang,
  messages,
})

export default i18n
