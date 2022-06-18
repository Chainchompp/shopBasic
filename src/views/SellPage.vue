<template>
  <section class="hero is-light">
    <div class="hero-body">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label"> DNI cliente</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="" />
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
                <button class="button">Buscar cliente</button>
              </p>
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
                  <th>Cód Producto</th>
                  <th>Cantidad</th>
                  <th>Precio Unit</th>
                  <th>Subtotal</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>cod</td>
                  <td>2</td>
                  <td>2.5</td>
                  <td>5</td>
                  <td>
                    <a class="button is-small is-primary">Modify</a>
                  </td>
                </tr>
                <tr>
                  <td>cod</td>
                  <td>4</td>
                  <td>2</td>
                  <td>8</td>
                  <td>
                    <a class="button is-small is-primary">Modify</a>
                  </td>
                </tr>
                <tr>
                  <td>cod</td>
                  <td>6</td>
                  <td>4</td>
                  <td>24</td>
                  <td>
                    <a class="button is-small is-primary">Modify</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control">
              <button class="button">Agregar Producto</button>
            </p>
          </div>
        </div>
      </div>
        <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control">
              <button class="button is-primary">Realizar venta</button>
            </p>
          </div>
        </div>
      </div>
      <div class="modal" :class="{ 'is-active': false }">
        <div class="modal-background" @click="showModal()"></div>
        <div class="modal-content">
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Agregar Producto</p>
            </header>
            <section class="modal-card-body">
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <input
                      class="input"
                      type="text"
                      placeholder="Código producto"
                    />
                  </p>
                </div>
              </div>
              <div class="field is-horizontal is-align-items-center mt-2">
                <div class="field-label">Cantidad</div>
                <div class="field-body">
                  <div class="field ">
                    <div class="field">
                      <p class="control">
                        <input class="input" type="number" placehorder="cantidad" min="1"/>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Precios</label>
                </div>
                <div class="field-body is-justify-content-space-around">
                  <div class="field">
                    <div class="has-text-centered">Precio</div>
                    <div class="control">
                      <input class="input" type="text" placeholder="" />
                    </div>
                  </div>
                  <div class="field">
                    <div class="has-text-centered">Cantidad</div>
                    <div class="control">
                      <input class="input" type="text" placeholder="" />
                    </div>
                  </div>
                  <div class="divider"></div>
                  <div class="field">
                    <div class="has-text-centered">Precio</div>
                    <div class="control">
                      <input class="input" type="text" placeholder="" />
                    </div>
                  </div>
                  <div class="field">
                    <div class="has-text-centered">Cantidad</div>
                    <div class="control">
                      <input class="input" type="text" placeholder="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label"></label>
                </div>
                <div class="field-body is-justify-content-space-around">
                  <div class="field">
                    <div class="has-text-centered">Precio</div>
                    <div class="control">
                      <input class="input" type="text" placeholder="" />
                    </div>
                  </div>
                  <div class="field">
                    <div class="has-text-centered">Cantidad</div>
                    <div class="control">
                      <input class="input" type="text" placeholder="" />
                    </div>
                  </div>
                  <div class="divider"></div>
                  <div class="field">
                    <div class="has-text-centered">Precio</div>
                    <div class="control">
                      <input class="input" type="text" placeholder="" />
                    </div>
                  </div>
                  <div class="field">
                    <div class="has-text-centered">Cantidad</div>
                    <div class="control">
                      <input class="input" type="text" placeholder="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal is-align-items-center mt-2">
                <div class="field-body">
                  Precio resultante : Precio
                </div>
              </div>
            </section>
            <footer class="modal-card-foot">
              <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="field has-addons">
                      <p class="control">
                        <button class="button is-primary">Agregar</button>
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
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>