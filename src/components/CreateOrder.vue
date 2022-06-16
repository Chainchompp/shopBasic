<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Código Orden</label>
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
      <label class="label">Comprador</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Comprador" />
        </p>
      </div>
    </div>
  </div>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Código Proveedor</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Proveedor" />
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
            <button class="button is-primary">Buscar proveedor</button>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Contacto</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Contacto" />
        </div>
      </div>
    </div>
  </div>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Productos</label>
    </div>
    <div class="field-body">
      <div class="field">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>Cód Prod</th>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Precio Unit</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>1</th>
              <td>38</td>
              <td>38</td>
              <td>23</td>
              <td>12</td>
              <td>
                <a class="button is-small is-primary">Modify</a>
                <a class="button is-small is-danger">Delete</a>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>38</td>
              <td>12</td>
              <td>38</td>
              <td>23</td>
              <td>
                <a class="button is-small is-primary">Modify</a>
                <a class="button is-small is-danger">Delete</a>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>38</td>
              <td>38</td>
              <td>12</td>
              <td>23</td>
              <td>
                <a class="button is-small is-primary">Modify</a>
                <a class="button is-small is-danger">Delete</a>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>38</td>
              <td>38</td>
              <td>23</td>
              <td>12</td>
              <td>
                <a class="button is-small is-primary">Modify</a>
                <a class="button is-small is-danger">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="field is-horizontal">
    <div class="field-label"></div>
    <div class="field-body">
      <div class="field is-expanded">
        <div class="field has-addons">
          <p class="control">
            <button class="button is-primary">Agregar producto</button>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Inf. de Emisión</label>
    </div>
    <div class="field-body is-justify-content-space-around">
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Fecha emisión" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Sede emisión" />
        </div>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Inf. de Entrega</label>
    </div>
    <div class="field-body is-justify-content-space-around">
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Forma de entrega" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Condición de Pago" />
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
          <button class="button is-primary">Crear Orden</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateOrder",
};
</script>

<style>
</style>