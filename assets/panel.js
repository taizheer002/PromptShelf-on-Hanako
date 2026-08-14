var vf = { exports: {} }, xu = {};
var Nd;
function E0() {
  if (Nd) return xu;
  Nd = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), S = /* @__PURE__ */ Symbol.for("react.fragment");
  function M(r, G, B) {
    var X = null;
    if (B !== void 0 && (X = "" + B), G.key !== void 0 && (X = "" + G.key), "key" in G) {
      B = {};
      for (var q in G)
        q !== "key" && (B[q] = G[q]);
    } else B = G;
    return G = B.ref, {
      $$typeof: f,
      type: r,
      key: X,
      ref: G !== void 0 ? G : null,
      props: B
    };
  }
  return xu.Fragment = S, xu.jsx = M, xu.jsxs = M, xu;
}
var Rd;
function T0() {
  return Rd || (Rd = 1, vf.exports = E0()), vf.exports;
}
var N = T0(), gf = { exports: {} }, W = {};
var Cd;
function A0() {
  if (Cd) return W;
  Cd = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), S = /* @__PURE__ */ Symbol.for("react.portal"), M = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), G = /* @__PURE__ */ Symbol.for("react.profiler"), B = /* @__PURE__ */ Symbol.for("react.consumer"), X = /* @__PURE__ */ Symbol.for("react.context"), q = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), V = /* @__PURE__ */ Symbol.for("react.lazy"), R = /* @__PURE__ */ Symbol.for("react.activity"), C = Symbol.iterator;
  function F(d) {
    return d === null || typeof d != "object" ? null : (d = C && d[C] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var ht = {
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
  function yt(d, T, H) {
    this.props = d, this.context = T, this.refs = Ot, this.updater = H || ht;
  }
  yt.prototype.isReactComponent = {}, yt.prototype.setState = function(d, T) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, d, T, "setState");
  }, yt.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function xt() {
  }
  xt.prototype = yt.prototype;
  function pt(d, T, H) {
    this.props = d, this.context = T, this.refs = Ot, this.updater = H || ht;
  }
  var Kt = pt.prototype = new xt();
  Kt.constructor = pt, ft(Kt, yt.prototype), Kt.isPureReactComponent = !0;
  var al = Array.isArray;
  function jt() {
  }
  var k = { H: null, A: null, T: null, S: null }, qt = Object.prototype.hasOwnProperty;
  function Nt(d, T, H) {
    var Y = H.ref;
    return {
      $$typeof: f,
      type: d,
      key: T,
      ref: Y !== void 0 ? Y : null,
      props: H
    };
  }
  function Vl(d, T) {
    return Nt(d.type, T, d.props);
  }
  function Al(d) {
    return typeof d == "object" && d !== null && d.$$typeof === f;
  }
  function Jt(d) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(H) {
      return T[H];
    });
  }
  var Kl = /\/+/g;
  function zl(d, T) {
    return typeof d == "object" && d !== null && d.key != null ? Jt("" + d.key) : T.toString(36);
  }
  function ul(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(jt, jt) : (d.status = "pending", d.then(
          function(T) {
            d.status === "pending" && (d.status = "fulfilled", d.value = T);
          },
          function(T) {
            d.status === "pending" && (d.status = "rejected", d.reason = T);
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
  function E(d, T, H, Y, $) {
    var lt = typeof d;
    (lt === "undefined" || lt === "boolean") && (d = null);
    var rt = !1;
    if (d === null) rt = !0;
    else
      switch (lt) {
        case "bigint":
        case "string":
        case "number":
          rt = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case f:
            case S:
              rt = !0;
              break;
            case V:
              return rt = d._init, E(
                rt(d._payload),
                T,
                H,
                Y,
                $
              );
          }
      }
    if (rt)
      return $ = $(d), rt = Y === "" ? "." + zl(d, 0) : Y, al($) ? (H = "", rt != null && (H = rt.replace(Kl, "$&/") + "/"), E($, T, H, "", function(O) {
        return O;
      })) : $ != null && (Al($) && ($ = Vl(
        $,
        H + ($.key == null || d && d.key === $.key ? "" : ("" + $.key).replace(
          Kl,
          "$&/"
        ) + "/") + rt
      )), T.push($)), 1;
    rt = 0;
    var wt = Y === "" ? "." : Y + ":";
    if (al(d))
      for (var _ = 0; _ < d.length; _++)
        Y = d[_], lt = wt + zl(Y, _), rt += E(
          Y,
          T,
          H,
          lt,
          $
        );
    else if (_ = F(d), typeof _ == "function")
      for (d = _.call(d), _ = 0; !(Y = d.next()).done; )
        Y = Y.value, lt = wt + zl(Y, _++), rt += E(
          Y,
          T,
          H,
          lt,
          $
        );
    else if (lt === "object") {
      if (typeof d.then == "function")
        return E(
          ul(d),
          T,
          H,
          Y,
          $
        );
      throw T = String(d), Error(
        "Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return rt;
  }
  function x(d, T, H) {
    if (d == null) return d;
    var Y = [], $ = 0;
    return E(d, Y, "", "", function(lt) {
      return T.call(H, lt, $++);
    }), Y;
  }
  function w(d) {
    if (d._status === -1) {
      var T = d._result;
      T = T(), T.then(
        function(H) {
          (d._status === 0 || d._status === -1) && (d._status = 1, d._result = H);
        },
        function(H) {
          (d._status === 0 || d._status === -1) && (d._status = 2, d._result = H);
        }
      ), d._status === -1 && (d._status = 0, d._result = T);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var st = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
        error: d
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  }, gt = {
    map: x,
    forEach: function(d, T, H) {
      x(
        d,
        function() {
          T.apply(this, arguments);
        },
        H
      );
    },
    count: function(d) {
      var T = 0;
      return x(d, function() {
        T++;
      }), T;
    },
    toArray: function(d) {
      return x(d, function(T) {
        return T;
      }) || [];
    },
    only: function(d) {
      if (!Al(d))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return d;
    }
  };
  return W.Activity = R, W.Children = gt, W.Component = yt, W.Fragment = M, W.Profiler = G, W.PureComponent = pt, W.StrictMode = r, W.Suspense = D, W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, W.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return k.H.useMemoCache(d);
    }
  }, W.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, W.cacheSignal = function() {
    return null;
  }, W.cloneElement = function(d, T, H) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var Y = ft({}, d.props), $ = d.key;
    if (T != null)
      for (lt in T.key !== void 0 && ($ = "" + T.key), T)
        !qt.call(T, lt) || lt === "key" || lt === "__self" || lt === "__source" || lt === "ref" && T.ref === void 0 || (Y[lt] = T[lt]);
    var lt = arguments.length - 2;
    if (lt === 1) Y.children = H;
    else if (1 < lt) {
      for (var rt = Array(lt), wt = 0; wt < lt; wt++)
        rt[wt] = arguments[wt + 2];
      Y.children = rt;
    }
    return Nt(d.type, $, Y);
  }, W.createContext = function(d) {
    return d = {
      $$typeof: X,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: B,
      _context: d
    }, d;
  }, W.createElement = function(d, T, H) {
    var Y, $ = {}, lt = null;
    if (T != null)
      for (Y in T.key !== void 0 && (lt = "" + T.key), T)
        qt.call(T, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && ($[Y] = T[Y]);
    var rt = arguments.length - 2;
    if (rt === 1) $.children = H;
    else if (1 < rt) {
      for (var wt = Array(rt), _ = 0; _ < rt; _++)
        wt[_] = arguments[_ + 2];
      $.children = wt;
    }
    if (d && d.defaultProps)
      for (Y in rt = d.defaultProps, rt)
        $[Y] === void 0 && ($[Y] = rt[Y]);
    return Nt(d, lt, $);
  }, W.createRef = function() {
    return { current: null };
  }, W.forwardRef = function(d) {
    return { $$typeof: q, render: d };
  }, W.isValidElement = Al, W.lazy = function(d) {
    return {
      $$typeof: V,
      _payload: { _status: -1, _result: d },
      _init: w
    };
  }, W.memo = function(d, T) {
    return {
      $$typeof: g,
      type: d,
      compare: T === void 0 ? null : T
    };
  }, W.startTransition = function(d) {
    var T = k.T, H = {};
    k.T = H;
    try {
      var Y = d(), $ = k.S;
      $ !== null && $(H, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(jt, st);
    } catch (lt) {
      st(lt);
    } finally {
      T !== null && H.types !== null && (T.types = H.types), k.T = T;
    }
  }, W.unstable_useCacheRefresh = function() {
    return k.H.useCacheRefresh();
  }, W.use = function(d) {
    return k.H.use(d);
  }, W.useActionState = function(d, T, H) {
    return k.H.useActionState(d, T, H);
  }, W.useCallback = function(d, T) {
    return k.H.useCallback(d, T);
  }, W.useContext = function(d) {
    return k.H.useContext(d);
  }, W.useDebugValue = function() {
  }, W.useDeferredValue = function(d, T) {
    return k.H.useDeferredValue(d, T);
  }, W.useEffect = function(d, T) {
    return k.H.useEffect(d, T);
  }, W.useEffectEvent = function(d) {
    return k.H.useEffectEvent(d);
  }, W.useId = function() {
    return k.H.useId();
  }, W.useImperativeHandle = function(d, T, H) {
    return k.H.useImperativeHandle(d, T, H);
  }, W.useInsertionEffect = function(d, T) {
    return k.H.useInsertionEffect(d, T);
  }, W.useLayoutEffect = function(d, T) {
    return k.H.useLayoutEffect(d, T);
  }, W.useMemo = function(d, T) {
    return k.H.useMemo(d, T);
  }, W.useOptimistic = function(d, T) {
    return k.H.useOptimistic(d, T);
  }, W.useReducer = function(d, T, H) {
    return k.H.useReducer(d, T, H);
  }, W.useRef = function(d) {
    return k.H.useRef(d);
  }, W.useState = function(d) {
    return k.H.useState(d);
  }, W.useSyncExternalStore = function(d, T, H) {
    return k.H.useSyncExternalStore(
      d,
      T,
      H
    );
  }, W.useTransition = function() {
    return k.H.useTransition();
  }, W.version = "19.2.8", W;
}
var xd;
function Uf() {
  return xd || (xd = 1, gf.exports = A0()), gf.exports;
}
var ct = Uf(), Sf = { exports: {} }, Hu = {}, bf = { exports: {} }, pf = {};
var Hd;
function z0() {
  return Hd || (Hd = 1, (function(f) {
    function S(E, x) {
      var w = E.length;
      E.push(x);
      t: for (; 0 < w; ) {
        var st = w - 1 >>> 1, gt = E[st];
        if (0 < G(gt, x))
          E[st] = x, E[w] = gt, w = st;
        else break t;
      }
    }
    function M(E) {
      return E.length === 0 ? null : E[0];
    }
    function r(E) {
      if (E.length === 0) return null;
      var x = E[0], w = E.pop();
      if (w !== x) {
        E[0] = w;
        t: for (var st = 0, gt = E.length, d = gt >>> 1; st < d; ) {
          var T = 2 * (st + 1) - 1, H = E[T], Y = T + 1, $ = E[Y];
          if (0 > G(H, w))
            Y < gt && 0 > G($, H) ? (E[st] = $, E[Y] = w, st = Y) : (E[st] = H, E[T] = w, st = T);
          else if (Y < gt && 0 > G($, w))
            E[st] = $, E[Y] = w, st = Y;
          else break t;
        }
      }
      return x;
    }
    function G(E, x) {
      var w = E.sortIndex - x.sortIndex;
      return w !== 0 ? w : E.id - x.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var B = performance;
      f.unstable_now = function() {
        return B.now();
      };
    } else {
      var X = Date, q = X.now();
      f.unstable_now = function() {
        return X.now() - q;
      };
    }
    var D = [], g = [], V = 1, R = null, C = 3, F = !1, ht = !1, ft = !1, Ot = !1, yt = typeof setTimeout == "function" ? setTimeout : null, xt = typeof clearTimeout == "function" ? clearTimeout : null, pt = typeof setImmediate < "u" ? setImmediate : null;
    function Kt(E) {
      for (var x = M(g); x !== null; ) {
        if (x.callback === null) r(g);
        else if (x.startTime <= E)
          r(g), x.sortIndex = x.expirationTime, S(D, x);
        else break;
        x = M(g);
      }
    }
    function al(E) {
      if (ft = !1, Kt(E), !ht)
        if (M(D) !== null)
          ht = !0, jt || (jt = !0, Jt());
        else {
          var x = M(g);
          x !== null && ul(al, x.startTime - E);
        }
    }
    var jt = !1, k = -1, qt = 5, Nt = -1;
    function Vl() {
      return Ot ? !0 : !(f.unstable_now() - Nt < qt);
    }
    function Al() {
      if (Ot = !1, jt) {
        var E = f.unstable_now();
        Nt = E;
        var x = !0;
        try {
          t: {
            ht = !1, ft && (ft = !1, xt(k), k = -1), F = !0;
            var w = C;
            try {
              l: {
                for (Kt(E), R = M(D); R !== null && !(R.expirationTime > E && Vl()); ) {
                  var st = R.callback;
                  if (typeof st == "function") {
                    R.callback = null, C = R.priorityLevel;
                    var gt = st(
                      R.expirationTime <= E
                    );
                    if (E = f.unstable_now(), typeof gt == "function") {
                      R.callback = gt, Kt(E), x = !0;
                      break l;
                    }
                    R === M(D) && r(D), Kt(E);
                  } else r(D);
                  R = M(D);
                }
                if (R !== null) x = !0;
                else {
                  var d = M(g);
                  d !== null && ul(
                    al,
                    d.startTime - E
                  ), x = !1;
                }
              }
              break t;
            } finally {
              R = null, C = w, F = !1;
            }
            x = void 0;
          }
        } finally {
          x ? Jt() : jt = !1;
        }
      }
    }
    var Jt;
    if (typeof pt == "function")
      Jt = function() {
        pt(Al);
      };
    else if (typeof MessageChannel < "u") {
      var Kl = new MessageChannel(), zl = Kl.port2;
      Kl.port1.onmessage = Al, Jt = function() {
        zl.postMessage(null);
      };
    } else
      Jt = function() {
        yt(Al, 0);
      };
    function ul(E, x) {
      k = yt(function() {
        E(f.unstable_now());
      }, x);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, f.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : qt = 0 < E ? Math.floor(1e3 / E) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, f.unstable_next = function(E) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var x = 3;
          break;
        default:
          x = C;
      }
      var w = C;
      C = x;
      try {
        return E();
      } finally {
        C = w;
      }
    }, f.unstable_requestPaint = function() {
      Ot = !0;
    }, f.unstable_runWithPriority = function(E, x) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var w = C;
      C = E;
      try {
        return x();
      } finally {
        C = w;
      }
    }, f.unstable_scheduleCallback = function(E, x, w) {
      var st = f.unstable_now();
      switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? st + w : st) : w = st, E) {
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
      return gt = w + gt, E = {
        id: V++,
        callback: x,
        priorityLevel: E,
        startTime: w,
        expirationTime: gt,
        sortIndex: -1
      }, w > st ? (E.sortIndex = w, S(g, E), M(D) === null && E === M(g) && (ft ? (xt(k), k = -1) : ft = !0, ul(al, w - st))) : (E.sortIndex = gt, S(D, E), ht || F || (ht = !0, jt || (jt = !0, Jt()))), E;
    }, f.unstable_shouldYield = Vl, f.unstable_wrapCallback = function(E) {
      var x = C;
      return function() {
        var w = C;
        C = x;
        try {
          return E.apply(this, arguments);
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
var Ef = { exports: {} }, tl = {};
var jd;
function D0() {
  if (jd) return tl;
  jd = 1;
  var f = Uf();
  function S(D) {
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
        throw Error(S(522));
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
  }, G = /* @__PURE__ */ Symbol.for("react.portal");
  function B(D, g, V) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: G,
      key: R == null ? null : "" + R,
      children: D,
      containerInfo: g,
      implementation: V
    };
  }
  var X = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function q(D, g) {
    if (D === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return tl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, tl.createPortal = function(D, g) {
    var V = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(S(299));
    return B(D, g, null, V);
  }, tl.flushSync = function(D) {
    var g = X.T, V = r.p;
    try {
      if (X.T = null, r.p = 2, D) return D();
    } finally {
      X.T = g, r.p = V, r.d.f();
    }
  }, tl.preconnect = function(D, g) {
    typeof D == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, r.d.C(D, g));
  }, tl.prefetchDNS = function(D) {
    typeof D == "string" && r.d.D(D);
  }, tl.preinit = function(D, g) {
    if (typeof D == "string" && g && typeof g.as == "string") {
      var V = g.as, R = q(V, g.crossOrigin), C = typeof g.integrity == "string" ? g.integrity : void 0, F = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      V === "style" ? r.d.S(
        D,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: R,
          integrity: C,
          fetchPriority: F
        }
      ) : V === "script" && r.d.X(D, {
        crossOrigin: R,
        integrity: C,
        fetchPriority: F,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, tl.preinitModule = function(D, g) {
    if (typeof D == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var V = q(
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
  }, tl.preload = function(D, g) {
    if (typeof D == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var V = g.as, R = q(V, g.crossOrigin);
      r.d.L(D, V, {
        crossOrigin: R,
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
  }, tl.preloadModule = function(D, g) {
    if (typeof D == "string")
      if (g) {
        var V = q(g.as, g.crossOrigin);
        r.d.m(D, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: V,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else r.d.m(D);
  }, tl.requestFormReset = function(D) {
    r.d.r(D);
  }, tl.unstable_batchedUpdates = function(D, g) {
    return D(g);
  }, tl.useFormState = function(D, g, V) {
    return X.H.useFormState(D, g, V);
  }, tl.useFormStatus = function() {
    return X.H.useHostTransitionStatus();
  }, tl.version = "19.2.8", tl;
}
var qd;
function O0() {
  if (qd) return Ef.exports;
  qd = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (S) {
        console.error(S);
      }
  }
  return f(), Ef.exports = D0(), Ef.exports;
}
var Yd;
function M0() {
  if (Yd) return Hu;
  Yd = 1;
  var f = _0(), S = Uf(), M = O0();
  function r(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function G(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function B(t) {
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
  function X(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function q(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function D(t) {
    if (B(t) !== t)
      throw Error(r(188));
  }
  function g(t) {
    var l = t.alternate;
    if (!l) {
      if (l = B(t), l === null) throw Error(r(188));
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
  var R = Object.assign, C = /* @__PURE__ */ Symbol.for("react.element"), F = /* @__PURE__ */ Symbol.for("react.transitional.element"), ht = /* @__PURE__ */ Symbol.for("react.portal"), ft = /* @__PURE__ */ Symbol.for("react.fragment"), Ot = /* @__PURE__ */ Symbol.for("react.strict_mode"), yt = /* @__PURE__ */ Symbol.for("react.profiler"), xt = /* @__PURE__ */ Symbol.for("react.consumer"), pt = /* @__PURE__ */ Symbol.for("react.context"), Kt = /* @__PURE__ */ Symbol.for("react.forward_ref"), al = /* @__PURE__ */ Symbol.for("react.suspense"), jt = /* @__PURE__ */ Symbol.for("react.suspense_list"), k = /* @__PURE__ */ Symbol.for("react.memo"), qt = /* @__PURE__ */ Symbol.for("react.lazy"), Nt = /* @__PURE__ */ Symbol.for("react.activity"), Vl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Al = Symbol.iterator;
  function Jt(t) {
    return t === null || typeof t != "object" ? null : (t = Al && t[Al] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Kl = /* @__PURE__ */ Symbol.for("react.client.reference");
  function zl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Kl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case ft:
        return "Fragment";
      case yt:
        return "Profiler";
      case Ot:
        return "StrictMode";
      case al:
        return "Suspense";
      case jt:
        return "SuspenseList";
      case Nt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ht:
          return "Portal";
        case pt:
          return t.displayName || "Context";
        case xt:
          return (t._context.displayName || "Context") + ".Consumer";
        case Kt:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case k:
          return l = t.displayName || null, l !== null ? l : zl(t.type) || "Memo";
        case qt:
          l = t._payload, t = t._init;
          try {
            return zl(t(l));
          } catch {
          }
      }
    return null;
  }
  var ul = Array.isArray, E = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, st = [], gt = -1;
  function d(t) {
    return { current: t };
  }
  function T(t) {
    0 > gt || (t.current = st[gt], st[gt] = null, gt--);
  }
  function H(t, l) {
    gt++, st[gt] = t.current, t.current = l;
  }
  var Y = d(null), $ = d(null), lt = d(null), rt = d(null);
  function wt(t, l) {
    switch (H(lt, l), H($, t), H(Y, null), l.nodeType) {
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
    T(Y), H(Y, t);
  }
  function _() {
    T(Y), T($), T(lt);
  }
  function O(t) {
    t.memoizedState !== null && H(rt, t);
    var l = Y.current, e = td(l, t.type);
    l !== e && (H($, t), H(Y, e));
  }
  function U(t) {
    $.current === t && (T(Y), T($)), rt.current === t && (T(rt), Uu._currentValue = w);
  }
  var Z, K;
  function tt(t) {
    if (Z === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        Z = l && l[1] || "", K = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Z + t + K;
  }
  var ll = !1;
  function Yl(t, l) {
    if (!t || ll) return "";
    ll = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (b) {
                  var v = b;
                }
                Reflect.construct(t, [], z);
              } else {
                try {
                  z.call();
                } catch (b) {
                  v = b;
                }
                t.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                v = b;
              }
              (z = t()) && typeof z.catch == "function" && z.catch(function() {
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
                  var p = `
` + s[a].replace(" at new ", " at ");
                  return t.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", t.displayName)), p;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      ll = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? tt(e) : "";
  }
  function Ut(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return tt(t.type);
      case 16:
        return tt("Lazy");
      case 13:
        return t.child !== l && l !== null ? tt("Suspense Fallback") : tt("Suspense");
      case 19:
        return tt("SuspenseList");
      case 0:
      case 15:
        return Yl(t.type, !1);
      case 11:
        return Yl(t.type.render, !1);
      case 1:
        return Yl(t.type, !0);
      case 31:
        return tt("Activity");
      default:
        return "";
    }
  }
  function Pt(t) {
    try {
      var l = "", e = null;
      do
        l += Ut(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var ti = Object.prototype.hasOwnProperty, li = f.unstable_scheduleCallback, ei = f.unstable_cancelCallback, Pd = f.unstable_shouldYield, tm = f.unstable_requestPaint, ml = f.unstable_now, lm = f.unstable_getCurrentPriorityLevel, Nf = f.unstable_ImmediatePriority, Rf = f.unstable_UserBlockingPriority, Bu = f.unstable_NormalPriority, em = f.unstable_LowPriority, Cf = f.unstable_IdlePriority, am = f.log, um = f.unstable_setDisableYieldValue, Qa = null, hl = null;
  function re(t) {
    if (typeof am == "function" && um(t), hl && typeof hl.setStrictMode == "function")
      try {
        hl.setStrictMode(Qa, t);
      } catch {
      }
  }
  var yl = Math.clz32 ? Math.clz32 : cm, nm = Math.log, im = Math.LN2;
  function cm(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (nm(t) / im | 0) | 0;
  }
  var ju = 256, qu = 262144, Yu = 4194304;
  function je(t) {
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
  function Gu(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0, n = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? u = je(a) : (i &= c, i !== 0 ? u = je(i) : e || (e = c & ~t, e !== 0 && (u = je(e))))) : (c = a & ~n, c !== 0 ? u = je(c) : i !== 0 ? u = je(i) : e || (e = a & ~t, e !== 0 && (u = je(e)))), u === 0 ? 0 : l !== 0 && l !== u && (l & n) === 0 && (n = u & -u, e = l & -l, n >= e || n === 32 && (e & 4194048) !== 0) ? l : u;
  }
  function La(t, l) {
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
  function xf() {
    var t = Yu;
    return Yu <<= 1, (Yu & 62914560) === 0 && (Yu = 4194304), t;
  }
  function ai(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Za(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function sm(t, l, e, a, u, n) {
    var i = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var c = t.entanglements, s = t.expirationTimes, y = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var p = 31 - yl(e), z = 1 << p;
      c[p] = 0, s[p] = -1;
      var v = y[p];
      if (v !== null)
        for (y[p] = null, p = 0; p < v.length; p++) {
          var b = v[p];
          b !== null && (b.lane &= -536870913);
        }
      e &= ~z;
    }
    a !== 0 && Hf(t, a, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l));
  }
  function Hf(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var a = 31 - yl(l);
    t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 261930;
  }
  function Bf(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var a = 31 - yl(e), u = 1 << a;
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
    var t = x.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Ad(t.type));
  }
  function Yf(t, l) {
    var e = x.p;
    try {
      return x.p = t, l();
    } finally {
      x.p = e;
    }
  }
  var oe = Math.random().toString(36).slice(2), kt = "__reactFiber$" + oe, nl = "__reactProps$" + oe, ea = "__reactContainer$" + oe, ii = "__reactEvents$" + oe, rm = "__reactListeners$" + oe, om = "__reactHandles$" + oe, Gf = "__reactResources$" + oe, Va = "__reactMarker$" + oe;
  function ci(t) {
    delete t[kt], delete t[nl], delete t[ii], delete t[rm], delete t[om];
  }
  function aa(t) {
    var l = t[kt];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[ea] || e[kt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = cd(t); t !== null; ) {
            if (e = t[kt]) return e;
            t = cd(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function ua(t) {
    if (t = t[kt] || t[ea]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Ka(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(r(33));
  }
  function na(t) {
    var l = t[Gf];
    return l || (l = t[Gf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Zt(t) {
    t[Va] = !0;
  }
  var Xf = /* @__PURE__ */ new Set(), Qf = {};
  function qe(t, l) {
    ia(t, l), ia(t + "Capture", l);
  }
  function ia(t, l) {
    for (Qf[t] = l, t = 0; t < l.length; t++)
      Xf.add(l[t]);
  }
  var dm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Lf = {}, Zf = {};
  function mm(t) {
    return ti.call(Zf, t) ? !0 : ti.call(Lf, t) ? !1 : dm.test(t) ? Zf[t] = !0 : (Lf[t] = !0, !1);
  }
  function Xu(t, l, e) {
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
  function Qu(t, l, e) {
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
  function Lu(t) {
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
    l === "number" && Lu(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
  }
  function ca(t, l, e, a) {
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
        if (ul(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), l = e;
    }
    e = _l(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a), fi(t);
  }
  function fa(t, l) {
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
  function Zu(t) {
    return Sm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function wl() {
  }
  var di = null;
  function mi(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var sa = null, ra = null;
  function Wf(t) {
    var l = ua(t);
    if (l && (t = l.stateNode)) {
      var e = t[nl] || null;
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
                var u = a[nl] || null;
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
          l = e.value, l != null && ca(t, !!e.multiple, l, !1);
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
      if (hi = !1, (sa !== null || ra !== null) && (Rn(), sa && (l = sa, t = ra, ra = sa = null, Wf(l), t)))
        for (l = 0; l < t.length; l++) Wf(t[l]);
    }
  }
  function Ja(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[nl] || null;
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
      var wa = {};
      Object.defineProperty(wa, "passive", {
        get: function() {
          yi = !0;
        }
      }), window.addEventListener("test", wa, wa), window.removeEventListener("test", wa, wa);
    } catch {
      yi = !1;
    }
  var de = null, vi = null, Vu = null;
  function Pf() {
    if (Vu) return Vu;
    var t, l = vi, e = l.length, a, u = "value" in de ? de.value : de.textContent, n = u.length;
    for (t = 0; t < e && l[t] === u[t]; t++) ;
    var i = e - t;
    for (a = 1; a <= i && l[e - a] === u[n - a]; a++) ;
    return Vu = u.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Ku(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Ju() {
    return !0;
  }
  function ts() {
    return !1;
  }
  function il(t) {
    function l(e, a, u, n, i) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ju : ts, this.isPropagationStopped = ts, this;
    }
    return R(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Ju);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Ju);
      },
      persist: function() {
      },
      isPersistent: Ju
    }), l;
  }
  var Ye = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, wu = il(Ye), ka = R({}, Ye, { view: 0, detail: 0 }), bm = il(ka), gi, Si, $a, ku = R({}, ka, {
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
      return "movementX" in t ? t.movementX : (t !== $a && ($a && t.type === "mousemove" ? (gi = t.screenX - $a.screenX, Si = t.screenY - $a.screenY) : Si = gi = 0, $a = t), gi);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Si;
    }
  }), ls = il(ku), pm = R({}, ku, { dataTransfer: 0 }), Em = il(pm), Tm = R({}, ka, { relatedTarget: 0 }), bi = il(Tm), Am = R({}, Ye, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), zm = il(Am), _m = R({}, Ye, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Dm = il(_m), Om = R({}, Ye, { data: 0 }), es = il(Om), Mm = {
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
  var Cm = R({}, ka, {
    key: function(t) {
      if (t.key) {
        var l = Mm[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = Ku(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Um[t.keyCode] || "Unidentified" : "";
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
      return t.type === "keypress" ? Ku(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ku(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), xm = il(Cm), Hm = R({}, ku, {
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
  }), as = il(Hm), Bm = R({}, ka, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pi
  }), jm = il(Bm), qm = R({}, Ye, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ym = il(qm), Gm = R({}, ku, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Xm = il(Gm), Qm = R({}, Ye, {
    newState: 0,
    oldState: 0
  }), Lm = il(Qm), Zm = [9, 13, 27, 32], Ei = kl && "CompositionEvent" in window, Fa = null;
  kl && "documentMode" in document && (Fa = document.documentMode);
  var Vm = kl && "TextEvent" in window && !Fa, us = kl && (!Ei || Fa && 8 < Fa && 11 >= Fa), ns = " ", is = !1;
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
  var oa = !1;
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
    if (oa)
      return t === "compositionend" || !Ei && cs(t, l) ? (t = Pf(), Vu = vi = de = null, oa = !1, t) : null;
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
    sa ? ra ? ra.push(a) : ra = [a] : sa = a, l = Yn(l, "onChange"), 0 < l.length && (e = new wu(
      "onChange",
      "change",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }));
  }
  var Wa = null, Ia = null;
  function km(t) {
    wo(t, 0);
  }
  function $u(t) {
    var l = Ka(t);
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
    Wa && (Wa.detachEvent("onpropertychange", ys), Ia = Wa = null);
  }
  function ys(t) {
    if (t.propertyName === "value" && $u(Ia)) {
      var l = [];
      rs(
        l,
        Ia,
        t,
        mi(t)
      ), If(km, l);
    }
  }
  function $m(t, l, e) {
    t === "focusin" ? (hs(), Wa = l, Ia = e, Wa.attachEvent("onpropertychange", ys)) : t === "focusout" && hs();
  }
  function Fm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return $u(Ia);
  }
  function Wm(t, l) {
    if (t === "click") return $u(l);
  }
  function Im(t, l) {
    if (t === "input" || t === "change")
      return $u(l);
  }
  function Pm(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var vl = typeof Object.is == "function" ? Object.is : Pm;
  function Pa(t, l) {
    if (vl(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!ti.call(l, u) || !vl(t[u], l[u]))
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
    for (var l = Lu(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Lu(t.document);
    }
    return l;
  }
  function zi(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var th = kl && "documentMode" in document && 11 >= document.documentMode, da = null, _i = null, tu = null, Di = !1;
  function ps(t, l, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Di || da == null || da !== Lu(a) || (a = da, "selectionStart" in a && zi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), tu && Pa(tu, a) || (tu = a, a = Yn(_i, "onSelect"), 0 < a.length && (l = new wu(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: a }), l.target = da)));
  }
  function Ge(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var ma = {
    animationend: Ge("Animation", "AnimationEnd"),
    animationiteration: Ge("Animation", "AnimationIteration"),
    animationstart: Ge("Animation", "AnimationStart"),
    transitionrun: Ge("Transition", "TransitionRun"),
    transitionstart: Ge("Transition", "TransitionStart"),
    transitioncancel: Ge("Transition", "TransitionCancel"),
    transitionend: Ge("Transition", "TransitionEnd")
  }, Oi = {}, Es = {};
  kl && (Es = document.createElement("div").style, "AnimationEvent" in window || (delete ma.animationend.animation, delete ma.animationiteration.animation, delete ma.animationstart.animation), "TransitionEvent" in window || delete ma.transitionend.transition);
  function Xe(t) {
    if (Oi[t]) return Oi[t];
    if (!ma[t]) return t;
    var l = ma[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in Es)
        return Oi[t] = l[e];
    return t;
  }
  var Ts = Xe("animationend"), As = Xe("animationiteration"), zs = Xe("animationstart"), lh = Xe("transitionrun"), eh = Xe("transitionstart"), ah = Xe("transitioncancel"), _s = Xe("transitionend"), Ds = /* @__PURE__ */ new Map(), Mi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Mi.push("scrollEnd");
  function Bl(t, l) {
    Ds.set(t, l), qe(l, [t]);
  }
  var Fu = typeof reportError == "function" ? reportError : function(t) {
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
  }, Ol = [], ha = 0, Ui = 0;
  function Wu() {
    for (var t = ha, l = Ui = ha = 0; l < t; ) {
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
  function Iu(t, l, e, a) {
    Ol[ha++] = t, Ol[ha++] = l, Ol[ha++] = e, Ol[ha++] = a, Ui |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Ni(t, l, e, a) {
    return Iu(t, l, e, a), Pu(t);
  }
  function Qe(t, l) {
    return Iu(t, null, null, l), Pu(t);
  }
  function Os(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = t.return; n !== null; )
      n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (u = !0)), t = n, n = n.return;
    return t.tag === 3 ? (n = t.stateNode, u && l !== null && (u = 31 - yl(e), t = n.hiddenUpdates, a = t[u], a === null ? t[u] = [l] : a.push(l), l.lane = e | 536870912), n) : null;
  }
  function Pu(t) {
    if (50 < Tu)
      throw Tu = 0, Gc = null, Error(r(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ya = {};
  function uh(t, l, e, a) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function gl(t, l, e, a) {
    return new uh(t, l, e, a);
  }
  function Ri(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function $l(t, l) {
    var e = t.alternate;
    return e === null ? (e = gl(
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
  function tn(t, l, e, a, u, n) {
    var i = 0;
    if (a = t, typeof t == "function") Ri(t) && (i = 1);
    else if (typeof t == "string")
      i = s0(
        t,
        e,
        Y.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Nt:
          return t = gl(31, e, l, u), t.elementType = Nt, t.lanes = n, t;
        case ft:
          return Le(e.children, u, n, l);
        case Ot:
          i = 8, u |= 24;
          break;
        case yt:
          return t = gl(12, e, l, u | 2), t.elementType = yt, t.lanes = n, t;
        case al:
          return t = gl(13, e, l, u), t.elementType = al, t.lanes = n, t;
        case jt:
          return t = gl(19, e, l, u), t.elementType = jt, t.lanes = n, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case pt:
                i = 10;
                break t;
              case xt:
                i = 9;
                break t;
              case Kt:
                i = 11;
                break t;
              case k:
                i = 14;
                break t;
              case qt:
                i = 16, a = null;
                break t;
            }
          i = 29, e = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return l = gl(i, e, l, u), l.elementType = t, l.type = a, l.lanes = n, l;
  }
  function Le(t, l, e, a) {
    return t = gl(7, t, a, l), t.lanes = e, t;
  }
  function Ci(t, l, e) {
    return t = gl(6, t, null, l), t.lanes = e, t;
  }
  function Us(t) {
    var l = gl(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function xi(t, l, e) {
    return l = gl(
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
        stack: Pt(l)
      }, Ns.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: Pt(l)
    };
  }
  var va = [], ga = 0, ln = null, lu = 0, Ul = [], Nl = 0, me = null, Gl = 1, Xl = "";
  function Fl(t, l) {
    va[ga++] = lu, va[ga++] = ln, ln = t, lu = l;
  }
  function Rs(t, l, e) {
    Ul[Nl++] = Gl, Ul[Nl++] = Xl, Ul[Nl++] = me, me = t;
    var a = Gl;
    t = Xl;
    var u = 32 - yl(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - yl(l) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, Gl = 1 << 32 - yl(l) + u | e << u | a, Xl = n + t;
    } else
      Gl = 1 << n | e << u | a, Xl = t;
  }
  function Hi(t) {
    t.return !== null && (Fl(t, 1), Rs(t, 1, 0));
  }
  function Bi(t) {
    for (; t === ln; )
      ln = va[--ga], va[ga] = null, lu = va[--ga], va[ga] = null;
    for (; t === me; )
      me = Ul[--Nl], Ul[Nl] = null, Xl = Ul[--Nl], Ul[Nl] = null, Gl = Ul[--Nl], Ul[Nl] = null;
  }
  function Cs(t, l) {
    Ul[Nl++] = Gl, Ul[Nl++] = Xl, Ul[Nl++] = me, Gl = l.id, Xl = l.overflow, me = t;
  }
  var $t = null, _t = null, it = !1, he = null, Rl = !1, ji = Error(r(519));
  function ye(t) {
    var l = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw eu(Ml(l, t)), ji;
  }
  function xs(t) {
    var l = t.stateNode, e = t.type, a = t.memoizedProps;
    switch (l[kt] = t, l[nl] = a, e) {
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
        for (e = 0; e < zu.length; e++)
          at(zu[e], l);
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
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === !0 || Wo(l.textContent, e) ? (a.popover != null && (at("beforetoggle", l), at("toggle", l)), a.onScroll != null && at("scroll", l), a.onScrollEnd != null && at("scrollend", l), a.onClick != null && (l.onclick = wl), l = !0) : l = !1, l || ye(t, !0);
  }
  function Hs(t) {
    for ($t = t.return; $t; )
      switch ($t.tag) {
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
          $t = $t.return;
      }
  }
  function Sa(t) {
    if (t !== $t) return !1;
    if (!it) return Hs(t), it = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || tf(t.type, t.memoizedProps)), e = !e), e && _t && ye(t), Hs(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      _t = id(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      _t = id(t);
    } else
      l === 27 ? (l = _t, Ue(t.type) ? (t = nf, nf = null, _t = t) : _t = l) : _t = $t ? xl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ze() {
    _t = $t = null, it = !1;
  }
  function qi() {
    var t = he;
    return t !== null && (rl === null ? rl = t : rl.push.apply(
      rl,
      t
    ), he = null), t;
  }
  function eu(t) {
    he === null ? he = [t] : he.push(t);
  }
  var Yi = d(null), Ve = null, Wl = null;
  function ve(t, l, e) {
    H(Yi, l._currentValue), l._currentValue = e;
  }
  function Il(t) {
    t._currentValue = Yi.current, T(Yi);
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
  function ba(t, l, e, a) {
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
          vl(u.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (u === rt.current) {
        if (i = u.alternate, i === null) throw Error(r(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Uu) : t = [Uu]);
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
  function en(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!vl(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Ke(t) {
    Ve = t, Wl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Ft(t) {
    return Bs(Ve, t);
  }
  function an(t, l) {
    return Ve === null && Ke(t), Bs(t, l);
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
  function au(t) {
    t.refCount--, t.refCount === 0 && ih(ch, function() {
      t.controller.abort();
    });
  }
  var uu = null, Li = 0, pa = 0, Ea = null;
  function fh(t, l) {
    if (uu === null) {
      var e = uu = [];
      Li = 0, pa = Kc(), Ea = {
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
    if (--Li === 0 && uu !== null) {
      Ea !== null && (Ea.status = "fulfilled");
      var t = uu;
      uu = null, pa = 0, Ea = null;
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
  var qs = E.S;
  E.S = function(t, l) {
    Eo = ml(), typeof l == "object" && l !== null && typeof l.then == "function" && fh(t, l), qs !== null && qs(t, l);
  };
  var Je = d(null);
  function Zi() {
    var t = Je.current;
    return t !== null ? t : zt.pooledCache;
  }
  function un(t, l) {
    l === null ? H(Je, Je.current) : H(Je, l.pool);
  }
  function Ys() {
    var t = Zi();
    return t === null ? null : { parent: Yt._currentValue, pool: t };
  }
  var Ta = Error(r(460)), Vi = Error(r(474)), nn = Error(r(542)), cn = { then: function() {
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
          if (t = zt, t !== null && 100 < t.shellSuspendCounter)
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
        throw ke = l, Ta;
    }
  }
  function we(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (ke = e, Ta) : e;
    }
  }
  var ke = null;
  function Qs() {
    if (ke === null) throw Error(r(459));
    var t = ke;
    return ke = null, t;
  }
  function Ls(t) {
    if (t === Ta || t === nn)
      throw Error(r(483));
  }
  var Aa = null, nu = 0;
  function fn(t) {
    var l = nu;
    return nu += 1, Aa === null && (Aa = []), Xs(Aa, t, l);
  }
  function iu(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function sn(t, l) {
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
      return o === null || o.tag !== 6 ? (o = Ci(h, m.mode, A), o.return = m, o) : (o = u(o, h), o.return = m, o);
    }
    function s(m, o, h, A) {
      var L = h.type;
      return L === ft ? p(
        m,
        o,
        h.props.children,
        A,
        h.key
      ) : o !== null && (o.elementType === L || typeof L == "object" && L !== null && L.$$typeof === qt && we(L) === o.type) ? (o = u(o, h.props), iu(o, h), o.return = m, o) : (o = tn(
        h.type,
        h.key,
        h.props,
        null,
        m.mode,
        A
      ), iu(o, h), o.return = m, o);
    }
    function y(m, o, h, A) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== h.containerInfo || o.stateNode.implementation !== h.implementation ? (o = xi(h, m.mode, A), o.return = m, o) : (o = u(o, h.children || []), o.return = m, o);
    }
    function p(m, o, h, A, L) {
      return o === null || o.tag !== 7 ? (o = Le(
        h,
        m.mode,
        A,
        L
      ), o.return = m, o) : (o = u(o, h), o.return = m, o);
    }
    function z(m, o, h) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = Ci(
          "" + o,
          m.mode,
          h
        ), o.return = m, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case F:
            return h = tn(
              o.type,
              o.key,
              o.props,
              null,
              m.mode,
              h
            ), iu(h, o), h.return = m, h;
          case ht:
            return o = xi(
              o,
              m.mode,
              h
            ), o.return = m, o;
          case qt:
            return o = we(o), z(m, o, h);
        }
        if (ul(o) || Jt(o))
          return o = Le(
            o,
            m.mode,
            h,
            null
          ), o.return = m, o;
        if (typeof o.then == "function")
          return z(m, fn(o), h);
        if (o.$$typeof === pt)
          return z(
            m,
            an(m, o),
            h
          );
        sn(m, o);
      }
      return null;
    }
    function v(m, o, h, A) {
      var L = o !== null ? o.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return L !== null ? null : c(m, o, "" + h, A);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case F:
            return h.key === L ? s(m, o, h, A) : null;
          case ht:
            return h.key === L ? y(m, o, h, A) : null;
          case qt:
            return h = we(h), v(m, o, h, A);
        }
        if (ul(h) || Jt(h))
          return L !== null ? null : p(m, o, h, A, null);
        if (typeof h.then == "function")
          return v(
            m,
            o,
            fn(h),
            A
          );
        if (h.$$typeof === pt)
          return v(
            m,
            o,
            an(m, h),
            A
          );
        sn(m, h);
      }
      return null;
    }
    function b(m, o, h, A, L) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return m = m.get(h) || null, c(o, m, "" + A, L);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case F:
            return m = m.get(
              A.key === null ? h : A.key
            ) || null, s(o, m, A, L);
          case ht:
            return m = m.get(
              A.key === null ? h : A.key
            ) || null, y(o, m, A, L);
          case qt:
            return A = we(A), b(
              m,
              o,
              h,
              A,
              L
            );
        }
        if (ul(A) || Jt(A))
          return m = m.get(h) || null, p(o, m, A, L, null);
        if (typeof A.then == "function")
          return b(
            m,
            o,
            h,
            fn(A),
            L
          );
        if (A.$$typeof === pt)
          return b(
            m,
            o,
            h,
            an(o, A),
            L
          );
        sn(o, A);
      }
      return null;
    }
    function j(m, o, h, A) {
      for (var L = null, ot = null, Q = o, P = o = 0, nt = null; Q !== null && P < h.length; P++) {
        Q.index > P ? (nt = Q, Q = null) : nt = Q.sibling;
        var dt = v(
          m,
          Q,
          h[P],
          A
        );
        if (dt === null) {
          Q === null && (Q = nt);
          break;
        }
        t && Q && dt.alternate === null && l(m, Q), o = n(dt, o, P), ot === null ? L = dt : ot.sibling = dt, ot = dt, Q = nt;
      }
      if (P === h.length)
        return e(m, Q), it && Fl(m, P), L;
      if (Q === null) {
        for (; P < h.length; P++)
          Q = z(m, h[P], A), Q !== null && (o = n(
            Q,
            o,
            P
          ), ot === null ? L = Q : ot.sibling = Q, ot = Q);
        return it && Fl(m, P), L;
      }
      for (Q = a(Q); P < h.length; P++)
        nt = b(
          Q,
          m,
          P,
          h[P],
          A
        ), nt !== null && (t && nt.alternate !== null && Q.delete(
          nt.key === null ? P : nt.key
        ), o = n(
          nt,
          o,
          P
        ), ot === null ? L = nt : ot.sibling = nt, ot = nt);
      return t && Q.forEach(function(He) {
        return l(m, He);
      }), it && Fl(m, P), L;
    }
    function J(m, o, h, A) {
      if (h == null) throw Error(r(151));
      for (var L = null, ot = null, Q = o, P = o = 0, nt = null, dt = h.next(); Q !== null && !dt.done; P++, dt = h.next()) {
        Q.index > P ? (nt = Q, Q = null) : nt = Q.sibling;
        var He = v(m, Q, dt.value, A);
        if (He === null) {
          Q === null && (Q = nt);
          break;
        }
        t && Q && He.alternate === null && l(m, Q), o = n(He, o, P), ot === null ? L = He : ot.sibling = He, ot = He, Q = nt;
      }
      if (dt.done)
        return e(m, Q), it && Fl(m, P), L;
      if (Q === null) {
        for (; !dt.done; P++, dt = h.next())
          dt = z(m, dt.value, A), dt !== null && (o = n(dt, o, P), ot === null ? L = dt : ot.sibling = dt, ot = dt);
        return it && Fl(m, P), L;
      }
      for (Q = a(Q); !dt.done; P++, dt = h.next())
        dt = b(Q, m, P, dt.value, A), dt !== null && (t && dt.alternate !== null && Q.delete(dt.key === null ? P : dt.key), o = n(dt, o, P), ot === null ? L = dt : ot.sibling = dt, ot = dt);
      return t && Q.forEach(function(p0) {
        return l(m, p0);
      }), it && Fl(m, P), L;
    }
    function At(m, o, h, A) {
      if (typeof h == "object" && h !== null && h.type === ft && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case F:
            t: {
              for (var L = h.key; o !== null; ) {
                if (o.key === L) {
                  if (L = h.type, L === ft) {
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
                  } else if (o.elementType === L || typeof L == "object" && L !== null && L.$$typeof === qt && we(L) === o.type) {
                    e(
                      m,
                      o.sibling
                    ), A = u(o, h.props), iu(A, h), A.return = m, m = A;
                    break t;
                  }
                  e(m, o);
                  break;
                } else l(m, o);
                o = o.sibling;
              }
              h.type === ft ? (A = Le(
                h.props.children,
                m.mode,
                A,
                h.key
              ), A.return = m, m = A) : (A = tn(
                h.type,
                h.key,
                h.props,
                null,
                m.mode,
                A
              ), iu(A, h), A.return = m, m = A);
            }
            return i(m);
          case ht:
            t: {
              for (L = h.key; o !== null; ) {
                if (o.key === L)
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
              A = xi(h, m.mode, A), A.return = m, m = A;
            }
            return i(m);
          case qt:
            return h = we(h), At(
              m,
              o,
              h,
              A
            );
        }
        if (ul(h))
          return j(
            m,
            o,
            h,
            A
          );
        if (Jt(h)) {
          if (L = Jt(h), typeof L != "function") throw Error(r(150));
          return h = L.call(h), J(
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
            fn(h),
            A
          );
        if (h.$$typeof === pt)
          return At(
            m,
            o,
            an(m, h),
            A
          );
        sn(m, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, o !== null && o.tag === 6 ? (e(m, o.sibling), A = u(o, h), A.return = m, m = A) : (e(m, o), A = Ci(h, m.mode, A), A.return = m, m = A), i(m)) : e(m, o);
    }
    return function(m, o, h, A) {
      try {
        nu = 0;
        var L = At(
          m,
          o,
          h,
          A
        );
        return Aa = null, L;
      } catch (Q) {
        if (Q === Ta || Q === nn) throw Q;
        var ot = gl(29, Q, null, m.mode);
        return ot.lanes = A, ot.return = m, ot;
      }
    };
  }
  var $e = Zs(!0), Vs = Zs(!1), ge = !1;
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
  function Se(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function be(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (mt & 2) !== 0) {
      var u = a.pending;
      return u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l, l = Pu(t), Os(t, null, e), l;
    }
    return Iu(t, a, l, e), Pu(t);
  }
  function cu(t, l, e) {
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
  function fu() {
    if (ki) {
      var t = Ea;
      if (t !== null) throw t;
    }
  }
  function su(t, l, e, a) {
    ki = !1;
    var u = t.updateQueue;
    ge = !1;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var s = c, y = s.next;
      s.next = null, i === null ? n = y : i.next = y, i = s;
      var p = t.alternate;
      p !== null && (p = p.updateQueue, c = p.lastBaseUpdate, c !== i && (c === null ? p.firstBaseUpdate = y : c.next = y, p.lastBaseUpdate = s));
    }
    if (n !== null) {
      var z = u.baseState;
      i = 0, p = y = s = null, c = n;
      do {
        var v = c.lane & -536870913, b = v !== c.lane;
        if (b ? (ut & v) === v : (a & v) === v) {
          v !== 0 && v === pa && (ki = !0), p !== null && (p = p.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var j = t, J = c;
            v = l;
            var At = e;
            switch (J.tag) {
              case 1:
                if (j = J.payload, typeof j == "function") {
                  z = j.call(At, z, v);
                  break t;
                }
                z = j;
                break t;
              case 3:
                j.flags = j.flags & -65537 | 128;
              case 0:
                if (j = J.payload, v = typeof j == "function" ? j.call(At, z, v) : j, v == null) break t;
                z = R({}, z, v);
                break t;
              case 2:
                ge = !0;
            }
          }
          v = c.callback, v !== null && (t.flags |= 64, b && (t.flags |= 8192), b = u.callbacks, b === null ? u.callbacks = [v] : b.push(v));
        } else
          b = {
            lane: v,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, p === null ? (y = p = b, s = z) : p = p.next = b, i |= v;
        if (c = c.next, c === null) {
          if (c = u.shared.pending, c === null)
            break;
          b = c, c = b.next, b.next = null, u.lastBaseUpdate = b, u.shared.pending = null;
        }
      } while (!0);
      p === null && (s = z), u.baseState = s, u.firstBaseUpdate = y, u.lastBaseUpdate = p, n === null && (u.shared.lanes = 0), ze |= i, t.lanes = i, t.memoizedState = z;
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
  var za = d(null), rn = d(0);
  function ws(t, l) {
    t = ce, H(rn, t), H(za, l), ce = t | l.baseLanes;
  }
  function $i() {
    H(rn, ce), H(za, za.current);
  }
  function Fi() {
    ce = rn.current, T(za), T(rn);
  }
  var Sl = d(null), Cl = null;
  function pe(t) {
    var l = t.alternate;
    H(Ht, Ht.current & 1), H(Sl, t), Cl === null && (l === null || za.current !== null || l.memoizedState !== null) && (Cl = t);
  }
  function Wi(t) {
    H(Ht, Ht.current), H(Sl, t), Cl === null && (Cl = t);
  }
  function ks(t) {
    t.tag === 22 ? (H(Ht, Ht.current), H(Sl, t), Cl === null && (Cl = t)) : Ee();
  }
  function Ee() {
    H(Ht, Ht.current), H(Sl, Sl.current);
  }
  function bl(t) {
    T(Sl), Cl === t && (Cl = null), T(Ht);
  }
  var Ht = d(0);
  function on(t) {
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
  var Pl = 0, I = null, Et = null, Gt = null, dn = !1, _a = !1, Fe = !1, mn = 0, ru = 0, Da = null, rh = 0;
  function Rt() {
    throw Error(r(321));
  }
  function Ii(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!vl(t[e], l[e])) return !1;
    return !0;
  }
  function Pi(t, l, e, a, u, n) {
    return Pl = n, I = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, E.H = t === null || t.memoizedState === null ? Rr : hc, Fe = !1, n = e(a, u), Fe = !1, _a && (n = Fs(
      l,
      e,
      a,
      u
    )), $s(t), n;
  }
  function $s(t) {
    E.H = mu;
    var l = Et !== null && Et.next !== null;
    if (Pl = 0, Gt = Et = I = null, dn = !1, ru = 0, Da = null, l) throw Error(r(300));
    t === null || Xt || (t = t.dependencies, t !== null && en(t) && (Xt = !0));
  }
  function Fs(t, l, e, a) {
    I = t;
    var u = 0;
    do {
      if (_a && (Da = null), ru = 0, _a = !1, 25 <= u) throw Error(r(301));
      if (u += 1, Gt = Et = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      E.H = Cr, n = l(e, a);
    } while (_a);
    return n;
  }
  function oh() {
    var t = E.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? ou(l) : l, t = t.useState()[0], (Et !== null ? Et.memoizedState : null) !== t && (I.flags |= 1024), l;
  }
  function tc() {
    var t = mn !== 0;
    return mn = 0, t;
  }
  function lc(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function ec(t) {
    if (dn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      dn = !1;
    }
    Pl = 0, Gt = Et = I = null, _a = !1, ru = mn = 0, Da = null;
  }
  function el() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Gt === null ? I.memoizedState = Gt = t : Gt = Gt.next = t, Gt;
  }
  function Bt() {
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
  function hn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ou(t) {
    var l = ru;
    return ru += 1, Da === null && (Da = []), t = Xs(Da, t, l), l = I, (Gt === null ? l.memoizedState : Gt.next) === null && (l = l.alternate, E.H = l === null || l.memoizedState === null ? Rr : hc), t;
  }
  function yn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ou(t);
      if (t.$$typeof === pt) return Ft(t);
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
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = hn(), I.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
        e[a] = Vl;
    return l.index++, e;
  }
  function te(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function vn(t) {
    var l = Bt();
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
      var c = i = null, s = null, y = l, p = !1;
      do {
        var z = y.lane & -536870913;
        if (z !== y.lane ? (ut & z) === z : (Pl & z) === z) {
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
            }), z === pa && (p = !0);
          else if ((Pl & v) === v) {
            y = y.next, v === pa && (p = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, s === null ? (c = s = z, i = n) : s = s.next = z, I.lanes |= v, ze |= v;
          z = y.action, Fe && e(n, z), n = y.hasEagerState ? y.eagerState : e(n, z);
        } else
          v = {
            lane: z,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, s === null ? (c = s = v, i = n) : s = s.next = v, I.lanes |= z, ze |= z;
        y = y.next;
      } while (y !== null && y !== l);
      if (s === null ? i = n : s.next = c, !vl(n, t.memoizedState) && (Xt = !0, p && (e = Ea, e !== null)))
        throw e;
      t.memoizedState = n, t.baseState = i, t.baseQueue = s, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function nc(t) {
    var l = Bt(), e = l.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch, u = e.pending, n = l.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = u = u.next;
      do
        n = t(n, i.action), i = i.next;
      while (i !== u);
      vl(n, l.memoizedState) || (Xt = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function Ws(t, l, e) {
    var a = I, u = Bt(), n = it;
    if (n) {
      if (e === void 0) throw Error(r(407));
      e = e();
    } else e = l();
    var i = !vl(
      (Et || u).memoizedState,
      e
    );
    if (i && (u.memoizedState = e, Xt = !0), u = u.queue, fc(tr.bind(null, a, u, t), [
      t
    ]), u.getSnapshot !== l || i || Gt !== null && Gt.memoizedState.tag & 1) {
      if (a.flags |= 2048, Oa(
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
      ), zt === null) throw Error(r(349));
      n || (Pl & 127) !== 0 || Is(a, l, e);
    }
    return e;
  }
  function Is(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = I.updateQueue, l === null ? (l = hn(), I.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
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
      return !vl(t, e);
    } catch {
      return !0;
    }
  }
  function er(t) {
    var l = Qe(t, 2);
    l !== null && ol(l, t, 2);
  }
  function ic(t) {
    var l = el();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), Fe) {
        re(!0);
        try {
          e();
        } finally {
          re(!1);
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
    if (bn(t)) throw Error(r(485));
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
      E.T !== null ? e(!0) : n.isTransition = !1, a(n), e = l.pending, e === null ? (n.next = l.pending = n, ur(l, n)) : (n.next = e.next, l.pending = e.next = n);
    }
  }
  function ur(t, l) {
    var e = l.action, a = l.payload, u = t.state;
    if (l.isTransition) {
      var n = E.T, i = {};
      E.T = i;
      try {
        var c = e(u, a), s = E.S;
        s !== null && s(i, c), nr(t, l, c);
      } catch (y) {
        cc(t, l, y);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), E.T = n;
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
      var e = zt.formState;
      if (e !== null) {
        t: {
          var a = I;
          if (it) {
            if (_t) {
              l: {
                for (var u = _t, n = Rl; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break l;
                  }
                  if (u = xl(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break l;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                _t = xl(
                  u.nextSibling
                ), a = u.data === "F!";
                break t;
              }
            }
            ye(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return e = el(), e.memoizedState = e.baseState = l, a = {
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
    ), a = el(), u = {
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
    var l = Bt();
    return or(l, Et, t);
  }
  function or(t, l, e) {
    if (l = uc(
      t,
      l,
      fr
    )[0], t = vn(te)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = ou(l);
      } catch (i) {
        throw i === Ta ? nn : i;
      }
    else a = l;
    l = Bt();
    var u = l.queue, n = u.dispatch;
    return e !== l.memoizedState && (I.flags |= 2048, Oa(
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
    var l = Bt(), e = Et;
    if (e !== null)
      return or(l, e, t);
    Bt(), l = l.memoizedState, e = Bt();
    var a = e.queue.dispatch;
    return e.memoizedState = t, [l, a, !1];
  }
  function Oa(t, l, e, a) {
    return t = { tag: t, create: e, deps: a, inst: l, next: null }, l = I.updateQueue, l === null && (l = hn(), I.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
  }
  function mr() {
    return Bt().memoizedState;
  }
  function gn(t, l, e, a) {
    var u = el();
    I.flags |= t, u.memoizedState = Oa(
      1 | l,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function Sn(t, l, e, a) {
    var u = Bt();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    Et !== null && a !== null && Ii(a, Et.memoizedState.deps) ? u.memoizedState = Oa(l, n, e, a) : (I.flags |= t, u.memoizedState = Oa(
      1 | l,
      n,
      e,
      a
    ));
  }
  function hr(t, l) {
    gn(8390656, 8, t, l);
  }
  function fc(t, l) {
    Sn(2048, 8, t, l);
  }
  function hh(t) {
    I.flags |= 4;
    var l = I.updateQueue;
    if (l === null)
      l = hn(), I.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function yr(t) {
    var l = Bt().memoizedState;
    return hh({ ref: l, nextImpl: t }), function() {
      if ((mt & 2) !== 0) throw Error(r(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function vr(t, l) {
    return Sn(4, 2, t, l);
  }
  function gr(t, l) {
    return Sn(4, 4, t, l);
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
    e = e != null ? e.concat([t]) : null, Sn(4, 4, Sr.bind(null, l, t), e);
  }
  function sc() {
  }
  function pr(t, l) {
    var e = Bt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && Ii(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
  }
  function Er(t, l) {
    var e = Bt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && Ii(l, a[1]))
      return a[0];
    if (a = t(), Fe) {
      re(!0);
      try {
        t();
      } finally {
        re(!1);
      }
    }
    return e.memoizedState = [a, l], a;
  }
  function rc(t, l, e) {
    return e === void 0 || (Pl & 1073741824) !== 0 && (ut & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = Ao(), I.lanes |= t, ze |= t, e);
  }
  function Tr(t, l, e, a) {
    return vl(e, l) ? e : za.current !== null ? (t = rc(t, e, a), vl(t, l) || (Xt = !0), t) : (Pl & 42) === 0 || (Pl & 1073741824) !== 0 && (ut & 261930) === 0 ? (Xt = !0, t.memoizedState = e) : (t = Ao(), I.lanes |= t, ze |= t, l);
  }
  function Ar(t, l, e, a, u) {
    var n = x.p;
    x.p = n !== 0 && 8 > n ? n : 8;
    var i = E.T, c = {};
    E.T = c, mc(t, !1, l, e);
    try {
      var s = u(), y = E.S;
      if (y !== null && y(c, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var p = sh(
          s,
          a
        );
        du(
          t,
          l,
          p,
          Tl(t)
        );
      } else
        du(
          t,
          l,
          a,
          Tl(t)
        );
    } catch (z) {
      du(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: z },
        Tl()
      );
    } finally {
      x.p = n, i !== null && c.types !== null && (i.types = c.types), E.T = i;
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
        lastRenderedReducer: te,
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
        lastRenderedReducer: te,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function _r(t) {
    var l = zr(t);
    l.next === null && (l = t.alternate.memoizedState), du(
      t,
      l.next.queue,
      {},
      Tl()
    );
  }
  function dc() {
    return Ft(Uu);
  }
  function Dr() {
    return Bt().memoizedState;
  }
  function Or() {
    return Bt().memoizedState;
  }
  function vh(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = Tl();
          t = Se(e);
          var a = be(l, t, e);
          a !== null && (ol(a, l, e), cu(a, l, e)), l = { cache: Qi() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function gh(t, l, e) {
    var a = Tl();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, bn(t) ? Ur(l, e) : (e = Ni(t, l, e, a), e !== null && (ol(e, t, a), Nr(e, l, a)));
  }
  function Mr(t, l, e) {
    var a = Tl();
    du(t, l, e, a);
  }
  function du(t, l, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (bn(t)) Ur(l, u);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
        try {
          var i = l.lastRenderedState, c = n(i, e);
          if (u.hasEagerState = !0, u.eagerState = c, vl(c, i))
            return Iu(t, l, u, 0), zt === null && Wu(), !1;
        } catch {
        }
      if (e = Ni(t, l, u, a), e !== null)
        return ol(e, t, a), Nr(e, l, a), !0;
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
    }, bn(t)) {
      if (l) throw Error(r(479));
    } else
      l = Ni(
        t,
        e,
        a,
        2
      ), l !== null && ol(l, t, 2);
  }
  function bn(t) {
    var l = t.alternate;
    return t === I || l !== null && l === I;
  }
  function Ur(t, l) {
    _a = dn = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function Nr(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Bf(t, e);
    }
  }
  var mu = {
    readContext: Ft,
    use: yn,
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
  mu.useEffectEvent = Rt;
  var Rr = {
    readContext: Ft,
    use: yn,
    useCallback: function(t, l) {
      return el().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: Ft,
    useEffect: hr,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, gn(
        4194308,
        4,
        Sr.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return gn(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      gn(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = el();
      l = l === void 0 ? null : l;
      var a = t();
      if (Fe) {
        re(!0);
        try {
          t();
        } finally {
          re(!1);
        }
      }
      return e.memoizedState = [a, l], a;
    },
    useReducer: function(t, l, e) {
      var a = el();
      if (e !== void 0) {
        var u = e(l);
        if (Fe) {
          re(!0);
          try {
            e(l);
          } finally {
            re(!1);
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
      var l = el();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = ic(t);
      var l = t.queue, e = Mr.bind(null, I, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: sc,
    useDeferredValue: function(t, l) {
      var e = el();
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
      ), el().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var a = I, u = el();
      if (it) {
        if (e === void 0)
          throw Error(r(407));
        e = e();
      } else {
        if (e = l(), zt === null)
          throw Error(r(349));
        (ut & 127) !== 0 || Is(a, l, e);
      }
      u.memoizedState = e;
      var n = { value: e, getSnapshot: l };
      return u.queue = n, hr(tr.bind(null, a, n, t), [
        t
      ]), a.flags |= 2048, Oa(
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
      var t = el(), l = zt.identifierPrefix;
      if (it) {
        var e = Xl, a = Gl;
        e = (a & ~(1 << 32 - yl(a) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = mn++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = rh++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: dc,
    useFormState: sr,
    useActionState: sr,
    useOptimistic: function(t) {
      var l = el();
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
      return el().memoizedState = vh.bind(
        null,
        I
      );
    },
    useEffectEvent: function(t) {
      var l = el(), e = { impl: t };
      return l.memoizedState = e, function() {
        if ((mt & 2) !== 0)
          throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, hc = {
    readContext: Ft,
    use: yn,
    useCallback: pr,
    useContext: Ft,
    useEffect: fc,
    useImperativeHandle: br,
    useInsertionEffect: vr,
    useLayoutEffect: gr,
    useMemo: Er,
    useReducer: vn,
    useRef: mr,
    useState: function() {
      return vn(te);
    },
    useDebugValue: sc,
    useDeferredValue: function(t, l) {
      var e = Bt();
      return Tr(
        e,
        Et.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = vn(te)[0], l = Bt().memoizedState;
      return [
        typeof t == "boolean" ? t : ou(t),
        l
      ];
    },
    useSyncExternalStore: Ws,
    useId: Dr,
    useHostTransitionStatus: dc,
    useFormState: rr,
    useActionState: rr,
    useOptimistic: function(t, l) {
      var e = Bt();
      return ar(e, Et, t, l);
    },
    useMemoCache: ac,
    useCacheRefresh: Or
  };
  hc.useEffectEvent = yr;
  var Cr = {
    readContext: Ft,
    use: yn,
    useCallback: pr,
    useContext: Ft,
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
      var e = Bt();
      return Et === null ? rc(e, t, l) : Tr(
        e,
        Et.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = nc(te)[0], l = Bt().memoizedState;
      return [
        typeof t == "boolean" ? t : ou(t),
        l
      ];
    },
    useSyncExternalStore: Ws,
    useId: Dr,
    useHostTransitionStatus: dc,
    useFormState: dr,
    useActionState: dr,
    useOptimistic: function(t, l) {
      var e = Bt();
      return Et !== null ? ar(e, Et, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: ac,
    useCacheRefresh: Or
  };
  Cr.useEffectEvent = yr;
  function yc(t, l, e, a) {
    l = t.memoizedState, e = e(a, l), e = e == null ? l : R({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var vc = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var a = Tl(), u = Se(a);
      u.payload = l, e != null && (u.callback = e), l = be(t, u, a), l !== null && (ol(l, t, a), cu(l, t, a));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var a = Tl(), u = Se(a);
      u.tag = 1, u.payload = l, e != null && (u.callback = e), l = be(t, u, a), l !== null && (ol(l, t, a), cu(l, t, a));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = Tl(), a = Se(e);
      a.tag = 2, l != null && (a.callback = l), l = be(t, a, e), l !== null && (ol(l, t, e), cu(l, t, e));
    }
  };
  function xr(t, l, e, a, u, n, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, i) : l.prototype && l.prototype.isPureReactComponent ? !Pa(e, a) || !Pa(u, n) : !0;
  }
  function Hr(t, l, e, a) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && vc.enqueueReplaceState(l, l.state, null);
  }
  function We(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l)
        a !== "ref" && (e[a] = l[a]);
    }
    if (t = t.defaultProps) {
      e === l && (e = R({}, e));
      for (var u in t)
        e[u] === void 0 && (e[u] = t[u]);
    }
    return e;
  }
  function Br(t) {
    Fu(t);
  }
  function jr(t) {
    console.error(t);
  }
  function qr(t) {
    Fu(t);
  }
  function pn(t, l) {
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
    return e = Se(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      pn(t, l);
    }, e;
  }
  function Gr(t) {
    return t = Se(t), t.tag = 3, t;
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
      Yr(l, e, a), typeof u != "function" && (_e === null ? _e = /* @__PURE__ */ new Set([this]) : _e.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Sh(t, l, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = e.alternate, l !== null && ba(
        l,
        e,
        u,
        !0
      ), e = Sl.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return Cl === null ? Cn() : e.alternate === null && Ct === 0 && (Ct = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === cn ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Lc(t, a, u)), !1;
          case 22:
            return e.flags |= 65536, a === cn ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
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
      return l = Sl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, a !== ji && (t = Error(r(422), { cause: a }), eu(Ml(t, e)))) : (a !== ji && (l = Error(r(423), {
        cause: a
      }), eu(
        Ml(l, e)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = Ml(a, e), u = gc(
        t.stateNode,
        a,
        u
      ), wi(t, u), Ct !== 4 && (Ct = 2)), !1;
    var n = Error(r(520), { cause: a });
    if (n = Ml(n, e), Eu === null ? Eu = [n] : Eu.push(n), Ct !== 4 && (Ct = 2), l === null) return !0;
    a = Ml(a, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = u & -u, e.lanes |= t, t = gc(e.stateNode, a, t), wi(e, t), !1;
        case 1:
          if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (_e === null || !_e.has(n))))
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
  function Wt(t, l, e, a) {
    l.child = t === null ? Vs(l, null, e, a) : $e(
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
    return Ke(l), a = Pi(
      t,
      l,
      e,
      i,
      n,
      u
    ), c = tc(), t !== null && !Xt ? (lc(t, l, u), le(t, l, u)) : (it && c && Hi(l), l.flags |= 1, Wt(t, l, a, u), l.child);
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
      )) : (t = tn(
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
      if (e = e.compare, e = e !== null ? e : Pa, e(i, a) && t.ref === l.ref)
        return le(t, l, u);
    }
    return l.flags |= 1, t = $l(n, a), t.ref = l.ref, t.return = l, l.child = t;
  }
  function Zr(t, l, e, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Pa(n, a) && t.ref === l.ref)
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
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && un(
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
      n !== null ? (un(l, n.cachePool), ws(l, n), Ee(), l.memoizedState = null) : (t !== null && un(l, null), $i(), Ee());
    return Wt(t, l, u, e), l.child;
  }
  function hu(t, l) {
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
    }, t !== null && un(l, null), $i(), ks(l), t !== null && ba(t, l, a, !0), l.childLanes = u, null;
  }
  function En(t, l) {
    return l = An(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Jr(t, l, e) {
    return $e(l, t.child, null, e), t = En(l, l.pendingProps), t.flags |= 2, bl(l), l.memoizedState = null, t;
  }
  function bh(t, l, e) {
    var a = l.pendingProps, u = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (it) {
        if (a.mode === "hidden")
          return t = En(l, a), l.lanes = 536870912, hu(null, t);
        if (Wi(l), (t = _t) ? (t = nd(
          t,
          Rl
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: me !== null ? { id: Gl, overflow: Xl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Us(t), e.return = l, l.child = e, $t = l, _t = null)) : t = null, t === null) throw ye(l);
        return l.lanes = 536870912, null;
      }
      return En(l, a);
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
      else if (Xt || ba(t, l, e, !1), u = (e & t.childLanes) !== 0, Xt || u) {
        if (a = zt, a !== null && (i = jf(a, e), i !== 0 && i !== n.retryLane))
          throw n.retryLane = i, Qe(t, i), ol(a, t, i), Sc;
        Cn(), l = Jr(
          t,
          l,
          e
        );
      } else
        t = n.treeContext, _t = xl(i.nextSibling), $t = l, it = !0, he = null, Rl = !1, t !== null && Cs(l, t), l = En(l, a), l.flags |= 4096;
      return l;
    }
    return t = $l(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Tn(t, l) {
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
    return Ke(l), e = Pi(
      t,
      l,
      e,
      a,
      void 0,
      u
    ), a = tc(), t !== null && !Xt ? (lc(t, l, u), le(t, l, u)) : (it && a && Hi(l), l.flags |= 1, Wt(t, l, e, u), l.child);
  }
  function wr(t, l, e, a, u, n) {
    return Ke(l), l.updateQueue = null, e = Fs(
      l,
      a,
      e,
      u
    ), $s(t), a = tc(), t !== null && !Xt ? (lc(t, l, n), le(t, l, n)) : (it && a && Hi(l), l.flags |= 1, Wt(t, l, e, n), l.child);
  }
  function kr(t, l, e, a, u) {
    if (Ke(l), l.stateNode === null) {
      var n = ya, i = e.contextType;
      typeof i == "object" && i !== null && (n = Ft(i)), n = new e(a, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = vc, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = a, n.state = l.memoizedState, n.refs = {}, Ki(l), i = e.contextType, n.context = typeof i == "object" && i !== null ? Ft(i) : ya, n.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (yc(
        l,
        e,
        i,
        a
      ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && vc.enqueueReplaceState(n, n.state, null), su(l, a, n, u), fu(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (t === null) {
      n = l.stateNode;
      var c = l.memoizedProps, s = We(e, c);
      n.props = s;
      var y = n.context, p = e.contextType;
      i = ya, typeof p == "object" && p !== null && (i = Ft(p));
      var z = e.getDerivedStateFromProps;
      p = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, p || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== i) && Hr(
        l,
        n,
        a,
        i
      ), ge = !1;
      var v = l.memoizedState;
      n.state = v, su(l, a, n, u), fu(), y = l.memoizedState, c || v !== y || ge ? (typeof z == "function" && (yc(
        l,
        e,
        z,
        a
      ), y = l.memoizedState), (s = ge || xr(
        l,
        e,
        s,
        a,
        v,
        y,
        i
      )) ? (p || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = y), n.props = a, n.state = y, n.context = i, a = s) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      n = l.stateNode, Ji(t, l), i = l.memoizedProps, p = We(e, i), n.props = p, z = l.pendingProps, v = n.context, y = e.contextType, s = ya, typeof y == "object" && y !== null && (s = Ft(y)), c = e.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== z || v !== s) && Hr(
        l,
        n,
        a,
        s
      ), ge = !1, v = l.memoizedState, n.state = v, su(l, a, n, u), fu();
      var b = l.memoizedState;
      i !== z || v !== b || ge || t !== null && t.dependencies !== null && en(t.dependencies) ? (typeof c == "function" && (yc(
        l,
        e,
        c,
        a
      ), b = l.memoizedState), (p = ge || xr(
        l,
        e,
        p,
        a,
        v,
        b,
        s
      ) || t !== null && t.dependencies !== null && en(t.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, b, s), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        b,
        s
      )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = b), n.props = a, n.state = b, n.context = s, a = p) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 1024), a = !1);
    }
    return n = a, Tn(t, l), a = (l.flags & 128) !== 0, n || a ? (n = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && a ? (l.child = $e(
      l,
      t.child,
      null,
      u
    ), l.child = $e(
      l,
      null,
      e,
      u
    )) : Wt(t, l, e, u), l.memoizedState = n.state, t = l.child) : t = le(
      t,
      l,
      u
    ), t;
  }
  function $r(t, l, e, a) {
    return Ze(), l.flags |= 256, Wt(t, l, e, a), l.child;
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
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= El), t;
  }
  function Fr(t, l, e) {
    var a = l.pendingProps, u = !1, n = (l.flags & 128) !== 0, i;
    if ((i = n) || (i = t !== null && t.memoizedState === null ? !1 : (Ht.current & 2) !== 0), i && (u = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (it) {
        if (u ? pe(l) : Ee(), (t = _t) ? (t = nd(
          t,
          Rl
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: me !== null ? { id: Gl, overflow: Xl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Us(t), e.return = l, l.child = e, $t = l, _t = null)) : t = null, t === null) throw ye(l);
        return uf(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, u ? (Ee(), u = l.mode, c = An(
        { mode: "hidden", children: c },
        u
      ), a = Le(
        a,
        u,
        e,
        null
      ), c.return = l, a.return = l, c.sibling = a, l.child = c, a = l.child, a.memoizedState = Ec(e), a.childLanes = Tc(
        t,
        i,
        e
      ), l.memoizedState = pc, hu(null, a)) : (pe(l), Ac(l, c));
    }
    var s = t.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (n)
        l.flags & 256 ? (pe(l), l.flags &= -257, l = zc(
          t,
          l,
          e
        )) : l.memoizedState !== null ? (Ee(), l.child = t.child, l.flags |= 128, l = null) : (Ee(), c = a.fallback, u = l.mode, a = An(
          { mode: "visible", children: a.children },
          u
        ), c = Le(
          c,
          u,
          e,
          null
        ), c.flags |= 2, a.return = l, c.return = l, a.sibling = c, l.child = a, $e(
          l,
          t.child,
          null,
          e
        ), a = l.child, a.memoizedState = Ec(e), a.childLanes = Tc(
          t,
          i,
          e
        ), l.memoizedState = pc, l = hu(null, a));
      else if (pe(l), uf(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var y = i.dgst;
        i = y, a = Error(r(419)), a.stack = "", a.digest = i, eu({ value: a, source: null, stack: null }), l = zc(
          t,
          l,
          e
        );
      } else if (Xt || ba(t, l, e, !1), i = (e & t.childLanes) !== 0, Xt || i) {
        if (i = zt, i !== null && (a = jf(i, e), a !== 0 && a !== s.retryLane))
          throw s.retryLane = a, Qe(t, a), ol(i, t, a), Sc;
        af(c) || Cn(), l = zc(
          t,
          l,
          e
        );
      } else
        af(c) ? (l.flags |= 192, l.child = t.child, l = null) : (t = s.treeContext, _t = xl(
          c.nextSibling
        ), $t = l, it = !0, he = null, Rl = !1, t !== null && Cs(l, t), l = Ac(
          l,
          a.children
        ), l.flags |= 4096);
      return l;
    }
    return u ? (Ee(), c = a.fallback, u = l.mode, s = t.child, y = s.sibling, a = $l(s, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = s.subtreeFlags & 65011712, y !== null ? c = $l(
      y,
      c
    ) : (c = Le(
      c,
      u,
      e,
      null
    ), c.flags |= 2), c.return = l, a.return = l, a.sibling = c, l.child = a, hu(null, a), a = l.child, c = t.child.memoizedState, c === null ? c = Ec(e) : (u = c.cachePool, u !== null ? (s = Yt._currentValue, u = u.parent !== s ? { parent: s, pool: s } : u) : u = Ys(), c = {
      baseLanes: c.baseLanes | e,
      cachePool: u
    }), a.memoizedState = c, a.childLanes = Tc(
      t,
      i,
      e
    ), l.memoizedState = pc, hu(t.child, a)) : (pe(l), e = t.child, t = e.sibling, e = $l(e, {
      mode: "visible",
      children: a.children
    }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Ac(t, l) {
    return l = An(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function An(t, l) {
    return t = gl(22, t, null, l), t.lanes = 0, t;
  }
  function zc(t, l, e) {
    return $e(l, t.child, null, e), t = Ac(
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
    var i = Ht.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, l.flags |= 128) : i &= 1, H(Ht, i), Wt(t, l, a, e), a = it ? lu : 0, !c && t !== null && (t.flags & 128) !== 0)
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
          t = e.alternate, t !== null && on(t) === null && (u = e), e = e.sibling;
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
          if (t = u.alternate, t !== null && on(t) === null) {
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
    if (t !== null && (l.dependencies = t.dependencies), ze |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (ba(
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
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && en(t)));
  }
  function ph(t, l, e) {
    switch (l.tag) {
      case 3:
        wt(l, l.stateNode.containerInfo), ve(l, Yt, t.memoizedState.cache), Ze();
        break;
      case 27:
      case 5:
        O(l);
        break;
      case 4:
        wt(l, l.stateNode.containerInfo);
        break;
      case 10:
        ve(
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
          return a.dehydrated !== null ? (pe(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? Fr(t, l, e) : (pe(l), t = le(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        pe(l);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (a = (e & l.childLanes) !== 0, a || (ba(
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
        if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), H(Ht, Ht.current), a) break;
        return null;
      case 22:
        return l.lanes = 0, Vr(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        ve(l, Yt, t.memoizedState.cache);
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
      Xt = !1, it && (l.flags & 1048576) !== 0 && Rs(l, lu, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var a = l.pendingProps;
          if (t = we(l.elementType), l.type = t, typeof t == "function")
            Ri(t) ? (a = We(t, a), l.tag = 1, l = kr(
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
              if (u === Kt) {
                l.tag = 11, l = Qr(
                  null,
                  l,
                  t,
                  a,
                  e
                );
                break t;
              } else if (u === k) {
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
            throw l = zl(t) || t, Error(r(306, l, ""));
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
        return a = l.type, u = We(
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
          if (wt(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          a = l.pendingProps;
          var n = l.memoizedState;
          u = n.element, Ji(t, l), su(l, a, null, e);
          var i = l.memoizedState;
          if (a = i.cache, ve(l, Yt, a), a !== n.cache && Xi(
            l,
            [Yt],
            e,
            !0
          ), fu(), a = i.element, n.isDehydrated)
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
              ), eu(u), l = $r(
                t,
                l,
                a,
                e
              );
              break t;
            } else
              for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, _t = xl(t.firstChild), $t = l, it = !0, he = null, Rl = !0, e = Vs(
                l,
                null,
                a,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (Ze(), a === u) {
              l = le(
                t,
                l,
                e
              );
              break t;
            }
            Wt(t, l, a, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return Tn(t, l), t === null ? (e = od(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : it || (e = l.type, t = l.pendingProps, a = Gn(
          lt.current
        ).createElement(e), a[kt] = l, a[nl] = t, It(a, e, t), Zt(a), l.stateNode = a) : l.memoizedState = od(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return O(l), t === null && it && (a = l.stateNode = fd(
          l.type,
          l.pendingProps,
          lt.current
        ), $t = l, Rl = !0, u = _t, Ue(l.type) ? (nf = u, _t = xl(a.firstChild)) : _t = u), Wt(
          t,
          l,
          l.pendingProps.children,
          e
        ), Tn(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && it && ((u = a = _t) && (a = Fh(
          a,
          l.type,
          l.pendingProps,
          Rl
        ), a !== null ? (l.stateNode = a, $t = l, _t = xl(a.firstChild), Rl = !1, u = !0) : u = !1), u || ye(l)), O(l), u = l.type, n = l.pendingProps, i = t !== null ? t.memoizedProps : null, a = n.children, tf(u, n) ? a = null : i !== null && tf(u, i) && (l.flags |= 32), l.memoizedState !== null && (u = Pi(
          t,
          l,
          oh,
          null,
          null,
          e
        ), Uu._currentValue = u), Tn(t, l), Wt(t, l, a, e), l.child;
      case 6:
        return t === null && it && ((t = e = _t) && (e = Wh(
          e,
          l.pendingProps,
          Rl
        ), e !== null ? (l.stateNode = e, $t = l, _t = null, t = !0) : t = !1), t || ye(l)), null;
      case 13:
        return Fr(t, l, e);
      case 4:
        return wt(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, t === null ? l.child = $e(
          l,
          null,
          a,
          e
        ) : Wt(t, l, a, e), l.child;
      case 11:
        return Qr(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return Wt(
          t,
          l,
          l.pendingProps,
          e
        ), l.child;
      case 8:
        return Wt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return Wt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return a = l.pendingProps, ve(l, l.type, a.value), Wt(t, l, a.children, e), l.child;
      case 9:
        return u = l.type._context, a = l.pendingProps.children, Ke(l), u = Ft(u), a = a(u), l.flags |= 1, Wt(t, l, a, e), l.child;
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
        return Ke(l), a = Ft(Yt), t === null ? (u = Zi(), u === null && (u = zt, n = Qi(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), l.memoizedState = { parent: a, cache: u }, Ki(l), ve(l, Yt, u)) : ((t.lanes & e) !== 0 && (Ji(t, l), su(l, null, null, e), fu()), u = t.memoizedState, n = l.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), ve(l, Yt, a)) : (a = n.cache, ve(l, Yt, a), a !== u.cache && Xi(
          l,
          [Yt],
          e,
          !0
        ))), Wt(
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
          throw ke = cn, Vi;
    } else t.flags &= -16777217;
  }
  function to(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !vd(l))
      if (Oo()) t.flags |= 8192;
      else
        throw ke = cn, Vi;
  }
  function zn(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? xf() : 536870912, t.lanes |= l, Ra |= l);
  }
  function yu(t, l) {
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
  function Dt(t) {
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
        return Dt(l), null;
      case 1:
        return Dt(l), null;
      case 3:
        return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Il(Yt), _(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (Sa(l) ? ee(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, qi())), Dt(l), null;
      case 26:
        var u = l.type, n = l.memoizedState;
        return t === null ? (ee(l), n !== null ? (Dt(l), to(l, n)) : (Dt(l), Oc(
          l,
          u,
          null,
          a,
          e
        ))) : n ? n !== t.memoizedState ? (ee(l), Dt(l), to(l, n)) : (Dt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== a && ee(l), Dt(l), Oc(
          l,
          u,
          t,
          a,
          e
        )), null;
      case 27:
        if (U(l), e = lt.current, u = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && ee(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return Dt(l), null;
          }
          t = Y.current, Sa(l) ? xs(l) : (t = fd(u, a, e), l.stateNode = t, ee(l));
        }
        return Dt(l), null;
      case 5:
        if (U(l), u = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && ee(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(r(166));
            return Dt(l), null;
          }
          if (n = Y.current, Sa(l))
            xs(l);
          else {
            var i = Gn(
              lt.current
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
            n[kt] = l, n[nl] = a;
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
            t: switch (It(n, u, a), u) {
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
        return Dt(l), Oc(
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
          if (t = lt.current, Sa(l)) {
            if (t = l.stateNode, e = l.memoizedProps, a = null, u = $t, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            t[kt] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Wo(t.nodeValue, e)), t || ye(l, !0);
          } else
            t = Gn(t).createTextNode(
              a
            ), t[kt] = l, l.stateNode = t;
        }
        return Dt(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Sa(l), e !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[kt] = l;
            } else
              Ze(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Dt(l), t = !1;
          } else
            e = qi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (bl(l), l) : (bl(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Dt(l), null;
      case 13:
        if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = Sa(l), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
              u[kt] = l;
            } else
              Ze(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Dt(l), u = !1;
          } else
            u = qi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return l.flags & 256 ? (bl(l), l) : (bl(l), null);
        }
        return bl(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = a !== null, t = t !== null && t.memoizedState !== null, e && (a = l.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), zn(l, l.updateQueue), Dt(l), null);
      case 4:
        return _(), t === null && $c(l.stateNode.containerInfo), Dt(l), null;
      case 10:
        return Il(l.type), Dt(l), null;
      case 19:
        if (T(Ht), a = l.memoizedState, a === null) return Dt(l), null;
        if (u = (l.flags & 128) !== 0, n = a.rendering, n === null)
          if (u) yu(a, !1);
          else {
            if (Ct !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (n = on(t), n !== null) {
                  for (l.flags |= 128, yu(a, !1), t = n.updateQueue, l.updateQueue = t, zn(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    Ms(e, t), e = e.sibling;
                  return H(
                    Ht,
                    Ht.current & 1 | 2
                  ), it && Fl(l, a.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            a.tail !== null && ml() > Un && (l.flags |= 128, u = !0, yu(a, !1), l.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = on(n), t !== null) {
              if (l.flags |= 128, u = !0, t = t.updateQueue, l.updateQueue = t, zn(l, t), yu(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !it)
                return Dt(l), null;
            } else
              2 * ml() - a.renderingStartTime > Un && e !== 536870912 && (l.flags |= 128, u = !0, yu(a, !1), l.lanes = 4194304);
          a.isBackwards ? (n.sibling = l.child, l.child = n) : (t = a.last, t !== null ? t.sibling = n : l.child = n, a.last = n);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ml(), t.sibling = null, e = Ht.current, H(
          Ht,
          u ? e & 1 | 2 : e & 1
        ), it && Fl(l, a.treeForkCount), t) : (Dt(l), null);
      case 22:
      case 23:
        return bl(l), Fi(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Dt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Dt(l), e = l.updateQueue, e !== null && zn(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && T(Je), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Il(Yt), Dt(l), null;
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
        return Il(Yt), _(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return U(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (bl(l), l.alternate === null)
            throw Error(r(340));
          Ze();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (bl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(r(340));
          Ze();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return T(Ht), null;
      case 4:
        return _(), null;
      case 10:
        return Il(l.type), null;
      case 22:
      case 23:
        return bl(l), Fi(), t !== null && T(Je), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
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
        Il(Yt), _();
        break;
      case 26:
      case 27:
      case 5:
        U(l);
        break;
      case 4:
        _();
        break;
      case 31:
        l.memoizedState !== null && bl(l);
        break;
      case 13:
        bl(l);
        break;
      case 19:
        T(Ht);
        break;
      case 10:
        Il(l.type);
        break;
      case 22:
      case 23:
        bl(l), Fi(), t !== null && T(Je);
        break;
      case 24:
        Il(Yt);
    }
  }
  function vu(t, l) {
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
  function Te(t, l, e) {
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
              } catch (p) {
                bt(
                  u,
                  s,
                  p
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (p) {
      bt(l, l.return, p);
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
    e.props = We(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      bt(t, l, a);
    }
  }
  function gu(t, l) {
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
  function Ql(t, l) {
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
      Vh(a, t.type, e, l), a[nl] = l;
    } catch (u) {
      bt(t, t.return, u);
    }
  }
  function no(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ue(t.type) || t.tag === 4;
  }
  function Uc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || no(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ue(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Nc(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = wl));
    else if (a !== 4 && (a === 27 && Ue(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null))
      for (Nc(t, l, e), t = t.sibling; t !== null; )
        Nc(t, l, e), t = t.sibling;
  }
  function _n(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (a !== 4 && (a === 27 && Ue(t.type) && (e = t.stateNode), t = t.child, t !== null))
      for (_n(t, l, e), t = t.sibling; t !== null; )
        _n(t, l, e), t = t.sibling;
  }
  function io(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var a = t.type, u = l.attributes; u.length; )
        l.removeAttributeNode(u[0]);
      It(l, a, e), l[kt] = t, l[nl] = e;
    } catch (n) {
      bt(t, t.return, n);
    }
  }
  var ae = !1, Qt = !1, Rc = !1, co = typeof WeakSet == "function" ? WeakSet : Set, Vt = null;
  function Ah(t, l) {
    if (t = t.containerInfo, Ic = Jn, t = bs(t), zi(t)) {
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
            var i = 0, c = -1, s = -1, y = 0, p = 0, z = t, v = null;
            l: for (; ; ) {
              for (var b; z !== e || u !== 0 && z.nodeType !== 3 || (c = i + u), z !== n || a !== 0 && z.nodeType !== 3 || (s = i + a), z.nodeType === 3 && (i += z.nodeValue.length), (b = z.firstChild) !== null; )
                v = z, z = b;
              for (; ; ) {
                if (z === t) break l;
                if (v === e && ++y === u && (c = i), v === n && ++p === a && (s = i), (b = z.nextSibling) !== null) break;
                z = v, v = z.parentNode;
              }
              z = b;
            }
            e = c === -1 || s === -1 ? null : { start: c, end: s };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (Pc = { focusedElem: t, selectionRange: e }, Jn = !1, Vt = l; Vt !== null; )
      if (l = Vt, t = l.child, (l.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = l, Vt = t;
      else
        for (; Vt !== null; ) {
          switch (l = Vt, n = l.alternate, t = l.flags, l.tag) {
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
                  var j = We(
                    e.type,
                    u
                  );
                  t = a.getSnapshotBeforeUpdate(
                    j,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (J) {
                  bt(
                    e,
                    e.return,
                    J
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
            t.return = l.return, Vt = t;
            break;
          }
          Vt = l.return;
        }
  }
  function fo(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ne(t, e), a & 4 && vu(5, e);
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
            var u = We(
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
        a & 64 && eo(e), a & 512 && gu(e, e.return);
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
        ne(t, e), l === null && a & 4 && uo(e), a & 512 && gu(e, e.return);
        break;
      case 12:
        ne(t, e);
        break;
      case 31:
        ne(t, e), a & 4 && oo(t, e);
        break;
      case 13:
        ne(t, e), a & 4 && mo(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = Ch.bind(
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
  var Mt = null, cl = !1;
  function ue(t, l, e) {
    for (e = e.child; e !== null; )
      ro(t, l, e), e = e.sibling;
  }
  function ro(t, l, e) {
    if (hl && typeof hl.onCommitFiberUnmount == "function")
      try {
        hl.onCommitFiberUnmount(Qa, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        Qt || Ql(e, l), ue(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Qt || Ql(e, l);
        var a = Mt, u = cl;
        Ue(e.type) && (Mt = e.stateNode, cl = !1), ue(
          t,
          l,
          e
        ), Du(e.stateNode), Mt = a, cl = u;
        break;
      case 5:
        Qt || Ql(e, l);
      case 6:
        if (a = Mt, u = cl, Mt = null, ue(
          t,
          l,
          e
        ), Mt = a, cl = u, Mt !== null)
          if (cl)
            try {
              (Mt.nodeType === 9 ? Mt.body : Mt.nodeName === "HTML" ? Mt.ownerDocument.body : Mt).removeChild(e.stateNode);
            } catch (n) {
              bt(
                e,
                l,
                n
              );
            }
          else
            try {
              Mt.removeChild(e.stateNode);
            } catch (n) {
              bt(
                e,
                l,
                n
              );
            }
        break;
      case 18:
        Mt !== null && (cl ? (t = Mt, ad(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), Ga(t)) : ad(Mt, e.stateNode));
        break;
      case 4:
        a = Mt, u = cl, Mt = e.stateNode.containerInfo, cl = !0, ue(
          t,
          l,
          e
        ), Mt = a, cl = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Te(2, e, l), Qt || Te(4, e, l), ue(
          t,
          l,
          e
        );
        break;
      case 1:
        Qt || (Ql(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && ao(
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
        Ga(t);
      } catch (e) {
        bt(l, l.return, e);
      }
    }
  }
  function mo(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ga(t);
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
  function Dn(t, l) {
    var e = zh(t);
    l.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var u = xh.bind(null, t, a);
        a.then(u, u);
      }
    });
  }
  function fl(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a], n = t, i = l, c = i;
        t: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Ue(c.type)) {
                Mt = c.stateNode, cl = !1;
                break t;
              }
              break;
            case 5:
              Mt = c.stateNode, cl = !1;
              break t;
            case 3:
            case 4:
              Mt = c.stateNode.containerInfo, cl = !0;
              break t;
          }
          c = c.return;
        }
        if (Mt === null) throw Error(r(160));
        ro(n, i, u), Mt = null, cl = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        ho(l, t), l = l.sibling;
  }
  var jl = null;
  function ho(t, l) {
    var e = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        fl(l, t), sl(t), a & 4 && (Te(3, t, t.return), vu(3, t), Te(5, t, t.return));
        break;
      case 1:
        fl(l, t), sl(t), a & 512 && (Qt || e === null || Ql(e, e.return)), a & 64 && ae && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var u = jl;
        if (fl(l, t), sl(t), a & 512 && (Qt || e === null || Ql(e, e.return)), a & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (a = t.memoizedState, e === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, e = t.memoizedProps, u = u.ownerDocument || u;
                  l: switch (a) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[Va] || n[kt] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), It(n, a, e), n[kt] = t, Zt(n), a = n;
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
                      n = u.createElement(a), It(n, a, e), u.head.appendChild(n);
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
                      n = u.createElement(a), It(n, a, e), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  n[kt] = t, Zt(n), a = n;
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
        fl(l, t), sl(t), a & 512 && (Qt || e === null || Ql(e, e.return)), e !== null && a & 4 && Mc(
          t,
          t.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (fl(l, t), sl(t), a & 512 && (Qt || e === null || Ql(e, e.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            fa(u, "");
          } catch (j) {
            bt(t, t.return, j);
          }
        }
        a & 4 && t.stateNode != null && (u = t.memoizedProps, Mc(
          t,
          u,
          e !== null ? e.memoizedProps : u
        )), a & 1024 && (Rc = !0);
        break;
      case 6:
        if (fl(l, t), sl(t), a & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          a = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = a;
          } catch (j) {
            bt(t, t.return, j);
          }
        }
        break;
      case 3:
        if (Ln = null, u = jl, jl = Xn(l.containerInfo), fl(l, t), jl = u, sl(t), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Ga(l.containerInfo);
          } catch (j) {
            bt(t, t.return, j);
          }
        Rc && (Rc = !1, yo(t));
        break;
      case 4:
        a = jl, jl = Xn(
          t.stateNode.containerInfo
        ), fl(l, t), sl(t), jl = a;
        break;
      case 12:
        fl(l, t), sl(t);
        break;
      case 31:
        fl(l, t), sl(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Dn(t, a)));
        break;
      case 13:
        fl(l, t), sl(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Mn = ml()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Dn(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null, y = ae, p = Qt;
        if (ae = y || u, Qt = p || s, fl(l, t), Qt = p, ae = y, sl(t), a & 8192)
          t: for (l = t.stateNode, l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (e === null || s || ae || Qt || Ie(t)), e = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                s = e = l;
                try {
                  if (n = s.stateNode, u)
                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = s.stateNode;
                    var z = s.memoizedProps.style, v = z != null && z.hasOwnProperty("display") ? z.display : null;
                    c.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (j) {
                  bt(s, s.return, j);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                s = l;
                try {
                  s.stateNode.nodeValue = u ? "" : s.memoizedProps;
                } catch (j) {
                  bt(s, s.return, j);
                }
              }
            } else if (l.tag === 18) {
              if (e === null) {
                s = l;
                try {
                  var b = s.stateNode;
                  u ? ud(b, !0) : ud(s.stateNode, !1);
                } catch (j) {
                  bt(s, s.return, j);
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
        a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Dn(t, e))));
        break;
      case 19:
        fl(l, t), sl(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Dn(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        fl(l, t), sl(t);
    }
  }
  function sl(t) {
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
            _n(t, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (fa(i, ""), e.flags &= -33);
            var c = Uc(t);
            _n(t, c, i);
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
      } catch (p) {
        bt(t, t.return, p);
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
  function Ie(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Te(4, l, l.return), Ie(l);
          break;
        case 1:
          Ql(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && ao(
            l,
            l.return,
            e
          ), Ie(l);
          break;
        case 27:
          Du(l.stateNode);
        case 26:
        case 5:
          Ql(l, l.return), Ie(l);
          break;
        case 22:
          l.memoizedState === null && Ie(l);
          break;
        case 30:
          Ie(l);
          break;
        default:
          Ie(l);
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
          ), vu(4, n);
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
          e && i & 64 && eo(n), gu(n, n.return);
          break;
        case 27:
          io(n);
        case 26:
        case 5:
          ie(
            u,
            n,
            e
          ), e && a === null && i & 4 && uo(n), gu(n, n.return);
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
          ), gu(n, n.return);
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
  function Cc(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && au(e));
  }
  function xc(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && au(t));
  }
  function ql(t, l, e, a) {
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
        ql(
          t,
          l,
          e,
          a
        ), u & 2048 && vu(9, l);
        break;
      case 1:
        ql(
          t,
          l,
          e,
          a
        );
        break;
      case 3:
        ql(
          t,
          l,
          e,
          a
        ), u & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && au(t)));
        break;
      case 12:
        if (u & 2048) {
          ql(
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
          ql(
            t,
            l,
            e,
            a
          );
        break;
      case 31:
        ql(
          t,
          l,
          e,
          a
        );
        break;
      case 13:
        ql(
          t,
          l,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = l.stateNode, i = l.alternate, l.memoizedState !== null ? n._visibility & 2 ? ql(
          t,
          l,
          e,
          a
        ) : Su(t, l) : n._visibility & 2 ? ql(
          t,
          l,
          e,
          a
        ) : (n._visibility |= 2, Ma(
          t,
          l,
          e,
          a,
          (l.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Cc(i, l);
        break;
      case 24:
        ql(
          t,
          l,
          e,
          a
        ), u & 2048 && xc(l.alternate, l);
        break;
      default:
        ql(
          t,
          l,
          e,
          a
        );
    }
  }
  function Ma(t, l, e, a, u) {
    for (u = u && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var n = t, i = l, c = e, s = a, y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ma(
            n,
            i,
            c,
            s,
            u
          ), vu(8, i);
          break;
        case 23:
          break;
        case 22:
          var p = i.stateNode;
          i.memoizedState !== null ? p._visibility & 2 ? Ma(
            n,
            i,
            c,
            s,
            u
          ) : Su(
            n,
            i
          ) : (p._visibility |= 2, Ma(
            n,
            i,
            c,
            s,
            u
          )), u && y & 2048 && Cc(
            i.alternate,
            i
          );
          break;
        case 24:
          Ma(
            n,
            i,
            c,
            s,
            u
          ), u && y & 2048 && xc(i.alternate, i);
          break;
        default:
          Ma(
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
  function Su(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, a = l, u = a.flags;
        switch (a.tag) {
          case 22:
            Su(e, a), u & 2048 && Cc(
              a.alternate,
              a
            );
            break;
          case 24:
            Su(e, a), u & 2048 && xc(a.alternate, a);
            break;
          default:
            Su(e, a);
        }
        l = l.sibling;
      }
  }
  var bu = 8192;
  function Ua(t, l, e) {
    if (t.subtreeFlags & bu)
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
        Ua(
          t,
          l,
          e
        ), t.flags & bu && t.memoizedState !== null && r0(
          e,
          jl,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Ua(
          t,
          l,
          e
        );
        break;
      case 3:
      case 4:
        var a = jl;
        jl = Xn(t.stateNode.containerInfo), Ua(
          t,
          l,
          e
        ), jl = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = bu, bu = 16777216, Ua(
          t,
          l,
          e
        ), bu = a) : Ua(
          t,
          l,
          e
        ));
        break;
      default:
        Ua(
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
  function pu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Vt = a, po(
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
        pu(t), t.flags & 2048 && Te(9, t, t.return);
        break;
      case 3:
        pu(t);
        break;
      case 12:
        pu(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, On(t)) : pu(t);
        break;
      default:
        pu(t);
    }
  }
  function On(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Vt = a, po(
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
          Te(8, l, l.return), On(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, On(l));
          break;
        default:
          On(l);
      }
      t = t.sibling;
    }
  }
  function po(t, l) {
    for (; Vt !== null; ) {
      var e = Vt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Te(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          au(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Vt = a;
      else
        t: for (e = t; Vt !== null; ) {
          a = Vt;
          var u = a.sibling, n = a.return;
          if (so(a), a === e) {
            Vt = null;
            break t;
          }
          if (u !== null) {
            u.return = n, Vt = u;
            break t;
          }
          Vt = n;
        }
    }
  }
  var _h = {
    getCacheForType: function(t) {
      var l = Ft(Yt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return Ft(Yt).controller.signal;
    }
  }, Dh = typeof WeakMap == "function" ? WeakMap : Map, mt = 0, zt = null, et = null, ut = 0, St = 0, pl = null, Ae = !1, Na = !1, Hc = !1, ce = 0, Ct = 0, ze = 0, Pe = 0, Bc = 0, El = 0, Ra = 0, Eu = null, rl = null, jc = !1, Mn = 0, Eo = 0, Un = 1 / 0, Nn = null, _e = null, Lt = 0, De = null, Ca = null, fe = 0, qc = 0, Yc = null, To = null, Tu = 0, Gc = null;
  function Tl() {
    return (mt & 2) !== 0 && ut !== 0 ? ut & -ut : E.T !== null ? Kc() : qf();
  }
  function Ao() {
    if (El === 0)
      if ((ut & 536870912) === 0 || it) {
        var t = qu;
        qu <<= 1, (qu & 3932160) === 0 && (qu = 262144), El = t;
      } else El = 536870912;
    return t = Sl.current, t !== null && (t.flags |= 32), El;
  }
  function ol(t, l, e) {
    (t === zt && (St === 2 || St === 9) || t.cancelPendingCommit !== null) && (xa(t, 0), Oe(
      t,
      ut,
      El,
      !1
    )), Za(t, e), ((mt & 2) === 0 || t !== zt) && (t === zt && ((mt & 2) === 0 && (Pe |= e), Ct === 4 && Oe(
      t,
      ut,
      El,
      !1
    )), Ll(t));
  }
  function zo(t, l, e) {
    if ((mt & 6) !== 0) throw Error(r(327));
    var a = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || La(t, l), u = a ? Uh(t, l) : Qc(t, l, !0), n = a;
    do {
      if (u === 0) {
        Na && !a && Oe(t, l, 0, !1);
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
              u = Eu;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (xa(c, i).flags |= 256), i = Qc(
                c,
                i,
                !1
              ), i !== 2) {
                if (Hc && !s) {
                  c.errorRecoveryDisabledLanes |= n, Pe |= n, u = 4;
                  break t;
                }
                n = rl, rl = u, n !== null && (rl === null ? rl = n : rl.push.apply(
                  rl,
                  n
                ));
              }
              u = i;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          xa(t, 0), Oe(t, l, 0, !0);
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
              Oe(
                a,
                l,
                El,
                !Ae
              );
              break t;
            case 2:
              rl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((l & 62914560) === l && (u = Mn + 300 - ml(), 10 < u)) {
            if (Oe(
              a,
              l,
              El,
              !Ae
            ), Gu(a, 0, !0) !== 0) break t;
            fe = l, a.timeoutHandle = ld(
              _o.bind(
                null,
                a,
                e,
                rl,
                Nn,
                jc,
                l,
                El,
                Pe,
                Ra,
                Ae,
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
            rl,
            Nn,
            jc,
            l,
            El,
            Pe,
            Ra,
            Ae,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ll(t);
  }
  function _o(t, l, e, a, u, n, i, c, s, y, p, z, v, b) {
    if (t.timeoutHandle = -1, z = l.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = {
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
        z
      );
      var j = (n & 62914560) === n ? Mn - ml() : (n & 4194048) === n ? Eo - ml() : 0;
      if (j = o0(
        z,
        j
      ), j !== null) {
        fe = n, t.cancelPendingCommit = j(
          xo.bind(
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
            p,
            z,
            null,
            v,
            b
          )
        ), Oe(t, n, i, !y);
        return;
      }
    }
    xo(
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
            if (!vl(n(), u)) return !1;
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
  function Oe(t, l, e, a) {
    l &= ~Bc, l &= ~Pe, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
    for (var u = l; 0 < u; ) {
      var n = 31 - yl(u), i = 1 << n;
      a[n] = -1, u &= ~i;
    }
    e !== 0 && Hf(t, e, l);
  }
  function Rn() {
    return (mt & 6) === 0 ? (Au(0), !1) : !0;
  }
  function Xc() {
    if (et !== null) {
      if (St === 0)
        var t = et.return;
      else
        t = et, Wl = Ve = null, ec(t), Aa = null, nu = 0, t = et;
      for (; t !== null; )
        lo(t.alternate, t), t = t.return;
      et = null;
    }
  }
  function xa(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && (t.timeoutHandle = -1, wh(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), fe = 0, Xc(), zt = t, et = e = $l(t.current, null), ut = l, St = 0, pl = null, Ae = !1, Na = La(t, l), Hc = !1, Ra = El = Bc = Pe = ze = Ct = 0, rl = Eu = null, jc = !1, (l & 8) !== 0 && (l |= l & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; ) {
        var u = 31 - yl(a), n = 1 << u;
        l |= t[u], a &= ~n;
      }
    return ce = l, Wu(), e;
  }
  function Do(t, l) {
    I = null, E.H = mu, l === Ta || l === nn ? (l = Qs(), St = 3) : l === Vi ? (l = Qs(), St = 4) : St = l === Sc ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, pl = l, et === null && (Ct = 1, pn(
      t,
      Ml(l, t.current)
    ));
  }
  function Oo() {
    var t = Sl.current;
    return t === null ? !0 : (ut & 4194048) === ut ? Cl === null : (ut & 62914560) === ut || (ut & 536870912) !== 0 ? t === Cl : !1;
  }
  function Mo() {
    var t = E.H;
    return E.H = mu, t === null ? mu : t;
  }
  function Uo() {
    var t = E.A;
    return E.A = _h, t;
  }
  function Cn() {
    Ct = 4, Ae || (ut & 4194048) !== ut && Sl.current !== null || (Na = !0), (ze & 134217727) === 0 && (Pe & 134217727) === 0 || zt === null || Oe(
      zt,
      ut,
      El,
      !1
    );
  }
  function Qc(t, l, e) {
    var a = mt;
    mt |= 2;
    var u = Mo(), n = Uo();
    (zt !== t || ut !== l) && (Nn = null, xa(t, l)), l = !1;
    var i = Ct;
    t: do
      try {
        if (St !== 0 && et !== null) {
          var c = et, s = pl;
          switch (St) {
            case 8:
              Xc(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Sl.current === null && (l = !0);
              var y = St;
              if (St = 0, pl = null, Ha(t, c, s, y), e && Na) {
                i = 0;
                break t;
              }
              break;
            default:
              y = St, St = 0, pl = null, Ha(t, c, s, y);
          }
        }
        Mh(), i = Ct;
        break;
      } catch (p) {
        Do(t, p);
      }
    while (!0);
    return l && t.shellSuspendCounter++, Wl = Ve = null, mt = a, E.H = u, E.A = n, et === null && (zt = null, ut = 0, Wu()), i;
  }
  function Mh() {
    for (; et !== null; ) No(et);
  }
  function Uh(t, l) {
    var e = mt;
    mt |= 2;
    var a = Mo(), u = Uo();
    zt !== t || ut !== l ? (Nn = null, Un = ml() + 500, xa(t, l)) : Na = La(
      t,
      l
    );
    t: do
      try {
        if (St !== 0 && et !== null) {
          l = et;
          var n = pl;
          l: switch (St) {
            case 1:
              St = 0, pl = null, Ha(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (Gs(n)) {
                St = 0, pl = null, Ro(l);
                break;
              }
              l = function() {
                St !== 2 && St !== 9 || zt !== t || (St = 7), Ll(t);
              }, n.then(l, l);
              break t;
            case 3:
              St = 7;
              break t;
            case 4:
              St = 5;
              break t;
            case 7:
              Gs(n) ? (St = 0, pl = null, Ro(l)) : (St = 0, pl = null, Ha(t, l, n, 7));
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
                    St = 0, pl = null;
                    var s = c.sibling;
                    if (s !== null) et = s;
                    else {
                      var y = c.return;
                      y !== null ? (et = y, xn(y)) : et = null;
                    }
                    break l;
                  }
              }
              St = 0, pl = null, Ha(t, l, n, 5);
              break;
            case 6:
              St = 0, pl = null, Ha(t, l, n, 6);
              break;
            case 8:
              Xc(), Ct = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        Nh();
        break;
      } catch (p) {
        Do(t, p);
      }
    while (!0);
    return Wl = Ve = null, E.H = a, E.A = u, mt = e, et !== null ? 0 : (zt = null, ut = 0, Wu(), Ct);
  }
  function Nh() {
    for (; et !== null && !Pd(); )
      No(et);
  }
  function No(t) {
    var l = Pr(t.alternate, t, ce);
    t.memoizedProps = t.pendingProps, l === null ? xn(t) : et = l;
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
    t.memoizedProps = t.pendingProps, l === null ? xn(t) : et = l;
  }
  function Ha(t, l, e, a) {
    Wl = Ve = null, ec(l), Aa = null, nu = 0;
    var u = l.return;
    try {
      if (Sh(
        t,
        u,
        l,
        e,
        ut
      )) {
        Ct = 1, pn(
          t,
          Ml(e, t.current)
        ), et = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw et = u, n;
      Ct = 1, pn(
        t,
        Ml(e, t.current)
      ), et = null;
      return;
    }
    l.flags & 32768 ? (it || a === 1 ? t = !0 : Na || (ut & 536870912) !== 0 ? t = !1 : (Ae = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Sl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Co(l, t)) : xn(l);
  }
  function xn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        Co(
          l,
          Ae
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
    Ct === 0 && (Ct = 5);
  }
  function Co(t, l) {
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
    Ct = 6, et = null;
  }
  function xo(t, l, e, a, u, n, i, c, s) {
    t.cancelPendingCommit = null;
    do
      Hn();
    while (Lt !== 0);
    if ((mt & 6) !== 0) throw Error(r(327));
    if (l !== null) {
      if (l === t.current) throw Error(r(177));
      if (n = l.lanes | l.childLanes, n |= Ui, sm(
        t,
        e,
        n,
        i,
        c,
        s
      ), t === zt && (et = zt = null, ut = 0), Ca = l, De = t, fe = e, qc = n, Yc = u, To = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Hh(Bu, function() {
        return Yo(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
        a = E.T, E.T = null, u = x.p, x.p = 2, i = mt, mt |= 4;
        try {
          Ah(t, l, e);
        } finally {
          mt = i, x.p = u, E.T = a;
        }
      }
      Lt = 1, Ho(), Bo(), jo();
    }
  }
  function Ho() {
    if (Lt === 1) {
      Lt = 0;
      var t = De, l = Ca, e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        e = E.T, E.T = null;
        var a = x.p;
        x.p = 2;
        var u = mt;
        mt |= 4;
        try {
          ho(l, t);
          var n = Pc, i = bs(t.containerInfo), c = n.focusedElem, s = n.selectionRange;
          if (i !== c && c && c.ownerDocument && Ss(
            c.ownerDocument.documentElement,
            c
          )) {
            if (s !== null && zi(c)) {
              var y = s.start, p = s.end;
              if (p === void 0 && (p = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  p,
                  c.value.length
                );
              else {
                var z = c.ownerDocument || document, v = z && z.defaultView || window;
                if (v.getSelection) {
                  var b = v.getSelection(), j = c.textContent.length, J = Math.min(s.start, j), At = s.end === void 0 ? J : Math.min(s.end, j);
                  !b.extend && J > At && (i = At, At = J, J = i);
                  var m = gs(
                    c,
                    J
                  ), o = gs(
                    c,
                    At
                  );
                  if (m && o && (b.rangeCount !== 1 || b.anchorNode !== m.node || b.anchorOffset !== m.offset || b.focusNode !== o.node || b.focusOffset !== o.offset)) {
                    var h = z.createRange();
                    h.setStart(m.node, m.offset), b.removeAllRanges(), J > At ? (b.addRange(h), b.extend(o.node, o.offset)) : (h.setEnd(o.node, o.offset), b.addRange(h));
                  }
                }
              }
            }
            for (z = [], b = c; b = b.parentNode; )
              b.nodeType === 1 && z.push({
                element: b,
                left: b.scrollLeft,
                top: b.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < z.length; c++) {
              var A = z[c];
              A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
            }
          }
          Jn = !!Ic, Pc = Ic = null;
        } finally {
          mt = u, x.p = a, E.T = e;
        }
      }
      t.current = l, Lt = 2;
    }
  }
  function Bo() {
    if (Lt === 2) {
      Lt = 0;
      var t = De, l = Ca, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = E.T, E.T = null;
        var a = x.p;
        x.p = 2;
        var u = mt;
        mt |= 4;
        try {
          fo(t, l.alternate, l);
        } finally {
          mt = u, x.p = a, E.T = e;
        }
      }
      Lt = 3;
    }
  }
  function jo() {
    if (Lt === 4 || Lt === 3) {
      Lt = 0, tm();
      var t = De, l = Ca, e = fe, a = To;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Lt = 5 : (Lt = 0, Ca = De = null, qo(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (_e = null), ni(e), l = l.stateNode, hl && typeof hl.onCommitFiberRoot == "function")
        try {
          hl.onCommitFiberRoot(
            Qa,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        l = E.T, u = x.p, x.p = 2, E.T = null;
        try {
          for (var n = t.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          E.T = l, x.p = u;
        }
      }
      (fe & 3) !== 0 && Hn(), Ll(t), u = t.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? t === Gc ? Tu++ : (Tu = 0, Gc = t) : Tu = 0, Au(0);
    }
  }
  function qo(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, au(l)));
  }
  function Hn() {
    return Ho(), Bo(), jo(), Yo();
  }
  function Yo() {
    if (Lt !== 5) return !1;
    var t = De, l = qc;
    qc = 0;
    var e = ni(fe), a = E.T, u = x.p;
    try {
      x.p = 32 > e ? 32 : e, E.T = null, e = Yc, Yc = null;
      var n = De, i = fe;
      if (Lt = 0, Ca = De = null, fe = 0, (mt & 6) !== 0) throw Error(r(331));
      var c = mt;
      if (mt |= 4, bo(n.current), vo(
        n,
        n.current,
        i,
        e
      ), mt = c, Au(0, !1), hl && typeof hl.onPostCommitFiberRoot == "function")
        try {
          hl.onPostCommitFiberRoot(Qa, n);
        } catch {
        }
      return !0;
    } finally {
      x.p = u, E.T = a, qo(t, l);
    }
  }
  function Go(t, l, e) {
    l = Ml(e, l), l = gc(t.stateNode, l, 2), t = be(t, l, 2), t !== null && (Za(t, 2), Ll(t));
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
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (_e === null || !_e.has(a))) {
            t = Ml(e, t), e = Gr(2), a = be(l, e, 2), a !== null && (Xr(
              e,
              a,
              l,
              t
            ), Za(a, 2), Ll(a));
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
    a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, zt === t && (ut & e) === e && (Ct === 4 || Ct === 3 && (ut & 62914560) === ut && 300 > ml() - Mn ? (mt & 2) === 0 && xa(t, 0) : Bc |= e, Ra === ut && (Ra = 0)), Ll(t);
  }
  function Xo(t, l) {
    l === 0 && (l = xf()), t = Qe(t, l), t !== null && (Za(t, l), Ll(t));
  }
  function Ch(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), Xo(t, e);
  }
  function xh(t, l) {
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
  var Bn = null, Ba = null, Zc = !1, jn = !1, Vc = !1, Me = 0;
  function Ll(t) {
    t !== Ba && t.next === null && (Ba === null ? Bn = Ba = t : Ba = Ba.next = t), jn = !0, Zc || (Zc = !0, jh());
  }
  function Au(t, l) {
    if (!Vc && jn) {
      Vc = !0;
      do
        for (var e = !1, a = Bn; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - yl(42 | t) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, Vo(a, n));
          } else
            n = ut, n = Gu(
              a,
              a === zt ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || La(a, n) || (e = !0, Vo(a, n));
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
    jn = Zc = !1;
    var t = 0;
    Me !== 0 && Jh() && (t = Me);
    for (var l = ml(), e = null, a = Bn; a !== null; ) {
      var u = a.next, n = Lo(a, l);
      n === 0 ? (a.next = null, e === null ? Bn = u : e.next = u, u === null && (Ba = e)) : (e = a, (t !== 0 || (n & 3) !== 0) && (jn = !0)), a = u;
    }
    Lt !== 0 && Lt !== 5 || Au(t), Me !== 0 && (Me = 0);
  }
  function Lo(t, l) {
    for (var e = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - yl(n), c = 1 << i, s = u[i];
      s === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = fm(c, l)) : s <= l && (t.expiredLanes |= c), n &= ~c;
    }
    if (l = zt, e = ut, e = Gu(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, e === 0 || t === l && (St === 2 || St === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && ei(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || La(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (a !== null && ei(a), ni(e)) {
        case 2:
        case 8:
          e = Rf;
          break;
        case 32:
          e = Bu;
          break;
        case 268435456:
          e = Cf;
          break;
        default:
          e = Bu;
      }
      return a = Zo.bind(null, t), e = li(e, a), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return a !== null && a !== null && ei(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Zo(t, l) {
    if (Lt !== 0 && Lt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (Hn() && t.callbackNode !== e)
      return null;
    var a = ut;
    return a = Gu(
      t,
      t === zt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (zo(t, a, l), Lo(t, ml()), t.callbackNode != null && t.callbackNode === e ? Zo.bind(null, t) : null);
  }
  function Vo(t, l) {
    if (Hn()) return null;
    zo(t, l, !0);
  }
  function jh() {
    kh(function() {
      (mt & 6) !== 0 ? li(
        Nf,
        Bh
      ) : Qo();
    });
  }
  function Kc() {
    if (Me === 0) {
      var t = pa;
      t === 0 && (t = ju, ju <<= 1, (ju & 261888) === 0 && (ju = 256)), Me = t;
    }
    return Me;
  }
  function Ko(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Zu("" + t);
  }
  function Jo(t, l) {
    var e = l.ownerDocument.createElement("input");
    return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
  }
  function qh(t, l, e, a, u) {
    if (l === "submit" && e && e.stateNode === u) {
      var n = Ko(
        (u[nl] || null).action
      ), i = a.submitter;
      i && (l = (l = i[nl] || null) ? Ko(l.formAction) : i.getAttribute("formAction"), l !== null && (n = l, i = null));
      var c = new wu(
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
                if (Me !== 0) {
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
    Bl(
      Yh,
      "on" + Gh
    );
  }
  Bl(Ts, "onAnimationEnd"), Bl(As, "onAnimationIteration"), Bl(zs, "onAnimationStart"), Bl("dblclick", "onDoubleClick"), Bl("focusin", "onFocus"), Bl("focusout", "onBlur"), Bl(lh, "onTransitionRun"), Bl(eh, "onTransitionStart"), Bl(ah, "onTransitionCancel"), Bl(_s, "onTransitionEnd"), ia("onMouseEnter", ["mouseout", "mouseover"]), ia("onMouseLeave", ["mouseout", "mouseover"]), ia("onPointerEnter", ["pointerout", "pointerover"]), ia("onPointerLeave", ["pointerout", "pointerover"]), qe(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), qe(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), qe("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), qe(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), qe(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), qe(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var zu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Xh = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zu)
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
            } catch (p) {
              Fu(p);
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
            } catch (p) {
              Fu(p);
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
  var qn = "_reactListening" + Math.random().toString(36).slice(2);
  function $c(t) {
    if (!t[qn]) {
      t[qn] = !0, Xf.forEach(function(e) {
        e !== "selectionchange" && (Xh.has(e) || kc(e, !1, t), kc(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[qn] || (l[qn] = !0, kc("selectionchange", !1, l));
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
            if (i = aa(c), i === null) return;
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
      var y = n, p = mi(e), z = [];
      t: {
        var v = Ds.get(t);
        if (v !== void 0) {
          var b = wu, j = t;
          switch (t) {
            case "keypress":
              if (Ku(e) === 0) break t;
            case "keydown":
            case "keyup":
              b = xm;
              break;
            case "focusin":
              j = "focus", b = bi;
              break;
            case "focusout":
              j = "blur", b = bi;
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
          var J = (l & 4) !== 0, At = !J && (t === "scroll" || t === "scrollend"), m = J ? v !== null ? v + "Capture" : null : v;
          J = [];
          for (var o = y, h; o !== null; ) {
            var A = o;
            if (h = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || h === null || m === null || (A = Ja(o, m), A != null && J.push(
              _u(o, A, h)
            )), At) break;
            o = o.return;
          }
          0 < J.length && (v = new b(
            v,
            j,
            null,
            e,
            p
          ), z.push({ event: v, listeners: J }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (v = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout", v && e !== di && (j = e.relatedTarget || e.fromElement) && (aa(j) || j[ea]))
            break t;
          if ((b || v) && (v = p.window === p ? p : (v = p.ownerDocument) ? v.defaultView || v.parentWindow : window, b ? (j = e.relatedTarget || e.toElement, b = y, j = j ? aa(j) : null, j !== null && (At = B(j), J = j.tag, j !== At || J !== 5 && J !== 27 && J !== 6) && (j = null)) : (b = null, j = y), b !== j)) {
            if (J = ls, A = "onMouseLeave", m = "onMouseEnter", o = "mouse", (t === "pointerout" || t === "pointerover") && (J = as, A = "onPointerLeave", m = "onPointerEnter", o = "pointer"), At = b == null ? v : Ka(b), h = j == null ? v : Ka(j), v = new J(
              A,
              o + "leave",
              b,
              e,
              p
            ), v.target = At, v.relatedTarget = h, A = null, aa(p) === y && (J = new J(
              m,
              o + "enter",
              j,
              e,
              p
            ), J.target = h, J.relatedTarget = At, A = J), At = A, b && j)
              l: {
                for (J = Qh, m = b, o = j, h = 0, A = m; A; A = J(A))
                  h++;
                A = 0;
                for (var L = o; L; L = J(L))
                  A++;
                for (; 0 < h - A; )
                  m = J(m), h--;
                for (; 0 < A - h; )
                  o = J(o), A--;
                for (; h--; ) {
                  if (m === o || o !== null && m === o.alternate) {
                    J = m;
                    break l;
                  }
                  m = J(m), o = J(o);
                }
                J = null;
              }
            else J = null;
            b !== null && $o(
              z,
              v,
              b,
              J,
              !1
            ), j !== null && At !== null && $o(
              z,
              At,
              j,
              J,
              !0
            );
          }
        }
        t: {
          if (v = y ? Ka(y) : window, b = v.nodeName && v.nodeName.toLowerCase(), b === "select" || b === "input" && v.type === "file")
            var ot = os;
          else if (ss(v))
            if (ds)
              ot = Im;
            else {
              ot = Fm;
              var Q = $m;
            }
          else
            b = v.nodeName, !b || b.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? y && oi(y.elementType) && (ot = os) : ot = Wm;
          if (ot && (ot = ot(t, y))) {
            rs(
              z,
              ot,
              e,
              p
            );
            break t;
          }
          Q && Q(t, v, y), t === "focusout" && y && v.type === "number" && y.memoizedProps.value != null && ri(v, "number", v.value);
        }
        switch (Q = y ? Ka(y) : window, t) {
          case "focusin":
            (ss(Q) || Q.contentEditable === "true") && (da = Q, _i = y, tu = null);
            break;
          case "focusout":
            tu = _i = da = null;
            break;
          case "mousedown":
            Di = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Di = !1, ps(z, e, p);
            break;
          case "selectionchange":
            if (th) break;
          case "keydown":
          case "keyup":
            ps(z, e, p);
        }
        var P;
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
          oa ? cs(t, e) && (nt = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (nt = "onCompositionStart");
        nt && (us && e.locale !== "ko" && (oa || nt !== "onCompositionStart" ? nt === "onCompositionEnd" && oa && (P = Pf()) : (de = p, vi = "value" in de ? de.value : de.textContent, oa = !0)), Q = Yn(y, nt), 0 < Q.length && (nt = new es(
          nt,
          t,
          null,
          e,
          p
        ), z.push({ event: nt, listeners: Q }), P ? nt.data = P : (P = fs(e), P !== null && (nt.data = P)))), (P = Vm ? Km(t, e) : Jm(t, e)) && (nt = Yn(y, "onBeforeInput"), 0 < nt.length && (Q = new es(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          p
        ), z.push({
          event: Q,
          listeners: nt
        }), Q.data = P)), qh(
          z,
          t,
          y,
          e,
          p
        );
      }
      wo(z, l);
    });
  }
  function _u(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Yn(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var u = t, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ja(t, e), u != null && a.unshift(
        _u(t, u, n)
      ), u = Ja(t, l), u != null && a.push(
        _u(t, u, n)
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
      c !== 5 && c !== 26 && c !== 27 || y === null || (s = y, u ? (y = Ja(e, n), y != null && i.unshift(
        _u(e, y, s)
      )) : u || (y = Ja(e, n), y != null && i.push(
        _u(e, y, s)
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
        typeof a == "string" ? l === "body" || l === "textarea" && a === "" || fa(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && fa(t, "" + a);
        break;
      case "className":
        Qu(t, "class", a);
        break;
      case "tabIndex":
        Qu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Qu(t, e, a);
        break;
      case "style":
        Ff(t, a, n);
        break;
      case "data":
        if (l !== "object") {
          Qu(t, "data", a);
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
        a = Zu("" + a), t.setAttribute(e, a);
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
        a = Zu("" + a), t.setAttribute(e, a);
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
        e = Zu("" + a), t.setAttributeNS(
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
        at("beforetoggle", t), at("toggle", t), Xu(t, "popover", a);
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
        Xu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = gm.get(e) || e, Xu(t, e, a));
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
        typeof a == "string" ? fa(t, a) : (typeof a == "number" || typeof a == "bigint") && fa(t, "" + a);
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
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), l = e.slice(2, u ? e.length - 7 : void 0), n = t[nl] || null, n = n != null ? n[e] : null, typeof n == "function" && t.removeEventListener(l, n, u), typeof a == "function")) {
              typeof n != "function" && n !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, a, u);
              break t;
            }
            e in t ? t[e] = a : a === !0 ? t.setAttribute(e, "") : Xu(t, e, a);
          }
    }
  }
  function It(t, l, e) {
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
            var p = e[a];
            if (p != null)
              switch (a) {
                case "name":
                  u = p;
                  break;
                case "type":
                  i = p;
                  break;
                case "checked":
                  s = p;
                  break;
                case "defaultChecked":
                  y = p;
                  break;
                case "value":
                  n = p;
                  break;
                case "defaultValue":
                  c = p;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (p != null)
                    throw Error(r(137, l));
                  break;
                default:
                  Tt(t, l, a, p, e, null);
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
        l = n, e = i, t.multiple = !!a, l != null ? ca(t, !!a, l, !1) : e != null && ca(t, !!a, e, !0);
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
        for (a = 0; a < zu.length; a++)
          at(zu[a], t);
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
          for (p in e)
            e.hasOwnProperty(p) && (a = e[p], a !== void 0 && Wc(
              t,
              l,
              p,
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
        var u = null, n = null, i = null, c = null, s = null, y = null, p = null;
        for (b in e) {
          var z = e[b];
          if (e.hasOwnProperty(b) && z != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = z;
              default:
                a.hasOwnProperty(b) || Tt(t, l, b, null, a, z);
            }
        }
        for (var v in a) {
          var b = a[v];
          if (z = e[v], a.hasOwnProperty(v) && (b != null || z != null))
            switch (v) {
              case "type":
                n = b;
                break;
              case "name":
                u = b;
                break;
              case "checked":
                y = b;
                break;
              case "defaultChecked":
                p = b;
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
                b !== z && Tt(
                  t,
                  l,
                  v,
                  b,
                  a,
                  z
                );
            }
        }
        si(
          t,
          i,
          c,
          s,
          y,
          p,
          n,
          u
        );
        return;
      case "select":
        b = i = c = v = null;
        for (n in e)
          if (s = e[n], e.hasOwnProperty(n) && s != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                b = s;
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
        l = c, e = i, a = b, v != null ? ca(t, !!e, v, !1) : !!a != !!e && (l != null ? ca(t, !!e, l, !0) : ca(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        b = v = null;
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
                b = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== n && Tt(t, l, i, u, a, n);
            }
        wf(t, v, b);
        return;
      case "option":
        for (var j in e)
          v = e[j], e.hasOwnProperty(j) && v != null && !a.hasOwnProperty(j) && (j === "selected" ? t.selected = !1 : Tt(
            t,
            l,
            j,
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
        for (var J in e)
          v = e[J], e.hasOwnProperty(J) && v != null && !a.hasOwnProperty(J) && Tt(t, l, J, null, a, v);
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
          for (p in a)
            v = a[p], b = e[p], !a.hasOwnProperty(p) || v === b || v === void 0 && b === void 0 || Wc(
              t,
              l,
              p,
              v,
              a,
              b
            );
          return;
        }
    }
    for (var m in e)
      v = e[m], e.hasOwnProperty(m) && v != null && !a.hasOwnProperty(m) && Tt(t, l, m, null, a, v);
    for (z in a)
      v = a[z], b = e[z], !a.hasOwnProperty(z) || v === b || v == null && b == null || Tt(t, l, z, v, a, b);
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
            var p = s.transferSize, z = s.initiatorType;
            p && Io(z) && (s = s.responseEnd, i += p * (s < c ? 1 : (c - y) / (s - y)));
          }
          if (--a, l += 8 * (n + i) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Ic = null, Pc = null;
  function Gn(t) {
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
  function Ue(t) {
    return t === "head";
  }
  function ad(t, l) {
    var e = l, a = 0;
    do {
      var u = e.nextSibling;
      if (t.removeChild(e), u && u.nodeType === 8)
        if (e = u.data, e === "/$" || e === "/&") {
          if (a === 0) {
            t.removeChild(u), Ga(l);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          Du(t.ownerDocument.documentElement);
        else if (e === "head") {
          e = t.ownerDocument.head, Du(e);
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling, c = n.nodeName;
            n[Va] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = i;
          }
        } else
          e === "body" && Du(t.ownerDocument.body);
      e = u;
    } while (e);
    Ga(l);
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
        if (!t[Va])
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
      if (t = xl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Wh(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = xl(t.nextSibling), t === null)) return null;
    return t;
  }
  function nd(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = xl(t.nextSibling), t === null)) return null;
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
  function xl(t) {
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
            return xl(t.nextSibling);
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
    switch (l = Gn(e), t) {
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
  function Du(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    ci(t);
  }
  var Hl = /* @__PURE__ */ new Map(), sd = /* @__PURE__ */ new Set();
  function Xn(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var se = x.d;
  x.d = {
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
    var t = se.f(), l = Rn();
    return t || l;
  }
  function t0(t) {
    var l = ua(t);
    l !== null && l.tag === 5 && l.type === "form" ? _r(l) : se.r(t);
  }
  var ja = typeof document > "u" ? null : document;
  function rd(t, l, e) {
    var a = ja;
    if (a && typeof l == "string" && l) {
      var u = Dl(l);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), sd.has(u) || (sd.add(u), t = { rel: t, crossOrigin: e, href: l }, a.querySelector(u) === null && (l = a.createElement("link"), It(l, "link", t), Zt(l), a.head.appendChild(l)));
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
    var a = ja;
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
          n = qa(t);
          break;
        case "script":
          n = Ya(t);
      }
      Hl.has(n) || (t = R(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), Hl.set(n, t), a.querySelector(u) !== null || l === "style" && a.querySelector(Ou(n)) || l === "script" && a.querySelector(Mu(n)) || (l = a.createElement("link"), It(l, "link", t), Zt(l), a.head.appendChild(l)));
    }
  }
  function u0(t, l) {
    se.m(t, l);
    var e = ja;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script", u = 'link[rel="modulepreload"][as="' + Dl(a) + '"][href="' + Dl(t) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ya(t);
      }
      if (!Hl.has(n) && (t = R({ rel: "modulepreload", href: t }, l), Hl.set(n, t), e.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Mu(n)))
              return;
        }
        a = e.createElement("link"), It(a, "link", t), Zt(a), e.head.appendChild(a);
      }
    }
  }
  function n0(t, l, e) {
    se.S(t, l, e);
    var a = ja;
    if (a && t) {
      var u = na(a).hoistableStyles, n = qa(t);
      l = l || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(
          Ou(n)
        ))
          c.loading = 5;
        else {
          t = R(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = Hl.get(n)) && cf(t, e);
          var s = i = a.createElement("link");
          Zt(s), It(s, "link", t), s._p = new Promise(function(y, p) {
            s.onload = y, s.onerror = p;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Qn(i, l, a);
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
    var e = ja;
    if (e && t) {
      var a = na(e).hoistableScripts, u = Ya(t), n = a.get(u);
      n || (n = e.querySelector(Mu(u)), n || (t = R({ src: t, async: !0 }, l), (l = Hl.get(u)) && ff(t, l), n = e.createElement("script"), Zt(n), It(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function c0(t, l) {
    se.M(t, l);
    var e = ja;
    if (e && t) {
      var a = na(e).hoistableScripts, u = Ya(t), n = a.get(u);
      n || (n = e.querySelector(Mu(u)), n || (t = R({ src: t, async: !0, type: "module" }, l), (l = Hl.get(u)) && ff(t, l), n = e.createElement("script"), Zt(n), It(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function od(t, l, e, a) {
    var u = (u = lt.current) ? Xn(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (l = qa(e.href), e = na(
          u
        ).hoistableStyles, a = e.get(l), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = qa(e.href);
          var n = na(
            u
          ).hoistableStyles, i = n.get(t);
          if (i || (u = u.ownerDocument || u, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(t, i), (n = u.querySelector(
            Ou(t)
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
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Ya(e), e = na(
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
  function qa(t) {
    return 'href="' + Dl(t) + '"';
  }
  function Ou(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function dd(t) {
    return R({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function f0(t, l, e, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = t.createElement("link"), a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    }), It(l, "link", e), Zt(l), t.head.appendChild(l));
  }
  function Ya(t) {
    return '[src="' + Dl(t) + '"]';
  }
  function Mu(t) {
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
            return l.instance = a, Zt(a), a;
          var u = R({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Zt(a), It(a, "style", u), Qn(a, e.precedence, t), l.instance = a;
        case "stylesheet":
          u = qa(e.href);
          var n = t.querySelector(
            Ou(u)
          );
          if (n)
            return l.state.loading |= 4, l.instance = n, Zt(n), n;
          a = dd(e), (u = Hl.get(u)) && cf(a, u), n = (t.ownerDocument || t).createElement("link"), Zt(n);
          var i = n;
          return i._p = new Promise(function(c, s) {
            i.onload = c, i.onerror = s;
          }), It(n, "link", a), l.state.loading |= 4, Qn(n, e.precedence, t), l.instance = n;
        case "script":
          return n = Ya(e.src), (u = t.querySelector(
            Mu(n)
          )) ? (l.instance = u, Zt(u), u) : (a = e, (u = Hl.get(n)) && (a = R({}, e), ff(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), Zt(u), It(u, "link", a), t.head.appendChild(u), l.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Qn(a, e.precedence, t));
    return l.instance;
  }
  function Qn(t, l, e) {
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
  var Ln = null;
  function hd(t, l, e) {
    if (Ln === null) {
      var a = /* @__PURE__ */ new Map(), u = Ln = /* @__PURE__ */ new Map();
      u.set(e, a);
    } else
      u = Ln, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
    if (a.has(t)) return a;
    for (a.set(t, null), e = e.getElementsByTagName(t), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[Va] || n[kt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
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
        var u = qa(a.href), n = l.querySelector(
          Ou(u)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = Zn.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = n, Zt(n);
          return;
        }
        n = l.ownerDocument || l, a = dd(a), (u = Hl.get(u)) && cf(a, u), n = n.createElement("link"), Zt(n);
        var i = n;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), It(n, "link", a), e.instance = n;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = Zn.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var sf = 0;
  function o0(t, l) {
    return t.stylesheets && t.count === 0 && Kn(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (t.stylesheets && Kn(t, t.stylesheets), t.unsuspend) {
          var n = t.unsuspend;
          t.unsuspend = null, n();
        }
      }, 6e4 + l);
      0 < t.imgBytes && sf === 0 && (sf = 62500 * Kh());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Kn(t, t.stylesheets), t.unsuspend)) {
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
  function Zn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Kn(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Vn = null;
  function Kn(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Vn = /* @__PURE__ */ new Map(), l.forEach(d0, t), Vn = null, Zn.call(t));
  }
  function d0(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Vn.get(t);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Vn.set(t, e);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      u = l.instance, i = u.getAttribute("data-precedence"), n = e.get(i) || a, n === a && e.set(null, u), e.set(i, u), this.count++, a = Zn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), l.state.loading |= 4;
    }
  }
  var Uu = {
    $$typeof: pt,
    Provider: null,
    Consumer: null,
    _currentValue: w,
    _currentValue2: w,
    _threadCount: 0
  };
  function m0(t, l, e, a, u, n, i, c, s) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ai(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ai(0), this.hiddenUpdates = ai(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function gd(t, l, e, a, u, n, i, c, s, y, p, z) {
    return t = new m0(
      t,
      l,
      e,
      i,
      s,
      y,
      p,
      z,
      c
    ), l = 1, n === !0 && (l |= 24), n = gl(3, null, null, l), t.current = n, n.stateNode = t, l = Qi(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: l
    }, Ki(n), t;
  }
  function Sd(t) {
    return t ? (t = ya, t) : ya;
  }
  function bd(t, l, e, a, u, n) {
    u = Sd(u), a.context === null ? a.context = u : a.pendingContext = u, a = Se(l), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = be(t, a, l), e !== null && (ol(e, t, l), cu(e, t, l));
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
      var l = Qe(t, 67108864);
      l !== null && ol(l, t, 67108864), rf(t, 67108864);
    }
  }
  function Td(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = Tl();
      l = ui(l);
      var e = Qe(t, l);
      e !== null && ol(e, t, l), rf(t, l);
    }
  }
  var Jn = !0;
  function h0(t, l, e, a) {
    var u = E.T;
    E.T = null;
    var n = x.p;
    try {
      x.p = 2, of(t, l, e, a);
    } finally {
      x.p = n, E.T = u;
    }
  }
  function y0(t, l, e, a) {
    var u = E.T;
    E.T = null;
    var n = x.p;
    try {
      x.p = 8, of(t, l, e, a);
    } finally {
      x.p = n, E.T = u;
    }
  }
  function of(t, l, e, a) {
    if (Jn) {
      var u = df(a);
      if (u === null)
        Fc(
          t,
          l,
          a,
          wn,
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
          var n = ua(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = je(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var s = 1 << 31 - yl(i);
                      c.entanglements[1] |= s, i &= ~s;
                    }
                    Ll(n), (mt & 6) === 0 && (Un = ml() + 500, Au(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Qe(n, 2), c !== null && ol(c, n, 2), Rn(), rf(n, 2);
            }
          if (n = df(a), n === null && Fc(
            t,
            l,
            a,
            wn,
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
  var wn = null;
  function mf(t) {
    if (wn = null, t = aa(t), t !== null) {
      var l = B(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = X(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = q(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return wn = t, null;
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
          case Bu:
          case em:
            return 32;
          case Cf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var hf = !1, Ne = null, Re = null, Ce = null, Nu = /* @__PURE__ */ new Map(), Ru = /* @__PURE__ */ new Map(), xe = [], v0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function zd(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ne = null;
        break;
      case "dragenter":
      case "dragleave":
        Re = null;
        break;
      case "mouseover":
      case "mouseout":
        Ce = null;
        break;
      case "pointerover":
      case "pointerout":
        Nu.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ru.delete(l.pointerId);
    }
  }
  function Cu(t, l, e, a, u, n) {
    return t === null || t.nativeEvent !== n ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [u]
    }, l !== null && (l = ua(l), l !== null && Ed(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, u !== null && l.indexOf(u) === -1 && l.push(u), t);
  }
  function g0(t, l, e, a, u) {
    switch (l) {
      case "focusin":
        return Ne = Cu(
          Ne,
          t,
          l,
          e,
          a,
          u
        ), !0;
      case "dragenter":
        return Re = Cu(
          Re,
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
        return Nu.set(
          n,
          Cu(
            Nu.get(n) || null,
            t,
            l,
            e,
            a,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, Ru.set(
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
    }
    return !1;
  }
  function _d(t) {
    var l = aa(t.target);
    if (l !== null) {
      var e = B(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = X(e), l !== null) {
            t.blockedOn = l, Yf(t.priority, function() {
              Td(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = q(e), l !== null) {
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
  function kn(t) {
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
        return l = ua(e), l !== null && Ed(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function Dd(t, l, e) {
    kn(t) && e.delete(l);
  }
  function S0() {
    hf = !1, Ne !== null && kn(Ne) && (Ne = null), Re !== null && kn(Re) && (Re = null), Ce !== null && kn(Ce) && (Ce = null), Nu.forEach(Dd), Ru.forEach(Dd);
  }
  function $n(t, l) {
    t.blockedOn === l && (t.blockedOn = null, hf || (hf = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      S0
    )));
  }
  var Fn = null;
  function Od(t) {
    Fn !== t && (Fn = t, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        Fn === t && (Fn = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], a = t[l + 1], u = t[l + 2];
          if (typeof a != "function") {
            if (mf(a || e) === null)
              continue;
            break;
          }
          var n = ua(e);
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
  function Ga(t) {
    function l(s) {
      return $n(s, t);
    }
    Ne !== null && $n(Ne, t), Re !== null && $n(Re, t), Ce !== null && $n(Ce, t), Nu.forEach(l), Ru.forEach(l);
    for (var e = 0; e < xe.length; e++) {
      var a = xe[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < xe.length && (e = xe[0], e.blockedOn === null); )
      _d(e), e.blockedOn === null && xe.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var u = e[a], n = e[a + 1], i = u[nl] || null;
        if (typeof n == "function")
          i || Od(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, i = n[nl] || null)
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
  Wn.prototype.render = yf.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(r(409));
    var e = l.current, a = Tl();
    bd(e, a, t, l, null, null);
  }, Wn.prototype.unmount = yf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      bd(t.current, 2, null, t, null, null), Rn(), l[ea] = null;
    }
  };
  function Wn(t) {
    this._internalRoot = t;
  }
  Wn.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = qf();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < xe.length && l !== 0 && l < xe[e].priority; e++) ;
      xe.splice(e, 0, t), e === 0 && _d(t);
    }
  };
  var Ud = S.version;
  if (Ud !== "19.2.8")
    throw Error(
      r(
        527,
        Ud,
        "19.2.8"
      )
    );
  x.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = g(l), t = t !== null ? V(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var b0 = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: E,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var In = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!In.isDisabled && In.supportsFiber)
      try {
        Qa = In.inject(
          b0
        ), hl = In;
      } catch {
      }
  }
  return Hu.createRoot = function(t, l) {
    if (!G(t)) throw Error(r(299));
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
    ), t[ea] = l.current, $c(t), new yf(l);
  }, Hu.hydrateRoot = function(t, l, e) {
    if (!G(t)) throw Error(r(299));
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
    ), l.context = Sd(null), e = l.current, a = Tl(), a = ui(a), u = Se(a), u.callback = null, be(e, u, a), e = a, l.current.lanes = e, Za(l, e), Ll(l), t[ea] = l.current, $c(t), new Wn(l);
  }, Hu.version = "19.2.8", Hu;
}
var Gd;
function U0() {
  if (Gd) return Sf.exports;
  Gd = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (S) {
        console.error(S);
      }
  }
  return f(), Sf.exports = M0(), Sf.exports;
}
var N0 = U0();
const Of = "hana.plugin.ui", Mf = 1, R0 = "X-Hana-Plugin-Surface-Session", C0 = "pluginSurfaceSession", $d = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, ta = {
  TOAST_SHOW: "toast.show",
  EXTERNAL_OPEN: "external.open",
  RESOURCE_OPEN: "resource.open",
  RESOURCE_PICK: "resource.pick",
  RESOURCE_REQUEST_ACCESS: "resource.requestAccess",
  UI_RESIZE: "ui.resize",
  CLIPBOARD_WRITE_TEXT: "clipboard.writeText"
}, x0 = /* @__PURE__ */ new Set([
  "event",
  "request",
  "response",
  "error"
]);
function Xd(f) {
  return typeof f == "object" && f !== null;
}
function Be(f) {
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
    return Be("Plugin UI messages must be objects.");
  if (f.protocol !== Of)
    return Be("Plugin UI message protocol is missing or invalid.");
  if (f.version !== Mf)
    return {
      ok: !1,
      error: {
        code: $d.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(f.version)}.`
      }
    };
  if (typeof f.kind != "string" || !x0.has(f.kind))
    return Be("Plugin UI message kind is missing or invalid.");
  if (typeof f.type != "string" || f.type.trim() === "")
    return Be("Plugin UI message type must be a non-empty string.");
  const S = f.kind;
  if (S !== "event" && (typeof f.id != "string" || f.id.trim() === ""))
    return Be(`Plugin UI ${S} messages must include a non-empty id.`);
  if (S === "error") {
    if (!Xd(f.error))
      return Be("Plugin UI error messages must include an error object.");
    if (typeof f.error.code != "string" || f.error.code.trim() === "")
      return Be("Plugin UI error code must be a non-empty string.");
    if (typeof f.error.message != "string" || f.error.message.trim() === "")
      return Be("Plugin UI error message must be a non-empty string.");
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
  constructor(S) {
    super(S.message), this.code = S.code, this.details = S.details;
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
function q0(f, S) {
  if (S)
    return S;
  const M = new URLSearchParams(f.location.search).get("hana-host-origin");
  return M || (j0(f.document.referrer) ?? "*");
}
function Y0(f) {
  const S = new URLSearchParams(f.location.search);
  return {
    theme: S.get("hana-theme") ?? void 0,
    cssUrl: S.get("hana-css") ?? void 0
  };
}
function Vd(f, S, M) {
  return !(f.source !== S || M !== "*" && f.origin !== M);
}
function G0(f) {
  return typeof f == "string" ? { url: f } : f;
}
function X0(f) {
  return typeof f == "string" ? { text: f } : f;
}
function Fd(f) {
  const S = /^\/api\/plugins\/([^/]+)(?:\/|$)/.exec(f.location.pathname || "");
  if (!S)
    throw new Error("Plugin asset URL helper requires an iframe route under /api/plugins/:pluginId/.");
  try {
    return decodeURIComponent(S[1]);
  } catch {
    throw new Error("Plugin asset URL helper could not decode the current plugin id.");
  }
}
function Q0(f) {
  if (typeof f != "string" || f.length === 0)
    throw new Error("Invalid plugin asset path.");
  if (f.includes("\\") || f.includes("\0") || /^[a-z][a-z0-9+.-]*:/i.test(f))
    throw new Error("Invalid plugin asset path.");
  const S = f.replace(/^\/+/, "");
  if (!S || S.startsWith("./"))
    throw new Error("Invalid plugin asset path.");
  const M = S.split("/");
  if (M.some((r) => !r || r === "." || r === ".." || r.startsWith(".")))
    throw new Error("Invalid plugin asset path.");
  return M.map((r) => encodeURIComponent(r)).join("/");
}
function L0(f, S) {
  const M = Fd(f), r = Q0(S);
  return `${f.location.origin}/api/plugins/${encodeURIComponent(M)}/assets/${r}`;
}
function Z0(f) {
  return new URLSearchParams(f.location.search).get(C0) || null;
}
function V0(f) {
  if (typeof f != "string" || f.length === 0)
    throw new Error("Invalid plugin API path.");
  const S = f.trim();
  if (!S || S.includes("\\") || S.includes("\0") || S.includes("#") || S.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(S))
    throw new Error("Invalid plugin API path.");
  const M = S.replace(/^\/+/, "");
  if (!M || M.startsWith("./") || M === "api/plugins" || M.startsWith("api/plugins/"))
    throw new Error("Invalid plugin API path. Use a route path relative to the current plugin.");
  const r = M.indexOf("?"), G = r >= 0 ? M.slice(0, r) : M;
  if (!G)
    throw new Error("Invalid plugin API path.");
  const B = G.split("/");
  for (const D of B) {
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
  const X = new URL(`http://hana.local/${M}`);
  return `${B.map((D) => encodeURIComponent(decodeURIComponent(D))).join("/")}${X.search}`;
}
function Wd(f, S) {
  const M = Fd(f), r = V0(S);
  return `${f.location.origin}/api/plugins/${encodeURIComponent(M)}/${r}`;
}
function K0(f, S, M) {
  const r = Z0(f);
  if (!r)
    throw new Error("hana.api.fetch requires pluginSurfaceSession in the iframe URL.");
  const G = f.fetch?.bind(f) ?? globalThis.fetch?.bind(globalThis);
  if (!G)
    throw new Error("hana.api.fetch requires window.fetch.");
  const B = M ?? {}, X = new Headers(B.headers);
  return X.set(R0, r), G(Wd(f, S), {
    ...B,
    headers: X
  });
}
function J0(f = {}) {
  const S = f.targetWindow ?? B0(), M = f.parentWindow ?? S.parent, r = q0(S, f.targetOrigin), G = f.requestTimeoutMs ?? 1e4, B = f.idFactory ?? H0;
  let X = Y0(S);
  const q = /* @__PURE__ */ new Set();
  function D(C) {
    M.postMessage(C, r);
  }
  function g(C, F) {
    const ht = {
      protocol: Of,
      version: Mf,
      kind: "event",
      type: C
    };
    F !== void 0 && (ht.payload = F), D(ht);
  }
  function V(C) {
    if (!Vd(C, M, r))
      return;
    const F = Qd(C.data);
    if (!F.ok)
      return;
    const ht = F.value;
    if (ht.kind !== "event" || ht.type !== "hana.theme.changed" || typeof ht.payload != "object" || ht.payload === null)
      return;
    const ft = ht.payload;
    X = {
      theme: typeof ft.theme == "string" ? ft.theme : X.theme,
      cssUrl: typeof ft.cssUrl == "string" ? ft.cssUrl : X.cssUrl
    };
    for (const Ot of q)
      Ot(X);
  }
  function R(C, F, ht = {}) {
    const ft = B(), Ot = ht.timeoutMs ?? G;
    return new Promise((yt, xt) => {
      const pt = () => {
        S.removeEventListener("message", Kt), S.clearTimeout(al);
      }, Kt = (k) => {
        if (!Vd(k, M, r))
          return;
        const qt = Qd(k.data);
        if (!qt.ok)
          return;
        const Nt = qt.value;
        Nt.id !== ft || Nt.type !== C || (Nt.kind === "response" && (pt(), yt(Nt.payload)), Nt.kind === "error" && Nt.error && (pt(), xt(new Ld(Nt.error))));
      }, al = S.setTimeout(() => {
        pt(), xt(new Ld({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${C}.`
        }));
      }, Ot);
      S.addEventListener("message", Kt);
      const jt = {
        protocol: Of,
        version: Mf,
        id: ft,
        kind: "request",
        type: C
      };
      F !== void 0 && (jt.payload = F), D(jt);
    });
  }
  return {
    ready(C) {
      g("hana.ready", C);
    },
    assets: {
      url(C) {
        return L0(S, C);
      }
    },
    api: {
      url(C) {
        return Wd(S, C);
      },
      fetch(C, F) {
        return K0(S, C, F);
      }
    },
    ui: {
      resize(C) {
        g(ta.UI_RESIZE, C);
      }
    },
    theme: {
      getSnapshot() {
        return { ...X };
      },
      subscribe(C) {
        return q.size === 0 && S.addEventListener("message", V), q.add(C), C({ ...X }), () => {
          q.delete(C), q.size === 0 && S.removeEventListener("message", V);
        };
      }
    },
    host: {
      request: R
    },
    toast: {
      show(C, F) {
        return R(ta.TOAST_SHOW, C, F);
      }
    },
    external: {
      open(C, F) {
        return R(ta.EXTERNAL_OPEN, G0(C), F);
      }
    },
    clipboard: {
      writeText(C, F) {
        return R(ta.CLIPBOARD_WRITE_TEXT, X0(C), F);
      }
    },
    resources: {
      open(C, F) {
        return R(ta.RESOURCE_OPEN, C, F);
      },
      pick(C = {}, F) {
        return R(ta.RESOURCE_PICK, C, F);
      },
      requestAccess(C, F) {
        return R(ta.RESOURCE_REQUEST_ACCESS, C, F);
      }
    }
  };
}
let Kd = null;
function dl() {
  return Kd ??= J0(), Kd;
}
const vt = {
  ready(f) {
    return dl().ready(f);
  },
  assets: {
    url(f) {
      return dl().assets.url(f);
    }
  },
  api: {
    url(f) {
      return dl().api.url(f);
    },
    fetch(f, S) {
      return dl().api.fetch(f, S);
    }
  },
  ui: {
    resize(f) {
      return dl().ui.resize(f);
    }
  },
  theme: {
    getSnapshot() {
      return dl().theme.getSnapshot();
    },
    subscribe(f) {
      return dl().theme.subscribe(f);
    }
  },
  host: {
    request(f, S, M) {
      return dl().host.request(f, S, M);
    }
  },
  toast: {
    show(f, S) {
      return dl().toast.show(f, S);
    }
  },
  external: {
    open(f, S) {
      return dl().external.open(f, S);
    }
  },
  clipboard: {
    writeText(f, S) {
      return dl().clipboard.writeText(f, S);
    }
  },
  resources: {
    open(f, S) {
      return dl().resources.open(f, S);
    },
    pick(f, S) {
      return dl().resources.pick(f, S);
    },
    requestAccess(f, S) {
      return dl().resources.requestAccess(f, S);
    }
  }
};
function Zl(...f) {
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
function k0({ mode: f = "inherit", theme: S, className: M, style: r, children: G, "data-testid": B = "hana-plugin-theme", ...X }) {
  const q = typeof S == "string" ? S : void 0, D = $0(f, S);
  return N.jsx("div", { ...X, "data-testid": B, className: Zl("hana-plugin-theme", M), "data-hana-theme-mode": f, "data-hana-theme": f === "hana" ? q : void 0, style: { ...D, ...r }, children: G });
}
function $0(f, S) {
  if (f === "inherit")
    return {};
  const M = F0(f, S), r = {};
  for (const [G, B] of Object.entries(w0)) {
    const X = M?.[G];
    X && (r[B] = X);
  }
  return r;
}
function F0(f, S) {
  if (typeof S == "string")
    return Jd[S];
  if (S)
    return S;
  if (f === "hana")
    return Jd["warm-paper"];
}
const Xa = ct.forwardRef(function({ variant: S = "secondary", size: M = "md", loading: r = !1, iconLeft: G, iconRight: B, disabled: X, className: q, children: D, type: g = "button", ...V }, R) {
  return N.jsxs("button", { ...V, ref: R, type: g, disabled: X || r, className: Zl("hana-plugin-button", `hana-plugin-button-${S}`, `hana-plugin-button-${M}`, r && "hana-plugin-button-loading", q), children: [r ? N.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : G, D && N.jsx("span", { className: "hana-plugin-button-label", children: D }), !r && B] });
});
ct.forwardRef(function({ label: S, size: M = "md", variant: r = "ghost", className: G, children: B, type: X = "button", ...q }, D) {
  return N.jsx("button", { ...q, ref: D, type: X, "aria-label": S, title: q.title || S, className: Zl("hana-plugin-icon-button", `hana-plugin-icon-button-${M}`, `hana-plugin-icon-button-${r}`, G), children: B });
});
const Tf = ct.forwardRef(function({ label: S, hint: M, error: r, id: G, className: B, inputClassName: X, ...q }, D) {
  const g = ct.useId(), V = G || g;
  return N.jsx(Id, { label: S, hint: M, error: r, htmlFor: V, className: B, children: N.jsx("input", { ...q, ref: D, id: V, "aria-invalid": !!r, className: Zl("hana-plugin-input", X) }) });
}), W0 = ct.forwardRef(function({ label: S, hint: M, error: r, id: G, className: B, textareaClassName: X, rows: q = 4, ...D }, g) {
  const V = ct.useId(), R = G || V;
  return N.jsx(Id, { label: S, hint: M, error: r, htmlFor: R, className: B, children: N.jsx("textarea", { ...D, ref: g, id: R, rows: q, "aria-invalid": !!r, className: Zl("hana-plugin-textarea", X) }) });
});
ct.forwardRef(function({ checked: S, onChange: M, label: r, disabled: G, className: B, onClick: X, type: q = "button", ...D }, g) {
  const V = typeof r == "string" ? r : D["aria-label"];
  return N.jsxs("span", { className: Zl("hana-plugin-switch-wrap", B), children: [N.jsx("button", { ...D, ref: g, type: q, role: "switch", "aria-checked": S, "aria-label": V, disabled: G, className: Zl("hana-plugin-switch", S && "hana-plugin-switch-on"), onClick: (R) => {
    X?.(R), !R.defaultPrevented && !G && M?.(!S);
  }, children: N.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), r && N.jsx("span", { className: "hana-plugin-switch-label", children: r })] });
});
function Id({ label: f, hint: S, error: M, htmlFor: r, className: G, children: B }) {
  return N.jsxs("div", { className: Zl("hana-plugin-field", G), children: [f && N.jsx("label", { className: "hana-plugin-field-label", htmlFor: r, children: f }), S && N.jsx("div", { className: "hana-plugin-field-hint", children: S }), B, M && N.jsx("div", { className: "hana-plugin-field-error", children: M })] });
}
function I0({ title: f, description: S, actions: M, footer: r, children: G, className: B, ...X }) {
  return N.jsxs("section", { ...X, className: Zl("hana-plugin-card", B), children: [(f || S || M) && N.jsxs("header", { className: "hana-plugin-card-header", children: [N.jsxs("div", { className: "hana-plugin-card-heading", children: [f && N.jsx("h2", { className: "hana-plugin-card-title", children: f }), S && N.jsx("p", { className: "hana-plugin-card-description", children: S })] }), M && N.jsx("div", { className: "hana-plugin-card-actions", children: M })] }), N.jsx("div", { className: "hana-plugin-card-body", children: G }), r && N.jsx("footer", { className: "hana-plugin-card-footer", children: r })] });
}
function Af({ icon: f, title: S, description: M, action: r, className: G, ...B }) {
  return N.jsxs("div", { ...B, className: Zl("hana-plugin-empty", G), children: [f && N.jsx("div", { className: "hana-plugin-empty-icon", children: f }), N.jsx("div", { className: "hana-plugin-empty-title", children: S }), M && N.jsx("div", { className: "hana-plugin-empty-description", children: M }), r && N.jsx("div", { className: "hana-plugin-empty-action", children: r })] });
}
const zf = {
  dataDir: null,
  indexHealthy: !1,
  warning: null,
  degraded: null,
  directories: []
};
function la(f) {
  return `${f.dir}/${f.filename}`;
}
function _f(f) {
  const S = f ?? "", M = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/.exec(S);
  return M ? S.slice(M[0].length) : S;
}
function Pn(f, S) {
  const M = (f ?? "").replace(/[\\/]+$/, "");
  return S ? `${M}/${S}` : M;
}
function wd(f) {
  const S = f.replace(/\\/g, "/");
  return S.startsWith("/") ? `file://${S}` : `file:///${S}`;
}
const P0 = 16, ty = 250, ly = [
  { key: "edit", label: "编辑" },
  { key: "copy", label: "复制" },
  { key: "send", label: "发送给当前 Agent" },
  { key: "open-default", label: "用默认应用打开" },
  { key: "copy-path", label: "复制路径" },
  // 截图分享：宿主无对应能力（见 Task 6 报告 §2），置灰 + toast
  { key: "screenshot", label: "截图分享", disabled: !0 },
  { key: "delete", label: "删除", danger: !0, separatorBefore: !0 },
  { key: "rename", label: "重命名" }
], ey = [
  { key: "create-dir", label: "新建目录" },
  { key: "create-prompt", label: "新建卡片" },
  { key: "copy-path", label: "复制路径" },
  { key: "delete-dir", label: "删除目录", danger: !0, separatorBefore: !0 },
  { key: "rename-dir", label: "重命名" }
], ay = [
  { key: "create-dir", label: "新建目录" },
  { key: "create-prompt", label: "新建卡片" }
];
function uy({
  menu: f,
  items: S,
  onSelect: M,
  onClose: r
}) {
  const G = ct.useRef(null), [B, X] = ct.useState(null);
  return ct.useEffect(() => {
    if (!f) {
      X(null);
      return;
    }
    const q = G.current;
    if (!q) return;
    const D = 8, g = window.innerWidth, V = window.innerHeight;
    let R = f.x, C = f.y;
    C + q.offsetHeight + D > V && (C = V - q.offsetHeight - D), R + q.offsetWidth + D > g && (R = g - q.offsetWidth - D), X({ left: Math.max(D, R), top: Math.max(D, C) });
  }, [f]), ct.useEffect(() => {
    if (!f) return;
    function q(R) {
      G.current && !G.current.contains(R.target) && r();
    }
    function D(R) {
      R.key === "Escape" && r();
    }
    function g() {
      r();
    }
    function V(R) {
      G.current && !G.current.contains(R.target) && r();
    }
    return window.addEventListener("pointerdown", q), window.addEventListener("keydown", D), window.addEventListener("scroll", g, !0), window.addEventListener("contextmenu", V), () => {
      window.removeEventListener("pointerdown", q), window.removeEventListener("keydown", D), window.removeEventListener("scroll", g, !0), window.removeEventListener("contextmenu", V);
    };
  }, [f, r]), f ? /* @__PURE__ */ N.jsx(
    "div",
    {
      ref: G,
      className: "ps-menu",
      style: B ? { left: B.left, top: B.top } : { left: -9999, top: -9999 },
      role: "menu",
      children: S.map((q) => /* @__PURE__ */ N.jsxs(ct.Fragment, { children: [
        q.separatorBefore && /* @__PURE__ */ N.jsx("div", { className: "ps-menu-sep" }),
        /* @__PURE__ */ N.jsx(
          "button",
          {
            type: "button",
            role: "menuitem",
            "aria-disabled": q.disabled || void 0,
            className: `ps-menu-item${q.danger ? " ps-menu-item-danger" : ""}${q.disabled ? " ps-menu-item-disabled" : ""}`,
            onClick: () => {
              r(), M(q.key);
            },
            children: q.label
          }
        )
      ] }, q.key))
    }
  ) : null;
}
const ny = {
  "create-dir": "目录已创建",
  "create-prompt": "词条已创建",
  "rename-entry": "已重命名",
  "rename-dir": "目录已重命名",
  "confirm-delete-entry": "词条已删除",
  "confirm-delete-dir": "目录已删除"
};
function Df({
  form: f,
  submit: S,
  done: M
}) {
  const r = f.kind === "confirm-delete-entry" || f.kind === "confirm-delete-dir", G = f.kind === "rename-entry" ? f.entry.title : f.kind === "rename-dir" ? f.dirName : "", [B, X] = ct.useState(G), [q, D] = ct.useState(""), [g, V] = ct.useState(!1), [R, C] = ct.useState(null), F = ct.useRef(null);
  ct.useEffect(() => {
    F.current?.focus();
  }, []);
  async function ht(yt) {
    V(!0), C(null);
    const xt = await S(yt);
    V(!1), xt.ok ? (vt.toast.show({ message: ny[f.kind], type: "success" }), M()) : C(xt.error || "操作失败");
  }
  function ft() {
    switch (f.kind) {
      case "create-dir":
        return { type: "create-dir", name: B.trim() };
      case "create-prompt":
        return { type: "create-prompt", directory: f.dirName, name: B.trim(), content: q };
      case "rename-entry":
        return { type: "rename-prompt", path: la(f.entry), newName: B.trim() };
      case "rename-dir":
        return { type: "rename-dir", name: f.dirName, newName: B.trim() };
      case "confirm-delete-entry":
        return { type: "delete-prompt", path: la(f.entry) };
      case "confirm-delete-dir":
        return { type: "delete-dir", name: f.dirName };
    }
  }
  const Ot = r || B.trim().length > 0;
  return /* @__PURE__ */ N.jsxs("div", { className: "ps-inline", children: [
    f.kind === "create-prompt" && /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsx(
        Tf,
        {
          label: "标题",
          placeholder: "词条标题（自动生成 frontmatter）",
          value: B,
          ref: F,
          onChange: (yt) => X(yt.target.value)
        }
      ),
      /* @__PURE__ */ N.jsx(
        W0,
        {
          label: "内容",
          placeholder: "正文内容",
          className: "ps-inline-textarea",
          value: q,
          onChange: (yt) => D(yt.target.value)
        }
      )
    ] }),
    f.kind === "create-dir" && /* @__PURE__ */ N.jsx(
      Tf,
      {
        label: "新目录名",
        placeholder: "输入目录名",
        value: B,
        ref: F,
        onChange: (yt) => X(yt.target.value)
      }
    ),
    (f.kind === "rename-entry" || f.kind === "rename-dir") && /* @__PURE__ */ N.jsx(
      Tf,
      {
        label: f.kind === "rename-entry" ? "新名称" : "新目录名",
        value: B,
        ref: F,
        onChange: (yt) => X(yt.target.value)
      }
    ),
    f.kind === "confirm-delete-entry" && /* @__PURE__ */ N.jsxs("div", { className: "ps-inline-hint", children: [
      "删除词条「",
      f.entry.title,
      "」？此操作不可撤销。"
    ] }),
    f.kind === "confirm-delete-dir" && /* @__PURE__ */ N.jsxs("div", { className: "ps-inline-hint", children: [
      "删除目录「",
      f.dirName,
      "」？目录非空会被拒绝，请先清空词条。"
    ] }),
    R && /* @__PURE__ */ N.jsx("div", { className: "ps-inline-error", children: R }),
    /* @__PURE__ */ N.jsx("div", { className: "ps-inline-row", children: r ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsx(Xa, { size: "sm", variant: "danger", loading: g, onClick: () => ht(ft()), children: "删除" }),
      /* @__PURE__ */ N.jsx(Xa, { size: "sm", variant: "ghost", onClick: M, children: "取消" })
    ] }) : /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsx(
        Xa,
        {
          size: "sm",
          variant: "primary",
          loading: g,
          disabled: !Ot,
          onClick: () => ht(ft()),
          children: "确定"
        }
      ),
      /* @__PURE__ */ N.jsx(Xa, { size: "sm", variant: "ghost", onClick: M, children: "取消" })
    ] }) })
  ] });
}
function iy({
  state: f,
  rebuilding: S,
  onRebuild: M
}) {
  const { dataDir: r, indexHealthy: G, warning: B, degraded: X } = f, q = !!r && G === !1, D = !!r && !q && !!B, g = !!X;
  return !q && !D && !g ? null : /* @__PURE__ */ N.jsxs("div", { className: "ps-alerts", children: [
    q && /* @__PURE__ */ N.jsxs("div", { className: "ps-alert ps-alert-warn", children: [
      /* @__PURE__ */ N.jsx("span", { className: "ps-alert-text", children: "排序索引损坏，已恢复默认顺序" }),
      /* @__PURE__ */ N.jsx(Xa, { size: "sm", variant: "secondary", loading: S, onClick: M, children: "重建索引" })
    ] }),
    D && /* @__PURE__ */ N.jsx("div", { className: "ps-alert ps-alert-warn", children: B }),
    g && /* @__PURE__ */ N.jsx("div", { className: "ps-alert ps-alert-degraded", children: "写入已降级为备份+直写模式" })
  ] });
}
function cy() {
  const [f, S] = ct.useState(null), [M, r] = ct.useState(/* @__PURE__ */ new Set()), [G, B] = ct.useState(/* @__PURE__ */ new Set()), [X, q] = ct.useState(null), [D, g] = ct.useState(null), [V, R] = ct.useState(!1), [C, F] = ct.useState(null), [ht, ft] = ct.useState(null), Ot = ct.useRef(null), yt = ct.useRef(null), xt = ct.useRef(!1), pt = ct.useRef(null);
  async function Kt() {
    try {
      const O = await (await vt.api.fetch("api/state")).json();
      S({ ...zf, ...O });
    } catch {
      S({ ...zf, warning: "无法连接插件运行时，请重载插件后重试" });
    }
  }
  ct.useEffect(() => {
    vt.ready(), vt.ui.resize({ height: 9999 }), Kt();
  }, []), ct.useEffect(() => {
    function _() {
      d();
    }
    return window.addEventListener("dragend", _), () => window.removeEventListener("dragend", _);
  }, []);
  function al(_) {
    r((O) => {
      const U = new Set(O);
      return U.has(_) ? U.delete(_) : U.add(_), U;
    });
  }
  function jt(_) {
    B((O) => {
      const U = new Set(O);
      return U.has(_) ? U.delete(_) : U.add(_), U;
    });
  }
  const k = ct.useRef(null);
  function qt(_) {
    k.current !== null && window.clearTimeout(k.current), k.current = window.setTimeout(() => {
      k.current = null, jt(_);
    }, ty);
  }
  function Nt(_) {
    k.current !== null && (window.clearTimeout(k.current), k.current = null), vt.clipboard.writeText(_f(_.content)), vt.toast.show({ message: "已复制", type: "success" });
  }
  ct.useEffect(() => () => {
    k.current !== null && window.clearTimeout(k.current);
  }, []);
  function Vl(_, O) {
    _.dataTransfer.effectAllowed = "move";
    const U = Pn(f?.dataDir ?? null, la(O));
    try {
      _.dataTransfer.setData("text/plain", U), _.dataTransfer.setData("text/uri-list", wd(U));
    } catch {
    }
    const Z = { kind: "entry", dir: O.dir, filename: O.filename, path: U };
    Ot.current = Z, F(Z), ft(null), xt.current = !1, pt.current = { x: _.clientX, y: _.clientY };
    const K = f?.directories.find((tt) => tt.name === O.dir)?.entries;
    yt.current = K ? { kind: "entry", dir: O.dir, entries: [...K] } : null, q(null);
  }
  function Al(_, O) {
    _.dataTransfer.effectAllowed = "move";
    const U = Pn(f?.dataDir ?? null, O);
    try {
      _.dataTransfer.setData("text/plain", U), _.dataTransfer.setData("text/uri-list", wd(U));
    } catch {
    }
    const Z = { kind: "dir", name: O, path: U };
    Ot.current = Z, F(Z), ft(null), xt.current = !1, pt.current = { x: _.clientX, y: _.clientY }, yt.current = { kind: "dir", dirs: f?.directories ? [...f.directories] : [] }, q(null);
  }
  function Jt(_, O, U) {
    if (U === O || U === O + 1) return null;
    const Z = [..._], [K] = Z.splice(O, 1);
    return Z.splice(U > O ? U - 1 : U, 0, K), Z;
  }
  function Kl(_, O) {
    S(
      (U) => U && {
        ...U,
        directories: U.directories.map((Z) => Z.name === _ ? { ...Z, entries: O } : Z)
      }
    );
  }
  function zl(_, O) {
    pt.current = { x: _.clientX, y: _.clientY };
    const U = Ot.current;
    if (!U || U.kind !== "entry" || U.dir !== O.dir) return;
    _.preventDefault(), _.dataTransfer.dropEffect = "move";
    const Z = f?.directories.find((Pt) => Pt.name === O.dir)?.entries;
    if (!Z) return;
    const K = Z.findIndex((Pt) => Pt.filename === U.filename), tt = Z.findIndex((Pt) => Pt.filename === O.filename);
    if (K === -1 || tt === -1) return;
    const ll = _.currentTarget.getBoundingClientRect(), Yl = _.clientY < ll.top + ll.height / 2, Ut = Jt(Z, K, Yl ? tt : tt + 1);
    Ut && Kl(O.dir, Ut);
  }
  function ul(_, O) {
    const U = Ot.current;
    if (!U || U.kind !== "entry" || U.dir !== O.dir) return;
    _.preventDefault(), xt.current = !0;
    const Z = f?.directories.find((tt) => tt.name === O.dir)?.entries;
    if (!Z) return;
    const K = Z.map((tt) => tt.filename);
    (async () => {
      const tt = await T({ type: "reorder", dirName: O.dir, items: K });
      tt.ok || (st(), vt.toast.show({ message: tt.error || "排序保存失败", type: "error" }));
    })();
  }
  function E(_, O) {
    pt.current = { x: _.clientX, y: _.clientY };
    const U = Ot.current;
    if (U)
      if (U.kind === "dir") {
        _.preventDefault(), _.dataTransfer.dropEffect = "move";
        const Z = f?.directories ?? [], K = Z.findIndex((Pt) => Pt.name === U.name), tt = Z.findIndex((Pt) => Pt.name === O);
        if (K === -1 || tt === -1) return;
        const ll = _.currentTarget.getBoundingClientRect(), Yl = _.clientY < ll.top + ll.height / 2, Ut = Jt(Z, K, Yl ? tt : tt + 1);
        Ut && S((Pt) => Pt && { ...Pt, directories: Ut });
      } else U.kind === "entry" && U.dir !== O && (_.preventDefault(), _.dataTransfer.dropEffect = "move", ft(O));
  }
  function x(_) {
    const O = _.relatedTarget;
    if (O && _.currentTarget.contains(O)) return;
    const U = _.currentTarget.dataset.dirname;
    ft((Z) => Z === U ? null : Z);
  }
  function w(_, O) {
    const U = Ot.current;
    if (U) {
      if (_.preventDefault(), xt.current = !0, ft(null), U.kind === "dir") {
        const Z = (f?.directories ?? []).map((K) => K.name);
        (async () => {
          const K = await T({ type: "reorder", dirName: null, items: Z });
          K.ok || (st(), vt.toast.show({ message: K.error || "排序保存失败", type: "error" }));
        })();
      } else if (U.kind === "entry" && U.dir !== O) {
        const Z = `${U.dir}/${U.filename}`;
        (async () => {
          const K = await T({ type: "move-prompt", path: Z, targetDir: O });
          K.ok ? gt(Z, `${O}/${U.filename}`) : (st(), vt.toast.show({ message: K.error || "移动失败", type: "error" }));
        })();
      }
    }
  }
  function st() {
    const _ = yt.current;
    _ && (yt.current = null, S((O) => O && (_.kind === "entry" ? {
      ...O,
      directories: O.directories.map(
        (U) => U.name === _.dir ? { ...U, entries: _.entries } : U
      )
    } : { ...O, directories: _.dirs })));
  }
  function gt(_, O) {
    B((U) => {
      if (!U.has(_)) return U;
      const Z = new Set(U);
      return Z.delete(_), Z.add(O), Z;
    });
  }
  function d() {
    const _ = Ot.current;
    if (!_) return;
    const O = xt.current, U = pt.current;
    !O && U && U.x <= P0 && U.y >= 0 && U.y <= window.innerHeight && (vt.clipboard.writeText(_.path), vt.toast.show({ message: "已复制路径，粘贴发送给 Agent", type: "info" })), O || st(), Ot.current = null, F(null), ft(null), xt.current = !1, pt.current = null;
  }
  async function T(_) {
    try {
      const U = await (await vt.api.fetch("api/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(_)
      })).json();
      return U.state && S({ ...zf, ...U.state }), { ok: U.ok === !0, error: U.error };
    } catch {
      return { ok: !1, error: "请求失败，请重载插件后重试" };
    }
  }
  async function H() {
    R(!0);
    const _ = await T({ type: "rebuild" });
    R(!1), _.ok || vt.toast.show({ message: _.error || "重建索引失败", type: "error" });
  }
  async function Y() {
    let _;
    try {
      _ = await vt.resources.pick({ mode: "directory", multiple: !1 });
    } catch {
      vt.toast.show({ message: "选择目录失败", type: "error" });
      return;
    }
    const O = _?.resources?.[0];
    if (!O?.path) return;
    const U = await T({ type: "init", dataDir: O.path });
    U.ok || vt.toast.show({ message: U.error || "初始化失败", type: "error" });
  }
  function $(_, O, U, Z) {
    _.preventDefault(), _.stopPropagation(), g(null), q({ x: _.clientX, y: _.clientY, kind: O, entry: U, dirName: Z });
  }
  async function lt(_) {
    if (!X) return;
    const { kind: O, entry: U, dirName: Z } = X, K = f?.dataDir ?? null;
    if (O === "entry" && U) {
      const tt = Pn(K, la(U));
      switch (_) {
        case "edit":
          try {
            await vt.resources.open({ resource: { kind: "local-file", path: tt }, mode: "edit" });
          } catch {
            try {
              await vt.resources.open({ resource: { kind: "local-file", path: tt }, mode: "preview" });
            } catch {
              vt.toast.show({ message: "无法打开文件", type: "error" });
            }
          }
          break;
        case "copy":
          await vt.clipboard.writeText(_f(U.content)), vt.toast.show({ message: "已复制正文", type: "success" });
          break;
        case "send": {
          const ll = await T({ type: "send-to-agent", path: la(U) });
          vt.toast.show({
            message: ll.ok ? "已发送到当前会话" : ll.error || "发送失败",
            type: ll.ok ? "success" : "error"
          });
          break;
        }
        case "open-default":
          try {
            await vt.resources.open({ resource: { kind: "local-file", path: tt }, mode: "preview" });
          } catch {
            vt.toast.show({ message: "无法打开文件", type: "error" });
          }
          break;
        case "copy-path":
          await vt.clipboard.writeText(tt), vt.toast.show({ message: "已复制路径", type: "success" });
          break;
        case "screenshot":
          vt.toast.show({ message: "暂不支持", type: "info" });
          break;
        case "delete":
          g({ kind: "confirm-delete-entry", entry: U });
          break;
        case "rename":
          g({ kind: "rename-entry", entry: U });
          break;
      }
      return;
    }
    if (O === "blank") {
      switch (_) {
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
    if (O === "dir" && Z) {
      const tt = Pn(K, Z);
      switch (_) {
        case "create-dir":
          g({ kind: "create-dir", anchorDir: Z });
          break;
        case "create-prompt":
          g({ kind: "create-prompt", dirName: Z });
          break;
        case "copy-path":
          await vt.clipboard.writeText(tt), vt.toast.show({ message: "已复制路径", type: "success" });
          break;
        case "delete-dir":
          g({ kind: "confirm-delete-dir", dirName: Z });
          break;
        case "rename-dir":
          g({ kind: "rename-dir", dirName: Z });
          break;
      }
    }
  }
  function rt(_, O) {
    switch (_.kind) {
      case "create-dir":
        return _.anchorDir === O;
      case "create-prompt":
      case "rename-dir":
      case "confirm-delete-dir":
        return _.dirName === O;
      default:
        return !1;
    }
  }
  function wt() {
    return f ? f.dataDir ? !f.directories.some((O) => O.entries.length > 0) && !D ? /* @__PURE__ */ N.jsx("div", { onContextMenu: (O) => $(O, "blank"), children: /* @__PURE__ */ N.jsx(
      Af,
      {
        title: "架子上还没有词条",
        description: "右键目录行可以新建卡片，或通过工具写入第一个提示词。"
      }
    ) }) : /* @__PURE__ */ N.jsxs(
      "div",
      {
        className: "ps-shelf",
        onContextMenu: (O) => $(O, "blank"),
        onDragOver: (O) => {
          pt.current = { x: O.clientX, y: O.clientY };
        },
        children: [
          D?.kind === "create-dir" && !D.anchorDir && /* @__PURE__ */ N.jsx(Df, { form: D, submit: T, done: () => g(null) }),
          f.directories.map((O) => {
            const U = M.has(O.name), Z = D && rt(D, O.name) ? D : null;
            return /* @__PURE__ */ N.jsxs("section", { className: "ps-dir", children: [
              /* @__PURE__ */ N.jsxs(
                "button",
                {
                  type: "button",
                  className: `ps-dir-head${C?.kind === "dir" && C.name === O.name ? " ps-dragging" : ""}${C?.kind === "entry" && C.dir !== O.name && ht === O.name ? " ps-drop-target" : ""}`,
                  onClick: () => al(O.name),
                  onContextMenu: (K) => $(K, "dir", void 0, O.name),
                  onDragStart: (K) => Al(K, O.name),
                  onDragOver: (K) => E(K, O.name),
                  onDragLeave: x,
                  onDrop: (K) => w(K, O.name),
                  onDragEnd: d,
                  "data-dirname": O.name,
                  draggable: !0,
                  "aria-expanded": !U,
                  children: [
                    /* @__PURE__ */ N.jsx("span", { className: `ps-dir-arrow${U ? " ps-dir-arrow-collapsed" : ""}`, children: "▾" }),
                    /* @__PURE__ */ N.jsx("span", { className: "ps-dir-name", title: O.name, children: O.name }),
                    /* @__PURE__ */ N.jsx("span", { className: "ps-dir-count", children: O.entries.length })
                  ]
                }
              ),
              Z && /* @__PURE__ */ N.jsx(Df, { form: Z, submit: T, done: () => g(null) }),
              !U && /* @__PURE__ */ N.jsx("div", { className: "ps-pills", children: O.entries.map((K) => {
                const tt = la(K), ll = G.has(tt), Yl = D && (D.kind === "rename-entry" || D.kind === "confirm-delete-entry") && la(D.entry) === tt ? D : null;
                return Yl ? /* @__PURE__ */ N.jsx(Df, { form: Yl, submit: T, done: () => g(null) }, tt) : ll ? /* @__PURE__ */ N.jsxs("div", { className: "ps-card", children: [
                  /* @__PURE__ */ N.jsx(
                    "button",
                    {
                      type: "button",
                      className: `ps-card-head${C?.kind === "entry" && C.dir === O.name && C.filename === K.filename ? " ps-dragging" : ""}`,
                      onClick: () => qt(tt),
                      onDoubleClick: () => Nt(K),
                      onContextMenu: (Ut) => $(Ut, "entry", K),
                      onDragStart: (Ut) => Vl(Ut, K),
                      onDragOver: (Ut) => zl(Ut, K),
                      onDrop: (Ut) => ul(Ut, K),
                      onDragEnd: d,
                      draggable: !0,
                      title: "点击收起",
                      children: /* @__PURE__ */ N.jsx("span", { className: "ps-card-title", children: K.title })
                    }
                  ),
                  /* @__PURE__ */ N.jsx("pre", { className: "ps-card-body", onDoubleClick: () => Nt(K), children: _f(K.content) }),
                  /* @__PURE__ */ N.jsx(
                    "button",
                    {
                      type: "button",
                      className: "ps-card-close",
                      onClick: () => jt(tt),
                      "aria-label": "收起",
                      title: "收起",
                      children: "×"
                    }
                  )
                ] }, tt) : /* @__PURE__ */ N.jsx(
                  "button",
                  {
                    type: "button",
                    className: `ps-pill${C?.kind === "entry" && C.dir === O.name && C.filename === K.filename ? " ps-dragging" : ""}`,
                    onClick: () => qt(tt),
                    onDoubleClick: () => Nt(K),
                    onContextMenu: (Ut) => $(Ut, "entry", K),
                    onDragStart: (Ut) => Vl(Ut, K),
                    onDragOver: (Ut) => zl(Ut, K),
                    onDrop: (Ut) => ul(Ut, K),
                    onDragEnd: d,
                    draggable: !0,
                    title: K.title,
                    children: /* @__PURE__ */ N.jsx("span", { className: "ps-pill-title", children: K.title })
                  },
                  tt
                );
              }) })
            ] }, O.name);
          })
        ]
      }
    ) : /* @__PURE__ */ N.jsx(
      Af,
      {
        title: "提示词架尚未初始化",
        description: "选择一个数据目录作为提示词库的存放位置，之后词条会自动出现在这里。",
        action: /* @__PURE__ */ N.jsx(Xa, { variant: "primary", onClick: Y, children: "选择数据目录" })
      }
    ) : /* @__PURE__ */ N.jsx(Af, { title: "加载中…", description: "正在读取提示词架" });
  }
  return /* @__PURE__ */ N.jsx(k0, { mode: "inherit", className: "plugin-panel", children: /* @__PURE__ */ N.jsxs(
    I0,
    {
      title: "PromptShelf",
      description: "提示词架：右键词条/目录操作，单击胶囊展开预览，点标题栏或 × 收起。",
      children: [
        f && /* @__PURE__ */ N.jsx(iy, { state: f, rebuilding: V, onRebuild: H }),
        wt(),
        /* @__PURE__ */ N.jsx(
          uy,
          {
            menu: X,
            items: X?.kind === "entry" ? ly : X?.kind === "blank" ? ay : ey,
            onSelect: lt,
            onClose: () => q(null)
          }
        )
      ]
    }
  ) });
}
const kd = document.getElementById("root");
kd && N0.createRoot(kd).render(/* @__PURE__ */ N.jsx(cy, {}));
