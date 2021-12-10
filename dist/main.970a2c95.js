// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector('#demo');
var css = document.querySelector('#css');
var rella = document.querySelector('#rella');
console.log(rella);
var n = 0;
var str1 = '/*\n\u6B22\u8FCE\u6765\u8BBF\uFF0C\u4ECA\u5929\u4E5F\u662F\u65B0\u7684\u745E\u62C9\uFF01\n\u745E\u62C9\uFF0C\u539F\u540D\u7AEF\u5348\uFF0C\u4E0D\u77E5\u540D\u56DB\u5DDD\u7B80\u5DDE\u732B\u3002\u51FA\u751F\u5E74\u6708\u4E0D\u8BE6\uFF0C\u73B0\u7EA6\u4E00\u5C81\u534A\u3002\u8C03\u76AE\u6363\u86CB\uFF0C\u53C8\u806A\u660E\u654F\u6377\uFF0C\u662F\u4E00\u53EA\u4F1A\u9B54\u6CD5\u7684\u683C\u5170\u82AC\u591A\u5C0F\u732B\u3002\n*/\n';

var str2 = '/*\n\u73B0\u5728\u745E\u62C9\u8981\u5F00\u59CB\u8868\u6F14\u4E86\n\u706B\u7130\u718A\u718A Incedio\n*/\nbody{\n    color: red;\n}\n/*\n\u6025\u6025\u73B0\u5F62 Apareciym\n*/\n#yinyang {\n    width: 200px;\n    height: 200px;\n    border: 1px solid black;\n}\n/*\n\u901F\u901F\u53D8\u5706 Ronducio\n*/\n#yinyang {\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border: none;\n}\n/*\n\u516B\u5366\u73B0\u8EAB Yinyang Revelio\n*/\n#yinyang{\n    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);\n}\n#yinyang::before{\n    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);\n}\n#yinyang::after{\n    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%);\n}\n/*\n\u8C22\u8C22\u89C2\u770B\u745E\u62C9\u7684\u8868\u6F14\n*/\n';
// str = str.replace(/\n/g, '<br>')
var displayStr = '';
var imgPath = '<img src="./rella.png" alt="rella" width="20%">';
var str1Finished = false;

var step = function step(str1, str2) {
    setTimeout(function () {
        if (!str1Finished && n < str1.length) {
            if (str1[n] === '\n') {
                displayStr += '<br>';
            } else if (str1[n] === ' ') {
                displayStr += '&nbsp';
            } else {
                displayStr += str1[n];
            }

            html.innerHTML = displayStr;
            css.innerHTML = str1.substring(0, n + 1);
            window.scrollTo(0, 999999);
            html.scrollTo(0, 999999);
            n += 1;
            step(str1, str2);
        } else if (!str1Finished && n === str1.length) {
            rella.innerHTML = imgPath;
            n = 0;
            str1Finished = true;
            step(str1, str2);
        } else if (str1Finished && n < str2.length) {
            if (str2[n] === '\n') {
                displayStr += '<br>';
            } else if (str2[n] === ' ') {
                displayStr += '&nbsp';
            } else {
                displayStr += str2[n];
            }

            html.innerHTML = displayStr;
            css.innerHTML = str2.substring(0, n + 1);
            window.scrollTo(0, 999999);
            html.scrollTo(0, 999999);
            n += 1;
            step(str1, str2);
        }
    }, 50);
};

step(str1, str2);
// console.log(str1.length)
// setTimeout(() => step(str2), 50 * str1.length + 1000)

// displayStr = ''
// n = 0
// step(str2)
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.970a2c95.map