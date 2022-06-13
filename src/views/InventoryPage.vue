<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="tabs is-boxed is-centered main-menu">
        <ul>
          <router-link to="/inventory/create" active-class="has-background-success">
            <li>
              <span>Orden de compra</span>
            </li>
          </router-link>
          <router-link
            active-class="has-background-success"
            to="/inventory/confirm"
          >
            <li>
              <span>Confirmar entregas</span>
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
name: "InventoryPage"
}
</script>

<style>

</style>