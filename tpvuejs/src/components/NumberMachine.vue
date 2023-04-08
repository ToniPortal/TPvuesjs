<template>
  <div class="card mt-3">
    <div class="card-header">
      <form class="form-inline">
        <div class="form-group mb-2">
          <label for="inputNumberOfVM">Machines Virtuelles</label>
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <input
            type="number"
            class="form-control"
            id="inputNumberOfVM"
            placeholder="Nombre de VM"
            v-model="inputnumber"
          />
          <p>Il reste {{ inputnumber }} VM</p>
        </div>
      </form>
    </div>

    <div id="vmapp" v-for="i in data.liste" :key="data.liste[i]">
      <VirtualMachine> </VirtualMachine>
    </div>
  </div>
</template>

<script>
import VirtualMachine from "@/components/VirtualMachine.vue";

import { datas } from "../store.js";

export default {
  name: "NumberMachine",
  components: {
    VirtualMachine,
  },
  data() {
    return {
      data: datas,
      nbvm: datas.number,
      inputnumber: 0,
    };
  },
  watch: {
    inputnumber() {
      this.vmpush();

      this.data.number = this.inputnumber;
    },
  },
  methods: {
    vmpush() {
      this.data.liste = [];

      for (let i = 0; i < this.inputnumber; i++) {
        console.log(i);
      }
    },
  },
};
</script>