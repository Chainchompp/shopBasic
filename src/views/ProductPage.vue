<template>
  <section class="hero is-light">
    <div class="hero-body">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Código Producto</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Código" />
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
                <button class="button is-primary">
                  Buscar Producto por Código
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Descripción</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control is-expanded">
              <div class="dropdown" :class="{'is-active': false}">
                <div class="dropdown-trigger">
                  <input class="input" type="text" placeholder="Descripción" />
                </div>
                <div class="dropdown-menu">
                  <div class="dropdown-content">
                    <a class="dropdown-item">Item 1 </a>
                    <a class="dropdown-item">Item 2</a>
                    <a class="dropdown-item">Item 3</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <button class="button is-primary">
                  Buscar Producto por Descripción
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Marca</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <select disabled>
                  <option>Primor</option>
                  <option>Arcor</option>
                  <option>Mazola</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">SKU</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder=""
                value="Aceite primor"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Características</label>
        </div>
        <div class="field-body">
          <div class="field">
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
        <div class="field-body">
          <div class="field">
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
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Categoría" />
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
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Stock</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Stock en sede" />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Disponible" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>