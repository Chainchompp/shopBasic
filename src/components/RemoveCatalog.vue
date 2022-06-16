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
    <div class="field-label"></div>
    <div class="field-body">
      <div class="field is-expanded">
        <div class="field has-addons">
          <p class="control">
            <button class="button is-primary">Buscar Productos</button>
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
          <input disabled
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
    <div class="field-label">
      <!-- Left empty for spacing -->
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <button class="button is-primary">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RemoveCatalog",
};
</script>

<style>
</style>