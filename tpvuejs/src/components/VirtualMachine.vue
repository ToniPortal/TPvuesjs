<template>
  <div class="card-body">
    <div class="card-columns">
      <div class="card bg-light">
        <div class="card-header">
          <div class="form-inline">
            <label>VM {{ msg }}</label>
            <button class="btn x-square-fill ml-auto" type="button"  @click="remove()">X</button>
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
      vmemoire: 0
    };
  },
  mounted() {
    console.log("Meire: " + this.vmemoire)
    //this.memoire = this.store.liste[this.msg].memoire;
    //console.log("Store mem: " + this.store.liste[this.msg]["memoire"])
    if(this.store.liste[this.msg] != undefined){

    console.log("Store Mem = ",this.store.liste[this.msg].id)

    }
  },
  watch: {
    changeinfo() {

      this.store.liste[this.msg].memoire = this.memoire;

    },
  },
  /*
  methods: {
    remove() {
      
      console.log("remove" + this.nbvm.number)
      this.nbvm.number--;
      
    }
  }*/

};
</script>