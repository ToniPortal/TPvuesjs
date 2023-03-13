<template>
  <div>
      <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <span class="navbar-brand">VIE-IE-ED</span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
                  <router-link to="/">Home</router-link> |
            </li>
            <li class="nav-item">
                  <router-link to="/import">Import</router-link> |
            </li>
            <li class="nav-item">
                  <router-link to="/export">Export</router-link> |
            </li>
          </ul>
        </div>
      </nav>

  <router-view/>
    </div>
</template>

<style>
* {
  overflow-x: hidden;
}
</style>