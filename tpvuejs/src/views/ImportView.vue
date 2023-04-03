<template>
  <div class="import">
    <div class="container-fluid">
      <div class="row">
        <div class="col mt-3">
          <div class="card">
            <div class="card-header">
              <form class="form-inline">
                <div class="form-group mb-2">
                  <label for="inputImport">Import</label>
                </div>
                <div class="form-group ml-2 mb-2">
                  <button
                    class="btn btn-outline-primary"
                    type="button"
                    @click="importjson()"
                  >
                    JSON
                  </button>
                </div>
              </form>
            </div>
            <div class="card-body">
              <textarea
                class="form-control"
                id="inputInport"
                rows="25"
                v-model="textjson"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { datas } from "../store.js";

export default {
  name: "ImportView",
  data() {
    return {
      store: datas,
      textjson: datas.import,
    };
  },
  methods: {
    importjson() {
      datas.import.push(JSON.stringify(this.textjson));
      console.log("importJson effectuer : \n" + this.textjson);
      console.log(datas.import);
    },
  },
};
</script>