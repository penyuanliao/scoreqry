<template>
  <p>BASE_URL: {{ BASE_URL }}</p>
  <p>Current route name: {{ $route.name }}</p>
  <p>Current route path: {{ $route.path }}</p>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Logo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">{{ t('welcome') }}</a>
          </li>
          <!-- <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
          </li> -->
          <li class="nav-item">
            <RouterLink class="nav-link" href="#" to="/login">Login</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" href="#" to="/grades">Grades Inquiries</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
  <FooterView />
</template>
<script lang="ts">
import { RouterView } from 'vue-router'
import FooterView from './components/FooterView.vue'
import { useI18n } from 'vue-i18n'
export default {
  name: 'App',
  components: {
    RouterView,
    FooterView
  },
  setup() {
    const BASE_URL = import.meta.env.BASE_URL
    // 定義t 多語言使用
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t, locale, BASE_URL }
  }
}
</script>
