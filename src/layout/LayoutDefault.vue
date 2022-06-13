<template>
  <section class="section">
    <section class="container">
      <div class="columns">
        <div class="column is-3">
          <aside class="menu">
            <ul class="menu-list">
              <li>
                <router-link to="/home">Home</router-link>
              </li>
              <li>
                <router-link to="/home">Dashboards</router-link>
              </li>
              <li>
                <router-link :to="{ path: '/catalog' }"
                  >Modificar cátalogo</router-link
                >

                <ul>
                  <li>
                    <router-link :to="{ path: '/catalog/modify' }"
                      >Modificar Producto</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ path: '/catalog/remove' }"
                      >Eliminar Producto</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ path: '/catalog/add' }"
                      >Añadir Producto</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <router-link :to="{ path: '/inventory' }"> Gestionar Inventario</router-link>
                <ul>
                  <li>
                    <router-link  :to="{ path: '/inventory/create' }">
                      Orden de compra</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ path: '/inventory/confirm' }">
                      Confirmar Entregas</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/"> Productos</router-link>
              </li>
              <li>
                <router-link to="/"> Realizar Venta</router-link>
              </li>
              <li>
                <router-link to="/"> Pedidos</router-link>
              </li>
            </ul>
          </aside>
        </div>
        <div class="column is-9">
          <slot></slot>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "LayoutDefault",
};
</script>

<style>
</style>