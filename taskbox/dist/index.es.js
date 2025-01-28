import At, { useState as W, useEffect as We, createContext as _r, useContext as wr, useRef as Sr } from "react";
function Tr(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ze = { exports: {} }, le = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function $r() {
  if (yt) return le;
  yt = 1;
  var n = At, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(l, u, f) {
    var h, p = {}, v = null, g = null;
    f !== void 0 && (v = "" + f), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (g = u.ref);
    for (h in u) r.call(u, h) && !a.hasOwnProperty(h) && (p[h] = u[h]);
    if (l && l.defaultProps) for (h in u = l.defaultProps, u) p[h] === void 0 && (p[h] = u[h]);
    return { $$typeof: e, type: l, key: v, ref: g, props: p, _owner: s.current };
  }
  return le.Fragment = t, le.jsx = o, le.jsxs = o, le;
}
var ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Et;
function Or() {
  return Et || (Et = 1, process.env.NODE_ENV !== "production" && function() {
    var n = At, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), _ = Symbol.iterator, w = "@@iterator";
    function R(i) {
      if (i === null || typeof i != "object")
        return null;
      var c = _ && i[_] || i[w];
      return typeof c == "function" ? c : null;
    }
    var N = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(i) {
      {
        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), b = 1; b < c; b++)
          d[b - 1] = arguments[b];
        he("error", i, d);
      }
    }
    function he(i, c, d) {
      {
        var b = N.ReactDebugCurrentFrame, E = b.getStackAddendum();
        E !== "" && (c += "%s", d = d.concat([E]));
        var S = d.map(function(y) {
          return String(y);
        });
        S.unshift("Warning: " + c), Function.prototype.apply.call(console[i], console, S);
      }
    }
    var ne = !1, se = !1, ie = !1, pe = !1, Je = !1, Z;
    Z = Symbol.for("react.module.reference");
    function me(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === r || i === a || Je || i === s || i === f || i === h || pe || i === g || ne || se || ie || typeof i == "object" && i !== null && (i.$$typeof === v || i.$$typeof === p || i.$$typeof === o || i.$$typeof === l || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === Z || i.getModuleId !== void 0));
    }
    function $(i, c, d) {
      var b = i.displayName;
      if (b)
        return b;
      var E = c.displayName || c.name || "";
      return E !== "" ? d + "(" + E + ")" : d;
    }
    function M(i) {
      return i.displayName || "Context";
    }
    function P(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case f:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case l:
            var c = i;
            return M(c) + ".Consumer";
          case o:
            var d = i;
            return M(d._context) + ".Provider";
          case u:
            return $(i, i.render, "ForwardRef");
          case p:
            var b = i.displayName || null;
            return b !== null ? b : P(i.type) || "Memo";
          case v: {
            var E = i, S = E._payload, y = E._init;
            try {
              return P(y(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, ae = 0, Xe, Qe, et, tt, rt, nt, st;
    function it() {
    }
    it.__reactDisabledLog = !0;
    function Ht() {
      {
        if (ae === 0) {
          Xe = console.log, Qe = console.info, et = console.warn, tt = console.error, rt = console.group, nt = console.groupCollapsed, st = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: it,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        ae++;
      }
    }
    function Kt() {
      {
        if (ae--, ae === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, i, {
              value: Xe
            }),
            info: z({}, i, {
              value: Qe
            }),
            warn: z({}, i, {
              value: et
            }),
            error: z({}, i, {
              value: tt
            }),
            group: z({}, i, {
              value: rt
            }),
            groupCollapsed: z({}, i, {
              value: nt
            }),
            groupEnd: z({}, i, {
              value: st
            })
          });
        }
        ae < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ke = N.ReactCurrentDispatcher, je;
    function be(i, c, d) {
      {
        if (je === void 0)
          try {
            throw Error();
          } catch (E) {
            var b = E.stack.trim().match(/\n( *(at )?)/);
            je = b && b[1] || "";
          }
        return `
` + je + i;
      }
    }
    var Re = !1, ge;
    {
      var Jt = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new Jt();
    }
    function at(i, c) {
      if (!i || Re)
        return "";
      {
        var d = ge.get(i);
        if (d !== void 0)
          return d;
      }
      var b;
      Re = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = ke.current, ke.current = null, Ht();
      try {
        if (c) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (C) {
              b = C;
            }
            Reflect.construct(i, [], y);
          } else {
            try {
              y.call();
            } catch (C) {
              b = C;
            }
            i.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            b = C;
          }
          i();
        }
      } catch (C) {
        if (C && b && typeof C.stack == "string") {
          for (var x = C.stack.split(`
`), j = b.stack.split(`
`), O = x.length - 1, F = j.length - 1; O >= 1 && F >= 0 && x[O] !== j[F]; )
            F--;
          for (; O >= 1 && F >= 0; O--, F--)
            if (x[O] !== j[F]) {
              if (O !== 1 || F !== 1)
                do
                  if (O--, F--, F < 0 || x[O] !== j[F]) {
                    var I = `
` + x[O].replace(" at new ", " at ");
                    return i.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", i.displayName)), typeof i == "function" && ge.set(i, I), I;
                  }
                while (O >= 1 && F >= 0);
              break;
            }
        }
      } finally {
        Re = !1, ke.current = S, Kt(), Error.prepareStackTrace = E;
      }
      var ee = i ? i.displayName || i.name : "", B = ee ? be(ee) : "";
      return typeof i == "function" && ge.set(i, B), B;
    }
    function Xt(i, c, d) {
      return at(i, !1);
    }
    function Qt(i) {
      var c = i.prototype;
      return !!(c && c.isReactComponent);
    }
    function ve(i, c, d) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return at(i, Qt(i));
      if (typeof i == "string")
        return be(i);
      switch (i) {
        case f:
          return be("Suspense");
        case h:
          return be("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return Xt(i.render);
          case p:
            return ve(i.type, c, d);
          case v: {
            var b = i, E = b._payload, S = b._init;
            try {
              return ve(S(E), c, d);
            } catch {
            }
          }
        }
      return "";
    }
    var oe = Object.prototype.hasOwnProperty, ot = {}, ut = N.ReactDebugCurrentFrame;
    function xe(i) {
      if (i) {
        var c = i._owner, d = ve(i.type, i._source, c ? c.type : null);
        ut.setExtraStackFrame(d);
      } else
        ut.setExtraStackFrame(null);
    }
    function er(i, c, d, b, E) {
      {
        var S = Function.call.bind(oe);
        for (var y in i)
          if (S(i, y)) {
            var x = void 0;
            try {
              if (typeof i[y] != "function") {
                var j = Error((b || "React class") + ": " + d + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              x = i[y](c, y, b, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              x = O;
            }
            x && !(x instanceof Error) && (xe(E), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", d, y, typeof x), xe(null)), x instanceof Error && !(x.message in ot) && (ot[x.message] = !0, xe(E), T("Failed %s type: %s", d, x.message), xe(null));
          }
      }
    }
    var tr = Array.isArray;
    function Ce(i) {
      return tr(i);
    }
    function rr(i) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, d = c && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return d;
      }
    }
    function nr(i) {
      try {
        return lt(i), !1;
      } catch {
        return !0;
      }
    }
    function lt(i) {
      return "" + i;
    }
    function ct(i) {
      if (nr(i))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(i)), lt(i);
    }
    var ue = N.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ft, dt, Ae;
    Ae = {};
    function ir(i) {
      if (oe.call(i, "ref")) {
        var c = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function ar(i) {
      if (oe.call(i, "key")) {
        var c = Object.getOwnPropertyDescriptor(i, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function or(i, c) {
      if (typeof i.ref == "string" && ue.current && c && ue.current.stateNode !== c) {
        var d = P(ue.current.type);
        Ae[d] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(ue.current.type), i.ref), Ae[d] = !0);
      }
    }
    function ur(i, c) {
      {
        var d = function() {
          ft || (ft = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        d.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function lr(i, c) {
      {
        var d = function() {
          dt || (dt = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        d.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var cr = function(i, c, d, b, E, S, y) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: i,
        key: c,
        ref: d,
        props: y,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function fr(i, c, d, b, E) {
      {
        var S, y = {}, x = null, j = null;
        d !== void 0 && (ct(d), x = "" + d), ar(c) && (ct(c.key), x = "" + c.key), ir(c) && (j = c.ref, or(c, E));
        for (S in c)
          oe.call(c, S) && !sr.hasOwnProperty(S) && (y[S] = c[S]);
        if (i && i.defaultProps) {
          var O = i.defaultProps;
          for (S in O)
            y[S] === void 0 && (y[S] = O[S]);
        }
        if (x || j) {
          var F = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          x && ur(y, F), j && lr(y, F);
        }
        return cr(i, x, j, E, b, ue.current, y);
      }
    }
    var De = N.ReactCurrentOwner, ht = N.ReactDebugCurrentFrame;
    function Q(i) {
      if (i) {
        var c = i._owner, d = ve(i.type, i._source, c ? c.type : null);
        ht.setExtraStackFrame(d);
      } else
        ht.setExtraStackFrame(null);
    }
    var Ne;
    Ne = !1;
    function Pe(i) {
      return typeof i == "object" && i !== null && i.$$typeof === e;
    }
    function pt() {
      {
        if (De.current) {
          var i = P(De.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function dr(i) {
      return "";
    }
    var mt = {};
    function hr(i) {
      {
        var c = pt();
        if (!c) {
          var d = typeof i == "string" ? i : i.displayName || i.name;
          d && (c = `

Check the top-level render call using <` + d + ">.");
        }
        return c;
      }
    }
    function bt(i, c) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var d = hr(c);
        if (mt[d])
          return;
        mt[d] = !0;
        var b = "";
        i && i._owner && i._owner !== De.current && (b = " It was passed a child from " + P(i._owner.type) + "."), Q(i), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, b), Q(null);
      }
    }
    function gt(i, c) {
      {
        if (typeof i != "object")
          return;
        if (Ce(i))
          for (var d = 0; d < i.length; d++) {
            var b = i[d];
            Pe(b) && bt(b, c);
          }
        else if (Pe(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var E = R(i);
          if (typeof E == "function" && E !== i.entries)
            for (var S = E.call(i), y; !(y = S.next()).done; )
              Pe(y.value) && bt(y.value, c);
        }
      }
    }
    function pr(i) {
      {
        var c = i.type;
        if (c == null || typeof c == "string")
          return;
        var d;
        if (typeof c == "function")
          d = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === p))
          d = c.propTypes;
        else
          return;
        if (d) {
          var b = P(c);
          er(d, i.props, "prop", b, i);
        } else if (c.PropTypes !== void 0 && !Ne) {
          Ne = !0;
          var E = P(c);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mr(i) {
      {
        for (var c = Object.keys(i.props), d = 0; d < c.length; d++) {
          var b = c[d];
          if (b !== "children" && b !== "key") {
            Q(i), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), Q(null);
            break;
          }
        }
        i.ref !== null && (Q(i), T("Invalid attribute `ref` supplied to `React.Fragment`."), Q(null));
      }
    }
    var vt = {};
    function xt(i, c, d, b, E, S) {
      {
        var y = me(i);
        if (!y) {
          var x = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = dr();
          j ? x += j : x += pt();
          var O;
          i === null ? O = "null" : Ce(i) ? O = "array" : i !== void 0 && i.$$typeof === e ? (O = "<" + (P(i.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : O = typeof i, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, x);
        }
        var F = fr(i, c, d, E, S);
        if (F == null)
          return F;
        if (y) {
          var I = c.children;
          if (I !== void 0)
            if (b)
              if (Ce(I)) {
                for (var ee = 0; ee < I.length; ee++)
                  gt(I[ee], i);
                Object.freeze && Object.freeze(I);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gt(I, i);
        }
        if (oe.call(c, "key")) {
          var B = P(i), C = Object.keys(c).filter(function(Er) {
            return Er !== "key";
          }), Ie = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!vt[B + Ie]) {
            var yr = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ie, B, yr, B), vt[B + Ie] = !0;
          }
        }
        return i === r ? mr(F) : pr(F), F;
      }
    }
    function br(i, c, d) {
      return xt(i, c, d, !0);
    }
    function gr(i, c, d) {
      return xt(i, c, d, !1);
    }
    var vr = gr, xr = br;
    ce.Fragment = r, ce.jsx = vr, ce.jsxs = xr;
  }()), ce;
}
process.env.NODE_ENV === "production" ? ze.exports = $r() : ze.exports = Or();
var m = ze.exports;
const ye = ({
  children: n,
  justifyContent: e = "center",
  alignItems: t = "center",
  flexDirection: r = "column",
  className: s,
  style: a,
  ...o
}) => /* @__PURE__ */ m.jsx(
  "div",
  {
    className: s,
    style: {
      display: "flex",
      flexDirection: r,
      justifyContent: e,
      alignItems: t,
      ...a
    },
    ...o,
    children: n
  }
), _t = ({
  children: n,
  onClick: e,
  type: t = "button",
  variant: r = "primary",
  size: s = "medium",
  disabled: a = !1,
  className: o = "",
  href: l = "",
  style: u
}) => {
  const f = `button-${s}`;
  return l ? /* @__PURE__ */ m.jsx(
    "a",
    {
      href: l,
      className: `button ${r} ${f} ${o} ${a ? "disabled" : ""}`,
      style: u,
      onClick: (h) => a && h.preventDefault(),
      children: n
    }
  ) : /* @__PURE__ */ m.jsx(
    "button",
    {
      type: t,
      className: `button ${r} ${f} ${o}`,
      onClick: e,
      disabled: a,
      style: u,
      children: n
    }
  );
}, wt = ({
  label: n,
  checked: e,
  labelColor: t,
  onChange: r
}) => {
  const s = (a) => {
    r(a.target.checked);
  };
  return /* @__PURE__ */ m.jsx("div", { className: "checkbox-container", children: /* @__PURE__ */ m.jsxs("label", { style: { color: t }, children: [
    /* @__PURE__ */ m.jsx("input", { type: "checkbox", checked: e, onChange: s }),
    n
  ] }) });
}, Dn = ({ children: n, style: e }) => /* @__PURE__ */ m.jsx("div", { className: "container", style: e, children: n });
function Fr(n) {
  const [e, t] = W(), [r, s] = W(), [a, o] = W(!0);
  return We(() => {
    (async () => {
      o(!0), s(void 0);
      try {
        const u = await fetch(n);
        if (!u.ok)
          throw new Error(`HTTP error! Status: ${u.status}`);
        const f = await u.json();
        t(f);
      } catch (u) {
        s(
          u instanceof Error ? u : new Error("An unknown error occurred")
        );
      } finally {
        o(!1);
      }
    })();
  }, [n]), { data: e, error: r, loading: a };
}
const kr = "https://randomuser.me/api/?results=10&nat=us", H = {
  NAME: "Search by name",
  ADDRESS: "Search by address",
  EMAIL: "Search by email (e.g., avery.sims@example.com)",
  PHONE_NUMBER: "Search by phone (e.g., (453) 439-1408)",
  AGE: "Search by age",
  FILTER_USER: "Find user profile",
  FILTER_GENDER: "Filter by Gender"
}, St = {
  NO_USERS_AVAILABLE: "No users found matching the criteria.",
  NO_DATA: "No data available."
}, jr = {
  USERS_SAY: "What Our Users Say"
}, fe = {
  GENDER: "Gender:",
  LOCATION: "Location:",
  EMAIL: "Email:",
  PHONE_NUMBER: "Phone number:",
  AGE: "Age:"
}, Dt = _r({
  activeIndex: 0,
  setActiveIndex: () => {
  },
  orientation: "vertical",
  backgroundColor: "",
  centered: !1,
  borderColor: "",
  textColor: ""
}), Nn = ({
  children: n,
  value: e,
  centered: t,
  orientation: r = "vertical",
  backgroundColor: s,
  borderColor: a,
  textColor: o,
  classes: l
}) => {
  const [u, f] = W(e ?? 0), h = `tabs ${r} ${l || ""}`;
  return /* @__PURE__ */ m.jsx(
    Dt.Provider,
    {
      value: {
        activeIndex: u,
        setActiveIndex: f,
        orientation: r,
        centered: t,
        backgroundColor: s,
        borderColor: a,
        textColor: o
      },
      children: /* @__PURE__ */ m.jsx("div", { className: h, style: { color: "fff" }, children: /* @__PURE__ */ m.jsx("div", { className: h, children: n }) })
    }
  );
}, qe = () => wr(Dt), Pn = ({
  index: n,
  children: e,
  classes: t = "",
  disabled: r = !1,
  icon: s,
  iconPosition: a = "left",
  label: o
}) => {
  const {
    activeIndex: l,
    setActiveIndex: u,
    orientation: f,
    textColor: h,
    backgroundColor: p,
    borderColor: v
  } = qe(), g = n === l, _ = () => u(n);
  return /* @__PURE__ */ m.jsxs(
    "button",
    {
      className: `tab ${g ? "active" : ""} ${r ? "disabled" : ""} ${f === "horizontal" && "horizontal"}${t}`,
      onClick: _,
      disabled: r,
      style: {
        color: h,
        backgroundColor: p,
        borderColor: g ? v : void 0
      },
      children: [
        s && a === "left" && /* @__PURE__ */ m.jsx(k, { variant: "body1", className: "tab-icon left", children: s }),
        o || e,
        s && a === "right" && /* @__PURE__ */ m.jsx(k, { variant: "body1", className: "tab-icon right", children: s })
      ]
    }
  );
}, In = ({ children: n, style: e }) => {
  const { orientation: t, centered: r, backgroundColor: s } = qe();
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: `tab-list ${t === "horizontal" && "horizontal"} ${r && t === "vertical" ? "centered" : ""}`,
      style: { backgroundColor: s, ...e },
      children: n
    }
  );
}, Ln = ({ index: n, children: e, style: t }) => {
  const { activeIndex: r, orientation: s } = qe();
  return r === n && /* @__PURE__ */ m.jsx(
    "div",
    {
      className: `tab-panel ${s === "horizontal" && "horizontal"}`,
      style: t,
      children: e
    }
  );
}, Nt = ({ src: n, alt: e = "icon", size: t = 24, style: r }) => /* @__PURE__ */ m.jsx(
  "img",
  {
    src: n,
    alt: e,
    style: {
      width: `${t}px`,
      height: `${t}px`,
      objectFit: "contain",
      display: "inline-block",
      ...r
    }
  }
), Rr = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  subtitle1: "h2",
  subtitle2: "h2",
  body1: "span",
  body2: "span"
}, k = ({
  variant: n = "body1",
  className: e,
  textColor: t,
  style: r,
  children: s
}) => {
  const a = Rr[n];
  return /* @__PURE__ */ m.jsx(
    a,
    {
      className: `typography ${n} ${e || ""}`,
      style: { ...r, color: t },
      children: s
    }
  );
}, Cr = (n) => {
  const [e, t] = W(!1), r = Sr(null);
  return We(() => {
    const s = new IntersectionObserver(
      ([a]) => {
        t(a.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        ...n
      }
    );
    return r.current && s.observe(r.current), () => {
      r.current && s.unobserve(r.current);
    };
  }, [n]), { isVisible: e, elementRef: r };
}, Ar = ({ user: n, style: e }) => {
  const { isVisible: t, elementRef: r } = Cr();
  return /* @__PURE__ */ m.jsx("div", { ref: r, className: "user-card", style: e, children: t ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(
      Nt,
      {
        src: n.picture.large,
        size: 128,
        alt: `${n.name.first} ${n.name.last}`
      }
    ),
    /* @__PURE__ */ m.jsx(k, { variant: "h2", children: `${n.name.title} ${n.name.first} ${n.name.last}` }),
    /* @__PURE__ */ m.jsxs(k, { variant: "p", children: [
      /* @__PURE__ */ m.jsx("strong", { children: fe.GENDER }),
      " ",
      n.gender
    ] }),
    /* @__PURE__ */ m.jsxs(k, { variant: "p", children: [
      /* @__PURE__ */ m.jsx("strong", { children: fe.LOCATION }),
      " ",
      `${n.location.street.number} ${n.location.street.name}, ${n.location.city}, ${n.location.state}, ${n.location.country} - ${n.location.postcode}`
    ] }),
    /* @__PURE__ */ m.jsxs(k, { variant: "p", children: [
      /* @__PURE__ */ m.jsx("strong", { children: fe.EMAIL }),
      " ",
      n.email
    ] }),
    /* @__PURE__ */ m.jsxs(k, { variant: "p", children: [
      /* @__PURE__ */ m.jsx("strong", { children: fe.PHONE_NUMBER }),
      " ",
      n.phone
    ] }),
    /* @__PURE__ */ m.jsxs(k, { variant: "p", children: [
      /* @__PURE__ */ m.jsx("strong", { children: fe.AGE }),
      " ",
      n.dob.age,
      " (",
      new Date(n.dob.date).toLocaleDateString(),
      ")"
    ] })
  ] }) : /* @__PURE__ */ m.jsx("div", { className: "user-card-placeholder", children: /* @__PURE__ */ m.jsx(k, { variant: "p", children: "Loading user details..." }) }) });
}, Dr = ({
  type: n,
  value: e,
  onChange: t,
  placeholder: r = "",
  label: s,
  error: a,
  style: o
}) => {
  const l = (u) => {
    const { value: f } = u.target;
    if (n === "number") {
      const h = f === "" ? "" : parseFloat(f);
      t(h);
    } else
      t(f);
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "input-container", children: [
    s && /* @__PURE__ */ m.jsx("label", { className: "input-label", style: o, children: s }),
    /* @__PURE__ */ m.jsx(
      "input",
      {
        className: `input-field ${a ? "error" : ""}`,
        type: n,
        value: e,
        onChange: l,
        placeholder: r
      }
    ),
    a && /* @__PURE__ */ m.jsx("div", { className: "error-message", children: a })
  ] });
}, Nr = () => {
  const [n, e] = W({
    width: window.innerWidth,
    height: window.innerHeight
  });
  return We(() => {
    const t = () => e({ width: window.innerWidth, height: window.innerHeight });
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []), n;
}, Mn = ({
  testimonials: n,
  cardWidth: e,
  style: t
}) => {
  const { width: r } = Nr(), [s, a] = W(0), o = r <= 1024 ? 2 : 3, l = () => {
    a((p) => Math.max(0, p - 1));
  }, u = () => {
    a(
      (p) => Math.min(
        p + 1,
        Math.ceil(n.length / o) - 1
      )
    );
  }, f = s === 0, h = s === Math.ceil(n.length / o) - 1;
  return /* @__PURE__ */ m.jsxs(ye, { className: "testimonials-container", children: [
    /* @__PURE__ */ m.jsx(k, { variant: "h2", style: { color: "#fff", fontSize: "32px" }, children: jr.USERS_SAY }),
    /* @__PURE__ */ m.jsx(ye, { className: "testimonials-slider", style: t, children: /* @__PURE__ */ m.jsxs(ye, { className: "testimonials-row", children: [
      /* @__PURE__ */ m.jsx(
        _t,
        {
          onClick: l,
          className: `slider-arrow slider-arrow-left ${f ? "arrow-hidden" : ""}`,
          "aria-label": "Previous testimonials",
          disabled: f,
          children: "←"
        }
      ),
      n.slice(s, s + o).map((p, v) => /* @__PURE__ */ m.jsxs(
        ye,
        {
          className: "testimonial-card",
          style: e ? {
            "--testimonial-card-width": e
          } : void 0,
          children: [
            /* @__PURE__ */ m.jsx(
              Nt,
              {
                src: p.avatar,
                alt: p.name,
                size: 64
              }
            ),
            /* @__PURE__ */ m.jsx(k, { variant: "h3", className: "testimonial-name", children: p.name }),
            /* @__PURE__ */ m.jsx(k, { variant: "h2", className: "testimonial-designation", children: p.designation }),
            /* @__PURE__ */ m.jsxs(k, { variant: "p", className: "testimonial-feedback", children: [
              '"',
              p.feedback,
              '"'
            ] })
          ]
        },
        v
      )),
      /* @__PURE__ */ m.jsx(
        _t,
        {
          onClick: u,
          className: `slider-arrow slider-arrow-right ${h ? "arrow-hidden" : ""}`,
          "aria-label": "Next testimonials",
          disabled: h,
          children: "→"
        }
      )
    ] }) })
  ] });
}, Pr = (n, e) => n.filter((t) => {
  const r = `${t.name.title} ${t.name.first} ${t.name.last}`.toLowerCase(), s = `${t.location.street.number} ${t.location.street.name}, ${t.location.city}, ${t.location.state}, ${t.location.country} - ${t.location.postcode}`.toLowerCase(), a = t.email.toLowerCase(), o = t.phone.replace(/[^0-9]/g, ""), l = r.includes(e.name.toLowerCase()), u = s.includes(e.address.toLowerCase()), f = a.includes(e.email.toLowerCase()), h = e.phone === "" || o.includes(e.phone.replace(/[^0-9]/g, "")), p = e.age === "" || t.dob.age === Number(e.age), v = e.gender === "" || t.gender === e.gender;
  return l && u && f && h && p && v;
});
function J(n) {
  this._maxSize = n, this.clear();
}
J.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
J.prototype.get = function(n) {
  return this._values[n];
};
J.prototype.set = function(n, e) {
  return this._size >= this._maxSize && this.clear(), n in this._values || this._size++, this._values[n] = e;
};
var Ir = /[^.^\]^[]+|(?=\[\]|\.\.)/g, Pt = /^\d+$/, Lr = /^\d/, Mr = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, zr = /^\s*(['"]?)(.*?)(\1)\s*$/, Ge = 512, Tt = new J(Ge), $t = new J(Ge), Ot = new J(Ge), K = {
  Cache: J,
  split: Ue,
  normalizePath: Le,
  setter: function(n) {
    var e = Le(n);
    return $t.get(n) || $t.set(n, function(r, s) {
      for (var a = 0, o = e.length, l = r; a < o - 1; ) {
        var u = e[a];
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return r;
        l = l[e[a++]];
      }
      l[e[a]] = s;
    });
  },
  getter: function(n, e) {
    var t = Le(n);
    return Ot.get(n) || Ot.set(n, function(s) {
      for (var a = 0, o = t.length; a < o; )
        if (s != null || !e) s = s[t[a++]];
        else return;
      return s;
    });
  },
  join: function(n) {
    return n.reduce(function(e, t) {
      return e + (Ze(t) || Pt.test(t) ? "[" + t + "]" : (e ? "." : "") + t);
    }, "");
  },
  forEach: function(n, e, t) {
    Ur(Array.isArray(n) ? n : Ue(n), e, t);
  }
};
function Le(n) {
  return Tt.get(n) || Tt.set(
    n,
    Ue(n).map(function(e) {
      return e.replace(zr, "$2");
    })
  );
}
function Ue(n) {
  return n.match(Ir) || [""];
}
function Ur(n, e, t) {
  var r = n.length, s, a, o, l;
  for (a = 0; a < r; a++)
    s = n[a], s && (Wr(s) && (s = '"' + s + '"'), l = Ze(s), o = !l && /^\d+$/.test(s), e.call(t, s, l, o, a, n));
}
function Ze(n) {
  return typeof n == "string" && n && ["'", '"'].indexOf(n.charAt(0)) !== -1;
}
function Vr(n) {
  return n.match(Lr) && !n.match(Pt);
}
function Yr(n) {
  return Mr.test(n);
}
function Wr(n) {
  return !Ze(n) && (Vr(n) || Yr(n));
}
const qr = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, $e = (n) => n.match(qr) || [], Oe = (n) => n[0].toUpperCase() + n.slice(1), Be = (n, e) => $e(n).join(e).toLowerCase(), It = (n) => $e(n).reduce(
  (e, t) => `${e}${e ? t[0].toUpperCase() + t.slice(1).toLowerCase() : t.toLowerCase()}`,
  ""
), Gr = (n) => Oe(It(n)), Zr = (n) => Be(n, "_"), Br = (n) => Be(n, "-"), Hr = (n) => Oe(Be(n, " ")), Kr = (n) => $e(n).map(Oe).join(" ");
var Me = {
  words: $e,
  upperFirst: Oe,
  camelCase: It,
  pascalCase: Gr,
  snakeCase: Zr,
  kebabCase: Br,
  sentenceCase: Hr,
  titleCase: Kr
}, He = { exports: {} };
He.exports = function(n) {
  return Lt(Jr(n), n);
};
He.exports.array = Lt;
function Lt(n, e) {
  var t = n.length, r = new Array(t), s = {}, a = t, o = Xr(e), l = Qr(n);
  for (e.forEach(function(f) {
    if (!l.has(f[0]) || !l.has(f[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); a--; )
    s[a] || u(n[a], a, /* @__PURE__ */ new Set());
  return r;
  function u(f, h, p) {
    if (p.has(f)) {
      var v;
      try {
        v = ", node was:" + JSON.stringify(f);
      } catch {
        v = "";
      }
      throw new Error("Cyclic dependency" + v);
    }
    if (!l.has(f))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(f));
    if (!s[h]) {
      s[h] = !0;
      var g = o.get(f) || /* @__PURE__ */ new Set();
      if (g = Array.from(g), h = g.length) {
        p.add(f);
        do {
          var _ = g[--h];
          u(_, l.get(_), p);
        } while (h);
        p.delete(f);
      }
      r[--t] = f;
    }
  }
}
function Jr(n) {
  for (var e = /* @__PURE__ */ new Set(), t = 0, r = n.length; t < r; t++) {
    var s = n[t];
    e.add(s[0]), e.add(s[1]);
  }
  return Array.from(e);
}
function Xr(n) {
  for (var e = /* @__PURE__ */ new Map(), t = 0, r = n.length; t < r; t++) {
    var s = n[t];
    e.has(s[0]) || e.set(s[0], /* @__PURE__ */ new Set()), e.has(s[1]) || e.set(s[1], /* @__PURE__ */ new Set()), e.get(s[0]).add(s[1]);
  }
  return e;
}
function Qr(n) {
  for (var e = /* @__PURE__ */ new Map(), t = 0, r = n.length; t < r; t++)
    e.set(n[t], t);
  return e;
}
var en = He.exports;
const tn = /* @__PURE__ */ Tr(en), rn = Object.prototype.toString, nn = Error.prototype.toString, sn = RegExp.prototype.toString, an = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", on = /^Symbol\((.*)\)(.*)$/;
function un(n) {
  return n != +n ? "NaN" : n === 0 && 1 / n < 0 ? "-0" : "" + n;
}
function Ft(n, e = !1) {
  if (n == null || n === !0 || n === !1) return "" + n;
  const t = typeof n;
  if (t === "number") return un(n);
  if (t === "string") return e ? `"${n}"` : n;
  if (t === "function") return "[Function " + (n.name || "anonymous") + "]";
  if (t === "symbol") return an.call(n).replace(on, "Symbol($1)");
  const r = rn.call(n).slice(8, -1);
  return r === "Date" ? isNaN(n.getTime()) ? "" + n : n.toISOString(n) : r === "Error" || n instanceof Error ? "[" + nn.call(n) + "]" : r === "RegExp" ? sn.call(n) : null;
}
function G(n, e) {
  let t = Ft(n, e);
  return t !== null ? t : JSON.stringify(n, function(r, s) {
    let a = Ft(this[r], e);
    return a !== null ? a : s;
  }, 2);
}
function Mt(n) {
  return n == null ? [] : [].concat(n);
}
let zt, Ut, Vt, ln = /\$\{\s*(\w+)\s*\}/g;
zt = Symbol.toStringTag;
class kt {
  constructor(e, t, r, s) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[zt] = "Error", this.name = "ValidationError", this.value = t, this.path = r, this.type = s, this.errors = [], this.inner = [], Mt(e).forEach((a) => {
      if (D.isError(a)) {
        this.errors.push(...a.errors);
        const o = a.inner.length ? a.inner : [a];
        this.inner.push(...o);
      } else
        this.errors.push(a);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
Ut = Symbol.hasInstance;
Vt = Symbol.toStringTag;
class D extends Error {
  static formatError(e, t) {
    const r = t.label || t.path || "this";
    return t = Object.assign({}, t, {
      path: r,
      originalPath: t.path
    }), typeof e == "string" ? e.replace(ln, (s, a) => G(t[a])) : typeof e == "function" ? e(t) : e;
  }
  static isError(e) {
    return e && e.name === "ValidationError";
  }
  constructor(e, t, r, s, a) {
    const o = new kt(e, t, r, s);
    if (a)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Vt] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, D);
  }
  static [Ut](e) {
    return kt[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
  }
}
let U = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: n,
    type: e,
    value: t,
    originalValue: r
  }) => {
    const s = r != null && r !== t ? ` (cast from the value \`${G(r, !0)}\`).` : ".";
    return e !== "mixed" ? `${n} must be a \`${e}\` type, but the final value was: \`${G(t, !0)}\`` + s : `${n} must match the configured type. The validated value was: \`${G(t, !0)}\`` + s;
  }
}, A = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  datetime: "${path} must be a valid ISO date-time",
  datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
  datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
}, q = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Ve = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, cn = {
  isValue: "${path} field must be ${value}"
}, _e = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, fn = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, dn = {
  notType: (n) => {
    const {
      path: e,
      value: t,
      spec: r
    } = n, s = r.types.length;
    if (Array.isArray(t)) {
      if (t.length < s) return `${e} tuple value has too few items, expected a length of ${s} but got ${t.length} for value: \`${G(t, !0)}\``;
      if (t.length > s) return `${e} tuple value has too many items, expected a length of ${s} but got ${t.length} for value: \`${G(t, !0)}\``;
    }
    return D.formatError(U.notType, n);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: U,
  string: A,
  number: q,
  date: Ve,
  object: _e,
  array: fn,
  boolean: cn,
  tuple: dn
});
const Ke = (n) => n && n.__isYupSchema__;
class Se {
  static fromOptions(e, t) {
    if (!t.then && !t.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: r,
      then: s,
      otherwise: a
    } = t, o = typeof r == "function" ? r : (...l) => l.every((u) => u === r);
    return new Se(e, (l, u) => {
      var f;
      let h = o(...l) ? s : a;
      return (f = h == null ? void 0 : h(u)) != null ? f : u;
    });
  }
  constructor(e, t) {
    this.fn = void 0, this.refs = e, this.refs = e, this.fn = t;
  }
  resolve(e, t) {
    let r = this.refs.map((a) => (
      // TODO: ? operator here?
      a.getValue(t == null ? void 0 : t.value, t == null ? void 0 : t.parent, t == null ? void 0 : t.context)
    )), s = this.fn(r, e, t);
    if (s === void 0 || // @ts-ignore this can be base
    s === e)
      return e;
    if (!Ke(s)) throw new TypeError("conditions must return a schema object");
    return s.resolve(t);
  }
}
const Ee = {
  context: "$",
  value: "."
};
class X {
  constructor(e, t = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof e != "string") throw new TypeError("ref must be a string, got: " + e);
    if (this.key = e.trim(), e === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Ee.context, this.isValue = this.key[0] === Ee.value, this.isSibling = !this.isContext && !this.isValue;
    let r = this.isContext ? Ee.context : this.isValue ? Ee.value : "";
    this.path = this.key.slice(r.length), this.getter = this.path && K.getter(this.path, !0), this.map = t.map;
  }
  getValue(e, t, r) {
    let s = this.isContext ? r : this.isValue ? e : t;
    return this.getter && (s = this.getter(s || {})), this.map && (s = this.map(s)), s;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(e, t) {
    return this.getValue(e, t == null ? void 0 : t.parent, t == null ? void 0 : t.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(e) {
    return e && e.__isYupRef;
  }
}
X.prototype.__isYupRef = !0;
const Y = (n) => n == null;
function te(n) {
  function e({
    value: t,
    path: r = "",
    options: s,
    originalValue: a,
    schema: o
  }, l, u) {
    const {
      name: f,
      test: h,
      params: p,
      message: v,
      skipAbsent: g
    } = n;
    let {
      parent: _,
      context: w,
      abortEarly: R = o.spec.abortEarly,
      disableStackTrace: N = o.spec.disableStackTrace
    } = s;
    function T($) {
      return X.isRef($) ? $.getValue(t, _, w) : $;
    }
    function he($ = {}) {
      const M = Object.assign({
        value: t,
        originalValue: a,
        label: o.spec.label,
        path: $.path || r,
        spec: o.spec,
        disableStackTrace: $.disableStackTrace || N
      }, p, $.params);
      for (const z of Object.keys(M)) M[z] = T(M[z]);
      const P = new D(D.formatError($.message || v, M), t, M.path, $.type || f, M.disableStackTrace);
      return P.params = M, P;
    }
    const ne = R ? l : u;
    let se = {
      path: r,
      parent: _,
      type: f,
      from: s.from,
      createError: he,
      resolve: T,
      options: s,
      originalValue: a,
      schema: o
    };
    const ie = ($) => {
      D.isError($) ? ne($) : $ ? u(null) : ne(he());
    }, pe = ($) => {
      D.isError($) ? ne($) : l($);
    };
    if (g && Y(t))
      return ie(!0);
    let Z;
    try {
      var me;
      if (Z = h.call(se, t, se), typeof ((me = Z) == null ? void 0 : me.then) == "function") {
        if (s.sync)
          throw new Error(`Validation test of type: "${se.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(Z).then(ie, pe);
      }
    } catch ($) {
      pe($);
      return;
    }
    ie(Z);
  }
  return e.OPTIONS = n, e;
}
function hn(n, e, t, r = t) {
  let s, a, o;
  return e ? (K.forEach(e, (l, u, f) => {
    let h = u ? l.slice(1, l.length - 1) : l;
    n = n.resolve({
      context: r,
      parent: s,
      value: t
    });
    let p = n.type === "tuple", v = f ? parseInt(h, 10) : 0;
    if (n.innerType || p) {
      if (p && !f) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (t && v >= t.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${e}. because there is no value at that index. `);
      s = t, t = t && t[v], n = p ? n.spec.types[v] : n.innerType;
    }
    if (!f) {
      if (!n.fields || !n.fields[h]) throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${n.type}")`);
      s = t, t = t && t[h], n = n.fields[h];
    }
    a = h, o = u ? "[" + l + "]" : "." + l;
  }), {
    schema: n,
    parent: s,
    parentPath: a
  }) : {
    parent: s,
    parentPath: e,
    schema: n
  };
}
class Te extends Set {
  describe() {
    const e = [];
    for (const t of this.values())
      e.push(X.isRef(t) ? t.describe() : t);
    return e;
  }
  resolveAll(e) {
    let t = [];
    for (const r of this.values())
      t.push(e(r));
    return t;
  }
  clone() {
    return new Te(this.values());
  }
  merge(e, t) {
    const r = this.clone();
    return e.forEach((s) => r.add(s)), t.forEach((s) => r.delete(s)), r;
  }
}
function re(n, e = /* @__PURE__ */ new Map()) {
  if (Ke(n) || !n || typeof n != "object") return n;
  if (e.has(n)) return e.get(n);
  let t;
  if (n instanceof Date)
    t = new Date(n.getTime()), e.set(n, t);
  else if (n instanceof RegExp)
    t = new RegExp(n), e.set(n, t);
  else if (Array.isArray(n)) {
    t = new Array(n.length), e.set(n, t);
    for (let r = 0; r < n.length; r++) t[r] = re(n[r], e);
  } else if (n instanceof Map) {
    t = /* @__PURE__ */ new Map(), e.set(n, t);
    for (const [r, s] of n.entries()) t.set(r, re(s, e));
  } else if (n instanceof Set) {
    t = /* @__PURE__ */ new Set(), e.set(n, t);
    for (const r of n) t.add(re(r, e));
  } else if (n instanceof Object) {
    t = {}, e.set(n, t);
    for (const [r, s] of Object.entries(n)) t[r] = re(s, e);
  } else
    throw Error(`Unable to clone ${n}`);
  return t;
}
class L {
  constructor(e) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Te(), this._blacklist = new Te(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(U.notType);
    }), this.type = e.type, this._typeCheck = e.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, e == null ? void 0 : e.spec), this.withMutation((t) => {
      t.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(e) {
    if (this._mutate)
      return e && Object.assign(this.spec, e), this;
    const t = Object.create(Object.getPrototypeOf(this));
    return t.type = this.type, t._typeCheck = this._typeCheck, t._whitelist = this._whitelist.clone(), t._blacklist = this._blacklist.clone(), t.internalTests = Object.assign({}, this.internalTests), t.exclusiveTests = Object.assign({}, this.exclusiveTests), t.deps = [...this.deps], t.conditions = [...this.conditions], t.tests = [...this.tests], t.transforms = [...this.transforms], t.spec = re(Object.assign({}, this.spec, e)), t;
  }
  label(e) {
    let t = this.clone();
    return t.spec.label = e, t;
  }
  meta(...e) {
    if (e.length === 0) return this.spec.meta;
    let t = this.clone();
    return t.spec.meta = Object.assign(t.spec.meta || {}, e[0]), t;
  }
  withMutation(e) {
    let t = this._mutate;
    this._mutate = !0;
    let r = e(this);
    return this._mutate = t, r;
  }
  concat(e) {
    if (!e || e === this) return this;
    if (e.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);
    let t = this, r = e.clone();
    const s = Object.assign({}, t.spec, r.spec);
    return r.spec = s, r.internalTests = Object.assign({}, t.internalTests, r.internalTests), r._whitelist = t._whitelist.merge(e._whitelist, e._blacklist), r._blacklist = t._blacklist.merge(e._blacklist, e._whitelist), r.tests = t.tests, r.exclusiveTests = t.exclusiveTests, r.withMutation((a) => {
      e.tests.forEach((o) => {
        a.test(o.OPTIONS);
      });
    }), r.transforms = [...t.transforms, ...r.transforms], r;
  }
  isType(e) {
    return e == null ? !!(this.spec.nullable && e === null || this.spec.optional && e === void 0) : this._typeCheck(e);
  }
  resolve(e) {
    let t = this;
    if (t.conditions.length) {
      let r = t.conditions;
      t = t.clone(), t.conditions = [], t = r.reduce((s, a) => a.resolve(s, e), t), t = t.resolve(e);
    }
    return t;
  }
  resolveOptions(e) {
    var t, r, s, a;
    return Object.assign({}, e, {
      from: e.from || [],
      strict: (t = e.strict) != null ? t : this.spec.strict,
      abortEarly: (r = e.abortEarly) != null ? r : this.spec.abortEarly,
      recursive: (s = e.recursive) != null ? s : this.spec.recursive,
      disableStackTrace: (a = e.disableStackTrace) != null ? a : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(e, t = {}) {
    let r = this.resolve(Object.assign({
      value: e
    }, t)), s = t.assert === "ignore-optionality", a = r._cast(e, t);
    if (t.assert !== !1 && !r.isType(a)) {
      if (s && Y(a))
        return a;
      let o = G(e), l = G(a);
      throw new TypeError(`The value of ${t.path || "field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
` + (l !== o ? `result of cast: ${l}` : ""));
    }
    return a;
  }
  _cast(e, t) {
    let r = e === void 0 ? e : this.transforms.reduce((s, a) => a.call(this, s, e, this), e);
    return r === void 0 && (r = this.getDefault(t)), r;
  }
  _validate(e, t = {}, r, s) {
    let {
      path: a,
      originalValue: o = e,
      strict: l = this.spec.strict
    } = t, u = e;
    l || (u = this._cast(u, Object.assign({
      assert: !1
    }, t)));
    let f = [];
    for (let h of Object.values(this.internalTests))
      h && f.push(h);
    this.runTests({
      path: a,
      value: u,
      originalValue: o,
      options: t,
      tests: f
    }, r, (h) => {
      if (h.length)
        return s(h, u);
      this.runTests({
        path: a,
        value: u,
        originalValue: o,
        options: t,
        tests: this.tests
      }, r, s);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(e, t, r) {
    let s = !1, {
      tests: a,
      value: o,
      originalValue: l,
      path: u,
      options: f
    } = e, h = (w) => {
      s || (s = !0, t(w, o));
    }, p = (w) => {
      s || (s = !0, r(w, o));
    }, v = a.length, g = [];
    if (!v) return p([]);
    let _ = {
      value: o,
      originalValue: l,
      path: u,
      options: f,
      schema: this
    };
    for (let w = 0; w < a.length; w++) {
      const R = a[w];
      R(_, h, function(T) {
        T && (Array.isArray(T) ? g.push(...T) : g.push(T)), --v <= 0 && p(g);
      });
    }
  }
  asNestedTest({
    key: e,
    index: t,
    parent: r,
    parentPath: s,
    originalParent: a,
    options: o
  }) {
    const l = e ?? t;
    if (l == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const u = typeof l == "number";
    let f = r[l];
    const h = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: r,
      value: f,
      originalValue: a[l],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [u ? "index" : "key"]: l,
      path: u || l.includes(".") ? `${s || ""}[${u ? l : `"${l}"`}]` : (s ? `${s}.` : "") + e
    });
    return (p, v, g) => this.resolve(h)._validate(f, h, v, g);
  }
  validate(e, t) {
    var r;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), a = (r = t == null ? void 0 : t.disableStackTrace) != null ? r : s.spec.disableStackTrace;
    return new Promise((o, l) => s._validate(e, t, (u, f) => {
      D.isError(u) && (u.value = f), l(u);
    }, (u, f) => {
      u.length ? l(new D(u, f, void 0, void 0, a)) : o(f);
    }));
  }
  validateSync(e, t) {
    var r;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), a, o = (r = t == null ? void 0 : t.disableStackTrace) != null ? r : s.spec.disableStackTrace;
    return s._validate(e, Object.assign({}, t, {
      sync: !0
    }), (l, u) => {
      throw D.isError(l) && (l.value = u), l;
    }, (l, u) => {
      if (l.length) throw new D(l, e, void 0, void 0, o);
      a = u;
    }), a;
  }
  isValid(e, t) {
    return this.validate(e, t).then(() => !0, (r) => {
      if (D.isError(r)) return !1;
      throw r;
    });
  }
  isValidSync(e, t) {
    try {
      return this.validateSync(e, t), !0;
    } catch (r) {
      if (D.isError(r)) return !1;
      throw r;
    }
  }
  _getDefault(e) {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this, e) : re(t);
  }
  getDefault(e) {
    return this.resolve(e || {})._getDefault(e);
  }
  default(e) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: e
    });
  }
  strict(e = !0) {
    return this.clone({
      strict: e
    });
  }
  nullability(e, t) {
    const r = this.clone({
      nullable: e
    });
    return r.internalTests.nullable = te({
      message: t,
      name: "nullable",
      test(s) {
        return s === null ? this.schema.spec.nullable : !0;
      }
    }), r;
  }
  optionality(e, t) {
    const r = this.clone({
      optional: e
    });
    return r.internalTests.optionality = te({
      message: t,
      name: "optionality",
      test(s) {
        return s === void 0 ? this.schema.spec.optional : !0;
      }
    }), r;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(e = U.defined) {
    return this.optionality(!1, e);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(e = U.notNull) {
    return this.nullability(!1, e);
  }
  required(e = U.required) {
    return this.clone().withMutation((t) => t.nonNullable(e).defined(e));
  }
  notRequired() {
    return this.clone().withMutation((e) => e.nullable().optional());
  }
  transform(e) {
    let t = this.clone();
    return t.transforms.push(e), t;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...e) {
    let t;
    if (e.length === 1 ? typeof e[0] == "function" ? t = {
      test: e[0]
    } : t = e[0] : e.length === 2 ? t = {
      name: e[0],
      test: e[1]
    } : t = {
      name: e[0],
      message: e[1],
      test: e[2]
    }, t.message === void 0 && (t.message = U.default), typeof t.test != "function") throw new TypeError("`test` is a required parameters");
    let r = this.clone(), s = te(t), a = t.exclusive || t.name && r.exclusiveTests[t.name] === !0;
    if (t.exclusive && !t.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return t.name && (r.exclusiveTests[t.name] = !!t.exclusive), r.tests = r.tests.filter((o) => !(o.OPTIONS.name === t.name && (a || o.OPTIONS.test === s.OPTIONS.test))), r.tests.push(s), r;
  }
  when(e, t) {
    !Array.isArray(e) && typeof e != "string" && (t = e, e = ".");
    let r = this.clone(), s = Mt(e).map((a) => new X(a));
    return s.forEach((a) => {
      a.isSibling && r.deps.push(a.key);
    }), r.conditions.push(typeof t == "function" ? new Se(s, t) : Se.fromOptions(s, t)), r;
  }
  typeError(e) {
    let t = this.clone();
    return t.internalTests.typeError = te({
      message: e,
      name: "typeError",
      skipAbsent: !0,
      test(r) {
        return this.schema._typeCheck(r) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), t;
  }
  oneOf(e, t = U.oneOf) {
    let r = this.clone();
    return e.forEach((s) => {
      r._whitelist.add(s), r._blacklist.delete(s);
    }), r.internalTests.whiteList = te({
      message: t,
      name: "oneOf",
      skipAbsent: !0,
      test(s) {
        let a = this.schema._whitelist, o = a.resolveAll(this.resolve);
        return o.includes(s) ? !0 : this.createError({
          params: {
            values: Array.from(a).join(", "),
            resolved: o
          }
        });
      }
    }), r;
  }
  notOneOf(e, t = U.notOneOf) {
    let r = this.clone();
    return e.forEach((s) => {
      r._blacklist.add(s), r._whitelist.delete(s);
    }), r.internalTests.blacklist = te({
      message: t,
      name: "notOneOf",
      test(s) {
        let a = this.schema._blacklist, o = a.resolveAll(this.resolve);
        return o.includes(s) ? this.createError({
          params: {
            values: Array.from(a).join(", "),
            resolved: o
          }
        }) : !0;
      }
    }), r;
  }
  strip(e = !0) {
    let t = this.clone();
    return t.spec.strip = e, t;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(e) {
    const t = (e ? this.resolve(e) : this).clone(), {
      label: r,
      meta: s,
      optional: a,
      nullable: o
    } = t.spec;
    return {
      meta: s,
      label: r,
      optional: a,
      nullable: o,
      default: t.getDefault(e),
      type: t.type,
      oneOf: t._whitelist.describe(),
      notOneOf: t._blacklist.describe(),
      tests: t.tests.map((u) => ({
        name: u.OPTIONS.name,
        params: u.OPTIONS.params
      })).filter((u, f, h) => h.findIndex((p) => p.name === u.name) === f)
    };
  }
}
L.prototype.__isYupSchema__ = !0;
for (const n of ["validate", "validateSync"]) L.prototype[`${n}At`] = function(e, t, r = {}) {
  const {
    parent: s,
    parentPath: a,
    schema: o
  } = hn(this, e, t, r.context);
  return o[n](s && s[a], Object.assign({}, r, {
    parent: s,
    path: e
  }));
};
for (const n of ["equals", "is"]) L.prototype[n] = L.prototype.oneOf;
for (const n of ["not", "nope"]) L.prototype[n] = L.prototype.notOneOf;
const pn = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function mn(n) {
  const e = Ye(n);
  if (!e) return Date.parse ? Date.parse(n) : Number.NaN;
  if (e.z === void 0 && e.plusMinus === void 0)
    return new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond).valueOf();
  let t = 0;
  return e.z !== "Z" && e.plusMinus !== void 0 && (t = e.hourOffset * 60 + e.minuteOffset, e.plusMinus === "+" && (t = 0 - t)), Date.UTC(e.year, e.month, e.day, e.hour, e.minute + t, e.second, e.millisecond);
}
function Ye(n) {
  var e, t;
  const r = pn.exec(n);
  return r ? {
    year: V(r[1]),
    month: V(r[2], 1) - 1,
    day: V(r[3], 1),
    hour: V(r[4]),
    minute: V(r[5]),
    second: V(r[6]),
    millisecond: r[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      V(r[7].substring(0, 3))
    ) : 0,
    precision: (e = (t = r[7]) == null ? void 0 : t.length) != null ? e : void 0,
    z: r[8] || void 0,
    plusMinus: r[9] || void 0,
    hourOffset: V(r[10]),
    minuteOffset: V(r[11])
  } : null;
}
function V(n, e = 0) {
  return Number(n) || e;
}
let bn = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), gn = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), vn = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, xn = "^\\d{4}-\\d{2}-\\d{2}", yn = "\\d{2}:\\d{2}:\\d{2}", En = "(([+-]\\d{2}(:?\\d{2})?)|Z)", _n = new RegExp(`${xn}T${yn}(\\.\\d+)?${En}$`), wn = (n) => Y(n) || n === n.trim(), Sn = {}.toString();
function de() {
  return new Yt();
}
class Yt extends L {
  constructor() {
    super({
      type: "string",
      check(e) {
        return e instanceof String && (e = e.valueOf()), typeof e == "string";
      }
    }), this.withMutation(() => {
      this.transform((e, t, r) => {
        if (!r.spec.coerce || r.isType(e) || Array.isArray(e)) return e;
        const s = e != null && e.toString ? e.toString() : e;
        return s === Sn ? e : s;
      });
    });
  }
  required(e) {
    return super.required(e).withMutation((t) => t.test({
      message: e || U.required,
      name: "required",
      skipAbsent: !0,
      test: (r) => !!r.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((e) => (e.tests = e.tests.filter((t) => t.OPTIONS.name !== "required"), e));
  }
  length(e, t = A.length) {
    return this.test({
      message: t,
      name: "length",
      exclusive: !0,
      params: {
        length: e
      },
      skipAbsent: !0,
      test(r) {
        return r.length === this.resolve(e);
      }
    });
  }
  min(e, t = A.min) {
    return this.test({
      message: t,
      name: "min",
      exclusive: !0,
      params: {
        min: e
      },
      skipAbsent: !0,
      test(r) {
        return r.length >= this.resolve(e);
      }
    });
  }
  max(e, t = A.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: t,
      params: {
        max: e
      },
      skipAbsent: !0,
      test(r) {
        return r.length <= this.resolve(e);
      }
    });
  }
  matches(e, t) {
    let r = !1, s, a;
    return t && (typeof t == "object" ? {
      excludeEmptyString: r = !1,
      message: s,
      name: a
    } = t : s = t), this.test({
      name: a || "matches",
      message: s || A.matches,
      params: {
        regex: e
      },
      skipAbsent: !0,
      test: (o) => o === "" && r || o.search(e) !== -1
    });
  }
  email(e = A.email) {
    return this.matches(bn, {
      name: "email",
      message: e,
      excludeEmptyString: !0
    });
  }
  url(e = A.url) {
    return this.matches(gn, {
      name: "url",
      message: e,
      excludeEmptyString: !0
    });
  }
  uuid(e = A.uuid) {
    return this.matches(vn, {
      name: "uuid",
      message: e,
      excludeEmptyString: !1
    });
  }
  datetime(e) {
    let t = "", r, s;
    return e && (typeof e == "object" ? {
      message: t = "",
      allowOffset: r = !1,
      precision: s = void 0
    } = e : t = e), this.matches(_n, {
      name: "datetime",
      message: t || A.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: t || A.datetime_offset,
      params: {
        allowOffset: r
      },
      skipAbsent: !0,
      test: (a) => {
        if (!a || r) return !0;
        const o = Ye(a);
        return o ? !!o.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: t || A.datetime_precision,
      params: {
        precision: s
      },
      skipAbsent: !0,
      test: (a) => {
        if (!a || s == null) return !0;
        const o = Ye(a);
        return o ? o.precision === s : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((e) => e === null ? "" : e);
  }
  trim(e = A.trim) {
    return this.transform((t) => t != null ? t.trim() : t).test({
      message: e,
      name: "trim",
      test: wn
    });
  }
  lowercase(e = A.lowercase) {
    return this.transform((t) => Y(t) ? t : t.toLowerCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => Y(t) || t === t.toLowerCase()
    });
  }
  uppercase(e = A.uppercase) {
    return this.transform((t) => Y(t) ? t : t.toUpperCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => Y(t) || t === t.toUpperCase()
    });
  }
}
de.prototype = Yt.prototype;
let Tn = (n) => n != +n;
function Wt() {
  return new qt();
}
class qt extends L {
  constructor() {
    super({
      type: "number",
      check(e) {
        return e instanceof Number && (e = e.valueOf()), typeof e == "number" && !Tn(e);
      }
    }), this.withMutation(() => {
      this.transform((e, t, r) => {
        if (!r.spec.coerce) return e;
        let s = e;
        if (typeof s == "string") {
          if (s = s.replace(/\s/g, ""), s === "") return NaN;
          s = +s;
        }
        return r.isType(s) || s === null ? s : parseFloat(s);
      });
    });
  }
  min(e, t = q.min) {
    return this.test({
      message: t,
      name: "min",
      exclusive: !0,
      params: {
        min: e
      },
      skipAbsent: !0,
      test(r) {
        return r >= this.resolve(e);
      }
    });
  }
  max(e, t = q.max) {
    return this.test({
      message: t,
      name: "max",
      exclusive: !0,
      params: {
        max: e
      },
      skipAbsent: !0,
      test(r) {
        return r <= this.resolve(e);
      }
    });
  }
  lessThan(e, t = q.lessThan) {
    return this.test({
      message: t,
      name: "max",
      exclusive: !0,
      params: {
        less: e
      },
      skipAbsent: !0,
      test(r) {
        return r < this.resolve(e);
      }
    });
  }
  moreThan(e, t = q.moreThan) {
    return this.test({
      message: t,
      name: "min",
      exclusive: !0,
      params: {
        more: e
      },
      skipAbsent: !0,
      test(r) {
        return r > this.resolve(e);
      }
    });
  }
  positive(e = q.positive) {
    return this.moreThan(0, e);
  }
  negative(e = q.negative) {
    return this.lessThan(0, e);
  }
  integer(e = q.integer) {
    return this.test({
      name: "integer",
      message: e,
      skipAbsent: !0,
      test: (t) => Number.isInteger(t)
    });
  }
  truncate() {
    return this.transform((e) => Y(e) ? e : e | 0);
  }
  round(e) {
    var t;
    let r = ["ceil", "floor", "round", "trunc"];
    if (e = ((t = e) == null ? void 0 : t.toLowerCase()) || "round", e === "trunc") return this.truncate();
    if (r.indexOf(e.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + r.join(", "));
    return this.transform((s) => Y(s) ? s : Math[e](s));
  }
}
Wt.prototype = qt.prototype;
let $n = /* @__PURE__ */ new Date(""), On = (n) => Object.prototype.toString.call(n) === "[object Date]";
class Fe extends L {
  constructor() {
    super({
      type: "date",
      check(e) {
        return On(e) && !isNaN(e.getTime());
      }
    }), this.withMutation(() => {
      this.transform((e, t, r) => !r.spec.coerce || r.isType(e) || e === null ? e : (e = mn(e), isNaN(e) ? Fe.INVALID_DATE : new Date(e)));
    });
  }
  prepareParam(e, t) {
    let r;
    if (X.isRef(e))
      r = e;
    else {
      let s = this.cast(e);
      if (!this._typeCheck(s)) throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);
      r = s;
    }
    return r;
  }
  min(e, t = Ve.min) {
    let r = this.prepareParam(e, "min");
    return this.test({
      message: t,
      name: "min",
      exclusive: !0,
      params: {
        min: e
      },
      skipAbsent: !0,
      test(s) {
        return s >= this.resolve(r);
      }
    });
  }
  max(e, t = Ve.max) {
    let r = this.prepareParam(e, "max");
    return this.test({
      message: t,
      name: "max",
      exclusive: !0,
      params: {
        max: e
      },
      skipAbsent: !0,
      test(s) {
        return s <= this.resolve(r);
      }
    });
  }
}
Fe.INVALID_DATE = $n;
Fe.prototype;
function Fn(n, e = []) {
  let t = [], r = /* @__PURE__ */ new Set(), s = new Set(e.map(([o, l]) => `${o}-${l}`));
  function a(o, l) {
    let u = K.split(o)[0];
    r.add(u), s.has(`${l}-${u}`) || t.push([l, u]);
  }
  for (const o of Object.keys(n)) {
    let l = n[o];
    r.add(o), X.isRef(l) && l.isSibling ? a(l.path, o) : Ke(l) && "deps" in l && l.deps.forEach((u) => a(u, o));
  }
  return tn.array(Array.from(r), t).reverse();
}
function jt(n, e) {
  let t = 1 / 0;
  return n.some((r, s) => {
    var a;
    if ((a = e.path) != null && a.includes(r))
      return t = s, !0;
  }), t;
}
function Gt(n) {
  return (e, t) => jt(n, e) - jt(n, t);
}
const kn = (n, e, t) => {
  if (typeof n != "string")
    return n;
  let r = n;
  try {
    r = JSON.parse(n);
  } catch {
  }
  return t.isType(r) ? r : n;
};
function we(n) {
  if ("fields" in n) {
    const e = {};
    for (const [t, r] of Object.entries(n.fields))
      e[t] = we(r);
    return n.setFields(e);
  }
  if (n.type === "array") {
    const e = n.optional();
    return e.innerType && (e.innerType = we(e.innerType)), e;
  }
  return n.type === "tuple" ? n.optional().clone({
    types: n.spec.types.map(we)
  }) : "optional" in n ? n.optional() : n;
}
const jn = (n, e) => {
  const t = [...K.normalizePath(e)];
  if (t.length === 1) return t[0] in n;
  let r = t.pop(), s = K.getter(K.join(t), !0)(n);
  return !!(s && r in s);
};
let Rt = (n) => Object.prototype.toString.call(n) === "[object Object]";
function Ct(n, e) {
  let t = Object.keys(n.fields);
  return Object.keys(e).filter((r) => t.indexOf(r) === -1);
}
const Rn = Gt([]);
function Zt(n) {
  return new Bt(n);
}
class Bt extends L {
  constructor(e) {
    super({
      type: "object",
      check(t) {
        return Rt(t) || typeof t == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Rn, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      e && this.shape(e);
    });
  }
  _cast(e, t = {}) {
    var r;
    let s = super._cast(e, t);
    if (s === void 0) return this.getDefault(t);
    if (!this._typeCheck(s)) return s;
    let a = this.fields, o = (r = t.stripUnknown) != null ? r : this.spec.noUnknown, l = [].concat(this._nodes, Object.keys(s).filter((p) => !this._nodes.includes(p))), u = {}, f = Object.assign({}, t, {
      parent: u,
      __validating: t.__validating || !1
    }), h = !1;
    for (const p of l) {
      let v = a[p], g = p in s;
      if (v) {
        let _, w = s[p];
        f.path = (t.path ? `${t.path}.` : "") + p, v = v.resolve({
          value: w,
          context: t.context,
          parent: u
        });
        let R = v instanceof L ? v.spec : void 0, N = R == null ? void 0 : R.strict;
        if (R != null && R.strip) {
          h = h || p in s;
          continue;
        }
        _ = !t.__validating || !N ? (
          // TODO: use _cast, this is double resolving
          v.cast(s[p], f)
        ) : s[p], _ !== void 0 && (u[p] = _);
      } else g && !o && (u[p] = s[p]);
      (g !== p in u || u[p] !== s[p]) && (h = !0);
    }
    return h ? u : s;
  }
  _validate(e, t = {}, r, s) {
    let {
      from: a = [],
      originalValue: o = e,
      recursive: l = this.spec.recursive
    } = t;
    t.from = [{
      schema: this,
      value: o
    }, ...a], t.__validating = !0, t.originalValue = o, super._validate(e, t, r, (u, f) => {
      if (!l || !Rt(f)) {
        s(u, f);
        return;
      }
      o = o || f;
      let h = [];
      for (let p of this._nodes) {
        let v = this.fields[p];
        !v || X.isRef(v) || h.push(v.asNestedTest({
          options: t,
          key: p,
          parent: f,
          parentPath: t.path,
          originalParent: o
        }));
      }
      this.runTests({
        tests: h,
        value: f,
        originalValue: o,
        options: t
      }, r, (p) => {
        s(p.sort(this._sortErrors).concat(u), f);
      });
    });
  }
  clone(e) {
    const t = super.clone(e);
    return t.fields = Object.assign({}, this.fields), t._nodes = this._nodes, t._excludedEdges = this._excludedEdges, t._sortErrors = this._sortErrors, t;
  }
  concat(e) {
    let t = super.concat(e), r = t.fields;
    for (let [s, a] of Object.entries(this.fields)) {
      const o = r[s];
      r[s] = o === void 0 ? a : o;
    }
    return t.withMutation((s) => (
      // XXX: excludes here is wrong
      s.setFields(r, [...this._excludedEdges, ...e._excludedEdges])
    ));
  }
  _getDefault(e) {
    if ("default" in this.spec)
      return super._getDefault(e);
    if (!this._nodes.length)
      return;
    let t = {};
    return this._nodes.forEach((r) => {
      var s;
      const a = this.fields[r];
      let o = e;
      (s = o) != null && s.value && (o = Object.assign({}, o, {
        parent: o.value,
        value: o.value[r]
      })), t[r] = a && "getDefault" in a ? a.getDefault(o) : void 0;
    }), t;
  }
  setFields(e, t) {
    let r = this.clone();
    return r.fields = e, r._nodes = Fn(e, t), r._sortErrors = Gt(Object.keys(e)), t && (r._excludedEdges = t), r;
  }
  shape(e, t = []) {
    return this.clone().withMutation((r) => {
      let s = r._excludedEdges;
      return t.length && (Array.isArray(t[0]) || (t = [t]), s = [...r._excludedEdges, ...t]), r.setFields(Object.assign(r.fields, e), s);
    });
  }
  partial() {
    const e = {};
    for (const [t, r] of Object.entries(this.fields))
      e[t] = "optional" in r && r.optional instanceof Function ? r.optional() : r;
    return this.setFields(e);
  }
  deepPartial() {
    return we(this);
  }
  pick(e) {
    const t = {};
    for (const r of e)
      this.fields[r] && (t[r] = this.fields[r]);
    return this.setFields(t, this._excludedEdges.filter(([r, s]) => e.includes(r) && e.includes(s)));
  }
  omit(e) {
    const t = [];
    for (const r of Object.keys(this.fields))
      e.includes(r) || t.push(r);
    return this.pick(t);
  }
  from(e, t, r) {
    let s = K.getter(e, !0);
    return this.transform((a) => {
      if (!a) return a;
      let o = a;
      return jn(a, e) && (o = Object.assign({}, a), r || delete o[e], o[t] = s(a)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(kn);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(e) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: e || _e.exact,
      test(t) {
        if (t == null) return !0;
        const r = Ct(this.schema, t);
        return r.length === 0 || this.createError({
          params: {
            properties: r.join(", ")
          }
        });
      }
    });
  }
  stripUnknown() {
    return this.clone({
      noUnknown: !0
    });
  }
  noUnknown(e = !0, t = _e.noUnknown) {
    typeof e != "boolean" && (t = e, e = !0);
    let r = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: t,
      test(s) {
        if (s == null) return !0;
        const a = Ct(this.schema, s);
        return !e || a.length === 0 || this.createError({
          params: {
            unknown: a.join(", ")
          }
        });
      }
    });
    return r.spec.noUnknown = e, r;
  }
  unknown(e = !0, t = _e.noUnknown) {
    return this.noUnknown(!e, t);
  }
  transformKeys(e) {
    return this.transform((t) => {
      if (!t) return t;
      const r = {};
      for (const s of Object.keys(t)) r[e(s)] = t[s];
      return r;
    });
  }
  camelCase() {
    return this.transformKeys(Me.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Me.snakeCase);
  }
  constantCase() {
    return this.transformKeys((e) => Me.snakeCase(e).toUpperCase());
  }
  describe(e) {
    const t = (e ? this.resolve(e) : this).clone(), r = super.describe(e);
    r.fields = {};
    for (const [a, o] of Object.entries(t.fields)) {
      var s;
      let l = e;
      (s = l) != null && s.value && (l = Object.assign({}, l, {
        parent: l.value,
        value: l.value[a]
      })), r.fields[a] = o.describe(l);
    }
    return r;
  }
}
Zt.prototype = Bt.prototype;
const Cn = Zt().shape({
  name: de().max(10, "Name is too long"),
  address: de().max(50, "Address is too long"),
  email: de().matches(
    /^[a-z]+\.[a-z]+@example\.com$/,
    "Email must match avery.sims@example.com format"
  ).email("Invalid email format"),
  phone: de().matches(
    /^\(\d{3}\) \d{3}-\d{4}$/,
    "Phone must match (453) 439-1408 format"
  ).required("Phone number is required"),
  age: Wt().typeError("Age must be a number").min(18, "Age must be between 18 and 90").max(90, "Age must be between 18 and 90")
}), zn = ({ style: n, userCardStyle: e }) => {
  const { data: t, error: r, loading: s } = Fr(kr), [a, o] = W({
    name: "",
    address: "",
    email: "",
    phone: "",
    age: "",
    gender: ""
  }), [l, u] = W({
    name: "",
    address: "",
    email: "",
    phone: "",
    age: "",
    gender: ""
  }), f = [
    {
      key: "name",
      label: "Name",
      placeholder: H.NAME,
      type: "text"
    },
    {
      key: "address",
      label: "Address",
      placeholder: H.ADDRESS,
      type: "text"
    },
    {
      key: "email",
      label: "Email",
      placeholder: H.EMAIL,
      type: "text"
    },
    {
      key: "phone",
      label: "Phone",
      placeholder: H.PHONE_NUMBER,
      type: "text"
    },
    {
      key: "age",
      label: "Age",
      placeholder: H.AGE,
      type: "number"
    }
  ], h = async (g, _) => {
    if (!_)
      u((w) => ({
        ...w,
        [g]: ""
      }));
    else
      try {
        await Cn.validateAt(g, { [g]: _ }), u((w) => ({
          ...w,
          [g]: ""
        }));
      } catch (w) {
        w && u((R) => ({
          ...R,
          [g]: w.message
        }));
      }
    o((w) => ({
      ...w,
      [g]: typeof _ == "number" ? _.toString() : _
    }));
  }, p = (g, _) => {
    o((w) => ({
      ...w,
      gender: g ? _ : ""
    }));
  }, v = t != null && t.results ? Pr(t.results, a) : [];
  return s ? /* @__PURE__ */ m.jsx(k, { variant: "p", children: "Loading data list..." }) : r ? /* @__PURE__ */ m.jsx(k, { variant: "p", children: r.message }) : t ? /* @__PURE__ */ m.jsxs("div", { className: "data-list-container", style: n, children: [
    /* @__PURE__ */ m.jsx(
      k,
      {
        variant: "h1",
        style: {
          fontSize: "48px",
          fontWeight: "bold",
          padding: "0 14px"
        },
        textColor: "#90caf9",
        children: H.FILTER_USER
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { className: "filter-section", style: n, children: [
      f.map(({ key: g, label: _, placeholder: w, type: R }) => /* @__PURE__ */ m.jsx(
        Dr,
        {
          style: { color: "#fff" },
          type: R,
          value: a[g],
          onChange: (N) => h(g, N),
          placeholder: w,
          label: _,
          error: l[g]
        },
        g
      )),
      /* @__PURE__ */ m.jsxs("div", { className: "gender-filter", style: n, children: [
        /* @__PURE__ */ m.jsx(k, { variant: "h3", textColor: "#fff", children: H.FILTER_GENDER }),
        /* @__PURE__ */ m.jsx(
          wt,
          {
            label: "Male",
            checked: a.gender === "male",
            onChange: (g) => p(g, "male")
          }
        ),
        /* @__PURE__ */ m.jsx(
          wt,
          {
            label: "Female",
            checked: a.gender === "female",
            onChange: (g) => p(g, "female")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "data-list", style: n, children: v.length > 0 ? v.map((g, _) => /* @__PURE__ */ m.jsx(Ar, { user: g, style: e }, _)) : /* @__PURE__ */ m.jsx(k, { variant: "p", children: St.NO_USERS_AVAILABLE }) })
  ] }) : /* @__PURE__ */ m.jsx(k, { variant: "p", children: St.NO_DATA });
};
export {
  ye as Box,
  _t as Button,
  wt as Checkbox,
  Dn as Container,
  zn as DataList,
  Nt as Icon,
  Dr as Input,
  Pn as Tab,
  In as TabList,
  Ln as TabPanel,
  Nn as Tabs,
  Mn as Testimonials,
  k as Typography,
  Ar as UserCard
};
