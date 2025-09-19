const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-Zf5gOhMW.js","assets/index-BMOt3AIC.js","assets/index-X4u-sDsZ.css","assets/all-wallets-i8PDYgEC.js","assets/arrow-bottom-circle-BO8O2pb1.js","assets/app-store-g5B-DyKu.js","assets/apple-CEapvsCA.js","assets/arrow-bottom-CCOi2dDU.js","assets/arrow-left-DVsSTWzu.js","assets/arrow-right-s9fYPEc5.js","assets/arrow-top-Bis1KENh.js","assets/bank-0_lnpXjV.js","assets/browser-DyRH_sxr.js","assets/card-MaLHwfbD.js","assets/checkmark-CcpITLJg.js","assets/checkmark-bold-jPKNWAx-.js","assets/chevron-bottom-Cwe3qToN.js","assets/chevron-left-CDK9KuM1.js","assets/chevron-right-1jiTFxvf.js","assets/chevron-top-B16C0blK.js","assets/chrome-store-BosDz-4q.js","assets/clock-Dhlo6aUp.js","assets/close-Duj9mUF-.js","assets/compass-mNinfYzc.js","assets/coinPlaceholder-CfzxKxNx.js","assets/copy-Br4_HpDP.js","assets/cursor-CipbSoMx.js","assets/cursor-transparent-DOrlGbRx.js","assets/desktop-CzOQlJ2m.js","assets/disconnect-CBs_qGVo.js","assets/discord-D5RXRVLe.js","assets/etherscan-BBlbDWXs.js","assets/extension-D3cNx3rk.js","assets/external-link-FQzgkBR0.js","assets/facebook-DGuBALVr.js","assets/farcaster--H21vHjn.js","assets/filters-B0-lttI6.js","assets/github-BLom9IFK.js","assets/google-BGAXDqUX.js","assets/help-circle-DmMA7t9i.js","assets/image-LOGLHMAo.js","assets/id-D2Xgac4v.js","assets/info-circle-DysKbRHz.js","assets/lightbulb-t3Q3IN3A.js","assets/mail-UBeBANpw.js","assets/mobile-D0BSmCWK.js","assets/more-mJT5rg7U.js","assets/network-placeholder-Ca2Owv6L.js","assets/nftPlaceholder-CMT2SkUM.js","assets/off-CGbxxPbi.js","assets/play-store-pZikmmym.js","assets/plus-Dz0v0An1.js","assets/qr-code-CEoAQCbG.js","assets/recycle-horizontal-DcKInp0V.js","assets/refresh-BdHuD57Y.js","assets/search-r7sTg-hm.js","assets/send-ByFwyI72.js","assets/swapHorizontal-Bf4wU8YS.js","assets/swapHorizontalMedium-B-AZ6B_T.js","assets/swapHorizontalBold-D_Zqw0SE.js","assets/swapHorizontalRoundedBold-C2p1RuwN.js","assets/swapVertical-OgoE5LGg.js","assets/telegram-AcqBI90t.js","assets/three-dots-D27nflTR.js","assets/twitch-CEzrqKC3.js","assets/x-BnW6Slu2.js","assets/twitterIcon-_vpiwQsf.js","assets/verify-B7FD3uBG.js","assets/verify-filled-CkeA-a0C.js","assets/wallet-TuK5IMvH.js","assets/walletconnect-B8a4RH5t.js","assets/wallet-placeholder-5F4NKo1v.js","assets/warning-circle-DNXsb2zh.js","assets/info-Cwj73Eao.js","assets/exclamation-triangle-CYyiG78w.js","assets/reown-logo-D7cyQkBv.js"])))=>i.map(i=>d[i]);
import { a as i$1, V as n$1, c as i$2, x, X as e, Z as f, $ as T, a0 as i$3, _ as __vitePreload, a1 as e$1 } from "./index-BMOt3AIC.js";
import { r as resetStyles, c as colorStyles, e as elementStyles } from "./core-OBxYEZDK.js";
const UiHelperUtil = {
  getSpacingStyles(spacing, index) {
    if (Array.isArray(spacing)) {
      return spacing[index] ? `var(--wui-spacing-${spacing[index]})` : void 0;
    } else if (typeof spacing === "string") {
      return `var(--wui-spacing-${spacing})`;
    }
    return void 0;
  },
  getFormattedDate(date) {
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(date);
  },
  getHostName(url) {
    try {
      const newUrl = new URL(url);
      return newUrl.hostname;
    } catch (error) {
      return "";
    }
  },
  getTruncateString({ string, charsStart, charsEnd, truncate }) {
    if (string.length <= charsStart + charsEnd) {
      return string;
    }
    if (truncate === "end") {
      return `${string.substring(0, charsStart)}...`;
    } else if (truncate === "start") {
      return `...${string.substring(string.length - charsEnd)}`;
    }
    return `${string.substring(0, Math.floor(charsStart))}...${string.substring(string.length - Math.floor(charsEnd))}`;
  },
  generateAvatarColors(address) {
    const hash = address.toLowerCase().replace(/^0x/iu, "").replace(/[^a-f0-9]/gu, "");
    const baseColor = hash.substring(0, 6).padEnd(6, "0");
    const rgbColor = this.hexToRgb(baseColor);
    const masterBorderRadius = getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master");
    const radius = Number(masterBorderRadius?.replace("px", ""));
    const edge = 100 - 3 * radius;
    const gradientCircle = `${edge}% ${edge}% at 65% 40%`;
    const colors = [];
    for (let i2 = 0; i2 < 5; i2 += 1) {
      const tintedColor = this.tintColor(rgbColor, 0.15 * i2);
      colors.push(`rgb(${tintedColor[0]}, ${tintedColor[1]}, ${tintedColor[2]})`);
    }
    return `
    --local-color-1: ${colors[0]};
    --local-color-2: ${colors[1]};
    --local-color-3: ${colors[2]};
    --local-color-4: ${colors[3]};
    --local-color-5: ${colors[4]};
    --local-radial-circle: ${gradientCircle}
   `;
  },
  hexToRgb(hex) {
    const bigint = parseInt(hex, 16);
    const r = bigint >> 16 & 255;
    const g = bigint >> 8 & 255;
    const b = bigint & 255;
    return [r, g, b];
  },
  tintColor(rgb, tint) {
    const [r, g, b] = rgb;
    const tintedR = Math.round(r + (255 - r) * tint);
    const tintedG = Math.round(g + (255 - g) * tint);
    const tintedB = Math.round(b + (255 - b) * tint);
    return [tintedR, tintedG, tintedB];
  },
  isNumber(character) {
    const regex = {
      number: /^[0-9]+$/u
    };
    return regex.number.test(character);
  },
  getColorTheme(theme) {
    if (theme) {
      return theme;
    } else if (typeof window !== "undefined" && window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)")?.matches) {
        return "dark";
      }
      return "light";
    }
    return "dark";
  },
  splitBalance(input) {
    const parts = input.split(".");
    if (parts.length === 2) {
      return [parts[0], parts[1]];
    }
    return ["0", "00"];
  },
  roundNumber(number, threshold, fixed) {
    const roundedNumber = number.toString().length >= threshold ? Number(number).toFixed(fixed) : number;
    return roundedNumber;
  },
  formatNumberToLocalString(value, decimals = 2) {
    if (value === void 0) {
      return "0.00";
    }
    if (typeof value === "number") {
      return value.toLocaleString("en-US", {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals
      });
    }
    return parseFloat(value).toLocaleString("en-US", {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals
    });
  }
};
function standardCustomElement(tagName, descriptor) {
  const { kind, elements } = descriptor;
  return {
    kind,
    elements,
    finisher(clazz) {
      if (!customElements.get(tagName)) {
        customElements.define(tagName, clazz);
      }
    }
  };
}
function legacyCustomElement(tagName, clazz) {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, clazz);
  }
  return clazz;
}
function customElement(tagName) {
  return function create(classOrDescriptor) {
    return typeof classOrDescriptor === "function" ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
  };
}
const styles$6 = i$1`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;
var __decorate$6 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
  return c2 > 3 && r && Object.defineProperty(target, key, r), r;
};
let WuiFlex = class WuiFlex2 extends i$2 {
  render() {
    this.style.cssText = `
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 3)};
    `;
    return x`<slot></slot>`;
  }
};
WuiFlex.styles = [resetStyles, styles$6];
__decorate$6([
  n$1()
], WuiFlex.prototype, "flexDirection", void 0);
__decorate$6([
  n$1()
], WuiFlex.prototype, "flexWrap", void 0);
__decorate$6([
  n$1()
], WuiFlex.prototype, "flexBasis", void 0);
__decorate$6([
  n$1()
], WuiFlex.prototype, "flexGrow", void 0);
__decorate$6([
  n$1()
], WuiFlex.prototype, "flexShrink", void 0);
__decorate$6([
  n$1()
], WuiFlex.prototype, "alignItems", void 0);
__decorate$6([
  n$1()
], WuiFlex.prototype, "justifyContent", void 0);
__decorate$6([
  n$1()
], WuiFlex.prototype, "columnGap", void 0);
__decorate$6([
  n$1()
], WuiFlex.prototype, "rowGap", void 0);
__decorate$6([
  n$1()
], WuiFlex.prototype, "gap", void 0);
__decorate$6([
  n$1()
], WuiFlex.prototype, "padding", void 0);
__decorate$6([
  n$1()
], WuiFlex.prototype, "margin", void 0);
WuiFlex = __decorate$6([
  customElement("wui-flex")
], WuiFlex);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class s {
  constructor(t) {
    this.G = t;
  }
  disconnect() {
    this.G = void 0;
  }
  reconnect(t) {
    this.G = t;
  }
  deref() {
    return this.G;
  }
}
class i {
  constructor() {
    this.Y = void 0, this.Z = void 0;
  }
  get() {
    return this.Y;
  }
  pause() {
    this.Y ?? (this.Y = new Promise(((t) => this.Z = t)));
  }
  resume() {
    this.Z?.(), this.Y = this.Z = void 0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n = (t) => !i$3(t) && "function" == typeof t.then, h = 1073741823;
class c extends f {
  constructor() {
    super(...arguments), this._$Cwt = h, this._$Cbt = [], this._$CK = new s(this), this._$CX = new i();
  }
  render(...s2) {
    return s2.find(((t) => !n(t))) ?? T;
  }
  update(s2, i2) {
    const e2 = this._$Cbt;
    let r = e2.length;
    this._$Cbt = i2;
    const o = this._$CK, c2 = this._$CX;
    this.isConnected || this.disconnected();
    for (let t = 0; t < i2.length && !(t > this._$Cwt); t++) {
      const s3 = i2[t];
      if (!n(s3)) return this._$Cwt = t, s3;
      t < r && s3 === e2[t] || (this._$Cwt = h, r = 0, Promise.resolve(s3).then((async (t2) => {
        for (; c2.get(); ) await c2.get();
        const i3 = o.deref();
        if (void 0 !== i3) {
          const e3 = i3._$Cbt.indexOf(s3);
          e3 > -1 && e3 < i3._$Cwt && (i3._$Cwt = e3, i3.setValue(t2));
        }
      })));
    }
    return T;
  }
  disconnected() {
    this._$CK.disconnect(), this._$CX.pause();
  }
  reconnected() {
    this._$CK.reconnect(this), this._$CX.resume();
  }
}
const m = e(c);
class CacheUtil {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
  }
  set(key, value) {
    this.cache.set(key, value);
  }
  get(key) {
    return this.cache.get(key);
  }
  has(key) {
    return this.cache.has(key);
  }
  delete(key) {
    this.cache.delete(key);
  }
  clear() {
    this.cache.clear();
  }
}
const globalSvgCache = new CacheUtil();
const styles$5 = i$1`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;
var __decorate$5 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r = c2 < 3 ? target : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
  return c2 > 3 && r && Object.defineProperty(target, key, r), r;
};
const ICONS = {
  add: async () => (await __vitePreload(async () => {
    const { addSvg } = await import("./add-Zf5gOhMW.js");
    return { addSvg };
  }, true ? __vite__mapDeps([0,1,2]) : void 0)).addSvg,
  allWallets: async () => (await __vitePreload(async () => {
    const { allWalletsSvg } = await import("./all-wallets-i8PDYgEC.js");
    return { allWalletsSvg };
  }, true ? __vite__mapDeps([3,1,2]) : void 0)).allWalletsSvg,
  arrowBottomCircle: async () => (await __vitePreload(async () => {
    const { arrowBottomCircleSvg } = await import("./arrow-bottom-circle-BO8O2pb1.js");
    return { arrowBottomCircleSvg };
  }, true ? __vite__mapDeps([4,1,2]) : void 0)).arrowBottomCircleSvg,
  appStore: async () => (await __vitePreload(async () => {
    const { appStoreSvg } = await import("./app-store-g5B-DyKu.js");
    return { appStoreSvg };
  }, true ? __vite__mapDeps([5,1,2]) : void 0)).appStoreSvg,
  apple: async () => (await __vitePreload(async () => {
    const { appleSvg } = await import("./apple-CEapvsCA.js");
    return { appleSvg };
  }, true ? __vite__mapDeps([6,1,2]) : void 0)).appleSvg,
  arrowBottom: async () => (await __vitePreload(async () => {
    const { arrowBottomSvg } = await import("./arrow-bottom-CCOi2dDU.js");
    return { arrowBottomSvg };
  }, true ? __vite__mapDeps([7,1,2]) : void 0)).arrowBottomSvg,
  arrowLeft: async () => (await __vitePreload(async () => {
    const { arrowLeftSvg } = await import("./arrow-left-DVsSTWzu.js");
    return { arrowLeftSvg };
  }, true ? __vite__mapDeps([8,1,2]) : void 0)).arrowLeftSvg,
  arrowRight: async () => (await __vitePreload(async () => {
    const { arrowRightSvg } = await import("./arrow-right-s9fYPEc5.js");
    return { arrowRightSvg };
  }, true ? __vite__mapDeps([9,1,2]) : void 0)).arrowRightSvg,
  arrowTop: async () => (await __vitePreload(async () => {
    const { arrowTopSvg } = await import("./arrow-top-Bis1KENh.js");
    return { arrowTopSvg };
  }, true ? __vite__mapDeps([10,1,2]) : void 0)).arrowTopSvg,
  bank: async () => (await __vitePreload(async () => {
    const { bankSvg } = await import("./bank-0_lnpXjV.js");
    return { bankSvg };
  }, true ? __vite__mapDeps([11,1,2]) : void 0)).bankSvg,
  browser: async () => (await __vitePreload(async () => {
    const { browserSvg } = await import("./browser-DyRH_sxr.js");
    return { browserSvg };
  }, true ? __vite__mapDeps([12,1,2]) : void 0)).browserSvg,
  card: async () => (await __vitePreload(async () => {
    const { cardSvg } = await import("./card-MaLHwfbD.js");
    return { cardSvg };
  }, true ? __vite__mapDeps([13,1,2]) : void 0)).cardSvg,
  checkmark: async () => (await __vitePreload(async () => {
    const { checkmarkSvg } = await import("./checkmark-CcpITLJg.js");
    return { checkmarkSvg };
  }, true ? __vite__mapDeps([14,1,2]) : void 0)).checkmarkSvg,
  checkmarkBold: async () => (await __vitePreload(async () => {
    const { checkmarkBoldSvg } = await import("./checkmark-bold-jPKNWAx-.js");
    return { checkmarkBoldSvg };
  }, true ? __vite__mapDeps([15,1,2]) : void 0)).checkmarkBoldSvg,
  chevronBottom: async () => (await __vitePreload(async () => {
    const { chevronBottomSvg } = await import("./chevron-bottom-Cwe3qToN.js");
    return { chevronBottomSvg };
  }, true ? __vite__mapDeps([16,1,2]) : void 0)).chevronBottomSvg,
  chevronLeft: async () => (await __vitePreload(async () => {
    const { chevronLeftSvg } = await import("./chevron-left-CDK9KuM1.js");
    return { chevronLeftSvg };
  }, true ? __vite__mapDeps([17,1,2]) : void 0)).chevronLeftSvg,
  chevronRight: async () => (await __vitePreload(async () => {
    const { chevronRightSvg } = await import("./chevron-right-1jiTFxvf.js");
    return { chevronRightSvg };
  }, true ? __vite__mapDeps([18,1,2]) : void 0)).chevronRightSvg,
  chevronTop: async () => (await __vitePreload(async () => {
    const { chevronTopSvg } = await import("./chevron-top-B16C0blK.js");
    return { chevronTopSvg };
  }, true ? __vite__mapDeps([19,1,2]) : void 0)).chevronTopSvg,
  chromeStore: async () => (await __vitePreload(async () => {
    const { chromeStoreSvg } = await import("./chrome-store-BosDz-4q.js");
    return { chromeStoreSvg };
  }, true ? __vite__mapDeps([20,1,2]) : void 0)).chromeStoreSvg,
  clock: async () => (await __vitePreload(async () => {
    const { clockSvg } = await import("./clock-Dhlo6aUp.js");
    return { clockSvg };
  }, true ? __vite__mapDeps([21,1,2]) : void 0)).clockSvg,
  close: async () => (await __vitePreload(async () => {
    const { closeSvg } = await import("./close-Duj9mUF-.js");
    return { closeSvg };
  }, true ? __vite__mapDeps([22,1,2]) : void 0)).closeSvg,
  compass: async () => (await __vitePreload(async () => {
    const { compassSvg } = await import("./compass-mNinfYzc.js");
    return { compassSvg };
  }, true ? __vite__mapDeps([23,1,2]) : void 0)).compassSvg,
  coinPlaceholder: async () => (await __vitePreload(async () => {
    const { coinPlaceholderSvg } = await import("./coinPlaceholder-CfzxKxNx.js");
    return { coinPlaceholderSvg };
  }, true ? __vite__mapDeps([24,1,2]) : void 0)).coinPlaceholderSvg,
  copy: async () => (await __vitePreload(async () => {
    const { copySvg } = await import("./copy-Br4_HpDP.js");
    return { copySvg };
  }, true ? __vite__mapDeps([25,1,2]) : void 0)).copySvg,
  cursor: async () => (await __vitePreload(async () => {
    const { cursorSvg } = await import("./cursor-CipbSoMx.js");
    return { cursorSvg };
  }, true ? __vite__mapDeps([26,1,2]) : void 0)).cursorSvg,
  cursorTransparent: async () => (await __vitePreload(async () => {
    const { cursorTransparentSvg } = await import("./cursor-transparent-DOrlGbRx.js");
    return { cursorTransparentSvg };
  }, true ? __vite__mapDeps([27,1,2]) : void 0)).cursorTransparentSvg,
  desktop: async () => (await __vitePreload(async () => {
    const { desktopSvg } = await import("./desktop-CzOQlJ2m.js");
    return { desktopSvg };
  }, true ? __vite__mapDeps([28,1,2]) : void 0)).desktopSvg,
  disconnect: async () => (await __vitePreload(async () => {
    const { disconnectSvg } = await import("./disconnect-CBs_qGVo.js");
    return { disconnectSvg };
  }, true ? __vite__mapDeps([29,1,2]) : void 0)).disconnectSvg,
  discord: async () => (await __vitePreload(async () => {
    const { discordSvg } = await import("./discord-D5RXRVLe.js");
    return { discordSvg };
  }, true ? __vite__mapDeps([30,1,2]) : void 0)).discordSvg,
  etherscan: async () => (await __vitePreload(async () => {
    const { etherscanSvg } = await import("./etherscan-BBlbDWXs.js");
    return { etherscanSvg };
  }, true ? __vite__mapDeps([31,1,2]) : void 0)).etherscanSvg,
  extension: async () => (await __vitePreload(async () => {
    const { extensionSvg } = await import("./extension-D3cNx3rk.js");
    return { extensionSvg };
  }, true ? __vite__mapDeps([32,1,2]) : void 0)).extensionSvg,
  externalLink: async () => (await __vitePreload(async () => {
    const { externalLinkSvg } = await import("./external-link-FQzgkBR0.js");
    return { externalLinkSvg };
  }, true ? __vite__mapDeps([33,1,2]) : void 0)).externalLinkSvg,
  facebook: async () => (await __vitePreload(async () => {
    const { facebookSvg } = await import("./facebook-DGuBALVr.js");
    return { facebookSvg };
  }, true ? __vite__mapDeps([34,1,2]) : void 0)).facebookSvg,
  farcaster: async () => (await __vitePreload(async () => {
    const { farcasterSvg } = await import("./farcaster--H21vHjn.js");
    return { farcasterSvg };
  }, true ? __vite__mapDeps([35,1,2]) : void 0)).farcasterSvg,
  filters: async () => (await __vitePreload(async () => {
    const { filtersSvg } = await import("./filters-B0-lttI6.js");
    return { filtersSvg };
  }, true ? __vite__mapDeps([36,1,2]) : void 0)).filtersSvg,
  github: async () => (await __vitePreload(async () => {
    const { githubSvg } = await import("./github-BLom9IFK.js");
    return { githubSvg };
  }, true ? __vite__mapDeps([37,1,2]) : void 0)).githubSvg,
  google: async () => (await __vitePreload(async () => {
    const { googleSvg } = await import("./google-BGAXDqUX.js");
    return { googleSvg };
  }, true ? __vite__mapDeps([38,1,2]) : void 0)).googleSvg,
  helpCircle: async () => (await __vitePreload(async () => {
    const { helpCircleSvg } = await import("./help-circle-DmMA7t9i.js");
    return { helpCircleSvg };
  }, true ? __vite__mapDeps([39,1,2]) : void 0)).helpCircleSvg,
  image: async () => (await __vitePreload(async () => {
    const { imageSvg } = await import("./image-LOGLHMAo.js");
    return { imageSvg };
  }, true ? __vite__mapDeps([40,1,2]) : void 0)).imageSvg,
  id: async () => (await __vitePreload(async () => {
    const { idSvg } = await import("./id-D2Xgac4v.js");
    return { idSvg };
  }, true ? __vite__mapDeps([41,1,2]) : void 0)).idSvg,
  infoCircle: async () => (await __vitePreload(async () => {
    const { infoCircleSvg } = await import("./info-circle-DysKbRHz.js");
    return { infoCircleSvg };
  }, true ? __vite__mapDeps([42,1,2]) : void 0)).infoCircleSvg,
  lightbulb: async () => (await __vitePreload(async () => {
    const { lightbulbSvg } = await import("./lightbulb-t3Q3IN3A.js");
    return { lightbulbSvg };
  }, true ? __vite__mapDeps([43,1,2]) : void 0)).lightbulbSvg,
  mail: async () => (await __vitePreload(async () => {
    const { mailSvg } = await import("./mail-UBeBANpw.js");
    return { mailSvg };
  }, true ? __vite__mapDeps([44,1,2]) : void 0)).mailSvg,
  mobile: async () => (await __vitePreload(async () => {
    const { mobileSvg } = await import("./mobile-D0BSmCWK.js");
    return { mobileSvg };
  }, true ? __vite__mapDeps([45,1,2]) : void 0)).mobileSvg,
  more: async () => (await __vitePreload(async () => {
    const { moreSvg } = await import("./more-mJT5rg7U.js");
    return { moreSvg };
  }, true ? __vite__mapDeps([46,1,2]) : void 0)).moreSvg,
  networkPlaceholder: async () => (await __vitePreload(async () => {
    const { networkPlaceholderSvg } = await import("./network-placeholder-Ca2Owv6L.js");
    return { networkPlaceholderSvg };
  }, true ? __vite__mapDeps([47,1,2]) : void 0)).networkPlaceholderSvg,
  nftPlaceholder: async () => (await __vitePreload(async () => {
    const { nftPlaceholderSvg } = await import("./nftPlaceholder-CMT2SkUM.js");
    return { nftPlaceholderSvg };
  }, true ? __vite__mapDeps([48,1,2]) : void 0)).nftPlaceholderSvg,
  off: async () => (await __vitePreload(async () => {
    const { offSvg } = await import("./off-CGbxxPbi.js");
    return { offSvg };
  }, true ? __vite__mapDeps([49,1,2]) : void 0)).offSvg,
  playStore: async () => (await __vitePreload(async () => {
    const { playStoreSvg } = await import("./play-store-pZikmmym.js");
    return { playStoreSvg };
  }, true ? __vite__mapDeps([50,1,2]) : void 0)).playStoreSvg,
  plus: async () => (await __vitePreload(async () => {
    const { plusSvg } = await import("./plus-Dz0v0An1.js");
    return { plusSvg };
  }, true ? __vite__mapDeps([51,1,2]) : void 0)).plusSvg,
  qrCode: async () => (await __vitePreload(async () => {
    const { qrCodeIcon } = await import("./qr-code-CEoAQCbG.js");
    return { qrCodeIcon };
  }, true ? __vite__mapDeps([52,1,2]) : void 0)).qrCodeIcon,
  recycleHorizontal: async () => (await __vitePreload(async () => {
    const { recycleHorizontalSvg } = await import("./recycle-horizontal-DcKInp0V.js");
    return { recycleHorizontalSvg };
  }, true ? __vite__mapDeps([53,1,2]) : void 0)).recycleHorizontalSvg,
  refresh: async () => (await __vitePreload(async () => {
    const { refreshSvg } = await import("./refresh-BdHuD57Y.js");
    return { refreshSvg };
  }, true ? __vite__mapDeps([54,1,2]) : void 0)).refreshSvg,
  search: async () => (await __vitePreload(async () => {
    const { searchSvg } = await import("./search-r7sTg-hm.js");
    return { searchSvg };
  }, true ? __vite__mapDeps([55,1,2]) : void 0)).searchSvg,
  send: async () => (await __vitePreload(async () => {
    const { sendSvg } = await import("./send-ByFwyI72.js");
    return { sendSvg };
  }, true ? __vite__mapDeps([56,1,2]) : void 0)).sendSvg,
  swapHorizontal: async () => (await __vitePreload(async () => {
    const { swapHorizontalSvg } = await import("./swapHorizontal-Bf4wU8YS.js");
    return { swapHorizontalSvg };
  }, true ? __vite__mapDeps([57,1,2]) : void 0)).swapHorizontalSvg,
  swapHorizontalMedium: async () => (await __vitePreload(async () => {
    const { swapHorizontalMediumSvg } = await import("./swapHorizontalMedium-B-AZ6B_T.js");
    return { swapHorizontalMediumSvg };
  }, true ? __vite__mapDeps([58,1,2]) : void 0)).swapHorizontalMediumSvg,
  swapHorizontalBold: async () => (await __vitePreload(async () => {
    const { swapHorizontalBoldSvg } = await import("./swapHorizontalBold-D_Zqw0SE.js");
    return { swapHorizontalBoldSvg };
  }, true ? __vite__mapDeps([59,1,2]) : void 0)).swapHorizontalBoldSvg,
  swapHorizontalRoundedBold: async () => (await __vitePreload(async () => {
    const { swapHorizontalRoundedBoldSvg } = await import("./swapHorizontalRoundedBold-C2p1RuwN.js");
    return { swapHorizontalRoundedBoldSvg };
  }, true ? __vite__mapDeps([60,1,2]) : void 0)).swapHorizontalRoundedBoldSvg,
  swapVertical: async () => (await __vitePreload(async () => {
    const { swapVerticalSvg } = await import("./swapVertical-OgoE5LGg.js");
    return { swapVerticalSvg };
  }, true ? __vite__mapDeps([61,1,2]) : void 0)).swapVerticalSvg,
  telegram: async () => (await __vitePreload(async () => {
    const { telegramSvg } = await import("./telegram-AcqBI90t.js");
    return { telegramSvg };
  }, true ? __vite__mapDeps([62,1,2]) : void 0)).telegramSvg,
  threeDots: async () => (await __vitePreload(async () => {
    const { threeDotsSvg } = await import("./three-dots-D27nflTR.js");
    return { threeDotsSvg };
  }, true ? __vite__mapDeps([63,1,2]) : void 0)).threeDotsSvg,
  twitch: async () => (await __vitePreload(async () => {
    const { twitchSvg } = await import("./twitch-CEzrqKC3.js");
    return { twitchSvg };
  }, true ? __vite__mapDeps([64,1,2]) : void 0)).twitchSvg,
  twitter: async () => (await __vitePreload(async () => {
    const { xSvg } = await import("./x-BnW6Slu2.js");
    return { xSvg };
  }, true ? __vite__mapDeps([65,1,2]) : void 0)).xSvg,
  twitterIcon: async () => (await __vitePreload(async () => {
    const { twitterIconSvg } = await import("./twitterIcon-_vpiwQsf.js");
    return { twitterIconSvg };
  }, true ? __vite__mapDeps([66,1,2]) : void 0)).twitterIconSvg,
  verify: async () => (await __vitePreload(async () => {
    const { verifySvg } = await import("./verify-B7FD3uBG.js");
    return { verifySvg };
  }, true ? __vite__mapDeps([67,1,2]) : void 0)).verifySvg,
  verifyFilled: async () => (await __vitePreload(async () => {
    const { verifyFilledSvg } = await import("./verify-filled-CkeA-a0C.js");
    return { verifyFilledSvg };
  }, true ? __vite__mapDeps([68,1,2]) : void 0)).verifyFilledSvg,
  wallet: async () => (await __vitePreload(async () => {
    const { walletSvg } = await import("./wallet-TuK5IMvH.js");
    return { walletSvg };
  }, true ? __vite__mapDeps([69,1,2]) : void 0)).walletSvg,
  walletConnect: async () => (await __vitePreload(async () => {
    const { walletConnectSvg } = await import("./walletconnect-B8a4RH5t.js");
    return { walletConnectSvg };
  }, true ? __vite__mapDeps([70,1,2]) : void 0)).walletConnectSvg,
  walletConnectLightBrown: async () => (await __vitePreload(async () => {
    const { walletConnectLightBrownSvg } = await import("./walletconnect-B8a4RH5t.js");
    return { walletConnectLightBrownSvg };
  }, true ? __vite__mapDeps([70,1,2]) : void 0)).walletConnectLightBrownSvg,
  walletConnectBrown: async () => (await __vitePreload(async () => {
    const { walletConnectBrownSvg } = await import("./walletconnect-B8a4RH5t.js");
    return { walletConnectBrownSvg };
  }, true ? __vite__mapDeps([70,1,2]) : void 0)).walletConnectBrownSvg,
  walletPlaceholder: async () => (await __vitePreload(async () => {
    const { walletPlaceholderSvg } = await import("./wallet-placeholder-5F4NKo1v.js");
    return { walletPlaceholderSvg };
  }, true ? __vite__mapDeps([71,1,2]) : void 0)).walletPlaceholderSvg,
  warningCircle: async () => (await __vitePreload(async () => {
    const { warningCircleSvg } = await import("./warning-circle-DNXsb2zh.js");
    return { warningCircleSvg };
  }, true ? __vite__mapDeps([72,1,2]) : void 0)).warningCircleSvg,
  x: async () => (await __vitePreload(async () => {
    const { xSvg } = await import("./x-BnW6Slu2.js");
    return { xSvg };
  }, true ? __vite__mapDeps([65,1,2]) : void 0)).xSvg,
  info: async () => (await __vitePreload(async () => {
    const { infoSvg } = await import("./info-Cwj73Eao.js");
    return { infoSvg };
  }, true ? __vite__mapDeps([73,1,2]) : void 0)).infoSvg,
  exclamationTriangle: async () => (await __vitePreload(async () => {
    const { exclamationTriangleSvg } = await import("./exclamation-triangle-CYyiG78w.js");
    return { exclamationTriangleSvg };
  }, true ? __vite__mapDeps([74,1,2]) : void 0)).exclamationTriangleSvg,
  reown: async () => (await __vitePreload(async () => {
    const { reownSvg } = await import("./reown-logo-D7cyQkBv.js");
    return { reownSvg };
  }, true ? __vite__mapDeps([75,1,2]) : void 0)).reownSvg
};
async function getSvg(name) {
  if (globalSvgCache.has(name)) {
    return globalSvgCache.get(name);
  }
  const importFn = ICONS[name] ?? ICONS.copy;
  const svgPromise = importFn();
  globalSvgCache.set(name, svgPromise);
  return svgPromise;
}
let WuiIcon = class WuiIcon2 extends i$2 {
  constructor() {
    super(...arguments);
    this.size = "md";
    this.name = "copy";
    this.color = "fg-300";
    this.aspectRatio = "1 / 1";
  }
  render() {
    this.style.cssText = `
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `;
    return x`${m(getSvg(this.name), x`<div class="fallback"></div>`)}`;
  }
};
WuiIcon.styles = [resetStyles, colorStyles, styles$5];
__decorate$5([
  n$1()
], WuiIcon.prototype, "size", void 0);
__decorate$5([
  n$1()
], WuiIcon.prototype, "name", void 0);
__decorate$5([
  n$1()
], WuiIcon.prototype, "color", void 0);
__decorate$5([
  n$1()
], WuiIcon.prototype, "aspectRatio", void 0);
WuiIcon = __decorate$5([
  customElement("wui-icon")
], WuiIcon);
const styles$4 = i$1`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;
var __decorate$4 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
  return c2 > 3 && r && Object.defineProperty(target, key, r), r;
};
let WuiText = class WuiText2 extends i$2 {
  constructor() {
    super(...arguments);
    this.variant = "paragraph-500";
    this.color = "fg-300";
    this.align = "left";
    this.lineClamp = void 0;
  }
  render() {
    const classes = {
      [`wui-font-${this.variant}`]: true,
      [`wui-color-${this.color}`]: true,
      [`wui-line-clamp-${this.lineClamp}`]: this.lineClamp ? true : false
    };
    this.style.cssText = `
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `;
    return x`<slot class=${e$1(classes)}></slot>`;
  }
};
WuiText.styles = [resetStyles, styles$4];
__decorate$4([
  n$1()
], WuiText.prototype, "variant", void 0);
__decorate$4([
  n$1()
], WuiText.prototype, "color", void 0);
__decorate$4([
  n$1()
], WuiText.prototype, "align", void 0);
__decorate$4([
  n$1()
], WuiText.prototype, "lineClamp", void 0);
WuiText = __decorate$4([
  customElement("wui-text")
], WuiText);
const styles$3 = i$1`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;
var __decorate$3 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
  return c2 > 3 && r && Object.defineProperty(target, key, r), r;
};
let WuiIconBox = class WuiIconBox2 extends i$2 {
  constructor() {
    super(...arguments);
    this.size = "md";
    this.backgroundColor = "accent-100";
    this.iconColor = "accent-100";
    this.background = "transparent";
    this.border = false;
    this.borderColor = "wui-color-bg-125";
    this.icon = "copy";
  }
  render() {
    const iconSize = this.iconSize || this.size;
    const isLg = this.size === "lg";
    const isXl = this.size === "xl";
    const bgMix = isLg ? "12%" : "16%";
    const borderRadius = isLg ? "xxs" : isXl ? "s" : "3xl";
    const isGray = this.background === "gray";
    const isOpaque = this.background === "opaque";
    const isColorChange = this.backgroundColor === "accent-100" && isOpaque || this.backgroundColor === "success-100" && isOpaque || this.backgroundColor === "error-100" && isOpaque || this.backgroundColor === "inverse-100" && isOpaque;
    let bgValueVariable = `var(--wui-color-${this.backgroundColor})`;
    if (isColorChange) {
      bgValueVariable = `var(--wui-icon-box-bg-${this.backgroundColor})`;
    } else if (isGray) {
      bgValueVariable = `var(--wui-color-gray-${this.backgroundColor})`;
    }
    this.style.cssText = `
       --local-bg-value: ${bgValueVariable};
       --local-bg-mix: ${isColorChange || isGray ? `100%` : bgMix};
       --local-border-radius: var(--wui-border-radius-${borderRadius});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor === "wui-color-bg-125" ? `2px` : `1px`} solid ${this.border ? `var(--${this.borderColor})` : `transparent`}
   `;
    return x` <wui-icon color=${this.iconColor} size=${iconSize} name=${this.icon}></wui-icon> `;
  }
};
WuiIconBox.styles = [resetStyles, elementStyles, styles$3];
__decorate$3([
  n$1()
], WuiIconBox.prototype, "size", void 0);
__decorate$3([
  n$1()
], WuiIconBox.prototype, "backgroundColor", void 0);
__decorate$3([
  n$1()
], WuiIconBox.prototype, "iconColor", void 0);
__decorate$3([
  n$1()
], WuiIconBox.prototype, "iconSize", void 0);
__decorate$3([
  n$1()
], WuiIconBox.prototype, "background", void 0);
__decorate$3([
  n$1({ type: Boolean })
], WuiIconBox.prototype, "border", void 0);
__decorate$3([
  n$1()
], WuiIconBox.prototype, "borderColor", void 0);
__decorate$3([
  n$1()
], WuiIconBox.prototype, "icon", void 0);
WuiIconBox = __decorate$3([
  customElement("wui-icon-box")
], WuiIconBox);
const styles$2 = i$1`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;
var __decorate$2 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
  return c2 > 3 && r && Object.defineProperty(target, key, r), r;
};
let WuiImage = class WuiImage2 extends i$2 {
  constructor() {
    super(...arguments);
    this.src = "./path/to/image.jpg";
    this.alt = "Image";
    this.size = void 0;
  }
  render() {
    this.style.cssText = `
      --local-width: ${this.size ? `var(--wui-icon-size-${this.size});` : "100%"};
      --local-height: ${this.size ? `var(--wui-icon-size-${this.size});` : "100%"};
      `;
    return x`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`;
  }
  handleImageError() {
    this.dispatchEvent(new CustomEvent("onLoadError", { bubbles: true, composed: true }));
  }
};
WuiImage.styles = [resetStyles, colorStyles, styles$2];
__decorate$2([
  n$1()
], WuiImage.prototype, "src", void 0);
__decorate$2([
  n$1()
], WuiImage.prototype, "alt", void 0);
__decorate$2([
  n$1()
], WuiImage.prototype, "size", void 0);
WuiImage = __decorate$2([
  customElement("wui-image")
], WuiImage);
const styles$1 = i$1`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;
var __decorate$1 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
  return c2 > 3 && r && Object.defineProperty(target, key, r), r;
};
let WuiTag = class WuiTag2 extends i$2 {
  constructor() {
    super(...arguments);
    this.variant = "main";
    this.size = "lg";
  }
  render() {
    this.dataset["variant"] = this.variant;
    this.dataset["size"] = this.size;
    const textVariant = this.size === "md" ? "mini-700" : "micro-700";
    return x`
      <wui-text data-variant=${this.variant} variant=${textVariant} color="inherit">
        <slot></slot>
      </wui-text>
    `;
  }
};
WuiTag.styles = [resetStyles, styles$1];
__decorate$1([
  n$1()
], WuiTag.prototype, "variant", void 0);
__decorate$1([
  n$1()
], WuiTag.prototype, "size", void 0);
WuiTag = __decorate$1([
  customElement("wui-tag")
], WuiTag);
const styles = i$1`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;
var __decorate = function(decorators, target, key, desc) {
  var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
  return c2 > 3 && r && Object.defineProperty(target, key, r), r;
};
let WuiLoadingSpinner = class WuiLoadingSpinner2 extends i$2 {
  constructor() {
    super(...arguments);
    this.color = "accent-100";
    this.size = "lg";
  }
  render() {
    this.style.cssText = `--local-color: ${this.color === "inherit" ? "inherit" : `var(--wui-color-${this.color})`}`;
    this.dataset["size"] = this.size;
    return x`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`;
  }
};
WuiLoadingSpinner.styles = [resetStyles, styles];
__decorate([
  n$1()
], WuiLoadingSpinner.prototype, "color", void 0);
__decorate([
  n$1()
], WuiLoadingSpinner.prototype, "size", void 0);
WuiLoadingSpinner = __decorate([
  customElement("wui-loading-spinner")
], WuiLoadingSpinner);
export {
  UiHelperUtil as U,
  customElement as c
};
