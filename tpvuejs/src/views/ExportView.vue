<template>
  <div class="export">
    <div class="container-fluid">
      <div class="row">
        <div class="col mt-3">
          <div class="card">
            <div class="card-header">
              <form class="form-inline">
                <div class="form-group mb-2">
                  <label for="inputExport">Export</label>
                </div>
                <div class="form-group ml-2 mb-2">
                  <button
                    class="btn btn-outline-primary"
                    type="button"
                    @click="exportjson()"
                  >
                    JSON
                  </button>
                </div>
              </form>
            </div>
            <div class="card-body">
              <textarea
                class="form-control"
                id="inputExport"
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
// EXPORT
import { datas } from "../store.js";

export default {
  name: "ExportView",
  data() {
    return {
      datae: datas,
      textjson: datas.export,
    };
  },
  methods: {
    exportjson() {
      this.textjson = `[
        ${JSON.stringify({memoire: this.datae.memoire,})},
        ${JSON.stringify({ hdd: this.datae.hdd,})},
        ${JSON.stringify({coeur: this.datae.coeur,})},
        ${JSON.stringify({ socket: this.datae.socket })}\n]`;

    },
  },
};
</script>