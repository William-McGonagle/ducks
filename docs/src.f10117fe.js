// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"ducks/eyes/eyes1.svg":[function(require,module,exports) {
module.exports = "/ducks/eyes1.aa503ec1.svg";
},{}],"ducks/eyes/eyes2.svg":[function(require,module,exports) {
module.exports = "/ducks/eyes2.9c365986.svg";
},{}],"ducks/eyes/eyes3.svg":[function(require,module,exports) {
module.exports = "/ducks/eyes3.3fd3b2d5.svg";
},{}],"ducks/eyes/eyes4.svg":[function(require,module,exports) {
module.exports = "/ducks/eyes4.4d1e93b5.svg";
},{}],"ducks/items/item1.svg":[function(require,module,exports) {
module.exports = "/ducks/item1.69da640b.svg";
},{}],"ducks/items/item2.svg":[function(require,module,exports) {
module.exports = "/ducks/item2.07884622.svg";
},{}],"ducks/items/item3.svg":[function(require,module,exports) {
module.exports = "/ducks/item3.64e346ff.svg";
},{}],"ducks/smoke/smoke1.svg":[function(require,module,exports) {
module.exports = "/ducks/smoke1.a665ed0e.svg";
},{}],"ducks/smoke/smoke2.svg":[function(require,module,exports) {
module.exports = "/ducks/smoke2.5af98685.svg";
},{}],"ducks/smoke/smoke3.svg":[function(require,module,exports) {
module.exports = "/ducks/smoke3.cecb7b24.svg";
},{}],"ducks/smoke/smoke4.svg":[function(require,module,exports) {
module.exports = "/ducks/smoke4.b36bf37b.svg";
},{}],"ducks/smoke/smoke5.svg":[function(require,module,exports) {
module.exports = "/ducks/smoke5.d6151382.svg";
},{}],"ducks/smoke/smoke6.svg":[function(require,module,exports) {
module.exports = "/ducks/smoke6.460e5358.svg";
},{}],"ducks/smoke/smoke7.svg":[function(require,module,exports) {
module.exports = "/ducks/smoke7.8667227e.svg";
},{}],"ducks/hat/hat1.svg":[function(require,module,exports) {
module.exports = "/ducks/hat1.1f27417f.svg";
},{}],"ducks/hat/hat2.svg":[function(require,module,exports) {
module.exports = "/ducks/hat2.b7eb81f6.svg";
},{}],"ducks/hat/hat3.svg":[function(require,module,exports) {
module.exports = "/ducks/hat3.41ba2869.svg";
},{}],"ducks/hat/hat4.svg":[function(require,module,exports) {
module.exports = "/ducks/hat4.41639bdb.svg";
},{}],"ducks/hat/hat5.svg":[function(require,module,exports) {
module.exports = "/ducks/hat5.30f84c40.svg";
},{}],"ducks/hat/hat6.svg":[function(require,module,exports) {
module.exports = "/ducks/hat6.bc80172e.svg";
},{}],"ducks/hat/hat7.svg":[function(require,module,exports) {
module.exports = "/ducks/hat7.73bbd6cb.svg";
},{}],"ducks/hat/hat8.svg":[function(require,module,exports) {
module.exports = "/ducks/hat8.4428ef1d.svg";
},{}],"ducks/body/body1.svg":[function(require,module,exports) {
module.exports = "/ducks/body1.37e38147.svg";
},{}],"ducks/beak/beak1.svg":[function(require,module,exports) {
module.exports = "/ducks/beak1.002f8f75.svg";
},{}],"ducks/wing/wing1.svg":[function(require,module,exports) {
module.exports = "/ducks/wing1.1339d29d.svg";
},{}],"src/index.ts":[function(require,module,exports) {
var subheader = document.getElementById("subheader");
var svg = document.getElementById("duckSVG");
var eyeOptions = [require("../ducks/eyes/eyes1.svg"), require("../ducks/eyes/eyes2.svg"), require("../ducks/eyes/eyes3.svg"), require("../ducks/eyes/eyes4.svg")];
var itemOptions = [require("../ducks/items/item1.svg"), require("../ducks/items/item2.svg"), require("../ducks/items/item3.svg"), ""];
var smokeOptions = [require("../ducks/smoke/smoke1.svg"), require("../ducks/smoke/smoke2.svg"), require("../ducks/smoke/smoke3.svg"), require("../ducks/smoke/smoke4.svg"), require("../ducks/smoke/smoke5.svg"), require("../ducks/smoke/smoke6.svg"), require("../ducks/smoke/smoke7.svg"), ""];
var hatOptions = ["", require("../ducks/hat/hat1.svg"), require("../ducks/hat/hat2.svg"), require("../ducks/hat/hat3.svg"), require("../ducks/hat/hat4.svg"), require("../ducks/hat/hat5.svg"), require("../ducks/hat/hat6.svg"), require("../ducks/hat/hat7.svg"), require("../ducks/hat/hat8.svg")];

function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function addLayer(url) {
  var img = document.createElementNS("http://www.w3.org/2000/svg", "image");
  img.setAttribute('width', '200');
  img.setAttribute('height', '200');
  img.setAttribute('href', url);
  svg.appendChild(img);
}

function countDucks() {
  return eyeOptions.length * smokeOptions.length * itemOptions.length * hatOptions.length;
}

subheader.innerHTML = "Over " + countDucks() + " Ducks and Counting...";
addLayer(require("../ducks/body/body1.svg"));
addLayer(randomFromArray(eyeOptions));
addLayer(randomFromArray(smokeOptions));
addLayer(randomFromArray(hatOptions));
addLayer(randomFromArray(itemOptions));
addLayer(require("../ducks/beak/beak1.svg"));
addLayer(require("../ducks/wing/wing1.svg"));
},{"../ducks/eyes/eyes1.svg":"ducks/eyes/eyes1.svg","../ducks/eyes/eyes2.svg":"ducks/eyes/eyes2.svg","../ducks/eyes/eyes3.svg":"ducks/eyes/eyes3.svg","../ducks/eyes/eyes4.svg":"ducks/eyes/eyes4.svg","../ducks/items/item1.svg":"ducks/items/item1.svg","../ducks/items/item2.svg":"ducks/items/item2.svg","../ducks/items/item3.svg":"ducks/items/item3.svg","../ducks/smoke/smoke1.svg":"ducks/smoke/smoke1.svg","../ducks/smoke/smoke2.svg":"ducks/smoke/smoke2.svg","../ducks/smoke/smoke3.svg":"ducks/smoke/smoke3.svg","../ducks/smoke/smoke4.svg":"ducks/smoke/smoke4.svg","../ducks/smoke/smoke5.svg":"ducks/smoke/smoke5.svg","../ducks/smoke/smoke6.svg":"ducks/smoke/smoke6.svg","../ducks/smoke/smoke7.svg":"ducks/smoke/smoke7.svg","../ducks/hat/hat1.svg":"ducks/hat/hat1.svg","../ducks/hat/hat2.svg":"ducks/hat/hat2.svg","../ducks/hat/hat3.svg":"ducks/hat/hat3.svg","../ducks/hat/hat4.svg":"ducks/hat/hat4.svg","../ducks/hat/hat5.svg":"ducks/hat/hat5.svg","../ducks/hat/hat6.svg":"ducks/hat/hat6.svg","../ducks/hat/hat7.svg":"ducks/hat/hat7.svg","../ducks/hat/hat8.svg":"ducks/hat/hat8.svg","../ducks/body/body1.svg":"ducks/body/body1.svg","../ducks/beak/beak1.svg":"ducks/beak/beak1.svg","../ducks/wing/wing1.svg":"ducks/wing/wing1.svg"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58324" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/ducks/src.f10117fe.js.map