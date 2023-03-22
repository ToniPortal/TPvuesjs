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
            v-model="nbvm.number"
          />
          <p>Il reste {{ nbvm.number }} VM</p>
        </div>
      </form>
    </div>

    <div id="vmapp" v-bind:key="i" v-for="i in nbvm.number">
      <VirtualMachine v-bind:msg="i"> </VirtualMachine>
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
      nbvm: datas
    };
  },
  
};
</script>