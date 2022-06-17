<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Código Pedido</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Código Pedido" />
        </p>
      </div>
    </div>
  </div>
  <div class="field is-horizontal">
    <div class="field-label"></div>
    <div class="field-body">
      <div class="field is-expanded">
        <div class="field has-addons">
          <p class="control">
            <button class="button is-primary">Buscar pedido</button>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <div class="field has-addons">
        <p class="control">
          <button class="button is-primary">Todos</button>
        </p>
      </div>
      <div class="field has-addons">
        <p class="control">
          <button class="button is-primary">Despacho tienda</button>
        </p>
      </div>
      <div class="field has-addons">
        <p class="control">
          <button class="button is-primary">Entrega Domicilio</button>
        </p>
      </div>
      <div class="field has-addons">
        <p class="control">
          <button class="button is-primary">En tienda</button>
        </p>
      </div>
    </div>
    <div class="field-body">
      <div class="field">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>Cód Ped</th>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Estado</th>
              <th>Tipo</th>
              <th>Monto</th>
            </tr>
          </thead>

          <tbody>
            <tr @click="showModal()">
              <td>cod</td>
              <td>fecha</td>
              <td>nombre</td>
              <td>realizado</td>
              <td>tienda</td>
              <td>100</td>
            </tr>
            <tr @click="showModal()">
              <td>cod</td>
              <td>fecha</td>
              <td>nombre</td>
              <td>pendiente</td>
              <td>entrega</td>
              <td>200</td>
            </tr>
            <tr @click="showModal()">
              <td>cod</td>
              <td>fecha</td>
              <td>nombre</td>
              <td>programado</td>
              <td>despacho</td>
              <td>100</td>
            </tr>
            <tr @click="showModal()">
              <td>cod</td>
              <td>fecha</td>
              <td>nombre</td>
              <td>enviado</td>
              <td>despacho</td>
              <td>300</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="modal" :class="{'is-active': isModalActive}">
      <div class="modal-background" @click="showModal()"></div>
      <div class="modal-content">


        <div class="modal-card">
          <header class="modal-card-head">
              <p class="modal-card-title">Pedido: Cod</p>
          </header>
          <section class="modal-card-body">
              <p class="modal-card-body">Pedido: Cod</p>
              <p class="modal-card-body">Tipo: Despacho en tienda</p>
              <p class="modal-card-body">Estado: Pendiente</p>
          </section>
          <footer class="modal-card-foot">
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded">
                  <input disabled class="input" type="text" placeholder="Código confirmación" />
                </p>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label"></div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="field has-addons">
                    <p class="control">
                      <button class="button is-primary">Confirmar pedido</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

      </div>
      <button class="modal-close is-large" aria-label="close" @click="showModal()"></button>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return{
      isModalActive : false
    }
  },
  methods:{
    showModal(){
      this.isModalActive = !this.isModalActive
    }
  }
}
</script>

<style>

</style>