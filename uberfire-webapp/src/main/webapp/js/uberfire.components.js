var app = angular.module('myapp', []);
var ids = new Array();
uberfireAsExternalLibrary = true;
var parameters = {};

app.directive('uberfire', function () {
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            screen: '@'
        },
        template:  "<div></div>",
        link: function (scope, elem, attrs) {
            callUF(attrs.id);
        }
    };
});

function callUF(_id, _screenName) {
    prepareUfData(_id, _screenName);
    waitForUF();
}

function prepareUfData(_id){
    ids.push(_id);
    var parameter = {};
    Array.prototype.slice.call(document.getElementById(_id).attributes).forEach(function(item) {
        parameter[item.name] = item.value;
    });
    parameters[_id] = parameter;
}

function waitForUF() {
    if (typeof $uf_load_component == 'function') {
        while (ids.length > 0) {
            var id = ids.pop();
            $uf_load_component(parameters[id])
        }
    }
    else {
        window.setTimeout(waitForUF, 1000);
    }
}


