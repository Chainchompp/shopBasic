<template>
  <section class="hero is-light">
    <div class="hero-body">
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
          <label class="label">Filtrar Nombre Cliente</label>
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
                <button class="button">Buscar pedidos</button>
              </p>
            </div>
          </div>
        </div>
      </div>

<div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Elegir rango fecha</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="date" placeholder="Fecha Inicio" />
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="date" placeholder="Fecha Final" />
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body is-normal">
          <div class="field has-addons">
            <div class="control">
              <div class="select is-normal">
                <select>
                  <option>Todos</option>
                  <option>Entrega Domicilio</option>
                  <option>Recojo en Tienda</option>
                  <option>Despacho en Tienda</option>
                </select>
              </div>
            </div>
          </div>
          <div
            class="field is-flex is-flex-direction-row is-align-items-center"
          >
            <div class="control">Cantidad entradas:</div>
            <div class="control">
              <div class="select is-normal">
                <select>
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
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
            <nav class="pagination" role="navigation" aria-label="pagination">
              <a class="pagination-previous">Previous</a>
              <a class="pagination-next">Next page</a>
              <ul class="pagination-list">
                <li>
                  <a class="pagination-link" aria-label="Goto page 1">1</a>
                </li>
                <li>
                  <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 45">45</a>
                </li>
                <li>
                  <a
                    class="pagination-link is-current"
                    aria-label="Page 46"
                    aria-current="page"
                    >46</a
                  >
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 47">47</a>
                </li>
                <li>
                  <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 86">86</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="modal" :class="{ 'is-active': isModalActive }">
          <div class="modal-background" @click="showModal()"></div>
          <div class="modal-content">
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Pedido: Cod</p>
              </header>
              <section class="modal-card-body">
                <p class="modal-card-body">Cliente: Carlos Merino</p>
                <p class="modal-card-body">Detalles de pedido:</p>
                <p class="modal-card-body">Monto: S/.100</p>
                <p class="modal-card-body">Tipo: Despacho en tienda</p>
                <p class="modal-card-body">Estado: Pendiente</p>
              </section>
              <footer class="modal-card-foot">
                <div class="field-body">
                  <div class="field">
                    <p class="control is-expanded">
                      <input
                        class="input"
                        type="text"
                        placeholder="Código confirmación"
                      />
                    </p>
                  </div>
                </div>
                <div class="field is-horizontal">
                  <div class="field-label"></div>
                  <div class="field-body">
                    <div class="field is-expanded">
                      <div class="field has-addons">
                        <p class="control">
                          <button class="button is-primary">
                            Confirmar pedido
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          <button
            class="modal-close is-large"
            aria-label="close"
            @click="showModal()"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      isModalActive: false,
    };
  },
  methods: {
    showModal() {
      this.isModalActive = !this.isModalActive;
    },
  },
};
</script>

<style>
</style>