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
})({"dist/styles.cbb799b3.3f8bb624.f6484bd1.dc50cfac.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "P17U": [function (require, module, exports) {
    var define;
    var global = arguments[3];
    var e,
        r = arguments[3];

    function t(e) {
      return (t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    parcelRequire = function (r, n, o, i) {
      var a,
          c = "function" == typeof parcelRequire && parcelRequire,
          l = "function" == typeof require && require;

      function u(e, t) {
        if (!n[e]) {
          if (!r[e]) {
            var o = "function" == typeof parcelRequire && parcelRequire;
            if (!t && o) return o(e, !0);
            if (c) return c(e, !0);
            if (l && "string" == typeof e) return l(e);
            var i = new Error("Cannot find module '" + e + "'");
            throw i.code = "MODULE_NOT_FOUND", i;
          }

          s.resolve = function (t) {
            return r[e][1][t] || t;
          }, s.cache = {};
          var a = n[e] = new u.Module(e);
          r[e][0].call(a.exports, s, a, a.exports, this);
        }

        return n[e].exports;

        function s(e) {
          return u(s.resolve(e));
        }
      }

      u.isParcelRequire = !0, u.Module = function (e) {
        this.id = e, this.bundle = u, this.exports = {};
      }, u.modules = r, u.cache = n, u.parent = c, u.register = function (e, t) {
        r[e] = [function (e, r) {
          r.exports = t;
        }, {}];
      };

      for (var s = 0; s < o.length; s++) {
        try {
          u(o[s]);
        } catch (f) {
          a || (a = f);
        }
      }

      if (o.length) {
        var p = u(o[o.length - 1]);
        "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? module.exports = p : "function" == typeof e && e.amd && e(function () {
          return p;
        });
      }

      if (parcelRequire = u, a) throw a;
      return u;
    }({
      "dist/styles.cbb799b3.3f8bb624.js": [function (e, r, t) {
        function n(e) {
          return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
            return _typeof(e);
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
          })(e);
        }

        parcelRequire = function (o, i, a, c) {
          var l,
              u = "function" == typeof parcelRequire && parcelRequire,
              s = "function" == typeof e && e;

          function p(e, r) {
            if (!i[e]) {
              if (!o[e]) {
                var t = "function" == typeof parcelRequire && parcelRequire;
                if (!r && t) return t(e, !0);
                if (u) return u(e, !0);
                if (s && "string" == typeof e) return s(e);
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND", n;
              }

              c.resolve = function (r) {
                return o[e][1][r] || r;
              }, c.cache = {};
              var a = i[e] = new p.Module(e);
              o[e][0].call(a.exports, c, a, a.exports, this);
            }

            return i[e].exports;

            function c(e) {
              return p(c.resolve(e));
            }
          }

          p.isParcelRequire = !0, p.Module = function (e) {
            this.id = e, this.bundle = p, this.exports = {};
          }, p.modules = o, p.cache = i, p.parent = u, p.register = function (e, r) {
            o[e] = [function (e, t) {
              t.exports = r;
            }, {}];
          };

          for (var f = 0; f < a.length; f++) {
            try {
              p(a[f]);
            } catch (o) {
              l || (l = o);
            }
          }

          if (a.length) {
            var d = p(a[a.length - 1]);
            "object" == (void 0 === t ? "undefined" : n(t)) && void 0 !== r && (r.exports = d);
          }

          if (parcelRequire = p, l) throw l;
          return p;
        }({
          RoGL: [function (e, r, t) {
            arguments[3], arguments[3];

            function o(e) {
              return (o = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function (e) {
                return n(e);
              } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e);
              })(e);
            }

            parcelRequire = function (n, i, a, c) {
              var l,
                  u = "function" == typeof parcelRequire && parcelRequire,
                  s = "function" == typeof e && e;

              function p(e, r) {
                if (!i[e]) {
                  if (!n[e]) {
                    var t = "function" == typeof parcelRequire && parcelRequire;
                    if (!r && t) return t(e, !0);
                    if (u) return u(e, !0);
                    if (s && "string" == typeof e) return s(e);
                    var o = new Error("Cannot find module '" + e + "'");
                    throw o.code = "MODULE_NOT_FOUND", o;
                  }

                  c.resolve = function (r) {
                    return n[e][1][r] || r;
                  }, c.cache = {};
                  var a = i[e] = new p.Module(e);
                  n[e][0].call(a.exports, c, a, a.exports, this);
                }

                return i[e].exports;

                function c(e) {
                  return p(c.resolve(e));
                }
              }

              p.isParcelRequire = !0, p.Module = function (e) {
                this.id = e, this.bundle = p, this.exports = {};
              }, p.modules = n, p.cache = i, p.parent = u, p.register = function (e, r) {
                n[e] = [function (e, t) {
                  t.exports = r;
                }, {}];
              };

              for (var f = 0; f < a.length; f++) {
                try {
                  p(a[f]);
                } catch (h) {
                  l || (l = h);
                }
              }

              if (a.length) {
                var d = p(a[a.length - 1]);
                "object" === (void 0 === t ? "undefined" : o(t)) && void 0 !== r && (r.exports = d);
              }

              if (parcelRequire = p, l) throw l;
              return p;
            }({
              "node_modules/parcel-bundler/src/builtins/bundle-url.js": [function (e, r, t) {
                var n = null;

                function o(e) {
                  return ("" + e).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, "$1") + "/";
                }

                t.getBundleURL = function () {
                  return n || (n = function () {
                    try {
                      throw new Error();
                    } catch (r) {
                      var e = ("" + r.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
                      if (e) return o(e[0]);
                    }

                    return "/";
                  }()), n;
                }, t.getBaseURL = o;
              }, {}],
              "node_modules/parcel-bundler/src/builtins/css-loader.js": [function (e, r, t) {
                var n = e("./bundle-url");

                function o(e) {
                  var r = e.cloneNode();
                  r.onload = function () {
                    e.remove();
                  }, r.href = e.href.split("?")[0] + "?" + Date.now(), e.parentNode.insertBefore(r, e.nextSibling);
                }

                var i = null;

                r.exports = function () {
                  i || (i = setTimeout(function () {
                    for (var e = document.querySelectorAll('link[rel="stylesheet"]'), r = 0; r < e.length; r++) {
                      n.getBaseURL(e[r].href) === n.getBundleURL() && o(e[r]);
                    }

                    i = null;
                  }, 50));
                };
              }, {
                "./bundle-url": "node_modules/parcel-bundler/src/builtins/bundle-url.js"
              }],
              "src/scss/styles.scss": [function (e, r, t) {
                var n = e("_css_loader");
                r.hot.dispose(n), r.hot.accept(n);
              }, {
                _css_loader: "node_modules/parcel-bundler/src/builtins/css-loader.js"
              }],
              "node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [function (e, r, t) {
                var n,
                    o,
                    i = arguments[3],
                    a = "__parcel__error__overlay__",
                    c = r.bundle.Module;

                r.bundle.Module = function (e) {
                  c.call(this, e), this.hot = {
                    data: r.bundle.hotData,
                    _acceptCallbacks: [],
                    _disposeCallbacks: [],
                    accept: function accept(e) {
                      this._acceptCallbacks.push(e || function () {});
                    },
                    dispose: function dispose(e) {
                      this._disposeCallbacks.push(e);
                    }
                  }, r.bundle.hotData = null;
                };

                var l = r.bundle.parent;

                if (!(l && l.isParcelRequire || "undefined" == typeof WebSocket)) {
                  var u = location.hostname,
                      s = "https:" === location.protocol ? "wss" : "ws",
                      p = new WebSocket(s + "://" + u + ":58181/");

                  p.onmessage = function (e) {
                    n = {}, o = [];
                    var r = JSON.parse(e.data);

                    if ("update" === r.type) {
                      var t = !1;
                      r.assets.forEach(function (e) {
                        e.isNew || function e(r, t) {
                          var a = r.modules;

                          if (a) {
                            if (!a[t] && r.parent) return e(r.parent, t);

                            if (!n[t]) {
                              n[t] = !0;
                              var c = r.cache[t];
                              return o.push([r, t]), !!(c && c.hot && c.hot._acceptCallbacks.length) || function e(r, t) {
                                var n = r.modules;
                                if (!n) return [];
                                var o,
                                    i,
                                    a,
                                    c = [];

                                for (o in n) {
                                  for (i in n[o][1]) {
                                    ((a = n[o][1][i]) === t || Array.isArray(a) && a[a.length - 1] === t) && c.push(o);
                                  }
                                }

                                return r.parent && (c = c.concat(e(r.parent, t))), c;
                              }(i.parcelRequire, t).some(function (r) {
                                return e(i.parcelRequire, r);
                              });
                            }
                          }
                        }(i.parcelRequire, e.id) && (t = !0);
                      }), (t = t || r.assets.every(function (e) {
                        return "css" === e.type && e.generated.js;
                      })) ? (console.clear(), r.assets.forEach(function (e) {
                        !function e(r, t) {
                          var n = r.modules;
                          if (n) if (n[t.id] || !r.parent) {
                            var o = new Function("require", "module", "exports", t.generated.js);
                            t.isNew = !n[t.id], n[t.id] = [o, t.deps];
                          } else r.parent && e(r.parent, t);
                        }(i.parcelRequire, e);
                      }), o.forEach(function (e) {
                        !function (e, r) {
                          var t = e.cache[r];
                          e.hotData = {}, t && (t.hot.data = e.hotData), t && t.hot && t.hot._disposeCallbacks.length && t.hot._disposeCallbacks.forEach(function (r) {
                            r(e.hotData);
                          }), delete e.cache[r], e(r), (t = e.cache[r]) && t.hot && t.hot._acceptCallbacks.length && t.hot._acceptCallbacks.forEach(function (e) {
                            e();
                          });
                        }(e[0], e[1]);
                      })) : location.reload && location.reload();
                    }

                    if ("reload" === r.type && (p.close(), p.onclose = function () {
                      location.reload();
                    }), "error-resolved" === r.type && (console.log("[parcel] ✨ Error resolved"), f()), "error" === r.type) {
                      console.error("[parcel] 🚨  " + r.error.message + "\n" + r.error.stack), f();

                      var c = function (e) {
                        var r = document.createElement("div");
                        r.id = a;
                        var t = document.createElement("div"),
                            n = document.createElement("pre");
                        return t.innerText = e.error.message, n.innerText = e.error.stack, r.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;"><span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span><span style="top: 2px; margin-left: 5px; position: relative;">🚨</span><div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + t.innerHTML + "</div><pre>" + n.innerHTML + "</pre></div>", r;
                      }(r);

                      document.body.appendChild(c);
                    }
                  };
                }

                function f() {
                  var e = document.getElementById(a);
                  e && e.remove();
                }
              }, {}]
            }, {}, ["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"]);
          }, {}]
        }, {}, ["RoGL"]);
      }, {}],
      "node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [function (e, r, t) {
        var n,
            o,
            i = arguments[3],
            a = "__parcel__error__overlay__",
            c = r.bundle.Module;

        r.bundle.Module = function (e) {
          c.call(this, e), this.hot = {
            data: r.bundle.hotData,
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function accept(e) {
              this._acceptCallbacks.push(e || function () {});
            },
            dispose: function dispose(e) {
              this._disposeCallbacks.push(e);
            }
          }, r.bundle.hotData = null;
        };

        var l = r.bundle.parent;

        if (!(l && l.isParcelRequire || "undefined" == typeof WebSocket)) {
          var u = location.hostname,
              s = "https:" === location.protocol ? "wss" : "ws",
              p = new WebSocket(s + "://" + u + ":58545/");

          p.onmessage = function (e) {
            n = {}, o = [];
            var r = JSON.parse(e.data);

            if ("update" === r.type) {
              var t = !1;
              r.assets.forEach(function (e) {
                e.isNew || function e(r, t) {
                  var a = r.modules;
                  if (!a) return;
                  if (!a[t] && r.parent) return e(r.parent, t);
                  if (n[t]) return;
                  n[t] = !0;
                  var c = r.cache[t];
                  o.push([r, t]);
                  if (c && c.hot && c.hot._acceptCallbacks.length) return !0;
                  return function e(r, t) {
                    var n = r.modules;
                    if (!n) return [];
                    var o = [];
                    var i, a, c;

                    for (i in n) {
                      for (a in n[i][1]) {
                        ((c = n[i][1][a]) === t || Array.isArray(c) && c[c.length - 1] === t) && o.push(i);
                      }
                    }

                    r.parent && (o = o.concat(e(r.parent, t)));
                    return o;
                  }(i.parcelRequire, t).some(function (r) {
                    return e(i.parcelRequire, r);
                  });
                }(i.parcelRequire, e.id) && (t = !0);
              }), (t = t || r.assets.every(function (e) {
                return "css" === e.type && e.generated.js;
              })) ? (console.clear(), r.assets.forEach(function (e) {
                !function e(r, t) {
                  var n = r.modules;
                  if (!n) return;

                  if (n[t.id] || !r.parent) {
                    var o = new Function("require", "module", "exports", t.generated.js);
                    t.isNew = !n[t.id], n[t.id] = [o, t.deps];
                  } else r.parent && e(r.parent, t);
                }(i.parcelRequire, e);
              }), o.forEach(function (e) {
                !function (e, r) {
                  var t = e.cache[r];
                  e.hotData = {}, t && (t.hot.data = e.hotData);
                  t && t.hot && t.hot._disposeCallbacks.length && t.hot._disposeCallbacks.forEach(function (r) {
                    r(e.hotData);
                  });
                  if (delete e.cache[r], e(r), (t = e.cache[r]) && t.hot && t.hot._acceptCallbacks.length) t.hot._acceptCallbacks.forEach(function (e) {
                    e();
                  });
                }(e[0], e[1]);
              })) : location.reload && location.reload();
            }

            if ("reload" === r.type && (p.close(), p.onclose = function () {
              location.reload();
            }), "error-resolved" === r.type && (console.log("[parcel] ✨ Error resolved"), f()), "error" === r.type) {
              console.error("[parcel] 🚨  " + r.error.message + "\n" + r.error.stack), f();

              var c = function (e) {
                var r = document.createElement("div");
                r.id = a;
                var t = document.createElement("div"),
                    n = document.createElement("pre");
                return t.innerText = e.error.message, n.innerText = e.error.stack, r.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;"><span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span><span style="top: 2px; margin-left: 5px; position: relative;">🚨</span><div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + t.innerHTML + "</div><pre>" + n.innerHTML + "</pre></div>", r;
              }(r);

              document.body.appendChild(c);
            }
          };
        }

        function f() {
          var e = document.getElementById(a);
          e && e.remove();
        }
      }, {}]
    }, {}, ["node_modules/parcel-bundler/src/builtins/hmr-runtime.js", "dist/styles.cbb799b3.3f8bb624.js"]);
  }, {}]
}, {}, ["P17U"], null);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59004" + '/');

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
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
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
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/styles.cbb799b3.3f8bb624.f6484bd1.dc50cfac.js"], null)
//# sourceMappingURL=/styles.cbb799b3.3f8bb624.f6484bd1.dc50cfac.c7e94ff8.js.map