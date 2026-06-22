const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/schedule-C11_6mTF.js",
      "assets/Skeletons-CLVflFyJ.js",
      "assets/Footer-BLHjArDh.js",
      "assets/memories-CJ0yedWr.js",
      "assets/covering-Dx2BOD8I.js",
      "assets/contact-BPeothKP.js",
      "assets/index-G43J_2ar.js",
      "assets/auth-SQB1PQ47.js",
      "assets/index-YOP48E1F.js",
      "assets/admin-BpX8r-c7.js",
    ]),
) => i.map((i) => d[i]);
function JS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Uh = { exports: {} },
  Sa = {};
var Xm;
function XS() {
  if (Xm) return Sa;
  Xm = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.fragment");
  function s(a, l, u) {
    var c = null;
    if ((u !== void 0 && (c = "" + u), l.key !== void 0 && (c = "" + l.key), "key" in l)) {
      u = {};
      for (var d in l) d !== "key" && (u[d] = l[d]);
    } else u = l;
    return ((l = u.ref), { $$typeof: e, type: a, key: c, ref: l !== void 0 ? l : null, props: u });
  }
  return ((Sa.Fragment = t), (Sa.jsx = s), (Sa.jsxs = s), Sa);
}
var Zm;
function ZS() {
  return (Zm || ((Zm = 1), (Uh.exports = XS())), Uh.exports);
}
var $ = ZS(),
  Lh = { exports: {} },
  he = {};
var Wm;
function WS() {
  if (Wm) return he;
  Wm = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    c = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    m = Symbol.for("react.activity"),
    b = Symbol.iterator;
  function _(k) {
    return k === null || typeof k != "object"
      ? null
      : ((k = (b && k[b]) || k["@@iterator"]), typeof k == "function" ? k : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    A = Object.assign,
    E = {};
  function O(k, V, X) {
    ((this.props = k), (this.context = V), (this.refs = E), (this.updater = X || w));
  }
  ((O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (k, V) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, k, V, "setState");
    }),
    (O.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    }));
  function M() {}
  M.prototype = O.prototype;
  function j(k, V, X) {
    ((this.props = k), (this.context = V), (this.refs = E), (this.updater = X || w));
  }
  var L = (j.prototype = new M());
  ((L.constructor = j), A(L, O.prototype), (L.isPureReactComponent = !0));
  var Q = Array.isArray;
  function F() {}
  var B = { H: null, A: null, T: null, S: null },
    G = Object.prototype.hasOwnProperty;
  function Y(k, V, X) {
    var ee = X.ref;
    return { $$typeof: e, type: k, key: V, ref: ee !== void 0 ? ee : null, props: X };
  }
  function ae(k, V) {
    return Y(k.type, V, k.props);
  }
  function re(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }
  function de(k) {
    var V = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function (X) {
        return V[X];
      })
    );
  }
  var Se = /\/+/g;
  function Fe(k, V) {
    return typeof k == "object" && k !== null && k.key != null ? de("" + k.key) : V.toString(36);
  }
  function Be(k) {
    switch (k.status) {
      case "fulfilled":
        return k.value;
      case "rejected":
        throw k.reason;
      default:
        switch (
          (typeof k.status == "string"
            ? k.then(F, F)
            : ((k.status = "pending"),
              k.then(
                function (V) {
                  k.status === "pending" && ((k.status = "fulfilled"), (k.value = V));
                },
                function (V) {
                  k.status === "pending" && ((k.status = "rejected"), (k.reason = V));
                },
              )),
          k.status)
        ) {
          case "fulfilled":
            return k.value;
          case "rejected":
            throw k.reason;
        }
    }
    throw k;
  }
  function H(k, V, X, ee, ie) {
    var ge = typeof k;
    (ge === "undefined" || ge === "boolean") && (k = null);
    var we = !1;
    if (k === null) we = !0;
    else
      switch (ge) {
        case "bigint":
        case "string":
        case "number":
          we = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case e:
            case t:
              we = !0;
              break;
            case y:
              return ((we = k._init), H(we(k._payload), V, X, ee, ie));
          }
      }
    if (we)
      return (
        (ie = ie(k)),
        (we = ee === "" ? "." + Fe(k, 0) : ee),
        Q(ie)
          ? ((X = ""),
            we != null && (X = we.replace(Se, "$&/") + "/"),
            H(ie, V, X, "", function (wn) {
              return wn;
            }))
          : ie != null &&
            (re(ie) &&
              (ie = ae(
                ie,
                X +
                  (ie.key == null || (k && k.key === ie.key)
                    ? ""
                    : ("" + ie.key).replace(Se, "$&/") + "/") +
                  we,
              )),
            V.push(ie)),
        1
      );
    we = 0;
    var Qe = ee === "" ? "." : ee + ":";
    if (Q(k))
      for (var Ue = 0; Ue < k.length; Ue++)
        ((ee = k[Ue]), (ge = Qe + Fe(ee, Ue)), (we += H(ee, V, X, ge, ie)));
    else if (((Ue = _(k)), typeof Ue == "function"))
      for (k = Ue.call(k), Ue = 0; !(ee = k.next()).done; )
        ((ee = ee.value), (ge = Qe + Fe(ee, Ue++)), (we += H(ee, V, X, ge, ie)));
    else if (ge === "object") {
      if (typeof k.then == "function") return H(Be(k), V, X, ee, ie);
      throw (
        (V = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            (V === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : V) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return we;
  }
  function J(k, V, X) {
    if (k == null) return k;
    var ee = [],
      ie = 0;
    return (
      H(k, ee, "", "", function (ge) {
        return V.call(X, ge, ie++);
      }),
      ee
    );
  }
  function le(k) {
    if (k._status === -1) {
      var V = k._result;
      ((V = V()),
        V.then(
          function (X) {
            (k._status === 0 || k._status === -1) && ((k._status = 1), (k._result = X));
          },
          function (X) {
            (k._status === 0 || k._status === -1) && ((k._status = 2), (k._result = X));
          },
        ),
        k._status === -1 && ((k._status = 0), (k._result = V)));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var Ae =
      typeof reportError == "function"
        ? reportError
        : function (k) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var V = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof k == "object" && k !== null && typeof k.message == "string"
                    ? String(k.message)
                    : String(k),
                error: k,
              });
              if (!window.dispatchEvent(V)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", k);
              return;
            }
            console.error(k);
          },
    Ce = {
      map: J,
      forEach: function (k, V, X) {
        J(
          k,
          function () {
            V.apply(this, arguments);
          },
          X,
        );
      },
      count: function (k) {
        var V = 0;
        return (
          J(k, function () {
            V++;
          }),
          V
        );
      },
      toArray: function (k) {
        return (
          J(k, function (V) {
            return V;
          }) || []
        );
      },
      only: function (k) {
        if (!re(k))
          throw Error("React.Children.only expected to receive a single React element child.");
        return k;
      },
    };
  return (
    (he.Activity = m),
    (he.Children = Ce),
    (he.Component = O),
    (he.Fragment = s),
    (he.Profiler = l),
    (he.PureComponent = j),
    (he.StrictMode = a),
    (he.Suspense = p),
    (he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B),
    (he.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (k) {
        return B.H.useMemoCache(k);
      },
    }),
    (he.cache = function (k) {
      return function () {
        return k.apply(null, arguments);
      };
    }),
    (he.cacheSignal = function () {
      return null;
    }),
    (he.cloneElement = function (k, V, X) {
      if (k == null) throw Error("The argument must be a React element, but you passed " + k + ".");
      var ee = A({}, k.props),
        ie = k.key;
      if (V != null)
        for (ge in (V.key !== void 0 && (ie = "" + V.key), V))
          !G.call(V, ge) ||
            ge === "key" ||
            ge === "__self" ||
            ge === "__source" ||
            (ge === "ref" && V.ref === void 0) ||
            (ee[ge] = V[ge]);
      var ge = arguments.length - 2;
      if (ge === 1) ee.children = X;
      else if (1 < ge) {
        for (var we = Array(ge), Qe = 0; Qe < ge; Qe++) we[Qe] = arguments[Qe + 2];
        ee.children = we;
      }
      return Y(k.type, ie, ee);
    }),
    (he.createContext = function (k) {
      return (
        (k = {
          $$typeof: c,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (k.Provider = k),
        (k.Consumer = { $$typeof: u, _context: k }),
        k
      );
    }),
    (he.createElement = function (k, V, X) {
      var ee,
        ie = {},
        ge = null;
      if (V != null)
        for (ee in (V.key !== void 0 && (ge = "" + V.key), V))
          G.call(V, ee) && ee !== "key" && ee !== "__self" && ee !== "__source" && (ie[ee] = V[ee]);
      var we = arguments.length - 2;
      if (we === 1) ie.children = X;
      else if (1 < we) {
        for (var Qe = Array(we), Ue = 0; Ue < we; Ue++) Qe[Ue] = arguments[Ue + 2];
        ie.children = Qe;
      }
      if (k && k.defaultProps)
        for (ee in ((we = k.defaultProps), we)) ie[ee] === void 0 && (ie[ee] = we[ee]);
      return Y(k, ge, ie);
    }),
    (he.createRef = function () {
      return { current: null };
    }),
    (he.forwardRef = function (k) {
      return { $$typeof: d, render: k };
    }),
    (he.isValidElement = re),
    (he.lazy = function (k) {
      return { $$typeof: y, _payload: { _status: -1, _result: k }, _init: le };
    }),
    (he.memo = function (k, V) {
      return { $$typeof: g, type: k, compare: V === void 0 ? null : V };
    }),
    (he.startTransition = function (k) {
      var V = B.T,
        X = {};
      B.T = X;
      try {
        var ee = k(),
          ie = B.S;
        (ie !== null && ie(X, ee),
          typeof ee == "object" && ee !== null && typeof ee.then == "function" && ee.then(F, Ae));
      } catch (ge) {
        Ae(ge);
      } finally {
        (V !== null && X.types !== null && (V.types = X.types), (B.T = V));
      }
    }),
    (he.unstable_useCacheRefresh = function () {
      return B.H.useCacheRefresh();
    }),
    (he.use = function (k) {
      return B.H.use(k);
    }),
    (he.useActionState = function (k, V, X) {
      return B.H.useActionState(k, V, X);
    }),
    (he.useCallback = function (k, V) {
      return B.H.useCallback(k, V);
    }),
    (he.useContext = function (k) {
      return B.H.useContext(k);
    }),
    (he.useDebugValue = function () {}),
    (he.useDeferredValue = function (k, V) {
      return B.H.useDeferredValue(k, V);
    }),
    (he.useEffect = function (k, V) {
      return B.H.useEffect(k, V);
    }),
    (he.useEffectEvent = function (k) {
      return B.H.useEffectEvent(k);
    }),
    (he.useId = function () {
      return B.H.useId();
    }),
    (he.useImperativeHandle = function (k, V, X) {
      return B.H.useImperativeHandle(k, V, X);
    }),
    (he.useInsertionEffect = function (k, V) {
      return B.H.useInsertionEffect(k, V);
    }),
    (he.useLayoutEffect = function (k, V) {
      return B.H.useLayoutEffect(k, V);
    }),
    (he.useMemo = function (k, V) {
      return B.H.useMemo(k, V);
    }),
    (he.useOptimistic = function (k, V) {
      return B.H.useOptimistic(k, V);
    }),
    (he.useReducer = function (k, V, X) {
      return B.H.useReducer(k, V, X);
    }),
    (he.useRef = function (k) {
      return B.H.useRef(k);
    }),
    (he.useState = function (k) {
      return B.H.useState(k);
    }),
    (he.useSyncExternalStore = function (k, V, X) {
      return B.H.useSyncExternalStore(k, V, X);
    }),
    (he.useTransition = function () {
      return B.H.useTransition();
    }),
    (he.version = "19.2.5"),
    he
  );
}
var ey;
function Wa() {
  return (ey || ((ey = 1), (Lh.exports = WS())), Lh.exports);
}
var W = Wa();
const Pa = JS(W);
var Nh = { exports: {} },
  wa = {},
  Ph = { exports: {} },
  zh = {};
var ty;
function ew() {
  return (
    ty ||
      ((ty = 1),
      (function (e) {
        function t(H, J) {
          var le = H.length;
          H.push(J);
          e: for (; 0 < le; ) {
            var Ae = (le - 1) >>> 1,
              Ce = H[Ae];
            if (0 < l(Ce, J)) ((H[Ae] = J), (H[le] = Ce), (le = Ae));
            else break e;
          }
        }
        function s(H) {
          return H.length === 0 ? null : H[0];
        }
        function a(H) {
          if (H.length === 0) return null;
          var J = H[0],
            le = H.pop();
          if (le !== J) {
            H[0] = le;
            e: for (var Ae = 0, Ce = H.length, k = Ce >>> 1; Ae < k; ) {
              var V = 2 * (Ae + 1) - 1,
                X = H[V],
                ee = V + 1,
                ie = H[ee];
              if (0 > l(X, le))
                ee < Ce && 0 > l(ie, X)
                  ? ((H[Ae] = ie), (H[ee] = le), (Ae = ee))
                  : ((H[Ae] = X), (H[V] = le), (Ae = V));
              else if (ee < Ce && 0 > l(ie, le)) ((H[Ae] = ie), (H[ee] = le), (Ae = ee));
              else break e;
            }
          }
          return J;
        }
        function l(H, J) {
          var le = H.sortIndex - J.sortIndex;
          return le !== 0 ? le : H.id - J.id;
        }
        if (
          ((e.unstable_now = void 0),
          typeof performance == "object" && typeof performance.now == "function")
        ) {
          var u = performance;
          e.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            d = c.now();
          e.unstable_now = function () {
            return c.now() - d;
          };
        }
        var p = [],
          g = [],
          y = 1,
          m = null,
          b = 3,
          _ = !1,
          w = !1,
          A = !1,
          E = !1,
          O = typeof setTimeout == "function" ? setTimeout : null,
          M = typeof clearTimeout == "function" ? clearTimeout : null,
          j = typeof setImmediate < "u" ? setImmediate : null;
        function L(H) {
          for (var J = s(g); J !== null; ) {
            if (J.callback === null) a(g);
            else if (J.startTime <= H) (a(g), (J.sortIndex = J.expirationTime), t(p, J));
            else break;
            J = s(g);
          }
        }
        function Q(H) {
          if (((A = !1), L(H), !w))
            if (s(p) !== null) ((w = !0), F || ((F = !0), de()));
            else {
              var J = s(g);
              J !== null && Be(Q, J.startTime - H);
            }
        }
        var F = !1,
          B = -1,
          G = 5,
          Y = -1;
        function ae() {
          return E ? !0 : !(e.unstable_now() - Y < G);
        }
        function re() {
          if (((E = !1), F)) {
            var H = e.unstable_now();
            Y = H;
            var J = !0;
            try {
              e: {
                ((w = !1), A && ((A = !1), M(B), (B = -1)), (_ = !0));
                var le = b;
                try {
                  t: {
                    for (L(H), m = s(p); m !== null && !(m.expirationTime > H && ae()); ) {
                      var Ae = m.callback;
                      if (typeof Ae == "function") {
                        ((m.callback = null), (b = m.priorityLevel));
                        var Ce = Ae(m.expirationTime <= H);
                        if (((H = e.unstable_now()), typeof Ce == "function")) {
                          ((m.callback = Ce), L(H), (J = !0));
                          break t;
                        }
                        (m === s(p) && a(p), L(H));
                      } else a(p);
                      m = s(p);
                    }
                    if (m !== null) J = !0;
                    else {
                      var k = s(g);
                      (k !== null && Be(Q, k.startTime - H), (J = !1));
                    }
                  }
                  break e;
                } finally {
                  ((m = null), (b = le), (_ = !1));
                }
                J = void 0;
              }
            } finally {
              J ? de() : (F = !1);
            }
          }
        }
        var de;
        if (typeof j == "function")
          de = function () {
            j(re);
          };
        else if (typeof MessageChannel < "u") {
          var Se = new MessageChannel(),
            Fe = Se.port2;
          ((Se.port1.onmessage = re),
            (de = function () {
              Fe.postMessage(null);
            }));
        } else
          de = function () {
            O(re, 0);
          };
        function Be(H, J) {
          B = O(function () {
            H(e.unstable_now());
          }, J);
        }
        ((e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (H) {
            H.callback = null;
          }),
          (e.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (G = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (e.unstable_next = function (H) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = b;
            }
            var le = b;
            b = J;
            try {
              return H();
            } finally {
              b = le;
            }
          }),
          (e.unstable_requestPaint = function () {
            E = !0;
          }),
          (e.unstable_runWithPriority = function (H, J) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                H = 3;
            }
            var le = b;
            b = H;
            try {
              return J();
            } finally {
              b = le;
            }
          }),
          (e.unstable_scheduleCallback = function (H, J, le) {
            var Ae = e.unstable_now();
            switch (
              (typeof le == "object" && le !== null
                ? ((le = le.delay), (le = typeof le == "number" && 0 < le ? Ae + le : Ae))
                : (le = Ae),
              H)
            ) {
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
            return (
              (Ce = le + Ce),
              (H = {
                id: y++,
                callback: J,
                priorityLevel: H,
                startTime: le,
                expirationTime: Ce,
                sortIndex: -1,
              }),
              le > Ae
                ? ((H.sortIndex = le),
                  t(g, H),
                  s(p) === null && H === s(g) && (A ? (M(B), (B = -1)) : (A = !0), Be(Q, le - Ae)))
                : ((H.sortIndex = Ce), t(p, H), w || _ || ((w = !0), F || ((F = !0), de()))),
              H
            );
          }),
          (e.unstable_shouldYield = ae),
          (e.unstable_wrapCallback = function (H) {
            var J = b;
            return function () {
              var le = b;
              b = J;
              try {
                return H.apply(this, arguments);
              } finally {
                b = le;
              }
            };
          }));
      })(zh)),
    zh
  );
}
var ny;
function tw() {
  return (ny || ((ny = 1), (Ph.exports = ew())), Ph.exports);
}
var Bh = { exports: {} },
  _t = {};
var ry;
function nw() {
  if (ry) return _t;
  ry = 1;
  var e = Wa();
  function t(p) {
    var g = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++) g += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var a = {
      d: {
        f: s,
        r: function () {
          throw Error(t(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    l = Symbol.for("react.portal");
  function u(p, g, y) {
    var m = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: m == null ? null : "" + m,
      children: p,
      containerInfo: g,
      implementation: y,
    };
  }
  var c = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(p, g) {
    if (p === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (_t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a),
    (_t.createPortal = function (p, g) {
      var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)) throw Error(t(299));
      return u(p, g, null, y);
    }),
    (_t.flushSync = function (p) {
      var g = c.T,
        y = a.p;
      try {
        if (((c.T = null), (a.p = 2), p)) return p();
      } finally {
        ((c.T = g), (a.p = y), a.d.f());
      }
    }),
    (_t.preconnect = function (p, g) {
      typeof p == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g = typeof g == "string" ? (g === "use-credentials" ? g : "") : void 0))
          : (g = null),
        a.d.C(p, g));
    }),
    (_t.prefetchDNS = function (p) {
      typeof p == "string" && a.d.D(p);
    }),
    (_t.preinit = function (p, g) {
      if (typeof p == "string" && g && typeof g.as == "string") {
        var y = g.as,
          m = d(y, g.crossOrigin),
          b = typeof g.integrity == "string" ? g.integrity : void 0,
          _ = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        y === "style"
          ? a.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: m,
              integrity: b,
              fetchPriority: _,
            })
          : y === "script" &&
            a.d.X(p, {
              crossOrigin: m,
              integrity: b,
              fetchPriority: _,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (_t.preinitModule = function (p, g) {
      if (typeof p == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var y = d(g.as, g.crossOrigin);
            a.d.M(p, {
              crossOrigin: y,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && a.d.M(p);
    }),
    (_t.preload = function (p, g) {
      if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
        var y = g.as,
          m = d(y, g.crossOrigin);
        a.d.L(p, y, {
          crossOrigin: m,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (_t.preloadModule = function (p, g) {
      if (typeof p == "string")
        if (g) {
          var y = d(g.as, g.crossOrigin);
          a.d.m(p, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: y,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else a.d.m(p);
    }),
    (_t.requestFormReset = function (p) {
      a.d.r(p);
    }),
    (_t.unstable_batchedUpdates = function (p, g) {
      return p(g);
    }),
    (_t.useFormState = function (p, g, y) {
      return c.H.useFormState(p, g, y);
    }),
    (_t.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (_t.version = "19.2.5"),
    _t
  );
}
var sy;
function Iv() {
  if (sy) return Bh.exports;
  sy = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return (e(), (Bh.exports = nw()), Bh.exports);
}
var iy;
function rw() {
  if (iy) return wa;
  iy = 1;
  var e = tw(),
    t = Wa(),
    s = Iv();
  function a(n) {
    var r = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      r += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++) r += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return (
      "Minified React error #" +
      n +
      "; visit " +
      r +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  function u(n) {
    var r = n,
      i = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do ((r = n), (r.flags & 4098) !== 0 && (i = r.return), (n = r.return));
      while (n);
    }
    return r.tag === 3 ? i : null;
  }
  function c(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if ((r === null && ((n = n.alternate), n !== null && (r = n.memoizedState)), r !== null))
        return r.dehydrated;
    }
    return null;
  }
  function d(n) {
    if (n.tag === 31) {
      var r = n.memoizedState;
      if ((r === null && ((n = n.alternate), n !== null && (r = n.memoizedState)), r !== null))
        return r.dehydrated;
    }
    return null;
  }
  function p(n) {
    if (u(n) !== n) throw Error(a(188));
  }
  function g(n) {
    var r = n.alternate;
    if (!r) {
      if (((r = u(n)), r === null)) throw Error(a(188));
      return r !== n ? null : n;
    }
    for (var i = n, o = r; ; ) {
      var h = i.return;
      if (h === null) break;
      var f = h.alternate;
      if (f === null) {
        if (((o = h.return), o !== null)) {
          i = o;
          continue;
        }
        break;
      }
      if (h.child === f.child) {
        for (f = h.child; f; ) {
          if (f === i) return (p(h), n);
          if (f === o) return (p(h), r);
          f = f.sibling;
        }
        throw Error(a(188));
      }
      if (i.return !== o.return) ((i = h), (o = f));
      else {
        for (var v = !1, S = h.child; S; ) {
          if (S === i) {
            ((v = !0), (i = h), (o = f));
            break;
          }
          if (S === o) {
            ((v = !0), (o = h), (i = f));
            break;
          }
          S = S.sibling;
        }
        if (!v) {
          for (S = f.child; S; ) {
            if (S === i) {
              ((v = !0), (i = f), (o = h));
              break;
            }
            if (S === o) {
              ((v = !0), (o = f), (i = h));
              break;
            }
            S = S.sibling;
          }
          if (!v) throw Error(a(189));
        }
      }
      if (i.alternate !== o) throw Error(a(190));
    }
    if (i.tag !== 3) throw Error(a(188));
    return i.stateNode.current === i ? n : r;
  }
  function y(n) {
    var r = n.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return n;
    for (n = n.child; n !== null; ) {
      if (((r = y(n)), r !== null)) return r;
      n = n.sibling;
    }
    return null;
  }
  var m = Object.assign,
    b = Symbol.for("react.element"),
    _ = Symbol.for("react.transitional.element"),
    w = Symbol.for("react.portal"),
    A = Symbol.for("react.fragment"),
    E = Symbol.for("react.strict_mode"),
    O = Symbol.for("react.profiler"),
    M = Symbol.for("react.consumer"),
    j = Symbol.for("react.context"),
    L = Symbol.for("react.forward_ref"),
    Q = Symbol.for("react.suspense"),
    F = Symbol.for("react.suspense_list"),
    B = Symbol.for("react.memo"),
    G = Symbol.for("react.lazy"),
    Y = Symbol.for("react.activity"),
    ae = Symbol.for("react.memo_cache_sentinel"),
    re = Symbol.iterator;
  function de(n) {
    return n === null || typeof n != "object"
      ? null
      : ((n = (re && n[re]) || n["@@iterator"]), typeof n == "function" ? n : null);
  }
  var Se = Symbol.for("react.client.reference");
  function Fe(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.$$typeof === Se ? null : n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case A:
        return "Fragment";
      case O:
        return "Profiler";
      case E:
        return "StrictMode";
      case Q:
        return "Suspense";
      case F:
        return "SuspenseList";
      case Y:
        return "Activity";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case w:
          return "Portal";
        case j:
          return n.displayName || "Context";
        case M:
          return (n._context.displayName || "Context") + ".Consumer";
        case L:
          var r = n.render;
          return (
            (n = n.displayName),
            n ||
              ((n = r.displayName || r.name || ""),
              (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")),
            n
          );
        case B:
          return ((r = n.displayName || null), r !== null ? r : Fe(n.type) || "Memo");
        case G:
          ((r = n._payload), (n = n._init));
          try {
            return Fe(n(r));
          } catch {}
      }
    return null;
  }
  var Be = Array.isArray,
    H = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    le = { pending: !1, data: null, method: null, action: null },
    Ae = [],
    Ce = -1;
  function k(n) {
    return { current: n };
  }
  function V(n) {
    0 > Ce || ((n.current = Ae[Ce]), (Ae[Ce] = null), Ce--);
  }
  function X(n, r) {
    (Ce++, (Ae[Ce] = n.current), (n.current = r));
  }
  var ee = k(null),
    ie = k(null),
    ge = k(null),
    we = k(null);
  function Qe(n, r) {
    switch ((X(ge, r), X(ie, n), X(ee, null), r.nodeType)) {
      case 9:
      case 11:
        n = (n = r.documentElement) && (n = n.namespaceURI) ? _m(n) : 0;
        break;
      default:
        if (((n = r.tagName), (r = r.namespaceURI))) ((r = _m(r)), (n = Sm(r, n)));
        else
          switch (n) {
            case "svg":
              n = 1;
              break;
            case "math":
              n = 2;
              break;
            default:
              n = 0;
          }
    }
    (V(ee), X(ee, n));
  }
  function Ue() {
    (V(ee), V(ie), V(ge));
  }
  function wn(n) {
    n.memoizedState !== null && X(we, n);
    var r = ee.current,
      i = Sm(r, n.type);
    r !== i && (X(ie, n), X(ee, i));
  }
  function En(n) {
    (ie.current === n && (V(ee), V(ie)), we.current === n && (V(we), (ya._currentValue = le)));
  }
  var Zn, Ai;
  function hn(n) {
    if (Zn === void 0)
      try {
        throw Error();
      } catch (i) {
        var r = i.stack.trim().match(/\n( *(at )?)/);
        ((Zn = (r && r[1]) || ""),
          (Ai =
            -1 <
            i.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < i.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Zn +
      n +
      Ai
    );
  }
  var Oi = !1;
  function ws(n, r) {
    if (!n || Oi) return "";
    Oi = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (r) {
              var K = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(K.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(K, []);
                } catch (z) {
                  var P = z;
                }
                Reflect.construct(n, [], K);
              } else {
                try {
                  K.call();
                } catch (z) {
                  P = z;
                }
                n.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                P = z;
              }
              (K = n()) && typeof K.catch == "function" && K.catch(function () {});
            }
          } catch (z) {
            if (z && P && typeof z.stack == "string") return [z.stack, P.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var h = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
      h &&
        h.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var f = o.DetermineComponentFrameRoot(),
        v = f[0],
        S = f[1];
      if (v && S) {
        var C = v.split(`
`),
          N = S.split(`
`);
        for (h = o = 0; o < C.length && !C[o].includes("DetermineComponentFrameRoot"); ) o++;
        for (; h < N.length && !N[h].includes("DetermineComponentFrameRoot"); ) h++;
        if (o === C.length || h === N.length)
          for (o = C.length - 1, h = N.length - 1; 1 <= o && 0 <= h && C[o] !== N[h]; ) h--;
        for (; 1 <= o && 0 <= h; o--, h--)
          if (C[o] !== N[h]) {
            if (o !== 1 || h !== 1)
              do
                if ((o--, h--, 0 > h || C[o] !== N[h])) {
                  var I =
                    `
` + C[o].replace(" at new ", " at ");
                  return (
                    n.displayName &&
                      I.includes("<anonymous>") &&
                      (I = I.replace("<anonymous>", n.displayName)),
                    I
                  );
                }
              while (1 <= o && 0 <= h);
            break;
          }
      }
    } finally {
      ((Oi = !1), (Error.prepareStackTrace = i));
    }
    return (i = n ? n.displayName || n.name : "") ? hn(i) : "";
  }
  function so(n, r) {
    switch (n.tag) {
      case 26:
      case 27:
      case 5:
        return hn(n.type);
      case 16:
        return hn("Lazy");
      case 13:
        return n.child !== r && r !== null ? hn("Suspense Fallback") : hn("Suspense");
      case 19:
        return hn("SuspenseList");
      case 0:
      case 15:
        return ws(n.type, !1);
      case 11:
        return ws(n.type.render, !1);
      case 1:
        return ws(n.type, !0);
      case 31:
        return hn("Activity");
      default:
        return "";
    }
  }
  function Tn(n) {
    try {
      var r = "",
        i = null;
      do ((r += so(n, i)), (i = n), (n = n.return));
      while (n);
      return r;
    } catch (o) {
      return (
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack
      );
    }
  }
  var $r = Object.prototype.hasOwnProperty,
    rn = e.unstable_scheduleCallback,
    Ci = e.unstable_cancelCallback,
    io = e.unstable_shouldYield,
    Su = e.unstable_requestPaint,
    bt = e.unstable_now,
    Pe = e.unstable_getCurrentPriorityLevel,
    ht = e.unstable_ImmediatePriority,
    fn = e.unstable_UserBlockingPriority,
    Es = e.unstable_NormalPriority,
    jb = e.unstable_LowPriority,
    ed = e.unstable_IdlePriority,
    Mb = e.log,
    Db = e.unstable_setDisableYieldValue,
    xi = null,
    Lt = null;
  function Wn(n) {
    if ((typeof Mb == "function" && Db(n), Lt && typeof Lt.setStrictMode == "function"))
      try {
        Lt.setStrictMode(xi, n);
      } catch {}
  }
  var Nt = Math.clz32 ? Math.clz32 : Nb,
    Ub = Math.log,
    Lb = Math.LN2;
  function Nb(n) {
    return ((n >>>= 0), n === 0 ? 32 : (31 - ((Ub(n) / Lb) | 0)) | 0);
  }
  var ao = 256,
    oo = 262144,
    lo = 4194304;
  function Gr(n) {
    var r = n & 42;
    if (r !== 0) return r;
    switch (n & -n) {
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
        return n & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return n & 62914560;
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
        return n;
    }
  }
  function uo(n, r, i) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var h = 0,
      f = n.suspendedLanes,
      v = n.pingedLanes;
    n = n.warmLanes;
    var S = o & 134217727;
    return (
      S !== 0
        ? ((o = S & ~f),
          o !== 0
            ? (h = Gr(o))
            : ((v &= S), v !== 0 ? (h = Gr(v)) : i || ((i = S & ~n), i !== 0 && (h = Gr(i)))))
        : ((S = o & ~f),
          S !== 0
            ? (h = Gr(S))
            : v !== 0
              ? (h = Gr(v))
              : i || ((i = o & ~n), i !== 0 && (h = Gr(i)))),
      h === 0
        ? 0
        : r !== 0 &&
            r !== h &&
            (r & f) === 0 &&
            ((f = h & -h), (i = r & -r), f >= i || (f === 32 && (i & 4194048) !== 0))
          ? r
          : h
    );
  }
  function ki(n, r) {
    return (n.pendingLanes & ~(n.suspendedLanes & ~n.pingedLanes) & r) === 0;
  }
  function Pb(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return r + 250;
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
        return r + 5e3;
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
  function td() {
    var n = lo;
    return ((lo <<= 1), (lo & 62914560) === 0 && (lo = 4194304), n);
  }
  function wu(n) {
    for (var r = [], i = 0; 31 > i; i++) r.push(n);
    return r;
  }
  function ji(n, r) {
    ((n.pendingLanes |= r),
      r !== 268435456 && ((n.suspendedLanes = 0), (n.pingedLanes = 0), (n.warmLanes = 0)));
  }
  function zb(n, r, i, o, h, f) {
    var v = n.pendingLanes;
    ((n.pendingLanes = i),
      (n.suspendedLanes = 0),
      (n.pingedLanes = 0),
      (n.warmLanes = 0),
      (n.expiredLanes &= i),
      (n.entangledLanes &= i),
      (n.errorRecoveryDisabledLanes &= i),
      (n.shellSuspendCounter = 0));
    var S = n.entanglements,
      C = n.expirationTimes,
      N = n.hiddenUpdates;
    for (i = v & ~i; 0 < i; ) {
      var I = 31 - Nt(i),
        K = 1 << I;
      ((S[I] = 0), (C[I] = -1));
      var P = N[I];
      if (P !== null)
        for (N[I] = null, I = 0; I < P.length; I++) {
          var z = P[I];
          z !== null && (z.lane &= -536870913);
        }
      i &= ~K;
    }
    (o !== 0 && nd(n, o, 0),
      f !== 0 && h === 0 && n.tag !== 0 && (n.suspendedLanes |= f & ~(v & ~r)));
  }
  function nd(n, r, i) {
    ((n.pendingLanes |= r), (n.suspendedLanes &= ~r));
    var o = 31 - Nt(r);
    ((n.entangledLanes |= r),
      (n.entanglements[o] = n.entanglements[o] | 1073741824 | (i & 261930)));
  }
  function rd(n, r) {
    var i = (n.entangledLanes |= r);
    for (n = n.entanglements; i; ) {
      var o = 31 - Nt(i),
        h = 1 << o;
      ((h & r) | (n[o] & r) && (n[o] |= r), (i &= ~h));
    }
  }
  function sd(n, r) {
    var i = r & -r;
    return ((i = (i & 42) !== 0 ? 1 : Eu(i)), (i & (n.suspendedLanes | r)) !== 0 ? 0 : i);
  }
  function Eu(n) {
    switch (n) {
      case 2:
        n = 1;
        break;
      case 8:
        n = 4;
        break;
      case 32:
        n = 16;
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
        n = 128;
        break;
      case 268435456:
        n = 134217728;
        break;
      default:
        n = 0;
    }
    return n;
  }
  function Tu(n) {
    return ((n &= -n), 2 < n ? (8 < n ? ((n & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function id() {
    var n = J.p;
    return n !== 0 ? n : ((n = window.event), n === void 0 ? 32 : Gm(n.type));
  }
  function ad(n, r) {
    var i = J.p;
    try {
      return ((J.p = n), r());
    } finally {
      J.p = i;
    }
  }
  var er = Math.random().toString(36).slice(2),
    ft = "__reactFiber$" + er,
    Et = "__reactProps$" + er,
    Ts = "__reactContainer$" + er,
    Ru = "__reactEvents$" + er,
    Bb = "__reactListeners$" + er,
    Hb = "__reactHandles$" + er,
    od = "__reactResources$" + er,
    Mi = "__reactMarker$" + er;
  function Au(n) {
    (delete n[ft], delete n[Et], delete n[Ru], delete n[Bb], delete n[Hb]);
  }
  function Rs(n) {
    var r = n[ft];
    if (r) return r;
    for (var i = n.parentNode; i; ) {
      if ((r = i[Ts] || i[ft])) {
        if (((i = r.alternate), r.child !== null || (i !== null && i.child !== null)))
          for (n = Cm(n); n !== null; ) {
            if ((i = n[ft])) return i;
            n = Cm(n);
          }
        return r;
      }
      ((n = i), (i = n.parentNode));
    }
    return null;
  }
  function As(n) {
    if ((n = n[ft] || n[Ts])) {
      var r = n.tag;
      if (r === 5 || r === 6 || r === 13 || r === 31 || r === 26 || r === 27 || r === 3) return n;
    }
    return null;
  }
  function Di(n) {
    var r = n.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return n.stateNode;
    throw Error(a(33));
  }
  function Os(n) {
    var r = n[od];
    return (r || (r = n[od] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), r);
  }
  function ot(n) {
    n[Mi] = !0;
  }
  var ld = new Set(),
    ud = {};
  function Vr(n, r) {
    (Cs(n, r), Cs(n + "Capture", r));
  }
  function Cs(n, r) {
    for (ud[n] = r, n = 0; n < r.length; n++) ld.add(r[n]);
  }
  var Ib = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    cd = {},
    hd = {};
  function qb(n) {
    return $r.call(hd, n)
      ? !0
      : $r.call(cd, n)
        ? !1
        : Ib.test(n)
          ? (hd[n] = !0)
          : ((cd[n] = !0), !1);
  }
  function co(n, r, i) {
    if (qb(r))
      if (i === null) n.removeAttribute(r);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            n.removeAttribute(r);
            return;
          case "boolean":
            var o = r.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              n.removeAttribute(r);
              return;
            }
        }
        n.setAttribute(r, "" + i);
      }
  }
  function ho(n, r, i) {
    if (i === null) n.removeAttribute(r);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(r);
          return;
      }
      n.setAttribute(r, "" + i);
    }
  }
  function Rn(n, r, i, o) {
    if (o === null) n.removeAttribute(i);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(i);
          return;
      }
      n.setAttributeNS(r, i, "" + o);
    }
  }
  function Kt(n) {
    switch (typeof n) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function fd(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function $b(n, r, i) {
    var o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r);
    if (
      !n.hasOwnProperty(r) &&
      typeof o < "u" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var h = o.get,
        f = o.set;
      return (
        Object.defineProperty(n, r, {
          configurable: !0,
          get: function () {
            return h.call(this);
          },
          set: function (v) {
            ((i = "" + v), f.call(this, v));
          },
        }),
        Object.defineProperty(n, r, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (v) {
            i = "" + v;
          },
          stopTracking: function () {
            ((n._valueTracker = null), delete n[r]);
          },
        }
      );
    }
  }
  function Ou(n) {
    if (!n._valueTracker) {
      var r = fd(n) ? "checked" : "value";
      n._valueTracker = $b(n, r, "" + n[r]);
    }
  }
  function dd(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var i = r.getValue(),
      o = "";
    return (
      n && (o = fd(n) ? (n.checked ? "true" : "false") : n.value),
      (n = o),
      n !== i ? (r.setValue(n), !0) : !1
    );
  }
  function fo(n) {
    if (((n = n || (typeof document < "u" ? document : void 0)), typeof n > "u")) return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  var Gb = /[\n"\\]/g;
  function Ft(n) {
    return n.replace(Gb, function (r) {
      return "\\" + r.charCodeAt(0).toString(16) + " ";
    });
  }
  function Cu(n, r, i, o, h, f, v, S) {
    ((n.name = ""),
      v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean"
        ? (n.type = v)
        : n.removeAttribute("type"),
      r != null
        ? v === "number"
          ? ((r === 0 && n.value === "") || n.value != r) && (n.value = "" + Kt(r))
          : n.value !== "" + Kt(r) && (n.value = "" + Kt(r))
        : (v !== "submit" && v !== "reset") || n.removeAttribute("value"),
      r != null
        ? xu(n, v, Kt(r))
        : i != null
          ? xu(n, v, Kt(i))
          : o != null && n.removeAttribute("value"),
      h == null && f != null && (n.defaultChecked = !!f),
      h != null && (n.checked = h && typeof h != "function" && typeof h != "symbol"),
      S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean"
        ? (n.name = "" + Kt(S))
        : n.removeAttribute("name"));
  }
  function pd(n, r, i, o, h, f, v, S) {
    if (
      (f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (n.type = f),
      r != null || i != null)
    ) {
      if (!((f !== "submit" && f !== "reset") || r != null)) {
        Ou(n);
        return;
      }
      ((i = i != null ? "" + Kt(i) : ""),
        (r = r != null ? "" + Kt(r) : i),
        S || r === n.value || (n.value = r),
        (n.defaultValue = r));
    }
    ((o = o ?? h),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (n.checked = S ? n.checked : !!o),
      (n.defaultChecked = !!o),
      v != null &&
        typeof v != "function" &&
        typeof v != "symbol" &&
        typeof v != "boolean" &&
        (n.name = v),
      Ou(n));
  }
  function xu(n, r, i) {
    (r === "number" && fo(n.ownerDocument) === n) ||
      n.defaultValue === "" + i ||
      (n.defaultValue = "" + i);
  }
  function xs(n, r, i, o) {
    if (((n = n.options), r)) {
      r = {};
      for (var h = 0; h < i.length; h++) r["$" + i[h]] = !0;
      for (i = 0; i < n.length; i++)
        ((h = r.hasOwnProperty("$" + n[i].value)),
          n[i].selected !== h && (n[i].selected = h),
          h && o && (n[i].defaultSelected = !0));
    } else {
      for (i = "" + Kt(i), r = null, h = 0; h < n.length; h++) {
        if (n[h].value === i) {
          ((n[h].selected = !0), o && (n[h].defaultSelected = !0));
          return;
        }
        r !== null || n[h].disabled || (r = n[h]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function gd(n, r, i) {
    if (r != null && ((r = "" + Kt(r)), r !== n.value && (n.value = r), i == null)) {
      n.defaultValue !== r && (n.defaultValue = r);
      return;
    }
    n.defaultValue = i != null ? "" + Kt(i) : "";
  }
  function md(n, r, i, o) {
    if (r == null) {
      if (o != null) {
        if (i != null) throw Error(a(92));
        if (Be(o)) {
          if (1 < o.length) throw Error(a(93));
          o = o[0];
        }
        i = o;
      }
      (i == null && (i = ""), (r = i));
    }
    ((i = Kt(r)),
      (n.defaultValue = i),
      (o = n.textContent),
      o === i && o !== "" && o !== null && (n.value = o),
      Ou(n));
  }
  function ks(n, r) {
    if (r) {
      var i = n.firstChild;
      if (i && i === n.lastChild && i.nodeType === 3) {
        i.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Vb = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function yd(n, r, i) {
    var o = r.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === ""
      ? o
        ? n.setProperty(r, "")
        : r === "float"
          ? (n.cssFloat = "")
          : (n[r] = "")
      : o
        ? n.setProperty(r, i)
        : typeof i != "number" || i === 0 || Vb.has(r)
          ? r === "float"
            ? (n.cssFloat = i)
            : (n[r] = ("" + i).trim())
          : (n[r] = i + "px");
  }
  function vd(n, r, i) {
    if (r != null && typeof r != "object") throw Error(a(62));
    if (((n = n.style), i != null)) {
      for (var o in i)
        !i.hasOwnProperty(o) ||
          (r != null && r.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? n.setProperty(o, "")
            : o === "float"
              ? (n.cssFloat = "")
              : (n[o] = ""));
      for (var h in r) ((o = r[h]), r.hasOwnProperty(h) && i[h] !== o && yd(n, h, o));
    } else for (var f in r) r.hasOwnProperty(f) && yd(n, f, r[f]);
  }
  function ku(n) {
    if (n.indexOf("-") === -1) return !1;
    switch (n) {
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
  var Kb = new Map([
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
      ["xHeight", "x-height"],
    ]),
    Fb =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function po(n) {
    return Fb.test("" + n)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : n;
  }
  function An() {}
  var ju = null;
  function Mu(n) {
    return (
      (n = n.target || n.srcElement || window),
      n.correspondingUseElement && (n = n.correspondingUseElement),
      n.nodeType === 3 ? n.parentNode : n
    );
  }
  var js = null,
    Ms = null;
  function bd(n) {
    var r = As(n);
    if (r && (n = r.stateNode)) {
      var i = n[Et] || null;
      e: switch (((n = r.stateNode), r.type)) {
        case "input":
          if (
            (Cu(
              n,
              i.value,
              i.defaultValue,
              i.defaultValue,
              i.checked,
              i.defaultChecked,
              i.type,
              i.name,
            ),
            (r = i.name),
            i.type === "radio" && r != null)
          ) {
            for (i = n; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll('input[name="' + Ft("" + r) + '"][type="radio"]'), r = 0;
              r < i.length;
              r++
            ) {
              var o = i[r];
              if (o !== n && o.form === n.form) {
                var h = o[Et] || null;
                if (!h) throw Error(a(90));
                Cu(
                  o,
                  h.value,
                  h.defaultValue,
                  h.defaultValue,
                  h.checked,
                  h.defaultChecked,
                  h.type,
                  h.name,
                );
              }
            }
            for (r = 0; r < i.length; r++) ((o = i[r]), o.form === n.form && dd(o));
          }
          break e;
        case "textarea":
          gd(n, i.value, i.defaultValue);
          break e;
        case "select":
          ((r = i.value), r != null && xs(n, !!i.multiple, r, !1));
      }
    }
  }
  var Du = !1;
  function _d(n, r, i) {
    if (Du) return n(r, i);
    Du = !0;
    try {
      var o = n(r);
      return o;
    } finally {
      if (
        ((Du = !1),
        (js !== null || Ms !== null) &&
          (tl(), js && ((r = js), (n = Ms), (Ms = js = null), bd(r), n)))
      )
        for (r = 0; r < n.length; r++) bd(n[r]);
    }
  }
  function Ui(n, r) {
    var i = n.stateNode;
    if (i === null) return null;
    var o = i[Et] || null;
    if (o === null) return null;
    i = o[r];
    e: switch (r) {
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
        ((o = !o.disabled) ||
          ((n = n.type),
          (o = !(n === "button" || n === "input" || n === "select" || n === "textarea"))),
          (n = !o));
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (i && typeof i != "function") throw Error(a(231, r, typeof i));
    return i;
  }
  var On = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Uu = !1;
  if (On)
    try {
      var Li = {};
      (Object.defineProperty(Li, "passive", {
        get: function () {
          Uu = !0;
        },
      }),
        window.addEventListener("test", Li, Li),
        window.removeEventListener("test", Li, Li));
    } catch {
      Uu = !1;
    }
  var tr = null,
    Lu = null,
    go = null;
  function Sd() {
    if (go) return go;
    var n,
      r = Lu,
      i = r.length,
      o,
      h = "value" in tr ? tr.value : tr.textContent,
      f = h.length;
    for (n = 0; n < i && r[n] === h[n]; n++);
    var v = i - n;
    for (o = 1; o <= v && r[i - o] === h[f - o]; o++);
    return (go = h.slice(n, 1 < o ? 1 - o : void 0));
  }
  function mo(n) {
    var r = n.keyCode;
    return (
      "charCode" in n ? ((n = n.charCode), n === 0 && r === 13 && (n = 13)) : (n = r),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    );
  }
  function yo() {
    return !0;
  }
  function wd() {
    return !1;
  }
  function Tt(n) {
    function r(i, o, h, f, v) {
      ((this._reactName = i),
        (this._targetInst = h),
        (this.type = o),
        (this.nativeEvent = f),
        (this.target = v),
        (this.currentTarget = null));
      for (var S in n) n.hasOwnProperty(S) && ((i = n[S]), (this[S] = i ? i(f) : f[S]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? yo
          : wd),
        (this.isPropagationStopped = wd),
        this
      );
    }
    return (
      m(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = yo));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = yo));
        },
        persist: function () {},
        isPersistent: yo,
      }),
      r
    );
  }
  var Kr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    vo = Tt(Kr),
    Ni = m({}, Kr, { view: 0, detail: 0 }),
    Qb = Tt(Ni),
    Nu,
    Pu,
    Pi,
    bo = m({}, Ni, {
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
      getModifierState: Bu,
      button: 0,
      buttons: 0,
      relatedTarget: function (n) {
        return n.relatedTarget === void 0
          ? n.fromElement === n.srcElement
            ? n.toElement
            : n.fromElement
          : n.relatedTarget;
      },
      movementX: function (n) {
        return "movementX" in n
          ? n.movementX
          : (n !== Pi &&
              (Pi && n.type === "mousemove"
                ? ((Nu = n.screenX - Pi.screenX), (Pu = n.screenY - Pi.screenY))
                : (Pu = Nu = 0),
              (Pi = n)),
            Nu);
      },
      movementY: function (n) {
        return "movementY" in n ? n.movementY : Pu;
      },
    }),
    Ed = Tt(bo),
    Yb = m({}, bo, { dataTransfer: 0 }),
    Jb = Tt(Yb),
    Xb = m({}, Ni, { relatedTarget: 0 }),
    zu = Tt(Xb),
    Zb = m({}, Kr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wb = Tt(Zb),
    e_ = m({}, Kr, {
      clipboardData: function (n) {
        return "clipboardData" in n ? n.clipboardData : window.clipboardData;
      },
    }),
    t_ = Tt(e_),
    n_ = m({}, Kr, { data: 0 }),
    Td = Tt(n_),
    r_ = {
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
      MozPrintableKey: "Unidentified",
    },
    s_ = {
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
      224: "Meta",
    },
    i_ = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function a_(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = i_[n]) ? !!r[n] : !1;
  }
  function Bu() {
    return a_;
  }
  var o_ = m({}, Ni, {
      key: function (n) {
        if (n.key) {
          var r = r_[n.key] || n.key;
          if (r !== "Unidentified") return r;
        }
        return n.type === "keypress"
          ? ((n = mo(n)), n === 13 ? "Enter" : String.fromCharCode(n))
          : n.type === "keydown" || n.type === "keyup"
            ? s_[n.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Bu,
      charCode: function (n) {
        return n.type === "keypress" ? mo(n) : 0;
      },
      keyCode: function (n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === "keypress"
          ? mo(n)
          : n.type === "keydown" || n.type === "keyup"
            ? n.keyCode
            : 0;
      },
    }),
    l_ = Tt(o_),
    u_ = m({}, bo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Rd = Tt(u_),
    c_ = m({}, Ni, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Bu,
    }),
    h_ = Tt(c_),
    f_ = m({}, Kr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    d_ = Tt(f_),
    p_ = m({}, bo, {
      deltaX: function (n) {
        return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
      },
      deltaY: function (n) {
        return "deltaY" in n
          ? n.deltaY
          : "wheelDeltaY" in n
            ? -n.wheelDeltaY
            : "wheelDelta" in n
              ? -n.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    g_ = Tt(p_),
    m_ = m({}, Kr, { newState: 0, oldState: 0 }),
    y_ = Tt(m_),
    v_ = [9, 13, 27, 32],
    Hu = On && "CompositionEvent" in window,
    zi = null;
  On && "documentMode" in document && (zi = document.documentMode);
  var b_ = On && "TextEvent" in window && !zi,
    Ad = On && (!Hu || (zi && 8 < zi && 11 >= zi)),
    Od = " ",
    Cd = !1;
  function xd(n, r) {
    switch (n) {
      case "keyup":
        return v_.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function kd(n) {
    return ((n = n.detail), typeof n == "object" && "data" in n ? n.data : null);
  }
  var Ds = !1;
  function __(n, r) {
    switch (n) {
      case "compositionend":
        return kd(r);
      case "keypress":
        return r.which !== 32 ? null : ((Cd = !0), Od);
      case "textInput":
        return ((n = r.data), n === Od && Cd ? null : n);
      default:
        return null;
    }
  }
  function S_(n, r) {
    if (Ds)
      return n === "compositionend" || (!Hu && xd(n, r))
        ? ((n = Sd()), (go = Lu = tr = null), (Ds = !1), n)
        : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Ad && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var w_ = {
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
    week: !0,
  };
  function jd(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!w_[n.type] : r === "textarea";
  }
  function Md(n, r, i, o) {
    (js ? (Ms ? Ms.push(o) : (Ms = [o])) : (js = o),
      (r = ll(r, "onChange")),
      0 < r.length &&
        ((i = new vo("onChange", "change", null, i, o)), n.push({ event: i, listeners: r })));
  }
  var Bi = null,
    Hi = null;
  function E_(n) {
    pm(n, 0);
  }
  function _o(n) {
    var r = Di(n);
    if (dd(r)) return n;
  }
  function Dd(n, r) {
    if (n === "change") return r;
  }
  var Ud = !1;
  if (On) {
    var Iu;
    if (On) {
      var qu = "oninput" in document;
      if (!qu) {
        var Ld = document.createElement("div");
        (Ld.setAttribute("oninput", "return;"), (qu = typeof Ld.oninput == "function"));
      }
      Iu = qu;
    } else Iu = !1;
    Ud = Iu && (!document.documentMode || 9 < document.documentMode);
  }
  function Nd() {
    Bi && (Bi.detachEvent("onpropertychange", Pd), (Hi = Bi = null));
  }
  function Pd(n) {
    if (n.propertyName === "value" && _o(Hi)) {
      var r = [];
      (Md(r, Hi, n, Mu(n)), _d(E_, r));
    }
  }
  function T_(n, r, i) {
    n === "focusin"
      ? (Nd(), (Bi = r), (Hi = i), Bi.attachEvent("onpropertychange", Pd))
      : n === "focusout" && Nd();
  }
  function R_(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return _o(Hi);
  }
  function A_(n, r) {
    if (n === "click") return _o(r);
  }
  function O_(n, r) {
    if (n === "input" || n === "change") return _o(r);
  }
  function C_(n, r) {
    return (n === r && (n !== 0 || 1 / n === 1 / r)) || (n !== n && r !== r);
  }
  var Pt = typeof Object.is == "function" ? Object.is : C_;
  function Ii(n, r) {
    if (Pt(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var i = Object.keys(n),
      o = Object.keys(r);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var h = i[o];
      if (!$r.call(r, h) || !Pt(n[h], r[h])) return !1;
    }
    return !0;
  }
  function zd(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Bd(n, r) {
    var i = zd(n);
    n = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (((o = n + i.textContent.length), n <= r && o >= r)) return { node: i, offset: r - n };
        n = o;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = zd(i);
    }
  }
  function Hd(n, r) {
    return n && r
      ? n === r
        ? !0
        : n && n.nodeType === 3
          ? !1
          : r && r.nodeType === 3
            ? Hd(n, r.parentNode)
            : "contains" in n
              ? n.contains(r)
              : n.compareDocumentPosition
                ? !!(n.compareDocumentPosition(r) & 16)
                : !1
      : !1;
  }
  function Id(n) {
    n =
      n != null && n.ownerDocument != null && n.ownerDocument.defaultView != null
        ? n.ownerDocument.defaultView
        : window;
    for (var r = fo(n.document); r instanceof n.HTMLIFrameElement; ) {
      try {
        var i = typeof r.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) n = r.contentWindow;
      else break;
      r = fo(n.document);
    }
    return r;
  }
  function $u(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return (
      r &&
      ((r === "input" &&
        (n.type === "text" ||
          n.type === "search" ||
          n.type === "tel" ||
          n.type === "url" ||
          n.type === "password")) ||
        r === "textarea" ||
        n.contentEditable === "true")
    );
  }
  var x_ = On && "documentMode" in document && 11 >= document.documentMode,
    Us = null,
    Gu = null,
    qi = null,
    Vu = !1;
  function qd(n, r, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Vu ||
      Us == null ||
      Us !== fo(o) ||
      ((o = Us),
      "selectionStart" in o && $u(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (qi && Ii(qi, o)) ||
        ((qi = o),
        (o = ll(Gu, "onSelect")),
        0 < o.length &&
          ((r = new vo("onSelect", "select", null, r, i)),
          n.push({ event: r, listeners: o }),
          (r.target = Us))));
  }
  function Fr(n, r) {
    var i = {};
    return (
      (i[n.toLowerCase()] = r.toLowerCase()),
      (i["Webkit" + n] = "webkit" + r),
      (i["Moz" + n] = "moz" + r),
      i
    );
  }
  var Ls = {
      animationend: Fr("Animation", "AnimationEnd"),
      animationiteration: Fr("Animation", "AnimationIteration"),
      animationstart: Fr("Animation", "AnimationStart"),
      transitionrun: Fr("Transition", "TransitionRun"),
      transitionstart: Fr("Transition", "TransitionStart"),
      transitioncancel: Fr("Transition", "TransitionCancel"),
      transitionend: Fr("Transition", "TransitionEnd"),
    },
    Ku = {},
    $d = {};
  On &&
    (($d = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ls.animationend.animation,
      delete Ls.animationiteration.animation,
      delete Ls.animationstart.animation),
    "TransitionEvent" in window || delete Ls.transitionend.transition);
  function Qr(n) {
    if (Ku[n]) return Ku[n];
    if (!Ls[n]) return n;
    var r = Ls[n],
      i;
    for (i in r) if (r.hasOwnProperty(i) && i in $d) return (Ku[n] = r[i]);
    return n;
  }
  var Gd = Qr("animationend"),
    Vd = Qr("animationiteration"),
    Kd = Qr("animationstart"),
    k_ = Qr("transitionrun"),
    j_ = Qr("transitionstart"),
    M_ = Qr("transitioncancel"),
    Fd = Qr("transitionend"),
    Qd = new Map(),
    Fu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Fu.push("scrollEnd");
  function sn(n, r) {
    (Qd.set(n, r), Vr(r, [n]));
  }
  var So =
      typeof reportError == "function"
        ? reportError
        : function (n) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var r = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof n == "object" && n !== null && typeof n.message == "string"
                    ? String(n.message)
                    : String(n),
                error: n,
              });
              if (!window.dispatchEvent(r)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", n);
              return;
            }
            console.error(n);
          },
    Qt = [],
    Ns = 0,
    Qu = 0;
  function wo() {
    for (var n = Ns, r = (Qu = Ns = 0); r < n; ) {
      var i = Qt[r];
      Qt[r++] = null;
      var o = Qt[r];
      Qt[r++] = null;
      var h = Qt[r];
      Qt[r++] = null;
      var f = Qt[r];
      if (((Qt[r++] = null), o !== null && h !== null)) {
        var v = o.pending;
        (v === null ? (h.next = h) : ((h.next = v.next), (v.next = h)), (o.pending = h));
      }
      f !== 0 && Yd(i, h, f);
    }
  }
  function Eo(n, r, i, o) {
    ((Qt[Ns++] = n),
      (Qt[Ns++] = r),
      (Qt[Ns++] = i),
      (Qt[Ns++] = o),
      (Qu |= o),
      (n.lanes |= o),
      (n = n.alternate),
      n !== null && (n.lanes |= o));
  }
  function Yu(n, r, i, o) {
    return (Eo(n, r, i, o), To(n));
  }
  function Yr(n, r) {
    return (Eo(n, null, null, r), To(n));
  }
  function Yd(n, r, i) {
    n.lanes |= i;
    var o = n.alternate;
    o !== null && (o.lanes |= i);
    for (var h = !1, f = n.return; f !== null; )
      ((f.childLanes |= i),
        (o = f.alternate),
        o !== null && (o.childLanes |= i),
        f.tag === 22 && ((n = f.stateNode), n === null || n._visibility & 1 || (h = !0)),
        (n = f),
        (f = f.return));
    return n.tag === 3
      ? ((f = n.stateNode),
        h &&
          r !== null &&
          ((h = 31 - Nt(i)),
          (n = f.hiddenUpdates),
          (o = n[h]),
          o === null ? (n[h] = [r]) : o.push(r),
          (r.lane = i | 536870912)),
        f)
      : null;
  }
  function To(n) {
    if (50 < ca) throw ((ca = 0), (sh = null), Error(a(185)));
    for (var r = n.return; r !== null; ) ((n = r), (r = n.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ps = {};
  function D_(n, r, i, o) {
    ((this.tag = n),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = r),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function zt(n, r, i, o) {
    return new D_(n, r, i, o);
  }
  function Ju(n) {
    return ((n = n.prototype), !(!n || !n.isReactComponent));
  }
  function Cn(n, r) {
    var i = n.alternate;
    return (
      i === null
        ? ((i = zt(n.tag, r, n.key, n.mode)),
          (i.elementType = n.elementType),
          (i.type = n.type),
          (i.stateNode = n.stateNode),
          (i.alternate = n),
          (n.alternate = i))
        : ((i.pendingProps = r),
          (i.type = n.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = n.flags & 65011712),
      (i.childLanes = n.childLanes),
      (i.lanes = n.lanes),
      (i.child = n.child),
      (i.memoizedProps = n.memoizedProps),
      (i.memoizedState = n.memoizedState),
      (i.updateQueue = n.updateQueue),
      (r = n.dependencies),
      (i.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (i.sibling = n.sibling),
      (i.index = n.index),
      (i.ref = n.ref),
      (i.refCleanup = n.refCleanup),
      i
    );
  }
  function Jd(n, r) {
    n.flags &= 65011714;
    var i = n.alternate;
    return (
      i === null
        ? ((n.childLanes = 0),
          (n.lanes = r),
          (n.child = null),
          (n.subtreeFlags = 0),
          (n.memoizedProps = null),
          (n.memoizedState = null),
          (n.updateQueue = null),
          (n.dependencies = null),
          (n.stateNode = null))
        : ((n.childLanes = i.childLanes),
          (n.lanes = i.lanes),
          (n.child = i.child),
          (n.subtreeFlags = 0),
          (n.deletions = null),
          (n.memoizedProps = i.memoizedProps),
          (n.memoizedState = i.memoizedState),
          (n.updateQueue = i.updateQueue),
          (n.type = i.type),
          (r = i.dependencies),
          (n.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext })),
      n
    );
  }
  function Ro(n, r, i, o, h, f) {
    var v = 0;
    if (((o = n), typeof n == "function")) Ju(n) && (v = 1);
    else if (typeof n == "string")
      v = zS(n, i, ee.current) ? 26 : n === "html" || n === "head" || n === "body" ? 27 : 5;
    else
      e: switch (n) {
        case Y:
          return ((n = zt(31, i, r, h)), (n.elementType = Y), (n.lanes = f), n);
        case A:
          return Jr(i.children, h, f, r);
        case E:
          ((v = 8), (h |= 24));
          break;
        case O:
          return ((n = zt(12, i, r, h | 2)), (n.elementType = O), (n.lanes = f), n);
        case Q:
          return ((n = zt(13, i, r, h)), (n.elementType = Q), (n.lanes = f), n);
        case F:
          return ((n = zt(19, i, r, h)), (n.elementType = F), (n.lanes = f), n);
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case j:
                v = 10;
                break e;
              case M:
                v = 9;
                break e;
              case L:
                v = 11;
                break e;
              case B:
                v = 14;
                break e;
              case G:
                ((v = 16), (o = null));
                break e;
            }
          ((v = 29), (i = Error(a(130, n === null ? "null" : typeof n, ""))), (o = null));
      }
    return ((r = zt(v, i, r, h)), (r.elementType = n), (r.type = o), (r.lanes = f), r);
  }
  function Jr(n, r, i, o) {
    return ((n = zt(7, n, o, r)), (n.lanes = i), n);
  }
  function Xu(n, r, i) {
    return ((n = zt(6, n, null, r)), (n.lanes = i), n);
  }
  function Xd(n) {
    var r = zt(18, null, null, 0);
    return ((r.stateNode = n), r);
  }
  function Zu(n, r, i) {
    return (
      (r = zt(4, n.children !== null ? n.children : [], n.key, r)),
      (r.lanes = i),
      (r.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      r
    );
  }
  var Zd = new WeakMap();
  function Yt(n, r) {
    if (typeof n == "object" && n !== null) {
      var i = Zd.get(n);
      return i !== void 0 ? i : ((r = { value: n, source: r, stack: Tn(r) }), Zd.set(n, r), r);
    }
    return { value: n, source: r, stack: Tn(r) };
  }
  var zs = [],
    Bs = 0,
    Ao = null,
    $i = 0,
    Jt = [],
    Xt = 0,
    nr = null,
    dn = 1,
    pn = "";
  function xn(n, r) {
    ((zs[Bs++] = $i), (zs[Bs++] = Ao), (Ao = n), ($i = r));
  }
  function Wd(n, r, i) {
    ((Jt[Xt++] = dn), (Jt[Xt++] = pn), (Jt[Xt++] = nr), (nr = n));
    var o = dn;
    n = pn;
    var h = 32 - Nt(o) - 1;
    ((o &= ~(1 << h)), (i += 1));
    var f = 32 - Nt(r) + h;
    if (30 < f) {
      var v = h - (h % 5);
      ((f = (o & ((1 << v) - 1)).toString(32)),
        (o >>= v),
        (h -= v),
        (dn = (1 << (32 - Nt(r) + h)) | (i << h) | o),
        (pn = f + n));
    } else ((dn = (1 << f) | (i << h) | o), (pn = n));
  }
  function Wu(n) {
    n.return !== null && (xn(n, 1), Wd(n, 1, 0));
  }
  function ec(n) {
    for (; n === Ao; ) ((Ao = zs[--Bs]), (zs[Bs] = null), ($i = zs[--Bs]), (zs[Bs] = null));
    for (; n === nr; )
      ((nr = Jt[--Xt]),
        (Jt[Xt] = null),
        (pn = Jt[--Xt]),
        (Jt[Xt] = null),
        (dn = Jt[--Xt]),
        (Jt[Xt] = null));
  }
  function ep(n, r) {
    ((Jt[Xt++] = dn), (Jt[Xt++] = pn), (Jt[Xt++] = nr), (dn = r.id), (pn = r.overflow), (nr = n));
  }
  var dt = null,
    He = null,
    _e = !1,
    rr = null,
    Zt = !1,
    tc = Error(a(519));
  function sr(n) {
    var r = Error(
      a(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""),
    );
    throw (Gi(Yt(r, n)), tc);
  }
  function tp(n) {
    var r = n.stateNode,
      i = n.type,
      o = n.memoizedProps;
    switch (((r[ft] = n), (r[Et] = o), i)) {
      case "dialog":
        (ye("cancel", r), ye("close", r));
        break;
      case "iframe":
      case "object":
      case "embed":
        ye("load", r);
        break;
      case "video":
      case "audio":
        for (i = 0; i < fa.length; i++) ye(fa[i], r);
        break;
      case "source":
        ye("error", r);
        break;
      case "img":
      case "image":
      case "link":
        (ye("error", r), ye("load", r));
        break;
      case "details":
        ye("toggle", r);
        break;
      case "input":
        (ye("invalid", r),
          pd(r, o.value, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name, !0));
        break;
      case "select":
        ye("invalid", r);
        break;
      case "textarea":
        (ye("invalid", r), md(r, o.value, o.defaultValue, o.children));
    }
    ((i = o.children),
      (typeof i != "string" && typeof i != "number" && typeof i != "bigint") ||
      r.textContent === "" + i ||
      o.suppressHydrationWarning === !0 ||
      vm(r.textContent, i)
        ? (o.popover != null && (ye("beforetoggle", r), ye("toggle", r)),
          o.onScroll != null && ye("scroll", r),
          o.onScrollEnd != null && ye("scrollend", r),
          o.onClick != null && (r.onclick = An),
          (r = !0))
        : (r = !1),
      r || sr(n, !0));
  }
  function np(n) {
    for (dt = n.return; dt; )
      switch (dt.tag) {
        case 5:
        case 31:
        case 13:
          Zt = !1;
          return;
        case 27:
        case 3:
          Zt = !0;
          return;
        default:
          dt = dt.return;
      }
  }
  function Hs(n) {
    if (n !== dt) return !1;
    if (!_e) return (np(n), (_e = !0), !1);
    var r = n.tag,
      i;
    if (
      ((i = r !== 3 && r !== 27) &&
        ((i = r === 5) &&
          ((i = n.type), (i = !(i !== "form" && i !== "button") || bh(n.type, n.memoizedProps))),
        (i = !i)),
      i && He && sr(n),
      np(n),
      r === 13)
    ) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n)) throw Error(a(317));
      He = Om(n);
    } else if (r === 31) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n)) throw Error(a(317));
      He = Om(n);
    } else
      r === 27
        ? ((r = He), vr(n.type) ? ((n = Th), (Th = null), (He = n)) : (He = r))
        : (He = dt ? en(n.stateNode.nextSibling) : null);
    return !0;
  }
  function Xr() {
    ((He = dt = null), (_e = !1));
  }
  function nc() {
    var n = rr;
    return (n !== null && (Ct === null ? (Ct = n) : Ct.push.apply(Ct, n), (rr = null)), n);
  }
  function Gi(n) {
    rr === null ? (rr = [n]) : rr.push(n);
  }
  var rc = k(null),
    Zr = null,
    kn = null;
  function ir(n, r, i) {
    (X(rc, r._currentValue), (r._currentValue = i));
  }
  function jn(n) {
    ((n._currentValue = rc.current), V(rc));
  }
  function sc(n, r, i) {
    for (; n !== null; ) {
      var o = n.alternate;
      if (
        ((n.childLanes & r) !== r
          ? ((n.childLanes |= r), o !== null && (o.childLanes |= r))
          : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r),
        n === i)
      )
        break;
      n = n.return;
    }
  }
  function ic(n, r, i, o) {
    var h = n.child;
    for (h !== null && (h.return = n); h !== null; ) {
      var f = h.dependencies;
      if (f !== null) {
        var v = h.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var S = f;
          f = h;
          for (var C = 0; C < r.length; C++)
            if (S.context === r[C]) {
              ((f.lanes |= i),
                (S = f.alternate),
                S !== null && (S.lanes |= i),
                sc(f.return, i, n),
                o || (v = null));
              break e;
            }
          f = S.next;
        }
      } else if (h.tag === 18) {
        if (((v = h.return), v === null)) throw Error(a(341));
        ((v.lanes |= i), (f = v.alternate), f !== null && (f.lanes |= i), sc(v, i, n), (v = null));
      } else v = h.child;
      if (v !== null) v.return = h;
      else
        for (v = h; v !== null; ) {
          if (v === n) {
            v = null;
            break;
          }
          if (((h = v.sibling), h !== null)) {
            ((h.return = v.return), (v = h));
            break;
          }
          v = v.return;
        }
      h = v;
    }
  }
  function Is(n, r, i, o) {
    n = null;
    for (var h = r, f = !1; h !== null; ) {
      if (!f) {
        if ((h.flags & 524288) !== 0) f = !0;
        else if ((h.flags & 262144) !== 0) break;
      }
      if (h.tag === 10) {
        var v = h.alternate;
        if (v === null) throw Error(a(387));
        if (((v = v.memoizedProps), v !== null)) {
          var S = h.type;
          Pt(h.pendingProps.value, v.value) || (n !== null ? n.push(S) : (n = [S]));
        }
      } else if (h === we.current) {
        if (((v = h.alternate), v === null)) throw Error(a(387));
        v.memoizedState.memoizedState !== h.memoizedState.memoizedState &&
          (n !== null ? n.push(ya) : (n = [ya]));
      }
      h = h.return;
    }
    (n !== null && ic(r, n, i, o), (r.flags |= 262144));
  }
  function Oo(n) {
    for (n = n.firstContext; n !== null; ) {
      if (!Pt(n.context._currentValue, n.memoizedValue)) return !0;
      n = n.next;
    }
    return !1;
  }
  function Wr(n) {
    ((Zr = n), (kn = null), (n = n.dependencies), n !== null && (n.firstContext = null));
  }
  function pt(n) {
    return rp(Zr, n);
  }
  function Co(n, r) {
    return (Zr === null && Wr(n), rp(n, r));
  }
  function rp(n, r) {
    var i = r._currentValue;
    if (((r = { context: r, memoizedValue: i, next: null }), kn === null)) {
      if (n === null) throw Error(a(308));
      ((kn = r), (n.dependencies = { lanes: 0, firstContext: r }), (n.flags |= 524288));
    } else kn = kn.next = r;
    return i;
  }
  var U_ =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var n = [],
              r = (this.signal = {
                aborted: !1,
                addEventListener: function (i, o) {
                  n.push(o);
                },
              });
            this.abort = function () {
              ((r.aborted = !0),
                n.forEach(function (i) {
                  return i();
                }));
            };
          },
    L_ = e.unstable_scheduleCallback,
    N_ = e.unstable_NormalPriority,
    Ze = {
      $$typeof: j,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ac() {
    return { controller: new U_(), data: new Map(), refCount: 0 };
  }
  function Vi(n) {
    (n.refCount--,
      n.refCount === 0 &&
        L_(N_, function () {
          n.controller.abort();
        }));
  }
  var Ki = null,
    oc = 0,
    qs = 0,
    $s = null;
  function P_(n, r) {
    if (Ki === null) {
      var i = (Ki = []);
      ((oc = 0),
        (qs = ch()),
        ($s = {
          status: "pending",
          value: void 0,
          then: function (o) {
            i.push(o);
          },
        }));
    }
    return (oc++, r.then(sp, sp), r);
  }
  function sp() {
    if (--oc === 0 && Ki !== null) {
      $s !== null && ($s.status = "fulfilled");
      var n = Ki;
      ((Ki = null), (qs = 0), ($s = null));
      for (var r = 0; r < n.length; r++) (0, n[r])();
    }
  }
  function z_(n, r) {
    var i = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (h) {
          i.push(h);
        },
      };
    return (
      n.then(
        function () {
          ((o.status = "fulfilled"), (o.value = r));
          for (var h = 0; h < i.length; h++) (0, i[h])(r);
        },
        function (h) {
          for (o.status = "rejected", o.reason = h, h = 0; h < i.length; h++) (0, i[h])(void 0);
        },
      ),
      o
    );
  }
  var ip = H.S;
  H.S = function (n, r) {
    ((qg = bt()),
      typeof r == "object" && r !== null && typeof r.then == "function" && P_(n, r),
      ip !== null && ip(n, r));
  };
  var es = k(null);
  function lc() {
    var n = es.current;
    return n !== null ? n : Le.pooledCache;
  }
  function xo(n, r) {
    r === null ? X(es, es.current) : X(es, r.pool);
  }
  function ap() {
    var n = lc();
    return n === null ? null : { parent: Ze._currentValue, pool: n };
  }
  var Gs = Error(a(460)),
    uc = Error(a(474)),
    ko = Error(a(542)),
    jo = { then: function () {} };
  function op(n) {
    return ((n = n.status), n === "fulfilled" || n === "rejected");
  }
  function lp(n, r, i) {
    switch (
      ((i = n[i]), i === void 0 ? n.push(r) : i !== r && (r.then(An, An), (r = i)), r.status)
    ) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw ((n = r.reason), cp(n), n);
      default:
        if (typeof r.status == "string") r.then(An, An);
        else {
          if (((n = Le), n !== null && 100 < n.shellSuspendCounter)) throw Error(a(482));
          ((n = r),
            (n.status = "pending"),
            n.then(
              function (o) {
                if (r.status === "pending") {
                  var h = r;
                  ((h.status = "fulfilled"), (h.value = o));
                }
              },
              function (o) {
                if (r.status === "pending") {
                  var h = r;
                  ((h.status = "rejected"), (h.reason = o));
                }
              },
            ));
        }
        switch (r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw ((n = r.reason), cp(n), n);
        }
        throw ((ns = r), Gs);
    }
  }
  function ts(n) {
    try {
      var r = n._init;
      return r(n._payload);
    } catch (i) {
      throw i !== null && typeof i == "object" && typeof i.then == "function" ? ((ns = i), Gs) : i;
    }
  }
  var ns = null;
  function up() {
    if (ns === null) throw Error(a(459));
    var n = ns;
    return ((ns = null), n);
  }
  function cp(n) {
    if (n === Gs || n === ko) throw Error(a(483));
  }
  var Vs = null,
    Fi = 0;
  function Mo(n) {
    var r = Fi;
    return ((Fi += 1), Vs === null && (Vs = []), lp(Vs, n, r));
  }
  function Qi(n, r) {
    ((r = r.props.ref), (n.ref = r !== void 0 ? r : null));
  }
  function Do(n, r) {
    throw r.$$typeof === b
      ? Error(a(525))
      : ((n = Object.prototype.toString.call(r)),
        Error(
          a(
            31,
            n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n,
          ),
        ));
  }
  function hp(n) {
    function r(D, x) {
      if (n) {
        var U = D.deletions;
        U === null ? ((D.deletions = [x]), (D.flags |= 16)) : U.push(x);
      }
    }
    function i(D, x) {
      if (!n) return null;
      for (; x !== null; ) (r(D, x), (x = x.sibling));
      return null;
    }
    function o(D) {
      for (var x = new Map(); D !== null; )
        (D.key !== null ? x.set(D.key, D) : x.set(D.index, D), (D = D.sibling));
      return x;
    }
    function h(D, x) {
      return ((D = Cn(D, x)), (D.index = 0), (D.sibling = null), D);
    }
    function f(D, x, U) {
      return (
        (D.index = U),
        n
          ? ((U = D.alternate),
            U !== null
              ? ((U = U.index), U < x ? ((D.flags |= 67108866), x) : U)
              : ((D.flags |= 67108866), x))
          : ((D.flags |= 1048576), x)
      );
    }
    function v(D) {
      return (n && D.alternate === null && (D.flags |= 67108866), D);
    }
    function S(D, x, U, q) {
      return x === null || x.tag !== 6
        ? ((x = Xu(U, D.mode, q)), (x.return = D), x)
        : ((x = h(x, U)), (x.return = D), x);
    }
    function C(D, x, U, q) {
      var oe = U.type;
      return oe === A
        ? I(D, x, U.props.children, q, U.key)
        : x !== null &&
            (x.elementType === oe ||
              (typeof oe == "object" && oe !== null && oe.$$typeof === G && ts(oe) === x.type))
          ? ((x = h(x, U.props)), Qi(x, U), (x.return = D), x)
          : ((x = Ro(U.type, U.key, U.props, null, D.mode, q)), Qi(x, U), (x.return = D), x);
    }
    function N(D, x, U, q) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== U.containerInfo ||
        x.stateNode.implementation !== U.implementation
        ? ((x = Zu(U, D.mode, q)), (x.return = D), x)
        : ((x = h(x, U.children || [])), (x.return = D), x);
    }
    function I(D, x, U, q, oe) {
      return x === null || x.tag !== 7
        ? ((x = Jr(U, D.mode, q, oe)), (x.return = D), x)
        : ((x = h(x, U)), (x.return = D), x);
    }
    function K(D, x, U) {
      if ((typeof x == "string" && x !== "") || typeof x == "number" || typeof x == "bigint")
        return ((x = Xu("" + x, D.mode, U)), (x.return = D), x);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case _:
            return ((U = Ro(x.type, x.key, x.props, null, D.mode, U)), Qi(U, x), (U.return = D), U);
          case w:
            return ((x = Zu(x, D.mode, U)), (x.return = D), x);
          case G:
            return ((x = ts(x)), K(D, x, U));
        }
        if (Be(x) || de(x)) return ((x = Jr(x, D.mode, U, null)), (x.return = D), x);
        if (typeof x.then == "function") return K(D, Mo(x), U);
        if (x.$$typeof === j) return K(D, Co(D, x), U);
        Do(D, x);
      }
      return null;
    }
    function P(D, x, U, q) {
      var oe = x !== null ? x.key : null;
      if ((typeof U == "string" && U !== "") || typeof U == "number" || typeof U == "bigint")
        return oe !== null ? null : S(D, x, "" + U, q);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case _:
            return U.key === oe ? C(D, x, U, q) : null;
          case w:
            return U.key === oe ? N(D, x, U, q) : null;
          case G:
            return ((U = ts(U)), P(D, x, U, q));
        }
        if (Be(U) || de(U)) return oe !== null ? null : I(D, x, U, q, null);
        if (typeof U.then == "function") return P(D, x, Mo(U), q);
        if (U.$$typeof === j) return P(D, x, Co(D, U), q);
        Do(D, U);
      }
      return null;
    }
    function z(D, x, U, q, oe) {
      if ((typeof q == "string" && q !== "") || typeof q == "number" || typeof q == "bigint")
        return ((D = D.get(U) || null), S(x, D, "" + q, oe));
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case _:
            return ((D = D.get(q.key === null ? U : q.key) || null), C(x, D, q, oe));
          case w:
            return ((D = D.get(q.key === null ? U : q.key) || null), N(x, D, q, oe));
          case G:
            return ((q = ts(q)), z(D, x, U, q, oe));
        }
        if (Be(q) || de(q)) return ((D = D.get(U) || null), I(x, D, q, oe, null));
        if (typeof q.then == "function") return z(D, x, U, Mo(q), oe);
        if (q.$$typeof === j) return z(D, x, U, Co(x, q), oe);
        Do(x, q);
      }
      return null;
    }
    function te(D, x, U, q) {
      for (
        var oe = null, Ee = null, se = x, pe = (x = 0), be = null;
        se !== null && pe < U.length;
        pe++
      ) {
        se.index > pe ? ((be = se), (se = null)) : (be = se.sibling);
        var Te = P(D, se, U[pe], q);
        if (Te === null) {
          se === null && (se = be);
          break;
        }
        (n && se && Te.alternate === null && r(D, se),
          (x = f(Te, x, pe)),
          Ee === null ? (oe = Te) : (Ee.sibling = Te),
          (Ee = Te),
          (se = be));
      }
      if (pe === U.length) return (i(D, se), _e && xn(D, pe), oe);
      if (se === null) {
        for (; pe < U.length; pe++)
          ((se = K(D, U[pe], q)),
            se !== null &&
              ((x = f(se, x, pe)), Ee === null ? (oe = se) : (Ee.sibling = se), (Ee = se)));
        return (_e && xn(D, pe), oe);
      }
      for (se = o(se); pe < U.length; pe++)
        ((be = z(se, D, pe, U[pe], q)),
          be !== null &&
            (n && be.alternate !== null && se.delete(be.key === null ? pe : be.key),
            (x = f(be, x, pe)),
            Ee === null ? (oe = be) : (Ee.sibling = be),
            (Ee = be)));
      return (
        n &&
          se.forEach(function (Er) {
            return r(D, Er);
          }),
        _e && xn(D, pe),
        oe
      );
    }
    function ue(D, x, U, q) {
      if (U == null) throw Error(a(151));
      for (
        var oe = null, Ee = null, se = x, pe = (x = 0), be = null, Te = U.next();
        se !== null && !Te.done;
        pe++, Te = U.next()
      ) {
        se.index > pe ? ((be = se), (se = null)) : (be = se.sibling);
        var Er = P(D, se, Te.value, q);
        if (Er === null) {
          se === null && (se = be);
          break;
        }
        (n && se && Er.alternate === null && r(D, se),
          (x = f(Er, x, pe)),
          Ee === null ? (oe = Er) : (Ee.sibling = Er),
          (Ee = Er),
          (se = be));
      }
      if (Te.done) return (i(D, se), _e && xn(D, pe), oe);
      if (se === null) {
        for (; !Te.done; pe++, Te = U.next())
          ((Te = K(D, Te.value, q)),
            Te !== null &&
              ((x = f(Te, x, pe)), Ee === null ? (oe = Te) : (Ee.sibling = Te), (Ee = Te)));
        return (_e && xn(D, pe), oe);
      }
      for (se = o(se); !Te.done; pe++, Te = U.next())
        ((Te = z(se, D, pe, Te.value, q)),
          Te !== null &&
            (n && Te.alternate !== null && se.delete(Te.key === null ? pe : Te.key),
            (x = f(Te, x, pe)),
            Ee === null ? (oe = Te) : (Ee.sibling = Te),
            (Ee = Te)));
      return (
        n &&
          se.forEach(function (YS) {
            return r(D, YS);
          }),
        _e && xn(D, pe),
        oe
      );
    }
    function De(D, x, U, q) {
      if (
        (typeof U == "object" &&
          U !== null &&
          U.type === A &&
          U.key === null &&
          (U = U.props.children),
        typeof U == "object" && U !== null)
      ) {
        switch (U.$$typeof) {
          case _:
            e: {
              for (var oe = U.key; x !== null; ) {
                if (x.key === oe) {
                  if (((oe = U.type), oe === A)) {
                    if (x.tag === 7) {
                      (i(D, x.sibling), (q = h(x, U.props.children)), (q.return = D), (D = q));
                      break e;
                    }
                  } else if (
                    x.elementType === oe ||
                    (typeof oe == "object" && oe !== null && oe.$$typeof === G && ts(oe) === x.type)
                  ) {
                    (i(D, x.sibling), (q = h(x, U.props)), Qi(q, U), (q.return = D), (D = q));
                    break e;
                  }
                  i(D, x);
                  break;
                } else r(D, x);
                x = x.sibling;
              }
              U.type === A
                ? ((q = Jr(U.props.children, D.mode, q, U.key)), (q.return = D), (D = q))
                : ((q = Ro(U.type, U.key, U.props, null, D.mode, q)),
                  Qi(q, U),
                  (q.return = D),
                  (D = q));
            }
            return v(D);
          case w:
            e: {
              for (oe = U.key; x !== null; ) {
                if (x.key === oe)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === U.containerInfo &&
                    x.stateNode.implementation === U.implementation
                  ) {
                    (i(D, x.sibling), (q = h(x, U.children || [])), (q.return = D), (D = q));
                    break e;
                  } else {
                    i(D, x);
                    break;
                  }
                else r(D, x);
                x = x.sibling;
              }
              ((q = Zu(U, D.mode, q)), (q.return = D), (D = q));
            }
            return v(D);
          case G:
            return ((U = ts(U)), De(D, x, U, q));
        }
        if (Be(U)) return te(D, x, U, q);
        if (de(U)) {
          if (((oe = de(U)), typeof oe != "function")) throw Error(a(150));
          return ((U = oe.call(U)), ue(D, x, U, q));
        }
        if (typeof U.then == "function") return De(D, x, Mo(U), q);
        if (U.$$typeof === j) return De(D, x, Co(D, U), q);
        Do(D, U);
      }
      return (typeof U == "string" && U !== "") || typeof U == "number" || typeof U == "bigint"
        ? ((U = "" + U),
          x !== null && x.tag === 6
            ? (i(D, x.sibling), (q = h(x, U)), (q.return = D), (D = q))
            : (i(D, x), (q = Xu(U, D.mode, q)), (q.return = D), (D = q)),
          v(D))
        : i(D, x);
    }
    return function (D, x, U, q) {
      try {
        Fi = 0;
        var oe = De(D, x, U, q);
        return ((Vs = null), oe);
      } catch (se) {
        if (se === Gs || se === ko) throw se;
        var Ee = zt(29, se, null, D.mode);
        return ((Ee.lanes = q), (Ee.return = D), Ee);
      }
    };
  }
  var rs = hp(!0),
    fp = hp(!1),
    ar = !1;
  function cc(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function hc(n, r) {
    ((n = n.updateQueue),
      r.updateQueue === n &&
        (r.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          callbacks: null,
        }));
  }
  function or(n) {
    return { lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function lr(n, r, i) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (Oe & 2) !== 0)) {
      var h = o.pending;
      return (
        h === null ? (r.next = r) : ((r.next = h.next), (h.next = r)),
        (o.pending = r),
        (r = To(n)),
        Yd(n, null, i),
        r
      );
    }
    return (Eo(n, o, r, i), To(n));
  }
  function Yi(n, r, i) {
    if (((r = r.updateQueue), r !== null && ((r = r.shared), (i & 4194048) !== 0))) {
      var o = r.lanes;
      ((o &= n.pendingLanes), (i |= o), (r.lanes = i), rd(n, i));
    }
  }
  function fc(n, r) {
    var i = n.updateQueue,
      o = n.alternate;
    if (o !== null && ((o = o.updateQueue), i === o)) {
      var h = null,
        f = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var v = { lane: i.lane, tag: i.tag, payload: i.payload, callback: null, next: null };
          (f === null ? (h = f = v) : (f = f.next = v), (i = i.next));
        } while (i !== null);
        f === null ? (h = f = r) : (f = f.next = r);
      } else h = f = r;
      ((i = {
        baseState: o.baseState,
        firstBaseUpdate: h,
        lastBaseUpdate: f,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (n.updateQueue = i));
      return;
    }
    ((n = i.lastBaseUpdate),
      n === null ? (i.firstBaseUpdate = r) : (n.next = r),
      (i.lastBaseUpdate = r));
  }
  var dc = !1;
  function Ji() {
    if (dc) {
      var n = $s;
      if (n !== null) throw n;
    }
  }
  function Xi(n, r, i, o) {
    dc = !1;
    var h = n.updateQueue;
    ar = !1;
    var f = h.firstBaseUpdate,
      v = h.lastBaseUpdate,
      S = h.shared.pending;
    if (S !== null) {
      h.shared.pending = null;
      var C = S,
        N = C.next;
      ((C.next = null), v === null ? (f = N) : (v.next = N), (v = C));
      var I = n.alternate;
      I !== null &&
        ((I = I.updateQueue),
        (S = I.lastBaseUpdate),
        S !== v && (S === null ? (I.firstBaseUpdate = N) : (S.next = N), (I.lastBaseUpdate = C)));
    }
    if (f !== null) {
      var K = h.baseState;
      ((v = 0), (I = N = C = null), (S = f));
      do {
        var P = S.lane & -536870913,
          z = P !== S.lane;
        if (z ? (ve & P) === P : (o & P) === P) {
          (P !== 0 && P === qs && (dc = !0),
            I !== null &&
              (I = I.next =
                { lane: 0, tag: S.tag, payload: S.payload, callback: null, next: null }));
          e: {
            var te = n,
              ue = S;
            P = r;
            var De = i;
            switch (ue.tag) {
              case 1:
                if (((te = ue.payload), typeof te == "function")) {
                  K = te.call(De, K, P);
                  break e;
                }
                K = te;
                break e;
              case 3:
                te.flags = (te.flags & -65537) | 128;
              case 0:
                if (
                  ((te = ue.payload),
                  (P = typeof te == "function" ? te.call(De, K, P) : te),
                  P == null)
                )
                  break e;
                K = m({}, K, P);
                break e;
              case 2:
                ar = !0;
            }
          }
          ((P = S.callback),
            P !== null &&
              ((n.flags |= 64),
              z && (n.flags |= 8192),
              (z = h.callbacks),
              z === null ? (h.callbacks = [P]) : z.push(P)));
        } else
          ((z = { lane: P, tag: S.tag, payload: S.payload, callback: S.callback, next: null }),
            I === null ? ((N = I = z), (C = K)) : (I = I.next = z),
            (v |= P));
        if (((S = S.next), S === null)) {
          if (((S = h.shared.pending), S === null)) break;
          ((z = S),
            (S = z.next),
            (z.next = null),
            (h.lastBaseUpdate = z),
            (h.shared.pending = null));
        }
      } while (!0);
      (I === null && (C = K),
        (h.baseState = C),
        (h.firstBaseUpdate = N),
        (h.lastBaseUpdate = I),
        f === null && (h.shared.lanes = 0),
        (dr |= v),
        (n.lanes = v),
        (n.memoizedState = K));
    }
  }
  function dp(n, r) {
    if (typeof n != "function") throw Error(a(191, n));
    n.call(r);
  }
  function pp(n, r) {
    var i = n.callbacks;
    if (i !== null) for (n.callbacks = null, n = 0; n < i.length; n++) dp(i[n], r);
  }
  var Ks = k(null),
    Uo = k(0);
  function gp(n, r) {
    ((n = Hn), X(Uo, n), X(Ks, r), (Hn = n | r.baseLanes));
  }
  function pc() {
    (X(Uo, Hn), X(Ks, Ks.current));
  }
  function gc() {
    ((Hn = Uo.current), V(Ks), V(Uo));
  }
  var Bt = k(null),
    Wt = null;
  function ur(n) {
    var r = n.alternate;
    (X(Ye, Ye.current & 1),
      X(Bt, n),
      Wt === null && (r === null || Ks.current !== null || r.memoizedState !== null) && (Wt = n));
  }
  function mc(n) {
    (X(Ye, Ye.current), X(Bt, n), Wt === null && (Wt = n));
  }
  function mp(n) {
    n.tag === 22 ? (X(Ye, Ye.current), X(Bt, n), Wt === null && (Wt = n)) : cr();
  }
  function cr() {
    (X(Ye, Ye.current), X(Bt, Bt.current));
  }
  function Ht(n) {
    (V(Bt), Wt === n && (Wt = null), V(Ye));
  }
  var Ye = k(0);
  function Lo(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var i = r.memoizedState;
        if (i !== null && ((i = i.dehydrated), i === null || wh(i) || Eh(i))) return r;
      } else if (
        r.tag === 19 &&
        (r.memoizedProps.revealOrder === "forwards" ||
          r.memoizedProps.revealOrder === "backwards" ||
          r.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          r.memoizedProps.revealOrder === "together")
      ) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        ((r.child.return = r), (r = r.child));
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      ((r.sibling.return = r.return), (r = r.sibling));
    }
    return null;
  }
  var Mn = 0,
    fe = null,
    je = null,
    We = null,
    No = !1,
    Fs = !1,
    ss = !1,
    Po = 0,
    Zi = 0,
    Qs = null,
    B_ = 0;
  function Ge() {
    throw Error(a(321));
  }
  function yc(n, r) {
    if (r === null) return !1;
    for (var i = 0; i < r.length && i < n.length; i++) if (!Pt(n[i], r[i])) return !1;
    return !0;
  }
  function vc(n, r, i, o, h, f) {
    return (
      (Mn = f),
      (fe = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (H.H = n === null || n.memoizedState === null ? Wp : Dc),
      (ss = !1),
      (f = i(o, h)),
      (ss = !1),
      Fs && (f = vp(r, i, o, h)),
      yp(n),
      f
    );
  }
  function yp(n) {
    H.H = ta;
    var r = je !== null && je.next !== null;
    if (((Mn = 0), (We = je = fe = null), (No = !1), (Zi = 0), (Qs = null), r)) throw Error(a(300));
    n === null || et || ((n = n.dependencies), n !== null && Oo(n) && (et = !0));
  }
  function vp(n, r, i, o) {
    fe = n;
    var h = 0;
    do {
      if ((Fs && (Qs = null), (Zi = 0), (Fs = !1), 25 <= h)) throw Error(a(301));
      if (((h += 1), (We = je = null), n.updateQueue != null)) {
        var f = n.updateQueue;
        ((f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0));
      }
      ((H.H = eg), (f = r(i, o)));
    } while (Fs);
    return f;
  }
  function H_() {
    var n = H.H,
      r = n.useState()[0];
    return (
      (r = typeof r.then == "function" ? Wi(r) : r),
      (n = n.useState()[0]),
      (je !== null ? je.memoizedState : null) !== n && (fe.flags |= 1024),
      r
    );
  }
  function bc() {
    var n = Po !== 0;
    return ((Po = 0), n);
  }
  function _c(n, r, i) {
    ((r.updateQueue = n.updateQueue), (r.flags &= -2053), (n.lanes &= ~i));
  }
  function Sc(n) {
    if (No) {
      for (n = n.memoizedState; n !== null; ) {
        var r = n.queue;
        (r !== null && (r.pending = null), (n = n.next));
      }
      No = !1;
    }
    ((Mn = 0), (We = je = fe = null), (Fs = !1), (Zi = Po = 0), (Qs = null));
  }
  function wt() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (We === null ? (fe.memoizedState = We = n) : (We = We.next = n), We);
  }
  function Je() {
    if (je === null) {
      var n = fe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = je.next;
    var r = We === null ? fe.memoizedState : We.next;
    if (r !== null) ((We = r), (je = n));
    else {
      if (n === null) throw fe.alternate === null ? Error(a(467)) : Error(a(310));
      ((je = n),
        (n = {
          memoizedState: je.memoizedState,
          baseState: je.baseState,
          baseQueue: je.baseQueue,
          queue: je.queue,
          next: null,
        }),
        We === null ? (fe.memoizedState = We = n) : (We = We.next = n));
    }
    return We;
  }
  function zo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Wi(n) {
    var r = Zi;
    return (
      (Zi += 1),
      Qs === null && (Qs = []),
      (n = lp(Qs, n, r)),
      (r = fe),
      (We === null ? r.memoizedState : We.next) === null &&
        ((r = r.alternate), (H.H = r === null || r.memoizedState === null ? Wp : Dc)),
      n
    );
  }
  function Bo(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return Wi(n);
      if (n.$$typeof === j) return pt(n);
    }
    throw Error(a(438, String(n)));
  }
  function wc(n) {
    var r = null,
      i = fe.updateQueue;
    if ((i !== null && (r = i.memoCache), r == null)) {
      var o = fe.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (r = {
              data: o.data.map(function (h) {
                return h.slice();
              }),
              index: 0,
            })));
    }
    if (
      (r == null && (r = { data: [], index: 0 }),
      i === null && ((i = zo()), (fe.updateQueue = i)),
      (i.memoCache = r),
      (i = r.data[r.index]),
      i === void 0)
    )
      for (i = r.data[r.index] = Array(n), o = 0; o < n; o++) i[o] = ae;
    return (r.index++, i);
  }
  function Dn(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ho(n) {
    var r = Je();
    return Ec(r, je, n);
  }
  function Ec(n, r, i) {
    var o = n.queue;
    if (o === null) throw Error(a(311));
    o.lastRenderedReducer = i;
    var h = n.baseQueue,
      f = o.pending;
    if (f !== null) {
      if (h !== null) {
        var v = h.next;
        ((h.next = f.next), (f.next = v));
      }
      ((r.baseQueue = h = f), (o.pending = null));
    }
    if (((f = n.baseState), h === null)) n.memoizedState = f;
    else {
      r = h.next;
      var S = (v = null),
        C = null,
        N = r,
        I = !1;
      do {
        var K = N.lane & -536870913;
        if (K !== N.lane ? (ve & K) === K : (Mn & K) === K) {
          var P = N.revertLane;
          if (P === 0)
            (C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: N.action,
                  hasEagerState: N.hasEagerState,
                  eagerState: N.eagerState,
                  next: null,
                }),
              K === qs && (I = !0));
          else if ((Mn & P) === P) {
            ((N = N.next), P === qs && (I = !0));
            continue;
          } else
            ((K = {
              lane: 0,
              revertLane: N.revertLane,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null,
            }),
              C === null ? ((S = C = K), (v = f)) : (C = C.next = K),
              (fe.lanes |= P),
              (dr |= P));
          ((K = N.action), ss && i(f, K), (f = N.hasEagerState ? N.eagerState : i(f, K)));
        } else
          ((P = {
            lane: K,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          }),
            C === null ? ((S = C = P), (v = f)) : (C = C.next = P),
            (fe.lanes |= K),
            (dr |= K));
        N = N.next;
      } while (N !== null && N !== r);
      if (
        (C === null ? (v = f) : (C.next = S),
        !Pt(f, n.memoizedState) && ((et = !0), I && ((i = $s), i !== null)))
      )
        throw i;
      ((n.memoizedState = f), (n.baseState = v), (n.baseQueue = C), (o.lastRenderedState = f));
    }
    return (h === null && (o.lanes = 0), [n.memoizedState, o.dispatch]);
  }
  function Tc(n) {
    var r = Je(),
      i = r.queue;
    if (i === null) throw Error(a(311));
    i.lastRenderedReducer = n;
    var o = i.dispatch,
      h = i.pending,
      f = r.memoizedState;
    if (h !== null) {
      i.pending = null;
      var v = (h = h.next);
      do ((f = n(f, v.action)), (v = v.next));
      while (v !== h);
      (Pt(f, r.memoizedState) || (et = !0),
        (r.memoizedState = f),
        r.baseQueue === null && (r.baseState = f),
        (i.lastRenderedState = f));
    }
    return [f, o];
  }
  function bp(n, r, i) {
    var o = fe,
      h = Je(),
      f = _e;
    if (f) {
      if (i === void 0) throw Error(a(407));
      i = i();
    } else i = r();
    var v = !Pt((je || h).memoizedState, i);
    if (
      (v && ((h.memoizedState = i), (et = !0)),
      (h = h.queue),
      Oc(wp.bind(null, o, h, n), [n]),
      h.getSnapshot !== r || v || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        Ys(9, { destroy: void 0 }, Sp.bind(null, o, h, i, r), null),
        Le === null)
      )
        throw Error(a(349));
      f || (Mn & 127) !== 0 || _p(o, r, i);
    }
    return i;
  }
  function _p(n, r, i) {
    ((n.flags |= 16384),
      (n = { getSnapshot: r, value: i }),
      (r = fe.updateQueue),
      r === null
        ? ((r = zo()), (fe.updateQueue = r), (r.stores = [n]))
        : ((i = r.stores), i === null ? (r.stores = [n]) : i.push(n)));
  }
  function Sp(n, r, i, o) {
    ((r.value = i), (r.getSnapshot = o), Ep(r) && Tp(n));
  }
  function wp(n, r, i) {
    return i(function () {
      Ep(r) && Tp(n);
    });
  }
  function Ep(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var i = r();
      return !Pt(n, i);
    } catch {
      return !0;
    }
  }
  function Tp(n) {
    var r = Yr(n, 2);
    r !== null && xt(r, n, 2);
  }
  function Rc(n) {
    var r = wt();
    if (typeof n == "function") {
      var i = n;
      if (((n = i()), ss)) {
        Wn(!0);
        try {
          i();
        } finally {
          Wn(!1);
        }
      }
    }
    return (
      (r.memoizedState = r.baseState = n),
      (r.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dn,
        lastRenderedState: n,
      }),
      r
    );
  }
  function Rp(n, r, i, o) {
    return ((n.baseState = i), Ec(n, je, typeof o == "function" ? o : Dn));
  }
  function I_(n, r, i, o, h) {
    if ($o(n)) throw Error(a(485));
    if (((n = r.action), n !== null)) {
      var f = {
        payload: h,
        action: n,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (v) {
          f.listeners.push(v);
        },
      };
      (H.T !== null ? i(!0) : (f.isTransition = !1),
        o(f),
        (i = r.pending),
        i === null
          ? ((f.next = r.pending = f), Ap(r, f))
          : ((f.next = i.next), (r.pending = i.next = f)));
    }
  }
  function Ap(n, r) {
    var i = r.action,
      o = r.payload,
      h = n.state;
    if (r.isTransition) {
      var f = H.T,
        v = {};
      H.T = v;
      try {
        var S = i(h, o),
          C = H.S;
        (C !== null && C(v, S), Op(n, r, S));
      } catch (N) {
        Ac(n, r, N);
      } finally {
        (f !== null && v.types !== null && (f.types = v.types), (H.T = f));
      }
    } else
      try {
        ((f = i(h, o)), Op(n, r, f));
      } catch (N) {
        Ac(n, r, N);
      }
  }
  function Op(n, r, i) {
    i !== null && typeof i == "object" && typeof i.then == "function"
      ? i.then(
          function (o) {
            Cp(n, r, o);
          },
          function (o) {
            return Ac(n, r, o);
          },
        )
      : Cp(n, r, i);
  }
  function Cp(n, r, i) {
    ((r.status = "fulfilled"),
      (r.value = i),
      xp(r),
      (n.state = i),
      (r = n.pending),
      r !== null &&
        ((i = r.next), i === r ? (n.pending = null) : ((i = i.next), (r.next = i), Ap(n, i))));
  }
  function Ac(n, r, i) {
    var o = n.pending;
    if (((n.pending = null), o !== null)) {
      o = o.next;
      do ((r.status = "rejected"), (r.reason = i), xp(r), (r = r.next));
      while (r !== o);
    }
    n.action = null;
  }
  function xp(n) {
    n = n.listeners;
    for (var r = 0; r < n.length; r++) (0, n[r])();
  }
  function kp(n, r) {
    return r;
  }
  function jp(n, r) {
    if (_e) {
      var i = Le.formState;
      if (i !== null) {
        e: {
          var o = fe;
          if (_e) {
            if (He) {
              t: {
                for (var h = He, f = Zt; h.nodeType !== 8; ) {
                  if (!f) {
                    h = null;
                    break t;
                  }
                  if (((h = en(h.nextSibling)), h === null)) {
                    h = null;
                    break t;
                  }
                }
                ((f = h.data), (h = f === "F!" || f === "F" ? h : null));
              }
              if (h) {
                ((He = en(h.nextSibling)), (o = h.data === "F!"));
                break e;
              }
            }
            sr(o);
          }
          o = !1;
        }
        o && (r = i[0]);
      }
    }
    return (
      (i = wt()),
      (i.memoizedState = i.baseState = r),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kp,
        lastRenderedState: r,
      }),
      (i.queue = o),
      (i = Jp.bind(null, fe, o)),
      (o.dispatch = i),
      (o = Rc(!1)),
      (f = Mc.bind(null, fe, !1, o.queue)),
      (o = wt()),
      (h = { state: r, dispatch: null, action: n, pending: null }),
      (o.queue = h),
      (i = I_.bind(null, fe, h, f, i)),
      (h.dispatch = i),
      (o.memoizedState = n),
      [r, i, !1]
    );
  }
  function Mp(n) {
    var r = Je();
    return Dp(r, je, n);
  }
  function Dp(n, r, i) {
    if (
      ((r = Ec(n, r, kp)[0]),
      (n = Ho(Dn)[0]),
      typeof r == "object" && r !== null && typeof r.then == "function")
    )
      try {
        var o = Wi(r);
      } catch (v) {
        throw v === Gs ? ko : v;
      }
    else o = r;
    r = Je();
    var h = r.queue,
      f = h.dispatch;
    return (
      i !== r.memoizedState &&
        ((fe.flags |= 2048), Ys(9, { destroy: void 0 }, q_.bind(null, h, i), null)),
      [o, f, n]
    );
  }
  function q_(n, r) {
    n.action = r;
  }
  function Up(n) {
    var r = Je(),
      i = je;
    if (i !== null) return Dp(r, i, n);
    (Je(), (r = r.memoizedState), (i = Je()));
    var o = i.queue.dispatch;
    return ((i.memoizedState = n), [r, o, !1]);
  }
  function Ys(n, r, i, o) {
    return (
      (n = { tag: n, create: i, deps: o, inst: r, next: null }),
      (r = fe.updateQueue),
      r === null && ((r = zo()), (fe.updateQueue = r)),
      (i = r.lastEffect),
      i === null
        ? (r.lastEffect = n.next = n)
        : ((o = i.next), (i.next = n), (n.next = o), (r.lastEffect = n)),
      n
    );
  }
  function Lp() {
    return Je().memoizedState;
  }
  function Io(n, r, i, o) {
    var h = wt();
    ((fe.flags |= n),
      (h.memoizedState = Ys(1 | r, { destroy: void 0 }, i, o === void 0 ? null : o)));
  }
  function qo(n, r, i, o) {
    var h = Je();
    o = o === void 0 ? null : o;
    var f = h.memoizedState.inst;
    je !== null && o !== null && yc(o, je.memoizedState.deps)
      ? (h.memoizedState = Ys(r, f, i, o))
      : ((fe.flags |= n), (h.memoizedState = Ys(1 | r, f, i, o)));
  }
  function Np(n, r) {
    Io(8390656, 8, n, r);
  }
  function Oc(n, r) {
    qo(2048, 8, n, r);
  }
  function $_(n) {
    fe.flags |= 4;
    var r = fe.updateQueue;
    if (r === null) ((r = zo()), (fe.updateQueue = r), (r.events = [n]));
    else {
      var i = r.events;
      i === null ? (r.events = [n]) : i.push(n);
    }
  }
  function Pp(n) {
    var r = Je().memoizedState;
    return (
      $_({ ref: r, nextImpl: n }),
      function () {
        if ((Oe & 2) !== 0) throw Error(a(440));
        return r.impl.apply(void 0, arguments);
      }
    );
  }
  function zp(n, r) {
    return qo(4, 2, n, r);
  }
  function Bp(n, r) {
    return qo(4, 4, n, r);
  }
  function Hp(n, r) {
    if (typeof r == "function") {
      n = n();
      var i = r(n);
      return function () {
        typeof i == "function" ? i() : r(null);
      };
    }
    if (r != null)
      return (
        (n = n()),
        (r.current = n),
        function () {
          r.current = null;
        }
      );
  }
  function Ip(n, r, i) {
    ((i = i != null ? i.concat([n]) : null), qo(4, 4, Hp.bind(null, r, n), i));
  }
  function Cc() {}
  function qp(n, r) {
    var i = Je();
    r = r === void 0 ? null : r;
    var o = i.memoizedState;
    return r !== null && yc(r, o[1]) ? o[0] : ((i.memoizedState = [n, r]), n);
  }
  function $p(n, r) {
    var i = Je();
    r = r === void 0 ? null : r;
    var o = i.memoizedState;
    if (r !== null && yc(r, o[1])) return o[0];
    if (((o = n()), ss)) {
      Wn(!0);
      try {
        n();
      } finally {
        Wn(!1);
      }
    }
    return ((i.memoizedState = [o, r]), o);
  }
  function xc(n, r, i) {
    return i === void 0 || ((Mn & 1073741824) !== 0 && (ve & 261930) === 0)
      ? (n.memoizedState = r)
      : ((n.memoizedState = i), (n = Gg()), (fe.lanes |= n), (dr |= n), i);
  }
  function Gp(n, r, i, o) {
    return Pt(i, r)
      ? i
      : Ks.current !== null
        ? ((n = xc(n, i, o)), Pt(n, r) || (et = !0), n)
        : (Mn & 42) === 0 || ((Mn & 1073741824) !== 0 && (ve & 261930) === 0)
          ? ((et = !0), (n.memoizedState = i))
          : ((n = Gg()), (fe.lanes |= n), (dr |= n), r);
  }
  function Vp(n, r, i, o, h) {
    var f = J.p;
    J.p = f !== 0 && 8 > f ? f : 8;
    var v = H.T,
      S = {};
    ((H.T = S), Mc(n, !1, r, i));
    try {
      var C = h(),
        N = H.S;
      if (
        (N !== null && N(S, C), C !== null && typeof C == "object" && typeof C.then == "function")
      ) {
        var I = z_(C, o);
        ea(n, r, I, $t(n));
      } else ea(n, r, o, $t(n));
    } catch (K) {
      ea(n, r, { then: function () {}, status: "rejected", reason: K }, $t());
    } finally {
      ((J.p = f), v !== null && S.types !== null && (v.types = S.types), (H.T = v));
    }
  }
  function G_() {}
  function kc(n, r, i, o) {
    if (n.tag !== 5) throw Error(a(476));
    var h = Kp(n).queue;
    Vp(
      n,
      h,
      r,
      le,
      i === null
        ? G_
        : function () {
            return (Fp(n), i(o));
          },
    );
  }
  function Kp(n) {
    var r = n.memoizedState;
    if (r !== null) return r;
    r = {
      memoizedState: le,
      baseState: le,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dn,
        lastRenderedState: le,
      },
      next: null,
    };
    var i = {};
    return (
      (r.next = {
        memoizedState: i,
        baseState: i,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Dn,
          lastRenderedState: i,
        },
        next: null,
      }),
      (n.memoizedState = r),
      (n = n.alternate),
      n !== null && (n.memoizedState = r),
      r
    );
  }
  function Fp(n) {
    var r = Kp(n);
    (r.next === null && (r = n.alternate.memoizedState), ea(n, r.next.queue, {}, $t()));
  }
  function jc() {
    return pt(ya);
  }
  function Qp() {
    return Je().memoizedState;
  }
  function Yp() {
    return Je().memoizedState;
  }
  function V_(n) {
    for (var r = n.return; r !== null; ) {
      switch (r.tag) {
        case 24:
        case 3:
          var i = $t();
          n = or(i);
          var o = lr(r, n, i);
          (o !== null && (xt(o, r, i), Yi(o, r, i)), (r = { cache: ac() }), (n.payload = r));
          return;
      }
      r = r.return;
    }
  }
  function K_(n, r, i) {
    var o = $t();
    ((i = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      $o(n) ? Xp(r, i) : ((i = Yu(n, r, i, o)), i !== null && (xt(i, n, o), Zp(i, r, o))));
  }
  function Jp(n, r, i) {
    var o = $t();
    ea(n, r, i, o);
  }
  function ea(n, r, i, o) {
    var h = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if ($o(n)) Xp(r, h);
    else {
      var f = n.alternate;
      if (
        n.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = r.lastRenderedReducer), f !== null)
      )
        try {
          var v = r.lastRenderedState,
            S = f(v, i);
          if (((h.hasEagerState = !0), (h.eagerState = S), Pt(S, v)))
            return (Eo(n, r, h, 0), Le === null && wo(), !1);
        } catch {}
      if (((i = Yu(n, r, h, o)), i !== null)) return (xt(i, n, o), Zp(i, r, o), !0);
    }
    return !1;
  }
  function Mc(n, r, i, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: ch(),
        gesture: null,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      $o(n))
    ) {
      if (r) throw Error(a(479));
    } else ((r = Yu(n, i, o, 2)), r !== null && xt(r, n, 2));
  }
  function $o(n) {
    var r = n.alternate;
    return n === fe || (r !== null && r === fe);
  }
  function Xp(n, r) {
    Fs = No = !0;
    var i = n.pending;
    (i === null ? (r.next = r) : ((r.next = i.next), (i.next = r)), (n.pending = r));
  }
  function Zp(n, r, i) {
    if ((i & 4194048) !== 0) {
      var o = r.lanes;
      ((o &= n.pendingLanes), (i |= o), (r.lanes = i), rd(n, i));
    }
  }
  var ta = {
    readContext: pt,
    use: Bo,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useLayoutEffect: Ge,
    useInsertionEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
    useHostTransitionStatus: Ge,
    useFormState: Ge,
    useActionState: Ge,
    useOptimistic: Ge,
    useMemoCache: Ge,
    useCacheRefresh: Ge,
  };
  ta.useEffectEvent = Ge;
  var Wp = {
      readContext: pt,
      use: Bo,
      useCallback: function (n, r) {
        return ((wt().memoizedState = [n, r === void 0 ? null : r]), n);
      },
      useContext: pt,
      useEffect: Np,
      useImperativeHandle: function (n, r, i) {
        ((i = i != null ? i.concat([n]) : null), Io(4194308, 4, Hp.bind(null, r, n), i));
      },
      useLayoutEffect: function (n, r) {
        return Io(4194308, 4, n, r);
      },
      useInsertionEffect: function (n, r) {
        Io(4, 2, n, r);
      },
      useMemo: function (n, r) {
        var i = wt();
        r = r === void 0 ? null : r;
        var o = n();
        if (ss) {
          Wn(!0);
          try {
            n();
          } finally {
            Wn(!1);
          }
        }
        return ((i.memoizedState = [o, r]), o);
      },
      useReducer: function (n, r, i) {
        var o = wt();
        if (i !== void 0) {
          var h = i(r);
          if (ss) {
            Wn(!0);
            try {
              i(r);
            } finally {
              Wn(!1);
            }
          }
        } else h = r;
        return (
          (o.memoizedState = o.baseState = h),
          (n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: h,
          }),
          (o.queue = n),
          (n = n.dispatch = K_.bind(null, fe, n)),
          [o.memoizedState, n]
        );
      },
      useRef: function (n) {
        var r = wt();
        return ((n = { current: n }), (r.memoizedState = n));
      },
      useState: function (n) {
        n = Rc(n);
        var r = n.queue,
          i = Jp.bind(null, fe, r);
        return ((r.dispatch = i), [n.memoizedState, i]);
      },
      useDebugValue: Cc,
      useDeferredValue: function (n, r) {
        var i = wt();
        return xc(i, n, r);
      },
      useTransition: function () {
        var n = Rc(!1);
        return ((n = Vp.bind(null, fe, n.queue, !0, !1)), (wt().memoizedState = n), [!1, n]);
      },
      useSyncExternalStore: function (n, r, i) {
        var o = fe,
          h = wt();
        if (_e) {
          if (i === void 0) throw Error(a(407));
          i = i();
        } else {
          if (((i = r()), Le === null)) throw Error(a(349));
          (ve & 127) !== 0 || _p(o, r, i);
        }
        h.memoizedState = i;
        var f = { value: i, getSnapshot: r };
        return (
          (h.queue = f),
          Np(wp.bind(null, o, f, n), [n]),
          (o.flags |= 2048),
          Ys(9, { destroy: void 0 }, Sp.bind(null, o, f, i, r), null),
          i
        );
      },
      useId: function () {
        var n = wt(),
          r = Le.identifierPrefix;
        if (_e) {
          var i = pn,
            o = dn;
          ((i = (o & ~(1 << (32 - Nt(o) - 1))).toString(32) + i),
            (r = "_" + r + "R_" + i),
            (i = Po++),
            0 < i && (r += "H" + i.toString(32)),
            (r += "_"));
        } else ((i = B_++), (r = "_" + r + "r_" + i.toString(32) + "_"));
        return (n.memoizedState = r);
      },
      useHostTransitionStatus: jc,
      useFormState: jp,
      useActionState: jp,
      useOptimistic: function (n) {
        var r = wt();
        r.memoizedState = r.baseState = n;
        var i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((r.queue = i), (r = Mc.bind(null, fe, !0, i)), (i.dispatch = r), [n, r]);
      },
      useMemoCache: wc,
      useCacheRefresh: function () {
        return (wt().memoizedState = V_.bind(null, fe));
      },
      useEffectEvent: function (n) {
        var r = wt(),
          i = { impl: n };
        return (
          (r.memoizedState = i),
          function () {
            if ((Oe & 2) !== 0) throw Error(a(440));
            return i.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Dc = {
      readContext: pt,
      use: Bo,
      useCallback: qp,
      useContext: pt,
      useEffect: Oc,
      useImperativeHandle: Ip,
      useInsertionEffect: zp,
      useLayoutEffect: Bp,
      useMemo: $p,
      useReducer: Ho,
      useRef: Lp,
      useState: function () {
        return Ho(Dn);
      },
      useDebugValue: Cc,
      useDeferredValue: function (n, r) {
        var i = Je();
        return Gp(i, je.memoizedState, n, r);
      },
      useTransition: function () {
        var n = Ho(Dn)[0],
          r = Je().memoizedState;
        return [typeof n == "boolean" ? n : Wi(n), r];
      },
      useSyncExternalStore: bp,
      useId: Qp,
      useHostTransitionStatus: jc,
      useFormState: Mp,
      useActionState: Mp,
      useOptimistic: function (n, r) {
        var i = Je();
        return Rp(i, je, n, r);
      },
      useMemoCache: wc,
      useCacheRefresh: Yp,
    };
  Dc.useEffectEvent = Pp;
  var eg = {
    readContext: pt,
    use: Bo,
    useCallback: qp,
    useContext: pt,
    useEffect: Oc,
    useImperativeHandle: Ip,
    useInsertionEffect: zp,
    useLayoutEffect: Bp,
    useMemo: $p,
    useReducer: Tc,
    useRef: Lp,
    useState: function () {
      return Tc(Dn);
    },
    useDebugValue: Cc,
    useDeferredValue: function (n, r) {
      var i = Je();
      return je === null ? xc(i, n, r) : Gp(i, je.memoizedState, n, r);
    },
    useTransition: function () {
      var n = Tc(Dn)[0],
        r = Je().memoizedState;
      return [typeof n == "boolean" ? n : Wi(n), r];
    },
    useSyncExternalStore: bp,
    useId: Qp,
    useHostTransitionStatus: jc,
    useFormState: Up,
    useActionState: Up,
    useOptimistic: function (n, r) {
      var i = Je();
      return je !== null ? Rp(i, je, n, r) : ((i.baseState = n), [n, i.queue.dispatch]);
    },
    useMemoCache: wc,
    useCacheRefresh: Yp,
  };
  eg.useEffectEvent = Pp;
  function Uc(n, r, i, o) {
    ((r = n.memoizedState),
      (i = i(o, r)),
      (i = i == null ? r : m({}, r, i)),
      (n.memoizedState = i),
      n.lanes === 0 && (n.updateQueue.baseState = i));
  }
  var Lc = {
    enqueueSetState: function (n, r, i) {
      n = n._reactInternals;
      var o = $t(),
        h = or(o);
      ((h.payload = r),
        i != null && (h.callback = i),
        (r = lr(n, h, o)),
        r !== null && (xt(r, n, o), Yi(r, n, o)));
    },
    enqueueReplaceState: function (n, r, i) {
      n = n._reactInternals;
      var o = $t(),
        h = or(o);
      ((h.tag = 1),
        (h.payload = r),
        i != null && (h.callback = i),
        (r = lr(n, h, o)),
        r !== null && (xt(r, n, o), Yi(r, n, o)));
    },
    enqueueForceUpdate: function (n, r) {
      n = n._reactInternals;
      var i = $t(),
        o = or(i);
      ((o.tag = 2),
        r != null && (o.callback = r),
        (r = lr(n, o, i)),
        r !== null && (xt(r, n, i), Yi(r, n, i)));
    },
  };
  function tg(n, r, i, o, h, f, v) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == "function"
        ? n.shouldComponentUpdate(o, f, v)
        : r.prototype && r.prototype.isPureReactComponent
          ? !Ii(i, o) || !Ii(h, f)
          : !0
    );
  }
  function ng(n, r, i, o) {
    ((n = r.state),
      typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(i, o),
      typeof r.UNSAFE_componentWillReceiveProps == "function" &&
        r.UNSAFE_componentWillReceiveProps(i, o),
      r.state !== n && Lc.enqueueReplaceState(r, r.state, null));
  }
  function is(n, r) {
    var i = r;
    if ("ref" in r) {
      i = {};
      for (var o in r) o !== "ref" && (i[o] = r[o]);
    }
    if ((n = n.defaultProps)) {
      i === r && (i = m({}, i));
      for (var h in n) i[h] === void 0 && (i[h] = n[h]);
    }
    return i;
  }
  function rg(n) {
    So(n);
  }
  function sg(n) {
    console.error(n);
  }
  function ig(n) {
    So(n);
  }
  function Go(n, r) {
    try {
      var i = n.onUncaughtError;
      i(r.value, { componentStack: r.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function ag(n, r, i) {
    try {
      var o = n.onCaughtError;
      o(i.value, { componentStack: i.stack, errorBoundary: r.tag === 1 ? r.stateNode : null });
    } catch (h) {
      setTimeout(function () {
        throw h;
      });
    }
  }
  function Nc(n, r, i) {
    return (
      (i = or(i)),
      (i.tag = 3),
      (i.payload = { element: null }),
      (i.callback = function () {
        Go(n, r);
      }),
      i
    );
  }
  function og(n) {
    return ((n = or(n)), (n.tag = 3), n);
  }
  function lg(n, r, i, o) {
    var h = i.type.getDerivedStateFromError;
    if (typeof h == "function") {
      var f = o.value;
      ((n.payload = function () {
        return h(f);
      }),
        (n.callback = function () {
          ag(r, i, o);
        }));
    }
    var v = i.stateNode;
    v !== null &&
      typeof v.componentDidCatch == "function" &&
      (n.callback = function () {
        (ag(r, i, o),
          typeof h != "function" && (pr === null ? (pr = new Set([this])) : pr.add(this)));
        var S = o.stack;
        this.componentDidCatch(o.value, { componentStack: S !== null ? S : "" });
      });
  }
  function F_(n, r, i, o, h) {
    if (((i.flags |= 32768), o !== null && typeof o == "object" && typeof o.then == "function")) {
      if (((r = i.alternate), r !== null && Is(r, i, h, !0), (i = Bt.current), i !== null)) {
        switch (i.tag) {
          case 31:
          case 13:
            return (
              Wt === null ? nl() : i.alternate === null && Ve === 0 && (Ve = 3),
              (i.flags &= -257),
              (i.flags |= 65536),
              (i.lanes = h),
              o === jo
                ? (i.flags |= 16384)
                : ((r = i.updateQueue),
                  r === null ? (i.updateQueue = new Set([o])) : r.add(o),
                  oh(n, o, h)),
              !1
            );
          case 22:
            return (
              (i.flags |= 65536),
              o === jo
                ? (i.flags |= 16384)
                : ((r = i.updateQueue),
                  r === null
                    ? ((r = { transitions: null, markerInstances: null, retryQueue: new Set([o]) }),
                      (i.updateQueue = r))
                    : ((i = r.retryQueue), i === null ? (r.retryQueue = new Set([o])) : i.add(o)),
                  oh(n, o, h)),
              !1
            );
        }
        throw Error(a(435, i.tag));
      }
      return (oh(n, o, h), nl(), !1);
    }
    if (_e)
      return (
        (r = Bt.current),
        r !== null
          ? ((r.flags & 65536) === 0 && (r.flags |= 256),
            (r.flags |= 65536),
            (r.lanes = h),
            o !== tc && ((n = Error(a(422), { cause: o })), Gi(Yt(n, i))))
          : (o !== tc && ((r = Error(a(423), { cause: o })), Gi(Yt(r, i))),
            (n = n.current.alternate),
            (n.flags |= 65536),
            (h &= -h),
            (n.lanes |= h),
            (o = Yt(o, i)),
            (h = Nc(n.stateNode, o, h)),
            fc(n, h),
            Ve !== 4 && (Ve = 2)),
        !1
      );
    var f = Error(a(520), { cause: o });
    if (((f = Yt(f, i)), ua === null ? (ua = [f]) : ua.push(f), Ve !== 4 && (Ve = 2), r === null))
      return !0;
    ((o = Yt(o, i)), (i = r));
    do {
      switch (i.tag) {
        case 3:
          return (
            (i.flags |= 65536),
            (n = h & -h),
            (i.lanes |= n),
            (n = Nc(i.stateNode, o, n)),
            fc(i, n),
            !1
          );
        case 1:
          if (
            ((r = i.type),
            (f = i.stateNode),
            (i.flags & 128) === 0 &&
              (typeof r.getDerivedStateFromError == "function" ||
                (f !== null &&
                  typeof f.componentDidCatch == "function" &&
                  (pr === null || !pr.has(f)))))
          )
            return (
              (i.flags |= 65536),
              (h &= -h),
              (i.lanes |= h),
              (h = og(h)),
              lg(h, n, i, o),
              fc(i, h),
              !1
            );
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Pc = Error(a(461)),
    et = !1;
  function gt(n, r, i, o) {
    r.child = n === null ? fp(r, null, i, o) : rs(r, n.child, i, o);
  }
  function ug(n, r, i, o, h) {
    i = i.render;
    var f = r.ref;
    if ("ref" in o) {
      var v = {};
      for (var S in o) S !== "ref" && (v[S] = o[S]);
    } else v = o;
    return (
      Wr(r),
      (o = vc(n, r, i, v, f, h)),
      (S = bc()),
      n !== null && !et
        ? (_c(n, r, h), Un(n, r, h))
        : (_e && S && Wu(r), (r.flags |= 1), gt(n, r, o, h), r.child)
    );
  }
  function cg(n, r, i, o, h) {
    if (n === null) {
      var f = i.type;
      return typeof f == "function" && !Ju(f) && f.defaultProps === void 0 && i.compare === null
        ? ((r.tag = 15), (r.type = f), hg(n, r, f, o, h))
        : ((n = Ro(i.type, null, o, r, r.mode, h)), (n.ref = r.ref), (n.return = r), (r.child = n));
    }
    if (((f = n.child), !Vc(n, h))) {
      var v = f.memoizedProps;
      if (((i = i.compare), (i = i !== null ? i : Ii), i(v, o) && n.ref === r.ref))
        return Un(n, r, h);
    }
    return ((r.flags |= 1), (n = Cn(f, o)), (n.ref = r.ref), (n.return = r), (r.child = n));
  }
  function hg(n, r, i, o, h) {
    if (n !== null) {
      var f = n.memoizedProps;
      if (Ii(f, o) && n.ref === r.ref)
        if (((et = !1), (r.pendingProps = o = f), Vc(n, h))) (n.flags & 131072) !== 0 && (et = !0);
        else return ((r.lanes = n.lanes), Un(n, r, h));
    }
    return zc(n, r, i, o, h);
  }
  function fg(n, r, i, o) {
    var h = o.children,
      f = n !== null ? n.memoizedState : null;
    if (
      (n === null &&
        r.stateNode === null &&
        (r.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      o.mode === "hidden")
    ) {
      if ((r.flags & 128) !== 0) {
        if (((f = f !== null ? f.baseLanes | i : i), n !== null)) {
          for (o = r.child = n.child, h = 0; o !== null; )
            ((h = h | o.lanes | o.childLanes), (o = o.sibling));
          o = h & ~f;
        } else ((o = 0), (r.child = null));
        return dg(n, r, f, i, o);
      }
      if ((i & 536870912) !== 0)
        ((r.memoizedState = { baseLanes: 0, cachePool: null }),
          n !== null && xo(r, f !== null ? f.cachePool : null),
          f !== null ? gp(r, f) : pc(),
          mp(r));
      else return ((o = r.lanes = 536870912), dg(n, r, f !== null ? f.baseLanes | i : i, i, o));
    } else
      f !== null
        ? (xo(r, f.cachePool), gp(r, f), cr(), (r.memoizedState = null))
        : (n !== null && xo(r, null), pc(), cr());
    return (gt(n, r, h, i), r.child);
  }
  function na(n, r) {
    return (
      (n !== null && n.tag === 22) ||
        r.stateNode !== null ||
        (r.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      r.sibling
    );
  }
  function dg(n, r, i, o, h) {
    var f = lc();
    return (
      (f = f === null ? null : { parent: Ze._currentValue, pool: f }),
      (r.memoizedState = { baseLanes: i, cachePool: f }),
      n !== null && xo(r, null),
      pc(),
      mp(r),
      n !== null && Is(n, r, o, !0),
      (r.childLanes = h),
      null
    );
  }
  function Vo(n, r) {
    return (
      (r = Fo({ mode: r.mode, children: r.children }, n.mode)),
      (r.ref = n.ref),
      (n.child = r),
      (r.return = n),
      r
    );
  }
  function pg(n, r, i) {
    return (
      rs(r, n.child, null, i),
      (n = Vo(r, r.pendingProps)),
      (n.flags |= 2),
      Ht(r),
      (r.memoizedState = null),
      n
    );
  }
  function Q_(n, r, i) {
    var o = r.pendingProps,
      h = (r.flags & 128) !== 0;
    if (((r.flags &= -129), n === null)) {
      if (_e) {
        if (o.mode === "hidden") return ((n = Vo(r, o)), (r.lanes = 536870912), na(null, n));
        if (
          (mc(r),
          (n = He)
            ? ((n = Am(n, Zt)),
              (n = n !== null && n.data === "&" ? n : null),
              n !== null &&
                ((r.memoizedState = {
                  dehydrated: n,
                  treeContext: nr !== null ? { id: dn, overflow: pn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (i = Xd(n)),
                (i.return = r),
                (r.child = i),
                (dt = r),
                (He = null)))
            : (n = null),
          n === null)
        )
          throw sr(r);
        return ((r.lanes = 536870912), null);
      }
      return Vo(r, o);
    }
    var f = n.memoizedState;
    if (f !== null) {
      var v = f.dehydrated;
      if ((mc(r), h))
        if (r.flags & 256) ((r.flags &= -257), (r = pg(n, r, i)));
        else if (r.memoizedState !== null) ((r.child = n.child), (r.flags |= 128), (r = null));
        else throw Error(a(558));
      else if ((et || Is(n, r, i, !1), (h = (i & n.childLanes) !== 0), et || h)) {
        if (((o = Le), o !== null && ((v = sd(o, i)), v !== 0 && v !== f.retryLane)))
          throw ((f.retryLane = v), Yr(n, v), xt(o, n, v), Pc);
        (nl(), (r = pg(n, r, i)));
      } else
        ((n = f.treeContext),
          (He = en(v.nextSibling)),
          (dt = r),
          (_e = !0),
          (rr = null),
          (Zt = !1),
          n !== null && ep(r, n),
          (r = Vo(r, o)),
          (r.flags |= 4096));
      return r;
    }
    return (
      (n = Cn(n.child, { mode: o.mode, children: o.children })),
      (n.ref = r.ref),
      (r.child = n),
      (n.return = r),
      n
    );
  }
  function Ko(n, r) {
    var i = r.ref;
    if (i === null) n !== null && n.ref !== null && (r.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object") throw Error(a(284));
      (n === null || n.ref !== i) && (r.flags |= 4194816);
    }
  }
  function zc(n, r, i, o, h) {
    return (
      Wr(r),
      (i = vc(n, r, i, o, void 0, h)),
      (o = bc()),
      n !== null && !et
        ? (_c(n, r, h), Un(n, r, h))
        : (_e && o && Wu(r), (r.flags |= 1), gt(n, r, i, h), r.child)
    );
  }
  function gg(n, r, i, o, h, f) {
    return (
      Wr(r),
      (r.updateQueue = null),
      (i = vp(r, o, i, h)),
      yp(n),
      (o = bc()),
      n !== null && !et
        ? (_c(n, r, f), Un(n, r, f))
        : (_e && o && Wu(r), (r.flags |= 1), gt(n, r, i, f), r.child)
    );
  }
  function mg(n, r, i, o, h) {
    if ((Wr(r), r.stateNode === null)) {
      var f = Ps,
        v = i.contextType;
      (typeof v == "object" && v !== null && (f = pt(v)),
        (f = new i(o, f)),
        (r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = Lc),
        (r.stateNode = f),
        (f._reactInternals = r),
        (f = r.stateNode),
        (f.props = o),
        (f.state = r.memoizedState),
        (f.refs = {}),
        cc(r),
        (v = i.contextType),
        (f.context = typeof v == "object" && v !== null ? pt(v) : Ps),
        (f.state = r.memoizedState),
        (v = i.getDerivedStateFromProps),
        typeof v == "function" && (Uc(r, i, v, o), (f.state = r.memoizedState)),
        typeof i.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" &&
            typeof f.componentWillMount != "function") ||
          ((v = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(),
          v !== f.state && Lc.enqueueReplaceState(f, f.state, null),
          Xi(r, o, f, h),
          Ji(),
          (f.state = r.memoizedState)),
        typeof f.componentDidMount == "function" && (r.flags |= 4194308),
        (o = !0));
    } else if (n === null) {
      f = r.stateNode;
      var S = r.memoizedProps,
        C = is(i, S);
      f.props = C;
      var N = f.context,
        I = i.contextType;
      ((v = Ps), typeof I == "object" && I !== null && (v = pt(I)));
      var K = i.getDerivedStateFromProps;
      ((I = typeof K == "function" || typeof f.getSnapshotBeforeUpdate == "function"),
        (S = r.pendingProps !== S),
        I ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((S || N !== v) && ng(r, f, o, v)),
        (ar = !1));
      var P = r.memoizedState;
      ((f.state = P),
        Xi(r, o, f, h),
        Ji(),
        (N = r.memoizedState),
        S || P !== N || ar
          ? (typeof K == "function" && (Uc(r, i, K, o), (N = r.memoizedState)),
            (C = ar || tg(r, i, C, o, P, N, v))
              ? (I ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" && f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" && (r.flags |= 4194308))
              : (typeof f.componentDidMount == "function" && (r.flags |= 4194308),
                (r.memoizedProps = o),
                (r.memoizedState = N)),
            (f.props = o),
            (f.state = N),
            (f.context = v),
            (o = C))
          : (typeof f.componentDidMount == "function" && (r.flags |= 4194308), (o = !1)));
    } else {
      ((f = r.stateNode),
        hc(n, r),
        (v = r.memoizedProps),
        (I = is(i, v)),
        (f.props = I),
        (K = r.pendingProps),
        (P = f.context),
        (N = i.contextType),
        (C = Ps),
        typeof N == "object" && N !== null && (C = pt(N)),
        (S = i.getDerivedStateFromProps),
        (N = typeof S == "function" || typeof f.getSnapshotBeforeUpdate == "function") ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((v !== K || P !== C) && ng(r, f, o, C)),
        (ar = !1),
        (P = r.memoizedState),
        (f.state = P),
        Xi(r, o, f, h),
        Ji());
      var z = r.memoizedState;
      v !== K || P !== z || ar || (n !== null && n.dependencies !== null && Oo(n.dependencies))
        ? (typeof S == "function" && (Uc(r, i, S, o), (z = r.memoizedState)),
          (I =
            ar ||
            tg(r, i, I, o, P, z, C) ||
            (n !== null && n.dependencies !== null && Oo(n.dependencies)))
            ? (N ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(o, z, C),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(o, z, C)),
              typeof f.componentDidUpdate == "function" && (r.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (v === n.memoizedProps && P === n.memoizedState) ||
                (r.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (v === n.memoizedProps && P === n.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = o),
              (r.memoizedState = z)),
          (f.props = o),
          (f.state = z),
          (f.context = C),
          (o = I))
        : (typeof f.componentDidUpdate != "function" ||
            (v === n.memoizedProps && P === n.memoizedState) ||
            (r.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (v === n.memoizedProps && P === n.memoizedState) ||
            (r.flags |= 1024),
          (o = !1));
    }
    return (
      (f = o),
      Ko(n, r),
      (o = (r.flags & 128) !== 0),
      f || o
        ? ((f = r.stateNode),
          (i = o && typeof i.getDerivedStateFromError != "function" ? null : f.render()),
          (r.flags |= 1),
          n !== null && o
            ? ((r.child = rs(r, n.child, null, h)), (r.child = rs(r, null, i, h)))
            : gt(n, r, i, h),
          (r.memoizedState = f.state),
          (n = r.child))
        : (n = Un(n, r, h)),
      n
    );
  }
  function yg(n, r, i, o) {
    return (Xr(), (r.flags |= 256), gt(n, r, i, o), r.child);
  }
  var Bc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Hc(n) {
    return { baseLanes: n, cachePool: ap() };
  }
  function Ic(n, r, i) {
    return ((n = n !== null ? n.childLanes & ~i : 0), r && (n |= qt), n);
  }
  function vg(n, r, i) {
    var o = r.pendingProps,
      h = !1,
      f = (r.flags & 128) !== 0,
      v;
    if (
      ((v = f) || (v = n !== null && n.memoizedState === null ? !1 : (Ye.current & 2) !== 0),
      v && ((h = !0), (r.flags &= -129)),
      (v = (r.flags & 32) !== 0),
      (r.flags &= -33),
      n === null)
    ) {
      if (_e) {
        if (
          (h ? ur(r) : cr(),
          (n = He)
            ? ((n = Am(n, Zt)),
              (n = n !== null && n.data !== "&" ? n : null),
              n !== null &&
                ((r.memoizedState = {
                  dehydrated: n,
                  treeContext: nr !== null ? { id: dn, overflow: pn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (i = Xd(n)),
                (i.return = r),
                (r.child = i),
                (dt = r),
                (He = null)))
            : (n = null),
          n === null)
        )
          throw sr(r);
        return (Eh(n) ? (r.lanes = 32) : (r.lanes = 536870912), null);
      }
      var S = o.children;
      return (
        (o = o.fallback),
        h
          ? (cr(),
            (h = r.mode),
            (S = Fo({ mode: "hidden", children: S }, h)),
            (o = Jr(o, h, i, null)),
            (S.return = r),
            (o.return = r),
            (S.sibling = o),
            (r.child = S),
            (o = r.child),
            (o.memoizedState = Hc(i)),
            (o.childLanes = Ic(n, v, i)),
            (r.memoizedState = Bc),
            na(null, o))
          : (ur(r), qc(r, S))
      );
    }
    var C = n.memoizedState;
    if (C !== null && ((S = C.dehydrated), S !== null)) {
      if (f)
        r.flags & 256
          ? (ur(r), (r.flags &= -257), (r = $c(n, r, i)))
          : r.memoizedState !== null
            ? (cr(), (r.child = n.child), (r.flags |= 128), (r = null))
            : (cr(),
              (S = o.fallback),
              (h = r.mode),
              (o = Fo({ mode: "visible", children: o.children }, h)),
              (S = Jr(S, h, i, null)),
              (S.flags |= 2),
              (o.return = r),
              (S.return = r),
              (o.sibling = S),
              (r.child = o),
              rs(r, n.child, null, i),
              (o = r.child),
              (o.memoizedState = Hc(i)),
              (o.childLanes = Ic(n, v, i)),
              (r.memoizedState = Bc),
              (r = na(null, o)));
      else if ((ur(r), Eh(S))) {
        if (((v = S.nextSibling && S.nextSibling.dataset), v)) var N = v.dgst;
        ((v = N),
          (o = Error(a(419))),
          (o.stack = ""),
          (o.digest = v),
          Gi({ value: o, source: null, stack: null }),
          (r = $c(n, r, i)));
      } else if ((et || Is(n, r, i, !1), (v = (i & n.childLanes) !== 0), et || v)) {
        if (((v = Le), v !== null && ((o = sd(v, i)), o !== 0 && o !== C.retryLane)))
          throw ((C.retryLane = o), Yr(n, o), xt(v, n, o), Pc);
        (wh(S) || nl(), (r = $c(n, r, i)));
      } else
        wh(S)
          ? ((r.flags |= 192), (r.child = n.child), (r = null))
          : ((n = C.treeContext),
            (He = en(S.nextSibling)),
            (dt = r),
            (_e = !0),
            (rr = null),
            (Zt = !1),
            n !== null && ep(r, n),
            (r = qc(r, o.children)),
            (r.flags |= 4096));
      return r;
    }
    return h
      ? (cr(),
        (S = o.fallback),
        (h = r.mode),
        (C = n.child),
        (N = C.sibling),
        (o = Cn(C, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = C.subtreeFlags & 65011712),
        N !== null ? (S = Cn(N, S)) : ((S = Jr(S, h, i, null)), (S.flags |= 2)),
        (S.return = r),
        (o.return = r),
        (o.sibling = S),
        (r.child = o),
        na(null, o),
        (o = r.child),
        (S = n.child.memoizedState),
        S === null
          ? (S = Hc(i))
          : ((h = S.cachePool),
            h !== null
              ? ((C = Ze._currentValue), (h = h.parent !== C ? { parent: C, pool: C } : h))
              : (h = ap()),
            (S = { baseLanes: S.baseLanes | i, cachePool: h })),
        (o.memoizedState = S),
        (o.childLanes = Ic(n, v, i)),
        (r.memoizedState = Bc),
        na(n.child, o))
      : (ur(r),
        (i = n.child),
        (n = i.sibling),
        (i = Cn(i, { mode: "visible", children: o.children })),
        (i.return = r),
        (i.sibling = null),
        n !== null &&
          ((v = r.deletions), v === null ? ((r.deletions = [n]), (r.flags |= 16)) : v.push(n)),
        (r.child = i),
        (r.memoizedState = null),
        i);
  }
  function qc(n, r) {
    return ((r = Fo({ mode: "visible", children: r }, n.mode)), (r.return = n), (n.child = r));
  }
  function Fo(n, r) {
    return ((n = zt(22, n, null, r)), (n.lanes = 0), n);
  }
  function $c(n, r, i) {
    return (
      rs(r, n.child, null, i),
      (n = qc(r, r.pendingProps.children)),
      (n.flags |= 2),
      (r.memoizedState = null),
      n
    );
  }
  function bg(n, r, i) {
    n.lanes |= r;
    var o = n.alternate;
    (o !== null && (o.lanes |= r), sc(n.return, r, i));
  }
  function Gc(n, r, i, o, h, f) {
    var v = n.memoizedState;
    v === null
      ? (n.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: i,
          tailMode: h,
          treeForkCount: f,
        })
      : ((v.isBackwards = r),
        (v.rendering = null),
        (v.renderingStartTime = 0),
        (v.last = o),
        (v.tail = i),
        (v.tailMode = h),
        (v.treeForkCount = f));
  }
  function _g(n, r, i) {
    var o = r.pendingProps,
      h = o.revealOrder,
      f = o.tail;
    o = o.children;
    var v = Ye.current,
      S = (v & 2) !== 0;
    if (
      (S ? ((v = (v & 1) | 2), (r.flags |= 128)) : (v &= 1),
      X(Ye, v),
      gt(n, r, o, i),
      (o = _e ? $i : 0),
      !S && n !== null && (n.flags & 128) !== 0)
    )
      e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && bg(n, i, r);
        else if (n.tag === 19) bg(n, i, r);
        else if (n.child !== null) {
          ((n.child.return = n), (n = n.child));
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    switch (h) {
      case "forwards":
        for (i = r.child, h = null; i !== null; )
          ((n = i.alternate), n !== null && Lo(n) === null && (h = i), (i = i.sibling));
        ((i = h),
          i === null ? ((h = r.child), (r.child = null)) : ((h = i.sibling), (i.sibling = null)),
          Gc(r, !1, h, i, f, o));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (i = null, h = r.child, r.child = null; h !== null; ) {
          if (((n = h.alternate), n !== null && Lo(n) === null)) {
            r.child = h;
            break;
          }
          ((n = h.sibling), (h.sibling = i), (i = h), (h = n));
        }
        Gc(r, !0, i, null, f, o);
        break;
      case "together":
        Gc(r, !1, null, null, void 0, o);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Un(n, r, i) {
    if (
      (n !== null && (r.dependencies = n.dependencies), (dr |= r.lanes), (i & r.childLanes) === 0)
    )
      if (n !== null) {
        if ((Is(n, r, i, !1), (i & r.childLanes) === 0)) return null;
      } else return null;
    if (n !== null && r.child !== n.child) throw Error(a(153));
    if (r.child !== null) {
      for (n = r.child, i = Cn(n, n.pendingProps), r.child = i, i.return = r; n.sibling !== null; )
        ((n = n.sibling), (i = i.sibling = Cn(n, n.pendingProps)), (i.return = r));
      i.sibling = null;
    }
    return r.child;
  }
  function Vc(n, r) {
    return (n.lanes & r) !== 0 ? !0 : ((n = n.dependencies), !!(n !== null && Oo(n)));
  }
  function Y_(n, r, i) {
    switch (r.tag) {
      case 3:
        (Qe(r, r.stateNode.containerInfo), ir(r, Ze, n.memoizedState.cache), Xr());
        break;
      case 27:
      case 5:
        wn(r);
        break;
      case 4:
        Qe(r, r.stateNode.containerInfo);
        break;
      case 10:
        ir(r, r.type, r.memoizedProps.value);
        break;
      case 31:
        if (r.memoizedState !== null) return ((r.flags |= 128), mc(r), null);
        break;
      case 13:
        var o = r.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (ur(r), (r.flags |= 128), null)
            : (i & r.child.childLanes) !== 0
              ? vg(n, r, i)
              : (ur(r), (n = Un(n, r, i)), n !== null ? n.sibling : null);
        ur(r);
        break;
      case 19:
        var h = (n.flags & 128) !== 0;
        if (
          ((o = (i & r.childLanes) !== 0),
          o || (Is(n, r, i, !1), (o = (i & r.childLanes) !== 0)),
          h)
        ) {
          if (o) return _g(n, r, i);
          r.flags |= 128;
        }
        if (
          ((h = r.memoizedState),
          h !== null && ((h.rendering = null), (h.tail = null), (h.lastEffect = null)),
          X(Ye, Ye.current),
          o)
        )
          break;
        return null;
      case 22:
        return ((r.lanes = 0), fg(n, r, i, r.pendingProps));
      case 24:
        ir(r, Ze, n.memoizedState.cache);
    }
    return Un(n, r, i);
  }
  function Sg(n, r, i) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps) et = !0;
      else {
        if (!Vc(n, i) && (r.flags & 128) === 0) return ((et = !1), Y_(n, r, i));
        et = (n.flags & 131072) !== 0;
      }
    else ((et = !1), _e && (r.flags & 1048576) !== 0 && Wd(r, $i, r.index));
    switch (((r.lanes = 0), r.tag)) {
      case 16:
        e: {
          var o = r.pendingProps;
          if (((n = ts(r.elementType)), (r.type = n), typeof n == "function"))
            Ju(n)
              ? ((o = is(n, o)), (r.tag = 1), (r = mg(null, r, n, o, i)))
              : ((r.tag = 0), (r = zc(null, r, n, o, i)));
          else {
            if (n != null) {
              var h = n.$$typeof;
              if (h === L) {
                ((r.tag = 11), (r = ug(null, r, n, o, i)));
                break e;
              } else if (h === B) {
                ((r.tag = 14), (r = cg(null, r, n, o, i)));
                break e;
              }
            }
            throw ((r = Fe(n) || n), Error(a(306, r, "")));
          }
        }
        return r;
      case 0:
        return zc(n, r, r.type, r.pendingProps, i);
      case 1:
        return ((o = r.type), (h = is(o, r.pendingProps)), mg(n, r, o, h, i));
      case 3:
        e: {
          if ((Qe(r, r.stateNode.containerInfo), n === null)) throw Error(a(387));
          o = r.pendingProps;
          var f = r.memoizedState;
          ((h = f.element), hc(n, r), Xi(r, o, null, i));
          var v = r.memoizedState;
          if (
            ((o = v.cache),
            ir(r, Ze, o),
            o !== f.cache && ic(r, [Ze], i, !0),
            Ji(),
            (o = v.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: o, isDehydrated: !1, cache: v.cache }),
              (r.updateQueue.baseState = f),
              (r.memoizedState = f),
              r.flags & 256)
            ) {
              r = yg(n, r, o, i);
              break e;
            } else if (o !== h) {
              ((h = Yt(Error(a(424)), r)), Gi(h), (r = yg(n, r, o, i)));
              break e;
            } else
              for (
                n = r.stateNode.containerInfo,
                  n.nodeType === 9
                    ? (n = n.body)
                    : (n = n.nodeName === "HTML" ? n.ownerDocument.body : n),
                  He = en(n.firstChild),
                  dt = r,
                  _e = !0,
                  rr = null,
                  Zt = !0,
                  i = fp(r, null, o, i),
                  r.child = i;
                i;
              )
                ((i.flags = (i.flags & -3) | 4096), (i = i.sibling));
          else {
            if ((Xr(), o === h)) {
              r = Un(n, r, i);
              break e;
            }
            gt(n, r, o, i);
          }
          r = r.child;
        }
        return r;
      case 26:
        return (
          Ko(n, r),
          n === null
            ? (i = Mm(r.type, null, r.pendingProps, null))
              ? (r.memoizedState = i)
              : _e ||
                ((i = r.type),
                (n = r.pendingProps),
                (o = ul(ge.current).createElement(i)),
                (o[ft] = r),
                (o[Et] = n),
                mt(o, i, n),
                ot(o),
                (r.stateNode = o))
            : (r.memoizedState = Mm(r.type, n.memoizedProps, r.pendingProps, n.memoizedState)),
          null
        );
      case 27:
        return (
          wn(r),
          n === null &&
            _e &&
            ((o = r.stateNode = xm(r.type, r.pendingProps, ge.current)),
            (dt = r),
            (Zt = !0),
            (h = He),
            vr(r.type) ? ((Th = h), (He = en(o.firstChild))) : (He = h)),
          gt(n, r, r.pendingProps.children, i),
          Ko(n, r),
          n === null && (r.flags |= 4194304),
          r.child
        );
      case 5:
        return (
          n === null &&
            _e &&
            ((h = o = He) &&
              ((o = RS(o, r.type, r.pendingProps, Zt)),
              o !== null
                ? ((r.stateNode = o), (dt = r), (He = en(o.firstChild)), (Zt = !1), (h = !0))
                : (h = !1)),
            h || sr(r)),
          wn(r),
          (h = r.type),
          (f = r.pendingProps),
          (v = n !== null ? n.memoizedProps : null),
          (o = f.children),
          bh(h, f) ? (o = null) : v !== null && bh(h, v) && (r.flags |= 32),
          r.memoizedState !== null && ((h = vc(n, r, H_, null, null, i)), (ya._currentValue = h)),
          Ko(n, r),
          gt(n, r, o, i),
          r.child
        );
      case 6:
        return (
          n === null &&
            _e &&
            ((n = i = He) &&
              ((i = AS(i, r.pendingProps, Zt)),
              i !== null ? ((r.stateNode = i), (dt = r), (He = null), (n = !0)) : (n = !1)),
            n || sr(r)),
          null
        );
      case 13:
        return vg(n, r, i);
      case 4:
        return (
          Qe(r, r.stateNode.containerInfo),
          (o = r.pendingProps),
          n === null ? (r.child = rs(r, null, o, i)) : gt(n, r, o, i),
          r.child
        );
      case 11:
        return ug(n, r, r.type, r.pendingProps, i);
      case 7:
        return (gt(n, r, r.pendingProps, i), r.child);
      case 8:
        return (gt(n, r, r.pendingProps.children, i), r.child);
      case 12:
        return (gt(n, r, r.pendingProps.children, i), r.child);
      case 10:
        return ((o = r.pendingProps), ir(r, r.type, o.value), gt(n, r, o.children, i), r.child);
      case 9:
        return (
          (h = r.type._context),
          (o = r.pendingProps.children),
          Wr(r),
          (h = pt(h)),
          (o = o(h)),
          (r.flags |= 1),
          gt(n, r, o, i),
          r.child
        );
      case 14:
        return cg(n, r, r.type, r.pendingProps, i);
      case 15:
        return hg(n, r, r.type, r.pendingProps, i);
      case 19:
        return _g(n, r, i);
      case 31:
        return Q_(n, r, i);
      case 22:
        return fg(n, r, i, r.pendingProps);
      case 24:
        return (
          Wr(r),
          (o = pt(Ze)),
          n === null
            ? ((h = lc()),
              h === null &&
                ((h = Le),
                (f = ac()),
                (h.pooledCache = f),
                f.refCount++,
                f !== null && (h.pooledCacheLanes |= i),
                (h = f)),
              (r.memoizedState = { parent: o, cache: h }),
              cc(r),
              ir(r, Ze, h))
            : ((n.lanes & i) !== 0 && (hc(n, r), Xi(r, null, null, i), Ji()),
              (h = n.memoizedState),
              (f = r.memoizedState),
              h.parent !== o
                ? ((h = { parent: o, cache: o }),
                  (r.memoizedState = h),
                  r.lanes === 0 && (r.memoizedState = r.updateQueue.baseState = h),
                  ir(r, Ze, o))
                : ((o = f.cache), ir(r, Ze, o), o !== h.cache && ic(r, [Ze], i, !0))),
          gt(n, r, r.pendingProps.children, i),
          r.child
        );
      case 29:
        throw r.pendingProps;
    }
    throw Error(a(156, r.tag));
  }
  function Ln(n) {
    n.flags |= 4;
  }
  function Kc(n, r, i, o, h) {
    if (((r = (n.mode & 32) !== 0) && (r = !1), r)) {
      if (((n.flags |= 16777216), (h & 335544128) === h))
        if (n.stateNode.complete) n.flags |= 8192;
        else if (Qg()) n.flags |= 8192;
        else throw ((ns = jo), uc);
    } else n.flags &= -16777217;
  }
  function wg(n, r) {
    if (r.type !== "stylesheet" || (r.state.loading & 4) !== 0) n.flags &= -16777217;
    else if (((n.flags |= 16777216), !Pm(r)))
      if (Qg()) n.flags |= 8192;
      else throw ((ns = jo), uc);
  }
  function Qo(n, r) {
    (r !== null && (n.flags |= 4),
      n.flags & 16384 && ((r = n.tag !== 22 ? td() : 536870912), (n.lanes |= r), (Ws |= r)));
  }
  function ra(n, r) {
    if (!_e)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var i = null; r !== null; ) (r.alternate !== null && (i = r), (r = r.sibling));
          i === null ? (n.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = n.tail;
          for (var o = null; i !== null; ) (i.alternate !== null && (o = i), (i = i.sibling));
          o === null
            ? r || n.tail === null
              ? (n.tail = null)
              : (n.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function Ie(n) {
    var r = n.alternate !== null && n.alternate.child === n.child,
      i = 0,
      o = 0;
    if (r)
      for (var h = n.child; h !== null; )
        ((i |= h.lanes | h.childLanes),
          (o |= h.subtreeFlags & 65011712),
          (o |= h.flags & 65011712),
          (h.return = n),
          (h = h.sibling));
    else
      for (h = n.child; h !== null; )
        ((i |= h.lanes | h.childLanes),
          (o |= h.subtreeFlags),
          (o |= h.flags),
          (h.return = n),
          (h = h.sibling));
    return ((n.subtreeFlags |= o), (n.childLanes = i), r);
  }
  function J_(n, r, i) {
    var o = r.pendingProps;
    switch ((ec(r), r.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ie(r), null);
      case 1:
        return (Ie(r), null);
      case 3:
        return (
          (i = r.stateNode),
          (o = null),
          n !== null && (o = n.memoizedState.cache),
          r.memoizedState.cache !== o && (r.flags |= 2048),
          jn(Ze),
          Ue(),
          i.pendingContext && ((i.context = i.pendingContext), (i.pendingContext = null)),
          (n === null || n.child === null) &&
            (Hs(r)
              ? Ln(r)
              : n === null ||
                (n.memoizedState.isDehydrated && (r.flags & 256) === 0) ||
                ((r.flags |= 1024), nc())),
          Ie(r),
          null
        );
      case 26:
        var h = r.type,
          f = r.memoizedState;
        return (
          n === null
            ? (Ln(r), f !== null ? (Ie(r), wg(r, f)) : (Ie(r), Kc(r, h, null, o, i)))
            : f
              ? f !== n.memoizedState
                ? (Ln(r), Ie(r), wg(r, f))
                : (Ie(r), (r.flags &= -16777217))
              : ((n = n.memoizedProps), n !== o && Ln(r), Ie(r), Kc(r, h, n, o, i)),
          null
        );
      case 27:
        if ((En(r), (i = ge.current), (h = r.type), n !== null && r.stateNode != null))
          n.memoizedProps !== o && Ln(r);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(a(166));
            return (Ie(r), null);
          }
          ((n = ee.current), Hs(r) ? tp(r) : ((n = xm(h, o, i)), (r.stateNode = n), Ln(r)));
        }
        return (Ie(r), null);
      case 5:
        if ((En(r), (h = r.type), n !== null && r.stateNode != null))
          n.memoizedProps !== o && Ln(r);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(a(166));
            return (Ie(r), null);
          }
          if (((f = ee.current), Hs(r))) tp(r);
          else {
            var v = ul(ge.current);
            switch (f) {
              case 1:
                f = v.createElementNS("http://www.w3.org/2000/svg", h);
                break;
              case 2:
                f = v.createElementNS("http://www.w3.org/1998/Math/MathML", h);
                break;
              default:
                switch (h) {
                  case "svg":
                    f = v.createElementNS("http://www.w3.org/2000/svg", h);
                    break;
                  case "math":
                    f = v.createElementNS("http://www.w3.org/1998/Math/MathML", h);
                    break;
                  case "script":
                    ((f = v.createElement("div")),
                      (f.innerHTML = "<script><\/script>"),
                      (f = f.removeChild(f.firstChild)));
                    break;
                  case "select":
                    ((f =
                      typeof o.is == "string"
                        ? v.createElement("select", { is: o.is })
                        : v.createElement("select")),
                      o.multiple ? (f.multiple = !0) : o.size && (f.size = o.size));
                    break;
                  default:
                    f =
                      typeof o.is == "string"
                        ? v.createElement(h, { is: o.is })
                        : v.createElement(h);
                }
            }
            ((f[ft] = r), (f[Et] = o));
            e: for (v = r.child; v !== null; ) {
              if (v.tag === 5 || v.tag === 6) f.appendChild(v.stateNode);
              else if (v.tag !== 4 && v.tag !== 27 && v.child !== null) {
                ((v.child.return = v), (v = v.child));
                continue;
              }
              if (v === r) break e;
              for (; v.sibling === null; ) {
                if (v.return === null || v.return === r) break e;
                v = v.return;
              }
              ((v.sibling.return = v.return), (v = v.sibling));
            }
            r.stateNode = f;
            e: switch ((mt(f, h, o), h)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
            o && Ln(r);
          }
        }
        return (Ie(r), Kc(r, r.type, n === null ? null : n.memoizedProps, r.pendingProps, i), null);
      case 6:
        if (n && r.stateNode != null) n.memoizedProps !== o && Ln(r);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(a(166));
          if (((n = ge.current), Hs(r))) {
            if (((n = r.stateNode), (i = r.memoizedProps), (o = null), (h = dt), h !== null))
              switch (h.tag) {
                case 27:
                case 5:
                  o = h.memoizedProps;
              }
            ((n[ft] = r),
              (n = !!(
                n.nodeValue === i ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                vm(n.nodeValue, i)
              )),
              n || sr(r, !0));
          } else ((n = ul(n).createTextNode(o)), (n[ft] = r), (r.stateNode = n));
        }
        return (Ie(r), null);
      case 31:
        if (((i = r.memoizedState), n === null || n.memoizedState !== null)) {
          if (((o = Hs(r)), i !== null)) {
            if (n === null) {
              if (!o) throw Error(a(318));
              if (((n = r.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
                throw Error(a(557));
              n[ft] = r;
            } else (Xr(), (r.flags & 128) === 0 && (r.memoizedState = null), (r.flags |= 4));
            (Ie(r), (n = !1));
          } else
            ((i = nc()),
              n !== null && n.memoizedState !== null && (n.memoizedState.hydrationErrors = i),
              (n = !0));
          if (!n) return r.flags & 256 ? (Ht(r), r) : (Ht(r), null);
          if ((r.flags & 128) !== 0) throw Error(a(558));
        }
        return (Ie(r), null);
      case 13:
        if (
          ((o = r.memoizedState),
          n === null || (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
        ) {
          if (((h = Hs(r)), o !== null && o.dehydrated !== null)) {
            if (n === null) {
              if (!h) throw Error(a(318));
              if (((h = r.memoizedState), (h = h !== null ? h.dehydrated : null), !h))
                throw Error(a(317));
              h[ft] = r;
            } else (Xr(), (r.flags & 128) === 0 && (r.memoizedState = null), (r.flags |= 4));
            (Ie(r), (h = !1));
          } else
            ((h = nc()),
              n !== null && n.memoizedState !== null && (n.memoizedState.hydrationErrors = h),
              (h = !0));
          if (!h) return r.flags & 256 ? (Ht(r), r) : (Ht(r), null);
        }
        return (
          Ht(r),
          (r.flags & 128) !== 0
            ? ((r.lanes = i), r)
            : ((i = o !== null),
              (n = n !== null && n.memoizedState !== null),
              i &&
                ((o = r.child),
                (h = null),
                o.alternate !== null &&
                  o.alternate.memoizedState !== null &&
                  o.alternate.memoizedState.cachePool !== null &&
                  (h = o.alternate.memoizedState.cachePool.pool),
                (f = null),
                o.memoizedState !== null &&
                  o.memoizedState.cachePool !== null &&
                  (f = o.memoizedState.cachePool.pool),
                f !== h && (o.flags |= 2048)),
              i !== n && i && (r.child.flags |= 8192),
              Qo(r, r.updateQueue),
              Ie(r),
              null)
        );
      case 4:
        return (Ue(), n === null && ph(r.stateNode.containerInfo), Ie(r), null);
      case 10:
        return (jn(r.type), Ie(r), null);
      case 19:
        if ((V(Ye), (o = r.memoizedState), o === null)) return (Ie(r), null);
        if (((h = (r.flags & 128) !== 0), (f = o.rendering), f === null))
          if (h) ra(o, !1);
          else {
            if (Ve !== 0 || (n !== null && (n.flags & 128) !== 0))
              for (n = r.child; n !== null; ) {
                if (((f = Lo(n)), f !== null)) {
                  for (
                    r.flags |= 128,
                      ra(o, !1),
                      n = f.updateQueue,
                      r.updateQueue = n,
                      Qo(r, n),
                      r.subtreeFlags = 0,
                      n = i,
                      i = r.child;
                    i !== null;
                  )
                    (Jd(i, n), (i = i.sibling));
                  return (X(Ye, (Ye.current & 1) | 2), _e && xn(r, o.treeForkCount), r.child);
                }
                n = n.sibling;
              }
            o.tail !== null &&
              bt() > Wo &&
              ((r.flags |= 128), (h = !0), ra(o, !1), (r.lanes = 4194304));
          }
        else {
          if (!h)
            if (((n = Lo(f)), n !== null)) {
              if (
                ((r.flags |= 128),
                (h = !0),
                (n = n.updateQueue),
                (r.updateQueue = n),
                Qo(r, n),
                ra(o, !0),
                o.tail === null && o.tailMode === "hidden" && !f.alternate && !_e)
              )
                return (Ie(r), null);
            } else
              2 * bt() - o.renderingStartTime > Wo &&
                i !== 536870912 &&
                ((r.flags |= 128), (h = !0), ra(o, !1), (r.lanes = 4194304));
          o.isBackwards
            ? ((f.sibling = r.child), (r.child = f))
            : ((n = o.last), n !== null ? (n.sibling = f) : (r.child = f), (o.last = f));
        }
        return o.tail !== null
          ? ((n = o.tail),
            (o.rendering = n),
            (o.tail = n.sibling),
            (o.renderingStartTime = bt()),
            (n.sibling = null),
            (i = Ye.current),
            X(Ye, h ? (i & 1) | 2 : i & 1),
            _e && xn(r, o.treeForkCount),
            n)
          : (Ie(r), null);
      case 22:
      case 23:
        return (
          Ht(r),
          gc(),
          (o = r.memoizedState !== null),
          n !== null
            ? (n.memoizedState !== null) !== o && (r.flags |= 8192)
            : o && (r.flags |= 8192),
          o
            ? (i & 536870912) !== 0 &&
              (r.flags & 128) === 0 &&
              (Ie(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : Ie(r),
          (i = r.updateQueue),
          i !== null && Qo(r, i.retryQueue),
          (i = null),
          n !== null &&
            n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (i = n.memoizedState.cachePool.pool),
          (o = null),
          r.memoizedState !== null &&
            r.memoizedState.cachePool !== null &&
            (o = r.memoizedState.cachePool.pool),
          o !== i && (r.flags |= 2048),
          n !== null && V(es),
          null
        );
      case 24:
        return (
          (i = null),
          n !== null && (i = n.memoizedState.cache),
          r.memoizedState.cache !== i && (r.flags |= 2048),
          jn(Ze),
          Ie(r),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(a(156, r.tag));
  }
  function X_(n, r) {
    switch ((ec(r), r.tag)) {
      case 1:
        return ((n = r.flags), n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null);
      case 3:
        return (
          jn(Ze),
          Ue(),
          (n = r.flags),
          (n & 65536) !== 0 && (n & 128) === 0 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 26:
      case 27:
      case 5:
        return (En(r), null);
      case 31:
        if (r.memoizedState !== null) {
          if ((Ht(r), r.alternate === null)) throw Error(a(340));
          Xr();
        }
        return ((n = r.flags), n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null);
      case 13:
        if ((Ht(r), (n = r.memoizedState), n !== null && n.dehydrated !== null)) {
          if (r.alternate === null) throw Error(a(340));
          Xr();
        }
        return ((n = r.flags), n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null);
      case 19:
        return (V(Ye), null);
      case 4:
        return (Ue(), null);
      case 10:
        return (jn(r.type), null);
      case 22:
      case 23:
        return (
          Ht(r),
          gc(),
          n !== null && V(es),
          (n = r.flags),
          n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 24:
        return (jn(Ze), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Eg(n, r) {
    switch ((ec(r), r.tag)) {
      case 3:
        (jn(Ze), Ue());
        break;
      case 26:
      case 27:
      case 5:
        En(r);
        break;
      case 4:
        Ue();
        break;
      case 31:
        r.memoizedState !== null && Ht(r);
        break;
      case 13:
        Ht(r);
        break;
      case 19:
        V(Ye);
        break;
      case 10:
        jn(r.type);
        break;
      case 22:
      case 23:
        (Ht(r), gc(), n !== null && V(es));
        break;
      case 24:
        jn(Ze);
    }
  }
  function sa(n, r) {
    try {
      var i = r.updateQueue,
        o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var h = o.next;
        i = h;
        do {
          if ((i.tag & n) === n) {
            o = void 0;
            var f = i.create,
              v = i.inst;
            ((o = f()), (v.destroy = o));
          }
          i = i.next;
        } while (i !== h);
      }
    } catch (S) {
      ke(r, r.return, S);
    }
  }
  function hr(n, r, i) {
    try {
      var o = r.updateQueue,
        h = o !== null ? o.lastEffect : null;
      if (h !== null) {
        var f = h.next;
        o = f;
        do {
          if ((o.tag & n) === n) {
            var v = o.inst,
              S = v.destroy;
            if (S !== void 0) {
              ((v.destroy = void 0), (h = r));
              var C = i,
                N = S;
              try {
                N();
              } catch (I) {
                ke(h, C, I);
              }
            }
          }
          o = o.next;
        } while (o !== f);
      }
    } catch (I) {
      ke(r, r.return, I);
    }
  }
  function Tg(n) {
    var r = n.updateQueue;
    if (r !== null) {
      var i = n.stateNode;
      try {
        pp(r, i);
      } catch (o) {
        ke(n, n.return, o);
      }
    }
  }
  function Rg(n, r, i) {
    ((i.props = is(n.type, n.memoizedProps)), (i.state = n.memoizedState));
    try {
      i.componentWillUnmount();
    } catch (o) {
      ke(n, r, o);
    }
  }
  function ia(n, r) {
    try {
      var i = n.ref;
      if (i !== null) {
        switch (n.tag) {
          case 26:
          case 27:
          case 5:
            var o = n.stateNode;
            break;
          case 30:
            o = n.stateNode;
            break;
          default:
            o = n.stateNode;
        }
        typeof i == "function" ? (n.refCleanup = i(o)) : (i.current = o);
      }
    } catch (h) {
      ke(n, r, h);
    }
  }
  function gn(n, r) {
    var i = n.ref,
      o = n.refCleanup;
    if (i !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (h) {
          ke(n, r, h);
        } finally {
          ((n.refCleanup = null), (n = n.alternate), n != null && (n.refCleanup = null));
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (h) {
          ke(n, r, h);
        }
      else i.current = null;
  }
  function Ag(n) {
    var r = n.type,
      i = n.memoizedProps,
      o = n.stateNode;
    try {
      e: switch (r) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && o.focus();
          break e;
        case "img":
          i.src ? (o.src = i.src) : i.srcSet && (o.srcset = i.srcSet);
      }
    } catch (h) {
      ke(n, n.return, h);
    }
  }
  function Fc(n, r, i) {
    try {
      var o = n.stateNode;
      (bS(o, n.type, i, r), (o[Et] = r));
    } catch (h) {
      ke(n, n.return, h);
    }
  }
  function Og(n) {
    return (
      n.tag === 5 || n.tag === 3 || n.tag === 26 || (n.tag === 27 && vr(n.type)) || n.tag === 4
    );
  }
  function Qc(n) {
    e: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || Og(n.return)) return null;
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;
      ) {
        if ((n.tag === 27 && vr(n.type)) || n.flags & 2 || n.child === null || n.tag === 4)
          continue e;
        ((n.child.return = n), (n = n.child));
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Yc(n, r, i) {
    var o = n.tag;
    if (o === 5 || o === 6)
      ((n = n.stateNode),
        r
          ? (i.nodeType === 9
              ? i.body
              : i.nodeName === "HTML"
                ? i.ownerDocument.body
                : i
            ).insertBefore(n, r)
          : ((r = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i),
            r.appendChild(n),
            (i = i._reactRootContainer),
            i != null || r.onclick !== null || (r.onclick = An)));
    else if (
      o !== 4 &&
      (o === 27 && vr(n.type) && ((i = n.stateNode), (r = null)), (n = n.child), n !== null)
    )
      for (Yc(n, r, i), n = n.sibling; n !== null; ) (Yc(n, r, i), (n = n.sibling));
  }
  function Yo(n, r, i) {
    var o = n.tag;
    if (o === 5 || o === 6) ((n = n.stateNode), r ? i.insertBefore(n, r) : i.appendChild(n));
    else if (o !== 4 && (o === 27 && vr(n.type) && (i = n.stateNode), (n = n.child), n !== null))
      for (Yo(n, r, i), n = n.sibling; n !== null; ) (Yo(n, r, i), (n = n.sibling));
  }
  function Cg(n) {
    var r = n.stateNode,
      i = n.memoizedProps;
    try {
      for (var o = n.type, h = r.attributes; h.length; ) r.removeAttributeNode(h[0]);
      (mt(r, o, i), (r[ft] = n), (r[Et] = i));
    } catch (f) {
      ke(n, n.return, f);
    }
  }
  var Nn = !1,
    tt = !1,
    Jc = !1,
    xg = typeof WeakSet == "function" ? WeakSet : Set,
    lt = null;
  function Z_(n, r) {
    if (((n = n.containerInfo), (yh = ml), (n = Id(n)), $u(n))) {
      if ("selectionStart" in n) var i = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          i = ((i = n.ownerDocument) && i.defaultView) || window;
          var o = i.getSelection && i.getSelection();
          if (o && o.rangeCount !== 0) {
            i = o.anchorNode;
            var h = o.anchorOffset,
              f = o.focusNode;
            o = o.focusOffset;
            try {
              (i.nodeType, f.nodeType);
            } catch {
              i = null;
              break e;
            }
            var v = 0,
              S = -1,
              C = -1,
              N = 0,
              I = 0,
              K = n,
              P = null;
            t: for (;;) {
              for (
                var z;
                K !== i || (h !== 0 && K.nodeType !== 3) || (S = v + h),
                  K !== f || (o !== 0 && K.nodeType !== 3) || (C = v + o),
                  K.nodeType === 3 && (v += K.nodeValue.length),
                  (z = K.firstChild) !== null;
              )
                ((P = K), (K = z));
              for (;;) {
                if (K === n) break t;
                if (
                  (P === i && ++N === h && (S = v),
                  P === f && ++I === o && (C = v),
                  (z = K.nextSibling) !== null)
                )
                  break;
                ((K = P), (P = K.parentNode));
              }
              K = z;
            }
            i = S === -1 || C === -1 ? null : { start: S, end: C };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (vh = { focusedElem: n, selectionRange: i }, ml = !1, lt = r; lt !== null; )
      if (((r = lt), (n = r.child), (r.subtreeFlags & 1028) !== 0 && n !== null))
        ((n.return = r), (lt = n));
      else
        for (; lt !== null; ) {
          switch (((r = lt), (f = r.alternate), (n = r.flags), r.tag)) {
            case 0:
              if (
                (n & 4) !== 0 &&
                ((n = r.updateQueue), (n = n !== null ? n.events : null), n !== null)
              )
                for (i = 0; i < n.length; i++) ((h = n[i]), (h.ref.impl = h.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((n & 1024) !== 0 && f !== null) {
                ((n = void 0),
                  (i = r),
                  (h = f.memoizedProps),
                  (f = f.memoizedState),
                  (o = i.stateNode));
                try {
                  var te = is(i.type, h);
                  ((n = o.getSnapshotBeforeUpdate(te, f)),
                    (o.__reactInternalSnapshotBeforeUpdate = n));
                } catch (ue) {
                  ke(i, i.return, ue);
                }
              }
              break;
            case 3:
              if ((n & 1024) !== 0) {
                if (((n = r.stateNode.containerInfo), (i = n.nodeType), i === 9)) Sh(n);
                else if (i === 1)
                  switch (n.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Sh(n);
                      break;
                    default:
                      n.textContent = "";
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
              if ((n & 1024) !== 0) throw Error(a(163));
          }
          if (((n = r.sibling), n !== null)) {
            ((n.return = r.return), (lt = n));
            break;
          }
          lt = r.return;
        }
  }
  function kg(n, r, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        (zn(n, i), o & 4 && sa(5, i));
        break;
      case 1:
        if ((zn(n, i), o & 4))
          if (((n = i.stateNode), r === null))
            try {
              n.componentDidMount();
            } catch (v) {
              ke(i, i.return, v);
            }
          else {
            var h = is(i.type, r.memoizedProps);
            r = r.memoizedState;
            try {
              n.componentDidUpdate(h, r, n.__reactInternalSnapshotBeforeUpdate);
            } catch (v) {
              ke(i, i.return, v);
            }
          }
        (o & 64 && Tg(i), o & 512 && ia(i, i.return));
        break;
      case 3:
        if ((zn(n, i), o & 64 && ((n = i.updateQueue), n !== null))) {
          if (((r = null), i.child !== null))
            switch (i.child.tag) {
              case 27:
              case 5:
                r = i.child.stateNode;
                break;
              case 1:
                r = i.child.stateNode;
            }
          try {
            pp(n, r);
          } catch (v) {
            ke(i, i.return, v);
          }
        }
        break;
      case 27:
        r === null && o & 4 && Cg(i);
      case 26:
      case 5:
        (zn(n, i), r === null && o & 4 && Ag(i), o & 512 && ia(i, i.return));
        break;
      case 12:
        zn(n, i);
        break;
      case 31:
        (zn(n, i), o & 4 && Dg(n, i));
        break;
      case 13:
        (zn(n, i),
          o & 4 && Ug(n, i),
          o & 64 &&
            ((n = i.memoizedState),
            n !== null && ((n = n.dehydrated), n !== null && ((i = oS.bind(null, i)), OS(n, i)))));
        break;
      case 22:
        if (((o = i.memoizedState !== null || Nn), !o)) {
          ((r = (r !== null && r.memoizedState !== null) || tt), (h = Nn));
          var f = tt;
          ((Nn = o),
            (tt = r) && !f ? Bn(n, i, (i.subtreeFlags & 8772) !== 0) : zn(n, i),
            (Nn = h),
            (tt = f));
        }
        break;
      case 30:
        break;
      default:
        zn(n, i);
    }
  }
  function jg(n) {
    var r = n.alternate;
    (r !== null && ((n.alternate = null), jg(r)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 && ((r = n.stateNode), r !== null && Au(r)),
      (n.stateNode = null),
      (n.return = null),
      (n.dependencies = null),
      (n.memoizedProps = null),
      (n.memoizedState = null),
      (n.pendingProps = null),
      (n.stateNode = null),
      (n.updateQueue = null));
  }
  var qe = null,
    Rt = !1;
  function Pn(n, r, i) {
    for (i = i.child; i !== null; ) (Mg(n, r, i), (i = i.sibling));
  }
  function Mg(n, r, i) {
    if (Lt && typeof Lt.onCommitFiberUnmount == "function")
      try {
        Lt.onCommitFiberUnmount(xi, i);
      } catch {}
    switch (i.tag) {
      case 26:
        (tt || gn(i, r),
          Pn(n, r, i),
          i.memoizedState
            ? i.memoizedState.count--
            : i.stateNode && ((i = i.stateNode), i.parentNode.removeChild(i)));
        break;
      case 27:
        tt || gn(i, r);
        var o = qe,
          h = Rt;
        (vr(i.type) && ((qe = i.stateNode), (Rt = !1)),
          Pn(n, r, i),
          pa(i.stateNode),
          (qe = o),
          (Rt = h));
        break;
      case 5:
        tt || gn(i, r);
      case 6:
        if (((o = qe), (h = Rt), (qe = null), Pn(n, r, i), (qe = o), (Rt = h), qe !== null))
          if (Rt)
            try {
              (qe.nodeType === 9
                ? qe.body
                : qe.nodeName === "HTML"
                  ? qe.ownerDocument.body
                  : qe
              ).removeChild(i.stateNode);
            } catch (f) {
              ke(i, r, f);
            }
          else
            try {
              qe.removeChild(i.stateNode);
            } catch (f) {
              ke(i, r, f);
            }
        break;
      case 18:
        qe !== null &&
          (Rt
            ? ((n = qe),
              Tm(
                n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
                i.stateNode,
              ),
              oi(n))
            : Tm(qe, i.stateNode));
        break;
      case 4:
        ((o = qe),
          (h = Rt),
          (qe = i.stateNode.containerInfo),
          (Rt = !0),
          Pn(n, r, i),
          (qe = o),
          (Rt = h));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (hr(2, i, r), tt || hr(4, i, r), Pn(n, r, i));
        break;
      case 1:
        (tt ||
          (gn(i, r), (o = i.stateNode), typeof o.componentWillUnmount == "function" && Rg(i, r, o)),
          Pn(n, r, i));
        break;
      case 21:
        Pn(n, r, i);
        break;
      case 22:
        ((tt = (o = tt) || i.memoizedState !== null), Pn(n, r, i), (tt = o));
        break;
      default:
        Pn(n, r, i);
    }
  }
  function Dg(n, r) {
    if (
      r.memoizedState === null &&
      ((n = r.alternate), n !== null && ((n = n.memoizedState), n !== null))
    ) {
      n = n.dehydrated;
      try {
        oi(n);
      } catch (i) {
        ke(r, r.return, i);
      }
    }
  }
  function Ug(n, r) {
    if (
      r.memoizedState === null &&
      ((n = r.alternate),
      n !== null && ((n = n.memoizedState), n !== null && ((n = n.dehydrated), n !== null)))
    )
      try {
        oi(n);
      } catch (i) {
        ke(r, r.return, i);
      }
  }
  function W_(n) {
    switch (n.tag) {
      case 31:
      case 13:
      case 19:
        var r = n.stateNode;
        return (r === null && (r = n.stateNode = new xg()), r);
      case 22:
        return (
          (n = n.stateNode),
          (r = n._retryCache),
          r === null && (r = n._retryCache = new xg()),
          r
        );
      default:
        throw Error(a(435, n.tag));
    }
  }
  function Jo(n, r) {
    var i = W_(n);
    r.forEach(function (o) {
      if (!i.has(o)) {
        i.add(o);
        var h = lS.bind(null, n, o);
        o.then(h, h);
      }
    });
  }
  function At(n, r) {
    var i = r.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var h = i[o],
          f = n,
          v = r,
          S = v;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (vr(S.type)) {
                ((qe = S.stateNode), (Rt = !1));
                break e;
              }
              break;
            case 5:
              ((qe = S.stateNode), (Rt = !1));
              break e;
            case 3:
            case 4:
              ((qe = S.stateNode.containerInfo), (Rt = !0));
              break e;
          }
          S = S.return;
        }
        if (qe === null) throw Error(a(160));
        (Mg(f, v, h),
          (qe = null),
          (Rt = !1),
          (f = h.alternate),
          f !== null && (f.return = null),
          (h.return = null));
      }
    if (r.subtreeFlags & 13886) for (r = r.child; r !== null; ) (Lg(r, n), (r = r.sibling));
  }
  var an = null;
  function Lg(n, r) {
    var i = n.alternate,
      o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (At(r, n), Ot(n), o & 4 && (hr(3, n, n.return), sa(3, n), hr(5, n, n.return)));
        break;
      case 1:
        (At(r, n),
          Ot(n),
          o & 512 && (tt || i === null || gn(i, i.return)),
          o & 64 &&
            Nn &&
            ((n = n.updateQueue),
            n !== null &&
              ((o = n.callbacks),
              o !== null &&
                ((i = n.shared.hiddenCallbacks),
                (n.shared.hiddenCallbacks = i === null ? o : i.concat(o))))));
        break;
      case 26:
        var h = an;
        if ((At(r, n), Ot(n), o & 512 && (tt || i === null || gn(i, i.return)), o & 4)) {
          var f = i !== null ? i.memoizedState : null;
          if (((o = n.memoizedState), i === null))
            if (o === null)
              if (n.stateNode === null) {
                e: {
                  ((o = n.type), (i = n.memoizedProps), (h = h.ownerDocument || h));
                  t: switch (o) {
                    case "title":
                      ((f = h.getElementsByTagName("title")[0]),
                        (!f ||
                          f[Mi] ||
                          f[ft] ||
                          f.namespaceURI === "http://www.w3.org/2000/svg" ||
                          f.hasAttribute("itemprop")) &&
                          ((f = h.createElement(o)),
                          h.head.insertBefore(f, h.querySelector("head > title"))),
                        mt(f, o, i),
                        (f[ft] = n),
                        ot(f),
                        (o = f));
                      break e;
                    case "link":
                      var v = Lm("link", "href", h).get(o + (i.href || ""));
                      if (v) {
                        for (var S = 0; S < v.length; S++)
                          if (
                            ((f = v[S]),
                            f.getAttribute("href") ===
                              (i.href == null || i.href === "" ? null : i.href) &&
                              f.getAttribute("rel") === (i.rel == null ? null : i.rel) &&
                              f.getAttribute("title") === (i.title == null ? null : i.title) &&
                              f.getAttribute("crossorigin") ===
                                (i.crossOrigin == null ? null : i.crossOrigin))
                          ) {
                            v.splice(S, 1);
                            break t;
                          }
                      }
                      ((f = h.createElement(o)), mt(f, o, i), h.head.appendChild(f));
                      break;
                    case "meta":
                      if ((v = Lm("meta", "content", h).get(o + (i.content || "")))) {
                        for (S = 0; S < v.length; S++)
                          if (
                            ((f = v[S]),
                            f.getAttribute("content") ===
                              (i.content == null ? null : "" + i.content) &&
                              f.getAttribute("name") === (i.name == null ? null : i.name) &&
                              f.getAttribute("property") ===
                                (i.property == null ? null : i.property) &&
                              f.getAttribute("http-equiv") ===
                                (i.httpEquiv == null ? null : i.httpEquiv) &&
                              f.getAttribute("charset") === (i.charSet == null ? null : i.charSet))
                          ) {
                            v.splice(S, 1);
                            break t;
                          }
                      }
                      ((f = h.createElement(o)), mt(f, o, i), h.head.appendChild(f));
                      break;
                    default:
                      throw Error(a(468, o));
                  }
                  ((f[ft] = n), ot(f), (o = f));
                }
                n.stateNode = o;
              } else Nm(h, n.type, n.stateNode);
            else n.stateNode = Um(h, o, n.memoizedProps);
          else
            f !== o
              ? (f === null
                  ? i.stateNode !== null && ((i = i.stateNode), i.parentNode.removeChild(i))
                  : f.count--,
                o === null ? Nm(h, n.type, n.stateNode) : Um(h, o, n.memoizedProps))
              : o === null && n.stateNode !== null && Fc(n, n.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        (At(r, n),
          Ot(n),
          o & 512 && (tt || i === null || gn(i, i.return)),
          i !== null && o & 4 && Fc(n, n.memoizedProps, i.memoizedProps));
        break;
      case 5:
        if ((At(r, n), Ot(n), o & 512 && (tt || i === null || gn(i, i.return)), n.flags & 32)) {
          h = n.stateNode;
          try {
            ks(h, "");
          } catch (te) {
            ke(n, n.return, te);
          }
        }
        (o & 4 &&
          n.stateNode != null &&
          ((h = n.memoizedProps), Fc(n, h, i !== null ? i.memoizedProps : h)),
          o & 1024 && (Jc = !0));
        break;
      case 6:
        if ((At(r, n), Ot(n), o & 4)) {
          if (n.stateNode === null) throw Error(a(162));
          ((o = n.memoizedProps), (i = n.stateNode));
          try {
            i.nodeValue = o;
          } catch (te) {
            ke(n, n.return, te);
          }
        }
        break;
      case 3:
        if (
          ((fl = null),
          (h = an),
          (an = cl(r.containerInfo)),
          At(r, n),
          (an = h),
          Ot(n),
          o & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            oi(r.containerInfo);
          } catch (te) {
            ke(n, n.return, te);
          }
        Jc && ((Jc = !1), Ng(n));
        break;
      case 4:
        ((o = an), (an = cl(n.stateNode.containerInfo)), At(r, n), Ot(n), (an = o));
        break;
      case 12:
        (At(r, n), Ot(n));
        break;
      case 31:
        (At(r, n),
          Ot(n),
          o & 4 && ((o = n.updateQueue), o !== null && ((n.updateQueue = null), Jo(n, o))));
        break;
      case 13:
        (At(r, n),
          Ot(n),
          n.child.flags & 8192 &&
            (n.memoizedState !== null) != (i !== null && i.memoizedState !== null) &&
            (Zo = bt()),
          o & 4 && ((o = n.updateQueue), o !== null && ((n.updateQueue = null), Jo(n, o))));
        break;
      case 22:
        h = n.memoizedState !== null;
        var C = i !== null && i.memoizedState !== null,
          N = Nn,
          I = tt;
        if (((Nn = N || h), (tt = I || C), At(r, n), (tt = I), (Nn = N), Ot(n), o & 8192))
          e: for (
            r = n.stateNode,
              r._visibility = h ? r._visibility & -2 : r._visibility | 1,
              h && (i === null || C || Nn || tt || as(n)),
              i = null,
              r = n;
            ;
          ) {
            if (r.tag === 5 || r.tag === 26) {
              if (i === null) {
                C = i = r;
                try {
                  if (((f = C.stateNode), h))
                    ((v = f.style),
                      typeof v.setProperty == "function"
                        ? v.setProperty("display", "none", "important")
                        : (v.display = "none"));
                  else {
                    S = C.stateNode;
                    var K = C.memoizedProps.style,
                      P = K != null && K.hasOwnProperty("display") ? K.display : null;
                    S.style.display = P == null || typeof P == "boolean" ? "" : ("" + P).trim();
                  }
                } catch (te) {
                  ke(C, C.return, te);
                }
              }
            } else if (r.tag === 6) {
              if (i === null) {
                C = r;
                try {
                  C.stateNode.nodeValue = h ? "" : C.memoizedProps;
                } catch (te) {
                  ke(C, C.return, te);
                }
              }
            } else if (r.tag === 18) {
              if (i === null) {
                C = r;
                try {
                  var z = C.stateNode;
                  h ? Rm(z, !0) : Rm(C.stateNode, !1);
                } catch (te) {
                  ke(C, C.return, te);
                }
              }
            } else if (
              ((r.tag !== 22 && r.tag !== 23) || r.memoizedState === null || r === n) &&
              r.child !== null
            ) {
              ((r.child.return = r), (r = r.child));
              continue;
            }
            if (r === n) break e;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === n) break e;
              (i === r && (i = null), (r = r.return));
            }
            (i === r && (i = null), (r.sibling.return = r.return), (r = r.sibling));
          }
        o & 4 &&
          ((o = n.updateQueue),
          o !== null && ((i = o.retryQueue), i !== null && ((o.retryQueue = null), Jo(n, i))));
        break;
      case 19:
        (At(r, n),
          Ot(n),
          o & 4 && ((o = n.updateQueue), o !== null && ((n.updateQueue = null), Jo(n, o))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (At(r, n), Ot(n));
    }
  }
  function Ot(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        for (var i, o = n.return; o !== null; ) {
          if (Og(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(a(160));
        switch (i.tag) {
          case 27:
            var h = i.stateNode,
              f = Qc(n);
            Yo(n, f, h);
            break;
          case 5:
            var v = i.stateNode;
            i.flags & 32 && (ks(v, ""), (i.flags &= -33));
            var S = Qc(n);
            Yo(n, S, v);
            break;
          case 3:
          case 4:
            var C = i.stateNode.containerInfo,
              N = Qc(n);
            Yc(n, N, C);
            break;
          default:
            throw Error(a(161));
        }
      } catch (I) {
        ke(n, n.return, I);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ng(n) {
    if (n.subtreeFlags & 1024)
      for (n = n.child; n !== null; ) {
        var r = n;
        (Ng(r), r.tag === 5 && r.flags & 1024 && r.stateNode.reset(), (n = n.sibling));
      }
  }
  function zn(n, r) {
    if (r.subtreeFlags & 8772)
      for (r = r.child; r !== null; ) (kg(n, r.alternate, r), (r = r.sibling));
  }
  function as(n) {
    for (n = n.child; n !== null; ) {
      var r = n;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (hr(4, r, r.return), as(r));
          break;
        case 1:
          gn(r, r.return);
          var i = r.stateNode;
          (typeof i.componentWillUnmount == "function" && Rg(r, r.return, i), as(r));
          break;
        case 27:
          pa(r.stateNode);
        case 26:
        case 5:
          (gn(r, r.return), as(r));
          break;
        case 22:
          r.memoizedState === null && as(r);
          break;
        case 30:
          as(r);
          break;
        default:
          as(r);
      }
      n = n.sibling;
    }
  }
  function Bn(n, r, i) {
    for (i = i && (r.subtreeFlags & 8772) !== 0, r = r.child; r !== null; ) {
      var o = r.alternate,
        h = n,
        f = r,
        v = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (Bn(h, f, i), sa(4, f));
          break;
        case 1:
          if ((Bn(h, f, i), (o = f), (h = o.stateNode), typeof h.componentDidMount == "function"))
            try {
              h.componentDidMount();
            } catch (N) {
              ke(o, o.return, N);
            }
          if (((o = f), (h = o.updateQueue), h !== null)) {
            var S = o.stateNode;
            try {
              var C = h.shared.hiddenCallbacks;
              if (C !== null)
                for (h.shared.hiddenCallbacks = null, h = 0; h < C.length; h++) dp(C[h], S);
            } catch (N) {
              ke(o, o.return, N);
            }
          }
          (i && v & 64 && Tg(f), ia(f, f.return));
          break;
        case 27:
          Cg(f);
        case 26:
        case 5:
          (Bn(h, f, i), i && o === null && v & 4 && Ag(f), ia(f, f.return));
          break;
        case 12:
          Bn(h, f, i);
          break;
        case 31:
          (Bn(h, f, i), i && v & 4 && Dg(h, f));
          break;
        case 13:
          (Bn(h, f, i), i && v & 4 && Ug(h, f));
          break;
        case 22:
          (f.memoizedState === null && Bn(h, f, i), ia(f, f.return));
          break;
        case 30:
          break;
        default:
          Bn(h, f, i);
      }
      r = r.sibling;
    }
  }
  function Xc(n, r) {
    var i = null;
    (n !== null &&
      n.memoizedState !== null &&
      n.memoizedState.cachePool !== null &&
      (i = n.memoizedState.cachePool.pool),
      (n = null),
      r.memoizedState !== null &&
        r.memoizedState.cachePool !== null &&
        (n = r.memoizedState.cachePool.pool),
      n !== i && (n != null && n.refCount++, i != null && Vi(i)));
  }
  function Zc(n, r) {
    ((n = null),
      r.alternate !== null && (n = r.alternate.memoizedState.cache),
      (r = r.memoizedState.cache),
      r !== n && (r.refCount++, n != null && Vi(n)));
  }
  function on(n, r, i, o) {
    if (r.subtreeFlags & 10256) for (r = r.child; r !== null; ) (Pg(n, r, i, o), (r = r.sibling));
  }
  function Pg(n, r, i, o) {
    var h = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        (on(n, r, i, o), h & 2048 && sa(9, r));
        break;
      case 1:
        on(n, r, i, o);
        break;
      case 3:
        (on(n, r, i, o),
          h & 2048 &&
            ((n = null),
            r.alternate !== null && (n = r.alternate.memoizedState.cache),
            (r = r.memoizedState.cache),
            r !== n && (r.refCount++, n != null && Vi(n))));
        break;
      case 12:
        if (h & 2048) {
          (on(n, r, i, o), (n = r.stateNode));
          try {
            var f = r.memoizedProps,
              v = f.id,
              S = f.onPostCommit;
            typeof S == "function" &&
              S(v, r.alternate === null ? "mount" : "update", n.passiveEffectDuration, -0);
          } catch (C) {
            ke(r, r.return, C);
          }
        } else on(n, r, i, o);
        break;
      case 31:
        on(n, r, i, o);
        break;
      case 13:
        on(n, r, i, o);
        break;
      case 23:
        break;
      case 22:
        ((f = r.stateNode),
          (v = r.alternate),
          r.memoizedState !== null
            ? f._visibility & 2
              ? on(n, r, i, o)
              : aa(n, r)
            : f._visibility & 2
              ? on(n, r, i, o)
              : ((f._visibility |= 2), Js(n, r, i, o, (r.subtreeFlags & 10256) !== 0 || !1)),
          h & 2048 && Xc(v, r));
        break;
      case 24:
        (on(n, r, i, o), h & 2048 && Zc(r.alternate, r));
        break;
      default:
        on(n, r, i, o);
    }
  }
  function Js(n, r, i, o, h) {
    for (h = h && ((r.subtreeFlags & 10256) !== 0 || !1), r = r.child; r !== null; ) {
      var f = n,
        v = r,
        S = i,
        C = o,
        N = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          (Js(f, v, S, C, h), sa(8, v));
          break;
        case 23:
          break;
        case 22:
          var I = v.stateNode;
          (v.memoizedState !== null
            ? I._visibility & 2
              ? Js(f, v, S, C, h)
              : aa(f, v)
            : ((I._visibility |= 2), Js(f, v, S, C, h)),
            h && N & 2048 && Xc(v.alternate, v));
          break;
        case 24:
          (Js(f, v, S, C, h), h && N & 2048 && Zc(v.alternate, v));
          break;
        default:
          Js(f, v, S, C, h);
      }
      r = r.sibling;
    }
  }
  function aa(n, r) {
    if (r.subtreeFlags & 10256)
      for (r = r.child; r !== null; ) {
        var i = n,
          o = r,
          h = o.flags;
        switch (o.tag) {
          case 22:
            (aa(i, o), h & 2048 && Xc(o.alternate, o));
            break;
          case 24:
            (aa(i, o), h & 2048 && Zc(o.alternate, o));
            break;
          default:
            aa(i, o);
        }
        r = r.sibling;
      }
  }
  var oa = 8192;
  function Xs(n, r, i) {
    if (n.subtreeFlags & oa) for (n = n.child; n !== null; ) (zg(n, r, i), (n = n.sibling));
  }
  function zg(n, r, i) {
    switch (n.tag) {
      case 26:
        (Xs(n, r, i),
          n.flags & oa && n.memoizedState !== null && BS(i, an, n.memoizedState, n.memoizedProps));
        break;
      case 5:
        Xs(n, r, i);
        break;
      case 3:
      case 4:
        var o = an;
        ((an = cl(n.stateNode.containerInfo)), Xs(n, r, i), (an = o));
        break;
      case 22:
        n.memoizedState === null &&
          ((o = n.alternate),
          o !== null && o.memoizedState !== null
            ? ((o = oa), (oa = 16777216), Xs(n, r, i), (oa = o))
            : Xs(n, r, i));
        break;
      default:
        Xs(n, r, i);
    }
  }
  function Bg(n) {
    var r = n.alternate;
    if (r !== null && ((n = r.child), n !== null)) {
      r.child = null;
      do ((r = n.sibling), (n.sibling = null), (n = r));
      while (n !== null);
    }
  }
  function la(n) {
    var r = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (r !== null)
        for (var i = 0; i < r.length; i++) {
          var o = r[i];
          ((lt = o), Ig(o, n));
        }
      Bg(n);
    }
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) (Hg(n), (n = n.sibling));
  }
  function Hg(n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (la(n), n.flags & 2048 && hr(9, n, n.return));
        break;
      case 3:
        la(n);
        break;
      case 12:
        la(n);
        break;
      case 22:
        var r = n.stateNode;
        n.memoizedState !== null && r._visibility & 2 && (n.return === null || n.return.tag !== 13)
          ? ((r._visibility &= -3), Xo(n))
          : la(n);
        break;
      default:
        la(n);
    }
  }
  function Xo(n) {
    var r = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (r !== null)
        for (var i = 0; i < r.length; i++) {
          var o = r[i];
          ((lt = o), Ig(o, n));
        }
      Bg(n);
    }
    for (n = n.child; n !== null; ) {
      switch (((r = n), r.tag)) {
        case 0:
        case 11:
        case 15:
          (hr(8, r, r.return), Xo(r));
          break;
        case 22:
          ((i = r.stateNode), i._visibility & 2 && ((i._visibility &= -3), Xo(r)));
          break;
        default:
          Xo(r);
      }
      n = n.sibling;
    }
  }
  function Ig(n, r) {
    for (; lt !== null; ) {
      var i = lt;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          hr(8, i, r);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var o = i.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Vi(i.memoizedState.cache);
      }
      if (((o = i.child), o !== null)) ((o.return = i), (lt = o));
      else
        e: for (i = n; lt !== null; ) {
          o = lt;
          var h = o.sibling,
            f = o.return;
          if ((jg(o), o === i)) {
            lt = null;
            break e;
          }
          if (h !== null) {
            ((h.return = f), (lt = h));
            break e;
          }
          lt = f;
        }
    }
  }
  var eS = {
      getCacheForType: function (n) {
        var r = pt(Ze),
          i = r.data.get(n);
        return (i === void 0 && ((i = n()), r.data.set(n, i)), i);
      },
      cacheSignal: function () {
        return pt(Ze).controller.signal;
      },
    },
    tS = typeof WeakMap == "function" ? WeakMap : Map,
    Oe = 0,
    Le = null,
    me = null,
    ve = 0,
    xe = 0,
    It = null,
    fr = !1,
    Zs = !1,
    Wc = !1,
    Hn = 0,
    Ve = 0,
    dr = 0,
    os = 0,
    eh = 0,
    qt = 0,
    Ws = 0,
    ua = null,
    Ct = null,
    th = !1,
    Zo = 0,
    qg = 0,
    Wo = 1 / 0,
    el = null,
    pr = null,
    rt = 0,
    gr = null,
    ei = null,
    In = 0,
    nh = 0,
    rh = null,
    $g = null,
    ca = 0,
    sh = null;
  function $t() {
    return (Oe & 2) !== 0 && ve !== 0 ? ve & -ve : H.T !== null ? ch() : id();
  }
  function Gg() {
    if (qt === 0)
      if ((ve & 536870912) === 0 || _e) {
        var n = oo;
        ((oo <<= 1), (oo & 3932160) === 0 && (oo = 262144), (qt = n));
      } else qt = 536870912;
    return ((n = Bt.current), n !== null && (n.flags |= 32), qt);
  }
  function xt(n, r, i) {
    (((n === Le && (xe === 2 || xe === 9)) || n.cancelPendingCommit !== null) &&
      (ti(n, 0), mr(n, ve, qt, !1)),
      ji(n, i),
      ((Oe & 2) === 0 || n !== Le) &&
        (n === Le && ((Oe & 2) === 0 && (os |= i), Ve === 4 && mr(n, ve, qt, !1)), mn(n)));
  }
  function Vg(n, r, i) {
    if ((Oe & 6) !== 0) throw Error(a(327));
    var o = (!i && (r & 127) === 0 && (r & n.expiredLanes) === 0) || ki(n, r),
      h = o ? sS(n, r) : ah(n, r, !0),
      f = o;
    do {
      if (h === 0) {
        Zs && !o && mr(n, r, 0, !1);
        break;
      } else {
        if (((i = n.current.alternate), f && !nS(i))) {
          ((h = ah(n, r, !1)), (f = !1));
          continue;
        }
        if (h === 2) {
          if (((f = r), n.errorRecoveryDisabledLanes & f)) var v = 0;
          else
            ((v = n.pendingLanes & -536870913), (v = v !== 0 ? v : v & 536870912 ? 536870912 : 0));
          if (v !== 0) {
            r = v;
            e: {
              var S = n;
              h = ua;
              var C = S.current.memoizedState.isDehydrated;
              if ((C && (ti(S, v).flags |= 256), (v = ah(S, v, !1)), v !== 2)) {
                if (Wc && !C) {
                  ((S.errorRecoveryDisabledLanes |= f), (os |= f), (h = 4));
                  break e;
                }
                ((f = Ct), (Ct = h), f !== null && (Ct === null ? (Ct = f) : Ct.push.apply(Ct, f)));
              }
              h = v;
            }
            if (((f = !1), h !== 2)) continue;
          }
        }
        if (h === 1) {
          (ti(n, 0), mr(n, r, 0, !0));
          break;
        }
        e: {
          switch (((o = n), (f = h), f)) {
            case 0:
            case 1:
              throw Error(a(345));
            case 4:
              if ((r & 4194048) !== r) break;
            case 6:
              mr(o, r, qt, !fr);
              break e;
            case 2:
              Ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(a(329));
          }
          if ((r & 62914560) === r && ((h = Zo + 300 - bt()), 10 < h)) {
            if ((mr(o, r, qt, !fr), uo(o, 0, !0) !== 0)) break e;
            ((In = r),
              (o.timeoutHandle = wm(
                Kg.bind(null, o, i, Ct, el, th, r, qt, os, Ws, fr, f, "Throttled", -0, 0),
                h,
              )));
            break e;
          }
          Kg(o, i, Ct, el, th, r, qt, os, Ws, fr, f, null, -0, 0);
        }
      }
      break;
    } while (!0);
    mn(n);
  }
  function Kg(n, r, i, o, h, f, v, S, C, N, I, K, P, z) {
    if (((n.timeoutHandle = -1), (K = r.subtreeFlags), K & 8192 || (K & 16785408) === 16785408)) {
      ((K = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: An,
      }),
        zg(r, f, K));
      var te = (f & 62914560) === f ? Zo - bt() : (f & 4194048) === f ? qg - bt() : 0;
      if (((te = HS(K, te)), te !== null)) {
        ((In = f),
          (n.cancelPendingCommit = te(em.bind(null, n, r, f, i, o, h, v, S, C, I, K, null, P, z))),
          mr(n, f, v, !N));
        return;
      }
    }
    em(n, r, f, i, o, h, v, S, C);
  }
  function nS(n) {
    for (var r = n; ; ) {
      var i = r.tag;
      if (
        (i === 0 || i === 11 || i === 15) &&
        r.flags & 16384 &&
        ((i = r.updateQueue), i !== null && ((i = i.stores), i !== null))
      )
        for (var o = 0; o < i.length; o++) {
          var h = i[o],
            f = h.getSnapshot;
          h = h.value;
          try {
            if (!Pt(f(), h)) return !1;
          } catch {
            return !1;
          }
        }
      if (((i = r.child), r.subtreeFlags & 16384 && i !== null)) ((i.return = r), (r = i));
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        ((r.sibling.return = r.return), (r = r.sibling));
      }
    }
    return !0;
  }
  function mr(n, r, i, o) {
    ((r &= ~eh),
      (r &= ~os),
      (n.suspendedLanes |= r),
      (n.pingedLanes &= ~r),
      o && (n.warmLanes |= r),
      (o = n.expirationTimes));
    for (var h = r; 0 < h; ) {
      var f = 31 - Nt(h),
        v = 1 << f;
      ((o[f] = -1), (h &= ~v));
    }
    i !== 0 && nd(n, i, r);
  }
  function tl() {
    return (Oe & 6) === 0 ? (ha(0), !1) : !0;
  }
  function ih() {
    if (me !== null) {
      if (xe === 0) var n = me.return;
      else ((n = me), (kn = Zr = null), Sc(n), (Vs = null), (Fi = 0), (n = me));
      for (; n !== null; ) (Eg(n.alternate, n), (n = n.return));
      me = null;
    }
  }
  function ti(n, r) {
    var i = n.timeoutHandle;
    (i !== -1 && ((n.timeoutHandle = -1), wS(i)),
      (i = n.cancelPendingCommit),
      i !== null && ((n.cancelPendingCommit = null), i()),
      (In = 0),
      ih(),
      (Le = n),
      (me = i = Cn(n.current, null)),
      (ve = r),
      (xe = 0),
      (It = null),
      (fr = !1),
      (Zs = ki(n, r)),
      (Wc = !1),
      (Ws = qt = eh = os = dr = Ve = 0),
      (Ct = ua = null),
      (th = !1),
      (r & 8) !== 0 && (r |= r & 32));
    var o = n.entangledLanes;
    if (o !== 0)
      for (n = n.entanglements, o &= r; 0 < o; ) {
        var h = 31 - Nt(o),
          f = 1 << h;
        ((r |= n[h]), (o &= ~f));
      }
    return ((Hn = r), wo(), i);
  }
  function Fg(n, r) {
    ((fe = null),
      (H.H = ta),
      r === Gs || r === ko
        ? ((r = up()), (xe = 3))
        : r === uc
          ? ((r = up()), (xe = 4))
          : (xe =
              r === Pc
                ? 8
                : r !== null && typeof r == "object" && typeof r.then == "function"
                  ? 6
                  : 1),
      (It = r),
      me === null && ((Ve = 1), Go(n, Yt(r, n.current))));
  }
  function Qg() {
    var n = Bt.current;
    return n === null
      ? !0
      : (ve & 4194048) === ve
        ? Wt === null
        : (ve & 62914560) === ve || (ve & 536870912) !== 0
          ? n === Wt
          : !1;
  }
  function Yg() {
    var n = H.H;
    return ((H.H = ta), n === null ? ta : n);
  }
  function Jg() {
    var n = H.A;
    return ((H.A = eS), n);
  }
  function nl() {
    ((Ve = 4),
      fr || ((ve & 4194048) !== ve && Bt.current !== null) || (Zs = !0),
      ((dr & 134217727) === 0 && (os & 134217727) === 0) || Le === null || mr(Le, ve, qt, !1));
  }
  function ah(n, r, i) {
    var o = Oe;
    Oe |= 2;
    var h = Yg(),
      f = Jg();
    ((Le !== n || ve !== r) && ((el = null), ti(n, r)), (r = !1));
    var v = Ve;
    e: do
      try {
        if (xe !== 0 && me !== null) {
          var S = me,
            C = It;
          switch (xe) {
            case 8:
              (ih(), (v = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Bt.current === null && (r = !0);
              var N = xe;
              if (((xe = 0), (It = null), ni(n, S, C, N), i && Zs)) {
                v = 0;
                break e;
              }
              break;
            default:
              ((N = xe), (xe = 0), (It = null), ni(n, S, C, N));
          }
        }
        (rS(), (v = Ve));
        break;
      } catch (I) {
        Fg(n, I);
      }
    while (!0);
    return (
      r && n.shellSuspendCounter++,
      (kn = Zr = null),
      (Oe = o),
      (H.H = h),
      (H.A = f),
      me === null && ((Le = null), (ve = 0), wo()),
      v
    );
  }
  function rS() {
    for (; me !== null; ) Xg(me);
  }
  function sS(n, r) {
    var i = Oe;
    Oe |= 2;
    var o = Yg(),
      h = Jg();
    Le !== n || ve !== r ? ((el = null), (Wo = bt() + 500), ti(n, r)) : (Zs = ki(n, r));
    e: do
      try {
        if (xe !== 0 && me !== null) {
          r = me;
          var f = It;
          t: switch (xe) {
            case 1:
              ((xe = 0), (It = null), ni(n, r, f, 1));
              break;
            case 2:
            case 9:
              if (op(f)) {
                ((xe = 0), (It = null), Zg(r));
                break;
              }
              ((r = function () {
                ((xe !== 2 && xe !== 9) || Le !== n || (xe = 7), mn(n));
              }),
                f.then(r, r));
              break e;
            case 3:
              xe = 7;
              break e;
            case 4:
              xe = 5;
              break e;
            case 7:
              op(f) ? ((xe = 0), (It = null), Zg(r)) : ((xe = 0), (It = null), ni(n, r, f, 7));
              break;
            case 5:
              var v = null;
              switch (me.tag) {
                case 26:
                  v = me.memoizedState;
                case 5:
                case 27:
                  var S = me;
                  if (v ? Pm(v) : S.stateNode.complete) {
                    ((xe = 0), (It = null));
                    var C = S.sibling;
                    if (C !== null) me = C;
                    else {
                      var N = S.return;
                      N !== null ? ((me = N), rl(N)) : (me = null);
                    }
                    break t;
                  }
              }
              ((xe = 0), (It = null), ni(n, r, f, 5));
              break;
            case 6:
              ((xe = 0), (It = null), ni(n, r, f, 6));
              break;
            case 8:
              (ih(), (Ve = 6));
              break e;
            default:
              throw Error(a(462));
          }
        }
        iS();
        break;
      } catch (I) {
        Fg(n, I);
      }
    while (!0);
    return (
      (kn = Zr = null),
      (H.H = o),
      (H.A = h),
      (Oe = i),
      me !== null ? 0 : ((Le = null), (ve = 0), wo(), Ve)
    );
  }
  function iS() {
    for (; me !== null && !io(); ) Xg(me);
  }
  function Xg(n) {
    var r = Sg(n.alternate, n, Hn);
    ((n.memoizedProps = n.pendingProps), r === null ? rl(n) : (me = r));
  }
  function Zg(n) {
    var r = n,
      i = r.alternate;
    switch (r.tag) {
      case 15:
      case 0:
        r = gg(i, r, r.pendingProps, r.type, void 0, ve);
        break;
      case 11:
        r = gg(i, r, r.pendingProps, r.type.render, r.ref, ve);
        break;
      case 5:
        Sc(r);
      default:
        (Eg(i, r), (r = me = Jd(r, Hn)), (r = Sg(i, r, Hn)));
    }
    ((n.memoizedProps = n.pendingProps), r === null ? rl(n) : (me = r));
  }
  function ni(n, r, i, o) {
    ((kn = Zr = null), Sc(r), (Vs = null), (Fi = 0));
    var h = r.return;
    try {
      if (F_(n, h, r, i, ve)) {
        ((Ve = 1), Go(n, Yt(i, n.current)), (me = null));
        return;
      }
    } catch (f) {
      if (h !== null) throw ((me = h), f);
      ((Ve = 1), Go(n, Yt(i, n.current)), (me = null));
      return;
    }
    r.flags & 32768
      ? (_e || o === 1
          ? (n = !0)
          : Zs || (ve & 536870912) !== 0
            ? (n = !1)
            : ((fr = n = !0),
              (o === 2 || o === 9 || o === 3 || o === 6) &&
                ((o = Bt.current), o !== null && o.tag === 13 && (o.flags |= 16384))),
        Wg(r, n))
      : rl(r);
  }
  function rl(n) {
    var r = n;
    do {
      if ((r.flags & 32768) !== 0) {
        Wg(r, fr);
        return;
      }
      n = r.return;
      var i = J_(r.alternate, r, Hn);
      if (i !== null) {
        me = i;
        return;
      }
      if (((r = r.sibling), r !== null)) {
        me = r;
        return;
      }
      me = r = n;
    } while (r !== null);
    Ve === 0 && (Ve = 5);
  }
  function Wg(n, r) {
    do {
      var i = X_(n.alternate, n);
      if (i !== null) {
        ((i.flags &= 32767), (me = i));
        return;
      }
      if (
        ((i = n.return),
        i !== null && ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null)),
        !r && ((n = n.sibling), n !== null))
      ) {
        me = n;
        return;
      }
      me = n = i;
    } while (n !== null);
    ((Ve = 6), (me = null));
  }
  function em(n, r, i, o, h, f, v, S, C) {
    n.cancelPendingCommit = null;
    do sl();
    while (rt !== 0);
    if ((Oe & 6) !== 0) throw Error(a(327));
    if (r !== null) {
      if (r === n.current) throw Error(a(177));
      if (
        ((f = r.lanes | r.childLanes),
        (f |= Qu),
        zb(n, i, f, v, S, C),
        n === Le && ((me = Le = null), (ve = 0)),
        (ei = r),
        (gr = n),
        (In = i),
        (nh = f),
        (rh = h),
        ($g = o),
        (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0
          ? ((n.callbackNode = null),
            (n.callbackPriority = 0),
            uS(Es, function () {
              return (im(), null);
            }))
          : ((n.callbackNode = null), (n.callbackPriority = 0)),
        (o = (r.flags & 13878) !== 0),
        (r.subtreeFlags & 13878) !== 0 || o)
      ) {
        ((o = H.T), (H.T = null), (h = J.p), (J.p = 2), (v = Oe), (Oe |= 4));
        try {
          Z_(n, r, i);
        } finally {
          ((Oe = v), (J.p = h), (H.T = o));
        }
      }
      ((rt = 1), tm(), nm(), rm());
    }
  }
  function tm() {
    if (rt === 1) {
      rt = 0;
      var n = gr,
        r = ei,
        i = (r.flags & 13878) !== 0;
      if ((r.subtreeFlags & 13878) !== 0 || i) {
        ((i = H.T), (H.T = null));
        var o = J.p;
        J.p = 2;
        var h = Oe;
        Oe |= 4;
        try {
          Lg(r, n);
          var f = vh,
            v = Id(n.containerInfo),
            S = f.focusedElem,
            C = f.selectionRange;
          if (v !== S && S && S.ownerDocument && Hd(S.ownerDocument.documentElement, S)) {
            if (C !== null && $u(S)) {
              var N = C.start,
                I = C.end;
              if ((I === void 0 && (I = N), "selectionStart" in S))
                ((S.selectionStart = N), (S.selectionEnd = Math.min(I, S.value.length)));
              else {
                var K = S.ownerDocument || document,
                  P = (K && K.defaultView) || window;
                if (P.getSelection) {
                  var z = P.getSelection(),
                    te = S.textContent.length,
                    ue = Math.min(C.start, te),
                    De = C.end === void 0 ? ue : Math.min(C.end, te);
                  !z.extend && ue > De && ((v = De), (De = ue), (ue = v));
                  var D = Bd(S, ue),
                    x = Bd(S, De);
                  if (
                    D &&
                    x &&
                    (z.rangeCount !== 1 ||
                      z.anchorNode !== D.node ||
                      z.anchorOffset !== D.offset ||
                      z.focusNode !== x.node ||
                      z.focusOffset !== x.offset)
                  ) {
                    var U = K.createRange();
                    (U.setStart(D.node, D.offset),
                      z.removeAllRanges(),
                      ue > De
                        ? (z.addRange(U), z.extend(x.node, x.offset))
                        : (U.setEnd(x.node, x.offset), z.addRange(U)));
                  }
                }
              }
            }
            for (K = [], z = S; (z = z.parentNode); )
              z.nodeType === 1 && K.push({ element: z, left: z.scrollLeft, top: z.scrollTop });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < K.length; S++) {
              var q = K[S];
              ((q.element.scrollLeft = q.left), (q.element.scrollTop = q.top));
            }
          }
          ((ml = !!yh), (vh = yh = null));
        } finally {
          ((Oe = h), (J.p = o), (H.T = i));
        }
      }
      ((n.current = r), (rt = 2));
    }
  }
  function nm() {
    if (rt === 2) {
      rt = 0;
      var n = gr,
        r = ei,
        i = (r.flags & 8772) !== 0;
      if ((r.subtreeFlags & 8772) !== 0 || i) {
        ((i = H.T), (H.T = null));
        var o = J.p;
        J.p = 2;
        var h = Oe;
        Oe |= 4;
        try {
          kg(n, r.alternate, r);
        } finally {
          ((Oe = h), (J.p = o), (H.T = i));
        }
      }
      rt = 3;
    }
  }
  function rm() {
    if (rt === 4 || rt === 3) {
      ((rt = 0), Su());
      var n = gr,
        r = ei,
        i = In,
        o = $g;
      (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0
        ? (rt = 5)
        : ((rt = 0), (ei = gr = null), sm(n, n.pendingLanes));
      var h = n.pendingLanes;
      if (
        (h === 0 && (pr = null),
        Tu(i),
        (r = r.stateNode),
        Lt && typeof Lt.onCommitFiberRoot == "function")
      )
        try {
          Lt.onCommitFiberRoot(xi, r, void 0, (r.current.flags & 128) === 128);
        } catch {}
      if (o !== null) {
        ((r = H.T), (h = J.p), (J.p = 2), (H.T = null));
        try {
          for (var f = n.onRecoverableError, v = 0; v < o.length; v++) {
            var S = o[v];
            f(S.value, { componentStack: S.stack });
          }
        } finally {
          ((H.T = r), (J.p = h));
        }
      }
      ((In & 3) !== 0 && sl(),
        mn(n),
        (h = n.pendingLanes),
        (i & 261930) !== 0 && (h & 42) !== 0 ? (n === sh ? ca++ : ((ca = 0), (sh = n))) : (ca = 0),
        ha(0));
    }
  }
  function sm(n, r) {
    (n.pooledCacheLanes &= r) === 0 &&
      ((r = n.pooledCache), r != null && ((n.pooledCache = null), Vi(r)));
  }
  function sl() {
    return (tm(), nm(), rm(), im());
  }
  function im() {
    if (rt !== 5) return !1;
    var n = gr,
      r = nh;
    nh = 0;
    var i = Tu(In),
      o = H.T,
      h = J.p;
    try {
      ((J.p = 32 > i ? 32 : i), (H.T = null), (i = rh), (rh = null));
      var f = gr,
        v = In;
      if (((rt = 0), (ei = gr = null), (In = 0), (Oe & 6) !== 0)) throw Error(a(331));
      var S = Oe;
      if (
        ((Oe |= 4),
        Hg(f.current),
        Pg(f, f.current, v, i),
        (Oe = S),
        ha(0, !1),
        Lt && typeof Lt.onPostCommitFiberRoot == "function")
      )
        try {
          Lt.onPostCommitFiberRoot(xi, f);
        } catch {}
      return !0;
    } finally {
      ((J.p = h), (H.T = o), sm(n, r));
    }
  }
  function am(n, r, i) {
    ((r = Yt(i, r)),
      (r = Nc(n.stateNode, r, 2)),
      (n = lr(n, r, 2)),
      n !== null && (ji(n, 2), mn(n)));
  }
  function ke(n, r, i) {
    if (n.tag === 3) am(n, n, i);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          am(r, n, i);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" && (pr === null || !pr.has(o)))
          ) {
            ((n = Yt(i, n)),
              (i = og(2)),
              (o = lr(r, i, 2)),
              o !== null && (lg(i, o, r, n), ji(o, 2), mn(o)));
            break;
          }
        }
        r = r.return;
      }
  }
  function oh(n, r, i) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new tS();
      var h = new Set();
      o.set(r, h);
    } else ((h = o.get(r)), h === void 0 && ((h = new Set()), o.set(r, h)));
    h.has(i) || ((Wc = !0), h.add(i), (n = aS.bind(null, n, r, i)), r.then(n, n));
  }
  function aS(n, r, i) {
    var o = n.pingCache;
    (o !== null && o.delete(r),
      (n.pingedLanes |= n.suspendedLanes & i),
      (n.warmLanes &= ~i),
      Le === n &&
        (ve & i) === i &&
        (Ve === 4 || (Ve === 3 && (ve & 62914560) === ve && 300 > bt() - Zo)
          ? (Oe & 2) === 0 && ti(n, 0)
          : (eh |= i),
        Ws === ve && (Ws = 0)),
      mn(n));
  }
  function om(n, r) {
    (r === 0 && (r = td()), (n = Yr(n, r)), n !== null && (ji(n, r), mn(n)));
  }
  function oS(n) {
    var r = n.memoizedState,
      i = 0;
    (r !== null && (i = r.retryLane), om(n, i));
  }
  function lS(n, r) {
    var i = 0;
    switch (n.tag) {
      case 31:
      case 13:
        var o = n.stateNode,
          h = n.memoizedState;
        h !== null && (i = h.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      case 22:
        o = n.stateNode._retryCache;
        break;
      default:
        throw Error(a(314));
    }
    (o !== null && o.delete(r), om(n, i));
  }
  function uS(n, r) {
    return rn(n, r);
  }
  var il = null,
    ri = null,
    lh = !1,
    al = !1,
    uh = !1,
    yr = 0;
  function mn(n) {
    (n !== ri && n.next === null && (ri === null ? (il = ri = n) : (ri = ri.next = n)),
      (al = !0),
      lh || ((lh = !0), hS()));
  }
  function ha(n, r) {
    if (!uh && al) {
      uh = !0;
      do
        for (var i = !1, o = il; o !== null; ) {
          if (n !== 0) {
            var h = o.pendingLanes;
            if (h === 0) var f = 0;
            else {
              var v = o.suspendedLanes,
                S = o.pingedLanes;
              ((f = (1 << (31 - Nt(42 | n) + 1)) - 1),
                (f &= h & ~(v & ~S)),
                (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0));
            }
            f !== 0 && ((i = !0), hm(o, f));
          } else
            ((f = ve),
              (f = uo(
                o,
                o === Le ? f : 0,
                o.cancelPendingCommit !== null || o.timeoutHandle !== -1,
              )),
              (f & 3) === 0 || ki(o, f) || ((i = !0), hm(o, f)));
          o = o.next;
        }
      while (i);
      uh = !1;
    }
  }
  function cS() {
    lm();
  }
  function lm() {
    al = lh = !1;
    var n = 0;
    yr !== 0 && SS() && (n = yr);
    for (var r = bt(), i = null, o = il; o !== null; ) {
      var h = o.next,
        f = um(o, r);
      (f === 0
        ? ((o.next = null), i === null ? (il = h) : (i.next = h), h === null && (ri = i))
        : ((i = o), (n !== 0 || (f & 3) !== 0) && (al = !0)),
        (o = h));
    }
    ((rt !== 0 && rt !== 5) || ha(n), yr !== 0 && (yr = 0));
  }
  function um(n, r) {
    for (
      var i = n.suspendedLanes,
        o = n.pingedLanes,
        h = n.expirationTimes,
        f = n.pendingLanes & -62914561;
      0 < f;
    ) {
      var v = 31 - Nt(f),
        S = 1 << v,
        C = h[v];
      (C === -1
        ? ((S & i) === 0 || (S & o) !== 0) && (h[v] = Pb(S, r))
        : C <= r && (n.expiredLanes |= S),
        (f &= ~S));
    }
    if (
      ((r = Le),
      (i = ve),
      (i = uo(n, n === r ? i : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1)),
      (o = n.callbackNode),
      i === 0 || (n === r && (xe === 2 || xe === 9)) || n.cancelPendingCommit !== null)
    )
      return (o !== null && o !== null && Ci(o), (n.callbackNode = null), (n.callbackPriority = 0));
    if ((i & 3) === 0 || ki(n, i)) {
      if (((r = i & -i), r === n.callbackPriority)) return r;
      switch ((o !== null && Ci(o), Tu(i))) {
        case 2:
        case 8:
          i = fn;
          break;
        case 32:
          i = Es;
          break;
        case 268435456:
          i = ed;
          break;
        default:
          i = Es;
      }
      return (
        (o = cm.bind(null, n)),
        (i = rn(i, o)),
        (n.callbackPriority = r),
        (n.callbackNode = i),
        r
      );
    }
    return (
      o !== null && o !== null && Ci(o),
      (n.callbackPriority = 2),
      (n.callbackNode = null),
      2
    );
  }
  function cm(n, r) {
    if (rt !== 0 && rt !== 5) return ((n.callbackNode = null), (n.callbackPriority = 0), null);
    var i = n.callbackNode;
    if (sl() && n.callbackNode !== i) return null;
    var o = ve;
    return (
      (o = uo(n, n === Le ? o : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1)),
      o === 0
        ? null
        : (Vg(n, o, r),
          um(n, bt()),
          n.callbackNode != null && n.callbackNode === i ? cm.bind(null, n) : null)
    );
  }
  function hm(n, r) {
    if (sl()) return null;
    Vg(n, r, !0);
  }
  function hS() {
    ES(function () {
      (Oe & 6) !== 0 ? rn(ht, cS) : lm();
    });
  }
  function ch() {
    if (yr === 0) {
      var n = qs;
      (n === 0 && ((n = ao), (ao <<= 1), (ao & 261888) === 0 && (ao = 256)), (yr = n));
    }
    return yr;
  }
  function fm(n) {
    return n == null || typeof n == "symbol" || typeof n == "boolean"
      ? null
      : typeof n == "function"
        ? n
        : po("" + n);
  }
  function dm(n, r) {
    var i = r.ownerDocument.createElement("input");
    return (
      (i.name = r.name),
      (i.value = r.value),
      n.id && i.setAttribute("form", n.id),
      r.parentNode.insertBefore(i, r),
      (n = new FormData(n)),
      i.parentNode.removeChild(i),
      n
    );
  }
  function fS(n, r, i, o, h) {
    if (r === "submit" && i && i.stateNode === h) {
      var f = fm((h[Et] || null).action),
        v = o.submitter;
      v &&
        ((r = (r = v[Et] || null) ? fm(r.formAction) : v.getAttribute("formAction")),
        r !== null && ((f = r), (v = null)));
      var S = new vo("action", "action", null, o, h);
      n.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (yr !== 0) {
                  var C = v ? dm(h, v) : new FormData(h);
                  kc(i, { pending: !0, data: C, method: h.method, action: f }, null, C);
                }
              } else
                typeof f == "function" &&
                  (S.preventDefault(),
                  (C = v ? dm(h, v) : new FormData(h)),
                  kc(i, { pending: !0, data: C, method: h.method, action: f }, f, C));
            },
            currentTarget: h,
          },
        ],
      });
    }
  }
  for (var hh = 0; hh < Fu.length; hh++) {
    var fh = Fu[hh],
      dS = fh.toLowerCase(),
      pS = fh[0].toUpperCase() + fh.slice(1);
    sn(dS, "on" + pS);
  }
  (sn(Gd, "onAnimationEnd"),
    sn(Vd, "onAnimationIteration"),
    sn(Kd, "onAnimationStart"),
    sn("dblclick", "onDoubleClick"),
    sn("focusin", "onFocus"),
    sn("focusout", "onBlur"),
    sn(k_, "onTransitionRun"),
    sn(j_, "onTransitionStart"),
    sn(M_, "onTransitionCancel"),
    sn(Fd, "onTransitionEnd"),
    Cs("onMouseEnter", ["mouseout", "mouseover"]),
    Cs("onMouseLeave", ["mouseout", "mouseover"]),
    Cs("onPointerEnter", ["pointerout", "pointerover"]),
    Cs("onPointerLeave", ["pointerout", "pointerover"]),
    Vr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Vr(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Vr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Vr(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Vr(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var fa =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    gS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fa),
    );
  function pm(n, r) {
    r = (r & 4) !== 0;
    for (var i = 0; i < n.length; i++) {
      var o = n[i],
        h = o.event;
      o = o.listeners;
      e: {
        var f = void 0;
        if (r)
          for (var v = o.length - 1; 0 <= v; v--) {
            var S = o[v],
              C = S.instance,
              N = S.currentTarget;
            if (((S = S.listener), C !== f && h.isPropagationStopped())) break e;
            ((f = S), (h.currentTarget = N));
            try {
              f(h);
            } catch (I) {
              So(I);
            }
            ((h.currentTarget = null), (f = C));
          }
        else
          for (v = 0; v < o.length; v++) {
            if (
              ((S = o[v]),
              (C = S.instance),
              (N = S.currentTarget),
              (S = S.listener),
              C !== f && h.isPropagationStopped())
            )
              break e;
            ((f = S), (h.currentTarget = N));
            try {
              f(h);
            } catch (I) {
              So(I);
            }
            ((h.currentTarget = null), (f = C));
          }
      }
    }
  }
  function ye(n, r) {
    var i = r[Ru];
    i === void 0 && (i = r[Ru] = new Set());
    var o = n + "__bubble";
    i.has(o) || (gm(r, n, 2, !1), i.add(o));
  }
  function dh(n, r, i) {
    var o = 0;
    (r && (o |= 4), gm(i, n, o, r));
  }
  var ol = "_reactListening" + Math.random().toString(36).slice(2);
  function ph(n) {
    if (!n[ol]) {
      ((n[ol] = !0),
        ld.forEach(function (i) {
          i !== "selectionchange" && (gS.has(i) || dh(i, !1, n), dh(i, !0, n));
        }));
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[ol] || ((r[ol] = !0), dh("selectionchange", !1, r));
    }
  }
  function gm(n, r, i, o) {
    switch (Gm(r)) {
      case 2:
        var h = $S;
        break;
      case 8:
        h = GS;
        break;
      default:
        h = xh;
    }
    ((i = h.bind(null, r, i, n)),
      (h = void 0),
      !Uu || (r !== "touchstart" && r !== "touchmove" && r !== "wheel") || (h = !0),
      o
        ? h !== void 0
          ? n.addEventListener(r, i, { capture: !0, passive: h })
          : n.addEventListener(r, i, !0)
        : h !== void 0
          ? n.addEventListener(r, i, { passive: h })
          : n.addEventListener(r, i, !1));
  }
  function gh(n, r, i, o, h) {
    var f = o;
    if ((r & 1) === 0 && (r & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var v = o.tag;
        if (v === 3 || v === 4) {
          var S = o.stateNode.containerInfo;
          if (S === h) break;
          if (v === 4)
            for (v = o.return; v !== null; ) {
              var C = v.tag;
              if ((C === 3 || C === 4) && v.stateNode.containerInfo === h) return;
              v = v.return;
            }
          for (; S !== null; ) {
            if (((v = Rs(S)), v === null)) return;
            if (((C = v.tag), C === 5 || C === 6 || C === 26 || C === 27)) {
              o = f = v;
              continue e;
            }
            S = S.parentNode;
          }
        }
        o = o.return;
      }
    _d(function () {
      var N = f,
        I = Mu(i),
        K = [];
      e: {
        var P = Qd.get(n);
        if (P !== void 0) {
          var z = vo,
            te = n;
          switch (n) {
            case "keypress":
              if (mo(i) === 0) break e;
            case "keydown":
            case "keyup":
              z = l_;
              break;
            case "focusin":
              ((te = "focus"), (z = zu));
              break;
            case "focusout":
              ((te = "blur"), (z = zu));
              break;
            case "beforeblur":
            case "afterblur":
              z = zu;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = Ed;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = Jb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = h_;
              break;
            case Gd:
            case Vd:
            case Kd:
              z = Wb;
              break;
            case Fd:
              z = d_;
              break;
            case "scroll":
            case "scrollend":
              z = Qb;
              break;
            case "wheel":
              z = g_;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = t_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Rd;
              break;
            case "toggle":
            case "beforetoggle":
              z = y_;
          }
          var ue = (r & 4) !== 0,
            De = !ue && (n === "scroll" || n === "scrollend"),
            D = ue ? (P !== null ? P + "Capture" : null) : P;
          ue = [];
          for (var x = N, U; x !== null; ) {
            var q = x;
            if (
              ((U = q.stateNode),
              (q = q.tag),
              (q !== 5 && q !== 26 && q !== 27) ||
                U === null ||
                D === null ||
                ((q = Ui(x, D)), q != null && ue.push(da(x, q, U))),
              De)
            )
              break;
            x = x.return;
          }
          0 < ue.length && ((P = new z(P, te, null, i, I)), K.push({ event: P, listeners: ue }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (
            ((P = n === "mouseover" || n === "pointerover"),
            (z = n === "mouseout" || n === "pointerout"),
            P && i !== ju && (te = i.relatedTarget || i.fromElement) && (Rs(te) || te[Ts]))
          )
            break e;
          if (
            (z || P) &&
            ((P =
              I.window === I
                ? I
                : (P = I.ownerDocument)
                  ? P.defaultView || P.parentWindow
                  : window),
            z
              ? ((te = i.relatedTarget || i.toElement),
                (z = N),
                (te = te ? Rs(te) : null),
                te !== null &&
                  ((De = u(te)), (ue = te.tag), te !== De || (ue !== 5 && ue !== 27 && ue !== 6)) &&
                  (te = null))
              : ((z = null), (te = N)),
            z !== te)
          ) {
            if (
              ((ue = Ed),
              (q = "onMouseLeave"),
              (D = "onMouseEnter"),
              (x = "mouse"),
              (n === "pointerout" || n === "pointerover") &&
                ((ue = Rd), (q = "onPointerLeave"), (D = "onPointerEnter"), (x = "pointer")),
              (De = z == null ? P : Di(z)),
              (U = te == null ? P : Di(te)),
              (P = new ue(q, x + "leave", z, i, I)),
              (P.target = De),
              (P.relatedTarget = U),
              (q = null),
              Rs(I) === N &&
                ((ue = new ue(D, x + "enter", te, i, I)),
                (ue.target = U),
                (ue.relatedTarget = De),
                (q = ue)),
              (De = q),
              z && te)
            )
              t: {
                for (ue = mS, D = z, x = te, U = 0, q = D; q; q = ue(q)) U++;
                q = 0;
                for (var oe = x; oe; oe = ue(oe)) q++;
                for (; 0 < U - q; ) ((D = ue(D)), U--);
                for (; 0 < q - U; ) ((x = ue(x)), q--);
                for (; U--; ) {
                  if (D === x || (x !== null && D === x.alternate)) {
                    ue = D;
                    break t;
                  }
                  ((D = ue(D)), (x = ue(x)));
                }
                ue = null;
              }
            else ue = null;
            (z !== null && mm(K, P, z, ue, !1),
              te !== null && De !== null && mm(K, De, te, ue, !0));
          }
        }
        e: {
          if (
            ((P = N ? Di(N) : window),
            (z = P.nodeName && P.nodeName.toLowerCase()),
            z === "select" || (z === "input" && P.type === "file"))
          )
            var Ee = Dd;
          else if (jd(P))
            if (Ud) Ee = O_;
            else {
              Ee = R_;
              var se = T_;
            }
          else
            ((z = P.nodeName),
              !z || z.toLowerCase() !== "input" || (P.type !== "checkbox" && P.type !== "radio")
                ? N && ku(N.elementType) && (Ee = Dd)
                : (Ee = A_));
          if (Ee && (Ee = Ee(n, N))) {
            Md(K, Ee, i, I);
            break e;
          }
          (se && se(n, P, N),
            n === "focusout" &&
              N &&
              P.type === "number" &&
              N.memoizedProps.value != null &&
              xu(P, "number", P.value));
        }
        switch (((se = N ? Di(N) : window), n)) {
          case "focusin":
            (jd(se) || se.contentEditable === "true") && ((Us = se), (Gu = N), (qi = null));
            break;
          case "focusout":
            qi = Gu = Us = null;
            break;
          case "mousedown":
            Vu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Vu = !1), qd(K, i, I));
            break;
          case "selectionchange":
            if (x_) break;
          case "keydown":
          case "keyup":
            qd(K, i, I);
        }
        var pe;
        if (Hu)
          e: {
            switch (n) {
              case "compositionstart":
                var be = "onCompositionStart";
                break e;
              case "compositionend":
                be = "onCompositionEnd";
                break e;
              case "compositionupdate":
                be = "onCompositionUpdate";
                break e;
            }
            be = void 0;
          }
        else
          Ds
            ? xd(n, i) && (be = "onCompositionEnd")
            : n === "keydown" && i.keyCode === 229 && (be = "onCompositionStart");
        (be &&
          (Ad &&
            i.locale !== "ko" &&
            (Ds || be !== "onCompositionStart"
              ? be === "onCompositionEnd" && Ds && (pe = Sd())
              : ((tr = I), (Lu = "value" in tr ? tr.value : tr.textContent), (Ds = !0))),
          (se = ll(N, be)),
          0 < se.length &&
            ((be = new Td(be, n, null, i, I)),
            K.push({ event: be, listeners: se }),
            pe ? (be.data = pe) : ((pe = kd(i)), pe !== null && (be.data = pe)))),
          (pe = b_ ? __(n, i) : S_(n, i)) &&
            ((be = ll(N, "onBeforeInput")),
            0 < be.length &&
              ((se = new Td("onBeforeInput", "beforeinput", null, i, I)),
              K.push({ event: se, listeners: be }),
              (se.data = pe))),
          fS(K, n, N, i, I));
      }
      pm(K, r);
    });
  }
  function da(n, r, i) {
    return { instance: n, listener: r, currentTarget: i };
  }
  function ll(n, r) {
    for (var i = r + "Capture", o = []; n !== null; ) {
      var h = n,
        f = h.stateNode;
      if (
        ((h = h.tag),
        (h !== 5 && h !== 26 && h !== 27) ||
          f === null ||
          ((h = Ui(n, i)),
          h != null && o.unshift(da(n, h, f)),
          (h = Ui(n, r)),
          h != null && o.push(da(n, h, f))),
        n.tag === 3)
      )
        return o;
      n = n.return;
    }
    return [];
  }
  function mS(n) {
    if (n === null) return null;
    do n = n.return;
    while (n && n.tag !== 5 && n.tag !== 27);
    return n || null;
  }
  function mm(n, r, i, o, h) {
    for (var f = r._reactName, v = []; i !== null && i !== o; ) {
      var S = i,
        C = S.alternate,
        N = S.stateNode;
      if (((S = S.tag), C !== null && C === o)) break;
      ((S !== 5 && S !== 26 && S !== 27) ||
        N === null ||
        ((C = N),
        h
          ? ((N = Ui(i, f)), N != null && v.unshift(da(i, N, C)))
          : h || ((N = Ui(i, f)), N != null && v.push(da(i, N, C)))),
        (i = i.return));
    }
    v.length !== 0 && n.push({ event: r, listeners: v });
  }
  var yS = /\r\n?/g,
    vS = /\u0000|\uFFFD/g;
  function ym(n) {
    return (typeof n == "string" ? n : "" + n)
      .replace(
        yS,
        `
`,
      )
      .replace(vS, "");
  }
  function vm(n, r) {
    return ((r = ym(r)), ym(n) === r);
  }
  function Me(n, r, i, o, h, f) {
    switch (i) {
      case "children":
        typeof o == "string"
          ? r === "body" || (r === "textarea" && o === "") || ks(n, o)
          : (typeof o == "number" || typeof o == "bigint") && r !== "body" && ks(n, "" + o);
        break;
      case "className":
        ho(n, "class", o);
        break;
      case "tabIndex":
        ho(n, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ho(n, i, o);
        break;
      case "style":
        vd(n, o, f);
        break;
      case "data":
        if (r !== "object") {
          ho(n, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (r !== "a" || i !== "href")) {
          n.removeAttribute(i);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          n.removeAttribute(i);
          break;
        }
        ((o = po("" + o)), n.setAttribute(i, o));
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          n.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof f == "function" &&
            (i === "formAction"
              ? (r !== "input" && Me(n, r, "name", h.name, h, null),
                Me(n, r, "formEncType", h.formEncType, h, null),
                Me(n, r, "formMethod", h.formMethod, h, null),
                Me(n, r, "formTarget", h.formTarget, h, null))
              : (Me(n, r, "encType", h.encType, h, null),
                Me(n, r, "method", h.method, h, null),
                Me(n, r, "target", h.target, h, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          n.removeAttribute(i);
          break;
        }
        ((o = po("" + o)), n.setAttribute(i, o));
        break;
      case "onClick":
        o != null && (n.onclick = An);
        break;
      case "onScroll":
        o != null && ye("scroll", n);
        break;
      case "onScrollEnd":
        o != null && ye("scrollend", n);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(a(61));
          if (((i = o.__html), i != null)) {
            if (h.children != null) throw Error(a(60));
            n.innerHTML = i;
          }
        }
        break;
      case "multiple":
        n.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        n.muted = o && typeof o != "function" && typeof o != "symbol";
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
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          n.removeAttribute("xlink:href");
          break;
        }
        ((i = po("" + o)), n.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? n.setAttribute(i, "" + o)
          : n.removeAttribute(i);
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
        o && typeof o != "function" && typeof o != "symbol"
          ? n.setAttribute(i, "")
          : n.removeAttribute(i);
        break;
      case "capture":
      case "download":
        o === !0
          ? n.setAttribute(i, "")
          : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol"
            ? n.setAttribute(i, o)
            : n.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o
          ? n.setAttribute(i, o)
          : n.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? n.removeAttribute(i)
          : n.setAttribute(i, o);
        break;
      case "popover":
        (ye("beforetoggle", n), ye("toggle", n), co(n, "popover", o));
        break;
      case "xlinkActuate":
        Rn(n, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        Rn(n, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        Rn(n, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        Rn(n, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        Rn(n, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        Rn(n, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        Rn(n, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        Rn(n, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        Rn(n, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        co(n, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || (i[0] !== "o" && i[0] !== "O") || (i[1] !== "n" && i[1] !== "N")) &&
          ((i = Kb.get(i) || i), co(n, i, o));
    }
  }
  function mh(n, r, i, o, h, f) {
    switch (i) {
      case "style":
        vd(n, o, f);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(a(61));
          if (((i = o.__html), i != null)) {
            if (h.children != null) throw Error(a(60));
            n.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? ks(n, o)
          : (typeof o == "number" || typeof o == "bigint") && ks(n, "" + o);
        break;
      case "onScroll":
        o != null && ye("scroll", n);
        break;
      case "onScrollEnd":
        o != null && ye("scrollend", n);
        break;
      case "onClick":
        o != null && (n.onclick = An);
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
        if (!ud.hasOwnProperty(i))
          e: {
            if (
              i[0] === "o" &&
              i[1] === "n" &&
              ((h = i.endsWith("Capture")),
              (r = i.slice(2, h ? i.length - 7 : void 0)),
              (f = n[Et] || null),
              (f = f != null ? f[i] : null),
              typeof f == "function" && n.removeEventListener(r, f, h),
              typeof o == "function")
            ) {
              (typeof f != "function" &&
                f !== null &&
                (i in n ? (n[i] = null) : n.hasAttribute(i) && n.removeAttribute(i)),
                n.addEventListener(r, o, h));
              break e;
            }
            i in n ? (n[i] = o) : o === !0 ? n.setAttribute(i, "") : co(n, i, o);
          }
    }
  }
  function mt(n, r, i) {
    switch (r) {
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
        (ye("error", n), ye("load", n));
        var o = !1,
          h = !1,
          f;
        for (f in i)
          if (i.hasOwnProperty(f)) {
            var v = i[f];
            if (v != null)
              switch (f) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  h = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(a(137, r));
                default:
                  Me(n, r, f, v, i, null);
              }
          }
        (h && Me(n, r, "srcSet", i.srcSet, i, null), o && Me(n, r, "src", i.src, i, null));
        return;
      case "input":
        ye("invalid", n);
        var S = (f = v = h = null),
          C = null,
          N = null;
        for (o in i)
          if (i.hasOwnProperty(o)) {
            var I = i[o];
            if (I != null)
              switch (o) {
                case "name":
                  h = I;
                  break;
                case "type":
                  v = I;
                  break;
                case "checked":
                  C = I;
                  break;
                case "defaultChecked":
                  N = I;
                  break;
                case "value":
                  f = I;
                  break;
                case "defaultValue":
                  S = I;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (I != null) throw Error(a(137, r));
                  break;
                default:
                  Me(n, r, o, I, i, null);
              }
          }
        pd(n, f, S, C, N, v, h, !1);
        return;
      case "select":
        (ye("invalid", n), (o = v = f = null));
        for (h in i)
          if (i.hasOwnProperty(h) && ((S = i[h]), S != null))
            switch (h) {
              case "value":
                f = S;
                break;
              case "defaultValue":
                v = S;
                break;
              case "multiple":
                o = S;
              default:
                Me(n, r, h, S, i, null);
            }
        ((r = f),
          (i = v),
          (n.multiple = !!o),
          r != null ? xs(n, !!o, r, !1) : i != null && xs(n, !!o, i, !0));
        return;
      case "textarea":
        (ye("invalid", n), (f = h = o = null));
        for (v in i)
          if (i.hasOwnProperty(v) && ((S = i[v]), S != null))
            switch (v) {
              case "value":
                o = S;
                break;
              case "defaultValue":
                h = S;
                break;
              case "children":
                f = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(a(91));
                break;
              default:
                Me(n, r, v, S, i, null);
            }
        md(n, o, h, f);
        return;
      case "option":
        for (C in i)
          i.hasOwnProperty(C) &&
            ((o = i[C]), o != null) &&
            (C === "selected"
              ? (n.selected = o && typeof o != "function" && typeof o != "symbol")
              : Me(n, r, C, o, i, null));
        return;
      case "dialog":
        (ye("beforetoggle", n), ye("toggle", n), ye("cancel", n), ye("close", n));
        break;
      case "iframe":
      case "object":
        ye("load", n);
        break;
      case "video":
      case "audio":
        for (o = 0; o < fa.length; o++) ye(fa[o], n);
        break;
      case "image":
        (ye("error", n), ye("load", n));
        break;
      case "details":
        ye("toggle", n);
        break;
      case "embed":
      case "source":
      case "link":
        (ye("error", n), ye("load", n));
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
        for (N in i)
          if (i.hasOwnProperty(N) && ((o = i[N]), o != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(137, r));
              default:
                Me(n, r, N, o, i, null);
            }
        return;
      default:
        if (ku(r)) {
          for (I in i)
            i.hasOwnProperty(I) && ((o = i[I]), o !== void 0 && mh(n, r, I, o, i, void 0));
          return;
        }
    }
    for (S in i) i.hasOwnProperty(S) && ((o = i[S]), o != null && Me(n, r, S, o, i, null));
  }
  function bS(n, r, i, o) {
    switch (r) {
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
        var h = null,
          f = null,
          v = null,
          S = null,
          C = null,
          N = null,
          I = null;
        for (z in i) {
          var K = i[z];
          if (i.hasOwnProperty(z) && K != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = K;
              default:
                o.hasOwnProperty(z) || Me(n, r, z, null, o, K);
            }
        }
        for (var P in o) {
          var z = o[P];
          if (((K = i[P]), o.hasOwnProperty(P) && (z != null || K != null)))
            switch (P) {
              case "type":
                f = z;
                break;
              case "name":
                h = z;
                break;
              case "checked":
                N = z;
                break;
              case "defaultChecked":
                I = z;
                break;
              case "value":
                v = z;
                break;
              case "defaultValue":
                S = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(a(137, r));
                break;
              default:
                z !== K && Me(n, r, P, z, o, K);
            }
        }
        Cu(n, v, S, C, N, I, f, h);
        return;
      case "select":
        z = v = S = P = null;
        for (f in i)
          if (((C = i[f]), i.hasOwnProperty(f) && C != null))
            switch (f) {
              case "value":
                break;
              case "multiple":
                z = C;
              default:
                o.hasOwnProperty(f) || Me(n, r, f, null, o, C);
            }
        for (h in o)
          if (((f = o[h]), (C = i[h]), o.hasOwnProperty(h) && (f != null || C != null)))
            switch (h) {
              case "value":
                P = f;
                break;
              case "defaultValue":
                S = f;
                break;
              case "multiple":
                v = f;
              default:
                f !== C && Me(n, r, h, f, o, C);
            }
        ((r = S),
          (i = v),
          (o = z),
          P != null
            ? xs(n, !!i, P, !1)
            : !!o != !!i && (r != null ? xs(n, !!i, r, !0) : xs(n, !!i, i ? [] : "", !1)));
        return;
      case "textarea":
        z = P = null;
        for (S in i)
          if (((h = i[S]), i.hasOwnProperty(S) && h != null && !o.hasOwnProperty(S)))
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                Me(n, r, S, null, o, h);
            }
        for (v in o)
          if (((h = o[v]), (f = i[v]), o.hasOwnProperty(v) && (h != null || f != null)))
            switch (v) {
              case "value":
                P = h;
                break;
              case "defaultValue":
                z = h;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(a(91));
                break;
              default:
                h !== f && Me(n, r, v, h, o, f);
            }
        gd(n, P, z);
        return;
      case "option":
        for (var te in i)
          ((P = i[te]),
            i.hasOwnProperty(te) &&
              P != null &&
              !o.hasOwnProperty(te) &&
              (te === "selected" ? (n.selected = !1) : Me(n, r, te, null, o, P)));
        for (C in o)
          ((P = o[C]),
            (z = i[C]),
            o.hasOwnProperty(C) &&
              P !== z &&
              (P != null || z != null) &&
              (C === "selected"
                ? (n.selected = P && typeof P != "function" && typeof P != "symbol")
                : Me(n, r, C, P, o, z)));
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
        for (var ue in i)
          ((P = i[ue]),
            i.hasOwnProperty(ue) && P != null && !o.hasOwnProperty(ue) && Me(n, r, ue, null, o, P));
        for (N in o)
          if (((P = o[N]), (z = i[N]), o.hasOwnProperty(N) && P !== z && (P != null || z != null)))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (P != null) throw Error(a(137, r));
                break;
              default:
                Me(n, r, N, P, o, z);
            }
        return;
      default:
        if (ku(r)) {
          for (var De in i)
            ((P = i[De]),
              i.hasOwnProperty(De) &&
                P !== void 0 &&
                !o.hasOwnProperty(De) &&
                mh(n, r, De, void 0, o, P));
          for (I in o)
            ((P = o[I]),
              (z = i[I]),
              !o.hasOwnProperty(I) ||
                P === z ||
                (P === void 0 && z === void 0) ||
                mh(n, r, I, P, o, z));
          return;
        }
    }
    for (var D in i)
      ((P = i[D]),
        i.hasOwnProperty(D) && P != null && !o.hasOwnProperty(D) && Me(n, r, D, null, o, P));
    for (K in o)
      ((P = o[K]),
        (z = i[K]),
        !o.hasOwnProperty(K) || P === z || (P == null && z == null) || Me(n, r, K, P, o, z));
  }
  function bm(n) {
    switch (n) {
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
  function _S() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var n = 0, r = 0, i = performance.getEntriesByType("resource"), o = 0;
        o < i.length;
        o++
      ) {
        var h = i[o],
          f = h.transferSize,
          v = h.initiatorType,
          S = h.duration;
        if (f && S && bm(v)) {
          for (v = 0, S = h.responseEnd, o += 1; o < i.length; o++) {
            var C = i[o],
              N = C.startTime;
            if (N > S) break;
            var I = C.transferSize,
              K = C.initiatorType;
            I && bm(K) && ((C = C.responseEnd), (v += I * (C < S ? 1 : (S - N) / (C - N))));
          }
          if ((--o, (r += (8 * (f + v)) / (h.duration / 1e3)), n++, 10 < n)) break;
        }
      }
      if (0 < n) return r / n / 1e6;
    }
    return navigator.connection && ((n = navigator.connection.downlink), typeof n == "number")
      ? n
      : 5;
  }
  var yh = null,
    vh = null;
  function ul(n) {
    return n.nodeType === 9 ? n : n.ownerDocument;
  }
  function _m(n) {
    switch (n) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Sm(n, r) {
    if (n === 0)
      switch (r) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return n === 1 && r === "foreignObject" ? 0 : n;
  }
  function bh(n, r) {
    return (
      n === "textarea" ||
      n === "noscript" ||
      typeof r.children == "string" ||
      typeof r.children == "number" ||
      typeof r.children == "bigint" ||
      (typeof r.dangerouslySetInnerHTML == "object" &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    );
  }
  var _h = null;
  function SS() {
    var n = window.event;
    return n && n.type === "popstate" ? (n === _h ? !1 : ((_h = n), !0)) : ((_h = null), !1);
  }
  var wm = typeof setTimeout == "function" ? setTimeout : void 0,
    wS = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Em = typeof Promise == "function" ? Promise : void 0,
    ES =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Em < "u"
          ? function (n) {
              return Em.resolve(null).then(n).catch(TS);
            }
          : wm;
  function TS(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function vr(n) {
    return n === "head";
  }
  function Tm(n, r) {
    var i = r,
      o = 0;
    do {
      var h = i.nextSibling;
      if ((n.removeChild(i), h && h.nodeType === 8))
        if (((i = h.data), i === "/$" || i === "/&")) {
          if (o === 0) {
            (n.removeChild(h), oi(r));
            return;
          }
          o--;
        } else if (i === "$" || i === "$?" || i === "$~" || i === "$!" || i === "&") o++;
        else if (i === "html") pa(n.ownerDocument.documentElement);
        else if (i === "head") {
          ((i = n.ownerDocument.head), pa(i));
          for (var f = i.firstChild; f; ) {
            var v = f.nextSibling,
              S = f.nodeName;
            (f[Mi] ||
              S === "SCRIPT" ||
              S === "STYLE" ||
              (S === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
              i.removeChild(f),
              (f = v));
          }
        } else i === "body" && pa(n.ownerDocument.body);
      i = h;
    } while (i);
    oi(r);
  }
  function Rm(n, r) {
    var i = n;
    n = 0;
    do {
      var o = i.nextSibling;
      if (
        (i.nodeType === 1
          ? r
            ? ((i._stashedDisplay = i.style.display), (i.style.display = "none"))
            : ((i.style.display = i._stashedDisplay || ""),
              i.getAttribute("style") === "" && i.removeAttribute("style"))
          : i.nodeType === 3 &&
            (r
              ? ((i._stashedText = i.nodeValue), (i.nodeValue = ""))
              : (i.nodeValue = i._stashedText || "")),
        o && o.nodeType === 8)
      )
        if (((i = o.data), i === "/$")) {
          if (n === 0) break;
          n--;
        } else (i !== "$" && i !== "$?" && i !== "$~" && i !== "$!") || n++;
      i = o;
    } while (i);
  }
  function Sh(n) {
    var r = n.firstChild;
    for (r && r.nodeType === 10 && (r = r.nextSibling); r; ) {
      var i = r;
      switch (((r = r.nextSibling), i.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Sh(i), Au(i));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      n.removeChild(i);
    }
  }
  function RS(n, r, i, o) {
    for (; n.nodeType === 1; ) {
      var h = i;
      if (n.nodeName.toLowerCase() !== r.toLowerCase()) {
        if (!o && (n.nodeName !== "INPUT" || n.type !== "hidden")) break;
      } else if (o) {
        if (!n[Mi])
          switch (r) {
            case "meta":
              if (!n.hasAttribute("itemprop")) break;
              return n;
            case "link":
              if (
                ((f = n.getAttribute("rel")),
                f === "stylesheet" && n.hasAttribute("data-precedence"))
              )
                break;
              if (
                f !== h.rel ||
                n.getAttribute("href") !== (h.href == null || h.href === "" ? null : h.href) ||
                n.getAttribute("crossorigin") !== (h.crossOrigin == null ? null : h.crossOrigin) ||
                n.getAttribute("title") !== (h.title == null ? null : h.title)
              )
                break;
              return n;
            case "style":
              if (n.hasAttribute("data-precedence")) break;
              return n;
            case "script":
              if (
                ((f = n.getAttribute("src")),
                (f !== (h.src == null ? null : h.src) ||
                  n.getAttribute("type") !== (h.type == null ? null : h.type) ||
                  n.getAttribute("crossorigin") !==
                    (h.crossOrigin == null ? null : h.crossOrigin)) &&
                  f &&
                  n.hasAttribute("async") &&
                  !n.hasAttribute("itemprop"))
              )
                break;
              return n;
            default:
              return n;
          }
      } else if (r === "input" && n.type === "hidden") {
        var f = h.name == null ? null : "" + h.name;
        if (h.type === "hidden" && n.getAttribute("name") === f) return n;
      } else return n;
      if (((n = en(n.nextSibling)), n === null)) break;
    }
    return null;
  }
  function AS(n, r, i) {
    if (r === "") return null;
    for (; n.nodeType !== 3; )
      if (
        ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") && !i) ||
        ((n = en(n.nextSibling)), n === null)
      )
        return null;
    return n;
  }
  function Am(n, r) {
    for (; n.nodeType !== 8; )
      if (
        ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") && !r) ||
        ((n = en(n.nextSibling)), n === null)
      )
        return null;
    return n;
  }
  function wh(n) {
    return n.data === "$?" || n.data === "$~";
  }
  function Eh(n) {
    return n.data === "$!" || (n.data === "$?" && n.ownerDocument.readyState !== "loading");
  }
  function OS(n, r) {
    var i = n.ownerDocument;
    if (n.data === "$~") n._reactRetry = r;
    else if (n.data !== "$?" || i.readyState !== "loading") r();
    else {
      var o = function () {
        (r(), i.removeEventListener("DOMContentLoaded", o));
      };
      (i.addEventListener("DOMContentLoaded", o), (n._reactRetry = o));
    }
  }
  function en(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (
          ((r = n.data),
          r === "$" ||
            r === "$!" ||
            r === "$?" ||
            r === "$~" ||
            r === "&" ||
            r === "F!" ||
            r === "F")
        )
          break;
        if (r === "/$" || r === "/&") return null;
      }
    }
    return n;
  }
  var Th = null;
  function Om(n) {
    n = n.nextSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var i = n.data;
        if (i === "/$" || i === "/&") {
          if (r === 0) return en(n.nextSibling);
          r--;
        } else (i !== "$" && i !== "$!" && i !== "$?" && i !== "$~" && i !== "&") || r++;
      }
      n = n.nextSibling;
    }
    return null;
  }
  function Cm(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var i = n.data;
        if (i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&") {
          if (r === 0) return n;
          r--;
        } else (i !== "/$" && i !== "/&") || r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  function xm(n, r, i) {
    switch (((r = ul(i)), n)) {
      case "html":
        if (((n = r.documentElement), !n)) throw Error(a(452));
        return n;
      case "head":
        if (((n = r.head), !n)) throw Error(a(453));
        return n;
      case "body":
        if (((n = r.body), !n)) throw Error(a(454));
        return n;
      default:
        throw Error(a(451));
    }
  }
  function pa(n) {
    for (var r = n.attributes; r.length; ) n.removeAttributeNode(r[0]);
    Au(n);
  }
  var tn = new Map(),
    km = new Set();
  function cl(n) {
    return typeof n.getRootNode == "function"
      ? n.getRootNode()
      : n.nodeType === 9
        ? n
        : n.ownerDocument;
  }
  var qn = J.d;
  J.d = { f: CS, r: xS, D: kS, C: jS, L: MS, m: DS, X: LS, S: US, M: NS };
  function CS() {
    var n = qn.f(),
      r = tl();
    return n || r;
  }
  function xS(n) {
    var r = As(n);
    r !== null && r.tag === 5 && r.type === "form" ? Fp(r) : qn.r(n);
  }
  var si = typeof document > "u" ? null : document;
  function jm(n, r, i) {
    var o = si;
    if (o && typeof r == "string" && r) {
      var h = Ft(r);
      ((h = 'link[rel="' + n + '"][href="' + h + '"]'),
        typeof i == "string" && (h += '[crossorigin="' + i + '"]'),
        km.has(h) ||
          (km.add(h),
          (n = { rel: n, crossOrigin: i, href: r }),
          o.querySelector(h) === null &&
            ((r = o.createElement("link")), mt(r, "link", n), ot(r), o.head.appendChild(r))));
    }
  }
  function kS(n) {
    (qn.D(n), jm("dns-prefetch", n, null));
  }
  function jS(n, r) {
    (qn.C(n, r), jm("preconnect", n, r));
  }
  function MS(n, r, i) {
    qn.L(n, r, i);
    var o = si;
    if (o && n && r) {
      var h = 'link[rel="preload"][as="' + Ft(r) + '"]';
      r === "image" && i && i.imageSrcSet
        ? ((h += '[imagesrcset="' + Ft(i.imageSrcSet) + '"]'),
          typeof i.imageSizes == "string" && (h += '[imagesizes="' + Ft(i.imageSizes) + '"]'))
        : (h += '[href="' + Ft(n) + '"]');
      var f = h;
      switch (r) {
        case "style":
          f = ii(n);
          break;
        case "script":
          f = ai(n);
      }
      tn.has(f) ||
        ((n = m(
          { rel: "preload", href: r === "image" && i && i.imageSrcSet ? void 0 : n, as: r },
          i,
        )),
        tn.set(f, n),
        o.querySelector(h) !== null ||
          (r === "style" && o.querySelector(ga(f))) ||
          (r === "script" && o.querySelector(ma(f))) ||
          ((r = o.createElement("link")), mt(r, "link", n), ot(r), o.head.appendChild(r)));
    }
  }
  function DS(n, r) {
    qn.m(n, r);
    var i = si;
    if (i && n) {
      var o = r && typeof r.as == "string" ? r.as : "script",
        h = 'link[rel="modulepreload"][as="' + Ft(o) + '"][href="' + Ft(n) + '"]',
        f = h;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = ai(n);
      }
      if (
        !tn.has(f) &&
        ((n = m({ rel: "modulepreload", href: n }, r)), tn.set(f, n), i.querySelector(h) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(ma(f))) return;
        }
        ((o = i.createElement("link")), mt(o, "link", n), ot(o), i.head.appendChild(o));
      }
    }
  }
  function US(n, r, i) {
    qn.S(n, r, i);
    var o = si;
    if (o && n) {
      var h = Os(o).hoistableStyles,
        f = ii(n);
      r = r || "default";
      var v = h.get(f);
      if (!v) {
        var S = { loading: 0, preload: null };
        if ((v = o.querySelector(ga(f)))) S.loading = 5;
        else {
          ((n = m({ rel: "stylesheet", href: n, "data-precedence": r }, i)),
            (i = tn.get(f)) && Rh(n, i));
          var C = (v = o.createElement("link"));
          (ot(C),
            mt(C, "link", n),
            (C._p = new Promise(function (N, I) {
              ((C.onload = N), (C.onerror = I));
            })),
            C.addEventListener("load", function () {
              S.loading |= 1;
            }),
            C.addEventListener("error", function () {
              S.loading |= 2;
            }),
            (S.loading |= 4),
            hl(v, r, o));
        }
        ((v = { type: "stylesheet", instance: v, count: 1, state: S }), h.set(f, v));
      }
    }
  }
  function LS(n, r) {
    qn.X(n, r);
    var i = si;
    if (i && n) {
      var o = Os(i).hoistableScripts,
        h = ai(n),
        f = o.get(h);
      f ||
        ((f = i.querySelector(ma(h))),
        f ||
          ((n = m({ src: n, async: !0 }, r)),
          (r = tn.get(h)) && Ah(n, r),
          (f = i.createElement("script")),
          ot(f),
          mt(f, "link", n),
          i.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        o.set(h, f));
    }
  }
  function NS(n, r) {
    qn.M(n, r);
    var i = si;
    if (i && n) {
      var o = Os(i).hoistableScripts,
        h = ai(n),
        f = o.get(h);
      f ||
        ((f = i.querySelector(ma(h))),
        f ||
          ((n = m({ src: n, async: !0, type: "module" }, r)),
          (r = tn.get(h)) && Ah(n, r),
          (f = i.createElement("script")),
          ot(f),
          mt(f, "link", n),
          i.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        o.set(h, f));
    }
  }
  function Mm(n, r, i, o) {
    var h = (h = ge.current) ? cl(h) : null;
    if (!h) throw Error(a(446));
    switch (n) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string"
          ? ((r = ii(i.href)),
            (i = Os(h).hoistableStyles),
            (o = i.get(r)),
            o || ((o = { type: "style", instance: null, count: 0, state: null }), i.set(r, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          i.rel === "stylesheet" &&
          typeof i.href == "string" &&
          typeof i.precedence == "string"
        ) {
          n = ii(i.href);
          var f = Os(h).hoistableStyles,
            v = f.get(n);
          if (
            (v ||
              ((h = h.ownerDocument || h),
              (v = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(n, v),
              (f = h.querySelector(ga(n))) && !f._p && ((v.instance = f), (v.state.loading = 5)),
              tn.has(n) ||
                ((i = {
                  rel: "preload",
                  as: "style",
                  href: i.href,
                  crossOrigin: i.crossOrigin,
                  integrity: i.integrity,
                  media: i.media,
                  hrefLang: i.hrefLang,
                  referrerPolicy: i.referrerPolicy,
                }),
                tn.set(n, i),
                f || PS(h, n, i, v.state))),
            r && o === null)
          )
            throw Error(a(528, ""));
          return v;
        }
        if (r && o !== null) throw Error(a(529, ""));
        return null;
      case "script":
        return (
          (r = i.async),
          (i = i.src),
          typeof i == "string" && r && typeof r != "function" && typeof r != "symbol"
            ? ((r = ai(i)),
              (i = Os(h).hoistableScripts),
              (o = i.get(r)),
              o || ((o = { type: "script", instance: null, count: 0, state: null }), i.set(r, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(a(444, n));
    }
  }
  function ii(n) {
    return 'href="' + Ft(n) + '"';
  }
  function ga(n) {
    return 'link[rel="stylesheet"][' + n + "]";
  }
  function Dm(n) {
    return m({}, n, { "data-precedence": n.precedence, precedence: null });
  }
  function PS(n, r, i, o) {
    n.querySelector('link[rel="preload"][as="style"][' + r + "]")
      ? (o.loading = 1)
      : ((r = n.createElement("link")),
        (o.preload = r),
        r.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        r.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        mt(r, "link", i),
        ot(r),
        n.head.appendChild(r));
  }
  function ai(n) {
    return '[src="' + Ft(n) + '"]';
  }
  function ma(n) {
    return "script[async]" + n;
  }
  function Um(n, r, i) {
    if ((r.count++, r.instance === null))
      switch (r.type) {
        case "style":
          var o = n.querySelector('style[data-href~="' + Ft(i.href) + '"]');
          if (o) return ((r.instance = o), ot(o), o);
          var h = m({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (n.ownerDocument || n).createElement("style")),
            ot(o),
            mt(o, "style", h),
            hl(o, i.precedence, n),
            (r.instance = o)
          );
        case "stylesheet":
          h = ii(i.href);
          var f = n.querySelector(ga(h));
          if (f) return ((r.state.loading |= 4), (r.instance = f), ot(f), f);
          ((o = Dm(i)),
            (h = tn.get(h)) && Rh(o, h),
            (f = (n.ownerDocument || n).createElement("link")),
            ot(f));
          var v = f;
          return (
            (v._p = new Promise(function (S, C) {
              ((v.onload = S), (v.onerror = C));
            })),
            mt(f, "link", o),
            (r.state.loading |= 4),
            hl(f, i.precedence, n),
            (r.instance = f)
          );
        case "script":
          return (
            (f = ai(i.src)),
            (h = n.querySelector(ma(f)))
              ? ((r.instance = h), ot(h), h)
              : ((o = i),
                (h = tn.get(f)) && ((o = m({}, i)), Ah(o, h)),
                (n = n.ownerDocument || n),
                (h = n.createElement("script")),
                ot(h),
                mt(h, "link", o),
                n.head.appendChild(h),
                (r.instance = h))
          );
        case "void":
          return null;
        default:
          throw Error(a(443, r.type));
      }
    else
      r.type === "stylesheet" &&
        (r.state.loading & 4) === 0 &&
        ((o = r.instance), (r.state.loading |= 4), hl(o, i.precedence, n));
    return r.instance;
  }
  function hl(n, r, i) {
    for (
      var o = i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        h = o.length ? o[o.length - 1] : null,
        f = h,
        v = 0;
      v < o.length;
      v++
    ) {
      var S = o[v];
      if (S.dataset.precedence === r) f = S;
      else if (f !== h) break;
    }
    f
      ? f.parentNode.insertBefore(n, f.nextSibling)
      : ((r = i.nodeType === 9 ? i.head : i), r.insertBefore(n, r.firstChild));
  }
  function Rh(n, r) {
    (n.crossOrigin == null && (n.crossOrigin = r.crossOrigin),
      n.referrerPolicy == null && (n.referrerPolicy = r.referrerPolicy),
      n.title == null && (n.title = r.title));
  }
  function Ah(n, r) {
    (n.crossOrigin == null && (n.crossOrigin = r.crossOrigin),
      n.referrerPolicy == null && (n.referrerPolicy = r.referrerPolicy),
      n.integrity == null && (n.integrity = r.integrity));
  }
  var fl = null;
  function Lm(n, r, i) {
    if (fl === null) {
      var o = new Map(),
        h = (fl = new Map());
      h.set(i, o);
    } else ((h = fl), (o = h.get(i)), o || ((o = new Map()), h.set(i, o)));
    if (o.has(n)) return o;
    for (o.set(n, null), i = i.getElementsByTagName(n), h = 0; h < i.length; h++) {
      var f = i[h];
      if (
        !(f[Mi] || f[ft] || (n === "link" && f.getAttribute("rel") === "stylesheet")) &&
        f.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var v = f.getAttribute(r) || "";
        v = n + v;
        var S = o.get(v);
        S ? S.push(f) : o.set(v, [f]);
      }
    }
    return o;
  }
  function Nm(n, r, i) {
    ((n = n.ownerDocument || n),
      n.head.insertBefore(i, r === "title" ? n.querySelector("head > title") : null));
  }
  function zS(n, r, i) {
    if (i === 1 || r.itemProp != null) return !1;
    switch (n) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof r.precedence != "string" || typeof r.href != "string" || r.href === "") break;
        return !0;
      case "link":
        if (
          typeof r.rel != "string" ||
          typeof r.href != "string" ||
          r.href === "" ||
          r.onLoad ||
          r.onError
        )
          break;
        return r.rel === "stylesheet"
          ? ((n = r.disabled), typeof r.precedence == "string" && n == null)
          : !0;
      case "script":
        if (
          r.async &&
          typeof r.async != "function" &&
          typeof r.async != "symbol" &&
          !r.onLoad &&
          !r.onError &&
          r.src &&
          typeof r.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Pm(n) {
    return !(n.type === "stylesheet" && (n.state.loading & 3) === 0);
  }
  function BS(n, r, i, o) {
    if (
      i.type === "stylesheet" &&
      (typeof o.media != "string" || matchMedia(o.media).matches !== !1) &&
      (i.state.loading & 4) === 0
    ) {
      if (i.instance === null) {
        var h = ii(o.href),
          f = r.querySelector(ga(h));
        if (f) {
          ((r = f._p),
            r !== null &&
              typeof r == "object" &&
              typeof r.then == "function" &&
              (n.count++, (n = dl.bind(n)), r.then(n, n)),
            (i.state.loading |= 4),
            (i.instance = f),
            ot(f));
          return;
        }
        ((f = r.ownerDocument || r),
          (o = Dm(o)),
          (h = tn.get(h)) && Rh(o, h),
          (f = f.createElement("link")),
          ot(f));
        var v = f;
        ((v._p = new Promise(function (S, C) {
          ((v.onload = S), (v.onerror = C));
        })),
          mt(f, "link", o),
          (i.instance = f));
      }
      (n.stylesheets === null && (n.stylesheets = new Map()),
        n.stylesheets.set(i, r),
        (r = i.state.preload) &&
          (i.state.loading & 3) === 0 &&
          (n.count++,
          (i = dl.bind(n)),
          r.addEventListener("load", i),
          r.addEventListener("error", i)));
    }
  }
  var Oh = 0;
  function HS(n, r) {
    return (
      n.stylesheets && n.count === 0 && gl(n, n.stylesheets),
      0 < n.count || 0 < n.imgCount
        ? function (i) {
            var o = setTimeout(function () {
              if ((n.stylesheets && gl(n, n.stylesheets), n.unsuspend)) {
                var f = n.unsuspend;
                ((n.unsuspend = null), f());
              }
            }, 6e4 + r);
            0 < n.imgBytes && Oh === 0 && (Oh = 62500 * _S());
            var h = setTimeout(
              function () {
                if (
                  ((n.waitingForImages = !1),
                  n.count === 0 && (n.stylesheets && gl(n, n.stylesheets), n.unsuspend))
                ) {
                  var f = n.unsuspend;
                  ((n.unsuspend = null), f());
                }
              },
              (n.imgBytes > Oh ? 50 : 800) + r,
            );
            return (
              (n.unsuspend = i),
              function () {
                ((n.unsuspend = null), clearTimeout(o), clearTimeout(h));
              }
            );
          }
        : null
    );
  }
  function dl() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) gl(this, this.stylesheets);
      else if (this.unsuspend) {
        var n = this.unsuspend;
        ((this.unsuspend = null), n());
      }
    }
  }
  var pl = null;
  function gl(n, r) {
    ((n.stylesheets = null),
      n.unsuspend !== null &&
        (n.count++, (pl = new Map()), r.forEach(IS, n), (pl = null), dl.call(n)));
  }
  function IS(n, r) {
    if (!(r.state.loading & 4)) {
      var i = pl.get(n);
      if (i) var o = i.get(null);
      else {
        ((i = new Map()), pl.set(n, i));
        for (
          var h = n.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0;
          f < h.length;
          f++
        ) {
          var v = h[f];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") &&
            (i.set(v.dataset.precedence, v), (o = v));
        }
        o && i.set(null, o);
      }
      ((h = r.instance),
        (v = h.getAttribute("data-precedence")),
        (f = i.get(v) || o),
        f === o && i.set(null, h),
        i.set(v, h),
        this.count++,
        (o = dl.bind(this)),
        h.addEventListener("load", o),
        h.addEventListener("error", o),
        f
          ? f.parentNode.insertBefore(h, f.nextSibling)
          : ((n = n.nodeType === 9 ? n.head : n), n.insertBefore(h, n.firstChild)),
        (r.state.loading |= 4));
    }
  }
  var ya = {
    $$typeof: j,
    Provider: null,
    Consumer: null,
    _currentValue: le,
    _currentValue2: le,
    _threadCount: 0,
  };
  function qS(n, r, i, o, h, f, v, S, C) {
    ((this.tag = 1),
      (this.containerInfo = n),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = wu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = wu(0)),
      (this.hiddenUpdates = wu(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = h),
      (this.onCaughtError = f),
      (this.onRecoverableError = v),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = C),
      (this.incompleteTransitions = new Map()));
  }
  function zm(n, r, i, o, h, f, v, S, C, N, I, K) {
    return (
      (n = new qS(n, r, i, v, C, N, I, K, S)),
      (r = 1),
      f === !0 && (r |= 24),
      (f = zt(3, null, null, r)),
      (n.current = f),
      (f.stateNode = n),
      (r = ac()),
      r.refCount++,
      (n.pooledCache = r),
      r.refCount++,
      (f.memoizedState = { element: o, isDehydrated: i, cache: r }),
      cc(f),
      n
    );
  }
  function Bm(n) {
    return n ? ((n = Ps), n) : Ps;
  }
  function Hm(n, r, i, o, h, f) {
    ((h = Bm(h)),
      o.context === null ? (o.context = h) : (o.pendingContext = h),
      (o = or(r)),
      (o.payload = { element: i }),
      (f = f === void 0 ? null : f),
      f !== null && (o.callback = f),
      (i = lr(n, o, r)),
      i !== null && (xt(i, n, r), Yi(i, n, r)));
  }
  function Im(n, r) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var i = n.retryLane;
      n.retryLane = i !== 0 && i < r ? i : r;
    }
  }
  function Ch(n, r) {
    (Im(n, r), (n = n.alternate) && Im(n, r));
  }
  function qm(n) {
    if (n.tag === 13 || n.tag === 31) {
      var r = Yr(n, 67108864);
      (r !== null && xt(r, n, 67108864), Ch(n, 67108864));
    }
  }
  function $m(n) {
    if (n.tag === 13 || n.tag === 31) {
      var r = $t();
      r = Eu(r);
      var i = Yr(n, r);
      (i !== null && xt(i, n, r), Ch(n, r));
    }
  }
  var ml = !0;
  function $S(n, r, i, o) {
    var h = H.T;
    H.T = null;
    var f = J.p;
    try {
      ((J.p = 2), xh(n, r, i, o));
    } finally {
      ((J.p = f), (H.T = h));
    }
  }
  function GS(n, r, i, o) {
    var h = H.T;
    H.T = null;
    var f = J.p;
    try {
      ((J.p = 8), xh(n, r, i, o));
    } finally {
      ((J.p = f), (H.T = h));
    }
  }
  function xh(n, r, i, o) {
    if (ml) {
      var h = kh(o);
      if (h === null) (gh(n, r, o, yl, i), Vm(n, o));
      else if (KS(h, n, r, i, o)) o.stopPropagation();
      else if ((Vm(n, o), r & 4 && -1 < VS.indexOf(n))) {
        for (; h !== null; ) {
          var f = As(h);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var v = Gr(f.pendingLanes);
                  if (v !== 0) {
                    var S = f;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; v; ) {
                      var C = 1 << (31 - Nt(v));
                      ((S.entanglements[1] |= C), (v &= ~C));
                    }
                    (mn(f), (Oe & 6) === 0 && ((Wo = bt() + 500), ha(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((S = Yr(f, 2)), S !== null && xt(S, f, 2), tl(), Ch(f, 2));
            }
          if (((f = kh(o)), f === null && gh(n, r, o, yl, i), f === h)) break;
          h = f;
        }
        h !== null && o.stopPropagation();
      } else gh(n, r, o, null, i);
    }
  }
  function kh(n) {
    return ((n = Mu(n)), jh(n));
  }
  var yl = null;
  function jh(n) {
    if (((yl = null), (n = Rs(n)), n !== null)) {
      var r = u(n);
      if (r === null) n = null;
      else {
        var i = r.tag;
        if (i === 13) {
          if (((n = c(r)), n !== null)) return n;
          n = null;
        } else if (i === 31) {
          if (((n = d(r)), n !== null)) return n;
          n = null;
        } else if (i === 3) {
          if (r.stateNode.current.memoizedState.isDehydrated)
            return r.tag === 3 ? r.stateNode.containerInfo : null;
          n = null;
        } else r !== n && (n = null);
      }
    }
    return ((yl = n), null);
  }
  function Gm(n) {
    switch (n) {
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
        switch (Pe()) {
          case ht:
            return 2;
          case fn:
            return 8;
          case Es:
          case jb:
            return 32;
          case ed:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mh = !1,
    br = null,
    _r = null,
    Sr = null,
    va = new Map(),
    ba = new Map(),
    wr = [],
    VS =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Vm(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        br = null;
        break;
      case "dragenter":
      case "dragleave":
        _r = null;
        break;
      case "mouseover":
      case "mouseout":
        Sr = null;
        break;
      case "pointerover":
      case "pointerout":
        va.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ba.delete(r.pointerId);
    }
  }
  function _a(n, r, i, o, h, f) {
    return n === null || n.nativeEvent !== f
      ? ((n = {
          blockedOn: r,
          domEventName: i,
          eventSystemFlags: o,
          nativeEvent: f,
          targetContainers: [h],
        }),
        r !== null && ((r = As(r)), r !== null && qm(r)),
        n)
      : ((n.eventSystemFlags |= o),
        (r = n.targetContainers),
        h !== null && r.indexOf(h) === -1 && r.push(h),
        n);
  }
  function KS(n, r, i, o, h) {
    switch (r) {
      case "focusin":
        return ((br = _a(br, n, r, i, o, h)), !0);
      case "dragenter":
        return ((_r = _a(_r, n, r, i, o, h)), !0);
      case "mouseover":
        return ((Sr = _a(Sr, n, r, i, o, h)), !0);
      case "pointerover":
        var f = h.pointerId;
        return (va.set(f, _a(va.get(f) || null, n, r, i, o, h)), !0);
      case "gotpointercapture":
        return ((f = h.pointerId), ba.set(f, _a(ba.get(f) || null, n, r, i, o, h)), !0);
    }
    return !1;
  }
  function Km(n) {
    var r = Rs(n.target);
    if (r !== null) {
      var i = u(r);
      if (i !== null) {
        if (((r = i.tag), r === 13)) {
          if (((r = c(i)), r !== null)) {
            ((n.blockedOn = r),
              ad(n.priority, function () {
                $m(i);
              }));
            return;
          }
        } else if (r === 31) {
          if (((r = d(i)), r !== null)) {
            ((n.blockedOn = r),
              ad(n.priority, function () {
                $m(i);
              }));
            return;
          }
        } else if (r === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function vl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var i = kh(n.nativeEvent);
      if (i === null) {
        i = n.nativeEvent;
        var o = new i.constructor(i.type, i);
        ((ju = o), i.target.dispatchEvent(o), (ju = null));
      } else return ((r = As(i)), r !== null && qm(r), (n.blockedOn = i), !1);
      r.shift();
    }
    return !0;
  }
  function Fm(n, r, i) {
    vl(n) && i.delete(r);
  }
  function FS() {
    ((Mh = !1),
      br !== null && vl(br) && (br = null),
      _r !== null && vl(_r) && (_r = null),
      Sr !== null && vl(Sr) && (Sr = null),
      va.forEach(Fm),
      ba.forEach(Fm));
  }
  function bl(n, r) {
    n.blockedOn === r &&
      ((n.blockedOn = null),
      Mh || ((Mh = !0), e.unstable_scheduleCallback(e.unstable_NormalPriority, FS)));
  }
  var _l = null;
  function Qm(n) {
    _l !== n &&
      ((_l = n),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        _l === n && (_l = null);
        for (var r = 0; r < n.length; r += 3) {
          var i = n[r],
            o = n[r + 1],
            h = n[r + 2];
          if (typeof o != "function") {
            if (jh(o || i) === null) continue;
            break;
          }
          var f = As(i);
          f !== null &&
            (n.splice(r, 3),
            (r -= 3),
            kc(f, { pending: !0, data: h, method: i.method, action: o }, o, h));
        }
      }));
  }
  function oi(n) {
    function r(C) {
      return bl(C, n);
    }
    (br !== null && bl(br, n),
      _r !== null && bl(_r, n),
      Sr !== null && bl(Sr, n),
      va.forEach(r),
      ba.forEach(r));
    for (var i = 0; i < wr.length; i++) {
      var o = wr[i];
      o.blockedOn === n && (o.blockedOn = null);
    }
    for (; 0 < wr.length && ((i = wr[0]), i.blockedOn === null); )
      (Km(i), i.blockedOn === null && wr.shift());
    if (((i = (n.ownerDocument || n).$$reactFormReplay), i != null))
      for (o = 0; o < i.length; o += 3) {
        var h = i[o],
          f = i[o + 1],
          v = h[Et] || null;
        if (typeof f == "function") v || Qm(i);
        else if (v) {
          var S = null;
          if (f && f.hasAttribute("formAction")) {
            if (((h = f), (v = f[Et] || null))) S = v.formAction;
            else if (jh(h) !== null) continue;
          } else S = v.action;
          (typeof S == "function" ? (i[o + 1] = S) : (i.splice(o, 3), (o -= 3)), Qm(i));
        }
      }
  }
  function Ym() {
    function n(f) {
      f.canIntercept &&
        f.info === "react-transition" &&
        f.intercept({
          handler: function () {
            return new Promise(function (v) {
              return (h = v);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function r() {
      (h !== null && (h(), (h = null)), o || setTimeout(i, 20));
    }
    function i() {
      if (!o && !navigation.transition) {
        var f = navigation.currentEntry;
        f &&
          f.url != null &&
          navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var o = !1,
        h = null;
      return (
        navigation.addEventListener("navigate", n),
        navigation.addEventListener("navigatesuccess", r),
        navigation.addEventListener("navigateerror", r),
        setTimeout(i, 100),
        function () {
          ((o = !0),
            navigation.removeEventListener("navigate", n),
            navigation.removeEventListener("navigatesuccess", r),
            navigation.removeEventListener("navigateerror", r),
            h !== null && (h(), (h = null)));
        }
      );
    }
  }
  function Dh(n) {
    this._internalRoot = n;
  }
  ((Sl.prototype.render = Dh.prototype.render =
    function (n) {
      var r = this._internalRoot;
      if (r === null) throw Error(a(409));
      var i = r.current,
        o = $t();
      Hm(i, o, n, r, null, null);
    }),
    (Sl.prototype.unmount = Dh.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var r = n.containerInfo;
          (Hm(n.current, 2, null, n, null, null), tl(), (r[Ts] = null));
        }
      }));
  function Sl(n) {
    this._internalRoot = n;
  }
  Sl.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var r = id();
      n = { blockedOn: null, target: n, priority: r };
      for (var i = 0; i < wr.length && r !== 0 && r < wr[i].priority; i++);
      (wr.splice(i, 0, n), i === 0 && Km(n));
    }
  };
  var Jm = t.version;
  if (Jm !== "19.2.5") throw Error(a(527, Jm, "19.2.5"));
  J.findDOMNode = function (n) {
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function"
        ? Error(a(188))
        : ((n = Object.keys(n).join(",")), Error(a(268, n)));
    return ((n = g(r)), (n = n !== null ? y(n) : null), (n = n === null ? null : n.stateNode), n);
  };
  var QS = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.2.5",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wl.isDisabled && wl.supportsFiber)
      try {
        ((xi = wl.inject(QS)), (Lt = wl));
      } catch {}
  }
  return (
    (wa.createRoot = function (n, r) {
      if (!l(n)) throw Error(a(299));
      var i = !1,
        o = "",
        h = rg,
        f = sg,
        v = ig;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (i = !0),
          r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (h = r.onUncaughtError),
          r.onCaughtError !== void 0 && (f = r.onCaughtError),
          r.onRecoverableError !== void 0 && (v = r.onRecoverableError)),
        (r = zm(n, 1, !1, null, null, i, o, null, h, f, v, Ym)),
        (n[Ts] = r.current),
        ph(n),
        new Dh(r)
      );
    }),
    (wa.hydrateRoot = function (n, r, i) {
      if (!l(n)) throw Error(a(299));
      var o = !1,
        h = "",
        f = rg,
        v = sg,
        S = ig,
        C = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (o = !0),
          i.identifierPrefix !== void 0 && (h = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (f = i.onUncaughtError),
          i.onCaughtError !== void 0 && (v = i.onCaughtError),
          i.onRecoverableError !== void 0 && (S = i.onRecoverableError),
          i.formState !== void 0 && (C = i.formState)),
        (r = zm(n, 1, !0, r, i ?? null, o, h, C, f, v, S, Ym)),
        (r.context = Bm(null)),
        (i = r.current),
        (o = $t()),
        (o = Eu(o)),
        (h = or(o)),
        (h.callback = null),
        lr(i, h, o),
        (i = o),
        (r.current.lanes = i),
        ji(r, i),
        mn(r),
        (n[Ts] = r.current),
        ph(n),
        new Sl(r)
      );
    }),
    (wa.version = "19.2.5"),
    wa
  );
}
var ay;
function sw() {
  if (ay) return Nh.exports;
  ay = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return (e(), (Nh.exports = rw()), Nh.exports);
}
var iw = sw(),
  aw = "__TSS_CONTEXT",
  cf = Symbol.for("TSS_SERVER_FUNCTION"),
  ow = "application/x-tss-framed",
  $n = { JSON: 0, CHUNK: 1, END: 2, ERROR: 3 },
  lw = /;\s*v=(\d+)/;
function uw(e) {
  const t = e.match(lw);
  return t ? parseInt(t[1], 10) : void 0;
}
function cw(e) {
  const t = uw(e);
  if (t !== void 0 && t !== 1)
    throw new Error(
      `Incompatible framed protocol version: server=${t}, client=1. Please ensure client and server are using compatible versions.`,
    );
}
var qv = () => window.__TSS_START_OPTIONS__,
  $v = !1;
function za(e) {
  return e[e.length - 1];
}
function hw(e) {
  return typeof e == "function";
}
function xr(e, t) {
  return hw(e) ? e(t) : e;
}
var fw = Object.prototype.hasOwnProperty,
  oy = Object.prototype.propertyIsEnumerable,
  dw = () => Object.create(null),
  ls = (e, t) => kr(e, t, dw);
function kr(e, t, s = () => ({}), a = 0) {
  if (e === t) return e;
  if (a > 500) return t;
  const l = t,
    u = cy(e) && cy(l);
  if (!u && !(Ti(e) && Ti(l))) return l;
  const c = u ? e : ly(e);
  if (!c) return l;
  const d = u ? l : ly(l);
  if (!d) return l;
  const p = c.length,
    g = d.length,
    y = u ? new Array(g) : s();
  let m = 0;
  for (let b = 0; b < g; b++) {
    const _ = u ? b : d[b],
      w = e[_],
      A = l[_];
    if (w === A) {
      ((y[_] = w), (u ? b < p : fw.call(e, _)) && m++);
      continue;
    }
    if (w === null || A === null || typeof w != "object" || typeof A != "object") {
      y[_] = A;
      continue;
    }
    const E = kr(w, A, s, a + 1);
    ((y[_] = E), E === w && m++);
  }
  return p === g && m === p ? e : y;
}
function ly(e) {
  const t = Object.getOwnPropertyNames(e);
  for (const l of t) if (!oy.call(e, l)) return !1;
  const s = Object.getOwnPropertySymbols(e);
  if (s.length === 0) return t;
  const a = t;
  for (const l of s) {
    if (!oy.call(e, l)) return !1;
    a.push(l);
  }
  return a;
}
function Ti(e) {
  if (!uy(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const s = t.prototype;
  return !(!uy(s) || !s.hasOwnProperty("isPrototypeOf"));
}
function uy(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function cy(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Mt(e, t, s) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return !1;
    for (let a = 0, l = e.length; a < l; a++) if (!Mt(e[a], t[a], s)) return !1;
    return !0;
  }
  if (Ti(e) && Ti(t)) {
    const a = s?.ignoreUndefined ?? !0;
    if (s?.partial) {
      for (const c in t) if ((!a || t[c] !== void 0) && !Mt(e[c], t[c], s)) return !1;
      return !0;
    }
    let l = 0;
    if (!a) l = Object.keys(e).length;
    else for (const c in e) e[c] !== void 0 && l++;
    let u = 0;
    for (const c in t) if ((!a || t[c] !== void 0) && (u++, u > l || !Mt(e[c], t[c], s))) return !1;
    return l === u;
  }
  return !1;
}
function vs(e) {
  let t, s;
  const a = new Promise((l, u) => {
    ((t = l), (s = u));
  });
  return (
    (a.status = "pending"),
    (a.resolve = (l) => {
      ((a.status = "resolved"), (a.value = l), t(l), e?.(l));
    }),
    (a.reject = (l) => {
      ((a.status = "rejected"), s(l));
    }),
    a
  );
}
function pw(e) {
  return typeof e?.message != "string"
    ? !1
    : e.message.startsWith("Failed to fetch dynamically imported module") ||
        e.message.startsWith("error loading dynamically imported module") ||
        e.message.startsWith("Importing a module script failed");
}
function Ba(e) {
  return !!(e && typeof e == "object" && typeof e.then == "function");
}
function gw(e) {
  return e.replace(/[\x00-\x1f\x7f]/g, "");
}
function hy(e) {
  let t;
  try {
    t = decodeURI(e);
  } catch {
    t = e.replaceAll(/%[0-9A-F]{2}/gi, (s) => {
      try {
        return decodeURI(s);
      } catch {
        return s;
      }
    });
  }
  return gw(t);
}
var mw = ["http:", "https:", "mailto:", "tel:"];
function Gl(e, t) {
  if (!e) return !1;
  try {
    const s = new URL(e);
    return !t.has(s.protocol);
  } catch {
    return !1;
  }
}
var yw = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  },
  vw = /[&><\u2028\u2029]/g;
function bw(e) {
  return e.replace(vw, (t) => yw[t]);
}
function Ea(e) {
  if (!e) return { path: e, handledProtocolRelativeURL: !1 };
  if (!/[%\\\x00-\x1f\x7f]/.test(e) && !e.startsWith("//"))
    return { path: e, handledProtocolRelativeURL: !1 };
  const t = /%25|%5C/gi;
  let s = 0,
    a = "",
    l;
  for (; (l = t.exec(e)) !== null; ) ((a += hy(e.slice(s, l.index)) + l[0]), (s = t.lastIndex));
  a = a + hy(s ? e.slice(s) : e);
  let u = !1;
  return (
    a.startsWith("//") && ((u = !0), (a = "/" + a.replace(/^\/+/, ""))),
    { path: a, handledProtocolRelativeURL: u }
  );
}
function _w(e) {
  return /\s|[^\u0000-\u007F]/.test(e) ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : e;
}
function Sw(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let s = 0; s < e.length; s++) if (e[s] !== t[s]) return !1;
  return !0;
}
function Ut() {
  throw new Error("Invariant failed");
}
function Ha(e) {
  const t = new Map();
  let s, a;
  const l = (u) => {
    u.next &&
      (u.prev
        ? ((u.prev.next = u.next),
          (u.next.prev = u.prev),
          (u.next = void 0),
          a && ((a.next = u), (u.prev = a)))
        : ((u.next.prev = void 0),
          (s = u.next),
          (u.next = void 0),
          a && ((u.prev = a), (a.next = u))),
      (a = u));
  };
  return {
    get(u) {
      const c = t.get(u);
      if (c) return (l(c), c.value);
    },
    set(u, c) {
      if (t.size >= e && s) {
        const p = s;
        (t.delete(p.key),
          p.next && ((s = p.next), (p.next.prev = void 0)),
          p === a && (a = void 0));
      }
      const d = t.get(u);
      if (d) ((d.value = c), l(d));
      else {
        const p = { key: u, value: c, prev: a };
        (a && (a.next = p), (a = p), s || (s = p), t.set(u, p));
      }
    },
    clear() {
      (t.clear(), (s = void 0), (a = void 0));
    },
  };
}
var jr = 4,
  Gv = 5;
function ww(e) {
  const t = e.indexOf("{");
  if (t === -1) return null;
  const s = e.indexOf("}", t);
  return s === -1 || t + 1 >= e.length ? null : [t, s];
}
function Nf(e, t, s = new Uint16Array(6)) {
  const a = e.indexOf("/", t),
    l = a === -1 ? e.length : a,
    u = e.substring(t, l);
  if (!u || !u.includes("$"))
    return ((s[0] = 0), (s[1] = t), (s[2] = t), (s[3] = l), (s[4] = l), (s[5] = l), s);
  if (u === "$") {
    const d = e.length;
    return ((s[0] = 2), (s[1] = t), (s[2] = t), (s[3] = d), (s[4] = d), (s[5] = d), s);
  }
  if (u.charCodeAt(0) === 36)
    return ((s[0] = 1), (s[1] = t), (s[2] = t + 1), (s[3] = l), (s[4] = l), (s[5] = l), s);
  const c = ww(u);
  if (c) {
    const [d, p] = c,
      g = u.charCodeAt(d + 1);
    if (g === 45) {
      if (d + 2 < u.length && u.charCodeAt(d + 2) === 36) {
        const y = d + 3,
          m = p;
        if (y < m)
          return (
            (s[0] = 3),
            (s[1] = t + d),
            (s[2] = t + y),
            (s[3] = t + m),
            (s[4] = t + p + 1),
            (s[5] = l),
            s
          );
      }
    } else if (g === 36) {
      const y = d + 1,
        m = d + 2;
      return m === p
        ? ((s[0] = 2),
          (s[1] = t + d),
          (s[2] = t + y),
          (s[3] = t + m),
          (s[4] = t + p + 1),
          (s[5] = e.length),
          s)
        : ((s[0] = 1),
          (s[1] = t + d),
          (s[2] = t + m),
          (s[3] = t + p),
          (s[4] = t + p + 1),
          (s[5] = l),
          s);
    }
  }
  return ((s[0] = 0), (s[1] = t), (s[2] = t), (s[3] = l), (s[4] = l), (s[5] = l), s);
}
function lu(e, t, s, a, l, u, c) {
  c?.(s);
  let d = a;
  {
    const p = s.fullPath ?? s.from,
      g = p.length,
      y = s.options?.caseSensitive ?? e,
      m = !!(s.options?.params?.parse && s.options?.skipRouteOnParseError?.params);
    for (; d < g; ) {
      const _ = Nf(p, d, t);
      let w;
      const A = d,
        E = _[5];
      switch (((d = E + 1), u++, _[0])) {
        case 0: {
          const O = p.substring(_[2], _[3]);
          if (y) {
            const M = l.static?.get(O);
            if (M) w = M;
            else {
              l.static ??= new Map();
              const j = hs(s.fullPath ?? s.from);
              ((j.parent = l), (j.depth = u), (w = j), l.static.set(O, j));
            }
          } else {
            const M = O.toLowerCase(),
              j = l.staticInsensitive?.get(M);
            if (j) w = j;
            else {
              l.staticInsensitive ??= new Map();
              const L = hs(s.fullPath ?? s.from);
              ((L.parent = l), (L.depth = u), (w = L), l.staticInsensitive.set(M, L));
            }
          }
          break;
        }
        case 1: {
          const O = p.substring(A, _[1]),
            M = p.substring(_[4], E),
            j = y && !!(O || M),
            L = O ? (j ? O : O.toLowerCase()) : void 0,
            Q = M ? (j ? M : M.toLowerCase()) : void 0,
            F =
              !m &&
              l.dynamic?.find(
                (B) =>
                  !B.skipOnParamError && B.caseSensitive === j && B.prefix === L && B.suffix === Q,
              );
          if (F) w = F;
          else {
            const B = Ih(1, s.fullPath ?? s.from, j, L, Q);
            ((w = B), (B.depth = u), (B.parent = l), (l.dynamic ??= []), l.dynamic.push(B));
          }
          break;
        }
        case 3: {
          const O = p.substring(A, _[1]),
            M = p.substring(_[4], E),
            j = y && !!(O || M),
            L = O ? (j ? O : O.toLowerCase()) : void 0,
            Q = M ? (j ? M : M.toLowerCase()) : void 0,
            F =
              !m &&
              l.optional?.find(
                (B) =>
                  !B.skipOnParamError && B.caseSensitive === j && B.prefix === L && B.suffix === Q,
              );
          if (F) w = F;
          else {
            const B = Ih(3, s.fullPath ?? s.from, j, L, Q);
            ((w = B), (B.parent = l), (B.depth = u), (l.optional ??= []), l.optional.push(B));
          }
          break;
        }
        case 2: {
          const O = p.substring(A, _[1]),
            M = p.substring(_[4], E),
            j = y && !!(O || M),
            L = O ? (j ? O : O.toLowerCase()) : void 0,
            Q = M ? (j ? M : M.toLowerCase()) : void 0,
            F = Ih(2, s.fullPath ?? s.from, j, L, Q);
          ((w = F), (F.parent = l), (F.depth = u), (l.wildcard ??= []), l.wildcard.push(F));
        }
      }
      l = w;
    }
    if (m && s.children && !s.isRoot && s.id && s.id.charCodeAt(s.id.lastIndexOf("/") + 1) === 95) {
      const _ = hs(s.fullPath ?? s.from);
      ((_.kind = Gv),
        (_.parent = l),
        u++,
        (_.depth = u),
        (l.pathless ??= []),
        l.pathless.push(_),
        (l = _));
    }
    const b = (s.path || !s.children) && !s.isRoot;
    if (b && p.endsWith("/")) {
      const _ = hs(s.fullPath ?? s.from);
      ((_.kind = jr), (_.parent = l), u++, (_.depth = u), (l.index = _), (l = _));
    }
    ((l.parse = s.options?.params?.parse ?? null),
      (l.skipOnParamError = m),
      (l.parsingPriority = s.options?.skipRouteOnParseError?.priority ?? 0),
      b && !l.route && ((l.route = s), (l.fullPath = s.fullPath ?? s.from)));
  }
  if (s.children) for (const p of s.children) lu(e, t, p, d, l, u, c);
}
function Hh(e, t) {
  if (e.skipOnParamError && !t.skipOnParamError) return -1;
  if (!e.skipOnParamError && t.skipOnParamError) return 1;
  if (e.skipOnParamError && t.skipOnParamError && (e.parsingPriority || t.parsingPriority))
    return t.parsingPriority - e.parsingPriority;
  if (e.prefix && t.prefix && e.prefix !== t.prefix) {
    if (e.prefix.startsWith(t.prefix)) return -1;
    if (t.prefix.startsWith(e.prefix)) return 1;
  }
  if (e.suffix && t.suffix && e.suffix !== t.suffix) {
    if (e.suffix.endsWith(t.suffix)) return -1;
    if (t.suffix.endsWith(e.suffix)) return 1;
  }
  return e.prefix && !t.prefix
    ? -1
    : !e.prefix && t.prefix
      ? 1
      : e.suffix && !t.suffix
        ? -1
        : !e.suffix && t.suffix
          ? 1
          : e.caseSensitive && !t.caseSensitive
            ? -1
            : !e.caseSensitive && t.caseSensitive
              ? 1
              : 0;
}
function Rr(e) {
  if (e.pathless) for (const t of e.pathless) Rr(t);
  if (e.static) for (const t of e.static.values()) Rr(t);
  if (e.staticInsensitive) for (const t of e.staticInsensitive.values()) Rr(t);
  if (e.dynamic?.length) {
    e.dynamic.sort(Hh);
    for (const t of e.dynamic) Rr(t);
  }
  if (e.optional?.length) {
    e.optional.sort(Hh);
    for (const t of e.optional) Rr(t);
  }
  if (e.wildcard?.length) {
    e.wildcard.sort(Hh);
    for (const t of e.wildcard) Rr(t);
  }
}
function hs(e) {
  return {
    kind: 0,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: e,
    parent: null,
    parse: null,
    skipOnParamError: !1,
    parsingPriority: 0,
  };
}
function Ih(e, t, s, a, l) {
  return {
    kind: e,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: t,
    parent: null,
    parse: null,
    skipOnParamError: !1,
    parsingPriority: 0,
    caseSensitive: s,
    prefix: a,
    suffix: l,
  };
}
function Ew(e, t) {
  const s = hs("/"),
    a = new Uint16Array(6);
  for (const l of e) lu(!1, a, l, 1, s, 0);
  (Rr(s), (t.masksTree = s), (t.flatCache = Ha(1e3)));
}
function Tw(e, t) {
  e ||= "/";
  const s = t.flatCache.get(e);
  if (s) return s;
  const a = Pf(e, t.masksTree);
  return (t.flatCache.set(e, a), a);
}
function Rw(e, t, s, a, l) {
  ((e ||= "/"), (a ||= "/"));
  const u = t ? `case\0${e}` : e;
  let c = l.singleCache.get(u);
  return (
    c || ((c = hs("/")), lu(t, new Uint16Array(6), { from: e }, 1, c, 0), l.singleCache.set(u, c)),
    Pf(a, c, s)
  );
}
function Aw(e, t, s = !1) {
  const a = s ? e : `nofuzz\0${e}`,
    l = t.matchCache.get(a);
  if (l !== void 0) return l;
  e ||= "/";
  let u;
  try {
    u = Pf(e, t.segmentTree, s);
  } catch (c) {
    if (c instanceof URIError) u = null;
    else throw c;
  }
  return (u && (u.branch = xw(u.route)), t.matchCache.set(a, u), u);
}
function Ow(e) {
  return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function Cw(e, t = !1, s) {
  const a = hs(e.fullPath),
    l = new Uint16Array(6),
    u = {},
    c = {};
  let d = 0;
  return (
    lu(t, l, e, 1, a, 0, (p) => {
      if ((s?.(p, d), p.id in u && Ut(), (u[p.id] = p), d !== 0 && p.path)) {
        const g = Ow(p.fullPath);
        (!c[g] || p.fullPath.endsWith("/")) && (c[g] = p);
      }
      d++;
    }),
    Rr(a),
    {
      processedTree: {
        segmentTree: a,
        singleCache: Ha(1e3),
        matchCache: Ha(1e3),
        flatCache: null,
        masksTree: null,
      },
      routesById: u,
      routesByPath: c,
    }
  );
}
function Pf(e, t, s = !1) {
  const a = e.split("/"),
    l = jw(e, a, t, s);
  if (!l) return null;
  const [u] = Vv(e, a, l);
  return { route: l.node.route, rawParams: u, parsedParams: l.parsedParams };
}
function Vv(e, t, s) {
  const a = kw(s.node);
  let l = null;
  const u = Object.create(null);
  let c = s.extract?.part ?? 0,
    d = s.extract?.node ?? 0,
    p = s.extract?.path ?? 0,
    g = s.extract?.segment ?? 0;
  for (; d < a.length; c++, d++, p++, g++) {
    const y = a[d];
    if (y.kind === jr) break;
    if (y.kind === Gv) {
      (g--, c--, p--);
      continue;
    }
    const m = t[c],
      b = p;
    if ((m && (p += m.length), y.kind === 1)) {
      l ??= s.node.fullPath.split("/");
      const _ = l[g],
        w = y.prefix?.length ?? 0;
      if (_.charCodeAt(w) === 123) {
        const A = y.suffix?.length ?? 0,
          E = _.substring(w + 2, _.length - A - 1),
          O = m.substring(w, m.length - A);
        u[E] = decodeURIComponent(O);
      } else {
        const A = _.substring(1);
        u[A] = decodeURIComponent(m);
      }
    } else if (y.kind === 3) {
      if (s.skipped & (1 << d)) {
        (c--, (p = b - 1));
        continue;
      }
      l ??= s.node.fullPath.split("/");
      const _ = l[g],
        w = y.prefix?.length ?? 0,
        A = y.suffix?.length ?? 0,
        E = _.substring(w + 3, _.length - A - 1),
        O = y.suffix || y.prefix ? m.substring(w, m.length - A) : m;
      O && (u[E] = decodeURIComponent(O));
    } else if (y.kind === 2) {
      const _ = y,
        w = e.substring(b + (_.prefix?.length ?? 0), e.length - (_.suffix?.length ?? 0)),
        A = decodeURIComponent(w);
      ((u["*"] = A), (u._splat = A));
      break;
    }
  }
  return (
    s.rawParams && Object.assign(u, s.rawParams),
    [u, { part: c, node: d, path: p, segment: g }]
  );
}
function xw(e) {
  const t = [e];
  for (; e.parentRoute; ) ((e = e.parentRoute), t.push(e));
  return (t.reverse(), t);
}
function kw(e) {
  const t = Array(e.depth + 1);
  do ((t[e.depth] = e), (e = e.parent));
  while (e);
  return t;
}
function jw(e, t, s, a) {
  if (e === "/" && s.index) return { node: s.index, skipped: 0 };
  const l = !za(t),
    u = l && e !== "/",
    c = t.length - (l ? 1 : 0),
    d = [{ node: s, index: 1, skipped: 0, depth: 1, statics: 0, dynamics: 0, optionals: 0 }];
  let p = null,
    g = null;
  for (; d.length; ) {
    const y = d.pop(),
      { node: m, index: b, skipped: _, depth: w, statics: A, dynamics: E, optionals: O } = y;
    let { extract: M, rawParams: j, parsedParams: L } = y;
    if (m.kind === 2 && m.route && !Tl(g, y)) continue;
    if (m.skipOnParamError) {
      if (!fy(e, t, y)) continue;
      ((j = y.rawParams), (M = y.extract), (L = y.parsedParams));
    }
    a && m.route && m.kind !== jr && Tl(p, y) && (p = y);
    const Q = b === c;
    if (
      Q &&
      (m.route && (!u || m.kind === jr || m.kind === 2) && Tl(g, y) && (g = y),
      !m.optional && !m.wildcard && !m.index && !m.pathless)
    )
      continue;
    const F = Q ? void 0 : t[b];
    let B;
    if (Q && m.index) {
      const G = {
        node: m.index,
        index: b,
        skipped: _,
        depth: w + 1,
        statics: A,
        dynamics: E,
        optionals: O,
        extract: M,
        rawParams: j,
        parsedParams: L,
      };
      let Y = !0;
      if ((m.index.skipOnParamError && (fy(e, t, G) || (Y = !1)), Y)) {
        if (!E && !O && !_ && Mw(A, c)) return G;
        Tl(g, G) && (g = G);
      }
    }
    if (m.wildcard)
      for (let G = m.wildcard.length - 1; G >= 0; G--) {
        const Y = m.wildcard[G],
          { prefix: ae, suffix: re } = Y;
        if (!(ae && (Q || !(Y.caseSensitive ? F : (B ??= F.toLowerCase())).startsWith(ae)))) {
          if (re) {
            if (Q) continue;
            const de = t.slice(b).join("/").slice(-re.length);
            if ((Y.caseSensitive ? de : de.toLowerCase()) !== re) continue;
          }
          d.push({
            node: Y,
            index: c,
            skipped: _,
            depth: w + 1,
            statics: A,
            dynamics: E,
            optionals: O,
            extract: M,
            rawParams: j,
            parsedParams: L,
          });
        }
      }
    if (m.optional) {
      const G = _ | (1 << w),
        Y = w + 1;
      for (let ae = m.optional.length - 1; ae >= 0; ae--) {
        const re = m.optional[ae];
        d.push({
          node: re,
          index: b,
          skipped: G,
          depth: Y,
          statics: A,
          dynamics: E,
          optionals: O,
          extract: M,
          rawParams: j,
          parsedParams: L,
        });
      }
      if (!Q)
        for (let ae = m.optional.length - 1; ae >= 0; ae--) {
          const re = m.optional[ae],
            { prefix: de, suffix: Se } = re;
          if (de || Se) {
            const Fe = re.caseSensitive ? F : (B ??= F.toLowerCase());
            if ((de && !Fe.startsWith(de)) || (Se && !Fe.endsWith(Se))) continue;
          }
          d.push({
            node: re,
            index: b + 1,
            skipped: _,
            depth: Y,
            statics: A,
            dynamics: E,
            optionals: O + El(c, b),
            extract: M,
            rawParams: j,
            parsedParams: L,
          });
        }
    }
    if (!Q && m.dynamic && F)
      for (let G = m.dynamic.length - 1; G >= 0; G--) {
        const Y = m.dynamic[G],
          { prefix: ae, suffix: re } = Y;
        if (ae || re) {
          const de = Y.caseSensitive ? F : (B ??= F.toLowerCase());
          if ((ae && !de.startsWith(ae)) || (re && !de.endsWith(re))) continue;
        }
        d.push({
          node: Y,
          index: b + 1,
          skipped: _,
          depth: w + 1,
          statics: A,
          dynamics: E + El(c, b),
          optionals: O,
          extract: M,
          rawParams: j,
          parsedParams: L,
        });
      }
    if (!Q && m.staticInsensitive) {
      const G = m.staticInsensitive.get((B ??= F.toLowerCase()));
      G &&
        d.push({
          node: G,
          index: b + 1,
          skipped: _,
          depth: w + 1,
          statics: A + El(c, b),
          dynamics: E,
          optionals: O,
          extract: M,
          rawParams: j,
          parsedParams: L,
        });
    }
    if (!Q && m.static) {
      const G = m.static.get(F);
      G &&
        d.push({
          node: G,
          index: b + 1,
          skipped: _,
          depth: w + 1,
          statics: A + El(c, b),
          dynamics: E,
          optionals: O,
          extract: M,
          rawParams: j,
          parsedParams: L,
        });
    }
    if (m.pathless) {
      const G = w + 1;
      for (let Y = m.pathless.length - 1; Y >= 0; Y--) {
        const ae = m.pathless[Y];
        d.push({
          node: ae,
          index: b,
          skipped: _,
          depth: G,
          statics: A,
          dynamics: E,
          optionals: O,
          extract: M,
          rawParams: j,
          parsedParams: L,
        });
      }
    }
  }
  if (g) return g;
  if (a && p) {
    let y = p.index;
    for (let b = 0; b < p.index; b++) y += t[b].length;
    const m = y === e.length ? "/" : e.slice(y);
    return ((p.rawParams ??= Object.create(null)), (p.rawParams["**"] = decodeURIComponent(m)), p);
  }
  return null;
}
function El(e, t) {
  return 2 ** (e - t - 1);
}
function Mw(e, t) {
  return e === 2 ** (t - 1) - 1;
}
function fy(e, t, s) {
  try {
    const [a, l] = Vv(e, t, s);
    ((s.rawParams = a), (s.extract = l));
    const u = s.node.parse(a);
    return ((s.parsedParams = Object.assign(Object.create(null), s.parsedParams, u)), !0);
  } catch {
    return null;
  }
}
function Tl(e, t) {
  return e
    ? t.statics > e.statics ||
        (t.statics === e.statics &&
          (t.dynamics > e.dynamics ||
            (t.dynamics === e.dynamics &&
              (t.optionals > e.optionals ||
                (t.optionals === e.optionals &&
                  ((t.node.kind === jr) > (e.node.kind === jr) ||
                    ((t.node.kind === jr) == (e.node.kind === jr) && t.depth > e.depth)))))))
    : !0;
}
function Pl(e) {
  return zf(e.filter((t) => t !== void 0).join("/"));
}
function zf(e) {
  return e.replace(/\/{2,}/g, "/");
}
function Kv(e) {
  return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function Dr(e) {
  const t = e.length;
  return t > 1 && e[t - 1] === "/" ? e.replace(/\/{1,}$/, "") : e;
}
function Fv(e) {
  return Dr(Kv(e));
}
function Vl(e, t) {
  return e?.endsWith("/") && e !== "/" && e !== `${t}/` ? e.slice(0, -1) : e;
}
function Dw(e, t, s) {
  return Vl(e, s) === Vl(t, s);
}
function Uw({ base: e, to: t, trailingSlash: s = "never", cache: a }) {
  const l = t.startsWith("/"),
    u = !l && t === ".";
  let c;
  if (a) {
    c = l ? t : u ? e : e + "\0" + t;
    const m = a.get(c);
    if (m) return m;
  }
  let d;
  if (u) d = e.split("/");
  else if (l) d = t.split("/");
  else {
    for (d = e.split("/"); d.length > 1 && za(d) === ""; ) d.pop();
    const m = t.split("/");
    for (let b = 0, _ = m.length; b < _; b++) {
      const w = m[b];
      w === ""
        ? b
          ? b === _ - 1 && d.push(w)
          : (d = [w])
        : w === ".."
          ? d.pop()
          : w === "." || d.push(w);
    }
  }
  d.length > 1 && (za(d) === "" ? s === "never" && d.pop() : s === "always" && d.push(""));
  let p,
    g = "";
  for (let m = 0; m < d.length; m++) {
    m > 0 && (g += "/");
    const b = d[m];
    if (!b) continue;
    p = Nf(b, 0, p);
    const _ = p[0];
    if (_ === 0) {
      g += b;
      continue;
    }
    const w = p[5],
      A = b.substring(0, p[1]),
      E = b.substring(p[4], w),
      O = b.substring(p[2], p[3]);
    _ === 1
      ? (g += A || E ? `${A}{$${O}}${E}` : `$${O}`)
      : _ === 2
        ? (g += A || E ? `${A}{$}${E}` : "$")
        : (g += `${A}{-$${O}}${E}`);
  }
  g = zf(g);
  const y = g || "/";
  return (c && a && a.set(c, y), y);
}
function Lw(e) {
  const t = new Map(e.map((l) => [encodeURIComponent(l), l])),
    s = Array.from(t.keys())
      .map((l) => l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|"),
    a = new RegExp(s, "g");
  return (l) => l.replace(a, (u) => t.get(u) ?? u);
}
function qh(e, t, s) {
  const a = t[e];
  return typeof a != "string"
    ? a
    : e === "_splat"
      ? /^[a-zA-Z0-9\-._~!/]*$/.test(a)
        ? a
        : a
            .split("/")
            .map((l) => py(l, s))
            .join("/")
      : py(a, s);
}
function dy({ path: e, params: t, decoder: s, ...a }) {
  let l = !1;
  const u = Object.create(null);
  if (!e || e === "/") return { interpolatedPath: "/", usedParams: u, isMissingParams: l };
  if (!e.includes("$")) return { interpolatedPath: e, usedParams: u, isMissingParams: l };
  const c = e.length;
  let d = 0,
    p,
    g = "";
  for (; d < c; ) {
    const y = d;
    p = Nf(e, y, p);
    const m = p[5];
    if (((d = m + 1), y === m)) continue;
    const b = p[0];
    if (b === 0) {
      g += "/" + e.substring(y, m);
      continue;
    }
    if (b === 2) {
      const _ = t._splat;
      ((u._splat = _), (u["*"] = _));
      const w = e.substring(y, p[1]),
        A = e.substring(p[4], m);
      if (!_) {
        ((l = !0), (w || A) && (g += "/" + w + A));
        continue;
      }
      const E = qh("_splat", t, s);
      g += "/" + w + E + A;
      continue;
    }
    if (b === 1) {
      const _ = e.substring(p[2], p[3]);
      (!l && !(_ in t) && (l = !0), (u[_] = t[_]));
      const w = e.substring(y, p[1]),
        A = e.substring(p[4], m),
        E = qh(_, t, s) ?? "undefined";
      g += "/" + w + E + A;
      continue;
    }
    if (b === 3) {
      const _ = e.substring(p[2], p[3]),
        w = t[_];
      if (w == null) continue;
      u[_] = w;
      const A = e.substring(y, p[1]),
        E = e.substring(p[4], m),
        O = qh(_, t, s) ?? "";
      g += "/" + A + O + E;
      continue;
    }
  }
  return (
    e.endsWith("/") && (g += "/"),
    { usedParams: u, interpolatedPath: g || "/", isMissingParams: l }
  );
}
function py(e, t) {
  const s = encodeURIComponent(e);
  return t?.(s) ?? s;
}
function ct(e) {
  return e?.isNotFound === !0;
}
function Nw() {
  try {
    return typeof window < "u" && typeof window.sessionStorage == "object"
      ? window.sessionStorage
      : void 0;
  } catch {
    return;
  }
}
var Pw = "tsr-scroll-restoration-v1_3";
function zw() {
  const e = Nw();
  if (!e) return null;
  let t = {};
  try {
    const a = JSON.parse(e.getItem("tsr-scroll-restoration-v1_3") || "{}");
    Ti(a) && (t = a);
  } catch {}
  return {
    get state() {
      return t;
    },
    set: (a) => {
      t = xr(a, t) || t;
    },
    persist: () => {
      try {
        e.setItem(Pw, JSON.stringify(t));
      } catch {}
    },
  };
}
var gy = zw(),
  Bw = (e) => e.state.__TSR_key || e.href;
function Hw(e) {
  const t = [];
  let s;
  for (; (s = e.parentNode); )
    (t.push(`${e.tagName}:nth-child(${Array.prototype.indexOf.call(s.children, e) + 1})`), (e = s));
  return `${t.reverse().join(" > ")}`.toLowerCase();
}
var Rl = !1,
  Ta = "window",
  my = "data-scroll-restoration-id";
function Iw(e, t) {
  if (!gy) return;
  const s = gy;
  if (
    ((e.options.scrollRestoration ?? !1) && (e.isScrollRestoring = !0),
    e.isScrollRestorationSetup || !s)
  )
    return;
  ((e.isScrollRestorationSetup = !0), (Rl = !1));
  const a = e.options.getScrollRestorationKey || Bw,
    l = new Map();
  window.history.scrollRestoration = "manual";
  const u = (d) => {
      if (!(Rl || !e.isScrollRestoring))
        if (d.target === document || d.target === window)
          l.set(Ta, { scrollX: window.scrollX || 0, scrollY: window.scrollY || 0 });
        else {
          const p = d.target;
          l.set(p, { scrollX: p.scrollLeft || 0, scrollY: p.scrollTop || 0 });
        }
    },
    c = (d) => {
      if (!e.isScrollRestoring || !d || l.size === 0 || !s) return;
      const p = (s.state[d] ||= {});
      for (const [g, y] of l) {
        let m;
        if (g === Ta) m = Ta;
        else if (g.isConnected) {
          const b = g.getAttribute(my);
          m = b ? `[${my}="${b}"]` : Hw(g);
        }
        m && (p[m] = y);
      }
    };
  (document.addEventListener("scroll", u, !0),
    e.subscribe("onBeforeLoad", (d) => {
      (c(d.fromLocation ? a(d.fromLocation) : void 0), l.clear());
    }),
    window.addEventListener("pagehide", () => {
      (c(a(e.stores.resolvedLocation.get() ?? e.stores.location.get())), s.persist());
    }),
    e.subscribe("onRendered", (d) => {
      const p = a(d.toLocation),
        g = e.options.scrollRestorationBehavior,
        y = e.options.scrollToTopSelectors;
      if ((l.clear(), !e.resetNextScroll)) {
        e.resetNextScroll = !0;
        return;
      }
      if (
        !(
          typeof e.options.scrollRestoration == "function" &&
          !e.options.scrollRestoration({ location: e.latestLocation })
        )
      ) {
        Rl = !0;
        try {
          const m = e.isScrollRestoring ? s.state[p] : void 0;
          let b = !1;
          if (m)
            for (const _ in m) {
              const w = m[_];
              if (!Ti(w)) continue;
              const { scrollX: A, scrollY: E } = w;
              if (!(!Number.isFinite(A) || !Number.isFinite(E))) {
                if (_ === Ta) (window.scrollTo({ top: E, left: A, behavior: g }), (b = !0));
                else if (_) {
                  let O;
                  try {
                    O = document.querySelector(_);
                  } catch {
                    continue;
                  }
                  O && ((O.scrollLeft = A), (O.scrollTop = E), (b = !0));
                }
              }
            }
          if (!b) {
            const _ = e.history.location.hash.slice(1);
            if (_) {
              const w = window.history.state?.__hashScrollIntoViewOptions ?? !0;
              if (w) {
                const A = document.getElementById(_);
                A && A.scrollIntoView(w);
              }
            } else {
              const w = { top: 0, left: 0, behavior: g };
              if ((window.scrollTo(w), y))
                for (const A of y) {
                  if (A === Ta) continue;
                  const E = typeof A == "function" ? A() : document.querySelector(A);
                  E && E.scrollTo(w);
                }
            }
          }
        } finally {
          Rl = !1;
        }
        e.isScrollRestoring && s.set((m) => ((m[p] ||= {}), m));
      }
    }));
}
function Qv(e, t = String) {
  const s = new URLSearchParams();
  for (const a in e) {
    const l = e[a];
    l !== void 0 && s.set(a, t(l));
  }
  return s.toString();
}
function $h(e) {
  return e ? (e === "false" ? !1 : e === "true" ? !0 : +e * 0 === 0 && +e + "" === e ? +e : e) : "";
}
function qw(e) {
  const t = new URLSearchParams(e),
    s = Object.create(null);
  for (const [a, l] of t.entries()) {
    const u = s[a];
    u == null ? (s[a] = $h(l)) : Array.isArray(u) ? u.push($h(l)) : (s[a] = [u, $h(l)]);
  }
  return s;
}
var $w = Vw(JSON.parse),
  Gw = Kw(JSON.stringify, JSON.parse);
function Vw(e) {
  return (t) => {
    t[0] === "?" && (t = t.substring(1));
    const s = qw(t);
    for (const a in s) {
      const l = s[a];
      if (typeof l == "string")
        try {
          s[a] = e(l);
        } catch {}
    }
    return s;
  };
}
function Kw(e, t) {
  const s = typeof t == "function";
  function a(l) {
    if (typeof l == "object" && l !== null)
      try {
        return e(l);
      } catch {}
    else if (s && typeof l == "string")
      try {
        return (t(l), e(l));
      } catch {}
    return l;
  }
  return (l) => {
    const u = Qv(l, a);
    return u ? `?${u}` : "";
  };
}
var ms = "__root__";
function Kl(e) {
  if (
    ((e.statusCode = e.statusCode || e.code || 307),
    !e._builtLocation && !e.reloadDocument && typeof e.href == "string")
  )
    try {
      (new URL(e.href), (e.reloadDocument = !0));
    } catch {}
  const t = new Headers(e.headers);
  e.href && t.get("Location") === null && t.set("Location", e.href);
  const s = new Response(null, { status: e.statusCode, headers: t });
  if (((s.options = e), e.throw)) throw s;
  return s;
}
function Dt(e) {
  return e instanceof Response && !!e.options;
}
function Fw(e) {
  if (e !== null && typeof e == "object" && e.isSerializedRedirect) return Kl(e);
}
function Qw(e) {
  return {
    input: ({ url: t }) => {
      for (const s of e) t = hf(s, t);
      return t;
    },
    output: ({ url: t }) => {
      for (let s = e.length - 1; s >= 0; s--) t = Yv(e[s], t);
      return t;
    },
  };
}
function Yw(e) {
  const t = Fv(e.basepath),
    s = `/${t}`,
    a = `${s}/`,
    l = e.caseSensitive ? s : s.toLowerCase(),
    u = e.caseSensitive ? a : a.toLowerCase();
  return {
    input: ({ url: c }) => {
      const d = e.caseSensitive ? c.pathname : c.pathname.toLowerCase();
      return (
        d === l ? (c.pathname = "/") : d.startsWith(u) && (c.pathname = c.pathname.slice(s.length)),
        c
      );
    },
    output: ({ url: c }) => ((c.pathname = Pl(["/", t, c.pathname])), c),
  };
}
function hf(e, t) {
  const s = e?.input?.({ url: t });
  if (s) {
    if (typeof s == "string") return new URL(s);
    if (s instanceof URL) return s;
  }
  return t;
}
function Yv(e, t) {
  const s = e?.output?.({ url: t });
  if (s) {
    if (typeof s == "string") return new URL(s);
    if (s instanceof URL) return s;
  }
  return t;
}
function Jw(e, t) {
  const { createMutableStore: s, createReadonlyStore: a, batch: l, init: u } = t,
    c = new Map(),
    d = new Map(),
    p = new Map(),
    g = s(e.status),
    y = s(e.loadedAt),
    m = s(e.isLoading),
    b = s(e.isTransitioning),
    _ = s(e.location),
    w = s(e.resolvedLocation),
    A = s(e.statusCode),
    E = s(e.redirect),
    O = s([]),
    M = s([]),
    j = s([]),
    L = a(() => Gh(c, O.get())),
    Q = a(() => Gh(d, M.get())),
    F = a(() => Gh(p, j.get())),
    B = a(() => O.get()[0]),
    G = a(() => O.get().some((J) => c.get(J)?.get().status === "pending")),
    Y = a(() => ({
      locationHref: _.get().href,
      resolvedLocationHref: w.get()?.href,
      status: g.get(),
    })),
    ae = a(() => ({
      status: g.get(),
      loadedAt: y.get(),
      isLoading: m.get(),
      isTransitioning: b.get(),
      matches: L.get(),
      location: _.get(),
      resolvedLocation: w.get(),
      statusCode: A.get(),
      redirect: E.get(),
    })),
    re = Ha(64);
  function de(J) {
    let le = re.get(J);
    return (
      le ||
        ((le = a(() => {
          const Ae = O.get();
          for (const Ce of Ae) {
            const k = c.get(Ce);
            if (k && k.routeId === J) return k.get();
          }
        })),
        re.set(J, le)),
      le
    );
  }
  const Se = {
    status: g,
    loadedAt: y,
    isLoading: m,
    isTransitioning: b,
    location: _,
    resolvedLocation: w,
    statusCode: A,
    redirect: E,
    matchesId: O,
    pendingIds: M,
    cachedIds: j,
    matches: L,
    pendingMatches: Q,
    cachedMatches: F,
    firstId: B,
    hasPending: G,
    matchRouteDeps: Y,
    matchStores: c,
    pendingMatchStores: d,
    cachedMatchStores: p,
    __store: ae,
    getRouteMatchStore: de,
    setMatches: Fe,
    setPending: Be,
    setCached: H,
  };
  (Fe(e.matches), u?.(Se));
  function Fe(J) {
    Vh(J, c, O, s, l);
  }
  function Be(J) {
    Vh(J, d, M, s, l);
  }
  function H(J) {
    Vh(J, p, j, s, l);
  }
  return Se;
}
function Gh(e, t) {
  const s = [];
  for (const a of t) {
    const l = e.get(a);
    l && s.push(l.get());
  }
  return s;
}
function Vh(e, t, s, a, l) {
  const u = e.map((d) => d.id),
    c = new Set(u);
  l(() => {
    for (const d of t.keys()) c.has(d) || t.delete(d);
    for (const d of e) {
      const p = t.get(d.id);
      if (!p) {
        const g = a(d);
        ((g.routeId = d.routeId), t.set(d.id, g));
        continue;
      }
      ((p.routeId = d.routeId), p.get() !== d && p.set(d));
    }
    Sw(s.get(), u) || s.set(u);
  });
}
var ff = (e) => {
    if (!e.rendered) return ((e.rendered = !0), e.onReady?.());
  },
  Xw = (e) =>
    e.stores.matchesId.get().some((t) => e.stores.matchStores.get(t)?.get()._forcePending),
  uu = (e, t) => !!(e.preload && !e.router.stores.matchStores.has(t)),
  ys = (e, t, s = !0) => {
    const a = { ...(e.router.options.context ?? {}) },
      l = s ? t : t - 1;
    for (let u = 0; u <= l; u++) {
      const c = e.matches[u];
      if (!c) continue;
      const d = e.router.getMatch(c.id);
      d && Object.assign(a, d.__routeContext, d.__beforeLoadContext);
    }
    return a;
  },
  yy = (e, t) => {
    if (!e.matches.length) return;
    const s = t.routeId,
      a = e.matches.findIndex((c) => c.routeId === e.router.routeTree.id),
      l = a >= 0 ? a : 0;
    let u = s
      ? e.matches.findIndex((c) => c.routeId === s)
      : (e.firstBadMatchIndex ?? e.matches.length - 1);
    u < 0 && (u = l);
    for (let c = u; c >= 0; c--) {
      const d = e.matches[c];
      if (e.router.looseRoutesById[d.routeId].options.notFoundComponent) return c;
    }
    return s ? u : l;
  },
  Mr = (e, t, s) => {
    if (!(!Dt(s) && !ct(s)))
      throw (
        (Dt(s) && s.redirectHandled && !s.options.reloadDocument) ||
          (t &&
            (t._nonReactive.beforeLoadPromise?.resolve(),
            t._nonReactive.loaderPromise?.resolve(),
            (t._nonReactive.beforeLoadPromise = void 0),
            (t._nonReactive.loaderPromise = void 0),
            (t._nonReactive.error = s),
            e.updateMatch(t.id, (a) => ({
              ...a,
              status: Dt(s)
                ? "redirected"
                : ct(s)
                  ? "notFound"
                  : a.status === "pending"
                    ? "success"
                    : a.status,
              context: ys(e, t.index),
              isFetching: !1,
              error: s,
            })),
            ct(s) && !s.routeId && (s.routeId = t.routeId),
            t._nonReactive.loadPromise?.resolve()),
          Dt(s) &&
            ((e.rendered = !0),
            (s.options._fromLocation = e.location),
            (s.redirectHandled = !0),
            (s = e.router.resolveRedirect(s)))),
        s
      );
  },
  Jv = (e, t) => {
    const s = e.router.getMatch(t);
    return !!(!s || s._nonReactive.dehydrated);
  },
  vy = (e, t, s) => {
    const a = ys(e, s);
    e.updateMatch(t, (l) => ({ ...l, context: a }));
  },
  Ra = (e, t, s, a) => {
    const { id: l, routeId: u } = e.matches[t],
      c = e.router.looseRoutesById[u];
    if (s instanceof Promise) throw s;
    ((s.routerCode = a), (e.firstBadMatchIndex ??= t), Mr(e, e.router.getMatch(l), s));
    try {
      c.options.onError?.(s);
    } catch (d) {
      ((s = d), Mr(e, e.router.getMatch(l), s));
    }
    (e.updateMatch(
      l,
      (d) => (
        d._nonReactive.beforeLoadPromise?.resolve(),
        (d._nonReactive.beforeLoadPromise = void 0),
        d._nonReactive.loadPromise?.resolve(),
        {
          ...d,
          error: s,
          status: "error",
          isFetching: !1,
          updatedAt: Date.now(),
          abortController: new AbortController(),
        }
      ),
    ),
      !e.preload && !Dt(s) && !ct(s) && (e.serialError ??= s));
  },
  Xv = (e, t, s, a) => {
    if (a._nonReactive.pendingTimeout !== void 0) return;
    const l = s.options.pendingMs ?? e.router.options.defaultPendingMs;
    if (
      e.onReady &&
      !uu(e, t) &&
      (s.options.loader || s.options.beforeLoad || Wv(s)) &&
      typeof l == "number" &&
      l !== 1 / 0 &&
      (s.options.pendingComponent ?? e.router.options?.defaultPendingComponent)
    ) {
      const u = setTimeout(() => {
        ff(e);
      }, l);
      a._nonReactive.pendingTimeout = u;
    }
  },
  Zw = (e, t, s) => {
    const a = e.router.getMatch(t);
    if (!a._nonReactive.beforeLoadPromise && !a._nonReactive.loaderPromise) return;
    Xv(e, t, s, a);
    const l = () => {
      const u = e.router.getMatch(t);
      u.preload && (u.status === "redirected" || u.status === "notFound") && Mr(e, u, u.error);
    };
    return a._nonReactive.beforeLoadPromise ? a._nonReactive.beforeLoadPromise.then(l) : l();
  },
  Ww = (e, t, s, a) => {
    const l = e.router.getMatch(t);
    let u = l._nonReactive.loadPromise;
    l._nonReactive.loadPromise = vs(() => {
      (u?.resolve(), (u = void 0));
    });
    const { paramsError: c, searchError: d } = l;
    (c && Ra(e, s, c, "PARSE_PARAMS"), d && Ra(e, s, d, "VALIDATE_SEARCH"), Xv(e, t, a, l));
    const p = new AbortController();
    let g = !1;
    const y = () => {
        g ||
          ((g = !0),
          e.updateMatch(t, (L) => ({
            ...L,
            isFetching: "beforeLoad",
            fetchCount: L.fetchCount + 1,
            abortController: p,
          })));
      },
      m = () => {
        (l._nonReactive.beforeLoadPromise?.resolve(),
          (l._nonReactive.beforeLoadPromise = void 0),
          e.updateMatch(t, (L) => ({ ...L, isFetching: !1 })));
      };
    if (!a.options.beforeLoad) {
      e.router.batch(() => {
        (y(), m());
      });
      return;
    }
    l._nonReactive.beforeLoadPromise = vs();
    const b = { ...ys(e, s, !1), ...l.__routeContext },
      { search: _, params: w, cause: A } = l,
      E = uu(e, t),
      O = {
        search: _,
        abortController: p,
        params: w,
        preload: E,
        context: b,
        location: e.location,
        navigate: (L) => e.router.navigate({ ...L, _fromLocation: e.location }),
        buildLocation: e.router.buildLocation,
        cause: E ? "preload" : A,
        matches: e.matches,
        routeId: a.id,
        ...e.router.options.additionalContext,
      },
      M = (L) => {
        if (L === void 0) {
          e.router.batch(() => {
            (y(), m());
          });
          return;
        }
        ((Dt(L) || ct(L)) && (y(), Ra(e, s, L, "BEFORE_LOAD")),
          e.router.batch(() => {
            (y(), e.updateMatch(t, (Q) => ({ ...Q, __beforeLoadContext: L })), m());
          }));
      };
    let j;
    try {
      if (((j = a.options.beforeLoad(O)), Ba(j)))
        return (
          y(),
          j
            .catch((L) => {
              Ra(e, s, L, "BEFORE_LOAD");
            })
            .then(M)
        );
    } catch (L) {
      (y(), Ra(e, s, L, "BEFORE_LOAD"));
    }
    M(j);
  },
  eE = (e, t) => {
    const { id: s, routeId: a } = e.matches[t],
      l = e.router.looseRoutesById[a],
      u = () => d(),
      c = () => Ww(e, s, t, l),
      d = () => {
        if (Jv(e, s)) return;
        const p = Zw(e, s, l);
        return Ba(p) ? p.then(c) : c();
      };
    return u();
  },
  tE = (e, t, s) => {
    const a = e.router.getMatch(t);
    if (!a || (!s.options.head && !s.options.scripts && !s.options.headers)) return;
    const l = {
      ssr: e.router.options.ssr,
      matches: e.matches,
      match: a,
      params: a.params,
      loaderData: a.loaderData,
    };
    return Promise.all([s.options.head?.(l), s.options.scripts?.(l), s.options.headers?.(l)]).then(
      ([u, c, d]) => ({
        meta: u?.meta,
        links: u?.links,
        headScripts: u?.scripts,
        headers: d,
        scripts: c,
        styles: u?.styles,
      }),
    );
  },
  Zv = (e, t, s, a, l) => {
    const u = t[a - 1],
      { params: c, loaderDeps: d, abortController: p, cause: g } = e.router.getMatch(s),
      y = ys(e, a),
      m = uu(e, s);
    return {
      params: c,
      deps: d,
      preload: !!m,
      parentMatchPromise: u,
      abortController: p,
      context: y,
      location: e.location,
      navigate: (b) => e.router.navigate({ ...b, _fromLocation: e.location }),
      cause: m ? "preload" : g,
      route: l,
      ...e.router.options.additionalContext,
    };
  },
  by = async (e, t, s, a, l) => {
    try {
      const u = e.router.getMatch(s);
      try {
        (!($v ?? e.router.isServer) || u.ssr === !0) && Ia(l);
        const c = l.options.loader,
          d = typeof c == "function" ? c : c?.handler,
          p = d?.(Zv(e, t, s, a, l)),
          g = !!d && Ba(p);
        if (
          ((g ||
            l._lazyPromise ||
            l._componentsPromise ||
            l.options.head ||
            l.options.scripts ||
            l.options.headers ||
            u._nonReactive.minPendingPromise) &&
            e.updateMatch(s, (m) => ({ ...m, isFetching: "loader" })),
          d)
        ) {
          const m = g ? await p : p;
          (Mr(e, e.router.getMatch(s), m),
            m !== void 0 && e.updateMatch(s, (b) => ({ ...b, loaderData: m })));
        }
        l._lazyPromise && (await l._lazyPromise);
        const y = u._nonReactive.minPendingPromise;
        (y && (await y),
          l._componentsPromise && (await l._componentsPromise),
          e.updateMatch(s, (m) => ({
            ...m,
            error: void 0,
            context: ys(e, a),
            status: "success",
            isFetching: !1,
            updatedAt: Date.now(),
          })));
      } catch (c) {
        let d = c;
        if (d?.name === "AbortError") {
          if (u.abortController.signal.aborted) {
            (u._nonReactive.loaderPromise?.resolve(), (u._nonReactive.loaderPromise = void 0));
            return;
          }
          e.updateMatch(s, (g) => ({
            ...g,
            status: g.status === "pending" ? "success" : g.status,
            isFetching: !1,
            context: ys(e, a),
          }));
          return;
        }
        const p = u._nonReactive.minPendingPromise;
        (p && (await p),
          ct(c) && (await l.options.notFoundComponent?.preload?.()),
          Mr(e, e.router.getMatch(s), c));
        try {
          l.options.onError?.(c);
        } catch (g) {
          ((d = g), Mr(e, e.router.getMatch(s), g));
        }
        (!Dt(d) && !ct(d) && (await Ia(l, ["errorComponent"])),
          e.updateMatch(s, (g) => ({
            ...g,
            error: d,
            context: ys(e, a),
            status: "error",
            isFetching: !1,
          })));
      }
    } catch (u) {
      const c = e.router.getMatch(s);
      (c && (c._nonReactive.loaderPromise = void 0), Mr(e, c, u));
    }
  },
  nE = async (e, t, s) => {
    async function a(_, w, A, E, O) {
      const M = Date.now() - w.updatedAt,
        j = _
          ? (O.options.preloadStaleTime ?? e.router.options.defaultPreloadStaleTime ?? 3e4)
          : (O.options.staleTime ?? e.router.options.defaultStaleTime ?? 0),
        L = O.options.shouldReload,
        Q = typeof L == "function" ? L(Zv(e, t, l, s, O)) : L,
        { status: F, invalid: B } = E,
        G = M >= j && (!!e.forceStaleReload || E.cause === "enter" || (A !== void 0 && A !== E.id));
      ((c = F === "success" && (B || (Q ?? G))),
        (_ && O.options.preload === !1) ||
          (c && !e.sync && y
            ? ((d = !0),
              (async () => {
                try {
                  await by(e, t, l, s, O);
                  const Y = e.router.getMatch(l);
                  (Y._nonReactive.loaderPromise?.resolve(),
                    Y._nonReactive.loadPromise?.resolve(),
                    (Y._nonReactive.loaderPromise = void 0),
                    (Y._nonReactive.loadPromise = void 0));
                } catch (Y) {
                  Dt(Y) && (await e.router.navigate(Y.options));
                }
              })())
            : F !== "success" || c
              ? await by(e, t, l, s, O)
              : vy(e, l, s)));
    }
    const { id: l, routeId: u } = e.matches[s];
    let c = !1,
      d = !1;
    const p = e.router.looseRoutesById[u],
      g = p.options.loader,
      y =
        ((typeof g == "function" ? void 0 : g?.staleReloadMode) ??
          e.router.options.defaultStaleReloadMode) !== "blocking";
    if (Jv(e, l)) {
      if (!e.router.getMatch(l)) return e.matches[s];
      vy(e, l, s);
    } else {
      const _ = e.router.getMatch(l),
        w = e.router.stores.matchesId.get()[s],
        A =
          ((w && e.router.stores.matchStores.get(w)) || null)?.routeId === u
            ? w
            : e.router.stores.matches.get().find((O) => O.routeId === u)?.id,
        E = uu(e, l);
      if (_._nonReactive.loaderPromise) {
        if (_.status === "success" && !e.sync && !_.preload && y) return _;
        await _._nonReactive.loaderPromise;
        const O = e.router.getMatch(l),
          M = O._nonReactive.error || O.error;
        (M && Mr(e, O, M), O.status === "pending" && (await a(E, _, A, O, p)));
      } else {
        const O = E && !e.router.stores.matchStores.has(l),
          M = e.router.getMatch(l);
        ((M._nonReactive.loaderPromise = vs()),
          O !== M.preload && e.updateMatch(l, (j) => ({ ...j, preload: O })),
          await a(E, _, A, M, p));
      }
    }
    const m = e.router.getMatch(l);
    (d ||
      (m._nonReactive.loaderPromise?.resolve(),
      m._nonReactive.loadPromise?.resolve(),
      (m._nonReactive.loadPromise = void 0)),
      clearTimeout(m._nonReactive.pendingTimeout),
      (m._nonReactive.pendingTimeout = void 0),
      d || (m._nonReactive.loaderPromise = void 0),
      (m._nonReactive.dehydrated = void 0));
    const b = d ? m.isFetching : !1;
    return b !== m.isFetching || m.invalid !== !1
      ? (e.updateMatch(l, (_) => ({ ..._, isFetching: b, invalid: !1 })), e.router.getMatch(l))
      : m;
  };
async function _y(e) {
  const t = e,
    s = [];
  Xw(t.router) && ff(t);
  let a;
  for (let b = 0; b < t.matches.length; b++) {
    try {
      const _ = eE(t, b);
      Ba(_) && (await _);
    } catch (_) {
      if (Dt(_)) throw _;
      if (ct(_)) a = _;
      else if (!t.preload) throw _;
      break;
    }
    if (t.serialError || t.firstBadMatchIndex != null) break;
  }
  const l = t.firstBadMatchIndex ?? t.matches.length,
    u = a && !t.preload ? yy(t, a) : void 0,
    c = a && t.preload ? 0 : u !== void 0 ? Math.min(u + 1, l) : l;
  let d, p;
  for (let b = 0; b < c; b++) s.push(nE(t, s, b));
  try {
    await Promise.all(s);
  } catch {
    const b = await Promise.allSettled(s);
    for (const _ of b) {
      if (_.status !== "rejected") continue;
      const w = _.reason;
      if (Dt(w)) throw w;
      ct(w) ? (d ??= w) : (p ??= w);
    }
    if (p !== void 0) throw p;
  }
  const g = d ?? (a && !t.preload ? a : void 0);
  let y = t.firstBadMatchIndex !== void 0 ? t.firstBadMatchIndex : t.matches.length - 1;
  if (!g && a && t.preload) return t.matches;
  if (g) {
    const b = yy(t, g);
    b === void 0 && Ut();
    const _ = t.matches[b],
      w = t.router.looseRoutesById[_.routeId],
      A = t.router.options?.defaultNotFoundComponent;
    (!w.options.notFoundComponent && A && (w.options.notFoundComponent = A),
      (g.routeId = _.routeId));
    const E = _.routeId === t.router.routeTree.id;
    (t.updateMatch(_.id, (O) => ({
      ...O,
      ...(E
        ? { status: "success", globalNotFound: !0, error: void 0 }
        : { status: "notFound", error: g }),
      isFetching: !1,
    })),
      (y = b),
      await Ia(w, ["notFoundComponent"]));
  } else if (!t.preload) {
    const b = t.matches[0];
    b.globalNotFound ||
      (t.router.getMatch(b.id)?.globalNotFound &&
        t.updateMatch(b.id, (_) => ({ ..._, globalNotFound: !1, error: void 0 })));
  }
  if (t.serialError && t.firstBadMatchIndex !== void 0) {
    const b = t.router.looseRoutesById[t.matches[t.firstBadMatchIndex].routeId];
    await Ia(b, ["errorComponent"]);
  }
  for (let b = 0; b <= y; b++) {
    const { id: _, routeId: w } = t.matches[b],
      A = t.router.looseRoutesById[w];
    try {
      const E = tE(t, _, A);
      if (E) {
        const O = await E;
        t.updateMatch(_, (M) => ({ ...M, ...O }));
      }
    } catch (E) {
      console.error(`Error executing head for route ${w}:`, E);
    }
  }
  const m = ff(t);
  if ((Ba(m) && (await m), g)) throw g;
  if (t.serialError && !t.preload && !t.onReady) throw t.serialError;
  return t.matches;
}
function Sy(e, t) {
  const s = t.map((a) => e.options[a]?.preload?.()).filter(Boolean);
  if (s.length !== 0) return Promise.all(s);
}
function Ia(e, t = zl) {
  !e._lazyLoaded &&
    e._lazyPromise === void 0 &&
    (e.lazyFn
      ? (e._lazyPromise = e.lazyFn().then((a) => {
          const { id: l, ...u } = a.options;
          (Object.assign(e.options, u), (e._lazyLoaded = !0), (e._lazyPromise = void 0));
        }))
      : (e._lazyLoaded = !0));
  const s = () =>
    e._componentsLoaded
      ? void 0
      : t === zl
        ? (() => {
            if (e._componentsPromise === void 0) {
              const a = Sy(e, zl);
              a
                ? (e._componentsPromise = a.then(() => {
                    ((e._componentsLoaded = !0), (e._componentsPromise = void 0));
                  }))
                : (e._componentsLoaded = !0);
            }
            return e._componentsPromise;
          })()
        : Sy(e, t);
  return e._lazyPromise ? e._lazyPromise.then(s) : s();
}
function Wv(e) {
  for (const t of zl) if (e.options[t]?.preload) return !0;
  return !1;
}
var zl = ["component", "errorComponent", "pendingComponent", "notFoundComponent"],
  Ur = "__TSR_index",
  wy = "popstate",
  Ey = "beforeunload";
function rE(e) {
  let t = e.getLocation();
  const s = new Set(),
    a = (c) => {
      ((t = e.getLocation()), s.forEach((d) => d({ location: t, action: c })));
    },
    l = (c) => {
      (e.notifyOnIndexChange ?? !0) ? a(c) : (t = e.getLocation());
    },
    u = async ({ task: c, navigateOpts: d, ...p }) => {
      if (d?.ignoreBlocker ?? !1) {
        c();
        return;
      }
      const g = e.getBlockers?.() ?? [],
        y = p.type === "PUSH" || p.type === "REPLACE";
      if (typeof document < "u" && g.length && y)
        for (const m of g) {
          const b = Fl(p.path, p.state);
          if (await m.blockerFn({ currentLocation: t, nextLocation: b, action: p.type })) {
            e.onBlocked?.();
            return;
          }
        }
      c();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: s,
    subscribe: (c) => (
      s.add(c),
      () => {
        s.delete(c);
      }
    ),
    push: (c, d, p) => {
      const g = t.state[Ur];
      ((d = Ty(g + 1, d)),
        u({
          task: () => {
            (e.pushState(c, d), a({ type: "PUSH" }));
          },
          navigateOpts: p,
          type: "PUSH",
          path: c,
          state: d,
        }));
    },
    replace: (c, d, p) => {
      const g = t.state[Ur];
      ((d = Ty(g, d)),
        u({
          task: () => {
            (e.replaceState(c, d), a({ type: "REPLACE" }));
          },
          navigateOpts: p,
          type: "REPLACE",
          path: c,
          state: d,
        }));
    },
    go: (c, d) => {
      u({
        task: () => {
          (e.go(c), l({ type: "GO", index: c }));
        },
        navigateOpts: d,
        type: "GO",
      });
    },
    back: (c) => {
      u({
        task: () => {
          (e.back(c?.ignoreBlocker ?? !1), l({ type: "BACK" }));
        },
        navigateOpts: c,
        type: "BACK",
      });
    },
    forward: (c) => {
      u({
        task: () => {
          (e.forward(c?.ignoreBlocker ?? !1), l({ type: "FORWARD" }));
        },
        navigateOpts: c,
        type: "FORWARD",
      });
    },
    canGoBack: () => t.state[Ur] !== 0,
    createHref: (c) => e.createHref(c),
    block: (c) => {
      if (!e.setBlockers) return () => {};
      const d = e.getBlockers?.() ?? [];
      return (
        e.setBlockers([...d, c]),
        () => {
          const p = e.getBlockers?.() ?? [];
          e.setBlockers?.(p.filter((g) => g !== c));
        }
      );
    },
    flush: () => e.flush?.(),
    destroy: () => e.destroy?.(),
    notify: a,
  };
}
function Ty(e, t) {
  t || (t = {});
  const s = Bf();
  return { ...t, key: s, __TSR_key: s, [Ur]: e };
}
function sE(e) {
  const t = typeof document < "u" ? window : void 0,
    s = t.history.pushState,
    a = t.history.replaceState;
  let l = [];
  const u = () => l,
    c = (G) => (l = G),
    d = (G) => G,
    p = () => Fl(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state);
  if (!t.history.state?.__TSR_key && !t.history.state?.key) {
    const G = Bf();
    t.history.replaceState({ [Ur]: 0, key: G, __TSR_key: G }, "");
  }
  let g = p(),
    y,
    m = !1,
    b = !1,
    _ = !1,
    w = !1;
  const A = () => g;
  let E, O;
  const M = () => {
      E &&
        ((B._ignoreSubscribers = !0),
        (E.isPush ? t.history.pushState : t.history.replaceState)(E.state, "", E.href),
        (B._ignoreSubscribers = !1),
        (E = void 0),
        (O = void 0),
        (y = void 0));
    },
    j = (G, Y, ae) => {
      const re = d(Y);
      (O || (y = g),
        (g = Fl(Y, ae)),
        (E = { href: re, state: ae, isPush: E?.isPush || G === "push" }),
        O || (O = Promise.resolve().then(() => M())));
    },
    L = (G) => {
      ((g = p()), B.notify({ type: G }));
    },
    Q = async () => {
      if (b) {
        b = !1;
        return;
      }
      const G = p(),
        Y = G.state[Ur] - g.state[Ur],
        ae = Y === 1,
        re = Y === -1,
        de = (!ae && !re) || m;
      m = !1;
      const Se = de ? "GO" : re ? "BACK" : "FORWARD",
        Fe = de ? { type: "GO", index: Y } : { type: re ? "BACK" : "FORWARD" };
      if (_) _ = !1;
      else {
        const Be = u();
        if (typeof document < "u" && Be.length) {
          for (const H of Be)
            if (await H.blockerFn({ currentLocation: g, nextLocation: G, action: Se })) {
              ((b = !0), t.history.go(1), B.notify(Fe));
              return;
            }
        }
      }
      ((g = p()), B.notify(Fe));
    },
    F = (G) => {
      if (w) {
        w = !1;
        return;
      }
      let Y = !1;
      const ae = u();
      if (typeof document < "u" && ae.length)
        for (const re of ae) {
          const de = re.enableBeforeUnload ?? !0;
          if (de === !0) {
            Y = !0;
            break;
          }
          if (typeof de == "function" && de() === !0) {
            Y = !0;
            break;
          }
        }
      if (Y) return (G.preventDefault(), (G.returnValue = ""));
    },
    B = rE({
      getLocation: A,
      getLength: () => t.history.length,
      pushState: (G, Y) => j("push", G, Y),
      replaceState: (G, Y) => j("replace", G, Y),
      back: (G) => (G && (_ = !0), (w = !0), t.history.back()),
      forward: (G) => {
        (G && (_ = !0), (w = !0), t.history.forward());
      },
      go: (G) => {
        ((m = !0), t.history.go(G));
      },
      createHref: (G) => d(G),
      flush: M,
      destroy: () => {
        ((t.history.pushState = s),
          (t.history.replaceState = a),
          t.removeEventListener(Ey, F, { capture: !0 }),
          t.removeEventListener(wy, Q));
      },
      onBlocked: () => {
        y && g !== y && (g = y);
      },
      getBlockers: u,
      setBlockers: c,
      notifyOnIndexChange: !1,
    });
  return (
    t.addEventListener(Ey, F, { capture: !0 }),
    t.addEventListener(wy, Q),
    (t.history.pushState = function (...G) {
      const Y = s.apply(t.history, G);
      return (B._ignoreSubscribers || L("PUSH"), Y);
    }),
    (t.history.replaceState = function (...G) {
      const Y = a.apply(t.history, G);
      return (B._ignoreSubscribers || L("REPLACE"), Y);
    }),
    B
  );
}
function iE(e) {
  let t = e.replace(/[\x00-\x1f\x7f]/g, "");
  return (t.startsWith("//") && (t = "/" + t.replace(/^\/+/, "")), t);
}
function Fl(e, t) {
  const s = iE(e),
    a = s.indexOf("#"),
    l = s.indexOf("?"),
    u = Bf();
  return {
    href: s,
    pathname: s.substring(0, a > 0 ? (l > 0 ? Math.min(a, l) : a) : l > 0 ? l : s.length),
    hash: a > -1 ? s.substring(a) : "",
    search: l > -1 ? s.slice(l, a === -1 ? void 0 : a) : "",
    state: t || { [Ur]: 0, key: u, __TSR_key: u },
  };
}
function Bf() {
  return (Math.random() + 1).toString(36).substring(7);
}
function aE(e) {
  return e instanceof Error ? { name: e.name, message: e.message } : { data: e };
}
function _i(e, t) {
  const s = t,
    a = e;
  return {
    fromLocation: s,
    toLocation: a,
    pathChanged: s?.pathname !== a.pathname,
    hrefChanged: s?.href !== a.href,
    hashChanged: s?.hash !== a.hash,
  };
}
var oE = class {
    constructor(e, t) {
      ((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
        (this.resetNextScroll = !0),
        (this.shouldViewTransition = void 0),
        (this.isViewTransitionTypesSupported = void 0),
        (this.subscribers = new Set()),
        (this.isScrollRestoring = !1),
        (this.isScrollRestorationSetup = !1),
        (this.startTransition = (s) => s()),
        (this.update = (s) => {
          const a = this.options,
            l = this.basepath ?? a?.basepath ?? "/",
            u = this.basepath === void 0,
            c = a?.rewrite;
          if (
            ((this.options = { ...a, ...s }),
            (this.isServer = this.options.isServer ?? typeof document > "u"),
            (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
            this.options.pathParamsAllowedCharacters &&
              (this.pathParamsDecoder = Lw(this.options.pathParamsAllowedCharacters)),
            (!this.history || (this.options.history && this.options.history !== this.history)) &&
              (this.options.history
                ? (this.history = this.options.history)
                : (this.history = sE())),
            (this.origin = this.options.origin),
            this.origin ||
              (window?.origin && window.origin !== "null"
                ? (this.origin = window.origin)
                : (this.origin = "http://localhost")),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree)
          ) {
            this.routeTree = this.options.routeTree;
            let y;
            ((this.resolvePathCache = Ha(1e3)), (y = this.buildRouteTree()), this.setRoutes(y));
          }
          if (!this.stores && this.latestLocation) {
            const y = this.getStoreConfig(this);
            ((this.batch = y.batch), (this.stores = Jw(uE(this.latestLocation), y)), Iw(this));
          }
          let d = !1;
          const p = this.options.basepath ?? "/",
            g = this.options.rewrite;
          if (u || l !== p || c !== g) {
            this.basepath = p;
            const y = [],
              m = Fv(p);
            (m && m !== "/" && y.push(Yw({ basepath: p })),
              g && y.push(g),
              (this.rewrite = y.length === 0 ? void 0 : y.length === 1 ? y[0] : Qw(y)),
              this.history && this.updateLatestLocation(),
              (d = !0));
          }
          (d && this.stores && this.stores.location.set(this.latestLocation),
            typeof window < "u" &&
              "CSS" in window &&
              typeof window.CSS?.supports == "function" &&
              (this.isViewTransitionTypesSupported = window.CSS.supports(
                "selector(:active-view-transition-type(a)",
              )));
        }),
        (this.updateLatestLocation = () => {
          this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
        }),
        (this.buildRouteTree = () => {
          const s = Cw(this.routeTree, this.options.caseSensitive, (a, l) => {
            a.init({ originalIndex: l });
          });
          return (this.options.routeMasks && Ew(this.options.routeMasks, s.processedTree), s);
        }),
        (this.subscribe = (s, a) => {
          const l = { eventType: s, fn: a };
          return (
            this.subscribers.add(l),
            () => {
              this.subscribers.delete(l);
            }
          );
        }),
        (this.emit = (s) => {
          this.subscribers.forEach((a) => {
            a.eventType === s.type && a.fn(s);
          });
        }),
        (this.parseLocation = (s, a) => {
          const l = ({ pathname: p, search: g, hash: y, href: m, state: b }) => {
              if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(p)) {
                const O = this.options.parseSearch(g),
                  M = this.options.stringifySearch(O);
                return {
                  href: p + M + y,
                  publicHref: p + M + y,
                  pathname: Ea(p).path,
                  external: !1,
                  searchStr: M,
                  search: ls(a?.search, O),
                  hash: Ea(y.slice(1)).path,
                  state: kr(a?.state, b),
                };
              }
              const _ = new URL(m, this.origin),
                w = hf(this.rewrite, _),
                A = this.options.parseSearch(w.search),
                E = this.options.stringifySearch(A);
              return (
                (w.search = E),
                {
                  href: w.href.replace(w.origin, ""),
                  publicHref: m,
                  pathname: Ea(w.pathname).path,
                  external: !!this.rewrite && w.origin !== this.origin,
                  searchStr: E,
                  search: ls(a?.search, A),
                  hash: Ea(w.hash.slice(1)).path,
                  state: kr(a?.state, b),
                }
              );
            },
            u = l(s),
            { __tempLocation: c, __tempKey: d } = u.state;
          if (c && (!d || d === this.tempLocationKey)) {
            const p = l(c);
            return (
              (p.state.key = u.state.key),
              (p.state.__TSR_key = u.state.__TSR_key),
              delete p.state.__tempLocation,
              { ...p, maskedLocation: u }
            );
          }
          return u;
        }),
        (this.resolvePathWithBase = (s, a) =>
          Uw({
            base: s,
            to: zf(a),
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache,
          })),
        (this.matchRoutes = (s, a, l) =>
          typeof s == "string"
            ? this.matchRoutesInternal({ pathname: s, search: a }, l)
            : this.matchRoutesInternal(s, a)),
        (this.getMatchedRoutes = (s) =>
          cE({ pathname: s, routesById: this.routesById, processedTree: this.processedTree })),
        (this.cancelMatch = (s) => {
          const a = this.getMatch(s);
          a &&
            (a.abortController.abort(),
            clearTimeout(a._nonReactive.pendingTimeout),
            (a._nonReactive.pendingTimeout = void 0));
        }),
        (this.cancelMatches = () => {
          (this.stores.pendingIds.get().forEach((s) => {
            this.cancelMatch(s);
          }),
            this.stores.matchesId.get().forEach((s) => {
              if (this.stores.pendingMatchStores.has(s)) return;
              const a = this.stores.matchStores.get(s)?.get();
              a && (a.status === "pending" || a.isFetching === "loader") && this.cancelMatch(s);
            }));
        }),
        (this.buildLocation = (s) => {
          const a = (u = {}) => {
              const c = u._fromLocation || this.pendingBuiltLocation || this.latestLocation,
                d = this.matchRoutesLightweight(c);
              u.from;
              const p = u.unsafeRelative === "path" ? c.pathname : (u.from ?? d.fullPath),
                g = this.resolvePathWithBase(p, "."),
                y = d.search,
                m = Object.assign(Object.create(null), d.params),
                b = u.to
                  ? this.resolvePathWithBase(g, `${u.to}`)
                  : this.resolvePathWithBase(g, "."),
                _ =
                  u.params === !1 || u.params === null
                    ? Object.create(null)
                    : (u.params ?? !0) === !0
                      ? m
                      : Object.assign(m, xr(u.params, m)),
                w = this.getMatchedRoutes(b);
              let A = w.matchedRoutes;
              if (
                ((!w.foundRoute || (w.foundRoute.path !== "/" && w.routeParams["**"])) &&
                  this.options.notFoundRoute &&
                  (A = [...A, this.options.notFoundRoute]),
                Object.keys(_).length > 0)
              )
                for (const ae of A) {
                  const re = ae.options.params?.stringify ?? ae.options.stringifyParams;
                  if (re)
                    try {
                      Object.assign(_, re(_));
                    } catch {}
                }
              const E = s.leaveParams
                ? b
                : Ea(
                    dy({
                      path: b,
                      params: _,
                      decoder: this.pathParamsDecoder,
                      server: this.isServer,
                    }).interpolatedPath,
                  ).path;
              let O = y;
              if (s._includeValidateSearch && this.options.search?.strict) {
                const ae = {};
                (A.forEach((re) => {
                  if (re.options.validateSearch)
                    try {
                      Object.assign(ae, Bl(re.options.validateSearch, { ...ae, ...O }));
                    } catch {}
                }),
                  (O = ae));
              }
              ((O = hE({
                search: O,
                dest: u,
                destRoutes: A,
                _includeValidateSearch: s._includeValidateSearch,
              })),
                (O = ls(y, O)));
              const M = this.options.stringifySearch(O),
                j = u.hash === !0 ? c.hash : u.hash ? xr(u.hash, c.hash) : void 0,
                L = j ? `#${j}` : "";
              let Q = u.state === !0 ? c.state : u.state ? xr(u.state, c.state) : {};
              Q = kr(c.state, Q);
              const F = `${E}${M}${L}`;
              let B,
                G,
                Y = !1;
              if (this.rewrite) {
                const ae = new URL(F, this.origin),
                  re = Yv(this.rewrite, ae);
                ((B = ae.href.replace(ae.origin, "")),
                  re.origin !== this.origin
                    ? ((G = re.href), (Y = !0))
                    : (G = re.pathname + re.search + re.hash));
              } else ((B = _w(F)), (G = B));
              return {
                publicHref: G,
                href: B,
                pathname: E,
                search: O,
                searchStr: M,
                state: Q,
                hash: j ?? "",
                external: Y,
                unmaskOnReload: u.unmaskOnReload,
              };
            },
            l = (u = {}, c) => {
              const d = a(u);
              let p = c ? a(c) : void 0;
              if (!p) {
                const g = Object.create(null);
                if (this.options.routeMasks) {
                  const y = Tw(d.pathname, this.processedTree);
                  if (y) {
                    Object.assign(g, y.rawParams);
                    const { from: m, params: b, ..._ } = y.route,
                      w =
                        b === !1 || b === null
                          ? Object.create(null)
                          : (b ?? !0) === !0
                            ? g
                            : Object.assign(g, xr(b, g));
                    ((c = { from: s.from, ..._, params: w }), (p = a(c)));
                  }
                }
              }
              return (p && (d.maskedLocation = p), d);
            };
          return s.mask ? l(s, { from: s.from, ...s.mask }) : l(s);
        }),
        (this.commitLocation = async ({ viewTransition: s, ignoreBlocker: a, ...l }) => {
          const u = () => {
              const p = ["key", "__TSR_key", "__TSR_index", "__hashScrollIntoViewOptions"];
              p.forEach((y) => {
                l.state[y] = this.latestLocation.state[y];
              });
              const g = Mt(l.state, this.latestLocation.state);
              return (
                p.forEach((y) => {
                  delete l.state[y];
                }),
                g
              );
            },
            c = Dr(this.latestLocation.href) === Dr(l.href);
          let d = this.commitLocationPromise;
          if (
            ((this.commitLocationPromise = vs(() => {
              (d?.resolve(), (d = void 0));
            })),
            c && u())
          )
            this.load();
          else {
            let { maskedLocation: p, hashScrollIntoView: g, ...y } = l;
            (p &&
              ((y = {
                ...p,
                state: {
                  ...p.state,
                  __tempKey: void 0,
                  __tempLocation: {
                    ...y,
                    search: y.searchStr,
                    state: {
                      ...y.state,
                      __tempKey: void 0,
                      __tempLocation: void 0,
                      __TSR_key: void 0,
                      key: void 0,
                    },
                  },
                },
              }),
              (y.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
                (y.state.__tempKey = this.tempLocationKey)),
              (y.state.__hashScrollIntoViewOptions =
                g ?? this.options.defaultHashScrollIntoView ?? !0),
              (this.shouldViewTransition = s),
              this.history[l.replace ? "replace" : "push"](y.publicHref, y.state, {
                ignoreBlocker: a,
              }));
          }
          return (
            (this.resetNextScroll = l.resetScroll ?? !0),
            this.history.subscribers.size || this.load(),
            this.commitLocationPromise
          );
        }),
        (this.buildAndCommitLocation = ({
          replace: s,
          resetScroll: a,
          hashScrollIntoView: l,
          viewTransition: u,
          ignoreBlocker: c,
          href: d,
          ...p
        } = {}) => {
          if (d) {
            const m = this.history.location.state.__TSR_index,
              b = Fl(d, { __TSR_index: s ? m : m + 1 }),
              _ = new URL(b.pathname, this.origin);
            ((p.to = hf(this.rewrite, _).pathname),
              (p.search = this.options.parseSearch(b.search)),
              (p.hash = b.hash.slice(1)));
          }
          const g = this.buildLocation({ ...p, _includeValidateSearch: !0 });
          this.pendingBuiltLocation = g;
          const y = this.commitLocation({
            ...g,
            viewTransition: u,
            replace: s,
            resetScroll: a,
            hashScrollIntoView: l,
            ignoreBlocker: c,
          });
          return (
            Promise.resolve().then(() => {
              this.pendingBuiltLocation === g && (this.pendingBuiltLocation = void 0);
            }),
            y
          );
        }),
        (this.navigate = async ({ to: s, reloadDocument: a, href: l, publicHref: u, ...c }) => {
          let d = !1;
          if (l)
            try {
              (new URL(`${l}`), (d = !0));
            } catch {}
          if ((d && !a && (a = !0), a)) {
            if (s !== void 0 || !l) {
              const g = this.buildLocation({ to: s, ...c });
              ((l = l ?? g.publicHref), (u = u ?? g.publicHref));
            }
            const p = !d && u ? u : l;
            if (Gl(p, this.protocolAllowlist)) return Promise.resolve();
            if (!c.ignoreBlocker) {
              const g = this.history.getBlockers?.() ?? [];
              for (const y of g)
                if (
                  y?.blockerFn &&
                  (await y.blockerFn({
                    currentLocation: this.latestLocation,
                    nextLocation: this.latestLocation,
                    action: "PUSH",
                  }))
                )
                  return Promise.resolve();
            }
            return (
              c.replace ? window.location.replace(p) : (window.location.href = p),
              Promise.resolve()
            );
          }
          return this.buildAndCommitLocation({ ...c, href: l, to: s, _isNavigate: !0 });
        }),
        (this.beforeLoad = () => {
          (this.cancelMatches(), this.updateLatestLocation());
          const s = this.matchRoutes(this.latestLocation),
            a = this.stores.cachedMatches.get().filter((l) => !s.some((u) => u.id === l.id));
          this.batch(() => {
            (this.stores.status.set("pending"),
              this.stores.statusCode.set(200),
              this.stores.isLoading.set(!0),
              this.stores.location.set(this.latestLocation),
              this.stores.setPending(s),
              this.stores.setCached(a));
          });
        }),
        (this.load = async (s) => {
          let a, l, u;
          const c = this.stores.resolvedLocation.get() ?? this.stores.location.get();
          for (
            u = new Promise((p) => {
              this.startTransition(async () => {
                try {
                  this.beforeLoad();
                  const g = this.latestLocation,
                    y = _i(g, this.stores.resolvedLocation.get());
                  (this.stores.redirect.get() || this.emit({ type: "onBeforeNavigate", ...y }),
                    this.emit({ type: "onBeforeLoad", ...y }),
                    await _y({
                      router: this,
                      sync: s?.sync,
                      forceStaleReload: c.href === g.href,
                      matches: this.stores.pendingMatches.get(),
                      location: g,
                      updateMatch: this.updateMatch,
                      onReady: async () => {
                        this.startTransition(() => {
                          this.startViewTransition(async () => {
                            let m = null,
                              b = null,
                              _ = null,
                              w = null;
                            this.batch(() => {
                              const A = this.stores.pendingMatches.get(),
                                E = A.length,
                                O = this.stores.matches.get();
                              m = E
                                ? O.filter((L) => !this.stores.pendingMatchStores.has(L.id))
                                : null;
                              const M = new Set();
                              for (const L of this.stores.pendingMatchStores.values())
                                L.routeId && M.add(L.routeId);
                              const j = new Set();
                              for (const L of this.stores.matchStores.values())
                                L.routeId && j.add(L.routeId);
                              ((b = E ? O.filter((L) => !M.has(L.routeId)) : null),
                                (_ = E ? A.filter((L) => !j.has(L.routeId)) : null),
                                (w = E ? A.filter((L) => j.has(L.routeId)) : O),
                                this.stores.isLoading.set(!1),
                                this.stores.loadedAt.set(Date.now()),
                                E &&
                                  (this.stores.setMatches(A),
                                  this.stores.setPending([]),
                                  this.stores.setCached([
                                    ...this.stores.cachedMatches.get(),
                                    ...m.filter(
                                      (L) =>
                                        L.status !== "error" &&
                                        L.status !== "notFound" &&
                                        L.status !== "redirected",
                                    ),
                                  ]),
                                  this.clearExpiredCache()));
                            });
                            for (const [A, E] of [
                              [b, "onLeave"],
                              [_, "onEnter"],
                              [w, "onStay"],
                            ])
                              if (A)
                                for (const O of A) this.looseRoutesById[O.routeId].options[E]?.(O);
                          });
                        });
                      },
                    }));
                } catch (g) {
                  Dt(g)
                    ? ((a = g), this.navigate({ ...a.options, replace: !0, ignoreBlocker: !0 }))
                    : ct(g) && (l = g);
                  const y = a
                    ? a.status
                    : l
                      ? 404
                      : this.stores.matches.get().some((m) => m.status === "error")
                        ? 500
                        : 200;
                  this.batch(() => {
                    (this.stores.statusCode.set(y), this.stores.redirect.set(a));
                  });
                }
                (this.latestLoadPromise === u &&
                  (this.commitLocationPromise?.resolve(),
                  (this.latestLoadPromise = void 0),
                  (this.commitLocationPromise = void 0)),
                  p());
              });
            }),
              this.latestLoadPromise = u,
              await u;
            this.latestLoadPromise && u !== this.latestLoadPromise;
          )
            await this.latestLoadPromise;
          let d;
          (this.hasNotFoundMatch()
            ? (d = 404)
            : this.stores.matches.get().some((p) => p.status === "error") && (d = 500),
            d !== void 0 && this.stores.statusCode.set(d));
        }),
        (this.startViewTransition = (s) => {
          const a = this.shouldViewTransition ?? this.options.defaultViewTransition;
          if (
            ((this.shouldViewTransition = void 0),
            a &&
              typeof document < "u" &&
              "startViewTransition" in document &&
              typeof document.startViewTransition == "function")
          ) {
            let l;
            if (typeof a == "object" && this.isViewTransitionTypesSupported) {
              const u = this.latestLocation,
                c = this.stores.resolvedLocation.get(),
                d = typeof a.types == "function" ? a.types(_i(u, c)) : a.types;
              if (d === !1) {
                s();
                return;
              }
              l = { update: s, types: d };
            } else l = s;
            document.startViewTransition(l);
          } else s();
        }),
        (this.updateMatch = (s, a) => {
          this.startTransition(() => {
            const l = this.stores.pendingMatchStores.get(s);
            if (l) {
              l.set(a);
              return;
            }
            const u = this.stores.matchStores.get(s);
            if (u) {
              u.set(a);
              return;
            }
            const c = this.stores.cachedMatchStores.get(s);
            if (c) {
              const d = a(c.get());
              d.status === "redirected"
                ? this.stores.cachedMatchStores.delete(s) &&
                  this.stores.cachedIds.set((p) => p.filter((g) => g !== s))
                : c.set(d);
            }
          });
        }),
        (this.getMatch = (s) =>
          this.stores.cachedMatchStores.get(s)?.get() ??
          this.stores.pendingMatchStores.get(s)?.get() ??
          this.stores.matchStores.get(s)?.get()),
        (this.invalidate = (s) => {
          const a = (l) =>
            (s?.filter?.(l) ?? !0)
              ? {
                  ...l,
                  invalid: !0,
                  ...(s?.forcePending || l.status === "error" || l.status === "notFound"
                    ? { status: "pending", error: void 0 }
                    : void 0),
                }
              : l;
          return (
            this.batch(() => {
              (this.stores.setMatches(this.stores.matches.get().map(a)),
                this.stores.setCached(this.stores.cachedMatches.get().map(a)),
                this.stores.setPending(this.stores.pendingMatches.get().map(a)));
            }),
            (this.shouldViewTransition = !1),
            this.load({ sync: s?.sync })
          );
        }),
        (this.getParsedLocationHref = (s) => s.publicHref || "/"),
        (this.resolveRedirect = (s) => {
          const a = s.headers.get("Location");
          if (!s.options.href || s.options._builtLocation) {
            const l = s.options._builtLocation ?? this.buildLocation(s.options),
              u = this.getParsedLocationHref(l);
            ((s.options.href = u), s.headers.set("Location", u));
          } else if (a)
            try {
              const l = new URL(a);
              if (this.origin && l.origin === this.origin) {
                const u = l.pathname + l.search + l.hash;
                ((s.options.href = u), s.headers.set("Location", u));
              }
            } catch {}
          if (
            s.options.href &&
            !s.options._builtLocation &&
            Gl(s.options.href, this.protocolAllowlist)
          )
            throw new Error("Redirect blocked: unsafe protocol");
          return (s.headers.get("Location") || s.headers.set("Location", s.options.href), s);
        }),
        (this.clearCache = (s) => {
          const a = s?.filter;
          a !== void 0
            ? this.stores.setCached(this.stores.cachedMatches.get().filter((l) => !a(l)))
            : this.stores.setCached([]);
        }),
        (this.clearExpiredCache = () => {
          const s = Date.now(),
            a = (l) => {
              const u = this.looseRoutesById[l.routeId];
              if (!u.options.loader) return !0;
              const c =
                (l.preload
                  ? (u.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
                  : (u.options.gcTime ?? this.options.defaultGcTime)) ?? 300 * 1e3;
              return l.status === "error" ? !0 : s - l.updatedAt >= c;
            };
          this.clearCache({ filter: a });
        }),
        (this.loadRouteChunk = Ia),
        (this.preloadRoute = async (s) => {
          const a = s._builtLocation ?? this.buildLocation(s);
          let l = this.matchRoutes(a, { throwOnError: !0, preload: !0, dest: s });
          const u = new Set([...this.stores.matchesId.get(), ...this.stores.pendingIds.get()]),
            c = new Set([...u, ...this.stores.cachedIds.get()]),
            d = l.filter((p) => !c.has(p.id));
          if (d.length) {
            const p = this.stores.cachedMatches.get();
            this.stores.setCached([...p, ...d]);
          }
          try {
            return (
              (l = await _y({
                router: this,
                matches: l,
                location: a,
                preload: !0,
                updateMatch: (p, g) => {
                  u.has(p) ? (l = l.map((y) => (y.id === p ? g(y) : y))) : this.updateMatch(p, g);
                },
              })),
              l
            );
          } catch (p) {
            if (Dt(p))
              return p.options.reloadDocument
                ? void 0
                : await this.preloadRoute({ ...p.options, _fromLocation: a });
            ct(p) || console.error(p);
            return;
          }
        }),
        (this.matchRoute = (s, a) => {
          const l = {
              ...s,
              to: s.to ? this.resolvePathWithBase(s.from || "", s.to) : void 0,
              params: s.params || {},
              leaveParams: !0,
            },
            u = this.buildLocation(l);
          if (a?.pending && this.stores.status.get() !== "pending") return !1;
          const c = (a?.pending === void 0 ? !this.stores.isLoading.get() : a.pending)
              ? this.latestLocation
              : this.stores.resolvedLocation.get() || this.stores.location.get(),
            d = Rw(
              u.pathname,
              a?.caseSensitive ?? !1,
              a?.fuzzy ?? !1,
              c.pathname,
              this.processedTree,
            );
          return !d || (s.params && !Mt(d.rawParams, s.params, { partial: !0 }))
            ? !1
            : (a?.includeSearch ?? !0)
              ? Mt(c.search, u.search, { partial: !0 })
                ? d.rawParams
                : !1
              : d.rawParams;
        }),
        (this.hasNotFoundMatch = () =>
          this.stores.matches.get().some((s) => s.status === "notFound" || s.globalNotFound)),
        (this.getStoreConfig = t),
        this.update({
          defaultPreloadDelay: 50,
          defaultPendingMs: 1e3,
          defaultPendingMinMs: 500,
          context: void 0,
          ...e,
          caseSensitive: e.caseSensitive ?? !1,
          notFoundMode: e.notFoundMode ?? "fuzzy",
          stringifySearch: e.stringifySearch ?? Gw,
          parseSearch: e.parseSearch ?? $w,
          protocolAllowlist: e.protocolAllowlist ?? mw,
        }),
        typeof document < "u" && (self.__TSR_ROUTER__ = this));
    }
    isShell() {
      return !!this.options.isShell;
    }
    isPrerendering() {
      return !!this.options.isPrerendering;
    }
    get state() {
      return this.stores.__store.get();
    }
    setRoutes({ routesById: e, routesByPath: t, processedTree: s }) {
      ((this.routesById = e), (this.routesByPath = t), (this.processedTree = s));
      const a = this.options.notFoundRoute;
      a && (a.init({ originalIndex: 99999999999 }), (this.routesById[a.id] = a));
    }
    get looseRoutesById() {
      return this.routesById;
    }
    getParentContext(e) {
      return e?.id
        ? (e.context ?? this.options.context ?? void 0)
        : (this.options.context ?? void 0);
    }
    matchRoutesInternal(e, t) {
      const s = this.getMatchedRoutes(e.pathname),
        { foundRoute: a, routeParams: l, parsedParams: u } = s;
      let { matchedRoutes: c } = s,
        d = !1;
      (a ? a.path !== "/" && l["**"] : Dr(e.pathname)) &&
        (this.options.notFoundRoute ? (c = [...c, this.options.notFoundRoute]) : (d = !0));
      const p = d ? dE(this.options.notFoundMode, c) : void 0,
        g = new Array(c.length),
        y = new Map();
      for (const m of this.stores.matchStores.values()) m.routeId && y.set(m.routeId, m.get());
      for (let m = 0; m < c.length; m++) {
        const b = c[m],
          _ = g[m - 1];
        let w, A, E;
        {
          const Se = _?.search ?? e.search,
            Fe = _?._strictSearch ?? void 0;
          try {
            const Be = Bl(b.options.validateSearch, { ...Se }) ?? void 0;
            ((w = { ...Se, ...Be }), (A = { ...Fe, ...Be }), (E = void 0));
          } catch (Be) {
            let H = Be;
            if ((Be instanceof Ql || (H = new Ql(Be.message, { cause: Be })), t?.throwOnError))
              throw H;
            ((w = Se), (A = {}), (E = H));
          }
        }
        const O = b.options.loaderDeps?.({ search: w }) ?? "",
          M = O ? JSON.stringify(O) : "",
          { interpolatedPath: j, usedParams: L } = dy({
            path: b.fullPath,
            params: l,
            decoder: this.pathParamsDecoder,
            server: this.isServer,
          }),
          Q = b.id + j + M,
          F = this.getMatch(Q),
          B = y.get(b.id),
          G = F?._strictParams ?? L;
        let Y;
        if (!F)
          try {
            Ry(b, L, u, G);
          } catch (Se) {
            if (
              (ct(Se) || Dt(Se) ? (Y = Se) : (Y = new lE(Se.message, { cause: Se })),
              t?.throwOnError)
            )
              throw Y;
          }
        Object.assign(l, G);
        const ae = B ? "stay" : "enter";
        let re;
        if (F)
          re = {
            ...F,
            cause: ae,
            params: B?.params ?? l,
            _strictParams: G,
            search: ls(B ? B.search : F.search, w),
            _strictSearch: A,
          };
        else {
          const Se =
            b.options.loader || b.options.beforeLoad || b.lazyFn || Wv(b) ? "pending" : "success";
          re = {
            id: Q,
            ssr: b.options.ssr,
            index: m,
            routeId: b.id,
            params: B?.params ?? l,
            _strictParams: G,
            pathname: j,
            updatedAt: Date.now(),
            search: B ? ls(B.search, w) : w,
            _strictSearch: A,
            searchError: void 0,
            status: Se,
            isFetching: !1,
            error: void 0,
            paramsError: Y,
            __routeContext: void 0,
            _nonReactive: { loadPromise: vs() },
            __beforeLoadContext: void 0,
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: ae,
            loaderDeps: B ? kr(B.loaderDeps, O) : O,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: b.options.staticData || {},
            fullPath: b.fullPath,
          };
        }
        (t?.preload || (re.globalNotFound = p === b.id), (re.searchError = E));
        const de = this.getParentContext(_);
        ((re.context = { ...de, ...re.__routeContext, ...re.__beforeLoadContext }), (g[m] = re));
      }
      for (let m = 0; m < g.length; m++) {
        const b = g[m],
          _ = this.looseRoutesById[b.routeId],
          w = this.getMatch(b.id),
          A = y.get(b.routeId);
        if (((b.params = A ? ls(A.params, l) : l), !w)) {
          const E = g[m - 1],
            O = this.getParentContext(E);
          if (_.options.context) {
            const M = {
              deps: b.loaderDeps,
              params: b.params,
              context: O ?? {},
              location: e,
              navigate: (j) => this.navigate({ ...j, _fromLocation: e }),
              buildLocation: this.buildLocation,
              cause: b.cause,
              abortController: b.abortController,
              preload: !!b.preload,
              matches: g,
              routeId: _.id,
            };
            b.__routeContext = _.options.context(M) ?? void 0;
          }
          b.context = { ...O, ...b.__routeContext, ...b.__beforeLoadContext };
        }
      }
      return g;
    }
    matchRoutesLightweight(e) {
      const {
          matchedRoutes: t,
          routeParams: s,
          parsedParams: a,
        } = this.getMatchedRoutes(e.pathname),
        l = za(t),
        u = { ...e.search };
      for (const y of t)
        try {
          Object.assign(u, Bl(y.options.validateSearch, u));
        } catch {}
      const c = za(this.stores.matchesId.get()),
        d = c && this.stores.matchStores.get(c)?.get(),
        p = d && d.routeId === l.id && d.pathname === e.pathname;
      let g;
      if (p) g = d.params;
      else {
        const y = Object.assign(Object.create(null), s);
        for (const m of t)
          try {
            Ry(m, s, a ?? {}, y);
          } catch {}
        g = y;
      }
      return { matchedRoutes: t, fullPath: l.fullPath, search: u, params: g };
    }
  },
  Ql = class extends Error {},
  lE = class extends Error {};
function uE(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: "idle",
    resolvedLocation: void 0,
    location: e,
    matches: [],
    statusCode: 200,
  };
}
function Bl(e, t) {
  if (e == null) return {};
  if ("~standard" in e) {
    const s = e["~standard"].validate(t);
    if (s instanceof Promise) throw new Ql("Async validation not supported");
    if (s.issues) throw new Ql(JSON.stringify(s.issues, void 0, 2), { cause: s });
    return s.value;
  }
  return "parse" in e ? e.parse(t) : typeof e == "function" ? e(t) : {};
}
function cE({ pathname: e, routesById: t, processedTree: s }) {
  const a = Object.create(null),
    l = Dr(e);
  let u, c;
  const d = Aw(l, s, !0);
  return (
    d &&
      ((u = d.route),
      Object.assign(a, d.rawParams),
      (c = Object.assign(Object.create(null), d.parsedParams))),
    { matchedRoutes: d?.branch || [t.__root__], routeParams: a, foundRoute: u, parsedParams: c }
  );
}
function hE({ search: e, dest: t, destRoutes: s, _includeValidateSearch: a }) {
  return fE(s)(e, t, a ?? !1);
}
function fE(e) {
  const t = { dest: null, _includeValidateSearch: !1, middlewares: [] };
  for (const l of e) {
    if ("search" in l.options)
      l.options.search?.middlewares && t.middlewares.push(...l.options.search.middlewares);
    else if (l.options.preSearchFilters || l.options.postSearchFilters) {
      const u = ({ search: c, next: d }) => {
        let p = c;
        "preSearchFilters" in l.options &&
          l.options.preSearchFilters &&
          (p = l.options.preSearchFilters.reduce((y, m) => m(y), c));
        const g = d(p);
        return "postSearchFilters" in l.options && l.options.postSearchFilters
          ? l.options.postSearchFilters.reduce((y, m) => m(y), g)
          : g;
      };
      t.middlewares.push(u);
    }
    if (l.options.validateSearch) {
      const u = ({ search: c, next: d }) => {
        const p = d(c);
        if (!t._includeValidateSearch) return p;
        try {
          return { ...p, ...(Bl(l.options.validateSearch, p) ?? void 0) };
        } catch {
          return p;
        }
      };
      t.middlewares.push(u);
    }
  }
  const s = ({ search: l }) => {
    const u = t.dest;
    return u.search ? (u.search === !0 ? l : xr(u.search, l)) : {};
  };
  t.middlewares.push(s);
  const a = (l, u, c) => {
    if (l >= c.length) return u;
    const d = c[l];
    return d({ search: u, next: (g) => a(l + 1, g, c) });
  };
  return function (u, c, d) {
    return ((t.dest = c), (t._includeValidateSearch = d), a(0, u, t.middlewares));
  };
}
function dE(e, t) {
  if (e !== "root")
    for (let s = t.length - 1; s >= 0; s--) {
      const a = t[s];
      if (a.children) return a.id;
    }
  return ms;
}
function Ry(e, t, s, a) {
  const l = e.options.params?.parse ?? e.options.parseParams;
  if (l)
    if (e.options.skipRouteOnParseError) for (const u in t) u in s && (a[u] = s[u]);
    else {
      const u = l(a);
      Object.assign(a, u);
    }
}
var bn = Symbol.for("TSR_DEFERRED_PROMISE");
function pE(e, t) {
  const s = e;
  return (
    s[bn] ||
      ((s[bn] = { status: "pending" }),
      s
        .then((a) => {
          ((s[bn].status = "success"), (s[bn].data = a));
        })
        .catch((a) => {
          ((s[bn].status = "error"), (s[bn].error = { data: aE(a), __isServerError: !0 }));
        })),
    s
  );
}
var gE = "Error preloading route! ☝️";
function Ay(e, t) {
  if (e) return typeof e == "string" ? e : e[t];
}
function mE(e) {
  return typeof e == "string" ? { href: e, crossOrigin: void 0 } : e;
}
function yE(e) {
  if (e.tag !== "link") return;
  const t = e.attrs?.rel,
    s = e.attrs?.href;
  if (typeof s == "string" && (typeof t == "string" ? t.split(/\s+/) : []).includes("stylesheet"))
    return s;
}
function vE(e, t) {
  const s = yE(t);
  return !!s && e?.inlineCss?.styles[s] !== void 0;
}
var e0 = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(e) {
      if (
        ((this.init = (t) => {
          this.originalIndex = t.originalIndex;
          const s = this.options,
            a = !s?.path && !s?.id;
          ((this.parentRoute = this.options.getParentRoute?.()),
            a ? (this._path = ms) : this.parentRoute || Ut());
          let l = a ? ms : s?.path;
          l && l !== "/" && (l = Kv(l));
          const u = s?.id || l;
          let c = a ? ms : Pl([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, u]);
          (l === "__root__" && (l = "/"), c !== "__root__" && (c = Pl(["/", c])));
          const d = c === "__root__" ? "/" : Pl([this.parentRoute.fullPath, l]);
          ((this._path = l), (this._id = c), (this._fullPath = d), (this._to = Dr(d)));
        }),
        (this.addChildren = (t) => this._addFileChildren(t)),
        (this._addFileChildren = (t) => (
          Array.isArray(t) && (this.children = t),
          typeof t == "object" && t !== null && (this.children = Object.values(t)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (t) => (Object.assign(this.options, t), this)),
        (this.update = (t) => (Object.assign(this.options, t), this)),
        (this.lazy = (t) => ((this.lazyFn = t), this)),
        (this.redirect = (t) => Kl({ from: this.fullPath, ...t })),
        (this.options = e || {}),
        (this.isRoot = !e?.getParentRoute),
        e?.id && e?.path)
      )
        throw new Error("Route cannot have both an 'id' and a 'path' option.");
    }
  },
  bE = class extends e0 {
    constructor(e) {
      super(e);
    }
  };
function _E(e) {
  if (typeof document < "u" && document.querySelector) {
    const t = e.stores.location.get(),
      s = t.state.__hashScrollIntoViewOptions ?? !0;
    if (s && t.hash !== "") {
      const a = document.getElementById(t.hash);
      a && a.scrollIntoView(s);
    }
  }
}
var SE = ((e) => (
    (e[(e.AggregateError = 1)] = "AggregateError"),
    (e[(e.ArrowFunction = 2)] = "ArrowFunction"),
    (e[(e.ErrorPrototypeStack = 4)] = "ErrorPrototypeStack"),
    (e[(e.ObjectAssign = 8)] = "ObjectAssign"),
    (e[(e.BigIntTypedArray = 16)] = "BigIntTypedArray"),
    (e[(e.RegExp = 32)] = "RegExp"),
    e
  ))(SE || {}),
  Qn = Symbol.asyncIterator,
  t0 = Symbol.hasInstance,
  Si = Symbol.isConcatSpreadable,
  Yn = Symbol.iterator,
  n0 = Symbol.match,
  r0 = Symbol.matchAll,
  s0 = Symbol.replace,
  i0 = Symbol.search,
  a0 = Symbol.species,
  o0 = Symbol.split,
  l0 = Symbol.toPrimitive,
  wi = Symbol.toStringTag,
  u0 = Symbol.unscopables,
  c0 = {
    [Qn]: 0,
    [t0]: 1,
    [Si]: 2,
    [Yn]: 3,
    [n0]: 4,
    [r0]: 5,
    [s0]: 6,
    [i0]: 7,
    [a0]: 8,
    [o0]: 9,
    [l0]: 10,
    [wi]: 11,
    [u0]: 12,
  },
  wE = {
    0: Qn,
    1: t0,
    2: Si,
    3: Yn,
    4: n0,
    5: r0,
    6: s0,
    7: i0,
    8: a0,
    9: o0,
    10: l0,
    11: wi,
    12: u0,
  },
  R = void 0,
  EE = {
    2: !0,
    3: !1,
    1: R,
    0: null,
    4: -0,
    5: Number.POSITIVE_INFINITY,
    6: Number.NEGATIVE_INFINITY,
    7: Number.NaN,
  },
  TE = {
    0: "Error",
    1: "EvalError",
    2: "RangeError",
    3: "ReferenceError",
    4: "SyntaxError",
    5: "TypeError",
    6: "URIError",
  },
  RE = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function Re(e, t, s, a, l, u, c, d, p, g, y, m) {
  return { t: e, i: t, s, c: a, m: l, p: u, e: c, a: d, f: p, b: g, o: y, l: m };
}
function Nr(e) {
  return Re(2, R, e, R, R, R, R, R, R, R, R, R);
}
var h0 = Nr(2),
  f0 = Nr(3),
  AE = Nr(1),
  OE = Nr(0),
  CE = Nr(4),
  xE = Nr(5),
  kE = Nr(6),
  jE = Nr(7);
function ME(e) {
  switch (e) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return R;
  }
}
function Pr(e) {
  let t = "",
    s = 0,
    a;
  for (let l = 0, u = e.length; l < u; l++)
    ((a = ME(e[l])), a && ((t += e.slice(s, l) + a), (s = l + 1)));
  return (s === 0 ? (t = e) : (t += e.slice(s)), t);
}
function DE(e) {
  switch (e) {
    case "\\\\":
      return "\\";
    case '\\"':
      return '"';
    case "\\n":
      return `
`;
    case "\\r":
      return "\r";
    case "\\b":
      return "\b";
    case "\\t":
      return "	";
    case "\\f":
      return "\f";
    case "\\x3C":
      return "<";
    case "\\u2028":
      return "\u2028";
    case "\\u2029":
      return "\u2029";
    default:
      return e;
  }
}
function zr(e) {
  return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, DE);
}
var Al = "__SEROVAL_REFS__",
  d0 = new Map(),
  vi = new Map();
function p0(e) {
  return d0.has(e);
}
function UE(e) {
  return vi.has(e);
}
function LE(e) {
  if (p0(e)) return d0.get(e);
  throw new fT(e);
}
function NE(e) {
  if (UE(e)) return vi.get(e);
  throw new dT(e);
}
typeof globalThis < "u"
  ? Object.defineProperty(globalThis, Al, {
      value: vi,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < "u"
    ? Object.defineProperty(window, Al, {
        value: vi,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < "u"
      ? Object.defineProperty(self, Al, {
          value: vi,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < "u" &&
        Object.defineProperty(global, Al, {
          value: vi,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
function Hf(e) {
  return e instanceof EvalError
    ? 1
    : e instanceof RangeError
      ? 2
      : e instanceof ReferenceError
        ? 3
        : e instanceof SyntaxError
          ? 4
          : e instanceof TypeError
            ? 5
            : e instanceof URIError
              ? 6
              : 0;
}
function PE(e) {
  let t = TE[Hf(e)];
  return e.name !== t
    ? { name: e.name }
    : e.constructor.name !== t
      ? { name: e.constructor.name }
      : {};
}
function g0(e, t) {
  let s = PE(e),
    a = Object.getOwnPropertyNames(e);
  for (let l = 0, u = a.length, c; l < u; l++)
    ((c = a[l]),
      c !== "name" &&
        c !== "message" &&
        (c === "stack" ? t & 4 && ((s = s || {}), (s[c] = e[c])) : ((s = s || {}), (s[c] = e[c]))));
  return s;
}
function m0(e) {
  return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : Object.isExtensible(e) ? 0 : 1;
}
function zE(e) {
  switch (e) {
    case Number.POSITIVE_INFINITY:
      return xE;
    case Number.NEGATIVE_INFINITY:
      return kE;
  }
  return e !== e ? jE : Object.is(e, -0) ? CE : Re(0, R, e, R, R, R, R, R, R, R, R, R);
}
function y0(e) {
  return Re(1, R, Pr(e), R, R, R, R, R, R, R, R, R);
}
function BE(e) {
  return Re(3, R, "" + e, R, R, R, R, R, R, R, R, R);
}
function HE(e) {
  return Re(4, e, R, R, R, R, R, R, R, R, R, R);
}
function IE(e, t) {
  let s = t.valueOf();
  return Re(5, e, s !== s ? "" : t.toISOString(), R, R, R, R, R, R, R, R, R);
}
function qE(e, t) {
  return Re(6, e, R, Pr(t.source), t.flags, R, R, R, R, R, R, R);
}
function $E(e, t) {
  return Re(17, e, c0[t], R, R, R, R, R, R, R, R, R);
}
function GE(e, t) {
  return Re(18, e, Pr(LE(t)), R, R, R, R, R, R, R, R, R);
}
function VE(e, t, s) {
  return Re(25, e, s, Pr(t), R, R, R, R, R, R, R, R);
}
function KE(e, t, s) {
  return Re(9, e, R, R, R, R, R, s, R, R, m0(t), R);
}
function FE(e, t) {
  return Re(21, e, R, R, R, R, R, R, t, R, R, R);
}
function QE(e, t, s) {
  return Re(15, e, R, t.constructor.name, R, R, R, R, s, t.byteOffset, R, t.length);
}
function YE(e, t, s) {
  return Re(16, e, R, t.constructor.name, R, R, R, R, s, t.byteOffset, R, t.byteLength);
}
function JE(e, t, s) {
  return Re(20, e, R, R, R, R, R, R, s, t.byteOffset, R, t.byteLength);
}
function XE(e, t, s) {
  return Re(13, e, Hf(t), R, Pr(t.message), s, R, R, R, R, R, R);
}
function ZE(e, t, s) {
  return Re(14, e, Hf(t), R, Pr(t.message), s, R, R, R, R, R, R);
}
function WE(e, t) {
  return Re(7, e, R, R, R, R, R, t, R, R, R, R);
}
function eT(e, t) {
  return Re(28, R, R, R, R, R, R, [e, t], R, R, R, R);
}
function tT(e, t) {
  return Re(30, R, R, R, R, R, R, [e, t], R, R, R, R);
}
function nT(e, t, s) {
  return Re(31, e, R, R, R, R, R, s, t, R, R, R);
}
function rT(e, t) {
  return Re(32, e, R, R, R, R, R, R, t, R, R, R);
}
function sT(e, t) {
  return Re(33, e, R, R, R, R, R, R, t, R, R, R);
}
function iT(e, t) {
  return Re(34, e, R, R, R, R, R, R, t, R, R, R);
}
function aT(e, t, s, a) {
  return Re(35, e, s, R, R, R, R, t, R, R, R, a);
}
var oT = { parsing: 1, serialization: 2, deserialization: 3 };
function lT(e) {
  return `Seroval Error (step: ${oT[e]})`;
}
var uT = (e, t) => lT(e),
  v0 = class extends Error {
    constructor(e, t) {
      (super(uT(e)), (this.cause = t));
    }
  },
  Oy = class extends v0 {
    constructor(e) {
      super("parsing", e);
    }
  },
  cT = class extends v0 {
    constructor(e) {
      super("deserialization", e);
    }
  };
function Jn(e) {
  return `Seroval Error (specific: ${e})`;
}
var cu = class extends Error {
    constructor(t) {
      (super(Jn(1)), (this.value = t));
    }
  },
  b0 = class extends Error {
    constructor(t) {
      super(Jn(2));
    }
  },
  hT = class extends Error {
    constructor(e) {
      super(Jn(3));
    }
  },
  eo = class extends Error {
    constructor(e) {
      super(Jn(4));
    }
  },
  fT = class extends Error {
    constructor(e) {
      (super(Jn(5)), (this.value = e));
    }
  },
  dT = class extends Error {
    constructor(e) {
      super(Jn(6));
    }
  },
  pT = class extends Error {
    constructor(e) {
      super(Jn(7));
    }
  },
  Br = class extends Error {
    constructor(e) {
      super(Jn(8));
    }
  },
  gT = class extends Error {
    constructor(t) {
      super(Jn(9));
    }
  },
  mT = class {
    constructor(e, t) {
      ((this.value = e), (this.replacement = t));
    }
  },
  hu = () => {
    let e = { p: 0, s: 0, f: 0 };
    return (
      (e.p = new Promise((t, s) => {
        ((e.s = t), (e.f = s));
      })),
      e
    );
  },
  yT = (e, t) => {
    (e.s(t), (e.p.s = 1), (e.p.v = t));
  },
  vT = (e, t) => {
    (e.f(t), (e.p.s = 2), (e.p.v = t));
  };
hu.toString();
yT.toString();
vT.toString();
var bT = () => {
    let e = [],
      t = [],
      s = !0,
      a = !1,
      l = 0,
      u = (p, g, y) => {
        for (y = 0; y < l; y++) t[y] && t[y][g](p);
      },
      c = (p, g, y, m) => {
        for (g = 0, y = e.length; g < y; g++)
          ((m = e[g]), !s && g === y - 1 ? p[a ? "return" : "throw"](m) : p.next(m));
      },
      d = (p, g) => (
        s && ((g = l++), (t[g] = p)),
        c(p),
        () => {
          s && ((t[g] = t[l]), (t[l--] = void 0));
        }
      );
    return {
      __SEROVAL_STREAM__: !0,
      on: (p) => d(p),
      next: (p) => {
        s && (e.push(p), u(p, "next"));
      },
      throw: (p) => {
        s && (e.push(p), u(p, "throw"), (s = !1), (a = !1), (t.length = 0));
      },
      return: (p) => {
        s && (e.push(p), u(p, "return"), (s = !1), (a = !0), (t.length = 0));
      },
    };
  },
  _T = (e) => (t) => () => {
    let s = 0,
      a = {
        [e]: () => a,
        next: () => {
          if (s > t.d) return { done: !0, value: void 0 };
          let l = s++,
            u = t.v[l];
          if (l === t.t) throw u;
          return { done: l === t.d, value: u };
        },
      };
    return a;
  },
  ST = (e, t) => (s) => () => {
    let a = 0,
      l = -1,
      u = !1,
      c = [],
      d = [],
      p = (y = 0, m = d.length) => {
        for (; y < m; y++) d[y].s({ done: !0, value: void 0 });
      };
    s.on({
      next: (y) => {
        let m = d.shift();
        (m && m.s({ done: !1, value: y }), c.push(y));
      },
      throw: (y) => {
        let m = d.shift();
        (m && m.f(y), p(), (l = c.length), (u = !0), c.push(y));
      },
      return: (y) => {
        let m = d.shift();
        (m && m.s({ done: !0, value: y }), p(), (l = c.length), c.push(y));
      },
    });
    let g = {
      [e]: () => g,
      next: () => {
        if (l === -1) {
          let b = a++;
          if (b >= c.length) {
            let _ = t();
            return (d.push(_), _.p);
          }
          return { done: !1, value: c[b] };
        }
        if (a > l) return { done: !0, value: void 0 };
        let y = a++,
          m = c[y];
        if (y !== l) return { done: !1, value: m };
        if (u) throw m;
        return { done: !0, value: m };
      },
    };
    return g;
  },
  _0 = (e) => {
    let t = atob(e),
      s = t.length,
      a = new Uint8Array(s);
    for (let l = 0; l < s; l++) a[l] = t.charCodeAt(l);
    return a.buffer;
  };
_0.toString();
function wT(e) {
  return "__SEROVAL_SEQUENCE__" in e;
}
function S0(e, t, s) {
  return { __SEROVAL_SEQUENCE__: !0, v: e, t, d: s };
}
function ET(e) {
  let t = [],
    s = -1,
    a = -1,
    l = e[Yn]();
  for (;;)
    try {
      let u = l.next();
      if ((t.push(u.value), u.done)) {
        a = t.length - 1;
        break;
      }
    } catch (u) {
      ((s = t.length), t.push(u));
    }
  return S0(t, s, a);
}
var TT = _T(Yn);
function RT(e) {
  return TT(e);
}
var AT = {},
  OT = {},
  CT = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function fu(e) {
  return "__SEROVAL_STREAM__" in e;
}
function _s() {
  return bT();
}
function xT(e) {
  let t = _s(),
    s = e[Qn]();
  async function a() {
    try {
      let l = await s.next();
      l.done ? t.return(l.value) : (t.next(l.value), await a());
    } catch (l) {
      t.throw(l);
    }
  }
  return (a().catch(() => {}), t);
}
var kT = ST(Qn, hu);
function jT(e) {
  return kT(e);
}
async function MT(e) {
  try {
    return [1, await e];
  } catch (t) {
    return [0, t];
  }
}
function DT(e, t) {
  return {
    plugins: t.plugins,
    mode: e,
    marked: new Set(),
    features: 63 ^ (t.disabledFeatures || 0),
    refs: t.refs || new Map(),
    depthLimit: t.depthLimit || 1e3,
  };
}
function Hl(e, t) {
  e.marked.add(t);
}
function UT(e, t) {
  let s = e.refs.size;
  return (e.refs.set(t, s), s);
}
function du(e, t) {
  let s = e.refs.get(t);
  return s != null ? (Hl(e, s), { type: 1, value: HE(s) }) : { type: 0, value: UT(e, t) };
}
function If(e, t) {
  let s = du(e, t);
  return s.type === 1 ? s : p0(t) ? { type: 2, value: GE(s.value, t) } : s;
}
function fs(e, t) {
  let s = If(e, t);
  if (s.type !== 0) return s.value;
  if (t in c0) return $E(s.value, t);
  throw new cu(t);
}
function pu(e, t) {
  let s = du(e, CT[t]);
  return s.type === 1 ? s.value : Re(26, s.value, t, R, R, R, R, R, R, R, R, R);
}
function LT(e) {
  let t = du(e, AT);
  return t.type === 1 ? t.value : Re(27, t.value, R, R, R, R, R, R, fs(e, Yn), R, R, R);
}
function NT(e) {
  let t = du(e, OT);
  return t.type === 1 ? t.value : Re(29, t.value, R, R, R, R, R, [pu(e, 1), fs(e, Qn)], R, R, R, R);
}
function PT(e, t, s, a) {
  return Re(s ? 11 : 10, e, R, R, R, a, R, R, R, R, m0(t), R);
}
function zT(e, t, s, a) {
  return Re(8, t, R, R, R, R, { k: s, v: a }, R, pu(e, 0), R, R, R);
}
function BT(e, t, s) {
  let a = new Uint8Array(s),
    l = "";
  for (let u = 0, c = a.length; u < c; u++) l += String.fromCharCode(a[u]);
  return Re(19, t, Pr(btoa(l)), R, R, R, R, R, pu(e, 5), R, R, R);
}
function HT(e, t) {
  return { base: DT(e, t), child: void 0 };
}
var IT = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  parse(e) {
    return it(this._p, this.depth, e);
  }
};
async function qT(e, t, s) {
  let a = [];
  for (let l = 0, u = s.length; l < u; l++) l in s ? (a[l] = await it(e, t, s[l])) : (a[l] = 0);
  return a;
}
async function $T(e, t, s, a) {
  return KE(s, a, await qT(e, t, a));
}
async function qf(e, t, s) {
  let a = Object.entries(s),
    l = [],
    u = [];
  for (let c = 0, d = a.length; c < d; c++) (l.push(Pr(a[c][0])), u.push(await it(e, t, a[c][1])));
  return (
    Yn in s && (l.push(fs(e.base, Yn)), u.push(eT(LT(e.base), await it(e, t, ET(s))))),
    Qn in s && (l.push(fs(e.base, Qn)), u.push(tT(NT(e.base), await it(e, t, xT(s))))),
    wi in s && (l.push(fs(e.base, wi)), u.push(y0(s[wi]))),
    Si in s && (l.push(fs(e.base, Si)), u.push(s[Si] ? h0 : f0)),
    { k: l, v: u }
  );
}
async function Kh(e, t, s, a, l) {
  return PT(s, a, l, await qf(e, t, a));
}
async function GT(e, t, s, a) {
  return FE(s, await it(e, t, a.valueOf()));
}
async function VT(e, t, s, a) {
  return QE(s, a, await it(e, t, a.buffer));
}
async function KT(e, t, s, a) {
  return YE(s, a, await it(e, t, a.buffer));
}
async function FT(e, t, s, a) {
  return JE(s, a, await it(e, t, a.buffer));
}
async function Cy(e, t, s, a) {
  let l = g0(a, e.base.features);
  return XE(s, a, l ? await qf(e, t, l) : R);
}
async function QT(e, t, s, a) {
  let l = g0(a, e.base.features);
  return ZE(s, a, l ? await qf(e, t, l) : R);
}
async function YT(e, t, s, a) {
  let l = [],
    u = [];
  for (let [c, d] of a.entries()) (l.push(await it(e, t, c)), u.push(await it(e, t, d)));
  return zT(e.base, s, l, u);
}
async function JT(e, t, s, a) {
  let l = [];
  for (let u of a.keys()) l.push(await it(e, t, u));
  return WE(s, l);
}
async function w0(e, t, s, a) {
  let l = e.base.plugins;
  if (l)
    for (let u = 0, c = l.length; u < c; u++) {
      let d = l[u];
      if (d.parse.async && d.test(a))
        return VE(s, d.tag, await d.parse.async(a, new IT(e, t), { id: s }));
    }
  return R;
}
async function XT(e, t, s, a) {
  let [l, u] = await MT(a);
  return Re(12, s, l, R, R, R, R, R, await it(e, t, u), R, R, R);
}
function ZT(e, t, s, a, l) {
  let u = [],
    c = s.on({
      next: (d) => {
        (Hl(this.base, t),
          it(this, e, d).then(
            (p) => {
              u.push(rT(t, p));
            },
            (p) => {
              (l(p), c());
            },
          ));
      },
      throw: (d) => {
        (Hl(this.base, t),
          it(this, e, d).then(
            (p) => {
              (u.push(sT(t, p)), a(u), c());
            },
            (p) => {
              (l(p), c());
            },
          ));
      },
      return: (d) => {
        (Hl(this.base, t),
          it(this, e, d).then(
            (p) => {
              (u.push(iT(t, p)), a(u), c());
            },
            (p) => {
              (l(p), c());
            },
          ));
      },
    });
}
async function WT(e, t, s, a) {
  return nT(s, pu(e.base, 4), await new Promise(ZT.bind(e, t, s, a)));
}
async function eR(e, t, s, a) {
  let l = [];
  for (let u = 0, c = a.v.length; u < c; u++) l[u] = await it(e, t, a.v[u]);
  return aT(s, l, a.t, a.d);
}
async function tR(e, t, s, a) {
  if (Array.isArray(a)) return $T(e, t, s, a);
  if (fu(a)) return WT(e, t, s, a);
  if (wT(a)) return eR(e, t, s, a);
  let l = a.constructor;
  if (l === mT) return it(e, t, a.replacement);
  let u = await w0(e, t, s, a);
  if (u) return u;
  switch (l) {
    case Object:
      return Kh(e, t, s, a, !1);
    case R:
      return Kh(e, t, s, a, !0);
    case Date:
      return IE(s, a);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return Cy(e, t, s, a);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return GT(e, t, s, a);
    case ArrayBuffer:
      return BT(e.base, s, a);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return VT(e, t, s, a);
    case DataView:
      return FT(e, t, s, a);
    case Map:
      return YT(e, t, s, a);
    case Set:
      return JT(e, t, s, a);
  }
  if (l === Promise || a instanceof Promise) return XT(e, t, s, a);
  let c = e.base.features;
  if (c & 32 && l === RegExp) return qE(s, a);
  if (c & 16)
    switch (l) {
      case BigInt64Array:
      case BigUint64Array:
        return KT(e, t, s, a);
    }
  if (c & 1 && typeof AggregateError < "u" && (l === AggregateError || a instanceof AggregateError))
    return QT(e, t, s, a);
  if (a instanceof Error) return Cy(e, t, s, a);
  if (Yn in a || Qn in a) return Kh(e, t, s, a, !!l);
  throw new cu(a);
}
async function nR(e, t, s) {
  let a = If(e.base, s);
  if (a.type !== 0) return a.value;
  let l = await w0(e, t, a.value, s);
  if (l) return l;
  throw new cu(s);
}
async function it(e, t, s) {
  switch (typeof s) {
    case "boolean":
      return s ? h0 : f0;
    case "undefined":
      return AE;
    case "string":
      return y0(s);
    case "number":
      return zE(s);
    case "bigint":
      return BE(s);
    case "object": {
      if (s) {
        let a = If(e.base, s);
        return a.type === 0 ? await tR(e, t + 1, a.value, s) : a.value;
      }
      return OE;
    }
    case "symbol":
      return fs(e.base, s);
    case "function":
      return nR(e, t, s);
    default:
      throw new cu(s);
  }
}
async function rR(e, t) {
  try {
    return await it(e, 0, t);
  } catch (s) {
    throw s instanceof Oy ? s : new Oy(s);
  }
}
var sR = ((e) => ((e[(e.Vanilla = 1)] = "Vanilla"), (e[(e.Cross = 2)] = "Cross"), e))(sR || {});
function E0(e, t) {
  for (let s = 0, a = t.length; s < a; s++) {
    let l = t[s];
    e.has(l) || (e.add(l), l.extends && E0(e, l.extends));
  }
}
function T0(e) {
  if (e) {
    let t = new Set();
    return (E0(t, e), [...t]);
  }
}
function iR(e) {
  switch (e) {
    case "Int8Array":
      return Int8Array;
    case "Int16Array":
      return Int16Array;
    case "Int32Array":
      return Int32Array;
    case "Uint8Array":
      return Uint8Array;
    case "Uint16Array":
      return Uint16Array;
    case "Uint32Array":
      return Uint32Array;
    case "Uint8ClampedArray":
      return Uint8ClampedArray;
    case "Float32Array":
      return Float32Array;
    case "Float64Array":
      return Float64Array;
    case "BigInt64Array":
      return BigInt64Array;
    case "BigUint64Array":
      return BigUint64Array;
    default:
      throw new pT(e);
  }
}
var aR = 1e6,
  oR = 1e4,
  lR = 2e4;
function R0(e, t) {
  switch (t) {
    case 3:
      return Object.freeze(e);
    case 1:
      return Object.preventExtensions(e);
    case 2:
      return Object.seal(e);
    default:
      return e;
  }
}
var uR = 1e3;
function cR(e, t) {
  var s;
  return {
    mode: e,
    plugins: t.plugins,
    refs: t.refs || new Map(),
    features: (s = t.features) != null ? s : 63 ^ (t.disabledFeatures || 0),
    depthLimit: t.depthLimit || uR,
  };
}
function hR(e) {
  return { mode: 2, base: cR(2, e), child: R };
}
var fR = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  deserialize(e) {
    return Ne(this._p, this.depth, e);
  }
};
function A0(e, t) {
  if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t)) throw new Br({ t: 4, i: t });
  if (e.refs.has(t)) throw new Error("Conflicted ref id: " + t);
}
function dR(e, t, s) {
  return (A0(e.base, t), e.state.marked.has(t) && e.base.refs.set(t, s), s);
}
function pR(e, t, s) {
  return (A0(e.base, t), e.base.refs.set(t, s), s);
}
function at(e, t, s) {
  return e.mode === 1 ? dR(e, t, s) : pR(e, t, s);
}
function df(e, t, s) {
  if (Object.hasOwn(t, s)) return t[s];
  throw new Br(e);
}
function gR(e, t) {
  return at(e, t.i, NE(zr(t.s)));
}
function mR(e, t, s) {
  let a = s.a,
    l = a.length,
    u = at(e, s.i, new Array(l));
  for (let c = 0, d; c < l; c++) ((d = a[c]), d && (u[c] = Ne(e, t, d)));
  return (R0(u, s.o), u);
}
function yR(e) {
  switch (e) {
    case "constructor":
    case "__proto__":
    case "prototype":
    case "__defineGetter__":
    case "__defineSetter__":
    case "__lookupGetter__":
    case "__lookupSetter__":
      return !1;
    default:
      return !0;
  }
}
function vR(e) {
  switch (e) {
    case Qn:
    case Si:
    case wi:
    case Yn:
      return !0;
    default:
      return !1;
  }
}
function xy(e, t, s) {
  yR(t)
    ? (e[t] = s)
    : Object.defineProperty(e, t, { value: s, configurable: !0, enumerable: !0, writable: !0 });
}
function bR(e, t, s, a, l) {
  if (typeof a == "string") xy(s, zr(a), Ne(e, t, l));
  else {
    let u = Ne(e, t, a);
    switch (typeof u) {
      case "string":
        xy(s, u, Ne(e, t, l));
        break;
      case "symbol":
        vR(u) && (s[u] = Ne(e, t, l));
        break;
      default:
        throw new Br(a);
    }
  }
}
function O0(e, t, s, a) {
  let l = s.k;
  if (l.length > 0) for (let u = 0, c = s.v, d = l.length; u < d; u++) bR(e, t, a, l[u], c[u]);
  return a;
}
function _R(e, t, s) {
  let a = at(e, s.i, s.t === 10 ? {} : Object.create(null));
  return (O0(e, t, s.p, a), R0(a, s.o), a);
}
function SR(e, t) {
  return at(e, t.i, new Date(t.s));
}
function wR(e, t) {
  if (e.base.features & 32) {
    let s = zr(t.c);
    if (s.length > lR) throw new Br(t);
    return at(e, t.i, new RegExp(s, t.m));
  }
  throw new b0(t);
}
function ER(e, t, s) {
  let a = at(e, s.i, new Set());
  for (let l = 0, u = s.a, c = u.length; l < c; l++) a.add(Ne(e, t, u[l]));
  return a;
}
function TR(e, t, s) {
  let a = at(e, s.i, new Map());
  for (let l = 0, u = s.e.k, c = s.e.v, d = u.length; l < d; l++)
    a.set(Ne(e, t, u[l]), Ne(e, t, c[l]));
  return a;
}
function RR(e, t) {
  if (t.s.length > aR) throw new Br(t);
  return at(e, t.i, _0(zr(t.s)));
}
function AR(e, t, s) {
  var a;
  let l = iR(s.c),
    u = Ne(e, t, s.f),
    c = (a = s.b) != null ? a : 0;
  if (c < 0 || c > u.byteLength) throw new Br(s);
  return at(e, s.i, new l(u, c, s.l));
}
function OR(e, t, s) {
  var a;
  let l = Ne(e, t, s.f),
    u = (a = s.b) != null ? a : 0;
  if (u < 0 || u > l.byteLength) throw new Br(s);
  return at(e, s.i, new DataView(l, u, s.l));
}
function C0(e, t, s, a) {
  if (s.p) {
    let l = O0(e, t, s.p, {});
    Object.defineProperties(a, Object.getOwnPropertyDescriptors(l));
  }
  return a;
}
function CR(e, t, s) {
  let a = at(e, s.i, new AggregateError([], zr(s.m)));
  return C0(e, t, s, a);
}
function xR(e, t, s) {
  let a = df(s, RE, s.s),
    l = at(e, s.i, new a(zr(s.m)));
  return C0(e, t, s, l);
}
function kR(e, t, s) {
  let a = hu(),
    l = at(e, s.i, a.p),
    u = Ne(e, t, s.f);
  return (s.s ? a.s(u) : a.f(u), l);
}
function jR(e, t, s) {
  return at(e, s.i, Object(Ne(e, t, s.f)));
}
function MR(e, t, s) {
  let a = e.base.plugins;
  if (a) {
    let l = zr(s.c);
    for (let u = 0, c = a.length; u < c; u++) {
      let d = a[u];
      if (d.tag === l) return at(e, s.i, d.deserialize(s.s, new fR(e, t), { id: s.i }));
    }
  }
  throw new hT(s.c);
}
function DR(e, t) {
  return at(e, t.i, at(e, t.s, hu()).p);
}
function UR(e, t, s) {
  let a = e.base.refs.get(s.i);
  if (a) return (a.s(Ne(e, t, s.a[1])), R);
  throw new eo("Promise");
}
function LR(e, t, s) {
  let a = e.base.refs.get(s.i);
  if (a) return (a.f(Ne(e, t, s.a[1])), R);
  throw new eo("Promise");
}
function NR(e, t, s) {
  Ne(e, t, s.a[0]);
  let a = Ne(e, t, s.a[1]);
  return RT(a);
}
function PR(e, t, s) {
  Ne(e, t, s.a[0]);
  let a = Ne(e, t, s.a[1]);
  return jT(a);
}
function zR(e, t, s) {
  let a = at(e, s.i, _s()),
    l = s.a,
    u = l.length;
  if (u) for (let c = 0; c < u; c++) Ne(e, t, l[c]);
  return a;
}
function BR(e, t, s) {
  let a = e.base.refs.get(s.i);
  if (a && fu(a)) return (a.next(Ne(e, t, s.f)), R);
  throw new eo("Stream");
}
function HR(e, t, s) {
  let a = e.base.refs.get(s.i);
  if (a && fu(a)) return (a.throw(Ne(e, t, s.f)), R);
  throw new eo("Stream");
}
function IR(e, t, s) {
  let a = e.base.refs.get(s.i);
  if (a && fu(a)) return (a.return(Ne(e, t, s.f)), R);
  throw new eo("Stream");
}
function qR(e, t, s) {
  return (Ne(e, t, s.f), R);
}
function $R(e, t, s) {
  return (Ne(e, t, s.a[1]), R);
}
function GR(e, t, s) {
  let a = at(e, s.i, S0([], s.s, s.l));
  for (let l = 0, u = s.a.length; l < u; l++) a.v[l] = Ne(e, t, s.a[l]);
  return a;
}
function Ne(e, t, s) {
  if (t > e.base.depthLimit) throw new gT(e.base.depthLimit);
  switch (((t += 1), s.t)) {
    case 2:
      return df(s, EE, s.s);
    case 0:
      return Number(s.s);
    case 1:
      return zr(String(s.s));
    case 3:
      if (String(s.s).length > oR) throw new Br(s);
      return BigInt(s.s);
    case 4:
      return e.base.refs.get(s.i);
    case 18:
      return gR(e, s);
    case 9:
      return mR(e, t, s);
    case 10:
    case 11:
      return _R(e, t, s);
    case 5:
      return SR(e, s);
    case 6:
      return wR(e, s);
    case 7:
      return ER(e, t, s);
    case 8:
      return TR(e, t, s);
    case 19:
      return RR(e, s);
    case 16:
    case 15:
      return AR(e, t, s);
    case 20:
      return OR(e, t, s);
    case 14:
      return CR(e, t, s);
    case 13:
      return xR(e, t, s);
    case 12:
      return kR(e, t, s);
    case 17:
      return df(s, wE, s.s);
    case 21:
      return jR(e, t, s);
    case 25:
      return MR(e, t, s);
    case 22:
      return DR(e, s);
    case 23:
      return UR(e, t, s);
    case 24:
      return LR(e, t, s);
    case 28:
      return NR(e, t, s);
    case 30:
      return PR(e, t, s);
    case 31:
      return zR(e, t, s);
    case 32:
      return BR(e, t, s);
    case 33:
      return HR(e, t, s);
    case 34:
      return IR(e, t, s);
    case 27:
      return qR(e, t, s);
    case 29:
      return $R(e, t, s);
    case 35:
      return GR(e, t, s);
    default:
      throw new b0(s);
  }
}
function VR(e, t) {
  try {
    return Ne(e, 0, t);
  } catch (s) {
    throw new cT(s);
  }
}
var KR = () => T;
KR.toString();
function ky(e, t) {
  let s = T0(t.plugins),
    a = hR({
      plugins: s,
      refs: t.refs,
      features: t.features,
      disabledFeatures: t.disabledFeatures,
      depthLimit: t.depthLimit,
    });
  return VR(a, e);
}
async function FR(e, t = {}) {
  let s = T0(t.plugins),
    a = HT(1, { plugins: s, disabledFeatures: t.disabledFeatures });
  return { t: await rR(a, e), f: a.base.features, m: Array.from(a.base.marked) };
}
function QR(e) {
  return {
    tag: "$TSR/t/" + e.key,
    test: e.test,
    parse: {
      sync(t, s, a) {
        return { v: s.parse(e.toSerializable(t)) };
      },
      async async(t, s, a) {
        return { v: await s.parse(e.toSerializable(t)) };
      },
      stream(t, s, a) {
        return { v: s.parse(e.toSerializable(t)) };
      },
    },
    serialize: void 0,
    deserialize(t, s, a) {
      return e.fromSerializable(s.deserialize(t.v));
    },
  };
}
var YR = class {
    constructor(e, t) {
      ((this.stream = e), (this.hint = t?.hint ?? "binary"));
    }
  },
  Yl = globalThis.Buffer,
  x0 = !!Yl && typeof Yl.from == "function";
function k0(e) {
  if (e.length === 0) return "";
  if (x0) return Yl.from(e).toString("base64");
  const t = 32768,
    s = [];
  for (let a = 0; a < e.length; a += t) {
    const l = e.subarray(a, a + t);
    s.push(String.fromCharCode.apply(null, l));
  }
  return btoa(s.join(""));
}
function j0(e) {
  if (e.length === 0) return new Uint8Array(0);
  if (x0) {
    const a = Yl.from(e, "base64");
    return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
  }
  const t = atob(e),
    s = new Uint8Array(t.length);
  for (let a = 0; a < t.length; a++) s[a] = t.charCodeAt(a);
  return s;
}
var Aa = Object.create(null),
  Oa = Object.create(null),
  JR = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(s) {
            try {
              t.enqueue(j0(s));
            } catch {}
          },
          throw(s) {
            t.error(s);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  XR = new TextEncoder(),
  ZR = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(s) {
            try {
              typeof s == "string" ? t.enqueue(XR.encode(s)) : t.enqueue(j0(s.$b64));
            } catch {}
          },
          throw(s) {
            t.error(s);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  WR =
    "(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))",
  eA =
    "(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})";
function jy(e) {
  const t = _s(),
    s = e.getReader();
  return (
    (async () => {
      try {
        for (;;) {
          const { done: a, value: l } = await s.read();
          if (a) {
            t.return(void 0);
            break;
          }
          t.next(k0(l));
        }
      } catch (a) {
        t.throw(a);
      } finally {
        s.releaseLock();
      }
    })(),
    t
  );
}
function My(e) {
  const t = _s(),
    s = e.getReader(),
    a = new TextDecoder("utf-8", { fatal: !0 });
  return (
    (async () => {
      try {
        for (;;) {
          const { done: l, value: u } = await s.read();
          if (l) {
            try {
              const c = a.decode();
              c.length > 0 && t.next(c);
            } catch {}
            t.return(void 0);
            break;
          }
          try {
            const c = a.decode(u, { stream: !0 });
            c.length > 0 && t.next(c);
          } catch {
            t.next({ $b64: k0(u) });
          }
        }
      } catch (l) {
        t.throw(l);
      } finally {
        s.releaseLock();
      }
    })(),
    t
  );
}
var tA = {
  tag: "tss/RawStream",
  extends: [
    {
      tag: "tss/RawStreamFactory",
      test(e) {
        return e === Aa;
      },
      parse: {
        sync(e, t, s) {
          return {};
        },
        async async(e, t, s) {
          return {};
        },
        stream(e, t, s) {
          return {};
        },
      },
      serialize(e, t, s) {
        return WR;
      },
      deserialize(e, t, s) {
        return Aa;
      },
    },
    {
      tag: "tss/RawStreamFactoryText",
      test(e) {
        return e === Oa;
      },
      parse: {
        sync(e, t, s) {
          return {};
        },
        async async(e, t, s) {
          return {};
        },
        stream(e, t, s) {
          return {};
        },
      },
      serialize(e, t, s) {
        return eA;
      },
      deserialize(e, t, s) {
        return Oa;
      },
    },
  ],
  test(e) {
    return e instanceof YR;
  },
  parse: {
    sync(e, t, s) {
      const a = e.hint === "text" ? Oa : Aa;
      return { hint: t.parse(e.hint), factory: t.parse(a), stream: t.parse(_s()) };
    },
    async async(e, t, s) {
      const a = e.hint === "text" ? Oa : Aa,
        l = e.hint === "text" ? My(e.stream) : jy(e.stream);
      return { hint: await t.parse(e.hint), factory: await t.parse(a), stream: await t.parse(l) };
    },
    stream(e, t, s) {
      const a = e.hint === "text" ? Oa : Aa,
        l = e.hint === "text" ? My(e.stream) : jy(e.stream);
      return { hint: t.parse(e.hint), factory: t.parse(a), stream: t.parse(l) };
    },
  },
  serialize(e, t, s) {
    return "(" + t.serialize(e.factory) + ")(" + t.serialize(e.stream) + ")";
  },
  deserialize(e, t, s) {
    const a = t.deserialize(e.stream);
    return t.deserialize(e.hint) === "text" ? ZR(a) : JR(a);
  },
};
function nA(e) {
  return {
    tag: "tss/RawStream",
    test: () => !1,
    parse: {},
    serialize() {
      throw new Error(
        "RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.",
      );
    },
    deserialize(t, s, a) {
      return e(typeof s?.deserialize == "function" ? s.deserialize(t.streamId) : t.streamId);
    },
  };
}
var rA = {
    tag: "$TSR/Error",
    test(e) {
      return e instanceof Error;
    },
    parse: {
      sync(e, t) {
        return { message: t.parse(e.message) };
      },
      async async(e, t) {
        return { message: await t.parse(e.message) };
      },
      stream(e, t) {
        return { message: t.parse(e.message) };
      },
    },
    serialize(e, t) {
      return "new Error(" + t.serialize(e.message) + ")";
    },
    deserialize(e, t) {
      return new Error(t.deserialize(e.message));
    },
  },
  Ar = {},
  M0 = (e) =>
    new ReadableStream({
      start: (t) => {
        e.on({
          next: (s) => {
            try {
              t.enqueue(s);
            } catch {}
          },
          throw: (s) => {
            t.error(s);
          },
          return: () => {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  sA = {
    tag: "seroval-plugins/web/ReadableStreamFactory",
    test(e) {
      return e === Ar;
    },
    parse: {
      sync() {
        return Ar;
      },
      async async() {
        return await Promise.resolve(Ar);
      },
      stream() {
        return Ar;
      },
    },
    serialize() {
      return M0.toString();
    },
    deserialize() {
      return Ar;
    },
  };
function Dy(e) {
  let t = _s(),
    s = e.getReader();
  async function a() {
    try {
      let l = await s.read();
      l.done ? t.return(l.value) : (t.next(l.value), await a());
    } catch (l) {
      t.throw(l);
    }
  }
  return (a().catch(() => {}), t);
}
var iA = {
    tag: "seroval/plugins/web/ReadableStream",
    extends: [sA],
    test(e) {
      return typeof ReadableStream > "u" ? !1 : e instanceof ReadableStream;
    },
    parse: {
      sync(e, t) {
        return { factory: t.parse(Ar), stream: t.parse(_s()) };
      },
      async async(e, t) {
        return { factory: await t.parse(Ar), stream: await t.parse(Dy(e)) };
      },
      stream(e, t) {
        return { factory: t.parse(Ar), stream: t.parse(Dy(e)) };
      },
    },
    serialize(e, t) {
      return "(" + t.serialize(e.factory) + ")(" + t.serialize(e.stream) + ")";
    },
    deserialize(e, t) {
      let s = t.deserialize(e.stream);
      return M0(s);
    },
  },
  aA = iA,
  oA = [rA, tA, aA];
function lA() {
  return [...(qv()?.serializationAdapters?.map(QR) ?? []), ...oA];
}
var Uy = new TextDecoder(),
  uA = new Uint8Array(0),
  Ly = 16 * 1024 * 1024,
  Ny = 32 * 1024 * 1024,
  Py = 1024,
  zy = 1e5;
function cA(e) {
  const t = new Map(),
    s = new Map(),
    a = new Set();
  let l = !1,
    u = null,
    c = 0,
    d;
  const p = new ReadableStream({
    start(m) {
      d = m;
    },
    cancel() {
      l = !0;
      try {
        u?.cancel();
      } catch {}
      (t.forEach((m) => {
        try {
          m.error(new Error("Framed response cancelled"));
        } catch {}
      }),
        t.clear(),
        s.clear(),
        a.clear());
    },
  });
  function g(m) {
    const b = s.get(m);
    if (b) return b;
    if (a.has(m))
      return new ReadableStream({
        start(w) {
          w.close();
        },
      });
    if (s.size >= Py) throw new Error(`Too many raw streams in framed response (max ${Py})`);
    const _ = new ReadableStream({
      start(w) {
        t.set(m, w);
      },
      cancel() {
        (a.add(m), t.delete(m), s.delete(m));
      },
    });
    return (s.set(m, _), _);
  }
  function y(m) {
    return (g(m), t.get(m));
  }
  return (
    (async () => {
      const m = e.getReader();
      u = m;
      const b = [];
      let _ = 0;
      function w() {
        if (_ < 9) return null;
        const E = b[0];
        if (E.length >= 9)
          return {
            type: E[0],
            streamId: ((E[1] << 24) | (E[2] << 16) | (E[3] << 8) | E[4]) >>> 0,
            length: ((E[5] << 24) | (E[6] << 16) | (E[7] << 8) | E[8]) >>> 0,
          };
        const O = new Uint8Array(9);
        let M = 0,
          j = 9;
        for (let L = 0; L < b.length && j > 0; L++) {
          const Q = b[L],
            F = Math.min(Q.length, j);
          (O.set(Q.subarray(0, F), M), (M += F), (j -= F));
        }
        return {
          type: O[0],
          streamId: ((O[1] << 24) | (O[2] << 16) | (O[3] << 8) | O[4]) >>> 0,
          length: ((O[5] << 24) | (O[6] << 16) | (O[7] << 8) | O[8]) >>> 0,
        };
      }
      function A(E) {
        if (E === 0) return uA;
        const O = new Uint8Array(E);
        let M = 0,
          j = E;
        for (; j > 0 && b.length > 0; ) {
          const L = b[0];
          if (!L) break;
          const Q = Math.min(L.length, j);
          (O.set(L.subarray(0, Q), M),
            (M += Q),
            (j -= Q),
            Q === L.length ? b.shift() : (b[0] = L.subarray(Q)));
        }
        return ((_ -= E), O);
      }
      try {
        for (;;) {
          const { done: E, value: O } = await m.read();
          if (l || E) break;
          if (O) {
            if (_ + O.length > Ny) throw new Error(`Framed response buffer exceeded ${Ny} bytes`);
            for (b.push(O), _ += O.length; ; ) {
              const M = w();
              if (!M) break;
              const { type: j, streamId: L, length: Q } = M;
              if (j !== $n.JSON && j !== $n.CHUNK && j !== $n.END && j !== $n.ERROR)
                throw new Error(`Unknown frame type: ${j}`);
              if (j === $n.JSON) {
                if (L !== 0) throw new Error("Invalid JSON frame streamId (expected 0)");
              } else if (L === 0) throw new Error("Invalid raw frame streamId (expected non-zero)");
              if (Q > Ly) throw new Error(`Frame payload too large: ${Q} bytes (max ${Ly})`);
              const F = 9 + Q;
              if (_ < F) break;
              if (++c > zy) throw new Error(`Too many frames in framed response (max ${zy})`);
              A(9);
              const B = A(Q);
              switch (j) {
                case $n.JSON:
                  try {
                    d.enqueue(Uy.decode(B));
                  } catch {}
                  break;
                case $n.CHUNK: {
                  const G = y(L);
                  G && G.enqueue(B);
                  break;
                }
                case $n.END: {
                  const G = y(L);
                  if ((a.add(L), G)) {
                    try {
                      G.close();
                    } catch {}
                    t.delete(L);
                  }
                  break;
                }
                case $n.ERROR: {
                  const G = y(L);
                  if ((a.add(L), G)) {
                    const Y = Uy.decode(B);
                    (G.error(new Error(Y)), t.delete(L));
                  }
                  break;
                }
              }
            }
          }
        }
        if (_ !== 0) throw new Error("Incomplete frame at end of framed response");
        try {
          d.close();
        } catch {}
        (t.forEach((E) => {
          try {
            E.close();
          } catch {}
        }),
          t.clear());
      } catch (E) {
        try {
          d.error(E);
        } catch {}
        (t.forEach((O) => {
          try {
            O.error(E);
          } catch {}
        }),
          t.clear());
      } finally {
        try {
          m.releaseLock();
        } catch {}
        u = null;
      }
    })(),
    { getOrCreateStream: g, jsonChunks: p }
  );
}
var qa = null;
async function pf(e) {
  e.length > 0 && (await Promise.allSettled(e));
}
var hA = Object.prototype.hasOwnProperty;
function D0(e) {
  for (const t in e) if (hA.call(e, t)) return !0;
  return !1;
}
async function fA(e, t, s) {
  qa || (qa = lA());
  const a = t[0],
    l = a.fetch ?? s,
    u = a.data instanceof FormData ? "formData" : "payload",
    c = a.headers ? new Headers(a.headers) : new Headers();
  if (
    (c.set("x-tsr-serverFn", "true"),
    u === "payload" && c.set("accept", `${ow}, application/x-ndjson, application/json`),
    a.method === "GET")
  ) {
    if (u === "formData") throw new Error("FormData is not supported with GET requests");
    const p = await U0(a);
    if (p !== void 0) {
      const g = Qv({ payload: p });
      e.includes("?") ? (e += `&${g}`) : (e += `?${g}`);
    }
  }
  let d;
  if (a.method === "POST") {
    const p = await dA(a);
    (p?.contentType && c.set("content-type", p.contentType), (d = p?.body));
  }
  return await pA(async () => l(e, { method: a.method, headers: c, signal: a.signal, body: d }));
}
async function U0(e) {
  let t = !1;
  const s = {};
  if (
    (e.data !== void 0 && ((t = !0), (s.data = e.data)),
    e.context && D0(e.context) && ((t = !0), (s.context = e.context)),
    t)
  )
    return L0(s);
}
async function L0(e) {
  return JSON.stringify(await Promise.resolve(FR(e, { plugins: qa })));
}
async function dA(e) {
  if (e.data instanceof FormData) {
    let s;
    return (
      e.context && D0(e.context) && (s = await L0(e.context)),
      s !== void 0 && e.data.set(aw, s),
      { body: e.data }
    );
  }
  const t = await U0(e);
  if (t) return { body: t, contentType: "application/json" };
}
async function pA(e) {
  let t;
  try {
    t = await e();
  } catch (a) {
    if (a instanceof Response) t = a;
    else throw (console.log(a), a);
  }
  if (t.headers.get("x-tss-raw") === "true") return t;
  const s = t.headers.get("content-type");
  if ((s || Ut(), t.headers.get("x-tss-serialized"))) {
    let a;
    if (s.includes("application/x-tss-framed")) {
      if ((cw(s), !t.body)) throw new Error("No response body for framed response");
      const { getOrCreateStream: l, jsonChunks: u } = cA(t.body),
        c = [nA(l), ...(qa || [])],
        d = new Map();
      a = await gA({
        jsonStream: u,
        onMessage: (p) => ky(p, { refs: d, plugins: c }),
        onError(p, g) {
          console.error(p, g);
        },
      });
    } else if (s.includes("application/json")) {
      const l = await t.json(),
        u = [];
      ((a = ky(l, { plugins: qa })), await pf(u));
    }
    if ((a || Ut(), a instanceof Error)) throw a;
    return a;
  }
  if (s.includes("application/json")) {
    const a = await t.json(),
      l = Fw(a);
    if (l) throw l;
    if (ct(a)) throw a;
    return a;
  }
  if (!t.ok) throw new Error(await t.text());
  return t;
}
async function gA({ jsonStream: e, onMessage: t, onError: s }) {
  const a = e.getReader(),
    { value: l, done: u } = await a.read();
  if (u || !l) throw new Error("Stream ended before first object");
  const c = JSON.parse(l);
  let d = !1;
  const p = (async () => {
    try {
      for (;;) {
        const { value: m, done: b } = await a.read();
        if (b) break;
        if (m)
          try {
            const _ = [];
            try {
              t(JSON.parse(m));
            } finally {
            }
            await pf(_);
          } catch (_) {
            s?.(`Invalid JSON: ${m}`, _);
          }
      }
    } catch (m) {
      d || s?.("Stream processing error:", m);
    }
  })();
  let g;
  const y = [];
  try {
    g = t(c);
  } catch (m) {
    throw ((d = !0), a.cancel().catch(() => {}), m);
  }
  return (
    await pf(y),
    Promise.resolve(g).catch(() => {
      ((d = !0), a.cancel().catch(() => {}));
    }),
    p.finally(() => {
      try {
        a.releaseLock();
      } catch {}
    }),
    g
  );
}
function mA(e) {
  const t = "/_serverFn/" + e;
  return Object.assign(
    (...l) => {
      const u = qv()?.serverFns?.fetch;
      return fA(t, l, u ?? fetch);
    },
    { url: t, serverFnMeta: { id: e }, [cf]: !0 },
  );
}
var yA = {
  key: "$TSS/serverfn",
  test: (e) => (typeof e != "function" || !(cf in e) ? !1 : !!e[cf]),
  toSerializable: ({ serverFnMeta: e }) => ({ functionId: e.id }),
  fromSerializable: ({ functionId: e }) => mA(e),
};
function By(e) {
  return e.replaceAll("\0", "/").replaceAll("�", "/");
}
function vA(e, t) {
  ((e.id = t.i),
    (e.__beforeLoadContext = t.b),
    (e.loaderData = t.l),
    (e.status = t.s),
    (e.ssr = t.ssr),
    (e.updatedAt = t.u),
    (e.error = t.e),
    t.g !== void 0 && (e.globalNotFound = t.g));
}
async function bA(e) {
  window.$_TSR || Ut();
  const t = e.options.serializationAdapters;
  if (t?.length) {
    const E = new Map();
    (t.forEach((O) => {
      E.set(O.key, O.fromSerializable);
    }),
      (window.$_TSR.t = E),
      window.$_TSR.buffer.forEach((O) => O()));
  }
  ((window.$_TSR.initialized = !0), window.$_TSR.router || Ut());
  const s = window.$_TSR.router;
  (s.matches.forEach((E) => {
    E.i = By(E.i);
  }),
    s.lastMatchId && (s.lastMatchId = By(s.lastMatchId)));
  const { manifest: a, dehydratedData: l, lastMatchId: u } = s;
  e.ssr = { manifest: a };
  const c = document.querySelector('meta[property="csp-nonce"]')?.content;
  e.options.ssr = { nonce: c };
  const d = e.matchRoutes(e.stores.location.get()),
    p = Promise.all(d.map((E) => e.loadRouteChunk(e.looseRoutesById[E.routeId])));
  function g(E) {
    const O = e.looseRoutesById[E.routeId].options.pendingMinMs ?? e.options.defaultPendingMinMs;
    if (O) {
      const M = vs();
      ((E._nonReactive.minPendingPromise = M),
        (E._forcePending = !0),
        setTimeout(() => {
          (M.resolve(),
            e.updateMatch(
              E.id,
              (j) => ((j._nonReactive.minPendingPromise = void 0), { ...j, _forcePending: void 0 }),
            ));
        }, O));
    }
  }
  function y(E) {
    const O = e.looseRoutesById[E.routeId];
    O && (O.options.ssr = E.ssr);
  }
  let m;
  (d.forEach((E) => {
    const O = s.matches.find((M) => M.i === E.id);
    if (!O) {
      ((E._nonReactive.dehydrated = !1), (E.ssr = !1), y(E));
      return;
    }
    (vA(E, O),
      y(E),
      (E._nonReactive.dehydrated = E.ssr !== !1),
      (E.ssr === "data-only" || E.ssr === !1) && m === void 0 && ((m = E.index), g(E)));
  }),
    e.stores.setMatches(d),
    await e.options.hydrate?.(l));
  const b = e.stores.matches.get(),
    _ = e.stores.location.get();
  await Promise.all(
    b.map(async (E) => {
      try {
        const O = e.looseRoutesById[E.routeId],
          M = b[E.index - 1]?.context ?? e.options.context;
        if (O.options.context) {
          const F = {
            deps: E.loaderDeps,
            params: E.params,
            context: M ?? {},
            location: _,
            navigate: (B) => e.navigate({ ...B, _fromLocation: _ }),
            buildLocation: e.buildLocation,
            cause: E.cause,
            abortController: E.abortController,
            preload: !1,
            matches: d,
            routeId: O.id,
          };
          E.__routeContext = O.options.context(F) ?? void 0;
        }
        E.context = { ...M, ...E.__routeContext, ...E.__beforeLoadContext };
        const j = {
            ssr: e.options.ssr,
            matches: b,
            match: E,
            params: E.params,
            loaderData: E.loaderData,
          },
          L = await O.options.head?.(j),
          Q = await O.options.scripts?.(j);
        ((E.meta = L?.meta),
          (E.links = L?.links),
          (E.headScripts = L?.scripts),
          (E.styles = L?.styles),
          (E.scripts = Q));
      } catch (O) {
        if (ct(O))
          ((E.error = { isNotFound: !0 }),
            console.error(`NotFound error during hydration for routeId: ${E.routeId}`, O));
        else
          throw (
            (E.error = O),
            console.error(`Error during hydration for route ${E.routeId}:`, O),
            O
          );
      }
    }),
  );
  const w = d[d.length - 1].id !== u;
  if (!d.some((E) => E.ssr === !1) && !w)
    return (
      d.forEach((E) => {
        E._nonReactive.dehydrated = void 0;
      }),
      e.stores.resolvedLocation.set(e.stores.location.get()),
      p
    );
  const A = Promise.resolve()
    .then(() => e.load())
    .catch((E) => {
      console.error("Error during router hydration:", E);
    });
  if (w) {
    const E = d[1];
    (E || Ut(),
      g(E),
      (E._displayPending = !0),
      (E._nonReactive.displayPendingPromise = A),
      A.then(() => {
        e.batch(() => {
          (e.stores.status.get() === "pending" &&
            (e.stores.status.set("idle"), e.stores.resolvedLocation.set(e.stores.location.get())),
            e.updateMatch(E.id, (O) => ({
              ...O,
              _displayPending: void 0,
              displayPendingPromise: void 0,
            })));
        });
      }));
  }
  return p;
}
var Jl = W.use,
  ka = typeof window < "u" ? W.useLayoutEffect : W.useEffect;
function Fh(e) {
  const t = W.useRef({ value: e, prev: null }),
    s = t.current.value;
  return (e !== s && (t.current = { value: e, prev: s }), t.current.prev);
}
function _A(e, t, s = {}, a = {}) {
  W.useEffect(() => {
    if (!e.current || a.disabled || typeof IntersectionObserver != "function") return;
    const l = new IntersectionObserver(([u]) => {
      t(u);
    }, s);
    return (
      l.observe(e.current),
      () => {
        l.disconnect();
      }
    );
  }, [t, s, a.disabled, e]);
}
function SA(e) {
  const t = W.useRef(null);
  return (W.useImperativeHandle(e, () => t.current, []), t);
}
function wA({ promise: e }) {
  if (Jl) return Jl(e);
  const t = pE(e);
  if (t[bn].status === "pending") throw t;
  if (t[bn].status === "error") throw t[bn].error;
  return t[bn].data;
}
function EA(e) {
  const t = $.jsx(TA, { ...e });
  return e.fallback ? $.jsx(W.Suspense, { fallback: e.fallback, children: t }) : t;
}
function TA(e) {
  const t = wA(e);
  return e.children(t);
}
function $f(e) {
  const t = e.errorComponent ?? Gf;
  return $.jsx(RA, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: s, reset: a }) =>
      s ? W.createElement(t, { error: s, reset: a }) : e.children,
  });
}
var RA = class extends W.Component {
  constructor(...e) {
    (super(...e), (this.state = { error: null }));
  }
  static getDerivedStateFromProps(e, t) {
    const s = e.getResetKey();
    return t.error && t.resetKey !== s ? { resetKey: s, error: null } : { resetKey: s };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidCatch(e, t) {
    this.props.onCatch && this.props.onCatch(e, t);
  }
  render() {
    return this.props.children({
      error: this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
};
function Gf({ error: e }) {
  const [t, s] = W.useState(!1);
  return $.jsxs("div", {
    style: { padding: ".5rem", maxWidth: "100%" },
    children: [
      $.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: ".5rem" },
        children: [
          $.jsx("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }),
          $.jsx("button", {
            style: {
              appearance: "none",
              fontSize: ".6em",
              border: "1px solid currentColor",
              padding: ".1rem .2rem",
              fontWeight: "bold",
              borderRadius: ".25rem",
            },
            onClick: () => s((a) => !a),
            children: t ? "Hide Error" : "Show Error",
          }),
        ],
      }),
      $.jsx("div", { style: { height: ".25rem" } }),
      t
        ? $.jsx("div", {
            children: $.jsx("pre", {
              style: {
                fontSize: ".7em",
                border: "1px solid red",
                borderRadius: ".25rem",
                padding: ".3rem",
                color: "red",
                overflow: "auto",
              },
              children: e.message ? $.jsx("code", { children: e.message }) : null,
            }),
          })
        : null,
    ],
  });
}
function AA({ children: e, fallback: t = null }) {
  return Vf() ? $.jsx(Pa.Fragment, { children: e }) : $.jsx(Pa.Fragment, { children: t });
}
function Vf() {
  return Pa.useSyncExternalStore(
    OA,
    () => !0,
    () => !1,
  );
}
function OA() {
  return () => {};
}
var N0 = W.createContext(null);
function vt(e) {
  return W.useContext(N0);
}
var gu = W.createContext(void 0),
  CA = W.createContext(void 0),
  $e = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.Mutable = 1)] = "Mutable"),
    (e[(e.Watching = 2)] = "Watching"),
    (e[(e.RecursedCheck = 4)] = "RecursedCheck"),
    (e[(e.Recursed = 8)] = "Recursed"),
    (e[(e.Dirty = 16)] = "Dirty"),
    (e[(e.Pending = 32)] = "Pending"),
    e
  ))($e || {});
function xA({ update: e, notify: t, unwatched: s }) {
  return { link: a, unlink: l, propagate: u, checkDirty: c, shallowPropagate: d };
  function a(g, y, m) {
    const b = y.depsTail;
    if (b !== void 0 && b.dep === g) return;
    const _ = b !== void 0 ? b.nextDep : y.deps;
    if (_ !== void 0 && _.dep === g) {
      ((_.version = m), (y.depsTail = _));
      return;
    }
    const w = g.subsTail;
    if (w !== void 0 && w.version === m && w.sub === y) return;
    const A =
      (y.depsTail =
      g.subsTail =
        { version: m, dep: g, sub: y, prevDep: b, nextDep: _, prevSub: w, nextSub: void 0 });
    (_ !== void 0 && (_.prevDep = A),
      b !== void 0 ? (b.nextDep = A) : (y.deps = A),
      w !== void 0 ? (w.nextSub = A) : (g.subs = A));
  }
  function l(g, y = g.sub) {
    const m = g.dep,
      b = g.prevDep,
      _ = g.nextDep,
      w = g.nextSub,
      A = g.prevSub;
    return (
      _ !== void 0 ? (_.prevDep = b) : (y.depsTail = b),
      b !== void 0 ? (b.nextDep = _) : (y.deps = _),
      w !== void 0 ? (w.prevSub = A) : (m.subsTail = A),
      A !== void 0 ? (A.nextSub = w) : (m.subs = w) === void 0 && s(m),
      _
    );
  }
  function u(g) {
    let y = g.nextSub,
      m;
    e: do {
      const b = g.sub;
      let _ = b.flags;
      if (
        (_ & 60
          ? _ & 12
            ? _ & 4
              ? !(_ & 48) && p(g, b)
                ? ((b.flags = _ | 40), (_ &= 1))
                : (_ = 0)
              : (b.flags = (_ & -9) | 32)
            : (_ = 0)
          : (b.flags = _ | 32),
        _ & 2 && t(b),
        _ & 1)
      ) {
        const w = b.subs;
        if (w !== void 0) {
          const A = (g = w).nextSub;
          A !== void 0 && ((m = { value: y, prev: m }), (y = A));
          continue;
        }
      }
      if ((g = y) !== void 0) {
        y = g.nextSub;
        continue;
      }
      for (; m !== void 0; )
        if (((g = m.value), (m = m.prev), g !== void 0)) {
          y = g.nextSub;
          continue e;
        }
      break;
    } while (!0);
  }
  function c(g, y) {
    let m,
      b = 0,
      _ = !1;
    e: do {
      const w = g.dep,
        A = w.flags;
      if (y.flags & 16) _ = !0;
      else if ((A & 17) === 17) {
        if (e(w)) {
          const E = w.subs;
          (E.nextSub !== void 0 && d(E), (_ = !0));
        }
      } else if ((A & 33) === 33) {
        ((g.nextSub !== void 0 || g.prevSub !== void 0) && (m = { value: g, prev: m }),
          (g = w.deps),
          (y = w),
          ++b);
        continue;
      }
      if (!_) {
        const E = g.nextDep;
        if (E !== void 0) {
          g = E;
          continue;
        }
      }
      for (; b--; ) {
        const E = y.subs,
          O = E.nextSub !== void 0;
        if ((O ? ((g = m.value), (m = m.prev)) : (g = E), _)) {
          if (e(y)) {
            (O && d(E), (y = g.sub));
            continue;
          }
          _ = !1;
        } else y.flags &= -33;
        y = g.sub;
        const M = g.nextDep;
        if (M !== void 0) {
          g = M;
          continue e;
        }
      }
      return _;
    } while (!0);
  }
  function d(g) {
    do {
      const y = g.sub,
        m = y.flags;
      (m & 48) === 32 && ((y.flags = m | 16), (m & 6) === 2 && t(y));
    } while ((g = g.nextSub) !== void 0);
  }
  function p(g, y) {
    let m = y.depsTail;
    for (; m !== void 0; ) {
      if (m === g) return !0;
      m = m.prevDep;
    }
    return !1;
  }
}
function kA(e, t, s) {
  const a = typeof e == "object",
    l = a ? e : void 0;
  return {
    next: (a ? e.next : e)?.bind(l),
    error: (a ? e.error : t)?.bind(l),
    complete: (a ? e.complete : s)?.bind(l),
  };
}
const gf = [];
let Il = 0;
const {
  link: Hy,
  unlink: jA,
  propagate: MA,
  checkDirty: P0,
  shallowPropagate: Iy,
} = xA({
  update(e) {
    return e._update();
  },
  notify(e) {
    ((gf[mf++] = e), (e.flags &= ~$e.Watching));
  },
  unwatched(e) {
    e.depsTail !== void 0 && ((e.depsTail = void 0), (e.flags = $e.Mutable | $e.Dirty), Xl(e));
  },
});
let Ol = 0,
  mf = 0,
  yn,
  yf = 0;
function z0(e) {
  try {
    (++yf, e());
  } finally {
    --yf || B0();
  }
}
function Xl(e) {
  const t = e.depsTail;
  let s = t !== void 0 ? t.nextDep : e.deps;
  for (; s !== void 0; ) s = jA(s, e);
}
function B0() {
  if (!(yf > 0)) {
    for (; Ol < mf; ) {
      const e = gf[Ol];
      ((gf[Ol++] = void 0), e.notify());
    }
    ((Ol = 0), (mf = 0));
  }
}
function qy(e, t) {
  const s = typeof e == "function",
    a = e,
    l = {
      _snapshot: s ? void 0 : e,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: s ? $e.None : $e.Mutable,
      get() {
        return (yn !== void 0 && Hy(l, yn, Il), l._snapshot);
      },
      subscribe(u) {
        const c = kA(u),
          d = { current: !1 },
          p = DA(() => {
            (l.get(), d.current ? c.next?.(l._snapshot) : (d.current = !0));
          });
        return {
          unsubscribe: () => {
            p.stop();
          },
        };
      },
      _update(u) {
        const c = yn,
          d = t?.compare ?? Object.is;
        if (s) ((yn = l), ++Il, (l.depsTail = void 0));
        else if (u === void 0) return !1;
        s && (l.flags = $e.Mutable | $e.RecursedCheck);
        try {
          const p = l._snapshot,
            g = typeof u == "function" ? u(p) : u === void 0 && s ? a(p) : u;
          return p === void 0 || !d(p, g) ? ((l._snapshot = g), !0) : !1;
        } finally {
          ((yn = c), s && (l.flags &= ~$e.RecursedCheck), Xl(l));
        }
      },
    };
  return (
    s
      ? ((l.flags = $e.Mutable | $e.Dirty),
        (l.get = function () {
          const u = l.flags;
          if (u & $e.Dirty || (u & $e.Pending && P0(l.deps, l))) {
            if (l._update()) {
              const c = l.subs;
              c !== void 0 && Iy(c);
            }
          } else u & $e.Pending && (l.flags = u & ~$e.Pending);
          return (yn !== void 0 && Hy(l, yn, Il), l._snapshot);
        }))
      : (l.set = function (u) {
          if (l._update(u)) {
            const c = l.subs;
            c !== void 0 && (MA(c), Iy(c), B0());
          }
        }),
    l
  );
}
function DA(e) {
  const t = () => {
      const a = yn;
      ((yn = s), ++Il, (s.depsTail = void 0), (s.flags = $e.Watching | $e.RecursedCheck));
      try {
        return e();
      } finally {
        ((yn = a), (s.flags &= ~$e.RecursedCheck), Xl(s));
      }
    },
    s = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: $e.Watching | $e.RecursedCheck,
      notify() {
        const a = this.flags;
        a & $e.Dirty || (a & $e.Pending && P0(this.deps, this)) ? t() : (this.flags = $e.Watching);
      },
      stop() {
        ((this.flags = $e.None), (this.depsTail = void 0), Xl(this));
      },
    };
  return (t(), s);
}
var Qh = { exports: {} },
  Yh = {},
  Jh = { exports: {} },
  Xh = {};
var $y;
function UA() {
  if ($y) return Xh;
  $y = 1;
  var e = Wa();
  function t(m, b) {
    return (m === b && (m !== 0 || 1 / m === 1 / b)) || (m !== m && b !== b);
  }
  var s = typeof Object.is == "function" ? Object.is : t,
    a = e.useState,
    l = e.useEffect,
    u = e.useLayoutEffect,
    c = e.useDebugValue;
  function d(m, b) {
    var _ = b(),
      w = a({ inst: { value: _, getSnapshot: b } }),
      A = w[0].inst,
      E = w[1];
    return (
      u(
        function () {
          ((A.value = _), (A.getSnapshot = b), p(A) && E({ inst: A }));
        },
        [m, _, b],
      ),
      l(
        function () {
          return (
            p(A) && E({ inst: A }),
            m(function () {
              p(A) && E({ inst: A });
            })
          );
        },
        [m],
      ),
      c(_),
      _
    );
  }
  function p(m) {
    var b = m.getSnapshot;
    m = m.value;
    try {
      var _ = b();
      return !s(m, _);
    } catch {
      return !0;
    }
  }
  function g(m, b) {
    return b();
  }
  var y =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? g
      : d;
  return (
    (Xh.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y),
    Xh
  );
}
var Gy;
function LA() {
  return (Gy || ((Gy = 1), (Jh.exports = UA())), Jh.exports);
}
var Vy;
function NA() {
  if (Vy) return Yh;
  Vy = 1;
  var e = Wa(),
    t = LA();
  function s(g, y) {
    return (g === y && (g !== 0 || 1 / g === 1 / y)) || (g !== g && y !== y);
  }
  var a = typeof Object.is == "function" ? Object.is : s,
    l = t.useSyncExternalStore,
    u = e.useRef,
    c = e.useEffect,
    d = e.useMemo,
    p = e.useDebugValue;
  return (
    (Yh.useSyncExternalStoreWithSelector = function (g, y, m, b, _) {
      var w = u(null);
      if (w.current === null) {
        var A = { hasValue: !1, value: null };
        w.current = A;
      } else A = w.current;
      w = d(
        function () {
          function O(F) {
            if (!M) {
              if (((M = !0), (j = F), (F = b(F)), _ !== void 0 && A.hasValue)) {
                var B = A.value;
                if (_(B, F)) return (L = B);
              }
              return (L = F);
            }
            if (((B = L), a(j, F))) return B;
            var G = b(F);
            return _ !== void 0 && _(B, G) ? ((j = F), B) : ((j = F), (L = G));
          }
          var M = !1,
            j,
            L,
            Q = m === void 0 ? null : m;
          return [
            function () {
              return O(y());
            },
            Q === null
              ? void 0
              : function () {
                  return O(Q());
                },
          ];
        },
        [y, m, b, _],
      );
      var E = l(g, w[0], w[1]);
      return (
        c(
          function () {
            ((A.hasValue = !0), (A.value = E));
          },
          [E],
        ),
        p(E),
        E
      );
    }),
    Yh
  );
}
var Ky;
function PA() {
  return (Ky || ((Ky = 1), (Qh.exports = NA())), Qh.exports);
}
var zA = PA();
function BA(e, t) {
  return e === t;
}
function Xe(e, t, s = BA) {
  const a = W.useCallback(
      (c) => {
        if (!e) return () => {};
        const { unsubscribe: d } = e.subscribe(c);
        return d;
      },
      [e],
    ),
    l = W.useCallback(() => e?.get(), [e]);
  return zA.useSyncExternalStoreWithSelector(a, l, l, t, s);
}
var HA = { get: () => {}, subscribe: () => ({ unsubscribe: () => {} }) };
function Ss(e) {
  const t = vt(),
    s = W.useContext(e.from ? CA : gu),
    a = e.from ?? s,
    l = a ? (e.from ? t.stores.getRouteMatchStore(a) : t.stores.matchStores.get(a)) : void 0,
    u = W.useRef(void 0);
  return Xe(l ?? HA, (c) => {
    if (((e.shouldThrow ?? !0) && !c && Ut(), c === void 0)) return;
    const d = e.select ? e.select(c) : c;
    if (e.structuralSharing ?? t.options.defaultStructuralSharing) {
      const p = kr(u.current, d);
      return ((u.current = p), p);
    }
    return d;
  });
}
function H0(e) {
  return Ss({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function I0(e) {
  const { select: t, ...s } = e;
  return Ss({ ...s, select: (a) => (t ? t(a.loaderDeps) : a.loaderDeps) });
}
function q0(e) {
  return Ss({
    from: e.from,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    strict: e.strict,
    select: (t) => {
      const s = e.strict === !1 ? t.params : t._strictParams;
      return e.select ? e.select(s) : s;
    },
  });
}
function $0(e) {
  return Ss({
    from: e.from,
    strict: e.strict,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function Kf(e) {
  const t = vt();
  return W.useCallback((s) => t.navigate({ ...s, from: s.from ?? e?.from }), [e?.from, t]);
}
function G0(e) {
  return Ss({ ...e, select: (t) => (e.select ? e.select(t.context) : t.context) });
}
var IA = Iv();
function qA(e, t) {
  const s = vt(),
    a = SA(t),
    {
      activeProps: l,
      inactiveProps: u,
      activeOptions: c,
      to: d,
      preload: p,
      preloadDelay: g,
      preloadIntentProximity: y,
      hashScrollIntoView: m,
      replace: b,
      startTransition: _,
      resetScroll: w,
      viewTransition: A,
      children: E,
      target: O,
      disabled: M,
      style: j,
      className: L,
      onClick: Q,
      onBlur: F,
      onFocus: B,
      onMouseEnter: G,
      onMouseLeave: Y,
      onTouchStart: ae,
      ignoreBlocker: re,
      params: de,
      search: Se,
      hash: Fe,
      state: Be,
      mask: H,
      reloadDocument: J,
      unsafeRelative: le,
      from: Ae,
      _fromLocation: Ce,
      ...k
    } = e,
    V = Vf(),
    X = W.useMemo(
      () => e,
      [
        s,
        e.from,
        e._fromLocation,
        e.hash,
        e.to,
        e.search,
        e.params,
        e.state,
        e.mask,
        e.unsafeRelative,
      ],
    ),
    ee = Xe(
      s.stores.location,
      (Pe) => Pe,
      (Pe, ht) => Pe.href === ht.href,
    ),
    ie = W.useMemo(() => {
      const Pe = { _fromLocation: ee, ...X };
      return s.buildLocation(Pe);
    }, [s, ee, X]),
    ge = ie.maskedLocation ? ie.maskedLocation.publicHref : ie.publicHref,
    we = ie.maskedLocation ? ie.maskedLocation.external : ie.external,
    Qe = W.useMemo(() => QA(ge, we, s.history, M), [M, we, ge, s.history]),
    Ue = W.useMemo(() => {
      if (Qe?.external) return Gl(Qe.href, s.protocolAllowlist) ? void 0 : Qe.href;
      if (!YA(d) && !(typeof d != "string" || d.indexOf(":") === -1))
        try {
          return (new URL(d), Gl(d, s.protocolAllowlist) ? void 0 : d);
        } catch {}
    }, [d, Qe, s.protocolAllowlist]),
    wn = W.useMemo(() => {
      if (Ue) return !1;
      if (c?.exact) {
        if (!Dw(ee.pathname, ie.pathname, s.basepath)) return !1;
      } else {
        const Pe = Vl(ee.pathname, s.basepath),
          ht = Vl(ie.pathname, s.basepath);
        if (!(Pe.startsWith(ht) && (Pe.length === ht.length || Pe[ht.length] === "/"))) return !1;
      }
      return (c?.includeSearch ?? !0) &&
        !Mt(ee.search, ie.search, { partial: !c?.exact, ignoreUndefined: !c?.explicitUndefined })
        ? !1
        : c?.includeHash
          ? V && ee.hash === ie.hash
          : !0;
    }, [
      c?.exact,
      c?.explicitUndefined,
      c?.includeHash,
      c?.includeSearch,
      ee,
      Ue,
      V,
      ie.hash,
      ie.pathname,
      ie.search,
      s.basepath,
    ]),
    En = wn ? (xr(l, {}) ?? $A) : Zh,
    Zn = wn ? Zh : (xr(u, {}) ?? Zh),
    Ai = [L, En.className, Zn.className].filter(Boolean).join(" "),
    hn = (j || En.style || Zn.style) && { ...j, ...En.style, ...Zn.style },
    [Oi, ws] = W.useState(!1),
    so = W.useRef(!1),
    Tn = e.reloadDocument || Ue ? !1 : (p ?? s.options.defaultPreload),
    $r = g ?? s.options.defaultPreloadDelay ?? 0,
    rn = W.useCallback(() => {
      s.preloadRoute({ ...X, _builtLocation: ie }).catch((Pe) => {
        (console.warn(Pe), console.warn(gE));
      });
    }, [s, X, ie]);
  (_A(
    a,
    W.useCallback(
      (Pe) => {
        Pe?.isIntersecting && rn();
      },
      [rn],
    ),
    FA,
    { disabled: !!M || Tn !== "viewport" },
  ),
    W.useEffect(() => {
      so.current || (!M && Tn === "render" && (rn(), (so.current = !0)));
    }, [M, rn, Tn]));
  const Ci = (Pe) => {
    const ht = Pe.currentTarget.getAttribute("target"),
      fn = O !== void 0 ? O : ht;
    if (!M && !JA(Pe) && !Pe.defaultPrevented && (!fn || fn === "_self") && Pe.button === 0) {
      (Pe.preventDefault(),
        IA.flushSync(() => {
          ws(!0);
        }));
      const Es = s.subscribe("onResolved", () => {
        (Es(), ws(!1));
      });
      s.navigate({
        ...X,
        replace: b,
        resetScroll: w,
        hashScrollIntoView: m,
        startTransition: _,
        viewTransition: A,
        ignoreBlocker: re,
      });
    }
  };
  if (Ue)
    return {
      ...k,
      ref: a,
      href: Ue,
      ...(E && { children: E }),
      ...(O && { target: O }),
      ...(M && { disabled: M }),
      ...(j && { style: j }),
      ...(L && { className: L }),
      ...(Q && { onClick: Q }),
      ...(F && { onBlur: F }),
      ...(B && { onFocus: B }),
      ...(G && { onMouseEnter: G }),
      ...(Y && { onMouseLeave: Y }),
      ...(ae && { onTouchStart: ae }),
    };
  const io = (Pe) => {
      if (M || Tn !== "intent") return;
      if (!$r) {
        rn();
        return;
      }
      const ht = Pe.currentTarget;
      if (Ca.has(ht)) return;
      const fn = setTimeout(() => {
        (Ca.delete(ht), rn());
      }, $r);
      Ca.set(ht, fn);
    },
    Su = (Pe) => {
      M || Tn !== "intent" || rn();
    },
    bt = (Pe) => {
      if (M || !Tn || !$r) return;
      const ht = Pe.currentTarget,
        fn = Ca.get(ht);
      fn && (clearTimeout(fn), Ca.delete(ht));
    };
  return {
    ...k,
    ...En,
    ...Zn,
    href: Qe?.href,
    ref: a,
    onClick: li([Q, Ci]),
    onBlur: li([F, bt]),
    onFocus: li([B, io]),
    onMouseEnter: li([G, io]),
    onMouseLeave: li([Y, bt]),
    onTouchStart: li([ae, Su]),
    disabled: !!M,
    target: O,
    ...(hn && { style: hn }),
    ...(Ai && { className: Ai }),
    ...(M && GA),
    ...(wn && VA),
    ...(V && Oi && KA),
  };
}
var Zh = {},
  $A = { className: "active" },
  GA = { role: "link", "aria-disabled": !0 },
  VA = { "data-status": "active", "aria-current": "page" },
  KA = { "data-transitioning": "transitioning" },
  Ca = new WeakMap(),
  FA = { rootMargin: "100px" },
  li = (e) => (t) => {
    for (const s of e)
      if (s) {
        if (t.defaultPrevented) return;
        s(t);
      }
  };
function QA(e, t, s, a) {
  if (!a) return t ? { href: e, external: !0 } : { href: s.createHref(e) || "/", external: !1 };
}
function YA(e) {
  if (typeof e != "string") return !1;
  const t = e.charCodeAt(0);
  return t === 47 ? e.charCodeAt(1) !== 47 : t === 46;
}
var Zl = W.forwardRef((e, t) => {
  const { _asChild: s, ...a } = e,
    { type: l, ...u } = qA(a, t),
    c =
      typeof a.children == "function"
        ? a.children({ isActive: u["data-status"] === "active" })
        : a.children;
  if (!s) {
    const { disabled: d, ...p } = u;
    return W.createElement("a", p, c);
  }
  return W.createElement(s, u, c);
});
function JA(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var XA = class extends e0 {
  constructor(t) {
    (super(t),
      (this.useMatch = (s) =>
        Ss({ select: s?.select, from: this.id, structuralSharing: s?.structuralSharing })),
      (this.useRouteContext = (s) => G0({ ...s, from: this.id })),
      (this.useSearch = (s) =>
        $0({ select: s?.select, structuralSharing: s?.structuralSharing, from: this.id })),
      (this.useParams = (s) =>
        q0({ select: s?.select, structuralSharing: s?.structuralSharing, from: this.id })),
      (this.useLoaderDeps = (s) => I0({ ...s, from: this.id })),
      (this.useLoaderData = (s) => H0({ ...s, from: this.id })),
      (this.useNavigate = () => Kf({ from: this.fullPath })),
      (this.Link = Pa.forwardRef((s, a) => $.jsx(Zl, { ref: a, from: this.fullPath, ...s }))));
  }
};
function ZA(e) {
  return new XA(e);
}
function WA() {
  return (e) => t1(e);
}
var e1 = class extends bE {
  constructor(e) {
    (super(e),
      (this.useMatch = (t) =>
        Ss({ select: t?.select, from: this.id, structuralSharing: t?.structuralSharing })),
      (this.useRouteContext = (t) => G0({ ...t, from: this.id })),
      (this.useSearch = (t) =>
        $0({ select: t?.select, structuralSharing: t?.structuralSharing, from: this.id })),
      (this.useParams = (t) =>
        q0({ select: t?.select, structuralSharing: t?.structuralSharing, from: this.id })),
      (this.useLoaderDeps = (t) => I0({ ...t, from: this.id })),
      (this.useLoaderData = (t) => H0({ ...t, from: this.id })),
      (this.useNavigate = () => Kf({ from: this.fullPath })),
      (this.Link = Pa.forwardRef((t, s) => $.jsx(Zl, { ref: s, from: this.fullPath, ...t }))));
  }
};
function t1(e) {
  return new e1(e);
}
function Hr(e) {
  return new n1(e, { silent: !0 }).createRoute;
}
var n1 = class {
  constructor(e, t) {
    ((this.path = e),
      (this.createRoute = (s) => {
        const a = ZA(s);
        return ((a.isRoot = !1), a);
      }),
      (this.silent = t?.silent));
  }
};
function Ir(e, t) {
  let s, a, l, u;
  const c = () => (
      s ||
        (s = e()
          .then((p) => {
            ((s = void 0), (a = p[t]));
          })
          .catch((p) => {
            if (
              ((l = p),
              pw(l) && l instanceof Error && typeof window < "u" && typeof sessionStorage < "u")
            ) {
              const g = `tanstack_router_reload:${l.message}`;
              sessionStorage.getItem(g) || (sessionStorage.setItem(g, "1"), (u = !0));
            }
          })),
      s
    ),
    d = function (g) {
      if (u) throw (window.location.reload(), new Promise(() => {}));
      if (l) throw l;
      if (!a)
        if (Jl) Jl(c());
        else throw c();
      return W.createElement(a, g);
    };
  return ((d.preload = c), d);
}
function r1(e) {
  const t = vt(),
    s = `not-found-${Xe(t.stores.location, (a) => a.pathname)}-${Xe(t.stores.status, (a) => a)}`;
  return $.jsx($f, {
    getResetKey: () => s,
    onCatch: (a, l) => {
      if (ct(a)) e.onCatch?.(a, l);
      else throw a;
    },
    errorComponent: ({ error: a }) => {
      if (ct(a)) return e.fallback?.(a);
      throw a;
    },
    children: e.children,
  });
}
function s1() {
  return $.jsx("p", { children: "Not Found" });
}
function pi(e) {
  return $.jsx($.Fragment, { children: e.children });
}
function V0(e, t, s) {
  return t.options.notFoundComponent
    ? $.jsx(t.options.notFoundComponent, { ...s })
    : e.options.defaultNotFoundComponent
      ? $.jsx(e.options.defaultNotFoundComponent, { ...s })
      : $.jsx(s1, {});
}
function i1(e) {
  return null;
}
function a1() {
  return (i1(vt()), null);
}
var K0 = W.memo(function ({ matchId: t }) {
  const s = vt(),
    a = s.stores.matchStores.get(t);
  a || Ut();
  const l = Xe(s.stores.loadedAt, (c) => c),
    u = Xe(a, (c) => c);
  return $.jsx(o1, {
    router: s,
    matchId: t,
    resetKey: l,
    matchState: W.useMemo(() => {
      const c = u.routeId,
        d = s.routesById[c].parentRoute?.id;
      return { routeId: c, ssr: u.ssr, _displayPending: u._displayPending, parentRouteId: d };
    }, [u._displayPending, u.routeId, u.ssr, s.routesById]),
  });
});
function o1({ router: e, matchId: t, resetKey: s, matchState: a }) {
  const l = e.routesById[a.routeId],
    u = l.options.pendingComponent ?? e.options.defaultPendingComponent,
    c = u ? $.jsx(u, {}) : null,
    d = l.options.errorComponent ?? e.options.defaultErrorComponent,
    p = l.options.onCatch ?? e.options.defaultOnCatch,
    g = l.isRoot
      ? (l.options.notFoundComponent ?? e.options.notFoundRoute?.options.component)
      : l.options.notFoundComponent,
    y = a.ssr === !1 || a.ssr === "data-only",
    m =
      (!l.isRoot || l.options.wrapInSuspense || y) &&
      (l.options.wrapInSuspense ?? u ?? (l.options.errorComponent?.preload || y))
        ? W.Suspense
        : pi,
    b = d ? $f : pi,
    _ = g ? r1 : pi;
  return $.jsxs(l.isRoot ? (l.options.shellComponent ?? pi) : pi, {
    children: [
      $.jsx(gu.Provider, {
        value: t,
        children: $.jsx(m, {
          fallback: c,
          children: $.jsx(b, {
            getResetKey: () => s,
            errorComponent: d || Gf,
            onCatch: (w, A) => {
              if (ct(w)) throw ((w.routeId ??= a.routeId), w);
              p?.(w, A);
            },
            children: $.jsx(_, {
              fallback: (w) => {
                if (
                  ((w.routeId ??= a.routeId),
                  !g || (w.routeId && w.routeId !== a.routeId) || (!w.routeId && !l.isRoot))
                )
                  throw w;
                return W.createElement(g, w);
              },
              children:
                y || a._displayPending
                  ? $.jsx(AA, { fallback: c, children: $.jsx(Fy, { matchId: t }) })
                  : $.jsx(Fy, { matchId: t }),
            }),
          }),
        }),
      }),
      a.parentRouteId === ms
        ? $.jsxs($.Fragment, {
            children: [
              $.jsx(l1, { resetKey: s }),
              e.options.scrollRestoration && $v ? $.jsx(a1, {}) : null,
            ],
          })
        : null,
    ],
  });
}
function l1({ resetKey: e }) {
  const t = vt(),
    s = W.useRef(void 0);
  return (
    ka(() => {
      const a = t.latestLocation.href;
      (s.current === void 0 || s.current !== a) &&
        (t.emit({
          type: "onRendered",
          ..._i(t.stores.location.get(), t.stores.resolvedLocation.get()),
        }),
        (s.current = a));
    }, [t.latestLocation.state.__TSR_key, e, t]),
    null
  );
}
var Fy = W.memo(function ({ matchId: t }) {
    const s = vt(),
      a = (y, m) => s.getMatch(y.id)?._nonReactive[m] ?? y._nonReactive[m],
      l = s.stores.matchStores.get(t);
    l || Ut();
    const u = Xe(l, (y) => y),
      c = u.routeId,
      d = s.routesById[c],
      p = W.useMemo(() => {
        const y = (s.routesById[c].options.remountDeps ?? s.options.defaultRemountDeps)?.({
          routeId: c,
          loaderDeps: u.loaderDeps,
          params: u._strictParams,
          search: u._strictSearch,
        });
        return y ? JSON.stringify(y) : void 0;
      }, [
        c,
        u.loaderDeps,
        u._strictParams,
        u._strictSearch,
        s.options.defaultRemountDeps,
        s.routesById,
      ]),
      g = W.useMemo(() => {
        const y = d.options.component ?? s.options.defaultComponent;
        return y ? $.jsx(y, {}, p) : $.jsx(F0, {});
      }, [p, d.options.component, s.options.defaultComponent]);
    if (u._displayPending) throw a(u, "displayPendingPromise");
    if (u._forcePending) throw a(u, "minPendingPromise");
    if (u.status === "pending") {
      const y = d.options.pendingMinMs ?? s.options.defaultPendingMinMs;
      if (y) {
        const m = s.getMatch(u.id);
        if (m && !m._nonReactive.minPendingPromise) {
          const b = vs();
          ((m._nonReactive.minPendingPromise = b),
            setTimeout(() => {
              (b.resolve(), (m._nonReactive.minPendingPromise = void 0));
            }, y));
        }
      }
      throw a(u, "loadPromise");
    }
    if (u.status === "notFound") return (ct(u.error) || Ut(), V0(s, d, u.error));
    if (u.status === "redirected") throw (Dt(u.error) || Ut(), a(u, "loadPromise"));
    if (u.status === "error") throw u.error;
    return g;
  }),
  F0 = W.memo(function () {
    const t = vt(),
      s = W.useContext(gu);
    let a,
      l = !1,
      u;
    {
      const g = s ? t.stores.matchStores.get(s) : void 0;
      (([a, l] = Xe(g, (y) => [y?.routeId, y?.globalNotFound ?? !1])),
        (u = Xe(t.stores.matchesId, (y) => y[y.findIndex((m) => m === s) + 1])));
    }
    const c = a ? t.routesById[a] : void 0,
      d = t.options.defaultPendingComponent ? $.jsx(t.options.defaultPendingComponent, {}) : null;
    if (l) return (c || Ut(), V0(t, c, void 0));
    if (!u) return null;
    const p = $.jsx(K0, { matchId: u });
    return a === ms ? $.jsx(W.Suspense, { fallback: d, children: p }) : p;
  });
function u1() {
  const e = vt(),
    t = W.useRef({ router: e, mounted: !1 }),
    [s, a] = W.useState(!1),
    l = Xe(e.stores.isLoading, (m) => m),
    u = Xe(e.stores.hasPending, (m) => m),
    c = Fh(l),
    d = l || s || u,
    p = Fh(d),
    g = l || u,
    y = Fh(g);
  return (
    (e.startTransition = (m) => {
      (a(!0),
        W.startTransition(() => {
          (m(), a(!1));
        }));
    }),
    W.useEffect(() => {
      const m = e.history.subscribe(e.load),
        b = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        Dr(e.latestLocation.publicHref) !== Dr(b.publicHref) &&
          e.commitLocation({ ...b, replace: !0 }),
        () => {
          m();
        }
      );
    }, [e, e.history]),
    ka(() => {
      if ((typeof window < "u" && e.ssr) || (t.current.router === e && t.current.mounted)) return;
      ((t.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load();
          } catch (b) {
            console.error(b);
          }
        })());
    }, [e]),
    ka(() => {
      c &&
        !l &&
        e.emit({ type: "onLoad", ..._i(e.stores.location.get(), e.stores.resolvedLocation.get()) });
    }, [c, e, l]),
    ka(() => {
      y &&
        !g &&
        e.emit({
          type: "onBeforeRouteMount",
          ..._i(e.stores.location.get(), e.stores.resolvedLocation.get()),
        });
    }, [g, y, e]),
    ka(() => {
      if (p && !d) {
        const m = _i(e.stores.location.get(), e.stores.resolvedLocation.get());
        (e.emit({ type: "onResolved", ...m }),
          z0(() => {
            (e.stores.status.set("idle"), e.stores.resolvedLocation.set(e.stores.location.get()));
          }),
          m.hrefChanged && _E(e));
      }
    }, [d, p, e]),
    null
  );
}
function c1() {
  const e = vt(),
    t = e.routesById[ms].options.pendingComponent ?? e.options.defaultPendingComponent,
    s = t ? $.jsx(t, {}) : null,
    a = $.jsxs(typeof document < "u" && e.ssr ? pi : W.Suspense, {
      fallback: s,
      children: [$.jsx(u1, {}), $.jsx(h1, {})],
    });
  return e.options.InnerWrap ? $.jsx(e.options.InnerWrap, { children: a }) : a;
}
function h1() {
  const e = vt(),
    t = Xe(e.stores.firstId, (l) => l),
    s = Xe(e.stores.loadedAt, (l) => l),
    a = t ? $.jsx(K0, { matchId: t }) : null;
  return $.jsx(gu.Provider, {
    value: t,
    children: e.options.disableGlobalCatchBoundary
      ? a
      : $.jsx($f, { getResetKey: () => s, errorComponent: Gf, onCatch: void 0, children: a }),
  });
}
var f1 = (e) => ({ createMutableStore: qy, createReadonlyStore: qy, batch: z0 }),
  d1 = (e) => new p1(e),
  p1 = class extends oE {
    constructor(e) {
      super(e, f1);
    }
  };
function g1({ router: e, children: t, ...s }) {
  Object.keys(s).length > 0 &&
    e.update({ ...e.options, ...s, context: { ...e.options.context, ...s.context } });
  const a = $.jsx(N0.Provider, { value: e, children: t });
  return e.options.Wrap ? $.jsx(e.options.Wrap, { children: a }) : a;
}
function m1({ router: e, ...t }) {
  return $.jsx(g1, { router: e, ...t, children: $.jsx(c1, {}) });
}
function Q0(e) {
  const t = vt({ warn: e?.router === void 0 }),
    s = e?.router || t,
    a = W.useRef(void 0);
  return Xe(s.stores.__store, (l) => {
    if (e?.select) {
      if (e.structuralSharing ?? s.options.defaultStructuralSharing) {
        const u = kr(a.current, e.select(l));
        return ((a.current = u), u);
      }
      return e.select(l);
    }
    return l;
  });
}
function Y0(e) {
  const { attrs: t, children: s, nonce: a } = e;
  switch (e.tag) {
    case "title":
      return $.jsx("title", { ...t, suppressHydrationWarning: !0, children: s });
    case "meta":
      return $.jsx("meta", { ...t, suppressHydrationWarning: !0 });
    case "link":
      return $.jsx("link", {
        ...t,
        precedence: t?.precedence ?? (t?.rel === "stylesheet" ? "default" : void 0),
        nonce: a,
        suppressHydrationWarning: !0,
      });
    case "style":
      return (
        e.inlineCss,
        $.jsx("style", { ...t, dangerouslySetInnerHTML: { __html: s }, nonce: a })
      );
    case "script":
      return $.jsx(y1, { attrs: t, children: s });
    default:
      return null;
  }
}
function y1({ attrs: e, children: t }) {
  vt();
  const s = Vf(),
    a =
      typeof e?.type == "string" &&
      e.type !== "" &&
      e.type !== "text/javascript" &&
      e.type !== "module";
  if (
    (W.useEffect(() => {
      if (!a) {
        if (e?.src) {
          const l = (() => {
            try {
              const c = document.baseURI || window.location.href;
              return new URL(e.src, c).href;
            } catch {
              return e.src;
            }
          })();
          if (Array.from(document.querySelectorAll("script[src]")).find((c) => c.src === l)) return;
          const u = document.createElement("script");
          for (const [c, d] of Object.entries(e))
            c !== "suppressHydrationWarning" &&
              d !== void 0 &&
              d !== !1 &&
              u.setAttribute(c, typeof d == "boolean" ? "" : String(d));
          return (
            document.head.appendChild(u),
            () => {
              u.parentNode && u.parentNode.removeChild(u);
            }
          );
        }
        if (typeof t == "string") {
          const l = typeof e?.type == "string" ? e.type : "text/javascript",
            u = typeof e?.nonce == "string" ? e.nonce : void 0;
          if (
            Array.from(document.querySelectorAll("script:not([src])")).find((d) => {
              if (!(d instanceof HTMLScriptElement)) return !1;
              const p = d.getAttribute("type") ?? "text/javascript",
                g = d.getAttribute("nonce") ?? void 0;
              return d.textContent === t && p === l && g === u;
            })
          )
            return;
          const c = document.createElement("script");
          if (((c.textContent = t), e))
            for (const [d, p] of Object.entries(e))
              d !== "suppressHydrationWarning" &&
                p !== void 0 &&
                p !== !1 &&
                c.setAttribute(d, typeof p == "boolean" ? "" : String(p));
          return (
            document.head.appendChild(c),
            () => {
              c.parentNode && c.parentNode.removeChild(c);
            }
          );
        }
      }
    }, [e, t, a]),
    a && typeof t == "string")
  )
    return $.jsx("script", {
      ...e,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: t },
    });
  if (!s) {
    if (e?.src) return $.jsx("script", { ...e, suppressHydrationWarning: !0 });
    if (typeof t == "string")
      return $.jsx("script", {
        ...e,
        dangerouslySetInnerHTML: { __html: t },
        suppressHydrationWarning: !0,
      });
  }
  return null;
}
var v1 = (e) => {
  const t = vt(),
    s = t.options.ssr?.nonce,
    a = Xe(t.stores.matches, (g) => g.map((y) => y.meta).filter(Boolean), Mt),
    l = W.useMemo(() => {
      const g = [],
        y = {};
      let m;
      for (let b = a.length - 1; b >= 0; b--) {
        const _ = a[b];
        for (let w = _.length - 1; w >= 0; w--) {
          const A = _[w];
          if (A)
            if (A.title) m || (m = { tag: "title", children: A.title });
            else if ("script:ld+json" in A)
              try {
                const E = JSON.stringify(A["script:ld+json"]);
                g.push({ tag: "script", attrs: { type: "application/ld+json" }, children: bw(E) });
              } catch {}
            else {
              const E = A.name ?? A.property;
              if (E) {
                if (y[E]) continue;
                y[E] = !0;
              }
              g.push({ tag: "meta", attrs: { ...A, nonce: s } });
            }
        }
      }
      return (
        m && g.push(m),
        s && g.push({ tag: "meta", attrs: { property: "csp-nonce", content: s } }),
        g.reverse(),
        g
      );
    }, [a, s]),
    u = Xe(
      t.stores.matches,
      (g) => {
        const y = g
            .map((_) => _.links)
            .filter(Boolean)
            .flat(1)
            .map((_) => ({ tag: "link", attrs: { ..._, nonce: s } })),
          m = t.ssr?.manifest,
          b = g
            .map((_) => m?.routes[_.routeId]?.assets ?? [])
            .filter(Boolean)
            .flat(1)
            .flatMap((_) =>
              _.tag === "link"
                ? vE(m, _)
                  ? []
                  : [
                      {
                        tag: "link",
                        attrs: {
                          ..._.attrs,
                          crossOrigin: Ay(e, "stylesheet") ?? _.attrs?.crossOrigin,
                          suppressHydrationWarning: !0,
                          nonce: s,
                        },
                      },
                    ]
                : _.tag === "style"
                  ? [
                      {
                        tag: "style",
                        attrs: { ..._.attrs, nonce: s },
                        children: _.children,
                        ...(_.inlineCss ? { inlineCss: !0 } : {}),
                      },
                    ]
                  : [],
            );
        return [...y, ...b];
      },
      Mt,
    ),
    c = Xe(
      t.stores.matches,
      (g) => {
        const y = [];
        return (
          g
            .map((m) => t.looseRoutesById[m.routeId])
            .forEach((m) =>
              t.ssr?.manifest?.routes[m.id]?.preloads?.filter(Boolean).forEach((b) => {
                const _ = mE(b);
                y.push({
                  tag: "link",
                  attrs: {
                    rel: "modulepreload",
                    href: _.href,
                    crossOrigin: Ay(e, "modulepreload") ?? _.crossOrigin,
                    nonce: s,
                  },
                });
              }),
            ),
          y
        );
      },
      Mt,
    ),
    d = Xe(
      t.stores.matches,
      (g) =>
        g
          .map((y) => y.styles)
          .flat(1)
          .filter(Boolean)
          .map(({ children: y, ...m }) => ({
            tag: "style",
            attrs: { ...m, nonce: s },
            children: y,
          })),
      Mt,
    ),
    p = Xe(
      t.stores.matches,
      (g) =>
        g
          .map((y) => y.headScripts)
          .flat(1)
          .filter(Boolean)
          .map(({ children: y, ...m }) => ({
            tag: "script",
            attrs: { ...m, nonce: s },
            children: y,
          })),
      Mt,
    );
  return b1([...l, ...c, ...u, ...d, ...p], (g) => JSON.stringify(g));
};
function b1(e, t) {
  const s = new Set();
  return e.filter((a) => {
    const l = t(a);
    return s.has(l) ? !1 : (s.add(l), !0);
  });
}
function _1(e) {
  const t = v1(e.assetCrossOrigin),
    s = vt().options.ssr?.nonce;
  return $.jsx($.Fragment, {
    children: t.map((a) =>
      W.createElement(Y0, { ...a, key: `tsr-meta-${JSON.stringify(a)}`, nonce: s }),
    ),
  });
}
var S1 = () => {
  const e = vt(),
    t = e.options.ssr?.nonce,
    s = (u) => {
      const c = [],
        d = e.ssr?.manifest;
      return d
        ? (u
            .map((p) => e.looseRoutesById[p.routeId])
            .forEach((p) =>
              d.routes[p.id]?.assets
                ?.filter((g) => g.tag === "script")
                .forEach((g) => {
                  c.push({ tag: "script", attrs: { ...g.attrs, nonce: t }, children: g.children });
                }),
            ),
          c)
        : [];
    },
    a = (u) =>
      u
        .map((c) => c.scripts)
        .flat(1)
        .filter(Boolean)
        .map(({ children: c, ...d }) => ({
          tag: "script",
          attrs: { ...d, suppressHydrationWarning: !0, nonce: t },
          children: c,
        })),
    l = Xe(e.stores.matches, s, Mt);
  return w1(e, Xe(e.stores.matches, a, Mt), l);
};
function w1(e, t, s) {
  let a;
  e.serverSsr && (a = e.serverSsr.takeBufferedScripts());
  const l = [...t, ...s];
  return (
    a && l.unshift(a),
    $.jsx($.Fragment, {
      children: l.map((u, c) => W.createElement(Y0, { ...u, key: `tsr-scripts-${u.tag}-${c}` })),
    })
  );
}
var ds = (e, t) => {
  const s = { type: "request", ...(t || e) };
  return {
    options: s,
    middleware: (a) => ds({}, Object.assign(s, { middleware: a })),
    inputValidator: (a) => ds({}, Object.assign(s, { inputValidator: a })),
    client: (a) => ds({}, Object.assign(s, { client: a })),
    server: (a) => ds({}, Object.assign(s, { server: a })),
  };
};
function J0(e, t) {
  for (let s = 0, a = t.length; s < a; s++) {
    const l = t[s];
    e.has(l) || (e.add(l), l.extends && J0(e, l.extends));
  }
}
var E1 = (e) => ({
  getOptions: async () => {
    const t = await e();
    if (t.serializationAdapters) {
      const s = new Set();
      (J0(s, t.serializationAdapters), (t.serializationAdapters = Array.from(s)));
    }
    return t;
  },
  createMiddleware: ds,
});
function mu(e, t) {
  var s = {};
  for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, a = Object.getOwnPropertySymbols(e); l < a.length; l++)
      t.indexOf(a[l]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[l]) &&
        (s[a[l]] = e[a[l]]);
  return s;
}
function T1(e, t, s, a) {
  function l(u) {
    return u instanceof s
      ? u
      : new s(function (c) {
          c(u);
        });
  }
  return new (s || (s = Promise))(function (u, c) {
    function d(y) {
      try {
        g(a.next(y));
      } catch (m) {
        c(m);
      }
    }
    function p(y) {
      try {
        g(a.throw(y));
      } catch (m) {
        c(m);
      }
    }
    function g(y) {
      y.done ? u(y.value) : l(y.value).then(d, p);
    }
    g((a = a.apply(e, t || [])).next());
  });
}
const R1 = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t));
class Ff extends Error {
  constructor(t, s = "FunctionsError", a) {
    (super(t), (this.name = s), (this.context = a));
  }
  toJSON() {
    return { name: this.name, message: this.message, context: this.context };
  }
}
class A1 extends Ff {
  constructor(t) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", t);
  }
}
class Qy extends Ff {
  constructor(t) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", t);
  }
}
class Yy extends Ff {
  constructor(t) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t);
  }
}
var vf;
(function (e) {
  ((e.Any = "any"),
    (e.ApNortheast1 = "ap-northeast-1"),
    (e.ApNortheast2 = "ap-northeast-2"),
    (e.ApSouth1 = "ap-south-1"),
    (e.ApSoutheast1 = "ap-southeast-1"),
    (e.ApSoutheast2 = "ap-southeast-2"),
    (e.CaCentral1 = "ca-central-1"),
    (e.EuCentral1 = "eu-central-1"),
    (e.EuWest1 = "eu-west-1"),
    (e.EuWest2 = "eu-west-2"),
    (e.EuWest3 = "eu-west-3"),
    (e.SaEast1 = "sa-east-1"),
    (e.UsEast1 = "us-east-1"),
    (e.UsWest1 = "us-west-1"),
    (e.UsWest2 = "us-west-2"));
})(vf || (vf = {}));
class O1 {
  constructor(t, { headers: s = {}, customFetch: a, region: l = vf.Any } = {}) {
    ((this.url = t), (this.headers = s), (this.region = l), (this.fetch = R1(a)));
  }
  setAuth(t) {
    this.headers.Authorization = `Bearer ${t}`;
  }
  invoke(t) {
    return T1(this, arguments, void 0, function* (s, a = {}) {
      var l;
      let u, c;
      try {
        const { headers: d, method: p, body: g, signal: y, timeout: m } = a;
        let b = {},
          { region: _ } = a;
        _ || (_ = this.region);
        const w = new URL(`${this.url}/${s}`);
        _ && _ !== "any" && ((b["x-region"] = _), w.searchParams.set("forceFunctionRegion", _));
        let A;
        g && ((d && !Object.prototype.hasOwnProperty.call(d, "Content-Type")) || !d)
          ? (typeof Blob < "u" && g instanceof Blob) || g instanceof ArrayBuffer
            ? ((b["Content-Type"] = "application/octet-stream"), (A = g))
            : typeof g == "string"
              ? ((b["Content-Type"] = "text/plain"), (A = g))
              : typeof FormData < "u" && g instanceof FormData
                ? (A = g)
                : ((b["Content-Type"] = "application/json"), (A = JSON.stringify(g)))
          : g &&
              typeof g != "string" &&
              !(typeof Blob < "u" && g instanceof Blob) &&
              !(g instanceof ArrayBuffer) &&
              !(typeof FormData < "u" && g instanceof FormData)
            ? (A = JSON.stringify(g))
            : (A = g);
        let E = y;
        m &&
          ((c = new AbortController()),
          (u = setTimeout(() => c.abort(), m)),
          y ? ((E = c.signal), y.addEventListener("abort", () => c.abort())) : (E = c.signal));
        const O = yield this.fetch(w.toString(), {
            method: p || "POST",
            headers: Object.assign(Object.assign(Object.assign({}, b), this.headers), d),
            body: A,
            signal: E,
          }).catch((Q) => {
            throw new A1(Q);
          }),
          M = O.headers.get("x-relay-error");
        if (M && M === "true") throw new Qy(O);
        if (!O.ok) throw new Yy(O);
        let j = ((l = O.headers.get("Content-Type")) !== null && l !== void 0 ? l : "text/plain")
            .split(";")[0]
            .trim(),
          L;
        return (
          j === "application/json"
            ? (L = yield O.json())
            : j === "application/octet-stream" || j === "application/pdf"
              ? (L = yield O.blob())
              : j === "text/event-stream"
                ? (L = O)
                : j === "multipart/form-data"
                  ? (L = yield O.formData())
                  : (L = yield O.text()),
          { data: L, error: null, response: O }
        );
      } catch (d) {
        return {
          data: null,
          error: d,
          response: d instanceof Yy || d instanceof Qy ? d.context : void 0,
        };
      } finally {
        u && clearTimeout(u);
      }
    });
  }
}
const X0 = 3,
  Jy = (e) => Math.min(1e3 * 2 ** e, 3e4),
  C1 = [520, 503],
  Z0 = ["GET", "HEAD", "OPTIONS"];
var Xy = class extends Error {
  constructor(e) {
    (super(e.message),
      (this.name = "PostgrestError"),
      (this.details = e.details),
      (this.hint = e.hint),
      (this.code = e.code));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      details: this.details,
      hint: this.hint,
      code: this.code,
    };
  }
};
function Zy(e, t) {
  return new Promise((s) => {
    if (t?.aborted) {
      s();
      return;
    }
    const a = setTimeout(() => {
      (t?.removeEventListener("abort", l), s());
    }, e);
    function l() {
      (clearTimeout(a), s());
    }
    t?.addEventListener("abort", l);
  });
}
function x1(e, t, s, a) {
  return !(!a || s >= X0 || !Z0.includes(e) || !C1.includes(t));
}
var k1 = class {
    constructor(e) {
      var t, s, a, l, u;
      ((this.shouldThrowOnError = !1),
        (this.retryEnabled = !0),
        (this.method = e.method),
        (this.url = e.url),
        (this.headers = new Headers(e.headers)),
        (this.schema = e.schema),
        (this.body = e.body),
        (this.shouldThrowOnError = (t = e.shouldThrowOnError) !== null && t !== void 0 ? t : !1),
        (this.signal = e.signal),
        (this.isMaybeSingle = (s = e.isMaybeSingle) !== null && s !== void 0 ? s : !1),
        (this.shouldStripNulls = (a = e.shouldStripNulls) !== null && a !== void 0 ? a : !1),
        (this.urlLengthLimit = (l = e.urlLengthLimit) !== null && l !== void 0 ? l : 8e3),
        (this.retryEnabled = (u = e.retry) !== null && u !== void 0 ? u : !0),
        e.fetch ? (this.fetch = e.fetch) : (this.fetch = fetch));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    stripNulls() {
      if (this.headers.get("Accept") === "text/csv")
        throw new Error("stripNulls() cannot be used with csv()");
      return ((this.shouldStripNulls = !0), this);
    }
    setHeader(e, t) {
      return ((this.headers = new Headers(this.headers)), this.headers.set(e, t), this);
    }
    retry(e) {
      return ((this.retryEnabled = e), this);
    }
    then(e, t) {
      var s = this;
      if (
        (this.schema === void 0 ||
          (["GET", "HEAD"].includes(this.method)
            ? this.headers.set("Accept-Profile", this.schema)
            : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          this.headers.set("Content-Type", "application/json"),
        this.shouldStripNulls)
      ) {
        const c = this.headers.get("Accept");
        c === "application/vnd.pgrst.object+json"
          ? this.headers.set("Accept", "application/vnd.pgrst.object+json;nulls=stripped")
          : (!c || c === "application/json") &&
            this.headers.set("Accept", "application/vnd.pgrst.array+json;nulls=stripped");
      }
      const a = this.fetch;
      let u = (async () => {
        let c = 0;
        for (;;) {
          const g = new Headers(s.headers);
          c > 0 && g.set("X-Retry-Count", String(c));
          let y;
          try {
            y = await a(s.url.toString(), {
              method: s.method,
              headers: g,
              body: JSON.stringify(s.body, (m, b) => (typeof b == "bigint" ? b.toString() : b)),
              signal: s.signal,
            });
          } catch (m) {
            if (m?.name === "AbortError" || m?.code === "ABORT_ERR" || !Z0.includes(s.method))
              throw m;
            if (s.retryEnabled && c < X0) {
              const b = Jy(c);
              (c++, await Zy(b, s.signal));
              continue;
            }
            throw m;
          }
          if (x1(s.method, y.status, c, s.retryEnabled)) {
            var d, p;
            const m =
                (d = (p = y.headers) === null || p === void 0 ? void 0 : p.get("Retry-After")) !==
                  null && d !== void 0
                  ? d
                  : null,
              b = m !== null ? Math.max(0, parseInt(m, 10) || 0) * 1e3 : Jy(c);
            (await y.text(), c++, await Zy(b, s.signal));
            continue;
          }
          return await s.processResponse(y);
        }
      })();
      return (
        this.shouldThrowOnError ||
          (u = u.catch((c) => {
            var d;
            let p = "",
              g = "",
              y = "";
            const m = c?.cause;
            if (m) {
              var b, _, w, A;
              const M = (b = m?.message) !== null && b !== void 0 ? b : "",
                j = (_ = m?.code) !== null && _ !== void 0 ? _ : "";
              ((p = `${(w = c?.name) !== null && w !== void 0 ? w : "FetchError"}: ${c?.message}`),
                (p += `

Caused by: ${(A = m?.name) !== null && A !== void 0 ? A : "Error"}: ${M}`),
                j && (p += ` (${j})`),
                m?.stack &&
                  (p += `
${m.stack}`));
            } else {
              var E;
              p = (E = c?.stack) !== null && E !== void 0 ? E : "";
            }
            const O = this.url.toString().length;
            return (
              c?.name === "AbortError" || c?.code === "ABORT_ERR"
                ? ((y = ""),
                  (g = "Request was aborted (timeout or manual cancellation)"),
                  O > this.urlLengthLimit &&
                    (g += `. Note: Your request URL is ${O} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`))
                : (m?.name === "HeadersOverflowError" || m?.code === "UND_ERR_HEADERS_OVERFLOW") &&
                  ((y = ""),
                  (g = "HTTP headers exceeded server limits (typically 16KB)"),
                  O > this.urlLengthLimit &&
                    (g += `. Your request URL is ${O} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),
              {
                success: !1,
                error: {
                  message: `${(d = c?.name) !== null && d !== void 0 ? d : "FetchError"}: ${c?.message}`,
                  details: p,
                  hint: g,
                  code: y,
                },
                data: null,
                count: null,
                status: 0,
                statusText: "",
              }
            );
          })),
        u.then(e, t)
      );
    }
    async processResponse(e) {
      var t = this;
      let s = null,
        a = null,
        l = null,
        u = e.status,
        c = e.statusText;
      if (e.ok) {
        var d, p;
        if (t.method !== "HEAD") {
          var g;
          const b = await e.text();
          if (b !== "")
            if (t.headers.get("Accept") === "text/csv") a = b;
            else if (
              t.headers.get("Accept") &&
              !((g = t.headers.get("Accept")) === null || g === void 0) &&
              g.includes("application/vnd.pgrst.plan+text")
            )
              a = b;
            else
              try {
                a = JSON.parse(b);
              } catch {
                if (((s = { message: b }), (a = null), t.shouldThrowOnError))
                  throw new Xy({ message: b, details: "", hint: "", code: "" });
              }
        }
        const y =
            (d = t.headers.get("Prefer")) === null || d === void 0
              ? void 0
              : d.match(/count=(exact|planned|estimated)/),
          m = (p = e.headers.get("content-range")) === null || p === void 0 ? void 0 : p.split("/");
        (y && m && m.length > 1 && (l = parseInt(m[1])),
          t.isMaybeSingle &&
            Array.isArray(a) &&
            (a.length > 1
              ? ((s = {
                  code: "PGRST116",
                  details: `Results contain ${a.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                  hint: null,
                  message: "JSON object requested, multiple (or no) rows returned",
                }),
                (a = null),
                (l = null),
                (u = 406),
                (c = "Not Acceptable"))
              : a.length === 1
                ? (a = a[0])
                : (a = null)));
      } else {
        const y = await e.text();
        try {
          ((s = JSON.parse(y)),
            Array.isArray(s) && e.status === 404 && ((a = []), (s = null), (u = 200), (c = "OK")));
        } catch {
          e.status === 404 && y === "" ? ((u = 204), (c = "No Content")) : (s = { message: y });
        }
        if (s && t.shouldThrowOnError) throw new Xy(s);
      }
      return { success: s === null, error: s, data: a, count: l, status: u, statusText: c };
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  },
  j1 = class extends k1 {
    select(e) {
      let t = !1;
      const s = (e ?? "*")
        .split("")
        .map((a) => (/\s/.test(a) && !t ? "" : (a === '"' && (t = !t), a)))
        .join("");
      return (
        this.url.searchParams.set("select", s),
        this.headers.append("Prefer", "return=representation"),
        this
      );
    }
    order(e, { ascending: t = !0, nullsFirst: s, foreignTable: a, referencedTable: l = a } = {}) {
      const u = l ? `${l}.order` : "order",
        c = this.url.searchParams.get(u);
      return (
        this.url.searchParams.set(
          u,
          `${c ? `${c},` : ""}${e}.${t ? "asc" : "desc"}${s === void 0 ? "" : s ? ".nullsfirst" : ".nullslast"}`,
        ),
        this
      );
    }
    limit(e, { foreignTable: t, referencedTable: s = t } = {}) {
      const a = typeof s > "u" ? "limit" : `${s}.limit`;
      return (this.url.searchParams.set(a, `${e}`), this);
    }
    range(e, t, { foreignTable: s, referencedTable: a = s } = {}) {
      const l = typeof a > "u" ? "offset" : `${a}.offset`,
        u = typeof a > "u" ? "limit" : `${a}.limit`;
      return (
        this.url.searchParams.set(l, `${e}`),
        this.url.searchParams.set(u, `${t - e + 1}`),
        this
      );
    }
    abortSignal(e) {
      return ((this.signal = e), this);
    }
    single() {
      return (this.headers.set("Accept", "application/vnd.pgrst.object+json"), this);
    }
    maybeSingle() {
      return ((this.isMaybeSingle = !0), this);
    }
    csv() {
      return (this.headers.set("Accept", "text/csv"), this);
    }
    geojson() {
      return (this.headers.set("Accept", "application/geo+json"), this);
    }
    explain({
      analyze: e = !1,
      verbose: t = !1,
      settings: s = !1,
      buffers: a = !1,
      wal: l = !1,
      format: u = "text",
    } = {}) {
      var c;
      const d = [
          e ? "analyze" : null,
          t ? "verbose" : null,
          s ? "settings" : null,
          a ? "buffers" : null,
          l ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        p = (c = this.headers.get("Accept")) !== null && c !== void 0 ? c : "application/json";
      return (
        this.headers.set("Accept", `application/vnd.pgrst.plan+${u}; for="${p}"; options=${d};`),
        u === "json" ? this : this
      );
    }
    rollback() {
      return (this.headers.append("Prefer", "tx=rollback"), this);
    }
    returns() {
      return this;
    }
    maxAffected(e) {
      return (
        this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${e}`),
        this
      );
    }
  };
const Wy = new RegExp("[,()]");
var gi = class extends j1 {
    eq(e, t) {
      return (this.url.searchParams.append(e, `eq.${t}`), this);
    }
    neq(e, t) {
      return (this.url.searchParams.append(e, `neq.${t}`), this);
    }
    gt(e, t) {
      return (this.url.searchParams.append(e, `gt.${t}`), this);
    }
    gte(e, t) {
      return (this.url.searchParams.append(e, `gte.${t}`), this);
    }
    lt(e, t) {
      return (this.url.searchParams.append(e, `lt.${t}`), this);
    }
    lte(e, t) {
      return (this.url.searchParams.append(e, `lte.${t}`), this);
    }
    like(e, t) {
      return (this.url.searchParams.append(e, `like.${t}`), this);
    }
    likeAllOf(e, t) {
      return (this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this);
    }
    likeAnyOf(e, t) {
      return (this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this);
    }
    ilike(e, t) {
      return (this.url.searchParams.append(e, `ilike.${t}`), this);
    }
    ilikeAllOf(e, t) {
      return (this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this);
    }
    ilikeAnyOf(e, t) {
      return (this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this);
    }
    regexMatch(e, t) {
      return (this.url.searchParams.append(e, `match.${t}`), this);
    }
    regexIMatch(e, t) {
      return (this.url.searchParams.append(e, `imatch.${t}`), this);
    }
    is(e, t) {
      return (this.url.searchParams.append(e, `is.${t}`), this);
    }
    isDistinct(e, t) {
      return (this.url.searchParams.append(e, `isdistinct.${t}`), this);
    }
    in(e, t) {
      const s = Array.from(new Set(t))
        .map((a) => (typeof a == "string" && Wy.test(a) ? `"${a}"` : `${a}`))
        .join(",");
      return (this.url.searchParams.append(e, `in.(${s})`), this);
    }
    notIn(e, t) {
      const s = Array.from(new Set(t))
        .map((a) => (typeof a == "string" && Wy.test(a) ? `"${a}"` : `${a}`))
        .join(",");
      return (this.url.searchParams.append(e, `not.in.(${s})`), this);
    }
    contains(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `cs.${t}`)
          : Array.isArray(t)
            ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
            : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
        this
      );
    }
    containedBy(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `cd.${t}`)
          : Array.isArray(t)
            ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
            : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
        this
      );
    }
    rangeGt(e, t) {
      return (this.url.searchParams.append(e, `sr.${t}`), this);
    }
    rangeGte(e, t) {
      return (this.url.searchParams.append(e, `nxl.${t}`), this);
    }
    rangeLt(e, t) {
      return (this.url.searchParams.append(e, `sl.${t}`), this);
    }
    rangeLte(e, t) {
      return (this.url.searchParams.append(e, `nxr.${t}`), this);
    }
    rangeAdjacent(e, t) {
      return (this.url.searchParams.append(e, `adj.${t}`), this);
    }
    overlaps(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `ov.${t}`)
          : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
        this
      );
    }
    textSearch(e, t, { config: s, type: a } = {}) {
      let l = "";
      a === "plain" ? (l = "pl") : a === "phrase" ? (l = "ph") : a === "websearch" && (l = "w");
      const u = s === void 0 ? "" : `(${s})`;
      return (this.url.searchParams.append(e, `${l}fts${u}.${t}`), this);
    }
    match(e) {
      return (
        Object.entries(e)
          .filter(([t, s]) => s !== void 0)
          .forEach(([t, s]) => {
            this.url.searchParams.append(t, `eq.${s}`);
          }),
        this
      );
    }
    not(e, t, s) {
      return (this.url.searchParams.append(e, `not.${t}.${s}`), this);
    }
    or(e, { foreignTable: t, referencedTable: s = t } = {}) {
      const a = s ? `${s}.or` : "or";
      return (this.url.searchParams.append(a, `(${e})`), this);
    }
    filter(e, t, s) {
      return (this.url.searchParams.append(e, `${t}.${s}`), this);
    }
  },
  M1 = class {
    constructor(e, { headers: t = {}, schema: s, fetch: a, urlLengthLimit: l = 8e3, retry: u }) {
      ((this.url = e),
        (this.headers = new Headers(t)),
        (this.schema = s),
        (this.fetch = a),
        (this.urlLengthLimit = l),
        (this.retry = u));
    }
    cloneRequestState() {
      return { url: new URL(this.url.toString()), headers: new Headers(this.headers) };
    }
    select(e, t) {
      const { head: s = !1, count: a } = t ?? {},
        l = s ? "HEAD" : "GET";
      let u = !1;
      const c = (e ?? "*")
          .split("")
          .map((g) => (/\s/.test(g) && !u ? "" : (g === '"' && (u = !u), g)))
          .join(""),
        { url: d, headers: p } = this.cloneRequestState();
      return (
        d.searchParams.set("select", c),
        a && p.append("Prefer", `count=${a}`),
        new gi({
          method: l,
          url: d,
          headers: p,
          schema: this.schema,
          fetch: this.fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
    insert(e, { count: t, defaultToNull: s = !0 } = {}) {
      var a;
      const l = "POST",
        { url: u, headers: c } = this.cloneRequestState();
      if (
        (t && c.append("Prefer", `count=${t}`),
        s || c.append("Prefer", "missing=default"),
        Array.isArray(e))
      ) {
        const d = e.reduce((p, g) => p.concat(Object.keys(g)), []);
        if (d.length > 0) {
          const p = [...new Set(d)].map((g) => `"${g}"`);
          u.searchParams.set("columns", p.join(","));
        }
      }
      return new gi({
        method: l,
        url: u,
        headers: c,
        schema: this.schema,
        body: e,
        fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      });
    }
    upsert(e, { onConflict: t, ignoreDuplicates: s = !1, count: a, defaultToNull: l = !0 } = {}) {
      var u;
      const c = "POST",
        { url: d, headers: p } = this.cloneRequestState();
      if (
        (p.append("Prefer", `resolution=${s ? "ignore" : "merge"}-duplicates`),
        t !== void 0 && d.searchParams.set("on_conflict", t),
        a && p.append("Prefer", `count=${a}`),
        l || p.append("Prefer", "missing=default"),
        Array.isArray(e))
      ) {
        const g = e.reduce((y, m) => y.concat(Object.keys(m)), []);
        if (g.length > 0) {
          const y = [...new Set(g)].map((m) => `"${m}"`);
          d.searchParams.set("columns", y.join(","));
        }
      }
      return new gi({
        method: c,
        url: d,
        headers: p,
        schema: this.schema,
        body: e,
        fetch: (u = this.fetch) !== null && u !== void 0 ? u : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      });
    }
    update(e, { count: t } = {}) {
      var s;
      const a = "PATCH",
        { url: l, headers: u } = this.cloneRequestState();
      return (
        t && u.append("Prefer", `count=${t}`),
        new gi({
          method: a,
          url: l,
          headers: u,
          schema: this.schema,
          body: e,
          fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
    delete({ count: e } = {}) {
      var t;
      const s = "DELETE",
        { url: a, headers: l } = this.cloneRequestState();
      return (
        e && l.append("Prefer", `count=${e}`),
        new gi({
          method: s,
          url: a,
          headers: l,
          schema: this.schema,
          fetch: (t = this.fetch) !== null && t !== void 0 ? t : fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
  };
function $a(e) {
  "@babel/helpers - typeof";
  return (
    ($a =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    $a(e)
  );
}
function D1(e, t) {
  if ($a(e) != "object" || !e) return e;
  var s = e[Symbol.toPrimitive];
  if (s !== void 0) {
    var a = s.call(e, t);
    if ($a(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function U1(e) {
  var t = D1(e, "string");
  return $a(t) == "symbol" ? t : t + "";
}
function L1(e, t, s) {
  return (
    (t = U1(t)) in e
      ? Object.defineProperty(e, t, { value: s, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = s),
    e
  );
}
function ev(e, t) {
  var s = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      s.push.apply(s, a));
  }
  return s;
}
function Cl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var s = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ev(Object(s), !0).forEach(function (a) {
          L1(e, a, s[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
        : ev(Object(s)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a));
          });
  }
  return e;
}
var N1 = class W0 {
  constructor(
    t,
    { headers: s = {}, schema: a, fetch: l, timeout: u, urlLengthLimit: c = 8e3, retry: d } = {},
  ) {
    ((this.url = t),
      (this.headers = new Headers(s)),
      (this.schemaName = a),
      (this.urlLengthLimit = c));
    const p = l ?? globalThis.fetch;
    (u !== void 0 && u > 0
      ? (this.fetch = (g, y) => {
          const m = new AbortController(),
            b = setTimeout(() => m.abort(), u),
            _ = y?.signal;
          if (_) {
            if (_.aborted) return (clearTimeout(b), p(g, y));
            const w = () => {
              (clearTimeout(b), m.abort());
            };
            return (
              _.addEventListener("abort", w, { once: !0 }),
              p(g, Cl(Cl({}, y), {}, { signal: m.signal })).finally(() => {
                (clearTimeout(b), _.removeEventListener("abort", w));
              })
            );
          }
          return p(g, Cl(Cl({}, y), {}, { signal: m.signal })).finally(() => clearTimeout(b));
        })
      : (this.fetch = p),
      (this.retry = d));
  }
  from(t) {
    if (!t || typeof t != "string" || t.trim() === "")
      throw new Error("Invalid relation name: relation must be a non-empty string.");
    return new M1(new URL(`${this.url}/${t}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry,
    });
  }
  schema(t) {
    return new W0(this.url, {
      headers: this.headers,
      schema: t,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry,
    });
  }
  rpc(t, s = {}, { head: a = !1, get: l = !1, count: u } = {}) {
    var c;
    let d;
    const p = new URL(`${this.url}/rpc/${t}`);
    let g;
    const y = (_) => _ !== null && typeof _ == "object" && (!Array.isArray(_) || _.some(y)),
      m = a && Object.values(s).some(y);
    m
      ? ((d = "POST"), (g = s))
      : a || l
        ? ((d = a ? "HEAD" : "GET"),
          Object.entries(s)
            .filter(([_, w]) => w !== void 0)
            .map(([_, w]) => [_, Array.isArray(w) ? `{${w.join(",")}}` : `${w}`])
            .forEach(([_, w]) => {
              p.searchParams.append(_, w);
            }))
        : ((d = "POST"), (g = s));
    const b = new Headers(this.headers);
    return (
      m
        ? b.set("Prefer", u ? `count=${u},return=minimal` : "return=minimal")
        : u && b.set("Prefer", `count=${u}`),
      new gi({
        method: d,
        url: p,
        headers: b,
        schema: this.schemaName,
        body: g,
        fetch: (c = this.fetch) !== null && c !== void 0 ? c : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      })
    );
  }
};
class P1 {
  constructor() {}
  static detectEnvironment() {
    var t;
    if (typeof WebSocket < "u") return { type: "native", wsConstructor: WebSocket };
    const s = globalThis;
    if (typeof globalThis < "u" && typeof s.WebSocket < "u")
      return { type: "native", wsConstructor: s.WebSocket };
    const a = typeof global < "u" ? global : void 0;
    if (a && typeof a.WebSocket < "u") return { type: "native", wsConstructor: a.WebSocket };
    if (
      typeof globalThis < "u" &&
      typeof s.WebSocketPair < "u" &&
      typeof globalThis.WebSocket > "u"
    )
      return {
        type: "cloudflare",
        error:
          "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround:
          "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.",
      };
    if (
      (typeof globalThis < "u" && s.EdgeRuntime) ||
      (typeof navigator < "u" &&
        !((t = navigator.userAgent) === null || t === void 0) &&
        t.includes("Vercel-Edge"))
    )
      return {
        type: "unsupported",
        error:
          "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround:
          "Use serverless functions or a different deployment target for WebSocket functionality.",
      };
    const l = globalThis.process;
    if (l) {
      const u = l.versions;
      if (u && u.node) {
        const c = u.node,
          d = parseInt(c.replace(/^v/, "").split(".")[0]);
        return d >= 22
          ? typeof globalThis.WebSocket < "u"
            ? { type: "native", wsConstructor: globalThis.WebSocket }
            : {
                type: "unsupported",
                error: `Node.js ${d} detected but native WebSocket not found.`,
                workaround: "Provide a WebSocket implementation via the transport option.",
              }
          : {
              type: "unsupported",
              error: `Node.js ${d} detected without native WebSocket support.`,
              workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`,
            };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround:
        "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.",
    };
  }
  static getWebSocketConstructor() {
    const t = this.detectEnvironment();
    if (t.wsConstructor) return t.wsConstructor;
    let s = t.error || "WebSocket not supported in this environment.";
    throw (
      t.workaround &&
        (s += `

Suggested solution: ${t.workaround}`),
      new Error(s)
    );
  }
  static isWebSocketSupported() {
    try {
      const t = this.detectEnvironment();
      return t.type === "native" || t.type === "ws";
    } catch {
      return !1;
    }
  }
}
const z1 = "2.107.0",
  B1 = `realtime-js/${z1}`,
  H1 = "1.0.0",
  eb = "2.0.0",
  I1 = eb,
  q1 = 1e4,
  $1 = 100,
  Or = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving",
  },
  tb = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    leave: "phx_leave",
    access_token: "access_token",
  },
  bf = { connecting: "connecting", closing: "closing", closed: "closed" };
class G1 {
  constructor(t) {
    ((this.HEADER_LENGTH = 1),
      (this.USER_BROADCAST_PUSH_META_LENGTH = 6),
      (this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }),
      (this.BINARY_ENCODING = 0),
      (this.JSON_ENCODING = 1),
      (this.BROADCAST_EVENT = "broadcast"),
      (this.allowedMetadataKeys = []),
      (this.allowedMetadataKeys = t ?? []));
  }
  encode(t, s) {
    if (
      t.event === this.BROADCAST_EVENT &&
      !(t.payload instanceof ArrayBuffer) &&
      typeof t.payload.event == "string"
    )
      return s(this._binaryEncodeUserBroadcastPush(t));
    let a = [t.join_ref, t.ref, t.topic, t.event, t.payload];
    return s(JSON.stringify(a));
  }
  _binaryEncodeUserBroadcastPush(t) {
    var s;
    return this._isArrayBuffer((s = t.payload) === null || s === void 0 ? void 0 : s.payload)
      ? this._encodeBinaryUserBroadcastPush(t)
      : this._encodeJsonUserBroadcastPush(t);
  }
  _encodeBinaryUserBroadcastPush(t) {
    var s, a;
    const l =
      (a = (s = t.payload) === null || s === void 0 ? void 0 : s.payload) !== null && a !== void 0
        ? a
        : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(t, this.BINARY_ENCODING, l);
  }
  _encodeJsonUserBroadcastPush(t) {
    var s, a;
    const l =
        (a = (s = t.payload) === null || s === void 0 ? void 0 : s.payload) !== null && a !== void 0
          ? a
          : {},
      c = new TextEncoder().encode(JSON.stringify(l)).buffer;
    return this._encodeUserBroadcastPush(t, this.JSON_ENCODING, c);
  }
  _encodeUserBroadcastPush(t, s, a) {
    var l, u;
    const c = t.topic,
      d = (l = t.ref) !== null && l !== void 0 ? l : "",
      p = (u = t.join_ref) !== null && u !== void 0 ? u : "",
      g = t.payload.event,
      y = this.allowedMetadataKeys ? this._pick(t.payload, this.allowedMetadataKeys) : {},
      m = Object.keys(y).length === 0 ? "" : JSON.stringify(y);
    if (p.length > 255) throw new Error(`joinRef length ${p.length} exceeds maximum of 255`);
    if (d.length > 255) throw new Error(`ref length ${d.length} exceeds maximum of 255`);
    if (c.length > 255) throw new Error(`topic length ${c.length} exceeds maximum of 255`);
    if (g.length > 255) throw new Error(`userEvent length ${g.length} exceeds maximum of 255`);
    if (m.length > 255) throw new Error(`metadata length ${m.length} exceeds maximum of 255`);
    const b =
        this.USER_BROADCAST_PUSH_META_LENGTH + p.length + d.length + c.length + g.length + m.length,
      _ = new ArrayBuffer(this.HEADER_LENGTH + b);
    let w = new DataView(_),
      A = 0;
    (w.setUint8(A++, this.KINDS.userBroadcastPush),
      w.setUint8(A++, p.length),
      w.setUint8(A++, d.length),
      w.setUint8(A++, c.length),
      w.setUint8(A++, g.length),
      w.setUint8(A++, m.length),
      w.setUint8(A++, s),
      Array.from(p, (O) => w.setUint8(A++, O.charCodeAt(0))),
      Array.from(d, (O) => w.setUint8(A++, O.charCodeAt(0))),
      Array.from(c, (O) => w.setUint8(A++, O.charCodeAt(0))),
      Array.from(g, (O) => w.setUint8(A++, O.charCodeAt(0))),
      Array.from(m, (O) => w.setUint8(A++, O.charCodeAt(0))));
    var E = new Uint8Array(_.byteLength + a.byteLength);
    return (E.set(new Uint8Array(_), 0), E.set(new Uint8Array(a), _.byteLength), E.buffer);
  }
  decode(t, s) {
    if (this._isArrayBuffer(t)) {
      let a = this._binaryDecode(t);
      return s(a);
    }
    if (typeof t == "string") {
      const a = JSON.parse(t),
        [l, u, c, d, p] = a;
      return s({ join_ref: l, ref: u, topic: c, event: d, payload: p });
    }
    return s({});
  }
  _binaryDecode(t) {
    const s = new DataView(t),
      a = s.getUint8(0),
      l = new TextDecoder();
    if (a === this.KINDS.userBroadcast) return this._decodeUserBroadcast(t, s, l);
  }
  _decodeUserBroadcast(t, s, a) {
    const l = s.getUint8(1),
      u = s.getUint8(2),
      c = s.getUint8(3),
      d = s.getUint8(4);
    let p = this.HEADER_LENGTH + 4;
    const g = a.decode(t.slice(p, p + l));
    p = p + l;
    const y = a.decode(t.slice(p, p + u));
    p = p + u;
    const m = a.decode(t.slice(p, p + c));
    p = p + c;
    const b = t.slice(p, t.byteLength),
      _ = d === this.JSON_ENCODING ? JSON.parse(a.decode(b)) : b,
      w = { type: this.BROADCAST_EVENT, event: y, payload: _ };
    return (
      c > 0 && (w.meta = JSON.parse(m)),
      { join_ref: null, ref: null, topic: g, event: this.BROADCAST_EVENT, payload: w }
    );
  }
  _isArrayBuffer(t) {
    var s;
    return (
      t instanceof ArrayBuffer ||
      ((s = t?.constructor) === null || s === void 0 ? void 0 : s.name) === "ArrayBuffer"
    );
  }
  _pick(t, s) {
    return !t || typeof t != "object"
      ? {}
      : Object.fromEntries(Object.entries(t).filter(([a]) => s.includes(a)));
  }
}
var ze;
(function (e) {
  ((e.abstime = "abstime"),
    (e.bool = "bool"),
    (e.date = "date"),
    (e.daterange = "daterange"),
    (e.float4 = "float4"),
    (e.float8 = "float8"),
    (e.int2 = "int2"),
    (e.int4 = "int4"),
    (e.int4range = "int4range"),
    (e.int8 = "int8"),
    (e.int8range = "int8range"),
    (e.json = "json"),
    (e.jsonb = "jsonb"),
    (e.money = "money"),
    (e.numeric = "numeric"),
    (e.oid = "oid"),
    (e.reltime = "reltime"),
    (e.text = "text"),
    (e.time = "time"),
    (e.timestamp = "timestamp"),
    (e.timestamptz = "timestamptz"),
    (e.timetz = "timetz"),
    (e.tsrange = "tsrange"),
    (e.tstzrange = "tstzrange"));
})(ze || (ze = {}));
const tv = (e, t, s = {}) => {
    var a;
    const l = (a = s.skipTypes) !== null && a !== void 0 ? a : [];
    return t ? Object.keys(t).reduce((u, c) => ((u[c] = V1(c, e, t, l)), u), {}) : {};
  },
  V1 = (e, t, s, a) => {
    const l = t.find((d) => d.name === e),
      u = l?.type,
      c = s[e];
    return u && !a.includes(u) ? nb(u, c) : _f(c);
  },
  nb = (e, t) => {
    if (e.charAt(0) === "_") {
      const s = e.slice(1, e.length);
      return Y1(t, s);
    }
    switch (e) {
      case ze.bool:
        return K1(t);
      case ze.float4:
      case ze.float8:
      case ze.int2:
      case ze.int4:
      case ze.int8:
      case ze.numeric:
      case ze.oid:
        return F1(t);
      case ze.json:
      case ze.jsonb:
        return Q1(t);
      case ze.timestamp:
        return J1(t);
      case ze.abstime:
      case ze.date:
      case ze.daterange:
      case ze.int4range:
      case ze.int8range:
      case ze.money:
      case ze.reltime:
      case ze.text:
      case ze.time:
      case ze.timestamptz:
      case ze.timetz:
      case ze.tsrange:
      case ze.tstzrange:
        return _f(t);
      default:
        return _f(t);
    }
  },
  _f = (e) => e,
  K1 = (e) => {
    switch (e) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return e;
    }
  },
  F1 = (e) => {
    if (typeof e == "string") {
      const t = parseFloat(e);
      if (!Number.isNaN(t)) return t;
    }
    return e;
  },
  Q1 = (e) => {
    if (typeof e == "string")
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    return e;
  },
  Y1 = (e, t) => {
    if (typeof e != "string") return e;
    const s = e.length - 1,
      a = e[s];
    if (e[0] === "{" && a === "}") {
      let u;
      const c = e.slice(1, s);
      try {
        u = JSON.parse("[" + c + "]");
      } catch {
        u = c ? c.split(",") : [];
      }
      return u.map((d) => nb(t, d));
    }
    return e;
  },
  J1 = (e) => (typeof e == "string" ? e.replace(" ", "T") : e),
  rb = (e) => {
    const t = new URL(e);
    return (
      (t.protocol = t.protocol.replace(/^ws/i, "http")),
      (t.pathname = t.pathname
        .replace(/\/+$/, "")
        .replace(/\/socket\/websocket$/i, "")
        .replace(/\/socket$/i, "")
        .replace(/\/websocket$/i, "")),
      t.pathname === "" || t.pathname === "/"
        ? (t.pathname = "/api/broadcast")
        : (t.pathname = t.pathname + "/api/broadcast"),
      t.href
    );
  };
var Ua = (e) =>
    typeof e == "function"
      ? e
      : function () {
          return e;
        },
  X1 = typeof self < "u" ? self : null,
  mi = typeof window < "u" ? window : null,
  vn = X1 || mi || globalThis,
  Z1 = "2.0.0",
  W1 = 1e4,
  eO = 1e3,
  _n = { connecting: 0, open: 1, closing: 2, closed: 3 },
  kt = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving",
  },
  Kn = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave",
  },
  Sf = { longpoll: "longpoll", websocket: "websocket" },
  tO = { complete: 4 },
  wf = "base64url.bearer.phx.",
  xl = class {
    constructor(e, t, s, a) {
      ((this.channel = e),
        (this.event = t),
        (this.payload =
          s ||
          function () {
            return {};
          }),
        (this.receivedResp = null),
        (this.timeout = a),
        (this.timeoutTimer = null),
        (this.recHooks = []),
        (this.sent = !1),
        (this.ref = void 0));
    }
    resend(e) {
      ((this.timeout = e), this.reset(), this.send());
    }
    send() {
      this.hasReceived("timeout") ||
        (this.startTimeout(),
        (this.sent = !0),
        this.channel.socket.push({
          topic: this.channel.topic,
          event: this.event,
          payload: this.payload(),
          ref: this.ref,
          join_ref: this.channel.joinRef(),
        }));
    }
    receive(e, t) {
      return (
        this.hasReceived(e) && t(this.receivedResp.response),
        this.recHooks.push({ status: e, callback: t }),
        this
      );
    }
    reset() {
      (this.cancelRefEvent(),
        (this.ref = null),
        (this.refEvent = null),
        (this.receivedResp = null),
        (this.sent = !1));
    }
    destroy() {
      (this.cancelRefEvent(), this.cancelTimeout());
    }
    matchReceive({ status: e, response: t, _ref: s }) {
      this.recHooks.filter((a) => a.status === e).forEach((a) => a.callback(t));
    }
    cancelRefEvent() {
      this.refEvent && this.channel.off(this.refEvent);
    }
    cancelTimeout() {
      (clearTimeout(this.timeoutTimer), (this.timeoutTimer = null));
    }
    startTimeout() {
      (this.timeoutTimer && this.cancelTimeout(),
        (this.ref = this.channel.socket.makeRef()),
        (this.refEvent = this.channel.replyEventName(this.ref)),
        this.channel.on(this.refEvent, (e) => {
          (this.cancelRefEvent(),
            this.cancelTimeout(),
            (this.receivedResp = e),
            this.matchReceive(e));
        }),
        (this.timeoutTimer = setTimeout(() => {
          this.trigger("timeout", {});
        }, this.timeout)));
    }
    hasReceived(e) {
      return this.receivedResp && this.receivedResp.status === e;
    }
    trigger(e, t) {
      this.channel.trigger(this.refEvent, { status: e, response: t });
    }
  },
  sb = class {
    constructor(e, t) {
      ((this.callback = e), (this.timerCalc = t), (this.timer = void 0), (this.tries = 0));
    }
    reset() {
      ((this.tries = 0), clearTimeout(this.timer));
    }
    scheduleTimeout() {
      (clearTimeout(this.timer),
        (this.timer = setTimeout(
          () => {
            ((this.tries = this.tries + 1), this.callback());
          },
          this.timerCalc(this.tries + 1),
        )));
    }
  },
  nO = class {
    constructor(e, t, s) {
      ((this.state = kt.closed),
        (this.topic = e),
        (this.params = Ua(t || {})),
        (this.socket = s),
        (this.bindings = []),
        (this.bindingRef = 0),
        (this.timeout = this.socket.timeout),
        (this.joinedOnce = !1),
        (this.joinPush = new xl(this, Kn.join, this.params, this.timeout)),
        (this.pushBuffer = []),
        (this.stateChangeRefs = []),
        (this.rejoinTimer = new sb(() => {
          this.socket.isConnected() && this.rejoin();
        }, this.socket.rejoinAfterMs)),
        this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset())),
        this.stateChangeRefs.push(
          this.socket.onOpen(() => {
            (this.rejoinTimer.reset(), this.isErrored() && this.rejoin());
          }),
        ),
        this.joinPush.receive("ok", () => {
          ((this.state = kt.joined),
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach((a) => a.send()),
            (this.pushBuffer = []));
        }),
        this.joinPush.receive("error", (a) => {
          ((this.state = kt.errored),
            this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, a),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.onClose(() => {
          (this.rejoinTimer.reset(),
            this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic}`),
            (this.state = kt.closed),
            this.socket.remove(this));
        }),
        this.onError((a) => {
          (this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, a),
            this.isJoining() && this.joinPush.reset(),
            (this.state = kt.errored),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.joinPush.receive("timeout", () => {
          (this.socket.hasLogger() &&
            this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
            new xl(this, Kn.leave, Ua({}), this.timeout).send(),
            (this.state = kt.errored),
            this.joinPush.reset(),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.on(Kn.reply, (a, l) => {
          this.trigger(this.replyEventName(l), a);
        }));
    }
    join(e = this.timeout) {
      if (this.joinedOnce)
        throw new Error(
          "tried to join multiple times. 'join' can only be called a single time per channel instance",
        );
      return ((this.timeout = e), (this.joinedOnce = !0), this.rejoin(), this.joinPush);
    }
    teardown() {
      (this.pushBuffer.forEach((e) => e.destroy()),
        (this.pushBuffer = []),
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        (this.state = kt.closed),
        (this.bindings = []));
    }
    onClose(e) {
      this.on(Kn.close, e);
    }
    onError(e) {
      return this.on(Kn.error, (t) => e(t));
    }
    on(e, t) {
      let s = this.bindingRef++;
      return (this.bindings.push({ event: e, ref: s, callback: t }), s);
    }
    off(e, t) {
      this.bindings = this.bindings.filter(
        (s) => !(s.event === e && (typeof t > "u" || t === s.ref)),
      );
    }
    canPush() {
      return this.socket.isConnected() && this.isJoined();
    }
    push(e, t, s = this.timeout) {
      if (((t = t || {}), !this.joinedOnce))
        throw new Error(
          `tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`,
        );
      let a = new xl(
        this,
        e,
        function () {
          return t;
        },
        s,
      );
      return (this.canPush() ? a.send() : (a.startTimeout(), this.pushBuffer.push(a)), a);
    }
    leave(e = this.timeout) {
      (this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), (this.state = kt.leaving));
      let t = () => {
          (this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`),
            this.trigger(Kn.close, "leave"));
        },
        s = new xl(this, Kn.leave, Ua({}), e);
      return (
        s.receive("ok", () => t()).receive("timeout", () => t()),
        s.send(),
        this.canPush() || s.trigger("ok", {}),
        s
      );
    }
    onMessage(e, t, s) {
      return t;
    }
    filterBindings(e, t, s) {
      return !0;
    }
    isMember(e, t, s, a) {
      return this.topic !== e
        ? !1
        : a && a !== this.joinRef()
          ? (this.socket.hasLogger() &&
              this.socket.log("channel", "dropping outdated message", {
                topic: e,
                event: t,
                payload: s,
                joinRef: a,
              }),
            !1)
          : !0;
    }
    joinRef() {
      return this.joinPush.ref;
    }
    rejoin(e = this.timeout) {
      this.isLeaving() ||
        (this.socket.leaveOpenTopic(this.topic),
        (this.state = kt.joining),
        this.joinPush.resend(e));
    }
    trigger(e, t, s, a) {
      let l = this.onMessage(e, t, s, a);
      if (t && !l)
        throw new Error(
          "channel onMessage callbacks must return the payload, modified or unmodified",
        );
      let u = this.bindings.filter((c) => c.event === e && this.filterBindings(c, t, s));
      for (let c = 0; c < u.length; c++) u[c].callback(l, s, a || this.joinRef());
    }
    replyEventName(e) {
      return `chan_reply_${e}`;
    }
    isClosed() {
      return this.state === kt.closed;
    }
    isErrored() {
      return this.state === kt.errored;
    }
    isJoined() {
      return this.state === kt.joined;
    }
    isJoining() {
      return this.state === kt.joining;
    }
    isLeaving() {
      return this.state === kt.leaving;
    }
  },
  Wl = class {
    static request(e, t, s, a, l, u, c) {
      if (vn.XDomainRequest) {
        let d = new vn.XDomainRequest();
        return this.xdomainRequest(d, e, t, a, l, u, c);
      } else if (vn.XMLHttpRequest) {
        let d = new vn.XMLHttpRequest();
        return this.xhrRequest(d, e, t, s, a, l, u, c);
      } else {
        if (vn.fetch && vn.AbortController) return this.fetchRequest(e, t, s, a, l, u, c);
        throw new Error("No suitable XMLHttpRequest implementation found");
      }
    }
    static fetchRequest(e, t, s, a, l, u, c) {
      let d = { method: e, headers: s, body: a },
        p = null;
      return (
        l && ((p = new AbortController()), setTimeout(() => p.abort(), l), (d.signal = p.signal)),
        vn
          .fetch(t, d)
          .then((g) => g.text())
          .then((g) => this.parseJSON(g))
          .then((g) => c && c(g))
          .catch((g) => {
            g.name === "AbortError" && u ? u() : c && c(null);
          }),
        p
      );
    }
    static xdomainRequest(e, t, s, a, l, u, c) {
      return (
        (e.timeout = l),
        e.open(t, s),
        (e.onload = () => {
          let d = this.parseJSON(e.responseText);
          c && c(d);
        }),
        u && (e.ontimeout = u),
        (e.onprogress = () => {}),
        e.send(a),
        e
      );
    }
    static xhrRequest(e, t, s, a, l, u, c, d) {
      (e.open(t, s, !0), (e.timeout = u));
      for (let [p, g] of Object.entries(a)) e.setRequestHeader(p, g);
      return (
        (e.onerror = () => d && d(null)),
        (e.onreadystatechange = () => {
          if (e.readyState === tO.complete && d) {
            let p = this.parseJSON(e.responseText);
            d(p);
          }
        }),
        c && (e.ontimeout = c),
        e.send(l),
        e
      );
    }
    static parseJSON(e) {
      if (!e || e === "") return null;
      try {
        return JSON.parse(e);
      } catch {
        return (console && console.log("failed to parse JSON response", e), null);
      }
    }
    static serialize(e, t) {
      let s = [];
      for (var a in e) {
        if (!Object.prototype.hasOwnProperty.call(e, a)) continue;
        let l = t ? `${t}[${a}]` : a,
          u = e[a];
        typeof u == "object"
          ? s.push(this.serialize(u, l))
          : s.push(encodeURIComponent(l) + "=" + encodeURIComponent(u));
      }
      return s.join("&");
    }
    static appendParams(e, t) {
      if (Object.keys(t).length === 0) return e;
      let s = e.match(/\?/) ? "&" : "?";
      return `${e}${s}${this.serialize(t)}`;
    }
  },
  rO = (e) => {
    let t = "",
      s = new Uint8Array(e),
      a = s.byteLength;
    for (let l = 0; l < a; l++) t += String.fromCharCode(s[l]);
    return btoa(t);
  },
  ui = class {
    constructor(e, t) {
      (t && t.length === 2 && t[1].startsWith(wf) && (this.authToken = atob(t[1].slice(wf.length))),
        (this.endPoint = null),
        (this.token = null),
        (this.skipHeartbeat = !0),
        (this.reqs = new Set()),
        (this.awaitingBatchAck = !1),
        (this.currentBatch = null),
        (this.currentBatchTimer = null),
        (this.batchBuffer = []),
        (this.onopen = function () {}),
        (this.onerror = function () {}),
        (this.onmessage = function () {}),
        (this.onclose = function () {}),
        (this.pollEndpoint = this.normalizeEndpoint(e)),
        (this.readyState = _n.connecting),
        setTimeout(() => this.poll(), 0));
    }
    normalizeEndpoint(e) {
      return e
        .replace("ws://", "http://")
        .replace("wss://", "https://")
        .replace(new RegExp("(.*)/" + Sf.websocket), "$1/" + Sf.longpoll);
    }
    endpointURL() {
      return Wl.appendParams(this.pollEndpoint, { token: this.token });
    }
    closeAndRetry(e, t, s) {
      (this.close(e, t, s), (this.readyState = _n.connecting));
    }
    ontimeout() {
      (this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1));
    }
    isActive() {
      return this.readyState === _n.open || this.readyState === _n.connecting;
    }
    poll() {
      const e = { Accept: "application/json" };
      (this.authToken && (e["X-Phoenix-AuthToken"] = this.authToken),
        this.ajax(
          "GET",
          e,
          null,
          () => this.ontimeout(),
          (t) => {
            if (t) {
              var { status: s, token: a, messages: l } = t;
              if (s === 410 && this.token !== null) {
                (this.onerror(410), this.closeAndRetry(3410, "session_gone", !1));
                return;
              }
              this.token = a;
            } else s = 0;
            switch (s) {
              case 200:
                (l.forEach((u) => {
                  setTimeout(() => this.onmessage({ data: u }), 0);
                }),
                  this.poll());
                break;
              case 204:
                this.poll();
                break;
              case 410:
                ((this.readyState = _n.open), this.onopen({}), this.poll());
                break;
              case 403:
                (this.onerror(403), this.close(1008, "forbidden", !1));
                break;
              case 0:
              case 500:
                (this.onerror(500), this.closeAndRetry(1011, "internal server error", 500));
                break;
              default:
                throw new Error(`unhandled poll status ${s}`);
            }
          },
        ));
    }
    send(e) {
      (typeof e != "string" && (e = rO(e)),
        this.currentBatch
          ? this.currentBatch.push(e)
          : this.awaitingBatchAck
            ? this.batchBuffer.push(e)
            : ((this.currentBatch = [e]),
              (this.currentBatchTimer = setTimeout(() => {
                (this.batchSend(this.currentBatch), (this.currentBatch = null));
              }, 0))));
    }
    batchSend(e) {
      ((this.awaitingBatchAck = !0),
        this.ajax(
          "POST",
          { "Content-Type": "application/x-ndjson" },
          e.join(`
`),
          () => this.onerror("timeout"),
          (t) => {
            ((this.awaitingBatchAck = !1),
              !t || t.status !== 200
                ? (this.onerror(t && t.status),
                  this.closeAndRetry(1011, "internal server error", !1))
                : this.batchBuffer.length > 0 &&
                  (this.batchSend(this.batchBuffer), (this.batchBuffer = [])));
          },
        ));
    }
    close(e, t, s) {
      for (let l of this.reqs) l.abort();
      this.readyState = _n.closed;
      let a = Object.assign(
        { code: 1e3, reason: void 0, wasClean: !0 },
        { code: e, reason: t, wasClean: s },
      );
      ((this.batchBuffer = []),
        clearTimeout(this.currentBatchTimer),
        (this.currentBatchTimer = null),
        typeof CloseEvent < "u" ? this.onclose(new CloseEvent("close", a)) : this.onclose(a));
    }
    ajax(e, t, s, a, l) {
      let u,
        c = () => {
          (this.reqs.delete(u), a());
        };
      ((u = Wl.request(e, this.endpointURL(), t, s, this.timeout, c, (d) => {
        (this.reqs.delete(u), this.isActive() && l(d));
      })),
        this.reqs.add(u));
    }
  },
  sO = class ja {
    constructor(t, s = {}) {
      let a = s.events || { state: "presence_state", diff: "presence_diff" };
      ((this.state = {}),
        (this.pendingDiffs = []),
        (this.channel = t),
        (this.joinRef = null),
        (this.caller = { onJoin: function () {}, onLeave: function () {}, onSync: function () {} }),
        this.channel.on(a.state, (l) => {
          let { onJoin: u, onLeave: c, onSync: d } = this.caller;
          ((this.joinRef = this.channel.joinRef()),
            (this.state = ja.syncState(this.state, l, u, c)),
            this.pendingDiffs.forEach((p) => {
              this.state = ja.syncDiff(this.state, p, u, c);
            }),
            (this.pendingDiffs = []),
            d());
        }),
        this.channel.on(a.diff, (l) => {
          let { onJoin: u, onLeave: c, onSync: d } = this.caller;
          this.inPendingSyncState()
            ? this.pendingDiffs.push(l)
            : ((this.state = ja.syncDiff(this.state, l, u, c)), d());
        }));
    }
    onJoin(t) {
      this.caller.onJoin = t;
    }
    onLeave(t) {
      this.caller.onLeave = t;
    }
    onSync(t) {
      this.caller.onSync = t;
    }
    list(t) {
      return ja.list(this.state, t);
    }
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel.joinRef();
    }
    static syncState(t, s, a, l) {
      let u = this.clone(t),
        c = {},
        d = {};
      return (
        this.map(u, (p, g) => {
          s[p] || (d[p] = g);
        }),
        this.map(s, (p, g) => {
          let y = u[p];
          if (y) {
            let m = g.metas.map((A) => A.phx_ref),
              b = y.metas.map((A) => A.phx_ref),
              _ = g.metas.filter((A) => b.indexOf(A.phx_ref) < 0),
              w = y.metas.filter((A) => m.indexOf(A.phx_ref) < 0);
            (_.length > 0 && ((c[p] = g), (c[p].metas = _)),
              w.length > 0 && ((d[p] = this.clone(y)), (d[p].metas = w)));
          } else c[p] = g;
        }),
        this.syncDiff(u, { joins: c, leaves: d }, a, l)
      );
    }
    static syncDiff(t, s, a, l) {
      let { joins: u, leaves: c } = this.clone(s);
      return (
        a || (a = function () {}),
        l || (l = function () {}),
        this.map(u, (d, p) => {
          let g = t[d];
          if (((t[d] = this.clone(p)), g)) {
            let y = t[d].metas.map((b) => b.phx_ref),
              m = g.metas.filter((b) => y.indexOf(b.phx_ref) < 0);
            t[d].metas.unshift(...m);
          }
          a(d, g, p);
        }),
        this.map(c, (d, p) => {
          let g = t[d];
          if (!g) return;
          let y = p.metas.map((m) => m.phx_ref);
          ((g.metas = g.metas.filter((m) => y.indexOf(m.phx_ref) < 0)),
            l(d, g, p),
            g.metas.length === 0 && delete t[d]);
        }),
        t
      );
    }
    static list(t, s) {
      return (
        s ||
          (s = function (a, l) {
            return l;
          }),
        this.map(t, (a, l) => s(a, l))
      );
    }
    static map(t, s) {
      return Object.getOwnPropertyNames(t).map((a) => s(a, t[a]));
    }
    static clone(t) {
      return JSON.parse(JSON.stringify(t));
    }
  },
  kl = {
    HEADER_LENGTH: 1,
    META_LENGTH: 4,
    KINDS: { push: 0, reply: 1, broadcast: 2 },
    encode(e, t) {
      if (e.payload.constructor === ArrayBuffer) return t(this.binaryEncode(e));
      {
        let s = [e.join_ref, e.ref, e.topic, e.event, e.payload];
        return t(JSON.stringify(s));
      }
    },
    decode(e, t) {
      if (e.constructor === ArrayBuffer) return t(this.binaryDecode(e));
      {
        let [s, a, l, u, c] = JSON.parse(e);
        return t({ join_ref: s, ref: a, topic: l, event: u, payload: c });
      }
    },
    binaryEncode(e) {
      let { join_ref: t, ref: s, event: a, topic: l, payload: u } = e,
        c = this.META_LENGTH + t.length + s.length + l.length + a.length,
        d = new ArrayBuffer(this.HEADER_LENGTH + c),
        p = new DataView(d),
        g = 0;
      (p.setUint8(g++, this.KINDS.push),
        p.setUint8(g++, t.length),
        p.setUint8(g++, s.length),
        p.setUint8(g++, l.length),
        p.setUint8(g++, a.length),
        Array.from(t, (m) => p.setUint8(g++, m.charCodeAt(0))),
        Array.from(s, (m) => p.setUint8(g++, m.charCodeAt(0))),
        Array.from(l, (m) => p.setUint8(g++, m.charCodeAt(0))),
        Array.from(a, (m) => p.setUint8(g++, m.charCodeAt(0))));
      var y = new Uint8Array(d.byteLength + u.byteLength);
      return (y.set(new Uint8Array(d), 0), y.set(new Uint8Array(u), d.byteLength), y.buffer);
    },
    binaryDecode(e) {
      let t = new DataView(e),
        s = t.getUint8(0),
        a = new TextDecoder();
      switch (s) {
        case this.KINDS.push:
          return this.decodePush(e, t, a);
        case this.KINDS.reply:
          return this.decodeReply(e, t, a);
        case this.KINDS.broadcast:
          return this.decodeBroadcast(e, t, a);
      }
    },
    decodePush(e, t, s) {
      let a = t.getUint8(1),
        l = t.getUint8(2),
        u = t.getUint8(3),
        c = this.HEADER_LENGTH + this.META_LENGTH - 1,
        d = s.decode(e.slice(c, c + a));
      c = c + a;
      let p = s.decode(e.slice(c, c + l));
      c = c + l;
      let g = s.decode(e.slice(c, c + u));
      c = c + u;
      let y = e.slice(c, e.byteLength);
      return { join_ref: d, ref: null, topic: p, event: g, payload: y };
    },
    decodeReply(e, t, s) {
      let a = t.getUint8(1),
        l = t.getUint8(2),
        u = t.getUint8(3),
        c = t.getUint8(4),
        d = this.HEADER_LENGTH + this.META_LENGTH,
        p = s.decode(e.slice(d, d + a));
      d = d + a;
      let g = s.decode(e.slice(d, d + l));
      d = d + l;
      let y = s.decode(e.slice(d, d + u));
      d = d + u;
      let m = s.decode(e.slice(d, d + c));
      d = d + c;
      let b = e.slice(d, e.byteLength),
        _ = { status: m, response: b };
      return { join_ref: p, ref: g, topic: y, event: Kn.reply, payload: _ };
    },
    decodeBroadcast(e, t, s) {
      let a = t.getUint8(1),
        l = t.getUint8(2),
        u = this.HEADER_LENGTH + 2,
        c = s.decode(e.slice(u, u + a));
      u = u + a;
      let d = s.decode(e.slice(u, u + l));
      u = u + l;
      let p = e.slice(u, e.byteLength);
      return { join_ref: null, ref: null, topic: c, event: d, payload: p };
    },
  },
  iO = class {
    constructor(e, t = {}) {
      ((this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }),
        (this.channels = []),
        (this.sendBuffer = []),
        (this.ref = 0),
        (this.fallbackRef = null),
        (this.timeout = t.timeout || W1),
        (this.transport = t.transport || vn.WebSocket || ui),
        (this.conn = void 0),
        (this.primaryPassedHealthCheck = !1),
        (this.longPollFallbackMs = t.longPollFallbackMs),
        (this.fallbackTimer = null));
      let s = null;
      try {
        s = vn && vn.sessionStorage;
      } catch {}
      ((this.sessionStore = t.sessionStorage || s),
        (this.establishedConnections = 0),
        (this.defaultEncoder = kl.encode.bind(kl)),
        (this.defaultDecoder = kl.decode.bind(kl)),
        (this.closeWasClean = !0),
        (this.disconnecting = !1),
        (this.binaryType = t.binaryType || "arraybuffer"),
        (this.connectClock = 1),
        (this.pageHidden = !1),
        (this.encode = void 0),
        (this.decode = void 0),
        this.transport !== ui
          ? ((this.encode = t.encode || this.defaultEncoder),
            (this.decode = t.decode || this.defaultDecoder))
          : ((this.encode = this.defaultEncoder), (this.decode = this.defaultDecoder)));
      let a = null;
      (mi &&
        mi.addEventListener &&
        (mi.addEventListener("pagehide", (l) => {
          this.conn && (this.disconnect(), (a = this.connectClock));
        }),
        mi.addEventListener("pageshow", (l) => {
          a === this.connectClock && ((a = null), this.connect());
        }),
        mi.addEventListener("visibilitychange", () => {
          document.visibilityState === "hidden"
            ? (this.pageHidden = !0)
            : ((this.pageHidden = !1),
              !this.isConnected() && !this.closeWasClean && this.teardown(() => this.connect()));
        })),
        (this.heartbeatIntervalMs = t.heartbeatIntervalMs || 3e4),
        (this.autoSendHeartbeat = t.autoSendHeartbeat ?? !0),
        (this.heartbeatCallback = t.heartbeatCallback ?? (() => {})),
        (this.rejoinAfterMs = (l) =>
          t.rejoinAfterMs ? t.rejoinAfterMs(l) : [1e3, 2e3, 5e3][l - 1] || 1e4),
        (this.reconnectAfterMs = (l) =>
          t.reconnectAfterMs
            ? t.reconnectAfterMs(l)
            : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][l - 1] || 5e3),
        (this.logger = t.logger || null),
        !this.logger &&
          t.debug &&
          (this.logger = (l, u, c) => {
            console.log(`${l}: ${u}`, c);
          }),
        (this.longpollerTimeout = t.longpollerTimeout || 2e4),
        (this.params = Ua(t.params || {})),
        (this.endPoint = `${e}/${Sf.websocket}`),
        (this.vsn = t.vsn || Z1),
        (this.heartbeatTimeoutTimer = null),
        (this.heartbeatTimer = null),
        (this.heartbeatSentAt = null),
        (this.pendingHeartbeatRef = null),
        (this.reconnectTimer = new sb(() => {
          if (this.pageHidden) {
            (this.log("Not reconnecting as page is hidden!"), this.teardown());
            return;
          }
          this.teardown(async () => {
            (t.beforeReconnect && (await t.beforeReconnect()), this.connect());
          });
        }, this.reconnectAfterMs)),
        (this.authToken = t.authToken));
    }
    getLongPollTransport() {
      return ui;
    }
    replaceTransport(e) {
      (this.connectClock++,
        (this.closeWasClean = !0),
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        this.conn && (this.conn.close(), (this.conn = null)),
        (this.transport = e));
    }
    protocol() {
      return location.protocol.match(/^https/) ? "wss" : "ws";
    }
    endPointURL() {
      let e = Wl.appendParams(Wl.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
      return e.charAt(0) !== "/"
        ? e
        : e.charAt(1) === "/"
          ? `${this.protocol()}:${e}`
          : `${this.protocol()}://${location.host}${e}`;
    }
    disconnect(e, t, s) {
      (this.connectClock++,
        (this.disconnecting = !0),
        (this.closeWasClean = !0),
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        this.teardown(
          () => {
            ((this.disconnecting = !1), e && e());
          },
          t,
          s,
        ));
    }
    connect(e) {
      (e &&
        (console &&
          console.log(
            "passing params to connect is deprecated. Instead pass :params to the Socket constructor",
          ),
        (this.params = Ua(e))),
        !(this.conn && !this.disconnecting) &&
          (this.longPollFallbackMs && this.transport !== ui
            ? this.connectWithFallback(ui, this.longPollFallbackMs)
            : this.transportConnect()));
    }
    log(e, t, s) {
      this.logger && this.logger(e, t, s);
    }
    hasLogger() {
      return this.logger !== null;
    }
    onOpen(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.open.push([t, e]), t);
    }
    onClose(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.close.push([t, e]), t);
    }
    onError(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.error.push([t, e]), t);
    }
    onMessage(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.message.push([t, e]), t);
    }
    onHeartbeat(e) {
      this.heartbeatCallback = e;
    }
    ping(e) {
      if (!this.isConnected()) return !1;
      let t = this.makeRef(),
        s = Date.now();
      this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: t });
      let a = this.onMessage((l) => {
        l.ref === t && (this.off([a]), e(Date.now() - s));
      });
      return !0;
    }
    transportName(e) {
      return e === ui ? "LongPoll" : e.name;
    }
    transportConnect() {
      (this.connectClock++, (this.closeWasClean = !1));
      let e;
      (this.authToken && (e = ["phoenix", `${wf}${btoa(this.authToken).replace(/=/g, "")}`]),
        (this.conn = new this.transport(this.endPointURL(), e)),
        (this.conn.binaryType = this.binaryType),
        (this.conn.timeout = this.longpollerTimeout),
        (this.conn.onopen = () => this.onConnOpen()),
        (this.conn.onerror = (t) => this.onConnError(t)),
        (this.conn.onmessage = (t) => this.onConnMessage(t)),
        (this.conn.onclose = (t) => this.onConnClose(t)));
    }
    getSession(e) {
      return this.sessionStore && this.sessionStore.getItem(e);
    }
    storeSession(e, t) {
      this.sessionStore && this.sessionStore.setItem(e, t);
    }
    connectWithFallback(e, t = 2500) {
      clearTimeout(this.fallbackTimer);
      let s = !1,
        a = !0,
        l,
        u,
        c = this.transportName(e),
        d = (p) => {
          (this.log("transport", `falling back to ${c}...`, p),
            this.off([l, u]),
            (a = !1),
            this.replaceTransport(e),
            this.transportConnect());
        };
      if (this.getSession(`phx:fallback:${c}`)) return d("memorized");
      ((this.fallbackTimer = setTimeout(d, t)),
        (u = this.onError((p) => {
          (this.log("transport", "error", p), a && !s && (clearTimeout(this.fallbackTimer), d(p)));
        })),
        this.fallbackRef && this.off([this.fallbackRef]),
        (this.fallbackRef = this.onOpen(() => {
          if (((s = !0), !a)) {
            let p = this.transportName(e);
            return (
              this.primaryPassedHealthCheck || this.storeSession(`phx:fallback:${p}`, "true"),
              this.log("transport", `established ${p} fallback`)
            );
          }
          (clearTimeout(this.fallbackTimer),
            (this.fallbackTimer = setTimeout(d, t)),
            this.ping((p) => {
              (this.log("transport", "connected to primary after", p),
                (this.primaryPassedHealthCheck = !0),
                clearTimeout(this.fallbackTimer));
            }));
        })),
        this.transportConnect());
    }
    clearHeartbeats() {
      (clearTimeout(this.heartbeatTimer), clearTimeout(this.heartbeatTimeoutTimer));
    }
    onConnOpen() {
      (this.hasLogger() && this.log("transport", `connected to ${this.endPointURL()}`),
        (this.closeWasClean = !1),
        (this.disconnecting = !1),
        this.establishedConnections++,
        this.flushSendBuffer(),
        this.reconnectTimer.reset(),
        this.autoSendHeartbeat && this.resetHeartbeat(),
        this.triggerStateCallbacks("open"));
    }
    heartbeatTimeout() {
      if (this.pendingHeartbeatRef) {
        ((this.pendingHeartbeatRef = null),
          (this.heartbeatSentAt = null),
          this.hasLogger() &&
            this.log("transport", "heartbeat timeout. Attempting to re-establish connection"));
        try {
          this.heartbeatCallback("timeout");
        } catch (e) {
          this.log("error", "error in heartbeat callback", e);
        }
        (this.triggerChanError(new Error("heartbeat timeout")),
          (this.closeWasClean = !1),
          this.teardown(() => this.reconnectTimer.scheduleTimeout(), eO, "heartbeat timeout"));
      }
    }
    resetHeartbeat() {
      (this.conn && this.conn.skipHeartbeat) ||
        ((this.pendingHeartbeatRef = null),
        this.clearHeartbeats(),
        (this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs)));
    }
    teardown(e, t, s) {
      if (!this.conn) return e && e();
      const a = this.conn;
      this.waitForBufferDone(a, () => {
        (t ? a.close(t, s || "") : a.close(),
          this.waitForSocketClosed(a, () => {
            (this.conn === a &&
              ((this.conn.onopen = function () {}),
              (this.conn.onerror = function () {}),
              (this.conn.onmessage = function () {}),
              (this.conn.onclose = function () {}),
              (this.conn = null)),
              e && e());
          }));
      });
    }
    waitForBufferDone(e, t, s = 1) {
      if (s === 5 || !e.bufferedAmount) {
        t();
        return;
      }
      setTimeout(() => {
        this.waitForBufferDone(e, t, s + 1);
      }, 150 * s);
    }
    waitForSocketClosed(e, t, s = 1) {
      if (s === 5 || e.readyState === _n.closed) {
        t();
        return;
      }
      setTimeout(() => {
        this.waitForSocketClosed(e, t, s + 1);
      }, 150 * s);
    }
    onConnClose(e) {
      (this.conn && (this.conn.onclose = () => {}),
        this.hasLogger() && this.log("transport", "close", e),
        this.triggerChanError(e),
        this.clearHeartbeats(),
        this.closeWasClean || this.reconnectTimer.scheduleTimeout(),
        this.triggerStateCallbacks("close", e));
    }
    onConnError(e) {
      this.hasLogger() && this.log("transport", "error", e);
      let t = this.transport,
        s = this.establishedConnections;
      (this.triggerStateCallbacks("error", e, t, s),
        (t === this.transport || s > 0) && this.triggerChanError(e));
    }
    triggerChanError(e) {
      this.channels.forEach((t) => {
        t.isErrored() || t.isLeaving() || t.isClosed() || t.trigger(Kn.error, e);
      });
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case _n.connecting:
          return "connecting";
        case _n.open:
          return "open";
        case _n.closing:
          return "closing";
        default:
          return "closed";
      }
    }
    isConnected() {
      return this.connectionState() === "open";
    }
    remove(e) {
      (this.off(e.stateChangeRefs), (this.channels = this.channels.filter((t) => t !== e)));
    }
    off(e) {
      for (let t in this.stateChangeCallbacks)
        this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter(
          ([s]) => e.indexOf(s) === -1,
        );
    }
    channel(e, t = {}) {
      let s = new nO(e, t, this);
      return (this.channels.push(s), s);
    }
    push(e) {
      if (this.hasLogger()) {
        let { topic: t, event: s, payload: a, ref: l, join_ref: u } = e;
        this.log("push", `${t} ${s} (${u}, ${l})`, a);
      }
      this.isConnected()
        ? this.encode(e, (t) => this.conn.send(t))
        : this.sendBuffer.push(() => this.encode(e, (t) => this.conn.send(t)));
    }
    makeRef() {
      let e = this.ref + 1;
      return (e === this.ref ? (this.ref = 0) : (this.ref = e), this.ref.toString());
    }
    sendHeartbeat() {
      if (!this.isConnected()) {
        try {
          this.heartbeatCallback("disconnected");
        } catch (e) {
          this.log("error", "error in heartbeat callback", e);
        }
        return;
      }
      if (this.pendingHeartbeatRef) {
        this.heartbeatTimeout();
        return;
      }
      ((this.pendingHeartbeatRef = this.makeRef()),
        (this.heartbeatSentAt = Date.now()),
        this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: this.pendingHeartbeatRef,
        }));
      try {
        this.heartbeatCallback("sent");
      } catch (e) {
        this.log("error", "error in heartbeat callback", e);
      }
      this.heartbeatTimeoutTimer = setTimeout(
        () => this.heartbeatTimeout(),
        this.heartbeatIntervalMs,
      );
    }
    flushSendBuffer() {
      this.isConnected() &&
        this.sendBuffer.length > 0 &&
        (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
    }
    onConnMessage(e) {
      this.decode(e.data, (t) => {
        let { topic: s, event: a, payload: l, ref: u, join_ref: c } = t;
        if (u && u === this.pendingHeartbeatRef) {
          const d = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : void 0;
          this.clearHeartbeats();
          try {
            this.heartbeatCallback(l.status === "ok" ? "ok" : "error", d);
          } catch (p) {
            this.log("error", "error in heartbeat callback", p);
          }
          ((this.pendingHeartbeatRef = null),
            (this.heartbeatSentAt = null),
            this.autoSendHeartbeat &&
              (this.heartbeatTimer = setTimeout(
                () => this.sendHeartbeat(),
                this.heartbeatIntervalMs,
              )));
        }
        this.hasLogger() &&
          this.log(
            "receive",
            `${l.status || ""} ${s} ${a} ${(u && "(" + u + ")") || ""}`.trim(),
            l,
          );
        for (let d = 0; d < this.channels.length; d++) {
          const p = this.channels[d];
          p.isMember(s, a, l, c) && p.trigger(a, l, u, c);
        }
        this.triggerStateCallbacks("message", t);
      });
    }
    triggerStateCallbacks(e, ...t) {
      try {
        this.stateChangeCallbacks[e].forEach(([s, a]) => {
          try {
            a(...t);
          } catch (l) {
            this.log("error", `error in ${e} callback`, l);
          }
        });
      } catch (s) {
        this.log("error", `error triggering ${e} callbacks`, s);
      }
    }
    leaveOpenTopic(e) {
      let t = this.channels.find((s) => s.topic === e && (s.isJoined() || s.isJoining()));
      t && (this.hasLogger() && this.log("transport", `leaving duplicate topic "${e}"`), t.leave());
    }
  };
class La {
  constructor(t, s) {
    const a = oO(s);
    ((this.presence = new sO(t.getChannel(), a)),
      this.presence.onJoin((l, u, c) => {
        const d = La.onJoinPayload(l, u, c);
        t.getChannel().trigger("presence", d);
      }),
      this.presence.onLeave((l, u, c) => {
        const d = La.onLeavePayload(l, u, c);
        t.getChannel().trigger("presence", d);
      }),
      this.presence.onSync(() => {
        t.getChannel().trigger("presence", { event: "sync" });
      }));
  }
  get state() {
    return La.transformState(this.presence.state);
  }
  static transformState(t) {
    return (
      (t = aO(t)),
      Object.getOwnPropertyNames(t).reduce((s, a) => {
        const l = t[a];
        return ((s[a] = ql(l)), s);
      }, {})
    );
  }
  static onJoinPayload(t, s, a) {
    const l = nv(s),
      u = ql(a);
    return { event: "join", key: t, currentPresences: l, newPresences: u };
  }
  static onLeavePayload(t, s, a) {
    const l = nv(s),
      u = ql(a);
    return { event: "leave", key: t, currentPresences: l, leftPresences: u };
  }
}
function ql(e) {
  return e.metas.map(
    (t) => ((t.presence_ref = t.phx_ref), delete t.phx_ref, delete t.phx_ref_prev, t),
  );
}
function aO(e) {
  return JSON.parse(JSON.stringify(e));
}
function oO(e) {
  return e?.events && { events: e.events };
}
function nv(e) {
  return e?.metas ? ql(e) : [];
}
var rv;
(function (e) {
  ((e.SYNC = "sync"), (e.JOIN = "join"), (e.LEAVE = "leave"));
})(rv || (rv = {}));
class lO {
  get state() {
    return this.presenceAdapter.state;
  }
  constructor(t, s) {
    ((this.channel = t), (this.presenceAdapter = new La(this.channel.channelAdapter, s)));
  }
}
function uO(e) {
  if (e instanceof Error) return e;
  if (typeof e == "string") return new Error(e);
  if (e && typeof e == "object") {
    const t = e;
    if (typeof t.code == "number") {
      const s = typeof t.reason == "string" && t.reason ? ` (${t.reason})` : "";
      return new Error(`socket closed: ${t.code}${s}`, { cause: e });
    }
    return new Error("channel error: transport failure", { cause: e });
  }
  return new Error("channel error: connection lost");
}
class cO {
  constructor(t, s, a) {
    const l = hO(a);
    ((this.channel = t.getSocket().channel(s, l)), (this.socket = t));
  }
  get state() {
    return this.channel.state;
  }
  set state(t) {
    this.channel.state = t;
  }
  get joinedOnce() {
    return this.channel.joinedOnce;
  }
  get joinPush() {
    return this.channel.joinPush;
  }
  get rejoinTimer() {
    return this.channel.rejoinTimer;
  }
  on(t, s) {
    return this.channel.on(t, s);
  }
  off(t, s) {
    this.channel.off(t, s);
  }
  subscribe(t) {
    return this.channel.join(t);
  }
  unsubscribe(t) {
    return this.channel.leave(t);
  }
  teardown() {
    this.channel.teardown();
  }
  onClose(t) {
    this.channel.onClose(t);
  }
  onError(t) {
    return this.channel.onError(t);
  }
  push(t, s, a) {
    let l;
    try {
      l = this.channel.push(t, s, a);
    } catch {
      throw new Error(
        `tried to push '${t}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`,
      );
    }
    if (this.channel.pushBuffer.length > $1) {
      const u = this.channel.pushBuffer.shift();
      (u.cancelTimeout(),
        this.socket.log(
          "channel",
          `discarded push due to buffer overflow: ${u.event}`,
          u.payload(),
        ));
    }
    return l;
  }
  updateJoinPayload(t) {
    const s = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () => Object.assign(Object.assign({}, s), t);
  }
  canPush() {
    return this.socket.isConnected() && this.state === Or.joined;
  }
  isJoined() {
    return this.state === Or.joined;
  }
  isJoining() {
    return this.state === Or.joining;
  }
  isClosed() {
    return this.state === Or.closed;
  }
  isLeaving() {
    return this.state === Or.leaving;
  }
  updateFilterBindings(t) {
    this.channel.filterBindings = t;
  }
  updatePayloadTransform(t) {
    this.channel.onMessage = t;
  }
  getChannel() {
    return this.channel;
  }
}
function hO(e) {
  return {
    config: Object.assign(
      { broadcast: { ack: !1, self: !1 }, presence: { key: "", enabled: !1 }, private: !1 },
      e.config,
    ),
  };
}
var sv;
(function (e) {
  ((e.ALL = "*"), (e.INSERT = "INSERT"), (e.UPDATE = "UPDATE"), (e.DELETE = "DELETE"));
})(sv || (sv = {}));
var bi;
(function (e) {
  ((e.BROADCAST = "broadcast"),
    (e.PRESENCE = "presence"),
    (e.POSTGRES_CHANGES = "postgres_changes"),
    (e.SYSTEM = "system"));
})(bi || (bi = {}));
var Fn;
(function (e) {
  ((e.SUBSCRIBED = "SUBSCRIBED"),
    (e.TIMED_OUT = "TIMED_OUT"),
    (e.CLOSED = "CLOSED"),
    (e.CHANNEL_ERROR = "CHANNEL_ERROR"));
})(Fn || (Fn = {}));
class Na {
  get state() {
    return this.channelAdapter.state;
  }
  set state(t) {
    this.channelAdapter.state = t;
  }
  get joinedOnce() {
    return this.channelAdapter.joinedOnce;
  }
  get timeout() {
    return this.socket.timeout;
  }
  get joinPush() {
    return this.channelAdapter.joinPush;
  }
  get rejoinTimer() {
    return this.channelAdapter.rejoinTimer;
  }
  constructor(t, s = { config: {} }, a) {
    var l, u;
    if (
      ((this.topic = t),
      (this.params = s),
      (this.socket = a),
      (this.bindings = {}),
      (this.subTopic = t.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        { broadcast: { ack: !1, self: !1 }, presence: { key: "", enabled: !1 }, private: !1 },
        s.config,
      )),
      (this.channelAdapter = new cO(this.socket.socketAdapter, t, this.params)),
      (this.presence = new lO(this)),
      this._onClose(() => {
        this.socket._remove(this);
      }),
      this._updateFilterTransform(),
      (this.broadcastEndpointURL = rb(this.socket.socketAdapter.endPointURL())),
      (this.private = this.params.config.private || !1),
      !this.private &&
        !(
          (u = (l = this.params.config) === null || l === void 0 ? void 0 : l.broadcast) === null ||
          u === void 0
        ) &&
        u.replay)
    )
      throw new Error(
        `tried to use replay on public channel '${this.topic}'. It must be a private channel.`,
      );
  }
  subscribe(t, s = this.timeout) {
    var a, l, u;
    if ((this.socket.isConnected() || this.socket.connect(), this.channelAdapter.isClosed())) {
      const {
          config: { broadcast: c, presence: d, private: p },
        } = this.params,
        g =
          (l =
            (a = this.bindings.postgres_changes) === null || a === void 0
              ? void 0
              : a.map((_) => _.filter)) !== null && l !== void 0
            ? l
            : [],
        y =
          (!!this.bindings[bi.PRESENCE] && this.bindings[bi.PRESENCE].length > 0) ||
          ((u = this.params.config.presence) === null || u === void 0 ? void 0 : u.enabled) === !0,
        m = {},
        b = {
          broadcast: c,
          presence: Object.assign(Object.assign({}, d), { enabled: y }),
          postgres_changes: g,
          private: p,
        };
      (this.socket.accessTokenValue && (m.access_token = this.socket.accessTokenValue),
        this._onError((_) => {
          t?.(Fn.CHANNEL_ERROR, uO(_));
        }),
        this._onClose(() => t?.(Fn.CLOSED)),
        this.updateJoinPayload(Object.assign({ config: b }, m)),
        this._updateFilterMessage(),
        this.channelAdapter
          .subscribe(s)
          .receive("ok", async ({ postgres_changes: _ }) => {
            if ((this.socket._isManualToken() || this.socket.setAuth(), _ === void 0)) {
              t?.(Fn.SUBSCRIBED);
              return;
            }
            this._updatePostgresBindings(_, t);
          })
          .receive("error", (_) => {
            this.state = Or.errored;
            const w = Object.values(_).join(", ") || "error";
            t?.(Fn.CHANNEL_ERROR, new Error(w, { cause: _ }));
          })
          .receive("timeout", () => {
            t?.(Fn.TIMED_OUT);
          }));
    }
    return this;
  }
  _updatePostgresBindings(t, s) {
    var a;
    const l = this.bindings.postgres_changes,
      u = (a = l?.length) !== null && a !== void 0 ? a : 0,
      c = [];
    for (let d = 0; d < u; d++) {
      const p = l[d],
        {
          filter: { event: g, schema: y, table: m, filter: b },
        } = p,
        _ = t && t[d];
      if (
        _ &&
        _.event === g &&
        Na.isFilterValueEqual(_.schema, y) &&
        Na.isFilterValueEqual(_.table, m) &&
        Na.isFilterValueEqual(_.filter, b)
      )
        c.push(Object.assign(Object.assign({}, p), { id: _.id }));
      else {
        (this.unsubscribe(),
          (this.state = Or.errored),
          s?.(
            Fn.CHANNEL_ERROR,
            new Error("mismatch between server and client bindings for postgres changes"),
          ));
        return;
      }
    }
    ((this.bindings.postgres_changes = c), this.state != Or.errored && s && s(Fn.SUBSCRIBED));
  }
  presenceState() {
    return this.presence.state;
  }
  async track(t, s = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: t },
      s.timeout || this.timeout,
    );
  }
  async untrack(t = {}) {
    return await this.send({ type: "presence", event: "untrack" }, t);
  }
  on(t, s, a) {
    const l = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(),
      u = t === bi.PRESENCE || t === bi.POSTGRES_CHANGES;
    if (l && u)
      throw (
        this.socket.log(
          "channel",
          `cannot add \`${t}\` callbacks for ${this.topic} after \`subscribe()\`.`,
        ),
        new Error(`cannot add \`${t}\` callbacks for ${this.topic} after \`subscribe()\`.`)
      );
    return this._on(t, s, a);
  }
  async httpSend(t, s, a = {}) {
    var l;
    if (s == null) return Promise.reject(new Error("Payload is required for httpSend()"));
    const u = s instanceof ArrayBuffer || ArrayBuffer.isView(s),
      c = {
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": u ? "application/octet-stream" : "application/json",
      };
    this.socket.accessTokenValue && (c.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const d = new URL(this.broadcastEndpointURL);
    ((d.pathname += `/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(t)}`),
      this.private && d.searchParams.set("private", "true"));
    const p = { method: "POST", headers: c, body: u ? s : JSON.stringify(s) },
      g = await this._fetchWithTimeout(
        d.toString(),
        p,
        (l = a.timeout) !== null && l !== void 0 ? l : this.timeout,
      );
    if (g.status === 202) return { success: !0 };
    let y = g.statusText;
    try {
      const m = await g.json();
      y = m.error || m.message || y;
    } catch {}
    return Promise.reject(new Error(y));
  }
  async send(t, s = {}) {
    var a, l;
    if (!this.channelAdapter.canPush() && t.type === "broadcast") {
      console.warn(
        "Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.",
      );
      const { event: u, payload: c } = t,
        d = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json",
        };
      this.socket.accessTokenValue && (d.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const p = {
        method: "POST",
        headers: d,
        body: JSON.stringify({
          messages: [{ topic: this.subTopic, event: u, payload: c, private: this.private }],
        }),
      };
      try {
        const g = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          p,
          (a = s.timeout) !== null && a !== void 0 ? a : this.timeout,
        );
        return (
          await ((l = g.body) === null || l === void 0 ? void 0 : l.cancel()),
          g.ok ? "ok" : "error"
        );
      } catch (g) {
        return g instanceof Error && g.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((u) => {
        var c, d, p;
        const g = this.channelAdapter.push(t.type, t, s.timeout || this.timeout);
        (t.type === "broadcast" &&
          !(
            !(
              (p =
                (d = (c = this.params) === null || c === void 0 ? void 0 : c.config) === null ||
                d === void 0
                  ? void 0
                  : d.broadcast) === null || p === void 0
            ) && p.ack
          ) &&
          u("ok"),
          g.receive("ok", () => u("ok")),
          g.receive("error", () => u("error")),
          g.receive("timeout", () => u("timed out")));
      });
  }
  updateJoinPayload(t) {
    this.channelAdapter.updateJoinPayload(t);
  }
  async unsubscribe(t = this.timeout) {
    return new Promise((s) => {
      this.channelAdapter
        .unsubscribe(t)
        .receive("ok", () => s("ok"))
        .receive("timeout", () => s("timed out"))
        .receive("error", () => s("error"));
    });
  }
  teardown() {
    this.channelAdapter.teardown();
  }
  async _fetchWithTimeout(t, s, a) {
    const l = new AbortController(),
      u = setTimeout(() => l.abort(), a),
      c = await this.socket.fetch(t, Object.assign(Object.assign({}, s), { signal: l.signal }));
    return (clearTimeout(u), c);
  }
  _on(t, s, a) {
    const l = t.toLocaleLowerCase(),
      u = this.channelAdapter.on(t, a),
      c = { type: l, filter: s, callback: a, ref: u };
    return (
      this.bindings[l] ? this.bindings[l].push(c) : (this.bindings[l] = [c]),
      this._updateFilterMessage(),
      this
    );
  }
  _onClose(t) {
    this.channelAdapter.onClose(t);
  }
  _onError(t) {
    this.channelAdapter.onError(t);
  }
  _updateFilterMessage() {
    this.channelAdapter.updateFilterBindings((t, s, a) => {
      var l, u, c, d, p, g, y;
      const m = t.event.toLocaleLowerCase();
      if (this._notThisChannelEvent(m, a)) return !1;
      const b =
        (l = this.bindings[m]) === null || l === void 0 ? void 0 : l.find((_) => _.ref === t.ref);
      if (!b) return !0;
      if (["broadcast", "presence", "postgres_changes"].includes(m))
        if ("id" in b) {
          const _ = b.id,
            w = (u = b.filter) === null || u === void 0 ? void 0 : u.event;
          return (
            _ &&
            ((c = s.ids) === null || c === void 0 ? void 0 : c.includes(_)) &&
            (w === "*" ||
              w?.toLocaleLowerCase() ===
                ((d = s.data) === null || d === void 0 ? void 0 : d.type.toLocaleLowerCase()))
          );
        } else {
          const _ =
            (g = (p = b?.filter) === null || p === void 0 ? void 0 : p.event) === null ||
            g === void 0
              ? void 0
              : g.toLocaleLowerCase();
          return (
            _ === "*" ||
            _ === ((y = s?.event) === null || y === void 0 ? void 0 : y.toLocaleLowerCase())
          );
        }
      else return b.type.toLocaleLowerCase() === m;
    });
  }
  _notThisChannelEvent(t, s) {
    const { close: a, error: l, leave: u, join: c } = tb;
    return s && [a, l, u, c].includes(t) && s !== this.joinPush.ref;
  }
  _updateFilterTransform() {
    this.channelAdapter.updatePayloadTransform((t, s, a) => {
      if (typeof s == "object" && "ids" in s) {
        const l = s.data,
          { schema: u, table: c, commit_timestamp: d, type: p, errors: g } = l;
        return Object.assign(
          Object.assign(
            {},
            { schema: u, table: c, commit_timestamp: d, eventType: p, new: {}, old: {}, errors: g },
          ),
          this._getPayloadRecords(l),
        );
      }
      return s;
    });
  }
  copyBindings(t) {
    if (this.joinedOnce) throw new Error("cannot copy bindings into joined channel");
    for (const s in t.bindings)
      for (const a of t.bindings[s]) this._on(a.type, a.filter, a.callback);
  }
  static isFilterValueEqual(t, s) {
    return (t ?? void 0) === (s ?? void 0);
  }
  _getPayloadRecords(t) {
    const s = { new: {}, old: {} };
    return (
      (t.type === "INSERT" || t.type === "UPDATE") && (s.new = tv(t.columns, t.record)),
      (t.type === "UPDATE" || t.type === "DELETE") && (s.old = tv(t.columns, t.old_record)),
      s
    );
  }
}
class fO {
  constructor(t, s) {
    this.socket = new iO(t, s);
  }
  get timeout() {
    return this.socket.timeout;
  }
  get endPoint() {
    return this.socket.endPoint;
  }
  get transport() {
    return this.socket.transport;
  }
  get heartbeatIntervalMs() {
    return this.socket.heartbeatIntervalMs;
  }
  get heartbeatCallback() {
    return this.socket.heartbeatCallback;
  }
  set heartbeatCallback(t) {
    this.socket.heartbeatCallback = t;
  }
  get heartbeatTimer() {
    return this.socket.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.socket.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socket.reconnectTimer;
  }
  get vsn() {
    return this.socket.vsn;
  }
  get encode() {
    return this.socket.encode;
  }
  get decode() {
    return this.socket.decode;
  }
  get reconnectAfterMs() {
    return this.socket.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socket.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socket.stateChangeCallbacks;
  }
  connect() {
    this.socket.connect();
  }
  disconnect(t, s, a, l = 1e4) {
    return new Promise((u) => {
      (setTimeout(() => u("timeout"), l),
        this.socket.disconnect(
          () => {
            (t(), u("ok"));
          },
          s,
          a,
        ));
    });
  }
  push(t) {
    this.socket.push(t);
  }
  log(t, s, a) {
    this.socket.log(t, s, a);
  }
  makeRef() {
    return this.socket.makeRef();
  }
  onOpen(t) {
    this.socket.onOpen(t);
  }
  onClose(t) {
    this.socket.onClose(t);
  }
  onError(t) {
    this.socket.onError(t);
  }
  onMessage(t) {
    this.socket.onMessage(t);
  }
  isConnected() {
    return this.socket.isConnected();
  }
  isConnecting() {
    return this.socket.connectionState() == bf.connecting;
  }
  isDisconnecting() {
    return this.socket.connectionState() == bf.closing;
  }
  connectionState() {
    return this.socket.connectionState();
  }
  endPointURL() {
    return this.socket.endPointURL();
  }
  sendHeartbeat() {
    this.socket.sendHeartbeat();
  }
  getSocket() {
    return this.socket;
  }
}
const iv = { HEARTBEAT_INTERVAL: 25e3 },
  dO = [1e3, 2e3, 5e3, 1e4],
  pO = 1e4;
function gO() {
  const e = new Map();
  return {
    get length() {
      return e.size;
    },
    clear() {
      e.clear();
    },
    getItem(t) {
      return e.has(t) ? e.get(t) : null;
    },
    key(t) {
      var s;
      return (s = Array.from(e.keys())[t]) !== null && s !== void 0 ? s : null;
    },
    removeItem(t) {
      e.delete(t);
    },
    setItem(t, s) {
      e.set(t, String(s));
    },
  };
}
function mO() {
  try {
    if (typeof globalThis < "u" && globalThis.sessionStorage) return globalThis.sessionStorage;
  } catch {}
  return gO();
}
const yO = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class vO {
  get endPoint() {
    return this.socketAdapter.endPoint;
  }
  get timeout() {
    return this.socketAdapter.timeout;
  }
  get transport() {
    return this.socketAdapter.transport;
  }
  get heartbeatCallback() {
    return this.socketAdapter.heartbeatCallback;
  }
  get heartbeatIntervalMs() {
    return this.socketAdapter.heartbeatIntervalMs;
  }
  get heartbeatTimer() {
    return this.worker ? this._workerHeartbeatTimer : this.socketAdapter.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.worker ? this._pendingWorkerHeartbeatRef : this.socketAdapter.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socketAdapter.reconnectTimer;
  }
  get vsn() {
    return this.socketAdapter.vsn;
  }
  get encode() {
    return this.socketAdapter.encode;
  }
  get decode() {
    return this.socketAdapter.decode;
  }
  get reconnectAfterMs() {
    return this.socketAdapter.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socketAdapter.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socketAdapter.stateChangeCallbacks;
  }
  constructor(t, s) {
    var a;
    if (
      ((this.channels = new Array()),
      (this.accessTokenValue = null),
      (this.accessToken = null),
      (this.apiKey = null),
      (this.httpEndpoint = ""),
      (this.headers = {}),
      (this.params = {}),
      (this.ref = 0),
      (this.serializer = new G1()),
      (this._manuallySetToken = !1),
      (this._authPromise = null),
      (this._workerHeartbeatTimer = void 0),
      (this._pendingWorkerHeartbeatRef = null),
      (this._pendingDisconnectTimer = null),
      (this._disconnectOnEmptyChannelsAfterMs = 0),
      (this._resolveFetch = (u) => (u ? (...c) => u(...c) : (...c) => fetch(...c))),
      !(!((a = s?.params) === null || a === void 0) && a.apikey))
    )
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = s.params.apikey;
    const l = this._initializeOptions(s);
    ((this.socketAdapter = new fO(t, l)),
      (this.httpEndpoint = rb(t)),
      (this.fetch = this._resolveFetch(s?.fetch)));
  }
  connect() {
    if (!(this.isConnecting() || this.isDisconnecting() || this.isConnected())) {
      (this.accessToken && !this._authPromise && this._setAuthSafely("connect"),
        this._setupConnectionHandlers());
      try {
        this.socketAdapter.connect();
      } catch (t) {
        const s = t.message;
        throw s.includes("Node.js")
          ? new Error(`${s}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
          : new Error(`WebSocket not available: ${s}`);
      }
      this._handleNodeJsRaceCondition();
    }
  }
  endpointURL() {
    return this.socketAdapter.endPointURL();
  }
  async disconnect(t, s) {
    return (
      this._cancelPendingDisconnect(),
      this.isDisconnecting()
        ? "ok"
        : await this.socketAdapter.disconnect(
            () => {
              (clearInterval(this._workerHeartbeatTimer), this._terminateWorker());
            },
            t,
            s,
          )
    );
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(t) {
    const s = await t.unsubscribe();
    return (s === "ok" && t.teardown(), s);
  }
  async removeAllChannels() {
    const t = this.channels.map(async (a) => {
        const l = await a.unsubscribe();
        return (a.teardown(), l);
      }),
      s = await Promise.all(t);
    return (await this.disconnect(), s);
  }
  log(t, s, a) {
    this.socketAdapter.log(t, s, a);
  }
  connectionState() {
    return this.socketAdapter.connectionState() || bf.closed;
  }
  isConnected() {
    return this.socketAdapter.isConnected();
  }
  isConnecting() {
    return this.socketAdapter.isConnecting();
  }
  isDisconnecting() {
    return this.socketAdapter.isDisconnecting();
  }
  channel(t, s = { config: {} }) {
    const a = `realtime:${t}`,
      l = this.getChannels().find((u) => u.topic === a);
    if (l) return l;
    {
      const u = new Na(`realtime:${t}`, s, this);
      return (this._cancelPendingDisconnect(), this.channels.push(u), u);
    }
  }
  push(t) {
    this.socketAdapter.push(t);
  }
  async setAuth(t = null) {
    this._authPromise = this._performAuth(t);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  _isManualToken() {
    return this._manuallySetToken;
  }
  async sendHeartbeat() {
    this.socketAdapter.sendHeartbeat();
  }
  onHeartbeat(t) {
    this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(t);
  }
  _makeRef() {
    return this.socketAdapter.makeRef();
  }
  _remove(t) {
    ((this.channels = this.channels.filter((s) => s.topic !== t.topic)),
      this.channels.length === 0 &&
        (this.log("transport", "no channels remaining, scheduling disconnect"),
        this._schedulePendingDisconnect()));
  }
  _schedulePendingDisconnect() {
    if ((this._cancelPendingDisconnect(), this._disconnectOnEmptyChannelsAfterMs === 0)) {
      (this.log("transport", "disconnecting immediately - no channels"), this.disconnect());
      return;
    }
    ((this._pendingDisconnectTimer = setTimeout(() => {
      ((this._pendingDisconnectTimer = null),
        this.channels.length === 0 &&
          (this.log("transport", "deferred disconnect fired - no channels, disconnecting"),
          this.disconnect()));
    }, this._disconnectOnEmptyChannelsAfterMs)),
      this.log(
        "transport",
        `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`,
      ));
  }
  _cancelPendingDisconnect() {
    this._pendingDisconnectTimer !== null &&
      (this.log("transport", "pending disconnect cancelled - channel activity detected"),
      clearTimeout(this._pendingDisconnectTimer),
      (this._pendingDisconnectTimer = null));
  }
  async _performAuth(t = null) {
    let s,
      a = !1;
    if (t) ((s = t), (a = !0));
    else if (this.accessToken)
      try {
        s = await this.accessToken();
      } catch (l) {
        (this.log("error", "Error fetching access token from callback", l),
          (s = this.accessTokenValue));
      }
    else s = this.accessTokenValue;
    (a ? (this._manuallySetToken = !0) : this.accessToken && (this._manuallySetToken = !1),
      this.accessTokenValue != s &&
        ((this.accessTokenValue = s),
        this.channels.forEach((l) => {
          const u = { access_token: s, version: B1 };
          (s && l.updateJoinPayload(u),
            l.joinedOnce &&
              l.channelAdapter.isJoined() &&
              l.channelAdapter.push(tb.access_token, { access_token: s }));
        })));
  }
  async _waitForAuthIfNeeded() {
    this._authPromise && (await this._authPromise);
  }
  _setAuthSafely(t = "general") {
    this._isManualToken() ||
      this.setAuth().catch((s) => {
        this.log("error", `Error setting auth in ${t}`, s);
      });
  }
  _setupConnectionHandlers() {
    (this.socketAdapter.onOpen(() => {
      ((
        this._authPromise ||
        (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())
      ).catch((s) => {
        this.log("error", "error waiting for auth on connect", s);
      }),
        this.worker && !this.workerRef && this._startWorkerHeartbeat());
    }),
      this.socketAdapter.onClose(() => {
        this.worker && this.workerRef && this._terminateWorker();
      }),
      this.socketAdapter.onMessage((t) => {
        t.ref &&
          t.ref === this._pendingWorkerHeartbeatRef &&
          (this._pendingWorkerHeartbeatRef = null);
      }));
  }
  _handleNodeJsRaceCondition() {
    this.socketAdapter.isConnected() && this.socketAdapter.getSocket().onConnOpen();
  }
  _wrapHeartbeatCallback(t) {
    return (s, a) => {
      (s == "sent" && this._setAuthSafely(), t && t(s, a));
    };
  }
  _startWorkerHeartbeat() {
    this.workerUrl
      ? this.log("worker", `starting worker for from ${this.workerUrl}`)
      : this.log("worker", "starting default worker");
    const t = this._workerObjectUrl(this.workerUrl);
    ((this.workerRef = new Worker(t)),
      (this.workerRef.onerror = (s) => {
        (this.log("worker", "worker error", s.message), this._terminateWorker(), this.disconnect());
      }),
      (this.workerRef.onmessage = (s) => {
        s.data.event === "keepAlive" && this.sendHeartbeat();
      }),
      this.workerRef.postMessage({ event: "start", interval: this.heartbeatIntervalMs }));
  }
  _terminateWorker() {
    this.workerRef &&
      (this.log("worker", "terminating worker"),
      this.workerRef.terminate(),
      (this.workerRef = void 0));
  }
  _workerObjectUrl(t) {
    let s;
    if (t) s = t;
    else {
      const a = new Blob([yO], { type: "application/javascript" });
      s = URL.createObjectURL(a);
    }
    return s;
  }
  _initializeOptions(t) {
    var s, a, l, u, c, d, p, g, y, m, b, _;
    ((this.worker = (s = t?.worker) !== null && s !== void 0 ? s : !1),
      (this.accessToken = (a = t?.accessToken) !== null && a !== void 0 ? a : null));
    const w = {};
    ((w.timeout = (l = t?.timeout) !== null && l !== void 0 ? l : q1),
      (w.heartbeatIntervalMs =
        (u = t?.heartbeatIntervalMs) !== null && u !== void 0 ? u : iv.HEARTBEAT_INTERVAL),
      (this._disconnectOnEmptyChannelsAfterMs =
        (c = t?.disconnectOnEmptyChannelsAfterMs) !== null && c !== void 0
          ? c
          : 2 *
            ((d = t?.heartbeatIntervalMs) !== null && d !== void 0 ? d : iv.HEARTBEAT_INTERVAL)),
      (w.transport =
        (p = t?.transport) !== null && p !== void 0 ? p : P1.getWebSocketConstructor()),
      (w.params = t?.params),
      (w.logger = t?.logger),
      (w.heartbeatCallback = this._wrapHeartbeatCallback(t?.heartbeatCallback)),
      (w.sessionStorage = (g = t?.sessionStorage) !== null && g !== void 0 ? g : mO()),
      (w.reconnectAfterMs =
        (y = t?.reconnectAfterMs) !== null && y !== void 0 ? y : (M) => dO[M - 1] || pO));
    let A, E;
    const O = (m = t?.vsn) !== null && m !== void 0 ? m : I1;
    switch (O) {
      case H1:
        ((A = (M, j) => j(JSON.stringify(M))), (E = (M, j) => j(JSON.parse(M))));
        break;
      case eb:
        ((A = this.serializer.encode.bind(this.serializer)),
          (E = this.serializer.decode.bind(this.serializer)));
        break;
      default:
        throw new Error(`Unsupported serializer version: ${w.vsn}`);
    }
    if (
      ((w.vsn = O),
      (w.encode = (b = t?.encode) !== null && b !== void 0 ? b : A),
      (w.decode = (_ = t?.decode) !== null && _ !== void 0 ? _ : E),
      (w.beforeReconnect = this._reconnectAuth.bind(this)),
      (t?.logLevel || t?.log_level) &&
        ((this.logLevel = t.logLevel || t.log_level),
        (w.params = Object.assign(Object.assign({}, w.params), { log_level: this.logLevel }))),
      this.worker)
    ) {
      if (typeof window < "u" && !window.Worker) throw new Error("Web Worker is not supported");
      ((this.workerUrl = t?.workerUrl), (w.autoSendHeartbeat = !this.worker));
    }
    return w;
  }
  async _reconnectAuth() {
    (await this._waitForAuthIfNeeded(), this.isConnected() || this.connect());
  }
}
var Ga = class extends Error {
  constructor(e, t) {
    (super(e),
      (this.name = "IcebergError"),
      (this.status = t.status),
      (this.icebergType = t.icebergType),
      (this.icebergCode = t.icebergCode),
      (this.details = t.details),
      (this.isCommitStateUnknown =
        t.icebergType === "CommitStateUnknownException" ||
        ([500, 502, 504].includes(t.status) && t.icebergType?.includes("CommitState") === !0)));
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function bO(e, t, s) {
  const a = new URL(t, e);
  if (s) for (const [l, u] of Object.entries(s)) u !== void 0 && a.searchParams.set(l, u);
  return a.toString();
}
async function _O(e) {
  return !e || e.type === "none"
    ? {}
    : e.type === "bearer"
      ? { Authorization: `Bearer ${e.token}` }
      : e.type === "header"
        ? { [e.name]: e.value }
        : e.type === "custom"
          ? await e.getHeaders()
          : {};
}
function SO(e) {
  const t = e.fetchImpl ?? globalThis.fetch;
  return {
    async request({ method: s, path: a, query: l, body: u, headers: c }) {
      const d = bO(e.baseUrl, a, l),
        p = await _O(e.auth),
        g = await t(d, {
          method: s,
          headers: { ...(u ? { "Content-Type": "application/json" } : {}), ...p, ...c },
          body: u ? JSON.stringify(u) : void 0,
        }),
        y = await g.text(),
        m = (g.headers.get("content-type") || "").includes("application/json"),
        b = m && y ? JSON.parse(y) : y;
      if (!g.ok) {
        const _ = m ? b : void 0,
          w = _?.error;
        throw new Ga(w?.message ?? `Request failed with status ${g.status}`, {
          status: g.status,
          icebergType: w?.type,
          icebergCode: w?.code,
          details: _,
        });
      }
      return { status: g.status, headers: g.headers, data: b };
    },
  };
}
function jl(e) {
  return e.join("");
}
var wO = class {
  constructor(e, t = "") {
    ((this.client = e), (this.prefix = t));
  }
  async listNamespaces(e) {
    const t = e ? { parent: jl(e.namespace) } : void 0;
    return (
      await this.client.request({ method: "GET", path: `${this.prefix}/namespaces`, query: t })
    ).data.namespaces.map((a) => ({ namespace: a }));
  }
  async createNamespace(e, t) {
    const s = { namespace: e.namespace, properties: t?.properties };
    return (
      await this.client.request({ method: "POST", path: `${this.prefix}/namespaces`, body: s })
    ).data;
  }
  async dropNamespace(e) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${jl(e.namespace)}`,
    });
  }
  async loadNamespaceMetadata(e) {
    return {
      properties: (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${jl(e.namespace)}`,
        })
      ).data.properties,
    };
  }
  async namespaceExists(e) {
    try {
      return (
        await this.client.request({
          method: "HEAD",
          path: `${this.prefix}/namespaces/${jl(e.namespace)}`,
        }),
        !0
      );
    } catch (t) {
      if (t instanceof Ga && t.status === 404) return !1;
      throw t;
    }
  }
  async createNamespaceIfNotExists(e, t) {
    try {
      return await this.createNamespace(e, t);
    } catch (s) {
      if (s instanceof Ga && s.status === 409) return;
      throw s;
    }
  }
};
function ci(e) {
  return e.join("");
}
var EO = class {
    constructor(e, t = "", s) {
      ((this.client = e), (this.prefix = t), (this.accessDelegation = s));
    }
    async listTables(e) {
      return (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${ci(e.namespace)}/tables`,
        })
      ).data.identifiers;
    }
    async createTable(e, t) {
      const s = {};
      return (
        this.accessDelegation && (s["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${ci(e.namespace)}/tables`,
            body: t,
            headers: s,
          })
        ).data.metadata
      );
    }
    async updateTable(e, t) {
      const s = await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces/${ci(e.namespace)}/tables/${e.name}`,
        body: t,
      });
      return { "metadata-location": s.data["metadata-location"], metadata: s.data.metadata };
    }
    async dropTable(e, t) {
      await this.client.request({
        method: "DELETE",
        path: `${this.prefix}/namespaces/${ci(e.namespace)}/tables/${e.name}`,
        query: { purgeRequested: String(t?.purge ?? !1) },
      });
    }
    async loadTable(e) {
      const t = {};
      return (
        this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${ci(e.namespace)}/tables/${e.name}`,
            headers: t,
          })
        ).data.metadata
      );
    }
    async tableExists(e) {
      const t = {};
      this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation);
      try {
        return (
          await this.client.request({
            method: "HEAD",
            path: `${this.prefix}/namespaces/${ci(e.namespace)}/tables/${e.name}`,
            headers: t,
          }),
          !0
        );
      } catch (s) {
        if (s instanceof Ga && s.status === 404) return !1;
        throw s;
      }
    }
    async createTableIfNotExists(e, t) {
      try {
        return await this.createTable(e, t);
      } catch (s) {
        if (s instanceof Ga && s.status === 409)
          return await this.loadTable({ namespace: e.namespace, name: t.name });
        throw s;
      }
    }
  },
  TO = class {
    constructor(e) {
      let t = "v1";
      e.catalogName && (t += `/${e.catalogName}`);
      const s = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
      ((this.client = SO({ baseUrl: s, auth: e.auth, fetchImpl: e.fetch })),
        (this.accessDelegation = e.accessDelegation?.join(",")),
        (this.namespaceOps = new wO(this.client, t)),
        (this.tableOps = new EO(this.client, t, this.accessDelegation)));
    }
    async listNamespaces(e) {
      return this.namespaceOps.listNamespaces(e);
    }
    async createNamespace(e, t) {
      return this.namespaceOps.createNamespace(e, t);
    }
    async dropNamespace(e) {
      await this.namespaceOps.dropNamespace(e);
    }
    async loadNamespaceMetadata(e) {
      return this.namespaceOps.loadNamespaceMetadata(e);
    }
    async listTables(e) {
      return this.tableOps.listTables(e);
    }
    async createTable(e, t) {
      return this.tableOps.createTable(e, t);
    }
    async updateTable(e, t) {
      return this.tableOps.updateTable(e, t);
    }
    async dropTable(e, t) {
      await this.tableOps.dropTable(e, t);
    }
    async loadTable(e) {
      return this.tableOps.loadTable(e);
    }
    async namespaceExists(e) {
      return this.namespaceOps.namespaceExists(e);
    }
    async tableExists(e) {
      return this.tableOps.tableExists(e);
    }
    async createNamespaceIfNotExists(e, t) {
      return this.namespaceOps.createNamespaceIfNotExists(e, t);
    }
    async createTableIfNotExists(e, t) {
      return this.tableOps.createTableIfNotExists(e, t);
    }
  };
function Va(e) {
  "@babel/helpers - typeof";
  return (
    (Va =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Va(e)
  );
}
function RO(e, t) {
  if (Va(e) != "object" || !e) return e;
  var s = e[Symbol.toPrimitive];
  if (s !== void 0) {
    var a = s.call(e, t);
    if (Va(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function AO(e) {
  var t = RO(e, "string");
  return Va(t) == "symbol" ? t : t + "";
}
function OO(e, t, s) {
  return (
    (t = AO(t)) in e
      ? Object.defineProperty(e, t, { value: s, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = s),
    e
  );
}
function av(e, t) {
  var s = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      s.push.apply(s, a));
  }
  return s;
}
function ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var s = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? av(Object(s), !0).forEach(function (a) {
          OO(e, a, s[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
        : av(Object(s)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a));
          });
  }
  return e;
}
var yu = class extends Error {
  constructor(e, t = "storage", s, a) {
    (super(e),
      (this.__isStorageError = !0),
      (this.namespace = t),
      (this.name = t === "vectors" ? "StorageVectorsError" : "StorageError"),
      (this.status = s),
      (this.statusCode = a));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode,
    };
  }
};
function vu(e) {
  return typeof e == "object" && e !== null && "__isStorageError" in e;
}
var Ef = class extends yu {
    constructor(e, t, s, a = "storage") {
      (super(e, a, t, s),
        (this.name = a === "vectors" ? "StorageVectorsApiError" : "StorageApiError"),
        (this.status = t),
        (this.statusCode = s));
    }
    toJSON() {
      return ce({}, super.toJSON());
    }
  },
  ib = class extends yu {
    constructor(e, t, s = "storage") {
      (super(e, s),
        (this.name = s === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError"),
        (this.originalError = t));
    }
  };
function eu(e, t, s) {
  const a = ce({}, e),
    l = t.toLowerCase();
  for (const u of Object.keys(a)) u.toLowerCase() === l && delete a[u];
  return ((a[l] = s), a);
}
function CO(e) {
  const t = {};
  for (const [s, a] of Object.entries(e)) t[s.toLowerCase()] = a;
  return t;
}
const xO = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  kO = (e) => {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getPrototypeOf(e);
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Tf = (e) => {
    if (Array.isArray(e)) return e.map((s) => Tf(s));
    if (typeof e == "function" || e !== Object(e)) return e;
    const t = {};
    return (
      Object.entries(e).forEach(([s, a]) => {
        const l = s.replace(/([-_][a-z])/gi, (u) => u.toUpperCase().replace(/[-_]/g, ""));
        t[l] = Tf(a);
      }),
      t
    );
  },
  jO = (e) =>
    !e ||
    typeof e != "string" ||
    e.length === 0 ||
    e.length > 100 ||
    e.trim() !== e ||
    e.includes("/") ||
    e.includes("\\")
      ? !1
      : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e),
  ov = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = e;
      if (typeof t.msg == "string") return t.msg;
      if (typeof t.message == "string") return t.message;
      if (typeof t.error_description == "string") return t.error_description;
      if (typeof t.error == "string") return t.error;
      if (typeof t.error == "object" && t.error !== null) {
        const s = t.error;
        if (typeof s.message == "string") return s.message;
      }
    }
    return JSON.stringify(e);
  },
  MO = async (e, t, s, a) => {
    if (e !== null && typeof e == "object" && "json" in e && typeof e.json == "function") {
      const l = e;
      let u = parseInt(String(l.status), 10);
      (Number.isFinite(u) || (u = 500),
        l
          .json()
          .then((c) => {
            const d = c?.statusCode || c?.code || u + "";
            t(new Ef(ov(c), u, d, a));
          })
          .catch(() => {
            const c = u + "";
            t(new Ef(l.statusText || `HTTP ${u} error`, u, c, a));
          }));
    } else t(new ib(ov(e), e, a));
  },
  DO = (e, t, s, a) => {
    const l = { method: e, headers: t?.headers || {} };
    if (e === "GET" || e === "HEAD" || !a) return ce(ce({}, l), s);
    if (kO(a)) {
      var u;
      const c = t?.headers || {};
      let d;
      for (const [p, g] of Object.entries(c)) p.toLowerCase() === "content-type" && (d = g);
      ((l.headers = eu(
        c,
        "Content-Type",
        (u = d) !== null && u !== void 0 ? u : "application/json",
      )),
        (l.body = JSON.stringify(a)));
    } else l.body = a;
    return (t?.duplex && (l.duplex = t.duplex), ce(ce({}, l), s));
  };
async function xa(e, t, s, a, l, u, c) {
  return new Promise((d, p) => {
    e(s, DO(t, a, l, u))
      .then((g) => {
        if (!g.ok) throw g;
        if (a?.noResolveJson) return g;
        if (c === "vectors") {
          const y = g.headers.get("content-type");
          if (g.headers.get("content-length") === "0" || g.status === 204) return {};
          if (!y || !y.includes("application/json")) return {};
        }
        return g.json();
      })
      .then((g) => d(g))
      .catch((g) => MO(g, p, a, c));
  });
}
function ab(e = "storage") {
  return {
    get: async (t, s, a, l) => xa(t, "GET", s, a, l, void 0, e),
    post: async (t, s, a, l, u) => xa(t, "POST", s, l, u, a, e),
    put: async (t, s, a, l, u) => xa(t, "PUT", s, l, u, a, e),
    head: async (t, s, a, l) =>
      xa(t, "HEAD", s, ce(ce({}, a), {}, { noResolveJson: !0 }), l, void 0, e),
    remove: async (t, s, a, l, u) => xa(t, "DELETE", s, l, u, a, e),
  };
}
const UO = ab("storage"),
  { get: Ka, post: un, put: Rf, head: LO, remove: Qf } = UO,
  Vt = ab("vectors");
var Ri = class {
  constructor(e, t = {}, s, a = "storage") {
    ((this.shouldThrowOnError = !1),
      (this.url = e),
      (this.headers = CO(t)),
      (this.fetch = xO(s)),
      (this.namespace = a));
  }
  throwOnError() {
    return ((this.shouldThrowOnError = !0), this);
  }
  setHeader(e, t) {
    return ((this.headers = eu(this.headers, e, t)), this);
  }
  async handleOperation(e) {
    var t = this;
    try {
      return { data: await e(), error: null };
    } catch (s) {
      if (t.shouldThrowOnError) throw s;
      if (vu(s)) return { data: null, error: s };
      throw s;
    }
  }
};
let ob;
ob = Symbol.toStringTag;
var NO = class {
  constructor(e, t) {
    ((this.downloadFn = e),
      (this.shouldThrowOnError = t),
      (this[ob] = "StreamDownloadBuilder"),
      (this.promise = null));
  }
  then(e, t) {
    return this.getPromise().then(e, t);
  }
  catch(e) {
    return this.getPromise().catch(e);
  }
  finally(e) {
    return this.getPromise().finally(e);
  }
  getPromise() {
    return (this.promise || (this.promise = this.execute()), this.promise);
  }
  async execute() {
    var e = this;
    try {
      return { data: (await e.downloadFn()).body, error: null };
    } catch (t) {
      if (e.shouldThrowOnError) throw t;
      if (vu(t)) return { data: null, error: t };
      throw t;
    }
  }
};
let lb;
lb = Symbol.toStringTag;
var PO = class {
  constructor(e, t) {
    ((this.downloadFn = e),
      (this.shouldThrowOnError = t),
      (this[lb] = "BlobDownloadBuilder"),
      (this.promise = null));
  }
  asStream() {
    return new NO(this.downloadFn, this.shouldThrowOnError);
  }
  then(e, t) {
    return this.getPromise().then(e, t);
  }
  catch(e) {
    return this.getPromise().catch(e);
  }
  finally(e) {
    return this.getPromise().finally(e);
  }
  getPromise() {
    return (this.promise || (this.promise = this.execute()), this.promise);
  }
  async execute() {
    var e = this;
    try {
      return { data: await (await e.downloadFn()).blob(), error: null };
    } catch (t) {
      if (e.shouldThrowOnError) throw t;
      if (vu(t)) return { data: null, error: t };
      throw t;
    }
  }
};
const zO = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  lv = { cacheControl: "3600", contentType: "text/plain;charset=UTF-8", upsert: !1 };
var BO = class extends Ri {
  constructor(e, t = {}, s, a) {
    (super(e, t, a, "storage"), (this.bucketId = s));
  }
  async uploadOrUpdate(e, t, s, a) {
    var l = this;
    return l.handleOperation(async () => {
      let u;
      const c = ce(ce({}, lv), a);
      let d = ce(ce({}, l.headers), e === "POST" && { "x-upsert": String(c.upsert) });
      const p = c.metadata;
      if (
        (typeof Blob < "u" && s instanceof Blob
          ? ((u = new FormData()),
            u.append("cacheControl", c.cacheControl),
            p && u.append("metadata", l.encodeMetadata(p)),
            u.append("", s))
          : typeof FormData < "u" && s instanceof FormData
            ? ((u = s),
              u.has("cacheControl") || u.append("cacheControl", c.cacheControl),
              p && !u.has("metadata") && u.append("metadata", l.encodeMetadata(p)))
            : ((u = s),
              (d["cache-control"] = `max-age=${c.cacheControl}`),
              (d["content-type"] = c.contentType),
              p && (d["x-metadata"] = l.toBase64(l.encodeMetadata(p))),
              ((typeof ReadableStream < "u" && u instanceof ReadableStream) ||
                (u && typeof u == "object" && "pipe" in u && typeof u.pipe == "function")) &&
                !c.duplex &&
                (c.duplex = "half")),
        a?.headers)
      )
        for (const [b, _] of Object.entries(a.headers)) d = eu(d, b, _);
      const g = l._removeEmptyFolders(t),
        y = l._getFinalPath(g),
        m = await (e == "PUT" ? Rf : un)(
          l.fetch,
          `${l.url}/object/${y}`,
          u,
          ce({ headers: d }, c?.duplex ? { duplex: c.duplex } : {}),
        );
      return { path: g, id: m.Id, fullPath: m.Key };
    });
  }
  async upload(e, t, s) {
    return this.uploadOrUpdate("POST", e, t, s);
  }
  async uploadToSignedUrl(e, t, s, a) {
    var l = this;
    const u = l._removeEmptyFolders(e),
      c = l._getFinalPath(u),
      d = new URL(l.url + `/object/upload/sign/${c}`);
    return (
      d.searchParams.set("token", t),
      l.handleOperation(async () => {
        let p;
        const g = ce(ce({}, lv), a);
        let y = ce(ce({}, l.headers), { "x-upsert": String(g.upsert) });
        const m = g.metadata;
        if (
          (typeof Blob < "u" && s instanceof Blob
            ? ((p = new FormData()),
              p.append("cacheControl", g.cacheControl),
              m && p.append("metadata", l.encodeMetadata(m)),
              p.append("", s))
            : typeof FormData < "u" && s instanceof FormData
              ? ((p = s),
                p.has("cacheControl") || p.append("cacheControl", g.cacheControl),
                m && !p.has("metadata") && p.append("metadata", l.encodeMetadata(m)))
              : ((p = s),
                (y["cache-control"] = `max-age=${g.cacheControl}`),
                (y["content-type"] = g.contentType),
                m && (y["x-metadata"] = l.toBase64(l.encodeMetadata(m))),
                ((typeof ReadableStream < "u" && p instanceof ReadableStream) ||
                  (p && typeof p == "object" && "pipe" in p && typeof p.pipe == "function")) &&
                  !g.duplex &&
                  (g.duplex = "half")),
          a?.headers)
        )
          for (const [b, _] of Object.entries(a.headers)) y = eu(y, b, _);
        return {
          path: u,
          fullPath: (
            await Rf(
              l.fetch,
              d.toString(),
              p,
              ce({ headers: y }, g?.duplex ? { duplex: g.duplex } : {}),
            )
          ).Key,
        };
      })
    );
  }
  async createSignedUploadUrl(e, t) {
    var s = this;
    return s.handleOperation(async () => {
      let a = s._getFinalPath(e);
      const l = ce({}, s.headers);
      t?.upsert && (l["x-upsert"] = "true");
      const u = await un(s.fetch, `${s.url}/object/upload/sign/${a}`, {}, { headers: l }),
        c = new URL(s.url + u.url),
        d = c.searchParams.get("token");
      if (!d) throw new yu("No token returned by API");
      return { signedUrl: c.toString(), path: e, token: d };
    });
  }
  async update(e, t, s) {
    return this.uploadOrUpdate("PUT", e, t, s);
  }
  async move(e, t, s) {
    var a = this;
    return a.handleOperation(
      async () =>
        await un(
          a.fetch,
          `${a.url}/object/move`,
          {
            bucketId: a.bucketId,
            sourceKey: e,
            destinationKey: t,
            destinationBucket: s?.destinationBucket,
          },
          { headers: a.headers },
        ),
    );
  }
  async copy(e, t, s) {
    var a = this;
    return a.handleOperation(async () => ({
      path: (
        await un(
          a.fetch,
          `${a.url}/object/copy`,
          {
            bucketId: a.bucketId,
            sourceKey: e,
            destinationKey: t,
            destinationBucket: s?.destinationBucket,
          },
          { headers: a.headers },
        )
      ).Key,
    }));
  }
  async createSignedUrl(e, t, s) {
    var a = this;
    return a.handleOperation(async () => {
      let l = a._getFinalPath(e);
      const u =
        typeof s?.transform == "object" &&
        s.transform !== null &&
        Object.keys(s.transform).length > 0;
      let c = await un(
        a.fetch,
        `${a.url}/object/sign/${l}`,
        ce({ expiresIn: t }, u ? { transform: s.transform } : {}),
        { headers: a.headers },
      );
      const d = new URLSearchParams();
      (s?.download && d.set("download", s.download === !0 ? "" : s.download),
        s?.cacheNonce != null && d.set("cacheNonce", String(s.cacheNonce)));
      const p = d.toString();
      return { signedUrl: encodeURI(`${a.url}${c.signedURL}${p ? `&${p}` : ""}`) };
    });
  }
  async createSignedUrls(e, t, s) {
    var a = this;
    return a.handleOperation(async () => {
      const l = await un(
          a.fetch,
          `${a.url}/object/sign/${a.bucketId}`,
          { expiresIn: t, paths: e },
          { headers: a.headers },
        ),
        u = new URLSearchParams();
      (s?.download && u.set("download", s.download === !0 ? "" : s.download),
        s?.cacheNonce != null && u.set("cacheNonce", String(s.cacheNonce)));
      const c = u.toString();
      return l.map((d) =>
        ce(
          ce({}, d),
          {},
          {
            signedUrl: d.signedURL ? encodeURI(`${a.url}${d.signedURL}${c ? `&${c}` : ""}`) : null,
          },
        ),
      );
    });
  }
  download(e, t, s) {
    const a =
        typeof t?.transform == "object" &&
        t.transform !== null &&
        Object.keys(t.transform).length > 0
          ? "render/image/authenticated"
          : "object",
      l = new URLSearchParams();
    (t?.transform && this.applyTransformOptsToQuery(l, t.transform),
      t?.cacheNonce != null && l.set("cacheNonce", String(t.cacheNonce)));
    const u = l.toString(),
      c = this._getFinalPath(e),
      d = () =>
        Ka(
          this.fetch,
          `${this.url}/${a}/${c}${u ? `?${u}` : ""}`,
          { headers: this.headers, noResolveJson: !0 },
          s,
        );
    return new PO(d, this.shouldThrowOnError);
  }
  async info(e) {
    var t = this;
    const s = t._getFinalPath(e);
    return t.handleOperation(async () =>
      Tf(await Ka(t.fetch, `${t.url}/object/info/${s}`, { headers: t.headers })),
    );
  }
  async exists(e) {
    var t = this;
    const s = t._getFinalPath(e);
    try {
      return (
        await LO(t.fetch, `${t.url}/object/${s}`, { headers: t.headers }),
        { data: !0, error: null }
      );
    } catch (l) {
      if (t.shouldThrowOnError) throw l;
      if (vu(l)) {
        var a;
        const u =
          l instanceof Ef
            ? l.status
            : l instanceof ib
              ? (a = l.originalError) === null || a === void 0
                ? void 0
                : a.status
              : void 0;
        if (u !== void 0 && [400, 404].includes(u)) return { data: !1, error: l };
      }
      throw l;
    }
  }
  getPublicUrl(e, t) {
    const s = this._getFinalPath(e),
      a = new URLSearchParams();
    (t?.download && a.set("download", t.download === !0 ? "" : t.download),
      t?.transform && this.applyTransformOptsToQuery(a, t.transform),
      t?.cacheNonce != null && a.set("cacheNonce", String(t.cacheNonce)));
    const l = a.toString(),
      u =
        typeof t?.transform == "object" &&
        t.transform !== null &&
        Object.keys(t.transform).length > 0
          ? "render/image"
          : "object";
    return { data: { publicUrl: encodeURI(`${this.url}/${u}/public/${s}`) + (l ? `?${l}` : "") } };
  }
  async remove(e) {
    var t = this;
    return t.handleOperation(
      async () =>
        await Qf(t.fetch, `${t.url}/object/${t.bucketId}`, { prefixes: e }, { headers: t.headers }),
    );
  }
  async list(e, t, s) {
    var a = this;
    return a.handleOperation(async () => {
      const l = ce(ce(ce({}, zO), t), {}, { prefix: e || "" });
      return await un(a.fetch, `${a.url}/object/list/${a.bucketId}`, l, { headers: a.headers }, s);
    });
  }
  async listV2(e, t) {
    var s = this;
    return s.handleOperation(async () => {
      const a = ce({}, e);
      return await un(
        s.fetch,
        `${s.url}/object/list-v2/${s.bucketId}`,
        a,
        { headers: s.headers },
        t,
      );
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  applyTransformOptsToQuery(e, t) {
    return (
      t.width && e.set("width", t.width.toString()),
      t.height && e.set("height", t.height.toString()),
      t.resize && e.set("resize", t.resize),
      t.format && e.set("format", t.format),
      t.quality && e.set("quality", t.quality.toString()),
      e
    );
  }
};
const HO = "2.107.0",
  to = { "X-Client-Info": `storage-js/${HO}` };
var IO = class extends Ri {
    constructor(e, t = {}, s, a) {
      const l = new URL(e);
      a?.useNewHostname &&
        /supabase\.(co|in|red)$/.test(l.hostname) &&
        !l.hostname.includes("storage.supabase.") &&
        (l.hostname = l.hostname.replace("supabase.", "storage.supabase."));
      const u = l.href.replace(/\/$/, ""),
        c = ce(ce({}, to), t);
      super(u, c, s, "storage");
    }
    async listBuckets(e) {
      var t = this;
      return t.handleOperation(async () => {
        const s = t.listBucketOptionsToQueryString(e);
        return await Ka(t.fetch, `${t.url}/bucket${s}`, { headers: t.headers });
      });
    }
    async getBucket(e) {
      var t = this;
      return t.handleOperation(
        async () => await Ka(t.fetch, `${t.url}/bucket/${e}`, { headers: t.headers }),
      );
    }
    async createBucket(e, t = { public: !1 }) {
      var s = this;
      return s.handleOperation(
        async () =>
          await un(
            s.fetch,
            `${s.url}/bucket`,
            {
              id: e,
              name: e,
              type: t.type,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: s.headers },
          ),
      );
    }
    async updateBucket(e, t) {
      var s = this;
      return s.handleOperation(
        async () =>
          await Rf(
            s.fetch,
            `${s.url}/bucket/${e}`,
            {
              id: e,
              name: e,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: s.headers },
          ),
      );
    }
    async emptyBucket(e) {
      var t = this;
      return t.handleOperation(
        async () => await un(t.fetch, `${t.url}/bucket/${e}/empty`, {}, { headers: t.headers }),
      );
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () => await Qf(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }),
      );
    }
    listBucketOptionsToQueryString(e) {
      const t = {};
      return (
        e &&
          ("limit" in e && (t.limit = String(e.limit)),
          "offset" in e && (t.offset = String(e.offset)),
          e.search && (t.search = e.search),
          e.sortColumn && (t.sortColumn = e.sortColumn),
          e.sortOrder && (t.sortOrder = e.sortOrder)),
        Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : ""
      );
    }
  },
  qO = class extends Ri {
    constructor(e, t = {}, s) {
      const a = e.replace(/\/$/, ""),
        l = ce(ce({}, to), t);
      super(a, l, s, "storage");
    }
    async createBucket(e) {
      var t = this;
      return t.handleOperation(
        async () => await un(t.fetch, `${t.url}/bucket`, { name: e }, { headers: t.headers }),
      );
    }
    async listBuckets(e) {
      var t = this;
      return t.handleOperation(async () => {
        const s = new URLSearchParams();
        (e?.limit !== void 0 && s.set("limit", e.limit.toString()),
          e?.offset !== void 0 && s.set("offset", e.offset.toString()),
          e?.sortColumn && s.set("sortColumn", e.sortColumn),
          e?.sortOrder && s.set("sortOrder", e.sortOrder),
          e?.search && s.set("search", e.search));
        const a = s.toString(),
          l = a ? `${t.url}/bucket?${a}` : `${t.url}/bucket`;
        return await Ka(t.fetch, l, { headers: t.headers });
      });
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () => await Qf(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }),
      );
    }
    from(e) {
      var t = this;
      if (!jO(e))
        throw new yu(
          "Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.",
        );
      const s = new TO({
          baseUrl: this.url,
          catalogName: e,
          auth: { type: "custom", getHeaders: async () => t.headers },
          fetch: this.fetch,
        }),
        a = this.shouldThrowOnError;
      return new Proxy(s, {
        get(l, u) {
          const c = l[u];
          return typeof c != "function"
            ? c
            : async (...d) => {
                try {
                  return { data: await c.apply(l, d), error: null };
                } catch (p) {
                  if (a) throw p;
                  return { data: null, error: p };
                }
              };
        },
      });
    }
  },
  $O = class extends Ri {
    constructor(e, t = {}, s) {
      const a = e.replace(/\/$/, ""),
        l = ce(ce({}, to), {}, { "Content-Type": "application/json" }, t);
      super(a, l, s, "vectors");
    }
    async createIndex(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await Vt.post(t.fetch, `${t.url}/CreateIndex`, e, { headers: t.headers })) || {},
      );
    }
    async getIndex(e, t) {
      var s = this;
      return s.handleOperation(
        async () =>
          await Vt.post(
            s.fetch,
            `${s.url}/GetIndex`,
            { vectorBucketName: e, indexName: t },
            { headers: s.headers },
          ),
      );
    }
    async listIndexes(e) {
      var t = this;
      return t.handleOperation(
        async () => await Vt.post(t.fetch, `${t.url}/ListIndexes`, e, { headers: t.headers }),
      );
    }
    async deleteIndex(e, t) {
      var s = this;
      return s.handleOperation(
        async () =>
          (await Vt.post(
            s.fetch,
            `${s.url}/DeleteIndex`,
            { vectorBucketName: e, indexName: t },
            { headers: s.headers },
          )) || {},
      );
    }
  },
  GO = class extends Ri {
    constructor(e, t = {}, s) {
      const a = e.replace(/\/$/, ""),
        l = ce(ce({}, to), {}, { "Content-Type": "application/json" }, t);
      super(a, l, s, "vectors");
    }
    async putVectors(e) {
      var t = this;
      if (e.vectors.length < 1 || e.vectors.length > 500)
        throw new Error("Vector batch size must be between 1 and 500 items");
      return t.handleOperation(
        async () =>
          (await Vt.post(t.fetch, `${t.url}/PutVectors`, e, { headers: t.headers })) || {},
      );
    }
    async getVectors(e) {
      var t = this;
      return t.handleOperation(
        async () => await Vt.post(t.fetch, `${t.url}/GetVectors`, e, { headers: t.headers }),
      );
    }
    async listVectors(e) {
      var t = this;
      if (e.segmentCount !== void 0) {
        if (e.segmentCount < 1 || e.segmentCount > 16)
          throw new Error("segmentCount must be between 1 and 16");
        if (e.segmentIndex !== void 0 && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount))
          throw new Error(`segmentIndex must be between 0 and ${e.segmentCount - 1}`);
      }
      return t.handleOperation(
        async () => await Vt.post(t.fetch, `${t.url}/ListVectors`, e, { headers: t.headers }),
      );
    }
    async queryVectors(e) {
      var t = this;
      return t.handleOperation(
        async () => await Vt.post(t.fetch, `${t.url}/QueryVectors`, e, { headers: t.headers }),
      );
    }
    async deleteVectors(e) {
      var t = this;
      if (e.keys.length < 1 || e.keys.length > 500)
        throw new Error("Keys batch size must be between 1 and 500 items");
      return t.handleOperation(
        async () =>
          (await Vt.post(t.fetch, `${t.url}/DeleteVectors`, e, { headers: t.headers })) || {},
      );
    }
  },
  VO = class extends Ri {
    constructor(e, t = {}, s) {
      const a = e.replace(/\/$/, ""),
        l = ce(ce({}, to), {}, { "Content-Type": "application/json" }, t);
      super(a, l, s, "vectors");
    }
    async createBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await Vt.post(
            t.fetch,
            `${t.url}/CreateVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          )) || {},
      );
    }
    async getBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Vt.post(
            t.fetch,
            `${t.url}/GetVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          ),
      );
    }
    async listBuckets(e = {}) {
      var t = this;
      return t.handleOperation(
        async () => await Vt.post(t.fetch, `${t.url}/ListVectorBuckets`, e, { headers: t.headers }),
      );
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await Vt.post(
            t.fetch,
            `${t.url}/DeleteVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          )) || {},
      );
    }
  },
  KO = class extends VO {
    constructor(e, t = {}) {
      super(e, t.headers || {}, t.fetch);
    }
    from(e) {
      return new FO(this.url, this.headers, e, this.fetch);
    }
    async createBucket(e) {
      var t = () => super.createBucket,
        s = this;
      return t().call(s, e);
    }
    async getBucket(e) {
      var t = () => super.getBucket,
        s = this;
      return t().call(s, e);
    }
    async listBuckets(e = {}) {
      var t = () => super.listBuckets,
        s = this;
      return t().call(s, e);
    }
    async deleteBucket(e) {
      var t = () => super.deleteBucket,
        s = this;
      return t().call(s, e);
    }
  },
  FO = class extends $O {
    constructor(e, t, s, a) {
      (super(e, t, a), (this.vectorBucketName = s));
    }
    async createIndex(e) {
      var t = () => super.createIndex,
        s = this;
      return t().call(s, ce(ce({}, e), {}, { vectorBucketName: s.vectorBucketName }));
    }
    async listIndexes(e = {}) {
      var t = () => super.listIndexes,
        s = this;
      return t().call(s, ce(ce({}, e), {}, { vectorBucketName: s.vectorBucketName }));
    }
    async getIndex(e) {
      var t = () => super.getIndex,
        s = this;
      return t().call(s, s.vectorBucketName, e);
    }
    async deleteIndex(e) {
      var t = () => super.deleteIndex,
        s = this;
      return t().call(s, s.vectorBucketName, e);
    }
    index(e) {
      return new QO(this.url, this.headers, this.vectorBucketName, e, this.fetch);
    }
  },
  QO = class extends GO {
    constructor(e, t, s, a, l) {
      (super(e, t, l), (this.vectorBucketName = s), (this.indexName = a));
    }
    async putVectors(e) {
      var t = () => super.putVectors,
        s = this;
      return t().call(
        s,
        ce(ce({}, e), {}, { vectorBucketName: s.vectorBucketName, indexName: s.indexName }),
      );
    }
    async getVectors(e) {
      var t = () => super.getVectors,
        s = this;
      return t().call(
        s,
        ce(ce({}, e), {}, { vectorBucketName: s.vectorBucketName, indexName: s.indexName }),
      );
    }
    async listVectors(e = {}) {
      var t = () => super.listVectors,
        s = this;
      return t().call(
        s,
        ce(ce({}, e), {}, { vectorBucketName: s.vectorBucketName, indexName: s.indexName }),
      );
    }
    async queryVectors(e) {
      var t = () => super.queryVectors,
        s = this;
      return t().call(
        s,
        ce(ce({}, e), {}, { vectorBucketName: s.vectorBucketName, indexName: s.indexName }),
      );
    }
    async deleteVectors(e) {
      var t = () => super.deleteVectors,
        s = this;
      return t().call(
        s,
        ce(ce({}, e), {}, { vectorBucketName: s.vectorBucketName, indexName: s.indexName }),
      );
    }
  },
  YO = class extends IO {
    constructor(e, t = {}, s, a) {
      super(e, t, s, a);
    }
    from(e) {
      return new BO(this.url, this.headers, e, this.fetch);
    }
    get vectors() {
      return new KO(this.url + "/vector", { headers: this.headers, fetch: this.fetch });
    }
    get analytics() {
      return new qO(this.url + "/iceberg", this.headers, this.fetch);
    }
  };
const ub = "2.107.0",
  Tr = 30 * 1e3,
  Ma = 3,
  Wh = Ma * Tr,
  JO = "http://localhost:9999",
  XO = "supabase.auth.token",
  ZO = { "X-Client-Info": `gotrue-js/${ub}` },
  Af = "X-Supabase-Api-Version",
  cb = { "2024-01-01": { timestamp: Date.parse("2024-01-01T00:00:00.0Z"), name: "2024-01-01" } },
  WO = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  eC = 600 * 1e3;
class Fa extends Error {
  constructor(t, s, a) {
    (super(t),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = s),
      (this.code = a));
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status, code: this.code };
  }
}
function Z(e) {
  return typeof e == "object" && e !== null && "__isAuthError" in e;
}
class tC extends Fa {
  constructor(t, s, a) {
    (super(t, s, a), (this.name = "AuthApiError"), (this.status = s), (this.code = a));
  }
}
function nC(e) {
  return Z(e) && e.name === "AuthApiError";
}
class cn extends Fa {
  constructor(t, s) {
    (super(t), (this.name = "AuthUnknownError"), (this.originalError = s));
  }
}
class Sn extends Fa {
  constructor(t, s, a, l) {
    (super(t, a, l), (this.name = s), (this.status = a));
  }
}
class ut extends Sn {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function Ml(e) {
  return Z(e) && e.name === "AuthSessionMissingError";
}
class hi extends Sn {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class Dl extends Sn {
  constructor(t) {
    super(t, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Ul extends Sn {
  constructor(t, s = null) {
    (super(t, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = s));
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
  }
}
function rC(e) {
  return Z(e) && e.name === "AuthImplicitGrantRedirectError";
}
class uv extends Sn {
  constructor(t, s = null) {
    (super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = s));
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
  }
}
class sC extends Sn {
  constructor() {
    super(
      "PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.",
      "AuthPKCECodeVerifierMissingError",
      400,
      "pkce_code_verifier_not_found",
    );
  }
}
class Of extends Sn {
  constructor(t, s) {
    super(t, "AuthRetryableFetchError", s, void 0);
  }
}
function ef(e) {
  return Z(e) && e.name === "AuthRetryableFetchError";
}
class cv extends Sn {
  constructor(
    t = "Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)",
  ) {
    super(t, "AuthRefreshDiscardedError", 409, void 0);
  }
}
function iC(e) {
  return Z(e) && e.name === "AuthRefreshDiscardedError";
}
class hv extends Sn {
  constructor(t, s, a) {
    (super(t, "AuthWeakPasswordError", s, "weak_password"), (this.reasons = a));
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { reasons: this.reasons });
  }
}
class tu extends Sn {
  constructor(t) {
    super(t, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const nu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),
  fv = ` 	
\r=`.split(""),
  aC = (() => {
    const e = new Array(128);
    for (let t = 0; t < e.length; t += 1) e[t] = -1;
    for (let t = 0; t < fv.length; t += 1) e[fv[t].charCodeAt(0)] = -2;
    for (let t = 0; t < nu.length; t += 1) e[nu[t].charCodeAt(0)] = t;
    return e;
  })();
function dv(e, t, s) {
  if (e !== null)
    for (t.queue = (t.queue << 8) | e, t.queuedBits += 8; t.queuedBits >= 6; ) {
      const a = (t.queue >> (t.queuedBits - 6)) & 63;
      (s(nu[a]), (t.queuedBits -= 6));
    }
  else if (t.queuedBits > 0)
    for (t.queue = t.queue << (6 - t.queuedBits), t.queuedBits = 6; t.queuedBits >= 6; ) {
      const a = (t.queue >> (t.queuedBits - 6)) & 63;
      (s(nu[a]), (t.queuedBits -= 6));
    }
}
function hb(e, t, s) {
  const a = aC[e];
  if (a > -1)
    for (t.queue = (t.queue << 6) | a, t.queuedBits += 6; t.queuedBits >= 8; )
      (s((t.queue >> (t.queuedBits - 8)) & 255), (t.queuedBits -= 8));
  else {
    if (a === -2) return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
  }
}
function pv(e) {
  const t = [],
    s = (c) => {
      t.push(String.fromCodePoint(c));
    },
    a = { utf8seq: 0, codepoint: 0 },
    l = { queue: 0, queuedBits: 0 },
    u = (c) => {
      uC(c, a, s);
    };
  for (let c = 0; c < e.length; c += 1) hb(e.charCodeAt(c), l, u);
  return t.join("");
}
function oC(e, t) {
  if (e <= 127) {
    t(e);
    return;
  } else if (e <= 2047) {
    (t(192 | (e >> 6)), t(128 | (e & 63)));
    return;
  } else if (e <= 65535) {
    (t(224 | (e >> 12)), t(128 | ((e >> 6) & 63)), t(128 | (e & 63)));
    return;
  } else if (e <= 1114111) {
    (t(240 | (e >> 18)), t(128 | ((e >> 12) & 63)), t(128 | ((e >> 6) & 63)), t(128 | (e & 63)));
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`);
}
function lC(e, t) {
  for (let s = 0; s < e.length; s += 1) {
    let a = e.charCodeAt(s);
    if (a > 55295 && a <= 56319) {
      const l = ((a - 55296) * 1024) & 65535;
      ((a = (((e.charCodeAt(s + 1) - 56320) & 65535) | l) + 65536), (s += 1));
    }
    oC(a, t);
  }
}
function uC(e, t, s) {
  if (t.utf8seq === 0) {
    if (e <= 127) {
      s(e);
      return;
    }
    for (let a = 1; a < 6; a += 1)
      if (((e >> (7 - a)) & 1) === 0) {
        t.utf8seq = a;
        break;
      }
    if (t.utf8seq === 2) t.codepoint = e & 31;
    else if (t.utf8seq === 3) t.codepoint = e & 15;
    else if (t.utf8seq === 4) t.codepoint = e & 7;
    else throw new Error("Invalid UTF-8 sequence");
    t.utf8seq -= 1;
  } else if (t.utf8seq > 0) {
    if (e <= 127) throw new Error("Invalid UTF-8 sequence");
    ((t.codepoint = (t.codepoint << 6) | (e & 63)),
      (t.utf8seq -= 1),
      t.utf8seq === 0 && s(t.codepoint));
  }
}
function Ei(e) {
  const t = [],
    s = { queue: 0, queuedBits: 0 },
    a = (l) => {
      t.push(l);
    };
  for (let l = 0; l < e.length; l += 1) hb(e.charCodeAt(l), s, a);
  return new Uint8Array(t);
}
function cC(e) {
  const t = [];
  return (lC(e, (s) => t.push(s)), new Uint8Array(t));
}
function ps(e) {
  const t = [],
    s = { queue: 0, queuedBits: 0 },
    a = (l) => {
      t.push(l);
    };
  return (e.forEach((l) => dv(l, s, a)), dv(null, s, a), t.join(""));
}
function hC(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function fC() {
  return Symbol("auth-callback");
}
const St = () => typeof window < "u" && typeof document < "u",
  us = { tested: !1, writable: !1 },
  fb = () => {
    if (!St()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (us.tested) return us.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
      (globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        (us.tested = !0),
        (us.writable = !0));
    } catch {
      ((us.tested = !0), (us.writable = !1));
    }
    return us.writable;
  };
function dC(e) {
  const t = {},
    s = new URL(e);
  if (s.hash && s.hash[0] === "#")
    try {
      new URLSearchParams(s.hash.substring(1)).forEach((l, u) => {
        t[u] = l;
      });
    } catch {}
  return (
    s.searchParams.forEach((a, l) => {
      t[l] = a;
    }),
    t
  );
}
const db = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  pC = (e) =>
    typeof e == "object" &&
    e !== null &&
    "status" in e &&
    "ok" in e &&
    "json" in e &&
    typeof e.json == "function",
  yi = async (e, t, s) => {
    await e.setItem(t, JSON.stringify(s));
  },
  Gn = async (e, t) => {
    const s = await e.getItem(t);
    if (!s) return null;
    try {
      return JSON.parse(s);
    } catch {
      return null;
    }
  },
  st = async (e, t) => {
    await e.removeItem(t);
  };
class bu {
  constructor() {
    this.promise = new bu.promiseConstructor((t, s) => {
      ((this.resolve = t), (this.reject = s));
    });
  }
}
bu.promiseConstructor = Promise;
function Ll(e) {
  const t = e.split(".");
  if (t.length !== 3) throw new tu("Invalid JWT structure");
  for (let a = 0; a < t.length; a++)
    if (!WO.test(t[a])) throw new tu("JWT not in base64url format");
  return {
    header: JSON.parse(pv(t[0])),
    payload: JSON.parse(pv(t[1])),
    signature: Ei(t[2]),
    raw: { header: t[0], payload: t[1] },
  };
}
async function gC(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function mC(e, t) {
  return new Promise((a, l) => {
    (async () => {
      for (let u = 0; u < 1 / 0; u++)
        try {
          const c = await e(u);
          if (!t(u, null, c)) {
            a(c);
            return;
          }
        } catch (c) {
          if (!t(u, c)) {
            l(c);
            return;
          }
        }
    })();
  });
}
function yC(e) {
  return ("0" + e.toString(16)).substr(-2);
}
function vC() {
  const t = new Uint32Array(56);
  if (typeof crypto > "u") {
    const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      a = s.length;
    let l = "";
    for (let u = 0; u < 56; u++) l += s.charAt(Math.floor(Math.random() * a));
    return l;
  }
  return (crypto.getRandomValues(t), Array.from(t, yC).join(""));
}
async function bC(e) {
  const s = new TextEncoder().encode(e),
    a = await crypto.subtle.digest("SHA-256", s),
    l = new Uint8Array(a);
  return Array.from(l)
    .map((u) => String.fromCharCode(u))
    .join("");
}
async function _C(e) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.",
      ),
      e
    );
  const s = await bC(e);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function fi(e, t, s = !1) {
  const a = vC();
  let l = a;
  (s && (l += "/recovery"), await yi(e, `${t}-code-verifier`, l));
  const u = await _C(a);
  return [u, a === u ? "plain" : "s256"];
}
const SC = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function wC(e) {
  const t = e.headers.get(Af);
  if (!t || !t.match(SC)) return null;
  try {
    return new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function EC(e) {
  if (!e) throw new Error("Missing exp claim");
  const t = Math.floor(Date.now() / 1e3);
  if (e <= t) throw new Error("JWT has expired");
}
function TC(e) {
  switch (e) {
    case "RS256":
      return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
    case "ES256":
      return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
    default:
      throw new Error("Invalid alg claim");
  }
}
const RC = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Vn(e) {
  if (!RC.test(e)) throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function ln(e) {
  if (!e.passkey)
    throw new Error(
      "@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).",
    );
}
function tf() {
  const e = {};
  return new Proxy(e, {
    get: (t, s) => {
      if (s === "__isUserNotAvailableProxy") return !0;
      if (typeof s == "symbol") {
        const a = s.toString();
        if (
          a === "Symbol(Symbol.toPrimitive)" ||
          a === "Symbol(Symbol.toStringTag)" ||
          a === "Symbol(util.inspect.custom)"
        )
          return;
      }
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${s}" property of the session object is not supported. Please use getUser() instead.`,
      );
    },
    set: (t, s) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
    deleteProperty: (t, s) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
  });
}
function AC(e, t) {
  return new Proxy(e, {
    get: (s, a, l) => {
      if (a === "__isInsecureUserWarningProxy") return !0;
      if (typeof a == "symbol") {
        const u = a.toString();
        if (
          u === "Symbol(Symbol.toPrimitive)" ||
          u === "Symbol(Symbol.toStringTag)" ||
          u === "Symbol(util.inspect.custom)" ||
          u === "Symbol(nodejs.util.inspect.custom)"
        )
          return Reflect.get(s, a, l);
      }
      return (
        !t.value &&
          typeof a == "string" &&
          (console.warn(
            "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.",
          ),
          (t.value = !0)),
        Reflect.get(s, a, l)
      );
    },
  });
}
function gv(e) {
  return JSON.parse(JSON.stringify(e));
}
const cs = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = e;
      if (typeof t.msg == "string") return t.msg;
      if (typeof t.message == "string") return t.message;
      if (typeof t.error_description == "string") return t.error_description;
      if (typeof t.error == "string") return t.error;
    }
    return JSON.stringify(e);
  },
  OC = [502, 503, 504, 520, 521, 522, 523, 524, 530];
async function mv(e) {
  var t;
  if (!pC(e)) throw new Of(cs(e), 0);
  if (OC.includes(e.status)) throw new Of(cs(e), e.status);
  let s;
  try {
    s = await e.json();
  } catch (u) {
    throw new cn(cs(u), u);
  }
  let a;
  const l = wC(e);
  if (
    (l &&
    l.getTime() >= cb["2024-01-01"].timestamp &&
    typeof s == "object" &&
    s &&
    typeof s.code == "string"
      ? (a = s.code)
      : typeof s == "object" && s && typeof s.error_code == "string" && (a = s.error_code),
    a)
  ) {
    if (a === "weak_password")
      throw new hv(
        cs(s),
        e.status,
        ((t = s.weak_password) === null || t === void 0 ? void 0 : t.reasons) || [],
      );
    if (a === "session_not_found") throw new ut();
  } else if (
    typeof s == "object" &&
    s &&
    typeof s.weak_password == "object" &&
    s.weak_password &&
    Array.isArray(s.weak_password.reasons) &&
    s.weak_password.reasons.length &&
    s.weak_password.reasons.reduce((u, c) => u && typeof c == "string", !0)
  )
    throw new hv(cs(s), e.status, s.weak_password.reasons);
  throw new tC(cs(s), e.status || 500, a);
}
const CC = (e, t, s, a) => {
  const l = { method: e, headers: t?.headers || {} };
  return e === "GET"
    ? l
    : ((l.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        t?.headers,
      )),
      (l.body = JSON.stringify(a)),
      Object.assign(Object.assign({}, l), s));
};
async function ne(e, t, s, a) {
  var l;
  const u = Object.assign({}, a?.headers);
  (u[Af] || (u[Af] = cb["2024-01-01"].name), a?.jwt && (u.Authorization = `Bearer ${a.jwt}`));
  const c = (l = a?.query) !== null && l !== void 0 ? l : {};
  a?.redirectTo && (c.redirect_to = a.redirectTo);
  const d = Object.keys(c).length ? "?" + new URLSearchParams(c).toString() : "",
    p = await xC(e, t, s + d, { headers: u, noResolveJson: a?.noResolveJson }, {}, a?.body);
  return a?.xform ? a?.xform(p) : { data: Object.assign({}, p), error: null };
}
async function xC(e, t, s, a, l, u) {
  const c = CC(t, a, l, u);
  let d;
  try {
    d = await e(s, Object.assign({}, c));
  } catch (p) {
    throw (console.error(p), new Of(cs(p), 0));
  }
  if ((d.ok || (await mv(d)), a?.noResolveJson)) return d;
  try {
    return await d.json();
  } catch (p) {
    await mv(p);
  }
}
function nn(e) {
  var t;
  let s = null;
  MC(e) && ((s = Object.assign({}, e)), e.expires_at || (s.expires_at = hC(e.expires_in)));
  const a = (t = e.user) !== null && t !== void 0 ? t : typeof e?.id == "string" ? e : null;
  return { data: { session: s, user: a }, error: null };
}
function yv(e) {
  const t = nn(e);
  return (
    !t.error &&
      e.weak_password &&
      typeof e.weak_password == "object" &&
      Array.isArray(e.weak_password.reasons) &&
      e.weak_password.reasons.length &&
      e.weak_password.message &&
      typeof e.weak_password.message == "string" &&
      e.weak_password.reasons.reduce((s, a) => s && typeof a == "string", !0) &&
      (t.data.weak_password = e.weak_password),
    t
  );
}
function Cr(e) {
  var t;
  return { data: { user: (t = e.user) !== null && t !== void 0 ? t : e }, error: null };
}
function kC(e) {
  return { data: e, error: null };
}
function jC(e) {
  const { action_link: t, email_otp: s, hashed_token: a, redirect_to: l, verification_type: u } = e,
    c = mu(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]),
    d = { action_link: t, email_otp: s, hashed_token: a, redirect_to: l, verification_type: u },
    p = Object.assign({}, c);
  return { data: { properties: d, user: p }, error: null };
}
function vv(e) {
  return e;
}
function MC(e) {
  return !!e.access_token && !!e.refresh_token && !!e.expires_in;
}
const nf = ["global", "local", "others"];
class DC {
  constructor({ url: t = "", headers: s = {}, fetch: a, experimental: l }) {
    ((this.url = t),
      (this.headers = s),
      (this.fetch = db(a)),
      (this.experimental = l ?? {}),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      }),
      (this.oauth = {
        listClients: this._listOAuthClients.bind(this),
        createClient: this._createOAuthClient.bind(this),
        getClient: this._getOAuthClient.bind(this),
        updateClient: this._updateOAuthClient.bind(this),
        deleteClient: this._deleteOAuthClient.bind(this),
        regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this),
      }),
      (this.customProviders = {
        listProviders: this._listCustomProviders.bind(this),
        createProvider: this._createCustomProvider.bind(this),
        getProvider: this._getCustomProvider.bind(this),
        updateProvider: this._updateCustomProvider.bind(this),
        deleteProvider: this._deleteCustomProvider.bind(this),
      }),
      (this.passkey = {
        listPasskeys: this._adminListPasskeys.bind(this),
        deletePasskey: this._adminDeletePasskey.bind(this),
      }));
  }
  async signOut(t, s = nf[0]) {
    if (nf.indexOf(s) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${nf.join(", ")}`);
    try {
      return (
        await ne(this.fetch, "POST", `${this.url}/logout?scope=${s}`, {
          headers: this.headers,
          jwt: t,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (a) {
      if (Z(a)) return { data: null, error: a };
      throw a;
    }
  }
  async inviteUserByEmail(t, s = {}) {
    try {
      return await ne(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: t, data: s.data },
        headers: this.headers,
        redirectTo: s.redirectTo,
        xform: Cr,
      });
    } catch (a) {
      if (Z(a)) return { data: { user: null }, error: a };
      throw a;
    }
  }
  async generateLink(t) {
    try {
      const { options: s } = t,
        a = mu(t, ["options"]),
        l = Object.assign(Object.assign({}, a), s);
      return (
        "newEmail" in a && ((l.new_email = a?.newEmail), delete l.newEmail),
        await ne(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: l,
          headers: this.headers,
          xform: jC,
          redirectTo: s?.redirectTo,
        })
      );
    } catch (s) {
      if (Z(s)) return { data: { properties: null, user: null }, error: s };
      throw s;
    }
  }
  async createUser(t) {
    try {
      return await ne(this.fetch, "POST", `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: Cr,
      });
    } catch (s) {
      if (Z(s)) return { data: { user: null }, error: s };
      throw s;
    }
  }
  async listUsers(t) {
    var s, a, l, u, c, d, p;
    try {
      const g = { nextPage: null, lastPage: 0, total: 0 },
        y = await ne(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (a = (s = t?.page) === null || s === void 0 ? void 0 : s.toString()) !== null &&
              a !== void 0
                ? a
                : "",
            per_page:
              (u = (l = t?.perPage) === null || l === void 0 ? void 0 : l.toString()) !== null &&
              u !== void 0
                ? u
                : "",
          },
          xform: vv,
        });
      if (y.error) throw y.error;
      const m = await y.json(),
        b = (c = y.headers.get("x-total-count")) !== null && c !== void 0 ? c : 0,
        _ =
          (p = (d = y.headers.get("link")) === null || d === void 0 ? void 0 : d.split(",")) !==
            null && p !== void 0
            ? p
            : [];
      return (
        _.length > 0 &&
          (_.forEach((w) => {
            const A = parseInt(w.split(";")[0].split("=")[1].substring(0, 1)),
              E = JSON.parse(w.split(";")[1].split("=")[1]);
            g[`${E}Page`] = A;
          }),
          (g.total = parseInt(b))),
        { data: Object.assign(Object.assign({}, m), g), error: null }
      );
    } catch (g) {
      if (Z(g)) return { data: { users: [] }, error: g };
      throw g;
    }
  }
  async getUserById(t) {
    Vn(t);
    try {
      return await ne(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: Cr,
      });
    } catch (s) {
      if (Z(s)) return { data: { user: null }, error: s };
      throw s;
    }
  }
  async updateUserById(t, s) {
    Vn(t);
    try {
      return await ne(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
        body: s,
        headers: this.headers,
        xform: Cr,
      });
    } catch (a) {
      if (Z(a)) return { data: { user: null }, error: a };
      throw a;
    }
  }
  async deleteUser(t, s = !1) {
    Vn(t);
    try {
      return await ne(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: { should_soft_delete: s },
        xform: Cr,
      });
    } catch (a) {
      if (Z(a)) return { data: { user: null }, error: a };
      throw a;
    }
  }
  async _listFactors(t) {
    Vn(t.userId);
    try {
      const { data: s, error: a } = await ne(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${t.userId}/factors`,
        { headers: this.headers, xform: (l) => ({ data: { factors: l }, error: null }) },
      );
      return { data: s, error: a };
    } catch (s) {
      if (Z(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _deleteFactor(t) {
    (Vn(t.userId), Vn(t.id));
    try {
      return {
        data: await ne(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${t.userId}/factors/${t.id}`,
          { headers: this.headers },
        ),
        error: null,
      };
    } catch (s) {
      if (Z(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _listOAuthClients(t) {
    var s, a, l, u, c, d, p;
    try {
      const g = { nextPage: null, lastPage: 0, total: 0 },
        y = await ne(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (a = (s = t?.page) === null || s === void 0 ? void 0 : s.toString()) !== null &&
              a !== void 0
                ? a
                : "",
            per_page:
              (u = (l = t?.perPage) === null || l === void 0 ? void 0 : l.toString()) !== null &&
              u !== void 0
                ? u
                : "",
          },
          xform: vv,
        });
      if (y.error) throw y.error;
      const m = await y.json(),
        b = (c = y.headers.get("x-total-count")) !== null && c !== void 0 ? c : 0,
        _ =
          (p = (d = y.headers.get("link")) === null || d === void 0 ? void 0 : d.split(",")) !==
            null && p !== void 0
            ? p
            : [];
      return (
        _.length > 0 &&
          (_.forEach((w) => {
            const A = parseInt(w.split(";")[0].split("=")[1].substring(0, 1)),
              E = JSON.parse(w.split(";")[1].split("=")[1]);
            g[`${E}Page`] = A;
          }),
          (g.total = parseInt(b))),
        { data: Object.assign(Object.assign({}, m), g), error: null }
      );
    } catch (g) {
      if (Z(g)) return { data: { clients: [] }, error: g };
      throw g;
    }
  }
  async _createOAuthClient(t) {
    try {
      return await ne(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: t,
        headers: this.headers,
        xform: (s) => ({ data: s, error: null }),
      });
    } catch (s) {
      if (Z(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _getOAuthClient(t) {
    try {
      return await ne(this.fetch, "GET", `${this.url}/admin/oauth/clients/${t}`, {
        headers: this.headers,
        xform: (s) => ({ data: s, error: null }),
      });
    } catch (s) {
      if (Z(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _updateOAuthClient(t, s) {
    try {
      return await ne(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${t}`, {
        body: s,
        headers: this.headers,
        xform: (a) => ({ data: a, error: null }),
      });
    } catch (a) {
      if (Z(a)) return { data: null, error: a };
      throw a;
    }
  }
  async _deleteOAuthClient(t) {
    try {
      return (
        await ne(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${t}`, {
          headers: this.headers,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (s) {
      if (Z(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _regenerateOAuthClientSecret(t) {
    try {
      return await ne(
        this.fetch,
        "POST",
        `${this.url}/admin/oauth/clients/${t}/regenerate_secret`,
        { headers: this.headers, xform: (s) => ({ data: s, error: null }) },
      );
    } catch (s) {
      if (Z(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _listCustomProviders(t) {
    try {
      const s = {};
      return (
        t?.type && (s.type = t.type),
        await ne(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
          headers: this.headers,
          query: s,
          xform: (a) => {
            var l;
            return {
              data: { providers: (l = a?.providers) !== null && l !== void 0 ? l : [] },
              error: null,
            };
          },
        })
      );
    } catch (s) {
      if (Z(s)) return { data: { providers: [] }, error: s };
      throw s;
    }
  }
  async _createCustomProvider(t) {
    try {
      return await ne(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
        body: t,
        headers: this.headers,
        xform: (s) => ({ data: s, error: null }),
      });
    } catch (s) {
      if (Z(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _getCustomProvider(t) {
    try {
      return await ne(this.fetch, "GET", `${this.url}/admin/custom-providers/${t}`, {
        headers: this.headers,
        xform: (s) => ({ data: s, error: null }),
      });
    } catch (s) {
      if (Z(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _updateCustomProvider(t, s) {
    try {
      return await ne(this.fetch, "PUT", `${this.url}/admin/custom-providers/${t}`, {
        body: s,
        headers: this.headers,
        xform: (a) => ({ data: a, error: null }),
      });
    } catch (a) {
      if (Z(a)) return { data: null, error: a };
      throw a;
    }
  }
  async _deleteCustomProvider(t) {
    try {
      return (
        await ne(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${t}`, {
          headers: this.headers,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (s) {
      if (Z(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _adminListPasskeys(t) {
    (ln(this.experimental), Vn(t.userId));
    try {
      return await ne(this.fetch, "GET", `${this.url}/admin/users/${t.userId}/passkeys`, {
        headers: this.headers,
        xform: (s) => ({ data: s, error: null }),
      });
    } catch (s) {
      if (Z(s)) return { data: null, error: s };
      throw s;
    }
  }
  async _adminDeletePasskey(t) {
    (ln(this.experimental), Vn(t.userId), Vn(t.passkeyId));
    try {
      return (
        await ne(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${t.userId}/passkeys/${t.passkeyId}`,
          { headers: this.headers, noResolveJson: !0 },
        ),
        { data: null, error: null }
      );
    } catch (s) {
      if (Z(s)) return { data: null, error: s };
      throw s;
    }
  }
}
function bv(e = {}) {
  return {
    getItem: (t) => e[t] || null,
    setItem: (t, s) => {
      e[t] = s;
    },
    removeItem: (t) => {
      delete e[t];
    },
  };
}
globalThis &&
  fb() &&
  globalThis.localStorage &&
  globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");
class UC extends Error {
  constructor(t) {
    (super(t), (this.isAcquireTimeout = !0));
  }
}
function LC() {
  if (typeof globalThis != "object")
    try {
      (Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__);
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function pb(e) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e))
    throw new Error(`@supabase/auth-js: Address "${e}" is invalid.`);
  return e.toLowerCase();
}
function NC(e) {
  return parseInt(e, 16);
}
function PC(e) {
  const t = new TextEncoder().encode(e);
  return "0x" + Array.from(t, (a) => a.toString(16).padStart(2, "0")).join("");
}
function zC(e) {
  var t;
  const {
    chainId: s,
    domain: a,
    expirationTime: l,
    issuedAt: u = new Date(),
    nonce: c,
    notBefore: d,
    requestId: p,
    resources: g,
    scheme: y,
    uri: m,
    version: b,
  } = e;
  {
    if (!Number.isInteger(s))
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${s}`,
      );
    if (!a)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.',
      );
    if (c && c.length < 8)
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${c}`,
      );
    if (!m)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
    if (b !== "1")
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${b}`,
      );
    if (
      !((t = e.statement) === null || t === void 0) &&
      t.includes(`
`)
    )
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`,
      );
  }
  const _ = pb(e.address),
    w = y ? `${y}://${a}` : a,
    A = e.statement
      ? `${e.statement}
`
      : "",
    E = `${w} wants you to sign in with your Ethereum account:
${_}

${A}`;
  let O = `URI: ${m}
Version: ${b}
Chain ID: ${s}${
    c
      ? `
Nonce: ${c}`
      : ""
  }
Issued At: ${u.toISOString()}`;
  if (
    (l &&
      (O += `
Expiration Time: ${l.toISOString()}`),
    d &&
      (O += `
Not Before: ${d.toISOString()}`),
    p &&
      (O += `
Request ID: ${p}`),
    g)
  ) {
    let M = `
Resources:`;
    for (const j of g) {
      if (!j || typeof j != "string")
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${j}`,
        );
      M += `
- ${j}`;
    }
    O += M;
  }
  return `${E}
${O}`;
}
class nt extends Error {
  constructor({ message: t, code: s, cause: a, name: l }) {
    var u;
    (super(t, { cause: a }),
      (this.__isWebAuthnError = !0),
      (this.name =
        (u = l ?? (a instanceof Error ? a.name : void 0)) !== null && u !== void 0
          ? u
          : "Unknown Error"),
      (this.code = s));
  }
  toJSON() {
    return { name: this.name, message: this.message, code: this.code };
  }
}
class ru extends nt {
  constructor(t, s) {
    (super({ code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY", cause: s, message: t }),
      (this.name = "WebAuthnUnknownError"),
      (this.originalError = s));
  }
}
function BC({ error: e, options: t }) {
  var s, a, l;
  const { publicKey: u } = t;
  if (!u) throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new nt({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e,
      });
  } else if (e.name === "ConstraintError") {
    if (
      ((s = u.authenticatorSelection) === null || s === void 0 ? void 0 : s.requireResidentKey) ===
      !0
    )
      return new nt({
        message:
          "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: e,
      });
    if (
      t.mediation === "conditional" &&
      ((a = u.authenticatorSelection) === null || a === void 0 ? void 0 : a.userVerification) ===
        "required"
    )
      return new nt({
        message:
          "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: e,
      });
    if (
      ((l = u.authenticatorSelection) === null || l === void 0 ? void 0 : l.userVerification) ===
      "required"
    )
      return new nt({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: e,
      });
  } else {
    if (e.name === "InvalidStateError")
      return new nt({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: e,
      });
    if (e.name === "NotAllowedError")
      return new nt({ message: e.message, code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY", cause: e });
    if (e.name === "NotSupportedError")
      return u.pubKeyCredParams.filter((d) => d.type === "public-key").length === 0
        ? new nt({
            message: 'No entry in pubKeyCredParams was of type "public-key"',
            code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
            cause: e,
          })
        : new nt({
            message:
              "No available authenticator supported any of the specified pubKeyCredParams algorithms",
            code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
            cause: e,
          });
    if (e.name === "SecurityError") {
      const c = window.location.hostname;
      if (gb(c)) {
        if (u.rp.id !== c)
          return new nt({
            message: `The RP ID "${u.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e,
          });
      } else
        return new nt({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: e,
        });
    } else if (e.name === "TypeError") {
      if (u.user.id.byteLength < 1 || u.user.id.byteLength > 64)
        return new nt({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: e,
        });
    } else if (e.name === "UnknownError")
      return new nt({
        message:
          "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e,
      });
  }
  return new nt({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e,
  });
}
function HC({ error: e, options: t }) {
  const { publicKey: s } = t;
  if (!s) throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new nt({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e,
      });
  } else {
    if (e.name === "NotAllowedError")
      return new nt({ message: e.message, code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY", cause: e });
    if (e.name === "SecurityError") {
      const a = window.location.hostname;
      if (gb(a)) {
        if (s.rpId !== a)
          return new nt({
            message: `The RP ID "${s.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e,
          });
      } else
        return new nt({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: e,
        });
    } else if (e.name === "UnknownError")
      return new nt({
        message:
          "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e,
      });
  }
  return new nt({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e,
  });
}
class IC {
  createNewAbortSignal() {
    if (this.controller) {
      const s = new Error("Cancelling existing WebAuthn API call for new one");
      ((s.name = "AbortError"), this.controller.abort(s));
    }
    const t = new AbortController();
    return ((this.controller = t), t.signal);
  }
  cancelCeremony() {
    if (this.controller) {
      const t = new Error("Manually cancelling existing WebAuthn API call");
      ((t.name = "AbortError"), this.controller.abort(t), (this.controller = void 0));
    }
  }
}
const Cf = new IC();
function _v(e) {
  if (!e) throw new Error("Credential creation options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseCreationOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseCreationOptionsFromJSON(e);
  const { challenge: t, user: s, excludeCredentials: a } = e,
    l = mu(e, ["challenge", "user", "excludeCredentials"]),
    u = Ei(t).buffer,
    c = Object.assign(Object.assign({}, s), { id: Ei(s.id).buffer }),
    d = Object.assign(Object.assign({}, l), { challenge: u, user: c });
  if (a && a.length > 0) {
    d.excludeCredentials = new Array(a.length);
    for (let p = 0; p < a.length; p++) {
      const g = a[p];
      d.excludeCredentials[p] = Object.assign(Object.assign({}, g), {
        id: Ei(g.id).buffer,
        type: g.type || "public-key",
        transports: g.transports,
      });
    }
  }
  return d;
}
function Sv(e) {
  if (!e) throw new Error("Credential request options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseRequestOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseRequestOptionsFromJSON(e);
  const { challenge: t, allowCredentials: s } = e,
    a = mu(e, ["challenge", "allowCredentials"]),
    l = Ei(t).buffer,
    u = Object.assign(Object.assign({}, a), { challenge: l });
  if (s && s.length > 0) {
    u.allowCredentials = new Array(s.length);
    for (let c = 0; c < s.length; c++) {
      const d = s[c];
      u.allowCredentials[c] = Object.assign(Object.assign({}, d), {
        id: Ei(d.id).buffer,
        type: d.type || "public-key",
        transports: d.transports,
      });
    }
  }
  return u;
}
function wv(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
  const s = e;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      attestationObject: ps(new Uint8Array(e.response.attestationObject)),
      clientDataJSON: ps(new Uint8Array(e.response.clientDataJSON)),
    },
    type: "public-key",
    clientExtensionResults: e.getClientExtensionResults(),
    authenticatorAttachment: (t = s.authenticatorAttachment) !== null && t !== void 0 ? t : void 0,
  };
}
function Ev(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
  const s = e,
    a = e.getClientExtensionResults(),
    l = e.response;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      authenticatorData: ps(new Uint8Array(l.authenticatorData)),
      clientDataJSON: ps(new Uint8Array(l.clientDataJSON)),
      signature: ps(new Uint8Array(l.signature)),
      userHandle: l.userHandle ? ps(new Uint8Array(l.userHandle)) : void 0,
    },
    type: "public-key",
    clientExtensionResults: a,
    authenticatorAttachment: (t = s.authenticatorAttachment) !== null && t !== void 0 ? t : void 0,
  };
}
function gb(e) {
  return e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
function su() {
  var e, t;
  return !!(
    St() &&
    "PublicKeyCredential" in window &&
    window.PublicKeyCredential &&
    "credentials" in navigator &&
    typeof ((e = navigator?.credentials) === null || e === void 0 ? void 0 : e.create) ==
      "function" &&
    typeof ((t = navigator?.credentials) === null || t === void 0 ? void 0 : t.get) == "function"
  );
}
async function mb(e) {
  try {
    const t = await navigator.credentials.create(e);
    return t
      ? t instanceof PublicKeyCredential
        ? { data: t, error: null }
        : { data: null, error: new ru("Browser returned unexpected credential type", t) }
      : { data: null, error: new ru("Empty credential response", t) };
  } catch (t) {
    return { data: null, error: BC({ error: t, options: e }) };
  }
}
async function yb(e) {
  try {
    const t = await navigator.credentials.get(e);
    return t
      ? t instanceof PublicKeyCredential
        ? { data: t, error: null }
        : { data: null, error: new ru("Browser returned unexpected credential type", t) }
      : { data: null, error: new ru("Empty credential response", t) };
  } catch (t) {
    return { data: null, error: HC({ error: t, options: e }) };
  }
}
const qC = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: !1,
      userVerification: "preferred",
      residentKey: "discouraged",
    },
    attestation: "direct",
  },
  $C = { userVerification: "preferred", hints: ["security-key"], attestation: "direct" };
function iu(...e) {
  const t = (l) => l !== null && typeof l == "object" && !Array.isArray(l),
    s = (l) => l instanceof ArrayBuffer || ArrayBuffer.isView(l),
    a = {};
  for (const l of e)
    if (l)
      for (const u in l) {
        const c = l[u];
        if (c !== void 0)
          if (Array.isArray(c)) a[u] = c;
          else if (s(c)) a[u] = c;
          else if (t(c)) {
            const d = a[u];
            t(d) ? (a[u] = iu(d, c)) : (a[u] = iu(c));
          } else a[u] = c;
      }
  return a;
}
function GC(e, t) {
  return iu(qC, e, t || {});
}
function VC(e, t) {
  return iu($C, e, t || {});
}
class KC {
  constructor(t) {
    ((this.client = t),
      (this.enroll = this._enroll.bind(this)),
      (this.challenge = this._challenge.bind(this)),
      (this.verify = this._verify.bind(this)),
      (this.authenticate = this._authenticate.bind(this)),
      (this.register = this._register.bind(this)));
  }
  async _enroll(t) {
    return this.client.mfa.enroll(Object.assign(Object.assign({}, t), { factorType: "webauthn" }));
  }
  async _challenge({ factorId: t, webauthn: s, friendlyName: a, signal: l }, u) {
    var c;
    try {
      const { data: d, error: p } = await this.client.mfa.challenge({ factorId: t, webauthn: s });
      if (!d) return { data: null, error: p };
      const g = l ?? Cf.createNewAbortSignal();
      if (d.webauthn.type === "create") {
        const { user: y } = d.webauthn.credential_options.publicKey;
        if (!y.name) {
          const m = a;
          if (m) y.name = `${y.id}:${m}`;
          else {
            const _ = (await this.client.getUser()).data.user,
              w =
                ((c = _?.user_metadata) === null || c === void 0 ? void 0 : c.name) ||
                _?.email ||
                _?.id ||
                "User";
            y.name = `${y.id}:${w}`;
          }
        }
        y.displayName || (y.displayName = y.name);
      }
      switch (d.webauthn.type) {
        case "create": {
          const y = GC(d.webauthn.credential_options.publicKey, u?.create),
            { data: m, error: b } = await mb({ publicKey: y, signal: g });
          return m
            ? {
                data: {
                  factorId: t,
                  challengeId: d.id,
                  webauthn: { type: d.webauthn.type, credential_response: m },
                },
                error: null,
              }
            : { data: null, error: b };
        }
        case "request": {
          const y = VC(d.webauthn.credential_options.publicKey, u?.request),
            { data: m, error: b } = await yb(
              Object.assign(Object.assign({}, d.webauthn.credential_options), {
                publicKey: y,
                signal: g,
              }),
            );
          return m
            ? {
                data: {
                  factorId: t,
                  challengeId: d.id,
                  webauthn: { type: d.webauthn.type, credential_response: m },
                },
                error: null,
              }
            : { data: null, error: b };
        }
      }
    } catch (d) {
      return Z(d)
        ? { data: null, error: d }
        : { data: null, error: new cn("Unexpected error in challenge", d) };
    }
  }
  async _verify({ challengeId: t, factorId: s, webauthn: a }) {
    return this.client.mfa.verify({ factorId: s, challengeId: t, webauthn: a });
  }
  async _authenticate(
    {
      factorId: t,
      webauthn: {
        rpId: s = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: a = typeof window < "u" ? [window.location.origin] : void 0,
        signal: l,
      } = {},
    },
    u,
  ) {
    if (!s) return { data: null, error: new Fa("rpId is required for WebAuthn authentication") };
    try {
      if (!su()) return { data: null, error: new cn("Browser does not support WebAuthn", null) };
      const { data: c, error: d } = await this.challenge(
        { factorId: t, webauthn: { rpId: s, rpOrigins: a }, signal: l },
        { request: u },
      );
      if (!c) return { data: null, error: d };
      const { webauthn: p } = c;
      return this._verify({
        factorId: t,
        challengeId: c.challengeId,
        webauthn: {
          type: p.type,
          rpId: s,
          rpOrigins: a,
          credential_response: p.credential_response,
        },
      });
    } catch (c) {
      return Z(c)
        ? { data: null, error: c }
        : { data: null, error: new cn("Unexpected error in authenticate", c) };
    }
  }
  async _register(
    {
      friendlyName: t,
      webauthn: {
        rpId: s = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: a = typeof window < "u" ? [window.location.origin] : void 0,
        signal: l,
      } = {},
    },
    u,
  ) {
    if (!s) return { data: null, error: new Fa("rpId is required for WebAuthn registration") };
    try {
      if (!su()) return { data: null, error: new cn("Browser does not support WebAuthn", null) };
      const { data: c, error: d } = await this._enroll({ friendlyName: t });
      if (!c)
        return (
          await this.client.mfa
            .listFactors()
            .then((y) => {
              var m;
              return (m = y.data) === null || m === void 0
                ? void 0
                : m.all.find(
                    (b) =>
                      b.factor_type === "webauthn" &&
                      b.friendly_name === t &&
                      b.status !== "unverified",
                  );
            })
            .then((y) => (y ? this.client.mfa.unenroll({ factorId: y?.id }) : void 0)),
          { data: null, error: d }
        );
      const { data: p, error: g } = await this._challenge(
        {
          factorId: c.id,
          friendlyName: c.friendly_name,
          webauthn: { rpId: s, rpOrigins: a },
          signal: l,
        },
        { create: u },
      );
      return p
        ? this._verify({
            factorId: c.id,
            challengeId: p.challengeId,
            webauthn: {
              rpId: s,
              rpOrigins: a,
              type: p.webauthn.type,
              credential_response: p.webauthn.credential_response,
            },
          })
        : { data: null, error: g };
    } catch (c) {
      return Z(c)
        ? { data: null, error: c }
        : { data: null, error: new cn("Unexpected error in register", c) };
    }
  }
}
LC();
const FC = {
    url: JO,
    storageKey: XO,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: ZO,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1,
    throwOnError: !1,
    lockAcquireTimeout: 5e3,
    skipAutoInitialize: !1,
    experimental: {},
  },
  di = {};
class Qa {
  get jwks() {
    var t, s;
    return (s = (t = di[this.storageKey]) === null || t === void 0 ? void 0 : t.jwks) !== null &&
      s !== void 0
      ? s
      : { keys: [] };
  }
  set jwks(t) {
    di[this.storageKey] = Object.assign(Object.assign({}, di[this.storageKey]), { jwks: t });
  }
  get jwks_cached_at() {
    var t, s;
    return (s = (t = di[this.storageKey]) === null || t === void 0 ? void 0 : t.cachedAt) !==
      null && s !== void 0
      ? s
      : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(t) {
    di[this.storageKey] = Object.assign(Object.assign({}, di[this.storageKey]), { cachedAt: t });
  }
  constructor(t) {
    var s, a, l;
    ((this.userStorage = null),
      (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.autoRefreshTickTimeout = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this._sessionRemovalEpoch = 0),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.hasCustomAuthorizationHeader = !1),
      (this.suppressGetSessionWarning = !1),
      (this.lock = null),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log));
    const u = Object.assign(Object.assign({}, FC), t);
    if (
      ((this.storageKey = u.storageKey),
      (this.instanceID = (s = Qa.nextInstanceID[this.storageKey]) !== null && s !== void 0 ? s : 0),
      (Qa.nextInstanceID[this.storageKey] = this.instanceID + 1),
      (this.logDebugMessages = !!u.debug),
      typeof u.debug == "function" && (this.logger = u.debug),
      this.instanceID > 0 && St())
    ) {
      const c = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      (console.warn(c), this.logDebugMessages && console.trace(c));
    }
    if (
      ((this.persistSession = u.persistSession),
      (this.autoRefreshToken = u.autoRefreshToken),
      (this.experimental = (a = u.experimental) !== null && a !== void 0 ? a : {}),
      (this.admin = new DC({
        url: u.url,
        headers: u.headers,
        fetch: u.fetch,
        experimental: this.experimental,
      })),
      (this.url = u.url),
      (this.headers = u.headers),
      (this.fetch = db(u.fetch)),
      (this.detectSessionInUrl = u.detectSessionInUrl),
      (this.flowType = u.flowType),
      (this.hasCustomAuthorizationHeader = u.hasCustomAuthorizationHeader),
      (this.throwOnError = u.throwOnError),
      (this.lockAcquireTimeout = u.lockAcquireTimeout),
      u.lock != null && (this.lock = u.lock),
      this.jwks || ((this.jwks = { keys: [] }), (this.jwks_cached_at = Number.MIN_SAFE_INTEGER)),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
        webauthn: new KC(this),
      }),
      (this.oauth = {
        getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
        approveAuthorization: this._approveAuthorization.bind(this),
        denyAuthorization: this._denyAuthorization.bind(this),
        listGrants: this._listOAuthGrants.bind(this),
        revokeGrant: this._revokeOAuthGrant.bind(this),
      }),
      (this.passkey = {
        startRegistration: this._startPasskeyRegistration.bind(this),
        verifyRegistration: this._verifyPasskeyRegistration.bind(this),
        startAuthentication: this._startPasskeyAuthentication.bind(this),
        verifyAuthentication: this._verifyPasskeyAuthentication.bind(this),
        list: this._listPasskeys.bind(this),
        update: this._updatePasskey.bind(this),
        delete: this._deletePasskey.bind(this),
      }),
      this.persistSession
        ? (u.storage
            ? (this.storage = u.storage)
            : fb()
              ? (this.storage = globalThis.localStorage)
              : ((this.memoryStorage = {}), (this.storage = bv(this.memoryStorage))),
          u.userStorage && (this.userStorage = u.userStorage))
        : ((this.memoryStorage = {}), (this.storage = bv(this.memoryStorage))),
      St() && globalThis.BroadcastChannel && this.persistSession && this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (c) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          c,
        );
      }
      (l = this.broadcastChannel) === null ||
        l === void 0 ||
        l.addEventListener("message", async (c) => {
          this._debug("received broadcast notification from other tab or client", c);
          try {
            await this._notifyAllSubscribers(c.data.event, c.data.session, !1);
          } catch (d) {
            this._debug("#broadcastChannel", "error", d);
          }
        });
    }
    u.skipAutoInitialize ||
      this.initialize().catch((c) => {
        this._debug("#initialize()", "error", c);
      });
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(t) {
    if (this.throwOnError && t && t.error) throw t.error;
    return t;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${ub}) ${new Date().toISOString()}`;
  }
  _debug(...t) {
    return (this.logDebugMessages && this.logger(this._logPrefix(), ...t), this);
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          this.lock != null
            ? await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize())
            : await this._initialize())()),
        await this.initializePromise);
  }
  async _initialize() {
    var t;
    try {
      let s = {},
        a = "none";
      if (
        (St() &&
          ((s = dC(window.location.href)),
          this._isImplicitGrantCallback(s)
            ? (a = "implicit")
            : (await this._isPKCECallback(s)) && (a = "pkce")),
        St() && this.detectSessionInUrl && a !== "none")
      ) {
        const { data: l, error: u } = await this._getSessionFromURL(s, a);
        if (u) {
          if ((this._debug("#_initialize()", "error detecting session from URL", u), rC(u))) {
            const p = (t = u.details) === null || t === void 0 ? void 0 : t.code;
            if (
              p === "identity_already_exists" ||
              p === "identity_not_found" ||
              p === "single_identity_not_deletable"
            )
              return { error: u };
          }
          return { error: u };
        }
        const { session: c, redirectType: d } = l;
        return (
          this._debug("#_initialize()", "detected session in URL", c, "redirect type", d),
          await this._saveSession(c),
          setTimeout(async () => {
            d === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", c)
              : await this._notifyAllSubscribers("SIGNED_IN", c);
          }, 0),
          { error: null }
        );
      }
      return (await this._recoverAndRefresh(), { error: null });
    } catch (s) {
      return Z(s)
        ? this._returnResult({ error: s })
        : this._returnResult({ error: new cn("Unexpected error during initialization", s) });
    } finally {
      (await this._handleVisibilityChange(), this._debug("#_initialize()", "end"));
    }
  }
  async signInAnonymously(t) {
    var s, a, l;
    try {
      const u = await ne(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (a = (s = t?.options) === null || s === void 0 ? void 0 : s.data) !== null &&
              a !== void 0
                ? a
                : {},
            gotrue_meta_security: {
              captcha_token: (l = t?.options) === null || l === void 0 ? void 0 : l.captchaToken,
            },
          },
          xform: nn,
        }),
        { data: c, error: d } = u;
      if (d || !c) return this._returnResult({ data: { user: null, session: null }, error: d });
      const p = c.session,
        g = c.user;
      return (
        c.session &&
          (await this._saveSession(c.session), await this._notifyAllSubscribers("SIGNED_IN", p)),
        this._returnResult({ data: { user: g, session: p }, error: null })
      );
    } catch (u) {
      if (Z(u)) return this._returnResult({ data: { user: null, session: null }, error: u });
      throw u;
    }
  }
  async signUp(t) {
    var s, a, l;
    try {
      let u;
      if ("email" in t) {
        const { email: y, password: m, options: b } = t;
        let _ = null,
          w = null;
        (this.flowType === "pkce" && ([_, w] = await fi(this.storage, this.storageKey)),
          (u = await ne(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: b?.emailRedirectTo,
            body: {
              email: y,
              password: m,
              data: (s = b?.data) !== null && s !== void 0 ? s : {},
              gotrue_meta_security: { captcha_token: b?.captchaToken },
              code_challenge: _,
              code_challenge_method: w,
            },
            xform: nn,
          })));
      } else if ("phone" in t) {
        const { phone: y, password: m, options: b } = t;
        u = await ne(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: y,
            password: m,
            data: (a = b?.data) !== null && a !== void 0 ? a : {},
            channel: (l = b?.channel) !== null && l !== void 0 ? l : "sms",
            gotrue_meta_security: { captcha_token: b?.captchaToken },
          },
          xform: nn,
        });
      } else throw new Dl("You must provide either an email or phone number and a password");
      const { data: c, error: d } = u;
      if (d || !c)
        return (
          await st(this.storage, `${this.storageKey}-code-verifier`),
          this._returnResult({ data: { user: null, session: null }, error: d })
        );
      const p = c.session,
        g = c.user;
      return (
        c.session &&
          (await this._saveSession(c.session), await this._notifyAllSubscribers("SIGNED_IN", p)),
        this._returnResult({ data: { user: g, session: p }, error: null })
      );
    } catch (u) {
      if ((await st(this.storage, `${this.storageKey}-code-verifier`), Z(u)))
        return this._returnResult({ data: { user: null, session: null }, error: u });
      throw u;
    }
  }
  async signInWithPassword(t) {
    try {
      let s;
      if ("email" in t) {
        const { email: u, password: c, options: d } = t;
        s = await ne(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: { email: u, password: c, gotrue_meta_security: { captcha_token: d?.captchaToken } },
          xform: yv,
        });
      } else if ("phone" in t) {
        const { phone: u, password: c, options: d } = t;
        s = await ne(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: { phone: u, password: c, gotrue_meta_security: { captcha_token: d?.captchaToken } },
          xform: yv,
        });
      } else throw new Dl("You must provide either an email or phone number and a password");
      const { data: a, error: l } = s;
      if (l) return this._returnResult({ data: { user: null, session: null }, error: l });
      if (!a || !a.session || !a.user) {
        const u = new hi();
        return this._returnResult({ data: { user: null, session: null }, error: u });
      }
      return (
        a.session &&
          (await this._saveSession(a.session),
          await this._notifyAllSubscribers("SIGNED_IN", a.session)),
        this._returnResult({
          data: Object.assign(
            { user: a.user, session: a.session },
            a.weak_password ? { weakPassword: a.weak_password } : null,
          ),
          error: l,
        })
      );
    } catch (s) {
      if (Z(s)) return this._returnResult({ data: { user: null, session: null }, error: s });
      throw s;
    }
  }
  async signInWithOAuth(t) {
    var s, a, l, u;
    return await this._handleProviderSignIn(t.provider, {
      redirectTo: (s = t.options) === null || s === void 0 ? void 0 : s.redirectTo,
      scopes: (a = t.options) === null || a === void 0 ? void 0 : a.scopes,
      queryParams: (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
      skipBrowserRedirect:
        (u = t.options) === null || u === void 0 ? void 0 : u.skipBrowserRedirect,
    });
  }
  async exchangeCodeForSession(t) {
    return (
      await this.initializePromise,
      this.lock != null
        ? this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(t))
        : this._exchangeCodeForSession(t)
    );
  }
  async signInWithWeb3(t) {
    const { chain: s } = t;
    switch (s) {
      case "ethereum":
        return await this.signInWithEthereum(t);
      case "solana":
        return await this.signInWithSolana(t);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${s}"`);
    }
  }
  async signInWithEthereum(t) {
    var s, a, l, u, c, d, p, g, y, m, b;
    let _, w;
    if ("message" in t) ((_ = t.message), (w = t.signature));
    else {
      const { chain: A, wallet: E, statement: O, options: M } = t;
      let j;
      if (St())
        if (typeof E == "object") j = E;
        else {
          const Y = window;
          if (
            "ethereum" in Y &&
            typeof Y.ethereum == "object" &&
            "request" in Y.ethereum &&
            typeof Y.ethereum.request == "function"
          )
            j = Y.ethereum;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof E != "object" || !M?.url)
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        j = E;
      }
      const L = new URL((s = M?.url) !== null && s !== void 0 ? s : window.location.href),
        Q = await j
          .request({ method: "eth_requestAccounts" })
          .then((Y) => Y)
          .catch(() => {
            throw new Error(
              "@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid",
            );
          });
      if (!Q || Q.length === 0)
        throw new Error(
          "@supabase/auth-js: No accounts available. Please ensure the wallet is connected.",
        );
      const F = pb(Q[0]);
      let B = (a = M?.signInWithEthereum) === null || a === void 0 ? void 0 : a.chainId;
      if (!B) {
        const Y = await j.request({ method: "eth_chainId" });
        B = NC(Y);
      }
      const G = {
        domain: L.host,
        address: F,
        statement: O,
        uri: L.href,
        version: "1",
        chainId: B,
        nonce: (l = M?.signInWithEthereum) === null || l === void 0 ? void 0 : l.nonce,
        issuedAt:
          (c = (u = M?.signInWithEthereum) === null || u === void 0 ? void 0 : u.issuedAt) !==
            null && c !== void 0
            ? c
            : new Date(),
        expirationTime:
          (d = M?.signInWithEthereum) === null || d === void 0 ? void 0 : d.expirationTime,
        notBefore: (p = M?.signInWithEthereum) === null || p === void 0 ? void 0 : p.notBefore,
        requestId: (g = M?.signInWithEthereum) === null || g === void 0 ? void 0 : g.requestId,
        resources: (y = M?.signInWithEthereum) === null || y === void 0 ? void 0 : y.resources,
      };
      ((_ = zC(G)), (w = await j.request({ method: "personal_sign", params: [PC(_), F] })));
    }
    try {
      const { data: A, error: E } = await ne(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "ethereum", message: _, signature: w },
            !((m = t.options) === null || m === void 0) && m.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (b = t.options) === null || b === void 0 ? void 0 : b.captchaToken,
                  },
                }
              : null,
          ),
          xform: nn,
        },
      );
      if (E) throw E;
      if (!A || !A.session || !A.user) {
        const O = new hi();
        return this._returnResult({ data: { user: null, session: null }, error: O });
      }
      return (
        A.session &&
          (await this._saveSession(A.session),
          await this._notifyAllSubscribers("SIGNED_IN", A.session)),
        this._returnResult({ data: Object.assign({}, A), error: E })
      );
    } catch (A) {
      if (Z(A)) return this._returnResult({ data: { user: null, session: null }, error: A });
      throw A;
    }
  }
  async signInWithSolana(t) {
    var s, a, l, u, c, d, p, g, y, m, b, _;
    let w, A;
    if ("message" in t) ((w = t.message), (A = t.signature));
    else {
      const { chain: E, wallet: O, statement: M, options: j } = t;
      let L;
      if (St())
        if (typeof O == "object") L = O;
        else {
          const F = window;
          if (
            "solana" in F &&
            typeof F.solana == "object" &&
            (("signIn" in F.solana && typeof F.solana.signIn == "function") ||
              ("signMessage" in F.solana && typeof F.solana.signMessage == "function"))
          )
            L = F.solana;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof O != "object" || !j?.url)
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        L = O;
      }
      const Q = new URL((s = j?.url) !== null && s !== void 0 ? s : window.location.href);
      if ("signIn" in L && L.signIn) {
        const F = await L.signIn(
          Object.assign(
            Object.assign(
              Object.assign({ issuedAt: new Date().toISOString() }, j?.signInWithSolana),
              { version: "1", domain: Q.host, uri: Q.href },
            ),
            M ? { statement: M } : null,
          ),
        );
        let B;
        if (Array.isArray(F) && F[0] && typeof F[0] == "object") B = F[0];
        else if (F && typeof F == "object" && "signedMessage" in F && "signature" in F) B = F;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if (
          "signedMessage" in B &&
          "signature" in B &&
          (typeof B.signedMessage == "string" || B.signedMessage instanceof Uint8Array) &&
          B.signature instanceof Uint8Array
        )
          ((w =
            typeof B.signedMessage == "string"
              ? B.signedMessage
              : new TextDecoder().decode(B.signedMessage)),
            (A = B.signature));
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields",
          );
      } else {
        if (
          !("signMessage" in L) ||
          typeof L.signMessage != "function" ||
          !("publicKey" in L) ||
          typeof L != "object" ||
          !L.publicKey ||
          !("toBase58" in L.publicKey) ||
          typeof L.publicKey.toBase58 != "function"
        )
          throw new Error(
            "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API",
          );
        w = [
          `${Q.host} wants you to sign in with your Solana account:`,
          L.publicKey.toBase58(),
          ...(M ? ["", M, ""] : [""]),
          "Version: 1",
          `URI: ${Q.href}`,
          `Issued At: ${(l = (a = j?.signInWithSolana) === null || a === void 0 ? void 0 : a.issuedAt) !== null && l !== void 0 ? l : new Date().toISOString()}`,
          ...(!((u = j?.signInWithSolana) === null || u === void 0) && u.notBefore
            ? [`Not Before: ${j.signInWithSolana.notBefore}`]
            : []),
          ...(!((c = j?.signInWithSolana) === null || c === void 0) && c.expirationTime
            ? [`Expiration Time: ${j.signInWithSolana.expirationTime}`]
            : []),
          ...(!((d = j?.signInWithSolana) === null || d === void 0) && d.chainId
            ? [`Chain ID: ${j.signInWithSolana.chainId}`]
            : []),
          ...(!((p = j?.signInWithSolana) === null || p === void 0) && p.nonce
            ? [`Nonce: ${j.signInWithSolana.nonce}`]
            : []),
          ...(!((g = j?.signInWithSolana) === null || g === void 0) && g.requestId
            ? [`Request ID: ${j.signInWithSolana.requestId}`]
            : []),
          ...(!(
            (m = (y = j?.signInWithSolana) === null || y === void 0 ? void 0 : y.resources) ===
              null || m === void 0
          ) && m.length
            ? ["Resources", ...j.signInWithSolana.resources.map((B) => `- ${B}`)]
            : []),
        ].join(`
`);
        const F = await L.signMessage(new TextEncoder().encode(w), "utf8");
        if (!F || !(F instanceof Uint8Array))
          throw new Error(
            "@supabase/auth-js: Wallet signMessage() API returned an recognized value",
          );
        A = F;
      }
    }
    try {
      const { data: E, error: O } = await ne(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "solana", message: w, signature: ps(A) },
            !((b = t.options) === null || b === void 0) && b.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (_ = t.options) === null || _ === void 0 ? void 0 : _.captchaToken,
                  },
                }
              : null,
          ),
          xform: nn,
        },
      );
      if (O) throw O;
      if (!E || !E.session || !E.user) {
        const M = new hi();
        return this._returnResult({ data: { user: null, session: null }, error: M });
      }
      return (
        E.session &&
          (await this._saveSession(E.session),
          await this._notifyAllSubscribers("SIGNED_IN", E.session)),
        this._returnResult({ data: Object.assign({}, E), error: O })
      );
    } catch (E) {
      if (Z(E)) return this._returnResult({ data: { user: null, session: null }, error: E });
      throw E;
    }
  }
  async _exchangeCodeForSession(t) {
    const s = await Gn(this.storage, `${this.storageKey}-code-verifier`),
      [a, l] = (s ?? "").split("/");
    try {
      if (!a && this.flowType === "pkce") throw new sC();
      const { data: u, error: c } = await ne(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        { headers: this.headers, body: { auth_code: t, code_verifier: a }, xform: nn },
      );
      if ((await st(this.storage, `${this.storageKey}-code-verifier`), c)) throw c;
      if (!u || !u.session || !u.user) {
        const d = new hi();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: d,
        });
      }
      return (
        u.session &&
          (await this._saveSession(u.session),
          await this._notifyAllSubscribers(
            l === "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            u.session,
          )),
        this._returnResult({
          data: Object.assign(Object.assign({}, u), { redirectType: l ?? null }),
          error: c,
        })
      );
    } catch (u) {
      if ((await st(this.storage, `${this.storageKey}-code-verifier`), Z(u)))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: u,
        });
      throw u;
    }
  }
  async signInWithIdToken(t) {
    try {
      const { options: s, provider: a, token: l, access_token: u, nonce: c } = t,
        d = await ne(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          body: {
            provider: a,
            id_token: l,
            access_token: u,
            nonce: c,
            gotrue_meta_security: { captcha_token: s?.captchaToken },
          },
          xform: nn,
        }),
        { data: p, error: g } = d;
      if (g) return this._returnResult({ data: { user: null, session: null }, error: g });
      if (!p || !p.session || !p.user) {
        const y = new hi();
        return this._returnResult({ data: { user: null, session: null }, error: y });
      }
      return (
        p.session &&
          (await this._saveSession(p.session),
          await this._notifyAllSubscribers("SIGNED_IN", p.session)),
        this._returnResult({ data: p, error: g })
      );
    } catch (s) {
      if (Z(s)) return this._returnResult({ data: { user: null, session: null }, error: s });
      throw s;
    }
  }
  async signInWithOtp(t) {
    var s, a, l, u, c;
    try {
      if ("email" in t) {
        const { email: d, options: p } = t;
        let g = null,
          y = null;
        this.flowType === "pkce" && ([g, y] = await fi(this.storage, this.storageKey));
        const { error: m } = await ne(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: d,
            data: (s = p?.data) !== null && s !== void 0 ? s : {},
            create_user: (a = p?.shouldCreateUser) !== null && a !== void 0 ? a : !0,
            gotrue_meta_security: { captcha_token: p?.captchaToken },
            code_challenge: g,
            code_challenge_method: y,
          },
          redirectTo: p?.emailRedirectTo,
        });
        return this._returnResult({ data: { user: null, session: null }, error: m });
      }
      if ("phone" in t) {
        const { phone: d, options: p } = t,
          { data: g, error: y } = await ne(this.fetch, "POST", `${this.url}/otp`, {
            headers: this.headers,
            body: {
              phone: d,
              data: (l = p?.data) !== null && l !== void 0 ? l : {},
              create_user: (u = p?.shouldCreateUser) !== null && u !== void 0 ? u : !0,
              gotrue_meta_security: { captcha_token: p?.captchaToken },
              channel: (c = p?.channel) !== null && c !== void 0 ? c : "sms",
            },
          });
        return this._returnResult({
          data: { user: null, session: null, messageId: g?.message_id },
          error: y,
        });
      }
      throw new Dl("You must provide either an email or phone number.");
    } catch (d) {
      if ((await st(this.storage, `${this.storageKey}-code-verifier`), Z(d)))
        return this._returnResult({ data: { user: null, session: null }, error: d });
      throw d;
    }
  }
  async verifyOtp(t) {
    var s, a;
    try {
      let l, u;
      "options" in t &&
        ((l = (s = t.options) === null || s === void 0 ? void 0 : s.redirectTo),
        (u = (a = t.options) === null || a === void 0 ? void 0 : a.captchaToken));
      const { data: c, error: d } = await ne(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, t), { gotrue_meta_security: { captcha_token: u } }),
        redirectTo: l,
        xform: nn,
      });
      if (d) throw d;
      if (!c) throw new Error("An error occurred on token verification.");
      const p = c.session,
        g = c.user;
      return (
        p?.access_token &&
          (await this._saveSession(p),
          await this._notifyAllSubscribers(
            t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            p,
          )),
        this._returnResult({ data: { user: g, session: p }, error: null })
      );
    } catch (l) {
      if (Z(l)) return this._returnResult({ data: { user: null, session: null }, error: l });
      throw l;
    }
  }
  async signInWithSSO(t) {
    var s, a, l, u, c;
    try {
      let d = null,
        p = null;
      this.flowType === "pkce" && ([d, p] = await fi(this.storage, this.storageKey));
      const g = await ne(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign({}, "providerId" in t ? { provider_id: t.providerId } : null),
                "domain" in t ? { domain: t.domain } : null,
              ),
              {
                redirect_to:
                  (a = (s = t.options) === null || s === void 0 ? void 0 : s.redirectTo) !== null &&
                  a !== void 0
                    ? a
                    : void 0,
              },
            ),
            !((l = t?.options) === null || l === void 0) && l.captchaToken
              ? { gotrue_meta_security: { captcha_token: t.options.captchaToken } }
              : null,
          ),
          { skip_http_redirect: !0, code_challenge: d, code_challenge_method: p },
        ),
        headers: this.headers,
        xform: kC,
      });
      return (
        !((u = g.data) === null || u === void 0) &&
          u.url &&
          St() &&
          !(!((c = t.options) === null || c === void 0) && c.skipBrowserRedirect) &&
          window.location.assign(g.data.url),
        this._returnResult(g)
      );
    } catch (d) {
      if ((await st(this.storage, `${this.storageKey}-code-verifier`), Z(d)))
        return this._returnResult({ data: null, error: d });
      throw d;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      this.lock != null
        ? await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate())
        : await this._reauthenticate()
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: s },
          error: a,
        } = t;
        if (a) throw a;
        if (!s) throw new ut();
        const { error: l } = await ne(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: s.access_token,
        });
        return this._returnResult({ data: { user: null, session: null }, error: l });
      });
    } catch (t) {
      if (Z(t)) return this._returnResult({ data: { user: null, session: null }, error: t });
      throw t;
    }
  }
  async resend(t) {
    try {
      const s = `${this.url}/resend`;
      if ("email" in t) {
        const { email: a, type: l, options: u } = t,
          { error: c } = await ne(this.fetch, "POST", s, {
            headers: this.headers,
            body: { email: a, type: l, gotrue_meta_security: { captcha_token: u?.captchaToken } },
            redirectTo: u?.emailRedirectTo,
          });
        return this._returnResult({ data: { user: null, session: null }, error: c });
      } else if ("phone" in t) {
        const { phone: a, type: l, options: u } = t,
          { data: c, error: d } = await ne(this.fetch, "POST", s, {
            headers: this.headers,
            body: { phone: a, type: l, gotrue_meta_security: { captcha_token: u?.captchaToken } },
          });
        return this._returnResult({
          data: { user: null, session: null, messageId: c?.message_id },
          error: d,
        });
      }
      throw new Dl("You must provide either an email or phone number and a type");
    } catch (s) {
      if (Z(s)) return this._returnResult({ data: { user: null, session: null }, error: s });
      throw s;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      this.lock != null
        ? await this._acquireLock(this.lockAcquireTimeout, async () =>
            this._useSession(async (t) => t),
          )
        : await this._useSession(async (t) => t)
    );
  }
  async _acquireLock(t, s) {
    this._debug("#_acquireLock", "begin", t);
    try {
      if (this.lockAcquired) {
        const a = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          l = (async () => (await a, await s()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await l;
              } catch {}
            })(),
          ),
          l
        );
      }
      return await this.lock(`lock:${this.storageKey}`, t, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const a = s();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await a;
                } catch {}
              })(),
            ),
              await a;
            this.pendingInLock.length;
          ) {
            const l = [...this.pendingInLock];
            (await Promise.all(l), this.pendingInLock.splice(0, l.length));
          }
          return await a;
        } finally {
          (this._debug("#_acquireLock", "lock released for storage key", this.storageKey),
            (this.lockAcquired = !1));
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(t) {
    this._debug("#_useSession", "begin");
    try {
      const s = await this.__loadSession();
      return await t(s);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    (this._debug("#__loadSession()", "begin"),
      this.lock != null &&
        !this.lockAcquired &&
        this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack));
    try {
      let t = null;
      const s = await Gn(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", s),
        s !== null &&
          (this._isValidSession(s)
            ? (t = s)
            : (this._debug("#getSession()", "session from storage is not valid"),
              await this._removeSession())),
        !t)
      )
        return { data: { session: null }, error: null };
      const a = t.expires_at ? t.expires_at * 1e3 - Date.now() < Wh : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${a ? "" : " not"} expired`,
          "expires_at",
          t.expires_at,
        ),
        !a)
      ) {
        if (this.userStorage) {
          const c = await Gn(this.userStorage, this.storageKey + "-user");
          c?.user ? (t.user = c.user) : (t.user = tf());
        }
        if (this.storage.isServer && t.user && !t.user.__isUserNotAvailableProxy) {
          const c = { value: this.suppressGetSessionWarning };
          ((t.user = AC(t.user, c)), c.value && (this.suppressGetSessionWarning = !0));
        }
        return { data: { session: t }, error: null };
      }
      const { data: l, error: u } = await this._callRefreshToken(t.refresh_token);
      return u
        ? this._returnResult({ data: { session: null }, error: u })
        : this._returnResult({ data: { session: l }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(t) {
    if (t) return await this._getUser(t);
    await this.initializePromise;
    let s;
    return (
      this.lock != null
        ? (s = await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser()))
        : (s = await this._getUser()),
      s.data.user && (this.suppressGetSessionWarning = !0),
      s
    );
  }
  async _getUser(t) {
    try {
      return t
        ? await ne(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: t,
            xform: Cr,
          })
        : await this._useSession(async (s) => {
            var a, l, u;
            const { data: c, error: d } = s;
            if (d) throw d;
            return !(!((a = c.session) === null || a === void 0) && a.access_token) &&
              !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new ut() }
              : await ne(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (u = (l = c.session) === null || l === void 0 ? void 0 : l.access_token) !==
                      null && u !== void 0
                      ? u
                      : void 0,
                  xform: Cr,
                });
          });
    } catch (s) {
      if (Z(s))
        return (
          Ml(s) &&
            (await this._removeSession(),
            await st(this.storage, `${this.storageKey}-code-verifier`)),
          this._returnResult({ data: { user: null }, error: s })
        );
      throw s;
    }
  }
  async updateUser(t, s = {}) {
    return (
      await this.initializePromise,
      this.lock != null
        ? await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(t, s))
        : await this._updateUser(t, s)
    );
  }
  async _updateUser(t, s = {}) {
    try {
      return await this._useSession(async (a) => {
        const { data: l, error: u } = a;
        if (u) throw u;
        if (!l.session) throw new ut();
        const c = l.session;
        let d = null,
          p = null;
        this.flowType === "pkce" &&
          t.email != null &&
          ([d, p] = await fi(this.storage, this.storageKey));
        const { data: g, error: y } = await ne(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: s?.emailRedirectTo,
          body: Object.assign(Object.assign({}, t), {
            code_challenge: d,
            code_challenge_method: p,
          }),
          jwt: c.access_token,
          xform: Cr,
        });
        if (y) throw y;
        return (
          (c.user = g.user),
          await this._saveSession(c),
          await this._notifyAllSubscribers("USER_UPDATED", c),
          this._returnResult({ data: { user: c.user }, error: null })
        );
      });
    } catch (a) {
      if ((await st(this.storage, `${this.storageKey}-code-verifier`), Z(a)))
        return this._returnResult({ data: { user: null }, error: a });
      throw a;
    }
  }
  async setSession(t) {
    return (
      await this.initializePromise,
      this.lock != null
        ? await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(t))
        : await this._setSession(t)
    );
  }
  async _setSession(t) {
    try {
      if (!t.access_token || !t.refresh_token) throw new ut();
      const s = Date.now() / 1e3;
      let a = s,
        l = !0,
        u = null;
      const { payload: c } = Ll(t.access_token);
      if ((c.exp && ((a = c.exp), (l = a <= s)), l)) {
        const { data: d, error: p } = await this._callRefreshToken(t.refresh_token);
        if (p) return this._returnResult({ data: { user: null, session: null }, error: p });
        if (!d) return { data: { user: null, session: null }, error: null };
        u = d;
      } else {
        const { data: d, error: p } = await this._getUser(t.access_token);
        if (p) return this._returnResult({ data: { user: null, session: null }, error: p });
        ((u = {
          access_token: t.access_token,
          refresh_token: t.refresh_token,
          user: d.user,
          token_type: "bearer",
          expires_in: a - s,
          expires_at: a,
        }),
          await this._saveSession(u),
          await this._notifyAllSubscribers("SIGNED_IN", u));
      }
      return this._returnResult({ data: { user: u.user, session: u }, error: null });
    } catch (s) {
      if (Z(s)) return this._returnResult({ data: { session: null, user: null }, error: s });
      throw s;
    }
  }
  async refreshSession(t) {
    return (
      await this.initializePromise,
      this.lock != null
        ? await this._acquireLock(
            this.lockAcquireTimeout,
            async () => await this._refreshSession(t),
          )
        : await this._refreshSession(t)
    );
  }
  async _refreshSession(t) {
    try {
      return await this._useSession(async (s) => {
        var a;
        if (!t) {
          const { data: c, error: d } = s;
          if (d) throw d;
          t = (a = c.session) !== null && a !== void 0 ? a : void 0;
        }
        if (!t?.refresh_token) throw new ut();
        const { data: l, error: u } = await this._callRefreshToken(t.refresh_token);
        return u
          ? this._returnResult({ data: { user: null, session: null }, error: u })
          : l
            ? this._returnResult({ data: { user: l.user, session: l }, error: null })
            : this._returnResult({ data: { user: null, session: null }, error: null });
      });
    } catch (s) {
      if (Z(s)) return this._returnResult({ data: { user: null, session: null }, error: s });
      throw s;
    }
  }
  async _getSessionFromURL(t, s) {
    var a;
    try {
      if (!St()) throw new Ul("No browser detected.");
      if (t.error || t.error_description || t.error_code)
        throw new Ul(t.error_description || "Error in URL with unspecified error_description", {
          error: t.error || "unspecified_error",
          code: t.error_code || "unspecified_code",
        });
      switch (s) {
        case "implicit":
          if (this.flowType === "pkce") throw new uv("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit") throw new Ul("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (s === "pkce") {
        if ((this._debug("#_initialize()", "begin", "is PKCE flow", !0), !t.code))
          throw new uv("No code detected.");
        const { data: j, error: L } = await this._exchangeCodeForSession(t.code);
        if (L) throw L;
        const Q = new URL(window.location.href);
        return (
          Q.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", Q.toString()),
          {
            data: {
              session: j.session,
              redirectType: (a = j.redirectType) !== null && a !== void 0 ? a : null,
            },
            error: null,
          }
        );
      }
      const {
        provider_token: l,
        provider_refresh_token: u,
        access_token: c,
        refresh_token: d,
        expires_in: p,
        expires_at: g,
        token_type: y,
      } = t;
      if (!c || !p || !d || !y) throw new Ul("No session defined in URL");
      const m = Math.round(Date.now() / 1e3),
        b = parseInt(p);
      let _ = m + b;
      g && (_ = parseInt(g));
      const w = _ - m;
      w * 1e3 <= Tr &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${w}s, should have been closer to ${b}s`,
        );
      const A = _ - b;
      m - A >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            A,
            _,
            m,
          )
        : m - A < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
            A,
            _,
            m,
          );
      const { data: E, error: O } = await this._getUser(c);
      if (O) throw O;
      const M = {
        provider_token: l,
        provider_refresh_token: u,
        access_token: c,
        expires_in: b,
        expires_at: _,
        refresh_token: d,
        token_type: y,
        user: E.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        this._returnResult({ data: { session: M, redirectType: t.type }, error: null })
      );
    } catch (l) {
      if (Z(l))
        return this._returnResult({ data: { session: null, redirectType: null }, error: l });
      throw l;
    }
  }
  _isImplicitGrantCallback(t) {
    return typeof this.detectSessionInUrl == "function"
      ? this.detectSessionInUrl(new URL(window.location.href), t)
      : !!(t.access_token || t.error || t.error_description || t.error_code);
  }
  async _isPKCECallback(t) {
    const s = await Gn(this.storage, `${this.storageKey}-code-verifier`);
    return !!(t.code && s);
  }
  async signOut(t = { scope: "global" }) {
    return (
      await this.initializePromise,
      this.lock != null
        ? await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(t))
        : await this._signOut(t)
    );
  }
  async _signOut({ scope: t } = { scope: "global" }) {
    return await this._useSession(async (s) => {
      var a;
      const { data: l, error: u } = s;
      if (u && !Ml(u)) return this._returnResult({ error: u });
      const c = (a = l.session) === null || a === void 0 ? void 0 : a.access_token;
      if (c) {
        const { error: d } = await this.admin.signOut(c, t);
        if (d && !((nC(d) && (d.status === 404 || d.status === 401 || d.status === 403)) || Ml(d)))
          return this._returnResult({ error: d });
      }
      return (
        t !== "others" &&
          (await this._removeSession(), await st(this.storage, `${this.storageKey}-code-verifier`)),
        this._returnResult({ error: null })
      );
    });
  }
  onAuthStateChange(t) {
    const s = fC(),
      a = {
        id: s,
        callback: t,
        unsubscribe: () => {
          (this._debug("#unsubscribe()", "state change callback with id removed", s),
            this.stateChangeEmitters.delete(s));
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", s),
      this.stateChangeEmitters.set(s, a),
      (async () => (
        await this.initializePromise,
        this.lock != null
          ? await this._acquireLock(this.lockAcquireTimeout, async () => {
              this._emitInitialSession(s);
            })
          : await this._emitInitialSession(s)
      ))(),
      { data: { subscription: a } }
    );
  }
  async _emitInitialSession(t) {
    return await this._useSession(async (s) => {
      var a, l;
      try {
        const {
          data: { session: u },
          error: c,
        } = s;
        if (c) throw c;
        (await ((a = this.stateChangeEmitters.get(t)) === null || a === void 0
          ? void 0
          : a.callback("INITIAL_SESSION", u)),
          this._debug("INITIAL_SESSION", "callback id", t, "session", u));
      } catch (u) {
        (await ((l = this.stateChangeEmitters.get(t)) === null || l === void 0
          ? void 0
          : l.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", t, "error", u),
          Ml(u) ? console.warn(u) : console.error(u));
      }
    });
  }
  async resetPasswordForEmail(t, s = {}) {
    let a = null,
      l = null;
    this.flowType === "pkce" && ([a, l] = await fi(this.storage, this.storageKey, !0));
    try {
      return await ne(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: t,
          code_challenge: a,
          code_challenge_method: l,
          gotrue_meta_security: { captcha_token: s.captchaToken },
        },
        headers: this.headers,
        redirectTo: s.redirectTo,
      });
    } catch (u) {
      if ((await st(this.storage, `${this.storageKey}-code-verifier`), Z(u)))
        return this._returnResult({ data: null, error: u });
      throw u;
    }
  }
  async getUserIdentities() {
    var t;
    try {
      const { data: s, error: a } = await this.getUser();
      if (a) throw a;
      return this._returnResult({
        data: { identities: (t = s.user.identities) !== null && t !== void 0 ? t : [] },
        error: null,
      });
    } catch (s) {
      if (Z(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async linkIdentity(t) {
    return "token" in t ? this.linkIdentityIdToken(t) : this.linkIdentityOAuth(t);
  }
  async linkIdentityOAuth(t) {
    var s;
    try {
      const { data: a, error: l } = await this._useSession(async (u) => {
        var c, d, p, g, y;
        const { data: m, error: b } = u;
        if (b) throw b;
        const _ = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          t.provider,
          {
            redirectTo: (c = t.options) === null || c === void 0 ? void 0 : c.redirectTo,
            scopes: (d = t.options) === null || d === void 0 ? void 0 : d.scopes,
            queryParams: (p = t.options) === null || p === void 0 ? void 0 : p.queryParams,
            skipBrowserRedirect: !0,
          },
        );
        return await ne(this.fetch, "GET", _, {
          headers: this.headers,
          jwt:
            (y = (g = m.session) === null || g === void 0 ? void 0 : g.access_token) !== null &&
            y !== void 0
              ? y
              : void 0,
        });
      });
      if (l) throw l;
      return (
        St() &&
          !(!((s = t.options) === null || s === void 0) && s.skipBrowserRedirect) &&
          window.location.assign(a?.url),
        this._returnResult({ data: { provider: t.provider, url: a?.url }, error: null })
      );
    } catch (a) {
      if (Z(a)) return this._returnResult({ data: { provider: t.provider, url: null }, error: a });
      throw a;
    }
  }
  async linkIdentityIdToken(t) {
    return await this._useSession(async (s) => {
      var a;
      try {
        const {
          error: l,
          data: { session: u },
        } = s;
        if (l) throw l;
        const { options: c, provider: d, token: p, access_token: g, nonce: y } = t,
          m = await ne(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
            headers: this.headers,
            jwt: (a = u?.access_token) !== null && a !== void 0 ? a : void 0,
            body: {
              provider: d,
              id_token: p,
              access_token: g,
              nonce: y,
              link_identity: !0,
              gotrue_meta_security: { captcha_token: c?.captchaToken },
            },
            xform: nn,
          }),
          { data: b, error: _ } = m;
        return _
          ? this._returnResult({ data: { user: null, session: null }, error: _ })
          : !b || !b.session || !b.user
            ? this._returnResult({ data: { user: null, session: null }, error: new hi() })
            : (b.session &&
                (await this._saveSession(b.session),
                await this._notifyAllSubscribers("USER_UPDATED", b.session)),
              this._returnResult({ data: b, error: _ }));
      } catch (l) {
        if ((await st(this.storage, `${this.storageKey}-code-verifier`), Z(l)))
          return this._returnResult({ data: { user: null, session: null }, error: l });
        throw l;
      }
    });
  }
  async unlinkIdentity(t) {
    try {
      return await this._useSession(async (s) => {
        var a, l;
        const { data: u, error: c } = s;
        if (c) throw c;
        return await ne(this.fetch, "DELETE", `${this.url}/user/identities/${t.identity_id}`, {
          headers: this.headers,
          jwt:
            (l = (a = u.session) === null || a === void 0 ? void 0 : a.access_token) !== null &&
            l !== void 0
              ? l
              : void 0,
        });
      });
    } catch (s) {
      if (Z(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _refreshAccessToken(t) {
    const s = "#_refreshAccessToken()";
    this._debug(s, "begin");
    try {
      const a = Date.now();
      return await mC(
        async (l) => (
          l > 0 && (await gC(200 * Math.pow(2, l - 1))),
          this._debug(s, "refreshing attempt", l),
          await ne(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
            body: { refresh_token: t },
            headers: this.headers,
            xform: nn,
          })
        ),
        (l, u) => {
          const c = 200 * Math.pow(2, l);
          return u && ef(u) && Date.now() + c - a < Tr;
        },
      );
    } catch (a) {
      if ((this._debug(s, "error", a), Z(a)))
        return this._returnResult({ data: { session: null, user: null }, error: a });
      throw a;
    } finally {
      this._debug(s, "end");
    }
  }
  _isValidSession(t) {
    return (
      typeof t == "object" &&
      t !== null &&
      "access_token" in t &&
      "refresh_token" in t &&
      "expires_at" in t
    );
  }
  async _handleProviderSignIn(t, s) {
    const a = await this._getUrlForProvider(`${this.url}/authorize`, t, {
      redirectTo: s.redirectTo,
      scopes: s.scopes,
      queryParams: s.queryParams,
    });
    return (
      this._debug("#_handleProviderSignIn()", "provider", t, "options", s, "url", a),
      St() && !s.skipBrowserRedirect && window.location.assign(a),
      { data: { provider: t, url: a }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var t, s;
    const a = "#_recoverAndRefresh()";
    this._debug(a, "begin");
    try {
      const l = await Gn(this.storage, this.storageKey);
      if (l && this.userStorage) {
        let c = await Gn(this.userStorage, this.storageKey + "-user");
        (!this.storage.isServer &&
          Object.is(this.storage, this.userStorage) &&
          !c &&
          ((c = { user: l.user }), await yi(this.userStorage, this.storageKey + "-user", c)),
          (l.user = (t = c?.user) !== null && t !== void 0 ? t : tf()));
      } else if (l && !l.user && !l.user) {
        const c = await Gn(this.storage, this.storageKey + "-user");
        c && c?.user
          ? ((l.user = c.user),
            await st(this.storage, this.storageKey + "-user"),
            await yi(this.storage, this.storageKey, l))
          : (l.user = tf());
      }
      if ((this._debug(a, "session from storage", l), !this._isValidSession(l))) {
        (this._debug(a, "session is not valid"), l !== null && (await this._removeSession()));
        return;
      }
      const u = ((s = l.expires_at) !== null && s !== void 0 ? s : 1 / 0) * 1e3 - Date.now() < Wh;
      if ((this._debug(a, `session has${u ? "" : " not"} expired with margin of ${Wh}s`), u)) {
        if (this.autoRefreshToken && l.refresh_token) {
          const { error: c } = await this._callRefreshToken(l.refresh_token);
          c &&
            (iC(c)
              ? this._debug(a, "refresh discarded by commit guard", c)
              : (console.error(c),
                ef(c) ||
                  (this._debug(
                    a,
                    "refresh failed with a non-retryable error, removing the session",
                    c,
                  ),
                  await this._removeSession())));
        }
      } else if (l.user && l.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: c, error: d } = await this._getUser(l.access_token);
          !d && c?.user
            ? ((l.user = c.user),
              await this._saveSession(l),
              await this._notifyAllSubscribers("SIGNED_IN", l))
            : this._debug(a, "could not get user data, skipping SIGNED_IN notification");
        } catch (c) {
          (console.error("Error getting user data:", c),
            this._debug(a, "error getting user data, skipping SIGNED_IN notification", c));
        }
      else await this._notifyAllSubscribers("SIGNED_IN", l);
    } catch (l) {
      (this._debug(a, "error", l), console.error(l));
      return;
    } finally {
      this._debug(a, "end");
    }
  }
  async _callRefreshToken(t) {
    var s, a;
    if (!t) throw new ut();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const l = "#_callRefreshToken()";
    this._debug(l, "begin");
    try {
      this.refreshingDeferred = new bu();
      const u = await Gn(this.storage, this.storageKey),
        { data: c, error: d } = await this._refreshAccessToken(t);
      if (d) throw d;
      if (!c.session) throw new ut();
      const p = await Gn(this.storage, this.storageKey);
      if (u !== null && (p === null || p.refresh_token !== u.refresh_token)) {
        this._debug(
          l,
          "commit guard: storage changed since refresh started, discarding rotated tokens",
          { startedWith: "present", nowHolds: p ? "replaced" : "cleared" },
        );
        const b = { data: null, error: new cv() };
        return (this.refreshingDeferred.resolve(b), b);
      }
      const y = this._sessionRemovalEpoch;
      if ((await this._saveSession(c.session), this._sessionRemovalEpoch !== y)) {
        (this._debug(
          l,
          "commit guard (post-save): _removeSession ran during _saveSession, undoing write",
        ),
          await st(this.storage, this.storageKey),
          this.userStorage && (await st(this.userStorage, this.storageKey + "-user")));
        const b = { data: null, error: new cv() };
        return (this.refreshingDeferred.resolve(b), b);
      }
      await this._notifyAllSubscribers("TOKEN_REFRESHED", c.session);
      const m = { data: c.session, error: null };
      return (this.refreshingDeferred.resolve(m), m);
    } catch (u) {
      if ((this._debug(l, "error", u), Z(u))) {
        const c = { data: null, error: u };
        return (
          ef(u) || (await this._removeSession()),
          (s = this.refreshingDeferred) === null || s === void 0 || s.resolve(c),
          c
        );
      }
      throw ((a = this.refreshingDeferred) === null || a === void 0 || a.reject(u), u);
    } finally {
      ((this.refreshingDeferred = null), this._debug(l, "end"));
    }
  }
  async _notifyAllSubscribers(t, s, a = !0) {
    const l = `#_notifyAllSubscribers(${t})`;
    this._debug(l, "begin", s, `broadcast = ${a}`);
    try {
      this.broadcastChannel && a && this.broadcastChannel.postMessage({ event: t, session: s });
      const u = [],
        c = Array.from(this.stateChangeEmitters.values()).map(async (d) => {
          try {
            await d.callback(t, s);
          } catch (p) {
            u.push(p);
          }
        });
      if ((await Promise.all(c), u.length > 0)) {
        for (let d = 0; d < u.length; d += 1) console.error(u[d]);
        throw u[0];
      }
    } finally {
      this._debug(l, "end");
    }
  }
  async _saveSession(t) {
    (this._debug("#_saveSession()", t),
      (this.suppressGetSessionWarning = !0),
      await st(this.storage, `${this.storageKey}-code-verifier`));
    const s = Object.assign({}, t),
      a = s.user && s.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !a && s.user && (await yi(this.userStorage, this.storageKey + "-user", { user: s.user }));
      const l = Object.assign({}, s);
      delete l.user;
      const u = gv(l);
      await yi(this.storage, this.storageKey, u);
    } else {
      const l = gv(s);
      await yi(this.storage, this.storageKey, l);
    }
  }
  async _removeSession() {
    ((this._sessionRemovalEpoch += 1),
      this._debug("#_removeSession()"),
      (this.suppressGetSessionWarning = !1),
      await st(this.storage, this.storageKey),
      await st(this.storage, this.storageKey + "-code-verifier"),
      await st(this.storage, this.storageKey + "-user"),
      this.userStorage && (await st(this.userStorage, this.storageKey + "-user")),
      await this._notifyAllSubscribers("SIGNED_OUT", null));
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const t = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      t && St() && window?.removeEventListener && window.removeEventListener("visibilitychange", t);
    } catch (s) {
      console.error("removing visibilitychange callback failed", s);
    }
  }
  async _startAutoRefresh() {
    (await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()"));
    const t = setInterval(() => this._autoRefreshTokenTick(), Tr);
    ((this.autoRefreshTicker = t),
      t && typeof t == "object" && typeof t.unref == "function"
        ? t.unref()
        : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(t));
    const s = setTimeout(async () => {
      (await this.initializePromise, await this._autoRefreshTokenTick());
    }, 0);
    ((this.autoRefreshTickTimeout = s),
      s && typeof s == "object" && typeof s.unref == "function"
        ? s.unref()
        : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(s));
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const t = this.autoRefreshTicker;
    ((this.autoRefreshTicker = null), t && clearInterval(t));
    const s = this.autoRefreshTickTimeout;
    ((this.autoRefreshTickTimeout = null), s && clearTimeout(s));
  }
  async startAutoRefresh() {
    (this._removeVisibilityChangedCallback(), await this._startAutoRefresh());
  }
  async stopAutoRefresh() {
    (this._removeVisibilityChangedCallback(), await this._stopAutoRefresh());
  }
  async dispose() {
    var t;
    (this._removeVisibilityChangedCallback(),
      await this._stopAutoRefresh(),
      (t = this.broadcastChannel) === null || t === void 0 || t.close(),
      (this.broadcastChannel = null),
      this.stateChangeEmitters.clear());
  }
  async _autoRefreshTokenTick() {
    if ((this._debug("#_autoRefreshTokenTick()", "begin"), this.lock != null)) {
      try {
        await this._acquireLock(0, async () => {
          try {
            const t = Date.now();
            try {
              return await this._useSession(async (s) => {
                const {
                  data: { session: a },
                } = s;
                if (!a || !a.refresh_token || !a.expires_at) {
                  this._debug("#_autoRefreshTokenTick()", "no session");
                  return;
                }
                const l = Math.floor((a.expires_at * 1e3 - t) / Tr);
                (this._debug(
                  "#_autoRefreshTokenTick()",
                  `access token expires in ${l} ticks, a tick lasts ${Tr}ms, refresh threshold is ${Ma} ticks`,
                ),
                  l <= Ma && (await this._callRefreshToken(a.refresh_token)));
              });
            } catch (s) {
              console.error(
                "Auto refresh tick failed with error. This is likely a transient error.",
                s,
              );
            }
          } finally {
            this._debug("#_autoRefreshTokenTick()", "end");
          }
        });
      } catch (t) {
        if (t instanceof UC) this._debug("auto refresh token tick lock not available");
        else throw t;
      }
      return;
    }
    if (this.refreshingDeferred !== null) {
      this._debug("#_autoRefreshTokenTick()", "refresh already in flight, skipping");
      return;
    }
    try {
      const t = Date.now();
      try {
        await this._useSession(async (s) => {
          const {
            data: { session: a },
          } = s;
          if (!a || !a.refresh_token || !a.expires_at) {
            this._debug("#_autoRefreshTokenTick()", "no session");
            return;
          }
          const l = Math.floor((a.expires_at * 1e3 - t) / Tr);
          (this._debug(
            "#_autoRefreshTokenTick()",
            `access token expires in ${l} ticks, a tick lasts ${Tr}ms, refresh threshold is ${Ma} ticks`,
          ),
            l <= Ma && (await this._callRefreshToken(a.refresh_token)));
        });
      } catch (s) {
        console.error("Auto refresh tick failed with error. This is likely a transient error.", s);
      }
    } finally {
      this._debug("#_autoRefreshTokenTick()", "end");
    }
  }
  async _handleVisibilityChange() {
    if ((this._debug("#_handleVisibilityChange()"), !St() || !window?.addEventListener))
      return (this.autoRefreshToken && this.startAutoRefresh(), !1);
    try {
      ((this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(!1);
        } catch (t) {
          this._debug("#visibilityChangedCallback", "error", t);
        }
      }),
        window?.addEventListener("visibilitychange", this.visibilityChangedCallback),
        await this._onVisibilityChanged(!0));
    } catch (t) {
      console.error("_handleVisibilityChange", t);
    }
  }
  async _onVisibilityChanged(t) {
    const s = `#_onVisibilityChanged(${t})`;
    if (
      (this._debug(s, "visibilityState", document.visibilityState),
      document.visibilityState === "visible")
    ) {
      if ((this.autoRefreshToken && this._startAutoRefresh(), !t))
        if ((await this.initializePromise, this.lock != null))
          await this._acquireLock(this.lockAcquireTimeout, async () => {
            if (document.visibilityState !== "visible") {
              this._debug(
                s,
                "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting",
              );
              return;
            }
            await this._recoverAndRefresh();
          });
        else {
          if (document.visibilityState !== "visible") {
            this._debug(s, "visibilityState is no longer visible, skipping recovery");
            return;
          }
          await this._recoverAndRefresh();
        }
    } else
      document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  async _getUrlForProvider(t, s, a) {
    const l = [`provider=${encodeURIComponent(s)}`];
    if (
      (a?.redirectTo && l.push(`redirect_to=${encodeURIComponent(a.redirectTo)}`),
      a?.scopes && l.push(`scopes=${encodeURIComponent(a.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [u, c] = await fi(this.storage, this.storageKey),
        d = new URLSearchParams({
          code_challenge: `${encodeURIComponent(u)}`,
          code_challenge_method: `${encodeURIComponent(c)}`,
        });
      l.push(d.toString());
    }
    if (a?.queryParams) {
      const u = new URLSearchParams(a.queryParams);
      l.push(u.toString());
    }
    return (
      a?.skipBrowserRedirect && l.push(`skip_http_redirect=${a.skipBrowserRedirect}`),
      `${t}?${l.join("&")}`
    );
  }
  async _unenroll(t) {
    try {
      return await this._useSession(async (s) => {
        var a;
        const { data: l, error: u } = s;
        return u
          ? this._returnResult({ data: null, error: u })
          : await ne(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
              headers: this.headers,
              jwt: (a = l?.session) === null || a === void 0 ? void 0 : a.access_token,
            });
      });
    } catch (s) {
      if (Z(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _enroll(t) {
    try {
      return await this._useSession(async (s) => {
        var a, l;
        const { data: u, error: c } = s;
        if (c) return this._returnResult({ data: null, error: c });
        const d = Object.assign(
            { friendly_name: t.friendlyName, factor_type: t.factorType },
            t.factorType === "phone"
              ? { phone: t.phone }
              : t.factorType === "totp"
                ? { issuer: t.issuer }
                : {},
          ),
          { data: p, error: g } = await ne(this.fetch, "POST", `${this.url}/factors`, {
            body: d,
            headers: this.headers,
            jwt: (a = u?.session) === null || a === void 0 ? void 0 : a.access_token,
          });
        return g
          ? this._returnResult({ data: null, error: g })
          : (t.factorType === "totp" &&
              p.type === "totp" &&
              !((l = p?.totp) === null || l === void 0) &&
              l.qr_code &&
              (p.totp.qr_code = `data:image/svg+xml;utf-8,${p.totp.qr_code}`),
            this._returnResult({ data: p, error: null }));
      });
    } catch (s) {
      if (Z(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _verify(t) {
    const s = async () => {
      try {
        return await this._useSession(async (a) => {
          var l;
          const { data: u, error: c } = a;
          if (c) return this._returnResult({ data: null, error: c });
          const d = Object.assign(
              { challenge_id: t.challengeId },
              "webauthn" in t
                ? {
                    webauthn: Object.assign(Object.assign({}, t.webauthn), {
                      credential_response:
                        t.webauthn.type === "create"
                          ? wv(t.webauthn.credential_response)
                          : Ev(t.webauthn.credential_response),
                    }),
                  }
                : { code: t.code },
            ),
            { data: p, error: g } = await ne(
              this.fetch,
              "POST",
              `${this.url}/factors/${t.factorId}/verify`,
              {
                body: d,
                headers: this.headers,
                jwt: (l = u?.session) === null || l === void 0 ? void 0 : l.access_token,
              },
            );
          return g
            ? this._returnResult({ data: null, error: g })
            : (await this._saveSession(
                Object.assign({ expires_at: Math.round(Date.now() / 1e3) + p.expires_in }, p),
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", p),
              this._returnResult({ data: p, error: g }));
        });
      } catch (a) {
        if (Z(a)) return this._returnResult({ data: null, error: a });
        throw a;
      }
    };
    return this.lock != null ? this._acquireLock(this.lockAcquireTimeout, s) : s();
  }
  async _challenge(t) {
    const s = async () => {
      try {
        return await this._useSession(async (a) => {
          var l;
          const { data: u, error: c } = a;
          if (c) return this._returnResult({ data: null, error: c });
          const d = await ne(this.fetch, "POST", `${this.url}/factors/${t.factorId}/challenge`, {
            body: t,
            headers: this.headers,
            jwt: (l = u?.session) === null || l === void 0 ? void 0 : l.access_token,
          });
          if (d.error) return d;
          const { data: p } = d;
          if (p.type !== "webauthn") return { data: p, error: null };
          switch (p.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, p), {
                  webauthn: Object.assign(Object.assign({}, p.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, p.webauthn.credential_options),
                      { publicKey: _v(p.webauthn.credential_options.publicKey) },
                    ),
                  }),
                }),
                error: null,
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, p), {
                  webauthn: Object.assign(Object.assign({}, p.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, p.webauthn.credential_options),
                      { publicKey: Sv(p.webauthn.credential_options.publicKey) },
                    ),
                  }),
                }),
                error: null,
              };
          }
        });
      } catch (a) {
        if (Z(a)) return this._returnResult({ data: null, error: a });
        throw a;
      }
    };
    return this.lock != null ? this._acquireLock(this.lockAcquireTimeout, s) : s();
  }
  async _challengeAndVerify(t) {
    const { data: s, error: a } = await this._challenge({ factorId: t.factorId });
    return a
      ? this._returnResult({ data: null, error: a })
      : await this._verify({ factorId: t.factorId, challengeId: s.id, code: t.code });
  }
  async _listFactors() {
    var t;
    const {
      data: { user: s },
      error: a,
    } = await this.getUser();
    if (a) return { data: null, error: a };
    const l = { all: [], phone: [], totp: [], webauthn: [] };
    for (const u of (t = s?.factors) !== null && t !== void 0 ? t : [])
      (l.all.push(u), u.status === "verified" && l[u.factor_type].push(u));
    return { data: l, error: null };
  }
  async _getAuthenticatorAssuranceLevel(t) {
    var s, a, l, u;
    if (t)
      try {
        const { payload: _ } = Ll(t);
        let w = null;
        _.aal && (w = _.aal);
        let A = w;
        const {
          data: { user: E },
          error: O,
        } = await this.getUser(t);
        if (O) return this._returnResult({ data: null, error: O });
        ((a =
          (s = E?.factors) === null || s === void 0
            ? void 0
            : s.filter((L) => L.status === "verified")) !== null && a !== void 0
          ? a
          : []
        ).length > 0 && (A = "aal2");
        const j = _.amr || [];
        return {
          data: { currentLevel: w, nextLevel: A, currentAuthenticationMethods: j },
          error: null,
        };
      } catch (_) {
        if (Z(_)) return this._returnResult({ data: null, error: _ });
        throw _;
      }
    const {
      data: { session: c },
      error: d,
    } = await this.getSession();
    if (d) return this._returnResult({ data: null, error: d });
    if (!c)
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null,
      };
    const { payload: p } = Ll(c.access_token);
    let g = null;
    p.aal && (g = p.aal);
    let y = g;
    ((u =
      (l = c.user.factors) === null || l === void 0
        ? void 0
        : l.filter((_) => _.status === "verified")) !== null && u !== void 0
      ? u
      : []
    ).length > 0 && (y = "aal2");
    const b = p.amr || [];
    return {
      data: { currentLevel: g, nextLevel: y, currentAuthenticationMethods: b },
      error: null,
    };
  }
  async _getAuthorizationDetails(t) {
    try {
      return await this._useSession(async (s) => {
        const {
          data: { session: a },
          error: l,
        } = s;
        return l
          ? this._returnResult({ data: null, error: l })
          : a
            ? await ne(this.fetch, "GET", `${this.url}/oauth/authorizations/${t}`, {
                headers: this.headers,
                jwt: a.access_token,
                xform: (u) => ({ data: u, error: null }),
              })
            : this._returnResult({ data: null, error: new ut() });
      });
    } catch (s) {
      if (Z(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _approveAuthorization(t, s) {
    try {
      return await this._useSession(async (a) => {
        const {
          data: { session: l },
          error: u,
        } = a;
        if (u) return this._returnResult({ data: null, error: u });
        if (!l) return this._returnResult({ data: null, error: new ut() });
        const c = await ne(this.fetch, "POST", `${this.url}/oauth/authorizations/${t}/consent`, {
          headers: this.headers,
          jwt: l.access_token,
          body: { action: "approve" },
          xform: (d) => ({ data: d, error: null }),
        });
        return (
          c.data &&
            c.data.redirect_url &&
            St() &&
            !s?.skipBrowserRedirect &&
            window.location.assign(c.data.redirect_url),
          c
        );
      });
    } catch (a) {
      if (Z(a)) return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  async _denyAuthorization(t, s) {
    try {
      return await this._useSession(async (a) => {
        const {
          data: { session: l },
          error: u,
        } = a;
        if (u) return this._returnResult({ data: null, error: u });
        if (!l) return this._returnResult({ data: null, error: new ut() });
        const c = await ne(this.fetch, "POST", `${this.url}/oauth/authorizations/${t}/consent`, {
          headers: this.headers,
          jwt: l.access_token,
          body: { action: "deny" },
          xform: (d) => ({ data: d, error: null }),
        });
        return (
          c.data &&
            c.data.redirect_url &&
            St() &&
            !s?.skipBrowserRedirect &&
            window.location.assign(c.data.redirect_url),
          c
        );
      });
    } catch (a) {
      if (Z(a)) return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: s },
          error: a,
        } = t;
        return a
          ? this._returnResult({ data: null, error: a })
          : s
            ? await ne(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: s.access_token,
                xform: (l) => ({ data: l, error: null }),
              })
            : this._returnResult({ data: null, error: new ut() });
      });
    } catch (t) {
      if (Z(t)) return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _revokeOAuthGrant(t) {
    try {
      return await this._useSession(async (s) => {
        const {
          data: { session: a },
          error: l,
        } = s;
        return l
          ? this._returnResult({ data: null, error: l })
          : a
            ? (await ne(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: a.access_token,
                query: { client_id: t.clientId },
                noResolveJson: !0,
              }),
              { data: {}, error: null })
            : this._returnResult({ data: null, error: new ut() });
      });
    } catch (s) {
      if (Z(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async fetchJwk(t, s = { keys: [] }) {
    let a = s.keys.find((d) => d.kid === t);
    if (a) return a;
    const l = Date.now();
    if (((a = this.jwks.keys.find((d) => d.kid === t)), a && this.jwks_cached_at + eC > l))
      return a;
    const { data: u, error: c } = await ne(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers,
    });
    if (c) throw c;
    return !u.keys ||
      u.keys.length === 0 ||
      ((this.jwks = u), (this.jwks_cached_at = l), (a = u.keys.find((d) => d.kid === t)), !a)
      ? null
      : a;
  }
  async getClaims(t, s = {}) {
    try {
      let a = t;
      if (!a) {
        const { data: _, error: w } = await this.getSession();
        if (w || !_.session) return this._returnResult({ data: null, error: w });
        a = _.session.access_token;
      }
      const {
        header: l,
        payload: u,
        signature: c,
        raw: { header: d, payload: p },
      } = Ll(a);
      if (!s?.allowExpired)
        try {
          EC(u.exp);
        } catch (_) {
          throw new tu(_ instanceof Error ? _.message : "JWT validation failed");
        }
      const g =
        !l.alg ||
        l.alg.startsWith("HS") ||
        !l.kid ||
        !("crypto" in globalThis && "subtle" in globalThis.crypto)
          ? null
          : await this.fetchJwk(l.kid, s?.keys ? { keys: s.keys } : s?.jwks);
      if (!g) {
        const { error: _ } = await this.getUser(a);
        if (_) throw _;
        return { data: { claims: u, header: l, signature: c }, error: null };
      }
      const y = TC(l.alg),
        m = await crypto.subtle.importKey("jwk", g, y, !0, ["verify"]);
      if (!(await crypto.subtle.verify(y, m, c, cC(`${d}.${p}`))))
        throw new tu("Invalid JWT signature");
      return { data: { claims: u, header: l, signature: c }, error: null };
    } catch (a) {
      if (Z(a)) return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  async signInWithPasskey(t) {
    var s, a, l;
    ln(this.experimental);
    try {
      if (!su())
        return this._returnResult({
          data: null,
          error: new cn("Browser does not support WebAuthn", null),
        });
      const { data: u, error: c } = await this._startPasskeyAuthentication({
        options: {
          captchaToken: (s = t?.options) === null || s === void 0 ? void 0 : s.captchaToken,
        },
      });
      if (c || !u) return this._returnResult({ data: null, error: c });
      const d = Sv(u.options),
        p =
          (l = (a = t?.options) === null || a === void 0 ? void 0 : a.signal) !== null &&
          l !== void 0
            ? l
            : Cf.createNewAbortSignal(),
        { data: g, error: y } = await yb({ publicKey: d, signal: p });
      if (y || !g)
        return this._returnResult({
          data: null,
          error: y ?? new cn("WebAuthn ceremony failed", null),
        });
      const m = Ev(g);
      return this._verifyPasskeyAuthentication({ challengeId: u.challenge_id, credential: m });
    } catch (u) {
      if (Z(u)) return this._returnResult({ data: null, error: u });
      throw u;
    }
  }
  async registerPasskey(t) {
    var s, a;
    ln(this.experimental);
    try {
      if (!su())
        return this._returnResult({
          data: null,
          error: new cn("Browser does not support WebAuthn", null),
        });
      const { data: l, error: u } = await this._startPasskeyRegistration();
      if (u || !l) return this._returnResult({ data: null, error: u });
      const c = _v(l.options),
        d =
          (a = (s = t?.options) === null || s === void 0 ? void 0 : s.signal) !== null &&
          a !== void 0
            ? a
            : Cf.createNewAbortSignal(),
        { data: p, error: g } = await mb({ publicKey: c, signal: d });
      if (g || !p)
        return this._returnResult({
          data: null,
          error: g ?? new cn("WebAuthn ceremony failed", null),
        });
      const y = wv(p);
      return this._verifyPasskeyRegistration({ challengeId: l.challenge_id, credential: y });
    } catch (l) {
      if (Z(l)) return this._returnResult({ data: null, error: l });
      throw l;
    }
  }
  async _startPasskeyRegistration() {
    ln(this.experimental);
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: s },
          error: a,
        } = t;
        if (a) return this._returnResult({ data: null, error: a });
        if (!s) return this._returnResult({ data: null, error: new ut() });
        const { data: l, error: u } = await ne(
          this.fetch,
          "POST",
          `${this.url}/passkeys/registration/options`,
          { headers: this.headers, jwt: s.access_token, body: {} },
        );
        return u
          ? this._returnResult({ data: null, error: u })
          : this._returnResult({ data: l, error: null });
      });
    } catch (t) {
      if (Z(t)) return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _verifyPasskeyRegistration(t) {
    ln(this.experimental);
    try {
      return await this._useSession(async (s) => {
        const {
          data: { session: a },
          error: l,
        } = s;
        if (l) return this._returnResult({ data: null, error: l });
        if (!a) return this._returnResult({ data: null, error: new ut() });
        const { data: u, error: c } = await ne(
          this.fetch,
          "POST",
          `${this.url}/passkeys/registration/verify`,
          {
            headers: this.headers,
            jwt: a.access_token,
            body: { challenge_id: t.challengeId, credential: t.credential },
          },
        );
        return c
          ? this._returnResult({ data: null, error: c })
          : this._returnResult({ data: u, error: null });
      });
    } catch (s) {
      if (Z(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _startPasskeyAuthentication(t) {
    var s;
    ln(this.experimental);
    try {
      const { data: a, error: l } = await ne(
        this.fetch,
        "POST",
        `${this.url}/passkeys/authentication/options`,
        {
          headers: this.headers,
          body: {
            gotrue_meta_security: {
              captcha_token: (s = t?.options) === null || s === void 0 ? void 0 : s.captchaToken,
            },
          },
        },
      );
      return l
        ? this._returnResult({ data: null, error: l })
        : this._returnResult({ data: a, error: null });
    } catch (a) {
      if (Z(a)) return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  async _verifyPasskeyAuthentication(t) {
    ln(this.experimental);
    try {
      const { data: s, error: a } = await ne(
        this.fetch,
        "POST",
        `${this.url}/passkeys/authentication/verify`,
        {
          headers: this.headers,
          body: { challenge_id: t.challengeId, credential: t.credential },
          xform: nn,
        },
      );
      return a
        ? this._returnResult({ data: null, error: a })
        : (s.session &&
            (await this._saveSession(s.session),
            await this._notifyAllSubscribers("SIGNED_IN", s.session)),
          this._returnResult({ data: s, error: null }));
    } catch (s) {
      if (Z(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _listPasskeys() {
    ln(this.experimental);
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: s },
          error: a,
        } = t;
        if (a) return this._returnResult({ data: null, error: a });
        if (!s) return this._returnResult({ data: null, error: new ut() });
        const { data: l, error: u } = await ne(this.fetch, "GET", `${this.url}/passkeys`, {
          headers: this.headers,
          jwt: s.access_token,
          xform: (c) => ({ data: c, error: null }),
        });
        return u
          ? this._returnResult({ data: null, error: u })
          : this._returnResult({ data: l, error: null });
      });
    } catch (t) {
      if (Z(t)) return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _updatePasskey(t) {
    ln(this.experimental);
    try {
      return await this._useSession(async (s) => {
        const {
          data: { session: a },
          error: l,
        } = s;
        if (l) return this._returnResult({ data: null, error: l });
        if (!a) return this._returnResult({ data: null, error: new ut() });
        const { data: u, error: c } = await ne(
          this.fetch,
          "PATCH",
          `${this.url}/passkeys/${t.passkeyId}`,
          { headers: this.headers, jwt: a.access_token, body: { friendly_name: t.friendlyName } },
        );
        return c
          ? this._returnResult({ data: null, error: c })
          : this._returnResult({ data: u, error: null });
      });
    } catch (s) {
      if (Z(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _deletePasskey(t) {
    ln(this.experimental);
    try {
      return await this._useSession(async (s) => {
        const {
          data: { session: a },
          error: l,
        } = s;
        if (l) return this._returnResult({ data: null, error: l });
        if (!a) return this._returnResult({ data: null, error: new ut() });
        const { error: u } = await ne(this.fetch, "DELETE", `${this.url}/passkeys/${t.passkeyId}`, {
          headers: this.headers,
          jwt: a.access_token,
          noResolveJson: !0,
        });
        return u
          ? this._returnResult({ data: null, error: u })
          : this._returnResult({ data: null, error: null });
      });
    } catch (s) {
      if (Z(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
}
Qa.nextInstanceID = {};
const QC = Qa,
  YC = "2.107.0";
let Da = "",
  au;
if (typeof Deno < "u") {
  var rf;
  ((Da = "deno"), (au = (rf = Deno.version) === null || rf === void 0 ? void 0 : rf.deno));
} else if (typeof document < "u") Da = "web";
else if (typeof navigator < "u" && navigator.product === "ReactNative") Da = "react-native";
else {
  var sf;
  ((Da = "node"),
    (au =
      typeof process < "u"
        ? (sf = process.version) === null || sf === void 0
          ? void 0
          : sf.replace(/^v/, "")
        : void 0));
}
const vb = [`runtime=${Da}`];
au && vb.push(`runtime-version=${au}`);
const JC = { "X-Client-Info": `supabase-js/${YC}; ${vb.join("; ")}` },
  XC = { headers: JC },
  ZC = { schema: "public" },
  WC = { autoRefreshToken: !0, persistSession: !0, detectSessionInUrl: !0, flowType: "implicit" },
  ex = {},
  tx = { enabled: !1, respectSamplingDecision: !0 };
function nx(e, t, s, a) {
  function l(u) {
    return u instanceof s
      ? u
      : new s(function (c) {
          c(u);
        });
  }
  return new (s || (s = Promise))(function (u, c) {
    function d(y) {
      try {
        g(a.next(y));
      } catch (m) {
        c(m);
      }
    }
    function p(y) {
      try {
        g(a.throw(y));
      } catch (m) {
        c(m);
      }
    }
    function g(y) {
      y.done ? u(y.value) : l(y.value).then(d, p);
    }
    g((a = a.apply(e, [])).next());
  });
}
let af = null;
const rx = "@opentelemetry/api";
function sx() {
  return (af === null && (af = import(rx).catch(() => null)), af);
}
function ix() {
  return nx(this, void 0, void 0, function* () {
    try {
      const e = yield sx();
      if (!e || !e.propagation || !e.context) return null;
      const t = {};
      e.propagation.inject(e.context.active(), t);
      const s = t.traceparent;
      return s ? { traceparent: s, tracestate: t.tracestate, baggage: t.baggage } : null;
    } catch {
      return null;
    }
  });
}
function ax(e) {
  if (!e || typeof e != "string") return null;
  const t = e.split("-");
  if (t.length !== 4) return null;
  const [s, a, l, u] = t;
  if (s.length !== 2 || a.length !== 32 || l.length !== 16 || u.length !== 2) return null;
  const c = /^[0-9a-f]+$/i;
  return !c.test(s) ||
    !c.test(a) ||
    !c.test(l) ||
    !c.test(u) ||
    a === "00000000000000000000000000000000" ||
    l === "0000000000000000"
    ? null
    : {
        version: s,
        traceId: a,
        parentId: l,
        traceFlags: u,
        isSampled: (parseInt(u, 16) & 1) === 1,
      };
}
function ox(e, t) {
  if (!e || !t || t.length === 0) return !1;
  let s;
  if (e instanceof URL) s = e;
  else
    try {
      s = new URL(e);
    } catch {
      return !1;
    }
  for (const a of t)
    try {
      if (typeof a == "string") {
        if (lx(s.hostname, a)) return !0;
      } else if (a instanceof RegExp) {
        if (a.test(s.hostname)) return !0;
      } else if (typeof a == "function" && a(s)) return !0;
    } catch {
      continue;
    }
  return !1;
}
function lx(e, t) {
  if (t === e) return !0;
  if (t.startsWith("*.")) {
    const s = t.slice(2);
    if (e.endsWith(s) && (e === s || e.endsWith("." + s))) return !0;
  }
  return !1;
}
function ux(e) {
  const t = [];
  try {
    const s = new URL(e);
    t.push(s.hostname);
  } catch {}
  return (t.push("*.supabase.co", "*.supabase.in"), t.push("localhost", "127.0.0.1", "[::1]"), t);
}
function Ya(e) {
  "@babel/helpers - typeof";
  return (
    (Ya =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ya(e)
  );
}
function cx(e, t) {
  if (Ya(e) != "object" || !e) return e;
  var s = e[Symbol.toPrimitive];
  if (s !== void 0) {
    var a = s.call(e, t);
    if (Ya(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hx(e) {
  var t = cx(e, "string");
  return Ya(t) == "symbol" ? t : t + "";
}
function fx(e, t, s) {
  return (
    (t = hx(t)) in e
      ? Object.defineProperty(e, t, { value: s, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = s),
    e
  );
}
function Tv(e, t) {
  var s = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      s.push.apply(s, a));
  }
  return s;
}
function Ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var s = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Tv(Object(s), !0).forEach(function (a) {
          fx(e, a, s[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
        : Tv(Object(s)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a));
          });
  }
  return e;
}
const dx = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  px = () => Headers,
  gx = (e, t, s, a, l) => {
    const u = dx(a),
      c = px(),
      d = l?.enabled === !0,
      p = l?.respectSamplingDecision !== !1,
      g = d ? ux(t) : null;
    return async (y, m) => {
      var b;
      const _ = (b = await s()) !== null && b !== void 0 ? b : e;
      let w = new c(m?.headers);
      if (
        (w.has("apikey") || w.set("apikey", e),
        w.has("Authorization") || w.set("Authorization", `Bearer ${_}`),
        g)
      ) {
        const A = await mx(y, g, p);
        A &&
          (A.traceparent && !w.has("traceparent") && w.set("traceparent", A.traceparent),
          A.tracestate && !w.has("tracestate") && w.set("tracestate", A.tracestate),
          A.baggage && !w.has("baggage") && w.set("baggage", A.baggage));
      }
      return u(y, Ke(Ke({}, m), {}, { headers: w }));
    };
  };
async function mx(e, t, s) {
  if (!ox(typeof e == "string" || e instanceof URL ? e : e.url, t)) return null;
  const a = await ix();
  if (!a || !a.traceparent) return null;
  if (s) {
    const l = ax(a.traceparent);
    if (l && !l.isSampled) return null;
  }
  return a;
}
function Rv(e) {
  return typeof e == "boolean" ? { enabled: e } : e;
}
function yx(e) {
  return e.endsWith("/") ? e : e + "/";
}
function vx(e, t) {
  var s, a, l, u, c, d;
  const { db: p, auth: g, realtime: y, global: m } = e,
    { db: b, auth: _, realtime: w, global: A } = t,
    E = Rv(e.tracePropagation),
    O = Rv(t.tracePropagation),
    M = {
      db: Ke(Ke({}, b), p),
      auth: Ke(Ke({}, _), g),
      realtime: Ke(Ke({}, w), y),
      storage: {},
      global: Ke(
        Ke(Ke({}, A), m),
        {},
        {
          headers: Ke(
            Ke({}, (s = A?.headers) !== null && s !== void 0 ? s : {}),
            (a = m?.headers) !== null && a !== void 0 ? a : {},
          ),
        },
      ),
      tracePropagation: {
        enabled:
          (l = (u = E?.enabled) !== null && u !== void 0 ? u : O?.enabled) !== null && l !== void 0
            ? l
            : !1,
        respectSamplingDecision:
          (c =
            (d = E?.respectSamplingDecision) !== null && d !== void 0
              ? d
              : O?.respectSamplingDecision) !== null && c !== void 0
            ? c
            : !0,
      },
      accessToken: async () => "",
    };
  return (e.accessToken ? (M.accessToken = e.accessToken) : delete M.accessToken, M);
}
function bx(e) {
  const t = e?.trim();
  if (!t) throw new Error("supabaseUrl is required.");
  if (!t.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(yx(t));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var _x = class extends QC {
    constructor(e) {
      super(e);
    }
  },
  Sx = class {
    constructor(e, t, s) {
      var a, l;
      ((this.supabaseUrl = e), (this.supabaseKey = t));
      const u = bx(e);
      if (!t) throw new Error("supabaseKey is required.");
      ((this.realtimeUrl = new URL("realtime/v1", u)),
        (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws")),
        (this.authUrl = new URL("auth/v1", u)),
        (this.storageUrl = new URL("storage/v1", u)),
        (this.functionsUrl = new URL("functions/v1", u)));
      const c = `sb-${u.hostname.split(".")[0]}-auth-token`,
        d = {
          db: ZC,
          realtime: ex,
          auth: Ke(Ke({}, WC), {}, { storageKey: c }),
          global: XC,
          tracePropagation: tx,
        },
        p = vx(s ?? {}, d);
      if (
        ((this.settings = p),
        (this.storageKey = (a = p.auth.storageKey) !== null && a !== void 0 ? a : ""),
        (this.headers = (l = p.global.headers) !== null && l !== void 0 ? l : {}),
        p.accessToken)
      )
        ((this.accessToken = p.accessToken),
          (this.auth = new Proxy(
            {},
            {
              get: (y, m) => {
                throw new Error(
                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(m)} is not possible`,
                );
              },
            },
          )));
      else {
        var g;
        this.auth = this._initSupabaseAuthClient(
          (g = p.auth) !== null && g !== void 0 ? g : {},
          this.headers,
          p.global.fetch,
        );
      }
      ((this.fetch = gx(t, e, this._getAccessToken.bind(this), p.global.fetch, p.tracePropagation)),
        (this.realtime = this._initRealtimeClient(
          Ke(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
              fetch: this.fetch,
            },
            p.realtime,
          ),
        )),
        this.accessToken &&
          Promise.resolve(this.accessToken())
            .then((y) => this.realtime.setAuth(y))
            .catch((y) => console.warn("Failed to set initial Realtime auth token:", y)),
        (this.rest = new N1(new URL("rest/v1", u).href, {
          headers: this.headers,
          schema: p.db.schema,
          fetch: this.fetch,
          timeout: p.db.timeout,
          urlLengthLimit: p.db.urlLengthLimit,
        })),
        (this.storage = new YO(this.storageUrl.href, this.headers, this.fetch, s?.storage)),
        p.accessToken || this._listenForAuthEvents());
    }
    get functions() {
      return new O1(this.functionsUrl.href, { headers: this.headers, customFetch: this.fetch });
    }
    from(e) {
      return this.rest.from(e);
    }
    schema(e) {
      return this.rest.schema(e);
    }
    rpc(e, t = {}, s = { head: !1, get: !1, count: void 0 }) {
      return this.rest.rpc(e, t, s);
    }
    channel(e, t = { config: {} }) {
      return this.realtime.channel(e, t);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(e) {
      return this.realtime.removeChannel(e);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
      var e = this,
        t,
        s;
      if (e.accessToken) return await e.accessToken();
      const { data: a } = await e.auth.getSession();
      return (t = (s = a.session) === null || s === void 0 ? void 0 : s.access_token) !== null &&
        t !== void 0
        ? t
        : e.supabaseKey;
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: s,
        storage: a,
        userStorage: l,
        storageKey: u,
        flowType: c,
        lock: d,
        debug: p,
        throwOnError: g,
        experimental: y,
        lockAcquireTimeout: m,
        skipAutoInitialize: b,
      },
      _,
      w,
    ) {
      const A = { Authorization: `Bearer ${this.supabaseKey}`, apikey: `${this.supabaseKey}` };
      return new _x({
        url: this.authUrl.href,
        headers: Ke(Ke({}, A), _),
        storageKey: u,
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: s,
        storage: a,
        userStorage: l,
        flowType: c,
        lock: d,
        debug: p,
        throwOnError: g,
        experimental: y,
        fetch: w,
        lockAcquireTimeout: m,
        skipAutoInitialize: b,
        hasCustomAuthorizationHeader: Object.keys(this.headers).some(
          (E) => E.toLowerCase() === "authorization",
        ),
      });
    }
    _initRealtimeClient(e) {
      return new vO(
        this.realtimeUrl.href,
        Ke(Ke({}, e), {}, { params: Ke(Ke({}, { apikey: this.supabaseKey }), e?.params) }),
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((e, t) => {
        this._handleTokenChanged(e, "CLIENT", t?.access_token);
      });
    }
    _handleTokenChanged(e, t, s) {
      (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== s
        ? ((this.changedAccessToken = s), this.realtime.setAuth(s))
        : e === "SIGNED_OUT" &&
          (this.realtime.setAuth(),
          t == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  };
const wx = (e, t, s) => new Sx(e, t, s);
function Ex() {
  if (typeof window < "u") return !1;
  const e = globalThis.process;
  if (!e) return !1;
  const t = e.version;
  if (t == null) return !1;
  const s = t.match(/^v(\d+)\./);
  return s ? parseInt(s[1], 10) <= 18 : !1;
}
Ex() &&
  console.warn(
    "⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217",
  );
function Tx() {
  return wx(
    "https://wgymwxapkulxidtbnwyf.supabase.co",
    "sb_publishable_cKBA4N6eg1cV9FCosAT7Rg_MLaBmYy9",
    {
      auth: {
        storage: typeof window < "u" ? localStorage : void 0,
        persistSession: !0,
        autoRefreshToken: !0,
      },
    },
  );
}
let of;
const bs = new Proxy(
    {},
    {
      get(e, t, s) {
        return (of || (of = Tx()), Reflect.get(of, t, s));
      },
    },
  ),
  Rx = ds({ type: "function" }).client(async ({ next: e }) => {
    const { data: t } = await bs.auth.getSession(),
      s = t.session?.access_token;
    return e({ headers: s ? { Authorization: `Bearer ${s}` } : {} });
  }),
  Ax = ds(),
  Av = E1(() => ({ functionMiddleware: [Rx], requestMiddleware: [Ax] }));
var no = class {
    constructor() {
      ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Ox = class extends no {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < "u" && window.addEventListener) {
            const t = () => e();
            return (
              window.addEventListener("visibilitychange", t, !1),
              () => {
                window.removeEventListener("visibilitychange", t);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e),
        this.#t?.(),
        (this.#t = e((t) => {
          typeof t == "boolean" ? this.setFocused(t) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      const e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  Yf = new Ox(),
  Cx = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  xx = class {
    #e = Cx;
    #t = !1;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  },
  gs = new xx();
function kx(e) {
  setTimeout(e, 0);
}
var jx = typeof window > "u" || "Deno" in globalThis;
function jt() {}
function Mx(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xf(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function bb(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Lr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Gt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ov(e, t) {
  const { type: s = "all", exact: a, fetchStatus: l, predicate: u, queryKey: c, stale: d } = e;
  if (c) {
    if (a) {
      if (t.queryHash !== Jf(c, t.options)) return !1;
    } else if (!Xa(t.queryKey, c)) return !1;
  }
  if (s !== "all") {
    const p = t.isActive();
    if ((s === "active" && !p) || (s === "inactive" && p)) return !1;
  }
  return !(
    (typeof d == "boolean" && t.isStale() !== d) ||
    (l && l !== t.state.fetchStatus) ||
    (u && !u(t))
  );
}
function Cv(e, t) {
  const { exact: s, status: a, predicate: l, mutationKey: u } = e;
  if (u) {
    if (!t.options.mutationKey) return !1;
    if (s) {
      if (Ja(t.options.mutationKey) !== Ja(u)) return !1;
    } else if (!Xa(t.options.mutationKey, u)) return !1;
  }
  return !((a && t.state.status !== a) || (l && !l(t)));
}
function Jf(e, t) {
  return (t?.queryKeyHashFn || Ja)(e);
}
function Ja(e) {
  return JSON.stringify(e, (t, s) =>
    jf(s)
      ? Object.keys(s)
          .sort()
          .reduce((a, l) => ((a[l] = s[l]), a), {})
      : s,
  );
}
function Xa(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((s) => Xa(e[s], t[s]))
        : !1;
}
var Dx = Object.prototype.hasOwnProperty;
function _b(e, t, s = 0) {
  if (e === t) return e;
  if (s > 500) return t;
  const a = xv(e) && xv(t);
  if (!a && !(jf(e) && jf(t))) return t;
  const u = (a ? e : Object.keys(e)).length,
    c = a ? t : Object.keys(t),
    d = c.length,
    p = a ? new Array(d) : {};
  let g = 0;
  for (let y = 0; y < d; y++) {
    const m = a ? y : c[y],
      b = e[m],
      _ = t[m];
    if (b === _) {
      ((p[m] = b), (a ? y < u : Dx.call(e, m)) && g++);
      continue;
    }
    if (b === null || _ === null || typeof b != "object" || typeof _ != "object") {
      p[m] = _;
      continue;
    }
    const w = _b(b, _, s + 1);
    ((p[m] = w), w === b && g++);
  }
  return u === d && g === u ? e : p;
}
function kf(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const s in e) if (e[s] !== t[s]) return !1;
  return !0;
}
function xv(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function jf(e) {
  if (!kv(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const s = t.prototype;
  return !(
    !kv(s) ||
    !s.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function kv(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ux(e) {
  return new Promise((t) => {
    gs.setTimeout(t, e);
  });
}
function Mf(e, t, s) {
  return typeof s.structuralSharing == "function"
    ? s.structuralSharing(e, t)
    : s.structuralSharing !== !1
      ? _b(e, t)
      : t;
}
function Lx(e, t, s = 0) {
  const a = [...e, t];
  return s && a.length > s ? a.slice(1) : a;
}
function Nx(e, t, s = 0) {
  const a = [t, ...e];
  return s && a.length > s ? a.slice(0, -1) : a;
}
var Xf = Symbol();
function Sb(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Xf
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function wb(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function Px(e, t, s) {
  let a = !1,
    l;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (l ??= t()),
        a || ((a = !0), l.aborted ? s() : l.addEventListener("abort", s, { once: !0 })),
        l
      ),
    }),
    e
  );
}
var Za = (() => {
  let e = () => jx;
  return {
    isServer() {
      return e();
    },
    setIsServer(t) {
      e = t;
    },
  };
})();
function Df() {
  let e, t;
  const s = new Promise((l, u) => {
    ((e = l), (t = u));
  });
  ((s.status = "pending"), s.catch(() => {}));
  function a(l) {
    (Object.assign(s, l), delete s.resolve, delete s.reject);
  }
  return (
    (s.resolve = (l) => {
      (a({ status: "fulfilled", value: l }), e(l));
    }),
    (s.reject = (l) => {
      (a({ status: "rejected", reason: l }), t(l));
    }),
    s
  );
}
var zx = kx;
function Bx() {
  let e = [],
    t = 0,
    s = (d) => {
      d();
    },
    a = (d) => {
      d();
    },
    l = zx;
  const u = (d) => {
      t
        ? e.push(d)
        : l(() => {
            s(d);
          });
    },
    c = () => {
      const d = e;
      ((e = []),
        d.length &&
          l(() => {
            a(() => {
              d.forEach((p) => {
                s(p);
              });
            });
          }));
    };
  return {
    batch: (d) => {
      let p;
      t++;
      try {
        p = d();
      } finally {
        (t--, t || c());
      }
      return p;
    },
    batchCalls:
      (d) =>
      (...p) => {
        u(() => {
          d(...p);
        });
      },
    schedule: u,
    setNotifyFunction: (d) => {
      s = d;
    },
    setBatchNotifyFunction: (d) => {
      a = d;
    },
    setScheduler: (d) => {
      l = d;
    },
  };
}
var yt = Bx(),
  Hx = class extends no {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < "u" && window.addEventListener) {
            const t = () => e(!0),
              s = () => e(!1);
            return (
              window.addEventListener("online", t, !1),
              window.addEventListener("offline", s, !1),
              () => {
                (window.removeEventListener("online", t), window.removeEventListener("offline", s));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((s) => {
          s(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  ou = new Hx();
function Ix(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Eb(e) {
  return (e ?? "online") === "online" ? ou.isOnline() : !0;
}
var Uf = class extends Error {
  constructor(e) {
    (super("CancelledError"), (this.revert = e?.revert), (this.silent = e?.silent));
  }
};
function Tb(e) {
  let t = !1,
    s = 0,
    a;
  const l = Df(),
    u = () => l.status !== "pending",
    c = (A) => {
      if (!u()) {
        const E = new Uf(A);
        (b(E), e.onCancel?.(E));
      }
    },
    d = () => {
      t = !0;
    },
    p = () => {
      t = !1;
    },
    g = () => Yf.isFocused() && (e.networkMode === "always" || ou.isOnline()) && e.canRun(),
    y = () => Eb(e.networkMode) && e.canRun(),
    m = (A) => {
      u() || (a?.(), l.resolve(A));
    },
    b = (A) => {
      u() || (a?.(), l.reject(A));
    },
    _ = () =>
      new Promise((A) => {
        ((a = (E) => {
          (u() || g()) && A(E);
        }),
          e.onPause?.());
      }).then(() => {
        ((a = void 0), u() || e.onContinue?.());
      }),
    w = () => {
      if (u()) return;
      let A;
      const E = s === 0 ? e.initialPromise : void 0;
      try {
        A = E ?? e.fn();
      } catch (O) {
        A = Promise.reject(O);
      }
      Promise.resolve(A)
        .then(m)
        .catch((O) => {
          if (u()) return;
          const M = e.retry ?? (Za.isServer() ? 0 : 3),
            j = e.retryDelay ?? Ix,
            L = typeof j == "function" ? j(s, O) : j,
            Q = M === !0 || (typeof M == "number" && s < M) || (typeof M == "function" && M(s, O));
          if (t || !Q) {
            b(O);
            return;
          }
          (s++,
            e.onFail?.(s, O),
            Ux(L)
              .then(() => (g() ? void 0 : _()))
              .then(() => {
                t ? b(O) : w();
              }));
        });
    };
  return {
    promise: l,
    status: () => l.status,
    cancel: c,
    continue: () => (a?.(), l),
    cancelRetry: d,
    continueRetry: p,
    canStart: y,
    start: () => (y() ? w() : _().then(w), l),
  };
}
var Rb = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        xf(this.gcTime) &&
          (this.#e = gs.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(e) {
      this.gcTime = Math.max(this.gcTime || 0, e ?? (Za.isServer() ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#e !== void 0 && (gs.clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  qx = class extends Rb {
    #e;
    #t;
    #n;
    #s;
    #r;
    #a;
    #i;
    constructor(e) {
      (super(),
        (this.#i = !1),
        (this.#a = e.defaultOptions),
        this.setOptions(e.options),
        (this.observers = []),
        (this.#s = e.client),
        (this.#n = this.#s.getQueryCache()),
        (this.queryKey = e.queryKey),
        (this.queryHash = e.queryHash),
        (this.#e = Mv(this.options)),
        (this.state = e.state ?? this.#e),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#r?.promise;
    }
    setOptions(e) {
      if (
        ((this.options = { ...this.#a, ...e }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        const t = Mv(this.options);
        t.data !== void 0 && (this.setState(jv(t.data, t.dataUpdatedAt)), (this.#e = t));
      }
    }
    optionalRemove() {
      !this.observers.length && this.state.fetchStatus === "idle" && this.#n.remove(this);
    }
    setData(e, t) {
      const s = Mf(this.state.data, e, this.options);
      return (
        this.#l({ data: s, type: "success", dataUpdatedAt: t?.updatedAt, manual: t?.manual }),
        s
      );
    }
    setState(e, t) {
      this.#l({ type: "setState", state: e, setStateOptions: t });
    }
    cancel(e) {
      const t = this.#r?.promise;
      return (this.#r?.cancel(e), t ? t.then(jt).catch(jt) : Promise.resolve());
    }
    destroy() {
      (super.destroy(), this.cancel({ silent: !0 }));
    }
    get resetState() {
      return this.#e;
    }
    reset() {
      (this.destroy(), this.setState(this.resetState));
    }
    isActive() {
      return this.observers.some((e) => Gt(e.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === Xf || !this.isFetched();
    }
    isFetched() {
      return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((e) => Lr(e.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((e) => e.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(e = 0) {
      return this.state.data === void 0
        ? !0
        : e === "static"
          ? !1
          : this.state.isInvalidated
            ? !0
            : !bb(this.state.dataUpdatedAt, e);
    }
    onFocus() {
      (this.observers.find((t) => t.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue());
    }
    onOnline() {
      (this.observers.find((t) => t.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue());
    }
    addObserver(e) {
      this.observers.includes(e) ||
        (this.observers.push(e),
        this.clearGcTimeout(),
        this.#n.notify({ type: "observerAdded", query: this, observer: e }));
    }
    removeObserver(e) {
      this.observers.includes(e) &&
        ((this.observers = this.observers.filter((t) => t !== e)),
        this.observers.length ||
          (this.#r &&
            (this.#i || this.#o() ? this.#r.cancel({ revert: !0 }) : this.#r.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: "observerRemoved", query: this, observer: e }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    #o() {
      return this.state.fetchStatus === "paused" && this.state.status === "pending";
    }
    invalidate() {
      this.state.isInvalidated || this.#l({ type: "invalidate" });
    }
    async fetch(e, t) {
      if (this.state.fetchStatus !== "idle" && this.#r?.status() !== "rejected") {
        if (this.state.data !== void 0 && t?.cancelRefetch) this.cancel({ silent: !0 });
        else if (this.#r) return (this.#r.continueRetry(), this.#r.promise);
      }
      if ((e && this.setOptions(e), !this.options.queryFn)) {
        const d = this.observers.find((p) => p.options.queryFn);
        d && this.setOptions(d.options);
      }
      const s = new AbortController(),
        a = (d) => {
          Object.defineProperty(d, "signal", {
            enumerable: !0,
            get: () => ((this.#i = !0), s.signal),
          });
        },
        l = () => {
          const d = Sb(this.options, t),
            g = (() => {
              const y = { client: this.#s, queryKey: this.queryKey, meta: this.meta };
              return (a(y), y);
            })();
          return (
            (this.#i = !1),
            this.options.persister ? this.options.persister(d, g, this) : d(g)
          );
        },
        c = (() => {
          const d = {
            fetchOptions: t,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#s,
            state: this.state,
            fetchFn: l,
          };
          return (a(d), d);
        })();
      (this.options.behavior?.onFetch(c, this),
        (this.#t = this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== c.fetchOptions?.meta) &&
          this.#l({ type: "fetch", meta: c.fetchOptions?.meta }),
        (this.#r = Tb({
          initialPromise: t?.initialPromise,
          fn: c.fetchFn,
          onCancel: (d) => {
            (d instanceof Uf && d.revert && this.setState({ ...this.#t, fetchStatus: "idle" }),
              s.abort());
          },
          onFail: (d, p) => {
            this.#l({ type: "failed", failureCount: d, error: p });
          },
          onPause: () => {
            this.#l({ type: "pause" });
          },
          onContinue: () => {
            this.#l({ type: "continue" });
          },
          retry: c.options.retry,
          retryDelay: c.options.retryDelay,
          networkMode: c.options.networkMode,
          canRun: () => !0,
        })));
      try {
        const d = await this.#r.start();
        if (d === void 0) throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(d),
          this.#n.config.onSuccess?.(d, this),
          this.#n.config.onSettled?.(d, this.state.error, this),
          d
        );
      } catch (d) {
        if (d instanceof Uf) {
          if (d.silent) return this.#r.promise;
          if (d.revert) {
            if (this.state.data === void 0) throw d;
            return this.state.data;
          }
        }
        throw (
          this.#l({ type: "error", error: d }),
          this.#n.config.onError?.(d, this),
          this.#n.config.onSettled?.(this.state.data, d, this),
          d
        );
      } finally {
        this.scheduleGc();
      }
    }
    #l(e) {
      const t = (s) => {
        switch (e.type) {
          case "failed":
            return { ...s, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return { ...s, ...Ab(s.data, this.options), fetchMeta: e.meta ?? null };
          case "success":
            const a = {
              ...s,
              ...jv(e.data, e.dataUpdatedAt),
              dataUpdateCount: s.dataUpdateCount + 1,
              ...(!e.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return ((this.#t = e.manual ? a : void 0), a);
          case "error":
            const l = e.error;
            return {
              ...s,
              error: l,
              errorUpdateCount: s.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: s.fetchFailureCount + 1,
              fetchFailureReason: l,
              fetchStatus: "idle",
              status: "error",
              isInvalidated: !0,
            };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...e.state };
        }
      };
      ((this.state = t(this.state)),
        yt.batch(() => {
          (this.observers.forEach((s) => {
            s.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: "updated", action: e }));
        }));
    }
  };
function Ab(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Eb(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function jv(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function Mv(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
    s = t !== void 0,
    a = s
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: s ? (a ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: s ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var $x = class extends no {
  constructor(e, t) {
    (super(),
      (this.options = t),
      (this.#e = e),
      (this.#o = null),
      (this.#i = Df()),
      this.bindMethods(),
      this.setOptions(t));
  }
  #e;
  #t = void 0;
  #n = void 0;
  #s = void 0;
  #r;
  #a;
  #i;
  #o;
  #l;
  #d;
  #p;
  #c;
  #h;
  #u;
  #g = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      Dv(this.#t, this.options) ? this.#f() : this.updateResult(),
      this.#b());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Lf(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Lf(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    ((this.listeners = new Set()), this.#_(), this.#S(), this.#t.removeObserver(this));
  }
  setOptions(e) {
    const t = this.options,
      s = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(e)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != "boolean" &&
        typeof this.options.enabled != "function" &&
        typeof Gt(this.options.enabled, this.#t) != "boolean")
    )
      throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
    (this.#w(),
      this.#t.setOptions(this.options),
      t._defaulted &&
        !kf(this.options, t) &&
        this.#e
          .getQueryCache()
          .notify({ type: "observerOptionsUpdated", query: this.#t, observer: this }));
    const a = this.hasListeners();
    (a && Uv(this.#t, s, this.options, t) && this.#f(),
      this.updateResult(),
      a &&
        (this.#t !== s ||
          Gt(this.options.enabled, this.#t) !== Gt(t.enabled, this.#t) ||
          Lr(this.options.staleTime, this.#t) !== Lr(t.staleTime, this.#t)) &&
        this.#m());
    const l = this.#y();
    a &&
      (this.#t !== s ||
        Gt(this.options.enabled, this.#t) !== Gt(t.enabled, this.#t) ||
        l !== this.#u) &&
      this.#v(l);
  }
  getOptimisticResult(e) {
    const t = this.#e.getQueryCache().build(this.#e, e),
      s = this.createResult(t, e);
    return (Vx(this, s) && ((this.#s = s), (this.#a = this.options), (this.#r = this.#t.state)), s);
  }
  getCurrentResult() {
    return this.#s;
  }
  trackResult(e, t) {
    return new Proxy(e, {
      get: (s, a) => (
        this.trackProp(a),
        t?.(a),
        a === "promise" &&
          (this.trackProp("data"),
          !this.options.experimental_prefetchInRender &&
            this.#i.status === "pending" &&
            this.#i.reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),
        Reflect.get(s, a)
      ),
    });
  }
  trackProp(e) {
    this.#g.add(e);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...e } = {}) {
    return this.fetch({ ...e });
  }
  fetchOptimistic(e) {
    const t = this.#e.defaultQueryOptions(e),
      s = this.#e.getQueryCache().build(this.#e, t);
    return s.fetch().then(() => this.createResult(s, t));
  }
  fetch(e) {
    return this.#f({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#s),
    );
  }
  #f(e) {
    this.#w();
    let t = this.#t.fetch(this.options, e);
    return (e?.throwOnError || (t = t.catch(jt)), t);
  }
  #m() {
    this.#_();
    const e = Lr(this.options.staleTime, this.#t);
    if (Za.isServer() || this.#s.isStale || !xf(e)) return;
    const s = bb(this.#s.dataUpdatedAt, e) + 1;
    this.#c = gs.setTimeout(() => {
      this.#s.isStale || this.updateResult();
    }, s);
  }
  #y() {
    return (
      (typeof this.options.refetchInterval == "function"
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #v(e) {
    (this.#S(),
      (this.#u = e),
      !(
        Za.isServer() ||
        Gt(this.options.enabled, this.#t) === !1 ||
        !xf(this.#u) ||
        this.#u === 0
      ) &&
        (this.#h = gs.setInterval(() => {
          (this.options.refetchIntervalInBackground || Yf.isFocused()) && this.#f();
        }, this.#u)));
  }
  #b() {
    (this.#m(), this.#v(this.#y()));
  }
  #_() {
    this.#c !== void 0 && (gs.clearTimeout(this.#c), (this.#c = void 0));
  }
  #S() {
    this.#h !== void 0 && (gs.clearInterval(this.#h), (this.#h = void 0));
  }
  createResult(e, t) {
    const s = this.#t,
      a = this.options,
      l = this.#s,
      u = this.#r,
      c = this.#a,
      p = e !== s ? e.state : this.#n,
      { state: g } = e;
    let y = { ...g },
      m = !1,
      b;
    if (t._optimisticResults) {
      const G = this.hasListeners(),
        Y = !G && Dv(e, t),
        ae = G && Uv(e, s, t, a);
      ((Y || ae) && (y = { ...y, ...Ab(g.data, e.options) }),
        t._optimisticResults === "isRestoring" && (y.fetchStatus = "idle"));
    }
    let { error: _, errorUpdatedAt: w, status: A } = y;
    b = y.data;
    let E = !1;
    if (t.placeholderData !== void 0 && b === void 0 && A === "pending") {
      let G;
      (l?.isPlaceholderData && t.placeholderData === c?.placeholderData
        ? ((G = l.data), (E = !0))
        : (G =
            typeof t.placeholderData == "function"
              ? t.placeholderData(this.#p?.state.data, this.#p)
              : t.placeholderData),
        G !== void 0 && ((A = "success"), (b = Mf(l?.data, G, t)), (m = !0)));
    }
    if (t.select && b !== void 0 && !E)
      if (l && b === u?.data && t.select === this.#l) b = this.#d;
      else
        try {
          ((this.#l = t.select),
            (b = t.select(b)),
            (b = Mf(l?.data, b, t)),
            (this.#d = b),
            (this.#o = null));
        } catch (G) {
          this.#o = G;
        }
    this.#o && ((_ = this.#o), (b = this.#d), (w = Date.now()), (A = "error"));
    const O = y.fetchStatus === "fetching",
      M = A === "pending",
      j = A === "error",
      L = M && O,
      Q = b !== void 0,
      B = {
        status: A,
        fetchStatus: y.fetchStatus,
        isPending: M,
        isSuccess: A === "success",
        isError: j,
        isInitialLoading: L,
        isLoading: L,
        data: b,
        dataUpdatedAt: y.dataUpdatedAt,
        error: _,
        errorUpdatedAt: w,
        failureCount: y.fetchFailureCount,
        failureReason: y.fetchFailureReason,
        errorUpdateCount: y.errorUpdateCount,
        isFetched: e.isFetched(),
        isFetchedAfterMount:
          y.dataUpdateCount > p.dataUpdateCount || y.errorUpdateCount > p.errorUpdateCount,
        isFetching: O,
        isRefetching: O && !M,
        isLoadingError: j && !Q,
        isPaused: y.fetchStatus === "paused",
        isPlaceholderData: m,
        isRefetchError: j && Q,
        isStale: Zf(e, t),
        refetch: this.refetch,
        promise: this.#i,
        isEnabled: Gt(t.enabled, e) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      const G = B.data !== void 0,
        Y = B.status === "error" && !G,
        ae = (Se) => {
          Y ? Se.reject(B.error) : G && Se.resolve(B.data);
        },
        re = () => {
          const Se = (this.#i = B.promise = Df());
          ae(Se);
        },
        de = this.#i;
      switch (de.status) {
        case "pending":
          e.queryHash === s.queryHash && ae(de);
          break;
        case "fulfilled":
          (Y || B.data !== de.value) && re();
          break;
        case "rejected":
          (!Y || B.error !== de.reason) && re();
          break;
      }
    }
    return B;
  }
  updateResult() {
    const e = this.#s,
      t = this.createResult(this.#t, this.options);
    if (
      ((this.#r = this.#t.state),
      (this.#a = this.options),
      this.#r.data !== void 0 && (this.#p = this.#t),
      kf(t, e))
    )
      return;
    this.#s = t;
    const s = () => {
      if (!e) return !0;
      const { notifyOnChangeProps: a } = this.options,
        l = typeof a == "function" ? a() : a;
      if (l === "all" || (!l && !this.#g.size)) return !0;
      const u = new Set(l ?? this.#g);
      return (
        this.options.throwOnError && u.add("error"),
        Object.keys(this.#s).some((c) => {
          const d = c;
          return this.#s[d] !== e[d] && u.has(d);
        })
      );
    };
    this.#E({ listeners: s() });
  }
  #w() {
    const e = this.#e.getQueryCache().build(this.#e, this.options);
    if (e === this.#t) return;
    const t = this.#t;
    ((this.#t = e),
      (this.#n = e.state),
      this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
  }
  onQueryUpdate() {
    (this.updateResult(), this.hasListeners() && this.#b());
  }
  #E(e) {
    yt.batch(() => {
      (e.listeners &&
        this.listeners.forEach((t) => {
          t(this.#s);
        }),
        this.#e.getQueryCache().notify({ query: this.#t, type: "observerResultsUpdated" }));
    });
  }
};
function Gx(e, t) {
  return (
    Gt(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && Gt(t.retryOnMount, e) === !1)
  );
}
function Dv(e, t) {
  return Gx(e, t) || (e.state.data !== void 0 && Lf(e, t, t.refetchOnMount));
}
function Lf(e, t, s) {
  if (Gt(t.enabled, e) !== !1 && Lr(t.staleTime, e) !== "static") {
    const a = typeof s == "function" ? s(e) : s;
    return a === "always" || (a !== !1 && Zf(e, t));
  }
  return !1;
}
function Uv(e, t, s, a) {
  return (
    (e !== t || Gt(a.enabled, e) === !1) && (!s.suspense || e.state.status !== "error") && Zf(e, s)
  );
}
function Zf(e, t) {
  return Gt(t.enabled, e) !== !1 && e.isStaleByTime(Lr(t.staleTime, e));
}
function Vx(e, t) {
  return !kf(e.getCurrentResult(), t);
}
function Lv(e) {
  return {
    onFetch: (t, s) => {
      const a = t.options,
        l = t.fetchOptions?.meta?.fetchMore?.direction,
        u = t.state.data?.pages || [],
        c = t.state.data?.pageParams || [];
      let d = { pages: [], pageParams: [] },
        p = 0;
      const g = async () => {
        let y = !1;
        const m = (w) => {
            Px(
              w,
              () => t.signal,
              () => (y = !0),
            );
          },
          b = Sb(t.options, t.fetchOptions),
          _ = async (w, A, E) => {
            if (y) return Promise.reject();
            if (A == null && w.pages.length) return Promise.resolve(w);
            const M = (() => {
                const F = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: A,
                  direction: E ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (m(F), F);
              })(),
              j = await b(M),
              { maxPages: L } = t.options,
              Q = E ? Nx : Lx;
            return { pages: Q(w.pages, j, L), pageParams: Q(w.pageParams, A, L) };
          };
        if (l && u.length) {
          const w = l === "backward",
            A = w ? Kx : Nv,
            E = { pages: u, pageParams: c },
            O = A(a, E);
          d = await _(E, O, w);
        } else {
          const w = e ?? u.length;
          do {
            const A = p === 0 ? (c[0] ?? a.initialPageParam) : Nv(a, d);
            if (p > 0 && A == null) break;
            ((d = await _(d, A)), p++);
          } while (p < w);
        }
        return d;
      };
      t.options.persister
        ? (t.fetchFn = () =>
            t.options.persister?.(
              g,
              { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
              s,
            ))
        : (t.fetchFn = g);
    },
  };
}
function Nv(e, { pages: t, pageParams: s }) {
  const a = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[a], t, s[a], s) : void 0;
}
function Kx(e, { pages: t, pageParams: s }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, s[0], s) : void 0;
}
var Fx = class extends Rb {
  #e;
  #t;
  #n;
  #s;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || Qx()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: "observerAdded", mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: "observerRemoved", mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this));
  }
  continue() {
    return this.#s?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    const t = () => {
        this.#r({ type: "continue" });
      },
      s = { client: this.#e, meta: this.options.meta, mutationKey: this.options.mutationKey };
    this.#s = Tb({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, s)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (u, c) => {
        this.#r({ type: "failed", failureCount: u, error: c });
      },
      onPause: () => {
        this.#r({ type: "pause" });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    const a = this.state.status === "pending",
      l = !this.#s.canStart();
    try {
      if (a) t();
      else {
        (this.#r({ type: "pending", variables: e, isPaused: l }),
          this.#n.config.onMutate && (await this.#n.config.onMutate(e, this, s)));
        const c = await this.options.onMutate?.(e, s);
        c !== this.state.context &&
          this.#r({ type: "pending", context: c, variables: e, isPaused: l });
      }
      const u = await this.#s.start();
      return (
        await this.#n.config.onSuccess?.(u, e, this.state.context, this, s),
        await this.options.onSuccess?.(u, e, this.state.context, s),
        await this.#n.config.onSettled?.(
          u,
          null,
          this.state.variables,
          this.state.context,
          this,
          s,
        ),
        await this.options.onSettled?.(u, null, e, this.state.context, s),
        this.#r({ type: "success", data: u }),
        u
      );
    } catch (u) {
      try {
        await this.#n.config.onError?.(u, e, this.state.context, this, s);
      } catch (c) {
        Promise.reject(c);
      }
      try {
        await this.options.onError?.(u, e, this.state.context, s);
      } catch (c) {
        Promise.reject(c);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          u,
          this.state.variables,
          this.state.context,
          this,
          s,
        );
      } catch (c) {
        Promise.reject(c);
      }
      try {
        await this.options.onSettled?.(void 0, u, e, this.state.context, s);
      } catch (c) {
        Promise.reject(c);
      }
      throw (this.#r({ type: "error", error: u }), u);
    } finally {
      this.#n.runNext(this);
    }
  }
  #r(e) {
    const t = (s) => {
      switch (e.type) {
        case "failed":
          return { ...s, failureCount: e.failureCount, failureReason: e.error };
        case "pause":
          return { ...s, isPaused: !0 };
        case "continue":
          return { ...s, isPaused: !1 };
        case "pending":
          return {
            ...s,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: "pending",
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...s,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...s,
            data: void 0,
            error: e.error,
            failureCount: s.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    ((this.state = t(this.state)),
      yt.batch(() => {
        (this.#t.forEach((s) => {
          s.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: "updated", action: e }));
      }));
  }
};
function Qx() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Yx = class extends no {
  constructor(e = {}) {
    (super(), (this.config = e), (this.#e = new Set()), (this.#t = new Map()), (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(e, t, s) {
    const a = new Fx({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: s,
    });
    return (this.add(a), a);
  }
  add(e) {
    this.#e.add(e);
    const t = Nl(e);
    if (typeof t == "string") {
      const s = this.#t.get(t);
      s ? s.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      const t = Nl(e);
      if (typeof t == "string") {
        const s = this.#t.get(t);
        if (s)
          if (s.length > 1) {
            const a = s.indexOf(e);
            a !== -1 && s.splice(a, 1);
          } else s[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    const t = Nl(e);
    if (typeof t == "string") {
      const a = this.#t.get(t)?.find((l) => l.state.status === "pending");
      return !a || a === e;
    } else return !0;
  }
  runNext(e) {
    const t = Nl(e);
    return typeof t == "string"
      ? (this.#t
          .get(t)
          ?.find((a) => a !== e && a.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    yt.batch(() => {
      (this.#e.forEach((e) => {
        this.notify({ type: "removed", mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    const t = { exact: !0, ...e };
    return this.getAll().find((s) => Cv(t, s));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => Cv(e, t));
  }
  notify(e) {
    yt.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter((t) => t.state.isPaused);
    return yt.batch(() => Promise.all(e.map((t) => t.continue().catch(jt))));
  }
};
function Nl(e) {
  return e.options.scope?.id;
}
var Jx = class extends no {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, s) {
      const a = t.queryKey,
        l = t.queryHash ?? Jf(a, t);
      let u = this.get(l);
      return (
        u ||
          ((u = new qx({
            client: e,
            queryKey: a,
            queryHash: l,
            options: e.defaultQueryOptions(t),
            state: s,
            defaultOptions: e.getQueryDefaults(a),
          })),
          this.add(u)),
        u
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: "added", query: e }));
    }
    remove(e) {
      const t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: "removed", query: e }));
    }
    clear() {
      yt.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      const t = { exact: !0, ...e };
      return this.getAll().find((s) => Ov(t, s));
    }
    findAll(e = {}) {
      const t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((s) => Ov(e, s)) : t;
    }
    notify(e) {
      yt.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      yt.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      yt.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  Xx = class {
    #e;
    #t;
    #n;
    #s;
    #r;
    #a;
    #i;
    #o;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new Jx()),
        (this.#t = e.mutationCache || new Yx()),
        (this.#n = e.defaultOptions || {}),
        (this.#s = new Map()),
        (this.#r = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#i = Yf.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#o = ou.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 && (this.#i?.(), (this.#i = void 0), this.#o?.(), (this.#o = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: "fetching" }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: "pending" }).length;
    }
    getQueryData(e) {
      const t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      const t = this.defaultQueryOptions(e),
        s = this.#e.build(this, t),
        a = s.state.data;
      return a === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale && s.isStaleByTime(Lr(t.staleTime, s)) && this.prefetchQuery(t),
          Promise.resolve(a));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: t, state: s }) => {
        const a = s.data;
        return [t, a];
      });
    }
    setQueryData(e, t, s) {
      const a = this.defaultQueryOptions({ queryKey: e }),
        u = this.#e.get(a.queryHash)?.state.data,
        c = Mx(t, u);
      if (c !== void 0) return this.#e.build(this, a).setData(c, { ...s, manual: !0 });
    }
    setQueriesData(e, t, s) {
      return yt.batch(() =>
        this.#e.findAll(e).map(({ queryKey: a }) => [a, this.setQueryData(a, t, s)]),
      );
    }
    getQueryState(e) {
      const t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      const t = this.#e;
      yt.batch(() => {
        t.findAll(e).forEach((s) => {
          t.remove(s);
        });
      });
    }
    resetQueries(e, t) {
      const s = this.#e;
      return yt.batch(
        () => (
          s.findAll(e).forEach((a) => {
            a.reset();
          }),
          this.refetchQueries({ type: "active", ...e }, t)
        ),
      );
    }
    cancelQueries(e, t = {}) {
      const s = { revert: !0, ...t },
        a = yt.batch(() => this.#e.findAll(e).map((l) => l.cancel(s)));
      return Promise.all(a).then(jt).catch(jt);
    }
    invalidateQueries(e, t = {}) {
      return yt.batch(
        () => (
          this.#e.findAll(e).forEach((s) => {
            s.invalidate();
          }),
          e?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? "active" }, t)
        ),
      );
    }
    refetchQueries(e, t = {}) {
      const s = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        a = yt.batch(() =>
          this.#e
            .findAll(e)
            .filter((l) => !l.isDisabled() && !l.isStatic())
            .map((l) => {
              let u = l.fetch(void 0, s);
              return (
                s.throwOnError || (u = u.catch(jt)),
                l.state.fetchStatus === "paused" ? Promise.resolve() : u
              );
            }),
        );
      return Promise.all(a).then(jt);
    }
    fetchQuery(e) {
      const t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      const s = this.#e.build(this, t);
      return s.isStaleByTime(Lr(t.staleTime, s)) ? s.fetch(t) : Promise.resolve(s.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(jt).catch(jt);
    }
    fetchInfiniteQuery(e) {
      return ((e.behavior = Lv(e.pages)), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(jt).catch(jt);
    }
    ensureInfiniteQueryData(e) {
      return ((e.behavior = Lv(e.pages)), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return ou.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#s.set(Ja(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      const t = [...this.#s.values()],
        s = {};
      return (
        t.forEach((a) => {
          Xa(e, a.queryKey) && Object.assign(s, a.defaultOptions);
        }),
        s
      );
    }
    setMutationDefaults(e, t) {
      this.#r.set(Ja(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      const t = [...this.#r.values()],
        s = {};
      return (
        t.forEach((a) => {
          Xa(e, a.mutationKey) && Object.assign(s, a.defaultOptions);
        }),
        s
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      const t = { ...this.#n.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
      return (
        t.queryHash || (t.queryHash = Jf(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Xf && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  Ob = W.createContext(void 0),
  Cb = (e) => {
    const t = W.useContext(Ob);
    if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  Zx = ({ client: e, children: t }) => (
    W.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    $.jsx(Ob.Provider, { value: e, children: t })
  ),
  xb = W.createContext(!1),
  Wx = () => W.useContext(xb);
xb.Provider;
function ek() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var tk = W.createContext(ek()),
  nk = () => W.useContext(tk),
  rk = (e, t, s) => {
    const a =
      s?.state.error && typeof e.throwOnError == "function"
        ? wb(e.throwOnError, [s.state.error, s])
        : e.throwOnError;
    (e.suspense || e.experimental_prefetchInRender || a) && (t.isReset() || (e.retryOnMount = !1));
  },
  sk = (e) => {
    W.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  ik = ({ result: e, errorResetBoundary: t, throwOnError: s, query: a, suspense: l }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    a &&
    ((l && e.data === void 0) || wb(s, [e.error, a])),
  ak = (e) => {
    if (e.suspense) {
      const s = (l) => (l === "static" ? l : Math.max(l ?? 1e3, 1e3)),
        a = e.staleTime;
      ((e.staleTime = typeof a == "function" ? (...l) => s(a(...l)) : s(a)),
        typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
    }
  },
  ok = (e, t) => e.isLoading && e.isFetching && !t,
  lk = (e, t) => e?.suspense && t.isPending,
  Pv = (e, t, s) =>
    t.fetchOptimistic(e).catch(() => {
      s.clearReset();
    });
function uk(e, t, s) {
  const a = Wx(),
    l = nk(),
    u = Cb(),
    c = u.defaultQueryOptions(e);
  u.getDefaultOptions().queries?._experimental_beforeQuery?.(c);
  const d = u.getQueryCache().get(c.queryHash);
  ((c._optimisticResults = a ? "isRestoring" : "optimistic"), ak(c), rk(c, l, d), sk(l));
  const p = !u.getQueryCache().get(c.queryHash),
    [g] = W.useState(() => new t(u, c)),
    y = g.getOptimisticResult(c),
    m = !a && e.subscribed !== !1;
  if (
    (W.useSyncExternalStore(
      W.useCallback(
        (b) => {
          const _ = m ? g.subscribe(yt.batchCalls(b)) : jt;
          return (g.updateResult(), _);
        },
        [g, m],
      ),
      () => g.getCurrentResult(),
      () => g.getCurrentResult(),
    ),
    W.useEffect(() => {
      g.setOptions(c);
    }, [c, g]),
    lk(c, y))
  )
    throw Pv(c, g, l);
  if (
    ik({
      result: y,
      errorResetBoundary: l,
      throwOnError: c.throwOnError,
      query: d,
      suspense: c.suspense,
    })
  )
    throw y.error;
  return (
    u.getDefaultOptions().queries?._experimental_afterQuery?.(c, y),
    c.experimental_prefetchInRender &&
      !Za.isServer() &&
      ok(y, a) &&
      (p ? Pv(c, g, l) : d?.promise)?.catch(jt).finally(() => {
        g.updateResult();
      }),
    c.notifyOnChangeProps ? y : g.trackResult(y)
  );
}
function _u(e, t) {
  return uk(e, $x);
}
const ck = "/assets/styles-Bl2kZo4B.css",
  hk = "/assets/sports-DmyZFyu6.css",
  fk = "/ilsh-logo.png",
  dk = [
    { to: "/", label: "Home" },
    { to: "/memories", label: "Memories" },
    { to: "/schedule", label: "Schedule" },
    { to: "/covering", label: "Covering Now" },
    { to: "/contact", label: "Contact" },
  ];
function pk() {
  const {
      pathname: e,
      isLoading: t,
      pendingLocation: s,
    } = Q0({
      select: (d) => ({
        pathname: d.location.pathname,
        isLoading: d.isLoading,
        pendingLocation: d.pendingMatch?.pathname ?? null,
      }),
    }),
    a = Kf(),
    [l, u] = W.useState(!1),
    c = t && s ? s : e;
  return $.jsxs("nav", {
    children: [
      $.jsxs(Zl, {
        to: "/",
        className: "nav-logo",
        onClick: () => u(!1),
        children: [
          $.jsx("div", {
            className: "logo-mark",
            style: { background: "transparent", border: "none", padding: 0 },
            children: $.jsx("img", {
              src: fk,
              alt: "ILSH",
              width: 42,
              height: 42,
              style: { display: "block", borderRadius: "50%" },
            }),
          }),
          $.jsxs("div", {
            className: "logo-words",
            children: [
              $.jsx("div", { className: "logo-top", children: "Indian Live Sports Hub" }),
              $.jsx("div", { className: "logo-bot", children: "India's Basketball Voice" }),
            ],
          }),
        ],
      }),
      $.jsx("ul", {
        className: `nav-center ${l ? "mob" : ""}`,
        children: dk.map((d) =>
          $.jsx(
            "li",
            {
              children: $.jsx(Zl, {
                to: d.to,
                onClick: () => u(!1),
                className: c === d.to ? "act" : "",
                children: d.label,
              }),
            },
            d.to,
          ),
        ),
      }),
      $.jsxs("div", {
        className: "nav-right",
        children: [
          $.jsxs("a", {
            href: "https://www.youtube.com/@indianlivesportshub",
            target: "_blank",
            rel: "noreferrer",
            className: "nav-yt",
            children: [$.jsx("i", { className: "fab fa-youtube" }), "YouTube"],
          }),
          $.jsxs("button", {
            className: "nav-pill",
            onClick: () => a({ to: "/covering" }),
            "aria-label": "Currently covering — view live coverage",
            children: [
              $.jsx("div", {
                style: {
                  width: 6,
                  height: 6,
                  background: "var(--saff)",
                  borderRadius: "50%",
                  animation: "blink 1.3s infinite",
                },
              }),
              "Live",
            ],
          }),
          $.jsxs("button", {
            className: "burger",
            onClick: () => u((d) => !d),
            "aria-label": l ? "Close menu" : "Open menu",
            "aria-expanded": l,
            children: [$.jsx("span", {}), $.jsx("span", {}), $.jsx("span", {})],
          }),
        ],
      }),
    ],
  });
}
const zv = (e) => {
    if (!e) return "TBD";
    try {
      return new Date(e).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return e;
    }
  },
  Wf = 300 * 1e3;
function oj() {
  return _u({
    queryKey: ["videos"],
    staleTime: Wf,
    queryFn: async () => {
      const { data: e, error: t } = await bs
        .from("videos")
        .select("*")
        .order("sort_order")
        .order("created_at", { ascending: !1 });
      if (t) throw t;
      return e ?? [];
    },
  });
}
function lj() {
  return _u({
    queryKey: ["memories"],
    staleTime: Wf,
    queryFn: async () => {
      const { data: e, error: t } = await bs
        .from("memories")
        .select("*")
        .order("sort_order")
        .order("created_at", { ascending: !1 });
      if (t) throw t;
      return e ?? [];
    },
  });
}
function uj() {
  return _u({
    queryKey: ["schedule"],
    staleTime: Wf,
    queryFn: async () => {
      const { data: e, error: t } = await bs
        .from("schedule_events")
        .select("*")
        .order("start_date");
      if (t) throw t;
      return e ?? [];
    },
  });
}
function gk() {
  return _u({
    queryKey: ["coverage"],
    staleTime: 60 * 1e3,
    queryFn: async () => {
      const { data: e, error: t } = await bs.from("coverage").select("*").eq("id", 1).maybeSingle();
      if (t) throw t;
      return e;
    },
  });
}
function cj() {
  const e = Cb();
  return () => {
    (e.invalidateQueries({ queryKey: ["videos"] }),
      e.invalidateQueries({ queryKey: ["memories"] }),
      e.invalidateQueries({ queryKey: ["schedule"] }),
      e.invalidateQueries({ queryKey: ["coverage"] }));
  };
}
function mk() {
  const { data: e } = gk();
  if (!e?.active) return null;
  const t = $.jsxs($.Fragment, {
    children: [
      $.jsxs("div", {
        className: "ticker-item",
        children: [$.jsx("i", { className: "fas fa-map-marker-alt" }), e.name, " · ", e.city],
      }),
      $.jsxs("div", {
        className: "ticker-item",
        children: [$.jsx("i", { className: "fas fa-building" }), e.venue],
      }),
      $.jsxs("div", {
        className: "ticker-item",
        children: [
          $.jsx("i", { className: "fas fa-calendar-alt" }),
          zv(e.start_date),
          " — ",
          zv(e.end_date),
        ],
      }),
      $.jsxs("div", {
        className: "ticker-item",
        children: [$.jsx("i", { className: "fab fa-youtube" }), "Watch on YouTube"],
      }),
      $.jsxs("div", {
        className: "ticker-item",
        children: [$.jsx("i", { className: "fab fa-instagram" }), "Follow on Instagram"],
      }),
    ],
  });
  return $.jsxs("div", {
    className: "ticker",
    style: { display: "flex" },
    children: [
      $.jsxs("div", {
        className: "ticker-label",
        children: [$.jsx("div", { className: "ticker-dot" }), "Live Now"],
      }),
      $.jsx("div", {
        className: "ticker-track",
        children: $.jsxs("div", { className: "ticker-inner", children: [t, t] }),
      }),
    ],
  });
}
function yk() {
  const e = Q0({ select: (d) => d.isLoading }),
    [t, s] = W.useState(0),
    [a, l] = W.useState(!1),
    u = W.useRef(null),
    c = W.useRef(null);
  return (
    W.useEffect(
      () => (
        e
          ? (l(!0),
            s(0),
            (c.current = requestAnimationFrame(() => {
              c.current = requestAnimationFrame(() => s(72));
            })))
          : (s(100),
            (u.current = setTimeout(() => {
              (l(!1), s(0));
            }, 380))),
        () => {
          (u.current && clearTimeout(u.current), c.current && cancelAnimationFrame(c.current));
        }
      ),
      [e],
    ),
    a
      ? $.jsx("div", {
          "aria-hidden": "true",
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            height: 3,
            width: `${t}%`,
            background: "var(--saff)",
            zIndex: 9999,
            transition:
              t === 100
                ? "width 0.25s ease-out, opacity 0.15s ease 0.25s"
                : "width 2.5s cubic-bezier(0.1, 0.05, 0, 1)",
            opacity: t === 100 ? 0 : 1,
            borderRadius: "0 2px 2px 0",
            boxShadow: "0 0 10px rgba(232,151,26,.7)",
            pointerEvents: "none",
          },
        })
      : null
  );
}
const vk = [
    "basketball",
    "India basketball",
    "basketball streaming",
    "basketball live coverage",
    "Indian basketball tournaments",
    "basketball India",
    "basketball videos",
    "live sports streaming",
    "Faridabad basketball",
    "Delhi basketball",
    "Haryana basketball",
    "basketball championship",
    "basketball tournament coverage",
    "basketball highlights",
    "Indian sports",
    "basketball grassroots",
    "district basketball",
    "state basketball",
    "national basketball",
    "basketball community India",
  ],
  $l =
    "India's first dedicated basketball streaming channel — covering district, state, and national tournaments live across India. 24 × 7 coverage from grassroots to championships.",
  lf = "Indian Live Sports Hub — India's Basketball Voice",
  Bv =
    "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dd428f04-fada-4342-af85-5e70f88ad0f7/id-preview-848cd00b--c68537f8-6a10-4933-95b1-898d2d60e8b4.lovable.app-1780510914529.png",
  bk = [
    "https://www.indianlivesportshub.in",
    "https://www.indianlivesportshub.com",
    "https://www.indianlivesportshub.online",
  ];
function ro(e = {}) {
  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "color-scheme", content: "light" },
    { name: "theme-color", content: "#E8971A" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    { title: e.title || lf },
    { name: "description", content: e.description || $l },
    { name: "keywords", content: vk.join(", ") },
    { name: "author", content: "Indian Live Sports Hub" },
    { name: "creator", content: "Indian Live Sports Hub" },
    { name: "publisher", content: "Indian Live Sports Hub" },
    {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      name: "googlebot",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    { name: "bingbot", content: "index, follow" },
    { property: "og:title", content: e.title || lf },
    { property: "og:description", content: e.description || $l },
    { property: "og:image", content: e.image || Bv },
    { property: "og:image:alt", content: "Indian Live Sports Hub - Live Basketball Coverage" },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Indian Live Sports Hub" },
    { property: "og:locale", content: "en_IN" },
    { property: "og:locale:alternate", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: e.title || lf },
    { name: "twitter:description", content: e.description || $l },
    { name: "twitter:image", content: e.image || Bv },
    { name: "twitter:creator", content: "@indianlivesportshub" },
    { name: "twitter:site", content: "@indianlivesportshub" },
    { name: "application-name", content: "Indian Live Sports Hub" },
    { name: "msapplication-TileColor", content: "#E8971A" },
    { name: "msapplication-config", content: "/browserconfig.xml" },
  ];
}
function _k(e) {
  return bk.map((t) => ({
    rel: "alternate",
    href: `${t}${e}`,
    title: `Indian Live Sports Hub (${t.split("//")[1]})`,
  }));
}
function Sk() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Indian Live Sports Hub",
    url: "https://www.indianlivesportshub.in",
    logo: "https://www.indianlivesportshub.in/ilsh-logo.png",
    description: $l,
    sameAs: [
      "https://www.youtube.com/@indianlivesportshub",
      "https://www.instagram.com/indianlivesportshub/",
    ],
  };
}
const Xn = WA()({
  head: () => ({
    meta: ro(),
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23E8971A'/%3E%3Ccircle cx='16' cy='16' r='11' fill='none' stroke='%230C0F14' stroke-width='1.4'/%3E%3Cline x1='5' y1='16' x2='27' y2='16' stroke='%230C0F14' stroke-width='1.4'/%3E%3Cline x1='16' y1='5' x2='16' y2='27' stroke='%230C0F14' stroke-width='1.4'/%3E%3Cpath d='M9 7.5 Q16 13 16 16 Q16 19 9 24.5' fill='none' stroke='%230C0F14' stroke-width='1.4'/%3E%3Cpath d='M23 7.5 Q16 13 16 16 Q16 19 23 24.5' fill='none' stroke='%230C0F14' stroke-width='1.4'/%3E%3C/svg%3E",
      },
      ..._k("/"),
      { rel: "stylesheet", href: ck },
      { rel: "stylesheet", href: hk },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Figtree:wght@300;400;500;600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(Sk()) }],
  }),
  shellComponent: wk,
  component: Ek,
});
function wk({ children: e }) {
  return $.jsxs("html", {
    lang: "en",
    children: [
      $.jsx("head", { children: $.jsx(_1, {}) }),
      $.jsxs("body", { children: [e, $.jsx(S1, {})] }),
    ],
  });
}
function Ek() {
  const { queryClient: e } = Xn.useRouteContext();
  return $.jsxs(Zx, {
    client: e,
    children: [$.jsx(yk, {}), $.jsx(mk, {}), $.jsx(pk, {}), $.jsx(F0, {})],
  });
}
const Tk = "modulepreload",
  Rk = function (e) {
    return "/" + e;
  },
  Hv = {},
  qr = function (t, s, a) {
    let l = Promise.resolve();
    if (s && s.length > 0) {
      let p = function (g) {
        return Promise.all(
          g.map((y) =>
            Promise.resolve(y).then(
              (m) => ({ status: "fulfilled", value: m }),
              (m) => ({ status: "rejected", reason: m }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const c = document.querySelector("meta[property=csp-nonce]"),
        d = c?.nonce || c?.getAttribute("nonce");
      l = p(
        s.map((g) => {
          if (((g = Rk(g)), g in Hv)) return;
          Hv[g] = !0;
          const y = g.endsWith(".css"),
            m = y ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${g}"]${m}`)) return;
          const b = document.createElement("link");
          if (
            ((b.rel = y ? "stylesheet" : Tk),
            y || (b.as = "script"),
            (b.crossOrigin = ""),
            (b.href = g),
            d && b.setAttribute("nonce", d),
            document.head.appendChild(b),
            y)
          )
            return new Promise((_, w) => {
              (b.addEventListener("load", _),
                b.addEventListener("error", () => w(new Error(`Unable to preload CSS for ${g}`))));
            });
        }),
      );
    }
    function u(c) {
      const d = new Event("vite:preloadError", { cancelable: !0 });
      if (((d.payload = c), window.dispatchEvent(d), !d.defaultPrevented)) throw c;
    }
    return l.then((c) => {
      for (const d of c || []) d.status === "rejected" && u(d.reason);
      return t().catch(u);
    });
  },
  Ak = () => qr(() => import("./schedule-C11_6mTF.js"), __vite__mapDeps([0, 1, 2])),
  Ok = Hr("/schedule")({
    head: () => ({
      meta: ro({
        title: "Schedule — Indian Live Sports Hub",
        description: "View our upcoming coverage schedule for basketball tournaments across India.",
      }),
    }),
    component: Ir(Ak, "component"),
  }),
  Ck = () => qr(() => import("./memories-CJ0yedWr.js"), __vite__mapDeps([3, 1, 2])),
  xk = Hr("/memories")({
    head: () => ({
      meta: ro({
        title: "Memories — Indian Live Sports Hub",
        description:
          "A collection of unforgettable basketball moments captured across Indian courts.",
      }),
    }),
    component: Ir(Ck, "component"),
  }),
  kk = () => qr(() => import("./covering-Dx2BOD8I.js"), __vite__mapDeps([4, 2])),
  jk = Hr("/covering")({
    head: () => ({
      meta: ro({
        title: "Live Coverage — Indian Live Sports Hub",
        description:
          "Currently covering live basketball matches across India. Watch the live stream and highlights.",
      }),
    }),
    component: Ir(kk, "component"),
  }),
  Mk = () => qr(() => import("./contact-BPeothKP.js"), __vite__mapDeps([5, 2, 6])),
  Dk = Hr("/contact")({
    head: () => ({
      meta: ro({
        title: "Contact Us — Indian Live Sports Hub",
        description:
          "Get in touch with the Indian Live Sports Hub team for event coverage, partnerships, and inquiries.",
      }),
    }),
    component: Ir(Mk, "component"),
  }),
  Uk = () => qr(() => import("./auth-SQB1PQ47.js"), __vite__mapDeps([7, 6, 2])),
  Lk = Hr("/auth")({ component: Ir(Uk, "component") }),
  Nk = () => qr(() => import("./route-BH1aK2-c.js"), []),
  Pk = Hr("/_authenticated")({
    beforeLoad: async () => {
      const { data: e, error: t } = await bs.auth.getUser();
      if (t || !e.user) throw Kl({ to: "/auth" });
      const { data: s } = await bs
        .from("user_roles")
        .select("role")
        .eq("user_id", e.user.id)
        .eq("role", "admin")
        .maybeSingle();
      if (!s) throw Kl({ to: "/auth" });
      return { user: e.user };
    },
    component: Ir(Nk, "component"),
  }),
  zk = () => qr(() => import("./index-YOP48E1F.js"), __vite__mapDeps([8, 1, 2])),
  Bk = Hr("/")({ component: Ir(zk, "component") }),
  Hk = () => qr(() => import("./admin-BpX8r-c7.js"), __vite__mapDeps([9, 6, 2])),
  Ik = Hr("/_authenticated/admin")({ component: Ir(Hk, "component") }),
  qk = Ok.update({ id: "/schedule", path: "/schedule", getParentRoute: () => Xn }),
  $k = xk.update({ id: "/memories", path: "/memories", getParentRoute: () => Xn }),
  Gk = jk.update({ id: "/covering", path: "/covering", getParentRoute: () => Xn }),
  Vk = Dk.update({ id: "/contact", path: "/contact", getParentRoute: () => Xn }),
  Kk = Lk.update({ id: "/auth", path: "/auth", getParentRoute: () => Xn }),
  kb = Pk.update({ id: "/_authenticated", getParentRoute: () => Xn }),
  Fk = Bk.update({ id: "/", path: "/", getParentRoute: () => Xn }),
  Qk = Ik.update({ id: "/admin", path: "/admin", getParentRoute: () => kb }),
  Yk = { AuthenticatedAdminRoute: Qk },
  Jk = kb._addFileChildren(Yk),
  Xk = {
    IndexRoute: Fk,
    AuthenticatedRouteRoute: Jk,
    AuthRoute: Kk,
    ContactRoute: Vk,
    CoveringRoute: Gk,
    MemoriesRoute: $k,
    ScheduleRoute: qk,
  },
  Zk = Xn._addFileChildren(Xk),
  Wk = () => {
    const e = new Xx();
    return d1({
      routeTree: Zk,
      context: { queryClient: e },
      scrollRestoration: !0,
      defaultPreload: "intent",
      defaultPreloadStaleTime: 1e4,
    });
  };
async function ej() {
  const e = await Wk();
  let t;
  if (Av) {
    const s = await Av.getOptions();
    ((s.serializationAdapters = s.serializationAdapters ?? []),
      (window.__TSS_START_OPTIONS__ = s),
      (t = s.serializationAdapters),
      (e.options.defaultSsr = s.defaultSsr));
  } else ((t = []), (window.__TSS_START_OPTIONS__ = { serializationAdapters: t }));
  return (
    t.push(yA),
    e.options.serializationAdapters && t.push(...e.options.serializationAdapters),
    e.update({ basepath: "", serializationAdapters: t }),
    e.stores.matchesId.get().length || (await bA(e)),
    e
  );
}
async function tj() {
  const e = await ej();
  return (window.$_TSR?.h(), e);
}
var uf;
function nj() {
  return (uf || (uf = tj()), $.jsx(EA, { promise: uf, children: (e) => $.jsx(m1, { router: e }) }));
}
W.startTransition(() => {
  iw.hydrateRoot(document, $.jsx(W.StrictMode, { children: $.jsx(nj, {}) }));
});
export {
  Zl as L,
  F0 as O,
  Pa as R,
  lj as a,
  gk as b,
  Kf as c,
  oj as d,
  cj as e,
  zv as f,
  $ as j,
  W as r,
  bs as s,
  uj as u,
};
