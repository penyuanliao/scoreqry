<template>
  <div class="container">
    <div class="row" style="margin-top: 20px">
      <div class="jumbotron">
        <h1 class="text-center">
          <span class="glyphicon glyphicon-user" style="color: #3498db"></span>
        </h1>
        <div class="row" v-for="current in registers" :key="current.uuid">
          <h2 class="cover-heading text-center"></h2>

          <div class="col-xs-12 col-sm-8">
            <h2>{{ current.name }}</h2>
            <p><strong>應試編號: </strong> {{ current.uuid }}</p>
            <p><strong>報名學系: </strong> {{ current.department }}</p>
            <p>
              <strong>書審面資料審查-總成績: </strong>
              {{ current.score }}
            </p>
            <p><strong>最低錄取分數</strong>: {{ current.lowest }}</p>
          </div>
        </div>

        <p class="text-center">
          <button id="btn-back" class="btn btn-success" role="button" @click="handleLogout()">
            登出
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia'
import { computed, defineComponent } from 'vue'
import ScoreStore from '@/stores/scoreStore'
// import ScoreView from '@/components/ScoreView.vue'

export default defineComponent({
  name: 'LoginView',
  components: {},
  setup() {
    const scoreStore = ScoreStore()
    const { current } = scoreStore
    const registers = computed(() => scoreStore.getRegister)
    const handleLogout = () => {
      console.log('Logout')
      scoreStore.logout()
    }
    console.log('getRegister:', registers.value)

    return {
      handleLogout,
      current,
      registers
    }
  }
})
</script>
