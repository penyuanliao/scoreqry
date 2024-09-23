import { createI18n } from 'vue-i18n'
import zh_tw from './locales/zh_tw.json'
import en_us from './locales/en_us.json'
import ja_JP from './locales/ja_JP.json'

const LocaleSchema: { [key: string]: string } = {
  en_US: 'en_US',
  zh_TW: 'zh_TW',
  ja_JP: 'ja_JP'
}

export const i18n = createI18n({
  locale: LocaleSchema.en_US,
  legacy: false,
  messages: {
    zh_tw,
    en_us,
    ja_JP
  }
})

export const languageOptions = [
  {
    label: 'English (US)',
    value: LocaleSchema.en_US
  },
  {
    label: '繁體中文 (Chinese, Traditional)',
    value: LocaleSchema.zh_TW
  }
]

export const languages = languageOptions.map((i) => i.value)
