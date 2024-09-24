<template>
  <div class="container">
    <div class="row logo" style="margin-top: 20px"></div>
    <form class="row g-3 needs-validation" @submit.prevent="handleLogin" novalidate>
      <fieldset class="form-group">
        <div class="col-md-8">
          <label for="validationUsername" class="form-label">帳號</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend" style="height: 45px">
              <span class="fa fa-user fa-lg" />
            </span>
            <input
              type="text"
              class="form-control"
              id="validationUsername"
              aria-describedby="inputGroupPrepend"
              placeholder="請輸入身分證字號"
              required
            />
            <div class="invalid-feedback">請輸入身分證字號!</div>
          </div>
        </div>
        <div class="col-md-8">
          <label for="validationPassword" class="form-label">密碼</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend" style="height: 45px">
              <span class="fa fa-lock fa-lg" />
            </span>
            <input
              type="password"
              name="password"
              class="form-control"
              id="validationPassword"
              aria-describedby="inputGroupPrepend"
              placeholder="請輸入出生年月日(ex:0850102)"
              required
            />
            <div class="invalid-feedback">請輸入出生年月日!</div>
          </div>
        </div>
        <hr class="colorgraph" />
        <div class="row" style="text-align: center">
          <div class="col-md-offset-3 col-sm-offset-3">
            <!-- <input type="submit" class="btn btn-lg btn-success btn-block" value="登入" /> -->
            <button class="btn btn-primary" type="submit">登入</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

const handleLogin = () => {
  console.log('handleLogin')
}

onMounted(() => {
  const forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      (event) => {
        console.log(event)

        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        console.log('submit')

        form.classList.add('was-validated')
      },
      false
    )
  })
})
</script>
