var Yn = Object.defineProperty;
var qn = (e, t, r) => t in e ? Yn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ze = (e, t, r) => qn(e, typeof t != "symbol" ? t + "" : t, r);
import * as A from "react";
import Se, { forwardRef as Xn, useContext as Qn, Children as Zn, isValidElement as rt, cloneElement as nt } from "react";
import Jn from "react-dom";
var Kr = { exports: {} }, pt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo = Se, to = Symbol.for("react.element"), ro = Symbol.for("react.fragment"), no = Object.prototype.hasOwnProperty, oo = eo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, io = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ur(e, t, r) {
  var n, o = {}, i = null, s = null;
  r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (n in t) no.call(t, n) && !io.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps) for (n in t = e.defaultProps, t) o[n] === void 0 && (o[n] = t[n]);
  return { $$typeof: to, type: e, key: i, ref: s, props: o, _owner: oo.current };
}
pt.Fragment = ro;
pt.jsx = Ur;
pt.jsxs = Ur;
Kr.exports = pt;
var Y = Kr.exports, Dt = {}, vr = Jn;
Dt.createRoot = vr.createRoot, Dt.hydrateRoot = vr.hydrateRoot;
const We = {
  black: "#000",
  white: "#fff"
}, we = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, ke = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, $e = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Ae = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Te = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Fe = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, ao = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function xe(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const Yr = "$$material";
function ct() {
  return ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ct.apply(null, arguments);
}
function qr(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var so = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, co = /* @__PURE__ */ qr(
  function(e) {
    return so.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), lo = !1;
function uo(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function fo(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var po = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !lo : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(fo(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = uo(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), U = "-ms-", lt = "-moz-", O = "-webkit-", Xr = "comm", qt = "rule", Xt = "decl", ho = "@import", Qr = "@keyframes", mo = "@layer", go = Math.abs, ht = String.fromCharCode, yo = Object.assign;
function bo(e, t) {
  return H(e, 0) ^ 45 ? (((t << 2 ^ H(e, 0)) << 2 ^ H(e, 1)) << 2 ^ H(e, 2)) << 2 ^ H(e, 3) : 0;
}
function Zr(e) {
  return e.trim();
}
function So(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function E(e, t, r) {
  return e.replace(t, r);
}
function Wt(e, t) {
  return e.indexOf(t);
}
function H(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ve(e, t, r) {
  return e.slice(t, r);
}
function se(e) {
  return e.length;
}
function Qt(e) {
  return e.length;
}
function Ze(e, t) {
  return t.push(e), e;
}
function vo(e, t) {
  return e.map(t).join("");
}
var mt = 1, Ee = 1, Jr = 0, q = 0, V = 0, Ie = "";
function gt(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: mt, column: Ee, length: s, return: "" };
}
function je(e, t) {
  return yo(gt("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function xo() {
  return V;
}
function Co() {
  return V = q > 0 ? H(Ie, --q) : 0, Ee--, V === 10 && (Ee = 1, mt--), V;
}
function ee() {
  return V = q < Jr ? H(Ie, q++) : 0, Ee++, V === 10 && (Ee = 1, mt++), V;
}
function ue() {
  return H(Ie, q);
}
function ot() {
  return q;
}
function Ke(e, t) {
  return Ve(Ie, e, t);
}
function Ge(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function en(e) {
  return mt = Ee = 1, Jr = se(Ie = e), q = 0, [];
}
function tn(e) {
  return Ie = "", e;
}
function it(e) {
  return Zr(Ke(q - 1, Vt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function wo(e) {
  for (; (V = ue()) && V < 33; )
    ee();
  return Ge(e) > 2 || Ge(V) > 3 ? "" : " ";
}
function ko(e, t) {
  for (; --t && ee() && !(V < 48 || V > 102 || V > 57 && V < 65 || V > 70 && V < 97); )
    ;
  return Ke(e, ot() + (t < 6 && ue() == 32 && ee() == 32));
}
function Vt(e) {
  for (; ee(); )
    switch (V) {
      case e:
        return q;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Vt(V);
        break;
      case 40:
        e === 41 && Vt(e);
        break;
      case 92:
        ee();
        break;
    }
  return q;
}
function $o(e, t) {
  for (; ee() && e + V !== 57; )
    if (e + V === 84 && ue() === 47)
      break;
  return "/*" + Ke(t, q - 1) + "*" + ht(e === 47 ? e : ee());
}
function Ao(e) {
  for (; !Ge(ue()); )
    ee();
  return Ke(e, q);
}
function To(e) {
  return tn(at("", null, null, null, [""], e = en(e), 0, [0], e));
}
function at(e, t, r, n, o, i, s, c, l) {
  for (var f = 0, p = 0, d = s, h = 0, b = 0, m = 0, g = 1, $ = 1, w = 1, P = 0, x = "", y = o, C = i, k = n, v = x; $; )
    switch (m = P, P = ee()) {
      case 40:
        if (m != 108 && H(v, d - 1) == 58) {
          Wt(v += E(it(P), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        v += it(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        v += wo(m);
        break;
      case 92:
        v += ko(ot() - 1, 7);
        continue;
      case 47:
        switch (ue()) {
          case 42:
          case 47:
            Ze(Po($o(ee(), ot()), t, r), l);
            break;
          default:
            v += "/";
        }
        break;
      case 123 * g:
        c[f++] = se(v) * w;
      case 125 * g:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            $ = 0;
          case 59 + p:
            w == -1 && (v = E(v, /\f/g, "")), b > 0 && se(v) - d && Ze(b > 32 ? Cr(v + ";", n, r, d - 1) : Cr(E(v, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            v += ";";
          default:
            if (Ze(k = xr(v, t, r, f, p, o, c, x, y = [], C = [], d), i), P === 123)
              if (p === 0)
                at(v, t, k, k, y, i, d, c, C);
              else
                switch (h === 99 && H(v, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    at(e, k, k, n && Ze(xr(e, k, k, 0, 0, o, c, x, o, y = [], d), C), o, C, d, c, n ? y : C);
                    break;
                  default:
                    at(v, k, k, k, [""], C, 0, c, C);
                }
        }
        f = p = b = 0, g = w = 1, x = v = "", d = s;
        break;
      case 58:
        d = 1 + se(v), b = m;
      default:
        if (g < 1) {
          if (P == 123)
            --g;
          else if (P == 125 && g++ == 0 && Co() == 125)
            continue;
        }
        switch (v += ht(P), P * g) {
          case 38:
            w = p > 0 ? 1 : (v += "\f", -1);
            break;
          case 44:
            c[f++] = (se(v) - 1) * w, w = 1;
            break;
          case 64:
            ue() === 45 && (v += it(ee())), h = ue(), p = d = se(x = v += Ao(ot())), P++;
            break;
          case 45:
            m === 45 && se(v) == 2 && (g = 0);
        }
    }
  return i;
}
function xr(e, t, r, n, o, i, s, c, l, f, p) {
  for (var d = o - 1, h = o === 0 ? i : [""], b = Qt(h), m = 0, g = 0, $ = 0; m < n; ++m)
    for (var w = 0, P = Ve(e, d + 1, d = go(g = s[m])), x = e; w < b; ++w)
      (x = Zr(g > 0 ? h[w] + " " + P : E(P, /&\f/g, h[w]))) && (l[$++] = x);
  return gt(e, t, r, o === 0 ? qt : c, l, f, p);
}
function Po(e, t, r) {
  return gt(e, t, r, Xr, ht(xo()), Ve(e, 2, -2), 0);
}
function Cr(e, t, r, n) {
  return gt(e, t, r, Xt, Ve(e, 0, n), Ve(e, n + 1, -1), n);
}
function Be(e, t) {
  for (var r = "", n = Qt(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Ro(e, t, r, n) {
  switch (e.type) {
    case mo:
      if (e.children.length) break;
    case ho:
    case Xt:
      return e.return = e.return || e.value;
    case Xr:
      return "";
    case Qr:
      return e.return = e.value + "{" + Be(e.children, n) + "}";
    case qt:
      e.value = e.props.join(",");
  }
  return se(r = Be(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Bo(e) {
  var t = Qt(e);
  return function(r, n, o, i) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](r, n, o, i) || "";
    return s;
  };
}
function Oo(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Eo = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = ue(), o === 38 && i === 12 && (r[n] = 1), !Ge(i); )
    ee();
  return Ke(t, q);
}, Io = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Ge(o)) {
      case 0:
        o === 38 && ue() === 12 && (r[n] = 1), t[n] += Eo(q - 1, r, n);
        break;
      case 2:
        t[n] += it(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = ue() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += ht(o);
    }
  while (o = ee());
  return t;
}, Mo = function(t, r) {
  return tn(Io(en(t), r));
}, wr = /* @__PURE__ */ new WeakMap(), _o = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !wr.get(n)) && !o) {
      wr.set(t, !0);
      for (var i = [], s = Mo(r, i), c = n.props, l = 0, f = 0; l < s.length; l++)
        for (var p = 0; p < c.length; p++, f++)
          t.props[f] = i[l] ? s[l].replace(/&\f/g, c[p]) : c[p] + " " + s[l];
    }
  }
}, zo = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function rn(e, t) {
  switch (bo(e, t)) {
    case 5103:
      return O + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return O + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return O + e + lt + e + U + e + e;
    case 6828:
    case 4268:
      return O + e + U + e + e;
    case 6165:
      return O + e + U + "flex-" + e + e;
    case 5187:
      return O + e + E(e, /(\w+).+(:[^]+)/, O + "box-$1$2" + U + "flex-$1$2") + e;
    case 5443:
      return O + e + U + "flex-item-" + E(e, /flex-|-self/, "") + e;
    case 4675:
      return O + e + U + "flex-line-pack" + E(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return O + e + U + E(e, "shrink", "negative") + e;
    case 5292:
      return O + e + U + E(e, "basis", "preferred-size") + e;
    case 6060:
      return O + "box-" + E(e, "-grow", "") + O + e + U + E(e, "grow", "positive") + e;
    case 4554:
      return O + E(e, /([^-])(transform)/g, "$1" + O + "$2") + e;
    case 6187:
      return E(E(E(e, /(zoom-|grab)/, O + "$1"), /(image-set)/, O + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return E(e, /(image-set\([^]*)/, O + "$1$`$1");
    case 4968:
      return E(E(e, /(.+:)(flex-)?(.*)/, O + "box-pack:$3" + U + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + O + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return E(e, /(.+)-inline(.+)/, O + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (se(e) - 1 - t > 6) switch (H(e, t + 1)) {
        case 109:
          if (H(e, t + 4) !== 45) break;
        case 102:
          return E(e, /(.+:)(.+)-([^]+)/, "$1" + O + "$2-$3$1" + lt + (H(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Wt(e, "stretch") ? rn(E(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (H(e, t + 1) !== 115) break;
    case 6444:
      switch (H(e, se(e) - 3 - (~Wt(e, "!important") && 10))) {
        case 107:
          return E(e, ":", ":" + O) + e;
        case 101:
          return E(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + O + (H(e, 14) === 45 ? "inline-" : "") + "box$3$1" + O + "$2$3$1" + U + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (H(e, t + 11)) {
        case 114:
          return O + e + U + E(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return O + e + U + E(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return O + e + U + E(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return O + e + U + e + e;
  }
  return e;
}
var Fo = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Xt:
      t.return = rn(t.value, t.length);
      break;
    case Qr:
      return Be([je(t, {
        value: E(t.value, "@", "@" + O)
      })], o);
    case qt:
      if (t.length) return vo(t.props, function(i) {
        switch (So(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Be([je(t, {
              props: [E(i, /:(read-\w+)/, ":" + lt + "$1")]
            })], o);
          case "::placeholder":
            return Be([je(t, {
              props: [E(i, /:(plac\w+)/, ":" + O + "input-$1")]
            }), je(t, {
              props: [E(i, /:(plac\w+)/, ":" + lt + "$1")]
            }), je(t, {
              props: [E(i, /:(plac\w+)/, U + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, jo = [Fo], Lo = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(g) {
      var $ = g.getAttribute("data-emotion");
      $.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || jo, i = {}, s, c = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(g) {
      for (var $ = g.getAttribute("data-emotion").split(" "), w = 1; w < $.length; w++)
        i[$[w]] = !0;
      c.push(g);
    }
  );
  var l, f = [_o, zo];
  {
    var p, d = [Ro, Oo(function(g) {
      p.insert(g);
    })], h = Bo(f.concat(o, d)), b = function($) {
      return Be(To($), h);
    };
    l = function($, w, P, x) {
      p = P, b($ ? $ + "{" + w.styles + "}" : w.styles), x && (m.inserted[w.name] = !0);
    };
  }
  var m = {
    key: r,
    sheet: new po({
      key: r,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return m.sheet.hydrate(c), m;
}, nn = { exports: {} }, I = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G = typeof Symbol == "function" && Symbol.for, Zt = G ? Symbol.for("react.element") : 60103, Jt = G ? Symbol.for("react.portal") : 60106, yt = G ? Symbol.for("react.fragment") : 60107, bt = G ? Symbol.for("react.strict_mode") : 60108, St = G ? Symbol.for("react.profiler") : 60114, vt = G ? Symbol.for("react.provider") : 60109, xt = G ? Symbol.for("react.context") : 60110, er = G ? Symbol.for("react.async_mode") : 60111, Ct = G ? Symbol.for("react.concurrent_mode") : 60111, wt = G ? Symbol.for("react.forward_ref") : 60112, kt = G ? Symbol.for("react.suspense") : 60113, No = G ? Symbol.for("react.suspense_list") : 60120, $t = G ? Symbol.for("react.memo") : 60115, At = G ? Symbol.for("react.lazy") : 60116, Do = G ? Symbol.for("react.block") : 60121, Wo = G ? Symbol.for("react.fundamental") : 60117, Vo = G ? Symbol.for("react.responder") : 60118, Go = G ? Symbol.for("react.scope") : 60119;
function re(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Zt:
        switch (e = e.type, e) {
          case er:
          case Ct:
          case yt:
          case St:
          case bt:
          case kt:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case xt:
              case wt:
              case At:
              case $t:
              case vt:
                return e;
              default:
                return t;
            }
        }
      case Jt:
        return t;
    }
  }
}
function on(e) {
  return re(e) === Ct;
}
I.AsyncMode = er;
I.ConcurrentMode = Ct;
I.ContextConsumer = xt;
I.ContextProvider = vt;
I.Element = Zt;
I.ForwardRef = wt;
I.Fragment = yt;
I.Lazy = At;
I.Memo = $t;
I.Portal = Jt;
I.Profiler = St;
I.StrictMode = bt;
I.Suspense = kt;
I.isAsyncMode = function(e) {
  return on(e) || re(e) === er;
};
I.isConcurrentMode = on;
I.isContextConsumer = function(e) {
  return re(e) === xt;
};
I.isContextProvider = function(e) {
  return re(e) === vt;
};
I.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zt;
};
I.isForwardRef = function(e) {
  return re(e) === wt;
};
I.isFragment = function(e) {
  return re(e) === yt;
};
I.isLazy = function(e) {
  return re(e) === At;
};
I.isMemo = function(e) {
  return re(e) === $t;
};
I.isPortal = function(e) {
  return re(e) === Jt;
};
I.isProfiler = function(e) {
  return re(e) === St;
};
I.isStrictMode = function(e) {
  return re(e) === bt;
};
I.isSuspense = function(e) {
  return re(e) === kt;
};
I.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === yt || e === Ct || e === St || e === bt || e === kt || e === No || typeof e == "object" && e !== null && (e.$$typeof === At || e.$$typeof === $t || e.$$typeof === vt || e.$$typeof === xt || e.$$typeof === wt || e.$$typeof === Wo || e.$$typeof === Vo || e.$$typeof === Go || e.$$typeof === Do);
};
I.typeOf = re;
nn.exports = I;
var Ho = nn.exports, an = Ho, Ko = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Uo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, sn = {};
sn[an.ForwardRef] = Ko;
sn[an.Memo] = Uo;
var Yo = !0;
function qo(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var cn = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Yo === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Xo = function(t, r, n) {
  cn(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Qo(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Zo = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Jo = !1, ei = /[A-Z]|^ms/g, ti = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ln = function(t) {
  return t.charCodeAt(1) === 45;
}, kr = function(t) {
  return t != null && typeof t != "boolean";
}, Ft = /* @__PURE__ */ qr(function(e) {
  return ln(e) ? e : e.replace(ei, "-$&").toLowerCase();
}), $r = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ti, function(n, o, i) {
          return ce = {
            name: o,
            styles: i,
            next: ce
          }, o;
        });
  }
  return Zo[t] !== 1 && !ln(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, ri = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function He(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return ce = {
          name: o.name,
          styles: o.styles,
          next: ce
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            ce = {
              name: s.name,
              styles: s.styles,
              next: ce
            }, s = s.next;
        var c = i.styles + ";";
        return c;
      }
      return ni(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = ce, f = r(e);
        return ce = l, He(e, t, f);
      }
      break;
    }
  }
  var p = r;
  if (t == null)
    return p;
  var d = t[p];
  return d !== void 0 ? d : p;
}
function ni(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += He(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var c = s;
        t != null && t[c] !== void 0 ? n += i + "{" + t[c] + "}" : kr(c) && (n += Ft(i) + ":" + $r(i, c) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && Jo)
          throw new Error(ri);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var l = 0; l < s.length; l++)
            kr(s[l]) && (n += Ft(i) + ":" + $r(i, s[l]) + ";");
        else {
          var f = He(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Ft(i) + ":" + f + ";";
              break;
            }
            default:
              n += i + "{" + f + "}";
          }
        }
      }
    }
  return n;
}
var Ar = /label:\s*([^\s;{]+)\s*(;|$)/g, ce;
function tr(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  ce = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += He(r, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += He(r, t, e[c]), n) {
      var l = i;
      o += l[c];
    }
  Ar.lastIndex = 0;
  for (var f = "", p; (p = Ar.exec(o)) !== null; )
    f += "-" + p[1];
  var d = Qo(o) + f;
  return {
    name: d,
    styles: o,
    next: ce
  };
}
var oi = function(t) {
  return t();
}, ii = A.useInsertionEffect ? A.useInsertionEffect : !1, ai = ii || oi, un = /* @__PURE__ */ A.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Lo({
    key: "css"
  }) : null
);
un.Provider;
var si = function(t) {
  return /* @__PURE__ */ Xn(function(r, n) {
    var o = Qn(un);
    return t(r, o, n);
  });
}, fn = /* @__PURE__ */ A.createContext({});
function ci() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return tr(t);
}
var rr = function() {
  var t = ci.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, li = co, ui = function(t) {
  return t !== "theme";
}, Tr = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? li : ui;
}, Pr = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, fi = !1, di = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return cn(r, n, o), ai(function() {
    return Xo(r, n, o);
  }), null;
}, pi = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var c = Pr(t, r, n), l = c || Tr(o), f = !l("as");
  return function() {
    var p = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), p[0] == null || p[0].raw === void 0)
      d.push.apply(d, p);
    else {
      d.push(p[0][0]);
      for (var h = p.length, b = 1; b < h; b++)
        d.push(p[b], p[0][b]);
    }
    var m = si(function(g, $, w) {
      var P = f && g.as || o, x = "", y = [], C = g;
      if (g.theme == null) {
        C = {};
        for (var k in g)
          C[k] = g[k];
        C.theme = A.useContext(fn);
      }
      typeof g.className == "string" ? x = qo($.registered, y, g.className) : g.className != null && (x = g.className + " ");
      var v = tr(d.concat(y), $.registered, C);
      x += $.key + "-" + v.name, s !== void 0 && (x += " " + s);
      var z = f && c === void 0 ? Tr(P) : l, F = {};
      for (var a in g)
        f && a === "as" || z(a) && (F[a] = g[a]);
      return F.className = x, w && (F.ref = w), /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement(di, {
        cache: $,
        serialized: v,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ A.createElement(P, F));
    });
    return m.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = o, m.__emotion_styles = d, m.__emotion_forwardProp = c, Object.defineProperty(m, "toString", {
      value: function() {
        return s === void 0 && fi ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), m.withComponent = function(g, $) {
      return e(g, ct({}, r, $, {
        shouldForwardProp: Pr(m, $, !0)
      })).apply(void 0, d);
    }, m;
  };
}, hi = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Gt = pi.bind();
hi.forEach(function(e) {
  Gt[e] = Gt(e);
});
/**
 * @mui/styled-engine v6.1.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function dn(e, t) {
  return Gt(e, t);
}
function mi(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Rr = [];
function Br(e) {
  return Rr[0] = e, tr(Rr);
}
function le(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function pn(e) {
  if (/* @__PURE__ */ A.isValidElement(e) || !le(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = pn(e[r]);
  }), t;
}
function te(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return le(e) && le(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ A.isValidElement(t[o]) ? n[o] = t[o] : le(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && le(e[o]) ? n[o] = te(e[o], t[o], r) : r.clone ? n[o] = le(t[o]) ? pn(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const gi = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function yi(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = gi(t), s = Object.keys(i);
  function c(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function l(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function f(h, b) {
    const m = s.indexOf(b);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(m !== -1 && typeof t[s[m]] == "number" ? t[s[m]] : b) - n / 100}${r})`;
  }
  function p(h) {
    return s.indexOf(h) + 1 < s.length ? f(h, s[s.indexOf(h) + 1]) : c(h);
  }
  function d(h) {
    const b = s.indexOf(h);
    return b === 0 ? c(s[1]) : b === s.length - 1 ? l(s[b]) : f(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: c,
    down: l,
    between: f,
    only: p,
    not: d,
    unit: r,
    ...o
  };
}
function bi(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var s, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((s = n.match(i)) == null ? void 0 : s[1]) || 0) - +(((c = o.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Si(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function vi(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r)
    return null;
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function xi(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function r(i, s) {
    i.up = (...c) => t(e.breakpoints.up(...c), s), i.down = (...c) => t(e.breakpoints.down(...c), s), i.between = (...c) => t(e.breakpoints.between(...c), s), i.only = (...c) => t(e.breakpoints.only(...c), s), i.not = (...c) => {
      const l = t(e.breakpoints.not(...c), s);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Ci = {
  borderRadius: 4
};
function De(e, t) {
  return t ? te(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Tt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Or = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Tt[e]}px)`
}, wi = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Tt[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function he(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Or;
    return t.reduce((s, c, l) => (s[i.up(i.keys[l])] = r(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Or;
    return Object.keys(t).reduce((s, c) => {
      if (Si(i.keys, c)) {
        const l = vi(n.containerQueries ? n : wi, c);
        l && (s[l] = r(t[c], c));
      } else if (Object.keys(i.values || Tt).includes(c)) {
        const l = i.up(c);
        s[l] = r(t[c], c);
      } else {
        const l = c;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return r(t);
}
function ki(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function $i(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Z(e) {
  if (typeof e != "string")
    throw new Error(xe(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Pt(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function ut(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Pt(e, r) || n, t && (o = t(o, n, e)), o;
}
function W(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const c = s[t], l = s.theme, f = Pt(l, n) || {};
    return he(s, c, (d) => {
      let h = ut(f, o, d);
      return d === h && typeof d == "string" && (h = ut(f, o, `${t}${d === "default" ? "" : Z(d)}`, d)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function Ai(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Ti = {
  m: "margin",
  p: "padding"
}, Pi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Er = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ri = Ai((e) => {
  if (e.length > 2)
    if (Er[e])
      e = Er[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Ti[t], o = Pi[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), nr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], or = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...nr, ...or];
function Ue(e, t, r, n) {
  const o = Pt(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), c = o[s];
    return i >= 0 ? c : typeof c == "number" ? -c : `-${c}`;
  } : typeof o == "function" ? o : () => {
  };
}
function ir(e) {
  return Ue(e, "spacing", 8);
}
function Ye(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Bi(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Ye(t, r), n), {});
}
function Oi(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Ri(r), i = Bi(o, n), s = e[r];
  return he(e, s, i);
}
function hn(e, t) {
  const r = ir(e.theme);
  return Object.keys(e).map((n) => Oi(e, t, n, r)).reduce(De, {});
}
function N(e) {
  return hn(e, nr);
}
N.propTypes = {};
N.filterProps = nr;
function D(e) {
  return hn(e, or);
}
D.propTypes = {};
D.filterProps = or;
function mn(e = 8, t = ir({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return r.mui = !0, r;
}
function Rt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? De(o, t[i](n)) : o, {});
  return r.propTypes = {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function oe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ie(e, t) {
  return W({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ei = ie("border", oe), Ii = ie("borderTop", oe), Mi = ie("borderRight", oe), _i = ie("borderBottom", oe), zi = ie("borderLeft", oe), Fi = ie("borderColor"), ji = ie("borderTopColor"), Li = ie("borderRightColor"), Ni = ie("borderBottomColor"), Di = ie("borderLeftColor"), Wi = ie("outline", oe), Vi = ie("outlineColor"), Bt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ue(e.theme, "shape.borderRadius", 4), r = (n) => ({
      borderRadius: Ye(t, n)
    });
    return he(e, e.borderRadius, r);
  }
  return null;
};
Bt.propTypes = {};
Bt.filterProps = ["borderRadius"];
Rt(Ei, Ii, Mi, _i, zi, Fi, ji, Li, Ni, Di, Bt, Wi, Vi);
const Ot = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ue(e.theme, "spacing", 8), r = (n) => ({
      gap: Ye(t, n)
    });
    return he(e, e.gap, r);
  }
  return null;
};
Ot.propTypes = {};
Ot.filterProps = ["gap"];
const Et = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ue(e.theme, "spacing", 8), r = (n) => ({
      columnGap: Ye(t, n)
    });
    return he(e, e.columnGap, r);
  }
  return null;
};
Et.propTypes = {};
Et.filterProps = ["columnGap"];
const It = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ue(e.theme, "spacing", 8), r = (n) => ({
      rowGap: Ye(t, n)
    });
    return he(e, e.rowGap, r);
  }
  return null;
};
It.propTypes = {};
It.filterProps = ["rowGap"];
const Gi = W({
  prop: "gridColumn"
}), Hi = W({
  prop: "gridRow"
}), Ki = W({
  prop: "gridAutoFlow"
}), Ui = W({
  prop: "gridAutoColumns"
}), Yi = W({
  prop: "gridAutoRows"
}), qi = W({
  prop: "gridTemplateColumns"
}), Xi = W({
  prop: "gridTemplateRows"
}), Qi = W({
  prop: "gridTemplateAreas"
}), Zi = W({
  prop: "gridArea"
});
Rt(Ot, Et, It, Gi, Hi, Ki, Ui, Yi, qi, Xi, Qi, Zi);
function Oe(e, t) {
  return t === "grey" ? t : e;
}
const Ji = W({
  prop: "color",
  themeKey: "palette",
  transform: Oe
}), ea = W({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Oe
}), ta = W({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Oe
});
Rt(Ji, ea, ta);
function J(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ra = W({
  prop: "width",
  transform: J
}), ar = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, s, c, l;
      const n = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[r]) || Tt[r];
      return n ? ((l = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: J(r)
      };
    };
    return he(e, e.maxWidth, t);
  }
  return null;
};
ar.filterProps = ["maxWidth"];
const na = W({
  prop: "minWidth",
  transform: J
}), oa = W({
  prop: "height",
  transform: J
}), ia = W({
  prop: "maxHeight",
  transform: J
}), aa = W({
  prop: "minHeight",
  transform: J
});
W({
  prop: "size",
  cssProperty: "width",
  transform: J
});
W({
  prop: "size",
  cssProperty: "height",
  transform: J
});
const sa = W({
  prop: "boxSizing"
});
Rt(ra, ar, na, oa, ia, aa, sa);
const qe = {
  // borders
  border: {
    themeKey: "borders",
    transform: oe
  },
  borderTop: {
    themeKey: "borders",
    transform: oe
  },
  borderRight: {
    themeKey: "borders",
    transform: oe
  },
  borderBottom: {
    themeKey: "borders",
    transform: oe
  },
  borderLeft: {
    themeKey: "borders",
    transform: oe
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: oe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Bt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Oe
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Oe
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Oe
  },
  // spacing
  p: {
    style: D
  },
  pt: {
    style: D
  },
  pr: {
    style: D
  },
  pb: {
    style: D
  },
  pl: {
    style: D
  },
  px: {
    style: D
  },
  py: {
    style: D
  },
  padding: {
    style: D
  },
  paddingTop: {
    style: D
  },
  paddingRight: {
    style: D
  },
  paddingBottom: {
    style: D
  },
  paddingLeft: {
    style: D
  },
  paddingX: {
    style: D
  },
  paddingY: {
    style: D
  },
  paddingInline: {
    style: D
  },
  paddingInlineStart: {
    style: D
  },
  paddingInlineEnd: {
    style: D
  },
  paddingBlock: {
    style: D
  },
  paddingBlockStart: {
    style: D
  },
  paddingBlockEnd: {
    style: D
  },
  m: {
    style: N
  },
  mt: {
    style: N
  },
  mr: {
    style: N
  },
  mb: {
    style: N
  },
  ml: {
    style: N
  },
  mx: {
    style: N
  },
  my: {
    style: N
  },
  margin: {
    style: N
  },
  marginTop: {
    style: N
  },
  marginRight: {
    style: N
  },
  marginBottom: {
    style: N
  },
  marginLeft: {
    style: N
  },
  marginX: {
    style: N
  },
  marginY: {
    style: N
  },
  marginInline: {
    style: N
  },
  marginInlineStart: {
    style: N
  },
  marginInlineEnd: {
    style: N
  },
  marginBlock: {
    style: N
  },
  marginBlockStart: {
    style: N
  },
  marginBlockEnd: {
    style: N
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Ot
  },
  rowGap: {
    style: It
  },
  columnGap: {
    style: Et
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: J
  },
  maxWidth: {
    style: ar
  },
  minWidth: {
    transform: J
  },
  height: {
    transform: J
  },
  maxHeight: {
    transform: J
  },
  minHeight: {
    transform: J
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function ca(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function la(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ua() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, c = i[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: l = r,
      themeKey: f,
      transform: p,
      style: d
    } = c;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const h = Pt(o, f) || {};
    return d ? d(s) : he(s, n, (m) => {
      let g = ut(h, p, m);
      return m === g && typeof m == "string" && (g = ut(h, p, `${r}${m === "default" ? "" : Z(m)}`, m)), l === !1 ? g : {
        [l]: g
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? qe;
    function s(c) {
      let l = c;
      if (typeof c == "function")
        l = c(o);
      else if (typeof c != "object")
        return c;
      if (!l)
        return null;
      const f = ki(o.breakpoints), p = Object.keys(f);
      let d = f;
      return Object.keys(l).forEach((h) => {
        const b = la(l[h], o);
        if (b != null)
          if (typeof b == "object")
            if (i[h])
              d = De(d, e(h, b, o, i));
            else {
              const m = he({
                theme: o
              }, b, (g) => ({
                [h]: g
              }));
              ca(m, b) ? d[h] = t({
                sx: b,
                theme: o
              }) : d = De(d, m);
            }
          else
            d = De(d, e(h, b, o, i));
      }), bi(o, $i(p, d));
    }
    return Array.isArray(n) ? n.map(s) : s(n);
  }
  return t;
}
const Ce = ua();
Ce.filterProps = ["sx"];
function fa(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function sr(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, c = yi(r), l = mn(o);
  let f = te({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...Ci,
      ...i
    }
  }, s);
  return f = xi(f), f.applyStyles = fa, f = t.reduce((p, d) => te(p, d), f), f.unstable_sxConfig = {
    ...qe,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, f.unstable_sx = function(d) {
    return Ce({
      sx: d,
      theme: this
    });
  }, f;
}
function da(e) {
  return Object.keys(e).length === 0;
}
function pa(e = null) {
  const t = A.useContext(fn);
  return !t || da(t) ? e : t;
}
const ha = sr();
function ma(e = ha) {
  return pa(e);
}
const ga = (e) => {
  var n;
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? qe;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function ya(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: o
  } = ga(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...s) => {
    const c = t(...s);
    return le(c) ? {
      ...n,
      ...c
    } : n;
  } : i = {
    ...n,
    ...t
  }, {
    ...o,
    sx: i
  };
}
const Ir = (e) => e, ba = () => {
  let e = Ir;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ir;
    }
  };
}, gn = ba();
function yn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = yn(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Q() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = yn(e)) && (n && (n += " "), n += t);
  return n;
}
function Sa(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, i = dn("div", {
    shouldForwardProp: (c) => c !== "theme" && c !== "sx" && c !== "as"
  })(Ce);
  return /* @__PURE__ */ A.forwardRef(function(l, f) {
    const p = ma(r), {
      className: d,
      component: h = "div",
      ...b
    } = ya(l);
    return /* @__PURE__ */ Y.jsx(i, {
      as: h,
      ref: f,
      className: Q(d, o ? o(n) : n),
      theme: t && p[t] || p,
      ...b
    });
  });
}
const va = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function cr(e, t, r = "Mui") {
  const n = va[t];
  return n ? `${r}-${n}` : `${gn.generate(e)}-${t}`;
}
function Mt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = cr(e, o, r);
  }), n;
}
function bn(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Br(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Br(o.style));
  }), n;
}
const xa = sr();
function jt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ca(e) {
  return e ? (t, r) => r[e] : null;
}
function wa(e, t, r) {
  e.theme = Aa(e.theme) ? r : e.theme[t] || e.theme;
}
function st(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => st(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return Sn(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function Sn(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (typeof s.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(n))
        continue;
    } else
      for (const c in s.props)
        if (e[c] !== s.props[c] && ((o = e.ownerState) == null ? void 0 : o[c]) !== s.props[c])
          continue e;
    typeof s.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(s.style(n))) : r.push(s.style);
  }
  return r;
}
function ka(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = xa,
    rootShouldForwardProp: n = jt,
    slotShouldForwardProp: o = jt
  } = e;
  function i(c) {
    wa(c, t, r);
  }
  return (c, l = {}) => {
    mi(c, (C) => C.filter((k) => k !== Ce));
    const {
      name: f,
      slot: p,
      skipVariantsResolver: d,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: b = Ca(Pa(p)),
      ...m
    } = l, g = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), $ = h || !1;
    let w = jt;
    p === "Root" || p === "root" ? w = n : p ? w = o : Ta(c) && (w = void 0);
    const P = dn(c, {
      shouldForwardProp: w,
      label: $a(),
      ...m
    }), x = (C) => {
      if (typeof C == "function" && C.__emotion_real !== C)
        return function(v) {
          return st(v, C);
        };
      if (le(C)) {
        const k = bn(C);
        return k.variants ? function(z) {
          return st(z, k);
        } : k.style;
      }
      return C;
    }, y = (...C) => {
      const k = [], v = C.map(x), z = [];
      if (k.push(i), f && b && z.push(function(T) {
        var X, me;
        const j = (me = (X = T.theme.components) == null ? void 0 : X[f]) == null ? void 0 : me.styleOverrides;
        if (!j)
          return null;
        const K = {};
        for (const ge in j)
          K[ge] = st(T, j[ge]);
        return b(T, K);
      }), f && !g && z.push(function(T) {
        var K, X;
        const B = T.theme, j = (X = (K = B == null ? void 0 : B.components) == null ? void 0 : K[f]) == null ? void 0 : X.variants;
        return j ? Sn(T, j) : null;
      }), $ || z.push(Ce), Array.isArray(v[0])) {
        const S = v.shift(), T = new Array(k.length).fill(""), B = new Array(z.length).fill("");
        let j;
        j = [...T, ...S, ...B], j.raw = [...T, ...S.raw, ...B], k.unshift(j);
      }
      const F = [...k, ...v, ...z], a = P(...F);
      return c.muiName && (a.muiName = c.muiName), a;
    };
    return P.withConfig && (y.withConfig = P.withConfig), y;
  };
}
function $a(e, t) {
  return void 0;
}
function Aa(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ta(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Pa(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function ft(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], s = t[o];
        if (!s)
          r[o] = i || {};
        else if (!i)
          r[o] = s;
        else {
          r[o] = {
            ...s
          };
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const l = c;
              r[o][l] = ft(i[l], s[l]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
const Ra = typeof window < "u" ? A.useLayoutEffect : A.useEffect;
function Ba(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function lr(e, t = 0, r = 1) {
  return Ba(e, t, r);
}
function Oa(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ye(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ye(Oa(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(xe(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(xe(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Ea = (e) => {
  const t = ye(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Le = (e, t) => {
  try {
    return Ea(e);
  } catch {
    return e;
  }
};
function _t(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function vn(e) {
  e = ye(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (f, p = (f + r / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let c = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), _t({
    type: c,
    values: l
  });
}
function Ht(e) {
  e = ye(e);
  let t = e.type === "hsl" || e.type === "hsla" ? ye(vn(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ia(e, t) {
  const r = Ht(e), n = Ht(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Re(e, t) {
  return e = ye(e), t = lr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, _t(e);
}
function Je(e, t, r) {
  try {
    return Re(e, t);
  } catch {
    return e;
  }
}
function ur(e, t) {
  if (e = ye(e), t = lr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return _t(e);
}
function M(e, t, r) {
  try {
    return ur(e, t);
  } catch {
    return e;
  }
}
function fr(e, t) {
  if (e = ye(e), t = lr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return _t(e);
}
function _(e, t, r) {
  try {
    return fr(e, t);
  } catch {
    return e;
  }
}
function Ma(e, t = 0.15) {
  return Ht(e) > 0.5 ? ur(e, t) : fr(e, t);
}
function et(e, t, r) {
  try {
    return Ma(e, t);
  } catch {
    return e;
  }
}
function _a(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function tt(e) {
  const t = A.useRef(e);
  return Ra(() => {
    t.current = e;
  }), A.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Mr(...e) {
  return A.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      _a(r, t);
    });
  }, e);
}
const _r = {};
function xn(e, t) {
  const r = A.useRef(_r);
  return r.current === _r && (r.current = e(t)), r;
}
const za = [];
function Fa(e) {
  A.useEffect(e, za);
}
class dr {
  constructor() {
    ze(this, "currentId", null);
    ze(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    ze(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new dr();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function ja() {
  const e = xn(dr.create).current;
  return Fa(e.disposeEffect), e;
}
function zr(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function Cn(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let s = "", c = !0;
    for (let l = 0; l < i.length; l += 1) {
      const f = i[l];
      f && (s += (c === !0 ? "" : " ") + t(f), c = !1, r && r[f] && (s += " " + r[f]));
    }
    n[o] = s;
  }
  return n;
}
const La = /* @__PURE__ */ A.createContext(void 0);
function Na(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? ft(o.defaultProps, n) : !o.styleOverrides && !o.variants ? ft(o, n) : n;
}
function Da({
  props: e,
  name: t
}) {
  const r = A.useContext(La);
  return Na({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Fr = {
  theme: void 0
};
function Wa(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Fr.theme = o.theme, i = bn(e(Fr)), t = i, r = o.theme), i;
  };
}
function Va(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const jr = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Ga = (e, t, r) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([c, l]) => {
      (!r || r && !r([...i, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, c], Array.isArray(l) ? [...s, c] : s) : t([...i, c], l, s));
    });
  }
  n(e);
}, Ha = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Lt(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, s = {};
  return Ga(
    e,
    (c, l, f) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(c, l))) {
        const p = `--${r ? `${r}-` : ""}${c.join("-")}`, d = Ha(c, l);
        Object.assign(o, {
          [p]: d
        }), jr(i, c, `var(${p})`, f), jr(s, c, `var(${p}, ${d})`, f);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function Ka(e, t = {}) {
  const {
    getSelector: r = $,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: s,
    defaultColorScheme: c = "light",
    ...l
  } = e, {
    vars: f,
    css: p,
    varsWithDefaults: d
  } = Lt(l, t);
  let h = d;
  const b = {}, {
    [c]: m,
    ...g
  } = i;
  if (Object.entries(g || {}).forEach(([x, y]) => {
    const {
      vars: C,
      css: k,
      varsWithDefaults: v
    } = Lt(y, t);
    h = te(h, v), b[x] = {
      css: k,
      vars: C
    };
  }), m) {
    const {
      css: x,
      vars: y,
      varsWithDefaults: C
    } = Lt(m, t);
    h = te(h, C), b[c] = {
      css: x,
      vars: y
    };
  }
  function $(x, y) {
    var k, v;
    let C = o;
    if (o === "class" && (C = ".%s"), o === "data" && (C = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (C = `[${o}="%s"]`), x) {
      if (C === "media")
        return e.defaultColorScheme === x ? ":root" : {
          [`@media (prefers-color-scheme: ${((v = (k = i[x]) == null ? void 0 : k.palette) == null ? void 0 : v.mode) || x})`]: {
            ":root": y
          }
        };
      if (C)
        return e.defaultColorScheme === x ? `:root, ${C.replace("%s", String(x))}` : C.replace("%s", String(x));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let x = {
        ...f
      };
      return Object.entries(b).forEach(([, {
        vars: y
      }]) => {
        x = te(x, y);
      }), x;
    },
    generateStyleSheets: () => {
      var z, F;
      const x = [], y = e.defaultColorScheme || "light";
      function C(a, S) {
        Object.keys(S).length && x.push(typeof a == "string" ? {
          [a]: {
            ...S
          }
        } : a);
      }
      C(r(void 0, {
        ...p
      }), p);
      const {
        [y]: k,
        ...v
      } = b;
      if (k) {
        const {
          css: a
        } = k, S = (F = (z = i[y]) == null ? void 0 : z.palette) == null ? void 0 : F.mode, T = !n && S ? {
          colorScheme: S,
          ...a
        } : {
          ...a
        };
        C(r(y, {
          ...T
        }), T);
      }
      return Object.entries(v).forEach(([a, {
        css: S
      }]) => {
        var j, K;
        const T = (K = (j = i[a]) == null ? void 0 : j.palette) == null ? void 0 : K.mode, B = !n && T ? {
          colorScheme: T,
          ...S
        } : {
          ...S
        };
        C(r(a, {
          ...B
        }), B);
      }), x;
    }
  };
}
function Ua(e) {
  return function(r) {
    return e === "media" ? `@media (prefers-color-scheme: ${r})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function wn() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: We.white,
      default: We.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Ya = wn();
function kn() {
  return {
    text: {
      primary: We.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: We.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Lr = kn();
function Nr(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = fr(e.main, o) : t === "dark" && (e.dark = ur(e.main, i)));
}
function qa(e = "light") {
  return e === "dark" ? {
    main: $e[200],
    light: $e[50],
    dark: $e[400]
  } : {
    main: $e[700],
    light: $e[400],
    dark: $e[800]
  };
}
function Xa(e = "light") {
  return e === "dark" ? {
    main: ke[200],
    light: ke[50],
    dark: ke[400]
  } : {
    main: ke[500],
    light: ke[300],
    dark: ke[700]
  };
}
function Qa(e = "light") {
  return e === "dark" ? {
    main: we[500],
    light: we[300],
    dark: we[700]
  } : {
    main: we[700],
    light: we[400],
    dark: we[800]
  };
}
function Za(e = "light") {
  return e === "dark" ? {
    main: Ae[400],
    light: Ae[300],
    dark: Ae[700]
  } : {
    main: Ae[700],
    light: Ae[500],
    dark: Ae[900]
  };
}
function Ja(e = "light") {
  return e === "dark" ? {
    main: Te[400],
    light: Te[300],
    dark: Te[700]
  } : {
    main: Te[800],
    light: Te[500],
    dark: Te[900]
  };
}
function es(e = "light") {
  return e === "dark" ? {
    main: Fe[400],
    light: Fe[300],
    dark: Fe[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Fe[500],
    dark: Fe[900]
  };
}
function pr(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || qa(t), s = e.secondary || Xa(t), c = e.error || Qa(t), l = e.info || Za(t), f = e.success || Ja(t), p = e.warning || es(t);
  function d(g) {
    return Ia(g, Lr.text.primary) >= r ? Lr.text.primary : Ya.text.primary;
  }
  const h = ({
    color: g,
    name: $,
    mainShade: w = 500,
    lightShade: P = 300,
    darkShade: x = 700
  }) => {
    if (g = {
      ...g
    }, !g.main && g[w] && (g.main = g[w]), !g.hasOwnProperty("main"))
      throw new Error(xe(11, $ ? ` (${$})` : "", w));
    if (typeof g.main != "string")
      throw new Error(xe(12, $ ? ` (${$})` : "", JSON.stringify(g.main)));
    return Nr(g, "light", P, n), Nr(g, "dark", x, n), g.contrastText || (g.contrastText = d(g.main)), g;
  };
  let b;
  return t === "light" ? b = wn() : t === "dark" && (b = kn()), te({
    // A collection of common colors.
    common: {
      ...We
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: ao,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...b
  }, o);
}
function ts(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function rs(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function ns(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Dr = {
  textTransform: "uppercase"
}, Wr = '"Roboto", "Helvetica", "Arial", sans-serif';
function os(e, t) {
  const {
    fontFamily: r = Wr,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: p,
    ...d
  } = typeof t == "function" ? t(e) : t, h = n / 14, b = p || (($) => `${$ / l * h}rem`), m = ($, w, P, x, y) => ({
    fontFamily: r,
    fontWeight: $,
    fontSize: b(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: P,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Wr ? {
      letterSpacing: `${ns(x / w)}em`
    } : {},
    ...y,
    ...f
  }), g = {
    h1: m(o, 96, 1.167, -1.5),
    h2: m(o, 60, 1.2, -0.5),
    h3: m(i, 48, 1.167, 0),
    h4: m(i, 34, 1.235, 0.25),
    h5: m(i, 24, 1.334, 0),
    h6: m(s, 20, 1.6, 0.15),
    subtitle1: m(i, 16, 1.75, 0.15),
    subtitle2: m(s, 14, 1.57, 0.1),
    body1: m(i, 16, 1.5, 0.15),
    body2: m(i, 14, 1.43, 0.15),
    button: m(s, 14, 1.75, 0.4, Dr),
    caption: m(i, 12, 1.66, 0.4),
    overline: m(i, 12, 2.66, 1, Dr),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return te({
    htmlFontSize: l,
    pxToRem: b,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: c,
    ...g
  }, d, {
    clone: !1
    // No need to clone deep
  });
}
const is = 0.2, as = 0.14, ss = 0.12;
function L(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${is})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${as})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ss})`].join(",");
}
const cs = ["none", L(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), L(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), L(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), L(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), L(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), L(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), L(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), L(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), L(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), L(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), L(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), L(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), L(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), L(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), L(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), L(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), L(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), L(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), L(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), L(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), L(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), L(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), L(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), L(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ls = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, us = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Vr(e) {
  return `${Math.round(e)}ms`;
}
function fs(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function ds(e) {
  const t = {
    ...ls,
    ...e.easing
  }, r = {
    ...us,
    ...e.duration
  };
  return {
    getAutoHeightDuration: fs,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...f
      } = i;
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof s == "string" ? s : Vr(s)} ${c} ${typeof l == "string" ? l : Vr(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const ps = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function hs(e) {
  return le(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function $n(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, c] = o[i];
      !hs(c) || s.startsWith("unstable_") ? delete n[s] : le(c) && (n[s] = {
        ...c
      }, r(n[s]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Kt(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: c = {},
    shape: l,
    ...f
  } = e;
  if (e.vars)
    throw new Error(xe(20));
  const p = pr(i), d = sr(e);
  let h = te(d, {
    mixins: rs(d.breakpoints, n),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: cs.slice(),
    typography: os(p, c),
    transitions: ds(s),
    zIndex: {
      ...ps
    }
  });
  return h = te(h, f), h = t.reduce((b, m) => te(b, m), h), h.unstable_sxConfig = {
    ...qe,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, h.unstable_sx = function(m) {
    return Ce({
      sx: m,
      theme: this
    });
  }, h.toRuntimeSource = $n, h;
}
function ms(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const gs = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = ms(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function An(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Tn(e) {
  return e === "dark" ? gs : [];
}
function ys(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = pr(t);
  return {
    palette: i,
    opacity: {
      ...An(i.mode),
      ...r
    },
    overlays: n || Tn(i.mode),
    ...o
  };
}
function bs(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Ss = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], vs = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Ss(e.cssVarPrefix).forEach((c) => {
        s[c] = r[c], delete r[c];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function xs(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function u(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Ne(e) {
  return !e || !e.startsWith("hsl") ? e : vn(e);
}
function pe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Le(Ne(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Cs(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const ae = (e) => {
  try {
    return e();
  } catch {
  }
}, ws = (e = "mui") => Va(e);
function Nt(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = ys({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...s
  } = Kt({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...An(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Tn(o)
  }, s;
}
function ks(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = bs,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...f
  } = e, p = Object.keys(r)[0], d = n || (r.light && p !== "light" ? "light" : p), h = ws(i), {
    [d]: b,
    light: m,
    dark: g,
    ...$
  } = r, w = {
    ...$
  };
  let P = b;
  if ((d === "dark" && !("dark" in r) || d === "light" && !("light" in r)) && (P = !0), !P)
    throw new Error(xe(21, d));
  const x = Nt(w, P, f, d);
  m && !w.light && Nt(w, m, void 0, "light"), g && !w.dark && Nt(w, g, void 0, "dark");
  let y = {
    defaultColorScheme: d,
    ...x,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: l,
    getCssVar: h,
    colorSchemes: w,
    font: {
      ...ts(x.typography),
      ...x.font
    },
    spacing: Cs(f.spacing)
  };
  Object.keys(y.colorSchemes).forEach((F) => {
    const a = y.colorSchemes[F].palette, S = (T) => {
      const B = T.split("-"), j = B[1], K = B[2];
      return h(T, a[j][K]);
    };
    if (a.mode === "light" && (u(a.common, "background", "#fff"), u(a.common, "onBackground", "#000")), a.mode === "dark" && (u(a.common, "background", "#000"), u(a.common, "onBackground", "#fff")), xs(a, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), a.mode === "light") {
      u(a.Alert, "errorColor", M(a.error.light, 0.6)), u(a.Alert, "infoColor", M(a.info.light, 0.6)), u(a.Alert, "successColor", M(a.success.light, 0.6)), u(a.Alert, "warningColor", M(a.warning.light, 0.6)), u(a.Alert, "errorFilledBg", S("palette-error-main")), u(a.Alert, "infoFilledBg", S("palette-info-main")), u(a.Alert, "successFilledBg", S("palette-success-main")), u(a.Alert, "warningFilledBg", S("palette-warning-main")), u(a.Alert, "errorFilledColor", ae(() => a.getContrastText(a.error.main))), u(a.Alert, "infoFilledColor", ae(() => a.getContrastText(a.info.main))), u(a.Alert, "successFilledColor", ae(() => a.getContrastText(a.success.main))), u(a.Alert, "warningFilledColor", ae(() => a.getContrastText(a.warning.main))), u(a.Alert, "errorStandardBg", _(a.error.light, 0.9)), u(a.Alert, "infoStandardBg", _(a.info.light, 0.9)), u(a.Alert, "successStandardBg", _(a.success.light, 0.9)), u(a.Alert, "warningStandardBg", _(a.warning.light, 0.9)), u(a.Alert, "errorIconColor", S("palette-error-main")), u(a.Alert, "infoIconColor", S("palette-info-main")), u(a.Alert, "successIconColor", S("palette-success-main")), u(a.Alert, "warningIconColor", S("palette-warning-main")), u(a.AppBar, "defaultBg", S("palette-grey-100")), u(a.Avatar, "defaultBg", S("palette-grey-400")), u(a.Button, "inheritContainedBg", S("palette-grey-300")), u(a.Button, "inheritContainedHoverBg", S("palette-grey-A100")), u(a.Chip, "defaultBorder", S("palette-grey-400")), u(a.Chip, "defaultAvatarColor", S("palette-grey-700")), u(a.Chip, "defaultIconColor", S("palette-grey-700")), u(a.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), u(a.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), u(a.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), u(a.LinearProgress, "primaryBg", _(a.primary.main, 0.62)), u(a.LinearProgress, "secondaryBg", _(a.secondary.main, 0.62)), u(a.LinearProgress, "errorBg", _(a.error.main, 0.62)), u(a.LinearProgress, "infoBg", _(a.info.main, 0.62)), u(a.LinearProgress, "successBg", _(a.success.main, 0.62)), u(a.LinearProgress, "warningBg", _(a.warning.main, 0.62)), u(a.Skeleton, "bg", `rgba(${S("palette-text-primaryChannel")} / 0.11)`), u(a.Slider, "primaryTrack", _(a.primary.main, 0.62)), u(a.Slider, "secondaryTrack", _(a.secondary.main, 0.62)), u(a.Slider, "errorTrack", _(a.error.main, 0.62)), u(a.Slider, "infoTrack", _(a.info.main, 0.62)), u(a.Slider, "successTrack", _(a.success.main, 0.62)), u(a.Slider, "warningTrack", _(a.warning.main, 0.62));
      const T = et(a.background.default, 0.8);
      u(a.SnackbarContent, "bg", T), u(a.SnackbarContent, "color", ae(() => a.getContrastText(T))), u(a.SpeedDialAction, "fabHoverBg", et(a.background.paper, 0.15)), u(a.StepConnector, "border", S("palette-grey-400")), u(a.StepContent, "border", S("palette-grey-400")), u(a.Switch, "defaultColor", S("palette-common-white")), u(a.Switch, "defaultDisabledColor", S("palette-grey-100")), u(a.Switch, "primaryDisabledColor", _(a.primary.main, 0.62)), u(a.Switch, "secondaryDisabledColor", _(a.secondary.main, 0.62)), u(a.Switch, "errorDisabledColor", _(a.error.main, 0.62)), u(a.Switch, "infoDisabledColor", _(a.info.main, 0.62)), u(a.Switch, "successDisabledColor", _(a.success.main, 0.62)), u(a.Switch, "warningDisabledColor", _(a.warning.main, 0.62)), u(a.TableCell, "border", _(Je(a.divider, 1), 0.88)), u(a.Tooltip, "bg", Je(a.grey[700], 0.92));
    }
    if (a.mode === "dark") {
      u(a.Alert, "errorColor", _(a.error.light, 0.6)), u(a.Alert, "infoColor", _(a.info.light, 0.6)), u(a.Alert, "successColor", _(a.success.light, 0.6)), u(a.Alert, "warningColor", _(a.warning.light, 0.6)), u(a.Alert, "errorFilledBg", S("palette-error-dark")), u(a.Alert, "infoFilledBg", S("palette-info-dark")), u(a.Alert, "successFilledBg", S("palette-success-dark")), u(a.Alert, "warningFilledBg", S("palette-warning-dark")), u(a.Alert, "errorFilledColor", ae(() => a.getContrastText(a.error.dark))), u(a.Alert, "infoFilledColor", ae(() => a.getContrastText(a.info.dark))), u(a.Alert, "successFilledColor", ae(() => a.getContrastText(a.success.dark))), u(a.Alert, "warningFilledColor", ae(() => a.getContrastText(a.warning.dark))), u(a.Alert, "errorStandardBg", M(a.error.light, 0.9)), u(a.Alert, "infoStandardBg", M(a.info.light, 0.9)), u(a.Alert, "successStandardBg", M(a.success.light, 0.9)), u(a.Alert, "warningStandardBg", M(a.warning.light, 0.9)), u(a.Alert, "errorIconColor", S("palette-error-main")), u(a.Alert, "infoIconColor", S("palette-info-main")), u(a.Alert, "successIconColor", S("palette-success-main")), u(a.Alert, "warningIconColor", S("palette-warning-main")), u(a.AppBar, "defaultBg", S("palette-grey-900")), u(a.AppBar, "darkBg", S("palette-background-paper")), u(a.AppBar, "darkColor", S("palette-text-primary")), u(a.Avatar, "defaultBg", S("palette-grey-600")), u(a.Button, "inheritContainedBg", S("palette-grey-800")), u(a.Button, "inheritContainedHoverBg", S("palette-grey-700")), u(a.Chip, "defaultBorder", S("palette-grey-700")), u(a.Chip, "defaultAvatarColor", S("palette-grey-300")), u(a.Chip, "defaultIconColor", S("palette-grey-300")), u(a.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), u(a.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), u(a.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), u(a.LinearProgress, "primaryBg", M(a.primary.main, 0.5)), u(a.LinearProgress, "secondaryBg", M(a.secondary.main, 0.5)), u(a.LinearProgress, "errorBg", M(a.error.main, 0.5)), u(a.LinearProgress, "infoBg", M(a.info.main, 0.5)), u(a.LinearProgress, "successBg", M(a.success.main, 0.5)), u(a.LinearProgress, "warningBg", M(a.warning.main, 0.5)), u(a.Skeleton, "bg", `rgba(${S("palette-text-primaryChannel")} / 0.13)`), u(a.Slider, "primaryTrack", M(a.primary.main, 0.5)), u(a.Slider, "secondaryTrack", M(a.secondary.main, 0.5)), u(a.Slider, "errorTrack", M(a.error.main, 0.5)), u(a.Slider, "infoTrack", M(a.info.main, 0.5)), u(a.Slider, "successTrack", M(a.success.main, 0.5)), u(a.Slider, "warningTrack", M(a.warning.main, 0.5));
      const T = et(a.background.default, 0.98);
      u(a.SnackbarContent, "bg", T), u(a.SnackbarContent, "color", ae(() => a.getContrastText(T))), u(a.SpeedDialAction, "fabHoverBg", et(a.background.paper, 0.15)), u(a.StepConnector, "border", S("palette-grey-600")), u(a.StepContent, "border", S("palette-grey-600")), u(a.Switch, "defaultColor", S("palette-grey-300")), u(a.Switch, "defaultDisabledColor", S("palette-grey-600")), u(a.Switch, "primaryDisabledColor", M(a.primary.main, 0.55)), u(a.Switch, "secondaryDisabledColor", M(a.secondary.main, 0.55)), u(a.Switch, "errorDisabledColor", M(a.error.main, 0.55)), u(a.Switch, "infoDisabledColor", M(a.info.main, 0.55)), u(a.Switch, "successDisabledColor", M(a.success.main, 0.55)), u(a.Switch, "warningDisabledColor", M(a.warning.main, 0.55)), u(a.TableCell, "border", M(Je(a.divider, 1), 0.68)), u(a.Tooltip, "bg", Je(a.grey[700], 0.92));
    }
    pe(a.background, "default"), pe(a.background, "paper"), pe(a.common, "background"), pe(a.common, "onBackground"), pe(a, "divider"), Object.keys(a).forEach((T) => {
      const B = a[T];
      B && typeof B == "object" && (B.main && u(a[T], "mainChannel", Le(Ne(B.main))), B.light && u(a[T], "lightChannel", Le(Ne(B.light))), B.dark && u(a[T], "darkChannel", Le(Ne(B.dark))), B.contrastText && u(a[T], "contrastTextChannel", Le(Ne(B.contrastText))), T === "text" && (pe(a[T], "primary"), pe(a[T], "secondary")), T === "action" && (B.active && pe(a[T], "active"), B.selected && pe(a[T], "selected")));
    });
  }), y = t.reduce((F, a) => te(F, a), y);
  const C = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: vs(y)
  }, {
    vars: k,
    generateThemeVars: v,
    generateStyleSheets: z
  } = Ka(y, C);
  return y.vars = k, Object.entries(y.colorSchemes[y.defaultColorScheme]).forEach(([F, a]) => {
    y[F] = a;
  }), y.generateThemeVars = v, y.generateStyleSheets = z, y.generateSpacing = function() {
    return mn(f.spacing, ir(this));
  }, y.getColorSchemeSelector = Ua(c), y.spacing = y.generateSpacing(), y.shouldSkipGeneratingVar = s, y.unstable_sxConfig = {
    ...qe,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, y.unstable_sx = function(a) {
    return Ce({
      sx: a,
      theme: this
    });
  }, y.toRuntimeSource = $n, y;
}
function Gr(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: pr({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Pn(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...s
  } = e, c = i || "light", l = o == null ? void 0 : o[c], f = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Kt(e, ...t);
    let p = r;
    "palette" in e || f[c] && (f[c] !== !0 ? p = f[c].palette : c === "dark" && (p = {
      mode: "dark"
    }));
    const d = Kt({
      ...e,
      palette: p
    }, ...t);
    return d.defaultColorScheme = c, d.colorSchemes = f, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: d.palette
    }, Gr(d, "dark", f.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: d.palette
    }, Gr(d, "light", f.light)), d;
  }
  return !r && !("light" in f) && c === "light" && (f.light = !0), ks({
    ...s,
    colorSchemes: f,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const $s = Pn();
function As(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Rn = (e) => As(e) && e !== "classes", Me = ka({
  themeId: Yr,
  defaultTheme: $s,
  rootShouldForwardProp: Rn
}), Ts = Wa;
function hr(e) {
  return Da(e);
}
function Ps(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function Ut(e, t) {
  return Ut = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Ut(e, t);
}
function Rs(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ut(e, t);
}
const Hr = Se.createContext(null);
function Bs(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mr(e, t) {
  var r = function(i) {
    return t && rt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Zn.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Os(e, t) {
  e = e || {}, t = t || {};
  function r(p) {
    return p in t ? t[p] : e[p];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, c = {};
  for (var l in t) {
    if (n[l])
      for (s = 0; s < n[l].length; s++) {
        var f = n[l][s];
        c[n[l][s]] = r(f);
      }
    c[l] = r(l);
  }
  for (s = 0; s < o.length; s++)
    c[o[s]] = r(o[s]);
  return c;
}
function ve(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Es(e, t) {
  return mr(e.children, function(r) {
    return nt(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: ve(r, "appear", e),
      enter: ve(r, "enter", e),
      exit: ve(r, "exit", e)
    });
  });
}
function Is(e, t, r) {
  var n = mr(e.children), o = Os(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (rt(s)) {
      var c = i in t, l = i in n, f = t[i], p = rt(f) && !f.props.in;
      l && (!c || p) ? o[i] = nt(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: ve(s, "exit", e),
        enter: ve(s, "enter", e)
      }) : !l && c && !p ? o[i] = nt(s, {
        in: !1
      }) : l && c && rt(f) && (o[i] = nt(s, {
        onExited: r.bind(null, s),
        in: f.props.in,
        exit: ve(s, "exit", e),
        enter: ve(s, "enter", e)
      }));
    }
  }), o;
}
var Ms = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, _s = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, gr = /* @__PURE__ */ function(e) {
  Rs(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(Bs(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, c = i.handleExited, l = i.firstRender;
    return {
      children: l ? Es(o, c) : Is(o, s, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = mr(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var l = ct({}, c.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, c = Ps(o, ["component", "childFactory"]), l = this.state.contextValue, f = Ms(this.state.children).map(s);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ Se.createElement(Hr.Provider, {
      value: l
    }, f) : /* @__PURE__ */ Se.createElement(Hr.Provider, {
      value: l
    }, /* @__PURE__ */ Se.createElement(i, c, f));
  }, t;
}(Se.Component);
gr.propTypes = {};
gr.defaultProps = _s;
class dt {
  constructor() {
    ze(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new dt();
  }
  static use() {
    const t = xn(dt.create).current, [r, n] = A.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, A.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Fs(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function zs() {
  return dt.use();
}
function Fs() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function js(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: c,
    onExited: l,
    timeout: f
  } = e, [p, d] = A.useState(!1), h = Q(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), b = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, m = Q(r.child, p && r.childLeaving, n && r.childPulsate);
  return !c && !p && d(!0), A.useEffect(() => {
    if (!c && l != null) {
      const g = setTimeout(l, f);
      return () => {
        clearTimeout(g);
      };
    }
  }, [l, c, f]), /* @__PURE__ */ Y.jsx("span", {
    className: h,
    style: b,
    children: /* @__PURE__ */ Y.jsx("span", {
      className: m
    })
  });
}
const ne = Mt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Yt = 550, Ls = 80, Ns = rr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Ds = rr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Ws = rr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Vs = Me("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Gs = Me(js, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${ne.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ns};
    animation-duration: ${Yt}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${ne.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${ne.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ne.childLeaving} {
    opacity: 0;
    animation-name: ${Ds};
    animation-duration: ${Yt}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${ne.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Ws};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Hs = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const n = hr({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s,
    ...c
  } = n, [l, f] = A.useState([]), p = A.useRef(0), d = A.useRef(null);
  A.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [l]);
  const h = A.useRef(!1), b = ja(), m = A.useRef(null), g = A.useRef(null), $ = A.useCallback((y) => {
    const {
      pulsate: C,
      rippleX: k,
      rippleY: v,
      rippleSize: z,
      cb: F
    } = y;
    f((a) => [...a, /* @__PURE__ */ Y.jsx(Gs, {
      classes: {
        ripple: Q(i.ripple, ne.ripple),
        rippleVisible: Q(i.rippleVisible, ne.rippleVisible),
        ripplePulsate: Q(i.ripplePulsate, ne.ripplePulsate),
        child: Q(i.child, ne.child),
        childLeaving: Q(i.childLeaving, ne.childLeaving),
        childPulsate: Q(i.childPulsate, ne.childPulsate)
      },
      timeout: Yt,
      pulsate: C,
      rippleX: k,
      rippleY: v,
      rippleSize: z
    }, p.current)]), p.current += 1, d.current = F;
  }, [i]), w = A.useCallback((y = {}, C = {}, k = () => {
  }) => {
    const {
      pulsate: v = !1,
      center: z = o || C.pulsate,
      fakeElement: F = !1
      // For test purposes
    } = C;
    if ((y == null ? void 0 : y.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (y == null ? void 0 : y.type) === "touchstart" && (h.current = !0);
    const a = F ? null : g.current, S = a ? a.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let T, B, j;
    if (z || y === void 0 || y.clientX === 0 && y.clientY === 0 || !y.clientX && !y.touches)
      T = Math.round(S.width / 2), B = Math.round(S.height / 2);
    else {
      const {
        clientX: K,
        clientY: X
      } = y.touches && y.touches.length > 0 ? y.touches[0] : y;
      T = Math.round(K - S.left), B = Math.round(X - S.top);
    }
    if (z)
      j = Math.sqrt((2 * S.width ** 2 + S.height ** 2) / 3), j % 2 === 0 && (j += 1);
    else {
      const K = Math.max(Math.abs((a ? a.clientWidth : 0) - T), T) * 2 + 2, X = Math.max(Math.abs((a ? a.clientHeight : 0) - B), B) * 2 + 2;
      j = Math.sqrt(K ** 2 + X ** 2);
    }
    y != null && y.touches ? m.current === null && (m.current = () => {
      $({
        pulsate: v,
        rippleX: T,
        rippleY: B,
        rippleSize: j,
        cb: k
      });
    }, b.start(Ls, () => {
      m.current && (m.current(), m.current = null);
    })) : $({
      pulsate: v,
      rippleX: T,
      rippleY: B,
      rippleSize: j,
      cb: k
    });
  }, [o, $, b]), P = A.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), x = A.useCallback((y, C) => {
    if (b.clear(), (y == null ? void 0 : y.type) === "touchend" && m.current) {
      m.current(), m.current = null, b.start(0, () => {
        x(y, C);
      });
      return;
    }
    m.current = null, f((k) => k.length > 0 ? k.slice(1) : k), d.current = C;
  }, [b]);
  return A.useImperativeHandle(r, () => ({
    pulsate: P,
    start: w,
    stop: x
  }), [P, w, x]), /* @__PURE__ */ Y.jsx(Vs, {
    className: Q(ne.root, i.root, s),
    ref: g,
    ...c,
    children: /* @__PURE__ */ Y.jsx(gr, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
function Ks(e) {
  return cr("MuiButtonBase", e);
}
const Us = Mt("MuiButtonBase", ["root", "disabled", "focusVisible"]), Ys = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = Cn({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Ks, o);
  return r && n && (s.root += ` ${n}`), s;
}, qs = Me("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Us.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Xs = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const n = hr({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: c,
    component: l = "button",
    disabled: f = !1,
    disableRipple: p = !1,
    disableTouchRipple: d = !1,
    focusRipple: h = !1,
    focusVisibleClassName: b,
    LinkComponent: m = "a",
    onBlur: g,
    onClick: $,
    onContextMenu: w,
    onDragLeave: P,
    onFocus: x,
    onFocusVisible: y,
    onKeyDown: C,
    onKeyUp: k,
    onMouseDown: v,
    onMouseLeave: z,
    onMouseUp: F,
    onTouchEnd: a,
    onTouchMove: S,
    onTouchStart: T,
    tabIndex: B = 0,
    TouchRippleProps: j,
    touchRippleRef: K,
    type: X,
    ...me
  } = n, ge = A.useRef(null), fe = zs(), On = Mr(fe.ref, K), [be, Xe] = A.useState(!1);
  f && be && Xe(!1), A.useImperativeHandle(o, () => ({
    focusVisible: () => {
      Xe(!0), ge.current.focus();
    }
  }), []);
  const En = fe.shouldMount && !p && !f;
  A.useEffect(() => {
    be && h && !p && fe.pulsate();
  }, [p, h, be, fe]);
  function de(R, br, Un = d) {
    return tt((Sr) => (br && br(Sr), Un || fe[R](Sr), !0));
  }
  const In = de("start", v), Mn = de("stop", w), _n = de("stop", P), zn = de("stop", F), Fn = de("stop", (R) => {
    be && R.preventDefault(), z && z(R);
  }), jn = de("start", T), Ln = de("stop", a), Nn = de("stop", S), Dn = de("stop", (R) => {
    zr(R.target) || Xe(!1), g && g(R);
  }, !1), Wn = tt((R) => {
    ge.current || (ge.current = R.currentTarget), zr(R.target) && (Xe(!0), y && y(R)), x && x(R);
  }), zt = () => {
    const R = ge.current;
    return l && l !== "button" && !(R.tagName === "A" && R.href);
  }, Vn = tt((R) => {
    h && !R.repeat && be && R.key === " " && fe.stop(R, () => {
      fe.start(R);
    }), R.target === R.currentTarget && zt() && R.key === " " && R.preventDefault(), C && C(R), R.target === R.currentTarget && zt() && R.key === "Enter" && !f && (R.preventDefault(), $ && $(R));
  }), Gn = tt((R) => {
    h && R.key === " " && be && !R.defaultPrevented && fe.stop(R, () => {
      fe.pulsate(R);
    }), k && k(R), $ && R.target === R.currentTarget && zt() && R.key === " " && !R.defaultPrevented && $(R);
  });
  let Qe = l;
  Qe === "button" && (me.href || me.to) && (Qe = m);
  const _e = {};
  Qe === "button" ? (_e.type = X === void 0 ? "button" : X, _e.disabled = f) : (!me.href && !me.to && (_e.role = "button"), f && (_e["aria-disabled"] = f));
  const Hn = Mr(r, ge), yr = {
    ...n,
    centerRipple: i,
    component: l,
    disabled: f,
    disableRipple: p,
    disableTouchRipple: d,
    focusRipple: h,
    tabIndex: B,
    focusVisible: be
  }, Kn = Ys(yr);
  return /* @__PURE__ */ Y.jsxs(qs, {
    as: Qe,
    className: Q(Kn.root, c),
    ownerState: yr,
    onBlur: Dn,
    onClick: $,
    onContextMenu: Mn,
    onFocus: Wn,
    onKeyDown: Vn,
    onKeyUp: Gn,
    onMouseDown: In,
    onMouseLeave: Fn,
    onMouseUp: zn,
    onDragLeave: _n,
    onTouchEnd: Ln,
    onTouchMove: Nn,
    onTouchStart: jn,
    ref: Hn,
    tabIndex: f ? -1 : B,
    type: X,
    ..._e,
    ...me,
    children: [s, En ? /* @__PURE__ */ Y.jsx(Hs, {
      ref: On,
      center: i,
      ...j
    }) : null]
  });
});
function Qs(e) {
  return typeof e.main == "string";
}
function Zs(e, t = []) {
  if (!Qs(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Js(e = []) {
  return ([, t]) => t && Zs(t, e);
}
const ec = Mt("MuiBox", ["root"]), tc = Pn(), rc = Sa({
  themeId: Yr,
  defaultTheme: tc,
  defaultClassName: ec.root,
  generateClassName: gn.generate
});
function nc(e) {
  return cr("MuiButton", e);
}
const Pe = Mt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), oc = /* @__PURE__ */ A.createContext({}), ic = /* @__PURE__ */ A.createContext(void 0), ac = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: s
  } = e, c = {
    root: ["root", i, `${i}${Z(t)}`, `size${Z(o)}`, `${i}Size${Z(o)}`, `color${Z(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${Z(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${Z(o)}`]
  }, l = Cn(c, nc, s);
  return {
    ...s,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...l
  };
}, Bn = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], sc = Me(Xs, {
  shouldForwardProp: (e) => Rn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${Z(r.color)}`], t[`size${Z(r.size)}`], t[`${r.variant}Size${Z(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(Ts(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Pe.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${Pe.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Pe.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Pe.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Js()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : Re(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Re(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Re(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Re(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Re(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Pe.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Pe.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }]
  };
})), cc = Me("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${Z(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, ...Bn]
}), lc = Me("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${Z(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, ...Bn]
}), uc = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const n = A.useContext(oc), o = A.useContext(ic), i = ft(n, t), s = hr({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: l = "primary",
    component: f = "button",
    className: p,
    disabled: d = !1,
    disableElevation: h = !1,
    disableFocusRipple: b = !1,
    endIcon: m,
    focusVisibleClassName: g,
    fullWidth: $ = !1,
    size: w = "medium",
    startIcon: P,
    type: x,
    variant: y = "text",
    ...C
  } = s, k = {
    ...s,
    color: l,
    component: f,
    disabled: d,
    disableElevation: h,
    disableFocusRipple: b,
    fullWidth: $,
    size: w,
    type: x,
    variant: y
  }, v = ac(k), z = P && /* @__PURE__ */ Y.jsx(cc, {
    className: v.startIcon,
    ownerState: k,
    children: P
  }), F = m && /* @__PURE__ */ Y.jsx(lc, {
    className: v.endIcon,
    ownerState: k,
    children: m
  }), a = o || "";
  return /* @__PURE__ */ Y.jsxs(sc, {
    ownerState: k,
    className: Q(n.className, v.root, p, a),
    component: f,
    disabled: d,
    focusRipple: !b,
    focusVisibleClassName: Q(v.focusVisible, g),
    ref: r,
    type: x,
    ...C,
    classes: v,
    children: [z, c, F]
  });
});
console.log("App.tsx is loaded");
function fc() {
  return console.log("App component rendered"), /* @__PURE__ */ Y.jsx(
    rc,
    {
      sx: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5"
      },
      children: /* @__PURE__ */ Y.jsx(
        uc,
        {
          variant: "contained",
          color: "error",
          size: "large",
          children: "Click Me pls"
        }
      )
    }
  );
}
function dc(e) {
  const { element: t } = e;
  if (!t)
    throw new Error("Element is required to mount the application");
  const r = Dt.createRoot(t);
  return r.render(
    /* @__PURE__ */ Y.jsx(Se.StrictMode, { children: /* @__PURE__ */ Y.jsx(fc, {}) })
  ), {
    unmount: () => {
      r.unmount();
    }
  };
}
typeof window < "u" && document.getElementById("root") && dc({ element: document.getElementById("root") });
export {
  fc as App,
  dc as init
};
//# sourceMappingURL=vite-repo.es.js.map
