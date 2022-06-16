<template>
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
    <div class="field-label is-normal">
      <label class="label">Descripción</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Descripción" />
        </p>
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
            <select>
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
    <div class="field-label">
      <!-- Left empty for spacing -->
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <button class="button">Agregar característica</button>
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
    <div class="field-label">
      <!-- Left empty for spacing -->
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <button class="button">Agregar precio</button>
        </div>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label">
      <!-- Left empty for spacing -->
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <button class="button is-primary">Modificar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCatalog",
};
</script>


<style scoped>
.divider {
  width: 2px;
  margin: 6px 0.75rem 6px 0px;
  background: grey ;
}
</style>
