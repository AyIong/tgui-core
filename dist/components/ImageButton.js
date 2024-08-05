import { jsxs as d, jsx as _ } from "react/jsx-runtime";
import { classes as e } from "../common/react.js";
import { computeBoxProps as A } from "./Box.js";
import { DmIcon as D } from "./DmIcon.js";
import { Icon as j } from "./Icon.js";
import { Image as F } from "./Image.js";
import { Stack as y } from "./Stack.js";
import { Tooltip as P } from "./Tooltip.js";
import '../assets/ImageButton.css';const q = "_color__black_z7518_18", M = "_contentColor__black_z7518_29", R = "_buttonsContainerColor__black_z7518_37", T = "_color__white_z7518_45", E = "_contentColor__white_z7518_56", G = "_buttonsContainerColor__white_z7518_64", H = "_color__red_z7518_72", J = "_contentColor__red_z7518_83", K = "_buttonsContainerColor__red_z7518_91", L = "_color__orange_z7518_99", O = "_contentColor__orange_z7518_110", Q = "_buttonsContainerColor__orange_z7518_118", U = "_color__yellow_z7518_126", V = "_contentColor__yellow_z7518_137", W = "_buttonsContainerColor__yellow_z7518_145", X = "_color__olive_z7518_153", Y = "_contentColor__olive_z7518_164", Z = "_buttonsContainerColor__olive_z7518_172", oo = "_color__green_z7518_180", _o = "_contentColor__green_z7518_191", to = "_buttonsContainerColor__green_z7518_199", no = "_color__teal_z7518_207", eo = "_contentColor__teal_z7518_218", lo = "_buttonsContainerColor__teal_z7518_226", ro = "_color__blue_z7518_234", co = "_contentColor__blue_z7518_245", ao = "_buttonsContainerColor__blue_z7518_253", io = "_color__violet_z7518_261", so = "_contentColor__violet_z7518_272", uo = "_buttonsContainerColor__violet_z7518_280", Co = "_color__purple_z7518_288", bo = "_contentColor__purple_z7518_299", go = "_buttonsContainerColor__purple_z7518_307", mo = "_color__pink_z7518_315", zo = "_contentColor__pink_z7518_326", Io = "_buttonsContainerColor__pink_z7518_334", Bo = "_color__brown_z7518_342", po = "_contentColor__brown_z7518_353", fo = "_buttonsContainerColor__brown_z7518_361", ho = "_color__grey_z7518_369", vo = "_contentColor__grey_z7518_380", wo = "_buttonsContainerColor__grey_z7518_388", yo = "_color__good_z7518_423", ko = "_contentColor__good_z7518_434", xo = "_buttonsContainerColor__good_z7518_442", $o = "_color__average_z7518_450", No = "_contentColor__average_z7518_461", So = "_buttonsContainerColor__average_z7518_469", Ao = "_color__bad_z7518_477", Do = "_contentColor__bad_z7518_488", jo = "_buttonsContainerColor__bad_z7518_496", Fo = "_color__label_z7518_504", Po = "_contentColor__label_z7518_515", qo = "_buttonsContainerColor__label_z7518_523", Mo = "_color__default_z7518_531", Ro = "_disabled_z7518_542", To = "_selected_z7518_547", Eo = "_contentColor__default_z7518_558", Go = "_contentDisabled_z7518_566", Ho = "_contentSelected_z7518_571", Jo = "_buttonsContainerColor__default_z7518_579", Ko = "_ImageButton_z7518_587", Lo = "_ImageButton__noAction_z7518_593", Oo = "_ImageButton__container_z7518_596", Qo = "_ImageButton__image_z7518_601", Uo = "_ImageButton__buttons_z7518_607", Vo = "_ImageButton__buttons__alt_z7518_615", Wo = "_ImageButton__buttons__noContent_z7518_622", Xo = "_ImageButton__content_z7518_631", Yo = "_ImageButton__fluid_z7518_642", Zo = "_ImageButton__fluid__info_z7518_652", o_ = "_ImageButton__fluid__title_z7518_661", __ = "_ImageButton__fluid__title__divider_z7518_665", t_ = "_ImageButton__fluid__content_z7518_668", n_ = "_ImageButton__container__hasButtons_z7518_678", o = {
  color__black: q,
  contentColor__black: M,
  buttonsContainerColor__black: R,
  color__white: T,
  contentColor__white: E,
  buttonsContainerColor__white: G,
  color__red: H,
  contentColor__red: J,
  buttonsContainerColor__red: K,
  color__orange: L,
  contentColor__orange: O,
  buttonsContainerColor__orange: Q,
  color__yellow: U,
  contentColor__yellow: V,
  buttonsContainerColor__yellow: W,
  color__olive: X,
  contentColor__olive: Y,
  buttonsContainerColor__olive: Z,
  color__green: oo,
  contentColor__green: _o,
  buttonsContainerColor__green: to,
  color__teal: no,
  contentColor__teal: eo,
  buttonsContainerColor__teal: lo,
  color__blue: ro,
  contentColor__blue: co,
  buttonsContainerColor__blue: ao,
  color__violet: io,
  contentColor__violet: so,
  buttonsContainerColor__violet: uo,
  color__purple: Co,
  contentColor__purple: bo,
  buttonsContainerColor__purple: go,
  color__pink: mo,
  contentColor__pink: zo,
  buttonsContainerColor__pink: Io,
  color__brown: Bo,
  contentColor__brown: po,
  buttonsContainerColor__brown: fo,
  color__grey: ho,
  contentColor__grey: vo,
  buttonsContainerColor__grey: wo,
  "color__light-grey": "_color__light-grey_z7518_396",
  "contentColor__light-grey": "_contentColor__light-grey_z7518_407",
  "buttonsContainerColor__light-grey": "_buttonsContainerColor__light-grey_z7518_415",
  color__good: yo,
  contentColor__good: ko,
  buttonsContainerColor__good: xo,
  color__average: $o,
  contentColor__average: No,
  buttonsContainerColor__average: So,
  color__bad: Ao,
  contentColor__bad: Do,
  buttonsContainerColor__bad: jo,
  color__label: Fo,
  contentColor__label: Po,
  buttonsContainerColor__label: qo,
  color__default: Mo,
  disabled: Ro,
  selected: To,
  contentColor__default: Eo,
  contentDisabled: Go,
  contentSelected: Ho,
  buttonsContainerColor__default: Jo,
  ImageButton: Ko,
  ImageButton__noAction: Lo,
  ImageButton__container: Oo,
  ImageButton__image: Qo,
  ImageButton__buttons: Uo,
  ImageButton__buttons__alt: Vo,
  ImageButton__buttons__noContent: Wo,
  ImageButton__content: Xo,
  ImageButton__fluid: Yo,
  ImageButton__fluid__info: Zo,
  ImageButton__fluid__title: o_,
  ImageButton__fluid__title__divider: __,
  ImageButton__fluid__content: t_,
  ImageButton__container__hasButtons: n_,
  "ImageButton__buttons--alt": "_ImageButton__buttons--alt_z7518_690"
};
function C_(k) {
  const {
    asset: m,
    base64: i,
    buttons: s,
    buttonsAlt: z,
    children: l,
    className: x,
    color: t,
    disabled: c,
    dmFallback: I,
    dmIcon: B,
    dmIconState: p,
    fluid: a,
    imageSize: n = 64,
    imageSrc: u,
    onClick: C,
    onRightClick: b,
    selected: f,
    title: h,
    tooltip: v,
    tooltipPosition: $,
    ...N
  } = k, w = (r, S) => /* @__PURE__ */ _(y, { height: `${n}px`, width: `${n}px`, children: /* @__PURE__ */ _(y.Item, { grow: !0, textAlign: "center", align: "center", children: /* @__PURE__ */ _(
    j,
    {
      spin: S,
      name: r,
      color: "gray",
      style: { fontSize: `calc(${n}px * 0.75)` }
    }
  ) }) });
  let g = /* @__PURE__ */ d(
    "div",
    {
      className: e([
        o.ImageButton__container,
        s && o.ImageButton__hasButtons,
        !C && !b && o.ImageButton__noAction,
        f && o.selected,
        c && o.disabled,
        t && typeof t == "string" ? o["color__" + t] : o.color__default
      ]),
      tabIndex: c ? void 0 : 0,
      onClick: (r) => {
        !c && C && C(r);
      },
      onContextMenu: (r) => {
        r.preventDefault(), !c && b && b(r);
      },
      style: { width: a ? "auto" : `calc(${n}px + 0.5em + 2px)` },
      children: [
        /* @__PURE__ */ _("div", { className: e([o.ImageButton__image]), children: i || m || u ? /* @__PURE__ */ _(
          F,
          {
            className: e([!i && !u && m]),
            src: i ? `data:image/jpeg;base64,${i}` : u,
            height: `${n}px`,
            width: `${n}px`
          }
        ) : B && p ? /* @__PURE__ */ _(
          D,
          {
            icon: B,
            icon_state: p,
            fallback: I || w("spinner", !0),
            height: `${n}px`,
            width: `${n}px`
          }
        ) : w("question", !1) }),
        a ? /* @__PURE__ */ d("div", { className: e([o.ImageButton__fluid__info]), children: [
          h && /* @__PURE__ */ _(
            "span",
            {
              className: e([
                o.ImageButton__fluid__title,
                l && o.ImageButton__fluid__title__divider
              ]),
              children: h
            }
          ),
          l && /* @__PURE__ */ _("span", { className: e([o.ImageButton__fluid__content]), children: l })
        ] }) : l && /* @__PURE__ */ _(
          "span",
          {
            className: e([
              o.ImageButton__content,
              f && o.contentSelected,
              c && o.contentDisabled,
              t && typeof t == "string" ? o["contentColor__" + t] : o.contentColor__default
            ]),
            children: l
          }
        )
      ]
    }
  );
  return v && (g = /* @__PURE__ */ _(P, { content: v, position: $, children: g })), /* @__PURE__ */ d(
    "div",
    {
      className: e([a ? o.ImageButton__fluid : o.ImageButton, x]),
      ...A(N),
      children: [
        g,
        s && /* @__PURE__ */ _(
          "div",
          {
            className: e([
              o.ImageButton__buttons,
              z && o.ImageButton__buttons__alt,
              !l && o.ImageButton__buttons__noContent,
              a && t && typeof t == "string" ? o["buttonsContainerColor__" + t] : a && o.buttonsContainerColor__default
            ]),
            style: {
              width: z ? `calc(${n}px + 0.5em)` : "auto"
            },
            children: s
          }
        )
      ]
    }
  );
}
export {
  C_ as ImageButton
};
