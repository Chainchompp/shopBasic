<template>
  <section class="hero is-teal is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-black">Login</h3>
          <hr class="login-hr" />
          <div class="box">
            <form>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="email"
                    placeholder="Correo"
                    autofocus=""
                  />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="password"
                    placeholder="Contraseña"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <div class="select is-large">
                    <select>
                      <option>SEDE 1</option>
                      <option>SEDE 2</option>
                      <option>SEDE 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <button @click="login()" class="button is-block is-info is-large is-fullwidth">
                Ingresar <i class="fa fa-sign-in" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {}
  },
  methods: {
    login(){
      this.$router.replace("/home")
    }
  }
};
</script>

<style>
</style>