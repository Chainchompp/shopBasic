<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="tabs is-boxed is-centered main-menu">
        <ul>
          <router-link to="/catalog/add" active-class="has-background-success">
            <li>
              <span>Añadir Producto</span>
            </li>
          </router-link>
          <router-link
            active-class="has-background-success"
            to="/catalog/modify"
          >
            <li>
              <span>Modificar Producto</span>
            </li>
          </router-link>
          <router-link
            active-class="has-background-success"
            to="/catalog/remove"
          >
            <li>
              <span>Eliminar Producto</span>
            </li>
          </router-link>
        </ul>
      </div>
      <div class="tab-content">
        <div class="tab-pane">
          <router-view> </router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "CatalogPage",
};
</script>

<style>
</style>