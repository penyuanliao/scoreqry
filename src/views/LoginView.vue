<template>
  <div class="container" v-if="isLogin == false">
    <div class="row" style="margin-top: 20px">
      <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
        <div style="width: 318px; height: 84px">
          <img src="../assets/logo.jpg" />
        </div>
        <form @submit.prevent="handleLogin">
          <fieldset>
            <h2>
              南開科技大學
              <h4 style="color: #333">113學年度 四技單獨招生查詢系統</h4>
            </h2>
            <hr class="colorgraph" />
            <div
              v-if="hidden"
              class="alert alert-danger alert-dismissible fade in out"
              role="alert"
              id="error-alert"
            >
              <button
                id="error-close"
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
                @click="onClose"
              >
                <span aria-hidden="true">×</span>
              </button>
              <strong>帳號密碼輸入錯誤! </strong> 請檢查帳號密碼是否輸入有誤.
            </div>
            <div class="form-group">
              <div class="input-group input-group-lg">
                <span class="input-group-addon"
                  ><span class="glyphicon glyphicon-user" aria-hidden="true"></span
                ></span>
                <input
                  v-model="username"
                  type="text"
                  name="username"
                  id="username"
                  class="form-control input-lg"
                  placeholder="請輸入身分證字號"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group input-group-lg">
                <span class="input-group-addon"
                  ><span class="glyphicon glyphicon-lock" aria-hidden="true"></span
                ></span>
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  class="form-control input-lg"
                  placeholder="請輸入出生年月日(ex:0850102)"
                />
              </div>
            </div>
            <hr class="colorgraph" />
            <div class="row" style="text-align: center">
              <div class="col-xs-6 col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3">
                <input type="submit" class="btn btn-lg btn-success btn-block" value="登入" />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
  <UserView v-if="isLogin == true" />
</template>

<script lang="ts">
import { storeToRefs } from 'pinia'
import { defineComponent, ref } from 'vue'
import ScoreStore from '@/stores/scoreStore'
import UserView from '@/components/UserView.vue'
// import cryptojs from 'crypto-js'
export default defineComponent({
  name: 'LoginView',
  components: {
    UserView
  },
  beforeRouteEnter(to, from) {
    console.log(to, from)
  },
  setup() {
    const secretKey = '$2b$10$gHpceWMiWxIb6ql44RtxcuVitSX1QVqa3uewyJOCz'
    const scoreStore = ScoreStore()
    // const users = computed(() => scoreStore.getUsers)
    const { isLogin } = storeToRefs(scoreStore)
    const username = ref('')
    const password = ref('')
    const hidden = ref(false)
    const handleLogin = () => {
      // console.log('handleLogin', username.value, password.value)
      scoreStore.login(username.value, password.value)
      hidden.value = !scoreStore.isAuth
      if (hidden.value) {
        setTimeout(() => onClose(), 2000)
      }
    }
    const onClose = () => {
      hidden.value = false
    }
    scoreStore.init(secretKey)
    // Encrypt
    // const ciphertext = cryptojs.AES.encrypt(
    //   JSON.stringify(scoreStore.getUsers),
    //   secretKey
    // ).toString()
    // console.log('Encrypted Message:', ciphertext)

    return {
      onClose,
      handleLogin,
      isLogin,
      username,
      password,
      hidden
    }
  }
})
</script>

<style lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .foot {
    margin-top: 20px;
  }
}
</style>
