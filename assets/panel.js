var Kv = { exports: {} }, b0 = {};
var YE;
function jT() {
  if (YE) return b0;
  YE = 1;
  var b = /* @__PURE__ */ Symbol.for("react.transitional.element"), H = /* @__PURE__ */ Symbol.for("react.fragment");
  function le(T, ie, oe) {
    var pe = null;
    if (oe !== void 0 && (pe = "" + oe), ie.key !== void 0 && (pe = "" + ie.key), "key" in ie) {
      oe = {};
      for (var F in ie)
        F !== "key" && (oe[F] = ie[F]);
    } else oe = ie;
    return ie = oe.ref, {
      $$typeof: b,
      type: T,
      key: pe,
      ref: ie !== void 0 ? ie : null,
      props: oe
    };
  }
  return b0.Fragment = H, b0.jsx = le, b0.jsxs = le, b0;
}
var E0 = {}, $v = { exports: {} }, $e = {};
var wE;
function qT() {
  if (wE) return $e;
  wE = 1;
  var b = /* @__PURE__ */ Symbol.for("react.transitional.element"), H = /* @__PURE__ */ Symbol.for("react.portal"), le = /* @__PURE__ */ Symbol.for("react.fragment"), T = /* @__PURE__ */ Symbol.for("react.strict_mode"), ie = /* @__PURE__ */ Symbol.for("react.profiler"), oe = /* @__PURE__ */ Symbol.for("react.consumer"), pe = /* @__PURE__ */ Symbol.for("react.context"), F = /* @__PURE__ */ Symbol.for("react.forward_ref"), I = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.memo"), Se = /* @__PURE__ */ Symbol.for("react.lazy"), j = /* @__PURE__ */ Symbol.for("react.activity"), z = Symbol.iterator;
  function ae(S) {
    return S === null || typeof S != "object" ? null : (S = z && S[z] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var ze = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, je = Object.assign, it = {};
  function Ie(S, q, ee) {
    this.props = S, this.context = q, this.refs = it, this.updater = ee || ze;
  }
  Ie.prototype.isReactComponent = {}, Ie.prototype.setState = function(S, q) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, q, "setState");
  }, Ie.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function cl() {
  }
  cl.prototype = Ie.prototype;
  function Et(S, q, ee) {
    this.props = S, this.context = q, this.refs = it, this.updater = ee || ze;
  }
  var jt = Et.prototype = new cl();
  jt.constructor = Et, je(jt, Ie.prototype), jt.isPureReactComponent = !0;
  var Vt = Array.isArray;
  function Zt() {
  }
  var Ce = { H: null, A: null, T: null, S: null }, Qe = Object.prototype.hasOwnProperty;
  function ot(S, q, ee) {
    var P = ee.ref;
    return {
      $$typeof: b,
      type: S,
      key: q,
      ref: P !== void 0 ? P : null,
      props: ee
    };
  }
  function he(S, q) {
    return ot(S.type, q, S.props);
  }
  function qt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === b;
  }
  function be(S) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(ee) {
      return q[ee];
    });
  }
  var Xe = /\/+/g;
  function Jt(S, q) {
    return typeof S == "object" && S !== null && S.key != null ? be("" + S.key) : q.toString(36);
  }
  function Yt(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(Zt, Zt) : (S.status = "pending", S.then(
          function(q) {
            S.status === "pending" && (S.status = "fulfilled", S.value = q);
          },
          function(q) {
            S.status === "pending" && (S.status = "rejected", S.reason = q);
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
  function C(S, q, ee, P, Oe) {
    var Ve = typeof S;
    (Ve === "undefined" || Ve === "boolean") && (S = null);
    var De = !1;
    if (S === null) De = !0;
    else
      switch (Ve) {
        case "bigint":
        case "string":
        case "number":
          De = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case b:
            case H:
              De = !0;
              break;
            case Se:
              return De = S._init, C(
                De(S._payload),
                q,
                ee,
                P,
                Oe
              );
          }
      }
    if (De)
      return Oe = Oe(S), De = P === "" ? "." + Jt(S, 0) : P, Vt(Oe) ? (ee = "", De != null && (ee = De.replace(Xe, "$&/") + "/"), C(Oe, q, ee, "", function(Ya) {
        return Ya;
      })) : Oe != null && (qt(Oe) && (Oe = he(
        Oe,
        ee + (Oe.key == null || S && S.key === Oe.key ? "" : ("" + Oe.key).replace(
          Xe,
          "$&/"
        ) + "/") + De
      )), q.push(Oe)), 1;
    De = 0;
    var Kt = P === "" ? "." : P + ":";
    if (Vt(S))
      for (var gt = 0; gt < S.length; gt++)
        P = S[gt], Ve = Kt + Jt(P, gt), De += C(
          P,
          q,
          ee,
          Ve,
          Oe
        );
    else if (gt = ae(S), typeof gt == "function")
      for (S = gt.call(S), gt = 0; !(P = S.next()).done; )
        P = P.value, Ve = Kt + Jt(P, gt++), De += C(
          P,
          q,
          ee,
          Ve,
          Oe
        );
    else if (Ve === "object") {
      if (typeof S.then == "function")
        return C(
          Yt(S),
          q,
          ee,
          P,
          Oe
        );
      throw q = String(S), Error(
        "Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return De;
  }
  function J(S, q, ee) {
    if (S == null) return S;
    var P = [], Oe = 0;
    return C(S, P, "", "", function(Ve) {
      return q.call(ee, Ve, Oe++);
    }), P;
  }
  function ne(S) {
    if (S._status === -1) {
      var q = S._result;
      q = q(), q.then(
        function(ee) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = ee);
        },
        function(ee) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = ee);
        }
      ), S._status === -1 && (S._status = 0, S._result = q);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var Te = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(q)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, Ue = {
    map: J,
    forEach: function(S, q, ee) {
      J(
        S,
        function() {
          q.apply(this, arguments);
        },
        ee
      );
    },
    count: function(S) {
      var q = 0;
      return J(S, function() {
        q++;
      }), q;
    },
    toArray: function(S) {
      return J(S, function(q) {
        return q;
      }) || [];
    },
    only: function(S) {
      if (!qt(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return $e.Activity = j, $e.Children = Ue, $e.Component = Ie, $e.Fragment = le, $e.Profiler = ie, $e.PureComponent = Et, $e.StrictMode = T, $e.Suspense = I, $e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ce, $e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return Ce.H.useMemoCache(S);
    }
  }, $e.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, $e.cacheSignal = function() {
    return null;
  }, $e.cloneElement = function(S, q, ee) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var P = je({}, S.props), Oe = S.key;
    if (q != null)
      for (Ve in q.key !== void 0 && (Oe = "" + q.key), q)
        !Qe.call(q, Ve) || Ve === "key" || Ve === "__self" || Ve === "__source" || Ve === "ref" && q.ref === void 0 || (P[Ve] = q[Ve]);
    var Ve = arguments.length - 2;
    if (Ve === 1) P.children = ee;
    else if (1 < Ve) {
      for (var De = Array(Ve), Kt = 0; Kt < Ve; Kt++)
        De[Kt] = arguments[Kt + 2];
      P.children = De;
    }
    return ot(S.type, Oe, P);
  }, $e.createContext = function(S) {
    return S = {
      $$typeof: pe,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: oe,
      _context: S
    }, S;
  }, $e.createElement = function(S, q, ee) {
    var P, Oe = {}, Ve = null;
    if (q != null)
      for (P in q.key !== void 0 && (Ve = "" + q.key), q)
        Qe.call(q, P) && P !== "key" && P !== "__self" && P !== "__source" && (Oe[P] = q[P]);
    var De = arguments.length - 2;
    if (De === 1) Oe.children = ee;
    else if (1 < De) {
      for (var Kt = Array(De), gt = 0; gt < De; gt++)
        Kt[gt] = arguments[gt + 2];
      Oe.children = Kt;
    }
    if (S && S.defaultProps)
      for (P in De = S.defaultProps, De)
        Oe[P] === void 0 && (Oe[P] = De[P]);
    return ot(S, Ve, Oe);
  }, $e.createRef = function() {
    return { current: null };
  }, $e.forwardRef = function(S) {
    return { $$typeof: F, render: S };
  }, $e.isValidElement = qt, $e.lazy = function(S) {
    return {
      $$typeof: Se,
      _payload: { _status: -1, _result: S },
      _init: ne
    };
  }, $e.memo = function(S, q) {
    return {
      $$typeof: V,
      type: S,
      compare: q === void 0 ? null : q
    };
  }, $e.startTransition = function(S) {
    var q = Ce.T, ee = {};
    Ce.T = ee;
    try {
      var P = S(), Oe = Ce.S;
      Oe !== null && Oe(ee, P), typeof P == "object" && P !== null && typeof P.then == "function" && P.then(Zt, Te);
    } catch (Ve) {
      Te(Ve);
    } finally {
      q !== null && ee.types !== null && (q.types = ee.types), Ce.T = q;
    }
  }, $e.unstable_useCacheRefresh = function() {
    return Ce.H.useCacheRefresh();
  }, $e.use = function(S) {
    return Ce.H.use(S);
  }, $e.useActionState = function(S, q, ee) {
    return Ce.H.useActionState(S, q, ee);
  }, $e.useCallback = function(S, q) {
    return Ce.H.useCallback(S, q);
  }, $e.useContext = function(S) {
    return Ce.H.useContext(S);
  }, $e.useDebugValue = function() {
  }, $e.useDeferredValue = function(S, q) {
    return Ce.H.useDeferredValue(S, q);
  }, $e.useEffect = function(S, q) {
    return Ce.H.useEffect(S, q);
  }, $e.useEffectEvent = function(S) {
    return Ce.H.useEffectEvent(S);
  }, $e.useId = function() {
    return Ce.H.useId();
  }, $e.useImperativeHandle = function(S, q, ee) {
    return Ce.H.useImperativeHandle(S, q, ee);
  }, $e.useInsertionEffect = function(S, q) {
    return Ce.H.useInsertionEffect(S, q);
  }, $e.useLayoutEffect = function(S, q) {
    return Ce.H.useLayoutEffect(S, q);
  }, $e.useMemo = function(S, q) {
    return Ce.H.useMemo(S, q);
  }, $e.useOptimistic = function(S, q) {
    return Ce.H.useOptimistic(S, q);
  }, $e.useReducer = function(S, q, ee) {
    return Ce.H.useReducer(S, q, ee);
  }, $e.useRef = function(S) {
    return Ce.H.useRef(S);
  }, $e.useState = function(S) {
    return Ce.H.useState(S);
  }, $e.useSyncExternalStore = function(S, q, ee) {
    return Ce.H.useSyncExternalStore(
      S,
      q,
      ee
    );
  }, $e.useTransition = function() {
    return Ce.H.useTransition();
  }, $e.version = "19.2.8", $e;
}
var R0 = { exports: {} };
R0.exports;
var GE;
function YT() {
  return GE || (GE = 1, (function(b, H) {
    process.env.NODE_ENV !== "production" && (function() {
      function le(g, N) {
        Object.defineProperty(oe.prototype, g, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              N[0],
              N[1]
            );
          }
        });
      }
      function T(g) {
        return g === null || typeof g != "object" ? null : (g = Ci && g[Ci] || g["@@iterator"], typeof g == "function" ? g : null);
      }
      function ie(g, N) {
        g = (g = g.constructor) && (g.displayName || g.name) || "ReactClass";
        var te = g + "." + N;
        Ui[te] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          N,
          g
        ), Ui[te] = !0);
      }
      function oe(g, N, te) {
        this.props = g, this.context = N, this.refs = vt, this.updater = te || wa;
      }
      function pe() {
      }
      function F(g, N, te) {
        this.props = g, this.context = N, this.refs = vt, this.updater = te || wa;
      }
      function I() {
      }
      function V(g) {
        return "" + g;
      }
      function Se(g) {
        try {
          V(g);
          var N = !1;
        } catch {
          N = !0;
        }
        if (N) {
          N = console;
          var te = N.error, ue = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return te.call(
            N,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ue
          ), V(g);
        }
      }
      function j(g) {
        if (g == null) return null;
        if (typeof g == "function")
          return g.$$typeof === yr ? null : g.displayName || g.name || null;
        if (typeof g == "string") return g;
        switch (g) {
          case S:
            return "Fragment";
          case ee:
            return "Profiler";
          case q:
            return "StrictMode";
          case De:
            return "Suspense";
          case Kt:
            return "SuspenseList";
          case re:
            return "Activity";
        }
        if (typeof g == "object")
          switch (typeof g.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), g.$$typeof) {
            case Ue:
              return "Portal";
            case Oe:
              return g.displayName || "Context";
            case P:
              return (g._context.displayName || "Context") + ".Consumer";
            case Ve:
              var N = g.render;
              return g = g.displayName, g || (g = N.displayName || N.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
            case gt:
              return N = g.displayName || null, N !== null ? N : j(g.type) || "Memo";
            case Ya:
              N = g._payload, g = g._init;
              try {
                return j(g(N));
              } catch {
              }
          }
        return null;
      }
      function z(g) {
        if (g === S) return "<>";
        if (typeof g == "object" && g !== null && g.$$typeof === Ya)
          return "<...>";
        try {
          var N = j(g);
          return N ? "<" + N + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function ae() {
        var g = me.A;
        return g === null ? null : g.getOwner();
      }
      function ze() {
        return Error("react-stack-top-frame");
      }
      function je(g) {
        if (Hi.call(g, "key")) {
          var N = Object.getOwnPropertyDescriptor(g, "key").get;
          if (N && N.isReactWarning) return !1;
        }
        return g.key !== void 0;
      }
      function it(g, N) {
        function te() {
          Tc || (Tc = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            N
          ));
        }
        te.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: te,
          configurable: !0
        });
      }
      function Ie() {
        var g = j(this.type);
        return ad[g] || (ad[g] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), g = this.props.ref, g !== void 0 ? g : null;
      }
      function cl(g, N, te, ue, ye, Ne) {
        var ge = te.ref;
        return g = {
          $$typeof: Te,
          type: g,
          key: N,
          props: te,
          _owner: ue
        }, (ge !== void 0 ? ge : null) !== null ? Object.defineProperty(g, "ref", {
          enumerable: !1,
          get: Ie
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
          value: ye
        }), Object.defineProperty(g, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Ne
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      }
      function Et(g, N) {
        return N = cl(
          g.type,
          N,
          g.props,
          g._owner,
          g._debugStack,
          g._debugTask
        ), g._store && (N._store.validated = g._store.validated), N;
      }
      function jt(g) {
        Vt(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === Ya && (g._payload.status === "fulfilled" ? Vt(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
      }
      function Vt(g) {
        return typeof g == "object" && g !== null && g.$$typeof === Te;
      }
      function Zt(g) {
        var N = { "=": "=0", ":": "=2" };
        return "$" + g.replace(/[=:]/g, function(te) {
          return N[te];
        });
      }
      function Ce(g, N) {
        return typeof g == "object" && g !== null && g.key != null ? (Se(g.key), Zt("" + g.key)) : N.toString(36);
      }
      function Qe(g) {
        switch (g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
          default:
            switch (typeof g.status == "string" ? g.then(I, I) : (g.status = "pending", g.then(
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
      function ot(g, N, te, ue, ye) {
        var Ne = typeof g;
        (Ne === "undefined" || Ne === "boolean") && (g = null);
        var ge = !1;
        if (g === null) ge = !0;
        else
          switch (Ne) {
            case "bigint":
            case "string":
            case "number":
              ge = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case Te:
                case Ue:
                  ge = !0;
                  break;
                case Ya:
                  return ge = g._init, ot(
                    ge(g._payload),
                    N,
                    te,
                    ue,
                    ye
                  );
              }
          }
        if (ge) {
          ge = g, ye = ye(ge);
          var at = ue === "" ? "." + Ce(ge, 0) : ue;
          return Ec(ye) ? (te = "", at != null && (te = at.replace(nd, "$&/") + "/"), ot(ye, N, te, "", function(ta) {
            return ta;
          })) : ye != null && (Vt(ye) && (ye.key != null && (ge && ge.key === ye.key || Se(ye.key)), te = Et(
            ye,
            te + (ye.key == null || ge && ge.key === ye.key ? "" : ("" + ye.key).replace(
              nd,
              "$&/"
            ) + "/") + at
          ), ue !== "" && ge != null && Vt(ge) && ge.key == null && ge._store && !ge._store.validated && (te._store.validated = 2), ye = te), N.push(ye)), 1;
        }
        if (ge = 0, at = ue === "" ? "." : ue + ":", Ec(g))
          for (var Ze = 0; Ze < g.length; Ze++)
            ue = g[Ze], Ne = at + Ce(ue, Ze), ge += ot(
              ue,
              N,
              te,
              Ne,
              ye
            );
        else if (Ze = T(g), typeof Ze == "function")
          for (Ze === g.entries && (Hn || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Hn = !0), g = Ze.call(g), Ze = 0; !(ue = g.next()).done; )
            ue = ue.value, Ne = at + Ce(ue, Ze++), ge += ot(
              ue,
              N,
              te,
              Ne,
              ye
            );
        else if (Ne === "object") {
          if (typeof g.then == "function")
            return ot(
              Qe(g),
              N,
              te,
              ue,
              ye
            );
          throw N = String(g), Error(
            "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return ge;
      }
      function he(g, N, te) {
        if (g == null) return g;
        var ue = [], ye = 0;
        return ot(g, ue, "", "", function(Ne) {
          return N.call(te, Ne, ye++);
        }), ue;
      }
      function qt(g) {
        if (g._status === -1) {
          var N = g._ioInfo;
          N != null && (N.start = N.end = performance.now()), N = g._result;
          var te = N();
          if (te.then(
            function(ye) {
              if (g._status === 0 || g._status === -1) {
                g._status = 1, g._result = ye;
                var Ne = g._ioInfo;
                Ne != null && (Ne.end = performance.now()), te.status === void 0 && (te.status = "fulfilled", te.value = ye);
              }
            },
            function(ye) {
              if (g._status === 0 || g._status === -1) {
                g._status = 2, g._result = ye;
                var Ne = g._ioInfo;
                Ne != null && (Ne.end = performance.now()), te.status === void 0 && (te.status = "rejected", te.reason = ye);
              }
            }
          ), N = g._ioInfo, N != null) {
            N.value = te;
            var ue = te.displayName;
            typeof ue == "string" && (N.name = ue);
          }
          g._status === -1 && (g._status = 0, g._result = te);
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
      function be() {
        var g = me.H;
        return g === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), g;
      }
      function Xe() {
        me.asyncTransitions--;
      }
      function Jt(g) {
        if (Ac === null)
          try {
            var N = ("require" + Math.random()).slice(0, 7);
            Ac = (b && b[N]).call(
              b,
              "timers"
            ).setImmediate;
          } catch {
            Ac = function(ue) {
              pr === !1 && (pr = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var ye = new MessageChannel();
              ye.port1.onmessage = ue, ye.port2.postMessage(void 0);
            };
          }
        return Ac(g);
      }
      function Yt(g) {
        return 1 < g.length && typeof AggregateError == "function" ? new AggregateError(g) : g[0];
      }
      function C(g, N) {
        N !== dn - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), dn = N;
      }
      function J(g, N, te) {
        var ue = me.actQueue;
        if (ue !== null)
          if (ue.length !== 0)
            try {
              ne(ue), Jt(function() {
                return J(g, N, te);
              });
              return;
            } catch (ye) {
              me.thrownErrors.push(ye);
            }
          else me.actQueue = null;
        0 < me.thrownErrors.length ? (ue = Yt(me.thrownErrors), me.thrownErrors.length = 0, te(ue)) : N(g);
      }
      function ne(g) {
        if (!Ga) {
          Ga = !0;
          var N = 0;
          try {
            for (; N < g.length; N++) {
              var te = g[N];
              do {
                me.didUsePromise = !1;
                var ue = te(!1);
                if (ue !== null) {
                  if (me.didUsePromise) {
                    g[N] = te, g.splice(0, N);
                    return;
                  }
                  te = ue;
                } else break;
              } while (!0);
            }
            g.length = 0;
          } catch (ye) {
            g.splice(0, N + 1), me.thrownErrors.push(ye);
          } finally {
            Ga = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var Te = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ue = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), q = /* @__PURE__ */ Symbol.for("react.strict_mode"), ee = /* @__PURE__ */ Symbol.for("react.profiler"), P = /* @__PURE__ */ Symbol.for("react.consumer"), Oe = /* @__PURE__ */ Symbol.for("react.context"), Ve = /* @__PURE__ */ Symbol.for("react.forward_ref"), De = /* @__PURE__ */ Symbol.for("react.suspense"), Kt = /* @__PURE__ */ Symbol.for("react.suspense_list"), gt = /* @__PURE__ */ Symbol.for("react.memo"), Ya = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.activity"), Ci = Symbol.iterator, Ui = {}, wa = {
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
      }, fu = Object.assign, vt = {};
      Object.freeze(vt), oe.prototype.isReactComponent = {}, oe.prototype.setState = function(g, N) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, g, N, "setState");
      }, oe.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      var ea = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Ni in ea)
        ea.hasOwnProperty(Ni) && le(Ni, ea[Ni]);
      pe.prototype = oe.prototype, ea = F.prototype = new pe(), ea.constructor = F, fu(ea, oe.prototype), ea.isPureReactComponent = !0;
      var Ec = Array.isArray, yr = /* @__PURE__ */ Symbol.for("react.client.reference"), me = {
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
      ea = {
        react_stack_bottom_frame: function(g) {
          return g();
        }
      };
      var Tc, Sl, ad = {}, No = ea.react_stack_bottom_frame.bind(
        ea,
        ze
      )(), xo = ru(z(ze)), Hn = !1, nd = /\/+/g, Bo = typeof reportError == "function" ? reportError : function(g) {
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
      }, pr = !1, Ac = null, dn = 0, Ol = !1, Ga = !1, Hl = typeof queueMicrotask == "function" ? function(g) {
        queueMicrotask(function() {
          return queueMicrotask(g);
        });
      } : Jt;
      ea = Object.freeze({
        __proto__: null,
        c: function(g) {
          return be().useMemoCache(g);
        }
      });
      var Ni = {
        map: he,
        forEach: function(g, N, te) {
          he(
            g,
            function() {
              N.apply(this, arguments);
            },
            te
          );
        },
        count: function(g) {
          var N = 0;
          return he(g, function() {
            N++;
          }), N;
        },
        toArray: function(g) {
          return he(g, function(N) {
            return N;
          }) || [];
        },
        only: function(g) {
          if (!Vt(g))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return g;
        }
      };
      H.Activity = re, H.Children = Ni, H.Component = oe, H.Fragment = S, H.Profiler = ee, H.PureComponent = F, H.StrictMode = q, H.Suspense = De, H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = me, H.__COMPILER_RUNTIME = ea, H.act = function(g) {
        var N = me.actQueue, te = dn;
        dn++;
        var ue = me.actQueue = N !== null ? N : [], ye = !1;
        try {
          var Ne = g();
        } catch (Ze) {
          me.thrownErrors.push(Ze);
        }
        if (0 < me.thrownErrors.length)
          throw C(N, te), g = Yt(me.thrownErrors), me.thrownErrors.length = 0, g;
        if (Ne !== null && typeof Ne == "object" && typeof Ne.then == "function") {
          var ge = Ne;
          return Hl(function() {
            ye || Ol || (Ol = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Ze, ta) {
              ye = !0, ge.then(
                function(hn) {
                  if (C(N, te), te === 0) {
                    try {
                      ne(ue), Jt(function() {
                        return J(
                          hn,
                          Ze,
                          ta
                        );
                      });
                    } catch (jo) {
                      me.thrownErrors.push(jo);
                    }
                    if (0 < me.thrownErrors.length) {
                      var xi = Yt(
                        me.thrownErrors
                      );
                      me.thrownErrors.length = 0, ta(xi);
                    }
                  } else Ze(hn);
                },
                function(hn) {
                  C(N, te), 0 < me.thrownErrors.length && (hn = Yt(
                    me.thrownErrors
                  ), me.thrownErrors.length = 0), ta(hn);
                }
              );
            }
          };
        }
        var at = Ne;
        if (C(N, te), te === 0 && (ne(ue), ue.length !== 0 && Hl(function() {
          ye || Ol || (Ol = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), me.actQueue = null), 0 < me.thrownErrors.length)
          throw g = Yt(me.thrownErrors), me.thrownErrors.length = 0, g;
        return {
          then: function(Ze, ta) {
            ye = !0, te === 0 ? (me.actQueue = ue, Jt(function() {
              return J(
                at,
                Ze,
                ta
              );
            })) : Ze(at);
          }
        };
      }, H.cache = function(g) {
        return function() {
          return g.apply(null, arguments);
        };
      }, H.cacheSignal = function() {
        return null;
      }, H.captureOwnerStack = function() {
        var g = me.getCurrentStack;
        return g === null ? null : g();
      }, H.cloneElement = function(g, N, te) {
        if (g == null)
          throw Error(
            "The argument must be a React element, but you passed " + g + "."
          );
        var ue = fu({}, g.props), ye = g.key, Ne = g._owner;
        if (N != null) {
          var ge;
          e: {
            if (Hi.call(N, "ref") && (ge = Object.getOwnPropertyDescriptor(
              N,
              "ref"
            ).get) && ge.isReactWarning) {
              ge = !1;
              break e;
            }
            ge = N.ref !== void 0;
          }
          ge && (Ne = ae()), je(N) && (Se(N.key), ye = "" + N.key);
          for (at in N)
            !Hi.call(N, at) || at === "key" || at === "__self" || at === "__source" || at === "ref" && N.ref === void 0 || (ue[at] = N[at]);
        }
        var at = arguments.length - 2;
        if (at === 1) ue.children = te;
        else if (1 < at) {
          ge = Array(at);
          for (var Ze = 0; Ze < at; Ze++)
            ge[Ze] = arguments[Ze + 2];
          ue.children = ge;
        }
        for (ue = cl(
          g.type,
          ye,
          ue,
          Ne,
          g._debugStack,
          g._debugTask
        ), ye = 2; ye < arguments.length; ye++)
          jt(arguments[ye]);
        return ue;
      }, H.createContext = function(g) {
        return g = {
          $$typeof: Oe,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, g.Provider = g, g.Consumer = {
          $$typeof: P,
          _context: g
        }, g._currentRenderer = null, g._currentRenderer2 = null, g;
      }, H.createElement = function(g, N, te) {
        for (var ue = 2; ue < arguments.length; ue++)
          jt(arguments[ue]);
        ue = {};
        var ye = null;
        if (N != null)
          for (Ze in Sl || !("__self" in N) || "key" in N || (Sl = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), je(N) && (Se(N.key), ye = "" + N.key), N)
            Hi.call(N, Ze) && Ze !== "key" && Ze !== "__self" && Ze !== "__source" && (ue[Ze] = N[Ze]);
        var Ne = arguments.length - 2;
        if (Ne === 1) ue.children = te;
        else if (1 < Ne) {
          for (var ge = Array(Ne), at = 0; at < Ne; at++)
            ge[at] = arguments[at + 2];
          Object.freeze && Object.freeze(ge), ue.children = ge;
        }
        if (g && g.defaultProps)
          for (Ze in Ne = g.defaultProps, Ne)
            ue[Ze] === void 0 && (ue[Ze] = Ne[Ze]);
        ye && it(
          ue,
          typeof g == "function" ? g.displayName || g.name || "Unknown" : g
        );
        var Ze = 1e4 > me.recentlyCreatedOwnerStacks++;
        return cl(
          g,
          ye,
          ue,
          ae(),
          Ze ? Error("react-stack-top-frame") : No,
          Ze ? ru(z(g)) : xo
        );
      }, H.createRef = function() {
        var g = { current: null };
        return Object.seal(g), g;
      }, H.forwardRef = function(g) {
        g != null && g.$$typeof === gt ? console.error(
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
        var N = { $$typeof: Ve, render: g }, te;
        return Object.defineProperty(N, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return te;
          },
          set: function(ue) {
            te = ue, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ue }), g.displayName = ue);
          }
        }), N;
      }, H.isValidElement = Vt, H.lazy = function(g) {
        g = { _status: -1, _result: g };
        var N = {
          $$typeof: Ya,
          _payload: g,
          _init: qt
        }, te = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return g._ioInfo = te, N._debugInfo = [{ awaited: te }], N;
      }, H.memo = function(g, N) {
        g == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          g === null ? "null" : typeof g
        ), N = {
          $$typeof: gt,
          type: g,
          compare: N === void 0 ? null : N
        };
        var te;
        return Object.defineProperty(N, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return te;
          },
          set: function(ue) {
            te = ue, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ue }), g.displayName = ue);
          }
        }), N;
      }, H.startTransition = function(g) {
        var N = me.T, te = {};
        te._updatedFibers = /* @__PURE__ */ new Set(), me.T = te;
        try {
          var ue = g(), ye = me.S;
          ye !== null && ye(te, ue), typeof ue == "object" && ue !== null && typeof ue.then == "function" && (me.asyncTransitions++, ue.then(Xe, Xe), ue.then(I, Bo));
        } catch (Ne) {
          Bo(Ne);
        } finally {
          N === null && te._updatedFibers && (g = te._updatedFibers.size, te._updatedFibers.clear(), 10 < g && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), N !== null && te.types !== null && (N.types !== null && N.types !== te.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), N.types = te.types), me.T = N;
        }
      }, H.unstable_useCacheRefresh = function() {
        return be().useCacheRefresh();
      }, H.use = function(g) {
        return be().use(g);
      }, H.useActionState = function(g, N, te) {
        return be().useActionState(
          g,
          N,
          te
        );
      }, H.useCallback = function(g, N) {
        return be().useCallback(g, N);
      }, H.useContext = function(g) {
        var N = be();
        return g.$$typeof === P && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), N.useContext(g);
      }, H.useDebugValue = function(g, N) {
        return be().useDebugValue(g, N);
      }, H.useDeferredValue = function(g, N) {
        return be().useDeferredValue(g, N);
      }, H.useEffect = function(g, N) {
        return g == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), be().useEffect(g, N);
      }, H.useEffectEvent = function(g) {
        return be().useEffectEvent(g);
      }, H.useId = function() {
        return be().useId();
      }, H.useImperativeHandle = function(g, N, te) {
        return be().useImperativeHandle(g, N, te);
      }, H.useInsertionEffect = function(g, N) {
        return g == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), be().useInsertionEffect(g, N);
      }, H.useLayoutEffect = function(g, N) {
        return g == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), be().useLayoutEffect(g, N);
      }, H.useMemo = function(g, N) {
        return be().useMemo(g, N);
      }, H.useOptimistic = function(g, N) {
        return be().useOptimistic(g, N);
      }, H.useReducer = function(g, N, te) {
        return be().useReducer(g, N, te);
      }, H.useRef = function(g) {
        return be().useRef(g);
      }, H.useState = function(g) {
        return be().useState(g);
      }, H.useSyncExternalStore = function(g, N, te) {
        return be().useSyncExternalStore(
          g,
          N,
          te
        );
      }, H.useTransition = function() {
        return be().useTransition();
      }, H.version = "19.2.8", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(R0, R0.exports)), R0.exports;
}
var LE;
function Om() {
  return LE || (LE = 1, process.env.NODE_ENV === "production" ? $v.exports = qT() : $v.exports = YT()), $v.exports;
}
var XE;
function wT() {
  return XE || (XE = 1, process.env.NODE_ENV !== "production" && (function() {
    function b(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === qt ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case it:
          return "Fragment";
        case cl:
          return "Profiler";
        case Ie:
          return "StrictMode";
        case Zt:
          return "Suspense";
        case Ce:
          return "SuspenseList";
        case he:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case je:
            return "Portal";
          case jt:
            return S.displayName || "Context";
          case Et:
            return (S._context.displayName || "Context") + ".Consumer";
          case Vt:
            var q = S.render;
            return S = S.displayName, S || (S = q.displayName || q.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case Qe:
            return q = S.displayName || null, q !== null ? q : b(S.type) || "Memo";
          case ot:
            q = S._payload, S = S._init;
            try {
              return b(S(q));
            } catch {
            }
        }
      return null;
    }
    function H(S) {
      return "" + S;
    }
    function le(S) {
      try {
        H(S);
        var q = !1;
      } catch {
        q = !0;
      }
      if (q) {
        q = console;
        var ee = q.error, P = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return ee.call(
          q,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), H(S);
      }
    }
    function T(S) {
      if (S === it) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === ot)
        return "<...>";
      try {
        var q = b(S);
        return q ? "<" + q + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function ie() {
      var S = be.A;
      return S === null ? null : S.getOwner();
    }
    function oe() {
      return Error("react-stack-top-frame");
    }
    function pe(S) {
      if (Xe.call(S, "key")) {
        var q = Object.getOwnPropertyDescriptor(S, "key").get;
        if (q && q.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function F(S, q) {
      function ee() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          q
        ));
      }
      ee.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: ee,
        configurable: !0
      });
    }
    function I() {
      var S = b(this.type);
      return J[S] || (J[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function V(S, q, ee, P, Oe, Ve) {
      var De = ee.ref;
      return S = {
        $$typeof: ze,
        type: S,
        key: q,
        props: ee,
        _owner: P
      }, (De !== void 0 ? De : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: I
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
        value: Oe
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ve
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function Se(S, q, ee, P, Oe, Ve) {
      var De = q.children;
      if (De !== void 0)
        if (P)
          if (Jt(De)) {
            for (P = 0; P < De.length; P++)
              j(De[P]);
            Object.freeze && Object.freeze(De);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(De);
      if (Xe.call(q, "key")) {
        De = b(S);
        var Kt = Object.keys(q).filter(function(Ya) {
          return Ya !== "key";
        });
        P = 0 < Kt.length ? "{key: someKey, " + Kt.join(": ..., ") + ": ...}" : "{key: someKey}", Ue[De + P] || (Kt = 0 < Kt.length ? "{" + Kt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          De,
          Kt,
          De
        ), Ue[De + P] = !0);
      }
      if (De = null, ee !== void 0 && (le(ee), De = "" + ee), pe(q) && (le(q.key), De = "" + q.key), "key" in q) {
        ee = {};
        for (var gt in q)
          gt !== "key" && (ee[gt] = q[gt]);
      } else ee = q;
      return De && F(
        ee,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), V(
        S,
        De,
        ee,
        ie(),
        Oe,
        Ve
      );
    }
    function j(S) {
      z(S) ? S._store && (S._store.validated = 1) : typeof S == "object" && S !== null && S.$$typeof === ot && (S._payload.status === "fulfilled" ? z(S._payload.value) && S._payload.value._store && (S._payload.value._store.validated = 1) : S._store && (S._store.validated = 1));
    }
    function z(S) {
      return typeof S == "object" && S !== null && S.$$typeof === ze;
    }
    var ae = Om(), ze = /* @__PURE__ */ Symbol.for("react.transitional.element"), je = /* @__PURE__ */ Symbol.for("react.portal"), it = /* @__PURE__ */ Symbol.for("react.fragment"), Ie = /* @__PURE__ */ Symbol.for("react.strict_mode"), cl = /* @__PURE__ */ Symbol.for("react.profiler"), Et = /* @__PURE__ */ Symbol.for("react.consumer"), jt = /* @__PURE__ */ Symbol.for("react.context"), Vt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Zt = /* @__PURE__ */ Symbol.for("react.suspense"), Ce = /* @__PURE__ */ Symbol.for("react.suspense_list"), Qe = /* @__PURE__ */ Symbol.for("react.memo"), ot = /* @__PURE__ */ Symbol.for("react.lazy"), he = /* @__PURE__ */ Symbol.for("react.activity"), qt = /* @__PURE__ */ Symbol.for("react.client.reference"), be = ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Xe = Object.prototype.hasOwnProperty, Jt = Array.isArray, Yt = console.createTask ? console.createTask : function() {
      return null;
    };
    ae = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var C, J = {}, ne = ae.react_stack_bottom_frame.bind(
      ae,
      oe
    )(), Te = Yt(T(oe)), Ue = {};
    E0.Fragment = it, E0.jsx = function(S, q, ee) {
      var P = 1e4 > be.recentlyCreatedOwnerStacks++;
      return Se(
        S,
        q,
        ee,
        !1,
        P ? Error("react-stack-top-frame") : ne,
        P ? Yt(T(S)) : Te
      );
    }, E0.jsxs = function(S, q, ee) {
      var P = 1e4 > be.recentlyCreatedOwnerStacks++;
      return Se(
        S,
        q,
        ee,
        !0,
        P ? Error("react-stack-top-frame") : ne,
        P ? Yt(T(S)) : Te
      );
    };
  })()), E0;
}
var QE;
function GT() {
  return QE || (QE = 1, process.env.NODE_ENV === "production" ? Kv.exports = jT() : Kv.exports = wT()), Kv.exports;
}
var Ee = GT(), ou = Om(), kv = { exports: {} }, T0 = {}, Wv = { exports: {} }, AS = {};
var VE;
function LT() {
  return VE || (VE = 1, (function(b) {
    function H(C, J) {
      var ne = C.length;
      C.push(J);
      e: for (; 0 < ne; ) {
        var Te = ne - 1 >>> 1, Ue = C[Te];
        if (0 < ie(Ue, J))
          C[Te] = J, C[ne] = Ue, ne = Te;
        else break e;
      }
    }
    function le(C) {
      return C.length === 0 ? null : C[0];
    }
    function T(C) {
      if (C.length === 0) return null;
      var J = C[0], ne = C.pop();
      if (ne !== J) {
        C[0] = ne;
        e: for (var Te = 0, Ue = C.length, S = Ue >>> 1; Te < S; ) {
          var q = 2 * (Te + 1) - 1, ee = C[q], P = q + 1, Oe = C[P];
          if (0 > ie(ee, ne))
            P < Ue && 0 > ie(Oe, ee) ? (C[Te] = Oe, C[P] = ne, Te = P) : (C[Te] = ee, C[q] = ne, Te = q);
          else if (P < Ue && 0 > ie(Oe, ne))
            C[Te] = Oe, C[P] = ne, Te = P;
          else break e;
        }
      }
      return J;
    }
    function ie(C, J) {
      var ne = C.sortIndex - J.sortIndex;
      return ne !== 0 ? ne : C.id - J.id;
    }
    if (b.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var oe = performance;
      b.unstable_now = function() {
        return oe.now();
      };
    } else {
      var pe = Date, F = pe.now();
      b.unstable_now = function() {
        return pe.now() - F;
      };
    }
    var I = [], V = [], Se = 1, j = null, z = 3, ae = !1, ze = !1, je = !1, it = !1, Ie = typeof setTimeout == "function" ? setTimeout : null, cl = typeof clearTimeout == "function" ? clearTimeout : null, Et = typeof setImmediate < "u" ? setImmediate : null;
    function jt(C) {
      for (var J = le(V); J !== null; ) {
        if (J.callback === null) T(V);
        else if (J.startTime <= C)
          T(V), J.sortIndex = J.expirationTime, H(I, J);
        else break;
        J = le(V);
      }
    }
    function Vt(C) {
      if (je = !1, jt(C), !ze)
        if (le(I) !== null)
          ze = !0, Zt || (Zt = !0, be());
        else {
          var J = le(V);
          J !== null && Yt(Vt, J.startTime - C);
        }
    }
    var Zt = !1, Ce = -1, Qe = 5, ot = -1;
    function he() {
      return it ? !0 : !(b.unstable_now() - ot < Qe);
    }
    function qt() {
      if (it = !1, Zt) {
        var C = b.unstable_now();
        ot = C;
        var J = !0;
        try {
          e: {
            ze = !1, je && (je = !1, cl(Ce), Ce = -1), ae = !0;
            var ne = z;
            try {
              t: {
                for (jt(C), j = le(I); j !== null && !(j.expirationTime > C && he()); ) {
                  var Te = j.callback;
                  if (typeof Te == "function") {
                    j.callback = null, z = j.priorityLevel;
                    var Ue = Te(
                      j.expirationTime <= C
                    );
                    if (C = b.unstable_now(), typeof Ue == "function") {
                      j.callback = Ue, jt(C), J = !0;
                      break t;
                    }
                    j === le(I) && T(I), jt(C);
                  } else T(I);
                  j = le(I);
                }
                if (j !== null) J = !0;
                else {
                  var S = le(V);
                  S !== null && Yt(
                    Vt,
                    S.startTime - C
                  ), J = !1;
                }
              }
              break e;
            } finally {
              j = null, z = ne, ae = !1;
            }
            J = void 0;
          }
        } finally {
          J ? be() : Zt = !1;
        }
      }
    }
    var be;
    if (typeof Et == "function")
      be = function() {
        Et(qt);
      };
    else if (typeof MessageChannel < "u") {
      var Xe = new MessageChannel(), Jt = Xe.port2;
      Xe.port1.onmessage = qt, be = function() {
        Jt.postMessage(null);
      };
    } else
      be = function() {
        Ie(qt, 0);
      };
    function Yt(C, J) {
      Ce = Ie(function() {
        C(b.unstable_now());
      }, J);
    }
    b.unstable_IdlePriority = 5, b.unstable_ImmediatePriority = 1, b.unstable_LowPriority = 4, b.unstable_NormalPriority = 3, b.unstable_Profiling = null, b.unstable_UserBlockingPriority = 2, b.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, b.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Qe = 0 < C ? Math.floor(1e3 / C) : 5;
    }, b.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, b.unstable_next = function(C) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = z;
      }
      var ne = z;
      z = J;
      try {
        return C();
      } finally {
        z = ne;
      }
    }, b.unstable_requestPaint = function() {
      it = !0;
    }, b.unstable_runWithPriority = function(C, J) {
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
      var ne = z;
      z = C;
      try {
        return J();
      } finally {
        z = ne;
      }
    }, b.unstable_scheduleCallback = function(C, J, ne) {
      var Te = b.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? Te + ne : Te) : ne = Te, C) {
        case 1:
          var Ue = -1;
          break;
        case 2:
          Ue = 250;
          break;
        case 5:
          Ue = 1073741823;
          break;
        case 4:
          Ue = 1e4;
          break;
        default:
          Ue = 5e3;
      }
      return Ue = ne + Ue, C = {
        id: Se++,
        callback: J,
        priorityLevel: C,
        startTime: ne,
        expirationTime: Ue,
        sortIndex: -1
      }, ne > Te ? (C.sortIndex = ne, H(V, C), le(I) === null && C === le(V) && (je ? (cl(Ce), Ce = -1) : je = !0, Yt(Vt, ne - Te))) : (C.sortIndex = Ue, H(I, C), ze || ae || (ze = !0, Zt || (Zt = !0, be()))), C;
    }, b.unstable_shouldYield = he, b.unstable_wrapCallback = function(C) {
      var J = z;
      return function() {
        var ne = z;
        z = J;
        try {
          return C.apply(this, arguments);
        } finally {
          z = ne;
        }
      };
    };
  })(AS)), AS;
}
var OS = {};
var ZE;
function XT() {
  return ZE || (ZE = 1, (function(b) {
    process.env.NODE_ENV !== "production" && (function() {
      function H() {
        if (Vt = !1, ot) {
          var C = b.unstable_now();
          be = C;
          var J = !0;
          try {
            e: {
              Et = !1, jt && (jt = !1, Ce(he), he = -1), cl = !0;
              var ne = Ie;
              try {
                t: {
                  for (pe(C), it = T(ae); it !== null && !(it.expirationTime > C && I()); ) {
                    var Te = it.callback;
                    if (typeof Te == "function") {
                      it.callback = null, Ie = it.priorityLevel;
                      var Ue = Te(
                        it.expirationTime <= C
                      );
                      if (C = b.unstable_now(), typeof Ue == "function") {
                        it.callback = Ue, pe(C), J = !0;
                        break t;
                      }
                      it === T(ae) && ie(ae), pe(C);
                    } else ie(ae);
                    it = T(ae);
                  }
                  if (it !== null) J = !0;
                  else {
                    var S = T(ze);
                    S !== null && V(
                      F,
                      S.startTime - C
                    ), J = !1;
                  }
                }
                break e;
              } finally {
                it = null, Ie = ne, cl = !1;
              }
              J = void 0;
            }
          } finally {
            J ? Xe() : ot = !1;
          }
        }
      }
      function le(C, J) {
        var ne = C.length;
        C.push(J);
        e: for (; 0 < ne; ) {
          var Te = ne - 1 >>> 1, Ue = C[Te];
          if (0 < oe(Ue, J))
            C[Te] = J, C[ne] = Ue, ne = Te;
          else break e;
        }
      }
      function T(C) {
        return C.length === 0 ? null : C[0];
      }
      function ie(C) {
        if (C.length === 0) return null;
        var J = C[0], ne = C.pop();
        if (ne !== J) {
          C[0] = ne;
          e: for (var Te = 0, Ue = C.length, S = Ue >>> 1; Te < S; ) {
            var q = 2 * (Te + 1) - 1, ee = C[q], P = q + 1, Oe = C[P];
            if (0 > oe(ee, ne))
              P < Ue && 0 > oe(Oe, ee) ? (C[Te] = Oe, C[P] = ne, Te = P) : (C[Te] = ee, C[q] = ne, Te = q);
            else if (P < Ue && 0 > oe(Oe, ne))
              C[Te] = Oe, C[P] = ne, Te = P;
            else break e;
          }
        }
        return J;
      }
      function oe(C, J) {
        var ne = C.sortIndex - J.sortIndex;
        return ne !== 0 ? ne : C.id - J.id;
      }
      function pe(C) {
        for (var J = T(ze); J !== null; ) {
          if (J.callback === null) ie(ze);
          else if (J.startTime <= C)
            ie(ze), J.sortIndex = J.expirationTime, le(ae, J);
          else break;
          J = T(ze);
        }
      }
      function F(C) {
        if (jt = !1, pe(C), !Et)
          if (T(ae) !== null)
            Et = !0, ot || (ot = !0, Xe());
          else {
            var J = T(ze);
            J !== null && V(
              F,
              J.startTime - C
            );
          }
      }
      function I() {
        return Vt ? !0 : !(b.unstable_now() - be < qt);
      }
      function V(C, J) {
        he = Zt(function() {
          C(b.unstable_now());
        }, J);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), b.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Se = performance;
        b.unstable_now = function() {
          return Se.now();
        };
      } else {
        var j = Date, z = j.now();
        b.unstable_now = function() {
          return j.now() - z;
        };
      }
      var ae = [], ze = [], je = 1, it = null, Ie = 3, cl = !1, Et = !1, jt = !1, Vt = !1, Zt = typeof setTimeout == "function" ? setTimeout : null, Ce = typeof clearTimeout == "function" ? clearTimeout : null, Qe = typeof setImmediate < "u" ? setImmediate : null, ot = !1, he = -1, qt = 5, be = -1;
      if (typeof Qe == "function")
        var Xe = function() {
          Qe(H);
        };
      else if (typeof MessageChannel < "u") {
        var Jt = new MessageChannel(), Yt = Jt.port2;
        Jt.port1.onmessage = H, Xe = function() {
          Yt.postMessage(null);
        };
      } else
        Xe = function() {
          Zt(H, 0);
        };
      b.unstable_IdlePriority = 5, b.unstable_ImmediatePriority = 1, b.unstable_LowPriority = 4, b.unstable_NormalPriority = 3, b.unstable_Profiling = null, b.unstable_UserBlockingPriority = 2, b.unstable_cancelCallback = function(C) {
        C.callback = null;
      }, b.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : qt = 0 < C ? Math.floor(1e3 / C) : 5;
      }, b.unstable_getCurrentPriorityLevel = function() {
        return Ie;
      }, b.unstable_next = function(C) {
        switch (Ie) {
          case 1:
          case 2:
          case 3:
            var J = 3;
            break;
          default:
            J = Ie;
        }
        var ne = Ie;
        Ie = J;
        try {
          return C();
        } finally {
          Ie = ne;
        }
      }, b.unstable_requestPaint = function() {
        Vt = !0;
      }, b.unstable_runWithPriority = function(C, J) {
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
        var ne = Ie;
        Ie = C;
        try {
          return J();
        } finally {
          Ie = ne;
        }
      }, b.unstable_scheduleCallback = function(C, J, ne) {
        var Te = b.unstable_now();
        switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? Te + ne : Te) : ne = Te, C) {
          case 1:
            var Ue = -1;
            break;
          case 2:
            Ue = 250;
            break;
          case 5:
            Ue = 1073741823;
            break;
          case 4:
            Ue = 1e4;
            break;
          default:
            Ue = 5e3;
        }
        return Ue = ne + Ue, C = {
          id: je++,
          callback: J,
          priorityLevel: C,
          startTime: ne,
          expirationTime: Ue,
          sortIndex: -1
        }, ne > Te ? (C.sortIndex = ne, le(ze, C), T(ae) === null && C === T(ze) && (jt ? (Ce(he), he = -1) : jt = !0, V(F, ne - Te))) : (C.sortIndex = Ue, le(ae, C), Et || cl || (Et = !0, ot || (ot = !0, Xe()))), C;
      }, b.unstable_shouldYield = I, b.unstable_wrapCallback = function(C) {
        var J = Ie;
        return function() {
          var ne = Ie;
          Ie = J;
          try {
            return C.apply(this, arguments);
          } finally {
            Ie = ne;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(OS)), OS;
}
var JE;
function f2() {
  return JE || (JE = 1, process.env.NODE_ENV === "production" ? Wv.exports = LT() : Wv.exports = XT()), Wv.exports;
}
var Fv = { exports: {} }, ja = {};
var KE;
function QT() {
  if (KE) return ja;
  KE = 1;
  var b = Om();
  function H(I) {
    var V = "https://react.dev/errors/" + I;
    if (1 < arguments.length) {
      V += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Se = 2; Se < arguments.length; Se++)
        V += "&args[]=" + encodeURIComponent(arguments[Se]);
    }
    return "Minified React error #" + I + "; visit " + V + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function le() {
  }
  var T = {
    d: {
      f: le,
      r: function() {
        throw Error(H(522));
      },
      D: le,
      C: le,
      L: le,
      m: le,
      X: le,
      S: le,
      M: le
    },
    p: 0,
    findDOMNode: null
  }, ie = /* @__PURE__ */ Symbol.for("react.portal");
  function oe(I, V, Se) {
    var j = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ie,
      key: j == null ? null : "" + j,
      children: I,
      containerInfo: V,
      implementation: Se
    };
  }
  var pe = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function F(I, V) {
    if (I === "font") return "";
    if (typeof V == "string")
      return V === "use-credentials" ? V : "";
  }
  return ja.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, ja.createPortal = function(I, V) {
    var Se = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!V || V.nodeType !== 1 && V.nodeType !== 9 && V.nodeType !== 11)
      throw Error(H(299));
    return oe(I, V, null, Se);
  }, ja.flushSync = function(I) {
    var V = pe.T, Se = T.p;
    try {
      if (pe.T = null, T.p = 2, I) return I();
    } finally {
      pe.T = V, T.p = Se, T.d.f();
    }
  }, ja.preconnect = function(I, V) {
    typeof I == "string" && (V ? (V = V.crossOrigin, V = typeof V == "string" ? V === "use-credentials" ? V : "" : void 0) : V = null, T.d.C(I, V));
  }, ja.prefetchDNS = function(I) {
    typeof I == "string" && T.d.D(I);
  }, ja.preinit = function(I, V) {
    if (typeof I == "string" && V && typeof V.as == "string") {
      var Se = V.as, j = F(Se, V.crossOrigin), z = typeof V.integrity == "string" ? V.integrity : void 0, ae = typeof V.fetchPriority == "string" ? V.fetchPriority : void 0;
      Se === "style" ? T.d.S(
        I,
        typeof V.precedence == "string" ? V.precedence : void 0,
        {
          crossOrigin: j,
          integrity: z,
          fetchPriority: ae
        }
      ) : Se === "script" && T.d.X(I, {
        crossOrigin: j,
        integrity: z,
        fetchPriority: ae,
        nonce: typeof V.nonce == "string" ? V.nonce : void 0
      });
    }
  }, ja.preinitModule = function(I, V) {
    if (typeof I == "string")
      if (typeof V == "object" && V !== null) {
        if (V.as == null || V.as === "script") {
          var Se = F(
            V.as,
            V.crossOrigin
          );
          T.d.M(I, {
            crossOrigin: Se,
            integrity: typeof V.integrity == "string" ? V.integrity : void 0,
            nonce: typeof V.nonce == "string" ? V.nonce : void 0
          });
        }
      } else V == null && T.d.M(I);
  }, ja.preload = function(I, V) {
    if (typeof I == "string" && typeof V == "object" && V !== null && typeof V.as == "string") {
      var Se = V.as, j = F(Se, V.crossOrigin);
      T.d.L(I, Se, {
        crossOrigin: j,
        integrity: typeof V.integrity == "string" ? V.integrity : void 0,
        nonce: typeof V.nonce == "string" ? V.nonce : void 0,
        type: typeof V.type == "string" ? V.type : void 0,
        fetchPriority: typeof V.fetchPriority == "string" ? V.fetchPriority : void 0,
        referrerPolicy: typeof V.referrerPolicy == "string" ? V.referrerPolicy : void 0,
        imageSrcSet: typeof V.imageSrcSet == "string" ? V.imageSrcSet : void 0,
        imageSizes: typeof V.imageSizes == "string" ? V.imageSizes : void 0,
        media: typeof V.media == "string" ? V.media : void 0
      });
    }
  }, ja.preloadModule = function(I, V) {
    if (typeof I == "string")
      if (V) {
        var Se = F(V.as, V.crossOrigin);
        T.d.m(I, {
          as: typeof V.as == "string" && V.as !== "script" ? V.as : void 0,
          crossOrigin: Se,
          integrity: typeof V.integrity == "string" ? V.integrity : void 0
        });
      } else T.d.m(I);
  }, ja.requestFormReset = function(I) {
    T.d.r(I);
  }, ja.unstable_batchedUpdates = function(I, V) {
    return I(V);
  }, ja.useFormState = function(I, V, Se) {
    return pe.H.useFormState(I, V, Se);
  }, ja.useFormStatus = function() {
    return pe.H.useHostTransitionStatus();
  }, ja.version = "19.2.8", ja;
}
var qa = {};
var $E;
function VT() {
  return $E || ($E = 1, process.env.NODE_ENV !== "production" && (function() {
    function b() {
    }
    function H(j) {
      return "" + j;
    }
    function le(j, z, ae) {
      var ze = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        H(ze);
        var je = !1;
      } catch {
        je = !0;
      }
      return je && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && ze[Symbol.toStringTag] || ze.constructor.name || "Object"
      ), H(ze)), {
        $$typeof: V,
        key: ze == null ? null : "" + ze,
        children: j,
        containerInfo: z,
        implementation: ae
      };
    }
    function T(j, z) {
      if (j === "font") return "";
      if (typeof z == "string")
        return z === "use-credentials" ? z : "";
    }
    function ie(j) {
      return j === null ? "`null`" : j === void 0 ? "`undefined`" : j === "" ? "an empty string" : 'something with type "' + typeof j + '"';
    }
    function oe(j) {
      return j === null ? "`null`" : j === void 0 ? "`undefined`" : j === "" ? "an empty string" : typeof j == "string" ? JSON.stringify(j) : typeof j == "number" ? "`" + j + "`" : 'something with type "' + typeof j + '"';
    }
    function pe() {
      var j = Se.H;
      return j === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), j;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var F = Om(), I = {
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
    }, V = /* @__PURE__ */ Symbol.for("react.portal"), Se = F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), qa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, qa.createPortal = function(j, z) {
      var ae = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return le(j, z, null, ae);
    }, qa.flushSync = function(j) {
      var z = Se.T, ae = I.p;
      try {
        if (Se.T = null, I.p = 2, j)
          return j();
      } finally {
        Se.T = z, I.p = ae, I.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, qa.preconnect = function(j, z) {
      typeof j == "string" && j ? z != null && typeof z != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        oe(z)
      ) : z != null && typeof z.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        ie(z.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        ie(j)
      ), typeof j == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, I.d.C(j, z));
    }, qa.prefetchDNS = function(j) {
      if (typeof j != "string" || !j)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          ie(j)
        );
      else if (1 < arguments.length) {
        var z = arguments[1];
        typeof z == "object" && z.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          oe(z)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          oe(z)
        );
      }
      typeof j == "string" && I.d.D(j);
    }, qa.preinit = function(j, z) {
      if (typeof j == "string" && j ? z == null || typeof z != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        oe(z)
      ) : z.as !== "style" && z.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        oe(z.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        ie(j)
      ), typeof j == "string" && z && typeof z.as == "string") {
        var ae = z.as, ze = T(ae, z.crossOrigin), je = typeof z.integrity == "string" ? z.integrity : void 0, it = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
        ae === "style" ? I.d.S(
          j,
          typeof z.precedence == "string" ? z.precedence : void 0,
          {
            crossOrigin: ze,
            integrity: je,
            fetchPriority: it
          }
        ) : ae === "script" && I.d.X(j, {
          crossOrigin: ze,
          integrity: je,
          fetchPriority: it,
          nonce: typeof z.nonce == "string" ? z.nonce : void 0
        });
      }
    }, qa.preinitModule = function(j, z) {
      var ae = "";
      typeof j == "string" && j || (ae += " The `href` argument encountered was " + ie(j) + "."), z !== void 0 && typeof z != "object" ? ae += " The `options` argument encountered was " + ie(z) + "." : z && "as" in z && z.as !== "script" && (ae += " The `as` option encountered was " + oe(z.as) + "."), ae ? console.error(
        "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
        ae
      ) : (ae = z && typeof z.as == "string" ? z.as : "script", ae) === "script" || (ae = oe(ae), console.error(
        'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
        ae,
        j
      )), typeof j == "string" && (typeof z == "object" && z !== null ? (z.as == null || z.as === "script") && (ae = T(
        z.as,
        z.crossOrigin
      ), I.d.M(j, {
        crossOrigin: ae,
        integrity: typeof z.integrity == "string" ? z.integrity : void 0,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0
      })) : z == null && I.d.M(j));
    }, qa.preload = function(j, z) {
      var ae = "";
      if (typeof j == "string" && j || (ae += " The `href` argument encountered was " + ie(j) + "."), z == null || typeof z != "object" ? ae += " The `options` argument encountered was " + ie(z) + "." : typeof z.as == "string" && z.as || (ae += " The `as` option encountered was " + ie(z.as) + "."), ae && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ae
      ), typeof j == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
        ae = z.as;
        var ze = T(
          ae,
          z.crossOrigin
        );
        I.d.L(j, ae, {
          crossOrigin: ze,
          integrity: typeof z.integrity == "string" ? z.integrity : void 0,
          nonce: typeof z.nonce == "string" ? z.nonce : void 0,
          type: typeof z.type == "string" ? z.type : void 0,
          fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0,
          referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0,
          imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0,
          imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0,
          media: typeof z.media == "string" ? z.media : void 0
        });
      }
    }, qa.preloadModule = function(j, z) {
      var ae = "";
      typeof j == "string" && j || (ae += " The `href` argument encountered was " + ie(j) + "."), z !== void 0 && typeof z != "object" ? ae += " The `options` argument encountered was " + ie(z) + "." : z && "as" in z && typeof z.as != "string" && (ae += " The `as` option encountered was " + ie(z.as) + "."), ae && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ae
      ), typeof j == "string" && (z ? (ae = T(
        z.as,
        z.crossOrigin
      ), I.d.m(j, {
        as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
        crossOrigin: ae,
        integrity: typeof z.integrity == "string" ? z.integrity : void 0
      })) : I.d.m(j));
    }, qa.requestFormReset = function(j) {
      I.d.r(j);
    }, qa.unstable_batchedUpdates = function(j, z) {
      return j(z);
    }, qa.useFormState = function(j, z, ae) {
      return pe().useFormState(j, z, ae);
    }, qa.useFormStatus = function() {
      return pe().useHostTransitionStatus();
    }, qa.version = "19.2.8", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), qa;
}
var kE;
function r2() {
  if (kE) return Fv.exports;
  kE = 1;
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
  return process.env.NODE_ENV === "production" ? (b(), Fv.exports = QT()) : Fv.exports = VT(), Fv.exports;
}
var WE;
function ZT() {
  if (WE) return T0;
  WE = 1;
  var b = f2(), H = Om(), le = r2();
  function T(l) {
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
  function oe(l) {
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
  function pe(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function F(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function I(l) {
    if (oe(l) !== l)
      throw Error(T(188));
  }
  function V(l) {
    var n = l.alternate;
    if (!n) {
      if (n = oe(l), n === null) throw Error(T(188));
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
          if (s === u) return I(r), l;
          if (s === c) return I(r), n;
          s = s.sibling;
        }
        throw Error(T(188));
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
          if (!m) throw Error(T(189));
        }
      }
      if (u.alternate !== c) throw Error(T(190));
    }
    if (u.tag !== 3) throw Error(T(188));
    return u.stateNode.current === u ? l : n;
  }
  function Se(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Se(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var j = Object.assign, z = /* @__PURE__ */ Symbol.for("react.element"), ae = /* @__PURE__ */ Symbol.for("react.transitional.element"), ze = /* @__PURE__ */ Symbol.for("react.portal"), je = /* @__PURE__ */ Symbol.for("react.fragment"), it = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ie = /* @__PURE__ */ Symbol.for("react.profiler"), cl = /* @__PURE__ */ Symbol.for("react.consumer"), Et = /* @__PURE__ */ Symbol.for("react.context"), jt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Vt = /* @__PURE__ */ Symbol.for("react.suspense"), Zt = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ce = /* @__PURE__ */ Symbol.for("react.memo"), Qe = /* @__PURE__ */ Symbol.for("react.lazy"), ot = /* @__PURE__ */ Symbol.for("react.activity"), he = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), qt = Symbol.iterator;
  function be(l) {
    return l === null || typeof l != "object" ? null : (l = qt && l[qt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Xe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Jt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Xe ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case je:
        return "Fragment";
      case Ie:
        return "Profiler";
      case it:
        return "StrictMode";
      case Vt:
        return "Suspense";
      case Zt:
        return "SuspenseList";
      case ot:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ze:
          return "Portal";
        case Et:
          return l.displayName || "Context";
        case cl:
          return (l._context.displayName || "Context") + ".Consumer";
        case jt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Ce:
          return n = l.displayName || null, n !== null ? n : Jt(l.type) || "Memo";
        case Qe:
          n = l._payload, l = l._init;
          try {
            return Jt(l(n));
          } catch {
          }
      }
    return null;
  }
  var Yt = Array.isArray, C = H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Te = [], Ue = -1;
  function S(l) {
    return { current: l };
  }
  function q(l) {
    0 > Ue || (l.current = Te[Ue], Te[Ue] = null, Ue--);
  }
  function ee(l, n) {
    Ue++, Te[Ue] = l.current, l.current = n;
  }
  var P = S(null), Oe = S(null), Ve = S(null), De = S(null);
  function Kt(l, n) {
    switch (ee(Ve, n), ee(Oe, l), ee(P, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Yg(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Yg(n), l = yp(n, l);
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
    q(P), ee(P, l);
  }
  function gt() {
    q(P), q(Oe), q(Ve);
  }
  function Ya(l) {
    l.memoizedState !== null && ee(De, l);
    var n = P.current, u = yp(n, l.type);
    n !== u && (ee(Oe, l), ee(P, u));
  }
  function re(l) {
    Oe.current === l && (q(P), q(Oe)), De.current === l && (q(De), Ms._currentValue = ne);
  }
  var Ci, Ui;
  function wa(l) {
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
  function vt(l, n) {
    if (!l || fu) return "";
    fu = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var k = function() {
                throw Error();
              };
              if (Object.defineProperty(k.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(k, []);
                } catch (Q) {
                  var w = Q;
                }
                Reflect.construct(l, [], k);
              } else {
                try {
                  k.call();
                } catch (Q) {
                  w = Q;
                }
                l.call(k.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Q) {
                w = Q;
              }
              (k = l()) && typeof k.catch == "function" && k.catch(function() {
              });
            }
          } catch (Q) {
            if (Q && w && typeof Q.stack == "string")
              return [Q.stack, w.stack];
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
`), Y = v.split(`
`);
        for (r = c = 0; c < R.length && !R[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; r < Y.length && !Y[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (c === R.length || r === Y.length)
          for (c = R.length - 1, r = Y.length - 1; 1 <= c && 0 <= r && R[c] !== Y[r]; )
            r--;
        for (; 1 <= c && 0 <= r; c--, r--)
          if (R[c] !== Y[r]) {
            if (c !== 1 || r !== 1)
              do
                if (c--, r--, 0 > r || R[c] !== Y[r]) {
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
    return (u = l ? l.displayName || l.name : "") ? wa(u) : "";
  }
  function ea(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return wa(l.type);
      case 16:
        return wa("Lazy");
      case 13:
        return l.child !== n && n !== null ? wa("Suspense Fallback") : wa("Suspense");
      case 19:
        return wa("SuspenseList");
      case 0:
      case 15:
        return vt(l.type, !1);
      case 11:
        return vt(l.type.render, !1);
      case 1:
        return vt(l.type, !0);
      case 31:
        return wa("Activity");
      default:
        return "";
    }
  }
  function Ec(l) {
    try {
      var n = "", u = null;
      do
        n += ea(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var yr = Object.prototype.hasOwnProperty, me = b.unstable_scheduleCallback, Hi = b.unstable_cancelCallback, ru = b.unstable_shouldYield, Tc = b.unstable_requestPaint, Sl = b.unstable_now, ad = b.unstable_getCurrentPriorityLevel, No = b.unstable_ImmediatePriority, xo = b.unstable_UserBlockingPriority, Hn = b.unstable_NormalPriority, nd = b.unstable_LowPriority, Bo = b.unstable_IdlePriority, pr = b.log, Ac = b.unstable_setDisableYieldValue, dn = null, Ol = null;
  function Ga(l) {
    if (typeof pr == "function" && Ac(l), Ol && typeof Ol.setStrictMode == "function")
      try {
        Ol.setStrictMode(dn, l);
      } catch {
      }
  }
  var Hl = Math.clz32 ? Math.clz32 : N, Ni = Math.log, g = Math.LN2;
  function N(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Ni(l) / g | 0) | 0;
  }
  var te = 256, ue = 262144, ye = 4194304;
  function Ne(l) {
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
  function ge(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var r = 0, s = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var v = c & 134217727;
    return v !== 0 ? (c = v & ~s, c !== 0 ? r = Ne(c) : (m &= v, m !== 0 ? r = Ne(m) : u || (u = v & ~l, u !== 0 && (r = Ne(u))))) : (v = c & ~s, v !== 0 ? r = Ne(v) : m !== 0 ? r = Ne(m) : u || (u = c & ~l, u !== 0 && (r = Ne(u)))), r === 0 ? 0 : n !== 0 && n !== r && (n & s) === 0 && (s = r & -r, u = n & -n, s >= u || s === 32 && (u & 4194048) !== 0) ? n : r;
  }
  function at(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function Ze(l, n) {
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
  function ta() {
    var l = ye;
    return ye <<= 1, (ye & 62914560) === 0 && (ye = 4194304), l;
  }
  function hn(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function xi(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function jo(l, n, u, c, r, s) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, R = l.expirationTimes, Y = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var Z = 31 - Hl(u), k = 1 << Z;
      v[Z] = 0, R[Z] = -1;
      var w = Y[Z];
      if (w !== null)
        for (Y[Z] = null, Z = 0; Z < w.length; Z++) {
          var Q = w[Z];
          Q !== null && (Q.lane &= -536870913);
        }
      u &= ~k;
    }
    c !== 0 && gr(l, c, 0), s !== 0 && r === 0 && l.tag !== 0 && (l.suspendedLanes |= s & ~(m & ~n));
  }
  function gr(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Hl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function su(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Hl(u), r = 1 << c;
      r & n | l[c] & n && (l[c] |= n), u &= ~r;
    }
  }
  function La(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : ud(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function ud(l) {
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
  function Rm(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function id() {
    var l = J.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Cs(l.type));
  }
  function _m(l, n) {
    var u = J.p;
    try {
      return J.p = l, n();
    } finally {
      J.p = u;
    }
  }
  var Nn = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + Nn, ra = "__reactProps$" + Nn, Bi = "__reactContainer$" + Nn, cd = "__reactEvents$" + Nn, zm = "__reactListeners$" + Nn, _0 = "__reactHandles$" + Nn, Dm = "__reactResources$" + Nn, du = "__reactMarker$" + Nn;
  function od(l) {
    delete l[Ct], delete l[ra], delete l[cd], delete l[zm], delete l[_0];
  }
  function Oc(l) {
    var n = l[Ct];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Bi] || u[Ct]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = eu(l); l !== null; ) {
            if (u = l[Ct]) return u;
            l = eu(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Rc(l) {
    if (l = l[Ct] || l[Bi]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function qo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(T(33));
  }
  function _c(l) {
    var n = l[Dm];
    return n || (n = l[Dm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Rt(l) {
    l[du] = !0;
  }
  var zc = /* @__PURE__ */ new Set(), ji = {};
  function qi(l, n) {
    hu(l, n), hu(l + "Capture", n);
  }
  function hu(l, n) {
    for (ji[l] = n, l = 0; l < n.length; l++)
      zc.add(n[l]);
  }
  var fd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), rd = {}, Yo = {};
  function wo(l) {
    return yr.call(Yo, l) ? !0 : yr.call(rd, l) ? !1 : fd.test(l) ? Yo[l] = !0 : (rd[l] = !0, !1);
  }
  function Go(l, n, u) {
    if (wo(n))
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
  function sd(l, n, u) {
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
  function Xa(l) {
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
  function dd(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Mm(l, n, u) {
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
  function hd(l) {
    if (!l._valueTracker) {
      var n = dd(l) ? "checked" : "value";
      l._valueTracker = Mm(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function Cm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = dd(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function vr(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Iv = /[\n"\\]/g;
  function Qa(l) {
    return l.replace(
      Iv,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Sr(l, n, u, c, r, s, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Xa(n)) : l.value !== "" + Xa(n) && (l.value = "" + Xa(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? Dc(l, m, Xa(n)) : u != null ? Dc(l, m, Xa(u)) : c != null && l.removeAttribute("value"), r == null && s != null && (l.defaultChecked = !!s), r != null && (l.checked = r && typeof r != "function" && typeof r != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + Xa(v) : l.removeAttribute("name");
  }
  function br(l, n, u, c, r, s, m, v) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (l.type = s), n != null || u != null) {
      if (!(s !== "submit" && s !== "reset" || n != null)) {
        hd(l);
        return;
      }
      u = u != null ? "" + Xa(u) : "", n = n != null ? "" + Xa(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? r, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = v ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), hd(l);
  }
  function Dc(l, n, u) {
    n === "number" && vr(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Lo(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var r = 0; r < u.length; r++)
        n["$" + u[r]] = !0;
      for (u = 0; u < l.length; u++)
        r = n.hasOwnProperty("$" + l[u].value), l[u].selected !== r && (l[u].selected = r), r && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Xa(u), n = null, r = 0; r < l.length; r++) {
        if (l[r].value === u) {
          l[r].selected = !0, c && (l[r].defaultSelected = !0);
          return;
        }
        n !== null || l[r].disabled || (n = l[r]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Um(l, n, u) {
    if (n != null && (n = "" + Xa(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Xa(u) : "";
  }
  function Hm(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(T(92));
        if (Yt(c)) {
          if (1 < c.length) throw Error(T(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Xa(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), hd(l);
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
  var z0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function D0(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || z0.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function M0(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(T(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var r in n)
        c = n[r], n.hasOwnProperty(r) && u[r] !== c && D0(l, r, c);
    } else
      for (var s in n)
        n.hasOwnProperty(s) && D0(l, s, n[s]);
  }
  function Nm(l) {
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
  var Pv = /* @__PURE__ */ new Map([
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
  ]), Er = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function mn(l) {
    return Er.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function xn() {
  }
  var md = null;
  function yd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var yu = null, Mc = null;
  function Tr(l) {
    var n = Rc(l);
    if (n && (l = n.stateNode)) {
      var u = l[ra] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (Sr(
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
              'input[name="' + Qa(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var r = c[ra] || null;
                if (!r) throw Error(T(90));
                Sr(
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
              c = u[n], c.form === l.form && Cm(c);
          }
          break e;
        case "textarea":
          Um(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && Lo(l, !!u.multiple, n, !1);
      }
    }
  }
  var Xo = !1;
  function xm(l, n, u) {
    if (Xo) return l(n, u);
    Xo = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Xo = !1, (yu !== null || Mc !== null) && (Rf(), yu && (n = yu, l = Mc, Mc = yu = null, Tr(n), l)))
        for (n = 0; n < l.length; n++) Tr(l[n]);
    }
  }
  function Nl(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[ra] || null;
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
        T(231, n, typeof u)
      );
    return u;
  }
  var li = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ar = !1;
  if (li)
    try {
      var Qo = {};
      Object.defineProperty(Qo, "passive", {
        get: function() {
          Ar = !0;
        }
      }), window.addEventListener("test", Qo, Qo), window.removeEventListener("test", Qo, Qo);
    } catch {
      Ar = !1;
    }
  var ai = null, Bm = null, pd = null;
  function jm() {
    if (pd) return pd;
    var l, n = Bm, u = n.length, c, r = "value" in ai ? ai.value : ai.textContent, s = r.length;
    for (l = 0; l < u && n[l] === r[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === r[s - c]; c++) ;
    return pd = r.slice(l, 1 < c ? 1 - c : void 0);
  }
  function gd(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Or() {
    return !0;
  }
  function C0() {
    return !1;
  }
  function $l(l) {
    function n(u, c, r, s, m) {
      this._reactName = u, this._targetInst = r, this.type = c, this.nativeEvent = s, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(s) : s[v]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Or : C0, this.isPropagationStopped = C0, this;
    }
    return j(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Or);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Or);
      },
      persist: function() {
      },
      isPersistent: Or
    }), n;
  }
  var Yi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Rr = $l(Yi), Vo = j({}, Yi, { view: 0, detail: 0 }), e1 = $l(Vo), qm, Ym, _r, vd = j({}, Vo, {
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
    getModifierState: yn,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== _r && (_r && l.type === "mousemove" ? (qm = l.screenX - _r.screenX, Ym = l.screenY - _r.screenY) : Ym = qm = 0, _r = l), qm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Ym;
    }
  }), Zo = $l(vd), U0 = j({}, vd, { dataTransfer: 0 }), H0 = $l(U0), N0 = j({}, Vo, { relatedTarget: 0 }), Sd = $l(N0), wm = j({}, Yi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), x0 = $l(wm), Cc = j({}, Yi, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Uc = $l(Cc), Bn = j({}, Yi, { data: 0 }), B0 = $l(Bn), Gm = {
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
  }, j0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function jn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = j0[l]) ? !!n[l] : !1;
  }
  function yn() {
    return jn;
  }
  var bd = j({}, Vo, {
    key: function(l) {
      if (l.key) {
        var n = Gm[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = gd(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? pu[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yn,
    charCode: function(l) {
      return l.type === "keypress" ? gd(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? gd(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Ed = $l(bd), Lm = j({}, vd, {
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
  }), qn = $l(Lm), t1 = j({}, Vo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yn
  }), q0 = $l(t1), Y0 = j({}, Yi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), l1 = $l(Y0), Xm = j({}, vd, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), a1 = $l(Xm), w0 = j({}, Yi, {
    newState: 0,
    oldState: 0
  }), Qm = $l(w0), Td = [9, 13, 27, 32], Jo = li && "CompositionEvent" in window, Hc = null;
  li && "documentMode" in document && (Hc = document.documentMode);
  var la = li && "TextEvent" in window && !Hc, Vm = li && (!Jo || Hc && 8 < Hc && 11 >= Hc), zr = " ", wi = !1;
  function Ad(l, n) {
    switch (l) {
      case "keyup":
        return Td.indexOf(n.keyCode) !== -1;
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
  function Zm(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Nc = !1;
  function G0(l, n) {
    switch (l) {
      case "compositionend":
        return Zm(n);
      case "keypress":
        return n.which !== 32 ? null : (wi = !0, zr);
      case "textInput":
        return l = n.data, l === zr && wi ? null : l;
      default:
        return null;
    }
  }
  function n1(l, n) {
    if (Nc)
      return l === "compositionend" || !Jo && Ad(l, n) ? (l = jm(), pd = Bm = ai = null, Nc = !1, l) : null;
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
        return Vm && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Jm = {
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
    return n === "input" ? !!Jm[l.type] : n === "textarea";
  }
  function Km(l, n, u, c) {
    yu ? Mc ? Mc.push(c) : Mc = [c] : yu = c, n = As(n, "onChange"), 0 < n.length && (u = new Rr(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var xc = null, Gi = null;
  function Bc(l) {
    Bg(l, 0);
  }
  function Ko(l) {
    var n = qo(l);
    if (Cm(n)) return l;
  }
  function $m(l, n) {
    if (l === "change") return n;
  }
  var Od = !1;
  if (li) {
    var sa;
    if (li) {
      var Yn = "oninput" in document;
      if (!Yn) {
        var km = document.createElement("div");
        km.setAttribute("oninput", "return;"), Yn = typeof km.oninput == "function";
      }
      sa = Yn;
    } else sa = !1;
    Od = sa && (!document.documentMode || 9 < document.documentMode);
  }
  function Rd() {
    xc && (xc.detachEvent("onpropertychange", _d), Gi = xc = null);
  }
  function _d(l) {
    if (l.propertyName === "value" && Ko(Gi)) {
      var n = [];
      Km(
        n,
        Gi,
        l,
        yd(l)
      ), xm(Bc, n);
    }
  }
  function L0(l, n, u) {
    l === "focusin" ? (Rd(), xc = n, Gi = u, xc.attachEvent("onpropertychange", _d)) : l === "focusout" && Rd();
  }
  function X0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ko(Gi);
  }
  function Li(l, n) {
    if (l === "click") return Ko(n);
  }
  function jc(l, n) {
    if (l === "input" || l === "change")
      return Ko(n);
  }
  function Q0(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var aa = typeof Object.is == "function" ? Object.is : Q0;
  function pn(l, n) {
    if (aa(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var r = u[c];
      if (!yr.call(n, r) || !aa(l[r], n[r]))
        return !1;
    }
    return !0;
  }
  function Wm(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Fm(l, n) {
    var u = Wm(l);
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
      u = Wm(u);
    }
  }
  function qc(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? qc(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Xi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = vr(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = vr(l.document);
    }
    return n;
  }
  function Dr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var Mr = li && "documentMode" in document && 11 >= document.documentMode, Qi = null, $o = null, gn = null, wn = !1;
  function zd(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    wn || Qi == null || Qi !== vr(c) || (c = Qi, "selectionStart" in c && Dr(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), gn && pn(gn, c) || (gn = c, c = As($o, "onSelect"), 0 < c.length && (n = new Rr(
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
  var Gn = {
    animationend: ni("Animation", "AnimationEnd"),
    animationiteration: ni("Animation", "AnimationIteration"),
    animationstart: ni("Animation", "AnimationStart"),
    transitionrun: ni("Transition", "TransitionRun"),
    transitionstart: ni("Transition", "TransitionStart"),
    transitioncancel: ni("Transition", "TransitionCancel"),
    transitionend: ni("Transition", "TransitionEnd")
  }, ko = {}, Vi = {};
  li && (Vi = document.createElement("div").style, "AnimationEvent" in window || (delete Gn.animationend.animation, delete Gn.animationiteration.animation, delete Gn.animationstart.animation), "TransitionEvent" in window || delete Gn.transitionend.transition);
  function Tt(l) {
    if (ko[l]) return ko[l];
    if (!Gn[l]) return l;
    var n = Gn[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Vi)
        return ko[l] = n[u];
    return l;
  }
  var Cr = Tt("animationend"), Im = Tt("animationiteration"), Dd = Tt("animationstart"), Yc = Tt("transitionrun"), Ur = Tt("transitionstart"), vu = Tt("transitioncancel"), V0 = Tt("transitionend"), Su = /* @__PURE__ */ new Map(), Wo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Wo.push("scrollEnd");
  function da(l, n) {
    Su.set(l, n), qi(n, [l]);
  }
  var wc = typeof reportError == "function" ? reportError : function(l) {
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
  }, Wt = [], xl = 0, vn = 0;
  function Va() {
    for (var l = xl, n = vn = xl = 0; n < l; ) {
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
      s !== 0 && Md(u, r, s);
    }
  }
  function Za(l, n, u, c) {
    Wt[xl++] = l, Wt[xl++] = n, Wt[xl++] = u, Wt[xl++] = c, vn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Sn(l, n, u, c) {
    return Za(l, n, u, c), Hr(l);
  }
  function ui(l, n) {
    return Za(l, null, null, n), Hr(l);
  }
  function Md(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var r = !1, s = l.return; s !== null; )
      s.childLanes |= u, c = s.alternate, c !== null && (c.childLanes |= u), s.tag === 22 && (l = s.stateNode, l === null || l._visibility & 1 || (r = !0)), l = s, s = s.return;
    return l.tag === 3 ? (s = l.stateNode, r && n !== null && (r = 31 - Hl(u), l = s.hiddenUpdates, c = l[r], c === null ? l[r] = [n] : c.push(n), n.lane = u | 536870912), s) : null;
  }
  function Hr(l) {
    if (50 < Of)
      throw Of = 0, ms = null, Error(T(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ha = {};
  function Z0(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ol(l, n, u, c) {
    return new Z0(l, n, u, c);
  }
  function Gc(l) {
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
  function Pm(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function Cd(l, n, u, c, r, s) {
    var m = 0;
    if (c = l, typeof l == "function") Gc(l) && (m = 1);
    else if (typeof l == "string")
      m = Tp(
        l,
        u,
        P.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case ot:
          return l = ol(31, u, n, r), l.elementType = ot, l.lanes = s, l;
        case je:
          return ci(u.children, r, s, n);
        case it:
          m = 8, r |= 24;
          break;
        case Ie:
          return l = ol(12, u, n, r | 2), l.elementType = Ie, l.lanes = s, l;
        case Vt:
          return l = ol(13, u, n, r), l.elementType = Vt, l.lanes = s, l;
        case Zt:
          return l = ol(19, u, n, r), l.elementType = Zt, l.lanes = s, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Et:
                m = 10;
                break e;
              case cl:
                m = 9;
                break e;
              case jt:
                m = 11;
                break e;
              case Ce:
                m = 14;
                break e;
              case Qe:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            T(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = ol(m, u, n, r), n.elementType = l, n.type = c, n.lanes = s, n;
  }
  function ci(l, n, u, c) {
    return l = ol(7, l, c, n), l.lanes = u, l;
  }
  function Fo(l, n, u) {
    return l = ol(6, l, null, n), l.lanes = u, l;
  }
  function ey(l) {
    var n = ol(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function Ud(l, n, u) {
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
  var ty = /* @__PURE__ */ new WeakMap();
  function Ja(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = ty.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: Ec(n)
      }, ty.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: Ec(n)
    };
  }
  var Ka = [], Lc = 0, Nr = null, hl = 0, za = [], ma = 0, Ln = null, Da = 1, Xn = "";
  function bn(l, n) {
    Ka[Lc++] = hl, Ka[Lc++] = Nr, Nr = l, hl = n;
  }
  function ly(l, n, u) {
    za[ma++] = Da, za[ma++] = Xn, za[ma++] = Ln, Ln = l;
    var c = Da;
    l = Xn;
    var r = 32 - Hl(c) - 1;
    c &= ~(1 << r), u += 1;
    var s = 32 - Hl(n) + r;
    if (30 < s) {
      var m = r - r % 5;
      s = (c & (1 << m) - 1).toString(32), c >>= m, r -= m, Da = 1 << 32 - Hl(n) + r | u << r | c, Xn = s + l;
    } else
      Da = 1 << s | u << r | c, Xn = l;
  }
  function Io(l) {
    l.return !== null && (bn(l, 1), ly(l, 1, 0));
  }
  function Hd(l) {
    for (; l === Nr; )
      Nr = Ka[--Lc], Ka[Lc] = null, hl = Ka[--Lc], Ka[Lc] = null;
    for (; l === Ln; )
      Ln = za[--ma], za[ma] = null, Xn = za[--ma], za[ma] = null, Da = za[--ma], za[ma] = null;
  }
  function xr(l, n) {
    za[ma++] = Da, za[ma++] = Xn, za[ma++] = Ln, Da = n.id, Xn = n.overflow, Ln = l;
  }
  var Bl = null, wt = null, ft = !1, bu = null, Rl = !1, Eu = Error(T(519));
  function En(l) {
    var n = Error(
      T(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ef(Ja(n, l)), Eu;
  }
  function Br(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[Ct] = l, n[ra] = c, u) {
      case "dialog":
        ct("cancel", n), ct("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        ct("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Cf.length; u++)
          ct(Cf[u], n);
        break;
      case "source":
        ct("error", n);
        break;
      case "img":
      case "image":
      case "link":
        ct("error", n), ct("load", n);
        break;
      case "details":
        ct("toggle", n);
        break;
      case "input":
        ct("invalid", n), br(
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
        ct("invalid", n);
        break;
      case "textarea":
        ct("invalid", n), Hm(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || sp(n.textContent, u) ? (c.popover != null && (ct("beforetoggle", n), ct("toggle", n)), c.onScroll != null && ct("scroll", n), c.onScrollEnd != null && ct("scrollend", n), c.onClick != null && (n.onclick = xn), n = !0) : n = !1, n || En(l, !0);
  }
  function Po(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 31:
        case 13:
          Rl = !1;
          return;
        case 27:
        case 3:
          Rl = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function Tu(l) {
    if (l !== Bl) return !1;
    if (!ft) return Po(l), ft = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Hf(l.type, l.memoizedProps)), u = !u), u && wt && En(l), Po(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(T(317));
      wt = Bh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(T(317));
      wt = Bh(l);
    } else
      n === 27 ? (n = wt, Pn(l.type) ? (l = _s, _s = null, wt = l) : wt = n) : wt = Bl ? Oa(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Zi() {
    wt = Bl = null, ft = !1;
  }
  function ay() {
    var l = bu;
    return l !== null && (ul === null ? ul = l : ul.push.apply(
      ul,
      l
    ), bu = null), l;
  }
  function ef(l) {
    bu === null ? bu = [l] : bu.push(l);
  }
  var Nd = S(null), oi = null, Qn = null;
  function ya(l, n, u) {
    ee(Nd, n._currentValue), n._currentValue = u;
  }
  function Vn(l) {
    l._currentValue = Nd.current, q(Nd);
  }
  function xd(l, n, u) {
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
              s.lanes |= u, v = s.alternate, v !== null && (v.lanes |= u), xd(
                s.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          s = v.next;
        }
      } else if (r.tag === 18) {
        if (m = r.return, m === null) throw Error(T(341));
        m.lanes |= u, s = m.alternate, s !== null && (s.lanes |= u), xd(m, u, l), m = null;
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
  function jl(l, n, u, c) {
    l = null;
    for (var r = n, s = !1; r !== null; ) {
      if (!s) {
        if ((r.flags & 524288) !== 0) s = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var m = r.alternate;
        if (m === null) throw Error(T(387));
        if (m = m.memoizedProps, m !== null) {
          var v = r.type;
          aa(r.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (r === De.current) {
        if (m = r.alternate, m === null) throw Error(T(387));
        m.memoizedState.memoizedState !== r.memoizedState.memoizedState && (l !== null ? l.push(Ms) : l = [Ms]);
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
  function Xc(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!aa(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function we(l) {
    oi = l, Qn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function W(l) {
    return jr(oi, l);
  }
  function fi(l, n) {
    return oi === null && we(l), jr(l, n);
  }
  function jr(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Qn === null) {
      if (l === null) throw Error(T(308));
      Qn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Qn = Qn.next = n;
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
  }, ny = b.unstable_scheduleCallback, uy = b.unstable_NormalPriority, ml = {
    $$typeof: Et,
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
    l.refCount--, l.refCount === 0 && ny(uy, function() {
      l.controller.abort();
    });
  }
  var Qc = null, wr = 0, Ji = 0, bl = null;
  function _t(l, n) {
    if (Qc === null) {
      var u = Qc = [];
      wr = 0, Ji = zh(), bl = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return wr++, n.then(Gr, Gr), n;
  }
  function Gr() {
    if (--wr === 0 && Qc !== null) {
      bl !== null && (bl.status = "fulfilled");
      var l = Qc;
      Qc = null, Ji = 0, bl = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Lr(l, n) {
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
    Iy = Sl(), typeof n == "object" && n !== null && typeof n.then == "function" && _t(l, n), ri !== null && ri(l, n);
  };
  var $a = S(null);
  function ka() {
    var l = $a.current;
    return l !== null ? l : Ht.pooledCache;
  }
  function tf(l, n) {
    n === null ? ee($a, $a.current) : ee($a, n.pool);
  }
  function Vc() {
    var l = ka();
    return l === null ? null : { parent: ml._currentValue, pool: l };
  }
  var Ki = Error(T(460)), Zc = Error(T(474)), lf = Error(T(542)), Jc = { then: function() {
  } };
  function iy(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function cy(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(xn, xn), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, Bd(l), l;
      default:
        if (typeof n.status == "string") n.then(xn, xn);
        else {
          if (l = Ht, l !== null && 100 < l.shellSuspendCounter)
            throw Error(T(482));
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
            throw l = n.reason, Bd(l), l;
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
  function oy() {
    if (ki === null) throw Error(T(459));
    var l = ki;
    return ki = null, l;
  }
  function Bd(l) {
    if (l === Ki || l === lf)
      throw Error(T(483));
  }
  var Wi = null, Kc = 0;
  function Xr(l) {
    var n = Kc;
    return Kc += 1, Wi === null && (Wi = []), cy(Wi, l, n);
  }
  function af(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Qr(l, n) {
    throw n.$$typeof === z ? Error(T(525)) : (l = Object.prototype.toString.call(n), Error(
      T(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function J0(l) {
    function n(x, M) {
      if (l) {
        var B = x.deletions;
        B === null ? (x.deletions = [M], x.flags |= 16) : B.push(M);
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
    function s(x, M, B) {
      return x.index = B, l ? (B = x.alternate, B !== null ? (B = B.index, B < M ? (x.flags |= 67108866, M) : B) : (x.flags |= 67108866, M)) : (x.flags |= 1048576, M);
    }
    function m(x) {
      return l && x.alternate === null && (x.flags |= 67108866), x;
    }
    function v(x, M, B, $) {
      return M === null || M.tag !== 6 ? (M = Fo(B, x.mode, $), M.return = x, M) : (M = r(M, B), M.return = x, M);
    }
    function R(x, M, B, $) {
      var Re = B.type;
      return Re === je ? Z(
        x,
        M,
        B.props.children,
        $,
        B.key
      ) : M !== null && (M.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === Qe && $i(Re) === M.type) ? (M = r(M, B.props), af(M, B), M.return = x, M) : (M = Cd(
        B.type,
        B.key,
        B.props,
        null,
        x.mode,
        $
      ), af(M, B), M.return = x, M);
    }
    function Y(x, M, B, $) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== B.containerInfo || M.stateNode.implementation !== B.implementation ? (M = Ud(B, x.mode, $), M.return = x, M) : (M = r(M, B.children || []), M.return = x, M);
    }
    function Z(x, M, B, $, Re) {
      return M === null || M.tag !== 7 ? (M = ci(
        B,
        x.mode,
        $,
        Re
      ), M.return = x, M) : (M = r(M, B), M.return = x, M);
    }
    function k(x, M, B) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return M = Fo(
          "" + M,
          x.mode,
          B
        ), M.return = x, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case ae:
            return B = Cd(
              M.type,
              M.key,
              M.props,
              null,
              x.mode,
              B
            ), af(B, M), B.return = x, B;
          case ze:
            return M = Ud(
              M,
              x.mode,
              B
            ), M.return = x, M;
          case Qe:
            return M = $i(M), k(x, M, B);
        }
        if (Yt(M) || be(M))
          return M = ci(
            M,
            x.mode,
            B,
            null
          ), M.return = x, M;
        if (typeof M.then == "function")
          return k(x, Xr(M), B);
        if (M.$$typeof === Et)
          return k(
            x,
            fi(x, M),
            B
          );
        Qr(x, M);
      }
      return null;
    }
    function w(x, M, B, $) {
      var Re = M !== null ? M.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return Re !== null ? null : v(x, M, "" + B, $);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case ae:
            return B.key === Re ? R(x, M, B, $) : null;
          case ze:
            return B.key === Re ? Y(x, M, B, $) : null;
          case Qe:
            return B = $i(B), w(x, M, B, $);
        }
        if (Yt(B) || be(B))
          return Re !== null ? null : Z(x, M, B, $, null);
        if (typeof B.then == "function")
          return w(
            x,
            M,
            Xr(B),
            $
          );
        if (B.$$typeof === Et)
          return w(
            x,
            M,
            fi(x, B),
            $
          );
        Qr(x, B);
      }
      return null;
    }
    function Q(x, M, B, $, Re) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint")
        return x = x.get(B) || null, v(M, x, "" + $, Re);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case ae:
            return x = x.get(
              $.key === null ? B : $.key
            ) || null, R(M, x, $, Re);
          case ze:
            return x = x.get(
              $.key === null ? B : $.key
            ) || null, Y(M, x, $, Re);
          case Qe:
            return $ = $i($), Q(
              x,
              M,
              B,
              $,
              Re
            );
        }
        if (Yt($) || be($))
          return x = x.get(B) || null, Z(M, x, $, Re, null);
        if (typeof $.then == "function")
          return Q(
            x,
            M,
            B,
            Xr($),
            Re
          );
        if ($.$$typeof === Et)
          return Q(
            x,
            M,
            B,
            fi(M, $),
            Re
          );
        Qr(M, $);
      }
      return null;
    }
    function de(x, M, B, $) {
      for (var Re = null, yt = null, ve = M, Je = M = 0, We = null; ve !== null && Je < B.length; Je++) {
        ve.index > Je ? (We = ve, ve = null) : We = ve.sibling;
        var bt = w(
          x,
          ve,
          B[Je],
          $
        );
        if (bt === null) {
          ve === null && (ve = We);
          break;
        }
        l && ve && bt.alternate === null && n(x, ve), M = s(bt, M, Je), yt === null ? Re = bt : yt.sibling = bt, yt = bt, ve = We;
      }
      if (Je === B.length)
        return u(x, ve), ft && bn(x, Je), Re;
      if (ve === null) {
        for (; Je < B.length; Je++)
          ve = k(x, B[Je], $), ve !== null && (M = s(
            ve,
            M,
            Je
          ), yt === null ? Re = ve : yt.sibling = ve, yt = ve);
        return ft && bn(x, Je), Re;
      }
      for (ve = c(ve); Je < B.length; Je++)
        We = Q(
          ve,
          x,
          Je,
          B[Je],
          $
        ), We !== null && (l && We.alternate !== null && ve.delete(
          We.key === null ? Je : We.key
        ), M = s(
          We,
          M,
          Je
        ), yt === null ? Re = We : yt.sibling = We, yt = We);
      return l && ve.forEach(function(lu) {
        return n(x, lu);
      }), ft && bn(x, Je), Re;
    }
    function He(x, M, B, $) {
      if (B == null) throw Error(T(151));
      for (var Re = null, yt = null, ve = M, Je = M = 0, We = null, bt = B.next(); ve !== null && !bt.done; Je++, bt = B.next()) {
        ve.index > Je ? (We = ve, ve = null) : We = ve.sibling;
        var lu = w(x, ve, bt.value, $);
        if (lu === null) {
          ve === null && (ve = We);
          break;
        }
        l && ve && lu.alternate === null && n(x, ve), M = s(lu, M, Je), yt === null ? Re = lu : yt.sibling = lu, yt = lu, ve = We;
      }
      if (bt.done)
        return u(x, ve), ft && bn(x, Je), Re;
      if (ve === null) {
        for (; !bt.done; Je++, bt = B.next())
          bt = k(x, bt.value, $), bt !== null && (M = s(bt, M, Je), yt === null ? Re = bt : yt.sibling = bt, yt = bt);
        return ft && bn(x, Je), Re;
      }
      for (ve = c(ve); !bt.done; Je++, bt = B.next())
        bt = Q(ve, x, Je, bt.value, $), bt !== null && (l && bt.alternate !== null && ve.delete(bt.key === null ? Je : bt.key), M = s(bt, M, Je), yt === null ? Re = bt : yt.sibling = bt, yt = bt);
      return l && ve.forEach(function(Wg) {
        return n(x, Wg);
      }), ft && bn(x, Je), Re;
    }
    function xt(x, M, B, $) {
      if (typeof B == "object" && B !== null && B.type === je && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case ae:
            e: {
              for (var Re = B.key; M !== null; ) {
                if (M.key === Re) {
                  if (Re = B.type, Re === je) {
                    if (M.tag === 7) {
                      u(
                        x,
                        M.sibling
                      ), $ = r(
                        M,
                        B.props.children
                      ), $.return = x, x = $;
                      break e;
                    }
                  } else if (M.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === Qe && $i(Re) === M.type) {
                    u(
                      x,
                      M.sibling
                    ), $ = r(M, B.props), af($, B), $.return = x, x = $;
                    break e;
                  }
                  u(x, M);
                  break;
                } else n(x, M);
                M = M.sibling;
              }
              B.type === je ? ($ = ci(
                B.props.children,
                x.mode,
                $,
                B.key
              ), $.return = x, x = $) : ($ = Cd(
                B.type,
                B.key,
                B.props,
                null,
                x.mode,
                $
              ), af($, B), $.return = x, x = $);
            }
            return m(x);
          case ze:
            e: {
              for (Re = B.key; M !== null; ) {
                if (M.key === Re)
                  if (M.tag === 4 && M.stateNode.containerInfo === B.containerInfo && M.stateNode.implementation === B.implementation) {
                    u(
                      x,
                      M.sibling
                    ), $ = r(M, B.children || []), $.return = x, x = $;
                    break e;
                  } else {
                    u(x, M);
                    break;
                  }
                else n(x, M);
                M = M.sibling;
              }
              $ = Ud(B, x.mode, $), $.return = x, x = $;
            }
            return m(x);
          case Qe:
            return B = $i(B), xt(
              x,
              M,
              B,
              $
            );
        }
        if (Yt(B))
          return de(
            x,
            M,
            B,
            $
          );
        if (be(B)) {
          if (Re = be(B), typeof Re != "function") throw Error(T(150));
          return B = Re.call(B), He(
            x,
            M,
            B,
            $
          );
        }
        if (typeof B.then == "function")
          return xt(
            x,
            M,
            Xr(B),
            $
          );
        if (B.$$typeof === Et)
          return xt(
            x,
            M,
            fi(x, B),
            $
          );
        Qr(x, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, M !== null && M.tag === 6 ? (u(x, M.sibling), $ = r(M, B), $.return = x, x = $) : (u(x, M), $ = Fo(B, x.mode, $), $.return = x, x = $), m(x)) : u(x, M);
    }
    return function(x, M, B, $) {
      try {
        Kc = 0;
        var Re = xt(
          x,
          M,
          B,
          $
        );
        return Wi = null, Re;
      } catch (ve) {
        if (ve === Ki || ve === lf) throw ve;
        var yt = ol(29, ve, null, x.mode);
        return yt.lanes = $, yt.return = x, yt;
      }
    };
  }
  var Fi = J0(!0), fy = J0(!1), si = !1;
  function Vr(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function jd(l, n) {
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
  function Wa(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (St & 2) !== 0) {
      var r = c.pending;
      return r === null ? n.next = n : (n.next = r.next, r.next = n), c.pending = n, n = Hr(l), Md(l, null, u), n;
    }
    return Za(l, c, n, u), Hr(l);
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
  var ry = !1;
  function Pi() {
    if (ry) {
      var l = bl;
      if (l !== null) throw l;
    }
  }
  function Ou(l, n, u, c) {
    ry = !1;
    var r = l.updateQueue;
    si = !1;
    var s = r.firstBaseUpdate, m = r.lastBaseUpdate, v = r.shared.pending;
    if (v !== null) {
      r.shared.pending = null;
      var R = v, Y = R.next;
      R.next = null, m === null ? s = Y : m.next = Y, m = R;
      var Z = l.alternate;
      Z !== null && (Z = Z.updateQueue, v = Z.lastBaseUpdate, v !== m && (v === null ? Z.firstBaseUpdate = Y : v.next = Y, Z.lastBaseUpdate = R));
    }
    if (s !== null) {
      var k = r.baseState;
      m = 0, Z = Y = R = null, v = s;
      do {
        var w = v.lane & -536870913, Q = w !== v.lane;
        if (Q ? (nt & w) === w : (c & w) === w) {
          w !== 0 && w === Ji && (ry = !0), Z !== null && (Z = Z.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var de = l, He = v;
            w = n;
            var xt = u;
            switch (He.tag) {
              case 1:
                if (de = He.payload, typeof de == "function") {
                  k = de.call(xt, k, w);
                  break e;
                }
                k = de;
                break e;
              case 3:
                de.flags = de.flags & -65537 | 128;
              case 0:
                if (de = He.payload, w = typeof de == "function" ? de.call(xt, k, w) : de, w == null) break e;
                k = j({}, k, w);
                break e;
              case 2:
                si = !0;
            }
          }
          w = v.callback, w !== null && (l.flags |= 64, Q && (l.flags |= 8192), Q = r.callbacks, Q === null ? r.callbacks = [w] : Q.push(w));
        } else
          Q = {
            lane: w,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, Z === null ? (Y = Z = Q, R = k) : Z = Z.next = Q, m |= w;
        if (v = v.next, v === null) {
          if (v = r.shared.pending, v === null)
            break;
          Q = v, v = Q.next, Q.next = null, r.lastBaseUpdate = Q, r.shared.pending = null;
        }
      } while (!0);
      Z === null && (R = k), r.baseState = R, r.firstBaseUpdate = Y, r.lastBaseUpdate = Z, s === null && (r.shared.lanes = 0), Fn |= m, l.lanes = m, l.memoizedState = k;
    }
  }
  function Yd(l, n) {
    if (typeof l != "function")
      throw Error(T(191, l));
    l.call(n);
  }
  function ec(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Yd(u[l], n);
  }
  var _l = S(null), $c = S(0);
  function K0(l, n) {
    l = Wn, ee($c, l), ee(_l, n), Wn = l | n.baseLanes;
  }
  function Zr() {
    ee($c, Wn), ee(_l, _l.current);
  }
  function nf() {
    Wn = $c.current, q(_l), q($c);
  }
  var pa = S(null), Fa = null;
  function Ru(l) {
    var n = l.alternate;
    ee(Ft, Ft.current & 1), ee(pa, l), Fa === null && (n === null || _l.current !== null || n.memoizedState !== null) && (Fa = l);
  }
  function uf(l) {
    ee(Ft, Ft.current), ee(pa, l), Fa === null && (Fa = l);
  }
  function wd(l) {
    l.tag === 22 ? (ee(Ft, Ft.current), ee(pa, l), Fa === null && (Fa = l)) : Zn();
  }
  function Zn() {
    ee(Ft, Ft.current), ee(pa, pa.current);
  }
  function ga(l) {
    q(pa), Fa === l && (Fa = null), q(Ft);
  }
  var Ft = S(0);
  function cf(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || Rn(u) || dc(u)))
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
  var _u = 0, Ke = null, zt = null, yl = null, kc = !1, Wc = !1, hi = !1, Jr = 0, of = 0, tc = null, $0 = 0;
  function al() {
    throw Error(T(321));
  }
  function mi(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!aa(l[u], n[u])) return !1;
    return !0;
  }
  function Kr(l, n, u, c, r, s) {
    return _u = s, Ke = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, C.H = l === null || l.memoizedState === null ? lg : lh, hi = !1, s = u(c, r), hi = !1, Wc && (s = k0(
      n,
      u,
      c,
      r
    )), Gd(l), s;
  }
  function Gd(l) {
    C.H = ls;
    var n = zt !== null && zt.next !== null;
    if (_u = 0, yl = zt = Ke = null, kc = !1, of = 0, tc = null, n) throw Error(T(300));
    l === null || pl || (l = l.dependencies, l !== null && Xc(l) && (pl = !0));
  }
  function k0(l, n, u, c) {
    Ke = l;
    var r = 0;
    do {
      if (Wc && (tc = null), of = 0, Wc = !1, 25 <= r) throw Error(T(301));
      if (r += 1, yl = zt = null, l.updateQueue != null) {
        var s = l.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      C.H = ag, s = n(u, c);
    } while (Wc);
    return s;
  }
  function u1() {
    var l = C.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Ic(n) : n, l = l.useState()[0], (zt !== null ? zt.memoizedState : null) !== l && (Ke.flags |= 1024), n;
  }
  function Ld() {
    var l = Jr !== 0;
    return Jr = 0, l;
  }
  function Fc(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function $r(l) {
    if (kc) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      kc = !1;
    }
    _u = 0, yl = zt = Ke = null, Wc = !1, of = Jr = 0, tc = null;
  }
  function ql() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return yl === null ? Ke.memoizedState = yl = l : yl = yl.next = l, yl;
  }
  function rl() {
    if (zt === null) {
      var l = Ke.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = zt.next;
    var n = yl === null ? Ke.memoizedState : yl.next;
    if (n !== null)
      yl = n, zt = l;
    else {
      if (l === null)
        throw Ke.alternate === null ? Error(T(467)) : Error(T(310));
      zt = l, l = {
        memoizedState: zt.memoizedState,
        baseState: zt.baseState,
        baseQueue: zt.baseQueue,
        queue: zt.queue,
        next: null
      }, yl === null ? Ke.memoizedState = yl = l : yl = yl.next = l;
    }
    return yl;
  }
  function kr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ic(l) {
    var n = of;
    return of += 1, tc === null && (tc = []), l = cy(tc, l, n), n = Ke, (yl === null ? n.memoizedState : yl.next) === null && (n = n.alternate, C.H = n === null || n.memoizedState === null ? lg : lh), l;
  }
  function ff(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ic(l);
      if (l.$$typeof === Et) return W(l);
    }
    throw Error(T(438, String(l)));
  }
  function Xd(l) {
    var n = null, u = Ke.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Ke.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = kr(), Ke.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = he;
    return n.index++, u;
  }
  function zu(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Du(l) {
    var n = rl();
    return Qd(n, zt, l);
  }
  function Qd(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(T(311));
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
      var v = m = null, R = null, Y = n, Z = !1;
      do {
        var k = Y.lane & -536870913;
        if (k !== Y.lane ? (nt & k) === k : (_u & k) === k) {
          var w = Y.revertLane;
          if (w === 0)
            R !== null && (R = R.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }), k === Ji && (Z = !0);
          else if ((_u & w) === w) {
            Y = Y.next, w === Ji && (Z = !0);
            continue;
          } else
            k = {
              lane: 0,
              revertLane: Y.revertLane,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }, R === null ? (v = R = k, m = s) : R = R.next = k, Ke.lanes |= w, Fn |= w;
          k = Y.action, hi && u(s, k), s = Y.hasEagerState ? Y.eagerState : u(s, k);
        } else
          w = {
            lane: k,
            revertLane: Y.revertLane,
            gesture: Y.gesture,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          }, R === null ? (v = R = w, m = s) : R = R.next = w, Ke.lanes |= k, Fn |= k;
        Y = Y.next;
      } while (Y !== null && Y !== n);
      if (R === null ? m = s : R.next = v, !aa(s, l.memoizedState) && (pl = !0, Z && (u = bl, u !== null)))
        throw u;
      l.memoizedState = s, l.baseState = m, l.baseQueue = R, c.lastRenderedState = s;
    }
    return r === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Vd(l) {
    var n = rl(), u = n.queue;
    if (u === null) throw Error(T(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, r = u.pending, s = n.memoizedState;
    if (r !== null) {
      u.pending = null;
      var m = r = r.next;
      do
        s = l(s, m.action), m = m.next;
      while (m !== r);
      aa(s, n.memoizedState) || (pl = !0), n.memoizedState = s, n.baseQueue === null && (n.baseState = s), u.lastRenderedState = s;
    }
    return [s, c];
  }
  function sy(l, n, u) {
    var c = Ke, r = rl(), s = ft;
    if (s) {
      if (u === void 0) throw Error(T(407));
      u = u();
    } else u = n();
    var m = !aa(
      (zt || r).memoizedState,
      u
    );
    if (m && (r.memoizedState = u, pl = !0), r = r.queue, kd(Zd.bind(null, c, r, l), [
      l
    ]), r.getSnapshot !== n || m || yl !== null && yl.memoizedState.tag & 1) {
      if (c.flags |= 2048, eo(
        9,
        { destroy: void 0 },
        dy.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), Ht === null) throw Error(T(349));
      s || (_u & 127) !== 0 || Wr(c, n, u);
    }
    return u;
  }
  function Wr(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Ke.updateQueue, n === null ? (n = kr(), Ke.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function dy(l, n, u, c) {
    n.value = u, n.getSnapshot = c, Jd(n) && Kd(l);
  }
  function Zd(l, n, u) {
    return u(function() {
      Jd(n) && Kd(l);
    });
  }
  function Jd(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !aa(l, u);
    } catch {
      return !0;
    }
  }
  function Kd(l) {
    var n = ui(l, 2);
    n !== null && Aa(n, l, 2);
  }
  function hy(l) {
    var n = ql();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), hi) {
        Ga(!0);
        try {
          u();
        } finally {
          Ga(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zu,
      lastRenderedState: l
    }, n;
  }
  function Yl(l, n, u, c) {
    return l.baseState = u, Qd(
      l,
      zt,
      typeof c == "function" ? c : zu
    );
  }
  function W0(l, n, u, c, r) {
    if (ts(l)) throw Error(T(485));
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
      C.T !== null ? u(!0) : s.isTransition = !1, c(s), u = n.pending, u === null ? (s.next = n.pending = s, my(n, s)) : (s.next = u.next, n.pending = u.next = s);
    }
  }
  function my(l, n) {
    var u = n.action, c = n.payload, r = l.state;
    if (n.isTransition) {
      var s = C.T, m = {};
      C.T = m;
      try {
        var v = u(r, c), R = C.S;
        R !== null && R(m, v), yy(l, n, v);
      } catch (Y) {
        Pc(l, n, Y);
      } finally {
        s !== null && m.types !== null && (s.types = m.types), C.T = s;
      }
    } else
      try {
        s = u(r, c), yy(l, n, s);
      } catch (Y) {
        Pc(l, n, Y);
      }
  }
  function yy(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        py(l, n, c);
      },
      function(c) {
        return Pc(l, n, c);
      }
    ) : py(l, n, u);
  }
  function py(l, n, u) {
    n.status = "fulfilled", n.value = u, gy(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, my(l, u)));
  }
  function Pc(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, gy(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function gy(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Fr(l, n) {
    return n;
  }
  function vy(l, n) {
    if (ft) {
      var u = Ht.formState;
      if (u !== null) {
        e: {
          var c = Ke;
          if (ft) {
            if (wt) {
              t: {
                for (var r = wt, s = Rl; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break t;
                  }
                  if (r = Oa(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break t;
                  }
                }
                s = r.data, r = s === "F!" || s === "F" ? r : null;
              }
              if (r) {
                wt = Oa(
                  r.nextSibling
                ), c = r.data === "F!";
                break e;
              }
            }
            En(c);
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
      lastRenderedReducer: Fr,
      lastRenderedState: n
    }, u.queue = c, u = eh.bind(
      null,
      Ke,
      c
    ), c.dispatch = u, c = hy(!1), s = lc.bind(
      null,
      Ke,
      !1,
      c.queue
    ), c = ql(), r = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = r, u = W0.bind(
      null,
      Ke,
      r,
      s,
      u
    ), r.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function F0(l) {
    var n = rl();
    return Ir(n, zt, l);
  }
  function Ir(l, n, u) {
    if (n = Qd(
      l,
      n,
      Fr
    )[0], l = Du(zu)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Ic(n);
      } catch (m) {
        throw m === Ki ? lf : m;
      }
    else c = n;
    n = rl();
    var r = n.queue, s = r.dispatch;
    return u !== n.memoizedState && (Ke.flags |= 2048, eo(
      9,
      { destroy: void 0 },
      Sy.bind(null, r, u),
      null
    )), [c, s, l];
  }
  function Sy(l, n) {
    l.action = n;
  }
  function by(l) {
    var n = rl(), u = zt;
    if (u !== null)
      return Ir(n, u, l);
    rl(), n = n.memoizedState, u = rl();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function eo(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Ke.updateQueue, n === null && (n = kr(), Ke.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Ey() {
    return rl().memoizedState;
  }
  function rf(l, n, u, c) {
    var r = ql();
    Ke.flags |= l, r.memoizedState = eo(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function sf(l, n, u, c) {
    var r = rl();
    c = c === void 0 ? null : c;
    var s = r.memoizedState.inst;
    zt !== null && c !== null && mi(c, zt.memoizedState.deps) ? r.memoizedState = eo(n, s, u, c) : (Ke.flags |= l, r.memoizedState = eo(
      1 | n,
      s,
      u,
      c
    ));
  }
  function $d(l, n) {
    rf(8390656, 8, l, n);
  }
  function kd(l, n) {
    sf(2048, 8, l, n);
  }
  function Ty(l) {
    Ke.flags |= 4;
    var n = Ke.updateQueue;
    if (n === null)
      n = kr(), Ke.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function Pr(l) {
    var n = rl().memoizedState;
    return Ty({ ref: n, nextImpl: l }), function() {
      if ((St & 2) !== 0) throw Error(T(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Wd(l, n) {
    return sf(4, 2, l, n);
  }
  function Ay(l, n) {
    return sf(4, 4, l, n);
  }
  function Fd(l, n) {
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
  function Oy(l, n, u) {
    u = u != null ? u.concat([l]) : null, sf(4, 4, Fd.bind(null, n, l), u);
  }
  function Jn() {
  }
  function Id(l, n) {
    var u = rl();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && mi(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function I0(l, n) {
    var u = rl();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && mi(n, c[1]))
      return c[0];
    if (c = l(), hi) {
      Ga(!0);
      try {
        l();
      } finally {
        Ga(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function es(l, n, u) {
    return u === void 0 || (_u & 1073741824) !== 0 && (nt & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = hg(), Ke.lanes |= l, Fn |= l, u);
  }
  function Mu(l, n, u, c) {
    return aa(u, n) ? u : _l.current !== null ? (l = es(l, u, c), aa(l, n) || (pl = !0), l) : (_u & 42) === 0 || (_u & 1073741824) !== 0 && (nt & 261930) === 0 ? (pl = !0, l.memoizedState = u) : (l = hg(), Ke.lanes |= l, Fn |= l, n);
  }
  function Pd(l, n, u, c, r) {
    var s = J.p;
    J.p = s !== 0 && 8 > s ? s : 8;
    var m = C.T, v = {};
    C.T = v, lc(l, !1, n, u);
    try {
      var R = r(), Y = C.S;
      if (Y !== null && Y(v, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var Z = Lr(
          R,
          c
        );
        yi(
          l,
          n,
          Z,
          Ha(l)
        );
      } else
        yi(
          l,
          n,
          c,
          Ha(l)
        );
    } catch (k) {
      yi(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: k },
        Ha()
      );
    } finally {
      J.p = s, m !== null && v.types !== null && (m.types = v.types), C.T = m;
    }
  }
  function P0() {
  }
  function df(l, n, u, c) {
    if (l.tag !== 5) throw Error(T(476));
    var r = hf(l).queue;
    Pd(
      l,
      r,
      n,
      ne,
      u === null ? P0 : function() {
        return Ut(l), u(c);
      }
    );
  }
  function hf(l) {
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
        lastRenderedReducer: zu,
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
        lastRenderedReducer: zu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function Ut(l) {
    var n = hf(l);
    n.next === null && (n = l.alternate.memoizedState), yi(
      l,
      n.next.queue,
      {},
      Ha()
    );
  }
  function Ry() {
    return W(Ms);
  }
  function eg() {
    return rl().memoizedState;
  }
  function _y() {
    return rl().memoizedState;
  }
  function Cu(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Ha();
          l = di(u);
          var c = Wa(n, l, u);
          c !== null && (Aa(c, n, u), Ii(c, n, u)), n = { cache: qr() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function tg(l, n, u) {
    var c = Ha();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ts(l) ? th(n, u) : (u = Sn(l, n, u, c), u !== null && (Aa(u, l, c), zy(u, n, c)));
  }
  function eh(l, n, u) {
    var c = Ha();
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
    if (ts(l)) th(n, r);
    else {
      var s = l.alternate;
      if (l.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null))
        try {
          var m = n.lastRenderedState, v = s(m, u);
          if (r.hasEagerState = !0, r.eagerState = v, aa(v, m))
            return Za(l, n, r, 0), Ht === null && Va(), !1;
        } catch {
        }
      if (u = Sn(l, n, r, c), u !== null)
        return Aa(u, l, c), zy(u, n, c), !0;
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
    }, ts(l)) {
      if (n) throw Error(T(479));
    } else
      n = Sn(
        l,
        u,
        c,
        2
      ), n !== null && Aa(n, l, 2);
  }
  function ts(l) {
    var n = l.alternate;
    return l === Ke || n !== null && n === Ke;
  }
  function th(l, n) {
    Wc = kc = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function zy(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, su(l, u);
    }
  }
  var ls = {
    readContext: W,
    use: ff,
    useCallback: al,
    useContext: al,
    useEffect: al,
    useImperativeHandle: al,
    useLayoutEffect: al,
    useInsertionEffect: al,
    useMemo: al,
    useReducer: al,
    useRef: al,
    useState: al,
    useDebugValue: al,
    useDeferredValue: al,
    useTransition: al,
    useSyncExternalStore: al,
    useId: al,
    useHostTransitionStatus: al,
    useFormState: al,
    useActionState: al,
    useOptimistic: al,
    useMemoCache: al,
    useCacheRefresh: al
  };
  ls.useEffectEvent = al;
  var lg = {
    readContext: W,
    use: ff,
    useCallback: function(l, n) {
      return ql().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: W,
    useEffect: $d,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, rf(
        4194308,
        4,
        Fd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return rf(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      rf(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = ql();
      n = n === void 0 ? null : n;
      var c = l();
      if (hi) {
        Ga(!0);
        try {
          l();
        } finally {
          Ga(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = ql();
      if (u !== void 0) {
        var r = u(n);
        if (hi) {
          Ga(!0);
          try {
            u(n);
          } finally {
            Ga(!1);
          }
        }
      } else r = n;
      return c.memoizedState = c.baseState = r, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: r
      }, c.queue = l, l = l.dispatch = tg.bind(
        null,
        Ke,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = ql();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = hy(l);
      var n = l.queue, u = eh.bind(null, Ke, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Jn,
    useDeferredValue: function(l, n) {
      var u = ql();
      return es(u, l, n);
    },
    useTransition: function() {
      var l = hy(!1);
      return l = Pd.bind(
        null,
        Ke,
        l.queue,
        !0,
        !1
      ), ql().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Ke, r = ql();
      if (ft) {
        if (u === void 0)
          throw Error(T(407));
        u = u();
      } else {
        if (u = n(), Ht === null)
          throw Error(T(349));
        (nt & 127) !== 0 || Wr(c, n, u);
      }
      r.memoizedState = u;
      var s = { value: u, getSnapshot: n };
      return r.queue = s, $d(Zd.bind(null, c, s, l), [
        l
      ]), c.flags |= 2048, eo(
        9,
        { destroy: void 0 },
        dy.bind(
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
      var l = ql(), n = Ht.identifierPrefix;
      if (ft) {
        var u = Xn, c = Da;
        u = (c & ~(1 << 32 - Hl(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Jr++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = $0++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Ry,
    useFormState: vy,
    useActionState: vy,
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
        Ke,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Xd,
    useCacheRefresh: function() {
      return ql().memoizedState = Cu.bind(
        null,
        Ke
      );
    },
    useEffectEvent: function(l) {
      var n = ql(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((St & 2) !== 0)
          throw Error(T(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, lh = {
    readContext: W,
    use: ff,
    useCallback: Id,
    useContext: W,
    useEffect: kd,
    useImperativeHandle: Oy,
    useInsertionEffect: Wd,
    useLayoutEffect: Ay,
    useMemo: I0,
    useReducer: Du,
    useRef: Ey,
    useState: function() {
      return Du(zu);
    },
    useDebugValue: Jn,
    useDeferredValue: function(l, n) {
      var u = rl();
      return Mu(
        u,
        zt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Du(zu)[0], n = rl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ic(l),
        n
      ];
    },
    useSyncExternalStore: sy,
    useId: eg,
    useHostTransitionStatus: Ry,
    useFormState: F0,
    useActionState: F0,
    useOptimistic: function(l, n) {
      var u = rl();
      return Yl(u, zt, l, n);
    },
    useMemoCache: Xd,
    useCacheRefresh: _y
  };
  lh.useEffectEvent = Pr;
  var ag = {
    readContext: W,
    use: ff,
    useCallback: Id,
    useContext: W,
    useEffect: kd,
    useImperativeHandle: Oy,
    useInsertionEffect: Wd,
    useLayoutEffect: Ay,
    useMemo: I0,
    useReducer: Vd,
    useRef: Ey,
    useState: function() {
      return Vd(zu);
    },
    useDebugValue: Jn,
    useDeferredValue: function(l, n) {
      var u = rl();
      return zt === null ? es(u, l, n) : Mu(
        u,
        zt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Vd(zu)[0], n = rl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ic(l),
        n
      ];
    },
    useSyncExternalStore: sy,
    useId: eg,
    useHostTransitionStatus: Ry,
    useFormState: by,
    useActionState: by,
    useOptimistic: function(l, n) {
      var u = rl();
      return zt !== null ? Yl(u, zt, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Xd,
    useCacheRefresh: _y
  };
  ag.useEffectEvent = Pr;
  function to(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : j({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Tn = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ha(), r = di(c);
      r.payload = n, u != null && (r.callback = u), n = Wa(l, r, c), n !== null && (Aa(n, l, c), Ii(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ha(), r = di(c);
      r.tag = 1, r.payload = n, u != null && (r.callback = u), n = Wa(l, r, c), n !== null && (Aa(n, l, c), Ii(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Ha(), c = di(u);
      c.tag = 2, n != null && (c.callback = n), n = Wa(l, c, u), n !== null && (Aa(n, l, u), Ii(n, l, u));
    }
  };
  function Dy(l, n, u, c, r, s, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, s, m) : n.prototype && n.prototype.isPureReactComponent ? !pn(u, c) || !pn(r, s) : !0;
  }
  function ng(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Tn.enqueueReplaceState(n, n.state, null);
  }
  function ac(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = j({}, u));
      for (var r in l)
        u[r] === void 0 && (u[r] = l[r]);
    }
    return u;
  }
  function ah(l) {
    wc(l);
  }
  function My(l) {
    console.error(l);
  }
  function nh(l) {
    wc(l);
  }
  function mf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function as(l, n, u) {
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
  function Cy(l, n, u) {
    return u = di(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      mf(l, n);
    }, u;
  }
  function Uy(l) {
    return l = di(l), l.tag = 3, l;
  }
  function Hy(l, n, u, c) {
    var r = u.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = c.value;
      l.payload = function() {
        return r(s);
      }, l.callback = function() {
        as(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      as(n, u, c), typeof r != "function" && (It === null ? It = /* @__PURE__ */ new Set([this]) : It.add(this));
      var v = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function i1(l, n, u, c, r) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && jl(
        n,
        u,
        r,
        !0
      ), u = pa.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Fa === null ? Ah() : u.alternate === null && Lt === 0 && (Lt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = r, c === Jc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), gs(l, c, r)), !1;
          case 22:
            return u.flags |= 65536, c === Jc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), gs(l, c, r)), !1;
        }
        throw Error(T(435, u.tag));
      }
      return gs(l, c, r), Ah(), !1;
    }
    if (ft)
      return n = pa.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = r, c !== Eu && (l = Error(T(422), { cause: c }), ef(Ja(l, u)))) : (c !== Eu && (n = Error(T(423), {
        cause: c
      }), ef(
        Ja(n, u)
      )), l = l.current.alternate, l.flags |= 65536, r &= -r, l.lanes |= r, c = Ja(c, u), r = Cy(
        l.stateNode,
        c,
        r
      ), qd(l, r), Lt !== 4 && (Lt = 2)), !1;
    var s = Error(T(520), { cause: c });
    if (s = Ja(s, u), hs === null ? hs = [s] : hs.push(s), Lt !== 4 && (Lt = 2), n === null) return !0;
    c = Ja(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = r & -r, u.lanes |= l, l = Cy(u.stateNode, c, l), qd(u, l), !1;
        case 1:
          if (n = u.type, s = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (It === null || !It.has(s))))
            return u.flags |= 65536, r &= -r, u.lanes |= r, r = Uy(r), Hy(
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
  var uh = Error(T(461)), pl = !1;
  function $t(l, n, u, c) {
    n.child = l === null ? fy(n, null, u, c) : Fi(
      n,
      l.child,
      u,
      c
    );
  }
  function Ny(l, n, u, c, r) {
    u = u.render;
    var s = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var v in c)
        v !== "ref" && (m[v] = c[v]);
    } else m = c;
    return we(n), c = Kr(
      l,
      n,
      u,
      m,
      s,
      r
    ), v = Ld(), l !== null && !pl ? (Fc(l, n, r), en(l, n, r)) : (ft && v && Io(n), n.flags |= 1, $t(l, n, c, r), n.child);
  }
  function xy(l, n, u, c, r) {
    if (l === null) {
      var s = u.type;
      return typeof s == "function" && !Gc(s) && s.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = s, By(
        l,
        n,
        s,
        c,
        r
      )) : (l = Cd(
        u.type,
        null,
        c,
        n,
        n.mode,
        r
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (s = l.child, !oh(l, r)) {
      var m = s.memoizedProps;
      if (u = u.compare, u = u !== null ? u : pn, u(m, c) && l.ref === n.ref)
        return en(l, n, r);
    }
    return n.flags |= 1, l = ii(s, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function By(l, n, u, c, r) {
    if (l !== null) {
      var s = l.memoizedProps;
      if (pn(s, c) && l.ref === n.ref)
        if (pl = !1, n.pendingProps = c = s, oh(l, r))
          (l.flags & 131072) !== 0 && (pl = !0);
        else
          return n.lanes = l.lanes, en(l, n, r);
    }
    return ih(
      l,
      n,
      u,
      c,
      r
    );
  }
  function ug(l, n, u, c) {
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
        return va(
          l,
          n,
          s,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && tf(
          n,
          s !== null ? s.cachePool : null
        ), s !== null ? K0(n, s) : Zr(), wd(n);
      else
        return c = n.lanes = 536870912, va(
          l,
          n,
          s !== null ? s.baseLanes | u : u,
          u,
          c
        );
    } else
      s !== null ? (tf(n, s.cachePool), K0(n, s), Zn(), n.memoizedState = null) : (l !== null && tf(n, null), Zr(), Zn());
    return $t(l, n, r, u), n.child;
  }
  function nc(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function va(l, n, u, c, r) {
    var s = ka();
    return s = s === null ? null : { parent: ml._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && tf(n, null), Zr(), wd(n), l !== null && jl(l, n, c, !0), n.childLanes = r, null;
  }
  function ns(l, n) {
    return n = cs(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function Sa(l, n, u) {
    return Fi(n, l.child, null, u), l = ns(n, n.pendingProps), l.flags |= 2, ga(n), n.memoizedState = null, l;
  }
  function ig(l, n, u) {
    var c = n.pendingProps, r = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (ft) {
        if (c.mode === "hidden")
          return l = ns(n, c), n.lanes = 536870912, nc(null, l);
        if (uf(n), (l = wt) ? (l = Lg(
          l,
          Rl
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Ln !== null ? { id: Da, overflow: Xn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = ey(l), u.return = n, n.child = u, Bl = n, wt = null)) : l = null, l === null) throw En(n);
        return n.lanes = 536870912, null;
      }
      return ns(n, c);
    }
    var s = l.memoizedState;
    if (s !== null) {
      var m = s.dehydrated;
      if (uf(n), r)
        if (n.flags & 256)
          n.flags &= -257, n = Sa(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(T(558));
      else if (pl || jl(l, n, u, !1), r = (u & l.childLanes) !== 0, pl || r) {
        if (c = Ht, c !== null && (m = La(c, u), m !== 0 && m !== s.retryLane))
          throw s.retryLane = m, ui(l, m), Aa(c, l, m), uh;
        Ah(), n = Sa(
          l,
          n,
          u
        );
      } else
        l = s.treeContext, wt = Oa(m.nextSibling), Bl = n, ft = !0, bu = null, Rl = !1, l !== null && xr(n, l), n = ns(n, c), n.flags |= 4096;
      return n;
    }
    return l = ii(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function Ia(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(T(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function ih(l, n, u, c, r) {
    return we(n), u = Kr(
      l,
      n,
      u,
      c,
      void 0,
      r
    ), c = Ld(), l !== null && !pl ? (Fc(l, n, r), en(l, n, r)) : (ft && c && Io(n), n.flags |= 1, $t(l, n, u, r), n.child);
  }
  function uc(l, n, u, c, r, s) {
    return we(n), n.updateQueue = null, u = k0(
      n,
      c,
      u,
      r
    ), Gd(l), c = Ld(), l !== null && !pl ? (Fc(l, n, s), en(l, n, s)) : (ft && c && Io(n), n.flags |= 1, $t(l, n, u, s), n.child);
  }
  function jy(l, n, u, c, r) {
    if (we(n), n.stateNode === null) {
      var s = ha, m = u.contextType;
      typeof m == "object" && m !== null && (s = W(m)), s = new u(c, s), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Tn, n.stateNode = s, s._reactInternals = n, s = n.stateNode, s.props = c, s.state = n.memoizedState, s.refs = {}, Vr(n), m = u.contextType, s.context = typeof m == "object" && m !== null ? W(m) : ha, s.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (to(
        n,
        u,
        m,
        c
      ), s.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (m = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), m !== s.state && Tn.enqueueReplaceState(s, s.state, null), Ou(n, c, s, r), Pi(), s.state = n.memoizedState), typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      s = n.stateNode;
      var v = n.memoizedProps, R = ac(u, v);
      s.props = R;
      var Y = s.context, Z = u.contextType;
      m = ha, typeof Z == "object" && Z !== null && (m = W(Z));
      var k = u.getDerivedStateFromProps;
      Z = typeof k == "function" || typeof s.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, Z || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (v || Y !== m) && ng(
        n,
        s,
        c,
        m
      ), si = !1;
      var w = n.memoizedState;
      s.state = w, Ou(n, c, s, r), Pi(), Y = n.memoizedState, v || w !== Y || si ? (typeof k == "function" && (to(
        n,
        u,
        k,
        c
      ), Y = n.memoizedState), (R = si || Dy(
        n,
        u,
        R,
        c,
        w,
        Y,
        m
      )) ? (Z || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = Y), s.props = c, s.state = Y, s.context = m, c = R) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      s = n.stateNode, jd(l, n), m = n.memoizedProps, Z = ac(u, m), s.props = Z, k = n.pendingProps, w = s.context, Y = u.contextType, R = ha, typeof Y == "object" && Y !== null && (R = W(Y)), v = u.getDerivedStateFromProps, (Y = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m !== k || w !== R) && ng(
        n,
        s,
        c,
        R
      ), si = !1, w = n.memoizedState, s.state = w, Ou(n, c, s, r), Pi();
      var Q = n.memoizedState;
      m !== k || w !== Q || si || l !== null && l.dependencies !== null && Xc(l.dependencies) ? (typeof v == "function" && (to(
        n,
        u,
        v,
        c
      ), Q = n.memoizedState), (Z = si || Dy(
        n,
        u,
        Z,
        c,
        w,
        Q,
        R
      ) || l !== null && l.dependencies !== null && Xc(l.dependencies)) ? (Y || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(c, Q, R), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        c,
        Q,
        R
      )), typeof s.componentDidUpdate == "function" && (n.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || m === l.memoizedProps && w === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && w === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = Q), s.props = c, s.state = Q, s.context = R, c = Z) : (typeof s.componentDidUpdate != "function" || m === l.memoizedProps && w === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && w === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return s = c, Ia(l, n), c = (n.flags & 128) !== 0, s || c ? (s = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : s.render(), n.flags |= 1, l !== null && c ? (n.child = Fi(
      n,
      l.child,
      null,
      r
    ), n.child = Fi(
      n,
      null,
      u,
      r
    )) : $t(l, n, u, r), n.memoizedState = s.state, l = n.child) : l = en(
      l,
      n,
      r
    ), l;
  }
  function Kn(l, n, u, c) {
    return Zi(), n.flags |= 256, $t(l, n, u, c), n.child;
  }
  var us = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function is(l) {
    return { baseLanes: l, cachePool: Vc() };
  }
  function Pa(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Ta), l;
  }
  function qy(l, n, u) {
    var c = n.pendingProps, r = !1, s = (n.flags & 128) !== 0, m;
    if ((m = s) || (m = l !== null && l.memoizedState === null ? !1 : (Ft.current & 2) !== 0), m && (r = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (ft) {
        if (r ? Ru(n) : Zn(), (l = wt) ? (l = Lg(
          l,
          Rl
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Ln !== null ? { id: Da, overflow: Xn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = ey(l), u.return = n, n.child = u, Bl = n, wt = null)) : l = null, l === null) throw En(n);
        return dc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var v = c.children;
      return c = c.fallback, r ? (Zn(), r = n.mode, v = cs(
        { mode: "hidden", children: v },
        r
      ), c = ci(
        c,
        r,
        u,
        null
      ), v.return = n, c.return = n, v.sibling = c, n.child = v, c = n.child, c.memoizedState = is(u), c.childLanes = Pa(
        l,
        m,
        u
      ), n.memoizedState = us, nc(null, c)) : (Ru(n), ic(n, v));
    }
    var R = l.memoizedState;
    if (R !== null && (v = R.dehydrated, v !== null)) {
      if (s)
        n.flags & 256 ? (Ru(n), n.flags &= -257, n = lo(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Zn(), n.child = l.child, n.flags |= 128, n = null) : (Zn(), v = c.fallback, r = n.mode, c = cs(
          { mode: "visible", children: c.children },
          r
        ), v = ci(
          v,
          r,
          u,
          null
        ), v.flags |= 2, c.return = n, v.return = n, c.sibling = v, n.child = c, Fi(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = is(u), c.childLanes = Pa(
          l,
          m,
          u
        ), n.memoizedState = us, n = nc(null, c));
      else if (Ru(n), dc(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var Y = m.dgst;
        m = Y, c = Error(T(419)), c.stack = "", c.digest = m, ef({ value: c, source: null, stack: null }), n = lo(
          l,
          n,
          u
        );
      } else if (pl || jl(l, n, u, !1), m = (u & l.childLanes) !== 0, pl || m) {
        if (m = Ht, m !== null && (c = La(m, u), c !== 0 && c !== R.retryLane))
          throw R.retryLane = c, ui(l, c), Aa(m, l, c), uh;
        Rn(v) || Ah(), n = lo(
          l,
          n,
          u
        );
      } else
        Rn(v) ? (n.flags |= 192, n.child = l.child, n = null) : (l = R.treeContext, wt = Oa(
          v.nextSibling
        ), Bl = n, ft = !0, bu = null, Rl = !1, l !== null && xr(n, l), n = ic(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return r ? (Zn(), v = c.fallback, r = n.mode, R = l.child, Y = R.sibling, c = ii(R, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = R.subtreeFlags & 65011712, Y !== null ? v = ii(
      Y,
      v
    ) : (v = ci(
      v,
      r,
      u,
      null
    ), v.flags |= 2), v.return = n, c.return = n, c.sibling = v, n.child = c, nc(null, c), c = n.child, v = l.child.memoizedState, v === null ? v = is(u) : (r = v.cachePool, r !== null ? (R = ml._currentValue, r = r.parent !== R ? { parent: R, pool: R } : r) : r = Vc(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: r
    }), c.memoizedState = v, c.childLanes = Pa(
      l,
      m,
      u
    ), n.memoizedState = us, nc(l.child, c)) : (Ru(n), u = l.child, l = u.sibling, u = ii(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function ic(l, n) {
    return n = cs(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function cs(l, n) {
    return l = ol(22, l, null, n), l.lanes = 0, l;
  }
  function lo(l, n, u) {
    return Fi(n, l.child, null, u), l = ic(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function ao(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), xd(l.return, n, u);
  }
  function ch(l, n, u, c, r, s) {
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
  function Yy(l, n, u) {
    var c = n.pendingProps, r = c.revealOrder, s = c.tail;
    c = c.children;
    var m = Ft.current, v = (m & 2) !== 0;
    if (v ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, ee(Ft, m), $t(l, n, c, u), c = ft ? hl : 0, !v && l !== null && (l.flags & 128) !== 0)
      e: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && ao(l, u, n);
        else if (l.tag === 19)
          ao(l, u, n);
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
          l = u.alternate, l !== null && cf(l) === null && (r = u), u = u.sibling;
        u = r, u === null ? (r = n.child, n.child = null) : (r = u.sibling, u.sibling = null), ch(
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
          if (l = r.alternate, l !== null && cf(l) === null) {
            n.child = r;
            break;
          }
          l = r.sibling, r.sibling = u, u = r, r = l;
        }
        ch(
          n,
          !0,
          u,
          null,
          s,
          c
        );
        break;
      case "together":
        ch(
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
  function en(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Fn |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (jl(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(T(153));
    if (n.child !== null) {
      for (l = n.child, u = ii(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = ii(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function oh(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Xc(l)));
  }
  function fh(l, n, u) {
    switch (n.tag) {
      case 3:
        Kt(n, n.stateNode.containerInfo), ya(n, ml, l.memoizedState.cache), Zi();
        break;
      case 27:
      case 5:
        Ya(n);
        break;
      case 4:
        Kt(n, n.stateNode.containerInfo);
        break;
      case 10:
        ya(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, uf(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Ru(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? qy(l, n, u) : (Ru(n), l = en(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Ru(n);
        break;
      case 19:
        var r = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (jl(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), r) {
          if (c)
            return Yy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (r = n.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), ee(Ft, Ft.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, ug(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        ya(n, ml, l.memoizedState.cache);
    }
    return en(l, n, u);
  }
  function wy(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        pl = !0;
      else {
        if (!oh(l, u) && (n.flags & 128) === 0)
          return pl = !1, fh(
            l,
            n,
            u
          );
        pl = (l.flags & 131072) !== 0;
      }
    else
      pl = !1, ft && (n.flags & 1048576) !== 0 && ly(n, hl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var c = n.pendingProps;
          if (l = $i(n.elementType), n.type = l, typeof l == "function")
            Gc(l) ? (c = ac(l, c), n.tag = 1, n = jy(
              null,
              n,
              l,
              c,
              u
            )) : (n.tag = 0, n = ih(
              null,
              n,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var r = l.$$typeof;
              if (r === jt) {
                n.tag = 11, n = Ny(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              } else if (r === Ce) {
                n.tag = 14, n = xy(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              }
            }
            throw n = Jt(l) || l, Error(T(306, n, ""));
          }
        }
        return n;
      case 0:
        return ih(
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
        ), jy(
          l,
          n,
          c,
          r,
          u
        );
      case 3:
        e: {
          if (Kt(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(T(387));
          c = n.pendingProps;
          var s = n.memoizedState;
          r = s.element, jd(l, n), Ou(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, ya(n, ml, c), c !== s.cache && Au(
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
              n = Kn(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== r) {
              r = Ja(
                Error(T(424)),
                n
              ), ef(r), n = Kn(
                l,
                n,
                c,
                u
              );
              break e;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, wt = Oa(l.firstChild), Bl = n, ft = !0, bu = null, Rl = !0, u = fy(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Zi(), c === r) {
              n = en(
                l,
                n,
                u
              );
              break e;
            }
            $t(l, n, c, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Ia(l, n), l === null ? (u = jf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : ft || (u = n.type, l = n.pendingProps, c = sc(
          Ve.current
        ).createElement(u), c[Ct] = n, c[ra] = l, kl(c, u, l), Rt(c), n.stateNode = c) : n.memoizedState = jf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ya(n), l === null && ft && (c = n.stateNode = xf(
          n.type,
          n.pendingProps,
          Ve.current
        ), Bl = n, Rl = !0, r = wt, Pn(n.type) ? (_s = r, wt = Oa(c.firstChild)) : wt = r), $t(
          l,
          n,
          n.pendingProps.children,
          u
        ), Ia(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && ft && ((r = c = wt) && (c = f1(
          c,
          n.type,
          n.pendingProps,
          Rl
        ), c !== null ? (n.stateNode = c, Bl = n, wt = Oa(c.firstChild), Rl = !1, r = !0) : r = !1), r || En(n)), Ya(n), r = n.type, s = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = s.children, Hf(r, s) ? c = null : m !== null && Hf(r, m) && (n.flags |= 32), n.memoizedState !== null && (r = Kr(
          l,
          n,
          u1,
          null,
          null,
          u
        ), Ms._currentValue = r), Ia(l, n), $t(l, n, c, u), n.child;
      case 6:
        return l === null && ft && ((l = u = wt) && (u = Pe(
          u,
          n.pendingProps,
          Rl
        ), u !== null ? (n.stateNode = u, Bl = n, wt = null, l = !0) : l = !1), l || En(n)), null;
      case 13:
        return qy(l, n, u);
      case 4:
        return Kt(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = Fi(
          n,
          null,
          c,
          u
        ) : $t(l, n, c, u), n.child;
      case 11:
        return Ny(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return $t(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return $t(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return $t(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, ya(n, n.type, c.value), $t(l, n, c.children, u), n.child;
      case 9:
        return r = n.type._context, c = n.pendingProps.children, we(n), r = W(r), c = c(r), n.flags |= 1, $t(l, n, c, u), n.child;
      case 14:
        return xy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return By(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Yy(l, n, u);
      case 31:
        return ig(l, n, u);
      case 22:
        return ug(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return we(n), c = W(ml), l === null ? (r = ka(), r === null && (r = Ht, s = qr(), r.pooledCache = s, s.refCount++, s !== null && (r.pooledCacheLanes |= u), r = s), n.memoizedState = { parent: c, cache: r }, Vr(n), ya(n, ml, r)) : ((l.lanes & u) !== 0 && (jd(l, n), Ou(n, null, null, u), Pi()), r = l.memoizedState, s = n.memoizedState, r.parent !== c ? (r = { parent: c, cache: c }, n.memoizedState = r, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = r), ya(n, ml, c)) : (c = s.cache, ya(n, ml, c), c !== r.cache && Au(
          n,
          [ml],
          u,
          !0
        ))), $t(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(T(156, n.tag));
  }
  function Uu(l) {
    l.flags |= 4;
  }
  function Gy(l, n, u, c, r) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (r & 335544128) === r)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (pg()) l.flags |= 8192;
        else
          throw ki = Jc, Zc;
    } else l.flags &= -16777217;
  }
  function Ly(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !xa(n))
      if (pg()) l.flags |= 8192;
      else
        throw ki = Jc, Zc;
  }
  function na(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ta() : 536870912, l.lanes |= n, nl |= n);
  }
  function yf(l, n) {
    if (!ft)
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
  function Ye(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags & 65011712, c |= r.flags & 65011712, r.return = l, r = r.sibling;
    else
      for (r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags, c |= r.flags, r.return = l, r = r.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function cg(l, n, u) {
    var c = n.pendingProps;
    switch (Hd(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ye(n), null;
      case 1:
        return Ye(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Vn(ml), gt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Tu(n) ? Uu(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, ay())), Ye(n), null;
      case 26:
        var r = n.type, s = n.memoizedState;
        return l === null ? (Uu(n), s !== null ? (Ye(n), Ly(n, s)) : (Ye(n), Gy(
          n,
          r,
          null,
          c,
          u
        ))) : s ? s !== l.memoizedState ? (Uu(n), Ye(n), Ly(n, s)) : (Ye(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && Uu(n), Ye(n), Gy(
          n,
          r,
          l,
          c,
          u
        )), null;
      case 27:
        if (re(n), u = Ve.current, r = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Uu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(T(166));
            return Ye(n), null;
          }
          l = P.current, Tu(n) ? Br(n) : (l = xf(r, c, u), n.stateNode = l, Uu(n));
        }
        return Ye(n), null;
      case 5:
        if (re(n), r = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Uu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(T(166));
            return Ye(n), null;
          }
          if (s = P.current, Tu(n))
            Br(n);
          else {
            var m = sc(
              Ve.current
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
            s[Ct] = n, s[ra] = c;
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
            e: switch (kl(s, r, c), r) {
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
        return Ye(n), Gy(
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
            throw Error(T(166));
          if (l = Ve.current, Tu(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, r = Bl, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  c = r.memoizedProps;
              }
            l[Ct] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || sp(l.nodeValue, u)), l || En(n, !0);
          } else
            l = sc(l).createTextNode(
              c
            ), l[Ct] = n, n.stateNode = l;
        }
        return Ye(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = Tu(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(T(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(T(557));
              l[Ct] = n;
            } else
              Zi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ye(n), l = !1;
          } else
            u = ay(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (ga(n), n) : (ga(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(T(558));
        }
        return Ye(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (r = Tu(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!r) throw Error(T(318));
              if (r = n.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(T(317));
              r[Ct] = n;
            } else
              Zi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ye(n), r = !1;
          } else
            r = ay(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return n.flags & 256 ? (ga(n), n) : (ga(n), null);
        }
        return ga(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, r = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (r = c.alternate.memoizedState.cachePool.pool), s = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (s = c.memoizedState.cachePool.pool), s !== r && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), na(n, n.updateQueue), Ye(n), null);
      case 4:
        return gt(), l === null && Uf(n.stateNode.containerInfo), Ye(n), null;
      case 10:
        return Vn(n.type), Ye(n), null;
      case 19:
        if (q(Ft), c = n.memoizedState, c === null) return Ye(n), null;
        if (r = (n.flags & 128) !== 0, s = c.rendering, s === null)
          if (r) yf(c, !1);
          else {
            if (Lt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (s = cf(l), s !== null) {
                  for (n.flags |= 128, yf(c, !1), l = s.updateQueue, n.updateQueue = l, na(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Pm(u, l), u = u.sibling;
                  return ee(
                    Ft,
                    Ft.current & 1 | 2
                  ), ft && bn(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && Sl() > At && (n.flags |= 128, r = !0, yf(c, !1), n.lanes = 4194304);
          }
        else {
          if (!r)
            if (l = cf(s), l !== null) {
              if (n.flags |= 128, r = !0, l = l.updateQueue, n.updateQueue = l, na(n, l), yf(c, !0), c.tail === null && c.tailMode === "hidden" && !s.alternate && !ft)
                return Ye(n), null;
            } else
              2 * Sl() - c.renderingStartTime > At && u !== 536870912 && (n.flags |= 128, r = !0, yf(c, !1), n.lanes = 4194304);
          c.isBackwards ? (s.sibling = n.child, n.child = s) : (l = c.last, l !== null ? l.sibling = s : n.child = s, c.last = s);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = Sl(), l.sibling = null, u = Ft.current, ee(
          Ft,
          r ? u & 1 | 2 : u & 1
        ), ft && bn(n, c.treeForkCount), l) : (Ye(n), null);
      case 22:
      case 23:
        return ga(n), nf(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Ye(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ye(n), u = n.updateQueue, u !== null && na(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && q($a), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Vn(ml), Ye(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(T(156, n.tag));
  }
  function og(l, n) {
    switch (Hd(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Vn(ml), gt(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return re(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (ga(n), n.alternate === null)
            throw Error(T(340));
          Zi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (ga(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(T(340));
          Zi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return q(Ft), null;
      case 4:
        return gt(), null;
      case 10:
        return Vn(n.type), null;
      case 22:
      case 23:
        return ga(n), nf(), l !== null && q($a), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Vn(ml), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function fg(l, n) {
    switch (Hd(n), n.tag) {
      case 3:
        Vn(ml), gt();
        break;
      case 26:
      case 27:
      case 5:
        re(n);
        break;
      case 4:
        gt();
        break;
      case 31:
        n.memoizedState !== null && ga(n);
        break;
      case 13:
        ga(n);
        break;
      case 19:
        q(Ft);
        break;
      case 10:
        Vn(n.type);
        break;
      case 22:
      case 23:
        ga(n), nf(), l !== null && q($a);
        break;
      case 24:
        Vn(ml);
    }
  }
  function An(l, n) {
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
      Mt(n, n.return, v);
    }
  }
  function tn(l, n, u) {
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
              var R = u, Y = v;
              try {
                Y();
              } catch (Z) {
                Mt(
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
      Mt(n, n.return, Z);
    }
  }
  function rh(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        ec(n, u);
      } catch (c) {
        Mt(l, l.return, c);
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
      Mt(l, n, c);
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
      Mt(l, n, r);
    }
  }
  function $n(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (r) {
          Mt(l, n, r);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (r) {
          Mt(l, n, r);
        }
      else u.current = null;
  }
  function Xy(l) {
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
      Mt(l, l.return, r);
    }
  }
  function sh(l, n, u) {
    try {
      var c = l.stateNode;
      hp(c, l.type, u, n), c[ra] = n;
    } catch (r) {
      Mt(l, l.return, r);
    }
  }
  function Qy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Pn(l.type) || l.tag === 4;
  }
  function pf(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Qy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Pn(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function gf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = xn));
    else if (c !== 4 && (c === 27 && Pn(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (gf(l, n, u), l = l.sibling; l !== null; )
        gf(l, n, u), l = l.sibling;
  }
  function vf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Pn(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (vf(l, n, u), l = l.sibling; l !== null; )
        vf(l, n, u), l = l.sibling;
  }
  function Vy(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, r = n.attributes; r.length; )
        n.removeAttributeNode(r[0]);
      kl(n, c, u), n[Ct] = l, n[ra] = u;
    } catch (s) {
      Mt(l, l.return, s);
    }
  }
  var pi = !1, El = !1, dh = !1, Zy = typeof WeakSet == "function" ? WeakSet : Set, wl = null;
  function Sf(l, n) {
    if (l = l.containerInfo, Hh = Dl, l = Xi(l), Dr(l)) {
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
            var m = 0, v = -1, R = -1, Y = 0, Z = 0, k = l, w = null;
            t: for (; ; ) {
              for (var Q; k !== u || r !== 0 && k.nodeType !== 3 || (v = m + r), k !== s || c !== 0 && k.nodeType !== 3 || (R = m + c), k.nodeType === 3 && (m += k.nodeValue.length), (Q = k.firstChild) !== null; )
                w = k, k = Q;
              for (; ; ) {
                if (k === l) break t;
                if (w === u && ++Y === r && (v = m), w === s && ++Z === c && (R = m), (Q = k.nextSibling) !== null) break;
                k = w, w = k.parentNode;
              }
              k = Q;
            }
            u = v === -1 || R === -1 ? null : { start: v, end: R };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Nh = { focusedElem: l, selectionRange: u }, Dl = !1, wl = n; wl !== null; )
      if (n = wl, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, wl = l;
      else
        for (; wl !== null; ) {
          switch (n = wl, s = n.alternate, l = n.flags, n.tag) {
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
                  var de = ac(
                    u.type,
                    r
                  );
                  l = c.getSnapshotBeforeUpdate(
                    de,
                    s
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (He) {
                  Mt(
                    u,
                    u.return,
                    He
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Rs(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Rs(l);
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
              if ((l & 1024) !== 0) throw Error(T(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, wl = l;
            break;
          }
          wl = n.return;
        }
  }
  function os(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        gi(l, u), c & 4 && An(5, u);
        break;
      case 1:
        if (gi(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              Mt(u, u.return, m);
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
              Mt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && rh(u), c & 512 && Hu(u, u.return);
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
            Mt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && Vy(u);
      case 26:
      case 5:
        gi(l, u), n === null && c & 4 && Xy(u), c & 512 && Hu(u, u.return);
        break;
      case 12:
        gi(l, u);
        break;
      case 31:
        gi(l, u), c & 4 && rg(l, u);
        break;
      case 13:
        gi(l, u), c & 4 && $y(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = ln.bind(
          null,
          u
        ), Nf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || pi, !c) {
          n = n !== null && n.memoizedState !== null || El, r = pi;
          var s = El;
          pi = c, (El = n) && !s ? kn(
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
  function Jy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Jy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && od(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Gt = null, ba = !1;
  function Nu(l, n, u) {
    for (u = u.child; u !== null; )
      Ky(l, n, u), u = u.sibling;
  }
  function Ky(l, n, u) {
    if (Ol && typeof Ol.onCommitFiberUnmount == "function")
      try {
        Ol.onCommitFiberUnmount(dn, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        El || $n(u, n), Nu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        El || $n(u, n);
        var c = Gt, r = ba;
        Pn(u.type) && (Gt = u.stateNode, ba = !1), Nu(
          l,
          n,
          u
        ), so(u.stateNode), Gt = c, ba = r;
        break;
      case 5:
        El || $n(u, n);
      case 6:
        if (c = Gt, r = ba, Gt = null, Nu(
          l,
          n,
          u
        ), Gt = c, ba = r, Gt !== null)
          if (ba)
            try {
              (Gt.nodeType === 9 ? Gt.body : Gt.nodeName === "HTML" ? Gt.ownerDocument.body : Gt).removeChild(u.stateNode);
            } catch (s) {
              Mt(
                u,
                n,
                s
              );
            }
          else
            try {
              Gt.removeChild(u.stateNode);
            } catch (s) {
              Mt(
                u,
                n,
                s
              );
            }
        break;
      case 18:
        Gt !== null && (ba ? (l = Gt, gp(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Vf(l)) : gp(Gt, u.stateNode));
        break;
      case 4:
        c = Gt, r = ba, Gt = u.stateNode.containerInfo, ba = !0, Nu(
          l,
          n,
          u
        ), Gt = c, ba = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        tn(2, u, n), El || tn(4, u, n), Nu(
          l,
          n,
          u
        );
        break;
      case 1:
        El || ($n(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && cc(
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
  function rg(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Vf(l);
      } catch (u) {
        Mt(n, n.return, u);
      }
    }
  }
  function $y(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Vf(l);
      } catch (u) {
        Mt(n, n.return, u);
      }
  }
  function fs(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new Zy()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new Zy()), n;
      default:
        throw Error(T(435, l.tag));
    }
  }
  function rs(l, n) {
    var u = fs(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var r = Ug.bind(null, l, c);
        c.then(r, r);
      }
    });
  }
  function Ea(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var r = u[c], s = l, m = n, v = m;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Pn(v.type)) {
                Gt = v.stateNode, ba = !1;
                break e;
              }
              break;
            case 5:
              Gt = v.stateNode, ba = !1;
              break e;
            case 3:
            case 4:
              Gt = v.stateNode.containerInfo, ba = !0;
              break e;
          }
          v = v.return;
        }
        if (Gt === null) throw Error(T(160));
        Ky(s, m, r), Gt = null, ba = !1, s = r.alternate, s !== null && (s.return = null), r.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        hh(n, l), n = n.sibling;
  }
  var ke = null;
  function hh(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ea(n, l), Ma(l), c & 4 && (tn(3, l, l.return), An(3, l), tn(5, l, l.return));
        break;
      case 1:
        Ea(n, l), Ma(l), c & 512 && (El || u === null || $n(u, u.return)), c & 64 && pi && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var r = ke;
        if (Ea(n, l), Ma(l), c & 512 && (El || u === null || $n(u, u.return)), c & 4) {
          var s = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, r = r.ownerDocument || r;
                  t: switch (c) {
                    case "title":
                      s = r.getElementsByTagName("title")[0], (!s || s[du] || s[Ct] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = r.createElement(c), r.head.insertBefore(
                        s,
                        r.querySelector("head > title")
                      )), kl(s, c, u), s[Ct] = l, Rt(s), c = s;
                      break e;
                    case "link":
                      var m = Ep(
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
                      s = r.createElement(c), kl(s, c, u), r.head.appendChild(s);
                      break;
                    case "meta":
                      if (m = Ep(
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
                      s = r.createElement(c), kl(s, c, u), r.head.appendChild(s);
                      break;
                    default:
                      throw Error(T(468, c));
                  }
                  s[Ct] = l, Rt(s), c = s;
                }
                l.stateNode = c;
              } else
                Yh(
                  r,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = bp(
                r,
                c,
                l.memoizedProps
              );
          else
            s !== c ? (s === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : s.count--, c === null ? Yh(
              r,
              l.type,
              l.stateNode
            ) : bp(
              r,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && sh(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Ea(n, l), Ma(l), c & 512 && (El || u === null || $n(u, u.return)), u !== null && c & 4 && sh(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Ea(n, l), Ma(l), c & 512 && (El || u === null || $n(u, u.return)), l.flags & 32) {
          r = l.stateNode;
          try {
            mu(r, "");
          } catch (de) {
            Mt(l, l.return, de);
          }
        }
        c & 4 && l.stateNode != null && (r = l.memoizedProps, sh(
          l,
          r,
          u !== null ? u.memoizedProps : r
        )), c & 1024 && (dh = !0);
        break;
      case 6:
        if (Ea(n, l), Ma(l), c & 4) {
          if (l.stateNode === null)
            throw Error(T(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (de) {
            Mt(l, l.return, de);
          }
        }
        break;
      case 3:
        if (wf = null, r = ke, ke = ua(n.containerInfo), Ea(n, l), ke = r, Ma(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Vf(n.containerInfo);
          } catch (de) {
            Mt(l, l.return, de);
          }
        dh && (dh = !1, ky(l));
        break;
      case 4:
        c = ke, ke = ua(
          l.stateNode.containerInfo
        ), Ea(n, l), Ma(l), ke = c;
        break;
      case 12:
        Ea(n, l), Ma(l);
        break;
      case 31:
        Ea(n, l), Ma(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, rs(l, c)));
        break;
      case 13:
        Ea(n, l), Ma(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (In = Sl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, rs(l, c)));
        break;
      case 22:
        r = l.memoizedState !== null;
        var R = u !== null && u.memoizedState !== null, Y = pi, Z = El;
        if (pi = Y || r, El = Z || R, Ea(n, l), El = Z, pi = Y, Ma(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = r ? n._visibility & -2 : n._visibility | 1, r && (u === null || R || pi || El || no(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                R = u = n;
                try {
                  if (s = R.stateNode, r)
                    m = s.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = R.stateNode;
                    var k = R.memoizedProps.style, w = k != null && k.hasOwnProperty("display") ? k.display : null;
                    v.style.display = w == null || typeof w == "boolean" ? "" : ("" + w).trim();
                  }
                } catch (de) {
                  Mt(R, R.return, de);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                R = n;
                try {
                  R.stateNode.nodeValue = r ? "" : R.memoizedProps;
                } catch (de) {
                  Mt(R, R.return, de);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                R = n;
                try {
                  var Q = R.stateNode;
                  r ? gl(Q, !0) : gl(R.stateNode, !1);
                } catch (de) {
                  Mt(R, R.return, de);
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
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, rs(l, u))));
        break;
      case 19:
        Ea(n, l), Ma(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, rs(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ea(n, l), Ma(l);
    }
  }
  function Ma(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (Qy(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(T(160));
        switch (u.tag) {
          case 27:
            var r = u.stateNode, s = pf(l);
            vf(l, s, r);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (mu(m, ""), u.flags &= -33);
            var v = pf(l);
            vf(l, v, m);
            break;
          case 3:
          case 4:
            var R = u.stateNode.containerInfo, Y = pf(l);
            gf(
              l,
              Y,
              R
            );
            break;
          default:
            throw Error(T(161));
        }
      } catch (Z) {
        Mt(l, l.return, Z);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function ky(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        ky(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function gi(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        os(l, n.alternate, n), n = n.sibling;
  }
  function no(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          tn(4, n, n.return), no(n);
          break;
        case 1:
          $n(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && cc(
            n,
            n.return,
            u
          ), no(n);
          break;
        case 27:
          so(n.stateNode);
        case 26:
        case 5:
          $n(n, n.return), no(n);
          break;
        case 22:
          n.memoizedState === null && no(n);
          break;
        case 30:
          no(n);
          break;
        default:
          no(n);
      }
      l = l.sibling;
    }
  }
  function kn(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, r = l, s = n, m = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          kn(
            r,
            s,
            u
          ), An(4, s);
          break;
        case 1:
          if (kn(
            r,
            s,
            u
          ), c = s, r = c.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (Y) {
              Mt(c, c.return, Y);
            }
          if (c = s, r = c.updateQueue, r !== null) {
            var v = c.stateNode;
            try {
              var R = r.shared.hiddenCallbacks;
              if (R !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < R.length; r++)
                  Yd(R[r], v);
            } catch (Y) {
              Mt(c, c.return, Y);
            }
          }
          u && m & 64 && rh(s), Hu(s, s.return);
          break;
        case 27:
          Vy(s);
        case 26:
        case 5:
          kn(
            r,
            s,
            u
          ), u && c === null && m & 4 && Xy(s), Hu(s, s.return);
          break;
        case 12:
          kn(
            r,
            s,
            u
          );
          break;
        case 31:
          kn(
            r,
            s,
            u
          ), u && m & 4 && rg(r, s);
          break;
        case 13:
          kn(
            r,
            s,
            u
          ), u && m & 4 && $y(r, s);
          break;
        case 22:
          s.memoizedState === null && kn(
            r,
            s,
            u
          ), Hu(s, s.return);
          break;
        case 30:
          break;
        default:
          kn(
            r,
            s,
            u
          );
      }
      n = n.sibling;
    }
  }
  function mh(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Yr(u));
  }
  function yh(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Yr(l));
  }
  function On(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        bf(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function bf(l, n, u, c) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        On(
          l,
          n,
          u,
          c
        ), r & 2048 && An(9, n);
        break;
      case 1:
        On(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        On(
          l,
          n,
          u,
          c
        ), r & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Yr(l)));
        break;
      case 12:
        if (r & 2048) {
          On(
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
            Mt(n, n.return, R);
          }
        } else
          On(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        On(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        On(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        s = n.stateNode, m = n.alternate, n.memoizedState !== null ? s._visibility & 2 ? On(
          l,
          n,
          u,
          c
        ) : ss(l, n) : s._visibility & 2 ? On(
          l,
          n,
          u,
          c
        ) : (s._visibility |= 2, Ef(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), r & 2048 && mh(m, n);
        break;
      case 24:
        On(
          l,
          n,
          u,
          c
        ), r & 2048 && yh(n.alternate, n);
        break;
      default:
        On(
          l,
          n,
          u,
          c
        );
    }
  }
  function Ef(l, n, u, c, r) {
    for (r = r && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var s = l, m = n, v = u, R = c, Y = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Ef(
            s,
            m,
            v,
            R,
            r
          ), An(8, m);
          break;
        case 23:
          break;
        case 22:
          var Z = m.stateNode;
          m.memoizedState !== null ? Z._visibility & 2 ? Ef(
            s,
            m,
            v,
            R,
            r
          ) : ss(
            s,
            m
          ) : (Z._visibility |= 2, Ef(
            s,
            m,
            v,
            R,
            r
          )), r && Y & 2048 && mh(
            m.alternate,
            m
          );
          break;
        case 24:
          Ef(
            s,
            m,
            v,
            R,
            r
          ), r && Y & 2048 && yh(m.alternate, m);
          break;
        default:
          Ef(
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
  function ss(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, r = c.flags;
        switch (c.tag) {
          case 22:
            ss(u, c), r & 2048 && mh(
              c.alternate,
              c
            );
            break;
          case 24:
            ss(u, c), r & 2048 && yh(c.alternate, c);
            break;
          default:
            ss(u, c);
        }
        n = n.sibling;
      }
  }
  var Ca = 8192;
  function xu(l, n, u) {
    if (l.subtreeFlags & Ca)
      for (l = l.child; l !== null; )
        sg(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function sg(l, n, u) {
    switch (l.tag) {
      case 26:
        xu(
          l,
          n,
          u
        ), l.flags & Ca && l.memoizedState !== null && wu(
          u,
          ke,
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
        var c = ke;
        ke = ua(l.stateNode.containerInfo), xu(
          l,
          n,
          u
        ), ke = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = Ca, Ca = 16777216, xu(
          l,
          n,
          u
        ), Ca = c) : xu(
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
  function ph(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Tf(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          wl = c, gh(
            c,
            l
          );
        }
      ph(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Wy(l), l = l.sibling;
  }
  function Wy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Tf(l), l.flags & 2048 && tn(9, l, l.return);
        break;
      case 3:
        Tf(l);
        break;
      case 12:
        Tf(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, ds(l)) : Tf(l);
        break;
      default:
        Tf(l);
    }
  }
  function ds(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          wl = c, gh(
            c,
            l
          );
        }
      ph(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          tn(8, n, n.return), ds(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, ds(n));
          break;
        default:
          ds(n);
      }
      l = l.sibling;
    }
  }
  function gh(l, n) {
    for (; wl !== null; ) {
      var u = wl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          tn(8, u, n);
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
      if (c = u.child, c !== null) c.return = u, wl = c;
      else
        e: for (u = l; wl !== null; ) {
          c = wl;
          var r = c.sibling, s = c.return;
          if (Jy(c), c === u) {
            wl = null;
            break e;
          }
          if (r !== null) {
            r.return = s, wl = r;
            break e;
          }
          wl = s;
        }
    }
  }
  var dg = {
    getCacheForType: function(l) {
      var n = W(ml), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return W(ml).controller.signal;
    }
  }, Fy = typeof WeakMap == "function" ? WeakMap : Map, St = 0, Ht = null, rt = null, nt = 0, Dt = 0, Be = null, Bu = !1, oc = !1, vh = !1, Wn = 0, Lt = 0, Fn = 0, uo = 0, Sh = 0, Ta = 0, nl = 0, hs = null, ul = null, bh = !1, In = 0, Iy = 0, At = 1 / 0, Af = null, It = null, zl = 0, vi = null, fc = null, ju = 0, Ua = 0, Eh = null, Th = null, Of = 0, ms = null;
  function Ha() {
    return (St & 2) !== 0 && nt !== 0 ? nt & -nt : C.T !== null ? zh() : id();
  }
  function hg() {
    if (Ta === 0)
      if ((nt & 536870912) === 0 || ft) {
        var l = ue;
        ue <<= 1, (ue & 3932160) === 0 && (ue = 262144), Ta = l;
      } else Ta = 536870912;
    return l = pa.current, l !== null && (l.flags |= 32), Ta;
  }
  function Aa(l, n, u) {
    (l === Ht && (Dt === 2 || Dt === 9) || l.cancelPendingCommit !== null) && (qu(l, 0), Si(
      l,
      nt,
      Ta,
      !1
    )), xi(l, u), ((St & 2) === 0 || l !== Ht) && (l === Ht && ((St & 2) === 0 && (uo |= u), Lt === 4 && Si(
      l,
      nt,
      Ta,
      !1
    )), Yu(l));
  }
  function mg(l, n, u) {
    if ((St & 6) !== 0) throw Error(T(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || at(l, n), r = c ? Sg(l, n) : Oh(l, n, !0), s = c;
    do {
      if (r === 0) {
        oc && !c && Si(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, s && !yg(u)) {
          r = Oh(l, n, !1), s = !1;
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
              r = hs;
              var R = v.current.memoizedState.isDehydrated;
              if (R && (qu(v, m).flags |= 256), m = Oh(
                v,
                m,
                !1
              ), m !== 2) {
                if (vh && !R) {
                  v.errorRecoveryDisabledLanes |= s, uo |= s, r = 4;
                  break e;
                }
                s = ul, ul = r, s !== null && (ul === null ? ul = s : ul.push.apply(
                  ul,
                  s
                ));
              }
              r = m;
            }
            if (s = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          qu(l, 0), Si(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, s = r, s) {
            case 0:
            case 1:
              throw Error(T(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Si(
                c,
                n,
                Ta,
                !Bu
              );
              break e;
            case 2:
              ul = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(T(329));
          }
          if ((n & 62914560) === n && (r = In + 300 - Sl(), 10 < r)) {
            if (Si(
              c,
              n,
              Ta,
              !Bu
            ), ge(c, 0, !0) !== 0) break e;
            ju = n, c.timeoutHandle = Os(
              ys.bind(
                null,
                c,
                u,
                ul,
                Af,
                bh,
                n,
                Ta,
                uo,
                nl,
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
          ys(
            c,
            u,
            ul,
            Af,
            bh,
            n,
            Ta,
            uo,
            nl,
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
    Yu(l);
  }
  function ys(l, n, u, c, r, s, m, v, R, Y, Z, k, w, Q) {
    if (l.timeoutHandle = -1, k = n.subtreeFlags, k & 8192 || (k & 16785408) === 16785408) {
      k = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: xn
      }, sg(
        n,
        s,
        k
      );
      var de = (s & 62914560) === s ? In - Sl() : (s & 4194048) === s ? Iy - Sl() : 0;
      if (de = Ap(
        k,
        de
      ), de !== null) {
        ju = s, l.cancelPendingCommit = de(
          Ag.bind(
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
            k,
            null,
            w,
            Q
          )
        ), Si(l, s, m, !Y);
        return;
      }
    }
    Ag(
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
  function yg(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var r = u[c], s = r.getSnapshot;
          r = r.value;
          try {
            if (!aa(s(), r)) return !1;
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
    n &= ~Sh, n &= ~uo, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var r = n; 0 < r; ) {
      var s = 31 - Hl(r), m = 1 << s;
      c[s] = -1, r &= ~m;
    }
    u !== 0 && gr(l, u, n);
  }
  function Rf() {
    return (St & 6) === 0 ? (Ei(0), !1) : !0;
  }
  function Py() {
    if (rt !== null) {
      if (Dt === 0)
        var l = rt.return;
      else
        l = rt, Qn = oi = null, $r(l), Wi = null, Kc = 0, l = rt;
      for (; l !== null; )
        fg(l.alternate, l), l = l.return;
      rt = null;
    }
  }
  function qu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, wg(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), ju = 0, Py(), Ht = l, rt = u = ii(l.current, null), nt = n, Dt = 0, Be = null, Bu = !1, oc = at(l, n), vh = !1, nl = Ta = Sh = uo = Fn = Lt = 0, ul = hs = null, bh = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var r = 31 - Hl(c), s = 1 << r;
        n |= l[r], c &= ~s;
      }
    return Wn = n, Va(), u;
  }
  function _f(l, n) {
    Ke = null, C.H = ls, n === Ki || n === lf ? (n = oy(), Dt = 3) : n === Zc ? (n = oy(), Dt = 4) : Dt = n === uh ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Be = n, rt === null && (Lt = 1, mf(
      l,
      Ja(n, l.current)
    ));
  }
  function pg() {
    var l = pa.current;
    return l === null ? !0 : (nt & 4194048) === nt ? Fa === null : (nt & 62914560) === nt || (nt & 536870912) !== 0 ? l === Fa : !1;
  }
  function gg() {
    var l = C.H;
    return C.H = ls, l === null ? ls : l;
  }
  function vg() {
    var l = C.A;
    return C.A = dg, l;
  }
  function Ah() {
    Lt = 4, Bu || (nt & 4194048) !== nt && pa.current !== null || (oc = !0), (Fn & 134217727) === 0 && (uo & 134217727) === 0 || Ht === null || Si(
      Ht,
      nt,
      Ta,
      !1
    );
  }
  function Oh(l, n, u) {
    var c = St;
    St |= 2;
    var r = gg(), s = vg();
    (Ht !== l || nt !== n) && (Af = null, qu(l, n)), n = !1;
    var m = Lt;
    e: do
      try {
        if (Dt !== 0 && rt !== null) {
          var v = rt, R = Be;
          switch (Dt) {
            case 8:
              Py(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              pa.current === null && (n = !0);
              var Y = Dt;
              if (Dt = 0, Be = null, io(l, v, R, Y), u && oc) {
                m = 0;
                break e;
              }
              break;
            default:
              Y = Dt, Dt = 0, Be = null, io(l, v, R, Y);
          }
        }
        c1(), m = Lt;
        break;
      } catch (Z) {
        _f(l, Z);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Qn = oi = null, St = c, C.H = r, C.A = s, rt === null && (Ht = null, nt = 0, Va()), m;
  }
  function c1() {
    for (; rt !== null; ) bg(rt);
  }
  function Sg(l, n) {
    var u = St;
    St |= 2;
    var c = gg(), r = vg();
    Ht !== l || nt !== n ? (Af = null, At = Sl() + 500, qu(l, n)) : oc = at(
      l,
      n
    );
    e: do
      try {
        if (Dt !== 0 && rt !== null) {
          n = rt;
          var s = Be;
          t: switch (Dt) {
            case 1:
              Dt = 0, Be = null, io(l, n, s, 1);
              break;
            case 2:
            case 9:
              if (iy(s)) {
                Dt = 0, Be = null, Eg(n);
                break;
              }
              n = function() {
                Dt !== 2 && Dt !== 9 || Ht !== l || (Dt = 7), Yu(l);
              }, s.then(n, n);
              break e;
            case 3:
              Dt = 7;
              break e;
            case 4:
              Dt = 5;
              break e;
            case 7:
              iy(s) ? (Dt = 0, Be = null, Eg(n)) : (Dt = 0, Be = null, io(l, n, s, 7));
              break;
            case 5:
              var m = null;
              switch (rt.tag) {
                case 26:
                  m = rt.memoizedState;
                case 5:
                case 27:
                  var v = rt;
                  if (m ? xa(m) : v.stateNode.complete) {
                    Dt = 0, Be = null;
                    var R = v.sibling;
                    if (R !== null) rt = R;
                    else {
                      var Y = v.return;
                      Y !== null ? (rt = Y, ps(Y)) : rt = null;
                    }
                    break t;
                  }
              }
              Dt = 0, Be = null, io(l, n, s, 5);
              break;
            case 6:
              Dt = 0, Be = null, io(l, n, s, 6);
              break;
            case 8:
              Py(), Lt = 6;
              break e;
            default:
              throw Error(T(462));
          }
        }
        rc();
        break;
      } catch (Z) {
        _f(l, Z);
      }
    while (!0);
    return Qn = oi = null, C.H = c, C.A = r, St = u, rt !== null ? 0 : (Ht = null, nt = 0, Va(), Lt);
  }
  function rc() {
    for (; rt !== null && !ru(); )
      bg(rt);
  }
  function bg(l) {
    var n = wy(l.alternate, l, Wn);
    l.memoizedProps = l.pendingProps, n === null ? ps(l) : rt = n;
  }
  function Eg(l) {
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
          nt
        );
        break;
      case 11:
        n = uc(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          nt
        );
        break;
      case 5:
        $r(n);
      default:
        fg(u, n), n = rt = Pm(n, Wn), n = wy(u, n, Wn);
    }
    l.memoizedProps = l.pendingProps, n === null ? ps(l) : rt = n;
  }
  function io(l, n, u, c) {
    Qn = oi = null, $r(n), Wi = null, Kc = 0;
    var r = n.return;
    try {
      if (i1(
        l,
        r,
        n,
        u,
        nt
      )) {
        Lt = 1, mf(
          l,
          Ja(u, l.current)
        ), rt = null;
        return;
      }
    } catch (s) {
      if (r !== null) throw rt = r, s;
      Lt = 1, mf(
        l,
        Ja(u, l.current)
      ), rt = null;
      return;
    }
    n.flags & 32768 ? (ft || c === 1 ? l = !0 : oc || (nt & 536870912) !== 0 ? l = !1 : (Bu = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = pa.current, c !== null && c.tag === 13 && (c.flags |= 16384))), Tg(n, l)) : ps(n);
  }
  function ps(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        Tg(
          n,
          Bu
        );
        return;
      }
      l = n.return;
      var u = cg(
        n.alternate,
        n,
        Wn
      );
      if (u !== null) {
        rt = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        rt = n;
        return;
      }
      rt = n = l;
    } while (n !== null);
    Lt === 0 && (Lt = 5);
  }
  function Tg(l, n) {
    do {
      var u = og(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, rt = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        rt = l;
        return;
      }
      rt = l = u;
    } while (l !== null);
    Lt = 6, rt = null;
  }
  function Ag(l, n, u, c, r, s, m, v, R) {
    l.cancelPendingCommit = null;
    do
      zf();
    while (zl !== 0);
    if ((St & 6) !== 0) throw Error(T(327));
    if (n !== null) {
      if (n === l.current) throw Error(T(177));
      if (s = n.lanes | n.childLanes, s |= vn, jo(
        l,
        u,
        s,
        m,
        v,
        R
      ), l === Ht && (rt = Ht = null, nt = 0), fc = n, vi = l, ju = u, Ua = s, Eh = r, Th = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Hg(Hn, function() {
        return Dg(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = C.T, C.T = null, r = J.p, J.p = 2, m = St, St |= 4;
        try {
          Sf(l, n, u);
        } finally {
          St = m, J.p = r, C.T = c;
        }
      }
      zl = 1, Og(), Rg(), _g();
    }
  }
  function Og() {
    if (zl === 1) {
      zl = 0;
      var l = vi, n = fc, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = C.T, C.T = null;
        var c = J.p;
        J.p = 2;
        var r = St;
        St |= 4;
        try {
          hh(n, l);
          var s = Nh, m = Xi(l.containerInfo), v = s.focusedElem, R = s.selectionRange;
          if (m !== v && v && v.ownerDocument && qc(
            v.ownerDocument.documentElement,
            v
          )) {
            if (R !== null && Dr(v)) {
              var Y = R.start, Z = R.end;
              if (Z === void 0 && (Z = Y), "selectionStart" in v)
                v.selectionStart = Y, v.selectionEnd = Math.min(
                  Z,
                  v.value.length
                );
              else {
                var k = v.ownerDocument || document, w = k && k.defaultView || window;
                if (w.getSelection) {
                  var Q = w.getSelection(), de = v.textContent.length, He = Math.min(R.start, de), xt = R.end === void 0 ? He : Math.min(R.end, de);
                  !Q.extend && He > xt && (m = xt, xt = He, He = m);
                  var x = Fm(
                    v,
                    He
                  ), M = Fm(
                    v,
                    xt
                  );
                  if (x && M && (Q.rangeCount !== 1 || Q.anchorNode !== x.node || Q.anchorOffset !== x.offset || Q.focusNode !== M.node || Q.focusOffset !== M.offset)) {
                    var B = k.createRange();
                    B.setStart(x.node, x.offset), Q.removeAllRanges(), He > xt ? (Q.addRange(B), Q.extend(M.node, M.offset)) : (B.setEnd(M.node, M.offset), Q.addRange(B));
                  }
                }
              }
            }
            for (k = [], Q = v; Q = Q.parentNode; )
              Q.nodeType === 1 && k.push({
                element: Q,
                left: Q.scrollLeft,
                top: Q.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < k.length; v++) {
              var $ = k[v];
              $.element.scrollLeft = $.left, $.element.scrollTop = $.top;
            }
          }
          Dl = !!Hh, Nh = Hh = null;
        } finally {
          St = r, J.p = c, C.T = u;
        }
      }
      l.current = n, zl = 2;
    }
  }
  function Rg() {
    if (zl === 2) {
      zl = 0;
      var l = vi, n = fc, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = C.T, C.T = null;
        var c = J.p;
        J.p = 2;
        var r = St;
        St |= 4;
        try {
          os(l, n.alternate, n);
        } finally {
          St = r, J.p = c, C.T = u;
        }
      }
      zl = 3;
    }
  }
  function _g() {
    if (zl === 4 || zl === 3) {
      zl = 0, Tc();
      var l = vi, n = fc, u = ju, c = Th;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? zl = 5 : (zl = 0, fc = vi = null, zg(l, l.pendingLanes));
      var r = l.pendingLanes;
      if (r === 0 && (It = null), Rm(u), n = n.stateNode, Ol && typeof Ol.onCommitFiberRoot == "function")
        try {
          Ol.onCommitFiberRoot(
            dn,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = C.T, r = J.p, J.p = 2, C.T = null;
        try {
          for (var s = l.onRecoverableError, m = 0; m < c.length; m++) {
            var v = c[m];
            s(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          C.T = n, J.p = r;
        }
      }
      (ju & 3) !== 0 && zf(), Yu(l), r = l.pendingLanes, (u & 261930) !== 0 && (r & 42) !== 0 ? l === ms ? Of++ : (Of = 0, ms = l) : Of = 0, Ei(0);
    }
  }
  function zg(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Yr(n)));
  }
  function zf() {
    return Og(), Rg(), _g(), Dg();
  }
  function Dg() {
    if (zl !== 5) return !1;
    var l = vi, n = Ua;
    Ua = 0;
    var u = Rm(ju), c = C.T, r = J.p;
    try {
      J.p = 32 > u ? 32 : u, C.T = null, u = Eh, Eh = null;
      var s = vi, m = ju;
      if (zl = 0, fc = vi = null, ju = 0, (St & 6) !== 0) throw Error(T(331));
      var v = St;
      if (St |= 4, Wy(s.current), bf(
        s,
        s.current,
        m,
        u
      ), St = v, Ei(0, !1), Ol && typeof Ol.onPostCommitFiberRoot == "function")
        try {
          Ol.onPostCommitFiberRoot(dn, s);
        } catch {
        }
      return !0;
    } finally {
      J.p = r, C.T = c, zg(l, n);
    }
  }
  function Mg(l, n, u) {
    n = Ja(u, n), n = Cy(l.stateNode, n, 2), l = Wa(l, n, 2), l !== null && (xi(l, 2), Yu(l));
  }
  function Mt(l, n, u) {
    if (l.tag === 3)
      Mg(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Mg(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (It === null || !It.has(c))) {
            l = Ja(u, l), u = Uy(2), c = Wa(n, u, 2), c !== null && (Hy(
              u,
              c,
              n,
              l
            ), xi(c, 2), Yu(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function gs(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new Fy();
      var r = /* @__PURE__ */ new Set();
      c.set(n, r);
    } else
      r = c.get(n), r === void 0 && (r = /* @__PURE__ */ new Set(), c.set(n, r));
    r.has(u) || (vh = !0, r.add(u), l = ep.bind(null, l, n, u), n.then(l, l));
  }
  function ep(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ht === l && (nt & u) === u && (Lt === 4 || Lt === 3 && (nt & 62914560) === nt && 300 > Sl() - In ? (St & 2) === 0 && qu(l, 0) : Sh |= u, nl === nt && (nl = 0)), Yu(l);
  }
  function Cg(l, n) {
    n === 0 && (n = ta()), l = ui(l, n), l !== null && (xi(l, n), Yu(l));
  }
  function ln(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), Cg(l, u);
  }
  function Ug(l, n) {
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
        throw Error(T(314));
    }
    c !== null && c.delete(n), Cg(l, u);
  }
  function Hg(l, n) {
    return me(l, n);
  }
  var Df = null, co = null, tp = !1, Rh = !1, lp = !1, bi = 0;
  function Yu(l) {
    l !== co && l.next === null && (co === null ? Df = co = l : co = co.next = l), Rh = !0, tp || (tp = !0, Ss());
  }
  function Ei(l, n) {
    if (!lp && Rh) {
      lp = !0;
      do
        for (var u = !1, c = Df; c !== null; ) {
          if (l !== 0) {
            var r = c.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var m = c.suspendedLanes, v = c.pingedLanes;
              s = (1 << 31 - Hl(42 | l) + 1) - 1, s &= r & ~(m & ~v), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (u = !0, oo(c, s));
          } else
            s = nt, s = ge(
              c,
              c === Ht ? s : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (s & 3) === 0 || at(c, s) || (u = !0, oo(c, s));
          c = c.next;
        }
      while (u);
      lp = !1;
    }
  }
  function _h() {
    ap();
  }
  function ap() {
    Rh = tp = !1;
    var l = 0;
    bi !== 0 && o1() && (l = bi);
    for (var n = Sl(), u = null, c = Df; c !== null; ) {
      var r = c.next, s = np(c, n);
      s === 0 ? (c.next = null, u === null ? Df = r : u.next = r, r === null && (co = u)) : (u = c, (l !== 0 || (s & 3) !== 0) && (Rh = !0)), c = r;
    }
    zl !== 0 && zl !== 5 || Ei(l), bi !== 0 && (bi = 0);
  }
  function np(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, r = l.expirationTimes, s = l.pendingLanes & -62914561; 0 < s; ) {
      var m = 31 - Hl(s), v = 1 << m, R = r[m];
      R === -1 ? ((v & u) === 0 || (v & c) !== 0) && (r[m] = Ze(v, n)) : R <= n && (l.expiredLanes |= v), s &= ~v;
    }
    if (n = Ht, u = nt, u = ge(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (Dt === 2 || Dt === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Hi(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || at(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Hi(c), Rm(u)) {
        case 2:
        case 8:
          u = xo;
          break;
        case 32:
          u = Hn;
          break;
        case 268435456:
          u = Bo;
          break;
        default:
          u = Hn;
      }
      return c = vs.bind(null, l), u = me(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Hi(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function vs(l, n) {
    if (zl !== 0 && zl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (zf() && l.callbackNode !== u)
      return null;
    var c = nt;
    return c = ge(
      l,
      l === Ht ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (mg(l, c, n), np(l, Sl()), l.callbackNode != null && l.callbackNode === u ? vs.bind(null, l) : null);
  }
  function oo(l, n) {
    if (zf()) return null;
    mg(l, n, !0);
  }
  function Ss() {
    Gg(function() {
      (St & 6) !== 0 ? me(
        No,
        _h
      ) : ap();
    });
  }
  function zh() {
    if (bi === 0) {
      var l = Ji;
      l === 0 && (l = te, te <<= 1, (te & 261888) === 0 && (te = 256)), bi = l;
    }
    return bi;
  }
  function Ng(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : mn("" + l);
  }
  function fo(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function bs(l, n, u, c, r) {
    if (n === "submit" && u && u.stateNode === r) {
      var s = Ng(
        (r[ra] || null).action
      ), m = c.submitter;
      m && (n = (n = m[ra] || null) ? Ng(n.formAction) : m.getAttribute("formAction"), n !== null && (s = n, m = null));
      var v = new Rr(
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
                  var R = m ? fo(r, m) : new FormData(r);
                  df(
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
                typeof s == "function" && (v.preventDefault(), R = m ? fo(r, m) : new FormData(r), df(
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
  for (var Dh = 0; Dh < Wo.length; Dh++) {
    var Mf = Wo[Dh], up = Mf.toLowerCase(), ip = Mf[0].toUpperCase() + Mf.slice(1);
    da(
      up,
      "on" + ip
    );
  }
  da(Cr, "onAnimationEnd"), da(Im, "onAnimationIteration"), da(Dd, "onAnimationStart"), da("dblclick", "onDoubleClick"), da("focusin", "onFocus"), da("focusout", "onBlur"), da(Yc, "onTransitionRun"), da(Ur, "onTransitionStart"), da(vu, "onTransitionCancel"), da(V0, "onTransitionEnd"), hu("onMouseEnter", ["mouseout", "mouseover"]), hu("onMouseLeave", ["mouseout", "mouseover"]), hu("onPointerEnter", ["pointerout", "pointerover"]), hu("onPointerLeave", ["pointerout", "pointerover"]), qi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), qi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), qi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), qi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), qi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), qi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Cf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), xg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cf)
  );
  function Bg(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], r = c.event;
      c = c.listeners;
      e: {
        var s = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var v = c[m], R = v.instance, Y = v.currentTarget;
            if (v = v.listener, R !== s && r.isPropagationStopped())
              break e;
            s = v, r.currentTarget = Y;
            try {
              s(r);
            } catch (Z) {
              wc(Z);
            }
            r.currentTarget = null, s = R;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (v = c[m], R = v.instance, Y = v.currentTarget, v = v.listener, R !== s && r.isPropagationStopped())
              break e;
            s = v, r.currentTarget = Y;
            try {
              s(r);
            } catch (Z) {
              wc(Z);
            }
            r.currentTarget = null, s = R;
          }
      }
    }
  }
  function ct(l, n) {
    var u = n[cd];
    u === void 0 && (u = n[cd] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (Es(n, l, 2, !1), u.add(c));
  }
  function cp(l, n, u) {
    var c = 0;
    n && (c |= 4), Es(
      u,
      l,
      c,
      n
    );
  }
  var Mh = "_reactListening" + Math.random().toString(36).slice(2);
  function Uf(l) {
    if (!l[Mh]) {
      l[Mh] = !0, zc.forEach(function(u) {
        u !== "selectionchange" && (xg.has(u) || cp(u, !1, l), cp(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Mh] || (n[Mh] = !0, cp("selectionchange", !1, n));
    }
  }
  function Es(l, n, u, c) {
    switch (Cs(n)) {
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
    ), r = void 0, !Ar || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (r = !0), c ? r !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: r
    }) : l.addEventListener(n, u, !0) : r !== void 0 ? l.addEventListener(n, u, {
      passive: r
    }) : l.addEventListener(n, u, !1);
  }
  function op(l, n, u, c, r) {
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
            if (m = Oc(v), m === null) return;
            if (R = m.tag, R === 5 || R === 6 || R === 26 || R === 27) {
              c = s = m;
              continue e;
            }
            v = v.parentNode;
          }
        }
        c = c.return;
      }
    xm(function() {
      var Y = s, Z = yd(u), k = [];
      e: {
        var w = Su.get(l);
        if (w !== void 0) {
          var Q = Rr, de = l;
          switch (l) {
            case "keypress":
              if (gd(u) === 0) break e;
            case "keydown":
            case "keyup":
              Q = Ed;
              break;
            case "focusin":
              de = "focus", Q = Sd;
              break;
            case "focusout":
              de = "blur", Q = Sd;
              break;
            case "beforeblur":
            case "afterblur":
              Q = Sd;
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
              Q = Zo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = H0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = q0;
              break;
            case Cr:
            case Im:
            case Dd:
              Q = x0;
              break;
            case V0:
              Q = l1;
              break;
            case "scroll":
            case "scrollend":
              Q = e1;
              break;
            case "wheel":
              Q = a1;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = Uc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = qn;
              break;
            case "toggle":
            case "beforetoggle":
              Q = Qm;
          }
          var He = (n & 4) !== 0, xt = !He && (l === "scroll" || l === "scrollend"), x = He ? w !== null ? w + "Capture" : null : w;
          He = [];
          for (var M = Y, B; M !== null; ) {
            var $ = M;
            if (B = $.stateNode, $ = $.tag, $ !== 5 && $ !== 26 && $ !== 27 || B === null || x === null || ($ = Nl(M, x), $ != null && He.push(
              Ts(M, $, B)
            )), xt) break;
            M = M.return;
          }
          0 < He.length && (w = new Q(
            w,
            de,
            null,
            u,
            Z
          ), k.push({ event: w, listeners: He }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (w = l === "mouseover" || l === "pointerover", Q = l === "mouseout" || l === "pointerout", w && u !== md && (de = u.relatedTarget || u.fromElement) && (Oc(de) || de[Bi]))
            break e;
          if ((Q || w) && (w = Z.window === Z ? Z : (w = Z.ownerDocument) ? w.defaultView || w.parentWindow : window, Q ? (de = u.relatedTarget || u.toElement, Q = Y, de = de ? Oc(de) : null, de !== null && (xt = oe(de), He = de.tag, de !== xt || He !== 5 && He !== 27 && He !== 6) && (de = null)) : (Q = null, de = Y), Q !== de)) {
            if (He = Zo, $ = "onMouseLeave", x = "onMouseEnter", M = "mouse", (l === "pointerout" || l === "pointerover") && (He = qn, $ = "onPointerLeave", x = "onPointerEnter", M = "pointer"), xt = Q == null ? w : qo(Q), B = de == null ? w : qo(de), w = new He(
              $,
              M + "leave",
              Q,
              u,
              Z
            ), w.target = xt, w.relatedTarget = B, $ = null, Oc(Z) === Y && (He = new He(
              x,
              M + "enter",
              de,
              u,
              Z
            ), He.target = B, He.relatedTarget = xt, $ = He), xt = $, Q && de)
              t: {
                for (He = jg, x = Q, M = de, B = 0, $ = x; $; $ = He($))
                  B++;
                $ = 0;
                for (var Re = M; Re; Re = He(Re))
                  $++;
                for (; 0 < B - $; )
                  x = He(x), B--;
                for (; 0 < $ - B; )
                  M = He(M), $--;
                for (; B--; ) {
                  if (x === M || M !== null && x === M.alternate) {
                    He = x;
                    break t;
                  }
                  x = He(x), M = He(M);
                }
                He = null;
              }
            else He = null;
            Q !== null && Ch(
              k,
              w,
              Q,
              He,
              !1
            ), de !== null && xt !== null && Ch(
              k,
              xt,
              de,
              He,
              !0
            );
          }
        }
        e: {
          if (w = Y ? qo(Y) : window, Q = w.nodeName && w.nodeName.toLowerCase(), Q === "select" || Q === "input" && w.type === "file")
            var yt = $m;
          else if (gu(w))
            if (Od)
              yt = jc;
            else {
              yt = X0;
              var ve = L0;
            }
          else
            Q = w.nodeName, !Q || Q.toLowerCase() !== "input" || w.type !== "checkbox" && w.type !== "radio" ? Y && Nm(Y.elementType) && (yt = $m) : yt = Li;
          if (yt && (yt = yt(l, Y))) {
            Km(
              k,
              yt,
              u,
              Z
            );
            break e;
          }
          ve && ve(l, w, Y), l === "focusout" && Y && w.type === "number" && Y.memoizedProps.value != null && Dc(w, "number", w.value);
        }
        switch (ve = Y ? qo(Y) : window, l) {
          case "focusin":
            (gu(ve) || ve.contentEditable === "true") && (Qi = ve, $o = Y, gn = null);
            break;
          case "focusout":
            gn = $o = Qi = null;
            break;
          case "mousedown":
            wn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wn = !1, zd(k, u, Z);
            break;
          case "selectionchange":
            if (Mr) break;
          case "keydown":
          case "keyup":
            zd(k, u, Z);
        }
        var Je;
        if (Jo)
          e: {
            switch (l) {
              case "compositionstart":
                var We = "onCompositionStart";
                break e;
              case "compositionend":
                We = "onCompositionEnd";
                break e;
              case "compositionupdate":
                We = "onCompositionUpdate";
                break e;
            }
            We = void 0;
          }
        else
          Nc ? Ad(l, u) && (We = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (We = "onCompositionStart");
        We && (Vm && u.locale !== "ko" && (Nc || We !== "onCompositionStart" ? We === "onCompositionEnd" && Nc && (Je = jm()) : (ai = Z, Bm = "value" in ai ? ai.value : ai.textContent, Nc = !0)), ve = As(Y, We), 0 < ve.length && (We = new B0(
          We,
          l,
          null,
          u,
          Z
        ), k.push({ event: We, listeners: ve }), Je ? We.data = Je : (Je = Zm(u), Je !== null && (We.data = Je)))), (Je = la ? G0(l, u) : n1(l, u)) && (We = As(Y, "onBeforeInput"), 0 < We.length && (ve = new B0(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Z
        ), k.push({
          event: ve,
          listeners: We
        }), ve.data = Je)), bs(
          k,
          l,
          Y,
          u,
          Z
        );
      }
      Bg(k, n);
    });
  }
  function Ts(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function As(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var r = l, s = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || s === null || (r = Nl(l, u), r != null && c.unshift(
        Ts(l, r, s)
      ), r = Nl(l, n), r != null && c.push(
        Ts(l, r, s)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function jg(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Ch(l, n, u, c, r) {
    for (var s = n._reactName, m = []; u !== null && u !== c; ) {
      var v = u, R = v.alternate, Y = v.stateNode;
      if (v = v.tag, R !== null && R === c) break;
      v !== 5 && v !== 26 && v !== 27 || Y === null || (R = Y, r ? (Y = Nl(u, s), Y != null && m.unshift(
        Ts(u, Y, R)
      )) : r || (Y = Nl(u, s), Y != null && m.push(
        Ts(u, Y, R)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var qg = /\r\n?/g, fp = /\u0000|\uFFFD/g;
  function rp(l) {
    return (typeof l == "string" ? l : "" + l).replace(qg, `
`).replace(fp, "");
  }
  function sp(l, n) {
    return n = rp(n), rp(l) === n;
  }
  function Nt(l, n, u, c, r, s) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || mu(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && mu(l, "" + c);
        break;
      case "className":
        sd(l, "class", c);
        break;
      case "tabIndex":
        sd(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        sd(l, u, c);
        break;
      case "style":
        M0(l, c, s);
        break;
      case "data":
        if (n !== "object") {
          sd(l, "data", c);
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
        c = mn("" + c), l.setAttribute(u, c);
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
          typeof s == "function" && (u === "formAction" ? (n !== "input" && Nt(l, n, "name", r.name, r, null), Nt(
            l,
            n,
            "formEncType",
            r.formEncType,
            r,
            null
          ), Nt(
            l,
            n,
            "formMethod",
            r.formMethod,
            r,
            null
          ), Nt(
            l,
            n,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (Nt(l, n, "encType", r.encType, r, null), Nt(l, n, "method", r.method, r, null), Nt(l, n, "target", r.target, r, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = mn("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = xn);
        break;
      case "onScroll":
        c != null && ct("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ct("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(T(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(T(60));
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
        u = mn("" + c), l.setAttributeNS(
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
        ct("beforetoggle", l), ct("toggle", l), Go(l, "popover", c);
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
        Go(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Pv.get(u) || u, Go(l, u, c));
    }
  }
  function dp(l, n, u, c, r, s) {
    switch (u) {
      case "style":
        M0(l, c, s);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(T(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(T(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? mu(l, c) : (typeof c == "number" || typeof c == "bigint") && mu(l, "" + c);
        break;
      case "onScroll":
        c != null && ct("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ct("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = xn);
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
            if (u[0] === "o" && u[1] === "n" && (r = u.endsWith("Capture"), n = u.slice(2, r ? u.length - 7 : void 0), s = l[ra] || null, s = s != null ? s[u] : null, typeof s == "function" && l.removeEventListener(n, s, r), typeof c == "function")) {
              typeof s != "function" && s !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, r);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : Go(l, u, c);
          }
    }
  }
  function kl(l, n, u) {
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
        ct("error", l), ct("load", l);
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
                  throw Error(T(137, n));
                default:
                  Nt(l, n, s, m, u, null);
              }
          }
        r && Nt(l, n, "srcSet", u.srcSet, u, null), c && Nt(l, n, "src", u.src, u, null);
        return;
      case "input":
        ct("invalid", l);
        var v = s = m = r = null, R = null, Y = null;
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
                  Y = Z;
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
                    throw Error(T(137, n));
                  break;
                default:
                  Nt(l, n, c, Z, u, null);
              }
          }
        br(
          l,
          s,
          v,
          R,
          Y,
          m,
          r,
          !1
        );
        return;
      case "select":
        ct("invalid", l), c = m = s = null;
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
                Nt(l, n, r, v, u, null);
            }
        n = s, u = m, l.multiple = !!c, n != null ? Lo(l, !!c, n, !1) : u != null && Lo(l, !!c, u, !0);
        return;
      case "textarea":
        ct("invalid", l), s = r = c = null;
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
                if (v != null) throw Error(T(91));
                break;
              default:
                Nt(l, n, m, v, u, null);
            }
        Hm(l, c, r, s);
        return;
      case "option":
        for (R in u)
          u.hasOwnProperty(R) && (c = u[R], c != null) && (R === "selected" ? l.selected = c && typeof c != "function" && typeof c != "symbol" : Nt(l, n, R, c, u, null));
        return;
      case "dialog":
        ct("beforetoggle", l), ct("toggle", l), ct("cancel", l), ct("close", l);
        break;
      case "iframe":
      case "object":
        ct("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Cf.length; c++)
          ct(Cf[c], l);
        break;
      case "image":
        ct("error", l), ct("load", l);
        break;
      case "details":
        ct("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        ct("error", l), ct("load", l);
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
        for (Y in u)
          if (u.hasOwnProperty(Y) && (c = u[Y], c != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(T(137, n));
              default:
                Nt(l, n, Y, c, u, null);
            }
        return;
      default:
        if (Nm(n)) {
          for (Z in u)
            u.hasOwnProperty(Z) && (c = u[Z], c !== void 0 && dp(
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
      u.hasOwnProperty(v) && (c = u[v], c != null && Nt(l, n, v, c, u, null));
  }
  function hp(l, n, u, c) {
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
        var r = null, s = null, m = null, v = null, R = null, Y = null, Z = null;
        for (Q in u) {
          var k = u[Q];
          if (u.hasOwnProperty(Q) && k != null)
            switch (Q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = k;
              default:
                c.hasOwnProperty(Q) || Nt(l, n, Q, null, c, k);
            }
        }
        for (var w in c) {
          var Q = c[w];
          if (k = u[w], c.hasOwnProperty(w) && (Q != null || k != null))
            switch (w) {
              case "type":
                s = Q;
                break;
              case "name":
                r = Q;
                break;
              case "checked":
                Y = Q;
                break;
              case "defaultChecked":
                Z = Q;
                break;
              case "value":
                m = Q;
                break;
              case "defaultValue":
                v = Q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null)
                  throw Error(T(137, n));
                break;
              default:
                Q !== k && Nt(
                  l,
                  n,
                  w,
                  Q,
                  c,
                  k
                );
            }
        }
        Sr(
          l,
          m,
          v,
          R,
          Y,
          Z,
          s,
          r
        );
        return;
      case "select":
        Q = m = v = w = null;
        for (s in u)
          if (R = u[s], u.hasOwnProperty(s) && R != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                Q = R;
              default:
                c.hasOwnProperty(s) || Nt(
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
                w = s;
                break;
              case "defaultValue":
                v = s;
                break;
              case "multiple":
                m = s;
              default:
                s !== R && Nt(
                  l,
                  n,
                  r,
                  s,
                  c,
                  R
                );
            }
        n = v, u = m, c = Q, w != null ? Lo(l, !!u, w, !1) : !!c != !!u && (n != null ? Lo(l, !!u, n, !0) : Lo(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        Q = w = null;
        for (v in u)
          if (r = u[v], u.hasOwnProperty(v) && r != null && !c.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Nt(l, n, v, null, c, r);
            }
        for (m in c)
          if (r = c[m], s = u[m], c.hasOwnProperty(m) && (r != null || s != null))
            switch (m) {
              case "value":
                w = r;
                break;
              case "defaultValue":
                Q = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(T(91));
                break;
              default:
                r !== s && Nt(l, n, m, r, c, s);
            }
        Um(l, w, Q);
        return;
      case "option":
        for (var de in u)
          w = u[de], u.hasOwnProperty(de) && w != null && !c.hasOwnProperty(de) && (de === "selected" ? l.selected = !1 : Nt(
            l,
            n,
            de,
            null,
            c,
            w
          ));
        for (R in c)
          w = c[R], Q = u[R], c.hasOwnProperty(R) && w !== Q && (w != null || Q != null) && (R === "selected" ? l.selected = w && typeof w != "function" && typeof w != "symbol" : Nt(
            l,
            n,
            R,
            w,
            c,
            Q
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
        for (var He in u)
          w = u[He], u.hasOwnProperty(He) && w != null && !c.hasOwnProperty(He) && Nt(l, n, He, null, c, w);
        for (Y in c)
          if (w = c[Y], Q = u[Y], c.hasOwnProperty(Y) && w !== Q && (w != null || Q != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null)
                  throw Error(T(137, n));
                break;
              default:
                Nt(
                  l,
                  n,
                  Y,
                  w,
                  c,
                  Q
                );
            }
        return;
      default:
        if (Nm(n)) {
          for (var xt in u)
            w = u[xt], u.hasOwnProperty(xt) && w !== void 0 && !c.hasOwnProperty(xt) && dp(
              l,
              n,
              xt,
              void 0,
              c,
              w
            );
          for (Z in c)
            w = c[Z], Q = u[Z], !c.hasOwnProperty(Z) || w === Q || w === void 0 && Q === void 0 || dp(
              l,
              n,
              Z,
              w,
              c,
              Q
            );
          return;
        }
    }
    for (var x in u)
      w = u[x], u.hasOwnProperty(x) && w != null && !c.hasOwnProperty(x) && Nt(l, n, x, null, c, w);
    for (k in c)
      w = c[k], Q = u[k], !c.hasOwnProperty(k) || w === Q || w == null && Q == null || Nt(l, n, k, w, c, Q);
  }
  function Uh(l) {
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
  function mp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var r = u[c], s = r.transferSize, m = r.initiatorType, v = r.duration;
        if (s && v && Uh(m)) {
          for (m = 0, v = r.responseEnd, c += 1; c < u.length; c++) {
            var R = u[c], Y = R.startTime;
            if (Y > v) break;
            var Z = R.transferSize, k = R.initiatorType;
            Z && Uh(k) && (R = R.responseEnd, m += Z * (R < v ? 1 : (v - Y) / (R - Y)));
          }
          if (--c, n += 8 * (s + m) / (r.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Hh = null, Nh = null;
  function sc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Yg(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function yp(l, n) {
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
  function Hf(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var xh = null;
  function o1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === xh ? !1 : (xh = l, !0) : (xh = null, !1);
  }
  var Os = typeof setTimeout == "function" ? setTimeout : void 0, wg = typeof clearTimeout == "function" ? clearTimeout : void 0, ro = typeof Promise == "function" ? Promise : void 0, Gg = typeof queueMicrotask == "function" ? queueMicrotask : typeof ro < "u" ? function(l) {
    return ro.resolve(null).then(l).catch(pp);
  } : Os;
  function pp(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Pn(l) {
    return l === "head";
  }
  function gp(l, n) {
    var u = n, c = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(r), Vf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          so(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, so(u);
          for (var s = u.firstChild; s; ) {
            var m = s.nextSibling, v = s.nodeName;
            s[du] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && s.rel.toLowerCase() === "stylesheet" || u.removeChild(s), s = m;
          }
        } else
          u === "body" && so(l.ownerDocument.body);
      u = r;
    } while (u);
    Vf(n);
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
  function Rs(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Rs(u), od(u);
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
  function f1(l, n, u, c) {
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
      if (l = Oa(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Pe(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Oa(l.nextSibling), l === null)) return null;
    return l;
  }
  function Lg(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = Oa(l.nextSibling), l === null)) return null;
    return l;
  }
  function Rn(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function dc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Nf(l, n) {
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
  function Oa(l) {
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
  function Bh(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return Oa(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function eu(l) {
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
  function xf(l, n, u) {
    switch (n = sc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(T(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(T(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(T(454));
        return l;
      default:
        throw Error(T(451));
    }
  }
  function so(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    od(l);
  }
  var Na = /* @__PURE__ */ new Map(), zs = /* @__PURE__ */ new Set();
  function ua(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var tu = J.d;
  J.d = {
    f: r1,
    r: Xg,
    D: X,
    C: Ot,
    L: s1,
    m: vp,
    X: Ti,
    S: Sp,
    M: hc
  };
  function r1() {
    var l = tu.f(), n = Rf();
    return l || n;
  }
  function Xg(l) {
    var n = Rc(l);
    n !== null && n.tag === 5 && n.type === "form" ? Ut(n) : tu.r(l);
  }
  var Bf = typeof document > "u" ? null : document;
  function Tl(l, n, u) {
    var c = Bf;
    if (c && typeof n == "string" && n) {
      var r = Qa(n);
      r = 'link[rel="' + l + '"][href="' + r + '"]', typeof u == "string" && (r += '[crossorigin="' + u + '"]'), zs.has(r) || (zs.add(r), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(r) === null && (n = c.createElement("link"), kl(n, "link", l), Rt(n), c.head.appendChild(n)));
    }
  }
  function X(l) {
    tu.D(l), Tl("dns-prefetch", l, null);
  }
  function Ot(l, n) {
    tu.C(l, n), Tl("preconnect", l, n);
  }
  function s1(l, n, u) {
    tu.L(l, n, u);
    var c = Bf;
    if (c && l && n) {
      var r = 'link[rel="preload"][as="' + Qa(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (r += '[imagesrcset="' + Qa(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (r += '[imagesizes="' + Qa(
        u.imageSizes
      ) + '"]')) : r += '[href="' + Qa(l) + '"]';
      var s = r;
      switch (n) {
        case "style":
          s = an(l);
          break;
        case "script":
          s = ho(l);
      }
      Na.has(s) || (l = j(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Na.set(s, l), c.querySelector(r) !== null || n === "style" && c.querySelector(mc(s)) || n === "script" && c.querySelector(Yf(s)) || (n = c.createElement("link"), kl(n, "link", l), Rt(n), c.head.appendChild(n)));
    }
  }
  function vp(l, n) {
    tu.m(l, n);
    var u = Bf;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", r = 'link[rel="modulepreload"][as="' + Qa(c) + '"][href="' + Qa(l) + '"]', s = r;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = ho(l);
      }
      if (!Na.has(s) && (l = j({ rel: "modulepreload", href: l }, n), Na.set(s, l), u.querySelector(r) === null)) {
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
        c = u.createElement("link"), kl(c, "link", l), Rt(c), u.head.appendChild(c);
      }
    }
  }
  function Sp(l, n, u) {
    tu.S(l, n, u);
    var c = Bf;
    if (c && l) {
      var r = _c(c).hoistableStyles, s = an(l);
      n = n || "default";
      var m = r.get(s);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = c.querySelector(
          mc(s)
        ))
          v.loading = 5;
        else {
          l = j(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Na.get(s)) && jh(l, u);
          var R = m = c.createElement("link");
          Rt(R), kl(R, "link", l), R._p = new Promise(function(Y, Z) {
            R.onload = Y, R.onerror = Z;
          }), R.addEventListener("load", function() {
            v.loading |= 1;
          }), R.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Ds(m, n, c);
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
    tu.X(l, n);
    var u = Bf;
    if (u && l) {
      var c = _c(u).hoistableScripts, r = ho(l), s = c.get(r);
      s || (s = u.querySelector(Yf(r)), s || (l = j({ src: l, async: !0 }, n), (n = Na.get(r)) && qh(l, n), s = u.createElement("script"), Rt(s), kl(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function hc(l, n) {
    tu.M(l, n);
    var u = Bf;
    if (u && l) {
      var c = _c(u).hoistableScripts, r = ho(l), s = c.get(r);
      s || (s = u.querySelector(Yf(r)), s || (l = j({ src: l, async: !0, type: "module" }, n), (n = Na.get(r)) && qh(l, n), s = u.createElement("script"), Rt(s), kl(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function jf(l, n, u, c) {
    var r = (r = Ve.current) ? ua(r) : null;
    if (!r) throw Error(T(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = an(u.href), u = _c(
          r
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = an(u.href);
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
          )) && !s._p && (m.instance = s, m.state.loading = 5), Na.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Na.set(l, u), s || Qg(
            r,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(T(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(T(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = ho(u), u = _c(
          r
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(T(444, l));
    }
  }
  function an(l) {
    return 'href="' + Qa(l) + '"';
  }
  function mc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function qf(l) {
    return j({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Qg(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), kl(n, "link", u), Rt(n), l.head.appendChild(n));
  }
  function ho(l) {
    return '[src="' + Qa(l) + '"]';
  }
  function Yf(l) {
    return "script[async]" + l;
  }
  function bp(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Qa(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Rt(c), c;
          var r = j({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Rt(c), kl(c, "style", r), Ds(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          r = an(u.href);
          var s = l.querySelector(
            mc(r)
          );
          if (s)
            return n.state.loading |= 4, n.instance = s, Rt(s), s;
          c = qf(u), (r = Na.get(r)) && jh(c, r), s = (l.ownerDocument || l).createElement("link"), Rt(s);
          var m = s;
          return m._p = new Promise(function(v, R) {
            m.onload = v, m.onerror = R;
          }), kl(s, "link", c), n.state.loading |= 4, Ds(s, u.precedence, l), n.instance = s;
        case "script":
          return s = ho(u.src), (r = l.querySelector(
            Yf(s)
          )) ? (n.instance = r, Rt(r), r) : (c = u, (r = Na.get(s)) && (c = j({}, u), qh(c, r)), l = l.ownerDocument || l, r = l.createElement("script"), Rt(r), kl(r, "link", c), l.head.appendChild(r), n.instance = r);
        case "void":
          return null;
        default:
          throw Error(T(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Ds(c, u.precedence, l));
    return n.instance;
  }
  function Ds(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = c.length ? c[c.length - 1] : null, s = r, m = 0; m < c.length; m++) {
      var v = c[m];
      if (v.dataset.precedence === n) s = v;
      else if (s !== r) break;
    }
    s ? s.parentNode.insertBefore(l, s.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function jh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function qh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var wf = null;
  function Ep(l, n, u) {
    if (wf === null) {
      var c = /* @__PURE__ */ new Map(), r = wf = /* @__PURE__ */ new Map();
      r.set(u, c);
    } else
      r = wf, c = r.get(u), c || (c = /* @__PURE__ */ new Map(), r.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), r = 0; r < u.length; r++) {
      var s = u[r];
      if (!(s[du] || s[Ct] || l === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function Tp(l, n, u) {
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
  function xa(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function wu(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var r = an(c.href), s = n.querySelector(
          mc(r)
        );
        if (s) {
          n = s._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = wh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = s, Rt(s);
          return;
        }
        s = n.ownerDocument || n, c = qf(c), (r = Na.get(r)) && jh(c, r), s = s.createElement("link"), Rt(s);
        var m = s;
        m._p = new Promise(function(v, R) {
          m.onload = v, m.onerror = R;
        }), kl(s, "link", c), u.instance = s;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = wh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var nn = 0;
  function Ap(l, n) {
    return l.stylesheets && l.count === 0 && Lh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && Lh(l, l.stylesheets), l.unsuspend) {
          var s = l.unsuspend;
          l.unsuspend = null, s();
        }
      }, 6e4 + n);
      0 < l.imgBytes && nn === 0 && (nn = 62500 * mp());
      var r = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Lh(l, l.stylesheets), l.unsuspend)) {
            var s = l.unsuspend;
            l.unsuspend = null, s();
          }
        },
        (l.imgBytes > nn ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(r);
      };
    } : null;
  }
  function wh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Lh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Gh = null;
  function Lh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Gh = /* @__PURE__ */ new Map(), n.forEach(Gl, l), Gh = null, wh.call(l));
  }
  function Gl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Gh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Gh.set(l, u);
        for (var r = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < r.length; s++) {
          var m = r[s];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      r = n.instance, m = r.getAttribute("data-precedence"), s = u.get(m) || c, s === c && u.set(null, r), u.set(m, r), this.count++, c = wh.bind(this), r.addEventListener("load", c), r.addEventListener("error", c), s ? s.parentNode.insertBefore(r, s.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(r, l.firstChild)), n.state.loading |= 4;
    }
  }
  var Ms = {
    $$typeof: Et,
    Provider: null,
    Consumer: null,
    _currentValue: ne,
    _currentValue2: ne,
    _threadCount: 0
  };
  function Op(l, n, u, c, r, s, m, v, R) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = hn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hn(0), this.hiddenUpdates = hn(null), this.identifierPrefix = c, this.onUncaughtError = r, this.onCaughtError = s, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = R, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Xh(l, n, u, c, r, s, m, v, R, Y, Z, k) {
    return l = new Op(
      l,
      n,
      u,
      m,
      R,
      Y,
      Z,
      k,
      v
    ), n = 1, s === !0 && (n |= 24), s = ol(3, null, null, n), l.current = s, s.stateNode = l, n = qr(), n.refCount++, l.pooledCache = n, n.refCount++, s.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Vr(s), l;
  }
  function mo(l) {
    return l ? (l = ha, l) : ha;
  }
  function Vg(l, n, u, c, r, s) {
    r = mo(r), c.context === null ? c.context = r : c.pendingContext = r, c = di(n), c.payload = { element: u }, s = s === void 0 ? null : s, s !== null && (c.callback = s), u = Wa(l, c, n), u !== null && (Aa(u, l, n), Ii(u, l, n));
  }
  function Qh(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Rp(l, n) {
    Qh(l, n), (l = l.alternate) && Qh(l, n);
  }
  function Zg(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = ui(l, 67108864);
      n !== null && Aa(n, l, 67108864), Rp(l, 67108864);
    }
  }
  function yo(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Ha();
      n = ud(n);
      var u = ui(l, n);
      u !== null && Aa(u, l, n), Rp(l, n);
    }
  }
  var Dl = !0;
  function Gu(l, n, u, c) {
    var r = C.T;
    C.T = null;
    var s = J.p;
    try {
      J.p = 2, Wl(l, n, u, c);
    } finally {
      J.p = s, C.T = r;
    }
  }
  function Lu(l, n, u, c) {
    var r = C.T;
    C.T = null;
    var s = J.p;
    try {
      J.p = 8, Wl(l, n, u, c);
    } finally {
      J.p = s, C.T = r;
    }
  }
  function Wl(l, n, u, c) {
    if (Dl) {
      var r = _p(c);
      if (r === null)
        op(
          l,
          n,
          c,
          Vh,
          u
        ), Ai(l, c);
      else if (d1(
        r,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (Ai(l, c), n & 4 && -1 < Ra.indexOf(l)) {
        for (; r !== null; ) {
          var s = Rc(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var m = Ne(s.pendingLanes);
                  if (m !== 0) {
                    var v = s;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var R = 1 << 31 - Hl(m);
                      v.entanglements[1] |= R, m &= ~R;
                    }
                    Yu(s), (St & 6) === 0 && (At = Sl() + 500, Ei(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = ui(s, 2), v !== null && Aa(v, s, 2), Rf(), Rp(s, 2);
            }
          if (s = _p(c), s === null && op(
            l,
            n,
            c,
            Vh,
            u
          ), s === r) break;
          r = s;
        }
        r !== null && c.stopPropagation();
      } else
        op(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function _p(l) {
    return l = yd(l), Gf(l);
  }
  var Vh = null;
  function Gf(l) {
    if (Vh = null, l = Oc(l), l !== null) {
      var n = oe(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = pe(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = F(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Vh = l, null;
  }
  function Cs(l) {
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
        switch (ad()) {
          case No:
            return 2;
          case xo:
            return 8;
          case Hn:
          case nd:
            return 32;
          case Bo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Lf = !1, Ml = null, Fl = null, ia = null, yc = /* @__PURE__ */ new Map(), _n = /* @__PURE__ */ new Map(), Pt = [], Ra = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ai(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ml = null;
        break;
      case "dragenter":
      case "dragleave":
        Fl = null;
        break;
      case "mouseover":
      case "mouseout":
        ia = null;
        break;
      case "pointerover":
      case "pointerout":
        yc.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _n.delete(n.pointerId);
    }
  }
  function po(l, n, u, c, r, s) {
    return l === null || l.nativeEvent !== s ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: s,
      targetContainers: [r]
    }, n !== null && (n = Rc(n), n !== null && Zg(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, r !== null && n.indexOf(r) === -1 && n.push(r), l);
  }
  function d1(l, n, u, c, r) {
    switch (n) {
      case "focusin":
        return Ml = po(
          Ml,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "dragenter":
        return Fl = po(
          Fl,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "mouseover":
        return ia = po(
          ia,
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
          po(
            yc.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
      case "gotpointercapture":
        return s = r.pointerId, _n.set(
          s,
          po(
            _n.get(s) || null,
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
  function Jg(l) {
    var n = Oc(l.target);
    if (n !== null) {
      var u = oe(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = pe(u), n !== null) {
            l.blockedOn = n, _m(l.priority, function() {
              yo(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = F(u), n !== null) {
            l.blockedOn = n, _m(l.priority, function() {
              yo(u);
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
  function Us(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = _p(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        md = c, u.target.dispatchEvent(c), md = null;
      } else
        return n = Rc(u), n !== null && Zg(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Xf(l, n, u) {
    Us(l) && u.delete(n);
  }
  function Kg() {
    Lf = !1, Ml !== null && Us(Ml) && (Ml = null), Fl !== null && Us(Fl) && (Fl = null), ia !== null && Us(ia) && (ia = null), yc.forEach(Xf), _n.forEach(Xf);
  }
  function Xu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Lf || (Lf = !0, b.unstable_scheduleCallback(
      b.unstable_NormalPriority,
      Kg
    )));
  }
  var Qf = null;
  function $g(l) {
    Qf !== l && (Qf = l, b.unstable_scheduleCallback(
      b.unstable_NormalPriority,
      function() {
        Qf === l && (Qf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], r = l[n + 2];
          if (typeof c != "function") {
            if (Gf(c || u) === null)
              continue;
            break;
          }
          var s = Rc(u);
          s !== null && (l.splice(n, 3), n -= 3, df(
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
  function Vf(l) {
    function n(R) {
      return Xu(R, l);
    }
    Ml !== null && Xu(Ml, l), Fl !== null && Xu(Fl, l), ia !== null && Xu(ia, l), yc.forEach(n), _n.forEach(n);
    for (var u = 0; u < Pt.length; u++) {
      var c = Pt[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Pt.length && (u = Pt[0], u.blockedOn === null); )
      Jg(u), u.blockedOn === null && Pt.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var r = u[c], s = u[c + 1], m = r[ra] || null;
        if (typeof s == "function")
          m || $g(u);
        else if (m) {
          var v = null;
          if (s && s.hasAttribute("formAction")) {
            if (r = s, m = s[ra] || null)
              v = m.formAction;
            else if (Gf(r) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[c + 1] = v : (u.splice(c, 3), c -= 3), $g(u);
        }
      }
  }
  function zp() {
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
  function Zh(l) {
    this._internalRoot = l;
  }
  Jh.prototype.render = Zh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(T(409));
    var u = n.current, c = Ha();
    Vg(u, c, l, n, null, null);
  }, Jh.prototype.unmount = Zh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Vg(l.current, 2, null, l, null, null), Rf(), n[Bi] = null;
    }
  };
  function Jh(l) {
    this._internalRoot = l;
  }
  Jh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = id();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Pt.length && n !== 0 && n < Pt[u].priority; u++) ;
      Pt.splice(u, 0, l), u === 0 && Jg(l);
    }
  };
  var Dp = H.version;
  if (Dp !== "19.2.8")
    throw Error(
      T(
        527,
        Dp,
        "19.2.8"
      )
    );
  J.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(T(188)) : (l = Object.keys(l).join(","), Error(T(268, l)));
    return l = V(n), l = l !== null ? Se(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var kg = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hs.isDisabled && Hs.supportsFiber)
      try {
        dn = Hs.inject(
          kg
        ), Ol = Hs;
      } catch {
      }
  }
  return T0.createRoot = function(l, n) {
    if (!ie(l)) throw Error(T(299));
    var u = !1, c = "", r = ah, s = My, m = nh;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Xh(
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
      zp
    ), l[Bi] = n.current, Uf(l), new Zh(n);
  }, T0.hydrateRoot = function(l, n, u) {
    if (!ie(l)) throw Error(T(299));
    var c = !1, r = "", s = ah, m = My, v = nh, R = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (r = u.identifierPrefix), u.onUncaughtError !== void 0 && (s = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.formState !== void 0 && (R = u.formState)), n = Xh(
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
      zp
    ), n.context = mo(null), u = n.current, c = Ha(), c = ud(c), r = di(c), r.callback = null, Wa(u, r, c), u = c, n.current.lanes = u, xi(n, u), Yu(n), l[Bi] = n.current, Uf(l), new Jh(n);
  }, T0.version = "19.2.8", T0;
}
var A0 = {};
var FE;
function JT() {
  return FE || (FE = 1, process.env.NODE_ENV !== "production" && (function() {
    function b(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function H(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = Tl(e) ? e.slice() : Pe({}, e);
      return f[o] = H(e[o], t, a + 1, i), f;
    }
    function le(e, t, a) {
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
        return T(e, t, a, 0);
      }
    }
    function T(e, t, a, i) {
      var o = t[i], f = Tl(e) ? e.slice() : Pe({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], Tl(f) ? f.splice(o, 1) : delete f[o]) : f[o] = T(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function ie(e, t, a) {
      var i = t[a], o = Tl(e) ? e.slice() : Pe({}, e);
      return a + 1 === t.length ? (Tl(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = ie(e[i], t, a + 1), o);
    }
    function oe() {
      return !1;
    }
    function pe() {
      return null;
    }
    function F() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function I() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function V() {
    }
    function Se() {
    }
    function j(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function z(e, t, a, i) {
      return new n1(e, t, a, i);
    }
    function ae(e, t) {
      e.context === $f && (Ch(e.current, 2, t, e, null, null), tn());
    }
    function ze(e, t) {
      if (Zu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, fs(), G0(
          e.current,
          t,
          a
        ), tn();
      }
    }
    function je(e) {
      Zu = e;
    }
    function it(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Ie(e) {
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
    function cl(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Et(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function jt(e) {
      if (Ie(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Vt(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Ie(e), t === null)
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
            if (f === a) return jt(o), e;
            if (f === i) return jt(o), t;
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
    function Zt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Zt(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function Ce(e) {
      return e === null || typeof e != "object" ? null : (e = Xg && e[Xg] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Qe(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Bf ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Nf:
          return "Fragment";
        case _s:
          return "Profiler";
        case Oa:
          return "StrictMode";
        case so:
          return "Suspense";
        case Na:
          return "SuspenseList";
        case tu:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case dc:
            return "Portal";
          case eu:
            return e.displayName || "Context";
          case Bh:
            return (e._context.displayName || "Context") + ".Consumer";
          case xf:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case zs:
            return t = e.displayName || null, t !== null ? t : Qe(e.type) || "Memo";
          case ua:
            t = e._payload, e = e._init;
            try {
              return Qe(e(t));
            } catch {
            }
        }
      return null;
    }
    function ot(e) {
      return typeof e.tag == "number" ? he(e) : typeof e.name == "string" ? e.name : null;
    }
    function he(e) {
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
          return Qe(t);
        case 8:
          return t === Oa ? "StrictMode" : "Mode";
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
            return he(e.return);
      }
      return null;
    }
    function qt(e) {
      return { current: e };
    }
    function be(e, t) {
      0 > Ti ? console.error("Unexpected pop.") : (t !== Sp[Ti] && console.error("Unexpected Fiber popped."), e.current = vp[Ti], vp[Ti] = null, Sp[Ti] = null, Ti--);
    }
    function Xe(e, t, a) {
      Ti++, vp[Ti] = e.current, Sp[Ti] = a, e.current = t;
    }
    function Jt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Yt(e, t) {
      Xe(an, t, e), Xe(jf, e, e), Xe(hc, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? yg(t) : Co;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = yg(t), t = Si(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = Tm;
                break;
              case "math":
                t = Gv;
                break;
              default:
                t = Co;
            }
      }
      a = a.toLowerCase(), a = Cm(null, a), a = {
        context: t,
        ancestorInfo: a
      }, be(hc, e), Xe(hc, a, e);
    }
    function C(e) {
      be(hc, e), be(jf, e), be(an, e);
    }
    function J() {
      return Jt(hc.current);
    }
    function ne(e) {
      e.memoizedState !== null && Xe(mc, e, e);
      var t = Jt(hc.current), a = e.type, i = Si(t.context, a);
      a = Cm(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Xe(jf, e, e), Xe(hc, i, e));
    }
    function Te(e) {
      jf.current === e && (be(hc, e), be(jf, e)), mc.current === e && (be(mc, e), g0._currentValue = td);
    }
    function Ue() {
    }
    function S() {
      if (qf === 0) {
        Qg = console.log, ho = console.info, Yf = console.warn, bp = console.error, Ds = console.group, jh = console.groupCollapsed, qh = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ue,
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
    function q() {
      if (qf--, qf === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Pe({}, e, { value: Qg }),
          info: Pe({}, e, { value: ho }),
          warn: Pe({}, e, { value: Yf }),
          error: Pe({}, e, { value: bp }),
          group: Pe({}, e, { value: Ds }),
          groupCollapsed: Pe({}, e, { value: jh }),
          groupEnd: Pe({}, e, { value: qh })
        });
      }
      0 > qf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function ee(e) {
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
    function P(e) {
      if (wf === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          wf = t && t[1] || "", Ep = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + wf + e + Ep;
    }
    function Oe(e, t) {
      if (!e || Yh) return "";
      var a = Tp.get(e);
      if (a !== void 0) return a;
      Yh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = X.H, X.H = null, S();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var A = function() {
                  throw Error();
                };
                if (Object.defineProperty(A.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(A, []);
                  } catch (ce) {
                    var G = ce;
                  }
                  Reflect.construct(e, [], A);
                } else {
                  try {
                    A.call();
                  } catch (ce) {
                    G = ce;
                  }
                  e.call(A.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ce) {
                  G = ce;
                }
                (A = e()) && typeof A.catch == "function" && A.catch(function() {
                });
              }
            } catch (ce) {
              if (ce && G && typeof ce.stack == "string")
                return [ce.stack, G.stack];
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
`), D = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < D.length && !D[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === D.length)
            for (f = p.length - 1, d = D.length - 1; 1 <= f && 0 <= d && p[f] !== D[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== D[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== D[d]) {
                    var U = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && Tp.set(e, U), U;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Yh = !1, X.H = i, q(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? P(p) : "", typeof e == "function" && Tp.set(e, p), p;
    }
    function Ve(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return P(e.type);
        case 16:
          return P("Lazy");
        case 13:
          return e.child !== t && t !== null ? P("Suspense Fallback") : P("Suspense");
        case 19:
          return P("SuspenseList");
        case 0:
        case 15:
          return Oe(e.type, !1);
        case 11:
          return Oe(e.type.render, !1);
        case 1:
          return Oe(e.type, !0);
        case 31:
          return P("Activity");
        default:
          return "";
      }
    }
    function De(e) {
      try {
        var t = "", a = null;
        do {
          t += Ve(e, a);
          var i = e._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = t;
                e: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var D = ee(p), U = D.lastIndexOf(`
`), A = U === -1 ? D : D.slice(U + 1);
                    if (A.indexOf(h) !== -1) {
                      var G = `
` + A;
                      break e;
                    }
                  }
                  G = P(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                t = d + G;
              }
            }
          a = e, e = e.return;
        } while (e);
        return t;
      } catch (ce) {
        return `
Error generating stack: ` + ce.message + `
` + ce.stack;
      }
    }
    function Kt(e) {
      return (e = e ? e.displayName || e.name : "") ? P(e) : "";
    }
    function gt() {
      if (xa === null) return null;
      var e = xa._debugOwner;
      return e != null ? ot(e) : null;
    }
    function Ya() {
      if (xa === null) return "";
      var e = xa;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += P(e.type);
            break;
          case 13:
            t += P("Suspense");
            break;
          case 19:
            t += P("SuspenseList");
            break;
          case 31:
            t += P("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += Kt(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += Kt(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            if (e && i) {
              var o = ee(i);
              o !== "" && (t += `
` + o);
            }
          } else if (e.debugStack != null) {
            var f = e.debugStack;
            (e = e.owner) && f && (t += `
` + ee(f));
          } else break;
        var d = t;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function re(e, t, a, i, o, f, d) {
      var h = xa;
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
      X.getCurrentStack = e === null ? null : Ya, wu = !1, xa = e;
    }
    function Ui(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function wa(e) {
      try {
        return fu(e), !1;
      } catch {
        return !0;
      }
    }
    function fu(e) {
      return "" + e;
    }
    function vt(e, t) {
      if (wa(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Ui(e)
        ), fu(e);
    }
    function ea(e, t) {
      if (wa(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Ui(e)
        ), fu(e);
    }
    function Ec(e) {
      if (wa(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Ui(e)
        ), fu(e);
    }
    function yr(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        yo = t.inject(e), Dl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function me(e) {
      if (typeof Rp == "function" && Zg(e), Dl && typeof Dl.setStrictMode == "function")
        try {
          Dl.setStrictMode(yo, e);
        } catch (t) {
          Gu || (Gu = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function Hi(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (_p(e) / Vh | 0) | 0;
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
    function Tc(e, t, a) {
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
    function ad(e, t) {
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
    function No() {
      var e = Lf;
      return Lf <<= 1, (Lf & 62914560) === 0 && (Lf = 4194304), e;
    }
    function xo(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Hn(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function nd(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var D = 31 - Wl(a), U = 1 << D;
        h[D] = 0, y[D] = -1;
        var A = p[D];
        if (A !== null)
          for (p[D] = null, D = 0; D < A.length; D++) {
            var G = A[D];
            G !== null && (G.lane &= -536870913);
          }
        a &= ~U;
      }
      i !== 0 && Bo(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function Bo(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Wl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 261930;
    }
    function pr(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Wl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function Ac(e, t) {
      var a = t & -t;
      return a = (a & 42) !== 0 ? 1 : dn(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
    }
    function dn(e) {
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
    function Ol(e, t, a) {
      if (Lu)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Wl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Ga(e, t) {
      if (Lu)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Wl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Hl(e) {
      return e &= -e, Ml < e ? Fl < e ? (e & 134217727) !== 0 ? ia : yc : Fl : Ml;
    }
    function Ni() {
      var e = Ot.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? ia : Hh(e.type));
    }
    function g(e, t) {
      var a = Ot.p;
      try {
        return Ot.p = e, t();
      } finally {
        Ot.p = a;
      }
    }
    function N(e) {
      delete e[Pt], delete e[Ra], delete e[po], delete e[d1], delete e[Jg];
    }
    function te(e) {
      var t = e[Pt];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ai] || a[Pt]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = co(e); e !== null; ) {
              if (a = e[Pt])
                return a;
              e = co(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ue(e) {
      if (e = e[Pt] || e[Ai]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function ye(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Ne(e) {
      var t = e[Us];
      return t || (t = e[Us] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function ge(e) {
      e[Xf] = !0;
    }
    function at(e, t) {
      Ze(e, t), Ze(e + "Capture", t);
    }
    function Ze(e, t) {
      Xu[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Xu[e] = t;
      var a = e.toLowerCase();
      for (Qf[a] = e, e === "onDoubleClick" && (Qf.ondblclick = e), e = 0; e < t.length; e++)
        Kg.add(t[e]);
    }
    function ta(e, t) {
      $g[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function hn(e) {
      return nn.call(Zh, e) ? !0 : nn.call(zp, e) ? !1 : Vf.test(e) ? Zh[e] = !0 : (zp[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function xi(e, t, a) {
      if (hn(t)) {
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
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (vt(a, t), e === "" + a ? a : e);
      }
    }
    function jo(e, t, a) {
      if (hn(t))
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
          vt(a, t), e.setAttribute(t, "" + a);
        }
    }
    function gr(e, t, a) {
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
        vt(a, t), e.setAttribute(t, "" + a);
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
        vt(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function La(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Ec(e), e;
        default:
          return "";
      }
    }
    function ud(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Rm(e, t, a) {
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
            Ec(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            Ec(d), a = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function id(e) {
      if (!e._valueTracker) {
        var t = ud(e) ? "checked" : "value";
        e._valueTracker = Rm(
          e,
          t,
          "" + e[t]
        );
      }
    }
    function _m(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = ud(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function Nn(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Ct(e) {
      return e.replace(
        Jh,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function ra(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || kg || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        gt() || "A component",
        t.type
      ), kg = !0), t.value === void 0 || t.defaultValue === void 0 || Dp || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        gt() || "A component",
        t.type
      ), Dp = !0);
    }
    function Bi(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (vt(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + La(t)) : e.value !== "" + La(t) && (e.value = "" + La(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? zm(e, d, La(t)) : a != null ? zm(e, d, La(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (vt(h, "name"), e.name = "" + La(h)) : e.removeAttribute("name");
    }
    function cd(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (vt(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          id(e);
          return;
        }
        a = a != null ? "" + La(a) : "", t = t != null ? "" + La(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (vt(d, "name"), e.name = d), id(e);
    }
    function zm(e, t, a) {
      t === "number" && Nn(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function _0(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Rs.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Hs || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Hs = !0);
    }
    function Dm() {
      var e = gt();
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
        for (a = "" + La(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function od(e, t) {
      for (e = 0; e < c.length; e++) {
        var a = c[e];
        if (t[a] != null) {
          var i = Tl(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Dm()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Dm()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function Oc(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || r || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        gt() || "A component"
      ), r = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Rc(e, t, a) {
      if (t != null && (t = "" + La(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + La(a) : "";
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
      a = La(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i), id(e);
    }
    function _c(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? _c(e.children[0], t) : e;
    }
    function Rt(e) {
      return "  " + "  ".repeat(e);
    }
    function zc(e) {
      return "+ " + "  ".repeat(e);
    }
    function ji(e) {
      return "- " + "  ".repeat(e);
    }
    function qi(e) {
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
    function fd(e, t, a) {
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
      return Rt(a) + hu(e, i) + `
`;
    }
    function rd(e) {
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
          if (e.$$typeof === Rn)
            return (t = Qe(e.type)) ? "<" + t + ">" : "<...>";
          var a = rd(e);
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
    function wo(e, t) {
      return typeof e != "string" || s.test(e) ? "{" + Yo(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Go(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = wo(
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
    function sd(e, t, a) {
      var i = "", o = Pe({}, t), f;
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
        o += Go(
          e,
          t,
          Rt(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = t[d];
              y = a[y];
              var D = wo(
                p,
                h
              );
              h = wo(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && rd(p) === "Object" && rd(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < D.indexOf("...") || -1 < h.indexOf("...")) ? o += Rt(i + 1) + d + `={{
` + sd(
                p,
                y,
                i + 2
              ) + Rt(i + 1) + `}}
` : (o += zc(i + 1) + d + "=" + D + `
`, o += ji(i + 1) + d + "=" + h + `
`);
            } else
              o += Rt(i + 1) + d + "=" + wo(t[d], h) + `
`;
          }
        f.forEach(function(U) {
          if (U !== "children") {
            var A = 120 - 2 * (i + 1) - U.length - 1;
            o += ji(i + 1) + U + "=" + wo(a[U], A) + `
`;
          }
        }), o = o === "" ? Rt(i) + "<" + e + `>
` : Rt(i) + "<" + e + `
` + o + Rt(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += fd(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + fd("" + t, null, i + 1) : o + fd("" + t, void 0, i + 1)), o;
    }
    function Xa(e, t) {
      var a = qi(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Xa(e, t), e = e.sibling;
        return a;
      }
      return Rt(t) + "<" + a + `>
`;
    }
    function dd(e, t) {
      var a = _c(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Rt(t) + `...
` + dd(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Rt(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = fd(o, e.serverProps, t), t++;
      else if (f = qi(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = wo(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = Rt(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Go(
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
        d = e.children[f], d.fiber === o ? (p += dd(d, t), f++) : p += Xa(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += Rt(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (ji(t) + hu(f, 120 - 2 * t) + `
`) : p + Go(
          f.type,
          f.props,
          ji(t)
        );
      return a + i + p;
    }
    function Mm(e) {
      try {
        return `

` + dd(e, 0);
      } catch {
        return "";
      }
    }
    function hd(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? Mm(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Cm(e, t) {
      var a = Pe({}, e || Z), i = { tag: t };
      return v.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), R.indexOf(t) !== -1 && (a.pTagInButtonScope = null), m.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function vr(e, t, a) {
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
          return Y.indexOf(t) === -1;
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
    function Iv(e, t) {
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
    function Qa(e, t) {
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
    function Sr(e, t) {
      t = t || Z;
      var a = t.current;
      if (t = (a = vr(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Iv(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, k[t]) return !1;
      k[t] = !0;
      var o = (t = xa) ? Qa(t.return, i) : null, f = t !== null && o !== null ? hd(o, t, null) : "", d = "<" + e + ">";
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
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || re(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function br(e, t, a) {
      if (a || vr("#text", t, !1))
        return !0;
      if (a = "#text|" + t, k[a]) return !1;
      k[a] = !0;
      var i = (a = xa) ? Qa(a, t) : null;
      return a = a !== null && i !== null ? hd(
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
    function Dc(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function Lo(e) {
      return e.replace(x, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Um(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? B.hasOwnProperty(t) && B[t] || (B[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        Lo(t.replace(xt, "ms-"))
      )) : He.test(t) ? B.hasOwnProperty(t) && B[t] || (B[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !M.test(a) || $.hasOwnProperty(a) && $[a] || ($[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(M, "")
      )), typeof a == "number" && (isNaN(a) ? Re || (Re = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || yt || (yt = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || ve.has(t) ? t === "float" ? e.cssFloat = a : (ea(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Hm(e, t, a) {
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
                for (var f = w[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = w[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in t)
            for (o = w[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in i)
            if (o = i[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var D = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                D == null || typeof D == "boolean" || D === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var U in a)
          !a.hasOwnProperty(U) || t != null && t.hasOwnProperty(U) || (U.indexOf("--") === 0 ? e.setProperty(U, "") : U === "float" ? e.cssFloat = "" : e[U] = "");
        for (var A in t)
          p = t[A], t.hasOwnProperty(A) && a[A] !== p && Um(e, A, p);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Um(e, i, t[i]);
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
    function z0(e) {
      return bt.get(e) || e;
    }
    function D0(e, t) {
      if (nn.call(Kh, t) && Kh[t])
        return !0;
      if (y2.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Wg.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Kh[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Kh[t] = !0;
      }
      if (m2.test(t)) {
        if (e = t.toLowerCase(), e = Wg.hasOwnProperty(e) ? e : null, e == null) return Kh[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Kh[t] = !0);
      }
      return !0;
    }
    function M0(e, t) {
      var a = [], i;
      for (i in t)
        D0(e, i) || a.push(i);
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
    function Nm(e, t, a, i) {
      if (nn.call(un, t) && un[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), un[t] = !0;
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
          ), un[t] = !0;
        if (MS.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), un[t] = !0;
      } else if (MS.test(t))
        return p2.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), un[t] = !0;
      if (g2.test(t) || v2.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), un[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), un[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), un[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), un[t] = !0;
      if (lu.hasOwnProperty(o)) {
        if (o = lu[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), un[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), un[t] = !0;
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
              ), un[t] = !0);
          }
        case "function":
        case "symbol":
          return un[t] = !0, !1;
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
            ), un[t] = !0;
          }
      }
      return !0;
    }
    function Pv(e, t, a) {
      var i = [], o;
      for (o in t)
        Nm(e, o, t[o], a) || i.push(o);
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
    function Er(e) {
      return S2.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function mn() {
    }
    function xn(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function md(e) {
      var t = ue(e);
      if (t && (e = t.stateNode)) {
        var a = e[Ra] || null;
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
              for (vt(t, "name"), a = a.querySelectorAll(
                'input[name="' + Ct(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[Ra] || null;
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
                i = a[t], i.form === e.form && _m(i);
            }
            break e;
          case "textarea":
            Rc(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && du(e, !!a.multiple, t, !1);
        }
      }
    }
    function yd(e, t, a) {
      if (h1) return e(t, a);
      h1 = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (h1 = !1, ($h !== null || kh !== null) && (tn(), $h && (t = $h, e = kh, kh = $h = null, md(t), e)))
          for (t = 0; t < e.length; t++) md(e[t]);
      }
    }
    function yu(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[Ra] || null;
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
    function Mc() {
      if (Fg) return Fg;
      var e, t = y1, a = t.length, i, o = "value" in Zf ? Zf.value : Zf.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Fg = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function Tr(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Xo() {
      return !0;
    }
    function xm() {
      return !1;
    }
    function Nl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Xo : xm, this.isPropagationStopped = xm, this;
      }
      return Pe(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Xo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Xo);
        },
        persist: function() {
        },
        isPersistent: Xo
      }), t;
    }
    function li(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = H2[e]) ? !!t[e] : !1;
    }
    function Ar() {
      return li;
    }
    function Qo(e, t) {
      switch (e) {
        case "keyup":
          return V2.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== NS;
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
    function Bm(e, t) {
      switch (e) {
        case "compositionend":
          return ai(t);
        case "keypress":
          return t.which !== BS ? null : (qS = !0, jS);
        case "textInput":
          return e = t.data, e === jS && qS ? null : e;
        default:
          return null;
      }
    }
    function pd(e, t) {
      if (Wh)
        return e === "compositionend" || !S1 && Qo(e, t) ? (e = Mc(), Fg = y1 = Zf = null, Wh = !1, e) : null;
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
          return xS && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function jm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!J2[e.type] : t === "textarea";
    }
    function gd(e) {
      if (!pc) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Or(e, t, a, i) {
      $h ? kh ? kh.push(i) : kh = [i] : $h = i, t = Fn(t, "onChange"), 0 < t.length && (a = new Ig(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function C0(e) {
      Dt(e, 0);
    }
    function $l(e) {
      var t = ye(e);
      if (_m(t)) return e;
    }
    function Yi(e, t) {
      if (e === "change") return t;
    }
    function Rr() {
      xp && (xp.detachEvent("onpropertychange", Vo), Bp = xp = null);
    }
    function Vo(e) {
      if (e.propertyName === "value" && $l(Bp)) {
        var t = [];
        Or(
          t,
          Bp,
          e,
          xn(e)
        ), yd(C0, t);
      }
    }
    function e1(e, t, a) {
      e === "focusin" ? (Rr(), xp = t, Bp = a, xp.attachEvent("onpropertychange", Vo)) : e === "focusout" && Rr();
    }
    function qm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return $l(Bp);
    }
    function Ym(e, t) {
      if (e === "click") return $l(t);
    }
    function _r(e, t) {
      if (e === "input" || e === "change")
        return $l(t);
    }
    function vd(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Zo(e, t) {
      if (cn(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!nn.call(t, o) || !cn(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function U0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function H0(e, t) {
      var a = U0(e);
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
        a = U0(a);
      }
    }
    function N0(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? N0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Sd(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = Nn(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = Nn(e.document);
      }
      return t;
    }
    function wm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function x0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      E1 || Fh == null || Fh !== Nn(i) || (i = Fh, "selectionStart" in i && wm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), jp && Zo(jp, i) || (jp = i, i = Fn(b1, "onSelect"), 0 < i.length && (t = new Ig(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Fh)));
    }
    function Cc(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Uc(e) {
      if (T1[e]) return T1[e];
      if (!Ih[e]) return e;
      var t = Ih[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in wS)
          return T1[e] = t[a];
      return e;
    }
    function Bn(e, t) {
      VS.set(e, t), at(t, [e]);
    }
    function B0(e) {
      for (var t = ev, a = 0; a < e.length; a++) {
        var i = e[a];
        if (typeof i == "object" && i !== null)
          if (Tl(i) && i.length === 2 && typeof i[0] == "string") {
            if (t !== ev && t !== z1)
              return R1;
            t = z1;
          } else return R1;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || t !== ev && t !== _1)
            return R1;
          t = _1;
        }
      }
      return t;
    }
    function Gm(e, t, a, i) {
      for (var o in e)
        nn.call(e, o) && o[0] !== "_" && pu(o, e[o], t, a, i);
    }
    function pu(e, t, a, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === Rn) {
              var f = Qe(t.type) || "…", d = t.key;
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
                p === "children" ? t.children != null && (!Tl(t.children) || 0 < t.children.length) && (e = !0) : nn.call(t, p) && p[0] !== "_" && pu(
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
              if (p = B0(t), p === _1 || p === ev) {
                t = JSON.stringify(t);
                break;
              } else if (p === z1) {
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
            ]), 3 > i && Gm(t, a, i + 1, o);
            return;
          }
        case "function":
          t = t.name === "" ? "() => {}" : t.name + "() {}";
          break;
        case "string":
          t = t === P2 ? "…" : JSON.stringify(t);
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
    function j0(e, t, a, i) {
      var o = !0;
      for (d in e)
        d in t || (a.push([
          tv + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in t)
        if (f in e) {
          var d = e[f], h = t[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [tv + o, "…"],
                [lv + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === Rn) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Qe(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [tv + o, d],
                        [lv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        KS + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, j0(
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
                    KS + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              pu(f, d, a, i, tv), pu(f, h, a, i, lv);
            }
            o = !1;
          }
        } else
          a.push([
            lv + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function jn(e) {
      mt = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function yn(e, t, a, i) {
      el && (Kf.start = t, Kf.end = a, go.color = "warning", go.tooltipText = i, go.properties = null, (e = e._debugTask) ? e.run(
        performance.measure.bind(
          performance,
          i,
          Kf
        )
      ) : performance.measure(i, Kf));
    }
    function bd(e, t, a) {
      yn(e, t, a, "Reconnect");
    }
    function Ed(e, t, a, i, o) {
      var f = he(e);
      if (f !== null && el) {
        var d = e.alternate, h = e.actualDuration;
        if (d === null || d.child !== e.child)
          for (var y = e.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var p = e.memoizedProps;
        h = e._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [eT], p = j0(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Jf && (d.lanes & o) === 0 && 100 < e.actualDuration ? (Jf = !0, y[0] = tT, go.color = "warning", go.tooltipText = $S) : (go.color = i, go.tooltipText = f), go.properties = y, Kf.start = t, Kf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Kf
          )
        ) : performance.measure(
          "​" + f,
          Kf
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
    function Lm(e, t, a, i) {
      if (el) {
        var o = he(e);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          e.key !== null && pu("key", e.key, d, 0, ""), e.memoizedProps !== null && Gm(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
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
        if (el) {
          var f = he(e);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            e.key !== null && pu("key", e.key, i, 0, ""), e.memoizedProps !== null && Gm(e.memoizedProps, i, 0, ""), t = {
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
        f = he(e), f !== null && el && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(
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
    function t1(e, t, a, i) {
      if (el && !(t <= e)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            a,
            e,
            t,
            mt,
            dt,
            o
          )
        ) : console.timeStamp(
          a,
          e,
          t,
          mt,
          dt,
          o
        );
      }
    }
    function q0(e, t, a, i) {
      !el || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          e,
          t,
          mt,
          dt,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        e,
        t,
        mt,
        dt,
        a
      ));
    }
    function Y0(e, t, a, i) {
      !el || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          e,
          t,
          mt,
          dt,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        e,
        t,
        mt,
        dt,
        a
      ));
    }
    function l1(e, t, a, i, o, f) {
      if (el && !(t <= e)) {
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
              track: mt,
              trackGroup: dt,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", e)
        ) : performance.measure("Recovered", e);
      }
    }
    function Xm(e, t, a, i) {
      !el || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          e,
          t,
          mt,
          dt,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        e,
        t,
        mt,
        dt,
        "error"
      ));
    }
    function a1(e, t, a, i) {
      !el || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          a,
          e,
          t,
          mt,
          dt,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        e,
        t,
        mt,
        dt,
        "secondary-light"
      ));
    }
    function w0(e, t, a, i, o) {
      if (el && !(t <= e)) {
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
              track: mt,
              trackGroup: dt,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", e)
        ) : performance.measure("Errored", e);
      }
    }
    function Qm(e, t, a) {
      !el || t <= e || console.timeStamp(
        "Animating",
        e,
        t,
        mt,
        dt,
        "secondary-dark"
      );
    }
    function Td() {
      for (var e = Ph, t = D1 = Ph = 0; t < e; ) {
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
        f !== 0 && Vm(a, o, f);
      }
    }
    function Jo(e, t, a, i) {
      Vu[Ph++] = e, Vu[Ph++] = t, Vu[Ph++] = a, Vu[Ph++] = i, D1 |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Hc(e, t, a, i) {
      return Jo(e, t, a, i), zr(e);
    }
    function la(e, t) {
      return Jo(e, null, null, t), zr(e);
    }
    function Vm(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & qp || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Wl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function zr(e) {
      if (r0 > gT)
        throw ks = r0 = 0, s0 = cS = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      ks > vT && (ks = 0, s0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && On(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && On(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function wi(e) {
      if (Zu === null) return e;
      var t = Zu(e);
      return t === void 0 ? e : t.current;
    }
    function Ad(e) {
      if (Zu === null) return e;
      var t = Zu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = wi(e.render), e.render !== t) ? (t = { $$typeof: xf, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Zm(e, t) {
      if (Zu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === ua) && (i = !0);
          break;
        case 11:
          (o === xf || o === ua) && (i = !0);
          break;
        case 14:
        case 15:
          (o === zs || o === ua) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Zu(a), e !== void 0 && e === Zu(t)));
    }
    function Nc(e) {
      Zu !== null && typeof WeakSet == "function" && (em === null && (em = /* @__PURE__ */ new WeakSet()), em.add(e));
    }
    function G0(e, t, a) {
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
        if (i = !1, y !== null && (y = Zu(y), y !== void 0 && (a.has(y) ? i = !0 : t.has(y) && (h === 1 ? i = !0 : p = !0))), em !== null && (em.has(e) || o !== null && em.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || p) && (o = la(e, 2), o !== null && Ye(o, e, 2)), f === null || i || G0(
          f,
          t,
          a
        ), d === null) break;
        e = d;
      } while (!0);
    }
    function n1(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, kS || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Jm(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function gu(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = z(
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
          a.type = wi(e.type);
          break;
        case 1:
          a.type = wi(e.type);
          break;
        case 11:
          a.type = Ad(e.type);
      }
      return a;
    }
    function Km(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function xc(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Jm(e) && (d = 1), h = wi(h);
      else if (typeof e == "string")
        d = J(), d = Bg(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case tu:
            return t = z(31, a, t, o), t.elementType = tu, t.lanes = f, t;
          case Nf:
            return Bc(
              a.children,
              o,
              f,
              t
            );
          case Oa:
            d = 8, o |= Ba, o |= Oi;
            break;
          case _s:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = z(12, e, t, i | et), t.elementType = _s, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case so:
            return t = z(13, a, t, o), t.elementType = so, t.lanes = f, t;
          case Na:
            return t = z(19, a, t, o), t.elementType = Na, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case eu:
                  d = 10;
                  break e;
                case Bh:
                  d = 9;
                  break e;
                case xf:
                  d = 11, h = Ad(h);
                  break e;
                case zs:
                  d = 14;
                  break e;
                case ua:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : Tl(e) ? a = "array" : e !== void 0 && e.$$typeof === Rn ? (a = "<" + (Qe(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? ot(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = z(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function Gi(e, t, a) {
      return t = xc(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Bc(e, t, a, i) {
      return e = z(7, e, i, t), e.lanes = a, e;
    }
    function Ko(e, t, a) {
      return e = z(6, e, null, t), e.lanes = a, e;
    }
    function $m(e) {
      var t = z(18, null, null, qe);
      return t.stateNode = e, t;
    }
    function Od(e, t, a) {
      return t = z(
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
    function sa(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = M1.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: De(t)
        }, M1.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: De(t)
      };
    }
    function Yn(e, t) {
      Li(), tm[lm++] = Yp, tm[lm++] = av, av = e, Yp = t;
    }
    function km(e, t, a) {
      Li(), Ju[Ku++] = So, Ju[Ku++] = bo, Ju[Ku++] = xs, xs = e;
      var i = So;
      e = bo;
      var o = 32 - Wl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Wl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, So = 1 << 32 - Wl(t) + o | a << o | i, bo = f + e;
      } else
        So = 1 << f | a << o | i, bo = e;
    }
    function Rd(e) {
      Li(), e.return !== null && (Yn(e, 1), km(e, 1, 0));
    }
    function _d(e) {
      for (; e === av; )
        av = tm[--lm], tm[lm] = null, Yp = tm[--lm], tm[lm] = null;
      for (; e === xs; )
        xs = Ju[--Ku], Ju[Ku] = null, bo = Ju[--Ku], Ju[Ku] = null, So = Ju[--Ku], Ju[Ku] = null;
    }
    function L0() {
      return Li(), xs !== null ? { id: So, overflow: bo } : null;
    }
    function X0(e, t) {
      Li(), Ju[Ku++] = So, Ju[Ku++] = bo, Ju[Ku++] = xs, So = t.id, bo = t.overflow, xs = e;
    }
    function Li() {
      st || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function jc(e, t) {
      if (e.return === null) {
        if (au === null)
          au = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (au.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          au.distanceFromLeaf > t && (au.distanceFromLeaf = t);
        }
        return au;
      }
      var a = jc(
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
    function Q0() {
      st && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function aa(e, t) {
      gc || (e = jc(e, 0), e.serverProps = null, t !== null && (t = Ug(t), e.serverTail.push(t)));
    }
    function pn(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = au;
      throw i !== null && (au = null, a = Mm(i)), Mr(
        sa(
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
      ), C1;
    }
    function Wm(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Pt] = e, t[Ra] = i, Ta(a, i), a) {
        case "dialog":
          Be("cancel", t), Be("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Be("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < d0.length; a++)
            Be(d0[a], t);
          break;
        case "source":
          Be("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Be("error", t), Be("load", t);
          break;
        case "details":
          Be("toggle", t);
          break;
        case "input":
          ta("input", i), Be("invalid", t), ra(t, i), cd(
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
          _0(t, i);
          break;
        case "select":
          ta("select", i), Be("invalid", t), od(t, i);
          break;
        case "textarea":
          ta("textarea", i), Be("invalid", t), Oc(t, i), qo(
            t,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Iy(t.textContent, a) ? (i.popover != null && (Be("beforetoggle", t), Be("toggle", t)), i.onScroll != null && Be("scroll", t), i.onScrollEnd != null && Be("scrollend", t), i.onClick != null && (t.onclick = mn), t = !0) : t = !1, t || pn(e, !0);
    }
    function Fm(e) {
      for (_a = e.return; _a; )
        switch (_a.tag) {
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
            _a = _a.return;
        }
    }
    function qc(e) {
      if (e !== _a) return !1;
      if (!st)
        return Fm(e), st = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Rf(e.type, e.memoizedProps)), a = !a), a && tl) {
        for (a = tl; a; ) {
          var i = jc(e, 0), o = Ug(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Df(a) : ln(a.nextSibling);
        }
        pn(e);
      }
      if (Fm(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        tl = Df(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        tl = Df(e);
      } else
        t === 27 ? (t = tl, rc(e.type) ? (e = SS, SS = null, tl = e) : tl = t) : tl = _a ? ln(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Xi() {
      tl = _a = null, gc = st = !1;
    }
    function Dr() {
      var e = kf;
      return e !== null && (sn === null ? sn = e : sn.push.apply(
        sn,
        e
      ), kf = null), e;
    }
    function Mr(e) {
      kf === null ? kf = [e] : kf.push(e);
    }
    function Qi() {
      var e = au;
      if (e !== null) {
        au = null;
        for (var t = Mm(e); 0 < e.children.length; )
          e = e.children[0];
        re(e.fiber, function() {
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
    function $o() {
      am = nv = null, nm = !1;
    }
    function gn(e, t, a) {
      Xe(U1, t._currentValue, e), t._currentValue = a, Xe(H1, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== FS && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = FS;
    }
    function wn(e, t) {
      e._currentValue = U1.current;
      var a = H1.current;
      be(H1, t), e._currentRenderer = a, be(U1, t);
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
    function Gn(e, t, a, i) {
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
            cn(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === mc.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(g0) : e = [g0]);
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
    function ko(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!cn(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function Vi(e) {
      nv = e, am = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Tt(e) {
      return nm && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Im(nv, e);
    }
    function Cr(e, t) {
      return nv === null && Vi(e), Im(e, t);
    }
    function Im(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, am === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        am = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else am = am.next = t;
      return a;
    }
    function Dd() {
      return {
        controller: new nT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Yc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function Ur(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && uT(iT, function() {
        e.controller.abort();
      });
    }
    function vu(e, t, a) {
      (e & 127) !== 0 ? 0 > vc && (vc = Xl(), Gp = uv(t), N1 = t, a != null && (x1 = he(a)), (pt & (Pl | iu)) !== fa && (vl = !0, Ff = wp), e = _f(), t = qu(), e !== um || t !== Lp ? um = -1.1 : t !== null && (Ff = wp), qs = e, Lp = t) : (e & 4194048) !== 0 && 0 > ku && (ku = Xl(), Xp = uv(t), IS = t, a != null && (PS = he(a)), 0 > Oo) && (e = _f(), t = qu(), (e !== Pf || t !== Ys) && (Pf = -1.1), If = e, Ys = t);
    }
    function V0(e) {
      if (0 > vc) {
        vc = Xl(), Gp = e._debugTask != null ? e._debugTask : null, (pt & (Pl | iu)) !== fa && (Ff = wp);
        var t = _f(), a = qu();
        t !== um || a !== Lp ? um = -1.1 : a !== null && (Ff = wp), qs = t, Lp = a;
      }
      0 > ku && (ku = Xl(), Xp = e._debugTask != null ? e._debugTask : null, 0 > Oo) && (e = _f(), t = qu(), (e !== Pf || t !== Ys) && (Pf = -1.1), If = e, Ys = t);
    }
    function Su() {
      var e = Bs;
      return Bs = 0, e;
    }
    function Wo(e) {
      var t = Bs;
      return Bs = e, t;
    }
    function da(e) {
      var t = Bs;
      return Bs += e, t;
    }
    function wc() {
      xe = Me = -1.1;
    }
    function Wt() {
      var e = Me;
      return Me = -1.1, e;
    }
    function xl(e) {
      0 <= e && (Me = e);
    }
    function vn() {
      var e = sl;
      return sl = -0, e;
    }
    function Va(e) {
      0 <= e && (sl = e);
    }
    function Za() {
      var e = il;
      return il = null, e;
    }
    function Sn() {
      var e = vl;
      return vl = !1, e;
    }
    function ui(e) {
      on = Xl(), 0 > e.actualStartTime && (e.actualStartTime = on);
    }
    function Md(e) {
      if (0 <= on) {
        var t = Xl() - on;
        e.actualDuration += t, e.selfBaseDuration = t, on = -1;
      }
    }
    function Hr(e) {
      if (0 <= on) {
        var t = Xl() - on;
        e.actualDuration += t, on = -1;
      }
    }
    function ha() {
      if (0 <= on) {
        var e = Xl(), t = e - on;
        on = -1, Bs += t, sl += t, xe = e;
      }
    }
    function Z0(e) {
      il === null && (il = []), il.push(e), To === null && (To = []), To.push(e);
    }
    function ol() {
      on = Xl(), 0 > Me && (Me = on);
    }
    function Gc(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ii(e, t) {
      if (Vp === null) {
        var a = Vp = [];
        j1 = 0, ws = Fy(), im = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return j1++, t.then(Pm, Pm), t;
    }
    function Pm() {
      if (--j1 === 0 && (-1 < ku || (Oo = -1.1), Vp !== null)) {
        im !== null && (im.status = "fulfilled");
        var e = Vp;
        Vp = null, ws = 0, im = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Cd(e, t) {
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
      var e = Gs.current;
      return e !== null ? e : Qt.pooledCache;
    }
    function Fo(e, t) {
      t === null ? Xe(Gs, Gs.current, e) : Xe(Gs, t.pool, e);
    }
    function ey() {
      var e = ci();
      return e === null ? null : { parent: Ll._currentValue, pool: e };
    }
    function Ud() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function ty(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Ja(e, t, a) {
      X.actQueue !== null && (X.didUsePromise = !0);
      var i = e.thenables;
      if (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(mn, mn), t = a), t._debugInfo === void 0) {
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
          throw e = t.reason, Nr(e), e;
        default:
          if (typeof t.status == "string")
            t.then(mn, mn);
          else {
            if (e = Qt, e !== null && 100 < e.shellSuspendCounter)
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
              throw e = t.reason, Nr(e), e;
          }
          throw Xs = t, Fp = !0, cm;
      }
    }
    function Ka(e) {
      try {
        return sT(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Xs = t, Fp = !0, cm) : t;
      }
    }
    function Lc() {
      if (Xs === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Xs;
      return Xs = null, Fp = !1, e;
    }
    function Nr(e) {
      if (e === cm || e === hv)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function hl(e) {
      var t = tt;
      return e != null && (tt = t === null ? e : t.concat(e)), t;
    }
    function za() {
      var e = tt;
      if (e != null) {
        for (var t = e.length - 1; 0 <= t; t--)
          if (e[t].name != null) {
            var a = e[t].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function ma(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Gi(e, a.mode, 0), t._debugInfo = tt, t.return = a), re(
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
    function Ln(e) {
      var t = Ip;
      return Ip += 1, om === null && (om = Ud()), Ja(om, e, t);
    }
    function Da(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Xn(e, t) {
      throw t.$$typeof === Lg ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function bn(e, t) {
      var a = za();
      a !== null ? a.run(
        Xn.bind(null, e, t)
      ) : Xn(e, t);
    }
    function ly(e, t) {
      var a = he(e) || "Component";
      Sb[a] || (Sb[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
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
    function Io(e, t) {
      var a = za();
      a !== null ? a.run(
        ly.bind(null, e, t)
      ) : ly(e, t);
    }
    function Hd(e, t) {
      var a = he(e) || "Component";
      bb[a] || (bb[a] = !0, t = String(t), e.tag === 3 ? console.error(
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
    function xr(e, t) {
      var a = za();
      a !== null ? a.run(
        Hd.bind(null, e, t)
      ) : Hd(e, t);
    }
    function Bl(e) {
      function t(E, O) {
        if (e) {
          var _ = E.deletions;
          _ === null ? (E.deletions = [O], E.flags |= 16) : _.push(O);
        }
      }
      function a(E, O) {
        if (!e) return null;
        for (; O !== null; )
          t(E, O), O = O.sibling;
        return null;
      }
      function i(E) {
        for (var O = /* @__PURE__ */ new Map(); E !== null; )
          E.key !== null ? O.set(E.key, E) : O.set(E.index, E), E = E.sibling;
        return O;
      }
      function o(E, O) {
        return E = gu(E, O), E.index = 0, E.sibling = null, E;
      }
      function f(E, O, _) {
        return E.index = _, e ? (_ = E.alternate, _ !== null ? (_ = _.index, _ < O ? (E.flags |= 67108866, O) : _) : (E.flags |= 67108866, O)) : (E.flags |= 1048576, O);
      }
      function d(E) {
        return e && E.alternate === null && (E.flags |= 67108866), E;
      }
      function h(E, O, _, K) {
        return O === null || O.tag !== 6 ? (O = Ko(
          _,
          E.mode,
          K
        ), O.return = E, O._debugOwner = E, O._debugTask = E._debugTask, O._debugInfo = tt, O) : (O = o(O, _), O.return = E, O._debugInfo = tt, O);
      }
      function y(E, O, _, K) {
        var fe = _.type;
        return fe === Nf ? (O = D(
          E,
          O,
          _.props.children,
          K,
          _.key
        ), ma(_, O, E), O) : O !== null && (O.elementType === fe || Zm(O, _) || typeof fe == "object" && fe !== null && fe.$$typeof === ua && Ka(fe) === O.type) ? (O = o(O, _.props), Da(O, _), O.return = E, O._debugOwner = _._owner, O._debugInfo = tt, O) : (O = Gi(_, E.mode, K), Da(O, _), O.return = E, O._debugInfo = tt, O);
      }
      function p(E, O, _, K) {
        return O === null || O.tag !== 4 || O.stateNode.containerInfo !== _.containerInfo || O.stateNode.implementation !== _.implementation ? (O = Od(_, E.mode, K), O.return = E, O._debugInfo = tt, O) : (O = o(O, _.children || []), O.return = E, O._debugInfo = tt, O);
      }
      function D(E, O, _, K, fe) {
        return O === null || O.tag !== 7 ? (O = Bc(
          _,
          E.mode,
          K,
          fe
        ), O.return = E, O._debugOwner = E, O._debugTask = E._debugTask, O._debugInfo = tt, O) : (O = o(O, _), O.return = E, O._debugInfo = tt, O);
      }
      function U(E, O, _) {
        if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
          return O = Ko(
            "" + O,
            E.mode,
            _
          ), O.return = E, O._debugOwner = E, O._debugTask = E._debugTask, O._debugInfo = tt, O;
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Rn:
              return _ = Gi(
                O,
                E.mode,
                _
              ), Da(_, O), _.return = E, E = hl(O._debugInfo), _._debugInfo = tt, tt = E, _;
            case dc:
              return O = Od(
                O,
                E.mode,
                _
              ), O.return = E, O._debugInfo = tt, O;
            case ua:
              var K = hl(O._debugInfo);
              return O = Ka(O), E = U(E, O, _), tt = K, E;
          }
          if (Tl(O) || Ce(O))
            return _ = Bc(
              O,
              E.mode,
              _,
              null
            ), _.return = E, _._debugOwner = E, _._debugTask = E._debugTask, E = hl(O._debugInfo), _._debugInfo = tt, tt = E, _;
          if (typeof O.then == "function")
            return K = hl(O._debugInfo), E = U(
              E,
              Ln(O),
              _
            ), tt = K, E;
          if (O.$$typeof === eu)
            return U(
              E,
              Cr(E, O),
              _
            );
          bn(E, O);
        }
        return typeof O == "function" && Io(E, O), typeof O == "symbol" && xr(E, O), null;
      }
      function A(E, O, _, K) {
        var fe = O !== null ? O.key : null;
        if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
          return fe !== null ? null : h(E, O, "" + _, K);
        if (typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case Rn:
              return _.key === fe ? (fe = hl(_._debugInfo), E = y(
                E,
                O,
                _,
                K
              ), tt = fe, E) : null;
            case dc:
              return _.key === fe ? p(E, O, _, K) : null;
            case ua:
              return fe = hl(_._debugInfo), _ = Ka(_), E = A(
                E,
                O,
                _,
                K
              ), tt = fe, E;
          }
          if (Tl(_) || Ce(_))
            return fe !== null ? null : (fe = hl(_._debugInfo), E = D(
              E,
              O,
              _,
              K,
              null
            ), tt = fe, E);
          if (typeof _.then == "function")
            return fe = hl(_._debugInfo), E = A(
              E,
              O,
              Ln(_),
              K
            ), tt = fe, E;
          if (_.$$typeof === eu)
            return A(
              E,
              O,
              Cr(E, _),
              K
            );
          bn(E, _);
        }
        return typeof _ == "function" && Io(E, _), typeof _ == "symbol" && xr(E, _), null;
      }
      function G(E, O, _, K, fe) {
        if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
          return E = E.get(_) || null, h(O, E, "" + K, fe);
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case Rn:
              return _ = E.get(
                K.key === null ? _ : K.key
              ) || null, E = hl(K._debugInfo), O = y(
                O,
                _,
                K,
                fe
              ), tt = E, O;
            case dc:
              return E = E.get(
                K.key === null ? _ : K.key
              ) || null, p(O, E, K, fe);
            case ua:
              var Le = hl(K._debugInfo);
              return K = Ka(K), O = G(
                E,
                O,
                _,
                K,
                fe
              ), tt = Le, O;
          }
          if (Tl(K) || Ce(K))
            return _ = E.get(_) || null, E = hl(K._debugInfo), O = D(
              O,
              _,
              K,
              fe,
              null
            ), tt = E, O;
          if (typeof K.then == "function")
            return Le = hl(K._debugInfo), O = G(
              E,
              O,
              _,
              Ln(K),
              fe
            ), tt = Le, O;
          if (K.$$typeof === eu)
            return G(
              E,
              O,
              _,
              Cr(O, K),
              fe
            );
          bn(O, K);
        }
        return typeof K == "function" && Io(O, K), typeof K == "symbol" && xr(O, K), null;
      }
      function ce(E, O, _, K) {
        if (typeof _ != "object" || _ === null) return K;
        switch (_.$$typeof) {
          case Rn:
          case dc:
            Se(E, O, _);
            var fe = _.key;
            if (typeof fe != "string") break;
            if (K === null) {
              K = /* @__PURE__ */ new Set(), K.add(fe);
              break;
            }
            if (!K.has(fe)) {
              K.add(fe);
              break;
            }
            re(O, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                fe
              );
            });
            break;
          case ua:
            _ = Ka(_), ce(E, O, _, K);
        }
        return K;
      }
      function se(E, O, _, K) {
        for (var fe = null, Le = null, _e = null, Ae = O, Fe = O = 0, ll = null; Ae !== null && Fe < _.length; Fe++) {
          Ae.index > Fe ? (ll = Ae, Ae = null) : ll = Ae.sibling;
          var Ul = A(
            E,
            Ae,
            _[Fe],
            K
          );
          if (Ul === null) {
            Ae === null && (Ae = ll);
            break;
          }
          fe = ce(
            E,
            Ul,
            _[Fe],
            fe
          ), e && Ae && Ul.alternate === null && t(E, Ae), O = f(Ul, O, Fe), _e === null ? Le = Ul : _e.sibling = Ul, _e = Ul, Ae = ll;
        }
        if (Fe === _.length)
          return a(E, Ae), st && Yn(E, Fe), Le;
        if (Ae === null) {
          for (; Fe < _.length; Fe++)
            Ae = U(E, _[Fe], K), Ae !== null && (fe = ce(
              E,
              Ae,
              _[Fe],
              fe
            ), O = f(
              Ae,
              O,
              Fe
            ), _e === null ? Le = Ae : _e.sibling = Ae, _e = Ae);
          return st && Yn(E, Fe), Le;
        }
        for (Ae = i(Ae); Fe < _.length; Fe++)
          ll = G(
            Ae,
            E,
            Fe,
            _[Fe],
            K
          ), ll !== null && (fe = ce(
            E,
            ll,
            _[Fe],
            fe
          ), e && ll.alternate !== null && Ae.delete(
            ll.key === null ? Fe : ll.key
          ), O = f(
            ll,
            O,
            Fe
          ), _e === null ? Le = ll : _e.sibling = ll, _e = ll);
        return e && Ae.forEach(function(Ho) {
          return t(E, Ho);
        }), st && Yn(E, Fe), Le;
      }
      function kt(E, O, _, K) {
        if (_ == null)
          throw Error("An iterable object provided no iterator.");
        for (var fe = null, Le = null, _e = O, Ae = O = 0, Fe = null, ll = null, Ul = _.next(); _e !== null && !Ul.done; Ae++, Ul = _.next()) {
          _e.index > Ae ? (Fe = _e, _e = null) : Fe = _e.sibling;
          var Ho = A(E, _e, Ul.value, K);
          if (Ho === null) {
            _e === null && (_e = Fe);
            break;
          }
          ll = ce(
            E,
            Ho,
            Ul.value,
            ll
          ), e && _e && Ho.alternate === null && t(E, _e), O = f(Ho, O, Ae), Le === null ? fe = Ho : Le.sibling = Ho, Le = Ho, _e = Fe;
        }
        if (Ul.done)
          return a(E, _e), st && Yn(E, Ae), fe;
        if (_e === null) {
          for (; !Ul.done; Ae++, Ul = _.next())
            _e = U(E, Ul.value, K), _e !== null && (ll = ce(
              E,
              _e,
              Ul.value,
              ll
            ), O = f(
              _e,
              O,
              Ae
            ), Le === null ? fe = _e : Le.sibling = _e, Le = _e);
          return st && Yn(E, Ae), fe;
        }
        for (_e = i(_e); !Ul.done; Ae++, Ul = _.next())
          Fe = G(
            _e,
            E,
            Ae,
            Ul.value,
            K
          ), Fe !== null && (ll = ce(
            E,
            Fe,
            Ul.value,
            ll
          ), e && Fe.alternate !== null && _e.delete(
            Fe.key === null ? Ae : Fe.key
          ), O = f(
            Fe,
            O,
            Ae
          ), Le === null ? fe = Fe : Le.sibling = Fe, Le = Fe);
        return e && _e.forEach(function(BT) {
          return t(E, BT);
        }), st && Yn(E, Ae), fe;
      }
      function ht(E, O, _, K) {
        if (typeof _ == "object" && _ !== null && _.type === Nf && _.key === null && (ma(_, null, E), _ = _.props.children), typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case Rn:
              var fe = hl(_._debugInfo);
              e: {
                for (var Le = _.key; O !== null; ) {
                  if (O.key === Le) {
                    if (Le = _.type, Le === Nf) {
                      if (O.tag === 7) {
                        a(
                          E,
                          O.sibling
                        ), K = o(
                          O,
                          _.props.children
                        ), K.return = E, K._debugOwner = _._owner, K._debugInfo = tt, ma(_, K, E), E = K;
                        break e;
                      }
                    } else if (O.elementType === Le || Zm(
                      O,
                      _
                    ) || typeof Le == "object" && Le !== null && Le.$$typeof === ua && Ka(Le) === O.type) {
                      a(
                        E,
                        O.sibling
                      ), K = o(O, _.props), Da(K, _), K.return = E, K._debugOwner = _._owner, K._debugInfo = tt, E = K;
                      break e;
                    }
                    a(E, O);
                    break;
                  } else t(E, O);
                  O = O.sibling;
                }
                _.type === Nf ? (K = Bc(
                  _.props.children,
                  E.mode,
                  K,
                  _.key
                ), K.return = E, K._debugOwner = E, K._debugTask = E._debugTask, K._debugInfo = tt, ma(_, K, E), E = K) : (K = Gi(
                  _,
                  E.mode,
                  K
                ), Da(K, _), K.return = E, K._debugInfo = tt, E = K);
              }
              return E = d(E), tt = fe, E;
            case dc:
              e: {
                for (fe = _, _ = fe.key; O !== null; ) {
                  if (O.key === _)
                    if (O.tag === 4 && O.stateNode.containerInfo === fe.containerInfo && O.stateNode.implementation === fe.implementation) {
                      a(
                        E,
                        O.sibling
                      ), K = o(
                        O,
                        fe.children || []
                      ), K.return = E, E = K;
                      break e;
                    } else {
                      a(E, O);
                      break;
                    }
                  else t(E, O);
                  O = O.sibling;
                }
                K = Od(
                  fe,
                  E.mode,
                  K
                ), K.return = E, E = K;
              }
              return d(E);
            case ua:
              return fe = hl(_._debugInfo), _ = Ka(_), E = ht(
                E,
                O,
                _,
                K
              ), tt = fe, E;
          }
          if (Tl(_))
            return fe = hl(_._debugInfo), E = se(
              E,
              O,
              _,
              K
            ), tt = fe, E;
          if (Ce(_)) {
            if (fe = hl(_._debugInfo), Le = Ce(_), typeof Le != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var _e = Le.call(_);
            return _e === _ ? (E.tag !== 0 || Object.prototype.toString.call(E.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(_e) !== "[object Generator]") && (gb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), gb = !0) : _.entries !== Le || G1 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), G1 = !0), E = kt(
              E,
              O,
              _e,
              K
            ), tt = fe, E;
          }
          if (typeof _.then == "function")
            return fe = hl(_._debugInfo), E = ht(
              E,
              O,
              Ln(_),
              K
            ), tt = fe, E;
          if (_.$$typeof === eu)
            return ht(
              E,
              O,
              Cr(E, _),
              K
            );
          bn(E, _);
        }
        return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (fe = "" + _, O !== null && O.tag === 6 ? (a(
          E,
          O.sibling
        ), K = o(O, fe), K.return = E, E = K) : (a(E, O), K = Ko(
          fe,
          E.mode,
          K
        ), K.return = E, K._debugOwner = E, K._debugTask = E._debugTask, K._debugInfo = tt, E = K), d(E)) : (typeof _ == "function" && Io(E, _), typeof _ == "symbol" && xr(E, _), a(E, O));
      }
      return function(E, O, _, K) {
        var fe = tt;
        tt = null;
        try {
          Ip = 0;
          var Le = ht(
            E,
            O,
            _,
            K
          );
          return om = null, Le;
        } catch (ll) {
          if (ll === cm || ll === hv) throw ll;
          var _e = z(29, ll, null, E.mode);
          _e.lanes = K, _e.return = E;
          var Ae = _e._debugInfo = tt;
          if (_e._debugOwner = E._debugOwner, _e._debugTask = E._debugTask, Ae != null) {
            for (var Fe = Ae.length - 1; 0 <= Fe; Fe--)
              if (typeof Ae[Fe].stack == "string") {
                _e._debugOwner = Ae[Fe], _e._debugTask = Ae[Fe].debugTask;
                break;
              }
          }
          return _e;
        } finally {
          tt = fe;
        }
      };
    }
    function wt(e, t) {
      var a = Tl(e);
      return e = !a && typeof Ce(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function ft(e) {
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
    function Rl(e) {
      return {
        lane: e,
        tag: Tb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Eu(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, X1 === i && !Rb) {
        var o = he(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), Rb = !0;
      }
      return (pt & Pl) !== fa ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = zr(e), Vm(e, null, a), t) : (Jo(e, i, t, a), zr(e));
    }
    function En(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, pr(e, a);
      }
    }
    function Br(e, t) {
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
    function Po() {
      if (Q1) {
        var e = im;
        if (e !== null) throw e;
      }
    }
    function Tu(e, t, a, i) {
      Q1 = !1;
      var o = e.updateQueue;
      er = !1, X1 = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var D = e.alternate;
        D !== null && (D = D.updateQueue, h = D.lastBaseUpdate, h !== d && (h === null ? D.firstBaseUpdate = p : h.next = p, D.lastBaseUpdate = y));
      }
      if (f !== null) {
        var U = o.baseState;
        d = 0, D = p = y = null, h = f;
        do {
          var A = h.lane & -536870913, G = A !== h.lane;
          if (G ? (lt & A) === A : (i & A) === A) {
            A !== 0 && A === ws && (Q1 = !0), D !== null && (D = D.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              A = e;
              var ce = h, se = t, kt = a;
              switch (ce.tag) {
                case Ab:
                  if (ce = ce.payload, typeof ce == "function") {
                    nm = !0;
                    var ht = ce.call(
                      kt,
                      U,
                      se
                    );
                    if (A.mode & Ba) {
                      me(!0);
                      try {
                        ce.call(kt, U, se);
                      } finally {
                        me(!1);
                      }
                    }
                    nm = !1, U = ht;
                    break e;
                  }
                  U = ce;
                  break e;
                case L1:
                  A.flags = A.flags & -65537 | 128;
                case Tb:
                  if (ht = ce.payload, typeof ht == "function") {
                    if (nm = !0, ce = ht.call(
                      kt,
                      U,
                      se
                    ), A.mode & Ba) {
                      me(!0);
                      try {
                        ht.call(kt, U, se);
                      } finally {
                        me(!1);
                      }
                    }
                    nm = !1;
                  } else ce = ht;
                  if (ce == null) break e;
                  U = Pe({}, U, ce);
                  break e;
                case Ob:
                  er = !0;
              }
            }
            A = h.callback, A !== null && (e.flags |= 64, G && (e.flags |= 8192), G = o.callbacks, G === null ? o.callbacks = [A] : G.push(A));
          } else
            G = {
              lane: A,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, D === null ? (p = D = G, y = U) : D = D.next = G, d |= A;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            G = h, h = G.next, G.next = null, o.lastBaseUpdate = G, o.shared.pending = null;
          }
        } while (!0);
        D === null && (y = U), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = D, f === null && (o.shared.lanes = 0), ar |= d, e.lanes = d, e.memoizedState = U;
      }
      X1 = null;
    }
    function Zi(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function ay(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Zi(a[e], t);
    }
    function ef(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Zi(a[e], t);
    }
    function Nd(e, t) {
      var a = bc;
      Xe(yv, a, e), Xe(fm, t, e), bc = a | t.baseLanes;
    }
    function oi(e) {
      Xe(yv, bc, e), Xe(
        fm,
        fm.current,
        e
      );
    }
    function Qn(e) {
      bc = yv.current, be(fm, e), be(yv, e);
    }
    function ya(e) {
      var t = e.alternate;
      Xe(
        Cl,
        Cl.current & rm,
        e
      ), Xe(nu, e, e), Wu === null && (t === null || fm.current !== null || t.memoizedState !== null) && (Wu = e);
    }
    function Vn(e) {
      Xe(Cl, Cl.current, e), Xe(nu, e, e), Wu === null && (Wu = e);
    }
    function xd(e) {
      e.tag === 22 ? (Xe(Cl, Cl.current, e), Xe(nu, e, e), Wu === null && (Wu = e)) : Au(e);
    }
    function Au(e) {
      Xe(Cl, Cl.current, e), Xe(
        nu,
        nu.current,
        e
      );
    }
    function jl(e) {
      be(nu, e), Wu === e && (Wu = null), be(Cl, e);
    }
    function Xc(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || gs(a) || ep(a)))
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
    function we() {
      var e = L;
      Iu === null ? Iu = [e] : Iu.push(e);
    }
    function W() {
      var e = L;
      if (Iu !== null && (zo++, Iu[zo] !== e)) {
        var t = he(Ge);
        if (!_b.has(t) && (_b.add(t), Iu !== null)) {
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
    function jr() {
      var e = he(Ge);
      Db.has(e) || (Db.add(e), console.error(
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
    function ny(e, t) {
      if (t0) return !1;
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
        if (!cn(e[a], t[a])) return !1;
      return !0;
    }
    function uy(e, t, a, i, o, f) {
      Ro = f, Ge = t, Iu = e !== null ? e._debugHookTypes : null, zo = -1, t0 = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = he(Ge), V1.has(f) || (V1.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, X.H = e !== null && e.memoizedState !== null ? J1 : Iu !== null ? Mb : Z1, Vs = f = (t.mode & Ba) !== qe;
      var d = q1(a, i, o);
      if (Vs = !1, dm && (d = qr(
        t,
        a,
        i,
        o
      )), f) {
        me(!0);
        try {
          d = qr(
            t,
            a,
            i,
            o
          );
        } finally {
          me(!1);
        }
      }
      return ml(e, t), d;
    }
    function ml(e, t) {
      t._debugHookTypes = Iu, t.dependencies === null ? _o !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: _o
      }) : t.dependencies._debugThenableState = _o, X.H = l0;
      var a = Xt !== null && Xt.next !== null;
      if (Ro = 0, Iu = L = Ql = Xt = Ge = null, zo = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), gv = !1, e0 = 0, _o = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Vl || (e = e.dependencies, e !== null && ko(e) && (Vl = !0)), Fp ? (Fp = !1, e = !0) : e = !1, e && (t = he(t) || "Unknown", zb.has(t) || V1.has(t) || (zb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function qr(e, t, a, i) {
      Ge = e;
      var o = 0;
      do {
        if (dm && (_o = null), e0 = 0, dm = !1, o >= hT)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, t0 = !1, Ql = Xt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        zo = -1, X.H = Cb, f = q1(t, a, i);
      } while (dm);
      return f;
    }
    function Yr() {
      var e = X.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Lr(t) : t, e = e.useState()[0], (Xt !== null ? Xt.memoizedState : null) !== e && (Ge.flags |= 1024), t;
    }
    function Qc() {
      var e = vv !== 0;
      return vv = 0, e;
    }
    function wr(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Oi) !== qe ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Ji(e) {
      if (gv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        gv = !1;
      }
      Ro = 0, Iu = Ql = Xt = Ge = null, zo = -1, L = null, dm = !1, e0 = vv = 0, _o = null;
    }
    function bl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Ql === null ? Ge.memoizedState = Ql = e : Ql = Ql.next = e, Ql;
    }
    function _t() {
      if (Xt === null) {
        var e = Ge.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Xt.next;
      var t = Ql === null ? Ge.memoizedState : Ql.next;
      if (t !== null)
        Ql = t, Xt = e;
      else {
        if (e === null)
          throw Ge.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Xt = e, e = {
          memoizedState: Xt.memoizedState,
          baseState: Xt.baseState,
          baseQueue: Xt.baseQueue,
          queue: Xt.queue,
          next: null
        }, Ql === null ? Ge.memoizedState = Ql = e : Ql = Ql.next = e;
      }
      return Ql;
    }
    function Gr() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Lr(e) {
      var t = e0;
      return e0 += 1, _o === null && (_o = Ud()), e = Ja(_o, e, t), t = Ge, (Ql === null ? t.memoizedState : Ql.next) === null && (t = t.alternate, X.H = t !== null && t.memoizedState !== null ? J1 : Z1), e;
    }
    function ri(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Lr(e);
        if (e.$$typeof === eu) return Tt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function $a(e) {
      var t = null, a = Ge.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Ge.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = Gr(), Ge.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || t0)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = r1;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function ka(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function tf(e, t, a) {
      var i = bl();
      if (a !== void 0) {
        var o = a(t);
        if (Vs) {
          me(!0);
          try {
            a(t);
          } finally {
            me(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = u1.bind(
        null,
        Ge,
        e
      ), [i.memoizedState, e];
    }
    function Vc(e) {
      var t = _t();
      return Ki(t, Xt, e);
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
        var h = d = null, y = null, p = t, D = !1;
        do {
          var U = p.lane & -536870913;
          if (U !== p.lane ? (lt & U) === U : (Ro & U) === U) {
            var A = p.revertLane;
            if (A === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), U === ws && (D = !0);
            else if ((Ro & A) === A) {
              p = p.next, A === ws && (D = !0);
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
              }, y === null ? (h = y = U, d = f) : y = y.next = U, Ge.lanes |= A, ar |= A;
            U = p.action, Vs && a(f, U), f = p.hasEagerState ? p.eagerState : a(f, U);
          } else
            A = {
              lane: U,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = A, d = f) : y = y.next = A, Ge.lanes |= U, ar |= U;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !cn(f, e.memoizedState) && (Vl = !0, D && (a = im, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Zc(e) {
      var t = _t(), a = t.queue;
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
        cn(f, t.memoizedState) || (Vl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function lf(e, t, a) {
      var i = Ge, o = bl();
      if (st) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        sm || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), sm = !0);
      } else {
        if (f = t(), sm || (a = t(), cn(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), sm = !0)), Qt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (lt & 127) !== 0 || iy(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, $c(
        $i.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Ou(
        Fu | rn,
        { destroy: void 0 },
        cy.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Jc(e, t, a) {
      var i = Ge, o = _t(), f = st;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !sm) {
        var d = t();
        cn(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), sm = !0);
      }
      (d = !cn(
        (Xt || o).memoizedState,
        a
      )) && (o.memoizedState = a, Vl = !0), o = o.queue;
      var h = $i.bind(null, i, o, e);
      if (_l(2048, rn, h, [e]), o.getSnapshot !== t || d || Ql !== null && Ql.memoizedState.tag & Fu) {
        if (i.flags |= 2048, Ou(
          Fu | rn,
          { destroy: void 0 },
          cy.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), Qt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (Ro & 127) !== 0 || iy(i, t, a);
      }
      return a;
    }
    function iy(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Ge.updateQueue, t === null ? (t = Gr(), Ge.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function cy(e, t, a, i) {
      t.value = a, t.getSnapshot = i, ki(t) && oy(e);
    }
    function $i(e, t, a) {
      return a(function() {
        ki(t) && (vu(2, "updateSyncExternalStore()", e), oy(e));
      });
    }
    function ki(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !cn(e, a);
      } catch {
        return !0;
      }
    }
    function oy(e) {
      var t = la(e, 2);
      t !== null && Ye(t, e, 2);
    }
    function Bd(e) {
      var t = bl();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Vs) {
          me(!0);
          try {
            a();
          } finally {
            me(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ka,
        lastRenderedState: e
      }, t;
    }
    function Wi(e) {
      e = Bd(e);
      var t = e.queue, a = Ld.bind(null, Ge, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Kc(e) {
      var t = bl();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = $r.bind(
        null,
        Ge,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function Xr(e, t) {
      var a = _t();
      return af(a, Xt, e, t);
    }
    function af(e, t, a, i) {
      return e.baseState = a, Ki(
        e,
        Xt,
        typeof i == "function" ? i : ka
      );
    }
    function Qr(e, t) {
      var a = _t();
      return Xt !== null ? af(a, Xt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function J0(e, t, a, i, o) {
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
        X.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, Fi(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function Fi(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = X.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), X.T = d;
        try {
          var h = a(o, i), y = X.S;
          y !== null && y(d, h), fy(e, t, h);
        } catch (p) {
          Vr(e, t, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), X.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), fy(e, t, d);
        } catch (p) {
          Vr(e, t, p);
        }
    }
    function fy(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (X.asyncTransitions++, a.then(kc, kc), a.then(
        function(i) {
          si(e, t, i);
        },
        function(i) {
          return Vr(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : si(e, t, a);
    }
    function si(e, t, a) {
      t.status = "fulfilled", t.value = a, jd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Fi(e, a)));
    }
    function Vr(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, jd(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function jd(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function di(e, t) {
      return t;
    }
    function Wa(e, t) {
      if (st) {
        var a = Qt.formState;
        if (a !== null) {
          e: {
            var i = Ge;
            if (st) {
              if (tl) {
                t: {
                  for (var o = tl, f = $u; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = ln(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === yS || f === yE ? o : null;
                }
                if (o) {
                  tl = ln(
                    o.nextSibling
                  ), i = o.data === yS;
                  break e;
                }
              }
              pn(i);
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
      }, a.queue = i, a = Ld.bind(
        null,
        Ge,
        i
      ), i.dispatch = a, i = Bd(!1), f = $r.bind(
        null,
        Ge,
        !1,
        i.queue
      ), i = bl(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = J0.bind(
        null,
        Ge,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function Ii(e) {
      var t = _t();
      return qd(t, Xt, e);
    }
    function qd(e, t, a) {
      if (t = Ki(
        e,
        t,
        di
      )[0], e = Vc(ka)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Lr(t);
        } catch (d) {
          throw d === cm ? hv : d;
        }
      else i = t;
      t = _t();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Ge.flags |= 2048, Ou(
        Fu | rn,
        { destroy: void 0 },
        ry.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function ry(e, t) {
      e.action = t;
    }
    function Pi(e) {
      var t = _t(), a = Xt;
      if (a !== null)
        return qd(t, a, e);
      _t(), t = t.memoizedState, a = _t();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Ou(e, t, a, i) {
      return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = Ge.updateQueue, t === null && (t = Gr(), Ge.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Yd(e) {
      var t = bl();
      return e = { current: e }, t.memoizedState = e;
    }
    function ec(e, t, a, i) {
      var o = bl();
      Ge.flags |= e, o.memoizedState = Ou(
        Fu | t,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function _l(e, t, a, i) {
      var o = _t();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Xt !== null && i !== null && ny(i, Xt.memoizedState.deps) ? o.memoizedState = Ou(t, f, a, i) : (Ge.flags |= e, o.memoizedState = Ou(
        Fu | t,
        f,
        a,
        i
      ));
    }
    function $c(e, t) {
      (Ge.mode & Oi) !== qe ? ec(276826112, rn, e, t) : ec(8390656, rn, e, t);
    }
    function K0(e) {
      Ge.flags |= 4;
      var t = Ge.updateQueue;
      if (t === null)
        t = Gr(), Ge.updateQueue = t, t.events = [e];
      else {
        var a = t.events;
        a === null ? t.events = [e] : a.push(e);
      }
    }
    function Zr(e) {
      var t = bl(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((pt & Pl) !== fa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function nf(e) {
      var t = _t().memoizedState;
      return K0({ ref: t, nextImpl: e }), function() {
        if ((pt & Pl) !== fa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function pa(e, t) {
      var a = 4194308;
      return (Ge.mode & Oi) !== qe && (a |= 134217728), ec(a, uu, e, t);
    }
    function Fa(e, t) {
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
      (Ge.mode & Oi) !== qe && (i |= 134217728), ec(
        i,
        uu,
        Fa.bind(null, t, e),
        a
      );
    }
    function uf(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, _l(
        4,
        uu,
        Fa.bind(null, t, e),
        a
      );
    }
    function wd(e, t) {
      return bl().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Zn(e, t) {
      var a = _t();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && ny(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function ga(e, t) {
      var a = bl();
      t = t === void 0 ? null : t;
      var i = e();
      if (Vs) {
        me(!0);
        try {
          e();
        } finally {
          me(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Ft(e, t) {
      var a = _t();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && ny(t, i[1]))
        return i[0];
      if (i = e(), Vs) {
        me(!0);
        try {
          e();
        } finally {
          me(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function cf(e, t) {
      var a = bl();
      return zt(a, e, t);
    }
    function _u(e, t) {
      var a = _t();
      return yl(
        a,
        Xt.memoizedState,
        e,
        t
      );
    }
    function Ke(e, t) {
      var a = _t();
      return Xt === null ? zt(a, e, t) : yl(
        a,
        Xt.memoizedState,
        e,
        t
      );
    }
    function zt(e, t, a) {
      return a === void 0 || (Ro & 1073741824) !== 0 && (lt & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = yf(), Ge.lanes |= e, ar |= e, a);
    }
    function yl(e, t, a, i) {
      return cn(a, t) ? a : fm.current !== null ? (e = zt(e, a, i), cn(e, t) || (Vl = !0), e) : (Ro & 42) === 0 || (Ro & 1073741824) !== 0 && (lt & 261930) === 0 ? (Vl = !0, e.memoizedState = a) : (e = yf(), Ge.lanes |= e, ar |= e, t);
    }
    function kc() {
      X.asyncTransitions--;
    }
    function Wc(e, t, a, i, o) {
      var f = Ot.p;
      Ot.p = f !== 0 && f < Fl ? f : Fl;
      var d = X.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), X.T = h, $r(e, !1, t, a);
      try {
        var y = o(), p = X.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          X.asyncTransitions++, y.then(kc, kc);
          var D = Cd(
            y,
            i
          );
          Fc(
            e,
            t,
            D,
            na(e)
          );
        } else
          Fc(
            e,
            t,
            i,
            na(e)
          );
      } catch (U) {
        Fc(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: U },
          na(e)
        );
      } finally {
        Ot.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), X.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function hi(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Jr(e).queue;
      V0(e), Wc(
        e,
        o,
        t,
        td,
        a === null ? V : function() {
          return of(e), a(i);
        }
      );
    }
    function Jr(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: td,
        baseState: td,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ka,
          lastRenderedState: td
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
          lastRenderedReducer: ka,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function of(e) {
      X.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Jr(e);
      t.next === null && (t = e.alternate.memoizedState), Fc(
        e,
        t.next.queue,
        {},
        na(e)
      );
    }
    function tc() {
      var e = Bd(!1);
      return e = Wc.bind(
        null,
        Ge,
        e.queue,
        !0,
        !1
      ), bl().memoizedState = e, [!1, e];
    }
    function $0() {
      var e = Vc(ka)[0], t = _t().memoizedState;
      return [
        typeof e == "boolean" ? e : Lr(e),
        t
      ];
    }
    function al() {
      var e = Zc(ka)[0], t = _t().memoizedState;
      return [
        typeof e == "boolean" ? e : Lr(e),
        t
      ];
    }
    function mi() {
      return Tt(g0);
    }
    function Kr() {
      var e = bl(), t = Qt.identifierPrefix;
      if (st) {
        var a = bo, i = So;
        a = (i & ~(1 << 32 - Wl(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = vv++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = dT++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Gd() {
      return bl().memoizedState = k0.bind(
        null,
        Ge
      );
    }
    function k0(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = na(a), o = Rl(i), f = Eu(a, o, i);
            f !== null && (vu(i, "refresh()", e), Ye(f, a, i), En(f, a, i)), e = Dd(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: e };
            return;
        }
        a = a.return;
      }
    }
    function u1(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = na(e);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      ql(e) ? rl(t, o) : (o = Hc(e, t, o, i), o !== null && (vu(i, "dispatch()", e), Ye(o, e, i), kr(o, t, i)));
    }
    function Ld(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = na(e), Fc(e, t, a, i) && vu(i, "setState()", e);
    }
    function Fc(e, t, a, i) {
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
          var d = X.H;
          X.H = _i;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, cn(y, h))
              return Jo(e, t, o, 0), Qt === null && Td(), !1;
          } catch {
          } finally {
            X.H = d;
          }
        }
        if (a = Hc(e, t, o, i), a !== null)
          return Ye(a, e, i), kr(a, t, i), !0;
      }
      return !1;
    }
    function $r(e, t, a, i) {
      if (X.T === null && ws === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Fy(),
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
        t = Hc(
          e,
          a,
          i,
          2
        ), t !== null && (vu(2, "setOptimistic()", e), Ye(t, e, 2));
    }
    function ql(e) {
      var t = e.alternate;
      return e === Ge || t !== null && t === Ge;
    }
    function rl(e, t) {
      dm = gv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function kr(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, pr(e, a);
      }
    }
    function Ic(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Lb.has(t) || (Lb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function ff(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & Ba) {
        me(!0);
        try {
          f = a(i, o);
        } finally {
          me(!1);
        }
      }
      f === void 0 && (t = Qe(t) || "Component", qb.has(t) || (qb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Pe({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Xd(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & Ba) {
          me(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            me(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Qe(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Zo(a, i) || !Zo(o, f) : !0;
    }
    function zu(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = he(e) || "Component", Hb.has(e) || (Hb.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), K1.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Du(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = Pe({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function Qd(e) {
      O1(e), console.warn(
        `%s

%s
`,
        hm ? "An error occurred in the <" + hm + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Vd(e) {
      var t = hm ? "The above error occurred in the <" + hm + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + (($1 || "Anonymous") + ".");
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
          AE + " " + e[0],
          OE,
          Qv + i + Qv,
          RE
        ) : e.splice(
          0,
          0,
          AE,
          OE,
          Qv + i + Qv,
          RE
        ), e.unshift(console), i = NT.apply(console.error, e), i();
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
    function sy(e) {
      O1(e);
    }
    function Wr(e, t) {
      try {
        hm = t.source ? he(t.source) : null, $1 = null;
        var a = t.value;
        if (X.actQueue !== null)
          X.thrownErrors.push(a);
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
    function dy(e, t, a) {
      try {
        hm = a.source ? he(a.source) : null, $1 = he(t);
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
    function Zd(e, t, a) {
      return a = Rl(a), a.tag = L1, a.payload = { element: null }, a.callback = function() {
        re(t.source, Wr, e, t);
      }, a;
    }
    function Jd(e) {
      return e = Rl(e), e.tag = L1, e;
    }
    function Kd(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Nc(a), re(
            i.source,
            dy,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Nc(a), re(
          i.source,
          dy,
          t,
          a,
          i
        ), typeof o != "function" && (ur === null ? ur = /* @__PURE__ */ new Set([this]) : ur.add(this)), oT(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          he(a) || "Unknown"
        );
      });
    }
    function hy(e, t, a, i, o) {
      if (a.flags |= 32768, Lu && bf(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && Gn(
          t,
          a,
          o,
          !0
        ), st && (gc = !0), a = nu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return Wu === null ? gf() : a.alternate === null && dl === Mo && (dl = Ev), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === mv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), hh(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === mv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), hh(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return hh(e, i, o), gf(), !1;
      }
      if (st)
        return gc = !0, t = nu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== C1 && Mr(
          sa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== C1 && Mr(
          sa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = sa(i, a), o = Zd(
          e.stateNode,
          i,
          o
        ), Br(e, o), dl !== tr && (dl = Zs)), !1;
      var f = sa(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (o0 === null ? o0 = [f] : o0.push(f), dl !== tr && (dl = Zs), t === null) return !0;
      i = sa(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Zd(
              a.stateNode,
              i,
              e
            ), Br(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (ur === null || !ur.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Jd(o), Kd(
                o,
                e,
                a,
                i
              ), Br(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Yl(e, t, a, i) {
      t.child = e === null ? Eb(t, null, a, i) : Qs(
        t,
        e.child,
        a,
        i
      );
    }
    function W0(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return Vi(t), i = uy(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = Qc(), e !== null && !Vl ? (wr(e, t, o), Jn(e, t, o)) : (st && h && Rd(t), t.flags |= 1, Yl(e, t, i, o), t.child);
    }
    function my(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Jm(f) && f.defaultProps === void 0 && a.compare === null ? (a = wi(f), t.tag = 15, t.type = a, rf(t, f), yy(
          e,
          t,
          a,
          i,
          o
        )) : (e = xc(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !Id(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Zo, a(d, i) && e.ref === t.ref)
          return Jn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = gu(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function yy(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Zo(f, i) && e.ref === t.ref && t.type === e.type)
          if (Vl = !1, t.pendingProps = i = f, Id(e, o))
            (e.flags & 131072) !== 0 && (Vl = !0);
          else
            return t.lanes = e.lanes, Jn(e, t, o);
      }
      return Sy(
        e,
        t,
        a,
        i,
        o
      );
    }
    function py(e, t, a, i) {
      var o = i.children, f = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: qp,
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
          return gy(
            e,
            t,
            f,
            a,
            i
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Fo(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Nd(t, f) : oi(t), xd(t);
        else
          return i = t.lanes = 536870912, gy(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? (Fo(t, f.cachePool), Nd(t, f), Au(t), t.memoizedState = null) : (e !== null && Fo(t, null), oi(t), Au(t));
      return Yl(e, t, o, a), t.child;
    }
    function Pc(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: qp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function gy(e, t, a, i, o) {
      var f = ci();
      return f = f === null ? null : {
        parent: Ll._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && Fo(t, null), oi(t), xd(t), e !== null && Gn(e, t, i, !0), t.childLanes = o, null;
    }
    function Fr(e, t) {
      var a = t.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), t = Pr(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function vy(e, t, a) {
      return Qs(t, e.child, null, a), e = Fr(
        t,
        t.pendingProps
      ), e.flags |= 2, jl(t), t.memoizedState = null, e;
    }
    function F0(e, t, a) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (st) {
          if (i.mode === "hidden")
            return e = Fr(t, i), t.lanes = 536870912, Pc(null, e);
          if (Vn(t), (e = tl) ? (a = Mt(
            e,
            $u
          ), a = a !== null && a.data === Fs ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: L0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = $m(a), i.return = t, t.child = i, _a = t, tl = null)) : a = null, a === null)
            throw aa(t, e), pn(t);
          return t.lanes = 536870912, null;
        }
        return Fr(t, i);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Vn(t), o)
          if (t.flags & 256)
            t.flags &= -257, t = vy(
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
        else if (Q0(), (a & 536870912) !== 0 && pf(t), Vl || Gn(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, Vl || o) {
          if (i = Qt, i !== null && (d = Ac(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, la(e, d), Ye(i, e, d), k1;
          gf(), t = vy(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, tl = ln(
            d.nextSibling
          ), _a = t, st = !0, kf = null, gc = !1, au = null, $u = !1, e !== null && X0(t, e), t = Fr(t, i), t.flags |= 4096;
        return t;
      }
      return f = e.child, i = { mode: i.mode, children: i.children }, (a & 536870912) !== 0 && (a & e.lanes) !== 0 && pf(t), e = gu(f, i), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Ir(e, t) {
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
    function Sy(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Qe(a) || "Unknown";
        Xb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Xb[f] = !0);
      }
      return t.mode & Ba && Ri.recordLegacyContextWarning(
        t,
        null
      ), e === null && (rf(t, t.type), a.contextTypes && (f = Qe(a) || "Unknown", Vb[f] || (Vb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Vi(t), a = uy(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Qc(), e !== null && !Vl ? (wr(e, t, o), Jn(e, t, o)) : (st && i && Rd(t), t.flags |= 1, Yl(e, t, a, o), t.child);
    }
    function by(e, t, a, i, o, f) {
      return Vi(t), zo = -1, t0 = e !== null && e.type !== t.type, t.updateQueue = null, a = qr(
        t,
        i,
        a,
        o
      ), ml(e, t), i = Qc(), e !== null && !Vl ? (wr(e, t, f), Jn(e, t, f)) : (st && i && Rd(t), t.flags |= 1, Yl(e, t, a, f), t.child);
    }
    function eo(e, t, a, i, o) {
      switch (pe(t)) {
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
          if (t.lanes |= h, d = Qt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Jd(h), Kd(
            h,
            d,
            t,
            sa(f, t)
          ), Br(t, h);
      }
      if (Vi(t), t.stateNode === null) {
        if (d = $f, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== eu) && !Gb.has(a) && (Gb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Bh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Qe(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = Tt(f)), f = new a(i, d), t.mode & Ba) {
          me(!0);
          try {
            f = new a(i, d);
          } finally {
            me(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = K1, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Ub, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Qe(a) || "Component", Nb.has(d) || (Nb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Qe(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Bb.has(f) || (Bb.add(f), console.error(
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
        f = t.stateNode, d = Qe(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
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
        ), a.childContextTypes && !wb.has(a) && (wb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Yb.has(a) && (Yb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Qe(a) || "A pure component"
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
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || xb.has(a) || (xb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Qe(a)
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
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, ft(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? Tt(d) : $f, f.state === i && (d = Qe(a) || "Component", jb.has(d) || (jb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & Ba && Ri.recordLegacyContextWarning(
          t,
          f
        ), Ri.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (ff(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          he(t) || "Component"
        ), K1.enqueueReplaceState(
          f,
          f.state,
          null
        )), Tu(t, i, f, o), Po(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Oi) !== qe && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var D = t.memoizedProps;
        h = Du(a, D), f.props = h;
        var U = f.context;
        y = a.contextType, d = $f, typeof y == "object" && y !== null && (d = Tt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", D = t.pendingProps !== D, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (D || U !== d) && zu(
          t,
          f,
          i,
          d
        ), er = !1;
        var A = t.memoizedState;
        f.state = A, Tu(t, i, f, o), Po(), U = t.memoizedState, D || A !== U || er ? (typeof p == "function" && (ff(
          t,
          a,
          p,
          i
        ), U = t.memoizedState), (h = er || Xd(
          t,
          a,
          h,
          i,
          A,
          U,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Oi) !== qe && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Oi) !== qe && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = U), f.props = i, f.state = U, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Oi) !== qe && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, bu(e, t), d = t.memoizedProps, y = Du(a, d), f.props = y, p = t.pendingProps, A = f.context, U = a.contextType, h = $f, typeof U == "object" && U !== null && (h = Tt(U)), D = a.getDerivedStateFromProps, (U = typeof D == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || A !== h) && zu(
          t,
          f,
          i,
          h
        ), er = !1, A = t.memoizedState, f.state = A, Tu(t, i, f, o), Po();
        var G = t.memoizedState;
        d !== p || A !== G || er || e !== null && e.dependencies !== null && ko(e.dependencies) ? (typeof D == "function" && (ff(
          t,
          a,
          D,
          i
        ), G = t.memoizedState), (y = er || Xd(
          t,
          a,
          y,
          i,
          A,
          G,
          h
        ) || e !== null && e.dependencies !== null && ko(e.dependencies)) ? (U || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, G, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          G,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = G), f.props = i, f.state = G, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Ir(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, Ci(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, on = -1;
        else if (a = cb(h), t.mode & Ba) {
          me(!0);
          try {
            cb(h);
          } finally {
            me(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = Qs(
          t,
          e.child,
          null,
          o
        ), t.child = Qs(
          t,
          null,
          a,
          o
        )) : Yl(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Jn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (mm || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        he(t) || "a component"
      ), mm = !0), e;
    }
    function Ey(e, t, a, i) {
      return Xi(), t.flags |= 256, Yl(e, t, a, i), t.child;
    }
    function rf(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Qe(t) || "Unknown", Zb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), Zb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Qe(t) || "Unknown", Qb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), Qb[t] = !0));
    }
    function sf(e) {
      return { baseLanes: e, cachePool: ey() };
    }
    function $d(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Mn), e;
    }
    function kd(e, t, a) {
      var i, o = t.pendingProps;
      oe(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Cl.current & Pp) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (st) {
          if (f ? ya(t) : Au(t), (e = tl) ? (a = Mt(
            e,
            $u
          ), a = a !== null && a.data !== Fs ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: L0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = $m(a), i.return = t, t.child = i, _a = t, tl = null)) : a = null, a === null)
            throw aa(t, e), pn(t);
          return ep(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          Au(t);
          var y = t.mode;
          return h = Pr(
            { mode: "hidden", children: h },
            y
          ), o = Bc(
            o,
            y,
            a,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = sf(a), o.childLanes = $d(
            e,
            i,
            a
          ), t.memoizedState = W1, Pc(
            null,
            o
          );
        }
        return ya(t), Ty(
          t,
          h
        );
      }
      var p = e.memoizedState;
      if (p !== null) {
        var D = p.dehydrated;
        if (D !== null) {
          if (d)
            t.flags & 256 ? (ya(t), t.flags &= -257, t = Wd(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (Au(t), t.child = e.child, t.flags |= 128, t = null) : (Au(t), h = o.fallback, y = t.mode, o = Pr(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = Bc(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, Qs(
              t,
              e.child,
              null,
              a
            ), o = t.child, o.memoizedState = sf(a), o.childLanes = $d(
              e,
              i,
              a
            ), t.memoizedState = W1, t = Pc(
              null,
              o
            ));
          else if (ya(t), Q0(), (a & 536870912) !== 0 && pf(t), ep(
            D
          )) {
            if (i = D.nextSibling && D.nextSibling.dataset, i) {
              h = i.dgst;
              var U = i.msg;
              y = i.stck;
              var A = i.cstck;
            }
            f = U, i = h, o = y, D = A, h = f, y = D, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = i, i = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: i
            }, typeof i == "string" && M1.set(
              h,
              o
            ), Mr(o), t = Wd(
              e,
              t,
              a
            );
          } else if (Vl || Gn(
            e,
            t,
            a,
            !1
          ), i = (a & e.childLanes) !== 0, Vl || i) {
            if (i = Qt, i !== null && (o = Ac(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, la(
                e,
                o
              ), Ye(
                i,
                e,
                o
              ), k1;
            gs(
              D
            ) || gf(), t = Wd(
              e,
              t,
              a
            );
          } else
            gs(
              D
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, tl = ln(
              D.nextSibling
            ), _a = t, st = !0, kf = null, gc = !1, au = null, $u = !1, e !== null && X0(t, e), t = Ty(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (Au(t), h = o.fallback, y = t.mode, A = e.child, D = A.sibling, o = gu(
        A,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = A.subtreeFlags & 65011712, D !== null ? h = gu(
        D,
        h
      ) : (h = Bc(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, Pc(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = sf(a) : (y = h.cachePool, y !== null ? (A = Ll._currentValue, y = y.parent !== A ? { parent: A, pool: A } : y) : y = ey(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = $d(
        e,
        i,
        a
      ), t.memoizedState = W1, Pc(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & e.lanes) !== 0 && pf(t), ya(t), a = e.child, e = a.sibling, a = gu(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Ty(e, t) {
      return t = Pr(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Pr(e, t) {
      return e = z(22, e, null, t), e.lanes = 0, e;
    }
    function Wd(e, t, a) {
      return Qs(t, e.child, null, a), e = Ty(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Ay(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), zd(
        e.return,
        t,
        a
      );
    }
    function Fd(e, t, a, i, o, f) {
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
    function Oy(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = Cl.current;
      if ((i = (h & Pp) !== 0) ? (h = h & rm | Pp, t.flags |= 128) : h &= rm, Xe(Cl, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !Jb[h])
        if (Jb[h] = !0, o == null)
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
      h = f ?? "null", bv[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (bv[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (bv[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (bv[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (Tl(d)) {
          for (h = 0; h < d.length; h++)
            if (!wt(
              d[h],
              h
            ))
              break e;
        } else if (h = Ce(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!wt(y.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Yl(e, t, d, a), st ? (Li(), d = Yp) : d = 0, !i && e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Ay(e, a, t);
          else if (e.tag === 19)
            Ay(e, a, t);
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
            e = a.alternate, e !== null && Xc(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Fd(
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
            if (e = o.alternate, e !== null && Xc(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Fd(
            t,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          Fd(
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
    function Jn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), on = -1, ar |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (Gn(
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
    function Id(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ko(e)));
    }
    function I0(e, t, a) {
      switch (t.tag) {
        case 3:
          Yt(
            t,
            t.stateNode.containerInfo
          ), gn(
            t,
            Ll,
            e.memoizedState.cache
          ), Xi();
          break;
        case 27:
        case 5:
          ne(t);
          break;
        case 4:
          Yt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          gn(
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
            return t.flags |= 128, Vn(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (ya(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? kd(
              e,
              t,
              a
            ) : (ya(t), e = Jn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ya(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (Gn(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return Oy(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Xe(
            Cl,
            Cl.current,
            t
          ), i) break;
          return null;
        case 22:
          return t.lanes = 0, py(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          gn(
            t,
            Ll,
            e.memoizedState.cache
          );
      }
      return Jn(e, t, a);
    }
    function es(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = xc(
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
          Vl = !0;
        else {
          if (!Id(e, a) && (t.flags & 128) === 0)
            return Vl = !1, I0(
              e,
              t,
              a
            );
          Vl = (e.flags & 131072) !== 0;
        }
      else
        Vl = !1, (i = st) && (Li(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Li(), km(t, Yp, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Ka(t.elementType), t.type = e, typeof e == "function")
            Jm(e) ? (i = Du(
              e,
              i
            ), t.tag = 1, t.type = e = wi(e), t = eo(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, rf(t, e), t.type = e = wi(e), t = Sy(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === xf) {
                t.tag = 11, t.type = e = Ad(e), t = W0(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === zs) {
                t.tag = 14, t = my(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === ua && (t = " Did you wrap a component in React.lazy() more than once?"), a = Qe(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Sy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = Du(
            i,
            t.pendingProps
          ), eo(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (Yt(
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
            if (i = d.cache, gn(t, Ll, i), i !== f.cache && ni(
              t,
              [Ll],
              a,
              !0
            ), Po(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = Ey(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = sa(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), Mr(o), t = Ey(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else
                for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, tl = ln(e.firstChild), _a = t, st = !0, kf = null, gc = !1, au = null, $u = !0, a = Eb(
                  t,
                  null,
                  i,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (Xi(), i === o) {
                t = Jn(
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
          return Ir(e, t), e === null ? (a = np(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = a : st || (a = t.type, e = t.pendingProps, i = Jt(
            an.current
          ), i = ys(
            i
          ).createElement(a), i[Pt] = t, i[Ra] = e, It(i, a, e), ge(i), t.stateNode = i) : t.memoizedState = np(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return ne(t), e === null && st && (i = Jt(an.current), o = J(), i = t.stateNode = bi(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), gc || (o = Ha(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (jc(t, 0).serverProps = o)), _a = t, $u = !0, o = tl, rc(t.type) ? (SS = o, tl = ln(
            i.firstChild
          )) : tl = o), Yl(
            e,
            t,
            t.pendingProps.children,
            a
          ), Ir(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && st && (f = J(), i = Sr(
            t.type,
            f.ancestorInfo
          ), o = tl, (d = !o) || (d = Dg(
            o,
            t.type,
            t.pendingProps,
            $u
          ), d !== null ? (t.stateNode = d, gc || (f = Ha(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (jc(t, 0).serverProps = f)), _a = t, tl = ln(
            d.firstChild
          ), $u = !1, f = !0) : f = !1, d = !f), d && (i && aa(t, o), pn(t))), ne(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Rf(o, f) ? i = null : d !== null && Rf(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = uy(
            e,
            t,
            Yr,
            null,
            null,
            a
          ), g0._currentValue = o), Ir(e, t), Yl(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && st && (a = t.pendingProps, e = J(), i = e.ancestorInfo.current, a = i != null ? br(
            a,
            i.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = tl, (i = !e) || (i = Mg(
            e,
            t.pendingProps,
            $u
          ), i !== null ? (t.stateNode = i, _a = t, tl = null, i = !0) : i = !1, i = !i), i && (a && aa(t, e), pn(t))), null;
        case 13:
          return kd(e, t, a);
        case 4:
          return Yt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Qs(
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
          return W0(
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
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || Kb || (Kb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), gn(t, i, f), Yl(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Vi(t), o = Tt(o), i = q1(
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
          return my(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return yy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return Oy(
            e,
            t,
            a
          );
        case 31:
          return F0(e, t, a);
        case 22:
          return py(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          return Vi(t), i = Tt(Ll), e === null ? (o = ci(), o === null && (o = Qt, f = Dd(), o.pooledCache = f, Yc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, ft(t), gn(t, Ll, o)) : ((e.lanes & a) !== 0 && (bu(e, t), Tu(t, null, null, a), Po()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), gn(t, Ll, i)) : (i = f.cache, gn(t, Ll, i), i !== o.cache && ni(
            t,
            [Ll],
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
    function Pd(e, t, a, i, o) {
      if ((t = (e.mode & aT) !== qe) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Xy()) e.flags |= 8192;
          else
            throw Xs = mv, w1;
      } else e.flags &= -16777217;
    }
    function P0(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & Pu) !== ed)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !ct(t))
        if (Xy()) e.flags |= 8192;
        else
          throw Xs = mv, w1;
    }
    function df(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? No() : 536870912, e.lanes |= t, $s |= t);
    }
    function hf(e, t) {
      if (!st)
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
    function Ut(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & et) !== qe) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & et) !== qe) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Ry(e, t, a) {
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
          return Ut(t), null;
        case 1:
          return Ut(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), wn(Ll, t), C(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (qc(t) ? (Qi(), Mu(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Dr())), Ut(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (Mu(t), f !== null ? (Ut(t), P0(
            t,
            f
          )) : (Ut(t), Pd(
            t,
            o,
            null,
            i,
            a
          ))) : f ? f !== e.memoizedState ? (Mu(t), Ut(t), P0(
            t,
            f
          )) : (Ut(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Mu(t), Ut(t), Pd(
            t,
            o,
            e,
            i,
            a
          )), null;
        case 27:
          if (Te(t), a = Jt(an.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Mu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Ut(t), null;
            }
            e = J(), qc(t) ? Wm(t) : (e = bi(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Mu(t));
          }
          return Ut(t), null;
        case 5:
          if (Te(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Mu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Ut(t), null;
            }
            var d = J();
            if (qc(t))
              Wm(t);
            else {
              switch (f = Jt(an.current), Sr(o, d.ancestorInfo), d = d.context, f = ys(f), d) {
                case Tm:
                  f = f.createElementNS(
                    We,
                    o
                  );
                  break;
                case Gv:
                  f = f.createElementNS(
                    Je,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        We,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        Je,
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
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || nn.call(gE, o) || (gE[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[Pt] = t, f[Ra] = i;
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
              e: switch (It(f, o, i), o) {
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
          return Ut(t), Pd(
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
            if (e = Jt(an.current), a = J(), qc(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !gc, i = null, f = _a, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Hg(
                      e,
                      a,
                      i
                    ), o !== null && (jc(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Hg(
                      e,
                      a,
                      i
                    ), o !== null && (jc(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Pt] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Iy(e.nodeValue, a)), e || pn(t, !0);
            } else
              o = a.ancestorInfo.current, o != null && br(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = ys(e).createTextNode(
                i
              ), e[Pt] = t, t.stateNode = e;
          }
          return Ut(t), null;
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
                e[Pt] = t, Ut(t), (t.mode & et) !== qe && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                Qi(), Xi(), (t.flags & 128) === 0 && (a = t.memoizedState = null), t.flags |= 4, Ut(t), (t.mode & et) !== qe && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = Dr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
            if (!e)
              return t.flags & 256 ? (jl(t), t) : (jl(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Ut(t), null;
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
                f[Pt] = t, Ut(t), (t.mode & et) !== qe && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Qi(), Xi(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, Ut(t), (t.mode & et) !== qe && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Dr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (jl(t), t) : (jl(t), null);
          }
          return jl(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & et) !== qe && Gc(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), df(t, t.updateQueue), Ut(t), (t.mode & et) !== qe && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return C(t), e === null && oc(
            t.stateNode.containerInfo
          ), Ut(t), null;
        case 10:
          return wn(t.type, t), Ut(t), null;
        case 19:
          if (be(Cl, t), i = t.memoizedState, i === null) return Ut(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) hf(i, !1);
            else {
              if (dl !== Mo || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Xc(e), f !== null) {
                    for (t.flags |= 128, hf(i, !1), e = f.updateQueue, t.updateQueue = e, df(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Km(a, e), a = a.sibling;
                    return Xe(
                      Cl,
                      Cl.current & rm | Pp,
                      t
                    ), st && Yn(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && Gl() > zv && (t.flags |= 128, o = !0, hf(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = Xc(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, df(t, e), hf(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !st)
                  return Ut(t), null;
              } else
                2 * Gl() - i.renderingStartTime > zv && a !== 536870912 && (t.flags |= 128, o = !0, hf(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Gl(), e.sibling = null, a = Cl.current, a = o ? a & rm | Pp : a & rm, Xe(Cl, a, t), st && Yn(t, i.treeForkCount), e) : (Ut(t), null);
        case 22:
        case 23:
          return jl(t), Qn(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ut(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ut(t), a = t.updateQueue, a !== null && df(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && be(Gs, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), wn(Ll, t), Ut(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function eg(e, t) {
      switch (_d(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & et) !== qe && Gc(t), t) : null;
        case 3:
          return wn(Ll, t), C(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return Te(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (jl(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Xi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & et) !== qe && Gc(t), t) : null;
        case 13:
          if (jl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Xi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & et) !== qe && Gc(t), t) : null;
        case 19:
          return be(Cl, t), null;
        case 4:
          return C(t), null;
        case 10:
          return wn(t.type, t), null;
        case 22:
        case 23:
          return jl(t), Qn(t), e !== null && be(Gs, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & et) !== qe && Gc(t), t) : null;
        case 24:
          return wn(Ll, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function _y(e, t) {
      switch (_d(t), t.tag) {
        case 3:
          wn(Ll, t), C(t);
          break;
        case 26:
        case 27:
        case 5:
          Te(t);
          break;
        case 4:
          C(t);
          break;
        case 31:
          t.memoizedState !== null && jl(t);
          break;
        case 13:
          jl(t);
          break;
        case 19:
          be(Cl, t);
          break;
        case 10:
          wn(t.type, t);
          break;
        case 22:
        case 23:
          jl(t), Qn(t), e !== null && be(Gs, t);
          break;
        case 24:
          wn(Ll, t);
      }
    }
    function Cu(e) {
      return (e.mode & et) !== qe;
    }
    function tg(e, t) {
      Cu(e) ? (ol(), yi(t, e), ha()) : yi(t, e);
    }
    function eh(e, t, a) {
      Cu(e) ? (ol(), lc(
        a,
        e,
        t
      ), ha()) : lc(
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
            if ((a.tag & e) === e && (i = void 0, (e & fn) !== pv && (Sm = !0), i = re(
              t,
              fT,
              a
            ), (e & fn) !== pv && (Sm = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & uu) !== 0 ? "useLayoutEffect" : (a.tag & fn) !== 0 ? "useInsertionEffect" : "useEffect";
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

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, re(
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
        ke(t, t.return, h);
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
              h !== void 0 && (d.destroy = void 0, (e & fn) !== pv && (Sm = !0), o = t, re(
                o,
                rT,
                o,
                a,
                h
              ), (e & fn) !== pv && (Sm = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        ke(t, t.return, y);
      }
    }
    function ts(e, t) {
      Cu(e) ? (ol(), yi(t, e), ha()) : yi(t, e);
    }
    function th(e, t, a) {
      Cu(e) ? (ol(), lc(
        a,
        e,
        t
      ), ha()) : lc(
        a,
        e,
        t
      );
    }
    function zy(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || mm || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          he(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          he(e) || "instance"
        ));
        try {
          re(
            e,
            ef,
            t,
            a
          );
        } catch (i) {
          ke(e, e.return, i);
        }
      }
    }
    function ls(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function lg(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || mm || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        he(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        he(e) || "instance"
      ));
      try {
        var o = Du(
          e.type,
          a
        ), f = re(
          e,
          ls,
          t,
          o,
          i
        );
        a = $b, f !== void 0 || a.has(e.type) || (a.add(e.type), re(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            he(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        ke(e, e.return, d);
      }
    }
    function lh(e, t, a) {
      a.props = Du(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, Cu(e) ? (ol(), re(
        e,
        hb,
        e,
        t,
        a
      ), ha()) : re(
        e,
        hb,
        e,
        t,
        a
      );
    }
    function ag(e) {
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
              ha();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            he(e)
          ), t.current = a;
      }
    }
    function to(e, t) {
      try {
        re(e, ag, e);
      } catch (a) {
        ke(e, t, a);
      }
    }
    function Tn(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (Cu(e))
              try {
                ol(), re(e, i);
              } finally {
                ha(e);
              }
            else re(e, i);
          } catch (o) {
            ke(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (Cu(e))
              try {
                ol(), re(e, a, null);
              } finally {
                ha(e);
              }
            else re(e, a, null);
          } catch (o) {
            ke(e, t, o);
          }
        else a.current = null;
    }
    function Dy(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", rv && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(f, t, i, a);
    }
    function ng(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", rv && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function ac(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        re(
          e,
          gg,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        ke(e, e.return, o);
      }
    }
    function ah(e, t, a) {
      try {
        re(
          e,
          Ah,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        ke(e, e.return, i);
      }
    }
    function My(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && rc(e.type) || e.tag === 4;
    }
    function nh(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || My(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && rc(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function mf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (Sg(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (Sg(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = mn));
      else if (i !== 4 && (i === 27 && rc(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (mf(e, t, a), e = e.sibling; e !== null; )
          mf(e, t, a), e = e.sibling;
    }
    function as(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && rc(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (as(e, t, a), e = e.sibling; e !== null; )
          as(e, t, a), e = e.sibling;
    }
    function Cy(e) {
      for (var t, a = e.return; a !== null; ) {
        if (My(a)) {
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
          t = t.stateNode, a = nh(e), as(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (Oh(a), t.flags &= -33), t = nh(e), as(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = nh(e), mf(
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
    function Uy(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        re(
          e,
          Yu,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        ke(e, e.return, i);
      }
    }
    function Hy(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : !1;
    }
    function i1(e, t) {
      if (e = e.containerInfo, pS = Vv, e = Sd(e), wm(e)) {
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
              var d = 0, h = -1, y = -1, p = 0, D = 0, U = e, A = null;
              t: for (; ; ) {
                for (var G; U !== a || o !== 0 && U.nodeType !== 3 || (h = d + o), U !== f || i !== 0 && U.nodeType !== 3 || (y = d + i), U.nodeType === 3 && (d += U.nodeValue.length), (G = U.firstChild) !== null; )
                  A = U, U = G;
                for (; ; ) {
                  if (U === e) break t;
                  if (A === a && ++p === o && (h = d), A === f && ++D === i && (y = d), (G = U.nextSibling) !== null) break;
                  U = A, A = U.parentNode;
                }
                U = G;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (gS = {
        focusedElem: e,
        selectionRange: a
      }, Vv = !1, oa = t; oa !== null; )
        if (t = oa, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, oa = e;
        else
          for (; oa !== null; ) {
            switch (e = t = oa, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                if ((o & 4) !== 0 && (e = e.updateQueue, e = e !== null ? e.events : null, e !== null))
                  for (a = 0; a < e.length; a++)
                    o = e[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && lg(e, a);
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
              e.return = t.return, oa = e;
              break;
            }
            oa = t.return;
          }
    }
    function uh(e, t, a) {
      var i = Wt(), o = vn(), f = Za(), d = Sn(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ia(e, a), h & 4 && tg(a, uu | Fu);
          break;
        case 1:
          if (Ia(e, a), h & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || mm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                he(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                he(a) || "instance"
              )), Cu(a) ? (ol(), re(
                a,
                Y1,
                a,
                e
              ), ha()) : re(
                a,
                Y1,
                a,
                e
              );
            else {
              var y = Du(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || mm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                he(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                he(a) || "instance"
              )), Cu(a) ? (ol(), re(
                a,
                rb,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), ha()) : re(
                a,
                rb,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && zy(a), h & 512 && to(a, a.return);
          break;
        case 3:
          if (t = Su(), Ia(e, a), h & 64 && (h = a.updateQueue, h !== null)) {
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
              re(
                a,
                ef,
                h,
                y
              );
            } catch (D) {
              ke(a, a.return, D);
            }
          }
          e.effectDuration += Wo(t);
          break;
        case 27:
          t === null && h & 4 && Uy(a);
        case 26:
        case 5:
          if (Ia(e, a), t === null) {
            if (h & 4) ac(a);
            else if (h & 64) {
              e = a.type, t = a.memoizedProps, y = a.stateNode;
              try {
                re(
                  a,
                  vg,
                  y,
                  e,
                  t,
                  a
                );
              } catch (D) {
                ke(
                  a,
                  a.return,
                  D
                );
              }
            }
          }
          h & 512 && to(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = Su(), Ia(e, a), e = a.stateNode, e.effectDuration += da(h);
            try {
              re(
                a,
                Dy,
                a,
                t,
                Wf,
                e.effectDuration
              );
            } catch (D) {
              ke(a, a.return, D);
            }
          } else Ia(e, a);
          break;
        case 31:
          Ia(e, a), h & 4 && xy(e, a);
          break;
        case 13:
          Ia(e, a), h & 4 && By(e, a), h & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = gi.bind(
            null,
            a
          ), Cg(e, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || Do, !h) {
            t = t !== null && t.memoizedState !== null || Zl, y = Do;
            var p = Zl;
            Do = h, (Zl = t) && !p ? (Kn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & et) !== qe && 0 <= Me && 0 <= xe && 0.05 < xe - Me && bd(
              a,
              Me,
              xe
            )) : Ia(e, a), Do = y, Zl = p;
          }
          break;
        case 30:
          break;
        default:
          Ia(e, a);
      }
      (a.mode & et) !== qe && 0 <= Me && 0 <= xe && ((vl || 0.05 < sl) && qn(
        a,
        Me,
        xe,
        sl,
        il
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < xe - Me && (Hy(
        a.return.alternate,
        a.return
      ) || yn(
        a,
        Me,
        xe,
        "Mount"
      ))), xl(i), Va(o), il = f, vl = d;
    }
    function pl(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, pl(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && N(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function $t(e, t, a) {
      for (a = a.child; a !== null; )
        Ny(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function Ny(e, t, a) {
      if (Dl && typeof Dl.onCommitFiberUnmount == "function")
        try {
          Dl.onCommitFiberUnmount(yo, a);
        } catch (p) {
          Gu || (Gu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = Wt(), o = vn(), f = Za(), d = Sn();
      switch (a.tag) {
        case 26:
          Zl || Tn(a, t), $t(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (e = a.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          Zl || Tn(a, t);
          var h = Jl, y = zn;
          rc(a.type) && (Jl = a.stateNode, zn = !1), $t(
            e,
            t,
            a
          ), re(
            a,
            Ei,
            a.stateNode
          ), Jl = h, zn = y;
          break;
        case 5:
          Zl || Tn(a, t);
        case 6:
          if (h = Jl, y = zn, Jl = null, $t(
            e,
            t,
            a
          ), Jl = h, zn = y, Jl !== null)
            if (zn)
              try {
                re(
                  a,
                  Eg,
                  Jl,
                  a.stateNode
                );
              } catch (p) {
                ke(
                  a,
                  t,
                  p
                );
              }
            else
              try {
                re(
                  a,
                  bg,
                  Jl,
                  a.stateNode
                );
              } catch (p) {
                ke(
                  a,
                  t,
                  p
                );
              }
          break;
        case 18:
          Jl !== null && (zn ? (e = Jl, io(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), ro(e)) : io(Jl, a.stateNode));
          break;
        case 4:
          h = Jl, y = zn, Jl = a.stateNode.containerInfo, zn = !0, $t(
            e,
            t,
            a
          ), Jl = h, zn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          lc(
            fn,
            a,
            t
          ), Zl || eh(
            a,
            t,
            uu
          ), $t(
            e,
            t,
            a
          );
          break;
        case 1:
          Zl || (Tn(a, t), h = a.stateNode, typeof h.componentWillUnmount == "function" && lh(
            a,
            t,
            h
          )), $t(
            e,
            t,
            a
          );
          break;
        case 21:
          $t(
            e,
            t,
            a
          );
          break;
        case 22:
          Zl = (h = Zl) || a.memoizedState !== null, $t(
            e,
            t,
            a
          ), Zl = h;
          break;
        default:
          $t(
            e,
            t,
            a
          );
      }
      (a.mode & et) !== qe && 0 <= Me && 0 <= xe && (vl || 0.05 < sl) && qn(
        a,
        Me,
        xe,
        sl,
        il
      ), xl(i), Va(o), il = f, vl = d;
    }
    function xy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          re(
            t,
            Rh,
            e
          );
        } catch (a) {
          ke(t, t.return, a);
        }
      }
    }
    function By(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          re(
            t,
            lp,
            e
          );
        } catch (a) {
          ke(t, t.return, a);
        }
    }
    function ug(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new kb()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new kb()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function nc(e, t) {
      var a = ug(e);
      t.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), Lu)
            if (ym !== null && pm !== null)
              bf(pm, ym);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = no.bind(null, e, i);
          i.then(o, o);
        }
      });
    }
    function va(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = Wt(), y = f;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (rc(y.type)) {
                  Jl = y.stateNode, zn = !1;
                  break e;
                }
                break;
              case 5:
                Jl = y.stateNode, zn = !1;
                break e;
              case 3:
              case 4:
                Jl = y.stateNode.containerInfo, zn = !0;
                break e;
            }
            y = y.return;
          }
          if (Jl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Ny(o, f, d), Jl = null, zn = !1, (d.mode & et) !== qe && 0 <= Me && 0 <= xe && 0.05 < xe - Me && yn(
            d,
            Me,
            xe,
            "Unmount"
          ), xl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          ns(t, e), t = t.sibling;
    }
    function ns(e, t) {
      var a = Wt(), i = vn(), o = Za(), f = Sn(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          va(t, e), Sa(e), h & 4 && (lc(
            fn | Fu,
            e,
            e.return
          ), yi(fn | Fu, e), eh(
            e,
            e.return,
            uu | Fu
          ));
          break;
        case 1:
          if (va(t, e), Sa(e), h & 512 && (Zl || d === null || Tn(d, d.return)), h & 64 && Do && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = zi, va(t, e), Sa(e), h & 512 && (Zl || d === null || Tn(d, d.return)), h & 4) {
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
                        )[0], (!p || p[Xf] || p[Pt] || p.namespaceURI === We || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), It(p, h, d), p[Pt] = e, ge(p), h = p;
                        break e;
                      case "link":
                        var D = Cf(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (D) {
                          for (var U = 0; U < D.length; U++)
                            if (p = D[U], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              D.splice(U, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), It(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (D = Cf(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (U = 0; U < D.length; U++)
                            if (p = D[U], vt(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              D.splice(U, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), It(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[Pt] = e, ge(p), h = p;
                  }
                  e.stateNode = h;
                } else
                  xg(
                    y,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Dh(
                  y,
                  h,
                  e.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? xg(
                y,
                e.type,
                e.stateNode
              ) : Dh(
                y,
                h,
                e.memoizedProps
              )) : h === null && e.stateNode !== null && ah(
                e,
                e.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          va(t, e), Sa(e), h & 512 && (Zl || d === null || Tn(d, d.return)), d !== null && h & 4 && ah(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (va(t, e), Sa(e), h & 512 && (Zl || d === null || Tn(d, d.return)), e.flags & 32) {
            y = e.stateNode;
            try {
              re(
                e,
                Oh,
                y
              );
            } catch (se) {
              ke(e, e.return, se);
            }
          }
          h & 4 && e.stateNode != null && (y = e.memoizedProps, ah(
            e,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (F1 = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (va(t, e), Sa(e), h & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = e.memoizedProps, d = d !== null ? d.memoizedProps : h, y = e.stateNode;
            try {
              re(
                e,
                c1,
                y,
                d,
                h
              );
            } catch (se) {
              ke(e, e.return, se);
            }
          }
          break;
        case 3:
          if (y = Su(), Lv = null, p = zi, zi = _h(t.containerInfo), va(t, e), zi = p, Sa(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              re(
                e,
                tp,
                t.containerInfo
              );
            } catch (se) {
              ke(e, e.return, se);
            }
          F1 && (F1 = !1, ig(e)), t.effectDuration += Wo(
            y
          );
          break;
        case 4:
          h = zi, zi = _h(
            e.stateNode.containerInfo
          ), va(t, e), Sa(e), zi = h;
          break;
        case 12:
          h = Su(), va(t, e), Sa(e), e.stateNode.effectDuration += da(h);
          break;
        case 31:
          va(t, e), Sa(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, nc(e, h)));
          break;
        case 13:
          va(t, e), Sa(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (_v = Gl()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, nc(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var A = d !== null && d.memoizedState !== null, G = Do, ce = Zl;
          if (Do = G || y, Zl = ce || A, va(t, e), Zl = ce, Do = G, A && !y && !G && !ce && (e.mode & et) !== qe && 0 <= Me && 0 <= xe && 0.05 < xe - Me && bd(
            e,
            Me,
            xe
          ), Sa(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~qp : t._visibility | qp, !y || d === null || A || Do || Zl || (uc(e), (e.mode & et) !== qe && 0 <= Me && 0 <= xe && 0.05 < xe - Me && yn(
              e,
              Me,
              xe,
              "Disconnect"
            )), d = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (d === null) {
                  A = d = t;
                  try {
                    p = A.stateNode, y ? re(
                      A,
                      Ag,
                      p
                    ) : re(
                      A,
                      _g,
                      A.stateNode,
                      A.memoizedProps
                    );
                  } catch (se) {
                    ke(A, A.return, se);
                  }
                }
              } else if (t.tag === 6) {
                if (d === null) {
                  A = t;
                  try {
                    D = A.stateNode, y ? re(
                      A,
                      Og,
                      D
                    ) : re(
                      A,
                      zg,
                      D,
                      A.memoizedProps
                    );
                  } catch (se) {
                    ke(A, A.return, se);
                  }
                }
              } else if (t.tag === 18) {
                if (d === null) {
                  A = t;
                  try {
                    U = A.stateNode, y ? re(
                      A,
                      Tg,
                      U
                    ) : re(
                      A,
                      Rg,
                      A.stateNode
                    );
                  } catch (se) {
                    ke(A, A.return, se);
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
          va(t, e), Sa(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, nc(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          va(t, e), Sa(e);
      }
      (e.mode & et) !== qe && 0 <= Me && 0 <= xe && ((vl || 0.05 < sl) && qn(
        e,
        Me,
        xe,
        sl,
        il
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < xe - Me && (Hy(
        e.return.alternate,
        e.return
      ) || yn(
        e,
        Me,
        xe,
        "Mount"
      ))), xl(a), Va(i), il = o, vl = f;
    }
    function Sa(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          re(e, Cy, e);
        } catch (a) {
          ke(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function ig(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          ig(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Ia(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          uh(e, t.alternate, t), t = t.sibling;
    }
    function ih(e) {
      var t = Wt(), a = vn(), i = Za(), o = Sn();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          eh(
            e,
            e.return,
            uu
          ), uc(e);
          break;
        case 1:
          Tn(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && lh(
            e,
            e.return,
            f
          ), uc(e);
          break;
        case 27:
          re(
            e,
            Ei,
            e.stateNode
          );
        case 26:
        case 5:
          Tn(e, e.return), uc(e);
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
      (e.mode & et) !== qe && 0 <= Me && 0 <= xe && (vl || 0.05 < sl) && qn(
        e,
        Me,
        xe,
        sl,
        il
      ), xl(t), Va(a), il = i, vl = o;
    }
    function uc(e) {
      for (e = e.child; e !== null; )
        ih(e), e = e.sibling;
    }
    function jy(e, t, a, i) {
      var o = Wt(), f = vn(), d = Za(), h = Sn(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Kn(
            e,
            a,
            i
          ), tg(a, uu);
          break;
        case 1:
          if (Kn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && re(
            a,
            Y1,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              re(
                a,
                ay,
                t,
                e
              );
            } catch (p) {
              ke(a, a.return, p);
            }
          }
          i && y & 64 && zy(a), to(a, a.return);
          break;
        case 27:
          Uy(a);
        case 26:
        case 5:
          Kn(
            e,
            a,
            i
          ), i && t === null && y & 4 && ac(a), to(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = Su(), Kn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += da(y);
            try {
              re(
                a,
                Dy,
                a,
                t,
                Wf,
                i.effectDuration
              );
            } catch (p) {
              ke(a, a.return, p);
            }
          } else
            Kn(
              e,
              a,
              i
            );
          break;
        case 31:
          Kn(
            e,
            a,
            i
          ), i && y & 4 && xy(e, a);
          break;
        case 13:
          Kn(
            e,
            a,
            i
          ), i && y & 4 && By(e, a);
          break;
        case 22:
          a.memoizedState === null && Kn(
            e,
            a,
            i
          ), to(a, a.return);
          break;
        case 30:
          break;
        default:
          Kn(
            e,
            a,
            i
          );
      }
      (a.mode & et) !== qe && 0 <= Me && 0 <= xe && (vl || 0.05 < sl) && qn(
        a,
        Me,
        xe,
        sl,
        il
      ), xl(o), Va(f), il = d, vl = h;
    }
    function Kn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        jy(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function us(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Yc(e), a != null && Ur(a));
    }
    function is(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Yc(t), e != null && Ur(e));
    }
    function Pa(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (t = t.child; t !== null; ) {
          var f = t.sibling;
          qy(
            e,
            t,
            a,
            i,
            f !== null ? f.actualStartTime : o
          ), t = f;
        }
    }
    function qy(e, t, a, i, o) {
      var f = Wt(), d = vn(), h = Za(), y = Sn(), p = Jf, D = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & et) !== qe && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Ed(
            t,
            t.actualStartTime,
            o,
            Il,
            a
          ), Pa(
            e,
            t,
            a,
            i,
            o
          ), D & 2048 && ts(t, rn | Fu);
          break;
        case 1:
          (t.mode & et) !== qe && 0 < t.actualStartTime && ((t.flags & 128) !== 0 ? Lm(
            t,
            t.actualStartTime,
            o,
            []
          ) : (t.flags & 1) !== 0 && Ed(
            t,
            t.actualStartTime,
            o,
            Il,
            a
          )), Pa(
            e,
            t,
            a,
            i,
            o
          );
          break;
        case 3:
          var U = Su(), A = Il;
          Il = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, Pa(
            e,
            t,
            a,
            i,
            o
          ), Il = A, D & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== a && (Yc(i), a != null && Ur(a))), e.passiveEffectDuration += Wo(
            U
          );
          break;
        case 12:
          if (D & 2048) {
            D = Su(), Pa(
              e,
              t,
              a,
              i,
              o
            ), e = t.stateNode, e.passiveEffectDuration += da(D);
            try {
              re(
                t,
                ng,
                t,
                t.alternate,
                Wf,
                e.passiveEffectDuration
              );
            } catch (G) {
              ke(t, t.return, G);
            }
          } else
            Pa(
              e,
              t,
              a,
              i,
              o
            );
          break;
        case 31:
          D = Il, U = t.alternate !== null ? t.alternate.memoizedState : null, A = t.memoizedState, U !== null && A === null ? (A = t.deletions, A !== null && 0 < A.length && A[0].tag === 18 ? (Il = !1, U = U.hydrationErrors, U !== null && Lm(
            t,
            t.actualStartTime,
            o,
            U
          )) : Il = !0) : Il = !1, Pa(
            e,
            t,
            a,
            i,
            o
          ), Il = D;
          break;
        case 13:
          D = Il, U = t.alternate !== null ? t.alternate.memoizedState : null, A = t.memoizedState, U === null || U.dehydrated === null || A !== null && A.dehydrated !== null ? Il = !1 : (A = t.deletions, A !== null && 0 < A.length && A[0].tag === 18 ? (Il = !1, U = U.hydrationErrors, U !== null && Lm(
            t,
            t.actualStartTime,
            o,
            U
          )) : Il = !0), Pa(
            e,
            t,
            a,
            i,
            o
          ), Il = D;
          break;
        case 23:
          break;
        case 22:
          A = t.stateNode, U = t.alternate, t.memoizedState !== null ? A._visibility & vo ? Pa(
            e,
            t,
            a,
            i,
            o
          ) : lo(
            e,
            t,
            a,
            i,
            o
          ) : A._visibility & vo ? Pa(
            e,
            t,
            a,
            i,
            o
          ) : (A._visibility |= vo, ic(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & et) === qe || Il || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && bd(t, e, o), 0 <= Me && 0 <= xe && 0.05 < xe - Me && bd(
            t,
            Me,
            xe
          ))), D & 2048 && us(
            U,
            t
          );
          break;
        case 24:
          Pa(
            e,
            t,
            a,
            i,
            o
          ), D & 2048 && is(t.alternate, t);
          break;
        default:
          Pa(
            e,
            t,
            a,
            i,
            o
          );
      }
      (t.mode & et) !== qe && ((e = !Il && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && yn(
        t,
        a,
        o,
        "Mount"
      )), 0 <= Me && 0 <= xe && ((vl || 0.05 < sl) && qn(
        t,
        Me,
        xe,
        sl,
        il
      ), e && 0.05 < xe - Me && yn(
        t,
        Me,
        xe,
        "Mount"
      ))), xl(f), Va(d), il = h, vl = y, Jf = p;
    }
    function ic(e, t, a, i, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        cs(
          e,
          t,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function cs(e, t, a, i, o, f) {
      var d = Wt(), h = vn(), y = Za(), p = Sn(), D = Jf;
      o && (t.mode & et) !== qe && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Ed(
        t,
        t.actualStartTime,
        f,
        Il,
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
          ), ts(t, rn);
          break;
        case 23:
          break;
        case 22:
          var A = t.stateNode;
          t.memoizedState !== null ? A._visibility & vo ? ic(
            e,
            t,
            a,
            i,
            o,
            f
          ) : lo(
            e,
            t,
            a,
            i,
            f
          ) : (A._visibility |= vo, ic(
            e,
            t,
            a,
            i,
            o,
            f
          )), o && U & 2048 && us(
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
          ), o && U & 2048 && is(t.alternate, t);
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
      (t.mode & et) !== qe && 0 <= Me && 0 <= xe && (vl || 0.05 < sl) && qn(
        t,
        Me,
        xe,
        sl,
        il
      ), xl(d), Va(h), il = y, vl = p, Jf = D;
    }
    function lo(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = a, y = i, p = t !== null ? t.actualStartTime : o, D = Jf;
          (f.mode & et) !== qe && 0 < f.actualStartTime && (f.flags & 1) !== 0 && Ed(
            f,
            f.actualStartTime,
            p,
            Il,
            h
          );
          var U = f.flags;
          switch (f.tag) {
            case 22:
              lo(
                d,
                f,
                h,
                y,
                p
              ), U & 2048 && us(f.alternate, f);
              break;
            case 24:
              lo(
                d,
                f,
                h,
                y,
                p
              ), U & 2048 && is(f.alternate, f);
              break;
            default:
              lo(
                d,
                f,
                h,
                y,
                p
              );
          }
          Jf = D, f = t;
        }
    }
    function ao(e, t, a) {
      if (e.subtreeFlags & a0)
        for (e = e.child; e !== null; )
          ch(
            e,
            t,
            a
          ), e = e.sibling;
    }
    function ch(e, t, a) {
      switch (e.tag) {
        case 26:
          ao(
            e,
            t,
            a
          ), e.flags & a0 && e.memoizedState !== null && cp(
            a,
            zi,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          ao(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          var i = zi;
          zi = _h(
            e.stateNode.containerInfo
          ), ao(
            e,
            t,
            a
          ), zi = i;
          break;
        case 22:
          e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = a0, a0 = 16777216, ao(
            e,
            t,
            a
          ), a0 = i) : ao(
            e,
            t,
            a
          ));
          break;
        default:
          ao(
            e,
            t,
            a
          );
      }
    }
    function Yy(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function en(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Wt();
            oa = i, Uu(
              i,
              e
            ), (i.mode & et) !== qe && 0 <= Me && 0 <= xe && 0.05 < xe - Me && yn(
              i,
              Me,
              xe,
              "Unmount"
            ), xl(o);
          }
        Yy(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          oh(e), e = e.sibling;
    }
    function oh(e) {
      var t = Wt(), a = vn(), i = Za(), o = Sn();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          en(e), e.flags & 2048 && th(
            e,
            e.return,
            rn | Fu
          );
          break;
        case 3:
          var f = Su();
          en(e), e.stateNode.passiveEffectDuration += Wo(f);
          break;
        case 12:
          f = Su(), en(e), e.stateNode.passiveEffectDuration += da(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & vo && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~vo, fh(e), (e.mode & et) !== qe && 0 <= Me && 0 <= xe && 0.05 < xe - Me && yn(
            e,
            Me,
            xe,
            "Disconnect"
          )) : en(e);
          break;
        default:
          en(e);
      }
      (e.mode & et) !== qe && 0 <= Me && 0 <= xe && (vl || 0.05 < sl) && qn(
        e,
        Me,
        xe,
        sl,
        il
      ), xl(t), Va(a), vl = o, il = i;
    }
    function fh(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Wt();
            oa = i, Uu(
              i,
              e
            ), (i.mode & et) !== qe && 0 <= Me && 0 <= xe && 0.05 < xe - Me && yn(
              i,
              Me,
              xe,
              "Unmount"
            ), xl(o);
          }
        Yy(e);
      }
      for (e = e.child; e !== null; )
        wy(e), e = e.sibling;
    }
    function wy(e) {
      var t = Wt(), a = vn(), i = Za(), o = Sn();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          th(
            e,
            e.return,
            rn
          ), fh(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & vo && (f._visibility &= ~vo, fh(e));
          break;
        default:
          fh(e);
      }
      (e.mode & et) !== qe && 0 <= Me && 0 <= xe && (vl || 0.05 < sl) && qn(
        e,
        Me,
        xe,
        sl,
        il
      ), xl(t), Va(a), vl = o, il = i;
    }
    function Uu(e, t) {
      for (; oa !== null; ) {
        var a = oa, i = a, o = t, f = Wt(), d = vn(), h = Za(), y = Sn();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            th(
              i,
              o,
              rn
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && Yc(o));
            break;
          case 24:
            Ur(i.memoizedState.cache);
        }
        if ((i.mode & et) !== qe && 0 <= Me && 0 <= xe && (vl || 0.05 < sl) && qn(
          i,
          Me,
          xe,
          sl,
          il
        ), xl(f), Va(d), vl = y, il = h, i = a.child, i !== null) i.return = a, oa = i;
        else
          e: for (a = e; oa !== null; ) {
            if (i = oa, f = i.sibling, d = i.return, pl(i), i === a) {
              oa = null;
              break e;
            }
            if (f !== null) {
              f.return = d, oa = f;
              break e;
            }
            oa = d;
          }
      }
    }
    function Gy() {
      yT.forEach(function(e) {
        return e();
      });
    }
    function Ly() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || X.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function na(e) {
      if ((pt & Pl) !== fa && lt !== 0)
        return lt & -lt;
      var t = X.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), Fy()) : Ni();
    }
    function yf() {
      if (Mn === 0)
        if ((lt & 536870912) === 0 || st) {
          var e = Cs;
          Cs <<= 1, (Cs & 3932160) === 0 && (Cs = 262144), Mn = e;
        } else Mn = 536870912;
      return e = nu.current, e !== null && (e.flags |= 32), Mn;
    }
    function Ye(e, t, a) {
      if (Sm && console.error("useInsertionEffect must not schedule updates."), oS && (Cv = !0), (e === Qt && (Bt === Js || Bt === Ks) || e.cancelPendingCommit !== null) && (Hu(e, 0), An(
        e,
        lt,
        Mn,
        !1
      )), Hn(e, a), (pt & Pl) !== fa && e === Qt) {
        if (wu)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = ut && he(ut) || "Unknown", rE.has(e) || (rE.add(e), t = he(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              fE || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), fE = !0);
          }
      } else
        Lu && Ol(e, t, a), ss(t), e === Qt && ((pt & Pl) === fa && (nr |= a), dl === tr && An(
          e,
          lt,
          Mn,
          !1
        )), Ca(e);
    }
    function cg(e, t, a) {
      if ((pt & (Pl | iu)) !== fa)
        throw Error("Should not already be working.");
      if (lt !== 0 && ut !== null) {
        var i = ut, o = Gl();
        switch (lb) {
          case i0:
          case Js:
            var f = Qp;
            el && ((i = i._debugTask) ? i.run(
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
          case Ks:
            f = Qp, el && ((i = i._debugTask) ? i.run(
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
            el && (i = o - Qp, 3 > i || console.timeStamp(
              "Blocked",
              Qp,
              o,
              Qu,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Sl(e, t)) ? pi(e, t) : vf(e, t, !0);
      var d = a;
      do {
        if (f === Mo) {
          gm && !a && An(e, t, 0, !1), t = Bt, Qp = Xl(), lb = t;
          break;
        } else {
          if (i = Gl(), o = e.current.alternate, d && !fg(o)) {
            jn(t), o = ca, f = i, !el || f <= o || (Al ? Al.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                mt,
                dt,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              mt,
              dt,
              "error"
            )), cc(t, i), f = vf(e, t, !1), d = !1;
            continue;
          }
          if (f === Zs) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              jn(t), Xm(
                ca,
                i,
                t,
                Al
              ), cc(t, i), t = h;
              e: {
                i = e, f = d, d = o0;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (Hu(i, h).flags |= 256), h = vf(
                  i,
                  h,
                  !1
                ), h !== Zs) {
                  if (eS && !y) {
                    i.errorRecoveryDisabledLanes |= f, nr |= f, f = tr;
                    break e;
                  }
                  i = sn, sn = d, i !== null && (sn === null ? sn = i : sn.push.apply(
                    sn,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Zs) continue;
              i = Gl();
            }
          }
          if (f === u0) {
            jn(t), Xm(
              ca,
              i,
              t,
              Al
            ), cc(t, i), Hu(e, 0), An(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case Mo:
              case u0:
                throw Error("Root did not complete. This is a bug in React.");
              case tr:
                if ((t & 4194048) !== t) break;
              case Tv:
                jn(t), q0(
                  ca,
                  i,
                  t,
                  Al
                ), cc(t, i), o = t, (o & 127) !== 0 ? cv = i : (o & 4194048) !== 0 && (ov = i), An(
                  a,
                  t,
                  Mn,
                  !lr
                );
                break e;
              case Zs:
                sn = null;
                break;
              case Ev:
              case Wb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (X.actQueue !== null)
              Gt(
                a,
                o,
                t,
                sn,
                f0,
                Rv,
                Mn,
                nr,
                $s,
                f,
                null,
                null,
                ca,
                i
              );
            else {
              if ((t & 62914560) === t && (d = _v + Pb - Gl(), 10 < d)) {
                if (An(
                  a,
                  t,
                  Mn,
                  !lr
                ), Tc(a, 0, !0) !== 0) break e;
                Di = t, a.timeoutHandle = vE(
                  og.bind(
                    null,
                    a,
                    o,
                    sn,
                    f0,
                    Rv,
                    t,
                    Mn,
                    nr,
                    $s,
                    lr,
                    f,
                    "Throttled",
                    ca,
                    i
                  ),
                  d
                );
                break e;
              }
              og(
                a,
                o,
                sn,
                f0,
                Rv,
                t,
                Mn,
                nr,
                $s,
                lr,
                f,
                null,
                ca,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      Ca(e);
    }
    function og(e, t, a, i, o, f, d, h, y, p, D, U, A, G) {
      e.timeoutHandle = Ps;
      var ce = t.subtreeFlags, se = null;
      if ((ce & 8192 || (ce & 16785408) === 16785408) && (se = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: mn
      }, ch(t, f, se), ce = (f & 62914560) === f ? _v - Gl() : (f & 4194048) === f ? Ib - Gl() : 0, ce = Mh(se, ce), ce !== null)) {
        Di = f, e.cancelPendingCommit = ce(
          Gt.bind(
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
            D,
            se,
            se.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < se.count ? 0 < se.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : se.imgCount === 1 ? "Suspended on an Image" : 0 < se.imgCount ? "Suspended on Images" : null,
            A,
            G
          )
        ), An(
          e,
          f,
          d,
          !p
        );
        return;
      }
      Gt(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        y,
        D,
        se,
        U,
        A,
        G
      );
    }
    function fg(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!cn(f(), o)) return !1;
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
    function An(e, t, a, i) {
      t &= ~tS, t &= ~nr, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Wl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && Bo(e, a, t);
    }
    function tn() {
      return (pt & (Pl | iu)) === fa ? (xu(0), !1) : !0;
    }
    function rh() {
      if (ut !== null) {
        if (Bt === Dn)
          var e = ut.return;
        else
          e = ut, $o(), Ji(e), om = null, Ip = 0, e = ut;
        for (; e !== null; )
          _y(e.alternate, e), e = e.return;
        ut = null;
      }
    }
    function cc(e, t) {
      (e & 127) !== 0 && (js = t), (e & 4194048) !== 0 && (Ao = t), (e & 62914560) !== 0 && (eb = t), (e & 2080374784) !== 0 && (tb = t);
    }
    function Hu(e, t) {
      el && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        dt,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        dt,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        dt,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        dt,
        "primary-light"
      ));
      var a = ca;
      if (ca = Xl(), lt !== 0 && 0 < a) {
        if (jn(lt), dl === Ev || dl === tr)
          q0(
            a,
            ca,
            t,
            Al
          );
        else {
          var i = ca, o = Al;
          if (el && !(i <= a)) {
            var f = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", d = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                i,
                mt,
                dt,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              mt,
              dt,
              f
            );
          }
        }
        cc(lt, ca);
      }
      if (a = Al, Al = null, (t & 127) !== 0) {
        Al = Gp, o = 0 <= vc && vc < js ? js : vc, i = 0 <= qs && qs < js ? js : qs, f = 0 <= i ? i : 0 <= o ? o : ca, 0 <= cv ? (jn(2), Y0(
          cv,
          f,
          t,
          a
        )) : fv & 127, a = o;
        var h = i, y = Lp, p = 0 < um, D = Ff === wp, U = Ff === iv;
        if (o = ca, i = Gp, f = N1, d = x1, el) {
          if (mt = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var A = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                mt,
                dt,
                A
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              mt,
              dt,
              A
            );
          }
          o > a && (h = D ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", D = U ? "Promise Resolved" : D ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", U = [], d != null && U.push(["Component name", d]), f != null && U.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: U,
                track: mt,
                trackGroup: dt,
                color: h
              }
            }
          }, i ? i.run(
            performance.measure.bind(
              performance,
              D,
              a
            )
          ) : performance.measure(D, a));
        }
        vc = -1.1, Ff = 0, x1 = N1 = null, cv = -1.1, um = qs, qs = -1.1, js = Xl();
      }
      if ((t & 4194048) !== 0 && (Al = Xp, o = 0 <= Oo && Oo < Ao ? Ao : Oo, a = 0 <= ku && ku < Ao ? Ao : ku, i = 0 <= If && If < Ao ? Ao : If, f = 0 <= i ? i : 0 <= a ? a : ca, 0 <= ov ? (jn(256), Y0(
        ov,
        f,
        t,
        Al
      )) : fv & 4194048, U = i, h = Ys, y = 0 < Pf, p = B1 === iv, f = ca, i = Xp, d = IS, D = PS, el && (mt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < U ? U > o && (U = o) : U = o, o > U && h !== null && (A = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          U,
          o,
          mt,
          dt,
          A
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        U,
        o,
        mt,
        dt,
        A
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          mt,
          dt,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        mt,
        dt,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", U = [], D != null && U.push(["Component name", D]), d != null && U.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: U,
            track: mt,
            trackGroup: dt,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), ku = Oo = -1.1, B1 = 0, ov = -1.1, Pf = If, If = -1.1, Ao = Xl()), (t & 62914560) !== 0 && (fv & 62914560) !== 0 && (jn(4194304), Qm(eb, ca)), (t & 2080374784) !== 0 && (fv & 2080374784) !== 0 && (jn(268435456), Qm(tb, ca)), a = e.timeoutHandle, a !== Ps && (e.timeoutHandle = Ps, DT(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Di = 0, rh(), Qt = e, ut = a = gu(
        e.current,
        null
      ), lt = t, Bt = Dn, cu = null, lr = !1, gm = Sl(e, t), eS = !1, dl = Mo, $s = Mn = tS = nr = ar = 0, sn = o0 = null, Rv = !1, (t & 8) !== 0 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - Wl(i), f = 1 << o, t |= e[o], i &= ~f;
      return bc = t, Td(), e = JS(), 1e3 < e - ZS && (X.recentlyCreatedOwnerStacks = 0, ZS = e), Ri.discardPendingWarnings(), a;
    }
    function $n(e, t) {
      Ge = null, X.H = l0, X.getCurrentStack = null, wu = !1, xa = null, t === cm || t === hv ? (t = Lc(), Bt = i0) : t === w1 ? (t = Lc(), Bt = Fb) : Bt = t === k1 ? P1 : t !== null && typeof t == "object" && typeof t.then == "function" ? c0 : Av, cu = t;
      var a = ut;
      a === null ? (dl = u0, Wr(
        e,
        sa(t, e.current)
      )) : a.mode & et && Md(a);
    }
    function Xy() {
      var e = nu.current;
      return e === null ? !0 : (lt & 4194048) === lt ? Wu === null : (lt & 62914560) === lt || (lt & 536870912) !== 0 ? e === Wu : !1;
    }
    function sh() {
      var e = X.H;
      return X.H = l0, e === null ? l0 : e;
    }
    function Qy() {
      var e = X.A;
      return X.A = mT, e;
    }
    function pf(e) {
      Al === null && (Al = e._debugTask == null ? null : e._debugTask);
    }
    function gf() {
      dl = tr, lr || (lt & 4194048) !== lt && nu.current !== null || (gm = !0), (ar & 134217727) === 0 && (nr & 134217727) === 0 || Qt === null || An(
        Qt,
        lt,
        Mn,
        !1
      );
    }
    function vf(e, t, a) {
      var i = pt;
      pt |= Pl;
      var o = sh(), f = Qy();
      if (Qt !== e || lt !== t) {
        if (Lu) {
          var d = e.memoizedUpdaters;
          0 < d.size && (bf(e, lt), d.clear()), Ga(e, t);
        }
        f0 = null, Hu(e, t);
      }
      t = !1, d = dl;
      e: do
        try {
          if (Bt !== Dn && ut !== null) {
            var h = ut, y = cu;
            switch (Bt) {
              case P1:
                rh(), d = Tv;
                break e;
              case i0:
              case Js:
              case Ks:
              case c0:
                nu.current === null && (t = !0);
                var p = Bt;
                if (Bt = Dn, cu = null, Sf(e, h, y, p), a && gm) {
                  d = Mo;
                  break e;
                }
                break;
              default:
                p = Bt, Bt = Dn, cu = null, Sf(e, h, y, p);
            }
          }
          Vy(), d = dl;
          break;
        } catch (D) {
          $n(e, D);
        }
      while (!0);
      return t && e.shellSuspendCounter++, $o(), pt = i, X.H = o, X.A = f, ut === null && (Qt = null, lt = 0, Td()), d;
    }
    function Vy() {
      for (; ut !== null; ) dh(ut);
    }
    function pi(e, t) {
      var a = pt;
      pt |= Pl;
      var i = sh(), o = Qy();
      if (Qt !== e || lt !== t) {
        if (Lu) {
          var f = e.memoizedUpdaters;
          0 < f.size && (bf(e, lt), f.clear()), Ga(e, t);
        }
        f0 = null, zv = Gl() + eE, Hu(e, t);
      } else
        gm = Sl(
          e,
          t
        );
      e: do
        try {
          if (Bt !== Dn && ut !== null)
            t: switch (t = ut, f = cu, Bt) {
              case Av:
                Bt = Dn, cu = null, Sf(
                  e,
                  t,
                  f,
                  Av
                );
                break;
              case Js:
              case Ks:
                if (ty(f)) {
                  Bt = Dn, cu = null, Zy(t);
                  break;
                }
                t = function() {
                  Bt !== Js && Bt !== Ks || Qt !== e || (Bt = Ov), Ca(e);
                }, f.then(t, t);
                break e;
              case i0:
                Bt = Ov;
                break e;
              case Fb:
                Bt = I1;
                break e;
              case Ov:
                ty(f) ? (Bt = Dn, cu = null, Zy(t)) : (Bt = Dn, cu = null, Sf(
                  e,
                  t,
                  f,
                  Ov
                ));
                break;
              case I1:
                var d = null;
                switch (ut.tag) {
                  case 26:
                    d = ut.memoizedState;
                  case 5:
                  case 27:
                    var h = ut;
                    if (d ? ct(d) : h.stateNode.complete) {
                      Bt = Dn, cu = null;
                      var y = h.sibling;
                      if (y !== null) ut = y;
                      else {
                        var p = h.return;
                        p !== null ? (ut = p, os(p)) : ut = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Bt = Dn, cu = null, Sf(
                  e,
                  t,
                  f,
                  I1
                );
                break;
              case c0:
                Bt = Dn, cu = null, Sf(
                  e,
                  t,
                  f,
                  c0
                );
                break;
              case P1:
                rh(), dl = Tv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          X.actQueue !== null ? Vy() : El();
          break;
        } catch (D) {
          $n(e, D);
        }
      while (!0);
      return $o(), X.H = i, X.A = o, pt = a, ut !== null ? Mo : (Qt = null, lt = 0, Td(), dl);
    }
    function El() {
      for (; ut !== null && !Gh(); )
        dh(ut);
    }
    function dh(e) {
      var t = e.alternate;
      (e.mode & et) !== qe ? (ui(e), t = re(
        e,
        es,
        t,
        e,
        bc
      ), Md(e)) : t = re(
        e,
        es,
        t,
        e,
        bc
      ), e.memoizedProps = e.pendingProps, t === null ? os(e) : ut = t;
    }
    function Zy(e) {
      var t = re(e, wl, e);
      e.memoizedProps = e.pendingProps, t === null ? os(e) : ut = t;
    }
    function wl(e) {
      var t = e.alternate, a = (e.mode & et) !== qe;
      switch (a && ui(e), e.tag) {
        case 15:
        case 0:
          t = by(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            lt
          );
          break;
        case 11:
          t = by(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            lt
          );
          break;
        case 5:
          Ji(e);
        default:
          _y(t, e), e = ut = Km(e, bc), t = es(t, e, bc);
      }
      return a && Md(e), t;
    }
    function Sf(e, t, a, i) {
      $o(), Ji(t), om = null, Ip = 0;
      var o = t.return;
      try {
        if (hy(
          e,
          o,
          t,
          a,
          lt
        )) {
          dl = u0, Wr(
            e,
            sa(a, e.current)
          ), ut = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw ut = o, f;
        dl = u0, Wr(
          e,
          sa(a, e.current)
        ), ut = null;
        return;
      }
      t.flags & 32768 ? (st || i === Av ? e = !0 : gm || (lt & 536870912) !== 0 ? e = !1 : (lr = e = !0, (i === Js || i === Ks || i === i0 || i === c0) && (i = nu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Jy(t, e)) : os(t);
    }
    function os(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Jy(
            t,
            lr
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, ui(t), a = re(
          t,
          Ry,
          a,
          t,
          bc
        ), (t.mode & et) !== qe && Hr(t), a !== null) {
          ut = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          ut = t;
          return;
        }
        ut = t = e;
      } while (t !== null);
      dl === Mo && (dl = Wb);
    }
    function Jy(e, t) {
      do {
        var a = eg(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, ut = a;
          return;
        }
        if ((e.mode & et) !== qe) {
          Hr(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          ut = e;
          return;
        }
        ut = e = a;
      } while (e !== null);
      dl = Tv, ut = null;
    }
    function Gt(e, t, a, i, o, f, d, h, y, p, D, U, A, G) {
      e.cancelPendingCommit = null;
      do
        fs();
      while (Kl !== ir);
      if (Ri.flushLegacyContextWarning(), Ri.flushPendingUnsafeLifecycleWarnings(), (pt & (Pl | iu)) !== fa)
        throw Error("Should not already be working.");
      if (jn(a), p === Zs ? Xm(
        A,
        G,
        a,
        Al
      ) : i !== null ? l1(
        A,
        G,
        a,
        i,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        Al
      ) : t1(
        A,
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
        if (f = t.lanes | t.childLanes, f |= D1, nd(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === Qt && (ut = Qt = null, lt = 0), vm = t, cr = e, Di = a, nS = f, iS = o, iE = i, uS = G, cE = U, Mi = Dv, oE = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ef(mo, function() {
          return y0 = window.event, Mi === Dv && (Mi = aS), rs(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), To = null, Wf = Xl(), U !== null && a1(
          G,
          Wf,
          U,
          Al
        ), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = X.T, X.T = null, o = Ot.p, Ot.p = Ml, d = pt, pt |= iu;
          try {
            i1(e, t, a);
          } finally {
            pt = d, Ot.p = o, X.T = i;
          }
        }
        Kl = lE, ba(), Nu(), Ky();
      }
    }
    function ba() {
      if (Kl === lE) {
        Kl = ir;
        var e = cr, t = vm, a = Di, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = X.T, X.T = null;
          var o = Ot.p;
          Ot.p = Ml;
          var f = pt;
          pt |= iu;
          try {
            ym = a, pm = e, wc(), ns(t, e), pm = ym = null, a = gS;
            var d = Sd(e.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && N0(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && wm(h)) {
                var p = y.start, D = y.end;
                if (D === void 0 && (D = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    D,
                    h.value.length
                  );
                else {
                  var U = h.ownerDocument || document, A = U && U.defaultView || window;
                  if (A.getSelection) {
                    var G = A.getSelection(), ce = h.textContent.length, se = Math.min(
                      y.start,
                      ce
                    ), kt = y.end === void 0 ? se : Math.min(y.end, ce);
                    !G.extend && se > kt && (d = kt, kt = se, se = d);
                    var ht = H0(
                      h,
                      se
                    ), E = H0(
                      h,
                      kt
                    );
                    if (ht && E && (G.rangeCount !== 1 || G.anchorNode !== ht.node || G.anchorOffset !== ht.offset || G.focusNode !== E.node || G.focusOffset !== E.offset)) {
                      var O = U.createRange();
                      O.setStart(ht.node, ht.offset), G.removeAllRanges(), se > kt ? (G.addRange(O), G.extend(E.node, E.offset)) : (O.setEnd(E.node, E.offset), G.addRange(O));
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
            Vv = !!pS, gS = pS = null;
          } finally {
            pt = f, Ot.p = o, X.T = i;
          }
        }
        e.current = t, Kl = aE;
      }
    }
    function Nu() {
      if (Kl === aE) {
        Kl = ir;
        var e = oE;
        if (e !== null) {
          Wf = Xl();
          var t = Eo, a = Wf;
          !el || a <= t || console.timeStamp(
            e,
            t,
            a,
            mt,
            dt,
            "secondary-light"
          );
        }
        e = cr, t = vm, a = Di;
        var i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = X.T, X.T = null;
          var o = Ot.p;
          Ot.p = Ml;
          var f = pt;
          pt |= iu;
          try {
            ym = a, pm = e, wc(), uh(
              e,
              t.alternate,
              t
            ), pm = ym = null;
          } finally {
            pt = f, Ot.p = o, X.T = i;
          }
        }
        e = uS, t = cE, Eo = Xl(), e = t === null ? e : Wf, t = Eo, a = Mi === lS, i = Al, To !== null ? w0(
          e,
          t,
          To,
          !1,
          i
        ) : !el || t <= e || (i ? i.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            e,
            t,
            mt,
            dt,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          e,
          t,
          mt,
          dt,
          a ? "error" : "secondary-dark"
        )), Kl = nE;
      }
    }
    function Ky() {
      if (Kl === uE || Kl === nE) {
        if (Kl === uE) {
          var e = Eo;
          Eo = Xl();
          var t = Eo, a = Mi === lS;
          !el || t <= e || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            mt,
            dt,
            a ? " error" : "secondary-light"
          ), Mi !== lS && (Mi = tE);
        }
        Kl = ir, Lh(), e = cr;
        var i = vm;
        t = Di, a = iE;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? Kl = Mv : (Kl = ir, vm = cr = null, $y(
          e,
          e.pendingLanes
        ), ks = 0, s0 = null);
        var f = e.pendingLanes;
        if (f === 0 && (ur = null), o || yh(e), f = Hl(t), i = i.stateNode, Dl && typeof Dl.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case Ml:
                var h = Op;
                break;
              case Fl:
                h = Xh;
                break;
              case ia:
                h = mo;
                break;
              case yc:
                h = Qh;
                break;
              default:
                h = mo;
            }
            Dl.onCommitFiberRoot(
              yo,
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
        if (Lu && e.memoizedUpdaters.clear(), Gy(), a !== null) {
          d = X.T, h = Ot.p, Ot.p = Ml, X.T = null;
          try {
            var y = e.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], D = rg(p.stack);
              re(
                p.source,
                y,
                p.value,
                D
              );
            }
          } finally {
            X.T = d, Ot.p = h;
          }
        }
        (Di & 3) !== 0 && fs(), Ca(e), f = e.pendingLanes, (t & 261930) !== 0 && (f & 42) !== 0 ? (sv = !0, e === cS ? r0++ : (r0 = 0, cS = e)) : r0 = 0, o || cc(t, Eo), xu(0);
      }
    }
    function rg(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function $y(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ur(t)));
    }
    function fs() {
      return ba(), Nu(), Ky(), rs();
    }
    function rs() {
      if (Kl !== Mv) return !1;
      var e = cr, t = nS;
      nS = 0;
      var a = Hl(Di), i = ia > a ? ia : a;
      a = X.T;
      var o = Ot.p;
      try {
        Ot.p = i, X.T = null;
        var f = iS;
        iS = null, i = cr;
        var d = Di;
        if (Kl = ir, vm = cr = null, Di = 0, (pt & (Pl | iu)) !== fa)
          throw Error("Cannot flush passive effects while already rendering.");
        jn(d), oS = !0, Cv = !1;
        var h = 0;
        if (To = null, h = Gl(), Mi === tE)
          Qm(
            Eo,
            h,
            cT
          );
        else {
          var y = Eo, p = h, D = Mi === aS;
          !el || p <= y || (Al ? Al.run(
            console.timeStamp.bind(
              console,
              D ? "Waiting for Paint" : "Waiting",
              y,
              p,
              mt,
              dt,
              "secondary-light"
            )
          ) : console.timeStamp(
            D ? "Waiting for Paint" : "Waiting",
            y,
            p,
            mt,
            dt,
            "secondary-light"
          ));
        }
        y = pt, pt |= iu;
        var U = i.current;
        wc(), oh(U);
        var A = i.current;
        U = uS, wc(), qy(
          i,
          A,
          d,
          f,
          U
        ), yh(i), pt = y;
        var G = Gl();
        if (A = h, U = Al, To !== null ? w0(
          A,
          G,
          To,
          !0,
          U
        ) : !el || G <= A || (U ? U.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            A,
            G,
            mt,
            dt,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          A,
          G,
          mt,
          dt,
          "secondary-dark"
        )), cc(d, G), xu(0, !1), Cv ? i === s0 ? ks++ : (ks = 0, s0 = i) : ks = 0, Cv = oS = !1, Dl && typeof Dl.onPostCommitFiberRoot == "function")
          try {
            Dl.onPostCommitFiberRoot(yo, i);
          } catch (se) {
            Gu || (Gu = !0, console.error(
              "React instrumentation encountered an error: %o",
              se
            ));
          }
        var ce = i.current.stateNode;
        return ce.effectDuration = 0, ce.passiveEffectDuration = 0, !0;
      } finally {
        Ot.p = o, X.T = a, $y(e, t);
      }
    }
    function Ea(e, t, a) {
      t = sa(a, t), Z0(t), t = Zd(e.stateNode, t, 2), e = Eu(e, t, 2), e !== null && (Hn(e, 2), Ca(e));
    }
    function ke(e, t, a) {
      if (Sm = !1, e.tag === 3)
        Ea(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Ea(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ur === null || !ur.has(i))) {
              e = sa(a, e), Z0(e), a = Jd(2), i = Eu(t, a, 2), i !== null && (Kd(
                a,
                i,
                t,
                e
              ), Hn(i, 2), Ca(i));
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
    function hh(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new pT();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (eS = !0, o.add(a), i = Ma.bind(null, e, t, a), Lu && bf(e, a), t.then(i, i));
    }
    function Ma(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, (a & 127) !== 0 ? 0 > vc && (js = vc = Xl(), Gp = uv("Promise Resolved"), Ff = iv) : (a & 4194048) !== 0 && 0 > ku && (Ao = ku = Xl(), Xp = uv("Promise Resolved"), B1 = iv), Ly() && X.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Qt === e && (lt & a) === a && (dl === tr || dl === Ev && (lt & 62914560) === lt && Gl() - _v < Pb ? (pt & Pl) === fa && Hu(e, 0) : tS |= a, $s === lt && ($s = 0)), Ca(e);
    }
    function ky(e, t) {
      t === 0 && (t = No()), e = la(e, t), e !== null && (Hn(e, t), Ca(e));
    }
    function gi(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), ky(e, a);
    }
    function no(e, t) {
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
      i !== null && i.delete(t), ky(e, a);
    }
    function kn(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Oa;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && re(
            o,
            mh,
            i,
            o
          ) : kn(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? re(
            o,
            mh,
            i,
            o
          ) : o.subtreeFlags & 67108864 && re(
            o,
            kn,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function mh(e, t) {
      me(!0);
      try {
        ih(t), wy(t), jy(e, t.alternate, t, !1), cs(e, t, 0, null, !1, 0);
      } finally {
        me(!1);
      }
    }
    function yh(e) {
      var t = !0;
      e.current.mode & (Ba | Oi) || (t = !1), kn(
        e,
        e.current,
        t
      );
    }
    function On(e) {
      if ((pt & Pl) === fa) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = he(e) || "ReactComponent", Uv !== null) {
            if (Uv.has(t)) return;
            Uv.add(t);
          } else Uv = /* @__PURE__ */ new Set([t]);
          re(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function bf(e, t) {
      Lu && e.memoizedUpdaters.forEach(function(a) {
        Ol(e, a, t);
      });
    }
    function Ef(e, t) {
      var a = X.actQueue;
      return a !== null ? (a.push(t), ST) : Ap(e, t);
    }
    function ss(e) {
      Ly() && X.actQueue === null && re(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          he(e)
        );
      });
    }
    function Ca(e) {
      e !== bm && e.next === null && (bm === null ? Hv = bm = e : bm = bm.next = e), Nv = !0, X.actQueue !== null ? rS || (rS = !0, dg()) : fS || (fS = !0, dg());
    }
    function xu(e, t) {
      if (!sS && Nv) {
        sS = !0;
        do
          for (var a = !1, i = Hv; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Wl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, ds(i, f));
            } else
              f = lt, f = Tc(
                i,
                i === Qt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== Ps
              ), (f & 3) === 0 || Sl(i, f) || (a = !0, ds(i, f));
            i = i.next;
          }
        while (a);
        sS = !1;
      }
    }
    function sg() {
      y0 = window.event, ph();
    }
    function ph() {
      Nv = rS = fS = !1;
      var e = 0;
      or !== 0 && Py() && (e = or);
      for (var t = Gl(), a = null, i = Hv; i !== null; ) {
        var o = i.next, f = Tf(i, t);
        f === 0 ? (i.next = null, a === null ? Hv = o : a.next = o, o === null && (bm = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (Nv = !0)), i = o;
      }
      Kl !== ir && Kl !== Mv || xu(e), or !== 0 && (or = 0);
    }
    function Tf(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Wl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = ad(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Qt, a = lt, a = Tc(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ps
      ), i = e.callbackNode, a === 0 || e === t && (Bt === Js || Bt === Ks) || e.cancelPendingCommit !== null)
        return i !== null && gh(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || Sl(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || X.actQueue !== null && i !== dS)
          gh(i);
        else return t;
        switch (Hl(a)) {
          case Ml:
          case Fl:
            a = Xh;
            break;
          case ia:
            a = mo;
            break;
          case yc:
            a = Qh;
            break;
          default:
            a = mo;
        }
        return i = Wy.bind(null, e), X.actQueue !== null ? (X.actQueue.push(i), a = dS) : a = Ap(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && gh(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Wy(e, t) {
      if (sv = rv = !1, y0 = window.event, Kl !== ir && Kl !== Mv)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Mi === Dv && (Mi = aS), fs() && e.callbackNode !== a)
        return null;
      var i = lt;
      return i = Tc(
        e,
        e === Qt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ps
      ), i === 0 ? null : (cg(
        e,
        i,
        t
      ), Tf(e, Gl()), e.callbackNode != null && e.callbackNode === a ? Wy.bind(null, e) : null);
    }
    function ds(e, t) {
      if (fs()) return null;
      rv = sv, sv = !1, cg(e, t, !0);
    }
    function gh(e) {
      e !== dS && e !== null && wh(e);
    }
    function dg() {
      X.actQueue !== null && X.actQueue.push(function() {
        return ph(), null;
      }), MT(function() {
        (pt & (Pl | iu)) !== fa ? Ap(
          Op,
          sg
        ) : ph();
      });
    }
    function Fy() {
      if (or === 0) {
        var e = ws;
        e === 0 && (e = Gf, Gf <<= 1, (Gf & 261888) === 0 && (Gf = 256)), or = e;
      }
      return or;
    }
    function St(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (vt(e, "action"), Er("" + e));
    }
    function Ht(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function rt(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = St(
          (o[Ra] || null).action
        ), d = i.submitter;
        d && (t = (t = d[Ra] || null) ? St(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new Ig(
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
                  if (or !== 0) {
                    var y = d ? Ht(
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
                  typeof f == "function" && (h.preventDefault(), y = d ? Ht(
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
    function nt(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        O1(i);
      }
      e.currentTarget = null;
    }
    function Dt(e, t) {
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
              y !== null ? re(
                y,
                nt,
                f,
                h,
                p
              ) : nt(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? re(
                y,
                nt,
                f,
                h,
                p
              ) : nt(f, h, p), o = y;
            }
        }
      }
    }
    function Be(e, t) {
      hS.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[po];
      a === void 0 && (a = t[po] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (vh(t, e, 2, !1), a.add(i));
    }
    function Bu(e, t, a) {
      hS.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), vh(
        a,
        e,
        i,
        t
      );
    }
    function oc(e) {
      if (!e[xv]) {
        e[xv] = !0, Kg.forEach(function(a) {
          a !== "selectionchange" && (hS.has(a) || Bu(a, !1, e), Bu(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xv] || (t[xv] = !0, Bu("selectionchange", !1, t));
      }
    }
    function vh(e, t, a, i) {
      switch (Hh(t)) {
        case Ml:
          var o = dp;
          break;
        case Fl:
          o = kl;
          break;
        default:
          o = hp;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !m1 || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
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
              if (d = te(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      yd(function() {
        var p = f, D = xn(a), U = [];
        e: {
          var A = VS.get(e);
          if (A !== void 0) {
            var G = Ig, ce = e;
            switch (e) {
              case "keypress":
                if (Tr(a) === 0) break e;
              case "keydown":
              case "keyup":
                G = x2;
                break;
              case "focusin":
                ce = "focus", G = v1;
                break;
              case "focusout":
                ce = "blur", G = v1;
                break;
              case "beforeblur":
              case "afterblur":
                G = v1;
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
                G = CS;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                G = T2;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                G = q2;
                break;
              case GS:
              case LS:
              case XS:
                G = R2;
                break;
              case QS:
                G = w2;
                break;
              case "scroll":
              case "scrollend":
                G = b2;
                break;
              case "wheel":
                G = L2;
                break;
              case "copy":
              case "cut":
              case "paste":
                G = z2;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                G = HS;
                break;
              case "toggle":
              case "beforetoggle":
                G = Q2;
            }
            var se = (t & 4) !== 0, kt = !se && (e === "scroll" || e === "scrollend"), ht = se ? A !== null ? A + "Capture" : null : A;
            se = [];
            for (var E = p, O; E !== null; ) {
              var _ = E;
              if (O = _.stateNode, _ = _.tag, _ !== 5 && _ !== 26 && _ !== 27 || O === null || ht === null || (_ = yu(E, ht), _ != null && se.push(
                Lt(
                  E,
                  _,
                  O
                )
              )), kt) break;
              E = E.return;
            }
            0 < se.length && (A = new G(
              A,
              ce,
              null,
              a,
              D
            ), U.push({
              event: A,
              listeners: se
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (A = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", A && a !== Mp && (ce = a.relatedTarget || a.fromElement) && (te(ce) || ce[Ai]))
              break e;
            if ((G || A) && (A = D.window === D ? D : (A = D.ownerDocument) ? A.defaultView || A.parentWindow : window, G ? (ce = a.relatedTarget || a.toElement, G = p, ce = ce ? te(ce) : null, ce !== null && (kt = Ie(ce), se = ce.tag, ce !== kt || se !== 5 && se !== 27 && se !== 6) && (ce = null)) : (G = null, ce = p), G !== ce)) {
              if (se = CS, _ = "onMouseLeave", ht = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (se = HS, _ = "onPointerLeave", ht = "onPointerEnter", E = "pointer"), kt = G == null ? A : ye(G), O = ce == null ? A : ye(ce), A = new se(
                _,
                E + "leave",
                G,
                a,
                D
              ), A.target = kt, A.relatedTarget = O, _ = null, te(D) === p && (se = new se(
                ht,
                E + "enter",
                ce,
                a,
                D
              ), se.target = O, se.relatedTarget = kt, _ = se), kt = _, G && ce)
                t: {
                  for (se = uo, ht = G, E = ce, O = 0, _ = ht; _; _ = se(_))
                    O++;
                  _ = 0;
                  for (var K = E; K; K = se(K))
                    _++;
                  for (; 0 < O - _; )
                    ht = se(ht), O--;
                  for (; 0 < _ - O; )
                    E = se(E), _--;
                  for (; O--; ) {
                    if (ht === E || E !== null && ht === E.alternate) {
                      se = ht;
                      break t;
                    }
                    ht = se(ht), E = se(E);
                  }
                  se = null;
                }
              else se = null;
              G !== null && Sh(
                U,
                A,
                G,
                se,
                !1
              ), ce !== null && kt !== null && Sh(
                U,
                kt,
                ce,
                se,
                !0
              );
            }
          }
          e: {
            if (A = p ? ye(p) : window, G = A.nodeName && A.nodeName.toLowerCase(), G === "select" || G === "input" && A.type === "file")
              var fe = Yi;
            else if (jm(A))
              if (YS)
                fe = _r;
              else {
                fe = qm;
                var Le = e1;
              }
            else
              G = A.nodeName, !G || G.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? p && mu(p.elementType) && (fe = Yi) : fe = Ym;
            if (fe && (fe = fe(e, p))) {
              Or(
                U,
                fe,
                a,
                D
              );
              break e;
            }
            Le && Le(e, A, p), e === "focusout" && p && A.type === "number" && p.memoizedProps.value != null && zm(A, "number", A.value);
          }
          switch (Le = p ? ye(p) : window, e) {
            case "focusin":
              (jm(Le) || Le.contentEditable === "true") && (Fh = Le, b1 = p, jp = null);
              break;
            case "focusout":
              jp = b1 = Fh = null;
              break;
            case "mousedown":
              E1 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              E1 = !1, x0(
                U,
                a,
                D
              );
              break;
            case "selectionchange":
              if (K2) break;
            case "keydown":
            case "keyup":
              x0(
                U,
                a,
                D
              );
          }
          var _e;
          if (S1)
            e: {
              switch (e) {
                case "compositionstart":
                  var Ae = "onCompositionStart";
                  break e;
                case "compositionend":
                  Ae = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  Ae = "onCompositionUpdate";
                  break e;
              }
              Ae = void 0;
            }
          else
            Wh ? Qo(e, a) && (Ae = "onCompositionEnd") : e === "keydown" && a.keyCode === NS && (Ae = "onCompositionStart");
          Ae && (xS && a.locale !== "ko" && (Wh || Ae !== "onCompositionStart" ? Ae === "onCompositionEnd" && Wh && (_e = Mc()) : (Zf = D, y1 = "value" in Zf ? Zf.value : Zf.textContent, Wh = !0)), Le = Fn(
            p,
            Ae
          ), 0 < Le.length && (Ae = new US(
            Ae,
            e,
            null,
            a,
            D
          ), U.push({
            event: Ae,
            listeners: Le
          }), _e ? Ae.data = _e : (_e = ai(a), _e !== null && (Ae.data = _e)))), (_e = Z2 ? Bm(e, a) : pd(e, a)) && (Ae = Fn(
            p,
            "onBeforeInput"
          ), 0 < Ae.length && (Le = new M2(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            D
          ), U.push({
            event: Le,
            listeners: Ae
          }), Le.data = _e)), rt(
            U,
            e,
            p,
            a,
            D
          );
        }
        Dt(U, t);
      });
    }
    function Lt(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Fn(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = yu(e, a), o != null && i.unshift(
          Lt(e, o, f)
        ), o = yu(e, t), o != null && i.push(
          Lt(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function uo(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Sh(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = yu(a, f), p != null && d.unshift(
          Lt(a, p, y)
        )) : o || (p = yu(a, f), p != null && d.push(
          Lt(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Ta(e, t) {
      M0(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || DS || (DS = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Xu,
        possibleRegistrationNames: Qf
      };
      mu(e) || typeof t.is == "string" || Pv(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function nl(e, t, a, i) {
      t !== a && (a = In(a), In(t) !== a && (i[e] = t));
    }
    function hs(e, t, a) {
      t.forEach(function(i) {
        a[vi(i)] = i === "style" ? fc(e) : e.getAttribute(i);
      });
    }
    function ul(e, t) {
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
    function bh(e, t) {
      return e = e.namespaceURI === Je || e.namespaceURI === We ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function In(e) {
      return wa(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Ui(e)
      ), fu(e)), (typeof e == "string" ? e : "" + e).replace(bT, `
`).replace(ET, "");
    }
    function Iy(e, t) {
      return t = In(t), In(e) === t;
    }
    function At(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (br(i, t, !1), t === "body" || t === "textarea" && i === "" || Dc(e, i)) : (typeof i == "number" || typeof i == "bigint") && (br("" + i, t, !1), t !== "body" && Dc(e, "" + i));
          break;
        case "className":
          gr(e, "class", i);
          break;
        case "tabIndex":
          gr(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          gr(e, a, i);
          break;
        case "style":
          Hm(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            gr(e, "data", i);
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
          vt(i, a), i = Er("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || qv || (qv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || jv || (jv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Bv ? t !== "button" || o.type == null || o.type === "submit" || Bv ? typeof i == "function" && (o.name == null || hE || (hE = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || qv || (qv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || jv || (jv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Bv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Bv = !0, console.error(
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
            typeof f == "function" && (a === "formAction" ? (t !== "input" && At(e, t, "name", o.name, o, null), At(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), At(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), At(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (At(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), At(e, t, "method", o.method, o, null), At(
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
          vt(i, a), i = Er("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && ul(a, i), e.onclick = mn);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && ul(a, i), Be("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && ul(a, i), Be("scrollend", e));
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
          vt(i, a), a = Er("" + i), e.setAttributeNS(Ws, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (vt(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Yv[a] || (Yv[a] = !0, console.error(
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
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (vt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (vt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (vt(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Be("beforetoggle", e), Be("toggle", e), jo(e, "popover", i);
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
            mS,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          su(
            e,
            mS,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          su(
            e,
            mS,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), jo(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          mE || i == null || typeof i != "object" || (mE = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = z0(a), jo(e, a, i)) : Xu.hasOwnProperty(a) && i != null && typeof i != "function" && ul(a, i);
      }
    }
    function Af(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          Hm(e, i, f);
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
          typeof i == "string" ? Dc(e, i) : (typeof i == "number" || typeof i == "bigint") && Dc(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && ul(a, i), Be("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && ul(a, i), Be("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && ul(a, i), e.onclick = mn);
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
            i != null && typeof i != "function" && ul(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[Ra] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : jo(e, a, i);
            }
      }
    }
    function It(e, t, a) {
      switch (Ta(t, a), t) {
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
          Be("error", e), Be("load", e);
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
                    At(e, t, f, d, a, null);
                }
            }
          o && At(e, t, "srcSet", a.srcSet, a, null), i && At(e, t, "src", a.src, a, null);
          return;
        case "input":
          ta("input", a), Be("invalid", e);
          var h = f = d = o = null, y = null, p = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var D = a[i];
              if (D != null)
                switch (i) {
                  case "name":
                    o = D;
                    break;
                  case "type":
                    d = D;
                    break;
                  case "checked":
                    y = D;
                    break;
                  case "defaultChecked":
                    p = D;
                    break;
                  case "value":
                    f = D;
                    break;
                  case "defaultValue":
                    h = D;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (D != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    At(e, t, i, D, a, null);
                }
            }
          ra(e, a), cd(
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
          ta("select", a), Be("invalid", e), i = d = f = null;
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
                  At(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          od(e, a), t = f, a = d, e.multiple = !!i, t != null ? du(e, !!i, t, !1) : a != null && du(e, !!i, a, !0);
          return;
        case "textarea":
          ta("textarea", a), Be("invalid", e), f = o = i = null;
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
                  At(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          Oc(e, a), qo(e, i, o, f);
          return;
        case "option":
          _0(e, a);
          for (y in a)
            a.hasOwnProperty(y) && (i = a[y], i != null) && (y === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : At(e, t, y, i, a, null));
          return;
        case "dialog":
          Be("beforetoggle", e), Be("toggle", e), Be("cancel", e), Be("close", e);
          break;
        case "iframe":
        case "object":
          Be("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < d0.length; i++)
            Be(d0[i], e);
          break;
        case "image":
          Be("error", e), Be("load", e);
          break;
        case "details":
          Be("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Be("error", e), Be("load", e);
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
                  At(e, t, p, i, a, null);
              }
          return;
        default:
          if (mu(t)) {
            for (D in a)
              a.hasOwnProperty(D) && (i = a[D], i !== void 0 && Af(
                e,
                t,
                D,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && At(e, t, h, i, a, null));
    }
    function zl(e, t, a, i) {
      switch (Ta(t, i), t) {
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
          var o = null, f = null, d = null, h = null, y = null, p = null, D = null;
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
                  i.hasOwnProperty(G) || At(
                    e,
                    t,
                    G,
                    null,
                    i,
                    U
                  );
              }
          }
          for (var A in i) {
            var G = i[A];
            if (U = a[A], i.hasOwnProperty(A) && (G != null || U != null))
              switch (A) {
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
                  D = G;
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
                  G !== U && At(
                    e,
                    t,
                    A,
                    G,
                    i,
                    U
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || dE || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), dE = !0), !t || i || sE || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), sE = !0), Bi(
            e,
            d,
            h,
            y,
            p,
            D,
            f,
            o
          );
          return;
        case "select":
          G = d = h = A = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  G = y;
                default:
                  i.hasOwnProperty(f) || At(
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
                  A = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && At(
                    e,
                    t,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, t = d, a = G, A != null ? du(e, !!t, A, !1) : !!a != !!t && (i != null ? du(e, !!t, i, !0) : du(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          G = A = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  At(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  A = o;
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
                  o !== f && At(e, t, d, o, i, f);
              }
          Rc(e, A, G);
          return;
        case "option":
          for (var ce in a)
            A = a[ce], a.hasOwnProperty(ce) && A != null && !i.hasOwnProperty(ce) && (ce === "selected" ? e.selected = !1 : At(
              e,
              t,
              ce,
              null,
              i,
              A
            ));
          for (y in i)
            A = i[y], G = a[y], i.hasOwnProperty(y) && A !== G && (A != null || G != null) && (y === "selected" ? e.selected = A && typeof A != "function" && typeof A != "symbol" : At(
              e,
              t,
              y,
              A,
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
          for (var se in a)
            A = a[se], a.hasOwnProperty(se) && A != null && !i.hasOwnProperty(se) && At(
              e,
              t,
              se,
              null,
              i,
              A
            );
          for (p in i)
            if (A = i[p], G = a[p], i.hasOwnProperty(p) && A !== G && (A != null || G != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (A != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  At(
                    e,
                    t,
                    p,
                    A,
                    i,
                    G
                  );
              }
          return;
        default:
          if (mu(t)) {
            for (var kt in a)
              A = a[kt], a.hasOwnProperty(kt) && A !== void 0 && !i.hasOwnProperty(kt) && Af(
                e,
                t,
                kt,
                void 0,
                i,
                A
              );
            for (D in i)
              A = i[D], G = a[D], !i.hasOwnProperty(D) || A === G || A === void 0 && G === void 0 || Af(
                e,
                t,
                D,
                A,
                i,
                G
              );
            return;
          }
      }
      for (var ht in a)
        A = a[ht], a.hasOwnProperty(ht) && A != null && !i.hasOwnProperty(ht) && At(e, t, ht, null, i, A);
      for (U in i)
        A = i[U], G = a[U], !i.hasOwnProperty(U) || A === G || A == null && G == null || At(e, t, U, A, i, G);
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
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (ea(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || ve.has(f) ? (ea(d, f), i += o + f.replace(Q, "-$1").toLowerCase().replace(de, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Q, "-$1").toLowerCase().replace(de, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = In(i), In(t) !== i && (a.style = fc(e)));
      }
    }
    function Ua(e, t, a, i, o, f) {
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
            if (vt(i, t), e === "" + i)
              return;
        }
      nl(t, e, i, f);
    }
    function Eh(e, t, a, i, o, f) {
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
      nl(t, e, i, f);
    }
    function Th(e, t, a, i, o, f) {
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
            if (vt(i, a), e === "" + i)
              return;
        }
      nl(t, e, i, f);
    }
    function Of(e, t, a, i, o, f) {
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
            if (!isNaN(i) && (vt(i, t), e === "" + i))
              return;
        }
      nl(t, e, i, f);
    }
    function ms(e, t, a, i, o, f) {
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
            if (vt(i, t), a = Er("" + i), e === a)
              return;
        }
      nl(t, e, i, f);
    }
    function Ha(e, t, a, i) {
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
                typeof p != "function" && ul(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || nl(
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
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = bh(e, p), nl(
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
                    ), nl(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === Co && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = xi(
                      e,
                      y,
                      p
                    ), nl(
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
              typeof y != "function" && ul(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || nl(
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
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = bh(e, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  Ua(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Ua(
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
                  f.delete(p), nl(
                    p,
                    e.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), nl(
                    p,
                    e.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), nl(
                    p,
                    e.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(p), d = e.getAttribute("data"), nl(
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
                  ms(
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
                  } else if (d === TT) {
                    f.delete(p.toLowerCase()), nl(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  ms(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  ms(
                    e,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  Th(
                    e,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  Th(
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
                  Th(
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
                  Eh(
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
                    var D = d = p, U = o;
                    if (f.delete(D), h = h.getAttribute(D), h === null)
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
                          if (vt(y, d), h === "" + y)
                            break e;
                      }
                    nl(
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
                    if (h = e, D = d = p, U = o, f.delete(D), h = h.getAttribute(D), h === null)
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
                          if (!(isNaN(y) || 1 > y) && (vt(y, d), h === "" + y))
                            break e;
                      }
                    nl(
                      d,
                      h,
                      y,
                      U
                    );
                  }
                  continue;
                case "rowSpan":
                  Of(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  Of(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Ua(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Ua(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Ua(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Ua(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Ua(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Ua(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Ua(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Ua(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Ua(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Ua(
                    e,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || Yv[p] || (Yv[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), Eh(
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
                    h = z0(p), d = !1, i.context === Co && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (D = p.toLowerCase(), D = lu.hasOwnProperty(
                      D
                    ) && lu[D] || null, D !== null && D !== p && (d = !0, f.delete(D)), f.delete(h));
                    e: if (D = e, U = h, h = y, hn(U))
                      if (D.hasAttribute(U))
                        D = D.getAttribute(
                          U
                        ), vt(
                          h,
                          U
                        ), h = D === "" + h ? h : D;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (D = U.toLowerCase().slice(0, 5), D !== "data-" && D !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || nl(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && hs(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function hg(e, t) {
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
    function Aa(e) {
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
    function mg() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && Aa(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var D = y.transferSize, U = y.initiatorType;
              D && Aa(U) && (y = y.responseEnd, d += D * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, t += 8 * (f + d) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function ys(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function yg(e) {
      switch (e) {
        case We:
          return Tm;
        case Je:
          return Gv;
        default:
          return Co;
      }
    }
    function Si(e, t) {
      if (e === Co)
        switch (t) {
          case "svg":
            return Tm;
          case "math":
            return Gv;
          default:
            return Co;
        }
      return e === Tm && t === "foreignObject" ? Co : e;
    }
    function Rf(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Py() {
      var e = window.event;
      return e && e.type === "popstate" ? e === vS ? !1 : (vS = e, !0) : (vS = null, !1);
    }
    function qu() {
      var e = window.event;
      return e && e !== y0 ? e.type : null;
    }
    function _f() {
      var e = window.event;
      return e && e !== y0 ? e.timeStamp : -1.1;
    }
    function pg(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function gg(e, t, a) {
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
    function vg() {
    }
    function Ah(e, t, a, i) {
      zl(e, t, a, i), e[Ra] = i;
    }
    function Oh(e) {
      Dc(e, "");
    }
    function c1(e, t, a) {
      e.nodeValue = a;
    }
    function Sg(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[Ra] || null;
        if (t !== null) {
          var a = ue(e);
          a !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, re(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, re(a, function() {
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
    function bg(e, t) {
      e.removeChild(t);
    }
    function Eg(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function io(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === m0 || a === wv) {
            if (i === 0) {
              e.removeChild(o), ro(t);
              return;
            }
            i--;
          } else if (a === h0 || a === fr || a === Is || a === Em || a === Fs)
            i++;
          else if (a === OT)
            Ei(
              e.ownerDocument.documentElement
            );
          else if (a === _T) {
            a = e.ownerDocument.head, Ei(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Xf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === RT && Ei(e.ownerDocument.body);
        a = o;
      } while (a);
      ro(t);
    }
    function ps(e, t) {
      var a = e;
      e = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === m0) {
            if (e === 0) break;
            e--;
          } else
            a !== h0 && a !== fr && a !== Is && a !== Em || e++;
        a = i;
      } while (a);
    }
    function Tg(e) {
      ps(e, !0);
    }
    function Ag(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Og(e) {
      e.nodeValue = "";
    }
    function Rg(e) {
      ps(e, !1);
    }
    function _g(e, t) {
      t = t[zT], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function zg(e, t) {
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
    function Dg(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Xf])
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
          vt(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = ln(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Mg(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = ln(e.nextSibling), e === null)) return null;
      return e;
    }
    function Mt(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = ln(e.nextSibling), e === null)) return null;
      return e;
    }
    function gs(e) {
      return e.data === fr || e.data === Is;
    }
    function ep(e) {
      return e.data === Em || e.data === fr && e.ownerDocument.readyState !== pE;
    }
    function Cg(e, t) {
      var a = e.ownerDocument;
      if (e.data === Is)
        e._reactRetry = t;
      else if (e.data !== fr || a.readyState !== pE)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function ln(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === h0 || t === Em || t === fr || t === Is || t === Fs || t === yS || t === yE)
            break;
          if (t === m0 || t === wv)
            return null;
        }
      }
      return e;
    }
    function Ug(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[vi(f.name)] = f.name.toLowerCase() === "style" ? fc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? e.data === Fs ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Hg(e, t, a) {
      return a === null || a[AT] !== !0 ? (e.nodeValue === t ? e = null : (t = In(t), e = In(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Df(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === m0 || a === wv) {
            if (t === 0)
              return ln(e.nextSibling);
            t--;
          } else
            a !== h0 && a !== Em && a !== fr && a !== Is && a !== Fs || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function co(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === h0 || a === Em || a === fr || a === Is || a === Fs) {
            if (t === 0) return e;
            t--;
          } else
            a !== m0 && a !== wv || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function tp(e) {
      ro(e);
    }
    function Rh(e) {
      ro(e);
    }
    function lp(e) {
      ro(e);
    }
    function bi(e, t, a, i, o) {
      switch (o && Sr(e, i.ancestorInfo), t = ys(a), e) {
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
    function Yu(e, t, a, i) {
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
      It(a, e, t), a[Pt] = i, a[Ra] = t;
    }
    function Ei(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      N(e);
    }
    function _h(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function ap(e, t, a) {
      var i = Am;
      if (i && typeof t == "string" && t) {
        var o = Ct(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), TE.has(o) || (TE.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), It(t, "link", e), ge(t), i.head.appendChild(t)));
      }
    }
    function np(e, t, a, i) {
      var o = (o = an.current) ? _h(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = oo(a.href), t = Ne(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = oo(a.href);
            var f = Ne(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: ed, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              Ss(e)
            )) && !f._p && (d.instance = f, d.state.loading = p0 | Pu), !ei.has(e))) {
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
              ei.set(e, h), f || Ng(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + vs(t) + `
  + ` + vs(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + vs(t) + `
  + ` + vs(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = fo(a), t = Ne(o).hoistableScripts, i = t.get(a), i || (i = {
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
    function vs(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : nn.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : nn.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : nn.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function oo(e) {
      return 'href="' + Ct(e) + '"';
    }
    function Ss(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function zh(e) {
      return Pe({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Ng(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = p0 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= p0;
      }), t.addEventListener("error", function() {
        return i.loading |= bE;
      }), It(t, "link", a), ge(t), e.head.appendChild(t));
    }
    function fo(e) {
      return '[src="' + Ct(e) + '"]';
    }
    function bs(e) {
      return "script[async]" + e;
    }
    function Dh(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Ct(a.href) + '"]'
            );
            if (i)
              return t.instance = i, ge(i), i;
            var o = Pe({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), ge(i), It(i, "style", o), Mf(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = oo(a.href);
            var f = e.querySelector(
              Ss(o)
            );
            if (f)
              return t.state.loading |= Pu, t.instance = f, ge(f), f;
            i = zh(a), (o = ei.get(o)) && up(i, o), f = (e.ownerDocument || e).createElement("link"), ge(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), It(f, "link", i), t.state.loading |= Pu, Mf(f, a.precedence, e), t.instance = f;
          case "script":
            return f = fo(a.src), (o = e.querySelector(
              bs(f)
            )) ? (t.instance = o, ge(o), o) : (i = a, (o = ei.get(f)) && (i = Pe({}, a), ip(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), ge(o), It(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & Pu) === ed && (i = t.instance, t.state.loading |= Pu, Mf(i, a.precedence, e));
      return t.instance;
    }
    function Mf(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function up(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function ip(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function Cf(e, t, a) {
      if (Lv === null) {
        var i = /* @__PURE__ */ new Map(), o = Lv = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = Lv, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Xf] || f[Pt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== We) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function xg(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Bg(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === Tm || t.itemProp != null)
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
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = hg(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
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
    function ct(e) {
      return !(e.type === "stylesheet" && (e.state.loading & EE) === ed);
    }
    function cp(e, t, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & Pu) === ed) {
        if (a.instance === null) {
          var o = oo(i.href), f = t.querySelector(
            Ss(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Uf.bind(e), t.then(e, e)), a.state.loading |= Pu, a.instance = f, ge(f);
            return;
          }
          f = t.ownerDocument || t, i = zh(i), (o = ei.get(o)) && up(i, o), f = f.createElement("link"), ge(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), It(f, "link", i), a.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & EE) === ed && (e.count++, a = Uf.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    function Mh(e, t) {
      return e.stylesheets && e.count === 0 && Es(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (e.stylesheets && Es(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, CT + t);
        0 < e.imgBytes && bS === 0 && (bS = 125 * mg() * HT);
        var o = setTimeout(
          function() {
            if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Es(e, e.stylesheets), e.unsuspend)) {
              var f = e.unsuspend;
              e.unsuspend = null, f();
            }
          },
          (e.imgBytes > bS ? 50 : UT) + t
        );
        return e.unsuspend = a, function() {
          e.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function Uf() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          Es(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Es(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Xv = /* @__PURE__ */ new Map(), t.forEach(op, e), Xv = null, Uf.call(e));
    }
    function op(e, t) {
      if (!(t.state.loading & Pu)) {
        var a = Xv.get(e);
        if (a) var i = a.get(ES);
        else {
          a = /* @__PURE__ */ new Map(), Xv.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(ES, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(ES, o), a.set(d, o), this.count++, i = Uf.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= Pu;
      }
    }
    function Ts(e, t, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Ps, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = xo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xo(0), this.hiddenUpdates = xo(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function As(e, t, a, i, o, f, d, h, y, p, D, U) {
      return e = new Ts(
        e,
        t,
        a,
        d,
        y,
        p,
        D,
        U,
        h
      ), t = lT, f === !0 && (t |= Ba | Oi), t |= et, f = z(3, null, null, t), e.current = f, f.stateNode = e, t = Dd(), Yc(t), e.pooledCache = t, Yc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, ft(f), e;
    }
    function jg(e) {
      return e ? (e = $f, e) : $f;
    }
    function Ch(e, t, a, i, o, f) {
      if (Dl && typeof Dl.onScheduleFiberRoot == "function")
        try {
          Dl.onScheduleFiberRoot(yo, i, a);
        } catch (d) {
          Gu || (Gu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = jg(o), i.context === null ? i.context = o : i.pendingContext = o, wu && xa !== null && !_E && (_E = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        he(xa) || "Unknown"
      )), i = Rl(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = Eu(e, i, t), a !== null && (vu(t, "root.render()", null), Ye(a, e, t), En(a, e, t));
    }
    function qg(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function fp(e, t) {
      qg(e, t), (e = e.alternate) && qg(e, t);
    }
    function rp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = la(e, 67108864);
        t !== null && Ye(t, e, 67108864), fp(e, 67108864);
      }
    }
    function sp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = na(e);
        t = dn(t);
        var a = la(e, t);
        a !== null && Ye(a, e, t), fp(e, t);
      }
    }
    function Nt() {
      return xa;
    }
    function dp(e, t, a, i) {
      var o = X.T;
      X.T = null;
      var f = Ot.p;
      try {
        Ot.p = Ml, hp(e, t, a, i);
      } finally {
        Ot.p = f, X.T = o;
      }
    }
    function kl(e, t, a, i) {
      var o = X.T;
      X.T = null;
      var f = Ot.p;
      try {
        Ot.p = Fl, hp(e, t, a, i);
      } finally {
        Ot.p = f, X.T = o;
      }
    }
    function hp(e, t, a, i) {
      if (Vv) {
        var o = Uh(i);
        if (o === null)
          Wn(
            e,
            t,
            i,
            Zv,
            a
          ), Nh(e, i);
        else if (Yg(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Nh(e, i), t & 4 && -1 < xT.indexOf(e)) {
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
                      Ca(f), (pt & (Pl | iu)) === fa && (zv = Gl() + eE, xu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = la(f, 2), h !== null && Ye(h, f, 2), tn(), fp(f, 2);
              }
            if (f = Uh(i), f === null && Wn(
              e,
              t,
              i,
              Zv,
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
    function Uh(e) {
      return e = xn(e), mp(e);
    }
    function mp(e) {
      if (Zv = null, e = te(e), e !== null) {
        var t = Ie(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = cl(t), e !== null) return e;
            e = null;
          } else if (a === 31) {
            if (e = Et(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Zv = e, null;
    }
    function Hh(e) {
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
          return Ml;
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
          return Fl;
        case "message":
          switch (Ms()) {
            case Op:
              return Ml;
            case Xh:
              return Fl;
            case mo:
            case Vg:
              return ia;
            case Qh:
              return yc;
            default:
              return ia;
          }
        default:
          return ia;
      }
    }
    function Nh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          rr = null;
          break;
        case "dragenter":
        case "dragleave":
          sr = null;
          break;
        case "mouseover":
        case "mouseout":
          dr = null;
          break;
        case "pointerover":
        case "pointerout":
          v0.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          S0.delete(t.pointerId);
      }
    }
    function sc(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = ue(t), t !== null && rp(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Yg(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return rr = sc(
            rr,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return sr = sc(
            sr,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return dr = sc(
            dr,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return v0.set(
            f,
            sc(
              v0.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, S0.set(
            f,
            sc(
              S0.get(f) || null,
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
    function yp(e) {
      var t = te(e.target);
      if (t !== null) {
        var a = Ie(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = cl(a), t !== null) {
              e.blockedOn = t, g(e.priority, function() {
                sp(a);
              });
              return;
            }
          } else if (t === 31) {
            if (t = Et(a), t !== null) {
              e.blockedOn = t, g(e.priority, function() {
                sp(a);
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
    function Hf(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = Uh(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          Mp !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), Mp = o, a.target.dispatchEvent(i), Mp === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), Mp = null;
        } else
          return t = ue(a), t !== null && rp(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function xh(e, t, a) {
      Hf(e) && a.delete(t);
    }
    function o1() {
      TS = !1, rr !== null && Hf(rr) && (rr = null), sr !== null && Hf(sr) && (sr = null), dr !== null && Hf(dr) && (dr = null), v0.forEach(xh), S0.forEach(xh);
    }
    function Os(e, t) {
      e.blockedOn === t && (e.blockedOn = null, TS || (TS = !0, gl.unstable_scheduleCallback(
        gl.unstable_NormalPriority,
        o1
      )));
    }
    function wg(e) {
      Jv !== e && (Jv = e, gl.unstable_scheduleCallback(
        gl.unstable_NormalPriority,
        function() {
          Jv === e && (Jv = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (mp(i || a) === null)
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
    function ro(e) {
      function t(y) {
        return Os(y, e);
      }
      rr !== null && Os(rr, e), sr !== null && Os(sr, e), dr !== null && Os(dr, e), v0.forEach(t), S0.forEach(t);
      for (var a = 0; a < hr.length; a++) {
        var i = hr[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < hr.length && (a = hr[0], a.blockedOn === null); )
        yp(a), a.blockedOn === null && hr.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[Ra] || null;
          if (typeof f == "function")
            d || wg(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Ra] || null)
                h = d.formAction;
              else if (mp(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), wg(a);
          }
        }
    }
    function Gg() {
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
    function pp(e) {
      this._internalRoot = e;
    }
    function Pn(e) {
      this._internalRoot = e;
    }
    function gp(e) {
      e[Ai] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var gl = f2(), Rs = Om(), f1 = r2(), Pe = Object.assign, Lg = /* @__PURE__ */ Symbol.for("react.element"), Rn = /* @__PURE__ */ Symbol.for("react.transitional.element"), dc = /* @__PURE__ */ Symbol.for("react.portal"), Nf = /* @__PURE__ */ Symbol.for("react.fragment"), Oa = /* @__PURE__ */ Symbol.for("react.strict_mode"), _s = /* @__PURE__ */ Symbol.for("react.profiler"), Bh = /* @__PURE__ */ Symbol.for("react.consumer"), eu = /* @__PURE__ */ Symbol.for("react.context"), xf = /* @__PURE__ */ Symbol.for("react.forward_ref"), so = /* @__PURE__ */ Symbol.for("react.suspense"), Na = /* @__PURE__ */ Symbol.for("react.suspense_list"), zs = /* @__PURE__ */ Symbol.for("react.memo"), ua = /* @__PURE__ */ Symbol.for("react.lazy"), tu = /* @__PURE__ */ Symbol.for("react.activity"), r1 = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Xg = Symbol.iterator, Bf = /* @__PURE__ */ Symbol.for("react.client.reference"), Tl = Array.isArray, X = Rs.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ot = f1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, s1 = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), vp = [], Sp = [], Ti = -1, hc = qt(null), jf = qt(null), an = qt(null), mc = qt(null), qf = 0, Qg, ho, Yf, bp, Ds, jh, qh;
    Ue.__reactDisabledLog = !0;
    var wf, Ep, Yh = !1, Tp = new (typeof WeakMap == "function" ? WeakMap : Map)(), xa = null, wu = !1, nn = Object.prototype.hasOwnProperty, Ap = gl.unstable_scheduleCallback, wh = gl.unstable_cancelCallback, Gh = gl.unstable_shouldYield, Lh = gl.unstable_requestPaint, Gl = gl.unstable_now, Ms = gl.unstable_getCurrentPriorityLevel, Op = gl.unstable_ImmediatePriority, Xh = gl.unstable_UserBlockingPriority, mo = gl.unstable_NormalPriority, Vg = gl.unstable_LowPriority, Qh = gl.unstable_IdlePriority, Rp = gl.log, Zg = gl.unstable_setDisableYieldValue, yo = null, Dl = null, Gu = !1, Lu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Wl = Math.clz32 ? Math.clz32 : Hi, _p = Math.log, Vh = Math.LN2, Gf = 256, Cs = 262144, Lf = 4194304, Ml = 2, Fl = 8, ia = 32, yc = 268435456, _n = Math.random().toString(36).slice(2), Pt = "__reactFiber$" + _n, Ra = "__reactProps$" + _n, Ai = "__reactContainer$" + _n, po = "__reactEvents$" + _n, d1 = "__reactListeners$" + _n, Jg = "__reactHandles$" + _n, Us = "__reactResources$" + _n, Xf = "__reactMarker$" + _n, Kg = /* @__PURE__ */ new Set(), Xu = {}, Qf = {}, $g = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Vf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), zp = {}, Zh = {}, Jh = /[\n"\\]/g, Dp = !1, kg = !1, Hs = !1, l = !1, n = !1, u = !1, c = ["value", "defaultValue"], r = !1, s = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), v = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), R = v.concat(["button"]), Y = "dd dt li option optgroup p rp rt".split(" "), Z = {
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
    }, k = {}, w = {
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
    }, Q = /([A-Z])/g, de = /^ms-/, He = /^(?:webkit|moz|o)[A-Z]/, xt = /^-ms-/, x = /-(.)/g, M = /;\s*$/, B = {}, $ = {}, Re = !1, yt = !1, ve = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Je = "http://www.w3.org/1998/Math/MathML", We = "http://www.w3.org/2000/svg", bt = /* @__PURE__ */ new Map([
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
    ]), lu = {
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
    }, Wg = {
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
    }, Kh = {}, m2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), y2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), DS = !1, un = {}, MS = /^on./, p2 = /^on[^A-Z]/, g2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), v2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), S2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Mp = null, $h = null, kh = null, h1 = !1, pc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m1 = !1;
    if (pc)
      try {
        var Cp = {};
        Object.defineProperty(Cp, "passive", {
          get: function() {
            m1 = !0;
          }
        }), window.addEventListener("test", Cp, Cp), window.removeEventListener("test", Cp, Cp);
      } catch {
        m1 = !1;
      }
    var Zf = null, y1 = null, Fg = null, Ns = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ig = Nl(Ns), Up = Pe({}, Ns, { view: 0, detail: 0 }), b2 = Nl(Up), p1, g1, Hp, Pg = Pe({}, Up, {
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
      getModifierState: Ar,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== Hp && (Hp && e.type === "mousemove" ? (p1 = e.screenX - Hp.screenX, g1 = e.screenY - Hp.screenY) : g1 = p1 = 0, Hp = e), p1);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : g1;
      }
    }), CS = Nl(Pg), E2 = Pe({}, Pg, { dataTransfer: 0 }), T2 = Nl(E2), A2 = Pe({}, Up, { relatedTarget: 0 }), v1 = Nl(A2), O2 = Pe({}, Ns, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), R2 = Nl(O2), _2 = Pe({}, Ns, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), z2 = Nl(_2), D2 = Pe({}, Ns, { data: 0 }), US = Nl(
      D2
    ), M2 = US, C2 = {
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
    }, U2 = {
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
    }, H2 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, N2 = Pe({}, Up, {
      key: function(e) {
        if (e.key) {
          var t = C2[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Tr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? U2[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ar,
      charCode: function(e) {
        return e.type === "keypress" ? Tr(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Tr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), x2 = Nl(N2), B2 = Pe({}, Pg, {
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
    }), HS = Nl(B2), j2 = Pe({}, Up, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ar
    }), q2 = Nl(j2), Y2 = Pe({}, Ns, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), w2 = Nl(Y2), G2 = Pe({}, Pg, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), L2 = Nl(G2), X2 = Pe({}, Ns, {
      newState: 0,
      oldState: 0
    }), Q2 = Nl(X2), V2 = [9, 13, 27, 32], NS = 229, S1 = pc && "CompositionEvent" in window, Np = null;
    pc && "documentMode" in document && (Np = document.documentMode);
    var Z2 = pc && "TextEvent" in window && !Np, xS = pc && (!S1 || Np && 8 < Np && 11 >= Np), BS = 32, jS = String.fromCharCode(BS), qS = !1, Wh = !1, J2 = {
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
    }, xp = null, Bp = null, YS = !1;
    pc && (YS = gd("input") && (!document.documentMode || 9 < document.documentMode));
    var cn = typeof Object.is == "function" ? Object.is : vd, K2 = pc && "documentMode" in document && 11 >= document.documentMode, Fh = null, b1 = null, jp = null, E1 = !1, Ih = {
      animationend: Cc("Animation", "AnimationEnd"),
      animationiteration: Cc("Animation", "AnimationIteration"),
      animationstart: Cc("Animation", "AnimationStart"),
      transitionrun: Cc("Transition", "TransitionRun"),
      transitionstart: Cc("Transition", "TransitionStart"),
      transitioncancel: Cc("Transition", "TransitionCancel"),
      transitionend: Cc("Transition", "TransitionEnd")
    }, T1 = {}, wS = {};
    pc && (wS = document.createElement("div").style, "AnimationEvent" in window || (delete Ih.animationend.animation, delete Ih.animationiteration.animation, delete Ih.animationstart.animation), "TransitionEvent" in window || delete Ih.transitionend.transition);
    var GS = Uc("animationend"), LS = Uc("animationiteration"), XS = Uc("animationstart"), $2 = Uc("transitionrun"), k2 = Uc("transitionstart"), W2 = Uc("transitioncancel"), QS = Uc("transitionend"), VS = /* @__PURE__ */ new Map(), A1 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    A1.push("scrollEnd");
    var ZS = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var F2 = performance, JS = function() {
        return F2.now();
      };
    else {
      var I2 = Date;
      JS = function() {
        return I2.now();
      };
    }
    var O1 = typeof reportError == "function" ? reportError : function(e) {
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
    }, P2 = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", ev = 0, R1 = 1, _1 = 2, z1 = 3, tv = "– ", lv = "+ ", KS = "  ", el = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Qu = "Components ⚛", dt = "Scheduler ⚛", mt = "Blocking", Jf = !1, go = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Qu
    }, Kf = {
      start: -0,
      end: -0,
      detail: { devtools: go }
    }, eT = ["Changed Props", ""], $S = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", tT = ["Changed Props", $S], qp = 1, vo = 2, Vu = [], Ph = 0, D1 = 0, $f = {};
    Object.freeze($f);
    var Zu = null, em = null, qe = 0, lT = 1, et = 2, Ba = 8, Oi = 16, aT = 32, kS = !1;
    try {
      var WS = Object.preventExtensions({});
    } catch {
      kS = !0;
    }
    var M1 = /* @__PURE__ */ new WeakMap(), tm = [], lm = 0, av = null, Yp = 0, Ju = [], Ku = 0, xs = null, So = 1, bo = "", _a = null, tl = null, st = !1, gc = !1, au = null, kf = null, $u = !1, C1 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), U1 = qt(null), H1 = qt(null), FS = {}, nv = null, am = null, nm = !1, nT = typeof AbortController < "u" ? AbortController : function() {
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
    }, uT = gl.unstable_scheduleCallback, iT = gl.unstable_NormalPriority, Ll = {
      $$typeof: eu,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Xl = gl.unstable_now, uv = console.createTask ? console.createTask : function() {
      return null;
    }, wp = 1, iv = 2, ca = -0, Wf = -0, Eo = -0, To = null, on = -1.1, Bs = -0, sl = -0, Me = -1.1, xe = -1.1, il = null, vl = !1, js = -0, vc = -1.1, Gp = null, Ff = 0, N1 = null, x1 = null, qs = -1.1, Lp = null, um = -1.1, cv = -1.1, Ao = -0, Oo = -1.1, ku = -1.1, B1 = 0, Xp = null, IS = null, PS = null, If = -1.1, Ys = null, Pf = -1.1, ov = -1.1, eb = -0, tb = -0, fv = 0, cT = null, lb = 0, Qp = -1.1, rv = !1, sv = !1, Vp = null, j1 = 0, ws = 0, im = null, ab = X.S;
    X.S = function(e, t) {
      if (Ib = Gl(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > Oo && 0 > ku) {
          Oo = Xl();
          var a = _f(), i = qu();
          (a !== Pf || i !== Ys) && (Pf = -1.1), If = a, Ys = i;
        }
        ii(e, t);
      }
      ab !== null && ab(e, t);
    };
    var Gs = qt(null), Ri = {
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
    }, Zp = [], Jp = [], Kp = [], $p = [], kp = [], Wp = [], Ls = /* @__PURE__ */ new Set();
    Ri.recordUnsafeLifecycleWarnings = function(e, t) {
      Ls.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Zp.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillMount == "function" && Jp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Kp.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillReceiveProps == "function" && $p.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && kp.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillUpdate == "function" && Wp.push(e));
    }, Ri.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Zp.length && (Zp.forEach(function(h) {
        e.add(
          he(h) || "Component"
        ), Ls.add(h.type);
      }), Zp = []);
      var t = /* @__PURE__ */ new Set();
      0 < Jp.length && (Jp.forEach(function(h) {
        t.add(
          he(h) || "Component"
        ), Ls.add(h.type);
      }), Jp = []);
      var a = /* @__PURE__ */ new Set();
      0 < Kp.length && (Kp.forEach(function(h) {
        a.add(
          he(h) || "Component"
        ), Ls.add(h.type);
      }), Kp = []);
      var i = /* @__PURE__ */ new Set();
      0 < $p.length && ($p.forEach(
        function(h) {
          i.add(
            he(h) || "Component"
          ), Ls.add(h.type);
        }
      ), $p = []);
      var o = /* @__PURE__ */ new Set();
      0 < kp.length && (kp.forEach(function(h) {
        o.add(
          he(h) || "Component"
        ), Ls.add(h.type);
      }), kp = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Wp.length && (Wp.forEach(function(h) {
        f.add(
          he(h) || "Component"
        ), Ls.add(h.type);
      }), Wp = []), 0 < t.size) {
        var d = j(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = j(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = j(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = j(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = j(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = j(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var dv = /* @__PURE__ */ new Map(), nb = /* @__PURE__ */ new Set();
    Ri.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & Ba && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !nb.has(e.type) && (i = dv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], dv.set(a, i)), i.push(e));
    }, Ri.flushLegacyContextWarning = function() {
      dv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(he(o) || "Component"), nb.add(o.type);
          });
          var i = j(a);
          re(t, function() {
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
      Zp = [], Jp = [], Kp = [], $p = [], kp = [], Wp = [], dv = /* @__PURE__ */ new Map();
    };
    var ub = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = wu;
        wu = !0;
        try {
          return e(t, a);
        } finally {
          wu = i;
        }
      }
    }, q1 = ub.react_stack_bottom_frame.bind(ub), ib = {
      react_stack_bottom_frame: function(e) {
        var t = wu;
        wu = !0;
        try {
          return e.render();
        } finally {
          wu = t;
        }
      }
    }, cb = ib.react_stack_bottom_frame.bind(ib), ob = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          ke(e, e.return, a);
        }
      }
    }, Y1 = ob.react_stack_bottom_frame.bind(
      ob
    ), fb = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          ke(e, e.return, f);
        }
      }
    }, rb = fb.react_stack_bottom_frame.bind(
      fb
    ), sb = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, oT = sb.react_stack_bottom_frame.bind(
      sb
    ), db = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          ke(e, t, i);
        }
      }
    }, hb = db.react_stack_bottom_frame.bind(
      db
    ), mb = {
      react_stack_bottom_frame: function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, fT = mb.react_stack_bottom_frame.bind(mb), yb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          ke(e, t, i);
        }
      }
    }, rT = yb.react_stack_bottom_frame.bind(yb), pb = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, sT = pb.react_stack_bottom_frame.bind(pb), cm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), w1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), hv = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), mv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Xs = null, Fp = !1, om = null, Ip = 0, tt = null, G1, gb = G1 = !1, vb = {}, Sb = {}, bb = {};
    Se = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = he(e), o = i || "null";
        if (!vb[o]) {
          vb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = he(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = he(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), re(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Qs = Bl(!0), Eb = Bl(!1), Tb = 0, Ab = 1, Ob = 2, L1 = 3, er = !1, Rb = !1, X1 = null, Q1 = !1, fm = qt(null), yv = qt(0), nu = qt(null), Wu = null, rm = 1, Pp = 2, Cl = qt(0), pv = 0, Fu = 1, fn = 2, uu = 4, rn = 8, sm, _b = /* @__PURE__ */ new Set(), zb = /* @__PURE__ */ new Set(), V1 = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), Ro = 0, Ge = null, Xt = null, Ql = null, gv = !1, dm = !1, Vs = !1, vv = 0, e0 = 0, _o = null, dT = 0, hT = 25, L = null, Iu = null, zo = -1, t0 = !1, l0 = {
      readContext: Tt,
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
    l0.useEffectEvent = fl;
    var Z1 = null, Mb = null, J1 = null, Cb = null, Sc = null, _i = null, Sv = null;
    Z1 = {
      readContext: function(e) {
        return Tt(e);
      },
      use: ri,
      useCallback: function(e, t) {
        return L = "useCallback", we(), fi(t), wd(e, t);
      },
      useContext: function(e) {
        return L = "useContext", we(), Tt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", we(), fi(t), $c(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", we(), fi(a), Ru(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        L = "useInsertionEffect", we(), fi(t), ec(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", we(), fi(t), pa(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", we(), fi(t);
        var a = X.H;
        X.H = Sc;
        try {
          return ga(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", we();
        var i = X.H;
        X.H = Sc;
        try {
          return tf(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function(e) {
        return L = "useRef", we(), Yd(e);
      },
      useState: function(e) {
        L = "useState", we();
        var t = X.H;
        X.H = Sc;
        try {
          return Wi(e);
        } finally {
          X.H = t;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", we();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", we(), cf(e, t);
      },
      useTransition: function() {
        return L = "useTransition", we(), tc();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", we(), lf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", we(), Kr();
      },
      useFormState: function(e, t) {
        return L = "useFormState", we(), jr(), Wa(e, t);
      },
      useActionState: function(e, t) {
        return L = "useActionState", we(), Wa(e, t);
      },
      useOptimistic: function(e) {
        return L = "useOptimistic", we(), Kc(e);
      },
      useHostTransitionStatus: mi,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", we(), Gd();
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", we(), Zr(e);
      }
    }, Mb = {
      readContext: function(e) {
        return Tt(e);
      },
      use: ri,
      useCallback: function(e, t) {
        return L = "useCallback", W(), wd(e, t);
      },
      useContext: function(e) {
        return L = "useContext", W(), Tt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", W(), $c(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", W(), Ru(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        L = "useInsertionEffect", W(), ec(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", W(), pa(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", W();
        var a = X.H;
        X.H = Sc;
        try {
          return ga(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", W();
        var i = X.H;
        X.H = Sc;
        try {
          return tf(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function(e) {
        return L = "useRef", W(), Yd(e);
      },
      useState: function(e) {
        L = "useState", W();
        var t = X.H;
        X.H = Sc;
        try {
          return Wi(e);
        } finally {
          X.H = t;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", W();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", W(), cf(e, t);
      },
      useTransition: function() {
        return L = "useTransition", W(), tc();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", W(), lf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", W(), Kr();
      },
      useActionState: function(e, t) {
        return L = "useActionState", W(), Wa(e, t);
      },
      useFormState: function(e, t) {
        return L = "useFormState", W(), jr(), Wa(e, t);
      },
      useOptimistic: function(e) {
        return L = "useOptimistic", W(), Kc(e);
      },
      useHostTransitionStatus: mi,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", W(), Gd();
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", W(), Zr(e);
      }
    }, J1 = {
      readContext: function(e) {
        return Tt(e);
      },
      use: ri,
      useCallback: function(e, t) {
        return L = "useCallback", W(), Zn(e, t);
      },
      useContext: function(e) {
        return L = "useContext", W(), Tt(e);
      },
      useEffect: function(e, t) {
        L = "useEffect", W(), _l(2048, rn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", W(), uf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", W(), _l(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", W(), _l(4, uu, e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", W();
        var a = X.H;
        X.H = _i;
        try {
          return Ft(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", W();
        var i = X.H;
        X.H = _i;
        try {
          return Vc(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function() {
        return L = "useRef", W(), _t().memoizedState;
      },
      useState: function() {
        L = "useState", W();
        var e = X.H;
        X.H = _i;
        try {
          return Vc(ka);
        } finally {
          X.H = e;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", W();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", W(), _u(e, t);
      },
      useTransition: function() {
        return L = "useTransition", W(), $0();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", W(), Jc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", W(), _t().memoizedState;
      },
      useFormState: function(e) {
        return L = "useFormState", W(), jr(), Ii(e);
      },
      useActionState: function(e) {
        return L = "useActionState", W(), Ii(e);
      },
      useOptimistic: function(e, t) {
        return L = "useOptimistic", W(), Xr(e, t);
      },
      useHostTransitionStatus: mi,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", W(), _t().memoizedState;
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", W(), nf(e);
      }
    }, Cb = {
      readContext: function(e) {
        return Tt(e);
      },
      use: ri,
      useCallback: function(e, t) {
        return L = "useCallback", W(), Zn(e, t);
      },
      useContext: function(e) {
        return L = "useContext", W(), Tt(e);
      },
      useEffect: function(e, t) {
        L = "useEffect", W(), _l(2048, rn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", W(), uf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", W(), _l(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", W(), _l(4, uu, e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", W();
        var a = X.H;
        X.H = Sv;
        try {
          return Ft(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", W();
        var i = X.H;
        X.H = Sv;
        try {
          return Zc(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function() {
        return L = "useRef", W(), _t().memoizedState;
      },
      useState: function() {
        L = "useState", W();
        var e = X.H;
        X.H = Sv;
        try {
          return Zc(ka);
        } finally {
          X.H = e;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", W();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", W(), Ke(e, t);
      },
      useTransition: function() {
        return L = "useTransition", W(), al();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", W(), Jc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", W(), _t().memoizedState;
      },
      useFormState: function(e) {
        return L = "useFormState", W(), jr(), Pi(e);
      },
      useActionState: function(e) {
        return L = "useActionState", W(), Pi(e);
      },
      useOptimistic: function(e, t) {
        return L = "useOptimistic", W(), Qr(e, t);
      },
      useHostTransitionStatus: mi,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", W(), _t().memoizedState;
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", W(), nf(e);
      }
    }, Sc = {
      readContext: function(e) {
        return I(), Tt(e);
      },
      use: function(e) {
        return F(), ri(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", F(), we(), wd(e, t);
      },
      useContext: function(e) {
        return L = "useContext", F(), we(), Tt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", F(), we(), $c(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", F(), we(), Ru(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        L = "useInsertionEffect", F(), we(), ec(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", F(), we(), pa(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", F(), we();
        var a = X.H;
        X.H = Sc;
        try {
          return ga(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", F(), we();
        var i = X.H;
        X.H = Sc;
        try {
          return tf(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function(e) {
        return L = "useRef", F(), we(), Yd(e);
      },
      useState: function(e) {
        L = "useState", F(), we();
        var t = X.H;
        X.H = Sc;
        try {
          return Wi(e);
        } finally {
          X.H = t;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", F(), we();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", F(), we(), cf(e, t);
      },
      useTransition: function() {
        return L = "useTransition", F(), we(), tc();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", F(), we(), lf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", F(), we(), Kr();
      },
      useFormState: function(e, t) {
        return L = "useFormState", F(), we(), Wa(e, t);
      },
      useActionState: function(e, t) {
        return L = "useActionState", F(), we(), Wa(e, t);
      },
      useOptimistic: function(e) {
        return L = "useOptimistic", F(), we(), Kc(e);
      },
      useMemoCache: function(e) {
        return F(), $a(e);
      },
      useHostTransitionStatus: mi,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", we(), Gd();
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", F(), we(), Zr(e);
      }
    }, _i = {
      readContext: function(e) {
        return I(), Tt(e);
      },
      use: function(e) {
        return F(), ri(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", F(), W(), Zn(e, t);
      },
      useContext: function(e) {
        return L = "useContext", F(), W(), Tt(e);
      },
      useEffect: function(e, t) {
        L = "useEffect", F(), W(), _l(2048, rn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", F(), W(), uf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", F(), W(), _l(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", F(), W(), _l(4, uu, e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", F(), W();
        var a = X.H;
        X.H = _i;
        try {
          return Ft(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", F(), W();
        var i = X.H;
        X.H = _i;
        try {
          return Vc(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function() {
        return L = "useRef", F(), W(), _t().memoizedState;
      },
      useState: function() {
        L = "useState", F(), W();
        var e = X.H;
        X.H = _i;
        try {
          return Vc(ka);
        } finally {
          X.H = e;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", F(), W();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", F(), W(), _u(e, t);
      },
      useTransition: function() {
        return L = "useTransition", F(), W(), $0();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", F(), W(), Jc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", F(), W(), _t().memoizedState;
      },
      useFormState: function(e) {
        return L = "useFormState", F(), W(), Ii(e);
      },
      useActionState: function(e) {
        return L = "useActionState", F(), W(), Ii(e);
      },
      useOptimistic: function(e, t) {
        return L = "useOptimistic", F(), W(), Xr(e, t);
      },
      useMemoCache: function(e) {
        return F(), $a(e);
      },
      useHostTransitionStatus: mi,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", W(), _t().memoizedState;
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", F(), W(), nf(e);
      }
    }, Sv = {
      readContext: function(e) {
        return I(), Tt(e);
      },
      use: function(e) {
        return F(), ri(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", F(), W(), Zn(e, t);
      },
      useContext: function(e) {
        return L = "useContext", F(), W(), Tt(e);
      },
      useEffect: function(e, t) {
        L = "useEffect", F(), W(), _l(2048, rn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", F(), W(), uf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return L = "useInsertionEffect", F(), W(), _l(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", F(), W(), _l(4, uu, e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", F(), W();
        var a = X.H;
        X.H = _i;
        try {
          return Ft(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", F(), W();
        var i = X.H;
        X.H = _i;
        try {
          return Zc(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function() {
        return L = "useRef", F(), W(), _t().memoizedState;
      },
      useState: function() {
        L = "useState", F(), W();
        var e = X.H;
        X.H = _i;
        try {
          return Zc(ka);
        } finally {
          X.H = e;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", F(), W();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", F(), W(), Ke(e, t);
      },
      useTransition: function() {
        return L = "useTransition", F(), W(), al();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", F(), W(), Jc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", F(), W(), _t().memoizedState;
      },
      useFormState: function(e) {
        return L = "useFormState", F(), W(), Pi(e);
      },
      useActionState: function(e) {
        return L = "useActionState", F(), W(), Pi(e);
      },
      useOptimistic: function(e, t) {
        return L = "useOptimistic", F(), W(), Qr(e, t);
      },
      useMemoCache: function(e) {
        return F(), $a(e);
      },
      useHostTransitionStatus: mi,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", W(), _t().memoizedState;
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", F(), W(), nf(e);
      }
    };
    var Ub = {}, Hb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set(), xb = /* @__PURE__ */ new Set(), Bb = /* @__PURE__ */ new Set(), jb = /* @__PURE__ */ new Set(), qb = /* @__PURE__ */ new Set(), Yb = /* @__PURE__ */ new Set(), wb = /* @__PURE__ */ new Set(), Gb = /* @__PURE__ */ new Set(), Lb = /* @__PURE__ */ new Set();
    Object.freeze(Ub);
    var K1 = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = na(e), o = Rl(i);
        o.payload = t, a != null && (Ic(a), o.callback = a), t = Eu(e, o, i), t !== null && (vu(i, "this.setState()", e), Ye(t, e, i), En(t, e, i));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = na(e), o = Rl(i);
        o.tag = Ab, o.payload = t, a != null && (Ic(a), o.callback = a), t = Eu(e, o, i), t !== null && (vu(i, "this.replaceState()", e), Ye(t, e, i), En(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = na(e), i = Rl(a);
        i.tag = Ob, t != null && (Ic(t), i.callback = t), t = Eu(e, i, a), t !== null && (vu(a, "this.forceUpdate()", e), Ye(t, e, a), En(t, e, a));
      }
    }, hm = null, $1 = null, k1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Vl = !1, Xb = {}, Qb = {}, Vb = {}, Zb = {}, mm = !1, Jb = {}, bv = {}, W1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Kb = !1, $b = null;
    $b = /* @__PURE__ */ new Set();
    var Do = !1, Zl = !1, F1 = !1, kb = typeof WeakSet == "function" ? WeakSet : Set, oa = null, ym = null, pm = null, Jl = null, zn = !1, zi = null, Il = !1, a0 = 8192, mT = {
      getCacheForType: function(e) {
        var t = Tt(Ll), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      cacheSignal: function() {
        return Tt(Ll).controller.signal;
      },
      getOwner: function() {
        return xa;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var n0 = Symbol.for;
      n0("selector.component"), n0("selector.has_pseudo_class"), n0("selector.role"), n0("selector.test_id"), n0("selector.text");
    }
    var yT = [], pT = typeof WeakMap == "function" ? WeakMap : Map, fa = 0, Pl = 2, iu = 4, Mo = 0, u0 = 1, Zs = 2, Ev = 3, tr = 4, Tv = 6, Wb = 5, pt = fa, Qt = null, ut = null, lt = 0, Dn = 0, Av = 1, Js = 2, i0 = 3, Fb = 4, I1 = 5, c0 = 6, Ov = 7, P1 = 8, Ks = 9, Bt = Dn, cu = null, lr = !1, gm = !1, eS = !1, bc = 0, dl = Mo, ar = 0, nr = 0, tS = 0, Mn = 0, $s = 0, o0 = null, sn = null, Rv = !1, _v = 0, Ib = 0, Pb = 300, zv = 1 / 0, eE = 500, f0 = null, Al = null, ur = null, Dv = 0, lS = 1, aS = 2, tE = 3, ir = 0, lE = 1, aE = 2, nE = 3, uE = 4, Mv = 5, Kl = 0, cr = null, vm = null, Di = 0, nS = 0, uS = -0, iS = null, iE = null, cE = null, Mi = Dv, oE = null, gT = 50, r0 = 0, cS = null, oS = !1, Cv = !1, vT = 50, ks = 0, s0 = null, Sm = !1, Uv = null, fE = !1, rE = /* @__PURE__ */ new Set(), ST = {}, Hv = null, bm = null, fS = !1, rS = !1, Nv = !1, sS = !1, or = 0, dS = {};
    (function() {
      for (var e = 0; e < A1.length; e++) {
        var t = A1[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Bn(a, "on" + t);
      }
      Bn(GS, "onAnimationEnd"), Bn(LS, "onAnimationIteration"), Bn(XS, "onAnimationStart"), Bn("dblclick", "onDoubleClick"), Bn("focusin", "onFocus"), Bn("focusout", "onBlur"), Bn($2, "onTransitionRun"), Bn(k2, "onTransitionStart"), Bn(W2, "onTransitionCancel"), Bn(QS, "onTransitionEnd");
    })(), Ze("onMouseEnter", ["mouseout", "mouseover"]), Ze("onMouseLeave", ["mouseout", "mouseover"]), Ze("onPointerEnter", ["pointerout", "pointerover"]), Ze("onPointerLeave", ["pointerout", "pointerover"]), at(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), at(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), at("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), at(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), at(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), at(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var d0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), hS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(d0)
    ), xv = "_reactListening" + Math.random().toString(36).slice(2), sE = !1, dE = !1, Bv = !1, hE = !1, jv = !1, qv = !1, mE = !1, Yv = {}, bT = /\r\n?/g, ET = /\u0000|\uFFFD/g, Ws = "http://www.w3.org/1999/xlink", mS = "http://www.w3.org/XML/1998/namespace", TT = "javascript:throw new Error('React form unexpectedly submitted.')", AT = "suppressHydrationWarning", Fs = "&", wv = "/&", h0 = "$", m0 = "/$", fr = "$?", Is = "$~", Em = "$!", OT = "html", RT = "body", _T = "head", yS = "F!", yE = "F", pE = "loading", zT = "style", Co = 0, Tm = 1, Gv = 2, pS = null, gS = null, gE = { dialog: !0, webview: !0 }, vS = null, y0 = void 0, vE = typeof setTimeout == "function" ? setTimeout : void 0, DT = typeof clearTimeout == "function" ? clearTimeout : void 0, Ps = -1, SE = typeof Promise == "function" ? Promise : void 0, MT = typeof queueMicrotask == "function" ? queueMicrotask : typeof SE < "u" ? function(e) {
      return SE.resolve(null).then(e).catch(pg);
    } : vE, SS = null, ed = 0, p0 = 1, bE = 2, EE = 3, Pu = 4, ei = /* @__PURE__ */ new Map(), TE = /* @__PURE__ */ new Set(), Uo = Ot.d;
    Ot.d = {
      f: function() {
        var e = Uo.f(), t = tn();
        return e || t;
      },
      r: function(e) {
        var t = ue(e);
        t !== null && t.tag === 5 && t.type === "form" ? of(t) : Uo.r(e);
      },
      D: function(e) {
        Uo.D(e), ap("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Uo.C(e, t), ap("preconnect", e, t);
      },
      L: function(e, t, a) {
        Uo.L(e, t, a);
        var i = Am;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Ct(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Ct(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Ct(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Ct(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = oo(e);
              break;
            case "script":
              f = fo(e);
          }
          ei.has(f) || (e = Pe(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), ei.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            Ss(f)
          ) || t === "script" && i.querySelector(bs(f)) || (t = i.createElement("link"), It(t, "link", e), ge(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Uo.m(e, t);
        var a = Am;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Ct(i) + '"][href="' + Ct(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = fo(e);
          }
          if (!ei.has(f) && (e = Pe({ rel: "modulepreload", href: e }, t), ei.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(bs(f)))
                  return;
            }
            i = a.createElement("link"), It(i, "link", e), ge(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Uo.X(e, t);
        var a = Am;
        if (a && e) {
          var i = Ne(a).hoistableScripts, o = fo(e), f = i.get(o);
          f || (f = a.querySelector(
            bs(o)
          ), f || (e = Pe({ src: e, async: !0 }, t), (t = ei.get(o)) && ip(e, t), f = a.createElement("script"), ge(f), It(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        Uo.S(e, t, a);
        var i = Am;
        if (i && e) {
          var o = Ne(i).hoistableStyles, f = oo(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: ed, preload: null };
            if (d = i.querySelector(
              Ss(f)
            ))
              h.loading = p0 | Pu;
            else {
              e = Pe(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = ei.get(f)) && up(e, a);
              var y = d = i.createElement("link");
              ge(y), It(y, "link", e), y._p = new Promise(function(p, D) {
                y.onload = p, y.onerror = D;
              }), y.addEventListener("load", function() {
                h.loading |= p0;
              }), y.addEventListener("error", function() {
                h.loading |= bE;
              }), h.loading |= Pu, Mf(d, t, i);
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
        Uo.M(e, t);
        var a = Am;
        if (a && e) {
          var i = Ne(a).hoistableScripts, o = fo(e), f = i.get(o);
          f || (f = a.querySelector(
            bs(o)
          ), f || (e = Pe({ src: e, async: !0, type: "module" }, t), (t = ei.get(o)) && ip(e, t), f = a.createElement("script"), ge(f), It(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Am = typeof document > "u" ? null : document, Lv = null, CT = 6e4, UT = 800, HT = 500, bS = 0, ES = null, Xv = null, td = s1, g0 = {
      $$typeof: eu,
      Provider: null,
      Consumer: null,
      _currentValue: td,
      _currentValue2: td,
      _threadCount: 0
    }, AE = "%c%s%c", OE = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", RE = "", Qv = " ", NT = Function.prototype.bind, _E = !1, zE = null, DE = null, ME = null, CE = null, UE = null, HE = null, NE = null, xE = null, BE = null, jE = null;
    zE = function(e, t, a, i) {
      t = b(e, t), t !== null && (a = H(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Pe({}, e.memoizedProps), a = la(e, 2), a !== null && Ye(a, e, 2));
    }, DE = function(e, t, a) {
      t = b(e, t), t !== null && (a = ie(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Pe({}, e.memoizedProps), a = la(e, 2), a !== null && Ye(a, e, 2));
    }, ME = function(e, t, a, i) {
      t = b(e, t), t !== null && (a = le(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Pe({}, e.memoizedProps), a = la(e, 2), a !== null && Ye(a, e, 2));
    }, CE = function(e, t, a) {
      e.pendingProps = H(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = la(e, 2), t !== null && Ye(t, e, 2);
    }, UE = function(e, t) {
      e.pendingProps = ie(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = la(e, 2), t !== null && Ye(t, e, 2);
    }, HE = function(e, t, a) {
      e.pendingProps = le(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = la(e, 2), t !== null && Ye(t, e, 2);
    }, NE = function(e) {
      var t = la(e, 2);
      t !== null && Ye(t, e, 2);
    }, xE = function(e) {
      var t = No(), a = la(e, t);
      a !== null && Ye(a, e, t);
    }, BE = function(e) {
      pe = e;
    }, jE = function(e) {
      oe = e;
    };
    var Vv = !0, Zv = null, TS = !1, rr = null, sr = null, dr = null, v0 = /* @__PURE__ */ new Map(), S0 = /* @__PURE__ */ new Map(), hr = [], xT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Jv = null;
    if (Pn.prototype.render = pp.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : it(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = na(i);
      Ch(i, o, a, t, null, null);
    }, Pn.prototype.unmount = pp.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (pt & (Pl | iu)) !== fa && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Ch(e.current, 2, null, e, null, null), tn(), t[Ai] = null;
      }
    }, Pn.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Ni();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < hr.length && t !== 0 && t < hr[a].priority; a++) ;
        hr.splice(a, 0, e), a === 0 && yp(e);
      }
    }, (function() {
      var e = Rs.version;
      if (e !== "19.2.8")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.8
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Ot.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Vt(t), e = e !== null ? Zt(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.2.8",
        rendererPackageName: "react-dom",
        currentDispatcherRef: X,
        reconcilerVersion: "19.2.8"
      };
      return e.overrideHookState = zE, e.overrideHookStateDeletePath = DE, e.overrideHookStateRenamePath = ME, e.overrideProps = CE, e.overridePropsDeletePath = UE, e.overridePropsRenamePath = HE, e.scheduleUpdate = NE, e.scheduleRetry = xE, e.setErrorHandler = BE, e.setSuspenseHandler = jE, e.scheduleRefresh = ze, e.scheduleRoot = ae, e.setRefreshHandler = je, e.getCurrentFiber = Nt, yr(e);
    })() && pc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var qE = window.location.protocol;
      /^(https?|file):$/.test(qE) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (qE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    A0.createRoot = function(e, t) {
      if (!it(e))
        throw Error("Target container is not a DOM element.");
      gp(e);
      var a = !1, i = "", o = Qd, f = Vd, d = sy;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Rn && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = As(
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
        Gg
      ), e[Ai] = t.current, oc(e), new pp(t);
    }, A0.hydrateRoot = function(e, t, a) {
      if (!it(e))
        throw Error("Target container is not a DOM element.");
      gp(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Qd, d = Vd, h = sy, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = As(
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
        Gg
      ), t.context = jg(null), a = t.current, i = na(a), i = dn(i), o = Rl(i), o.callback = null, Eu(a, o, i), vu(i, "hydrateRoot()", null), a = i, t.current.lanes = a, Hn(t, a), Ca(t), e[Ai] = t.current, oc(e), new Pn(t);
    }, A0.version = "19.2.8", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), A0;
}
var IE;
function KT() {
  if (IE) return kv.exports;
  IE = 1;
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
  return process.env.NODE_ENV === "production" ? (b(), kv.exports = ZT()) : kv.exports = JT(), kv.exports;
}
var $T = KT();
const RS = "hana.plugin.ui", _S = 1, kT = "X-Hana-Plugin-Surface-Session", WT = "pluginSurfaceSession", s2 = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, ld = {
  TOAST_SHOW: "toast.show",
  EXTERNAL_OPEN: "external.open",
  RESOURCE_OPEN: "resource.open",
  RESOURCE_PICK: "resource.pick",
  RESOURCE_REQUEST_ACCESS: "resource.requestAccess",
  UI_RESIZE: "ui.resize",
  CLIPBOARD_WRITE_TEXT: "clipboard.writeText"
}, FT = /* @__PURE__ */ new Set([
  "event",
  "request",
  "response",
  "error"
]);
function PE(b) {
  return typeof b == "object" && b !== null;
}
function mr(b) {
  return {
    ok: !1,
    error: {
      code: s2.BAD_MESSAGE,
      message: b
    }
  };
}
function e2(b) {
  if (!PE(b))
    return mr("Plugin UI messages must be objects.");
  if (b.protocol !== RS)
    return mr("Plugin UI message protocol is missing or invalid.");
  if (b.version !== _S)
    return {
      ok: !1,
      error: {
        code: s2.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(b.version)}.`
      }
    };
  if (typeof b.kind != "string" || !FT.has(b.kind))
    return mr("Plugin UI message kind is missing or invalid.");
  if (typeof b.type != "string" || b.type.trim() === "")
    return mr("Plugin UI message type must be a non-empty string.");
  const H = b.kind;
  if (H !== "event" && (typeof b.id != "string" || b.id.trim() === ""))
    return mr(`Plugin UI ${H} messages must include a non-empty id.`);
  if (H === "error") {
    if (!PE(b.error))
      return mr("Plugin UI error messages must include an error object.");
    if (typeof b.error.code != "string" || b.error.code.trim() === "")
      return mr("Plugin UI error code must be a non-empty string.");
    if (typeof b.error.message != "string" || b.error.message.trim() === "")
      return mr("Plugin UI error message must be a non-empty string.");
  }
  return {
    ok: !0,
    value: b
  };
}
class t2 extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(H) {
    super(H.message), this.code = H.code, this.details = H.details;
  }
}
let l2 = 0;
function IT() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (l2 += 1, `hana-plugin-${Date.now()}-${l2}`);
}
function PT() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
function eA(b) {
  if (!b)
    return null;
  try {
    return new URL(b).origin;
  } catch {
    return null;
  }
}
function tA(b, H) {
  if (H)
    return H;
  const le = new URLSearchParams(b.location.search).get("hana-host-origin");
  return le || (eA(b.document.referrer) ?? "*");
}
function lA(b) {
  const H = new URLSearchParams(b.location.search);
  return {
    theme: H.get("hana-theme") ?? void 0,
    cssUrl: H.get("hana-css") ?? void 0
  };
}
function a2(b, H, le) {
  return !(b.source !== H || le !== "*" && b.origin !== le);
}
function aA(b) {
  return typeof b == "string" ? { url: b } : b;
}
function nA(b) {
  return typeof b == "string" ? { text: b } : b;
}
function d2(b) {
  const H = /^\/api\/plugins\/([^/]+)(?:\/|$)/.exec(b.location.pathname || "");
  if (!H)
    throw new Error("Plugin asset URL helper requires an iframe route under /api/plugins/:pluginId/.");
  try {
    return decodeURIComponent(H[1]);
  } catch {
    throw new Error("Plugin asset URL helper could not decode the current plugin id.");
  }
}
function uA(b) {
  if (typeof b != "string" || b.length === 0)
    throw new Error("Invalid plugin asset path.");
  if (b.includes("\\") || b.includes("\0") || /^[a-z][a-z0-9+.-]*:/i.test(b))
    throw new Error("Invalid plugin asset path.");
  const H = b.replace(/^\/+/, "");
  if (!H || H.startsWith("./"))
    throw new Error("Invalid plugin asset path.");
  const le = H.split("/");
  if (le.some((T) => !T || T === "." || T === ".." || T.startsWith(".")))
    throw new Error("Invalid plugin asset path.");
  return le.map((T) => encodeURIComponent(T)).join("/");
}
function iA(b, H) {
  const le = d2(b), T = uA(H);
  return `${b.location.origin}/api/plugins/${encodeURIComponent(le)}/assets/${T}`;
}
function cA(b) {
  return new URLSearchParams(b.location.search).get(WT) || null;
}
function oA(b) {
  if (typeof b != "string" || b.length === 0)
    throw new Error("Invalid plugin API path.");
  const H = b.trim();
  if (!H || H.includes("\\") || H.includes("\0") || H.includes("#") || H.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(H))
    throw new Error("Invalid plugin API path.");
  const le = H.replace(/^\/+/, "");
  if (!le || le.startsWith("./") || le === "api/plugins" || le.startsWith("api/plugins/"))
    throw new Error("Invalid plugin API path. Use a route path relative to the current plugin.");
  const T = le.indexOf("?"), ie = T >= 0 ? le.slice(0, T) : le;
  if (!ie)
    throw new Error("Invalid plugin API path.");
  const oe = ie.split("/");
  for (const I of oe) {
    if (!I)
      throw new Error("Invalid plugin API path.");
    let V;
    try {
      V = decodeURIComponent(I);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (V === "." || V === ".." || V.includes("/") || V.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const pe = new URL(`http://hana.local/${le}`);
  return `${oe.map((I) => encodeURIComponent(decodeURIComponent(I))).join("/")}${pe.search}`;
}
function h2(b, H) {
  const le = d2(b), T = oA(H);
  return `${b.location.origin}/api/plugins/${encodeURIComponent(le)}/${T}`;
}
function fA(b, H, le) {
  const T = cA(b);
  if (!T)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const ie = b.fetch?.bind(b) ?? globalThis.fetch?.bind(globalThis);
  if (!ie)
    throw new Error("hana.api.fetch requires window.fetch.");
  const oe = le ?? {}, pe = new Headers(oe.headers);
  return pe.set(kT, T), ie(h2(b, H), {
    ...oe,
    headers: pe
  });
}
function rA(b = {}) {
  const H = b.targetWindow ?? PT(), le = b.parentWindow ?? H.parent, T = tA(H, b.targetOrigin), ie = b.requestTimeoutMs ?? 1e4, oe = b.idFactory ?? IT;
  let pe = lA(H);
  const F = /* @__PURE__ */ new Set();
  function I(z) {
    le.postMessage(z, T);
  }
  function V(z, ae) {
    const ze = {
      protocol: RS,
      version: _S,
      kind: "event",
      type: z
    };
    ae !== void 0 && (ze.payload = ae), I(ze);
  }
  function Se(z) {
    if (!a2(z, le, T))
      return;
    const ae = e2(z.data);
    if (!ae.ok)
      return;
    const ze = ae.value;
    if (ze.kind !== "event" || ze.type !== "hana.theme.changed" || typeof ze.payload != "object" || ze.payload === null)
      return;
    const je = ze.payload;
    pe = {
      theme: typeof je.theme == "string" ? je.theme : pe.theme,
      cssUrl: typeof je.cssUrl == "string" ? je.cssUrl : pe.cssUrl
    };
    for (const it of F)
      it(pe);
  }
  function j(z, ae, ze = {}) {
    const je = oe(), it = ze.timeoutMs ?? ie;
    return new Promise((Ie, cl) => {
      const Et = () => {
        H.removeEventListener("message", jt), H.clearTimeout(Vt);
      }, jt = (Ce) => {
        if (!a2(Ce, le, T))
          return;
        const Qe = e2(Ce.data);
        if (!Qe.ok)
          return;
        const ot = Qe.value;
        ot.id !== je || ot.type !== z || (ot.kind === "response" && (Et(), Ie(ot.payload)), ot.kind === "error" && ot.error && (Et(), cl(new t2(ot.error))));
      }, Vt = H.setTimeout(() => {
        Et(), cl(new t2({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${z}.`
        }));
      }, it);
      H.addEventListener("message", jt);
      const Zt = {
        protocol: RS,
        version: _S,
        id: je,
        kind: "request",
        type: z
      };
      ae !== void 0 && (Zt.payload = ae), I(Zt);
    });
  }
  return {
    ready(z) {
      V("hana.ready", z);
    },
    assets: {
      url(z) {
        return iA(H, z);
      }
    },
    api: {
      url(z) {
        return h2(H, z);
      },
      fetch(z, ae) {
        return fA(H, z, ae);
      }
    },
    ui: {
      resize(z) {
        V(ld.UI_RESIZE, z);
      }
    },
    theme: {
      getSnapshot() {
        return { ...pe };
      },
      subscribe(z) {
        return F.size === 0 && H.addEventListener("message", Se), F.add(z), z({ ...pe }), () => {
          F.delete(z), F.size === 0 && H.removeEventListener("message", Se);
        };
      }
    },
    host: {
      request: j
    },
    toast: {
      show(z, ae) {
        return j(ld.TOAST_SHOW, z, ae);
      }
    },
    external: {
      open(z, ae) {
        return j(ld.EXTERNAL_OPEN, aA(z), ae);
      }
    },
    clipboard: {
      writeText(z, ae) {
        return j(ld.CLIPBOARD_WRITE_TEXT, nA(z), ae);
      }
    },
    resources: {
      open(z, ae) {
        return j(ld.RESOURCE_OPEN, z, ae);
      },
      pick(z = {}, ae) {
        return j(ld.RESOURCE_PICK, z, ae);
      },
      requestAccess(z, ae) {
        return j(ld.RESOURCE_REQUEST_ACCESS, z, ae);
      }
    }
  };
}
let n2 = null;
function Cn() {
  return n2 ??= rA(), n2;
}
const O0 = {
  ready(b) {
    return Cn().ready(b);
  },
  assets: {
    url(b) {
      return Cn().assets.url(b);
    }
  },
  api: {
    url(b) {
      return Cn().api.url(b);
    },
    fetch(b, H) {
      return Cn().api.fetch(b, H);
    }
  },
  ui: {
    resize(b) {
      return Cn().ui.resize(b);
    }
  },
  theme: {
    getSnapshot() {
      return Cn().theme.getSnapshot();
    },
    subscribe(b) {
      return Cn().theme.subscribe(b);
    }
  },
  host: {
    request(b, H, le) {
      return Cn().host.request(b, H, le);
    }
  },
  toast: {
    show(b, H) {
      return Cn().toast.show(b, H);
    }
  },
  external: {
    open(b, H) {
      return Cn().external.open(b, H);
    }
  },
  clipboard: {
    writeText(b, H) {
      return Cn().clipboard.writeText(b, H);
    }
  },
  resources: {
    open(b, H) {
      return Cn().resources.open(b, H);
    },
    pick(b, H) {
      return Cn().resources.pick(b, H);
    },
    requestAccess(b, H) {
      return Cn().resources.requestAccess(b, H);
    }
  }
};
function Un(...b) {
  return b.filter(Boolean).join(" ");
}
const u2 = {
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
}, sA = {
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
function dA({ mode: b = "inherit", theme: H, className: le, style: T, children: ie, "data-testid": oe = "hana-plugin-theme", ...pe }) {
  const F = typeof H == "string" ? H : void 0, I = hA(b, H);
  return Ee.jsx("div", { ...pe, "data-testid": oe, className: Un("hana-plugin-theme", le), "data-hana-theme-mode": b, "data-hana-theme": b === "hana" ? F : void 0, style: { ...I, ...T }, children: ie });
}
function hA(b, H) {
  if (b === "inherit")
    return {};
  const le = mA(b, H), T = {};
  for (const [ie, oe] of Object.entries(sA)) {
    const pe = le?.[ie];
    pe && (T[oe] = pe);
  }
  return T;
}
function mA(b, H) {
  if (typeof H == "string")
    return u2[H];
  if (H)
    return H;
  if (b === "hana")
    return u2["warm-paper"];
}
const i2 = ou.forwardRef(function({ variant: H = "secondary", size: le = "md", loading: T = !1, iconLeft: ie, iconRight: oe, disabled: pe, className: F, children: I, type: V = "button", ...Se }, j) {
  return Ee.jsxs("button", { ...Se, ref: j, type: V, disabled: pe || T, className: Un("hana-plugin-button", `hana-plugin-button-${H}`, `hana-plugin-button-${le}`, T && "hana-plugin-button-loading", F), children: [T ? Ee.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : ie, I && Ee.jsx("span", { className: "hana-plugin-button-label", children: I }), !T && oe] });
});
ou.forwardRef(function({ label: H, size: le = "md", variant: T = "ghost", className: ie, children: oe, type: pe = "button", ...F }, I) {
  return Ee.jsx("button", { ...F, ref: I, type: pe, "aria-label": H, title: F.title || H, className: Un("hana-plugin-icon-button", `hana-plugin-icon-button-${le}`, `hana-plugin-icon-button-${T}`, ie), children: oe });
});
const yA = ou.forwardRef(function({ label: H, hint: le, error: T, id: ie, className: oe, inputClassName: pe, ...F }, I) {
  const V = ou.useId(), Se = ie || V;
  return Ee.jsx(zS, { label: H, hint: le, error: T, htmlFor: Se, className: oe, children: Ee.jsx("input", { ...F, ref: I, id: Se, "aria-invalid": !!T, className: Un("hana-plugin-input", pe) }) });
});
ou.forwardRef(function({ label: H, hint: le, error: T, id: ie, className: oe, textareaClassName: pe, rows: F = 4, ...I }, V) {
  const Se = ou.useId(), j = ie || Se;
  return Ee.jsx(zS, { label: H, hint: le, error: T, htmlFor: j, className: oe, children: Ee.jsx("textarea", { ...I, ref: V, id: j, rows: F, "aria-invalid": !!T, className: Un("hana-plugin-textarea", pe) }) });
});
const pA = ou.forwardRef(function({ checked: H, onChange: le, label: T, disabled: ie, className: oe, onClick: pe, type: F = "button", ...I }, V) {
  const Se = typeof T == "string" ? T : I["aria-label"];
  return Ee.jsxs("span", { className: Un("hana-plugin-switch-wrap", oe), children: [Ee.jsx("button", { ...I, ref: V, type: F, role: "switch", "aria-checked": H, "aria-label": Se, disabled: ie, className: Un("hana-plugin-switch", H && "hana-plugin-switch-on"), onClick: (j) => {
    pe?.(j), !j.defaultPrevented && !ie && le?.(!H);
  }, children: Ee.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), T && Ee.jsx("span", { className: "hana-plugin-switch-label", children: T })] });
});
function gA({ options: b, value: H, onChange: le, label: T, hint: ie, error: oe, placeholder: pe = "Select", disabled: F = !1, className: I }) {
  const [V, Se] = ou.useState(!1), j = b.find((je) => je.value === H), z = j?.label || pe, ae = typeof T == "string" ? T : void 0, ze = [ae, z].filter(Boolean).join(" ");
  return Ee.jsx(zS, { label: T, hint: ie, error: oe, className: I, children: Ee.jsxs("div", { className: "hana-plugin-select", children: [Ee.jsxs("button", { type: "button", "aria-haspopup": "listbox", "aria-expanded": V, "aria-label": ze || void 0, disabled: F, className: Un("hana-plugin-select-trigger", !j && "hana-plugin-select-placeholder"), onClick: () => Se((je) => !je), children: [Ee.jsx("span", { className: "hana-plugin-select-value", children: z }), Ee.jsx("span", { className: "hana-plugin-select-arrow", "aria-hidden": !0, children: "▾" })] }), V && Ee.jsx("div", { className: "hana-plugin-select-popover", role: "listbox", "aria-label": ae, children: b.map((je) => Ee.jsx("button", { type: "button", role: "option", "aria-selected": je.value === H, disabled: je.disabled, className: Un("hana-plugin-select-option", je.value === H && "hana-plugin-select-option-selected"), onClick: () => {
    je.disabled || (le(je.value), Se(!1));
  }, children: je.label }, je.value)) })] }) });
}
function zS({ label: b, hint: H, error: le, htmlFor: T, className: ie, children: oe }) {
  return Ee.jsxs("div", { className: Un("hana-plugin-field", ie), children: [b && Ee.jsx("label", { className: "hana-plugin-field-label", htmlFor: T, children: b }), H && Ee.jsx("div", { className: "hana-plugin-field-hint", children: H }), oe, le && Ee.jsx("div", { className: "hana-plugin-field-error", children: le })] });
}
function vA({ title: b, description: H, actions: le, footer: T, children: ie, className: oe, ...pe }) {
  return Ee.jsxs("section", { ...pe, className: Un("hana-plugin-card", oe), children: [(b || H || le) && Ee.jsxs("header", { className: "hana-plugin-card-header", children: [Ee.jsxs("div", { className: "hana-plugin-card-heading", children: [b && Ee.jsx("h2", { className: "hana-plugin-card-title", children: b }), H && Ee.jsx("p", { className: "hana-plugin-card-description", children: H })] }), le && Ee.jsx("div", { className: "hana-plugin-card-actions", children: le })] }), Ee.jsx("div", { className: "hana-plugin-card-body", children: ie }), T && Ee.jsx("footer", { className: "hana-plugin-card-footer", children: T })] });
}
function c2({ label: b, hint: H, control: le, layout: T = "inline", className: ie, ...oe }) {
  return Ee.jsxs("div", { ...oe, className: Un("hana-plugin-setting-row", T === "stacked" ? "hana-plugin-setting-row-stacked" : "hana-plugin-setting-row-inline", ie), children: [Ee.jsxs("div", { className: "hana-plugin-setting-text", children: [Ee.jsx("div", { className: "hana-plugin-setting-label", children: b }), H && Ee.jsx("div", { className: "hana-plugin-setting-hint", children: H })] }), Ee.jsx("div", { className: "hana-plugin-setting-control", children: le })] });
}
function SA({ icon: b, title: H, description: le, action: T, className: ie, ...oe }) {
  return Ee.jsxs("div", { ...oe, className: Un("hana-plugin-empty", ie), children: [b && Ee.jsx("div", { className: "hana-plugin-empty-icon", children: b }), Ee.jsx("div", { className: "hana-plugin-empty-title", children: H }), le && Ee.jsx("div", { className: "hana-plugin-empty-description", children: le }), T && Ee.jsx("div", { className: "hana-plugin-empty-action", children: T })] });
}
function bA({ items: b, className: H, ...le }) {
  return Ee.jsx("ul", { ...le, className: Un("hana-plugin-list", H), children: b.map((T) => Ee.jsxs("li", { className: "hana-plugin-list-item", children: [T.icon && Ee.jsx("div", { className: "hana-plugin-list-icon", children: T.icon }), Ee.jsxs("div", { className: "hana-plugin-list-main", children: [Ee.jsxs("div", { className: "hana-plugin-list-line", children: [Ee.jsx("span", { className: "hana-plugin-list-title", children: T.title }), T.meta && Ee.jsx("span", { className: "hana-plugin-list-meta", children: T.meta })] }), T.description && Ee.jsx("div", { className: "hana-plugin-list-description", children: T.description })] }), T.action && Ee.jsx("div", { className: "hana-plugin-list-action", children: T.action })] }, T.id)) });
}
function EA() {
  const b = document.getElementById("root")?.dataset.surface || "page", [H, le] = ou.useState("inherit"), [T, ie] = ou.useState("PromptShelf"), [oe, pe] = ou.useState(!0);
  ou.useEffect(() => {
    O0.ready(), O0.ui.resize({ height: b === "widget" ? 320 : 520 });
  }, [b]);
  const F = ou.useMemo(() => H === "custom" ? { bg: "#F7F4EF", bgCard: "#FFFDF8", accent: "#537D96" } : void 0, [H]);
  async function I() {
    await O0.clipboard.writeText(T), await O0.toast.show({ message: "Copied title", type: "success" });
  }
  return /* @__PURE__ */ Ee.jsx(
    dA,
    {
      mode: H,
      theme: F || (H === "hana" ? "warm-paper" : void 0),
      className: "plugin-panel",
      children: /* @__PURE__ */ Ee.jsxs(
        vA,
        {
          title: T,
          description: "A Hana plugin panel using the SDK and shared components.",
          actions: /* @__PURE__ */ Ee.jsx(i2, { variant: "ghost", onClick: () => O0.external.open("https://example.com"), children: "Open" }),
          footer: /* @__PURE__ */ Ee.jsx(i2, { variant: "primary", onClick: I, children: "Copy title" }),
          children: [
            /* @__PURE__ */ Ee.jsx(
              c2,
              {
                label: "Enabled",
                hint: "Local iframe state; persist through plugin config when needed.",
                control: /* @__PURE__ */ Ee.jsx(pA, { checked: oe, onChange: pe, label: oe ? "On" : "Off" })
              }
            ),
            /* @__PURE__ */ Ee.jsx(
              c2,
              {
                label: "Theme",
                control: /* @__PURE__ */ Ee.jsx(
                  gA,
                  {
                    value: H,
                    onChange: (V) => le(V),
                    options: [
                      { value: "inherit", label: "Follow Hana" },
                      { value: "hana", label: "Warm paper" },
                      { value: "custom", label: "Custom" }
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ Ee.jsx(yA, { label: "Title", value: T, onChange: (V) => ie(V.currentTarget.value) }),
            /* @__PURE__ */ Ee.jsx(
              bA,
              {
                items: [
                  { id: "runtime", title: "@hana/plugin-runtime", meta: "Node" },
                  { id: "sdk", title: "@hana/plugin-sdk", meta: "iframe" },
                  { id: "components", title: "@hana/plugin-components", meta: "React" }
                ]
              }
            ),
            !oe && /* @__PURE__ */ Ee.jsx(SA, { title: "Paused", description: "Turn the switch back on to resume actions." })
          ]
        }
      )
    }
  );
}
const o2 = document.getElementById("root");
o2 && $T.createRoot(o2).render(/* @__PURE__ */ Ee.jsx(EA, {}));
