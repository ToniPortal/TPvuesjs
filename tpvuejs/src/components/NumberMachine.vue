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
          <p>Il reste {{ data.number }} VM</p>
        </div>
      </form>
    </div>
    <div class="card-body">
      <div class="card-columns">
        <div id="vmapp" v-bind:key="i" v-for="i in this.data.number">
          <VirtualMachine v-bind:msg="i"> </VirtualMachine>
        </div>
      </div>
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
      inputonstart: 0,
    };
  },
  mounted() {
    console.log("[Store] Inside :", this.data);
    this.inputnumber = this.data.number;
    this.inputonstart = this.data.number
  },
  watch: {
    inputnumber() {
      this.vmpaf();

      this.data.number = this.inputnumber;
      // console.log("Inputenumber: " + this.inputnumber);
    },
  },
  methods: {
    vmpaf() {
      if (this.data.liste.length == 0) {
        console.log("Reset Data : ", this.data.liste);
        this.data.liste = [];

        for (let i = 0; i < this.inputnumber + 1; i++) {
          this.data.liste.push({
            id: this.data.liste.length,
            memoire: "MEMOIREVIDE",
          });
          // console.log("I:" + i);
        }
      }

     else {
        console.log("Add data : ", this.data.liste);

        for (let i = this.inputonstart; i < this.inputnumber + 1; i++) {
          this.data.liste.push({
            id: this.data.liste.length,
            memoire: "MEMOIREVIDE",
          });
        }
      }

    },
  },
};
</script>