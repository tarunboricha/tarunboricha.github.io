import { c as b, r, j as e, m as t, p as n } from "./index-DVeCKrdg.js";
import { M as v } from "./map-pin-CkI2J4Eo.js";
import { G as w } from "./github-Bd_uL0A6.js";
import { L as N, M as I } from "./mail-NjK3CFQi.js";
import { Link } from "react-router-dom"; // ✅ ADDED

/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MotionLink = t(Link); // ✅ ADDED

const k = b("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);

const T = ({
  words: l,
  loop: c = !0,
  typeSpeed: d = 80,
  deleteSpeed: a = 50,
  delaySpeed: i = 1500
}) => {
  const [s, u] = r.useState("");
  const [p, j] = r.useState(0);
  const [m, h] = r.useState(!1);
  const [x, y] = r.useState(!1);

  const f = r.useCallback(() => {
    const o = l[p];
    x ||
      (m
        ? (u(o.substring(0, s.length - 1)),
          s.length === 0 &&
            (h(!1),
            j(g => (c ? (g + 1) % l.length : Math.min(g + 1, l.length - 1)))))
        : (u(o.substring(0, s.length + 1)),
          s.length === o.length &&
            (y(!0),
            setTimeout(() => {
              y(!1);
              h(!0);
            }, i))));
  }, [s, p, m, x, l, c, i]);

  r.useEffect(() => {
    const o = setTimeout(f, m ? a : d);
    return () => clearTimeout(o);
  }, [f, m, d, a]);

  return { text: s, isTyping: !x };
};

const M = "/assets/developer-avatar-BSws3vwN.png";
const S = "/assets/hero-bg-BLbHmG3T.jpg";

const E = () => {
  const { text: l } = T({
    words: n.roles,
    loop: !0,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 2e3
  });

  const c = () => {
    var a;
    (a = document.querySelector("#contact")) == null ||
      a.scrollIntoView({ behavior: "smooth" });
  };

  const d = () => {
    var a;
    (a = document.querySelector("#about")) == null ||
      a.scrollIntoView({ behavior: "smooth" });
  };

  return e.jsxs("section", {
    id: "home",
    className: "relative min-h-screen flex items-center justify-center overflow-hidden",
    children: [
      /* --- unchanged content above --- */

      e.jsxs(t.div, {
        className:
          "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10",
        children: [
          e.jsx(t.button, {
            onClick: c,
            className: "btn-hero-primary w-full sm:w-auto",
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            children: "Get in Touch"
          }),

          // ✅ FIXED: SPA navigation, no reload
          e.jsx(MotionLink, {
            to: "/resume",
            className: "btn-hero-secondary w-full sm:w-auto text-center",
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            children: "View Resume"
          })
        ]
      }),

      /* --- unchanged content below --- */
    ]
  });
};

export { E as default };