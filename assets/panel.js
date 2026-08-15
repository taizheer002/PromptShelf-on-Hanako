var vf = { exports: {} }, qn = {};
var Nd;
function E0() {
  if (Nd) return qn;
  Nd = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), p = /* @__PURE__ */ Symbol.for("react.fragment");
  function M(r, X, q) {
    var Q = null;
    if (q !== void 0 && (Q = "" + q), X.key !== void 0 && (Q = "" + X.key), "key" in X) {
      q = {};
      for (var G in X)
        G !== "key" && (q[G] = X[G]);
    } else q = X;
    return X = q.ref, {
      $$typeof: f,
      type: r,
      key: Q,
      ref: X !== void 0 ? X : null,
      props: q
    };
  }
  return qn.Fragment = p, qn.jsx = M, qn.jsxs = M, qn;
}
var Rd;
function T0() {
  return Rd || (Rd = 1, vf.exports = E0()), vf.exports;
}
var N = T0(), gf = { exports: {} }, W = {};
var xd;
function A0() {
  if (xd) return W;
  xd = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), p = /* @__PURE__ */ Symbol.for("react.portal"), M = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), X = /* @__PURE__ */ Symbol.for("react.profiler"), q = /* @__PURE__ */ Symbol.for("react.consumer"), Q = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), O = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), K = /* @__PURE__ */ Symbol.for("react.lazy"), x = /* @__PURE__ */ Symbol.for("react.activity"), C = Symbol.iterator;
  function $(d) {
    return d === null || typeof d != "object" ? null : (d = C && d[C] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var mt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ft = Object.assign, Ot = {};
  function ht(d, z, B) {
    this.props = d, this.context = z, this.refs = Ot, this.updater = B || mt;
  }
  ht.prototype.isReactComponent = {}, ht.prototype.setState = function(d, z) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, d, z, "setState");
  }, ht.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function Ct() {
  }
  Ct.prototype = ht.prototype;
  function pt(d, z, B) {
    this.props = d, this.context = z, this.refs = Ot, this.updater = B || mt;
  }
  var Kt = pt.prototype = new Ct();
  Kt.constructor = pt, ft(Kt, ht.prototype), Kt.isPureReactComponent = !0;
  var $t = Array.isArray;
  function Lt() {
  }
  var I = { H: null, A: null, T: null, S: null }, Zt = Object.prototype.hasOwnProperty;
  function Ht(d, z, B) {
    var j = B.ref;
    return {
      $$typeof: f,
      type: d,
      key: z,
      ref: j !== void 0 ? j : null,
      props: B
    };
  }
  function el(d, z) {
    return Ht(d.type, z, d.props);
  }
  function yl(d) {
    return typeof d == "object" && d !== null && d.$$typeof === f;
  }
  function Jt(d) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(B) {
      return z[B];
    });
  }
  var Xl = /\/+/g;
  function jl(d, z) {
    return typeof d == "object" && d !== null && d.key != null ? Jt("" + d.key) : z.toString(36);
  }
  function il(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(Lt, Lt) : (d.status = "pending", d.then(
          function(z) {
            d.status === "pending" && (d.status = "fulfilled", d.value = z);
          },
          function(z) {
            d.status === "pending" && (d.status = "rejected", d.reason = z);
          }
        )), d.status) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function T(d, z, B, j, J) {
    var lt = typeof d;
    (lt === "undefined" || lt === "boolean") && (d = null);
    var st = !1;
    if (d === null) st = !0;
    else
      switch (lt) {
        case "bigint":
        case "string":
        case "number":
          st = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case f:
            case p:
              st = !0;
              break;
            case K:
              return st = d._init, T(
                st(d._payload),
                z,
                B,
                j,
                J
              );
          }
      }
    if (st)
      return J = J(d), st = j === "" ? "." + jl(d, 0) : j, $t(J) ? (B = "", st != null && (B = st.replace(Xl, "$&/") + "/"), T(J, z, B, "", function(qe) {
        return qe;
      })) : J != null && (yl(J) && (J = el(
        J,
        B + (J.key == null || d && d.key === J.key ? "" : ("" + J.key).replace(
          Xl,
          "$&/"
        ) + "/") + st
      )), z.push(J)), 1;
    st = 0;
    var Bt = j === "" ? "." : j + ":";
    if ($t(d))
      for (var Ut = 0; Ut < d.length; Ut++)
        j = d[Ut], lt = Bt + jl(j, Ut), st += T(
          j,
          z,
          B,
          lt,
          J
        );
    else if (Ut = $(d), typeof Ut == "function")
      for (d = Ut.call(d), Ut = 0; !(j = d.next()).done; )
        j = j.value, lt = Bt + jl(j, Ut++), st += T(
          j,
          z,
          B,
          lt,
          J
        );
    else if (lt === "object") {
      if (typeof d.then == "function")
        return T(
          il(d),
          z,
          B,
          j,
          J
        );
      throw z = String(d), Error(
        "Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return st;
  }
  function H(d, z, B) {
    if (d == null) return d;
    var j = [], J = 0;
    return T(d, j, "", "", function(lt) {
      return z.call(B, lt, J++);
    }), j;
  }
  function w(d) {
    if (d._status === -1) {
      var z = d._result;
      z = z(), z.then(
        function(B) {
          (d._status === 0 || d._status === -1) && (d._status = 1, d._result = B);
        },
        function(B) {
          (d._status === 0 || d._status === -1) && (d._status = 2, d._result = B);
        }
      ), d._status === -1 && (d._status = 0, d._result = z);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var yt = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
        error: d
      });
      if (!window.dispatchEvent(z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  }, gt = {
    map: H,
    forEach: function(d, z, B) {
      H(
        d,
        function() {
          z.apply(this, arguments);
        },
        B
      );
    },
    count: function(d) {
      var z = 0;
      return H(d, function() {
        z++;
      }), z;
    },
    toArray: function(d) {
      return H(d, function(z) {
        return z;
      }) || [];
    },
    only: function(d) {
      if (!yl(d))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return d;
    }
  };
  return W.Activity = x, W.Children = gt, W.Component = ht, W.Fragment = M, W.Profiler = X, W.PureComponent = pt, W.StrictMode = r, W.Suspense = O, W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, W.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return I.H.useMemoCache(d);
    }
  }, W.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, W.cacheSignal = function() {
    return null;
  }, W.cloneElement = function(d, z, B) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var j = ft({}, d.props), J = d.key;
    if (z != null)
      for (lt in z.key !== void 0 && (J = "" + z.key), z)
        !Zt.call(z, lt) || lt === "key" || lt === "__self" || lt === "__source" || lt === "ref" && z.ref === void 0 || (j[lt] = z[lt]);
    var lt = arguments.length - 2;
    if (lt === 1) j.children = B;
    else if (1 < lt) {
      for (var st = Array(lt), Bt = 0; Bt < lt; Bt++)
        st[Bt] = arguments[Bt + 2];
      j.children = st;
    }
    return Ht(d.type, J, j);
  }, W.createContext = function(d) {
    return d = {
      $$typeof: Q,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: q,
      _context: d
    }, d;
  }, W.createElement = function(d, z, B) {
    var j, J = {}, lt = null;
    if (z != null)
      for (j in z.key !== void 0 && (lt = "" + z.key), z)
        Zt.call(z, j) && j !== "key" && j !== "__self" && j !== "__source" && (J[j] = z[j]);
    var st = arguments.length - 2;
    if (st === 1) J.children = B;
    else if (1 < st) {
      for (var Bt = Array(st), Ut = 0; Ut < st; Ut++)
        Bt[Ut] = arguments[Ut + 2];
      J.children = Bt;
    }
    if (d && d.defaultProps)
      for (j in st = d.defaultProps, st)
        J[j] === void 0 && (J[j] = st[j]);
    return Ht(d, lt, J);
  }, W.createRef = function() {
    return { current: null };
  }, W.forwardRef = function(d) {
    return { $$typeof: G, render: d };
  }, W.isValidElement = yl, W.lazy = function(d) {
    return {
      $$typeof: K,
      _payload: { _status: -1, _result: d },
      _init: w
    };
  }, W.memo = function(d, z) {
    return {
      $$typeof: g,
      type: d,
      compare: z === void 0 ? null : z
    };
  }, W.startTransition = function(d) {
    var z = I.T, B = {};
    I.T = B;
    try {
      var j = d(), J = I.S;
      J !== null && J(B, j), typeof j == "object" && j !== null && typeof j.then == "function" && j.then(Lt, yt);
    } catch (lt) {
      yt(lt);
    } finally {
      z !== null && B.types !== null && (z.types = B.types), I.T = z;
    }
  }, W.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, W.use = function(d) {
    return I.H.use(d);
  }, W.useActionState = function(d, z, B) {
    return I.H.useActionState(d, z, B);
  }, W.useCallback = function(d, z) {
    return I.H.useCallback(d, z);
  }, W.useContext = function(d) {
    return I.H.useContext(d);
  }, W.useDebugValue = function() {
  }, W.useDeferredValue = function(d, z) {
    return I.H.useDeferredValue(d, z);
  }, W.useEffect = function(d, z) {
    return I.H.useEffect(d, z);
  }, W.useEffectEvent = function(d) {
    return I.H.useEffectEvent(d);
  }, W.useId = function() {
    return I.H.useId();
  }, W.useImperativeHandle = function(d, z, B) {
    return I.H.useImperativeHandle(d, z, B);
  }, W.useInsertionEffect = function(d, z) {
    return I.H.useInsertionEffect(d, z);
  }, W.useLayoutEffect = function(d, z) {
    return I.H.useLayoutEffect(d, z);
  }, W.useMemo = function(d, z) {
    return I.H.useMemo(d, z);
  }, W.useOptimistic = function(d, z) {
    return I.H.useOptimistic(d, z);
  }, W.useReducer = function(d, z, B) {
    return I.H.useReducer(d, z, B);
  }, W.useRef = function(d) {
    return I.H.useRef(d);
  }, W.useState = function(d) {
    return I.H.useState(d);
  }, W.useSyncExternalStore = function(d, z, B) {
    return I.H.useSyncExternalStore(
      d,
      z,
      B
    );
  }, W.useTransition = function() {
    return I.H.useTransition();
  }, W.version = "19.2.8", W;
}
var Cd;
function Uf() {
  return Cd || (Cd = 1, gf.exports = A0()), gf.exports;
}
var et = Uf(), Sf = { exports: {} }, Yn = {}, bf = { exports: {} }, pf = {};
var Hd;
function z0() {
  return Hd || (Hd = 1, (function(f) {
    function p(T, H) {
      var w = T.length;
      T.push(H);
      t: for (; 0 < w; ) {
        var yt = w - 1 >>> 1, gt = T[yt];
        if (0 < X(gt, H))
          T[yt] = H, T[w] = gt, w = yt;
        else break t;
      }
    }
    function M(T) {
      return T.length === 0 ? null : T[0];
    }
    function r(T) {
      if (T.length === 0) return null;
      var H = T[0], w = T.pop();
      if (w !== H) {
        T[0] = w;
        t: for (var yt = 0, gt = T.length, d = gt >>> 1; yt < d; ) {
          var z = 2 * (yt + 1) - 1, B = T[z], j = z + 1, J = T[j];
          if (0 > X(B, w))
            j < gt && 0 > X(J, B) ? (T[yt] = J, T[j] = w, yt = j) : (T[yt] = B, T[z] = w, yt = z);
          else if (j < gt && 0 > X(J, w))
            T[yt] = J, T[j] = w, yt = j;
          else break t;
        }
      }
      return H;
    }
    function X(T, H) {
      var w = T.sortIndex - H.sortIndex;
      return w !== 0 ? w : T.id - H.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var q = performance;
      f.unstable_now = function() {
        return q.now();
      };
    } else {
      var Q = Date, G = Q.now();
      f.unstable_now = function() {
        return Q.now() - G;
      };
    }
    var O = [], g = [], K = 1, x = null, C = 3, $ = !1, mt = !1, ft = !1, Ot = !1, ht = typeof setTimeout == "function" ? setTimeout : null, Ct = typeof clearTimeout == "function" ? clearTimeout : null, pt = typeof setImmediate < "u" ? setImmediate : null;
    function Kt(T) {
      for (var H = M(g); H !== null; ) {
        if (H.callback === null) r(g);
        else if (H.startTime <= T)
          r(g), H.sortIndex = H.expirationTime, p(O, H);
        else break;
        H = M(g);
      }
    }
    function $t(T) {
      if (ft = !1, Kt(T), !mt)
        if (M(O) !== null)
          mt = !0, Lt || (Lt = !0, Jt());
        else {
          var H = M(g);
          H !== null && il($t, H.startTime - T);
        }
    }
    var Lt = !1, I = -1, Zt = 5, Ht = -1;
    function el() {
      return Ot ? !0 : !(f.unstable_now() - Ht < Zt);
    }
    function yl() {
      if (Ot = !1, Lt) {
        var T = f.unstable_now();
        Ht = T;
        var H = !0;
        try {
          t: {
            mt = !1, ft && (ft = !1, Ct(I), I = -1), $ = !0;
            var w = C;
            try {
              l: {
                for (Kt(T), x = M(O); x !== null && !(x.expirationTime > T && el()); ) {
                  var yt = x.callback;
                  if (typeof yt == "function") {
                    x.callback = null, C = x.priorityLevel;
                    var gt = yt(
                      x.expirationTime <= T
                    );
                    if (T = f.unstable_now(), typeof gt == "function") {
                      x.callback = gt, Kt(T), H = !0;
                      break l;
                    }
                    x === M(O) && r(O), Kt(T);
                  } else r(O);
                  x = M(O);
                }
                if (x !== null) H = !0;
                else {
                  var d = M(g);
                  d !== null && il(
                    $t,
                    d.startTime - T
                  ), H = !1;
                }
              }
              break t;
            } finally {
              x = null, C = w, $ = !1;
            }
            H = void 0;
          }
        } finally {
          H ? Jt() : Lt = !1;
        }
      }
    }
    var Jt;
    if (typeof pt == "function")
      Jt = function() {
        pt(yl);
      };
    else if (typeof MessageChannel < "u") {
      var Xl = new MessageChannel(), jl = Xl.port2;
      Xl.port1.onmessage = yl, Jt = function() {
        jl.postMessage(null);
      };
    } else
      Jt = function() {
        ht(yl, 0);
      };
    function il(T, H) {
      I = ht(function() {
        T(f.unstable_now());
      }, H);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, f.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Zt = 0 < T ? Math.floor(1e3 / T) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, f.unstable_next = function(T) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = C;
      }
      var w = C;
      C = H;
      try {
        return T();
      } finally {
        C = w;
      }
    }, f.unstable_requestPaint = function() {
      Ot = !0;
    }, f.unstable_runWithPriority = function(T, H) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var w = C;
      C = T;
      try {
        return H();
      } finally {
        C = w;
      }
    }, f.unstable_scheduleCallback = function(T, H, w) {
      var yt = f.unstable_now();
      switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? yt + w : yt) : w = yt, T) {
        case 1:
          var gt = -1;
          break;
        case 2:
          gt = 250;
          break;
        case 5:
          gt = 1073741823;
          break;
        case 4:
          gt = 1e4;
          break;
        default:
          gt = 5e3;
      }
      return gt = w + gt, T = {
        id: K++,
        callback: H,
        priorityLevel: T,
        startTime: w,
        expirationTime: gt,
        sortIndex: -1
      }, w > yt ? (T.sortIndex = w, p(g, T), M(O) === null && T === M(g) && (ft ? (Ct(I), I = -1) : ft = !0, il($t, w - yt))) : (T.sortIndex = gt, p(O, T), mt || $ || (mt = !0, Lt || (Lt = !0, Jt()))), T;
    }, f.unstable_shouldYield = el, f.unstable_wrapCallback = function(T) {
      var H = C;
      return function() {
        var w = C;
        C = H;
        try {
          return T.apply(this, arguments);
        } finally {
          C = w;
        }
      };
    };
  })(pf)), pf;
}
var Bd;
function _0() {
  return Bd || (Bd = 1, bf.exports = z0()), bf.exports;
}
var Ef = { exports: {} }, al = {};
var jd;
function D0() {
  if (jd) return al;
  jd = 1;
  var f = Uf();
  function p(O) {
    var g = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var K = 2; K < arguments.length; K++)
        g += "&args[]=" + encodeURIComponent(arguments[K]);
    }
    return "Minified React error #" + O + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function M() {
  }
  var r = {
    d: {
      f: M,
      r: function() {
        throw Error(p(522));
      },
      D: M,
      C: M,
      L: M,
      m: M,
      X: M,
      S: M,
      M
    },
    p: 0,
    findDOMNode: null
  }, X = /* @__PURE__ */ Symbol.for("react.portal");
  function q(O, g, K) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: X,
      key: x == null ? null : "" + x,
      children: O,
      containerInfo: g,
      implementation: K
    };
  }
  var Q = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function G(O, g) {
    if (O === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return al.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, al.createPortal = function(O, g) {
    var K = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(p(299));
    return q(O, g, null, K);
  }, al.flushSync = function(O) {
    var g = Q.T, K = r.p;
    try {
      if (Q.T = null, r.p = 2, O) return O();
    } finally {
      Q.T = g, r.p = K, r.d.f();
    }
  }, al.preconnect = function(O, g) {
    typeof O == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, r.d.C(O, g));
  }, al.prefetchDNS = function(O) {
    typeof O == "string" && r.d.D(O);
  }, al.preinit = function(O, g) {
    if (typeof O == "string" && g && typeof g.as == "string") {
      var K = g.as, x = G(K, g.crossOrigin), C = typeof g.integrity == "string" ? g.integrity : void 0, $ = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      K === "style" ? r.d.S(
        O,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: x,
          integrity: C,
          fetchPriority: $
        }
      ) : K === "script" && r.d.X(O, {
        crossOrigin: x,
        integrity: C,
        fetchPriority: $,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, al.preinitModule = function(O, g) {
    if (typeof O == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var K = G(
            g.as,
            g.crossOrigin
          );
          r.d.M(O, {
            crossOrigin: K,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && r.d.M(O);
  }, al.preload = function(O, g) {
    if (typeof O == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var K = g.as, x = G(K, g.crossOrigin);
      r.d.L(O, K, {
        crossOrigin: x,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, al.preloadModule = function(O, g) {
    if (typeof O == "string")
      if (g) {
        var K = G(g.as, g.crossOrigin);
        r.d.m(O, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: K,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else r.d.m(O);
  }, al.requestFormReset = function(O) {
    r.d.r(O);
  }, al.unstable_batchedUpdates = function(O, g) {
    return O(g);
  }, al.useFormState = function(O, g, K) {
    return Q.H.useFormState(O, g, K);
  }, al.useFormStatus = function() {
    return Q.H.useHostTransitionStatus();
  }, al.version = "19.2.8", al;
}
var qd;
function O0() {
  if (qd) return Ef.exports;
  qd = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (p) {
        console.error(p);
      }
  }
  return f(), Ef.exports = D0(), Ef.exports;
}
var Yd;
function M0() {
  if (Yd) return Yn;
  Yd = 1;
  var f = _0(), p = Uf(), M = O0();
  function r(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function X(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function q(t) {
    var l = t, e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do
        l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function Q(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function G(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function O(t) {
    if (q(t) !== t)
      throw Error(r(188));
  }
  function g(t) {
    var l = t.alternate;
    if (!l) {
      if (l = q(t), l === null) throw Error(r(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var n = e.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === e) return O(n), t;
          if (u === a) return O(n), l;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (e.return !== a.return) e = n, a = u;
      else {
        for (var i = !1, c = n.child; c; ) {
          if (c === e) {
            i = !0, e = n, a = u;
            break;
          }
          if (c === a) {
            i = !0, a = n, e = u;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = u.child; c; ) {
            if (c === e) {
              i = !0, e = u, a = n;
              break;
            }
            if (c === a) {
              i = !0, a = u, e = n;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(r(189));
        }
      }
      if (e.alternate !== a) throw Error(r(190));
    }
    if (e.tag !== 3) throw Error(r(188));
    return e.stateNode.current === e ? t : l;
  }
  function K(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = K(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  var x = Object.assign, C = /* @__PURE__ */ Symbol.for("react.element"), $ = /* @__PURE__ */ Symbol.for("react.transitional.element"), mt = /* @__PURE__ */ Symbol.for("react.portal"), ft = /* @__PURE__ */ Symbol.for("react.fragment"), Ot = /* @__PURE__ */ Symbol.for("react.strict_mode"), ht = /* @__PURE__ */ Symbol.for("react.profiler"), Ct = /* @__PURE__ */ Symbol.for("react.consumer"), pt = /* @__PURE__ */ Symbol.for("react.context"), Kt = /* @__PURE__ */ Symbol.for("react.forward_ref"), $t = /* @__PURE__ */ Symbol.for("react.suspense"), Lt = /* @__PURE__ */ Symbol.for("react.suspense_list"), I = /* @__PURE__ */ Symbol.for("react.memo"), Zt = /* @__PURE__ */ Symbol.for("react.lazy"), Ht = /* @__PURE__ */ Symbol.for("react.activity"), el = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), yl = Symbol.iterator;
  function Jt(t) {
    return t === null || typeof t != "object" ? null : (t = yl && t[yl] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Xl = /* @__PURE__ */ Symbol.for("react.client.reference");
  function jl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Xl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case ft:
        return "Fragment";
      case ht:
        return "Profiler";
      case Ot:
        return "StrictMode";
      case $t:
        return "Suspense";
      case Lt:
        return "SuspenseList";
      case Ht:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case mt:
          return "Portal";
        case pt:
          return t.displayName || "Context";
        case Ct:
          return (t._context.displayName || "Context") + ".Consumer";
        case Kt:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case I:
          return l = t.displayName || null, l !== null ? l : jl(t.type) || "Memo";
        case Zt:
          l = t._payload, t = t._init;
          try {
            return jl(t(l));
          } catch {
          }
      }
    return null;
  }
  var il = Array.isArray, T = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, yt = [], gt = -1;
  function d(t) {
    return { current: t };
  }
  function z(t) {
    0 > gt || (t.current = yt[gt], yt[gt] = null, gt--);
  }
  function B(t, l) {
    gt++, yt[gt] = t.current, t.current = l;
  }
  var j = d(null), J = d(null), lt = d(null), st = d(null);
  function Bt(t, l) {
    switch (B(lt, l), B(J, t), B(j, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? Po(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = Po(l), t = td(l, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    z(j), B(j, t);
  }
  function Ut() {
    z(j), z(J), z(lt);
  }
  function qe(t) {
    t.memoizedState !== null && B(st, t);
    var l = j.current, e = td(l, t.type);
    l !== e && (B(J, t), B(j, e));
  }
  function na(t) {
    J.current === t && (z(j), z(J)), st.current === t && (z(st), Cn._currentValue = w);
  }
  var S, R;
  function D(t) {
    if (S === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        S = l && l[1] || "", R = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + S + t + R;
  }
  var U = !1;
  function V(t, l) {
    if (!t || U) return "";
    U = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var _ = function() {
                throw Error();
              };
              if (Object.defineProperty(_.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(_, []);
                } catch (b) {
                  var v = b;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (b) {
                  v = b;
                }
                t.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                v = b;
              }
              (_ = t()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (b) {
            if (b && v && typeof b.stack == "string")
              return [b.stack, v.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), i = u[0], c = u[1];
      if (i && c) {
        var s = i.split(`
`), y = c.split(`
`);
        for (n = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < y.length && !y[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === s.length || n === y.length)
          for (a = s.length - 1, n = y.length - 1; 1 <= a && 0 <= n && s[a] !== y[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (s[a] !== y[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || s[a] !== y[n]) {
                  var E = `
` + s[a].replace(" at new ", " at ");
                  return t.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", t.displayName)), E;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      U = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? D(e) : "";
  }
  function F(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return D(t.type);
      case 16:
        return D("Lazy");
      case 13:
        return t.child !== l && l !== null ? D("Suspense Fallback") : D("Suspense");
      case 19:
        return D("SuspenseList");
      case 0:
      case 15:
        return V(t.type, !1);
      case 11:
        return V(t.type.render, !1);
      case 1:
        return V(t.type, !0);
      case 31:
        return D("Activity");
      default:
        return "";
    }
  }
  function nl(t) {
    try {
      var l = "", e = null;
      do
        l += F(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Nt = Object.prototype.hasOwnProperty, Jl = f.unstable_scheduleCallback, Ft = f.unstable_cancelCallback, Pd = f.unstable_shouldYield, tm = f.unstable_requestPaint, vl = f.unstable_now, lm = f.unstable_getCurrentPriorityLevel, Nf = f.unstable_ImmediatePriority, Rf = f.unstable_UserBlockingPriority, Gn = f.unstable_NormalPriority, em = f.unstable_LowPriority, xf = f.unstable_IdlePriority, am = f.log, nm = f.unstable_setDisableYieldValue, Va = null, gl = null;
  function oe(t) {
    if (typeof am == "function" && nm(t), gl && typeof gl.setStrictMode == "function")
      try {
        gl.setStrictMode(Va, t);
      } catch {
      }
  }
  var Sl = Math.clz32 ? Math.clz32 : cm, um = Math.log, im = Math.LN2;
  function cm(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (um(t) / im | 0) | 0;
  }
  var Xn = 256, Qn = 262144, Ln = 4194304;
  function Ye(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function Zn(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~u, a !== 0 ? n = Ye(a) : (i &= c, i !== 0 ? n = Ye(i) : e || (e = c & ~t, e !== 0 && (n = Ye(e))))) : (c = a & ~u, c !== 0 ? n = Ye(c) : i !== 0 ? n = Ye(i) : e || (e = a & ~t, e !== 0 && (n = Ye(e)))), n === 0 ? 0 : l !== 0 && l !== n && (l & u) === 0 && (u = n & -n, e = l & -l, u >= e || u === 32 && (e & 4194048) !== 0) ? l : n;
  }
  function Ka(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function fm(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
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
        return l + 5e3;
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
  function Cf() {
    var t = Ln;
    return Ln <<= 1, (Ln & 62914560) === 0 && (Ln = 4194304), t;
  }
  function ai(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Ja(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function sm(t, l, e, a, n, u) {
    var i = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var c = t.entanglements, s = t.expirationTimes, y = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var E = 31 - Sl(e), _ = 1 << E;
      c[E] = 0, s[E] = -1;
      var v = y[E];
      if (v !== null)
        for (y[E] = null, E = 0; E < v.length; E++) {
          var b = v[E];
          b !== null && (b.lane &= -536870913);
        }
      e &= ~_;
    }
    a !== 0 && Hf(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~l));
  }
  function Hf(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var a = 31 - Sl(l);
    t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 261930;
  }
  function Bf(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var a = 31 - Sl(e), n = 1 << a;
      n & l | t[a] & l && (t[a] |= l), e &= ~n;
    }
  }
  function jf(t, l) {
    var e = l & -l;
    return e = (e & 42) !== 0 ? 1 : ni(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
  }
  function ni(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ui(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function qf() {
    var t = H.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Ad(t.type));
  }
  function Yf(t, l) {
    var e = H.p;
    try {
      return H.p = t, l();
    } finally {
      H.p = e;
    }
  }
  var de = Math.random().toString(36).slice(2), Wt = "__reactFiber$" + de, cl = "__reactProps$" + de, ua = "__reactContainer$" + de, ii = "__reactEvents$" + de, rm = "__reactListeners$" + de, om = "__reactHandles$" + de, Gf = "__reactResources$" + de, wa = "__reactMarker$" + de;
  function ci(t) {
    delete t[Wt], delete t[cl], delete t[ii], delete t[rm], delete t[om];
  }
  function ia(t) {
    var l = t[Wt];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[ua] || e[Wt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = cd(t); t !== null; ) {
            if (e = t[Wt]) return e;
            t = cd(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function ca(t) {
    if (t = t[Wt] || t[ua]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function ka(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(r(33));
  }
  function fa(t) {
    var l = t[Gf];
    return l || (l = t[Gf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function wt(t) {
    t[wa] = !0;
  }
  var Xf = /* @__PURE__ */ new Set(), Qf = {};
  function Ge(t, l) {
    sa(t, l), sa(t + "Capture", l);
  }
  function sa(t, l) {
    for (Qf[t] = l, t = 0; t < l.length; t++)
      Xf.add(l[t]);
  }
  var dm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Lf = {}, Zf = {};
  function mm(t) {
    return Nt.call(Zf, t) ? !0 : Nt.call(Lf, t) ? !1 : dm.test(t) ? Zf[t] = !0 : (Lf[t] = !0, !1);
  }
  function Vn(t, l, e) {
    if (mm(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
  }
  function Kn(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function wl(t, l, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + a);
    }
  }
  function Dl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Vf(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function hm(t, l, e) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    );
    if (!t.hasOwnProperty(l) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          e = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(t, l, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(i) {
          e = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function fi(t) {
    if (!t._valueTracker) {
      var l = Vf(t) ? "checked" : "value";
      t._valueTracker = hm(
        t,
        l,
        "" + t[l]
      );
    }
  }
  function Kf(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), a = "";
    return t && (a = Vf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), !0) : !1;
  }
  function Jn(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var ym = /[\n"\\]/g;
  function Ol(t) {
    return t.replace(
      ym,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function si(t, l, e, a, n, u, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + Dl(l)) : t.value !== "" + Dl(l) && (t.value = "" + Dl(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? ri(t, i, Dl(l)) : e != null ? ri(t, i, Dl(e)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + Dl(c) : t.removeAttribute("name");
  }
  function Jf(t, l, e, a, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), l != null || e != null) {
      if (!(u !== "submit" && u !== "reset" || l != null)) {
        fi(t);
        return;
      }
      e = e != null ? "" + Dl(e) : "", l = l != null ? "" + Dl(l) : e, c || l === t.value || (t.value = l), t.defaultValue = l;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = c ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), fi(t);
  }
  function ri(t, l, e) {
    l === "number" && Jn(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
  }
  function ra(t, l, e, a) {
    if (t = t.options, l) {
      l = {};
      for (var n = 0; n < e.length; n++)
        l["$" + e[n]] = !0;
      for (e = 0; e < t.length; e++)
        n = l.hasOwnProperty("$" + t[e].value), t[e].selected !== n && (t[e].selected = n), n && a && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + Dl(e), l = null, n = 0; n < t.length; n++) {
        if (t[n].value === e) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        l !== null || t[n].disabled || (l = t[n]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function wf(t, l, e) {
    if (l != null && (l = "" + Dl(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + Dl(e) : "";
  }
  function kf(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(r(92));
        if (il(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), l = e;
    }
    e = Dl(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a), fi(t);
  }
  function oa(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var vm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function $f(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || vm.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function Ff(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(r(62));
    if (t = t.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in l)
        a = l[n], l.hasOwnProperty(n) && e[n] !== a && $f(t, n, a);
    } else
      for (var u in l)
        l.hasOwnProperty(u) && $f(t, u, l[u]);
  }
  function oi(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var gm = /* @__PURE__ */ new Map([
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
  ]), Sm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wn(t) {
    return Sm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function kl() {
  }
  var di = null;
  function mi(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var da = null, ma = null;
  function Wf(t) {
    var l = ca(t);
    if (l && (t = l.stateNode)) {
      var e = t[cl] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (si(
            t,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), l = e.name, e.type === "radio" && l != null) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + Ol(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var n = a[cl] || null;
                if (!n) throw Error(r(90));
                si(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (l = 0; l < e.length; l++)
              a = e[l], a.form === t.form && Kf(a);
          }
          break t;
        case "textarea":
          wf(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && ra(t, !!e.multiple, l, !1);
      }
    }
  }
  var hi = !1;
  function If(t, l, e) {
    if (hi) return t(l, e);
    hi = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (hi = !1, (da !== null || ma !== null) && (Hu(), da && (l = da, t = ma, ma = da = null, Wf(l), t)))
        for (l = 0; l < t.length; l++) Wf(t[l]);
    }
  }
  function $a(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[cl] || null;
    if (a === null) return null;
    e = a[l];
    t: switch (l) {
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
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function")
      throw Error(
        r(231, l, typeof e)
      );
    return e;
  }
  var $l = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), yi = !1;
  if ($l)
    try {
      var Fa = {};
      Object.defineProperty(Fa, "passive", {
        get: function() {
          yi = !0;
        }
      }), window.addEventListener("test", Fa, Fa), window.removeEventListener("test", Fa, Fa);
    } catch {
      yi = !1;
    }
  var me = null, vi = null, kn = null;
  function Pf() {
    if (kn) return kn;
    var t, l = vi, e = l.length, a, n = "value" in me ? me.value : me.textContent, u = n.length;
    for (t = 0; t < e && l[t] === n[t]; t++) ;
    var i = e - t;
    for (a = 1; a <= i && l[e - a] === n[u - a]; a++) ;
    return kn = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function $n(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Fn() {
    return !0;
  }
  function ts() {
    return !1;
  }
  function fl(t) {
    function l(e, a, n, u, i) {
      this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Fn : ts, this.isPropagationStopped = ts, this;
    }
    return x(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Fn);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Fn);
      },
      persist: function() {
      },
      isPersistent: Fn
    }), l;
  }
  var Xe = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Wn = fl(Xe), Wa = x({}, Xe, { view: 0, detail: 0 }), bm = fl(Wa), gi, Si, Ia, In = x({}, Wa, {
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
    getModifierState: pi,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ia && (Ia && t.type === "mousemove" ? (gi = t.screenX - Ia.screenX, Si = t.screenY - Ia.screenY) : Si = gi = 0, Ia = t), gi);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Si;
    }
  }), ls = fl(In), pm = x({}, In, { dataTransfer: 0 }), Em = fl(pm), Tm = x({}, Wa, { relatedTarget: 0 }), bi = fl(Tm), Am = x({}, Xe, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), zm = fl(Am), _m = x({}, Xe, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Dm = fl(_m), Om = x({}, Xe, { data: 0 }), es = fl(Om), Mm = {
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
  }, Um = {
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
  }, Nm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Rm(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = Nm[t]) ? !!l[t] : !1;
  }
  function pi() {
    return Rm;
  }
  var xm = x({}, Wa, {
    key: function(t) {
      if (t.key) {
        var l = Mm[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = $n(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Um[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: pi,
    charCode: function(t) {
      return t.type === "keypress" ? $n(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? $n(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Cm = fl(xm), Hm = x({}, In, {
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
  }), as = fl(Hm), Bm = x({}, Wa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pi
  }), jm = fl(Bm), qm = x({}, Xe, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ym = fl(qm), Gm = x({}, In, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Xm = fl(Gm), Qm = x({}, Xe, {
    newState: 0,
    oldState: 0
  }), Lm = fl(Qm), Zm = [9, 13, 27, 32], Ei = $l && "CompositionEvent" in window, Pa = null;
  $l && "documentMode" in document && (Pa = document.documentMode);
  var Vm = $l && "TextEvent" in window && !Pa, ns = $l && (!Ei || Pa && 8 < Pa && 11 >= Pa), us = " ", is = !1;
  function cs(t, l) {
    switch (t) {
      case "keyup":
        return Zm.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function fs(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ha = !1;
  function Km(t, l) {
    switch (t) {
      case "compositionend":
        return fs(l);
      case "keypress":
        return l.which !== 32 ? null : (is = !0, us);
      case "textInput":
        return t = l.data, t === us && is ? null : t;
      default:
        return null;
    }
  }
  function Jm(t, l) {
    if (ha)
      return t === "compositionend" || !Ei && cs(t, l) ? (t = Pf(), kn = vi = me = null, ha = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return ns && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var wm = {
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
  function ss(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!wm[t.type] : l === "textarea";
  }
  function rs(t, l, e, a) {
    da ? ma ? ma.push(a) : ma = [a] : da = a, l = Qu(l, "onChange"), 0 < l.length && (e = new Wn(
      "onChange",
      "change",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }));
  }
  var tn = null, ln = null;
  function km(t) {
    wo(t, 0);
  }
  function Pn(t) {
    var l = ka(t);
    if (Kf(l)) return t;
  }
  function os(t, l) {
    if (t === "change") return l;
  }
  var ds = !1;
  if ($l) {
    var Ti;
    if ($l) {
      var Ai = "oninput" in document;
      if (!Ai) {
        var ms = document.createElement("div");
        ms.setAttribute("oninput", "return;"), Ai = typeof ms.oninput == "function";
      }
      Ti = Ai;
    } else Ti = !1;
    ds = Ti && (!document.documentMode || 9 < document.documentMode);
  }
  function hs() {
    tn && (tn.detachEvent("onpropertychange", ys), ln = tn = null);
  }
  function ys(t) {
    if (t.propertyName === "value" && Pn(ln)) {
      var l = [];
      rs(
        l,
        ln,
        t,
        mi(t)
      ), If(km, l);
    }
  }
  function $m(t, l, e) {
    t === "focusin" ? (hs(), tn = l, ln = e, tn.attachEvent("onpropertychange", ys)) : t === "focusout" && hs();
  }
  function Fm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Pn(ln);
  }
  function Wm(t, l) {
    if (t === "click") return Pn(l);
  }
  function Im(t, l) {
    if (t === "input" || t === "change")
      return Pn(l);
  }
  function Pm(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var bl = typeof Object.is == "function" ? Object.is : Pm;
  function en(t, l) {
    if (bl(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!Nt.call(l, n) || !bl(t[n], l[n]))
        return !1;
    }
    return !0;
  }
  function vs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function gs(t, l) {
    var e = vs(t);
    t = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = t + e.textContent.length, t <= l && a >= l)
          return { node: e, offset: l - t };
        t = a;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = vs(e);
    }
  }
  function Ss(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Ss(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function bs(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Jn(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Jn(t.document);
    }
    return l;
  }
  function zi(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var th = $l && "documentMode" in document && 11 >= document.documentMode, ya = null, _i = null, an = null, Di = !1;
  function ps(t, l, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Di || ya == null || ya !== Jn(a) || (a = ya, "selectionStart" in a && zi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), an && en(an, a) || (an = a, a = Qu(_i, "onSelect"), 0 < a.length && (l = new Wn(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: a }), l.target = ya)));
  }
  function Qe(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var va = {
    animationend: Qe("Animation", "AnimationEnd"),
    animationiteration: Qe("Animation", "AnimationIteration"),
    animationstart: Qe("Animation", "AnimationStart"),
    transitionrun: Qe("Transition", "TransitionRun"),
    transitionstart: Qe("Transition", "TransitionStart"),
    transitioncancel: Qe("Transition", "TransitionCancel"),
    transitionend: Qe("Transition", "TransitionEnd")
  }, Oi = {}, Es = {};
  $l && (Es = document.createElement("div").style, "AnimationEvent" in window || (delete va.animationend.animation, delete va.animationiteration.animation, delete va.animationstart.animation), "TransitionEvent" in window || delete va.transitionend.transition);
  function Le(t) {
    if (Oi[t]) return Oi[t];
    if (!va[t]) return t;
    var l = va[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in Es)
        return Oi[t] = l[e];
    return t;
  }
  var Ts = Le("animationend"), As = Le("animationiteration"), zs = Le("animationstart"), lh = Le("transitionrun"), eh = Le("transitionstart"), ah = Le("transitioncancel"), _s = Le("transitionend"), Ds = /* @__PURE__ */ new Map(), Mi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Mi.push("scrollEnd");
  function ql(t, l) {
    Ds.set(t, l), Ge(l, [t]);
  }
  var tu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Ml = [], ga = 0, Ui = 0;
  function lu() {
    for (var t = ga, l = Ui = ga = 0; l < t; ) {
      var e = Ml[l];
      Ml[l++] = null;
      var a = Ml[l];
      Ml[l++] = null;
      var n = Ml[l];
      Ml[l++] = null;
      var u = Ml[l];
      if (Ml[l++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && Os(e, n, u);
    }
  }
  function eu(t, l, e, a) {
    Ml[ga++] = t, Ml[ga++] = l, Ml[ga++] = e, Ml[ga++] = a, Ui |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Ni(t, l, e, a) {
    return eu(t, l, e, a), au(t);
  }
  function Ze(t, l) {
    return eu(t, null, null, l), au(t);
  }
  function Os(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, u = t.return; u !== null; )
      u.childLanes |= e, a = u.alternate, a !== null && (a.childLanes |= e), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && l !== null && (n = 31 - Sl(e), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [l] : a.push(l), l.lane = e | 536870912), u) : null;
  }
  function au(t) {
    if (50 < Dn)
      throw Dn = 0, Gc = null, Error(r(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Sa = {};
  function nh(t, l, e, a) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function pl(t, l, e, a) {
    return new nh(t, l, e, a);
  }
  function Ri(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Fl(t, l) {
    var e = t.alternate;
    return e === null ? (e = pl(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function Ms(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function nu(t, l, e, a, n, u) {
    var i = 0;
    if (a = t, typeof t == "function") Ri(t) && (i = 1);
    else if (typeof t == "string")
      i = s0(
        t,
        e,
        j.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Ht:
          return t = pl(31, e, l, n), t.elementType = Ht, t.lanes = u, t;
        case ft:
          return Ve(e.children, n, u, l);
        case Ot:
          i = 8, n |= 24;
          break;
        case ht:
          return t = pl(12, e, l, n | 2), t.elementType = ht, t.lanes = u, t;
        case $t:
          return t = pl(13, e, l, n), t.elementType = $t, t.lanes = u, t;
        case Lt:
          return t = pl(19, e, l, n), t.elementType = Lt, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case pt:
                i = 10;
                break t;
              case Ct:
                i = 9;
                break t;
              case Kt:
                i = 11;
                break t;
              case I:
                i = 14;
                break t;
              case Zt:
                i = 16, a = null;
                break t;
            }
          i = 29, e = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return l = pl(i, e, l, n), l.elementType = t, l.type = a, l.lanes = u, l;
  }
  function Ve(t, l, e, a) {
    return t = pl(7, t, a, l), t.lanes = e, t;
  }
  function xi(t, l, e) {
    return t = pl(6, t, null, l), t.lanes = e, t;
  }
  function Us(t) {
    var l = pl(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function Ci(t, l, e) {
    return l = pl(
      4,
      t.children !== null ? t.children : [],
      t.key,
      l
    ), l.lanes = e, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var Ns = /* @__PURE__ */ new WeakMap();
  function Ul(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Ns.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: nl(l)
      }, Ns.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: nl(l)
    };
  }
  var ba = [], pa = 0, uu = null, nn = 0, Nl = [], Rl = 0, he = null, Ql = 1, Ll = "";
  function Wl(t, l) {
    ba[pa++] = nn, ba[pa++] = uu, uu = t, nn = l;
  }
  function Rs(t, l, e) {
    Nl[Rl++] = Ql, Nl[Rl++] = Ll, Nl[Rl++] = he, he = t;
    var a = Ql;
    t = Ll;
    var n = 32 - Sl(a) - 1;
    a &= ~(1 << n), e += 1;
    var u = 32 - Sl(l) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Ql = 1 << 32 - Sl(l) + n | e << n | a, Ll = u + t;
    } else
      Ql = 1 << u | e << n | a, Ll = t;
  }
  function Hi(t) {
    t.return !== null && (Wl(t, 1), Rs(t, 1, 0));
  }
  function Bi(t) {
    for (; t === uu; )
      uu = ba[--pa], ba[pa] = null, nn = ba[--pa], ba[pa] = null;
    for (; t === he; )
      he = Nl[--Rl], Nl[Rl] = null, Ll = Nl[--Rl], Nl[Rl] = null, Ql = Nl[--Rl], Nl[Rl] = null;
  }
  function xs(t, l) {
    Nl[Rl++] = Ql, Nl[Rl++] = Ll, Nl[Rl++] = he, Ql = l.id, Ll = l.overflow, he = t;
  }
  var It = null, _t = null, ct = !1, ye = null, xl = !1, ji = Error(r(519));
  function ve(t) {
    var l = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw un(Ul(l, t)), ji;
  }
  function Cs(t) {
    var l = t.stateNode, e = t.type, a = t.memoizedProps;
    switch (l[Wt] = t, l[cl] = a, e) {
      case "dialog":
        nt("cancel", l), nt("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        nt("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Mn.length; e++)
          nt(Mn[e], l);
        break;
      case "source":
        nt("error", l);
        break;
      case "img":
      case "image":
      case "link":
        nt("error", l), nt("load", l);
        break;
      case "details":
        nt("toggle", l);
        break;
      case "input":
        nt("invalid", l), Jf(
          l,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        nt("invalid", l);
        break;
      case "textarea":
        nt("invalid", l), kf(l, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === !0 || Wo(l.textContent, e) ? (a.popover != null && (nt("beforetoggle", l), nt("toggle", l)), a.onScroll != null && nt("scroll", l), a.onScrollEnd != null && nt("scrollend", l), a.onClick != null && (l.onclick = kl), l = !0) : l = !1, l || ve(t, !0);
  }
  function Hs(t) {
    for (It = t.return; It; )
      switch (It.tag) {
        case 5:
        case 31:
        case 13:
          xl = !1;
          return;
        case 27:
        case 3:
          xl = !0;
          return;
        default:
          It = It.return;
      }
  }
  function Ea(t) {
    if (t !== It) return !1;
    if (!ct) return Hs(t), ct = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || tf(t.type, t.memoizedProps)), e = !e), e && _t && ve(t), Hs(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      _t = id(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      _t = id(t);
    } else
      l === 27 ? (l = _t, Ne(t.type) ? (t = uf, uf = null, _t = t) : _t = l) : _t = It ? Hl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ke() {
    _t = It = null, ct = !1;
  }
  function qi() {
    var t = ye;
    return t !== null && (dl === null ? dl = t : dl.push.apply(
      dl,
      t
    ), ye = null), t;
  }
  function un(t) {
    ye === null ? ye = [t] : ye.push(t);
  }
  var Yi = d(null), Je = null, Il = null;
  function ge(t, l, e) {
    B(Yi, l._currentValue), l._currentValue = e;
  }
  function Pl(t) {
    t._currentValue = Yi.current, z(Yi);
  }
  function Gi(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function Xi(t, l, e, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var c = u;
          u = n;
          for (var s = 0; s < l.length; s++)
            if (c.context === l[s]) {
              u.lanes |= e, c = u.alternate, c !== null && (c.lanes |= e), Gi(
                u.return,
                e,
                t
              ), a || (i = null);
              break t;
            }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(r(341));
        i.lanes |= e, u = i.alternate, u !== null && (u.lanes |= e), Gi(i, e, t), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function Ta(t, l, e, a) {
    t = null;
    for (var n = l, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(r(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          bl(n.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (n === st.current) {
        if (i = n.alternate, i === null) throw Error(r(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Cn) : t = [Cn]);
      }
      n = n.return;
    }
    t !== null && Xi(
      l,
      t,
      e,
      a
    ), l.flags |= 262144;
  }
  function iu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!bl(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function we(t) {
    Je = t, Il = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Pt(t) {
    return Bs(Je, t);
  }
  function cu(t, l) {
    return Je === null && we(t), Bs(t, l);
  }
  function Bs(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, Il === null) {
      if (t === null) throw Error(r(308));
      Il = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else Il = Il.next = l;
    return e;
  }
  var uh = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(e) {
        return e();
      });
    };
  }, ih = f.unstable_scheduleCallback, ch = f.unstable_NormalPriority, Yt = {
    $$typeof: pt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Qi() {
    return {
      controller: new uh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function cn(t) {
    t.refCount--, t.refCount === 0 && ih(ch, function() {
      t.controller.abort();
    });
  }
  var fn = null, Li = 0, Aa = 0, za = null;
  function fh(t, l) {
    if (fn === null) {
      var e = fn = [];
      Li = 0, Aa = Kc(), za = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Li++, l.then(js, js), l;
  }
  function js() {
    if (--Li === 0 && fn !== null) {
      za !== null && (za.status = "fulfilled");
      var t = fn;
      fn = null, Aa = 0, za = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function sh(t, l) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        e.push(n);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = l;
        for (var n = 0; n < e.length; n++) (0, e[n])(l);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)
          (0, e[n])(void 0);
      }
    ), a;
  }
  var qs = T.S;
  T.S = function(t, l) {
    Eo = vl(), typeof l == "object" && l !== null && typeof l.then == "function" && fh(t, l), qs !== null && qs(t, l);
  };
  var ke = d(null);
  function Zi() {
    var t = ke.current;
    return t !== null ? t : zt.pooledCache;
  }
  function fu(t, l) {
    l === null ? B(ke, ke.current) : B(ke, l.pool);
  }
  function Ys() {
    var t = Zi();
    return t === null ? null : { parent: Yt._currentValue, pool: t };
  }
  var _a = Error(r(460)), Vi = Error(r(474)), su = Error(r(542)), ru = { then: function() {
  } };
  function Gs(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Xs(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(kl, kl), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, Ls(t), t;
      default:
        if (typeof l.status == "string") l.then(kl, kl);
        else {
          if (t = zt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = l, t.status = "pending", t.then(
            function(a) {
              if (l.status === "pending") {
                var n = l;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (l.status === "pending") {
                var n = l;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, Ls(t), t;
        }
        throw Fe = l, _a;
    }
  }
  function $e(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Fe = e, _a) : e;
    }
  }
  var Fe = null;
  function Qs() {
    if (Fe === null) throw Error(r(459));
    var t = Fe;
    return Fe = null, t;
  }
  function Ls(t) {
    if (t === _a || t === su)
      throw Error(r(483));
  }
  var Da = null, sn = 0;
  function ou(t) {
    var l = sn;
    return sn += 1, Da === null && (Da = []), Xs(Da, t, l);
  }
  function rn(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function du(t, l) {
    throw l.$$typeof === C ? Error(r(525)) : (t = Object.prototype.toString.call(l), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function Zs(t) {
    function l(m, o) {
      if (t) {
        var h = m.deletions;
        h === null ? (m.deletions = [o], m.flags |= 16) : h.push(o);
      }
    }
    function e(m, o) {
      if (!t) return null;
      for (; o !== null; )
        l(m, o), o = o.sibling;
      return null;
    }
    function a(m) {
      for (var o = /* @__PURE__ */ new Map(); m !== null; )
        m.key !== null ? o.set(m.key, m) : o.set(m.index, m), m = m.sibling;
      return o;
    }
    function n(m, o) {
      return m = Fl(m, o), m.index = 0, m.sibling = null, m;
    }
    function u(m, o, h) {
      return m.index = h, t ? (h = m.alternate, h !== null ? (h = h.index, h < o ? (m.flags |= 67108866, o) : h) : (m.flags |= 67108866, o)) : (m.flags |= 1048576, o);
    }
    function i(m) {
      return t && m.alternate === null && (m.flags |= 67108866), m;
    }
    function c(m, o, h, A) {
      return o === null || o.tag !== 6 ? (o = xi(h, m.mode, A), o.return = m, o) : (o = n(o, h), o.return = m, o);
    }
    function s(m, o, h, A) {
      var Z = h.type;
      return Z === ft ? E(
        m,
        o,
        h.props.children,
        A,
        h.key
      ) : o !== null && (o.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === Zt && $e(Z) === o.type) ? (o = n(o, h.props), rn(o, h), o.return = m, o) : (o = nu(
        h.type,
        h.key,
        h.props,
        null,
        m.mode,
        A
      ), rn(o, h), o.return = m, o);
    }
    function y(m, o, h, A) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== h.containerInfo || o.stateNode.implementation !== h.implementation ? (o = Ci(h, m.mode, A), o.return = m, o) : (o = n(o, h.children || []), o.return = m, o);
    }
    function E(m, o, h, A, Z) {
      return o === null || o.tag !== 7 ? (o = Ve(
        h,
        m.mode,
        A,
        Z
      ), o.return = m, o) : (o = n(o, h), o.return = m, o);
    }
    function _(m, o, h) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = xi(
          "" + o,
          m.mode,
          h
        ), o.return = m, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case $:
            return h = nu(
              o.type,
              o.key,
              o.props,
              null,
              m.mode,
              h
            ), rn(h, o), h.return = m, h;
          case mt:
            return o = Ci(
              o,
              m.mode,
              h
            ), o.return = m, o;
          case Zt:
            return o = $e(o), _(m, o, h);
        }
        if (il(o) || Jt(o))
          return o = Ve(
            o,
            m.mode,
            h,
            null
          ), o.return = m, o;
        if (typeof o.then == "function")
          return _(m, ou(o), h);
        if (o.$$typeof === pt)
          return _(
            m,
            cu(m, o),
            h
          );
        du(m, o);
      }
      return null;
    }
    function v(m, o, h, A) {
      var Z = o !== null ? o.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return Z !== null ? null : c(m, o, "" + h, A);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case $:
            return h.key === Z ? s(m, o, h, A) : null;
          case mt:
            return h.key === Z ? y(m, o, h, A) : null;
          case Zt:
            return h = $e(h), v(m, o, h, A);
        }
        if (il(h) || Jt(h))
          return Z !== null ? null : E(m, o, h, A, null);
        if (typeof h.then == "function")
          return v(
            m,
            o,
            ou(h),
            A
          );
        if (h.$$typeof === pt)
          return v(
            m,
            o,
            cu(m, h),
            A
          );
        du(m, h);
      }
      return null;
    }
    function b(m, o, h, A, Z) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return m = m.get(h) || null, c(o, m, "" + A, Z);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case $:
            return m = m.get(
              A.key === null ? h : A.key
            ) || null, s(o, m, A, Z);
          case mt:
            return m = m.get(
              A.key === null ? h : A.key
            ) || null, y(o, m, A, Z);
          case Zt:
            return A = $e(A), b(
              m,
              o,
              h,
              A,
              Z
            );
        }
        if (il(A) || Jt(A))
          return m = m.get(h) || null, E(o, m, A, Z, null);
        if (typeof A.then == "function")
          return b(
            m,
            o,
            h,
            ou(A),
            Z
          );
        if (A.$$typeof === pt)
          return b(
            m,
            o,
            h,
            cu(o, A),
            Z
          );
        du(o, A);
      }
      return null;
    }
    function Y(m, o, h, A) {
      for (var Z = null, rt = null, L = o, tt = o = 0, it = null; L !== null && tt < h.length; tt++) {
        L.index > tt ? (it = L, L = null) : it = L.sibling;
        var ot = v(
          m,
          L,
          h[tt],
          A
        );
        if (ot === null) {
          L === null && (L = it);
          break;
        }
        t && L && ot.alternate === null && l(m, L), o = u(ot, o, tt), rt === null ? Z = ot : rt.sibling = ot, rt = ot, L = it;
      }
      if (tt === h.length)
        return e(m, L), ct && Wl(m, tt), Z;
      if (L === null) {
        for (; tt < h.length; tt++)
          L = _(m, h[tt], A), L !== null && (o = u(
            L,
            o,
            tt
          ), rt === null ? Z = L : rt.sibling = L, rt = L);
        return ct && Wl(m, tt), Z;
      }
      for (L = a(L); tt < h.length; tt++)
        it = b(
          L,
          m,
          tt,
          h[tt],
          A
        ), it !== null && (t && it.alternate !== null && L.delete(
          it.key === null ? tt : it.key
        ), o = u(
          it,
          o,
          tt
        ), rt === null ? Z = it : rt.sibling = it, rt = it);
      return t && L.forEach(function(Be) {
        return l(m, Be);
      }), ct && Wl(m, tt), Z;
    }
    function k(m, o, h, A) {
      if (h == null) throw Error(r(151));
      for (var Z = null, rt = null, L = o, tt = o = 0, it = null, ot = h.next(); L !== null && !ot.done; tt++, ot = h.next()) {
        L.index > tt ? (it = L, L = null) : it = L.sibling;
        var Be = v(m, L, ot.value, A);
        if (Be === null) {
          L === null && (L = it);
          break;
        }
        t && L && Be.alternate === null && l(m, L), o = u(Be, o, tt), rt === null ? Z = Be : rt.sibling = Be, rt = Be, L = it;
      }
      if (ot.done)
        return e(m, L), ct && Wl(m, tt), Z;
      if (L === null) {
        for (; !ot.done; tt++, ot = h.next())
          ot = _(m, ot.value, A), ot !== null && (o = u(ot, o, tt), rt === null ? Z = ot : rt.sibling = ot, rt = ot);
        return ct && Wl(m, tt), Z;
      }
      for (L = a(L); !ot.done; tt++, ot = h.next())
        ot = b(L, m, tt, ot.value, A), ot !== null && (t && ot.alternate !== null && L.delete(ot.key === null ? tt : ot.key), o = u(ot, o, tt), rt === null ? Z = ot : rt.sibling = ot, rt = ot);
      return t && L.forEach(function(p0) {
        return l(m, p0);
      }), ct && Wl(m, tt), Z;
    }
    function At(m, o, h, A) {
      if (typeof h == "object" && h !== null && h.type === ft && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case $:
            t: {
              for (var Z = h.key; o !== null; ) {
                if (o.key === Z) {
                  if (Z = h.type, Z === ft) {
                    if (o.tag === 7) {
                      e(
                        m,
                        o.sibling
                      ), A = n(
                        o,
                        h.props.children
                      ), A.return = m, m = A;
                      break t;
                    }
                  } else if (o.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === Zt && $e(Z) === o.type) {
                    e(
                      m,
                      o.sibling
                    ), A = n(o, h.props), rn(A, h), A.return = m, m = A;
                    break t;
                  }
                  e(m, o);
                  break;
                } else l(m, o);
                o = o.sibling;
              }
              h.type === ft ? (A = Ve(
                h.props.children,
                m.mode,
                A,
                h.key
              ), A.return = m, m = A) : (A = nu(
                h.type,
                h.key,
                h.props,
                null,
                m.mode,
                A
              ), rn(A, h), A.return = m, m = A);
            }
            return i(m);
          case mt:
            t: {
              for (Z = h.key; o !== null; ) {
                if (o.key === Z)
                  if (o.tag === 4 && o.stateNode.containerInfo === h.containerInfo && o.stateNode.implementation === h.implementation) {
                    e(
                      m,
                      o.sibling
                    ), A = n(o, h.children || []), A.return = m, m = A;
                    break t;
                  } else {
                    e(m, o);
                    break;
                  }
                else l(m, o);
                o = o.sibling;
              }
              A = Ci(h, m.mode, A), A.return = m, m = A;
            }
            return i(m);
          case Zt:
            return h = $e(h), At(
              m,
              o,
              h,
              A
            );
        }
        if (il(h))
          return Y(
            m,
            o,
            h,
            A
          );
        if (Jt(h)) {
          if (Z = Jt(h), typeof Z != "function") throw Error(r(150));
          return h = Z.call(h), k(
            m,
            o,
            h,
            A
          );
        }
        if (typeof h.then == "function")
          return At(
            m,
            o,
            ou(h),
            A
          );
        if (h.$$typeof === pt)
          return At(
            m,
            o,
            cu(m, h),
            A
          );
        du(m, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, o !== null && o.tag === 6 ? (e(m, o.sibling), A = n(o, h), A.return = m, m = A) : (e(m, o), A = xi(h, m.mode, A), A.return = m, m = A), i(m)) : e(m, o);
    }
    return function(m, o, h, A) {
      try {
        sn = 0;
        var Z = At(
          m,
          o,
          h,
          A
        );
        return Da = null, Z;
      } catch (L) {
        if (L === _a || L === su) throw L;
        var rt = pl(29, L, null, m.mode);
        return rt.lanes = A, rt.return = m, rt;
      }
    };
  }
  var We = Zs(!0), Vs = Zs(!1), Se = !1;
  function Ki(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ji(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function be(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function pe(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (dt & 2) !== 0) {
      var n = a.pending;
      return n === null ? l.next = l : (l.next = n.next, n.next = l), a.pending = l, l = au(t), Os(t, null, e), l;
    }
    return eu(t, a, l, e), au(t);
  }
  function on(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Bf(t, e);
    }
  }
  function wi(t, l) {
    var e = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var n = null, u = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, e = e.next;
        } while (e !== null);
        u === null ? n = u = l : u = u.next = l;
      } else n = u = l;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var ki = !1;
  function dn() {
    if (ki) {
      var t = za;
      if (t !== null) throw t;
    }
  }
  function mn(t, l, e, a) {
    ki = !1;
    var n = t.updateQueue;
    Se = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var s = c, y = s.next;
      s.next = null, i === null ? u = y : i.next = y, i = s;
      var E = t.alternate;
      E !== null && (E = E.updateQueue, c = E.lastBaseUpdate, c !== i && (c === null ? E.firstBaseUpdate = y : c.next = y, E.lastBaseUpdate = s));
    }
    if (u !== null) {
      var _ = n.baseState;
      i = 0, E = y = s = null, c = u;
      do {
        var v = c.lane & -536870913, b = v !== c.lane;
        if (b ? (ut & v) === v : (a & v) === v) {
          v !== 0 && v === Aa && (ki = !0), E !== null && (E = E.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var Y = t, k = c;
            v = l;
            var At = e;
            switch (k.tag) {
              case 1:
                if (Y = k.payload, typeof Y == "function") {
                  _ = Y.call(At, _, v);
                  break t;
                }
                _ = Y;
                break t;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = k.payload, v = typeof Y == "function" ? Y.call(At, _, v) : Y, v == null) break t;
                _ = x({}, _, v);
                break t;
              case 2:
                Se = !0;
            }
          }
          v = c.callback, v !== null && (t.flags |= 64, b && (t.flags |= 8192), b = n.callbacks, b === null ? n.callbacks = [v] : b.push(v));
        } else
          b = {
            lane: v,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, E === null ? (y = E = b, s = _) : E = E.next = b, i |= v;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null)
            break;
          b = c, c = b.next, b.next = null, n.lastBaseUpdate = b, n.shared.pending = null;
        }
      } while (!0);
      E === null && (s = _), n.baseState = s, n.firstBaseUpdate = y, n.lastBaseUpdate = E, u === null && (n.shared.lanes = 0), _e |= i, t.lanes = i, t.memoizedState = _;
    }
  }
  function Ks(t, l) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(l);
  }
  function Js(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        Ks(e[t], l);
  }
  var Oa = d(null), mu = d(0);
  function ws(t, l) {
    t = fe, B(mu, t), B(Oa, l), fe = t | l.baseLanes;
  }
  function $i() {
    B(mu, fe), B(Oa, Oa.current);
  }
  function Fi() {
    fe = mu.current, z(Oa), z(mu);
  }
  var El = d(null), Cl = null;
  function Ee(t) {
    var l = t.alternate;
    B(jt, jt.current & 1), B(El, t), Cl === null && (l === null || Oa.current !== null || l.memoizedState !== null) && (Cl = t);
  }
  function Wi(t) {
    B(jt, jt.current), B(El, t), Cl === null && (Cl = t);
  }
  function ks(t) {
    t.tag === 22 ? (B(jt, jt.current), B(El, t), Cl === null && (Cl = t)) : Te();
  }
  function Te() {
    B(jt, jt.current), B(El, El.current);
  }
  function Tl(t) {
    z(El), Cl === t && (Cl = null), z(jt);
  }
  var jt = d(0);
  function hu(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || af(e) || nf(e)))
          return l;
      } else if (l.tag === 19 && (l.memoizedProps.revealOrder === "forwards" || l.memoizedProps.revealOrder === "backwards" || l.memoizedProps.revealOrder === "unstable_legacy-backwards" || l.memoizedProps.revealOrder === "together")) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  var te = 0, P = null, Et = null, Gt = null, yu = !1, Ma = !1, Ie = !1, vu = 0, hn = 0, Ua = null, rh = 0;
  function Rt() {
    throw Error(r(321));
  }
  function Ii(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!bl(t[e], l[e])) return !1;
    return !0;
  }
  function Pi(t, l, e, a, n, u) {
    return te = u, P = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, T.H = t === null || t.memoizedState === null ? Rr : hc, Ie = !1, u = e(a, n), Ie = !1, Ma && (u = Fs(
      l,
      e,
      a,
      n
    )), $s(t), u;
  }
  function $s(t) {
    T.H = gn;
    var l = Et !== null && Et.next !== null;
    if (te = 0, Gt = Et = P = null, yu = !1, hn = 0, Ua = null, l) throw Error(r(300));
    t === null || Xt || (t = t.dependencies, t !== null && iu(t) && (Xt = !0));
  }
  function Fs(t, l, e, a) {
    P = t;
    var n = 0;
    do {
      if (Ma && (Ua = null), hn = 0, Ma = !1, 25 <= n) throw Error(r(301));
      if (n += 1, Gt = Et = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      T.H = xr, u = l(e, a);
    } while (Ma);
    return u;
  }
  function oh() {
    var t = T.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? yn(l) : l, t = t.useState()[0], (Et !== null ? Et.memoizedState : null) !== t && (P.flags |= 1024), l;
  }
  function tc() {
    var t = vu !== 0;
    return vu = 0, t;
  }
  function lc(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function ec(t) {
    if (yu) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      yu = !1;
    }
    te = 0, Gt = Et = P = null, Ma = !1, hn = vu = 0, Ua = null;
  }
  function ul() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Gt === null ? P.memoizedState = Gt = t : Gt = Gt.next = t, Gt;
  }
  function qt() {
    if (Et === null) {
      var t = P.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Et.next;
    var l = Gt === null ? P.memoizedState : Gt.next;
    if (l !== null)
      Gt = l, Et = t;
    else {
      if (t === null)
        throw P.alternate === null ? Error(r(467)) : Error(r(310));
      Et = t, t = {
        memoizedState: Et.memoizedState,
        baseState: Et.baseState,
        baseQueue: Et.baseQueue,
        queue: Et.queue,
        next: null
      }, Gt === null ? P.memoizedState = Gt = t : Gt = Gt.next = t;
    }
    return Gt;
  }
  function gu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function yn(t) {
    var l = hn;
    return hn += 1, Ua === null && (Ua = []), t = Xs(Ua, t, l), l = P, (Gt === null ? l.memoizedState : Gt.next) === null && (l = l.alternate, T.H = l === null || l.memoizedState === null ? Rr : hc), t;
  }
  function Su(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return yn(t);
      if (t.$$typeof === pt) return Pt(t);
    }
    throw Error(r(438, String(t)));
  }
  function ac(t) {
    var l = null, e = P.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var a = P.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = gu(), P.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
        e[a] = el;
    return l.index++, e;
  }
  function le(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function bu(t) {
    var l = qt();
    return nc(l, Et, t);
  }
  function nc(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var n = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      l.baseQueue = n = u, a.pending = null;
    }
    if (u = t.baseState, n === null) t.memoizedState = u;
    else {
      l = n.next;
      var c = i = null, s = null, y = l, E = !1;
      do {
        var _ = y.lane & -536870913;
        if (_ !== y.lane ? (ut & _) === _ : (te & _) === _) {
          var v = y.revertLane;
          if (v === 0)
            s !== null && (s = s.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), _ === Aa && (E = !0);
          else if ((te & v) === v) {
            y = y.next, v === Aa && (E = !0);
            continue;
          } else
            _ = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, s === null ? (c = s = _, i = u) : s = s.next = _, P.lanes |= v, _e |= v;
          _ = y.action, Ie && e(u, _), u = y.hasEagerState ? y.eagerState : e(u, _);
        } else
          v = {
            lane: _,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, s === null ? (c = s = v, i = u) : s = s.next = v, P.lanes |= _, _e |= _;
        y = y.next;
      } while (y !== null && y !== l);
      if (s === null ? i = u : s.next = c, !bl(u, t.memoizedState) && (Xt = !0, E && (e = za, e !== null)))
        throw e;
      t.memoizedState = u, t.baseState = i, t.baseQueue = s, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function uc(t) {
    var l = qt(), e = l.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch, n = e.pending, u = l.memoizedState;
    if (n !== null) {
      e.pending = null;
      var i = n = n.next;
      do
        u = t(u, i.action), i = i.next;
      while (i !== n);
      bl(u, l.memoizedState) || (Xt = !0), l.memoizedState = u, l.baseQueue === null && (l.baseState = u), e.lastRenderedState = u;
    }
    return [u, a];
  }
  function Ws(t, l, e) {
    var a = P, n = qt(), u = ct;
    if (u) {
      if (e === void 0) throw Error(r(407));
      e = e();
    } else e = l();
    var i = !bl(
      (Et || n).memoizedState,
      e
    );
    if (i && (n.memoizedState = e, Xt = !0), n = n.queue, fc(tr.bind(null, a, n, t), [
      t
    ]), n.getSnapshot !== l || i || Gt !== null && Gt.memoizedState.tag & 1) {
      if (a.flags |= 2048, Na(
        9,
        { destroy: void 0 },
        Ps.bind(
          null,
          a,
          n,
          e,
          l
        ),
        null
      ), zt === null) throw Error(r(349));
      u || (te & 127) !== 0 || Is(a, l, e);
    }
    return e;
  }
  function Is(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = P.updateQueue, l === null ? (l = gu(), P.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function Ps(t, l, e, a) {
    l.value = e, l.getSnapshot = a, lr(l) && er(t);
  }
  function tr(t, l, e) {
    return e(function() {
      lr(l) && er(t);
    });
  }
  function lr(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !bl(t, e);
    } catch {
      return !0;
    }
  }
  function er(t) {
    var l = Ze(t, 2);
    l !== null && ml(l, t, 2);
  }
  function ic(t) {
    var l = ul();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), Ie) {
        oe(!0);
        try {
          e();
        } finally {
          oe(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: le,
      lastRenderedState: t
    }, l;
  }
  function ar(t, l, e, a) {
    return t.baseState = e, nc(
      t,
      Et,
      typeof a == "function" ? a : le
    );
  }
  function dh(t, l, e, a, n) {
    if (Tu(t)) throw Error(r(485));
    if (t = l.action, t !== null) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i);
        }
      };
      T.T !== null ? e(!0) : u.isTransition = !1, a(u), e = l.pending, e === null ? (u.next = l.pending = u, nr(l, u)) : (u.next = e.next, l.pending = e.next = u);
    }
  }
  function nr(t, l) {
    var e = l.action, a = l.payload, n = t.state;
    if (l.isTransition) {
      var u = T.T, i = {};
      T.T = i;
      try {
        var c = e(n, a), s = T.S;
        s !== null && s(i, c), ur(t, l, c);
      } catch (y) {
        cc(t, l, y);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), T.T = u;
      }
    } else
      try {
        u = e(n, a), ur(t, l, u);
      } catch (y) {
        cc(t, l, y);
      }
  }
  function ur(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        ir(t, l, a);
      },
      function(a) {
        return cc(t, l, a);
      }
    ) : ir(t, l, e);
  }
  function ir(t, l, e) {
    l.status = "fulfilled", l.value = e, cr(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, nr(t, e)));
  }
  function cc(t, l, e) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        l.status = "rejected", l.reason = e, cr(l), l = l.next;
      while (l !== a);
    }
    t.action = null;
  }
  function cr(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function fr(t, l) {
    return l;
  }
  function sr(t, l) {
    if (ct) {
      var e = zt.formState;
      if (e !== null) {
        t: {
          var a = P;
          if (ct) {
            if (_t) {
              l: {
                for (var n = _t, u = xl; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break l;
                  }
                  if (n = Hl(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break l;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                _t = Hl(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            ve(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return e = ul(), e.memoizedState = e.baseState = l, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fr,
      lastRenderedState: l
    }, e.queue = a, e = Mr.bind(
      null,
      P,
      a
    ), a.dispatch = e, a = ic(!1), u = mc.bind(
      null,
      P,
      !1,
      a.queue
    ), a = ul(), n = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, e = dh.bind(
      null,
      P,
      n,
      u,
      e
    ), n.dispatch = e, a.memoizedState = t, [l, e, !1];
  }
  function rr(t) {
    var l = qt();
    return or(l, Et, t);
  }
  function or(t, l, e) {
    if (l = nc(
      t,
      l,
      fr
    )[0], t = bu(le)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = yn(l);
      } catch (i) {
        throw i === _a ? su : i;
      }
    else a = l;
    l = qt();
    var n = l.queue, u = n.dispatch;
    return e !== l.memoizedState && (P.flags |= 2048, Na(
      9,
      { destroy: void 0 },
      mh.bind(null, n, e),
      null
    )), [a, u, t];
  }
  function mh(t, l) {
    t.action = l;
  }
  function dr(t) {
    var l = qt(), e = Et;
    if (e !== null)
      return or(l, e, t);
    qt(), l = l.memoizedState, e = qt();
    var a = e.queue.dispatch;
    return e.memoizedState = t, [l, a, !1];
  }
  function Na(t, l, e, a) {
    return t = { tag: t, create: e, deps: a, inst: l, next: null }, l = P.updateQueue, l === null && (l = gu(), P.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
  }
  function mr() {
    return qt().memoizedState;
  }
  function pu(t, l, e, a) {
    var n = ul();
    P.flags |= t, n.memoizedState = Na(
      1 | l,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function Eu(t, l, e, a) {
    var n = qt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    Et !== null && a !== null && Ii(a, Et.memoizedState.deps) ? n.memoizedState = Na(l, u, e, a) : (P.flags |= t, n.memoizedState = Na(
      1 | l,
      u,
      e,
      a
    ));
  }
  function hr(t, l) {
    pu(8390656, 8, t, l);
  }
  function fc(t, l) {
    Eu(2048, 8, t, l);
  }
  function hh(t) {
    P.flags |= 4;
    var l = P.updateQueue;
    if (l === null)
      l = gu(), P.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function yr(t) {
    var l = qt().memoizedState;
    return hh({ ref: l, nextImpl: t }), function() {
      if ((dt & 2) !== 0) throw Error(r(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function vr(t, l) {
    return Eu(4, 2, t, l);
  }
  function gr(t, l) {
    return Eu(4, 4, t, l);
  }
  function Sr(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function() {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return t = t(), l.current = t, function() {
        l.current = null;
      };
  }
  function br(t, l, e) {
    e = e != null ? e.concat([t]) : null, Eu(4, 4, Sr.bind(null, l, t), e);
  }
  function sc() {
  }
  function pr(t, l) {
    var e = qt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && Ii(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
  }
  function Er(t, l) {
    var e = qt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && Ii(l, a[1]))
      return a[0];
    if (a = t(), Ie) {
      oe(!0);
      try {
        t();
      } finally {
        oe(!1);
      }
    }
    return e.memoizedState = [a, l], a;
  }
  function rc(t, l, e) {
    return e === void 0 || (te & 1073741824) !== 0 && (ut & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = Ao(), P.lanes |= t, _e |= t, e);
  }
  function Tr(t, l, e, a) {
    return bl(e, l) ? e : Oa.current !== null ? (t = rc(t, e, a), bl(t, l) || (Xt = !0), t) : (te & 42) === 0 || (te & 1073741824) !== 0 && (ut & 261930) === 0 ? (Xt = !0, t.memoizedState = e) : (t = Ao(), P.lanes |= t, _e |= t, l);
  }
  function Ar(t, l, e, a, n) {
    var u = H.p;
    H.p = u !== 0 && 8 > u ? u : 8;
    var i = T.T, c = {};
    T.T = c, mc(t, !1, l, e);
    try {
      var s = n(), y = T.S;
      if (y !== null && y(c, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var E = sh(
          s,
          a
        );
        vn(
          t,
          l,
          E,
          _l(t)
        );
      } else
        vn(
          t,
          l,
          a,
          _l(t)
        );
    } catch (_) {
      vn(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: _ },
        _l()
      );
    } finally {
      H.p = u, i !== null && c.types !== null && (i.types = c.types), T.T = i;
    }
  }
  function yh() {
  }
  function oc(t, l, e, a) {
    if (t.tag !== 5) throw Error(r(476));
    var n = zr(t).queue;
    Ar(
      t,
      n,
      l,
      w,
      e === null ? yh : function() {
        return _r(t), e(a);
      }
    );
  }
  function zr(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: w,
      baseState: w,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: le,
        lastRenderedState: w
      },
      next: null
    };
    var e = {};
    return l.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: le,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function _r(t) {
    var l = zr(t);
    l.next === null && (l = t.alternate.memoizedState), vn(
      t,
      l.next.queue,
      {},
      _l()
    );
  }
  function dc() {
    return Pt(Cn);
  }
  function Dr() {
    return qt().memoizedState;
  }
  function Or() {
    return qt().memoizedState;
  }
  function vh(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = _l();
          t = be(e);
          var a = pe(l, t, e);
          a !== null && (ml(a, l, e), on(a, l, e)), l = { cache: Qi() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function gh(t, l, e) {
    var a = _l();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Tu(t) ? Ur(l, e) : (e = Ni(t, l, e, a), e !== null && (ml(e, t, a), Nr(e, l, a)));
  }
  function Mr(t, l, e) {
    var a = _l();
    vn(t, l, e, a);
  }
  function vn(t, l, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Tu(t)) Ur(l, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = l.lastRenderedReducer, u !== null))
        try {
          var i = l.lastRenderedState, c = u(i, e);
          if (n.hasEagerState = !0, n.eagerState = c, bl(c, i))
            return eu(t, l, n, 0), zt === null && lu(), !1;
        } catch {
        }
      if (e = Ni(t, l, n, a), e !== null)
        return ml(e, t, a), Nr(e, l, a), !0;
    }
    return !1;
  }
  function mc(t, l, e, a) {
    if (a = {
      lane: 2,
      revertLane: Kc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Tu(t)) {
      if (l) throw Error(r(479));
    } else
      l = Ni(
        t,
        e,
        a,
        2
      ), l !== null && ml(l, t, 2);
  }
  function Tu(t) {
    var l = t.alternate;
    return t === P || l !== null && l === P;
  }
  function Ur(t, l) {
    Ma = yu = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function Nr(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Bf(t, e);
    }
  }
  var gn = {
    readContext: Pt,
    use: Su,
    useCallback: Rt,
    useContext: Rt,
    useEffect: Rt,
    useImperativeHandle: Rt,
    useLayoutEffect: Rt,
    useInsertionEffect: Rt,
    useMemo: Rt,
    useReducer: Rt,
    useRef: Rt,
    useState: Rt,
    useDebugValue: Rt,
    useDeferredValue: Rt,
    useTransition: Rt,
    useSyncExternalStore: Rt,
    useId: Rt,
    useHostTransitionStatus: Rt,
    useFormState: Rt,
    useActionState: Rt,
    useOptimistic: Rt,
    useMemoCache: Rt,
    useCacheRefresh: Rt
  };
  gn.useEffectEvent = Rt;
  var Rr = {
    readContext: Pt,
    use: Su,
    useCallback: function(t, l) {
      return ul().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: Pt,
    useEffect: hr,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, pu(
        4194308,
        4,
        Sr.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return pu(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      pu(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = ul();
      l = l === void 0 ? null : l;
      var a = t();
      if (Ie) {
        oe(!0);
        try {
          t();
        } finally {
          oe(!1);
        }
      }
      return e.memoizedState = [a, l], a;
    },
    useReducer: function(t, l, e) {
      var a = ul();
      if (e !== void 0) {
        var n = e(l);
        if (Ie) {
          oe(!0);
          try {
            e(l);
          } finally {
            oe(!1);
          }
        }
      } else n = l;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = gh.bind(
        null,
        P,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var l = ul();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = ic(t);
      var l = t.queue, e = Mr.bind(null, P, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: sc,
    useDeferredValue: function(t, l) {
      var e = ul();
      return rc(e, t, l);
    },
    useTransition: function() {
      var t = ic(!1);
      return t = Ar.bind(
        null,
        P,
        t.queue,
        !0,
        !1
      ), ul().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var a = P, n = ul();
      if (ct) {
        if (e === void 0)
          throw Error(r(407));
        e = e();
      } else {
        if (e = l(), zt === null)
          throw Error(r(349));
        (ut & 127) !== 0 || Is(a, l, e);
      }
      n.memoizedState = e;
      var u = { value: e, getSnapshot: l };
      return n.queue = u, hr(tr.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, Na(
        9,
        { destroy: void 0 },
        Ps.bind(
          null,
          a,
          u,
          e,
          l
        ),
        null
      ), e;
    },
    useId: function() {
      var t = ul(), l = zt.identifierPrefix;
      if (ct) {
        var e = Ll, a = Ql;
        e = (a & ~(1 << 32 - Sl(a) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = vu++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = rh++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: dc,
    useFormState: sr,
    useActionState: sr,
    useOptimistic: function(t) {
      var l = ul();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = mc.bind(
        null,
        P,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: ac,
    useCacheRefresh: function() {
      return ul().memoizedState = vh.bind(
        null,
        P
      );
    },
    useEffectEvent: function(t) {
      var l = ul(), e = { impl: t };
      return l.memoizedState = e, function() {
        if ((dt & 2) !== 0)
          throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, hc = {
    readContext: Pt,
    use: Su,
    useCallback: pr,
    useContext: Pt,
    useEffect: fc,
    useImperativeHandle: br,
    useInsertionEffect: vr,
    useLayoutEffect: gr,
    useMemo: Er,
    useReducer: bu,
    useRef: mr,
    useState: function() {
      return bu(le);
    },
    useDebugValue: sc,
    useDeferredValue: function(t, l) {
      var e = qt();
      return Tr(
        e,
        Et.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = bu(le)[0], l = qt().memoizedState;
      return [
        typeof t == "boolean" ? t : yn(t),
        l
      ];
    },
    useSyncExternalStore: Ws,
    useId: Dr,
    useHostTransitionStatus: dc,
    useFormState: rr,
    useActionState: rr,
    useOptimistic: function(t, l) {
      var e = qt();
      return ar(e, Et, t, l);
    },
    useMemoCache: ac,
    useCacheRefresh: Or
  };
  hc.useEffectEvent = yr;
  var xr = {
    readContext: Pt,
    use: Su,
    useCallback: pr,
    useContext: Pt,
    useEffect: fc,
    useImperativeHandle: br,
    useInsertionEffect: vr,
    useLayoutEffect: gr,
    useMemo: Er,
    useReducer: uc,
    useRef: mr,
    useState: function() {
      return uc(le);
    },
    useDebugValue: sc,
    useDeferredValue: function(t, l) {
      var e = qt();
      return Et === null ? rc(e, t, l) : Tr(
        e,
        Et.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = uc(le)[0], l = qt().memoizedState;
      return [
        typeof t == "boolean" ? t : yn(t),
        l
      ];
    },
    useSyncExternalStore: Ws,
    useId: Dr,
    useHostTransitionStatus: dc,
    useFormState: dr,
    useActionState: dr,
    useOptimistic: function(t, l) {
      var e = qt();
      return Et !== null ? ar(e, Et, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: ac,
    useCacheRefresh: Or
  };
  xr.useEffectEvent = yr;
  function yc(t, l, e, a) {
    l = t.memoizedState, e = e(a, l), e = e == null ? l : x({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var vc = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var a = _l(), n = be(a);
      n.payload = l, e != null && (n.callback = e), l = pe(t, n, a), l !== null && (ml(l, t, a), on(l, t, a));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var a = _l(), n = be(a);
      n.tag = 1, n.payload = l, e != null && (n.callback = e), l = pe(t, n, a), l !== null && (ml(l, t, a), on(l, t, a));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = _l(), a = be(e);
      a.tag = 2, l != null && (a.callback = l), l = pe(t, a, e), l !== null && (ml(l, t, e), on(l, t, e));
    }
  };
  function Cr(t, l, e, a, n, u, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : l.prototype && l.prototype.isPureReactComponent ? !en(e, a) || !en(n, u) : !0;
  }
  function Hr(t, l, e, a) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && vc.enqueueReplaceState(l, l.state, null);
  }
  function Pe(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l)
        a !== "ref" && (e[a] = l[a]);
    }
    if (t = t.defaultProps) {
      e === l && (e = x({}, e));
      for (var n in t)
        e[n] === void 0 && (e[n] = t[n]);
    }
    return e;
  }
  function Br(t) {
    tu(t);
  }
  function jr(t) {
    console.error(t);
  }
  function qr(t) {
    tu(t);
  }
  function Au(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Yr(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function gc(t, l, e) {
    return e = be(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      Au(t, l);
    }, e;
  }
  function Gr(t) {
    return t = be(t), t.tag = 3, t;
  }
  function Xr(t, l, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        Yr(l, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      Yr(l, e, a), typeof n != "function" && (De === null ? De = /* @__PURE__ */ new Set([this]) : De.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Sh(t, l, e, a, n) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = e.alternate, l !== null && Ta(
        l,
        e,
        n,
        !0
      ), e = El.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return Cl === null ? Bu() : e.alternate === null && xt === 0 && (xt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === ru ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Lc(t, a, n)), !1;
          case 22:
            return e.flags |= 65536, a === ru ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Lc(t, a, n)), !1;
        }
        throw Error(r(435, e.tag));
      }
      return Lc(t, a, n), Bu(), !1;
    }
    if (ct)
      return l = El.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = n, a !== ji && (t = Error(r(422), { cause: a }), un(Ul(t, e)))) : (a !== ji && (l = Error(r(423), {
        cause: a
      }), un(
        Ul(l, e)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Ul(a, e), n = gc(
        t.stateNode,
        a,
        n
      ), wi(t, n), xt !== 4 && (xt = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = Ul(u, e), _n === null ? _n = [u] : _n.push(u), xt !== 4 && (xt = 2), l === null) return !0;
    a = Ul(a, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = n & -n, e.lanes |= t, t = gc(e.stateNode, a, t), wi(e, t), !1;
        case 1:
          if (l = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (De === null || !De.has(u))))
            return e.flags |= 65536, n &= -n, e.lanes |= n, n = Gr(n), Xr(
              n,
              t,
              e,
              a
            ), wi(e, n), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Sc = Error(r(461)), Xt = !1;
  function tl(t, l, e, a) {
    l.child = t === null ? Vs(l, null, e, a) : We(
      l,
      t.child,
      e,
      a
    );
  }
  function Qr(t, l, e, a, n) {
    e = e.render;
    var u = l.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a)
        c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return we(l), a = Pi(
      t,
      l,
      e,
      i,
      u,
      n
    ), c = tc(), t !== null && !Xt ? (lc(t, l, n), ee(t, l, n)) : (ct && c && Hi(l), l.flags |= 1, tl(t, l, a, n), l.child);
  }
  function Lr(t, l, e, a, n) {
    if (t === null) {
      var u = e.type;
      return typeof u == "function" && !Ri(u) && u.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = u, Zr(
        t,
        l,
        u,
        a,
        n
      )) : (t = nu(
        e.type,
        null,
        a,
        l,
        l.mode,
        n
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (u = t.child, !Dc(t, n)) {
      var i = u.memoizedProps;
      if (e = e.compare, e = e !== null ? e : en, e(i, a) && t.ref === l.ref)
        return ee(t, l, n);
    }
    return l.flags |= 1, t = Fl(u, a), t.ref = l.ref, t.return = l, l.child = t;
  }
  function Zr(t, l, e, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (en(u, a) && t.ref === l.ref)
        if (Xt = !1, l.pendingProps = a = u, Dc(t, n))
          (t.flags & 131072) !== 0 && (Xt = !0);
        else
          return l.lanes = t.lanes, ee(t, l, n);
    }
    return bc(
      t,
      l,
      e,
      a,
      n
    );
  }
  function Vr(t, l, e, a) {
    var n = a.children, u = t !== null ? t.memoizedState : null;
    if (t === null && l.stateNode === null && (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | e : e, t !== null) {
          for (a = l.child = t.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, l.child = null;
        return Kr(
          t,
          l,
          u,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && fu(
          l,
          u !== null ? u.cachePool : null
        ), u !== null ? ws(l, u) : $i(), ks(l);
      else
        return a = l.lanes = 536870912, Kr(
          t,
          l,
          u !== null ? u.baseLanes | e : e,
          e,
          a
        );
    } else
      u !== null ? (fu(l, u.cachePool), ws(l, u), Te(), l.memoizedState = null) : (t !== null && fu(l, null), $i(), Te());
    return tl(t, l, n, e), l.child;
  }
  function Sn(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function Kr(t, l, e, a, n) {
    var u = Zi();
    return u = u === null ? null : { parent: Yt._currentValue, pool: u }, l.memoizedState = {
      baseLanes: e,
      cachePool: u
    }, t !== null && fu(l, null), $i(), ks(l), t !== null && Ta(t, l, a, !0), l.childLanes = n, null;
  }
  function zu(t, l) {
    return l = Du(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Jr(t, l, e) {
    return We(l, t.child, null, e), t = zu(l, l.pendingProps), t.flags |= 2, Tl(l), l.memoizedState = null, t;
  }
  function bh(t, l, e) {
    var a = l.pendingProps, n = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (ct) {
        if (a.mode === "hidden")
          return t = zu(l, a), l.lanes = 536870912, Sn(null, t);
        if (Wi(l), (t = _t) ? (t = ud(
          t,
          xl
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: he !== null ? { id: Ql, overflow: Ll } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Us(t), e.return = l, l.child = e, It = l, _t = null)) : t = null, t === null) throw ve(l);
        return l.lanes = 536870912, null;
      }
      return zu(l, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (Wi(l), n)
        if (l.flags & 256)
          l.flags &= -257, l = Jr(
            t,
            l,
            e
          );
        else if (l.memoizedState !== null)
          l.child = t.child, l.flags |= 128, l = null;
        else throw Error(r(558));
      else if (Xt || Ta(t, l, e, !1), n = (e & t.childLanes) !== 0, Xt || n) {
        if (a = zt, a !== null && (i = jf(a, e), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, Ze(t, i), ml(a, t, i), Sc;
        Bu(), l = Jr(
          t,
          l,
          e
        );
      } else
        t = u.treeContext, _t = Hl(i.nextSibling), It = l, ct = !0, ye = null, xl = !1, t !== null && xs(l, t), l = zu(l, a), l.flags |= 4096;
      return l;
    }
    return t = Fl(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function _u(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(r(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function bc(t, l, e, a, n) {
    return we(l), e = Pi(
      t,
      l,
      e,
      a,
      void 0,
      n
    ), a = tc(), t !== null && !Xt ? (lc(t, l, n), ee(t, l, n)) : (ct && a && Hi(l), l.flags |= 1, tl(t, l, e, n), l.child);
  }
  function wr(t, l, e, a, n, u) {
    return we(l), l.updateQueue = null, e = Fs(
      l,
      a,
      e,
      n
    ), $s(t), a = tc(), t !== null && !Xt ? (lc(t, l, u), ee(t, l, u)) : (ct && a && Hi(l), l.flags |= 1, tl(t, l, e, u), l.child);
  }
  function kr(t, l, e, a, n) {
    if (we(l), l.stateNode === null) {
      var u = Sa, i = e.contextType;
      typeof i == "object" && i !== null && (u = Pt(i)), u = new e(a, u), l.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = vc, l.stateNode = u, u._reactInternals = l, u = l.stateNode, u.props = a, u.state = l.memoizedState, u.refs = {}, Ki(l), i = e.contextType, u.context = typeof i == "object" && i !== null ? Pt(i) : Sa, u.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (yc(
        l,
        e,
        i,
        a
      ), u.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && vc.enqueueReplaceState(u, u.state, null), mn(l, a, u, n), dn(), u.state = l.memoizedState), typeof u.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = l.stateNode;
      var c = l.memoizedProps, s = Pe(e, c);
      u.props = s;
      var y = u.context, E = e.contextType;
      i = Sa, typeof E == "object" && E !== null && (i = Pt(E));
      var _ = e.getDerivedStateFromProps;
      E = typeof _ == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, E || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || y !== i) && Hr(
        l,
        u,
        a,
        i
      ), Se = !1;
      var v = l.memoizedState;
      u.state = v, mn(l, a, u, n), dn(), y = l.memoizedState, c || v !== y || Se ? (typeof _ == "function" && (yc(
        l,
        e,
        _,
        a
      ), y = l.memoizedState), (s = Se || Cr(
        l,
        e,
        s,
        a,
        v,
        y,
        i
      )) ? (E || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = y), u.props = a, u.state = y, u.context = i, a = s) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      u = l.stateNode, Ji(t, l), i = l.memoizedProps, E = Pe(e, i), u.props = E, _ = l.pendingProps, v = u.context, y = e.contextType, s = Sa, typeof y == "object" && y !== null && (s = Pt(y)), c = e.getDerivedStateFromProps, (y = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== _ || v !== s) && Hr(
        l,
        u,
        a,
        s
      ), Se = !1, v = l.memoizedState, u.state = v, mn(l, a, u, n), dn();
      var b = l.memoizedState;
      i !== _ || v !== b || Se || t !== null && t.dependencies !== null && iu(t.dependencies) ? (typeof c == "function" && (yc(
        l,
        e,
        c,
        a
      ), b = l.memoizedState), (E = Se || Cr(
        l,
        e,
        E,
        a,
        v,
        b,
        s
      ) || t !== null && t.dependencies !== null && iu(t.dependencies)) ? (y || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, b, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        b,
        s
      )), typeof u.componentDidUpdate == "function" && (l.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = b), u.props = a, u.state = b, u.context = s, a = E) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 1024), a = !1);
    }
    return u = a, _u(t, l), a = (l.flags & 128) !== 0, u || a ? (u = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : u.render(), l.flags |= 1, t !== null && a ? (l.child = We(
      l,
      t.child,
      null,
      n
    ), l.child = We(
      l,
      null,
      e,
      n
    )) : tl(t, l, e, n), l.memoizedState = u.state, t = l.child) : t = ee(
      t,
      l,
      n
    ), t;
  }
  function $r(t, l, e, a) {
    return Ke(), l.flags |= 256, tl(t, l, e, a), l.child;
  }
  var pc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ec(t) {
    return { baseLanes: t, cachePool: Ys() };
  }
  function Tc(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= zl), t;
  }
  function Fr(t, l, e) {
    var a = l.pendingProps, n = !1, u = (l.flags & 128) !== 0, i;
    if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (jt.current & 2) !== 0), i && (n = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (ct) {
        if (n ? Ee(l) : Te(), (t = _t) ? (t = ud(
          t,
          xl
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: he !== null ? { id: Ql, overflow: Ll } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Us(t), e.return = l, l.child = e, It = l, _t = null)) : t = null, t === null) throw ve(l);
        return nf(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, n ? (Te(), n = l.mode, c = Du(
        { mode: "hidden", children: c },
        n
      ), a = Ve(
        a,
        n,
        e,
        null
      ), c.return = l, a.return = l, c.sibling = a, l.child = c, a = l.child, a.memoizedState = Ec(e), a.childLanes = Tc(
        t,
        i,
        e
      ), l.memoizedState = pc, Sn(null, a)) : (Ee(l), Ac(l, c));
    }
    var s = t.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (u)
        l.flags & 256 ? (Ee(l), l.flags &= -257, l = zc(
          t,
          l,
          e
        )) : l.memoizedState !== null ? (Te(), l.child = t.child, l.flags |= 128, l = null) : (Te(), c = a.fallback, n = l.mode, a = Du(
          { mode: "visible", children: a.children },
          n
        ), c = Ve(
          c,
          n,
          e,
          null
        ), c.flags |= 2, a.return = l, c.return = l, a.sibling = c, l.child = a, We(
          l,
          t.child,
          null,
          e
        ), a = l.child, a.memoizedState = Ec(e), a.childLanes = Tc(
          t,
          i,
          e
        ), l.memoizedState = pc, l = Sn(null, a));
      else if (Ee(l), nf(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var y = i.dgst;
        i = y, a = Error(r(419)), a.stack = "", a.digest = i, un({ value: a, source: null, stack: null }), l = zc(
          t,
          l,
          e
        );
      } else if (Xt || Ta(t, l, e, !1), i = (e & t.childLanes) !== 0, Xt || i) {
        if (i = zt, i !== null && (a = jf(i, e), a !== 0 && a !== s.retryLane))
          throw s.retryLane = a, Ze(t, a), ml(i, t, a), Sc;
        af(c) || Bu(), l = zc(
          t,
          l,
          e
        );
      } else
        af(c) ? (l.flags |= 192, l.child = t.child, l = null) : (t = s.treeContext, _t = Hl(
          c.nextSibling
        ), It = l, ct = !0, ye = null, xl = !1, t !== null && xs(l, t), l = Ac(
          l,
          a.children
        ), l.flags |= 4096);
      return l;
    }
    return n ? (Te(), c = a.fallback, n = l.mode, s = t.child, y = s.sibling, a = Fl(s, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = s.subtreeFlags & 65011712, y !== null ? c = Fl(
      y,
      c
    ) : (c = Ve(
      c,
      n,
      e,
      null
    ), c.flags |= 2), c.return = l, a.return = l, a.sibling = c, l.child = a, Sn(null, a), a = l.child, c = t.child.memoizedState, c === null ? c = Ec(e) : (n = c.cachePool, n !== null ? (s = Yt._currentValue, n = n.parent !== s ? { parent: s, pool: s } : n) : n = Ys(), c = {
      baseLanes: c.baseLanes | e,
      cachePool: n
    }), a.memoizedState = c, a.childLanes = Tc(
      t,
      i,
      e
    ), l.memoizedState = pc, Sn(t.child, a)) : (Ee(l), e = t.child, t = e.sibling, e = Fl(e, {
      mode: "visible",
      children: a.children
    }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Ac(t, l) {
    return l = Du(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function Du(t, l) {
    return t = pl(22, t, null, l), t.lanes = 0, t;
  }
  function zc(t, l, e) {
    return We(l, t.child, null, e), t = Ac(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function Wr(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), Gi(t.return, l, e);
  }
  function _c(t, l, e, a, n, u) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: n,
      treeForkCount: u
    } : (i.isBackwards = l, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = e, i.tailMode = n, i.treeForkCount = u);
  }
  function Ir(t, l, e) {
    var a = l.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var i = jt.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, l.flags |= 128) : i &= 1, B(jt, i), tl(t, l, a, e), a = ct ? nn : 0, !c && t !== null && (t.flags & 128) !== 0)
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Wr(t, e, l);
        else if (t.tag === 19)
          Wr(t, e, l);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === l) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "forwards":
        for (e = l.child, n = null; e !== null; )
          t = e.alternate, t !== null && hu(t) === null && (n = e), e = e.sibling;
        e = n, e === null ? (n = l.child, l.child = null) : (n = e.sibling, e.sibling = null), _c(
          l,
          !1,
          n,
          e,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, n = l.child, l.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && hu(t) === null) {
            l.child = n;
            break;
          }
          t = n.sibling, n.sibling = e, e = n, n = t;
        }
        _c(
          l,
          !0,
          e,
          null,
          u,
          a
        );
        break;
      case "together":
        _c(
          l,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function ee(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), _e |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (Ta(
          t,
          l,
          e,
          !1
        ), (e & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(r(153));
    if (l.child !== null) {
      for (t = l.child, e = Fl(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = Fl(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function Dc(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && iu(t)));
  }
  function ph(t, l, e) {
    switch (l.tag) {
      case 3:
        Bt(l, l.stateNode.containerInfo), ge(l, Yt, t.memoizedState.cache), Ke();
        break;
      case 27:
      case 5:
        qe(l);
        break;
      case 4:
        Bt(l, l.stateNode.containerInfo);
        break;
      case 10:
        ge(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, Wi(l), null;
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Ee(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? Fr(t, l, e) : (Ee(l), t = ee(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        Ee(l);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (e & l.childLanes) !== 0, a || (Ta(
          t,
          l,
          e,
          !1
        ), a = (e & l.childLanes) !== 0), n) {
          if (a)
            return Ir(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (n = l.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), B(jt, jt.current), a) break;
        return null;
      case 22:
        return l.lanes = 0, Vr(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        ge(l, Yt, t.memoizedState.cache);
    }
    return ee(t, l, e);
  }
  function Pr(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Xt = !0;
      else {
        if (!Dc(t, e) && (l.flags & 128) === 0)
          return Xt = !1, ph(
            t,
            l,
            e
          );
        Xt = (t.flags & 131072) !== 0;
      }
    else
      Xt = !1, ct && (l.flags & 1048576) !== 0 && Rs(l, nn, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var a = l.pendingProps;
          if (t = $e(l.elementType), l.type = t, typeof t == "function")
            Ri(t) ? (a = Pe(t, a), l.tag = 1, l = kr(
              null,
              l,
              t,
              a,
              e
            )) : (l.tag = 0, l = bc(
              null,
              l,
              t,
              a,
              e
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === Kt) {
                l.tag = 11, l = Qr(
                  null,
                  l,
                  t,
                  a,
                  e
                );
                break t;
              } else if (n === I) {
                l.tag = 14, l = Lr(
                  null,
                  l,
                  t,
                  a,
                  e
                );
                break t;
              }
            }
            throw l = jl(t) || t, Error(r(306, l, ""));
          }
        }
        return l;
      case 0:
        return bc(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 1:
        return a = l.type, n = Pe(
          a,
          l.pendingProps
        ), kr(
          t,
          l,
          a,
          n,
          e
        );
      case 3:
        t: {
          if (Bt(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          a = l.pendingProps;
          var u = l.memoizedState;
          n = u.element, Ji(t, l), mn(l, a, null, e);
          var i = l.memoizedState;
          if (a = i.cache, ge(l, Yt, a), a !== u.cache && Xi(
            l,
            [Yt],
            e,
            !0
          ), dn(), a = i.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, l.updateQueue.baseState = u, l.memoizedState = u, l.flags & 256) {
              l = $r(
                t,
                l,
                a,
                e
              );
              break t;
            } else if (a !== n) {
              n = Ul(
                Error(r(424)),
                l
              ), un(n), l = $r(
                t,
                l,
                a,
                e
              );
              break t;
            } else
              for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, _t = Hl(t.firstChild), It = l, ct = !0, ye = null, xl = !0, e = Vs(
                l,
                null,
                a,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (Ke(), a === n) {
              l = ee(
                t,
                l,
                e
              );
              break t;
            }
            tl(t, l, a, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return _u(t, l), t === null ? (e = od(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : ct || (e = l.type, t = l.pendingProps, a = Lu(
          lt.current
        ).createElement(e), a[Wt] = l, a[cl] = t, ll(a, e, t), wt(a), l.stateNode = a) : l.memoizedState = od(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return qe(l), t === null && ct && (a = l.stateNode = fd(
          l.type,
          l.pendingProps,
          lt.current
        ), It = l, xl = !0, n = _t, Ne(l.type) ? (uf = n, _t = Hl(a.firstChild)) : _t = n), tl(
          t,
          l,
          l.pendingProps.children,
          e
        ), _u(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && ct && ((n = a = _t) && (a = Fh(
          a,
          l.type,
          l.pendingProps,
          xl
        ), a !== null ? (l.stateNode = a, It = l, _t = Hl(a.firstChild), xl = !1, n = !0) : n = !1), n || ve(l)), qe(l), n = l.type, u = l.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, tf(n, u) ? a = null : i !== null && tf(n, i) && (l.flags |= 32), l.memoizedState !== null && (n = Pi(
          t,
          l,
          oh,
          null,
          null,
          e
        ), Cn._currentValue = n), _u(t, l), tl(t, l, a, e), l.child;
      case 6:
        return t === null && ct && ((t = e = _t) && (e = Wh(
          e,
          l.pendingProps,
          xl
        ), e !== null ? (l.stateNode = e, It = l, _t = null, t = !0) : t = !1), t || ve(l)), null;
      case 13:
        return Fr(t, l, e);
      case 4:
        return Bt(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, t === null ? l.child = We(
          l,
          null,
          a,
          e
        ) : tl(t, l, a, e), l.child;
      case 11:
        return Qr(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return tl(
          t,
          l,
          l.pendingProps,
          e
        ), l.child;
      case 8:
        return tl(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return tl(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return a = l.pendingProps, ge(l, l.type, a.value), tl(t, l, a.children, e), l.child;
      case 9:
        return n = l.type._context, a = l.pendingProps.children, we(l), n = Pt(n), a = a(n), l.flags |= 1, tl(t, l, a, e), l.child;
      case 14:
        return Lr(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return Zr(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return Ir(t, l, e);
      case 31:
        return bh(t, l, e);
      case 22:
        return Vr(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        return we(l), a = Pt(Yt), t === null ? (n = Zi(), n === null && (n = zt, u = Qi(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= e), n = u), l.memoizedState = { parent: a, cache: n }, Ki(l), ge(l, Yt, n)) : ((t.lanes & e) !== 0 && (Ji(t, l), mn(l, null, null, e), dn()), n = t.memoizedState, u = l.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, l.memoizedState = n, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = n), ge(l, Yt, a)) : (a = u.cache, ge(l, Yt, a), a !== n.cache && Xi(
          l,
          [Yt],
          e,
          !0
        ))), tl(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(r(156, l.tag));
  }
  function ae(t) {
    t.flags |= 4;
  }
  function Oc(t, l, e, a, n) {
    if ((l = (t.mode & 32) !== 0) && (l = !1), l) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Oo()) t.flags |= 8192;
        else
          throw Fe = ru, Vi;
    } else t.flags &= -16777217;
  }
  function to(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !vd(l))
      if (Oo()) t.flags |= 8192;
      else
        throw Fe = ru, Vi;
  }
  function Ou(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? Cf() : 536870912, t.lanes |= l, Ha |= l);
  }
  function bn(t, l) {
    if (!ct)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; )
            l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function Dt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
    if (l)
      for (var n = t.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = e, l;
  }
  function Eh(t, l, e) {
    var a = l.pendingProps;
    switch (Bi(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Dt(l), null;
      case 1:
        return Dt(l), null;
      case 3:
        return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Pl(Yt), Ut(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (Ea(l) ? ae(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, qi())), Dt(l), null;
      case 26:
        var n = l.type, u = l.memoizedState;
        return t === null ? (ae(l), u !== null ? (Dt(l), to(l, u)) : (Dt(l), Oc(
          l,
          n,
          null,
          a,
          e
        ))) : u ? u !== t.memoizedState ? (ae(l), Dt(l), to(l, u)) : (Dt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== a && ae(l), Dt(l), Oc(
          l,
          n,
          t,
          a,
          e
        )), null;
      case 27:
        if (na(l), e = lt.current, n = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && ae(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return Dt(l), null;
          }
          t = j.current, Ea(l) ? Cs(l) : (t = fd(n, a, e), l.stateNode = t, ae(l));
        }
        return Dt(l), null;
      case 5:
        if (na(l), n = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && ae(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return Dt(l), null;
          }
          if (u = j.current, Ea(l))
            Cs(l);
          else {
            var i = Lu(
              lt.current
            );
            switch (u) {
              case 1:
                u = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? i.createElement("select", {
                      is: a.is
                    }) : i.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? i.createElement(n, { is: a.is }) : i.createElement(n);
                }
            }
            u[Wt] = l, u[cl] = a;
            t: for (i = l.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === l) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === l)
                  break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            l.stateNode = u;
            t: switch (ll(u, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && ae(l);
          }
        }
        return Dt(l), Oc(
          l,
          l.type,
          t === null ? null : t.memoizedProps,
          l.pendingProps,
          e
        ), null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== a && ae(l);
        else {
          if (typeof a != "string" && l.stateNode === null)
            throw Error(r(166));
          if (t = lt.current, Ea(l)) {
            if (t = l.stateNode, e = l.memoizedProps, a = null, n = It, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[Wt] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Wo(t.nodeValue, e)), t || ve(l, !0);
          } else
            t = Lu(t).createTextNode(
              a
            ), t[Wt] = l, l.stateNode = t;
        }
        return Dt(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Ea(l), e !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[Wt] = l;
            } else
              Ke(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Dt(l), t = !1;
          } else
            e = qi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (Tl(l), l) : (Tl(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Dt(l), null;
      case 13:
        if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = Ea(l), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (n = l.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[Wt] = l;
            } else
              Ke(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Dt(l), n = !1;
          } else
            n = qi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return l.flags & 256 ? (Tl(l), l) : (Tl(l), null);
        }
        return Tl(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = a !== null, t = t !== null && t.memoizedState !== null, e && (a = l.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), Ou(l, l.updateQueue), Dt(l), null);
      case 4:
        return Ut(), t === null && $c(l.stateNode.containerInfo), Dt(l), null;
      case 10:
        return Pl(l.type), Dt(l), null;
      case 19:
        if (z(jt), a = l.memoizedState, a === null) return Dt(l), null;
        if (n = (l.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) bn(a, !1);
          else {
            if (xt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (u = hu(t), u !== null) {
                  for (l.flags |= 128, bn(a, !1), t = u.updateQueue, l.updateQueue = t, Ou(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    Ms(e, t), e = e.sibling;
                  return B(
                    jt,
                    jt.current & 1 | 2
                  ), ct && Wl(l, a.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            a.tail !== null && vl() > xu && (l.flags |= 128, n = !0, bn(a, !1), l.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = hu(u), t !== null) {
              if (l.flags |= 128, n = !0, t = t.updateQueue, l.updateQueue = t, Ou(l, t), bn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !ct)
                return Dt(l), null;
            } else
              2 * vl() - a.renderingStartTime > xu && e !== 536870912 && (l.flags |= 128, n = !0, bn(a, !1), l.lanes = 4194304);
          a.isBackwards ? (u.sibling = l.child, l.child = u) : (t = a.last, t !== null ? t.sibling = u : l.child = u, a.last = u);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = vl(), t.sibling = null, e = jt.current, B(
          jt,
          n ? e & 1 | 2 : e & 1
        ), ct && Wl(l, a.treeForkCount), t) : (Dt(l), null);
      case 22:
      case 23:
        return Tl(l), Fi(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Dt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Dt(l), e = l.updateQueue, e !== null && Ou(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && z(ke), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Pl(Yt), Dt(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, l.tag));
  }
  function Th(t, l) {
    switch (Bi(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Pl(Yt), Ut(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return na(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (Tl(l), l.alternate === null)
            throw Error(r(340));
          Ke();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (Tl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(r(340));
          Ke();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return z(jt), null;
      case 4:
        return Ut(), null;
      case 10:
        return Pl(l.type), null;
      case 22:
      case 23:
        return Tl(l), Fi(), t !== null && z(ke), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Pl(Yt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function lo(t, l) {
    switch (Bi(l), l.tag) {
      case 3:
        Pl(Yt), Ut();
        break;
      case 26:
      case 27:
      case 5:
        na(l);
        break;
      case 4:
        Ut();
        break;
      case 31:
        l.memoizedState !== null && Tl(l);
        break;
      case 13:
        Tl(l);
        break;
      case 19:
        z(jt);
        break;
      case 10:
        Pl(l.type);
        break;
      case 22:
      case 23:
        Tl(l), Fi(), t !== null && z(ke);
        break;
      case 24:
        Pl(Yt);
    }
  }
  function pn(t, l) {
    try {
      var e = l.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var u = e.create, i = e.inst;
            a = u(), i.destroy = a;
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (c) {
      bt(l, l.return, c);
    }
  }
  function Ae(t, l, e) {
    try {
      var a = l.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, n = l;
              var s = e, y = c;
              try {
                y();
              } catch (E) {
                bt(
                  n,
                  s,
                  E
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (E) {
      bt(l, l.return, E);
    }
  }
  function eo(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        Js(l, e);
      } catch (a) {
        bt(t, t.return, a);
      }
    }
  }
  function ao(t, l, e) {
    e.props = Pe(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      bt(t, l, a);
    }
  }
  function En(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof e == "function" ? t.refCleanup = e(a) : e.current = a;
      }
    } catch (n) {
      bt(t, l, n);
    }
  }
  function Zl(t, l) {
    var e = t.ref, a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          bt(t, l, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          bt(t, l, n);
        }
      else e.current = null;
  }
  function no(t) {
    var l = t.type, e = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (n) {
      bt(t, t.return, n);
    }
  }
  function Mc(t, l, e) {
    try {
      var a = t.stateNode;
      Vh(a, t.type, e, l), a[cl] = l;
    } catch (n) {
      bt(t, t.return, n);
    }
  }
  function uo(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ne(t.type) || t.tag === 4;
  }
  function Uc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || uo(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ne(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Nc(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = kl));
    else if (a !== 4 && (a === 27 && Ne(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null))
      for (Nc(t, l, e), t = t.sibling; t !== null; )
        Nc(t, l, e), t = t.sibling;
  }
  function Mu(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (a !== 4 && (a === 27 && Ne(t.type) && (e = t.stateNode), t = t.child, t !== null))
      for (Mu(t, l, e), t = t.sibling; t !== null; )
        Mu(t, l, e), t = t.sibling;
  }
  function io(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var a = t.type, n = l.attributes; n.length; )
        l.removeAttributeNode(n[0]);
      ll(l, a, e), l[Wt] = t, l[cl] = e;
    } catch (u) {
      bt(t, t.return, u);
    }
  }
  var ne = !1, Qt = !1, Rc = !1, co = typeof WeakSet == "function" ? WeakSet : Set, kt = null;
  function Ah(t, l) {
    if (t = t.containerInfo, Ic = $u, t = bs(t), zi(t)) {
      if ("selectionStart" in t)
        var e = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          e = (e = t.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, u.nodeType;
            } catch {
              e = null;
              break t;
            }
            var i = 0, c = -1, s = -1, y = 0, E = 0, _ = t, v = null;
            l: for (; ; ) {
              for (var b; _ !== e || n !== 0 && _.nodeType !== 3 || (c = i + n), _ !== u || a !== 0 && _.nodeType !== 3 || (s = i + a), _.nodeType === 3 && (i += _.nodeValue.length), (b = _.firstChild) !== null; )
                v = _, _ = b;
              for (; ; ) {
                if (_ === t) break l;
                if (v === e && ++y === n && (c = i), v === u && ++E === a && (s = i), (b = _.nextSibling) !== null) break;
                _ = v, v = _.parentNode;
              }
              _ = b;
            }
            e = c === -1 || s === -1 ? null : { start: c, end: s };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (Pc = { focusedElem: t, selectionRange: e }, $u = !1, kt = l; kt !== null; )
      if (l = kt, t = l.child, (l.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = l, kt = t;
      else
        for (; kt !== null; ) {
          switch (l = kt, u = l.alternate, t = l.flags, l.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = l.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (e = 0; e < t.length; e++)
                  n = t[e], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, e = l, n = u.memoizedProps, u = u.memoizedState, a = e.stateNode;
                try {
                  var Y = Pe(
                    e.type,
                    n
                  );
                  t = a.getSnapshotBeforeUpdate(
                    Y,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (k) {
                  bt(
                    e,
                    e.return,
                    k
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9)
                  ef(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ef(t);
                      break;
                    default:
                      t.textContent = "";
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
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (t = l.sibling, t !== null) {
            t.return = l.return, kt = t;
            break;
          }
          kt = l.return;
        }
  }
  function fo(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ie(t, e), a & 4 && pn(5, e);
        break;
      case 1:
        if (ie(t, e), a & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (i) {
              bt(e, e.return, i);
            }
          else {
            var n = Pe(
              e.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              bt(
                e,
                e.return,
                i
              );
            }
          }
        a & 64 && eo(e), a & 512 && En(e, e.return);
        break;
      case 3:
        if (ie(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
          if (l = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            Js(t, l);
          } catch (i) {
            bt(e, e.return, i);
          }
        }
        break;
      case 27:
        l === null && a & 4 && io(e);
      case 26:
      case 5:
        ie(t, e), l === null && a & 4 && no(e), a & 512 && En(e, e.return);
        break;
      case 12:
        ie(t, e);
        break;
      case 31:
        ie(t, e), a & 4 && oo(t, e);
        break;
      case 13:
        ie(t, e), a & 4 && mo(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = xh.bind(
          null,
          e
        ), Ih(t, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || ne, !a) {
          l = l !== null && l.memoizedState !== null || Qt, n = ne;
          var u = Qt;
          ne = a, (Qt = l) && !u ? ce(
            t,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : ie(t, e), ne = n, Qt = u;
        }
        break;
      case 30:
        break;
      default:
        ie(t, e);
    }
  }
  function so(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, so(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && ci(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Mt = null, sl = !1;
  function ue(t, l, e) {
    for (e = e.child; e !== null; )
      ro(t, l, e), e = e.sibling;
  }
  function ro(t, l, e) {
    if (gl && typeof gl.onCommitFiberUnmount == "function")
      try {
        gl.onCommitFiberUnmount(Va, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        Qt || Zl(e, l), ue(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Qt || Zl(e, l);
        var a = Mt, n = sl;
        Ne(e.type) && (Mt = e.stateNode, sl = !1), ue(
          t,
          l,
          e
        ), Nn(e.stateNode), Mt = a, sl = n;
        break;
      case 5:
        Qt || Zl(e, l);
      case 6:
        if (a = Mt, n = sl, Mt = null, ue(
          t,
          l,
          e
        ), Mt = a, sl = n, Mt !== null)
          if (sl)
            try {
              (Mt.nodeType === 9 ? Mt.body : Mt.nodeName === "HTML" ? Mt.ownerDocument.body : Mt).removeChild(e.stateNode);
            } catch (u) {
              bt(
                e,
                l,
                u
              );
            }
          else
            try {
              Mt.removeChild(e.stateNode);
            } catch (u) {
              bt(
                e,
                l,
                u
              );
            }
        break;
      case 18:
        Mt !== null && (sl ? (t = Mt, ad(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), La(t)) : ad(Mt, e.stateNode));
        break;
      case 4:
        a = Mt, n = sl, Mt = e.stateNode.containerInfo, sl = !0, ue(
          t,
          l,
          e
        ), Mt = a, sl = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ae(2, e, l), Qt || Ae(4, e, l), ue(
          t,
          l,
          e
        );
        break;
      case 1:
        Qt || (Zl(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && ao(
          e,
          l,
          a
        )), ue(
          t,
          l,
          e
        );
        break;
      case 21:
        ue(
          t,
          l,
          e
        );
        break;
      case 22:
        Qt = (a = Qt) || e.memoizedState !== null, ue(
          t,
          l,
          e
        ), Qt = a;
        break;
      default:
        ue(
          t,
          l,
          e
        );
    }
  }
  function oo(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        La(t);
      } catch (e) {
        bt(l, l.return, e);
      }
    }
  }
  function mo(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        La(t);
      } catch (e) {
        bt(l, l.return, e);
      }
  }
  function zh(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new co()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new co()), l;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Uu(t, l) {
    var e = zh(t);
    l.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var n = Ch.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function rl(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a], u = t, i = l, c = i;
        t: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Ne(c.type)) {
                Mt = c.stateNode, sl = !1;
                break t;
              }
              break;
            case 5:
              Mt = c.stateNode, sl = !1;
              break t;
            case 3:
            case 4:
              Mt = c.stateNode.containerInfo, sl = !0;
              break t;
          }
          c = c.return;
        }
        if (Mt === null) throw Error(r(160));
        ro(u, i, n), Mt = null, sl = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        ho(l, t), l = l.sibling;
  }
  var Yl = null;
  function ho(t, l) {
    var e = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        rl(l, t), ol(t), a & 4 && (Ae(3, t, t.return), pn(3, t), Ae(5, t, t.return));
        break;
      case 1:
        rl(l, t), ol(t), a & 512 && (Qt || e === null || Zl(e, e.return)), a & 64 && ne && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var n = Yl;
        if (rl(l, t), ol(t), a & 512 && (Qt || e === null || Zl(e, e.return)), a & 4) {
          var u = e !== null ? e.memoizedState : null;
          if (a = t.memoizedState, e === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, e = t.memoizedProps, n = n.ownerDocument || n;
                  l: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[wa] || u[Wt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), ll(u, a, e), u[Wt] = t, wt(u), a = u;
                      break t;
                    case "link":
                      var i = hd(
                        "link",
                        "href",
                        n
                      ).get(a + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(c, 1);
                            break l;
                          }
                      }
                      u = n.createElement(a), ll(u, a, e), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = hd(
                        "meta",
                        "content",
                        n
                      ).get(a + (e.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(c, 1);
                            break l;
                          }
                      }
                      u = n.createElement(a), ll(u, a, e), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  u[Wt] = t, wt(u), a = u;
                }
                t.stateNode = a;
              } else
                yd(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = md(
                n,
                a,
                t.memoizedProps
              );
          else
            u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : u.count--, a === null ? yd(
              n,
              t.type,
              t.stateNode
            ) : md(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Mc(
              t,
              t.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        rl(l, t), ol(t), a & 512 && (Qt || e === null || Zl(e, e.return)), e !== null && a & 4 && Mc(
          t,
          t.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (rl(l, t), ol(t), a & 512 && (Qt || e === null || Zl(e, e.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            oa(n, "");
          } catch (Y) {
            bt(t, t.return, Y);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, Mc(
          t,
          n,
          e !== null ? e.memoizedProps : n
        )), a & 1024 && (Rc = !0);
        break;
      case 6:
        if (rl(l, t), ol(t), a & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          a = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = a;
          } catch (Y) {
            bt(t, t.return, Y);
          }
        }
        break;
      case 3:
        if (Ku = null, n = Yl, Yl = Zu(l.containerInfo), rl(l, t), Yl = n, ol(t), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            La(l.containerInfo);
          } catch (Y) {
            bt(t, t.return, Y);
          }
        Rc && (Rc = !1, yo(t));
        break;
      case 4:
        a = Yl, Yl = Zu(
          t.stateNode.containerInfo
        ), rl(l, t), ol(t), Yl = a;
        break;
      case 12:
        rl(l, t), ol(t);
        break;
      case 31:
        rl(l, t), ol(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Uu(t, a)));
        break;
      case 13:
        rl(l, t), ol(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Ru = vl()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Uu(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null, y = ne, E = Qt;
        if (ne = y || n, Qt = E || s, rl(l, t), Qt = E, ne = y, ol(t), a & 8192)
          t: for (l = t.stateNode, l._visibility = n ? l._visibility & -2 : l._visibility | 1, n && (e === null || s || ne || Qt || ta(t)), e = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                s = e = l;
                try {
                  if (u = s.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = s.stateNode;
                    var _ = s.memoizedProps.style, v = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    c.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (Y) {
                  bt(s, s.return, Y);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                s = l;
                try {
                  s.stateNode.nodeValue = n ? "" : s.memoizedProps;
                } catch (Y) {
                  bt(s, s.return, Y);
                }
              }
            } else if (l.tag === 18) {
              if (e === null) {
                s = l;
                try {
                  var b = s.stateNode;
                  n ? nd(b, !0) : nd(s.stateNode, !1);
                } catch (Y) {
                  bt(s, s.return, Y);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), l = l.return;
            }
            e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Uu(t, e))));
        break;
      case 19:
        rl(l, t), ol(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Uu(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        rl(l, t), ol(t);
    }
  }
  function ol(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (uo(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(r(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode, u = Uc(t);
            Mu(t, u, n);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (oa(i, ""), e.flags &= -33);
            var c = Uc(t);
            Mu(t, c, i);
            break;
          case 3:
          case 4:
            var s = e.stateNode.containerInfo, y = Uc(t);
            Nc(
              t,
              y,
              s
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (E) {
        bt(t, t.return, E);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function yo(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        yo(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
      }
  }
  function ie(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        fo(t, l.alternate, l), l = l.sibling;
  }
  function ta(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ae(4, l, l.return), ta(l);
          break;
        case 1:
          Zl(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && ao(
            l,
            l.return,
            e
          ), ta(l);
          break;
        case 27:
          Nn(l.stateNode);
        case 26:
        case 5:
          Zl(l, l.return), ta(l);
          break;
        case 22:
          l.memoizedState === null && ta(l);
          break;
        case 30:
          ta(l);
          break;
        default:
          ta(l);
      }
      t = t.sibling;
    }
  }
  function ce(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate, n = t, u = l, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ce(
            n,
            u,
            e
          ), pn(4, u);
          break;
        case 1:
          if (ce(
            n,
            u,
            e
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (y) {
              bt(a, a.return, y);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var c = a.stateNode;
            try {
              var s = n.shared.hiddenCallbacks;
              if (s !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < s.length; n++)
                  Ks(s[n], c);
            } catch (y) {
              bt(a, a.return, y);
            }
          }
          e && i & 64 && eo(u), En(u, u.return);
          break;
        case 27:
          io(u);
        case 26:
        case 5:
          ce(
            n,
            u,
            e
          ), e && a === null && i & 4 && no(u), En(u, u.return);
          break;
        case 12:
          ce(
            n,
            u,
            e
          );
          break;
        case 31:
          ce(
            n,
            u,
            e
          ), e && i & 4 && oo(n, u);
          break;
        case 13:
          ce(
            n,
            u,
            e
          ), e && i & 4 && mo(n, u);
          break;
        case 22:
          u.memoizedState === null && ce(
            n,
            u,
            e
          ), En(u, u.return);
          break;
        case 30:
          break;
        default:
          ce(
            n,
            u,
            e
          );
      }
      l = l.sibling;
    }
  }
  function xc(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && cn(e));
  }
  function Cc(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && cn(t));
  }
  function Gl(t, l, e, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        vo(
          t,
          l,
          e,
          a
        ), l = l.sibling;
  }
  function vo(t, l, e, a) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Gl(
          t,
          l,
          e,
          a
        ), n & 2048 && pn(9, l);
        break;
      case 1:
        Gl(
          t,
          l,
          e,
          a
        );
        break;
      case 3:
        Gl(
          t,
          l,
          e,
          a
        ), n & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && cn(t)));
        break;
      case 12:
        if (n & 2048) {
          Gl(
            t,
            l,
            e,
            a
          ), t = l.stateNode;
          try {
            var u = l.memoizedProps, i = u.id, c = u.onPostCommit;
            typeof c == "function" && c(
              i,
              l.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (s) {
            bt(l, l.return, s);
          }
        } else
          Gl(
            t,
            l,
            e,
            a
          );
        break;
      case 31:
        Gl(
          t,
          l,
          e,
          a
        );
        break;
      case 13:
        Gl(
          t,
          l,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = l.stateNode, i = l.alternate, l.memoizedState !== null ? u._visibility & 2 ? Gl(
          t,
          l,
          e,
          a
        ) : Tn(t, l) : u._visibility & 2 ? Gl(
          t,
          l,
          e,
          a
        ) : (u._visibility |= 2, Ra(
          t,
          l,
          e,
          a,
          (l.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && xc(i, l);
        break;
      case 24:
        Gl(
          t,
          l,
          e,
          a
        ), n & 2048 && Cc(l.alternate, l);
        break;
      default:
        Gl(
          t,
          l,
          e,
          a
        );
    }
  }
  function Ra(t, l, e, a, n) {
    for (n = n && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var u = t, i = l, c = e, s = a, y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ra(
            u,
            i,
            c,
            s,
            n
          ), pn(8, i);
          break;
        case 23:
          break;
        case 22:
          var E = i.stateNode;
          i.memoizedState !== null ? E._visibility & 2 ? Ra(
            u,
            i,
            c,
            s,
            n
          ) : Tn(
            u,
            i
          ) : (E._visibility |= 2, Ra(
            u,
            i,
            c,
            s,
            n
          )), n && y & 2048 && xc(
            i.alternate,
            i
          );
          break;
        case 24:
          Ra(
            u,
            i,
            c,
            s,
            n
          ), n && y & 2048 && Cc(i.alternate, i);
          break;
        default:
          Ra(
            u,
            i,
            c,
            s,
            n
          );
      }
      l = l.sibling;
    }
  }
  function Tn(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, a = l, n = a.flags;
        switch (a.tag) {
          case 22:
            Tn(e, a), n & 2048 && xc(
              a.alternate,
              a
            );
            break;
          case 24:
            Tn(e, a), n & 2048 && Cc(a.alternate, a);
            break;
          default:
            Tn(e, a);
        }
        l = l.sibling;
      }
  }
  var An = 8192;
  function xa(t, l, e) {
    if (t.subtreeFlags & An)
      for (t = t.child; t !== null; )
        go(
          t,
          l,
          e
        ), t = t.sibling;
  }
  function go(t, l, e) {
    switch (t.tag) {
      case 26:
        xa(
          t,
          l,
          e
        ), t.flags & An && t.memoizedState !== null && r0(
          e,
          Yl,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        xa(
          t,
          l,
          e
        );
        break;
      case 3:
      case 4:
        var a = Yl;
        Yl = Zu(t.stateNode.containerInfo), xa(
          t,
          l,
          e
        ), Yl = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = An, An = 16777216, xa(
          t,
          l,
          e
        ), An = a) : xa(
          t,
          l,
          e
        ));
        break;
      default:
        xa(
          t,
          l,
          e
        );
    }
  }
  function So(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function zn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          kt = a, po(
            a,
            t
          );
        }
      So(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        bo(t), t = t.sibling;
  }
  function bo(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        zn(t), t.flags & 2048 && Ae(9, t, t.return);
        break;
      case 3:
        zn(t);
        break;
      case 12:
        zn(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, Nu(t)) : zn(t);
        break;
      default:
        zn(t);
    }
  }
  function Nu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          kt = a, po(
            a,
            t
          );
        }
      So(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          Ae(8, l, l.return), Nu(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, Nu(l));
          break;
        default:
          Nu(l);
      }
      t = t.sibling;
    }
  }
  function po(t, l) {
    for (; kt !== null; ) {
      var e = kt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ae(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          cn(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, kt = a;
      else
        t: for (e = t; kt !== null; ) {
          a = kt;
          var n = a.sibling, u = a.return;
          if (so(a), a === e) {
            kt = null;
            break t;
          }
          if (n !== null) {
            n.return = u, kt = n;
            break t;
          }
          kt = u;
        }
    }
  }
  var _h = {
    getCacheForType: function(t) {
      var l = Pt(Yt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return Pt(Yt).controller.signal;
    }
  }, Dh = typeof WeakMap == "function" ? WeakMap : Map, dt = 0, zt = null, at = null, ut = 0, St = 0, Al = null, ze = !1, Ca = !1, Hc = !1, fe = 0, xt = 0, _e = 0, la = 0, Bc = 0, zl = 0, Ha = 0, _n = null, dl = null, jc = !1, Ru = 0, Eo = 0, xu = 1 / 0, Cu = null, De = null, Vt = 0, Oe = null, Ba = null, se = 0, qc = 0, Yc = null, To = null, Dn = 0, Gc = null;
  function _l() {
    return (dt & 2) !== 0 && ut !== 0 ? ut & -ut : T.T !== null ? Kc() : qf();
  }
  function Ao() {
    if (zl === 0)
      if ((ut & 536870912) === 0 || ct) {
        var t = Qn;
        Qn <<= 1, (Qn & 3932160) === 0 && (Qn = 262144), zl = t;
      } else zl = 536870912;
    return t = El.current, t !== null && (t.flags |= 32), zl;
  }
  function ml(t, l, e) {
    (t === zt && (St === 2 || St === 9) || t.cancelPendingCommit !== null) && (ja(t, 0), Me(
      t,
      ut,
      zl,
      !1
    )), Ja(t, e), ((dt & 2) === 0 || t !== zt) && (t === zt && ((dt & 2) === 0 && (la |= e), xt === 4 && Me(
      t,
      ut,
      zl,
      !1
    )), Vl(t));
  }
  function zo(t, l, e) {
    if ((dt & 6) !== 0) throw Error(r(327));
    var a = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || Ka(t, l), n = a ? Uh(t, l) : Qc(t, l, !0), u = a;
    do {
      if (n === 0) {
        Ca && !a && Me(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, u && !Oh(e)) {
          n = Qc(t, l, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = l, t.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            l = i;
            t: {
              var c = t;
              n = _n;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (ja(c, i).flags |= 256), i = Qc(
                c,
                i,
                !1
              ), i !== 2) {
                if (Hc && !s) {
                  c.errorRecoveryDisabledLanes |= u, la |= u, n = 4;
                  break t;
                }
                u = dl, dl = n, u !== null && (dl === null ? dl = u : dl.push.apply(
                  dl,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          ja(t, 0), Me(t, l, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = n, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              Me(
                a,
                l,
                zl,
                !ze
              );
              break t;
            case 2:
              dl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((l & 62914560) === l && (n = Ru + 300 - vl(), 10 < n)) {
            if (Me(
              a,
              l,
              zl,
              !ze
            ), Zn(a, 0, !0) !== 0) break t;
            se = l, a.timeoutHandle = ld(
              _o.bind(
                null,
                a,
                e,
                dl,
                Cu,
                jc,
                l,
                zl,
                la,
                Ha,
                ze,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          _o(
            a,
            e,
            dl,
            Cu,
            jc,
            l,
            zl,
            la,
            Ha,
            ze,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Vl(t);
  }
  function _o(t, l, e, a, n, u, i, c, s, y, E, _, v, b) {
    if (t.timeoutHandle = -1, _ = l.subtreeFlags, _ & 8192 || (_ & 16785408) === 16785408) {
      _ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: kl
      }, go(
        l,
        u,
        _
      );
      var Y = (u & 62914560) === u ? Ru - vl() : (u & 4194048) === u ? Eo - vl() : 0;
      if (Y = o0(
        _,
        Y
      ), Y !== null) {
        se = u, t.cancelPendingCommit = Y(
          Co.bind(
            null,
            t,
            l,
            u,
            e,
            a,
            n,
            i,
            c,
            s,
            E,
            _,
            null,
            v,
            b
          )
        ), Me(t, u, i, !y);
        return;
      }
    }
    Co(
      t,
      l,
      u,
      e,
      a,
      n,
      i,
      c,
      s
    );
  }
  function Oh(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var n = e[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!bl(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = l.child, l.subtreeFlags & 16384 && e !== null)
        e.return = l, l = e;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function Me(t, l, e, a) {
    l &= ~Bc, l &= ~la, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
    for (var n = l; 0 < n; ) {
      var u = 31 - Sl(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    e !== 0 && Hf(t, e, l);
  }
  function Hu() {
    return (dt & 6) === 0 ? (On(0), !1) : !0;
  }
  function Xc() {
    if (at !== null) {
      if (St === 0)
        var t = at.return;
      else
        t = at, Il = Je = null, ec(t), Da = null, sn = 0, t = at;
      for (; t !== null; )
        lo(t.alternate, t), t = t.return;
      at = null;
    }
  }
  function ja(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && (t.timeoutHandle = -1, wh(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), se = 0, Xc(), zt = t, at = e = Fl(t.current, null), ut = l, St = 0, Al = null, ze = !1, Ca = Ka(t, l), Hc = !1, Ha = zl = Bc = la = _e = xt = 0, dl = _n = null, jc = !1, (l & 8) !== 0 && (l |= l & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; ) {
        var n = 31 - Sl(a), u = 1 << n;
        l |= t[n], a &= ~u;
      }
    return fe = l, lu(), e;
  }
  function Do(t, l) {
    P = null, T.H = gn, l === _a || l === su ? (l = Qs(), St = 3) : l === Vi ? (l = Qs(), St = 4) : St = l === Sc ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, Al = l, at === null && (xt = 1, Au(
      t,
      Ul(l, t.current)
    ));
  }
  function Oo() {
    var t = El.current;
    return t === null ? !0 : (ut & 4194048) === ut ? Cl === null : (ut & 62914560) === ut || (ut & 536870912) !== 0 ? t === Cl : !1;
  }
  function Mo() {
    var t = T.H;
    return T.H = gn, t === null ? gn : t;
  }
  function Uo() {
    var t = T.A;
    return T.A = _h, t;
  }
  function Bu() {
    xt = 4, ze || (ut & 4194048) !== ut && El.current !== null || (Ca = !0), (_e & 134217727) === 0 && (la & 134217727) === 0 || zt === null || Me(
      zt,
      ut,
      zl,
      !1
    );
  }
  function Qc(t, l, e) {
    var a = dt;
    dt |= 2;
    var n = Mo(), u = Uo();
    (zt !== t || ut !== l) && (Cu = null, ja(t, l)), l = !1;
    var i = xt;
    t: do
      try {
        if (St !== 0 && at !== null) {
          var c = at, s = Al;
          switch (St) {
            case 8:
              Xc(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              El.current === null && (l = !0);
              var y = St;
              if (St = 0, Al = null, qa(t, c, s, y), e && Ca) {
                i = 0;
                break t;
              }
              break;
            default:
              y = St, St = 0, Al = null, qa(t, c, s, y);
          }
        }
        Mh(), i = xt;
        break;
      } catch (E) {
        Do(t, E);
      }
    while (!0);
    return l && t.shellSuspendCounter++, Il = Je = null, dt = a, T.H = n, T.A = u, at === null && (zt = null, ut = 0, lu()), i;
  }
  function Mh() {
    for (; at !== null; ) No(at);
  }
  function Uh(t, l) {
    var e = dt;
    dt |= 2;
    var a = Mo(), n = Uo();
    zt !== t || ut !== l ? (Cu = null, xu = vl() + 500, ja(t, l)) : Ca = Ka(
      t,
      l
    );
    t: do
      try {
        if (St !== 0 && at !== null) {
          l = at;
          var u = Al;
          l: switch (St) {
            case 1:
              St = 0, Al = null, qa(t, l, u, 1);
              break;
            case 2:
            case 9:
              if (Gs(u)) {
                St = 0, Al = null, Ro(l);
                break;
              }
              l = function() {
                St !== 2 && St !== 9 || zt !== t || (St = 7), Vl(t);
              }, u.then(l, l);
              break t;
            case 3:
              St = 7;
              break t;
            case 4:
              St = 5;
              break t;
            case 7:
              Gs(u) ? (St = 0, Al = null, Ro(l)) : (St = 0, Al = null, qa(t, l, u, 7));
              break;
            case 5:
              var i = null;
              switch (at.tag) {
                case 26:
                  i = at.memoizedState;
                case 5:
                case 27:
                  var c = at;
                  if (i ? vd(i) : c.stateNode.complete) {
                    St = 0, Al = null;
                    var s = c.sibling;
                    if (s !== null) at = s;
                    else {
                      var y = c.return;
                      y !== null ? (at = y, ju(y)) : at = null;
                    }
                    break l;
                  }
              }
              St = 0, Al = null, qa(t, l, u, 5);
              break;
            case 6:
              St = 0, Al = null, qa(t, l, u, 6);
              break;
            case 8:
              Xc(), xt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        Nh();
        break;
      } catch (E) {
        Do(t, E);
      }
    while (!0);
    return Il = Je = null, T.H = a, T.A = n, dt = e, at !== null ? 0 : (zt = null, ut = 0, lu(), xt);
  }
  function Nh() {
    for (; at !== null && !Pd(); )
      No(at);
  }
  function No(t) {
    var l = Pr(t.alternate, t, fe);
    t.memoizedProps = t.pendingProps, l === null ? ju(t) : at = l;
  }
  function Ro(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = wr(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          ut
        );
        break;
      case 11:
        l = wr(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          ut
        );
        break;
      case 5:
        ec(l);
      default:
        lo(e, l), l = at = Ms(l, fe), l = Pr(e, l, fe);
    }
    t.memoizedProps = t.pendingProps, l === null ? ju(t) : at = l;
  }
  function qa(t, l, e, a) {
    Il = Je = null, ec(l), Da = null, sn = 0;
    var n = l.return;
    try {
      if (Sh(
        t,
        n,
        l,
        e,
        ut
      )) {
        xt = 1, Au(
          t,
          Ul(e, t.current)
        ), at = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw at = n, u;
      xt = 1, Au(
        t,
        Ul(e, t.current)
      ), at = null;
      return;
    }
    l.flags & 32768 ? (ct || a === 1 ? t = !0 : Ca || (ut & 536870912) !== 0 ? t = !1 : (ze = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = El.current, a !== null && a.tag === 13 && (a.flags |= 16384))), xo(l, t)) : ju(l);
  }
  function ju(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        xo(
          l,
          ze
        );
        return;
      }
      t = l.return;
      var e = Eh(
        l.alternate,
        l,
        fe
      );
      if (e !== null) {
        at = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        at = l;
        return;
      }
      at = l = t;
    } while (l !== null);
    xt === 0 && (xt = 5);
  }
  function xo(t, l) {
    do {
      var e = Th(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, at = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        at = t;
        return;
      }
      at = t = e;
    } while (t !== null);
    xt = 6, at = null;
  }
  function Co(t, l, e, a, n, u, i, c, s) {
    t.cancelPendingCommit = null;
    do
      qu();
    while (Vt !== 0);
    if ((dt & 6) !== 0) throw Error(r(327));
    if (l !== null) {
      if (l === t.current) throw Error(r(177));
      if (u = l.lanes | l.childLanes, u |= Ui, sm(
        t,
        e,
        u,
        i,
        c,
        s
      ), t === zt && (at = zt = null, ut = 0), Ba = l, Oe = t, se = e, qc = u, Yc = n, To = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Hh(Gn, function() {
        return Yo(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
        a = T.T, T.T = null, n = H.p, H.p = 2, i = dt, dt |= 4;
        try {
          Ah(t, l, e);
        } finally {
          dt = i, H.p = n, T.T = a;
        }
      }
      Vt = 1, Ho(), Bo(), jo();
    }
  }
  function Ho() {
    if (Vt === 1) {
      Vt = 0;
      var t = Oe, l = Ba, e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        e = T.T, T.T = null;
        var a = H.p;
        H.p = 2;
        var n = dt;
        dt |= 4;
        try {
          ho(l, t);
          var u = Pc, i = bs(t.containerInfo), c = u.focusedElem, s = u.selectionRange;
          if (i !== c && c && c.ownerDocument && Ss(
            c.ownerDocument.documentElement,
            c
          )) {
            if (s !== null && zi(c)) {
              var y = s.start, E = s.end;
              if (E === void 0 && (E = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  E,
                  c.value.length
                );
              else {
                var _ = c.ownerDocument || document, v = _ && _.defaultView || window;
                if (v.getSelection) {
                  var b = v.getSelection(), Y = c.textContent.length, k = Math.min(s.start, Y), At = s.end === void 0 ? k : Math.min(s.end, Y);
                  !b.extend && k > At && (i = At, At = k, k = i);
                  var m = gs(
                    c,
                    k
                  ), o = gs(
                    c,
                    At
                  );
                  if (m && o && (b.rangeCount !== 1 || b.anchorNode !== m.node || b.anchorOffset !== m.offset || b.focusNode !== o.node || b.focusOffset !== o.offset)) {
                    var h = _.createRange();
                    h.setStart(m.node, m.offset), b.removeAllRanges(), k > At ? (b.addRange(h), b.extend(o.node, o.offset)) : (h.setEnd(o.node, o.offset), b.addRange(h));
                  }
                }
              }
            }
            for (_ = [], b = c; b = b.parentNode; )
              b.nodeType === 1 && _.push({
                element: b,
                left: b.scrollLeft,
                top: b.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < _.length; c++) {
              var A = _[c];
              A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
            }
          }
          $u = !!Ic, Pc = Ic = null;
        } finally {
          dt = n, H.p = a, T.T = e;
        }
      }
      t.current = l, Vt = 2;
    }
  }
  function Bo() {
    if (Vt === 2) {
      Vt = 0;
      var t = Oe, l = Ba, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = T.T, T.T = null;
        var a = H.p;
        H.p = 2;
        var n = dt;
        dt |= 4;
        try {
          fo(t, l.alternate, l);
        } finally {
          dt = n, H.p = a, T.T = e;
        }
      }
      Vt = 3;
    }
  }
  function jo() {
    if (Vt === 4 || Vt === 3) {
      Vt = 0, tm();
      var t = Oe, l = Ba, e = se, a = To;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Vt = 5 : (Vt = 0, Ba = Oe = null, qo(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (De = null), ui(e), l = l.stateNode, gl && typeof gl.onCommitFiberRoot == "function")
        try {
          gl.onCommitFiberRoot(
            Va,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        l = T.T, n = H.p, H.p = 2, T.T = null;
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            u(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          T.T = l, H.p = n;
        }
      }
      (se & 3) !== 0 && qu(), Vl(t), n = t.pendingLanes, (e & 261930) !== 0 && (n & 42) !== 0 ? t === Gc ? Dn++ : (Dn = 0, Gc = t) : Dn = 0, On(0);
    }
  }
  function qo(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, cn(l)));
  }
  function qu() {
    return Ho(), Bo(), jo(), Yo();
  }
  function Yo() {
    if (Vt !== 5) return !1;
    var t = Oe, l = qc;
    qc = 0;
    var e = ui(se), a = T.T, n = H.p;
    try {
      H.p = 32 > e ? 32 : e, T.T = null, e = Yc, Yc = null;
      var u = Oe, i = se;
      if (Vt = 0, Ba = Oe = null, se = 0, (dt & 6) !== 0) throw Error(r(331));
      var c = dt;
      if (dt |= 4, bo(u.current), vo(
        u,
        u.current,
        i,
        e
      ), dt = c, On(0, !1), gl && typeof gl.onPostCommitFiberRoot == "function")
        try {
          gl.onPostCommitFiberRoot(Va, u);
        } catch {
        }
      return !0;
    } finally {
      H.p = n, T.T = a, qo(t, l);
    }
  }
  function Go(t, l, e) {
    l = Ul(e, l), l = gc(t.stateNode, l, 2), t = pe(t, l, 2), t !== null && (Ja(t, 2), Vl(t));
  }
  function bt(t, l, e) {
    if (t.tag === 3)
      Go(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Go(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (De === null || !De.has(a))) {
            t = Ul(e, t), e = Gr(2), a = pe(l, e, 2), a !== null && (Xr(
              e,
              a,
              l,
              t
            ), Ja(a, 2), Vl(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function Lc(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Dh();
      var n = /* @__PURE__ */ new Set();
      a.set(l, n);
    } else
      n = a.get(l), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(l, n));
    n.has(e) || (Hc = !0, n.add(e), t = Rh.bind(null, t, l, e), l.then(t, t));
  }
  function Rh(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, zt === t && (ut & e) === e && (xt === 4 || xt === 3 && (ut & 62914560) === ut && 300 > vl() - Ru ? (dt & 2) === 0 && ja(t, 0) : Bc |= e, Ha === ut && (Ha = 0)), Vl(t);
  }
  function Xo(t, l) {
    l === 0 && (l = Cf()), t = Ze(t, l), t !== null && (Ja(t, l), Vl(t));
  }
  function xh(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), Xo(t, e);
  }
  function Ch(t, l) {
    var e = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(l), Xo(t, e);
  }
  function Hh(t, l) {
    return Jl(t, l);
  }
  var Yu = null, Ya = null, Zc = !1, Gu = !1, Vc = !1, Ue = 0;
  function Vl(t) {
    t !== Ya && t.next === null && (Ya === null ? Yu = Ya = t : Ya = Ya.next = t), Gu = !0, Zc || (Zc = !0, jh());
  }
  function On(t, l) {
    if (!Vc && Gu) {
      Vc = !0;
      do
        for (var e = !1, a = Yu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              u = (1 << 31 - Sl(42 | t) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (e = !0, Vo(a, u));
          } else
            u = ut, u = Zn(
              a,
              a === zt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Ka(a, u) || (e = !0, Vo(a, u));
          a = a.next;
        }
      while (e);
      Vc = !1;
    }
  }
  function Bh() {
    Qo();
  }
  function Qo() {
    Gu = Zc = !1;
    var t = 0;
    Ue !== 0 && Jh() && (t = Ue);
    for (var l = vl(), e = null, a = Yu; a !== null; ) {
      var n = a.next, u = Lo(a, l);
      u === 0 ? (a.next = null, e === null ? Yu = n : e.next = n, n === null && (Ya = e)) : (e = a, (t !== 0 || (u & 3) !== 0) && (Gu = !0)), a = n;
    }
    Vt !== 0 && Vt !== 5 || On(t), Ue !== 0 && (Ue = 0);
  }
  function Lo(t, l) {
    for (var e = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - Sl(u), c = 1 << i, s = n[i];
      s === -1 ? ((c & e) === 0 || (c & a) !== 0) && (n[i] = fm(c, l)) : s <= l && (t.expiredLanes |= c), u &= ~c;
    }
    if (l = zt, e = ut, e = Zn(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, e === 0 || t === l && (St === 2 || St === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Ft(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || Ka(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (a !== null && Ft(a), ui(e)) {
        case 2:
        case 8:
          e = Rf;
          break;
        case 32:
          e = Gn;
          break;
        case 268435456:
          e = xf;
          break;
        default:
          e = Gn;
      }
      return a = Zo.bind(null, t), e = Jl(e, a), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return a !== null && a !== null && Ft(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Zo(t, l) {
    if (Vt !== 0 && Vt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (qu() && t.callbackNode !== e)
      return null;
    var a = ut;
    return a = Zn(
      t,
      t === zt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (zo(t, a, l), Lo(t, vl()), t.callbackNode != null && t.callbackNode === e ? Zo.bind(null, t) : null);
  }
  function Vo(t, l) {
    if (qu()) return null;
    zo(t, l, !0);
  }
  function jh() {
    kh(function() {
      (dt & 6) !== 0 ? Jl(
        Nf,
        Bh
      ) : Qo();
    });
  }
  function Kc() {
    if (Ue === 0) {
      var t = Aa;
      t === 0 && (t = Xn, Xn <<= 1, (Xn & 261888) === 0 && (Xn = 256)), Ue = t;
    }
    return Ue;
  }
  function Ko(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : wn("" + t);
  }
  function Jo(t, l) {
    var e = l.ownerDocument.createElement("input");
    return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
  }
  function qh(t, l, e, a, n) {
    if (l === "submit" && e && e.stateNode === n) {
      var u = Ko(
        (n[cl] || null).action
      ), i = a.submitter;
      i && (l = (l = i[cl] || null) ? Ko(l.formAction) : i.getAttribute("formAction"), l !== null && (u = l, i = null));
      var c = new Wn(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ue !== 0) {
                  var s = i ? Jo(n, i) : new FormData(n);
                  oc(
                    e,
                    {
                      pending: !0,
                      data: s,
                      method: n.method,
                      action: u
                    },
                    null,
                    s
                  );
                }
              } else
                typeof u == "function" && (c.preventDefault(), s = i ? Jo(n, i) : new FormData(n), oc(
                  e,
                  {
                    pending: !0,
                    data: s,
                    method: n.method,
                    action: u
                  },
                  u,
                  s
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Jc = 0; Jc < Mi.length; Jc++) {
    var wc = Mi[Jc], Yh = wc.toLowerCase(), Gh = wc[0].toUpperCase() + wc.slice(1);
    ql(
      Yh,
      "on" + Gh
    );
  }
  ql(Ts, "onAnimationEnd"), ql(As, "onAnimationIteration"), ql(zs, "onAnimationStart"), ql("dblclick", "onDoubleClick"), ql("focusin", "onFocus"), ql("focusout", "onBlur"), ql(lh, "onTransitionRun"), ql(eh, "onTransitionStart"), ql(ah, "onTransitionCancel"), ql(_s, "onTransitionEnd"), sa("onMouseEnter", ["mouseout", "mouseover"]), sa("onMouseLeave", ["mouseout", "mouseover"]), sa("onPointerEnter", ["pointerout", "pointerover"]), sa("onPointerLeave", ["pointerout", "pointerover"]), Ge(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ge(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ge("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ge(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ge(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ge(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Mn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Xh = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mn)
  );
  function wo(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e], n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (l)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i], s = c.instance, y = c.currentTarget;
            if (c = c.listener, s !== u && n.isPropagationStopped())
              break t;
            u = c, n.currentTarget = y;
            try {
              u(n);
            } catch (E) {
              tu(E);
            }
            n.currentTarget = null, u = s;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (c = a[i], s = c.instance, y = c.currentTarget, c = c.listener, s !== u && n.isPropagationStopped())
              break t;
            u = c, n.currentTarget = y;
            try {
              u(n);
            } catch (E) {
              tu(E);
            }
            n.currentTarget = null, u = s;
          }
      }
    }
  }
  function nt(t, l) {
    var e = l[ii];
    e === void 0 && (e = l[ii] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    e.has(a) || (ko(l, t, 2, !1), e.add(a));
  }
  function kc(t, l, e) {
    var a = 0;
    l && (a |= 4), ko(
      e,
      t,
      a,
      l
    );
  }
  var Xu = "_reactListening" + Math.random().toString(36).slice(2);
  function $c(t) {
    if (!t[Xu]) {
      t[Xu] = !0, Xf.forEach(function(e) {
        e !== "selectionchange" && (Xh.has(e) || kc(e, !1, t), kc(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Xu] || (l[Xu] = !0, kc("selectionchange", !1, l));
    }
  }
  function ko(t, l, e, a) {
    switch (Ad(l)) {
      case 2:
        var n = h0;
        break;
      case 8:
        n = y0;
        break;
      default:
        n = of;
    }
    e = n.bind(
      null,
      l,
      e,
      t
    ), n = void 0, !yi || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: n
    }) : t.addEventListener(l, e, !0) : n !== void 0 ? t.addEventListener(l, e, {
      passive: n
    }) : t.addEventListener(l, e, !1);
  }
  function Fc(t, l, e, a, n) {
    var u = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = ia(c), i === null) return;
            if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
              a = u = i;
              continue t;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    If(function() {
      var y = u, E = mi(e), _ = [];
      t: {
        var v = Ds.get(t);
        if (v !== void 0) {
          var b = Wn, Y = t;
          switch (t) {
            case "keypress":
              if ($n(e) === 0) break t;
            case "keydown":
            case "keyup":
              b = Cm;
              break;
            case "focusin":
              Y = "focus", b = bi;
              break;
            case "focusout":
              Y = "blur", b = bi;
              break;
            case "beforeblur":
            case "afterblur":
              b = bi;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = ls;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = Em;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = jm;
              break;
            case Ts:
            case As:
            case zs:
              b = zm;
              break;
            case _s:
              b = Ym;
              break;
            case "scroll":
            case "scrollend":
              b = bm;
              break;
            case "wheel":
              b = Xm;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = Dm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = as;
              break;
            case "toggle":
            case "beforetoggle":
              b = Lm;
          }
          var k = (l & 4) !== 0, At = !k && (t === "scroll" || t === "scrollend"), m = k ? v !== null ? v + "Capture" : null : v;
          k = [];
          for (var o = y, h; o !== null; ) {
            var A = o;
            if (h = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || h === null || m === null || (A = $a(o, m), A != null && k.push(
              Un(o, A, h)
            )), At) break;
            o = o.return;
          }
          0 < k.length && (v = new b(
            v,
            Y,
            null,
            e,
            E
          ), _.push({ event: v, listeners: k }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (v = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout", v && e !== di && (Y = e.relatedTarget || e.fromElement) && (ia(Y) || Y[ua]))
            break t;
          if ((b || v) && (v = E.window === E ? E : (v = E.ownerDocument) ? v.defaultView || v.parentWindow : window, b ? (Y = e.relatedTarget || e.toElement, b = y, Y = Y ? ia(Y) : null, Y !== null && (At = q(Y), k = Y.tag, Y !== At || k !== 5 && k !== 27 && k !== 6) && (Y = null)) : (b = null, Y = y), b !== Y)) {
            if (k = ls, A = "onMouseLeave", m = "onMouseEnter", o = "mouse", (t === "pointerout" || t === "pointerover") && (k = as, A = "onPointerLeave", m = "onPointerEnter", o = "pointer"), At = b == null ? v : ka(b), h = Y == null ? v : ka(Y), v = new k(
              A,
              o + "leave",
              b,
              e,
              E
            ), v.target = At, v.relatedTarget = h, A = null, ia(E) === y && (k = new k(
              m,
              o + "enter",
              Y,
              e,
              E
            ), k.target = h, k.relatedTarget = At, A = k), At = A, b && Y)
              l: {
                for (k = Qh, m = b, o = Y, h = 0, A = m; A; A = k(A))
                  h++;
                A = 0;
                for (var Z = o; Z; Z = k(Z))
                  A++;
                for (; 0 < h - A; )
                  m = k(m), h--;
                for (; 0 < A - h; )
                  o = k(o), A--;
                for (; h--; ) {
                  if (m === o || o !== null && m === o.alternate) {
                    k = m;
                    break l;
                  }
                  m = k(m), o = k(o);
                }
                k = null;
              }
            else k = null;
            b !== null && $o(
              _,
              v,
              b,
              k,
              !1
            ), Y !== null && At !== null && $o(
              _,
              At,
              Y,
              k,
              !0
            );
          }
        }
        t: {
          if (v = y ? ka(y) : window, b = v.nodeName && v.nodeName.toLowerCase(), b === "select" || b === "input" && v.type === "file")
            var rt = os;
          else if (ss(v))
            if (ds)
              rt = Im;
            else {
              rt = Fm;
              var L = $m;
            }
          else
            b = v.nodeName, !b || b.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? y && oi(y.elementType) && (rt = os) : rt = Wm;
          if (rt && (rt = rt(t, y))) {
            rs(
              _,
              rt,
              e,
              E
            );
            break t;
          }
          L && L(t, v, y), t === "focusout" && y && v.type === "number" && y.memoizedProps.value != null && ri(v, "number", v.value);
        }
        switch (L = y ? ka(y) : window, t) {
          case "focusin":
            (ss(L) || L.contentEditable === "true") && (ya = L, _i = y, an = null);
            break;
          case "focusout":
            an = _i = ya = null;
            break;
          case "mousedown":
            Di = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Di = !1, ps(_, e, E);
            break;
          case "selectionchange":
            if (th) break;
          case "keydown":
          case "keyup":
            ps(_, e, E);
        }
        var tt;
        if (Ei)
          t: {
            switch (t) {
              case "compositionstart":
                var it = "onCompositionStart";
                break t;
              case "compositionend":
                it = "onCompositionEnd";
                break t;
              case "compositionupdate":
                it = "onCompositionUpdate";
                break t;
            }
            it = void 0;
          }
        else
          ha ? cs(t, e) && (it = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (it = "onCompositionStart");
        it && (ns && e.locale !== "ko" && (ha || it !== "onCompositionStart" ? it === "onCompositionEnd" && ha && (tt = Pf()) : (me = E, vi = "value" in me ? me.value : me.textContent, ha = !0)), L = Qu(y, it), 0 < L.length && (it = new es(
          it,
          t,
          null,
          e,
          E
        ), _.push({ event: it, listeners: L }), tt ? it.data = tt : (tt = fs(e), tt !== null && (it.data = tt)))), (tt = Vm ? Km(t, e) : Jm(t, e)) && (it = Qu(y, "onBeforeInput"), 0 < it.length && (L = new es(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          E
        ), _.push({
          event: L,
          listeners: it
        }), L.data = tt)), qh(
          _,
          t,
          y,
          e,
          E
        );
      }
      wo(_, l);
    });
  }
  function Un(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Qu(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = $a(t, e), n != null && a.unshift(
        Un(t, n, u)
      ), n = $a(t, l), n != null && a.push(
        Un(t, n, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Qh(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function $o(t, l, e, a, n) {
    for (var u = l._reactName, i = []; e !== null && e !== a; ) {
      var c = e, s = c.alternate, y = c.stateNode;
      if (c = c.tag, s !== null && s === a) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (s = y, n ? (y = $a(e, u), y != null && i.unshift(
        Un(e, y, s)
      )) : n || (y = $a(e, u), y != null && i.push(
        Un(e, y, s)
      ))), e = e.return;
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var Lh = /\r\n?/g, Zh = /\u0000|\uFFFD/g;
  function Fo(t) {
    return (typeof t == "string" ? t : "" + t).replace(Lh, `
`).replace(Zh, "");
  }
  function Wo(t, l) {
    return l = Fo(l), Fo(t) === l;
  }
  function Tt(t, l, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string" ? l === "body" || l === "textarea" && a === "" || oa(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && oa(t, "" + a);
        break;
      case "className":
        Kn(t, "class", a);
        break;
      case "tabIndex":
        Kn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Kn(t, e, a);
        break;
      case "style":
        Ff(t, a, u);
        break;
      case "data":
        if (l !== "object") {
          Kn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = wn("" + a), t.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (e === "formAction" ? (l !== "input" && Tt(t, l, "name", n.name, n, null), Tt(
            t,
            l,
            "formEncType",
            n.formEncType,
            n,
            null
          ), Tt(
            t,
            l,
            "formMethod",
            n.formMethod,
            n,
            null
          ), Tt(
            t,
            l,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (Tt(t, l, "encType", n.encType, n, null), Tt(t, l, "method", n.method, n, null), Tt(t, l, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = wn("" + a), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = kl);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(r(60));
            t.innerHTML = e;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        e = wn("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
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
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "" + a) : t.removeAttribute(e);
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
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
        break;
      case "popover":
        nt("beforetoggle", t), nt("toggle", t), Vn(t, "popover", a);
        break;
      case "xlinkActuate":
        wl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        wl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        wl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        wl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        wl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        wl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        wl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        wl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        wl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Vn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = gm.get(e) || e, Vn(t, e, a));
    }
  }
  function Wc(t, l, e, a, n, u) {
    switch (e) {
      case "style":
        Ff(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(r(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? oa(t, a) : (typeof a == "number" || typeof a == "bigint") && oa(t, "" + a);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = kl);
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
        if (!Qf.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), l = e.slice(2, n ? e.length - 7 : void 0), u = t[cl] || null, u = u != null ? u[e] : null, typeof u == "function" && t.removeEventListener(l, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, a, n);
              break t;
            }
            e in t ? t[e] = a : a === !0 ? t.setAttribute(e, "") : Vn(t, e, a);
          }
    }
  }
  function ll(t, l, e) {
    switch (l) {
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
        nt("error", t), nt("load", t);
        var a = !1, n = !1, u;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var i = e[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, l));
                default:
                  Tt(t, l, u, i, e, null);
              }
          }
        n && Tt(t, l, "srcSet", e.srcSet, e, null), a && Tt(t, l, "src", e.src, e, null);
        return;
      case "input":
        nt("invalid", t);
        var c = u = i = n = null, s = null, y = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var E = e[a];
            if (E != null)
              switch (a) {
                case "name":
                  n = E;
                  break;
                case "type":
                  i = E;
                  break;
                case "checked":
                  s = E;
                  break;
                case "defaultChecked":
                  y = E;
                  break;
                case "value":
                  u = E;
                  break;
                case "defaultValue":
                  c = E;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (E != null)
                    throw Error(r(137, l));
                  break;
                default:
                  Tt(t, l, a, E, e, null);
              }
          }
        Jf(
          t,
          u,
          c,
          s,
          y,
          i,
          n,
          !1
        );
        return;
      case "select":
        nt("invalid", t), a = i = u = null;
        for (n in e)
          if (e.hasOwnProperty(n) && (c = e[n], c != null))
            switch (n) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                Tt(t, l, n, c, e, null);
            }
        l = u, e = i, t.multiple = !!a, l != null ? ra(t, !!a, l, !1) : e != null && ra(t, !!a, e, !0);
        return;
      case "textarea":
        nt("invalid", t), u = n = a = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (c = e[i], c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                u = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                Tt(t, l, i, c, e, null);
            }
        kf(t, a, n, u);
        return;
      case "option":
        for (s in e)
          e.hasOwnProperty(s) && (a = e[s], a != null) && (s === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Tt(t, l, s, a, e, null));
        return;
      case "dialog":
        nt("beforetoggle", t), nt("toggle", t), nt("cancel", t), nt("close", t);
        break;
      case "iframe":
      case "object":
        nt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Mn.length; a++)
          nt(Mn[a], t);
        break;
      case "image":
        nt("error", t), nt("load", t);
        break;
      case "details":
        nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        nt("error", t), nt("load", t);
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
        for (y in e)
          if (e.hasOwnProperty(y) && (a = e[y], a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, l));
              default:
                Tt(t, l, y, a, e, null);
            }
        return;
      default:
        if (oi(l)) {
          for (E in e)
            e.hasOwnProperty(E) && (a = e[E], a !== void 0 && Wc(
              t,
              l,
              E,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (a = e[c], a != null && Tt(t, l, c, a, e, null));
  }
  function Vh(t, l, e, a) {
    switch (l) {
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
        var n = null, u = null, i = null, c = null, s = null, y = null, E = null;
        for (b in e) {
          var _ = e[b];
          if (e.hasOwnProperty(b) && _ != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = _;
              default:
                a.hasOwnProperty(b) || Tt(t, l, b, null, a, _);
            }
        }
        for (var v in a) {
          var b = a[v];
          if (_ = e[v], a.hasOwnProperty(v) && (b != null || _ != null))
            switch (v) {
              case "type":
                u = b;
                break;
              case "name":
                n = b;
                break;
              case "checked":
                y = b;
                break;
              case "defaultChecked":
                E = b;
                break;
              case "value":
                i = b;
                break;
              case "defaultValue":
                c = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null)
                  throw Error(r(137, l));
                break;
              default:
                b !== _ && Tt(
                  t,
                  l,
                  v,
                  b,
                  a,
                  _
                );
            }
        }
        si(
          t,
          i,
          c,
          s,
          y,
          E,
          u,
          n
        );
        return;
      case "select":
        b = i = c = v = null;
        for (u in e)
          if (s = e[u], e.hasOwnProperty(u) && s != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                b = s;
              default:
                a.hasOwnProperty(u) || Tt(
                  t,
                  l,
                  u,
                  null,
                  a,
                  s
                );
            }
        for (n in a)
          if (u = a[n], s = e[n], a.hasOwnProperty(n) && (u != null || s != null))
            switch (n) {
              case "value":
                v = u;
                break;
              case "defaultValue":
                c = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== s && Tt(
                  t,
                  l,
                  n,
                  u,
                  a,
                  s
                );
            }
        l = c, e = i, a = b, v != null ? ra(t, !!e, v, !1) : !!a != !!e && (l != null ? ra(t, !!e, l, !0) : ra(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        b = v = null;
        for (c in e)
          if (n = e[c], e.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                Tt(t, l, c, null, a, n);
            }
        for (i in a)
          if (n = a[i], u = e[i], a.hasOwnProperty(i) && (n != null || u != null))
            switch (i) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                b = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== u && Tt(t, l, i, n, a, u);
            }
        wf(t, v, b);
        return;
      case "option":
        for (var Y in e)
          v = e[Y], e.hasOwnProperty(Y) && v != null && !a.hasOwnProperty(Y) && (Y === "selected" ? t.selected = !1 : Tt(
            t,
            l,
            Y,
            null,
            a,
            v
          ));
        for (s in a)
          v = a[s], b = e[s], a.hasOwnProperty(s) && v !== b && (v != null || b != null) && (s === "selected" ? t.selected = v && typeof v != "function" && typeof v != "symbol" : Tt(
            t,
            l,
            s,
            v,
            a,
            b
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
        for (var k in e)
          v = e[k], e.hasOwnProperty(k) && v != null && !a.hasOwnProperty(k) && Tt(t, l, k, null, a, v);
        for (y in a)
          if (v = a[y], b = e[y], a.hasOwnProperty(y) && v !== b && (v != null || b != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(r(137, l));
                break;
              default:
                Tt(
                  t,
                  l,
                  y,
                  v,
                  a,
                  b
                );
            }
        return;
      default:
        if (oi(l)) {
          for (var At in e)
            v = e[At], e.hasOwnProperty(At) && v !== void 0 && !a.hasOwnProperty(At) && Wc(
              t,
              l,
              At,
              void 0,
              a,
              v
            );
          for (E in a)
            v = a[E], b = e[E], !a.hasOwnProperty(E) || v === b || v === void 0 && b === void 0 || Wc(
              t,
              l,
              E,
              v,
              a,
              b
            );
          return;
        }
    }
    for (var m in e)
      v = e[m], e.hasOwnProperty(m) && v != null && !a.hasOwnProperty(m) && Tt(t, l, m, null, a, v);
    for (_ in a)
      v = a[_], b = e[_], !a.hasOwnProperty(_) || v === b || v == null && b == null || Tt(t, l, _, v, a, b);
  }
  function Io(t) {
    switch (t) {
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
  function Kh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var n = e[a], u = n.transferSize, i = n.initiatorType, c = n.duration;
        if (u && c && Io(i)) {
          for (i = 0, c = n.responseEnd, a += 1; a < e.length; a++) {
            var s = e[a], y = s.startTime;
            if (y > c) break;
            var E = s.transferSize, _ = s.initiatorType;
            E && Io(_) && (s = s.responseEnd, i += E * (s < c ? 1 : (c - y) / (s - y)));
          }
          if (--a, l += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Ic = null, Pc = null;
  function Lu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Po(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function td(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function tf(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var lf = null;
  function Jh() {
    var t = window.event;
    return t && t.type === "popstate" ? t === lf ? !1 : (lf = t, !0) : (lf = null, !1);
  }
  var ld = typeof setTimeout == "function" ? setTimeout : void 0, wh = typeof clearTimeout == "function" ? clearTimeout : void 0, ed = typeof Promise == "function" ? Promise : void 0, kh = typeof queueMicrotask == "function" ? queueMicrotask : typeof ed < "u" ? function(t) {
    return ed.resolve(null).then(t).catch($h);
  } : ld;
  function $h(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ne(t) {
    return t === "head";
  }
  function ad(t, l) {
    var e = l, a = 0;
    do {
      var n = e.nextSibling;
      if (t.removeChild(e), n && n.nodeType === 8)
        if (e = n.data, e === "/$" || e === "/&") {
          if (a === 0) {
            t.removeChild(n), La(l);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          Nn(t.ownerDocument.documentElement);
        else if (e === "head") {
          e = t.ownerDocument.head, Nn(e);
          for (var u = e.firstChild; u; ) {
            var i = u.nextSibling, c = u.nodeName;
            u[wa] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && u.rel.toLowerCase() === "stylesheet" || e.removeChild(u), u = i;
          }
        } else
          e === "body" && Nn(t.ownerDocument.body);
      e = n;
    } while (e);
    La(l);
  }
  function nd(t, l) {
    var e = t;
    t = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? l ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (l ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8)
        if (e = a.data, e === "/$") {
          if (t === 0) break;
          t--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || t++;
      e = a;
    } while (e);
  }
  function ef(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ef(e), ci(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function Fh(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var n = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[wa])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = Hl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Wh(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Hl(t.nextSibling), t === null)) return null;
    return t;
  }
  function ud(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Hl(t.nextSibling), t === null)) return null;
    return t;
  }
  function af(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function nf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Ih(t, l) {
    var e = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = l;
    else if (t.data !== "$?" || e.readyState !== "loading")
      l();
    else {
      var a = function() {
        l(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Hl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F")
          break;
        if (l === "/$" || l === "/&") return null;
      }
    }
    return t;
  }
  var uf = null;
  function id(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0)
            return Hl(t.nextSibling);
          l--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function cd(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (l === 0) return t;
          l--;
        } else e !== "/$" && e !== "/&" || l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function fd(t, l, e) {
    switch (l = Lu(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Nn(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    ci(t);
  }
  var Bl = /* @__PURE__ */ new Map(), sd = /* @__PURE__ */ new Set();
  function Zu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var re = H.d;
  H.d = {
    f: Ph,
    r: t0,
    D: l0,
    C: e0,
    L: a0,
    m: n0,
    X: i0,
    S: u0,
    M: c0
  };
  function Ph() {
    var t = re.f(), l = Hu();
    return t || l;
  }
  function t0(t) {
    var l = ca(t);
    l !== null && l.tag === 5 && l.type === "form" ? _r(l) : re.r(t);
  }
  var Ga = typeof document > "u" ? null : document;
  function rd(t, l, e) {
    var a = Ga;
    if (a && typeof l == "string" && l) {
      var n = Ol(l);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), sd.has(n) || (sd.add(n), t = { rel: t, crossOrigin: e, href: l }, a.querySelector(n) === null && (l = a.createElement("link"), ll(l, "link", t), wt(l), a.head.appendChild(l)));
    }
  }
  function l0(t) {
    re.D(t), rd("dns-prefetch", t, null);
  }
  function e0(t, l) {
    re.C(t, l), rd("preconnect", t, l);
  }
  function a0(t, l, e) {
    re.L(t, l, e);
    var a = Ga;
    if (a && t && l) {
      var n = 'link[rel="preload"][as="' + Ol(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + Ol(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + Ol(
        e.imageSizes
      ) + '"]')) : n += '[href="' + Ol(t) + '"]';
      var u = n;
      switch (l) {
        case "style":
          u = Xa(t);
          break;
        case "script":
          u = Qa(t);
      }
      Bl.has(u) || (t = x(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), Bl.set(u, t), a.querySelector(n) !== null || l === "style" && a.querySelector(Rn(u)) || l === "script" && a.querySelector(xn(u)) || (l = a.createElement("link"), ll(l, "link", t), wt(l), a.head.appendChild(l)));
    }
  }
  function n0(t, l) {
    re.m(t, l);
    var e = Ga;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script", n = 'link[rel="modulepreload"][as="' + Ol(a) + '"][href="' + Ol(t) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Qa(t);
      }
      if (!Bl.has(u) && (t = x({ rel: "modulepreload", href: t }, l), Bl.set(u, t), e.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(xn(u)))
              return;
        }
        a = e.createElement("link"), ll(a, "link", t), wt(a), e.head.appendChild(a);
      }
    }
  }
  function u0(t, l, e) {
    re.S(t, l, e);
    var a = Ga;
    if (a && t) {
      var n = fa(a).hoistableStyles, u = Xa(t);
      l = l || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(
          Rn(u)
        ))
          c.loading = 5;
        else {
          t = x(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = Bl.get(u)) && cf(t, e);
          var s = i = a.createElement("link");
          wt(s), ll(s, "link", t), s._p = new Promise(function(y, E) {
            s.onload = y, s.onerror = E;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Vu(i, l, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, n.set(u, i);
      }
    }
  }
  function i0(t, l) {
    re.X(t, l);
    var e = Ga;
    if (e && t) {
      var a = fa(e).hoistableScripts, n = Qa(t), u = a.get(n);
      u || (u = e.querySelector(xn(n)), u || (t = x({ src: t, async: !0 }, l), (l = Bl.get(n)) && ff(t, l), u = e.createElement("script"), wt(u), ll(u, "link", t), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function c0(t, l) {
    re.M(t, l);
    var e = Ga;
    if (e && t) {
      var a = fa(e).hoistableScripts, n = Qa(t), u = a.get(n);
      u || (u = e.querySelector(xn(n)), u || (t = x({ src: t, async: !0, type: "module" }, l), (l = Bl.get(n)) && ff(t, l), u = e.createElement("script"), wt(u), ll(u, "link", t), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function od(t, l, e, a) {
    var n = (n = lt.current) ? Zu(n) : null;
    if (!n) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (l = Xa(e.href), e = fa(
          n
        ).hoistableStyles, a = e.get(l), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = Xa(e.href);
          var u = fa(
            n
          ).hoistableStyles, i = u.get(t);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, i), (u = n.querySelector(
            Rn(t)
          )) && !u._p && (i.instance = u, i.state.loading = 5), Bl.has(t) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Bl.set(t, e), u || f0(
            n,
            t,
            e,
            i.state
          ))), l && a === null)
            throw Error(r(528, ""));
          return i;
        }
        if (l && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Qa(e), e = fa(
          n
        ).hoistableScripts, a = e.get(l), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function Xa(t) {
    return 'href="' + Ol(t) + '"';
  }
  function Rn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function dd(t) {
    return x({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function f0(t, l, e, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = t.createElement("link"), a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    }), ll(l, "link", e), wt(l), t.head.appendChild(l));
  }
  function Qa(t) {
    return '[src="' + Ol(t) + '"]';
  }
  function xn(t) {
    return "script[async]" + t;
  }
  function md(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Ol(e.href) + '"]'
          );
          if (a)
            return l.instance = a, wt(a), a;
          var n = x({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), wt(a), ll(a, "style", n), Vu(a, e.precedence, t), l.instance = a;
        case "stylesheet":
          n = Xa(e.href);
          var u = t.querySelector(
            Rn(n)
          );
          if (u)
            return l.state.loading |= 4, l.instance = u, wt(u), u;
          a = dd(e), (n = Bl.get(n)) && cf(a, n), u = (t.ownerDocument || t).createElement("link"), wt(u);
          var i = u;
          return i._p = new Promise(function(c, s) {
            i.onload = c, i.onerror = s;
          }), ll(u, "link", a), l.state.loading |= 4, Vu(u, e.precedence, t), l.instance = u;
        case "script":
          return u = Qa(e.src), (n = t.querySelector(
            xn(u)
          )) ? (l.instance = n, wt(n), n) : (a = e, (n = Bl.get(u)) && (a = x({}, e), ff(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), wt(n), ll(n, "link", a), t.head.appendChild(n), l.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Vu(a, e.precedence, t));
    return l.instance;
  }
  function Vu(t, l, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === l) u = c;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function cf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function ff(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Ku = null;
  function hd(t, l, e) {
    if (Ku === null) {
      var a = /* @__PURE__ */ new Map(), n = Ku = /* @__PURE__ */ new Map();
      n.set(e, a);
    } else
      n = Ku, a = n.get(e), a || (a = /* @__PURE__ */ new Map(), n.set(e, a));
    if (a.has(t)) return a;
    for (a.set(t, null), e = e.getElementsByTagName(t), n = 0; n < e.length; n++) {
      var u = e[n];
      if (!(u[wa] || u[Wt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(l) || "";
        i = t + i;
        var c = a.get(i);
        c ? c.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function yd(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function s0(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        return l.rel === "stylesheet" ? (t = l.disabled, typeof l.precedence == "string" && t == null) : !0;
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function vd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function r0(t, l, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var n = Xa(a.href), u = l.querySelector(
          Rn(n)
        );
        if (u) {
          l = u._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = Ju.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = u, wt(u);
          return;
        }
        u = l.ownerDocument || l, a = dd(a), (n = Bl.get(n)) && cf(a, n), u = u.createElement("link"), wt(u);
        var i = u;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), ll(u, "link", a), e.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = Ju.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var sf = 0;
  function o0(t, l) {
    return t.stylesheets && t.count === 0 && ku(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (t.stylesheets && ku(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + l);
      0 < t.imgBytes && sf === 0 && (sf = 62500 * Kh());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && ku(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > sf ? 50 : 800) + l
      );
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Ju() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ku(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var wu = null;
  function ku(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, wu = /* @__PURE__ */ new Map(), l.forEach(d0, t), wu = null, Ju.call(t));
  }
  function d0(t, l) {
    if (!(l.state.loading & 4)) {
      var e = wu.get(t);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), wu.set(t, e);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      n = l.instance, i = n.getAttribute("data-precedence"), u = e.get(i) || a, u === a && e.set(null, n), e.set(i, n), this.count++, a = Ju.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), l.state.loading |= 4;
    }
  }
  var Cn = {
    $$typeof: pt,
    Provider: null,
    Consumer: null,
    _currentValue: w,
    _currentValue2: w,
    _threadCount: 0
  };
  function m0(t, l, e, a, n, u, i, c, s) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ai(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ai(0), this.hiddenUpdates = ai(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function gd(t, l, e, a, n, u, i, c, s, y, E, _) {
    return t = new m0(
      t,
      l,
      e,
      i,
      s,
      y,
      E,
      _,
      c
    ), l = 1, u === !0 && (l |= 24), u = pl(3, null, null, l), t.current = u, u.stateNode = t, l = Qi(), l.refCount++, t.pooledCache = l, l.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: l
    }, Ki(u), t;
  }
  function Sd(t) {
    return t ? (t = Sa, t) : Sa;
  }
  function bd(t, l, e, a, n, u) {
    n = Sd(n), a.context === null ? a.context = n : a.pendingContext = n, a = be(l), a.payload = { element: e }, u = u === void 0 ? null : u, u !== null && (a.callback = u), e = pe(t, a, l), e !== null && (ml(e, t, l), on(e, t, l));
  }
  function pd(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function rf(t, l) {
    pd(t, l), (t = t.alternate) && pd(t, l);
  }
  function Ed(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = Ze(t, 67108864);
      l !== null && ml(l, t, 67108864), rf(t, 67108864);
    }
  }
  function Td(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = _l();
      l = ni(l);
      var e = Ze(t, l);
      e !== null && ml(e, t, l), rf(t, l);
    }
  }
  var $u = !0;
  function h0(t, l, e, a) {
    var n = T.T;
    T.T = null;
    var u = H.p;
    try {
      H.p = 2, of(t, l, e, a);
    } finally {
      H.p = u, T.T = n;
    }
  }
  function y0(t, l, e, a) {
    var n = T.T;
    T.T = null;
    var u = H.p;
    try {
      H.p = 8, of(t, l, e, a);
    } finally {
      H.p = u, T.T = n;
    }
  }
  function of(t, l, e, a) {
    if ($u) {
      var n = df(a);
      if (n === null)
        Fc(
          t,
          l,
          a,
          Fu,
          e
        ), zd(t, a);
      else if (g0(
        n,
        t,
        l,
        e,
        a
      ))
        a.stopPropagation();
      else if (zd(t, a), l & 4 && -1 < v0.indexOf(t)) {
        for (; n !== null; ) {
          var u = ca(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Ye(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var s = 1 << 31 - Sl(i);
                      c.entanglements[1] |= s, i &= ~s;
                    }
                    Vl(u), (dt & 6) === 0 && (xu = vl() + 500, On(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Ze(u, 2), c !== null && ml(c, u, 2), Hu(), rf(u, 2);
            }
          if (u = df(a), u === null && Fc(
            t,
            l,
            a,
            Fu,
            e
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        Fc(
          t,
          l,
          a,
          null,
          e
        );
    }
  }
  function df(t) {
    return t = mi(t), mf(t);
  }
  var Fu = null;
  function mf(t) {
    if (Fu = null, t = ia(t), t !== null) {
      var l = q(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = Q(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = G(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return Fu = t, null;
  }
  function Ad(t) {
    switch (t) {
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
        switch (lm()) {
          case Nf:
            return 2;
          case Rf:
            return 8;
          case Gn:
          case em:
            return 32;
          case xf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var hf = !1, Re = null, xe = null, Ce = null, Hn = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map(), He = [], v0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function zd(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Re = null;
        break;
      case "dragenter":
      case "dragleave":
        xe = null;
        break;
      case "mouseover":
      case "mouseout":
        Ce = null;
        break;
      case "pointerover":
      case "pointerout":
        Hn.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bn.delete(l.pointerId);
    }
  }
  function jn(t, l, e, a, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, l !== null && (l = ca(l), l !== null && Ed(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, n !== null && l.indexOf(n) === -1 && l.push(n), t);
  }
  function g0(t, l, e, a, n) {
    switch (l) {
      case "focusin":
        return Re = jn(
          Re,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "dragenter":
        return xe = jn(
          xe,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "mouseover":
        return Ce = jn(
          Ce,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return Hn.set(
          u,
          jn(
            Hn.get(u) || null,
            t,
            l,
            e,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, Bn.set(
          u,
          jn(
            Bn.get(u) || null,
            t,
            l,
            e,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function _d(t) {
    var l = ia(t.target);
    if (l !== null) {
      var e = q(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = Q(e), l !== null) {
            t.blockedOn = l, Yf(t.priority, function() {
              Td(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = G(e), l !== null) {
            t.blockedOn = l, Yf(t.priority, function() {
              Td(e);
            });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Wu(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = df(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        di = a, e.target.dispatchEvent(a), di = null;
      } else
        return l = ca(e), l !== null && Ed(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function Dd(t, l, e) {
    Wu(t) && e.delete(l);
  }
  function S0() {
    hf = !1, Re !== null && Wu(Re) && (Re = null), xe !== null && Wu(xe) && (xe = null), Ce !== null && Wu(Ce) && (Ce = null), Hn.forEach(Dd), Bn.forEach(Dd);
  }
  function Iu(t, l) {
    t.blockedOn === l && (t.blockedOn = null, hf || (hf = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      S0
    )));
  }
  var Pu = null;
  function Od(t) {
    Pu !== t && (Pu = t, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        Pu === t && (Pu = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], a = t[l + 1], n = t[l + 2];
          if (typeof a != "function") {
            if (mf(a || e) === null)
              continue;
            break;
          }
          var u = ca(e);
          u !== null && (t.splice(l, 3), l -= 3, oc(
            u,
            {
              pending: !0,
              data: n,
              method: e.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function La(t) {
    function l(s) {
      return Iu(s, t);
    }
    Re !== null && Iu(Re, t), xe !== null && Iu(xe, t), Ce !== null && Iu(Ce, t), Hn.forEach(l), Bn.forEach(l);
    for (var e = 0; e < He.length; e++) {
      var a = He[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < He.length && (e = He[0], e.blockedOn === null); )
      _d(e), e.blockedOn === null && He.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var n = e[a], u = e[a + 1], i = n[cl] || null;
        if (typeof u == "function")
          i || Od(e);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[cl] || null)
              c = i.formAction;
            else if (mf(n) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), Od(e);
        }
      }
  }
  function Md() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(i) {
            return n = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function l() {
      n !== null && (n(), n = null), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(e, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), n !== null && (n(), n = null);
      };
    }
  }
  function yf(t) {
    this._internalRoot = t;
  }
  ti.prototype.render = yf.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(r(409));
    var e = l.current, a = _l();
    bd(e, a, t, l, null, null);
  }, ti.prototype.unmount = yf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      bd(t.current, 2, null, t, null, null), Hu(), l[ua] = null;
    }
  };
  function ti(t) {
    this._internalRoot = t;
  }
  ti.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = qf();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < He.length && l !== 0 && l < He[e].priority; e++) ;
      He.splice(e, 0, t), e === 0 && _d(t);
    }
  };
  var Ud = p.version;
  if (Ud !== "19.2.8")
    throw Error(
      r(
        527,
        Ud,
        "19.2.8"
      )
    );
  H.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = g(l), t = t !== null ? K(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var b0 = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!li.isDisabled && li.supportsFiber)
      try {
        Va = li.inject(
          b0
        ), gl = li;
      } catch {
      }
  }
  return Yn.createRoot = function(t, l) {
    if (!X(t)) throw Error(r(299));
    var e = !1, a = "", n = Br, u = jr, i = qr;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (n = l.onUncaughtError), l.onCaughtError !== void 0 && (u = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError)), l = gd(
      t,
      1,
      !1,
      null,
      null,
      e,
      a,
      null,
      n,
      u,
      i,
      Md
    ), t[ua] = l.current, $c(t), new yf(l);
  }, Yn.hydrateRoot = function(t, l, e) {
    if (!X(t)) throw Error(r(299));
    var a = !1, n = "", u = Br, i = jr, c = qr, s = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (s = e.formState)), l = gd(
      t,
      1,
      !0,
      l,
      e ?? null,
      a,
      n,
      s,
      u,
      i,
      c,
      Md
    ), l.context = Sd(null), e = l.current, a = _l(), a = ni(a), n = be(a), n.callback = null, pe(e, n, a), e = a, l.current.lanes = e, Ja(l, e), Vl(l), t[ua] = l.current, $c(t), new ti(l);
  }, Yn.version = "19.2.8", Yn;
}
var Gd;
function U0() {
  if (Gd) return Sf.exports;
  Gd = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (p) {
        console.error(p);
      }
  }
  return f(), Sf.exports = M0(), Sf.exports;
}
var N0 = U0();
const Of = "hana.plugin.ui", Mf = 1, R0 = "X-Hana-Plugin-Surface-Session", x0 = "pluginSurfaceSession", $d = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, ea = {
  TOAST_SHOW: "toast.show",
  EXTERNAL_OPEN: "external.open",
  RESOURCE_OPEN: "resource.open",
  RESOURCE_PICK: "resource.pick",
  RESOURCE_REQUEST_ACCESS: "resource.requestAccess",
  UI_RESIZE: "ui.resize",
  CLIPBOARD_WRITE_TEXT: "clipboard.writeText"
}, C0 = /* @__PURE__ */ new Set([
  "event",
  "request",
  "response",
  "error"
]);
function Xd(f) {
  return typeof f == "object" && f !== null;
}
function je(f) {
  return {
    ok: !1,
    error: {
      code: $d.BAD_MESSAGE,
      message: f
    }
  };
}
function Qd(f) {
  if (!Xd(f))
    return je("Plugin UI messages must be objects.");
  if (f.protocol !== Of)
    return je("Plugin UI message protocol is missing or invalid.");
  if (f.version !== Mf)
    return {
      ok: !1,
      error: {
        code: $d.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(f.version)}.`
      }
    };
  if (typeof f.kind != "string" || !C0.has(f.kind))
    return je("Plugin UI message kind is missing or invalid.");
  if (typeof f.type != "string" || f.type.trim() === "")
    return je("Plugin UI message type must be a non-empty string.");
  const p = f.kind;
  if (p !== "event" && (typeof f.id != "string" || f.id.trim() === ""))
    return je(`Plugin UI ${p} messages must include a non-empty id.`);
  if (p === "error") {
    if (!Xd(f.error))
      return je("Plugin UI error messages must include an error object.");
    if (typeof f.error.code != "string" || f.error.code.trim() === "")
      return je("Plugin UI error code must be a non-empty string.");
    if (typeof f.error.message != "string" || f.error.message.trim() === "")
      return je("Plugin UI error message must be a non-empty string.");
  }
  return {
    ok: !0,
    value: f
  };
}
class Ld extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(p) {
    super(p.message), this.code = p.code, this.details = p.details;
  }
}
let Zd = 0;
function H0() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (Zd += 1, `hana-plugin-${Date.now()}-${Zd}`);
}
function B0() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
function j0(f) {
  if (!f)
    return null;
  try {
    return new URL(f).origin;
  } catch {
    return null;
  }
}
function q0(f, p) {
  if (p)
    return p;
  const M = new URLSearchParams(f.location.search).get("hana-host-origin");
  return M || (j0(f.document.referrer) ?? "*");
}
function Y0(f) {
  const p = new URLSearchParams(f.location.search);
  return {
    theme: p.get("hana-theme") ?? void 0,
    cssUrl: p.get("hana-css") ?? void 0
  };
}
function Vd(f, p, M) {
  return !(f.source !== p || M !== "*" && f.origin !== M);
}
function G0(f) {
  return typeof f == "string" ? { url: f } : f;
}
function X0(f) {
  return typeof f == "string" ? { text: f } : f;
}
function Fd(f) {
  const p = /^\/api\/plugins\/([^/]+)(?:\/|$)/.exec(f.location.pathname || "");
  if (!p)
    throw new Error("Plugin asset URL helper requires an iframe route under /api/plugins/:pluginId/.");
  try {
    return decodeURIComponent(p[1]);
  } catch {
    throw new Error("Plugin asset URL helper could not decode the current plugin id.");
  }
}
function Q0(f) {
  if (typeof f != "string" || f.length === 0)
    throw new Error("Invalid plugin asset path.");
  if (f.includes("\\") || f.includes("\0") || /^[a-z][a-z0-9+.-]*:/i.test(f))
    throw new Error("Invalid plugin asset path.");
  const p = f.replace(/^\/+/, "");
  if (!p || p.startsWith("./"))
    throw new Error("Invalid plugin asset path.");
  const M = p.split("/");
  if (M.some((r) => !r || r === "." || r === ".." || r.startsWith(".")))
    throw new Error("Invalid plugin asset path.");
  return M.map((r) => encodeURIComponent(r)).join("/");
}
function L0(f, p) {
  const M = Fd(f), r = Q0(p);
  return `${f.location.origin}/api/plugins/${encodeURIComponent(M)}/assets/${r}`;
}
function Z0(f) {
  return new URLSearchParams(f.location.search).get(x0) || null;
}
function V0(f) {
  if (typeof f != "string" || f.length === 0)
    throw new Error("Invalid plugin API path.");
  const p = f.trim();
  if (!p || p.includes("\\") || p.includes("\0") || p.includes("#") || p.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(p))
    throw new Error("Invalid plugin API path.");
  const M = p.replace(/^\/+/, "");
  if (!M || M.startsWith("./") || M === "api/plugins" || M.startsWith("api/plugins/"))
    throw new Error("Invalid plugin API path. Use a route path relative to the current plugin.");
  const r = M.indexOf("?"), X = r >= 0 ? M.slice(0, r) : M;
  if (!X)
    throw new Error("Invalid plugin API path.");
  const q = X.split("/");
  for (const O of q) {
    if (!O)
      throw new Error("Invalid plugin API path.");
    let g;
    try {
      g = decodeURIComponent(O);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (g === "." || g === ".." || g.includes("/") || g.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const Q = new URL(`http://hana.local/${M}`);
  return `${q.map((O) => encodeURIComponent(decodeURIComponent(O))).join("/")}${Q.search}`;
}
function Wd(f, p) {
  const M = Fd(f), r = V0(p);
  return `${f.location.origin}/api/plugins/${encodeURIComponent(M)}/${r}`;
}
function K0(f, p, M) {
  const r = Z0(f);
  if (!r)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const X = f.fetch?.bind(f) ?? globalThis.fetch?.bind(globalThis);
  if (!X)
    throw new Error("hana.api.fetch requires window.fetch.");
  const q = M ?? {}, Q = new Headers(q.headers);
  return Q.set(R0, r), X(Wd(f, p), {
    ...q,
    headers: Q
  });
}
function J0(f = {}) {
  const p = f.targetWindow ?? B0(), M = f.parentWindow ?? p.parent, r = q0(p, f.targetOrigin), X = f.requestTimeoutMs ?? 1e4, q = f.idFactory ?? H0;
  let Q = Y0(p);
  const G = /* @__PURE__ */ new Set();
  function O(C) {
    M.postMessage(C, r);
  }
  function g(C, $) {
    const mt = {
      protocol: Of,
      version: Mf,
      kind: "event",
      type: C
    };
    $ !== void 0 && (mt.payload = $), O(mt);
  }
  function K(C) {
    if (!Vd(C, M, r))
      return;
    const $ = Qd(C.data);
    if (!$.ok)
      return;
    const mt = $.value;
    if (mt.kind !== "event" || mt.type !== "hana.theme.changed" || typeof mt.payload != "object" || mt.payload === null)
      return;
    const ft = mt.payload;
    Q = {
      theme: typeof ft.theme == "string" ? ft.theme : Q.theme,
      cssUrl: typeof ft.cssUrl == "string" ? ft.cssUrl : Q.cssUrl
    };
    for (const Ot of G)
      Ot(Q);
  }
  function x(C, $, mt = {}) {
    const ft = q(), Ot = mt.timeoutMs ?? X;
    return new Promise((ht, Ct) => {
      const pt = () => {
        p.removeEventListener("message", Kt), p.clearTimeout($t);
      }, Kt = (I) => {
        if (!Vd(I, M, r))
          return;
        const Zt = Qd(I.data);
        if (!Zt.ok)
          return;
        const Ht = Zt.value;
        Ht.id !== ft || Ht.type !== C || (Ht.kind === "response" && (pt(), ht(Ht.payload)), Ht.kind === "error" && Ht.error && (pt(), Ct(new Ld(Ht.error))));
      }, $t = p.setTimeout(() => {
        pt(), Ct(new Ld({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${C}.`
        }));
      }, Ot);
      p.addEventListener("message", Kt);
      const Lt = {
        protocol: Of,
        version: Mf,
        id: ft,
        kind: "request",
        type: C
      };
      $ !== void 0 && (Lt.payload = $), O(Lt);
    });
  }
  return {
    ready(C) {
      g("hana.ready", C);
    },
    assets: {
      url(C) {
        return L0(p, C);
      }
    },
    api: {
      url(C) {
        return Wd(p, C);
      },
      fetch(C, $) {
        return K0(p, C, $);
      }
    },
    ui: {
      resize(C) {
        g(ea.UI_RESIZE, C);
      }
    },
    theme: {
      getSnapshot() {
        return { ...Q };
      },
      subscribe(C) {
        return G.size === 0 && p.addEventListener("message", K), G.add(C), C({ ...Q }), () => {
          G.delete(C), G.size === 0 && p.removeEventListener("message", K);
        };
      }
    },
    host: {
      request: x
    },
    toast: {
      show(C, $) {
        return x(ea.TOAST_SHOW, C, $);
      }
    },
    external: {
      open(C, $) {
        return x(ea.EXTERNAL_OPEN, G0(C), $);
      }
    },
    clipboard: {
      writeText(C, $) {
        return x(ea.CLIPBOARD_WRITE_TEXT, X0(C), $);
      }
    },
    resources: {
      open(C, $) {
        return x(ea.RESOURCE_OPEN, C, $);
      },
      pick(C = {}, $) {
        return x(ea.RESOURCE_PICK, C, $);
      },
      requestAccess(C, $) {
        return x(ea.RESOURCE_REQUEST_ACCESS, C, $);
      }
    }
  };
}
let Kd = null;
function hl() {
  return Kd ??= J0(), Kd;
}
const vt = {
  ready(f) {
    return hl().ready(f);
  },
  assets: {
    url(f) {
      return hl().assets.url(f);
    }
  },
  api: {
    url(f) {
      return hl().api.url(f);
    },
    fetch(f, p) {
      return hl().api.fetch(f, p);
    }
  },
  ui: {
    resize(f) {
      return hl().ui.resize(f);
    }
  },
  theme: {
    getSnapshot() {
      return hl().theme.getSnapshot();
    },
    subscribe(f) {
      return hl().theme.subscribe(f);
    }
  },
  host: {
    request(f, p, M) {
      return hl().host.request(f, p, M);
    }
  },
  toast: {
    show(f, p) {
      return hl().toast.show(f, p);
    }
  },
  external: {
    open(f, p) {
      return hl().external.open(f, p);
    }
  },
  clipboard: {
    writeText(f, p) {
      return hl().clipboard.writeText(f, p);
    }
  },
  resources: {
    open(f, p) {
      return hl().resources.open(f, p);
    },
    pick(f, p) {
      return hl().resources.pick(f, p);
    },
    requestAccess(f, p) {
      return hl().resources.requestAccess(f, p);
    }
  }
};
function Kl(...f) {
  return f.filter(Boolean).join(" ");
}
const Jd = {
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
}, w0 = {
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
function k0({ mode: f = "inherit", theme: p, className: M, style: r, children: X, "data-testid": q = "hana-plugin-theme", ...Q }) {
  const G = typeof p == "string" ? p : void 0, O = $0(f, p);
  return N.jsx("div", { ...Q, "data-testid": q, className: Kl("hana-plugin-theme", M), "data-hana-theme-mode": f, "data-hana-theme": f === "hana" ? G : void 0, style: { ...O, ...r }, children: X });
}
function $0(f, p) {
  if (f === "inherit")
    return {};
  const M = F0(f, p), r = {};
  for (const [X, q] of Object.entries(w0)) {
    const Q = M?.[X];
    Q && (r[q] = Q);
  }
  return r;
}
function F0(f, p) {
  if (typeof p == "string")
    return Jd[p];
  if (p)
    return p;
  if (f === "hana")
    return Jd["warm-paper"];
}
const Za = et.forwardRef(function({ variant: p = "secondary", size: M = "md", loading: r = !1, iconLeft: X, iconRight: q, disabled: Q, className: G, children: O, type: g = "button", ...K }, x) {
  return N.jsxs("button", { ...K, ref: x, type: g, disabled: Q || r, className: Kl("hana-plugin-button", `hana-plugin-button-${p}`, `hana-plugin-button-${M}`, r && "hana-plugin-button-loading", G), children: [r ? N.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : X, O && N.jsx("span", { className: "hana-plugin-button-label", children: O }), !r && q] });
});
et.forwardRef(function({ label: p, size: M = "md", variant: r = "ghost", className: X, children: q, type: Q = "button", ...G }, O) {
  return N.jsx("button", { ...G, ref: O, type: Q, "aria-label": p, title: G.title || p, className: Kl("hana-plugin-icon-button", `hana-plugin-icon-button-${M}`, `hana-plugin-icon-button-${r}`, X), children: q });
});
const Tf = et.forwardRef(function({ label: p, hint: M, error: r, id: X, className: q, inputClassName: Q, ...G }, O) {
  const g = et.useId(), K = X || g;
  return N.jsx(Id, { label: p, hint: M, error: r, htmlFor: K, className: q, children: N.jsx("input", { ...G, ref: O, id: K, "aria-invalid": !!r, className: Kl("hana-plugin-input", Q) }) });
}), W0 = et.forwardRef(function({ label: p, hint: M, error: r, id: X, className: q, textareaClassName: Q, rows: G = 4, ...O }, g) {
  const K = et.useId(), x = X || K;
  return N.jsx(Id, { label: p, hint: M, error: r, htmlFor: x, className: q, children: N.jsx("textarea", { ...O, ref: g, id: x, rows: G, "aria-invalid": !!r, className: Kl("hana-plugin-textarea", Q) }) });
});
et.forwardRef(function({ checked: p, onChange: M, label: r, disabled: X, className: q, onClick: Q, type: G = "button", ...O }, g) {
  const K = typeof r == "string" ? r : O["aria-label"];
  return N.jsxs("span", { className: Kl("hana-plugin-switch-wrap", q), children: [N.jsx("button", { ...O, ref: g, type: G, role: "switch", "aria-checked": p, "aria-label": K, disabled: X, className: Kl("hana-plugin-switch", p && "hana-plugin-switch-on"), onClick: (x) => {
    Q?.(x), !x.defaultPrevented && !X && M?.(!p);
  }, children: N.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), r && N.jsx("span", { className: "hana-plugin-switch-label", children: r })] });
});
function Id({ label: f, hint: p, error: M, htmlFor: r, className: X, children: q }) {
  return N.jsxs("div", { className: Kl("hana-plugin-field", X), children: [f && N.jsx("label", { className: "hana-plugin-field-label", htmlFor: r, children: f }), p && N.jsx("div", { className: "hana-plugin-field-hint", children: p }), q, M && N.jsx("div", { className: "hana-plugin-field-error", children: M })] });
}
function I0({ title: f, description: p, actions: M, footer: r, children: X, className: q, ...Q }) {
  return N.jsxs("section", { ...Q, className: Kl("hana-plugin-card", q), children: [(f || p || M) && N.jsxs("header", { className: "hana-plugin-card-header", children: [N.jsxs("div", { className: "hana-plugin-card-heading", children: [f && N.jsx("h2", { className: "hana-plugin-card-title", children: f }), p && N.jsx("p", { className: "hana-plugin-card-description", children: p })] }), M && N.jsx("div", { className: "hana-plugin-card-actions", children: M })] }), N.jsx("div", { className: "hana-plugin-card-body", children: X }), r && N.jsx("footer", { className: "hana-plugin-card-footer", children: r })] });
}
function Af({ icon: f, title: p, description: M, action: r, className: X, ...q }) {
  return N.jsxs("div", { ...q, className: Kl("hana-plugin-empty", X), children: [f && N.jsx("div", { className: "hana-plugin-empty-icon", children: f }), N.jsx("div", { className: "hana-plugin-empty-title", children: p }), M && N.jsx("div", { className: "hana-plugin-empty-description", children: M }), r && N.jsx("div", { className: "hana-plugin-empty-action", children: r })] });
}
function P0({ text: f }) {
  return /* @__PURE__ */ N.jsxs("span", { className: "ps-help", role: "button", tabIndex: 0, "aria-label": "使用提示", children: [
    /* @__PURE__ */ N.jsx("span", { className: "ps-help-icon", children: "?" }),
    /* @__PURE__ */ N.jsx("span", { className: "ps-help-pop", role: "tooltip", children: f })
  ] });
}
const zf = {
  dataDir: null,
  indexHealthy: !1,
  warning: null,
  degraded: null,
  directories: []
};
function aa(f) {
  return `${f.dir}/${f.filename}`;
}
function _f(f) {
  const p = f ?? "", M = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/.exec(p);
  return M ? p.slice(M[0].length) : p;
}
function ei(f, p) {
  const M = (f ?? "").replace(/[\\/]+$/, "");
  return p ? `${M}/${p}` : M;
}
function wd(f) {
  const p = f.replace(/\\/g, "/");
  return p.startsWith("/") ? `file://${p}` : `file:///${p}`;
}
const ty = 16, ly = 250, ey = [
  { key: "edit", label: "编辑" },
  { key: "copy", label: "复制" },
  { key: "send", label: "发送给当前 Agent" },
  { key: "open-default", label: "用默认应用打开" },
  { key: "copy-path", label: "复制路径" },
  // 截图分享：宿主无对应能力（见 Task 6 报告 §2），置灰 + toast
  { key: "screenshot", label: "截图分享", disabled: !0 },
  { key: "delete", label: "删除", danger: !0, separatorBefore: !0 },
  { key: "rename", label: "重命名" }
], ay = [
  { key: "create-dir", label: "新建目录" },
  { key: "create-prompt", label: "新建卡片" },
  { key: "copy-path", label: "复制路径" },
  { key: "delete-dir", label: "删除目录", danger: !0, separatorBefore: !0 },
  { key: "rename-dir", label: "重命名" }
], ny = [
  { key: "create-dir", label: "新建目录" },
  { key: "create-prompt", label: "新建卡片" }
];
function uy({
  menu: f,
  items: p,
  onSelect: M,
  onClose: r
}) {
  const X = et.useRef(null), [q, Q] = et.useState(null);
  return et.useEffect(() => {
    if (!f) {
      Q(null);
      return;
    }
    const G = X.current;
    if (!G) return;
    const O = 8, g = window.innerWidth, K = window.innerHeight;
    let x = f.x, C = f.y;
    C + G.offsetHeight + O > K && (C = K - G.offsetHeight - O), x + G.offsetWidth + O > g && (x = g - G.offsetWidth - O), Q({ left: Math.max(O, x), top: Math.max(O, C) });
  }, [f]), et.useEffect(() => {
    if (!f) return;
    function G(x) {
      X.current && !X.current.contains(x.target) && r();
    }
    function O(x) {
      x.key === "Escape" && r();
    }
    function g() {
      r();
    }
    function K(x) {
      X.current && !X.current.contains(x.target) && r();
    }
    return window.addEventListener("pointerdown", G), window.addEventListener("keydown", O), window.addEventListener("scroll", g, !0), window.addEventListener("contextmenu", K), () => {
      window.removeEventListener("pointerdown", G), window.removeEventListener("keydown", O), window.removeEventListener("scroll", g, !0), window.removeEventListener("contextmenu", K);
    };
  }, [f, r]), f ? /* @__PURE__ */ N.jsx(
    "div",
    {
      ref: X,
      className: "ps-menu",
      style: q ? { left: q.left, top: q.top } : { left: -9999, top: -9999 },
      role: "menu",
      children: p.map((G) => /* @__PURE__ */ N.jsxs(et.Fragment, { children: [
        G.separatorBefore && /* @__PURE__ */ N.jsx("div", { className: "ps-menu-sep" }),
        /* @__PURE__ */ N.jsx(
          "button",
          {
            type: "button",
            role: "menuitem",
            "aria-disabled": G.disabled || void 0,
            className: `ps-menu-item${G.danger ? " ps-menu-item-danger" : ""}${G.disabled ? " ps-menu-item-disabled" : ""}`,
            onClick: () => {
              r(), M(G.key);
            },
            children: G.label
          }
        )
      ] }, G.key))
    }
  ) : null;
}
const iy = {
  "create-dir": "目录已创建",
  "create-prompt": "词条已创建",
  "rename-entry": "已重命名",
  "rename-dir": "目录已重命名",
  "confirm-delete-entry": "词条已删除",
  "confirm-delete-dir": "目录已删除"
};
function Df({
  form: f,
  submit: p,
  done: M
}) {
  const r = f.kind === "confirm-delete-entry" || f.kind === "confirm-delete-dir", X = f.kind === "rename-entry" ? f.entry.title : f.kind === "rename-dir" ? f.dirName : "", [q, Q] = et.useState(X), [G, O] = et.useState(""), [g, K] = et.useState(!1), [x, C] = et.useState(null), $ = et.useRef(null);
  et.useEffect(() => {
    $.current?.focus();
  }, []);
  async function mt(ht) {
    K(!0), C(null);
    const Ct = await p(ht);
    K(!1), Ct.ok ? (vt.toast.show({ message: iy[f.kind], type: "success" }), M()) : C(Ct.error || "操作失败");
  }
  function ft() {
    switch (f.kind) {
      case "create-dir":
        return { type: "create-dir", name: q.trim() };
      case "create-prompt":
        return { type: "create-prompt", directory: f.dirName, name: q.trim(), content: G };
      case "rename-entry":
        return { type: "rename-prompt", path: aa(f.entry), newName: q.trim() };
      case "rename-dir":
        return { type: "rename-dir", name: f.dirName, newName: q.trim() };
      case "confirm-delete-entry":
        return { type: "delete-prompt", path: aa(f.entry) };
      case "confirm-delete-dir":
        return { type: "delete-dir", name: f.dirName };
    }
  }
  const Ot = r || q.trim().length > 0;
  return /* @__PURE__ */ N.jsxs("div", { className: "ps-inline", children: [
    f.kind === "create-prompt" && /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsx(
        Tf,
        {
          label: "标题",
          placeholder: "词条标题（自动生成 frontmatter）",
          value: q,
          ref: $,
          onChange: (ht) => Q(ht.target.value)
        }
      ),
      /* @__PURE__ */ N.jsx(
        W0,
        {
          label: "内容",
          placeholder: "正文内容",
          className: "ps-inline-textarea",
          value: G,
          onChange: (ht) => O(ht.target.value)
        }
      )
    ] }),
    f.kind === "create-dir" && /* @__PURE__ */ N.jsx(
      Tf,
      {
        label: "新目录名",
        placeholder: "输入目录名",
        value: q,
        ref: $,
        onChange: (ht) => Q(ht.target.value)
      }
    ),
    (f.kind === "rename-entry" || f.kind === "rename-dir") && /* @__PURE__ */ N.jsx(
      Tf,
      {
        label: f.kind === "rename-entry" ? "新名称" : "新目录名",
        value: q,
        ref: $,
        onChange: (ht) => Q(ht.target.value)
      }
    ),
    f.kind === "confirm-delete-entry" && /* @__PURE__ */ N.jsxs("div", { className: "ps-inline-hint", children: [
      "删除词条「",
      f.entry.title,
      "」？此操作不可撤销。"
    ] }),
    f.kind === "confirm-delete-dir" && /* @__PURE__ */ N.jsxs("div", { className: "ps-inline-hint", children: [
      "确认删除目录「",
      f.dirName,
      "」？将删除其中的所有词条，此操作不可撤销。"
    ] }),
    x && /* @__PURE__ */ N.jsx("div", { className: "ps-inline-error", children: x }),
    /* @__PURE__ */ N.jsx("div", { className: "ps-inline-row", children: r ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsx(Za, { size: "sm", variant: "danger", onClick: M, children: "取消" }),
      /* @__PURE__ */ N.jsx(Za, { size: "sm", variant: "ghost", loading: g, onClick: () => mt(ft()), children: "确认删除" })
    ] }) : /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsx(
        Za,
        {
          size: "sm",
          variant: "primary",
          loading: g,
          disabled: !Ot,
          onClick: () => mt(ft()),
          children: "确定"
        }
      ),
      /* @__PURE__ */ N.jsx(Za, { size: "sm", variant: "ghost", onClick: M, children: "取消" })
    ] }) })
  ] });
}
function cy({
  state: f,
  rebuilding: p,
  onRebuild: M
}) {
  const { dataDir: r, indexHealthy: X, warning: q, degraded: Q } = f, G = !!r && X === !1, O = !!r && !G && !!q, g = !!Q;
  return !G && !O && !g ? null : /* @__PURE__ */ N.jsxs("div", { className: "ps-alerts", children: [
    G && /* @__PURE__ */ N.jsxs("div", { className: "ps-alert ps-alert-warn", children: [
      /* @__PURE__ */ N.jsx("span", { className: "ps-alert-text", children: "排序索引损坏，已恢复默认顺序" }),
      /* @__PURE__ */ N.jsx(Za, { size: "sm", variant: "secondary", loading: p, onClick: M, children: "重建索引" })
    ] }),
    O && /* @__PURE__ */ N.jsx("div", { className: "ps-alert ps-alert-warn", children: q }),
    g && /* @__PURE__ */ N.jsx("div", { className: "ps-alert ps-alert-degraded", children: "写入已降级为备份+直写模式" })
  ] });
}
function fy() {
  const [f, p] = et.useState(null), [M, r] = et.useState(/* @__PURE__ */ new Set()), [X, q] = et.useState(/* @__PURE__ */ new Set()), [Q, G] = et.useState(null), [O, g] = et.useState(null), [K, x] = et.useState(!1), [C, $] = et.useState(null), [mt, ft] = et.useState(null), Ot = et.useRef(null), ht = et.useRef(null), Ct = et.useRef(!1), pt = et.useRef(null), Kt = et.useRef(!1);
  async function $t() {
    const S = await J({ type: "rescan" });
    if (!S.ok) {
      p({ ...zf, warning: S.error || "刷新失败" });
      return;
    }
    if (S.state) {
      const R = { ...zf, ...S.state };
      !Kt.current && R.directories.length && (Kt.current = !0, r(new Set(R.directories.map((D) => D.name)))), vt.ui.resize({ height: 9999 });
    }
  }
  et.useEffect(() => {
    vt.ready(), vt.ui.resize({ height: 9999 }), $t();
  }, []);
  function Lt(S) {
    const R = S.trim(), D = R.match(/^#([0-9a-f]{6})$/i);
    if (D) {
      const F = parseInt(D[1], 16);
      return [F >> 16 & 255, F >> 8 & 255, F & 255];
    }
    const U = R.match(/^#([0-9a-f]{3})$/i);
    if (U) {
      const F = U[1];
      return [parseInt(F[0] + F[0], 16), parseInt(F[1] + F[1], 16), parseInt(F[2] + F[2], 16)];
    }
    const V = R.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)/);
    return V ? [Number(V[1]), Number(V[2]), Number(V[3])] : null;
  }
  function I(S, R, D) {
    const U = R === "black" ? 0 : 255, V = (F) => Math.round(F + (U - F) * D);
    return `rgb(${V(S[0])}, ${V(S[1])}, ${V(S[2])})`;
  }
  et.useEffect(() => {
    const S = [
      document.querySelector(".plugin-panel"),
      document.body,
      document.documentElement
    ].filter(Boolean);
    let R = "";
    for (const U of S) {
      const V = getComputedStyle(U).getPropertyValue("--hana-plugin-bg").trim();
      if (V) {
        R = V;
        break;
      }
    }
    const D = Lt(R || "#F8F5ED");
    if (D) {
      const V = (0.299 * D[0] + 0.587 * D[1] + 0.114 * D[2]) / 255 > 0.5 ? "black" : "white", F = document.documentElement;
      F.style.setProperty("--ps-help-color", I(D, V, 0.15)), F.style.setProperty("--ps-scroll-thumb", I(D, V, 0.1)), F.style.setProperty("--ps-scroll-thumb-hover", I(D, V, 0.2));
    }
  }, []), et.useEffect(() => {
    let S;
    function R(D) {
      let U = D.target;
      (!U || U === document) && (U = document.scrollingElement || document.documentElement), U instanceof Element && (S && window.clearTimeout(S), document.querySelectorAll(".ps-scrolling").forEach((V) => V.classList.remove("ps-scrolling")), U.classList.add("ps-scrolling"), S = window.setTimeout(() => U.classList.remove("ps-scrolling"), 1e3));
    }
    return document.addEventListener("scroll", R, !0), () => {
      document.removeEventListener("scroll", R, !0), S && window.clearTimeout(S);
    };
  }, []), et.useEffect(() => {
    function S() {
      document.hidden || $t();
    }
    return document.addEventListener("visibilitychange", S), window.addEventListener("focus", S), () => {
      document.removeEventListener("visibilitychange", S), window.removeEventListener("focus", S);
    };
  }, []), et.useEffect(() => {
    function S() {
      j();
    }
    return window.addEventListener("dragend", S), () => window.removeEventListener("dragend", S);
  }, []);
  function Zt(S) {
    r((R) => {
      const D = new Set(R);
      return D.has(S) ? D.delete(S) : D.add(S), D;
    }), $t();
  }
  function Ht(S) {
    q((R) => {
      const D = new Set(R);
      return D.has(S) ? D.delete(S) : D.add(S), D;
    }), $t();
  }
  const el = et.useRef(null);
  function yl(S) {
    el.current !== null && window.clearTimeout(el.current), el.current = window.setTimeout(() => {
      el.current = null, Ht(S);
    }, ly);
  }
  function Jt(S) {
    el.current !== null && (window.clearTimeout(el.current), el.current = null), vt.clipboard.writeText(_f(S.content)), vt.toast.show({ message: "已复制", type: "success" });
  }
  et.useEffect(() => () => {
    el.current !== null && window.clearTimeout(el.current);
  }, []);
  function Xl(S, R) {
    S.dataTransfer.effectAllowed = "move";
    const D = ei(f?.dataDir ?? null, aa(R));
    try {
      S.dataTransfer.setData("text/plain", D), S.dataTransfer.setData("text/uri-list", wd(D));
    } catch {
    }
    const U = { kind: "entry", dir: R.dir, filename: R.filename, path: D };
    Ot.current = U, $(U), ft(null), Ct.current = !1, pt.current = { x: S.clientX, y: S.clientY };
    const V = f?.directories.find((F) => F.name === R.dir)?.entries;
    ht.current = V ? { kind: "entry", dir: R.dir, entries: [...V] } : null, G(null);
  }
  function jl(S, R) {
    S.dataTransfer.effectAllowed = "move";
    const D = ei(f?.dataDir ?? null, R);
    try {
      S.dataTransfer.setData("text/plain", D), S.dataTransfer.setData("text/uri-list", wd(D));
    } catch {
    }
    const U = { kind: "dir", name: R, path: D };
    Ot.current = U, $(U), ft(null), Ct.current = !1, pt.current = { x: S.clientX, y: S.clientY }, ht.current = { kind: "dir", dirs: f?.directories ? [...f.directories] : [] }, G(null);
  }
  function il(S, R, D) {
    if (D === R || D === R + 1) return null;
    const U = [...S], [V] = U.splice(R, 1);
    return U.splice(D > R ? D - 1 : D, 0, V), U;
  }
  function T(S, R) {
    p(
      (D) => D && {
        ...D,
        directories: D.directories.map((U) => U.name === S ? { ...U, entries: R } : U)
      }
    );
  }
  function H(S, R) {
    pt.current = { x: S.clientX, y: S.clientY };
    const D = Ot.current;
    if (!D || D.kind !== "entry" || D.dir !== R.dir) return;
    S.preventDefault(), S.dataTransfer.dropEffect = "move";
    const U = f?.directories.find((Ft) => Ft.name === R.dir)?.entries;
    if (!U) return;
    const V = U.findIndex((Ft) => Ft.filename === D.filename), F = U.findIndex((Ft) => Ft.filename === R.filename);
    if (V === -1 || F === -1) return;
    const nl = S.currentTarget.getBoundingClientRect(), Nt = S.clientY < nl.top + nl.height / 2, Jl = il(U, V, Nt ? F : F + 1);
    Jl && T(R.dir, Jl);
  }
  function w(S, R) {
    const D = Ot.current;
    if (!D || D.kind !== "entry" || D.dir !== R.dir) return;
    S.preventDefault(), Ct.current = !0;
    const U = f?.directories.find((F) => F.name === R.dir)?.entries;
    if (!U) return;
    const V = U.map((F) => F.filename);
    (async () => {
      const F = await J({ type: "reorder", dirName: R.dir, items: V });
      F.ok || (z(), vt.toast.show({ message: F.error || "排序保存失败", type: "error" }));
    })();
  }
  function yt(S, R) {
    pt.current = { x: S.clientX, y: S.clientY };
    const D = Ot.current;
    if (D)
      if (D.kind === "dir") {
        S.preventDefault(), S.dataTransfer.dropEffect = "move";
        const U = f?.directories ?? [], V = U.findIndex((Ft) => Ft.name === D.name), F = U.findIndex((Ft) => Ft.name === R);
        if (V === -1 || F === -1) return;
        const nl = S.currentTarget.getBoundingClientRect(), Nt = S.clientY < nl.top + nl.height / 2, Jl = il(U, V, Nt ? F : F + 1);
        Jl && p((Ft) => Ft && { ...Ft, directories: Jl });
      } else D.kind === "entry" && D.dir !== R && (S.preventDefault(), S.dataTransfer.dropEffect = "move", ft(R));
  }
  function gt(S) {
    const R = S.relatedTarget;
    if (R && S.currentTarget.contains(R)) return;
    const D = S.currentTarget.dataset.dirname;
    ft((U) => U === D ? null : U);
  }
  function d(S, R) {
    const D = Ot.current;
    if (D) {
      if (S.preventDefault(), Ct.current = !0, ft(null), D.kind === "dir") {
        const U = (f?.directories ?? []).map((V) => V.name);
        (async () => {
          const V = await J({ type: "reorder", dirName: null, items: U });
          V.ok || (z(), vt.toast.show({ message: V.error || "排序保存失败", type: "error" }));
        })();
      } else if (D.kind === "entry" && D.dir !== R) {
        const U = `${D.dir}/${D.filename}`;
        (async () => {
          const V = await J({ type: "move-prompt", path: U, targetDir: R });
          V.ok ? B(U, `${R}/${D.filename}`) : (z(), vt.toast.show({ message: V.error || "移动失败", type: "error" }));
        })();
      }
    }
  }
  function z() {
    const S = ht.current;
    S && (ht.current = null, p((R) => R && (S.kind === "entry" ? {
      ...R,
      directories: R.directories.map(
        (D) => D.name === S.dir ? { ...D, entries: S.entries } : D
      )
    } : { ...R, directories: S.dirs })));
  }
  function B(S, R) {
    q((D) => {
      if (!D.has(S)) return D;
      const U = new Set(D);
      return U.delete(S), U.add(R), U;
    });
  }
  function j() {
    const S = Ot.current;
    if (!S) return;
    const R = Ct.current, D = pt.current;
    !R && D && D.x <= ty && D.y >= 0 && D.y <= window.innerHeight && (vt.clipboard.writeText(S.path), vt.toast.show({ message: "已复制路径（宿主暂不支持跨 iframe 拖放），粘贴发送给 Agent", type: "info" })), R || z(), Ot.current = null, $(null), ft(null), Ct.current = !1, pt.current = null;
  }
  async function J(S) {
    try {
      const D = await (await vt.api.fetch("api/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(S)
      })).json();
      return D.state && p({ ...zf, ...D.state }), { ok: D.ok === !0, error: D.error, state: D.state };
    } catch {
      return { ok: !1, error: "请求失败，请重载插件后重试" };
    }
  }
  async function lt() {
    x(!0);
    const S = await J({ type: "rebuild" });
    x(!1), S.ok || vt.toast.show({ message: S.error || "重建索引失败", type: "error" });
  }
  async function st() {
    let S;
    try {
      S = await vt.resources.pick({ mode: "directory", multiple: !1 });
    } catch {
      vt.toast.show({ message: "选择目录失败", type: "error" });
      return;
    }
    const R = S?.resources?.[0];
    if (!R?.path) return;
    const D = await J({ type: "init", dataDir: R.path });
    D.ok || vt.toast.show({ message: D.error || "初始化失败", type: "error" });
  }
  function Bt(S, R, D, U) {
    S.preventDefault(), S.stopPropagation(), g(null), G({ x: S.clientX, y: S.clientY, kind: R, entry: D, dirName: U });
  }
  async function Ut(S) {
    if (!Q) return;
    const { kind: R, entry: D, dirName: U } = Q, V = f?.dataDir ?? null;
    if (R === "entry" && D) {
      const F = ei(V, aa(D));
      switch (S) {
        case "edit":
          try {
            await vt.resources.open({ resource: { kind: "local-file", path: F }, mode: "edit" });
          } catch {
            try {
              await vt.resources.open({ resource: { kind: "local-file", path: F }, mode: "preview" });
            } catch {
              vt.toast.show({ message: "无法打开文件", type: "error" });
            }
          }
          break;
        case "copy":
          await vt.clipboard.writeText(_f(D.content)), vt.toast.show({ message: "已复制正文", type: "success" });
          break;
        case "send": {
          const nl = await J({ type: "send-to-agent", path: aa(D) });
          vt.toast.show({
            message: nl.ok ? "已发送到当前会话" : nl.error || "发送失败",
            type: nl.ok ? "success" : "error"
          });
          break;
        }
        case "open-default":
          try {
            await vt.resources.open({ resource: { kind: "local-file", path: F }, mode: "preview" });
          } catch {
            vt.toast.show({ message: "无法打开文件", type: "error" });
          }
          break;
        case "copy-path":
          await vt.clipboard.writeText(F), vt.toast.show({ message: "已复制路径", type: "success" });
          break;
        case "screenshot":
          vt.toast.show({ message: "暂不支持", type: "info" });
          break;
        case "delete":
          g({ kind: "confirm-delete-entry", entry: D });
          break;
        case "rename":
          g({ kind: "rename-entry", entry: D });
          break;
      }
      return;
    }
    if (R === "blank") {
      switch (S) {
        case "create-dir":
          g({ kind: "create-dir", anchorDir: void 0 });
          break;
        case "create-prompt":
          if (!f?.directories.length) {
            vt.toast.show({ message: "请先新建目录", type: "info" });
            break;
          }
          g({ kind: "create-prompt", dirName: f.directories[0].name });
          break;
      }
      return;
    }
    if (R === "dir" && U) {
      const F = ei(V, U);
      switch (S) {
        case "create-dir":
          g({ kind: "create-dir", anchorDir: U });
          break;
        case "create-prompt":
          g({ kind: "create-prompt", dirName: U });
          break;
        case "copy-path":
          await vt.clipboard.writeText(F), vt.toast.show({ message: "已复制路径", type: "success" });
          break;
        case "delete-dir":
          g({ kind: "confirm-delete-dir", dirName: U });
          break;
        case "rename-dir":
          g({ kind: "rename-dir", dirName: U });
          break;
      }
    }
  }
  function qe(S, R) {
    switch (S.kind) {
      case "create-dir":
        return S.anchorDir === R;
      case "create-prompt":
      case "rename-dir":
      case "confirm-delete-dir":
        return S.dirName === R;
      default:
        return !1;
    }
  }
  function na() {
    return f ? f.dataDir ? !f.directories.length && !O ? /* @__PURE__ */ N.jsx("div", { onContextMenu: (S) => Bt(S, "blank"), children: /* @__PURE__ */ N.jsx(
      Af,
      {
        title: "架子上还没有词条",
        description: "右键目录行可以新建卡片，或通过工具写入第一个提示词。"
      }
    ) }) : /* @__PURE__ */ N.jsxs(
      "div",
      {
        className: "ps-shelf",
        onContextMenu: (S) => Bt(S, "blank"),
        onDragOver: (S) => {
          pt.current = { x: S.clientX, y: S.clientY };
        },
        children: [
          O?.kind === "create-dir" && !O.anchorDir && /* @__PURE__ */ N.jsx(Df, { form: O, submit: J, done: () => g(null) }),
          f.directories.map((S) => {
            const R = M.has(S.name), D = O && qe(O, S.name) ? O : null;
            return /* @__PURE__ */ N.jsxs("section", { className: "ps-dir", children: [
              /* @__PURE__ */ N.jsxs(
                "button",
                {
                  type: "button",
                  className: `ps-dir-head${C?.kind === "dir" && C.name === S.name ? " ps-dragging" : ""}${C?.kind === "entry" && C.dir !== S.name && mt === S.name ? " ps-drop-target" : ""}`,
                  onClick: () => Zt(S.name),
                  onContextMenu: (U) => Bt(U, "dir", void 0, S.name),
                  onDragStart: (U) => jl(U, S.name),
                  onDragOver: (U) => yt(U, S.name),
                  onDragLeave: gt,
                  onDrop: (U) => d(U, S.name),
                  onDragEnd: j,
                  "data-dirname": S.name,
                  draggable: !0,
                  "aria-expanded": !R,
                  children: [
                    /* @__PURE__ */ N.jsx("span", { className: `ps-dir-arrow${R ? " ps-dir-arrow-collapsed" : ""}`, children: "▾" }),
                    /* @__PURE__ */ N.jsx("span", { className: "ps-dir-name", title: S.name, children: S.name }),
                    /* @__PURE__ */ N.jsx("span", { className: "ps-dir-count", children: S.entries.length })
                  ]
                }
              ),
              D && /* @__PURE__ */ N.jsx(Df, { form: D, submit: J, done: () => g(null) }),
              !R && /* @__PURE__ */ N.jsx("div", { className: "ps-pills", children: S.entries.map((U) => {
                const V = aa(U), F = X.has(V), nl = O && (O.kind === "rename-entry" || O.kind === "confirm-delete-entry") && aa(O.entry) === V ? O : null;
                return nl ? /* @__PURE__ */ N.jsx(Df, { form: nl, submit: J, done: () => g(null) }, V) : F ? /* @__PURE__ */ N.jsxs("div", { className: "ps-card", children: [
                  /* @__PURE__ */ N.jsx(
                    "button",
                    {
                      type: "button",
                      className: `ps-card-head${C?.kind === "entry" && C.dir === S.name && C.filename === U.filename ? " ps-dragging" : ""}`,
                      onClick: () => yl(V),
                      onDoubleClick: () => Jt(U),
                      onContextMenu: (Nt) => Bt(Nt, "entry", U),
                      onDragStart: (Nt) => Xl(Nt, U),
                      onDragOver: (Nt) => H(Nt, U),
                      onDrop: (Nt) => w(Nt, U),
                      onDragEnd: j,
                      draggable: !0,
                      title: "点击收起",
                      children: /* @__PURE__ */ N.jsx("span", { className: "ps-card-title", children: U.title })
                    }
                  ),
                  /* @__PURE__ */ N.jsx("pre", { className: "ps-card-body", onDoubleClick: () => Jt(U), children: _f(U.content) }),
                  /* @__PURE__ */ N.jsx(
                    "button",
                    {
                      type: "button",
                      className: "ps-card-close",
                      onClick: () => Ht(V),
                      "aria-label": "收起",
                      title: "收起",
                      children: "×"
                    }
                  )
                ] }, V) : /* @__PURE__ */ N.jsx(
                  "button",
                  {
                    type: "button",
                    className: `ps-pill${C?.kind === "entry" && C.dir === S.name && C.filename === U.filename ? " ps-dragging" : ""}`,
                    onClick: () => yl(V),
                    onDoubleClick: () => Jt(U),
                    onContextMenu: (Nt) => Bt(Nt, "entry", U),
                    onDragStart: (Nt) => Xl(Nt, U),
                    onDragOver: (Nt) => H(Nt, U),
                    onDrop: (Nt) => w(Nt, U),
                    onDragEnd: j,
                    draggable: !0,
                    title: U.title,
                    children: /* @__PURE__ */ N.jsx("span", { className: "ps-pill-title", children: U.title })
                  },
                  V
                );
              }) })
            ] }, S.name);
          })
        ]
      }
    ) : /* @__PURE__ */ N.jsx(
      Af,
      {
        title: "提示词架尚未初始化",
        description: "选择一个数据目录作为提示词库的存放位置，之后词条会自动出现在这里。",
        action: /* @__PURE__ */ N.jsx(Za, { variant: "primary", onClick: st, children: "选择数据目录" })
      }
    ) : /* @__PURE__ */ N.jsx(Af, { title: "加载中…", description: "正在读取提示词架" });
  }
  return /* @__PURE__ */ N.jsx(k0, { mode: "inherit", className: "plugin-panel", children: /* @__PURE__ */ N.jsxs(
    I0,
    {
      title: "PromptShelf",
      actions: /* @__PURE__ */ N.jsx(P0, { text: "提示词架：右键词条/目录操作，单击胶囊展开预览，点标题栏或 × 收起。" }),
      children: [
        f && /* @__PURE__ */ N.jsx(cy, { state: f, rebuilding: K, onRebuild: lt }),
        na(),
        /* @__PURE__ */ N.jsx(
          uy,
          {
            menu: Q,
            items: Q?.kind === "entry" ? ey : Q?.kind === "blank" ? ny : ay,
            onSelect: Ut,
            onClose: () => G(null)
          }
        )
      ]
    }
  ) });
}
const kd = document.getElementById("root");
kd && N0.createRoot(kd).render(/* @__PURE__ */ N.jsx(fy, {}));
