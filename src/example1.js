var avalon = require('avalon2')
require('../dist/mmRouter')

var vm = avalon.define({
    $id: 'test',
    currPath: ''
})
avalon.router.add("/aaa", function (a) {
	alert(JSON.stringify(this.query))
    vm.currPath = this.path
})
avalon.router.add("/bbb", function (a) {
    vm.currPath = this.path
})
avalon.router.add("/ccc", function (a) {
    vm.currPath = this.path
})
avalon.router.add("/ddd/:ddd/:eee", function (a) {//:ddd为参数
    vm.currPath = this.path
})

avalon.history.start({
    root: "/mmRouter"
})
avalon.scan(document.body)