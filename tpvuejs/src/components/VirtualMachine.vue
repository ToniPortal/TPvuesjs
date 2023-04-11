<template>
  <div class="card bg-light">
    <div class="card-header">
      <div class="form-inline">
        <label>VM {{ msg }}</label>
        <button
          class="btn x-square-fill ml-auto"
          type="button"
          @click="remover()"
        >
          X
        </button>
      </div>
    </div>
    <div class="card-body">
      <div class="form-row">
        <label for="inputEmail3">New Parameter</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option disabled>Mémoire</option>
          <option>Taille HDD</option>
          <option>Coeur</option>
          <option>Socket</option>
        </select>
      </div>
      <div class="form-group">
        <label for="inputName">Mémoire</label>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Exemple de texte avec un bouton Addon"
            aria-describedby="button-addon1"
            v-model="vmemoire"
          />
          <div class="input-group-prepend">
            <button class="btn trash-fill" type="button"></button>
          </div>
        </div>

        <label for="inputName">HDD</label>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Exemple de texte avec un bouton Addon"
            aria-describedby="button-addon1"
          />
          <div class="input-group-prepend">
            <button class="btn trash-fill" type="button"></button>
          </div>
        </div>

        <label for="inputName">Coeur</label>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Exemple de texte avec un bouton Addon"
            aria-describedby="button-addon1"
          />
          <div class="input-group-prepend">
            <button class="btn trash-fill" type="button"></button>
          </div>
        </div>

        <label for="inputName">Socket</label>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Exemple de texte avec un bouton Addon"
            aria-describedby="button-addon1"
          />
          <div class="input-group-prepend">
            <button class="btn trash-fill" type="button"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { datas } from "../store.js";

export default {
  name: "VirtualMachine",
  props: {
    msg: Number,
  },
  data() {
    return {
      store: datas,
      vmemoire: 0,
    };
  },
  mounted() {
    if (this.store.liste[this.msg] != undefined) {
      console.log("[Monted] ; DATA = ", this.store.liste[this.msg]);
      console.log("[Monted] ; Store id = ", this.store.liste[this.msg].id);
      console.log(
        "[Monted] ; memoire data = ",
        this.store.liste[this.msg].memoire
      );
      this.vmemoire = this.store.liste[this.msg].memoire;
    }
  },
  watch: {
    vmemoire() {
      // console.log("[Watch] ; Vmemoire", this.vmemoire);

      this.store.liste[this.msg].memoire = this.vmemoire;

      console.log("[Watch] ; Enregistre:", this.store.liste[this.msg].memoire);
    },
  },
  methods: {
    remover() {
      console.log("[Methods] ; Remove", this.msg);

      for (var i = 0; i < this.store.liste.length; i++) {
        console.log(this.store.liste[i]);
        console.log(this.msg);
        if (this.store.liste[i].id === this.msg) {
          console.log("Remove For");
          this.store.liste.splice(i, 1);
          this.store.number--;
        }
      }

      console.log("[Methods] StoreafeterRemove :", this.store);
      
    },
  },
};
</script>