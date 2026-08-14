var Jv = { exports: {} }, b0 = {};
var YE;
function jT() {
  if (YE) return b0;
  YE = 1;
  var b = /* @__PURE__ */ Symbol.for("react.transitional.element"), H = /* @__PURE__ */ Symbol.for("react.fragment");
  function ae(_, ce, fe) {
    var pe = null;
    if (fe !== void 0 && (pe = "" + fe), ce.key !== void 0 && (pe = "" + ce.key), "key" in ce) {
      fe = {};
      for (var F in ce)
        F !== "key" && (fe[F] = ce[F]);
    } else fe = ce;
    return ce = fe.ref, {
      $$typeof: b,
      type: _,
      key: pe,
      ref: ce !== void 0 ? ce : null,
      props: fe
    };
  }
  return b0.Fragment = H, b0.jsx = ae, b0.jsxs = ae, b0;
}
var E0 = {}, Kv = { exports: {} }, $e = {};
var wE;
function qT() {
  if (wE) return $e;
  wE = 1;
  var b = /* @__PURE__ */ Symbol.for("react.transitional.element"), H = /* @__PURE__ */ Symbol.for("react.portal"), ae = /* @__PURE__ */ Symbol.for("react.fragment"), _ = /* @__PURE__ */ Symbol.for("react.strict_mode"), ce = /* @__PURE__ */ Symbol.for("react.profiler"), fe = /* @__PURE__ */ Symbol.for("react.consumer"), pe = /* @__PURE__ */ Symbol.for("react.context"), F = /* @__PURE__ */ Symbol.for("react.forward_ref"), P = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.memo"), be = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), R = Symbol.iterator;
  function I(S) {
    return S === null || typeof S != "object" ? null : (S = R && S[R] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var Ae = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Je = Object.assign, at = {};
  function Ie(S, q, te) {
    this.props = S, this.context = q, this.refs = at, this.updater = te || Ae;
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
  function Et(S, q, te) {
    this.props = S, this.context = q, this.refs = at, this.updater = te || Ae;
  }
  var jt = Et.prototype = new cl();
  jt.constructor = Et, Je(jt, Ie.prototype), jt.isPureReactComponent = !0;
  var Vt = Array.isArray;
  function Zt() {
  }
  var Me = { H: null, A: null, T: null, S: null }, Xe = Object.prototype.hasOwnProperty;
  function ot(S, q, te) {
    var ee = te.ref;
    return {
      $$typeof: b,
      type: S,
      key: q,
      ref: ee !== void 0 ? ee : null,
      props: te
    };
  }
  function he(S, q) {
    return ot(S.type, q, S.props);
  }
  function qt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === b;
  }
  function Se(S) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(te) {
      return q[te];
    });
  }
  var Le = /\/+/g;
  function Jt(S, q) {
    return typeof S == "object" && S !== null && S.key != null ? Se("" + S.key) : q.toString(36);
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
  function C(S, q, te, ee, Oe) {
    var Qe = typeof S;
    (Qe === "undefined" || Qe === "boolean") && (S = null);
    var De = !1;
    if (S === null) De = !0;
    else
      switch (Qe) {
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
            case be:
              return De = S._init, C(
                De(S._payload),
                q,
                te,
                ee,
                Oe
              );
          }
      }
    if (De)
      return Oe = Oe(S), De = ee === "" ? "." + Jt(S, 0) : ee, Vt(Oe) ? (te = "", De != null && (te = De.replace(Le, "$&/") + "/"), C(Oe, q, te, "", function(Ya) {
        return Ya;
      })) : Oe != null && (qt(Oe) && (Oe = he(
        Oe,
        te + (Oe.key == null || S && S.key === Oe.key ? "" : ("" + Oe.key).replace(
          Le,
          "$&/"
        ) + "/") + De
      )), q.push(Oe)), 1;
    De = 0;
    var Kt = ee === "" ? "." : ee + ":";
    if (Vt(S))
      for (var gt = 0; gt < S.length; gt++)
        ee = S[gt], Qe = Kt + Jt(ee, gt), De += C(
          ee,
          q,
          te,
          Qe,
          Oe
        );
    else if (gt = I(S), typeof gt == "function")
      for (S = gt.call(S), gt = 0; !(ee = S.next()).done; )
        ee = ee.value, Qe = Kt + Jt(ee, gt++), De += C(
          ee,
          q,
          te,
          Qe,
          Oe
        );
    else if (Qe === "object") {
      if (typeof S.then == "function")
        return C(
          Yt(S),
          q,
          te,
          ee,
          Oe
        );
      throw q = String(S), Error(
        "Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return De;
  }
  function J(S, q, te) {
    if (S == null) return S;
    var ee = [], Oe = 0;
    return C(S, ee, "", "", function(Qe) {
      return q.call(te, Qe, Oe++);
    }), ee;
  }
  function ne(S) {
    if (S._status === -1) {
      var q = S._result;
      q = q(), q.then(
        function(te) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = te);
        },
        function(te) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = te);
        }
      ), S._status === -1 && (S._status = 0, S._result = q);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var Ee = typeof reportError == "function" ? reportError : function(S) {
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
  }, Ce = {
    map: J,
    forEach: function(S, q, te) {
      J(
        S,
        function() {
          q.apply(this, arguments);
        },
        te
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
  return $e.Activity = B, $e.Children = Ce, $e.Component = Ie, $e.Fragment = ae, $e.Profiler = ce, $e.PureComponent = Et, $e.StrictMode = _, $e.Suspense = P, $e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Me, $e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return Me.H.useMemoCache(S);
    }
  }, $e.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, $e.cacheSignal = function() {
    return null;
  }, $e.cloneElement = function(S, q, te) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var ee = Je({}, S.props), Oe = S.key;
    if (q != null)
      for (Qe in q.key !== void 0 && (Oe = "" + q.key), q)
        !Xe.call(q, Qe) || Qe === "key" || Qe === "__self" || Qe === "__source" || Qe === "ref" && q.ref === void 0 || (ee[Qe] = q[Qe]);
    var Qe = arguments.length - 2;
    if (Qe === 1) ee.children = te;
    else if (1 < Qe) {
      for (var De = Array(Qe), Kt = 0; Kt < Qe; Kt++)
        De[Kt] = arguments[Kt + 2];
      ee.children = De;
    }
    return ot(S.type, Oe, ee);
  }, $e.createContext = function(S) {
    return S = {
      $$typeof: pe,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: fe,
      _context: S
    }, S;
  }, $e.createElement = function(S, q, te) {
    var ee, Oe = {}, Qe = null;
    if (q != null)
      for (ee in q.key !== void 0 && (Qe = "" + q.key), q)
        Xe.call(q, ee) && ee !== "key" && ee !== "__self" && ee !== "__source" && (Oe[ee] = q[ee]);
    var De = arguments.length - 2;
    if (De === 1) Oe.children = te;
    else if (1 < De) {
      for (var Kt = Array(De), gt = 0; gt < De; gt++)
        Kt[gt] = arguments[gt + 2];
      Oe.children = Kt;
    }
    if (S && S.defaultProps)
      for (ee in De = S.defaultProps, De)
        Oe[ee] === void 0 && (Oe[ee] = De[ee]);
    return ot(S, Qe, Oe);
  }, $e.createRef = function() {
    return { current: null };
  }, $e.forwardRef = function(S) {
    return { $$typeof: F, render: S };
  }, $e.isValidElement = qt, $e.lazy = function(S) {
    return {
      $$typeof: be,
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
    var q = Me.T, te = {};
    Me.T = te;
    try {
      var ee = S(), Oe = Me.S;
      Oe !== null && Oe(te, ee), typeof ee == "object" && ee !== null && typeof ee.then == "function" && ee.then(Zt, Ee);
    } catch (Qe) {
      Ee(Qe);
    } finally {
      q !== null && te.types !== null && (q.types = te.types), Me.T = q;
    }
  }, $e.unstable_useCacheRefresh = function() {
    return Me.H.useCacheRefresh();
  }, $e.use = function(S) {
    return Me.H.use(S);
  }, $e.useActionState = function(S, q, te) {
    return Me.H.useActionState(S, q, te);
  }, $e.useCallback = function(S, q) {
    return Me.H.useCallback(S, q);
  }, $e.useContext = function(S) {
    return Me.H.useContext(S);
  }, $e.useDebugValue = function() {
  }, $e.useDeferredValue = function(S, q) {
    return Me.H.useDeferredValue(S, q);
  }, $e.useEffect = function(S, q) {
    return Me.H.useEffect(S, q);
  }, $e.useEffectEvent = function(S) {
    return Me.H.useEffectEvent(S);
  }, $e.useId = function() {
    return Me.H.useId();
  }, $e.useImperativeHandle = function(S, q, te) {
    return Me.H.useImperativeHandle(S, q, te);
  }, $e.useInsertionEffect = function(S, q) {
    return Me.H.useInsertionEffect(S, q);
  }, $e.useLayoutEffect = function(S, q) {
    return Me.H.useLayoutEffect(S, q);
  }, $e.useMemo = function(S, q) {
    return Me.H.useMemo(S, q);
  }, $e.useOptimistic = function(S, q) {
    return Me.H.useOptimistic(S, q);
  }, $e.useReducer = function(S, q, te) {
    return Me.H.useReducer(S, q, te);
  }, $e.useRef = function(S) {
    return Me.H.useRef(S);
  }, $e.useState = function(S) {
    return Me.H.useState(S);
  }, $e.useSyncExternalStore = function(S, q, te) {
    return Me.H.useSyncExternalStore(
      S,
      q,
      te
    );
  }, $e.useTransition = function() {
    return Me.H.useTransition();
  }, $e.version = "19.2.8", $e;
}
var O0 = { exports: {} };
O0.exports;
var GE;
function YT() {
  return GE || (GE = 1, (function(b, H) {
    process.env.NODE_ENV !== "production" && (function() {
      function ae(g, N) {
        Object.defineProperty(fe.prototype, g, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              N[0],
              N[1]
            );
          }
        });
      }
      function _(g) {
        return g === null || typeof g != "object" ? null : (g = Mi && g[Mi] || g["@@iterator"], typeof g == "function" ? g : null);
      }
      function ce(g, N) {
        g = (g = g.constructor) && (g.displayName || g.name) || "ReactClass";
        var le = g + "." + N;
        Ci[le] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          N,
          g
        ), Ci[le] = !0);
      }
      function fe(g, N, le) {
        this.props = g, this.context = N, this.refs = vt, this.updater = le || wa;
      }
      function pe() {
      }
      function F(g, N, le) {
        this.props = g, this.context = N, this.refs = vt, this.updater = le || wa;
      }
      function P() {
      }
      function V(g) {
        return "" + g;
      }
      function be(g) {
        try {
          V(g);
          var N = !1;
        } catch {
          N = !0;
        }
        if (N) {
          N = console;
          var le = N.error, ue = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return le.call(
            N,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ue
          ), V(g);
        }
      }
      function B(g) {
        if (g == null) return null;
        if (typeof g == "function")
          return g.$$typeof === yr ? null : g.displayName || g.name || null;
        if (typeof g == "string") return g;
        switch (g) {
          case S:
            return "Fragment";
          case te:
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
            case Ce:
              return "Portal";
            case Oe:
              return g.displayName || "Context";
            case ee:
              return (g._context.displayName || "Context") + ".Consumer";
            case Qe:
              var N = g.render;
              return g = g.displayName, g || (g = N.displayName || N.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
            case gt:
              return N = g.displayName || null, N !== null ? N : B(g.type) || "Memo";
            case Ya:
              N = g._payload, g = g._init;
              try {
                return B(g(N));
              } catch {
              }
          }
        return null;
      }
      function R(g) {
        if (g === S) return "<>";
        if (typeof g == "object" && g !== null && g.$$typeof === Ya)
          return "<...>";
        try {
          var N = B(g);
          return N ? "<" + N + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function I() {
        var g = me.A;
        return g === null ? null : g.getOwner();
      }
      function Ae() {
        return Error("react-stack-top-frame");
      }
      function Je(g) {
        if (Ui.call(g, "key")) {
          var N = Object.getOwnPropertyDescriptor(g, "key").get;
          if (N && N.isReactWarning) return !1;
        }
        return g.key !== void 0;
      }
      function at(g, N) {
        function le() {
          Tc || (Tc = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            N
          ));
        }
        le.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: le,
          configurable: !0
        });
      }
      function Ie() {
        var g = B(this.type);
        return ad[g] || (ad[g] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), g = this.props.ref, g !== void 0 ? g : null;
      }
      function cl(g, N, le, ue, ye, He) {
        var ge = le.ref;
        return g = {
          $$typeof: Ee,
          type: g,
          key: N,
          props: le,
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
          value: He
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
        return typeof g == "object" && g !== null && g.$$typeof === Ee;
      }
      function Zt(g) {
        var N = { "=": "=0", ":": "=2" };
        return "$" + g.replace(/[=:]/g, function(le) {
          return N[le];
        });
      }
      function Me(g, N) {
        return typeof g == "object" && g !== null && g.key != null ? (be(g.key), Zt("" + g.key)) : N.toString(36);
      }
      function Xe(g) {
        switch (g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
          default:
            switch (typeof g.status == "string" ? g.then(P, P) : (g.status = "pending", g.then(
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
      function ot(g, N, le, ue, ye) {
        var He = typeof g;
        (He === "undefined" || He === "boolean") && (g = null);
        var ge = !1;
        if (g === null) ge = !0;
        else
          switch (He) {
            case "bigint":
            case "string":
            case "number":
              ge = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case Ee:
                case Ce:
                  ge = !0;
                  break;
                case Ya:
                  return ge = g._init, ot(
                    ge(g._payload),
                    N,
                    le,
                    ue,
                    ye
                  );
              }
          }
        if (ge) {
          ge = g, ye = ye(ge);
          var nt = ue === "" ? "." + Me(ge, 0) : ue;
          return Ec(ye) ? (le = "", nt != null && (le = nt.replace(nd, "$&/") + "/"), ot(ye, N, le, "", function(ta) {
            return ta;
          })) : ye != null && (Vt(ye) && (ye.key != null && (ge && ge.key === ye.key || be(ye.key)), le = Et(
            ye,
            le + (ye.key == null || ge && ge.key === ye.key ? "" : ("" + ye.key).replace(
              nd,
              "$&/"
            ) + "/") + nt
          ), ue !== "" && ge != null && Vt(ge) && ge.key == null && ge._store && !ge._store.validated && (le._store.validated = 2), ye = le), N.push(ye)), 1;
        }
        if (ge = 0, nt = ue === "" ? "." : ue + ":", Ec(g))
          for (var Ve = 0; Ve < g.length; Ve++)
            ue = g[Ve], He = nt + Me(ue, Ve), ge += ot(
              ue,
              N,
              le,
              He,
              ye
            );
        else if (Ve = _(g), typeof Ve == "function")
          for (Ve === g.entries && (Un || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Un = !0), g = Ve.call(g), Ve = 0; !(ue = g.next()).done; )
            ue = ue.value, He = nt + Me(ue, Ve++), ge += ot(
              ue,
              N,
              le,
              He,
              ye
            );
        else if (He === "object") {
          if (typeof g.then == "function")
            return ot(
              Xe(g),
              N,
              le,
              ue,
              ye
            );
          throw N = String(g), Error(
            "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return ge;
      }
      function he(g, N, le) {
        if (g == null) return g;
        var ue = [], ye = 0;
        return ot(g, ue, "", "", function(He) {
          return N.call(le, He, ye++);
        }), ue;
      }
      function qt(g) {
        if (g._status === -1) {
          var N = g._ioInfo;
          N != null && (N.start = N.end = performance.now()), N = g._result;
          var le = N();
          if (le.then(
            function(ye) {
              if (g._status === 0 || g._status === -1) {
                g._status = 1, g._result = ye;
                var He = g._ioInfo;
                He != null && (He.end = performance.now()), le.status === void 0 && (le.status = "fulfilled", le.value = ye);
              }
            },
            function(ye) {
              if (g._status === 0 || g._status === -1) {
                g._status = 2, g._result = ye;
                var He = g._ioInfo;
                He != null && (He.end = performance.now()), le.status === void 0 && (le.status = "rejected", le.reason = ye);
              }
            }
          ), N = g._ioInfo, N != null) {
            N.value = le;
            var ue = le.displayName;
            typeof ue == "string" && (N.name = ue);
          }
          g._status === -1 && (g._status = 0, g._result = le);
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
      function Se() {
        var g = me.H;
        return g === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), g;
      }
      function Le() {
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
      function J(g, N, le) {
        var ue = me.actQueue;
        if (ue !== null)
          if (ue.length !== 0)
            try {
              ne(ue), Jt(function() {
                return J(g, N, le);
              });
              return;
            } catch (ye) {
              me.thrownErrors.push(ye);
            }
          else me.actQueue = null;
        0 < me.thrownErrors.length ? (ue = Yt(me.thrownErrors), me.thrownErrors.length = 0, le(ue)) : N(g);
      }
      function ne(g) {
        if (!Ga) {
          Ga = !0;
          var N = 0;
          try {
            for (; N < g.length; N++) {
              var le = g[N];
              do {
                me.didUsePromise = !1;
                var ue = le(!1);
                if (ue !== null) {
                  if (me.didUsePromise) {
                    g[N] = le, g.splice(0, N);
                    return;
                  }
                  le = ue;
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
      var Ee = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ce = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), q = /* @__PURE__ */ Symbol.for("react.strict_mode"), te = /* @__PURE__ */ Symbol.for("react.profiler"), ee = /* @__PURE__ */ Symbol.for("react.consumer"), Oe = /* @__PURE__ */ Symbol.for("react.context"), Qe = /* @__PURE__ */ Symbol.for("react.forward_ref"), De = /* @__PURE__ */ Symbol.for("react.suspense"), Kt = /* @__PURE__ */ Symbol.for("react.suspense_list"), gt = /* @__PURE__ */ Symbol.for("react.memo"), Ya = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.activity"), Mi = Symbol.iterator, Ci = {}, wa = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(g) {
          ce(g, "forceUpdate");
        },
        enqueueReplaceState: function(g) {
          ce(g, "replaceState");
        },
        enqueueSetState: function(g) {
          ce(g, "setState");
        }
      }, cu = Object.assign, vt = {};
      Object.freeze(vt), fe.prototype.isReactComponent = {}, fe.prototype.setState = function(g, N) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, g, N, "setState");
      }, fe.prototype.forceUpdate = function(g) {
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
      for (Hi in ea)
        ea.hasOwnProperty(Hi) && ae(Hi, ea[Hi]);
      pe.prototype = fe.prototype, ea = F.prototype = new pe(), ea.constructor = F, cu(ea, fe.prototype), ea.isPureReactComponent = !0;
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
      }, Ui = Object.prototype.hasOwnProperty, ou = console.createTask ? console.createTask : function() {
        return null;
      };
      ea = {
        react_stack_bottom_frame: function(g) {
          return g();
        }
      };
      var Tc, Sl, ad = {}, No = ea.react_stack_bottom_frame.bind(
        ea,
        Ae
      )(), xo = ou(R(Ae)), Un = !1, nd = /\/+/g, Bo = typeof reportError == "function" ? reportError : function(g) {
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
          return Se().useMemoCache(g);
        }
      });
      var Hi = {
        map: he,
        forEach: function(g, N, le) {
          he(
            g,
            function() {
              N.apply(this, arguments);
            },
            le
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
      H.Activity = re, H.Children = Hi, H.Component = fe, H.Fragment = S, H.Profiler = te, H.PureComponent = F, H.StrictMode = q, H.Suspense = De, H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = me, H.__COMPILER_RUNTIME = ea, H.act = function(g) {
        var N = me.actQueue, le = dn;
        dn++;
        var ue = me.actQueue = N !== null ? N : [], ye = !1;
        try {
          var He = g();
        } catch (Ve) {
          me.thrownErrors.push(Ve);
        }
        if (0 < me.thrownErrors.length)
          throw C(N, le), g = Yt(me.thrownErrors), me.thrownErrors.length = 0, g;
        if (He !== null && typeof He == "object" && typeof He.then == "function") {
          var ge = He;
          return Hl(function() {
            ye || Ol || (Ol = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Ve, ta) {
              ye = !0, ge.then(
                function(hn) {
                  if (C(N, le), le === 0) {
                    try {
                      ne(ue), Jt(function() {
                        return J(
                          hn,
                          Ve,
                          ta
                        );
                      });
                    } catch (jo) {
                      me.thrownErrors.push(jo);
                    }
                    if (0 < me.thrownErrors.length) {
                      var Ni = Yt(
                        me.thrownErrors
                      );
                      me.thrownErrors.length = 0, ta(Ni);
                    }
                  } else Ve(hn);
                },
                function(hn) {
                  C(N, le), 0 < me.thrownErrors.length && (hn = Yt(
                    me.thrownErrors
                  ), me.thrownErrors.length = 0), ta(hn);
                }
              );
            }
          };
        }
        var nt = He;
        if (C(N, le), le === 0 && (ne(ue), ue.length !== 0 && Hl(function() {
          ye || Ol || (Ol = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), me.actQueue = null), 0 < me.thrownErrors.length)
          throw g = Yt(me.thrownErrors), me.thrownErrors.length = 0, g;
        return {
          then: function(Ve, ta) {
            ye = !0, le === 0 ? (me.actQueue = ue, Jt(function() {
              return J(
                nt,
                Ve,
                ta
              );
            })) : Ve(nt);
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
      }, H.cloneElement = function(g, N, le) {
        if (g == null)
          throw Error(
            "The argument must be a React element, but you passed " + g + "."
          );
        var ue = cu({}, g.props), ye = g.key, He = g._owner;
        if (N != null) {
          var ge;
          e: {
            if (Ui.call(N, "ref") && (ge = Object.getOwnPropertyDescriptor(
              N,
              "ref"
            ).get) && ge.isReactWarning) {
              ge = !1;
              break e;
            }
            ge = N.ref !== void 0;
          }
          ge && (He = I()), Je(N) && (be(N.key), ye = "" + N.key);
          for (nt in N)
            !Ui.call(N, nt) || nt === "key" || nt === "__self" || nt === "__source" || nt === "ref" && N.ref === void 0 || (ue[nt] = N[nt]);
        }
        var nt = arguments.length - 2;
        if (nt === 1) ue.children = le;
        else if (1 < nt) {
          ge = Array(nt);
          for (var Ve = 0; Ve < nt; Ve++)
            ge[Ve] = arguments[Ve + 2];
          ue.children = ge;
        }
        for (ue = cl(
          g.type,
          ye,
          ue,
          He,
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
          $$typeof: ee,
          _context: g
        }, g._currentRenderer = null, g._currentRenderer2 = null, g;
      }, H.createElement = function(g, N, le) {
        for (var ue = 2; ue < arguments.length; ue++)
          jt(arguments[ue]);
        ue = {};
        var ye = null;
        if (N != null)
          for (Ve in Sl || !("__self" in N) || "key" in N || (Sl = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), Je(N) && (be(N.key), ye = "" + N.key), N)
            Ui.call(N, Ve) && Ve !== "key" && Ve !== "__self" && Ve !== "__source" && (ue[Ve] = N[Ve]);
        var He = arguments.length - 2;
        if (He === 1) ue.children = le;
        else if (1 < He) {
          for (var ge = Array(He), nt = 0; nt < He; nt++)
            ge[nt] = arguments[nt + 2];
          Object.freeze && Object.freeze(ge), ue.children = ge;
        }
        if (g && g.defaultProps)
          for (Ve in He = g.defaultProps, He)
            ue[Ve] === void 0 && (ue[Ve] = He[Ve]);
        ye && at(
          ue,
          typeof g == "function" ? g.displayName || g.name || "Unknown" : g
        );
        var Ve = 1e4 > me.recentlyCreatedOwnerStacks++;
        return cl(
          g,
          ye,
          ue,
          I(),
          Ve ? Error("react-stack-top-frame") : No,
          Ve ? ou(R(g)) : xo
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
        var N = { $$typeof: Qe, render: g }, le;
        return Object.defineProperty(N, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return le;
          },
          set: function(ue) {
            le = ue, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ue }), g.displayName = ue);
          }
        }), N;
      }, H.isValidElement = Vt, H.lazy = function(g) {
        g = { _status: -1, _result: g };
        var N = {
          $$typeof: Ya,
          _payload: g,
          _init: qt
        }, le = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return g._ioInfo = le, N._debugInfo = [{ awaited: le }], N;
      }, H.memo = function(g, N) {
        g == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          g === null ? "null" : typeof g
        ), N = {
          $$typeof: gt,
          type: g,
          compare: N === void 0 ? null : N
        };
        var le;
        return Object.defineProperty(N, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return le;
          },
          set: function(ue) {
            le = ue, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ue }), g.displayName = ue);
          }
        }), N;
      }, H.startTransition = function(g) {
        var N = me.T, le = {};
        le._updatedFibers = /* @__PURE__ */ new Set(), me.T = le;
        try {
          var ue = g(), ye = me.S;
          ye !== null && ye(le, ue), typeof ue == "object" && ue !== null && typeof ue.then == "function" && (me.asyncTransitions++, ue.then(Le, Le), ue.then(P, Bo));
        } catch (He) {
          Bo(He);
        } finally {
          N === null && le._updatedFibers && (g = le._updatedFibers.size, le._updatedFibers.clear(), 10 < g && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), N !== null && le.types !== null && (N.types !== null && N.types !== le.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), N.types = le.types), me.T = N;
        }
      }, H.unstable_useCacheRefresh = function() {
        return Se().useCacheRefresh();
      }, H.use = function(g) {
        return Se().use(g);
      }, H.useActionState = function(g, N, le) {
        return Se().useActionState(
          g,
          N,
          le
        );
      }, H.useCallback = function(g, N) {
        return Se().useCallback(g, N);
      }, H.useContext = function(g) {
        var N = Se();
        return g.$$typeof === ee && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), N.useContext(g);
      }, H.useDebugValue = function(g, N) {
        return Se().useDebugValue(g, N);
      }, H.useDeferredValue = function(g, N) {
        return Se().useDeferredValue(g, N);
      }, H.useEffect = function(g, N) {
        return g == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Se().useEffect(g, N);
      }, H.useEffectEvent = function(g) {
        return Se().useEffectEvent(g);
      }, H.useId = function() {
        return Se().useId();
      }, H.useImperativeHandle = function(g, N, le) {
        return Se().useImperativeHandle(g, N, le);
      }, H.useInsertionEffect = function(g, N) {
        return g == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Se().useInsertionEffect(g, N);
      }, H.useLayoutEffect = function(g, N) {
        return g == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Se().useLayoutEffect(g, N);
      }, H.useMemo = function(g, N) {
        return Se().useMemo(g, N);
      }, H.useOptimistic = function(g, N) {
        return Se().useOptimistic(g, N);
      }, H.useReducer = function(g, N, le) {
        return Se().useReducer(g, N, le);
      }, H.useRef = function(g) {
        return Se().useRef(g);
      }, H.useState = function(g) {
        return Se().useState(g);
      }, H.useSyncExternalStore = function(g, N, le) {
        return Se().useSyncExternalStore(
          g,
          N,
          le
        );
      }, H.useTransition = function() {
        return Se().useTransition();
      }, H.version = "19.2.8", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(O0, O0.exports)), O0.exports;
}
var LE;
function Om() {
  return LE || (LE = 1, process.env.NODE_ENV === "production" ? Kv.exports = qT() : Kv.exports = YT()), Kv.exports;
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
        case at:
          return "Fragment";
        case cl:
          return "Profiler";
        case Ie:
          return "StrictMode";
        case Zt:
          return "Suspense";
        case Me:
          return "SuspenseList";
        case he:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case Je:
            return "Portal";
          case jt:
            return S.displayName || "Context";
          case Et:
            return (S._context.displayName || "Context") + ".Consumer";
          case Vt:
            var q = S.render;
            return S = S.displayName, S || (S = q.displayName || q.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case Xe:
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
    function ae(S) {
      try {
        H(S);
        var q = !1;
      } catch {
        q = !0;
      }
      if (q) {
        q = console;
        var te = q.error, ee = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return te.call(
          q,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ee
        ), H(S);
      }
    }
    function _(S) {
      if (S === at) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === ot)
        return "<...>";
      try {
        var q = b(S);
        return q ? "<" + q + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function ce() {
      var S = Se.A;
      return S === null ? null : S.getOwner();
    }
    function fe() {
      return Error("react-stack-top-frame");
    }
    function pe(S) {
      if (Le.call(S, "key")) {
        var q = Object.getOwnPropertyDescriptor(S, "key").get;
        if (q && q.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function F(S, q) {
      function te() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          q
        ));
      }
      te.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: te,
        configurable: !0
      });
    }
    function P() {
      var S = b(this.type);
      return J[S] || (J[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function V(S, q, te, ee, Oe, Qe) {
      var De = te.ref;
      return S = {
        $$typeof: Ae,
        type: S,
        key: q,
        props: te,
        _owner: ee
      }, (De !== void 0 ? De : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: P
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
        value: Qe
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function be(S, q, te, ee, Oe, Qe) {
      var De = q.children;
      if (De !== void 0)
        if (ee)
          if (Jt(De)) {
            for (ee = 0; ee < De.length; ee++)
              B(De[ee]);
            Object.freeze && Object.freeze(De);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else B(De);
      if (Le.call(q, "key")) {
        De = b(S);
        var Kt = Object.keys(q).filter(function(Ya) {
          return Ya !== "key";
        });
        ee = 0 < Kt.length ? "{key: someKey, " + Kt.join(": ..., ") + ": ...}" : "{key: someKey}", Ce[De + ee] || (Kt = 0 < Kt.length ? "{" + Kt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ee,
          De,
          Kt,
          De
        ), Ce[De + ee] = !0);
      }
      if (De = null, te !== void 0 && (ae(te), De = "" + te), pe(q) && (ae(q.key), De = "" + q.key), "key" in q) {
        te = {};
        for (var gt in q)
          gt !== "key" && (te[gt] = q[gt]);
      } else te = q;
      return De && F(
        te,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), V(
        S,
        De,
        te,
        ce(),
        Oe,
        Qe
      );
    }
    function B(S) {
      R(S) ? S._store && (S._store.validated = 1) : typeof S == "object" && S !== null && S.$$typeof === ot && (S._payload.status === "fulfilled" ? R(S._payload.value) && S._payload.value._store && (S._payload.value._store.validated = 1) : S._store && (S._store.validated = 1));
    }
    function R(S) {
      return typeof S == "object" && S !== null && S.$$typeof === Ae;
    }
    var I = Om(), Ae = /* @__PURE__ */ Symbol.for("react.transitional.element"), Je = /* @__PURE__ */ Symbol.for("react.portal"), at = /* @__PURE__ */ Symbol.for("react.fragment"), Ie = /* @__PURE__ */ Symbol.for("react.strict_mode"), cl = /* @__PURE__ */ Symbol.for("react.profiler"), Et = /* @__PURE__ */ Symbol.for("react.consumer"), jt = /* @__PURE__ */ Symbol.for("react.context"), Vt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Zt = /* @__PURE__ */ Symbol.for("react.suspense"), Me = /* @__PURE__ */ Symbol.for("react.suspense_list"), Xe = /* @__PURE__ */ Symbol.for("react.memo"), ot = /* @__PURE__ */ Symbol.for("react.lazy"), he = /* @__PURE__ */ Symbol.for("react.activity"), qt = /* @__PURE__ */ Symbol.for("react.client.reference"), Se = I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Le = Object.prototype.hasOwnProperty, Jt = Array.isArray, Yt = console.createTask ? console.createTask : function() {
      return null;
    };
    I = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var C, J = {}, ne = I.react_stack_bottom_frame.bind(
      I,
      fe
    )(), Ee = Yt(_(fe)), Ce = {};
    E0.Fragment = at, E0.jsx = function(S, q, te) {
      var ee = 1e4 > Se.recentlyCreatedOwnerStacks++;
      return be(
        S,
        q,
        te,
        !1,
        ee ? Error("react-stack-top-frame") : ne,
        ee ? Yt(_(S)) : Ee
      );
    }, E0.jsxs = function(S, q, te) {
      var ee = 1e4 > Se.recentlyCreatedOwnerStacks++;
      return be(
        S,
        q,
        te,
        !0,
        ee ? Error("react-stack-top-frame") : ne,
        ee ? Yt(_(S)) : Ee
      );
    };
  })()), E0;
}
var QE;
function GT() {
  return QE || (QE = 1, process.env.NODE_ENV === "production" ? Jv.exports = jT() : Jv.exports = wT()), Jv.exports;
}
var xe = GT(), zi = Om(), $v = { exports: {} }, T0 = {}, kv = { exports: {} }, AS = {};
var VE;
function LT() {
  return VE || (VE = 1, (function(b) {
    function H(C, J) {
      var ne = C.length;
      C.push(J);
      e: for (; 0 < ne; ) {
        var Ee = ne - 1 >>> 1, Ce = C[Ee];
        if (0 < ce(Ce, J))
          C[Ee] = J, C[ne] = Ce, ne = Ee;
        else break e;
      }
    }
    function ae(C) {
      return C.length === 0 ? null : C[0];
    }
    function _(C) {
      if (C.length === 0) return null;
      var J = C[0], ne = C.pop();
      if (ne !== J) {
        C[0] = ne;
        e: for (var Ee = 0, Ce = C.length, S = Ce >>> 1; Ee < S; ) {
          var q = 2 * (Ee + 1) - 1, te = C[q], ee = q + 1, Oe = C[ee];
          if (0 > ce(te, ne))
            ee < Ce && 0 > ce(Oe, te) ? (C[Ee] = Oe, C[ee] = ne, Ee = ee) : (C[Ee] = te, C[q] = ne, Ee = q);
          else if (ee < Ce && 0 > ce(Oe, ne))
            C[Ee] = Oe, C[ee] = ne, Ee = ee;
          else break e;
        }
      }
      return J;
    }
    function ce(C, J) {
      var ne = C.sortIndex - J.sortIndex;
      return ne !== 0 ? ne : C.id - J.id;
    }
    if (b.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var fe = performance;
      b.unstable_now = function() {
        return fe.now();
      };
    } else {
      var pe = Date, F = pe.now();
      b.unstable_now = function() {
        return pe.now() - F;
      };
    }
    var P = [], V = [], be = 1, B = null, R = 3, I = !1, Ae = !1, Je = !1, at = !1, Ie = typeof setTimeout == "function" ? setTimeout : null, cl = typeof clearTimeout == "function" ? clearTimeout : null, Et = typeof setImmediate < "u" ? setImmediate : null;
    function jt(C) {
      for (var J = ae(V); J !== null; ) {
        if (J.callback === null) _(V);
        else if (J.startTime <= C)
          _(V), J.sortIndex = J.expirationTime, H(P, J);
        else break;
        J = ae(V);
      }
    }
    function Vt(C) {
      if (Je = !1, jt(C), !Ae)
        if (ae(P) !== null)
          Ae = !0, Zt || (Zt = !0, Se());
        else {
          var J = ae(V);
          J !== null && Yt(Vt, J.startTime - C);
        }
    }
    var Zt = !1, Me = -1, Xe = 5, ot = -1;
    function he() {
      return at ? !0 : !(b.unstable_now() - ot < Xe);
    }
    function qt() {
      if (at = !1, Zt) {
        var C = b.unstable_now();
        ot = C;
        var J = !0;
        try {
          e: {
            Ae = !1, Je && (Je = !1, cl(Me), Me = -1), I = !0;
            var ne = R;
            try {
              t: {
                for (jt(C), B = ae(P); B !== null && !(B.expirationTime > C && he()); ) {
                  var Ee = B.callback;
                  if (typeof Ee == "function") {
                    B.callback = null, R = B.priorityLevel;
                    var Ce = Ee(
                      B.expirationTime <= C
                    );
                    if (C = b.unstable_now(), typeof Ce == "function") {
                      B.callback = Ce, jt(C), J = !0;
                      break t;
                    }
                    B === ae(P) && _(P), jt(C);
                  } else _(P);
                  B = ae(P);
                }
                if (B !== null) J = !0;
                else {
                  var S = ae(V);
                  S !== null && Yt(
                    Vt,
                    S.startTime - C
                  ), J = !1;
                }
              }
              break e;
            } finally {
              B = null, R = ne, I = !1;
            }
            J = void 0;
          }
        } finally {
          J ? Se() : Zt = !1;
        }
      }
    }
    var Se;
    if (typeof Et == "function")
      Se = function() {
        Et(qt);
      };
    else if (typeof MessageChannel < "u") {
      var Le = new MessageChannel(), Jt = Le.port2;
      Le.port1.onmessage = qt, Se = function() {
        Jt.postMessage(null);
      };
    } else
      Se = function() {
        Ie(qt, 0);
      };
    function Yt(C, J) {
      Me = Ie(function() {
        C(b.unstable_now());
      }, J);
    }
    b.unstable_IdlePriority = 5, b.unstable_ImmediatePriority = 1, b.unstable_LowPriority = 4, b.unstable_NormalPriority = 3, b.unstable_Profiling = null, b.unstable_UserBlockingPriority = 2, b.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, b.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Xe = 0 < C ? Math.floor(1e3 / C) : 5;
    }, b.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, b.unstable_next = function(C) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = R;
      }
      var ne = R;
      R = J;
      try {
        return C();
      } finally {
        R = ne;
      }
    }, b.unstable_requestPaint = function() {
      at = !0;
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
      var ne = R;
      R = C;
      try {
        return J();
      } finally {
        R = ne;
      }
    }, b.unstable_scheduleCallback = function(C, J, ne) {
      var Ee = b.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? Ee + ne : Ee) : ne = Ee, C) {
        case 1:
          var Ce = -1;
          break;
        case 2:
          Ce = 250;
          break;
        case 5:
          Ce = 1073741823;
          break;
        case 4:
          Ce = 1e4;
          break;
        default:
          Ce = 5e3;
      }
      return Ce = ne + Ce, C = {
        id: be++,
        callback: J,
        priorityLevel: C,
        startTime: ne,
        expirationTime: Ce,
        sortIndex: -1
      }, ne > Ee ? (C.sortIndex = ne, H(V, C), ae(P) === null && C === ae(V) && (Je ? (cl(Me), Me = -1) : Je = !0, Yt(Vt, ne - Ee))) : (C.sortIndex = Ce, H(P, C), Ae || I || (Ae = !0, Zt || (Zt = !0, Se()))), C;
    }, b.unstable_shouldYield = he, b.unstable_wrapCallback = function(C) {
      var J = R;
      return function() {
        var ne = R;
        R = J;
        try {
          return C.apply(this, arguments);
        } finally {
          R = ne;
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
          Se = C;
          var J = !0;
          try {
            e: {
              Et = !1, jt && (jt = !1, Me(he), he = -1), cl = !0;
              var ne = Ie;
              try {
                t: {
                  for (pe(C), at = _(I); at !== null && !(at.expirationTime > C && P()); ) {
                    var Ee = at.callback;
                    if (typeof Ee == "function") {
                      at.callback = null, Ie = at.priorityLevel;
                      var Ce = Ee(
                        at.expirationTime <= C
                      );
                      if (C = b.unstable_now(), typeof Ce == "function") {
                        at.callback = Ce, pe(C), J = !0;
                        break t;
                      }
                      at === _(I) && ce(I), pe(C);
                    } else ce(I);
                    at = _(I);
                  }
                  if (at !== null) J = !0;
                  else {
                    var S = _(Ae);
                    S !== null && V(
                      F,
                      S.startTime - C
                    ), J = !1;
                  }
                }
                break e;
              } finally {
                at = null, Ie = ne, cl = !1;
              }
              J = void 0;
            }
          } finally {
            J ? Le() : ot = !1;
          }
        }
      }
      function ae(C, J) {
        var ne = C.length;
        C.push(J);
        e: for (; 0 < ne; ) {
          var Ee = ne - 1 >>> 1, Ce = C[Ee];
          if (0 < fe(Ce, J))
            C[Ee] = J, C[ne] = Ce, ne = Ee;
          else break e;
        }
      }
      function _(C) {
        return C.length === 0 ? null : C[0];
      }
      function ce(C) {
        if (C.length === 0) return null;
        var J = C[0], ne = C.pop();
        if (ne !== J) {
          C[0] = ne;
          e: for (var Ee = 0, Ce = C.length, S = Ce >>> 1; Ee < S; ) {
            var q = 2 * (Ee + 1) - 1, te = C[q], ee = q + 1, Oe = C[ee];
            if (0 > fe(te, ne))
              ee < Ce && 0 > fe(Oe, te) ? (C[Ee] = Oe, C[ee] = ne, Ee = ee) : (C[Ee] = te, C[q] = ne, Ee = q);
            else if (ee < Ce && 0 > fe(Oe, ne))
              C[Ee] = Oe, C[ee] = ne, Ee = ee;
            else break e;
          }
        }
        return J;
      }
      function fe(C, J) {
        var ne = C.sortIndex - J.sortIndex;
        return ne !== 0 ? ne : C.id - J.id;
      }
      function pe(C) {
        for (var J = _(Ae); J !== null; ) {
          if (J.callback === null) ce(Ae);
          else if (J.startTime <= C)
            ce(Ae), J.sortIndex = J.expirationTime, ae(I, J);
          else break;
          J = _(Ae);
        }
      }
      function F(C) {
        if (jt = !1, pe(C), !Et)
          if (_(I) !== null)
            Et = !0, ot || (ot = !0, Le());
          else {
            var J = _(Ae);
            J !== null && V(
              F,
              J.startTime - C
            );
          }
      }
      function P() {
        return Vt ? !0 : !(b.unstable_now() - Se < qt);
      }
      function V(C, J) {
        he = Zt(function() {
          C(b.unstable_now());
        }, J);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), b.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var be = performance;
        b.unstable_now = function() {
          return be.now();
        };
      } else {
        var B = Date, R = B.now();
        b.unstable_now = function() {
          return B.now() - R;
        };
      }
      var I = [], Ae = [], Je = 1, at = null, Ie = 3, cl = !1, Et = !1, jt = !1, Vt = !1, Zt = typeof setTimeout == "function" ? setTimeout : null, Me = typeof clearTimeout == "function" ? clearTimeout : null, Xe = typeof setImmediate < "u" ? setImmediate : null, ot = !1, he = -1, qt = 5, Se = -1;
      if (typeof Xe == "function")
        var Le = function() {
          Xe(H);
        };
      else if (typeof MessageChannel < "u") {
        var Jt = new MessageChannel(), Yt = Jt.port2;
        Jt.port1.onmessage = H, Le = function() {
          Yt.postMessage(null);
        };
      } else
        Le = function() {
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
        var Ee = b.unstable_now();
        switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? Ee + ne : Ee) : ne = Ee, C) {
          case 1:
            var Ce = -1;
            break;
          case 2:
            Ce = 250;
            break;
          case 5:
            Ce = 1073741823;
            break;
          case 4:
            Ce = 1e4;
            break;
          default:
            Ce = 5e3;
        }
        return Ce = ne + Ce, C = {
          id: Je++,
          callback: J,
          priorityLevel: C,
          startTime: ne,
          expirationTime: Ce,
          sortIndex: -1
        }, ne > Ee ? (C.sortIndex = ne, ae(Ae, C), _(I) === null && C === _(Ae) && (jt ? (Me(he), he = -1) : jt = !0, V(F, ne - Ee))) : (C.sortIndex = Ce, ae(I, C), Et || cl || (Et = !0, ot || (ot = !0, Le()))), C;
      }, b.unstable_shouldYield = P, b.unstable_wrapCallback = function(C) {
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
function o2() {
  return JE || (JE = 1, process.env.NODE_ENV === "production" ? kv.exports = LT() : kv.exports = XT()), kv.exports;
}
var Wv = { exports: {} }, ja = {};
var KE;
function QT() {
  if (KE) return ja;
  KE = 1;
  var b = Om();
  function H(P) {
    var V = "https://react.dev/errors/" + P;
    if (1 < arguments.length) {
      V += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var be = 2; be < arguments.length; be++)
        V += "&args[]=" + encodeURIComponent(arguments[be]);
    }
    return "Minified React error #" + P + "; visit " + V + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ae() {
  }
  var _ = {
    d: {
      f: ae,
      r: function() {
        throw Error(H(522));
      },
      D: ae,
      C: ae,
      L: ae,
      m: ae,
      X: ae,
      S: ae,
      M: ae
    },
    p: 0,
    findDOMNode: null
  }, ce = /* @__PURE__ */ Symbol.for("react.portal");
  function fe(P, V, be) {
    var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ce,
      key: B == null ? null : "" + B,
      children: P,
      containerInfo: V,
      implementation: be
    };
  }
  var pe = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function F(P, V) {
    if (P === "font") return "";
    if (typeof V == "string")
      return V === "use-credentials" ? V : "";
  }
  return ja.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _, ja.createPortal = function(P, V) {
    var be = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!V || V.nodeType !== 1 && V.nodeType !== 9 && V.nodeType !== 11)
      throw Error(H(299));
    return fe(P, V, null, be);
  }, ja.flushSync = function(P) {
    var V = pe.T, be = _.p;
    try {
      if (pe.T = null, _.p = 2, P) return P();
    } finally {
      pe.T = V, _.p = be, _.d.f();
    }
  }, ja.preconnect = function(P, V) {
    typeof P == "string" && (V ? (V = V.crossOrigin, V = typeof V == "string" ? V === "use-credentials" ? V : "" : void 0) : V = null, _.d.C(P, V));
  }, ja.prefetchDNS = function(P) {
    typeof P == "string" && _.d.D(P);
  }, ja.preinit = function(P, V) {
    if (typeof P == "string" && V && typeof V.as == "string") {
      var be = V.as, B = F(be, V.crossOrigin), R = typeof V.integrity == "string" ? V.integrity : void 0, I = typeof V.fetchPriority == "string" ? V.fetchPriority : void 0;
      be === "style" ? _.d.S(
        P,
        typeof V.precedence == "string" ? V.precedence : void 0,
        {
          crossOrigin: B,
          integrity: R,
          fetchPriority: I
        }
      ) : be === "script" && _.d.X(P, {
        crossOrigin: B,
        integrity: R,
        fetchPriority: I,
        nonce: typeof V.nonce == "string" ? V.nonce : void 0
      });
    }
  }, ja.preinitModule = function(P, V) {
    if (typeof P == "string")
      if (typeof V == "object" && V !== null) {
        if (V.as == null || V.as === "script") {
          var be = F(
            V.as,
            V.crossOrigin
          );
          _.d.M(P, {
            crossOrigin: be,
            integrity: typeof V.integrity == "string" ? V.integrity : void 0,
            nonce: typeof V.nonce == "string" ? V.nonce : void 0
          });
        }
      } else V == null && _.d.M(P);
  }, ja.preload = function(P, V) {
    if (typeof P == "string" && typeof V == "object" && V !== null && typeof V.as == "string") {
      var be = V.as, B = F(be, V.crossOrigin);
      _.d.L(P, be, {
        crossOrigin: B,
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
  }, ja.preloadModule = function(P, V) {
    if (typeof P == "string")
      if (V) {
        var be = F(V.as, V.crossOrigin);
        _.d.m(P, {
          as: typeof V.as == "string" && V.as !== "script" ? V.as : void 0,
          crossOrigin: be,
          integrity: typeof V.integrity == "string" ? V.integrity : void 0
        });
      } else _.d.m(P);
  }, ja.requestFormReset = function(P) {
    _.d.r(P);
  }, ja.unstable_batchedUpdates = function(P, V) {
    return P(V);
  }, ja.useFormState = function(P, V, be) {
    return pe.H.useFormState(P, V, be);
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
    function H(B) {
      return "" + B;
    }
    function ae(B, R, I) {
      var Ae = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        H(Ae);
        var Je = !1;
      } catch {
        Je = !0;
      }
      return Je && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && Ae[Symbol.toStringTag] || Ae.constructor.name || "Object"
      ), H(Ae)), {
        $$typeof: V,
        key: Ae == null ? null : "" + Ae,
        children: B,
        containerInfo: R,
        implementation: I
      };
    }
    function _(B, R) {
      if (B === "font") return "";
      if (typeof R == "string")
        return R === "use-credentials" ? R : "";
    }
    function ce(B) {
      return B === null ? "`null`" : B === void 0 ? "`undefined`" : B === "" ? "an empty string" : 'something with type "' + typeof B + '"';
    }
    function fe(B) {
      return B === null ? "`null`" : B === void 0 ? "`undefined`" : B === "" ? "an empty string" : typeof B == "string" ? JSON.stringify(B) : typeof B == "number" ? "`" + B + "`" : 'something with type "' + typeof B + '"';
    }
    function pe() {
      var B = be.H;
      return B === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), B;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var F = Om(), P = {
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
    }, V = /* @__PURE__ */ Symbol.for("react.portal"), be = F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), qa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, qa.createPortal = function(B, R) {
      var I = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!R || R.nodeType !== 1 && R.nodeType !== 9 && R.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return ae(B, R, null, I);
    }, qa.flushSync = function(B) {
      var R = be.T, I = P.p;
      try {
        if (be.T = null, P.p = 2, B)
          return B();
      } finally {
        be.T = R, P.p = I, P.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, qa.preconnect = function(B, R) {
      typeof B == "string" && B ? R != null && typeof R != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        fe(R)
      ) : R != null && typeof R.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        ce(R.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        ce(B)
      ), typeof B == "string" && (R ? (R = R.crossOrigin, R = typeof R == "string" ? R === "use-credentials" ? R : "" : void 0) : R = null, P.d.C(B, R));
    }, qa.prefetchDNS = function(B) {
      if (typeof B != "string" || !B)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          ce(B)
        );
      else if (1 < arguments.length) {
        var R = arguments[1];
        typeof R == "object" && R.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          fe(R)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          fe(R)
        );
      }
      typeof B == "string" && P.d.D(B);
    }, qa.preinit = function(B, R) {
      if (typeof B == "string" && B ? R == null || typeof R != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        fe(R)
      ) : R.as !== "style" && R.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        fe(R.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        ce(B)
      ), typeof B == "string" && R && typeof R.as == "string") {
        var I = R.as, Ae = _(I, R.crossOrigin), Je = typeof R.integrity == "string" ? R.integrity : void 0, at = typeof R.fetchPriority == "string" ? R.fetchPriority : void 0;
        I === "style" ? P.d.S(
          B,
          typeof R.precedence == "string" ? R.precedence : void 0,
          {
            crossOrigin: Ae,
            integrity: Je,
            fetchPriority: at
          }
        ) : I === "script" && P.d.X(B, {
          crossOrigin: Ae,
          integrity: Je,
          fetchPriority: at,
          nonce: typeof R.nonce == "string" ? R.nonce : void 0
        });
      }
    }, qa.preinitModule = function(B, R) {
      var I = "";
      typeof B == "string" && B || (I += " The `href` argument encountered was " + ce(B) + "."), R !== void 0 && typeof R != "object" ? I += " The `options` argument encountered was " + ce(R) + "." : R && "as" in R && R.as !== "script" && (I += " The `as` option encountered was " + fe(R.as) + "."), I ? console.error(
        "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
        I
      ) : (I = R && typeof R.as == "string" ? R.as : "script", I) === "script" || (I = fe(I), console.error(
        'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
        I,
        B
      )), typeof B == "string" && (typeof R == "object" && R !== null ? (R.as == null || R.as === "script") && (I = _(
        R.as,
        R.crossOrigin
      ), P.d.M(B, {
        crossOrigin: I,
        integrity: typeof R.integrity == "string" ? R.integrity : void 0,
        nonce: typeof R.nonce == "string" ? R.nonce : void 0
      })) : R == null && P.d.M(B));
    }, qa.preload = function(B, R) {
      var I = "";
      if (typeof B == "string" && B || (I += " The `href` argument encountered was " + ce(B) + "."), R == null || typeof R != "object" ? I += " The `options` argument encountered was " + ce(R) + "." : typeof R.as == "string" && R.as || (I += " The `as` option encountered was " + ce(R.as) + "."), I && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        I
      ), typeof B == "string" && typeof R == "object" && R !== null && typeof R.as == "string") {
        I = R.as;
        var Ae = _(
          I,
          R.crossOrigin
        );
        P.d.L(B, I, {
          crossOrigin: Ae,
          integrity: typeof R.integrity == "string" ? R.integrity : void 0,
          nonce: typeof R.nonce == "string" ? R.nonce : void 0,
          type: typeof R.type == "string" ? R.type : void 0,
          fetchPriority: typeof R.fetchPriority == "string" ? R.fetchPriority : void 0,
          referrerPolicy: typeof R.referrerPolicy == "string" ? R.referrerPolicy : void 0,
          imageSrcSet: typeof R.imageSrcSet == "string" ? R.imageSrcSet : void 0,
          imageSizes: typeof R.imageSizes == "string" ? R.imageSizes : void 0,
          media: typeof R.media == "string" ? R.media : void 0
        });
      }
    }, qa.preloadModule = function(B, R) {
      var I = "";
      typeof B == "string" && B || (I += " The `href` argument encountered was " + ce(B) + "."), R !== void 0 && typeof R != "object" ? I += " The `options` argument encountered was " + ce(R) + "." : R && "as" in R && typeof R.as != "string" && (I += " The `as` option encountered was " + ce(R.as) + "."), I && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        I
      ), typeof B == "string" && (R ? (I = _(
        R.as,
        R.crossOrigin
      ), P.d.m(B, {
        as: typeof R.as == "string" && R.as !== "script" ? R.as : void 0,
        crossOrigin: I,
        integrity: typeof R.integrity == "string" ? R.integrity : void 0
      })) : P.d.m(B));
    }, qa.requestFormReset = function(B) {
      P.d.r(B);
    }, qa.unstable_batchedUpdates = function(B, R) {
      return B(R);
    }, qa.useFormState = function(B, R, I) {
      return pe().useFormState(B, R, I);
    }, qa.useFormStatus = function() {
      return pe().useHostTransitionStatus();
    }, qa.version = "19.2.8", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), qa;
}
var kE;
function f2() {
  if (kE) return Wv.exports;
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
  return process.env.NODE_ENV === "production" ? (b(), Wv.exports = QT()) : Wv.exports = VT(), Wv.exports;
}
var WE;
function ZT() {
  if (WE) return T0;
  WE = 1;
  var b = o2(), H = Om(), ae = f2();
  function _(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ce(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function fe(l) {
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
  function P(l) {
    if (fe(l) !== l)
      throw Error(_(188));
  }
  function V(l) {
    var n = l.alternate;
    if (!n) {
      if (n = fe(l), n === null) throw Error(_(188));
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
          if (s === u) return P(r), l;
          if (s === c) return P(r), n;
          s = s.sibling;
        }
        throw Error(_(188));
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
          if (!m) throw Error(_(189));
        }
      }
      if (u.alternate !== c) throw Error(_(190));
    }
    if (u.tag !== 3) throw Error(_(188));
    return u.stateNode.current === u ? l : n;
  }
  function be(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = be(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var B = Object.assign, R = /* @__PURE__ */ Symbol.for("react.element"), I = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ae = /* @__PURE__ */ Symbol.for("react.portal"), Je = /* @__PURE__ */ Symbol.for("react.fragment"), at = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ie = /* @__PURE__ */ Symbol.for("react.profiler"), cl = /* @__PURE__ */ Symbol.for("react.consumer"), Et = /* @__PURE__ */ Symbol.for("react.context"), jt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Vt = /* @__PURE__ */ Symbol.for("react.suspense"), Zt = /* @__PURE__ */ Symbol.for("react.suspense_list"), Me = /* @__PURE__ */ Symbol.for("react.memo"), Xe = /* @__PURE__ */ Symbol.for("react.lazy"), ot = /* @__PURE__ */ Symbol.for("react.activity"), he = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), qt = Symbol.iterator;
  function Se(l) {
    return l === null || typeof l != "object" ? null : (l = qt && l[qt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Le = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Jt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Le ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Je:
        return "Fragment";
      case Ie:
        return "Profiler";
      case at:
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
        case Ae:
          return "Portal";
        case Et:
          return l.displayName || "Context";
        case cl:
          return (l._context.displayName || "Context") + ".Consumer";
        case jt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Me:
          return n = l.displayName || null, n !== null ? n : Jt(l.type) || "Memo";
        case Xe:
          n = l._payload, l = l._init;
          try {
            return Jt(l(n));
          } catch {
          }
      }
    return null;
  }
  var Yt = Array.isArray, C = H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ee = [], Ce = -1;
  function S(l) {
    return { current: l };
  }
  function q(l) {
    0 > Ce || (l.current = Ee[Ce], Ee[Ce] = null, Ce--);
  }
  function te(l, n) {
    Ce++, Ee[Ce] = l.current, l.current = n;
  }
  var ee = S(null), Oe = S(null), Qe = S(null), De = S(null);
  function Kt(l, n) {
    switch (te(Qe, n), te(Oe, l), te(ee, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? qg(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = qg(n), l = yp(n, l);
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
    q(ee), te(ee, l);
  }
  function gt() {
    q(ee), q(Oe), q(Qe);
  }
  function Ya(l) {
    l.memoizedState !== null && te(De, l);
    var n = ee.current, u = yp(n, l.type);
    n !== u && (te(Oe, l), te(ee, u));
  }
  function re(l) {
    Oe.current === l && (q(ee), q(Oe)), De.current === l && (q(De), Ms._currentValue = ne);
  }
  var Mi, Ci;
  function wa(l) {
    if (Mi === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Mi = n && n[1] || "", Ci = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Mi + l + Ci;
  }
  var cu = !1;
  function vt(l, n) {
    if (!l || cu) return "";
    cu = !0;
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
        var O = m.split(`
`), Y = v.split(`
`);
        for (r = c = 0; c < O.length && !O[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; r < Y.length && !Y[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (c === O.length || r === Y.length)
          for (c = O.length - 1, r = Y.length - 1; 1 <= c && 0 <= r && O[c] !== Y[r]; )
            r--;
        for (; 1 <= c && 0 <= r; c--, r--)
          if (O[c] !== Y[r]) {
            if (c !== 1 || r !== 1)
              do
                if (c--, r--, 0 > r || O[c] !== Y[r]) {
                  var Z = `
` + O[c].replace(" at new ", " at ");
                  return l.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", l.displayName)), Z;
                }
              while (1 <= c && 0 <= r);
            break;
          }
      }
    } finally {
      cu = !1, Error.prepareStackTrace = u;
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
  var yr = Object.prototype.hasOwnProperty, me = b.unstable_scheduleCallback, Ui = b.unstable_cancelCallback, ou = b.unstable_shouldYield, Tc = b.unstable_requestPaint, Sl = b.unstable_now, ad = b.unstable_getCurrentPriorityLevel, No = b.unstable_ImmediatePriority, xo = b.unstable_UserBlockingPriority, Un = b.unstable_NormalPriority, nd = b.unstable_LowPriority, Bo = b.unstable_IdlePriority, pr = b.log, Ac = b.unstable_setDisableYieldValue, dn = null, Ol = null;
  function Ga(l) {
    if (typeof pr == "function" && Ac(l), Ol && typeof Ol.setStrictMode == "function")
      try {
        Ol.setStrictMode(dn, l);
      } catch {
      }
  }
  var Hl = Math.clz32 ? Math.clz32 : N, Hi = Math.log, g = Math.LN2;
  function N(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Hi(l) / g | 0) | 0;
  }
  var le = 256, ue = 262144, ye = 4194304;
  function He(l) {
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
    return v !== 0 ? (c = v & ~s, c !== 0 ? r = He(c) : (m &= v, m !== 0 ? r = He(m) : u || (u = v & ~l, u !== 0 && (r = He(u))))) : (v = c & ~s, v !== 0 ? r = He(v) : m !== 0 ? r = He(m) : u || (u = c & ~l, u !== 0 && (r = He(u)))), r === 0 ? 0 : n !== 0 && n !== r && (n & s) === 0 && (s = r & -r, u = n & -n, s >= u || s === 32 && (u & 4194048) !== 0) ? n : r;
  }
  function nt(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function Ve(l, n) {
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
  function Ni(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function jo(l, n, u, c, r, s) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, O = l.expirationTimes, Y = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var Z = 31 - Hl(u), k = 1 << Z;
      v[Z] = 0, O[Z] = -1;
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
  function fu(l, n) {
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
  var Hn = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + Hn, ra = "__reactProps$" + Hn, xi = "__reactContainer$" + Hn, cd = "__reactEvents$" + Hn, Dm = "__reactListeners$" + Hn, R0 = "__reactHandles$" + Hn, zm = "__reactResources$" + Hn, ru = "__reactMarker$" + Hn;
  function od(l) {
    delete l[Ct], delete l[ra], delete l[cd], delete l[Dm], delete l[R0];
  }
  function Oc(l) {
    var n = l[Ct];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[xi] || u[Ct]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Pn(l); l !== null; ) {
            if (u = l[Ct]) return u;
            l = Pn(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Rc(l) {
    if (l = l[Ct] || l[xi]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function qo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(_(33));
  }
  function _c(l) {
    var n = l[zm];
    return n || (n = l[zm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Rt(l) {
    l[ru] = !0;
  }
  var Dc = /* @__PURE__ */ new Set(), Bi = {};
  function ji(l, n) {
    su(l, n), su(l + "Capture", n);
  }
  function su(l, n) {
    for (Bi[l] = n, l = 0; l < n.length; l++)
      Dc.add(n[l]);
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
  function Pu(l, n, u, c) {
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
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Xa(n)) : l.value !== "" + Xa(n) && (l.value = "" + Xa(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? zc(l, m, Xa(n)) : u != null ? zc(l, m, Xa(u)) : c != null && l.removeAttribute("value"), r == null && s != null && (l.defaultChecked = !!s), r != null && (l.checked = r && typeof r != "function" && typeof r != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + Xa(v) : l.removeAttribute("name");
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
  function zc(l, n, u) {
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
        if (u != null) throw Error(_(92));
        if (Yt(c)) {
          if (1 < c.length) throw Error(_(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Xa(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), hd(l);
  }
  function du(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var _0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function D0(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || _0.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function z0(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(_(62));
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
  function Nn() {
  }
  var md = null;
  function yd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var hu = null, Mc = null;
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
                if (!r) throw Error(_(90));
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
      if (Xo = !1, (hu !== null || Mc !== null) && (Rf(), hu && (n = hu, l = Mc, Mc = hu = null, Tr(n), l)))
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
        _(231, n, typeof u)
      );
    return u;
  }
  var ei = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ar = !1;
  if (ei)
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
  var ti = null, Bm = null, pd = null;
  function jm() {
    if (pd) return pd;
    var l, n = Bm, u = n.length, c, r = "value" in ti ? ti.value : ti.textContent, s = r.length;
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
  function M0() {
    return !1;
  }
  function $l(l) {
    function n(u, c, r, s, m) {
      this._reactName = u, this._targetInst = r, this.type = c, this.nativeEvent = s, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(s) : s[v]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Or : M0, this.isPropagationStopped = M0, this;
    }
    return B(n.prototype, {
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
  var qi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Rr = $l(qi), Vo = B({}, qi, { view: 0, detail: 0 }), e1 = $l(Vo), qm, Ym, _r, vd = B({}, Vo, {
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
  }), Zo = $l(vd), C0 = B({}, vd, { dataTransfer: 0 }), U0 = $l(C0), H0 = B({}, Vo, { relatedTarget: 0 }), Sd = $l(H0), wm = B({}, qi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), N0 = $l(wm), Cc = B({}, qi, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Uc = $l(Cc), xn = B({}, qi, { data: 0 }), x0 = $l(xn), Gm = {
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
  }, mu = {
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
  }, B0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Bn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = B0[l]) ? !!n[l] : !1;
  }
  function yn() {
    return Bn;
  }
  var bd = B({}, Vo, {
    key: function(l) {
      if (l.key) {
        var n = Gm[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = gd(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? mu[l.keyCode] || "Unidentified" : "";
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
  }), Ed = $l(bd), Lm = B({}, vd, {
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
  }), jn = $l(Lm), t1 = B({}, Vo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yn
  }), j0 = $l(t1), q0 = B({}, qi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), l1 = $l(q0), Xm = B({}, vd, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), a1 = $l(Xm), Y0 = B({}, qi, {
    newState: 0,
    oldState: 0
  }), Qm = $l(Y0), Td = [9, 13, 27, 32], Jo = ei && "CompositionEvent" in window, Hc = null;
  ei && "documentMode" in document && (Hc = document.documentMode);
  var la = ei && "TextEvent" in window && !Hc, Vm = ei && (!Jo || Hc && 8 < Hc && 11 >= Hc), Dr = " ", Yi = !1;
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
  function w0(l, n) {
    switch (l) {
      case "compositionend":
        return Zm(n);
      case "keypress":
        return n.which !== 32 ? null : (Yi = !0, Dr);
      case "textInput":
        return l = n.data, l === Dr && Yi ? null : l;
      default:
        return null;
    }
  }
  function n1(l, n) {
    if (Nc)
      return l === "compositionend" || !Jo && Ad(l, n) ? (l = jm(), pd = Bm = ti = null, Nc = !1, l) : null;
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
  function yu(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Jm[l.type] : n === "textarea";
  }
  function Km(l, n, u, c) {
    hu ? Mc ? Mc.push(c) : Mc = [c] : hu = c, n = As(n, "onChange"), 0 < n.length && (u = new Rr(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var xc = null, wi = null;
  function Bc(l) {
    xg(l, 0);
  }
  function Ko(l) {
    var n = qo(l);
    if (Cm(n)) return l;
  }
  function $m(l, n) {
    if (l === "change") return n;
  }
  var Od = !1;
  if (ei) {
    var sa;
    if (ei) {
      var qn = "oninput" in document;
      if (!qn) {
        var km = document.createElement("div");
        km.setAttribute("oninput", "return;"), qn = typeof km.oninput == "function";
      }
      sa = qn;
    } else sa = !1;
    Od = sa && (!document.documentMode || 9 < document.documentMode);
  }
  function Rd() {
    xc && (xc.detachEvent("onpropertychange", _d), wi = xc = null);
  }
  function _d(l) {
    if (l.propertyName === "value" && Ko(wi)) {
      var n = [];
      Km(
        n,
        wi,
        l,
        yd(l)
      ), xm(Bc, n);
    }
  }
  function G0(l, n, u) {
    l === "focusin" ? (Rd(), xc = n, wi = u, xc.attachEvent("onpropertychange", _d)) : l === "focusout" && Rd();
  }
  function L0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ko(wi);
  }
  function Gi(l, n) {
    if (l === "click") return Ko(n);
  }
  function jc(l, n) {
    if (l === "input" || l === "change")
      return Ko(n);
  }
  function X0(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var aa = typeof Object.is == "function" ? Object.is : X0;
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
  function Li(l) {
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
  function zr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var Mr = ei && "documentMode" in document && 11 >= document.documentMode, Xi = null, $o = null, gn = null, Yn = !1;
  function Dd(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Yn || Xi == null || Xi !== vr(c) || (c = Xi, "selectionStart" in c && zr(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
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
    ), l.push({ event: n, listeners: c }), n.target = Xi)));
  }
  function li(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var wn = {
    animationend: li("Animation", "AnimationEnd"),
    animationiteration: li("Animation", "AnimationIteration"),
    animationstart: li("Animation", "AnimationStart"),
    transitionrun: li("Transition", "TransitionRun"),
    transitionstart: li("Transition", "TransitionStart"),
    transitioncancel: li("Transition", "TransitionCancel"),
    transitionend: li("Transition", "TransitionEnd")
  }, ko = {}, Qi = {};
  ei && (Qi = document.createElement("div").style, "AnimationEvent" in window || (delete wn.animationend.animation, delete wn.animationiteration.animation, delete wn.animationstart.animation), "TransitionEvent" in window || delete wn.transitionend.transition);
  function Tt(l) {
    if (ko[l]) return ko[l];
    if (!wn[l]) return l;
    var n = wn[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Qi)
        return ko[l] = n[u];
    return l;
  }
  var Cr = Tt("animationend"), Im = Tt("animationiteration"), zd = Tt("animationstart"), Yc = Tt("transitionrun"), Ur = Tt("transitionstart"), pu = Tt("transitioncancel"), Q0 = Tt("transitionend"), gu = /* @__PURE__ */ new Map(), Wo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Wo.push("scrollEnd");
  function da(l, n) {
    gu.set(l, n), ji(n, [l]);
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
  function ai(l, n) {
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
      throw Of = 0, ms = null, Error(_(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ha = {};
  function V0(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ol(l, n, u, c) {
    return new V0(l, n, u, c);
  }
  function Gc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function ni(l, n) {
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
        ee.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case ot:
          return l = ol(31, u, n, r), l.elementType = ot, l.lanes = s, l;
        case Je:
          return ui(u.children, r, s, n);
        case at:
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
              case Me:
                m = 14;
                break e;
              case Xe:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            _(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = ol(m, u, n, r), n.elementType = l, n.type = c, n.lanes = s, n;
  }
  function ui(l, n, u, c) {
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
  var Ka = [], Lc = 0, Nr = null, hl = 0, Da = [], ma = 0, Gn = null, za = 1, Ln = "";
  function bn(l, n) {
    Ka[Lc++] = hl, Ka[Lc++] = Nr, Nr = l, hl = n;
  }
  function ly(l, n, u) {
    Da[ma++] = za, Da[ma++] = Ln, Da[ma++] = Gn, Gn = l;
    var c = za;
    l = Ln;
    var r = 32 - Hl(c) - 1;
    c &= ~(1 << r), u += 1;
    var s = 32 - Hl(n) + r;
    if (30 < s) {
      var m = r - r % 5;
      s = (c & (1 << m) - 1).toString(32), c >>= m, r -= m, za = 1 << 32 - Hl(n) + r | u << r | c, Ln = s + l;
    } else
      za = 1 << s | u << r | c, Ln = l;
  }
  function Io(l) {
    l.return !== null && (bn(l, 1), ly(l, 1, 0));
  }
  function Hd(l) {
    for (; l === Nr; )
      Nr = Ka[--Lc], Ka[Lc] = null, hl = Ka[--Lc], Ka[Lc] = null;
    for (; l === Gn; )
      Gn = Da[--ma], Da[ma] = null, Ln = Da[--ma], Da[ma] = null, za = Da[--ma], Da[ma] = null;
  }
  function xr(l, n) {
    Da[ma++] = za, Da[ma++] = Ln, Da[ma++] = Gn, za = n.id, Ln = n.overflow, Gn = l;
  }
  var Bl = null, wt = null, ft = !1, vu = null, Rl = !1, Su = Error(_(519));
  function En(l) {
    var n = Error(
      _(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ef(Ja(n, l)), Su;
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
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || sp(n.textContent, u) ? (c.popover != null && (ct("beforetoggle", n), ct("toggle", n)), c.onScroll != null && ct("scroll", n), c.onScrollEnd != null && ct("scrollend", n), c.onClick != null && (n.onclick = Nn), n = !0) : n = !1, n || En(l, !0);
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
  function bu(l) {
    if (l !== Bl) return !1;
    if (!ft) return Po(l), ft = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Hf(l.type, l.memoizedProps)), u = !u), u && wt && En(l), Po(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(_(317));
      wt = Bh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(_(317));
      wt = Bh(l);
    } else
      n === 27 ? (n = wt, In(l.type) ? (l = _s, _s = null, wt = l) : wt = n) : wt = Bl ? Oa(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Vi() {
    wt = Bl = null, ft = !1;
  }
  function ay() {
    var l = vu;
    return l !== null && (ul === null ? ul = l : ul.push.apply(
      ul,
      l
    ), vu = null), l;
  }
  function ef(l) {
    vu === null ? vu = [l] : vu.push(l);
  }
  var Nd = S(null), ii = null, Xn = null;
  function ya(l, n, u) {
    te(Nd, n._currentValue), n._currentValue = u;
  }
  function Qn(l) {
    l._currentValue = Nd.current, q(Nd);
  }
  function xd(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function Eu(l, n, u, c) {
    var r = l.child;
    for (r !== null && (r.return = l); r !== null; ) {
      var s = r.dependencies;
      if (s !== null) {
        var m = r.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var v = s;
          s = r;
          for (var O = 0; O < n.length; O++)
            if (v.context === n[O]) {
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
        if (m = r.return, m === null) throw Error(_(341));
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
        if (m === null) throw Error(_(387));
        if (m = m.memoizedProps, m !== null) {
          var v = r.type;
          aa(r.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (r === De.current) {
        if (m = r.alternate, m === null) throw Error(_(387));
        m.memoizedState.memoizedState !== r.memoizedState.memoizedState && (l !== null ? l.push(Ms) : l = [Ms]);
      }
      r = r.return;
    }
    l !== null && Eu(
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
  function Ye(l) {
    ii = l, Xn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function W(l) {
    return jr(ii, l);
  }
  function ci(l, n) {
    return ii === null && Ye(l), jr(l, n);
  }
  function jr(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Xn === null) {
      if (l === null) throw Error(_(308));
      Xn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Xn = Xn.next = n;
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
  var Qc = null, wr = 0, Zi = 0, bl = null;
  function _t(l, n) {
    if (Qc === null) {
      var u = Qc = [];
      wr = 0, Zi = Dh(), bl = {
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
      Qc = null, Zi = 0, bl = null;
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
  var oi = C.S;
  C.S = function(l, n) {
    Iy = Sl(), typeof n == "object" && n !== null && typeof n.then == "function" && _t(l, n), oi !== null && oi(l, n);
  };
  var $a = S(null);
  function ka() {
    var l = $a.current;
    return l !== null ? l : Ht.pooledCache;
  }
  function tf(l, n) {
    n === null ? te($a, $a.current) : te($a, n.pool);
  }
  function Vc() {
    var l = ka();
    return l === null ? null : { parent: ml._currentValue, pool: l };
  }
  var Ji = Error(_(460)), Zc = Error(_(474)), lf = Error(_(542)), Jc = { then: function() {
  } };
  function iy(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function cy(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Nn, Nn), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, Bd(l), l;
      default:
        if (typeof n.status == "string") n.then(Nn, Nn);
        else {
          if (l = Ht, l !== null && 100 < l.shellSuspendCounter)
            throw Error(_(482));
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
        throw $i = n, Ji;
    }
  }
  function Ki(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? ($i = u, Ji) : u;
    }
  }
  var $i = null;
  function oy() {
    if ($i === null) throw Error(_(459));
    var l = $i;
    return $i = null, l;
  }
  function Bd(l) {
    if (l === Ji || l === lf)
      throw Error(_(483));
  }
  var ki = null, Kc = 0;
  function Xr(l) {
    var n = Kc;
    return Kc += 1, ki === null && (ki = []), cy(ki, l, n);
  }
  function af(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Qr(l, n) {
    throw n.$$typeof === R ? Error(_(525)) : (l = Object.prototype.toString.call(n), Error(
      _(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Z0(l) {
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
      return x = ni(x, M), x.index = 0, x.sibling = null, x;
    }
    function s(x, M, j) {
      return x.index = j, l ? (j = x.alternate, j !== null ? (j = j.index, j < M ? (x.flags |= 67108866, M) : j) : (x.flags |= 67108866, M)) : (x.flags |= 1048576, M);
    }
    function m(x) {
      return l && x.alternate === null && (x.flags |= 67108866), x;
    }
    function v(x, M, j, $) {
      return M === null || M.tag !== 6 ? (M = Fo(j, x.mode, $), M.return = x, M) : (M = r(M, j), M.return = x, M);
    }
    function O(x, M, j, $) {
      var Re = j.type;
      return Re === Je ? Z(
        x,
        M,
        j.props.children,
        $,
        j.key
      ) : M !== null && (M.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === Xe && Ki(Re) === M.type) ? (M = r(M, j.props), af(M, j), M.return = x, M) : (M = Cd(
        j.type,
        j.key,
        j.props,
        null,
        x.mode,
        $
      ), af(M, j), M.return = x, M);
    }
    function Y(x, M, j, $) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== j.containerInfo || M.stateNode.implementation !== j.implementation ? (M = Ud(j, x.mode, $), M.return = x, M) : (M = r(M, j.children || []), M.return = x, M);
    }
    function Z(x, M, j, $, Re) {
      return M === null || M.tag !== 7 ? (M = ui(
        j,
        x.mode,
        $,
        Re
      ), M.return = x, M) : (M = r(M, j), M.return = x, M);
    }
    function k(x, M, j) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return M = Fo(
          "" + M,
          x.mode,
          j
        ), M.return = x, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case I:
            return j = Cd(
              M.type,
              M.key,
              M.props,
              null,
              x.mode,
              j
            ), af(j, M), j.return = x, j;
          case Ae:
            return M = Ud(
              M,
              x.mode,
              j
            ), M.return = x, M;
          case Xe:
            return M = Ki(M), k(x, M, j);
        }
        if (Yt(M) || Se(M))
          return M = ui(
            M,
            x.mode,
            j,
            null
          ), M.return = x, M;
        if (typeof M.then == "function")
          return k(x, Xr(M), j);
        if (M.$$typeof === Et)
          return k(
            x,
            ci(x, M),
            j
          );
        Qr(x, M);
      }
      return null;
    }
    function w(x, M, j, $) {
      var Re = M !== null ? M.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return Re !== null ? null : v(x, M, "" + j, $);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case I:
            return j.key === Re ? O(x, M, j, $) : null;
          case Ae:
            return j.key === Re ? Y(x, M, j, $) : null;
          case Xe:
            return j = Ki(j), w(x, M, j, $);
        }
        if (Yt(j) || Se(j))
          return Re !== null ? null : Z(x, M, j, $, null);
        if (typeof j.then == "function")
          return w(
            x,
            M,
            Xr(j),
            $
          );
        if (j.$$typeof === Et)
          return w(
            x,
            M,
            ci(x, j),
            $
          );
        Qr(x, j);
      }
      return null;
    }
    function Q(x, M, j, $, Re) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint")
        return x = x.get(j) || null, v(M, x, "" + $, Re);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case I:
            return x = x.get(
              $.key === null ? j : $.key
            ) || null, O(M, x, $, Re);
          case Ae:
            return x = x.get(
              $.key === null ? j : $.key
            ) || null, Y(M, x, $, Re);
          case Xe:
            return $ = Ki($), Q(
              x,
              M,
              j,
              $,
              Re
            );
        }
        if (Yt($) || Se($))
          return x = x.get(j) || null, Z(M, x, $, Re, null);
        if (typeof $.then == "function")
          return Q(
            x,
            M,
            j,
            Xr($),
            Re
          );
        if ($.$$typeof === Et)
          return Q(
            x,
            M,
            j,
            ci(M, $),
            Re
          );
        Qr(M, $);
      }
      return null;
    }
    function de(x, M, j, $) {
      for (var Re = null, yt = null, ve = M, Ze = M = 0, We = null; ve !== null && Ze < j.length; Ze++) {
        ve.index > Ze ? (We = ve, ve = null) : We = ve.sibling;
        var bt = w(
          x,
          ve,
          j[Ze],
          $
        );
        if (bt === null) {
          ve === null && (ve = We);
          break;
        }
        l && ve && bt.alternate === null && n(x, ve), M = s(bt, M, Ze), yt === null ? Re = bt : yt.sibling = bt, yt = bt, ve = We;
      }
      if (Ze === j.length)
        return u(x, ve), ft && bn(x, Ze), Re;
      if (ve === null) {
        for (; Ze < j.length; Ze++)
          ve = k(x, j[Ze], $), ve !== null && (M = s(
            ve,
            M,
            Ze
          ), yt === null ? Re = ve : yt.sibling = ve, yt = ve);
        return ft && bn(x, Ze), Re;
      }
      for (ve = c(ve); Ze < j.length; Ze++)
        We = Q(
          ve,
          x,
          Ze,
          j[Ze],
          $
        ), We !== null && (l && We.alternate !== null && ve.delete(
          We.key === null ? Ze : We.key
        ), M = s(
          We,
          M,
          Ze
        ), yt === null ? Re = We : yt.sibling = We, yt = We);
      return l && ve.forEach(function(tu) {
        return n(x, tu);
      }), ft && bn(x, Ze), Re;
    }
    function Ue(x, M, j, $) {
      if (j == null) throw Error(_(151));
      for (var Re = null, yt = null, ve = M, Ze = M = 0, We = null, bt = j.next(); ve !== null && !bt.done; Ze++, bt = j.next()) {
        ve.index > Ze ? (We = ve, ve = null) : We = ve.sibling;
        var tu = w(x, ve, bt.value, $);
        if (tu === null) {
          ve === null && (ve = We);
          break;
        }
        l && ve && tu.alternate === null && n(x, ve), M = s(tu, M, Ze), yt === null ? Re = tu : yt.sibling = tu, yt = tu, ve = We;
      }
      if (bt.done)
        return u(x, ve), ft && bn(x, Ze), Re;
      if (ve === null) {
        for (; !bt.done; Ze++, bt = j.next())
          bt = k(x, bt.value, $), bt !== null && (M = s(bt, M, Ze), yt === null ? Re = bt : yt.sibling = bt, yt = bt);
        return ft && bn(x, Ze), Re;
      }
      for (ve = c(ve); !bt.done; Ze++, bt = j.next())
        bt = Q(ve, x, Ze, bt.value, $), bt !== null && (l && bt.alternate !== null && ve.delete(bt.key === null ? Ze : bt.key), M = s(bt, M, Ze), yt === null ? Re = bt : yt.sibling = bt, yt = bt);
      return l && ve.forEach(function(kg) {
        return n(x, kg);
      }), ft && bn(x, Ze), Re;
    }
    function xt(x, M, j, $) {
      if (typeof j == "object" && j !== null && j.type === Je && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case I:
            e: {
              for (var Re = j.key; M !== null; ) {
                if (M.key === Re) {
                  if (Re = j.type, Re === Je) {
                    if (M.tag === 7) {
                      u(
                        x,
                        M.sibling
                      ), $ = r(
                        M,
                        j.props.children
                      ), $.return = x, x = $;
                      break e;
                    }
                  } else if (M.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === Xe && Ki(Re) === M.type) {
                    u(
                      x,
                      M.sibling
                    ), $ = r(M, j.props), af($, j), $.return = x, x = $;
                    break e;
                  }
                  u(x, M);
                  break;
                } else n(x, M);
                M = M.sibling;
              }
              j.type === Je ? ($ = ui(
                j.props.children,
                x.mode,
                $,
                j.key
              ), $.return = x, x = $) : ($ = Cd(
                j.type,
                j.key,
                j.props,
                null,
                x.mode,
                $
              ), af($, j), $.return = x, x = $);
            }
            return m(x);
          case Ae:
            e: {
              for (Re = j.key; M !== null; ) {
                if (M.key === Re)
                  if (M.tag === 4 && M.stateNode.containerInfo === j.containerInfo && M.stateNode.implementation === j.implementation) {
                    u(
                      x,
                      M.sibling
                    ), $ = r(M, j.children || []), $.return = x, x = $;
                    break e;
                  } else {
                    u(x, M);
                    break;
                  }
                else n(x, M);
                M = M.sibling;
              }
              $ = Ud(j, x.mode, $), $.return = x, x = $;
            }
            return m(x);
          case Xe:
            return j = Ki(j), xt(
              x,
              M,
              j,
              $
            );
        }
        if (Yt(j))
          return de(
            x,
            M,
            j,
            $
          );
        if (Se(j)) {
          if (Re = Se(j), typeof Re != "function") throw Error(_(150));
          return j = Re.call(j), Ue(
            x,
            M,
            j,
            $
          );
        }
        if (typeof j.then == "function")
          return xt(
            x,
            M,
            Xr(j),
            $
          );
        if (j.$$typeof === Et)
          return xt(
            x,
            M,
            ci(x, j),
            $
          );
        Qr(x, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, M !== null && M.tag === 6 ? (u(x, M.sibling), $ = r(M, j), $.return = x, x = $) : (u(x, M), $ = Fo(j, x.mode, $), $.return = x, x = $), m(x)) : u(x, M);
    }
    return function(x, M, j, $) {
      try {
        Kc = 0;
        var Re = xt(
          x,
          M,
          j,
          $
        );
        return ki = null, Re;
      } catch (ve) {
        if (ve === Ji || ve === lf) throw ve;
        var yt = ol(29, ve, null, x.mode);
        return yt.lanes = $, yt.return = x, yt;
      }
    };
  }
  var Wi = Z0(!0), fy = Z0(!1), fi = !1;
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
  function ri(l) {
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
  function Fi(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, fu(l, u);
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
  function Ii() {
    if (ry) {
      var l = bl;
      if (l !== null) throw l;
    }
  }
  function Tu(l, n, u, c) {
    ry = !1;
    var r = l.updateQueue;
    fi = !1;
    var s = r.firstBaseUpdate, m = r.lastBaseUpdate, v = r.shared.pending;
    if (v !== null) {
      r.shared.pending = null;
      var O = v, Y = O.next;
      O.next = null, m === null ? s = Y : m.next = Y, m = O;
      var Z = l.alternate;
      Z !== null && (Z = Z.updateQueue, v = Z.lastBaseUpdate, v !== m && (v === null ? Z.firstBaseUpdate = Y : v.next = Y, Z.lastBaseUpdate = O));
    }
    if (s !== null) {
      var k = r.baseState;
      m = 0, Z = Y = O = null, v = s;
      do {
        var w = v.lane & -536870913, Q = w !== v.lane;
        if (Q ? (ut & w) === w : (c & w) === w) {
          w !== 0 && w === Zi && (ry = !0), Z !== null && (Z = Z.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var de = l, Ue = v;
            w = n;
            var xt = u;
            switch (Ue.tag) {
              case 1:
                if (de = Ue.payload, typeof de == "function") {
                  k = de.call(xt, k, w);
                  break e;
                }
                k = de;
                break e;
              case 3:
                de.flags = de.flags & -65537 | 128;
              case 0:
                if (de = Ue.payload, w = typeof de == "function" ? de.call(xt, k, w) : de, w == null) break e;
                k = B({}, k, w);
                break e;
              case 2:
                fi = !0;
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
          }, Z === null ? (Y = Z = Q, O = k) : Z = Z.next = Q, m |= w;
        if (v = v.next, v === null) {
          if (v = r.shared.pending, v === null)
            break;
          Q = v, v = Q.next, Q.next = null, r.lastBaseUpdate = Q, r.shared.pending = null;
        }
      } while (!0);
      Z === null && (O = k), r.baseState = O, r.firstBaseUpdate = Y, r.lastBaseUpdate = Z, s === null && (r.shared.lanes = 0), Wn |= m, l.lanes = m, l.memoizedState = k;
    }
  }
  function Yd(l, n) {
    if (typeof l != "function")
      throw Error(_(191, l));
    l.call(n);
  }
  function Pi(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Yd(u[l], n);
  }
  var _l = S(null), $c = S(0);
  function J0(l, n) {
    l = kn, te($c, l), te(_l, n), kn = l | n.baseLanes;
  }
  function Zr() {
    te($c, kn), te(_l, _l.current);
  }
  function nf() {
    kn = $c.current, q(_l), q($c);
  }
  var pa = S(null), Fa = null;
  function Au(l) {
    var n = l.alternate;
    te(Ft, Ft.current & 1), te(pa, l), Fa === null && (n === null || _l.current !== null || n.memoizedState !== null) && (Fa = l);
  }
  function uf(l) {
    te(Ft, Ft.current), te(pa, l), Fa === null && (Fa = l);
  }
  function wd(l) {
    l.tag === 22 ? (te(Ft, Ft.current), te(pa, l), Fa === null && (Fa = l)) : Vn();
  }
  function Vn() {
    te(Ft, Ft.current), te(pa, pa.current);
  }
  function ga(l) {
    q(pa), Fa === l && (Fa = null), q(Ft);
  }
  var Ft = S(0);
  function cf(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || Rn(u) || sc(u)))
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
  var Ou = 0, Ke = null, Dt = null, yl = null, kc = !1, Wc = !1, si = !1, Jr = 0, of = 0, ec = null, K0 = 0;
  function al() {
    throw Error(_(321));
  }
  function di(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!aa(l[u], n[u])) return !1;
    return !0;
  }
  function Kr(l, n, u, c, r, s) {
    return Ou = s, Ke = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, C.H = l === null || l.memoizedState === null ? tg : lh, si = !1, s = u(c, r), si = !1, Wc && (s = $0(
      n,
      u,
      c,
      r
    )), Gd(l), s;
  }
  function Gd(l) {
    C.H = ls;
    var n = Dt !== null && Dt.next !== null;
    if (Ou = 0, yl = Dt = Ke = null, kc = !1, of = 0, ec = null, n) throw Error(_(300));
    l === null || pl || (l = l.dependencies, l !== null && Xc(l) && (pl = !0));
  }
  function $0(l, n, u, c) {
    Ke = l;
    var r = 0;
    do {
      if (Wc && (ec = null), of = 0, Wc = !1, 25 <= r) throw Error(_(301));
      if (r += 1, yl = Dt = null, l.updateQueue != null) {
        var s = l.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      C.H = lg, s = n(u, c);
    } while (Wc);
    return s;
  }
  function u1() {
    var l = C.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Ic(n) : n, l = l.useState()[0], (Dt !== null ? Dt.memoizedState : null) !== l && (Ke.flags |= 1024), n;
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
    Ou = 0, yl = Dt = Ke = null, Wc = !1, of = Jr = 0, ec = null;
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
    if (Dt === null) {
      var l = Ke.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Dt.next;
    var n = yl === null ? Ke.memoizedState : yl.next;
    if (n !== null)
      yl = n, Dt = l;
    else {
      if (l === null)
        throw Ke.alternate === null ? Error(_(467)) : Error(_(310));
      Dt = l, l = {
        memoizedState: Dt.memoizedState,
        baseState: Dt.baseState,
        baseQueue: Dt.baseQueue,
        queue: Dt.queue,
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
    return of += 1, ec === null && (ec = []), l = cy(ec, l, n), n = Ke, (yl === null ? n.memoizedState : yl.next) === null && (n = n.alternate, C.H = n === null || n.memoizedState === null ? tg : lh), l;
  }
  function ff(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ic(l);
      if (l.$$typeof === Et) return W(l);
    }
    throw Error(_(438, String(l)));
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
  function Ru(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function _u(l) {
    var n = rl();
    return Qd(n, Dt, l);
  }
  function Qd(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(_(311));
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
      var v = m = null, O = null, Y = n, Z = !1;
      do {
        var k = Y.lane & -536870913;
        if (k !== Y.lane ? (ut & k) === k : (Ou & k) === k) {
          var w = Y.revertLane;
          if (w === 0)
            O !== null && (O = O.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }), k === Zi && (Z = !0);
          else if ((Ou & w) === w) {
            Y = Y.next, w === Zi && (Z = !0);
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
            }, O === null ? (v = O = k, m = s) : O = O.next = k, Ke.lanes |= w, Wn |= w;
          k = Y.action, si && u(s, k), s = Y.hasEagerState ? Y.eagerState : u(s, k);
        } else
          w = {
            lane: k,
            revertLane: Y.revertLane,
            gesture: Y.gesture,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          }, O === null ? (v = O = w, m = s) : O = O.next = w, Ke.lanes |= k, Wn |= k;
        Y = Y.next;
      } while (Y !== null && Y !== n);
      if (O === null ? m = s : O.next = v, !aa(s, l.memoizedState) && (pl = !0, Z && (u = bl, u !== null)))
        throw u;
      l.memoizedState = s, l.baseState = m, l.baseQueue = O, c.lastRenderedState = s;
    }
    return r === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Vd(l) {
    var n = rl(), u = n.queue;
    if (u === null) throw Error(_(311));
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
      if (u === void 0) throw Error(_(407));
      u = u();
    } else u = n();
    var m = !aa(
      (Dt || r).memoizedState,
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
      ), Ht === null) throw Error(_(349));
      s || (Ou & 127) !== 0 || Wr(c, n, u);
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
    var n = ai(l, 2);
    n !== null && Aa(n, l, 2);
  }
  function hy(l) {
    var n = ql();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), si) {
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
      lastRenderedReducer: Ru,
      lastRenderedState: l
    }, n;
  }
  function Yl(l, n, u, c) {
    return l.baseState = u, Qd(
      l,
      Dt,
      typeof c == "function" ? c : Ru
    );
  }
  function k0(l, n, u, c, r) {
    if (ts(l)) throw Error(_(485));
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
        var v = u(r, c), O = C.S;
        O !== null && O(m, v), yy(l, n, v);
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
    ), c.dispatch = u, c = hy(!1), s = tc.bind(
      null,
      Ke,
      !1,
      c.queue
    ), c = ql(), r = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = r, u = k0.bind(
      null,
      Ke,
      r,
      s,
      u
    ), r.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function W0(l) {
    var n = rl();
    return Ir(n, Dt, l);
  }
  function Ir(l, n, u) {
    if (n = Qd(
      l,
      n,
      Fr
    )[0], l = _u(Ru)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Ic(n);
      } catch (m) {
        throw m === Ji ? lf : m;
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
    var n = rl(), u = Dt;
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
    Dt !== null && c !== null && di(c, Dt.memoizedState.deps) ? r.memoizedState = eo(n, s, u, c) : (Ke.flags |= l, r.memoizedState = eo(
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
      if ((St & 2) !== 0) throw Error(_(440));
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
  function Zn() {
  }
  function Id(l, n) {
    var u = rl();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && di(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function F0(l, n) {
    var u = rl();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && di(n, c[1]))
      return c[0];
    if (c = l(), si) {
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
    return u === void 0 || (Ou & 1073741824) !== 0 && (ut & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = dg(), Ke.lanes |= l, Wn |= l, u);
  }
  function Du(l, n, u, c) {
    return aa(u, n) ? u : _l.current !== null ? (l = es(l, u, c), aa(l, n) || (pl = !0), l) : (Ou & 42) === 0 || (Ou & 1073741824) !== 0 && (ut & 261930) === 0 ? (pl = !0, l.memoizedState = u) : (l = dg(), Ke.lanes |= l, Wn |= l, n);
  }
  function Pd(l, n, u, c, r) {
    var s = J.p;
    J.p = s !== 0 && 8 > s ? s : 8;
    var m = C.T, v = {};
    C.T = v, tc(l, !1, n, u);
    try {
      var O = r(), Y = C.S;
      if (Y !== null && Y(v, O), O !== null && typeof O == "object" && typeof O.then == "function") {
        var Z = Lr(
          O,
          c
        );
        hi(
          l,
          n,
          Z,
          Ha(l)
        );
      } else
        hi(
          l,
          n,
          c,
          Ha(l)
        );
    } catch (k) {
      hi(
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
  function I0() {
  }
  function df(l, n, u, c) {
    if (l.tag !== 5) throw Error(_(476));
    var r = hf(l).queue;
    Pd(
      l,
      r,
      n,
      ne,
      u === null ? I0 : function() {
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
        lastRenderedReducer: Ru,
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
        lastRenderedReducer: Ru,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function Ut(l) {
    var n = hf(l);
    n.next === null && (n = l.alternate.memoizedState), hi(
      l,
      n.next.queue,
      {},
      Ha()
    );
  }
  function Ry() {
    return W(Ms);
  }
  function P0() {
    return rl().memoizedState;
  }
  function _y() {
    return rl().memoizedState;
  }
  function zu(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Ha();
          l = ri(u);
          var c = Wa(n, l, u);
          c !== null && (Aa(c, n, u), Fi(c, n, u)), n = { cache: qr() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function eg(l, n, u) {
    var c = Ha();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ts(l) ? th(n, u) : (u = Sn(l, n, u, c), u !== null && (Aa(u, l, c), Dy(u, n, c)));
  }
  function eh(l, n, u) {
    var c = Ha();
    hi(l, n, u, c);
  }
  function hi(l, n, u, c) {
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
        return Aa(u, l, c), Dy(u, n, c), !0;
    }
    return !1;
  }
  function tc(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Dh(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ts(l)) {
      if (n) throw Error(_(479));
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
  function Dy(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, fu(l, u);
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
  var tg = {
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
      if (si) {
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
        if (si) {
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
      }, c.queue = l, l = l.dispatch = eg.bind(
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
    useDebugValue: Zn,
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
          throw Error(_(407));
        u = u();
      } else {
        if (u = n(), Ht === null)
          throw Error(_(349));
        (ut & 127) !== 0 || Wr(c, n, u);
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
        var u = Ln, c = za;
        u = (c & ~(1 << 32 - Hl(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Jr++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = K0++, n = "_" + n + "r_" + u.toString(32) + "_";
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
      return n.queue = u, n = tc.bind(
        null,
        Ke,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Xd,
    useCacheRefresh: function() {
      return ql().memoizedState = zu.bind(
        null,
        Ke
      );
    },
    useEffectEvent: function(l) {
      var n = ql(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((St & 2) !== 0)
          throw Error(_(440));
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
    useMemo: F0,
    useReducer: _u,
    useRef: Ey,
    useState: function() {
      return _u(Ru);
    },
    useDebugValue: Zn,
    useDeferredValue: function(l, n) {
      var u = rl();
      return Du(
        u,
        Dt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = _u(Ru)[0], n = rl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ic(l),
        n
      ];
    },
    useSyncExternalStore: sy,
    useId: P0,
    useHostTransitionStatus: Ry,
    useFormState: W0,
    useActionState: W0,
    useOptimistic: function(l, n) {
      var u = rl();
      return Yl(u, Dt, l, n);
    },
    useMemoCache: Xd,
    useCacheRefresh: _y
  };
  lh.useEffectEvent = Pr;
  var lg = {
    readContext: W,
    use: ff,
    useCallback: Id,
    useContext: W,
    useEffect: kd,
    useImperativeHandle: Oy,
    useInsertionEffect: Wd,
    useLayoutEffect: Ay,
    useMemo: F0,
    useReducer: Vd,
    useRef: Ey,
    useState: function() {
      return Vd(Ru);
    },
    useDebugValue: Zn,
    useDeferredValue: function(l, n) {
      var u = rl();
      return Dt === null ? es(u, l, n) : Du(
        u,
        Dt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Vd(Ru)[0], n = rl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ic(l),
        n
      ];
    },
    useSyncExternalStore: sy,
    useId: P0,
    useHostTransitionStatus: Ry,
    useFormState: by,
    useActionState: by,
    useOptimistic: function(l, n) {
      var u = rl();
      return Dt !== null ? Yl(u, Dt, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Xd,
    useCacheRefresh: _y
  };
  lg.useEffectEvent = Pr;
  function to(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : B({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Tn = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ha(), r = ri(c);
      r.payload = n, u != null && (r.callback = u), n = Wa(l, r, c), n !== null && (Aa(n, l, c), Fi(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ha(), r = ri(c);
      r.tag = 1, r.payload = n, u != null && (r.callback = u), n = Wa(l, r, c), n !== null && (Aa(n, l, c), Fi(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Ha(), c = ri(u);
      c.tag = 2, n != null && (c.callback = n), n = Wa(l, c, u), n !== null && (Aa(n, l, u), Fi(n, l, u));
    }
  };
  function zy(l, n, u, c, r, s, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, s, m) : n.prototype && n.prototype.isPureReactComponent ? !pn(u, c) || !pn(r, s) : !0;
  }
  function ag(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Tn.enqueueReplaceState(n, n.state, null);
  }
  function lc(l, n) {
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
    return u = ri(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      mf(l, n);
    }, u;
  }
  function Uy(l) {
    return l = ri(l), l.tag = 3, l;
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
        throw Error(_(435, u.tag));
      }
      return gs(l, c, r), Ah(), !1;
    }
    if (ft)
      return n = pa.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = r, c !== Su && (l = Error(_(422), { cause: c }), ef(Ja(l, u)))) : (c !== Su && (n = Error(_(423), {
        cause: c
      }), ef(
        Ja(n, u)
      )), l = l.current.alternate, l.flags |= 65536, r &= -r, l.lanes |= r, c = Ja(c, u), r = Cy(
        l.stateNode,
        c,
        r
      ), qd(l, r), Lt !== 4 && (Lt = 2)), !1;
    var s = Error(_(520), { cause: c });
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
  var uh = Error(_(461)), pl = !1;
  function $t(l, n, u, c) {
    n.child = l === null ? fy(n, null, u, c) : Wi(
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
    return Ye(n), c = Kr(
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
    return n.flags |= 1, l = ni(s, c), l.ref = n.ref, l.return = n, n.child = l;
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
  function ng(l, n, u, c) {
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
        ), s !== null ? J0(n, s) : Zr(), wd(n);
      else
        return c = n.lanes = 536870912, va(
          l,
          n,
          s !== null ? s.baseLanes | u : u,
          u,
          c
        );
    } else
      s !== null ? (tf(n, s.cachePool), J0(n, s), Vn(), n.memoizedState = null) : (l !== null && tf(n, null), Zr(), Vn());
    return $t(l, n, r, u), n.child;
  }
  function ac(l, n) {
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
    return Wi(n, l.child, null, u), l = ns(n, n.pendingProps), l.flags |= 2, ga(n), n.memoizedState = null, l;
  }
  function ug(l, n, u) {
    var c = n.pendingProps, r = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (ft) {
        if (c.mode === "hidden")
          return l = ns(n, c), n.lanes = 536870912, ac(null, l);
        if (uf(n), (l = wt) ? (l = Gg(
          l,
          Rl
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Gn !== null ? { id: za, overflow: Ln } : null,
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
        else throw Error(_(558));
      else if (pl || jl(l, n, u, !1), r = (u & l.childLanes) !== 0, pl || r) {
        if (c = Ht, c !== null && (m = La(c, u), m !== 0 && m !== s.retryLane))
          throw s.retryLane = m, ai(l, m), Aa(c, l, m), uh;
        Ah(), n = Sa(
          l,
          n,
          u
        );
      } else
        l = s.treeContext, wt = Oa(m.nextSibling), Bl = n, ft = !0, vu = null, Rl = !1, l !== null && xr(n, l), n = ns(n, c), n.flags |= 4096;
      return n;
    }
    return l = ni(l.child, {
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
        throw Error(_(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function ih(l, n, u, c, r) {
    return Ye(n), u = Kr(
      l,
      n,
      u,
      c,
      void 0,
      r
    ), c = Ld(), l !== null && !pl ? (Fc(l, n, r), en(l, n, r)) : (ft && c && Io(n), n.flags |= 1, $t(l, n, u, r), n.child);
  }
  function nc(l, n, u, c, r, s) {
    return Ye(n), n.updateQueue = null, u = $0(
      n,
      c,
      u,
      r
    ), Gd(l), c = Ld(), l !== null && !pl ? (Fc(l, n, s), en(l, n, s)) : (ft && c && Io(n), n.flags |= 1, $t(l, n, u, s), n.child);
  }
  function jy(l, n, u, c, r) {
    if (Ye(n), n.stateNode === null) {
      var s = ha, m = u.contextType;
      typeof m == "object" && m !== null && (s = W(m)), s = new u(c, s), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Tn, n.stateNode = s, s._reactInternals = n, s = n.stateNode, s.props = c, s.state = n.memoizedState, s.refs = {}, Vr(n), m = u.contextType, s.context = typeof m == "object" && m !== null ? W(m) : ha, s.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (to(
        n,
        u,
        m,
        c
      ), s.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (m = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), m !== s.state && Tn.enqueueReplaceState(s, s.state, null), Tu(n, c, s, r), Ii(), s.state = n.memoizedState), typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      s = n.stateNode;
      var v = n.memoizedProps, O = lc(u, v);
      s.props = O;
      var Y = s.context, Z = u.contextType;
      m = ha, typeof Z == "object" && Z !== null && (m = W(Z));
      var k = u.getDerivedStateFromProps;
      Z = typeof k == "function" || typeof s.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, Z || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (v || Y !== m) && ag(
        n,
        s,
        c,
        m
      ), fi = !1;
      var w = n.memoizedState;
      s.state = w, Tu(n, c, s, r), Ii(), Y = n.memoizedState, v || w !== Y || fi ? (typeof k == "function" && (to(
        n,
        u,
        k,
        c
      ), Y = n.memoizedState), (O = fi || zy(
        n,
        u,
        O,
        c,
        w,
        Y,
        m
      )) ? (Z || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = Y), s.props = c, s.state = Y, s.context = m, c = O) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      s = n.stateNode, jd(l, n), m = n.memoizedProps, Z = lc(u, m), s.props = Z, k = n.pendingProps, w = s.context, Y = u.contextType, O = ha, typeof Y == "object" && Y !== null && (O = W(Y)), v = u.getDerivedStateFromProps, (Y = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m !== k || w !== O) && ag(
        n,
        s,
        c,
        O
      ), fi = !1, w = n.memoizedState, s.state = w, Tu(n, c, s, r), Ii();
      var Q = n.memoizedState;
      m !== k || w !== Q || fi || l !== null && l.dependencies !== null && Xc(l.dependencies) ? (typeof v == "function" && (to(
        n,
        u,
        v,
        c
      ), Q = n.memoizedState), (Z = fi || zy(
        n,
        u,
        Z,
        c,
        w,
        Q,
        O
      ) || l !== null && l.dependencies !== null && Xc(l.dependencies)) ? (Y || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(c, Q, O), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        c,
        Q,
        O
      )), typeof s.componentDidUpdate == "function" && (n.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || m === l.memoizedProps && w === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && w === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = Q), s.props = c, s.state = Q, s.context = O, c = Z) : (typeof s.componentDidUpdate != "function" || m === l.memoizedProps && w === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && w === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return s = c, Ia(l, n), c = (n.flags & 128) !== 0, s || c ? (s = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : s.render(), n.flags |= 1, l !== null && c ? (n.child = Wi(
      n,
      l.child,
      null,
      r
    ), n.child = Wi(
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
  function Jn(l, n, u, c) {
    return Vi(), n.flags |= 256, $t(l, n, u, c), n.child;
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
        if (r ? Au(n) : Vn(), (l = wt) ? (l = Gg(
          l,
          Rl
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Gn !== null ? { id: za, overflow: Ln } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = ey(l), u.return = n, n.child = u, Bl = n, wt = null)) : l = null, l === null) throw En(n);
        return sc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var v = c.children;
      return c = c.fallback, r ? (Vn(), r = n.mode, v = cs(
        { mode: "hidden", children: v },
        r
      ), c = ui(
        c,
        r,
        u,
        null
      ), v.return = n, c.return = n, v.sibling = c, n.child = v, c = n.child, c.memoizedState = is(u), c.childLanes = Pa(
        l,
        m,
        u
      ), n.memoizedState = us, ac(null, c)) : (Au(n), uc(n, v));
    }
    var O = l.memoizedState;
    if (O !== null && (v = O.dehydrated, v !== null)) {
      if (s)
        n.flags & 256 ? (Au(n), n.flags &= -257, n = lo(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Vn(), n.child = l.child, n.flags |= 128, n = null) : (Vn(), v = c.fallback, r = n.mode, c = cs(
          { mode: "visible", children: c.children },
          r
        ), v = ui(
          v,
          r,
          u,
          null
        ), v.flags |= 2, c.return = n, v.return = n, c.sibling = v, n.child = c, Wi(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = is(u), c.childLanes = Pa(
          l,
          m,
          u
        ), n.memoizedState = us, n = ac(null, c));
      else if (Au(n), sc(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var Y = m.dgst;
        m = Y, c = Error(_(419)), c.stack = "", c.digest = m, ef({ value: c, source: null, stack: null }), n = lo(
          l,
          n,
          u
        );
      } else if (pl || jl(l, n, u, !1), m = (u & l.childLanes) !== 0, pl || m) {
        if (m = Ht, m !== null && (c = La(m, u), c !== 0 && c !== O.retryLane))
          throw O.retryLane = c, ai(l, c), Aa(m, l, c), uh;
        Rn(v) || Ah(), n = lo(
          l,
          n,
          u
        );
      } else
        Rn(v) ? (n.flags |= 192, n.child = l.child, n = null) : (l = O.treeContext, wt = Oa(
          v.nextSibling
        ), Bl = n, ft = !0, vu = null, Rl = !1, l !== null && xr(n, l), n = uc(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return r ? (Vn(), v = c.fallback, r = n.mode, O = l.child, Y = O.sibling, c = ni(O, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = O.subtreeFlags & 65011712, Y !== null ? v = ni(
      Y,
      v
    ) : (v = ui(
      v,
      r,
      u,
      null
    ), v.flags |= 2), v.return = n, c.return = n, c.sibling = v, n.child = c, ac(null, c), c = n.child, v = l.child.memoizedState, v === null ? v = is(u) : (r = v.cachePool, r !== null ? (O = ml._currentValue, r = r.parent !== O ? { parent: O, pool: O } : r) : r = Vc(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: r
    }), c.memoizedState = v, c.childLanes = Pa(
      l,
      m,
      u
    ), n.memoizedState = us, ac(l.child, c)) : (Au(n), u = l.child, l = u.sibling, u = ni(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function uc(l, n) {
    return n = cs(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function cs(l, n) {
    return l = ol(22, l, null, n), l.lanes = 0, l;
  }
  function lo(l, n, u) {
    return Wi(n, l.child, null, u), l = uc(
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
    if (v ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, te(Ft, m), $t(l, n, c, u), c = ft ? hl : 0, !v && l !== null && (l.flags & 128) !== 0)
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
    if (l !== null && (n.dependencies = l.dependencies), Wn |= n.lanes, (u & n.childLanes) === 0)
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
      throw Error(_(153));
    if (n.child !== null) {
      for (l = n.child, u = ni(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = ni(l, l.pendingProps), u.return = n;
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
        Kt(n, n.stateNode.containerInfo), ya(n, ml, l.memoizedState.cache), Vi();
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
          return c.dehydrated !== null ? (Au(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? qy(l, n, u) : (Au(n), l = en(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Au(n);
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
        if (r = n.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), te(Ft, Ft.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, ng(
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
          if (l = Ki(n.elementType), n.type = l, typeof l == "function")
            Gc(l) ? (c = lc(l, c), n.tag = 1, n = jy(
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
              } else if (r === Me) {
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
            throw n = Jt(l) || l, Error(_(306, n, ""));
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
        return c = n.type, r = lc(
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
          ), l === null) throw Error(_(387));
          c = n.pendingProps;
          var s = n.memoizedState;
          r = s.element, jd(l, n), Tu(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, ya(n, ml, c), c !== s.cache && Eu(
            n,
            [ml],
            u,
            !0
          ), Ii(), c = m.element, s.isDehydrated)
            if (s = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
              n = Jn(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== r) {
              r = Ja(
                Error(_(424)),
                n
              ), ef(r), n = Jn(
                l,
                n,
                c,
                u
              );
              break e;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, wt = Oa(l.firstChild), Bl = n, ft = !0, vu = null, Rl = !0, u = fy(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Vi(), c === r) {
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
        )) ? n.memoizedState = u : ft || (u = n.type, l = n.pendingProps, c = rc(
          Qe.current
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
          Qe.current
        ), Bl = n, Rl = !0, r = wt, In(n.type) ? (_s = r, wt = Oa(c.firstChild)) : wt = r), $t(
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
        ), c = n.pendingProps, l === null ? n.child = Wi(
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
        return r = n.type._context, c = n.pendingProps.children, Ye(n), r = W(r), c = c(r), n.flags |= 1, $t(l, n, c, u), n.child;
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
        return ug(l, n, u);
      case 22:
        return ng(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return Ye(n), c = W(ml), l === null ? (r = ka(), r === null && (r = Ht, s = qr(), r.pooledCache = s, s.refCount++, s !== null && (r.pooledCacheLanes |= u), r = s), n.memoizedState = { parent: c, cache: r }, Vr(n), ya(n, ml, r)) : ((l.lanes & u) !== 0 && (jd(l, n), Tu(n, null, null, u), Ii()), r = l.memoizedState, s = n.memoizedState, r.parent !== c ? (r = { parent: c, cache: c }, n.memoizedState = r, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = r), ya(n, ml, c)) : (c = s.cache, ya(n, ml, c), c !== r.cache && Eu(
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
    throw Error(_(156, n.tag));
  }
  function Mu(l) {
    l.flags |= 4;
  }
  function Gy(l, n, u, c, r) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (r & 335544128) === r)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (yg()) l.flags |= 8192;
        else
          throw $i = Jc, Zc;
    } else l.flags &= -16777217;
  }
  function Ly(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !xa(n))
      if (yg()) l.flags |= 8192;
      else
        throw $i = Jc, Zc;
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
  function qe(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags & 65011712, c |= r.flags & 65011712, r.return = l, r = r.sibling;
    else
      for (r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags, c |= r.flags, r.return = l, r = r.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function ig(l, n, u) {
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
        return qe(n), null;
      case 1:
        return qe(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Qn(ml), gt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (bu(n) ? Mu(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, ay())), qe(n), null;
      case 26:
        var r = n.type, s = n.memoizedState;
        return l === null ? (Mu(n), s !== null ? (qe(n), Ly(n, s)) : (qe(n), Gy(
          n,
          r,
          null,
          c,
          u
        ))) : s ? s !== l.memoizedState ? (Mu(n), qe(n), Ly(n, s)) : (qe(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && Mu(n), qe(n), Gy(
          n,
          r,
          l,
          c,
          u
        )), null;
      case 27:
        if (re(n), u = Qe.current, r = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Mu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(_(166));
            return qe(n), null;
          }
          l = ee.current, bu(n) ? Br(n) : (l = xf(r, c, u), n.stateNode = l, Mu(n));
        }
        return qe(n), null;
      case 5:
        if (re(n), r = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Mu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(_(166));
            return qe(n), null;
          }
          if (s = ee.current, bu(n))
            Br(n);
          else {
            var m = rc(
              Qe.current
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
            c && Mu(n);
          }
        }
        return qe(n), Gy(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Mu(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(_(166));
          if (l = Qe.current, bu(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, r = Bl, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  c = r.memoizedProps;
              }
            l[Ct] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || sp(l.nodeValue, u)), l || En(n, !0);
          } else
            l = rc(l).createTextNode(
              c
            ), l[Ct] = n, n.stateNode = l;
        }
        return qe(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = bu(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(_(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(_(557));
              l[Ct] = n;
            } else
              Vi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            qe(n), l = !1;
          } else
            u = ay(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (ga(n), n) : (ga(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(_(558));
        }
        return qe(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (r = bu(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!r) throw Error(_(318));
              if (r = n.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(_(317));
              r[Ct] = n;
            } else
              Vi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            qe(n), r = !1;
          } else
            r = ay(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return n.flags & 256 ? (ga(n), n) : (ga(n), null);
        }
        return ga(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, r = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (r = c.alternate.memoizedState.cachePool.pool), s = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (s = c.memoizedState.cachePool.pool), s !== r && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), na(n, n.updateQueue), qe(n), null);
      case 4:
        return gt(), l === null && Uf(n.stateNode.containerInfo), qe(n), null;
      case 10:
        return Qn(n.type), qe(n), null;
      case 19:
        if (q(Ft), c = n.memoizedState, c === null) return qe(n), null;
        if (r = (n.flags & 128) !== 0, s = c.rendering, s === null)
          if (r) yf(c, !1);
          else {
            if (Lt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (s = cf(l), s !== null) {
                  for (n.flags |= 128, yf(c, !1), l = s.updateQueue, n.updateQueue = l, na(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Pm(u, l), u = u.sibling;
                  return te(
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
                return qe(n), null;
            } else
              2 * Sl() - c.renderingStartTime > At && u !== 536870912 && (n.flags |= 128, r = !0, yf(c, !1), n.lanes = 4194304);
          c.isBackwards ? (s.sibling = n.child, n.child = s) : (l = c.last, l !== null ? l.sibling = s : n.child = s, c.last = s);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = Sl(), l.sibling = null, u = Ft.current, te(
          Ft,
          r ? u & 1 | 2 : u & 1
        ), ft && bn(n, c.treeForkCount), l) : (qe(n), null);
      case 22:
      case 23:
        return ga(n), nf(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (qe(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : qe(n), u = n.updateQueue, u !== null && na(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && q($a), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Qn(ml), qe(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(_(156, n.tag));
  }
  function cg(l, n) {
    switch (Hd(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Qn(ml), gt(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return re(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (ga(n), n.alternate === null)
            throw Error(_(340));
          Vi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (ga(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(_(340));
          Vi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return q(Ft), null;
      case 4:
        return gt(), null;
      case 10:
        return Qn(n.type), null;
      case 22:
      case 23:
        return ga(n), nf(), l !== null && q($a), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Qn(ml), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function og(l, n) {
    switch (Hd(n), n.tag) {
      case 3:
        Qn(ml), gt();
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
        Qn(n.type);
        break;
      case 22:
      case 23:
        ga(n), nf(), l !== null && q($a);
        break;
      case 24:
        Qn(ml);
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
              var O = u, Y = v;
              try {
                Y();
              } catch (Z) {
                Mt(
                  r,
                  O,
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
        Pi(n, u);
      } catch (c) {
        Mt(l, l.return, c);
      }
    }
  }
  function ic(l, n, u) {
    u.props = lc(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Mt(l, n, c);
    }
  }
  function Cu(l, n) {
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
  function Kn(l, n) {
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
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && In(l.type) || l.tag === 4;
  }
  function pf(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Qy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && In(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function gf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Nn));
    else if (c !== 4 && (c === 27 && In(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (gf(l, n, u), l = l.sibling; l !== null; )
        gf(l, n, u), l = l.sibling;
  }
  function vf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && In(l.type) && (u = l.stateNode), l = l.child, l !== null))
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
  var mi = !1, El = !1, dh = !1, Zy = typeof WeakSet == "function" ? WeakSet : Set, wl = null;
  function Sf(l, n) {
    if (l = l.containerInfo, Hh = zl, l = Li(l), zr(l)) {
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
            var m = 0, v = -1, O = -1, Y = 0, Z = 0, k = l, w = null;
            t: for (; ; ) {
              for (var Q; k !== u || r !== 0 && k.nodeType !== 3 || (v = m + r), k !== s || c !== 0 && k.nodeType !== 3 || (O = m + c), k.nodeType === 3 && (m += k.nodeValue.length), (Q = k.firstChild) !== null; )
                w = k, k = Q;
              for (; ; ) {
                if (k === l) break t;
                if (w === u && ++Y === r && (v = m), w === s && ++Z === c && (O = m), (Q = k.nextSibling) !== null) break;
                k = w, w = k.parentNode;
              }
              k = Q;
            }
            u = v === -1 || O === -1 ? null : { start: v, end: O };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Nh = { focusedElem: l, selectionRange: u }, zl = !1, wl = n; wl !== null; )
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
                  var de = lc(
                    u.type,
                    r
                  );
                  l = c.getSnapshotBeforeUpdate(
                    de,
                    s
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Ue) {
                  Mt(
                    u,
                    u.return,
                    Ue
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
              if ((l & 1024) !== 0) throw Error(_(163));
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
        yi(l, u), c & 4 && An(5, u);
        break;
      case 1:
        if (yi(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              Mt(u, u.return, m);
            }
          else {
            var r = lc(
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
        c & 64 && rh(u), c & 512 && Cu(u, u.return);
        break;
      case 3:
        if (yi(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
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
            Pi(l, n);
          } catch (m) {
            Mt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && Vy(u);
      case 26:
      case 5:
        yi(l, u), n === null && c & 4 && Xy(u), c & 512 && Cu(u, u.return);
        break;
      case 12:
        yi(l, u);
        break;
      case 31:
        yi(l, u), c & 4 && fg(l, u);
        break;
      case 13:
        yi(l, u), c & 4 && $y(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = ln.bind(
          null,
          u
        ), Nf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || mi, !c) {
          n = n !== null && n.memoizedState !== null || El, r = mi;
          var s = El;
          mi = c, (El = n) && !s ? $n(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : yi(l, u), mi = r, El = s;
        }
        break;
      case 30:
        break;
      default:
        yi(l, u);
    }
  }
  function Jy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Jy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && od(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Gt = null, ba = !1;
  function Uu(l, n, u) {
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
        El || Kn(u, n), Uu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        El || Kn(u, n);
        var c = Gt, r = ba;
        In(u.type) && (Gt = u.stateNode, ba = !1), Uu(
          l,
          n,
          u
        ), so(u.stateNode), Gt = c, ba = r;
        break;
      case 5:
        El || Kn(u, n);
      case 6:
        if (c = Gt, r = ba, Gt = null, Uu(
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
        c = Gt, r = ba, Gt = u.stateNode.containerInfo, ba = !0, Uu(
          l,
          n,
          u
        ), Gt = c, ba = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        tn(2, u, n), El || tn(4, u, n), Uu(
          l,
          n,
          u
        );
        break;
      case 1:
        El || (Kn(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && ic(
          u,
          n,
          c
        )), Uu(
          l,
          n,
          u
        );
        break;
      case 21:
        Uu(
          l,
          n,
          u
        );
        break;
      case 22:
        El = (c = El) || u.memoizedState !== null, Uu(
          l,
          n,
          u
        ), El = c;
        break;
      default:
        Uu(
          l,
          n,
          u
        );
    }
  }
  function fg(l, n) {
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
        throw Error(_(435, l.tag));
    }
  }
  function rs(l, n) {
    var u = fs(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var r = Cg.bind(null, l, c);
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
              if (In(v.type)) {
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
        if (Gt === null) throw Error(_(160));
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
        Ea(n, l), Ma(l), c & 512 && (El || u === null || Kn(u, u.return)), c & 64 && mi && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var r = ke;
        if (Ea(n, l), Ma(l), c & 512 && (El || u === null || Kn(u, u.return)), c & 4) {
          var s = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, r = r.ownerDocument || r;
                  t: switch (c) {
                    case "title":
                      s = r.getElementsByTagName("title")[0], (!s || s[ru] || s[Ct] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = r.createElement(c), r.head.insertBefore(
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
                      throw Error(_(468, c));
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
        Ea(n, l), Ma(l), c & 512 && (El || u === null || Kn(u, u.return)), u !== null && c & 4 && sh(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Ea(n, l), Ma(l), c & 512 && (El || u === null || Kn(u, u.return)), l.flags & 32) {
          r = l.stateNode;
          try {
            du(r, "");
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
            throw Error(_(162));
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
        Ea(n, l), Ma(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Fn = Sl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, rs(l, c)));
        break;
      case 22:
        r = l.memoizedState !== null;
        var O = u !== null && u.memoizedState !== null, Y = mi, Z = El;
        if (mi = Y || r, El = Z || O, Ea(n, l), El = Z, mi = Y, Ma(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = r ? n._visibility & -2 : n._visibility | 1, r && (u === null || O || mi || El || no(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                O = u = n;
                try {
                  if (s = O.stateNode, r)
                    m = s.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = O.stateNode;
                    var k = O.memoizedProps.style, w = k != null && k.hasOwnProperty("display") ? k.display : null;
                    v.style.display = w == null || typeof w == "boolean" ? "" : ("" + w).trim();
                  }
                } catch (de) {
                  Mt(O, O.return, de);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                O = n;
                try {
                  O.stateNode.nodeValue = r ? "" : O.memoizedProps;
                } catch (de) {
                  Mt(O, O.return, de);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                O = n;
                try {
                  var Q = O.stateNode;
                  r ? gl(Q, !0) : gl(O.stateNode, !1);
                } catch (de) {
                  Mt(O, O.return, de);
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
        if (u == null) throw Error(_(160));
        switch (u.tag) {
          case 27:
            var r = u.stateNode, s = pf(l);
            vf(l, s, r);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (du(m, ""), u.flags &= -33);
            var v = pf(l);
            vf(l, v, m);
            break;
          case 3:
          case 4:
            var O = u.stateNode.containerInfo, Y = pf(l);
            gf(
              l,
              Y,
              O
            );
            break;
          default:
            throw Error(_(161));
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
  function yi(l, n) {
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
          Kn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && ic(
            n,
            n.return,
            u
          ), no(n);
          break;
        case 27:
          so(n.stateNode);
        case 26:
        case 5:
          Kn(n, n.return), no(n);
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
  function $n(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, r = l, s = n, m = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          $n(
            r,
            s,
            u
          ), An(4, s);
          break;
        case 1:
          if ($n(
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
              var O = r.shared.hiddenCallbacks;
              if (O !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < O.length; r++)
                  Yd(O[r], v);
            } catch (Y) {
              Mt(c, c.return, Y);
            }
          }
          u && m & 64 && rh(s), Cu(s, s.return);
          break;
        case 27:
          Vy(s);
        case 26:
        case 5:
          $n(
            r,
            s,
            u
          ), u && c === null && m & 4 && Xy(s), Cu(s, s.return);
          break;
        case 12:
          $n(
            r,
            s,
            u
          );
          break;
        case 31:
          $n(
            r,
            s,
            u
          ), u && m & 4 && fg(r, s);
          break;
        case 13:
          $n(
            r,
            s,
            u
          ), u && m & 4 && $y(r, s);
          break;
        case 22:
          s.memoizedState === null && $n(
            r,
            s,
            u
          ), Cu(s, s.return);
          break;
        case 30:
          break;
        default:
          $n(
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
          } catch (O) {
            Mt(n, n.return, O);
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
      var s = l, m = n, v = u, O = c, Y = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Ef(
            s,
            m,
            v,
            O,
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
            O,
            r
          ) : ss(
            s,
            m
          ) : (Z._visibility |= 2, Ef(
            s,
            m,
            v,
            O,
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
            O,
            r
          ), r && Y & 2048 && yh(m.alternate, m);
          break;
        default:
          Ef(
            s,
            m,
            v,
            O,
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
  function Hu(l, n, u) {
    if (l.subtreeFlags & Ca)
      for (l = l.child; l !== null; )
        rg(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function rg(l, n, u) {
    switch (l.tag) {
      case 26:
        Hu(
          l,
          n,
          u
        ), l.flags & Ca && l.memoizedState !== null && qu(
          u,
          ke,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Hu(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = ke;
        ke = ua(l.stateNode.containerInfo), Hu(
          l,
          n,
          u
        ), ke = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = Ca, Ca = 16777216, Hu(
          l,
          n,
          u
        ), Ca = c) : Hu(
          l,
          n,
          u
        ));
        break;
      default:
        Hu(
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
  var sg = {
    getCacheForType: function(l) {
      var n = W(ml), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return W(ml).controller.signal;
    }
  }, Fy = typeof WeakMap == "function" ? WeakMap : Map, St = 0, Ht = null, rt = null, ut = 0, zt = 0, Be = null, Nu = !1, cc = !1, vh = !1, kn = 0, Lt = 0, Wn = 0, uo = 0, Sh = 0, Ta = 0, nl = 0, hs = null, ul = null, bh = !1, Fn = 0, Iy = 0, At = 1 / 0, Af = null, It = null, Dl = 0, pi = null, oc = null, xu = 0, Ua = 0, Eh = null, Th = null, Of = 0, ms = null;
  function Ha() {
    return (St & 2) !== 0 && ut !== 0 ? ut & -ut : C.T !== null ? Dh() : id();
  }
  function dg() {
    if (Ta === 0)
      if ((ut & 536870912) === 0 || ft) {
        var l = ue;
        ue <<= 1, (ue & 3932160) === 0 && (ue = 262144), Ta = l;
      } else Ta = 536870912;
    return l = pa.current, l !== null && (l.flags |= 32), Ta;
  }
  function Aa(l, n, u) {
    (l === Ht && (zt === 2 || zt === 9) || l.cancelPendingCommit !== null) && (Bu(l, 0), gi(
      l,
      ut,
      Ta,
      !1
    )), Ni(l, u), ((St & 2) === 0 || l !== Ht) && (l === Ht && ((St & 2) === 0 && (uo |= u), Lt === 4 && gi(
      l,
      ut,
      Ta,
      !1
    )), ju(l));
  }
  function hg(l, n, u) {
    if ((St & 6) !== 0) throw Error(_(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || nt(l, n), r = c ? vg(l, n) : Oh(l, n, !0), s = c;
    do {
      if (r === 0) {
        cc && !c && gi(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, s && !mg(u)) {
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
              var O = v.current.memoizedState.isDehydrated;
              if (O && (Bu(v, m).flags |= 256), m = Oh(
                v,
                m,
                !1
              ), m !== 2) {
                if (vh && !O) {
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
          Bu(l, 0), gi(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, s = r, s) {
            case 0:
            case 1:
              throw Error(_(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              gi(
                c,
                n,
                Ta,
                !Nu
              );
              break e;
            case 2:
              ul = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(_(329));
          }
          if ((n & 62914560) === n && (r = Fn + 300 - Sl(), 10 < r)) {
            if (gi(
              c,
              n,
              Ta,
              !Nu
            ), ge(c, 0, !0) !== 0) break e;
            xu = n, c.timeoutHandle = Os(
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
                Nu,
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
            Nu,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ju(l);
  }
  function ys(l, n, u, c, r, s, m, v, O, Y, Z, k, w, Q) {
    if (l.timeoutHandle = -1, k = n.subtreeFlags, k & 8192 || (k & 16785408) === 16785408) {
      k = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Nn
      }, rg(
        n,
        s,
        k
      );
      var de = (s & 62914560) === s ? Fn - Sl() : (s & 4194048) === s ? Iy - Sl() : 0;
      if (de = Ap(
        k,
        de
      ), de !== null) {
        xu = s, l.cancelPendingCommit = de(
          Tg.bind(
            null,
            l,
            n,
            s,
            u,
            c,
            r,
            m,
            v,
            O,
            Z,
            k,
            null,
            w,
            Q
          )
        ), gi(l, s, m, !Y);
        return;
      }
    }
    Tg(
      l,
      n,
      s,
      u,
      c,
      r,
      m,
      v,
      O
    );
  }
  function mg(l) {
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
  function gi(l, n, u, c) {
    n &= ~Sh, n &= ~uo, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var r = n; 0 < r; ) {
      var s = 31 - Hl(r), m = 1 << s;
      c[s] = -1, r &= ~m;
    }
    u !== 0 && gr(l, u, n);
  }
  function Rf() {
    return (St & 6) === 0 ? (Si(0), !1) : !0;
  }
  function Py() {
    if (rt !== null) {
      if (zt === 0)
        var l = rt.return;
      else
        l = rt, Xn = ii = null, $r(l), ki = null, Kc = 0, l = rt;
      for (; l !== null; )
        og(l.alternate, l), l = l.return;
      rt = null;
    }
  }
  function Bu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Yg(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), xu = 0, Py(), Ht = l, rt = u = ni(l.current, null), ut = n, zt = 0, Be = null, Nu = !1, cc = nt(l, n), vh = !1, nl = Ta = Sh = uo = Wn = Lt = 0, ul = hs = null, bh = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var r = 31 - Hl(c), s = 1 << r;
        n |= l[r], c &= ~s;
      }
    return kn = n, Va(), u;
  }
  function _f(l, n) {
    Ke = null, C.H = ls, n === Ji || n === lf ? (n = oy(), zt = 3) : n === Zc ? (n = oy(), zt = 4) : zt = n === uh ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Be = n, rt === null && (Lt = 1, mf(
      l,
      Ja(n, l.current)
    ));
  }
  function yg() {
    var l = pa.current;
    return l === null ? !0 : (ut & 4194048) === ut ? Fa === null : (ut & 62914560) === ut || (ut & 536870912) !== 0 ? l === Fa : !1;
  }
  function pg() {
    var l = C.H;
    return C.H = ls, l === null ? ls : l;
  }
  function gg() {
    var l = C.A;
    return C.A = sg, l;
  }
  function Ah() {
    Lt = 4, Nu || (ut & 4194048) !== ut && pa.current !== null || (cc = !0), (Wn & 134217727) === 0 && (uo & 134217727) === 0 || Ht === null || gi(
      Ht,
      ut,
      Ta,
      !1
    );
  }
  function Oh(l, n, u) {
    var c = St;
    St |= 2;
    var r = pg(), s = gg();
    (Ht !== l || ut !== n) && (Af = null, Bu(l, n)), n = !1;
    var m = Lt;
    e: do
      try {
        if (zt !== 0 && rt !== null) {
          var v = rt, O = Be;
          switch (zt) {
            case 8:
              Py(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              pa.current === null && (n = !0);
              var Y = zt;
              if (zt = 0, Be = null, io(l, v, O, Y), u && cc) {
                m = 0;
                break e;
              }
              break;
            default:
              Y = zt, zt = 0, Be = null, io(l, v, O, Y);
          }
        }
        c1(), m = Lt;
        break;
      } catch (Z) {
        _f(l, Z);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Xn = ii = null, St = c, C.H = r, C.A = s, rt === null && (Ht = null, ut = 0, Va()), m;
  }
  function c1() {
    for (; rt !== null; ) Sg(rt);
  }
  function vg(l, n) {
    var u = St;
    St |= 2;
    var c = pg(), r = gg();
    Ht !== l || ut !== n ? (Af = null, At = Sl() + 500, Bu(l, n)) : cc = nt(
      l,
      n
    );
    e: do
      try {
        if (zt !== 0 && rt !== null) {
          n = rt;
          var s = Be;
          t: switch (zt) {
            case 1:
              zt = 0, Be = null, io(l, n, s, 1);
              break;
            case 2:
            case 9:
              if (iy(s)) {
                zt = 0, Be = null, bg(n);
                break;
              }
              n = function() {
                zt !== 2 && zt !== 9 || Ht !== l || (zt = 7), ju(l);
              }, s.then(n, n);
              break e;
            case 3:
              zt = 7;
              break e;
            case 4:
              zt = 5;
              break e;
            case 7:
              iy(s) ? (zt = 0, Be = null, bg(n)) : (zt = 0, Be = null, io(l, n, s, 7));
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
                    zt = 0, Be = null;
                    var O = v.sibling;
                    if (O !== null) rt = O;
                    else {
                      var Y = v.return;
                      Y !== null ? (rt = Y, ps(Y)) : rt = null;
                    }
                    break t;
                  }
              }
              zt = 0, Be = null, io(l, n, s, 5);
              break;
            case 6:
              zt = 0, Be = null, io(l, n, s, 6);
              break;
            case 8:
              Py(), Lt = 6;
              break e;
            default:
              throw Error(_(462));
          }
        }
        fc();
        break;
      } catch (Z) {
        _f(l, Z);
      }
    while (!0);
    return Xn = ii = null, C.H = c, C.A = r, St = u, rt !== null ? 0 : (Ht = null, ut = 0, Va(), Lt);
  }
  function fc() {
    for (; rt !== null && !ou(); )
      Sg(rt);
  }
  function Sg(l) {
    var n = wy(l.alternate, l, kn);
    l.memoizedProps = l.pendingProps, n === null ? ps(l) : rt = n;
  }
  function bg(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = nc(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          ut
        );
        break;
      case 11:
        n = nc(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          ut
        );
        break;
      case 5:
        $r(n);
      default:
        og(u, n), n = rt = Pm(n, kn), n = wy(u, n, kn);
    }
    l.memoizedProps = l.pendingProps, n === null ? ps(l) : rt = n;
  }
  function io(l, n, u, c) {
    Xn = ii = null, $r(n), ki = null, Kc = 0;
    var r = n.return;
    try {
      if (i1(
        l,
        r,
        n,
        u,
        ut
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
    n.flags & 32768 ? (ft || c === 1 ? l = !0 : cc || (ut & 536870912) !== 0 ? l = !1 : (Nu = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = pa.current, c !== null && c.tag === 13 && (c.flags |= 16384))), Eg(n, l)) : ps(n);
  }
  function ps(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        Eg(
          n,
          Nu
        );
        return;
      }
      l = n.return;
      var u = ig(
        n.alternate,
        n,
        kn
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
  function Eg(l, n) {
    do {
      var u = cg(l.alternate, l);
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
  function Tg(l, n, u, c, r, s, m, v, O) {
    l.cancelPendingCommit = null;
    do
      Df();
    while (Dl !== 0);
    if ((St & 6) !== 0) throw Error(_(327));
    if (n !== null) {
      if (n === l.current) throw Error(_(177));
      if (s = n.lanes | n.childLanes, s |= vn, jo(
        l,
        u,
        s,
        m,
        v,
        O
      ), l === Ht && (rt = Ht = null, ut = 0), oc = n, pi = l, xu = u, Ua = s, Eh = r, Th = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Ug(Un, function() {
        return Dg(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = C.T, C.T = null, r = J.p, J.p = 2, m = St, St |= 4;
        try {
          Sf(l, n, u);
        } finally {
          St = m, J.p = r, C.T = c;
        }
      }
      Dl = 1, Ag(), Og(), Rg();
    }
  }
  function Ag() {
    if (Dl === 1) {
      Dl = 0;
      var l = pi, n = oc, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = C.T, C.T = null;
        var c = J.p;
        J.p = 2;
        var r = St;
        St |= 4;
        try {
          hh(n, l);
          var s = Nh, m = Li(l.containerInfo), v = s.focusedElem, O = s.selectionRange;
          if (m !== v && v && v.ownerDocument && qc(
            v.ownerDocument.documentElement,
            v
          )) {
            if (O !== null && zr(v)) {
              var Y = O.start, Z = O.end;
              if (Z === void 0 && (Z = Y), "selectionStart" in v)
                v.selectionStart = Y, v.selectionEnd = Math.min(
                  Z,
                  v.value.length
                );
              else {
                var k = v.ownerDocument || document, w = k && k.defaultView || window;
                if (w.getSelection) {
                  var Q = w.getSelection(), de = v.textContent.length, Ue = Math.min(O.start, de), xt = O.end === void 0 ? Ue : Math.min(O.end, de);
                  !Q.extend && Ue > xt && (m = xt, xt = Ue, Ue = m);
                  var x = Fm(
                    v,
                    Ue
                  ), M = Fm(
                    v,
                    xt
                  );
                  if (x && M && (Q.rangeCount !== 1 || Q.anchorNode !== x.node || Q.anchorOffset !== x.offset || Q.focusNode !== M.node || Q.focusOffset !== M.offset)) {
                    var j = k.createRange();
                    j.setStart(x.node, x.offset), Q.removeAllRanges(), Ue > xt ? (Q.addRange(j), Q.extend(M.node, M.offset)) : (j.setEnd(M.node, M.offset), Q.addRange(j));
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
          zl = !!Hh, Nh = Hh = null;
        } finally {
          St = r, J.p = c, C.T = u;
        }
      }
      l.current = n, Dl = 2;
    }
  }
  function Og() {
    if (Dl === 2) {
      Dl = 0;
      var l = pi, n = oc, u = (n.flags & 8772) !== 0;
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
      Dl = 3;
    }
  }
  function Rg() {
    if (Dl === 4 || Dl === 3) {
      Dl = 0, Tc();
      var l = pi, n = oc, u = xu, c = Th;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Dl = 5 : (Dl = 0, oc = pi = null, _g(l, l.pendingLanes));
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
      (xu & 3) !== 0 && Df(), ju(l), r = l.pendingLanes, (u & 261930) !== 0 && (r & 42) !== 0 ? l === ms ? Of++ : (Of = 0, ms = l) : Of = 0, Si(0);
    }
  }
  function _g(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Yr(n)));
  }
  function Df() {
    return Ag(), Og(), Rg(), Dg();
  }
  function Dg() {
    if (Dl !== 5) return !1;
    var l = pi, n = Ua;
    Ua = 0;
    var u = Rm(xu), c = C.T, r = J.p;
    try {
      J.p = 32 > u ? 32 : u, C.T = null, u = Eh, Eh = null;
      var s = pi, m = xu;
      if (Dl = 0, oc = pi = null, xu = 0, (St & 6) !== 0) throw Error(_(331));
      var v = St;
      if (St |= 4, Wy(s.current), bf(
        s,
        s.current,
        m,
        u
      ), St = v, Si(0, !1), Ol && typeof Ol.onPostCommitFiberRoot == "function")
        try {
          Ol.onPostCommitFiberRoot(dn, s);
        } catch {
        }
      return !0;
    } finally {
      J.p = r, C.T = c, _g(l, n);
    }
  }
  function zg(l, n, u) {
    n = Ja(u, n), n = Cy(l.stateNode, n, 2), l = Wa(l, n, 2), l !== null && (Ni(l, 2), ju(l));
  }
  function Mt(l, n, u) {
    if (l.tag === 3)
      zg(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          zg(
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
            ), Ni(c, 2), ju(c));
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
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ht === l && (ut & u) === u && (Lt === 4 || Lt === 3 && (ut & 62914560) === ut && 300 > Sl() - Fn ? (St & 2) === 0 && Bu(l, 0) : Sh |= u, nl === ut && (nl = 0)), ju(l);
  }
  function Mg(l, n) {
    n === 0 && (n = ta()), l = ai(l, n), l !== null && (Ni(l, n), ju(l));
  }
  function ln(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), Mg(l, u);
  }
  function Cg(l, n) {
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
        throw Error(_(314));
    }
    c !== null && c.delete(n), Mg(l, u);
  }
  function Ug(l, n) {
    return me(l, n);
  }
  var zf = null, co = null, tp = !1, Rh = !1, lp = !1, vi = 0;
  function ju(l) {
    l !== co && l.next === null && (co === null ? zf = co = l : co = co.next = l), Rh = !0, tp || (tp = !0, Ss());
  }
  function Si(l, n) {
    if (!lp && Rh) {
      lp = !0;
      do
        for (var u = !1, c = zf; c !== null; ) {
          if (l !== 0) {
            var r = c.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var m = c.suspendedLanes, v = c.pingedLanes;
              s = (1 << 31 - Hl(42 | l) + 1) - 1, s &= r & ~(m & ~v), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (u = !0, oo(c, s));
          } else
            s = ut, s = ge(
              c,
              c === Ht ? s : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (s & 3) === 0 || nt(c, s) || (u = !0, oo(c, s));
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
    vi !== 0 && o1() && (l = vi);
    for (var n = Sl(), u = null, c = zf; c !== null; ) {
      var r = c.next, s = np(c, n);
      s === 0 ? (c.next = null, u === null ? zf = r : u.next = r, r === null && (co = u)) : (u = c, (l !== 0 || (s & 3) !== 0) && (Rh = !0)), c = r;
    }
    Dl !== 0 && Dl !== 5 || Si(l), vi !== 0 && (vi = 0);
  }
  function np(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, r = l.expirationTimes, s = l.pendingLanes & -62914561; 0 < s; ) {
      var m = 31 - Hl(s), v = 1 << m, O = r[m];
      O === -1 ? ((v & u) === 0 || (v & c) !== 0) && (r[m] = Ve(v, n)) : O <= n && (l.expiredLanes |= v), s &= ~v;
    }
    if (n = Ht, u = ut, u = ge(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (zt === 2 || zt === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Ui(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || nt(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Ui(c), Rm(u)) {
        case 2:
        case 8:
          u = xo;
          break;
        case 32:
          u = Un;
          break;
        case 268435456:
          u = Bo;
          break;
        default:
          u = Un;
      }
      return c = vs.bind(null, l), u = me(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Ui(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function vs(l, n) {
    if (Dl !== 0 && Dl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Df() && l.callbackNode !== u)
      return null;
    var c = ut;
    return c = ge(
      l,
      l === Ht ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (hg(l, c, n), np(l, Sl()), l.callbackNode != null && l.callbackNode === u ? vs.bind(null, l) : null);
  }
  function oo(l, n) {
    if (Df()) return null;
    hg(l, n, !0);
  }
  function Ss() {
    wg(function() {
      (St & 6) !== 0 ? me(
        No,
        _h
      ) : ap();
    });
  }
  function Dh() {
    if (vi === 0) {
      var l = Zi;
      l === 0 && (l = le, le <<= 1, (le & 261888) === 0 && (le = 256)), vi = l;
    }
    return vi;
  }
  function Hg(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : mn("" + l);
  }
  function fo(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function bs(l, n, u, c, r) {
    if (n === "submit" && u && u.stateNode === r) {
      var s = Hg(
        (r[ra] || null).action
      ), m = c.submitter;
      m && (n = (n = m[ra] || null) ? Hg(n.formAction) : m.getAttribute("formAction"), n !== null && (s = n, m = null));
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
                if (vi !== 0) {
                  var O = m ? fo(r, m) : new FormData(r);
                  df(
                    u,
                    {
                      pending: !0,
                      data: O,
                      method: r.method,
                      action: s
                    },
                    null,
                    O
                  );
                }
              } else
                typeof s == "function" && (v.preventDefault(), O = m ? fo(r, m) : new FormData(r), df(
                  u,
                  {
                    pending: !0,
                    data: O,
                    method: r.method,
                    action: s
                  },
                  s,
                  O
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var zh = 0; zh < Wo.length; zh++) {
    var Mf = Wo[zh], up = Mf.toLowerCase(), ip = Mf[0].toUpperCase() + Mf.slice(1);
    da(
      up,
      "on" + ip
    );
  }
  da(Cr, "onAnimationEnd"), da(Im, "onAnimationIteration"), da(zd, "onAnimationStart"), da("dblclick", "onDoubleClick"), da("focusin", "onFocus"), da("focusout", "onBlur"), da(Yc, "onTransitionRun"), da(Ur, "onTransitionStart"), da(pu, "onTransitionCancel"), da(Q0, "onTransitionEnd"), su("onMouseEnter", ["mouseout", "mouseover"]), su("onMouseLeave", ["mouseout", "mouseover"]), su("onPointerEnter", ["pointerout", "pointerover"]), su("onPointerLeave", ["pointerout", "pointerover"]), ji(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ji(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ji("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ji(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ji(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ji(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Cf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ng = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cf)
  );
  function xg(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], r = c.event;
      c = c.listeners;
      e: {
        var s = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var v = c[m], O = v.instance, Y = v.currentTarget;
            if (v = v.listener, O !== s && r.isPropagationStopped())
              break e;
            s = v, r.currentTarget = Y;
            try {
              s(r);
            } catch (Z) {
              wc(Z);
            }
            r.currentTarget = null, s = O;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (v = c[m], O = v.instance, Y = v.currentTarget, v = v.listener, O !== s && r.isPropagationStopped())
              break e;
            s = v, r.currentTarget = Y;
            try {
              s(r);
            } catch (Z) {
              wc(Z);
            }
            r.currentTarget = null, s = O;
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
      l[Mh] = !0, Dc.forEach(function(u) {
        u !== "selectionchange" && (Ng.has(u) || cp(u, !1, l), cp(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Mh] || (n[Mh] = !0, cp("selectionchange", !1, n));
    }
  }
  function Es(l, n, u, c) {
    switch (Cs(n)) {
      case 2:
        var r = Yu;
        break;
      case 8:
        r = wu;
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
              var O = m.tag;
              if ((O === 3 || O === 4) && m.stateNode.containerInfo === r)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = Oc(v), m === null) return;
            if (O = m.tag, O === 5 || O === 6 || O === 26 || O === 27) {
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
        var w = gu.get(l);
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
              Q = U0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = j0;
              break;
            case Cr:
            case Im:
            case zd:
              Q = N0;
              break;
            case Q0:
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
              Q = jn;
              break;
            case "toggle":
            case "beforetoggle":
              Q = Qm;
          }
          var Ue = (n & 4) !== 0, xt = !Ue && (l === "scroll" || l === "scrollend"), x = Ue ? w !== null ? w + "Capture" : null : w;
          Ue = [];
          for (var M = Y, j; M !== null; ) {
            var $ = M;
            if (j = $.stateNode, $ = $.tag, $ !== 5 && $ !== 26 && $ !== 27 || j === null || x === null || ($ = Nl(M, x), $ != null && Ue.push(
              Ts(M, $, j)
            )), xt) break;
            M = M.return;
          }
          0 < Ue.length && (w = new Q(
            w,
            de,
            null,
            u,
            Z
          ), k.push({ event: w, listeners: Ue }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (w = l === "mouseover" || l === "pointerover", Q = l === "mouseout" || l === "pointerout", w && u !== md && (de = u.relatedTarget || u.fromElement) && (Oc(de) || de[xi]))
            break e;
          if ((Q || w) && (w = Z.window === Z ? Z : (w = Z.ownerDocument) ? w.defaultView || w.parentWindow : window, Q ? (de = u.relatedTarget || u.toElement, Q = Y, de = de ? Oc(de) : null, de !== null && (xt = fe(de), Ue = de.tag, de !== xt || Ue !== 5 && Ue !== 27 && Ue !== 6) && (de = null)) : (Q = null, de = Y), Q !== de)) {
            if (Ue = Zo, $ = "onMouseLeave", x = "onMouseEnter", M = "mouse", (l === "pointerout" || l === "pointerover") && (Ue = jn, $ = "onPointerLeave", x = "onPointerEnter", M = "pointer"), xt = Q == null ? w : qo(Q), j = de == null ? w : qo(de), w = new Ue(
              $,
              M + "leave",
              Q,
              u,
              Z
            ), w.target = xt, w.relatedTarget = j, $ = null, Oc(Z) === Y && (Ue = new Ue(
              x,
              M + "enter",
              de,
              u,
              Z
            ), Ue.target = j, Ue.relatedTarget = xt, $ = Ue), xt = $, Q && de)
              t: {
                for (Ue = Bg, x = Q, M = de, j = 0, $ = x; $; $ = Ue($))
                  j++;
                $ = 0;
                for (var Re = M; Re; Re = Ue(Re))
                  $++;
                for (; 0 < j - $; )
                  x = Ue(x), j--;
                for (; 0 < $ - j; )
                  M = Ue(M), $--;
                for (; j--; ) {
                  if (x === M || M !== null && x === M.alternate) {
                    Ue = x;
                    break t;
                  }
                  x = Ue(x), M = Ue(M);
                }
                Ue = null;
              }
            else Ue = null;
            Q !== null && Ch(
              k,
              w,
              Q,
              Ue,
              !1
            ), de !== null && xt !== null && Ch(
              k,
              xt,
              de,
              Ue,
              !0
            );
          }
        }
        e: {
          if (w = Y ? qo(Y) : window, Q = w.nodeName && w.nodeName.toLowerCase(), Q === "select" || Q === "input" && w.type === "file")
            var yt = $m;
          else if (yu(w))
            if (Od)
              yt = jc;
            else {
              yt = L0;
              var ve = G0;
            }
          else
            Q = w.nodeName, !Q || Q.toLowerCase() !== "input" || w.type !== "checkbox" && w.type !== "radio" ? Y && Nm(Y.elementType) && (yt = $m) : yt = Gi;
          if (yt && (yt = yt(l, Y))) {
            Km(
              k,
              yt,
              u,
              Z
            );
            break e;
          }
          ve && ve(l, w, Y), l === "focusout" && Y && w.type === "number" && Y.memoizedProps.value != null && zc(w, "number", w.value);
        }
        switch (ve = Y ? qo(Y) : window, l) {
          case "focusin":
            (yu(ve) || ve.contentEditable === "true") && (Xi = ve, $o = Y, gn = null);
            break;
          case "focusout":
            gn = $o = Xi = null;
            break;
          case "mousedown":
            Yn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Yn = !1, Dd(k, u, Z);
            break;
          case "selectionchange":
            if (Mr) break;
          case "keydown":
          case "keyup":
            Dd(k, u, Z);
        }
        var Ze;
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
        We && (Vm && u.locale !== "ko" && (Nc || We !== "onCompositionStart" ? We === "onCompositionEnd" && Nc && (Ze = jm()) : (ti = Z, Bm = "value" in ti ? ti.value : ti.textContent, Nc = !0)), ve = As(Y, We), 0 < ve.length && (We = new x0(
          We,
          l,
          null,
          u,
          Z
        ), k.push({ event: We, listeners: ve }), Ze ? We.data = Ze : (Ze = Zm(u), Ze !== null && (We.data = Ze)))), (Ze = la ? w0(l, u) : n1(l, u)) && (We = As(Y, "onBeforeInput"), 0 < We.length && (ve = new x0(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Z
        ), k.push({
          event: ve,
          listeners: We
        }), ve.data = Ze)), bs(
          k,
          l,
          Y,
          u,
          Z
        );
      }
      xg(k, n);
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
  function Bg(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Ch(l, n, u, c, r) {
    for (var s = n._reactName, m = []; u !== null && u !== c; ) {
      var v = u, O = v.alternate, Y = v.stateNode;
      if (v = v.tag, O !== null && O === c) break;
      v !== 5 && v !== 26 && v !== 27 || Y === null || (O = Y, r ? (Y = Nl(u, s), Y != null && m.unshift(
        Ts(u, Y, O)
      )) : r || (Y = Nl(u, s), Y != null && m.push(
        Ts(u, Y, O)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var jg = /\r\n?/g, fp = /\u0000|\uFFFD/g;
  function rp(l) {
    return (typeof l == "string" ? l : "" + l).replace(jg, `
`).replace(fp, "");
  }
  function sp(l, n) {
    return n = rp(n), rp(l) === n;
  }
  function Nt(l, n, u, c, r, s) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || du(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && du(l, "" + c);
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
        z0(l, c, s);
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
        c != null && (l.onclick = Nn);
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
            throw Error(_(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(_(60));
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
        Pu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        Pu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        Pu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        Pu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        Pu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        Pu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        Pu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        Pu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        Pu(
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
        z0(l, c, s);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(_(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(_(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? du(l, c) : (typeof c == "number" || typeof c == "bigint") && du(l, "" + c);
        break;
      case "onScroll":
        c != null && ct("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ct("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Nn);
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
        if (!Bi.hasOwnProperty(u))
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
                  throw Error(_(137, n));
                default:
                  Nt(l, n, s, m, u, null);
              }
          }
        r && Nt(l, n, "srcSet", u.srcSet, u, null), c && Nt(l, n, "src", u.src, u, null);
        return;
      case "input":
        ct("invalid", l);
        var v = s = m = r = null, O = null, Y = null;
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
                  O = Z;
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
                    throw Error(_(137, n));
                  break;
                default:
                  Nt(l, n, c, Z, u, null);
              }
          }
        br(
          l,
          s,
          v,
          O,
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
                if (v != null) throw Error(_(91));
                break;
              default:
                Nt(l, n, m, v, u, null);
            }
        Hm(l, c, r, s);
        return;
      case "option":
        for (O in u)
          u.hasOwnProperty(O) && (c = u[O], c != null) && (O === "selected" ? l.selected = c && typeof c != "function" && typeof c != "symbol" : Nt(l, n, O, c, u, null));
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
                throw Error(_(137, n));
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
        var r = null, s = null, m = null, v = null, O = null, Y = null, Z = null;
        for (Q in u) {
          var k = u[Q];
          if (u.hasOwnProperty(Q) && k != null)
            switch (Q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                O = k;
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
                  throw Error(_(137, n));
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
          O,
          Y,
          Z,
          s,
          r
        );
        return;
      case "select":
        Q = m = v = w = null;
        for (s in u)
          if (O = u[s], u.hasOwnProperty(s) && O != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                Q = O;
              default:
                c.hasOwnProperty(s) || Nt(
                  l,
                  n,
                  s,
                  null,
                  c,
                  O
                );
            }
        for (r in c)
          if (s = c[r], O = u[r], c.hasOwnProperty(r) && (s != null || O != null))
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
                s !== O && Nt(
                  l,
                  n,
                  r,
                  s,
                  c,
                  O
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
                if (r != null) throw Error(_(91));
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
        for (O in c)
          w = c[O], Q = u[O], c.hasOwnProperty(O) && w !== Q && (w != null || Q != null) && (O === "selected" ? l.selected = w && typeof w != "function" && typeof w != "symbol" : Nt(
            l,
            n,
            O,
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
        for (var Ue in u)
          w = u[Ue], u.hasOwnProperty(Ue) && w != null && !c.hasOwnProperty(Ue) && Nt(l, n, Ue, null, c, w);
        for (Y in c)
          if (w = c[Y], Q = u[Y], c.hasOwnProperty(Y) && w !== Q && (w != null || Q != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null)
                  throw Error(_(137, n));
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
            var O = u[c], Y = O.startTime;
            if (Y > v) break;
            var Z = O.transferSize, k = O.initiatorType;
            Z && Uh(k) && (O = O.responseEnd, m += Z * (O < v ? 1 : (v - Y) / (O - Y)));
          }
          if (--c, n += 8 * (s + m) / (r.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Hh = null, Nh = null;
  function rc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function qg(l) {
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
  var Os = typeof setTimeout == "function" ? setTimeout : void 0, Yg = typeof clearTimeout == "function" ? clearTimeout : void 0, ro = typeof Promise == "function" ? Promise : void 0, wg = typeof queueMicrotask == "function" ? queueMicrotask : typeof ro < "u" ? function(l) {
    return ro.resolve(null).then(l).catch(pp);
  } : Os;
  function pp(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function In(l) {
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
            s[ru] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && s.rel.toLowerCase() === "stylesheet" || u.removeChild(s), s = m;
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
        if (!l[ru])
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
  function Gg(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = Oa(l.nextSibling), l === null)) return null;
    return l;
  }
  function Rn(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function sc(l) {
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
  function Pn(l) {
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
    switch (n = rc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(_(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(_(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(_(454));
        return l;
      default:
        throw Error(_(451));
    }
  }
  function so(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    od(l);
  }
  var Na = /* @__PURE__ */ new Map(), Ds = /* @__PURE__ */ new Set();
  function ua(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var eu = J.d;
  J.d = {
    f: r1,
    r: Lg,
    D: X,
    C: Ot,
    L: s1,
    m: vp,
    X: bi,
    S: Sp,
    M: dc
  };
  function r1() {
    var l = eu.f(), n = Rf();
    return l || n;
  }
  function Lg(l) {
    var n = Rc(l);
    n !== null && n.tag === 5 && n.type === "form" ? Ut(n) : eu.r(l);
  }
  var Bf = typeof document > "u" ? null : document;
  function Tl(l, n, u) {
    var c = Bf;
    if (c && typeof n == "string" && n) {
      var r = Qa(n);
      r = 'link[rel="' + l + '"][href="' + r + '"]', typeof u == "string" && (r += '[crossorigin="' + u + '"]'), Ds.has(r) || (Ds.add(r), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(r) === null && (n = c.createElement("link"), kl(n, "link", l), Rt(n), c.head.appendChild(n)));
    }
  }
  function X(l) {
    eu.D(l), Tl("dns-prefetch", l, null);
  }
  function Ot(l, n) {
    eu.C(l, n), Tl("preconnect", l, n);
  }
  function s1(l, n, u) {
    eu.L(l, n, u);
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
      Na.has(s) || (l = B(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Na.set(s, l), c.querySelector(r) !== null || n === "style" && c.querySelector(hc(s)) || n === "script" && c.querySelector(Yf(s)) || (n = c.createElement("link"), kl(n, "link", l), Rt(n), c.head.appendChild(n)));
    }
  }
  function vp(l, n) {
    eu.m(l, n);
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
      if (!Na.has(s) && (l = B({ rel: "modulepreload", href: l }, n), Na.set(s, l), u.querySelector(r) === null)) {
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
    eu.S(l, n, u);
    var c = Bf;
    if (c && l) {
      var r = _c(c).hoistableStyles, s = an(l);
      n = n || "default";
      var m = r.get(s);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = c.querySelector(
          hc(s)
        ))
          v.loading = 5;
        else {
          l = B(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Na.get(s)) && jh(l, u);
          var O = m = c.createElement("link");
          Rt(O), kl(O, "link", l), O._p = new Promise(function(Y, Z) {
            O.onload = Y, O.onerror = Z;
          }), O.addEventListener("load", function() {
            v.loading |= 1;
          }), O.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, zs(m, n, c);
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
  function bi(l, n) {
    eu.X(l, n);
    var u = Bf;
    if (u && l) {
      var c = _c(u).hoistableScripts, r = ho(l), s = c.get(r);
      s || (s = u.querySelector(Yf(r)), s || (l = B({ src: l, async: !0 }, n), (n = Na.get(r)) && qh(l, n), s = u.createElement("script"), Rt(s), kl(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function dc(l, n) {
    eu.M(l, n);
    var u = Bf;
    if (u && l) {
      var c = _c(u).hoistableScripts, r = ho(l), s = c.get(r);
      s || (s = u.querySelector(Yf(r)), s || (l = B({ src: l, async: !0, type: "module" }, n), (n = Na.get(r)) && qh(l, n), s = u.createElement("script"), Rt(s), kl(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function jf(l, n, u, c) {
    var r = (r = Qe.current) ? ua(r) : null;
    if (!r) throw Error(_(446));
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
            hc(l)
          )) && !s._p && (m.instance = s, m.state.loading = 5), Na.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Na.set(l, u), s || Xg(
            r,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(_(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(_(529, ""));
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
        throw Error(_(444, l));
    }
  }
  function an(l) {
    return 'href="' + Qa(l) + '"';
  }
  function hc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function qf(l) {
    return B({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Xg(l, n, u, c) {
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
          var r = B({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Rt(c), kl(c, "style", r), zs(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          r = an(u.href);
          var s = l.querySelector(
            hc(r)
          );
          if (s)
            return n.state.loading |= 4, n.instance = s, Rt(s), s;
          c = qf(u), (r = Na.get(r)) && jh(c, r), s = (l.ownerDocument || l).createElement("link"), Rt(s);
          var m = s;
          return m._p = new Promise(function(v, O) {
            m.onload = v, m.onerror = O;
          }), kl(s, "link", c), n.state.loading |= 4, zs(s, u.precedence, l), n.instance = s;
        case "script":
          return s = ho(u.src), (r = l.querySelector(
            Yf(s)
          )) ? (n.instance = r, Rt(r), r) : (c = u, (r = Na.get(s)) && (c = B({}, u), qh(c, r)), l = l.ownerDocument || l, r = l.createElement("script"), Rt(r), kl(r, "link", c), l.head.appendChild(r), n.instance = r);
        case "void":
          return null;
        default:
          throw Error(_(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, zs(c, u.precedence, l));
    return n.instance;
  }
  function zs(l, n, u) {
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
      if (!(s[ru] || s[Ct] || l === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function qu(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var r = an(c.href), s = n.querySelector(
          hc(r)
        );
        if (s) {
          n = s._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = wh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = s, Rt(s);
          return;
        }
        s = n.ownerDocument || n, c = qf(c), (r = Na.get(r)) && jh(c, r), s = s.createElement("link"), Rt(s);
        var m = s;
        m._p = new Promise(function(v, O) {
          m.onload = v, m.onerror = O;
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
  function Op(l, n, u, c, r, s, m, v, O) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = hn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hn(0), this.hiddenUpdates = hn(null), this.identifierPrefix = c, this.onUncaughtError = r, this.onCaughtError = s, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Xh(l, n, u, c, r, s, m, v, O, Y, Z, k) {
    return l = new Op(
      l,
      n,
      u,
      m,
      O,
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
  function Qg(l, n, u, c, r, s) {
    r = mo(r), c.context === null ? c.context = r : c.pendingContext = r, c = ri(n), c.payload = { element: u }, s = s === void 0 ? null : s, s !== null && (c.callback = s), u = Wa(l, c, n), u !== null && (Aa(u, l, n), Fi(u, l, n));
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
  function Vg(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = ai(l, 67108864);
      n !== null && Aa(n, l, 67108864), Rp(l, 67108864);
    }
  }
  function yo(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Ha();
      n = ud(n);
      var u = ai(l, n);
      u !== null && Aa(u, l, n), Rp(l, n);
    }
  }
  var zl = !0;
  function Yu(l, n, u, c) {
    var r = C.T;
    C.T = null;
    var s = J.p;
    try {
      J.p = 2, Wl(l, n, u, c);
    } finally {
      J.p = s, C.T = r;
    }
  }
  function wu(l, n, u, c) {
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
    if (zl) {
      var r = _p(c);
      if (r === null)
        op(
          l,
          n,
          c,
          Vh,
          u
        ), Ei(l, c);
      else if (d1(
        r,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (Ei(l, c), n & 4 && -1 < Ra.indexOf(l)) {
        for (; r !== null; ) {
          var s = Rc(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var m = He(s.pendingLanes);
                  if (m !== 0) {
                    var v = s;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var O = 1 << 31 - Hl(m);
                      v.entanglements[1] |= O, m &= ~O;
                    }
                    ju(s), (St & 6) === 0 && (At = Sl() + 500, Si(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = ai(s, 2), v !== null && Aa(v, s, 2), Rf(), Rp(s, 2);
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
      var n = fe(l);
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
          case Un:
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
  var Lf = !1, Ml = null, Fl = null, ia = null, mc = /* @__PURE__ */ new Map(), _n = /* @__PURE__ */ new Map(), Pt = [], Ra = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ei(l, n) {
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
        mc.delete(n.pointerId);
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
    }, n !== null && (n = Rc(n), n !== null && Vg(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, r !== null && n.indexOf(r) === -1 && n.push(r), l);
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
        return mc.set(
          s,
          po(
            mc.get(s) || null,
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
  function Zg(l) {
    var n = Oc(l.target);
    if (n !== null) {
      var u = fe(n);
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
        return n = Rc(u), n !== null && Vg(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Xf(l, n, u) {
    Us(l) && u.delete(n);
  }
  function Jg() {
    Lf = !1, Ml !== null && Us(Ml) && (Ml = null), Fl !== null && Us(Fl) && (Fl = null), ia !== null && Us(ia) && (ia = null), mc.forEach(Xf), _n.forEach(Xf);
  }
  function Gu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Lf || (Lf = !0, b.unstable_scheduleCallback(
      b.unstable_NormalPriority,
      Jg
    )));
  }
  var Qf = null;
  function Kg(l) {
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
    function n(O) {
      return Gu(O, l);
    }
    Ml !== null && Gu(Ml, l), Fl !== null && Gu(Fl, l), ia !== null && Gu(ia, l), mc.forEach(n), _n.forEach(n);
    for (var u = 0; u < Pt.length; u++) {
      var c = Pt[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Pt.length && (u = Pt[0], u.blockedOn === null); )
      Zg(u), u.blockedOn === null && Pt.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var r = u[c], s = u[c + 1], m = r[ra] || null;
        if (typeof s == "function")
          m || Kg(u);
        else if (m) {
          var v = null;
          if (s && s.hasAttribute("formAction")) {
            if (r = s, m = s[ra] || null)
              v = m.formAction;
            else if (Gf(r) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[c + 1] = v : (u.splice(c, 3), c -= 3), Kg(u);
        }
      }
  }
  function Dp() {
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
    if (n === null) throw Error(_(409));
    var u = n.current, c = Ha();
    Qg(u, c, l, n, null, null);
  }, Jh.prototype.unmount = Zh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Qg(l.current, 2, null, l, null, null), Rf(), n[xi] = null;
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
      Pt.splice(u, 0, l), u === 0 && Zg(l);
    }
  };
  var zp = H.version;
  if (zp !== "19.2.8")
    throw Error(
      _(
        527,
        zp,
        "19.2.8"
      )
    );
  J.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(_(188)) : (l = Object.keys(l).join(","), Error(_(268, l)));
    return l = V(n), l = l !== null ? be(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var $g = {
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
          $g
        ), Ol = Hs;
      } catch {
      }
  }
  return T0.createRoot = function(l, n) {
    if (!ce(l)) throw Error(_(299));
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
      Dp
    ), l[xi] = n.current, Uf(l), new Zh(n);
  }, T0.hydrateRoot = function(l, n, u) {
    if (!ce(l)) throw Error(_(299));
    var c = !1, r = "", s = ah, m = My, v = nh, O = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (r = u.identifierPrefix), u.onUncaughtError !== void 0 && (s = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.formState !== void 0 && (O = u.formState)), n = Xh(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      r,
      O,
      s,
      m,
      v,
      Dp
    ), n.context = mo(null), u = n.current, c = Ha(), c = ud(c), r = ri(c), r.callback = null, Wa(u, r, c), u = c, n.current.lanes = u, Ni(n, u), ju(n), l[xi] = n.current, Uf(l), new Jh(n);
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
    function ae(e, t, a) {
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
        return _(e, t, a, 0);
      }
    }
    function _(e, t, a, i) {
      var o = t[i], f = Tl(e) ? e.slice() : Pe({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], Tl(f) ? f.splice(o, 1) : delete f[o]) : f[o] = _(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function ce(e, t, a) {
      var i = t[a], o = Tl(e) ? e.slice() : Pe({}, e);
      return a + 1 === t.length ? (Tl(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = ce(e[i], t, a + 1), o);
    }
    function fe() {
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
    function P() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function V() {
    }
    function be() {
    }
    function B(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function R(e, t, a, i) {
      return new n1(e, t, a, i);
    }
    function I(e, t) {
      e.context === $f && (Ch(e.current, 2, t, e, null, null), tn());
    }
    function Ae(e, t) {
      if (Qu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, fs(), w0(
          e.current,
          t,
          a
        ), tn();
      }
    }
    function Je(e) {
      Qu = e;
    }
    function at(e) {
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
    function Me(e) {
      return e === null || typeof e != "object" ? null : (e = Lg && e[Lg] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Xe(e) {
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
        case eu:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case sc:
            return "Portal";
          case Pn:
            return e.displayName || "Context";
          case Bh:
            return (e._context.displayName || "Context") + ".Consumer";
          case xf:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Ds:
            return t = e.displayName || null, t !== null ? t : Xe(e.type) || "Memo";
          case ua:
            t = e._payload, e = e._init;
            try {
              return Xe(e(t));
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
          return Xe(t);
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
    function Se(e, t) {
      0 > bi ? console.error("Unexpected pop.") : (t !== Sp[bi] && console.error("Unexpected Fiber popped."), e.current = vp[bi], vp[bi] = null, Sp[bi] = null, bi--);
    }
    function Le(e, t, a) {
      bi++, vp[bi] = e.current, Sp[bi] = a, e.current = t;
    }
    function Jt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Yt(e, t) {
      Le(an, t, e), Le(jf, e, e), Le(dc, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? mg(t) : Co;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = mg(t), t = gi(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = Tm;
                break;
              case "math":
                t = wv;
                break;
              default:
                t = Co;
            }
      }
      a = a.toLowerCase(), a = Cm(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Se(dc, e), Le(dc, a, e);
    }
    function C(e) {
      Se(dc, e), Se(jf, e), Se(an, e);
    }
    function J() {
      return Jt(dc.current);
    }
    function ne(e) {
      e.memoizedState !== null && Le(hc, e, e);
      var t = Jt(dc.current), a = e.type, i = gi(t.context, a);
      a = Cm(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Le(jf, e, e), Le(dc, i, e));
    }
    function Ee(e) {
      jf.current === e && (Se(dc, e), Se(jf, e)), hc.current === e && (Se(hc, e), g0._currentValue = td);
    }
    function Ce() {
    }
    function S() {
      if (qf === 0) {
        Xg = console.log, ho = console.info, Yf = console.warn, bp = console.error, zs = console.group, jh = console.groupCollapsed, qh = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ce,
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
          log: Pe({}, e, { value: Xg }),
          info: Pe({}, e, { value: ho }),
          warn: Pe({}, e, { value: Yf }),
          error: Pe({}, e, { value: bp }),
          group: Pe({}, e, { value: zs }),
          groupCollapsed: Pe({}, e, { value: jh }),
          groupEnd: Pe({}, e, { value: qh })
        });
      }
      0 > qf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function te(e) {
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
                  } catch (ie) {
                    var G = ie;
                  }
                  Reflect.construct(e, [], T);
                } else {
                  try {
                    T.call();
                  } catch (ie) {
                    G = ie;
                  }
                  e.call(T.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ie) {
                  G = ie;
                }
                (T = e()) && typeof T.catch == "function" && T.catch(function() {
                });
              }
            } catch (ie) {
              if (ie && G && typeof ie.stack == "string")
                return [ie.stack, G.stack];
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
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && Tp.set(e, U), U;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Yh = !1, X.H = i, q(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? ee(p) : "", typeof e == "function" && Tp.set(e, p), p;
    }
    function Qe(e, t) {
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
          return Oe(e.type, !1);
        case 11:
          return Oe(e.type.render, !1);
        case 1:
          return Oe(e.type, !0);
        case 31:
          return ee("Activity");
        default:
          return "";
      }
    }
    function De(e) {
      try {
        var t = "", a = null;
        do {
          t += Qe(e, a);
          var i = e._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = t;
                e: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var z = te(p), U = z.lastIndexOf(`
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
      } catch (ie) {
        return `
Error generating stack: ` + ie.message + `
` + ie.stack;
      }
    }
    function Kt(e) {
      return (e = e ? e.displayName || e.name : "") ? ee(e) : "";
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
              var o = te(i);
              o !== "" && (t += `
` + o);
            }
          } else if (e.debugStack != null) {
            var f = e.debugStack;
            (e = e.owner) && f && (t += `
` + te(f));
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
      Mi(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        Mi(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Mi(e) {
      X.getCurrentStack = e === null ? null : Ya, qu = !1, xa = e;
    }
    function Ci(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function wa(e) {
      try {
        return cu(e), !1;
      } catch {
        return !0;
      }
    }
    function cu(e) {
      return "" + e;
    }
    function vt(e, t) {
      if (wa(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Ci(e)
        ), cu(e);
    }
    function ea(e, t) {
      if (wa(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Ci(e)
        ), cu(e);
    }
    function Ec(e) {
      if (wa(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Ci(e)
        ), cu(e);
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
        yo = t.inject(e), zl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function me(e) {
      if (typeof Rp == "function" && Vg(e), zl && typeof zl.setStrictMode == "function")
        try {
          zl.setStrictMode(yo, e);
        } catch (t) {
          Yu || (Yu = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function Ui(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (_p(e) / Vh | 0) | 0;
    }
    function ou(e) {
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
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = ou(i) : (d &= h, d !== 0 ? o = ou(d) : a || (a = h & ~e, a !== 0 && (o = ou(a))))) : (h = i & ~f, h !== 0 ? o = ou(h) : d !== 0 ? o = ou(d) : a || (a = i & ~e, a !== 0 && (o = ou(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
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
    function Un(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function nd(e, t, a, i, o, f) {
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
      if (wu)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Wl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Ga(e, t) {
      if (wu)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Wl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Hl(e) {
      return e &= -e, Ml < e ? Fl < e ? (e & 134217727) !== 0 ? ia : mc : Fl : Ml;
    }
    function Hi() {
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
      delete e[Pt], delete e[Ra], delete e[po], delete e[d1], delete e[Zg];
    }
    function le(e) {
      var t = e[Pt];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ei] || a[Pt]) {
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
      if (e = e[Pt] || e[Ei]) {
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
    function He(e) {
      var t = e[Us];
      return t || (t = e[Us] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function ge(e) {
      e[Xf] = !0;
    }
    function nt(e, t) {
      Ve(e, t), Ve(e + "Capture", t);
    }
    function Ve(e, t) {
      Gu[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Gu[e] = t;
      var a = e.toLowerCase();
      for (Qf[a] = e, e === "onDoubleClick" && (Qf.ondblclick = e), e = 0; e < t.length; e++)
        Jg.add(t[e]);
    }
    function ta(e, t) {
      Kg[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function hn(e) {
      return nn.call(Zh, e) ? !0 : nn.call(Dp, e) ? !1 : Vf.test(e) ? Zh[e] = !0 : (Dp[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Ni(e, t, a) {
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
    function fu(e, t, a, i) {
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
    function Hn(e) {
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
      t.checked === void 0 || t.defaultChecked === void 0 || $g || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        gt() || "A component",
        t.type
      ), $g = !0), t.value === void 0 || t.defaultValue === void 0 || zp || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        gt() || "A component",
        t.type
      ), zp = !0);
    }
    function xi(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (vt(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + La(t)) : e.value !== "" + La(t) && (e.value = "" + La(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Dm(e, d, La(t)) : a != null ? Dm(e, d, La(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (vt(h, "name"), e.name = "" + La(h)) : e.removeAttribute("name");
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
    function Dm(e, t, a) {
      t === "number" && Hn(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function R0(e, t) {
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
    function zm() {
      var e = gt();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function ru(e, t, a, i) {
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
            zm()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            zm()
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
    function Dc(e) {
      return "+ " + "  ".repeat(e);
    }
    function Bi(e) {
      return "- " + "  ".repeat(e);
    }
    function ji(e) {
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
    function su(e, t) {
      return s.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function fd(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Dc(a) + su(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Dc(a) + su(e, i) + `
` + Bi(a) + su(t, i) + `
`;
      }
      return Rt(a) + su(e, i) + `
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
            return (t = Xe(e.type)) ? "<" + t + ">" : "<...>";
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
          t.hasOwnProperty(f) ? (d = Yo(t[f], d), i += Dc(a) + f + ": " + h + `
`, i += Bi(a) + f + ": " + d + `
`) : i += Dc(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = Yo(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += Bi(a) + y + ": " + e + `
`);
      return i;
    }
    function Pu(e, t, a, i) {
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
              var z = wo(
                p,
                h
              );
              h = wo(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && rd(p) === "Object" && rd(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < z.indexOf("...") || -1 < h.indexOf("...")) ? o += Rt(i + 1) + d + `={{
` + sd(
                p,
                y,
                i + 2
              ) + Rt(i + 1) + `}}
` : (o += Dc(i + 1) + d + "=" + z + `
`, o += Bi(i + 1) + d + "=" + h + `
`);
            } else
              o += Rt(i + 1) + d + "=" + wo(t[d], h) + `
`;
          }
        f.forEach(function(U) {
          if (U !== "children") {
            var T = 120 - 2 * (i + 1) - U.length - 1;
            o += Bi(i + 1) + U + "=" + wo(a[U], T) + `
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
      var a = ji(e);
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
      else if (f = ji(e.fiber), f !== null)
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
            Dc(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Pu(
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
        f = o[e], p = typeof f == "string" ? p + (Bi(t) + su(f, 120 - 2 * t) + `
`) : p + Go(
          f.type,
          f.props,
          Bi(t)
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
      return v.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), O.indexOf(t) !== -1 && (a.pTagInButtonScope = null), m.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
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
    function zc(e, t) {
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
      i || (-1 < t.indexOf("-") ? j.hasOwnProperty(t) && j[t] || (j[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        Lo(t.replace(xt, "ms-"))
      )) : Ue.test(t) ? j.hasOwnProperty(t) && j[t] || (j[t] = !0, console.error(
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
          p = t[T], t.hasOwnProperty(T) && a[T] !== p && Um(e, T, p);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Um(e, i, t[i]);
    }
    function du(e) {
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
    function _0(e) {
      return bt.get(e) || e;
    }
    function D0(e, t) {
      if (nn.call(Kh, t) && Kh[t])
        return !0;
      if (y2.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = kg.hasOwnProperty(e) ? e : null, e == null)
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
        if (e = t.toLowerCase(), e = kg.hasOwnProperty(e) ? e : null, e == null) return Kh[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Kh[t] = !0);
      }
      return !0;
    }
    function z0(e, t) {
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
      if (tu.hasOwnProperty(o)) {
        if (o = tu[o], o !== t)
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
    function Nn(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function md(e) {
      var t = ue(e);
      if (t && (e = t.stateNode)) {
        var a = e[Ra] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (xi(
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
                  xi(
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
            t = a.value, t != null && ru(e, !!a.multiple, t, !1);
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
    function hu(e, t) {
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
      if (Wg) return Wg;
      var e, t = y1, a = t.length, i, o = "value" in Zf ? Zf.value : Zf.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Wg = o.slice(e, 1 < i ? 1 - i : void 0);
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
    function ei(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = H2[e]) ? !!t[e] : !1;
    }
    function Ar() {
      return ei;
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
    function ti(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function Bm(e, t) {
      switch (e) {
        case "compositionend":
          return ti(t);
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
        return e === "compositionend" || !S1 && Qo(e, t) ? (e = Mc(), Wg = y1 = Zf = null, Wh = !1, e) : null;
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
      if (!yc) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Or(e, t, a, i) {
      $h ? kh ? kh.push(i) : kh = [i] : $h = i, t = Wn(t, "onChange"), 0 < t.length && (a = new Fg(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function M0(e) {
      zt(e, 0);
    }
    function $l(e) {
      var t = ye(e);
      if (_m(t)) return e;
    }
    function qi(e, t) {
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
          Nn(e)
        ), yd(M0, t);
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
    function C0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function U0(e, t) {
      var a = C0(e);
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
        a = C0(a);
      }
    }
    function H0(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? H0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Sd(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = Hn(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = Hn(e.document);
      }
      return t;
    }
    function wm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function N0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      E1 || Fh == null || Fh !== Hn(i) || (i = Fh, "selectionStart" in i && wm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), jp && Zo(jp, i) || (jp = i, i = Wn(b1, "onSelect"), 0 < i.length && (t = new Fg(
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
    function xn(e, t) {
      VS.set(e, t), nt(t, [e]);
    }
    function x0(e) {
      for (var t = Pg, a = 0; a < e.length; a++) {
        var i = e[a];
        if (typeof i == "object" && i !== null)
          if (Tl(i) && i.length === 2 && typeof i[0] == "string") {
            if (t !== Pg && t !== D1)
              return R1;
            t = D1;
          } else return R1;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || t !== Pg && t !== _1)
            return R1;
          t = _1;
        }
      }
      return t;
    }
    function Gm(e, t, a, i) {
      for (var o in e)
        nn.call(e, o) && o[0] !== "_" && mu(o, e[o], t, a, i);
    }
    function mu(e, t, a, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === Rn) {
              var f = Xe(t.type) || "…", d = t.key;
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
              ]), d !== null && mu(
                "key",
                d,
                a,
                i + 1,
                o
              ), e = !1;
              for (var p in t)
                p === "children" ? t.children != null && (!Tl(t.children) || 0 < t.children.length) && (e = !0) : nn.call(t, p) && p[0] !== "_" && mu(
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
              if (p = x0(t), p === _1 || p === Pg) {
                t = JSON.stringify(t);
                break;
              } else if (p === D1) {
                for (a.push([
                  o + "  ".repeat(i) + e,
                  ""
                ]), e = 0; e < t.length; e++)
                  f = t[e], mu(
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
                if (f = a.length, mu(
                  e,
                  t.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (f = a.length, mu(
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
    function B0(e, t, a, i) {
      var o = !0;
      for (d in e)
        d in t || (a.push([
          ev + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in t)
        if (f in e) {
          var d = e[f], h = t[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [ev + o, "…"],
                [tv + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === Rn) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Xe(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [ev + o, d],
                        [tv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        KS + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, B0(
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
              mu(f, d, a, i, ev), mu(f, h, a, i, tv);
            }
            o = !1;
          }
        } else
          a.push([
            tv + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function Bn(e) {
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
        h = e._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [eT], p = B0(
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
            Lu,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Lu,
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
          e.key !== null && mu("key", e.key, d, 0, ""), e.memoizedProps !== null && Gm(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
            start: t,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: Lu,
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
    function jn(e, t, a, i, o) {
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
            e.key !== null && mu("key", e.key, i, 0, ""), e.memoizedProps !== null && Gm(e.memoizedProps, i, 0, ""), t = {
              start: t,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: Lu,
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
            Lu,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Lu,
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
    function j0(e, t, a, i) {
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
    function q0(e, t, a, i) {
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
    function Y0(e, t, a, i, o) {
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
      for (var e = Ph, t = z1 = Ph = 0; t < e; ) {
        var a = Xu[t];
        Xu[t++] = null;
        var i = Xu[t];
        Xu[t++] = null;
        var o = Xu[t];
        Xu[t++] = null;
        var f = Xu[t];
        if (Xu[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Vm(a, o, f);
      }
    }
    function Jo(e, t, a, i) {
      Xu[Ph++] = e, Xu[Ph++] = t, Xu[Ph++] = a, Xu[Ph++] = i, z1 |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Hc(e, t, a, i) {
      return Jo(e, t, a, i), Dr(e);
    }
    function la(e, t) {
      return Jo(e, null, null, t), Dr(e);
    }
    function Vm(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & qp || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Wl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function Dr(e) {
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
    function Yi(e) {
      if (Qu === null) return e;
      var t = Qu(e);
      return t === void 0 ? e : t.current;
    }
    function Ad(e) {
      if (Qu === null) return e;
      var t = Qu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Yi(e.render), e.render !== t) ? (t = { $$typeof: xf, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Zm(e, t) {
      if (Qu === null) return !1;
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
          (o === Ds || o === ua) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Qu(a), e !== void 0 && e === Qu(t)));
    }
    function Nc(e) {
      Qu !== null && typeof WeakSet == "function" && (em === null && (em = /* @__PURE__ */ new WeakSet()), em.add(e));
    }
    function w0(e, t, a) {
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
        if (Qu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = Qu(y), y !== void 0 && (a.has(y) ? i = !0 : t.has(y) && (h === 1 ? i = !0 : p = !0))), em !== null && (em.has(e) || o !== null && em.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || p) && (o = la(e, 2), o !== null && qe(o, e, 2)), f === null || i || w0(
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
    function yu(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = R(
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
        Jm(e) && (d = 1), h = Yi(h);
      else if (typeof e == "string")
        d = J(), d = xg(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case eu:
            return t = R(31, a, t, o), t.elementType = eu, t.lanes = f, t;
          case Nf:
            return Bc(
              a.children,
              o,
              f,
              t
            );
          case Oa:
            d = 8, o |= Ba, o |= Ti;
            break;
          case _s:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = R(12, e, t, i | et), t.elementType = _s, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case so:
            return t = R(13, a, t, o), t.elementType = so, t.lanes = f, t;
          case Na:
            return t = R(19, a, t, o), t.elementType = Na, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Pn:
                  d = 10;
                  break e;
                case Bh:
                  d = 9;
                  break e;
                case xf:
                  d = 11, h = Ad(h);
                  break e;
                case Ds:
                  d = 14;
                  break e;
                case ua:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : Tl(e) ? a = "array" : e !== void 0 && e.$$typeof === Rn ? (a = "<" + (Xe(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? ot(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = R(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function wi(e, t, a) {
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
      return e = R(7, e, i, t), e.lanes = a, e;
    }
    function Ko(e, t, a) {
      return e = R(6, e, null, t), e.lanes = a, e;
    }
    function $m(e) {
      var t = R(18, null, null, je);
      return t.stateNode = e, t;
    }
    function Od(e, t, a) {
      return t = R(
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
    function qn(e, t) {
      Gi(), tm[lm++] = Yp, tm[lm++] = lv, lv = e, Yp = t;
    }
    function km(e, t, a) {
      Gi(), Vu[Zu++] = So, Vu[Zu++] = bo, Vu[Zu++] = xs, xs = e;
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
      Gi(), e.return !== null && (qn(e, 1), km(e, 1, 0));
    }
    function _d(e) {
      for (; e === lv; )
        lv = tm[--lm], tm[lm] = null, Yp = tm[--lm], tm[lm] = null;
      for (; e === xs; )
        xs = Vu[--Zu], Vu[Zu] = null, bo = Vu[--Zu], Vu[Zu] = null, So = Vu[--Zu], Vu[Zu] = null;
    }
    function G0() {
      return Gi(), xs !== null ? { id: So, overflow: bo } : null;
    }
    function L0(e, t) {
      Gi(), Vu[Zu++] = So, Vu[Zu++] = bo, Vu[Zu++] = xs, So = t.id, bo = t.overflow, xs = e;
    }
    function Gi() {
      st || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function jc(e, t) {
      if (e.return === null) {
        if (lu === null)
          lu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (lu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          lu.distanceFromLeaf > t && (lu.distanceFromLeaf = t);
        }
        return lu;
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
    function X0() {
      st && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function aa(e, t) {
      pc || (e = jc(e, 0), e.serverProps = null, t !== null && (t = Cg(t), e.serverTail.push(t)));
    }
    function pn(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = lu;
      throw i !== null && (lu = null, a = Mm(i)), Mr(
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
          R0(t, i);
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
            Ju = !1;
            return;
          case 27:
          case 3:
            Ju = !0;
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
          var i = jc(e, 0), o = Cg(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? zf(a) : ln(a.nextSibling);
        }
        pn(e);
      }
      if (Fm(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        tl = zf(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        tl = zf(e);
      } else
        t === 27 ? (t = tl, fc(e.type) ? (e = SS, SS = null, tl = e) : tl = t) : tl = _a ? ln(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Li() {
      tl = _a = null, pc = st = !1;
    }
    function zr() {
      var e = kf;
      return e !== null && (sn === null ? sn = e : sn.push.apply(
        sn,
        e
      ), kf = null), e;
    }
    function Mr(e) {
      kf === null ? kf = [e] : kf.push(e);
    }
    function Xi() {
      var e = lu;
      if (e !== null) {
        lu = null;
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
      am = av = null, nm = !1;
    }
    function gn(e, t, a) {
      Le(U1, t._currentValue, e), t._currentValue = a, Le(H1, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== FS && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = FS;
    }
    function Yn(e, t) {
      e._currentValue = U1.current;
      var a = H1.current;
      Se(H1, t), e._currentRenderer = a, Se(U1, t);
    }
    function Dd(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function li(e, t, a, i) {
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
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Dd(
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
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Dd(
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
    function wn(e, t, a, i) {
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
        } else if (o === hc.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(g0) : e = [g0]);
        }
        o = o.return;
      }
      e !== null && li(
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
    function Qi(e) {
      av = e, am = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Tt(e) {
      return nm && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Im(av, e);
    }
    function Cr(e, t) {
      return av === null && Qi(e), Im(e, t);
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
    function zd() {
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
    function pu(e, t, a) {
      (e & 127) !== 0 ? 0 > gc && (gc = Xl(), Gp = nv(t), N1 = t, a != null && (x1 = he(a)), (pt & (Pl | uu)) !== fa && (vl = !0, Ff = wp), e = _f(), t = Bu(), e !== um || t !== Lp ? um = -1.1 : t !== null && (Ff = wp), qs = e, Lp = t) : (e & 4194048) !== 0 && 0 > Ku && (Ku = Xl(), Xp = nv(t), IS = t, a != null && (PS = he(a)), 0 > Oo) && (e = _f(), t = Bu(), (e !== Pf || t !== Ys) && (Pf = -1.1), If = e, Ys = t);
    }
    function Q0(e) {
      if (0 > gc) {
        gc = Xl(), Gp = e._debugTask != null ? e._debugTask : null, (pt & (Pl | uu)) !== fa && (Ff = wp);
        var t = _f(), a = Bu();
        t !== um || a !== Lp ? um = -1.1 : a !== null && (Ff = wp), qs = t, Lp = a;
      }
      0 > Ku && (Ku = Xl(), Xp = e._debugTask != null ? e._debugTask : null, 0 > Oo) && (e = _f(), t = Bu(), (e !== Pf || t !== Ys) && (Pf = -1.1), If = e, Ys = t);
    }
    function gu() {
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
      Ne = ze = -1.1;
    }
    function Wt() {
      var e = ze;
      return ze = -1.1, e;
    }
    function xl(e) {
      0 <= e && (ze = e);
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
    function ai(e) {
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
        on = -1, Bs += t, sl += t, Ne = e;
      }
    }
    function V0(e) {
      il === null && (il = []), il.push(e), To === null && (To = []), To.push(e);
    }
    function ol() {
      on = Xl(), 0 > ze && (ze = on);
    }
    function Gc(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ni(e, t) {
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
      if (--j1 === 0 && (-1 < Ku || (Oo = -1.1), Vp !== null)) {
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
    function ui() {
      var e = Gs.current;
      return e !== null ? e : Qt.pooledCache;
    }
    function Fo(e, t) {
      t === null ? Le(Gs, Gs.current, e) : Le(Gs, t.pool, e);
    }
    function ey() {
      var e = ui();
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
      if (e === cm || e === dv)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function hl(e) {
      var t = tt;
      return e != null && (tt = t === null ? e : t.concat(e)), t;
    }
    function Da() {
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
          t === null && (t = wi(e, a.mode, 0), t._debugInfo = tt, t.return = a), re(
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
    function Gn(e) {
      var t = Ip;
      return Ip += 1, om === null && (om = Ud()), Ja(om, e, t);
    }
    function za(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Ln(e, t) {
      throw t.$$typeof === Gg ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function bn(e, t) {
      var a = Da();
      a !== null ? a.run(
        Ln.bind(null, e, t)
      ) : Ln(e, t);
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
      var a = Da();
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
      var a = Da();
      a !== null ? a.run(
        Hd.bind(null, e, t)
      ) : Hd(e, t);
    }
    function Bl(e) {
      function t(E, A) {
        if (e) {
          var D = E.deletions;
          D === null ? (E.deletions = [A], E.flags |= 16) : D.push(A);
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
        return E = yu(E, A), E.index = 0, E.sibling = null, E;
      }
      function f(E, A, D) {
        return E.index = D, e ? (D = E.alternate, D !== null ? (D = D.index, D < A ? (E.flags |= 67108866, A) : D) : (E.flags |= 67108866, A)) : (E.flags |= 1048576, A);
      }
      function d(E) {
        return e && E.alternate === null && (E.flags |= 67108866), E;
      }
      function h(E, A, D, K) {
        return A === null || A.tag !== 6 ? (A = Ko(
          D,
          E.mode,
          K
        ), A.return = E, A._debugOwner = E, A._debugTask = E._debugTask, A._debugInfo = tt, A) : (A = o(A, D), A.return = E, A._debugInfo = tt, A);
      }
      function y(E, A, D, K) {
        var oe = D.type;
        return oe === Nf ? (A = z(
          E,
          A,
          D.props.children,
          K,
          D.key
        ), ma(D, A, E), A) : A !== null && (A.elementType === oe || Zm(A, D) || typeof oe == "object" && oe !== null && oe.$$typeof === ua && Ka(oe) === A.type) ? (A = o(A, D.props), za(A, D), A.return = E, A._debugOwner = D._owner, A._debugInfo = tt, A) : (A = wi(D, E.mode, K), za(A, D), A.return = E, A._debugInfo = tt, A);
      }
      function p(E, A, D, K) {
        return A === null || A.tag !== 4 || A.stateNode.containerInfo !== D.containerInfo || A.stateNode.implementation !== D.implementation ? (A = Od(D, E.mode, K), A.return = E, A._debugInfo = tt, A) : (A = o(A, D.children || []), A.return = E, A._debugInfo = tt, A);
      }
      function z(E, A, D, K, oe) {
        return A === null || A.tag !== 7 ? (A = Bc(
          D,
          E.mode,
          K,
          oe
        ), A.return = E, A._debugOwner = E, A._debugTask = E._debugTask, A._debugInfo = tt, A) : (A = o(A, D), A.return = E, A._debugInfo = tt, A);
      }
      function U(E, A, D) {
        if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
          return A = Ko(
            "" + A,
            E.mode,
            D
          ), A.return = E, A._debugOwner = E, A._debugTask = E._debugTask, A._debugInfo = tt, A;
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case Rn:
              return D = wi(
                A,
                E.mode,
                D
              ), za(D, A), D.return = E, E = hl(A._debugInfo), D._debugInfo = tt, tt = E, D;
            case sc:
              return A = Od(
                A,
                E.mode,
                D
              ), A.return = E, A._debugInfo = tt, A;
            case ua:
              var K = hl(A._debugInfo);
              return A = Ka(A), E = U(E, A, D), tt = K, E;
          }
          if (Tl(A) || Me(A))
            return D = Bc(
              A,
              E.mode,
              D,
              null
            ), D.return = E, D._debugOwner = E, D._debugTask = E._debugTask, E = hl(A._debugInfo), D._debugInfo = tt, tt = E, D;
          if (typeof A.then == "function")
            return K = hl(A._debugInfo), E = U(
              E,
              Gn(A),
              D
            ), tt = K, E;
          if (A.$$typeof === Pn)
            return U(
              E,
              Cr(E, A),
              D
            );
          bn(E, A);
        }
        return typeof A == "function" && Io(E, A), typeof A == "symbol" && xr(E, A), null;
      }
      function T(E, A, D, K) {
        var oe = A !== null ? A.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
          return oe !== null ? null : h(E, A, "" + D, K);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Rn:
              return D.key === oe ? (oe = hl(D._debugInfo), E = y(
                E,
                A,
                D,
                K
              ), tt = oe, E) : null;
            case sc:
              return D.key === oe ? p(E, A, D, K) : null;
            case ua:
              return oe = hl(D._debugInfo), D = Ka(D), E = T(
                E,
                A,
                D,
                K
              ), tt = oe, E;
          }
          if (Tl(D) || Me(D))
            return oe !== null ? null : (oe = hl(D._debugInfo), E = z(
              E,
              A,
              D,
              K,
              null
            ), tt = oe, E);
          if (typeof D.then == "function")
            return oe = hl(D._debugInfo), E = T(
              E,
              A,
              Gn(D),
              K
            ), tt = oe, E;
          if (D.$$typeof === Pn)
            return T(
              E,
              A,
              Cr(E, D),
              K
            );
          bn(E, D);
        }
        return typeof D == "function" && Io(E, D), typeof D == "symbol" && xr(E, D), null;
      }
      function G(E, A, D, K, oe) {
        if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
          return E = E.get(D) || null, h(A, E, "" + K, oe);
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case Rn:
              return D = E.get(
                K.key === null ? D : K.key
              ) || null, E = hl(K._debugInfo), A = y(
                A,
                D,
                K,
                oe
              ), tt = E, A;
            case sc:
              return E = E.get(
                K.key === null ? D : K.key
              ) || null, p(A, E, K, oe);
            case ua:
              var Ge = hl(K._debugInfo);
              return K = Ka(K), A = G(
                E,
                A,
                D,
                K,
                oe
              ), tt = Ge, A;
          }
          if (Tl(K) || Me(K))
            return D = E.get(D) || null, E = hl(K._debugInfo), A = z(
              A,
              D,
              K,
              oe,
              null
            ), tt = E, A;
          if (typeof K.then == "function")
            return Ge = hl(K._debugInfo), A = G(
              E,
              A,
              D,
              Gn(K),
              oe
            ), tt = Ge, A;
          if (K.$$typeof === Pn)
            return G(
              E,
              A,
              D,
              Cr(A, K),
              oe
            );
          bn(A, K);
        }
        return typeof K == "function" && Io(A, K), typeof K == "symbol" && xr(A, K), null;
      }
      function ie(E, A, D, K) {
        if (typeof D != "object" || D === null) return K;
        switch (D.$$typeof) {
          case Rn:
          case sc:
            be(E, A, D);
            var oe = D.key;
            if (typeof oe != "string") break;
            if (K === null) {
              K = /* @__PURE__ */ new Set(), K.add(oe);
              break;
            }
            if (!K.has(oe)) {
              K.add(oe);
              break;
            }
            re(A, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                oe
              );
            });
            break;
          case ua:
            D = Ka(D), ie(E, A, D, K);
        }
        return K;
      }
      function se(E, A, D, K) {
        for (var oe = null, Ge = null, _e = null, Te = A, Fe = A = 0, ll = null; Te !== null && Fe < D.length; Fe++) {
          Te.index > Fe ? (ll = Te, Te = null) : ll = Te.sibling;
          var Ul = T(
            E,
            Te,
            D[Fe],
            K
          );
          if (Ul === null) {
            Te === null && (Te = ll);
            break;
          }
          oe = ie(
            E,
            Ul,
            D[Fe],
            oe
          ), e && Te && Ul.alternate === null && t(E, Te), A = f(Ul, A, Fe), _e === null ? Ge = Ul : _e.sibling = Ul, _e = Ul, Te = ll;
        }
        if (Fe === D.length)
          return a(E, Te), st && qn(E, Fe), Ge;
        if (Te === null) {
          for (; Fe < D.length; Fe++)
            Te = U(E, D[Fe], K), Te !== null && (oe = ie(
              E,
              Te,
              D[Fe],
              oe
            ), A = f(
              Te,
              A,
              Fe
            ), _e === null ? Ge = Te : _e.sibling = Te, _e = Te);
          return st && qn(E, Fe), Ge;
        }
        for (Te = i(Te); Fe < D.length; Fe++)
          ll = G(
            Te,
            E,
            Fe,
            D[Fe],
            K
          ), ll !== null && (oe = ie(
            E,
            ll,
            D[Fe],
            oe
          ), e && ll.alternate !== null && Te.delete(
            ll.key === null ? Fe : ll.key
          ), A = f(
            ll,
            A,
            Fe
          ), _e === null ? Ge = ll : _e.sibling = ll, _e = ll);
        return e && Te.forEach(function(Ho) {
          return t(E, Ho);
        }), st && qn(E, Fe), Ge;
      }
      function kt(E, A, D, K) {
        if (D == null)
          throw Error("An iterable object provided no iterator.");
        for (var oe = null, Ge = null, _e = A, Te = A = 0, Fe = null, ll = null, Ul = D.next(); _e !== null && !Ul.done; Te++, Ul = D.next()) {
          _e.index > Te ? (Fe = _e, _e = null) : Fe = _e.sibling;
          var Ho = T(E, _e, Ul.value, K);
          if (Ho === null) {
            _e === null && (_e = Fe);
            break;
          }
          ll = ie(
            E,
            Ho,
            Ul.value,
            ll
          ), e && _e && Ho.alternate === null && t(E, _e), A = f(Ho, A, Te), Ge === null ? oe = Ho : Ge.sibling = Ho, Ge = Ho, _e = Fe;
        }
        if (Ul.done)
          return a(E, _e), st && qn(E, Te), oe;
        if (_e === null) {
          for (; !Ul.done; Te++, Ul = D.next())
            _e = U(E, Ul.value, K), _e !== null && (ll = ie(
              E,
              _e,
              Ul.value,
              ll
            ), A = f(
              _e,
              A,
              Te
            ), Ge === null ? oe = _e : Ge.sibling = _e, Ge = _e);
          return st && qn(E, Te), oe;
        }
        for (_e = i(_e); !Ul.done; Te++, Ul = D.next())
          Fe = G(
            _e,
            E,
            Te,
            Ul.value,
            K
          ), Fe !== null && (ll = ie(
            E,
            Fe,
            Ul.value,
            ll
          ), e && Fe.alternate !== null && _e.delete(
            Fe.key === null ? Te : Fe.key
          ), A = f(
            Fe,
            A,
            Te
          ), Ge === null ? oe = Fe : Ge.sibling = Fe, Ge = Fe);
        return e && _e.forEach(function(BT) {
          return t(E, BT);
        }), st && qn(E, Te), oe;
      }
      function ht(E, A, D, K) {
        if (typeof D == "object" && D !== null && D.type === Nf && D.key === null && (ma(D, null, E), D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Rn:
              var oe = hl(D._debugInfo);
              e: {
                for (var Ge = D.key; A !== null; ) {
                  if (A.key === Ge) {
                    if (Ge = D.type, Ge === Nf) {
                      if (A.tag === 7) {
                        a(
                          E,
                          A.sibling
                        ), K = o(
                          A,
                          D.props.children
                        ), K.return = E, K._debugOwner = D._owner, K._debugInfo = tt, ma(D, K, E), E = K;
                        break e;
                      }
                    } else if (A.elementType === Ge || Zm(
                      A,
                      D
                    ) || typeof Ge == "object" && Ge !== null && Ge.$$typeof === ua && Ka(Ge) === A.type) {
                      a(
                        E,
                        A.sibling
                      ), K = o(A, D.props), za(K, D), K.return = E, K._debugOwner = D._owner, K._debugInfo = tt, E = K;
                      break e;
                    }
                    a(E, A);
                    break;
                  } else t(E, A);
                  A = A.sibling;
                }
                D.type === Nf ? (K = Bc(
                  D.props.children,
                  E.mode,
                  K,
                  D.key
                ), K.return = E, K._debugOwner = E, K._debugTask = E._debugTask, K._debugInfo = tt, ma(D, K, E), E = K) : (K = wi(
                  D,
                  E.mode,
                  K
                ), za(K, D), K.return = E, K._debugInfo = tt, E = K);
              }
              return E = d(E), tt = oe, E;
            case sc:
              e: {
                for (oe = D, D = oe.key; A !== null; ) {
                  if (A.key === D)
                    if (A.tag === 4 && A.stateNode.containerInfo === oe.containerInfo && A.stateNode.implementation === oe.implementation) {
                      a(
                        E,
                        A.sibling
                      ), K = o(
                        A,
                        oe.children || []
                      ), K.return = E, E = K;
                      break e;
                    } else {
                      a(E, A);
                      break;
                    }
                  else t(E, A);
                  A = A.sibling;
                }
                K = Od(
                  oe,
                  E.mode,
                  K
                ), K.return = E, E = K;
              }
              return d(E);
            case ua:
              return oe = hl(D._debugInfo), D = Ka(D), E = ht(
                E,
                A,
                D,
                K
              ), tt = oe, E;
          }
          if (Tl(D))
            return oe = hl(D._debugInfo), E = se(
              E,
              A,
              D,
              K
            ), tt = oe, E;
          if (Me(D)) {
            if (oe = hl(D._debugInfo), Ge = Me(D), typeof Ge != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var _e = Ge.call(D);
            return _e === D ? (E.tag !== 0 || Object.prototype.toString.call(E.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(_e) !== "[object Generator]") && (gb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), gb = !0) : D.entries !== Ge || G1 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), G1 = !0), E = kt(
              E,
              A,
              _e,
              K
            ), tt = oe, E;
          }
          if (typeof D.then == "function")
            return oe = hl(D._debugInfo), E = ht(
              E,
              A,
              Gn(D),
              K
            ), tt = oe, E;
          if (D.$$typeof === Pn)
            return ht(
              E,
              A,
              Cr(E, D),
              K
            );
          bn(E, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (oe = "" + D, A !== null && A.tag === 6 ? (a(
          E,
          A.sibling
        ), K = o(A, oe), K.return = E, E = K) : (a(E, A), K = Ko(
          oe,
          E.mode,
          K
        ), K.return = E, K._debugOwner = E, K._debugTask = E._debugTask, K._debugInfo = tt, E = K), d(E)) : (typeof D == "function" && Io(E, D), typeof D == "symbol" && xr(E, D), a(E, A));
      }
      return function(E, A, D, K) {
        var oe = tt;
        tt = null;
        try {
          Ip = 0;
          var Ge = ht(
            E,
            A,
            D,
            K
          );
          return om = null, Ge;
        } catch (ll) {
          if (ll === cm || ll === dv) throw ll;
          var _e = R(29, ll, null, E.mode);
          _e.lanes = K, _e.return = E;
          var Te = _e._debugInfo = tt;
          if (_e._debugOwner = E._debugOwner, _e._debugTask = E._debugTask, Te != null) {
            for (var Fe = Te.length - 1; 0 <= Fe; Fe--)
              if (typeof Te[Fe].stack == "string") {
                _e._debugOwner = Te[Fe], _e._debugTask = Te[Fe].debugTask;
                break;
              }
          }
          return _e;
        } finally {
          tt = oe;
        }
      };
    }
    function wt(e, t) {
      var a = Tl(e);
      return e = !a && typeof Me(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
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
    function vu(e, t) {
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
    function Su(e, t, a) {
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
      return (pt & Pl) !== fa ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Dr(e), Vm(e, null, a), t) : (Jo(e, i, t, a), Dr(e));
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
    function bu(e, t, a, i) {
      Q1 = !1;
      var o = e.updateQueue;
      er = !1, X1 = o.shared;
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
          if (G ? (lt & T) === T : (i & T) === T) {
            T !== 0 && T === ws && (Q1 = !0), z !== null && (z = z.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              T = e;
              var ie = h, se = t, kt = a;
              switch (ie.tag) {
                case Ab:
                  if (ie = ie.payload, typeof ie == "function") {
                    nm = !0;
                    var ht = ie.call(
                      kt,
                      U,
                      se
                    );
                    if (T.mode & Ba) {
                      me(!0);
                      try {
                        ie.call(kt, U, se);
                      } finally {
                        me(!1);
                      }
                    }
                    nm = !1, U = ht;
                    break e;
                  }
                  U = ie;
                  break e;
                case L1:
                  T.flags = T.flags & -65537 | 128;
                case Tb:
                  if (ht = ie.payload, typeof ht == "function") {
                    if (nm = !0, ie = ht.call(
                      kt,
                      U,
                      se
                    ), T.mode & Ba) {
                      me(!0);
                      try {
                        ht.call(kt, U, se);
                      } finally {
                        me(!1);
                      }
                    }
                    nm = !1;
                  } else ie = ht;
                  if (ie == null) break e;
                  U = Pe({}, U, ie);
                  break e;
                case Ob:
                  er = !0;
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
        z === null && (y = U), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = z, f === null && (o.shared.lanes = 0), ar |= d, e.lanes = d, e.memoizedState = U;
      }
      X1 = null;
    }
    function Vi(e, t) {
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
          Vi(a[e], t);
    }
    function ef(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Vi(a[e], t);
    }
    function Nd(e, t) {
      var a = Sc;
      Le(mv, a, e), Le(fm, t, e), Sc = a | t.baseLanes;
    }
    function ii(e) {
      Le(mv, Sc, e), Le(
        fm,
        fm.current,
        e
      );
    }
    function Xn(e) {
      Sc = mv.current, Se(fm, e), Se(mv, e);
    }
    function ya(e) {
      var t = e.alternate;
      Le(
        Cl,
        Cl.current & rm,
        e
      ), Le(au, e, e), $u === null && (t === null || fm.current !== null || t.memoizedState !== null) && ($u = e);
    }
    function Qn(e) {
      Le(Cl, Cl.current, e), Le(au, e, e), $u === null && ($u = e);
    }
    function xd(e) {
      e.tag === 22 ? (Le(Cl, Cl.current, e), Le(au, e, e), $u === null && ($u = e)) : Eu(e);
    }
    function Eu(e) {
      Le(Cl, Cl.current, e), Le(
        au,
        au.current,
        e
      );
    }
    function jl(e) {
      Se(au, e), $u === e && ($u = null), Se(Cl, e);
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
    function Ye() {
      var e = L;
      Wu === null ? Wu = [e] : Wu.push(e);
    }
    function W() {
      var e = L;
      if (Wu !== null && (Do++, Wu[Do] !== e)) {
        var t = he(we);
        if (!_b.has(t) && (_b.add(t), Wu !== null)) {
          for (var a = "", i = 0; i <= Do; i++) {
            var o = Wu[i], f = i === Do ? e : o;
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
    function ci(e) {
      e == null || Tl(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        L,
        typeof e
      );
    }
    function jr() {
      var e = he(we);
      zb.has(e) || (zb.add(e), console.error(
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
      Ro = f, we = t, Wu = e !== null ? e._debugHookTypes : null, Do = -1, t0 = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = he(we), V1.has(f) || (V1.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, X.H = e !== null && e.memoizedState !== null ? J1 : Wu !== null ? Mb : Z1, Vs = f = (t.mode & Ba) !== je;
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
      t._debugHookTypes = Wu, t.dependencies === null ? _o !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: _o
      }) : t.dependencies._debugThenableState = _o, X.H = l0;
      var a = Xt !== null && Xt.next !== null;
      if (Ro = 0, Wu = L = Ql = Xt = we = null, Do = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), pv = !1, e0 = 0, _o = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Vl || (e = e.dependencies, e !== null && ko(e) && (Vl = !0)), Fp ? (Fp = !1, e = !0) : e = !1, e && (t = he(t) || "Unknown", Db.has(t) || V1.has(t) || (Db.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function qr(e, t, a, i) {
      we = e;
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
        Do = -1, X.H = Cb, f = q1(t, a, i);
      } while (dm);
      return f;
    }
    function Yr() {
      var e = X.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Lr(t) : t, e = e.useState()[0], (Xt !== null ? Xt.memoizedState : null) !== e && (we.flags |= 1024), t;
    }
    function Qc() {
      var e = gv !== 0;
      return gv = 0, e;
    }
    function wr(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Ti) !== je ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Zi(e) {
      if (pv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        pv = !1;
      }
      Ro = 0, Wu = Ql = Xt = we = null, Do = -1, L = null, dm = !1, e0 = gv = 0, _o = null;
    }
    function bl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Ql === null ? we.memoizedState = Ql = e : Ql = Ql.next = e, Ql;
    }
    function _t() {
      if (Xt === null) {
        var e = we.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Xt.next;
      var t = Ql === null ? we.memoizedState : Ql.next;
      if (t !== null)
        Ql = t, Xt = e;
      else {
        if (e === null)
          throw we.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Xt = e, e = {
          memoizedState: Xt.memoizedState,
          baseState: Xt.baseState,
          baseQueue: Xt.baseQueue,
          queue: Xt.queue,
          next: null
        }, Ql === null ? we.memoizedState = Ql = e : Ql = Ql.next = e;
      }
      return Ql;
    }
    function Gr() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Lr(e) {
      var t = e0;
      return e0 += 1, _o === null && (_o = Ud()), e = Ja(_o, e, t), t = we, (Ql === null ? t.memoizedState : Ql.next) === null && (t = t.alternate, X.H = t !== null && t.memoizedState !== null ? J1 : Z1), e;
    }
    function oi(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Lr(e);
        if (e.$$typeof === Pn) return Tt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function $a(e) {
      var t = null, a = we.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = we.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = Gr(), we.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || t0)
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
        we,
        e
      ), [i.memoizedState, e];
    }
    function Vc(e) {
      var t = _t();
      return Ji(t, Xt, e);
    }
    function Ji(e, t, a) {
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
          if (U !== p.lane ? (lt & U) === U : (Ro & U) === U) {
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
              }), U === ws && (z = !0);
            else if ((Ro & T) === T) {
              p = p.next, T === ws && (z = !0);
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
              }, y === null ? (h = y = U, d = f) : y = y.next = U, we.lanes |= T, ar |= T;
            U = p.action, Vs && a(f, U), f = p.hasEagerState ? p.eagerState : a(f, U);
          } else
            T = {
              lane: U,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = T, d = f) : y = y.next = T, we.lanes |= U, ar |= U;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !cn(f, e.memoizedState) && (Vl = !0, z && (a = im, a !== null)))
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
      var i = we, o = bl();
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
        Ki.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Tu(
        ku | rn,
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
      var i = we, o = _t(), f = st;
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
      var h = Ki.bind(null, i, o, e);
      if (_l(2048, rn, h, [e]), o.getSnapshot !== t || d || Ql !== null && Ql.memoizedState.tag & ku) {
        if (i.flags |= 2048, Tu(
          ku | rn,
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
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = we.updateQueue, t === null ? (t = Gr(), we.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function cy(e, t, a, i) {
      t.value = a, t.getSnapshot = i, $i(t) && oy(e);
    }
    function Ki(e, t, a) {
      return a(function() {
        $i(t) && (pu(2, "updateSyncExternalStore()", e), oy(e));
      });
    }
    function $i(e) {
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
      t !== null && qe(t, e, 2);
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
    function ki(e) {
      e = Bd(e);
      var t = e.queue, a = Ld.bind(null, we, t);
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
        we,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function Xr(e, t) {
      var a = _t();
      return af(a, Xt, e, t);
    }
    function af(e, t, a, i) {
      return e.baseState = a, Ji(
        e,
        Xt,
        typeof i == "function" ? i : ka
      );
    }
    function Qr(e, t) {
      var a = _t();
      return Xt !== null ? af(a, Xt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function Z0(e, t, a, i, o) {
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
        X.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, Wi(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function Wi(e, t) {
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
          fi(e, t, i);
        },
        function(i) {
          return Vr(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : fi(e, t, a);
    }
    function fi(e, t, a) {
      t.status = "fulfilled", t.value = a, jd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Wi(e, a)));
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
    function ri(e, t) {
      return t;
    }
    function Wa(e, t) {
      if (st) {
        var a = Qt.formState;
        if (a !== null) {
          e: {
            var i = we;
            if (st) {
              if (tl) {
                t: {
                  for (var o = tl, f = Ju; o.nodeType !== 8; ) {
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
        lastRenderedReducer: ri,
        lastRenderedState: t
      }, a.queue = i, a = Ld.bind(
        null,
        we,
        i
      ), i.dispatch = a, i = Bd(!1), f = $r.bind(
        null,
        we,
        !1,
        i.queue
      ), i = bl(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = Z0.bind(
        null,
        we,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function Fi(e) {
      var t = _t();
      return qd(t, Xt, e);
    }
    function qd(e, t, a) {
      if (t = Ji(
        e,
        t,
        ri
      )[0], e = Vc(ka)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Lr(t);
        } catch (d) {
          throw d === cm ? dv : d;
        }
      else i = t;
      t = _t();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (we.flags |= 2048, Tu(
        ku | rn,
        { destroy: void 0 },
        ry.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function ry(e, t) {
      e.action = t;
    }
    function Ii(e) {
      var t = _t(), a = Xt;
      if (a !== null)
        return qd(t, a, e);
      _t(), t = t.memoizedState, a = _t();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Tu(e, t, a, i) {
      return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = we.updateQueue, t === null && (t = Gr(), we.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Yd(e) {
      var t = bl();
      return e = { current: e }, t.memoizedState = e;
    }
    function Pi(e, t, a, i) {
      var o = bl();
      we.flags |= e, o.memoizedState = Tu(
        ku | t,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function _l(e, t, a, i) {
      var o = _t();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Xt !== null && i !== null && ny(i, Xt.memoizedState.deps) ? o.memoizedState = Tu(t, f, a, i) : (we.flags |= e, o.memoizedState = Tu(
        ku | t,
        f,
        a,
        i
      ));
    }
    function $c(e, t) {
      (we.mode & Ti) !== je ? Pi(276826112, rn, e, t) : Pi(8390656, rn, e, t);
    }
    function J0(e) {
      we.flags |= 4;
      var t = we.updateQueue;
      if (t === null)
        t = Gr(), we.updateQueue = t, t.events = [e];
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
      return J0({ ref: t, nextImpl: e }), function() {
        if ((pt & Pl) !== fa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function pa(e, t) {
      var a = 4194308;
      return (we.mode & Ti) !== je && (a |= 134217728), Pi(a, nu, e, t);
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
    function Au(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (we.mode & Ti) !== je && (i |= 134217728), Pi(
        i,
        nu,
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
        nu,
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
    function Vn(e, t) {
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
      return Dt(a, e, t);
    }
    function Ou(e, t) {
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
      return Xt === null ? Dt(a, e, t) : yl(
        a,
        Xt.memoizedState,
        e,
        t
      );
    }
    function Dt(e, t, a) {
      return a === void 0 || (Ro & 1073741824) !== 0 && (lt & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = yf(), we.lanes |= e, ar |= e, a);
    }
    function yl(e, t, a, i) {
      return cn(a, t) ? a : fm.current !== null ? (e = Dt(e, a, i), cn(e, t) || (Vl = !0), e) : (Ro & 42) === 0 || (Ro & 1073741824) !== 0 && (lt & 261930) === 0 ? (Vl = !0, e.memoizedState = a) : (e = yf(), we.lanes |= e, ar |= e, t);
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
          var z = Cd(
            y,
            i
          );
          Fc(
            e,
            t,
            z,
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
    function si(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Jr(e).queue;
      Q0(e), Wc(
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
    function ec() {
      var e = Bd(!1);
      return e = Wc.bind(
        null,
        we,
        e.queue,
        !0,
        !1
      ), bl().memoizedState = e, [!1, e];
    }
    function K0() {
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
    function di() {
      return Tt(g0);
    }
    function Kr() {
      var e = bl(), t = Qt.identifierPrefix;
      if (st) {
        var a = bo, i = So;
        a = (i & ~(1 << 32 - Wl(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = gv++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = dT++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Gd() {
      return bl().memoizedState = $0.bind(
        null,
        we
      );
    }
    function $0(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = na(a), o = Rl(i), f = Su(a, o, i);
            f !== null && (pu(i, "refresh()", e), qe(f, a, i), En(f, a, i)), e = zd(), t != null && f !== null && console.error(
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
      ql(e) ? rl(t, o) : (o = Hc(e, t, o, i), o !== null && (pu(i, "dispatch()", e), qe(o, e, i), kr(o, t, i)));
    }
    function Ld(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = na(e), Fc(e, t, a, i) && pu(i, "setState()", e);
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
          X.H = Oi;
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
          return qe(a, e, i), kr(a, t, i), !0;
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
        ), t !== null && (pu(2, "setOptimistic()", e), qe(t, e, 2));
    }
    function ql(e) {
      var t = e.alternate;
      return e === we || t !== null && t === we;
    }
    function rl(e, t) {
      dm = pv = !0;
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
      f === void 0 && (t = Xe(t) || "Component", qb.has(t) || (qb.add(t), console.error(
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
          Xe(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Zo(a, i) || !Zo(o, f) : !0;
    }
    function Ru(e, t, a, i) {
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
    function _u(e, t) {
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
          Xv + i + Xv,
          RE
        ) : e.splice(
          0,
          0,
          AE,
          OE,
          Xv + i + Xv,
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
      if (a.flags |= 32768, wu && bf(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && wn(
          t,
          a,
          o,
          !0
        ), st && (pc = !0), a = au.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return $u === null ? gf() : a.alternate === null && dl === Mo && (dl = bv), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === hv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), hh(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === hv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
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
        return pc = !0, t = au.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== C1 && Mr(
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
    function k0(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return Qi(t), i = uy(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = Qc(), e !== null && !Vl ? (wr(e, t, o), Zn(e, t, o)) : (st && h && Rd(t), t.flags |= 1, Yl(e, t, i, o), t.child);
    }
    function my(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Jm(f) && f.defaultProps === void 0 && a.compare === null ? (a = Yi(f), t.tag = 15, t.type = a, rf(t, f), yy(
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
          return Zn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = yu(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function yy(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Zo(f, i) && e.ref === t.ref && t.type === e.type)
          if (Vl = !1, t.pendingProps = i = f, Id(e, o))
            (e.flags & 131072) !== 0 && (Vl = !0);
          else
            return t.lanes = e.lanes, Zn(e, t, o);
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
          ), f !== null ? Nd(t, f) : ii(t), xd(t);
        else
          return i = t.lanes = 536870912, gy(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? (Fo(t, f.cachePool), Nd(t, f), Eu(t), t.memoizedState = null) : (e !== null && Fo(t, null), ii(t), Eu(t));
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
      var f = ui();
      return f = f === null ? null : {
        parent: Ll._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && Fo(t, null), ii(t), xd(t), e !== null && wn(e, t, i, !0), t.childLanes = o, null;
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
    function W0(e, t, a) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (st) {
          if (i.mode === "hidden")
            return e = Fr(t, i), t.lanes = 536870912, Pc(null, e);
          if (Qn(t), (e = tl) ? (a = Mt(
            e,
            Ju
          ), a = a !== null && a.data === Fs ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: G0(),
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
        if (Qn(t), o)
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
        else if (X0(), (a & 536870912) !== 0 && pf(t), Vl || wn(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, Vl || o) {
          if (i = Qt, i !== null && (d = Ac(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, la(e, d), qe(i, e, d), k1;
          gf(), t = vy(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, tl = ln(
            d.nextSibling
          ), _a = t, st = !0, kf = null, pc = !1, lu = null, Ju = !1, e !== null && L0(t, e), t = Fr(t, i), t.flags |= 4096;
        return t;
      }
      return f = e.child, i = { mode: i.mode, children: i.children }, (a & 536870912) !== 0 && (a & e.lanes) !== 0 && pf(t), e = yu(f, i), e.ref = t.ref, t.child = e, e.return = t, e;
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
        var f = Xe(a) || "Unknown";
        Xb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Xb[f] = !0);
      }
      return t.mode & Ba && Ai.recordLegacyContextWarning(
        t,
        null
      ), e === null && (rf(t, t.type), a.contextTypes && (f = Xe(a) || "Unknown", Vb[f] || (Vb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Qi(t), a = uy(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Qc(), e !== null && !Vl ? (wr(e, t, o), Zn(e, t, o)) : (st && i && Rd(t), t.flags |= 1, Yl(e, t, a, o), t.child);
    }
    function by(e, t, a, i, o, f) {
      return Qi(t), Do = -1, t0 = e !== null && e.type !== t.type, t.updateQueue = null, a = qr(
        t,
        i,
        a,
        o
      ), ml(e, t), i = Qc(), e !== null && !Vl ? (wr(e, t, f), Zn(e, t, f)) : (st && i && Rd(t), t.flags |= 1, Yl(e, t, a, f), t.child);
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
      if (Qi(t), t.stateNode === null) {
        if (d = $f, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Pn) && !Gb.has(a) && (Gb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Bh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Xe(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = Tt(f)), f = new a(i, d), t.mode & Ba) {
          me(!0);
          try {
            f = new a(i, d);
          } finally {
            me(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = K1, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Ub, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Xe(a) || "Component", Nb.has(d) || (Nb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Xe(a) || "Component";
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
        f = t.stateNode, d = Xe(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
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
          Xe(a) || "A pure component"
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
          Xe(a)
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
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, ft(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? Tt(d) : $f, f.state === i && (d = Xe(a) || "Component", jb.has(d) || (jb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & Ba && Ai.recordLegacyContextWarning(
          t,
          f
        ), Ai.recordUnsafeLifecycleWarnings(
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
        )), bu(t, i, f, o), Po(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ti) !== je && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var z = t.memoizedProps;
        h = _u(a, z), f.props = h;
        var U = f.context;
        y = a.contextType, d = $f, typeof y == "object" && y !== null && (d = Tt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", z = t.pendingProps !== z, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (z || U !== d) && Ru(
          t,
          f,
          i,
          d
        ), er = !1;
        var T = t.memoizedState;
        f.state = T, bu(t, i, f, o), Po(), U = t.memoizedState, z || T !== U || er ? (typeof p == "function" && (ff(
          t,
          a,
          p,
          i
        ), U = t.memoizedState), (h = er || Xd(
          t,
          a,
          h,
          i,
          T,
          U,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ti) !== je && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ti) !== je && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = U), f.props = i, f.state = U, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ti) !== je && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, vu(e, t), d = t.memoizedProps, y = _u(a, d), f.props = y, p = t.pendingProps, T = f.context, U = a.contextType, h = $f, typeof U == "object" && U !== null && (h = Tt(U)), z = a.getDerivedStateFromProps, (U = typeof z == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || T !== h) && Ru(
          t,
          f,
          i,
          h
        ), er = !1, T = t.memoizedState, f.state = T, bu(t, i, f, o), Po();
        var G = t.memoizedState;
        d !== p || T !== G || er || e !== null && e.dependencies !== null && ko(e.dependencies) ? (typeof z == "function" && (ff(
          t,
          a,
          z,
          i
        ), G = t.memoizedState), (y = er || Xd(
          t,
          a,
          y,
          i,
          T,
          G,
          h
        ) || e !== null && e.dependencies !== null && ko(e.dependencies)) ? (U || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, G, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          G,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = G), f.props = i, f.state = G, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Ir(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, Mi(t), d && typeof a.getDerivedStateFromError != "function")
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
        e = Zn(
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
      return Li(), t.flags |= 256, Yl(e, t, a, i), t.child;
    }
    function rf(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Xe(t) || "Unknown", Zb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), Zb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Xe(t) || "Unknown", Qb[t] || (console.error(
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
      fe(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Cl.current & Pp) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (st) {
          if (f ? ya(t) : Eu(t), (e = tl) ? (a = Mt(
            e,
            Ju
          ), a = a !== null && a.data !== Fs ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: G0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = $m(a), i.return = t, t.child = i, _a = t, tl = null)) : a = null, a === null)
            throw aa(t, e), pn(t);
          return ep(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          Eu(t);
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
        var z = p.dehydrated;
        if (z !== null) {
          if (d)
            t.flags & 256 ? (ya(t), t.flags &= -257, t = Wd(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (Eu(t), t.child = e.child, t.flags |= 128, t = null) : (Eu(t), h = o.fallback, y = t.mode, o = Pr(
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
          else if (ya(t), X0(), (a & 536870912) !== 0 && pf(t), ep(
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
            }, typeof i == "string" && M1.set(
              h,
              o
            ), Mr(o), t = Wd(
              e,
              t,
              a
            );
          } else if (Vl || wn(
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
              ), qe(
                i,
                e,
                o
              ), k1;
            gs(
              z
            ) || gf(), t = Wd(
              e,
              t,
              a
            );
          } else
            gs(
              z
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, tl = ln(
              z.nextSibling
            ), _a = t, st = !0, kf = null, pc = !1, lu = null, Ju = !1, e !== null && L0(t, e), t = Ty(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (Eu(t), h = o.fallback, y = t.mode, T = e.child, z = T.sibling, o = yu(
        T,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = T.subtreeFlags & 65011712, z !== null ? h = yu(
        z,
        h
      ) : (h = Bc(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, Pc(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = sf(a) : (y = h.cachePool, y !== null ? (T = Ll._currentValue, y = y.parent !== T ? { parent: T, pool: T } : y) : y = ey(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = $d(
        e,
        i,
        a
      ), t.memoizedState = W1, Pc(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & e.lanes) !== 0 && pf(t), ya(t), a = e.child, e = a.sibling, a = yu(a, {
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
      return e = R(22, e, null, t), e.lanes = 0, e;
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
      i !== null && (i.lanes |= t), Dd(
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
      if ((i = (h & Pp) !== 0) ? (h = h & rm | Pp, t.flags |= 128) : h &= rm, Le(Cl, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !Jb[h])
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
      h = f ?? "null", Sv[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (Sv[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (Sv[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (Sv[h] = !0, console.error(
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
        } else if (h = Me(d), typeof h == "function") {
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
      if (Yl(e, t, d, a), st ? (Gi(), d = Yp) : d = 0, !i && e !== null && (e.flags & 128) !== 0)
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
    function Zn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), on = -1, ar |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (wn(
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
        for (e = t.child, a = yu(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = yu(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Id(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ko(e)));
    }
    function F0(e, t, a) {
      switch (t.tag) {
        case 3:
          Yt(
            t,
            t.stateNode.containerInfo
          ), gn(
            t,
            Ll,
            e.memoizedState.cache
          ), Li();
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
            return t.flags |= 128, Qn(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (ya(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? kd(
              e,
              t,
              a
            ) : (ya(t), e = Zn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ya(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (wn(
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
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Le(
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
      return Zn(e, t, a);
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
            return Vl = !1, F0(
              e,
              t,
              a
            );
          Vl = (e.flags & 131072) !== 0;
        }
      else
        Vl = !1, (i = st) && (Gi(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Gi(), km(t, Yp, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Ka(t.elementType), t.type = e, typeof e == "function")
            Jm(e) ? (i = _u(
              e,
              i
            ), t.tag = 1, t.type = e = Yi(e), t = eo(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, rf(t, e), t.type = e = Yi(e), t = Sy(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === xf) {
                t.tag = 11, t.type = e = Ad(e), t = k0(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Ds) {
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
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === ua && (t = " Did you wrap a component in React.lazy() more than once?"), a = Xe(e) || e, Error(
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
          return i = t.type, o = _u(
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
            o = f.element, vu(e, t), bu(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, gn(t, Ll, i), i !== f.cache && li(
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
                for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, tl = ln(e.firstChild), _a = t, st = !0, kf = null, pc = !1, lu = null, Ju = !0, a = Eb(
                  t,
                  null,
                  i,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (Li(), i === o) {
                t = Zn(
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
          return ne(t), e === null && st && (i = Jt(an.current), o = J(), i = t.stateNode = vi(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), pc || (o = Ha(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (jc(t, 0).serverProps = o)), _a = t, Ju = !0, o = tl, fc(t.type) ? (SS = o, tl = ln(
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
            Ju
          ), d !== null ? (t.stateNode = d, pc || (f = Ha(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (jc(t, 0).serverProps = f)), _a = t, tl = ln(
            d.firstChild
          ), Ju = !1, f = !0) : f = !1, d = !f), d && (i && aa(t, o), pn(t))), ne(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Rf(o, f) ? i = null : d !== null && Rf(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = uy(
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
          ) : !0, e = tl, (i = !e) || (i = zg(
            e,
            t.pendingProps,
            Ju
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
          return k0(
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
          ), Qi(t), o = Tt(o), i = q1(
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
          return W0(e, t, a);
        case 22:
          return py(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          return Qi(t), i = Tt(Ll), e === null ? (o = ui(), o === null && (o = Qt, f = zd(), o.pooledCache = f, Yc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, ft(t), gn(t, Ll, o)) : ((e.lanes & a) !== 0 && (vu(e, t), bu(t, null, null, a), Po()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), gn(t, Ll, i)) : (i = f.cache, gn(t, Ll, i), i !== o.cache && li(
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
    function Du(e) {
      e.flags |= 4;
    }
    function Pd(e, t, a, i, o) {
      if ((t = (e.mode & aT) !== je) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Xy()) e.flags |= 8192;
          else
            throw Xs = hv, w1;
      } else e.flags &= -16777217;
    }
    function I0(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & Fu) !== ed)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !ct(t))
        if (Xy()) e.flags |= 8192;
        else
          throw Xs = hv, w1;
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
        if ((e.mode & et) !== je) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & et) !== je) {
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
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Yn(Ll, t), C(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (qc(t) ? (Xi(), Du(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, zr())), Ut(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (Du(t), f !== null ? (Ut(t), I0(
            t,
            f
          )) : (Ut(t), Pd(
            t,
            o,
            null,
            i,
            a
          ))) : f ? f !== e.memoizedState ? (Du(t), Ut(t), I0(
            t,
            f
          )) : (Ut(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Du(t), Ut(t), Pd(
            t,
            o,
            e,
            i,
            a
          )), null;
        case 27:
          if (Ee(t), a = Jt(an.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Du(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Ut(t), null;
            }
            e = J(), qc(t) ? Wm(t) : (e = vi(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Du(t));
          }
          return Ut(t), null;
        case 5:
          if (Ee(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Du(t);
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
                case wv:
                  f = f.createElementNS(
                    Ze,
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
                        Ze,
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
              i && Du(t);
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
            e.memoizedProps !== i && Du(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Jt(an.current), a = J(), qc(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !pc, i = null, f = _a, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Ug(
                      e,
                      a,
                      i
                    ), o !== null && (jc(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Ug(
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
                e[Pt] = t, Ut(t), (t.mode & et) !== je && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                Xi(), Li(), (t.flags & 128) === 0 && (a = t.memoizedState = null), t.flags |= 4, Ut(t), (t.mode & et) !== je && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = zr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
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
                f[Pt] = t, Ut(t), (t.mode & et) !== je && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Xi(), Li(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, Ut(t), (t.mode & et) !== je && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = zr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (jl(t), t) : (jl(t), null);
          }
          return jl(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & et) !== je && Gc(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), df(t, t.updateQueue), Ut(t), (t.mode & et) !== je && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return C(t), e === null && cc(
            t.stateNode.containerInfo
          ), Ut(t), null;
        case 10:
          return Yn(t.type, t), Ut(t), null;
        case 19:
          if (Se(Cl, t), i = t.memoizedState, i === null) return Ut(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) hf(i, !1);
            else {
              if (dl !== Mo || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Xc(e), f !== null) {
                    for (t.flags |= 128, hf(i, !1), e = f.updateQueue, t.updateQueue = e, df(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Km(a, e), a = a.sibling;
                    return Le(
                      Cl,
                      Cl.current & rm | Pp,
                      t
                    ), st && qn(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && Gl() > _v && (t.flags |= 128, o = !0, hf(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = Xc(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, df(t, e), hf(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !st)
                  return Ut(t), null;
              } else
                2 * Gl() - i.renderingStartTime > _v && a !== 536870912 && (t.flags |= 128, o = !0, hf(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Gl(), e.sibling = null, a = Cl.current, a = o ? a & rm | Pp : a & rm, Le(Cl, a, t), st && qn(t, i.treeForkCount), e) : (Ut(t), null);
        case 22:
        case 23:
          return jl(t), Xn(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ut(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ut(t), a = t.updateQueue, a !== null && df(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Se(Gs, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yn(Ll, t), Ut(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function P0(e, t) {
      switch (_d(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & et) !== je && Gc(t), t) : null;
        case 3:
          return Yn(Ll, t), C(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return Ee(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (jl(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Li();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & et) !== je && Gc(t), t) : null;
        case 13:
          if (jl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Li();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & et) !== je && Gc(t), t) : null;
        case 19:
          return Se(Cl, t), null;
        case 4:
          return C(t), null;
        case 10:
          return Yn(t.type, t), null;
        case 22:
        case 23:
          return jl(t), Xn(t), e !== null && Se(Gs, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & et) !== je && Gc(t), t) : null;
        case 24:
          return Yn(Ll, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function _y(e, t) {
      switch (_d(t), t.tag) {
        case 3:
          Yn(Ll, t), C(t);
          break;
        case 26:
        case 27:
        case 5:
          Ee(t);
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
          Se(Cl, t);
          break;
        case 10:
          Yn(t.type, t);
          break;
        case 22:
        case 23:
          jl(t), Xn(t), e !== null && Se(Gs, t);
          break;
        case 24:
          Yn(Ll, t);
      }
    }
    function zu(e) {
      return (e.mode & et) !== je;
    }
    function eg(e, t) {
      zu(e) ? (ol(), hi(t, e), ha()) : hi(t, e);
    }
    function eh(e, t, a) {
      zu(e) ? (ol(), tc(
        a,
        e,
        t
      ), ha()) : tc(
        a,
        e,
        t
      );
    }
    function hi(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && (i = void 0, (e & fn) !== yv && (Sm = !0), i = re(
              t,
              fT,
              a
            ), (e & fn) !== yv && (Sm = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & nu) !== 0 ? "useLayoutEffect" : (a.tag & fn) !== 0 ? "useInsertionEffect" : "useEffect";
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
    function tc(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & fn) !== yv && (Sm = !0), o = t, re(
                o,
                rT,
                o,
                a,
                h
              ), (e & fn) !== yv && (Sm = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        ke(t, t.return, y);
      }
    }
    function ts(e, t) {
      zu(e) ? (ol(), hi(t, e), ha()) : hi(t, e);
    }
    function th(e, t, a) {
      zu(e) ? (ol(), tc(
        a,
        e,
        t
      ), ha()) : tc(
        a,
        e,
        t
      );
    }
    function Dy(e) {
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
    function tg(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || mm || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        he(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        he(e) || "instance"
      ));
      try {
        var o = _u(
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
      a.props = _u(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, zu(e) ? (ol(), re(
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
    function lg(e) {
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
          if (zu(e))
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
        re(e, lg, e);
      } catch (a) {
        ke(e, t, a);
      }
    }
    function Tn(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (zu(e))
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
            if (zu(e))
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
    function zy(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", fv && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(f, t, i, a);
    }
    function ag(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", fv && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function lc(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        re(
          e,
          pg,
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
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && fc(e.type) || e.tag === 4;
    }
    function nh(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || My(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && fc(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function mf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (vg(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (vg(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = mn));
      else if (i !== 4 && (i === 27 && fc(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (mf(e, t, a), e = e.sibling; e !== null; )
          mf(e, t, a), e = e.sibling;
    }
    function as(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && fc(e.type) && (a = e.stateNode), e = e.child, e !== null))
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
          ju,
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
      if (e = e.containerInfo, pS = Qv, e = Sd(e), wm(e)) {
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
      for (gS = {
        focusedElem: e,
        selectionRange: a
      }, Qv = !1, oa = t; oa !== null; )
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
                (o & 1024) !== 0 && a !== null && tg(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Df(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Df(e);
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
          Ia(e, a), h & 4 && eg(a, nu | ku);
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
              )), zu(a) ? (ol(), re(
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
              var y = _u(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || mm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                he(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                he(a) || "instance"
              )), zu(a) ? (ol(), re(
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
          h & 64 && Dy(a), h & 512 && to(a, a.return);
          break;
        case 3:
          if (t = gu(), Ia(e, a), h & 64 && (h = a.updateQueue, h !== null)) {
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
            } catch (z) {
              ke(a, a.return, z);
            }
          }
          e.effectDuration += Wo(t);
          break;
        case 27:
          t === null && h & 4 && Uy(a);
        case 26:
        case 5:
          if (Ia(e, a), t === null) {
            if (h & 4) lc(a);
            else if (h & 64) {
              e = a.type, t = a.memoizedProps, y = a.stateNode;
              try {
                re(
                  a,
                  gg,
                  y,
                  e,
                  t,
                  a
                );
              } catch (z) {
                ke(
                  a,
                  a.return,
                  z
                );
              }
            }
          }
          h & 512 && to(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = gu(), Ia(e, a), e = a.stateNode, e.effectDuration += da(h);
            try {
              re(
                a,
                zy,
                a,
                t,
                Wf,
                e.effectDuration
              );
            } catch (z) {
              ke(a, a.return, z);
            }
          } else Ia(e, a);
          break;
        case 31:
          Ia(e, a), h & 4 && xy(e, a);
          break;
        case 13:
          Ia(e, a), h & 4 && By(e, a), h & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = yi.bind(
            null,
            a
          ), Mg(e, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || zo, !h) {
            t = t !== null && t.memoizedState !== null || Zl, y = zo;
            var p = Zl;
            zo = h, (Zl = t) && !p ? (Jn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & et) !== je && 0 <= ze && 0 <= Ne && 0.05 < Ne - ze && bd(
              a,
              ze,
              Ne
            )) : Ia(e, a), zo = y, Zl = p;
          }
          break;
        case 30:
          break;
        default:
          Ia(e, a);
      }
      (a.mode & et) !== je && 0 <= ze && 0 <= Ne && ((vl || 0.05 < sl) && jn(
        a,
        ze,
        Ne,
        sl,
        il
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < Ne - ze && (Hy(
        a.return.alternate,
        a.return
      ) || yn(
        a,
        ze,
        Ne,
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
      if (zl && typeof zl.onCommitFiberUnmount == "function")
        try {
          zl.onCommitFiberUnmount(yo, a);
        } catch (p) {
          Yu || (Yu = !0, console.error(
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
          var h = Jl, y = Dn;
          fc(a.type) && (Jl = a.stateNode, Dn = !1), $t(
            e,
            t,
            a
          ), re(
            a,
            Si,
            a.stateNode
          ), Jl = h, Dn = y;
          break;
        case 5:
          Zl || Tn(a, t);
        case 6:
          if (h = Jl, y = Dn, Jl = null, $t(
            e,
            t,
            a
          ), Jl = h, Dn = y, Jl !== null)
            if (Dn)
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
            else
              try {
                re(
                  a,
                  Sg,
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
          Jl !== null && (Dn ? (e = Jl, io(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), ro(e)) : io(Jl, a.stateNode));
          break;
        case 4:
          h = Jl, y = Dn, Jl = a.stateNode.containerInfo, Dn = !0, $t(
            e,
            t,
            a
          ), Jl = h, Dn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          tc(
            fn,
            a,
            t
          ), Zl || eh(
            a,
            t,
            nu
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
      (a.mode & et) !== je && 0 <= ze && 0 <= Ne && (vl || 0.05 < sl) && jn(
        a,
        ze,
        Ne,
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
    function ng(e) {
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
    function ac(e, t) {
      var a = ng(e);
      t.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), wu)
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
                if (fc(y.type)) {
                  Jl = y.stateNode, Dn = !1;
                  break e;
                }
                break;
              case 5:
                Jl = y.stateNode, Dn = !1;
                break e;
              case 3:
              case 4:
                Jl = y.stateNode.containerInfo, Dn = !0;
                break e;
            }
            y = y.return;
          }
          if (Jl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Ny(o, f, d), Jl = null, Dn = !1, (d.mode & et) !== je && 0 <= ze && 0 <= Ne && 0.05 < Ne - ze && yn(
            d,
            ze,
            Ne,
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
          va(t, e), Sa(e), h & 4 && (tc(
            fn | ku,
            e,
            e.return
          ), hi(fn | ku, e), eh(
            e,
            e.return,
            nu | ku
          ));
          break;
        case 1:
          if (va(t, e), Sa(e), h & 512 && (Zl || d === null || Tn(d, d.return)), h & 64 && zo && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = Ri, va(t, e), Sa(e), h & 512 && (Zl || d === null || Tn(d, d.return)), h & 4) {
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
                        var z = Cf(
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
                        p = y.createElement(h), It(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (z = Cf(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (U = 0; U < z.length; U++)
                            if (p = z[U], vt(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              z.splice(U, 1);
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
                  Ng(
                    y,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = zh(
                  y,
                  h,
                  e.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? Ng(
                y,
                e.type,
                e.stateNode
              ) : zh(
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
          if (y = gu(), Gv = null, p = Ri, Ri = _h(t.containerInfo), va(t, e), Ri = p, Sa(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              re(
                e,
                tp,
                t.containerInfo
              );
            } catch (se) {
              ke(e, e.return, se);
            }
          F1 && (F1 = !1, ug(e)), t.effectDuration += Wo(
            y
          );
          break;
        case 4:
          h = Ri, Ri = _h(
            e.stateNode.containerInfo
          ), va(t, e), Sa(e), Ri = h;
          break;
        case 12:
          h = gu(), va(t, e), Sa(e), e.stateNode.effectDuration += da(h);
          break;
        case 31:
          va(t, e), Sa(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ac(e, h)));
          break;
        case 13:
          va(t, e), Sa(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (Rv = Gl()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ac(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var T = d !== null && d.memoizedState !== null, G = zo, ie = Zl;
          if (zo = G || y, Zl = ie || T, va(t, e), Zl = ie, zo = G, T && !y && !G && !ie && (e.mode & et) !== je && 0 <= ze && 0 <= Ne && 0.05 < Ne - ze && bd(
            e,
            ze,
            Ne
          ), Sa(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~qp : t._visibility | qp, !y || d === null || T || zo || Zl || (nc(e), (e.mode & et) !== je && 0 <= ze && 0 <= Ne && 0.05 < Ne - ze && yn(
              e,
              ze,
              Ne,
              "Disconnect"
            )), d = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (d === null) {
                  T = d = t;
                  try {
                    p = T.stateNode, y ? re(
                      T,
                      Tg,
                      p
                    ) : re(
                      T,
                      Rg,
                      T.stateNode,
                      T.memoizedProps
                    );
                  } catch (se) {
                    ke(T, T.return, se);
                  }
                }
              } else if (t.tag === 6) {
                if (d === null) {
                  T = t;
                  try {
                    z = T.stateNode, y ? re(
                      T,
                      Ag,
                      z
                    ) : re(
                      T,
                      _g,
                      z,
                      T.memoizedProps
                    );
                  } catch (se) {
                    ke(T, T.return, se);
                  }
                }
              } else if (t.tag === 18) {
                if (d === null) {
                  T = t;
                  try {
                    U = T.stateNode, y ? re(
                      T,
                      Eg,
                      U
                    ) : re(
                      T,
                      Og,
                      T.stateNode
                    );
                  } catch (se) {
                    ke(T, T.return, se);
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
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, ac(e, d))));
          break;
        case 19:
          va(t, e), Sa(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ac(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          va(t, e), Sa(e);
      }
      (e.mode & et) !== je && 0 <= ze && 0 <= Ne && ((vl || 0.05 < sl) && jn(
        e,
        ze,
        Ne,
        sl,
        il
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < Ne - ze && (Hy(
        e.return.alternate,
        e.return
      ) || yn(
        e,
        ze,
        Ne,
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
    function ug(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          ug(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
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
            nu
          ), nc(e);
          break;
        case 1:
          Tn(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && lh(
            e,
            e.return,
            f
          ), nc(e);
          break;
        case 27:
          re(
            e,
            Si,
            e.stateNode
          );
        case 26:
        case 5:
          Tn(e, e.return), nc(e);
          break;
        case 22:
          e.memoizedState === null && nc(e);
          break;
        case 30:
          nc(e);
          break;
        default:
          nc(e);
      }
      (e.mode & et) !== je && 0 <= ze && 0 <= Ne && (vl || 0.05 < sl) && jn(
        e,
        ze,
        Ne,
        sl,
        il
      ), xl(t), Va(a), il = i, vl = o;
    }
    function nc(e) {
      for (e = e.child; e !== null; )
        ih(e), e = e.sibling;
    }
    function jy(e, t, a, i) {
      var o = Wt(), f = vn(), d = Za(), h = Sn(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Jn(
            e,
            a,
            i
          ), eg(a, nu);
          break;
        case 1:
          if (Jn(
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
          i && y & 64 && Dy(a), to(a, a.return);
          break;
        case 27:
          Uy(a);
        case 26:
        case 5:
          Jn(
            e,
            a,
            i
          ), i && t === null && y & 4 && lc(a), to(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = gu(), Jn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += da(y);
            try {
              re(
                a,
                zy,
                a,
                t,
                Wf,
                i.effectDuration
              );
            } catch (p) {
              ke(a, a.return, p);
            }
          } else
            Jn(
              e,
              a,
              i
            );
          break;
        case 31:
          Jn(
            e,
            a,
            i
          ), i && y & 4 && xy(e, a);
          break;
        case 13:
          Jn(
            e,
            a,
            i
          ), i && y & 4 && By(e, a);
          break;
        case 22:
          a.memoizedState === null && Jn(
            e,
            a,
            i
          ), to(a, a.return);
          break;
        case 30:
          break;
        default:
          Jn(
            e,
            a,
            i
          );
      }
      (a.mode & et) !== je && 0 <= ze && 0 <= Ne && (vl || 0.05 < sl) && jn(
        a,
        ze,
        Ne,
        sl,
        il
      ), xl(o), Va(f), il = d, vl = h;
    }
    function Jn(e, t, a) {
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
      var f = Wt(), d = vn(), h = Za(), y = Sn(), p = Jf, z = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & et) !== je && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Ed(
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
          ), z & 2048 && ts(t, rn | ku);
          break;
        case 1:
          (t.mode & et) !== je && 0 < t.actualStartTime && ((t.flags & 128) !== 0 ? Lm(
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
          var U = gu(), T = Il;
          Il = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, Pa(
            e,
            t,
            a,
            i,
            o
          ), Il = T, z & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== a && (Yc(i), a != null && Ur(a))), e.passiveEffectDuration += Wo(
            U
          );
          break;
        case 12:
          if (z & 2048) {
            z = gu(), Pa(
              e,
              t,
              a,
              i,
              o
            ), e = t.stateNode, e.passiveEffectDuration += da(z);
            try {
              re(
                t,
                ag,
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
          z = Il, U = t.alternate !== null ? t.alternate.memoizedState : null, T = t.memoizedState, U !== null && T === null ? (T = t.deletions, T !== null && 0 < T.length && T[0].tag === 18 ? (Il = !1, U = U.hydrationErrors, U !== null && Lm(
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
          ), Il = z;
          break;
        case 13:
          z = Il, U = t.alternate !== null ? t.alternate.memoizedState : null, T = t.memoizedState, U === null || U.dehydrated === null || T !== null && T.dehydrated !== null ? Il = !1 : (T = t.deletions, T !== null && 0 < T.length && T[0].tag === 18 ? (Il = !1, U = U.hydrationErrors, U !== null && Lm(
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
          ), Il = z;
          break;
        case 23:
          break;
        case 22:
          T = t.stateNode, U = t.alternate, t.memoizedState !== null ? T._visibility & vo ? Pa(
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
          ) : T._visibility & vo ? Pa(
            e,
            t,
            a,
            i,
            o
          ) : (T._visibility |= vo, uc(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & et) === je || Il || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && bd(t, e, o), 0 <= ze && 0 <= Ne && 0.05 < Ne - ze && bd(
            t,
            ze,
            Ne
          ))), z & 2048 && us(
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
          ), z & 2048 && is(t.alternate, t);
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
      (t.mode & et) !== je && ((e = !Il && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && yn(
        t,
        a,
        o,
        "Mount"
      )), 0 <= ze && 0 <= Ne && ((vl || 0.05 < sl) && jn(
        t,
        ze,
        Ne,
        sl,
        il
      ), e && 0.05 < Ne - ze && yn(
        t,
        ze,
        Ne,
        "Mount"
      ))), xl(f), Va(d), il = h, vl = y, Jf = p;
    }
    function uc(e, t, a, i, o, f) {
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
      var d = Wt(), h = vn(), y = Za(), p = Sn(), z = Jf;
      o && (t.mode & et) !== je && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Ed(
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
          uc(
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
          var T = t.stateNode;
          t.memoizedState !== null ? T._visibility & vo ? uc(
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
          ) : (T._visibility |= vo, uc(
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
          uc(
            e,
            t,
            a,
            i,
            o,
            f
          ), o && U & 2048 && is(t.alternate, t);
          break;
        default:
          uc(
            e,
            t,
            a,
            i,
            o,
            f
          );
      }
      (t.mode & et) !== je && 0 <= ze && 0 <= Ne && (vl || 0.05 < sl) && jn(
        t,
        ze,
        Ne,
        sl,
        il
      ), xl(d), Va(h), il = y, vl = p, Jf = z;
    }
    function lo(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = a, y = i, p = t !== null ? t.actualStartTime : o, z = Jf;
          (f.mode & et) !== je && 0 < f.actualStartTime && (f.flags & 1) !== 0 && Ed(
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
          Jf = z, f = t;
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
            Ri,
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
          var i = Ri;
          Ri = _h(
            e.stateNode.containerInfo
          ), ao(
            e,
            t,
            a
          ), Ri = i;
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
            oa = i, Mu(
              i,
              e
            ), (i.mode & et) !== je && 0 <= ze && 0 <= Ne && 0.05 < Ne - ze && yn(
              i,
              ze,
              Ne,
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
            rn | ku
          );
          break;
        case 3:
          var f = gu();
          en(e), e.stateNode.passiveEffectDuration += Wo(f);
          break;
        case 12:
          f = gu(), en(e), e.stateNode.passiveEffectDuration += da(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & vo && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~vo, fh(e), (e.mode & et) !== je && 0 <= ze && 0 <= Ne && 0.05 < Ne - ze && yn(
            e,
            ze,
            Ne,
            "Disconnect"
          )) : en(e);
          break;
        default:
          en(e);
      }
      (e.mode & et) !== je && 0 <= ze && 0 <= Ne && (vl || 0.05 < sl) && jn(
        e,
        ze,
        Ne,
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
            oa = i, Mu(
              i,
              e
            ), (i.mode & et) !== je && 0 <= ze && 0 <= Ne && 0.05 < Ne - ze && yn(
              i,
              ze,
              Ne,
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
      (e.mode & et) !== je && 0 <= ze && 0 <= Ne && (vl || 0.05 < sl) && jn(
        e,
        ze,
        Ne,
        sl,
        il
      ), xl(t), Va(a), vl = o, il = i;
    }
    function Mu(e, t) {
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
        if ((i.mode & et) !== je && 0 <= ze && 0 <= Ne && (vl || 0.05 < sl) && jn(
          i,
          ze,
          Ne,
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
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), Fy()) : Hi();
    }
    function yf() {
      if (Mn === 0)
        if ((lt & 536870912) === 0 || st) {
          var e = Cs;
          Cs <<= 1, (Cs & 3932160) === 0 && (Cs = 262144), Mn = e;
        } else Mn = 536870912;
      return e = au.current, e !== null && (e.flags |= 32), Mn;
    }
    function qe(e, t, a) {
      if (Sm && console.error("useInsertionEffect must not schedule updates."), oS && (Mv = !0), (e === Qt && (Bt === Js || Bt === Ks) || e.cancelPendingCommit !== null) && (Cu(e, 0), An(
        e,
        lt,
        Mn,
        !1
      )), Un(e, a), (pt & Pl) !== fa && e === Qt) {
        if (qu)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = it && he(it) || "Unknown", rE.has(e) || (rE.add(e), t = he(t) || "Unknown", console.error(
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
        wu && Ol(e, t, a), ss(t), e === Qt && ((pt & Pl) === fa && (nr |= a), dl === tr && An(
          e,
          lt,
          Mn,
          !1
        )), Ca(e);
    }
    function ig(e, t, a) {
      if ((pt & (Pl | uu)) !== fa)
        throw Error("Should not already be working.");
      if (lt !== 0 && it !== null) {
        var i = it, o = Gl();
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
                Lu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              Lu,
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
                Lu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              Lu,
              void 0,
              "primary-light"
            ));
            break;
          default:
            el && (i = o - Qp, 3 > i || console.timeStamp(
              "Blocked",
              Qp,
              o,
              Lu,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Sl(e, t)) ? mi(e, t) : vf(e, t, !0);
      var d = a;
      do {
        if (f === Mo) {
          gm && !a && An(e, t, 0, !1), t = Bt, Qp = Xl(), lb = t;
          break;
        } else {
          if (i = Gl(), o = e.current.alternate, d && !og(o)) {
            Bn(t), o = ca, f = i, !el || f <= o || (Al ? Al.run(
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
            )), ic(t, i), f = vf(e, t, !1), d = !1;
            continue;
          }
          if (f === Zs) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              Bn(t), Xm(
                ca,
                i,
                t,
                Al
              ), ic(t, i), t = h;
              e: {
                i = e, f = d, d = o0;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (Cu(i, h).flags |= 256), h = vf(
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
            Bn(t), Xm(
              ca,
              i,
              t,
              Al
            ), ic(t, i), Cu(e, 0), An(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case Mo:
              case u0:
                throw Error("Root did not complete. This is a bug in React.");
              case tr:
                if ((t & 4194048) !== t) break;
              case Ev:
                Bn(t), j0(
                  ca,
                  i,
                  t,
                  Al
                ), ic(t, i), o = t, (o & 127) !== 0 ? iv = i : (o & 4194048) !== 0 && (cv = i), An(
                  a,
                  t,
                  Mn,
                  !lr
                );
                break e;
              case Zs:
                sn = null;
                break;
              case bv:
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
                Ov,
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
              if ((t & 62914560) === t && (d = Rv + Pb - Gl(), 10 < d)) {
                if (An(
                  a,
                  t,
                  Mn,
                  !lr
                ), Tc(a, 0, !0) !== 0) break e;
                _i = t, a.timeoutHandle = vE(
                  cg.bind(
                    null,
                    a,
                    o,
                    sn,
                    f0,
                    Ov,
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
              cg(
                a,
                o,
                sn,
                f0,
                Ov,
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
    function cg(e, t, a, i, o, f, d, h, y, p, z, U, T, G) {
      e.timeoutHandle = Ps;
      var ie = t.subtreeFlags, se = null;
      if ((ie & 8192 || (ie & 16785408) === 16785408) && (se = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: mn
      }, ch(t, f, se), ie = (f & 62914560) === f ? Rv - Gl() : (f & 4194048) === f ? Ib - Gl() : 0, ie = Mh(se, ie), ie !== null)) {
        _i = f, e.cancelPendingCommit = ie(
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
            z,
            se,
            se.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < se.count ? 0 < se.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : se.imgCount === 1 ? "Suspended on an Image" : 0 < se.imgCount ? "Suspended on Images" : null,
            T,
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
        z,
        se,
        U,
        T,
        G
      );
    }
    function og(e) {
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
      return (pt & (Pl | uu)) === fa ? (Hu(0), !1) : !0;
    }
    function rh() {
      if (it !== null) {
        if (Bt === zn)
          var e = it.return;
        else
          e = it, $o(), Zi(e), om = null, Ip = 0, e = it;
        for (; e !== null; )
          _y(e.alternate, e), e = e.return;
        it = null;
      }
    }
    function ic(e, t) {
      (e & 127) !== 0 && (js = t), (e & 4194048) !== 0 && (Ao = t), (e & 62914560) !== 0 && (eb = t), (e & 2080374784) !== 0 && (tb = t);
    }
    function Cu(e, t) {
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
        if (Bn(lt), dl === bv || dl === tr)
          j0(
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
        ic(lt, ca);
      }
      if (a = Al, Al = null, (t & 127) !== 0) {
        Al = Gp, o = 0 <= gc && gc < js ? js : gc, i = 0 <= qs && qs < js ? js : qs, f = 0 <= i ? i : 0 <= o ? o : ca, 0 <= iv ? (Bn(2), q0(
          iv,
          f,
          t,
          a
        )) : ov & 127, a = o;
        var h = i, y = Lp, p = 0 < um, z = Ff === wp, U = Ff === uv;
        if (o = ca, i = Gp, f = N1, d = x1, el) {
          if (mt = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var T = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                mt,
                dt,
                T
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              mt,
              dt,
              T
            );
          }
          o > a && (h = z ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", z = U ? "Promise Resolved" : z ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", U = [], d != null && U.push(["Component name", d]), f != null && U.push(["Method name", f]), a = {
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
              z,
              a
            )
          ) : performance.measure(z, a));
        }
        gc = -1.1, Ff = 0, x1 = N1 = null, iv = -1.1, um = qs, qs = -1.1, js = Xl();
      }
      if ((t & 4194048) !== 0 && (Al = Xp, o = 0 <= Oo && Oo < Ao ? Ao : Oo, a = 0 <= Ku && Ku < Ao ? Ao : Ku, i = 0 <= If && If < Ao ? Ao : If, f = 0 <= i ? i : 0 <= a ? a : ca, 0 <= cv ? (Bn(256), q0(
        cv,
        f,
        t,
        Al
      )) : ov & 4194048, U = i, h = Ys, y = 0 < Pf, p = B1 === uv, f = ca, i = Xp, d = IS, z = PS, el && (mt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < U ? U > o && (U = o) : U = o, o > U && h !== null && (T = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          U,
          o,
          mt,
          dt,
          T
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        U,
        o,
        mt,
        dt,
        T
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
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", U = [], z != null && U.push(["Component name", z]), d != null && U.push(["Method name", d]), a = {
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
      ) : performance.measure(o, a))), Ku = Oo = -1.1, B1 = 0, cv = -1.1, Pf = If, If = -1.1, Ao = Xl()), (t & 62914560) !== 0 && (ov & 62914560) !== 0 && (Bn(4194304), Qm(eb, ca)), (t & 2080374784) !== 0 && (ov & 2080374784) !== 0 && (Bn(268435456), Qm(tb, ca)), a = e.timeoutHandle, a !== Ps && (e.timeoutHandle = Ps, zT(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), _i = 0, rh(), Qt = e, it = a = yu(
        e.current,
        null
      ), lt = t, Bt = zn, iu = null, lr = !1, gm = Sl(e, t), eS = !1, dl = Mo, $s = Mn = tS = nr = ar = 0, sn = o0 = null, Ov = !1, (t & 8) !== 0 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - Wl(i), f = 1 << o, t |= e[o], i &= ~f;
      return Sc = t, Td(), e = JS(), 1e3 < e - ZS && (X.recentlyCreatedOwnerStacks = 0, ZS = e), Ai.discardPendingWarnings(), a;
    }
    function Kn(e, t) {
      we = null, X.H = l0, X.getCurrentStack = null, qu = !1, xa = null, t === cm || t === dv ? (t = Lc(), Bt = i0) : t === w1 ? (t = Lc(), Bt = Fb) : Bt = t === k1 ? P1 : t !== null && typeof t == "object" && typeof t.then == "function" ? c0 : Tv, iu = t;
      var a = it;
      a === null ? (dl = u0, Wr(
        e,
        sa(t, e.current)
      )) : a.mode & et && Md(a);
    }
    function Xy() {
      var e = au.current;
      return e === null ? !0 : (lt & 4194048) === lt ? $u === null : (lt & 62914560) === lt || (lt & 536870912) !== 0 ? e === $u : !1;
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
      dl = tr, lr || (lt & 4194048) !== lt && au.current !== null || (gm = !0), (ar & 134217727) === 0 && (nr & 134217727) === 0 || Qt === null || An(
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
        if (wu) {
          var d = e.memoizedUpdaters;
          0 < d.size && (bf(e, lt), d.clear()), Ga(e, t);
        }
        f0 = null, Cu(e, t);
      }
      t = !1, d = dl;
      e: do
        try {
          if (Bt !== zn && it !== null) {
            var h = it, y = iu;
            switch (Bt) {
              case P1:
                rh(), d = Ev;
                break e;
              case i0:
              case Js:
              case Ks:
              case c0:
                au.current === null && (t = !0);
                var p = Bt;
                if (Bt = zn, iu = null, Sf(e, h, y, p), a && gm) {
                  d = Mo;
                  break e;
                }
                break;
              default:
                p = Bt, Bt = zn, iu = null, Sf(e, h, y, p);
            }
          }
          Vy(), d = dl;
          break;
        } catch (z) {
          Kn(e, z);
        }
      while (!0);
      return t && e.shellSuspendCounter++, $o(), pt = i, X.H = o, X.A = f, it === null && (Qt = null, lt = 0, Td()), d;
    }
    function Vy() {
      for (; it !== null; ) dh(it);
    }
    function mi(e, t) {
      var a = pt;
      pt |= Pl;
      var i = sh(), o = Qy();
      if (Qt !== e || lt !== t) {
        if (wu) {
          var f = e.memoizedUpdaters;
          0 < f.size && (bf(e, lt), f.clear()), Ga(e, t);
        }
        f0 = null, _v = Gl() + eE, Cu(e, t);
      } else
        gm = Sl(
          e,
          t
        );
      e: do
        try {
          if (Bt !== zn && it !== null)
            t: switch (t = it, f = iu, Bt) {
              case Tv:
                Bt = zn, iu = null, Sf(
                  e,
                  t,
                  f,
                  Tv
                );
                break;
              case Js:
              case Ks:
                if (ty(f)) {
                  Bt = zn, iu = null, Zy(t);
                  break;
                }
                t = function() {
                  Bt !== Js && Bt !== Ks || Qt !== e || (Bt = Av), Ca(e);
                }, f.then(t, t);
                break e;
              case i0:
                Bt = Av;
                break e;
              case Fb:
                Bt = I1;
                break e;
              case Av:
                ty(f) ? (Bt = zn, iu = null, Zy(t)) : (Bt = zn, iu = null, Sf(
                  e,
                  t,
                  f,
                  Av
                ));
                break;
              case I1:
                var d = null;
                switch (it.tag) {
                  case 26:
                    d = it.memoizedState;
                  case 5:
                  case 27:
                    var h = it;
                    if (d ? ct(d) : h.stateNode.complete) {
                      Bt = zn, iu = null;
                      var y = h.sibling;
                      if (y !== null) it = y;
                      else {
                        var p = h.return;
                        p !== null ? (it = p, os(p)) : it = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Bt = zn, iu = null, Sf(
                  e,
                  t,
                  f,
                  I1
                );
                break;
              case c0:
                Bt = zn, iu = null, Sf(
                  e,
                  t,
                  f,
                  c0
                );
                break;
              case P1:
                rh(), dl = Ev;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          X.actQueue !== null ? Vy() : El();
          break;
        } catch (z) {
          Kn(e, z);
        }
      while (!0);
      return $o(), X.H = i, X.A = o, pt = a, it !== null ? Mo : (Qt = null, lt = 0, Td(), dl);
    }
    function El() {
      for (; it !== null && !Gh(); )
        dh(it);
    }
    function dh(e) {
      var t = e.alternate;
      (e.mode & et) !== je ? (ai(e), t = re(
        e,
        es,
        t,
        e,
        Sc
      ), Md(e)) : t = re(
        e,
        es,
        t,
        e,
        Sc
      ), e.memoizedProps = e.pendingProps, t === null ? os(e) : it = t;
    }
    function Zy(e) {
      var t = re(e, wl, e);
      e.memoizedProps = e.pendingProps, t === null ? os(e) : it = t;
    }
    function wl(e) {
      var t = e.alternate, a = (e.mode & et) !== je;
      switch (a && ai(e), e.tag) {
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
          Zi(e);
        default:
          _y(t, e), e = it = Km(e, Sc), t = es(t, e, Sc);
      }
      return a && Md(e), t;
    }
    function Sf(e, t, a, i) {
      $o(), Zi(t), om = null, Ip = 0;
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
          ), it = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw it = o, f;
        dl = u0, Wr(
          e,
          sa(a, e.current)
        ), it = null;
        return;
      }
      t.flags & 32768 ? (st || i === Tv ? e = !0 : gm || (lt & 536870912) !== 0 ? e = !1 : (lr = e = !0, (i === Js || i === Ks || i === i0 || i === c0) && (i = au.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Jy(t, e)) : os(t);
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
        if (e = t.return, ai(t), a = re(
          t,
          Ry,
          a,
          t,
          Sc
        ), (t.mode & et) !== je && Hr(t), a !== null) {
          it = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          it = t;
          return;
        }
        it = t = e;
      } while (t !== null);
      dl === Mo && (dl = Wb);
    }
    function Jy(e, t) {
      do {
        var a = P0(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, it = a;
          return;
        }
        if ((e.mode & et) !== je) {
          Hr(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          it = e;
          return;
        }
        it = e = a;
      } while (e !== null);
      dl = Ev, it = null;
    }
    function Gt(e, t, a, i, o, f, d, h, y, p, z, U, T, G) {
      e.cancelPendingCommit = null;
      do
        fs();
      while (Kl !== ir);
      if (Ai.flushLegacyContextWarning(), Ai.flushPendingUnsafeLifecycleWarnings(), (pt & (Pl | uu)) !== fa)
        throw Error("Should not already be working.");
      if (Bn(a), p === Zs ? Xm(
        T,
        G,
        a,
        Al
      ) : i !== null ? l1(
        T,
        G,
        a,
        i,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        Al
      ) : t1(
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
        if (f = t.lanes | t.childLanes, f |= z1, nd(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === Qt && (it = Qt = null, lt = 0), vm = t, cr = e, _i = a, nS = f, iS = o, iE = i, uS = G, cE = U, Di = Dv, oE = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ef(mo, function() {
          return y0 = window.event, Di === Dv && (Di = aS), rs(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), To = null, Wf = Xl(), U !== null && a1(
          G,
          Wf,
          U,
          Al
        ), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = X.T, X.T = null, o = Ot.p, Ot.p = Ml, d = pt, pt |= uu;
          try {
            i1(e, t, a);
          } finally {
            pt = d, Ot.p = o, X.T = i;
          }
        }
        Kl = lE, ba(), Uu(), Ky();
      }
    }
    function ba() {
      if (Kl === lE) {
        Kl = ir;
        var e = cr, t = vm, a = _i, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = X.T, X.T = null;
          var o = Ot.p;
          Ot.p = Ml;
          var f = pt;
          pt |= uu;
          try {
            ym = a, pm = e, wc(), ns(t, e), pm = ym = null, a = gS;
            var d = Sd(e.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && H0(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && wm(h)) {
                var p = y.start, z = y.end;
                if (z === void 0 && (z = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    z,
                    h.value.length
                  );
                else {
                  var U = h.ownerDocument || document, T = U && U.defaultView || window;
                  if (T.getSelection) {
                    var G = T.getSelection(), ie = h.textContent.length, se = Math.min(
                      y.start,
                      ie
                    ), kt = y.end === void 0 ? se : Math.min(y.end, ie);
                    !G.extend && se > kt && (d = kt, kt = se, se = d);
                    var ht = U0(
                      h,
                      se
                    ), E = U0(
                      h,
                      kt
                    );
                    if (ht && E && (G.rangeCount !== 1 || G.anchorNode !== ht.node || G.anchorOffset !== ht.offset || G.focusNode !== E.node || G.focusOffset !== E.offset)) {
                      var A = U.createRange();
                      A.setStart(ht.node, ht.offset), G.removeAllRanges(), se > kt ? (G.addRange(A), G.extend(E.node, E.offset)) : (A.setEnd(E.node, E.offset), G.addRange(A));
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
                var D = U[h];
                D.element.scrollLeft = D.left, D.element.scrollTop = D.top;
              }
            }
            Qv = !!pS, gS = pS = null;
          } finally {
            pt = f, Ot.p = o, X.T = i;
          }
        }
        e.current = t, Kl = aE;
      }
    }
    function Uu() {
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
        e = cr, t = vm, a = _i;
        var i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = X.T, X.T = null;
          var o = Ot.p;
          Ot.p = Ml;
          var f = pt;
          pt |= uu;
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
        e = uS, t = cE, Eo = Xl(), e = t === null ? e : Wf, t = Eo, a = Di === lS, i = Al, To !== null ? Y0(
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
          var t = Eo, a = Di === lS;
          !el || t <= e || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            mt,
            dt,
            a ? " error" : "secondary-light"
          ), Di !== lS && (Di = tE);
        }
        Kl = ir, Lh(), e = cr;
        var i = vm;
        t = _i, a = iE;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? Kl = zv : (Kl = ir, vm = cr = null, $y(
          e,
          e.pendingLanes
        ), ks = 0, s0 = null);
        var f = e.pendingLanes;
        if (f === 0 && (ur = null), o || yh(e), f = Hl(t), i = i.stateNode, zl && typeof zl.onCommitFiberRoot == "function")
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
              case mc:
                h = Qh;
                break;
              default:
                h = mo;
            }
            zl.onCommitFiberRoot(
              yo,
              i,
              h,
              d
            );
          } catch (U) {
            Yu || (Yu = !0, console.error(
              "React instrumentation encountered an error: %o",
              U
            ));
          }
        if (wu && e.memoizedUpdaters.clear(), Gy(), a !== null) {
          d = X.T, h = Ot.p, Ot.p = Ml, X.T = null;
          try {
            var y = e.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], z = fg(p.stack);
              re(
                p.source,
                y,
                p.value,
                z
              );
            }
          } finally {
            X.T = d, Ot.p = h;
          }
        }
        (_i & 3) !== 0 && fs(), Ca(e), f = e.pendingLanes, (t & 261930) !== 0 && (f & 42) !== 0 ? (rv = !0, e === cS ? r0++ : (r0 = 0, cS = e)) : r0 = 0, o || ic(t, Eo), Hu(0);
      }
    }
    function fg(e) {
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
      return ba(), Uu(), Ky(), rs();
    }
    function rs() {
      if (Kl !== zv) return !1;
      var e = cr, t = nS;
      nS = 0;
      var a = Hl(_i), i = ia > a ? ia : a;
      a = X.T;
      var o = Ot.p;
      try {
        Ot.p = i, X.T = null;
        var f = iS;
        iS = null, i = cr;
        var d = _i;
        if (Kl = ir, vm = cr = null, _i = 0, (pt & (Pl | uu)) !== fa)
          throw Error("Cannot flush passive effects while already rendering.");
        Bn(d), oS = !0, Mv = !1;
        var h = 0;
        if (To = null, h = Gl(), Di === tE)
          Qm(
            Eo,
            h,
            cT
          );
        else {
          var y = Eo, p = h, z = Di === aS;
          !el || p <= y || (Al ? Al.run(
            console.timeStamp.bind(
              console,
              z ? "Waiting for Paint" : "Waiting",
              y,
              p,
              mt,
              dt,
              "secondary-light"
            )
          ) : console.timeStamp(
            z ? "Waiting for Paint" : "Waiting",
            y,
            p,
            mt,
            dt,
            "secondary-light"
          ));
        }
        y = pt, pt |= uu;
        var U = i.current;
        wc(), oh(U);
        var T = i.current;
        U = uS, wc(), qy(
          i,
          T,
          d,
          f,
          U
        ), yh(i), pt = y;
        var G = Gl();
        if (T = h, U = Al, To !== null ? Y0(
          T,
          G,
          To,
          !0,
          U
        ) : !el || G <= T || (U ? U.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            T,
            G,
            mt,
            dt,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          T,
          G,
          mt,
          dt,
          "secondary-dark"
        )), ic(d, G), Hu(0, !1), Mv ? i === s0 ? ks++ : (ks = 0, s0 = i) : ks = 0, Mv = oS = !1, zl && typeof zl.onPostCommitFiberRoot == "function")
          try {
            zl.onPostCommitFiberRoot(yo, i);
          } catch (se) {
            Yu || (Yu = !0, console.error(
              "React instrumentation encountered an error: %o",
              se
            ));
          }
        var ie = i.current.stateNode;
        return ie.effectDuration = 0, ie.passiveEffectDuration = 0, !0;
      } finally {
        Ot.p = o, X.T = a, $y(e, t);
      }
    }
    function Ea(e, t, a) {
      t = sa(a, t), V0(t), t = Zd(e.stateNode, t, 2), e = Su(e, t, 2), e !== null && (Un(e, 2), Ca(e));
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
              e = sa(a, e), V0(e), a = Jd(2), i = Su(t, a, 2), i !== null && (Kd(
                a,
                i,
                t,
                e
              ), Un(i, 2), Ca(i));
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
      o.has(a) || (eS = !0, o.add(a), i = Ma.bind(null, e, t, a), wu && bf(e, a), t.then(i, i));
    }
    function Ma(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, (a & 127) !== 0 ? 0 > gc && (js = gc = Xl(), Gp = nv("Promise Resolved"), Ff = uv) : (a & 4194048) !== 0 && 0 > Ku && (Ao = Ku = Xl(), Xp = nv("Promise Resolved"), B1 = uv), Ly() && X.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Qt === e && (lt & a) === a && (dl === tr || dl === bv && (lt & 62914560) === lt && Gl() - Rv < Pb ? (pt & Pl) === fa && Cu(e, 0) : tS |= a, $s === lt && ($s = 0)), Ca(e);
    }
    function ky(e, t) {
      t === 0 && (t = No()), e = la(e, t), e !== null && (Un(e, t), Ca(e));
    }
    function yi(e) {
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
    function $n(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Oa;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && re(
            o,
            mh,
            i,
            o
          ) : $n(
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
            $n,
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
      e.current.mode & (Ba | Ti) || (t = !1), $n(
        e,
        e.current,
        t
      );
    }
    function On(e) {
      if ((pt & Pl) === fa) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = he(e) || "ReactComponent", Cv !== null) {
            if (Cv.has(t)) return;
            Cv.add(t);
          } else Cv = /* @__PURE__ */ new Set([t]);
          re(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function bf(e, t) {
      wu && e.memoizedUpdaters.forEach(function(a) {
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
      e !== bm && e.next === null && (bm === null ? Uv = bm = e : bm = bm.next = e), Hv = !0, X.actQueue !== null ? rS || (rS = !0, sg()) : fS || (fS = !0, sg());
    }
    function Hu(e, t) {
      if (!sS && Hv) {
        sS = !0;
        do
          for (var a = !1, i = Uv; i !== null; ) {
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
    function rg() {
      y0 = window.event, ph();
    }
    function ph() {
      Hv = rS = fS = !1;
      var e = 0;
      or !== 0 && Py() && (e = or);
      for (var t = Gl(), a = null, i = Uv; i !== null; ) {
        var o = i.next, f = Tf(i, t);
        f === 0 ? (i.next = null, a === null ? Uv = o : a.next = o, o === null && (bm = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (Hv = !0)), i = o;
      }
      Kl !== ir && Kl !== zv || Hu(e), or !== 0 && (or = 0);
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
          case mc:
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
      if (rv = fv = !1, y0 = window.event, Kl !== ir && Kl !== zv)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Di === Dv && (Di = aS), fs() && e.callbackNode !== a)
        return null;
      var i = lt;
      return i = Tc(
        e,
        e === Qt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ps
      ), i === 0 ? null : (ig(
        e,
        i,
        t
      ), Tf(e, Gl()), e.callbackNode != null && e.callbackNode === a ? Wy.bind(null, e) : null);
    }
    function ds(e, t) {
      if (fs()) return null;
      fv = rv, rv = !1, ig(e, t, !0);
    }
    function gh(e) {
      e !== dS && e !== null && wh(e);
    }
    function sg() {
      X.actQueue !== null && X.actQueue.push(function() {
        return ph(), null;
      }), MT(function() {
        (pt & (Pl | uu)) !== fa ? Ap(
          Op,
          rg
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
        var h = new Fg(
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
                    Object.freeze(p), si(
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
                  }, Object.freeze(p), si(
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
    function ut(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        O1(i);
      }
      e.currentTarget = null;
    }
    function zt(e, t) {
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
                ut,
                f,
                h,
                p
              ) : ut(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? re(
                y,
                ut,
                f,
                h,
                p
              ) : ut(f, h, p), o = y;
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
    function Nu(e, t, a) {
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
    function cc(e) {
      if (!e[Nv]) {
        e[Nv] = !0, Jg.forEach(function(a) {
          a !== "selectionchange" && (hS.has(a) || Nu(a, !1, e), Nu(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Nv] || (t[Nv] = !0, Nu("selectionchange", !1, t));
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
    function kn(e, t, a, i, o) {
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
              if (d = le(h), d === null) return;
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
        var p = f, z = Nn(a), U = [];
        e: {
          var T = VS.get(e);
          if (T !== void 0) {
            var G = Fg, ie = e;
            switch (e) {
              case "keypress":
                if (Tr(a) === 0) break e;
              case "keydown":
              case "keyup":
                G = x2;
                break;
              case "focusin":
                ie = "focus", G = v1;
                break;
              case "focusout":
                ie = "blur", G = v1;
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
                G = D2;
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
            var se = (t & 4) !== 0, kt = !se && (e === "scroll" || e === "scrollend"), ht = se ? T !== null ? T + "Capture" : null : T;
            se = [];
            for (var E = p, A; E !== null; ) {
              var D = E;
              if (A = D.stateNode, D = D.tag, D !== 5 && D !== 26 && D !== 27 || A === null || ht === null || (D = hu(E, ht), D != null && se.push(
                Lt(
                  E,
                  D,
                  A
                )
              )), kt) break;
              E = E.return;
            }
            0 < se.length && (T = new G(
              T,
              ie,
              null,
              a,
              z
            ), U.push({
              event: T,
              listeners: se
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (T = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", T && a !== Mp && (ie = a.relatedTarget || a.fromElement) && (le(ie) || ie[Ei]))
              break e;
            if ((G || T) && (T = z.window === z ? z : (T = z.ownerDocument) ? T.defaultView || T.parentWindow : window, G ? (ie = a.relatedTarget || a.toElement, G = p, ie = ie ? le(ie) : null, ie !== null && (kt = Ie(ie), se = ie.tag, ie !== kt || se !== 5 && se !== 27 && se !== 6) && (ie = null)) : (G = null, ie = p), G !== ie)) {
              if (se = CS, D = "onMouseLeave", ht = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (se = HS, D = "onPointerLeave", ht = "onPointerEnter", E = "pointer"), kt = G == null ? T : ye(G), A = ie == null ? T : ye(ie), T = new se(
                D,
                E + "leave",
                G,
                a,
                z
              ), T.target = kt, T.relatedTarget = A, D = null, le(z) === p && (se = new se(
                ht,
                E + "enter",
                ie,
                a,
                z
              ), se.target = A, se.relatedTarget = kt, D = se), kt = D, G && ie)
                t: {
                  for (se = uo, ht = G, E = ie, A = 0, D = ht; D; D = se(D))
                    A++;
                  D = 0;
                  for (var K = E; K; K = se(K))
                    D++;
                  for (; 0 < A - D; )
                    ht = se(ht), A--;
                  for (; 0 < D - A; )
                    E = se(E), D--;
                  for (; A--; ) {
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
                T,
                G,
                se,
                !1
              ), ie !== null && kt !== null && Sh(
                U,
                kt,
                ie,
                se,
                !0
              );
            }
          }
          e: {
            if (T = p ? ye(p) : window, G = T.nodeName && T.nodeName.toLowerCase(), G === "select" || G === "input" && T.type === "file")
              var oe = qi;
            else if (jm(T))
              if (YS)
                oe = _r;
              else {
                oe = qm;
                var Ge = e1;
              }
            else
              G = T.nodeName, !G || G.toLowerCase() !== "input" || T.type !== "checkbox" && T.type !== "radio" ? p && du(p.elementType) && (oe = qi) : oe = Ym;
            if (oe && (oe = oe(e, p))) {
              Or(
                U,
                oe,
                a,
                z
              );
              break e;
            }
            Ge && Ge(e, T, p), e === "focusout" && p && T.type === "number" && p.memoizedProps.value != null && Dm(T, "number", T.value);
          }
          switch (Ge = p ? ye(p) : window, e) {
            case "focusin":
              (jm(Ge) || Ge.contentEditable === "true") && (Fh = Ge, b1 = p, jp = null);
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
              E1 = !1, N0(
                U,
                a,
                z
              );
              break;
            case "selectionchange":
              if (K2) break;
            case "keydown":
            case "keyup":
              N0(
                U,
                a,
                z
              );
          }
          var _e;
          if (S1)
            e: {
              switch (e) {
                case "compositionstart":
                  var Te = "onCompositionStart";
                  break e;
                case "compositionend":
                  Te = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  Te = "onCompositionUpdate";
                  break e;
              }
              Te = void 0;
            }
          else
            Wh ? Qo(e, a) && (Te = "onCompositionEnd") : e === "keydown" && a.keyCode === NS && (Te = "onCompositionStart");
          Te && (xS && a.locale !== "ko" && (Wh || Te !== "onCompositionStart" ? Te === "onCompositionEnd" && Wh && (_e = Mc()) : (Zf = z, y1 = "value" in Zf ? Zf.value : Zf.textContent, Wh = !0)), Ge = Wn(
            p,
            Te
          ), 0 < Ge.length && (Te = new US(
            Te,
            e,
            null,
            a,
            z
          ), U.push({
            event: Te,
            listeners: Ge
          }), _e ? Te.data = _e : (_e = ti(a), _e !== null && (Te.data = _e)))), (_e = Z2 ? Bm(e, a) : pd(e, a)) && (Te = Wn(
            p,
            "onBeforeInput"
          ), 0 < Te.length && (Ge = new M2(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            z
          ), U.push({
            event: Ge,
            listeners: Te
          }), Ge.data = _e)), rt(
            U,
            e,
            p,
            a,
            z
          );
        }
        zt(U, t);
      });
    }
    function Lt(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Wn(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = hu(e, a), o != null && i.unshift(
          Lt(e, o, f)
        ), o = hu(e, t), o != null && i.push(
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
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = hu(a, f), p != null && d.unshift(
          Lt(a, p, y)
        )) : o || (p = hu(a, f), p != null && d.push(
          Lt(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Ta(e, t) {
      z0(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || zS || (zS = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Gu,
        possibleRegistrationNames: Qf
      };
      du(e) || typeof t.is == "string" || Pv(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function nl(e, t, a, i) {
      t !== a && (a = Fn(a), Fn(t) !== a && (i[e] = t));
    }
    function hs(e, t, a) {
      t.forEach(function(i) {
        a[pi(i)] = i === "style" ? oc(e) : e.getAttribute(i);
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
      return e = e.namespaceURI === Ze || e.namespaceURI === We ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Fn(e) {
      return wa(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Ci(e)
      ), cu(e)), (typeof e == "string" ? e : "" + e).replace(bT, `
`).replace(ET, "");
    }
    function Iy(e, t) {
      return t = Fn(t), Fn(e) === t;
    }
    function At(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (br(i, t, !1), t === "body" || t === "textarea" && i === "" || zc(e, i)) : (typeof i == "number" || typeof i == "bigint") && (br("" + i, t, !1), t !== "body" && zc(e, "" + i));
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
          ) : typeof i == "function" && (o.encType == null && o.method == null || jv || (jv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Bv || (Bv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || xv ? t !== "button" || o.type == null || o.type === "submit" || xv ? typeof i == "function" && (o.name == null || hE || (hE = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || jv || (jv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Bv || (Bv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (xv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (xv = !0, console.error(
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
          i !== "" || qv[a] || (qv[a] = !0, console.error(
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
          fu(
            e,
            Ws,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          fu(
            e,
            Ws,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          fu(
            e,
            Ws,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          fu(
            e,
            Ws,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          fu(
            e,
            Ws,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          fu(
            e,
            Ws,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          fu(
            e,
            mS,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          fu(
            e,
            mS,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          fu(
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
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = _0(a), jo(e, a, i)) : Gu.hasOwnProperty(a) && i != null && typeof i != "function" && ul(a, i);
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
          typeof i == "string" ? zc(e, i) : (typeof i == "number" || typeof i == "bigint") && zc(e, "" + i);
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
          if (Gu.hasOwnProperty(a))
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
                    At(e, t, i, z, a, null);
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
          od(e, a), t = f, a = d, e.multiple = !!i, t != null ? ru(e, !!i, t, !1) : a != null && ru(e, !!i, a, !0);
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
          R0(e, a);
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
          if (du(t)) {
            for (z in a)
              a.hasOwnProperty(z) && (i = a[z], i !== void 0 && Af(
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
        a.hasOwnProperty(h) && (i = a[h], i != null && At(e, t, h, i, a, null));
    }
    function Dl(e, t, a, i) {
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
                  G !== U && At(
                    e,
                    t,
                    T,
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
          ), sE = !0), xi(
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
                  T = f;
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
          i = h, t = d, a = G, T != null ? ru(e, !!t, T, !1) : !!a != !!t && (i != null ? ru(e, !!t, i, !0) : ru(e, !!t, t ? [] : "", !1));
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
                  At(e, t, h, null, i, o);
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
                  o !== f && At(e, t, d, o, i, f);
              }
          Rc(e, T, G);
          return;
        case "option":
          for (var ie in a)
            T = a[ie], a.hasOwnProperty(ie) && T != null && !i.hasOwnProperty(ie) && (ie === "selected" ? e.selected = !1 : At(
              e,
              t,
              ie,
              null,
              i,
              T
            ));
          for (y in i)
            T = i[y], G = a[y], i.hasOwnProperty(y) && T !== G && (T != null || G != null) && (y === "selected" ? e.selected = T && typeof T != "function" && typeof T != "symbol" : At(
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
          for (var se in a)
            T = a[se], a.hasOwnProperty(se) && T != null && !i.hasOwnProperty(se) && At(
              e,
              t,
              se,
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
                  At(
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
          if (du(t)) {
            for (var kt in a)
              T = a[kt], a.hasOwnProperty(kt) && T !== void 0 && !i.hasOwnProperty(kt) && Af(
                e,
                t,
                kt,
                void 0,
                i,
                T
              );
            for (z in i)
              T = i[z], G = a[z], !i.hasOwnProperty(z) || T === G || T === void 0 && G === void 0 || Af(
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
      for (var ht in a)
        T = a[ht], a.hasOwnProperty(ht) && T != null && !i.hasOwnProperty(ht) && At(e, t, ht, null, i, T);
      for (U in i)
        T = i[U], G = a[U], !i.hasOwnProperty(U) || T === G || T == null && G == null || At(e, t, U, T, i, G);
    }
    function pi(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function oc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function xu(e, t, a) {
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
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Fn(i), Fn(t) !== i && (a.style = oc(e)));
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
      if (du(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Gu.hasOwnProperty(y))
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
                    f.delete(y), xu(e, p, o);
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
                    f.delete("class"), d = Ni(
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
                    i.context === Co && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = Ni(
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
            if (Gu.hasOwnProperty(p))
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
                  f.delete(p), xu(e, y, o);
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
                  y !== "" || qv[p] || (qv[p] = !0, console.error(
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
                    h = _0(p), d = !1, i.context === Co && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (z = p.toLowerCase(), z = tu.hasOwnProperty(
                      z
                    ) && tu[z] || null, z !== null && z !== p && (d = !0, f.delete(z)), f.delete(h));
                    e: if (z = e, U = h, h = y, hn(U))
                      if (z.hasAttribute(U))
                        z = z.getAttribute(
                          U
                        ), vt(
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
    function dg(e, t) {
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
    function hg() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && Aa(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var z = y.transferSize, U = y.initiatorType;
              z && Aa(U) && (y = y.responseEnd, d += z * (y < h ? 1 : (h - p) / (y - p)));
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
    function mg(e) {
      switch (e) {
        case We:
          return Tm;
        case Ze:
          return wv;
        default:
          return Co;
      }
    }
    function gi(e, t) {
      if (e === Co)
        switch (t) {
          case "svg":
            return Tm;
          case "math":
            return wv;
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
    function Bu() {
      var e = window.event;
      return e && e !== y0 ? e.type : null;
    }
    function _f() {
      var e = window.event;
      return e && e !== y0 ? e.timeStamp : -1.1;
    }
    function yg(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function pg(e, t, a) {
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
    function gg() {
    }
    function Ah(e, t, a, i) {
      Dl(e, t, a, i), e[Ra] = i;
    }
    function Oh(e) {
      zc(e, "");
    }
    function c1(e, t, a) {
      e.nodeValue = a;
    }
    function vg(e) {
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
    function fc(e) {
      return e === "head";
    }
    function Sg(e, t) {
      e.removeChild(t);
    }
    function bg(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function io(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === m0 || a === Yv) {
            if (i === 0) {
              e.removeChild(o), ro(t);
              return;
            }
            i--;
          } else if (a === h0 || a === fr || a === Is || a === Em || a === Fs)
            i++;
          else if (a === OT)
            Si(
              e.ownerDocument.documentElement
            );
          else if (a === _T) {
            a = e.ownerDocument.head, Si(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Xf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === RT && Si(e.ownerDocument.body);
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
    function Eg(e) {
      ps(e, !0);
    }
    function Tg(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Ag(e) {
      e.nodeValue = "";
    }
    function Og(e) {
      ps(e, !1);
    }
    function Rg(e, t) {
      t = t[DT], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function _g(e, t) {
      e.nodeValue = t;
    }
    function Df(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Df(a), N(a);
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
    function zg(e, t, a) {
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
    function Mg(e, t) {
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
          if (t === m0 || t === Yv)
            return null;
        }
      }
      return e;
    }
    function Cg(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[pi(f.name)] = f.name.toLowerCase() === "style" ? oc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? e.data === Fs ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Ug(e, t, a) {
      return a === null || a[AT] !== !0 ? (e.nodeValue === t ? e = null : (t = Fn(t), e = Fn(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function zf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === m0 || a === Yv) {
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
            a !== m0 && a !== Yv || t++;
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
    function vi(e, t, a, i, o) {
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
    function ju(e, t, a, i) {
      if (!a[Ei] && ue(a)) {
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
    function Si(e) {
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
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = oo(a.href), t = He(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = oo(a.href);
            var f = He(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: ed, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              Ss(e)
            )) && !f._p && (d.instance = f, d.state.loading = p0 | Fu), !Iu.has(e))) {
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
              Iu.set(e, h), f || Hg(
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
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = fo(a), t = He(o).hoistableScripts, i = t.get(a), i || (i = {
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
    function Dh(e) {
      return Pe({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Hg(e, t, a, i) {
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
    function zh(e, t, a) {
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
              return t.state.loading |= Fu, t.instance = f, ge(f), f;
            i = Dh(a), (o = Iu.get(o)) && up(i, o), f = (e.ownerDocument || e).createElement("link"), ge(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), It(f, "link", i), t.state.loading |= Fu, Mf(f, a.precedence, e), t.instance = f;
          case "script":
            return f = fo(a.src), (o = e.querySelector(
              bs(f)
            )) ? (t.instance = o, ge(o), o) : (i = a, (o = Iu.get(f)) && (i = Pe({}, a), ip(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), ge(o), It(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & Fu) === ed && (i = t.instance, t.state.loading |= Fu, Mf(i, a.precedence, e));
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
      if (Gv === null) {
        var i = /* @__PURE__ */ new Map(), o = Gv = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = Gv, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
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
    function Ng(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function xg(e, t, a) {
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
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = dg(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
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
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & Fu) === ed) {
        if (a.instance === null) {
          var o = oo(i.href), f = t.querySelector(
            Ss(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Uf.bind(e), t.then(e, e)), a.state.loading |= Fu, a.instance = f, ge(f);
            return;
          }
          f = t.ownerDocument || t, i = Dh(i), (o = Iu.get(o)) && up(i, o), f = f.createElement("link"), ge(f);
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
        0 < e.imgBytes && bS === 0 && (bS = 125 * hg() * HT);
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
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Lv = /* @__PURE__ */ new Map(), t.forEach(op, e), Lv = null, Uf.call(e));
    }
    function op(e, t) {
      if (!(t.state.loading & Fu)) {
        var a = Lv.get(e);
        if (a) var i = a.get(ES);
        else {
          a = /* @__PURE__ */ new Map(), Lv.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(ES, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(ES, o), a.set(d, o), this.count++, i = Uf.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= Fu;
      }
    }
    function Ts(e, t, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Ps, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = xo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xo(0), this.hiddenUpdates = xo(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function As(e, t, a, i, o, f, d, h, y, p, z, U) {
      return e = new Ts(
        e,
        t,
        a,
        d,
        y,
        p,
        z,
        U,
        h
      ), t = lT, f === !0 && (t |= Ba | Ti), t |= et, f = R(3, null, null, t), e.current = f, f.stateNode = e, t = zd(), Yc(t), e.pooledCache = t, Yc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, ft(f), e;
    }
    function Bg(e) {
      return e ? (e = $f, e) : $f;
    }
    function Ch(e, t, a, i, o, f) {
      if (zl && typeof zl.onScheduleFiberRoot == "function")
        try {
          zl.onScheduleFiberRoot(yo, i, a);
        } catch (d) {
          Yu || (Yu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = Bg(o), i.context === null ? i.context = o : i.pendingContext = o, qu && xa !== null && !_E && (_E = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        he(xa) || "Unknown"
      )), i = Rl(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = Su(e, i, t), a !== null && (pu(t, "root.render()", null), qe(a, e, t), En(a, e, t));
    }
    function jg(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function fp(e, t) {
      jg(e, t), (e = e.alternate) && jg(e, t);
    }
    function rp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = la(e, 67108864);
        t !== null && qe(t, e, 67108864), fp(e, 67108864);
      }
    }
    function sp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = na(e);
        t = dn(t);
        var a = la(e, t);
        a !== null && qe(a, e, t), fp(e, t);
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
      if (Qv) {
        var o = Uh(i);
        if (o === null)
          kn(
            e,
            t,
            i,
            Vv,
            a
          ), Nh(e, i);
        else if (qg(
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
                    var d = ou(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - Wl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      Ca(f), (pt & (Pl | uu)) === fa && (_v = Gl() + eE, Hu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = la(f, 2), h !== null && qe(h, f, 2), tn(), fp(f, 2);
              }
            if (f = Uh(i), f === null && kn(
              e,
              t,
              i,
              Vv,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          kn(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function Uh(e) {
      return e = Nn(e), mp(e);
    }
    function mp(e) {
      if (Vv = null, e = le(e), e !== null) {
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
      return Vv = e, null;
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
            case Qg:
              return ia;
            case Qh:
              return mc;
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
    function rc(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = ue(t), t !== null && rp(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function qg(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return rr = rc(
            rr,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return sr = rc(
            sr,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return dr = rc(
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
            rc(
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
            rc(
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
      var t = le(e.target);
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
    function Yg(e) {
      Zv !== e && (Zv = e, gl.unstable_scheduleCallback(
        gl.unstable_NormalPriority,
        function() {
          Zv === e && (Zv = null);
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
            }, Object.freeze(a), si(
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
            d || Yg(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Ra] || null)
                h = d.formAction;
              else if (mp(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), Yg(a);
          }
        }
    }
    function wg() {
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
    function In(e) {
      this._internalRoot = e;
    }
    function gp(e) {
      e[Ei] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var gl = o2(), Rs = Om(), f1 = f2(), Pe = Object.assign, Gg = /* @__PURE__ */ Symbol.for("react.element"), Rn = /* @__PURE__ */ Symbol.for("react.transitional.element"), sc = /* @__PURE__ */ Symbol.for("react.portal"), Nf = /* @__PURE__ */ Symbol.for("react.fragment"), Oa = /* @__PURE__ */ Symbol.for("react.strict_mode"), _s = /* @__PURE__ */ Symbol.for("react.profiler"), Bh = /* @__PURE__ */ Symbol.for("react.consumer"), Pn = /* @__PURE__ */ Symbol.for("react.context"), xf = /* @__PURE__ */ Symbol.for("react.forward_ref"), so = /* @__PURE__ */ Symbol.for("react.suspense"), Na = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ds = /* @__PURE__ */ Symbol.for("react.memo"), ua = /* @__PURE__ */ Symbol.for("react.lazy"), eu = /* @__PURE__ */ Symbol.for("react.activity"), r1 = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Lg = Symbol.iterator, Bf = /* @__PURE__ */ Symbol.for("react.client.reference"), Tl = Array.isArray, X = Rs.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ot = f1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, s1 = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), vp = [], Sp = [], bi = -1, dc = qt(null), jf = qt(null), an = qt(null), hc = qt(null), qf = 0, Xg, ho, Yf, bp, zs, jh, qh;
    Ce.__reactDisabledLog = !0;
    var wf, Ep, Yh = !1, Tp = new (typeof WeakMap == "function" ? WeakMap : Map)(), xa = null, qu = !1, nn = Object.prototype.hasOwnProperty, Ap = gl.unstable_scheduleCallback, wh = gl.unstable_cancelCallback, Gh = gl.unstable_shouldYield, Lh = gl.unstable_requestPaint, Gl = gl.unstable_now, Ms = gl.unstable_getCurrentPriorityLevel, Op = gl.unstable_ImmediatePriority, Xh = gl.unstable_UserBlockingPriority, mo = gl.unstable_NormalPriority, Qg = gl.unstable_LowPriority, Qh = gl.unstable_IdlePriority, Rp = gl.log, Vg = gl.unstable_setDisableYieldValue, yo = null, zl = null, Yu = !1, wu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Wl = Math.clz32 ? Math.clz32 : Ui, _p = Math.log, Vh = Math.LN2, Gf = 256, Cs = 262144, Lf = 4194304, Ml = 2, Fl = 8, ia = 32, mc = 268435456, _n = Math.random().toString(36).slice(2), Pt = "__reactFiber$" + _n, Ra = "__reactProps$" + _n, Ei = "__reactContainer$" + _n, po = "__reactEvents$" + _n, d1 = "__reactListeners$" + _n, Zg = "__reactHandles$" + _n, Us = "__reactResources$" + _n, Xf = "__reactMarker$" + _n, Jg = /* @__PURE__ */ new Set(), Gu = {}, Qf = {}, Kg = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Vf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Dp = {}, Zh = {}, Jh = /[\n"\\]/g, zp = !1, $g = !1, Hs = !1, l = !1, n = !1, u = !1, c = ["value", "defaultValue"], r = !1, s = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), v = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), O = v.concat(["button"]), Y = "dd dt li option optgroup p rp rt".split(" "), Z = {
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
    }, Q = /([A-Z])/g, de = /^ms-/, Ue = /^(?:webkit|moz|o)[A-Z]/, xt = /^-ms-/, x = /-(.)/g, M = /;\s*$/, j = {}, $ = {}, Re = !1, yt = !1, ve = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Ze = "http://www.w3.org/1998/Math/MathML", We = "http://www.w3.org/2000/svg", bt = /* @__PURE__ */ new Map([
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
    ]), tu = {
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
    }, kg = {
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
    ), zS = !1, un = {}, MS = /^on./, p2 = /^on[^A-Z]/, g2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), v2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), S2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Mp = null, $h = null, kh = null, h1 = !1, yc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m1 = !1;
    if (yc)
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
    var Zf = null, y1 = null, Wg = null, Ns = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Fg = Nl(Ns), Up = Pe({}, Ns, { view: 0, detail: 0 }), b2 = Nl(Up), p1, g1, Hp, Ig = Pe({}, Up, {
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
    }), CS = Nl(Ig), E2 = Pe({}, Ig, { dataTransfer: 0 }), T2 = Nl(E2), A2 = Pe({}, Up, { relatedTarget: 0 }), v1 = Nl(A2), O2 = Pe({}, Ns, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), R2 = Nl(O2), _2 = Pe({}, Ns, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), D2 = Nl(_2), z2 = Pe({}, Ns, { data: 0 }), US = Nl(
      z2
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
    }), x2 = Nl(N2), B2 = Pe({}, Ig, {
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
    }), w2 = Nl(Y2), G2 = Pe({}, Ig, {
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
    }), Q2 = Nl(X2), V2 = [9, 13, 27, 32], NS = 229, S1 = yc && "CompositionEvent" in window, Np = null;
    yc && "documentMode" in document && (Np = document.documentMode);
    var Z2 = yc && "TextEvent" in window && !Np, xS = yc && (!S1 || Np && 8 < Np && 11 >= Np), BS = 32, jS = String.fromCharCode(BS), qS = !1, Wh = !1, J2 = {
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
    yc && (YS = gd("input") && (!document.documentMode || 9 < document.documentMode));
    var cn = typeof Object.is == "function" ? Object.is : vd, K2 = yc && "documentMode" in document && 11 >= document.documentMode, Fh = null, b1 = null, jp = null, E1 = !1, Ih = {
      animationend: Cc("Animation", "AnimationEnd"),
      animationiteration: Cc("Animation", "AnimationIteration"),
      animationstart: Cc("Animation", "AnimationStart"),
      transitionrun: Cc("Transition", "TransitionRun"),
      transitionstart: Cc("Transition", "TransitionStart"),
      transitioncancel: Cc("Transition", "TransitionCancel"),
      transitionend: Cc("Transition", "TransitionEnd")
    }, T1 = {}, wS = {};
    yc && (wS = document.createElement("div").style, "AnimationEvent" in window || (delete Ih.animationend.animation, delete Ih.animationiteration.animation, delete Ih.animationstart.animation), "TransitionEvent" in window || delete Ih.transitionend.transition);
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
    }, P2 = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", Pg = 0, R1 = 1, _1 = 2, D1 = 3, ev = "– ", tv = "+ ", KS = "  ", el = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Lu = "Components ⚛", dt = "Scheduler ⚛", mt = "Blocking", Jf = !1, go = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Lu
    }, Kf = {
      start: -0,
      end: -0,
      detail: { devtools: go }
    }, eT = ["Changed Props", ""], $S = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", tT = ["Changed Props", $S], qp = 1, vo = 2, Xu = [], Ph = 0, z1 = 0, $f = {};
    Object.freeze($f);
    var Qu = null, em = null, je = 0, lT = 1, et = 2, Ba = 8, Ti = 16, aT = 32, kS = !1;
    try {
      var WS = Object.preventExtensions({});
    } catch {
      kS = !0;
    }
    var M1 = /* @__PURE__ */ new WeakMap(), tm = [], lm = 0, lv = null, Yp = 0, Vu = [], Zu = 0, xs = null, So = 1, bo = "", _a = null, tl = null, st = !1, pc = !1, lu = null, kf = null, Ju = !1, C1 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), U1 = qt(null), H1 = qt(null), FS = {}, av = null, am = null, nm = !1, nT = typeof AbortController < "u" ? AbortController : function() {
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
      $$typeof: Pn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Xl = gl.unstable_now, nv = console.createTask ? console.createTask : function() {
      return null;
    }, wp = 1, uv = 2, ca = -0, Wf = -0, Eo = -0, To = null, on = -1.1, Bs = -0, sl = -0, ze = -1.1, Ne = -1.1, il = null, vl = !1, js = -0, gc = -1.1, Gp = null, Ff = 0, N1 = null, x1 = null, qs = -1.1, Lp = null, um = -1.1, iv = -1.1, Ao = -0, Oo = -1.1, Ku = -1.1, B1 = 0, Xp = null, IS = null, PS = null, If = -1.1, Ys = null, Pf = -1.1, cv = -1.1, eb = -0, tb = -0, ov = 0, cT = null, lb = 0, Qp = -1.1, fv = !1, rv = !1, Vp = null, j1 = 0, ws = 0, im = null, ab = X.S;
    X.S = function(e, t) {
      if (Ib = Gl(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > Oo && 0 > Ku) {
          Oo = Xl();
          var a = _f(), i = Bu();
          (a !== Pf || i !== Ys) && (Pf = -1.1), If = a, Ys = i;
        }
        ni(e, t);
      }
      ab !== null && ab(e, t);
    };
    var Gs = qt(null), Ai = {
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
    Ai.recordUnsafeLifecycleWarnings = function(e, t) {
      Ls.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Zp.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillMount == "function" && Jp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Kp.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillReceiveProps == "function" && $p.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && kp.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillUpdate == "function" && Wp.push(e));
    }, Ai.flushPendingUnsafeLifecycleWarnings = function() {
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
    var sv = /* @__PURE__ */ new Map(), nb = /* @__PURE__ */ new Set();
    Ai.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & Ba && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !nb.has(e.type) && (i = sv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], sv.set(a, i)), i.push(e));
    }, Ai.flushLegacyContextWarning = function() {
      sv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(he(o) || "Component"), nb.add(o.type);
          });
          var i = B(a);
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
    }, Ai.discardPendingWarnings = function() {
      Zp = [], Jp = [], Kp = [], $p = [], kp = [], Wp = [], sv = /* @__PURE__ */ new Map();
    };
    var ub = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = qu;
        qu = !0;
        try {
          return e(t, a);
        } finally {
          qu = i;
        }
      }
    }, q1 = ub.react_stack_bottom_frame.bind(ub), ib = {
      react_stack_bottom_frame: function(e) {
        var t = qu;
        qu = !0;
        try {
          return e.render();
        } finally {
          qu = t;
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
    ), dv = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), hv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Xs = null, Fp = !1, om = null, Ip = 0, tt = null, G1, gb = G1 = !1, vb = {}, Sb = {}, bb = {};
    be = function(e, t, a) {
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
    var Qs = Bl(!0), Eb = Bl(!1), Tb = 0, Ab = 1, Ob = 2, L1 = 3, er = !1, Rb = !1, X1 = null, Q1 = !1, fm = qt(null), mv = qt(0), au = qt(null), $u = null, rm = 1, Pp = 2, Cl = qt(0), yv = 0, ku = 1, fn = 2, nu = 4, rn = 8, sm, _b = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), V1 = /* @__PURE__ */ new Set(), zb = /* @__PURE__ */ new Set(), Ro = 0, we = null, Xt = null, Ql = null, pv = !1, dm = !1, Vs = !1, gv = 0, e0 = 0, _o = null, dT = 0, hT = 25, L = null, Wu = null, Do = -1, t0 = !1, l0 = {
      readContext: Tt,
      use: oi,
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
    var Z1 = null, Mb = null, J1 = null, Cb = null, vc = null, Oi = null, vv = null;
    Z1 = {
      readContext: function(e) {
        return Tt(e);
      },
      use: oi,
      useCallback: function(e, t) {
        return L = "useCallback", Ye(), ci(t), wd(e, t);
      },
      useContext: function(e) {
        return L = "useContext", Ye(), Tt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", Ye(), ci(t), $c(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", Ye(), ci(a), Au(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        L = "useInsertionEffect", Ye(), ci(t), Pi(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", Ye(), ci(t), pa(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", Ye(), ci(t);
        var a = X.H;
        X.H = vc;
        try {
          return ga(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", Ye();
        var i = X.H;
        X.H = vc;
        try {
          return tf(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function(e) {
        return L = "useRef", Ye(), Yd(e);
      },
      useState: function(e) {
        L = "useState", Ye();
        var t = X.H;
        X.H = vc;
        try {
          return ki(e);
        } finally {
          X.H = t;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", Ye();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", Ye(), cf(e, t);
      },
      useTransition: function() {
        return L = "useTransition", Ye(), ec();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", Ye(), lf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", Ye(), Kr();
      },
      useFormState: function(e, t) {
        return L = "useFormState", Ye(), jr(), Wa(e, t);
      },
      useActionState: function(e, t) {
        return L = "useActionState", Ye(), Wa(e, t);
      },
      useOptimistic: function(e) {
        return L = "useOptimistic", Ye(), Kc(e);
      },
      useHostTransitionStatus: di,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", Ye(), Gd();
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", Ye(), Zr(e);
      }
    }, Mb = {
      readContext: function(e) {
        return Tt(e);
      },
      use: oi,
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
        return L = "useImperativeHandle", W(), Au(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        L = "useInsertionEffect", W(), Pi(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", W(), pa(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", W();
        var a = X.H;
        X.H = vc;
        try {
          return ga(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", W();
        var i = X.H;
        X.H = vc;
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
        X.H = vc;
        try {
          return ki(e);
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
        return L = "useTransition", W(), ec();
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
      useHostTransitionStatus: di,
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
      use: oi,
      useCallback: function(e, t) {
        return L = "useCallback", W(), Vn(e, t);
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
        return L = "useLayoutEffect", W(), _l(4, nu, e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", W();
        var a = X.H;
        X.H = Oi;
        try {
          return Ft(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", W();
        var i = X.H;
        X.H = Oi;
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
        X.H = Oi;
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
        return L = "useDeferredValue", W(), Ou(e, t);
      },
      useTransition: function() {
        return L = "useTransition", W(), K0();
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
        return L = "useFormState", W(), jr(), Fi(e);
      },
      useActionState: function(e) {
        return L = "useActionState", W(), Fi(e);
      },
      useOptimistic: function(e, t) {
        return L = "useOptimistic", W(), Xr(e, t);
      },
      useHostTransitionStatus: di,
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
      use: oi,
      useCallback: function(e, t) {
        return L = "useCallback", W(), Vn(e, t);
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
        return L = "useLayoutEffect", W(), _l(4, nu, e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", W();
        var a = X.H;
        X.H = vv;
        try {
          return Ft(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", W();
        var i = X.H;
        X.H = vv;
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
        X.H = vv;
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
        return L = "useFormState", W(), jr(), Ii(e);
      },
      useActionState: function(e) {
        return L = "useActionState", W(), Ii(e);
      },
      useOptimistic: function(e, t) {
        return L = "useOptimistic", W(), Qr(e, t);
      },
      useHostTransitionStatus: di,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", W(), _t().memoizedState;
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", W(), nf(e);
      }
    }, vc = {
      readContext: function(e) {
        return P(), Tt(e);
      },
      use: function(e) {
        return F(), oi(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", F(), Ye(), wd(e, t);
      },
      useContext: function(e) {
        return L = "useContext", F(), Ye(), Tt(e);
      },
      useEffect: function(e, t) {
        return L = "useEffect", F(), Ye(), $c(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return L = "useImperativeHandle", F(), Ye(), Au(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        L = "useInsertionEffect", F(), Ye(), Pi(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return L = "useLayoutEffect", F(), Ye(), pa(e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", F(), Ye();
        var a = X.H;
        X.H = vc;
        try {
          return ga(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", F(), Ye();
        var i = X.H;
        X.H = vc;
        try {
          return tf(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function(e) {
        return L = "useRef", F(), Ye(), Yd(e);
      },
      useState: function(e) {
        L = "useState", F(), Ye();
        var t = X.H;
        X.H = vc;
        try {
          return ki(e);
        } finally {
          X.H = t;
        }
      },
      useDebugValue: function() {
        L = "useDebugValue", F(), Ye();
      },
      useDeferredValue: function(e, t) {
        return L = "useDeferredValue", F(), Ye(), cf(e, t);
      },
      useTransition: function() {
        return L = "useTransition", F(), Ye(), ec();
      },
      useSyncExternalStore: function(e, t, a) {
        return L = "useSyncExternalStore", F(), Ye(), lf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return L = "useId", F(), Ye(), Kr();
      },
      useFormState: function(e, t) {
        return L = "useFormState", F(), Ye(), Wa(e, t);
      },
      useActionState: function(e, t) {
        return L = "useActionState", F(), Ye(), Wa(e, t);
      },
      useOptimistic: function(e) {
        return L = "useOptimistic", F(), Ye(), Kc(e);
      },
      useMemoCache: function(e) {
        return F(), $a(e);
      },
      useHostTransitionStatus: di,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", Ye(), Gd();
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", F(), Ye(), Zr(e);
      }
    }, Oi = {
      readContext: function(e) {
        return P(), Tt(e);
      },
      use: function(e) {
        return F(), oi(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", F(), W(), Vn(e, t);
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
        return L = "useLayoutEffect", F(), W(), _l(4, nu, e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", F(), W();
        var a = X.H;
        X.H = Oi;
        try {
          return Ft(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", F(), W();
        var i = X.H;
        X.H = Oi;
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
        X.H = Oi;
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
        return L = "useDeferredValue", F(), W(), Ou(e, t);
      },
      useTransition: function() {
        return L = "useTransition", F(), W(), K0();
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
        return L = "useFormState", F(), W(), Fi(e);
      },
      useActionState: function(e) {
        return L = "useActionState", F(), W(), Fi(e);
      },
      useOptimistic: function(e, t) {
        return L = "useOptimistic", F(), W(), Xr(e, t);
      },
      useMemoCache: function(e) {
        return F(), $a(e);
      },
      useHostTransitionStatus: di,
      useCacheRefresh: function() {
        return L = "useCacheRefresh", W(), _t().memoizedState;
      },
      useEffectEvent: function(e) {
        return L = "useEffectEvent", F(), W(), nf(e);
      }
    }, vv = {
      readContext: function(e) {
        return P(), Tt(e);
      },
      use: function(e) {
        return F(), oi(e);
      },
      useCallback: function(e, t) {
        return L = "useCallback", F(), W(), Vn(e, t);
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
        return L = "useLayoutEffect", F(), W(), _l(4, nu, e, t);
      },
      useMemo: function(e, t) {
        L = "useMemo", F(), W();
        var a = X.H;
        X.H = Oi;
        try {
          return Ft(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        L = "useReducer", F(), W();
        var i = X.H;
        X.H = Oi;
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
        X.H = Oi;
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
        return L = "useFormState", F(), W(), Ii(e);
      },
      useActionState: function(e) {
        return L = "useActionState", F(), W(), Ii(e);
      },
      useOptimistic: function(e, t) {
        return L = "useOptimistic", F(), W(), Qr(e, t);
      },
      useMemoCache: function(e) {
        return F(), $a(e);
      },
      useHostTransitionStatus: di,
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
        o.payload = t, a != null && (Ic(a), o.callback = a), t = Su(e, o, i), t !== null && (pu(i, "this.setState()", e), qe(t, e, i), En(t, e, i));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = na(e), o = Rl(i);
        o.tag = Ab, o.payload = t, a != null && (Ic(a), o.callback = a), t = Su(e, o, i), t !== null && (pu(i, "this.replaceState()", e), qe(t, e, i), En(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = na(e), i = Rl(a);
        i.tag = Ob, t != null && (Ic(t), i.callback = t), t = Su(e, i, a), t !== null && (pu(a, "this.forceUpdate()", e), qe(t, e, a), En(t, e, a));
      }
    }, hm = null, $1 = null, k1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Vl = !1, Xb = {}, Qb = {}, Vb = {}, Zb = {}, mm = !1, Jb = {}, Sv = {}, W1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Kb = !1, $b = null;
    $b = /* @__PURE__ */ new Set();
    var zo = !1, Zl = !1, F1 = !1, kb = typeof WeakSet == "function" ? WeakSet : Set, oa = null, ym = null, pm = null, Jl = null, Dn = !1, Ri = null, Il = !1, a0 = 8192, mT = {
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
    var yT = [], pT = typeof WeakMap == "function" ? WeakMap : Map, fa = 0, Pl = 2, uu = 4, Mo = 0, u0 = 1, Zs = 2, bv = 3, tr = 4, Ev = 6, Wb = 5, pt = fa, Qt = null, it = null, lt = 0, zn = 0, Tv = 1, Js = 2, i0 = 3, Fb = 4, I1 = 5, c0 = 6, Av = 7, P1 = 8, Ks = 9, Bt = zn, iu = null, lr = !1, gm = !1, eS = !1, Sc = 0, dl = Mo, ar = 0, nr = 0, tS = 0, Mn = 0, $s = 0, o0 = null, sn = null, Ov = !1, Rv = 0, Ib = 0, Pb = 300, _v = 1 / 0, eE = 500, f0 = null, Al = null, ur = null, Dv = 0, lS = 1, aS = 2, tE = 3, ir = 0, lE = 1, aE = 2, nE = 3, uE = 4, zv = 5, Kl = 0, cr = null, vm = null, _i = 0, nS = 0, uS = -0, iS = null, iE = null, cE = null, Di = Dv, oE = null, gT = 50, r0 = 0, cS = null, oS = !1, Mv = !1, vT = 50, ks = 0, s0 = null, Sm = !1, Cv = null, fE = !1, rE = /* @__PURE__ */ new Set(), ST = {}, Uv = null, bm = null, fS = !1, rS = !1, Hv = !1, sS = !1, or = 0, dS = {};
    (function() {
      for (var e = 0; e < A1.length; e++) {
        var t = A1[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), xn(a, "on" + t);
      }
      xn(GS, "onAnimationEnd"), xn(LS, "onAnimationIteration"), xn(XS, "onAnimationStart"), xn("dblclick", "onDoubleClick"), xn("focusin", "onFocus"), xn("focusout", "onBlur"), xn($2, "onTransitionRun"), xn(k2, "onTransitionStart"), xn(W2, "onTransitionCancel"), xn(QS, "onTransitionEnd");
    })(), Ve("onMouseEnter", ["mouseout", "mouseover"]), Ve("onMouseLeave", ["mouseout", "mouseover"]), Ve("onPointerEnter", ["pointerout", "pointerover"]), Ve("onPointerLeave", ["pointerout", "pointerover"]), nt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), nt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), nt("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), nt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), nt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), nt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var d0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), hS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(d0)
    ), Nv = "_reactListening" + Math.random().toString(36).slice(2), sE = !1, dE = !1, xv = !1, hE = !1, Bv = !1, jv = !1, mE = !1, qv = {}, bT = /\r\n?/g, ET = /\u0000|\uFFFD/g, Ws = "http://www.w3.org/1999/xlink", mS = "http://www.w3.org/XML/1998/namespace", TT = "javascript:throw new Error('React form unexpectedly submitted.')", AT = "suppressHydrationWarning", Fs = "&", Yv = "/&", h0 = "$", m0 = "/$", fr = "$?", Is = "$~", Em = "$!", OT = "html", RT = "body", _T = "head", yS = "F!", yE = "F", pE = "loading", DT = "style", Co = 0, Tm = 1, wv = 2, pS = null, gS = null, gE = { dialog: !0, webview: !0 }, vS = null, y0 = void 0, vE = typeof setTimeout == "function" ? setTimeout : void 0, zT = typeof clearTimeout == "function" ? clearTimeout : void 0, Ps = -1, SE = typeof Promise == "function" ? Promise : void 0, MT = typeof queueMicrotask == "function" ? queueMicrotask : typeof SE < "u" ? function(e) {
      return SE.resolve(null).then(e).catch(yg);
    } : vE, SS = null, ed = 0, p0 = 1, bE = 2, EE = 3, Fu = 4, Iu = /* @__PURE__ */ new Map(), TE = /* @__PURE__ */ new Set(), Uo = Ot.d;
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
          Iu.has(f) || (e = Pe(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), Iu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
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
          if (!Iu.has(f) && (e = Pe({ rel: "modulepreload", href: e }, t), Iu.set(f, e), a.querySelector(o) === null)) {
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
          var i = He(a).hoistableScripts, o = fo(e), f = i.get(o);
          f || (f = a.querySelector(
            bs(o)
          ), f || (e = Pe({ src: e, async: !0 }, t), (t = Iu.get(o)) && ip(e, t), f = a.createElement("script"), ge(f), It(f, "link", e), a.head.appendChild(f)), f = {
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
          var o = He(i).hoistableStyles, f = oo(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: ed, preload: null };
            if (d = i.querySelector(
              Ss(f)
            ))
              h.loading = p0 | Fu;
            else {
              e = Pe(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = Iu.get(f)) && up(e, a);
              var y = d = i.createElement("link");
              ge(y), It(y, "link", e), y._p = new Promise(function(p, z) {
                y.onload = p, y.onerror = z;
              }), y.addEventListener("load", function() {
                h.loading |= p0;
              }), y.addEventListener("error", function() {
                h.loading |= bE;
              }), h.loading |= Fu, Mf(d, t, i);
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
          var i = He(a).hoistableScripts, o = fo(e), f = i.get(o);
          f || (f = a.querySelector(
            bs(o)
          ), f || (e = Pe({ src: e, async: !0, type: "module" }, t), (t = Iu.get(o)) && ip(e, t), f = a.createElement("script"), ge(f), It(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Am = typeof document > "u" ? null : document, Gv = null, CT = 6e4, UT = 800, HT = 500, bS = 0, ES = null, Lv = null, td = s1, g0 = {
      $$typeof: Pn,
      Provider: null,
      Consumer: null,
      _currentValue: td,
      _currentValue2: td,
      _threadCount: 0
    }, AE = "%c%s%c", OE = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", RE = "", Xv = " ", NT = Function.prototype.bind, _E = !1, DE = null, zE = null, ME = null, CE = null, UE = null, HE = null, NE = null, xE = null, BE = null, jE = null;
    DE = function(e, t, a, i) {
      t = b(e, t), t !== null && (a = H(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Pe({}, e.memoizedProps), a = la(e, 2), a !== null && qe(a, e, 2));
    }, zE = function(e, t, a) {
      t = b(e, t), t !== null && (a = ce(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Pe({}, e.memoizedProps), a = la(e, 2), a !== null && qe(a, e, 2));
    }, ME = function(e, t, a, i) {
      t = b(e, t), t !== null && (a = ae(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Pe({}, e.memoizedProps), a = la(e, 2), a !== null && qe(a, e, 2));
    }, CE = function(e, t, a) {
      e.pendingProps = H(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = la(e, 2), t !== null && qe(t, e, 2);
    }, UE = function(e, t) {
      e.pendingProps = ce(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = la(e, 2), t !== null && qe(t, e, 2);
    }, HE = function(e, t, a) {
      e.pendingProps = ae(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = la(e, 2), t !== null && qe(t, e, 2);
    }, NE = function(e) {
      var t = la(e, 2);
      t !== null && qe(t, e, 2);
    }, xE = function(e) {
      var t = No(), a = la(e, t);
      a !== null && qe(a, e, t);
    }, BE = function(e) {
      pe = e;
    }, jE = function(e) {
      fe = e;
    };
    var Qv = !0, Vv = null, TS = !1, rr = null, sr = null, dr = null, v0 = /* @__PURE__ */ new Map(), S0 = /* @__PURE__ */ new Map(), hr = [], xT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Zv = null;
    if (In.prototype.render = pp.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : at(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = na(i);
      Ch(i, o, a, t, null, null);
    }, In.prototype.unmount = pp.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (pt & (Pl | uu)) !== fa && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Ch(e.current, 2, null, e, null, null), tn(), t[Ei] = null;
      }
    }, In.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Hi();
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
      return e.overrideHookState = DE, e.overrideHookStateDeletePath = zE, e.overrideHookStateRenamePath = ME, e.overrideProps = CE, e.overridePropsDeletePath = UE, e.overridePropsRenamePath = HE, e.scheduleUpdate = NE, e.scheduleRetry = xE, e.setErrorHandler = BE, e.setSuspenseHandler = jE, e.scheduleRefresh = Ae, e.scheduleRoot = I, e.setRefreshHandler = Je, e.getCurrentFiber = Nt, yr(e);
    })() && yc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var qE = window.location.protocol;
      /^(https?|file):$/.test(qE) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (qE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    A0.createRoot = function(e, t) {
      if (!at(e))
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
        wg
      ), e[Ei] = t.current, cc(e), new pp(t);
    }, A0.hydrateRoot = function(e, t, a) {
      if (!at(e))
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
        wg
      ), t.context = Bg(null), a = t.current, i = na(a), i = dn(i), o = Rl(i), o.callback = null, Su(a, o, i), pu(i, "hydrateRoot()", null), a = i, t.current.lanes = a, Un(t, a), Ca(t), e[Ei] = t.current, cc(e), new In(t);
    }, A0.version = "19.2.8", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), A0;
}
var IE;
function KT() {
  if (IE) return $v.exports;
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
  return process.env.NODE_ENV === "production" ? (b(), $v.exports = ZT()) : $v.exports = JT(), $v.exports;
}
var $T = KT();
const _S = "hana.plugin.ui", DS = 1, kT = "X-Hana-Plugin-Surface-Session", WT = "pluginSurfaceSession", r2 = {
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
      code: r2.BAD_MESSAGE,
      message: b
    }
  };
}
function e2(b) {
  if (!PE(b))
    return mr("Plugin UI messages must be objects.");
  if (b.protocol !== _S)
    return mr("Plugin UI message protocol is missing or invalid.");
  if (b.version !== DS)
    return {
      ok: !1,
      error: {
        code: r2.UNSUPPORTED_VERSION,
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
  const ae = new URLSearchParams(b.location.search).get("hana-host-origin");
  return ae || (eA(b.document.referrer) ?? "*");
}
function lA(b) {
  const H = new URLSearchParams(b.location.search);
  return {
    theme: H.get("hana-theme") ?? void 0,
    cssUrl: H.get("hana-css") ?? void 0
  };
}
function a2(b, H, ae) {
  return !(b.source !== H || ae !== "*" && b.origin !== ae);
}
function aA(b) {
  return typeof b == "string" ? { url: b } : b;
}
function nA(b) {
  return typeof b == "string" ? { text: b } : b;
}
function s2(b) {
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
  const ae = H.split("/");
  if (ae.some((_) => !_ || _ === "." || _ === ".." || _.startsWith(".")))
    throw new Error("Invalid plugin asset path.");
  return ae.map((_) => encodeURIComponent(_)).join("/");
}
function iA(b, H) {
  const ae = s2(b), _ = uA(H);
  return `${b.location.origin}/api/plugins/${encodeURIComponent(ae)}/assets/${_}`;
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
  const ae = H.replace(/^\/+/, "");
  if (!ae || ae.startsWith("./") || ae === "api/plugins" || ae.startsWith("api/plugins/"))
    throw new Error("Invalid plugin API path. Use a route path relative to the current plugin.");
  const _ = ae.indexOf("?"), ce = _ >= 0 ? ae.slice(0, _) : ae;
  if (!ce)
    throw new Error("Invalid plugin API path.");
  const fe = ce.split("/");
  for (const P of fe) {
    if (!P)
      throw new Error("Invalid plugin API path.");
    let V;
    try {
      V = decodeURIComponent(P);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (V === "." || V === ".." || V.includes("/") || V.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const pe = new URL(`http://hana.local/${ae}`);
  return `${fe.map((P) => encodeURIComponent(decodeURIComponent(P))).join("/")}${pe.search}`;
}
function d2(b, H) {
  const ae = s2(b), _ = oA(H);
  return `${b.location.origin}/api/plugins/${encodeURIComponent(ae)}/${_}`;
}
function fA(b, H, ae) {
  const _ = cA(b);
  if (!_)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const ce = b.fetch?.bind(b) ?? globalThis.fetch?.bind(globalThis);
  if (!ce)
    throw new Error("hana.api.fetch requires window.fetch.");
  const fe = ae ?? {}, pe = new Headers(fe.headers);
  return pe.set(kT, _), ce(d2(b, H), {
    ...fe,
    headers: pe
  });
}
function rA(b = {}) {
  const H = b.targetWindow ?? PT(), ae = b.parentWindow ?? H.parent, _ = tA(H, b.targetOrigin), ce = b.requestTimeoutMs ?? 1e4, fe = b.idFactory ?? IT;
  let pe = lA(H);
  const F = /* @__PURE__ */ new Set();
  function P(R) {
    ae.postMessage(R, _);
  }
  function V(R, I) {
    const Ae = {
      protocol: _S,
      version: DS,
      kind: "event",
      type: R
    };
    I !== void 0 && (Ae.payload = I), P(Ae);
  }
  function be(R) {
    if (!a2(R, ae, _))
      return;
    const I = e2(R.data);
    if (!I.ok)
      return;
    const Ae = I.value;
    if (Ae.kind !== "event" || Ae.type !== "hana.theme.changed" || typeof Ae.payload != "object" || Ae.payload === null)
      return;
    const Je = Ae.payload;
    pe = {
      theme: typeof Je.theme == "string" ? Je.theme : pe.theme,
      cssUrl: typeof Je.cssUrl == "string" ? Je.cssUrl : pe.cssUrl
    };
    for (const at of F)
      at(pe);
  }
  function B(R, I, Ae = {}) {
    const Je = fe(), at = Ae.timeoutMs ?? ce;
    return new Promise((Ie, cl) => {
      const Et = () => {
        H.removeEventListener("message", jt), H.clearTimeout(Vt);
      }, jt = (Me) => {
        if (!a2(Me, ae, _))
          return;
        const Xe = e2(Me.data);
        if (!Xe.ok)
          return;
        const ot = Xe.value;
        ot.id !== Je || ot.type !== R || (ot.kind === "response" && (Et(), Ie(ot.payload)), ot.kind === "error" && ot.error && (Et(), cl(new t2(ot.error))));
      }, Vt = H.setTimeout(() => {
        Et(), cl(new t2({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${R}.`
        }));
      }, at);
      H.addEventListener("message", jt);
      const Zt = {
        protocol: _S,
        version: DS,
        id: Je,
        kind: "request",
        type: R
      };
      I !== void 0 && (Zt.payload = I), P(Zt);
    });
  }
  return {
    ready(R) {
      V("hana.ready", R);
    },
    assets: {
      url(R) {
        return iA(H, R);
      }
    },
    api: {
      url(R) {
        return d2(H, R);
      },
      fetch(R, I) {
        return fA(H, R, I);
      }
    },
    ui: {
      resize(R) {
        V(ld.UI_RESIZE, R);
      }
    },
    theme: {
      getSnapshot() {
        return { ...pe };
      },
      subscribe(R) {
        return F.size === 0 && H.addEventListener("message", be), F.add(R), R({ ...pe }), () => {
          F.delete(R), F.size === 0 && H.removeEventListener("message", be);
        };
      }
    },
    host: {
      request: B
    },
    toast: {
      show(R, I) {
        return B(ld.TOAST_SHOW, R, I);
      }
    },
    external: {
      open(R, I) {
        return B(ld.EXTERNAL_OPEN, aA(R), I);
      }
    },
    clipboard: {
      writeText(R, I) {
        return B(ld.CLIPBOARD_WRITE_TEXT, nA(R), I);
      }
    },
    resources: {
      open(R, I) {
        return B(ld.RESOURCE_OPEN, R, I);
      },
      pick(R = {}, I) {
        return B(ld.RESOURCE_PICK, R, I);
      },
      requestAccess(R, I) {
        return B(ld.RESOURCE_REQUEST_ACCESS, R, I);
      }
    }
  };
}
let n2 = null;
function Cn() {
  return n2 ??= rA(), n2;
}
const Fv = {
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
    request(b, H, ae) {
      return Cn().host.request(b, H, ae);
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
function bc(...b) {
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
function dA({ mode: b = "inherit", theme: H, className: ae, style: _, children: ce, "data-testid": fe = "hana-plugin-theme", ...pe }) {
  const F = typeof H == "string" ? H : void 0, P = hA(b, H);
  return xe.jsx("div", { ...pe, "data-testid": fe, className: bc("hana-plugin-theme", ae), "data-hana-theme-mode": b, "data-hana-theme": b === "hana" ? F : void 0, style: { ...P, ..._ }, children: ce });
}
function hA(b, H) {
  if (b === "inherit")
    return {};
  const ae = mA(b, H), _ = {};
  for (const [ce, fe] of Object.entries(sA)) {
    const pe = ae?.[ce];
    pe && (_[fe] = pe);
  }
  return _;
}
function mA(b, H) {
  if (typeof H == "string")
    return u2[H];
  if (H)
    return H;
  if (b === "hana")
    return u2["warm-paper"];
}
const yA = zi.forwardRef(function({ variant: H = "secondary", size: ae = "md", loading: _ = !1, iconLeft: ce, iconRight: fe, disabled: pe, className: F, children: P, type: V = "button", ...be }, B) {
  return xe.jsxs("button", { ...be, ref: B, type: V, disabled: pe || _, className: bc("hana-plugin-button", `hana-plugin-button-${H}`, `hana-plugin-button-${ae}`, _ && "hana-plugin-button-loading", F), children: [_ ? xe.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : ce, P && xe.jsx("span", { className: "hana-plugin-button-label", children: P }), !_ && fe] });
});
zi.forwardRef(function({ label: H, size: ae = "md", variant: _ = "ghost", className: ce, children: fe, type: pe = "button", ...F }, P) {
  return xe.jsx("button", { ...F, ref: P, type: pe, "aria-label": H, title: F.title || H, className: bc("hana-plugin-icon-button", `hana-plugin-icon-button-${ae}`, `hana-plugin-icon-button-${_}`, ce), children: fe });
});
zi.forwardRef(function({ label: H, hint: ae, error: _, id: ce, className: fe, inputClassName: pe, ...F }, P) {
  const V = zi.useId(), be = ce || V;
  return xe.jsx(h2, { label: H, hint: ae, error: _, htmlFor: be, className: fe, children: xe.jsx("input", { ...F, ref: P, id: be, "aria-invalid": !!_, className: bc("hana-plugin-input", pe) }) });
});
zi.forwardRef(function({ label: H, hint: ae, error: _, id: ce, className: fe, textareaClassName: pe, rows: F = 4, ...P }, V) {
  const be = zi.useId(), B = ce || be;
  return xe.jsx(h2, { label: H, hint: ae, error: _, htmlFor: B, className: fe, children: xe.jsx("textarea", { ...P, ref: V, id: B, rows: F, "aria-invalid": !!_, className: bc("hana-plugin-textarea", pe) }) });
});
zi.forwardRef(function({ checked: H, onChange: ae, label: _, disabled: ce, className: fe, onClick: pe, type: F = "button", ...P }, V) {
  const be = typeof _ == "string" ? _ : P["aria-label"];
  return xe.jsxs("span", { className: bc("hana-plugin-switch-wrap", fe), children: [xe.jsx("button", { ...P, ref: V, type: F, role: "switch", "aria-checked": H, "aria-label": be, disabled: ce, className: bc("hana-plugin-switch", H && "hana-plugin-switch-on"), onClick: (B) => {
    pe?.(B), !B.defaultPrevented && !ce && ae?.(!H);
  }, children: xe.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), _ && xe.jsx("span", { className: "hana-plugin-switch-label", children: _ })] });
});
function h2({ label: b, hint: H, error: ae, htmlFor: _, className: ce, children: fe }) {
  return xe.jsxs("div", { className: bc("hana-plugin-field", ce), children: [b && xe.jsx("label", { className: "hana-plugin-field-label", htmlFor: _, children: b }), H && xe.jsx("div", { className: "hana-plugin-field-hint", children: H }), fe, ae && xe.jsx("div", { className: "hana-plugin-field-error", children: ae })] });
}
function pA({ title: b, description: H, actions: ae, footer: _, children: ce, className: fe, ...pe }) {
  return xe.jsxs("section", { ...pe, className: bc("hana-plugin-card", fe), children: [(b || H || ae) && xe.jsxs("header", { className: "hana-plugin-card-header", children: [xe.jsxs("div", { className: "hana-plugin-card-heading", children: [b && xe.jsx("h2", { className: "hana-plugin-card-title", children: b }), H && xe.jsx("p", { className: "hana-plugin-card-description", children: H })] }), ae && xe.jsx("div", { className: "hana-plugin-card-actions", children: ae })] }), xe.jsx("div", { className: "hana-plugin-card-body", children: ce }), _ && xe.jsx("footer", { className: "hana-plugin-card-footer", children: _ })] });
}
function RS({ icon: b, title: H, description: ae, action: _, className: ce, ...fe }) {
  return xe.jsxs("div", { ...fe, className: bc("hana-plugin-empty", ce), children: [b && xe.jsx("div", { className: "hana-plugin-empty-icon", children: b }), xe.jsx("div", { className: "hana-plugin-empty-title", children: H }), ae && xe.jsx("div", { className: "hana-plugin-empty-description", children: ae }), _ && xe.jsx("div", { className: "hana-plugin-empty-action", children: _ })] });
}
const i2 = {
  dataDir: null,
  indexHealthy: !1,
  warning: null,
  degraded: null,
  directories: []
};
function gA(b) {
  return `${b.dir}/${b.filename}`;
}
function vA(b) {
  const H = b ?? "", ae = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/.exec(H);
  return ae ? H.slice(ae[0].length) : H;
}
function SA() {
  const [b, H] = zi.useState(null), [ae, _] = zi.useState(/* @__PURE__ */ new Set()), [ce, fe] = zi.useState(/* @__PURE__ */ new Set());
  async function pe() {
    try {
      const R = await (await Fv.api.fetch("api/state")).json();
      H({ ...i2, ...R });
    } catch {
      H({ ...i2, warning: "无法连接插件运行时，请重载插件后重试" });
    }
  }
  zi.useEffect(() => {
    Fv.ready(), Fv.ui.resize({ height: 480 }), pe();
  }, []);
  function F(B) {
    _((R) => {
      const I = new Set(R);
      return I.has(B) ? I.delete(B) : I.add(B), I;
    });
  }
  function P(B) {
    fe((R) => {
      const I = new Set(R);
      return I.has(B) ? I.delete(B) : I.add(B), I;
    });
  }
  const V = b?.warning || b?.degraded || null;
  function be() {
    return b ? b.dataDir ? b.directories.some((R) => R.entries.length > 0) ? /* @__PURE__ */ xe.jsx("div", { className: "ps-shelf", children: b.directories.map((R) => {
      const I = ae.has(R.name);
      return /* @__PURE__ */ xe.jsxs("section", { className: "ps-dir", children: [
        /* @__PURE__ */ xe.jsxs(
          "button",
          {
            type: "button",
            className: "ps-dir-head",
            onClick: () => F(R.name),
            "aria-expanded": !I,
            children: [
              /* @__PURE__ */ xe.jsx("span", { className: `ps-dir-arrow${I ? " ps-dir-arrow-collapsed" : ""}`, children: "▾" }),
              /* @__PURE__ */ xe.jsx("span", { className: "ps-dir-name", title: R.name, children: R.name }),
              /* @__PURE__ */ xe.jsx("span", { className: "ps-dir-count", children: R.entries.length })
            ]
          }
        ),
        !I && /* @__PURE__ */ xe.jsx("div", { className: "ps-pills", children: R.entries.map((Ae) => {
          const Je = gA(Ae);
          return ce.has(Je) ? /* @__PURE__ */ xe.jsxs("div", { className: "ps-card", children: [
            /* @__PURE__ */ xe.jsx(
              "button",
              {
                type: "button",
                className: "ps-card-head",
                onClick: () => P(Je),
                title: "点击收起",
                children: /* @__PURE__ */ xe.jsx("span", { className: "ps-card-title", children: Ae.title })
              }
            ),
            /* @__PURE__ */ xe.jsx("pre", { className: "ps-card-body", children: vA(Ae.content) }),
            /* @__PURE__ */ xe.jsx(
              "button",
              {
                type: "button",
                className: "ps-card-close",
                onClick: () => P(Je),
                "aria-label": "收起",
                title: "收起",
                children: "×"
              }
            )
          ] }, Je) : /* @__PURE__ */ xe.jsx(
            "button",
            {
              type: "button",
              className: "ps-pill",
              onClick: () => P(Je),
              title: Ae.title,
              children: /* @__PURE__ */ xe.jsx("span", { className: "ps-pill-title", children: Ae.title })
            },
            Je
          );
        }) })
      ] }, R.name);
    }) }) : /* @__PURE__ */ xe.jsx(
      RS,
      {
        title: "架子上还没有词条",
        description: "在数据目录里创建 Markdown 文件，或通过工具写入第一个提示词。"
      }
    ) : /* @__PURE__ */ xe.jsx(
      RS,
      {
        title: "提示词架尚未初始化",
        description: "选择一个数据目录作为提示词库的存放位置，之后词条会自动出现在这里。",
        action: /* @__PURE__ */ xe.jsx(
          yA,
          {
            variant: "primary",
            onClick: () => Fv.toast.show({ message: "初始化向导将在后续版本提供", type: "info" }),
            children: "选择数据目录"
          }
        )
      }
    ) : /* @__PURE__ */ xe.jsx(RS, { title: "加载中…", description: "正在读取提示词架" });
  }
  return /* @__PURE__ */ xe.jsx(dA, { mode: "inherit", className: "plugin-panel", children: /* @__PURE__ */ xe.jsx(
    pA,
    {
      title: "PromptShelf",
      description: "提示词架：点胶囊展开预览，点标题栏或 × 收起。",
      footer: V ? /* @__PURE__ */ xe.jsx("span", { className: "ps-notice", children: V }) : void 0,
      children: be()
    }
  ) });
}
const c2 = document.getElementById("root");
c2 && $T.createRoot(c2).render(/* @__PURE__ */ xe.jsx(SA, {}));
