var kv = { exports: {} }, T0 = {};
var XE;
function LT() {
  if (XE) return T0;
  XE = 1;
  var b = /* @__PURE__ */ Symbol.for("react.transitional.element"), H = /* @__PURE__ */ Symbol.for("react.fragment");
  function P(O, ie, ce) {
    var he = null;
    if (ce !== void 0 && (he = "" + ce), ie.key !== void 0 && (he = "" + ie.key), "key" in ie) {
      ce = {};
      for (var J in ie)
        J !== "key" && (ce[J] = ie[J]);
    } else ce = ie;
    return ie = ce.ref, {
      $$typeof: b,
      type: O,
      key: he,
      ref: ie !== void 0 ? ie : null,
      props: ce
    };
  }
  return T0.Fragment = H, T0.jsx = P, T0.jsxs = P, T0;
}
var A0 = {}, Fv = { exports: {} }, Pe = {};
var QE;
function XT() {
  if (QE) return Pe;
  QE = 1;
  var b = /* @__PURE__ */ Symbol.for("react.transitional.element"), H = /* @__PURE__ */ Symbol.for("react.portal"), P = /* @__PURE__ */ Symbol.for("react.fragment"), O = /* @__PURE__ */ Symbol.for("react.strict_mode"), ie = /* @__PURE__ */ Symbol.for("react.profiler"), ce = /* @__PURE__ */ Symbol.for("react.consumer"), he = /* @__PURE__ */ Symbol.for("react.context"), J = /* @__PURE__ */ Symbol.for("react.forward_ref"), W = /* @__PURE__ */ Symbol.for("react.suspense"), X = /* @__PURE__ */ Symbol.for("react.memo"), ye = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), D = Symbol.iterator;
  function te(S) {
    return S === null || typeof S != "object" ? null : (S = D && S[D] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var De = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, et = Object.assign, Ie = {};
  function xe(S, w, le) {
    this.props = S, this.context = w, this.refs = Ie, this.updater = le || De;
  }
  xe.prototype.isReactComponent = {}, xe.prototype.setState = function(S, w) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, w, "setState");
  }, xe.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function Gt() {
  }
  Gt.prototype = xe.prototype;
  function Me(S, w, le) {
    this.props = S, this.context = w, this.refs = Ie, this.updater = le || De;
  }
  var Ue = Me.prototype = new Gt();
  Ue.constructor = Me, et(Ue, xe.prototype), Ue.isPureReactComponent = !0;
  var Be = Array.isArray;
  function dt() {
  }
  var pe = { H: null, A: null, T: null, S: null }, Ae = Object.prototype.hasOwnProperty;
  function Fe(S, w, le) {
    var ee = le.ref;
    return {
      $$typeof: b,
      type: S,
      key: w,
      ref: ee !== void 0 ? ee : null,
      props: le
    };
  }
  function me(S, w) {
    return Fe(S.type, w, S.props);
  }
  function Rt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === b;
  }
  function Te(S) {
    var w = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(le) {
      return w[le];
    });
  }
  var Je = /\/+/g;
  function Kt(S, w) {
    return typeof S == "object" && S !== null && S.key != null ? Te("" + S.key) : w.toString(36);
  }
  function Lt(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(dt, dt) : (S.status = "pending", S.then(
          function(w) {
            S.status === "pending" && (S.status = "fulfilled", S.value = w);
          },
          function(w) {
            S.status === "pending" && (S.status = "rejected", S.reason = w);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function C(S, w, le, ee, _e) {
    var Ke = typeof S;
    (Ke === "undefined" || Ke === "boolean") && (S = null);
    var He = !1;
    if (S === null) He = !0;
    else
      switch (Ke) {
        case "bigint":
        case "string":
        case "number":
          He = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case b:
            case H:
              He = !0;
              break;
            case ye:
              return He = S._init, C(
                He(S._payload),
                w,
                le,
                ee,
                _e
              );
          }
      }
    if (He)
      return _e = _e(S), He = ee === "" ? "." + Kt(S, 0) : ee, Be(_e) ? (le = "", He != null && (le = He.replace(Je, "$&/") + "/"), C(_e, w, le, "", function(Ga) {
        return Ga;
      })) : _e != null && (Rt(_e) && (_e = me(
        _e,
        le + (_e.key == null || S && S.key === _e.key ? "" : ("" + _e.key).replace(
          Je,
          "$&/"
        ) + "/") + He
      )), w.push(_e)), 1;
    He = 0;
    var $t = ee === "" ? "." : ee + ":";
    if (Be(S))
      for (var Et = 0; Et < S.length; Et++)
        ee = S[Et], Ke = $t + Kt(ee, Et), He += C(
          ee,
          w,
          le,
          Ke,
          _e
        );
    else if (Et = te(S), typeof Et == "function")
      for (S = Et.call(S), Et = 0; !(ee = S.next()).done; )
        ee = ee.value, Ke = $t + Kt(ee, Et++), He += C(
          ee,
          w,
          le,
          Ke,
          _e
        );
    else if (Ke === "object") {
      if (typeof S.then == "function")
        return C(
          Lt(S),
          w,
          le,
          ee,
          _e
        );
      throw w = String(S), Error(
        "Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return He;
  }
  function K(S, w, le) {
    if (S == null) return S;
    var ee = [], _e = 0;
    return C(S, ee, "", "", function(Ke) {
      return w.call(le, Ke, _e++);
    }), ee;
  }
  function ne(S) {
    if (S._status === -1) {
      var w = S._result;
      w = w(), w.then(
        function(le) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = le);
        },
        function(le) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = le);
        }
      ), S._status === -1 && (S._status = 0, S._result = w);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var Oe = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var w = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(w)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, je = {
    map: K,
    forEach: function(S, w, le) {
      K(
        S,
        function() {
          w.apply(this, arguments);
        },
        le
      );
    },
    count: function(S) {
      var w = 0;
      return K(S, function() {
        w++;
      }), w;
    },
    toArray: function(S) {
      return K(S, function(w) {
        return w;
      }) || [];
    },
    only: function(S) {
      if (!Rt(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return Pe.Activity = B, Pe.Children = je, Pe.Component = xe, Pe.Fragment = P, Pe.Profiler = ie, Pe.PureComponent = Me, Pe.StrictMode = O, Pe.Suspense = W, Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = pe, Pe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return pe.H.useMemoCache(S);
    }
  }, Pe.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, Pe.cacheSignal = function() {
    return null;
  }, Pe.cloneElement = function(S, w, le) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var ee = et({}, S.props), _e = S.key;
    if (w != null)
      for (Ke in w.key !== void 0 && (_e = "" + w.key), w)
        !Ae.call(w, Ke) || Ke === "key" || Ke === "__self" || Ke === "__source" || Ke === "ref" && w.ref === void 0 || (ee[Ke] = w[Ke]);
    var Ke = arguments.length - 2;
    if (Ke === 1) ee.children = le;
    else if (1 < Ke) {
      for (var He = Array(Ke), $t = 0; $t < Ke; $t++)
        He[$t] = arguments[$t + 2];
      ee.children = He;
    }
    return Fe(S.type, _e, ee);
  }, Pe.createContext = function(S) {
    return S = {
      $$typeof: he,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: ce,
      _context: S
    }, S;
  }, Pe.createElement = function(S, w, le) {
    var ee, _e = {}, Ke = null;
    if (w != null)
      for (ee in w.key !== void 0 && (Ke = "" + w.key), w)
        Ae.call(w, ee) && ee !== "key" && ee !== "__self" && ee !== "__source" && (_e[ee] = w[ee]);
    var He = arguments.length - 2;
    if (He === 1) _e.children = le;
    else if (1 < He) {
      for (var $t = Array(He), Et = 0; Et < He; Et++)
        $t[Et] = arguments[Et + 2];
      _e.children = $t;
    }
    if (S && S.defaultProps)
      for (ee in He = S.defaultProps, He)
        _e[ee] === void 0 && (_e[ee] = He[ee]);
    return Fe(S, Ke, _e);
  }, Pe.createRef = function() {
    return { current: null };
  }, Pe.forwardRef = function(S) {
    return { $$typeof: J, render: S };
  }, Pe.isValidElement = Rt, Pe.lazy = function(S) {
    return {
      $$typeof: ye,
      _payload: { _status: -1, _result: S },
      _init: ne
    };
  }, Pe.memo = function(S, w) {
    return {
      $$typeof: X,
      type: S,
      compare: w === void 0 ? null : w
    };
  }, Pe.startTransition = function(S) {
    var w = pe.T, le = {};
    pe.T = le;
    try {
      var ee = S(), _e = pe.S;
      _e !== null && _e(le, ee), typeof ee == "object" && ee !== null && typeof ee.then == "function" && ee.then(dt, Oe);
    } catch (Ke) {
      Oe(Ke);
    } finally {
      w !== null && le.types !== null && (w.types = le.types), pe.T = w;
    }
  }, Pe.unstable_useCacheRefresh = function() {
    return pe.H.useCacheRefresh();
  }, Pe.use = function(S) {
    return pe.H.use(S);
  }, Pe.useActionState = function(S, w, le) {
    return pe.H.useActionState(S, w, le);
  }, Pe.useCallback = function(S, w) {
    return pe.H.useCallback(S, w);
  }, Pe.useContext = function(S) {
    return pe.H.useContext(S);
  }, Pe.useDebugValue = function() {
  }, Pe.useDeferredValue = function(S, w) {
    return pe.H.useDeferredValue(S, w);
  }, Pe.useEffect = function(S, w) {
    return pe.H.useEffect(S, w);
  }, Pe.useEffectEvent = function(S) {
    return pe.H.useEffectEvent(S);
  }, Pe.useId = function() {
    return pe.H.useId();
  }, Pe.useImperativeHandle = function(S, w, le) {
    return pe.H.useImperativeHandle(S, w, le);
  }, Pe.useInsertionEffect = function(S, w) {
    return pe.H.useInsertionEffect(S, w);
  }, Pe.useLayoutEffect = function(S, w) {
    return pe.H.useLayoutEffect(S, w);
  }, Pe.useMemo = function(S, w) {
    return pe.H.useMemo(S, w);
  }, Pe.useOptimistic = function(S, w) {
    return pe.H.useOptimistic(S, w);
  }, Pe.useReducer = function(S, w, le) {
    return pe.H.useReducer(S, w, le);
  }, Pe.useRef = function(S) {
    return pe.H.useRef(S);
  }, Pe.useState = function(S) {
    return pe.H.useState(S);
  }, Pe.useSyncExternalStore = function(S, w, le) {
    return pe.H.useSyncExternalStore(
      S,
      w,
      le
    );
  }, Pe.useTransition = function() {
    return pe.H.useTransition();
  }, Pe.version = "19.2.8", Pe;
}
var D0 = { exports: {} };
D0.exports;
var VE;
function QT() {
  return VE || (VE = 1, (function(b, H) {
    process.env.NODE_ENV !== "production" && (function() {
      function P(g, N) {
        Object.defineProperty(ce.prototype, g, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              N[0],
              N[1]
            );
          }
        });
      }
      function O(g) {
        return g === null || typeof g != "object" ? null : (g = Ci && g[Ci] || g["@@iterator"], typeof g == "function" ? g : null);
      }
      function ie(g, N) {
        g = (g = g.constructor) && (g.displayName || g.name) || "ReactClass";
        var ae = g + "." + N;
        Ui[ae] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          N,
          g
        ), Ui[ae] = !0);
      }
      function ce(g, N, ae) {
        this.props = g, this.context = N, this.refs = Tt, this.updater = ae || La;
      }
      function he() {
      }
      function J(g, N, ae) {
        this.props = g, this.context = N, this.refs = Tt, this.updater = ae || La;
      }
      function W() {
      }
      function X(g) {
        return "" + g;
      }
      function ye(g) {
        try {
          X(g);
          var N = !1;
        } catch {
          N = !0;
        }
        if (N) {
          N = console;
          var ae = N.error, ue = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return ae.call(
            N,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ue
          ), X(g);
        }
      }
      function B(g) {
        if (g == null) return null;
        if (typeof g == "function")
          return g.$$typeof === pr ? null : g.displayName || g.name || null;
        if (typeof g == "string") return g;
        switch (g) {
          case S:
            return "Fragment";
          case le:
            return "Profiler";
          case w:
            return "StrictMode";
          case He:
            return "Suspense";
          case $t:
            return "SuspenseList";
          case se:
            return "Activity";
        }
        if (typeof g == "object")
          switch (typeof g.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), g.$$typeof) {
            case je:
              return "Portal";
            case _e:
              return g.displayName || "Context";
            case ee:
              return (g._context.displayName || "Context") + ".Consumer";
            case Ke:
              var N = g.render;
              return g = g.displayName, g || (g = N.displayName || N.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
            case Et:
              return N = g.displayName || null, N !== null ? N : B(g.type) || "Memo";
            case Ga:
              N = g._payload, g = g._init;
              try {
                return B(g(N));
              } catch {
              }
          }
        return null;
      }
      function D(g) {
        if (g === S) return "<>";
        if (typeof g == "object" && g !== null && g.$$typeof === Ga)
          return "<...>";
        try {
          var N = B(g);
          return N ? "<" + N + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function te() {
        var g = ve.A;
        return g === null ? null : g.getOwner();
      }
      function De() {
        return Error("react-stack-top-frame");
      }
      function et(g) {
        if (Hi.call(g, "key")) {
          var N = Object.getOwnPropertyDescriptor(g, "key").get;
          if (N && N.isReactWarning) return !1;
        }
        return g.key !== void 0;
      }
      function Ie(g, N) {
        function ae() {
          Ac || (Ac = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            N
          ));
        }
        ae.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: ae,
          configurable: !0
        });
      }
      function xe() {
        var g = B(this.type);
        return nd[g] || (nd[g] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), g = this.props.ref, g !== void 0 ? g : null;
      }
      function Gt(g, N, ae, ue, Se, qe) {
        var be = ae.ref;
        return g = {
          $$typeof: Oe,
          type: g,
          key: N,
          props: ae,
          _owner: ue
        }, (be !== void 0 ? be : null) !== null ? Object.defineProperty(g, "ref", {
          enumerable: !1,
          get: xe
        }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(g, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(g, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Se
        }), Object.defineProperty(g, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: qe
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      }
      function Me(g, N) {
        return N = Gt(
          g.type,
          N,
          g.props,
          g._owner,
          g._debugStack,
          g._debugTask
        ), g._store && (N._store.validated = g._store.validated), N;
      }
      function Ue(g) {
        Be(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === Ga && (g._payload.status === "fulfilled" ? Be(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
      }
      function Be(g) {
        return typeof g == "object" && g !== null && g.$$typeof === Oe;
      }
      function dt(g) {
        var N = { "=": "=0", ":": "=2" };
        return "$" + g.replace(/[=:]/g, function(ae) {
          return N[ae];
        });
      }
      function pe(g, N) {
        return typeof g == "object" && g !== null && g.key != null ? (ye(g.key), dt("" + g.key)) : N.toString(36);
      }
      function Ae(g) {
        switch (g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
          default:
            switch (typeof g.status == "string" ? g.then(W, W) : (g.status = "pending", g.then(
              function(N) {
                g.status === "pending" && (g.status = "fulfilled", g.value = N);
              },
              function(N) {
                g.status === "pending" && (g.status = "rejected", g.reason = N);
              }
            )), g.status) {
              case "fulfilled":
                return g.value;
              case "rejected":
                throw g.reason;
            }
        }
        throw g;
      }
      function Fe(g, N, ae, ue, Se) {
        var qe = typeof g;
        (qe === "undefined" || qe === "boolean") && (g = null);
        var be = !1;
        if (g === null) be = !0;
        else
          switch (qe) {
            case "bigint":
            case "string":
            case "number":
              be = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case Oe:
                case je:
                  be = !0;
                  break;
                case Ga:
                  return be = g._init, Fe(
                    be(g._payload),
                    N,
                    ae,
                    ue,
                    Se
                  );
              }
          }
        if (be) {
          be = g, Se = Se(be);
          var ot = ue === "" ? "." + pe(be, 0) : ue;
          return Tc(Se) ? (ae = "", ot != null && (ae = ot.replace(ud, "$&/") + "/"), Fe(Se, N, ae, "", function(aa) {
            return aa;
          })) : Se != null && (Be(Se) && (Se.key != null && (be && be.key === Se.key || ye(Se.key)), ae = Me(
            Se,
            ae + (Se.key == null || be && be.key === Se.key ? "" : ("" + Se.key).replace(
              ud,
              "$&/"
            ) + "/") + ot
          ), ue !== "" && be != null && Be(be) && be.key == null && be._store && !be._store.validated && (ae._store.validated = 2), Se = ae), N.push(Se)), 1;
        }
        if (be = 0, ot = ue === "" ? "." : ue + ":", Tc(g))
          for (var $e = 0; $e < g.length; $e++)
            ue = g[$e], qe = ot + pe(ue, $e), be += Fe(
              ue,
              N,
              ae,
              qe,
              Se
            );
        else if ($e = O(g), typeof $e == "function")
          for ($e === g.entries && (Nn || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Nn = !0), g = $e.call(g), $e = 0; !(ue = g.next()).done; )
            ue = ue.value, qe = ot + pe(ue, $e++), be += Fe(
              ue,
              N,
              ae,
              qe,
              Se
            );
        else if (qe === "object") {
          if (typeof g.then == "function")
            return Fe(
              Ae(g),
              N,
              ae,
              ue,
              Se
            );
          throw N = String(g), Error(
            "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return be;
      }
      function me(g, N, ae) {
        if (g == null) return g;
        var ue = [], Se = 0;
        return Fe(g, ue, "", "", function(qe) {
          return N.call(ae, qe, Se++);
        }), ue;
      }
      function Rt(g) {
        if (g._status === -1) {
          var N = g._ioInfo;
          N != null && (N.start = N.end = performance.now()), N = g._result;
          var ae = N();
          if (ae.then(
            function(Se) {
              if (g._status === 0 || g._status === -1) {
                g._status = 1, g._result = Se;
                var qe = g._ioInfo;
                qe != null && (qe.end = performance.now()), ae.status === void 0 && (ae.status = "fulfilled", ae.value = Se);
              }
            },
            function(Se) {
              if (g._status === 0 || g._status === -1) {
                g._status = 2, g._result = Se;
                var qe = g._ioInfo;
                qe != null && (qe.end = performance.now()), ae.status === void 0 && (ae.status = "rejected", ae.reason = Se);
              }
            }
          ), N = g._ioInfo, N != null) {
            N.value = ae;
            var ue = ae.displayName;
            typeof ue == "string" && (N.name = ue);
          }
          g._status === -1 && (g._status = 0, g._result = ae);
        }
        if (g._status === 1)
          return N = g._result, N === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            N
          ), "default" in N || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            N
          ), N.default;
        throw g._result;
      }
      function Te() {
        var g = ve.H;
        return g === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), g;
      }
      function Je() {
        ve.asyncTransitions--;
      }
      function Kt(g) {
        if (Oc === null)
          try {
            var N = ("require" + Math.random()).slice(0, 7);
            Oc = (b && b[N]).call(
              b,
              "timers"
            ).setImmediate;
          } catch {
            Oc = function(ue) {
              gr === !1 && (gr = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var Se = new MessageChannel();
              Se.port1.onmessage = ue, Se.port2.postMessage(void 0);
            };
          }
        return Oc(g);
      }
      function Lt(g) {
        return 1 < g.length && typeof AggregateError == "function" ? new AggregateError(g) : g[0];
      }
      function C(g, N) {
        N !== mn - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), mn = N;
      }
      function K(g, N, ae) {
        var ue = ve.actQueue;
        if (ue !== null)
          if (ue.length !== 0)
            try {
              ne(ue), Kt(function() {
                return K(g, N, ae);
              });
              return;
            } catch (Se) {
              ve.thrownErrors.push(Se);
            }
          else ve.actQueue = null;
        0 < ve.thrownErrors.length ? (ue = Lt(ve.thrownErrors), ve.thrownErrors.length = 0, ae(ue)) : N(g);
      }
      function ne(g) {
        if (!Xa) {
          Xa = !0;
          var N = 0;
          try {
            for (; N < g.length; N++) {
              var ae = g[N];
              do {
                ve.didUsePromise = !1;
                var ue = ae(!1);
                if (ue !== null) {
                  if (ve.didUsePromise) {
                    g[N] = ae, g.splice(0, N);
                    return;
                  }
                  ae = ue;
                } else break;
              } while (!0);
            }
            g.length = 0;
          } catch (Se) {
            g.splice(0, N + 1), ve.thrownErrors.push(Se);
          } finally {
            Xa = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var Oe = /* @__PURE__ */ Symbol.for("react.transitional.element"), je = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), w = /* @__PURE__ */ Symbol.for("react.strict_mode"), le = /* @__PURE__ */ Symbol.for("react.profiler"), ee = /* @__PURE__ */ Symbol.for("react.consumer"), _e = /* @__PURE__ */ Symbol.for("react.context"), Ke = /* @__PURE__ */ Symbol.for("react.forward_ref"), He = /* @__PURE__ */ Symbol.for("react.suspense"), $t = /* @__PURE__ */ Symbol.for("react.suspense_list"), Et = /* @__PURE__ */ Symbol.for("react.memo"), Ga = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.activity"), Ci = Symbol.iterator, Ui = {}, La = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(g) {
          ie(g, "forceUpdate");
        },
        enqueueReplaceState: function(g) {
          ie(g, "replaceState");
        },
        enqueueSetState: function(g) {
          ie(g, "setState");
        }
      }, fu = Object.assign, Tt = {};
      Object.freeze(Tt), ce.prototype.isReactComponent = {}, ce.prototype.setState = function(g, N) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, g, N, "setState");
      }, ce.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      var la = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Ni in la)
        la.hasOwnProperty(Ni) && P(Ni, la[Ni]);
      he.prototype = ce.prototype, la = J.prototype = new he(), la.constructor = J, fu(la, ce.prototype), la.isPureReactComponent = !0;
      var Tc = Array.isArray, pr = /* @__PURE__ */ Symbol.for("react.client.reference"), ve = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Hi = Object.prototype.hasOwnProperty, ru = console.createTask ? console.createTask : function() {
        return null;
      };
      la = {
        react_stack_bottom_frame: function(g) {
          return g();
        }
      };
      var Ac, Sl, nd = {}, xo = la.react_stack_bottom_frame.bind(
        la,
        De
      )(), Bo = ru(D(De)), Nn = !1, ud = /\/+/g, jo = typeof reportError == "function" ? reportError : function(g) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var N = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
            error: g
          });
          if (!window.dispatchEvent(N)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", g);
          return;
        }
        console.error(g);
      }, gr = !1, Oc = null, mn = 0, Rl = !1, Xa = !1, Nl = typeof queueMicrotask == "function" ? function(g) {
        queueMicrotask(function() {
          return queueMicrotask(g);
        });
      } : Kt;
      la = Object.freeze({
        __proto__: null,
        c: function(g) {
          return Te().useMemoCache(g);
        }
      });
      var Ni = {
        map: me,
        forEach: function(g, N, ae) {
          me(
            g,
            function() {
              N.apply(this, arguments);
            },
            ae
          );
        },
        count: function(g) {
          var N = 0;
          return me(g, function() {
            N++;
          }), N;
        },
        toArray: function(g) {
          return me(g, function(N) {
            return N;
          }) || [];
        },
        only: function(g) {
          if (!Be(g))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return g;
        }
      };
      H.Activity = se, H.Children = Ni, H.Component = ce, H.Fragment = S, H.Profiler = le, H.PureComponent = J, H.StrictMode = w, H.Suspense = He, H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ve, H.__COMPILER_RUNTIME = la, H.act = function(g) {
        var N = ve.actQueue, ae = mn;
        mn++;
        var ue = ve.actQueue = N !== null ? N : [], Se = !1;
        try {
          var qe = g();
        } catch ($e) {
          ve.thrownErrors.push($e);
        }
        if (0 < ve.thrownErrors.length)
          throw C(N, ae), g = Lt(ve.thrownErrors), ve.thrownErrors.length = 0, g;
        if (qe !== null && typeof qe == "object" && typeof qe.then == "function") {
          var be = qe;
          return Nl(function() {
            Se || Rl || (Rl = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function($e, aa) {
              Se = !0, be.then(
                function(yn) {
                  if (C(N, ae), ae === 0) {
                    try {
                      ne(ue), Kt(function() {
                        return K(
                          yn,
                          $e,
                          aa
                        );
                      });
                    } catch (wo) {
                      ve.thrownErrors.push(wo);
                    }
                    if (0 < ve.thrownErrors.length) {
                      var xi = Lt(
                        ve.thrownErrors
                      );
                      ve.thrownErrors.length = 0, aa(xi);
                    }
                  } else $e(yn);
                },
                function(yn) {
                  C(N, ae), 0 < ve.thrownErrors.length && (yn = Lt(
                    ve.thrownErrors
                  ), ve.thrownErrors.length = 0), aa(yn);
                }
              );
            }
          };
        }
        var ot = qe;
        if (C(N, ae), ae === 0 && (ne(ue), ue.length !== 0 && Nl(function() {
          Se || Rl || (Rl = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ve.actQueue = null), 0 < ve.thrownErrors.length)
          throw g = Lt(ve.thrownErrors), ve.thrownErrors.length = 0, g;
        return {
          then: function($e, aa) {
            Se = !0, ae === 0 ? (ve.actQueue = ue, Kt(function() {
              return K(
                ot,
                $e,
                aa
              );
            })) : $e(ot);
          }
        };
      }, H.cache = function(g) {
        return function() {
          return g.apply(null, arguments);
        };
      }, H.cacheSignal = function() {
        return null;
      }, H.captureOwnerStack = function() {
        var g = ve.getCurrentStack;
        return g === null ? null : g();
      }, H.cloneElement = function(g, N, ae) {
        if (g == null)
          throw Error(
            "The argument must be a React element, but you passed " + g + "."
          );
        var ue = fu({}, g.props), Se = g.key, qe = g._owner;
        if (N != null) {
          var be;
          e: {
            if (Hi.call(N, "ref") && (be = Object.getOwnPropertyDescriptor(
              N,
              "ref"
            ).get) && be.isReactWarning) {
              be = !1;
              break e;
            }
            be = N.ref !== void 0;
          }
          be && (qe = te()), et(N) && (ye(N.key), Se = "" + N.key);
          for (ot in N)
            !Hi.call(N, ot) || ot === "key" || ot === "__self" || ot === "__source" || ot === "ref" && N.ref === void 0 || (ue[ot] = N[ot]);
        }
        var ot = arguments.length - 2;
        if (ot === 1) ue.children = ae;
        else if (1 < ot) {
          be = Array(ot);
          for (var $e = 0; $e < ot; $e++)
            be[$e] = arguments[$e + 2];
          ue.children = be;
        }
        for (ue = Gt(
          g.type,
          Se,
          ue,
          qe,
          g._debugStack,
          g._debugTask
        ), Se = 2; Se < arguments.length; Se++)
          Ue(arguments[Se]);
        return ue;
      }, H.createContext = function(g) {
        return g = {
          $$typeof: _e,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, g.Provider = g, g.Consumer = {
          $$typeof: ee,
          _context: g
        }, g._currentRenderer = null, g._currentRenderer2 = null, g;
      }, H.createElement = function(g, N, ae) {
        for (var ue = 2; ue < arguments.length; ue++)
          Ue(arguments[ue]);
        ue = {};
        var Se = null;
        if (N != null)
          for ($e in Sl || !("__self" in N) || "key" in N || (Sl = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), et(N) && (ye(N.key), Se = "" + N.key), N)
            Hi.call(N, $e) && $e !== "key" && $e !== "__self" && $e !== "__source" && (ue[$e] = N[$e]);
        var qe = arguments.length - 2;
        if (qe === 1) ue.children = ae;
        else if (1 < qe) {
          for (var be = Array(qe), ot = 0; ot < qe; ot++)
            be[ot] = arguments[ot + 2];
          Object.freeze && Object.freeze(be), ue.children = be;
        }
        if (g && g.defaultProps)
          for ($e in qe = g.defaultProps, qe)
            ue[$e] === void 0 && (ue[$e] = qe[$e]);
        Se && Ie(
          ue,
          typeof g == "function" ? g.displayName || g.name || "Unknown" : g
        );
        var $e = 1e4 > ve.recentlyCreatedOwnerStacks++;
        return Gt(
          g,
          Se,
          ue,
          te(),
          $e ? Error("react-stack-top-frame") : xo,
          $e ? ru(D(g)) : Bo
        );
      }, H.createRef = function() {
        var g = { current: null };
        return Object.seal(g), g;
      }, H.forwardRef = function(g) {
        g != null && g.$$typeof === Et ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof g != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          g === null ? "null" : typeof g
        ) : g.length !== 0 && g.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), g != null && g.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var N = { $$typeof: Ke, render: g }, ae;
        return Object.defineProperty(N, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ae;
          },
          set: function(ue) {
            ae = ue, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ue }), g.displayName = ue);
          }
        }), N;
      }, H.isValidElement = Be, H.lazy = function(g) {
        g = { _status: -1, _result: g };
        var N = {
          $$typeof: Ga,
          _payload: g,
          _init: Rt
        }, ae = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return g._ioInfo = ae, N._debugInfo = [{ awaited: ae }], N;
      }, H.memo = function(g, N) {
        g == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          g === null ? "null" : typeof g
        ), N = {
          $$typeof: Et,
          type: g,
          compare: N === void 0 ? null : N
        };
        var ae;
        return Object.defineProperty(N, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ae;
          },
          set: function(ue) {
            ae = ue, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ue }), g.displayName = ue);
          }
        }), N;
      }, H.startTransition = function(g) {
        var N = ve.T, ae = {};
        ae._updatedFibers = /* @__PURE__ */ new Set(), ve.T = ae;
        try {
          var ue = g(), Se = ve.S;
          Se !== null && Se(ae, ue), typeof ue == "object" && ue !== null && typeof ue.then == "function" && (ve.asyncTransitions++, ue.then(Je, Je), ue.then(W, jo));
        } catch (qe) {
          jo(qe);
        } finally {
          N === null && ae._updatedFibers && (g = ae._updatedFibers.size, ae._updatedFibers.clear(), 10 < g && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), N !== null && ae.types !== null && (N.types !== null && N.types !== ae.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), N.types = ae.types), ve.T = N;
        }
      }, H.unstable_useCacheRefresh = function() {
        return Te().useCacheRefresh();
      }, H.use = function(g) {
        return Te().use(g);
      }, H.useActionState = function(g, N, ae) {
        return Te().useActionState(
          g,
          N,
          ae
        );
      }, H.useCallback = function(g, N) {
        return Te().useCallback(g, N);
      }, H.useContext = function(g) {
        var N = Te();
        return g.$$typeof === ee && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), N.useContext(g);
      }, H.useDebugValue = function(g, N) {
        return Te().useDebugValue(g, N);
      }, H.useDeferredValue = function(g, N) {
        return Te().useDeferredValue(g, N);
      }, H.useEffect = function(g, N) {
        return g == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Te().useEffect(g, N);
      }, H.useEffectEvent = function(g) {
        return Te().useEffectEvent(g);
      }, H.useId = function() {
        return Te().useId();
      }, H.useImperativeHandle = function(g, N, ae) {
        return Te().useImperativeHandle(g, N, ae);
      }, H.useInsertionEffect = function(g, N) {
        return g == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Te().useInsertionEffect(g, N);
      }, H.useLayoutEffect = function(g, N) {
        return g == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Te().useLayoutEffect(g, N);
      }, H.useMemo = function(g, N) {
        return Te().useMemo(g, N);
      }, H.useOptimistic = function(g, N) {
        return Te().useOptimistic(g, N);
      }, H.useReducer = function(g, N, ae) {
        return Te().useReducer(g, N, ae);
      }, H.useRef = function(g) {
        return Te().useRef(g);
      }, H.useState = function(g) {
        return Te().useState(g);
      }, H.useSyncExternalStore = function(g, N, ae) {
        return Te().useSyncExternalStore(
          g,
          N,
          ae
        );
      }, H.useTransition = function() {
        return Te().useTransition();
      }, H.version = "19.2.8", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(D0, D0.exports)), D0.exports;
}
var ZE;
function Dm() {
  return ZE || (ZE = 1, process.env.NODE_ENV === "production" ? Fv.exports = XT() : Fv.exports = QT()), Fv.exports;
}
var JE;
function VT() {
  return JE || (JE = 1, process.env.NODE_ENV !== "production" && (function() {
    function b(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === Rt ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case Ie:
          return "Fragment";
        case Gt:
          return "Profiler";
        case xe:
          return "StrictMode";
        case dt:
          return "Suspense";
        case pe:
          return "SuspenseList";
        case me:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case et:
            return "Portal";
          case Ue:
            return S.displayName || "Context";
          case Me:
            return (S._context.displayName || "Context") + ".Consumer";
          case Be:
            var w = S.render;
            return S = S.displayName, S || (S = w.displayName || w.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case Ae:
            return w = S.displayName || null, w !== null ? w : b(S.type) || "Memo";
          case Fe:
            w = S._payload, S = S._init;
            try {
              return b(S(w));
            } catch {
            }
        }
      return null;
    }
    function H(S) {
      return "" + S;
    }
    function P(S) {
      try {
        H(S);
        var w = !1;
      } catch {
        w = !0;
      }
      if (w) {
        w = console;
        var le = w.error, ee = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return le.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ee
        ), H(S);
      }
    }
    function O(S) {
      if (S === Ie) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === Fe)
        return "<...>";
      try {
        var w = b(S);
        return w ? "<" + w + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function ie() {
      var S = Te.A;
      return S === null ? null : S.getOwner();
    }
    function ce() {
      return Error("react-stack-top-frame");
    }
    function he(S) {
      if (Je.call(S, "key")) {
        var w = Object.getOwnPropertyDescriptor(S, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function J(S, w) {
      function le() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          w
        ));
      }
      le.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: le,
        configurable: !0
      });
    }
    function W() {
      var S = b(this.type);
      return K[S] || (K[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function X(S, w, le, ee, _e, Ke) {
      var He = le.ref;
      return S = {
        $$typeof: De,
        type: S,
        key: w,
        props: le,
        _owner: ee
      }, (He !== void 0 ? He : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: W
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _e
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ke
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function ye(S, w, le, ee, _e, Ke) {
      var He = w.children;
      if (He !== void 0)
        if (ee)
          if (Kt(He)) {
            for (ee = 0; ee < He.length; ee++)
              B(He[ee]);
            Object.freeze && Object.freeze(He);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else B(He);
      if (Je.call(w, "key")) {
        He = b(S);
        var $t = Object.keys(w).filter(function(Ga) {
          return Ga !== "key";
        });
        ee = 0 < $t.length ? "{key: someKey, " + $t.join(": ..., ") + ": ...}" : "{key: someKey}", je[He + ee] || ($t = 0 < $t.length ? "{" + $t.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ee,
          He,
          $t,
          He
        ), je[He + ee] = !0);
      }
      if (He = null, le !== void 0 && (P(le), He = "" + le), he(w) && (P(w.key), He = "" + w.key), "key" in w) {
        le = {};
        for (var Et in w)
          Et !== "key" && (le[Et] = w[Et]);
      } else le = w;
      return He && J(
        le,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), X(
        S,
        He,
        le,
        ie(),
        _e,
        Ke
      );
    }
    function B(S) {
      D(S) ? S._store && (S._store.validated = 1) : typeof S == "object" && S !== null && S.$$typeof === Fe && (S._payload.status === "fulfilled" ? D(S._payload.value) && S._payload.value._store && (S._payload.value._store.validated = 1) : S._store && (S._store.validated = 1));
    }
    function D(S) {
      return typeof S == "object" && S !== null && S.$$typeof === De;
    }
    var te = Dm(), De = /* @__PURE__ */ Symbol.for("react.transitional.element"), et = /* @__PURE__ */ Symbol.for("react.portal"), Ie = /* @__PURE__ */ Symbol.for("react.fragment"), xe = /* @__PURE__ */ Symbol.for("react.strict_mode"), Gt = /* @__PURE__ */ Symbol.for("react.profiler"), Me = /* @__PURE__ */ Symbol.for("react.consumer"), Ue = /* @__PURE__ */ Symbol.for("react.context"), Be = /* @__PURE__ */ Symbol.for("react.forward_ref"), dt = /* @__PURE__ */ Symbol.for("react.suspense"), pe = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ae = /* @__PURE__ */ Symbol.for("react.memo"), Fe = /* @__PURE__ */ Symbol.for("react.lazy"), me = /* @__PURE__ */ Symbol.for("react.activity"), Rt = /* @__PURE__ */ Symbol.for("react.client.reference"), Te = te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Je = Object.prototype.hasOwnProperty, Kt = Array.isArray, Lt = console.createTask ? console.createTask : function() {
      return null;
    };
    te = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var C, K = {}, ne = te.react_stack_bottom_frame.bind(
      te,
      ce
    )(), Oe = Lt(O(ce)), je = {};
    A0.Fragment = Ie, A0.jsx = function(S, w, le) {
      var ee = 1e4 > Te.recentlyCreatedOwnerStacks++;
      return ye(
        S,
        w,
        le,
        !1,
        ee ? Error("react-stack-top-frame") : ne,
        ee ? Lt(O(S)) : Oe
      );
    }, A0.jsxs = function(S, w, le) {
      var ee = 1e4 > Te.recentlyCreatedOwnerStacks++;
      return ye(
        S,
        w,
        le,
        !0,
        ee ? Error("react-stack-top-frame") : ne,
        ee ? Lt(O(S)) : Oe
      );
    };
  })()), A0;
}
var KE;
function ZT() {
  return KE || (KE = 1, process.env.NODE_ENV === "production" ? kv.exports = LT() : kv.exports = VT()), kv.exports;
}
var re = ZT(), Ol = Dm(), Wv = { exports: {} }, O0 = {}, Iv = { exports: {} }, RS = {};
var $E;
function JT() {
  return $E || ($E = 1, (function(b) {
    function H(C, K) {
      var ne = C.length;
      C.push(K);
      e: for (; 0 < ne; ) {
        var Oe = ne - 1 >>> 1, je = C[Oe];
        if (0 < ie(je, K))
          C[Oe] = K, C[ne] = je, ne = Oe;
        else break e;
      }
    }
    function P(C) {
      return C.length === 0 ? null : C[0];
    }
    function O(C) {
      if (C.length === 0) return null;
      var K = C[0], ne = C.pop();
      if (ne !== K) {
        C[0] = ne;
        e: for (var Oe = 0, je = C.length, S = je >>> 1; Oe < S; ) {
          var w = 2 * (Oe + 1) - 1, le = C[w], ee = w + 1, _e = C[ee];
          if (0 > ie(le, ne))
            ee < je && 0 > ie(_e, le) ? (C[Oe] = _e, C[ee] = ne, Oe = ee) : (C[Oe] = le, C[w] = ne, Oe = w);
          else if (ee < je && 0 > ie(_e, ne))
            C[Oe] = _e, C[ee] = ne, Oe = ee;
          else break e;
        }
      }
      return K;
    }
    function ie(C, K) {
      var ne = C.sortIndex - K.sortIndex;
      return ne !== 0 ? ne : C.id - K.id;
    }
    if (b.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ce = performance;
      b.unstable_now = function() {
        return ce.now();
      };
    } else {
      var he = Date, J = he.now();
      b.unstable_now = function() {
        return he.now() - J;
      };
    }
    var W = [], X = [], ye = 1, B = null, D = 3, te = !1, De = !1, et = !1, Ie = !1, xe = typeof setTimeout == "function" ? setTimeout : null, Gt = typeof clearTimeout == "function" ? clearTimeout : null, Me = typeof setImmediate < "u" ? setImmediate : null;
    function Ue(C) {
      for (var K = P(X); K !== null; ) {
        if (K.callback === null) O(X);
        else if (K.startTime <= C)
          O(X), K.sortIndex = K.expirationTime, H(W, K);
        else break;
        K = P(X);
      }
    }
    function Be(C) {
      if (et = !1, Ue(C), !De)
        if (P(W) !== null)
          De = !0, dt || (dt = !0, Te());
        else {
          var K = P(X);
          K !== null && Lt(Be, K.startTime - C);
        }
    }
    var dt = !1, pe = -1, Ae = 5, Fe = -1;
    function me() {
      return Ie ? !0 : !(b.unstable_now() - Fe < Ae);
    }
    function Rt() {
      if (Ie = !1, dt) {
        var C = b.unstable_now();
        Fe = C;
        var K = !0;
        try {
          e: {
            De = !1, et && (et = !1, Gt(pe), pe = -1), te = !0;
            var ne = D;
            try {
              t: {
                for (Ue(C), B = P(W); B !== null && !(B.expirationTime > C && me()); ) {
                  var Oe = B.callback;
                  if (typeof Oe == "function") {
                    B.callback = null, D = B.priorityLevel;
                    var je = Oe(
                      B.expirationTime <= C
                    );
                    if (C = b.unstable_now(), typeof je == "function") {
                      B.callback = je, Ue(C), K = !0;
                      break t;
                    }
                    B === P(W) && O(W), Ue(C);
                  } else O(W);
                  B = P(W);
                }
                if (B !== null) K = !0;
                else {
                  var S = P(X);
                  S !== null && Lt(
                    Be,
                    S.startTime - C
                  ), K = !1;
                }
              }
              break e;
            } finally {
              B = null, D = ne, te = !1;
            }
            K = void 0;
          }
        } finally {
          K ? Te() : dt = !1;
        }
      }
    }
    var Te;
    if (typeof Me == "function")
      Te = function() {
        Me(Rt);
      };
    else if (typeof MessageChannel < "u") {
      var Je = new MessageChannel(), Kt = Je.port2;
      Je.port1.onmessage = Rt, Te = function() {
        Kt.postMessage(null);
      };
    } else
      Te = function() {
        xe(Rt, 0);
      };
    function Lt(C, K) {
      pe = xe(function() {
        C(b.unstable_now());
      }, K);
    }
    b.unstable_IdlePriority = 5, b.unstable_ImmediatePriority = 1, b.unstable_LowPriority = 4, b.unstable_NormalPriority = 3, b.unstable_Profiling = null, b.unstable_UserBlockingPriority = 2, b.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, b.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ae = 0 < C ? Math.floor(1e3 / C) : 5;
    }, b.unstable_getCurrentPriorityLevel = function() {
      return D;
    }, b.unstable_next = function(C) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = D;
      }
      var ne = D;
      D = K;
      try {
        return C();
      } finally {
        D = ne;
      }
    }, b.unstable_requestPaint = function() {
      Ie = !0;
    }, b.unstable_runWithPriority = function(C, K) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var ne = D;
      D = C;
      try {
        return K();
      } finally {
        D = ne;
      }
    }, b.unstable_scheduleCallback = function(C, K, ne) {
      var Oe = b.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? Oe + ne : Oe) : ne = Oe, C) {
        case 1:
          var je = -1;
          break;
        case 2:
          je = 250;
          break;
        case 5:
          je = 1073741823;
          break;
        case 4:
          je = 1e4;
          break;
        default:
          je = 5e3;
      }
      return je = ne + je, C = {
        id: ye++,
        callback: K,
        priorityLevel: C,
        startTime: ne,
        expirationTime: je,
        sortIndex: -1
      }, ne > Oe ? (C.sortIndex = ne, H(X, C), P(W) === null && C === P(X) && (et ? (Gt(pe), pe = -1) : et = !0, Lt(Be, ne - Oe))) : (C.sortIndex = je, H(W, C), De || te || (De = !0, dt || (dt = !0, Te()))), C;
    }, b.unstable_shouldYield = me, b.unstable_wrapCallback = function(C) {
      var K = D;
      return function() {
        var ne = D;
        D = K;
        try {
          return C.apply(this, arguments);
        } finally {
          D = ne;
        }
      };
    };
  })(RS)), RS;
}
var DS = {};
var kE;
function KT() {
  return kE || (kE = 1, (function(b) {
    process.env.NODE_ENV !== "production" && (function() {
      function H() {
        if (Be = !1, Fe) {
          var C = b.unstable_now();
          Te = C;
          var K = !0;
          try {
            e: {
              Me = !1, Ue && (Ue = !1, pe(me), me = -1), Gt = !0;
              var ne = xe;
              try {
                t: {
                  for (he(C), Ie = O(te); Ie !== null && !(Ie.expirationTime > C && W()); ) {
                    var Oe = Ie.callback;
                    if (typeof Oe == "function") {
                      Ie.callback = null, xe = Ie.priorityLevel;
                      var je = Oe(
                        Ie.expirationTime <= C
                      );
                      if (C = b.unstable_now(), typeof je == "function") {
                        Ie.callback = je, he(C), K = !0;
                        break t;
                      }
                      Ie === O(te) && ie(te), he(C);
                    } else ie(te);
                    Ie = O(te);
                  }
                  if (Ie !== null) K = !0;
                  else {
                    var S = O(De);
                    S !== null && X(
                      J,
                      S.startTime - C
                    ), K = !1;
                  }
                }
                break e;
              } finally {
                Ie = null, xe = ne, Gt = !1;
              }
              K = void 0;
            }
          } finally {
            K ? Je() : Fe = !1;
          }
        }
      }
      function P(C, K) {
        var ne = C.length;
        C.push(K);
        e: for (; 0 < ne; ) {
          var Oe = ne - 1 >>> 1, je = C[Oe];
          if (0 < ce(je, K))
            C[Oe] = K, C[ne] = je, ne = Oe;
          else break e;
        }
      }
      function O(C) {
        return C.length === 0 ? null : C[0];
      }
      function ie(C) {
        if (C.length === 0) return null;
        var K = C[0], ne = C.pop();
        if (ne !== K) {
          C[0] = ne;
          e: for (var Oe = 0, je = C.length, S = je >>> 1; Oe < S; ) {
            var w = 2 * (Oe + 1) - 1, le = C[w], ee = w + 1, _e = C[ee];
            if (0 > ce(le, ne))
              ee < je && 0 > ce(_e, le) ? (C[Oe] = _e, C[ee] = ne, Oe = ee) : (C[Oe] = le, C[w] = ne, Oe = w);
            else if (ee < je && 0 > ce(_e, ne))
              C[Oe] = _e, C[ee] = ne, Oe = ee;
            else break e;
          }
        }
        return K;
      }
      function ce(C, K) {
        var ne = C.sortIndex - K.sortIndex;
        return ne !== 0 ? ne : C.id - K.id;
      }
      function he(C) {
        for (var K = O(De); K !== null; ) {
          if (K.callback === null) ie(De);
          else if (K.startTime <= C)
            ie(De), K.sortIndex = K.expirationTime, P(te, K);
          else break;
          K = O(De);
        }
      }
      function J(C) {
        if (Ue = !1, he(C), !Me)
          if (O(te) !== null)
            Me = !0, Fe || (Fe = !0, Je());
          else {
            var K = O(De);
            K !== null && X(
              J,
              K.startTime - C
            );
          }
      }
      function W() {
        return Be ? !0 : !(b.unstable_now() - Te < Rt);
      }
      function X(C, K) {
        me = dt(function() {
          C(b.unstable_now());
        }, K);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), b.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var ye = performance;
        b.unstable_now = function() {
          return ye.now();
        };
      } else {
        var B = Date, D = B.now();
        b.unstable_now = function() {
          return B.now() - D;
        };
      }
      var te = [], De = [], et = 1, Ie = null, xe = 3, Gt = !1, Me = !1, Ue = !1, Be = !1, dt = typeof setTimeout == "function" ? setTimeout : null, pe = typeof clearTimeout == "function" ? clearTimeout : null, Ae = typeof setImmediate < "u" ? setImmediate : null, Fe = !1, me = -1, Rt = 5, Te = -1;
      if (typeof Ae == "function")
        var Je = function() {
          Ae(H);
        };
      else if (typeof MessageChannel < "u") {
        var Kt = new MessageChannel(), Lt = Kt.port2;
        Kt.port1.onmessage = H, Je = function() {
          Lt.postMessage(null);
        };
      } else
        Je = function() {
          dt(H, 0);
        };
      b.unstable_IdlePriority = 5, b.unstable_ImmediatePriority = 1, b.unstable_LowPriority = 4, b.unstable_NormalPriority = 3, b.unstable_Profiling = null, b.unstable_UserBlockingPriority = 2, b.unstable_cancelCallback = function(C) {
        C.callback = null;
      }, b.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Rt = 0 < C ? Math.floor(1e3 / C) : 5;
      }, b.unstable_getCurrentPriorityLevel = function() {
        return xe;
      }, b.unstable_next = function(C) {
        switch (xe) {
          case 1:
          case 2:
          case 3:
            var K = 3;
            break;
          default:
            K = xe;
        }
        var ne = xe;
        xe = K;
        try {
          return C();
        } finally {
          xe = ne;
        }
      }, b.unstable_requestPaint = function() {
        Be = !0;
      }, b.unstable_runWithPriority = function(C, K) {
        switch (C) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            C = 3;
        }
        var ne = xe;
        xe = C;
        try {
          return K();
        } finally {
          xe = ne;
        }
      }, b.unstable_scheduleCallback = function(C, K, ne) {
        var Oe = b.unstable_now();
        switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? Oe + ne : Oe) : ne = Oe, C) {
          case 1:
            var je = -1;
            break;
          case 2:
            je = 250;
            break;
          case 5:
            je = 1073741823;
            break;
          case 4:
            je = 1e4;
            break;
          default:
            je = 5e3;
        }
        return je = ne + je, C = {
          id: et++,
          callback: K,
          priorityLevel: C,
          startTime: ne,
          expirationTime: je,
          sortIndex: -1
        }, ne > Oe ? (C.sortIndex = ne, P(De, C), O(te) === null && C === O(De) && (Ue ? (pe(me), me = -1) : Ue = !0, X(J, ne - Oe))) : (C.sortIndex = je, P(te, C), Me || Gt || (Me = !0, Fe || (Fe = !0, Je()))), C;
      }, b.unstable_shouldYield = W, b.unstable_wrapCallback = function(C) {
        var K = xe;
        return function() {
          var ne = xe;
          xe = K;
          try {
            return C.apply(this, arguments);
          } finally {
            xe = ne;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(DS)), DS;
}
var FE;
function h2() {
  return FE || (FE = 1, process.env.NODE_ENV === "production" ? Iv.exports = JT() : Iv.exports = KT()), Iv.exports;
}
var Pv = { exports: {} }, qa = {};
var WE;
function $T() {
  if (WE) return qa;
  WE = 1;
  var b = Dm();
  function H(W) {
    var X = "https://react.dev/errors/" + W;
    if (1 < arguments.length) {
      X += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var ye = 2; ye < arguments.length; ye++)
        X += "&args[]=" + encodeURIComponent(arguments[ye]);
    }
    return "Minified React error #" + W + "; visit " + X + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function P() {
  }
  var O = {
    d: {
      f: P,
      r: function() {
        throw Error(H(522));
      },
      D: P,
      C: P,
      L: P,
      m: P,
      X: P,
      S: P,
      M: P
    },
    p: 0,
    findDOMNode: null
  }, ie = /* @__PURE__ */ Symbol.for("react.portal");
  function ce(W, X, ye) {
    var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ie,
      key: B == null ? null : "" + B,
      children: W,
      containerInfo: X,
      implementation: ye
    };
  }
  var he = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function J(W, X) {
    if (W === "font") return "";
    if (typeof X == "string")
      return X === "use-credentials" ? X : "";
  }
  return qa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O, qa.createPortal = function(W, X) {
    var ye = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!X || X.nodeType !== 1 && X.nodeType !== 9 && X.nodeType !== 11)
      throw Error(H(299));
    return ce(W, X, null, ye);
  }, qa.flushSync = function(W) {
    var X = he.T, ye = O.p;
    try {
      if (he.T = null, O.p = 2, W) return W();
    } finally {
      he.T = X, O.p = ye, O.d.f();
    }
  }, qa.preconnect = function(W, X) {
    typeof W == "string" && (X ? (X = X.crossOrigin, X = typeof X == "string" ? X === "use-credentials" ? X : "" : void 0) : X = null, O.d.C(W, X));
  }, qa.prefetchDNS = function(W) {
    typeof W == "string" && O.d.D(W);
  }, qa.preinit = function(W, X) {
    if (typeof W == "string" && X && typeof X.as == "string") {
      var ye = X.as, B = J(ye, X.crossOrigin), D = typeof X.integrity == "string" ? X.integrity : void 0, te = typeof X.fetchPriority == "string" ? X.fetchPriority : void 0;
      ye === "style" ? O.d.S(
        W,
        typeof X.precedence == "string" ? X.precedence : void 0,
        {
          crossOrigin: B,
          integrity: D,
          fetchPriority: te
        }
      ) : ye === "script" && O.d.X(W, {
        crossOrigin: B,
        integrity: D,
        fetchPriority: te,
        nonce: typeof X.nonce == "string" ? X.nonce : void 0
      });
    }
  }, qa.preinitModule = function(W, X) {
    if (typeof W == "string")
      if (typeof X == "object" && X !== null) {
        if (X.as == null || X.as === "script") {
          var ye = J(
            X.as,
            X.crossOrigin
          );
          O.d.M(W, {
            crossOrigin: ye,
            integrity: typeof X.integrity == "string" ? X.integrity : void 0,
            nonce: typeof X.nonce == "string" ? X.nonce : void 0
          });
        }
      } else X == null && O.d.M(W);
  }, qa.preload = function(W, X) {
    if (typeof W == "string" && typeof X == "object" && X !== null && typeof X.as == "string") {
      var ye = X.as, B = J(ye, X.crossOrigin);
      O.d.L(W, ye, {
        crossOrigin: B,
        integrity: typeof X.integrity == "string" ? X.integrity : void 0,
        nonce: typeof X.nonce == "string" ? X.nonce : void 0,
        type: typeof X.type == "string" ? X.type : void 0,
        fetchPriority: typeof X.fetchPriority == "string" ? X.fetchPriority : void 0,
        referrerPolicy: typeof X.referrerPolicy == "string" ? X.referrerPolicy : void 0,
        imageSrcSet: typeof X.imageSrcSet == "string" ? X.imageSrcSet : void 0,
        imageSizes: typeof X.imageSizes == "string" ? X.imageSizes : void 0,
        media: typeof X.media == "string" ? X.media : void 0
      });
    }
  }, qa.preloadModule = function(W, X) {
    if (typeof W == "string")
      if (X) {
        var ye = J(X.as, X.crossOrigin);
        O.d.m(W, {
          as: typeof X.as == "string" && X.as !== "script" ? X.as : void 0,
          crossOrigin: ye,
          integrity: typeof X.integrity == "string" ? X.integrity : void 0
        });
      } else O.d.m(W);
  }, qa.requestFormReset = function(W) {
    O.d.r(W);
  }, qa.unstable_batchedUpdates = function(W, X) {
    return W(X);
  }, qa.useFormState = function(W, X, ye) {
    return he.H.useFormState(W, X, ye);
  }, qa.useFormStatus = function() {
    return he.H.useHostTransitionStatus();
  }, qa.version = "19.2.8", qa;
}
var Ya = {};
var IE;
function kT() {
  return IE || (IE = 1, process.env.NODE_ENV !== "production" && (function() {
    function b() {
    }
    function H(B) {
      return "" + B;
    }
    function P(B, D, te) {
      var De = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        H(De);
        var et = !1;
      } catch {
        et = !0;
      }
      return et && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && De[Symbol.toStringTag] || De.constructor.name || "Object"
      ), H(De)), {
        $$typeof: X,
        key: De == null ? null : "" + De,
        children: B,
        containerInfo: D,
        implementation: te
      };
    }
    function O(B, D) {
      if (B === "font") return "";
      if (typeof D == "string")
        return D === "use-credentials" ? D : "";
    }
    function ie(B) {
      return B === null ? "`null`" : B === void 0 ? "`undefined`" : B === "" ? "an empty string" : 'something with type "' + typeof B + '"';
    }
    function ce(B) {
      return B === null ? "`null`" : B === void 0 ? "`undefined`" : B === "" ? "an empty string" : typeof B == "string" ? JSON.stringify(B) : typeof B == "number" ? "`" + B + "`" : 'something with type "' + typeof B + '"';
    }
    function he() {
      var B = ye.H;
      return B === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), B;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var J = Dm(), W = {
      d: {
        f: b,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: b,
        C: b,
        L: b,
        m: b,
        X: b,
        S: b,
        M: b
      },
      p: 0,
      findDOMNode: null
    }, X = /* @__PURE__ */ Symbol.for("react.portal"), ye = J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Ya.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, Ya.createPortal = function(B, D) {
      var te = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!D || D.nodeType !== 1 && D.nodeType !== 9 && D.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return P(B, D, null, te);
    }, Ya.flushSync = function(B) {
      var D = ye.T, te = W.p;
      try {
        if (ye.T = null, W.p = 2, B)
          return B();
      } finally {
        ye.T = D, W.p = te, W.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Ya.preconnect = function(B, D) {
      typeof B == "string" && B ? D != null && typeof D != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        ce(D)
      ) : D != null && typeof D.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        ie(D.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        ie(B)
      ), typeof B == "string" && (D ? (D = D.crossOrigin, D = typeof D == "string" ? D === "use-credentials" ? D : "" : void 0) : D = null, W.d.C(B, D));
    }, Ya.prefetchDNS = function(B) {
      if (typeof B != "string" || !B)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          ie(B)
        );
      else if (1 < arguments.length) {
        var D = arguments[1];
        typeof D == "object" && D.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          ce(D)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          ce(D)
        );
      }
      typeof B == "string" && W.d.D(B);
    }, Ya.preinit = function(B, D) {
      if (typeof B == "string" && B ? D == null || typeof D != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        ce(D)
      ) : D.as !== "style" && D.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        ce(D.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        ie(B)
      ), typeof B == "string" && D && typeof D.as == "string") {
        var te = D.as, De = O(te, D.crossOrigin), et = typeof D.integrity == "string" ? D.integrity : void 0, Ie = typeof D.fetchPriority == "string" ? D.fetchPriority : void 0;
        te === "style" ? W.d.S(
          B,
          typeof D.precedence == "string" ? D.precedence : void 0,
          {
            crossOrigin: De,
            integrity: et,
            fetchPriority: Ie
          }
        ) : te === "script" && W.d.X(B, {
          crossOrigin: De,
          integrity: et,
          fetchPriority: Ie,
          nonce: typeof D.nonce == "string" ? D.nonce : void 0
        });
      }
    }, Ya.preinitModule = function(B, D) {
      var te = "";
      typeof B == "string" && B || (te += " The `href` argument encountered was " + ie(B) + "."), D !== void 0 && typeof D != "object" ? te += " The `options` argument encountered was " + ie(D) + "." : D && "as" in D && D.as !== "script" && (te += " The `as` option encountered was " + ce(D.as) + "."), te ? console.error(
        "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
        te
      ) : (te = D && typeof D.as == "string" ? D.as : "script", te) === "script" || (te = ce(te), console.error(
        'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
        te,
        B
      )), typeof B == "string" && (typeof D == "object" && D !== null ? (D.as == null || D.as === "script") && (te = O(
        D.as,
        D.crossOrigin
      ), W.d.M(B, {
        crossOrigin: te,
        integrity: typeof D.integrity == "string" ? D.integrity : void 0,
        nonce: typeof D.nonce == "string" ? D.nonce : void 0
      })) : D == null && W.d.M(B));
    }, Ya.preload = function(B, D) {
      var te = "";
      if (typeof B == "string" && B || (te += " The `href` argument encountered was " + ie(B) + "."), D == null || typeof D != "object" ? te += " The `options` argument encountered was " + ie(D) + "." : typeof D.as == "string" && D.as || (te += " The `as` option encountered was " + ie(D.as) + "."), te && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        te
      ), typeof B == "string" && typeof D == "object" && D !== null && typeof D.as == "string") {
        te = D.as;
        var De = O(
          te,
          D.crossOrigin
        );
        W.d.L(B, te, {
          crossOrigin: De,
          integrity: typeof D.integrity == "string" ? D.integrity : void 0,
          nonce: typeof D.nonce == "string" ? D.nonce : void 0,
          type: typeof D.type == "string" ? D.type : void 0,
          fetchPriority: typeof D.fetchPriority == "string" ? D.fetchPriority : void 0,
          referrerPolicy: typeof D.referrerPolicy == "string" ? D.referrerPolicy : void 0,
          imageSrcSet: typeof D.imageSrcSet == "string" ? D.imageSrcSet : void 0,
          imageSizes: typeof D.imageSizes == "string" ? D.imageSizes : void 0,
          media: typeof D.media == "string" ? D.media : void 0
        });
      }
    }, Ya.preloadModule = function(B, D) {
      var te = "";
      typeof B == "string" && B || (te += " The `href` argument encountered was " + ie(B) + "."), D !== void 0 && typeof D != "object" ? te += " The `options` argument encountered was " + ie(D) + "." : D && "as" in D && typeof D.as != "string" && (te += " The `as` option encountered was " + ie(D.as) + "."), te && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        te
      ), typeof B == "string" && (D ? (te = O(
        D.as,
        D.crossOrigin
      ), W.d.m(B, {
        as: typeof D.as == "string" && D.as !== "script" ? D.as : void 0,
        crossOrigin: te,
        integrity: typeof D.integrity == "string" ? D.integrity : void 0
      })) : W.d.m(B));
    }, Ya.requestFormReset = function(B) {
      W.d.r(B);
    }, Ya.unstable_batchedUpdates = function(B, D) {
      return B(D);
    }, Ya.useFormState = function(B, D, te) {
      return he().useFormState(B, D, te);
    }, Ya.useFormStatus = function() {
      return he().useHostTransitionStatus();
    }, Ya.version = "19.2.8", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Ya;
}
var PE;
function m2() {
  if (PE) return Pv.exports;
  PE = 1;
  function b() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
      } catch (H) {
        console.error(H);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (b(), Pv.exports = $T()) : Pv.exports = kT(), Pv.exports;
}
var e2;
function FT() {
  if (e2) return O0;
  e2 = 1;
  var b = h2(), H = Dm(), P = m2();
  function O(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ie(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function ce(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function he(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function J(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function W(l) {
    if (ce(l) !== l)
      throw Error(O(188));
  }
  function X(l) {
    var n = l.alternate;
    if (!n) {
      if (n = ce(l), n === null) throw Error(O(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var r = u.return;
      if (r === null) break;
      var s = r.alternate;
      if (s === null) {
        if (c = r.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (r.child === s.child) {
        for (s = r.child; s; ) {
          if (s === u) return W(r), l;
          if (s === c) return W(r), n;
          s = s.sibling;
        }
        throw Error(O(188));
      }
      if (u.return !== c.return) u = r, c = s;
      else {
        for (var m = !1, v = r.child; v; ) {
          if (v === u) {
            m = !0, u = r, c = s;
            break;
          }
          if (v === c) {
            m = !0, c = r, u = s;
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = s.child; v; ) {
            if (v === u) {
              m = !0, u = s, c = r;
              break;
            }
            if (v === c) {
              m = !0, c = s, u = r;
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(O(189));
        }
      }
      if (u.alternate !== c) throw Error(O(190));
    }
    if (u.tag !== 3) throw Error(O(188));
    return u.stateNode.current === u ? l : n;
  }
  function ye(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = ye(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var B = Object.assign, D = /* @__PURE__ */ Symbol.for("react.element"), te = /* @__PURE__ */ Symbol.for("react.transitional.element"), De = /* @__PURE__ */ Symbol.for("react.portal"), et = /* @__PURE__ */ Symbol.for("react.fragment"), Ie = /* @__PURE__ */ Symbol.for("react.strict_mode"), xe = /* @__PURE__ */ Symbol.for("react.profiler"), Gt = /* @__PURE__ */ Symbol.for("react.consumer"), Me = /* @__PURE__ */ Symbol.for("react.context"), Ue = /* @__PURE__ */ Symbol.for("react.forward_ref"), Be = /* @__PURE__ */ Symbol.for("react.suspense"), dt = /* @__PURE__ */ Symbol.for("react.suspense_list"), pe = /* @__PURE__ */ Symbol.for("react.memo"), Ae = /* @__PURE__ */ Symbol.for("react.lazy"), Fe = /* @__PURE__ */ Symbol.for("react.activity"), me = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Rt = Symbol.iterator;
  function Te(l) {
    return l === null || typeof l != "object" ? null : (l = Rt && l[Rt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Je = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Kt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Je ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case et:
        return "Fragment";
      case xe:
        return "Profiler";
      case Ie:
        return "StrictMode";
      case Be:
        return "Suspense";
      case dt:
        return "SuspenseList";
      case Fe:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case De:
          return "Portal";
        case Me:
          return l.displayName || "Context";
        case Gt:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ue:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case pe:
          return n = l.displayName || null, n !== null ? n : Kt(l.type) || "Memo";
        case Ae:
          n = l._payload, l = l._init;
          try {
            return Kt(l(n));
          } catch {
          }
      }
    return null;
  }
  var Lt = Array.isArray, C = H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = P.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Oe = [], je = -1;
  function S(l) {
    return { current: l };
  }
  function w(l) {
    0 > je || (l.current = Oe[je], Oe[je] = null, je--);
  }
  function le(l, n) {
    je++, Oe[je] = l.current, l.current = n;
  }
  var ee = S(null), _e = S(null), Ke = S(null), He = S(null);
  function $t(l, n) {
    switch (le(Ke, n), le(_e, l), le(ee, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Gg(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Gg(n), l = gp(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    w(ee), le(ee, l);
  }
  function Et() {
    w(ee), w(_e), w(Ke);
  }
  function Ga(l) {
    l.memoizedState !== null && le(He, l);
    var n = ee.current, u = gp(n, l.type);
    n !== u && (le(_e, l), le(ee, u));
  }
  function se(l) {
    _e.current === l && (w(ee), w(_e)), He.current === l && (w(He), Cs._currentValue = ne);
  }
  var Ci, Ui;
  function La(l) {
    if (Ci === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Ci = n && n[1] || "", Ui = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ci + l + Ui;
  }
  var fu = !1;
  function Tt(l, n) {
    if (!l || fu) return "";
    fu = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var F = function() {
                throw Error();
              };
              if (Object.defineProperty(F.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(F, []);
                } catch (V) {
                  var Y = V;
                }
                Reflect.construct(l, [], F);
              } else {
                try {
                  F.call();
                } catch (V) {
                  Y = V;
                }
                l.call(F.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                Y = V;
              }
              (F = l()) && typeof F.catch == "function" && F.catch(function() {
              });
            }
          } catch (V) {
            if (V && Y && typeof V.stack == "string")
              return [V.stack, Y.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = c.DetermineComponentFrameRoot(), m = s[0], v = s[1];
      if (m && v) {
        var R = m.split(`
`), q = v.split(`
`);
        for (r = c = 0; c < R.length && !R[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; r < q.length && !q[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (c === R.length || r === q.length)
          for (c = R.length - 1, r = q.length - 1; 1 <= c && 0 <= r && R[c] !== q[r]; )
            r--;
        for (; 1 <= c && 0 <= r; c--, r--)
          if (R[c] !== q[r]) {
            if (c !== 1 || r !== 1)
              do
                if (c--, r--, 0 > r || R[c] !== q[r]) {
                  var Z = `
` + R[c].replace(" at new ", " at ");
                  return l.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", l.displayName)), Z;
                }
              while (1 <= c && 0 <= r);
            break;
          }
      }
    } finally {
      fu = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? La(u) : "";
  }
  function la(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return La(l.type);
      case 16:
        return La("Lazy");
      case 13:
        return l.child !== n && n !== null ? La("Suspense Fallback") : La("Suspense");
      case 19:
        return La("SuspenseList");
      case 0:
      case 15:
        return Tt(l.type, !1);
      case 11:
        return Tt(l.type.render, !1);
      case 1:
        return Tt(l.type, !0);
      case 31:
        return La("Activity");
      default:
        return "";
    }
  }
  function Tc(l) {
    try {
      var n = "", u = null;
      do
        n += la(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var pr = Object.prototype.hasOwnProperty, ve = b.unstable_scheduleCallback, Hi = b.unstable_cancelCallback, ru = b.unstable_shouldYield, Ac = b.unstable_requestPaint, Sl = b.unstable_now, nd = b.unstable_getCurrentPriorityLevel, xo = b.unstable_ImmediatePriority, Bo = b.unstable_UserBlockingPriority, Nn = b.unstable_NormalPriority, ud = b.unstable_LowPriority, jo = b.unstable_IdlePriority, gr = b.log, Oc = b.unstable_setDisableYieldValue, mn = null, Rl = null;
  function Xa(l) {
    if (typeof gr == "function" && Oc(l), Rl && typeof Rl.setStrictMode == "function")
      try {
        Rl.setStrictMode(mn, l);
      } catch {
      }
  }
  var Nl = Math.clz32 ? Math.clz32 : N, Ni = Math.log, g = Math.LN2;
  function N(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Ni(l) / g | 0) | 0;
  }
  var ae = 256, ue = 262144, Se = 4194304;
  function qe(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function be(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var r = 0, s = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var v = c & 134217727;
    return v !== 0 ? (c = v & ~s, c !== 0 ? r = qe(c) : (m &= v, m !== 0 ? r = qe(m) : u || (u = v & ~l, u !== 0 && (r = qe(u))))) : (v = c & ~s, v !== 0 ? r = qe(v) : m !== 0 ? r = qe(m) : u || (u = c & ~l, u !== 0 && (r = qe(u)))), r === 0 ? 0 : n !== 0 && n !== r && (n & s) === 0 && (s = r & -r, u = n & -n, s >= u || s === 32 && (u & 4194048) !== 0) ? n : r;
  }
  function ot(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function $e(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function aa() {
    var l = Se;
    return Se <<= 1, (Se & 62914560) === 0 && (Se = 4194304), l;
  }
  function yn(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function xi(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function wo(l, n, u, c, r, s) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, R = l.expirationTimes, q = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var Z = 31 - Nl(u), F = 1 << Z;
      v[Z] = 0, R[Z] = -1;
      var Y = q[Z];
      if (Y !== null)
        for (q[Z] = null, Z = 0; Z < Y.length; Z++) {
          var V = Y[Z];
          V !== null && (V.lane &= -536870913);
        }
      u &= ~F;
    }
    c !== 0 && vr(l, c, 0), s !== 0 && r === 0 && l.tag !== 0 && (l.suspendedLanes |= s & ~(m & ~n));
  }
  function vr(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Nl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function su(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Nl(u), r = 1 << c;
      r & n | l[c] & n && (l[c] |= n), u &= ~r;
    }
  }
  function Qa(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : id(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function id(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function _m(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function cd() {
    var l = K.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Us(l.type));
  }
  function zm(l, n) {
    var u = K.p;
    try {
      return K.p = l, n();
    } finally {
      K.p = u;
    }
  }
  var xn = Math.random().toString(36).slice(2), xt = "__reactFiber$" + xn, da = "__reactProps$" + xn, Bi = "__reactContainer$" + xn, od = "__reactEvents$" + xn, Mm = "__reactListeners$" + xn, z0 = "__reactHandles$" + xn, Cm = "__reactResources$" + xn, du = "__reactMarker$" + xn;
  function fd(l) {
    delete l[xt], delete l[da], delete l[od], delete l[Mm], delete l[z0];
  }
  function Rc(l) {
    var n = l[xt];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Bi] || u[xt]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = tu(l); l !== null; ) {
            if (u = l[xt]) return u;
            l = tu(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Dc(l) {
    if (l = l[xt] || l[Bi]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function qo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(O(33));
  }
  function _c(l) {
    var n = l[Cm];
    return n || (n = l[Cm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Mt(l) {
    l[du] = !0;
  }
  var zc = /* @__PURE__ */ new Set(), ji = {};
  function wi(l, n) {
    hu(l, n), hu(l + "Capture", n);
  }
  function hu(l, n) {
    for (ji[l] = n, l = 0; l < n.length; l++)
      zc.add(n[l]);
  }
  var rd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), sd = {}, Yo = {};
  function Go(l) {
    return pr.call(Yo, l) ? !0 : pr.call(sd, l) ? !1 : rd.test(l) ? Yo[l] = !0 : (sd[l] = !0, !1);
  }
  function Lo(l, n, u) {
    if (Go(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function dd(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function ti(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  function Va(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function hd(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Um(l, n, u) {
    var c = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var r = c.get, s = c.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(m) {
          u = "" + m, s.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: c.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function md(l) {
    if (!l._valueTracker) {
      var n = hd(l) ? "checked" : "value";
      l._valueTracker = Um(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function Hm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = hd(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Sr(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var e1 = /[\n"\\]/g;
  function Za(l) {
    return l.replace(
      e1,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function br(l, n, u, c, r, s, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Va(n)) : l.value !== "" + Va(n) && (l.value = "" + Va(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? Mc(l, m, Va(n)) : u != null ? Mc(l, m, Va(u)) : c != null && l.removeAttribute("value"), r == null && s != null && (l.defaultChecked = !!s), r != null && (l.checked = r && typeof r != "function" && typeof r != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + Va(v) : l.removeAttribute("name");
  }
  function Er(l, n, u, c, r, s, m, v) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (l.type = s), n != null || u != null) {
      if (!(s !== "submit" && s !== "reset" || n != null)) {
        md(l);
        return;
      }
      u = u != null ? "" + Va(u) : "", n = n != null ? "" + Va(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? r, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = v ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), md(l);
  }
  function Mc(l, n, u) {
    n === "number" && Sr(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Xo(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var r = 0; r < u.length; r++)
        n["$" + u[r]] = !0;
      for (u = 0; u < l.length; u++)
        r = n.hasOwnProperty("$" + l[u].value), l[u].selected !== r && (l[u].selected = r), r && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Va(u), n = null, r = 0; r < l.length; r++) {
        if (l[r].value === u) {
          l[r].selected = !0, c && (l[r].defaultSelected = !0);
          return;
        }
        n !== null || l[r].disabled || (n = l[r]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Nm(l, n, u) {
    if (n != null && (n = "" + Va(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Va(u) : "";
  }
  function xm(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(O(92));
        if (Lt(c)) {
          if (1 < c.length) throw Error(O(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Va(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), md(l);
  }
  function mu(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var M0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function C0(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || M0.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function U0(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(O(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var r in n)
        c = n[r], n.hasOwnProperty(r) && u[r] !== c && C0(l, r, c);
    } else
      for (var s in n)
        n.hasOwnProperty(s) && C0(l, s, n[s]);
  }
  function Bm(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var t1 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Tr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pn(l) {
    return Tr.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Bn() {
  }
  var yd = null;
  function pd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var yu = null, Cc = null;
  function Ar(l) {
    var n = Dc(l);
    if (n && (l = n.stateNode)) {
      var u = l[da] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (br(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Za(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var r = c[da] || null;
                if (!r) throw Error(O(90));
                br(
                  c,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Hm(c);
          }
          break e;
        case "textarea":
          Nm(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && Xo(l, !!u.multiple, n, !1);
      }
    }
  }
  var Qo = !1;
  function jm(l, n, u) {
    if (Qo) return l(n, u);
    Qo = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Qo = !1, (yu !== null || Cc !== null) && (Df(), yu && (n = yu, l = Cc, Cc = yu = null, Ar(n), l)))
        for (n = 0; n < l.length; n++) Ar(l[n]);
    }
  }
  function xl(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[da] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        O(231, n, typeof u)
      );
    return u;
  }
  var li = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Or = !1;
  if (li)
    try {
      var Vo = {};
      Object.defineProperty(Vo, "passive", {
        get: function() {
          Or = !0;
        }
      }), window.addEventListener("test", Vo, Vo), window.removeEventListener("test", Vo, Vo);
    } catch {
      Or = !1;
    }
  var ai = null, wm = null, gd = null;
  function qm() {
    if (gd) return gd;
    var l, n = wm, u = n.length, c, r = "value" in ai ? ai.value : ai.textContent, s = r.length;
    for (l = 0; l < u && n[l] === r[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === r[s - c]; c++) ;
    return gd = r.slice(l, 1 < c ? 1 - c : void 0);
  }
  function vd(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Rr() {
    return !0;
  }
  function H0() {
    return !1;
  }
  function kl(l) {
    function n(u, c, r, s, m) {
      this._reactName = u, this._targetInst = r, this.type = c, this.nativeEvent = s, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(s) : s[v]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Rr : H0, this.isPropagationStopped = H0, this;
    }
    return B(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Rr);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Rr);
      },
      persist: function() {
      },
      isPersistent: Rr
    }), n;
  }
  var qi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Dr = kl(qi), Zo = B({}, qi, { view: 0, detail: 0 }), l1 = kl(Zo), Ym, Gm, _r, Sd = B({}, Zo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gn,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== _r && (_r && l.type === "mousemove" ? (Ym = l.screenX - _r.screenX, Gm = l.screenY - _r.screenY) : Gm = Ym = 0, _r = l), Ym);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Gm;
    }
  }), Jo = kl(Sd), N0 = B({}, Sd, { dataTransfer: 0 }), x0 = kl(N0), B0 = B({}, Zo, { relatedTarget: 0 }), bd = kl(B0), Lm = B({}, qi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), j0 = kl(Lm), Uc = B({}, qi, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Hc = kl(Uc), jn = B({}, qi, { data: 0 }), w0 = kl(jn), Xm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, pu = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, q0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function wn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = q0[l]) ? !!n[l] : !1;
  }
  function gn() {
    return wn;
  }
  var Ed = B({}, Zo, {
    key: function(l) {
      if (l.key) {
        var n = Xm[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = vd(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? pu[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gn,
    charCode: function(l) {
      return l.type === "keypress" ? vd(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? vd(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Td = kl(Ed), Qm = B({}, Sd, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), qn = kl(Qm), a1 = B({}, Zo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gn
  }), Y0 = kl(a1), G0 = B({}, qi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), n1 = kl(G0), Vm = B({}, Sd, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), u1 = kl(Vm), L0 = B({}, qi, {
    newState: 0,
    oldState: 0
  }), Zm = kl(L0), Ad = [9, 13, 27, 32], Ko = li && "CompositionEvent" in window, Nc = null;
  li && "documentMode" in document && (Nc = document.documentMode);
  var na = li && "TextEvent" in window && !Nc, Jm = li && (!Ko || Nc && 8 < Nc && 11 >= Nc), zr = " ", Yi = !1;
  function Od(l, n) {
    switch (l) {
      case "keyup":
        return Ad.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Km(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var xc = !1;
  function X0(l, n) {
    switch (l) {
      case "compositionend":
        return Km(n);
      case "keypress":
        return n.which !== 32 ? null : (Yi = !0, zr);
      case "textInput":
        return l = n.data, l === zr && Yi ? null : l;
      default:
        return null;
    }
  }
  function i1(l, n) {
    if (xc)
      return l === "compositionend" || !Ko && Od(l, n) ? (l = qm(), gd = wm = ai = null, xc = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Jm && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var $m = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function gu(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!$m[l.type] : n === "textarea";
  }
  function km(l, n, u, c) {
    yu ? Cc ? Cc.push(c) : Cc = [c] : yu = c, n = Os(n, "onChange"), 0 < n.length && (u = new Dr(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Bc = null, Gi = null;
  function jc(l) {
    wg(l, 0);
  }
  function $o(l) {
    var n = qo(l);
    if (Hm(n)) return l;
  }
  function Fm(l, n) {
    if (l === "change") return n;
  }
  var Rd = !1;
  if (li) {
    var ha;
    if (li) {
      var Yn = "oninput" in document;
      if (!Yn) {
        var Wm = document.createElement("div");
        Wm.setAttribute("oninput", "return;"), Yn = typeof Wm.oninput == "function";
      }
      ha = Yn;
    } else ha = !1;
    Rd = ha && (!document.documentMode || 9 < document.documentMode);
  }
  function Dd() {
    Bc && (Bc.detachEvent("onpropertychange", _d), Gi = Bc = null);
  }
  function _d(l) {
    if (l.propertyName === "value" && $o(Gi)) {
      var n = [];
      km(
        n,
        Gi,
        l,
        pd(l)
      ), jm(jc, n);
    }
  }
  function Q0(l, n, u) {
    l === "focusin" ? (Dd(), Bc = n, Gi = u, Bc.attachEvent("onpropertychange", _d)) : l === "focusout" && Dd();
  }
  function V0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return $o(Gi);
  }
  function Li(l, n) {
    if (l === "click") return $o(n);
  }
  function wc(l, n) {
    if (l === "input" || l === "change")
      return $o(n);
  }
  function Z0(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var ua = typeof Object.is == "function" ? Object.is : Z0;
  function vn(l, n) {
    if (ua(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var r = u[c];
      if (!pr.call(n, r) || !ua(l[r], n[r]))
        return !1;
    }
    return !0;
  }
  function Im(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Pm(l, n) {
    var u = Im(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Im(u);
    }
  }
  function qc(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? qc(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Xi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Sr(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Sr(l.document);
    }
    return n;
  }
  function Mr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var Cr = li && "documentMode" in document && 11 >= document.documentMode, Qi = null, ko = null, Sn = null, Gn = !1;
  function zd(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Gn || Qi == null || Qi !== Sr(c) || (c = Qi, "selectionStart" in c && Mr(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), Sn && vn(Sn, c) || (Sn = c, c = Os(ko, "onSelect"), 0 < c.length && (n = new Dr(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = Qi)));
  }
  function ni(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Ln = {
    animationend: ni("Animation", "AnimationEnd"),
    animationiteration: ni("Animation", "AnimationIteration"),
    animationstart: ni("Animation", "AnimationStart"),
    transitionrun: ni("Transition", "TransitionRun"),
    transitionstart: ni("Transition", "TransitionStart"),
    transitioncancel: ni("Transition", "TransitionCancel"),
    transitionend: ni("Transition", "TransitionEnd")
  }, Fo = {}, Vi = {};
  li && (Vi = document.createElement("div").style, "AnimationEvent" in window || (delete Ln.animationend.animation, delete Ln.animationiteration.animation, delete Ln.animationstart.animation), "TransitionEvent" in window || delete Ln.transitionend.transition);
  function Dt(l) {
    if (Fo[l]) return Fo[l];
    if (!Ln[l]) return l;
    var n = Ln[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Vi)
        return Fo[l] = n[u];
    return l;
  }
  var Ur = Dt("animationend"), ey = Dt("animationiteration"), Md = Dt("animationstart"), Yc = Dt("transitionrun"), Hr = Dt("transitionstart"), vu = Dt("transitioncancel"), J0 = Dt("transitionend"), Su = /* @__PURE__ */ new Map(), Wo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Wo.push("scrollEnd");
  function ma(l, n) {
    Su.set(l, n), wi(n, [l]);
  }
  var Gc = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, Wt = [], Bl = 0, bn = 0;
  function Ja() {
    for (var l = Bl, n = bn = Bl = 0; n < l; ) {
      var u = Wt[n];
      Wt[n++] = null;
      var c = Wt[n];
      Wt[n++] = null;
      var r = Wt[n];
      Wt[n++] = null;
      var s = Wt[n];
      if (Wt[n++] = null, c !== null && r !== null) {
        var m = c.pending;
        m === null ? r.next = r : (r.next = m.next, m.next = r), c.pending = r;
      }
      s !== 0 && Cd(u, r, s);
    }
  }
  function Ka(l, n, u, c) {
    Wt[Bl++] = l, Wt[Bl++] = n, Wt[Bl++] = u, Wt[Bl++] = c, bn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function En(l, n, u, c) {
    return Ka(l, n, u, c), Nr(l);
  }
  function ui(l, n) {
    return Ka(l, null, null, n), Nr(l);
  }
  function Cd(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var r = !1, s = l.return; s !== null; )
      s.childLanes |= u, c = s.alternate, c !== null && (c.childLanes |= u), s.tag === 22 && (l = s.stateNode, l === null || l._visibility & 1 || (r = !0)), l = s, s = s.return;
    return l.tag === 3 ? (s = l.stateNode, r && n !== null && (r = 31 - Nl(u), l = s.hiddenUpdates, c = l[r], c === null ? l[r] = [n] : c.push(n), n.lane = u | 536870912), s) : null;
  }
  function Nr(l) {
    if (50 < Rf)
      throw Rf = 0, ys = null, Error(O(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ya = {};
  function K0(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ol(l, n, u, c) {
    return new K0(l, n, u, c);
  }
  function Lc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function ii(l, n) {
    var u = l.alternate;
    return u === null ? (u = ol(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function ty(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function Ud(l, n, u, c, r, s) {
    var m = 0;
    if (c = l, typeof l == "function") Lc(l) && (m = 1);
    else if (typeof l == "string")
      m = Op(
        l,
        u,
        ee.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case Fe:
          return l = ol(31, u, n, r), l.elementType = Fe, l.lanes = s, l;
        case et:
          return ci(u.children, r, s, n);
        case Ie:
          m = 8, r |= 24;
          break;
        case xe:
          return l = ol(12, u, n, r | 2), l.elementType = xe, l.lanes = s, l;
        case Be:
          return l = ol(13, u, n, r), l.elementType = Be, l.lanes = s, l;
        case dt:
          return l = ol(19, u, n, r), l.elementType = dt, l.lanes = s, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Me:
                m = 10;
                break e;
              case Gt:
                m = 9;
                break e;
              case Ue:
                m = 11;
                break e;
              case pe:
                m = 14;
                break e;
              case Ae:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            O(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = ol(m, u, n, r), n.elementType = l, n.type = c, n.lanes = s, n;
  }
  function ci(l, n, u, c) {
    return l = ol(7, l, c, n), l.lanes = u, l;
  }
  function Io(l, n, u) {
    return l = ol(6, l, null, n), l.lanes = u, l;
  }
  function ly(l) {
    var n = ol(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function Hd(l, n, u) {
    return n = ol(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var ay = /* @__PURE__ */ new WeakMap();
  function $a(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = ay.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: Tc(n)
      }, ay.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: Tc(n)
    };
  }
  var ka = [], Xc = 0, xr = null, hl = 0, Ma = [], pa = 0, Xn = null, Ca = 1, Qn = "";
  function Tn(l, n) {
    ka[Xc++] = hl, ka[Xc++] = xr, xr = l, hl = n;
  }
  function ny(l, n, u) {
    Ma[pa++] = Ca, Ma[pa++] = Qn, Ma[pa++] = Xn, Xn = l;
    var c = Ca;
    l = Qn;
    var r = 32 - Nl(c) - 1;
    c &= ~(1 << r), u += 1;
    var s = 32 - Nl(n) + r;
    if (30 < s) {
      var m = r - r % 5;
      s = (c & (1 << m) - 1).toString(32), c >>= m, r -= m, Ca = 1 << 32 - Nl(n) + r | u << r | c, Qn = s + l;
    } else
      Ca = 1 << s | u << r | c, Qn = l;
  }
  function Po(l) {
    l.return !== null && (Tn(l, 1), ny(l, 1, 0));
  }
  function Nd(l) {
    for (; l === xr; )
      xr = ka[--Xc], ka[Xc] = null, hl = ka[--Xc], ka[Xc] = null;
    for (; l === Xn; )
      Xn = Ma[--pa], Ma[pa] = null, Qn = Ma[--pa], Ma[pa] = null, Ca = Ma[--pa], Ma[pa] = null;
  }
  function Br(l, n) {
    Ma[pa++] = Ca, Ma[pa++] = Qn, Ma[pa++] = Xn, Ca = n.id, Qn = n.overflow, Xn = l;
  }
  var jl = null, Xt = null, ht = !1, bu = null, Dl = !1, Eu = Error(O(519));
  function An(l) {
    var n = Error(
      O(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw tf($a(n, l)), Eu;
  }
  function jr(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[xt] = l, n[da] = c, u) {
      case "dialog":
        st("cancel", n), st("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        st("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Uf.length; u++)
          st(Uf[u], n);
        break;
      case "source":
        st("error", n);
        break;
      case "img":
      case "image":
      case "link":
        st("error", n), st("load", n);
        break;
      case "details":
        st("toggle", n);
        break;
      case "input":
        st("invalid", n), Er(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        );
        break;
      case "select":
        st("invalid", n);
        break;
      case "textarea":
        st("invalid", n), xm(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || hp(n.textContent, u) ? (c.popover != null && (st("beforetoggle", n), st("toggle", n)), c.onScroll != null && st("scroll", n), c.onScrollEnd != null && st("scrollend", n), c.onClick != null && (n.onclick = Bn), n = !0) : n = !1, n || An(l, !0);
  }
  function ef(l) {
    for (jl = l.return; jl; )
      switch (jl.tag) {
        case 5:
        case 31:
        case 13:
          Dl = !1;
          return;
        case 27:
        case 3:
          Dl = !0;
          return;
        default:
          jl = jl.return;
      }
  }
  function Tu(l) {
    if (l !== jl) return !1;
    if (!ht) return ef(l), ht = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Nf(l.type, l.memoizedProps)), u = !u), u && Xt && An(l), ef(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(O(317));
      Xt = jh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(O(317));
      Xt = jh(l);
    } else
      n === 27 ? (n = Xt, eu(l.type) ? (l = _s, _s = null, Xt = l) : Xt = n) : Xt = jl ? Da(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Zi() {
    Xt = jl = null, ht = !1;
  }
  function uy() {
    var l = bu;
    return l !== null && (il === null ? il = l : il.push.apply(
      il,
      l
    ), bu = null), l;
  }
  function tf(l) {
    bu === null ? bu = [l] : bu.push(l);
  }
  var xd = S(null), oi = null, Vn = null;
  function ga(l, n, u) {
    le(xd, n._currentValue), n._currentValue = u;
  }
  function Zn(l) {
    l._currentValue = xd.current, w(xd);
  }
  function Bd(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function Au(l, n, u, c) {
    var r = l.child;
    for (r !== null && (r.return = l); r !== null; ) {
      var s = r.dependencies;
      if (s !== null) {
        var m = r.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var v = s;
          s = r;
          for (var R = 0; R < n.length; R++)
            if (v.context === n[R]) {
              s.lanes |= u, v = s.alternate, v !== null && (v.lanes |= u), Bd(
                s.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          s = v.next;
        }
      } else if (r.tag === 18) {
        if (m = r.return, m === null) throw Error(O(341));
        m.lanes |= u, s = m.alternate, s !== null && (s.lanes |= u), Bd(m, u, l), m = null;
      } else m = r.child;
      if (m !== null) m.return = r;
      else
        for (m = r; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (r = m.sibling, r !== null) {
            r.return = m.return, m = r;
            break;
          }
          m = m.return;
        }
      r = m;
    }
  }
  function wl(l, n, u, c) {
    l = null;
    for (var r = n, s = !1; r !== null; ) {
      if (!s) {
        if ((r.flags & 524288) !== 0) s = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var m = r.alternate;
        if (m === null) throw Error(O(387));
        if (m = m.memoizedProps, m !== null) {
          var v = r.type;
          ua(r.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (r === He.current) {
        if (m = r.alternate, m === null) throw Error(O(387));
        m.memoizedState.memoizedState !== r.memoizedState.memoizedState && (l !== null ? l.push(Cs) : l = [Cs]);
      }
      r = r.return;
    }
    l !== null && Au(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Qc(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ua(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Qe(l) {
    oi = l, Vn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function I(l) {
    return wr(oi, l);
  }
  function fi(l, n) {
    return oi === null && Qe(l), wr(l, n);
  }
  function wr(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Vn === null) {
      if (l === null) throw Error(O(308));
      Vn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Vn = Vn.next = n;
    return u;
  }
  var fl = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, iy = b.unstable_scheduleCallback, cy = b.unstable_NormalPriority, ml = {
    $$typeof: Me,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function qr() {
    return {
      controller: new fl(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Yr(l) {
    l.refCount--, l.refCount === 0 && iy(cy, function() {
      l.controller.abort();
    });
  }
  var Vc = null, Gr = 0, Ji = 0, bl = null;
  function Ct(l, n) {
    if (Vc === null) {
      var u = Vc = [];
      Gr = 0, Ji = zh(), bl = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Gr++, n.then(Lr, Lr), n;
  }
  function Lr() {
    if (--Gr === 0 && Vc !== null) {
      bl !== null && (bl.status = "fulfilled");
      var l = Vc;
      Vc = null, Ji = 0, bl = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Xr(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        u.push(r);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var r = 0; r < u.length; r++) (0, u[r])(n);
      },
      function(r) {
        for (c.status = "rejected", c.reason = r, r = 0; r < u.length; r++)
          (0, u[r])(void 0);
      }
    ), c;
  }
  var ri = C.S;
  C.S = function(l, n) {
    ep = Sl(), typeof n == "object" && n !== null && typeof n.then == "function" && Ct(l, n), ri !== null && ri(l, n);
  };
  var Fa = S(null);
  function Wa() {
    var l = Fa.current;
    return l !== null ? l : jt.pooledCache;
  }
  function lf(l, n) {
    n === null ? le(Fa, Fa.current) : le(Fa, n.pool);
  }
  function Zc() {
    var l = Wa();
    return l === null ? null : { parent: ml._currentValue, pool: l };
  }
  var Ki = Error(O(460)), Jc = Error(O(474)), af = Error(O(542)), Kc = { then: function() {
  } };
  function oy(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function fy(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Bn, Bn), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, jd(l), l;
      default:
        if (typeof n.status == "string") n.then(Bn, Bn);
        else {
          if (l = jt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(O(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "fulfilled", r.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "rejected", r.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, jd(l), l;
        }
        throw ki = n, Ki;
    }
  }
  function $i(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (ki = u, Ki) : u;
    }
  }
  var ki = null;
  function ry() {
    if (ki === null) throw Error(O(459));
    var l = ki;
    return ki = null, l;
  }
  function jd(l) {
    if (l === Ki || l === af)
      throw Error(O(483));
  }
  var Fi = null, $c = 0;
  function Qr(l) {
    var n = $c;
    return $c += 1, Fi === null && (Fi = []), fy(Fi, l, n);
  }
  function nf(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Vr(l, n) {
    throw n.$$typeof === D ? Error(O(525)) : (l = Object.prototype.toString.call(n), Error(
      O(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function $0(l) {
    function n(x, M) {
      if (l) {
        var j = x.deletions;
        j === null ? (x.deletions = [M], x.flags |= 16) : j.push(M);
      }
    }
    function u(x, M) {
      if (!l) return null;
      for (; M !== null; )
        n(x, M), M = M.sibling;
      return null;
    }
    function c(x) {
      for (var M = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? M.set(x.key, x) : M.set(x.index, x), x = x.sibling;
      return M;
    }
    function r(x, M) {
      return x = ii(x, M), x.index = 0, x.sibling = null, x;
    }
    function s(x, M, j) {
      return x.index = j, l ? (j = x.alternate, j !== null ? (j = j.index, j < M ? (x.flags |= 67108866, M) : j) : (x.flags |= 67108866, M)) : (x.flags |= 1048576, M);
    }
    function m(x) {
      return l && x.alternate === null && (x.flags |= 67108866), x;
    }
    function v(x, M, j, k) {
      return M === null || M.tag !== 6 ? (M = Io(j, x.mode, k), M.return = x, M) : (M = r(M, j), M.return = x, M);
    }
    function R(x, M, j, k) {
      var ze = j.type;
      return ze === et ? Z(
        x,
        M,
        j.props.children,
        k,
        j.key
      ) : M !== null && (M.elementType === ze || typeof ze == "object" && ze !== null && ze.$$typeof === Ae && $i(ze) === M.type) ? (M = r(M, j.props), nf(M, j), M.return = x, M) : (M = Ud(
        j.type,
        j.key,
        j.props,
        null,
        x.mode,
        k
      ), nf(M, j), M.return = x, M);
    }
    function q(x, M, j, k) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== j.containerInfo || M.stateNode.implementation !== j.implementation ? (M = Hd(j, x.mode, k), M.return = x, M) : (M = r(M, j.children || []), M.return = x, M);
    }
    function Z(x, M, j, k, ze) {
      return M === null || M.tag !== 7 ? (M = ci(
        j,
        x.mode,
        k,
        ze
      ), M.return = x, M) : (M = r(M, j), M.return = x, M);
    }
    function F(x, M, j) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return M = Io(
          "" + M,
          x.mode,
          j
        ), M.return = x, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case te:
            return j = Ud(
              M.type,
              M.key,
              M.props,
              null,
              x.mode,
              j
            ), nf(j, M), j.return = x, j;
          case De:
            return M = Hd(
              M,
              x.mode,
              j
            ), M.return = x, M;
          case Ae:
            return M = $i(M), F(x, M, j);
        }
        if (Lt(M) || Te(M))
          return M = ci(
            M,
            x.mode,
            j,
            null
          ), M.return = x, M;
        if (typeof M.then == "function")
          return F(x, Qr(M), j);
        if (M.$$typeof === Me)
          return F(
            x,
            fi(x, M),
            j
          );
        Vr(x, M);
      }
      return null;
    }
    function Y(x, M, j, k) {
      var ze = M !== null ? M.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return ze !== null ? null : v(x, M, "" + j, k);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case te:
            return j.key === ze ? R(x, M, j, k) : null;
          case De:
            return j.key === ze ? q(x, M, j, k) : null;
          case Ae:
            return j = $i(j), Y(x, M, j, k);
        }
        if (Lt(j) || Te(j))
          return ze !== null ? null : Z(x, M, j, k, null);
        if (typeof j.then == "function")
          return Y(
            x,
            M,
            Qr(j),
            k
          );
        if (j.$$typeof === Me)
          return Y(
            x,
            M,
            fi(x, j),
            k
          );
        Vr(x, j);
      }
      return null;
    }
    function V(x, M, j, k, ze) {
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return x = x.get(j) || null, v(M, x, "" + k, ze);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case te:
            return x = x.get(
              k.key === null ? j : k.key
            ) || null, R(M, x, k, ze);
          case De:
            return x = x.get(
              k.key === null ? j : k.key
            ) || null, q(M, x, k, ze);
          case Ae:
            return k = $i(k), V(
              x,
              M,
              j,
              k,
              ze
            );
        }
        if (Lt(k) || Te(k))
          return x = x.get(j) || null, Z(M, x, k, ze, null);
        if (typeof k.then == "function")
          return V(
            x,
            M,
            j,
            Qr(k),
            ze
          );
        if (k.$$typeof === Me)
          return V(
            x,
            M,
            j,
            fi(M, k),
            ze
          );
        Vr(M, k);
      }
      return null;
    }
    function ge(x, M, j, k) {
      for (var ze = null, St = null, Ee = M, ke = M = 0, lt = null; Ee !== null && ke < j.length; ke++) {
        Ee.index > ke ? (lt = Ee, Ee = null) : lt = Ee.sibling;
        var Ot = Y(
          x,
          Ee,
          j[ke],
          k
        );
        if (Ot === null) {
          Ee === null && (Ee = lt);
          break;
        }
        l && Ee && Ot.alternate === null && n(x, Ee), M = s(Ot, M, ke), St === null ? ze = Ot : St.sibling = Ot, St = Ot, Ee = lt;
      }
      if (ke === j.length)
        return u(x, Ee), ht && Tn(x, ke), ze;
      if (Ee === null) {
        for (; ke < j.length; ke++)
          Ee = F(x, j[ke], k), Ee !== null && (M = s(
            Ee,
            M,
            ke
          ), St === null ? ze = Ee : St.sibling = Ee, St = Ee);
        return ht && Tn(x, ke), ze;
      }
      for (Ee = c(Ee); ke < j.length; ke++)
        lt = V(
          Ee,
          x,
          ke,
          j[ke],
          k
        ), lt !== null && (l && lt.alternate !== null && Ee.delete(
          lt.key === null ? ke : lt.key
        ), M = s(
          lt,
          M,
          ke
        ), St === null ? ze = lt : St.sibling = lt, St = lt);
      return l && Ee.forEach(function(au) {
        return n(x, au);
      }), ht && Tn(x, ke), ze;
    }
    function we(x, M, j, k) {
      if (j == null) throw Error(O(151));
      for (var ze = null, St = null, Ee = M, ke = M = 0, lt = null, Ot = j.next(); Ee !== null && !Ot.done; ke++, Ot = j.next()) {
        Ee.index > ke ? (lt = Ee, Ee = null) : lt = Ee.sibling;
        var au = Y(x, Ee, Ot.value, k);
        if (au === null) {
          Ee === null && (Ee = lt);
          break;
        }
        l && Ee && au.alternate === null && n(x, Ee), M = s(au, M, ke), St === null ? ze = au : St.sibling = au, St = au, Ee = lt;
      }
      if (Ot.done)
        return u(x, Ee), ht && Tn(x, ke), ze;
      if (Ee === null) {
        for (; !Ot.done; ke++, Ot = j.next())
          Ot = F(x, Ot.value, k), Ot !== null && (M = s(Ot, M, ke), St === null ? ze = Ot : St.sibling = Ot, St = Ot);
        return ht && Tn(x, ke), ze;
      }
      for (Ee = c(Ee); !Ot.done; ke++, Ot = j.next())
        Ot = V(Ee, x, ke, Ot.value, k), Ot !== null && (l && Ot.alternate !== null && Ee.delete(Ot.key === null ? ke : Ot.key), M = s(Ot, M, ke), St === null ? ze = Ot : St.sibling = Ot, St = Ot);
      return l && Ee.forEach(function(Ig) {
        return n(x, Ig);
      }), ht && Tn(x, ke), ze;
    }
    function qt(x, M, j, k) {
      if (typeof j == "object" && j !== null && j.type === et && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case te:
            e: {
              for (var ze = j.key; M !== null; ) {
                if (M.key === ze) {
                  if (ze = j.type, ze === et) {
                    if (M.tag === 7) {
                      u(
                        x,
                        M.sibling
                      ), k = r(
                        M,
                        j.props.children
                      ), k.return = x, x = k;
                      break e;
                    }
                  } else if (M.elementType === ze || typeof ze == "object" && ze !== null && ze.$$typeof === Ae && $i(ze) === M.type) {
                    u(
                      x,
                      M.sibling
                    ), k = r(M, j.props), nf(k, j), k.return = x, x = k;
                    break e;
                  }
                  u(x, M);
                  break;
                } else n(x, M);
                M = M.sibling;
              }
              j.type === et ? (k = ci(
                j.props.children,
                x.mode,
                k,
                j.key
              ), k.return = x, x = k) : (k = Ud(
                j.type,
                j.key,
                j.props,
                null,
                x.mode,
                k
              ), nf(k, j), k.return = x, x = k);
            }
            return m(x);
          case De:
            e: {
              for (ze = j.key; M !== null; ) {
                if (M.key === ze)
                  if (M.tag === 4 && M.stateNode.containerInfo === j.containerInfo && M.stateNode.implementation === j.implementation) {
                    u(
                      x,
                      M.sibling
                    ), k = r(M, j.children || []), k.return = x, x = k;
                    break e;
                  } else {
                    u(x, M);
                    break;
                  }
                else n(x, M);
                M = M.sibling;
              }
              k = Hd(j, x.mode, k), k.return = x, x = k;
            }
            return m(x);
          case Ae:
            return j = $i(j), qt(
              x,
              M,
              j,
              k
            );
        }
        if (Lt(j))
          return ge(
            x,
            M,
            j,
            k
          );
        if (Te(j)) {
          if (ze = Te(j), typeof ze != "function") throw Error(O(150));
          return j = ze.call(j), we(
            x,
            M,
            j,
            k
          );
        }
        if (typeof j.then == "function")
          return qt(
            x,
            M,
            Qr(j),
            k
          );
        if (j.$$typeof === Me)
          return qt(
            x,
            M,
            fi(x, j),
            k
          );
        Vr(x, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, M !== null && M.tag === 6 ? (u(x, M.sibling), k = r(M, j), k.return = x, x = k) : (u(x, M), k = Io(j, x.mode, k), k.return = x, x = k), m(x)) : u(x, M);
    }
    return function(x, M, j, k) {
      try {
        $c = 0;
        var ze = qt(
          x,
          M,
          j,
          k
        );
        return Fi = null, ze;
      } catch (Ee) {
        if (Ee === Ki || Ee === af) throw Ee;
        var St = ol(29, Ee, null, x.mode);
        return St.lanes = k, St.return = x, St;
      }
    };
  }
  var Wi = $0(!0), sy = $0(!1), si = !1;
  function Zr(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function wd(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function di(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ia(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (At & 2) !== 0) {
      var r = c.pending;
      return r === null ? n.next = n : (n.next = r.next, r.next = n), c.pending = n, n = Nr(l), Cd(l, null, u), n;
    }
    return Ka(l, c, n, u), Nr(l);
  }
  function Ii(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, su(l, u);
    }
  }
  function qd(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var r = null, s = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          s === null ? r = s = m : s = s.next = m, u = u.next;
        } while (u !== null);
        s === null ? r = s = n : s = s.next = n;
      } else r = s = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: s,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var dy = !1;
  function Pi() {
    if (dy) {
      var l = bl;
      if (l !== null) throw l;
    }
  }
  function Ou(l, n, u, c) {
    dy = !1;
    var r = l.updateQueue;
    si = !1;
    var s = r.firstBaseUpdate, m = r.lastBaseUpdate, v = r.shared.pending;
    if (v !== null) {
      r.shared.pending = null;
      var R = v, q = R.next;
      R.next = null, m === null ? s = q : m.next = q, m = R;
      var Z = l.alternate;
      Z !== null && (Z = Z.updateQueue, v = Z.lastBaseUpdate, v !== m && (v === null ? Z.firstBaseUpdate = q : v.next = q, Z.lastBaseUpdate = R));
    }
    if (s !== null) {
      var F = r.baseState;
      m = 0, Z = q = R = null, v = s;
      do {
        var Y = v.lane & -536870913, V = Y !== v.lane;
        if (V ? (ft & Y) === Y : (c & Y) === Y) {
          Y !== 0 && Y === Ji && (dy = !0), Z !== null && (Z = Z.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var ge = l, we = v;
            Y = n;
            var qt = u;
            switch (we.tag) {
              case 1:
                if (ge = we.payload, typeof ge == "function") {
                  F = ge.call(qt, F, Y);
                  break e;
                }
                F = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = we.payload, Y = typeof ge == "function" ? ge.call(qt, F, Y) : ge, Y == null) break e;
                F = B({}, F, Y);
                break e;
              case 2:
                si = !0;
            }
          }
          Y = v.callback, Y !== null && (l.flags |= 64, V && (l.flags |= 8192), V = r.callbacks, V === null ? r.callbacks = [Y] : V.push(Y));
        } else
          V = {
            lane: Y,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, Z === null ? (q = Z = V, R = F) : Z = Z.next = V, m |= Y;
        if (v = v.next, v === null) {
          if (v = r.shared.pending, v === null)
            break;
          V = v, v = V.next, V.next = null, r.lastBaseUpdate = V, r.shared.pending = null;
        }
      } while (!0);
      Z === null && (R = F), r.baseState = R, r.firstBaseUpdate = q, r.lastBaseUpdate = Z, s === null && (r.shared.lanes = 0), In |= m, l.lanes = m, l.memoizedState = F;
    }
  }
  function Yd(l, n) {
    if (typeof l != "function")
      throw Error(O(191, l));
    l.call(n);
  }
  function ec(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Yd(u[l], n);
  }
  var _l = S(null), kc = S(0);
  function k0(l, n) {
    l = Wn, le(kc, l), le(_l, n), Wn = l | n.baseLanes;
  }
  function Jr() {
    le(kc, Wn), le(_l, _l.current);
  }
  function uf() {
    Wn = kc.current, w(_l), w(kc);
  }
  var va = S(null), Pa = null;
  function Ru(l) {
    var n = l.alternate;
    le(It, It.current & 1), le(va, l), Pa === null && (n === null || _l.current !== null || n.memoizedState !== null) && (Pa = l);
  }
  function cf(l) {
    le(It, It.current), le(va, l), Pa === null && (Pa = l);
  }
  function Gd(l) {
    l.tag === 22 ? (le(It, It.current), le(va, l), Pa === null && (Pa = l)) : Jn();
  }
  function Jn() {
    le(It, It.current), le(va, va.current);
  }
  function Sa(l) {
    w(va), Pa === l && (Pa = null), w(It);
  }
  var It = S(0);
  function of(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || _n(u) || dc(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Du = 0, We = null, Ut = null, yl = null, Fc = !1, Wc = !1, hi = !1, Kr = 0, ff = 0, tc = null, F0 = 0;
  function nl() {
    throw Error(O(321));
  }
  function mi(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!ua(l[u], n[u])) return !1;
    return !0;
  }
  function $r(l, n, u, c, r, s) {
    return Du = s, We = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, C.H = l === null || l.memoizedState === null ? ng : ah, hi = !1, s = u(c, r), hi = !1, Wc && (s = W0(
      n,
      u,
      c,
      r
    )), Ld(l), s;
  }
  function Ld(l) {
    C.H = as;
    var n = Ut !== null && Ut.next !== null;
    if (Du = 0, yl = Ut = We = null, Fc = !1, ff = 0, tc = null, n) throw Error(O(300));
    l === null || pl || (l = l.dependencies, l !== null && Qc(l) && (pl = !0));
  }
  function W0(l, n, u, c) {
    We = l;
    var r = 0;
    do {
      if (Wc && (tc = null), ff = 0, Wc = !1, 25 <= r) throw Error(O(301));
      if (r += 1, yl = Ut = null, l.updateQueue != null) {
        var s = l.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      C.H = ug, s = n(u, c);
    } while (Wc);
    return s;
  }
  function c1() {
    var l = C.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Pc(n) : n, l = l.useState()[0], (Ut !== null ? Ut.memoizedState : null) !== l && (We.flags |= 1024), n;
  }
  function Xd() {
    var l = Kr !== 0;
    return Kr = 0, l;
  }
  function Ic(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function kr(l) {
    if (Fc) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Fc = !1;
    }
    Du = 0, yl = Ut = We = null, Wc = !1, ff = Kr = 0, tc = null;
  }
  function ql() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return yl === null ? We.memoizedState = yl = l : yl = yl.next = l, yl;
  }
  function rl() {
    if (Ut === null) {
      var l = We.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Ut.next;
    var n = yl === null ? We.memoizedState : yl.next;
    if (n !== null)
      yl = n, Ut = l;
    else {
      if (l === null)
        throw We.alternate === null ? Error(O(467)) : Error(O(310));
      Ut = l, l = {
        memoizedState: Ut.memoizedState,
        baseState: Ut.baseState,
        baseQueue: Ut.baseQueue,
        queue: Ut.queue,
        next: null
      }, yl === null ? We.memoizedState = yl = l : yl = yl.next = l;
    }
    return yl;
  }
  function Fr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Pc(l) {
    var n = ff;
    return ff += 1, tc === null && (tc = []), l = fy(tc, l, n), n = We, (yl === null ? n.memoizedState : yl.next) === null && (n = n.alternate, C.H = n === null || n.memoizedState === null ? ng : ah), l;
  }
  function rf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Pc(l);
      if (l.$$typeof === Me) return I(l);
    }
    throw Error(O(438, String(l)));
  }
  function Qd(l) {
    var n = null, u = We.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = We.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Fr(), We.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = me;
    return n.index++, u;
  }
  function _u(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function zu(l) {
    var n = rl();
    return Vd(n, Ut, l);
  }
  function Vd(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(O(311));
    c.lastRenderedReducer = u;
    var r = l.baseQueue, s = c.pending;
    if (s !== null) {
      if (r !== null) {
        var m = r.next;
        r.next = s.next, s.next = m;
      }
      n.baseQueue = r = s, c.pending = null;
    }
    if (s = l.baseState, r === null) l.memoizedState = s;
    else {
      n = r.next;
      var v = m = null, R = null, q = n, Z = !1;
      do {
        var F = q.lane & -536870913;
        if (F !== q.lane ? (ft & F) === F : (Du & F) === F) {
          var Y = q.revertLane;
          if (Y === 0)
            R !== null && (R = R.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }), F === Ji && (Z = !0);
          else if ((Du & Y) === Y) {
            q = q.next, Y === Ji && (Z = !0);
            continue;
          } else
            F = {
              lane: 0,
              revertLane: q.revertLane,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, R === null ? (v = R = F, m = s) : R = R.next = F, We.lanes |= Y, In |= Y;
          F = q.action, hi && u(s, F), s = q.hasEagerState ? q.eagerState : u(s, F);
        } else
          Y = {
            lane: F,
            revertLane: q.revertLane,
            gesture: q.gesture,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, R === null ? (v = R = Y, m = s) : R = R.next = Y, We.lanes |= F, In |= F;
        q = q.next;
      } while (q !== null && q !== n);
      if (R === null ? m = s : R.next = v, !ua(s, l.memoizedState) && (pl = !0, Z && (u = bl, u !== null)))
        throw u;
      l.memoizedState = s, l.baseState = m, l.baseQueue = R, c.lastRenderedState = s;
    }
    return r === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Zd(l) {
    var n = rl(), u = n.queue;
    if (u === null) throw Error(O(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, r = u.pending, s = n.memoizedState;
    if (r !== null) {
      u.pending = null;
      var m = r = r.next;
      do
        s = l(s, m.action), m = m.next;
      while (m !== r);
      ua(s, n.memoizedState) || (pl = !0), n.memoizedState = s, n.baseQueue === null && (n.baseState = s), u.lastRenderedState = s;
    }
    return [s, c];
  }
  function hy(l, n, u) {
    var c = We, r = rl(), s = ht;
    if (s) {
      if (u === void 0) throw Error(O(407));
      u = u();
    } else u = n();
    var m = !ua(
      (Ut || r).memoizedState,
      u
    );
    if (m && (r.memoizedState = u, pl = !0), r = r.queue, Fd(Jd.bind(null, c, r, l), [
      l
    ]), r.getSnapshot !== n || m || yl !== null && yl.memoizedState.tag & 1) {
      if (c.flags |= 2048, to(
        9,
        { destroy: void 0 },
        my.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), jt === null) throw Error(O(349));
      s || (Du & 127) !== 0 || Wr(c, n, u);
    }
    return u;
  }
  function Wr(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = We.updateQueue, n === null ? (n = Fr(), We.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function my(l, n, u, c) {
    n.value = u, n.getSnapshot = c, Kd(n) && $d(l);
  }
  function Jd(l, n, u) {
    return u(function() {
      Kd(n) && $d(l);
    });
  }
  function Kd(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !ua(l, u);
    } catch {
      return !0;
    }
  }
  function $d(l) {
    var n = ui(l, 2);
    n !== null && Ra(n, l, 2);
  }
  function yy(l) {
    var n = ql();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), hi) {
        Xa(!0);
        try {
          u();
        } finally {
          Xa(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _u,
      lastRenderedState: l
    }, n;
  }
  function Yl(l, n, u, c) {
    return l.baseState = u, Vd(
      l,
      Ut,
      typeof c == "function" ? c : _u
    );
  }
  function I0(l, n, u, c, r) {
    if (ls(l)) throw Error(O(485));
    if (l = n.action, l !== null) {
      var s = {
        payload: r,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          s.listeners.push(m);
        }
      };
      C.T !== null ? u(!0) : s.isTransition = !1, c(s), u = n.pending, u === null ? (s.next = n.pending = s, py(n, s)) : (s.next = u.next, n.pending = u.next = s);
    }
  }
  function py(l, n) {
    var u = n.action, c = n.payload, r = l.state;
    if (n.isTransition) {
      var s = C.T, m = {};
      C.T = m;
      try {
        var v = u(r, c), R = C.S;
        R !== null && R(m, v), gy(l, n, v);
      } catch (q) {
        eo(l, n, q);
      } finally {
        s !== null && m.types !== null && (s.types = m.types), C.T = s;
      }
    } else
      try {
        s = u(r, c), gy(l, n, s);
      } catch (q) {
        eo(l, n, q);
      }
  }
  function gy(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        vy(l, n, c);
      },
      function(c) {
        return eo(l, n, c);
      }
    ) : vy(l, n, u);
  }
  function vy(l, n, u) {
    n.status = "fulfilled", n.value = u, Sy(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, py(l, u)));
  }
  function eo(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, Sy(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function Sy(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Ir(l, n) {
    return n;
  }
  function by(l, n) {
    if (ht) {
      var u = jt.formState;
      if (u !== null) {
        e: {
          var c = We;
          if (ht) {
            if (Xt) {
              t: {
                for (var r = Xt, s = Dl; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break t;
                  }
                  if (r = Da(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break t;
                  }
                }
                s = r.data, r = s === "F!" || s === "F" ? r : null;
              }
              if (r) {
                Xt = Da(
                  r.nextSibling
                ), c = r.data === "F!";
                break e;
              }
            }
            An(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = ql(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ir,
      lastRenderedState: n
    }, u.queue = c, u = th.bind(
      null,
      We,
      c
    ), c.dispatch = u, c = yy(!1), s = lc.bind(
      null,
      We,
      !1,
      c.queue
    ), c = ql(), r = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = r, u = I0.bind(
      null,
      We,
      r,
      s,
      u
    ), r.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function P0(l) {
    var n = rl();
    return Pr(n, Ut, l);
  }
  function Pr(l, n, u) {
    if (n = Vd(
      l,
      n,
      Ir
    )[0], l = zu(_u)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Pc(n);
      } catch (m) {
        throw m === Ki ? af : m;
      }
    else c = n;
    n = rl();
    var r = n.queue, s = r.dispatch;
    return u !== n.memoizedState && (We.flags |= 2048, to(
      9,
      { destroy: void 0 },
      Ey.bind(null, r, u),
      null
    )), [c, s, l];
  }
  function Ey(l, n) {
    l.action = n;
  }
  function Ty(l) {
    var n = rl(), u = Ut;
    if (u !== null)
      return Pr(n, u, l);
    rl(), n = n.memoizedState, u = rl();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function to(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = We.updateQueue, n === null && (n = Fr(), We.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Ay() {
    return rl().memoizedState;
  }
  function sf(l, n, u, c) {
    var r = ql();
    We.flags |= l, r.memoizedState = to(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function df(l, n, u, c) {
    var r = rl();
    c = c === void 0 ? null : c;
    var s = r.memoizedState.inst;
    Ut !== null && c !== null && mi(c, Ut.memoizedState.deps) ? r.memoizedState = to(n, s, u, c) : (We.flags |= l, r.memoizedState = to(
      1 | n,
      s,
      u,
      c
    ));
  }
  function kd(l, n) {
    sf(8390656, 8, l, n);
  }
  function Fd(l, n) {
    df(2048, 8, l, n);
  }
  function Oy(l) {
    We.flags |= 4;
    var n = We.updateQueue;
    if (n === null)
      n = Fr(), We.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function es(l) {
    var n = rl().memoizedState;
    return Oy({ ref: n, nextImpl: l }), function() {
      if ((At & 2) !== 0) throw Error(O(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Wd(l, n) {
    return df(4, 2, l, n);
  }
  function Ry(l, n) {
    return df(4, 4, l, n);
  }
  function Id(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Dy(l, n, u) {
    u = u != null ? u.concat([l]) : null, df(4, 4, Id.bind(null, n, l), u);
  }
  function Kn() {
  }
  function Pd(l, n) {
    var u = rl();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && mi(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function eg(l, n) {
    var u = rl();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && mi(n, c[1]))
      return c[0];
    if (c = l(), hi) {
      Xa(!0);
      try {
        l();
      } finally {
        Xa(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function ts(l, n, u) {
    return u === void 0 || (Du & 1073741824) !== 0 && (ft & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = yg(), We.lanes |= l, In |= l, u);
  }
  function Mu(l, n, u, c) {
    return ua(u, n) ? u : _l.current !== null ? (l = ts(l, u, c), ua(l, n) || (pl = !0), l) : (Du & 42) === 0 || (Du & 1073741824) !== 0 && (ft & 261930) === 0 ? (pl = !0, l.memoizedState = u) : (l = yg(), We.lanes |= l, In |= l, n);
  }
  function eh(l, n, u, c, r) {
    var s = K.p;
    K.p = s !== 0 && 8 > s ? s : 8;
    var m = C.T, v = {};
    C.T = v, lc(l, !1, n, u);
    try {
      var R = r(), q = C.S;
      if (q !== null && q(v, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var Z = Xr(
          R,
          c
        );
        yi(
          l,
          n,
          Z,
          xa(l)
        );
      } else
        yi(
          l,
          n,
          c,
          xa(l)
        );
    } catch (F) {
      yi(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: F },
        xa()
      );
    } finally {
      K.p = s, m !== null && v.types !== null && (m.types = v.types), C.T = m;
    }
  }
  function tg() {
  }
  function hf(l, n, u, c) {
    if (l.tag !== 5) throw Error(O(476));
    var r = mf(l).queue;
    eh(
      l,
      r,
      n,
      ne,
      u === null ? tg : function() {
        return Bt(l), u(c);
      }
    );
  }
  function mf(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ne,
      baseState: ne,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _u,
        lastRenderedState: ne
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _u,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function Bt(l) {
    var n = mf(l);
    n.next === null && (n = l.alternate.memoizedState), yi(
      l,
      n.next.queue,
      {},
      xa()
    );
  }
  function _y() {
    return I(Cs);
  }
  function lg() {
    return rl().memoizedState;
  }
  function zy() {
    return rl().memoizedState;
  }
  function Cu(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = xa();
          l = di(u);
          var c = Ia(n, l, u);
          c !== null && (Ra(c, n, u), Ii(c, n, u)), n = { cache: qr() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function ag(l, n, u) {
    var c = xa();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ls(l) ? lh(n, u) : (u = En(l, n, u, c), u !== null && (Ra(u, l, c), My(u, n, c)));
  }
  function th(l, n, u) {
    var c = xa();
    yi(l, n, u, c);
  }
  function yi(l, n, u, c) {
    var r = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ls(l)) lh(n, r);
    else {
      var s = l.alternate;
      if (l.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null))
        try {
          var m = n.lastRenderedState, v = s(m, u);
          if (r.hasEagerState = !0, r.eagerState = v, ua(v, m))
            return Ka(l, n, r, 0), jt === null && Ja(), !1;
        } catch {
        }
      if (u = En(l, n, r, c), u !== null)
        return Ra(u, l, c), My(u, n, c), !0;
    }
    return !1;
  }
  function lc(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: zh(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ls(l)) {
      if (n) throw Error(O(479));
    } else
      n = En(
        l,
        u,
        c,
        2
      ), n !== null && Ra(n, l, 2);
  }
  function ls(l) {
    var n = l.alternate;
    return l === We || n !== null && n === We;
  }
  function lh(l, n) {
    Wc = Fc = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function My(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, su(l, u);
    }
  }
  var as = {
    readContext: I,
    use: rf,
    useCallback: nl,
    useContext: nl,
    useEffect: nl,
    useImperativeHandle: nl,
    useLayoutEffect: nl,
    useInsertionEffect: nl,
    useMemo: nl,
    useReducer: nl,
    useRef: nl,
    useState: nl,
    useDebugValue: nl,
    useDeferredValue: nl,
    useTransition: nl,
    useSyncExternalStore: nl,
    useId: nl,
    useHostTransitionStatus: nl,
    useFormState: nl,
    useActionState: nl,
    useOptimistic: nl,
    useMemoCache: nl,
    useCacheRefresh: nl
  };
  as.useEffectEvent = nl;
  var ng = {
    readContext: I,
    use: rf,
    useCallback: function(l, n) {
      return ql().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: I,
    useEffect: kd,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, sf(
        4194308,
        4,
        Id.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return sf(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      sf(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = ql();
      n = n === void 0 ? null : n;
      var c = l();
      if (hi) {
        Xa(!0);
        try {
          l();
        } finally {
          Xa(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = ql();
      if (u !== void 0) {
        var r = u(n);
        if (hi) {
          Xa(!0);
          try {
            u(n);
          } finally {
            Xa(!1);
          }
        }
      } else r = n;
      return c.memoizedState = c.baseState = r, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: r
      }, c.queue = l, l = l.dispatch = ag.bind(
        null,
        We,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = ql();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = yy(l);
      var n = l.queue, u = th.bind(null, We, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Kn,
    useDeferredValue: function(l, n) {
      var u = ql();
      return ts(u, l, n);
    },
    useTransition: function() {
      var l = yy(!1);
      return l = eh.bind(
        null,
        We,
        l.queue,
        !0,
        !1
      ), ql().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = We, r = ql();
      if (ht) {
        if (u === void 0)
          throw Error(O(407));
        u = u();
      } else {
        if (u = n(), jt === null)
          throw Error(O(349));
        (ft & 127) !== 0 || Wr(c, n, u);
      }
      r.memoizedState = u;
      var s = { value: u, getSnapshot: n };
      return r.queue = s, kd(Jd.bind(null, c, s, l), [
        l
      ]), c.flags |= 2048, to(
        9,
        { destroy: void 0 },
        my.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = ql(), n = jt.identifierPrefix;
      if (ht) {
        var u = Qn, c = Ca;
        u = (c & ~(1 << 32 - Nl(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Kr++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = F0++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: _y,
    useFormState: by,
    useActionState: by,
    useOptimistic: function(l) {
      var n = ql();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = lc.bind(
        null,
        We,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Qd,
    useCacheRefresh: function() {
      return ql().memoizedState = Cu.bind(
        null,
        We
      );
    },
    useEffectEvent: function(l) {
      var n = ql(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((At & 2) !== 0)
          throw Error(O(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, ah = {
    readContext: I,
    use: rf,
    useCallback: Pd,
    useContext: I,
    useEffect: Fd,
    useImperativeHandle: Dy,
    useInsertionEffect: Wd,
    useLayoutEffect: Ry,
    useMemo: eg,
    useReducer: zu,
    useRef: Ay,
    useState: function() {
      return zu(_u);
    },
    useDebugValue: Kn,
    useDeferredValue: function(l, n) {
      var u = rl();
      return Mu(
        u,
        Ut.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = zu(_u)[0], n = rl().memoizedState;
      return [
        typeof l == "boolean" ? l : Pc(l),
        n
      ];
    },
    useSyncExternalStore: hy,
    useId: lg,
    useHostTransitionStatus: _y,
    useFormState: P0,
    useActionState: P0,
    useOptimistic: function(l, n) {
      var u = rl();
      return Yl(u, Ut, l, n);
    },
    useMemoCache: Qd,
    useCacheRefresh: zy
  };
  ah.useEffectEvent = es;
  var ug = {
    readContext: I,
    use: rf,
    useCallback: Pd,
    useContext: I,
    useEffect: Fd,
    useImperativeHandle: Dy,
    useInsertionEffect: Wd,
    useLayoutEffect: Ry,
    useMemo: eg,
    useReducer: Zd,
    useRef: Ay,
    useState: function() {
      return Zd(_u);
    },
    useDebugValue: Kn,
    useDeferredValue: function(l, n) {
      var u = rl();
      return Ut === null ? ts(u, l, n) : Mu(
        u,
        Ut.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Zd(_u)[0], n = rl().memoizedState;
      return [
        typeof l == "boolean" ? l : Pc(l),
        n
      ];
    },
    useSyncExternalStore: hy,
    useId: lg,
    useHostTransitionStatus: _y,
    useFormState: Ty,
    useActionState: Ty,
    useOptimistic: function(l, n) {
      var u = rl();
      return Ut !== null ? Yl(u, Ut, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Qd,
    useCacheRefresh: zy
  };
  ug.useEffectEvent = es;
  function lo(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : B({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var On = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = xa(), r = di(c);
      r.payload = n, u != null && (r.callback = u), n = Ia(l, r, c), n !== null && (Ra(n, l, c), Ii(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = xa(), r = di(c);
      r.tag = 1, r.payload = n, u != null && (r.callback = u), n = Ia(l, r, c), n !== null && (Ra(n, l, c), Ii(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = xa(), c = di(u);
      c.tag = 2, n != null && (c.callback = n), n = Ia(l, c, u), n !== null && (Ra(n, l, u), Ii(n, l, u));
    }
  };
  function Cy(l, n, u, c, r, s, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, s, m) : n.prototype && n.prototype.isPureReactComponent ? !vn(u, c) || !vn(r, s) : !0;
  }
  function ig(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && On.enqueueReplaceState(n, n.state, null);
  }
  function ac(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = B({}, u));
      for (var r in l)
        u[r] === void 0 && (u[r] = l[r]);
    }
    return u;
  }
  function nh(l) {
    Gc(l);
  }
  function Uy(l) {
    console.error(l);
  }
  function uh(l) {
    Gc(l);
  }
  function yf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function ns(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function Hy(l, n, u) {
    return u = di(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      yf(l, n);
    }, u;
  }
  function Ny(l) {
    return l = di(l), l.tag = 3, l;
  }
  function xy(l, n, u, c) {
    var r = u.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = c.value;
      l.payload = function() {
        return r(s);
      }, l.callback = function() {
        ns(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      ns(n, u, c), typeof r != "function" && (Pt === null ? Pt = /* @__PURE__ */ new Set([this]) : Pt.add(this));
      var v = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function o1(l, n, u, c, r) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && wl(
        n,
        u,
        r,
        !0
      ), u = va.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Pa === null ? Oh() : u.alternate === null && Vt === 0 && (Vt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = r, c === Kc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), vs(l, c, r)), !1;
          case 22:
            return u.flags |= 65536, c === Kc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), vs(l, c, r)), !1;
        }
        throw Error(O(435, u.tag));
      }
      return vs(l, c, r), Oh(), !1;
    }
    if (ht)
      return n = va.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = r, c !== Eu && (l = Error(O(422), { cause: c }), tf($a(l, u)))) : (c !== Eu && (n = Error(O(423), {
        cause: c
      }), tf(
        $a(n, u)
      )), l = l.current.alternate, l.flags |= 65536, r &= -r, l.lanes |= r, c = $a(c, u), r = Hy(
        l.stateNode,
        c,
        r
      ), qd(l, r), Vt !== 4 && (Vt = 2)), !1;
    var s = Error(O(520), { cause: c });
    if (s = $a(s, u), ms === null ? ms = [s] : ms.push(s), Vt !== 4 && (Vt = 2), n === null) return !0;
    c = $a(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = r & -r, u.lanes |= l, l = Hy(u.stateNode, c, l), qd(u, l), !1;
        case 1:
          if (n = u.type, s = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Pt === null || !Pt.has(s))))
            return u.flags |= 65536, r &= -r, u.lanes |= r, r = Ny(r), xy(
              r,
              l,
              u,
              c
            ), qd(u, r), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var ih = Error(O(461)), pl = !1;
  function kt(l, n, u, c) {
    n.child = l === null ? sy(n, null, u, c) : Wi(
      n,
      l.child,
      u,
      c
    );
  }
  function By(l, n, u, c, r) {
    u = u.render;
    var s = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var v in c)
        v !== "ref" && (m[v] = c[v]);
    } else m = c;
    return Qe(n), c = $r(
      l,
      n,
      u,
      m,
      s,
      r
    ), v = Xd(), l !== null && !pl ? (Ic(l, n, r), ln(l, n, r)) : (ht && v && Po(n), n.flags |= 1, kt(l, n, c, r), n.child);
  }
  function jy(l, n, u, c, r) {
    if (l === null) {
      var s = u.type;
      return typeof s == "function" && !Lc(s) && s.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = s, wy(
        l,
        n,
        s,
        c,
        r
      )) : (l = Ud(
        u.type,
        null,
        c,
        n,
        n.mode,
        r
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (s = l.child, !fh(l, r)) {
      var m = s.memoizedProps;
      if (u = u.compare, u = u !== null ? u : vn, u(m, c) && l.ref === n.ref)
        return ln(l, n, r);
    }
    return n.flags |= 1, l = ii(s, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function wy(l, n, u, c, r) {
    if (l !== null) {
      var s = l.memoizedProps;
      if (vn(s, c) && l.ref === n.ref)
        if (pl = !1, n.pendingProps = c = s, fh(l, r))
          (l.flags & 131072) !== 0 && (pl = !0);
        else
          return n.lanes = l.lanes, ln(l, n, r);
    }
    return ch(
      l,
      n,
      u,
      c,
      r
    );
  }
  function cg(l, n, u, c) {
    var r = c.children, s = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | u : u, l !== null) {
          for (c = n.child = l.child, r = 0; c !== null; )
            r = r | c.lanes | c.childLanes, c = c.sibling;
          c = r & ~s;
        } else c = 0, n.child = null;
        return ba(
          l,
          n,
          s,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && lf(
          n,
          s !== null ? s.cachePool : null
        ), s !== null ? k0(n, s) : Jr(), Gd(n);
      else
        return c = n.lanes = 536870912, ba(
          l,
          n,
          s !== null ? s.baseLanes | u : u,
          u,
          c
        );
    } else
      s !== null ? (lf(n, s.cachePool), k0(n, s), Jn(), n.memoizedState = null) : (l !== null && lf(n, null), Jr(), Jn());
    return kt(l, n, r, u), n.child;
  }
  function nc(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function ba(l, n, u, c, r) {
    var s = Wa();
    return s = s === null ? null : { parent: ml._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && lf(n, null), Jr(), Gd(n), l !== null && wl(l, n, c, !0), n.childLanes = r, null;
  }
  function us(l, n) {
    return n = os(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function Ea(l, n, u) {
    return Wi(n, l.child, null, u), l = us(n, n.pendingProps), l.flags |= 2, Sa(n), n.memoizedState = null, l;
  }
  function og(l, n, u) {
    var c = n.pendingProps, r = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (ht) {
        if (c.mode === "hidden")
          return l = us(n, c), n.lanes = 536870912, nc(null, l);
        if (cf(n), (l = Xt) ? (l = Qg(
          l,
          Dl
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Xn !== null ? { id: Ca, overflow: Qn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = ly(l), u.return = n, n.child = u, jl = n, Xt = null)) : l = null, l === null) throw An(n);
        return n.lanes = 536870912, null;
      }
      return us(n, c);
    }
    var s = l.memoizedState;
    if (s !== null) {
      var m = s.dehydrated;
      if (cf(n), r)
        if (n.flags & 256)
          n.flags &= -257, n = Ea(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(O(558));
      else if (pl || wl(l, n, u, !1), r = (u & l.childLanes) !== 0, pl || r) {
        if (c = jt, c !== null && (m = Qa(c, u), m !== 0 && m !== s.retryLane))
          throw s.retryLane = m, ui(l, m), Ra(c, l, m), ih;
        Oh(), n = Ea(
          l,
          n,
          u
        );
      } else
        l = s.treeContext, Xt = Da(m.nextSibling), jl = n, ht = !0, bu = null, Dl = !1, l !== null && Br(n, l), n = us(n, c), n.flags |= 4096;
      return n;
    }
    return l = ii(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function en(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(O(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function ch(l, n, u, c, r) {
    return Qe(n), u = $r(
      l,
      n,
      u,
      c,
      void 0,
      r
    ), c = Xd(), l !== null && !pl ? (Ic(l, n, r), ln(l, n, r)) : (ht && c && Po(n), n.flags |= 1, kt(l, n, u, r), n.child);
  }
  function uc(l, n, u, c, r, s) {
    return Qe(n), n.updateQueue = null, u = W0(
      n,
      c,
      u,
      r
    ), Ld(l), c = Xd(), l !== null && !pl ? (Ic(l, n, s), ln(l, n, s)) : (ht && c && Po(n), n.flags |= 1, kt(l, n, u, s), n.child);
  }
  function qy(l, n, u, c, r) {
    if (Qe(n), n.stateNode === null) {
      var s = ya, m = u.contextType;
      typeof m == "object" && m !== null && (s = I(m)), s = new u(c, s), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = On, n.stateNode = s, s._reactInternals = n, s = n.stateNode, s.props = c, s.state = n.memoizedState, s.refs = {}, Zr(n), m = u.contextType, s.context = typeof m == "object" && m !== null ? I(m) : ya, s.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (lo(
        n,
        u,
        m,
        c
      ), s.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (m = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), m !== s.state && On.enqueueReplaceState(s, s.state, null), Ou(n, c, s, r), Pi(), s.state = n.memoizedState), typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      s = n.stateNode;
      var v = n.memoizedProps, R = ac(u, v);
      s.props = R;
      var q = s.context, Z = u.contextType;
      m = ya, typeof Z == "object" && Z !== null && (m = I(Z));
      var F = u.getDerivedStateFromProps;
      Z = typeof F == "function" || typeof s.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, Z || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (v || q !== m) && ig(
        n,
        s,
        c,
        m
      ), si = !1;
      var Y = n.memoizedState;
      s.state = Y, Ou(n, c, s, r), Pi(), q = n.memoizedState, v || Y !== q || si ? (typeof F == "function" && (lo(
        n,
        u,
        F,
        c
      ), q = n.memoizedState), (R = si || Cy(
        n,
        u,
        R,
        c,
        Y,
        q,
        m
      )) ? (Z || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = q), s.props = c, s.state = q, s.context = m, c = R) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      s = n.stateNode, wd(l, n), m = n.memoizedProps, Z = ac(u, m), s.props = Z, F = n.pendingProps, Y = s.context, q = u.contextType, R = ya, typeof q == "object" && q !== null && (R = I(q)), v = u.getDerivedStateFromProps, (q = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m !== F || Y !== R) && ig(
        n,
        s,
        c,
        R
      ), si = !1, Y = n.memoizedState, s.state = Y, Ou(n, c, s, r), Pi();
      var V = n.memoizedState;
      m !== F || Y !== V || si || l !== null && l.dependencies !== null && Qc(l.dependencies) ? (typeof v == "function" && (lo(
        n,
        u,
        v,
        c
      ), V = n.memoizedState), (Z = si || Cy(
        n,
        u,
        Z,
        c,
        Y,
        V,
        R
      ) || l !== null && l.dependencies !== null && Qc(l.dependencies)) ? (q || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(c, V, R), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        c,
        V,
        R
      )), typeof s.componentDidUpdate == "function" && (n.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = V), s.props = c, s.state = V, s.context = R, c = Z) : (typeof s.componentDidUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return s = c, en(l, n), c = (n.flags & 128) !== 0, s || c ? (s = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : s.render(), n.flags |= 1, l !== null && c ? (n.child = Wi(
      n,
      l.child,
      null,
      r
    ), n.child = Wi(
      n,
      null,
      u,
      r
    )) : kt(l, n, u, r), n.memoizedState = s.state, l = n.child) : l = ln(
      l,
      n,
      r
    ), l;
  }
  function $n(l, n, u, c) {
    return Zi(), n.flags |= 256, kt(l, n, u, c), n.child;
  }
  var is = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function cs(l) {
    return { baseLanes: l, cachePool: Zc() };
  }
  function tn(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Oa), l;
  }
  function Yy(l, n, u) {
    var c = n.pendingProps, r = !1, s = (n.flags & 128) !== 0, m;
    if ((m = s) || (m = l !== null && l.memoizedState === null ? !1 : (It.current & 2) !== 0), m && (r = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (ht) {
        if (r ? Ru(n) : Jn(), (l = Xt) ? (l = Qg(
          l,
          Dl
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Xn !== null ? { id: Ca, overflow: Qn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = ly(l), u.return = n, n.child = u, jl = n, Xt = null)) : l = null, l === null) throw An(n);
        return dc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var v = c.children;
      return c = c.fallback, r ? (Jn(), r = n.mode, v = os(
        { mode: "hidden", children: v },
        r
      ), c = ci(
        c,
        r,
        u,
        null
      ), v.return = n, c.return = n, v.sibling = c, n.child = v, c = n.child, c.memoizedState = cs(u), c.childLanes = tn(
        l,
        m,
        u
      ), n.memoizedState = is, nc(null, c)) : (Ru(n), ic(n, v));
    }
    var R = l.memoizedState;
    if (R !== null && (v = R.dehydrated, v !== null)) {
      if (s)
        n.flags & 256 ? (Ru(n), n.flags &= -257, n = ao(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Jn(), n.child = l.child, n.flags |= 128, n = null) : (Jn(), v = c.fallback, r = n.mode, c = os(
          { mode: "visible", children: c.children },
          r
        ), v = ci(
          v,
          r,
          u,
          null
        ), v.flags |= 2, c.return = n, v.return = n, c.sibling = v, n.child = c, Wi(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = cs(u), c.childLanes = tn(
          l,
          m,
          u
        ), n.memoizedState = is, n = nc(null, c));
      else if (Ru(n), dc(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var q = m.dgst;
        m = q, c = Error(O(419)), c.stack = "", c.digest = m, tf({ value: c, source: null, stack: null }), n = ao(
          l,
          n,
          u
        );
      } else if (pl || wl(l, n, u, !1), m = (u & l.childLanes) !== 0, pl || m) {
        if (m = jt, m !== null && (c = Qa(m, u), c !== 0 && c !== R.retryLane))
          throw R.retryLane = c, ui(l, c), Ra(m, l, c), ih;
        _n(v) || Oh(), n = ao(
          l,
          n,
          u
        );
      } else
        _n(v) ? (n.flags |= 192, n.child = l.child, n = null) : (l = R.treeContext, Xt = Da(
          v.nextSibling
        ), jl = n, ht = !0, bu = null, Dl = !1, l !== null && Br(n, l), n = ic(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return r ? (Jn(), v = c.fallback, r = n.mode, R = l.child, q = R.sibling, c = ii(R, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = R.subtreeFlags & 65011712, q !== null ? v = ii(
      q,
      v
    ) : (v = ci(
      v,
      r,
      u,
      null
    ), v.flags |= 2), v.return = n, c.return = n, c.sibling = v, n.child = c, nc(null, c), c = n.child, v = l.child.memoizedState, v === null ? v = cs(u) : (r = v.cachePool, r !== null ? (R = ml._currentValue, r = r.parent !== R ? { parent: R, pool: R } : r) : r = Zc(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: r
    }), c.memoizedState = v, c.childLanes = tn(
      l,
      m,
      u
    ), n.memoizedState = is, nc(l.child, c)) : (Ru(n), u = l.child, l = u.sibling, u = ii(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function ic(l, n) {
    return n = os(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function os(l, n) {
    return l = ol(22, l, null, n), l.lanes = 0, l;
  }
  function ao(l, n, u) {
    return Wi(n, l.child, null, u), l = ic(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function no(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Bd(l.return, n, u);
  }
  function oh(l, n, u, c, r, s) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: r,
      treeForkCount: s
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = u, m.tailMode = r, m.treeForkCount = s);
  }
  function Gy(l, n, u) {
    var c = n.pendingProps, r = c.revealOrder, s = c.tail;
    c = c.children;
    var m = It.current, v = (m & 2) !== 0;
    if (v ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, le(It, m), kt(l, n, c, u), c = ht ? hl : 0, !v && l !== null && (l.flags & 128) !== 0)
      e: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && no(l, u, n);
        else if (l.tag === 19)
          no(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break e;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break e;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (r) {
      case "forwards":
        for (u = n.child, r = null; u !== null; )
          l = u.alternate, l !== null && of(l) === null && (r = u), u = u.sibling;
        u = r, u === null ? (r = n.child, n.child = null) : (r = u.sibling, u.sibling = null), oh(
          n,
          !1,
          r,
          u,
          s,
          c
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, r = n.child, n.child = null; r !== null; ) {
          if (l = r.alternate, l !== null && of(l) === null) {
            n.child = r;
            break;
          }
          l = r.sibling, r.sibling = u, u = r, r = l;
        }
        oh(
          n,
          !0,
          u,
          null,
          s,
          c
        );
        break;
      case "together":
        oh(
          n,
          !1,
          null,
          null,
          void 0,
          c
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function ln(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), In |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (wl(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(O(153));
    if (n.child !== null) {
      for (l = n.child, u = ii(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = ii(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function fh(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Qc(l)));
  }
  function rh(l, n, u) {
    switch (n.tag) {
      case 3:
        $t(n, n.stateNode.containerInfo), ga(n, ml, l.memoizedState.cache), Zi();
        break;
      case 27:
      case 5:
        Ga(n);
        break;
      case 4:
        $t(n, n.stateNode.containerInfo);
        break;
      case 10:
        ga(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, cf(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Ru(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Yy(l, n, u) : (Ru(n), l = ln(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Ru(n);
        break;
      case 19:
        var r = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (wl(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), r) {
          if (c)
            return Gy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (r = n.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), le(It, It.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, cg(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        ga(n, ml, l.memoizedState.cache);
    }
    return ln(l, n, u);
  }
  function Ly(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        pl = !0;
      else {
        if (!fh(l, u) && (n.flags & 128) === 0)
          return pl = !1, rh(
            l,
            n,
            u
          );
        pl = (l.flags & 131072) !== 0;
      }
    else
      pl = !1, ht && (n.flags & 1048576) !== 0 && ny(n, hl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var c = n.pendingProps;
          if (l = $i(n.elementType), n.type = l, typeof l == "function")
            Lc(l) ? (c = ac(l, c), n.tag = 1, n = qy(
              null,
              n,
              l,
              c,
              u
            )) : (n.tag = 0, n = ch(
              null,
              n,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var r = l.$$typeof;
              if (r === Ue) {
                n.tag = 11, n = By(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              } else if (r === pe) {
                n.tag = 14, n = jy(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              }
            }
            throw n = Kt(l) || l, Error(O(306, n, ""));
          }
        }
        return n;
      case 0:
        return ch(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, r = ac(
          c,
          n.pendingProps
        ), qy(
          l,
          n,
          c,
          r,
          u
        );
      case 3:
        e: {
          if ($t(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(O(387));
          c = n.pendingProps;
          var s = n.memoizedState;
          r = s.element, wd(l, n), Ou(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, ga(n, ml, c), c !== s.cache && Au(
            n,
            [ml],
            u,
            !0
          ), Pi(), c = m.element, s.isDehydrated)
            if (s = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
              n = $n(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== r) {
              r = $a(
                Error(O(424)),
                n
              ), tf(r), n = $n(
                l,
                n,
                c,
                u
              );
              break e;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Xt = Da(l.firstChild), jl = n, ht = !0, bu = null, Dl = !0, u = sy(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Zi(), c === r) {
              n = ln(
                l,
                n,
                u
              );
              break e;
            }
            kt(l, n, c, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return en(l, n), l === null ? (u = wf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : ht || (u = n.type, l = n.pendingProps, c = sc(
          Ke.current
        ).createElement(u), c[xt] = n, c[da] = l, Fl(c, u, l), Mt(c), n.stateNode = c) : n.memoizedState = wf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ga(n), l === null && ht && (c = n.stateNode = Bf(
          n.type,
          n.pendingProps,
          Ke.current
        ), jl = n, Dl = !0, r = Xt, eu(n.type) ? (_s = r, Xt = Da(c.firstChild)) : Xt = r), kt(
          l,
          n,
          n.pendingProps.children,
          u
        ), en(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && ht && ((r = c = Xt) && (c = s1(
          c,
          n.type,
          n.pendingProps,
          Dl
        ), c !== null ? (n.stateNode = c, jl = n, Xt = Da(c.firstChild), Dl = !1, r = !0) : r = !1), r || An(n)), Ga(n), r = n.type, s = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = s.children, Nf(r, s) ? c = null : m !== null && Nf(r, m) && (n.flags |= 32), n.memoizedState !== null && (r = $r(
          l,
          n,
          c1,
          null,
          null,
          u
        ), Cs._currentValue = r), en(l, n), kt(l, n, c, u), n.child;
      case 6:
        return l === null && ht && ((l = u = Xt) && (u = nt(
          u,
          n.pendingProps,
          Dl
        ), u !== null ? (n.stateNode = u, jl = n, Xt = null, l = !0) : l = !1), l || An(n)), null;
      case 13:
        return Yy(l, n, u);
      case 4:
        return $t(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = Wi(
          n,
          null,
          c,
          u
        ) : kt(l, n, c, u), n.child;
      case 11:
        return By(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return kt(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return kt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return kt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, ga(n, n.type, c.value), kt(l, n, c.children, u), n.child;
      case 9:
        return r = n.type._context, c = n.pendingProps.children, Qe(n), r = I(r), c = c(r), n.flags |= 1, kt(l, n, c, u), n.child;
      case 14:
        return jy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return wy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Gy(l, n, u);
      case 31:
        return og(l, n, u);
      case 22:
        return cg(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return Qe(n), c = I(ml), l === null ? (r = Wa(), r === null && (r = jt, s = qr(), r.pooledCache = s, s.refCount++, s !== null && (r.pooledCacheLanes |= u), r = s), n.memoizedState = { parent: c, cache: r }, Zr(n), ga(n, ml, r)) : ((l.lanes & u) !== 0 && (wd(l, n), Ou(n, null, null, u), Pi()), r = l.memoizedState, s = n.memoizedState, r.parent !== c ? (r = { parent: c, cache: c }, n.memoizedState = r, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = r), ga(n, ml, c)) : (c = s.cache, ga(n, ml, c), c !== r.cache && Au(
          n,
          [ml],
          u,
          !0
        ))), kt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(O(156, n.tag));
  }
  function Uu(l) {
    l.flags |= 4;
  }
  function Xy(l, n, u, c, r) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (r & 335544128) === r)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (vg()) l.flags |= 8192;
        else
          throw ki = Kc, Jc;
    } else l.flags &= -16777217;
  }
  function Qy(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !ja(n))
      if (vg()) l.flags |= 8192;
      else
        throw ki = Kc, Jc;
  }
  function ia(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? aa() : 536870912, l.lanes |= n, ul |= n);
  }
  function pf(l, n) {
    if (!ht)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Xe(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags & 65011712, c |= r.flags & 65011712, r.return = l, r = r.sibling;
    else
      for (r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags, c |= r.flags, r.return = l, r = r.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function fg(l, n, u) {
    var c = n.pendingProps;
    switch (Nd(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Xe(n), null;
      case 1:
        return Xe(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Zn(ml), Et(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Tu(n) ? Uu(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, uy())), Xe(n), null;
      case 26:
        var r = n.type, s = n.memoizedState;
        return l === null ? (Uu(n), s !== null ? (Xe(n), Qy(n, s)) : (Xe(n), Xy(
          n,
          r,
          null,
          c,
          u
        ))) : s ? s !== l.memoizedState ? (Uu(n), Xe(n), Qy(n, s)) : (Xe(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && Uu(n), Xe(n), Xy(
          n,
          r,
          l,
          c,
          u
        )), null;
      case 27:
        if (se(n), u = Ke.current, r = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Uu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(O(166));
            return Xe(n), null;
          }
          l = ee.current, Tu(n) ? jr(n) : (l = Bf(r, c, u), n.stateNode = l, Uu(n));
        }
        return Xe(n), null;
      case 5:
        if (se(n), r = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Uu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(O(166));
            return Xe(n), null;
          }
          if (s = ee.current, Tu(n))
            jr(n);
          else {
            var m = sc(
              Ke.current
            );
            switch (s) {
              case 1:
                s = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  r
                );
                break;
              case 2:
                s = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  r
                );
                break;
              default:
                switch (r) {
                  case "svg":
                    s = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      r
                    );
                    break;
                  case "math":
                    s = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r
                    );
                    break;
                  case "script":
                    s = m.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(
                      s.firstChild
                    );
                    break;
                  case "select":
                    s = typeof c.is == "string" ? m.createElement("select", {
                      is: c.is
                    }) : m.createElement("select"), c.multiple ? s.multiple = !0 : c.size && (s.size = c.size);
                    break;
                  default:
                    s = typeof c.is == "string" ? m.createElement(r, { is: c.is }) : m.createElement(r);
                }
            }
            s[xt] = n, s[da] = c;
            e: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                s.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = s;
            e: switch (Fl(s, r, c), r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break e;
              case "img":
                c = !0;
                break e;
              default:
                c = !1;
            }
            c && Uu(n);
          }
        }
        return Xe(n), Xy(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Uu(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(O(166));
          if (l = Ke.current, Tu(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, r = jl, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  c = r.memoizedProps;
              }
            l[xt] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || hp(l.nodeValue, u)), l || An(n, !0);
          } else
            l = sc(l).createTextNode(
              c
            ), l[xt] = n, n.stateNode = l;
        }
        return Xe(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = Tu(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(O(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(O(557));
              l[xt] = n;
            } else
              Zi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Xe(n), l = !1;
          } else
            u = uy(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (Sa(n), n) : (Sa(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(O(558));
        }
        return Xe(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (r = Tu(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!r) throw Error(O(318));
              if (r = n.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(O(317));
              r[xt] = n;
            } else
              Zi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Xe(n), r = !1;
          } else
            r = uy(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return n.flags & 256 ? (Sa(n), n) : (Sa(n), null);
        }
        return Sa(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, r = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (r = c.alternate.memoizedState.cachePool.pool), s = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (s = c.memoizedState.cachePool.pool), s !== r && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), ia(n, n.updateQueue), Xe(n), null);
      case 4:
        return Et(), l === null && Hf(n.stateNode.containerInfo), Xe(n), null;
      case 10:
        return Zn(n.type), Xe(n), null;
      case 19:
        if (w(It), c = n.memoizedState, c === null) return Xe(n), null;
        if (r = (n.flags & 128) !== 0, s = c.rendering, s === null)
          if (r) pf(c, !1);
          else {
            if (Vt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (s = of(l), s !== null) {
                  for (n.flags |= 128, pf(c, !1), l = s.updateQueue, n.updateQueue = l, ia(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    ty(u, l), u = u.sibling;
                  return le(
                    It,
                    It.current & 1 | 2
                  ), ht && Tn(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && Sl() > _t && (n.flags |= 128, r = !0, pf(c, !1), n.lanes = 4194304);
          }
        else {
          if (!r)
            if (l = of(s), l !== null) {
              if (n.flags |= 128, r = !0, l = l.updateQueue, n.updateQueue = l, ia(n, l), pf(c, !0), c.tail === null && c.tailMode === "hidden" && !s.alternate && !ht)
                return Xe(n), null;
            } else
              2 * Sl() - c.renderingStartTime > _t && u !== 536870912 && (n.flags |= 128, r = !0, pf(c, !1), n.lanes = 4194304);
          c.isBackwards ? (s.sibling = n.child, n.child = s) : (l = c.last, l !== null ? l.sibling = s : n.child = s, c.last = s);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = Sl(), l.sibling = null, u = It.current, le(
          It,
          r ? u & 1 | 2 : u & 1
        ), ht && Tn(n, c.treeForkCount), l) : (Xe(n), null);
      case 22:
      case 23:
        return Sa(n), uf(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Xe(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Xe(n), u = n.updateQueue, u !== null && ia(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && w(Fa), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Zn(ml), Xe(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(O(156, n.tag));
  }
  function rg(l, n) {
    switch (Nd(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Zn(ml), Et(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return se(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (Sa(n), n.alternate === null)
            throw Error(O(340));
          Zi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (Sa(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(O(340));
          Zi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return w(It), null;
      case 4:
        return Et(), null;
      case 10:
        return Zn(n.type), null;
      case 22:
      case 23:
        return Sa(n), uf(), l !== null && w(Fa), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Zn(ml), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function sg(l, n) {
    switch (Nd(n), n.tag) {
      case 3:
        Zn(ml), Et();
        break;
      case 26:
      case 27:
      case 5:
        se(n);
        break;
      case 4:
        Et();
        break;
      case 31:
        n.memoizedState !== null && Sa(n);
        break;
      case 13:
        Sa(n);
        break;
      case 19:
        w(It);
        break;
      case 10:
        Zn(n.type);
        break;
      case 22:
      case 23:
        Sa(n), uf(), l !== null && w(Fa);
        break;
      case 24:
        Zn(ml);
    }
  }
  function Rn(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var r = c.next;
        u = r;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var s = u.create, m = u.inst;
            c = s(), m.destroy = c;
          }
          u = u.next;
        } while (u !== r);
      }
    } catch (v) {
      Nt(n, n.return, v);
    }
  }
  function an(l, n, u) {
    try {
      var c = n.updateQueue, r = c !== null ? c.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        c = s;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, v = m.destroy;
            if (v !== void 0) {
              m.destroy = void 0, r = n;
              var R = u, q = v;
              try {
                q();
              } catch (Z) {
                Nt(
                  r,
                  R,
                  Z
                );
              }
            }
          }
          c = c.next;
        } while (c !== s);
      }
    } catch (Z) {
      Nt(n, n.return, Z);
    }
  }
  function sh(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        ec(n, u);
      } catch (c) {
        Nt(l, l.return, c);
      }
    }
  }
  function cc(l, n, u) {
    u.props = ac(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Nt(l, n, c);
    }
  }
  function Hu(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (r) {
      Nt(l, n, r);
    }
  }
  function kn(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (r) {
          Nt(l, n, r);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (r) {
          Nt(l, n, r);
        }
      else u.current = null;
  }
  function Vy(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (r) {
      Nt(l, l.return, r);
    }
  }
  function dh(l, n, u) {
    try {
      var c = l.stateNode;
      yp(c, l.type, u, n), c[da] = n;
    } catch (r) {
      Nt(l, l.return, r);
    }
  }
  function Zy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && eu(l.type) || l.tag === 4;
  }
  function gf(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Zy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && eu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function vf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Bn));
    else if (c !== 4 && (c === 27 && eu(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (vf(l, n, u), l = l.sibling; l !== null; )
        vf(l, n, u), l = l.sibling;
  }
  function Sf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && eu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (Sf(l, n, u), l = l.sibling; l !== null; )
        Sf(l, n, u), l = l.sibling;
  }
  function Jy(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, r = n.attributes; r.length; )
        n.removeAttributeNode(r[0]);
      Fl(n, c, u), n[xt] = l, n[da] = u;
    } catch (s) {
      Nt(l, l.return, s);
    }
  }
  var pi = !1, El = !1, hh = !1, Ky = typeof WeakSet == "function" ? WeakSet : Set, Gl = null;
  function bf(l, n) {
    if (l = l.containerInfo, Nh = Ml, l = Xi(l), Mr(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var r = c.anchorOffset, s = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, s.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, v = -1, R = -1, q = 0, Z = 0, F = l, Y = null;
            t: for (; ; ) {
              for (var V; F !== u || r !== 0 && F.nodeType !== 3 || (v = m + r), F !== s || c !== 0 && F.nodeType !== 3 || (R = m + c), F.nodeType === 3 && (m += F.nodeValue.length), (V = F.firstChild) !== null; )
                Y = F, F = V;
              for (; ; ) {
                if (F === l) break t;
                if (Y === u && ++q === r && (v = m), Y === s && ++Z === c && (R = m), (V = F.nextSibling) !== null) break;
                F = Y, Y = F.parentNode;
              }
              F = V;
            }
            u = v === -1 || R === -1 ? null : { start: v, end: R };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (xh = { focusedElem: l, selectionRange: u }, Ml = !1, Gl = n; Gl !== null; )
      if (n = Gl, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, Gl = l;
      else
        for (; Gl !== null; ) {
          switch (n = Gl, s = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  r = l[u], r.ref.impl = r.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && s !== null) {
                l = void 0, u = n, r = s.memoizedProps, s = s.memoizedState, c = u.stateNode;
                try {
                  var ge = ac(
                    u.type,
                    r
                  );
                  l = c.getSnapshotBeforeUpdate(
                    ge,
                    s
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (we) {
                  Nt(
                    u,
                    u.return,
                    we
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Ds(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ds(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(O(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, Gl = l;
            break;
          }
          Gl = n.return;
        }
  }
  function fs(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        gi(l, u), c & 4 && Rn(5, u);
        break;
      case 1:
        if (gi(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              Nt(u, u.return, m);
            }
          else {
            var r = ac(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                r,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              Nt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && sh(u), c & 512 && Hu(u, u.return);
        break;
      case 3:
        if (gi(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            ec(l, n);
          } catch (m) {
            Nt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && Jy(u);
      case 26:
      case 5:
        gi(l, u), n === null && c & 4 && Vy(u), c & 512 && Hu(u, u.return);
        break;
      case 12:
        gi(l, u);
        break;
      case 31:
        gi(l, u), c & 4 && dg(l, u);
        break;
      case 13:
        gi(l, u), c & 4 && Fy(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = nn.bind(
          null,
          u
        ), xf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || pi, !c) {
          n = n !== null && n.memoizedState !== null || El, r = pi;
          var s = El;
          pi = c, (El = n) && !s ? Fn(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : gi(l, u), pi = r, El = s;
        }
        break;
      case 30:
        break;
      default:
        gi(l, u);
    }
  }
  function $y(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, $y(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && fd(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Qt = null, Ta = !1;
  function Nu(l, n, u) {
    for (u = u.child; u !== null; )
      ky(l, n, u), u = u.sibling;
  }
  function ky(l, n, u) {
    if (Rl && typeof Rl.onCommitFiberUnmount == "function")
      try {
        Rl.onCommitFiberUnmount(mn, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        El || kn(u, n), Nu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        El || kn(u, n);
        var c = Qt, r = Ta;
        eu(u.type) && (Qt = u.stateNode, Ta = !1), Nu(
          l,
          n,
          u
        ), ho(u.stateNode), Qt = c, Ta = r;
        break;
      case 5:
        El || kn(u, n);
      case 6:
        if (c = Qt, r = Ta, Qt = null, Nu(
          l,
          n,
          u
        ), Qt = c, Ta = r, Qt !== null)
          if (Ta)
            try {
              (Qt.nodeType === 9 ? Qt.body : Qt.nodeName === "HTML" ? Qt.ownerDocument.body : Qt).removeChild(u.stateNode);
            } catch (s) {
              Nt(
                u,
                n,
                s
              );
            }
          else
            try {
              Qt.removeChild(u.stateNode);
            } catch (s) {
              Nt(
                u,
                n,
                s
              );
            }
        break;
      case 18:
        Qt !== null && (Ta ? (l = Qt, Sp(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Zf(l)) : Sp(Qt, u.stateNode));
        break;
      case 4:
        c = Qt, r = Ta, Qt = u.stateNode.containerInfo, Ta = !0, Nu(
          l,
          n,
          u
        ), Qt = c, Ta = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        an(2, u, n), El || an(4, u, n), Nu(
          l,
          n,
          u
        );
        break;
      case 1:
        El || (kn(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && cc(
          u,
          n,
          c
        )), Nu(
          l,
          n,
          u
        );
        break;
      case 21:
        Nu(
          l,
          n,
          u
        );
        break;
      case 22:
        El = (c = El) || u.memoizedState !== null, Nu(
          l,
          n,
          u
        ), El = c;
        break;
      default:
        Nu(
          l,
          n,
          u
        );
    }
  }
  function dg(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Zf(l);
      } catch (u) {
        Nt(n, n.return, u);
      }
    }
  }
  function Fy(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Zf(l);
      } catch (u) {
        Nt(n, n.return, u);
      }
  }
  function rs(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new Ky()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new Ky()), n;
      default:
        throw Error(O(435, l.tag));
    }
  }
  function ss(l, n) {
    var u = rs(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var r = Ng.bind(null, l, c);
        c.then(r, r);
      }
    });
  }
  function Aa(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var r = u[c], s = l, m = n, v = m;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (eu(v.type)) {
                Qt = v.stateNode, Ta = !1;
                break e;
              }
              break;
            case 5:
              Qt = v.stateNode, Ta = !1;
              break e;
            case 3:
            case 4:
              Qt = v.stateNode.containerInfo, Ta = !0;
              break e;
          }
          v = v.return;
        }
        if (Qt === null) throw Error(O(160));
        ky(s, m, r), Qt = null, Ta = !1, s = r.alternate, s !== null && (s.return = null), r.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        mh(n, l), n = n.sibling;
  }
  var tt = null;
  function mh(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Aa(n, l), Ua(l), c & 4 && (an(3, l, l.return), Rn(3, l), an(5, l, l.return));
        break;
      case 1:
        Aa(n, l), Ua(l), c & 512 && (El || u === null || kn(u, u.return)), c & 64 && pi && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var r = tt;
        if (Aa(n, l), Ua(l), c & 512 && (El || u === null || kn(u, u.return)), c & 4) {
          var s = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, r = r.ownerDocument || r;
                  t: switch (c) {
                    case "title":
                      s = r.getElementsByTagName("title")[0], (!s || s[du] || s[xt] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = r.createElement(c), r.head.insertBefore(
                        s,
                        r.querySelector("head > title")
                      )), Fl(s, c, u), s[xt] = l, Mt(s), c = s;
                      break e;
                    case "link":
                      var m = Ap(
                        "link",
                        "href",
                        r
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (s = m[v], s.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && s.getAttribute("rel") === (u.rel == null ? null : u.rel) && s.getAttribute("title") === (u.title == null ? null : u.title) && s.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), Fl(s, c, u), r.head.appendChild(s);
                      break;
                    case "meta":
                      if (m = Ap(
                        "meta",
                        "content",
                        r
                      ).get(c + (u.content || ""))) {
                        for (v = 0; v < m.length; v++)
                          if (s = m[v], s.getAttribute("content") === (u.content == null ? null : "" + u.content) && s.getAttribute("name") === (u.name == null ? null : u.name) && s.getAttribute("property") === (u.property == null ? null : u.property) && s.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && s.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), Fl(s, c, u), r.head.appendChild(s);
                      break;
                    default:
                      throw Error(O(468, c));
                  }
                  s[xt] = l, Mt(s), c = s;
                }
                l.stateNode = c;
              } else
                Yh(
                  r,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Tp(
                r,
                c,
                l.memoizedProps
              );
          else
            s !== c ? (s === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : s.count--, c === null ? Yh(
              r,
              l.type,
              l.stateNode
            ) : Tp(
              r,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && dh(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Aa(n, l), Ua(l), c & 512 && (El || u === null || kn(u, u.return)), u !== null && c & 4 && dh(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Aa(n, l), Ua(l), c & 512 && (El || u === null || kn(u, u.return)), l.flags & 32) {
          r = l.stateNode;
          try {
            mu(r, "");
          } catch (ge) {
            Nt(l, l.return, ge);
          }
        }
        c & 4 && l.stateNode != null && (r = l.memoizedProps, dh(
          l,
          r,
          u !== null ? u.memoizedProps : r
        )), c & 1024 && (hh = !0);
        break;
      case 6:
        if (Aa(n, l), Ua(l), c & 4) {
          if (l.stateNode === null)
            throw Error(O(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (ge) {
            Nt(l, l.return, ge);
          }
        }
        break;
      case 3:
        if (Gf = null, r = tt, tt = ca(n.containerInfo), Aa(n, l), tt = r, Ua(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Zf(n.containerInfo);
          } catch (ge) {
            Nt(l, l.return, ge);
          }
        hh && (hh = !1, Wy(l));
        break;
      case 4:
        c = tt, tt = ca(
          l.stateNode.containerInfo
        ), Aa(n, l), Ua(l), tt = c;
        break;
      case 12:
        Aa(n, l), Ua(l);
        break;
      case 31:
        Aa(n, l), Ua(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ss(l, c)));
        break;
      case 13:
        Aa(n, l), Ua(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Pn = Sl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ss(l, c)));
        break;
      case 22:
        r = l.memoizedState !== null;
        var R = u !== null && u.memoizedState !== null, q = pi, Z = El;
        if (pi = q || r, El = Z || R, Aa(n, l), El = Z, pi = q, Ua(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = r ? n._visibility & -2 : n._visibility | 1, r && (u === null || R || pi || El || uo(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                R = u = n;
                try {
                  if (s = R.stateNode, r)
                    m = s.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = R.stateNode;
                    var F = R.memoizedProps.style, Y = F != null && F.hasOwnProperty("display") ? F.display : null;
                    v.style.display = Y == null || typeof Y == "boolean" ? "" : ("" + Y).trim();
                  }
                } catch (ge) {
                  Nt(R, R.return, ge);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                R = n;
                try {
                  R.stateNode.nodeValue = r ? "" : R.memoizedProps;
                } catch (ge) {
                  Nt(R, R.return, ge);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                R = n;
                try {
                  var V = R.stateNode;
                  r ? gl(V, !0) : gl(R.stateNode, !1);
                } catch (ge) {
                  Nt(R, R.return, ge);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, ss(l, u))));
        break;
      case 19:
        Aa(n, l), Ua(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ss(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Aa(n, l), Ua(l);
    }
  }
  function Ua(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (Zy(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(O(160));
        switch (u.tag) {
          case 27:
            var r = u.stateNode, s = gf(l);
            Sf(l, s, r);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (mu(m, ""), u.flags &= -33);
            var v = gf(l);
            Sf(l, v, m);
            break;
          case 3:
          case 4:
            var R = u.stateNode.containerInfo, q = gf(l);
            vf(
              l,
              q,
              R
            );
            break;
          default:
            throw Error(O(161));
        }
      } catch (Z) {
        Nt(l, l.return, Z);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Wy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Wy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function gi(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        fs(l, n.alternate, n), n = n.sibling;
  }
  function uo(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          an(4, n, n.return), uo(n);
          break;
        case 1:
          kn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && cc(
            n,
            n.return,
            u
          ), uo(n);
          break;
        case 27:
          ho(n.stateNode);
        case 26:
        case 5:
          kn(n, n.return), uo(n);
          break;
        case 22:
          n.memoizedState === null && uo(n);
          break;
        case 30:
          uo(n);
          break;
        default:
          uo(n);
      }
      l = l.sibling;
    }
  }
  function Fn(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, r = l, s = n, m = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Fn(
            r,
            s,
            u
          ), Rn(4, s);
          break;
        case 1:
          if (Fn(
            r,
            s,
            u
          ), c = s, r = c.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (q) {
              Nt(c, c.return, q);
            }
          if (c = s, r = c.updateQueue, r !== null) {
            var v = c.stateNode;
            try {
              var R = r.shared.hiddenCallbacks;
              if (R !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < R.length; r++)
                  Yd(R[r], v);
            } catch (q) {
              Nt(c, c.return, q);
            }
          }
          u && m & 64 && sh(s), Hu(s, s.return);
          break;
        case 27:
          Jy(s);
        case 26:
        case 5:
          Fn(
            r,
            s,
            u
          ), u && c === null && m & 4 && Vy(s), Hu(s, s.return);
          break;
        case 12:
          Fn(
            r,
            s,
            u
          );
          break;
        case 31:
          Fn(
            r,
            s,
            u
          ), u && m & 4 && dg(r, s);
          break;
        case 13:
          Fn(
            r,
            s,
            u
          ), u && m & 4 && Fy(r, s);
          break;
        case 22:
          s.memoizedState === null && Fn(
            r,
            s,
            u
          ), Hu(s, s.return);
          break;
        case 30:
          break;
        default:
          Fn(
            r,
            s,
            u
          );
      }
      n = n.sibling;
    }
  }
  function yh(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Yr(u));
  }
  function ph(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Yr(l));
  }
  function Dn(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Ef(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Ef(l, n, u, c) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Dn(
          l,
          n,
          u,
          c
        ), r & 2048 && Rn(9, n);
        break;
      case 1:
        Dn(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        Dn(
          l,
          n,
          u,
          c
        ), r & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Yr(l)));
        break;
      case 12:
        if (r & 2048) {
          Dn(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var s = n.memoizedProps, m = s.id, v = s.onPostCommit;
            typeof v == "function" && v(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (R) {
            Nt(n, n.return, R);
          }
        } else
          Dn(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        Dn(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        Dn(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        s = n.stateNode, m = n.alternate, n.memoizedState !== null ? s._visibility & 2 ? Dn(
          l,
          n,
          u,
          c
        ) : ds(l, n) : s._visibility & 2 ? Dn(
          l,
          n,
          u,
          c
        ) : (s._visibility |= 2, Tf(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), r & 2048 && yh(m, n);
        break;
      case 24:
        Dn(
          l,
          n,
          u,
          c
        ), r & 2048 && ph(n.alternate, n);
        break;
      default:
        Dn(
          l,
          n,
          u,
          c
        );
    }
  }
  function Tf(l, n, u, c, r) {
    for (r = r && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var s = l, m = n, v = u, R = c, q = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Tf(
            s,
            m,
            v,
            R,
            r
          ), Rn(8, m);
          break;
        case 23:
          break;
        case 22:
          var Z = m.stateNode;
          m.memoizedState !== null ? Z._visibility & 2 ? Tf(
            s,
            m,
            v,
            R,
            r
          ) : ds(
            s,
            m
          ) : (Z._visibility |= 2, Tf(
            s,
            m,
            v,
            R,
            r
          )), r && q & 2048 && yh(
            m.alternate,
            m
          );
          break;
        case 24:
          Tf(
            s,
            m,
            v,
            R,
            r
          ), r && q & 2048 && ph(m.alternate, m);
          break;
        default:
          Tf(
            s,
            m,
            v,
            R,
            r
          );
      }
      n = n.sibling;
    }
  }
  function ds(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, r = c.flags;
        switch (c.tag) {
          case 22:
            ds(u, c), r & 2048 && yh(
              c.alternate,
              c
            );
            break;
          case 24:
            ds(u, c), r & 2048 && ph(c.alternate, c);
            break;
          default:
            ds(u, c);
        }
        n = n.sibling;
      }
  }
  var Ha = 8192;
  function xu(l, n, u) {
    if (l.subtreeFlags & Ha)
      for (l = l.child; l !== null; )
        hg(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function hg(l, n, u) {
    switch (l.tag) {
      case 26:
        xu(
          l,
          n,
          u
        ), l.flags & Ha && l.memoizedState !== null && Yu(
          u,
          tt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        xu(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = tt;
        tt = ca(l.stateNode.containerInfo), xu(
          l,
          n,
          u
        ), tt = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = Ha, Ha = 16777216, xu(
          l,
          n,
          u
        ), Ha = c) : xu(
          l,
          n,
          u
        ));
        break;
      default:
        xu(
          l,
          n,
          u
        );
    }
  }
  function gh(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Af(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Gl = c, vh(
            c,
            l
          );
        }
      gh(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Iy(l), l = l.sibling;
  }
  function Iy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Af(l), l.flags & 2048 && an(9, l, l.return);
        break;
      case 3:
        Af(l);
        break;
      case 12:
        Af(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, hs(l)) : Af(l);
        break;
      default:
        Af(l);
    }
  }
  function hs(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Gl = c, vh(
            c,
            l
          );
        }
      gh(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          an(8, n, n.return), hs(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, hs(n));
          break;
        default:
          hs(n);
      }
      l = l.sibling;
    }
  }
  function vh(l, n) {
    for (; Gl !== null; ) {
      var u = Gl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          an(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Yr(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, Gl = c;
      else
        e: for (u = l; Gl !== null; ) {
          c = Gl;
          var r = c.sibling, s = c.return;
          if ($y(c), c === u) {
            Gl = null;
            break e;
          }
          if (r !== null) {
            r.return = s, Gl = r;
            break e;
          }
          Gl = s;
        }
    }
  }
  var mg = {
    getCacheForType: function(l) {
      var n = I(ml), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return I(ml).controller.signal;
    }
  }, Py = typeof WeakMap == "function" ? WeakMap : Map, At = 0, jt = null, mt = null, ft = 0, Ht = 0, Ge = null, Bu = !1, oc = !1, Sh = !1, Wn = 0, Vt = 0, In = 0, io = 0, bh = 0, Oa = 0, ul = 0, ms = null, il = null, Eh = !1, Pn = 0, ep = 0, _t = 1 / 0, Of = null, Pt = null, zl = 0, vi = null, fc = null, ju = 0, Na = 0, Th = null, Ah = null, Rf = 0, ys = null;
  function xa() {
    return (At & 2) !== 0 && ft !== 0 ? ft & -ft : C.T !== null ? zh() : cd();
  }
  function yg() {
    if (Oa === 0)
      if ((ft & 536870912) === 0 || ht) {
        var l = ue;
        ue <<= 1, (ue & 3932160) === 0 && (ue = 262144), Oa = l;
      } else Oa = 536870912;
    return l = va.current, l !== null && (l.flags |= 32), Oa;
  }
  function Ra(l, n, u) {
    (l === jt && (Ht === 2 || Ht === 9) || l.cancelPendingCommit !== null) && (wu(l, 0), Si(
      l,
      ft,
      Oa,
      !1
    )), xi(l, u), ((At & 2) === 0 || l !== jt) && (l === jt && ((At & 2) === 0 && (io |= u), Vt === 4 && Si(
      l,
      ft,
      Oa,
      !1
    )), qu(l));
  }
  function pg(l, n, u) {
    if ((At & 6) !== 0) throw Error(O(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || ot(l, n), r = c ? Eg(l, n) : Rh(l, n, !0), s = c;
    do {
      if (r === 0) {
        oc && !c && Si(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, s && !gg(u)) {
          r = Rh(l, n, !1), s = !1;
          continue;
        }
        if (r === 2) {
          if (s = n, l.errorRecoveryDisabledLanes & s)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var v = l;
              r = ms;
              var R = v.current.memoizedState.isDehydrated;
              if (R && (wu(v, m).flags |= 256), m = Rh(
                v,
                m,
                !1
              ), m !== 2) {
                if (Sh && !R) {
                  v.errorRecoveryDisabledLanes |= s, io |= s, r = 4;
                  break e;
                }
                s = il, il = r, s !== null && (il === null ? il = s : il.push.apply(
                  il,
                  s
                ));
              }
              r = m;
            }
            if (s = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          wu(l, 0), Si(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, s = r, s) {
            case 0:
            case 1:
              throw Error(O(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Si(
                c,
                n,
                Oa,
                !Bu
              );
              break e;
            case 2:
              il = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(O(329));
          }
          if ((n & 62914560) === n && (r = Pn + 300 - Sl(), 10 < r)) {
            if (Si(
              c,
              n,
              Oa,
              !Bu
            ), be(c, 0, !0) !== 0) break e;
            ju = n, c.timeoutHandle = Rs(
              ps.bind(
                null,
                c,
                u,
                il,
                Of,
                Eh,
                n,
                Oa,
                io,
                ul,
                Bu,
                s,
                "Throttled",
                -0,
                0
              ),
              r
            );
            break e;
          }
          ps(
            c,
            u,
            il,
            Of,
            Eh,
            n,
            Oa,
            io,
            ul,
            Bu,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    qu(l);
  }
  function ps(l, n, u, c, r, s, m, v, R, q, Z, F, Y, V) {
    if (l.timeoutHandle = -1, F = n.subtreeFlags, F & 8192 || (F & 16785408) === 16785408) {
      F = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Bn
      }, hg(
        n,
        s,
        F
      );
      var ge = (s & 62914560) === s ? Pn - Sl() : (s & 4194048) === s ? ep - Sl() : 0;
      if (ge = Rp(
        F,
        ge
      ), ge !== null) {
        ju = s, l.cancelPendingCommit = ge(
          Rg.bind(
            null,
            l,
            n,
            s,
            u,
            c,
            r,
            m,
            v,
            R,
            Z,
            F,
            null,
            Y,
            V
          )
        ), Si(l, s, m, !q);
        return;
      }
    }
    Rg(
      l,
      n,
      s,
      u,
      c,
      r,
      m,
      v,
      R
    );
  }
  function gg(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var r = u[c], s = r.getSnapshot;
          r = r.value;
          try {
            if (!ua(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Si(l, n, u, c) {
    n &= ~bh, n &= ~io, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var r = n; 0 < r; ) {
      var s = 31 - Nl(r), m = 1 << s;
      c[s] = -1, r &= ~m;
    }
    u !== 0 && vr(l, u, n);
  }
  function Df() {
    return (At & 6) === 0 ? (Ei(0), !1) : !0;
  }
  function tp() {
    if (mt !== null) {
      if (Ht === 0)
        var l = mt.return;
      else
        l = mt, Vn = oi = null, kr(l), Fi = null, $c = 0, l = mt;
      for (; l !== null; )
        sg(l.alternate, l), l = l.return;
      mt = null;
    }
  }
  function wu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Lg(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), ju = 0, tp(), jt = l, mt = u = ii(l.current, null), ft = n, Ht = 0, Ge = null, Bu = !1, oc = ot(l, n), Sh = !1, ul = Oa = bh = io = In = Vt = 0, il = ms = null, Eh = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var r = 31 - Nl(c), s = 1 << r;
        n |= l[r], c &= ~s;
      }
    return Wn = n, Ja(), u;
  }
  function _f(l, n) {
    We = null, C.H = as, n === Ki || n === af ? (n = ry(), Ht = 3) : n === Jc ? (n = ry(), Ht = 4) : Ht = n === ih ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Ge = n, mt === null && (Vt = 1, yf(
      l,
      $a(n, l.current)
    ));
  }
  function vg() {
    var l = va.current;
    return l === null ? !0 : (ft & 4194048) === ft ? Pa === null : (ft & 62914560) === ft || (ft & 536870912) !== 0 ? l === Pa : !1;
  }
  function Sg() {
    var l = C.H;
    return C.H = as, l === null ? as : l;
  }
  function bg() {
    var l = C.A;
    return C.A = mg, l;
  }
  function Oh() {
    Vt = 4, Bu || (ft & 4194048) !== ft && va.current !== null || (oc = !0), (In & 134217727) === 0 && (io & 134217727) === 0 || jt === null || Si(
      jt,
      ft,
      Oa,
      !1
    );
  }
  function Rh(l, n, u) {
    var c = At;
    At |= 2;
    var r = Sg(), s = bg();
    (jt !== l || ft !== n) && (Of = null, wu(l, n)), n = !1;
    var m = Vt;
    e: do
      try {
        if (Ht !== 0 && mt !== null) {
          var v = mt, R = Ge;
          switch (Ht) {
            case 8:
              tp(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              va.current === null && (n = !0);
              var q = Ht;
              if (Ht = 0, Ge = null, co(l, v, R, q), u && oc) {
                m = 0;
                break e;
              }
              break;
            default:
              q = Ht, Ht = 0, Ge = null, co(l, v, R, q);
          }
        }
        f1(), m = Vt;
        break;
      } catch (Z) {
        _f(l, Z);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Vn = oi = null, At = c, C.H = r, C.A = s, mt === null && (jt = null, ft = 0, Ja()), m;
  }
  function f1() {
    for (; mt !== null; ) Tg(mt);
  }
  function Eg(l, n) {
    var u = At;
    At |= 2;
    var c = Sg(), r = bg();
    jt !== l || ft !== n ? (Of = null, _t = Sl() + 500, wu(l, n)) : oc = ot(
      l,
      n
    );
    e: do
      try {
        if (Ht !== 0 && mt !== null) {
          n = mt;
          var s = Ge;
          t: switch (Ht) {
            case 1:
              Ht = 0, Ge = null, co(l, n, s, 1);
              break;
            case 2:
            case 9:
              if (oy(s)) {
                Ht = 0, Ge = null, Ag(n);
                break;
              }
              n = function() {
                Ht !== 2 && Ht !== 9 || jt !== l || (Ht = 7), qu(l);
              }, s.then(n, n);
              break e;
            case 3:
              Ht = 7;
              break e;
            case 4:
              Ht = 5;
              break e;
            case 7:
              oy(s) ? (Ht = 0, Ge = null, Ag(n)) : (Ht = 0, Ge = null, co(l, n, s, 7));
              break;
            case 5:
              var m = null;
              switch (mt.tag) {
                case 26:
                  m = mt.memoizedState;
                case 5:
                case 27:
                  var v = mt;
                  if (m ? ja(m) : v.stateNode.complete) {
                    Ht = 0, Ge = null;
                    var R = v.sibling;
                    if (R !== null) mt = R;
                    else {
                      var q = v.return;
                      q !== null ? (mt = q, gs(q)) : mt = null;
                    }
                    break t;
                  }
              }
              Ht = 0, Ge = null, co(l, n, s, 5);
              break;
            case 6:
              Ht = 0, Ge = null, co(l, n, s, 6);
              break;
            case 8:
              tp(), Vt = 6;
              break e;
            default:
              throw Error(O(462));
          }
        }
        rc();
        break;
      } catch (Z) {
        _f(l, Z);
      }
    while (!0);
    return Vn = oi = null, C.H = c, C.A = r, At = u, mt !== null ? 0 : (jt = null, ft = 0, Ja(), Vt);
  }
  function rc() {
    for (; mt !== null && !ru(); )
      Tg(mt);
  }
  function Tg(l) {
    var n = Ly(l.alternate, l, Wn);
    l.memoizedProps = l.pendingProps, n === null ? gs(l) : mt = n;
  }
  function Ag(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = uc(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          ft
        );
        break;
      case 11:
        n = uc(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          ft
        );
        break;
      case 5:
        kr(n);
      default:
        sg(u, n), n = mt = ty(n, Wn), n = Ly(u, n, Wn);
    }
    l.memoizedProps = l.pendingProps, n === null ? gs(l) : mt = n;
  }
  function co(l, n, u, c) {
    Vn = oi = null, kr(n), Fi = null, $c = 0;
    var r = n.return;
    try {
      if (o1(
        l,
        r,
        n,
        u,
        ft
      )) {
        Vt = 1, yf(
          l,
          $a(u, l.current)
        ), mt = null;
        return;
      }
    } catch (s) {
      if (r !== null) throw mt = r, s;
      Vt = 1, yf(
        l,
        $a(u, l.current)
      ), mt = null;
      return;
    }
    n.flags & 32768 ? (ht || c === 1 ? l = !0 : oc || (ft & 536870912) !== 0 ? l = !1 : (Bu = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = va.current, c !== null && c.tag === 13 && (c.flags |= 16384))), Og(n, l)) : gs(n);
  }
  function gs(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        Og(
          n,
          Bu
        );
        return;
      }
      l = n.return;
      var u = fg(
        n.alternate,
        n,
        Wn
      );
      if (u !== null) {
        mt = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        mt = n;
        return;
      }
      mt = n = l;
    } while (n !== null);
    Vt === 0 && (Vt = 5);
  }
  function Og(l, n) {
    do {
      var u = rg(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, mt = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        mt = l;
        return;
      }
      mt = l = u;
    } while (l !== null);
    Vt = 6, mt = null;
  }
  function Rg(l, n, u, c, r, s, m, v, R) {
    l.cancelPendingCommit = null;
    do
      zf();
    while (zl !== 0);
    if ((At & 6) !== 0) throw Error(O(327));
    if (n !== null) {
      if (n === l.current) throw Error(O(177));
      if (s = n.lanes | n.childLanes, s |= bn, wo(
        l,
        u,
        s,
        m,
        v,
        R
      ), l === jt && (mt = jt = null, ft = 0), fc = n, vi = l, ju = u, Na = s, Th = r, Ah = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, xg(Nn, function() {
        return Cg(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = C.T, C.T = null, r = K.p, K.p = 2, m = At, At |= 4;
        try {
          bf(l, n, u);
        } finally {
          At = m, K.p = r, C.T = c;
        }
      }
      zl = 1, Dg(), _g(), zg();
    }
  }
  function Dg() {
    if (zl === 1) {
      zl = 0;
      var l = vi, n = fc, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = C.T, C.T = null;
        var c = K.p;
        K.p = 2;
        var r = At;
        At |= 4;
        try {
          mh(n, l);
          var s = xh, m = Xi(l.containerInfo), v = s.focusedElem, R = s.selectionRange;
          if (m !== v && v && v.ownerDocument && qc(
            v.ownerDocument.documentElement,
            v
          )) {
            if (R !== null && Mr(v)) {
              var q = R.start, Z = R.end;
              if (Z === void 0 && (Z = q), "selectionStart" in v)
                v.selectionStart = q, v.selectionEnd = Math.min(
                  Z,
                  v.value.length
                );
              else {
                var F = v.ownerDocument || document, Y = F && F.defaultView || window;
                if (Y.getSelection) {
                  var V = Y.getSelection(), ge = v.textContent.length, we = Math.min(R.start, ge), qt = R.end === void 0 ? we : Math.min(R.end, ge);
                  !V.extend && we > qt && (m = qt, qt = we, we = m);
                  var x = Pm(
                    v,
                    we
                  ), M = Pm(
                    v,
                    qt
                  );
                  if (x && M && (V.rangeCount !== 1 || V.anchorNode !== x.node || V.anchorOffset !== x.offset || V.focusNode !== M.node || V.focusOffset !== M.offset)) {
                    var j = F.createRange();
                    j.setStart(x.node, x.offset), V.removeAllRanges(), we > qt ? (V.addRange(j), V.extend(M.node, M.offset)) : (j.setEnd(M.node, M.offset), V.addRange(j));
                  }
                }
              }
            }
            for (F = [], V = v; V = V.parentNode; )
              V.nodeType === 1 && F.push({
                element: V,
                left: V.scrollLeft,
                top: V.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < F.length; v++) {
              var k = F[v];
              k.element.scrollLeft = k.left, k.element.scrollTop = k.top;
            }
          }
          Ml = !!Nh, xh = Nh = null;
        } finally {
          At = r, K.p = c, C.T = u;
        }
      }
      l.current = n, zl = 2;
    }
  }
  function _g() {
    if (zl === 2) {
      zl = 0;
      var l = vi, n = fc, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = C.T, C.T = null;
        var c = K.p;
        K.p = 2;
        var r = At;
        At |= 4;
        try {
          fs(l, n.alternate, n);
        } finally {
          At = r, K.p = c, C.T = u;
        }
      }
      zl = 3;
    }
  }
  function zg() {
    if (zl === 4 || zl === 3) {
      zl = 0, Ac();
      var l = vi, n = fc, u = ju, c = Ah;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? zl = 5 : (zl = 0, fc = vi = null, Mg(l, l.pendingLanes));
      var r = l.pendingLanes;
      if (r === 0 && (Pt = null), _m(u), n = n.stateNode, Rl && typeof Rl.onCommitFiberRoot == "function")
        try {
          Rl.onCommitFiberRoot(
            mn,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = C.T, r = K.p, K.p = 2, C.T = null;
        try {
          for (var s = l.onRecoverableError, m = 0; m < c.length; m++) {
            var v = c[m];
            s(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          C.T = n, K.p = r;
        }
      }
      (ju & 3) !== 0 && zf(), qu(l), r = l.pendingLanes, (u & 261930) !== 0 && (r & 42) !== 0 ? l === ys ? Rf++ : (Rf = 0, ys = l) : Rf = 0, Ei(0);
    }
  }
  function Mg(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Yr(n)));
  }
  function zf() {
    return Dg(), _g(), zg(), Cg();
  }
  function Cg() {
    if (zl !== 5) return !1;
    var l = vi, n = Na;
    Na = 0;
    var u = _m(ju), c = C.T, r = K.p;
    try {
      K.p = 32 > u ? 32 : u, C.T = null, u = Th, Th = null;
      var s = vi, m = ju;
      if (zl = 0, fc = vi = null, ju = 0, (At & 6) !== 0) throw Error(O(331));
      var v = At;
      if (At |= 4, Iy(s.current), Ef(
        s,
        s.current,
        m,
        u
      ), At = v, Ei(0, !1), Rl && typeof Rl.onPostCommitFiberRoot == "function")
        try {
          Rl.onPostCommitFiberRoot(mn, s);
        } catch {
        }
      return !0;
    } finally {
      K.p = r, C.T = c, Mg(l, n);
    }
  }
  function Ug(l, n, u) {
    n = $a(u, n), n = Hy(l.stateNode, n, 2), l = Ia(l, n, 2), l !== null && (xi(l, 2), qu(l));
  }
  function Nt(l, n, u) {
    if (l.tag === 3)
      Ug(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Ug(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Pt === null || !Pt.has(c))) {
            l = $a(u, l), u = Ny(2), c = Ia(n, u, 2), c !== null && (xy(
              u,
              c,
              n,
              l
            ), xi(c, 2), qu(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function vs(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new Py();
      var r = /* @__PURE__ */ new Set();
      c.set(n, r);
    } else
      r = c.get(n), r === void 0 && (r = /* @__PURE__ */ new Set(), c.set(n, r));
    r.has(u) || (Sh = !0, r.add(u), l = lp.bind(null, l, n, u), n.then(l, l));
  }
  function lp(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, jt === l && (ft & u) === u && (Vt === 4 || Vt === 3 && (ft & 62914560) === ft && 300 > Sl() - Pn ? (At & 2) === 0 && wu(l, 0) : bh |= u, ul === ft && (ul = 0)), qu(l);
  }
  function Hg(l, n) {
    n === 0 && (n = aa()), l = ui(l, n), l !== null && (xi(l, n), qu(l));
  }
  function nn(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), Hg(l, u);
  }
  function Ng(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var c = l.stateNode, r = l.memoizedState;
        r !== null && (u = r.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(O(314));
    }
    c !== null && c.delete(n), Hg(l, u);
  }
  function xg(l, n) {
    return ve(l, n);
  }
  var Mf = null, oo = null, ap = !1, Dh = !1, np = !1, bi = 0;
  function qu(l) {
    l !== oo && l.next === null && (oo === null ? Mf = oo = l : oo = oo.next = l), Dh = !0, ap || (ap = !0, bs());
  }
  function Ei(l, n) {
    if (!np && Dh) {
      np = !0;
      do
        for (var u = !1, c = Mf; c !== null; ) {
          if (l !== 0) {
            var r = c.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var m = c.suspendedLanes, v = c.pingedLanes;
              s = (1 << 31 - Nl(42 | l) + 1) - 1, s &= r & ~(m & ~v), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (u = !0, fo(c, s));
          } else
            s = ft, s = be(
              c,
              c === jt ? s : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (s & 3) === 0 || ot(c, s) || (u = !0, fo(c, s));
          c = c.next;
        }
      while (u);
      np = !1;
    }
  }
  function _h() {
    up();
  }
  function up() {
    Dh = ap = !1;
    var l = 0;
    bi !== 0 && r1() && (l = bi);
    for (var n = Sl(), u = null, c = Mf; c !== null; ) {
      var r = c.next, s = ip(c, n);
      s === 0 ? (c.next = null, u === null ? Mf = r : u.next = r, r === null && (oo = u)) : (u = c, (l !== 0 || (s & 3) !== 0) && (Dh = !0)), c = r;
    }
    zl !== 0 && zl !== 5 || Ei(l), bi !== 0 && (bi = 0);
  }
  function ip(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, r = l.expirationTimes, s = l.pendingLanes & -62914561; 0 < s; ) {
      var m = 31 - Nl(s), v = 1 << m, R = r[m];
      R === -1 ? ((v & u) === 0 || (v & c) !== 0) && (r[m] = $e(v, n)) : R <= n && (l.expiredLanes |= v), s &= ~v;
    }
    if (n = jt, u = ft, u = be(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (Ht === 2 || Ht === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Hi(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || ot(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Hi(c), _m(u)) {
        case 2:
        case 8:
          u = Bo;
          break;
        case 32:
          u = Nn;
          break;
        case 268435456:
          u = jo;
          break;
        default:
          u = Nn;
      }
      return c = Ss.bind(null, l), u = ve(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Hi(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Ss(l, n) {
    if (zl !== 0 && zl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (zf() && l.callbackNode !== u)
      return null;
    var c = ft;
    return c = be(
      l,
      l === jt ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (pg(l, c, n), ip(l, Sl()), l.callbackNode != null && l.callbackNode === u ? Ss.bind(null, l) : null);
  }
  function fo(l, n) {
    if (zf()) return null;
    pg(l, n, !0);
  }
  function bs() {
    Xg(function() {
      (At & 6) !== 0 ? ve(
        xo,
        _h
      ) : up();
    });
  }
  function zh() {
    if (bi === 0) {
      var l = Ji;
      l === 0 && (l = ae, ae <<= 1, (ae & 261888) === 0 && (ae = 256)), bi = l;
    }
    return bi;
  }
  function Bg(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : pn("" + l);
  }
  function ro(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Es(l, n, u, c, r) {
    if (n === "submit" && u && u.stateNode === r) {
      var s = Bg(
        (r[da] || null).action
      ), m = c.submitter;
      m && (n = (n = m[da] || null) ? Bg(n.formAction) : m.getAttribute("formAction"), n !== null && (s = n, m = null));
      var v = new Dr(
        "action",
        "action",
        null,
        c,
        r
      );
      l.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (bi !== 0) {
                  var R = m ? ro(r, m) : new FormData(r);
                  hf(
                    u,
                    {
                      pending: !0,
                      data: R,
                      method: r.method,
                      action: s
                    },
                    null,
                    R
                  );
                }
              } else
                typeof s == "function" && (v.preventDefault(), R = m ? ro(r, m) : new FormData(r), hf(
                  u,
                  {
                    pending: !0,
                    data: R,
                    method: r.method,
                    action: s
                  },
                  s,
                  R
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var Mh = 0; Mh < Wo.length; Mh++) {
    var Cf = Wo[Mh], cp = Cf.toLowerCase(), op = Cf[0].toUpperCase() + Cf.slice(1);
    ma(
      cp,
      "on" + op
    );
  }
  ma(Ur, "onAnimationEnd"), ma(ey, "onAnimationIteration"), ma(Md, "onAnimationStart"), ma("dblclick", "onDoubleClick"), ma("focusin", "onFocus"), ma("focusout", "onBlur"), ma(Yc, "onTransitionRun"), ma(Hr, "onTransitionStart"), ma(vu, "onTransitionCancel"), ma(J0, "onTransitionEnd"), hu("onMouseEnter", ["mouseout", "mouseover"]), hu("onMouseLeave", ["mouseout", "mouseover"]), hu("onPointerEnter", ["pointerout", "pointerover"]), hu("onPointerLeave", ["pointerout", "pointerover"]), wi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), wi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), wi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), wi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), wi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), wi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Uf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), jg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uf)
  );
  function wg(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], r = c.event;
      c = c.listeners;
      e: {
        var s = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var v = c[m], R = v.instance, q = v.currentTarget;
            if (v = v.listener, R !== s && r.isPropagationStopped())
              break e;
            s = v, r.currentTarget = q;
            try {
              s(r);
            } catch (Z) {
              Gc(Z);
            }
            r.currentTarget = null, s = R;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (v = c[m], R = v.instance, q = v.currentTarget, v = v.listener, R !== s && r.isPropagationStopped())
              break e;
            s = v, r.currentTarget = q;
            try {
              s(r);
            } catch (Z) {
              Gc(Z);
            }
            r.currentTarget = null, s = R;
          }
      }
    }
  }
  function st(l, n) {
    var u = n[od];
    u === void 0 && (u = n[od] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (Ts(n, l, 2, !1), u.add(c));
  }
  function fp(l, n, u) {
    var c = 0;
    n && (c |= 4), Ts(
      u,
      l,
      c,
      n
    );
  }
  var Ch = "_reactListening" + Math.random().toString(36).slice(2);
  function Hf(l) {
    if (!l[Ch]) {
      l[Ch] = !0, zc.forEach(function(u) {
        u !== "selectionchange" && (jg.has(u) || fp(u, !1, l), fp(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Ch] || (n[Ch] = !0, fp("selectionchange", !1, n));
    }
  }
  function Ts(l, n, u, c) {
    switch (Us(n)) {
      case 2:
        var r = Gu;
        break;
      case 8:
        r = Lu;
        break;
      default:
        r = Wl;
    }
    u = r.bind(
      null,
      n,
      u,
      l
    ), r = void 0, !Or || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (r = !0), c ? r !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: r
    }) : l.addEventListener(n, u, !0) : r !== void 0 ? l.addEventListener(n, u, {
      passive: r
    }) : l.addEventListener(n, u, !1);
  }
  function rp(l, n, u, c, r) {
    var s = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var v = c.stateNode.containerInfo;
          if (v === r) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var R = m.tag;
              if ((R === 3 || R === 4) && m.stateNode.containerInfo === r)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = Rc(v), m === null) return;
            if (R = m.tag, R === 5 || R === 6 || R === 26 || R === 27) {
              c = s = m;
              continue e;
            }
            v = v.parentNode;
          }
        }
        c = c.return;
      }
    jm(function() {
      var q = s, Z = pd(u), F = [];
      e: {
        var Y = Su.get(l);
        if (Y !== void 0) {
          var V = Dr, ge = l;
          switch (l) {
            case "keypress":
              if (vd(u) === 0) break e;
            case "keydown":
            case "keyup":
              V = Td;
              break;
            case "focusin":
              ge = "focus", V = bd;
              break;
            case "focusout":
              ge = "blur", V = bd;
              break;
            case "beforeblur":
            case "afterblur":
              V = bd;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = Jo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = x0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = Y0;
              break;
            case Ur:
            case ey:
            case Md:
              V = j0;
              break;
            case J0:
              V = n1;
              break;
            case "scroll":
            case "scrollend":
              V = l1;
              break;
            case "wheel":
              V = u1;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = Hc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = qn;
              break;
            case "toggle":
            case "beforetoggle":
              V = Zm;
          }
          var we = (n & 4) !== 0, qt = !we && (l === "scroll" || l === "scrollend"), x = we ? Y !== null ? Y + "Capture" : null : Y;
          we = [];
          for (var M = q, j; M !== null; ) {
            var k = M;
            if (j = k.stateNode, k = k.tag, k !== 5 && k !== 26 && k !== 27 || j === null || x === null || (k = xl(M, x), k != null && we.push(
              As(M, k, j)
            )), qt) break;
            M = M.return;
          }
          0 < we.length && (Y = new V(
            Y,
            ge,
            null,
            u,
            Z
          ), F.push({ event: Y, listeners: we }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (Y = l === "mouseover" || l === "pointerover", V = l === "mouseout" || l === "pointerout", Y && u !== yd && (ge = u.relatedTarget || u.fromElement) && (Rc(ge) || ge[Bi]))
            break e;
          if ((V || Y) && (Y = Z.window === Z ? Z : (Y = Z.ownerDocument) ? Y.defaultView || Y.parentWindow : window, V ? (ge = u.relatedTarget || u.toElement, V = q, ge = ge ? Rc(ge) : null, ge !== null && (qt = ce(ge), we = ge.tag, ge !== qt || we !== 5 && we !== 27 && we !== 6) && (ge = null)) : (V = null, ge = q), V !== ge)) {
            if (we = Jo, k = "onMouseLeave", x = "onMouseEnter", M = "mouse", (l === "pointerout" || l === "pointerover") && (we = qn, k = "onPointerLeave", x = "onPointerEnter", M = "pointer"), qt = V == null ? Y : qo(V), j = ge == null ? Y : qo(ge), Y = new we(
              k,
              M + "leave",
              V,
              u,
              Z
            ), Y.target = qt, Y.relatedTarget = j, k = null, Rc(Z) === q && (we = new we(
              x,
              M + "enter",
              ge,
              u,
              Z
            ), we.target = j, we.relatedTarget = qt, k = we), qt = k, V && ge)
              t: {
                for (we = qg, x = V, M = ge, j = 0, k = x; k; k = we(k))
                  j++;
                k = 0;
                for (var ze = M; ze; ze = we(ze))
                  k++;
                for (; 0 < j - k; )
                  x = we(x), j--;
                for (; 0 < k - j; )
                  M = we(M), k--;
                for (; j--; ) {
                  if (x === M || M !== null && x === M.alternate) {
                    we = x;
                    break t;
                  }
                  x = we(x), M = we(M);
                }
                we = null;
              }
            else we = null;
            V !== null && Uh(
              F,
              Y,
              V,
              we,
              !1
            ), ge !== null && qt !== null && Uh(
              F,
              qt,
              ge,
              we,
              !0
            );
          }
        }
        e: {
          if (Y = q ? qo(q) : window, V = Y.nodeName && Y.nodeName.toLowerCase(), V === "select" || V === "input" && Y.type === "file")
            var St = Fm;
          else if (gu(Y))
            if (Rd)
              St = wc;
            else {
              St = V0;
              var Ee = Q0;
            }
          else
            V = Y.nodeName, !V || V.toLowerCase() !== "input" || Y.type !== "checkbox" && Y.type !== "radio" ? q && Bm(q.elementType) && (St = Fm) : St = Li;
          if (St && (St = St(l, q))) {
            km(
              F,
              St,
              u,
              Z
            );
            break e;
          }
          Ee && Ee(l, Y, q), l === "focusout" && q && Y.type === "number" && q.memoizedProps.value != null && Mc(Y, "number", Y.value);
        }
        switch (Ee = q ? qo(q) : window, l) {
          case "focusin":
            (gu(Ee) || Ee.contentEditable === "true") && (Qi = Ee, ko = q, Sn = null);
            break;
          case "focusout":
            Sn = ko = Qi = null;
            break;
          case "mousedown":
            Gn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Gn = !1, zd(F, u, Z);
            break;
          case "selectionchange":
            if (Cr) break;
          case "keydown":
          case "keyup":
            zd(F, u, Z);
        }
        var ke;
        if (Ko)
          e: {
            switch (l) {
              case "compositionstart":
                var lt = "onCompositionStart";
                break e;
              case "compositionend":
                lt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                lt = "onCompositionUpdate";
                break e;
            }
            lt = void 0;
          }
        else
          xc ? Od(l, u) && (lt = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (lt = "onCompositionStart");
        lt && (Jm && u.locale !== "ko" && (xc || lt !== "onCompositionStart" ? lt === "onCompositionEnd" && xc && (ke = qm()) : (ai = Z, wm = "value" in ai ? ai.value : ai.textContent, xc = !0)), Ee = Os(q, lt), 0 < Ee.length && (lt = new w0(
          lt,
          l,
          null,
          u,
          Z
        ), F.push({ event: lt, listeners: Ee }), ke ? lt.data = ke : (ke = Km(u), ke !== null && (lt.data = ke)))), (ke = na ? X0(l, u) : i1(l, u)) && (lt = Os(q, "onBeforeInput"), 0 < lt.length && (Ee = new w0(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Z
        ), F.push({
          event: Ee,
          listeners: lt
        }), Ee.data = ke)), Es(
          F,
          l,
          q,
          u,
          Z
        );
      }
      wg(F, n);
    });
  }
  function As(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Os(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var r = l, s = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || s === null || (r = xl(l, u), r != null && c.unshift(
        As(l, r, s)
      ), r = xl(l, n), r != null && c.push(
        As(l, r, s)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function qg(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Uh(l, n, u, c, r) {
    for (var s = n._reactName, m = []; u !== null && u !== c; ) {
      var v = u, R = v.alternate, q = v.stateNode;
      if (v = v.tag, R !== null && R === c) break;
      v !== 5 && v !== 26 && v !== 27 || q === null || (R = q, r ? (q = xl(u, s), q != null && m.unshift(
        As(u, q, R)
      )) : r || (q = xl(u, s), q != null && m.push(
        As(u, q, R)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var Yg = /\r\n?/g, sp = /\u0000|\uFFFD/g;
  function dp(l) {
    return (typeof l == "string" ? l : "" + l).replace(Yg, `
`).replace(sp, "");
  }
  function hp(l, n) {
    return n = dp(n), dp(l) === n;
  }
  function wt(l, n, u, c, r, s) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || mu(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && mu(l, "" + c);
        break;
      case "className":
        dd(l, "class", c);
        break;
      case "tabIndex":
        dd(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        dd(l, u, c);
        break;
      case "style":
        U0(l, c, s);
        break;
      case "data":
        if (n !== "object") {
          dd(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = pn("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (u === "formAction" ? (n !== "input" && wt(l, n, "name", r.name, r, null), wt(
            l,
            n,
            "formEncType",
            r.formEncType,
            r,
            null
          ), wt(
            l,
            n,
            "formMethod",
            r.formMethod,
            r,
            null
          ), wt(
            l,
            n,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (wt(l, n, "encType", r.encType, r, null), wt(l, n, "method", r.method, r, null), wt(l, n, "target", r.target, r, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = pn("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Bn);
        break;
      case "onScroll":
        c != null && st("scroll", l);
        break;
      case "onScrollEnd":
        c != null && st("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(O(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(O(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = pn("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        st("beforetoggle", l), st("toggle", l), Lo(l, "popover", c);
        break;
      case "xlinkActuate":
        ti(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        ti(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        ti(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        ti(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        ti(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        ti(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        ti(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        ti(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        ti(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        Lo(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = t1.get(u) || u, Lo(l, u, c));
    }
  }
  function mp(l, n, u, c, r, s) {
    switch (u) {
      case "style":
        U0(l, c, s);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(O(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(O(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? mu(l, c) : (typeof c == "number" || typeof c == "bigint") && mu(l, "" + c);
        break;
      case "onScroll":
        c != null && st("scroll", l);
        break;
      case "onScrollEnd":
        c != null && st("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Bn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ji.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (r = u.endsWith("Capture"), n = u.slice(2, r ? u.length - 7 : void 0), s = l[da] || null, s = s != null ? s[u] : null, typeof s == "function" && l.removeEventListener(n, s, r), typeof c == "function")) {
              typeof s != "function" && s !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, r);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : Lo(l, u, c);
          }
    }
  }
  function Fl(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        st("error", l), st("load", l);
        var c = !1, r = !1, s;
        for (s in u)
          if (u.hasOwnProperty(s)) {
            var m = u[s];
            if (m != null)
              switch (s) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(O(137, n));
                default:
                  wt(l, n, s, m, u, null);
              }
          }
        r && wt(l, n, "srcSet", u.srcSet, u, null), c && wt(l, n, "src", u.src, u, null);
        return;
      case "input":
        st("invalid", l);
        var v = s = m = r = null, R = null, q = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var Z = u[c];
            if (Z != null)
              switch (c) {
                case "name":
                  r = Z;
                  break;
                case "type":
                  m = Z;
                  break;
                case "checked":
                  R = Z;
                  break;
                case "defaultChecked":
                  q = Z;
                  break;
                case "value":
                  s = Z;
                  break;
                case "defaultValue":
                  v = Z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Z != null)
                    throw Error(O(137, n));
                  break;
                default:
                  wt(l, n, c, Z, u, null);
              }
          }
        Er(
          l,
          s,
          v,
          R,
          q,
          m,
          r,
          !1
        );
        return;
      case "select":
        st("invalid", l), c = m = s = null;
        for (r in u)
          if (u.hasOwnProperty(r) && (v = u[r], v != null))
            switch (r) {
              case "value":
                s = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                c = v;
              default:
                wt(l, n, r, v, u, null);
            }
        n = s, u = m, l.multiple = !!c, n != null ? Xo(l, !!c, n, !1) : u != null && Xo(l, !!c, u, !0);
        return;
      case "textarea":
        st("invalid", l), s = r = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (v = u[m], v != null))
            switch (m) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                r = v;
                break;
              case "children":
                s = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(O(91));
                break;
              default:
                wt(l, n, m, v, u, null);
            }
        xm(l, c, r, s);
        return;
      case "option":
        for (R in u)
          u.hasOwnProperty(R) && (c = u[R], c != null) && (R === "selected" ? l.selected = c && typeof c != "function" && typeof c != "symbol" : wt(l, n, R, c, u, null));
        return;
      case "dialog":
        st("beforetoggle", l), st("toggle", l), st("cancel", l), st("close", l);
        break;
      case "iframe":
      case "object":
        st("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Uf.length; c++)
          st(Uf[c], l);
        break;
      case "image":
        st("error", l), st("load", l);
        break;
      case "details":
        st("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        st("error", l), st("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (q in u)
          if (u.hasOwnProperty(q) && (c = u[q], c != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(O(137, n));
              default:
                wt(l, n, q, c, u, null);
            }
        return;
      default:
        if (Bm(n)) {
          for (Z in u)
            u.hasOwnProperty(Z) && (c = u[Z], c !== void 0 && mp(
              l,
              n,
              Z,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (v in u)
      u.hasOwnProperty(v) && (c = u[v], c != null && wt(l, n, v, c, u, null));
  }
  function yp(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null, s = null, m = null, v = null, R = null, q = null, Z = null;
        for (V in u) {
          var F = u[V];
          if (u.hasOwnProperty(V) && F != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = F;
              default:
                c.hasOwnProperty(V) || wt(l, n, V, null, c, F);
            }
        }
        for (var Y in c) {
          var V = c[Y];
          if (F = u[Y], c.hasOwnProperty(Y) && (V != null || F != null))
            switch (Y) {
              case "type":
                s = V;
                break;
              case "name":
                r = V;
                break;
              case "checked":
                q = V;
                break;
              case "defaultChecked":
                Z = V;
                break;
              case "value":
                m = V;
                break;
              case "defaultValue":
                v = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null)
                  throw Error(O(137, n));
                break;
              default:
                V !== F && wt(
                  l,
                  n,
                  Y,
                  V,
                  c,
                  F
                );
            }
        }
        br(
          l,
          m,
          v,
          R,
          q,
          Z,
          s,
          r
        );
        return;
      case "select":
        V = m = v = Y = null;
        for (s in u)
          if (R = u[s], u.hasOwnProperty(s) && R != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                V = R;
              default:
                c.hasOwnProperty(s) || wt(
                  l,
                  n,
                  s,
                  null,
                  c,
                  R
                );
            }
        for (r in c)
          if (s = c[r], R = u[r], c.hasOwnProperty(r) && (s != null || R != null))
            switch (r) {
              case "value":
                Y = s;
                break;
              case "defaultValue":
                v = s;
                break;
              case "multiple":
                m = s;
              default:
                s !== R && wt(
                  l,
                  n,
                  r,
                  s,
                  c,
                  R
                );
            }
        n = v, u = m, c = V, Y != null ? Xo(l, !!u, Y, !1) : !!c != !!u && (n != null ? Xo(l, !!u, n, !0) : Xo(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        V = Y = null;
        for (v in u)
          if (r = u[v], u.hasOwnProperty(v) && r != null && !c.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                wt(l, n, v, null, c, r);
            }
        for (m in c)
          if (r = c[m], s = u[m], c.hasOwnProperty(m) && (r != null || s != null))
            switch (m) {
              case "value":
                Y = r;
                break;
              case "defaultValue":
                V = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(O(91));
                break;
              default:
                r !== s && wt(l, n, m, r, c, s);
            }
        Nm(l, Y, V);
        return;
      case "option":
        for (var ge in u)
          Y = u[ge], u.hasOwnProperty(ge) && Y != null && !c.hasOwnProperty(ge) && (ge === "selected" ? l.selected = !1 : wt(
            l,
            n,
            ge,
            null,
            c,
            Y
          ));
        for (R in c)
          Y = c[R], V = u[R], c.hasOwnProperty(R) && Y !== V && (Y != null || V != null) && (R === "selected" ? l.selected = Y && typeof Y != "function" && typeof Y != "symbol" : wt(
            l,
            n,
            R,
            Y,
            c,
            V
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var we in u)
          Y = u[we], u.hasOwnProperty(we) && Y != null && !c.hasOwnProperty(we) && wt(l, n, we, null, c, Y);
        for (q in c)
          if (Y = c[q], V = u[q], c.hasOwnProperty(q) && Y !== V && (Y != null || V != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null)
                  throw Error(O(137, n));
                break;
              default:
                wt(
                  l,
                  n,
                  q,
                  Y,
                  c,
                  V
                );
            }
        return;
      default:
        if (Bm(n)) {
          for (var qt in u)
            Y = u[qt], u.hasOwnProperty(qt) && Y !== void 0 && !c.hasOwnProperty(qt) && mp(
              l,
              n,
              qt,
              void 0,
              c,
              Y
            );
          for (Z in c)
            Y = c[Z], V = u[Z], !c.hasOwnProperty(Z) || Y === V || Y === void 0 && V === void 0 || mp(
              l,
              n,
              Z,
              Y,
              c,
              V
            );
          return;
        }
    }
    for (var x in u)
      Y = u[x], u.hasOwnProperty(x) && Y != null && !c.hasOwnProperty(x) && wt(l, n, x, null, c, Y);
    for (F in c)
      Y = c[F], V = u[F], !c.hasOwnProperty(F) || Y === V || Y == null && V == null || wt(l, n, F, Y, c, V);
  }
  function Hh(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function pp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var r = u[c], s = r.transferSize, m = r.initiatorType, v = r.duration;
        if (s && v && Hh(m)) {
          for (m = 0, v = r.responseEnd, c += 1; c < u.length; c++) {
            var R = u[c], q = R.startTime;
            if (q > v) break;
            var Z = R.transferSize, F = R.initiatorType;
            Z && Hh(F) && (R = R.responseEnd, m += Z * (R < v ? 1 : (v - q) / (R - q)));
          }
          if (--c, n += 8 * (s + m) / (r.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Nh = null, xh = null;
  function sc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Gg(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function gp(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Nf(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Bh = null;
  function r1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Bh ? !1 : (Bh = l, !0) : (Bh = null, !1);
  }
  var Rs = typeof setTimeout == "function" ? setTimeout : void 0, Lg = typeof clearTimeout == "function" ? clearTimeout : void 0, so = typeof Promise == "function" ? Promise : void 0, Xg = typeof queueMicrotask == "function" ? queueMicrotask : typeof so < "u" ? function(l) {
    return so.resolve(null).then(l).catch(vp);
  } : Rs;
  function vp(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function eu(l) {
    return l === "head";
  }
  function Sp(l, n) {
    var u = n, c = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(r), Zf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          ho(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, ho(u);
          for (var s = u.firstChild; s; ) {
            var m = s.nextSibling, v = s.nodeName;
            s[du] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && s.rel.toLowerCase() === "stylesheet" || u.removeChild(s), s = m;
          }
        } else
          u === "body" && ho(l.ownerDocument.body);
      u = r;
    } while (u);
    Zf(n);
  }
  function gl(l, n) {
    var u = l;
    l = 0;
    do {
      var c = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = c;
    } while (u);
  }
  function Ds(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ds(u), fd(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function s1(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var r = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[du])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (s = l.getAttribute("rel"), s === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (s !== r.rel || l.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || l.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (s = l.getAttribute("src"), (s !== (r.src == null ? null : r.src) || l.getAttribute("type") !== (r.type == null ? null : r.type) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && s && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var s = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && l.getAttribute("name") === s)
          return l;
      } else return l;
      if (l = Da(l.nextSibling), l === null) break;
    }
    return null;
  }
  function nt(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Da(l.nextSibling), l === null)) return null;
    return l;
  }
  function Qg(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = Da(l.nextSibling), l === null)) return null;
    return l;
  }
  function _n(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function dc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function xf(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function Da(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var _s = null;
  function jh(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return Da(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function tu(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Bf(l, n, u) {
    switch (n = sc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(O(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(O(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(O(454));
        return l;
      default:
        throw Error(O(451));
    }
  }
  function ho(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    fd(l);
  }
  var Ba = /* @__PURE__ */ new Map(), zs = /* @__PURE__ */ new Set();
  function ca(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var lu = K.d;
  K.d = {
    f: d1,
    r: Vg,
    D: Q,
    C: zt,
    L: h1,
    m: bp,
    X: Ti,
    S: Ep,
    M: hc
  };
  function d1() {
    var l = lu.f(), n = Df();
    return l || n;
  }
  function Vg(l) {
    var n = Dc(l);
    n !== null && n.tag === 5 && n.type === "form" ? Bt(n) : lu.r(l);
  }
  var jf = typeof document > "u" ? null : document;
  function Tl(l, n, u) {
    var c = jf;
    if (c && typeof n == "string" && n) {
      var r = Za(n);
      r = 'link[rel="' + l + '"][href="' + r + '"]', typeof u == "string" && (r += '[crossorigin="' + u + '"]'), zs.has(r) || (zs.add(r), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(r) === null && (n = c.createElement("link"), Fl(n, "link", l), Mt(n), c.head.appendChild(n)));
    }
  }
  function Q(l) {
    lu.D(l), Tl("dns-prefetch", l, null);
  }
  function zt(l, n) {
    lu.C(l, n), Tl("preconnect", l, n);
  }
  function h1(l, n, u) {
    lu.L(l, n, u);
    var c = jf;
    if (c && l && n) {
      var r = 'link[rel="preload"][as="' + Za(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (r += '[imagesrcset="' + Za(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (r += '[imagesizes="' + Za(
        u.imageSizes
      ) + '"]')) : r += '[href="' + Za(l) + '"]';
      var s = r;
      switch (n) {
        case "style":
          s = un(l);
          break;
        case "script":
          s = mo(l);
      }
      Ba.has(s) || (l = B(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Ba.set(s, l), c.querySelector(r) !== null || n === "style" && c.querySelector(mc(s)) || n === "script" && c.querySelector(Yf(s)) || (n = c.createElement("link"), Fl(n, "link", l), Mt(n), c.head.appendChild(n)));
    }
  }
  function bp(l, n) {
    lu.m(l, n);
    var u = jf;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", r = 'link[rel="modulepreload"][as="' + Za(c) + '"][href="' + Za(l) + '"]', s = r;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = mo(l);
      }
      if (!Ba.has(s) && (l = B({ rel: "modulepreload", href: l }, n), Ba.set(s, l), u.querySelector(r) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Yf(s)))
              return;
        }
        c = u.createElement("link"), Fl(c, "link", l), Mt(c), u.head.appendChild(c);
      }
    }
  }
  function Ep(l, n, u) {
    lu.S(l, n, u);
    var c = jf;
    if (c && l) {
      var r = _c(c).hoistableStyles, s = un(l);
      n = n || "default";
      var m = r.get(s);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = c.querySelector(
          mc(s)
        ))
          v.loading = 5;
        else {
          l = B(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Ba.get(s)) && wh(l, u);
          var R = m = c.createElement("link");
          Mt(R), Fl(R, "link", l), R._p = new Promise(function(q, Z) {
            R.onload = q, R.onerror = Z;
          }), R.addEventListener("load", function() {
            v.loading |= 1;
          }), R.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Ms(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: v
        }, r.set(s, m);
      }
    }
  }
  function Ti(l, n) {
    lu.X(l, n);
    var u = jf;
    if (u && l) {
      var c = _c(u).hoistableScripts, r = mo(l), s = c.get(r);
      s || (s = u.querySelector(Yf(r)), s || (l = B({ src: l, async: !0 }, n), (n = Ba.get(r)) && qh(l, n), s = u.createElement("script"), Mt(s), Fl(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function hc(l, n) {
    lu.M(l, n);
    var u = jf;
    if (u && l) {
      var c = _c(u).hoistableScripts, r = mo(l), s = c.get(r);
      s || (s = u.querySelector(Yf(r)), s || (l = B({ src: l, async: !0, type: "module" }, n), (n = Ba.get(r)) && qh(l, n), s = u.createElement("script"), Mt(s), Fl(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function wf(l, n, u, c) {
    var r = (r = Ke.current) ? ca(r) : null;
    if (!r) throw Error(O(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = un(u.href), u = _c(
          r
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = un(u.href);
          var s = _c(
            r
          ).hoistableStyles, m = s.get(l);
          if (m || (r = r.ownerDocument || r, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(l, m), (s = r.querySelector(
            mc(l)
          )) && !s._p && (m.instance = s, m.state.loading = 5), Ba.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Ba.set(l, u), s || Zg(
            r,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(O(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(O(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = mo(u), u = _c(
          r
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(O(444, l));
    }
  }
  function un(l) {
    return 'href="' + Za(l) + '"';
  }
  function mc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function qf(l) {
    return B({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Zg(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), Fl(n, "link", u), Mt(n), l.head.appendChild(n));
  }
  function mo(l) {
    return '[src="' + Za(l) + '"]';
  }
  function Yf(l) {
    return "script[async]" + l;
  }
  function Tp(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Za(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Mt(c), c;
          var r = B({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Mt(c), Fl(c, "style", r), Ms(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          r = un(u.href);
          var s = l.querySelector(
            mc(r)
          );
          if (s)
            return n.state.loading |= 4, n.instance = s, Mt(s), s;
          c = qf(u), (r = Ba.get(r)) && wh(c, r), s = (l.ownerDocument || l).createElement("link"), Mt(s);
          var m = s;
          return m._p = new Promise(function(v, R) {
            m.onload = v, m.onerror = R;
          }), Fl(s, "link", c), n.state.loading |= 4, Ms(s, u.precedence, l), n.instance = s;
        case "script":
          return s = mo(u.src), (r = l.querySelector(
            Yf(s)
          )) ? (n.instance = r, Mt(r), r) : (c = u, (r = Ba.get(s)) && (c = B({}, u), qh(c, r)), l = l.ownerDocument || l, r = l.createElement("script"), Mt(r), Fl(r, "link", c), l.head.appendChild(r), n.instance = r);
        case "void":
          return null;
        default:
          throw Error(O(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Ms(c, u.precedence, l));
    return n.instance;
  }
  function Ms(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = c.length ? c[c.length - 1] : null, s = r, m = 0; m < c.length; m++) {
      var v = c[m];
      if (v.dataset.precedence === n) s = v;
      else if (s !== r) break;
    }
    s ? s.parentNode.insertBefore(l, s.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function wh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function qh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Gf = null;
  function Ap(l, n, u) {
    if (Gf === null) {
      var c = /* @__PURE__ */ new Map(), r = Gf = /* @__PURE__ */ new Map();
      r.set(u, c);
    } else
      r = Gf, c = r.get(u), c || (c = /* @__PURE__ */ new Map(), r.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), r = 0; r < u.length; r++) {
      var s = u[r];
      if (!(s[du] || s[xt] || l === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = s.getAttribute(n) || "";
        m = l + m;
        var v = c.get(m);
        v ? v.push(s) : c.set(m, [s]);
      }
    }
    return c;
  }
  function Yh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function Op(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        return n.rel === "stylesheet" ? (l = n.disabled, typeof n.precedence == "string" && l == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function ja(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Yu(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var r = un(c.href), s = n.querySelector(
          mc(r)
        );
        if (s) {
          n = s._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = Gh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = s, Mt(s);
          return;
        }
        s = n.ownerDocument || n, c = qf(c), (r = Ba.get(r)) && wh(c, r), s = s.createElement("link"), Mt(s);
        var m = s;
        m._p = new Promise(function(v, R) {
          m.onload = v, m.onerror = R;
        }), Fl(s, "link", c), u.instance = s;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Gh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var cn = 0;
  function Rp(l, n) {
    return l.stylesheets && l.count === 0 && Xh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && Xh(l, l.stylesheets), l.unsuspend) {
          var s = l.unsuspend;
          l.unsuspend = null, s();
        }
      }, 6e4 + n);
      0 < l.imgBytes && cn === 0 && (cn = 62500 * pp());
      var r = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Xh(l, l.stylesheets), l.unsuspend)) {
            var s = l.unsuspend;
            l.unsuspend = null, s();
          }
        },
        (l.imgBytes > cn ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(r);
      };
    } : null;
  }
  function Gh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Xh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Lh = null;
  function Xh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Lh = /* @__PURE__ */ new Map(), n.forEach(Ll, l), Lh = null, Gh.call(l));
  }
  function Ll(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Lh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Lh.set(l, u);
        for (var r = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < r.length; s++) {
          var m = r[s];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      r = n.instance, m = r.getAttribute("data-precedence"), s = u.get(m) || c, s === c && u.set(null, r), u.set(m, r), this.count++, c = Gh.bind(this), r.addEventListener("load", c), r.addEventListener("error", c), s ? s.parentNode.insertBefore(r, s.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(r, l.firstChild)), n.state.loading |= 4;
    }
  }
  var Cs = {
    $$typeof: Me,
    Provider: null,
    Consumer: null,
    _currentValue: ne,
    _currentValue2: ne,
    _threadCount: 0
  };
  function Dp(l, n, u, c, r, s, m, v, R) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = yn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yn(0), this.hiddenUpdates = yn(null), this.identifierPrefix = c, this.onUncaughtError = r, this.onCaughtError = s, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = R, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Qh(l, n, u, c, r, s, m, v, R, q, Z, F) {
    return l = new Dp(
      l,
      n,
      u,
      m,
      R,
      q,
      Z,
      F,
      v
    ), n = 1, s === !0 && (n |= 24), s = ol(3, null, null, n), l.current = s, s.stateNode = l, n = qr(), n.refCount++, l.pooledCache = n, n.refCount++, s.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Zr(s), l;
  }
  function yo(l) {
    return l ? (l = ya, l) : ya;
  }
  function Jg(l, n, u, c, r, s) {
    r = yo(r), c.context === null ? c.context = r : c.pendingContext = r, c = di(n), c.payload = { element: u }, s = s === void 0 ? null : s, s !== null && (c.callback = s), u = Ia(l, c, n), u !== null && (Ra(u, l, n), Ii(u, l, n));
  }
  function Vh(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function _p(l, n) {
    Vh(l, n), (l = l.alternate) && Vh(l, n);
  }
  function Kg(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = ui(l, 67108864);
      n !== null && Ra(n, l, 67108864), _p(l, 67108864);
    }
  }
  function po(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = xa();
      n = id(n);
      var u = ui(l, n);
      u !== null && Ra(u, l, n), _p(l, n);
    }
  }
  var Ml = !0;
  function Gu(l, n, u, c) {
    var r = C.T;
    C.T = null;
    var s = K.p;
    try {
      K.p = 2, Wl(l, n, u, c);
    } finally {
      K.p = s, C.T = r;
    }
  }
  function Lu(l, n, u, c) {
    var r = C.T;
    C.T = null;
    var s = K.p;
    try {
      K.p = 8, Wl(l, n, u, c);
    } finally {
      K.p = s, C.T = r;
    }
  }
  function Wl(l, n, u, c) {
    if (Ml) {
      var r = zp(c);
      if (r === null)
        rp(
          l,
          n,
          c,
          Zh,
          u
        ), Ai(l, c);
      else if (m1(
        r,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (Ai(l, c), n & 4 && -1 < _a.indexOf(l)) {
        for (; r !== null; ) {
          var s = Dc(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var m = qe(s.pendingLanes);
                  if (m !== 0) {
                    var v = s;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var R = 1 << 31 - Nl(m);
                      v.entanglements[1] |= R, m &= ~R;
                    }
                    qu(s), (At & 6) === 0 && (_t = Sl() + 500, Ei(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = ui(s, 2), v !== null && Ra(v, s, 2), Df(), _p(s, 2);
            }
          if (s = zp(c), s === null && rp(
            l,
            n,
            c,
            Zh,
            u
          ), s === r) break;
          r = s;
        }
        r !== null && c.stopPropagation();
      } else
        rp(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function zp(l) {
    return l = pd(l), Lf(l);
  }
  var Zh = null;
  function Lf(l) {
    if (Zh = null, l = Rc(l), l !== null) {
      var n = ce(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = he(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = J(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Zh = l, null;
  }
  function Us(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (nd()) {
          case xo:
            return 2;
          case Bo:
            return 8;
          case Nn:
          case ud:
            return 32;
          case jo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xf = !1, Cl = null, Il = null, oa = null, yc = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), el = [], _a = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ai(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Cl = null;
        break;
      case "dragenter":
      case "dragleave":
        Il = null;
        break;
      case "mouseover":
      case "mouseout":
        oa = null;
        break;
      case "pointerover":
      case "pointerout":
        yc.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zn.delete(n.pointerId);
    }
  }
  function go(l, n, u, c, r, s) {
    return l === null || l.nativeEvent !== s ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: s,
      targetContainers: [r]
    }, n !== null && (n = Dc(n), n !== null && Kg(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, r !== null && n.indexOf(r) === -1 && n.push(r), l);
  }
  function m1(l, n, u, c, r) {
    switch (n) {
      case "focusin":
        return Cl = go(
          Cl,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "dragenter":
        return Il = go(
          Il,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "mouseover":
        return oa = go(
          oa,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "pointerover":
        var s = r.pointerId;
        return yc.set(
          s,
          go(
            yc.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
      case "gotpointercapture":
        return s = r.pointerId, zn.set(
          s,
          go(
            zn.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
    }
    return !1;
  }
  function $g(l) {
    var n = Rc(l.target);
    if (n !== null) {
      var u = ce(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = he(u), n !== null) {
            l.blockedOn = n, zm(l.priority, function() {
              po(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = J(u), n !== null) {
            l.blockedOn = n, zm(l.priority, function() {
              po(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Hs(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = zp(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        yd = c, u.target.dispatchEvent(c), yd = null;
      } else
        return n = Dc(u), n !== null && Kg(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Qf(l, n, u) {
    Hs(l) && u.delete(n);
  }
  function kg() {
    Xf = !1, Cl !== null && Hs(Cl) && (Cl = null), Il !== null && Hs(Il) && (Il = null), oa !== null && Hs(oa) && (oa = null), yc.forEach(Qf), zn.forEach(Qf);
  }
  function Xu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Xf || (Xf = !0, b.unstable_scheduleCallback(
      b.unstable_NormalPriority,
      kg
    )));
  }
  var Vf = null;
  function Fg(l) {
    Vf !== l && (Vf = l, b.unstable_scheduleCallback(
      b.unstable_NormalPriority,
      function() {
        Vf === l && (Vf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], r = l[n + 2];
          if (typeof c != "function") {
            if (Lf(c || u) === null)
              continue;
            break;
          }
          var s = Dc(u);
          s !== null && (l.splice(n, 3), n -= 3, hf(
            s,
            {
              pending: !0,
              data: r,
              method: u.method,
              action: c
            },
            c,
            r
          ));
        }
      }
    ));
  }
  function Zf(l) {
    function n(R) {
      return Xu(R, l);
    }
    Cl !== null && Xu(Cl, l), Il !== null && Xu(Il, l), oa !== null && Xu(oa, l), yc.forEach(n), zn.forEach(n);
    for (var u = 0; u < el.length; u++) {
      var c = el[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < el.length && (u = el[0], u.blockedOn === null); )
      $g(u), u.blockedOn === null && el.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var r = u[c], s = u[c + 1], m = r[da] || null;
        if (typeof s == "function")
          m || Fg(u);
        else if (m) {
          var v = null;
          if (s && s.hasAttribute("formAction")) {
            if (r = s, m = s[da] || null)
              v = m.formAction;
            else if (Lf(r) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[c + 1] = v : (u.splice(c, 3), c -= 3), Fg(u);
        }
      }
  }
  function Mp() {
    function l(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(m) {
            return r = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      r !== null && (r(), r = null), c || setTimeout(u, 20);
    }
    function u() {
      if (!c && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var c = !1, r = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        c = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), r !== null && (r(), r = null);
      };
    }
  }
  function Jh(l) {
    this._internalRoot = l;
  }
  Kh.prototype.render = Jh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(O(409));
    var u = n.current, c = xa();
    Jg(u, c, l, n, null, null);
  }, Kh.prototype.unmount = Jh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Jg(l.current, 2, null, l, null, null), Df(), n[Bi] = null;
    }
  };
  function Kh(l) {
    this._internalRoot = l;
  }
  Kh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = cd();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < el.length && n !== 0 && n < el[u].priority; u++) ;
      el.splice(u, 0, l), u === 0 && $g(l);
    }
  };
  var Cp = H.version;
  if (Cp !== "19.2.8")
    throw Error(
      O(
        527,
        Cp,
        "19.2.8"
      )
    );
  K.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(O(188)) : (l = Object.keys(l).join(","), Error(O(268, l)));
    return l = X(n), l = l !== null ? ye(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Wg = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ns.isDisabled && Ns.supportsFiber)
      try {
        mn = Ns.inject(
          Wg
        ), Rl = Ns;
      } catch {
      }
  }
  return O0.createRoot = function(l, n) {
    if (!ie(l)) throw Error(O(299));
    var u = !1, c = "", r = nh, s = Uy, m = uh;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Qh(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      null,
      r,
      s,
      m,
      Mp
    ), l[Bi] = n.current, Hf(l), new Jh(n);
  }, O0.hydrateRoot = function(l, n, u) {
    if (!ie(l)) throw Error(O(299));
    var c = !1, r = "", s = nh, m = Uy, v = uh, R = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (r = u.identifierPrefix), u.onUncaughtError !== void 0 && (s = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.formState !== void 0 && (R = u.formState)), n = Qh(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      r,
      R,
      s,
      m,
      v,
      Mp
    ), n.context = yo(null), u = n.current, c = xa(), c = id(c), r = di(c), r.callback = null, Ia(u, r, c), u = c, n.current.lanes = u, xi(n, u), qu(n), l[Bi] = n.current, Hf(l), new Kh(n);
  }, O0.version = "19.2.8", O0;
}
var R0 = {};
var t2;
function WT() {
  return t2 || (t2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function b(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function H(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = Tl(e) ? e.slice() : nt({}, e);
      return f[o] = H(e[o], t, a + 1, i), f;
    }
    function P(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return O(e, t, a, 0);
      }
    }
    function O(e, t, a, i) {
      var o = t[i], f = Tl(e) ? e.slice() : nt({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], Tl(f) ? f.splice(o, 1) : delete f[o]) : f[o] = O(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function ie(e, t, a) {
      var i = t[a], o = Tl(e) ? e.slice() : nt({}, e);
      return a + 1 === t.length ? (Tl(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = ie(e[i], t, a + 1), o);
    }
    function ce() {
      return !1;
    }
    function he() {
      return null;
    }
    function J() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function W() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function X() {
    }
    function ye() {
    }
    function B(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function D(e, t, a, i) {
      return new i1(e, t, a, i);
    }
    function te(e, t) {
      e.context === kf && (Uh(e.current, 2, t, e, null, null), an());
    }
    function De(e, t) {
      if (Zu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, rs(), X0(
          e.current,
          t,
          a
        ), an();
      }
    }
    function et(e) {
      Zu = e;
    }
    function Ie(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function xe(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function Gt(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Me(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Ue(e) {
      if (xe(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Be(e) {
      var t = e.alternate;
      if (!t) {
        if (t = xe(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Ue(o), e;
            if (f === i) return Ue(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function dt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = dt(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function pe(e) {
      return e === null || typeof e != "object" ? null : (e = Vg && e[Vg] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Ae(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === jf ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case xf:
          return "Fragment";
        case _s:
          return "Profiler";
        case Da:
          return "StrictMode";
        case ho:
          return "Suspense";
        case Ba:
          return "SuspenseList";
        case lu:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case dc:
            return "Portal";
          case tu:
            return e.displayName || "Context";
          case jh:
            return (e._context.displayName || "Context") + ".Consumer";
          case Bf:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case zs:
            return t = e.displayName || null, t !== null ? t : Ae(e.type) || "Memo";
          case ca:
            t = e._payload, e = e._init;
            try {
              return Ae(e(t));
            } catch {
            }
        }
      return null;
    }
    function Fe(e) {
      return typeof e.tag == "number" ? me(e) : typeof e.name == "string" ? e.name : null;
    }
    function me(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return t.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Ae(t);
        case 8:
          return t === Da ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return me(e.return);
      }
      return null;
    }
    function Rt(e) {
      return { current: e };
    }
    function Te(e, t) {
      0 > Ti ? console.error("Unexpected pop.") : (t !== Ep[Ti] && console.error("Unexpected Fiber popped."), e.current = bp[Ti], bp[Ti] = null, Ep[Ti] = null, Ti--);
    }
    function Je(e, t, a) {
      Ti++, bp[Ti] = e.current, Ep[Ti] = a, e.current = t;
    }
    function Kt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Lt(e, t) {
      Je(un, t, e), Je(wf, e, e), Je(hc, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? gg(t) : Uo;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = gg(t), t = Si(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = Am;
                break;
              case "math":
                t = Xv;
                break;
              default:
                t = Uo;
            }
      }
      a = a.toLowerCase(), a = Hm(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Te(hc, e), Je(hc, a, e);
    }
    function C(e) {
      Te(hc, e), Te(wf, e), Te(un, e);
    }
    function K() {
      return Kt(hc.current);
    }
    function ne(e) {
      e.memoizedState !== null && Je(mc, e, e);
      var t = Kt(hc.current), a = e.type, i = Si(t.context, a);
      a = Hm(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Je(wf, e, e), Je(hc, i, e));
    }
    function Oe(e) {
      wf.current === e && (Te(hc, e), Te(wf, e)), mc.current === e && (Te(mc, e), S0._currentValue = ld);
    }
    function je() {
    }
    function S() {
      if (qf === 0) {
        Zg = console.log, mo = console.info, Yf = console.warn, Tp = console.error, Ms = console.group, wh = console.groupCollapsed, qh = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: je,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      qf++;
    }
    function w() {
      if (qf--, qf === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: nt({}, e, { value: Zg }),
          info: nt({}, e, { value: mo }),
          warn: nt({}, e, { value: Yf }),
          error: nt({}, e, { value: Tp }),
          group: nt({}, e, { value: Ms }),
          groupCollapsed: nt({}, e, { value: wh }),
          groupEnd: nt({}, e, { value: qh })
        });
      }
      0 > qf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function le(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function ee(e) {
      if (Gf === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          Gf = t && t[1] || "", Ap = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Gf + e + Ap;
    }
    function _e(e, t) {
      if (!e || Yh) return "";
      var a = Op.get(e);
      if (a !== void 0) return a;
      Yh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = Q.H, Q.H = null, S();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var T = function() {
                  throw Error();
                };
                if (Object.defineProperty(T.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(T, []);
                  } catch (oe) {
                    var G = oe;
                  }
                  Reflect.construct(e, [], T);
                } else {
                  try {
                    T.call();
                  } catch (oe) {
                    G = oe;
                  }
                  e.call(T.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (oe) {
                  G = oe;
                }
                (T = e()) && typeof T.catch == "function" && T.catch(function() {
                });
              }
            } catch (oe) {
              if (oe && G && typeof oe.stack == "string")
                return [oe.stack, G.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), z = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < z.length && !z[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === z.length)
            for (f = p.length - 1, d = z.length - 1; 1 <= f && 0 <= d && p[f] !== z[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== z[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== z[d]) {
                    var U = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && Op.set(e, U), U;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Yh = !1, Q.H = i, w(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? ee(p) : "", typeof e == "function" && Op.set(e, p), p;
    }
    function Ke(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ee(e.type);
        case 16:
          return ee("Lazy");
        case 13:
          return e.child !== t && t !== null ? ee("Suspense Fallback") : ee("Suspense");
        case 19:
          return ee("SuspenseList");
        case 0:
        case 15:
          return _e(e.type, !1);
        case 11:
          return _e(e.type.render, !1);
        case 1:
          return _e(e.type, !0);
        case 31:
          return ee("Activity");
        default:
          return "";
      }
    }
    function He(e) {
      try {
        var t = "", a = null;
        do {
          t += Ke(e, a);
          var i = e._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = t;
                e: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var z = le(p), U = z.lastIndexOf(`
`), T = U === -1 ? z : z.slice(U + 1);
                    if (T.indexOf(h) !== -1) {
                      var G = `
` + T;
                      break e;
                    }
                  }
                  G = ee(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                t = d + G;
              }
            }
          a = e, e = e.return;
        } while (e);
        return t;
      } catch (oe) {
        return `
Error generating stack: ` + oe.message + `
` + oe.stack;
      }
    }
    function $t(e) {
      return (e = e ? e.displayName || e.name : "") ? ee(e) : "";
    }
    function Et() {
      if (ja === null) return null;
      var e = ja._debugOwner;
      return e != null ? Fe(e) : null;
    }
    function Ga() {
      if (ja === null) return "";
      var e = ja;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += ee(e.type);
            break;
          case 13:
            t += ee("Suspense");
            break;
          case 19:
            t += ee("SuspenseList");
            break;
          case 31:
            t += ee("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += $t(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += $t(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            if (e && i) {
              var o = le(i);
              o !== "" && (t += `
` + o);
            }
          } else if (e.debugStack != null) {
            var f = e.debugStack;
            (e = e.owner) && f && (t += `
` + le(f));
          } else break;
        var d = t;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function se(e, t, a, i, o, f, d) {
      var h = ja;
      Ci(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        Ci(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Ci(e) {
      Q.getCurrentStack = e === null ? null : Ga, Yu = !1, ja = e;
    }
    function Ui(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function La(e) {
      try {
        return fu(e), !1;
      } catch {
        return !0;
      }
    }
    function fu(e) {
      return "" + e;
    }
    function Tt(e, t) {
      if (La(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Ui(e)
        ), fu(e);
    }
    function la(e, t) {
      if (La(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Ui(e)
        ), fu(e);
    }
    function Tc(e) {
      if (La(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Ui(e)
        ), fu(e);
    }
    function pr(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        po = t.inject(e), Ml = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function ve(e) {
      if (typeof _p == "function" && Kg(e), Ml && typeof Ml.setStrictMode == "function")
        try {
          Ml.setStrictMode(po, e);
        } catch (t) {
          Gu || (Gu = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function Hi(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (zp(e) / Zh | 0) | 0;
    }
    function ru(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function Ac(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = ru(i) : (d &= h, d !== 0 ? o = ru(d) : a || (a = h & ~e, a !== 0 && (o = ru(a))))) : (h = i & ~f, h !== 0 ? o = ru(h) : d !== 0 ? o = ru(d) : a || (a = i & ~e, a !== 0 && (o = ru(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function Sl(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function nd(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function xo() {
      var e = Xf;
      return Xf <<= 1, (Xf & 62914560) === 0 && (Xf = 4194304), e;
    }
    function Bo(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Nn(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function ud(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var z = 31 - Wl(a), U = 1 << z;
        h[z] = 0, y[z] = -1;
        var T = p[z];
        if (T !== null)
          for (p[z] = null, z = 0; z < T.length; z++) {
            var G = T[z];
            G !== null && (G.lane &= -536870913);
          }
        a &= ~U;
      }
      i !== 0 && jo(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function jo(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Wl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 261930;
    }
    function gr(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Wl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function Oc(e, t) {
      var a = t & -t;
      return a = (a & 42) !== 0 ? 1 : mn(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
    }
    function mn(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Rl(e, t, a) {
      if (Lu)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Wl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Xa(e, t) {
      if (Lu)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Wl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Nl(e) {
      return e &= -e, Cl < e ? Il < e ? (e & 134217727) !== 0 ? oa : yc : Il : Cl;
    }
    function Ni() {
      var e = zt.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? oa : Nh(e.type));
    }
    function g(e, t) {
      var a = zt.p;
      try {
        return zt.p = e, t();
      } finally {
        zt.p = a;
      }
    }
    function N(e) {
      delete e[el], delete e[_a], delete e[go], delete e[m1], delete e[$g];
    }
    function ae(e) {
      var t = e[el];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ai] || a[el]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = oo(e); e !== null; ) {
              if (a = e[el])
                return a;
              e = oo(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ue(e) {
      if (e = e[el] || e[Ai]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function Se(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function qe(e) {
      var t = e[Hs];
      return t || (t = e[Hs] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function be(e) {
      e[Qf] = !0;
    }
    function ot(e, t) {
      $e(e, t), $e(e + "Capture", t);
    }
    function $e(e, t) {
      Xu[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Xu[e] = t;
      var a = e.toLowerCase();
      for (Vf[a] = e, e === "onDoubleClick" && (Vf.ondblclick = e), e = 0; e < t.length; e++)
        kg.add(t[e]);
    }
    function aa(e, t) {
      Fg[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function yn(e) {
      return cn.call(Jh, e) ? !0 : cn.call(Mp, e) ? !1 : Zf.test(e) ? Jh[e] = !0 : (Mp[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function xi(e, t, a) {
      if (yn(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (Tt(a, t), e === "" + a ? a : e);
      }
    }
    function wo(e, t, a) {
      if (yn(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          Tt(a, t), e.setAttribute(t, "" + a);
        }
    }
    function vr(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        Tt(a, t), e.setAttribute(t, "" + a);
      }
    }
    function su(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        Tt(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Qa(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Tc(e), e;
        default:
          return "";
      }
    }
    function id(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function _m(e, t, a) {
      var i = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var o = i.get, f = i.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Tc(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            Tc(d), a = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function cd(e) {
      if (!e._valueTracker) {
        var t = id(e) ? "checked" : "value";
        e._valueTracker = _m(
          e,
          t,
          "" + e[t]
        );
      }
    }
    function zm(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = id(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function xn(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function xt(e) {
      return e.replace(
        Kh,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function da(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Wg || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Et() || "A component",
        t.type
      ), Wg = !0), t.value === void 0 || t.defaultValue === void 0 || Cp || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Et() || "A component",
        t.type
      ), Cp = !0);
    }
    function Bi(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (Tt(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Qa(t)) : e.value !== "" + Qa(t) && (e.value = "" + Qa(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Mm(e, d, Qa(t)) : a != null ? Mm(e, d, Qa(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (Tt(h, "name"), e.name = "" + Qa(h)) : e.removeAttribute("name");
    }
    function od(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (Tt(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          cd(e);
          return;
        }
        a = a != null ? "" + Qa(a) : "", t = t != null ? "" + Qa(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (Tt(d, "name"), e.name = d), cd(e);
    }
    function Mm(e, t, a) {
      t === "number" && xn(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function z0(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Ds.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Ns || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Ns = !0);
    }
    function Cm() {
      var e = Et();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function du(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Qa(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function fd(e, t) {
      for (e = 0; e < c.length; e++) {
        var a = c[e];
        if (t[a] != null) {
          var i = Tl(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Cm()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Cm()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function Rc(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || r || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Et() || "A component"
      ), r = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Dc(e, t, a) {
      if (t != null && (t = "" + Qa(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Qa(a) : "";
    }
    function qo(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Tl(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = Qa(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i), cd(e);
    }
    function _c(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? _c(e.children[0], t) : e;
    }
    function Mt(e) {
      return "  " + "  ".repeat(e);
    }
    function zc(e) {
      return "+ " + "  ".repeat(e);
    }
    function ji(e) {
      return "- " + "  ".repeat(e);
    }
    function wi(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function hu(e, t) {
      return s.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function rd(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return zc(a) + hu(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), zc(a) + hu(e, i) + `
` + ji(a) + hu(t, i) + `
`;
      }
      return Mt(a) + hu(e, i) + `
`;
    }
    function sd(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Yo(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Tl(e)) return "[...]";
          if (e.$$typeof === _n)
            return (t = Ae(e.type)) ? "<" + t + ">" : "<...>";
          var a = sd(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = Yo(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Go(e, t) {
      return typeof e != "string" || s.test(e) ? "{" + Yo(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Lo(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = Go(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function dd(e, t, a) {
      var i = "", o = nt({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Yo(e[f], d);
          t.hasOwnProperty(f) ? (d = Yo(t[f], d), i += zc(a) + f + ": " + h + `
`, i += ji(a) + f + ": " + d + `
`) : i += zc(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = Yo(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += ji(a) + y + ": " + e + `
`);
      return i;
    }
    function ti(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += Lo(
          e,
          t,
          Mt(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = t[d];
              y = a[y];
              var z = Go(
                p,
                h
              );
              h = Go(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && sd(p) === "Object" && sd(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < z.indexOf("...") || -1 < h.indexOf("...")) ? o += Mt(i + 1) + d + `={{
` + dd(
                p,
                y,
                i + 2
              ) + Mt(i + 1) + `}}
` : (o += zc(i + 1) + d + "=" + z + `
`, o += ji(i + 1) + d + "=" + h + `
`);
            } else
              o += Mt(i + 1) + d + "=" + Go(t[d], h) + `
`;
          }
        f.forEach(function(U) {
          if (U !== "children") {
            var T = 120 - 2 * (i + 1) - U.length - 1;
            o += ji(i + 1) + U + "=" + Go(a[U], T) + `
`;
          }
        }), o = o === "" ? Mt(i) + "<" + e + `>
` : Mt(i) + "<" + e + `
` + o + Mt(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += rd(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + rd("" + t, null, i + 1) : o + rd("" + t, void 0, i + 1)), o;
    }
    function Va(e, t) {
      var a = wi(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Va(e, t), e = e.sibling;
        return a;
      }
      return Mt(t) + "<" + a + `>
`;
    }
    function hd(e, t) {
      var a = _c(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Mt(t) + `...
` + hd(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Mt(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = rd(o, e.serverProps, t), t++;
      else if (f = wi(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = Go(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = Mt(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Lo(
            f,
            o,
            zc(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = ti(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (p += hd(d, t), f++) : p += Va(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += Mt(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (ji(t) + hu(f, 120 - 2 * t) + `
`) : p + Lo(
          f.type,
          f.props,
          ji(t)
        );
      return a + i + p;
    }
    function Um(e) {
      try {
        return `

` + hd(e, 0);
      } catch {
        return "";
      }
    }
    function md(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? Um(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Hm(e, t) {
      var a = nt({}, e || Z), i = { tag: t };
      return v.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), R.indexOf(t) !== -1 && (a.pTagInButtonScope = null), m.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function Sr(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return q.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function e1(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Za(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function br(e, t) {
      t = t || Z;
      var a = t.current;
      if (t = (a = Sr(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : e1(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, F[t]) return !1;
      F[t] = !0;
      var o = (t = ja) ? Za(t.return, i) : null, f = t !== null && o !== null ? md(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || se(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function Er(e, t, a) {
      if (a || Sr("#text", t, !1))
        return !0;
      if (a = "#text|" + t, F[a]) return !1;
      F[a] = !0;
      var i = (a = ja) ? Za(a, t) : null;
      return a = a !== null && i !== null ? md(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Mc(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function Xo(e) {
      return e.replace(x, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Nm(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? j.hasOwnProperty(t) && j[t] || (j[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        Xo(t.replace(qt, "ms-"))
      )) : we.test(t) ? j.hasOwnProperty(t) && j[t] || (j[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !M.test(a) || k.hasOwnProperty(a) && k[a] || (k[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(M, "")
      )), typeof a == "number" && (isNaN(a) ? ze || (ze = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || St || (St = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Ee.has(t) ? t === "float" ? e.cssFloat = a : (la(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function xm(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = Y[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = Y[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in t)
            for (o = Y[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in i)
            if (o = i[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var z = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                z == null || typeof z == "boolean" || z === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var U in a)
          !a.hasOwnProperty(U) || t != null && t.hasOwnProperty(U) || (U.indexOf("--") === 0 ? e.setProperty(U, "") : U === "float" ? e.cssFloat = "" : e[U] = "");
        for (var T in t)
          p = t[T], t.hasOwnProperty(T) && a[T] !== p && Nm(e, T, p);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Nm(e, i, t[i]);
    }
    function mu(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function M0(e) {
      return Ot.get(e) || e;
    }
    function C0(e, t) {
      if (cn.call($h, t) && $h[t])
        return !0;
      if (b2.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Ig.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), $h[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), $h[t] = !0;
      }
      if (S2.test(t)) {
        if (e = t.toLowerCase(), e = Ig.hasOwnProperty(e) ? e : null, e == null) return $h[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), $h[t] = !0);
      }
      return !0;
    }
    function U0(e, t) {
      var a = [], i;
      for (i in t)
        C0(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Bm(e, t, a, i) {
      if (cn.call(on, t) && on[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), on[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), on[t] = !0;
        if (NS.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), on[t] = !0;
      } else if (NS.test(t))
        return E2.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), on[t] = !0;
      if (T2.test(t) || A2.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), on[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), on[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), on[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), on[t] = !0;
      if (au.hasOwnProperty(o)) {
        if (o = au[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), on[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), on[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), on[t] = !0);
          }
        case "function":
        case "symbol":
          return on[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), on[t] = !0;
          }
      }
      return !0;
    }
    function t1(e, t, a) {
      var i = [], o;
      for (o in t)
        Bm(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Tr(e) {
      return O2.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function pn() {
    }
    function Bn(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function yd(e) {
      var t = ue(e);
      if (t && (e = t.stateNode)) {
        var a = e[_a] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Bi(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (Tt(t, "name"), a = a.querySelectorAll(
                'input[name="' + xt(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[_a] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Bi(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && zm(i);
            }
            break e;
          case "textarea":
            Dc(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && du(e, !!a.multiple, t, !1);
        }
      }
    }
    function pd(e, t, a) {
      if (y1) return e(t, a);
      y1 = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (y1 = !1, (kh !== null || Fh !== null) && (an(), kh && (t = kh, e = Fh, Fh = kh = null, yd(t), e)))
          for (t = 0; t < e.length; t++) yd(e[t]);
      }
    }
    function yu(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[_a] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function Cc() {
      if (Pg) return Pg;
      var e, t = g1, a = t.length, i, o = "value" in Jf ? Jf.value : Jf.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Pg = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function Ar(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Qo() {
      return !0;
    }
    function jm() {
      return !1;
    }
    function xl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Qo : jm, this.isPropagationStopped = jm, this;
      }
      return nt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Qo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Qo);
        },
        persist: function() {
        },
        isPersistent: Qo
      }), t;
    }
    function li(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = w2[e]) ? !!t[e] : !1;
    }
    function Or() {
      return li;
    }
    function Vo(e, t) {
      switch (e) {
        case "keyup":
          return k2.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== wS;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ai(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function wm(e, t) {
      switch (e) {
        case "compositionend":
          return ai(t);
        case "keypress":
          return t.which !== YS ? null : (LS = !0, GS);
        case "textInput":
          return e = t.data, e === GS && LS ? null : e;
        default:
          return null;
      }
    }
    function gd(e, t) {
      if (Wh)
        return e === "compositionend" || !E1 && Vo(e, t) ? (e = Cc(), Pg = g1 = Jf = null, Wh = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return qS && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function qm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!W2[e.type] : t === "textarea";
    }
    function vd(e) {
      if (!pc) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Rr(e, t, a, i) {
      kh ? Fh ? Fh.push(i) : Fh = [i] : kh = i, t = In(t, "onChange"), 0 < t.length && (a = new ev(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function H0(e) {
      Ht(e, 0);
    }
    function kl(e) {
      var t = Se(e);
      if (zm(t)) return e;
    }
    function qi(e, t) {
      if (e === "change") return t;
    }
    function Dr() {
      jp && (jp.detachEvent("onpropertychange", Zo), wp = jp = null);
    }
    function Zo(e) {
      if (e.propertyName === "value" && kl(wp)) {
        var t = [];
        Rr(
          t,
          wp,
          e,
          Bn(e)
        ), pd(H0, t);
      }
    }
    function l1(e, t, a) {
      e === "focusin" ? (Dr(), jp = t, wp = a, jp.attachEvent("onpropertychange", Zo)) : e === "focusout" && Dr();
    }
    function Ym(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return kl(wp);
    }
    function Gm(e, t) {
      if (e === "click") return kl(t);
    }
    function _r(e, t) {
      if (e === "input" || e === "change")
        return kl(t);
    }
    function Sd(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Jo(e, t) {
      if (fn(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!cn.call(t, o) || !fn(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function N0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function x0(e, t) {
      var a = N0(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = N0(a);
      }
    }
    function B0(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? B0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function bd(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = xn(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = xn(e.document);
      }
      return t;
    }
    function Lm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function j0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      A1 || Ih == null || Ih !== xn(i) || (i = Ih, "selectionStart" in i && Lm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), qp && Jo(qp, i) || (qp = i, i = In(T1, "onSelect"), 0 < i.length && (t = new ev(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Ih)));
    }
    function Uc(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Hc(e) {
      if (O1[e]) return O1[e];
      if (!Ph[e]) return e;
      var t = Ph[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in QS)
          return O1[e] = t[a];
      return e;
    }
    function jn(e, t) {
      $S.set(e, t), ot(t, [e]);
    }
    function w0(e) {
      for (var t = lv, a = 0; a < e.length; a++) {
        var i = e[a];
        if (typeof i == "object" && i !== null)
          if (Tl(i) && i.length === 2 && typeof i[0] == "string") {
            if (t !== lv && t !== M1)
              return _1;
            t = M1;
          } else return _1;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || t !== lv && t !== z1)
            return _1;
          t = z1;
        }
      }
      return t;
    }
    function Xm(e, t, a, i) {
      for (var o in e)
        cn.call(e, o) && o[0] !== "_" && pu(o, e[o], t, a, i);
    }
    function pu(e, t, a, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === _n) {
              var f = Ae(t.type) || "…", d = t.key;
              t = t.props;
              var h = Object.keys(t), y = h.length;
              if (d == null && y === 0) {
                t = "<" + f + " />";
                break;
              }
              if (3 > i || y === 1 && h[0] === "children" && d == null) {
                t = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(i) + e,
                "<" + f
              ]), d !== null && pu(
                "key",
                d,
                a,
                i + 1,
                o
              ), e = !1;
              for (var p in t)
                p === "children" ? t.children != null && (!Tl(t.children) || 0 < t.children.length) && (e = !0) : cn.call(t, p) && p[0] !== "_" && pu(
                  p,
                  t[p],
                  a,
                  i + 1,
                  o
                );
              a.push([
                "",
                e ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(t), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = w0(t), p === z1 || p === lv) {
                t = JSON.stringify(t);
                break;
              } else if (p === M1) {
                for (a.push([
                  o + "  ".repeat(i) + e,
                  ""
                ]), e = 0; e < t.length; e++)
                  f = t[e], pu(
                    f[0],
                    f[1],
                    a,
                    i + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (t.status === "fulfilled") {
                if (f = a.length, pu(
                  e,
                  t.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (f = a.length, pu(
                e,
                t.reason,
                a,
                i,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(i) + e,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(t)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(i) + e,
              f === "Object" ? 3 > i ? "" : "…" : f
            ]), 3 > i && Xm(t, a, i + 1, o);
            return;
          }
        case "function":
          t = t.name === "" ? "() => {}" : t.name + "() {}";
          break;
        case "string":
          t = t === nT ? "…" : JSON.stringify(t);
          break;
        case "undefined":
          t = "undefined";
          break;
        case "boolean":
          t = t ? "true" : "false";
          break;
        default:
          t = String(t);
      }
      a.push([
        o + "  ".repeat(i) + e,
        t
      ]);
    }
    function q0(e, t, a, i) {
      var o = !0;
      for (d in e)
        d in t || (a.push([
          av + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in t)
        if (f in e) {
          var d = e[f], h = t[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [av + o, "…"],
                [nv + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === _n) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Ae(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [av + o, d],
                        [nv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        WS + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, q0(
                        d,
                        h,
                        a,
                        i + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    WS + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              pu(f, d, a, i, av), pu(f, h, a, i, nv);
            }
            o = !1;
          }
        } else
          a.push([
            nv + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function wn(e) {
      vt = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function gn(e, t, a, i) {
      tl && ($f.start = t, $f.end = a, vo.color = "warning", vo.tooltipText = i, vo.properties = null, (e = e._debugTask) ? e.run(
        performance.measure.bind(
          performance,
          i,
          $f
        )
      ) : performance.measure(i, $f));
    }
    function Ed(e, t, a) {
      gn(e, t, a, "Reconnect");
    }
    function Td(e, t, a, i, o) {
      var f = me(e);
      if (f !== null && tl) {
        var d = e.alternate, h = e.actualDuration;
        if (d === null || d.child !== e.child)
          for (var y = e.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var p = e.memoizedProps;
        h = e._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [uT], p = q0(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Kf && (d.lanes & o) === 0 && 100 < e.actualDuration ? (Kf = !0, y[0] = iT, vo.color = "warning", vo.tooltipText = IS) : (vo.color = i, vo.tooltipText = f), vo.properties = y, $f.start = t, $f.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            $f
          )
        ) : performance.measure(
          "​" + f,
          $f
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Qu,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Qu,
          void 0,
          i
        );
      }
    }
    function Qm(e, t, a, i) {
      if (tl) {
        var o = me(e);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          e.key !== null && pu("key", e.key, d, 0, ""), e.memoizedProps !== null && Xm(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
            start: t,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: Qu,
                tooltipText: e.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, e)
          ) : performance.measure("​" + o, e);
        }
      }
    }
    function qn(e, t, a, i, o) {
      if (o !== null) {
        if (tl) {
          var f = me(e);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            e.key !== null && pu("key", e.key, i, 0, ""), e.memoizedProps !== null && Xm(e.memoizedProps, i, 0, ""), t = {
              start: t,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: Qu,
                  tooltipText: "A lifecycle or effect errored",
                  properties: i
                }
              }
            }, (e = e._debugTask) ? e.run(
              performance.measure.bind(
                performance,
                "​" + f,
                t
              )
            ) : performance.measure("​" + f, t);
          }
        }
      } else
        f = me(e), f !== null && tl && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Qu,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Qu,
          void 0,
          o
        ));
    }
    function a1(e, t, a, i) {
      if (tl && !(t <= e)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            a,
            e,
            t,
            vt,
            pt,
            o
          )
        ) : console.timeStamp(
          a,
          e,
          t,
          vt,
          pt,
          o
        );
      }
    }
    function Y0(e, t, a, i) {
      !tl || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          e,
          t,
          vt,
          pt,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        e,
        t,
        vt,
        pt,
        a
      ));
    }
    function G0(e, t, a, i) {
      !tl || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          e,
          t,
          vt,
          pt,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        e,
        t,
        vt,
        pt,
        a
      ));
    }
    function n1(e, t, a, i, o, f) {
      if (tl && !(t <= e)) {
        a = [];
        for (var d = 0; d < i.length; d++) {
          var h = i[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "primary-dark",
              track: vt,
              trackGroup: pt,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", e)
        ) : performance.measure("Recovered", e);
      }
    }
    function Vm(e, t, a, i) {
      !tl || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          e,
          t,
          vt,
          pt,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        e,
        t,
        vt,
        pt,
        "error"
      ));
    }
    function u1(e, t, a, i) {
      !tl || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          a,
          e,
          t,
          vt,
          pt,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        e,
        t,
        vt,
        pt,
        "secondary-light"
      ));
    }
    function L0(e, t, a, i, o) {
      if (tl && !(t <= e)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "error",
              track: vt,
              trackGroup: pt,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", e)
        ) : performance.measure("Errored", e);
      }
    }
    function Zm(e, t, a) {
      !tl || t <= e || console.timeStamp(
        "Animating",
        e,
        t,
        vt,
        pt,
        "secondary-dark"
      );
    }
    function Ad() {
      for (var e = em, t = C1 = em = 0; t < e; ) {
        var a = Vu[t];
        Vu[t++] = null;
        var i = Vu[t];
        Vu[t++] = null;
        var o = Vu[t];
        Vu[t++] = null;
        var f = Vu[t];
        if (Vu[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Jm(a, o, f);
      }
    }
    function Ko(e, t, a, i) {
      Vu[em++] = e, Vu[em++] = t, Vu[em++] = a, Vu[em++] = i, C1 |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Nc(e, t, a, i) {
      return Ko(e, t, a, i), zr(e);
    }
    function na(e, t) {
      return Ko(e, null, null, t), zr(e);
    }
    function Jm(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Yp || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Wl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function zr(e) {
      if (d0 > TT)
        throw Fs = d0 = 0, h0 = fS = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Fs > AT && (Fs = 0, h0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && Dn(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && Dn(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Yi(e) {
      if (Zu === null) return e;
      var t = Zu(e);
      return t === void 0 ? e : t.current;
    }
    function Od(e) {
      if (Zu === null) return e;
      var t = Zu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Yi(e.render), e.render !== t) ? (t = { $$typeof: Bf, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Km(e, t) {
      if (Zu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === ca) && (i = !0);
          break;
        case 11:
          (o === Bf || o === ca) && (i = !0);
          break;
        case 14:
        case 15:
          (o === zs || o === ca) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Zu(a), e !== void 0 && e === Zu(t)));
    }
    function xc(e) {
      Zu !== null && typeof WeakSet == "function" && (tm === null && (tm = /* @__PURE__ */ new WeakSet()), tm.add(e));
    }
    function X0(e, t, a) {
      do {
        var i = e, o = i.alternate, f = i.child, d = i.sibling, h = i.tag;
        i = i.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = i;
            break;
          case 11:
            y = i.render;
        }
        if (Zu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = Zu(y), y !== void 0 && (a.has(y) ? i = !0 : t.has(y) && (h === 1 ? i = !0 : p = !0))), tm !== null && (tm.has(e) || o !== null && tm.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || p) && (o = na(e, 2), o !== null && Xe(o, e, 2)), f === null || i || X0(
          f,
          t,
          a
        ), d === null) break;
        e = d;
      } while (!0);
    }
    function i1(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, PS || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function $m(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function gu(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = D(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Yi(e.type);
          break;
        case 1:
          a.type = Yi(e.type);
          break;
        case 11:
          a.type = Od(e.type);
      }
      return a;
    }
    function km(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function Bc(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        $m(e) && (d = 1), h = Yi(h);
      else if (typeof e == "string")
        d = K(), d = wg(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case lu:
            return t = D(31, a, t, o), t.elementType = lu, t.lanes = f, t;
          case xf:
            return jc(
              a.children,
              o,
              f,
              t
            );
          case Da:
            d = 8, o |= wa, o |= Oi;
            break;
          case _s:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = D(12, e, t, i | ut), t.elementType = _s, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case ho:
            return t = D(13, a, t, o), t.elementType = ho, t.lanes = f, t;
          case Ba:
            return t = D(19, a, t, o), t.elementType = Ba, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case tu:
                  d = 10;
                  break e;
                case jh:
                  d = 9;
                  break e;
                case Bf:
                  d = 11, h = Od(h);
                  break e;
                case zs:
                  d = 14;
                  break e;
                case ca:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : Tl(e) ? a = "array" : e !== void 0 && e.$$typeof === _n ? (a = "<" + (Ae(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Fe(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = D(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function Gi(e, t, a) {
      return t = Bc(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function jc(e, t, a, i) {
      return e = D(7, e, i, t), e.lanes = a, e;
    }
    function $o(e, t, a) {
      return e = D(6, e, null, t), e.lanes = a, e;
    }
    function Fm(e) {
      var t = D(18, null, null, Le);
      return t.stateNode = e, t;
    }
    function Rd(e, t, a) {
      return t = D(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function ha(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = U1.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: He(t)
        }, U1.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: He(t)
      };
    }
    function Yn(e, t) {
      Li(), lm[am++] = Gp, lm[am++] = uv, uv = e, Gp = t;
    }
    function Wm(e, t, a) {
      Li(), Ju[Ku++] = bo, Ju[Ku++] = Eo, Ju[Ku++] = Bs, Bs = e;
      var i = bo;
      e = Eo;
      var o = 32 - Wl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Wl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, bo = 1 << 32 - Wl(t) + o | a << o | i, Eo = f + e;
      } else
        bo = 1 << f | a << o | i, Eo = e;
    }
    function Dd(e) {
      Li(), e.return !== null && (Yn(e, 1), Wm(e, 1, 0));
    }
    function _d(e) {
      for (; e === uv; )
        uv = lm[--am], lm[am] = null, Gp = lm[--am], lm[am] = null;
      for (; e === Bs; )
        Bs = Ju[--Ku], Ju[Ku] = null, Eo = Ju[--Ku], Ju[Ku] = null, bo = Ju[--Ku], Ju[Ku] = null;
    }
    function Q0() {
      return Li(), Bs !== null ? { id: bo, overflow: Eo } : null;
    }
    function V0(e, t) {
      Li(), Ju[Ku++] = bo, Ju[Ku++] = Eo, Ju[Ku++] = Bs, bo = t.id, Eo = t.overflow, Bs = e;
    }
    function Li() {
      yt || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function wc(e, t) {
      if (e.return === null) {
        if (nu === null)
          nu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (nu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          nu.distanceFromLeaf > t && (nu.distanceFromLeaf = t);
        }
        return nu;
      }
      var a = wc(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Z0() {
      yt && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function ua(e, t) {
      gc || (e = wc(e, 0), e.serverProps = null, t !== null && (t = Ng(t), e.serverTail.push(t)));
    }
    function vn(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = nu;
      throw i !== null && (nu = null, a = Um(i)), Cr(
        ha(
          Error(
            "Hydration failed because the server rendered " + (t ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          e
        )
      ), H1;
    }
    function Im(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[el] = e, t[_a] = i, Oa(a, i), a) {
        case "dialog":
          Ge("cancel", t), Ge("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ge("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < m0.length; a++)
            Ge(m0[a], t);
          break;
        case "source":
          Ge("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Ge("error", t), Ge("load", t);
          break;
        case "details":
          Ge("toggle", t);
          break;
        case "input":
          aa("input", i), Ge("invalid", t), da(t, i), od(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
          break;
        case "option":
          z0(t, i);
          break;
        case "select":
          aa("select", i), Ge("invalid", t), fd(t, i);
          break;
        case "textarea":
          aa("textarea", i), Ge("invalid", t), Rc(t, i), qo(
            t,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || ep(t.textContent, a) ? (i.popover != null && (Ge("beforetoggle", t), Ge("toggle", t)), i.onScroll != null && Ge("scroll", t), i.onScrollEnd != null && Ge("scrollend", t), i.onClick != null && (t.onclick = pn), t = !0) : t = !1, t || vn(e, !0);
    }
    function Pm(e) {
      for (za = e.return; za; )
        switch (za.tag) {
          case 5:
          case 31:
          case 13:
            $u = !1;
            return;
          case 27:
          case 3:
            $u = !0;
            return;
          default:
            za = za.return;
        }
    }
    function qc(e) {
      if (e !== za) return !1;
      if (!yt)
        return Pm(e), yt = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Df(e.type, e.memoizedProps)), a = !a), a && ll) {
        for (a = ll; a; ) {
          var i = wc(e, 0), o = Ng(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Mf(a) : nn(a.nextSibling);
        }
        vn(e);
      }
      if (Pm(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        ll = Mf(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        ll = Mf(e);
      } else
        t === 27 ? (t = ll, rc(e.type) ? (e = ES, ES = null, ll = e) : ll = t) : ll = za ? nn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Xi() {
      ll = za = null, gc = yt = !1;
    }
    function Mr() {
      var e = Ff;
      return e !== null && (hn === null ? hn = e : hn.push.apply(
        hn,
        e
      ), Ff = null), e;
    }
    function Cr(e) {
      Ff === null ? Ff = [e] : Ff.push(e);
    }
    function Qi() {
      var e = nu;
      if (e !== null) {
        nu = null;
        for (var t = Um(e); 0 < e.children.length; )
          e = e.children[0];
        se(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function ko() {
      nm = iv = null, um = !1;
    }
    function Sn(e, t, a) {
      Je(N1, t._currentValue, e), t._currentValue = a, Je(x1, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== tb && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = tb;
    }
    function Gn(e, t) {
      e._currentValue = N1.current;
      var a = x1.current;
      Te(x1, t), e._currentRenderer = a, Te(N1, t);
    }
    function zd(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function ni(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < t.length; y++)
              if (h.context === t[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), zd(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), zd(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function Ln(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            fn(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === mc.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(S0) : e = [S0]);
        }
        o = o.return;
      }
      e !== null && ni(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function Fo(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!fn(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function Vi(e) {
      iv = e, nm = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Dt(e) {
      return um && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), ey(iv, e);
    }
    function Ur(e, t) {
      return iv === null && Vi(e), ey(e, t);
    }
    function ey(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, nm === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        nm = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else nm = nm.next = t;
      return a;
    }
    function Md() {
      return {
        controller: new fT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Yc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function Hr(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && rT(sT, function() {
        e.controller.abort();
      });
    }
    function vu(e, t, a) {
      (e & 127) !== 0 ? 0 > vc && (vc = Ql(), Xp = cv(t), B1 = t, a != null && (j1 = me(a)), (bt & (ea | cu)) !== sa && (vl = !0, If = Lp), e = _f(), t = wu(), e !== im || t !== Qp ? im = -1.1 : t !== null && (If = Lp), qs = e, Qp = t) : (e & 4194048) !== 0 && 0 > ku && (ku = Ql(), Vp = cv(t), lb = t, a != null && (ab = me(a)), 0 > Ro) && (e = _f(), t = wu(), (e !== er || t !== Ys) && (er = -1.1), Pf = e, Ys = t);
    }
    function J0(e) {
      if (0 > vc) {
        vc = Ql(), Xp = e._debugTask != null ? e._debugTask : null, (bt & (ea | cu)) !== sa && (If = Lp);
        var t = _f(), a = wu();
        t !== im || a !== Qp ? im = -1.1 : a !== null && (If = Lp), qs = t, Qp = a;
      }
      0 > ku && (ku = Ql(), Vp = e._debugTask != null ? e._debugTask : null, 0 > Ro) && (e = _f(), t = wu(), (e !== er || t !== Ys) && (er = -1.1), Pf = e, Ys = t);
    }
    function Su() {
      var e = js;
      return js = 0, e;
    }
    function Wo(e) {
      var t = js;
      return js = e, t;
    }
    function ma(e) {
      var t = js;
      return js += e, t;
    }
    function Gc() {
      Ye = Ne = -1.1;
    }
    function Wt() {
      var e = Ne;
      return Ne = -1.1, e;
    }
    function Bl(e) {
      0 <= e && (Ne = e);
    }
    function bn() {
      var e = sl;
      return sl = -0, e;
    }
    function Ja(e) {
      0 <= e && (sl = e);
    }
    function Ka() {
      var e = cl;
      return cl = null, e;
    }
    function En() {
      var e = vl;
      return vl = !1, e;
    }
    function ui(e) {
      rn = Ql(), 0 > e.actualStartTime && (e.actualStartTime = rn);
    }
    function Cd(e) {
      if (0 <= rn) {
        var t = Ql() - rn;
        e.actualDuration += t, e.selfBaseDuration = t, rn = -1;
      }
    }
    function Nr(e) {
      if (0 <= rn) {
        var t = Ql() - rn;
        e.actualDuration += t, rn = -1;
      }
    }
    function ya() {
      if (0 <= rn) {
        var e = Ql(), t = e - rn;
        rn = -1, js += t, sl += t, Ye = e;
      }
    }
    function K0(e) {
      cl === null && (cl = []), cl.push(e), Ao === null && (Ao = []), Ao.push(e);
    }
    function ol() {
      rn = Ql(), 0 > Ne && (Ne = rn);
    }
    function Lc(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ii(e, t) {
      if (Jp === null) {
        var a = Jp = [];
        q1 = 0, Gs = Py(), cm = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return q1++, t.then(ty, ty), t;
    }
    function ty() {
      if (--q1 === 0 && (-1 < ku || (Ro = -1.1), Jp !== null)) {
        cm !== null && (cm.status = "fulfilled");
        var e = Jp;
        Jp = null, Gs = 0, cm = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Ud(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function ci() {
      var e = Ls.current;
      return e !== null ? e : Jt.pooledCache;
    }
    function Io(e, t) {
      t === null ? Je(Ls, Ls.current, e) : Je(Ls, t.pool, e);
    }
    function ly() {
      var e = ci();
      return e === null ? null : { parent: Xl._currentValue, pool: e };
    }
    function Hd() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function ay(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function $a(e, t, a) {
      Q.actQueue !== null && (Q.didUsePromise = !0);
      var i = e.thenables;
      if (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(pn, pn), t = a), t._debugInfo === void 0) {
        e = performance.now(), i = t.displayName;
        var o = {
          name: typeof i == "string" ? i : "Promise",
          start: e,
          end: e,
          value: t
        };
        t._debugInfo = [{ awaited: o }], t.status !== "fulfilled" && t.status !== "rejected" && (e = function() {
          o.end = performance.now();
        }, t.then(e, e));
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, xr(e), e;
        default:
          if (typeof t.status == "string")
            t.then(pn, pn);
          else {
            if (e = Jt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, xr(e), e;
          }
          throw Qs = t, Pp = !0, om;
      }
    }
    function ka(e) {
      try {
        return pT(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Qs = t, Pp = !0, om) : t;
      }
    }
    function Xc() {
      if (Qs === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Qs;
      return Qs = null, Pp = !1, e;
    }
    function xr(e) {
      if (e === om || e === yv)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function hl(e) {
      var t = it;
      return e != null && (it = t === null ? e : t.concat(e)), t;
    }
    function Ma() {
      var e = it;
      if (e != null) {
        for (var t = e.length - 1; 0 <= t; t--)
          if (e[t].name != null) {
            var a = e[t].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function pa(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Gi(e, a.mode, 0), t._debugInfo = it, t.return = a), se(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function Xn(e) {
      var t = e0;
      return e0 += 1, fm === null && (fm = Hd()), $a(fm, e, t);
    }
    function Ca(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Qn(e, t) {
      throw t.$$typeof === Qg ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Tn(e, t) {
      var a = Ma();
      a !== null ? a.run(
        Qn.bind(null, e, t)
      ) : Qn(e, t);
    }
    function ny(e, t) {
      var a = me(e) || "Component";
      Ab[a] || (Ab[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function Po(e, t) {
      var a = Ma();
      a !== null ? a.run(
        ny.bind(null, e, t)
      ) : ny(e, t);
    }
    function Nd(e, t) {
      var a = me(e) || "Component";
      Ob[a] || (Ob[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Br(e, t) {
      var a = Ma();
      a !== null ? a.run(
        Nd.bind(null, e, t)
      ) : Nd(e, t);
    }
    function jl(e) {
      function t(E, A) {
        if (e) {
          var _ = E.deletions;
          _ === null ? (E.deletions = [A], E.flags |= 16) : _.push(A);
        }
      }
      function a(E, A) {
        if (!e) return null;
        for (; A !== null; )
          t(E, A), A = A.sibling;
        return null;
      }
      function i(E) {
        for (var A = /* @__PURE__ */ new Map(); E !== null; )
          E.key !== null ? A.set(E.key, E) : A.set(E.index, E), E = E.sibling;
        return A;
      }
      function o(E, A) {
        return E = gu(E, A), E.index = 0, E.sibling = null, E;
      }
      function f(E, A, _) {
        return E.index = _, e ? (_ = E.alternate, _ !== null ? (_ = _.index, _ < A ? (E.flags |= 67108866, A) : _) : (E.flags |= 67108866, A)) : (E.flags |= 1048576, A);
      }
      function d(E) {
        return e && E.alternate === null && (E.flags |= 67108866), E;
      }
      function h(E, A, _, $) {
        return A === null || A.tag !== 6 ? (A = $o(
          _,
          E.mode,
          $
        ), A.return = E, A._debugOwner = E, A._debugTask = E._debugTask, A._debugInfo = it, A) : (A = o(A, _), A.return = E, A._debugInfo = it, A);
      }
      function y(E, A, _, $) {
        var fe = _.type;
        return fe === xf ? (A = z(
          E,
          A,
          _.props.children,
          $,
          _.key
        ), pa(_, A, E), A) : A !== null && (A.elementType === fe || Km(A, _) || typeof fe == "object" && fe !== null && fe.$$typeof === ca && ka(fe) === A.type) ? (A = o(A, _.props), Ca(A, _), A.return = E, A._debugOwner = _._owner, A._debugInfo = it, A) : (A = Gi(_, E.mode, $), Ca(A, _), A.return = E, A._debugInfo = it, A);
      }
      function p(E, A, _, $) {
        return A === null || A.tag !== 4 || A.stateNode.containerInfo !== _.containerInfo || A.stateNode.implementation !== _.implementation ? (A = Rd(_, E.mode, $), A.return = E, A._debugInfo = it, A) : (A = o(A, _.children || []), A.return = E, A._debugInfo = it, A);
      }
      function z(E, A, _, $, fe) {
        return A === null || A.tag !== 7 ? (A = jc(
          _,
          E.mode,
          $,
          fe
        ), A.return = E, A._debugOwner = E, A._debugTask = E._debugTask, A._debugInfo = it, A) : (A = o(A, _), A.return = E, A._debugInfo = it, A);
      }
      function U(E, A, _) {
        if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
          return A = $o(
            "" + A,
            E.mode,
            _
          ), A.return = E, A._debugOwner = E, A._debugTask = E._debugTask, A._debugInfo = it, A;
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case _n:
              return _ = Gi(
                A,
                E.mode,
                _
              ), Ca(_, A), _.return = E, E = hl(A._debugInfo), _._debugInfo = it, it = E, _;
            case dc:
              return A = Rd(
                A,
                E.mode,
                _
              ), A.return = E, A._debugInfo = it, A;
            case ca:
              var $ = hl(A._debugInfo);
              return A = ka(A), E = U(E, A, _), it = $, E;
          }
          if (Tl(A) || pe(A))
            return _ = jc(
              A,
              E.mode,
              _,
              null
            ), _.return = E, _._debugOwner = E, _._debugTask = E._debugTask, E = hl(A._debugInfo), _._debugInfo = it, it = E, _;
          if (typeof A.then == "function")
            return $ = hl(A._debugInfo), E = U(
              E,
              Xn(A),
              _
            ), it = $, E;
          if (A.$$typeof === tu)
            return U(
              E,
              Ur(E, A),
              _
            );
          Tn(E, A);
        }
        return typeof A == "function" && Po(E, A), typeof A == "symbol" && Br(E, A), null;
      }
      function T(E, A, _, $) {
        var fe = A !== null ? A.key : null;
        if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
          return fe !== null ? null : h(E, A, "" + _, $);
        if (typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case _n:
              return _.key === fe ? (fe = hl(_._debugInfo), E = y(
                E,
                A,
                _,
                $
              ), it = fe, E) : null;
            case dc:
              return _.key === fe ? p(E, A, _, $) : null;
            case ca:
              return fe = hl(_._debugInfo), _ = ka(_), E = T(
                E,
                A,
                _,
                $
              ), it = fe, E;
          }
          if (Tl(_) || pe(_))
            return fe !== null ? null : (fe = hl(_._debugInfo), E = z(
              E,
              A,
              _,
              $,
              null
            ), it = fe, E);
          if (typeof _.then == "function")
            return fe = hl(_._debugInfo), E = T(
              E,
              A,
              Xn(_),
              $
            ), it = fe, E;
          if (_.$$typeof === tu)
            return T(
              E,
              A,
              Ur(E, _),
              $
            );
          Tn(E, _);
        }
        return typeof _ == "function" && Po(E, _), typeof _ == "symbol" && Br(E, _), null;
      }
      function G(E, A, _, $, fe) {
        if (typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint")
          return E = E.get(_) || null, h(A, E, "" + $, fe);
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case _n:
              return _ = E.get(
                $.key === null ? _ : $.key
              ) || null, E = hl($._debugInfo), A = y(
                A,
                _,
                $,
                fe
              ), it = E, A;
            case dc:
              return E = E.get(
                $.key === null ? _ : $.key
              ) || null, p(A, E, $, fe);
            case ca:
              var Ze = hl($._debugInfo);
              return $ = ka($), A = G(
                E,
                A,
                _,
                $,
                fe
              ), it = Ze, A;
          }
          if (Tl($) || pe($))
            return _ = E.get(_) || null, E = hl($._debugInfo), A = z(
              A,
              _,
              $,
              fe,
              null
            ), it = E, A;
          if (typeof $.then == "function")
            return Ze = hl($._debugInfo), A = G(
              E,
              A,
              _,
              Xn($),
              fe
            ), it = Ze, A;
          if ($.$$typeof === tu)
            return G(
              E,
              A,
              _,
              Ur(A, $),
              fe
            );
          Tn(A, $);
        }
        return typeof $ == "function" && Po(A, $), typeof $ == "symbol" && Br(A, $), null;
      }
      function oe(E, A, _, $) {
        if (typeof _ != "object" || _ === null) return $;
        switch (_.$$typeof) {
          case _n:
          case dc:
            ye(E, A, _);
            var fe = _.key;
            if (typeof fe != "string") break;
            if ($ === null) {
              $ = /* @__PURE__ */ new Set(), $.add(fe);
              break;
            }
            if (!$.has(fe)) {
              $.add(fe);
              break;
            }
            se(A, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                fe
              );
            });
            break;
          case ca:
            _ = ka(_), oe(E, A, _, $);
        }
        return $;
      }
      function de(E, A, _, $) {
        for (var fe = null, Ze = null, Ce = null, Re = A, at = A = 0, al = null; Re !== null && at < _.length; at++) {
          Re.index > at ? (al = Re, Re = null) : al = Re.sibling;
          var Hl = T(
            E,
            Re,
            _[at],
            $
          );
          if (Hl === null) {
            Re === null && (Re = al);
            break;
          }
          fe = oe(
            E,
            Hl,
            _[at],
            fe
          ), e && Re && Hl.alternate === null && t(E, Re), A = f(Hl, A, at), Ce === null ? Ze = Hl : Ce.sibling = Hl, Ce = Hl, Re = al;
        }
        if (at === _.length)
          return a(E, Re), yt && Yn(E, at), Ze;
        if (Re === null) {
          for (; at < _.length; at++)
            Re = U(E, _[at], $), Re !== null && (fe = oe(
              E,
              Re,
              _[at],
              fe
            ), A = f(
              Re,
              A,
              at
            ), Ce === null ? Ze = Re : Ce.sibling = Re, Ce = Re);
          return yt && Yn(E, at), Ze;
        }
        for (Re = i(Re); at < _.length; at++)
          al = G(
            Re,
            E,
            at,
            _[at],
            $
          ), al !== null && (fe = oe(
            E,
            al,
            _[at],
            fe
          ), e && al.alternate !== null && Re.delete(
            al.key === null ? at : al.key
          ), A = f(
            al,
            A,
            at
          ), Ce === null ? Ze = al : Ce.sibling = al, Ce = al);
        return e && Re.forEach(function(No) {
          return t(E, No);
        }), yt && Yn(E, at), Ze;
      }
      function Ft(E, A, _, $) {
        if (_ == null)
          throw Error("An iterable object provided no iterator.");
        for (var fe = null, Ze = null, Ce = A, Re = A = 0, at = null, al = null, Hl = _.next(); Ce !== null && !Hl.done; Re++, Hl = _.next()) {
          Ce.index > Re ? (at = Ce, Ce = null) : at = Ce.sibling;
          var No = T(E, Ce, Hl.value, $);
          if (No === null) {
            Ce === null && (Ce = at);
            break;
          }
          al = oe(
            E,
            No,
            Hl.value,
            al
          ), e && Ce && No.alternate === null && t(E, Ce), A = f(No, A, Re), Ze === null ? fe = No : Ze.sibling = No, Ze = No, Ce = at;
        }
        if (Hl.done)
          return a(E, Ce), yt && Yn(E, Re), fe;
        if (Ce === null) {
          for (; !Hl.done; Re++, Hl = _.next())
            Ce = U(E, Hl.value, $), Ce !== null && (al = oe(
              E,
              Ce,
              Hl.value,
              al
            ), A = f(
              Ce,
              A,
              Re
            ), Ze === null ? fe = Ce : Ze.sibling = Ce, Ze = Ce);
          return yt && Yn(E, Re), fe;
        }
        for (Ce = i(Ce); !Hl.done; Re++, Hl = _.next())
          at = G(
            Ce,
            E,
            Re,
            Hl.value,
            $
          ), at !== null && (al = oe(
            E,
            at,
            Hl.value,
            al
          ), e && at.alternate !== null && Ce.delete(
            at.key === null ? Re : at.key
          ), A = f(
            at,
            A,
            Re
          ), Ze === null ? fe = at : Ze.sibling = at, Ze = at);
        return e && Ce.forEach(function(GT) {
          return t(E, GT);
        }), yt && Yn(E, Re), fe;
      }
      function gt(E, A, _, $) {
        if (typeof _ == "object" && _ !== null && _.type === xf && _.key === null && (pa(_, null, E), _ = _.props.children), typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case _n:
              var fe = hl(_._debugInfo);
              e: {
                for (var Ze = _.key; A !== null; ) {
                  if (A.key === Ze) {
                    if (Ze = _.type, Ze === xf) {
                      if (A.tag === 7) {
                        a(
                          E,
                          A.sibling
                        ), $ = o(
                          A,
                          _.props.children
                        ), $.return = E, $._debugOwner = _._owner, $._debugInfo = it, pa(_, $, E), E = $;
                        break e;
                      }
                    } else if (A.elementType === Ze || Km(
                      A,
                      _
                    ) || typeof Ze == "object" && Ze !== null && Ze.$$typeof === ca && ka(Ze) === A.type) {
                      a(
                        E,
                        A.sibling
                      ), $ = o(A, _.props), Ca($, _), $.return = E, $._debugOwner = _._owner, $._debugInfo = it, E = $;
                      break e;
                    }
                    a(E, A);
                    break;
                  } else t(E, A);
                  A = A.sibling;
                }
                _.type === xf ? ($ = jc(
                  _.props.children,
                  E.mode,
                  $,
                  _.key
                ), $.return = E, $._debugOwner = E, $._debugTask = E._debugTask, $._debugInfo = it, pa(_, $, E), E = $) : ($ = Gi(
                  _,
                  E.mode,
                  $
                ), Ca($, _), $.return = E, $._debugInfo = it, E = $);
              }
              return E = d(E), it = fe, E;
            case dc:
              e: {
                for (fe = _, _ = fe.key; A !== null; ) {
                  if (A.key === _)
                    if (A.tag === 4 && A.stateNode.containerInfo === fe.containerInfo && A.stateNode.implementation === fe.implementation) {
                      a(
                        E,
                        A.sibling
                      ), $ = o(
                        A,
                        fe.children || []
                      ), $.return = E, E = $;
                      break e;
                    } else {
                      a(E, A);
                      break;
                    }
                  else t(E, A);
                  A = A.sibling;
                }
                $ = Rd(
                  fe,
                  E.mode,
                  $
                ), $.return = E, E = $;
              }
              return d(E);
            case ca:
              return fe = hl(_._debugInfo), _ = ka(_), E = gt(
                E,
                A,
                _,
                $
              ), it = fe, E;
          }
          if (Tl(_))
            return fe = hl(_._debugInfo), E = de(
              E,
              A,
              _,
              $
            ), it = fe, E;
          if (pe(_)) {
            if (fe = hl(_._debugInfo), Ze = pe(_), typeof Ze != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var Ce = Ze.call(_);
            return Ce === _ ? (E.tag !== 0 || Object.prototype.toString.call(E.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(Ce) !== "[object Generator]") && (Eb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), Eb = !0) : _.entries !== Ze || X1 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), X1 = !0), E = Ft(
              E,
              A,
              Ce,
              $
            ), it = fe, E;
          }
          if (typeof _.then == "function")
            return fe = hl(_._debugInfo), E = gt(
              E,
              A,
              Xn(_),
              $
            ), it = fe, E;
          if (_.$$typeof === tu)
            return gt(
              E,
              A,
              Ur(E, _),
              $
            );
          Tn(E, _);
        }
        return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (fe = "" + _, A !== null && A.tag === 6 ? (a(
          E,
          A.sibling
        ), $ = o(A, fe), $.return = E, E = $) : (a(E, A), $ = $o(
          fe,
          E.mode,
          $
        ), $.return = E, $._debugOwner = E, $._debugTask = E._debugTask, $._debugInfo = it, E = $), d(E)) : (typeof _ == "function" && Po(E, _), typeof _ == "symbol" && Br(E, _), a(E, A));
      }
      return function(E, A, _, $) {
        var fe = it;
        it = null;
        try {
          e0 = 0;
          var Ze = gt(
            E,
            A,
            _,
            $
          );
          return fm = null, Ze;
        } catch (al) {
          if (al === om || al === yv) throw al;
          var Ce = D(29, al, null, E.mode);
          Ce.lanes = $, Ce.return = E;
          var Re = Ce._debugInfo = it;
          if (Ce._debugOwner = E._debugOwner, Ce._debugTask = E._debugTask, Re != null) {
            for (var at = Re.length - 1; 0 <= at; at--)
              if (typeof Re[at].stack == "string") {
                Ce._debugOwner = Re[at], Ce._debugTask = Re[at].debugTask;
                break;
              }
          }
          return Ce;
        } finally {
          it = fe;
        }
      };
    }
    function Xt(e, t) {
      var a = Tl(e);
      return e = !a && typeof pe(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function ht(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function bu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Dl(e) {
      return {
        lane: e,
        tag: Db,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Eu(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, V1 === i && !Mb) {
        var o = me(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), Mb = !0;
      }
      return (bt & ea) !== sa ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = zr(e), Jm(e, null, a), t) : (Ko(e, i, t, a), zr(e));
    }
    function An(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, gr(e, a);
      }
    }
    function jr(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function ef() {
      if (Z1) {
        var e = cm;
        if (e !== null) throw e;
      }
    }
    function Tu(e, t, a, i) {
      Z1 = !1;
      var o = e.updateQueue;
      tr = !1, V1 = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var z = e.alternate;
        z !== null && (z = z.updateQueue, h = z.lastBaseUpdate, h !== d && (h === null ? z.firstBaseUpdate = p : h.next = p, z.lastBaseUpdate = y));
      }
      if (f !== null) {
        var U = o.baseState;
        d = 0, z = p = y = null, h = f;
        do {
          var T = h.lane & -536870913, G = T !== h.lane;
          if (G ? (ct & T) === T : (i & T) === T) {
            T !== 0 && T === Gs && (Z1 = !0), z !== null && (z = z.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              T = e;
              var oe = h, de = t, Ft = a;
              switch (oe.tag) {
                case _b:
                  if (oe = oe.payload, typeof oe == "function") {
                    um = !0;
                    var gt = oe.call(
                      Ft,
                      U,
                      de
                    );
                    if (T.mode & wa) {
                      ve(!0);
                      try {
                        oe.call(Ft, U, de);
                      } finally {
                        ve(!1);
                      }
                    }
                    um = !1, U = gt;
                    break e;
                  }
                  U = oe;
                  break e;
                case Q1:
                  T.flags = T.flags & -65537 | 128;
                case Db:
                  if (gt = oe.payload, typeof gt == "function") {
                    if (um = !0, oe = gt.call(
                      Ft,
                      U,
                      de
                    ), T.mode & wa) {
                      ve(!0);
                      try {
                        gt.call(Ft, U, de);
                      } finally {
                        ve(!1);
                      }
                    }
                    um = !1;
                  } else oe = gt;
                  if (oe == null) break e;
                  U = nt({}, U, oe);
                  break e;
                case zb:
                  tr = !0;
              }
            }
            T = h.callback, T !== null && (e.flags |= 64, G && (e.flags |= 8192), G = o.callbacks, G === null ? o.callbacks = [T] : G.push(T));
          } else
            G = {
              lane: T,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, z === null ? (p = z = G, y = U) : z = z.next = G, d |= T;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            G = h, h = G.next, G.next = null, o.lastBaseUpdate = G, o.shared.pending = null;
          }
        } while (!0);
        z === null && (y = U), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = z, f === null && (o.shared.lanes = 0), nr |= d, e.lanes = d, e.memoizedState = U;
      }
      V1 = null;
    }
    function Zi(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function uy(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Zi(a[e], t);
    }
    function tf(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Zi(a[e], t);
    }
    function xd(e, t) {
      var a = bc;
      Je(gv, a, e), Je(rm, t, e), bc = a | t.baseLanes;
    }
    function oi(e) {
      Je(gv, bc, e), Je(
        rm,
        rm.current,
        e
      );
    }
    function Vn(e) {
      bc = gv.current, Te(rm, e), Te(gv, e);
    }
    function ga(e) {
      var t = e.alternate;
      Je(
        Ul,
        Ul.current & sm,
        e
      ), Je(uu, e, e), Fu === null && (t === null || rm.current !== null || t.memoizedState !== null) && (Fu = e);
    }
    function Zn(e) {
      Je(Ul, Ul.current, e), Je(uu, e, e), Fu === null && (Fu = e);
    }
    function Bd(e) {
      e.tag === 22 ? (Je(Ul, Ul.current, e), Je(uu, e, e), Fu === null && (Fu = e)) : Au(e);
    }
    function Au(e) {
      Je(Ul, Ul.current, e), Je(
        uu,
        uu.current,
        e
      );
    }
    function wl(e) {
      Te(uu, e), Fu === e && (Fu = null), Te(Ul, e);
    }
    function Qc(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || vs(a) || lp(a)))
            return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function Qe() {
      var e = L;
      Iu === null ? Iu = [e] : Iu.push(e);
    }
    function I() {
      var e = L;
      if (Iu !== null && (zo++, Iu[zo] !== e)) {
        var t = me(Ve);
        if (!Cb.has(t) && (Cb.add(t), Iu !== null)) {
          for (var a = "", i = 0; i <= zo; i++) {
            var o = Iu[i], f = i === zo ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function fi(e) {
      e == null || Tl(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        L,
        typeof e
      );
    }
    function wr() {
      var e = me(Ve);
      Hb.has(e) || (Hb.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function fl() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function iy(e, t) {
      if (a0) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          L
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        L,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!fn(e[a], t[a])) return !1;
      return !0;
    }
    function cy(e, t, a, i, o, f) {
      Do = f, Ve = t, Iu = e !== null ? e._debugHookTypes : null, zo = -1, a0 = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = me(Ve), J1.has(f) || (J1.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Q.H = e !== null && e.memoizedState !== null ? $1 : Iu !== null ? Nb : K1, Zs = f = (t.mode & wa) !== Le;
      var d = Y1(a, i, o);
      if (Zs = !1, hm && (d = qr(
        t,
        a,
        i,
        o
      )), f) {
        ve(!0);
        try {
          d = qr(
            t,
            a,
            i,
            o
          );
        } finally {
          ve(!1);
        }
      }
      return ml(e, t), d;
    }
    function ml(e, t) {
      t._debugHookTypes = Iu, t.dependencies === null ? _o !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: _o
      }) : t.dependencies._debugThenableState = _o, Q.H = n0;
      var a = Zt !== null && Zt.next !== null;
      if (Do = 0, Iu = L = Vl = Zt = Ve = null, zo = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), Sv = !1, l0 = 0, _o = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Zl || (e = e.dependencies, e !== null && Fo(e) && (Zl = !0)), Pp ? (Pp = !1, e = !0) : e = !1, e && (t = me(t) || "Unknown", Ub.has(t) || J1.has(t) || (Ub.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function qr(e, t, a, i) {
      Ve = e;
      var o = 0;
      do {
        if (hm && (_o = null), l0 = 0, hm = !1, o >= vT)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, a0 = !1, Vl = Zt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        zo = -1, Q.H = xb, f = Y1(t, a, i);
      } while (hm);
      return f;
    }
    function Yr() {
      var e = Q.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Xr(t) : t, e = e.useState()[0], (Zt !== null ? Zt.memoizedState : null) !== e && (Ve.flags |= 1024), t;
    }
    function Vc() {
      var e = bv !== 0;
      return bv = 0, e;
    }
    function Gr(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Oi) !== Le ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Ji(e) {
      if (Sv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Sv = !1;
      }
      Do = 0, Iu = Vl = Zt = Ve = null, zo = -1, L = null, hm = !1, l0 = bv = 0, _o = null;
    }
    function bl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Vl === null ? Ve.memoizedState = Vl = e : Vl = Vl.next = e, Vl;
    }
    function Ct() {
      if (Zt === null) {
        var e = Ve.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Zt.next;
      var t = Vl === null ? Ve.memoizedState : Vl.next;
      if (t !== null)
        Vl = t, Zt = e;
      else {
        if (e === null)
          throw Ve.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Zt = e, e = {
          memoizedState: Zt.memoizedState,
          baseState: Zt.baseState,
          baseQueue: Zt.baseQueue,
          queue: Zt.queue,
          next: null
        }, Vl === null ? Ve.memoizedState = Vl = e : Vl = Vl.next = e;
      }
      return Vl;
    }
    function Lr() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Xr(e) {
      var t = l0;
      return l0 += 1, _o === null && (_o = Hd()), e = $a(_o, e, t), t = Ve, (Vl === null ? t.memoizedState : Vl.next) === null && (t = t.alternate, Q.H = t !== null && t.memoizedState !== null ? $1 : K1), e;
    }
    function ri(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Xr(e);
        if (e.$$typeof === tu) return Dt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Fa(e) {
      var t = null, a = Ve.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Ve.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = Lr(), Ve.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || a0)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = d1;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function Wa(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function lf(e, t, a) {
      var i = bl();
      if (a !== void 0) {
        var o = a(t);
        if (Zs) {
          ve(!0);
          try {
            a(t);
          } finally {
            ve(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = c1.bind(
        null,
        Ve,
        e
      ), [i.memoizedState, e];
    }
    function Zc(e) {
      var t = Ct();
      return Ki(t, Zt, e);
    }
    function Ki(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, y = null, p = t, z = !1;
        do {
          var U = p.lane & -536870913;
          if (U !== p.lane ? (ct & U) === U : (Do & U) === U) {
            var T = p.revertLane;
            if (T === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), U === Gs && (z = !0);
            else if ((Do & T) === T) {
              p = p.next, T === Gs && (z = !0);
              continue;
            } else
              U = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = U, d = f) : y = y.next = U, Ve.lanes |= T, nr |= T;
            U = p.action, Zs && a(f, U), f = p.hasEagerState ? p.eagerState : a(f, U);
          } else
            T = {
              lane: U,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = T, d = f) : y = y.next = T, Ve.lanes |= U, nr |= U;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !fn(f, e.memoizedState) && (Zl = !0, z && (a = cm, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Jc(e) {
      var t = Ct(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        fn(f, t.memoizedState) || (Zl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function af(e, t, a) {
      var i = Ve, o = bl();
      if (yt) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        dm || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), dm = !0);
      } else {
        if (f = t(), dm || (a = t(), fn(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), dm = !0)), Jt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (ct & 127) !== 0 || oy(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, kc(
        $i.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Ou(
        Wu | dn,
        { destroy: void 0 },
        fy.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Kc(e, t, a) {
      var i = Ve, o = Ct(), f = yt;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !dm) {
        var d = t();
        fn(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), dm = !0);
      }
      (d = !fn(
        (Zt || o).memoizedState,
        a
      )) && (o.memoizedState = a, Zl = !0), o = o.queue;
      var h = $i.bind(null, i, o, e);
      if (_l(2048, dn, h, [e]), o.getSnapshot !== t || d || Vl !== null && Vl.memoizedState.tag & Wu) {
        if (i.flags |= 2048, Ou(
          Wu | dn,
          { destroy: void 0 },
          fy.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), Jt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (Do & 127) !== 0 || oy(i, t, a);
      }
      return a;
    }
    function oy(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Ve.updateQueue, t === null ? (t = Lr(), Ve.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function fy(e, t, a, i) {
      t.value = a, t.getSnapshot = i, ki(t) && ry(e);
    }
    function $i(e, t, a) {
      return a(function() {
        ki(t) && (vu(2, "updateSyncExternalStore()", e), ry(e));
      });
    }
    function ki(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !fn(e, a);
      } catch {
        return !0;
      }
    }
    function ry(e) {
      var t = na(e, 2);
      t !== null && Xe(t, e, 2);
    }
    function jd(e) {
      var t = bl();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Zs) {
          ve(!0);
          try {
            a();
          } finally {
            ve(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wa,
        lastRenderedState: e
      }, t;
    }
    function Fi(e) {
      e = jd(e);
      var t = e.queue, a = Xd.bind(null, Ve, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function $c(e) {
      var t = bl();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = kr.bind(
        null,
        Ve,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function Qr(e, t) {
      var a = Ct();
      return nf(a, Zt, e, t);
    }
    function nf(e, t, a, i) {
      return e.baseState = a, Ki(
        e,
        Zt,
        typeof i == "function" ? i : Wa
      );
    }
    function Vr(e, t) {
      var a = Ct();
      return Zt !== null ? nf(a, Zt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function $0(e, t, a, i, o) {
      if (ql(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        Q.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, Wi(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function Wi(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = Q.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), Q.T = d;
        try {
          var h = a(o, i), y = Q.S;
          y !== null && y(d, h), sy(e, t, h);
        } catch (p) {
          Zr(e, t, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), Q.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), sy(e, t, d);
        } catch (p) {
          Zr(e, t, p);
        }
    }
    function sy(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (Q.asyncTransitions++, a.then(Fc, Fc), a.then(
        function(i) {
          si(e, t, i);
        },
        function(i) {
          return Zr(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : si(e, t, a);
    }
    function si(e, t, a) {
      t.status = "fulfilled", t.value = a, wd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Wi(e, a)));
    }
    function Zr(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, wd(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function wd(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function di(e, t) {
      return t;
    }
    function Ia(e, t) {
      if (yt) {
        var a = Jt.formState;
        if (a !== null) {
          e: {
            var i = Ve;
            if (yt) {
              if (ll) {
                t: {
                  for (var o = ll, f = $u; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = nn(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === gS || f === SE ? o : null;
                }
                if (o) {
                  ll = nn(
                    o.nextSibling
                  ), i = o.data === gS;
                  break e;
                }
              }
              vn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = bl(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: di,
        lastRenderedState: t
      }, a.queue = i, a = Xd.bind(
        null,
        Ve,
        i
      ), i.dispatch = a, i = jd(!1), f = kr.bind(
        null,
        Ve,
        !1,
        i.queue
      ), i = bl(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = $0.bind(
        null,
        Ve,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function Ii(e) {
      var t = Ct();
      return qd(t, Zt, e);
    }
    function qd(e, t, a) {
      if (t = Ki(
        e,
        t,
        di
      )[0], e = Zc(Wa)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Xr(t);
        } catch (d) {
          throw d === om ? yv : d;
        }
      else i = t;
      t = Ct();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Ve.flags |= 2048, Ou(
        Wu | dn,
        { destroy: void 0 },
        dy.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function dy(e, t) {
      e.action = t;
    }
    function Pi(e) {
      var t = Ct(), a = Zt;
      if (a !== null)
        return qd(t, a, e);
      Ct(), t = t.memoizedState, a = Ct();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Ou(e, t, a, i) {
      return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = Ve.updateQueue, t === null && (t = Lr(), Ve.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Yd(e) {
      var t = bl();
      return e = { current: e }, t.memoizedState = e;
    }
    function ec(e, t, a, i) {
      var o = bl();
      Ve.flags |= e, o.memoizedState = Ou(
        Wu | t,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function _l(e, t, a, i) {
      var o = Ct();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Zt !== null && i !== null && iy(i, Zt.memoizedState.deps) ? o.memoizedState = Ou(t, f, a, i) : (Ve.flags |= e, o.memoizedState = Ou(
        Wu | t,
        f,
        a,
        i
      ));
    }
    function kc(e, t) {
      (Ve.mode & Oi) !== Le ? ec(276826112, dn, e, t) : ec(8390656, dn, e, t);
    }
    function k0(e) {
      Ve.flags |= 4;
      var t = Ve.updateQueue;
      if (t === null)
        t = Lr(), Ve.updateQueue = t, t.events = [e];
      else {
        var a = t.events;
        a === null ? t.events = [e] : a.push(e);
      }
    }
    function Jr(e) {
      var t = bl(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((bt & ea) !== sa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function uf(e) {
      var t = Ct().memoizedState;
      return k0({ ref: t, nextImpl: e }), function() {
        if ((bt & ea) !== sa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function va(e, t) {
      var a = 4194308;
      return (Ve.mode & Oi) !== Le && (a |= 134217728), ec(a, iu, e, t);
    }
    function Pa(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Ru(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Ve.mode & Oi) !== Le && (i |= 134217728), ec(
        i,
        iu,
        Pa.bind(null, t, e),
        a
      );
    }
    function cf(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, _l(
        4,
        iu,
        Pa.bind(null, t, e),
        a
      );
    }
    function Gd(e, t) {
      return bl().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Jn(e, t) {
      var a = Ct();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && iy(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function Sa(e, t) {
      var a = bl();
      t = t === void 0 ? null : t;
      var i = e();
      if (Zs) {
        ve(!0);
        try {
          e();
        } finally {
          ve(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function It(e, t) {
      var a = Ct();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && iy(t, i[1]))
        return i[0];
      if (i = e(), Zs) {
        ve(!0);
        try {
          e();
        } finally {
          ve(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function of(e, t) {
      var a = bl();
      return Ut(a, e, t);
    }
    function Du(e, t) {
      var a = Ct();
      return yl(
        a,
        Zt.memoizedState,
        e,
        t
      );
    }
    function We(e, t) {
      var a = Ct();
      return Zt === null ? Ut(a, e, t) : yl(
        a,
        Zt.memoizedState,
        e,
        t
      );
    }
    function Ut(e, t, a) {
      return a === void 0 || (Do & 1073741824) !== 0 && (ct & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = pf(), Ve.lanes |= e, nr |= e, a);
    }
    function yl(e, t, a, i) {
      return fn(a, t) ? a : rm.current !== null ? (e = Ut(e, a, i), fn(e, t) || (Zl = !0), e) : (Do & 42) === 0 || (Do & 1073741824) !== 0 && (ct & 261930) === 0 ? (Zl = !0, e.memoizedState = a) : (e = pf(), Ve.lanes |= e, nr |= e, t);
    }
    function Fc() {
      Q.asyncTransitions--;
    }
    function Wc(e, t, a, i, o) {
      var f = zt.p;
      zt.p = f !== 0 && f < Il ? f : Il;
      var d = Q.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), Q.T = h, kr(e, !1, t, a);
      try {
        var y = o(), p = Q.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          Q.asyncTransitions++, y.then(Fc, Fc);
          var z = Ud(
            y,
            i
          );
          Ic(
            e,
            t,
            z,
            ia(e)
          );
        } else
          Ic(
            e,
            t,
            i,
            ia(e)
          );
      } catch (U) {
        Ic(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: U },
          ia(e)
        );
      } finally {
        zt.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), Q.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function hi(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Kr(e).queue;
      J0(e), Wc(
        e,
        o,
        t,
        ld,
        a === null ? X : function() {
          return ff(e), a(i);
        }
      );
    }
    function Kr(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: ld,
        baseState: ld,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Wa,
          lastRenderedState: ld
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Wa,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function ff(e) {
      Q.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Kr(e);
      t.next === null && (t = e.alternate.memoizedState), Ic(
        e,
        t.next.queue,
        {},
        ia(e)
      );
    }
    function tc() {
      var e = jd(!1);
      return e = Wc.bind(
        null,
        Ve,
        e.queue,
        !0,
        !1
      ), bl().memoizedState = e, [!1, e];
    }
    function F0() {
      var e = Zc(Wa)[0], t = Ct().memoizedState;
      return [
        typeof e == "boolean" ? e : Xr(e),
        t
      ];
    }
    function nl() {
      var e = Jc(Wa)[0], t = Ct().memoizedState;
      return [
        typeof e == "boolean" ? e : Xr(e),
        t
      ];
    }
    function mi() {
      return Dt(S0);
    }
    function $r() {
      var e = bl(), t = Jt.identifierPrefix;
      if (yt) {
        var a = Eo, i = bo;
        a = (i & ~(1 << 32 - Wl(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = bv++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = gT++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Ld() {
      return bl().memoizedState = W0.bind(
        null,
        Ve
      );
    }
    function W0(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = ia(a), o = Dl(i), f = Eu(a, o, i);
            f !== null && (vu(i, "refresh()", e), Xe(f, a, i), An(f, a, i)), e = Md(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: e };
            return;
        }
        a = a.return;
      }
    }
    function c1(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ia(e);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      ql(e) ? rl(t, o) : (o = Nc(e, t, o, i), o !== null && (vu(i, "dispatch()", e), Xe(o, e, i), Fr(o, t, i)));
    }
    function Xd(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ia(e), Ic(e, t, a, i) && vu(i, "setState()", e);
    }
    function Ic(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ql(e)) rl(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = Q.H;
          Q.H = Di;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, fn(y, h))
              return Ko(e, t, o, 0), Jt === null && Ad(), !1;
          } catch {
          } finally {
            Q.H = d;
          }
        }
        if (a = Nc(e, t, o, i), a !== null)
          return Xe(a, e, i), Fr(a, t, i), !0;
      }
      return !1;
    }
    function kr(e, t, a, i) {
      if (Q.T === null && Gs === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Py(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, ql(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Nc(
          e,
          a,
          i,
          2
        ), t !== null && (vu(2, "setOptimistic()", e), Xe(t, e, 2));
    }
    function ql(e) {
      var t = e.alternate;
      return e === Ve || t !== null && t === Ve;
    }
    function rl(e, t) {
      hm = Sv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Fr(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, gr(e, a);
      }
    }
    function Pc(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Zb.has(t) || (Zb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function rf(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & wa) {
        ve(!0);
        try {
          f = a(i, o);
        } finally {
          ve(!1);
        }
      }
      f === void 0 && (t = Ae(t) || "Component", Lb.has(t) || (Lb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : nt({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Qd(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & wa) {
          ve(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            ve(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Ae(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Jo(a, i) || !Jo(o, f) : !0;
    }
    function _u(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = me(e) || "Component", jb.has(e) || (jb.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), k1.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function zu(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = nt({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function Vd(e) {
      D1(e), console.warn(
        `%s

%s
`,
        mm ? "An error occurred in the <" + mm + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Zd(e) {
      var t = mm ? "The above error occurred in the <" + mm + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((F1 || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          _E + " " + e[0],
          zE,
          Zv + i + Zv,
          ME
        ) : e.splice(
          0,
          0,
          _E,
          zE,
          Zv + i + Zv,
          ME
        ), e.unshift(console), i = qT.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function hy(e) {
      D1(e);
    }
    function Wr(e, t) {
      try {
        mm = t.source ? me(t.source) : null, F1 = null;
        var a = t.value;
        if (Q.actQueue !== null)
          Q.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function my(e, t, a) {
      try {
        mm = a.source ? me(a.source) : null, F1 = me(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Jd(e, t, a) {
      return a = Dl(a), a.tag = Q1, a.payload = { element: null }, a.callback = function() {
        se(t.source, Wr, e, t);
      }, a;
    }
    function Kd(e) {
      return e = Dl(e), e.tag = Q1, e;
    }
    function $d(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          xc(a), se(
            i.source,
            my,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        xc(a), se(
          i.source,
          my,
          t,
          a,
          i
        ), typeof o != "function" && (ir === null ? ir = /* @__PURE__ */ new Set([this]) : ir.add(this)), hT(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          me(a) || "Unknown"
        );
      });
    }
    function yy(e, t, a, i, o) {
      if (a.flags |= 32768, Lu && Ef(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && Ln(
          t,
          a,
          o,
          !0
        ), yt && (gc = !0), a = uu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return Fu === null ? vf() : a.alternate === null && dl === Co && (dl = Av), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === pv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), mh(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === pv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), mh(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return mh(e, i, o), vf(), !1;
      }
      if (yt)
        return gc = !0, t = uu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== H1 && Cr(
          ha(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== H1 && Cr(
          ha(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = ha(i, a), o = Jd(
          e.stateNode,
          i,
          o
        ), jr(e, o), dl !== lr && (dl = Js)), !1;
      var f = ha(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (r0 === null ? r0 = [f] : r0.push(f), dl !== lr && (dl = Js), t === null) return !0;
      i = ha(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Jd(
              a.stateNode,
              i,
              e
            ), jr(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (ir === null || !ir.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Kd(o), $d(
                o,
                e,
                a,
                i
              ), jr(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Yl(e, t, a, i) {
      t.child = e === null ? Rb(t, null, a, i) : Vs(
        t,
        e.child,
        a,
        i
      );
    }
    function I0(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return Vi(t), i = cy(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = Vc(), e !== null && !Zl ? (Gr(e, t, o), Kn(e, t, o)) : (yt && h && Dd(t), t.flags |= 1, Yl(e, t, i, o), t.child);
    }
    function py(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !$m(f) && f.defaultProps === void 0 && a.compare === null ? (a = Yi(f), t.tag = 15, t.type = a, sf(t, f), gy(
          e,
          t,
          a,
          i,
          o
        )) : (e = Bc(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !Pd(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Jo, a(d, i) && e.ref === t.ref)
          return Kn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = gu(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function gy(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Jo(f, i) && e.ref === t.ref && t.type === e.type)
          if (Zl = !1, t.pendingProps = i = f, Pd(e, o))
            (e.flags & 131072) !== 0 && (Zl = !0);
          else
            return t.lanes = e.lanes, Kn(e, t, o);
      }
      return Ey(
        e,
        t,
        a,
        i,
        o
      );
    }
    function vy(e, t, a, i) {
      var o = i.children, f = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: Yp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, e !== null) {
            for (i = t.child = e.child, o = 0; i !== null; )
              o = o | i.lanes | i.childLanes, i = i.sibling;
            i = o & ~f;
          } else i = 0, t.child = null;
          return Sy(
            e,
            t,
            f,
            a,
            i
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Io(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? xd(t, f) : oi(t), Bd(t);
        else
          return i = t.lanes = 536870912, Sy(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? (Io(t, f.cachePool), xd(t, f), Au(t), t.memoizedState = null) : (e !== null && Io(t, null), oi(t), Au(t));
      return Yl(e, t, o, a), t.child;
    }
    function eo(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: Yp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function Sy(e, t, a, i, o) {
      var f = ci();
      return f = f === null ? null : {
        parent: Xl._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && Io(t, null), oi(t), Bd(t), e !== null && Ln(e, t, i, !0), t.childLanes = o, null;
    }
    function Ir(e, t) {
      var a = t.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), t = es(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function by(e, t, a) {
      return Vs(t, e.child, null, a), e = Ir(
        t,
        t.pendingProps
      ), e.flags |= 2, wl(t), t.memoizedState = null, e;
    }
    function P0(e, t, a) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (yt) {
          if (i.mode === "hidden")
            return e = Ir(t, i), t.lanes = 536870912, eo(null, e);
          if (Zn(t), (e = ll) ? (a = Nt(
            e,
            $u
          ), a = a !== null && a.data === Is ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: Q0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Fm(a), i.return = t, t.child = i, za = t, ll = null)) : a = null, a === null)
            throw ua(t, e), vn(t);
          return t.lanes = 536870912, null;
        }
        return Ir(t, i);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Zn(t), o)
          if (t.flags & 256)
            t.flags &= -257, t = by(
              e,
              t,
              a
            );
          else if (t.memoizedState !== null)
            t.child = e.child, t.flags |= 128, t = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (Z0(), (a & 536870912) !== 0 && gf(t), Zl || Ln(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, Zl || o) {
          if (i = Jt, i !== null && (d = Oc(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, na(e, d), Xe(i, e, d), W1;
          vf(), t = by(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, ll = nn(
            d.nextSibling
          ), za = t, yt = !0, Ff = null, gc = !1, nu = null, $u = !1, e !== null && V0(t, e), t = Ir(t, i), t.flags |= 4096;
        return t;
      }
      return f = e.child, i = { mode: i.mode, children: i.children }, (a & 536870912) !== 0 && (a & e.lanes) !== 0 && gf(t), e = gu(f, i), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Pr(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Ey(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Ae(a) || "Unknown";
        Jb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Jb[f] = !0);
      }
      return t.mode & wa && Ri.recordLegacyContextWarning(
        t,
        null
      ), e === null && (sf(t, t.type), a.contextTypes && (f = Ae(a) || "Unknown", $b[f] || ($b[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Vi(t), a = cy(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Vc(), e !== null && !Zl ? (Gr(e, t, o), Kn(e, t, o)) : (yt && i && Dd(t), t.flags |= 1, Yl(e, t, a, o), t.child);
    }
    function Ty(e, t, a, i, o, f) {
      return Vi(t), zo = -1, a0 = e !== null && e.type !== t.type, t.updateQueue = null, a = qr(
        t,
        i,
        a,
        o
      ), ml(e, t), i = Vc(), e !== null && !Zl ? (Gr(e, t, f), Kn(e, t, f)) : (yt && i && Dd(t), t.flags |= 1, Yl(e, t, a, f), t.child);
    }
    function to(e, t, a, i, o) {
      switch (he(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = Jt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Kd(h), $d(
            h,
            d,
            t,
            ha(f, t)
          ), jr(t, h);
      }
      if (Vi(t), t.stateNode === null) {
        if (d = kf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== tu) && !Vb.has(a) && (Vb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === jh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Ae(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = Dt(f)), f = new a(i, d), t.mode & wa) {
          ve(!0);
          try {
            f = new a(i, d);
          } finally {
            ve(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = k1, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Bb, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Ae(a) || "Component", wb.has(d) || (wb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Ae(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Yb.has(f) || (Yb.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = t.stateNode, d = Ae(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !Qb.has(a) && (Qb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Xb.has(a) && (Xb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Ae(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || qb.has(a) || (qb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Ae(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || Tl(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, ht(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? Dt(d) : kf, f.state === i && (d = Ae(a) || "Component", Gb.has(d) || (Gb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & wa && Ri.recordLegacyContextWarning(
          t,
          f
        ), Ri.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (rf(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          me(t) || "Component"
        ), k1.enqueueReplaceState(
          f,
          f.state,
          null
        )), Tu(t, i, f, o), ef(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Oi) !== Le && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var z = t.memoizedProps;
        h = zu(a, z), f.props = h;
        var U = f.context;
        y = a.contextType, d = kf, typeof y == "object" && y !== null && (d = Dt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", z = t.pendingProps !== z, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (z || U !== d) && _u(
          t,
          f,
          i,
          d
        ), tr = !1;
        var T = t.memoizedState;
        f.state = T, Tu(t, i, f, o), ef(), U = t.memoizedState, z || T !== U || tr ? (typeof p == "function" && (rf(
          t,
          a,
          p,
          i
        ), U = t.memoizedState), (h = tr || Qd(
          t,
          a,
          h,
          i,
          T,
          U,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Oi) !== Le && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Oi) !== Le && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = U), f.props = i, f.state = U, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Oi) !== Le && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, bu(e, t), d = t.memoizedProps, y = zu(a, d), f.props = y, p = t.pendingProps, T = f.context, U = a.contextType, h = kf, typeof U == "object" && U !== null && (h = Dt(U)), z = a.getDerivedStateFromProps, (U = typeof z == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || T !== h) && _u(
          t,
          f,
          i,
          h
        ), tr = !1, T = t.memoizedState, f.state = T, Tu(t, i, f, o), ef();
        var G = t.memoizedState;
        d !== p || T !== G || tr || e !== null && e.dependencies !== null && Fo(e.dependencies) ? (typeof z == "function" && (rf(
          t,
          a,
          z,
          i
        ), G = t.memoizedState), (y = tr || Qd(
          t,
          a,
          y,
          i,
          T,
          G,
          h
        ) || e !== null && e.dependencies !== null && Fo(e.dependencies)) ? (U || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, G, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          G,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = G), f.props = i, f.state = G, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Pr(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, Ci(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, rn = -1;
        else if (a = sb(h), t.mode & wa) {
          ve(!0);
          try {
            sb(h);
          } finally {
            ve(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = Vs(
          t,
          e.child,
          null,
          o
        ), t.child = Vs(
          t,
          null,
          a,
          o
        )) : Yl(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Kn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (ym || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        me(t) || "a component"
      ), ym = !0), e;
    }
    function Ay(e, t, a, i) {
      return Xi(), t.flags |= 256, Yl(e, t, a, i), t.child;
    }
    function sf(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Ae(t) || "Unknown", kb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), kb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Ae(t) || "Unknown", Kb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), Kb[t] = !0));
    }
    function df(e) {
      return { baseLanes: e, cachePool: ly() };
    }
    function kd(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Un), e;
    }
    function Fd(e, t, a) {
      var i, o = t.pendingProps;
      ce(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Ul.current & t0) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (yt) {
          if (f ? ga(t) : Au(t), (e = ll) ? (a = Nt(
            e,
            $u
          ), a = a !== null && a.data !== Is ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: Q0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Fm(a), i.return = t, t.child = i, za = t, ll = null)) : a = null, a === null)
            throw ua(t, e), vn(t);
          return lp(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          Au(t);
          var y = t.mode;
          return h = es(
            { mode: "hidden", children: h },
            y
          ), o = jc(
            o,
            y,
            a,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = df(a), o.childLanes = kd(
            e,
            i,
            a
          ), t.memoizedState = I1, eo(
            null,
            o
          );
        }
        return ga(t), Oy(
          t,
          h
        );
      }
      var p = e.memoizedState;
      if (p !== null) {
        var z = p.dehydrated;
        if (z !== null) {
          if (d)
            t.flags & 256 ? (ga(t), t.flags &= -257, t = Wd(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (Au(t), t.child = e.child, t.flags |= 128, t = null) : (Au(t), h = o.fallback, y = t.mode, o = es(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = jc(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, Vs(
              t,
              e.child,
              null,
              a
            ), o = t.child, o.memoizedState = df(a), o.childLanes = kd(
              e,
              i,
              a
            ), t.memoizedState = I1, t = eo(
              null,
              o
            ));
          else if (ga(t), Z0(), (a & 536870912) !== 0 && gf(t), lp(
            z
          )) {
            if (i = z.nextSibling && z.nextSibling.dataset, i) {
              h = i.dgst;
              var U = i.msg;
              y = i.stck;
              var T = i.cstck;
            }
            f = U, i = h, o = y, z = T, h = f, y = z, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = i, i = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: i
            }, typeof i == "string" && U1.set(
              h,
              o
            ), Cr(o), t = Wd(
              e,
              t,
              a
            );
          } else if (Zl || Ln(
            e,
            t,
            a,
            !1
          ), i = (a & e.childLanes) !== 0, Zl || i) {
            if (i = Jt, i !== null && (o = Oc(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, na(
                e,
                o
              ), Xe(
                i,
                e,
                o
              ), W1;
            vs(
              z
            ) || vf(), t = Wd(
              e,
              t,
              a
            );
          } else
            vs(
              z
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, ll = nn(
              z.nextSibling
            ), za = t, yt = !0, Ff = null, gc = !1, nu = null, $u = !1, e !== null && V0(t, e), t = Oy(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (Au(t), h = o.fallback, y = t.mode, T = e.child, z = T.sibling, o = gu(
        T,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = T.subtreeFlags & 65011712, z !== null ? h = gu(
        z,
        h
      ) : (h = jc(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, eo(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = df(a) : (y = h.cachePool, y !== null ? (T = Xl._currentValue, y = y.parent !== T ? { parent: T, pool: T } : y) : y = ly(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = kd(
        e,
        i,
        a
      ), t.memoizedState = I1, eo(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & e.lanes) !== 0 && gf(t), ga(t), a = e.child, e = a.sibling, a = gu(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Oy(e, t) {
      return t = es(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function es(e, t) {
      return e = D(22, e, null, t), e.lanes = 0, e;
    }
    function Wd(e, t, a) {
      return Vs(t, e.child, null, a), e = Oy(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Ry(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), zd(
        e.return,
        t,
        a
      );
    }
    function Id(e, t, a, i, o, f) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function Dy(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = Ul.current;
      if ((i = (h & t0) !== 0) ? (h = h & sm | t0, t.flags |= 128) : h &= sm, Je(Ul, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !Fb[h])
        if (Fb[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", Tv[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (Tv[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (Tv[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (Tv[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (Tl(d)) {
          for (h = 0; h < d.length; h++)
            if (!Xt(
              d[h],
              h
            ))
              break e;
        } else if (h = pe(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!Xt(y.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Yl(e, t, d, a), yt ? (Li(), d = Gp) : d = 0, !i && e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Ry(e, a, t);
          else if (e.tag === 19)
            Ry(e, a, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      switch (o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && Qc(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Id(
            t,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Qc(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Id(
            t,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          Id(
            t,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Kn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), rn = -1, nr |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (Ln(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = gu(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = gu(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Pd(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Fo(e)));
    }
    function eg(e, t, a) {
      switch (t.tag) {
        case 3:
          Lt(
            t,
            t.stateNode.containerInfo
          ), Sn(
            t,
            Xl,
            e.memoizedState.cache
          ), Xi();
          break;
        case 27:
        case 5:
          ne(t);
          break;
        case 4:
          Lt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Sn(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 31:
          if (t.memoizedState !== null)
            return t.flags |= 128, Zn(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (ga(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Fd(
              e,
              t,
              a
            ) : (ga(t), e = Kn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ga(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (Ln(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return Dy(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Je(
            Ul,
            Ul.current,
            t
          ), i) break;
          return null;
        case 22:
          return t.lanes = 0, vy(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          Sn(
            t,
            Xl,
            e.memoizedState.cache
          );
      }
      return Kn(e, t, a);
    }
    function ts(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = Bc(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Zl = !0;
        else {
          if (!Pd(e, a) && (t.flags & 128) === 0)
            return Zl = !1, eg(
              e,
              t,
              a
            );
          Zl = (e.flags & 131072) !== 0;
        }
      else
        Zl = !1, (i = yt) && (Li(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Li(), Wm(t, Gp, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = ka(t.elementType), t.type = e, typeof e == "function")
            $m(e) ? (i = zu(
              e,
              i
            ), t.tag = 1, t.type = e = Yi(e), t = to(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, sf(t, e), t.type = e = Yi(e), t = Ey(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Bf) {
                t.tag = 11, t.type = e = Od(e), t = I0(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === zs) {
                t.tag = 14, t = py(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === ca && (t = " Did you wrap a component in React.lazy() more than once?"), a = Ae(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Ey(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = zu(
            i,
            t.pendingProps
          ), to(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (Lt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, bu(e, t), Tu(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, Sn(t, Xl, i), i !== f.cache && ni(
              t,
              [Xl],
              a,
              !0
            ), ef(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = Ay(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = ha(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), Cr(o), t = Ay(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else
                for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, ll = nn(e.firstChild), za = t, yt = !0, Ff = null, gc = !1, nu = null, $u = !0, a = Rb(
                  t,
                  null,
                  i,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (Xi(), i === o) {
                t = Kn(
                  e,
                  t,
                  a
                );
                break e;
              }
              Yl(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Pr(e, t), e === null ? (a = ip(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = a : yt || (a = t.type, e = t.pendingProps, i = Kt(
            un.current
          ), i = ps(
            i
          ).createElement(a), i[el] = t, i[_a] = e, Pt(i, a, e), be(i), t.stateNode = i) : t.memoizedState = ip(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return ne(t), e === null && yt && (i = Kt(un.current), o = K(), i = t.stateNode = bi(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), gc || (o = xa(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (wc(t, 0).serverProps = o)), za = t, $u = !0, o = ll, rc(t.type) ? (ES = o, ll = nn(
            i.firstChild
          )) : ll = o), Yl(
            e,
            t,
            t.pendingProps.children,
            a
          ), Pr(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && yt && (f = K(), i = br(
            t.type,
            f.ancestorInfo
          ), o = ll, (d = !o) || (d = Cg(
            o,
            t.type,
            t.pendingProps,
            $u
          ), d !== null ? (t.stateNode = d, gc || (f = xa(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (wc(t, 0).serverProps = f)), za = t, ll = nn(
            d.firstChild
          ), $u = !1, f = !0) : f = !1, d = !f), d && (i && ua(t, o), vn(t))), ne(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Df(o, f) ? i = null : d !== null && Df(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = cy(
            e,
            t,
            Yr,
            null,
            null,
            a
          ), S0._currentValue = o), Pr(e, t), Yl(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && yt && (a = t.pendingProps, e = K(), i = e.ancestorInfo.current, a = i != null ? Er(
            a,
            i.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = ll, (i = !e) || (i = Ug(
            e,
            t.pendingProps,
            $u
          ), i !== null ? (t.stateNode = i, za = t, ll = null, i = !0) : i = !1, i = !i), i && (a && ua(t, e), vn(t))), null;
        case 13:
          return Fd(e, t, a);
        case 4:
          return Lt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Vs(
            t,
            null,
            i,
            a
          ) : Yl(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return I0(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return Yl(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return Yl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, Yl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || Wb || (Wb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Sn(t, i, f), Yl(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Vi(t), o = Dt(o), i = Y1(
            i,
            o,
            void 0
          ), t.flags |= 1, Yl(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return py(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return gy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return Dy(
            e,
            t,
            a
          );
        case 31:
          return P0(e, t, a);
        case 22:
          return vy(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          return Vi(t), i = Dt(Xl), e === null ? (o = ci(), o === null && (o = Jt, f = Md(), o.pooledCache = f, Yc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, ht(t), Sn(t, Xl, o)) : ((e.lanes & a) !== 0 && (bu(e, t), Tu(t, null, null, a), ef()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Sn(t, Xl, i)) : (i = f.cache, Sn(t, Xl, i), i !== o.cache && ni(
            t,
            [Xl],
            a,
            !0
          ))), Yl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Mu(e) {
      e.flags |= 4;
    }
    function eh(e, t, a, i, o) {
      if ((t = (e.mode & oT) !== Le) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Vy()) e.flags |= 8192;
          else
            throw Qs = pv, L1;
      } else e.flags &= -16777217;
    }
    function tg(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & Pu) !== td)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !st(t))
        if (Vy()) e.flags |= 8192;
        else
          throw Qs = pv, L1;
    }
    function hf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? xo() : 536870912, e.lanes |= t, ks |= t);
    }
    function mf(e, t) {
      if (!yt)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Bt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & ut) !== Le) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & ut) !== Le) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function _y(e, t, a) {
      var i = t.pendingProps;
      switch (_d(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Bt(t), null;
        case 1:
          return Bt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Gn(Xl, t), C(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (qc(t) ? (Qi(), Mu(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Mr())), Bt(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (Mu(t), f !== null ? (Bt(t), tg(
            t,
            f
          )) : (Bt(t), eh(
            t,
            o,
            null,
            i,
            a
          ))) : f ? f !== e.memoizedState ? (Mu(t), Bt(t), tg(
            t,
            f
          )) : (Bt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Mu(t), Bt(t), eh(
            t,
            o,
            e,
            i,
            a
          )), null;
        case 27:
          if (Oe(t), a = Kt(un.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Mu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Bt(t), null;
            }
            e = K(), qc(t) ? Im(t) : (e = bi(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Mu(t));
          }
          return Bt(t), null;
        case 5:
          if (Oe(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Mu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Bt(t), null;
            }
            var d = K();
            if (qc(t))
              Im(t);
            else {
              switch (f = Kt(un.current), br(o, d.ancestorInfo), d = d.context, f = ps(f), d) {
                case Am:
                  f = f.createElementNS(
                    lt,
                    o
                  );
                  break;
                case Xv:
                  f = f.createElementNS(
                    ke,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        lt,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        ke,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof i.is == "string" ? f.createElement("select", {
                        is: i.is
                      }) : f.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                      break;
                    default:
                      f = typeof i.is == "string" ? f.createElement(o, {
                        is: i.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || cn.call(EE, o) || (EE[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[el] = t, f[_a] = i;
              e: for (d = t.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === t) break e;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === t)
                    break e;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              t.stateNode = f;
              e: switch (Pt(f, o, i), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
              i && Mu(t);
            }
          }
          return Bt(t), eh(
            t,
            t.type,
            e === null ? null : e.memoizedProps,
            t.pendingProps,
            a
          ), null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Mu(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Kt(un.current), a = K(), qc(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !gc, i = null, f = za, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = xg(
                      e,
                      a,
                      i
                    ), o !== null && (wc(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = xg(
                      e,
                      a,
                      i
                    ), o !== null && (wc(
                      t,
                      0
                    ).serverProps = o));
                }
              e[el] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || ep(e.nodeValue, a)), e || vn(t, !0);
            } else
              o = a.ancestorInfo.current, o != null && Er(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = ps(e).createTextNode(
                i
              ), e[el] = t, t.stateNode = e;
          }
          return Bt(t), null;
        case 31:
          if (a = t.memoizedState, e === null || e.memoizedState !== null) {
            if (i = qc(t), a !== null) {
              if (e === null) {
                if (!i)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                e[el] = t, Bt(t), (t.mode & ut) !== Le && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                Qi(), Xi(), (t.flags & 128) === 0 && (a = t.memoizedState = null), t.flags |= 4, Bt(t), (t.mode & ut) !== Le && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = Mr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
            if (!e)
              return t.flags & 256 ? (wl(t), t) : (wl(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Bt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = i, f = qc(t), o !== null && o.dehydrated !== null) {
              if (e === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[el] = t, Bt(t), (t.mode & ut) !== Le && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Qi(), Xi(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, Bt(t), (t.mode & ut) !== Le && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Mr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (wl(t), t) : (wl(t), null);
          }
          return wl(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & ut) !== Le && Lc(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), hf(t, t.updateQueue), Bt(t), (t.mode & ut) !== Le && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return C(t), e === null && oc(
            t.stateNode.containerInfo
          ), Bt(t), null;
        case 10:
          return Gn(t.type, t), Bt(t), null;
        case 19:
          if (Te(Ul, t), i = t.memoizedState, i === null) return Bt(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) mf(i, !1);
            else {
              if (dl !== Co || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Qc(e), f !== null) {
                    for (t.flags |= 128, mf(i, !1), e = f.updateQueue, t.updateQueue = e, hf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      km(a, e), a = a.sibling;
                    return Je(
                      Ul,
                      Ul.current & sm | t0,
                      t
                    ), yt && Yn(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && Ll() > Mv && (t.flags |= 128, o = !0, mf(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = Qc(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, hf(t, e), mf(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !yt)
                  return Bt(t), null;
              } else
                2 * Ll() - i.renderingStartTime > Mv && a !== 536870912 && (t.flags |= 128, o = !0, mf(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Ll(), e.sibling = null, a = Ul.current, a = o ? a & sm | t0 : a & sm, Je(Ul, a, t), yt && Yn(t, i.treeForkCount), e) : (Bt(t), null);
        case 22:
        case 23:
          return wl(t), Vn(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Bt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Bt(t), a = t.updateQueue, a !== null && hf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Te(Ls, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Gn(Xl, t), Bt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function lg(e, t) {
      switch (_d(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & ut) !== Le && Lc(t), t) : null;
        case 3:
          return Gn(Xl, t), C(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return Oe(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (wl(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Xi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & ut) !== Le && Lc(t), t) : null;
        case 13:
          if (wl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Xi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & ut) !== Le && Lc(t), t) : null;
        case 19:
          return Te(Ul, t), null;
        case 4:
          return C(t), null;
        case 10:
          return Gn(t.type, t), null;
        case 22:
        case 23:
          return wl(t), Vn(t), e !== null && Te(Ls, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & ut) !== Le && Lc(t), t) : null;
        case 24:
          return Gn(Xl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function zy(e, t) {
      switch (_d(t), t.tag) {
        case 3:
          Gn(Xl, t), C(t);
          break;
        case 26:
        case 27:
        case 5:
          Oe(t);
          break;
        case 4:
          C(t);
          break;
        case 31:
          t.memoizedState !== null && wl(t);
          break;
        case 13:
          wl(t);
          break;
        case 19:
          Te(Ul, t);
          break;
        case 10:
          Gn(t.type, t);
          break;
        case 22:
        case 23:
          wl(t), Vn(t), e !== null && Te(Ls, t);
          break;
        case 24:
          Gn(Xl, t);
      }
    }
    function Cu(e) {
      return (e.mode & ut) !== Le;
    }
    function ag(e, t) {
      Cu(e) ? (ol(), yi(t, e), ya()) : yi(t, e);
    }
    function th(e, t, a) {
      Cu(e) ? (ol(), lc(
        a,
        e,
        t
      ), ya()) : lc(
        a,
        e,
        t
      );
    }
    function yi(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && (i = void 0, (e & sn) !== vv && (bm = !0), i = se(
              t,
              mT,
              a
            ), (e & sn) !== vv && (bm = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & iu) !== 0 ? "useLayoutEffect" : (a.tag & sn) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, se(
                t,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        tt(t, t.return, h);
      }
    }
    function lc(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & sn) !== vv && (bm = !0), o = t, se(
                o,
                yT,
                o,
                a,
                h
              ), (e & sn) !== vv && (bm = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        tt(t, t.return, y);
      }
    }
    function ls(e, t) {
      Cu(e) ? (ol(), yi(t, e), ya()) : yi(t, e);
    }
    function lh(e, t, a) {
      Cu(e) ? (ol(), lc(
        a,
        e,
        t
      ), ya()) : lc(
        a,
        e,
        t
      );
    }
    function My(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || ym || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          me(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          me(e) || "instance"
        ));
        try {
          se(
            e,
            tf,
            t,
            a
          );
        } catch (i) {
          tt(e, e.return, i);
        }
      }
    }
    function as(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function ng(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || ym || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        me(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        me(e) || "instance"
      ));
      try {
        var o = zu(
          e.type,
          a
        ), f = se(
          e,
          as,
          t,
          o,
          i
        );
        a = Ib, f !== void 0 || a.has(e.type) || (a.add(e.type), se(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            me(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        tt(e, e.return, d);
      }
    }
    function ah(e, t, a) {
      a.props = zu(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, Cu(e) ? (ol(), se(
        e,
        gb,
        e,
        t,
        a
      ), ya()) : se(
        e,
        gb,
        e,
        t,
        a
      );
    }
    function ug(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (Cu(e))
            try {
              ol(), e.refCleanup = t(a);
            } finally {
              ya();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            me(e)
          ), t.current = a;
      }
    }
    function lo(e, t) {
      try {
        se(e, ug, e);
      } catch (a) {
        tt(e, t, a);
      }
    }
    function On(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (Cu(e))
              try {
                ol(), se(e, i);
              } finally {
                ya(e);
              }
            else se(e, i);
          } catch (o) {
            tt(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (Cu(e))
              try {
                ol(), se(e, a, null);
              } finally {
                ya(e);
              }
            else se(e, a, null);
          } catch (o) {
            tt(e, t, o);
          }
        else a.current = null;
    }
    function Cy(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", dv && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(f, t, i, a);
    }
    function ig(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", dv && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function ac(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        se(
          e,
          Sg,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        tt(e, e.return, o);
      }
    }
    function nh(e, t, a) {
      try {
        se(
          e,
          Oh,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        tt(e, e.return, i);
      }
    }
    function Uy(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && rc(e.type) || e.tag === 4;
    }
    function uh(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Uy(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && rc(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function yf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (Eg(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (Eg(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = pn));
      else if (i !== 4 && (i === 27 && rc(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (yf(e, t, a), e = e.sibling; e !== null; )
          yf(e, t, a), e = e.sibling;
    }
    function ns(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && rc(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (ns(e, t, a), e = e.sibling; e !== null; )
          ns(e, t, a), e = e.sibling;
    }
    function Hy(e) {
      for (var t, a = e.return; a !== null; ) {
        if (Uy(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = uh(e), ns(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (Rh(a), t.flags &= -33), t = uh(e), ns(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = uh(e), yf(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Ny(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        se(
          e,
          qu,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        tt(e, e.return, i);
      }
    }
    function xy(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : !1;
    }
    function o1(e, t) {
      if (e = e.containerInfo, vS = Jv, e = bd(e), Lm(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, y = -1, p = 0, z = 0, U = e, T = null;
              t: for (; ; ) {
                for (var G; U !== a || o !== 0 && U.nodeType !== 3 || (h = d + o), U !== f || i !== 0 && U.nodeType !== 3 || (y = d + i), U.nodeType === 3 && (d += U.nodeValue.length), (G = U.firstChild) !== null; )
                  T = U, U = G;
                for (; ; ) {
                  if (U === e) break t;
                  if (T === a && ++p === o && (h = d), T === f && ++z === i && (y = d), (G = U.nextSibling) !== null) break;
                  U = T, T = U.parentNode;
                }
                U = G;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (SS = {
        focusedElem: e,
        selectionRange: a
      }, Jv = !1, ra = t; ra !== null; )
        if (t = ra, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, ra = e;
        else
          for (; ra !== null; ) {
            switch (e = t = ra, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                if ((o & 4) !== 0 && (e = e.updateQueue, e = e !== null ? e.events : null, e !== null))
                  for (a = 0; a < e.length; a++)
                    o = e[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && ng(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    zf(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        zf(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, ra = e;
              break;
            }
            ra = t.return;
          }
    }
    function ih(e, t, a) {
      var i = Wt(), o = bn(), f = Ka(), d = En(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          en(e, a), h & 4 && ag(a, iu | Wu);
          break;
        case 1:
          if (en(e, a), h & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || ym || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                me(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                me(a) || "instance"
              )), Cu(a) ? (ol(), se(
                a,
                G1,
                a,
                e
              ), ya()) : se(
                a,
                G1,
                a,
                e
              );
            else {
              var y = zu(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || ym || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                me(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                me(a) || "instance"
              )), Cu(a) ? (ol(), se(
                a,
                mb,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), ya()) : se(
                a,
                mb,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && My(a), h & 512 && lo(a, a.return);
          break;
        case 3:
          if (t = Su(), en(e, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              se(
                a,
                tf,
                h,
                y
              );
            } catch (z) {
              tt(a, a.return, z);
            }
          }
          e.effectDuration += Wo(t);
          break;
        case 27:
          t === null && h & 4 && Ny(a);
        case 26:
        case 5:
          if (en(e, a), t === null) {
            if (h & 4) ac(a);
            else if (h & 64) {
              e = a.type, t = a.memoizedProps, y = a.stateNode;
              try {
                se(
                  a,
                  bg,
                  y,
                  e,
                  t,
                  a
                );
              } catch (z) {
                tt(
                  a,
                  a.return,
                  z
                );
              }
            }
          }
          h & 512 && lo(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = Su(), en(e, a), e = a.stateNode, e.effectDuration += ma(h);
            try {
              se(
                a,
                Cy,
                a,
                t,
                Wf,
                e.effectDuration
              );
            } catch (z) {
              tt(a, a.return, z);
            }
          } else en(e, a);
          break;
        case 31:
          en(e, a), h & 4 && jy(e, a);
          break;
        case 13:
          en(e, a), h & 4 && wy(e, a), h & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = gi.bind(
            null,
            a
          ), Hg(e, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || Mo, !h) {
            t = t !== null && t.memoizedState !== null || Jl, y = Mo;
            var p = Jl;
            Mo = h, (Jl = t) && !p ? ($n(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & ut) !== Le && 0 <= Ne && 0 <= Ye && 0.05 < Ye - Ne && Ed(
              a,
              Ne,
              Ye
            )) : en(e, a), Mo = y, Jl = p;
          }
          break;
        case 30:
          break;
        default:
          en(e, a);
      }
      (a.mode & ut) !== Le && 0 <= Ne && 0 <= Ye && ((vl || 0.05 < sl) && qn(
        a,
        Ne,
        Ye,
        sl,
        cl
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < Ye - Ne && (xy(
        a.return.alternate,
        a.return
      ) || gn(
        a,
        Ne,
        Ye,
        "Mount"
      ))), Bl(i), Ja(o), cl = f, vl = d;
    }
    function pl(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, pl(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && N(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function kt(e, t, a) {
      for (a = a.child; a !== null; )
        By(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function By(e, t, a) {
      if (Ml && typeof Ml.onCommitFiberUnmount == "function")
        try {
          Ml.onCommitFiberUnmount(po, a);
        } catch (p) {
          Gu || (Gu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = Wt(), o = bn(), f = Ka(), d = En();
      switch (a.tag) {
        case 26:
          Jl || On(a, t), kt(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (e = a.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          Jl || On(a, t);
          var h = Kl, y = Mn;
          rc(a.type) && (Kl = a.stateNode, Mn = !1), kt(
            e,
            t,
            a
          ), se(
            a,
            Ei,
            a.stateNode
          ), Kl = h, Mn = y;
          break;
        case 5:
          Jl || On(a, t);
        case 6:
          if (h = Kl, y = Mn, Kl = null, kt(
            e,
            t,
            a
          ), Kl = h, Mn = y, Kl !== null)
            if (Mn)
              try {
                se(
                  a,
                  Ag,
                  Kl,
                  a.stateNode
                );
              } catch (p) {
                tt(
                  a,
                  t,
                  p
                );
              }
            else
              try {
                se(
                  a,
                  Tg,
                  Kl,
                  a.stateNode
                );
              } catch (p) {
                tt(
                  a,
                  t,
                  p
                );
              }
          break;
        case 18:
          Kl !== null && (Mn ? (e = Kl, co(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), so(e)) : co(Kl, a.stateNode));
          break;
        case 4:
          h = Kl, y = Mn, Kl = a.stateNode.containerInfo, Mn = !0, kt(
            e,
            t,
            a
          ), Kl = h, Mn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          lc(
            sn,
            a,
            t
          ), Jl || th(
            a,
            t,
            iu
          ), kt(
            e,
            t,
            a
          );
          break;
        case 1:
          Jl || (On(a, t), h = a.stateNode, typeof h.componentWillUnmount == "function" && ah(
            a,
            t,
            h
          )), kt(
            e,
            t,
            a
          );
          break;
        case 21:
          kt(
            e,
            t,
            a
          );
          break;
        case 22:
          Jl = (h = Jl) || a.memoizedState !== null, kt(
            e,
            t,
            a
          ), Jl = h;
          break;
        default:
          kt(
            e,
            t,
            a
          );
      }
      (a.mode & ut) !== Le && 0 <= Ne && 0 <= Ye && (vl || 0.05 < sl) && qn(
        a,
        Ne,
        Ye,
        sl,
        cl
      ), Bl(i), Ja(o), cl = f, vl = d;
    }
    function jy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          se(
            t,
            Dh,
            e
          );
        } catch (a) {
          tt(t, t.return, a);
        }
      }
    }
    function wy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          se(
            t,
            np,
            e
          );
        } catch (a) {
          tt(t, t.return, a);
        }
    }
    function cg(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Pb()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Pb()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function nc(e, t) {
      var a = cg(e);
      t.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), Lu)
            if (pm !== null && gm !== null)
              Ef(gm, pm);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = uo.bind(null, e, i);
          i.then(o, o);
        }
      });
    }
    function ba(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = Wt(), y = f;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (rc(y.type)) {
                  Kl = y.stateNode, Mn = !1;
                  break e;
                }
                break;
              case 5:
                Kl = y.stateNode, Mn = !1;
                break e;
              case 3:
              case 4:
                Kl = y.stateNode.containerInfo, Mn = !0;
                break e;
            }
            y = y.return;
          }
          if (Kl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          By(o, f, d), Kl = null, Mn = !1, (d.mode & ut) !== Le && 0 <= Ne && 0 <= Ye && 0.05 < Ye - Ne && gn(
            d,
            Ne,
            Ye,
            "Unmount"
          ), Bl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          us(t, e), t = t.sibling;
    }
    function us(e, t) {
      var a = Wt(), i = bn(), o = Ka(), f = En(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ba(t, e), Ea(e), h & 4 && (lc(
            sn | Wu,
            e,
            e.return
          ), yi(sn | Wu, e), th(
            e,
            e.return,
            iu | Wu
          ));
          break;
        case 1:
          if (ba(t, e), Ea(e), h & 512 && (Jl || d === null || On(d, d.return)), h & 64 && Mo && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = _i, ba(t, e), Ea(e), h & 512 && (Jl || d === null || On(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = e.memoizedState, d === null)
              if (h === null)
                if (e.stateNode === null) {
                  e: {
                    h = e.type, d = e.memoizedProps, y = y.ownerDocument || y;
                    t: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[Qf] || p[el] || p.namespaceURI === lt || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), Pt(p, h, d), p[el] = e, be(p), h = p;
                        break e;
                      case "link":
                        var z = Uf(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (z) {
                          for (var U = 0; U < z.length; U++)
                            if (p = z[U], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              z.splice(U, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), Pt(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (z = Uf(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (U = 0; U < z.length; U++)
                            if (p = z[U], Tt(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              z.splice(U, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), Pt(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[el] = e, be(p), h = p;
                  }
                  e.stateNode = h;
                } else
                  jg(
                    y,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Mh(
                  y,
                  h,
                  e.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? jg(
                y,
                e.type,
                e.stateNode
              ) : Mh(
                y,
                h,
                e.memoizedProps
              )) : h === null && e.stateNode !== null && nh(
                e,
                e.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          ba(t, e), Ea(e), h & 512 && (Jl || d === null || On(d, d.return)), d !== null && h & 4 && nh(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (ba(t, e), Ea(e), h & 512 && (Jl || d === null || On(d, d.return)), e.flags & 32) {
            y = e.stateNode;
            try {
              se(
                e,
                Rh,
                y
              );
            } catch (de) {
              tt(e, e.return, de);
            }
          }
          h & 4 && e.stateNode != null && (y = e.memoizedProps, nh(
            e,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (P1 = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (ba(t, e), Ea(e), h & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = e.memoizedProps, d = d !== null ? d.memoizedProps : h, y = e.stateNode;
            try {
              se(
                e,
                f1,
                y,
                d,
                h
              );
            } catch (de) {
              tt(e, e.return, de);
            }
          }
          break;
        case 3:
          if (y = Su(), Qv = null, p = _i, _i = _h(t.containerInfo), ba(t, e), _i = p, Ea(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              se(
                e,
                ap,
                t.containerInfo
              );
            } catch (de) {
              tt(e, e.return, de);
            }
          P1 && (P1 = !1, og(e)), t.effectDuration += Wo(
            y
          );
          break;
        case 4:
          h = _i, _i = _h(
            e.stateNode.containerInfo
          ), ba(t, e), Ea(e), _i = h;
          break;
        case 12:
          h = Su(), ba(t, e), Ea(e), e.stateNode.effectDuration += ma(h);
          break;
        case 31:
          ba(t, e), Ea(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, nc(e, h)));
          break;
        case 13:
          ba(t, e), Ea(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (zv = Ll()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, nc(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var T = d !== null && d.memoizedState !== null, G = Mo, oe = Jl;
          if (Mo = G || y, Jl = oe || T, ba(t, e), Jl = oe, Mo = G, T && !y && !G && !oe && (e.mode & ut) !== Le && 0 <= Ne && 0 <= Ye && 0.05 < Ye - Ne && Ed(
            e,
            Ne,
            Ye
          ), Ea(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~Yp : t._visibility | Yp, !y || d === null || T || Mo || Jl || (uc(e), (e.mode & ut) !== Le && 0 <= Ne && 0 <= Ye && 0.05 < Ye - Ne && gn(
              e,
              Ne,
              Ye,
              "Disconnect"
            )), d = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (d === null) {
                  T = d = t;
                  try {
                    p = T.stateNode, y ? se(
                      T,
                      Rg,
                      p
                    ) : se(
                      T,
                      zg,
                      T.stateNode,
                      T.memoizedProps
                    );
                  } catch (de) {
                    tt(T, T.return, de);
                  }
                }
              } else if (t.tag === 6) {
                if (d === null) {
                  T = t;
                  try {
                    z = T.stateNode, y ? se(
                      T,
                      Dg,
                      z
                    ) : se(
                      T,
                      Mg,
                      z,
                      T.memoizedProps
                    );
                  } catch (de) {
                    tt(T, T.return, de);
                  }
                }
              } else if (t.tag === 18) {
                if (d === null) {
                  T = t;
                  try {
                    U = T.stateNode, y ? se(
                      T,
                      Og,
                      U
                    ) : se(
                      T,
                      _g,
                      T.stateNode
                    );
                  } catch (de) {
                    tt(T, T.return, de);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                d === t && (d = null), t = t.return;
              }
              d === t && (d = null), t.sibling.return = t.return, t = t.sibling;
            }
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, nc(e, d))));
          break;
        case 19:
          ba(t, e), Ea(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, nc(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          ba(t, e), Ea(e);
      }
      (e.mode & ut) !== Le && 0 <= Ne && 0 <= Ye && ((vl || 0.05 < sl) && qn(
        e,
        Ne,
        Ye,
        sl,
        cl
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < Ye - Ne && (xy(
        e.return.alternate,
        e.return
      ) || gn(
        e,
        Ne,
        Ye,
        "Mount"
      ))), Bl(a), Ja(i), cl = o, vl = f;
    }
    function Ea(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          se(e, Hy, e);
        } catch (a) {
          tt(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function og(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          og(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function en(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          ih(e, t.alternate, t), t = t.sibling;
    }
    function ch(e) {
      var t = Wt(), a = bn(), i = Ka(), o = En();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          th(
            e,
            e.return,
            iu
          ), uc(e);
          break;
        case 1:
          On(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && ah(
            e,
            e.return,
            f
          ), uc(e);
          break;
        case 27:
          se(
            e,
            Ei,
            e.stateNode
          );
        case 26:
        case 5:
          On(e, e.return), uc(e);
          break;
        case 22:
          e.memoizedState === null && uc(e);
          break;
        case 30:
          uc(e);
          break;
        default:
          uc(e);
      }
      (e.mode & ut) !== Le && 0 <= Ne && 0 <= Ye && (vl || 0.05 < sl) && qn(
        e,
        Ne,
        Ye,
        sl,
        cl
      ), Bl(t), Ja(a), cl = i, vl = o;
    }
    function uc(e) {
      for (e = e.child; e !== null; )
        ch(e), e = e.sibling;
    }
    function qy(e, t, a, i) {
      var o = Wt(), f = bn(), d = Ka(), h = En(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          $n(
            e,
            a,
            i
          ), ag(a, iu);
          break;
        case 1:
          if ($n(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && se(
            a,
            G1,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              se(
                a,
                uy,
                t,
                e
              );
            } catch (p) {
              tt(a, a.return, p);
            }
          }
          i && y & 64 && My(a), lo(a, a.return);
          break;
        case 27:
          Ny(a);
        case 26:
        case 5:
          $n(
            e,
            a,
            i
          ), i && t === null && y & 4 && ac(a), lo(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = Su(), $n(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += ma(y);
            try {
              se(
                a,
                Cy,
                a,
                t,
                Wf,
                i.effectDuration
              );
            } catch (p) {
              tt(a, a.return, p);
            }
          } else
            $n(
              e,
              a,
              i
            );
          break;
        case 31:
          $n(
            e,
            a,
            i
          ), i && y & 4 && jy(e, a);
          break;
        case 13:
          $n(
            e,
            a,
            i
          ), i && y & 4 && wy(e, a);
          break;
        case 22:
          a.memoizedState === null && $n(
            e,
            a,
            i
          ), lo(a, a.return);
          break;
        case 30:
          break;
        default:
          $n(
            e,
            a,
            i
          );
      }
      (a.mode & ut) !== Le && 0 <= Ne && 0 <= Ye && (vl || 0.05 < sl) && qn(
        a,
        Ne,
        Ye,
        sl,
        cl
      ), Bl(o), Ja(f), cl = d, vl = h;
    }
    function $n(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        qy(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function is(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Yc(e), a != null && Hr(a));
    }
    function cs(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Yc(t), e != null && Hr(e));
    }
    function tn(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (t = t.child; t !== null; ) {
          var f = t.sibling;
          Yy(
            e,
            t,
            a,
            i,
            f !== null ? f.actualStartTime : o
          ), t = f;
        }
    }
    function Yy(e, t, a, i, o) {
      var f = Wt(), d = bn(), h = Ka(), y = En(), p = Kf, z = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & ut) !== Le && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Td(
            t,
            t.actualStartTime,
            o,
            Pl,
            a
          ), tn(
            e,
            t,
            a,
            i,
            o
          ), z & 2048 && ls(t, dn | Wu);
          break;
        case 1:
          (t.mode & ut) !== Le && 0 < t.actualStartTime && ((t.flags & 128) !== 0 ? Qm(
            t,
            t.actualStartTime,
            o,
            []
          ) : (t.flags & 1) !== 0 && Td(
            t,
            t.actualStartTime,
            o,
            Pl,
            a
          )), tn(
            e,
            t,
            a,
            i,
            o
          );
          break;
        case 3:
          var U = Su(), T = Pl;
          Pl = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, tn(
            e,
            t,
            a,
            i,
            o
          ), Pl = T, z & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== a && (Yc(i), a != null && Hr(a))), e.passiveEffectDuration += Wo(
            U
          );
          break;
        case 12:
          if (z & 2048) {
            z = Su(), tn(
              e,
              t,
              a,
              i,
              o
            ), e = t.stateNode, e.passiveEffectDuration += ma(z);
            try {
              se(
                t,
                ig,
                t,
                t.alternate,
                Wf,
                e.passiveEffectDuration
              );
            } catch (G) {
              tt(t, t.return, G);
            }
          } else
            tn(
              e,
              t,
              a,
              i,
              o
            );
          break;
        case 31:
          z = Pl, U = t.alternate !== null ? t.alternate.memoizedState : null, T = t.memoizedState, U !== null && T === null ? (T = t.deletions, T !== null && 0 < T.length && T[0].tag === 18 ? (Pl = !1, U = U.hydrationErrors, U !== null && Qm(
            t,
            t.actualStartTime,
            o,
            U
          )) : Pl = !0) : Pl = !1, tn(
            e,
            t,
            a,
            i,
            o
          ), Pl = z;
          break;
        case 13:
          z = Pl, U = t.alternate !== null ? t.alternate.memoizedState : null, T = t.memoizedState, U === null || U.dehydrated === null || T !== null && T.dehydrated !== null ? Pl = !1 : (T = t.deletions, T !== null && 0 < T.length && T[0].tag === 18 ? (Pl = !1, U = U.hydrationErrors, U !== null && Qm(
            t,
            t.actualStartTime,
            o,
            U
          )) : Pl = !0), tn(
            e,
            t,
            a,
            i,
            o
          ), Pl = z;
          break;
        case 23:
          break;
        case 22:
          T = t.stateNode, U = t.alternate, t.memoizedState !== null ? T._visibility & So ? tn(
            e,
            t,
            a,
            i,
            o
          ) : ao(
            e,
            t,
            a,
            i,
            o
          ) : T._visibility & So ? tn(
            e,
            t,
            a,
            i,
            o
          ) : (T._visibility |= So, ic(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & ut) === Le || Pl || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && Ed(t, e, o), 0 <= Ne && 0 <= Ye && 0.05 < Ye - Ne && Ed(
            t,
            Ne,
            Ye
          ))), z & 2048 && is(
            U,
            t
          );
          break;
        case 24:
          tn(
            e,
            t,
            a,
            i,
            o
          ), z & 2048 && cs(t.alternate, t);
          break;
        default:
          tn(
            e,
            t,
            a,
            i,
            o
          );
      }
      (t.mode & ut) !== Le && ((e = !Pl && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && gn(
        t,
        a,
        o,
        "Mount"
      )), 0 <= Ne && 0 <= Ye && ((vl || 0.05 < sl) && qn(
        t,
        Ne,
        Ye,
        sl,
        cl
      ), e && 0.05 < Ye - Ne && gn(
        t,
        Ne,
        Ye,
        "Mount"
      ))), Bl(f), Ja(d), cl = h, vl = y, Kf = p;
    }
    function ic(e, t, a, i, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        os(
          e,
          t,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function os(e, t, a, i, o, f) {
      var d = Wt(), h = bn(), y = Ka(), p = En(), z = Kf;
      o && (t.mode & ut) !== Le && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Td(
        t,
        t.actualStartTime,
        f,
        Pl,
        a
      );
      var U = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ic(
            e,
            t,
            a,
            i,
            o,
            f
          ), ls(t, dn);
          break;
        case 23:
          break;
        case 22:
          var T = t.stateNode;
          t.memoizedState !== null ? T._visibility & So ? ic(
            e,
            t,
            a,
            i,
            o,
            f
          ) : ao(
            e,
            t,
            a,
            i,
            f
          ) : (T._visibility |= So, ic(
            e,
            t,
            a,
            i,
            o,
            f
          )), o && U & 2048 && is(
            t.alternate,
            t
          );
          break;
        case 24:
          ic(
            e,
            t,
            a,
            i,
            o,
            f
          ), o && U & 2048 && cs(t.alternate, t);
          break;
        default:
          ic(
            e,
            t,
            a,
            i,
            o,
            f
          );
      }
      (t.mode & ut) !== Le && 0 <= Ne && 0 <= Ye && (vl || 0.05 < sl) && qn(
        t,
        Ne,
        Ye,
        sl,
        cl
      ), Bl(d), Ja(h), cl = y, vl = p, Kf = z;
    }
    function ao(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = a, y = i, p = t !== null ? t.actualStartTime : o, z = Kf;
          (f.mode & ut) !== Le && 0 < f.actualStartTime && (f.flags & 1) !== 0 && Td(
            f,
            f.actualStartTime,
            p,
            Pl,
            h
          );
          var U = f.flags;
          switch (f.tag) {
            case 22:
              ao(
                d,
                f,
                h,
                y,
                p
              ), U & 2048 && is(f.alternate, f);
              break;
            case 24:
              ao(
                d,
                f,
                h,
                y,
                p
              ), U & 2048 && cs(f.alternate, f);
              break;
            default:
              ao(
                d,
                f,
                h,
                y,
                p
              );
          }
          Kf = z, f = t;
        }
    }
    function no(e, t, a) {
      if (e.subtreeFlags & u0)
        for (e = e.child; e !== null; )
          oh(
            e,
            t,
            a
          ), e = e.sibling;
    }
    function oh(e, t, a) {
      switch (e.tag) {
        case 26:
          no(
            e,
            t,
            a
          ), e.flags & u0 && e.memoizedState !== null && fp(
            a,
            _i,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          no(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          var i = _i;
          _i = _h(
            e.stateNode.containerInfo
          ), no(
            e,
            t,
            a
          ), _i = i;
          break;
        case 22:
          e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = u0, u0 = 16777216, no(
            e,
            t,
            a
          ), u0 = i) : no(
            e,
            t,
            a
          ));
          break;
        default:
          no(
            e,
            t,
            a
          );
      }
    }
    function Gy(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function ln(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Wt();
            ra = i, Uu(
              i,
              e
            ), (i.mode & ut) !== Le && 0 <= Ne && 0 <= Ye && 0.05 < Ye - Ne && gn(
              i,
              Ne,
              Ye,
              "Unmount"
            ), Bl(o);
          }
        Gy(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          fh(e), e = e.sibling;
    }
    function fh(e) {
      var t = Wt(), a = bn(), i = Ka(), o = En();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ln(e), e.flags & 2048 && lh(
            e,
            e.return,
            dn | Wu
          );
          break;
        case 3:
          var f = Su();
          ln(e), e.stateNode.passiveEffectDuration += Wo(f);
          break;
        case 12:
          f = Su(), ln(e), e.stateNode.passiveEffectDuration += ma(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & So && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~So, rh(e), (e.mode & ut) !== Le && 0 <= Ne && 0 <= Ye && 0.05 < Ye - Ne && gn(
            e,
            Ne,
            Ye,
            "Disconnect"
          )) : ln(e);
          break;
        default:
          ln(e);
      }
      (e.mode & ut) !== Le && 0 <= Ne && 0 <= Ye && (vl || 0.05 < sl) && qn(
        e,
        Ne,
        Ye,
        sl,
        cl
      ), Bl(t), Ja(a), vl = o, cl = i;
    }
    function rh(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Wt();
            ra = i, Uu(
              i,
              e
            ), (i.mode & ut) !== Le && 0 <= Ne && 0 <= Ye && 0.05 < Ye - Ne && gn(
              i,
              Ne,
              Ye,
              "Unmount"
            ), Bl(o);
          }
        Gy(e);
      }
      for (e = e.child; e !== null; )
        Ly(e), e = e.sibling;
    }
    function Ly(e) {
      var t = Wt(), a = bn(), i = Ka(), o = En();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          lh(
            e,
            e.return,
            dn
          ), rh(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & So && (f._visibility &= ~So, rh(e));
          break;
        default:
          rh(e);
      }
      (e.mode & ut) !== Le && 0 <= Ne && 0 <= Ye && (vl || 0.05 < sl) && qn(
        e,
        Ne,
        Ye,
        sl,
        cl
      ), Bl(t), Ja(a), vl = o, cl = i;
    }
    function Uu(e, t) {
      for (; ra !== null; ) {
        var a = ra, i = a, o = t, f = Wt(), d = bn(), h = Ka(), y = En();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            lh(
              i,
              o,
              dn
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && Yc(o));
            break;
          case 24:
            Hr(i.memoizedState.cache);
        }
        if ((i.mode & ut) !== Le && 0 <= Ne && 0 <= Ye && (vl || 0.05 < sl) && qn(
          i,
          Ne,
          Ye,
          sl,
          cl
        ), Bl(f), Ja(d), vl = y, cl = h, i = a.child, i !== null) i.return = a, ra = i;
        else
          e: for (a = e; ra !== null; ) {
            if (i = ra, f = i.sibling, d = i.return, pl(i), i === a) {
              ra = null;
              break e;
            }
            if (f !== null) {
              f.return = d, ra = f;
              break e;
            }
            ra = d;
          }
      }
    }
    function Xy() {
      bT.forEach(function(e) {
        return e();
      });
    }
    function Qy() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || Q.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function ia(e) {
      if ((bt & ea) !== sa && ct !== 0)
        return ct & -ct;
      var t = Q.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), Py()) : Ni();
    }
    function pf() {
      if (Un === 0)
        if ((ct & 536870912) === 0 || yt) {
          var e = Us;
          Us <<= 1, (Us & 3932160) === 0 && (Us = 262144), Un = e;
        } else Un = 536870912;
      return e = uu.current, e !== null && (e.flags |= 32), Un;
    }
    function Xe(e, t, a) {
      if (bm && console.error("useInsertionEffect must not schedule updates."), rS && (Hv = !0), (e === Jt && (Yt === Ks || Yt === $s) || e.cancelPendingCommit !== null) && (Hu(e, 0), Rn(
        e,
        ct,
        Un,
        !1
      )), Nn(e, a), (bt & ea) !== sa && e === Jt) {
        if (Yu)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = rt && me(rt) || "Unknown", mE.has(e) || (mE.add(e), t = me(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              hE || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), hE = !0);
          }
      } else
        Lu && Rl(e, t, a), ds(t), e === Jt && ((bt & ea) === sa && (ur |= a), dl === lr && Rn(
          e,
          ct,
          Un,
          !1
        )), Ha(e);
    }
    function fg(e, t, a) {
      if ((bt & (ea | cu)) !== sa)
        throw Error("Should not already be working.");
      if (ct !== 0 && rt !== null) {
        var i = rt, o = Ll();
        switch (ib) {
          case o0:
          case Ks:
            var f = Zp;
            tl && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                Qu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              Qu,
              void 0,
              "primary-light"
            ));
            break;
          case $s:
            f = Zp, tl && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                Qu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              Qu,
              void 0,
              "primary-light"
            ));
            break;
          default:
            tl && (i = o - Zp, 3 > i || console.timeStamp(
              "Blocked",
              Zp,
              o,
              Qu,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Sl(e, t)) ? pi(e, t) : Sf(e, t, !0);
      var d = a;
      do {
        if (f === Co) {
          vm && !a && Rn(e, t, 0, !1), t = Yt, Zp = Ql(), ib = t;
          break;
        } else {
          if (i = Ll(), o = e.current.alternate, d && !sg(o)) {
            wn(t), o = fa, f = i, !tl || f <= o || (Al ? Al.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                vt,
                pt,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              vt,
              pt,
              "error"
            )), cc(t, i), f = Sf(e, t, !1), d = !1;
            continue;
          }
          if (f === Js) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              wn(t), Vm(
                fa,
                i,
                t,
                Al
              ), cc(t, i), t = h;
              e: {
                i = e, f = d, d = r0;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (Hu(i, h).flags |= 256), h = Sf(
                  i,
                  h,
                  !1
                ), h !== Js) {
                  if (lS && !y) {
                    i.errorRecoveryDisabledLanes |= f, ur |= f, f = lr;
                    break e;
                  }
                  i = hn, hn = d, i !== null && (hn === null ? hn = i : hn.push.apply(
                    hn,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Js) continue;
              i = Ll();
            }
          }
          if (f === c0) {
            wn(t), Vm(
              fa,
              i,
              t,
              Al
            ), cc(t, i), Hu(e, 0), Rn(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case Co:
              case c0:
                throw Error("Root did not complete. This is a bug in React.");
              case lr:
                if ((t & 4194048) !== t) break;
              case Ov:
                wn(t), Y0(
                  fa,
                  i,
                  t,
                  Al
                ), cc(t, i), o = t, (o & 127) !== 0 ? fv = i : (o & 4194048) !== 0 && (rv = i), Rn(
                  a,
                  t,
                  Un,
                  !ar
                );
                break e;
              case Js:
                hn = null;
                break;
              case Av:
              case eE:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (Q.actQueue !== null)
              Qt(
                a,
                o,
                t,
                hn,
                s0,
                _v,
                Un,
                ur,
                ks,
                f,
                null,
                null,
                fa,
                i
              );
            else {
              if ((t & 62914560) === t && (d = zv + aE - Ll(), 10 < d)) {
                if (Rn(
                  a,
                  t,
                  Un,
                  !ar
                ), Ac(a, 0, !0) !== 0) break e;
                zi = t, a.timeoutHandle = TE(
                  rg.bind(
                    null,
                    a,
                    o,
                    hn,
                    s0,
                    _v,
                    t,
                    Un,
                    ur,
                    ks,
                    ar,
                    f,
                    "Throttled",
                    fa,
                    i
                  ),
                  d
                );
                break e;
              }
              rg(
                a,
                o,
                hn,
                s0,
                _v,
                t,
                Un,
                ur,
                ks,
                ar,
                f,
                null,
                fa,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      Ha(e);
    }
    function rg(e, t, a, i, o, f, d, h, y, p, z, U, T, G) {
      e.timeoutHandle = ed;
      var oe = t.subtreeFlags, de = null;
      if ((oe & 8192 || (oe & 16785408) === 16785408) && (de = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: pn
      }, oh(t, f, de), oe = (f & 62914560) === f ? zv - Ll() : (f & 4194048) === f ? lE - Ll() : 0, oe = Ch(de, oe), oe !== null)) {
        zi = f, e.cancelPendingCommit = oe(
          Qt.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            y,
            z,
            de,
            de.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < de.count ? 0 < de.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : de.imgCount === 1 ? "Suspended on an Image" : 0 < de.imgCount ? "Suspended on Images" : null,
            T,
            G
          )
        ), Rn(
          e,
          f,
          d,
          !p
        );
        return;
      }
      Qt(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        y,
        z,
        de,
        U,
        T,
        G
      );
    }
    function sg(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!fn(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function Rn(e, t, a, i) {
      t &= ~aS, t &= ~ur, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Wl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && jo(e, a, t);
    }
    function an() {
      return (bt & (ea | cu)) === sa ? (xu(0), !1) : !0;
    }
    function sh() {
      if (rt !== null) {
        if (Yt === Cn)
          var e = rt.return;
        else
          e = rt, ko(), Ji(e), fm = null, e0 = 0, e = rt;
        for (; e !== null; )
          zy(e.alternate, e), e = e.return;
        rt = null;
      }
    }
    function cc(e, t) {
      (e & 127) !== 0 && (ws = t), (e & 4194048) !== 0 && (Oo = t), (e & 62914560) !== 0 && (nb = t), (e & 2080374784) !== 0 && (ub = t);
    }
    function Hu(e, t) {
      tl && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        pt,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        pt,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        pt,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        pt,
        "primary-light"
      ));
      var a = fa;
      if (fa = Ql(), ct !== 0 && 0 < a) {
        if (wn(ct), dl === Av || dl === lr)
          Y0(
            a,
            fa,
            t,
            Al
          );
        else {
          var i = fa, o = Al;
          if (tl && !(i <= a)) {
            var f = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", d = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                i,
                vt,
                pt,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              vt,
              pt,
              f
            );
          }
        }
        cc(ct, fa);
      }
      if (a = Al, Al = null, (t & 127) !== 0) {
        Al = Xp, o = 0 <= vc && vc < ws ? ws : vc, i = 0 <= qs && qs < ws ? ws : qs, f = 0 <= i ? i : 0 <= o ? o : fa, 0 <= fv ? (wn(2), G0(
          fv,
          f,
          t,
          a
        )) : sv & 127, a = o;
        var h = i, y = Qp, p = 0 < im, z = If === Lp, U = If === ov;
        if (o = fa, i = Xp, f = B1, d = j1, tl) {
          if (vt = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var T = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                vt,
                pt,
                T
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              vt,
              pt,
              T
            );
          }
          o > a && (h = z ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", z = U ? "Promise Resolved" : z ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", U = [], d != null && U.push(["Component name", d]), f != null && U.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: U,
                track: vt,
                trackGroup: pt,
                color: h
              }
            }
          }, i ? i.run(
            performance.measure.bind(
              performance,
              z,
              a
            )
          ) : performance.measure(z, a));
        }
        vc = -1.1, If = 0, j1 = B1 = null, fv = -1.1, im = qs, qs = -1.1, ws = Ql();
      }
      if ((t & 4194048) !== 0 && (Al = Vp, o = 0 <= Ro && Ro < Oo ? Oo : Ro, a = 0 <= ku && ku < Oo ? Oo : ku, i = 0 <= Pf && Pf < Oo ? Oo : Pf, f = 0 <= i ? i : 0 <= a ? a : fa, 0 <= rv ? (wn(256), G0(
        rv,
        f,
        t,
        Al
      )) : sv & 4194048, U = i, h = Ys, y = 0 < er, p = w1 === ov, f = fa, i = Vp, d = lb, z = ab, tl && (vt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < U ? U > o && (U = o) : U = o, o > U && h !== null && (T = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          U,
          o,
          vt,
          pt,
          T
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        U,
        o,
        vt,
        pt,
        T
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          vt,
          pt,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        vt,
        pt,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", U = [], z != null && U.push(["Component name", z]), d != null && U.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: U,
            track: vt,
            trackGroup: pt,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), ku = Ro = -1.1, w1 = 0, rv = -1.1, er = Pf, Pf = -1.1, Oo = Ql()), (t & 62914560) !== 0 && (sv & 62914560) !== 0 && (wn(4194304), Zm(nb, fa)), (t & 2080374784) !== 0 && (sv & 2080374784) !== 0 && (wn(268435456), Zm(ub, fa)), a = e.timeoutHandle, a !== ed && (e.timeoutHandle = ed, NT(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), zi = 0, sh(), Jt = e, rt = a = gu(
        e.current,
        null
      ), ct = t, Yt = Cn, ou = null, ar = !1, vm = Sl(e, t), lS = !1, dl = Co, ks = Un = aS = ur = nr = 0, hn = r0 = null, _v = !1, (t & 8) !== 0 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - Wl(i), f = 1 << o, t |= e[o], i &= ~f;
      return bc = t, Ad(), e = FS(), 1e3 < e - kS && (Q.recentlyCreatedOwnerStacks = 0, kS = e), Ri.discardPendingWarnings(), a;
    }
    function kn(e, t) {
      Ve = null, Q.H = n0, Q.getCurrentStack = null, Yu = !1, ja = null, t === om || t === yv ? (t = Xc(), Yt = o0) : t === L1 ? (t = Xc(), Yt = tE) : Yt = t === W1 ? tS : t !== null && typeof t == "object" && typeof t.then == "function" ? f0 : Rv, ou = t;
      var a = rt;
      a === null ? (dl = c0, Wr(
        e,
        ha(t, e.current)
      )) : a.mode & ut && Cd(a);
    }
    function Vy() {
      var e = uu.current;
      return e === null ? !0 : (ct & 4194048) === ct ? Fu === null : (ct & 62914560) === ct || (ct & 536870912) !== 0 ? e === Fu : !1;
    }
    function dh() {
      var e = Q.H;
      return Q.H = n0, e === null ? n0 : e;
    }
    function Zy() {
      var e = Q.A;
      return Q.A = ST, e;
    }
    function gf(e) {
      Al === null && (Al = e._debugTask == null ? null : e._debugTask);
    }
    function vf() {
      dl = lr, ar || (ct & 4194048) !== ct && uu.current !== null || (vm = !0), (nr & 134217727) === 0 && (ur & 134217727) === 0 || Jt === null || Rn(
        Jt,
        ct,
        Un,
        !1
      );
    }
    function Sf(e, t, a) {
      var i = bt;
      bt |= ea;
      var o = dh(), f = Zy();
      if (Jt !== e || ct !== t) {
        if (Lu) {
          var d = e.memoizedUpdaters;
          0 < d.size && (Ef(e, ct), d.clear()), Xa(e, t);
        }
        s0 = null, Hu(e, t);
      }
      t = !1, d = dl;
      e: do
        try {
          if (Yt !== Cn && rt !== null) {
            var h = rt, y = ou;
            switch (Yt) {
              case tS:
                sh(), d = Ov;
                break e;
              case o0:
              case Ks:
              case $s:
              case f0:
                uu.current === null && (t = !0);
                var p = Yt;
                if (Yt = Cn, ou = null, bf(e, h, y, p), a && vm) {
                  d = Co;
                  break e;
                }
                break;
              default:
                p = Yt, Yt = Cn, ou = null, bf(e, h, y, p);
            }
          }
          Jy(), d = dl;
          break;
        } catch (z) {
          kn(e, z);
        }
      while (!0);
      return t && e.shellSuspendCounter++, ko(), bt = i, Q.H = o, Q.A = f, rt === null && (Jt = null, ct = 0, Ad()), d;
    }
    function Jy() {
      for (; rt !== null; ) hh(rt);
    }
    function pi(e, t) {
      var a = bt;
      bt |= ea;
      var i = dh(), o = Zy();
      if (Jt !== e || ct !== t) {
        if (Lu) {
          var f = e.memoizedUpdaters;
          0 < f.size && (Ef(e, ct), f.clear()), Xa(e, t);
        }
        s0 = null, Mv = Ll() + nE, Hu(e, t);
      } else
        vm = Sl(
          e,
          t
        );
      e: do
        try {
          if (Yt !== Cn && rt !== null)
            t: switch (t = rt, f = ou, Yt) {
              case Rv:
                Yt = Cn, ou = null, bf(
                  e,
                  t,
                  f,
                  Rv
                );
                break;
              case Ks:
              case $s:
                if (ay(f)) {
                  Yt = Cn, ou = null, Ky(t);
                  break;
                }
                t = function() {
                  Yt !== Ks && Yt !== $s || Jt !== e || (Yt = Dv), Ha(e);
                }, f.then(t, t);
                break e;
              case o0:
                Yt = Dv;
                break e;
              case tE:
                Yt = eS;
                break e;
              case Dv:
                ay(f) ? (Yt = Cn, ou = null, Ky(t)) : (Yt = Cn, ou = null, bf(
                  e,
                  t,
                  f,
                  Dv
                ));
                break;
              case eS:
                var d = null;
                switch (rt.tag) {
                  case 26:
                    d = rt.memoizedState;
                  case 5:
                  case 27:
                    var h = rt;
                    if (d ? st(d) : h.stateNode.complete) {
                      Yt = Cn, ou = null;
                      var y = h.sibling;
                      if (y !== null) rt = y;
                      else {
                        var p = h.return;
                        p !== null ? (rt = p, fs(p)) : rt = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Yt = Cn, ou = null, bf(
                  e,
                  t,
                  f,
                  eS
                );
                break;
              case f0:
                Yt = Cn, ou = null, bf(
                  e,
                  t,
                  f,
                  f0
                );
                break;
              case tS:
                sh(), dl = Ov;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          Q.actQueue !== null ? Jy() : El();
          break;
        } catch (z) {
          kn(e, z);
        }
      while (!0);
      return ko(), Q.H = i, Q.A = o, bt = a, rt !== null ? Co : (Jt = null, ct = 0, Ad(), dl);
    }
    function El() {
      for (; rt !== null && !Lh(); )
        hh(rt);
    }
    function hh(e) {
      var t = e.alternate;
      (e.mode & ut) !== Le ? (ui(e), t = se(
        e,
        ts,
        t,
        e,
        bc
      ), Cd(e)) : t = se(
        e,
        ts,
        t,
        e,
        bc
      ), e.memoizedProps = e.pendingProps, t === null ? fs(e) : rt = t;
    }
    function Ky(e) {
      var t = se(e, Gl, e);
      e.memoizedProps = e.pendingProps, t === null ? fs(e) : rt = t;
    }
    function Gl(e) {
      var t = e.alternate, a = (e.mode & ut) !== Le;
      switch (a && ui(e), e.tag) {
        case 15:
        case 0:
          t = Ty(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            ct
          );
          break;
        case 11:
          t = Ty(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            ct
          );
          break;
        case 5:
          Ji(e);
        default:
          zy(t, e), e = rt = km(e, bc), t = ts(t, e, bc);
      }
      return a && Cd(e), t;
    }
    function bf(e, t, a, i) {
      ko(), Ji(t), fm = null, e0 = 0;
      var o = t.return;
      try {
        if (yy(
          e,
          o,
          t,
          a,
          ct
        )) {
          dl = c0, Wr(
            e,
            ha(a, e.current)
          ), rt = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw rt = o, f;
        dl = c0, Wr(
          e,
          ha(a, e.current)
        ), rt = null;
        return;
      }
      t.flags & 32768 ? (yt || i === Rv ? e = !0 : vm || (ct & 536870912) !== 0 ? e = !1 : (ar = e = !0, (i === Ks || i === $s || i === o0 || i === f0) && (i = uu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), $y(t, e)) : fs(t);
    }
    function fs(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          $y(
            t,
            ar
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, ui(t), a = se(
          t,
          _y,
          a,
          t,
          bc
        ), (t.mode & ut) !== Le && Nr(t), a !== null) {
          rt = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          rt = t;
          return;
        }
        rt = t = e;
      } while (t !== null);
      dl === Co && (dl = eE);
    }
    function $y(e, t) {
      do {
        var a = lg(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, rt = a;
          return;
        }
        if ((e.mode & ut) !== Le) {
          Nr(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          rt = e;
          return;
        }
        rt = e = a;
      } while (e !== null);
      dl = Ov, rt = null;
    }
    function Qt(e, t, a, i, o, f, d, h, y, p, z, U, T, G) {
      e.cancelPendingCommit = null;
      do
        rs();
      while ($l !== cr);
      if (Ri.flushLegacyContextWarning(), Ri.flushPendingUnsafeLifecycleWarnings(), (bt & (ea | cu)) !== sa)
        throw Error("Should not already be working.");
      if (wn(a), p === Js ? Vm(
        T,
        G,
        a,
        Al
      ) : i !== null ? n1(
        T,
        G,
        a,
        i,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        Al
      ) : a1(
        T,
        G,
        a,
        Al
      ), t !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= C1, ud(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === Jt && (rt = Jt = null, ct = 0), Sm = t, or = e, zi = a, iS = f, oS = o, rE = i, cS = G, sE = U, Mi = Cv, dE = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Tf(yo, function() {
          return g0 = window.event, Mi === Cv && (Mi = uS), ss(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), Ao = null, Wf = Ql(), U !== null && u1(
          G,
          Wf,
          U,
          Al
        ), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = Q.T, Q.T = null, o = zt.p, zt.p = Cl, d = bt, bt |= cu;
          try {
            o1(e, t, a);
          } finally {
            bt = d, zt.p = o, Q.T = i;
          }
        }
        $l = iE, Ta(), Nu(), ky();
      }
    }
    function Ta() {
      if ($l === iE) {
        $l = cr;
        var e = or, t = Sm, a = zi, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = Q.T, Q.T = null;
          var o = zt.p;
          zt.p = Cl;
          var f = bt;
          bt |= cu;
          try {
            pm = a, gm = e, Gc(), us(t, e), gm = pm = null, a = SS;
            var d = bd(e.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && B0(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Lm(h)) {
                var p = y.start, z = y.end;
                if (z === void 0 && (z = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    z,
                    h.value.length
                  );
                else {
                  var U = h.ownerDocument || document, T = U && U.defaultView || window;
                  if (T.getSelection) {
                    var G = T.getSelection(), oe = h.textContent.length, de = Math.min(
                      y.start,
                      oe
                    ), Ft = y.end === void 0 ? de : Math.min(y.end, oe);
                    !G.extend && de > Ft && (d = Ft, Ft = de, de = d);
                    var gt = x0(
                      h,
                      de
                    ), E = x0(
                      h,
                      Ft
                    );
                    if (gt && E && (G.rangeCount !== 1 || G.anchorNode !== gt.node || G.anchorOffset !== gt.offset || G.focusNode !== E.node || G.focusOffset !== E.offset)) {
                      var A = U.createRange();
                      A.setStart(gt.node, gt.offset), G.removeAllRanges(), de > Ft ? (G.addRange(A), G.extend(E.node, E.offset)) : (A.setEnd(E.node, E.offset), G.addRange(A));
                    }
                  }
                }
              }
              for (U = [], G = h; G = G.parentNode; )
                G.nodeType === 1 && U.push({
                  element: G,
                  left: G.scrollLeft,
                  top: G.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < U.length; h++) {
                var _ = U[h];
                _.element.scrollLeft = _.left, _.element.scrollTop = _.top;
              }
            }
            Jv = !!vS, SS = vS = null;
          } finally {
            bt = f, zt.p = o, Q.T = i;
          }
        }
        e.current = t, $l = cE;
      }
    }
    function Nu() {
      if ($l === cE) {
        $l = cr;
        var e = dE;
        if (e !== null) {
          Wf = Ql();
          var t = To, a = Wf;
          !tl || a <= t || console.timeStamp(
            e,
            t,
            a,
            vt,
            pt,
            "secondary-light"
          );
        }
        e = or, t = Sm, a = zi;
        var i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = Q.T, Q.T = null;
          var o = zt.p;
          zt.p = Cl;
          var f = bt;
          bt |= cu;
          try {
            pm = a, gm = e, Gc(), ih(
              e,
              t.alternate,
              t
            ), gm = pm = null;
          } finally {
            bt = f, zt.p = o, Q.T = i;
          }
        }
        e = cS, t = sE, To = Ql(), e = t === null ? e : Wf, t = To, a = Mi === nS, i = Al, Ao !== null ? L0(
          e,
          t,
          Ao,
          !1,
          i
        ) : !tl || t <= e || (i ? i.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            e,
            t,
            vt,
            pt,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          e,
          t,
          vt,
          pt,
          a ? "error" : "secondary-dark"
        )), $l = oE;
      }
    }
    function ky() {
      if ($l === fE || $l === oE) {
        if ($l === fE) {
          var e = To;
          To = Ql();
          var t = To, a = Mi === nS;
          !tl || t <= e || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            vt,
            pt,
            a ? " error" : "secondary-light"
          ), Mi !== nS && (Mi = uE);
        }
        $l = cr, Xh(), e = or;
        var i = Sm;
        t = zi, a = rE;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? $l = Uv : ($l = cr, Sm = or = null, Fy(
          e,
          e.pendingLanes
        ), Fs = 0, h0 = null);
        var f = e.pendingLanes;
        if (f === 0 && (ir = null), o || ph(e), f = Nl(t), i = i.stateNode, Ml && typeof Ml.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case Cl:
                var h = Dp;
                break;
              case Il:
                h = Qh;
                break;
              case oa:
                h = yo;
                break;
              case yc:
                h = Vh;
                break;
              default:
                h = yo;
            }
            Ml.onCommitFiberRoot(
              po,
              i,
              h,
              d
            );
          } catch (U) {
            Gu || (Gu = !0, console.error(
              "React instrumentation encountered an error: %o",
              U
            ));
          }
        if (Lu && e.memoizedUpdaters.clear(), Xy(), a !== null) {
          d = Q.T, h = zt.p, zt.p = Cl, Q.T = null;
          try {
            var y = e.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], z = dg(p.stack);
              se(
                p.source,
                y,
                p.value,
                z
              );
            }
          } finally {
            Q.T = d, zt.p = h;
          }
        }
        (zi & 3) !== 0 && rs(), Ha(e), f = e.pendingLanes, (t & 261930) !== 0 && (f & 42) !== 0 ? (hv = !0, e === fS ? d0++ : (d0 = 0, fS = e)) : d0 = 0, o || cc(t, To), xu(0);
      }
    }
    function dg(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Fy(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Hr(t)));
    }
    function rs() {
      return Ta(), Nu(), ky(), ss();
    }
    function ss() {
      if ($l !== Uv) return !1;
      var e = or, t = iS;
      iS = 0;
      var a = Nl(zi), i = oa > a ? oa : a;
      a = Q.T;
      var o = zt.p;
      try {
        zt.p = i, Q.T = null;
        var f = oS;
        oS = null, i = or;
        var d = zi;
        if ($l = cr, Sm = or = null, zi = 0, (bt & (ea | cu)) !== sa)
          throw Error("Cannot flush passive effects while already rendering.");
        wn(d), rS = !0, Hv = !1;
        var h = 0;
        if (Ao = null, h = Ll(), Mi === uE)
          Zm(
            To,
            h,
            dT
          );
        else {
          var y = To, p = h, z = Mi === uS;
          !tl || p <= y || (Al ? Al.run(
            console.timeStamp.bind(
              console,
              z ? "Waiting for Paint" : "Waiting",
              y,
              p,
              vt,
              pt,
              "secondary-light"
            )
          ) : console.timeStamp(
            z ? "Waiting for Paint" : "Waiting",
            y,
            p,
            vt,
            pt,
            "secondary-light"
          ));
        }
        y = bt, bt |= cu;
        var U = i.current;
        Gc(), fh(U);
        var T = i.current;
        U = cS, Gc(), Yy(
          i,
          T,
          d,
          f,
          U
        ), ph(i), bt = y;
        var G = Ll();
        if (T = h, U = Al, Ao !== null ? L0(
          T,
          G,
          Ao,
          !0,
          U
        ) : !tl || G <= T || (U ? U.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            T,
            G,
            vt,
            pt,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          T,
          G,
          vt,
          pt,
          "secondary-dark"
        )), cc(d, G), xu(0, !1), Hv ? i === h0 ? Fs++ : (Fs = 0, h0 = i) : Fs = 0, Hv = rS = !1, Ml && typeof Ml.onPostCommitFiberRoot == "function")
          try {
            Ml.onPostCommitFiberRoot(po, i);
          } catch (de) {
            Gu || (Gu = !0, console.error(
              "React instrumentation encountered an error: %o",
              de
            ));
          }
        var oe = i.current.stateNode;
        return oe.effectDuration = 0, oe.passiveEffectDuration = 0, !0;
      } finally {
        zt.p = o, Q.T = a, Fy(e, t);
      }
    }
    function Aa(e, t, a) {
      t = ha(a, t), K0(t), t = Jd(e.stateNode, t, 2), e = Eu(e, t, 2), e !== null && (Nn(e, 2), Ha(e));
    }
    function tt(e, t, a) {
      if (bm = !1, e.tag === 3)
        Aa(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Aa(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ir === null || !ir.has(i))) {
              e = ha(a, e), K0(e), a = Kd(2), i = Eu(t, a, 2), i !== null && ($d(
                a,
                i,
                t,
                e
              ), Nn(i, 2), Ha(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function mh(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new ET();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (lS = !0, o.add(a), i = Ua.bind(null, e, t, a), Lu && Ef(e, a), t.then(i, i));
    }
    function Ua(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, (a & 127) !== 0 ? 0 > vc && (ws = vc = Ql(), Xp = cv("Promise Resolved"), If = ov) : (a & 4194048) !== 0 && 0 > ku && (Oo = ku = Ql(), Vp = cv("Promise Resolved"), w1 = ov), Qy() && Q.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Jt === e && (ct & a) === a && (dl === lr || dl === Av && (ct & 62914560) === ct && Ll() - zv < aE ? (bt & ea) === sa && Hu(e, 0) : aS |= a, ks === ct && (ks = 0)), Ha(e);
    }
    function Wy(e, t) {
      t === 0 && (t = xo()), e = na(e, t), e !== null && (Nn(e, t), Ha(e));
    }
    function gi(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), Wy(e, a);
    }
    function uo(e, t) {
      var a = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), Wy(e, a);
    }
    function Fn(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Da;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && se(
            o,
            yh,
            i,
            o
          ) : Fn(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? se(
            o,
            yh,
            i,
            o
          ) : o.subtreeFlags & 67108864 && se(
            o,
            Fn,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function yh(e, t) {
      ve(!0);
      try {
        ch(t), Ly(t), qy(e, t.alternate, t, !1), os(e, t, 0, null, !1, 0);
      } finally {
        ve(!1);
      }
    }
    function ph(e) {
      var t = !0;
      e.current.mode & (wa | Oi) || (t = !1), Fn(
        e,
        e.current,
        t
      );
    }
    function Dn(e) {
      if ((bt & ea) === sa) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = me(e) || "ReactComponent", Nv !== null) {
            if (Nv.has(t)) return;
            Nv.add(t);
          } else Nv = /* @__PURE__ */ new Set([t]);
          se(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Ef(e, t) {
      Lu && e.memoizedUpdaters.forEach(function(a) {
        Rl(e, a, t);
      });
    }
    function Tf(e, t) {
      var a = Q.actQueue;
      return a !== null ? (a.push(t), OT) : Rp(e, t);
    }
    function ds(e) {
      Qy() && Q.actQueue === null && se(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          me(e)
        );
      });
    }
    function Ha(e) {
      e !== Em && e.next === null && (Em === null ? xv = Em = e : Em = Em.next = e), Bv = !0, Q.actQueue !== null ? dS || (dS = !0, mg()) : sS || (sS = !0, mg());
    }
    function xu(e, t) {
      if (!hS && Bv) {
        hS = !0;
        do
          for (var a = !1, i = xv; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Wl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, hs(i, f));
            } else
              f = ct, f = Ac(
                i,
                i === Jt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== ed
              ), (f & 3) === 0 || Sl(i, f) || (a = !0, hs(i, f));
            i = i.next;
          }
        while (a);
        hS = !1;
      }
    }
    function hg() {
      g0 = window.event, gh();
    }
    function gh() {
      Bv = dS = sS = !1;
      var e = 0;
      fr !== 0 && tp() && (e = fr);
      for (var t = Ll(), a = null, i = xv; i !== null; ) {
        var o = i.next, f = Af(i, t);
        f === 0 ? (i.next = null, a === null ? xv = o : a.next = o, o === null && (Em = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (Bv = !0)), i = o;
      }
      $l !== cr && $l !== Uv || xu(e), fr !== 0 && (fr = 0);
    }
    function Af(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Wl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = nd(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Jt, a = ct, a = Ac(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== ed
      ), i = e.callbackNode, a === 0 || e === t && (Yt === Ks || Yt === $s) || e.cancelPendingCommit !== null)
        return i !== null && vh(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || Sl(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || Q.actQueue !== null && i !== mS)
          vh(i);
        else return t;
        switch (Nl(a)) {
          case Cl:
          case Il:
            a = Qh;
            break;
          case oa:
            a = yo;
            break;
          case yc:
            a = Vh;
            break;
          default:
            a = yo;
        }
        return i = Iy.bind(null, e), Q.actQueue !== null ? (Q.actQueue.push(i), a = mS) : a = Rp(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && vh(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Iy(e, t) {
      if (hv = dv = !1, g0 = window.event, $l !== cr && $l !== Uv)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Mi === Cv && (Mi = uS), rs() && e.callbackNode !== a)
        return null;
      var i = ct;
      return i = Ac(
        e,
        e === Jt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== ed
      ), i === 0 ? null : (fg(
        e,
        i,
        t
      ), Af(e, Ll()), e.callbackNode != null && e.callbackNode === a ? Iy.bind(null, e) : null);
    }
    function hs(e, t) {
      if (rs()) return null;
      dv = hv, hv = !1, fg(e, t, !0);
    }
    function vh(e) {
      e !== mS && e !== null && Gh(e);
    }
    function mg() {
      Q.actQueue !== null && Q.actQueue.push(function() {
        return gh(), null;
      }), xT(function() {
        (bt & (ea | cu)) !== sa ? Rp(
          Dp,
          hg
        ) : gh();
      });
    }
    function Py() {
      if (fr === 0) {
        var e = Gs;
        e === 0 && (e = Lf, Lf <<= 1, (Lf & 261888) === 0 && (Lf = 256)), fr = e;
      }
      return fr;
    }
    function At(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (Tt(e, "action"), Tr("" + e));
    }
    function jt(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function mt(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = At(
          (o[_a] || null).action
        ), d = i.submitter;
        d && (t = (t = d[_a] || null) ? At(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new ev(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (fr !== 0) {
                    var y = d ? jt(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), hi(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? jt(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), hi(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function ft(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        D1(i);
      }
      e.currentTarget = null;
    }
    function Ht(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? se(
                y,
                ft,
                f,
                h,
                p
              ) : ft(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? se(
                y,
                ft,
                f,
                h,
                p
              ) : ft(f, h, p), o = y;
            }
        }
      }
    }
    function Ge(e, t) {
      yS.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[go];
      a === void 0 && (a = t[go] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (Sh(t, e, 2, !1), a.add(i));
    }
    function Bu(e, t, a) {
      yS.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), Sh(
        a,
        e,
        i,
        t
      );
    }
    function oc(e) {
      if (!e[jv]) {
        e[jv] = !0, kg.forEach(function(a) {
          a !== "selectionchange" && (yS.has(a) || Bu(a, !1, e), Bu(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[jv] || (t[jv] = !0, Bu("selectionchange", !1, t));
      }
    }
    function Sh(e, t, a, i) {
      switch (Nh(t)) {
        case Cl:
          var o = mp;
          break;
        case Il:
          o = Fl;
          break;
        default:
          o = yp;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !p1 || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function Wn(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = ae(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      pd(function() {
        var p = f, z = Bn(a), U = [];
        e: {
          var T = $S.get(e);
          if (T !== void 0) {
            var G = ev, oe = e;
            switch (e) {
              case "keypress":
                if (Ar(a) === 0) break e;
              case "keydown":
              case "keyup":
                G = Y2;
                break;
              case "focusin":
                oe = "focus", G = b1;
                break;
              case "focusout":
                oe = "blur", G = b1;
                break;
              case "beforeblur":
              case "afterblur":
                G = b1;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                G = xS;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                G = _2;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                G = X2;
                break;
              case VS:
              case ZS:
              case JS:
                G = C2;
                break;
              case KS:
                G = V2;
                break;
              case "scroll":
              case "scrollend":
                G = R2;
                break;
              case "wheel":
                G = J2;
                break;
              case "copy":
              case "cut":
              case "paste":
                G = H2;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                G = jS;
                break;
              case "toggle":
              case "beforetoggle":
                G = $2;
            }
            var de = (t & 4) !== 0, Ft = !de && (e === "scroll" || e === "scrollend"), gt = de ? T !== null ? T + "Capture" : null : T;
            de = [];
            for (var E = p, A; E !== null; ) {
              var _ = E;
              if (A = _.stateNode, _ = _.tag, _ !== 5 && _ !== 26 && _ !== 27 || A === null || gt === null || (_ = yu(E, gt), _ != null && de.push(
                Vt(
                  E,
                  _,
                  A
                )
              )), Ft) break;
              E = E.return;
            }
            0 < de.length && (T = new G(
              T,
              oe,
              null,
              a,
              z
            ), U.push({
              event: T,
              listeners: de
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (T = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", T && a !== Up && (oe = a.relatedTarget || a.fromElement) && (ae(oe) || oe[Ai]))
              break e;
            if ((G || T) && (T = z.window === z ? z : (T = z.ownerDocument) ? T.defaultView || T.parentWindow : window, G ? (oe = a.relatedTarget || a.toElement, G = p, oe = oe ? ae(oe) : null, oe !== null && (Ft = xe(oe), de = oe.tag, oe !== Ft || de !== 5 && de !== 27 && de !== 6) && (oe = null)) : (G = null, oe = p), G !== oe)) {
              if (de = xS, _ = "onMouseLeave", gt = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (de = jS, _ = "onPointerLeave", gt = "onPointerEnter", E = "pointer"), Ft = G == null ? T : Se(G), A = oe == null ? T : Se(oe), T = new de(
                _,
                E + "leave",
                G,
                a,
                z
              ), T.target = Ft, T.relatedTarget = A, _ = null, ae(z) === p && (de = new de(
                gt,
                E + "enter",
                oe,
                a,
                z
              ), de.target = A, de.relatedTarget = Ft, _ = de), Ft = _, G && oe)
                t: {
                  for (de = io, gt = G, E = oe, A = 0, _ = gt; _; _ = de(_))
                    A++;
                  _ = 0;
                  for (var $ = E; $; $ = de($))
                    _++;
                  for (; 0 < A - _; )
                    gt = de(gt), A--;
                  for (; 0 < _ - A; )
                    E = de(E), _--;
                  for (; A--; ) {
                    if (gt === E || E !== null && gt === E.alternate) {
                      de = gt;
                      break t;
                    }
                    gt = de(gt), E = de(E);
                  }
                  de = null;
                }
              else de = null;
              G !== null && bh(
                U,
                T,
                G,
                de,
                !1
              ), oe !== null && Ft !== null && bh(
                U,
                Ft,
                oe,
                de,
                !0
              );
            }
          }
          e: {
            if (T = p ? Se(p) : window, G = T.nodeName && T.nodeName.toLowerCase(), G === "select" || G === "input" && T.type === "file")
              var fe = qi;
            else if (qm(T))
              if (XS)
                fe = _r;
              else {
                fe = Ym;
                var Ze = l1;
              }
            else
              G = T.nodeName, !G || G.toLowerCase() !== "input" || T.type !== "checkbox" && T.type !== "radio" ? p && mu(p.elementType) && (fe = qi) : fe = Gm;
            if (fe && (fe = fe(e, p))) {
              Rr(
                U,
                fe,
                a,
                z
              );
              break e;
            }
            Ze && Ze(e, T, p), e === "focusout" && p && T.type === "number" && p.memoizedProps.value != null && Mm(T, "number", T.value);
          }
          switch (Ze = p ? Se(p) : window, e) {
            case "focusin":
              (qm(Ze) || Ze.contentEditable === "true") && (Ih = Ze, T1 = p, qp = null);
              break;
            case "focusout":
              qp = T1 = Ih = null;
              break;
            case "mousedown":
              A1 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              A1 = !1, j0(
                U,
                a,
                z
              );
              break;
            case "selectionchange":
              if (I2) break;
            case "keydown":
            case "keyup":
              j0(
                U,
                a,
                z
              );
          }
          var Ce;
          if (E1)
            e: {
              switch (e) {
                case "compositionstart":
                  var Re = "onCompositionStart";
                  break e;
                case "compositionend":
                  Re = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  Re = "onCompositionUpdate";
                  break e;
              }
              Re = void 0;
            }
          else
            Wh ? Vo(e, a) && (Re = "onCompositionEnd") : e === "keydown" && a.keyCode === wS && (Re = "onCompositionStart");
          Re && (qS && a.locale !== "ko" && (Wh || Re !== "onCompositionStart" ? Re === "onCompositionEnd" && Wh && (Ce = Cc()) : (Jf = z, g1 = "value" in Jf ? Jf.value : Jf.textContent, Wh = !0)), Ze = In(
            p,
            Re
          ), 0 < Ze.length && (Re = new BS(
            Re,
            e,
            null,
            a,
            z
          ), U.push({
            event: Re,
            listeners: Ze
          }), Ce ? Re.data = Ce : (Ce = ai(a), Ce !== null && (Re.data = Ce)))), (Ce = F2 ? wm(e, a) : gd(e, a)) && (Re = In(
            p,
            "onBeforeInput"
          ), 0 < Re.length && (Ze = new x2(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            z
          ), U.push({
            event: Ze,
            listeners: Re
          }), Ze.data = Ce)), mt(
            U,
            e,
            p,
            a,
            z
          );
        }
        Ht(U, t);
      });
    }
    function Vt(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function In(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = yu(e, a), o != null && i.unshift(
          Vt(e, o, f)
        ), o = yu(e, t), o != null && i.push(
          Vt(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function io(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function bh(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = yu(a, f), p != null && d.unshift(
          Vt(a, p, y)
        )) : o || (p = yu(a, f), p != null && d.push(
          Vt(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Oa(e, t) {
      U0(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || HS || (HS = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Xu,
        possibleRegistrationNames: Vf
      };
      mu(e) || typeof t.is == "string" || t1(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function ul(e, t, a, i) {
      t !== a && (a = Pn(a), Pn(t) !== a && (i[e] = t));
    }
    function ms(e, t, a) {
      t.forEach(function(i) {
        a[vi(i)] = i === "style" ? fc(e) : e.getAttribute(i);
      });
    }
    function il(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function Eh(e, t) {
      return e = e.namespaceURI === ke || e.namespaceURI === lt ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Pn(e) {
      return La(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Ui(e)
      ), fu(e)), (typeof e == "string" ? e : "" + e).replace(RT, `
`).replace(DT, "");
    }
    function ep(e, t) {
      return t = Pn(t), Pn(e) === t;
    }
    function _t(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Er(i, t, !1), t === "body" || t === "textarea" && i === "" || Mc(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Er("" + i, t, !1), t !== "body" && Mc(e, "" + i));
          break;
        case "className":
          vr(e, "class", i);
          break;
        case "tabIndex":
          vr(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          vr(e, a, i);
          break;
        case "style":
          xm(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            vr(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          Tt(i, a), i = Tr("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Yv || (Yv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || qv || (qv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || wv ? t !== "button" || o.type == null || o.type === "submit" || wv ? typeof i == "function" && (o.name == null || gE || (gE = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Yv || (Yv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || qv || (qv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (wv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (wv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && _t(e, t, "name", o.name, o, null), _t(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), _t(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), _t(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (_t(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), _t(e, t, "method", o.method, o, null), _t(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          Tt(i, a), i = Tr("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && il(a, i), e.onclick = pn);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && il(a, i), Ge("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && il(a, i), Ge("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          Tt(i, a), a = Tr("" + i), e.setAttributeNS(Ws, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (Tt(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Gv[a] || (Gv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (Tt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (Tt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (Tt(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Ge("beforetoggle", e), Ge("toggle", e), wo(e, "popover", i);
          break;
        case "xlinkActuate":
          su(
            e,
            Ws,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          su(
            e,
            Ws,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          su(
            e,
            Ws,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          su(
            e,
            Ws,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          su(
            e,
            Ws,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          su(
            e,
            Ws,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          su(
            e,
            pS,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          su(
            e,
            pS,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          su(
            e,
            pS,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), wo(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          vE || i == null || typeof i != "object" || (vE = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = M0(a), wo(e, a, i)) : Xu.hasOwnProperty(a) && i != null && typeof i != "function" && il(a, i);
      }
    }
    function Of(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          xm(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Mc(e, i) : (typeof i == "number" || typeof i == "bigint") && Mc(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && il(a, i), Ge("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && il(a, i), Ge("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && il(a, i), e.onclick = pn);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Xu.hasOwnProperty(a))
            i != null && typeof i != "function" && il(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[_a] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : wo(e, a, i);
            }
      }
    }
    function Pt(e, t, a) {
      switch (Oa(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Ge("error", e), Ge("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    _t(e, t, f, d, a, null);
                }
            }
          o && _t(e, t, "srcSet", a.srcSet, a, null), i && _t(e, t, "src", a.src, a, null);
          return;
        case "input":
          aa("input", a), Ge("invalid", e);
          var h = f = d = o = null, y = null, p = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var z = a[i];
              if (z != null)
                switch (i) {
                  case "name":
                    o = z;
                    break;
                  case "type":
                    d = z;
                    break;
                  case "checked":
                    y = z;
                    break;
                  case "defaultChecked":
                    p = z;
                    break;
                  case "value":
                    f = z;
                    break;
                  case "defaultValue":
                    h = z;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (z != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    _t(e, t, i, z, a, null);
                }
            }
          da(e, a), od(
            e,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          aa("select", a), Ge("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  _t(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          fd(e, a), t = f, a = d, e.multiple = !!i, t != null ? du(e, !!i, t, !1) : a != null && du(e, !!i, a, !0);
          return;
        case "textarea":
          aa("textarea", a), Ge("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  _t(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          Rc(e, a), qo(e, i, o, f);
          return;
        case "option":
          z0(e, a);
          for (y in a)
            a.hasOwnProperty(y) && (i = a[y], i != null) && (y === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : _t(e, t, y, i, a, null));
          return;
        case "dialog":
          Ge("beforetoggle", e), Ge("toggle", e), Ge("cancel", e), Ge("close", e);
          break;
        case "iframe":
        case "object":
          Ge("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < m0.length; i++)
            Ge(m0[i], e);
          break;
        case "image":
          Ge("error", e), Ge("load", e);
          break;
        case "details":
          Ge("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Ge("error", e), Ge("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  _t(e, t, p, i, a, null);
              }
          return;
        default:
          if (mu(t)) {
            for (z in a)
              a.hasOwnProperty(z) && (i = a[z], i !== void 0 && Of(
                e,
                t,
                z,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && _t(e, t, h, i, a, null));
    }
    function zl(e, t, a, i) {
      switch (Oa(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, y = null, p = null, z = null;
          for (G in a) {
            var U = a[G];
            if (a.hasOwnProperty(G) && U != null)
              switch (G) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = U;
                default:
                  i.hasOwnProperty(G) || _t(
                    e,
                    t,
                    G,
                    null,
                    i,
                    U
                  );
              }
          }
          for (var T in i) {
            var G = i[T];
            if (U = a[T], i.hasOwnProperty(T) && (G != null || U != null))
              switch (T) {
                case "type":
                  f = G;
                  break;
                case "name":
                  o = G;
                  break;
                case "checked":
                  p = G;
                  break;
                case "defaultChecked":
                  z = G;
                  break;
                case "value":
                  d = G;
                  break;
                case "defaultValue":
                  h = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  G !== U && _t(
                    e,
                    t,
                    T,
                    G,
                    i,
                    U
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || pE || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), pE = !0), !t || i || yE || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), yE = !0), Bi(
            e,
            d,
            h,
            y,
            p,
            z,
            f,
            o
          );
          return;
        case "select":
          G = d = h = T = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  G = y;
                default:
                  i.hasOwnProperty(f) || _t(
                    e,
                    t,
                    f,
                    null,
                    i,
                    y
                  );
              }
          for (o in i)
            if (f = i[o], y = a[o], i.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  T = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && _t(
                    e,
                    t,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, t = d, a = G, T != null ? du(e, !!t, T, !1) : !!a != !!t && (i != null ? du(e, !!t, i, !0) : du(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          G = T = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  _t(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  T = o;
                  break;
                case "defaultValue":
                  G = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && _t(e, t, d, o, i, f);
              }
          Dc(e, T, G);
          return;
        case "option":
          for (var oe in a)
            T = a[oe], a.hasOwnProperty(oe) && T != null && !i.hasOwnProperty(oe) && (oe === "selected" ? e.selected = !1 : _t(
              e,
              t,
              oe,
              null,
              i,
              T
            ));
          for (y in i)
            T = i[y], G = a[y], i.hasOwnProperty(y) && T !== G && (T != null || G != null) && (y === "selected" ? e.selected = T && typeof T != "function" && typeof T != "symbol" : _t(
              e,
              t,
              y,
              T,
              i,
              G
            ));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var de in a)
            T = a[de], a.hasOwnProperty(de) && T != null && !i.hasOwnProperty(de) && _t(
              e,
              t,
              de,
              null,
              i,
              T
            );
          for (p in i)
            if (T = i[p], G = a[p], i.hasOwnProperty(p) && T !== G && (T != null || G != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (T != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  _t(
                    e,
                    t,
                    p,
                    T,
                    i,
                    G
                  );
              }
          return;
        default:
          if (mu(t)) {
            for (var Ft in a)
              T = a[Ft], a.hasOwnProperty(Ft) && T !== void 0 && !i.hasOwnProperty(Ft) && Of(
                e,
                t,
                Ft,
                void 0,
                i,
                T
              );
            for (z in i)
              T = i[z], G = a[z], !i.hasOwnProperty(z) || T === G || T === void 0 && G === void 0 || Of(
                e,
                t,
                z,
                T,
                i,
                G
              );
            return;
          }
      }
      for (var gt in a)
        T = a[gt], a.hasOwnProperty(gt) && T != null && !i.hasOwnProperty(gt) && _t(e, t, gt, null, i, T);
      for (U in i)
        T = i[U], G = a[U], !i.hasOwnProperty(U) || T === G || T == null && G == null || _t(e, t, U, T, i, G);
    }
    function vi(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function fc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function ju(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (la(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || Ee.has(f) ? (la(d, f), i += o + f.replace(V, "-$1").toLowerCase().replace(ge, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(V, "-$1").toLowerCase().replace(ge, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Pn(i), Pn(t) !== i && (a.style = fc(e)));
      }
    }
    function Na(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Tt(i, t), e === "" + i)
              return;
        }
      ul(t, e, i, f);
    }
    function Th(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      ul(t, e, i, f);
    }
    function Ah(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (Tt(i, a), e === "" + i)
              return;
        }
      ul(t, e, i, f);
    }
    function Rf(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (Tt(i, t), e === "" + i))
              return;
        }
      ul(t, e, i, f);
    }
    function ys(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Tt(i, t), a = Tr("" + i), e === a)
              return;
        }
      ul(t, e, i, f);
    }
    function xa(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (mu(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Xu.hasOwnProperty(y))
                typeof p != "function" && il(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || ul(
                      "children",
                      e.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = Eh(e, p), ul(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), ju(e, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = xi(
                      e,
                      "class",
                      p
                    ), ul(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === Uo && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = xi(
                      e,
                      y,
                      p
                    ), ul(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (Xu.hasOwnProperty(p))
              typeof y != "function" && il(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || ul(
                    "children",
                    e.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = Eh(e, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  Na(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Na(
                    e,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), ju(e, y, o);
                  continue;
                case "multiple":
                  f.delete(p), ul(
                    p,
                    e.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), ul(
                    p,
                    e.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), ul(
                    p,
                    e.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(p), d = e.getAttribute("data"), ul(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || t === "a" && p === "href" || t === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  ys(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === _T) {
                    f.delete(p.toLowerCase()), ul(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  ys(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  ys(
                    e,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  Ah(
                    e,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  Ah(
                    e,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  Ah(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  Th(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var z = d = p, U = o;
                    if (f.delete(z), h = h.getAttribute(z), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (y === !1) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break e;
                          break;
                        default:
                          if (Tt(y, d), h === "" + y)
                            break e;
                      }
                    ul(
                      d,
                      h,
                      y,
                      U
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, z = d = p, U = o, f.delete(z), h = h.getAttribute(z), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(y) || 1 > y) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (Tt(y, d), h === "" + y))
                            break e;
                      }
                    ul(
                      d,
                      h,
                      y,
                      U
                    );
                  }
                  continue;
                case "rowSpan":
                  Rf(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  Rf(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Na(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Na(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Na(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Na(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Na(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Na(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Na(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Na(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Na(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Na(
                    e,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || Gv[p] || (Gv[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), Th(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = M0(p), d = !1, i.context === Uo && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (z = p.toLowerCase(), z = au.hasOwnProperty(
                      z
                    ) && au[z] || null, z !== null && z !== p && (d = !0, f.delete(z)), f.delete(h));
                    e: if (z = e, U = h, h = y, yn(U))
                      if (z.hasAttribute(U))
                        z = z.getAttribute(
                          U
                        ), Tt(
                          h,
                          U
                        ), h = z === "" + h ? h : z;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (z = U.toLowerCase().slice(0, 5), z !== "data-" && z !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || ul(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && ms(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function yg(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Ra(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function pg() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && Ra(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var z = y.transferSize, U = y.initiatorType;
              z && Ra(U) && (y = y.responseEnd, d += z * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, t += 8 * (f + d) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function ps(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function gg(e) {
      switch (e) {
        case lt:
          return Am;
        case ke:
          return Xv;
        default:
          return Uo;
      }
    }
    function Si(e, t) {
      if (e === Uo)
        switch (t) {
          case "svg":
            return Am;
          case "math":
            return Xv;
          default:
            return Uo;
        }
      return e === Am && t === "foreignObject" ? Uo : e;
    }
    function Df(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function tp() {
      var e = window.event;
      return e && e.type === "popstate" ? e === bS ? !1 : (bS = e, !0) : (bS = null, !1);
    }
    function wu() {
      var e = window.event;
      return e && e !== g0 ? e.type : null;
    }
    function _f() {
      var e = window.event;
      return e && e !== g0 ? e.timeStamp : -1.1;
    }
    function vg(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Sg(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function bg() {
    }
    function Oh(e, t, a, i) {
      zl(e, t, a, i), e[_a] = i;
    }
    function Rh(e) {
      Mc(e, "");
    }
    function f1(e, t, a) {
      e.nodeValue = a;
    }
    function Eg(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[_a] || null;
        if (t !== null) {
          var a = ue(e);
          a !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, se(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, se(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function rc(e) {
      return e === "head";
    }
    function Tg(e, t) {
      e.removeChild(t);
    }
    function Ag(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function co(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === p0 || a === Lv) {
            if (i === 0) {
              e.removeChild(o), so(t);
              return;
            }
            i--;
          } else if (a === y0 || a === rr || a === Ps || a === Tm || a === Is)
            i++;
          else if (a === MT)
            Ei(
              e.ownerDocument.documentElement
            );
          else if (a === UT) {
            a = e.ownerDocument.head, Ei(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Qf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === CT && Ei(e.ownerDocument.body);
        a = o;
      } while (a);
      so(t);
    }
    function gs(e, t) {
      var a = e;
      e = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === p0) {
            if (e === 0) break;
            e--;
          } else
            a !== y0 && a !== rr && a !== Ps && a !== Tm || e++;
        a = i;
      } while (a);
    }
    function Og(e) {
      gs(e, !0);
    }
    function Rg(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Dg(e) {
      e.nodeValue = "";
    }
    function _g(e) {
      gs(e, !1);
    }
    function zg(e, t) {
      t = t[HT], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Mg(e, t) {
      e.nodeValue = t;
    }
    function zf(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            zf(a), N(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Cg(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Qf])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          Tt(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = nn(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Ug(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = nn(e.nextSibling), e === null)) return null;
      return e;
    }
    function Nt(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = nn(e.nextSibling), e === null)) return null;
      return e;
    }
    function vs(e) {
      return e.data === rr || e.data === Ps;
    }
    function lp(e) {
      return e.data === Tm || e.data === rr && e.ownerDocument.readyState !== bE;
    }
    function Hg(e, t) {
      var a = e.ownerDocument;
      if (e.data === Ps)
        e._reactRetry = t;
      else if (e.data !== rr || a.readyState !== bE)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function nn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === y0 || t === Tm || t === rr || t === Ps || t === Is || t === gS || t === SE)
            break;
          if (t === p0 || t === Lv)
            return null;
        }
      }
      return e;
    }
    function Ng(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[vi(f.name)] = f.name.toLowerCase() === "style" ? fc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? e.data === Is ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function xg(e, t, a) {
      return a === null || a[zT] !== !0 ? (e.nodeValue === t ? e = null : (t = Pn(t), e = Pn(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Mf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === p0 || a === Lv) {
            if (t === 0)
              return nn(e.nextSibling);
            t--;
          } else
            a !== y0 && a !== Tm && a !== rr && a !== Ps && a !== Is || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function oo(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === y0 || a === Tm || a === rr || a === Ps || a === Is) {
            if (t === 0) return e;
            t--;
          } else
            a !== p0 && a !== Lv || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ap(e) {
      so(e);
    }
    function Dh(e) {
      so(e);
    }
    function np(e) {
      so(e);
    }
    function bi(e, t, a, i, o) {
      switch (o && br(e, i.ancestorInfo), t = ps(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function qu(e, t, a, i) {
      if (!a[Ai] && ue(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Pt(a, e, t), a[el] = i, a[_a] = t;
    }
    function Ei(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      N(e);
    }
    function _h(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function up(e, t, a) {
      var i = Om;
      if (i && typeof t == "string" && t) {
        var o = xt(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), DE.has(o) || (DE.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Pt(t, "link", e), be(t), i.head.appendChild(t)));
      }
    }
    function ip(e, t, a, i) {
      var o = (o = un.current) ? _h(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = fo(a.href), t = qe(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = fo(a.href);
            var f = qe(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: td, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              bs(e)
            )) && !f._p && (d.instance = f, d.state.loading = v0 | Pu), !ei.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              ei.set(e, h), f || Bg(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + Ss(t) + `
  + ` + Ss(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + Ss(t) + `
  + ` + Ss(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = ro(a), t = qe(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function Ss(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : cn.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : cn.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : cn.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function fo(e) {
      return 'href="' + xt(e) + '"';
    }
    function bs(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function zh(e) {
      return nt({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Bg(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = v0 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= v0;
      }), t.addEventListener("error", function() {
        return i.loading |= OE;
      }), Pt(t, "link", a), be(t), e.head.appendChild(t));
    }
    function ro(e) {
      return '[src="' + xt(e) + '"]';
    }
    function Es(e) {
      return "script[async]" + e;
    }
    function Mh(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + xt(a.href) + '"]'
            );
            if (i)
              return t.instance = i, be(i), i;
            var o = nt({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), be(i), Pt(i, "style", o), Cf(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = fo(a.href);
            var f = e.querySelector(
              bs(o)
            );
            if (f)
              return t.state.loading |= Pu, t.instance = f, be(f), f;
            i = zh(a), (o = ei.get(o)) && cp(i, o), f = (e.ownerDocument || e).createElement("link"), be(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), Pt(f, "link", i), t.state.loading |= Pu, Cf(f, a.precedence, e), t.instance = f;
          case "script":
            return f = ro(a.src), (o = e.querySelector(
              Es(f)
            )) ? (t.instance = o, be(o), o) : (i = a, (o = ei.get(f)) && (i = nt({}, a), op(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), be(o), Pt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & Pu) === td && (i = t.instance, t.state.loading |= Pu, Cf(i, a.precedence, e));
      return t.instance;
    }
    function Cf(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function cp(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function op(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function Uf(e, t, a) {
      if (Qv === null) {
        var i = /* @__PURE__ */ new Map(), o = Qv = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = Qv, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Qf] || f[el] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== lt) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function jg(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function wg(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === Am || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = yg(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          return t.rel === "stylesheet" ? (e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
            'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
          ), typeof e == "string" && t == null) : !0;
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function st(e) {
      return !(e.type === "stylesheet" && (e.state.loading & RE) === td);
    }
    function fp(e, t, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & Pu) === td) {
        if (a.instance === null) {
          var o = fo(i.href), f = t.querySelector(
            bs(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Hf.bind(e), t.then(e, e)), a.state.loading |= Pu, a.instance = f, be(f);
            return;
          }
          f = t.ownerDocument || t, i = zh(i), (o = ei.get(o)) && cp(i, o), f = f.createElement("link"), be(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), Pt(f, "link", i), a.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & RE) === td && (e.count++, a = Hf.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    function Ch(e, t) {
      return e.stylesheets && e.count === 0 && Ts(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (e.stylesheets && Ts(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, BT + t);
        0 < e.imgBytes && TS === 0 && (TS = 125 * pg() * wT);
        var o = setTimeout(
          function() {
            if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ts(e, e.stylesheets), e.unsuspend)) {
              var f = e.unsuspend;
              e.unsuspend = null, f();
            }
          },
          (e.imgBytes > TS ? 50 : jT) + t
        );
        return e.unsuspend = a, function() {
          e.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function Hf() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          Ts(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Ts(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Vv = /* @__PURE__ */ new Map(), t.forEach(rp, e), Vv = null, Hf.call(e));
    }
    function rp(e, t) {
      if (!(t.state.loading & Pu)) {
        var a = Vv.get(e);
        if (a) var i = a.get(AS);
        else {
          a = /* @__PURE__ */ new Map(), Vv.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(AS, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(AS, o), a.set(d, o), this.count++, i = Hf.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= Pu;
      }
    }
    function As(e, t, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ed, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Bo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bo(0), this.hiddenUpdates = Bo(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function Os(e, t, a, i, o, f, d, h, y, p, z, U) {
      return e = new As(
        e,
        t,
        a,
        d,
        y,
        p,
        z,
        U,
        h
      ), t = cT, f === !0 && (t |= wa | Oi), t |= ut, f = D(3, null, null, t), e.current = f, f.stateNode = e, t = Md(), Yc(t), e.pooledCache = t, Yc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, ht(f), e;
    }
    function qg(e) {
      return e ? (e = kf, e) : kf;
    }
    function Uh(e, t, a, i, o, f) {
      if (Ml && typeof Ml.onScheduleFiberRoot == "function")
        try {
          Ml.onScheduleFiberRoot(po, i, a);
        } catch (d) {
          Gu || (Gu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = qg(o), i.context === null ? i.context = o : i.pendingContext = o, Yu && ja !== null && !CE && (CE = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        me(ja) || "Unknown"
      )), i = Dl(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = Eu(e, i, t), a !== null && (vu(t, "root.render()", null), Xe(a, e, t), An(a, e, t));
    }
    function Yg(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function sp(e, t) {
      Yg(e, t), (e = e.alternate) && Yg(e, t);
    }
    function dp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = na(e, 67108864);
        t !== null && Xe(t, e, 67108864), sp(e, 67108864);
      }
    }
    function hp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ia(e);
        t = mn(t);
        var a = na(e, t);
        a !== null && Xe(a, e, t), sp(e, t);
      }
    }
    function wt() {
      return ja;
    }
    function mp(e, t, a, i) {
      var o = Q.T;
      Q.T = null;
      var f = zt.p;
      try {
        zt.p = Cl, yp(e, t, a, i);
      } finally {
        zt.p = f, Q.T = o;
      }
    }
    function Fl(e, t, a, i) {
      var o = Q.T;
      Q.T = null;
      var f = zt.p;
      try {
        zt.p = Il, yp(e, t, a, i);
      } finally {
        zt.p = f, Q.T = o;
      }
    }
    function yp(e, t, a, i) {
      if (Jv) {
        var o = Hh(i);
        if (o === null)
          Wn(
            e,
            t,
            i,
            Kv,
            a
          ), xh(e, i);
        else if (Gg(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (xh(e, i), t & 4 && -1 < YT.indexOf(e)) {
          for (; o !== null; ) {
            var f = ue(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = ru(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - Wl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      Ha(f), (bt & (ea | cu)) === sa && (Mv = Ll() + nE, xu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = na(f, 2), h !== null && Xe(h, f, 2), an(), sp(f, 2);
              }
            if (f = Hh(i), f === null && Wn(
              e,
              t,
              i,
              Kv,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Wn(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function Hh(e) {
      return e = Bn(e), pp(e);
    }
    function pp(e) {
      if (Kv = null, e = ae(e), e !== null) {
        var t = xe(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Gt(t), e !== null) return e;
            e = null;
          } else if (a === 31) {
            if (e = Me(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Kv = e, null;
    }
    function Nh(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Cl;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Il;
        case "message":
          switch (Cs()) {
            case Dp:
              return Cl;
            case Qh:
              return Il;
            case yo:
            case Jg:
              return oa;
            case Vh:
              return yc;
            default:
              return oa;
          }
        default:
          return oa;
      }
    }
    function xh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          sr = null;
          break;
        case "dragenter":
        case "dragleave":
          dr = null;
          break;
        case "mouseover":
        case "mouseout":
          hr = null;
          break;
        case "pointerover":
        case "pointerout":
          b0.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          E0.delete(t.pointerId);
      }
    }
    function sc(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = ue(t), t !== null && dp(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Gg(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return sr = sc(
            sr,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return dr = sc(
            dr,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return hr = sc(
            hr,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return b0.set(
            f,
            sc(
              b0.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, E0.set(
            f,
            sc(
              E0.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function gp(e) {
      var t = ae(e.target);
      if (t !== null) {
        var a = xe(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Gt(a), t !== null) {
              e.blockedOn = t, g(e.priority, function() {
                hp(a);
              });
              return;
            }
          } else if (t === 31) {
            if (t = Me(a), t !== null) {
              e.blockedOn = t, g(e.priority, function() {
                hp(a);
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Nf(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = Hh(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          Up !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), Up = o, a.target.dispatchEvent(i), Up === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), Up = null;
        } else
          return t = ue(a), t !== null && dp(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Bh(e, t, a) {
      Nf(e) && a.delete(t);
    }
    function r1() {
      OS = !1, sr !== null && Nf(sr) && (sr = null), dr !== null && Nf(dr) && (dr = null), hr !== null && Nf(hr) && (hr = null), b0.forEach(Bh), E0.forEach(Bh);
    }
    function Rs(e, t) {
      e.blockedOn === t && (e.blockedOn = null, OS || (OS = !0, gl.unstable_scheduleCallback(
        gl.unstable_NormalPriority,
        r1
      )));
    }
    function Lg(e) {
      $v !== e && ($v = e, gl.unstable_scheduleCallback(
        gl.unstable_NormalPriority,
        function() {
          $v === e && ($v = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (pp(i || a) === null)
                continue;
              break;
            }
            var f = ue(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), hi(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function so(e) {
      function t(y) {
        return Rs(y, e);
      }
      sr !== null && Rs(sr, e), dr !== null && Rs(dr, e), hr !== null && Rs(hr, e), b0.forEach(t), E0.forEach(t);
      for (var a = 0; a < mr.length; a++) {
        var i = mr[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < mr.length && (a = mr[0], a.blockedOn === null); )
        gp(a), a.blockedOn === null && mr.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[_a] || null;
          if (typeof f == "function")
            d || Lg(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[_a] || null)
                h = d.formAction;
              else if (pp(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), Lg(a);
          }
        }
    }
    function Xg() {
      function e(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        o !== null && (o(), o = null), i || setTimeout(a, 20);
      }
      function a() {
        if (!i && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var i = !1, o = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
          i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener(
            "navigatesuccess",
            t
          ), navigation.removeEventListener(
            "navigateerror",
            t
          ), o !== null && (o(), o = null);
        };
      }
    }
    function vp(e) {
      this._internalRoot = e;
    }
    function eu(e) {
      this._internalRoot = e;
    }
    function Sp(e) {
      e[Ai] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var gl = h2(), Ds = Dm(), s1 = m2(), nt = Object.assign, Qg = /* @__PURE__ */ Symbol.for("react.element"), _n = /* @__PURE__ */ Symbol.for("react.transitional.element"), dc = /* @__PURE__ */ Symbol.for("react.portal"), xf = /* @__PURE__ */ Symbol.for("react.fragment"), Da = /* @__PURE__ */ Symbol.for("react.strict_mode"), _s = /* @__PURE__ */ Symbol.for("react.profiler"), jh = /* @__PURE__ */ Symbol.for("react.consumer"), tu = /* @__PURE__ */ Symbol.for("react.context"), Bf = /* @__PURE__ */ Symbol.for("react.forward_ref"), ho = /* @__PURE__ */ Symbol.for("react.suspense"), Ba = /* @__PURE__ */ Symbol.for("react.suspense_list"), zs = /* @__PURE__ */ Symbol.for("react.memo"), ca = /* @__PURE__ */ Symbol.for("react.lazy"), lu = /* @__PURE__ */ Symbol.for("react.activity"), d1 = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Vg = Symbol.iterator, jf = /* @__PURE__ */ Symbol.for("react.client.reference"), Tl = Array.isArray, Q = Ds.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, zt = s1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, h1 = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), bp = [], Ep = [], Ti = -1, hc = Rt(null), wf = Rt(null), un = Rt(null), mc = Rt(null), qf = 0, Zg, mo, Yf, Tp, Ms, wh, qh;
    je.__reactDisabledLog = !0;
    var Gf, Ap, Yh = !1, Op = new (typeof WeakMap == "function" ? WeakMap : Map)(), ja = null, Yu = !1, cn = Object.prototype.hasOwnProperty, Rp = gl.unstable_scheduleCallback, Gh = gl.unstable_cancelCallback, Lh = gl.unstable_shouldYield, Xh = gl.unstable_requestPaint, Ll = gl.unstable_now, Cs = gl.unstable_getCurrentPriorityLevel, Dp = gl.unstable_ImmediatePriority, Qh = gl.unstable_UserBlockingPriority, yo = gl.unstable_NormalPriority, Jg = gl.unstable_LowPriority, Vh = gl.unstable_IdlePriority, _p = gl.log, Kg = gl.unstable_setDisableYieldValue, po = null, Ml = null, Gu = !1, Lu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Wl = Math.clz32 ? Math.clz32 : Hi, zp = Math.log, Zh = Math.LN2, Lf = 256, Us = 262144, Xf = 4194304, Cl = 2, Il = 8, oa = 32, yc = 268435456, zn = Math.random().toString(36).slice(2), el = "__reactFiber$" + zn, _a = "__reactProps$" + zn, Ai = "__reactContainer$" + zn, go = "__reactEvents$" + zn, m1 = "__reactListeners$" + zn, $g = "__reactHandles$" + zn, Hs = "__reactResources$" + zn, Qf = "__reactMarker$" + zn, kg = /* @__PURE__ */ new Set(), Xu = {}, Vf = {}, Fg = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Zf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Mp = {}, Jh = {}, Kh = /[\n"\\]/g, Cp = !1, Wg = !1, Ns = !1, l = !1, n = !1, u = !1, c = ["value", "defaultValue"], r = !1, s = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), v = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), R = v.concat(["button"]), q = "dd dt li option optgroup p rp rt".split(" "), Z = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, F = {}, Y = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, V = /([A-Z])/g, ge = /^ms-/, we = /^(?:webkit|moz|o)[A-Z]/, qt = /^-ms-/, x = /-(.)/g, M = /;\s*$/, j = {}, k = {}, ze = !1, St = !1, Ee = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), ke = "http://www.w3.org/1998/Math/MathML", lt = "http://www.w3.org/2000/svg", Ot = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), au = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Ig = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, $h = {}, S2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), b2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), HS = !1, on = {}, NS = /^on./, E2 = /^on[^A-Z]/, T2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), A2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), O2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Up = null, kh = null, Fh = null, y1 = !1, pc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), p1 = !1;
    if (pc)
      try {
        var Hp = {};
        Object.defineProperty(Hp, "passive", {
          get: function() {
            p1 = !0;
          }
        }), window.addEventListener("test", Hp, Hp), window.removeEventListener("test", Hp, Hp);
      } catch {
        p1 = !1;
      }
    var Jf = null, g1 = null, Pg = null, xs = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ev = xl(xs), Np = nt({}, xs, { view: 0, detail: 0 }), R2 = xl(Np), v1, S1, xp, tv = nt({}, Np, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Or,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== xp && (xp && e.type === "mousemove" ? (v1 = e.screenX - xp.screenX, S1 = e.screenY - xp.screenY) : S1 = v1 = 0, xp = e), v1);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : S1;
      }
    }), xS = xl(tv), D2 = nt({}, tv, { dataTransfer: 0 }), _2 = xl(D2), z2 = nt({}, Np, { relatedTarget: 0 }), b1 = xl(z2), M2 = nt({}, xs, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), C2 = xl(M2), U2 = nt({}, xs, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), H2 = xl(U2), N2 = nt({}, xs, { data: 0 }), BS = xl(
      N2
    ), x2 = BS, B2 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, j2 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, w2 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, q2 = nt({}, Np, {
      key: function(e) {
        if (e.key) {
          var t = B2[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Ar(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? j2[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Or,
      charCode: function(e) {
        return e.type === "keypress" ? Ar(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ar(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Y2 = xl(q2), G2 = nt({}, tv, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), jS = xl(G2), L2 = nt({}, Np, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Or
    }), X2 = xl(L2), Q2 = nt({}, xs, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), V2 = xl(Q2), Z2 = nt({}, tv, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), J2 = xl(Z2), K2 = nt({}, xs, {
      newState: 0,
      oldState: 0
    }), $2 = xl(K2), k2 = [9, 13, 27, 32], wS = 229, E1 = pc && "CompositionEvent" in window, Bp = null;
    pc && "documentMode" in document && (Bp = document.documentMode);
    var F2 = pc && "TextEvent" in window && !Bp, qS = pc && (!E1 || Bp && 8 < Bp && 11 >= Bp), YS = 32, GS = String.fromCharCode(YS), LS = !1, Wh = !1, W2 = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, jp = null, wp = null, XS = !1;
    pc && (XS = vd("input") && (!document.documentMode || 9 < document.documentMode));
    var fn = typeof Object.is == "function" ? Object.is : Sd, I2 = pc && "documentMode" in document && 11 >= document.documentMode, Ih = null, T1 = null, qp = null, A1 = !1, Ph = {
      animationend: Uc("Animation", "AnimationEnd"),
      animationiteration: Uc("Animation", "AnimationIteration"),
      animationstart: Uc("Animation", "AnimationStart"),
      transitionrun: Uc("Transition", "TransitionRun"),
      transitionstart: Uc("Transition", "TransitionStart"),
      transitioncancel: Uc("Transition", "TransitionCancel"),
      transitionend: Uc("Transition", "TransitionEnd")
    }, O1 = {}, QS = {};
    pc && (QS = document.createElement("div").style, "AnimationEvent" in window || (delete Ph.animationend.animation, delete Ph.animationiteration.animation, delete Ph.animationstart.animation), "TransitionEvent" in window || delete Ph.transitionend.transition);
    var VS = Hc("animationend"), ZS = Hc("animationiteration"), JS = Hc("animationstart"), P2 = Hc("transitionrun"), eT = Hc("transitionstart"), tT = Hc("transitioncancel"), KS = Hc("transitionend"), $S = /* @__PURE__ */ new Map(), R1 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    R1.push("scrollEnd");
    var kS = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var lT = performance, FS = function() {
        return lT.now();
      };
    else {
      var aT = Date;
      FS = function() {
        return aT.now();
      };
    }
    var D1 = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, nT = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", lv = 0, _1 = 1, z1 = 2, M1 = 3, av = "– ", nv = "+ ", WS = "  ", tl = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Qu = "Components ⚛", pt = "Scheduler ⚛", vt = "Blocking", Kf = !1, vo = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Qu
    }, $f = {
      start: -0,
      end: -0,
      detail: { devtools: vo }
    }, uT = ["Changed Props", ""], IS = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", iT = ["Changed Props", IS], Yp = 1, So = 2, Vu = [], em = 0, C1 = 0, kf = {};
    Object.freeze(kf);
    var Zu = null, tm = null, Le = 0, cT = 1, ut = 2, wa = 8, Oi = 16, oT = 32, PS = !1;
    try {
      var eb = Object.preventExtensions({});
    } catch {
      PS = !0;
    }
    var U1 = /* @__PURE__ */ new WeakMap(), lm = [], am = 0, uv = null, Gp = 0, Ju = [], Ku = 0, Bs = null, bo = 1, Eo = "", za = null, ll = null, yt = !1, gc = !1, nu = null, Ff = null, $u = !1, H1 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), N1 = Rt(null), x1 = Rt(null), tb = {}, iv = null, nm = null, um = !1, fT = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, rT = gl.unstable_scheduleCallback, sT = gl.unstable_NormalPriority, Xl = {
      $$typeof: tu,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Ql = gl.unstable_now, cv = console.createTask ? console.createTask : function() {
      return null;
    }, Lp = 1, ov = 2, fa = -0, Wf = -0, To = -0, Ao = null, rn = -1.1, js = -0, sl = -0, Ne = -1.1, Ye = -1.1, cl = null, vl = !1, ws = -0, vc = -1.1, Xp = null, If = 0, B1 = null, j1 = null, qs = -1.1, Qp = null, im = -1.1, fv = -1.1, Oo = -0, Ro = -1.1, ku = -1.1, w1 = 0, Vp = null, lb = null, ab = null, Pf = -1.1, Ys = null, er = -1.1, rv = -1.1, nb = -0, ub = -0, sv = 0, dT = null, ib = 0, Zp = -1.1, dv = !1, hv = !1, Jp = null, q1 = 0, Gs = 0, cm = null, cb = Q.S;
    Q.S = function(e, t) {
      if (lE = Ll(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > Ro && 0 > ku) {
          Ro = Ql();
          var a = _f(), i = wu();
          (a !== er || i !== Ys) && (er = -1.1), Pf = a, Ys = i;
        }
        ii(e, t);
      }
      cb !== null && cb(e, t);
    };
    var Ls = Rt(null), Ri = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Kp = [], $p = [], kp = [], Fp = [], Wp = [], Ip = [], Xs = /* @__PURE__ */ new Set();
    Ri.recordUnsafeLifecycleWarnings = function(e, t) {
      Xs.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Kp.push(e), e.mode & wa && typeof t.UNSAFE_componentWillMount == "function" && $p.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && kp.push(e), e.mode & wa && typeof t.UNSAFE_componentWillReceiveProps == "function" && Fp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Wp.push(e), e.mode & wa && typeof t.UNSAFE_componentWillUpdate == "function" && Ip.push(e));
    }, Ri.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Kp.length && (Kp.forEach(function(h) {
        e.add(
          me(h) || "Component"
        ), Xs.add(h.type);
      }), Kp = []);
      var t = /* @__PURE__ */ new Set();
      0 < $p.length && ($p.forEach(function(h) {
        t.add(
          me(h) || "Component"
        ), Xs.add(h.type);
      }), $p = []);
      var a = /* @__PURE__ */ new Set();
      0 < kp.length && (kp.forEach(function(h) {
        a.add(
          me(h) || "Component"
        ), Xs.add(h.type);
      }), kp = []);
      var i = /* @__PURE__ */ new Set();
      0 < Fp.length && (Fp.forEach(
        function(h) {
          i.add(
            me(h) || "Component"
          ), Xs.add(h.type);
        }
      ), Fp = []);
      var o = /* @__PURE__ */ new Set();
      0 < Wp.length && (Wp.forEach(function(h) {
        o.add(
          me(h) || "Component"
        ), Xs.add(h.type);
      }), Wp = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Ip.length && (Ip.forEach(function(h) {
        f.add(
          me(h) || "Component"
        ), Xs.add(h.type);
      }), Ip = []), 0 < t.size) {
        var d = B(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = B(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = B(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = B(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = B(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = B(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var mv = /* @__PURE__ */ new Map(), ob = /* @__PURE__ */ new Set();
    Ri.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & wa && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !ob.has(e.type) && (i = mv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], mv.set(a, i)), i.push(e));
    }, Ri.flushLegacyContextWarning = function() {
      mv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(me(o) || "Component"), ob.add(o.type);
          });
          var i = B(a);
          se(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Ri.discardPendingWarnings = function() {
      Kp = [], $p = [], kp = [], Fp = [], Wp = [], Ip = [], mv = /* @__PURE__ */ new Map();
    };
    var fb = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = Yu;
        Yu = !0;
        try {
          return e(t, a);
        } finally {
          Yu = i;
        }
      }
    }, Y1 = fb.react_stack_bottom_frame.bind(fb), rb = {
      react_stack_bottom_frame: function(e) {
        var t = Yu;
        Yu = !0;
        try {
          return e.render();
        } finally {
          Yu = t;
        }
      }
    }, sb = rb.react_stack_bottom_frame.bind(rb), db = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          tt(e, e.return, a);
        }
      }
    }, G1 = db.react_stack_bottom_frame.bind(
      db
    ), hb = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          tt(e, e.return, f);
        }
      }
    }, mb = hb.react_stack_bottom_frame.bind(
      hb
    ), yb = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, hT = yb.react_stack_bottom_frame.bind(
      yb
    ), pb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          tt(e, t, i);
        }
      }
    }, gb = pb.react_stack_bottom_frame.bind(
      pb
    ), vb = {
      react_stack_bottom_frame: function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, mT = vb.react_stack_bottom_frame.bind(vb), Sb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          tt(e, t, i);
        }
      }
    }, yT = Sb.react_stack_bottom_frame.bind(Sb), bb = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, pT = bb.react_stack_bottom_frame.bind(bb), om = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), L1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), yv = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), pv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Qs = null, Pp = !1, fm = null, e0 = 0, it = null, X1, Eb = X1 = !1, Tb = {}, Ab = {}, Ob = {};
    ye = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = me(e), o = i || "null";
        if (!Tb[o]) {
          Tb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = me(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = me(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), se(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Vs = jl(!0), Rb = jl(!1), Db = 0, _b = 1, zb = 2, Q1 = 3, tr = !1, Mb = !1, V1 = null, Z1 = !1, rm = Rt(null), gv = Rt(0), uu = Rt(null), Fu = null, sm = 1, t0 = 2, Ul = Rt(0), vv = 0, Wu = 1, sn = 2, iu = 4, dn = 8, dm, Cb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), J1 = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), Do = 0, Ve = null, Zt = null, Vl = null, Sv = !1, hm = !1, Zs = !1, bv = 0, l0 = 0, _o = null, gT = 0, vT = 25, L = null, Iu = null, zo = -1, a0 = !1, n0 = {
      readContext: Dt,
      use: ri,
      useCallback: fl,
      useContext: fl,
      useEffect: fl,
      useImperativeHandle: fl,
      useLayoutEffect: fl,
      useInsertionEffect: fl,
      useMemo: fl,
      useReducer: fl,
      useRef: fl,
      useState: fl,
      useDebugValue: fl,
      useDeferredValue: fl,
      useTransition: fl,
      useSyncExternalStore: fl,
      useId: fl,
      useHostTransitionStatus: fl,
      useFormState: fl,
      useActionState: fl,
      useOptimistic: fl,
      useMemoCache: fl,
      useCacheRefresh: fl
    };
    n0.useEffectEvent = fl;
    var K1 = null, Nb = null, $1 = null, xb = null, Sc = null, Di = null, Ev = null;
    K1 = {
      readContext: function(e) {
        return Dt(e);
      },
      use: ri,
      useCallback: function(e, t) {
        return L = "useCallback", Qe(), fi(t), Gd(e, t);
      },
      useContext: function(e) {
        return L = "useContext", Qe(), Dt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", Qe(), fi(t), kc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", Qe(), fi(a), Ru(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        L = "useInsertionEffect", Qe(), fi(t), ec(4, sn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", Qe(), fi(t), va(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", Qe(), fi(t);
        var a = Q.H;
        Q.H = Sc;
        try {
          return Sa(e, t);
        } finally {
          Q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", Qe();
        var i = Q.H;
        Q.H = Sc;
        try {
          return lf(e, t, a);
        } finally {
          Q.H = i;
        }
      },
      useRef: function(e) {
        return L = "useRef", Qe(), Yd(e);
      },
      useState: function(e) {
        L = "useState", Qe();
        var t = Q.H;
        Q.H = Sc;
        try {
          return Fi(e);
        } finally {
          Q.H = t;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", Qe();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", Qe(), of(e, t);
      },
      useTransition: function() {
        return L = "useTransition", Qe(), tc();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", Qe(), af(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", Qe(), $r();
      },
      useFormState: function(e, t) {
        return L = "useFormState", Qe(), wr(), Ia(e, t);
      },
      useActionState: function(e, t) {
        return L = "useActionState", Qe(), Ia(e, t);
      },
      useOptimistic: function(e) {
        return L = "useOptimistic", Qe(), $c(e);
      },
      useHostTransitionStatus: mi,
      useMemoCache: Fa,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", Qe(), Ld();
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", Qe(), Jr(e);
      }
    }, Nb = {
      readContext: function(e) {
        return Dt(e);
      },
      use: ri,
      useCallback: function(e, t) {
        return L = "useCallback", I(), Gd(e, t);
      },
      useContext: function(e) {
        return L = "useContext", I(), Dt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", I(), kc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", I(), Ru(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        L = "useInsertionEffect", I(), ec(4, sn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", I(), va(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", I();
        var a = Q.H;
        Q.H = Sc;
        try {
          return Sa(e, t);
        } finally {
          Q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", I();
        var i = Q.H;
        Q.H = Sc;
        try {
          return lf(e, t, a);
        } finally {
          Q.H = i;
        }
      },
      useRef: function(e) {
        return L = "useRef", I(), Yd(e);
      },
      useState: function(e) {
        L = "useState", I();
        var t = Q.H;
        Q.H = Sc;
        try {
          return Fi(e);
        } finally {
          Q.H = t;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", I();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", I(), of(e, t);
      },
      useTransition: function() {
        return L = "useTransition", I(), tc();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", I(), af(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", I(), $r();
      },
      useActionState: function(e, t) {
        return L = "useActionState", I(), Ia(e, t);
      },
      useFormState: function(e, t) {
        return L = "useFormState", I(), wr(), Ia(e, t);
      },
      useOptimistic: function(e) {
        return L = "useOptimistic", I(), $c(e);
      },
      useHostTransitionStatus: mi,
      useMemoCache: Fa,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", I(), Ld();
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", I(), Jr(e);
      }
    }, $1 = {
      readContext: function(e) {
        return Dt(e);
      },
      use: ri,
      useCallback: function(e, t) {
        return L = "useCallback", I(), Jn(e, t);
      },
      useContext: function(e) {
        return L = "useContext", I(), Dt(e);
      },
      useEffect: function(e, t) {
        L = "useEffect", I(), _l(2048, dn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", I(), cf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", I(), _l(4, sn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", I(), _l(4, iu, e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", I();
        var a = Q.H;
        Q.H = Di;
        try {
          return It(e, t);
        } finally {
          Q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", I();
        var i = Q.H;
        Q.H = Di;
        try {
          return Zc(e, t, a);
        } finally {
          Q.H = i;
        }
      },
      useRef: function() {
        return L = "useRef", I(), Ct().memoizedState;
      },
      useState: function() {
        L = "useState", I();
        var e = Q.H;
        Q.H = Di;
        try {
          return Zc(Wa);
        } finally {
          Q.H = e;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", I();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", I(), Du(e, t);
      },
      useTransition: function() {
        return L = "useTransition", I(), F0();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", I(), Kc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", I(), Ct().memoizedState;
      },
      useFormState: function(e) {
        return L = "useFormState", I(), wr(), Ii(e);
      },
      useActionState: function(e) {
        return L = "useActionState", I(), Ii(e);
      },
      useOptimistic: function(e, t) {
        return L = "useOptimistic", I(), Qr(e, t);
      },
      useHostTransitionStatus: mi,
      useMemoCache: Fa,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", I(), Ct().memoizedState;
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", I(), uf(e);
      }
    }, xb = {
      readContext: function(e) {
        return Dt(e);
      },
      use: ri,
      useCallback: function(e, t) {
        return L = "useCallback", I(), Jn(e, t);
      },
      useContext: function(e) {
        return L = "useContext", I(), Dt(e);
      },
      useEffect: function(e, t) {
        L = "useEffect", I(), _l(2048, dn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", I(), cf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", I(), _l(4, sn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", I(), _l(4, iu, e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", I();
        var a = Q.H;
        Q.H = Ev;
        try {
          return It(e, t);
        } finally {
          Q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", I();
        var i = Q.H;
        Q.H = Ev;
        try {
          return Jc(e, t, a);
        } finally {
          Q.H = i;
        }
      },
      useRef: function() {
        return L = "useRef", I(), Ct().memoizedState;
      },
      useState: function() {
        L = "useState", I();
        var e = Q.H;
        Q.H = Ev;
        try {
          return Jc(Wa);
        } finally {
          Q.H = e;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", I();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", I(), We(e, t);
      },
      useTransition: function() {
        return L = "useTransition", I(), nl();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", I(), Kc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", I(), Ct().memoizedState;
      },
      useFormState: function(e) {
        return L = "useFormState", I(), wr(), Pi(e);
      },
      useActionState: function(e) {
        return L = "useActionState", I(), Pi(e);
      },
      useOptimistic: function(e, t) {
        return L = "useOptimistic", I(), Vr(e, t);
      },
      useHostTransitionStatus: mi,
      useMemoCache: Fa,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", I(), Ct().memoizedState;
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", I(), uf(e);
      }
    }, Sc = {
      readContext: function(e) {
        return W(), Dt(e);
      },
      use: function(e) {
        return J(), ri(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", J(), Qe(), Gd(e, t);
      },
      useContext: function(e) {
        return L = "useContext", J(), Qe(), Dt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", J(), Qe(), kc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", J(), Qe(), Ru(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        L = "useInsertionEffect", J(), Qe(), ec(4, sn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", J(), Qe(), va(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", J(), Qe();
        var a = Q.H;
        Q.H = Sc;
        try {
          return Sa(e, t);
        } finally {
          Q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", J(), Qe();
        var i = Q.H;
        Q.H = Sc;
        try {
          return lf(e, t, a);
        } finally {
          Q.H = i;
        }
      },
      useRef: function(e) {
        return L = "useRef", J(), Qe(), Yd(e);
      },
      useState: function(e) {
        L = "useState", J(), Qe();
        var t = Q.H;
        Q.H = Sc;
        try {
          return Fi(e);
        } finally {
          Q.H = t;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", J(), Qe();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", J(), Qe(), of(e, t);
      },
      useTransition: function() {
        return L = "useTransition", J(), Qe(), tc();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", J(), Qe(), af(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", J(), Qe(), $r();
      },
      useFormState: function(e, t) {
        return L = "useFormState", J(), Qe(), Ia(e, t);
      },
      useActionState: function(e, t) {
        return L = "useActionState", J(), Qe(), Ia(e, t);
      },
      useOptimistic: function(e) {
        return L = "useOptimistic", J(), Qe(), $c(e);
      },
      useMemoCache: function(e) {
        return J(), Fa(e);
      },
      useHostTransitionStatus: mi,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", Qe(), Ld();
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", J(), Qe(), Jr(e);
      }
    }, Di = {
      readContext: function(e) {
        return W(), Dt(e);
      },
      use: function(e) {
        return J(), ri(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", J(), I(), Jn(e, t);
      },
      useContext: function(e) {
        return L = "useContext", J(), I(), Dt(e);
      },
      useEffect: function(e, t) {
        L = "useEffect", J(), I(), _l(2048, dn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", J(), I(), cf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", J(), I(), _l(4, sn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", J(), I(), _l(4, iu, e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", J(), I();
        var a = Q.H;
        Q.H = Di;
        try {
          return It(e, t);
        } finally {
          Q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", J(), I();
        var i = Q.H;
        Q.H = Di;
        try {
          return Zc(e, t, a);
        } finally {
          Q.H = i;
        }
      },
      useRef: function() {
        return L = "useRef", J(), I(), Ct().memoizedState;
      },
      useState: function() {
        L = "useState", J(), I();
        var e = Q.H;
        Q.H = Di;
        try {
          return Zc(Wa);
        } finally {
          Q.H = e;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", J(), I();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", J(), I(), Du(e, t);
      },
      useTransition: function() {
        return L = "useTransition", J(), I(), F0();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", J(), I(), Kc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", J(), I(), Ct().memoizedState;
      },
      useFormState: function(e) {
        return L = "useFormState", J(), I(), Ii(e);
      },
      useActionState: function(e) {
        return L = "useActionState", J(), I(), Ii(e);
      },
      useOptimistic: function(e, t) {
        return L = "useOptimistic", J(), I(), Qr(e, t);
      },
      useMemoCache: function(e) {
        return J(), Fa(e);
      },
      useHostTransitionStatus: mi,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", I(), Ct().memoizedState;
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", J(), I(), uf(e);
      }
    }, Ev = {
      readContext: function(e) {
        return W(), Dt(e);
      },
      use: function(e) {
        return J(), ri(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", J(), I(), Jn(e, t);
      },
      useContext: function(e) {
        return L = "useContext", J(), I(), Dt(e);
      },
      useEffect: function(e, t) {
        L = "useEffect", J(), I(), _l(2048, dn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", J(), I(), cf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", J(), I(), _l(4, sn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", J(), I(), _l(4, iu, e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", J(), I();
        var a = Q.H;
        Q.H = Di;
        try {
          return It(e, t);
        } finally {
          Q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", J(), I();
        var i = Q.H;
        Q.H = Di;
        try {
          return Jc(e, t, a);
        } finally {
          Q.H = i;
        }
      },
      useRef: function() {
        return L = "useRef", J(), I(), Ct().memoizedState;
      },
      useState: function() {
        L = "useState", J(), I();
        var e = Q.H;
        Q.H = Di;
        try {
          return Jc(Wa);
        } finally {
          Q.H = e;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", J(), I();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", J(), I(), We(e, t);
      },
      useTransition: function() {
        return L = "useTransition", J(), I(), nl();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", J(), I(), Kc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", J(), I(), Ct().memoizedState;
      },
      useFormState: function(e) {
        return L = "useFormState", J(), I(), Pi(e);
      },
      useActionState: function(e) {
        return L = "useActionState", J(), I(), Pi(e);
      },
      useOptimistic: function(e, t) {
        return L = "useOptimistic", J(), I(), Vr(e, t);
      },
      useMemoCache: function(e) {
        return J(), Fa(e);
      },
      useHostTransitionStatus: mi,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", I(), Ct().memoizedState;
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", J(), I(), uf(e);
      }
    };
    var Bb = {}, jb = /* @__PURE__ */ new Set(), wb = /* @__PURE__ */ new Set(), qb = /* @__PURE__ */ new Set(), Yb = /* @__PURE__ */ new Set(), Gb = /* @__PURE__ */ new Set(), Lb = /* @__PURE__ */ new Set(), Xb = /* @__PURE__ */ new Set(), Qb = /* @__PURE__ */ new Set(), Vb = /* @__PURE__ */ new Set(), Zb = /* @__PURE__ */ new Set();
    Object.freeze(Bb);
    var k1 = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = ia(e), o = Dl(i);
        o.payload = t, a != null && (Pc(a), o.callback = a), t = Eu(e, o, i), t !== null && (vu(i, "this.setState()", e), Xe(t, e, i), An(t, e, i));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = ia(e), o = Dl(i);
        o.tag = _b, o.payload = t, a != null && (Pc(a), o.callback = a), t = Eu(e, o, i), t !== null && (vu(i, "this.replaceState()", e), Xe(t, e, i), An(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = ia(e), i = Dl(a);
        i.tag = zb, t != null && (Pc(t), i.callback = t), t = Eu(e, i, a), t !== null && (vu(a, "this.forceUpdate()", e), Xe(t, e, a), An(t, e, a));
      }
    }, mm = null, F1 = null, W1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Zl = !1, Jb = {}, Kb = {}, $b = {}, kb = {}, ym = !1, Fb = {}, Tv = {}, I1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Wb = !1, Ib = null;
    Ib = /* @__PURE__ */ new Set();
    var Mo = !1, Jl = !1, P1 = !1, Pb = typeof WeakSet == "function" ? WeakSet : Set, ra = null, pm = null, gm = null, Kl = null, Mn = !1, _i = null, Pl = !1, u0 = 8192, ST = {
      getCacheForType: function(e) {
        var t = Dt(Xl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      cacheSignal: function() {
        return Dt(Xl).controller.signal;
      },
      getOwner: function() {
        return ja;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var i0 = Symbol.for;
      i0("selector.component"), i0("selector.has_pseudo_class"), i0("selector.role"), i0("selector.test_id"), i0("selector.text");
    }
    var bT = [], ET = typeof WeakMap == "function" ? WeakMap : Map, sa = 0, ea = 2, cu = 4, Co = 0, c0 = 1, Js = 2, Av = 3, lr = 4, Ov = 6, eE = 5, bt = sa, Jt = null, rt = null, ct = 0, Cn = 0, Rv = 1, Ks = 2, o0 = 3, tE = 4, eS = 5, f0 = 6, Dv = 7, tS = 8, $s = 9, Yt = Cn, ou = null, ar = !1, vm = !1, lS = !1, bc = 0, dl = Co, nr = 0, ur = 0, aS = 0, Un = 0, ks = 0, r0 = null, hn = null, _v = !1, zv = 0, lE = 0, aE = 300, Mv = 1 / 0, nE = 500, s0 = null, Al = null, ir = null, Cv = 0, nS = 1, uS = 2, uE = 3, cr = 0, iE = 1, cE = 2, oE = 3, fE = 4, Uv = 5, $l = 0, or = null, Sm = null, zi = 0, iS = 0, cS = -0, oS = null, rE = null, sE = null, Mi = Cv, dE = null, TT = 50, d0 = 0, fS = null, rS = !1, Hv = !1, AT = 50, Fs = 0, h0 = null, bm = !1, Nv = null, hE = !1, mE = /* @__PURE__ */ new Set(), OT = {}, xv = null, Em = null, sS = !1, dS = !1, Bv = !1, hS = !1, fr = 0, mS = {};
    (function() {
      for (var e = 0; e < R1.length; e++) {
        var t = R1[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), jn(a, "on" + t);
      }
      jn(VS, "onAnimationEnd"), jn(ZS, "onAnimationIteration"), jn(JS, "onAnimationStart"), jn("dblclick", "onDoubleClick"), jn("focusin", "onFocus"), jn("focusout", "onBlur"), jn(P2, "onTransitionRun"), jn(eT, "onTransitionStart"), jn(tT, "onTransitionCancel"), jn(KS, "onTransitionEnd");
    })(), $e("onMouseEnter", ["mouseout", "mouseover"]), $e("onMouseLeave", ["mouseout", "mouseover"]), $e("onPointerEnter", ["pointerout", "pointerover"]), $e("onPointerLeave", ["pointerout", "pointerover"]), ot(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), ot(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), ot("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), ot(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), ot(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), ot(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var m0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), yS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(m0)
    ), jv = "_reactListening" + Math.random().toString(36).slice(2), yE = !1, pE = !1, wv = !1, gE = !1, qv = !1, Yv = !1, vE = !1, Gv = {}, RT = /\r\n?/g, DT = /\u0000|\uFFFD/g, Ws = "http://www.w3.org/1999/xlink", pS = "http://www.w3.org/XML/1998/namespace", _T = "javascript:throw new Error('React form unexpectedly submitted.')", zT = "suppressHydrationWarning", Is = "&", Lv = "/&", y0 = "$", p0 = "/$", rr = "$?", Ps = "$~", Tm = "$!", MT = "html", CT = "body", UT = "head", gS = "F!", SE = "F", bE = "loading", HT = "style", Uo = 0, Am = 1, Xv = 2, vS = null, SS = null, EE = { dialog: !0, webview: !0 }, bS = null, g0 = void 0, TE = typeof setTimeout == "function" ? setTimeout : void 0, NT = typeof clearTimeout == "function" ? clearTimeout : void 0, ed = -1, AE = typeof Promise == "function" ? Promise : void 0, xT = typeof queueMicrotask == "function" ? queueMicrotask : typeof AE < "u" ? function(e) {
      return AE.resolve(null).then(e).catch(vg);
    } : TE, ES = null, td = 0, v0 = 1, OE = 2, RE = 3, Pu = 4, ei = /* @__PURE__ */ new Map(), DE = /* @__PURE__ */ new Set(), Ho = zt.d;
    zt.d = {
      f: function() {
        var e = Ho.f(), t = an();
        return e || t;
      },
      r: function(e) {
        var t = ue(e);
        t !== null && t.tag === 5 && t.type === "form" ? ff(t) : Ho.r(e);
      },
      D: function(e) {
        Ho.D(e), up("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Ho.C(e, t), up("preconnect", e, t);
      },
      L: function(e, t, a) {
        Ho.L(e, t, a);
        var i = Om;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + xt(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + xt(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + xt(
            a.imageSizes
          ) + '"]')) : o += '[href="' + xt(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = fo(e);
              break;
            case "script":
              f = ro(e);
          }
          ei.has(f) || (e = nt(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), ei.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            bs(f)
          ) || t === "script" && i.querySelector(Es(f)) || (t = i.createElement("link"), Pt(t, "link", e), be(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Ho.m(e, t);
        var a = Om;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + xt(i) + '"][href="' + xt(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = ro(e);
          }
          if (!ei.has(f) && (e = nt({ rel: "modulepreload", href: e }, t), ei.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Es(f)))
                  return;
            }
            i = a.createElement("link"), Pt(i, "link", e), be(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Ho.X(e, t);
        var a = Om;
        if (a && e) {
          var i = qe(a).hoistableScripts, o = ro(e), f = i.get(o);
          f || (f = a.querySelector(
            Es(o)
          ), f || (e = nt({ src: e, async: !0 }, t), (t = ei.get(o)) && op(e, t), f = a.createElement("script"), be(f), Pt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        Ho.S(e, t, a);
        var i = Om;
        if (i && e) {
          var o = qe(i).hoistableStyles, f = fo(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: td, preload: null };
            if (d = i.querySelector(
              bs(f)
            ))
              h.loading = v0 | Pu;
            else {
              e = nt(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = ei.get(f)) && cp(e, a);
              var y = d = i.createElement("link");
              be(y), Pt(y, "link", e), y._p = new Promise(function(p, z) {
                y.onload = p, y.onerror = z;
              }), y.addEventListener("load", function() {
                h.loading |= v0;
              }), y.addEventListener("error", function() {
                h.loading |= OE;
              }), h.loading |= Pu, Cf(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        Ho.M(e, t);
        var a = Om;
        if (a && e) {
          var i = qe(a).hoistableScripts, o = ro(e), f = i.get(o);
          f || (f = a.querySelector(
            Es(o)
          ), f || (e = nt({ src: e, async: !0, type: "module" }, t), (t = ei.get(o)) && op(e, t), f = a.createElement("script"), be(f), Pt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Om = typeof document > "u" ? null : document, Qv = null, BT = 6e4, jT = 800, wT = 500, TS = 0, AS = null, Vv = null, ld = h1, S0 = {
      $$typeof: tu,
      Provider: null,
      Consumer: null,
      _currentValue: ld,
      _currentValue2: ld,
      _threadCount: 0
    }, _E = "%c%s%c", zE = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", ME = "", Zv = " ", qT = Function.prototype.bind, CE = !1, UE = null, HE = null, NE = null, xE = null, BE = null, jE = null, wE = null, qE = null, YE = null, GE = null;
    UE = function(e, t, a, i) {
      t = b(e, t), t !== null && (a = H(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = nt({}, e.memoizedProps), a = na(e, 2), a !== null && Xe(a, e, 2));
    }, HE = function(e, t, a) {
      t = b(e, t), t !== null && (a = ie(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = nt({}, e.memoizedProps), a = na(e, 2), a !== null && Xe(a, e, 2));
    }, NE = function(e, t, a, i) {
      t = b(e, t), t !== null && (a = P(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = nt({}, e.memoizedProps), a = na(e, 2), a !== null && Xe(a, e, 2));
    }, xE = function(e, t, a) {
      e.pendingProps = H(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = na(e, 2), t !== null && Xe(t, e, 2);
    }, BE = function(e, t) {
      e.pendingProps = ie(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = na(e, 2), t !== null && Xe(t, e, 2);
    }, jE = function(e, t, a) {
      e.pendingProps = P(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = na(e, 2), t !== null && Xe(t, e, 2);
    }, wE = function(e) {
      var t = na(e, 2);
      t !== null && Xe(t, e, 2);
    }, qE = function(e) {
      var t = xo(), a = na(e, t);
      a !== null && Xe(a, e, t);
    }, YE = function(e) {
      he = e;
    }, GE = function(e) {
      ce = e;
    };
    var Jv = !0, Kv = null, OS = !1, sr = null, dr = null, hr = null, b0 = /* @__PURE__ */ new Map(), E0 = /* @__PURE__ */ new Map(), mr = [], YT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), $v = null;
    if (eu.prototype.render = vp.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : Ie(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = ia(i);
      Uh(i, o, a, t, null, null);
    }, eu.prototype.unmount = vp.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (bt & (ea | cu)) !== sa && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Uh(e.current, 2, null, e, null, null), an(), t[Ai] = null;
      }
    }, eu.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Ni();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < mr.length && t !== 0 && t < mr[a].priority; a++) ;
        mr.splice(a, 0, e), a === 0 && gp(e);
      }
    }, (function() {
      var e = Ds.version;
      if (e !== "19.2.8")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.8
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), zt.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Be(t), e = e !== null ? dt(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.2.8",
        rendererPackageName: "react-dom",
        currentDispatcherRef: Q,
        reconcilerVersion: "19.2.8"
      };
      return e.overrideHookState = UE, e.overrideHookStateDeletePath = HE, e.overrideHookStateRenamePath = NE, e.overrideProps = xE, e.overridePropsDeletePath = BE, e.overridePropsRenamePath = jE, e.scheduleUpdate = wE, e.scheduleRetry = qE, e.setErrorHandler = YE, e.setSuspenseHandler = GE, e.scheduleRefresh = De, e.scheduleRoot = te, e.setRefreshHandler = et, e.getCurrentFiber = wt, pr(e);
    })() && pc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var LE = window.location.protocol;
      /^(https?|file):$/.test(LE) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (LE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    R0.createRoot = function(e, t) {
      if (!Ie(e))
        throw Error("Target container is not a DOM element.");
      Sp(e);
      var a = !1, i = "", o = Vd, f = Zd, d = hy;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === _n && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Os(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        null,
        o,
        f,
        d,
        Xg
      ), e[Ai] = t.current, oc(e), new vp(t);
    }, R0.hydrateRoot = function(e, t, a) {
      if (!Ie(e))
        throw Error("Target container is not a DOM element.");
      Sp(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Vd, d = Zd, h = hy, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = Os(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        y,
        f,
        d,
        h,
        Xg
      ), t.context = qg(null), a = t.current, i = ia(a), i = mn(i), o = Dl(i), o.callback = null, Eu(a, o, i), vu(i, "hydrateRoot()", null), a = i, t.current.lanes = a, Nn(t, a), Ha(t), e[Ai] = t.current, oc(e), new eu(t);
    }, R0.version = "19.2.8", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), R0;
}
var l2;
function IT() {
  if (l2) return Wv.exports;
  l2 = 1;
  function b() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
      } catch (H) {
        console.error(H);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (b(), Wv.exports = FT()) : Wv.exports = WT(), Wv.exports;
}
var PT = IT();
const CS = "hana.plugin.ui", US = 1, eA = "X-Hana-Plugin-Surface-Session", tA = "pluginSurfaceSession", y2 = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, ad = {
  TOAST_SHOW: "toast.show",
  EXTERNAL_OPEN: "external.open",
  RESOURCE_OPEN: "resource.open",
  RESOURCE_PICK: "resource.pick",
  RESOURCE_REQUEST_ACCESS: "resource.requestAccess",
  UI_RESIZE: "ui.resize",
  CLIPBOARD_WRITE_TEXT: "clipboard.writeText"
}, lA = /* @__PURE__ */ new Set([
  "event",
  "request",
  "response",
  "error"
]);
function a2(b) {
  return typeof b == "object" && b !== null;
}
function yr(b) {
  return {
    ok: !1,
    error: {
      code: y2.BAD_MESSAGE,
      message: b
    }
  };
}
function n2(b) {
  if (!a2(b))
    return yr("Plugin UI messages must be objects.");
  if (b.protocol !== CS)
    return yr("Plugin UI message protocol is missing or invalid.");
  if (b.version !== US)
    return {
      ok: !1,
      error: {
        code: y2.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(b.version)}.`
      }
    };
  if (typeof b.kind != "string" || !lA.has(b.kind))
    return yr("Plugin UI message kind is missing or invalid.");
  if (typeof b.type != "string" || b.type.trim() === "")
    return yr("Plugin UI message type must be a non-empty string.");
  const H = b.kind;
  if (H !== "event" && (typeof b.id != "string" || b.id.trim() === ""))
    return yr(`Plugin UI ${H} messages must include a non-empty id.`);
  if (H === "error") {
    if (!a2(b.error))
      return yr("Plugin UI error messages must include an error object.");
    if (typeof b.error.code != "string" || b.error.code.trim() === "")
      return yr("Plugin UI error code must be a non-empty string.");
    if (typeof b.error.message != "string" || b.error.message.trim() === "")
      return yr("Plugin UI error message must be a non-empty string.");
  }
  return {
    ok: !0,
    value: b
  };
}
class u2 extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(H) {
    super(H.message), this.code = H.code, this.details = H.details;
  }
}
let i2 = 0;
function aA() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (i2 += 1, `hana-plugin-${Date.now()}-${i2}`);
}
function nA() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
function uA(b) {
  if (!b)
    return null;
  try {
    return new URL(b).origin;
  } catch {
    return null;
  }
}
function iA(b, H) {
  if (H)
    return H;
  const P = new URLSearchParams(b.location.search).get("hana-host-origin");
  return P || (uA(b.document.referrer) ?? "*");
}
function cA(b) {
  const H = new URLSearchParams(b.location.search);
  return {
    theme: H.get("hana-theme") ?? void 0,
    cssUrl: H.get("hana-css") ?? void 0
  };
}
function c2(b, H, P) {
  return !(b.source !== H || P !== "*" && b.origin !== P);
}
function oA(b) {
  return typeof b == "string" ? { url: b } : b;
}
function fA(b) {
  return typeof b == "string" ? { text: b } : b;
}
function p2(b) {
  const H = /^\/api\/plugins\/([^/]+)(?:\/|$)/.exec(b.location.pathname || "");
  if (!H)
    throw new Error("Plugin asset URL helper requires an iframe route under /api/plugins/:pluginId/.");
  try {
    return decodeURIComponent(H[1]);
  } catch {
    throw new Error("Plugin asset URL helper could not decode the current plugin id.");
  }
}
function rA(b) {
  if (typeof b != "string" || b.length === 0)
    throw new Error("Invalid plugin asset path.");
  if (b.includes("\\") || b.includes("\0") || /^[a-z][a-z0-9+.-]*:/i.test(b))
    throw new Error("Invalid plugin asset path.");
  const H = b.replace(/^\/+/, "");
  if (!H || H.startsWith("./"))
    throw new Error("Invalid plugin asset path.");
  const P = H.split("/");
  if (P.some((O) => !O || O === "." || O === ".." || O.startsWith(".")))
    throw new Error("Invalid plugin asset path.");
  return P.map((O) => encodeURIComponent(O)).join("/");
}
function sA(b, H) {
  const P = p2(b), O = rA(H);
  return `${b.location.origin}/api/plugins/${encodeURIComponent(P)}/assets/${O}`;
}
function dA(b) {
  return new URLSearchParams(b.location.search).get(tA) || null;
}
function hA(b) {
  if (typeof b != "string" || b.length === 0)
    throw new Error("Invalid plugin API path.");
  const H = b.trim();
  if (!H || H.includes("\\") || H.includes("\0") || H.includes("#") || H.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(H))
    throw new Error("Invalid plugin API path.");
  const P = H.replace(/^\/+/, "");
  if (!P || P.startsWith("./") || P === "api/plugins" || P.startsWith("api/plugins/"))
    throw new Error("Invalid plugin API path. Use a route path relative to the current plugin.");
  const O = P.indexOf("?"), ie = O >= 0 ? P.slice(0, O) : P;
  if (!ie)
    throw new Error("Invalid plugin API path.");
  const ce = ie.split("/");
  for (const W of ce) {
    if (!W)
      throw new Error("Invalid plugin API path.");
    let X;
    try {
      X = decodeURIComponent(W);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (X === "." || X === ".." || X.includes("/") || X.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const he = new URL(`http://hana.local/${P}`);
  return `${ce.map((W) => encodeURIComponent(decodeURIComponent(W))).join("/")}${he.search}`;
}
function g2(b, H) {
  const P = p2(b), O = hA(H);
  return `${b.location.origin}/api/plugins/${encodeURIComponent(P)}/${O}`;
}
function mA(b, H, P) {
  const O = dA(b);
  if (!O)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const ie = b.fetch?.bind(b) ?? globalThis.fetch?.bind(globalThis);
  if (!ie)
    throw new Error("hana.api.fetch requires window.fetch.");
  const ce = P ?? {}, he = new Headers(ce.headers);
  return he.set(eA, O), ie(g2(b, H), {
    ...ce,
    headers: he
  });
}
function yA(b = {}) {
  const H = b.targetWindow ?? nA(), P = b.parentWindow ?? H.parent, O = iA(H, b.targetOrigin), ie = b.requestTimeoutMs ?? 1e4, ce = b.idFactory ?? aA;
  let he = cA(H);
  const J = /* @__PURE__ */ new Set();
  function W(D) {
    P.postMessage(D, O);
  }
  function X(D, te) {
    const De = {
      protocol: CS,
      version: US,
      kind: "event",
      type: D
    };
    te !== void 0 && (De.payload = te), W(De);
  }
  function ye(D) {
    if (!c2(D, P, O))
      return;
    const te = n2(D.data);
    if (!te.ok)
      return;
    const De = te.value;
    if (De.kind !== "event" || De.type !== "hana.theme.changed" || typeof De.payload != "object" || De.payload === null)
      return;
    const et = De.payload;
    he = {
      theme: typeof et.theme == "string" ? et.theme : he.theme,
      cssUrl: typeof et.cssUrl == "string" ? et.cssUrl : he.cssUrl
    };
    for (const Ie of J)
      Ie(he);
  }
  function B(D, te, De = {}) {
    const et = ce(), Ie = De.timeoutMs ?? ie;
    return new Promise((xe, Gt) => {
      const Me = () => {
        H.removeEventListener("message", Ue), H.clearTimeout(Be);
      }, Ue = (pe) => {
        if (!c2(pe, P, O))
          return;
        const Ae = n2(pe.data);
        if (!Ae.ok)
          return;
        const Fe = Ae.value;
        Fe.id !== et || Fe.type !== D || (Fe.kind === "response" && (Me(), xe(Fe.payload)), Fe.kind === "error" && Fe.error && (Me(), Gt(new u2(Fe.error))));
      }, Be = H.setTimeout(() => {
        Me(), Gt(new u2({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${D}.`
        }));
      }, Ie);
      H.addEventListener("message", Ue);
      const dt = {
        protocol: CS,
        version: US,
        id: et,
        kind: "request",
        type: D
      };
      te !== void 0 && (dt.payload = te), W(dt);
    });
  }
  return {
    ready(D) {
      X("hana.ready", D);
    },
    assets: {
      url(D) {
        return sA(H, D);
      }
    },
    api: {
      url(D) {
        return g2(H, D);
      },
      fetch(D, te) {
        return mA(H, D, te);
      }
    },
    ui: {
      resize(D) {
        X(ad.UI_RESIZE, D);
      }
    },
    theme: {
      getSnapshot() {
        return { ...he };
      },
      subscribe(D) {
        return J.size === 0 && H.addEventListener("message", ye), J.add(D), D({ ...he }), () => {
          J.delete(D), J.size === 0 && H.removeEventListener("message", ye);
        };
      }
    },
    host: {
      request: B
    },
    toast: {
      show(D, te) {
        return B(ad.TOAST_SHOW, D, te);
      }
    },
    external: {
      open(D, te) {
        return B(ad.EXTERNAL_OPEN, oA(D), te);
      }
    },
    clipboard: {
      writeText(D, te) {
        return B(ad.CLIPBOARD_WRITE_TEXT, fA(D), te);
      }
    },
    resources: {
      open(D, te) {
        return B(ad.RESOURCE_OPEN, D, te);
      },
      pick(D = {}, te) {
        return B(ad.RESOURCE_PICK, D, te);
      },
      requestAccess(D, te) {
        return B(ad.RESOURCE_REQUEST_ACCESS, D, te);
      }
    }
  };
}
let o2 = null;
function Hn() {
  return o2 ??= yA(), o2;
}
const ta = {
  ready(b) {
    return Hn().ready(b);
  },
  assets: {
    url(b) {
      return Hn().assets.url(b);
    }
  },
  api: {
    url(b) {
      return Hn().api.url(b);
    },
    fetch(b, H) {
      return Hn().api.fetch(b, H);
    }
  },
  ui: {
    resize(b) {
      return Hn().ui.resize(b);
    }
  },
  theme: {
    getSnapshot() {
      return Hn().theme.getSnapshot();
    },
    subscribe(b) {
      return Hn().theme.subscribe(b);
    }
  },
  host: {
    request(b, H, P) {
      return Hn().host.request(b, H, P);
    }
  },
  toast: {
    show(b, H) {
      return Hn().toast.show(b, H);
    }
  },
  external: {
    open(b, H) {
      return Hn().external.open(b, H);
    }
  },
  clipboard: {
    writeText(b, H) {
      return Hn().clipboard.writeText(b, H);
    }
  },
  resources: {
    open(b, H) {
      return Hn().resources.open(b, H);
    },
    pick(b, H) {
      return Hn().resources.pick(b, H);
    },
    requestAccess(b, H) {
      return Hn().resources.requestAccess(b, H);
    }
  }
};
function Ec(...b) {
  return b.filter(Boolean).join(" ");
}
const f2 = {
  "warm-paper": {
    bg: "#F8F5ED",
    bgCard: "#FCFAF5",
    accent: "#537D96",
    accentHover: "#456A80",
    accentLight: "rgba(83, 125, 150, 0.08)",
    text: "#3B3D3F",
    textLight: "#6B6F73",
    textMuted: "#8E9196",
    border: "rgba(83, 125, 150, 0.22)",
    danger: "#8B3A3A"
  },
  contemplation: {
    bg: "#F3F5F7",
    bgCard: "#F8F9FB",
    accent: "#7E99A8",
    accentHover: "#6B8594",
    accentLight: "rgba(126, 153, 168, 0.08)",
    text: "#2C3238",
    textLight: "#5A6570",
    textMuted: "#869098",
    border: "rgba(126, 153, 168, 0.22)",
    danger: "#8B4040"
  },
  "grass-aroma": {
    bg: "#F5F8F3",
    bgCard: "#F9FBF7",
    accent: "#5BA88C",
    accentHover: "#4D9179",
    accentLight: "rgba(91, 168, 140, 0.08)",
    text: "#2E3832",
    textLight: "#5E6B63",
    textMuted: "#8A9490",
    border: "rgba(91, 168, 140, 0.22)",
    danger: "#8B4A3A"
  },
  "high-contrast": {
    bg: "#FAF9F6",
    bgCard: "#FDFCFA",
    accent: "#3A6B85",
    accentHover: "#2E5870",
    accentLight: "rgba(58, 107, 133, 0.08)",
    text: "#1A1C1E",
    textLight: "#4A4E52",
    textMuted: "#6B6F73",
    border: "rgba(58, 107, 133, 0.28)",
    danger: "#7A3030"
  },
  midnight: {
    bg: "#3B4A54",
    bgCard: "#445560",
    accent: "#C99AAF",
    accentHover: "#D8AFC0",
    accentLight: "rgba(201, 154, 175, 0.11)",
    text: "#E1EAF0",
    textLight: "#B7C5CE",
    textMuted: "#A3B5C0",
    border: "rgba(170, 121, 141, 0.16)",
    danger: "#C77070"
  },
  "midnight-contrast": {
    bg: "#26343D",
    bgCard: "#30414B",
    accent: "#E6B1C4",
    accentHover: "#F0C4D3",
    accentLight: "rgba(230, 177, 196, 0.14)",
    text: "#F0F6FA",
    textLight: "#D3E0E8",
    textMuted: "#B7C8D3",
    border: "rgba(230, 177, 196, 0.26)",
    danger: "#E28B8B"
  },
  absolutely: {
    bg: "#F4F3EE",
    bgCard: "#FAF9F5",
    accent: "#B5846E",
    accentHover: "#A27460",
    accentLight: "rgba(181, 132, 110, 0.08)",
    text: "#2D2B28",
    textLight: "#6B6864",
    textMuted: "#9B9793",
    border: "rgba(177, 173, 161, 0.28)",
    danger: "#8B3A3A"
  },
  delve: {
    bg: "#FFFFFF",
    bgCard: "#F7F7F8",
    accent: "#1A1A1A",
    accentHover: "#000000",
    accentLight: "rgba(0, 0, 0, 0.05)",
    text: "#1A1A1A",
    textLight: "#6E6E6E",
    textMuted: "#999999",
    border: "rgba(0, 0, 0, 0.10)",
    danger: "#8B3A3A"
  },
  "deep-think": {
    bg: "#FCFCFD",
    bgCard: "#F8F8FA",
    accent: "#636AE8",
    accentHover: "#5158D4",
    accentLight: "rgba(99, 106, 232, 0.06)",
    text: "#1D1D1F",
    textLight: "#65656B",
    textMuted: "#95959C",
    border: "rgba(0, 0, 0, 0.09)",
    danger: "#8B3A3A"
  },
  "new-warm-paper": {
    bg: "#F5EFE4",
    bgCard: "#FBF7EE",
    accent: "#537D96",
    accentHover: "#3F6179",
    accentLight: "rgba(83, 125, 150, 0.08)",
    text: "#2A2622",
    textLight: "#4A433C",
    textMuted: "#6B6158",
    border: "#D8CFBE",
    danger: "#8B2C1F"
  }
}, pA = {
  bg: "--hana-plugin-bg",
  bgCard: "--hana-plugin-bg-card",
  accent: "--hana-plugin-accent",
  accentHover: "--hana-plugin-accent-hover",
  accentLight: "--hana-plugin-accent-light",
  text: "--hana-plugin-text",
  textLight: "--hana-plugin-text-light",
  textMuted: "--hana-plugin-text-muted",
  border: "--hana-plugin-border",
  danger: "--hana-plugin-danger",
  radiusInput: "--hana-plugin-radius-input",
  radiusCard: "--hana-plugin-radius-card",
  fontUi: "--hana-plugin-font-ui",
  fontSerif: "--hana-plugin-font-serif",
  fontMono: "--hana-plugin-font-mono"
};
function gA({ mode: b = "inherit", theme: H, className: P, style: O, children: ie, "data-testid": ce = "hana-plugin-theme", ...he }) {
  const J = typeof H == "string" ? H : void 0, W = vA(b, H);
  return re.jsx("div", { ...he, "data-testid": ce, className: Ec("hana-plugin-theme", P), "data-hana-theme-mode": b, "data-hana-theme": b === "hana" ? J : void 0, style: { ...W, ...O }, children: ie });
}
function vA(b, H) {
  if (b === "inherit")
    return {};
  const P = SA(b, H), O = {};
  for (const [ie, ce] of Object.entries(pA)) {
    const he = P?.[ie];
    he && (O[ce] = he);
  }
  return O;
}
function SA(b, H) {
  if (typeof H == "string")
    return f2[H];
  if (H)
    return H;
  if (b === "hana")
    return f2["warm-paper"];
}
const _0 = Ol.forwardRef(function({ variant: H = "secondary", size: P = "md", loading: O = !1, iconLeft: ie, iconRight: ce, disabled: he, className: J, children: W, type: X = "button", ...ye }, B) {
  return re.jsxs("button", { ...ye, ref: B, type: X, disabled: he || O, className: Ec("hana-plugin-button", `hana-plugin-button-${H}`, `hana-plugin-button-${P}`, O && "hana-plugin-button-loading", J), children: [O ? re.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : ie, W && re.jsx("span", { className: "hana-plugin-button-label", children: W }), !O && ce] });
});
Ol.forwardRef(function({ label: H, size: P = "md", variant: O = "ghost", className: ie, children: ce, type: he = "button", ...J }, W) {
  return re.jsx("button", { ...J, ref: W, type: he, "aria-label": H, title: J.title || H, className: Ec("hana-plugin-icon-button", `hana-plugin-icon-button-${P}`, `hana-plugin-icon-button-${O}`, ie), children: ce });
});
const _S = Ol.forwardRef(function({ label: H, hint: P, error: O, id: ie, className: ce, inputClassName: he, ...J }, W) {
  const X = Ol.useId(), ye = ie || X;
  return re.jsx(v2, { label: H, hint: P, error: O, htmlFor: ye, className: ce, children: re.jsx("input", { ...J, ref: W, id: ye, "aria-invalid": !!O, className: Ec("hana-plugin-input", he) }) });
}), bA = Ol.forwardRef(function({ label: H, hint: P, error: O, id: ie, className: ce, textareaClassName: he, rows: J = 4, ...W }, X) {
  const ye = Ol.useId(), B = ie || ye;
  return re.jsx(v2, { label: H, hint: P, error: O, htmlFor: B, className: ce, children: re.jsx("textarea", { ...W, ref: X, id: B, rows: J, "aria-invalid": !!O, className: Ec("hana-plugin-textarea", he) }) });
});
Ol.forwardRef(function({ checked: H, onChange: P, label: O, disabled: ie, className: ce, onClick: he, type: J = "button", ...W }, X) {
  const ye = typeof O == "string" ? O : W["aria-label"];
  return re.jsxs("span", { className: Ec("hana-plugin-switch-wrap", ce), children: [re.jsx("button", { ...W, ref: X, type: J, role: "switch", "aria-checked": H, "aria-label": ye, disabled: ie, className: Ec("hana-plugin-switch", H && "hana-plugin-switch-on"), onClick: (B) => {
    he?.(B), !B.defaultPrevented && !ie && P?.(!H);
  }, children: re.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), O && re.jsx("span", { className: "hana-plugin-switch-label", children: O })] });
});
function v2({ label: b, hint: H, error: P, htmlFor: O, className: ie, children: ce }) {
  return re.jsxs("div", { className: Ec("hana-plugin-field", ie), children: [b && re.jsx("label", { className: "hana-plugin-field-label", htmlFor: O, children: b }), H && re.jsx("div", { className: "hana-plugin-field-hint", children: H }), ce, P && re.jsx("div", { className: "hana-plugin-field-error", children: P })] });
}
function EA({ title: b, description: H, actions: P, footer: O, children: ie, className: ce, ...he }) {
  return re.jsxs("section", { ...he, className: Ec("hana-plugin-card", ce), children: [(b || H || P) && re.jsxs("header", { className: "hana-plugin-card-header", children: [re.jsxs("div", { className: "hana-plugin-card-heading", children: [b && re.jsx("h2", { className: "hana-plugin-card-title", children: b }), H && re.jsx("p", { className: "hana-plugin-card-description", children: H })] }), P && re.jsx("div", { className: "hana-plugin-card-actions", children: P })] }), re.jsx("div", { className: "hana-plugin-card-body", children: ie }), O && re.jsx("footer", { className: "hana-plugin-card-footer", children: O })] });
}
function zS({ icon: b, title: H, description: P, action: O, className: ie, ...ce }) {
  return re.jsxs("div", { ...ce, className: Ec("hana-plugin-empty", ie), children: [b && re.jsx("div", { className: "hana-plugin-empty-icon", children: b }), re.jsx("div", { className: "hana-plugin-empty-title", children: H }), P && re.jsx("div", { className: "hana-plugin-empty-description", children: P }), O && re.jsx("div", { className: "hana-plugin-empty-action", children: O })] });
}
const MS = {
  dataDir: null,
  indexHealthy: !1,
  warning: null,
  degraded: null,
  directories: []
};
function Rm(b) {
  return `${b.dir}/${b.filename}`;
}
function TA(b) {
  const H = b ?? "", P = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/.exec(H);
  return P ? H.slice(P[0].length) : H;
}
function r2(b, H) {
  const P = (b ?? "").replace(/[\\/]+$/, "");
  return H ? `${P}/${H}` : P;
}
const AA = [
  { key: "edit", label: "编辑" },
  { key: "copy", label: "复制" },
  { key: "send", label: "发送给当前 Agent" },
  { key: "open-default", label: "用默认应用打开" },
  { key: "copy-path", label: "复制路径" },
  // 截图分享：宿主无对应能力（见 Task 6 报告 §2），置灰 + toast
  { key: "screenshot", label: "截图分享", disabled: !0 },
  { key: "delete", label: "删除", danger: !0, separatorBefore: !0 },
  { key: "rename", label: "重命名" }
], OA = [
  { key: "create-dir", label: "新建目录" },
  { key: "create-prompt", label: "新建卡片" },
  { key: "copy-path", label: "复制路径" },
  { key: "delete-dir", label: "删除目录", danger: !0, separatorBefore: !0 },
  { key: "rename-dir", label: "重命名" }
];
function RA({
  menu: b,
  items: H,
  onSelect: P,
  onClose: O
}) {
  const ie = Ol.useRef(null);
  if (Ol.useEffect(() => {
    if (!b) return;
    function J(B) {
      ie.current && !ie.current.contains(B.target) && O();
    }
    function W(B) {
      B.key === "Escape" && O();
    }
    function X() {
      O();
    }
    function ye(B) {
      ie.current && !ie.current.contains(B.target) && O();
    }
    return window.addEventListener("pointerdown", J), window.addEventListener("keydown", W), window.addEventListener("scroll", X, !0), window.addEventListener("contextmenu", ye), () => {
      window.removeEventListener("pointerdown", J), window.removeEventListener("keydown", W), window.removeEventListener("scroll", X, !0), window.removeEventListener("contextmenu", ye);
    };
  }, [b, O]), !b) return null;
  const ce = Math.min(b.x, Math.max(0, window.innerWidth - 220)), he = Math.min(b.y, Math.max(0, window.innerHeight - 120));
  return /* @__PURE__ */ re.jsx("div", { ref: ie, className: "ps-menu", style: { left: ce, top: he }, role: "menu", children: H.map((J) => /* @__PURE__ */ re.jsxs(Ol.Fragment, { children: [
    J.separatorBefore && /* @__PURE__ */ re.jsx("div", { className: "ps-menu-sep" }),
    /* @__PURE__ */ re.jsx(
      "button",
      {
        type: "button",
        role: "menuitem",
        "aria-disabled": J.disabled || void 0,
        className: `ps-menu-item${J.danger ? " ps-menu-item-danger" : ""}${J.disabled ? " ps-menu-item-disabled" : ""}`,
        onClick: () => {
          O(), P(J.key);
        },
        children: J.label
      }
    )
  ] }, J.key)) });
}
const DA = {
  "create-dir": "目录已创建",
  "create-prompt": "词条已创建",
  "rename-entry": "已重命名",
  "rename-dir": "目录已重命名",
  "confirm-delete-entry": "词条已删除",
  "confirm-delete-dir": "目录已删除"
};
function s2({
  form: b,
  submit: H,
  done: P
}) {
  const O = b.kind === "confirm-delete-entry" || b.kind === "confirm-delete-dir", ie = b.kind === "rename-entry" ? b.entry.title : b.kind === "rename-dir" ? b.dirName : "", [ce, he] = Ol.useState(ie), [J, W] = Ol.useState(""), [X, ye] = Ol.useState(!1), [B, D] = Ol.useState(null), te = Ol.useRef(null);
  Ol.useEffect(() => {
    te.current?.focus();
  }, []);
  async function De(xe) {
    ye(!0), D(null);
    const Gt = await H(xe);
    ye(!1), Gt.ok ? (ta.toast.show({ message: DA[b.kind], type: "success" }), P()) : D(Gt.error || "操作失败");
  }
  function et() {
    switch (b.kind) {
      case "create-dir":
        return { type: "create-dir", name: ce.trim() };
      case "create-prompt":
        return { type: "create-prompt", directory: b.dirName, name: ce.trim(), content: J };
      case "rename-entry":
        return { type: "rename-prompt", path: Rm(b.entry), newName: ce.trim() };
      case "rename-dir":
        return { type: "rename-dir", name: b.dirName, newName: ce.trim() };
      case "confirm-delete-entry":
        return { type: "delete-prompt", path: Rm(b.entry) };
      case "confirm-delete-dir":
        return { type: "delete-dir", name: b.dirName };
    }
  }
  const Ie = O || ce.trim().length > 0;
  return /* @__PURE__ */ re.jsxs("div", { className: "ps-inline", children: [
    b.kind === "create-prompt" && /* @__PURE__ */ re.jsxs(re.Fragment, { children: [
      /* @__PURE__ */ re.jsx(
        _S,
        {
          label: "标题",
          placeholder: "词条标题（自动生成 frontmatter）",
          value: ce,
          ref: te,
          onChange: (xe) => he(xe.target.value)
        }
      ),
      /* @__PURE__ */ re.jsx(
        bA,
        {
          label: "内容",
          placeholder: "正文内容",
          className: "ps-inline-textarea",
          value: J,
          onChange: (xe) => W(xe.target.value)
        }
      )
    ] }),
    b.kind === "create-dir" && /* @__PURE__ */ re.jsx(
      _S,
      {
        label: "新目录名",
        placeholder: "输入目录名",
        value: ce,
        ref: te,
        onChange: (xe) => he(xe.target.value)
      }
    ),
    (b.kind === "rename-entry" || b.kind === "rename-dir") && /* @__PURE__ */ re.jsx(
      _S,
      {
        label: b.kind === "rename-entry" ? "新名称" : "新目录名",
        value: ce,
        ref: te,
        onChange: (xe) => he(xe.target.value)
      }
    ),
    b.kind === "confirm-delete-entry" && /* @__PURE__ */ re.jsxs("div", { className: "ps-inline-hint", children: [
      "删除词条「",
      b.entry.title,
      "」？此操作不可撤销。"
    ] }),
    b.kind === "confirm-delete-dir" && /* @__PURE__ */ re.jsxs("div", { className: "ps-inline-hint", children: [
      "删除目录「",
      b.dirName,
      "」？目录非空会被拒绝，请先清空词条。"
    ] }),
    B && /* @__PURE__ */ re.jsx("div", { className: "ps-inline-error", children: B }),
    /* @__PURE__ */ re.jsx("div", { className: "ps-inline-row", children: O ? /* @__PURE__ */ re.jsxs(re.Fragment, { children: [
      /* @__PURE__ */ re.jsx(_0, { size: "sm", variant: "danger", loading: X, onClick: () => De(et()), children: "删除" }),
      /* @__PURE__ */ re.jsx(_0, { size: "sm", variant: "ghost", onClick: P, children: "取消" })
    ] }) : /* @__PURE__ */ re.jsxs(re.Fragment, { children: [
      /* @__PURE__ */ re.jsx(
        _0,
        {
          size: "sm",
          variant: "primary",
          loading: X,
          disabled: !Ie,
          onClick: () => De(et()),
          children: "确定"
        }
      ),
      /* @__PURE__ */ re.jsx(_0, { size: "sm", variant: "ghost", onClick: P, children: "取消" })
    ] }) })
  ] });
}
function _A() {
  const [b, H] = Ol.useState(null), [P, O] = Ol.useState(/* @__PURE__ */ new Set()), [ie, ce] = Ol.useState(/* @__PURE__ */ new Set()), [he, J] = Ol.useState(null), [W, X] = Ol.useState(null);
  async function ye() {
    try {
      const Ue = await (await ta.api.fetch("api/state")).json();
      H({ ...MS, ...Ue });
    } catch {
      H({ ...MS, warning: "无法连接插件运行时，请重载插件后重试" });
    }
  }
  Ol.useEffect(() => {
    ta.ready(), ta.ui.resize({ height: 480 }), ye();
  }, []);
  function B(Me) {
    O((Ue) => {
      const Be = new Set(Ue);
      return Be.has(Me) ? Be.delete(Me) : Be.add(Me), Be;
    });
  }
  function D(Me) {
    ce((Ue) => {
      const Be = new Set(Ue);
      return Be.has(Me) ? Be.delete(Me) : Be.add(Me), Be;
    });
  }
  async function te(Me) {
    try {
      const Be = await (await ta.api.fetch("api/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Me)
      })).json();
      return Be.state && H({ ...MS, ...Be.state }), { ok: Be.ok === !0, error: Be.error };
    } catch {
      return { ok: !1, error: "请求失败，请重载插件后重试" };
    }
  }
  function De(Me, Ue, Be, dt) {
    Me.preventDefault(), Me.stopPropagation(), X(null), J({ x: Me.clientX, y: Me.clientY, kind: Ue, entry: Be, dirName: dt });
  }
  async function et(Me) {
    if (!he) return;
    const { kind: Ue, entry: Be, dirName: dt } = he, pe = b?.dataDir ?? null;
    if (Ue === "entry" && Be) {
      const Ae = r2(pe, Rm(Be));
      switch (Me) {
        case "edit":
          try {
            await ta.resources.open({ resource: { kind: "local-file", path: Ae }, mode: "edit" });
          } catch {
            try {
              await ta.resources.open({ resource: { kind: "local-file", path: Ae }, mode: "preview" });
            } catch {
              ta.toast.show({ message: "无法打开文件", type: "error" });
            }
          }
          break;
        case "copy":
          await ta.clipboard.writeText(Be.content), ta.toast.show({ message: "已复制正文", type: "success" });
          break;
        case "send": {
          const Fe = await te({ type: "send-to-agent", path: Rm(Be) });
          ta.toast.show({
            message: Fe.ok ? "已发送到当前会话" : Fe.error || "发送失败",
            type: Fe.ok ? "success" : "error"
          });
          break;
        }
        case "open-default":
          try {
            await ta.resources.open({ resource: { kind: "local-file", path: Ae }, mode: "preview" });
          } catch {
            ta.toast.show({ message: "无法打开文件", type: "error" });
          }
          break;
        case "copy-path":
          await ta.clipboard.writeText(Ae), ta.toast.show({ message: "已复制路径", type: "success" });
          break;
        case "screenshot":
          ta.toast.show({ message: "暂不支持", type: "info" });
          break;
        case "delete":
          X({ kind: "confirm-delete-entry", entry: Be });
          break;
        case "rename":
          X({ kind: "rename-entry", entry: Be });
          break;
      }
      return;
    }
    if (Ue === "dir" && dt) {
      const Ae = r2(pe, dt);
      switch (Me) {
        case "create-dir":
          X({ kind: "create-dir", anchorDir: dt });
          break;
        case "create-prompt":
          X({ kind: "create-prompt", dirName: dt });
          break;
        case "copy-path":
          await ta.clipboard.writeText(Ae), ta.toast.show({ message: "已复制路径", type: "success" });
          break;
        case "delete-dir":
          X({ kind: "confirm-delete-dir", dirName: dt });
          break;
        case "rename-dir":
          X({ kind: "rename-dir", dirName: dt });
          break;
      }
    }
  }
  function Ie(Me, Ue) {
    switch (Me.kind) {
      case "create-dir":
        return Me.anchorDir === Ue;
      case "create-prompt":
      case "rename-dir":
      case "confirm-delete-dir":
        return Me.dirName === Ue;
      default:
        return !1;
    }
  }
  const xe = b?.warning || b?.degraded || null;
  function Gt() {
    return b ? b.dataDir ? !b.directories.some((Ue) => Ue.entries.length > 0) && !W ? /* @__PURE__ */ re.jsx(
      zS,
      {
        title: "架子上还没有词条",
        description: "右键目录行可以新建卡片，或通过工具写入第一个提示词。"
      }
    ) : /* @__PURE__ */ re.jsx("div", { className: "ps-shelf", children: b.directories.map((Ue) => {
      const Be = P.has(Ue.name), dt = W && Ie(W, Ue.name) ? W : null;
      return /* @__PURE__ */ re.jsxs("section", { className: "ps-dir", children: [
        /* @__PURE__ */ re.jsxs(
          "button",
          {
            type: "button",
            className: "ps-dir-head",
            onClick: () => B(Ue.name),
            onContextMenu: (pe) => De(pe, "dir", void 0, Ue.name),
            "aria-expanded": !Be,
            children: [
              /* @__PURE__ */ re.jsx("span", { className: `ps-dir-arrow${Be ? " ps-dir-arrow-collapsed" : ""}`, children: "▾" }),
              /* @__PURE__ */ re.jsx("span", { className: "ps-dir-name", title: Ue.name, children: Ue.name }),
              /* @__PURE__ */ re.jsx("span", { className: "ps-dir-count", children: Ue.entries.length })
            ]
          }
        ),
        dt && /* @__PURE__ */ re.jsx(s2, { form: dt, submit: te, done: () => X(null) }),
        !Be && /* @__PURE__ */ re.jsx("div", { className: "ps-pills", children: Ue.entries.map((pe) => {
          const Ae = Rm(pe), Fe = ie.has(Ae), me = W && (W.kind === "rename-entry" || W.kind === "confirm-delete-entry") && Rm(W.entry) === Ae ? W : null;
          return me ? /* @__PURE__ */ re.jsx(s2, { form: me, submit: te, done: () => X(null) }, Ae) : Fe ? /* @__PURE__ */ re.jsxs("div", { className: "ps-card", children: [
            /* @__PURE__ */ re.jsx(
              "button",
              {
                type: "button",
                className: "ps-card-head",
                onClick: () => D(Ae),
                onContextMenu: (Rt) => De(Rt, "entry", pe),
                title: "点击收起",
                children: /* @__PURE__ */ re.jsx("span", { className: "ps-card-title", children: pe.title })
              }
            ),
            /* @__PURE__ */ re.jsx("pre", { className: "ps-card-body", children: TA(pe.content) }),
            /* @__PURE__ */ re.jsx(
              "button",
              {
                type: "button",
                className: "ps-card-close",
                onClick: () => D(Ae),
                "aria-label": "收起",
                title: "收起",
                children: "×"
              }
            )
          ] }, Ae) : /* @__PURE__ */ re.jsx(
            "button",
            {
              type: "button",
              className: "ps-pill",
              onClick: () => D(Ae),
              onContextMenu: (Rt) => De(Rt, "entry", pe),
              title: pe.title,
              children: /* @__PURE__ */ re.jsx("span", { className: "ps-pill-title", children: pe.title })
            },
            Ae
          );
        }) })
      ] }, Ue.name);
    }) }) : /* @__PURE__ */ re.jsx(
      zS,
      {
        title: "提示词架尚未初始化",
        description: "选择一个数据目录作为提示词库的存放位置，之后词条会自动出现在这里。",
        action: /* @__PURE__ */ re.jsx(
          _0,
          {
            variant: "primary",
            onClick: () => ta.toast.show({ message: "初始化向导将在后续版本提供", type: "info" }),
            children: "选择数据目录"
          }
        )
      }
    ) : /* @__PURE__ */ re.jsx(zS, { title: "加载中…", description: "正在读取提示词架" });
  }
  return /* @__PURE__ */ re.jsx(gA, { mode: "inherit", className: "plugin-panel", children: /* @__PURE__ */ re.jsxs(
    EA,
    {
      title: "PromptShelf",
      description: "提示词架：右键词条/目录操作，单击胶囊展开预览，点标题栏或 × 收起。",
      footer: xe ? /* @__PURE__ */ re.jsx("span", { className: "ps-notice", children: xe }) : void 0,
      children: [
        Gt(),
        /* @__PURE__ */ re.jsx(
          RA,
          {
            menu: he,
            items: he?.kind === "entry" ? AA : OA,
            onSelect: et,
            onClose: () => J(null)
          }
        )
      ]
    }
  ) });
}
const d2 = document.getElementById("root");
d2 && PT.createRoot(d2).render(/* @__PURE__ */ re.jsx(_A, {}));
