window.onload = function () {

    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue',
            class1: 'red',
            class2: 'blue',
            seen: true
        }
    })

    app.class = 'new message'

};
