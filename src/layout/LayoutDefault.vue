<template>
  <section class="section">
    <section class="container">
      <div class="columns">
        <div class="column is-3">
          <aside class="menu">
            <ul class="menu-list">
              <li>
                <router-link replace to="/home">Home</router-link>
              </li>
              <li>
                <router-link replace to="/home">Dashboards</router-link>
              </li>
              <li>
                <router-link replace :to="{ path: '/catalog' }"
                  >Modificar cátalogo</router-link
                >

                <ul>
                  <li>
                    <router-link replace :to="{ path: '/catalog/modify' }"
                      >Modificar Producto</router-link
                    >
                  </li>
                  <li>
                    <router-link replace :to="{ path: '/catalog/remove' }"
                      >Eliminar Producto</router-link
                    >
                  </li>
                  <li>
                    <router-link replace :to="{ path: '/catalog/add' }"
                      >Añadir Producto</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <router-link replace :to="{ path: '/inventory' , name: 'inventory' }"> Gestionar Inventario</router-link>
                <ul>
                  <li>
                    <router-link replace  :to="{ path: '/inventory/create' }">
                      Orden de compra</router-link
                    >
                  </li>
                  <li>
                    <router-link replace :to="{ path: '/inventory/confirm' }">
                      Confirmar Entregas</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <router-link replace to="/products"> Productos</router-link>
              </li>
              <li>
                <router-link replace to="/sell"> Realizar Venta</router-link>
              </li>
              <li>
                <router-link replace to="/orders"> Pedidos</router-link>
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