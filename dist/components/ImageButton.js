import { jsxs as B, jsx as e } from "react/jsx-runtime";
import { classes as n } from "../common/react.js";
import { computeBoxProps as S } from "./Box.js";
import { DmIcon as j } from "./DmIcon.js";
import { Icon as D } from "./Icon.js";
import { Image as F } from "./Image.js";
import { Stack as k } from "./Stack.js";
import { Tooltip as P } from "./Tooltip.js";
import '../assets/ImageButton.css';const T = "_horizontal_1ele3_27", q = "_hidden_1ele3_30", E = "_vertical_1ele3_34", M = "_disabled_1ele3_566", R = "_selected_1ele3_571", W = "_ImageButton_1ele3_611", G = "_ImageButton__container_1ele3_620", H = "_ImageButton__image_1ele3_625", J = "_ImageButton__buttons_1ele3_631", K = "_ImageButton__content_1ele3_655", L = "_ImageButton__fluid_1ele3_666", o = {
  horizontal: T,
  hidden: q,
  vertical: E,
  "Color--black": "_Color--black_1ele3_42",
  "Content__Color--black": "_Content__Color--black_1ele3_53",
  "ButtonsContainer__Color--black": "_ButtonsContainer__Color--black_1ele3_61",
  "Color--white": "_Color--white_1ele3_69",
  "Content__Color--white": "_Content__Color--white_1ele3_80",
  "ButtonsContainer__Color--white": "_ButtonsContainer__Color--white_1ele3_88",
  "Color--red": "_Color--red_1ele3_96",
  "Content__Color--red": "_Content__Color--red_1ele3_107",
  "ButtonsContainer__Color--red": "_ButtonsContainer__Color--red_1ele3_115",
  "Color--orange": "_Color--orange_1ele3_123",
  "Content__Color--orange": "_Content__Color--orange_1ele3_134",
  "ButtonsContainer__Color--orange": "_ButtonsContainer__Color--orange_1ele3_142",
  "Color--yellow": "_Color--yellow_1ele3_150",
  "Content__Color--yellow": "_Content__Color--yellow_1ele3_161",
  "ButtonsContainer__Color--yellow": "_ButtonsContainer__Color--yellow_1ele3_169",
  "Color--olive": "_Color--olive_1ele3_177",
  "Content__Color--olive": "_Content__Color--olive_1ele3_188",
  "ButtonsContainer__Color--olive": "_ButtonsContainer__Color--olive_1ele3_196",
  "Color--green": "_Color--green_1ele3_204",
  "Content__Color--green": "_Content__Color--green_1ele3_215",
  "ButtonsContainer__Color--green": "_ButtonsContainer__Color--green_1ele3_223",
  "Color--teal": "_Color--teal_1ele3_231",
  "Content__Color--teal": "_Content__Color--teal_1ele3_242",
  "ButtonsContainer__Color--teal": "_ButtonsContainer__Color--teal_1ele3_250",
  "Color--blue": "_Color--blue_1ele3_258",
  "Content__Color--blue": "_Content__Color--blue_1ele3_269",
  "ButtonsContainer__Color--blue": "_ButtonsContainer__Color--blue_1ele3_277",
  "Color--violet": "_Color--violet_1ele3_285",
  "Content__Color--violet": "_Content__Color--violet_1ele3_296",
  "ButtonsContainer__Color--violet": "_ButtonsContainer__Color--violet_1ele3_304",
  "Color--purple": "_Color--purple_1ele3_312",
  "Content__Color--purple": "_Content__Color--purple_1ele3_323",
  "ButtonsContainer__Color--purple": "_ButtonsContainer__Color--purple_1ele3_331",
  "Color--pink": "_Color--pink_1ele3_339",
  "Content__Color--pink": "_Content__Color--pink_1ele3_350",
  "ButtonsContainer__Color--pink": "_ButtonsContainer__Color--pink_1ele3_358",
  "Color--brown": "_Color--brown_1ele3_366",
  "Content__Color--brown": "_Content__Color--brown_1ele3_377",
  "ButtonsContainer__Color--brown": "_ButtonsContainer__Color--brown_1ele3_385",
  "Color--grey": "_Color--grey_1ele3_393",
  "Content__Color--grey": "_Content__Color--grey_1ele3_404",
  "ButtonsContainer__Color--grey": "_ButtonsContainer__Color--grey_1ele3_412",
  "Color--light-grey": "_Color--light-grey_1ele3_420",
  "Content__Color--light-grey": "_Content__Color--light-grey_1ele3_431",
  "ButtonsContainer__Color--light-grey": "_ButtonsContainer__Color--light-grey_1ele3_439",
  "Color--good": "_Color--good_1ele3_447",
  "Content__Color--good": "_Content__Color--good_1ele3_458",
  "ButtonsContainer__Color--good": "_ButtonsContainer__Color--good_1ele3_466",
  "Color--average": "_Color--average_1ele3_474",
  "Content__Color--average": "_Content__Color--average_1ele3_485",
  "ButtonsContainer__Color--average": "_ButtonsContainer__Color--average_1ele3_493",
  "Color--bad": "_Color--bad_1ele3_501",
  "Content__Color--bad": "_Content__Color--bad_1ele3_512",
  "ButtonsContainer__Color--bad": "_ButtonsContainer__Color--bad_1ele3_520",
  "Color--label": "_Color--label_1ele3_528",
  "Content__Color--label": "_Content__Color--label_1ele3_539",
  "ButtonsContainer__Color--label": "_ButtonsContainer__Color--label_1ele3_547",
  "Color--default": "_Color--default_1ele3_555",
  disabled: M,
  selected: R,
  "Content__Color--default": "_Content__Color--default_1ele3_582",
  "Content--disabled": "_Content--disabled_1ele3_590",
  "Content--selected": "_Content--selected_1ele3_595",
  "ButtonsContainer__Color--default": "_ButtonsContainer__Color--default_1ele3_603",
  ImageButton: W,
  "ImageButton--noAction": "_ImageButton--noAction_1ele3_617",
  ImageButton__container: G,
  ImageButton__image: H,
  ImageButton__buttons: J,
  "ImageButton__buttons--alt": "_ImageButton__buttons--alt_1ele3_639",
  "ImageButton__buttons--noContent": "_ImageButton__buttons--noContent_1ele3_646",
  ImageButton__content: K,
  ImageButton__fluid: L,
  "ImageButton__fluid--info": "_ImageButton__fluid--info_1ele3_676",
  "ImageButton__fluid--title": "_ImageButton__fluid--title_1ele3_685",
  "ImageButton__fluid--title--divider": "_ImageButton__fluid--title--divider_1ele3_689",
  "ImageButton__fluid--content": "_ImageButton__fluid--content_1ele3_692",
  "ImageButton__container--hasButtons": "_ImageButton__container--hasButtons_1ele3_702"
};
function eo(x) {
  const {
    asset: m,
    base64: a,
    buttons: u,
    buttonsAlt: b,
    children: l,
    className: $,
    color: t,
    disabled: C,
    dmFallback: p,
    dmIcon: f,
    dmIconState: h,
    fluid: i,
    imageSize: _ = 64,
    imageSrc: s,
    onClick: d,
    onRightClick: c,
    selected: I,
    title: v,
    tooltip: y,
    tooltipPosition: N,
    ...A
  } = x, w = (r, z) => /* @__PURE__ */ e(k, { height: `${_}px`, width: `${_}px`, children: /* @__PURE__ */ e(k.Item, { grow: !0, textAlign: "center", align: "center", children: /* @__PURE__ */ e(
    D,
    {
      spin: z,
      name: r,
      color: "gray",
      style: { fontSize: `calc(${_}px * 0.75)` }
    }
  ) }) });
  let g = /* @__PURE__ */ B(
    "div",
    {
      className: n([
        o.container,
        u && o.containerWithButtons,
        !d && !c && o.noAction,
        I && o.selected,
        C && o.disabled,
        t && typeof t == "string" ? o["color__" + t] : o.color__default
      ]),
      tabIndex: C ? void 0 : 0,
      onClick: (r) => {
        !C && d && d(r);
      },
      onContextMenu: (r) => {
        r.preventDefault(), !C && c && c(r);
      },
      style: { width: i ? "auto" : `calc(${_}px + 0.5em + 2px)` },
      children: [
        /* @__PURE__ */ e("div", { className: n([o.image]), children: a || m || s ? /* @__PURE__ */ e(
          F,
          {
            className: n([!a && !s && m]),
            src: a ? `data:image/jpeg;base64,${a}` : s,
            height: `${_}px`,
            width: `${_}px`
          }
        ) : f && h ? /* @__PURE__ */ e(
          j,
          {
            icon: f,
            icon_state: h,
            fallback: p || w("spinner", !0),
            height: `${_}px`,
            width: `${_}px`
          }
        ) : w("question", !1) }),
        i ? /* @__PURE__ */ B("div", { className: n([o.fluidInfo]), children: [
          v && /* @__PURE__ */ e(
            "span",
            {
              className: n([
                o.fluidTitle,
                l && o.fluidDivider
              ]),
              children: v
            }
          ),
          l && /* @__PURE__ */ e("span", { className: n([o.fluidContent]), children: l })
        ] }) : l && /* @__PURE__ */ e(
          "span",
          {
            className: n([
              o.content,
              I && o.selectedContent,
              C && o.disabledContent,
              t && typeof t == "string" ? o["colorContent__" + t] : o.colorContent__default
            ]),
            children: l
          }
        )
      ]
    }
  );
  return y && (g = /* @__PURE__ */ e(P, { content: y, position: N, children: g })), /* @__PURE__ */ B(
    "div",
    {
      className: n([i ? o.fluid : o.button, $]),
      ...S(A),
      children: [
        g,
        u && /* @__PURE__ */ e(
          "div",
          {
            className: n([
              o.buttonsContainer,
              b && o.buttonsContainerAlt,
              !l && o.buttonsContainerEmpty,
              i && t && typeof t == "string" ? o["colorButtonsContainer__" + t] : o.colorButtonsContainer__default
            ]),
            style: {
              width: b ? `calc(${_}px + 0.5em)` : "auto"
            },
            children: u
          }
        )
      ]
    }
  );
}
export {
  eo as ImageButton
};
