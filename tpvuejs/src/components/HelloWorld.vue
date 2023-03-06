<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <div class="row">
        <div class="col mt-3">
          <div class="card">
            <div class="card-header">Configuration Globale</div>
            <div class="card-body">
              <div class="form-row">
                <label for="inputName">Nom</label>
                <input type="text" class="form-control" id="inputName" />
              </div>
              <div class="form-row">
                <label for="inputDescription">Description</label>
                <textarea
                  class="form-control"
                  id="inputDescription"
                  rows="3"
                ></textarea>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputTemplateID">ID du Template</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputTemplateID"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputHostnameTemplate"
                    >Nom d'hôte du Template</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputHostnameTemplate"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="inputMemory">Memoire</label>
                  <input type="text" class="form-control" id="inputMemory" />
                </div>
                <div class="form-group col-md-3">
                  <label for="inputDisksize">Taille du HDD</label>
                  <input type="text" class="form-control" id="inputDisksize" />
                </div>
                <div class="form-group col-md-3">
                  <label for="inputCore">Coeur</label>
                  <input type="text" class="form-control" id="inputCore" />
                </div>
                <div class="form-group col-md-3">
                  <label for="inputSocket">Socket</label>
                  <input type="text" class="form-control" id="inputSocket" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputLogin">Login</label>
                  <input type="text" class="form-control" id="inputLogin" />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword">Mot de passe</label>
                  <input type="text" class="form-control" id="inputPassword" />
                </div>
              </div>

              <div class="form-row">
                <label for="inputSSHKey">Clé SSH</label>
                <textarea
                  class="form-control"
                  id="inputSSHKey"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-3">
        <div class="card-header">
          <form class="form-inline">
            <div class="form-group mb-2">
              <label for="inputNumberOfVM">Machines Virtuelles</label>
            </div>
            <div class="form-group mx-sm-3 mb-2">
              <input
                type="text"
                class="form-control"
                id="inputNumberOfVM"
                placeholder="Nombre de VM"
              />
            </div>
          </form>
        </div>
        <div class="card-body">
          <div class="card-columns">
            <div class="card bg-light">
              <div class="card-header">
                <div class="form-inline">
                  <label>VM 1</label>
                  <button
                    class="btn x-square-fill ml-auto"
                    type="button"
                  ></button>
                </div>
              </div>
              <div class="card-body">
                <div class="form-group">
                  <label for="inputName">Mémoire</label>
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
                <div class="form-row">
                  <label for="inputEmail3">New Parameter</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option disabled>Mémoire</option>
                    <option>Taille HDD</option>
                    <option>Coeur</option>
                    <option>Socket</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="card bg-light">
              <div class="card-header">
                <div class="form-inline">
                  <label>VM 2</label>
                  <button
                    class="btn x-square-fill ml-auto"
                    type="button"
                  ></button>
                </div>
              </div>
              <div class="card-body">
                <div class="form-group">
                  <label for="inputName">Mémoire</label>
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
                <div class="form-row">
                  <label for="inputEmail3">Nouveau Paramètre</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option disabled>Mémoire</option>
                    <option>Taille HDD</option>
                    <option>Coeur</option>
                    <option>Socket</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

