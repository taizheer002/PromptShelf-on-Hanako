var vf = { exports: {} }, Hu = {};
var Nd;
function E0() {
  if (Nd) return Hu;
  Nd = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), b = /* @__PURE__ */ Symbol.for("react.fragment");
  function M(r, X, j) {
    var Q = null;
    if (j !== void 0 && (Q = "" + j), X.key !== void 0 && (Q = "" + X.key), "key" in X) {
      j = {};
      for (var Y in X)
        Y !== "key" && (j[Y] = X[Y]);
    } else j = X;
    return X = j.ref, {
      $$typeof: f,
      type: r,
      key: Q,
      ref: X !== void 0 ? X : null,
      props: j
    };
  }
  return Hu.Fragment = b, Hu.jsx = M, Hu.jsxs = M, Hu;
}
var Rd;
function T0() {
  return Rd || (Rd = 1, vf.exports = E0()), vf.exports;
}
var U = T0(), gf = { exports: {} }, $ = {};
var xd;
function A0() {
  if (xd) return $;
  xd = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), b = /* @__PURE__ */ Symbol.for("react.portal"), M = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), X = /* @__PURE__ */ Symbol.for("react.profiler"), j = /* @__PURE__ */ Symbol.for("react.consumer"), Q = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), V = /* @__PURE__ */ Symbol.for("react.lazy"), x = /* @__PURE__ */ Symbol.for("react.activity"), C = Symbol.iterator;
  function w(d) {
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
  }, ct = Object.assign, Mt = {};
  function ht(d, z, N) {
    this.props = d, this.context = z, this.refs = Mt, this.updater = N || mt;
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
  function pt(d, z, N) {
    this.props = d, this.context = z, this.refs = Mt, this.updater = N || mt;
  }
  var Vt = pt.prototype = new Ct();
  Vt.constructor = pt, ct(Vt, ht.prototype), Vt.isPureReactComponent = !0;
  var wt = Array.isArray;
  function Lt() {
  }
  var P = { H: null, A: null, T: null, S: null }, zt = Object.prototype.hasOwnProperty;
  function Ht(d, z, N) {
    var G = N.ref;
    return {
      $$typeof: f,
      type: d,
      key: z,
      ref: G !== void 0 ? G : null,
      props: N
    };
  }
  function Gl(d, z) {
    return Ht(d.type, z, d.props);
  }
  function hl(d) {
    return typeof d == "object" && d !== null && d.$$typeof === f;
  }
  function ll(d) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(N) {
      return z[N];
    });
  }
  var Xl = /\/+/g;
  function Bl(d, z) {
    return typeof d == "object" && d !== null && d.key != null ? ll("" + d.key) : z.toString(36);
  }
  function nl(d) {
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
  function T(d, z, N, G, k) {
    var F = typeof d;
    (F === "undefined" || F === "boolean") && (d = null);
    var st = !1;
    if (d === null) st = !0;
    else
      switch (F) {
        case "bigint":
        case "string":
        case "number":
          st = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case f:
            case b:
              st = !0;
              break;
            case V:
              return st = d._init, T(
                st(d._payload),
                z,
                N,
                G,
                k
              );
          }
      }
    if (st)
      return k = k(d), st = G === "" ? "." + Bl(d, 0) : G, wt(k) ? (N = "", st != null && (N = st.replace(Xl, "$&/") + "/"), T(k, z, N, "", function(p) {
        return p;
      })) : k != null && (hl(k) && (k = Gl(
        k,
        N + (k.key == null || d && d.key === k.key ? "" : ("" + k.key).replace(
          Xl,
          "$&/"
        ) + "/") + st
      )), z.push(k)), 1;
    st = 0;
    var kt = G === "" ? "." : G + ":";
    if (wt(d))
      for (var Nt = 0; Nt < d.length; Nt++)
        G = d[Nt], F = kt + Bl(G, Nt), st += T(
          G,
          z,
          N,
          F,
          k
        );
    else if (Nt = w(d), typeof Nt == "function")
      for (d = Nt.call(d), Nt = 0; !(G = d.next()).done; )
        G = G.value, F = kt + Bl(G, Nt++), st += T(
          G,
          z,
          N,
          F,
          k
        );
    else if (F === "object") {
      if (typeof d.then == "function")
        return T(
          nl(d),
          z,
          N,
          G,
          k
        );
      throw z = String(d), Error(
        "Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return st;
  }
  function B(d, z, N) {
    if (d == null) return d;
    var G = [], k = 0;
    return T(d, G, "", "", function(F) {
      return z.call(N, F, k++);
    }), G;
  }
  function J(d) {
    if (d._status === -1) {
      var z = d._result;
      z = z(), z.then(
        function(N) {
          (d._status === 0 || d._status === -1) && (d._status = 1, d._result = N);
        },
        function(N) {
          (d._status === 0 || d._status === -1) && (d._status = 2, d._result = N);
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
  }, ft = {
    map: B,
    forEach: function(d, z, N) {
      B(
        d,
        function() {
          z.apply(this, arguments);
        },
        N
      );
    },
    count: function(d) {
      var z = 0;
      return B(d, function() {
        z++;
      }), z;
    },
    toArray: function(d) {
      return B(d, function(z) {
        return z;
      }) || [];
    },
    only: function(d) {
      if (!hl(d))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return d;
    }
  };
  return $.Activity = x, $.Children = ft, $.Component = ht, $.Fragment = M, $.Profiler = X, $.PureComponent = pt, $.StrictMode = r, $.Suspense = D, $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, $.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return P.H.useMemoCache(d);
    }
  }, $.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, $.cacheSignal = function() {
    return null;
  }, $.cloneElement = function(d, z, N) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var G = ct({}, d.props), k = d.key;
    if (z != null)
      for (F in z.key !== void 0 && (k = "" + z.key), z)
        !zt.call(z, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && z.ref === void 0 || (G[F] = z[F]);
    var F = arguments.length - 2;
    if (F === 1) G.children = N;
    else if (1 < F) {
      for (var st = Array(F), kt = 0; kt < F; kt++)
        st[kt] = arguments[kt + 2];
      G.children = st;
    }
    return Ht(d.type, k, G);
  }, $.createContext = function(d) {
    return d = {
      $$typeof: Q,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: j,
      _context: d
    }, d;
  }, $.createElement = function(d, z, N) {
    var G, k = {}, F = null;
    if (z != null)
      for (G in z.key !== void 0 && (F = "" + z.key), z)
        zt.call(z, G) && G !== "key" && G !== "__self" && G !== "__source" && (k[G] = z[G]);
    var st = arguments.length - 2;
    if (st === 1) k.children = N;
    else if (1 < st) {
      for (var kt = Array(st), Nt = 0; Nt < st; Nt++)
        kt[Nt] = arguments[Nt + 2];
      k.children = kt;
    }
    if (d && d.defaultProps)
      for (G in st = d.defaultProps, st)
        k[G] === void 0 && (k[G] = st[G]);
    return Ht(d, F, k);
  }, $.createRef = function() {
    return { current: null };
  }, $.forwardRef = function(d) {
    return { $$typeof: Y, render: d };
  }, $.isValidElement = hl, $.lazy = function(d) {
    return {
      $$typeof: V,
      _payload: { _status: -1, _result: d },
      _init: J
    };
  }, $.memo = function(d, z) {
    return {
      $$typeof: g,
      type: d,
      compare: z === void 0 ? null : z
    };
  }, $.startTransition = function(d) {
    var z = P.T, N = {};
    P.T = N;
    try {
      var G = d(), k = P.S;
      k !== null && k(N, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(Lt, yt);
    } catch (F) {
      yt(F);
    } finally {
      z !== null && N.types !== null && (z.types = N.types), P.T = z;
    }
  }, $.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, $.use = function(d) {
    return P.H.use(d);
  }, $.useActionState = function(d, z, N) {
    return P.H.useActionState(d, z, N);
  }, $.useCallback = function(d, z) {
    return P.H.useCallback(d, z);
  }, $.useContext = function(d) {
    return P.H.useContext(d);
  }, $.useDebugValue = function() {
  }, $.useDeferredValue = function(d, z) {
    return P.H.useDeferredValue(d, z);
  }, $.useEffect = function(d, z) {
    return P.H.useEffect(d, z);
  }, $.useEffectEvent = function(d) {
    return P.H.useEffectEvent(d);
  }, $.useId = function() {
    return P.H.useId();
  }, $.useImperativeHandle = function(d, z, N) {
    return P.H.useImperativeHandle(d, z, N);
  }, $.useInsertionEffect = function(d, z) {
    return P.H.useInsertionEffect(d, z);
  }, $.useLayoutEffect = function(d, z) {
    return P.H.useLayoutEffect(d, z);
  }, $.useMemo = function(d, z) {
    return P.H.useMemo(d, z);
  }, $.useOptimistic = function(d, z) {
    return P.H.useOptimistic(d, z);
  }, $.useReducer = function(d, z, N) {
    return P.H.useReducer(d, z, N);
  }, $.useRef = function(d) {
    return P.H.useRef(d);
  }, $.useState = function(d) {
    return P.H.useState(d);
  }, $.useSyncExternalStore = function(d, z, N) {
    return P.H.useSyncExternalStore(
      d,
      z,
      N
    );
  }, $.useTransition = function() {
    return P.H.useTransition();
  }, $.version = "19.2.8", $;
}
var Cd;
function Uf() {
  return Cd || (Cd = 1, gf.exports = A0()), gf.exports;
}
var lt = Uf(), Sf = { exports: {} }, Bu = {}, bf = { exports: {} }, pf = {};
var Hd;
function z0() {
  return Hd || (Hd = 1, (function(f) {
    function b(T, B) {
      var J = T.length;
      T.push(B);
      t: for (; 0 < J; ) {
        var yt = J - 1 >>> 1, ft = T[yt];
        if (0 < X(ft, B))
          T[yt] = B, T[J] = ft, J = yt;
        else break t;
      }
    }
    function M(T) {
      return T.length === 0 ? null : T[0];
    }
    function r(T) {
      if (T.length === 0) return null;
      var B = T[0], J = T.pop();
      if (J !== B) {
        T[0] = J;
        t: for (var yt = 0, ft = T.length, d = ft >>> 1; yt < d; ) {
          var z = 2 * (yt + 1) - 1, N = T[z], G = z + 1, k = T[G];
          if (0 > X(N, J))
            G < ft && 0 > X(k, N) ? (T[yt] = k, T[G] = J, yt = G) : (T[yt] = N, T[z] = J, yt = z);
          else if (G < ft && 0 > X(k, J))
            T[yt] = k, T[G] = J, yt = G;
          else break t;
        }
      }
      return B;
    }
    function X(T, B) {
      var J = T.sortIndex - B.sortIndex;
      return J !== 0 ? J : T.id - B.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var j = performance;
      f.unstable_now = function() {
        return j.now();
      };
    } else {
      var Q = Date, Y = Q.now();
      f.unstable_now = function() {
        return Q.now() - Y;
      };
    }
    var D = [], g = [], V = 1, x = null, C = 3, w = !1, mt = !1, ct = !1, Mt = !1, ht = typeof setTimeout == "function" ? setTimeout : null, Ct = typeof clearTimeout == "function" ? clearTimeout : null, pt = typeof setImmediate < "u" ? setImmediate : null;
    function Vt(T) {
      for (var B = M(g); B !== null; ) {
        if (B.callback === null) r(g);
        else if (B.startTime <= T)
          r(g), B.sortIndex = B.expirationTime, b(D, B);
        else break;
        B = M(g);
      }
    }
    function wt(T) {
      if (ct = !1, Vt(T), !mt)
        if (M(D) !== null)
          mt = !0, Lt || (Lt = !0, ll());
        else {
          var B = M(g);
          B !== null && nl(wt, B.startTime - T);
        }
    }
    var Lt = !1, P = -1, zt = 5, Ht = -1;
    function Gl() {
      return Mt ? !0 : !(f.unstable_now() - Ht < zt);
    }
    function hl() {
      if (Mt = !1, Lt) {
        var T = f.unstable_now();
        Ht = T;
        var B = !0;
        try {
          t: {
            mt = !1, ct && (ct = !1, Ct(P), P = -1), w = !0;
            var J = C;
            try {
              l: {
                for (Vt(T), x = M(D); x !== null && !(x.expirationTime > T && Gl()); ) {
                  var yt = x.callback;
                  if (typeof yt == "function") {
                    x.callback = null, C = x.priorityLevel;
                    var ft = yt(
                      x.expirationTime <= T
                    );
                    if (T = f.unstable_now(), typeof ft == "function") {
                      x.callback = ft, Vt(T), B = !0;
                      break l;
                    }
                    x === M(D) && r(D), Vt(T);
                  } else r(D);
                  x = M(D);
                }
                if (x !== null) B = !0;
                else {
                  var d = M(g);
                  d !== null && nl(
                    wt,
                    d.startTime - T
                  ), B = !1;
                }
              }
              break t;
            } finally {
              x = null, C = J, w = !1;
            }
            B = void 0;
          }
        } finally {
          B ? ll() : Lt = !1;
        }
      }
    }
    var ll;
    if (typeof pt == "function")
      ll = function() {
        pt(hl);
      };
    else if (typeof MessageChannel < "u") {
      var Xl = new MessageChannel(), Bl = Xl.port2;
      Xl.port1.onmessage = hl, ll = function() {
        Bl.postMessage(null);
      };
    } else
      ll = function() {
        ht(hl, 0);
      };
    function nl(T, B) {
      P = ht(function() {
        T(f.unstable_now());
      }, B);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, f.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : zt = 0 < T ? Math.floor(1e3 / T) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, f.unstable_next = function(T) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = C;
      }
      var J = C;
      C = B;
      try {
        return T();
      } finally {
        C = J;
      }
    }, f.unstable_requestPaint = function() {
      Mt = !0;
    }, f.unstable_runWithPriority = function(T, B) {
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
      var J = C;
      C = T;
      try {
        return B();
      } finally {
        C = J;
      }
    }, f.unstable_scheduleCallback = function(T, B, J) {
      var yt = f.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? yt + J : yt) : J = yt, T) {
        case 1:
          var ft = -1;
          break;
        case 2:
          ft = 250;
          break;
        case 5:
          ft = 1073741823;
          break;
        case 4:
          ft = 1e4;
          break;
        default:
          ft = 5e3;
      }
      return ft = J + ft, T = {
        id: V++,
        callback: B,
        priorityLevel: T,
        startTime: J,
        expirationTime: ft,
        sortIndex: -1
      }, J > yt ? (T.sortIndex = J, b(g, T), M(D) === null && T === M(g) && (ct ? (Ct(P), P = -1) : ct = !0, nl(wt, J - yt))) : (T.sortIndex = ft, b(D, T), mt || w || (mt = !0, Lt || (Lt = !0, ll()))), T;
    }, f.unstable_shouldYield = Gl, f.unstable_wrapCallback = function(T) {
      var B = C;
      return function() {
        var J = C;
        C = B;
        try {
          return T.apply(this, arguments);
        } finally {
          C = J;
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
  function b(D) {
    var g = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var V = 2; V < arguments.length; V++)
        g += "&args[]=" + encodeURIComponent(arguments[V]);
    }
    return "Minified React error #" + D + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function M() {
  }
  var r = {
    d: {
      f: M,
      r: function() {
        throw Error(b(522));
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
  function j(D, g, V) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: X,
      key: x == null ? null : "" + x,
      children: D,
      containerInfo: g,
      implementation: V
    };
  }
  var Q = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Y(D, g) {
    if (D === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return al.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, al.createPortal = function(D, g) {
    var V = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(b(299));
    return j(D, g, null, V);
  }, al.flushSync = function(D) {
    var g = Q.T, V = r.p;
    try {
      if (Q.T = null, r.p = 2, D) return D();
    } finally {
      Q.T = g, r.p = V, r.d.f();
    }
  }, al.preconnect = function(D, g) {
    typeof D == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, r.d.C(D, g));
  }, al.prefetchDNS = function(D) {
    typeof D == "string" && r.d.D(D);
  }, al.preinit = function(D, g) {
    if (typeof D == "string" && g && typeof g.as == "string") {
      var V = g.as, x = Y(V, g.crossOrigin), C = typeof g.integrity == "string" ? g.integrity : void 0, w = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      V === "style" ? r.d.S(
        D,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: x,
          integrity: C,
          fetchPriority: w
        }
      ) : V === "script" && r.d.X(D, {
        crossOrigin: x,
        integrity: C,
        fetchPriority: w,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, al.preinitModule = function(D, g) {
    if (typeof D == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var V = Y(
            g.as,
            g.crossOrigin
          );
          r.d.M(D, {
            crossOrigin: V,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && r.d.M(D);
  }, al.preload = function(D, g) {
    if (typeof D == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var V = g.as, x = Y(V, g.crossOrigin);
      r.d.L(D, V, {
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
  }, al.preloadModule = function(D, g) {
    if (typeof D == "string")
      if (g) {
        var V = Y(g.as, g.crossOrigin);
        r.d.m(D, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: V,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else r.d.m(D);
  }, al.requestFormReset = function(D) {
    r.d.r(D);
  }, al.unstable_batchedUpdates = function(D, g) {
    return D(g);
  }, al.useFormState = function(D, g, V) {
    return Q.H.useFormState(D, g, V);
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
      } catch (b) {
        console.error(b);
      }
  }
  return f(), Ef.exports = D0(), Ef.exports;
}
var Yd;
function M0() {
  if (Yd) return Bu;
  Yd = 1;
  var f = _0(), b = Uf(), M = O0();
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
  function j(t) {
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
  function Y(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function D(t) {
    if (j(t) !== t)
      throw Error(r(188));
  }
  function g(t) {
    var l = t.alternate;
    if (!l) {
      if (l = j(t), l === null) throw Error(r(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (a = u.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return D(u), t;
          if (n === a) return D(u), l;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (e.return !== a.return) e = u, a = n;
      else {
        for (var i = !1, c = u.child; c; ) {
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
        if (!i) {
          for (c = n.child; c; ) {
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
          if (!i) throw Error(r(189));
        }
      }
      if (e.alternate !== a) throw Error(r(190));
    }
    if (e.tag !== 3) throw Error(r(188));
    return e.stateNode.current === e ? t : l;
  }
  function V(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = V(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  var x = Object.assign, C = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.transitional.element"), mt = /* @__PURE__ */ Symbol.for("react.portal"), ct = /* @__PURE__ */ Symbol.for("react.fragment"), Mt = /* @__PURE__ */ Symbol.for("react.strict_mode"), ht = /* @__PURE__ */ Symbol.for("react.profiler"), Ct = /* @__PURE__ */ Symbol.for("react.consumer"), pt = /* @__PURE__ */ Symbol.for("react.context"), Vt = /* @__PURE__ */ Symbol.for("react.forward_ref"), wt = /* @__PURE__ */ Symbol.for("react.suspense"), Lt = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), zt = /* @__PURE__ */ Symbol.for("react.lazy"), Ht = /* @__PURE__ */ Symbol.for("react.activity"), Gl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), hl = Symbol.iterator;
  function ll(t) {
    return t === null || typeof t != "object" ? null : (t = hl && t[hl] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Xl = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Bl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Xl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case ct:
        return "Fragment";
      case ht:
        return "Profiler";
      case Mt:
        return "StrictMode";
      case wt:
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
        case Vt:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case P:
          return l = t.displayName || null, l !== null ? l : Bl(t.type) || "Memo";
        case zt:
          l = t._payload, t = t._init;
          try {
            return Bl(t(l));
          } catch {
          }
      }
    return null;
  }
  var nl = Array.isArray, T = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, yt = [], ft = -1;
  function d(t) {
    return { current: t };
  }
  function z(t) {
    0 > ft || (t.current = yt[ft], yt[ft] = null, ft--);
  }
  function N(t, l) {
    ft++, yt[ft] = t.current, t.current = l;
  }
  var G = d(null), k = d(null), F = d(null), st = d(null);
  function kt(t, l) {
    switch (N(F, l), N(k, t), N(G, null), l.nodeType) {
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
    z(G), N(G, t);
  }
  function Nt() {
    z(G), z(k), z(F);
  }
  function p(t) {
    t.memoizedState !== null && N(st, t);
    var l = G.current, e = td(l, t.type);
    l !== e && (N(k, t), N(G, e));
  }
  function R(t) {
    k.current === t && (z(G), z(k)), st.current === t && (z(st), Nu._currentValue = J);
  }
  var O, H;
  function W(t) {
    if (O === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        O = l && l[1] || "", H = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + O + t + H;
  }
  var gt = !1;
  function el(t, l) {
    if (!t || gt) return "";
    gt = !0;
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
                } catch (S) {
                  var v = S;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (S) {
                  v = S;
                }
                t.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (S) {
                v = S;
              }
              (_ = t()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (S) {
            if (S && v && typeof S.stack == "string")
              return [S.stack, v.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), i = n[0], c = n[1];
      if (i && c) {
        var s = i.split(`
`), y = c.split(`
`);
        for (u = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; u < y.length && !y[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (a === s.length || u === y.length)
          for (a = s.length - 1, u = y.length - 1; 1 <= a && 0 <= u && s[a] !== y[u]; )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (s[a] !== y[u]) {
            if (a !== 1 || u !== 1)
              do
                if (a--, u--, 0 > u || s[a] !== y[u]) {
                  var E = `
` + s[a].replace(" at new ", " at ");
                  return t.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", t.displayName)), E;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      gt = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? W(e) : "";
  }
  function Bt(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return W(t.type);
      case 16:
        return W("Lazy");
      case 13:
        return t.child !== l && l !== null ? W("Suspense Fallback") : W("Suspense");
      case 19:
        return W("SuspenseList");
      case 0:
      case 15:
        return el(t.type, !1);
      case 11:
        return el(t.type.render, !1);
      case 1:
        return el(t.type, !0);
      case 31:
        return W("Activity");
      default:
        return "";
    }
  }
  function re(t) {
    try {
      var l = "", e = null;
      do
        l += Bt(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var $t = Object.prototype.hasOwnProperty, li = f.unstable_scheduleCallback, ei = f.unstable_cancelCallback, Pd = f.unstable_shouldYield, tm = f.unstable_requestPaint, yl = f.unstable_now, lm = f.unstable_getCurrentPriorityLevel, Nf = f.unstable_ImmediatePriority, Rf = f.unstable_UserBlockingPriority, ju = f.unstable_NormalPriority, em = f.unstable_LowPriority, xf = f.unstable_IdlePriority, am = f.log, um = f.unstable_setDisableYieldValue, La = null, vl = null;
  function oe(t) {
    if (typeof am == "function" && um(t), vl && typeof vl.setStrictMode == "function")
      try {
        vl.setStrictMode(La, t);
      } catch {
      }
  }
  var gl = Math.clz32 ? Math.clz32 : cm, nm = Math.log, im = Math.LN2;
  function cm(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (nm(t) / im | 0) | 0;
  }
  var qu = 256, Yu = 262144, Gu = 4194304;
  function qe(t) {
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
  function Xu(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0, n = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? u = qe(a) : (i &= c, i !== 0 ? u = qe(i) : e || (e = c & ~t, e !== 0 && (u = qe(e))))) : (c = a & ~n, c !== 0 ? u = qe(c) : i !== 0 ? u = qe(i) : e || (e = a & ~t, e !== 0 && (u = qe(e)))), u === 0 ? 0 : l !== 0 && l !== u && (l & n) === 0 && (n = u & -u, e = l & -l, n >= e || n === 32 && (e & 4194048) !== 0) ? l : u;
  }
  function Za(t, l) {
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
    var t = Gu;
    return Gu <<= 1, (Gu & 62914560) === 0 && (Gu = 4194304), t;
  }
  function ai(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Va(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function sm(t, l, e, a, u, n) {
    var i = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var c = t.entanglements, s = t.expirationTimes, y = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var E = 31 - gl(e), _ = 1 << E;
      c[E] = 0, s[E] = -1;
      var v = y[E];
      if (v !== null)
        for (y[E] = null, E = 0; E < v.length; E++) {
          var S = v[E];
          S !== null && (S.lane &= -536870913);
        }
      e &= ~_;
    }
    a !== 0 && Hf(t, a, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l));
  }
  function Hf(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var a = 31 - gl(l);
    t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 261930;
  }
  function Bf(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var a = 31 - gl(e), u = 1 << a;
      u & l | t[a] & l && (t[a] |= l), e &= ~u;
    }
  }
  function jf(t, l) {
    var e = l & -l;
    return e = (e & 42) !== 0 ? 1 : ui(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
  }
  function ui(t) {
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
  function ni(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function qf() {
    var t = B.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Ad(t.type));
  }
  function Yf(t, l) {
    var e = B.p;
    try {
      return B.p = t, l();
    } finally {
      B.p = e;
    }
  }
  var de = Math.random().toString(36).slice(2), Ft = "__reactFiber$" + de, il = "__reactProps$" + de, aa = "__reactContainer$" + de, ii = "__reactEvents$" + de, rm = "__reactListeners$" + de, om = "__reactHandles$" + de, Gf = "__reactResources$" + de, Ka = "__reactMarker$" + de;
  function ci(t) {
    delete t[Ft], delete t[il], delete t[ii], delete t[rm], delete t[om];
  }
  function ua(t) {
    var l = t[Ft];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[aa] || e[Ft]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = cd(t); t !== null; ) {
            if (e = t[Ft]) return e;
            t = cd(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function na(t) {
    if (t = t[Ft] || t[aa]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Ja(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(r(33));
  }
  function ia(t) {
    var l = t[Gf];
    return l || (l = t[Gf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Kt(t) {
    t[Ka] = !0;
  }
  var Xf = /* @__PURE__ */ new Set(), Qf = {};
  function Ye(t, l) {
    ca(t, l), ca(t + "Capture", l);
  }
  function ca(t, l) {
    for (Qf[t] = l, t = 0; t < l.length; t++)
      Xf.add(l[t]);
  }
  var dm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Lf = {}, Zf = {};
  function mm(t) {
    return $t.call(Zf, t) ? !0 : $t.call(Lf, t) ? !1 : dm.test(t) ? Zf[t] = !0 : (Lf[t] = !0, !1);
  }
  function Qu(t, l, e) {
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
  function Lu(t, l, e) {
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
  function Jl(t, l, e, a) {
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
  function _l(t) {
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
      var u = a.get, n = a.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(i) {
          e = "" + i, n.call(this, i);
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
  function Zu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var ym = /[\n"\\]/g;
  function Dl(t) {
    return t.replace(
      ym,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function si(t, l, e, a, u, n, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + _l(l)) : t.value !== "" + _l(l) && (t.value = "" + _l(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? ri(t, i, _l(l)) : e != null ? ri(t, i, _l(e)) : a != null && t.removeAttribute("value"), u == null && n != null && (t.defaultChecked = !!n), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + _l(c) : t.removeAttribute("name");
  }
  function Jf(t, l, e, a, u, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || l != null)) {
        fi(t);
        return;
      }
      e = e != null ? "" + _l(e) : "", l = l != null ? "" + _l(l) : e, c || l === t.value || (t.value = l), t.defaultValue = l;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = c ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), fi(t);
  }
  function ri(t, l, e) {
    l === "number" && Zu(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
  }
  function fa(t, l, e, a) {
    if (t = t.options, l) {
      l = {};
      for (var u = 0; u < e.length; u++)
        l["$" + e[u]] = !0;
      for (e = 0; e < t.length; e++)
        u = l.hasOwnProperty("$" + t[e].value), t[e].selected !== u && (t[e].selected = u), u && a && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + _l(e), l = null, u = 0; u < t.length; u++) {
        if (t[u].value === e) {
          t[u].selected = !0, a && (t[u].defaultSelected = !0);
          return;
        }
        l !== null || t[u].disabled || (l = t[u]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function wf(t, l, e) {
    if (l != null && (l = "" + _l(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + _l(e) : "";
  }
  function kf(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(r(92));
        if (nl(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), l = e;
    }
    e = _l(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a), fi(t);
  }
  function sa(t, l) {
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
      for (var u in l)
        a = l[u], l.hasOwnProperty(u) && e[u] !== a && $f(t, u, a);
    } else
      for (var n in l)
        l.hasOwnProperty(n) && $f(t, n, l[n]);
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
  function Vu(t) {
    return Sm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function wl() {
  }
  var di = null;
  function mi(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ra = null, oa = null;
  function Wf(t) {
    var l = na(t);
    if (l && (t = l.stateNode)) {
      var e = t[il] || null;
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
              'input[name="' + Dl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var u = a[il] || null;
                if (!u) throw Error(r(90));
                si(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
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
          l = e.value, l != null && fa(t, !!e.multiple, l, !1);
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
      if (hi = !1, (ra !== null || oa !== null) && (xn(), ra && (l = ra, t = oa, oa = ra = null, Wf(l), t)))
        for (l = 0; l < t.length; l++) Wf(t[l]);
    }
  }
  function wa(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[il] || null;
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
  var kl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), yi = !1;
  if (kl)
    try {
      var ka = {};
      Object.defineProperty(ka, "passive", {
        get: function() {
          yi = !0;
        }
      }), window.addEventListener("test", ka, ka), window.removeEventListener("test", ka, ka);
    } catch {
      yi = !1;
    }
  var me = null, vi = null, Ku = null;
  function Pf() {
    if (Ku) return Ku;
    var t, l = vi, e = l.length, a, u = "value" in me ? me.value : me.textContent, n = u.length;
    for (t = 0; t < e && l[t] === u[t]; t++) ;
    var i = e - t;
    for (a = 1; a <= i && l[e - a] === u[n - a]; a++) ;
    return Ku = u.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Ju(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function wu() {
    return !0;
  }
  function ts() {
    return !1;
  }
  function cl(t) {
    function l(e, a, u, n, i) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? wu : ts, this.isPropagationStopped = ts, this;
    }
    return x(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = wu);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = wu);
      },
      persist: function() {
      },
      isPersistent: wu
    }), l;
  }
  var Ge = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ku = cl(Ge), $a = x({}, Ge, { view: 0, detail: 0 }), bm = cl($a), gi, Si, Fa, $u = x({}, $a, {
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
      return "movementX" in t ? t.movementX : (t !== Fa && (Fa && t.type === "mousemove" ? (gi = t.screenX - Fa.screenX, Si = t.screenY - Fa.screenY) : Si = gi = 0, Fa = t), gi);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Si;
    }
  }), ls = cl($u), pm = x({}, $u, { dataTransfer: 0 }), Em = cl(pm), Tm = x({}, $a, { relatedTarget: 0 }), bi = cl(Tm), Am = x({}, Ge, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), zm = cl(Am), _m = x({}, Ge, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Dm = cl(_m), Om = x({}, Ge, { data: 0 }), es = cl(Om), Mm = {
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
  var xm = x({}, $a, {
    key: function(t) {
      if (t.key) {
        var l = Mm[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = Ju(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Um[t.keyCode] || "Unidentified" : "";
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
      return t.type === "keypress" ? Ju(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ju(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Cm = cl(xm), Hm = x({}, $u, {
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
  }), as = cl(Hm), Bm = x({}, $a, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pi
  }), jm = cl(Bm), qm = x({}, Ge, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ym = cl(qm), Gm = x({}, $u, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Xm = cl(Gm), Qm = x({}, Ge, {
    newState: 0,
    oldState: 0
  }), Lm = cl(Qm), Zm = [9, 13, 27, 32], Ei = kl && "CompositionEvent" in window, Wa = null;
  kl && "documentMode" in document && (Wa = document.documentMode);
  var Vm = kl && "TextEvent" in window && !Wa, us = kl && (!Ei || Wa && 8 < Wa && 11 >= Wa), ns = " ", is = !1;
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
  var da = !1;
  function Km(t, l) {
    switch (t) {
      case "compositionend":
        return fs(l);
      case "keypress":
        return l.which !== 32 ? null : (is = !0, ns);
      case "textInput":
        return t = l.data, t === ns && is ? null : t;
      default:
        return null;
    }
  }
  function Jm(t, l) {
    if (da)
      return t === "compositionend" || !Ei && cs(t, l) ? (t = Pf(), Ku = vi = me = null, da = !1, t) : null;
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
        return us && l.locale !== "ko" ? null : l.data;
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
    ra ? oa ? oa.push(a) : oa = [a] : ra = a, l = Gn(l, "onChange"), 0 < l.length && (e = new ku(
      "onChange",
      "change",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }));
  }
  var Ia = null, Pa = null;
  function km(t) {
    wo(t, 0);
  }
  function Fu(t) {
    var l = Ja(t);
    if (Kf(l)) return t;
  }
  function os(t, l) {
    if (t === "change") return l;
  }
  var ds = !1;
  if (kl) {
    var Ti;
    if (kl) {
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
    Ia && (Ia.detachEvent("onpropertychange", ys), Pa = Ia = null);
  }
  function ys(t) {
    if (t.propertyName === "value" && Fu(Pa)) {
      var l = [];
      rs(
        l,
        Pa,
        t,
        mi(t)
      ), If(km, l);
    }
  }
  function $m(t, l, e) {
    t === "focusin" ? (hs(), Ia = l, Pa = e, Ia.attachEvent("onpropertychange", ys)) : t === "focusout" && hs();
  }
  function Fm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Fu(Pa);
  }
  function Wm(t, l) {
    if (t === "click") return Fu(l);
  }
  function Im(t, l) {
    if (t === "input" || t === "change")
      return Fu(l);
  }
  function Pm(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var Sl = typeof Object.is == "function" ? Object.is : Pm;
  function tu(t, l) {
    if (Sl(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!$t.call(l, u) || !Sl(t[u], l[u]))
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
    for (var l = Zu(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Zu(t.document);
    }
    return l;
  }
  function zi(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var th = kl && "documentMode" in document && 11 >= document.documentMode, ma = null, _i = null, lu = null, Di = !1;
  function ps(t, l, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Di || ma == null || ma !== Zu(a) || (a = ma, "selectionStart" in a && zi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), lu && tu(lu, a) || (lu = a, a = Gn(_i, "onSelect"), 0 < a.length && (l = new ku(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: a }), l.target = ma)));
  }
  function Xe(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var ha = {
    animationend: Xe("Animation", "AnimationEnd"),
    animationiteration: Xe("Animation", "AnimationIteration"),
    animationstart: Xe("Animation", "AnimationStart"),
    transitionrun: Xe("Transition", "TransitionRun"),
    transitionstart: Xe("Transition", "TransitionStart"),
    transitioncancel: Xe("Transition", "TransitionCancel"),
    transitionend: Xe("Transition", "TransitionEnd")
  }, Oi = {}, Es = {};
  kl && (Es = document.createElement("div").style, "AnimationEvent" in window || (delete ha.animationend.animation, delete ha.animationiteration.animation, delete ha.animationstart.animation), "TransitionEvent" in window || delete ha.transitionend.transition);
  function Qe(t) {
    if (Oi[t]) return Oi[t];
    if (!ha[t]) return t;
    var l = ha[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in Es)
        return Oi[t] = l[e];
    return t;
  }
  var Ts = Qe("animationend"), As = Qe("animationiteration"), zs = Qe("animationstart"), lh = Qe("transitionrun"), eh = Qe("transitionstart"), ah = Qe("transitioncancel"), _s = Qe("transitionend"), Ds = /* @__PURE__ */ new Map(), Mi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Mi.push("scrollEnd");
  function jl(t, l) {
    Ds.set(t, l), Ye(l, [t]);
  }
  var Wu = typeof reportError == "function" ? reportError : function(t) {
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
  }, Ol = [], ya = 0, Ui = 0;
  function Iu() {
    for (var t = ya, l = Ui = ya = 0; l < t; ) {
      var e = Ol[l];
      Ol[l++] = null;
      var a = Ol[l];
      Ol[l++] = null;
      var u = Ol[l];
      Ol[l++] = null;
      var n = Ol[l];
      if (Ol[l++] = null, a !== null && u !== null) {
        var i = a.pending;
        i === null ? u.next = u : (u.next = i.next, i.next = u), a.pending = u;
      }
      n !== 0 && Os(e, u, n);
    }
  }
  function Pu(t, l, e, a) {
    Ol[ya++] = t, Ol[ya++] = l, Ol[ya++] = e, Ol[ya++] = a, Ui |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Ni(t, l, e, a) {
    return Pu(t, l, e, a), tn(t);
  }
  function Le(t, l) {
    return Pu(t, null, null, l), tn(t);
  }
  function Os(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = t.return; n !== null; )
      n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (u = !0)), t = n, n = n.return;
    return t.tag === 3 ? (n = t.stateNode, u && l !== null && (u = 31 - gl(e), t = n.hiddenUpdates, a = t[u], a === null ? t[u] = [l] : a.push(l), l.lane = e | 536870912), n) : null;
  }
  function tn(t) {
    if (50 < Au)
      throw Au = 0, Gc = null, Error(r(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var va = {};
  function uh(t, l, e, a) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function bl(t, l, e, a) {
    return new uh(t, l, e, a);
  }
  function Ri(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function $l(t, l) {
    var e = t.alternate;
    return e === null ? (e = bl(
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
  function ln(t, l, e, a, u, n) {
    var i = 0;
    if (a = t, typeof t == "function") Ri(t) && (i = 1);
    else if (typeof t == "string")
      i = s0(
        t,
        e,
        G.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Ht:
          return t = bl(31, e, l, u), t.elementType = Ht, t.lanes = n, t;
        case ct:
          return Ze(e.children, u, n, l);
        case Mt:
          i = 8, u |= 24;
          break;
        case ht:
          return t = bl(12, e, l, u | 2), t.elementType = ht, t.lanes = n, t;
        case wt:
          return t = bl(13, e, l, u), t.elementType = wt, t.lanes = n, t;
        case Lt:
          return t = bl(19, e, l, u), t.elementType = Lt, t.lanes = n, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case pt:
                i = 10;
                break t;
              case Ct:
                i = 9;
                break t;
              case Vt:
                i = 11;
                break t;
              case P:
                i = 14;
                break t;
              case zt:
                i = 16, a = null;
                break t;
            }
          i = 29, e = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return l = bl(i, e, l, u), l.elementType = t, l.type = a, l.lanes = n, l;
  }
  function Ze(t, l, e, a) {
    return t = bl(7, t, a, l), t.lanes = e, t;
  }
  function xi(t, l, e) {
    return t = bl(6, t, null, l), t.lanes = e, t;
  }
  function Us(t) {
    var l = bl(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function Ci(t, l, e) {
    return l = bl(
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
  function Ml(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Ns.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: re(l)
      }, Ns.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: re(l)
    };
  }
  var ga = [], Sa = 0, en = null, eu = 0, Ul = [], Nl = 0, he = null, Ql = 1, Ll = "";
  function Fl(t, l) {
    ga[Sa++] = eu, ga[Sa++] = en, en = t, eu = l;
  }
  function Rs(t, l, e) {
    Ul[Nl++] = Ql, Ul[Nl++] = Ll, Ul[Nl++] = he, he = t;
    var a = Ql;
    t = Ll;
    var u = 32 - gl(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - gl(l) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, Ql = 1 << 32 - gl(l) + u | e << u | a, Ll = n + t;
    } else
      Ql = 1 << n | e << u | a, Ll = t;
  }
  function Hi(t) {
    t.return !== null && (Fl(t, 1), Rs(t, 1, 0));
  }
  function Bi(t) {
    for (; t === en; )
      en = ga[--Sa], ga[Sa] = null, eu = ga[--Sa], ga[Sa] = null;
    for (; t === he; )
      he = Ul[--Nl], Ul[Nl] = null, Ll = Ul[--Nl], Ul[Nl] = null, Ql = Ul[--Nl], Ul[Nl] = null;
  }
  function xs(t, l) {
    Ul[Nl++] = Ql, Ul[Nl++] = Ll, Ul[Nl++] = he, Ql = l.id, Ll = l.overflow, he = t;
  }
  var Wt = null, Dt = null, it = !1, ye = null, Rl = !1, ji = Error(r(519));
  function ve(t) {
    var l = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw au(Ml(l, t)), ji;
  }
  function Cs(t) {
    var l = t.stateNode, e = t.type, a = t.memoizedProps;
    switch (l[Ft] = t, l[il] = a, e) {
      case "dialog":
        at("cancel", l), at("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        at("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < _u.length; e++)
          at(_u[e], l);
        break;
      case "source":
        at("error", l);
        break;
      case "img":
      case "image":
      case "link":
        at("error", l), at("load", l);
        break;
      case "details":
        at("toggle", l);
        break;
      case "input":
        at("invalid", l), Jf(
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
        at("invalid", l);
        break;
      case "textarea":
        at("invalid", l), kf(l, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === !0 || Wo(l.textContent, e) ? (a.popover != null && (at("beforetoggle", l), at("toggle", l)), a.onScroll != null && at("scroll", l), a.onScrollEnd != null && at("scrollend", l), a.onClick != null && (l.onclick = wl), l = !0) : l = !1, l || ve(t, !0);
  }
  function Hs(t) {
    for (Wt = t.return; Wt; )
      switch (Wt.tag) {
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
          Wt = Wt.return;
      }
  }
  function ba(t) {
    if (t !== Wt) return !1;
    if (!it) return Hs(t), it = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || tf(t.type, t.memoizedProps)), e = !e), e && Dt && ve(t), Hs(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Dt = id(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Dt = id(t);
    } else
      l === 27 ? (l = Dt, Ne(t.type) ? (t = nf, nf = null, Dt = t) : Dt = l) : Dt = Wt ? Cl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ve() {
    Dt = Wt = null, it = !1;
  }
  function qi() {
    var t = ye;
    return t !== null && (ol === null ? ol = t : ol.push.apply(
      ol,
      t
    ), ye = null), t;
  }
  function au(t) {
    ye === null ? ye = [t] : ye.push(t);
  }
  var Yi = d(null), Ke = null, Wl = null;
  function ge(t, l, e) {
    N(Yi, l._currentValue), l._currentValue = e;
  }
  function Il(t) {
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
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var s = 0; s < l.length; s++)
            if (c.context === l[s]) {
              n.lanes |= e, c = n.alternate, c !== null && (c.lanes |= e), Gi(
                n.return,
                e,
                t
              ), a || (i = null);
              break t;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (i = u.return, i === null) throw Error(r(341));
        i.lanes |= e, n = i.alternate, n !== null && (n.lanes |= e), Gi(i, e, t), i = null;
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (u = i.sibling, u !== null) {
            u.return = i.return, i = u;
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function pa(t, l, e, a) {
    t = null;
    for (var u = l, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(r(387));
        if (i = i.memoizedProps, i !== null) {
          var c = u.type;
          Sl(u.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (u === st.current) {
        if (i = u.alternate, i === null) throw Error(r(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Nu) : t = [Nu]);
      }
      u = u.return;
    }
    t !== null && Xi(
      l,
      t,
      e,
      a
    ), l.flags |= 262144;
  }
  function an(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Sl(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Je(t) {
    Ke = t, Wl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function It(t) {
    return Bs(Ke, t);
  }
  function un(t, l) {
    return Ke === null && Je(t), Bs(t, l);
  }
  function Bs(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, Wl === null) {
      if (t === null) throw Error(r(308));
      Wl = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else Wl = Wl.next = l;
    return e;
  }
  var nh = typeof AbortController < "u" ? AbortController : function() {
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
      controller: new nh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function uu(t) {
    t.refCount--, t.refCount === 0 && ih(ch, function() {
      t.controller.abort();
    });
  }
  var nu = null, Li = 0, Ea = 0, Ta = null;
  function fh(t, l) {
    if (nu === null) {
      var e = nu = [];
      Li = 0, Ea = Kc(), Ta = {
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
    if (--Li === 0 && nu !== null) {
      Ta !== null && (Ta.status = "fulfilled");
      var t = nu;
      nu = null, Ea = 0, Ta = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function sh(t, l) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        e.push(u);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = l;
        for (var u = 0; u < e.length; u++) (0, e[u])(l);
      },
      function(u) {
        for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
          (0, e[u])(void 0);
      }
    ), a;
  }
  var qs = T.S;
  T.S = function(t, l) {
    Eo = yl(), typeof l == "object" && l !== null && typeof l.then == "function" && fh(t, l), qs !== null && qs(t, l);
  };
  var we = d(null);
  function Zi() {
    var t = we.current;
    return t !== null ? t : _t.pooledCache;
  }
  function nn(t, l) {
    l === null ? N(we, we.current) : N(we, l.pool);
  }
  function Ys() {
    var t = Zi();
    return t === null ? null : { parent: Yt._currentValue, pool: t };
  }
  var Aa = Error(r(460)), Vi = Error(r(474)), cn = Error(r(542)), fn = { then: function() {
  } };
  function Gs(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Xs(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(wl, wl), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, Ls(t), t;
      default:
        if (typeof l.status == "string") l.then(wl, wl);
        else {
          if (t = _t, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = l, t.status = "pending", t.then(
            function(a) {
              if (l.status === "pending") {
                var u = l;
                u.status = "fulfilled", u.value = a;
              }
            },
            function(a) {
              if (l.status === "pending") {
                var u = l;
                u.status = "rejected", u.reason = a;
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
        throw $e = l, Aa;
    }
  }
  function ke(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? ($e = e, Aa) : e;
    }
  }
  var $e = null;
  function Qs() {
    if ($e === null) throw Error(r(459));
    var t = $e;
    return $e = null, t;
  }
  function Ls(t) {
    if (t === Aa || t === cn)
      throw Error(r(483));
  }
  var za = null, iu = 0;
  function sn(t) {
    var l = iu;
    return iu += 1, za === null && (za = []), Xs(za, t, l);
  }
  function cu(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function rn(t, l) {
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
    function u(m, o) {
      return m = $l(m, o), m.index = 0, m.sibling = null, m;
    }
    function n(m, o, h) {
      return m.index = h, t ? (h = m.alternate, h !== null ? (h = h.index, h < o ? (m.flags |= 67108866, o) : h) : (m.flags |= 67108866, o)) : (m.flags |= 1048576, o);
    }
    function i(m) {
      return t && m.alternate === null && (m.flags |= 67108866), m;
    }
    function c(m, o, h, A) {
      return o === null || o.tag !== 6 ? (o = xi(h, m.mode, A), o.return = m, o) : (o = u(o, h), o.return = m, o);
    }
    function s(m, o, h, A) {
      var Z = h.type;
      return Z === ct ? E(
        m,
        o,
        h.props.children,
        A,
        h.key
      ) : o !== null && (o.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === zt && ke(Z) === o.type) ? (o = u(o, h.props), cu(o, h), o.return = m, o) : (o = ln(
        h.type,
        h.key,
        h.props,
        null,
        m.mode,
        A
      ), cu(o, h), o.return = m, o);
    }
    function y(m, o, h, A) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== h.containerInfo || o.stateNode.implementation !== h.implementation ? (o = Ci(h, m.mode, A), o.return = m, o) : (o = u(o, h.children || []), o.return = m, o);
    }
    function E(m, o, h, A, Z) {
      return o === null || o.tag !== 7 ? (o = Ze(
        h,
        m.mode,
        A,
        Z
      ), o.return = m, o) : (o = u(o, h), o.return = m, o);
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
          case w:
            return h = ln(
              o.type,
              o.key,
              o.props,
              null,
              m.mode,
              h
            ), cu(h, o), h.return = m, h;
          case mt:
            return o = Ci(
              o,
              m.mode,
              h
            ), o.return = m, o;
          case zt:
            return o = ke(o), _(m, o, h);
        }
        if (nl(o) || ll(o))
          return o = Ze(
            o,
            m.mode,
            h,
            null
          ), o.return = m, o;
        if (typeof o.then == "function")
          return _(m, sn(o), h);
        if (o.$$typeof === pt)
          return _(
            m,
            un(m, o),
            h
          );
        rn(m, o);
      }
      return null;
    }
    function v(m, o, h, A) {
      var Z = o !== null ? o.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return Z !== null ? null : c(m, o, "" + h, A);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case w:
            return h.key === Z ? s(m, o, h, A) : null;
          case mt:
            return h.key === Z ? y(m, o, h, A) : null;
          case zt:
            return h = ke(h), v(m, o, h, A);
        }
        if (nl(h) || ll(h))
          return Z !== null ? null : E(m, o, h, A, null);
        if (typeof h.then == "function")
          return v(
            m,
            o,
            sn(h),
            A
          );
        if (h.$$typeof === pt)
          return v(
            m,
            o,
            un(m, h),
            A
          );
        rn(m, h);
      }
      return null;
    }
    function S(m, o, h, A, Z) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return m = m.get(h) || null, c(o, m, "" + A, Z);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case w:
            return m = m.get(
              A.key === null ? h : A.key
            ) || null, s(o, m, A, Z);
          case mt:
            return m = m.get(
              A.key === null ? h : A.key
            ) || null, y(o, m, A, Z);
          case zt:
            return A = ke(A), S(
              m,
              o,
              h,
              A,
              Z
            );
        }
        if (nl(A) || ll(A))
          return m = m.get(h) || null, E(o, m, A, Z, null);
        if (typeof A.then == "function")
          return S(
            m,
            o,
            h,
            sn(A),
            Z
          );
        if (A.$$typeof === pt)
          return S(
            m,
            o,
            h,
            un(o, A),
            Z
          );
        rn(o, A);
      }
      return null;
    }
    function q(m, o, h, A) {
      for (var Z = null, rt = null, L = o, tt = o = 0, nt = null; L !== null && tt < h.length; tt++) {
        L.index > tt ? (nt = L, L = null) : nt = L.sibling;
        var ot = v(
          m,
          L,
          h[tt],
          A
        );
        if (ot === null) {
          L === null && (L = nt);
          break;
        }
        t && L && ot.alternate === null && l(m, L), o = n(ot, o, tt), rt === null ? Z = ot : rt.sibling = ot, rt = ot, L = nt;
      }
      if (tt === h.length)
        return e(m, L), it && Fl(m, tt), Z;
      if (L === null) {
        for (; tt < h.length; tt++)
          L = _(m, h[tt], A), L !== null && (o = n(
            L,
            o,
            tt
          ), rt === null ? Z = L : rt.sibling = L, rt = L);
        return it && Fl(m, tt), Z;
      }
      for (L = a(L); tt < h.length; tt++)
        nt = S(
          L,
          m,
          tt,
          h[tt],
          A
        ), nt !== null && (t && nt.alternate !== null && L.delete(
          nt.key === null ? tt : nt.key
        ), o = n(
          nt,
          o,
          tt
        ), rt === null ? Z = nt : rt.sibling = nt, rt = nt);
      return t && L.forEach(function(Be) {
        return l(m, Be);
      }), it && Fl(m, tt), Z;
    }
    function K(m, o, h, A) {
      if (h == null) throw Error(r(151));
      for (var Z = null, rt = null, L = o, tt = o = 0, nt = null, ot = h.next(); L !== null && !ot.done; tt++, ot = h.next()) {
        L.index > tt ? (nt = L, L = null) : nt = L.sibling;
        var Be = v(m, L, ot.value, A);
        if (Be === null) {
          L === null && (L = nt);
          break;
        }
        t && L && Be.alternate === null && l(m, L), o = n(Be, o, tt), rt === null ? Z = Be : rt.sibling = Be, rt = Be, L = nt;
      }
      if (ot.done)
        return e(m, L), it && Fl(m, tt), Z;
      if (L === null) {
        for (; !ot.done; tt++, ot = h.next())
          ot = _(m, ot.value, A), ot !== null && (o = n(ot, o, tt), rt === null ? Z = ot : rt.sibling = ot, rt = ot);
        return it && Fl(m, tt), Z;
      }
      for (L = a(L); !ot.done; tt++, ot = h.next())
        ot = S(L, m, tt, ot.value, A), ot !== null && (t && ot.alternate !== null && L.delete(ot.key === null ? tt : ot.key), o = n(ot, o, tt), rt === null ? Z = ot : rt.sibling = ot, rt = ot);
      return t && L.forEach(function(p0) {
        return l(m, p0);
      }), it && Fl(m, tt), Z;
    }
    function At(m, o, h, A) {
      if (typeof h == "object" && h !== null && h.type === ct && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case w:
            t: {
              for (var Z = h.key; o !== null; ) {
                if (o.key === Z) {
                  if (Z = h.type, Z === ct) {
                    if (o.tag === 7) {
                      e(
                        m,
                        o.sibling
                      ), A = u(
                        o,
                        h.props.children
                      ), A.return = m, m = A;
                      break t;
                    }
                  } else if (o.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === zt && ke(Z) === o.type) {
                    e(
                      m,
                      o.sibling
                    ), A = u(o, h.props), cu(A, h), A.return = m, m = A;
                    break t;
                  }
                  e(m, o);
                  break;
                } else l(m, o);
                o = o.sibling;
              }
              h.type === ct ? (A = Ze(
                h.props.children,
                m.mode,
                A,
                h.key
              ), A.return = m, m = A) : (A = ln(
                h.type,
                h.key,
                h.props,
                null,
                m.mode,
                A
              ), cu(A, h), A.return = m, m = A);
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
                    ), A = u(o, h.children || []), A.return = m, m = A;
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
          case zt:
            return h = ke(h), At(
              m,
              o,
              h,
              A
            );
        }
        if (nl(h))
          return q(
            m,
            o,
            h,
            A
          );
        if (ll(h)) {
          if (Z = ll(h), typeof Z != "function") throw Error(r(150));
          return h = Z.call(h), K(
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
            sn(h),
            A
          );
        if (h.$$typeof === pt)
          return At(
            m,
            o,
            un(m, h),
            A
          );
        rn(m, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, o !== null && o.tag === 6 ? (e(m, o.sibling), A = u(o, h), A.return = m, m = A) : (e(m, o), A = xi(h, m.mode, A), A.return = m, m = A), i(m)) : e(m, o);
    }
    return function(m, o, h, A) {
      try {
        iu = 0;
        var Z = At(
          m,
          o,
          h,
          A
        );
        return za = null, Z;
      } catch (L) {
        if (L === Aa || L === cn) throw L;
        var rt = bl(29, L, null, m.mode);
        return rt.lanes = A, rt.return = m, rt;
      }
    };
  }
  var Fe = Zs(!0), Vs = Zs(!1), Se = !1;
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
      var u = a.pending;
      return u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l, l = tn(t), Os(t, null, e), l;
    }
    return Pu(t, a, l, e), tn(t);
  }
  function fu(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Bf(t, e);
    }
  }
  function wi(t, l) {
    var e = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var u = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = i : n = n.next = i, e = e.next;
        } while (e !== null);
        n === null ? u = n = l : n = n.next = l;
      } else u = n = l;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var ki = !1;
  function su() {
    if (ki) {
      var t = Ta;
      if (t !== null) throw t;
    }
  }
  function ru(t, l, e, a) {
    ki = !1;
    var u = t.updateQueue;
    Se = !1;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var s = c, y = s.next;
      s.next = null, i === null ? n = y : i.next = y, i = s;
      var E = t.alternate;
      E !== null && (E = E.updateQueue, c = E.lastBaseUpdate, c !== i && (c === null ? E.firstBaseUpdate = y : c.next = y, E.lastBaseUpdate = s));
    }
    if (n !== null) {
      var _ = u.baseState;
      i = 0, E = y = s = null, c = n;
      do {
        var v = c.lane & -536870913, S = v !== c.lane;
        if (S ? (ut & v) === v : (a & v) === v) {
          v !== 0 && v === Ea && (ki = !0), E !== null && (E = E.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var q = t, K = c;
            v = l;
            var At = e;
            switch (K.tag) {
              case 1:
                if (q = K.payload, typeof q == "function") {
                  _ = q.call(At, _, v);
                  break t;
                }
                _ = q;
                break t;
              case 3:
                q.flags = q.flags & -65537 | 128;
              case 0:
                if (q = K.payload, v = typeof q == "function" ? q.call(At, _, v) : q, v == null) break t;
                _ = x({}, _, v);
                break t;
              case 2:
                Se = !0;
            }
          }
          v = c.callback, v !== null && (t.flags |= 64, S && (t.flags |= 8192), S = u.callbacks, S === null ? u.callbacks = [v] : S.push(v));
        } else
          S = {
            lane: v,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, E === null ? (y = E = S, s = _) : E = E.next = S, i |= v;
        if (c = c.next, c === null) {
          if (c = u.shared.pending, c === null)
            break;
          S = c, c = S.next, S.next = null, u.lastBaseUpdate = S, u.shared.pending = null;
        }
      } while (!0);
      E === null && (s = _), u.baseState = s, u.firstBaseUpdate = y, u.lastBaseUpdate = E, n === null && (u.shared.lanes = 0), _e |= i, t.lanes = i, t.memoizedState = _;
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
  var _a = d(null), on = d(0);
  function ws(t, l) {
    t = ce, N(on, t), N(_a, l), ce = t | l.baseLanes;
  }
  function $i() {
    N(on, ce), N(_a, _a.current);
  }
  function Fi() {
    ce = on.current, z(_a), z(on);
  }
  var pl = d(null), xl = null;
  function Ee(t) {
    var l = t.alternate;
    N(jt, jt.current & 1), N(pl, t), xl === null && (l === null || _a.current !== null || l.memoizedState !== null) && (xl = t);
  }
  function Wi(t) {
    N(jt, jt.current), N(pl, t), xl === null && (xl = t);
  }
  function ks(t) {
    t.tag === 22 ? (N(jt, jt.current), N(pl, t), xl === null && (xl = t)) : Te();
  }
  function Te() {
    N(jt, jt.current), N(pl, pl.current);
  }
  function El(t) {
    z(pl), xl === t && (xl = null), z(jt);
  }
  var jt = d(0);
  function dn(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || af(e) || uf(e)))
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
  var Pl = 0, I = null, Et = null, Gt = null, mn = !1, Da = !1, We = !1, hn = 0, ou = 0, Oa = null, rh = 0;
  function Rt() {
    throw Error(r(321));
  }
  function Ii(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!Sl(t[e], l[e])) return !1;
    return !0;
  }
  function Pi(t, l, e, a, u, n) {
    return Pl = n, I = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, T.H = t === null || t.memoizedState === null ? Rr : hc, We = !1, n = e(a, u), We = !1, Da && (n = Fs(
      l,
      e,
      a,
      u
    )), $s(t), n;
  }
  function $s(t) {
    T.H = hu;
    var l = Et !== null && Et.next !== null;
    if (Pl = 0, Gt = Et = I = null, mn = !1, ou = 0, Oa = null, l) throw Error(r(300));
    t === null || Xt || (t = t.dependencies, t !== null && an(t) && (Xt = !0));
  }
  function Fs(t, l, e, a) {
    I = t;
    var u = 0;
    do {
      if (Da && (Oa = null), ou = 0, Da = !1, 25 <= u) throw Error(r(301));
      if (u += 1, Gt = Et = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      T.H = xr, n = l(e, a);
    } while (Da);
    return n;
  }
  function oh() {
    var t = T.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? du(l) : l, t = t.useState()[0], (Et !== null ? Et.memoizedState : null) !== t && (I.flags |= 1024), l;
  }
  function tc() {
    var t = hn !== 0;
    return hn = 0, t;
  }
  function lc(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function ec(t) {
    if (mn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      mn = !1;
    }
    Pl = 0, Gt = Et = I = null, Da = !1, ou = hn = 0, Oa = null;
  }
  function ul() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Gt === null ? I.memoizedState = Gt = t : Gt = Gt.next = t, Gt;
  }
  function qt() {
    if (Et === null) {
      var t = I.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Et.next;
    var l = Gt === null ? I.memoizedState : Gt.next;
    if (l !== null)
      Gt = l, Et = t;
    else {
      if (t === null)
        throw I.alternate === null ? Error(r(467)) : Error(r(310));
      Et = t, t = {
        memoizedState: Et.memoizedState,
        baseState: Et.baseState,
        baseQueue: Et.baseQueue,
        queue: Et.queue,
        next: null
      }, Gt === null ? I.memoizedState = Gt = t : Gt = Gt.next = t;
    }
    return Gt;
  }
  function yn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function du(t) {
    var l = ou;
    return ou += 1, Oa === null && (Oa = []), t = Xs(Oa, t, l), l = I, (Gt === null ? l.memoizedState : Gt.next) === null && (l = l.alternate, T.H = l === null || l.memoizedState === null ? Rr : hc), t;
  }
  function vn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return du(t);
      if (t.$$typeof === pt) return It(t);
    }
    throw Error(r(438, String(t)));
  }
  function ac(t) {
    var l = null, e = I.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var a = I.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
        data: a.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = yn(), I.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
        e[a] = Gl;
    return l.index++, e;
  }
  function te(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function gn(t) {
    var l = qt();
    return uc(l, Et, t);
  }
  function uc(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var u = t.baseQueue, n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        u.next = n.next, n.next = i;
      }
      l.baseQueue = u = n, a.pending = null;
    }
    if (n = t.baseState, u === null) t.memoizedState = n;
    else {
      l = u.next;
      var c = i = null, s = null, y = l, E = !1;
      do {
        var _ = y.lane & -536870913;
        if (_ !== y.lane ? (ut & _) === _ : (Pl & _) === _) {
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
            }), _ === Ea && (E = !0);
          else if ((Pl & v) === v) {
            y = y.next, v === Ea && (E = !0);
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
            }, s === null ? (c = s = _, i = n) : s = s.next = _, I.lanes |= v, _e |= v;
          _ = y.action, We && e(n, _), n = y.hasEagerState ? y.eagerState : e(n, _);
        } else
          v = {
            lane: _,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, s === null ? (c = s = v, i = n) : s = s.next = v, I.lanes |= _, _e |= _;
        y = y.next;
      } while (y !== null && y !== l);
      if (s === null ? i = n : s.next = c, !Sl(n, t.memoizedState) && (Xt = !0, E && (e = Ta, e !== null)))
        throw e;
      t.memoizedState = n, t.baseState = i, t.baseQueue = s, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function nc(t) {
    var l = qt(), e = l.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch, u = e.pending, n = l.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = u = u.next;
      do
        n = t(n, i.action), i = i.next;
      while (i !== u);
      Sl(n, l.memoizedState) || (Xt = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function Ws(t, l, e) {
    var a = I, u = qt(), n = it;
    if (n) {
      if (e === void 0) throw Error(r(407));
      e = e();
    } else e = l();
    var i = !Sl(
      (Et || u).memoizedState,
      e
    );
    if (i && (u.memoizedState = e, Xt = !0), u = u.queue, fc(tr.bind(null, a, u, t), [
      t
    ]), u.getSnapshot !== l || i || Gt !== null && Gt.memoizedState.tag & 1) {
      if (a.flags |= 2048, Ma(
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
      ), _t === null) throw Error(r(349));
      n || (Pl & 127) !== 0 || Is(a, l, e);
    }
    return e;
  }
  function Is(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = I.updateQueue, l === null ? (l = yn(), I.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
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
      return !Sl(t, e);
    } catch {
      return !0;
    }
  }
  function er(t) {
    var l = Le(t, 2);
    l !== null && dl(l, t, 2);
  }
  function ic(t) {
    var l = ul();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), We) {
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
      lastRenderedReducer: te,
      lastRenderedState: t
    }, l;
  }
  function ar(t, l, e, a) {
    return t.baseState = e, uc(
      t,
      Et,
      typeof a == "function" ? a : te
    );
  }
  function dh(t, l, e, a, u) {
    if (pn(t)) throw Error(r(485));
    if (t = l.action, t !== null) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          n.listeners.push(i);
        }
      };
      T.T !== null ? e(!0) : n.isTransition = !1, a(n), e = l.pending, e === null ? (n.next = l.pending = n, ur(l, n)) : (n.next = e.next, l.pending = e.next = n);
    }
  }
  function ur(t, l) {
    var e = l.action, a = l.payload, u = t.state;
    if (l.isTransition) {
      var n = T.T, i = {};
      T.T = i;
      try {
        var c = e(u, a), s = T.S;
        s !== null && s(i, c), nr(t, l, c);
      } catch (y) {
        cc(t, l, y);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), T.T = n;
      }
    } else
      try {
        n = e(u, a), nr(t, l, n);
      } catch (y) {
        cc(t, l, y);
      }
  }
  function nr(t, l, e) {
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
    l.status = "fulfilled", l.value = e, cr(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, ur(t, e)));
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
    if (it) {
      var e = _t.formState;
      if (e !== null) {
        t: {
          var a = I;
          if (it) {
            if (Dt) {
              l: {
                for (var u = Dt, n = Rl; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break l;
                  }
                  if (u = Cl(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break l;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                Dt = Cl(
                  u.nextSibling
                ), a = u.data === "F!";
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
      I,
      a
    ), a.dispatch = e, a = ic(!1), n = mc.bind(
      null,
      I,
      !1,
      a.queue
    ), a = ul(), u = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = u, e = dh.bind(
      null,
      I,
      u,
      n,
      e
    ), u.dispatch = e, a.memoizedState = t, [l, e, !1];
  }
  function rr(t) {
    var l = qt();
    return or(l, Et, t);
  }
  function or(t, l, e) {
    if (l = uc(
      t,
      l,
      fr
    )[0], t = gn(te)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = du(l);
      } catch (i) {
        throw i === Aa ? cn : i;
      }
    else a = l;
    l = qt();
    var u = l.queue, n = u.dispatch;
    return e !== l.memoizedState && (I.flags |= 2048, Ma(
      9,
      { destroy: void 0 },
      mh.bind(null, u, e),
      null
    )), [a, n, t];
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
  function Ma(t, l, e, a) {
    return t = { tag: t, create: e, deps: a, inst: l, next: null }, l = I.updateQueue, l === null && (l = yn(), I.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
  }
  function mr() {
    return qt().memoizedState;
  }
  function Sn(t, l, e, a) {
    var u = ul();
    I.flags |= t, u.memoizedState = Ma(
      1 | l,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function bn(t, l, e, a) {
    var u = qt();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    Et !== null && a !== null && Ii(a, Et.memoizedState.deps) ? u.memoizedState = Ma(l, n, e, a) : (I.flags |= t, u.memoizedState = Ma(
      1 | l,
      n,
      e,
      a
    ));
  }
  function hr(t, l) {
    Sn(8390656, 8, t, l);
  }
  function fc(t, l) {
    bn(2048, 8, t, l);
  }
  function hh(t) {
    I.flags |= 4;
    var l = I.updateQueue;
    if (l === null)
      l = yn(), I.updateQueue = l, l.events = [t];
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
    return bn(4, 2, t, l);
  }
  function gr(t, l) {
    return bn(4, 4, t, l);
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
    e = e != null ? e.concat([t]) : null, bn(4, 4, Sr.bind(null, l, t), e);
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
    if (a = t(), We) {
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
    return e === void 0 || (Pl & 1073741824) !== 0 && (ut & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = Ao(), I.lanes |= t, _e |= t, e);
  }
  function Tr(t, l, e, a) {
    return Sl(e, l) ? e : _a.current !== null ? (t = rc(t, e, a), Sl(t, l) || (Xt = !0), t) : (Pl & 42) === 0 || (Pl & 1073741824) !== 0 && (ut & 261930) === 0 ? (Xt = !0, t.memoizedState = e) : (t = Ao(), I.lanes |= t, _e |= t, l);
  }
  function Ar(t, l, e, a, u) {
    var n = B.p;
    B.p = n !== 0 && 8 > n ? n : 8;
    var i = T.T, c = {};
    T.T = c, mc(t, !1, l, e);
    try {
      var s = u(), y = T.S;
      if (y !== null && y(c, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var E = sh(
          s,
          a
        );
        mu(
          t,
          l,
          E,
          zl(t)
        );
      } else
        mu(
          t,
          l,
          a,
          zl(t)
        );
    } catch (_) {
      mu(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: _ },
        zl()
      );
    } finally {
      B.p = n, i !== null && c.types !== null && (i.types = c.types), T.T = i;
    }
  }
  function yh() {
  }
  function oc(t, l, e, a) {
    if (t.tag !== 5) throw Error(r(476));
    var u = zr(t).queue;
    Ar(
      t,
      u,
      l,
      J,
      e === null ? yh : function() {
        return _r(t), e(a);
      }
    );
  }
  function zr(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: te,
        lastRenderedState: J
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
        lastRenderedReducer: te,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function _r(t) {
    var l = zr(t);
    l.next === null && (l = t.alternate.memoizedState), mu(
      t,
      l.next.queue,
      {},
      zl()
    );
  }
  function dc() {
    return It(Nu);
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
          var e = zl();
          t = be(e);
          var a = pe(l, t, e);
          a !== null && (dl(a, l, e), fu(a, l, e)), l = { cache: Qi() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function gh(t, l, e) {
    var a = zl();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, pn(t) ? Ur(l, e) : (e = Ni(t, l, e, a), e !== null && (dl(e, t, a), Nr(e, l, a)));
  }
  function Mr(t, l, e) {
    var a = zl();
    mu(t, l, e, a);
  }
  function mu(t, l, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (pn(t)) Ur(l, u);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
        try {
          var i = l.lastRenderedState, c = n(i, e);
          if (u.hasEagerState = !0, u.eagerState = c, Sl(c, i))
            return Pu(t, l, u, 0), _t === null && Iu(), !1;
        } catch {
        }
      if (e = Ni(t, l, u, a), e !== null)
        return dl(e, t, a), Nr(e, l, a), !0;
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
    }, pn(t)) {
      if (l) throw Error(r(479));
    } else
      l = Ni(
        t,
        e,
        a,
        2
      ), l !== null && dl(l, t, 2);
  }
  function pn(t) {
    var l = t.alternate;
    return t === I || l !== null && l === I;
  }
  function Ur(t, l) {
    Da = mn = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function Nr(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Bf(t, e);
    }
  }
  var hu = {
    readContext: It,
    use: vn,
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
  hu.useEffectEvent = Rt;
  var Rr = {
    readContext: It,
    use: vn,
    useCallback: function(t, l) {
      return ul().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: It,
    useEffect: hr,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, Sn(
        4194308,
        4,
        Sr.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return Sn(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      Sn(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = ul();
      l = l === void 0 ? null : l;
      var a = t();
      if (We) {
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
        var u = e(l);
        if (We) {
          oe(!0);
          try {
            e(l);
          } finally {
            oe(!1);
          }
        }
      } else u = l;
      return a.memoizedState = a.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, a.queue = t, t = t.dispatch = gh.bind(
        null,
        I,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var l = ul();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = ic(t);
      var l = t.queue, e = Mr.bind(null, I, l);
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
        I,
        t.queue,
        !0,
        !1
      ), ul().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var a = I, u = ul();
      if (it) {
        if (e === void 0)
          throw Error(r(407));
        e = e();
      } else {
        if (e = l(), _t === null)
          throw Error(r(349));
        (ut & 127) !== 0 || Is(a, l, e);
      }
      u.memoizedState = e;
      var n = { value: e, getSnapshot: l };
      return u.queue = n, hr(tr.bind(null, a, n, t), [
        t
      ]), a.flags |= 2048, Ma(
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
      ), e;
    },
    useId: function() {
      var t = ul(), l = _t.identifierPrefix;
      if (it) {
        var e = Ll, a = Ql;
        e = (a & ~(1 << 32 - gl(a) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = hn++, 0 < e && (l += "H" + e.toString(32)), l += "_";
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
        I,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: ac,
    useCacheRefresh: function() {
      return ul().memoizedState = vh.bind(
        null,
        I
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
    readContext: It,
    use: vn,
    useCallback: pr,
    useContext: It,
    useEffect: fc,
    useImperativeHandle: br,
    useInsertionEffect: vr,
    useLayoutEffect: gr,
    useMemo: Er,
    useReducer: gn,
    useRef: mr,
    useState: function() {
      return gn(te);
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
      var t = gn(te)[0], l = qt().memoizedState;
      return [
        typeof t == "boolean" ? t : du(t),
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
    readContext: It,
    use: vn,
    useCallback: pr,
    useContext: It,
    useEffect: fc,
    useImperativeHandle: br,
    useInsertionEffect: vr,
    useLayoutEffect: gr,
    useMemo: Er,
    useReducer: nc,
    useRef: mr,
    useState: function() {
      return nc(te);
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
      var t = nc(te)[0], l = qt().memoizedState;
      return [
        typeof t == "boolean" ? t : du(t),
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
      var a = zl(), u = be(a);
      u.payload = l, e != null && (u.callback = e), l = pe(t, u, a), l !== null && (dl(l, t, a), fu(l, t, a));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var a = zl(), u = be(a);
      u.tag = 1, u.payload = l, e != null && (u.callback = e), l = pe(t, u, a), l !== null && (dl(l, t, a), fu(l, t, a));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = zl(), a = be(e);
      a.tag = 2, l != null && (a.callback = l), l = pe(t, a, e), l !== null && (dl(l, t, e), fu(l, t, e));
    }
  };
  function Cr(t, l, e, a, u, n, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, i) : l.prototype && l.prototype.isPureReactComponent ? !tu(e, a) || !tu(u, n) : !0;
  }
  function Hr(t, l, e, a) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && vc.enqueueReplaceState(l, l.state, null);
  }
  function Ie(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l)
        a !== "ref" && (e[a] = l[a]);
    }
    if (t = t.defaultProps) {
      e === l && (e = x({}, e));
      for (var u in t)
        e[u] === void 0 && (e[u] = t[u]);
    }
    return e;
  }
  function Br(t) {
    Wu(t);
  }
  function jr(t) {
    console.error(t);
  }
  function qr(t) {
    Wu(t);
  }
  function En(t, l) {
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
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function gc(t, l, e) {
    return e = be(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      En(t, l);
    }, e;
  }
  function Gr(t) {
    return t = be(t), t.tag = 3, t;
  }
  function Xr(t, l, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      t.payload = function() {
        return u(n);
      }, t.callback = function() {
        Yr(l, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      Yr(l, e, a), typeof u != "function" && (De === null ? De = /* @__PURE__ */ new Set([this]) : De.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Sh(t, l, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = e.alternate, l !== null && pa(
        l,
        e,
        u,
        !0
      ), e = pl.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return xl === null ? Cn() : e.alternate === null && xt === 0 && (xt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === fn ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Lc(t, a, u)), !1;
          case 22:
            return e.flags |= 65536, a === fn ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Lc(t, a, u)), !1;
        }
        throw Error(r(435, e.tag));
      }
      return Lc(t, a, u), Cn(), !1;
    }
    if (it)
      return l = pl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, a !== ji && (t = Error(r(422), { cause: a }), au(Ml(t, e)))) : (a !== ji && (l = Error(r(423), {
        cause: a
      }), au(
        Ml(l, e)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = Ml(a, e), u = gc(
        t.stateNode,
        a,
        u
      ), wi(t, u), xt !== 4 && (xt = 2)), !1;
    var n = Error(r(520), { cause: a });
    if (n = Ml(n, e), Tu === null ? Tu = [n] : Tu.push(n), xt !== 4 && (xt = 2), l === null) return !0;
    a = Ml(a, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = u & -u, e.lanes |= t, t = gc(e.stateNode, a, t), wi(e, t), !1;
        case 1:
          if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (De === null || !De.has(n))))
            return e.flags |= 65536, u &= -u, e.lanes |= u, u = Gr(u), Xr(
              u,
              t,
              e,
              a
            ), wi(e, u), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Sc = Error(r(461)), Xt = !1;
  function Pt(t, l, e, a) {
    l.child = t === null ? Vs(l, null, e, a) : Fe(
      l,
      t.child,
      e,
      a
    );
  }
  function Qr(t, l, e, a, u) {
    e = e.render;
    var n = l.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a)
        c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return Je(l), a = Pi(
      t,
      l,
      e,
      i,
      n,
      u
    ), c = tc(), t !== null && !Xt ? (lc(t, l, u), le(t, l, u)) : (it && c && Hi(l), l.flags |= 1, Pt(t, l, a, u), l.child);
  }
  function Lr(t, l, e, a, u) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" && !Ri(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, Zr(
        t,
        l,
        n,
        a,
        u
      )) : (t = ln(
        e.type,
        null,
        a,
        l,
        l.mode,
        u
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (n = t.child, !Dc(t, u)) {
      var i = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : tu, e(i, a) && t.ref === l.ref)
        return le(t, l, u);
    }
    return l.flags |= 1, t = $l(n, a), t.ref = l.ref, t.return = l, l.child = t;
  }
  function Zr(t, l, e, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (tu(n, a) && t.ref === l.ref)
        if (Xt = !1, l.pendingProps = a = n, Dc(t, u))
          (t.flags & 131072) !== 0 && (Xt = !0);
        else
          return l.lanes = t.lanes, le(t, l, u);
    }
    return bc(
      t,
      l,
      e,
      a,
      u
    );
  }
  function Vr(t, l, e, a) {
    var u = a.children, n = t !== null ? t.memoizedState : null;
    if (t === null && l.stateNode === null && (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | e : e, t !== null) {
          for (a = l.child = t.child, u = 0; a !== null; )
            u = u | a.lanes | a.childLanes, a = a.sibling;
          a = u & ~n;
        } else a = 0, l.child = null;
        return Kr(
          t,
          l,
          n,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && nn(
          l,
          n !== null ? n.cachePool : null
        ), n !== null ? ws(l, n) : $i(), ks(l);
      else
        return a = l.lanes = 536870912, Kr(
          t,
          l,
          n !== null ? n.baseLanes | e : e,
          e,
          a
        );
    } else
      n !== null ? (nn(l, n.cachePool), ws(l, n), Te(), l.memoizedState = null) : (t !== null && nn(l, null), $i(), Te());
    return Pt(t, l, u, e), l.child;
  }
  function yu(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function Kr(t, l, e, a, u) {
    var n = Zi();
    return n = n === null ? null : { parent: Yt._currentValue, pool: n }, l.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, t !== null && nn(l, null), $i(), ks(l), t !== null && pa(t, l, a, !0), l.childLanes = u, null;
  }
  function Tn(t, l) {
    return l = zn(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Jr(t, l, e) {
    return Fe(l, t.child, null, e), t = Tn(l, l.pendingProps), t.flags |= 2, El(l), l.memoizedState = null, t;
  }
  function bh(t, l, e) {
    var a = l.pendingProps, u = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (it) {
        if (a.mode === "hidden")
          return t = Tn(l, a), l.lanes = 536870912, yu(null, t);
        if (Wi(l), (t = Dt) ? (t = nd(
          t,
          Rl
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: he !== null ? { id: Ql, overflow: Ll } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Us(t), e.return = l, l.child = e, Wt = l, Dt = null)) : t = null, t === null) throw ve(l);
        return l.lanes = 536870912, null;
      }
      return Tn(l, a);
    }
    var n = t.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (Wi(l), u)
        if (l.flags & 256)
          l.flags &= -257, l = Jr(
            t,
            l,
            e
          );
        else if (l.memoizedState !== null)
          l.child = t.child, l.flags |= 128, l = null;
        else throw Error(r(558));
      else if (Xt || pa(t, l, e, !1), u = (e & t.childLanes) !== 0, Xt || u) {
        if (a = _t, a !== null && (i = jf(a, e), i !== 0 && i !== n.retryLane))
          throw n.retryLane = i, Le(t, i), dl(a, t, i), Sc;
        Cn(), l = Jr(
          t,
          l,
          e
        );
      } else
        t = n.treeContext, Dt = Cl(i.nextSibling), Wt = l, it = !0, ye = null, Rl = !1, t !== null && xs(l, t), l = Tn(l, a), l.flags |= 4096;
      return l;
    }
    return t = $l(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function An(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(r(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function bc(t, l, e, a, u) {
    return Je(l), e = Pi(
      t,
      l,
      e,
      a,
      void 0,
      u
    ), a = tc(), t !== null && !Xt ? (lc(t, l, u), le(t, l, u)) : (it && a && Hi(l), l.flags |= 1, Pt(t, l, e, u), l.child);
  }
  function wr(t, l, e, a, u, n) {
    return Je(l), l.updateQueue = null, e = Fs(
      l,
      a,
      e,
      u
    ), $s(t), a = tc(), t !== null && !Xt ? (lc(t, l, n), le(t, l, n)) : (it && a && Hi(l), l.flags |= 1, Pt(t, l, e, n), l.child);
  }
  function kr(t, l, e, a, u) {
    if (Je(l), l.stateNode === null) {
      var n = va, i = e.contextType;
      typeof i == "object" && i !== null && (n = It(i)), n = new e(a, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = vc, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = a, n.state = l.memoizedState, n.refs = {}, Ki(l), i = e.contextType, n.context = typeof i == "object" && i !== null ? It(i) : va, n.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (yc(
        l,
        e,
        i,
        a
      ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && vc.enqueueReplaceState(n, n.state, null), ru(l, a, n, u), su(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (t === null) {
      n = l.stateNode;
      var c = l.memoizedProps, s = Ie(e, c);
      n.props = s;
      var y = n.context, E = e.contextType;
      i = va, typeof E == "object" && E !== null && (i = It(E));
      var _ = e.getDerivedStateFromProps;
      E = typeof _ == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, E || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== i) && Hr(
        l,
        n,
        a,
        i
      ), Se = !1;
      var v = l.memoizedState;
      n.state = v, ru(l, a, n, u), su(), y = l.memoizedState, c || v !== y || Se ? (typeof _ == "function" && (yc(
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
      )) ? (E || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = y), n.props = a, n.state = y, n.context = i, a = s) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      n = l.stateNode, Ji(t, l), i = l.memoizedProps, E = Ie(e, i), n.props = E, _ = l.pendingProps, v = n.context, y = e.contextType, s = va, typeof y == "object" && y !== null && (s = It(y)), c = e.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== _ || v !== s) && Hr(
        l,
        n,
        a,
        s
      ), Se = !1, v = l.memoizedState, n.state = v, ru(l, a, n, u), su();
      var S = l.memoizedState;
      i !== _ || v !== S || Se || t !== null && t.dependencies !== null && an(t.dependencies) ? (typeof c == "function" && (yc(
        l,
        e,
        c,
        a
      ), S = l.memoizedState), (E = Se || Cr(
        l,
        e,
        E,
        a,
        v,
        S,
        s
      ) || t !== null && t.dependencies !== null && an(t.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, S, s), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        S,
        s
      )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = S), n.props = a, n.state = S, n.context = s, a = E) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 1024), a = !1);
    }
    return n = a, An(t, l), a = (l.flags & 128) !== 0, n || a ? (n = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && a ? (l.child = Fe(
      l,
      t.child,
      null,
      u
    ), l.child = Fe(
      l,
      null,
      e,
      u
    )) : Pt(t, l, e, u), l.memoizedState = n.state, t = l.child) : t = le(
      t,
      l,
      u
    ), t;
  }
  function $r(t, l, e, a) {
    return Ve(), l.flags |= 256, Pt(t, l, e, a), l.child;
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
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= Al), t;
  }
  function Fr(t, l, e) {
    var a = l.pendingProps, u = !1, n = (l.flags & 128) !== 0, i;
    if ((i = n) || (i = t !== null && t.memoizedState === null ? !1 : (jt.current & 2) !== 0), i && (u = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (it) {
        if (u ? Ee(l) : Te(), (t = Dt) ? (t = nd(
          t,
          Rl
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: he !== null ? { id: Ql, overflow: Ll } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Us(t), e.return = l, l.child = e, Wt = l, Dt = null)) : t = null, t === null) throw ve(l);
        return uf(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, u ? (Te(), u = l.mode, c = zn(
        { mode: "hidden", children: c },
        u
      ), a = Ze(
        a,
        u,
        e,
        null
      ), c.return = l, a.return = l, c.sibling = a, l.child = c, a = l.child, a.memoizedState = Ec(e), a.childLanes = Tc(
        t,
        i,
        e
      ), l.memoizedState = pc, yu(null, a)) : (Ee(l), Ac(l, c));
    }
    var s = t.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (n)
        l.flags & 256 ? (Ee(l), l.flags &= -257, l = zc(
          t,
          l,
          e
        )) : l.memoizedState !== null ? (Te(), l.child = t.child, l.flags |= 128, l = null) : (Te(), c = a.fallback, u = l.mode, a = zn(
          { mode: "visible", children: a.children },
          u
        ), c = Ze(
          c,
          u,
          e,
          null
        ), c.flags |= 2, a.return = l, c.return = l, a.sibling = c, l.child = a, Fe(
          l,
          t.child,
          null,
          e
        ), a = l.child, a.memoizedState = Ec(e), a.childLanes = Tc(
          t,
          i,
          e
        ), l.memoizedState = pc, l = yu(null, a));
      else if (Ee(l), uf(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var y = i.dgst;
        i = y, a = Error(r(419)), a.stack = "", a.digest = i, au({ value: a, source: null, stack: null }), l = zc(
          t,
          l,
          e
        );
      } else if (Xt || pa(t, l, e, !1), i = (e & t.childLanes) !== 0, Xt || i) {
        if (i = _t, i !== null && (a = jf(i, e), a !== 0 && a !== s.retryLane))
          throw s.retryLane = a, Le(t, a), dl(i, t, a), Sc;
        af(c) || Cn(), l = zc(
          t,
          l,
          e
        );
      } else
        af(c) ? (l.flags |= 192, l.child = t.child, l = null) : (t = s.treeContext, Dt = Cl(
          c.nextSibling
        ), Wt = l, it = !0, ye = null, Rl = !1, t !== null && xs(l, t), l = Ac(
          l,
          a.children
        ), l.flags |= 4096);
      return l;
    }
    return u ? (Te(), c = a.fallback, u = l.mode, s = t.child, y = s.sibling, a = $l(s, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = s.subtreeFlags & 65011712, y !== null ? c = $l(
      y,
      c
    ) : (c = Ze(
      c,
      u,
      e,
      null
    ), c.flags |= 2), c.return = l, a.return = l, a.sibling = c, l.child = a, yu(null, a), a = l.child, c = t.child.memoizedState, c === null ? c = Ec(e) : (u = c.cachePool, u !== null ? (s = Yt._currentValue, u = u.parent !== s ? { parent: s, pool: s } : u) : u = Ys(), c = {
      baseLanes: c.baseLanes | e,
      cachePool: u
    }), a.memoizedState = c, a.childLanes = Tc(
      t,
      i,
      e
    ), l.memoizedState = pc, yu(t.child, a)) : (Ee(l), e = t.child, t = e.sibling, e = $l(e, {
      mode: "visible",
      children: a.children
    }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Ac(t, l) {
    return l = zn(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function zn(t, l) {
    return t = bl(22, t, null, l), t.lanes = 0, t;
  }
  function zc(t, l, e) {
    return Fe(l, t.child, null, e), t = Ac(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function Wr(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), Gi(t.return, l, e);
  }
  function _c(t, l, e, a, u, n) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: u,
      treeForkCount: n
    } : (i.isBackwards = l, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = e, i.tailMode = u, i.treeForkCount = n);
  }
  function Ir(t, l, e) {
    var a = l.pendingProps, u = a.revealOrder, n = a.tail;
    a = a.children;
    var i = jt.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, l.flags |= 128) : i &= 1, N(jt, i), Pt(t, l, a, e), a = it ? eu : 0, !c && t !== null && (t.flags & 128) !== 0)
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
    switch (u) {
      case "forwards":
        for (e = l.child, u = null; e !== null; )
          t = e.alternate, t !== null && dn(t) === null && (u = e), e = e.sibling;
        e = u, e === null ? (u = l.child, l.child = null) : (u = e.sibling, e.sibling = null), _c(
          l,
          !1,
          u,
          e,
          n,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, u = l.child, l.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && dn(t) === null) {
            l.child = u;
            break;
          }
          t = u.sibling, u.sibling = e, e = u, u = t;
        }
        _c(
          l,
          !0,
          e,
          null,
          n,
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
  function le(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), _e |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (pa(
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
      for (t = l.child, e = $l(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = $l(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function Dc(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && an(t)));
  }
  function ph(t, l, e) {
    switch (l.tag) {
      case 3:
        kt(l, l.stateNode.containerInfo), ge(l, Yt, t.memoizedState.cache), Ve();
        break;
      case 27:
      case 5:
        p(l);
        break;
      case 4:
        kt(l, l.stateNode.containerInfo);
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
          return a.dehydrated !== null ? (Ee(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? Fr(t, l, e) : (Ee(l), t = le(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        Ee(l);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (a = (e & l.childLanes) !== 0, a || (pa(
          t,
          l,
          e,
          !1
        ), a = (e & l.childLanes) !== 0), u) {
          if (a)
            return Ir(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), N(jt, jt.current), a) break;
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
    return le(t, l, e);
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
      Xt = !1, it && (l.flags & 1048576) !== 0 && Rs(l, eu, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var a = l.pendingProps;
          if (t = ke(l.elementType), l.type = t, typeof t == "function")
            Ri(t) ? (a = Ie(t, a), l.tag = 1, l = kr(
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
              var u = t.$$typeof;
              if (u === Vt) {
                l.tag = 11, l = Qr(
                  null,
                  l,
                  t,
                  a,
                  e
                );
                break t;
              } else if (u === P) {
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
            throw l = Bl(t) || t, Error(r(306, l, ""));
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
        return a = l.type, u = Ie(
          a,
          l.pendingProps
        ), kr(
          t,
          l,
          a,
          u,
          e
        );
      case 3:
        t: {
          if (kt(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          a = l.pendingProps;
          var n = l.memoizedState;
          u = n.element, Ji(t, l), ru(l, a, null, e);
          var i = l.memoizedState;
          if (a = i.cache, ge(l, Yt, a), a !== n.cache && Xi(
            l,
            [Yt],
            e,
            !0
          ), su(), a = i.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
              l = $r(
                t,
                l,
                a,
                e
              );
              break t;
            } else if (a !== u) {
              u = Ml(
                Error(r(424)),
                l
              ), au(u), l = $r(
                t,
                l,
                a,
                e
              );
              break t;
            } else
              for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Dt = Cl(t.firstChild), Wt = l, it = !0, ye = null, Rl = !0, e = Vs(
                l,
                null,
                a,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (Ve(), a === u) {
              l = le(
                t,
                l,
                e
              );
              break t;
            }
            Pt(t, l, a, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return An(t, l), t === null ? (e = od(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : it || (e = l.type, t = l.pendingProps, a = Xn(
          F.current
        ).createElement(e), a[Ft] = l, a[il] = t, tl(a, e, t), Kt(a), l.stateNode = a) : l.memoizedState = od(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return p(l), t === null && it && (a = l.stateNode = fd(
          l.type,
          l.pendingProps,
          F.current
        ), Wt = l, Rl = !0, u = Dt, Ne(l.type) ? (nf = u, Dt = Cl(a.firstChild)) : Dt = u), Pt(
          t,
          l,
          l.pendingProps.children,
          e
        ), An(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && it && ((u = a = Dt) && (a = Fh(
          a,
          l.type,
          l.pendingProps,
          Rl
        ), a !== null ? (l.stateNode = a, Wt = l, Dt = Cl(a.firstChild), Rl = !1, u = !0) : u = !1), u || ve(l)), p(l), u = l.type, n = l.pendingProps, i = t !== null ? t.memoizedProps : null, a = n.children, tf(u, n) ? a = null : i !== null && tf(u, i) && (l.flags |= 32), l.memoizedState !== null && (u = Pi(
          t,
          l,
          oh,
          null,
          null,
          e
        ), Nu._currentValue = u), An(t, l), Pt(t, l, a, e), l.child;
      case 6:
        return t === null && it && ((t = e = Dt) && (e = Wh(
          e,
          l.pendingProps,
          Rl
        ), e !== null ? (l.stateNode = e, Wt = l, Dt = null, t = !0) : t = !1), t || ve(l)), null;
      case 13:
        return Fr(t, l, e);
      case 4:
        return kt(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, t === null ? l.child = Fe(
          l,
          null,
          a,
          e
        ) : Pt(t, l, a, e), l.child;
      case 11:
        return Qr(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return Pt(
          t,
          l,
          l.pendingProps,
          e
        ), l.child;
      case 8:
        return Pt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return Pt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return a = l.pendingProps, ge(l, l.type, a.value), Pt(t, l, a.children, e), l.child;
      case 9:
        return u = l.type._context, a = l.pendingProps.children, Je(l), u = It(u), a = a(u), l.flags |= 1, Pt(t, l, a, e), l.child;
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
        return Je(l), a = It(Yt), t === null ? (u = Zi(), u === null && (u = _t, n = Qi(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), l.memoizedState = { parent: a, cache: u }, Ki(l), ge(l, Yt, u)) : ((t.lanes & e) !== 0 && (Ji(t, l), ru(l, null, null, e), su()), u = t.memoizedState, n = l.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), ge(l, Yt, a)) : (a = n.cache, ge(l, Yt, a), a !== u.cache && Xi(
          l,
          [Yt],
          e,
          !0
        ))), Pt(
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
  function ee(t) {
    t.flags |= 4;
  }
  function Oc(t, l, e, a, u) {
    if ((l = (t.mode & 32) !== 0) && (l = !1), l) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Oo()) t.flags |= 8192;
        else
          throw $e = fn, Vi;
    } else t.flags &= -16777217;
  }
  function to(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !vd(l))
      if (Oo()) t.flags |= 8192;
      else
        throw $e = fn, Vi;
  }
  function _n(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? Cf() : 536870912, t.lanes |= l, xa |= l);
  }
  function vu(t, l) {
    if (!it)
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
  function Ot(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
    if (l)
      for (var u = t.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = t, u = u.sibling;
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
        return Ot(l), null;
      case 1:
        return Ot(l), null;
      case 3:
        return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Il(Yt), Nt(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (ba(l) ? ee(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, qi())), Ot(l), null;
      case 26:
        var u = l.type, n = l.memoizedState;
        return t === null ? (ee(l), n !== null ? (Ot(l), to(l, n)) : (Ot(l), Oc(
          l,
          u,
          null,
          a,
          e
        ))) : n ? n !== t.memoizedState ? (ee(l), Ot(l), to(l, n)) : (Ot(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== a && ee(l), Ot(l), Oc(
          l,
          u,
          t,
          a,
          e
        )), null;
      case 27:
        if (R(l), e = F.current, u = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && ee(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return Ot(l), null;
          }
          t = G.current, ba(l) ? Cs(l) : (t = fd(u, a, e), l.stateNode = t, ee(l));
        }
        return Ot(l), null;
      case 5:
        if (R(l), u = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && ee(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return Ot(l), null;
          }
          if (n = G.current, ba(l))
            Cs(l);
          else {
            var i = Xn(
              F.current
            );
            switch (n) {
              case 1:
                n = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                n = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof a.is == "string" ? i.createElement("select", {
                      is: a.is
                    }) : i.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? i.createElement(u, { is: a.is }) : i.createElement(u);
                }
            }
            n[Ft] = l, n[il] = a;
            t: for (i = l.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                n.appendChild(i.stateNode);
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
            l.stateNode = n;
            t: switch (tl(n, u, a), u) {
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
            a && ee(l);
          }
        }
        return Ot(l), Oc(
          l,
          l.type,
          t === null ? null : t.memoizedProps,
          l.pendingProps,
          e
        ), null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== a && ee(l);
        else {
          if (typeof a != "string" && l.stateNode === null)
            throw Error(r(166));
          if (t = F.current, ba(l)) {
            if (t = l.stateNode, e = l.memoizedProps, a = null, u = Wt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            t[Ft] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Wo(t.nodeValue, e)), t || ve(l, !0);
          } else
            t = Xn(t).createTextNode(
              a
            ), t[Ft] = l, l.stateNode = t;
        }
        return Ot(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (a = ba(l), e !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[Ft] = l;
            } else
              Ve(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Ot(l), t = !1;
          } else
            e = qi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (El(l), l) : (El(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Ot(l), null;
      case 13:
        if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = ba(l), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
              u[Ft] = l;
            } else
              Ve(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Ot(l), u = !1;
          } else
            u = qi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return l.flags & 256 ? (El(l), l) : (El(l), null);
        }
        return El(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = a !== null, t = t !== null && t.memoizedState !== null, e && (a = l.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), _n(l, l.updateQueue), Ot(l), null);
      case 4:
        return Nt(), t === null && $c(l.stateNode.containerInfo), Ot(l), null;
      case 10:
        return Il(l.type), Ot(l), null;
      case 19:
        if (z(jt), a = l.memoizedState, a === null) return Ot(l), null;
        if (u = (l.flags & 128) !== 0, n = a.rendering, n === null)
          if (u) vu(a, !1);
          else {
            if (xt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (n = dn(t), n !== null) {
                  for (l.flags |= 128, vu(a, !1), t = n.updateQueue, l.updateQueue = t, _n(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    Ms(e, t), e = e.sibling;
                  return N(
                    jt,
                    jt.current & 1 | 2
                  ), it && Fl(l, a.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            a.tail !== null && yl() > Nn && (l.flags |= 128, u = !0, vu(a, !1), l.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = dn(n), t !== null) {
              if (l.flags |= 128, u = !0, t = t.updateQueue, l.updateQueue = t, _n(l, t), vu(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !it)
                return Ot(l), null;
            } else
              2 * yl() - a.renderingStartTime > Nn && e !== 536870912 && (l.flags |= 128, u = !0, vu(a, !1), l.lanes = 4194304);
          a.isBackwards ? (n.sibling = l.child, l.child = n) : (t = a.last, t !== null ? t.sibling = n : l.child = n, a.last = n);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = yl(), t.sibling = null, e = jt.current, N(
          jt,
          u ? e & 1 | 2 : e & 1
        ), it && Fl(l, a.treeForkCount), t) : (Ot(l), null);
      case 22:
      case 23:
        return El(l), Fi(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Ot(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Ot(l), e = l.updateQueue, e !== null && _n(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && z(we), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Il(Yt), Ot(l), null;
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
        return Il(Yt), Nt(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return R(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (El(l), l.alternate === null)
            throw Error(r(340));
          Ve();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (El(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(r(340));
          Ve();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return z(jt), null;
      case 4:
        return Nt(), null;
      case 10:
        return Il(l.type), null;
      case 22:
      case 23:
        return El(l), Fi(), t !== null && z(we), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Il(Yt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function lo(t, l) {
    switch (Bi(l), l.tag) {
      case 3:
        Il(Yt), Nt();
        break;
      case 26:
      case 27:
      case 5:
        R(l);
        break;
      case 4:
        Nt();
        break;
      case 31:
        l.memoizedState !== null && El(l);
        break;
      case 13:
        El(l);
        break;
      case 19:
        z(jt);
        break;
      case 10:
        Il(l.type);
        break;
      case 22:
      case 23:
        El(l), Fi(), t !== null && z(we);
        break;
      case 24:
        Il(Yt);
    }
  }
  function gu(t, l) {
    try {
      var e = l.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var n = e.create, i = e.inst;
            a = n(), i.destroy = a;
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (c) {
      bt(l, l.return, c);
    }
  }
  function Ae(t, l, e) {
    try {
      var a = l.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, u = l;
              var s = e, y = c;
              try {
                y();
              } catch (E) {
                bt(
                  u,
                  s,
                  E
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
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
    e.props = Ie(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      bt(t, l, a);
    }
  }
  function Su(t, l) {
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
    } catch (u) {
      bt(t, l, u);
    }
  }
  function Zl(t, l) {
    var e = t.ref, a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          bt(t, l, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          bt(t, l, u);
        }
      else e.current = null;
  }
  function uo(t) {
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
    } catch (u) {
      bt(t, t.return, u);
    }
  }
  function Mc(t, l, e) {
    try {
      var a = t.stateNode;
      Vh(a, t.type, e, l), a[il] = l;
    } catch (u) {
      bt(t, t.return, u);
    }
  }
  function no(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ne(t.type) || t.tag === 4;
  }
  function Uc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || no(t.return)) return null;
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
      t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = wl));
    else if (a !== 4 && (a === 27 && Ne(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null))
      for (Nc(t, l, e), t = t.sibling; t !== null; )
        Nc(t, l, e), t = t.sibling;
  }
  function Dn(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (a !== 4 && (a === 27 && Ne(t.type) && (e = t.stateNode), t = t.child, t !== null))
      for (Dn(t, l, e), t = t.sibling; t !== null; )
        Dn(t, l, e), t = t.sibling;
  }
  function io(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var a = t.type, u = l.attributes; u.length; )
        l.removeAttributeNode(u[0]);
      tl(l, a, e), l[Ft] = t, l[il] = e;
    } catch (n) {
      bt(t, t.return, n);
    }
  }
  var ae = !1, Qt = !1, Rc = !1, co = typeof WeakSet == "function" ? WeakSet : Set, Jt = null;
  function Ah(t, l) {
    if (t = t.containerInfo, Ic = wn, t = bs(t), zi(t)) {
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
            var u = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break t;
            }
            var i = 0, c = -1, s = -1, y = 0, E = 0, _ = t, v = null;
            l: for (; ; ) {
              for (var S; _ !== e || u !== 0 && _.nodeType !== 3 || (c = i + u), _ !== n || a !== 0 && _.nodeType !== 3 || (s = i + a), _.nodeType === 3 && (i += _.nodeValue.length), (S = _.firstChild) !== null; )
                v = _, _ = S;
              for (; ; ) {
                if (_ === t) break l;
                if (v === e && ++y === u && (c = i), v === n && ++E === a && (s = i), (S = _.nextSibling) !== null) break;
                _ = v, v = _.parentNode;
              }
              _ = S;
            }
            e = c === -1 || s === -1 ? null : { start: c, end: s };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (Pc = { focusedElem: t, selectionRange: e }, wn = !1, Jt = l; Jt !== null; )
      if (l = Jt, t = l.child, (l.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = l, Jt = t;
      else
        for (; Jt !== null; ) {
          switch (l = Jt, n = l.alternate, t = l.flags, l.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = l.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (e = 0; e < t.length; e++)
                  u = t[e], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                t = void 0, e = l, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
                try {
                  var q = Ie(
                    e.type,
                    u
                  );
                  t = a.getSnapshotBeforeUpdate(
                    q,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (K) {
                  bt(
                    e,
                    e.return,
                    K
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
            t.return = l.return, Jt = t;
            break;
          }
          Jt = l.return;
        }
  }
  function fo(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ne(t, e), a & 4 && gu(5, e);
        break;
      case 1:
        if (ne(t, e), a & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (i) {
              bt(e, e.return, i);
            }
          else {
            var u = Ie(
              e.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                u,
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
        a & 64 && eo(e), a & 512 && Su(e, e.return);
        break;
      case 3:
        if (ne(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
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
        ne(t, e), l === null && a & 4 && uo(e), a & 512 && Su(e, e.return);
        break;
      case 12:
        ne(t, e);
        break;
      case 31:
        ne(t, e), a & 4 && oo(t, e);
        break;
      case 13:
        ne(t, e), a & 4 && mo(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = xh.bind(
          null,
          e
        ), Ih(t, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || ae, !a) {
          l = l !== null && l.memoizedState !== null || Qt, u = ae;
          var n = Qt;
          ae = a, (Qt = l) && !n ? ie(
            t,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : ne(t, e), ae = u, Qt = n;
        }
        break;
      case 30:
        break;
      default:
        ne(t, e);
    }
  }
  function so(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, so(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && ci(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ut = null, fl = !1;
  function ue(t, l, e) {
    for (e = e.child; e !== null; )
      ro(t, l, e), e = e.sibling;
  }
  function ro(t, l, e) {
    if (vl && typeof vl.onCommitFiberUnmount == "function")
      try {
        vl.onCommitFiberUnmount(La, e);
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
        var a = Ut, u = fl;
        Ne(e.type) && (Ut = e.stateNode, fl = !1), ue(
          t,
          l,
          e
        ), Ou(e.stateNode), Ut = a, fl = u;
        break;
      case 5:
        Qt || Zl(e, l);
      case 6:
        if (a = Ut, u = fl, Ut = null, ue(
          t,
          l,
          e
        ), Ut = a, fl = u, Ut !== null)
          if (fl)
            try {
              (Ut.nodeType === 9 ? Ut.body : Ut.nodeName === "HTML" ? Ut.ownerDocument.body : Ut).removeChild(e.stateNode);
            } catch (n) {
              bt(
                e,
                l,
                n
              );
            }
          else
            try {
              Ut.removeChild(e.stateNode);
            } catch (n) {
              bt(
                e,
                l,
                n
              );
            }
        break;
      case 18:
        Ut !== null && (fl ? (t = Ut, ad(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), Xa(t)) : ad(Ut, e.stateNode));
        break;
      case 4:
        a = Ut, u = fl, Ut = e.stateNode.containerInfo, fl = !0, ue(
          t,
          l,
          e
        ), Ut = a, fl = u;
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
        Xa(t);
      } catch (e) {
        bt(l, l.return, e);
      }
    }
  }
  function mo(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Xa(t);
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
  function On(t, l) {
    var e = zh(t);
    l.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var u = Ch.bind(null, t, a);
        a.then(u, u);
      }
    });
  }
  function sl(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a], n = t, i = l, c = i;
        t: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Ne(c.type)) {
                Ut = c.stateNode, fl = !1;
                break t;
              }
              break;
            case 5:
              Ut = c.stateNode, fl = !1;
              break t;
            case 3:
            case 4:
              Ut = c.stateNode.containerInfo, fl = !0;
              break t;
          }
          c = c.return;
        }
        if (Ut === null) throw Error(r(160));
        ro(n, i, u), Ut = null, fl = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        ho(l, t), l = l.sibling;
  }
  var ql = null;
  function ho(t, l) {
    var e = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        sl(l, t), rl(t), a & 4 && (Ae(3, t, t.return), gu(3, t), Ae(5, t, t.return));
        break;
      case 1:
        sl(l, t), rl(t), a & 512 && (Qt || e === null || Zl(e, e.return)), a & 64 && ae && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var u = ql;
        if (sl(l, t), rl(t), a & 512 && (Qt || e === null || Zl(e, e.return)), a & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (a = t.memoizedState, e === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, e = t.memoizedProps, u = u.ownerDocument || u;
                  l: switch (a) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[Ka] || n[Ft] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), tl(n, a, e), n[Ft] = t, Kt(n), a = n;
                      break t;
                    case "link":
                      var i = hd(
                        "link",
                        "href",
                        u
                      ).get(a + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (n = i[c], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(c, 1);
                            break l;
                          }
                      }
                      n = u.createElement(a), tl(n, a, e), u.head.appendChild(n);
                      break;
                    case "meta":
                      if (i = hd(
                        "meta",
                        "content",
                        u
                      ).get(a + (e.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (n = i[c], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(c, 1);
                            break l;
                          }
                      }
                      n = u.createElement(a), tl(n, a, e), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  n[Ft] = t, Kt(n), a = n;
                }
                t.stateNode = a;
              } else
                yd(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = md(
                u,
                a,
                t.memoizedProps
              );
          else
            n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? yd(
              u,
              t.type,
              t.stateNode
            ) : md(
              u,
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
        sl(l, t), rl(t), a & 512 && (Qt || e === null || Zl(e, e.return)), e !== null && a & 4 && Mc(
          t,
          t.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (sl(l, t), rl(t), a & 512 && (Qt || e === null || Zl(e, e.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            sa(u, "");
          } catch (q) {
            bt(t, t.return, q);
          }
        }
        a & 4 && t.stateNode != null && (u = t.memoizedProps, Mc(
          t,
          u,
          e !== null ? e.memoizedProps : u
        )), a & 1024 && (Rc = !0);
        break;
      case 6:
        if (sl(l, t), rl(t), a & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          a = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = a;
          } catch (q) {
            bt(t, t.return, q);
          }
        }
        break;
      case 3:
        if (Zn = null, u = ql, ql = Qn(l.containerInfo), sl(l, t), ql = u, rl(t), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Xa(l.containerInfo);
          } catch (q) {
            bt(t, t.return, q);
          }
        Rc && (Rc = !1, yo(t));
        break;
      case 4:
        a = ql, ql = Qn(
          t.stateNode.containerInfo
        ), sl(l, t), rl(t), ql = a;
        break;
      case 12:
        sl(l, t), rl(t);
        break;
      case 31:
        sl(l, t), rl(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, On(t, a)));
        break;
      case 13:
        sl(l, t), rl(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Un = yl()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, On(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null, y = ae, E = Qt;
        if (ae = y || u, Qt = E || s, sl(l, t), Qt = E, ae = y, rl(t), a & 8192)
          t: for (l = t.stateNode, l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (e === null || s || ae || Qt || Pe(t)), e = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                s = e = l;
                try {
                  if (n = s.stateNode, u)
                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = s.stateNode;
                    var _ = s.memoizedProps.style, v = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    c.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (q) {
                  bt(s, s.return, q);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                s = l;
                try {
                  s.stateNode.nodeValue = u ? "" : s.memoizedProps;
                } catch (q) {
                  bt(s, s.return, q);
                }
              }
            } else if (l.tag === 18) {
              if (e === null) {
                s = l;
                try {
                  var S = s.stateNode;
                  u ? ud(S, !0) : ud(s.stateNode, !1);
                } catch (q) {
                  bt(s, s.return, q);
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
        a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, On(t, e))));
        break;
      case 19:
        sl(l, t), rl(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, On(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        sl(l, t), rl(t);
    }
  }
  function rl(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (no(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(r(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode, n = Uc(t);
            Dn(t, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (sa(i, ""), e.flags &= -33);
            var c = Uc(t);
            Dn(t, c, i);
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
  function ne(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        fo(t, l.alternate, l), l = l.sibling;
  }
  function Pe(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ae(4, l, l.return), Pe(l);
          break;
        case 1:
          Zl(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && ao(
            l,
            l.return,
            e
          ), Pe(l);
          break;
        case 27:
          Ou(l.stateNode);
        case 26:
        case 5:
          Zl(l, l.return), Pe(l);
          break;
        case 22:
          l.memoizedState === null && Pe(l);
          break;
        case 30:
          Pe(l);
          break;
        default:
          Pe(l);
      }
      t = t.sibling;
    }
  }
  function ie(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate, u = t, n = l, i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ie(
            u,
            n,
            e
          ), gu(4, n);
          break;
        case 1:
          if (ie(
            u,
            n,
            e
          ), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (y) {
              bt(a, a.return, y);
            }
          if (a = n, u = a.updateQueue, u !== null) {
            var c = a.stateNode;
            try {
              var s = u.shared.hiddenCallbacks;
              if (s !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++)
                  Ks(s[u], c);
            } catch (y) {
              bt(a, a.return, y);
            }
          }
          e && i & 64 && eo(n), Su(n, n.return);
          break;
        case 27:
          io(n);
        case 26:
        case 5:
          ie(
            u,
            n,
            e
          ), e && a === null && i & 4 && uo(n), Su(n, n.return);
          break;
        case 12:
          ie(
            u,
            n,
            e
          );
          break;
        case 31:
          ie(
            u,
            n,
            e
          ), e && i & 4 && oo(u, n);
          break;
        case 13:
          ie(
            u,
            n,
            e
          ), e && i & 4 && mo(u, n);
          break;
        case 22:
          n.memoizedState === null && ie(
            u,
            n,
            e
          ), Su(n, n.return);
          break;
        case 30:
          break;
        default:
          ie(
            u,
            n,
            e
          );
      }
      l = l.sibling;
    }
  }
  function xc(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && uu(e));
  }
  function Cc(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && uu(t));
  }
  function Yl(t, l, e, a) {
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
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Yl(
          t,
          l,
          e,
          a
        ), u & 2048 && gu(9, l);
        break;
      case 1:
        Yl(
          t,
          l,
          e,
          a
        );
        break;
      case 3:
        Yl(
          t,
          l,
          e,
          a
        ), u & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && uu(t)));
        break;
      case 12:
        if (u & 2048) {
          Yl(
            t,
            l,
            e,
            a
          ), t = l.stateNode;
          try {
            var n = l.memoizedProps, i = n.id, c = n.onPostCommit;
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
          Yl(
            t,
            l,
            e,
            a
          );
        break;
      case 31:
        Yl(
          t,
          l,
          e,
          a
        );
        break;
      case 13:
        Yl(
          t,
          l,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = l.stateNode, i = l.alternate, l.memoizedState !== null ? n._visibility & 2 ? Yl(
          t,
          l,
          e,
          a
        ) : bu(t, l) : n._visibility & 2 ? Yl(
          t,
          l,
          e,
          a
        ) : (n._visibility |= 2, Ua(
          t,
          l,
          e,
          a,
          (l.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && xc(i, l);
        break;
      case 24:
        Yl(
          t,
          l,
          e,
          a
        ), u & 2048 && Cc(l.alternate, l);
        break;
      default:
        Yl(
          t,
          l,
          e,
          a
        );
    }
  }
  function Ua(t, l, e, a, u) {
    for (u = u && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var n = t, i = l, c = e, s = a, y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ua(
            n,
            i,
            c,
            s,
            u
          ), gu(8, i);
          break;
        case 23:
          break;
        case 22:
          var E = i.stateNode;
          i.memoizedState !== null ? E._visibility & 2 ? Ua(
            n,
            i,
            c,
            s,
            u
          ) : bu(
            n,
            i
          ) : (E._visibility |= 2, Ua(
            n,
            i,
            c,
            s,
            u
          )), u && y & 2048 && xc(
            i.alternate,
            i
          );
          break;
        case 24:
          Ua(
            n,
            i,
            c,
            s,
            u
          ), u && y & 2048 && Cc(i.alternate, i);
          break;
        default:
          Ua(
            n,
            i,
            c,
            s,
            u
          );
      }
      l = l.sibling;
    }
  }
  function bu(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, a = l, u = a.flags;
        switch (a.tag) {
          case 22:
            bu(e, a), u & 2048 && xc(
              a.alternate,
              a
            );
            break;
          case 24:
            bu(e, a), u & 2048 && Cc(a.alternate, a);
            break;
          default:
            bu(e, a);
        }
        l = l.sibling;
      }
  }
  var pu = 8192;
  function Na(t, l, e) {
    if (t.subtreeFlags & pu)
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
        Na(
          t,
          l,
          e
        ), t.flags & pu && t.memoizedState !== null && r0(
          e,
          ql,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Na(
          t,
          l,
          e
        );
        break;
      case 3:
      case 4:
        var a = ql;
        ql = Qn(t.stateNode.containerInfo), Na(
          t,
          l,
          e
        ), ql = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = pu, pu = 16777216, Na(
          t,
          l,
          e
        ), pu = a) : Na(
          t,
          l,
          e
        ));
        break;
      default:
        Na(
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
  function Eu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Jt = a, po(
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
        Eu(t), t.flags & 2048 && Ae(9, t, t.return);
        break;
      case 3:
        Eu(t);
        break;
      case 12:
        Eu(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, Mn(t)) : Eu(t);
        break;
      default:
        Eu(t);
    }
  }
  function Mn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Jt = a, po(
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
          Ae(8, l, l.return), Mn(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, Mn(l));
          break;
        default:
          Mn(l);
      }
      t = t.sibling;
    }
  }
  function po(t, l) {
    for (; Jt !== null; ) {
      var e = Jt;
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
          uu(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Jt = a;
      else
        t: for (e = t; Jt !== null; ) {
          a = Jt;
          var u = a.sibling, n = a.return;
          if (so(a), a === e) {
            Jt = null;
            break t;
          }
          if (u !== null) {
            u.return = n, Jt = u;
            break t;
          }
          Jt = n;
        }
    }
  }
  var _h = {
    getCacheForType: function(t) {
      var l = It(Yt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return It(Yt).controller.signal;
    }
  }, Dh = typeof WeakMap == "function" ? WeakMap : Map, dt = 0, _t = null, et = null, ut = 0, St = 0, Tl = null, ze = !1, Ra = !1, Hc = !1, ce = 0, xt = 0, _e = 0, ta = 0, Bc = 0, Al = 0, xa = 0, Tu = null, ol = null, jc = !1, Un = 0, Eo = 0, Nn = 1 / 0, Rn = null, De = null, Zt = 0, Oe = null, Ca = null, fe = 0, qc = 0, Yc = null, To = null, Au = 0, Gc = null;
  function zl() {
    return (dt & 2) !== 0 && ut !== 0 ? ut & -ut : T.T !== null ? Kc() : qf();
  }
  function Ao() {
    if (Al === 0)
      if ((ut & 536870912) === 0 || it) {
        var t = Yu;
        Yu <<= 1, (Yu & 3932160) === 0 && (Yu = 262144), Al = t;
      } else Al = 536870912;
    return t = pl.current, t !== null && (t.flags |= 32), Al;
  }
  function dl(t, l, e) {
    (t === _t && (St === 2 || St === 9) || t.cancelPendingCommit !== null) && (Ha(t, 0), Me(
      t,
      ut,
      Al,
      !1
    )), Va(t, e), ((dt & 2) === 0 || t !== _t) && (t === _t && ((dt & 2) === 0 && (ta |= e), xt === 4 && Me(
      t,
      ut,
      Al,
      !1
    )), Vl(t));
  }
  function zo(t, l, e) {
    if ((dt & 6) !== 0) throw Error(r(327));
    var a = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || Za(t, l), u = a ? Uh(t, l) : Qc(t, l, !0), n = a;
    do {
      if (u === 0) {
        Ra && !a && Me(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, n && !Oh(e)) {
          u = Qc(t, l, !1), n = !1;
          continue;
        }
        if (u === 2) {
          if (n = l, t.errorRecoveryDisabledLanes & n)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            l = i;
            t: {
              var c = t;
              u = Tu;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (Ha(c, i).flags |= 256), i = Qc(
                c,
                i,
                !1
              ), i !== 2) {
                if (Hc && !s) {
                  c.errorRecoveryDisabledLanes |= n, ta |= n, u = 4;
                  break t;
                }
                n = ol, ol = u, n !== null && (ol === null ? ol = n : ol.push.apply(
                  ol,
                  n
                ));
              }
              u = i;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Ha(t, 0), Me(t, l, 0, !0);
          break;
        }
        t: {
          switch (a = t, n = u, n) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              Me(
                a,
                l,
                Al,
                !ze
              );
              break t;
            case 2:
              ol = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((l & 62914560) === l && (u = Un + 300 - yl(), 10 < u)) {
            if (Me(
              a,
              l,
              Al,
              !ze
            ), Xu(a, 0, !0) !== 0) break t;
            fe = l, a.timeoutHandle = ld(
              _o.bind(
                null,
                a,
                e,
                ol,
                Rn,
                jc,
                l,
                Al,
                ta,
                xa,
                ze,
                n,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break t;
          }
          _o(
            a,
            e,
            ol,
            Rn,
            jc,
            l,
            Al,
            ta,
            xa,
            ze,
            n,
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
  function _o(t, l, e, a, u, n, i, c, s, y, E, _, v, S) {
    if (t.timeoutHandle = -1, _ = l.subtreeFlags, _ & 8192 || (_ & 16785408) === 16785408) {
      _ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: wl
      }, go(
        l,
        n,
        _
      );
      var q = (n & 62914560) === n ? Un - yl() : (n & 4194048) === n ? Eo - yl() : 0;
      if (q = o0(
        _,
        q
      ), q !== null) {
        fe = n, t.cancelPendingCommit = q(
          Co.bind(
            null,
            t,
            l,
            n,
            e,
            a,
            u,
            i,
            c,
            s,
            E,
            _,
            null,
            v,
            S
          )
        ), Me(t, n, i, !y);
        return;
      }
    }
    Co(
      t,
      l,
      n,
      e,
      a,
      u,
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
          var u = e[a], n = u.getSnapshot;
          u = u.value;
          try {
            if (!Sl(n(), u)) return !1;
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
    l &= ~Bc, l &= ~ta, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
    for (var u = l; 0 < u; ) {
      var n = 31 - gl(u), i = 1 << n;
      a[n] = -1, u &= ~i;
    }
    e !== 0 && Hf(t, e, l);
  }
  function xn() {
    return (dt & 6) === 0 ? (zu(0), !1) : !0;
  }
  function Xc() {
    if (et !== null) {
      if (St === 0)
        var t = et.return;
      else
        t = et, Wl = Ke = null, ec(t), za = null, iu = 0, t = et;
      for (; t !== null; )
        lo(t.alternate, t), t = t.return;
      et = null;
    }
  }
  function Ha(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && (t.timeoutHandle = -1, wh(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), fe = 0, Xc(), _t = t, et = e = $l(t.current, null), ut = l, St = 0, Tl = null, ze = !1, Ra = Za(t, l), Hc = !1, xa = Al = Bc = ta = _e = xt = 0, ol = Tu = null, jc = !1, (l & 8) !== 0 && (l |= l & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; ) {
        var u = 31 - gl(a), n = 1 << u;
        l |= t[u], a &= ~n;
      }
    return ce = l, Iu(), e;
  }
  function Do(t, l) {
    I = null, T.H = hu, l === Aa || l === cn ? (l = Qs(), St = 3) : l === Vi ? (l = Qs(), St = 4) : St = l === Sc ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, Tl = l, et === null && (xt = 1, En(
      t,
      Ml(l, t.current)
    ));
  }
  function Oo() {
    var t = pl.current;
    return t === null ? !0 : (ut & 4194048) === ut ? xl === null : (ut & 62914560) === ut || (ut & 536870912) !== 0 ? t === xl : !1;
  }
  function Mo() {
    var t = T.H;
    return T.H = hu, t === null ? hu : t;
  }
  function Uo() {
    var t = T.A;
    return T.A = _h, t;
  }
  function Cn() {
    xt = 4, ze || (ut & 4194048) !== ut && pl.current !== null || (Ra = !0), (_e & 134217727) === 0 && (ta & 134217727) === 0 || _t === null || Me(
      _t,
      ut,
      Al,
      !1
    );
  }
  function Qc(t, l, e) {
    var a = dt;
    dt |= 2;
    var u = Mo(), n = Uo();
    (_t !== t || ut !== l) && (Rn = null, Ha(t, l)), l = !1;
    var i = xt;
    t: do
      try {
        if (St !== 0 && et !== null) {
          var c = et, s = Tl;
          switch (St) {
            case 8:
              Xc(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              pl.current === null && (l = !0);
              var y = St;
              if (St = 0, Tl = null, Ba(t, c, s, y), e && Ra) {
                i = 0;
                break t;
              }
              break;
            default:
              y = St, St = 0, Tl = null, Ba(t, c, s, y);
          }
        }
        Mh(), i = xt;
        break;
      } catch (E) {
        Do(t, E);
      }
    while (!0);
    return l && t.shellSuspendCounter++, Wl = Ke = null, dt = a, T.H = u, T.A = n, et === null && (_t = null, ut = 0, Iu()), i;
  }
  function Mh() {
    for (; et !== null; ) No(et);
  }
  function Uh(t, l) {
    var e = dt;
    dt |= 2;
    var a = Mo(), u = Uo();
    _t !== t || ut !== l ? (Rn = null, Nn = yl() + 500, Ha(t, l)) : Ra = Za(
      t,
      l
    );
    t: do
      try {
        if (St !== 0 && et !== null) {
          l = et;
          var n = Tl;
          l: switch (St) {
            case 1:
              St = 0, Tl = null, Ba(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (Gs(n)) {
                St = 0, Tl = null, Ro(l);
                break;
              }
              l = function() {
                St !== 2 && St !== 9 || _t !== t || (St = 7), Vl(t);
              }, n.then(l, l);
              break t;
            case 3:
              St = 7;
              break t;
            case 4:
              St = 5;
              break t;
            case 7:
              Gs(n) ? (St = 0, Tl = null, Ro(l)) : (St = 0, Tl = null, Ba(t, l, n, 7));
              break;
            case 5:
              var i = null;
              switch (et.tag) {
                case 26:
                  i = et.memoizedState;
                case 5:
                case 27:
                  var c = et;
                  if (i ? vd(i) : c.stateNode.complete) {
                    St = 0, Tl = null;
                    var s = c.sibling;
                    if (s !== null) et = s;
                    else {
                      var y = c.return;
                      y !== null ? (et = y, Hn(y)) : et = null;
                    }
                    break l;
                  }
              }
              St = 0, Tl = null, Ba(t, l, n, 5);
              break;
            case 6:
              St = 0, Tl = null, Ba(t, l, n, 6);
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
    return Wl = Ke = null, T.H = a, T.A = u, dt = e, et !== null ? 0 : (_t = null, ut = 0, Iu(), xt);
  }
  function Nh() {
    for (; et !== null && !Pd(); )
      No(et);
  }
  function No(t) {
    var l = Pr(t.alternate, t, ce);
    t.memoizedProps = t.pendingProps, l === null ? Hn(t) : et = l;
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
        lo(e, l), l = et = Ms(l, ce), l = Pr(e, l, ce);
    }
    t.memoizedProps = t.pendingProps, l === null ? Hn(t) : et = l;
  }
  function Ba(t, l, e, a) {
    Wl = Ke = null, ec(l), za = null, iu = 0;
    var u = l.return;
    try {
      if (Sh(
        t,
        u,
        l,
        e,
        ut
      )) {
        xt = 1, En(
          t,
          Ml(e, t.current)
        ), et = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw et = u, n;
      xt = 1, En(
        t,
        Ml(e, t.current)
      ), et = null;
      return;
    }
    l.flags & 32768 ? (it || a === 1 ? t = !0 : Ra || (ut & 536870912) !== 0 ? t = !1 : (ze = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = pl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), xo(l, t)) : Hn(l);
  }
  function Hn(t) {
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
        ce
      );
      if (e !== null) {
        et = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        et = l;
        return;
      }
      et = l = t;
    } while (l !== null);
    xt === 0 && (xt = 5);
  }
  function xo(t, l) {
    do {
      var e = Th(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, et = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        et = t;
        return;
      }
      et = t = e;
    } while (t !== null);
    xt = 6, et = null;
  }
  function Co(t, l, e, a, u, n, i, c, s) {
    t.cancelPendingCommit = null;
    do
      Bn();
    while (Zt !== 0);
    if ((dt & 6) !== 0) throw Error(r(327));
    if (l !== null) {
      if (l === t.current) throw Error(r(177));
      if (n = l.lanes | l.childLanes, n |= Ui, sm(
        t,
        e,
        n,
        i,
        c,
        s
      ), t === _t && (et = _t = null, ut = 0), Ca = l, Oe = t, fe = e, qc = n, Yc = u, To = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Hh(ju, function() {
        return Yo(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
        a = T.T, T.T = null, u = B.p, B.p = 2, i = dt, dt |= 4;
        try {
          Ah(t, l, e);
        } finally {
          dt = i, B.p = u, T.T = a;
        }
      }
      Zt = 1, Ho(), Bo(), jo();
    }
  }
  function Ho() {
    if (Zt === 1) {
      Zt = 0;
      var t = Oe, l = Ca, e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        e = T.T, T.T = null;
        var a = B.p;
        B.p = 2;
        var u = dt;
        dt |= 4;
        try {
          ho(l, t);
          var n = Pc, i = bs(t.containerInfo), c = n.focusedElem, s = n.selectionRange;
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
                  var S = v.getSelection(), q = c.textContent.length, K = Math.min(s.start, q), At = s.end === void 0 ? K : Math.min(s.end, q);
                  !S.extend && K > At && (i = At, At = K, K = i);
                  var m = gs(
                    c,
                    K
                  ), o = gs(
                    c,
                    At
                  );
                  if (m && o && (S.rangeCount !== 1 || S.anchorNode !== m.node || S.anchorOffset !== m.offset || S.focusNode !== o.node || S.focusOffset !== o.offset)) {
                    var h = _.createRange();
                    h.setStart(m.node, m.offset), S.removeAllRanges(), K > At ? (S.addRange(h), S.extend(o.node, o.offset)) : (h.setEnd(o.node, o.offset), S.addRange(h));
                  }
                }
              }
            }
            for (_ = [], S = c; S = S.parentNode; )
              S.nodeType === 1 && _.push({
                element: S,
                left: S.scrollLeft,
                top: S.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < _.length; c++) {
              var A = _[c];
              A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
            }
          }
          wn = !!Ic, Pc = Ic = null;
        } finally {
          dt = u, B.p = a, T.T = e;
        }
      }
      t.current = l, Zt = 2;
    }
  }
  function Bo() {
    if (Zt === 2) {
      Zt = 0;
      var t = Oe, l = Ca, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = T.T, T.T = null;
        var a = B.p;
        B.p = 2;
        var u = dt;
        dt |= 4;
        try {
          fo(t, l.alternate, l);
        } finally {
          dt = u, B.p = a, T.T = e;
        }
      }
      Zt = 3;
    }
  }
  function jo() {
    if (Zt === 4 || Zt === 3) {
      Zt = 0, tm();
      var t = Oe, l = Ca, e = fe, a = To;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Zt = 5 : (Zt = 0, Ca = Oe = null, qo(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (De = null), ni(e), l = l.stateNode, vl && typeof vl.onCommitFiberRoot == "function")
        try {
          vl.onCommitFiberRoot(
            La,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        l = T.T, u = B.p, B.p = 2, T.T = null;
        try {
          for (var n = t.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          T.T = l, B.p = u;
        }
      }
      (fe & 3) !== 0 && Bn(), Vl(t), u = t.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? t === Gc ? Au++ : (Au = 0, Gc = t) : Au = 0, zu(0);
    }
  }
  function qo(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, uu(l)));
  }
  function Bn() {
    return Ho(), Bo(), jo(), Yo();
  }
  function Yo() {
    if (Zt !== 5) return !1;
    var t = Oe, l = qc;
    qc = 0;
    var e = ni(fe), a = T.T, u = B.p;
    try {
      B.p = 32 > e ? 32 : e, T.T = null, e = Yc, Yc = null;
      var n = Oe, i = fe;
      if (Zt = 0, Ca = Oe = null, fe = 0, (dt & 6) !== 0) throw Error(r(331));
      var c = dt;
      if (dt |= 4, bo(n.current), vo(
        n,
        n.current,
        i,
        e
      ), dt = c, zu(0, !1), vl && typeof vl.onPostCommitFiberRoot == "function")
        try {
          vl.onPostCommitFiberRoot(La, n);
        } catch {
        }
      return !0;
    } finally {
      B.p = u, T.T = a, qo(t, l);
    }
  }
  function Go(t, l, e) {
    l = Ml(e, l), l = gc(t.stateNode, l, 2), t = pe(t, l, 2), t !== null && (Va(t, 2), Vl(t));
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
            t = Ml(e, t), e = Gr(2), a = pe(l, e, 2), a !== null && (Xr(
              e,
              a,
              l,
              t
            ), Va(a, 2), Vl(a));
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
      var u = /* @__PURE__ */ new Set();
      a.set(l, u);
    } else
      u = a.get(l), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(l, u));
    u.has(e) || (Hc = !0, u.add(e), t = Rh.bind(null, t, l, e), l.then(t, t));
  }
  function Rh(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, _t === t && (ut & e) === e && (xt === 4 || xt === 3 && (ut & 62914560) === ut && 300 > yl() - Un ? (dt & 2) === 0 && Ha(t, 0) : Bc |= e, xa === ut && (xa = 0)), Vl(t);
  }
  function Xo(t, l) {
    l === 0 && (l = Cf()), t = Le(t, l), t !== null && (Va(t, l), Vl(t));
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
        var a = t.stateNode, u = t.memoizedState;
        u !== null && (e = u.retryLane);
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
    return li(t, l);
  }
  var jn = null, ja = null, Zc = !1, qn = !1, Vc = !1, Ue = 0;
  function Vl(t) {
    t !== ja && t.next === null && (ja === null ? jn = ja = t : ja = ja.next = t), qn = !0, Zc || (Zc = !0, jh());
  }
  function zu(t, l) {
    if (!Vc && qn) {
      Vc = !0;
      do
        for (var e = !1, a = jn; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - gl(42 | t) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, Vo(a, n));
          } else
            n = ut, n = Xu(
              a,
              a === _t ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Za(a, n) || (e = !0, Vo(a, n));
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
    qn = Zc = !1;
    var t = 0;
    Ue !== 0 && Jh() && (t = Ue);
    for (var l = yl(), e = null, a = jn; a !== null; ) {
      var u = a.next, n = Lo(a, l);
      n === 0 ? (a.next = null, e === null ? jn = u : e.next = u, u === null && (ja = e)) : (e = a, (t !== 0 || (n & 3) !== 0) && (qn = !0)), a = u;
    }
    Zt !== 0 && Zt !== 5 || zu(t), Ue !== 0 && (Ue = 0);
  }
  function Lo(t, l) {
    for (var e = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - gl(n), c = 1 << i, s = u[i];
      s === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = fm(c, l)) : s <= l && (t.expiredLanes |= c), n &= ~c;
    }
    if (l = _t, e = ut, e = Xu(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, e === 0 || t === l && (St === 2 || St === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && ei(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || Za(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (a !== null && ei(a), ni(e)) {
        case 2:
        case 8:
          e = Rf;
          break;
        case 32:
          e = ju;
          break;
        case 268435456:
          e = xf;
          break;
        default:
          e = ju;
      }
      return a = Zo.bind(null, t), e = li(e, a), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return a !== null && a !== null && ei(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Zo(t, l) {
    if (Zt !== 0 && Zt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (Bn() && t.callbackNode !== e)
      return null;
    var a = ut;
    return a = Xu(
      t,
      t === _t ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (zo(t, a, l), Lo(t, yl()), t.callbackNode != null && t.callbackNode === e ? Zo.bind(null, t) : null);
  }
  function Vo(t, l) {
    if (Bn()) return null;
    zo(t, l, !0);
  }
  function jh() {
    kh(function() {
      (dt & 6) !== 0 ? li(
        Nf,
        Bh
      ) : Qo();
    });
  }
  function Kc() {
    if (Ue === 0) {
      var t = Ea;
      t === 0 && (t = qu, qu <<= 1, (qu & 261888) === 0 && (qu = 256)), Ue = t;
    }
    return Ue;
  }
  function Ko(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Vu("" + t);
  }
  function Jo(t, l) {
    var e = l.ownerDocument.createElement("input");
    return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
  }
  function qh(t, l, e, a, u) {
    if (l === "submit" && e && e.stateNode === u) {
      var n = Ko(
        (u[il] || null).action
      ), i = a.submitter;
      i && (l = (l = i[il] || null) ? Ko(l.formAction) : i.getAttribute("formAction"), l !== null && (n = l, i = null));
      var c = new ku(
        "action",
        "action",
        null,
        a,
        u
      );
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ue !== 0) {
                  var s = i ? Jo(u, i) : new FormData(u);
                  oc(
                    e,
                    {
                      pending: !0,
                      data: s,
                      method: u.method,
                      action: n
                    },
                    null,
                    s
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), s = i ? Jo(u, i) : new FormData(u), oc(
                  e,
                  {
                    pending: !0,
                    data: s,
                    method: u.method,
                    action: n
                  },
                  n,
                  s
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Jc = 0; Jc < Mi.length; Jc++) {
    var wc = Mi[Jc], Yh = wc.toLowerCase(), Gh = wc[0].toUpperCase() + wc.slice(1);
    jl(
      Yh,
      "on" + Gh
    );
  }
  jl(Ts, "onAnimationEnd"), jl(As, "onAnimationIteration"), jl(zs, "onAnimationStart"), jl("dblclick", "onDoubleClick"), jl("focusin", "onFocus"), jl("focusout", "onBlur"), jl(lh, "onTransitionRun"), jl(eh, "onTransitionStart"), jl(ah, "onTransitionCancel"), jl(_s, "onTransitionEnd"), ca("onMouseEnter", ["mouseout", "mouseover"]), ca("onMouseLeave", ["mouseout", "mouseover"]), ca("onPointerEnter", ["pointerout", "pointerover"]), ca("onPointerLeave", ["pointerout", "pointerover"]), Ye(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ye(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ye("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ye(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ye(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ye(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var _u = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Xh = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_u)
  );
  function wo(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e], u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i], s = c.instance, y = c.currentTarget;
            if (c = c.listener, s !== n && u.isPropagationStopped())
              break t;
            n = c, u.currentTarget = y;
            try {
              n(u);
            } catch (E) {
              Wu(E);
            }
            u.currentTarget = null, n = s;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (c = a[i], s = c.instance, y = c.currentTarget, c = c.listener, s !== n && u.isPropagationStopped())
              break t;
            n = c, u.currentTarget = y;
            try {
              n(u);
            } catch (E) {
              Wu(E);
            }
            u.currentTarget = null, n = s;
          }
      }
    }
  }
  function at(t, l) {
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
  var Yn = "_reactListening" + Math.random().toString(36).slice(2);
  function $c(t) {
    if (!t[Yn]) {
      t[Yn] = !0, Xf.forEach(function(e) {
        e !== "selectionchange" && (Xh.has(e) || kc(e, !1, t), kc(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Yn] || (l[Yn] = !0, kc("selectionchange", !1, l));
    }
  }
  function ko(t, l, e, a) {
    switch (Ad(l)) {
      case 2:
        var u = h0;
        break;
      case 8:
        u = y0;
        break;
      default:
        u = of;
    }
    e = u.bind(
      null,
      l,
      e,
      t
    ), u = void 0, !yi || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (u = !0), a ? u !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: u
    }) : t.addEventListener(l, e, !0) : u !== void 0 ? t.addEventListener(l, e, {
      passive: u
    }) : t.addEventListener(l, e, !1);
  }
  function Fc(t, l, e, a, u) {
    var n = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = ua(c), i === null) return;
            if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
              a = n = i;
              continue t;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    If(function() {
      var y = n, E = mi(e), _ = [];
      t: {
        var v = Ds.get(t);
        if (v !== void 0) {
          var S = ku, q = t;
          switch (t) {
            case "keypress":
              if (Ju(e) === 0) break t;
            case "keydown":
            case "keyup":
              S = Cm;
              break;
            case "focusin":
              q = "focus", S = bi;
              break;
            case "focusout":
              q = "blur", S = bi;
              break;
            case "beforeblur":
            case "afterblur":
              S = bi;
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
              S = ls;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = Em;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = jm;
              break;
            case Ts:
            case As:
            case zs:
              S = zm;
              break;
            case _s:
              S = Ym;
              break;
            case "scroll":
            case "scrollend":
              S = bm;
              break;
            case "wheel":
              S = Xm;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = Dm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = as;
              break;
            case "toggle":
            case "beforetoggle":
              S = Lm;
          }
          var K = (l & 4) !== 0, At = !K && (t === "scroll" || t === "scrollend"), m = K ? v !== null ? v + "Capture" : null : v;
          K = [];
          for (var o = y, h; o !== null; ) {
            var A = o;
            if (h = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || h === null || m === null || (A = wa(o, m), A != null && K.push(
              Du(o, A, h)
            )), At) break;
            o = o.return;
          }
          0 < K.length && (v = new S(
            v,
            q,
            null,
            e,
            E
          ), _.push({ event: v, listeners: K }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (v = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout", v && e !== di && (q = e.relatedTarget || e.fromElement) && (ua(q) || q[aa]))
            break t;
          if ((S || v) && (v = E.window === E ? E : (v = E.ownerDocument) ? v.defaultView || v.parentWindow : window, S ? (q = e.relatedTarget || e.toElement, S = y, q = q ? ua(q) : null, q !== null && (At = j(q), K = q.tag, q !== At || K !== 5 && K !== 27 && K !== 6) && (q = null)) : (S = null, q = y), S !== q)) {
            if (K = ls, A = "onMouseLeave", m = "onMouseEnter", o = "mouse", (t === "pointerout" || t === "pointerover") && (K = as, A = "onPointerLeave", m = "onPointerEnter", o = "pointer"), At = S == null ? v : Ja(S), h = q == null ? v : Ja(q), v = new K(
              A,
              o + "leave",
              S,
              e,
              E
            ), v.target = At, v.relatedTarget = h, A = null, ua(E) === y && (K = new K(
              m,
              o + "enter",
              q,
              e,
              E
            ), K.target = h, K.relatedTarget = At, A = K), At = A, S && q)
              l: {
                for (K = Qh, m = S, o = q, h = 0, A = m; A; A = K(A))
                  h++;
                A = 0;
                for (var Z = o; Z; Z = K(Z))
                  A++;
                for (; 0 < h - A; )
                  m = K(m), h--;
                for (; 0 < A - h; )
                  o = K(o), A--;
                for (; h--; ) {
                  if (m === o || o !== null && m === o.alternate) {
                    K = m;
                    break l;
                  }
                  m = K(m), o = K(o);
                }
                K = null;
              }
            else K = null;
            S !== null && $o(
              _,
              v,
              S,
              K,
              !1
            ), q !== null && At !== null && $o(
              _,
              At,
              q,
              K,
              !0
            );
          }
        }
        t: {
          if (v = y ? Ja(y) : window, S = v.nodeName && v.nodeName.toLowerCase(), S === "select" || S === "input" && v.type === "file")
            var rt = os;
          else if (ss(v))
            if (ds)
              rt = Im;
            else {
              rt = Fm;
              var L = $m;
            }
          else
            S = v.nodeName, !S || S.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? y && oi(y.elementType) && (rt = os) : rt = Wm;
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
        switch (L = y ? Ja(y) : window, t) {
          case "focusin":
            (ss(L) || L.contentEditable === "true") && (ma = L, _i = y, lu = null);
            break;
          case "focusout":
            lu = _i = ma = null;
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
                var nt = "onCompositionStart";
                break t;
              case "compositionend":
                nt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                nt = "onCompositionUpdate";
                break t;
            }
            nt = void 0;
          }
        else
          da ? cs(t, e) && (nt = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (nt = "onCompositionStart");
        nt && (us && e.locale !== "ko" && (da || nt !== "onCompositionStart" ? nt === "onCompositionEnd" && da && (tt = Pf()) : (me = E, vi = "value" in me ? me.value : me.textContent, da = !0)), L = Gn(y, nt), 0 < L.length && (nt = new es(
          nt,
          t,
          null,
          e,
          E
        ), _.push({ event: nt, listeners: L }), tt ? nt.data = tt : (tt = fs(e), tt !== null && (nt.data = tt)))), (tt = Vm ? Km(t, e) : Jm(t, e)) && (nt = Gn(y, "onBeforeInput"), 0 < nt.length && (L = new es(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          E
        ), _.push({
          event: L,
          listeners: nt
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
  function Du(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Gn(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var u = t, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = wa(t, e), u != null && a.unshift(
        Du(t, u, n)
      ), u = wa(t, l), u != null && a.push(
        Du(t, u, n)
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
  function $o(t, l, e, a, u) {
    for (var n = l._reactName, i = []; e !== null && e !== a; ) {
      var c = e, s = c.alternate, y = c.stateNode;
      if (c = c.tag, s !== null && s === a) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (s = y, u ? (y = wa(e, n), y != null && i.unshift(
        Du(e, y, s)
      )) : u || (y = wa(e, n), y != null && i.push(
        Du(e, y, s)
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
  function Tt(t, l, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string" ? l === "body" || l === "textarea" && a === "" || sa(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && sa(t, "" + a);
        break;
      case "className":
        Lu(t, "class", a);
        break;
      case "tabIndex":
        Lu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Lu(t, e, a);
        break;
      case "style":
        Ff(t, a, n);
        break;
      case "data":
        if (l !== "object") {
          Lu(t, "data", a);
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
        a = Vu("" + a), t.setAttribute(e, a);
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
          typeof n == "function" && (e === "formAction" ? (l !== "input" && Tt(t, l, "name", u.name, u, null), Tt(
            t,
            l,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Tt(
            t,
            l,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Tt(
            t,
            l,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Tt(t, l, "encType", u.encType, u, null), Tt(t, l, "method", u.method, u, null), Tt(t, l, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = Vu("" + a), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = wl);
        break;
      case "onScroll":
        a != null && at("scroll", t);
        break;
      case "onScrollEnd":
        a != null && at("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(r(60));
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
        e = Vu("" + a), t.setAttributeNS(
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
        at("beforetoggle", t), at("toggle", t), Qu(t, "popover", a);
        break;
      case "xlinkActuate":
        Jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Jl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Jl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Jl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Jl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Qu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = gm.get(e) || e, Qu(t, e, a));
    }
  }
  function Wc(t, l, e, a, u, n) {
    switch (e) {
      case "style":
        Ff(t, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? sa(t, a) : (typeof a == "number" || typeof a == "bigint") && sa(t, "" + a);
        break;
      case "onScroll":
        a != null && at("scroll", t);
        break;
      case "onScrollEnd":
        a != null && at("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = wl);
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
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), l = e.slice(2, u ? e.length - 7 : void 0), n = t[il] || null, n = n != null ? n[e] : null, typeof n == "function" && t.removeEventListener(l, n, u), typeof a == "function")) {
              typeof n != "function" && n !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, a, u);
              break t;
            }
            e in t ? t[e] = a : a === !0 ? t.setAttribute(e, "") : Qu(t, e, a);
          }
    }
  }
  function tl(t, l, e) {
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
        at("error", t), at("load", t);
        var a = !1, u = !1, n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, l));
                default:
                  Tt(t, l, n, i, e, null);
              }
          }
        u && Tt(t, l, "srcSet", e.srcSet, e, null), a && Tt(t, l, "src", e.src, e, null);
        return;
      case "input":
        at("invalid", t);
        var c = n = i = u = null, s = null, y = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var E = e[a];
            if (E != null)
              switch (a) {
                case "name":
                  u = E;
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
                  n = E;
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
          n,
          c,
          s,
          y,
          i,
          u,
          !1
        );
        return;
      case "select":
        at("invalid", t), a = i = n = null;
        for (u in e)
          if (e.hasOwnProperty(u) && (c = e[u], c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                Tt(t, l, u, c, e, null);
            }
        l = n, e = i, t.multiple = !!a, l != null ? fa(t, !!a, l, !1) : e != null && fa(t, !!a, e, !0);
        return;
      case "textarea":
        at("invalid", t), n = u = a = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (c = e[i], c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                Tt(t, l, i, c, e, null);
            }
        kf(t, a, u, n);
        return;
      case "option":
        for (s in e)
          e.hasOwnProperty(s) && (a = e[s], a != null) && (s === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Tt(t, l, s, a, e, null));
        return;
      case "dialog":
        at("beforetoggle", t), at("toggle", t), at("cancel", t), at("close", t);
        break;
      case "iframe":
      case "object":
        at("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < _u.length; a++)
          at(_u[a], t);
        break;
      case "image":
        at("error", t), at("load", t);
        break;
      case "details":
        at("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        at("error", t), at("load", t);
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
        var u = null, n = null, i = null, c = null, s = null, y = null, E = null;
        for (S in e) {
          var _ = e[S];
          if (e.hasOwnProperty(S) && _ != null)
            switch (S) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = _;
              default:
                a.hasOwnProperty(S) || Tt(t, l, S, null, a, _);
            }
        }
        for (var v in a) {
          var S = a[v];
          if (_ = e[v], a.hasOwnProperty(v) && (S != null || _ != null))
            switch (v) {
              case "type":
                n = S;
                break;
              case "name":
                u = S;
                break;
              case "checked":
                y = S;
                break;
              case "defaultChecked":
                E = S;
                break;
              case "value":
                i = S;
                break;
              case "defaultValue":
                c = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(r(137, l));
                break;
              default:
                S !== _ && Tt(
                  t,
                  l,
                  v,
                  S,
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
          n,
          u
        );
        return;
      case "select":
        S = i = c = v = null;
        for (n in e)
          if (s = e[n], e.hasOwnProperty(n) && s != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                S = s;
              default:
                a.hasOwnProperty(n) || Tt(
                  t,
                  l,
                  n,
                  null,
                  a,
                  s
                );
            }
        for (u in a)
          if (n = a[u], s = e[u], a.hasOwnProperty(u) && (n != null || s != null))
            switch (u) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== s && Tt(
                  t,
                  l,
                  u,
                  n,
                  a,
                  s
                );
            }
        l = c, e = i, a = S, v != null ? fa(t, !!e, v, !1) : !!a != !!e && (l != null ? fa(t, !!e, l, !0) : fa(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        S = v = null;
        for (c in e)
          if (u = e[c], e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                Tt(t, l, c, null, a, u);
            }
        for (i in a)
          if (u = a[i], n = e[i], a.hasOwnProperty(i) && (u != null || n != null))
            switch (i) {
              case "value":
                v = u;
                break;
              case "defaultValue":
                S = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== n && Tt(t, l, i, u, a, n);
            }
        wf(t, v, S);
        return;
      case "option":
        for (var q in e)
          v = e[q], e.hasOwnProperty(q) && v != null && !a.hasOwnProperty(q) && (q === "selected" ? t.selected = !1 : Tt(
            t,
            l,
            q,
            null,
            a,
            v
          ));
        for (s in a)
          v = a[s], S = e[s], a.hasOwnProperty(s) && v !== S && (v != null || S != null) && (s === "selected" ? t.selected = v && typeof v != "function" && typeof v != "symbol" : Tt(
            t,
            l,
            s,
            v,
            a,
            S
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
        for (var K in e)
          v = e[K], e.hasOwnProperty(K) && v != null && !a.hasOwnProperty(K) && Tt(t, l, K, null, a, v);
        for (y in a)
          if (v = a[y], S = e[y], a.hasOwnProperty(y) && v !== S && (v != null || S != null))
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
                  S
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
            v = a[E], S = e[E], !a.hasOwnProperty(E) || v === S || v === void 0 && S === void 0 || Wc(
              t,
              l,
              E,
              v,
              a,
              S
            );
          return;
        }
    }
    for (var m in e)
      v = e[m], e.hasOwnProperty(m) && v != null && !a.hasOwnProperty(m) && Tt(t, l, m, null, a, v);
    for (_ in a)
      v = a[_], S = e[_], !a.hasOwnProperty(_) || v === S || v == null && S == null || Tt(t, l, _, v, a, S);
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
        var u = e[a], n = u.transferSize, i = u.initiatorType, c = u.duration;
        if (n && c && Io(i)) {
          for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
            var s = e[a], y = s.startTime;
            if (y > c) break;
            var E = s.transferSize, _ = s.initiatorType;
            E && Io(_) && (s = s.responseEnd, i += E * (s < c ? 1 : (c - y) / (s - y)));
          }
          if (--a, l += 8 * (n + i) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Ic = null, Pc = null;
  function Xn(t) {
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
      var u = e.nextSibling;
      if (t.removeChild(e), u && u.nodeType === 8)
        if (e = u.data, e === "/$" || e === "/&") {
          if (a === 0) {
            t.removeChild(u), Xa(l);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          Ou(t.ownerDocument.documentElement);
        else if (e === "head") {
          e = t.ownerDocument.head, Ou(e);
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling, c = n.nodeName;
            n[Ka] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = i;
          }
        } else
          e === "body" && Ou(t.ownerDocument.body);
      e = u;
    } while (e);
    Xa(l);
  }
  function ud(t, l) {
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
      var u = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Ka])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (n !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (n = t.getAttribute("src"), (n !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n)
          return t;
      } else return t;
      if (t = Cl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Wh(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Cl(t.nextSibling), t === null)) return null;
    return t;
  }
  function nd(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Cl(t.nextSibling), t === null)) return null;
    return t;
  }
  function af(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function uf(t) {
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
  function Cl(t) {
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
  var nf = null;
  function id(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0)
            return Cl(t.nextSibling);
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
    switch (l = Xn(e), t) {
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
  function Ou(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    ci(t);
  }
  var Hl = /* @__PURE__ */ new Map(), sd = /* @__PURE__ */ new Set();
  function Qn(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var se = B.d;
  B.d = {
    f: Ph,
    r: t0,
    D: l0,
    C: e0,
    L: a0,
    m: u0,
    X: i0,
    S: n0,
    M: c0
  };
  function Ph() {
    var t = se.f(), l = xn();
    return t || l;
  }
  function t0(t) {
    var l = na(t);
    l !== null && l.tag === 5 && l.type === "form" ? _r(l) : se.r(t);
  }
  var qa = typeof document > "u" ? null : document;
  function rd(t, l, e) {
    var a = qa;
    if (a && typeof l == "string" && l) {
      var u = Dl(l);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), sd.has(u) || (sd.add(u), t = { rel: t, crossOrigin: e, href: l }, a.querySelector(u) === null && (l = a.createElement("link"), tl(l, "link", t), Kt(l), a.head.appendChild(l)));
    }
  }
  function l0(t) {
    se.D(t), rd("dns-prefetch", t, null);
  }
  function e0(t, l) {
    se.C(t, l), rd("preconnect", t, l);
  }
  function a0(t, l, e) {
    se.L(t, l, e);
    var a = qa;
    if (a && t && l) {
      var u = 'link[rel="preload"][as="' + Dl(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + Dl(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + Dl(
        e.imageSizes
      ) + '"]')) : u += '[href="' + Dl(t) + '"]';
      var n = u;
      switch (l) {
        case "style":
          n = Ya(t);
          break;
        case "script":
          n = Ga(t);
      }
      Hl.has(n) || (t = x(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), Hl.set(n, t), a.querySelector(u) !== null || l === "style" && a.querySelector(Mu(n)) || l === "script" && a.querySelector(Uu(n)) || (l = a.createElement("link"), tl(l, "link", t), Kt(l), a.head.appendChild(l)));
    }
  }
  function u0(t, l) {
    se.m(t, l);
    var e = qa;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script", u = 'link[rel="modulepreload"][as="' + Dl(a) + '"][href="' + Dl(t) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ga(t);
      }
      if (!Hl.has(n) && (t = x({ rel: "modulepreload", href: t }, l), Hl.set(n, t), e.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Uu(n)))
              return;
        }
        a = e.createElement("link"), tl(a, "link", t), Kt(a), e.head.appendChild(a);
      }
    }
  }
  function n0(t, l, e) {
    se.S(t, l, e);
    var a = qa;
    if (a && t) {
      var u = ia(a).hoistableStyles, n = Ya(t);
      l = l || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(
          Mu(n)
        ))
          c.loading = 5;
        else {
          t = x(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = Hl.get(n)) && cf(t, e);
          var s = i = a.createElement("link");
          Kt(s), tl(s, "link", t), s._p = new Promise(function(y, E) {
            s.onload = y, s.onerror = E;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Ln(i, l, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, u.set(n, i);
      }
    }
  }
  function i0(t, l) {
    se.X(t, l);
    var e = qa;
    if (e && t) {
      var a = ia(e).hoistableScripts, u = Ga(t), n = a.get(u);
      n || (n = e.querySelector(Uu(u)), n || (t = x({ src: t, async: !0 }, l), (l = Hl.get(u)) && ff(t, l), n = e.createElement("script"), Kt(n), tl(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function c0(t, l) {
    se.M(t, l);
    var e = qa;
    if (e && t) {
      var a = ia(e).hoistableScripts, u = Ga(t), n = a.get(u);
      n || (n = e.querySelector(Uu(u)), n || (t = x({ src: t, async: !0, type: "module" }, l), (l = Hl.get(u)) && ff(t, l), n = e.createElement("script"), Kt(n), tl(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function od(t, l, e, a) {
    var u = (u = F.current) ? Qn(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (l = Ya(e.href), e = ia(
          u
        ).hoistableStyles, a = e.get(l), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = Ya(e.href);
          var n = ia(
            u
          ).hoistableStyles, i = n.get(t);
          if (i || (u = u.ownerDocument || u, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(t, i), (n = u.querySelector(
            Mu(t)
          )) && !n._p && (i.instance = n, i.state.loading = 5), Hl.has(t) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Hl.set(t, e), n || f0(
            u,
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
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Ga(e), e = ia(
          u
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
  function Ya(t) {
    return 'href="' + Dl(t) + '"';
  }
  function Mu(t) {
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
    }), tl(l, "link", e), Kt(l), t.head.appendChild(l));
  }
  function Ga(t) {
    return '[src="' + Dl(t) + '"]';
  }
  function Uu(t) {
    return "script[async]" + t;
  }
  function md(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Dl(e.href) + '"]'
          );
          if (a)
            return l.instance = a, Kt(a), a;
          var u = x({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Kt(a), tl(a, "style", u), Ln(a, e.precedence, t), l.instance = a;
        case "stylesheet":
          u = Ya(e.href);
          var n = t.querySelector(
            Mu(u)
          );
          if (n)
            return l.state.loading |= 4, l.instance = n, Kt(n), n;
          a = dd(e), (u = Hl.get(u)) && cf(a, u), n = (t.ownerDocument || t).createElement("link"), Kt(n);
          var i = n;
          return i._p = new Promise(function(c, s) {
            i.onload = c, i.onerror = s;
          }), tl(n, "link", a), l.state.loading |= 4, Ln(n, e.precedence, t), l.instance = n;
        case "script":
          return n = Ga(e.src), (u = t.querySelector(
            Uu(n)
          )) ? (l.instance = u, Kt(u), u) : (a = e, (u = Hl.get(n)) && (a = x({}, e), ff(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), Kt(u), tl(u, "link", a), t.head.appendChild(u), l.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Ln(a, e.precedence, t));
    return l.instance;
  }
  function Ln(t, l, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === l) n = c;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function cf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function ff(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Zn = null;
  function hd(t, l, e) {
    if (Zn === null) {
      var a = /* @__PURE__ */ new Map(), u = Zn = /* @__PURE__ */ new Map();
      u.set(e, a);
    } else
      u = Zn, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
    if (a.has(t)) return a;
    for (a.set(t, null), e = e.getElementsByTagName(t), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[Ka] || n[Ft] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(l) || "";
        i = t + i;
        var c = a.get(i);
        c ? c.push(n) : a.set(i, [n]);
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
        var u = Ya(a.href), n = l.querySelector(
          Mu(u)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = Vn.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = n, Kt(n);
          return;
        }
        n = l.ownerDocument || l, a = dd(a), (u = Hl.get(u)) && cf(a, u), n = n.createElement("link"), Kt(n);
        var i = n;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), tl(n, "link", a), e.instance = n;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = Vn.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var sf = 0;
  function o0(t, l) {
    return t.stylesheets && t.count === 0 && Jn(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (t.stylesheets && Jn(t, t.stylesheets), t.unsuspend) {
          var n = t.unsuspend;
          t.unsuspend = null, n();
        }
      }, 6e4 + l);
      0 < t.imgBytes && sf === 0 && (sf = 62500 * Kh());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Jn(t, t.stylesheets), t.unsuspend)) {
            var n = t.unsuspend;
            t.unsuspend = null, n();
          }
        },
        (t.imgBytes > sf ? 50 : 800) + l
      );
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(u);
      };
    } : null;
  }
  function Vn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Jn(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Kn = null;
  function Jn(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Kn = /* @__PURE__ */ new Map(), l.forEach(d0, t), Kn = null, Vn.call(t));
  }
  function d0(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Kn.get(t);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Kn.set(t, e);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      u = l.instance, i = u.getAttribute("data-precedence"), n = e.get(i) || a, n === a && e.set(null, u), e.set(i, u), this.count++, a = Vn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), l.state.loading |= 4;
    }
  }
  var Nu = {
    $$typeof: pt,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0
  };
  function m0(t, l, e, a, u, n, i, c, s) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ai(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ai(0), this.hiddenUpdates = ai(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function gd(t, l, e, a, u, n, i, c, s, y, E, _) {
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
    ), l = 1, n === !0 && (l |= 24), n = bl(3, null, null, l), t.current = n, n.stateNode = t, l = Qi(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: l
    }, Ki(n), t;
  }
  function Sd(t) {
    return t ? (t = va, t) : va;
  }
  function bd(t, l, e, a, u, n) {
    u = Sd(u), a.context === null ? a.context = u : a.pendingContext = u, a = be(l), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = pe(t, a, l), e !== null && (dl(e, t, l), fu(e, t, l));
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
      var l = Le(t, 67108864);
      l !== null && dl(l, t, 67108864), rf(t, 67108864);
    }
  }
  function Td(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = zl();
      l = ui(l);
      var e = Le(t, l);
      e !== null && dl(e, t, l), rf(t, l);
    }
  }
  var wn = !0;
  function h0(t, l, e, a) {
    var u = T.T;
    T.T = null;
    var n = B.p;
    try {
      B.p = 2, of(t, l, e, a);
    } finally {
      B.p = n, T.T = u;
    }
  }
  function y0(t, l, e, a) {
    var u = T.T;
    T.T = null;
    var n = B.p;
    try {
      B.p = 8, of(t, l, e, a);
    } finally {
      B.p = n, T.T = u;
    }
  }
  function of(t, l, e, a) {
    if (wn) {
      var u = df(a);
      if (u === null)
        Fc(
          t,
          l,
          a,
          kn,
          e
        ), zd(t, a);
      else if (g0(
        u,
        t,
        l,
        e,
        a
      ))
        a.stopPropagation();
      else if (zd(t, a), l & 4 && -1 < v0.indexOf(t)) {
        for (; u !== null; ) {
          var n = na(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = qe(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var s = 1 << 31 - gl(i);
                      c.entanglements[1] |= s, i &= ~s;
                    }
                    Vl(n), (dt & 6) === 0 && (Nn = yl() + 500, zu(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Le(n, 2), c !== null && dl(c, n, 2), xn(), rf(n, 2);
            }
          if (n = df(a), n === null && Fc(
            t,
            l,
            a,
            kn,
            e
          ), n === u) break;
          u = n;
        }
        u !== null && a.stopPropagation();
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
  var kn = null;
  function mf(t) {
    if (kn = null, t = ua(t), t !== null) {
      var l = j(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = Q(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = Y(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return kn = t, null;
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
          case ju:
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
  var hf = !1, Re = null, xe = null, Ce = null, Ru = /* @__PURE__ */ new Map(), xu = /* @__PURE__ */ new Map(), He = [], v0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
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
        Ru.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xu.delete(l.pointerId);
    }
  }
  function Cu(t, l, e, a, u, n) {
    return t === null || t.nativeEvent !== n ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [u]
    }, l !== null && (l = na(l), l !== null && Ed(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, u !== null && l.indexOf(u) === -1 && l.push(u), t);
  }
  function g0(t, l, e, a, u) {
    switch (l) {
      case "focusin":
        return Re = Cu(
          Re,
          t,
          l,
          e,
          a,
          u
        ), !0;
      case "dragenter":
        return xe = Cu(
          xe,
          t,
          l,
          e,
          a,
          u
        ), !0;
      case "mouseover":
        return Ce = Cu(
          Ce,
          t,
          l,
          e,
          a,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return Ru.set(
          n,
          Cu(
            Ru.get(n) || null,
            t,
            l,
            e,
            a,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, xu.set(
          n,
          Cu(
            xu.get(n) || null,
            t,
            l,
            e,
            a,
            u
          )
        ), !0;
    }
    return !1;
  }
  function _d(t) {
    var l = ua(t.target);
    if (l !== null) {
      var e = j(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = Q(e), l !== null) {
            t.blockedOn = l, Yf(t.priority, function() {
              Td(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = Y(e), l !== null) {
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
  function $n(t) {
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
        return l = na(e), l !== null && Ed(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function Dd(t, l, e) {
    $n(t) && e.delete(l);
  }
  function S0() {
    hf = !1, Re !== null && $n(Re) && (Re = null), xe !== null && $n(xe) && (xe = null), Ce !== null && $n(Ce) && (Ce = null), Ru.forEach(Dd), xu.forEach(Dd);
  }
  function Fn(t, l) {
    t.blockedOn === l && (t.blockedOn = null, hf || (hf = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      S0
    )));
  }
  var Wn = null;
  function Od(t) {
    Wn !== t && (Wn = t, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        Wn === t && (Wn = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], a = t[l + 1], u = t[l + 2];
          if (typeof a != "function") {
            if (mf(a || e) === null)
              continue;
            break;
          }
          var n = na(e);
          n !== null && (t.splice(l, 3), l -= 3, oc(
            n,
            {
              pending: !0,
              data: u,
              method: e.method,
              action: a
            },
            a,
            u
          ));
        }
      }
    ));
  }
  function Xa(t) {
    function l(s) {
      return Fn(s, t);
    }
    Re !== null && Fn(Re, t), xe !== null && Fn(xe, t), Ce !== null && Fn(Ce, t), Ru.forEach(l), xu.forEach(l);
    for (var e = 0; e < He.length; e++) {
      var a = He[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < He.length && (e = He[0], e.blockedOn === null); )
      _d(e), e.blockedOn === null && He.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var u = e[a], n = e[a + 1], i = u[il] || null;
        if (typeof n == "function")
          i || Od(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, i = n[il] || null)
              c = i.formAction;
            else if (mf(u) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), Od(e);
        }
      }
  }
  function Md() {
    function t(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(i) {
            return u = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function l() {
      u !== null && (u(), u = null), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(e, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), u !== null && (u(), u = null);
      };
    }
  }
  function yf(t) {
    this._internalRoot = t;
  }
  In.prototype.render = yf.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(r(409));
    var e = l.current, a = zl();
    bd(e, a, t, l, null, null);
  }, In.prototype.unmount = yf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      bd(t.current, 2, null, t, null, null), xn(), l[aa] = null;
    }
  };
  function In(t) {
    this._internalRoot = t;
  }
  In.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = qf();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < He.length && l !== 0 && l < He[e].priority; e++) ;
      He.splice(e, 0, t), e === 0 && _d(t);
    }
  };
  var Ud = b.version;
  if (Ud !== "19.2.8")
    throw Error(
      r(
        527,
        Ud,
        "19.2.8"
      )
    );
  B.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = g(l), t = t !== null ? V(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var b0 = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pn.isDisabled && Pn.supportsFiber)
      try {
        La = Pn.inject(
          b0
        ), vl = Pn;
      } catch {
      }
  }
  return Bu.createRoot = function(t, l) {
    if (!X(t)) throw Error(r(299));
    var e = !1, a = "", u = Br, n = jr, i = qr;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError)), l = gd(
      t,
      1,
      !1,
      null,
      null,
      e,
      a,
      null,
      u,
      n,
      i,
      Md
    ), t[aa] = l.current, $c(t), new yf(l);
  }, Bu.hydrateRoot = function(t, l, e) {
    if (!X(t)) throw Error(r(299));
    var a = !1, u = "", n = Br, i = jr, c = qr, s = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (s = e.formState)), l = gd(
      t,
      1,
      !0,
      l,
      e ?? null,
      a,
      u,
      s,
      n,
      i,
      c,
      Md
    ), l.context = Sd(null), e = l.current, a = zl(), a = ui(a), u = be(a), u.callback = null, pe(e, u, a), e = a, l.current.lanes = e, Va(l, e), Vl(l), t[aa] = l.current, $c(t), new In(l);
  }, Bu.version = "19.2.8", Bu;
}
var Gd;
function U0() {
  if (Gd) return Sf.exports;
  Gd = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (b) {
        console.error(b);
      }
  }
  return f(), Sf.exports = M0(), Sf.exports;
}
var N0 = U0();
const Of = "hana.plugin.ui", Mf = 1, R0 = "X-Hana-Plugin-Surface-Session", x0 = "pluginSurfaceSession", $d = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, la = {
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
  const b = f.kind;
  if (b !== "event" && (typeof f.id != "string" || f.id.trim() === ""))
    return je(`Plugin UI ${b} messages must include a non-empty id.`);
  if (b === "error") {
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
  constructor(b) {
    super(b.message), this.code = b.code, this.details = b.details;
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
function q0(f, b) {
  if (b)
    return b;
  const M = new URLSearchParams(f.location.search).get("hana-host-origin");
  return M || (j0(f.document.referrer) ?? "*");
}
function Y0(f) {
  const b = new URLSearchParams(f.location.search);
  return {
    theme: b.get("hana-theme") ?? void 0,
    cssUrl: b.get("hana-css") ?? void 0
  };
}
function Vd(f, b, M) {
  return !(f.source !== b || M !== "*" && f.origin !== M);
}
function G0(f) {
  return typeof f == "string" ? { url: f } : f;
}
function X0(f) {
  return typeof f == "string" ? { text: f } : f;
}
function Fd(f) {
  const b = /^\/api\/plugins\/([^/]+)(?:\/|$)/.exec(f.location.pathname || "");
  if (!b)
    throw new Error("Plugin asset URL helper requires an iframe route under /api/plugins/:pluginId/.");
  try {
    return decodeURIComponent(b[1]);
  } catch {
    throw new Error("Plugin asset URL helper could not decode the current plugin id.");
  }
}
function Q0(f) {
  if (typeof f != "string" || f.length === 0)
    throw new Error("Invalid plugin asset path.");
  if (f.includes("\\") || f.includes("\0") || /^[a-z][a-z0-9+.-]*:/i.test(f))
    throw new Error("Invalid plugin asset path.");
  const b = f.replace(/^\/+/, "");
  if (!b || b.startsWith("./"))
    throw new Error("Invalid plugin asset path.");
  const M = b.split("/");
  if (M.some((r) => !r || r === "." || r === ".." || r.startsWith(".")))
    throw new Error("Invalid plugin asset path.");
  return M.map((r) => encodeURIComponent(r)).join("/");
}
function L0(f, b) {
  const M = Fd(f), r = Q0(b);
  return `${f.location.origin}/api/plugins/${encodeURIComponent(M)}/assets/${r}`;
}
function Z0(f) {
  return new URLSearchParams(f.location.search).get(x0) || null;
}
function V0(f) {
  if (typeof f != "string" || f.length === 0)
    throw new Error("Invalid plugin API path.");
  const b = f.trim();
  if (!b || b.includes("\\") || b.includes("\0") || b.includes("#") || b.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(b))
    throw new Error("Invalid plugin API path.");
  const M = b.replace(/^\/+/, "");
  if (!M || M.startsWith("./") || M === "api/plugins" || M.startsWith("api/plugins/"))
    throw new Error("Invalid plugin API path. Use a route path relative to the current plugin.");
  const r = M.indexOf("?"), X = r >= 0 ? M.slice(0, r) : M;
  if (!X)
    throw new Error("Invalid plugin API path.");
  const j = X.split("/");
  for (const D of j) {
    if (!D)
      throw new Error("Invalid plugin API path.");
    let g;
    try {
      g = decodeURIComponent(D);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (g === "." || g === ".." || g.includes("/") || g.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const Q = new URL(`http://hana.local/${M}`);
  return `${j.map((D) => encodeURIComponent(decodeURIComponent(D))).join("/")}${Q.search}`;
}
function Wd(f, b) {
  const M = Fd(f), r = V0(b);
  return `${f.location.origin}/api/plugins/${encodeURIComponent(M)}/${r}`;
}
function K0(f, b, M) {
  const r = Z0(f);
  if (!r)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const X = f.fetch?.bind(f) ?? globalThis.fetch?.bind(globalThis);
  if (!X)
    throw new Error("hana.api.fetch requires window.fetch.");
  const j = M ?? {}, Q = new Headers(j.headers);
  return Q.set(R0, r), X(Wd(f, b), {
    ...j,
    headers: Q
  });
}
function J0(f = {}) {
  const b = f.targetWindow ?? B0(), M = f.parentWindow ?? b.parent, r = q0(b, f.targetOrigin), X = f.requestTimeoutMs ?? 1e4, j = f.idFactory ?? H0;
  let Q = Y0(b);
  const Y = /* @__PURE__ */ new Set();
  function D(C) {
    M.postMessage(C, r);
  }
  function g(C, w) {
    const mt = {
      protocol: Of,
      version: Mf,
      kind: "event",
      type: C
    };
    w !== void 0 && (mt.payload = w), D(mt);
  }
  function V(C) {
    if (!Vd(C, M, r))
      return;
    const w = Qd(C.data);
    if (!w.ok)
      return;
    const mt = w.value;
    if (mt.kind !== "event" || mt.type !== "hana.theme.changed" || typeof mt.payload != "object" || mt.payload === null)
      return;
    const ct = mt.payload;
    Q = {
      theme: typeof ct.theme == "string" ? ct.theme : Q.theme,
      cssUrl: typeof ct.cssUrl == "string" ? ct.cssUrl : Q.cssUrl
    };
    for (const Mt of Y)
      Mt(Q);
  }
  function x(C, w, mt = {}) {
    const ct = j(), Mt = mt.timeoutMs ?? X;
    return new Promise((ht, Ct) => {
      const pt = () => {
        b.removeEventListener("message", Vt), b.clearTimeout(wt);
      }, Vt = (P) => {
        if (!Vd(P, M, r))
          return;
        const zt = Qd(P.data);
        if (!zt.ok)
          return;
        const Ht = zt.value;
        Ht.id !== ct || Ht.type !== C || (Ht.kind === "response" && (pt(), ht(Ht.payload)), Ht.kind === "error" && Ht.error && (pt(), Ct(new Ld(Ht.error))));
      }, wt = b.setTimeout(() => {
        pt(), Ct(new Ld({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${C}.`
        }));
      }, Mt);
      b.addEventListener("message", Vt);
      const Lt = {
        protocol: Of,
        version: Mf,
        id: ct,
        kind: "request",
        type: C
      };
      w !== void 0 && (Lt.payload = w), D(Lt);
    });
  }
  return {
    ready(C) {
      g("hana.ready", C);
    },
    assets: {
      url(C) {
        return L0(b, C);
      }
    },
    api: {
      url(C) {
        return Wd(b, C);
      },
      fetch(C, w) {
        return K0(b, C, w);
      }
    },
    ui: {
      resize(C) {
        g(la.UI_RESIZE, C);
      }
    },
    theme: {
      getSnapshot() {
        return { ...Q };
      },
      subscribe(C) {
        return Y.size === 0 && b.addEventListener("message", V), Y.add(C), C({ ...Q }), () => {
          Y.delete(C), Y.size === 0 && b.removeEventListener("message", V);
        };
      }
    },
    host: {
      request: x
    },
    toast: {
      show(C, w) {
        return x(la.TOAST_SHOW, C, w);
      }
    },
    external: {
      open(C, w) {
        return x(la.EXTERNAL_OPEN, G0(C), w);
      }
    },
    clipboard: {
      writeText(C, w) {
        return x(la.CLIPBOARD_WRITE_TEXT, X0(C), w);
      }
    },
    resources: {
      open(C, w) {
        return x(la.RESOURCE_OPEN, C, w);
      },
      pick(C = {}, w) {
        return x(la.RESOURCE_PICK, C, w);
      },
      requestAccess(C, w) {
        return x(la.RESOURCE_REQUEST_ACCESS, C, w);
      }
    }
  };
}
let Kd = null;
function ml() {
  return Kd ??= J0(), Kd;
}
const vt = {
  ready(f) {
    return ml().ready(f);
  },
  assets: {
    url(f) {
      return ml().assets.url(f);
    }
  },
  api: {
    url(f) {
      return ml().api.url(f);
    },
    fetch(f, b) {
      return ml().api.fetch(f, b);
    }
  },
  ui: {
    resize(f) {
      return ml().ui.resize(f);
    }
  },
  theme: {
    getSnapshot() {
      return ml().theme.getSnapshot();
    },
    subscribe(f) {
      return ml().theme.subscribe(f);
    }
  },
  host: {
    request(f, b, M) {
      return ml().host.request(f, b, M);
    }
  },
  toast: {
    show(f, b) {
      return ml().toast.show(f, b);
    }
  },
  external: {
    open(f, b) {
      return ml().external.open(f, b);
    }
  },
  clipboard: {
    writeText(f, b) {
      return ml().clipboard.writeText(f, b);
    }
  },
  resources: {
    open(f, b) {
      return ml().resources.open(f, b);
    },
    pick(f, b) {
      return ml().resources.pick(f, b);
    },
    requestAccess(f, b) {
      return ml().resources.requestAccess(f, b);
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
function k0({ mode: f = "inherit", theme: b, className: M, style: r, children: X, "data-testid": j = "hana-plugin-theme", ...Q }) {
  const Y = typeof b == "string" ? b : void 0, D = $0(f, b);
  return U.jsx("div", { ...Q, "data-testid": j, className: Kl("hana-plugin-theme", M), "data-hana-theme-mode": f, "data-hana-theme": f === "hana" ? Y : void 0, style: { ...D, ...r }, children: X });
}
function $0(f, b) {
  if (f === "inherit")
    return {};
  const M = F0(f, b), r = {};
  for (const [X, j] of Object.entries(w0)) {
    const Q = M?.[X];
    Q && (r[j] = Q);
  }
  return r;
}
function F0(f, b) {
  if (typeof b == "string")
    return Jd[b];
  if (b)
    return b;
  if (f === "hana")
    return Jd["warm-paper"];
}
const Qa = lt.forwardRef(function({ variant: b = "secondary", size: M = "md", loading: r = !1, iconLeft: X, iconRight: j, disabled: Q, className: Y, children: D, type: g = "button", ...V }, x) {
  return U.jsxs("button", { ...V, ref: x, type: g, disabled: Q || r, className: Kl("hana-plugin-button", `hana-plugin-button-${b}`, `hana-plugin-button-${M}`, r && "hana-plugin-button-loading", Y), children: [r ? U.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : X, D && U.jsx("span", { className: "hana-plugin-button-label", children: D }), !r && j] });
});
lt.forwardRef(function({ label: b, size: M = "md", variant: r = "ghost", className: X, children: j, type: Q = "button", ...Y }, D) {
  return U.jsx("button", { ...Y, ref: D, type: Q, "aria-label": b, title: Y.title || b, className: Kl("hana-plugin-icon-button", `hana-plugin-icon-button-${M}`, `hana-plugin-icon-button-${r}`, X), children: j });
});
const Tf = lt.forwardRef(function({ label: b, hint: M, error: r, id: X, className: j, inputClassName: Q, ...Y }, D) {
  const g = lt.useId(), V = X || g;
  return U.jsx(Id, { label: b, hint: M, error: r, htmlFor: V, className: j, children: U.jsx("input", { ...Y, ref: D, id: V, "aria-invalid": !!r, className: Kl("hana-plugin-input", Q) }) });
}), W0 = lt.forwardRef(function({ label: b, hint: M, error: r, id: X, className: j, textareaClassName: Q, rows: Y = 4, ...D }, g) {
  const V = lt.useId(), x = X || V;
  return U.jsx(Id, { label: b, hint: M, error: r, htmlFor: x, className: j, children: U.jsx("textarea", { ...D, ref: g, id: x, rows: Y, "aria-invalid": !!r, className: Kl("hana-plugin-textarea", Q) }) });
});
lt.forwardRef(function({ checked: b, onChange: M, label: r, disabled: X, className: j, onClick: Q, type: Y = "button", ...D }, g) {
  const V = typeof r == "string" ? r : D["aria-label"];
  return U.jsxs("span", { className: Kl("hana-plugin-switch-wrap", j), children: [U.jsx("button", { ...D, ref: g, type: Y, role: "switch", "aria-checked": b, "aria-label": V, disabled: X, className: Kl("hana-plugin-switch", b && "hana-plugin-switch-on"), onClick: (x) => {
    Q?.(x), !x.defaultPrevented && !X && M?.(!b);
  }, children: U.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), r && U.jsx("span", { className: "hana-plugin-switch-label", children: r })] });
});
function Id({ label: f, hint: b, error: M, htmlFor: r, className: X, children: j }) {
  return U.jsxs("div", { className: Kl("hana-plugin-field", X), children: [f && U.jsx("label", { className: "hana-plugin-field-label", htmlFor: r, children: f }), b && U.jsx("div", { className: "hana-plugin-field-hint", children: b }), j, M && U.jsx("div", { className: "hana-plugin-field-error", children: M })] });
}
function I0({ title: f, description: b, actions: M, footer: r, children: X, className: j, ...Q }) {
  return U.jsxs("section", { ...Q, className: Kl("hana-plugin-card", j), children: [(f || b || M) && U.jsxs("header", { className: "hana-plugin-card-header", children: [U.jsxs("div", { className: "hana-plugin-card-heading", children: [f && U.jsx("h2", { className: "hana-plugin-card-title", children: f }), b && U.jsx("p", { className: "hana-plugin-card-description", children: b })] }), M && U.jsx("div", { className: "hana-plugin-card-actions", children: M })] }), U.jsx("div", { className: "hana-plugin-card-body", children: X }), r && U.jsx("footer", { className: "hana-plugin-card-footer", children: r })] });
}
function Af({ icon: f, title: b, description: M, action: r, className: X, ...j }) {
  return U.jsxs("div", { ...j, className: Kl("hana-plugin-empty", X), children: [f && U.jsx("div", { className: "hana-plugin-empty-icon", children: f }), U.jsx("div", { className: "hana-plugin-empty-title", children: b }), M && U.jsx("div", { className: "hana-plugin-empty-description", children: M }), r && U.jsx("div", { className: "hana-plugin-empty-action", children: r })] });
}
function P0({ text: f }) {
  return /* @__PURE__ */ U.jsxs("span", { className: "ps-help", role: "button", tabIndex: 0, "aria-label": "使用提示", children: [
    /* @__PURE__ */ U.jsx("span", { className: "ps-help-icon", children: "?" }),
    /* @__PURE__ */ U.jsx("span", { className: "ps-help-pop", role: "tooltip", children: f })
  ] });
}
const zf = {
  dataDir: null,
  indexHealthy: !1,
  warning: null,
  degraded: null,
  directories: []
};
function ea(f) {
  return `${f.dir}/${f.filename}`;
}
function _f(f) {
  const b = f ?? "", M = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/.exec(b);
  return M ? b.slice(M[0].length) : b;
}
function ti(f, b) {
  const M = (f ?? "").replace(/[\\/]+$/, "");
  return b ? `${M}/${b}` : M;
}
function wd(f) {
  const b = f.replace(/\\/g, "/");
  return b.startsWith("/") ? `file://${b}` : `file:///${b}`;
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
], uy = [
  { key: "create-dir", label: "新建目录" },
  { key: "create-prompt", label: "新建卡片" }
];
function ny({
  menu: f,
  items: b,
  onSelect: M,
  onClose: r
}) {
  const X = lt.useRef(null), [j, Q] = lt.useState(null);
  return lt.useEffect(() => {
    if (!f) {
      Q(null);
      return;
    }
    const Y = X.current;
    if (!Y) return;
    const D = 8, g = window.innerWidth, V = window.innerHeight;
    let x = f.x, C = f.y;
    C + Y.offsetHeight + D > V && (C = V - Y.offsetHeight - D), x + Y.offsetWidth + D > g && (x = g - Y.offsetWidth - D), Q({ left: Math.max(D, x), top: Math.max(D, C) });
  }, [f]), lt.useEffect(() => {
    if (!f) return;
    function Y(x) {
      X.current && !X.current.contains(x.target) && r();
    }
    function D(x) {
      x.key === "Escape" && r();
    }
    function g() {
      r();
    }
    function V(x) {
      X.current && !X.current.contains(x.target) && r();
    }
    return window.addEventListener("pointerdown", Y), window.addEventListener("keydown", D), window.addEventListener("scroll", g, !0), window.addEventListener("contextmenu", V), () => {
      window.removeEventListener("pointerdown", Y), window.removeEventListener("keydown", D), window.removeEventListener("scroll", g, !0), window.removeEventListener("contextmenu", V);
    };
  }, [f, r]), f ? /* @__PURE__ */ U.jsx(
    "div",
    {
      ref: X,
      className: "ps-menu",
      style: j ? { left: j.left, top: j.top } : { left: -9999, top: -9999 },
      role: "menu",
      children: b.map((Y) => /* @__PURE__ */ U.jsxs(lt.Fragment, { children: [
        Y.separatorBefore && /* @__PURE__ */ U.jsx("div", { className: "ps-menu-sep" }),
        /* @__PURE__ */ U.jsx(
          "button",
          {
            type: "button",
            role: "menuitem",
            "aria-disabled": Y.disabled || void 0,
            className: `ps-menu-item${Y.danger ? " ps-menu-item-danger" : ""}${Y.disabled ? " ps-menu-item-disabled" : ""}`,
            onClick: () => {
              r(), M(Y.key);
            },
            children: Y.label
          }
        )
      ] }, Y.key))
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
  submit: b,
  done: M
}) {
  const r = f.kind === "confirm-delete-entry" || f.kind === "confirm-delete-dir", X = f.kind === "rename-entry" ? f.entry.title : f.kind === "rename-dir" ? f.dirName : "", [j, Q] = lt.useState(X), [Y, D] = lt.useState(""), [g, V] = lt.useState(!1), [x, C] = lt.useState(null), w = lt.useRef(null);
  lt.useEffect(() => {
    w.current?.focus();
  }, []);
  async function mt(ht) {
    V(!0), C(null);
    const Ct = await b(ht);
    V(!1), Ct.ok ? (vt.toast.show({ message: iy[f.kind], type: "success" }), M()) : C(Ct.error || "操作失败");
  }
  function ct() {
    switch (f.kind) {
      case "create-dir":
        return { type: "create-dir", name: j.trim() };
      case "create-prompt":
        return { type: "create-prompt", directory: f.dirName, name: j.trim(), content: Y };
      case "rename-entry":
        return { type: "rename-prompt", path: ea(f.entry), newName: j.trim() };
      case "rename-dir":
        return { type: "rename-dir", name: f.dirName, newName: j.trim() };
      case "confirm-delete-entry":
        return { type: "delete-prompt", path: ea(f.entry) };
      case "confirm-delete-dir":
        return { type: "delete-dir", name: f.dirName };
    }
  }
  const Mt = r || j.trim().length > 0;
  return /* @__PURE__ */ U.jsxs("div", { className: "ps-inline", children: [
    f.kind === "create-prompt" && /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
      /* @__PURE__ */ U.jsx(
        Tf,
        {
          label: "标题",
          placeholder: "词条标题（自动生成 frontmatter）",
          value: j,
          ref: w,
          onChange: (ht) => Q(ht.target.value)
        }
      ),
      /* @__PURE__ */ U.jsx(
        W0,
        {
          label: "内容",
          placeholder: "正文内容",
          className: "ps-inline-textarea",
          value: Y,
          onChange: (ht) => D(ht.target.value)
        }
      )
    ] }),
    f.kind === "create-dir" && /* @__PURE__ */ U.jsx(
      Tf,
      {
        label: "新目录名",
        placeholder: "输入目录名",
        value: j,
        ref: w,
        onChange: (ht) => Q(ht.target.value)
      }
    ),
    (f.kind === "rename-entry" || f.kind === "rename-dir") && /* @__PURE__ */ U.jsx(
      Tf,
      {
        label: f.kind === "rename-entry" ? "新名称" : "新目录名",
        value: j,
        ref: w,
        onChange: (ht) => Q(ht.target.value)
      }
    ),
    f.kind === "confirm-delete-entry" && /* @__PURE__ */ U.jsxs("div", { className: "ps-inline-hint", children: [
      "删除词条「",
      f.entry.title,
      "」？此操作不可撤销。"
    ] }),
    f.kind === "confirm-delete-dir" && /* @__PURE__ */ U.jsxs("div", { className: "ps-inline-hint", children: [
      "确认删除目录「",
      f.dirName,
      "」？将删除其中的所有词条，此操作不可撤销。"
    ] }),
    x && /* @__PURE__ */ U.jsx("div", { className: "ps-inline-error", children: x }),
    /* @__PURE__ */ U.jsx("div", { className: "ps-inline-row", children: r ? /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
      /* @__PURE__ */ U.jsx(Qa, { size: "sm", variant: "danger", onClick: M, children: "取消" }),
      /* @__PURE__ */ U.jsx(Qa, { size: "sm", variant: "ghost", loading: g, onClick: () => mt(ct()), children: "确认删除" })
    ] }) : /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
      /* @__PURE__ */ U.jsx(
        Qa,
        {
          size: "sm",
          variant: "primary",
          loading: g,
          disabled: !Mt,
          onClick: () => mt(ct()),
          children: "确定"
        }
      ),
      /* @__PURE__ */ U.jsx(Qa, { size: "sm", variant: "ghost", onClick: M, children: "取消" })
    ] }) })
  ] });
}
function cy({
  state: f,
  rebuilding: b,
  onRebuild: M
}) {
  const { dataDir: r, indexHealthy: X, warning: j, degraded: Q } = f, Y = !!r && X === !1, D = !!r && !Y && !!j, g = !!Q;
  return !Y && !D && !g ? null : /* @__PURE__ */ U.jsxs("div", { className: "ps-alerts", children: [
    Y && /* @__PURE__ */ U.jsxs("div", { className: "ps-alert ps-alert-warn", children: [
      /* @__PURE__ */ U.jsx("span", { className: "ps-alert-text", children: "排序索引损坏，已恢复默认顺序" }),
      /* @__PURE__ */ U.jsx(Qa, { size: "sm", variant: "secondary", loading: b, onClick: M, children: "重建索引" })
    ] }),
    D && /* @__PURE__ */ U.jsx("div", { className: "ps-alert ps-alert-warn", children: j }),
    g && /* @__PURE__ */ U.jsx("div", { className: "ps-alert ps-alert-degraded", children: "写入已降级为备份+直写模式" })
  ] });
}
function fy() {
  const [f, b] = lt.useState(null), [M, r] = lt.useState(/* @__PURE__ */ new Set()), [X, j] = lt.useState(/* @__PURE__ */ new Set()), [Q, Y] = lt.useState(null), [D, g] = lt.useState(null), [V, x] = lt.useState(!1), [C, w] = lt.useState(null), [mt, ct] = lt.useState(null), Mt = lt.useRef(null), ht = lt.useRef(null), Ct = lt.useRef(!1), pt = lt.useRef(null), Vt = lt.useRef(!1);
  async function wt() {
    const p = await N({ type: "rescan" });
    if (!p.ok) {
      b({ ...zf, warning: p.error || "刷新失败" });
      return;
    }
    if (p.state) {
      const R = { ...zf, ...p.state };
      !Vt.current && R.directories.length && (Vt.current = !0, r(new Set(R.directories.map((O) => O.name)))), vt.ui.resize({ height: 9999 });
    }
  }
  lt.useEffect(() => {
    vt.ready(), vt.ui.resize({ height: 9999 }), wt();
  }, []), lt.useEffect(() => {
    const R = (getComputedStyle(document.documentElement).getPropertyValue("--hana-plugin-bg") || "#F8F5ED").trim(), O = R.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)/);
    if (O) {
      const H = (0.299 * Number(O[1]) + 0.587 * Number(O[2]) + 0.114 * Number(O[3])) / 255, W = `color-mix(in srgb, ${R} 85%, ${H > 0.5 ? "white" : "black"} 15%)`;
      document.documentElement.style.setProperty("--ps-help-color", W);
    }
  }, []), lt.useEffect(() => {
    const p = document.documentElement;
    let R;
    function O() {
      p.classList.add("ps-scrolling"), R && window.clearTimeout(R), R = window.setTimeout(() => p.classList.remove("ps-scrolling"), 600);
    }
    return document.addEventListener("scroll", O, !0), () => {
      document.removeEventListener("scroll", O, !0), R && window.clearTimeout(R);
    };
  }, []), lt.useEffect(() => {
    function p() {
      document.hidden || wt();
    }
    return document.addEventListener("visibilitychange", p), window.addEventListener("focus", p), () => {
      document.removeEventListener("visibilitychange", p), window.removeEventListener("focus", p);
    };
  }, []), lt.useEffect(() => {
    function p() {
      z();
    }
    return window.addEventListener("dragend", p), () => window.removeEventListener("dragend", p);
  }, []);
  function Lt(p) {
    r((R) => {
      const O = new Set(R);
      return O.has(p) ? O.delete(p) : O.add(p), O;
    }), wt();
  }
  function P(p) {
    j((R) => {
      const O = new Set(R);
      return O.has(p) ? O.delete(p) : O.add(p), O;
    }), wt();
  }
  const zt = lt.useRef(null);
  function Ht(p) {
    zt.current !== null && window.clearTimeout(zt.current), zt.current = window.setTimeout(() => {
      zt.current = null, P(p);
    }, ly);
  }
  function Gl(p) {
    zt.current !== null && (window.clearTimeout(zt.current), zt.current = null), vt.clipboard.writeText(_f(p.content)), vt.toast.show({ message: "已复制", type: "success" });
  }
  lt.useEffect(() => () => {
    zt.current !== null && window.clearTimeout(zt.current);
  }, []);
  function hl(p, R) {
    p.dataTransfer.effectAllowed = "move";
    const O = ti(f?.dataDir ?? null, ea(R));
    try {
      p.dataTransfer.setData("text/plain", O), p.dataTransfer.setData("text/uri-list", wd(O));
    } catch {
    }
    const H = { kind: "entry", dir: R.dir, filename: R.filename, path: O };
    Mt.current = H, w(H), ct(null), Ct.current = !1, pt.current = { x: p.clientX, y: p.clientY };
    const W = f?.directories.find((gt) => gt.name === R.dir)?.entries;
    ht.current = W ? { kind: "entry", dir: R.dir, entries: [...W] } : null, Y(null);
  }
  function ll(p, R) {
    p.dataTransfer.effectAllowed = "move";
    const O = ti(f?.dataDir ?? null, R);
    try {
      p.dataTransfer.setData("text/plain", O), p.dataTransfer.setData("text/uri-list", wd(O));
    } catch {
    }
    const H = { kind: "dir", name: R, path: O };
    Mt.current = H, w(H), ct(null), Ct.current = !1, pt.current = { x: p.clientX, y: p.clientY }, ht.current = { kind: "dir", dirs: f?.directories ? [...f.directories] : [] }, Y(null);
  }
  function Xl(p, R, O) {
    if (O === R || O === R + 1) return null;
    const H = [...p], [W] = H.splice(R, 1);
    return H.splice(O > R ? O - 1 : O, 0, W), H;
  }
  function Bl(p, R) {
    b(
      (O) => O && {
        ...O,
        directories: O.directories.map((H) => H.name === p ? { ...H, entries: R } : H)
      }
    );
  }
  function nl(p, R) {
    pt.current = { x: p.clientX, y: p.clientY };
    const O = Mt.current;
    if (!O || O.kind !== "entry" || O.dir !== R.dir) return;
    p.preventDefault(), p.dataTransfer.dropEffect = "move";
    const H = f?.directories.find(($t) => $t.name === R.dir)?.entries;
    if (!H) return;
    const W = H.findIndex(($t) => $t.filename === O.filename), gt = H.findIndex(($t) => $t.filename === R.filename);
    if (W === -1 || gt === -1) return;
    const el = p.currentTarget.getBoundingClientRect(), Bt = p.clientY < el.top + el.height / 2, re = Xl(H, W, Bt ? gt : gt + 1);
    re && Bl(R.dir, re);
  }
  function T(p, R) {
    const O = Mt.current;
    if (!O || O.kind !== "entry" || O.dir !== R.dir) return;
    p.preventDefault(), Ct.current = !0;
    const H = f?.directories.find((gt) => gt.name === R.dir)?.entries;
    if (!H) return;
    const W = H.map((gt) => gt.filename);
    (async () => {
      const gt = await N({ type: "reorder", dirName: R.dir, items: W });
      gt.ok || (ft(), vt.toast.show({ message: gt.error || "排序保存失败", type: "error" }));
    })();
  }
  function B(p, R) {
    pt.current = { x: p.clientX, y: p.clientY };
    const O = Mt.current;
    if (O)
      if (O.kind === "dir") {
        p.preventDefault(), p.dataTransfer.dropEffect = "move";
        const H = f?.directories ?? [], W = H.findIndex(($t) => $t.name === O.name), gt = H.findIndex(($t) => $t.name === R);
        if (W === -1 || gt === -1) return;
        const el = p.currentTarget.getBoundingClientRect(), Bt = p.clientY < el.top + el.height / 2, re = Xl(H, W, Bt ? gt : gt + 1);
        re && b(($t) => $t && { ...$t, directories: re });
      } else O.kind === "entry" && O.dir !== R && (p.preventDefault(), p.dataTransfer.dropEffect = "move", ct(R));
  }
  function J(p) {
    const R = p.relatedTarget;
    if (R && p.currentTarget.contains(R)) return;
    const O = p.currentTarget.dataset.dirname;
    ct((H) => H === O ? null : H);
  }
  function yt(p, R) {
    const O = Mt.current;
    if (O) {
      if (p.preventDefault(), Ct.current = !0, ct(null), O.kind === "dir") {
        const H = (f?.directories ?? []).map((W) => W.name);
        (async () => {
          const W = await N({ type: "reorder", dirName: null, items: H });
          W.ok || (ft(), vt.toast.show({ message: W.error || "排序保存失败", type: "error" }));
        })();
      } else if (O.kind === "entry" && O.dir !== R) {
        const H = `${O.dir}/${O.filename}`;
        (async () => {
          const W = await N({ type: "move-prompt", path: H, targetDir: R });
          W.ok ? d(H, `${R}/${O.filename}`) : (ft(), vt.toast.show({ message: W.error || "移动失败", type: "error" }));
        })();
      }
    }
  }
  function ft() {
    const p = ht.current;
    p && (ht.current = null, b((R) => R && (p.kind === "entry" ? {
      ...R,
      directories: R.directories.map(
        (O) => O.name === p.dir ? { ...O, entries: p.entries } : O
      )
    } : { ...R, directories: p.dirs })));
  }
  function d(p, R) {
    j((O) => {
      if (!O.has(p)) return O;
      const H = new Set(O);
      return H.delete(p), H.add(R), H;
    });
  }
  function z() {
    const p = Mt.current;
    if (!p) return;
    const R = Ct.current, O = pt.current;
    !R && O && O.x <= ty && O.y >= 0 && O.y <= window.innerHeight && (vt.clipboard.writeText(p.path), vt.toast.show({ message: "已复制路径（宿主暂不支持跨 iframe 拖放），粘贴发送给 Agent", type: "info" })), R || ft(), Mt.current = null, w(null), ct(null), Ct.current = !1, pt.current = null;
  }
  async function N(p) {
    try {
      const O = await (await vt.api.fetch("api/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(p)
      })).json();
      return O.state && b({ ...zf, ...O.state }), { ok: O.ok === !0, error: O.error, state: O.state };
    } catch {
      return { ok: !1, error: "请求失败，请重载插件后重试" };
    }
  }
  async function G() {
    x(!0);
    const p = await N({ type: "rebuild" });
    x(!1), p.ok || vt.toast.show({ message: p.error || "重建索引失败", type: "error" });
  }
  async function k() {
    let p;
    try {
      p = await vt.resources.pick({ mode: "directory", multiple: !1 });
    } catch {
      vt.toast.show({ message: "选择目录失败", type: "error" });
      return;
    }
    const R = p?.resources?.[0];
    if (!R?.path) return;
    const O = await N({ type: "init", dataDir: R.path });
    O.ok || vt.toast.show({ message: O.error || "初始化失败", type: "error" });
  }
  function F(p, R, O, H) {
    p.preventDefault(), p.stopPropagation(), g(null), Y({ x: p.clientX, y: p.clientY, kind: R, entry: O, dirName: H });
  }
  async function st(p) {
    if (!Q) return;
    const { kind: R, entry: O, dirName: H } = Q, W = f?.dataDir ?? null;
    if (R === "entry" && O) {
      const gt = ti(W, ea(O));
      switch (p) {
        case "edit":
          try {
            await vt.resources.open({ resource: { kind: "local-file", path: gt }, mode: "edit" });
          } catch {
            try {
              await vt.resources.open({ resource: { kind: "local-file", path: gt }, mode: "preview" });
            } catch {
              vt.toast.show({ message: "无法打开文件", type: "error" });
            }
          }
          break;
        case "copy":
          await vt.clipboard.writeText(_f(O.content)), vt.toast.show({ message: "已复制正文", type: "success" });
          break;
        case "send": {
          const el = await N({ type: "send-to-agent", path: ea(O) });
          vt.toast.show({
            message: el.ok ? "已发送到当前会话" : el.error || "发送失败",
            type: el.ok ? "success" : "error"
          });
          break;
        }
        case "open-default":
          try {
            await vt.resources.open({ resource: { kind: "local-file", path: gt }, mode: "preview" });
          } catch {
            vt.toast.show({ message: "无法打开文件", type: "error" });
          }
          break;
        case "copy-path":
          await vt.clipboard.writeText(gt), vt.toast.show({ message: "已复制路径", type: "success" });
          break;
        case "screenshot":
          vt.toast.show({ message: "暂不支持", type: "info" });
          break;
        case "delete":
          g({ kind: "confirm-delete-entry", entry: O });
          break;
        case "rename":
          g({ kind: "rename-entry", entry: O });
          break;
      }
      return;
    }
    if (R === "blank") {
      switch (p) {
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
    if (R === "dir" && H) {
      const gt = ti(W, H);
      switch (p) {
        case "create-dir":
          g({ kind: "create-dir", anchorDir: H });
          break;
        case "create-prompt":
          g({ kind: "create-prompt", dirName: H });
          break;
        case "copy-path":
          await vt.clipboard.writeText(gt), vt.toast.show({ message: "已复制路径", type: "success" });
          break;
        case "delete-dir":
          g({ kind: "confirm-delete-dir", dirName: H });
          break;
        case "rename-dir":
          g({ kind: "rename-dir", dirName: H });
          break;
      }
    }
  }
  function kt(p, R) {
    switch (p.kind) {
      case "create-dir":
        return p.anchorDir === R;
      case "create-prompt":
      case "rename-dir":
      case "confirm-delete-dir":
        return p.dirName === R;
      default:
        return !1;
    }
  }
  function Nt() {
    return f ? f.dataDir ? !f.directories.length && !D ? /* @__PURE__ */ U.jsx("div", { onContextMenu: (p) => F(p, "blank"), children: /* @__PURE__ */ U.jsx(
      Af,
      {
        title: "架子上还没有词条",
        description: "右键目录行可以新建卡片，或通过工具写入第一个提示词。"
      }
    ) }) : /* @__PURE__ */ U.jsxs(
      "div",
      {
        className: "ps-shelf",
        onContextMenu: (p) => F(p, "blank"),
        onDragOver: (p) => {
          pt.current = { x: p.clientX, y: p.clientY };
        },
        children: [
          D?.kind === "create-dir" && !D.anchorDir && /* @__PURE__ */ U.jsx(Df, { form: D, submit: N, done: () => g(null) }),
          f.directories.map((p) => {
            const R = M.has(p.name), O = D && kt(D, p.name) ? D : null;
            return /* @__PURE__ */ U.jsxs("section", { className: "ps-dir", children: [
              /* @__PURE__ */ U.jsxs(
                "button",
                {
                  type: "button",
                  className: `ps-dir-head${C?.kind === "dir" && C.name === p.name ? " ps-dragging" : ""}${C?.kind === "entry" && C.dir !== p.name && mt === p.name ? " ps-drop-target" : ""}`,
                  onClick: () => Lt(p.name),
                  onContextMenu: (H) => F(H, "dir", void 0, p.name),
                  onDragStart: (H) => ll(H, p.name),
                  onDragOver: (H) => B(H, p.name),
                  onDragLeave: J,
                  onDrop: (H) => yt(H, p.name),
                  onDragEnd: z,
                  "data-dirname": p.name,
                  draggable: !0,
                  "aria-expanded": !R,
                  children: [
                    /* @__PURE__ */ U.jsx("span", { className: `ps-dir-arrow${R ? " ps-dir-arrow-collapsed" : ""}`, children: "▾" }),
                    /* @__PURE__ */ U.jsx("span", { className: "ps-dir-name", title: p.name, children: p.name }),
                    /* @__PURE__ */ U.jsx("span", { className: "ps-dir-count", children: p.entries.length })
                  ]
                }
              ),
              O && /* @__PURE__ */ U.jsx(Df, { form: O, submit: N, done: () => g(null) }),
              !R && /* @__PURE__ */ U.jsx("div", { className: "ps-pills", children: p.entries.map((H) => {
                const W = ea(H), gt = X.has(W), el = D && (D.kind === "rename-entry" || D.kind === "confirm-delete-entry") && ea(D.entry) === W ? D : null;
                return el ? /* @__PURE__ */ U.jsx(Df, { form: el, submit: N, done: () => g(null) }, W) : gt ? /* @__PURE__ */ U.jsxs("div", { className: "ps-card", children: [
                  /* @__PURE__ */ U.jsx(
                    "button",
                    {
                      type: "button",
                      className: `ps-card-head${C?.kind === "entry" && C.dir === p.name && C.filename === H.filename ? " ps-dragging" : ""}`,
                      onClick: () => Ht(W),
                      onDoubleClick: () => Gl(H),
                      onContextMenu: (Bt) => F(Bt, "entry", H),
                      onDragStart: (Bt) => hl(Bt, H),
                      onDragOver: (Bt) => nl(Bt, H),
                      onDrop: (Bt) => T(Bt, H),
                      onDragEnd: z,
                      draggable: !0,
                      title: "点击收起",
                      children: /* @__PURE__ */ U.jsx("span", { className: "ps-card-title", children: H.title })
                    }
                  ),
                  /* @__PURE__ */ U.jsx("pre", { className: "ps-card-body", onDoubleClick: () => Gl(H), children: _f(H.content) }),
                  /* @__PURE__ */ U.jsx(
                    "button",
                    {
                      type: "button",
                      className: "ps-card-close",
                      onClick: () => P(W),
                      "aria-label": "收起",
                      title: "收起",
                      children: "×"
                    }
                  )
                ] }, W) : /* @__PURE__ */ U.jsx(
                  "button",
                  {
                    type: "button",
                    className: `ps-pill${C?.kind === "entry" && C.dir === p.name && C.filename === H.filename ? " ps-dragging" : ""}`,
                    onClick: () => Ht(W),
                    onDoubleClick: () => Gl(H),
                    onContextMenu: (Bt) => F(Bt, "entry", H),
                    onDragStart: (Bt) => hl(Bt, H),
                    onDragOver: (Bt) => nl(Bt, H),
                    onDrop: (Bt) => T(Bt, H),
                    onDragEnd: z,
                    draggable: !0,
                    title: H.title,
                    children: /* @__PURE__ */ U.jsx("span", { className: "ps-pill-title", children: H.title })
                  },
                  W
                );
              }) })
            ] }, p.name);
          })
        ]
      }
    ) : /* @__PURE__ */ U.jsx(
      Af,
      {
        title: "提示词架尚未初始化",
        description: "选择一个数据目录作为提示词库的存放位置，之后词条会自动出现在这里。",
        action: /* @__PURE__ */ U.jsx(Qa, { variant: "primary", onClick: k, children: "选择数据目录" })
      }
    ) : /* @__PURE__ */ U.jsx(Af, { title: "加载中…", description: "正在读取提示词架" });
  }
  return /* @__PURE__ */ U.jsx(k0, { mode: "inherit", className: "plugin-panel", children: /* @__PURE__ */ U.jsxs(
    I0,
    {
      title: "PromptShelf",
      actions: /* @__PURE__ */ U.jsx(P0, { text: "提示词架：右键词条/目录操作，单击胶囊展开预览，点标题栏或 × 收起。" }),
      children: [
        f && /* @__PURE__ */ U.jsx(cy, { state: f, rebuilding: V, onRebuild: G }),
        Nt(),
        /* @__PURE__ */ U.jsx(
          ny,
          {
            menu: Q,
            items: Q?.kind === "entry" ? ey : Q?.kind === "blank" ? uy : ay,
            onSelect: st,
            onClose: () => Y(null)
          }
        )
      ]
    }
  ) });
}
const kd = document.getElementById("root");
kd && N0.createRoot(kd).render(/* @__PURE__ */ U.jsx(fy, {}));
