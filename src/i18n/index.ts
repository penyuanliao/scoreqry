import { createI18n } from 'vue-i18n'
import zh_tw from './locales/zh_tw.json'
import en_us from './locales/en_us.json'
import ja_JP from './locales/ja_JP.json'

// 語系定義檔案
const LocaleSchema: { [key: string]: string } = {
  en_US: 'en_US',
  zh_TW: 'zh_TW',
  ja_JP: 'ja_JP'
}
// 建立語系物件
export const i18n = createI18n({
  locale: LocaleSchema.en_US,
  legacy: false,
  // 預設值
  messages: {
    zh_tw,
    en_us,
    ja_JP
  }
})
// 語系選單資訊
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
// 語系清單
export const languages = languageOptions.map((i) => i.value)
// 動態載入
export const loadLocaleMessage = async (locale) => {
  const language = await import(`./locales/${locale}.json`)
  i18n.global.setLocaleMessage(locale, language.default)
  i18n.global.locale = locale
}
