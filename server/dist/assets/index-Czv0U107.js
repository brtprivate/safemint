import { cM as require$$3, cN as requireBuffer, cO as requireInherits_browser, cP as getAugmentedNamespace, cQ as requireEvents, cR as requireEventemitter3, cL as getDefaultExportFromCjs } from "./index-BMOt3AIC.js";
import { a as clsx_m } from "./clsx.m-D57qXwfE.js";
var dist$5 = {};
var CoinbaseWalletSDK = {};
var walletLogo = {};
var hasRequiredWalletLogo;
function requireWalletLogo() {
  if (hasRequiredWalletLogo) return walletLogo;
  hasRequiredWalletLogo = 1;
  Object.defineProperty(walletLogo, "__esModule", { value: true });
  walletLogo.walletLogo = void 0;
  const walletLogo$1 = (type2, width) => {
    let height;
    switch (type2) {
      case "standard":
        height = width;
        return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
      case "circle":
        height = width;
        return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
      case "text":
        height = (0.1 * width).toFixed(2);
        return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
      case "textWithLogo":
        height = (0.25 * width).toFixed(2);
        return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
      case "textLight":
        height = (0.1 * width).toFixed(2);
        return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
      case "textWithLogoLight":
        height = (0.25 * width).toFixed(2);
        return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
      default:
        height = width;
        return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
    }
  };
  walletLogo.walletLogo = walletLogo$1;
  return walletLogo;
}
var constants$2 = {};
var hasRequiredConstants$2;
function requireConstants$2() {
  if (hasRequiredConstants$2) return constants$2;
  hasRequiredConstants$2 = 1;
  Object.defineProperty(constants$2, "__esModule", { value: true });
  constants$2.LINK_API_URL = void 0;
  constants$2.LINK_API_URL = "https://www.walletlink.org";
  return constants$2;
}
var util$1 = {};
var bn$1 = { exports: {} };
var bn = bn$1.exports;
var hasRequiredBn;
function requireBn() {
  if (hasRequiredBn) return bn$1.exports;
  hasRequiredBn = 1;
  (function(module) {
    (function(module2, exports) {
      function assert2(val, msg) {
        if (!val) throw new Error(msg || "Assertion failed");
      }
      function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
      function BN(number2, base, endian) {
        if (BN.isBN(number2)) {
          return number2;
        }
        this.negative = 0;
        this.words = null;
        this.length = 0;
        this.red = null;
        if (number2 !== null) {
          if (base === "le" || base === "be") {
            endian = base;
            base = 10;
          }
          this._init(number2 || 0, base || 10, endian || "be");
        }
      }
      if (typeof module2 === "object") {
        module2.exports = BN;
      } else {
        exports.BN = BN;
      }
      BN.BN = BN;
      BN.wordSize = 26;
      var Buffer2;
      try {
        if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
          Buffer2 = window.Buffer;
        } else {
          Buffer2 = require$$3.Buffer;
        }
      } catch (e2) {
      }
      BN.isBN = function isBN(num) {
        if (num instanceof BN) {
          return true;
        }
        return num !== null && typeof num === "object" && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
      };
      BN.max = function max2(left, right) {
        if (left.cmp(right) > 0) return left;
        return right;
      };
      BN.min = function min2(left, right) {
        if (left.cmp(right) < 0) return left;
        return right;
      };
      BN.prototype._init = function init(number2, base, endian) {
        if (typeof number2 === "number") {
          return this._initNumber(number2, base, endian);
        }
        if (typeof number2 === "object") {
          return this._initArray(number2, base, endian);
        }
        if (base === "hex") {
          base = 16;
        }
        assert2(base === (base | 0) && base >= 2 && base <= 36);
        number2 = number2.toString().replace(/\s+/g, "");
        var start = 0;
        if (number2[0] === "-") {
          start++;
          this.negative = 1;
        }
        if (start < number2.length) {
          if (base === 16) {
            this._parseHex(number2, start, endian);
          } else {
            this._parseBase(number2, base, start);
            if (endian === "le") {
              this._initArray(this.toArray(), base, endian);
            }
          }
        }
      };
      BN.prototype._initNumber = function _initNumber(number2, base, endian) {
        if (number2 < 0) {
          this.negative = 1;
          number2 = -number2;
        }
        if (number2 < 67108864) {
          this.words = [number2 & 67108863];
          this.length = 1;
        } else if (number2 < 4503599627370496) {
          this.words = [
            number2 & 67108863,
            number2 / 67108864 & 67108863
          ];
          this.length = 2;
        } else {
          assert2(number2 < 9007199254740992);
          this.words = [
            number2 & 67108863,
            number2 / 67108864 & 67108863,
            1
          ];
          this.length = 3;
        }
        if (endian !== "le") return;
        this._initArray(this.toArray(), base, endian);
      };
      BN.prototype._initArray = function _initArray(number2, base, endian) {
        assert2(typeof number2.length === "number");
        if (number2.length <= 0) {
          this.words = [0];
          this.length = 1;
          return this;
        }
        this.length = Math.ceil(number2.length / 3);
        this.words = new Array(this.length);
        for (var i2 = 0; i2 < this.length; i2++) {
          this.words[i2] = 0;
        }
        var j2, w2;
        var off = 0;
        if (endian === "be") {
          for (i2 = number2.length - 1, j2 = 0; i2 >= 0; i2 -= 3) {
            w2 = number2[i2] | number2[i2 - 1] << 8 | number2[i2 - 2] << 16;
            this.words[j2] |= w2 << off & 67108863;
            this.words[j2 + 1] = w2 >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j2++;
            }
          }
        } else if (endian === "le") {
          for (i2 = 0, j2 = 0; i2 < number2.length; i2 += 3) {
            w2 = number2[i2] | number2[i2 + 1] << 8 | number2[i2 + 2] << 16;
            this.words[j2] |= w2 << off & 67108863;
            this.words[j2 + 1] = w2 >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j2++;
            }
          }
        }
        return this._strip();
      };
      function parseHex4Bits(string2, index2) {
        var c2 = string2.charCodeAt(index2);
        if (c2 >= 48 && c2 <= 57) {
          return c2 - 48;
        } else if (c2 >= 65 && c2 <= 70) {
          return c2 - 55;
        } else if (c2 >= 97 && c2 <= 102) {
          return c2 - 87;
        } else {
          assert2(false, "Invalid character in " + string2);
        }
      }
      function parseHexByte(string2, lowerBound, index2) {
        var r2 = parseHex4Bits(string2, index2);
        if (index2 - 1 >= lowerBound) {
          r2 |= parseHex4Bits(string2, index2 - 1) << 4;
        }
        return r2;
      }
      BN.prototype._parseHex = function _parseHex(number2, start, endian) {
        this.length = Math.ceil((number2.length - start) / 6);
        this.words = new Array(this.length);
        for (var i2 = 0; i2 < this.length; i2++) {
          this.words[i2] = 0;
        }
        var off = 0;
        var j2 = 0;
        var w2;
        if (endian === "be") {
          for (i2 = number2.length - 1; i2 >= start; i2 -= 2) {
            w2 = parseHexByte(number2, start, i2) << off;
            this.words[j2] |= w2 & 67108863;
            if (off >= 18) {
              off -= 18;
              j2 += 1;
              this.words[j2] |= w2 >>> 26;
            } else {
              off += 8;
            }
          }
        } else {
          var parseLength = number2.length - start;
          for (i2 = parseLength % 2 === 0 ? start + 1 : start; i2 < number2.length; i2 += 2) {
            w2 = parseHexByte(number2, start, i2) << off;
            this.words[j2] |= w2 & 67108863;
            if (off >= 18) {
              off -= 18;
              j2 += 1;
              this.words[j2] |= w2 >>> 26;
            } else {
              off += 8;
            }
          }
        }
        this._strip();
      };
      function parseBase(str, start, end, mul) {
        var r2 = 0;
        var b2 = 0;
        var len = Math.min(str.length, end);
        for (var i2 = start; i2 < len; i2++) {
          var c2 = str.charCodeAt(i2) - 48;
          r2 *= mul;
          if (c2 >= 49) {
            b2 = c2 - 49 + 10;
          } else if (c2 >= 17) {
            b2 = c2 - 17 + 10;
          } else {
            b2 = c2;
          }
          assert2(c2 >= 0 && b2 < mul, "Invalid character");
          r2 += b2;
        }
        return r2;
      }
      BN.prototype._parseBase = function _parseBase(number2, base, start) {
        this.words = [0];
        this.length = 1;
        for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base) {
          limbLen++;
        }
        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number2.length - start;
        var mod = total % limbLen;
        var end = Math.min(total, total - mod) + start;
        var word = 0;
        for (var i2 = start; i2 < end; i2 += limbLen) {
          word = parseBase(number2, i2, i2 + limbLen, base);
          this.imuln(limbPow);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        if (mod !== 0) {
          var pow2 = 1;
          word = parseBase(number2, i2, number2.length, base);
          for (i2 = 0; i2 < mod; i2++) {
            pow2 *= base;
          }
          this.imuln(pow2);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        this._strip();
      };
      BN.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);
        for (var i2 = 0; i2 < this.length; i2++) {
          dest.words[i2] = this.words[i2];
        }
        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
      };
      function move(dest, src) {
        dest.words = src.words;
        dest.length = src.length;
        dest.negative = src.negative;
        dest.red = src.red;
      }
      BN.prototype._move = function _move(dest) {
        move(dest, this);
      };
      BN.prototype.clone = function clone() {
        var r2 = new BN(null);
        this.copy(r2);
        return r2;
      };
      BN.prototype._expand = function _expand(size2) {
        while (this.length < size2) {
          this.words[this.length++] = 0;
        }
        return this;
      };
      BN.prototype._strip = function strip() {
        while (this.length > 1 && this.words[this.length - 1] === 0) {
          this.length--;
        }
        return this._normSign();
      };
      BN.prototype._normSign = function _normSign() {
        if (this.length === 1 && this.words[0] === 0) {
          this.negative = 0;
        }
        return this;
      };
      if (typeof Symbol !== "undefined" && typeof Symbol.for === "function") {
        try {
          BN.prototype[Symbol.for("nodejs.util.inspect.custom")] = inspect;
        } catch (e2) {
          BN.prototype.inspect = inspect;
        }
      } else {
        BN.prototype.inspect = inspect;
      }
      function inspect() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      }
      var zeros = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000"
      ];
      var groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ];
      var groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        1e7,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64e6,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        243e5,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
      ];
      BN.prototype.toString = function toString(base, padding) {
        base = base || 10;
        padding = padding | 0 || 1;
        var out;
        if (base === 16 || base === "hex") {
          out = "";
          var off = 0;
          var carry = 0;
          for (var i2 = 0; i2 < this.length; i2++) {
            var w2 = this.words[i2];
            var word = ((w2 << off | carry) & 16777215).toString(16);
            carry = w2 >>> 24 - off & 16777215;
            off += 2;
            if (off >= 26) {
              off -= 26;
              i2--;
            }
            if (carry !== 0 || i2 !== this.length - 1) {
              out = zeros[6 - word.length] + word + out;
            } else {
              out = word + out;
            }
          }
          if (carry !== 0) {
            out = carry.toString(16) + out;
          }
          while (out.length % padding !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        if (base === (base | 0) && base >= 2 && base <= 36) {
          var groupSize = groupSizes[base];
          var groupBase = groupBases[base];
          out = "";
          var c2 = this.clone();
          c2.negative = 0;
          while (!c2.isZero()) {
            var r2 = c2.modrn(groupBase).toString(base);
            c2 = c2.idivn(groupBase);
            if (!c2.isZero()) {
              out = zeros[groupSize - r2.length] + r2 + out;
            } else {
              out = r2 + out;
            }
          }
          if (this.isZero()) {
            out = "0" + out;
          }
          while (out.length % padding !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        assert2(false, "Base should be between 2 and 36");
      };
      BN.prototype.toNumber = function toNumber() {
        var ret = this.words[0];
        if (this.length === 2) {
          ret += this.words[1] * 67108864;
        } else if (this.length === 3 && this.words[2] === 1) {
          ret += 4503599627370496 + this.words[1] * 67108864;
        } else if (this.length > 2) {
          assert2(false, "Number can only safely store up to 53 bits");
        }
        return this.negative !== 0 ? -ret : ret;
      };
      BN.prototype.toJSON = function toJSON() {
        return this.toString(16, 2);
      };
      if (Buffer2) {
        BN.prototype.toBuffer = function toBuffer2(endian, length) {
          return this.toArrayLike(Buffer2, endian, length);
        };
      }
      BN.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
      };
      var allocate = function allocate2(ArrayType, size2) {
        if (ArrayType.allocUnsafe) {
          return ArrayType.allocUnsafe(size2);
        }
        return new ArrayType(size2);
      };
      BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        this._strip();
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert2(byteLength <= reqLength, "byte array longer than desired length");
        assert2(reqLength > 0, "Requested array length <= 0");
        var res = allocate(ArrayType, reqLength);
        var postfix = endian === "le" ? "LE" : "BE";
        this["_toArrayLike" + postfix](res, byteLength);
        return res;
      };
      BN.prototype._toArrayLikeLE = function _toArrayLikeLE(res, byteLength) {
        var position = 0;
        var carry = 0;
        for (var i2 = 0, shift = 0; i2 < this.length; i2++) {
          var word = this.words[i2] << shift | carry;
          res[position++] = word & 255;
          if (position < res.length) {
            res[position++] = word >> 8 & 255;
          }
          if (position < res.length) {
            res[position++] = word >> 16 & 255;
          }
          if (shift === 6) {
            if (position < res.length) {
              res[position++] = word >> 24 & 255;
            }
            carry = 0;
            shift = 0;
          } else {
            carry = word >>> 24;
            shift += 2;
          }
        }
        if (position < res.length) {
          res[position++] = carry;
          while (position < res.length) {
            res[position++] = 0;
          }
        }
      };
      BN.prototype._toArrayLikeBE = function _toArrayLikeBE(res, byteLength) {
        var position = res.length - 1;
        var carry = 0;
        for (var i2 = 0, shift = 0; i2 < this.length; i2++) {
          var word = this.words[i2] << shift | carry;
          res[position--] = word & 255;
          if (position >= 0) {
            res[position--] = word >> 8 & 255;
          }
          if (position >= 0) {
            res[position--] = word >> 16 & 255;
          }
          if (shift === 6) {
            if (position >= 0) {
              res[position--] = word >> 24 & 255;
            }
            carry = 0;
            shift = 0;
          } else {
            carry = word >>> 24;
            shift += 2;
          }
        }
        if (position >= 0) {
          res[position--] = carry;
          while (position >= 0) {
            res[position--] = 0;
          }
        }
      };
      if (Math.clz32) {
        BN.prototype._countBits = function _countBits(w2) {
          return 32 - Math.clz32(w2);
        };
      } else {
        BN.prototype._countBits = function _countBits(w2) {
          var t2 = w2;
          var r2 = 0;
          if (t2 >= 4096) {
            r2 += 13;
            t2 >>>= 13;
          }
          if (t2 >= 64) {
            r2 += 7;
            t2 >>>= 7;
          }
          if (t2 >= 8) {
            r2 += 4;
            t2 >>>= 4;
          }
          if (t2 >= 2) {
            r2 += 2;
            t2 >>>= 2;
          }
          return r2 + t2;
        };
      }
      BN.prototype._zeroBits = function _zeroBits(w2) {
        if (w2 === 0) return 26;
        var t2 = w2;
        var r2 = 0;
        if ((t2 & 8191) === 0) {
          r2 += 13;
          t2 >>>= 13;
        }
        if ((t2 & 127) === 0) {
          r2 += 7;
          t2 >>>= 7;
        }
        if ((t2 & 15) === 0) {
          r2 += 4;
          t2 >>>= 4;
        }
        if ((t2 & 3) === 0) {
          r2 += 2;
          t2 >>>= 2;
        }
        if ((t2 & 1) === 0) {
          r2++;
        }
        return r2;
      };
      BN.prototype.bitLength = function bitLength() {
        var w2 = this.words[this.length - 1];
        var hi = this._countBits(w2);
        return (this.length - 1) * 26 + hi;
      };
      function toBitArray(num) {
        var w2 = new Array(num.bitLength());
        for (var bit = 0; bit < w2.length; bit++) {
          var off = bit / 26 | 0;
          var wbit = bit % 26;
          w2[bit] = num.words[off] >>> wbit & 1;
        }
        return w2;
      }
      BN.prototype.zeroBits = function zeroBits() {
        if (this.isZero()) return 0;
        var r2 = 0;
        for (var i2 = 0; i2 < this.length; i2++) {
          var b2 = this._zeroBits(this.words[i2]);
          r2 += b2;
          if (b2 !== 26) break;
        }
        return r2;
      };
      BN.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
      };
      BN.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) {
          return this.abs().inotn(width).iaddn(1);
        }
        return this.clone();
      };
      BN.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) {
          return this.notn(width).iaddn(1).ineg();
        }
        return this.clone();
      };
      BN.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
      };
      BN.prototype.neg = function neg() {
        return this.clone().ineg();
      };
      BN.prototype.ineg = function ineg() {
        if (!this.isZero()) {
          this.negative ^= 1;
        }
        return this;
      };
      BN.prototype.iuor = function iuor(num) {
        while (this.length < num.length) {
          this.words[this.length++] = 0;
        }
        for (var i2 = 0; i2 < num.length; i2++) {
          this.words[i2] = this.words[i2] | num.words[i2];
        }
        return this._strip();
      };
      BN.prototype.ior = function ior(num) {
        assert2((this.negative | num.negative) === 0);
        return this.iuor(num);
      };
      BN.prototype.or = function or(num) {
        if (this.length > num.length) return this.clone().ior(num);
        return num.clone().ior(this);
      };
      BN.prototype.uor = function uor(num) {
        if (this.length > num.length) return this.clone().iuor(num);
        return num.clone().iuor(this);
      };
      BN.prototype.iuand = function iuand(num) {
        var b2;
        if (this.length > num.length) {
          b2 = num;
        } else {
          b2 = this;
        }
        for (var i2 = 0; i2 < b2.length; i2++) {
          this.words[i2] = this.words[i2] & num.words[i2];
        }
        this.length = b2.length;
        return this._strip();
      };
      BN.prototype.iand = function iand(num) {
        assert2((this.negative | num.negative) === 0);
        return this.iuand(num);
      };
      BN.prototype.and = function and(num) {
        if (this.length > num.length) return this.clone().iand(num);
        return num.clone().iand(this);
      };
      BN.prototype.uand = function uand(num) {
        if (this.length > num.length) return this.clone().iuand(num);
        return num.clone().iuand(this);
      };
      BN.prototype.iuxor = function iuxor(num) {
        var a2;
        var b2;
        if (this.length > num.length) {
          a2 = this;
          b2 = num;
        } else {
          a2 = num;
          b2 = this;
        }
        for (var i2 = 0; i2 < b2.length; i2++) {
          this.words[i2] = a2.words[i2] ^ b2.words[i2];
        }
        if (this !== a2) {
          for (; i2 < a2.length; i2++) {
            this.words[i2] = a2.words[i2];
          }
        }
        this.length = a2.length;
        return this._strip();
      };
      BN.prototype.ixor = function ixor(num) {
        assert2((this.negative | num.negative) === 0);
        return this.iuxor(num);
      };
      BN.prototype.xor = function xor(num) {
        if (this.length > num.length) return this.clone().ixor(num);
        return num.clone().ixor(this);
      };
      BN.prototype.uxor = function uxor(num) {
        if (this.length > num.length) return this.clone().iuxor(num);
        return num.clone().iuxor(this);
      };
      BN.prototype.inotn = function inotn(width) {
        assert2(typeof width === "number" && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26;
        this._expand(bytesNeeded);
        if (bitsLeft > 0) {
          bytesNeeded--;
        }
        for (var i2 = 0; i2 < bytesNeeded; i2++) {
          this.words[i2] = ~this.words[i2] & 67108863;
        }
        if (bitsLeft > 0) {
          this.words[i2] = ~this.words[i2] & 67108863 >> 26 - bitsLeft;
        }
        return this._strip();
      };
      BN.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
      };
      BN.prototype.setn = function setn(bit, val) {
        assert2(typeof bit === "number" && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        this._expand(off + 1);
        if (val) {
          this.words[off] = this.words[off] | 1 << wbit;
        } else {
          this.words[off] = this.words[off] & ~(1 << wbit);
        }
        return this._strip();
      };
      BN.prototype.iadd = function iadd(num) {
        var r2;
        if (this.negative !== 0 && num.negative === 0) {
          this.negative = 0;
          r2 = this.isub(num);
          this.negative ^= 1;
          return this._normSign();
        } else if (this.negative === 0 && num.negative !== 0) {
          num.negative = 0;
          r2 = this.isub(num);
          num.negative = 1;
          return r2._normSign();
        }
        var a2, b2;
        if (this.length > num.length) {
          a2 = this;
          b2 = num;
        } else {
          a2 = num;
          b2 = this;
        }
        var carry = 0;
        for (var i2 = 0; i2 < b2.length; i2++) {
          r2 = (a2.words[i2] | 0) + (b2.words[i2] | 0) + carry;
          this.words[i2] = r2 & 67108863;
          carry = r2 >>> 26;
        }
        for (; carry !== 0 && i2 < a2.length; i2++) {
          r2 = (a2.words[i2] | 0) + carry;
          this.words[i2] = r2 & 67108863;
          carry = r2 >>> 26;
        }
        this.length = a2.length;
        if (carry !== 0) {
          this.words[this.length] = carry;
          this.length++;
        } else if (a2 !== this) {
          for (; i2 < a2.length; i2++) {
            this.words[i2] = a2.words[i2];
          }
        }
        return this;
      };
      BN.prototype.add = function add(num) {
        var res;
        if (num.negative !== 0 && this.negative === 0) {
          num.negative = 0;
          res = this.sub(num);
          num.negative ^= 1;
          return res;
        } else if (num.negative === 0 && this.negative !== 0) {
          this.negative = 0;
          res = num.sub(this);
          this.negative = 1;
          return res;
        }
        if (this.length > num.length) return this.clone().iadd(num);
        return num.clone().iadd(this);
      };
      BN.prototype.isub = function isub(num) {
        if (num.negative !== 0) {
          num.negative = 0;
          var r2 = this.iadd(num);
          num.negative = 1;
          return r2._normSign();
        } else if (this.negative !== 0) {
          this.negative = 0;
          this.iadd(num);
          this.negative = 1;
          return this._normSign();
        }
        var cmp = this.cmp(num);
        if (cmp === 0) {
          this.negative = 0;
          this.length = 1;
          this.words[0] = 0;
          return this;
        }
        var a2, b2;
        if (cmp > 0) {
          a2 = this;
          b2 = num;
        } else {
          a2 = num;
          b2 = this;
        }
        var carry = 0;
        for (var i2 = 0; i2 < b2.length; i2++) {
          r2 = (a2.words[i2] | 0) - (b2.words[i2] | 0) + carry;
          carry = r2 >> 26;
          this.words[i2] = r2 & 67108863;
        }
        for (; carry !== 0 && i2 < a2.length; i2++) {
          r2 = (a2.words[i2] | 0) + carry;
          carry = r2 >> 26;
          this.words[i2] = r2 & 67108863;
        }
        if (carry === 0 && i2 < a2.length && a2 !== this) {
          for (; i2 < a2.length; i2++) {
            this.words[i2] = a2.words[i2];
          }
        }
        this.length = Math.max(this.length, i2);
        if (a2 !== this) {
          this.negative = 1;
        }
        return this._strip();
      };
      BN.prototype.sub = function sub(num) {
        return this.clone().isub(num);
      };
      function smallMulTo(self2, num, out) {
        out.negative = num.negative ^ self2.negative;
        var len = self2.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0;
        var a2 = self2.words[0] | 0;
        var b2 = num.words[0] | 0;
        var r2 = a2 * b2;
        var lo = r2 & 67108863;
        var carry = r2 / 67108864 | 0;
        out.words[0] = lo;
        for (var k2 = 1; k2 < len; k2++) {
          var ncarry = carry >>> 26;
          var rword = carry & 67108863;
          var maxJ = Math.min(k2, num.length - 1);
          for (var j2 = Math.max(0, k2 - self2.length + 1); j2 <= maxJ; j2++) {
            var i2 = k2 - j2 | 0;
            a2 = self2.words[i2] | 0;
            b2 = num.words[j2] | 0;
            r2 = a2 * b2 + rword;
            ncarry += r2 / 67108864 | 0;
            rword = r2 & 67108863;
          }
          out.words[k2] = rword | 0;
          carry = ncarry | 0;
        }
        if (carry !== 0) {
          out.words[k2] = carry | 0;
        } else {
          out.length--;
        }
        return out._strip();
      }
      var comb10MulTo = function comb10MulTo2(self2, num, out) {
        var a2 = self2.words;
        var b2 = num.words;
        var o2 = out.words;
        var c2 = 0;
        var lo;
        var mid;
        var hi;
        var a0 = a2[0] | 0;
        var al0 = a0 & 8191;
        var ah0 = a0 >>> 13;
        var a1 = a2[1] | 0;
        var al1 = a1 & 8191;
        var ah1 = a1 >>> 13;
        var a22 = a2[2] | 0;
        var al2 = a22 & 8191;
        var ah2 = a22 >>> 13;
        var a3 = a2[3] | 0;
        var al3 = a3 & 8191;
        var ah3 = a3 >>> 13;
        var a4 = a2[4] | 0;
        var al4 = a4 & 8191;
        var ah4 = a4 >>> 13;
        var a5 = a2[5] | 0;
        var al5 = a5 & 8191;
        var ah5 = a5 >>> 13;
        var a6 = a2[6] | 0;
        var al6 = a6 & 8191;
        var ah6 = a6 >>> 13;
        var a7 = a2[7] | 0;
        var al7 = a7 & 8191;
        var ah7 = a7 >>> 13;
        var a8 = a2[8] | 0;
        var al8 = a8 & 8191;
        var ah8 = a8 >>> 13;
        var a9 = a2[9] | 0;
        var al9 = a9 & 8191;
        var ah9 = a9 >>> 13;
        var b0 = b2[0] | 0;
        var bl0 = b0 & 8191;
        var bh0 = b0 >>> 13;
        var b1 = b2[1] | 0;
        var bl1 = b1 & 8191;
        var bh1 = b1 >>> 13;
        var b22 = b2[2] | 0;
        var bl2 = b22 & 8191;
        var bh2 = b22 >>> 13;
        var b3 = b2[3] | 0;
        var bl3 = b3 & 8191;
        var bh3 = b3 >>> 13;
        var b4 = b2[4] | 0;
        var bl4 = b4 & 8191;
        var bh4 = b4 >>> 13;
        var b5 = b2[5] | 0;
        var bl5 = b5 & 8191;
        var bh5 = b5 >>> 13;
        var b6 = b2[6] | 0;
        var bl6 = b6 & 8191;
        var bh6 = b6 >>> 13;
        var b7 = b2[7] | 0;
        var bl7 = b7 & 8191;
        var bh7 = b7 >>> 13;
        var b8 = b2[8] | 0;
        var bl8 = b8 & 8191;
        var bh8 = b8 >>> 13;
        var b9 = b2[9] | 0;
        var bl9 = b9 & 8191;
        var bh9 = b9 >>> 13;
        out.negative = self2.negative ^ num.negative;
        out.length = 19;
        lo = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi = Math.imul(ah0, bh0);
        var w0 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 67108863;
        lo = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi = Math.imul(ah1, bh0);
        lo = lo + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi = hi + Math.imul(ah0, bh1) | 0;
        var w1 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 67108863;
        lo = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi = Math.imul(ah2, bh0);
        lo = lo + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi = hi + Math.imul(ah1, bh1) | 0;
        lo = lo + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi = hi + Math.imul(ah0, bh2) | 0;
        var w2 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 67108863;
        lo = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi = Math.imul(ah3, bh0);
        lo = lo + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi = hi + Math.imul(ah2, bh1) | 0;
        lo = lo + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi = hi + Math.imul(ah1, bh2) | 0;
        lo = lo + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi = hi + Math.imul(ah0, bh3) | 0;
        var w3 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 67108863;
        lo = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi = Math.imul(ah4, bh0);
        lo = lo + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi = hi + Math.imul(ah3, bh1) | 0;
        lo = lo + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi = hi + Math.imul(ah2, bh2) | 0;
        lo = lo + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi = hi + Math.imul(ah1, bh3) | 0;
        lo = lo + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi = hi + Math.imul(ah0, bh4) | 0;
        var w4 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 67108863;
        lo = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi = Math.imul(ah5, bh0);
        lo = lo + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi = hi + Math.imul(ah4, bh1) | 0;
        lo = lo + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi = hi + Math.imul(ah3, bh2) | 0;
        lo = lo + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi = hi + Math.imul(ah2, bh3) | 0;
        lo = lo + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi = hi + Math.imul(ah1, bh4) | 0;
        lo = lo + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi = hi + Math.imul(ah0, bh5) | 0;
        var w5 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 67108863;
        lo = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi = Math.imul(ah6, bh0);
        lo = lo + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi = hi + Math.imul(ah5, bh1) | 0;
        lo = lo + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi = hi + Math.imul(ah4, bh2) | 0;
        lo = lo + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi = hi + Math.imul(ah3, bh3) | 0;
        lo = lo + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi = hi + Math.imul(ah2, bh4) | 0;
        lo = lo + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi = hi + Math.imul(ah1, bh5) | 0;
        lo = lo + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi = hi + Math.imul(ah0, bh6) | 0;
        var w6 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 67108863;
        lo = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi = Math.imul(ah7, bh0);
        lo = lo + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi = hi + Math.imul(ah6, bh1) | 0;
        lo = lo + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi = hi + Math.imul(ah5, bh2) | 0;
        lo = lo + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi = hi + Math.imul(ah4, bh3) | 0;
        lo = lo + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi = hi + Math.imul(ah3, bh4) | 0;
        lo = lo + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi = hi + Math.imul(ah2, bh5) | 0;
        lo = lo + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi = hi + Math.imul(ah1, bh6) | 0;
        lo = lo + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi = hi + Math.imul(ah0, bh7) | 0;
        var w7 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 67108863;
        lo = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi = Math.imul(ah8, bh0);
        lo = lo + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi = hi + Math.imul(ah7, bh1) | 0;
        lo = lo + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi = hi + Math.imul(ah6, bh2) | 0;
        lo = lo + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi = hi + Math.imul(ah5, bh3) | 0;
        lo = lo + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi = hi + Math.imul(ah4, bh4) | 0;
        lo = lo + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi = hi + Math.imul(ah3, bh5) | 0;
        lo = lo + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi = hi + Math.imul(ah2, bh6) | 0;
        lo = lo + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi = hi + Math.imul(ah1, bh7) | 0;
        lo = lo + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi = hi + Math.imul(ah0, bh8) | 0;
        var w8 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 67108863;
        lo = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi = Math.imul(ah9, bh0);
        lo = lo + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi = hi + Math.imul(ah8, bh1) | 0;
        lo = lo + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi = hi + Math.imul(ah7, bh2) | 0;
        lo = lo + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi = hi + Math.imul(ah6, bh3) | 0;
        lo = lo + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi = hi + Math.imul(ah5, bh4) | 0;
        lo = lo + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi = hi + Math.imul(ah4, bh5) | 0;
        lo = lo + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi = hi + Math.imul(ah3, bh6) | 0;
        lo = lo + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi = hi + Math.imul(ah2, bh7) | 0;
        lo = lo + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi = hi + Math.imul(ah1, bh8) | 0;
        lo = lo + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi = hi + Math.imul(ah0, bh9) | 0;
        var w9 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 67108863;
        lo = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi = Math.imul(ah9, bh1);
        lo = lo + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi = hi + Math.imul(ah8, bh2) | 0;
        lo = lo + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi = hi + Math.imul(ah7, bh3) | 0;
        lo = lo + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi = hi + Math.imul(ah6, bh4) | 0;
        lo = lo + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi = hi + Math.imul(ah5, bh5) | 0;
        lo = lo + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi = hi + Math.imul(ah4, bh6) | 0;
        lo = lo + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi = hi + Math.imul(ah3, bh7) | 0;
        lo = lo + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi = hi + Math.imul(ah2, bh8) | 0;
        lo = lo + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi = hi + Math.imul(ah1, bh9) | 0;
        var w10 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 67108863;
        lo = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi = Math.imul(ah9, bh2);
        lo = lo + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi = hi + Math.imul(ah8, bh3) | 0;
        lo = lo + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi = hi + Math.imul(ah7, bh4) | 0;
        lo = lo + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi = hi + Math.imul(ah6, bh5) | 0;
        lo = lo + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi = hi + Math.imul(ah5, bh6) | 0;
        lo = lo + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi = hi + Math.imul(ah4, bh7) | 0;
        lo = lo + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi = hi + Math.imul(ah3, bh8) | 0;
        lo = lo + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi = hi + Math.imul(ah2, bh9) | 0;
        var w11 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 67108863;
        lo = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi = Math.imul(ah9, bh3);
        lo = lo + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi = hi + Math.imul(ah8, bh4) | 0;
        lo = lo + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi = hi + Math.imul(ah7, bh5) | 0;
        lo = lo + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi = hi + Math.imul(ah6, bh6) | 0;
        lo = lo + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi = hi + Math.imul(ah5, bh7) | 0;
        lo = lo + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi = hi + Math.imul(ah4, bh8) | 0;
        lo = lo + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi = hi + Math.imul(ah3, bh9) | 0;
        var w12 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 67108863;
        lo = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi = Math.imul(ah9, bh4);
        lo = lo + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi = hi + Math.imul(ah8, bh5) | 0;
        lo = lo + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi = hi + Math.imul(ah7, bh6) | 0;
        lo = lo + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi = hi + Math.imul(ah6, bh7) | 0;
        lo = lo + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi = hi + Math.imul(ah5, bh8) | 0;
        lo = lo + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi = hi + Math.imul(ah4, bh9) | 0;
        var w13 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 67108863;
        lo = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi = Math.imul(ah9, bh5);
        lo = lo + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi = hi + Math.imul(ah8, bh6) | 0;
        lo = lo + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi = hi + Math.imul(ah7, bh7) | 0;
        lo = lo + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi = hi + Math.imul(ah6, bh8) | 0;
        lo = lo + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi = hi + Math.imul(ah5, bh9) | 0;
        var w14 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 67108863;
        lo = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi = Math.imul(ah9, bh6);
        lo = lo + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi = hi + Math.imul(ah8, bh7) | 0;
        lo = lo + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi = hi + Math.imul(ah7, bh8) | 0;
        lo = lo + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi = hi + Math.imul(ah6, bh9) | 0;
        var w15 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 67108863;
        lo = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi = Math.imul(ah9, bh7);
        lo = lo + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi = hi + Math.imul(ah8, bh8) | 0;
        lo = lo + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi = hi + Math.imul(ah7, bh9) | 0;
        var w16 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 67108863;
        lo = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi = Math.imul(ah9, bh8);
        lo = lo + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi = hi + Math.imul(ah8, bh9) | 0;
        var w17 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 67108863;
        lo = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi = Math.imul(ah9, bh9);
        var w18 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 67108863;
        o2[0] = w0;
        o2[1] = w1;
        o2[2] = w2;
        o2[3] = w3;
        o2[4] = w4;
        o2[5] = w5;
        o2[6] = w6;
        o2[7] = w7;
        o2[8] = w8;
        o2[9] = w9;
        o2[10] = w10;
        o2[11] = w11;
        o2[12] = w12;
        o2[13] = w13;
        o2[14] = w14;
        o2[15] = w15;
        o2[16] = w16;
        o2[17] = w17;
        o2[18] = w18;
        if (c2 !== 0) {
          o2[19] = c2;
          out.length++;
        }
        return out;
      };
      if (!Math.imul) {
        comb10MulTo = smallMulTo;
      }
      function bigMulTo(self2, num, out) {
        out.negative = num.negative ^ self2.negative;
        out.length = self2.length + num.length;
        var carry = 0;
        var hncarry = 0;
        for (var k2 = 0; k2 < out.length - 1; k2++) {
          var ncarry = hncarry;
          hncarry = 0;
          var rword = carry & 67108863;
          var maxJ = Math.min(k2, num.length - 1);
          for (var j2 = Math.max(0, k2 - self2.length + 1); j2 <= maxJ; j2++) {
            var i2 = k2 - j2;
            var a2 = self2.words[i2] | 0;
            var b2 = num.words[j2] | 0;
            var r2 = a2 * b2;
            var lo = r2 & 67108863;
            ncarry = ncarry + (r2 / 67108864 | 0) | 0;
            lo = lo + rword | 0;
            rword = lo & 67108863;
            ncarry = ncarry + (lo >>> 26) | 0;
            hncarry += ncarry >>> 26;
            ncarry &= 67108863;
          }
          out.words[k2] = rword;
          carry = ncarry;
          ncarry = hncarry;
        }
        if (carry !== 0) {
          out.words[k2] = carry;
        } else {
          out.length--;
        }
        return out._strip();
      }
      function jumboMulTo(self2, num, out) {
        return bigMulTo(self2, num, out);
      }
      BN.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;
        if (this.length === 10 && num.length === 10) {
          res = comb10MulTo(this, num, out);
        } else if (len < 63) {
          res = smallMulTo(this, num, out);
        } else if (len < 1024) {
          res = bigMulTo(this, num, out);
        } else {
          res = jumboMulTo(this, num, out);
        }
        return res;
      };
      BN.prototype.mul = function mul(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
      };
      BN.prototype.mulf = function mulf(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
      };
      BN.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
      };
      BN.prototype.imuln = function imuln(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert2(typeof num === "number");
        assert2(num < 67108864);
        var carry = 0;
        for (var i2 = 0; i2 < this.length; i2++) {
          var w2 = (this.words[i2] | 0) * num;
          var lo = (w2 & 67108863) + (carry & 67108863);
          carry >>= 26;
          carry += w2 / 67108864 | 0;
          carry += lo >>> 26;
          this.words[i2] = lo & 67108863;
        }
        if (carry !== 0) {
          this.words[i2] = carry;
          this.length++;
        }
        this.length = num === 0 ? 1 : this.length;
        return isNegNum ? this.ineg() : this;
      };
      BN.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
      };
      BN.prototype.sqr = function sqr() {
        return this.mul(this);
      };
      BN.prototype.isqr = function isqr() {
        return this.imul(this.clone());
      };
      BN.prototype.pow = function pow2(num) {
        var w2 = toBitArray(num);
        if (w2.length === 0) return new BN(1);
        var res = this;
        for (var i2 = 0; i2 < w2.length; i2++, res = res.sqr()) {
          if (w2[i2] !== 0) break;
        }
        if (++i2 < w2.length) {
          for (var q2 = res.sqr(); i2 < w2.length; i2++, q2 = q2.sqr()) {
            if (w2[i2] === 0) continue;
            res = res.mul(q2);
          }
        }
        return res;
      };
      BN.prototype.iushln = function iushln(bits) {
        assert2(typeof bits === "number" && bits >= 0);
        var r2 = bits % 26;
        var s2 = (bits - r2) / 26;
        var carryMask = 67108863 >>> 26 - r2 << 26 - r2;
        var i2;
        if (r2 !== 0) {
          var carry = 0;
          for (i2 = 0; i2 < this.length; i2++) {
            var newCarry = this.words[i2] & carryMask;
            var c2 = (this.words[i2] | 0) - newCarry << r2;
            this.words[i2] = c2 | carry;
            carry = newCarry >>> 26 - r2;
          }
          if (carry) {
            this.words[i2] = carry;
            this.length++;
          }
        }
        if (s2 !== 0) {
          for (i2 = this.length - 1; i2 >= 0; i2--) {
            this.words[i2 + s2] = this.words[i2];
          }
          for (i2 = 0; i2 < s2; i2++) {
            this.words[i2] = 0;
          }
          this.length += s2;
        }
        return this._strip();
      };
      BN.prototype.ishln = function ishln(bits) {
        assert2(this.negative === 0);
        return this.iushln(bits);
      };
      BN.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert2(typeof bits === "number" && bits >= 0);
        var h2;
        if (hint) {
          h2 = (hint - hint % 26) / 26;
        } else {
          h2 = 0;
        }
        var r2 = bits % 26;
        var s2 = Math.min((bits - r2) / 26, this.length);
        var mask2 = 67108863 ^ 67108863 >>> r2 << r2;
        var maskedWords = extended;
        h2 -= s2;
        h2 = Math.max(0, h2);
        if (maskedWords) {
          for (var i2 = 0; i2 < s2; i2++) {
            maskedWords.words[i2] = this.words[i2];
          }
          maskedWords.length = s2;
        }
        if (s2 === 0) ;
        else if (this.length > s2) {
          this.length -= s2;
          for (i2 = 0; i2 < this.length; i2++) {
            this.words[i2] = this.words[i2 + s2];
          }
        } else {
          this.words[0] = 0;
          this.length = 1;
        }
        var carry = 0;
        for (i2 = this.length - 1; i2 >= 0 && (carry !== 0 || i2 >= h2); i2--) {
          var word = this.words[i2] | 0;
          this.words[i2] = carry << 26 - r2 | word >>> r2;
          carry = word & mask2;
        }
        if (maskedWords && carry !== 0) {
          maskedWords.words[maskedWords.length++] = carry;
        }
        if (this.length === 0) {
          this.words[0] = 0;
          this.length = 1;
        }
        return this._strip();
      };
      BN.prototype.ishrn = function ishrn(bits, hint, extended) {
        assert2(this.negative === 0);
        return this.iushrn(bits, hint, extended);
      };
      BN.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
      };
      BN.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
      };
      BN.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
      };
      BN.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
      };
      BN.prototype.testn = function testn(bit) {
        assert2(typeof bit === "number" && bit >= 0);
        var r2 = bit % 26;
        var s2 = (bit - r2) / 26;
        var q2 = 1 << r2;
        if (this.length <= s2) return false;
        var w2 = this.words[s2];
        return !!(w2 & q2);
      };
      BN.prototype.imaskn = function imaskn(bits) {
        assert2(typeof bits === "number" && bits >= 0);
        var r2 = bits % 26;
        var s2 = (bits - r2) / 26;
        assert2(this.negative === 0, "imaskn works only with positive numbers");
        if (this.length <= s2) {
          return this;
        }
        if (r2 !== 0) {
          s2++;
        }
        this.length = Math.min(s2, this.length);
        if (r2 !== 0) {
          var mask2 = 67108863 ^ 67108863 >>> r2 << r2;
          this.words[this.length - 1] &= mask2;
        }
        return this._strip();
      };
      BN.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
      };
      BN.prototype.iaddn = function iaddn(num) {
        assert2(typeof num === "number");
        assert2(num < 67108864);
        if (num < 0) return this.isubn(-num);
        if (this.negative !== 0) {
          if (this.length === 1 && (this.words[0] | 0) <= num) {
            this.words[0] = num - (this.words[0] | 0);
            this.negative = 0;
            return this;
          }
          this.negative = 0;
          this.isubn(num);
          this.negative = 1;
          return this;
        }
        return this._iaddn(num);
      };
      BN.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num;
        for (var i2 = 0; i2 < this.length && this.words[i2] >= 67108864; i2++) {
          this.words[i2] -= 67108864;
          if (i2 === this.length - 1) {
            this.words[i2 + 1] = 1;
          } else {
            this.words[i2 + 1]++;
          }
        }
        this.length = Math.max(this.length, i2 + 1);
        return this;
      };
      BN.prototype.isubn = function isubn(num) {
        assert2(typeof num === "number");
        assert2(num < 67108864);
        if (num < 0) return this.iaddn(-num);
        if (this.negative !== 0) {
          this.negative = 0;
          this.iaddn(num);
          this.negative = 1;
          return this;
        }
        this.words[0] -= num;
        if (this.length === 1 && this.words[0] < 0) {
          this.words[0] = -this.words[0];
          this.negative = 1;
        } else {
          for (var i2 = 0; i2 < this.length && this.words[i2] < 0; i2++) {
            this.words[i2] += 67108864;
            this.words[i2 + 1] -= 1;
          }
        }
        return this._strip();
      };
      BN.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
      };
      BN.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
      };
      BN.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
      };
      BN.prototype.abs = function abs2() {
        return this.clone().iabs();
      };
      BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i2;
        this._expand(len);
        var w2;
        var carry = 0;
        for (i2 = 0; i2 < num.length; i2++) {
          w2 = (this.words[i2 + shift] | 0) + carry;
          var right = (num.words[i2] | 0) * mul;
          w2 -= right & 67108863;
          carry = (w2 >> 26) - (right / 67108864 | 0);
          this.words[i2 + shift] = w2 & 67108863;
        }
        for (; i2 < this.length - shift; i2++) {
          w2 = (this.words[i2 + shift] | 0) + carry;
          carry = w2 >> 26;
          this.words[i2 + shift] = w2 & 67108863;
        }
        if (carry === 0) return this._strip();
        assert2(carry === -1);
        carry = 0;
        for (i2 = 0; i2 < this.length; i2++) {
          w2 = -(this.words[i2] | 0) + carry;
          carry = w2 >> 26;
          this.words[i2] = w2 & 67108863;
        }
        this.negative = 1;
        return this._strip();
      };
      BN.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a2 = this.clone();
        var b2 = num;
        var bhi = b2.words[b2.length - 1] | 0;
        var bhiBits = this._countBits(bhi);
        shift = 26 - bhiBits;
        if (shift !== 0) {
          b2 = b2.ushln(shift);
          a2.iushln(shift);
          bhi = b2.words[b2.length - 1] | 0;
        }
        var m2 = a2.length - b2.length;
        var q2;
        if (mode !== "mod") {
          q2 = new BN(null);
          q2.length = m2 + 1;
          q2.words = new Array(q2.length);
          for (var i2 = 0; i2 < q2.length; i2++) {
            q2.words[i2] = 0;
          }
        }
        var diff = a2.clone()._ishlnsubmul(b2, 1, m2);
        if (diff.negative === 0) {
          a2 = diff;
          if (q2) {
            q2.words[m2] = 1;
          }
        }
        for (var j2 = m2 - 1; j2 >= 0; j2--) {
          var qj = (a2.words[b2.length + j2] | 0) * 67108864 + (a2.words[b2.length + j2 - 1] | 0);
          qj = Math.min(qj / bhi | 0, 67108863);
          a2._ishlnsubmul(b2, qj, j2);
          while (a2.negative !== 0) {
            qj--;
            a2.negative = 0;
            a2._ishlnsubmul(b2, 1, j2);
            if (!a2.isZero()) {
              a2.negative ^= 1;
            }
          }
          if (q2) {
            q2.words[j2] = qj;
          }
        }
        if (q2) {
          q2._strip();
        }
        a2._strip();
        if (mode !== "div" && shift !== 0) {
          a2.iushrn(shift);
        }
        return {
          div: q2 || null,
          mod: a2
        };
      };
      BN.prototype.divmod = function divmod(num, mode, positive) {
        assert2(!num.isZero());
        if (this.isZero()) {
          return {
            div: new BN(0),
            mod: new BN(0)
          };
        }
        var div, mod, res;
        if (this.negative !== 0 && num.negative === 0) {
          res = this.neg().divmod(num, mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          if (mode !== "div") {
            mod = res.mod.neg();
            if (positive && mod.negative !== 0) {
              mod.iadd(num);
            }
          }
          return {
            div,
            mod
          };
        }
        if (this.negative === 0 && num.negative !== 0) {
          res = this.divmod(num.neg(), mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          return {
            div,
            mod: res.mod
          };
        }
        if ((this.negative & num.negative) !== 0) {
          res = this.neg().divmod(num.neg(), mode);
          if (mode !== "div") {
            mod = res.mod.neg();
            if (positive && mod.negative !== 0) {
              mod.isub(num);
            }
          }
          return {
            div: res.div,
            mod
          };
        }
        if (num.length > this.length || this.cmp(num) < 0) {
          return {
            div: new BN(0),
            mod: this
          };
        }
        if (num.length === 1) {
          if (mode === "div") {
            return {
              div: this.divn(num.words[0]),
              mod: null
            };
          }
          if (mode === "mod") {
            return {
              div: null,
              mod: new BN(this.modrn(num.words[0]))
            };
          }
          return {
            div: this.divn(num.words[0]),
            mod: new BN(this.modrn(num.words[0]))
          };
        }
        return this._wordDiv(num, mode);
      };
      BN.prototype.div = function div(num) {
        return this.divmod(num, "div", false).div;
      };
      BN.prototype.mod = function mod(num) {
        return this.divmod(num, "mod", false).mod;
      };
      BN.prototype.umod = function umod(num) {
        return this.divmod(num, "mod", true).mod;
      };
      BN.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num);
        if (dm.mod.isZero()) return dm.div;
        var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod.cmp(half);
        if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;
        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
      };
      BN.prototype.modrn = function modrn(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert2(num <= 67108863);
        var p2 = (1 << 26) % num;
        var acc = 0;
        for (var i2 = this.length - 1; i2 >= 0; i2--) {
          acc = (p2 * acc + (this.words[i2] | 0)) % num;
        }
        return isNegNum ? -acc : acc;
      };
      BN.prototype.modn = function modn(num) {
        return this.modrn(num);
      };
      BN.prototype.idivn = function idivn(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert2(num <= 67108863);
        var carry = 0;
        for (var i2 = this.length - 1; i2 >= 0; i2--) {
          var w2 = (this.words[i2] | 0) + carry * 67108864;
          this.words[i2] = w2 / num | 0;
          carry = w2 % num;
        }
        this._strip();
        return isNegNum ? this.ineg() : this;
      };
      BN.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
      };
      BN.prototype.egcd = function egcd(p2) {
        assert2(p2.negative === 0);
        assert2(!p2.isZero());
        var x2 = this;
        var y2 = p2.clone();
        if (x2.negative !== 0) {
          x2 = x2.umod(p2);
        } else {
          x2 = x2.clone();
        }
        var A2 = new BN(1);
        var B2 = new BN(0);
        var C2 = new BN(0);
        var D2 = new BN(1);
        var g2 = 0;
        while (x2.isEven() && y2.isEven()) {
          x2.iushrn(1);
          y2.iushrn(1);
          ++g2;
        }
        var yp = y2.clone();
        var xp = x2.clone();
        while (!x2.isZero()) {
          for (var i2 = 0, im = 1; (x2.words[0] & im) === 0 && i2 < 26; ++i2, im <<= 1) ;
          if (i2 > 0) {
            x2.iushrn(i2);
            while (i2-- > 0) {
              if (A2.isOdd() || B2.isOdd()) {
                A2.iadd(yp);
                B2.isub(xp);
              }
              A2.iushrn(1);
              B2.iushrn(1);
            }
          }
          for (var j2 = 0, jm = 1; (y2.words[0] & jm) === 0 && j2 < 26; ++j2, jm <<= 1) ;
          if (j2 > 0) {
            y2.iushrn(j2);
            while (j2-- > 0) {
              if (C2.isOdd() || D2.isOdd()) {
                C2.iadd(yp);
                D2.isub(xp);
              }
              C2.iushrn(1);
              D2.iushrn(1);
            }
          }
          if (x2.cmp(y2) >= 0) {
            x2.isub(y2);
            A2.isub(C2);
            B2.isub(D2);
          } else {
            y2.isub(x2);
            C2.isub(A2);
            D2.isub(B2);
          }
        }
        return {
          a: C2,
          b: D2,
          gcd: y2.iushln(g2)
        };
      };
      BN.prototype._invmp = function _invmp(p2) {
        assert2(p2.negative === 0);
        assert2(!p2.isZero());
        var a2 = this;
        var b2 = p2.clone();
        if (a2.negative !== 0) {
          a2 = a2.umod(p2);
        } else {
          a2 = a2.clone();
        }
        var x1 = new BN(1);
        var x2 = new BN(0);
        var delta = b2.clone();
        while (a2.cmpn(1) > 0 && b2.cmpn(1) > 0) {
          for (var i2 = 0, im = 1; (a2.words[0] & im) === 0 && i2 < 26; ++i2, im <<= 1) ;
          if (i2 > 0) {
            a2.iushrn(i2);
            while (i2-- > 0) {
              if (x1.isOdd()) {
                x1.iadd(delta);
              }
              x1.iushrn(1);
            }
          }
          for (var j2 = 0, jm = 1; (b2.words[0] & jm) === 0 && j2 < 26; ++j2, jm <<= 1) ;
          if (j2 > 0) {
            b2.iushrn(j2);
            while (j2-- > 0) {
              if (x2.isOdd()) {
                x2.iadd(delta);
              }
              x2.iushrn(1);
            }
          }
          if (a2.cmp(b2) >= 0) {
            a2.isub(b2);
            x1.isub(x2);
          } else {
            b2.isub(a2);
            x2.isub(x1);
          }
        }
        var res;
        if (a2.cmpn(1) === 0) {
          res = x1;
        } else {
          res = x2;
        }
        if (res.cmpn(0) < 0) {
          res.iadd(p2);
        }
        return res;
      };
      BN.prototype.gcd = function gcd(num) {
        if (this.isZero()) return num.abs();
        if (num.isZero()) return this.abs();
        var a2 = this.clone();
        var b2 = num.clone();
        a2.negative = 0;
        b2.negative = 0;
        for (var shift = 0; a2.isEven() && b2.isEven(); shift++) {
          a2.iushrn(1);
          b2.iushrn(1);
        }
        do {
          while (a2.isEven()) {
            a2.iushrn(1);
          }
          while (b2.isEven()) {
            b2.iushrn(1);
          }
          var r2 = a2.cmp(b2);
          if (r2 < 0) {
            var t2 = a2;
            a2 = b2;
            b2 = t2;
          } else if (r2 === 0 || b2.cmpn(1) === 0) {
            break;
          }
          a2.isub(b2);
        } while (true);
        return b2.iushln(shift);
      };
      BN.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
      };
      BN.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
      };
      BN.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
      };
      BN.prototype.andln = function andln(num) {
        return this.words[0] & num;
      };
      BN.prototype.bincn = function bincn(bit) {
        assert2(typeof bit === "number");
        var r2 = bit % 26;
        var s2 = (bit - r2) / 26;
        var q2 = 1 << r2;
        if (this.length <= s2) {
          this._expand(s2 + 1);
          this.words[s2] |= q2;
          return this;
        }
        var carry = q2;
        for (var i2 = s2; carry !== 0 && i2 < this.length; i2++) {
          var w2 = this.words[i2] | 0;
          w2 += carry;
          carry = w2 >>> 26;
          w2 &= 67108863;
          this.words[i2] = w2;
        }
        if (carry !== 0) {
          this.words[i2] = carry;
          this.length++;
        }
        return this;
      };
      BN.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
      };
      BN.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative) return -1;
        if (this.negative === 0 && negative) return 1;
        this._strip();
        var res;
        if (this.length > 1) {
          res = 1;
        } else {
          if (negative) {
            num = -num;
          }
          assert2(num <= 67108863, "Number is too big");
          var w2 = this.words[0] | 0;
          res = w2 === num ? 0 : w2 < num ? -1 : 1;
        }
        if (this.negative !== 0) return -res | 0;
        return res;
      };
      BN.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0) return -1;
        if (this.negative === 0 && num.negative !== 0) return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0) return -res | 0;
        return res;
      };
      BN.prototype.ucmp = function ucmp(num) {
        if (this.length > num.length) return 1;
        if (this.length < num.length) return -1;
        var res = 0;
        for (var i2 = this.length - 1; i2 >= 0; i2--) {
          var a2 = this.words[i2] | 0;
          var b2 = num.words[i2] | 0;
          if (a2 === b2) continue;
          if (a2 < b2) {
            res = -1;
          } else if (a2 > b2) {
            res = 1;
          }
          break;
        }
        return res;
      };
      BN.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
      };
      BN.prototype.gt = function gt(num) {
        return this.cmp(num) === 1;
      };
      BN.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
      };
      BN.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
      };
      BN.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
      };
      BN.prototype.lt = function lt(num) {
        return this.cmp(num) === -1;
      };
      BN.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
      };
      BN.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
      };
      BN.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
      };
      BN.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
      };
      BN.red = function red(num) {
        return new Red(num);
      };
      BN.prototype.toRed = function toRed(ctx) {
        assert2(!this.red, "Already a number in reduction context");
        assert2(this.negative === 0, "red works only with positives");
        return ctx.convertTo(this)._forceRed(ctx);
      };
      BN.prototype.fromRed = function fromRed() {
        assert2(this.red, "fromRed works only with numbers in reduction context");
        return this.red.convertFrom(this);
      };
      BN.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
      };
      BN.prototype.forceRed = function forceRed(ctx) {
        assert2(!this.red, "Already a number in reduction context");
        return this._forceRed(ctx);
      };
      BN.prototype.redAdd = function redAdd(num) {
        assert2(this.red, "redAdd works only with red numbers");
        return this.red.add(this, num);
      };
      BN.prototype.redIAdd = function redIAdd(num) {
        assert2(this.red, "redIAdd works only with red numbers");
        return this.red.iadd(this, num);
      };
      BN.prototype.redSub = function redSub(num) {
        assert2(this.red, "redSub works only with red numbers");
        return this.red.sub(this, num);
      };
      BN.prototype.redISub = function redISub(num) {
        assert2(this.red, "redISub works only with red numbers");
        return this.red.isub(this, num);
      };
      BN.prototype.redShl = function redShl(num) {
        assert2(this.red, "redShl works only with red numbers");
        return this.red.shl(this, num);
      };
      BN.prototype.redMul = function redMul(num) {
        assert2(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.mul(this, num);
      };
      BN.prototype.redIMul = function redIMul(num) {
        assert2(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.imul(this, num);
      };
      BN.prototype.redSqr = function redSqr() {
        assert2(this.red, "redSqr works only with red numbers");
        this.red._verify1(this);
        return this.red.sqr(this);
      };
      BN.prototype.redISqr = function redISqr() {
        assert2(this.red, "redISqr works only with red numbers");
        this.red._verify1(this);
        return this.red.isqr(this);
      };
      BN.prototype.redSqrt = function redSqrt() {
        assert2(this.red, "redSqrt works only with red numbers");
        this.red._verify1(this);
        return this.red.sqrt(this);
      };
      BN.prototype.redInvm = function redInvm() {
        assert2(this.red, "redInvm works only with red numbers");
        this.red._verify1(this);
        return this.red.invm(this);
      };
      BN.prototype.redNeg = function redNeg() {
        assert2(this.red, "redNeg works only with red numbers");
        this.red._verify1(this);
        return this.red.neg(this);
      };
      BN.prototype.redPow = function redPow(num) {
        assert2(this.red && !num.red, "redPow(normalNum)");
        this.red._verify1(this);
        return this.red.pow(this, num);
      };
      var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function MPrime(name, p2) {
        this.name = name;
        this.p = new BN(p2, 16);
        this.n = this.p.bitLength();
        this.k = new BN(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
      }
      MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
      };
      MPrime.prototype.ireduce = function ireduce(num) {
        var r2 = num;
        var rlen;
        do {
          this.split(r2, this.tmp);
          r2 = this.imulK(r2);
          r2 = r2.iadd(this.tmp);
          rlen = r2.bitLength();
        } while (rlen > this.n);
        var cmp = rlen < this.n ? -1 : r2.ucmp(this.p);
        if (cmp === 0) {
          r2.words[0] = 0;
          r2.length = 1;
        } else if (cmp > 0) {
          r2.isub(this.p);
        } else {
          if (r2.strip !== void 0) {
            r2.strip();
          } else {
            r2._strip();
          }
        }
        return r2;
      };
      MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
      };
      MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
      };
      function K256() {
        MPrime.call(
          this,
          "k256",
          "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
        );
      }
      inherits(K256, MPrime);
      K256.prototype.split = function split(input, output) {
        var mask2 = 4194303;
        var outLen = Math.min(input.length, 9);
        for (var i2 = 0; i2 < outLen; i2++) {
          output.words[i2] = input.words[i2];
        }
        output.length = outLen;
        if (input.length <= 9) {
          input.words[0] = 0;
          input.length = 1;
          return;
        }
        var prev = input.words[9];
        output.words[output.length++] = prev & mask2;
        for (i2 = 10; i2 < input.length; i2++) {
          var next = input.words[i2] | 0;
          input.words[i2 - 10] = (next & mask2) << 4 | prev >>> 22;
          prev = next;
        }
        prev >>>= 22;
        input.words[i2 - 10] = prev;
        if (prev === 0 && input.length > 10) {
          input.length -= 10;
        } else {
          input.length -= 9;
        }
      };
      K256.prototype.imulK = function imulK(num) {
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2;
        var lo = 0;
        for (var i2 = 0; i2 < num.length; i2++) {
          var w2 = num.words[i2] | 0;
          lo += w2 * 977;
          num.words[i2] = lo & 67108863;
          lo = w2 * 64 + (lo / 67108864 | 0);
        }
        if (num.words[num.length - 1] === 0) {
          num.length--;
          if (num.words[num.length - 1] === 0) {
            num.length--;
          }
        }
        return num;
      };
      function P224() {
        MPrime.call(
          this,
          "p224",
          "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
        );
      }
      inherits(P224, MPrime);
      function P192() {
        MPrime.call(
          this,
          "p192",
          "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
        );
      }
      inherits(P192, MPrime);
      function P25519() {
        MPrime.call(
          this,
          "25519",
          "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
        );
      }
      inherits(P25519, MPrime);
      P25519.prototype.imulK = function imulK(num) {
        var carry = 0;
        for (var i2 = 0; i2 < num.length; i2++) {
          var hi = (num.words[i2] | 0) * 19 + carry;
          var lo = hi & 67108863;
          hi >>>= 26;
          num.words[i2] = lo;
          carry = hi;
        }
        if (carry !== 0) {
          num.words[num.length++] = carry;
        }
        return num;
      };
      BN._prime = function prime(name) {
        if (primes[name]) return primes[name];
        var prime2;
        if (name === "k256") {
          prime2 = new K256();
        } else if (name === "p224") {
          prime2 = new P224();
        } else if (name === "p192") {
          prime2 = new P192();
        } else if (name === "p25519") {
          prime2 = new P25519();
        } else {
          throw new Error("Unknown prime " + name);
        }
        primes[name] = prime2;
        return prime2;
      };
      function Red(m2) {
        if (typeof m2 === "string") {
          var prime = BN._prime(m2);
          this.m = prime.p;
          this.prime = prime;
        } else {
          assert2(m2.gtn(1), "modulus must be greater than 1");
          this.m = m2;
          this.prime = null;
        }
      }
      Red.prototype._verify1 = function _verify1(a2) {
        assert2(a2.negative === 0, "red works only with positives");
        assert2(a2.red, "red works only with red numbers");
      };
      Red.prototype._verify2 = function _verify2(a2, b2) {
        assert2((a2.negative | b2.negative) === 0, "red works only with positives");
        assert2(
          a2.red && a2.red === b2.red,
          "red works only with red numbers"
        );
      };
      Red.prototype.imod = function imod(a2) {
        if (this.prime) return this.prime.ireduce(a2)._forceRed(this);
        move(a2, a2.umod(this.m)._forceRed(this));
        return a2;
      };
      Red.prototype.neg = function neg(a2) {
        if (a2.isZero()) {
          return a2.clone();
        }
        return this.m.sub(a2)._forceRed(this);
      };
      Red.prototype.add = function add(a2, b2) {
        this._verify2(a2, b2);
        var res = a2.add(b2);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res._forceRed(this);
      };
      Red.prototype.iadd = function iadd(a2, b2) {
        this._verify2(a2, b2);
        var res = a2.iadd(b2);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res;
      };
      Red.prototype.sub = function sub(a2, b2) {
        this._verify2(a2, b2);
        var res = a2.sub(b2);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Red.prototype.isub = function isub(a2, b2) {
        this._verify2(a2, b2);
        var res = a2.isub(b2);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res;
      };
      Red.prototype.shl = function shl(a2, num) {
        this._verify1(a2);
        return this.imod(a2.ushln(num));
      };
      Red.prototype.imul = function imul(a2, b2) {
        this._verify2(a2, b2);
        return this.imod(a2.imul(b2));
      };
      Red.prototype.mul = function mul(a2, b2) {
        this._verify2(a2, b2);
        return this.imod(a2.mul(b2));
      };
      Red.prototype.isqr = function isqr(a2) {
        return this.imul(a2, a2.clone());
      };
      Red.prototype.sqr = function sqr(a2) {
        return this.mul(a2, a2);
      };
      Red.prototype.sqrt = function sqrt(a2) {
        if (a2.isZero()) return a2.clone();
        var mod3 = this.m.andln(3);
        assert2(mod3 % 2 === 1);
        if (mod3 === 3) {
          var pow2 = this.m.add(new BN(1)).iushrn(2);
          return this.pow(a2, pow2);
        }
        var q2 = this.m.subn(1);
        var s2 = 0;
        while (!q2.isZero() && q2.andln(1) === 0) {
          s2++;
          q2.iushrn(1);
        }
        assert2(!q2.isZero());
        var one = new BN(1).toRed(this);
        var nOne = one.redNeg();
        var lpow = this.m.subn(1).iushrn(1);
        var z2 = this.m.bitLength();
        z2 = new BN(2 * z2 * z2).toRed(this);
        while (this.pow(z2, lpow).cmp(nOne) !== 0) {
          z2.redIAdd(nOne);
        }
        var c2 = this.pow(z2, q2);
        var r2 = this.pow(a2, q2.addn(1).iushrn(1));
        var t2 = this.pow(a2, q2);
        var m2 = s2;
        while (t2.cmp(one) !== 0) {
          var tmp = t2;
          for (var i2 = 0; tmp.cmp(one) !== 0; i2++) {
            tmp = tmp.redSqr();
          }
          assert2(i2 < m2);
          var b2 = this.pow(c2, new BN(1).iushln(m2 - i2 - 1));
          r2 = r2.redMul(b2);
          c2 = b2.redSqr();
          t2 = t2.redMul(c2);
          m2 = i2;
        }
        return r2;
      };
      Red.prototype.invm = function invm(a2) {
        var inv = a2._invmp(this.m);
        if (inv.negative !== 0) {
          inv.negative = 0;
          return this.imod(inv).redNeg();
        } else {
          return this.imod(inv);
        }
      };
      Red.prototype.pow = function pow2(a2, num) {
        if (num.isZero()) return new BN(1).toRed(this);
        if (num.cmpn(1) === 0) return a2.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN(1).toRed(this);
        wnd[1] = a2;
        for (var i2 = 2; i2 < wnd.length; i2++) {
          wnd[i2] = this.mul(wnd[i2 - 1], a2);
        }
        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;
        if (start === 0) {
          start = 26;
        }
        for (i2 = num.length - 1; i2 >= 0; i2--) {
          var word = num.words[i2];
          for (var j2 = start - 1; j2 >= 0; j2--) {
            var bit = word >> j2 & 1;
            if (res !== wnd[0]) {
              res = this.sqr(res);
            }
            if (bit === 0 && current === 0) {
              currentLen = 0;
              continue;
            }
            current <<= 1;
            current |= bit;
            currentLen++;
            if (currentLen !== windowSize && (i2 !== 0 || j2 !== 0)) continue;
            res = this.mul(res, wnd[current]);
            currentLen = 0;
            current = 0;
          }
          start = 26;
        }
        return res;
      };
      Red.prototype.convertTo = function convertTo(num) {
        var r2 = num.umod(this.m);
        return r2 === num ? r2.clone() : r2;
      };
      Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
      };
      BN.mont = function mont(num) {
        return new Mont(num);
      };
      function Mont(m2) {
        Red.call(this, m2);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) {
          this.shift += 26 - this.shift % 26;
        }
        this.r = new BN(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
      }
      inherits(Mont, Red);
      Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
      };
      Mont.prototype.convertFrom = function convertFrom(num) {
        var r2 = this.imod(num.mul(this.rinv));
        r2.red = null;
        return r2;
      };
      Mont.prototype.imul = function imul(a2, b2) {
        if (a2.isZero() || b2.isZero()) {
          a2.words[0] = 0;
          a2.length = 1;
          return a2;
        }
        var t2 = a2.imul(b2);
        var c2 = t2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u2 = t2.isub(c2).iushrn(this.shift);
        var res = u2;
        if (u2.cmp(this.m) >= 0) {
          res = u2.isub(this.m);
        } else if (u2.cmpn(0) < 0) {
          res = u2.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Mont.prototype.mul = function mul(a2, b2) {
        if (a2.isZero() || b2.isZero()) return new BN(0)._forceRed(this);
        var t2 = a2.mul(b2);
        var c2 = t2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u2 = t2.isub(c2).iushrn(this.shift);
        var res = u2;
        if (u2.cmp(this.m) >= 0) {
          res = u2.isub(this.m);
        } else if (u2.cmpn(0) < 0) {
          res = u2.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Mont.prototype.invm = function invm(a2) {
        var res = this.imod(a2._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
      };
    })(module, bn);
  })(bn$1);
  return bn$1.exports;
}
var error = {};
var constants$1 = {};
var hasRequiredConstants$1;
function requireConstants$1() {
  if (hasRequiredConstants$1) return constants$1;
  hasRequiredConstants$1 = 1;
  Object.defineProperty(constants$1, "__esModule", { value: true });
  constants$1.errorValues = constants$1.standardErrorCodes = void 0;
  constants$1.standardErrorCodes = {
    rpc: {
      invalidInput: -32e3,
      resourceNotFound: -32001,
      resourceUnavailable: -32002,
      transactionRejected: -32003,
      methodNotSupported: -32004,
      limitExceeded: -32005,
      parse: -32700,
      invalidRequest: -32600,
      methodNotFound: -32601,
      invalidParams: -32602,
      internal: -32603
    },
    provider: {
      userRejectedRequest: 4001,
      unauthorized: 4100,
      unsupportedMethod: 4200,
      disconnected: 4900,
      chainDisconnected: 4901,
      unsupportedChain: 4902
    }
  };
  constants$1.errorValues = {
    "-32700": {
      standard: "JSON RPC 2.0",
      message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
      standard: "JSON RPC 2.0",
      message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
      standard: "JSON RPC 2.0",
      message: "The method does not exist / is not available."
    },
    "-32602": {
      standard: "JSON RPC 2.0",
      message: "Invalid method parameter(s)."
    },
    "-32603": {
      standard: "JSON RPC 2.0",
      message: "Internal JSON-RPC error."
    },
    "-32000": {
      standard: "EIP-1474",
      message: "Invalid input."
    },
    "-32001": {
      standard: "EIP-1474",
      message: "Resource not found."
    },
    "-32002": {
      standard: "EIP-1474",
      message: "Resource unavailable."
    },
    "-32003": {
      standard: "EIP-1474",
      message: "Transaction rejected."
    },
    "-32004": {
      standard: "EIP-1474",
      message: "Method not supported."
    },
    "-32005": {
      standard: "EIP-1474",
      message: "Request limit exceeded."
    },
    "4001": {
      standard: "EIP-1193",
      message: "User rejected the request."
    },
    "4100": {
      standard: "EIP-1193",
      message: "The requested account and/or method has not been authorized by the user."
    },
    "4200": {
      standard: "EIP-1193",
      message: "The requested method is not supported by this Ethereum provider."
    },
    "4900": {
      standard: "EIP-1193",
      message: "The provider is disconnected from all chains."
    },
    "4901": {
      standard: "EIP-1193",
      message: "The provider is disconnected from the specified chain."
    },
    "4902": {
      standard: "EIP-3085",
      message: "Unrecognized chain ID."
    }
  };
  return constants$1;
}
var errors$1 = {};
var utils$1 = {};
var hasRequiredUtils$1;
function requireUtils$1() {
  if (hasRequiredUtils$1) return utils$1;
  hasRequiredUtils$1 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serialize = exports.getErrorCode = exports.isValidCode = exports.getMessageFromCode = exports.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    const constants_1 = /* @__PURE__ */ requireConstants$1();
    const FALLBACK_MESSAGE = "Unspecified error message.";
    exports.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
    function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
      if (code && Number.isInteger(code)) {
        const codeString = code.toString();
        if (hasKey(constants_1.errorValues, codeString)) {
          return constants_1.errorValues[codeString].message;
        }
        if (isJsonRpcServerError(code)) {
          return exports.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
      }
      return fallbackMessage;
    }
    exports.getMessageFromCode = getMessageFromCode;
    function isValidCode(code) {
      if (!Number.isInteger(code)) {
        return false;
      }
      const codeString = code.toString();
      if (constants_1.errorValues[codeString]) {
        return true;
      }
      if (isJsonRpcServerError(code)) {
        return true;
      }
      return false;
    }
    exports.isValidCode = isValidCode;
    function getErrorCode(error2) {
      var _a;
      if (typeof error2 === "number") {
        return error2;
      } else if (isErrorWithCode(error2)) {
        return (_a = error2.code) !== null && _a !== void 0 ? _a : error2.errorCode;
      }
      return void 0;
    }
    exports.getErrorCode = getErrorCode;
    function isErrorWithCode(error2) {
      return typeof error2 === "object" && error2 !== null && (typeof error2.code === "number" || typeof error2.errorCode === "number");
    }
    function serialize2(error2, { shouldIncludeStack = false } = {}) {
      const serialized = {};
      if (error2 && typeof error2 === "object" && !Array.isArray(error2) && hasKey(error2, "code") && isValidCode(error2.code)) {
        const _error = error2;
        serialized.code = _error.code;
        if (_error.message && typeof _error.message === "string") {
          serialized.message = _error.message;
          if (hasKey(_error, "data")) {
            serialized.data = _error.data;
          }
        } else {
          serialized.message = getMessageFromCode(serialized.code);
          serialized.data = { originalError: assignOriginalError(error2) };
        }
      } else {
        serialized.code = constants_1.standardErrorCodes.rpc.internal;
        serialized.message = hasStringProperty(error2, "message") ? error2.message : FALLBACK_MESSAGE;
        serialized.data = { originalError: assignOriginalError(error2) };
      }
      if (shouldIncludeStack) {
        serialized.stack = hasStringProperty(error2, "stack") ? error2.stack : void 0;
      }
      return serialized;
    }
    exports.serialize = serialize2;
    function isJsonRpcServerError(code) {
      return code >= -32099 && code <= -32e3;
    }
    function assignOriginalError(error2) {
      if (error2 && typeof error2 === "object" && !Array.isArray(error2)) {
        return Object.assign({}, error2);
      }
      return error2;
    }
    function hasKey(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
    function hasStringProperty(obj, prop) {
      return typeof obj === "object" && obj !== null && prop in obj && typeof obj[prop] === "string";
    }
  })(utils$1);
  return utils$1;
}
var hasRequiredErrors$1;
function requireErrors$1() {
  if (hasRequiredErrors$1) return errors$1;
  hasRequiredErrors$1 = 1;
  Object.defineProperty(errors$1, "__esModule", { value: true });
  errors$1.standardErrors = void 0;
  const constants_1 = /* @__PURE__ */ requireConstants$1();
  const utils_1 = /* @__PURE__ */ requireUtils$1();
  errors$1.standardErrors = {
    rpc: {
      parse: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.parse, arg),
      invalidRequest: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.invalidRequest, arg),
      invalidParams: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.invalidParams, arg),
      methodNotFound: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.methodNotFound, arg),
      internal: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.internal, arg),
      server: (opts) => {
        if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
          throw new Error("Ethereum RPC Server errors must provide single object argument.");
        }
        const { code } = opts;
        if (!Number.isInteger(code) || code > -32005 || code < -32099) {
          throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
        }
        return getEthJsonRpcError(code, opts);
      },
      invalidInput: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.invalidInput, arg),
      resourceNotFound: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.resourceNotFound, arg),
      resourceUnavailable: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.resourceUnavailable, arg),
      transactionRejected: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.transactionRejected, arg),
      methodNotSupported: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.methodNotSupported, arg),
      limitExceeded: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.limitExceeded, arg)
    },
    provider: {
      userRejectedRequest: (arg) => {
        return getEthProviderError(constants_1.standardErrorCodes.provider.userRejectedRequest, arg);
      },
      unauthorized: (arg) => {
        return getEthProviderError(constants_1.standardErrorCodes.provider.unauthorized, arg);
      },
      unsupportedMethod: (arg) => {
        return getEthProviderError(constants_1.standardErrorCodes.provider.unsupportedMethod, arg);
      },
      disconnected: (arg) => {
        return getEthProviderError(constants_1.standardErrorCodes.provider.disconnected, arg);
      },
      chainDisconnected: (arg) => {
        return getEthProviderError(constants_1.standardErrorCodes.provider.chainDisconnected, arg);
      },
      unsupportedChain: (arg) => {
        return getEthProviderError(constants_1.standardErrorCodes.provider.unsupportedChain, arg);
      },
      custom: (opts) => {
        if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
          throw new Error("Ethereum Provider custom errors must provide single object argument.");
        }
        const { code, message, data } = opts;
        if (!message || typeof message !== "string") {
          throw new Error('"message" must be a nonempty string');
        }
        return new EthereumProviderError(code, message, data);
      }
    }
  };
  function getEthJsonRpcError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new EthereumRpcError(code, message || (0, utils_1.getMessageFromCode)(code), data);
  }
  function getEthProviderError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new EthereumProviderError(code, message || (0, utils_1.getMessageFromCode)(code), data);
  }
  function parseOpts(arg) {
    if (arg) {
      if (typeof arg === "string") {
        return [arg];
      } else if (typeof arg === "object" && !Array.isArray(arg)) {
        const { message, data } = arg;
        if (message && typeof message !== "string") {
          throw new Error("Must specify string message.");
        }
        return [message || void 0, data];
      }
    }
    return [];
  }
  class EthereumRpcError extends Error {
    constructor(code, message, data) {
      if (!Number.isInteger(code)) {
        throw new Error('"code" must be an integer.');
      }
      if (!message || typeof message !== "string") {
        throw new Error('"message" must be a nonempty string.');
      }
      super(message);
      this.code = code;
      if (data !== void 0) {
        this.data = data;
      }
    }
  }
  class EthereumProviderError extends EthereumRpcError {
    /**
     * Create an Ethereum Provider JSON-RPC error.
     * `code` must be an integer in the 1000 <= 4999 range.
     */
    constructor(code, message, data) {
      if (!isValidEthProviderCode(code)) {
        throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
      }
      super(code, message, data);
    }
  }
  function isValidEthProviderCode(code) {
    return Number.isInteger(code) && code >= 1e3 && code <= 4999;
  }
  return errors$1;
}
var serialize = {};
var Web3Response = {};
var hasRequiredWeb3Response;
function requireWeb3Response() {
  if (hasRequiredWeb3Response) return Web3Response;
  hasRequiredWeb3Response = 1;
  Object.defineProperty(Web3Response, "__esModule", { value: true });
  Web3Response.isErrorResponse = void 0;
  function isErrorResponse(response) {
    return response.errorMessage !== void 0;
  }
  Web3Response.isErrorResponse = isErrorResponse;
  return Web3Response;
}
var version = {};
var hasRequiredVersion;
function requireVersion() {
  if (hasRequiredVersion) return version;
  hasRequiredVersion = 1;
  Object.defineProperty(version, "__esModule", { value: true });
  version.LIB_VERSION = void 0;
  version.LIB_VERSION = "3.9.3";
  return version;
}
var hasRequiredSerialize;
function requireSerialize() {
  if (hasRequiredSerialize) return serialize;
  hasRequiredSerialize = 1;
  Object.defineProperty(serialize, "__esModule", { value: true });
  serialize.serializeError = void 0;
  const Web3Response_1 = /* @__PURE__ */ requireWeb3Response();
  const version_1 = /* @__PURE__ */ requireVersion();
  const constants_1 = /* @__PURE__ */ requireConstants$1();
  const utils_1 = /* @__PURE__ */ requireUtils$1();
  function serializeError(error2, requestOrMethod) {
    const serialized = (0, utils_1.serialize)(getErrorObject(error2), {
      shouldIncludeStack: true
    });
    const docUrl = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
    docUrl.searchParams.set("version", version_1.LIB_VERSION);
    docUrl.searchParams.set("code", serialized.code.toString());
    const method = getMethod(serialized.data, requestOrMethod);
    if (method) {
      docUrl.searchParams.set("method", method);
    }
    docUrl.searchParams.set("message", serialized.message);
    return Object.assign(Object.assign({}, serialized), { docUrl: docUrl.href });
  }
  serialize.serializeError = serializeError;
  function getErrorObject(error2) {
    if (typeof error2 === "string") {
      return {
        message: error2,
        code: constants_1.standardErrorCodes.rpc.internal
      };
    } else if ((0, Web3Response_1.isErrorResponse)(error2)) {
      return Object.assign(Object.assign({}, error2), { message: error2.errorMessage, code: error2.errorCode, data: { method: error2.method } });
    }
    return error2;
  }
  function getMethod(serializedData, request) {
    const methodInData = serializedData === null || serializedData === void 0 ? void 0 : serializedData.method;
    if (methodInData) {
      return methodInData;
    }
    if (request === void 0) {
      return void 0;
    } else if (typeof request === "string") {
      return request;
    } else if (!Array.isArray(request)) {
      return request.method;
    } else if (request.length > 0) {
      return request[0].method;
    }
    return void 0;
  }
  return serialize;
}
var hasRequiredError;
function requireError() {
  if (hasRequiredError) return error;
  hasRequiredError = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.standardErrors = exports.standardErrorCodes = exports.serializeError = exports.getMessageFromCode = exports.getErrorCode = void 0;
    const constants_1 = /* @__PURE__ */ requireConstants$1();
    Object.defineProperty(exports, "standardErrorCodes", { enumerable: true, get: function() {
      return constants_1.standardErrorCodes;
    } });
    const errors_1 = /* @__PURE__ */ requireErrors$1();
    Object.defineProperty(exports, "standardErrors", { enumerable: true, get: function() {
      return errors_1.standardErrors;
    } });
    const serialize_1 = /* @__PURE__ */ requireSerialize();
    Object.defineProperty(exports, "serializeError", { enumerable: true, get: function() {
      return serialize_1.serializeError;
    } });
    const utils_1 = /* @__PURE__ */ requireUtils$1();
    Object.defineProperty(exports, "getErrorCode", { enumerable: true, get: function() {
      return utils_1.getErrorCode;
    } });
    Object.defineProperty(exports, "getMessageFromCode", { enumerable: true, get: function() {
      return utils_1.getMessageFromCode;
    } });
  })(error);
  return error;
}
var type$2 = {};
var hasRequiredType$1;
function requireType$1() {
  if (hasRequiredType$1) return type$2;
  hasRequiredType$1 = 1;
  Object.defineProperty(type$2, "__esModule", { value: true });
  type$2.ProviderType = type$2.RegExpString = type$2.IntNumber = type$2.BigIntString = type$2.AddressString = type$2.HexString = type$2.OpaqueType = void 0;
  function OpaqueType() {
    return (value) => value;
  }
  type$2.OpaqueType = OpaqueType;
  type$2.HexString = OpaqueType();
  type$2.AddressString = OpaqueType();
  type$2.BigIntString = OpaqueType();
  function IntNumber(num) {
    return Math.floor(num);
  }
  type$2.IntNumber = IntNumber;
  type$2.RegExpString = OpaqueType();
  var ProviderType;
  (function(ProviderType2) {
    ProviderType2["CoinbaseWallet"] = "CoinbaseWallet";
    ProviderType2["MetaMask"] = "MetaMask";
    ProviderType2["Unselected"] = "";
  })(ProviderType || (type$2.ProviderType = ProviderType = {}));
  return type$2;
}
var hasRequiredUtil$1;
function requireUtil$1() {
  if (hasRequiredUtil$1) return util$1;
  hasRequiredUtil$1 = 1;
  var __importDefault2 = util$1 && util$1.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(util$1, "__esModule", { value: true });
  util$1.isMobileWeb = util$1.getLocation = util$1.isInIFrame = util$1.createQrUrl = util$1.getFavicon = util$1.range = util$1.isBigNumber = util$1.ensureParsedJSONObject = util$1.ensureBN = util$1.ensureRegExpString = util$1.ensureIntNumber = util$1.ensureBuffer = util$1.ensureAddressString = util$1.ensureEvenLengthHexString = util$1.ensureHexString = util$1.isHexString = util$1.prepend0x = util$1.strip0x = util$1.has0xPrefix = util$1.hexStringFromIntNumber = util$1.intNumberFromHexString = util$1.bigIntStringFromBN = util$1.hexStringFromBuffer = util$1.hexStringToUint8Array = util$1.uint8ArrayToHex = util$1.randomBytesHex = void 0;
  const bn_js_1 = __importDefault2(requireBn());
  const error_1 = /* @__PURE__ */ requireError();
  const type_1 = /* @__PURE__ */ requireType$1();
  const INT_STRING_REGEX = /^[0-9]*$/;
  const HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;
  function randomBytesHex(length) {
    return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(length)));
  }
  util$1.randomBytesHex = randomBytesHex;
  function uint8ArrayToHex(value) {
    return [...value].map((b2) => b2.toString(16).padStart(2, "0")).join("");
  }
  util$1.uint8ArrayToHex = uint8ArrayToHex;
  function hexStringToUint8Array(hexString) {
    return new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
  }
  util$1.hexStringToUint8Array = hexStringToUint8Array;
  function hexStringFromBuffer(buf, includePrefix = false) {
    const hex2 = buf.toString("hex");
    return (0, type_1.HexString)(includePrefix ? `0x${hex2}` : hex2);
  }
  util$1.hexStringFromBuffer = hexStringFromBuffer;
  function bigIntStringFromBN(bn2) {
    return (0, type_1.BigIntString)(bn2.toString(10));
  }
  util$1.bigIntStringFromBN = bigIntStringFromBN;
  function intNumberFromHexString(hex2) {
    return (0, type_1.IntNumber)(new bn_js_1.default(ensureEvenLengthHexString(hex2, false), 16).toNumber());
  }
  util$1.intNumberFromHexString = intNumberFromHexString;
  function hexStringFromIntNumber(num) {
    return (0, type_1.HexString)(`0x${new bn_js_1.default(num).toString(16)}`);
  }
  util$1.hexStringFromIntNumber = hexStringFromIntNumber;
  function has0xPrefix(str) {
    return str.startsWith("0x") || str.startsWith("0X");
  }
  util$1.has0xPrefix = has0xPrefix;
  function strip0x(hex2) {
    if (has0xPrefix(hex2)) {
      return hex2.slice(2);
    }
    return hex2;
  }
  util$1.strip0x = strip0x;
  function prepend0x(hex2) {
    if (has0xPrefix(hex2)) {
      return `0x${hex2.slice(2)}`;
    }
    return `0x${hex2}`;
  }
  util$1.prepend0x = prepend0x;
  function isHexString(hex2) {
    if (typeof hex2 !== "string") {
      return false;
    }
    const s2 = strip0x(hex2).toLowerCase();
    return HEXADECIMAL_STRING_REGEX.test(s2);
  }
  util$1.isHexString = isHexString;
  function ensureHexString(hex2, includePrefix = false) {
    if (typeof hex2 === "string") {
      const s2 = strip0x(hex2).toLowerCase();
      if (HEXADECIMAL_STRING_REGEX.test(s2)) {
        return (0, type_1.HexString)(includePrefix ? `0x${s2}` : s2);
      }
    }
    throw error_1.standardErrors.rpc.invalidParams(`"${String(hex2)}" is not a hexadecimal string`);
  }
  util$1.ensureHexString = ensureHexString;
  function ensureEvenLengthHexString(hex2, includePrefix = false) {
    let h2 = ensureHexString(hex2, false);
    if (h2.length % 2 === 1) {
      h2 = (0, type_1.HexString)(`0${h2}`);
    }
    return includePrefix ? (0, type_1.HexString)(`0x${h2}`) : h2;
  }
  util$1.ensureEvenLengthHexString = ensureEvenLengthHexString;
  function ensureAddressString(str) {
    if (typeof str === "string") {
      const s2 = strip0x(str).toLowerCase();
      if (isHexString(s2) && s2.length === 40) {
        return (0, type_1.AddressString)(prepend0x(s2));
      }
    }
    throw error_1.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(str)}`);
  }
  util$1.ensureAddressString = ensureAddressString;
  function ensureBuffer(str) {
    if (Buffer.isBuffer(str)) {
      return str;
    }
    if (typeof str === "string") {
      if (isHexString(str)) {
        const s2 = ensureEvenLengthHexString(str, false);
        return Buffer.from(s2, "hex");
      }
      return Buffer.from(str, "utf8");
    }
    throw error_1.standardErrors.rpc.invalidParams(`Not binary data: ${String(str)}`);
  }
  util$1.ensureBuffer = ensureBuffer;
  function ensureIntNumber(num) {
    if (typeof num === "number" && Number.isInteger(num)) {
      return (0, type_1.IntNumber)(num);
    }
    if (typeof num === "string") {
      if (INT_STRING_REGEX.test(num)) {
        return (0, type_1.IntNumber)(Number(num));
      }
      if (isHexString(num)) {
        return (0, type_1.IntNumber)(new bn_js_1.default(ensureEvenLengthHexString(num, false), 16).toNumber());
      }
    }
    throw error_1.standardErrors.rpc.invalidParams(`Not an integer: ${String(num)}`);
  }
  util$1.ensureIntNumber = ensureIntNumber;
  function ensureRegExpString(regExp) {
    if (regExp instanceof RegExp) {
      return (0, type_1.RegExpString)(regExp.toString());
    }
    throw error_1.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(regExp)}`);
  }
  util$1.ensureRegExpString = ensureRegExpString;
  function ensureBN(val) {
    if (val !== null && (bn_js_1.default.isBN(val) || isBigNumber(val))) {
      return new bn_js_1.default(val.toString(10), 10);
    }
    if (typeof val === "number") {
      return new bn_js_1.default(ensureIntNumber(val));
    }
    if (typeof val === "string") {
      if (INT_STRING_REGEX.test(val)) {
        return new bn_js_1.default(val, 10);
      }
      if (isHexString(val)) {
        return new bn_js_1.default(ensureEvenLengthHexString(val, false), 16);
      }
    }
    throw error_1.standardErrors.rpc.invalidParams(`Not an integer: ${String(val)}`);
  }
  util$1.ensureBN = ensureBN;
  function ensureParsedJSONObject(val) {
    if (typeof val === "string") {
      return JSON.parse(val);
    }
    if (typeof val === "object") {
      return val;
    }
    throw error_1.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(val)}`);
  }
  util$1.ensureParsedJSONObject = ensureParsedJSONObject;
  function isBigNumber(val) {
    if (val == null || typeof val.constructor !== "function") {
      return false;
    }
    const { constructor } = val;
    return typeof constructor.config === "function" && typeof constructor.EUCLID === "number";
  }
  util$1.isBigNumber = isBigNumber;
  function range2(start, stop) {
    return Array.from({ length: stop - start }, (_2, i2) => start + i2);
  }
  util$1.range = range2;
  function getFavicon() {
    const el = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
    const { protocol, host } = document.location;
    const href = el ? el.getAttribute("href") : null;
    if (!href || href.startsWith("javascript:") || href.startsWith("vbscript:")) {
      return null;
    }
    if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("data:")) {
      return href;
    }
    if (href.startsWith("//")) {
      return protocol + href;
    }
    return `${protocol}//${host}${href}`;
  }
  util$1.getFavicon = getFavicon;
  function createQrUrl(sessionId, sessionSecret, serverUrl, isParentConnection, version2, chainId) {
    const sessionIdKey = isParentConnection ? "parent-id" : "id";
    const query = new URLSearchParams({
      [sessionIdKey]: sessionId,
      secret: sessionSecret,
      server: serverUrl,
      v: version2,
      chainId: chainId.toString()
    }).toString();
    const qrUrl = `${serverUrl}/#/link?${query}`;
    return qrUrl;
  }
  util$1.createQrUrl = createQrUrl;
  function isInIFrame() {
    try {
      return window.frameElement !== null;
    } catch (e2) {
      return false;
    }
  }
  util$1.isInIFrame = isInIFrame;
  function getLocation() {
    try {
      if (isInIFrame() && window.top) {
        return window.top.location;
      }
      return window.location;
    } catch (e2) {
      return window.location;
    }
  }
  util$1.getLocation = getLocation;
  function isMobileWeb() {
    var _a;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent);
  }
  util$1.isMobileWeb = isMobileWeb;
  return util$1;
}
var ScopedLocalStorage = {};
var hasRequiredScopedLocalStorage;
function requireScopedLocalStorage() {
  if (hasRequiredScopedLocalStorage) return ScopedLocalStorage;
  hasRequiredScopedLocalStorage = 1;
  Object.defineProperty(ScopedLocalStorage, "__esModule", { value: true });
  ScopedLocalStorage.ScopedLocalStorage = void 0;
  let ScopedLocalStorage$1 = class ScopedLocalStorage {
    // eslint-disable-next-line no-useless-constructor
    constructor(scope) {
      this.scope = scope;
    }
    setItem(key, value) {
      localStorage.setItem(this.scopedKey(key), value);
    }
    getItem(key) {
      return localStorage.getItem(this.scopedKey(key));
    }
    removeItem(key) {
      localStorage.removeItem(this.scopedKey(key));
    }
    clear() {
      const prefix = this.scopedKey("");
      const keysToRemove = [];
      for (let i2 = 0; i2 < localStorage.length; i2++) {
        const key = localStorage.key(i2);
        if (typeof key === "string" && key.startsWith(prefix)) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((key) => localStorage.removeItem(key));
    }
    scopedKey(key) {
      return `${this.scope}:${key}`;
    }
  };
  ScopedLocalStorage.ScopedLocalStorage = ScopedLocalStorage$1;
  return ScopedLocalStorage;
}
var CoinbaseWalletProvider = {};
var MobileRelay = {};
var WalletLinkRelay = {};
var DiagnosticLogger = {};
var hasRequiredDiagnosticLogger;
function requireDiagnosticLogger() {
  if (hasRequiredDiagnosticLogger) return DiagnosticLogger;
  hasRequiredDiagnosticLogger = 1;
  Object.defineProperty(DiagnosticLogger, "__esModule", { value: true });
  DiagnosticLogger.EVENTS = void 0;
  DiagnosticLogger.EVENTS = {
    STARTED_CONNECTING: "walletlink_sdk.started.connecting",
    CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
    DISCONNECTED: "walletlink_sdk.disconnected",
    METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
    LINKED: "walletlink_sdk.linked",
    FAILURE: "walletlink_sdk.generic_failure",
    SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
    ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
    SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
    UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
    SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
    GENERAL_ERROR: "walletlink_sdk.general_error",
    WEB3_REQUEST: "walletlink_sdk.web3.request",
    WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
    WEB3_RESPONSE: "walletlink_sdk.web3.response",
    METHOD_NOT_IMPLEMENTED: "walletlink_sdk.method_not_implemented",
    UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
  };
  return DiagnosticLogger;
}
var RelayAbstract = {};
var hasRequiredRelayAbstract;
function requireRelayAbstract() {
  if (hasRequiredRelayAbstract) return RelayAbstract;
  hasRequiredRelayAbstract = 1;
  Object.defineProperty(RelayAbstract, "__esModule", { value: true });
  RelayAbstract.RelayAbstract = RelayAbstract.APP_VERSION_KEY = RelayAbstract.LOCAL_STORAGE_ADDRESSES_KEY = RelayAbstract.WALLET_USER_NAME_KEY = void 0;
  const error_1 = /* @__PURE__ */ requireError();
  RelayAbstract.WALLET_USER_NAME_KEY = "walletUsername";
  RelayAbstract.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
  RelayAbstract.APP_VERSION_KEY = "AppVersion";
  let RelayAbstract$1 = class RelayAbstract {
    async makeEthereumJSONRPCRequest(request, jsonRpcUrl) {
      if (!jsonRpcUrl)
        throw new Error("Error: No jsonRpcUrl provided");
      return window.fetch(jsonRpcUrl, {
        method: "POST",
        body: JSON.stringify(request),
        mode: "cors",
        headers: { "Content-Type": "application/json" }
      }).then((res) => res.json()).then((json2) => {
        if (!json2) {
          throw error_1.standardErrors.rpc.parse({});
        }
        const response = json2;
        const { error: error2 } = response;
        if (error2) {
          throw (0, error_1.serializeError)(error2, request.method);
        }
        return response;
      });
    }
  };
  RelayAbstract.RelayAbstract = RelayAbstract$1;
  return RelayAbstract;
}
var Session = {};
var sha_js = { exports: {} };
var safeBuffer = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var hasRequiredSafeBuffer;
function requireSafeBuffer() {
  if (hasRequiredSafeBuffer) return safeBuffer.exports;
  hasRequiredSafeBuffer = 1;
  (function(module, exports) {
    var buffer = requireBuffer();
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size2, fill, encoding) {
      if (typeof size2 !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size2);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size2) {
      if (typeof size2 !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size2);
    };
    SafeBuffer.allocUnsafeSlow = function(size2) {
      if (typeof size2 !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size2);
    };
  })(safeBuffer, safeBuffer.exports);
  return safeBuffer.exports;
}
var isarray;
var hasRequiredIsarray;
function requireIsarray() {
  if (hasRequiredIsarray) return isarray;
  hasRequiredIsarray = 1;
  var toString = {}.toString;
  isarray = Array.isArray || function(arr) {
    return toString.call(arr) == "[object Array]";
  };
  return isarray;
}
var type$1;
var hasRequiredType;
function requireType() {
  if (hasRequiredType) return type$1;
  hasRequiredType = 1;
  type$1 = TypeError;
  return type$1;
}
var esObjectAtoms;
var hasRequiredEsObjectAtoms;
function requireEsObjectAtoms() {
  if (hasRequiredEsObjectAtoms) return esObjectAtoms;
  hasRequiredEsObjectAtoms = 1;
  esObjectAtoms = Object;
  return esObjectAtoms;
}
var esErrors;
var hasRequiredEsErrors;
function requireEsErrors() {
  if (hasRequiredEsErrors) return esErrors;
  hasRequiredEsErrors = 1;
  esErrors = Error;
  return esErrors;
}
var _eval;
var hasRequired_eval;
function require_eval() {
  if (hasRequired_eval) return _eval;
  hasRequired_eval = 1;
  _eval = EvalError;
  return _eval;
}
var range$1;
var hasRequiredRange$1;
function requireRange$1() {
  if (hasRequiredRange$1) return range$1;
  hasRequiredRange$1 = 1;
  range$1 = RangeError;
  return range$1;
}
var ref;
var hasRequiredRef;
function requireRef() {
  if (hasRequiredRef) return ref;
  hasRequiredRef = 1;
  ref = ReferenceError;
  return ref;
}
var syntax;
var hasRequiredSyntax;
function requireSyntax() {
  if (hasRequiredSyntax) return syntax;
  hasRequiredSyntax = 1;
  syntax = SyntaxError;
  return syntax;
}
var uri;
var hasRequiredUri;
function requireUri() {
  if (hasRequiredUri) return uri;
  hasRequiredUri = 1;
  uri = URIError;
  return uri;
}
var abs;
var hasRequiredAbs;
function requireAbs() {
  if (hasRequiredAbs) return abs;
  hasRequiredAbs = 1;
  abs = Math.abs;
  return abs;
}
var floor;
var hasRequiredFloor;
function requireFloor() {
  if (hasRequiredFloor) return floor;
  hasRequiredFloor = 1;
  floor = Math.floor;
  return floor;
}
var max$1;
var hasRequiredMax;
function requireMax() {
  if (hasRequiredMax) return max$1;
  hasRequiredMax = 1;
  max$1 = Math.max;
  return max$1;
}
var min$1;
var hasRequiredMin;
function requireMin() {
  if (hasRequiredMin) return min$1;
  hasRequiredMin = 1;
  min$1 = Math.min;
  return min$1;
}
var pow;
var hasRequiredPow;
function requirePow() {
  if (hasRequiredPow) return pow;
  hasRequiredPow = 1;
  pow = Math.pow;
  return pow;
}
var round;
var hasRequiredRound;
function requireRound() {
  if (hasRequiredRound) return round;
  hasRequiredRound = 1;
  round = Math.round;
  return round;
}
var _isNaN;
var hasRequired_isNaN;
function require_isNaN() {
  if (hasRequired_isNaN) return _isNaN;
  hasRequired_isNaN = 1;
  _isNaN = Number.isNaN || function isNaN2(a2) {
    return a2 !== a2;
  };
  return _isNaN;
}
var sign;
var hasRequiredSign;
function requireSign() {
  if (hasRequiredSign) return sign;
  hasRequiredSign = 1;
  var $isNaN = /* @__PURE__ */ require_isNaN();
  sign = function sign2(number2) {
    if ($isNaN(number2) || number2 === 0) {
      return number2;
    }
    return number2 < 0 ? -1 : 1;
  };
  return sign;
}
var gOPD;
var hasRequiredGOPD;
function requireGOPD() {
  if (hasRequiredGOPD) return gOPD;
  hasRequiredGOPD = 1;
  gOPD = Object.getOwnPropertyDescriptor;
  return gOPD;
}
var gopd;
var hasRequiredGopd;
function requireGopd() {
  if (hasRequiredGopd) return gopd;
  hasRequiredGopd = 1;
  var $gOPD = /* @__PURE__ */ requireGOPD();
  if ($gOPD) {
    try {
      $gOPD([], "length");
    } catch (e2) {
      $gOPD = null;
    }
  }
  gopd = $gOPD;
  return gopd;
}
var esDefineProperty;
var hasRequiredEsDefineProperty;
function requireEsDefineProperty() {
  if (hasRequiredEsDefineProperty) return esDefineProperty;
  hasRequiredEsDefineProperty = 1;
  var $defineProperty = Object.defineProperty || false;
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", { value: 1 });
    } catch (e2) {
      $defineProperty = false;
    }
  }
  esDefineProperty = $defineProperty;
  return esDefineProperty;
}
var shams$1;
var hasRequiredShams$1;
function requireShams$1() {
  if (hasRequiredShams$1) return shams$1;
  hasRequiredShams$1 = 1;
  shams$1 = function hasSymbols2() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
      return false;
    }
    if (typeof Symbol.iterator === "symbol") {
      return true;
    }
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") {
      return false;
    }
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
      return false;
    }
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
      return false;
    }
    var symVal = 42;
    obj[sym] = symVal;
    for (var _2 in obj) {
      return false;
    }
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var descriptor = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(obj, sym)
      );
      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
  return shams$1;
}
var hasSymbols;
var hasRequiredHasSymbols;
function requireHasSymbols() {
  if (hasRequiredHasSymbols) return hasSymbols;
  hasRequiredHasSymbols = 1;
  var origSymbol = typeof Symbol !== "undefined" && Symbol;
  var hasSymbolSham = requireShams$1();
  hasSymbols = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") {
      return false;
    }
    if (typeof Symbol !== "function") {
      return false;
    }
    if (typeof origSymbol("foo") !== "symbol") {
      return false;
    }
    if (typeof Symbol("bar") !== "symbol") {
      return false;
    }
    return hasSymbolSham();
  };
  return hasSymbols;
}
var Reflect_getPrototypeOf;
var hasRequiredReflect_getPrototypeOf;
function requireReflect_getPrototypeOf() {
  if (hasRequiredReflect_getPrototypeOf) return Reflect_getPrototypeOf;
  hasRequiredReflect_getPrototypeOf = 1;
  Reflect_getPrototypeOf = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  return Reflect_getPrototypeOf;
}
var Object_getPrototypeOf;
var hasRequiredObject_getPrototypeOf;
function requireObject_getPrototypeOf() {
  if (hasRequiredObject_getPrototypeOf) return Object_getPrototypeOf;
  hasRequiredObject_getPrototypeOf = 1;
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  Object_getPrototypeOf = $Object.getPrototypeOf || null;
  return Object_getPrototypeOf;
}
var implementation;
var hasRequiredImplementation;
function requireImplementation() {
  if (hasRequiredImplementation) return implementation;
  hasRequiredImplementation = 1;
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var toStr = Object.prototype.toString;
  var max2 = Math.max;
  var funcType = "[object Function]";
  var concatty = function concatty2(a2, b2) {
    var arr = [];
    for (var i2 = 0; i2 < a2.length; i2 += 1) {
      arr[i2] = a2[i2];
    }
    for (var j2 = 0; j2 < b2.length; j2 += 1) {
      arr[j2 + a2.length] = b2[j2];
    }
    return arr;
  };
  var slicy = function slicy2(arrLike, offset) {
    var arr = [];
    for (var i2 = offset, j2 = 0; i2 < arrLike.length; i2 += 1, j2 += 1) {
      arr[j2] = arrLike[i2];
    }
    return arr;
  };
  var joiny = function(arr, joiner) {
    var str = "";
    for (var i2 = 0; i2 < arr.length; i2 += 1) {
      str += arr[i2];
      if (i2 + 1 < arr.length) {
        str += joiner;
      }
    }
    return str;
  };
  implementation = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr.apply(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
      if (this instanceof bound) {
        var result = target.apply(
          this,
          concatty(args, arguments)
        );
        if (Object(result) === result) {
          return result;
        }
        return this;
      }
      return target.apply(
        that,
        concatty(args, arguments)
      );
    };
    var boundLength = max2(0, target.length - args.length);
    var boundArgs = [];
    for (var i2 = 0; i2 < boundLength; i2++) {
      boundArgs[i2] = "$" + i2;
    }
    bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
      var Empty = function Empty2() {
      };
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }
    return bound;
  };
  return implementation;
}
var functionBind;
var hasRequiredFunctionBind;
function requireFunctionBind() {
  if (hasRequiredFunctionBind) return functionBind;
  hasRequiredFunctionBind = 1;
  var implementation2 = requireImplementation();
  functionBind = Function.prototype.bind || implementation2;
  return functionBind;
}
var functionCall;
var hasRequiredFunctionCall;
function requireFunctionCall() {
  if (hasRequiredFunctionCall) return functionCall;
  hasRequiredFunctionCall = 1;
  functionCall = Function.prototype.call;
  return functionCall;
}
var functionApply;
var hasRequiredFunctionApply;
function requireFunctionApply() {
  if (hasRequiredFunctionApply) return functionApply;
  hasRequiredFunctionApply = 1;
  functionApply = Function.prototype.apply;
  return functionApply;
}
var reflectApply;
var hasRequiredReflectApply;
function requireReflectApply() {
  if (hasRequiredReflectApply) return reflectApply;
  hasRequiredReflectApply = 1;
  reflectApply = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  return reflectApply;
}
var actualApply;
var hasRequiredActualApply;
function requireActualApply() {
  if (hasRequiredActualApply) return actualApply;
  hasRequiredActualApply = 1;
  var bind = requireFunctionBind();
  var $apply = requireFunctionApply();
  var $call = requireFunctionCall();
  var $reflectApply = requireReflectApply();
  actualApply = $reflectApply || bind.call($call, $apply);
  return actualApply;
}
var callBindApplyHelpers;
var hasRequiredCallBindApplyHelpers;
function requireCallBindApplyHelpers() {
  if (hasRequiredCallBindApplyHelpers) return callBindApplyHelpers;
  hasRequiredCallBindApplyHelpers = 1;
  var bind = requireFunctionBind();
  var $TypeError = /* @__PURE__ */ requireType();
  var $call = requireFunctionCall();
  var $actualApply = requireActualApply();
  callBindApplyHelpers = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== "function") {
      throw new $TypeError("a function is required");
    }
    return $actualApply(bind, $call, args);
  };
  return callBindApplyHelpers;
}
var get;
var hasRequiredGet;
function requireGet() {
  if (hasRequiredGet) return get;
  hasRequiredGet = 1;
  var callBind2 = requireCallBindApplyHelpers();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var hasProtoAccessor;
  try {
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (e2) {
    if (!e2 || typeof e2 !== "object" || !("code" in e2) || e2.code !== "ERR_PROTO_ACCESS") {
      throw e2;
    }
  }
  var desc = !!hasProtoAccessor && gOPD2 && gOPD2(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  );
  var $Object = Object;
  var $getPrototypeOf = $Object.getPrototypeOf;
  get = desc && typeof desc.get === "function" ? callBind2([desc.get]) : typeof $getPrototypeOf === "function" ? (
    /** @type {import('./get')} */
    function getDunder(value) {
      return $getPrototypeOf(value == null ? value : $Object(value));
    }
  ) : false;
  return get;
}
var getProto;
var hasRequiredGetProto;
function requireGetProto() {
  if (hasRequiredGetProto) return getProto;
  hasRequiredGetProto = 1;
  var reflectGetProto = requireReflect_getPrototypeOf();
  var originalGetProto = requireObject_getPrototypeOf();
  var getDunderProto = /* @__PURE__ */ requireGet();
  getProto = reflectGetProto ? function getProto2(O2) {
    return reflectGetProto(O2);
  } : originalGetProto ? function getProto2(O2) {
    if (!O2 || typeof O2 !== "object" && typeof O2 !== "function") {
      throw new TypeError("getProto: not an object");
    }
    return originalGetProto(O2);
  } : getDunderProto ? function getProto2(O2) {
    return getDunderProto(O2);
  } : null;
  return getProto;
}
var hasown;
var hasRequiredHasown;
function requireHasown() {
  if (hasRequiredHasown) return hasown;
  hasRequiredHasown = 1;
  var call = Function.prototype.call;
  var $hasOwn = Object.prototype.hasOwnProperty;
  var bind = requireFunctionBind();
  hasown = bind.call(call, $hasOwn);
  return hasown;
}
var getIntrinsic;
var hasRequiredGetIntrinsic;
function requireGetIntrinsic() {
  if (hasRequiredGetIntrinsic) return getIntrinsic;
  hasRequiredGetIntrinsic = 1;
  var undefined$1;
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  var $Error = /* @__PURE__ */ requireEsErrors();
  var $EvalError = /* @__PURE__ */ require_eval();
  var $RangeError = /* @__PURE__ */ requireRange$1();
  var $ReferenceError = /* @__PURE__ */ requireRef();
  var $SyntaxError = /* @__PURE__ */ requireSyntax();
  var $TypeError = /* @__PURE__ */ requireType();
  var $URIError = /* @__PURE__ */ requireUri();
  var abs2 = /* @__PURE__ */ requireAbs();
  var floor2 = /* @__PURE__ */ requireFloor();
  var max2 = /* @__PURE__ */ requireMax();
  var min2 = /* @__PURE__ */ requireMin();
  var pow2 = /* @__PURE__ */ requirePow();
  var round2 = /* @__PURE__ */ requireRound();
  var sign2 = /* @__PURE__ */ requireSign();
  var $Function = Function;
  var getEvalledConstructor = function(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e2) {
    }
  };
  var $gOPD = /* @__PURE__ */ requireGopd();
  var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
  var throwTypeError = function() {
    throw new $TypeError();
  };
  var ThrowTypeError = $gOPD ? (function() {
    try {
      arguments.callee;
      return throwTypeError;
    } catch (calleeThrows) {
      try {
        return $gOPD(arguments, "callee").get;
      } catch (gOPDthrows) {
        return throwTypeError;
      }
    }
  })() : throwTypeError;
  var hasSymbols2 = requireHasSymbols()();
  var getProto2 = requireGetProto();
  var $ObjectGPO = requireObject_getPrototypeOf();
  var $ReflectGPO = requireReflect_getPrototypeOf();
  var $apply = requireFunctionApply();
  var $call = requireFunctionCall();
  var needsEval = {};
  var TypedArray = typeof Uint8Array === "undefined" || !getProto2 ? undefined$1 : getProto2(Uint8Array);
  var INTRINSICS = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2([][Symbol.iterator]()) : undefined$1,
    "%AsyncFromSyncIteratorPrototype%": undefined$1,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": $Error,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": $EvalError,
    "%Float16Array%": typeof Float16Array === "undefined" ? undefined$1 : Float16Array,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(getProto2([][Symbol.iterator]())) : undefined$1,
    "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
    "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": $Object,
    "%Object.getOwnPropertyDescriptor%": $gOPD,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
    "%RangeError%": $RangeError,
    "%ReferenceError%": $ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(""[Symbol.iterator]()) : undefined$1,
    "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
    "%URIError%": $URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet,
    "%Function.prototype.call%": $call,
    "%Function.prototype.apply%": $apply,
    "%Object.defineProperty%": $defineProperty,
    "%Object.getPrototypeOf%": $ObjectGPO,
    "%Math.abs%": abs2,
    "%Math.floor%": floor2,
    "%Math.max%": max2,
    "%Math.min%": min2,
    "%Math.pow%": pow2,
    "%Math.round%": round2,
    "%Math.sign%": sign2,
    "%Reflect.getPrototypeOf%": $ReflectGPO
  };
  if (getProto2) {
    try {
      null.error;
    } catch (e2) {
      var errorProto = getProto2(getProto2(e2));
      INTRINSICS["%Error.prototype%"] = errorProto;
    }
  }
  var doEval = function doEval2(name) {
    var value;
    if (name === "%AsyncFunction%") {
      value = getEvalledConstructor("async function () {}");
    } else if (name === "%GeneratorFunction%") {
      value = getEvalledConstructor("function* () {}");
    } else if (name === "%AsyncGeneratorFunction%") {
      value = getEvalledConstructor("async function* () {}");
    } else if (name === "%AsyncGenerator%") {
      var fn = doEval2("%AsyncGeneratorFunction%");
      if (fn) {
        value = fn.prototype;
      }
    } else if (name === "%AsyncIteratorPrototype%") {
      var gen = doEval2("%AsyncGenerator%");
      if (gen && getProto2) {
        value = getProto2(gen.prototype);
      }
    }
    INTRINSICS[name] = value;
    return value;
  };
  var LEGACY_ALIASES = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  };
  var bind = requireFunctionBind();
  var hasOwn = /* @__PURE__ */ requireHasown();
  var $concat = bind.call($call, Array.prototype.concat);
  var $spliceApply = bind.call($apply, Array.prototype.splice);
  var $replace = bind.call($call, String.prototype.replace);
  var $strSlice = bind.call($call, String.prototype.slice);
  var $exec = bind.call($call, RegExp.prototype.exec);
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = function stringToPath2(string2) {
    var first = $strSlice(string2, 0, 1);
    var last = $strSlice(string2, -1);
    if (first === "%" && last !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    } else if (last === "%" && first !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    }
    var result = [];
    $replace(string2, rePropName, function(match, number2, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number2 || match;
    });
    return result;
  };
  var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
      var value = INTRINSICS[intrinsicName];
      if (value === needsEval) {
        value = doEval(intrinsicName);
      }
      if (typeof value === "undefined" && !allowMissing) {
        throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
      }
      return {
        alias,
        name: intrinsicName,
        value
      };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
  };
  getIntrinsic = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) {
      throw new $TypeError("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof allowMissing !== "boolean") {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
      throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat([0, 1], alias));
    }
    for (var i2 = 1, isOwn = true; i2 < parts.length; i2 += 1) {
      var part = parts[i2];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
        throw new $SyntaxError("property names with quotes must have matching quotes");
      }
      if (part === "constructor" || !isOwn) {
        skipFurtherCaching = true;
      }
      intrinsicBaseName += "." + part;
      intrinsicRealName = "%" + intrinsicBaseName + "%";
      if (hasOwn(INTRINSICS, intrinsicRealName)) {
        value = INTRINSICS[intrinsicRealName];
      } else if (value != null) {
        if (!(part in value)) {
          if (!allowMissing) {
            throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
          }
          return void undefined$1;
        }
        if ($gOPD && i2 + 1 >= parts.length) {
          var desc = $gOPD(value, part);
          isOwn = !!desc;
          if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
            value = desc.get;
          } else {
            value = value[part];
          }
        } else {
          isOwn = hasOwn(value, part);
          value = value[part];
        }
        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value;
        }
      }
    }
    return value;
  };
  return getIntrinsic;
}
var callBound;
var hasRequiredCallBound;
function requireCallBound() {
  if (hasRequiredCallBound) return callBound;
  hasRequiredCallBound = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBindBasic = requireCallBindApplyHelpers();
  var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
  callBound = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      GetIntrinsic(name, !!allowMissing)
    );
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
      return callBindBasic(
        /** @type {const} */
        [intrinsic]
      );
    }
    return intrinsic;
  };
  return callBound;
}
var isCallable;
var hasRequiredIsCallable;
function requireIsCallable() {
  if (hasRequiredIsCallable) return isCallable;
  hasRequiredIsCallable = 1;
  var fnToStr = Function.prototype.toString;
  var reflectApply2 = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
  var badArrayLike;
  var isCallableMarker;
  if (typeof reflectApply2 === "function" && typeof Object.defineProperty === "function") {
    try {
      badArrayLike = Object.defineProperty({}, "length", {
        get: function() {
          throw isCallableMarker;
        }
      });
      isCallableMarker = {};
      reflectApply2(function() {
        throw 42;
      }, null, badArrayLike);
    } catch (_2) {
      if (_2 !== isCallableMarker) {
        reflectApply2 = null;
      }
    }
  } else {
    reflectApply2 = null;
  }
  var constructorRegex = /^\s*class\b/;
  var isES6ClassFn = function isES6ClassFunction(value) {
    try {
      var fnStr = fnToStr.call(value);
      return constructorRegex.test(fnStr);
    } catch (e2) {
      return false;
    }
  };
  var tryFunctionObject = function tryFunctionToStr(value) {
    try {
      if (isES6ClassFn(value)) {
        return false;
      }
      fnToStr.call(value);
      return true;
    } catch (e2) {
      return false;
    }
  };
  var toStr = Object.prototype.toString;
  var objectClass = "[object Object]";
  var fnClass = "[object Function]";
  var genClass = "[object GeneratorFunction]";
  var ddaClass = "[object HTMLAllCollection]";
  var ddaClass2 = "[object HTML document.all class]";
  var ddaClass3 = "[object HTMLCollection]";
  var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
  var isIE68 = !(0 in [,]);
  var isDDA = function isDocumentDotAll() {
    return false;
  };
  if (typeof document === "object") {
    var all = document.all;
    if (toStr.call(all) === toStr.call(document.all)) {
      isDDA = function isDocumentDotAll2(value) {
        if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
          try {
            var str = toStr.call(value);
            return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
          } catch (e2) {
          }
        }
        return false;
      };
    }
  }
  isCallable = reflectApply2 ? function isCallable2(value) {
    if (isDDA(value)) {
      return true;
    }
    if (!value) {
      return false;
    }
    if (typeof value !== "function" && typeof value !== "object") {
      return false;
    }
    try {
      reflectApply2(value, null, badArrayLike);
    } catch (e2) {
      if (e2 !== isCallableMarker) {
        return false;
      }
    }
    return !isES6ClassFn(value) && tryFunctionObject(value);
  } : function isCallable2(value) {
    if (isDDA(value)) {
      return true;
    }
    if (!value) {
      return false;
    }
    if (typeof value !== "function" && typeof value !== "object") {
      return false;
    }
    if (hasToStringTag) {
      return tryFunctionObject(value);
    }
    if (isES6ClassFn(value)) {
      return false;
    }
    var strClass = toStr.call(value);
    if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
      return false;
    }
    return tryFunctionObject(value);
  };
  return isCallable;
}
var forEach;
var hasRequiredForEach;
function requireForEach() {
  if (hasRequiredForEach) return forEach;
  hasRequiredForEach = 1;
  var isCallable2 = requireIsCallable();
  var toStr = Object.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var forEachArray = function forEachArray2(array2, iterator, receiver) {
    for (var i2 = 0, len = array2.length; i2 < len; i2++) {
      if (hasOwnProperty.call(array2, i2)) {
        if (receiver == null) {
          iterator(array2[i2], i2, array2);
        } else {
          iterator.call(receiver, array2[i2], i2, array2);
        }
      }
    }
  };
  var forEachString = function forEachString2(string2, iterator, receiver) {
    for (var i2 = 0, len = string2.length; i2 < len; i2++) {
      if (receiver == null) {
        iterator(string2.charAt(i2), i2, string2);
      } else {
        iterator.call(receiver, string2.charAt(i2), i2, string2);
      }
    }
  };
  var forEachObject = function forEachObject2(object2, iterator, receiver) {
    for (var k2 in object2) {
      if (hasOwnProperty.call(object2, k2)) {
        if (receiver == null) {
          iterator(object2[k2], k2, object2);
        } else {
          iterator.call(receiver, object2[k2], k2, object2);
        }
      }
    }
  };
  function isArray(x2) {
    return toStr.call(x2) === "[object Array]";
  }
  forEach = function forEach2(list, iterator, thisArg) {
    if (!isCallable2(iterator)) {
      throw new TypeError("iterator must be a function");
    }
    var receiver;
    if (arguments.length >= 3) {
      receiver = thisArg;
    }
    if (isArray(list)) {
      forEachArray(list, iterator, receiver);
    } else if (typeof list === "string") {
      forEachString(list, iterator, receiver);
    } else {
      forEachObject(list, iterator, receiver);
    }
  };
  return forEach;
}
var possibleTypedArrayNames;
var hasRequiredPossibleTypedArrayNames;
function requirePossibleTypedArrayNames() {
  if (hasRequiredPossibleTypedArrayNames) return possibleTypedArrayNames;
  hasRequiredPossibleTypedArrayNames = 1;
  possibleTypedArrayNames = [
    "Float16Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array"
  ];
  return possibleTypedArrayNames;
}
var availableTypedArrays;
var hasRequiredAvailableTypedArrays;
function requireAvailableTypedArrays() {
  if (hasRequiredAvailableTypedArrays) return availableTypedArrays;
  hasRequiredAvailableTypedArrays = 1;
  var possibleNames = /* @__PURE__ */ requirePossibleTypedArrayNames();
  var g2 = typeof globalThis === "undefined" ? globalThis : globalThis;
  availableTypedArrays = function availableTypedArrays2() {
    var out = [];
    for (var i2 = 0; i2 < possibleNames.length; i2++) {
      if (typeof g2[possibleNames[i2]] === "function") {
        out[out.length] = possibleNames[i2];
      }
    }
    return out;
  };
  return availableTypedArrays;
}
var callBind = { exports: {} };
var defineDataProperty;
var hasRequiredDefineDataProperty;
function requireDefineDataProperty() {
  if (hasRequiredDefineDataProperty) return defineDataProperty;
  hasRequiredDefineDataProperty = 1;
  var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
  var $SyntaxError = /* @__PURE__ */ requireSyntax();
  var $TypeError = /* @__PURE__ */ requireType();
  var gopd2 = /* @__PURE__ */ requireGopd();
  defineDataProperty = function defineDataProperty2(obj, property, value) {
    if (!obj || typeof obj !== "object" && typeof obj !== "function") {
      throw new $TypeError("`obj` must be an object or a function`");
    }
    if (typeof property !== "string" && typeof property !== "symbol") {
      throw new $TypeError("`property` must be a string or a symbol`");
    }
    if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
      throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
      throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
      throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
      throw new $TypeError("`loose`, if provided, must be a boolean");
    }
    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
    var nonWritable = arguments.length > 4 ? arguments[4] : null;
    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
    var loose = arguments.length > 6 ? arguments[6] : false;
    var desc = !!gopd2 && gopd2(obj, property);
    if ($defineProperty) {
      $defineProperty(obj, property, {
        configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
        enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
        value,
        writable: nonWritable === null && desc ? desc.writable : !nonWritable
      });
    } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
      obj[property] = value;
    } else {
      throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
    }
  };
  return defineDataProperty;
}
var hasPropertyDescriptors_1;
var hasRequiredHasPropertyDescriptors;
function requireHasPropertyDescriptors() {
  if (hasRequiredHasPropertyDescriptors) return hasPropertyDescriptors_1;
  hasRequiredHasPropertyDescriptors = 1;
  var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
  var hasPropertyDescriptors = function hasPropertyDescriptors2() {
    return !!$defineProperty;
  };
  hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    if (!$defineProperty) {
      return null;
    }
    try {
      return $defineProperty([], "length", { value: 1 }).length !== 1;
    } catch (e2) {
      return true;
    }
  };
  hasPropertyDescriptors_1 = hasPropertyDescriptors;
  return hasPropertyDescriptors_1;
}
var setFunctionLength;
var hasRequiredSetFunctionLength;
function requireSetFunctionLength() {
  if (hasRequiredSetFunctionLength) return setFunctionLength;
  hasRequiredSetFunctionLength = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var define2 = /* @__PURE__ */ requireDefineDataProperty();
  var hasDescriptors = /* @__PURE__ */ requireHasPropertyDescriptors()();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var $TypeError = /* @__PURE__ */ requireType();
  var $floor = GetIntrinsic("%Math.floor%");
  setFunctionLength = function setFunctionLength2(fn, length) {
    if (typeof fn !== "function") {
      throw new $TypeError("`fn` is not a function");
    }
    if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
      throw new $TypeError("`length` must be a positive 32-bit integer");
    }
    var loose = arguments.length > 2 && !!arguments[2];
    var functionLengthIsConfigurable = true;
    var functionLengthIsWritable = true;
    if ("length" in fn && gOPD2) {
      var desc = gOPD2(fn, "length");
      if (desc && !desc.configurable) {
        functionLengthIsConfigurable = false;
      }
      if (desc && !desc.writable) {
        functionLengthIsWritable = false;
      }
    }
    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
      if (hasDescriptors) {
        define2(
          /** @type {Parameters<define>[0]} */
          fn,
          "length",
          length,
          true,
          true
        );
      } else {
        define2(
          /** @type {Parameters<define>[0]} */
          fn,
          "length",
          length
        );
      }
    }
    return fn;
  };
  return setFunctionLength;
}
var applyBind;
var hasRequiredApplyBind;
function requireApplyBind() {
  if (hasRequiredApplyBind) return applyBind;
  hasRequiredApplyBind = 1;
  var bind = requireFunctionBind();
  var $apply = requireFunctionApply();
  var actualApply2 = requireActualApply();
  applyBind = function applyBind2() {
    return actualApply2(bind, $apply, arguments);
  };
  return applyBind;
}
var hasRequiredCallBind;
function requireCallBind() {
  if (hasRequiredCallBind) return callBind.exports;
  hasRequiredCallBind = 1;
  (function(module) {
    var setFunctionLength2 = /* @__PURE__ */ requireSetFunctionLength();
    var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
    var callBindBasic = requireCallBindApplyHelpers();
    var applyBind2 = requireApplyBind();
    module.exports = function callBind2(originalFunction) {
      var func2 = callBindBasic(arguments);
      var adjustedLength = originalFunction.length - (arguments.length - 1);
      return setFunctionLength2(
        func2,
        1 + (adjustedLength > 0 ? adjustedLength : 0),
        true
      );
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind2 });
    } else {
      module.exports.apply = applyBind2;
    }
  })(callBind);
  return callBind.exports;
}
var shams;
var hasRequiredShams;
function requireShams() {
  if (hasRequiredShams) return shams;
  hasRequiredShams = 1;
  var hasSymbols2 = requireShams$1();
  shams = function hasToStringTagShams() {
    return hasSymbols2() && !!Symbol.toStringTag;
  };
  return shams;
}
var whichTypedArray;
var hasRequiredWhichTypedArray;
function requireWhichTypedArray() {
  if (hasRequiredWhichTypedArray) return whichTypedArray;
  hasRequiredWhichTypedArray = 1;
  var forEach2 = requireForEach();
  var availableTypedArrays2 = /* @__PURE__ */ requireAvailableTypedArrays();
  var callBind2 = requireCallBind();
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var getProto2 = requireGetProto();
  var $toString = callBound2("Object.prototype.toString");
  var hasToStringTag = requireShams()();
  var g2 = typeof globalThis === "undefined" ? globalThis : globalThis;
  var typedArrays = availableTypedArrays2();
  var $slice = callBound2("String.prototype.slice");
  var $indexOf = callBound2("Array.prototype.indexOf", true) || function indexOf(array2, value) {
    for (var i2 = 0; i2 < array2.length; i2 += 1) {
      if (array2[i2] === value) {
        return i2;
      }
    }
    return -1;
  };
  var cache = { __proto__: null };
  if (hasToStringTag && gOPD2 && getProto2) {
    forEach2(typedArrays, function(typedArray) {
      var arr = new g2[typedArray]();
      if (Symbol.toStringTag in arr && getProto2) {
        var proto = getProto2(arr);
        var descriptor = gOPD2(proto, Symbol.toStringTag);
        if (!descriptor && proto) {
          var superProto = getProto2(proto);
          descriptor = gOPD2(superProto, Symbol.toStringTag);
        }
        cache["$" + typedArray] = callBind2(descriptor.get);
      }
    });
  } else {
    forEach2(typedArrays, function(typedArray) {
      var arr = new g2[typedArray]();
      var fn = arr.slice || arr.set;
      if (fn) {
        cache[
          /** @type {`$${import('.').TypedArrayName}`} */
          "$" + typedArray
        ] = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
        // @ts-expect-error TODO FIXME
        callBind2(fn);
      }
    });
  }
  var tryTypedArrays = function tryAllTypedArrays(value) {
    var found = false;
    forEach2(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      cache,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(getter, typedArray) {
        if (!found) {
          try {
            if ("$" + getter(value) === typedArray) {
              found = /** @type {import('.').TypedArrayName} */
              $slice(typedArray, 1);
            }
          } catch (e2) {
          }
        }
      }
    );
    return found;
  };
  var trySlices = function tryAllSlices(value) {
    var found = false;
    forEach2(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      cache,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(getter, name) {
        if (!found) {
          try {
            getter(value);
            found = /** @type {import('.').TypedArrayName} */
            $slice(name, 1);
          } catch (e2) {
          }
        }
      }
    );
    return found;
  };
  whichTypedArray = function whichTypedArray2(value) {
    if (!value || typeof value !== "object") {
      return false;
    }
    if (!hasToStringTag) {
      var tag = $slice($toString(value), 8, -1);
      if ($indexOf(typedArrays, tag) > -1) {
        return tag;
      }
      if (tag !== "Object") {
        return false;
      }
      return trySlices(value);
    }
    if (!gOPD2) {
      return null;
    }
    return tryTypedArrays(value);
  };
  return whichTypedArray;
}
var isTypedArray;
var hasRequiredIsTypedArray;
function requireIsTypedArray() {
  if (hasRequiredIsTypedArray) return isTypedArray;
  hasRequiredIsTypedArray = 1;
  var whichTypedArray2 = /* @__PURE__ */ requireWhichTypedArray();
  isTypedArray = function isTypedArray2(value) {
    return !!whichTypedArray2(value);
  };
  return isTypedArray;
}
var typedArrayBuffer;
var hasRequiredTypedArrayBuffer;
function requireTypedArrayBuffer() {
  if (hasRequiredTypedArrayBuffer) return typedArrayBuffer;
  hasRequiredTypedArrayBuffer = 1;
  var $TypeError = /* @__PURE__ */ requireType();
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var $typedArrayBuffer = callBound2("TypedArray.prototype.buffer", true);
  var isTypedArray2 = /* @__PURE__ */ requireIsTypedArray();
  typedArrayBuffer = $typedArrayBuffer || function typedArrayBuffer2(x2) {
    if (!isTypedArray2(x2)) {
      throw new $TypeError("Not a Typed Array");
    }
    return x2.buffer;
  };
  return typedArrayBuffer;
}
var toBuffer;
var hasRequiredToBuffer;
function requireToBuffer() {
  if (hasRequiredToBuffer) return toBuffer;
  hasRequiredToBuffer = 1;
  var Buffer2 = requireSafeBuffer().Buffer;
  var isArray = requireIsarray();
  var typedArrayBuffer2 = /* @__PURE__ */ requireTypedArrayBuffer();
  var isView = ArrayBuffer.isView || function isView2(obj) {
    try {
      typedArrayBuffer2(obj);
      return true;
    } catch (e2) {
      return false;
    }
  };
  var useUint8Array = typeof Uint8Array !== "undefined";
  var useArrayBuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
  var useFromArrayBuffer = useArrayBuffer && (Buffer2.prototype instanceof Uint8Array || Buffer2.TYPED_ARRAY_SUPPORT);
  toBuffer = function toBuffer2(data, encoding) {
    if (data instanceof Buffer2) {
      return data;
    }
    if (typeof data === "string") {
      return Buffer2.from(data, encoding);
    }
    if (useArrayBuffer && isView(data)) {
      if (data.byteLength === 0) {
        return Buffer2.alloc(0);
      }
      if (useFromArrayBuffer) {
        var res = Buffer2.from(data.buffer, data.byteOffset, data.byteLength);
        if (res.byteLength === data.byteLength) {
          return res;
        }
      }
      var uint8 = data instanceof Uint8Array ? data : new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
      var result = Buffer2.from(uint8);
      if (result.length === data.byteLength) {
        return result;
      }
    }
    if (useUint8Array && data instanceof Uint8Array) {
      return Buffer2.from(data);
    }
    var isArr = isArray(data);
    if (isArr) {
      for (var i2 = 0; i2 < data.length; i2 += 1) {
        var x2 = data[i2];
        if (typeof x2 !== "number" || x2 < 0 || x2 > 255 || ~~x2 !== x2) {
          throw new RangeError("Array items must be numbers in the range 0-255.");
        }
      }
    }
    if (isArr || Buffer2.isBuffer(data) && data.constructor && typeof data.constructor.isBuffer === "function" && data.constructor.isBuffer(data)) {
      return Buffer2.from(data);
    }
    throw new TypeError('The "data" argument must be a string, an Array, a Buffer, a Uint8Array, or a DataView.');
  };
  return toBuffer;
}
var hash;
var hasRequiredHash;
function requireHash() {
  if (hasRequiredHash) return hash;
  hasRequiredHash = 1;
  var Buffer2 = requireSafeBuffer().Buffer;
  var toBuffer2 = /* @__PURE__ */ requireToBuffer();
  function Hash(blockSize, finalSize) {
    this._block = Buffer2.alloc(blockSize);
    this._finalSize = finalSize;
    this._blockSize = blockSize;
    this._len = 0;
  }
  Hash.prototype.update = function(data, enc) {
    data = toBuffer2(data, enc || "utf8");
    var block = this._block;
    var blockSize = this._blockSize;
    var length = data.length;
    var accum = this._len;
    for (var offset = 0; offset < length; ) {
      var assigned = accum % blockSize;
      var remainder = Math.min(length - offset, blockSize - assigned);
      for (var i2 = 0; i2 < remainder; i2++) {
        block[assigned + i2] = data[offset + i2];
      }
      accum += remainder;
      offset += remainder;
      if (accum % blockSize === 0) {
        this._update(block);
      }
    }
    this._len += length;
    return this;
  };
  Hash.prototype.digest = function(enc) {
    var rem = this._len % this._blockSize;
    this._block[rem] = 128;
    this._block.fill(0, rem + 1);
    if (rem >= this._finalSize) {
      this._update(this._block);
      this._block.fill(0);
    }
    var bits = this._len * 8;
    if (bits <= 4294967295) {
      this._block.writeUInt32BE(bits, this._blockSize - 4);
    } else {
      var lowBits = (bits & 4294967295) >>> 0;
      var highBits = (bits - lowBits) / 4294967296;
      this._block.writeUInt32BE(highBits, this._blockSize - 8);
      this._block.writeUInt32BE(lowBits, this._blockSize - 4);
    }
    this._update(this._block);
    var hash2 = this._hash();
    return enc ? hash2.toString(enc) : hash2;
  };
  Hash.prototype._update = function() {
    throw new Error("_update must be implemented by subclass");
  };
  hash = Hash;
  return hash;
}
var sha;
var hasRequiredSha;
function requireSha() {
  if (hasRequiredSha) return sha;
  hasRequiredSha = 1;
  var inherits = requireInherits_browser();
  var Hash = requireHash();
  var Buffer2 = requireSafeBuffer().Buffer;
  var K2 = [
    1518500249,
    1859775393,
    2400959708 | 0,
    3395469782 | 0
  ];
  var W = new Array(80);
  function Sha() {
    this.init();
    this._w = W;
    Hash.call(this, 64, 56);
  }
  inherits(Sha, Hash);
  Sha.prototype.init = function() {
    this._a = 1732584193;
    this._b = 4023233417;
    this._c = 2562383102;
    this._d = 271733878;
    this._e = 3285377520;
    return this;
  };
  function rotl5(num) {
    return num << 5 | num >>> 27;
  }
  function rotl30(num) {
    return num << 30 | num >>> 2;
  }
  function ft(s2, b2, c2, d2) {
    if (s2 === 0) {
      return b2 & c2 | ~b2 & d2;
    }
    if (s2 === 2) {
      return b2 & c2 | b2 & d2 | c2 & d2;
    }
    return b2 ^ c2 ^ d2;
  }
  Sha.prototype._update = function(M2) {
    var w2 = this._w;
    var a2 = this._a | 0;
    var b2 = this._b | 0;
    var c2 = this._c | 0;
    var d2 = this._d | 0;
    var e2 = this._e | 0;
    for (var i2 = 0; i2 < 16; ++i2) {
      w2[i2] = M2.readInt32BE(i2 * 4);
    }
    for (; i2 < 80; ++i2) {
      w2[i2] = w2[i2 - 3] ^ w2[i2 - 8] ^ w2[i2 - 14] ^ w2[i2 - 16];
    }
    for (var j2 = 0; j2 < 80; ++j2) {
      var s2 = ~~(j2 / 20);
      var t2 = rotl5(a2) + ft(s2, b2, c2, d2) + e2 + w2[j2] + K2[s2] | 0;
      e2 = d2;
      d2 = c2;
      c2 = rotl30(b2);
      b2 = a2;
      a2 = t2;
    }
    this._a = a2 + this._a | 0;
    this._b = b2 + this._b | 0;
    this._c = c2 + this._c | 0;
    this._d = d2 + this._d | 0;
    this._e = e2 + this._e | 0;
  };
  Sha.prototype._hash = function() {
    var H2 = Buffer2.allocUnsafe(20);
    H2.writeInt32BE(this._a | 0, 0);
    H2.writeInt32BE(this._b | 0, 4);
    H2.writeInt32BE(this._c | 0, 8);
    H2.writeInt32BE(this._d | 0, 12);
    H2.writeInt32BE(this._e | 0, 16);
    return H2;
  };
  sha = Sha;
  return sha;
}
var sha1;
var hasRequiredSha1;
function requireSha1() {
  if (hasRequiredSha1) return sha1;
  hasRequiredSha1 = 1;
  var inherits = requireInherits_browser();
  var Hash = requireHash();
  var Buffer2 = requireSafeBuffer().Buffer;
  var K2 = [
    1518500249,
    1859775393,
    2400959708 | 0,
    3395469782 | 0
  ];
  var W = new Array(80);
  function Sha1() {
    this.init();
    this._w = W;
    Hash.call(this, 64, 56);
  }
  inherits(Sha1, Hash);
  Sha1.prototype.init = function() {
    this._a = 1732584193;
    this._b = 4023233417;
    this._c = 2562383102;
    this._d = 271733878;
    this._e = 3285377520;
    return this;
  };
  function rotl1(num) {
    return num << 1 | num >>> 31;
  }
  function rotl5(num) {
    return num << 5 | num >>> 27;
  }
  function rotl30(num) {
    return num << 30 | num >>> 2;
  }
  function ft(s2, b2, c2, d2) {
    if (s2 === 0) {
      return b2 & c2 | ~b2 & d2;
    }
    if (s2 === 2) {
      return b2 & c2 | b2 & d2 | c2 & d2;
    }
    return b2 ^ c2 ^ d2;
  }
  Sha1.prototype._update = function(M2) {
    var w2 = this._w;
    var a2 = this._a | 0;
    var b2 = this._b | 0;
    var c2 = this._c | 0;
    var d2 = this._d | 0;
    var e2 = this._e | 0;
    for (var i2 = 0; i2 < 16; ++i2) {
      w2[i2] = M2.readInt32BE(i2 * 4);
    }
    for (; i2 < 80; ++i2) {
      w2[i2] = rotl1(w2[i2 - 3] ^ w2[i2 - 8] ^ w2[i2 - 14] ^ w2[i2 - 16]);
    }
    for (var j2 = 0; j2 < 80; ++j2) {
      var s2 = ~~(j2 / 20);
      var t2 = rotl5(a2) + ft(s2, b2, c2, d2) + e2 + w2[j2] + K2[s2] | 0;
      e2 = d2;
      d2 = c2;
      c2 = rotl30(b2);
      b2 = a2;
      a2 = t2;
    }
    this._a = a2 + this._a | 0;
    this._b = b2 + this._b | 0;
    this._c = c2 + this._c | 0;
    this._d = d2 + this._d | 0;
    this._e = e2 + this._e | 0;
  };
  Sha1.prototype._hash = function() {
    var H2 = Buffer2.allocUnsafe(20);
    H2.writeInt32BE(this._a | 0, 0);
    H2.writeInt32BE(this._b | 0, 4);
    H2.writeInt32BE(this._c | 0, 8);
    H2.writeInt32BE(this._d | 0, 12);
    H2.writeInt32BE(this._e | 0, 16);
    return H2;
  };
  sha1 = Sha1;
  return sha1;
}
var sha256;
var hasRequiredSha256;
function requireSha256() {
  if (hasRequiredSha256) return sha256;
  hasRequiredSha256 = 1;
  var inherits = requireInherits_browser();
  var Hash = requireHash();
  var Buffer2 = requireSafeBuffer().Buffer;
  var K2 = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ];
  var W = new Array(64);
  function Sha256() {
    this.init();
    this._w = W;
    Hash.call(this, 64, 56);
  }
  inherits(Sha256, Hash);
  Sha256.prototype.init = function() {
    this._a = 1779033703;
    this._b = 3144134277;
    this._c = 1013904242;
    this._d = 2773480762;
    this._e = 1359893119;
    this._f = 2600822924;
    this._g = 528734635;
    this._h = 1541459225;
    return this;
  };
  function ch(x2, y2, z2) {
    return z2 ^ x2 & (y2 ^ z2);
  }
  function maj(x2, y2, z2) {
    return x2 & y2 | z2 & (x2 | y2);
  }
  function sigma0(x2) {
    return (x2 >>> 2 | x2 << 30) ^ (x2 >>> 13 | x2 << 19) ^ (x2 >>> 22 | x2 << 10);
  }
  function sigma1(x2) {
    return (x2 >>> 6 | x2 << 26) ^ (x2 >>> 11 | x2 << 21) ^ (x2 >>> 25 | x2 << 7);
  }
  function gamma0(x2) {
    return (x2 >>> 7 | x2 << 25) ^ (x2 >>> 18 | x2 << 14) ^ x2 >>> 3;
  }
  function gamma1(x2) {
    return (x2 >>> 17 | x2 << 15) ^ (x2 >>> 19 | x2 << 13) ^ x2 >>> 10;
  }
  Sha256.prototype._update = function(M2) {
    var w2 = this._w;
    var a2 = this._a | 0;
    var b2 = this._b | 0;
    var c2 = this._c | 0;
    var d2 = this._d | 0;
    var e2 = this._e | 0;
    var f2 = this._f | 0;
    var g2 = this._g | 0;
    var h2 = this._h | 0;
    for (var i2 = 0; i2 < 16; ++i2) {
      w2[i2] = M2.readInt32BE(i2 * 4);
    }
    for (; i2 < 64; ++i2) {
      w2[i2] = gamma1(w2[i2 - 2]) + w2[i2 - 7] + gamma0(w2[i2 - 15]) + w2[i2 - 16] | 0;
    }
    for (var j2 = 0; j2 < 64; ++j2) {
      var T1 = h2 + sigma1(e2) + ch(e2, f2, g2) + K2[j2] + w2[j2] | 0;
      var T2 = sigma0(a2) + maj(a2, b2, c2) | 0;
      h2 = g2;
      g2 = f2;
      f2 = e2;
      e2 = d2 + T1 | 0;
      d2 = c2;
      c2 = b2;
      b2 = a2;
      a2 = T1 + T2 | 0;
    }
    this._a = a2 + this._a | 0;
    this._b = b2 + this._b | 0;
    this._c = c2 + this._c | 0;
    this._d = d2 + this._d | 0;
    this._e = e2 + this._e | 0;
    this._f = f2 + this._f | 0;
    this._g = g2 + this._g | 0;
    this._h = h2 + this._h | 0;
  };
  Sha256.prototype._hash = function() {
    var H2 = Buffer2.allocUnsafe(32);
    H2.writeInt32BE(this._a, 0);
    H2.writeInt32BE(this._b, 4);
    H2.writeInt32BE(this._c, 8);
    H2.writeInt32BE(this._d, 12);
    H2.writeInt32BE(this._e, 16);
    H2.writeInt32BE(this._f, 20);
    H2.writeInt32BE(this._g, 24);
    H2.writeInt32BE(this._h, 28);
    return H2;
  };
  sha256 = Sha256;
  return sha256;
}
var sha224;
var hasRequiredSha224;
function requireSha224() {
  if (hasRequiredSha224) return sha224;
  hasRequiredSha224 = 1;
  var inherits = requireInherits_browser();
  var Sha256 = requireSha256();
  var Hash = requireHash();
  var Buffer2 = requireSafeBuffer().Buffer;
  var W = new Array(64);
  function Sha224() {
    this.init();
    this._w = W;
    Hash.call(this, 64, 56);
  }
  inherits(Sha224, Sha256);
  Sha224.prototype.init = function() {
    this._a = 3238371032;
    this._b = 914150663;
    this._c = 812702999;
    this._d = 4144912697;
    this._e = 4290775857;
    this._f = 1750603025;
    this._g = 1694076839;
    this._h = 3204075428;
    return this;
  };
  Sha224.prototype._hash = function() {
    var H2 = Buffer2.allocUnsafe(28);
    H2.writeInt32BE(this._a, 0);
    H2.writeInt32BE(this._b, 4);
    H2.writeInt32BE(this._c, 8);
    H2.writeInt32BE(this._d, 12);
    H2.writeInt32BE(this._e, 16);
    H2.writeInt32BE(this._f, 20);
    H2.writeInt32BE(this._g, 24);
    return H2;
  };
  sha224 = Sha224;
  return sha224;
}
var sha512;
var hasRequiredSha512;
function requireSha512() {
  if (hasRequiredSha512) return sha512;
  hasRequiredSha512 = 1;
  var inherits = requireInherits_browser();
  var Hash = requireHash();
  var Buffer2 = requireSafeBuffer().Buffer;
  var K2 = [
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
  ];
  var W = new Array(160);
  function Sha512() {
    this.init();
    this._w = W;
    Hash.call(this, 128, 112);
  }
  inherits(Sha512, Hash);
  Sha512.prototype.init = function() {
    this._ah = 1779033703;
    this._bh = 3144134277;
    this._ch = 1013904242;
    this._dh = 2773480762;
    this._eh = 1359893119;
    this._fh = 2600822924;
    this._gh = 528734635;
    this._hh = 1541459225;
    this._al = 4089235720;
    this._bl = 2227873595;
    this._cl = 4271175723;
    this._dl = 1595750129;
    this._el = 2917565137;
    this._fl = 725511199;
    this._gl = 4215389547;
    this._hl = 327033209;
    return this;
  };
  function Ch(x2, y2, z2) {
    return z2 ^ x2 & (y2 ^ z2);
  }
  function maj(x2, y2, z2) {
    return x2 & y2 | z2 & (x2 | y2);
  }
  function sigma0(x2, xl) {
    return (x2 >>> 28 | xl << 4) ^ (xl >>> 2 | x2 << 30) ^ (xl >>> 7 | x2 << 25);
  }
  function sigma1(x2, xl) {
    return (x2 >>> 14 | xl << 18) ^ (x2 >>> 18 | xl << 14) ^ (xl >>> 9 | x2 << 23);
  }
  function Gamma0(x2, xl) {
    return (x2 >>> 1 | xl << 31) ^ (x2 >>> 8 | xl << 24) ^ x2 >>> 7;
  }
  function Gamma0l(x2, xl) {
    return (x2 >>> 1 | xl << 31) ^ (x2 >>> 8 | xl << 24) ^ (x2 >>> 7 | xl << 25);
  }
  function Gamma1(x2, xl) {
    return (x2 >>> 19 | xl << 13) ^ (xl >>> 29 | x2 << 3) ^ x2 >>> 6;
  }
  function Gamma1l(x2, xl) {
    return (x2 >>> 19 | xl << 13) ^ (xl >>> 29 | x2 << 3) ^ (x2 >>> 6 | xl << 26);
  }
  function getCarry(a2, b2) {
    return a2 >>> 0 < b2 >>> 0 ? 1 : 0;
  }
  Sha512.prototype._update = function(M2) {
    var w2 = this._w;
    var ah = this._ah | 0;
    var bh = this._bh | 0;
    var ch = this._ch | 0;
    var dh = this._dh | 0;
    var eh = this._eh | 0;
    var fh = this._fh | 0;
    var gh = this._gh | 0;
    var hh = this._hh | 0;
    var al = this._al | 0;
    var bl = this._bl | 0;
    var cl = this._cl | 0;
    var dl = this._dl | 0;
    var el = this._el | 0;
    var fl = this._fl | 0;
    var gl = this._gl | 0;
    var hl = this._hl | 0;
    for (var i2 = 0; i2 < 32; i2 += 2) {
      w2[i2] = M2.readInt32BE(i2 * 4);
      w2[i2 + 1] = M2.readInt32BE(i2 * 4 + 4);
    }
    for (; i2 < 160; i2 += 2) {
      var xh = w2[i2 - 15 * 2];
      var xl = w2[i2 - 15 * 2 + 1];
      var gamma0 = Gamma0(xh, xl);
      var gamma0l = Gamma0l(xl, xh);
      xh = w2[i2 - 2 * 2];
      xl = w2[i2 - 2 * 2 + 1];
      var gamma1 = Gamma1(xh, xl);
      var gamma1l = Gamma1l(xl, xh);
      var Wi7h = w2[i2 - 7 * 2];
      var Wi7l = w2[i2 - 7 * 2 + 1];
      var Wi16h = w2[i2 - 16 * 2];
      var Wi16l = w2[i2 - 16 * 2 + 1];
      var Wil = gamma0l + Wi7l | 0;
      var Wih = gamma0 + Wi7h + getCarry(Wil, gamma0l) | 0;
      Wil = Wil + gamma1l | 0;
      Wih = Wih + gamma1 + getCarry(Wil, gamma1l) | 0;
      Wil = Wil + Wi16l | 0;
      Wih = Wih + Wi16h + getCarry(Wil, Wi16l) | 0;
      w2[i2] = Wih;
      w2[i2 + 1] = Wil;
    }
    for (var j2 = 0; j2 < 160; j2 += 2) {
      Wih = w2[j2];
      Wil = w2[j2 + 1];
      var majh = maj(ah, bh, ch);
      var majl = maj(al, bl, cl);
      var sigma0h = sigma0(ah, al);
      var sigma0l = sigma0(al, ah);
      var sigma1h = sigma1(eh, el);
      var sigma1l = sigma1(el, eh);
      var Kih = K2[j2];
      var Kil = K2[j2 + 1];
      var chh = Ch(eh, fh, gh);
      var chl = Ch(el, fl, gl);
      var t1l = hl + sigma1l | 0;
      var t1h = hh + sigma1h + getCarry(t1l, hl) | 0;
      t1l = t1l + chl | 0;
      t1h = t1h + chh + getCarry(t1l, chl) | 0;
      t1l = t1l + Kil | 0;
      t1h = t1h + Kih + getCarry(t1l, Kil) | 0;
      t1l = t1l + Wil | 0;
      t1h = t1h + Wih + getCarry(t1l, Wil) | 0;
      var t2l = sigma0l + majl | 0;
      var t2h = sigma0h + majh + getCarry(t2l, sigma0l) | 0;
      hh = gh;
      hl = gl;
      gh = fh;
      gl = fl;
      fh = eh;
      fl = el;
      el = dl + t1l | 0;
      eh = dh + t1h + getCarry(el, dl) | 0;
      dh = ch;
      dl = cl;
      ch = bh;
      cl = bl;
      bh = ah;
      bl = al;
      al = t1l + t2l | 0;
      ah = t1h + t2h + getCarry(al, t1l) | 0;
    }
    this._al = this._al + al | 0;
    this._bl = this._bl + bl | 0;
    this._cl = this._cl + cl | 0;
    this._dl = this._dl + dl | 0;
    this._el = this._el + el | 0;
    this._fl = this._fl + fl | 0;
    this._gl = this._gl + gl | 0;
    this._hl = this._hl + hl | 0;
    this._ah = this._ah + ah + getCarry(this._al, al) | 0;
    this._bh = this._bh + bh + getCarry(this._bl, bl) | 0;
    this._ch = this._ch + ch + getCarry(this._cl, cl) | 0;
    this._dh = this._dh + dh + getCarry(this._dl, dl) | 0;
    this._eh = this._eh + eh + getCarry(this._el, el) | 0;
    this._fh = this._fh + fh + getCarry(this._fl, fl) | 0;
    this._gh = this._gh + gh + getCarry(this._gl, gl) | 0;
    this._hh = this._hh + hh + getCarry(this._hl, hl) | 0;
  };
  Sha512.prototype._hash = function() {
    var H2 = Buffer2.allocUnsafe(64);
    function writeInt64BE(h2, l2, offset) {
      H2.writeInt32BE(h2, offset);
      H2.writeInt32BE(l2, offset + 4);
    }
    writeInt64BE(this._ah, this._al, 0);
    writeInt64BE(this._bh, this._bl, 8);
    writeInt64BE(this._ch, this._cl, 16);
    writeInt64BE(this._dh, this._dl, 24);
    writeInt64BE(this._eh, this._el, 32);
    writeInt64BE(this._fh, this._fl, 40);
    writeInt64BE(this._gh, this._gl, 48);
    writeInt64BE(this._hh, this._hl, 56);
    return H2;
  };
  sha512 = Sha512;
  return sha512;
}
var sha384;
var hasRequiredSha384;
function requireSha384() {
  if (hasRequiredSha384) return sha384;
  hasRequiredSha384 = 1;
  var inherits = requireInherits_browser();
  var SHA512 = requireSha512();
  var Hash = requireHash();
  var Buffer2 = requireSafeBuffer().Buffer;
  var W = new Array(160);
  function Sha384() {
    this.init();
    this._w = W;
    Hash.call(this, 128, 112);
  }
  inherits(Sha384, SHA512);
  Sha384.prototype.init = function() {
    this._ah = 3418070365;
    this._bh = 1654270250;
    this._ch = 2438529370;
    this._dh = 355462360;
    this._eh = 1731405415;
    this._fh = 2394180231;
    this._gh = 3675008525;
    this._hh = 1203062813;
    this._al = 3238371032;
    this._bl = 914150663;
    this._cl = 812702999;
    this._dl = 4144912697;
    this._el = 4290775857;
    this._fl = 1750603025;
    this._gl = 1694076839;
    this._hl = 3204075428;
    return this;
  };
  Sha384.prototype._hash = function() {
    var H2 = Buffer2.allocUnsafe(48);
    function writeInt64BE(h2, l2, offset) {
      H2.writeInt32BE(h2, offset);
      H2.writeInt32BE(l2, offset + 4);
    }
    writeInt64BE(this._ah, this._al, 0);
    writeInt64BE(this._bh, this._bl, 8);
    writeInt64BE(this._ch, this._cl, 16);
    writeInt64BE(this._dh, this._dl, 24);
    writeInt64BE(this._eh, this._el, 32);
    writeInt64BE(this._fh, this._fl, 40);
    return H2;
  };
  sha384 = Sha384;
  return sha384;
}
var hasRequiredSha_js;
function requireSha_js() {
  if (hasRequiredSha_js) return sha_js.exports;
  hasRequiredSha_js = 1;
  (function(module) {
    module.exports = function SHA(algorithm) {
      var alg = algorithm.toLowerCase();
      var Algorithm = module.exports[alg];
      if (!Algorithm) {
        throw new Error(alg + " is not supported (we accept pull requests)");
      }
      return new Algorithm();
    };
    module.exports.sha = requireSha();
    module.exports.sha1 = requireSha1();
    module.exports.sha224 = requireSha224();
    module.exports.sha256 = requireSha256();
    module.exports.sha384 = requireSha384();
    module.exports.sha512 = requireSha512();
  })(sha_js);
  return sha_js.exports;
}
var hasRequiredSession;
function requireSession() {
  if (hasRequiredSession) return Session;
  hasRequiredSession = 1;
  Object.defineProperty(Session, "__esModule", { value: true });
  Session.Session = void 0;
  const sha_js_1 = requireSha_js();
  const util_1 = /* @__PURE__ */ requireUtil$1();
  const STORAGE_KEY_SESSION_ID = "session:id";
  const STORAGE_KEY_SESSION_SECRET = "session:secret";
  const STORAGE_KEY_SESSION_LINKED = "session:linked";
  let Session$1 = class Session2 {
    constructor(storage, id, secret, linked) {
      this._storage = storage;
      this._id = id || (0, util_1.randomBytesHex)(16);
      this._secret = secret || (0, util_1.randomBytesHex)(32);
      this._key = new sha_js_1.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex");
      this._linked = !!linked;
    }
    static load(storage) {
      const id = storage.getItem(STORAGE_KEY_SESSION_ID);
      const linked = storage.getItem(STORAGE_KEY_SESSION_LINKED);
      const secret = storage.getItem(STORAGE_KEY_SESSION_SECRET);
      if (id && secret) {
        return new Session2(storage, id, secret, linked === "1");
      }
      return null;
    }
    /**
     * Takes in a session ID and returns the sha256 hash of it.
     * @param sessionId session ID
     */
    static hash(sessionId) {
      return new sha_js_1.sha256().update(sessionId).digest("hex");
    }
    get id() {
      return this._id;
    }
    get secret() {
      return this._secret;
    }
    get key() {
      return this._key;
    }
    get linked() {
      return this._linked;
    }
    set linked(val) {
      this._linked = val;
      this.persistLinked();
    }
    save() {
      this._storage.setItem(STORAGE_KEY_SESSION_ID, this._id);
      this._storage.setItem(STORAGE_KEY_SESSION_SECRET, this._secret);
      this.persistLinked();
      return this;
    }
    persistLinked() {
      this._storage.setItem(STORAGE_KEY_SESSION_LINKED, this._linked ? "1" : "0");
    }
  };
  Session.Session = Session$1;
  return Session;
}
var WalletLinkConnection = {};
var Cipher = {};
var hasRequiredCipher;
function requireCipher() {
  if (hasRequiredCipher) return Cipher;
  hasRequiredCipher = 1;
  Object.defineProperty(Cipher, "__esModule", { value: true });
  Cipher.Cipher = void 0;
  const util_1 = /* @__PURE__ */ requireUtil$1();
  let Cipher$1 = class Cipher {
    // @param secret hex representation of 32-byte secret
    constructor(secret) {
      this.secret = secret;
    }
    /**
     *
     * @param plainText string to be encrypted
     * returns hex string representation of bytes in the order: initialization vector (iv),
     * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes. Remaining bytes are the
     * encrypted plainText.
     */
    async encrypt(plainText) {
      const secret = this.secret;
      if (secret.length !== 64)
        throw Error(`secret must be 256 bits`);
      const ivBytes = crypto.getRandomValues(new Uint8Array(12));
      const secretKey = await crypto.subtle.importKey("raw", (0, util_1.hexStringToUint8Array)(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
      const enc = new TextEncoder();
      const encryptedResult = await window.crypto.subtle.encrypt({
        name: "AES-GCM",
        iv: ivBytes
      }, secretKey, enc.encode(plainText));
      const tagLength = 16;
      const authTag = encryptedResult.slice(encryptedResult.byteLength - tagLength);
      const encryptedPlaintext = encryptedResult.slice(0, encryptedResult.byteLength - tagLength);
      const authTagBytes = new Uint8Array(authTag);
      const encryptedPlaintextBytes = new Uint8Array(encryptedPlaintext);
      const concatted = new Uint8Array([...ivBytes, ...authTagBytes, ...encryptedPlaintextBytes]);
      return (0, util_1.uint8ArrayToHex)(concatted);
    }
    /**
     *
     * @param cipherText hex string representation of bytes in the order: initialization vector (iv),
     * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes.
     */
    async decrypt(cipherText) {
      const secret = this.secret;
      if (secret.length !== 64)
        throw Error(`secret must be 256 bits`);
      return new Promise((resolve, reject) => {
        void (async function() {
          const secretKey = await crypto.subtle.importKey("raw", (0, util_1.hexStringToUint8Array)(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
          const encrypted = (0, util_1.hexStringToUint8Array)(cipherText);
          const ivBytes = encrypted.slice(0, 12);
          const authTagBytes = encrypted.slice(12, 28);
          const encryptedPlaintextBytes = encrypted.slice(28);
          const concattedBytes = new Uint8Array([...encryptedPlaintextBytes, ...authTagBytes]);
          const algo = {
            name: "AES-GCM",
            iv: new Uint8Array(ivBytes)
          };
          try {
            const decrypted = await window.crypto.subtle.decrypt(algo, secretKey, concattedBytes);
            const decoder = new TextDecoder();
            resolve(decoder.decode(decrypted));
          } catch (err) {
            reject(err);
          }
        })();
      });
    }
  };
  Cipher.Cipher = Cipher$1;
  return Cipher;
}
var WalletLinkHTTP = {};
var hasRequiredWalletLinkHTTP;
function requireWalletLinkHTTP() {
  if (hasRequiredWalletLinkHTTP) return WalletLinkHTTP;
  hasRequiredWalletLinkHTTP = 1;
  Object.defineProperty(WalletLinkHTTP, "__esModule", { value: true });
  WalletLinkHTTP.WalletLinkHTTP = void 0;
  let WalletLinkHTTP$1 = class WalletLinkHTTP {
    constructor(linkAPIUrl, sessionId, sessionKey) {
      this.linkAPIUrl = linkAPIUrl;
      this.sessionId = sessionId;
      const credentials = `${sessionId}:${sessionKey}`;
      this.auth = `Basic ${btoa(credentials)}`;
    }
    // mark unseen events as seen
    async markUnseenEventsAsSeen(events) {
      return Promise.all(events.map((e2) => fetch(`${this.linkAPIUrl}/events/${e2.eventId}/seen`, {
        method: "POST",
        headers: {
          Authorization: this.auth
        }
      }))).catch((error2) => console.error("Unabled to mark event as failed:", error2));
    }
    async fetchUnseenEvents() {
      var _a;
      const response = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
        headers: {
          Authorization: this.auth
        }
      });
      if (response.ok) {
        const { events, error: error2 } = await response.json();
        if (error2) {
          throw new Error(`Check unseen events failed: ${error2}`);
        }
        const responseEvents = (_a = events === null || events === void 0 ? void 0 : events.filter((e2) => e2.event === "Web3Response").map((e2) => ({
          type: "Event",
          sessionId: this.sessionId,
          eventId: e2.id,
          event: e2.event,
          data: e2.data
        }))) !== null && _a !== void 0 ? _a : [];
        this.markUnseenEventsAsSeen(responseEvents);
        return responseEvents;
      }
      throw new Error(`Check unseen events failed: ${response.status}`);
    }
  };
  WalletLinkHTTP.WalletLinkHTTP = WalletLinkHTTP$1;
  return WalletLinkHTTP;
}
var WalletLinkWebSocket = {};
var hasRequiredWalletLinkWebSocket;
function requireWalletLinkWebSocket() {
  if (hasRequiredWalletLinkWebSocket) return WalletLinkWebSocket;
  hasRequiredWalletLinkWebSocket = 1;
  Object.defineProperty(WalletLinkWebSocket, "__esModule", { value: true });
  WalletLinkWebSocket.WalletLinkWebSocket = WalletLinkWebSocket.ConnectionState = void 0;
  var ConnectionState;
  (function(ConnectionState2) {
    ConnectionState2[ConnectionState2["DISCONNECTED"] = 0] = "DISCONNECTED";
    ConnectionState2[ConnectionState2["CONNECTING"] = 1] = "CONNECTING";
    ConnectionState2[ConnectionState2["CONNECTED"] = 2] = "CONNECTED";
  })(ConnectionState || (WalletLinkWebSocket.ConnectionState = ConnectionState = {}));
  let WalletLinkWebSocket$1 = class WalletLinkWebSocket {
    setConnectionStateListener(listener) {
      this.connectionStateListener = listener;
    }
    setIncomingDataListener(listener) {
      this.incomingDataListener = listener;
    }
    /**
     * Constructor
     * @param url WebSocket server URL
     * @param [WebSocketClass] Custom WebSocket implementation
     */
    constructor(url, WebSocketClass = WebSocket) {
      this.WebSocketClass = WebSocketClass;
      this.webSocket = null;
      this.pendingData = [];
      this.url = url.replace(/^http/, "ws");
    }
    /**
     * Make a websocket connection
     * @returns a Promise that resolves when connected
     */
    async connect() {
      if (this.webSocket) {
        throw new Error("webSocket object is not null");
      }
      return new Promise((resolve, reject) => {
        var _a;
        let webSocket;
        try {
          this.webSocket = webSocket = new this.WebSocketClass(this.url);
        } catch (err) {
          reject(err);
          return;
        }
        (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.CONNECTING);
        webSocket.onclose = (evt) => {
          var _a2;
          this.clearWebSocket();
          reject(new Error(`websocket error ${evt.code}: ${evt.reason}`));
          (_a2 = this.connectionStateListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, ConnectionState.DISCONNECTED);
        };
        webSocket.onopen = (_2) => {
          var _a2;
          resolve();
          (_a2 = this.connectionStateListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, ConnectionState.CONNECTED);
          if (this.pendingData.length > 0) {
            const pending = [...this.pendingData];
            pending.forEach((data) => this.sendData(data));
            this.pendingData = [];
          }
        };
        webSocket.onmessage = (evt) => {
          var _a2, _b;
          if (evt.data === "h") {
            (_a2 = this.incomingDataListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, {
              type: "Heartbeat"
            });
          } else {
            try {
              const message = JSON.parse(evt.data);
              (_b = this.incomingDataListener) === null || _b === void 0 ? void 0 : _b.call(this, message);
            } catch (_c) {
            }
          }
        };
      });
    }
    /**
     * Disconnect from server
     */
    disconnect() {
      var _a;
      const { webSocket } = this;
      if (!webSocket) {
        return;
      }
      this.clearWebSocket();
      (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.DISCONNECTED);
      this.connectionStateListener = void 0;
      this.incomingDataListener = void 0;
      try {
        webSocket.close();
      } catch (_b) {
      }
    }
    /**
     * Send data to server
     * @param data text to send
     */
    sendData(data) {
      const { webSocket } = this;
      if (!webSocket) {
        this.pendingData.push(data);
        this.connect();
        return;
      }
      webSocket.send(data);
    }
    clearWebSocket() {
      const { webSocket } = this;
      if (!webSocket) {
        return;
      }
      this.webSocket = null;
      webSocket.onclose = null;
      webSocket.onerror = null;
      webSocket.onmessage = null;
      webSocket.onopen = null;
    }
  };
  WalletLinkWebSocket.WalletLinkWebSocket = WalletLinkWebSocket$1;
  return WalletLinkWebSocket;
}
var hasRequiredWalletLinkConnection;
function requireWalletLinkConnection() {
  if (hasRequiredWalletLinkConnection) return WalletLinkConnection;
  hasRequiredWalletLinkConnection = 1;
  Object.defineProperty(WalletLinkConnection, "__esModule", { value: true });
  WalletLinkConnection.WalletLinkConnection = void 0;
  const type_1 = /* @__PURE__ */ requireType$1();
  const Cipher_1 = /* @__PURE__ */ requireCipher();
  const DiagnosticLogger_1 = /* @__PURE__ */ requireDiagnosticLogger();
  const RelayAbstract_1 = /* @__PURE__ */ requireRelayAbstract();
  const Session_1 = /* @__PURE__ */ requireSession();
  const WalletLinkHTTP_1 = /* @__PURE__ */ requireWalletLinkHTTP();
  const WalletLinkWebSocket_1 = /* @__PURE__ */ requireWalletLinkWebSocket();
  const HEARTBEAT_INTERVAL = 1e4;
  const REQUEST_TIMEOUT = 6e4;
  let WalletLinkConnection$1 = class WalletLinkConnection {
    /**
     * Constructor
     * @param session Session
     * @param linkAPIUrl Coinbase Wallet link server URL
     * @param listener WalletLinkConnectionUpdateListener
     * @param [WebSocketClass] Custom WebSocket implementation
     */
    constructor({ session, linkAPIUrl, listener, diagnostic, WebSocketClass = WebSocket }) {
      this.destroyed = false;
      this.lastHeartbeatResponse = 0;
      this.nextReqId = (0, type_1.IntNumber)(1);
      this._connected = false;
      this._linked = false;
      this.shouldFetchUnseenEventsOnConnect = false;
      this.requestResolutions = /* @__PURE__ */ new Map();
      this.handleSessionMetadataUpdated = (metadata) => {
        if (!metadata)
          return;
        const handlers = /* @__PURE__ */ new Map([
          ["__destroyed", this.handleDestroyed],
          ["EthereumAddress", this.handleAccountUpdated],
          ["WalletUsername", this.handleWalletUsernameUpdated],
          ["AppVersion", this.handleAppVersionUpdated],
          [
            "ChainId",
            (v2) => metadata.JsonRpcUrl && this.handleChainUpdated(v2, metadata.JsonRpcUrl)
          ]
        ]);
        handlers.forEach((handler, key) => {
          const value = metadata[key];
          if (value === void 0)
            return;
          handler(value);
        });
      };
      this.handleDestroyed = (__destroyed) => {
        var _a, _b;
        if (__destroyed !== "1")
          return;
        (_a = this.listener) === null || _a === void 0 ? void 0 : _a.resetAndReload();
        (_b = this.diagnostic) === null || _b === void 0 ? void 0 : _b.log(DiagnosticLogger_1.EVENTS.METADATA_DESTROYED, {
          alreadyDestroyed: this.isDestroyed,
          sessionIdHash: Session_1.Session.hash(this.session.id)
        });
      };
      this.handleAccountUpdated = async (encryptedEthereumAddress) => {
        var _a, _b;
        try {
          const address = await this.cipher.decrypt(encryptedEthereumAddress);
          (_a = this.listener) === null || _a === void 0 ? void 0 : _a.accountUpdated(address);
        } catch (_c) {
          (_b = this.diagnostic) === null || _b === void 0 ? void 0 : _b.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
            message: "Had error decrypting",
            value: "selectedAddress"
          });
        }
      };
      this.handleMetadataUpdated = async (key, encryptedMetadataValue) => {
        var _a, _b;
        try {
          const decryptedValue = await this.cipher.decrypt(encryptedMetadataValue);
          (_a = this.listener) === null || _a === void 0 ? void 0 : _a.metadataUpdated(key, decryptedValue);
        } catch (_c) {
          (_b = this.diagnostic) === null || _b === void 0 ? void 0 : _b.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
            message: "Had error decrypting",
            value: key
          });
        }
      };
      this.handleWalletUsernameUpdated = async (walletUsername) => {
        this.handleMetadataUpdated(RelayAbstract_1.WALLET_USER_NAME_KEY, walletUsername);
      };
      this.handleAppVersionUpdated = async (appVersion) => {
        this.handleMetadataUpdated(RelayAbstract_1.APP_VERSION_KEY, appVersion);
      };
      this.handleChainUpdated = async (encryptedChainId, encryptedJsonRpcUrl) => {
        var _a, _b;
        try {
          const chainId = await this.cipher.decrypt(encryptedChainId);
          const jsonRpcUrl = await this.cipher.decrypt(encryptedJsonRpcUrl);
          (_a = this.listener) === null || _a === void 0 ? void 0 : _a.chainUpdated(chainId, jsonRpcUrl);
        } catch (_c) {
          (_b = this.diagnostic) === null || _b === void 0 ? void 0 : _b.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
            message: "Had error decrypting",
            value: "chainId|jsonRpcUrl"
          });
        }
      };
      this.session = session;
      this.cipher = new Cipher_1.Cipher(session.secret);
      this.diagnostic = diagnostic;
      this.listener = listener;
      const ws = new WalletLinkWebSocket_1.WalletLinkWebSocket(`${linkAPIUrl}/rpc`, WebSocketClass);
      ws.setConnectionStateListener(async (state2) => {
        var _a;
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.CONNECTED_STATE_CHANGE, {
          state: state2,
          sessionIdHash: Session_1.Session.hash(session.id)
        });
        let connected = false;
        switch (state2) {
          case WalletLinkWebSocket_1.ConnectionState.DISCONNECTED:
            if (!this.destroyed) {
              const connect = async () => {
                await new Promise((resolve) => setTimeout(resolve, 5e3));
                if (!this.destroyed) {
                  ws.connect().catch(() => {
                    connect();
                  });
                }
              };
              connect();
            }
            break;
          case WalletLinkWebSocket_1.ConnectionState.CONNECTED:
            try {
              await this.authenticate();
              this.sendIsLinked();
              this.sendGetSessionConfig();
              connected = true;
            } catch (_b) {
            }
            this.updateLastHeartbeat();
            setInterval(() => {
              this.heartbeat();
            }, HEARTBEAT_INTERVAL);
            if (this.shouldFetchUnseenEventsOnConnect) {
              this.fetchUnseenEventsAPI();
            }
            break;
          case WalletLinkWebSocket_1.ConnectionState.CONNECTING:
            break;
        }
        if (this.connected !== connected) {
          this.connected = connected;
        }
      });
      ws.setIncomingDataListener((m2) => {
        var _a, _b, _c;
        switch (m2.type) {
          // handle server's heartbeat responses
          case "Heartbeat":
            this.updateLastHeartbeat();
            return;
          // handle link status updates
          case "IsLinkedOK":
          case "Linked": {
            const linked = m2.type === "IsLinkedOK" ? m2.linked : void 0;
            (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.LINKED, {
              sessionIdHash: Session_1.Session.hash(session.id),
              linked,
              type: m2.type,
              onlineGuests: m2.onlineGuests
            });
            this.linked = linked || m2.onlineGuests > 0;
            break;
          }
          // handle session config updates
          case "GetSessionConfigOK":
          case "SessionConfigUpdated": {
            (_b = this.diagnostic) === null || _b === void 0 ? void 0 : _b.log(DiagnosticLogger_1.EVENTS.SESSION_CONFIG_RECEIVED, {
              sessionIdHash: Session_1.Session.hash(session.id),
              metadata_keys: m2 && m2.metadata ? Object.keys(m2.metadata) : void 0
            });
            this.handleSessionMetadataUpdated(m2.metadata);
            break;
          }
          case "Event": {
            this.handleIncomingEvent(m2);
            break;
          }
        }
        if (m2.id !== void 0) {
          (_c = this.requestResolutions.get(m2.id)) === null || _c === void 0 ? void 0 : _c(m2);
        }
      });
      this.ws = ws;
      this.http = new WalletLinkHTTP_1.WalletLinkHTTP(linkAPIUrl, session.id, session.key);
    }
    /**
     * Make a connection to the server
     */
    connect() {
      var _a;
      if (this.destroyed) {
        throw new Error("instance is destroyed");
      }
      (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.STARTED_CONNECTING, {
        sessionIdHash: Session_1.Session.hash(this.session.id)
      });
      this.ws.connect();
    }
    /**
     * Terminate connection, and mark as destroyed. To reconnect, create a new
     * instance of WalletSDKConnection
     */
    destroy() {
      var _a;
      this.destroyed = true;
      this.ws.disconnect();
      (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.DISCONNECTED, {
        sessionIdHash: Session_1.Session.hash(this.session.id)
      });
      this.listener = void 0;
    }
    get isDestroyed() {
      return this.destroyed;
    }
    get connected() {
      return this._connected;
    }
    set connected(connected) {
      var _a, _b;
      this._connected = connected;
      if (connected)
        (_a = this.onceConnected) === null || _a === void 0 ? void 0 : _a.call(this);
      (_b = this.listener) === null || _b === void 0 ? void 0 : _b.connectedUpdated(connected);
    }
    setOnceConnected(callback) {
      return new Promise((resolve) => {
        if (this.connected) {
          callback().then(resolve);
        } else {
          this.onceConnected = () => {
            callback().then(resolve);
            this.onceConnected = void 0;
          };
        }
      });
    }
    get linked() {
      return this._linked;
    }
    set linked(linked) {
      var _a, _b;
      this._linked = linked;
      if (linked)
        (_a = this.onceLinked) === null || _a === void 0 ? void 0 : _a.call(this);
      (_b = this.listener) === null || _b === void 0 ? void 0 : _b.linkedUpdated(linked);
    }
    setOnceLinked(callback) {
      return new Promise((resolve) => {
        if (this.linked) {
          callback().then(resolve);
        } else {
          this.onceLinked = () => {
            callback().then(resolve);
            this.onceLinked = void 0;
          };
        }
      });
    }
    async handleIncomingEvent(m2) {
      var _a, _b;
      if (m2.type !== "Event" || m2.event !== "Web3Response") {
        return;
      }
      try {
        const decryptedData = await this.cipher.decrypt(m2.data);
        const message = JSON.parse(decryptedData);
        if (message.type !== "WEB3_RESPONSE")
          return;
        (_a = this.listener) === null || _a === void 0 ? void 0 : _a.handleWeb3ResponseMessage(message);
      } catch (_c) {
        (_b = this.diagnostic) === null || _b === void 0 ? void 0 : _b.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "incomingEvent"
        });
      }
    }
    async checkUnseenEvents() {
      if (!this.connected) {
        this.shouldFetchUnseenEventsOnConnect = true;
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 250));
      try {
        await this.fetchUnseenEventsAPI();
      } catch (e2) {
        console.error("Unable to check for unseen events", e2);
      }
    }
    async fetchUnseenEventsAPI() {
      this.shouldFetchUnseenEventsOnConnect = false;
      const responseEvents = await this.http.fetchUnseenEvents();
      responseEvents.forEach((e2) => this.handleIncomingEvent(e2));
    }
    /**
     * Set session metadata in SessionConfig object
     * @param key
     * @param value
     * @returns a Promise that completes when successful
     */
    async setSessionMetadata(key, value) {
      const message = {
        type: "SetSessionConfig",
        id: (0, type_1.IntNumber)(this.nextReqId++),
        sessionId: this.session.id,
        metadata: { [key]: value }
      };
      return this.setOnceConnected(async () => {
        const res = await this.makeRequest(message);
        if (res.type === "Fail") {
          throw new Error(res.error || "failed to set session metadata");
        }
      });
    }
    /**
     * Publish an event and emit event ID when successful
     * @param event event name
     * @param unencryptedData unencrypted event data
     * @param callWebhook whether the webhook should be invoked
     * @returns a Promise that emits event ID when successful
     */
    async publishEvent(event, unencryptedData, callWebhook = false) {
      const data = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, unencryptedData), { origin: location.origin, relaySource: window.coinbaseWalletExtension ? "injected_sdk" : "sdk" })));
      const message = {
        type: "PublishEvent",
        id: (0, type_1.IntNumber)(this.nextReqId++),
        sessionId: this.session.id,
        event,
        data,
        callWebhook
      };
      return this.setOnceLinked(async () => {
        const res = await this.makeRequest(message);
        if (res.type === "Fail") {
          throw new Error(res.error || "failed to publish event");
        }
        return res.eventId;
      });
    }
    sendData(message) {
      this.ws.sendData(JSON.stringify(message));
    }
    updateLastHeartbeat() {
      this.lastHeartbeatResponse = Date.now();
    }
    heartbeat() {
      if (Date.now() - this.lastHeartbeatResponse > HEARTBEAT_INTERVAL * 2) {
        this.ws.disconnect();
        return;
      }
      try {
        this.ws.sendData("h");
      } catch (_a) {
      }
    }
    async makeRequest(message, timeout = REQUEST_TIMEOUT) {
      const reqId = message.id;
      this.sendData(message);
      let timeoutId;
      return Promise.race([
        new Promise((_2, reject) => {
          timeoutId = window.setTimeout(() => {
            reject(new Error(`request ${reqId} timed out`));
          }, timeout);
        }),
        new Promise((resolve) => {
          this.requestResolutions.set(reqId, (m2) => {
            clearTimeout(timeoutId);
            resolve(m2);
            this.requestResolutions.delete(reqId);
          });
        })
      ]);
    }
    async authenticate() {
      const m2 = {
        type: "HostSession",
        id: (0, type_1.IntNumber)(this.nextReqId++),
        sessionId: this.session.id,
        sessionKey: this.session.key
      };
      const res = await this.makeRequest(m2);
      if (res.type === "Fail") {
        throw new Error(res.error || "failed to authentcate");
      }
    }
    sendIsLinked() {
      const m2 = {
        type: "IsLinked",
        id: (0, type_1.IntNumber)(this.nextReqId++),
        sessionId: this.session.id
      };
      this.sendData(m2);
    }
    sendGetSessionConfig() {
      const m2 = {
        type: "GetSessionConfig",
        id: (0, type_1.IntNumber)(this.nextReqId++),
        sessionId: this.session.id
      };
      this.sendData(m2);
    }
  };
  WalletLinkConnection.WalletLinkConnection = WalletLinkConnection$1;
  return WalletLinkConnection;
}
var WalletLinkRelayUI = {};
var cssReset = {};
var cssResetCss = {};
var hasRequiredCssResetCss;
function requireCssResetCss() {
  if (hasRequiredCssResetCss) return cssResetCss;
  hasRequiredCssResetCss = 1;
  Object.defineProperty(cssResetCss, "__esModule", { value: true });
  cssResetCss.default = /* @__PURE__ */ (() => `@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}`)();
  return cssResetCss;
}
var hasRequiredCssReset;
function requireCssReset() {
  if (hasRequiredCssReset) return cssReset;
  hasRequiredCssReset = 1;
  var __importDefault2 = cssReset && cssReset.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(cssReset, "__esModule", { value: true });
  cssReset.injectCssReset = void 0;
  const cssReset_css_1 = __importDefault2(/* @__PURE__ */ requireCssResetCss());
  function injectCssReset() {
    const styleEl = document.createElement("style");
    styleEl.type = "text/css";
    styleEl.appendChild(document.createTextNode(cssReset_css_1.default));
    document.documentElement.appendChild(styleEl);
  }
  cssReset.injectCssReset = injectCssReset;
  return cssReset;
}
var LinkFlow = {};
var n, l$1, u$1, t$1, i$1, r$1, o$1, e$1, f$1, c$1, s$1, a$1, h$1, p$1 = {}, v$1 = [], y$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, w$1 = Array.isArray;
function d$1(n2, l2) {
  for (var u2 in l2) n2[u2] = l2[u2];
  return n2;
}
function g$1(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _$1(l2, u2, t2) {
  var i2, r2, o2, e2 = {};
  for (o2 in u2) "key" == o2 ? i2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : e2[o2] = u2[o2];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (o2 in l2.defaultProps) void 0 === e2[o2] && (e2[o2] = l2.defaultProps[o2]);
  return m$1(l2, e2, i2, r2, null);
}
function m$1(n2, t2, i2, r2, o2) {
  var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u$1 : o2, __i: -1, __u: 0 };
  return null == o2 && null != l$1.vnode && l$1.vnode(e2), e2;
}
function b$1() {
  return { current: null };
}
function k$1(n2) {
  return n2.children;
}
function x$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function S(n2, l2) {
  if (null == l2) return n2.__ ? S(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) return u2.__e;
  return "function" == typeof n2.type ? S(n2) : null;
}
function C$1(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
      n2.__e = n2.__c.base = u2.__e;
      break;
    }
    return C$1(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i$1.push(n2) && !$.__r++ || r$1 != l$1.debounceRendering) && ((r$1 = l$1.debounceRendering) || o$1)($);
}
function $() {
  for (var n2, u2, t2, r2, o2, f2, c2, s2 = 1; i$1.length; ) i$1.length > s2 && i$1.sort(e$1), n2 = i$1.shift(), s2 = i$1.length, n2.__d && (t2 = void 0, r2 = void 0, o2 = (r2 = (u2 = n2).__v).__e, f2 = [], c2 = [], u2.__P && ((t2 = d$1({}, r2)).__v = r2.__v + 1, l$1.vnode && l$1.vnode(t2), O(u2.__P, t2, r2, u2.__n, u2.__P.namespaceURI, 32 & r2.__u ? [o2] : null, f2, null == o2 ? S(r2) : o2, !!(32 & r2.__u), c2), t2.__v = r2.__v, t2.__.__k[t2.__i] = t2, N(f2, t2, c2), r2.__e = r2.__ = null, t2.__e != o2 && C$1(t2)));
  $.__r = 0;
}
function I(n2, l2, u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, y2, w2, d2, g2, _2, m2 = t2 && t2.__k || v$1, b2 = l2.length;
  for (f2 = P$1(u2, l2, m2, f2, b2), a2 = 0; a2 < b2; a2++) null != (y2 = u2.__k[a2]) && (h2 = -1 == y2.__i ? p$1 : m2[y2.__i] || p$1, y2.__i = a2, g2 = O(n2, y2, h2, i2, r2, o2, e2, f2, c2, s2), w2 = y2.__e, y2.ref && h2.ref != y2.ref && (h2.ref && B$1(h2.ref, null, y2), s2.push(y2.ref, y2.__c || w2, y2)), null == d2 && null != w2 && (d2 = w2), (_2 = !!(4 & y2.__u)) || h2.__k === y2.__k ? f2 = A$1(y2, f2, n2, _2) : "function" == typeof y2.type && void 0 !== g2 ? f2 = g2 : w2 && (f2 = w2.nextSibling), y2.__u &= -7);
  return u2.__e = d2, f2;
}
function P$1(n2, l2, u2, t2, i2) {
  var r2, o2, e2, f2, c2, s2 = u2.length, a2 = s2, h2 = 0;
  for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? (f2 = r2 + h2, (o2 = n2.__k[r2] = "string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? m$1(null, o2, null, null, null) : w$1(o2) ? m$1(k$1, { children: o2 }, null, null, null) : null == o2.constructor && o2.__b > 0 ? m$1(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : o2).__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 != (c2 = o2.__i = L(o2, u2, f2, a2)) && (a2--, (e2 = u2[c2]) && (e2.__u |= 2)), null == e2 || null == e2.__v ? (-1 == c2 && (i2 > s2 ? h2-- : i2 < s2 && h2++), "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f2 && (c2 == f2 - 1 ? h2-- : c2 == f2 + 1 ? h2++ : (c2 > f2 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (a2) for (r2 = 0; r2 < s2; r2++) null != (e2 = u2[r2]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = S(e2)), D$1(e2, e2));
  return t2;
}
function A$1(n2, l2, u2, t2) {
  var i2, r2;
  if ("function" == typeof n2.type) {
    for (i2 = n2.__k, r2 = 0; i2 && r2 < i2.length; r2++) i2[r2] && (i2[r2].__ = n2, l2 = A$1(i2[r2], l2, u2, t2));
    return l2;
  }
  n2.__e != l2 && (t2 && (l2 && n2.type && !l2.parentNode && (l2 = S(n2)), u2.insertBefore(n2.__e, l2 || null)), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 == l2.nodeType);
  return l2;
}
function H(n2, l2) {
  return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (w$1(n2) ? n2.some(function(n3) {
    H(n3, l2);
  }) : l2.push(n2)), l2;
}
function L(n2, l2, u2, t2) {
  var i2, r2, o2, e2 = n2.key, f2 = n2.type, c2 = l2[u2], s2 = null != c2 && 0 == (2 & c2.__u);
  if (null === c2 && null == n2.key || s2 && e2 == c2.key && f2 == c2.type) return u2;
  if (t2 > (s2 ? 1 : 0)) {
    for (i2 = u2 - 1, r2 = u2 + 1; i2 >= 0 || r2 < l2.length; ) if (null != (c2 = l2[o2 = i2 >= 0 ? i2-- : r2++]) && 0 == (2 & c2.__u) && e2 == c2.key && f2 == c2.type) return o2;
  }
  return -1;
}
function T$1(n2, l2, u2) {
  "-" == l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || y$1.test(l2) ? u2 : u2 + "px";
}
function j$1(n2, l2, u2, t2, i2) {
  var r2, o2;
  n: if ("style" == l2) if ("string" == typeof u2) n2.style.cssText = u2;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u2 && l2 in u2 || T$1(n2.style, l2, "");
    if (u2) for (l2 in u2) t2 && u2[l2] == t2[l2] || T$1(n2.style, l2, u2[l2]);
  }
  else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(f$1, "$1")), o2 = l2.toLowerCase(), l2 = o2 in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? o2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = c$1, n2.addEventListener(l2, r2 ? a$1 : s$1, r2)) : n2.removeEventListener(l2, r2 ? a$1 : s$1, r2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u2 ? "" : u2;
      break n;
    } catch (n3) {
    }
    "function" == typeof u2 || (null == u2 || false === u2 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u2 ? "" : u2));
  }
}
function F$1(n2) {
  return function(u2) {
    if (this.l) {
      var t2 = this.l[u2.type + n2];
      if (null == u2.t) u2.t = c$1++;
      else if (u2.t < t2.u) return;
      return t2(l$1.event ? l$1.event(u2) : u2);
    }
  };
}
function O(n2, u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, p2, v2, y2, _2, m2, b2, S2, C2, M2, $2, P2, A2, H2, L2, T2, j2 = u2.type;
  if (null != u2.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f2 = u2.__e = t2.__e]), (a2 = l$1.__b) && a2(u2);
  n: if ("function" == typeof j2) try {
    if (b2 = u2.props, S2 = "prototype" in j2 && j2.prototype.render, C2 = (a2 = j2.contextType) && i2[a2.__c], M2 = a2 ? C2 ? C2.props.value : a2.__ : i2, t2.__c ? m2 = (h2 = u2.__c = t2.__c).__ = h2.__E : (S2 ? u2.__c = h2 = new j2(b2, M2) : (u2.__c = h2 = new x$1(b2, M2), h2.constructor = j2, h2.render = E), C2 && C2.sub(h2), h2.props = b2, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), S2 && null == h2.__s && (h2.__s = h2.state), S2 && null != j2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = d$1({}, h2.__s)), d$1(h2.__s, j2.getDerivedStateFromProps(b2, h2.__s))), v2 = h2.props, y2 = h2.state, h2.__v = u2, p2) S2 && null == j2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), S2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (S2 && null == j2.getDerivedStateFromProps && b2 !== v2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(b2, M2), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(b2, h2.__s, M2) || u2.__v == t2.__v) {
        for (u2.__v != t2.__v && (h2.props = b2, h2.state = h2.__s, h2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.some(function(n3) {
          n3 && (n3.__ = u2);
        }), $2 = 0; $2 < h2._sb.length; $2++) h2.__h.push(h2._sb[$2]);
        h2._sb = [], h2.__h.length && e2.push(h2);
        break n;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(b2, h2.__s, M2), S2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(v2, y2, _2);
      });
    }
    if (h2.context = M2, h2.props = b2, h2.__P = n2, h2.__e = false, P2 = l$1.__r, A2 = 0, S2) {
      for (h2.state = h2.__s, h2.__d = false, P2 && P2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++) h2.__h.push(h2._sb[H2]);
      h2._sb = [];
    } else do {
      h2.__d = false, P2 && P2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++A2 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i2 = d$1(d$1({}, i2), h2.getChildContext())), S2 && !p2 && null != h2.getSnapshotBeforeUpdate && (_2 = h2.getSnapshotBeforeUpdate(v2, y2)), L2 = a2, null != a2 && a2.type === k$1 && null == a2.key && (L2 = V(a2.props.children)), f2 = I(n2, w$1(L2) ? L2 : [L2], u2, t2, i2, r2, o2, e2, f2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && e2.push(h2), m2 && (h2.__E = h2.__ = null);
  } catch (n3) {
    if (u2.__v = null, c2 || null != o2) if (n3.then) {
      for (u2.__u |= c2 ? 160 : 128; f2 && 8 == f2.nodeType && f2.nextSibling; ) f2 = f2.nextSibling;
      o2[o2.indexOf(f2)] = null, u2.__e = f2;
    } else {
      for (T2 = o2.length; T2--; ) g$1(o2[T2]);
      z$1(u2);
    }
    else u2.__e = t2.__e, u2.__k = t2.__k, n3.then || z$1(u2);
    l$1.__e(n3, u2, t2);
  }
  else null == o2 && u2.__v == t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : f2 = u2.__e = q$1(t2.__e, u2, t2, i2, r2, o2, e2, c2, s2);
  return (a2 = l$1.diffed) && a2(u2), 128 & u2.__u ? void 0 : f2;
}
function z$1(n2) {
  n2 && n2.__c && (n2.__c.__e = true), n2 && n2.__k && n2.__k.forEach(z$1);
}
function N(n2, u2, t2) {
  for (var i2 = 0; i2 < t2.length; i2++) B$1(t2[i2], t2[++i2], t2[++i2]);
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function V(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b && n2.__b > 0 ? n2 : w$1(n2) ? n2.map(V) : d$1({}, n2);
}
function q$1(u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, v2, y2, d2, _2, m2, b2 = i2.props, k2 = t2.props, x2 = t2.type;
  if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
    for (a2 = 0; a2 < e2.length; a2++) if ((d2 = e2[a2]) && "setAttribute" in d2 == !!x2 && (x2 ? d2.localName == x2 : 3 == d2.nodeType)) {
      u2 = d2, e2[a2] = null;
      break;
    }
  }
  if (null == u2) {
    if (null == x2) return document.createTextNode(k2);
    u2 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l$1.__m && l$1.__m(t2, e2), c2 = false), e2 = null;
  }
  if (null == x2) b2 === k2 || c2 && u2.data == k2 || (u2.data = k2);
  else {
    if (e2 = e2 && n.call(u2.childNodes), b2 = i2.props || p$1, !c2 && null != e2) for (b2 = {}, a2 = 0; a2 < u2.attributes.length; a2++) b2[(d2 = u2.attributes[a2]).name] = d2.value;
    for (a2 in b2) if (d2 = b2[a2], "children" == a2) ;
    else if ("dangerouslySetInnerHTML" == a2) v2 = d2;
    else if (!(a2 in k2)) {
      if ("value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2) continue;
      j$1(u2, a2, null, d2, o2);
    }
    for (a2 in k2) d2 = k2[a2], "children" == a2 ? y2 = d2 : "dangerouslySetInnerHTML" == a2 ? h2 = d2 : "value" == a2 ? _2 = d2 : "checked" == a2 ? m2 = d2 : c2 && "function" != typeof d2 || b2[a2] === d2 || j$1(u2, a2, d2, b2[a2], o2);
    if (h2) c2 || v2 && (h2.__html == v2.__html || h2.__html == u2.innerHTML) || (u2.innerHTML = h2.__html), t2.__k = [];
    else if (v2 && (u2.innerHTML = ""), I("template" == t2.type ? u2.content : u2, w$1(y2) ? y2 : [y2], t2, i2, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f2, e2 ? e2[0] : i2.__k && S(i2, 0), c2, s2), null != e2) for (a2 = e2.length; a2--; ) g$1(e2[a2]);
    c2 || (a2 = "value", "progress" == x2 && null == _2 ? u2.removeAttribute("value") : null != _2 && (_2 !== u2[a2] || "progress" == x2 && !_2 || "option" == x2 && _2 != b2[a2]) && j$1(u2, a2, _2, b2[a2], o2), a2 = "checked", null != m2 && m2 != u2[a2] && j$1(u2, a2, m2, b2[a2], o2));
  }
  return u2;
}
function B$1(n2, u2, t2) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u2 || (n2.__u = n2(u2));
    } else n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, t2);
  }
}
function D$1(n2, u2, t2) {
  var i2, r2;
  if (l$1.unmount && l$1.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || B$1(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l$1.__e(n3, u2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && D$1(i2[r2], u2, t2 || "function" != typeof n2.type);
  t2 || g$1(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function E(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function G(u2, t2, i2) {
  var r2, o2, e2, f2;
  t2 == document && (t2 = document.documentElement), l$1.__ && l$1.__(u2, t2), o2 = (r2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, e2 = [], f2 = [], O(t2, u2 = (!r2 && i2 || t2).__k = _$1(k$1, null, [u2]), o2 || p$1, p$1, t2.namespaceURI, !r2 && i2 ? [i2] : o2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, e2, !r2 && i2 ? i2 : o2 ? o2.__e : t2.firstChild, r2, f2), N(e2, u2, f2);
}
function J(n2, l2) {
  G(n2, l2, J);
}
function K(l2, u2, t2) {
  var i2, r2, o2, e2, f2 = d$1({}, l2.props);
  for (o2 in l2.type && l2.type.defaultProps && (e2 = l2.type.defaultProps), u2) "key" == o2 ? i2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = void 0 === u2[o2] && null != e2 ? e2[o2] : u2[o2];
  return arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), m$1(l2.type, f2, i2 || l2.key, r2 || l2.ref, null);
}
function Q(n2) {
  function l2(n3) {
    var u2, t2;
    return this.getChildContext || (u2 = /* @__PURE__ */ new Set(), (t2 = {})[l2.__c] = this, this.getChildContext = function() {
      return t2;
    }, this.componentWillUnmount = function() {
      u2 = null;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value != n4.value && u2.forEach(function(n5) {
        n5.__e = true, M(n5);
      });
    }, this.sub = function(n4) {
      u2.add(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u2 && u2.delete(n4), l3 && l3.call(n4);
      };
    }), n3.children;
  }
  return l2.__c = "__cC" + h$1++, l2.__ = n2, l2.Provider = l2.__l = (l2.Consumer = function(n3, l3) {
    return n3.children(l3);
  }).contextType = l2, l2;
}
n = v$1.slice, l$1 = { __e: function(n2, l2, u2, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u$1 = 0, t$1 = function(n2) {
  return null != n2 && null == n2.constructor;
}, x$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d$1({}, this.state), "function" == typeof n2 && (n2 = n2(d$1({}, u2), this.props)), n2 && d$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), M(this));
}, x$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, x$1.prototype.render = k$1, i$1 = [], o$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e$1 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, $.__r = 0, f$1 = /(PointerCapture)$|Capture$/i, c$1 = 0, s$1 = F$1(false), a$1 = F$1(true), h$1 = 0;
const preact_module = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: x$1,
  Fragment: k$1,
  cloneElement: K,
  createContext: Q,
  createElement: _$1,
  createRef: b$1,
  h: _$1,
  hydrate: J,
  get isValidElement() {
    return t$1;
  },
  get options() {
    return l$1;
  },
  render: G,
  toChildArray: H
}, Symbol.toStringTag, { value: "Module" }));
const require$$1$1 = /* @__PURE__ */ getAugmentedNamespace(preact_module);
var ConnectDialog = {};
const require$$0$1 = /* @__PURE__ */ getAugmentedNamespace(clsx_m);
var t, r, u, i, o = 0, f = [], c = l$1, e = c.__b, a = c.__r, v = c.diffed, l = c.__c, m = c.unmount, s = c.__;
function p(n2, t2) {
  c.__h && c.__h(r, n2, o || t2), o = 0;
  var u2 = r.__H || (r.__H = { __: [], __h: [] });
  return n2 >= u2.__.length && u2.__.push({}), u2.__[n2];
}
function d(n2) {
  return o = 1, h(D, n2);
}
function h(n2, u2, i2) {
  var o2 = p(t++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : D(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.__f)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H) return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      })) return !c2 || c2.call(this, n3, t2, r2);
      var i3 = o2.__c.props !== n3;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), c2 && c2.call(this, n3, t2, r2) || i3;
    };
    r.__f = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function y(n2, u2) {
  var i2 = p(t++, 3);
  !c.__s && C(i2.__H, u2) && (i2.__ = n2, i2.u = u2, r.__H.__h.push(i2));
}
function _(n2, u2) {
  var i2 = p(t++, 4);
  !c.__s && C(i2.__H, u2) && (i2.__ = n2, i2.u = u2, r.__h.push(i2));
}
function A(n2) {
  return o = 5, T(function() {
    return { current: n2 };
  }, []);
}
function F(n2, t2, r2) {
  o = 6, _(function() {
    if ("function" == typeof n2) {
      var r3 = n2(t2());
      return function() {
        n2(null), r3 && "function" == typeof r3 && r3();
      };
    }
    if (n2) return n2.current = t2(), function() {
      return n2.current = null;
    };
  }, null == r2 ? r2 : r2.concat(n2));
}
function T(n2, r2) {
  var u2 = p(t++, 7);
  return C(u2.__H, r2) && (u2.__ = n2(), u2.__H = r2, u2.__h = n2), u2.__;
}
function q(n2, t2) {
  return o = 8, T(function() {
    return n2;
  }, t2);
}
function x(n2) {
  var u2 = r.context[n2.__c], i2 = p(t++, 9);
  return i2.c = n2, u2 ? (null == i2.__ && (i2.__ = true, u2.sub(r)), u2.props.value) : n2.__;
}
function P(n2, t2) {
  c.useDebugValue && c.useDebugValue(t2 ? t2(n2) : n2);
}
function b(n2) {
  var u2 = p(t++, 10), i2 = d();
  return u2.__ = n2, r.componentDidCatch || (r.componentDidCatch = function(n3, t2) {
    u2.__ && u2.__(n3, t2), i2[1](n3);
  }), [i2[0], function() {
    i2[1](void 0);
  }];
}
function g() {
  var n2 = p(t++, 11);
  if (!n2.__) {
    for (var u2 = r.__v; null !== u2 && !u2.__m && null !== u2.__; ) u2 = u2.__;
    var i2 = u2.__m || (u2.__m = [0, 0]);
    n2.__ = "P" + i2[0] + "-" + i2[1]++;
  }
  return n2.__;
}
function j() {
  for (var n2; n2 = f.shift(); ) if (n2.__P && n2.__H) try {
    n2.__H.__h.forEach(z), n2.__H.__h.forEach(B), n2.__H.__h = [];
  } catch (t2) {
    n2.__H.__h = [], c.__e(t2, n2.__v);
  }
}
c.__b = function(n2) {
  r = null, e && e(n2);
}, c.__ = function(n2, t2) {
  n2 && t2.__k && t2.__k.__m && (n2.__m = t2.__k.__m), s && s(n2, t2);
}, c.__r = function(n2) {
  a && a(n2), t = 0;
  var i2 = (r = n2.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
  })) : (i2.__h.forEach(z), i2.__h.forEach(B), i2.__h = [], t = 0)), u = r;
}, c.diffed = function(n2) {
  v && v(n2);
  var t2 = n2.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== f.push(t2) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j)), t2.__H.__.forEach(function(n3) {
    n3.u && (n3.__H = n3.u), n3.u = void 0;
  })), u = r = null;
}, c.__c = function(n2, t2) {
  t2.some(function(n3) {
    try {
      n3.__h.forEach(z), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B(n4);
      });
    } catch (r2) {
      t2.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t2 = [], c.__e(r2, n3.__v);
    }
  }), l && l(n2, t2);
}, c.unmount = function(n2) {
  m && m(n2);
  var t2, r2 = n2.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n3) {
    try {
      z(n3);
    } catch (n4) {
      t2 = n4;
    }
  }), r2.__H = void 0, t2 && c.__e(t2, r2.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), k && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 35);
  k && (t2 = requestAnimationFrame(r2));
}
function z(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function B(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function C(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function D(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
const hooks_module = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useCallback: q,
  useContext: x,
  useDebugValue: P,
  useEffect: y,
  useErrorBoundary: b,
  useId: g,
  useImperativeHandle: F,
  useLayoutEffect: _,
  useMemo: T,
  useReducer: h,
  useRef: A,
  useState: d
}, Symbol.toStringTag, { value: "Module" }));
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(hooks_module);
var ConnectContent = {};
var CloseIcon = {};
var hasRequiredCloseIcon;
function requireCloseIcon() {
  if (hasRequiredCloseIcon) return CloseIcon;
  hasRequiredCloseIcon = 1;
  Object.defineProperty(CloseIcon, "__esModule", { value: true });
  CloseIcon.CloseIcon = void 0;
  const preact_1 = require$$1$1;
  function CloseIcon$1(props) {
    return (0, preact_1.h)(
      "svg",
      Object.assign({ width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
      (0, preact_1.h)("path", { d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z" })
    );
  }
  CloseIcon.CloseIcon = CloseIcon$1;
  return CloseIcon;
}
var CoinbaseWalletRound = {};
var hasRequiredCoinbaseWalletRound;
function requireCoinbaseWalletRound() {
  if (hasRequiredCoinbaseWalletRound) return CoinbaseWalletRound;
  hasRequiredCoinbaseWalletRound = 1;
  Object.defineProperty(CoinbaseWalletRound, "__esModule", { value: true });
  CoinbaseWalletRound.CoinbaseWalletRound = void 0;
  const preact_1 = require$$1$1;
  function CoinbaseWalletRound$1(props) {
    return (0, preact_1.h)(
      "svg",
      Object.assign({ width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
      (0, preact_1.h)("circle", { cx: "14", cy: "14", r: "14", fill: "#0052FF" }),
      (0, preact_1.h)("path", { d: "M23.8521 14.0003C23.8521 19.455 19.455 23.8521 14.0003 23.8521C8.54559 23.8521 4.14844 19.455 4.14844 14.0003C4.14844 8.54559 8.54559 4.14844 14.0003 4.14844C19.455 4.14844 23.8521 8.54559 23.8521 14.0003Z", fill: "white" }),
      (0, preact_1.h)("path", { d: "M11.1855 12.5042C11.1855 12.0477 11.1855 11.7942 11.2835 11.642C11.3814 11.4899 11.4793 11.3377 11.6261 11.287C11.8219 11.1855 12.0178 11.1855 12.5073 11.1855H15.4934C15.983 11.1855 16.1788 11.1855 16.3746 11.287C16.5215 11.3884 16.6683 11.4899 16.7173 11.642C16.8152 11.8449 16.8152 12.0477 16.8152 12.5042V15.4965C16.8152 15.953 16.8152 16.2066 16.7173 16.3587C16.6194 16.5109 16.5215 16.663 16.3746 16.7137C16.1788 16.8152 15.983 16.8152 15.4934 16.8152H12.5073C12.0178 16.8152 11.8219 16.8152 11.6261 16.7137C11.4793 16.6123 11.3324 16.5109 11.2835 16.3587C11.1855 16.1558 11.1855 15.953 11.1855 15.4965V12.5042Z", fill: "#0052FF" })
    );
  }
  CoinbaseWalletRound.CoinbaseWalletRound = CoinbaseWalletRound$1;
  return CoinbaseWalletRound;
}
var QRCodeIcon = {};
var hasRequiredQRCodeIcon;
function requireQRCodeIcon() {
  if (hasRequiredQRCodeIcon) return QRCodeIcon;
  hasRequiredQRCodeIcon = 1;
  Object.defineProperty(QRCodeIcon, "__esModule", { value: true });
  QRCodeIcon.QRCodeIcon = void 0;
  const preact_1 = require$$1$1;
  function QRCodeIcon$1(props) {
    return (0, preact_1.h)(
      "svg",
      Object.assign({ width: "18", height: "18", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
      (0, preact_1.h)("path", { d: "M3 3V8.99939L5 8.99996V5H9V3H3Z" }),
      (0, preact_1.h)("path", { d: "M15 21L21 21V15.0006L19 15V19L15 19V21Z" }),
      (0, preact_1.h)("path", { d: "M21 9H19V5H15.0006L15 3H21V9Z" }),
      (0, preact_1.h)("path", { d: "M3 15V21H8.99939L8.99996 19H5L5 15H3Z" })
    );
  }
  QRCodeIcon.QRCodeIcon = QRCodeIcon$1;
  return QRCodeIcon;
}
var QRCode = {};
var qrcodeSvg;
var hasRequiredQrcodeSvg;
function requireQrcodeSvg() {
  if (hasRequiredQrcodeSvg) return qrcodeSvg;
  hasRequiredQrcodeSvg = 1;
  function QR8bitByte(data) {
    this.mode = QRMode.MODE_8BIT_BYTE;
    this.data = data;
    this.parsedData = [];
    for (var i3 = 0, l2 = this.data.length; i3 < l2; i3++) {
      var byteArray = [];
      var code = this.data.charCodeAt(i3);
      if (code > 65536) {
        byteArray[0] = 240 | (code & 1835008) >>> 18;
        byteArray[1] = 128 | (code & 258048) >>> 12;
        byteArray[2] = 128 | (code & 4032) >>> 6;
        byteArray[3] = 128 | code & 63;
      } else if (code > 2048) {
        byteArray[0] = 224 | (code & 61440) >>> 12;
        byteArray[1] = 128 | (code & 4032) >>> 6;
        byteArray[2] = 128 | code & 63;
      } else if (code > 128) {
        byteArray[0] = 192 | (code & 1984) >>> 6;
        byteArray[1] = 128 | code & 63;
      } else {
        byteArray[0] = code;
      }
      this.parsedData.push(byteArray);
    }
    this.parsedData = Array.prototype.concat.apply([], this.parsedData);
    if (this.parsedData.length != this.data.length) {
      this.parsedData.unshift(191);
      this.parsedData.unshift(187);
      this.parsedData.unshift(239);
    }
  }
  QR8bitByte.prototype = {
    getLength: function(buffer) {
      return this.parsedData.length;
    },
    write: function(buffer) {
      for (var i3 = 0, l2 = this.parsedData.length; i3 < l2; i3++) {
        buffer.put(this.parsedData[i3], 8);
      }
    }
  };
  function QRCodeModel(typeNumber, errorCorrectLevel) {
    this.typeNumber = typeNumber;
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = null;
    this.moduleCount = 0;
    this.dataCache = null;
    this.dataList = [];
  }
  QRCodeModel.prototype = { addData: function(data) {
    var newData = new QR8bitByte(data);
    this.dataList.push(newData);
    this.dataCache = null;
  }, isDark: function(row, col) {
    if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
      throw new Error(row + "," + col);
    }
    return this.modules[row][col];
  }, getModuleCount: function() {
    return this.moduleCount;
  }, make: function() {
    this.makeImpl(false, this.getBestMaskPattern());
  }, makeImpl: function(test, maskPattern) {
    this.moduleCount = this.typeNumber * 4 + 17;
    this.modules = new Array(this.moduleCount);
    for (var row = 0; row < this.moduleCount; row++) {
      this.modules[row] = new Array(this.moduleCount);
      for (var col = 0; col < this.moduleCount; col++) {
        this.modules[row][col] = null;
      }
    }
    this.setupPositionProbePattern(0, 0);
    this.setupPositionProbePattern(this.moduleCount - 7, 0);
    this.setupPositionProbePattern(0, this.moduleCount - 7);
    this.setupPositionAdjustPattern();
    this.setupTimingPattern();
    this.setupTypeInfo(test, maskPattern);
    if (this.typeNumber >= 7) {
      this.setupTypeNumber(test);
    }
    if (this.dataCache == null) {
      this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
    }
    this.mapData(this.dataCache, maskPattern);
  }, setupPositionProbePattern: function(row, col) {
    for (var r2 = -1; r2 <= 7; r2++) {
      if (row + r2 <= -1 || this.moduleCount <= row + r2) continue;
      for (var c2 = -1; c2 <= 7; c2++) {
        if (col + c2 <= -1 || this.moduleCount <= col + c2) continue;
        if (0 <= r2 && r2 <= 6 && (c2 == 0 || c2 == 6) || 0 <= c2 && c2 <= 6 && (r2 == 0 || r2 == 6) || 2 <= r2 && r2 <= 4 && 2 <= c2 && c2 <= 4) {
          this.modules[row + r2][col + c2] = true;
        } else {
          this.modules[row + r2][col + c2] = false;
        }
      }
    }
  }, getBestMaskPattern: function() {
    var minLostPoint = 0;
    var pattern2 = 0;
    for (var i3 = 0; i3 < 8; i3++) {
      this.makeImpl(true, i3);
      var lostPoint = QRUtil.getLostPoint(this);
      if (i3 == 0 || minLostPoint > lostPoint) {
        minLostPoint = lostPoint;
        pattern2 = i3;
      }
    }
    return pattern2;
  }, createMovieClip: function(target_mc, instance_name, depth) {
    var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
    var cs = 1;
    this.make();
    for (var row = 0; row < this.modules.length; row++) {
      var y2 = row * cs;
      for (var col = 0; col < this.modules[row].length; col++) {
        var x2 = col * cs;
        var dark = this.modules[row][col];
        if (dark) {
          qr_mc.beginFill(0, 100);
          qr_mc.moveTo(x2, y2);
          qr_mc.lineTo(x2 + cs, y2);
          qr_mc.lineTo(x2 + cs, y2 + cs);
          qr_mc.lineTo(x2, y2 + cs);
          qr_mc.endFill();
        }
      }
    }
    return qr_mc;
  }, setupTimingPattern: function() {
    for (var r2 = 8; r2 < this.moduleCount - 8; r2++) {
      if (this.modules[r2][6] != null) {
        continue;
      }
      this.modules[r2][6] = r2 % 2 == 0;
    }
    for (var c2 = 8; c2 < this.moduleCount - 8; c2++) {
      if (this.modules[6][c2] != null) {
        continue;
      }
      this.modules[6][c2] = c2 % 2 == 0;
    }
  }, setupPositionAdjustPattern: function() {
    var pos = QRUtil.getPatternPosition(this.typeNumber);
    for (var i3 = 0; i3 < pos.length; i3++) {
      for (var j2 = 0; j2 < pos.length; j2++) {
        var row = pos[i3];
        var col = pos[j2];
        if (this.modules[row][col] != null) {
          continue;
        }
        for (var r2 = -2; r2 <= 2; r2++) {
          for (var c2 = -2; c2 <= 2; c2++) {
            if (r2 == -2 || r2 == 2 || c2 == -2 || c2 == 2 || r2 == 0 && c2 == 0) {
              this.modules[row + r2][col + c2] = true;
            } else {
              this.modules[row + r2][col + c2] = false;
            }
          }
        }
      }
    }
  }, setupTypeNumber: function(test) {
    var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
    for (var i3 = 0; i3 < 18; i3++) {
      var mod = !test && (bits >> i3 & 1) == 1;
      this.modules[Math.floor(i3 / 3)][i3 % 3 + this.moduleCount - 8 - 3] = mod;
    }
    for (var i3 = 0; i3 < 18; i3++) {
      var mod = !test && (bits >> i3 & 1) == 1;
      this.modules[i3 % 3 + this.moduleCount - 8 - 3][Math.floor(i3 / 3)] = mod;
    }
  }, setupTypeInfo: function(test, maskPattern) {
    var data = this.errorCorrectLevel << 3 | maskPattern;
    var bits = QRUtil.getBCHTypeInfo(data);
    for (var i3 = 0; i3 < 15; i3++) {
      var mod = !test && (bits >> i3 & 1) == 1;
      if (i3 < 6) {
        this.modules[i3][8] = mod;
      } else if (i3 < 8) {
        this.modules[i3 + 1][8] = mod;
      } else {
        this.modules[this.moduleCount - 15 + i3][8] = mod;
      }
    }
    for (var i3 = 0; i3 < 15; i3++) {
      var mod = !test && (bits >> i3 & 1) == 1;
      if (i3 < 8) {
        this.modules[8][this.moduleCount - i3 - 1] = mod;
      } else if (i3 < 9) {
        this.modules[8][15 - i3 - 1 + 1] = mod;
      } else {
        this.modules[8][15 - i3 - 1] = mod;
      }
    }
    this.modules[this.moduleCount - 8][8] = !test;
  }, mapData: function(data, maskPattern) {
    var inc = -1;
    var row = this.moduleCount - 1;
    var bitIndex = 7;
    var byteIndex = 0;
    for (var col = this.moduleCount - 1; col > 0; col -= 2) {
      if (col == 6) col--;
      while (true) {
        for (var c2 = 0; c2 < 2; c2++) {
          if (this.modules[row][col - c2] == null) {
            var dark = false;
            if (byteIndex < data.length) {
              dark = (data[byteIndex] >>> bitIndex & 1) == 1;
            }
            var mask2 = QRUtil.getMask(maskPattern, row, col - c2);
            if (mask2) {
              dark = !dark;
            }
            this.modules[row][col - c2] = dark;
            bitIndex--;
            if (bitIndex == -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }
        row += inc;
        if (row < 0 || this.moduleCount <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  } };
  QRCodeModel.PAD0 = 236;
  QRCodeModel.PAD1 = 17;
  QRCodeModel.createData = function(typeNumber, errorCorrectLevel, dataList) {
    var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
    var buffer = new QRBitBuffer();
    for (var i3 = 0; i3 < dataList.length; i3++) {
      var data = dataList[i3];
      buffer.put(data.mode, 4);
      buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
      data.write(buffer);
    }
    var totalDataCount = 0;
    for (var i3 = 0; i3 < rsBlocks.length; i3++) {
      totalDataCount += rsBlocks[i3].dataCount;
    }
    if (buffer.getLengthInBits() > totalDataCount * 8) {
      throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
    }
    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
      buffer.put(0, 4);
    }
    while (buffer.getLengthInBits() % 8 != 0) {
      buffer.putBit(false);
    }
    while (true) {
      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }
      buffer.put(QRCodeModel.PAD0, 8);
      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }
      buffer.put(QRCodeModel.PAD1, 8);
    }
    return QRCodeModel.createBytes(buffer, rsBlocks);
  };
  QRCodeModel.createBytes = function(buffer, rsBlocks) {
    var offset = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var dcdata = new Array(rsBlocks.length);
    var ecdata = new Array(rsBlocks.length);
    for (var r2 = 0; r2 < rsBlocks.length; r2++) {
      var dcCount = rsBlocks[r2].dataCount;
      var ecCount = rsBlocks[r2].totalCount - dcCount;
      maxDcCount = Math.max(maxDcCount, dcCount);
      maxEcCount = Math.max(maxEcCount, ecCount);
      dcdata[r2] = new Array(dcCount);
      for (var i3 = 0; i3 < dcdata[r2].length; i3++) {
        dcdata[r2][i3] = 255 & buffer.buffer[i3 + offset];
      }
      offset += dcCount;
      var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
      var rawPoly = new QRPolynomial(dcdata[r2], rsPoly.getLength() - 1);
      var modPoly = rawPoly.mod(rsPoly);
      ecdata[r2] = new Array(rsPoly.getLength() - 1);
      for (var i3 = 0; i3 < ecdata[r2].length; i3++) {
        var modIndex = i3 + modPoly.getLength() - ecdata[r2].length;
        ecdata[r2][i3] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
      }
    }
    var totalCodeCount = 0;
    for (var i3 = 0; i3 < rsBlocks.length; i3++) {
      totalCodeCount += rsBlocks[i3].totalCount;
    }
    var data = new Array(totalCodeCount);
    var index2 = 0;
    for (var i3 = 0; i3 < maxDcCount; i3++) {
      for (var r2 = 0; r2 < rsBlocks.length; r2++) {
        if (i3 < dcdata[r2].length) {
          data[index2++] = dcdata[r2][i3];
        }
      }
    }
    for (var i3 = 0; i3 < maxEcCount; i3++) {
      for (var r2 = 0; r2 < rsBlocks.length; r2++) {
        if (i3 < ecdata[r2].length) {
          data[index2++] = ecdata[r2][i3];
        }
      }
    }
    return data;
  };
  var QRMode = { MODE_NUMBER: 1 << 0, MODE_ALPHA_NUM: 1 << 1, MODE_8BIT_BYTE: 1 << 2, MODE_KANJI: 1 << 3 };
  var QRErrorCorrectLevel = { L: 1, M: 0, Q: 3, H: 2 };
  var QRMaskPattern = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 };
  var QRUtil = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, getBCHTypeInfo: function(data) {
    var d2 = data << 10;
    while (QRUtil.getBCHDigit(d2) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
      d2 ^= QRUtil.G15 << QRUtil.getBCHDigit(d2) - QRUtil.getBCHDigit(QRUtil.G15);
    }
    return (data << 10 | d2) ^ QRUtil.G15_MASK;
  }, getBCHTypeNumber: function(data) {
    var d2 = data << 12;
    while (QRUtil.getBCHDigit(d2) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
      d2 ^= QRUtil.G18 << QRUtil.getBCHDigit(d2) - QRUtil.getBCHDigit(QRUtil.G18);
    }
    return data << 12 | d2;
  }, getBCHDigit: function(data) {
    var digit = 0;
    while (data != 0) {
      digit++;
      data >>>= 1;
    }
    return digit;
  }, getPatternPosition: function(typeNumber) {
    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
  }, getMask: function(maskPattern, i3, j2) {
    switch (maskPattern) {
      case QRMaskPattern.PATTERN000:
        return (i3 + j2) % 2 == 0;
      case QRMaskPattern.PATTERN001:
        return i3 % 2 == 0;
      case QRMaskPattern.PATTERN010:
        return j2 % 3 == 0;
      case QRMaskPattern.PATTERN011:
        return (i3 + j2) % 3 == 0;
      case QRMaskPattern.PATTERN100:
        return (Math.floor(i3 / 2) + Math.floor(j2 / 3)) % 2 == 0;
      case QRMaskPattern.PATTERN101:
        return i3 * j2 % 2 + i3 * j2 % 3 == 0;
      case QRMaskPattern.PATTERN110:
        return (i3 * j2 % 2 + i3 * j2 % 3) % 2 == 0;
      case QRMaskPattern.PATTERN111:
        return (i3 * j2 % 3 + (i3 + j2) % 2) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + maskPattern);
    }
  }, getErrorCorrectPolynomial: function(errorCorrectLength) {
    var a2 = new QRPolynomial([1], 0);
    for (var i3 = 0; i3 < errorCorrectLength; i3++) {
      a2 = a2.multiply(new QRPolynomial([1, QRMath.gexp(i3)], 0));
    }
    return a2;
  }, getLengthInBits: function(mode, type2) {
    if (1 <= type2 && type2 < 10) {
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 10;
        case QRMode.MODE_ALPHA_NUM:
          return 9;
        case QRMode.MODE_8BIT_BYTE:
          return 8;
        case QRMode.MODE_KANJI:
          return 8;
        default:
          throw new Error("mode:" + mode);
      }
    } else if (type2 < 27) {
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 12;
        case QRMode.MODE_ALPHA_NUM:
          return 11;
        case QRMode.MODE_8BIT_BYTE:
          return 16;
        case QRMode.MODE_KANJI:
          return 10;
        default:
          throw new Error("mode:" + mode);
      }
    } else if (type2 < 41) {
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 14;
        case QRMode.MODE_ALPHA_NUM:
          return 13;
        case QRMode.MODE_8BIT_BYTE:
          return 16;
        case QRMode.MODE_KANJI:
          return 12;
        default:
          throw new Error("mode:" + mode);
      }
    } else {
      throw new Error("type:" + type2);
    }
  }, getLostPoint: function(qrCode) {
    var moduleCount = qrCode.getModuleCount();
    var lostPoint = 0;
    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount; col++) {
        var sameCount = 0;
        var dark = qrCode.isDark(row, col);
        for (var r2 = -1; r2 <= 1; r2++) {
          if (row + r2 < 0 || moduleCount <= row + r2) {
            continue;
          }
          for (var c2 = -1; c2 <= 1; c2++) {
            if (col + c2 < 0 || moduleCount <= col + c2) {
              continue;
            }
            if (r2 == 0 && c2 == 0) {
              continue;
            }
            if (dark == qrCode.isDark(row + r2, col + c2)) {
              sameCount++;
            }
          }
        }
        if (sameCount > 5) {
          lostPoint += 3 + sameCount - 5;
        }
      }
    }
    for (var row = 0; row < moduleCount - 1; row++) {
      for (var col = 0; col < moduleCount - 1; col++) {
        var count = 0;
        if (qrCode.isDark(row, col)) count++;
        if (qrCode.isDark(row + 1, col)) count++;
        if (qrCode.isDark(row, col + 1)) count++;
        if (qrCode.isDark(row + 1, col + 1)) count++;
        if (count == 0 || count == 4) {
          lostPoint += 3;
        }
      }
    }
    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount - 6; col++) {
        if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
          lostPoint += 40;
        }
      }
    }
    for (var col = 0; col < moduleCount; col++) {
      for (var row = 0; row < moduleCount - 6; row++) {
        if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
          lostPoint += 40;
        }
      }
    }
    var darkCount = 0;
    for (var col = 0; col < moduleCount; col++) {
      for (var row = 0; row < moduleCount; row++) {
        if (qrCode.isDark(row, col)) {
          darkCount++;
        }
      }
    }
    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;
    return lostPoint;
  } };
  var QRMath = { glog: function(n2) {
    if (n2 < 1) {
      throw new Error("glog(" + n2 + ")");
    }
    return QRMath.LOG_TABLE[n2];
  }, gexp: function(n2) {
    while (n2 < 0) {
      n2 += 255;
    }
    while (n2 >= 256) {
      n2 -= 255;
    }
    return QRMath.EXP_TABLE[n2];
  }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) };
  for (var i2 = 0; i2 < 8; i2++) {
    QRMath.EXP_TABLE[i2] = 1 << i2;
  }
  for (var i2 = 8; i2 < 256; i2++) {
    QRMath.EXP_TABLE[i2] = QRMath.EXP_TABLE[i2 - 4] ^ QRMath.EXP_TABLE[i2 - 5] ^ QRMath.EXP_TABLE[i2 - 6] ^ QRMath.EXP_TABLE[i2 - 8];
  }
  for (var i2 = 0; i2 < 255; i2++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i2]] = i2;
  }
  function QRPolynomial(num, shift) {
    if (num.length == void 0) {
      throw new Error(num.length + "/" + shift);
    }
    var offset = 0;
    while (offset < num.length && num[offset] == 0) {
      offset++;
    }
    this.num = new Array(num.length - offset + shift);
    for (var i3 = 0; i3 < num.length - offset; i3++) {
      this.num[i3] = num[i3 + offset];
    }
  }
  QRPolynomial.prototype = { get: function(index2) {
    return this.num[index2];
  }, getLength: function() {
    return this.num.length;
  }, multiply: function(e2) {
    var num = new Array(this.getLength() + e2.getLength() - 1);
    for (var i3 = 0; i3 < this.getLength(); i3++) {
      for (var j2 = 0; j2 < e2.getLength(); j2++) {
        num[i3 + j2] ^= QRMath.gexp(QRMath.glog(this.get(i3)) + QRMath.glog(e2.get(j2)));
      }
    }
    return new QRPolynomial(num, 0);
  }, mod: function(e2) {
    if (this.getLength() - e2.getLength() < 0) {
      return this;
    }
    var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e2.get(0));
    var num = new Array(this.getLength());
    for (var i3 = 0; i3 < this.getLength(); i3++) {
      num[i3] = this.get(i3);
    }
    for (var i3 = 0; i3 < e2.getLength(); i3++) {
      num[i3] ^= QRMath.gexp(QRMath.glog(e2.get(i3)) + ratio);
    }
    return new QRPolynomial(num, 0).mod(e2);
  } };
  function QRRSBlock(totalCount, dataCount) {
    this.totalCount = totalCount;
    this.dataCount = dataCount;
  }
  QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
  QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
    var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
    if (rsBlock == void 0) {
      throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
    }
    var length = rsBlock.length / 3;
    var list = [];
    for (var i3 = 0; i3 < length; i3++) {
      var count = rsBlock[i3 * 3 + 0];
      var totalCount = rsBlock[i3 * 3 + 1];
      var dataCount = rsBlock[i3 * 3 + 2];
      for (var j2 = 0; j2 < count; j2++) {
        list.push(new QRRSBlock(totalCount, dataCount));
      }
    }
    return list;
  };
  QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {
    switch (errorCorrectLevel) {
      case QRErrorCorrectLevel.L:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
      case QRErrorCorrectLevel.M:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
      case QRErrorCorrectLevel.Q:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
      case QRErrorCorrectLevel.H:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
      default:
        return void 0;
    }
  };
  function QRBitBuffer() {
    this.buffer = [];
    this.length = 0;
  }
  QRBitBuffer.prototype = { get: function(index2) {
    var bufIndex = Math.floor(index2 / 8);
    return (this.buffer[bufIndex] >>> 7 - index2 % 8 & 1) == 1;
  }, put: function(num, length) {
    for (var i3 = 0; i3 < length; i3++) {
      this.putBit((num >>> length - i3 - 1 & 1) == 1);
    }
  }, getLengthInBits: function() {
    return this.length;
  }, putBit: function(bit) {
    var bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 128 >>> this.length % 8;
    }
    this.length++;
  } };
  var QRCodeLimitLength = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
  function QRCode2(options) {
    this.options = {
      padding: 4,
      width: 256,
      height: 256,
      typeNumber: 4,
      color: "#000000",
      background: "#ffffff",
      ecl: "M",
      image: {
        svg: "",
        width: 0,
        height: 0
      }
    };
    if (typeof options === "string") {
      options = {
        content: options
      };
    }
    if (options) {
      for (var i3 in options) {
        this.options[i3] = options[i3];
      }
    }
    if (typeof this.options.content !== "string") {
      throw new Error("Expected 'content' as string!");
    }
    if (this.options.content.length === 0) {
      throw new Error("Expected 'content' to be non-empty!");
    }
    if (!(this.options.padding >= 0)) {
      throw new Error("Expected 'padding' value to be non-negative!");
    }
    if (!(this.options.width > 0) || !(this.options.height > 0)) {
      throw new Error("Expected 'width' or 'height' value to be higher than zero!");
    }
    function _getErrorCorrectLevel(ecl2) {
      switch (ecl2) {
        case "L":
          return QRErrorCorrectLevel.L;
        case "M":
          return QRErrorCorrectLevel.M;
        case "Q":
          return QRErrorCorrectLevel.Q;
        case "H":
          return QRErrorCorrectLevel.H;
        default:
          throw new Error("Unknwon error correction level: " + ecl2);
      }
    }
    function _getTypeNumber(content2, ecl2) {
      var length = _getUTF8Length(content2);
      var type3 = 1;
      var limit = 0;
      for (var i4 = 0, len = QRCodeLimitLength.length; i4 <= len; i4++) {
        var table = QRCodeLimitLength[i4];
        if (!table) {
          throw new Error("Content too long: expected " + limit + " but got " + length);
        }
        switch (ecl2) {
          case "L":
            limit = table[0];
            break;
          case "M":
            limit = table[1];
            break;
          case "Q":
            limit = table[2];
            break;
          case "H":
            limit = table[3];
            break;
          default:
            throw new Error("Unknwon error correction level: " + ecl2);
        }
        if (length <= limit) {
          break;
        }
        type3++;
      }
      if (type3 > QRCodeLimitLength.length) {
        throw new Error("Content too long");
      }
      return type3;
    }
    function _getUTF8Length(content2) {
      var result = encodeURI(content2).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
      return result.length + (result.length != content2 ? 3 : 0);
    }
    var content = this.options.content;
    var type2 = _getTypeNumber(content, this.options.ecl);
    var ecl = _getErrorCorrectLevel(this.options.ecl);
    this.qrcode = new QRCodeModel(type2, ecl);
    this.qrcode.addData(content);
    this.qrcode.make();
  }
  QRCode2.prototype.svg = function(opt) {
    var options = this.options || {};
    var modules = this.qrcode.modules;
    if (typeof opt == "undefined") {
      opt = { container: options.container || "svg" };
    }
    var pretty = typeof options.pretty != "undefined" ? !!options.pretty : true;
    var indent = pretty ? "  " : "";
    var EOL = pretty ? "\r\n" : "";
    var width = options.width;
    var height = options.height;
    var length = modules.length;
    var xsize = width / (length + 2 * options.padding);
    var ysize = height / (length + 2 * options.padding);
    var join = typeof options.join != "undefined" ? !!options.join : false;
    var swap = typeof options.swap != "undefined" ? !!options.swap : false;
    var xmlDeclaration = typeof options.xmlDeclaration != "undefined" ? !!options.xmlDeclaration : true;
    var predefined = typeof options.predefined != "undefined" ? !!options.predefined : false;
    var defs = predefined ? indent + '<defs><path id="qrmodule" d="M0 0 h' + ysize + " v" + xsize + ' H0 z" style="fill:' + options.color + ';shape-rendering:crispEdges;" /></defs>' + EOL : "";
    var bgrect = indent + '<rect x="0" y="0" width="' + width + '" height="' + height + '" style="fill:' + options.background + ';shape-rendering:crispEdges;"/>' + EOL;
    var modrect = "";
    var pathdata = "";
    for (var y2 = 0; y2 < length; y2++) {
      for (var x2 = 0; x2 < length; x2++) {
        var module = modules[x2][y2];
        if (module) {
          var px = x2 * xsize + options.padding * xsize;
          var py = y2 * ysize + options.padding * ysize;
          if (swap) {
            var t2 = px;
            px = py;
            py = t2;
          }
          if (join) {
            var w2 = xsize + px;
            var h2 = ysize + py;
            px = Number.isInteger(px) ? Number(px) : px.toFixed(2);
            py = Number.isInteger(py) ? Number(py) : py.toFixed(2);
            w2 = Number.isInteger(w2) ? Number(w2) : w2.toFixed(2);
            h2 = Number.isInteger(h2) ? Number(h2) : h2.toFixed(2);
            pathdata += "M" + px + "," + py + " V" + h2 + " H" + w2 + " V" + py + " H" + px + " Z ";
          } else if (predefined) {
            modrect += indent + '<use x="' + px.toString() + '" y="' + py.toString() + '" href="#qrmodule" />' + EOL;
          } else {
            modrect += indent + '<rect x="' + px.toString() + '" y="' + py.toString() + '" width="' + xsize + '" height="' + ysize + '" style="fill:' + options.color + ';shape-rendering:crispEdges;"/>' + EOL;
          }
        }
      }
    }
    if (join) {
      modrect = indent + '<path x="0" y="0" style="fill:' + options.color + ';shape-rendering:crispEdges;" d="' + pathdata + '" />';
    }
    let imgSvg = "";
    if (this.options.image !== void 0 && this.options.image.svg) {
      const imgWidth = width * this.options.image.width / 100;
      const imgHeight = height * this.options.image.height / 100;
      const imgX = width / 2 - imgWidth / 2;
      const imgY = height / 2 - imgHeight / 2;
      imgSvg += `<svg x="${imgX}" y="${imgY}" width="${imgWidth}" height="${imgHeight}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`;
      imgSvg += this.options.image.svg + EOL;
      imgSvg += "</svg>";
    }
    var svg = "";
    switch (opt.container) {
      //Wrapped in SVG document
      case "svg":
        if (xmlDeclaration) {
          svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
        }
        svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + width + '" height="' + height + '">' + EOL;
        svg += defs + bgrect + modrect;
        svg += imgSvg;
        svg += "</svg>";
        break;
      //Viewbox for responsive use in a browser, thanks to @danioso
      case "svg-viewbox":
        if (xmlDeclaration) {
          svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
        }
        svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + width + " " + height + '">' + EOL;
        svg += defs + bgrect + modrect;
        svg += imgSvg;
        svg += "</svg>";
        break;
      //Wrapped in group element
      case "g":
        svg += '<g width="' + width + '" height="' + height + '">' + EOL;
        svg += defs + bgrect + modrect;
        svg += imgSvg;
        svg += "</g>";
        break;
      //Without a container
      default:
        svg += (defs + bgrect + modrect + imgSvg).replace(/^\s+/, "");
        break;
    }
    return svg;
  };
  qrcodeSvg = QRCode2;
  return qrcodeSvg;
}
var hasRequiredQRCode;
function requireQRCode() {
  if (hasRequiredQRCode) return QRCode;
  hasRequiredQRCode = 1;
  var __importDefault2 = QRCode && QRCode.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(QRCode, "__esModule", { value: true });
  QRCode.QRCode = void 0;
  const preact_1 = require$$1$1;
  const hooks_1 = require$$2;
  const qrcode_svg_1 = __importDefault2(/* @__PURE__ */ requireQrcodeSvg());
  const QRCode$1 = (props) => {
    const [svg, setSvg] = (0, hooks_1.useState)("");
    (0, hooks_1.useEffect)(() => {
      var _a, _b;
      const qrcode = new qrcode_svg_1.default({
        content: props.content,
        background: props.bgColor || "#ffffff",
        color: props.fgColor || "#000000",
        container: "svg",
        ecl: "M",
        width: (_a = props.width) !== null && _a !== void 0 ? _a : 256,
        height: (_b = props.height) !== null && _b !== void 0 ? _b : 256,
        padding: 0,
        image: props.image
      });
      const base642 = Buffer.from(qrcode.svg(), "utf8").toString("base64");
      setSvg(`data:image/svg+xml;base64,${base642}`);
    }, [props.bgColor, props.content, props.fgColor, props.height, props.image, props.width]);
    return svg ? (0, preact_1.h)("img", { src: svg, alt: "QR Code" }) : null;
  };
  QRCode.QRCode = QRCode$1;
  return QRCode;
}
var Spinner = {};
var SpinnerCss = {};
var hasRequiredSpinnerCss;
function requireSpinnerCss() {
  if (hasRequiredSpinnerCss) return SpinnerCss;
  hasRequiredSpinnerCss = 1;
  Object.defineProperty(SpinnerCss, "__esModule", { value: true });
  SpinnerCss.default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}`)();
  return SpinnerCss;
}
var hasRequiredSpinner;
function requireSpinner() {
  if (hasRequiredSpinner) return Spinner;
  hasRequiredSpinner = 1;
  var __importDefault2 = Spinner && Spinner.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(Spinner, "__esModule", { value: true });
  Spinner.Spinner = void 0;
  const preact_1 = require$$1$1;
  const Spinner_css_1 = __importDefault2(/* @__PURE__ */ requireSpinnerCss());
  const Spinner$1 = (props) => {
    var _a;
    const size2 = (_a = props.size) !== null && _a !== void 0 ? _a : 64;
    const color = props.color || "#000";
    return (0, preact_1.h)(
      "div",
      { class: "-cbwsdk-spinner" },
      (0, preact_1.h)("style", null, Spinner_css_1.default),
      (0, preact_1.h)(
        "svg",
        { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", style: { width: size2, height: size2 } },
        (0, preact_1.h)("circle", { style: { cx: 50, cy: 50, r: 45, stroke: color } })
      )
    );
  };
  Spinner.Spinner = Spinner$1;
  return Spinner;
}
var ConnectContentCss = {};
var hasRequiredConnectContentCss;
function requireConnectContentCss() {
  if (hasRequiredConnectContentCss) return ConnectContentCss;
  hasRequiredConnectContentCss = 1;
  Object.defineProperty(ConnectContentCss, "__esModule", { value: true });
  ConnectContentCss.default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer;border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}`)();
  return ConnectContentCss;
}
var hasRequiredConnectContent;
function requireConnectContent() {
  if (hasRequiredConnectContent) return ConnectContent;
  hasRequiredConnectContent = 1;
  var __importDefault2 = ConnectContent && ConnectContent.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(ConnectContent, "__esModule", { value: true });
  ConnectContent.CoinbaseWalletSteps = ConnectContent.ConnectContent = void 0;
  const clsx_1 = __importDefault2(require$$0$1);
  const preact_1 = require$$1$1;
  const util_1 = /* @__PURE__ */ requireUtil$1();
  const version_1 = /* @__PURE__ */ requireVersion();
  const CloseIcon_1 = /* @__PURE__ */ requireCloseIcon();
  const CoinbaseWalletRound_1 = /* @__PURE__ */ requireCoinbaseWalletRound();
  const QRCodeIcon_1 = /* @__PURE__ */ requireQRCodeIcon();
  const QRCode_1 = /* @__PURE__ */ requireQRCode();
  const Spinner_1 = /* @__PURE__ */ requireSpinner();
  const ConnectContent_css_1 = __importDefault2(/* @__PURE__ */ requireConnectContentCss());
  const wallet = {
    title: "Coinbase Wallet app",
    description: "Connect with your self-custody wallet",
    steps: CoinbaseWalletSteps
  };
  const makeIconColor = (theme) => {
    return theme === "light" ? "#FFFFFF" : "#0A0B0D";
  };
  function ConnectContent$1(props) {
    const { theme } = props;
    const qrUrl = (0, util_1.createQrUrl)(props.sessionId, props.sessionSecret, props.linkAPIUrl, props.isParentConnection, props.version, props.chainId);
    const WalletSteps = wallet.steps;
    return (0, preact_1.h)(
      "div",
      { "data-testid": "connect-content", className: (0, clsx_1.default)("-cbwsdk-connect-content", theme) },
      (0, preact_1.h)("style", null, ConnectContent_css_1.default),
      (0, preact_1.h)(
        "div",
        { className: "-cbwsdk-connect-content-header" },
        (0, preact_1.h)("h2", { className: (0, clsx_1.default)("-cbwsdk-connect-content-heading", theme) }, "Scan to connect with our mobile app"),
        props.onCancel && (0, preact_1.h)(
          "button",
          { type: "button", className: "-cbwsdk-cancel-button", onClick: props.onCancel },
          (0, preact_1.h)(CloseIcon_1.CloseIcon, { fill: theme === "light" ? "#0A0B0D" : "#FFFFFF" })
        )
      ),
      (0, preact_1.h)(
        "div",
        { className: "-cbwsdk-connect-content-layout" },
        (0, preact_1.h)(
          "div",
          { className: "-cbwsdk-connect-content-column-left" },
          (0, preact_1.h)(ConnectItem, { title: wallet.title, description: wallet.description, theme })
        ),
        (0, preact_1.h)(
          "div",
          { className: "-cbwsdk-connect-content-column-right" },
          (0, preact_1.h)(
            "div",
            { className: "-cbwsdk-connect-content-qr-wrapper" },
            (0, preact_1.h)(QRCode_1.QRCode, { content: qrUrl, width: 200, height: 200, fgColor: "#000", bgColor: "transparent" }),
            (0, preact_1.h)("input", { type: "hidden", name: "cbw-cbwsdk-version", value: version_1.LIB_VERSION }),
            (0, preact_1.h)("input", { type: "hidden", value: qrUrl })
          ),
          (0, preact_1.h)(WalletSteps, { theme }),
          !props.isConnected && (0, preact_1.h)(
            "div",
            { "data-testid": "connecting-spinner", className: (0, clsx_1.default)("-cbwsdk-connect-content-qr-connecting", theme) },
            (0, preact_1.h)(Spinner_1.Spinner, { size: 36, color: theme === "dark" ? "#FFF" : "#000" }),
            (0, preact_1.h)("p", null, "Connecting...")
          )
        )
      )
    );
  }
  ConnectContent.ConnectContent = ConnectContent$1;
  function ConnectItem({ title, description, theme }) {
    return (0, preact_1.h)(
      "div",
      { className: (0, clsx_1.default)("-cbwsdk-connect-item", theme) },
      (0, preact_1.h)(
        "div",
        null,
        (0, preact_1.h)(CoinbaseWalletRound_1.CoinbaseWalletRound, null)
      ),
      (0, preact_1.h)(
        "div",
        { className: "-cbwsdk-connect-item-copy-wrapper" },
        (0, preact_1.h)("h3", { className: "-cbwsdk-connect-item-title" }, title),
        (0, preact_1.h)("p", { className: "-cbwsdk-connect-item-description" }, description)
      )
    );
  }
  function CoinbaseWalletSteps({ theme }) {
    return (0, preact_1.h)(
      "ol",
      { className: "-cbwsdk-wallet-steps" },
      (0, preact_1.h)(
        "li",
        { className: (0, clsx_1.default)("-cbwsdk-wallet-steps-item", theme) },
        (0, preact_1.h)("div", { className: "-cbwsdk-wallet-steps-item-wrapper" }, "Open Coinbase Wallet app")
      ),
      (0, preact_1.h)(
        "li",
        { className: (0, clsx_1.default)("-cbwsdk-wallet-steps-item", theme) },
        (0, preact_1.h)(
          "div",
          { className: "-cbwsdk-wallet-steps-item-wrapper" },
          (0, preact_1.h)(
            "span",
            null,
            "Tap ",
            (0, preact_1.h)("strong", null, "Scan"),
            " "
          ),
          (0, preact_1.h)(
            "span",
            { className: (0, clsx_1.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", theme) },
            (0, preact_1.h)(QRCodeIcon_1.QRCodeIcon, { fill: makeIconColor(theme) })
          )
        )
      )
    );
  }
  ConnectContent.CoinbaseWalletSteps = CoinbaseWalletSteps;
  return ConnectContent;
}
var TryExtensionContent = {};
var ArrowLeftIcon = {};
var hasRequiredArrowLeftIcon;
function requireArrowLeftIcon() {
  if (hasRequiredArrowLeftIcon) return ArrowLeftIcon;
  hasRequiredArrowLeftIcon = 1;
  Object.defineProperty(ArrowLeftIcon, "__esModule", { value: true });
  ArrowLeftIcon.ArrowLeftIcon = void 0;
  const preact_1 = require$$1$1;
  function ArrowLeftIcon$1(props) {
    return (0, preact_1.h)(
      "svg",
      Object.assign({ width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, props),
      (0, preact_1.h)("path", { d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z" })
    );
  }
  ArrowLeftIcon.ArrowLeftIcon = ArrowLeftIcon$1;
  return ArrowLeftIcon;
}
var LaptopIcon = {};
var hasRequiredLaptopIcon;
function requireLaptopIcon() {
  if (hasRequiredLaptopIcon) return LaptopIcon;
  hasRequiredLaptopIcon = 1;
  Object.defineProperty(LaptopIcon, "__esModule", { value: true });
  LaptopIcon.LaptopIcon = void 0;
  const preact_1 = require$$1$1;
  function LaptopIcon$1(props) {
    return (0, preact_1.h)(
      "svg",
      Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
      (0, preact_1.h)("path", { d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z" }),
      (0, preact_1.h)("path", { d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z" })
    );
  }
  LaptopIcon.LaptopIcon = LaptopIcon$1;
  return LaptopIcon;
}
var SafeIcon = {};
var hasRequiredSafeIcon;
function requireSafeIcon() {
  if (hasRequiredSafeIcon) return SafeIcon;
  hasRequiredSafeIcon = 1;
  Object.defineProperty(SafeIcon, "__esModule", { value: true });
  SafeIcon.SafeIcon = void 0;
  const preact_1 = require$$1$1;
  function SafeIcon$1(props) {
    return (0, preact_1.h)(
      "svg",
      Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
      (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z" })
    );
  }
  SafeIcon.SafeIcon = SafeIcon$1;
  return SafeIcon;
}
var TryExtensionContentCss = {};
var hasRequiredTryExtensionContentCss;
function requireTryExtensionContentCss() {
  if (hasRequiredTryExtensionContentCss) return TryExtensionContentCss;
  hasRequiredTryExtensionContentCss = 1;
  Object.defineProperty(TryExtensionContentCss, "__esModule", { value: true });
  TryExtensionContentCss.default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}`)();
  return TryExtensionContentCss;
}
var hasRequiredTryExtensionContent;
function requireTryExtensionContent() {
  if (hasRequiredTryExtensionContent) return TryExtensionContent;
  hasRequiredTryExtensionContent = 1;
  var __importDefault2 = TryExtensionContent && TryExtensionContent.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(TryExtensionContent, "__esModule", { value: true });
  TryExtensionContent.TryExtensionContent = void 0;
  const clsx_1 = __importDefault2(require$$0$1);
  const preact_1 = require$$1$1;
  const hooks_1 = require$$2;
  const ArrowLeftIcon_1 = /* @__PURE__ */ requireArrowLeftIcon();
  const LaptopIcon_1 = /* @__PURE__ */ requireLaptopIcon();
  const SafeIcon_1 = /* @__PURE__ */ requireSafeIcon();
  const TryExtensionContent_css_1 = __importDefault2(/* @__PURE__ */ requireTryExtensionContentCss());
  function TryExtensionContent$1({ theme }) {
    const [clicked, setClicked] = (0, hooks_1.useState)(false);
    const handleInstallClick = (0, hooks_1.useCallback)(() => {
      window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank");
    }, []);
    const handleClick = (0, hooks_1.useCallback)(() => {
      if (clicked) {
        window.location.reload();
      } else {
        handleInstallClick();
        setClicked(true);
      }
    }, [handleInstallClick, clicked]);
    return (0, preact_1.h)(
      "div",
      { class: (0, clsx_1.default)("-cbwsdk-try-extension", theme) },
      (0, preact_1.h)("style", null, TryExtensionContent_css_1.default),
      (0, preact_1.h)(
        "div",
        { class: "-cbwsdk-try-extension-column-half" },
        (0, preact_1.h)("h3", { class: (0, clsx_1.default)("-cbwsdk-try-extension-heading", theme) }, "Or try the Coinbase Wallet browser extension"),
        (0, preact_1.h)(
          "div",
          { class: "-cbwsdk-try-extension-cta-wrapper" },
          (0, preact_1.h)("button", { class: (0, clsx_1.default)("-cbwsdk-try-extension-cta", theme), onClick: handleClick }, clicked ? "Refresh" : "Install"),
          (0, preact_1.h)("div", null, !clicked && (0, preact_1.h)(ArrowLeftIcon_1.ArrowLeftIcon, { class: "-cbwsdk-try-extension-cta-icon", fill: theme === "light" ? "#0052FF" : "#588AF5" }))
        )
      ),
      (0, preact_1.h)(
        "div",
        { class: "-cbwsdk-try-extension-column-half" },
        (0, preact_1.h)(
          "ul",
          { class: "-cbwsdk-try-extension-list" },
          (0, preact_1.h)(
            "li",
            { class: "-cbwsdk-try-extension-list-item" },
            (0, preact_1.h)(
              "div",
              { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
              (0, preact_1.h)(
                "span",
                { class: (0, clsx_1.default)("-cbwsdk-try-extension-list-item-icon", theme) },
                (0, preact_1.h)(LaptopIcon_1.LaptopIcon, { fill: theme === "light" ? "#0A0B0D" : "#FFFFFF" })
              )
            ),
            (0, preact_1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-try-extension-list-item-copy", theme) }, "Connect with dapps with just one click on your desktop browser")
          ),
          (0, preact_1.h)(
            "li",
            { class: "-cbwsdk-try-extension-list-item" },
            (0, preact_1.h)(
              "div",
              { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
              (0, preact_1.h)(
                "span",
                { class: (0, clsx_1.default)("-cbwsdk-try-extension-list-item-icon", theme) },
                (0, preact_1.h)(SafeIcon_1.SafeIcon, { fill: theme === "light" ? "#0A0B0D" : "#FFFFFF" })
              )
            ),
            (0, preact_1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-try-extension-list-item-copy", theme) }, "Add an additional layer of security by using a supported Ledger hardware wallet")
          )
        )
      )
    );
  }
  TryExtensionContent.TryExtensionContent = TryExtensionContent$1;
  return TryExtensionContent;
}
var ConnectDialogCss = {};
var hasRequiredConnectDialogCss;
function requireConnectDialogCss() {
  if (hasRequiredConnectDialogCss) return ConnectDialogCss;
  hasRequiredConnectDialogCss = 1;
  Object.defineProperty(ConnectDialogCss, "__esModule", { value: true });
  ConnectDialogCss.default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}`)();
  return ConnectDialogCss;
}
var hasRequiredConnectDialog;
function requireConnectDialog() {
  if (hasRequiredConnectDialog) return ConnectDialog;
  hasRequiredConnectDialog = 1;
  var __importDefault2 = ConnectDialog && ConnectDialog.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(ConnectDialog, "__esModule", { value: true });
  ConnectDialog.ConnectDialog = void 0;
  const clsx_1 = __importDefault2(require$$0$1);
  const preact_1 = require$$1$1;
  const hooks_1 = require$$2;
  const ConnectContent_1 = /* @__PURE__ */ requireConnectContent();
  const TryExtensionContent_1 = /* @__PURE__ */ requireTryExtensionContent();
  const ConnectDialog_css_1 = __importDefault2(/* @__PURE__ */ requireConnectDialogCss());
  const ConnectDialog$1 = (props) => {
    const { isOpen, darkMode } = props;
    const [containerHidden, setContainerHidden] = (0, hooks_1.useState)(!isOpen);
    const [dialogHidden, setDialogHidden] = (0, hooks_1.useState)(!isOpen);
    (0, hooks_1.useEffect)(() => {
      const timers = [
        window.setTimeout(() => {
          setDialogHidden(!isOpen);
        }, 10)
      ];
      if (isOpen) {
        setContainerHidden(false);
      } else {
        timers.push(window.setTimeout(() => {
          setContainerHidden(true);
        }, 360));
      }
      return () => {
        timers.forEach(window.clearTimeout);
      };
    }, [isOpen]);
    const theme = darkMode ? "dark" : "light";
    return (0, preact_1.h)(
      "div",
      { class: (0, clsx_1.default)("-cbwsdk-connect-dialog-container", containerHidden && "-cbwsdk-connect-dialog-container-hidden") },
      (0, preact_1.h)("style", null, ConnectDialog_css_1.default),
      (0, preact_1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-connect-dialog-backdrop", theme, dialogHidden && "-cbwsdk-connect-dialog-backdrop-hidden") }),
      (0, preact_1.h)(
        "div",
        { class: "-cbwsdk-connect-dialog" },
        (0, preact_1.h)(
          "div",
          { class: (0, clsx_1.default)("-cbwsdk-connect-dialog-box", dialogHidden && "-cbwsdk-connect-dialog-box-hidden") },
          !props.connectDisabled ? (0, preact_1.h)(ConnectContent_1.ConnectContent, { theme, version: props.version, sessionId: props.sessionId, sessionSecret: props.sessionSecret, linkAPIUrl: props.linkAPIUrl, isConnected: props.isConnected, isParentConnection: props.isParentConnection, chainId: props.chainId, onCancel: props.onCancel }) : null,
          (0, preact_1.h)(TryExtensionContent_1.TryExtensionContent, { theme })
        )
      )
    );
  };
  ConnectDialog.ConnectDialog = ConnectDialog$1;
  return ConnectDialog;
}
var hasRequiredLinkFlow;
function requireLinkFlow() {
  if (hasRequiredLinkFlow) return LinkFlow;
  hasRequiredLinkFlow = 1;
  Object.defineProperty(LinkFlow, "__esModule", { value: true });
  LinkFlow.LinkFlow = void 0;
  const preact_1 = require$$1$1;
  const ConnectDialog_1 = /* @__PURE__ */ requireConnectDialog();
  let LinkFlow$1 = class LinkFlow {
    constructor(options) {
      this.connected = false;
      this.chainId = 1;
      this.isOpen = false;
      this.onCancel = null;
      this.root = null;
      this.connectDisabled = false;
      this.darkMode = options.darkMode;
      this.version = options.version;
      this.sessionId = options.sessionId;
      this.sessionSecret = options.sessionSecret;
      this.linkAPIUrl = options.linkAPIUrl;
      this.isParentConnection = options.isParentConnection;
    }
    attach(el) {
      this.root = document.createElement("div");
      this.root.className = "-cbwsdk-link-flow-root";
      el.appendChild(this.root);
      this.render();
    }
    setConnected(v2) {
      if (this.connected !== v2) {
        this.connected = v2;
        this.render();
      }
    }
    setChainId(chainId) {
      if (this.chainId !== chainId) {
        this.chainId = chainId;
        this.render();
      }
    }
    detach() {
      var _a;
      if (!this.root) {
        return;
      }
      (0, preact_1.render)(null, this.root);
      (_a = this.root.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.root);
    }
    setConnectDisabled(connectDisabled) {
      this.connectDisabled = connectDisabled;
    }
    open(options) {
      this.isOpen = true;
      this.onCancel = options.onCancel;
      this.render();
    }
    close() {
      this.isOpen = false;
      this.onCancel = null;
      this.render();
    }
    render() {
      if (!this.root) {
        return;
      }
      (0, preact_1.render)((0, preact_1.h)(ConnectDialog_1.ConnectDialog, { darkMode: this.darkMode, version: this.version, sessionId: this.sessionId, sessionSecret: this.sessionSecret, linkAPIUrl: this.linkAPIUrl, isOpen: this.isOpen, isConnected: this.connected, isParentConnection: this.isParentConnection, chainId: this.chainId, onCancel: this.onCancel, connectDisabled: this.connectDisabled }), this.root);
    }
  };
  LinkFlow.LinkFlow = LinkFlow$1;
  return LinkFlow;
}
var Snackbar$1 = {};
var SnackbarCss = {};
var hasRequiredSnackbarCss;
function requireSnackbarCss() {
  if (hasRequiredSnackbarCss) return SnackbarCss;
  hasRequiredSnackbarCss = 1;
  Object.defineProperty(SnackbarCss, "__esModule", { value: true });
  SnackbarCss.default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}`)();
  return SnackbarCss;
}
var hasRequiredSnackbar$1;
function requireSnackbar$1() {
  if (hasRequiredSnackbar$1) return Snackbar$1;
  hasRequiredSnackbar$1 = 1;
  (function(exports) {
    var __importDefault2 = Snackbar$1 && Snackbar$1.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SnackbarInstance = exports.SnackbarContainer = exports.Snackbar = void 0;
    const clsx_1 = __importDefault2(require$$0$1);
    const preact_1 = require$$1$1;
    const hooks_1 = require$$2;
    const Snackbar_css_1 = __importDefault2(/* @__PURE__ */ requireSnackbarCss());
    const cblogo = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+`;
    const gearIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=`;
    class Snackbar2 {
      constructor(options) {
        this.items = /* @__PURE__ */ new Map();
        this.nextItemKey = 0;
        this.root = null;
        this.darkMode = options.darkMode;
      }
      attach(el) {
        this.root = document.createElement("div");
        this.root.className = "-cbwsdk-snackbar-root";
        el.appendChild(this.root);
        this.render();
      }
      presentItem(itemProps) {
        const key = this.nextItemKey++;
        this.items.set(key, itemProps);
        this.render();
        return () => {
          this.items.delete(key);
          this.render();
        };
      }
      clear() {
        this.items.clear();
        this.render();
      }
      render() {
        if (!this.root) {
          return;
        }
        (0, preact_1.render)((0, preact_1.h)(
          "div",
          null,
          (0, preact_1.h)(exports.SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([key, itemProps]) => (0, preact_1.h)(exports.SnackbarInstance, Object.assign({}, itemProps, { key }))))
        ), this.root);
      }
    }
    exports.Snackbar = Snackbar2;
    const SnackbarContainer = (props) => (0, preact_1.h)(
      "div",
      { class: (0, clsx_1.default)("-cbwsdk-snackbar-container") },
      (0, preact_1.h)("style", null, Snackbar_css_1.default),
      (0, preact_1.h)("div", { class: "-cbwsdk-snackbar" }, props.children)
    );
    exports.SnackbarContainer = SnackbarContainer;
    const SnackbarInstance = ({ autoExpand, message, menuItems }) => {
      const [hidden, setHidden] = (0, hooks_1.useState)(true);
      const [expanded, setExpanded] = (0, hooks_1.useState)(autoExpand !== null && autoExpand !== void 0 ? autoExpand : false);
      (0, hooks_1.useEffect)(() => {
        const timers = [
          window.setTimeout(() => {
            setHidden(false);
          }, 1),
          window.setTimeout(() => {
            setExpanded(true);
          }, 1e4)
        ];
        return () => {
          timers.forEach(window.clearTimeout);
        };
      });
      const toggleExpanded = () => {
        setExpanded(!expanded);
      };
      return (0, preact_1.h)(
        "div",
        { class: (0, clsx_1.default)("-cbwsdk-snackbar-instance", hidden && "-cbwsdk-snackbar-instance-hidden", expanded && "-cbwsdk-snackbar-instance-expanded") },
        (0, preact_1.h)(
          "div",
          { class: "-cbwsdk-snackbar-instance-header", onClick: toggleExpanded },
          (0, preact_1.h)("img", { src: cblogo, class: "-cbwsdk-snackbar-instance-header-cblogo" }),
          " ",
          (0, preact_1.h)("div", { class: "-cbwsdk-snackbar-instance-header-message" }, message),
          (0, preact_1.h)(
            "div",
            { class: "-gear-container" },
            !expanded && (0, preact_1.h)(
              "svg",
              { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
              (0, preact_1.h)("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" })
            ),
            (0, preact_1.h)("img", { src: gearIcon, class: "-gear-icon", title: "Expand" })
          )
        ),
        menuItems && menuItems.length > 0 && (0, preact_1.h)("div", { class: "-cbwsdk-snackbar-instance-menu" }, menuItems.map((action, i2) => (0, preact_1.h)(
          "div",
          { class: (0, clsx_1.default)("-cbwsdk-snackbar-instance-menu-item", action.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"), onClick: action.onClick, key: i2 },
          (0, preact_1.h)(
            "svg",
            { width: action.svgWidth, height: action.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0, preact_1.h)("path", { "fill-rule": action.defaultFillRule, "clip-rule": action.defaultClipRule, d: action.path, fill: "#AAAAAA" })
          ),
          (0, preact_1.h)("span", { class: (0, clsx_1.default)("-cbwsdk-snackbar-instance-menu-item-info", action.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red") }, action.info)
        )))
      );
    };
    exports.SnackbarInstance = SnackbarInstance;
  })(Snackbar$1);
  return Snackbar$1;
}
var hasRequiredWalletLinkRelayUI;
function requireWalletLinkRelayUI() {
  if (hasRequiredWalletLinkRelayUI) return WalletLinkRelayUI;
  hasRequiredWalletLinkRelayUI = 1;
  Object.defineProperty(WalletLinkRelayUI, "__esModule", { value: true });
  WalletLinkRelayUI.WalletLinkRelayUI = void 0;
  const cssReset_1 = /* @__PURE__ */ requireCssReset();
  const LinkFlow_1 = /* @__PURE__ */ requireLinkFlow();
  const Snackbar_1 = /* @__PURE__ */ requireSnackbar$1();
  let WalletLinkRelayUI$1 = class WalletLinkRelayUI {
    constructor(options) {
      this.standalone = null;
      this.attached = false;
      this.snackbar = new Snackbar_1.Snackbar({
        darkMode: options.darkMode
      });
      this.linkFlow = new LinkFlow_1.LinkFlow({
        darkMode: options.darkMode,
        version: options.version,
        sessionId: options.session.id,
        sessionSecret: options.session.secret,
        linkAPIUrl: options.linkAPIUrl,
        isParentConnection: false
      });
    }
    attach() {
      if (this.attached) {
        throw new Error("Coinbase Wallet SDK UI is already attached");
      }
      const el = document.documentElement;
      const container = document.createElement("div");
      container.className = "-cbwsdk-css-reset";
      el.appendChild(container);
      this.linkFlow.attach(container);
      this.snackbar.attach(container);
      this.attached = true;
      (0, cssReset_1.injectCssReset)();
    }
    setConnected(connected) {
      this.linkFlow.setConnected(connected);
    }
    setChainId(chainId) {
      this.linkFlow.setChainId(chainId);
    }
    setConnectDisabled(connectDisabled) {
      this.linkFlow.setConnectDisabled(connectDisabled);
    }
    /* istanbul ignore next */
    addEthereumChain() {
    }
    // no-op
    /* istanbul ignore next */
    watchAsset() {
    }
    // no-op
    /* istanbul ignore next */
    switchEthereumChain() {
    }
    // no-op
    requestEthereumAccounts(options) {
      this.linkFlow.open({ onCancel: options.onCancel });
    }
    hideRequestEthereumAccounts() {
      this.linkFlow.close();
    }
    /* istanbul ignore next */
    signEthereumMessage() {
    }
    // no-op
    /* istanbul ignore next */
    signEthereumTransaction() {
    }
    // no-op
    /* istanbul ignore next */
    submitEthereumTransaction() {
    }
    // no-op
    /* istanbul ignore next */
    ethereumAddressFromSignedMessage() {
    }
    // no-op
    showConnecting(options) {
      let snackbarProps;
      if (options.isUnlinkedErrorState) {
        snackbarProps = {
          autoExpand: true,
          message: "Connection lost",
          menuItems: [
            {
              isRed: false,
              info: "Reset connection",
              svgWidth: "10",
              svgHeight: "11",
              path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
              defaultFillRule: "evenodd",
              defaultClipRule: "evenodd",
              onClick: options.onResetConnection
            }
          ]
        };
      } else {
        snackbarProps = {
          message: "Confirm on phone",
          menuItems: [
            {
              isRed: true,
              info: "Cancel transaction",
              svgWidth: "11",
              svgHeight: "11",
              path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
              defaultFillRule: "inherit",
              defaultClipRule: "inherit",
              onClick: options.onCancel
            },
            {
              isRed: false,
              info: "Reset connection",
              svgWidth: "10",
              svgHeight: "11",
              path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
              defaultFillRule: "evenodd",
              defaultClipRule: "evenodd",
              onClick: options.onResetConnection
            }
          ]
        };
      }
      return this.snackbar.presentItem(snackbarProps);
    }
    /* istanbul ignore next */
    reloadUI() {
      document.location.reload();
    }
    /* istanbul ignore next */
    inlineAccountsResponse() {
      return false;
    }
    /* istanbul ignore next */
    inlineAddEthereumChain() {
      return false;
    }
    /* istanbul ignore next */
    inlineWatchAsset() {
      return false;
    }
    /* istanbul ignore next */
    inlineSwitchEthereumChain() {
      return false;
    }
    /* istanbul ignore next */
    setStandalone(status) {
      this.standalone = status;
    }
    /* istanbul ignore next */
    isStandalone() {
      var _a;
      return (_a = this.standalone) !== null && _a !== void 0 ? _a : false;
    }
  };
  WalletLinkRelayUI.WalletLinkRelayUI = WalletLinkRelayUI$1;
  return WalletLinkRelayUI;
}
var hasRequiredWalletLinkRelay;
function requireWalletLinkRelay() {
  if (hasRequiredWalletLinkRelay) return WalletLinkRelay;
  hasRequiredWalletLinkRelay = 1;
  Object.defineProperty(WalletLinkRelay, "__esModule", { value: true });
  WalletLinkRelay.WalletLinkRelay = void 0;
  const error_1 = /* @__PURE__ */ requireError();
  const type_1 = /* @__PURE__ */ requireType$1();
  const util_1 = /* @__PURE__ */ requireUtil$1();
  const DiagnosticLogger_1 = /* @__PURE__ */ requireDiagnosticLogger();
  const RelayAbstract_1 = /* @__PURE__ */ requireRelayAbstract();
  const Session_1 = /* @__PURE__ */ requireSession();
  const WalletLinkConnection_1 = /* @__PURE__ */ requireWalletLinkConnection();
  const Web3Response_1 = /* @__PURE__ */ requireWeb3Response();
  const WalletLinkRelayUI_1 = /* @__PURE__ */ requireWalletLinkRelayUI();
  let WalletLinkRelay$1 = class WalletLinkRelay2 extends RelayAbstract_1.RelayAbstract {
    constructor(options) {
      var _a;
      super();
      this.accountsCallback = null;
      this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" };
      this.chainCallback = null;
      this.dappDefaultChain = 1;
      this.appName = "";
      this.appLogoUrl = null;
      this.linkedUpdated = (linked) => {
        var _a2;
        this.isLinked = linked;
        const cachedAddresses = this.storage.getItem(RelayAbstract_1.LOCAL_STORAGE_ADDRESSES_KEY);
        if (linked) {
          this.session.linked = linked;
        }
        this.isUnlinkedErrorState = false;
        if (cachedAddresses) {
          const addresses = cachedAddresses.split(" ");
          const wasConnectedViaStandalone = this.storage.getItem("IsStandaloneSigning") === "true";
          if (addresses[0] !== "" && !linked && this.session.linked && !wasConnectedViaStandalone) {
            this.isUnlinkedErrorState = true;
            const sessionIdHash = this.getSessionIdHash();
            (_a2 = this.diagnostic) === null || _a2 === void 0 ? void 0 : _a2.log(DiagnosticLogger_1.EVENTS.UNLINKED_ERROR_STATE, {
              sessionIdHash
            });
          }
        }
      };
      this.metadataUpdated = (key, value) => {
        this.storage.setItem(key, value);
      };
      this.chainUpdated = (chainId, jsonRpcUrl) => {
        if (this.chainCallbackParams.chainId === chainId && this.chainCallbackParams.jsonRpcUrl === jsonRpcUrl) {
          return;
        }
        this.chainCallbackParams = {
          chainId,
          jsonRpcUrl
        };
        if (this.chainCallback) {
          this.chainCallback(chainId, jsonRpcUrl);
        }
      };
      this.accountUpdated = (selectedAddress) => {
        if (this.accountsCallback) {
          this.accountsCallback([selectedAddress]);
        }
        if (WalletLinkRelay2.accountRequestCallbackIds.size > 0) {
          Array.from(WalletLinkRelay2.accountRequestCallbackIds.values()).forEach((id) => {
            const message = {
              type: "WEB3_RESPONSE",
              id,
              response: {
                method: "requestEthereumAccounts",
                result: [selectedAddress]
              }
            };
            this.invokeCallback(Object.assign(Object.assign({}, message), { id }));
          });
          WalletLinkRelay2.accountRequestCallbackIds.clear();
        }
      };
      this.connectedUpdated = (connected) => {
        this.ui.setConnected(connected);
      };
      this.resetAndReload = this.resetAndReload.bind(this);
      this.linkAPIUrl = options.linkAPIUrl;
      this.storage = options.storage;
      this.options = options;
      const { session, ui, connection } = this.subscribe();
      this._session = session;
      this.connection = connection;
      this.relayEventManager = options.relayEventManager;
      this.diagnostic = options.diagnosticLogger;
      this._reloadOnDisconnect = (_a = options.reloadOnDisconnect) !== null && _a !== void 0 ? _a : true;
      this.ui = ui;
    }
    subscribe() {
      const session = Session_1.Session.load(this.storage) || new Session_1.Session(this.storage).save();
      const { linkAPIUrl, diagnostic } = this;
      const connection = new WalletLinkConnection_1.WalletLinkConnection({
        session,
        linkAPIUrl,
        diagnostic,
        listener: this
      });
      const { version: version2, darkMode } = this.options;
      const ui = this.options.uiConstructor({
        linkAPIUrl,
        version: version2,
        darkMode,
        session
      });
      connection.connect();
      return { session, ui, connection };
    }
    attachUI() {
      this.ui.attach();
    }
    resetAndReload() {
      Promise.race([
        this.connection.setSessionMetadata("__destroyed", "1"),
        new Promise((resolve) => setTimeout(() => resolve(null), 1e3))
      ]).then(() => {
        var _a, _b;
        const isStandalone = this.ui.isStandalone();
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.SESSION_STATE_CHANGE, {
          method: "relay::resetAndReload",
          sessionMetadataChange: "__destroyed, 1",
          sessionIdHash: this.getSessionIdHash()
        });
        this.connection.destroy();
        const storedSession = Session_1.Session.load(this.storage);
        if ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) === this._session.id) {
          this.storage.clear();
        } else if (storedSession) {
          (_b = this.diagnostic) === null || _b === void 0 ? void 0 : _b.log(DiagnosticLogger_1.EVENTS.SKIPPED_CLEARING_SESSION, {
            sessionIdHash: this.getSessionIdHash(),
            storedSessionIdHash: Session_1.Session.hash(storedSession.id)
          });
        }
        if (this._reloadOnDisconnect) {
          this.ui.reloadUI();
          return;
        }
        if (this.accountsCallback) {
          this.accountsCallback([], true);
        }
        const { session, ui, connection } = this.subscribe();
        this._session = session;
        this.connection = connection;
        this.ui = ui;
        if (isStandalone && this.ui.setStandalone)
          this.ui.setStandalone(true);
        if (!this.options.headlessMode)
          this.attachUI();
      }).catch((err) => {
        var _a;
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.FAILURE, {
          method: "relay::resetAndReload",
          message: `failed to reset and reload with ${err}`,
          sessionIdHash: this.getSessionIdHash()
        });
      });
    }
    setAppInfo(appName, appLogoUrl) {
      this.appName = appName;
      this.appLogoUrl = appLogoUrl;
    }
    getStorageItem(key) {
      return this.storage.getItem(key);
    }
    get session() {
      return this._session;
    }
    setStorageItem(key, value) {
      this.storage.setItem(key, value);
    }
    signEthereumMessage(message, address, addPrefix, typedDataJson) {
      return this.sendRequest({
        method: "signEthereumMessage",
        params: {
          message: (0, util_1.hexStringFromBuffer)(message, true),
          address,
          addPrefix,
          typedDataJson: typedDataJson || null
        }
      });
    }
    ethereumAddressFromSignedMessage(message, signature, addPrefix) {
      return this.sendRequest({
        method: "ethereumAddressFromSignedMessage",
        params: {
          message: (0, util_1.hexStringFromBuffer)(message, true),
          signature: (0, util_1.hexStringFromBuffer)(signature, true),
          addPrefix
        }
      });
    }
    signEthereumTransaction(params) {
      return this.sendRequest({
        method: "signEthereumTransaction",
        params: {
          fromAddress: params.fromAddress,
          toAddress: params.toAddress,
          weiValue: (0, util_1.bigIntStringFromBN)(params.weiValue),
          data: (0, util_1.hexStringFromBuffer)(params.data, true),
          nonce: params.nonce,
          gasPriceInWei: params.gasPriceInWei ? (0, util_1.bigIntStringFromBN)(params.gasPriceInWei) : null,
          maxFeePerGas: params.gasPriceInWei ? (0, util_1.bigIntStringFromBN)(params.gasPriceInWei) : null,
          maxPriorityFeePerGas: params.gasPriceInWei ? (0, util_1.bigIntStringFromBN)(params.gasPriceInWei) : null,
          gasLimit: params.gasLimit ? (0, util_1.bigIntStringFromBN)(params.gasLimit) : null,
          chainId: params.chainId,
          shouldSubmit: false
        }
      });
    }
    signAndSubmitEthereumTransaction(params) {
      return this.sendRequest({
        method: "signEthereumTransaction",
        params: {
          fromAddress: params.fromAddress,
          toAddress: params.toAddress,
          weiValue: (0, util_1.bigIntStringFromBN)(params.weiValue),
          data: (0, util_1.hexStringFromBuffer)(params.data, true),
          nonce: params.nonce,
          gasPriceInWei: params.gasPriceInWei ? (0, util_1.bigIntStringFromBN)(params.gasPriceInWei) : null,
          maxFeePerGas: params.maxFeePerGas ? (0, util_1.bigIntStringFromBN)(params.maxFeePerGas) : null,
          maxPriorityFeePerGas: params.maxPriorityFeePerGas ? (0, util_1.bigIntStringFromBN)(params.maxPriorityFeePerGas) : null,
          gasLimit: params.gasLimit ? (0, util_1.bigIntStringFromBN)(params.gasLimit) : null,
          chainId: params.chainId,
          shouldSubmit: true
        }
      });
    }
    submitEthereumTransaction(signedTransaction, chainId) {
      return this.sendRequest({
        method: "submitEthereumTransaction",
        params: {
          signedTransaction: (0, util_1.hexStringFromBuffer)(signedTransaction, true),
          chainId
        }
      });
    }
    scanQRCode(regExp) {
      return this.sendRequest({
        method: "scanQRCode",
        params: {
          regExp
        }
      });
    }
    getQRCodeUrl() {
      return (0, util_1.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, false, this.options.version, this.dappDefaultChain);
    }
    genericRequest(data, action) {
      return this.sendRequest({
        method: "generic",
        params: {
          action,
          data
        }
      });
    }
    sendGenericMessage(request) {
      return this.sendRequest(request);
    }
    sendRequest(request) {
      let hideSnackbarItem = null;
      const id = (0, util_1.randomBytesHex)(8);
      const cancel = (error2) => {
        this.publishWeb3RequestCanceledEvent(id);
        this.handleErrorResponse(id, request.method, error2);
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
      };
      const promise = new Promise((resolve, reject) => {
        if (!this.ui.isStandalone()) {
          hideSnackbarItem = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: cancel,
            onResetConnection: this.resetAndReload
            // eslint-disable-line @typescript-eslint/unbound-method
          });
        }
        this.relayEventManager.callbacks.set(id, (response) => {
          hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
          if ((0, Web3Response_1.isErrorResponse)(response)) {
            return reject(new Error(response.errorMessage));
          }
          resolve(response);
        });
        if (this.ui.isStandalone()) {
          this.sendRequestStandalone(id, request);
        } else {
          this.publishWeb3RequestEvent(id, request);
        }
      });
      return { promise, cancel };
    }
    setConnectDisabled(disabled) {
      this.ui.setConnectDisabled(disabled);
    }
    setAccountsCallback(accountsCallback) {
      this.accountsCallback = accountsCallback;
    }
    setChainCallback(chainCallback) {
      this.chainCallback = chainCallback;
    }
    setDappDefaultChainCallback(chainId) {
      this.dappDefaultChain = chainId;
      if (this.ui instanceof WalletLinkRelayUI_1.WalletLinkRelayUI) {
        this.ui.setChainId(chainId);
      }
    }
    publishWeb3RequestEvent(id, request) {
      var _a;
      const message = { type: "WEB3_REQUEST", id, request };
      const storedSession = Session_1.Session.load(this.storage);
      (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.WEB3_REQUEST, {
        eventId: message.id,
        method: `relay::${request.method}`,
        sessionIdHash: this.getSessionIdHash(),
        storedSessionIdHash: storedSession ? Session_1.Session.hash(storedSession.id) : "",
        isSessionMismatched: ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) !== this._session.id).toString()
      });
      this.publishEvent("Web3Request", message, true).then((_2) => {
        var _a2;
        (_a2 = this.diagnostic) === null || _a2 === void 0 ? void 0 : _a2.log(DiagnosticLogger_1.EVENTS.WEB3_REQUEST_PUBLISHED, {
          eventId: message.id,
          method: `relay::${request.method}`,
          sessionIdHash: this.getSessionIdHash(),
          storedSessionIdHash: storedSession ? Session_1.Session.hash(storedSession.id) : "",
          isSessionMismatched: ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) !== this._session.id).toString()
        });
      }).catch((err) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: message.id,
          response: {
            method: request.method,
            errorMessage: err.message
          }
        });
      });
    }
    publishWeb3RequestCanceledEvent(id) {
      const message = {
        type: "WEB3_REQUEST_CANCELED",
        id
      };
      this.publishEvent("Web3RequestCanceled", message, false).then();
    }
    publishEvent(event, message, callWebhook) {
      return this.connection.publishEvent(event, message, callWebhook);
    }
    handleWeb3ResponseMessage(message) {
      var _a;
      const { response } = message;
      (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.WEB3_RESPONSE, {
        eventId: message.id,
        method: `relay::${response.method}`,
        sessionIdHash: this.getSessionIdHash()
      });
      if (response.method === "requestEthereumAccounts") {
        WalletLinkRelay2.accountRequestCallbackIds.forEach((id) => this.invokeCallback(Object.assign(Object.assign({}, message), { id })));
        WalletLinkRelay2.accountRequestCallbackIds.clear();
        return;
      }
      this.invokeCallback(message);
    }
    handleErrorResponse(id, method, error2, errorCode) {
      var _a;
      const errorMessage = (_a = error2 === null || error2 === void 0 ? void 0 : error2.message) !== null && _a !== void 0 ? _a : (0, error_1.getMessageFromCode)(errorCode);
      this.handleWeb3ResponseMessage({
        type: "WEB3_RESPONSE",
        id,
        response: {
          method,
          errorMessage,
          errorCode
        }
      });
    }
    invokeCallback(message) {
      const callback = this.relayEventManager.callbacks.get(message.id);
      if (callback) {
        callback(message.response);
        this.relayEventManager.callbacks.delete(message.id);
      }
    }
    requestEthereumAccounts() {
      const request = {
        method: "requestEthereumAccounts",
        params: {
          appName: this.appName,
          appLogoUrl: this.appLogoUrl || null
        }
      };
      const id = (0, util_1.randomBytesHex)(8);
      const cancel = (error2) => {
        this.publishWeb3RequestCanceledEvent(id);
        this.handleErrorResponse(id, request.method, error2);
      };
      const promise = new Promise((resolve, reject) => {
        this.relayEventManager.callbacks.set(id, (response) => {
          this.ui.hideRequestEthereumAccounts();
          if ((0, Web3Response_1.isErrorResponse)(response)) {
            return reject(new Error(response.errorMessage));
          }
          resolve(response);
        });
        if (this.ui.inlineAccountsResponse()) {
          const onAccounts = (accounts) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id,
              response: { method: "requestEthereumAccounts", result: accounts }
            });
          };
          this.ui.requestEthereumAccounts({
            onCancel: cancel,
            onAccounts
          });
        } else {
          const err = error_1.standardErrors.provider.userRejectedRequest("User denied account authorization");
          this.ui.requestEthereumAccounts({
            onCancel: () => cancel(err)
          });
        }
        WalletLinkRelay2.accountRequestCallbackIds.add(id);
        if (!this.ui.inlineAccountsResponse() && !this.ui.isStandalone()) {
          this.publishWeb3RequestEvent(id, request);
        }
      });
      return { promise, cancel };
    }
    selectProvider(providerOptions) {
      const request = {
        method: "selectProvider"
      };
      const id = (0, util_1.randomBytesHex)(8);
      const cancel = (error2) => {
        this.publishWeb3RequestCanceledEvent(id);
        this.handleErrorResponse(id, request.method, error2);
      };
      const promise = new Promise((resolve, reject) => {
        this.relayEventManager.callbacks.set(id, (response) => {
          if ((0, Web3Response_1.isErrorResponse)(response)) {
            return reject(new Error(response.errorMessage));
          }
          resolve(response);
        });
        const _cancel = (_error) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id,
            response: { method: "selectProvider", result: type_1.ProviderType.Unselected }
          });
        };
        const approve = (selectedProviderKey) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id,
            response: { method: "selectProvider", result: selectedProviderKey }
          });
        };
        if (this.ui.selectProvider)
          this.ui.selectProvider({
            onApprove: approve,
            onCancel: _cancel,
            providerOptions
          });
      });
      return { cancel, promise };
    }
    watchAsset(type2, address, symbol, decimals, image, chainId) {
      const request = {
        method: "watchAsset",
        params: {
          type: type2,
          options: {
            address,
            symbol,
            decimals,
            image
          },
          chainId
        }
      };
      let hideSnackbarItem = null;
      const id = (0, util_1.randomBytesHex)(8);
      const cancel = (error2) => {
        this.publishWeb3RequestCanceledEvent(id);
        this.handleErrorResponse(id, request.method, error2);
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
      };
      if (!this.ui.inlineWatchAsset()) {
        hideSnackbarItem = this.ui.showConnecting({
          isUnlinkedErrorState: this.isUnlinkedErrorState,
          onCancel: cancel,
          onResetConnection: this.resetAndReload
          // eslint-disable-line @typescript-eslint/unbound-method
        });
      }
      const promise = new Promise((resolve, reject) => {
        this.relayEventManager.callbacks.set(id, (response) => {
          hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
          if ((0, Web3Response_1.isErrorResponse)(response)) {
            return reject(new Error(response.errorMessage));
          }
          resolve(response);
        });
        const _cancel = (_error) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id,
            response: {
              method: "watchAsset",
              result: false
            }
          });
        };
        const approve = () => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id,
            response: {
              method: "watchAsset",
              result: true
            }
          });
        };
        if (this.ui.inlineWatchAsset()) {
          this.ui.watchAsset({
            onApprove: approve,
            onCancel: _cancel,
            type: type2,
            address,
            symbol,
            decimals,
            image,
            chainId
          });
        }
        if (!this.ui.inlineWatchAsset() && !this.ui.isStandalone()) {
          this.publishWeb3RequestEvent(id, request);
        }
      });
      return { cancel, promise };
    }
    addEthereumChain(chainId, rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency) {
      const request = {
        method: "addEthereumChain",
        params: {
          chainId,
          rpcUrls,
          blockExplorerUrls,
          chainName,
          iconUrls,
          nativeCurrency
        }
      };
      let hideSnackbarItem = null;
      const id = (0, util_1.randomBytesHex)(8);
      const cancel = (error2) => {
        this.publishWeb3RequestCanceledEvent(id);
        this.handleErrorResponse(id, request.method, error2);
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
      };
      if (!this.ui.inlineAddEthereumChain(chainId)) {
        hideSnackbarItem = this.ui.showConnecting({
          isUnlinkedErrorState: this.isUnlinkedErrorState,
          onCancel: cancel,
          onResetConnection: this.resetAndReload
          // eslint-disable-line @typescript-eslint/unbound-method
        });
      }
      const promise = new Promise((resolve, reject) => {
        this.relayEventManager.callbacks.set(id, (response) => {
          hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
          if ((0, Web3Response_1.isErrorResponse)(response)) {
            return reject(new Error(response.errorMessage));
          }
          resolve(response);
        });
        const _cancel = (_error) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id,
            response: {
              method: "addEthereumChain",
              result: {
                isApproved: false,
                rpcUrl: ""
              }
            }
          });
        };
        const approve = (rpcUrl) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id,
            response: {
              method: "addEthereumChain",
              result: {
                isApproved: true,
                rpcUrl
              }
            }
          });
        };
        if (this.ui.inlineAddEthereumChain(chainId)) {
          this.ui.addEthereumChain({
            onCancel: _cancel,
            onApprove: approve,
            chainId: request.params.chainId,
            rpcUrls: request.params.rpcUrls,
            blockExplorerUrls: request.params.blockExplorerUrls,
            chainName: request.params.chainName,
            iconUrls: request.params.iconUrls,
            nativeCurrency: request.params.nativeCurrency
          });
        }
        if (!this.ui.inlineAddEthereumChain(chainId) && !this.ui.isStandalone()) {
          this.publishWeb3RequestEvent(id, request);
        }
      });
      return { promise, cancel };
    }
    switchEthereumChain(chainId, address) {
      const request = {
        method: "switchEthereumChain",
        params: Object.assign({ chainId }, { address })
      };
      const id = (0, util_1.randomBytesHex)(8);
      const cancel = (error2) => {
        this.publishWeb3RequestCanceledEvent(id);
        this.handleErrorResponse(id, request.method, error2);
      };
      const promise = new Promise((resolve, reject) => {
        this.relayEventManager.callbacks.set(id, (response) => {
          if ((0, Web3Response_1.isErrorResponse)(response) && response.errorCode) {
            return reject(error_1.standardErrors.provider.custom({
              code: response.errorCode,
              message: `Unrecognized chain ID. Try adding the chain using addEthereumChain first.`
            }));
          } else if ((0, Web3Response_1.isErrorResponse)(response)) {
            return reject(new Error(response.errorMessage));
          }
          resolve(response);
        });
        const _cancel = (error2) => {
          var _a;
          if (error2) {
            const errorCode = (_a = (0, error_1.getErrorCode)(error2)) !== null && _a !== void 0 ? _a : error_1.standardErrorCodes.provider.unsupportedChain;
            this.handleErrorResponse(id, "switchEthereumChain", error2 instanceof Error ? error2 : error_1.standardErrors.provider.unsupportedChain(chainId), errorCode);
          } else {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id,
              response: {
                method: "switchEthereumChain",
                result: {
                  isApproved: false,
                  rpcUrl: ""
                }
              }
            });
          }
        };
        const approve = (rpcUrl) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id,
            response: {
              method: "switchEthereumChain",
              result: {
                isApproved: true,
                rpcUrl
              }
            }
          });
        };
        this.ui.switchEthereumChain({
          onCancel: _cancel,
          onApprove: approve,
          chainId: request.params.chainId,
          address: request.params.address
        });
        if (!this.ui.inlineSwitchEthereumChain() && !this.ui.isStandalone()) {
          this.publishWeb3RequestEvent(id, request);
        }
      });
      return { promise, cancel };
    }
    inlineAddEthereumChain(chainId) {
      return this.ui.inlineAddEthereumChain(chainId);
    }
    getSessionIdHash() {
      return Session_1.Session.hash(this._session.id);
    }
    sendRequestStandalone(id, request) {
      const _cancel = (error2) => {
        this.handleErrorResponse(id, request.method, error2);
      };
      const onSuccess = (response) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id,
          response
        });
      };
      switch (request.method) {
        case "signEthereumMessage":
          this.ui.signEthereumMessage({
            request,
            onSuccess,
            onCancel: _cancel
          });
          break;
        case "signEthereumTransaction":
          this.ui.signEthereumTransaction({
            request,
            onSuccess,
            onCancel: _cancel
          });
          break;
        case "submitEthereumTransaction":
          this.ui.submitEthereumTransaction({
            request,
            onSuccess,
            onCancel: _cancel
          });
          break;
        case "ethereumAddressFromSignedMessage":
          this.ui.ethereumAddressFromSignedMessage({
            request,
            onSuccess
          });
          break;
        default:
          _cancel();
          break;
      }
    }
  };
  WalletLinkRelay.WalletLinkRelay = WalletLinkRelay$1;
  WalletLinkRelay$1.accountRequestCallbackIds = /* @__PURE__ */ new Set();
  return WalletLinkRelay;
}
var MobileRelayUI = {};
var RedirectDialog = {};
var Snackbar = {};
var hasRequiredSnackbar;
function requireSnackbar() {
  if (hasRequiredSnackbar) return Snackbar;
  hasRequiredSnackbar = 1;
  (function(exports) {
    var __createBinding2 = Snackbar && Snackbar.__createBinding || (Object.create ? (function(o2, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m2, k2);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k2];
        } };
      }
      Object.defineProperty(o2, k22, desc);
    }) : (function(o2, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      o2[k22] = m2[k2];
    }));
    var __exportStar2 = Snackbar && Snackbar.__exportStar || function(m2, exports2) {
      for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding2(exports2, m2, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar2(/* @__PURE__ */ requireSnackbar$1(), exports);
  })(Snackbar);
  return Snackbar;
}
var RedirectDialogCss = {};
var hasRequiredRedirectDialogCss;
function requireRedirectDialogCss() {
  if (hasRequiredRedirectDialogCss) return RedirectDialogCss;
  hasRequiredRedirectDialogCss = 1;
  Object.defineProperty(RedirectDialogCss, "__esModule", { value: true });
  RedirectDialogCss.default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}`)();
  return RedirectDialogCss;
}
var hasRequiredRedirectDialog;
function requireRedirectDialog() {
  if (hasRequiredRedirectDialog) return RedirectDialog;
  hasRequiredRedirectDialog = 1;
  var __importDefault2 = RedirectDialog && RedirectDialog.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(RedirectDialog, "__esModule", { value: true });
  RedirectDialog.RedirectDialog = void 0;
  const clsx_1 = __importDefault2(require$$0$1);
  const preact_1 = require$$1$1;
  const cssReset_1 = /* @__PURE__ */ requireCssReset();
  const Snackbar_1 = /* @__PURE__ */ requireSnackbar();
  const RedirectDialog_css_1 = __importDefault2(/* @__PURE__ */ requireRedirectDialogCss());
  let RedirectDialog$1 = class RedirectDialog {
    constructor() {
      this.root = null;
    }
    attach() {
      const el = document.documentElement;
      this.root = document.createElement("div");
      this.root.className = "-cbwsdk-css-reset";
      el.appendChild(this.root);
      (0, cssReset_1.injectCssReset)();
    }
    present(props) {
      this.render(props);
    }
    clear() {
      this.render(null);
    }
    render(props) {
      if (!this.root)
        return;
      (0, preact_1.render)(null, this.root);
      if (!props)
        return;
      (0, preact_1.render)((0, preact_1.h)(RedirectDialogContent, Object.assign({}, props, { onDismiss: () => {
        this.clear();
      } })), this.root);
    }
  };
  RedirectDialog.RedirectDialog = RedirectDialog$1;
  const RedirectDialogContent = ({ title, buttonText, darkMode, onButtonClick, onDismiss }) => {
    const theme = darkMode ? "dark" : "light";
    return (0, preact_1.h)(
      Snackbar_1.SnackbarContainer,
      { darkMode },
      (0, preact_1.h)(
        "div",
        { class: "-cbwsdk-redirect-dialog" },
        (0, preact_1.h)("style", null, RedirectDialog_css_1.default),
        (0, preact_1.h)("div", { class: "-cbwsdk-redirect-dialog-backdrop", onClick: onDismiss }),
        (0, preact_1.h)(
          "div",
          { class: (0, clsx_1.default)("-cbwsdk-redirect-dialog-box", theme) },
          (0, preact_1.h)("p", null, title),
          (0, preact_1.h)("button", { onClick: onButtonClick }, buttonText)
        )
      )
    );
  };
  return RedirectDialog;
}
var hasRequiredMobileRelayUI;
function requireMobileRelayUI() {
  if (hasRequiredMobileRelayUI) return MobileRelayUI;
  hasRequiredMobileRelayUI = 1;
  Object.defineProperty(MobileRelayUI, "__esModule", { value: true });
  MobileRelayUI.MobileRelayUI = void 0;
  const RedirectDialog_1 = /* @__PURE__ */ requireRedirectDialog();
  let MobileRelayUI$1 = class MobileRelayUI {
    constructor(options) {
      this.attached = false;
      this.darkMode = false;
      this.redirectDialog = new RedirectDialog_1.RedirectDialog();
      this.darkMode = options.darkMode;
    }
    attach() {
      if (this.attached) {
        throw new Error("Coinbase Wallet SDK UI is already attached");
      }
      this.redirectDialog.attach();
      this.attached = true;
    }
    setConnected(_connected) {
    }
    // no-op
    redirectToCoinbaseWallet(walletLinkUrl) {
      const url = new URL("https://go.cb-w.com/walletlink");
      url.searchParams.append("redirect_url", window.location.href);
      if (walletLinkUrl) {
        url.searchParams.append("wl_url", walletLinkUrl);
      }
      const anchorTag = document.createElement("a");
      anchorTag.target = "cbw-opener";
      anchorTag.href = url.href;
      anchorTag.rel = "noreferrer noopener";
      anchorTag.click();
    }
    openCoinbaseWalletDeeplink(walletLinkUrl) {
      this.redirectDialog.present({
        title: "Redirecting to Coinbase Wallet...",
        buttonText: "Open",
        darkMode: this.darkMode,
        onButtonClick: () => {
          this.redirectToCoinbaseWallet(walletLinkUrl);
        }
      });
      setTimeout(() => {
        this.redirectToCoinbaseWallet(walletLinkUrl);
      }, 99);
    }
    showConnecting(_options) {
      return () => {
        this.redirectDialog.clear();
      };
    }
    hideRequestEthereumAccounts() {
      this.redirectDialog.clear();
    }
    // -- Methods below are not needed for mobile
    requestEthereumAccounts() {
    }
    // no-op
    addEthereumChain() {
    }
    // no-op
    watchAsset() {
    }
    // no-op
    selectProvider() {
    }
    // no-op
    switchEthereumChain() {
    }
    // no-op
    signEthereumMessage() {
    }
    // no-op
    signEthereumTransaction() {
    }
    // no-op
    submitEthereumTransaction() {
    }
    // no-op
    ethereumAddressFromSignedMessage() {
    }
    // no-op
    reloadUI() {
    }
    // no-op
    setStandalone() {
    }
    // no-op
    setConnectDisabled() {
    }
    // no-op
    inlineAccountsResponse() {
      return false;
    }
    inlineAddEthereumChain() {
      return false;
    }
    inlineWatchAsset() {
      return false;
    }
    inlineSwitchEthereumChain() {
      return false;
    }
    isStandalone() {
      return false;
    }
  };
  MobileRelayUI.MobileRelayUI = MobileRelayUI$1;
  return MobileRelayUI;
}
var hasRequiredMobileRelay;
function requireMobileRelay() {
  if (hasRequiredMobileRelay) return MobileRelay;
  hasRequiredMobileRelay = 1;
  Object.defineProperty(MobileRelay, "__esModule", { value: true });
  MobileRelay.MobileRelay = void 0;
  const util_1 = /* @__PURE__ */ requireUtil$1();
  const WalletLinkRelay_1 = /* @__PURE__ */ requireWalletLinkRelay();
  const MobileRelayUI_1 = /* @__PURE__ */ requireMobileRelayUI();
  let MobileRelay$1 = class MobileRelay extends WalletLinkRelay_1.WalletLinkRelay {
    constructor(options) {
      var _a;
      super(options);
      this._enableMobileWalletLink = (_a = options.enableMobileWalletLink) !== null && _a !== void 0 ? _a : false;
    }
    // override
    requestEthereumAccounts() {
      if (this._enableMobileWalletLink) {
        return super.requestEthereumAccounts();
      }
      return {
        promise: new Promise(() => {
          const location2 = (0, util_1.getLocation)();
          location2.href = `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(location2.href)}`;
        }),
        cancel: () => {
        }
      };
    }
    // override
    publishWeb3RequestEvent(id, request) {
      super.publishWeb3RequestEvent(id, request);
      if (!(this._enableMobileWalletLink && this.ui instanceof MobileRelayUI_1.MobileRelayUI))
        return;
      let navigatedToCBW = false;
      switch (request.method) {
        case "requestEthereumAccounts":
        case "connectAndSignIn":
          navigatedToCBW = true;
          this.ui.openCoinbaseWalletDeeplink(this.getQRCodeUrl());
          break;
        case "switchEthereumChain":
          return;
        default:
          navigatedToCBW = true;
          this.ui.openCoinbaseWalletDeeplink();
          break;
      }
      if (navigatedToCBW) {
        window.addEventListener("blur", () => {
          window.addEventListener("focus", () => {
            this.connection.checkUnseenEvents();
          }, { once: true });
        }, { once: true });
      }
    }
    // override
    handleWeb3ResponseMessage(message) {
      super.handleWeb3ResponseMessage(message);
    }
    connectAndSignIn(params) {
      if (!this._enableMobileWalletLink) {
        throw new Error("connectAndSignIn is supported only when enableMobileWalletLink is on");
      }
      return this.sendRequest({
        method: "connectAndSignIn",
        params: {
          appName: this.appName,
          appLogoUrl: this.appLogoUrl,
          domain: window.location.hostname,
          aud: window.location.href,
          version: "1",
          type: "eip4361",
          nonce: params.nonce,
          iat: (/* @__PURE__ */ new Date()).toISOString(),
          chainId: `eip155:${this.dappDefaultChain}`,
          statement: params.statement,
          resources: params.resources
        }
      });
    }
  };
  MobileRelay.MobileRelay = MobileRelay$1;
  return MobileRelay;
}
var readableBrowser = { exports: {} };
var streamBrowser;
var hasRequiredStreamBrowser;
function requireStreamBrowser() {
  if (hasRequiredStreamBrowser) return streamBrowser;
  hasRequiredStreamBrowser = 1;
  streamBrowser = requireEvents().EventEmitter;
  return streamBrowser;
}
var buffer_list;
var hasRequiredBuffer_list;
function requireBuffer_list() {
  if (hasRequiredBuffer_list) return buffer_list;
  hasRequiredBuffer_list = 1;
  function ownKeys2(object2, enumerableOnly) {
    var keys = Object.keys(object2);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object2);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = null != arguments[i2] ? arguments[i2] : {};
      i2 % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint);
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(input);
  }
  var _require = requireBuffer(), Buffer2 = _require.Buffer;
  var _require2 = require$$3, inspect = _require2.inspect;
  var custom = inspect && inspect.custom || "inspect";
  function copyBuffer(src, target, offset) {
    Buffer2.prototype.copy.call(src, target, offset);
  }
  buffer_list = /* @__PURE__ */ (function() {
    function BufferList() {
      _classCallCheck(this, BufferList);
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    _createClass(BufferList, [{
      key: "push",
      value: function push(v2) {
        var entry = {
          data: v2,
          next: null
        };
        if (this.length > 0) this.tail.next = entry;
        else this.head = entry;
        this.tail = entry;
        ++this.length;
      }
    }, {
      key: "unshift",
      value: function unshift(v2) {
        var entry = {
          data: v2,
          next: this.head
        };
        if (this.length === 0) this.tail = entry;
        this.head = entry;
        ++this.length;
      }
    }, {
      key: "shift",
      value: function shift() {
        if (this.length === 0) return;
        var ret = this.head.data;
        if (this.length === 1) this.head = this.tail = null;
        else this.head = this.head.next;
        --this.length;
        return ret;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.head = this.tail = null;
        this.length = 0;
      }
    }, {
      key: "join",
      value: function join(s2) {
        if (this.length === 0) return "";
        var p2 = this.head;
        var ret = "" + p2.data;
        while (p2 = p2.next) ret += s2 + p2.data;
        return ret;
      }
    }, {
      key: "concat",
      value: function concat(n2) {
        if (this.length === 0) return Buffer2.alloc(0);
        var ret = Buffer2.allocUnsafe(n2 >>> 0);
        var p2 = this.head;
        var i2 = 0;
        while (p2) {
          copyBuffer(p2.data, ret, i2);
          i2 += p2.data.length;
          p2 = p2.next;
        }
        return ret;
      }
      // Consumes a specified amount of bytes or characters from the buffered data.
    }, {
      key: "consume",
      value: function consume(n2, hasStrings) {
        var ret;
        if (n2 < this.head.data.length) {
          ret = this.head.data.slice(0, n2);
          this.head.data = this.head.data.slice(n2);
        } else if (n2 === this.head.data.length) {
          ret = this.shift();
        } else {
          ret = hasStrings ? this._getString(n2) : this._getBuffer(n2);
        }
        return ret;
      }
    }, {
      key: "first",
      value: function first() {
        return this.head.data;
      }
      // Consumes a specified amount of characters from the buffered data.
    }, {
      key: "_getString",
      value: function _getString(n2) {
        var p2 = this.head;
        var c2 = 1;
        var ret = p2.data;
        n2 -= ret.length;
        while (p2 = p2.next) {
          var str = p2.data;
          var nb = n2 > str.length ? str.length : n2;
          if (nb === str.length) ret += str;
          else ret += str.slice(0, n2);
          n2 -= nb;
          if (n2 === 0) {
            if (nb === str.length) {
              ++c2;
              if (p2.next) this.head = p2.next;
              else this.head = this.tail = null;
            } else {
              this.head = p2;
              p2.data = str.slice(nb);
            }
            break;
          }
          ++c2;
        }
        this.length -= c2;
        return ret;
      }
      // Consumes a specified amount of bytes from the buffered data.
    }, {
      key: "_getBuffer",
      value: function _getBuffer(n2) {
        var ret = Buffer2.allocUnsafe(n2);
        var p2 = this.head;
        var c2 = 1;
        p2.data.copy(ret);
        n2 -= p2.data.length;
        while (p2 = p2.next) {
          var buf = p2.data;
          var nb = n2 > buf.length ? buf.length : n2;
          buf.copy(ret, ret.length - n2, 0, nb);
          n2 -= nb;
          if (n2 === 0) {
            if (nb === buf.length) {
              ++c2;
              if (p2.next) this.head = p2.next;
              else this.head = this.tail = null;
            } else {
              this.head = p2;
              p2.data = buf.slice(nb);
            }
            break;
          }
          ++c2;
        }
        this.length -= c2;
        return ret;
      }
      // Make sure the linked list only shows the minimal necessary information.
    }, {
      key: custom,
      value: function value(_2, options) {
        return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
          // Only inspect one level.
          depth: 0,
          // It should not recurse.
          customInspect: false
        }));
      }
    }]);
    return BufferList;
  })();
  return buffer_list;
}
var destroy_1;
var hasRequiredDestroy;
function requireDestroy() {
  if (hasRequiredDestroy) return destroy_1;
  hasRequiredDestroy = 1;
  function destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
      if (cb) {
        cb(err);
      } else if (err) {
        if (!this._writableState) {
          process.nextTick(emitErrorNT, this, err);
        } else if (!this._writableState.errorEmitted) {
          this._writableState.errorEmitted = true;
          process.nextTick(emitErrorNT, this, err);
        }
      }
      return this;
    }
    if (this._readableState) {
      this._readableState.destroyed = true;
    }
    if (this._writableState) {
      this._writableState.destroyed = true;
    }
    this._destroy(err || null, function(err2) {
      if (!cb && err2) {
        if (!_this._writableState) {
          process.nextTick(emitErrorAndCloseNT, _this, err2);
        } else if (!_this._writableState.errorEmitted) {
          _this._writableState.errorEmitted = true;
          process.nextTick(emitErrorAndCloseNT, _this, err2);
        } else {
          process.nextTick(emitCloseNT, _this);
        }
      } else if (cb) {
        process.nextTick(emitCloseNT, _this);
        cb(err2);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    });
    return this;
  }
  function emitErrorAndCloseNT(self2, err) {
    emitErrorNT(self2, err);
    emitCloseNT(self2);
  }
  function emitCloseNT(self2) {
    if (self2._writableState && !self2._writableState.emitClose) return;
    if (self2._readableState && !self2._readableState.emitClose) return;
    self2.emit("close");
  }
  function undestroy() {
    if (this._readableState) {
      this._readableState.destroyed = false;
      this._readableState.reading = false;
      this._readableState.ended = false;
      this._readableState.endEmitted = false;
    }
    if (this._writableState) {
      this._writableState.destroyed = false;
      this._writableState.ended = false;
      this._writableState.ending = false;
      this._writableState.finalCalled = false;
      this._writableState.prefinished = false;
      this._writableState.finished = false;
      this._writableState.errorEmitted = false;
    }
  }
  function emitErrorNT(self2, err) {
    self2.emit("error", err);
  }
  function errorOrDestroy(stream, err) {
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
    else stream.emit("error", err);
  }
  destroy_1 = {
    destroy,
    undestroy,
    errorOrDestroy
  };
  return destroy_1;
}
var errorsBrowser = {};
var hasRequiredErrorsBrowser;
function requireErrorsBrowser() {
  if (hasRequiredErrorsBrowser) return errorsBrowser;
  hasRequiredErrorsBrowser = 1;
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var codes = {};
  function createErrorType(code, message, Base) {
    if (!Base) {
      Base = Error;
    }
    function getMessage(arg1, arg2, arg3) {
      if (typeof message === "string") {
        return message;
      } else {
        return message(arg1, arg2, arg3);
      }
    }
    var NodeError = /* @__PURE__ */ (function(_Base) {
      _inheritsLoose(NodeError2, _Base);
      function NodeError2(arg1, arg2, arg3) {
        return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
      }
      return NodeError2;
    })(Base);
    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;
    codes[code] = NodeError;
  }
  function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
      var len = expected.length;
      expected = expected.map(function(i2) {
        return String(i2);
      });
      if (len > 2) {
        return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
      } else if (len === 2) {
        return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
      } else {
        return "of ".concat(thing, " ").concat(expected[0]);
      }
    } else {
      return "of ".concat(thing, " ").concat(String(expected));
    }
  }
  function startsWith(str, search, pos) {
    return str.substr(0, search.length) === search;
  }
  function endsWith(str, search, this_len) {
    if (this_len === void 0 || this_len > str.length) {
      this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
  }
  function includes(str, search, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > str.length) {
      return false;
    } else {
      return str.indexOf(search, start) !== -1;
    }
  }
  createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
    return 'The value "' + value + '" is invalid for option "' + name + '"';
  }, TypeError);
  createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    var determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
      determiner = "must not be";
      expected = expected.replace(/^not /, "");
    } else {
      determiner = "must be";
    }
    var msg;
    if (endsWith(name, " argument")) {
      msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    } else {
      var type2 = includes(name, ".") ? "property" : "argument";
      msg = 'The "'.concat(name, '" ').concat(type2, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    }
    msg += ". Received type ".concat(typeof actual);
    return msg;
  }, TypeError);
  createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
  createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
    return "The " + name + " method is not implemented";
  });
  createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
  createErrorType("ERR_STREAM_DESTROYED", function(name) {
    return "Cannot call " + name + " after a stream was destroyed";
  });
  createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
  createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
  createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
  createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
  createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
    return "Unknown encoding: " + arg;
  }, TypeError);
  createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
  errorsBrowser.codes = codes;
  return errorsBrowser;
}
var state;
var hasRequiredState;
function requireState() {
  if (hasRequiredState) return state;
  hasRequiredState = 1;
  var ERR_INVALID_OPT_VALUE = requireErrorsBrowser().codes.ERR_INVALID_OPT_VALUE;
  function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
  }
  function getHighWaterMark(state2, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
      if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
        var name = isDuplex ? duplexKey : "highWaterMark";
        throw new ERR_INVALID_OPT_VALUE(name, hwm);
      }
      return Math.floor(hwm);
    }
    return state2.objectMode ? 16 : 16 * 1024;
  }
  state = {
    getHighWaterMark
  };
  return state;
}
var browser$1;
var hasRequiredBrowser$1;
function requireBrowser$1() {
  if (hasRequiredBrowser$1) return browser$1;
  hasRequiredBrowser$1 = 1;
  browser$1 = deprecate;
  function deprecate(fn, msg) {
    if (config("noDeprecation")) {
      return fn;
    }
    var warned = false;
    function deprecated2() {
      if (!warned) {
        if (config("throwDeprecation")) {
          throw new Error(msg);
        } else if (config("traceDeprecation")) {
          console.trace(msg);
        } else {
          console.warn(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }
    return deprecated2;
  }
  function config(name) {
    try {
      if (!globalThis.localStorage) return false;
    } catch (_2) {
      return false;
    }
    var val = globalThis.localStorage[name];
    if (null == val) return false;
    return String(val).toLowerCase() === "true";
  }
  return browser$1;
}
var _stream_writable;
var hasRequired_stream_writable;
function require_stream_writable() {
  if (hasRequired_stream_writable) return _stream_writable;
  hasRequired_stream_writable = 1;
  _stream_writable = Writable;
  function CorkedRequest(state2) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
      onCorkedFinish(_this, state2);
    };
  }
  var Duplex;
  Writable.WritableState = WritableState;
  var internalUtil = {
    deprecate: requireBrowser$1()
  };
  var Stream = requireStreamBrowser();
  var Buffer2 = requireBuffer().Buffer;
  var OurUint8Array = (typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer2.from(chunk);
  }
  function _isUint8Array(obj) {
    return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  var destroyImpl = requireDestroy();
  var _require = requireState(), getHighWaterMark = _require.getHighWaterMark;
  var _require$codes = requireErrorsBrowser().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
  var errorOrDestroy = destroyImpl.errorOrDestroy;
  requireInherits_browser()(Writable, Stream);
  function nop() {
  }
  function WritableState(options, stream, isDuplex) {
    Duplex = Duplex || require_stream_duplex();
    options = options || {};
    if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
    this.finalCalled = false;
    this.needDrain = false;
    this.ending = false;
    this.ended = false;
    this.finished = false;
    this.destroyed = false;
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.length = 0;
    this.writing = false;
    this.corked = 0;
    this.sync = true;
    this.bufferProcessing = false;
    this.onwrite = function(er) {
      onwrite(stream, er);
    };
    this.writecb = null;
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    this.pendingcb = 0;
    this.prefinished = false;
    this.errorEmitted = false;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.bufferedRequestCount = 0;
    this.corkedRequestsFree = new CorkedRequest(this);
  }
  WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while (current) {
      out.push(current);
      current = current.next;
    }
    return out;
  };
  (function() {
    try {
      Object.defineProperty(WritableState.prototype, "buffer", {
        get: internalUtil.deprecate(function writableStateBufferGetter() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch (_2) {
    }
  })();
  var realHasInstance;
  if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
      value: function value(object2) {
        if (realHasInstance.call(this, object2)) return true;
        if (this !== Writable) return false;
        return object2 && object2._writableState instanceof WritableState;
      }
    });
  } else {
    realHasInstance = function realHasInstance2(object2) {
      return object2 instanceof this;
    };
  }
  function Writable(options) {
    Duplex = Duplex || require_stream_duplex();
    var isDuplex = this instanceof Duplex;
    if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
    this._writableState = new WritableState(options, this, isDuplex);
    this.writable = true;
    if (options) {
      if (typeof options.write === "function") this._write = options.write;
      if (typeof options.writev === "function") this._writev = options.writev;
      if (typeof options.destroy === "function") this._destroy = options.destroy;
      if (typeof options.final === "function") this._final = options.final;
    }
    Stream.call(this);
  }
  Writable.prototype.pipe = function() {
    errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
  };
  function writeAfterEnd(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END();
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
  }
  function validChunk(stream, state2, chunk, cb) {
    var er;
    if (chunk === null) {
      er = new ERR_STREAM_NULL_VALUES();
    } else if (typeof chunk !== "string" && !state2.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
    }
    if (er) {
      errorOrDestroy(stream, er);
      process.nextTick(cb, er);
      return false;
    }
    return true;
  }
  Writable.prototype.write = function(chunk, encoding, cb) {
    var state2 = this._writableState;
    var ret = false;
    var isBuf = !state2.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer2.isBuffer(chunk)) {
      chunk = _uint8ArrayToBuffer(chunk);
    }
    if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (isBuf) encoding = "buffer";
    else if (!encoding) encoding = state2.defaultEncoding;
    if (typeof cb !== "function") cb = nop;
    if (state2.ending) writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state2, chunk, cb)) {
      state2.pendingcb++;
      ret = writeOrBuffer(this, state2, isBuf, chunk, encoding, cb);
    }
    return ret;
  };
  Writable.prototype.cork = function() {
    this._writableState.corked++;
  };
  Writable.prototype.uncork = function() {
    var state2 = this._writableState;
    if (state2.corked) {
      state2.corked--;
      if (!state2.writing && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest) clearBuffer(this, state2);
    }
  };
  Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    if (typeof encoding === "string") encoding = encoding.toLowerCase();
    if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };
  Object.defineProperty(Writable.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get2() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function decodeChunk(state2, chunk, encoding) {
    if (!state2.objectMode && state2.decodeStrings !== false && typeof chunk === "string") {
      chunk = Buffer2.from(chunk, encoding);
    }
    return chunk;
  }
  Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get2() {
      return this._writableState.highWaterMark;
    }
  });
  function writeOrBuffer(stream, state2, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
      var newChunk = decodeChunk(state2, chunk, encoding);
      if (chunk !== newChunk) {
        isBuf = true;
        encoding = "buffer";
        chunk = newChunk;
      }
    }
    var len = state2.objectMode ? 1 : chunk.length;
    state2.length += len;
    var ret = state2.length < state2.highWaterMark;
    if (!ret) state2.needDrain = true;
    if (state2.writing || state2.corked) {
      var last = state2.lastBufferedRequest;
      state2.lastBufferedRequest = {
        chunk,
        encoding,
        isBuf,
        callback: cb,
        next: null
      };
      if (last) {
        last.next = state2.lastBufferedRequest;
      } else {
        state2.bufferedRequest = state2.lastBufferedRequest;
      }
      state2.bufferedRequestCount += 1;
    } else {
      doWrite(stream, state2, false, len, chunk, encoding, cb);
    }
    return ret;
  }
  function doWrite(stream, state2, writev, len, chunk, encoding, cb) {
    state2.writelen = len;
    state2.writecb = cb;
    state2.writing = true;
    state2.sync = true;
    if (state2.destroyed) state2.onwrite(new ERR_STREAM_DESTROYED("write"));
    else if (writev) stream._writev(chunk, state2.onwrite);
    else stream._write(chunk, encoding, state2.onwrite);
    state2.sync = false;
  }
  function onwriteError(stream, state2, sync, er, cb) {
    --state2.pendingcb;
    if (sync) {
      process.nextTick(cb, er);
      process.nextTick(finishMaybe, stream, state2);
      stream._writableState.errorEmitted = true;
      errorOrDestroy(stream, er);
    } else {
      cb(er);
      stream._writableState.errorEmitted = true;
      errorOrDestroy(stream, er);
      finishMaybe(stream, state2);
    }
  }
  function onwriteStateUpdate(state2) {
    state2.writing = false;
    state2.writecb = null;
    state2.length -= state2.writelen;
    state2.writelen = 0;
  }
  function onwrite(stream, er) {
    var state2 = stream._writableState;
    var sync = state2.sync;
    var cb = state2.writecb;
    if (typeof cb !== "function") throw new ERR_MULTIPLE_CALLBACK();
    onwriteStateUpdate(state2);
    if (er) onwriteError(stream, state2, sync, er, cb);
    else {
      var finished = needFinish(state2) || stream.destroyed;
      if (!finished && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest) {
        clearBuffer(stream, state2);
      }
      if (sync) {
        process.nextTick(afterWrite, stream, state2, finished, cb);
      } else {
        afterWrite(stream, state2, finished, cb);
      }
    }
  }
  function afterWrite(stream, state2, finished, cb) {
    if (!finished) onwriteDrain(stream, state2);
    state2.pendingcb--;
    cb();
    finishMaybe(stream, state2);
  }
  function onwriteDrain(stream, state2) {
    if (state2.length === 0 && state2.needDrain) {
      state2.needDrain = false;
      stream.emit("drain");
    }
  }
  function clearBuffer(stream, state2) {
    state2.bufferProcessing = true;
    var entry = state2.bufferedRequest;
    if (stream._writev && entry && entry.next) {
      var l2 = state2.bufferedRequestCount;
      var buffer = new Array(l2);
      var holder = state2.corkedRequestsFree;
      holder.entry = entry;
      var count = 0;
      var allBuffers = true;
      while (entry) {
        buffer[count] = entry;
        if (!entry.isBuf) allBuffers = false;
        entry = entry.next;
        count += 1;
      }
      buffer.allBuffers = allBuffers;
      doWrite(stream, state2, true, state2.length, buffer, "", holder.finish);
      state2.pendingcb++;
      state2.lastBufferedRequest = null;
      if (holder.next) {
        state2.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state2.corkedRequestsFree = new CorkedRequest(state2);
      }
      state2.bufferedRequestCount = 0;
    } else {
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state2.objectMode ? 1 : chunk.length;
        doWrite(stream, state2, false, len, chunk, encoding, cb);
        entry = entry.next;
        state2.bufferedRequestCount--;
        if (state2.writing) {
          break;
        }
      }
      if (entry === null) state2.lastBufferedRequest = null;
    }
    state2.bufferedRequest = entry;
    state2.bufferProcessing = false;
  }
  Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
  };
  Writable.prototype._writev = null;
  Writable.prototype.end = function(chunk, encoding, cb) {
    var state2 = this._writableState;
    if (typeof chunk === "function") {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (chunk !== null && chunk !== void 0) this.write(chunk, encoding);
    if (state2.corked) {
      state2.corked = 1;
      this.uncork();
    }
    if (!state2.ending) endWritable(this, state2, cb);
    return this;
  };
  Object.defineProperty(Writable.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get3() {
      return this._writableState.length;
    }
  });
  function needFinish(state2) {
    return state2.ending && state2.length === 0 && state2.bufferedRequest === null && !state2.finished && !state2.writing;
  }
  function callFinal(stream, state2) {
    stream._final(function(err) {
      state2.pendingcb--;
      if (err) {
        errorOrDestroy(stream, err);
      }
      state2.prefinished = true;
      stream.emit("prefinish");
      finishMaybe(stream, state2);
    });
  }
  function prefinish(stream, state2) {
    if (!state2.prefinished && !state2.finalCalled) {
      if (typeof stream._final === "function" && !state2.destroyed) {
        state2.pendingcb++;
        state2.finalCalled = true;
        process.nextTick(callFinal, stream, state2);
      } else {
        state2.prefinished = true;
        stream.emit("prefinish");
      }
    }
  }
  function finishMaybe(stream, state2) {
    var need = needFinish(state2);
    if (need) {
      prefinish(stream, state2);
      if (state2.pendingcb === 0) {
        state2.finished = true;
        stream.emit("finish");
        if (state2.autoDestroy) {
          var rState = stream._readableState;
          if (!rState || rState.autoDestroy && rState.endEmitted) {
            stream.destroy();
          }
        }
      }
    }
    return need;
  }
  function endWritable(stream, state2, cb) {
    state2.ending = true;
    finishMaybe(stream, state2);
    if (cb) {
      if (state2.finished) process.nextTick(cb);
      else stream.once("finish", cb);
    }
    state2.ended = true;
    stream.writable = false;
  }
  function onCorkedFinish(corkReq, state2, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while (entry) {
      var cb = entry.callback;
      state2.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    state2.corkedRequestsFree.next = corkReq;
  }
  Object.defineProperty(Writable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      if (this._writableState === void 0) {
        return false;
      }
      return this._writableState.destroyed;
    },
    set: function set2(value) {
      if (!this._writableState) {
        return;
      }
      this._writableState.destroyed = value;
    }
  });
  Writable.prototype.destroy = destroyImpl.destroy;
  Writable.prototype._undestroy = destroyImpl.undestroy;
  Writable.prototype._destroy = function(err, cb) {
    cb(err);
  };
  return _stream_writable;
}
var _stream_duplex;
var hasRequired_stream_duplex;
function require_stream_duplex() {
  if (hasRequired_stream_duplex) return _stream_duplex;
  hasRequired_stream_duplex = 1;
  var objectKeys = Object.keys || function(obj) {
    var keys2 = [];
    for (var key in obj) keys2.push(key);
    return keys2;
  };
  _stream_duplex = Duplex;
  var Readable = require_stream_readable();
  var Writable = require_stream_writable();
  requireInherits_browser()(Duplex, Readable);
  {
    var keys = objectKeys(Writable.prototype);
    for (var v2 = 0; v2 < keys.length; v2++) {
      var method = keys[v2];
      if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
    }
  }
  function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
      if (options.readable === false) this.readable = false;
      if (options.writable === false) this.writable = false;
      if (options.allowHalfOpen === false) {
        this.allowHalfOpen = false;
        this.once("end", onend);
      }
    }
  }
  Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get2() {
      return this._writableState.highWaterMark;
    }
  });
  Object.defineProperty(Duplex.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get2() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  Object.defineProperty(Duplex.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get2() {
      return this._writableState.length;
    }
  });
  function onend() {
    if (this._writableState.ended) return;
    process.nextTick(onEndNT, this);
  }
  function onEndNT(self2) {
    self2.end();
  }
  Object.defineProperty(Duplex.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get2() {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return false;
      }
      return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set2(value) {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return;
      }
      this._readableState.destroyed = value;
      this._writableState.destroyed = value;
    }
  });
  return _stream_duplex;
}
var string_decoder = {};
var hasRequiredString_decoder;
function requireString_decoder() {
  if (hasRequiredString_decoder) return string_decoder;
  hasRequiredString_decoder = 1;
  var Buffer2 = requireSafeBuffer().Buffer;
  var isEncoding = Buffer2.isEncoding || function(encoding) {
    encoding = "" + encoding;
    switch (encoding && encoding.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return true;
      default:
        return false;
    }
  };
  function _normalizeEncoding(enc) {
    if (!enc) return "utf8";
    var retried;
    while (true) {
      switch (enc) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return enc;
        default:
          if (retried) return;
          enc = ("" + enc).toLowerCase();
          retried = true;
      }
    }
  }
  function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
    return nenc || enc;
  }
  string_decoder.StringDecoder = StringDecoder;
  function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch (this.encoding) {
      case "utf16le":
        this.text = utf16Text;
        this.end = utf16End;
        nb = 4;
        break;
      case "utf8":
        this.fillLast = utf8FillLast;
        nb = 4;
        break;
      case "base64":
        this.text = base64Text;
        this.end = base64End;
        nb = 3;
        break;
      default:
        this.write = simpleWrite;
        this.end = simpleEnd;
        return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer2.allocUnsafe(nb);
  }
  StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return "";
    var r2;
    var i2;
    if (this.lastNeed) {
      r2 = this.fillLast(buf);
      if (r2 === void 0) return "";
      i2 = this.lastNeed;
      this.lastNeed = 0;
    } else {
      i2 = 0;
    }
    if (i2 < buf.length) return r2 ? r2 + this.text(buf, i2) : this.text(buf, i2);
    return r2 || "";
  };
  StringDecoder.prototype.end = utf8End;
  StringDecoder.prototype.text = utf8Text;
  StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
  };
  function utf8CheckByte(byte) {
    if (byte <= 127) return 0;
    else if (byte >> 5 === 6) return 2;
    else if (byte >> 4 === 14) return 3;
    else if (byte >> 3 === 30) return 4;
    return byte >> 6 === 2 ? -1 : -2;
  }
  function utf8CheckIncomplete(self2, buf, i2) {
    var j2 = buf.length - 1;
    if (j2 < i2) return 0;
    var nb = utf8CheckByte(buf[j2]);
    if (nb >= 0) {
      if (nb > 0) self2.lastNeed = nb - 1;
      return nb;
    }
    if (--j2 < i2 || nb === -2) return 0;
    nb = utf8CheckByte(buf[j2]);
    if (nb >= 0) {
      if (nb > 0) self2.lastNeed = nb - 2;
      return nb;
    }
    if (--j2 < i2 || nb === -2) return 0;
    nb = utf8CheckByte(buf[j2]);
    if (nb >= 0) {
      if (nb > 0) {
        if (nb === 2) nb = 0;
        else self2.lastNeed = nb - 3;
      }
      return nb;
    }
    return 0;
  }
  function utf8CheckExtraBytes(self2, buf, p2) {
    if ((buf[0] & 192) !== 128) {
      self2.lastNeed = 0;
      return "�";
    }
    if (self2.lastNeed > 1 && buf.length > 1) {
      if ((buf[1] & 192) !== 128) {
        self2.lastNeed = 1;
        return "�";
      }
      if (self2.lastNeed > 2 && buf.length > 2) {
        if ((buf[2] & 192) !== 128) {
          self2.lastNeed = 2;
          return "�";
        }
      }
    }
  }
  function utf8FillLast(buf) {
    var p2 = this.lastTotal - this.lastNeed;
    var r2 = utf8CheckExtraBytes(this, buf);
    if (r2 !== void 0) return r2;
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, p2, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p2, 0, buf.length);
    this.lastNeed -= buf.length;
  }
  function utf8Text(buf, i2) {
    var total = utf8CheckIncomplete(this, buf, i2);
    if (!this.lastNeed) return buf.toString("utf8", i2);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString("utf8", i2, end);
  }
  function utf8End(buf) {
    var r2 = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r2 + "�";
    return r2;
  }
  function utf16Text(buf, i2) {
    if ((buf.length - i2) % 2 === 0) {
      var r2 = buf.toString("utf16le", i2);
      if (r2) {
        var c2 = r2.charCodeAt(r2.length - 1);
        if (c2 >= 55296 && c2 <= 56319) {
          this.lastNeed = 2;
          this.lastTotal = 4;
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
          return r2.slice(0, -1);
        }
      }
      return r2;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString("utf16le", i2, buf.length - 1);
  }
  function utf16End(buf) {
    var r2 = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) {
      var end = this.lastTotal - this.lastNeed;
      return r2 + this.lastChar.toString("utf16le", 0, end);
    }
    return r2;
  }
  function base64Text(buf, i2) {
    var n2 = (buf.length - i2) % 3;
    if (n2 === 0) return buf.toString("base64", i2);
    this.lastNeed = 3 - n2;
    this.lastTotal = 3;
    if (n2 === 1) {
      this.lastChar[0] = buf[buf.length - 1];
    } else {
      this.lastChar[0] = buf[buf.length - 2];
      this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString("base64", i2, buf.length - n2);
  }
  function base64End(buf) {
    var r2 = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r2 + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    return r2;
  }
  function simpleWrite(buf) {
    return buf.toString(this.encoding);
  }
  function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : "";
  }
  return string_decoder;
}
var endOfStream;
var hasRequiredEndOfStream;
function requireEndOfStream() {
  if (hasRequiredEndOfStream) return endOfStream;
  hasRequiredEndOfStream = 1;
  var ERR_STREAM_PREMATURE_CLOSE = requireErrorsBrowser().codes.ERR_STREAM_PREMATURE_CLOSE;
  function once(callback) {
    var called = false;
    return function() {
      if (called) return;
      called = true;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      callback.apply(this, args);
    };
  }
  function noop() {
  }
  function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
  }
  function eos(stream, opts, callback) {
    if (typeof opts === "function") return eos(stream, null, opts);
    if (!opts) opts = {};
    callback = once(callback || noop);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish2() {
      if (!stream.writable) onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish2() {
      writable = false;
      writableEnded = true;
      if (!readable) callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend2() {
      readable = false;
      readableEnded = true;
      if (!writable) callback.call(stream);
    };
    var onerror = function onerror2(err) {
      callback.call(stream, err);
    };
    var onclose = function onclose2() {
      var err;
      if (readable && !readableEnded) {
        if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
        return callback.call(stream, err);
      }
      if (writable && !writableEnded) {
        if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
        return callback.call(stream, err);
      }
    };
    var onrequest = function onrequest2() {
      stream.req.on("finish", onfinish);
    };
    if (isRequest(stream)) {
      stream.on("complete", onfinish);
      stream.on("abort", onclose);
      if (stream.req) onrequest();
      else stream.on("request", onrequest);
    } else if (writable && !stream._writableState) {
      stream.on("end", onlegacyfinish);
      stream.on("close", onlegacyfinish);
    }
    stream.on("end", onend);
    stream.on("finish", onfinish);
    if (opts.error !== false) stream.on("error", onerror);
    stream.on("close", onclose);
    return function() {
      stream.removeListener("complete", onfinish);
      stream.removeListener("abort", onclose);
      stream.removeListener("request", onrequest);
      if (stream.req) stream.req.removeListener("finish", onfinish);
      stream.removeListener("end", onlegacyfinish);
      stream.removeListener("close", onlegacyfinish);
      stream.removeListener("finish", onfinish);
      stream.removeListener("end", onend);
      stream.removeListener("error", onerror);
      stream.removeListener("close", onclose);
    };
  }
  endOfStream = eos;
  return endOfStream;
}
var async_iterator;
var hasRequiredAsync_iterator;
function requireAsync_iterator() {
  if (hasRequiredAsync_iterator) return async_iterator;
  hasRequiredAsync_iterator = 1;
  var _Object$setPrototypeO;
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint);
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  var finished = requireEndOfStream();
  var kLastResolve = Symbol("lastResolve");
  var kLastReject = Symbol("lastReject");
  var kError = Symbol("error");
  var kEnded = Symbol("ended");
  var kLastPromise = Symbol("lastPromise");
  var kHandlePromise = Symbol("handlePromise");
  var kStream = Symbol("stream");
  function createIterResult(value, done) {
    return {
      value,
      done
    };
  }
  function readAndResolve(iter) {
    var resolve = iter[kLastResolve];
    if (resolve !== null) {
      var data = iter[kStream].read();
      if (data !== null) {
        iter[kLastPromise] = null;
        iter[kLastResolve] = null;
        iter[kLastReject] = null;
        resolve(createIterResult(data, false));
      }
    }
  }
  function onReadable(iter) {
    process.nextTick(readAndResolve, iter);
  }
  function wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
      lastPromise.then(function() {
        if (iter[kEnded]) {
          resolve(createIterResult(void 0, true));
          return;
        }
        iter[kHandlePromise](resolve, reject);
      }, reject);
    };
  }
  var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
  });
  var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream() {
      return this[kStream];
    },
    next: function next() {
      var _this = this;
      var error2 = this[kError];
      if (error2 !== null) {
        return Promise.reject(error2);
      }
      if (this[kEnded]) {
        return Promise.resolve(createIterResult(void 0, true));
      }
      if (this[kStream].destroyed) {
        return new Promise(function(resolve, reject) {
          process.nextTick(function() {
            if (_this[kError]) {
              reject(_this[kError]);
            } else {
              resolve(createIterResult(void 0, true));
            }
          });
        });
      }
      var lastPromise = this[kLastPromise];
      var promise;
      if (lastPromise) {
        promise = new Promise(wrapForNext(lastPromise, this));
      } else {
        var data = this[kStream].read();
        if (data !== null) {
          return Promise.resolve(createIterResult(data, false));
        }
        promise = new Promise(this[kHandlePromise]);
      }
      this[kLastPromise] = promise;
      return promise;
    }
  }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
  }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    return new Promise(function(resolve, reject) {
      _this2[kStream].destroy(null, function(err) {
        if (err) {
          reject(err);
          return;
        }
        resolve(createIterResult(void 0, true));
      });
    });
  }), _Object$setPrototypeO), AsyncIteratorPrototype);
  var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
    var _Object$create;
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
      value: stream,
      writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kLastReject, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kError, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kEnded, {
      value: stream._readableState.endEmitted,
      writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
      value: function value(resolve, reject) {
        var data = iterator[kStream].read();
        if (data) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult(data, false));
        } else {
          iterator[kLastResolve] = resolve;
          iterator[kLastReject] = reject;
        }
      },
      writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream, function(err) {
      if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var reject = iterator[kLastReject];
        if (reject !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          reject(err);
        }
        iterator[kError] = err;
        return;
      }
      var resolve = iterator[kLastResolve];
      if (resolve !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(void 0, true));
      }
      iterator[kEnded] = true;
    });
    stream.on("readable", onReadable.bind(null, iterator));
    return iterator;
  };
  async_iterator = createReadableStreamAsyncIterator;
  return async_iterator;
}
var fromBrowser;
var hasRequiredFromBrowser;
function requireFromBrowser() {
  if (hasRequiredFromBrowser) return fromBrowser;
  hasRequiredFromBrowser = 1;
  fromBrowser = function() {
    throw new Error("Readable.from is not available in the browser");
  };
  return fromBrowser;
}
var _stream_readable;
var hasRequired_stream_readable;
function require_stream_readable() {
  if (hasRequired_stream_readable) return _stream_readable;
  hasRequired_stream_readable = 1;
  _stream_readable = Readable;
  var Duplex;
  Readable.ReadableState = ReadableState;
  requireEvents().EventEmitter;
  var EElistenerCount = function EElistenerCount2(emitter, type2) {
    return emitter.listeners(type2).length;
  };
  var Stream = requireStreamBrowser();
  var Buffer2 = requireBuffer().Buffer;
  var OurUint8Array = (typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer2.from(chunk);
  }
  function _isUint8Array(obj) {
    return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  var debugUtil = require$$3;
  var debug;
  if (debugUtil && debugUtil.debuglog) {
    debug = debugUtil.debuglog("stream");
  } else {
    debug = function debug2() {
    };
  }
  var BufferList = requireBuffer_list();
  var destroyImpl = requireDestroy();
  var _require = requireState(), getHighWaterMark = _require.getHighWaterMark;
  var _require$codes = requireErrorsBrowser().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
  var StringDecoder;
  var createReadableStreamAsyncIterator;
  var from;
  requireInherits_browser()(Readable, Stream);
  var errorOrDestroy = destroyImpl.errorOrDestroy;
  var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
  function prependListener(emitter, event, fn) {
    if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [fn, emitter._events[event]];
  }
  function ReadableState(options, stream, isDuplex) {
    Duplex = Duplex || require_stream_duplex();
    options = options || {};
    if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
    this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    this.sync = true;
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.destroyed = false;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.awaitDrain = 0;
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
      if (!StringDecoder) StringDecoder = requireString_decoder().StringDecoder;
      this.decoder = new StringDecoder(options.encoding);
      this.encoding = options.encoding;
    }
  }
  function Readable(options) {
    Duplex = Duplex || require_stream_duplex();
    if (!(this instanceof Readable)) return new Readable(options);
    var isDuplex = this instanceof Duplex;
    this._readableState = new ReadableState(options, this, isDuplex);
    this.readable = true;
    if (options) {
      if (typeof options.read === "function") this._read = options.read;
      if (typeof options.destroy === "function") this._destroy = options.destroy;
    }
    Stream.call(this);
  }
  Object.defineProperty(Readable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get2() {
      if (this._readableState === void 0) {
        return false;
      }
      return this._readableState.destroyed;
    },
    set: function set2(value) {
      if (!this._readableState) {
        return;
      }
      this._readableState.destroyed = value;
    }
  });
  Readable.prototype.destroy = destroyImpl.destroy;
  Readable.prototype._undestroy = destroyImpl.undestroy;
  Readable.prototype._destroy = function(err, cb) {
    cb(err);
  };
  Readable.prototype.push = function(chunk, encoding) {
    var state2 = this._readableState;
    var skipChunkCheck;
    if (!state2.objectMode) {
      if (typeof chunk === "string") {
        encoding = encoding || state2.defaultEncoding;
        if (encoding !== state2.encoding) {
          chunk = Buffer2.from(chunk, encoding);
          encoding = "";
        }
        skipChunkCheck = true;
      }
    } else {
      skipChunkCheck = true;
    }
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
  };
  Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
  };
  function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug("readableAddChunk", chunk);
    var state2 = stream._readableState;
    if (chunk === null) {
      state2.reading = false;
      onEofChunk(stream, state2);
    } else {
      var er;
      if (!skipChunkCheck) er = chunkInvalid(state2, chunk);
      if (er) {
        errorOrDestroy(stream, er);
      } else if (state2.objectMode || chunk && chunk.length > 0) {
        if (typeof chunk !== "string" && !state2.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
          chunk = _uint8ArrayToBuffer(chunk);
        }
        if (addToFront) {
          if (state2.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
          else addChunk(stream, state2, chunk, true);
        } else if (state2.ended) {
          errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
        } else if (state2.destroyed) {
          return false;
        } else {
          state2.reading = false;
          if (state2.decoder && !encoding) {
            chunk = state2.decoder.write(chunk);
            if (state2.objectMode || chunk.length !== 0) addChunk(stream, state2, chunk, false);
            else maybeReadMore(stream, state2);
          } else {
            addChunk(stream, state2, chunk, false);
          }
        }
      } else if (!addToFront) {
        state2.reading = false;
        maybeReadMore(stream, state2);
      }
    }
    return !state2.ended && (state2.length < state2.highWaterMark || state2.length === 0);
  }
  function addChunk(stream, state2, chunk, addToFront) {
    if (state2.flowing && state2.length === 0 && !state2.sync) {
      state2.awaitDrain = 0;
      stream.emit("data", chunk);
    } else {
      state2.length += state2.objectMode ? 1 : chunk.length;
      if (addToFront) state2.buffer.unshift(chunk);
      else state2.buffer.push(chunk);
      if (state2.needReadable) emitReadable(stream);
    }
    maybeReadMore(stream, state2);
  }
  function chunkInvalid(state2, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state2.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
    }
    return er;
  }
  Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
  };
  Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder) StringDecoder = requireString_decoder().StringDecoder;
    var decoder = new StringDecoder(enc);
    this._readableState.decoder = decoder;
    this._readableState.encoding = this._readableState.decoder.encoding;
    var p2 = this._readableState.buffer.head;
    var content = "";
    while (p2 !== null) {
      content += decoder.write(p2.data);
      p2 = p2.next;
    }
    this._readableState.buffer.clear();
    if (content !== "") this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
  };
  var MAX_HWM = 1073741824;
  function computeNewHighWaterMark(n2) {
    if (n2 >= MAX_HWM) {
      n2 = MAX_HWM;
    } else {
      n2--;
      n2 |= n2 >>> 1;
      n2 |= n2 >>> 2;
      n2 |= n2 >>> 4;
      n2 |= n2 >>> 8;
      n2 |= n2 >>> 16;
      n2++;
    }
    return n2;
  }
  function howMuchToRead(n2, state2) {
    if (n2 <= 0 || state2.length === 0 && state2.ended) return 0;
    if (state2.objectMode) return 1;
    if (n2 !== n2) {
      if (state2.flowing && state2.length) return state2.buffer.head.data.length;
      else return state2.length;
    }
    if (n2 > state2.highWaterMark) state2.highWaterMark = computeNewHighWaterMark(n2);
    if (n2 <= state2.length) return n2;
    if (!state2.ended) {
      state2.needReadable = true;
      return 0;
    }
    return state2.length;
  }
  Readable.prototype.read = function(n2) {
    debug("read", n2);
    n2 = parseInt(n2, 10);
    var state2 = this._readableState;
    var nOrig = n2;
    if (n2 !== 0) state2.emittedReadable = false;
    if (n2 === 0 && state2.needReadable && ((state2.highWaterMark !== 0 ? state2.length >= state2.highWaterMark : state2.length > 0) || state2.ended)) {
      debug("read: emitReadable", state2.length, state2.ended);
      if (state2.length === 0 && state2.ended) endReadable(this);
      else emitReadable(this);
      return null;
    }
    n2 = howMuchToRead(n2, state2);
    if (n2 === 0 && state2.ended) {
      if (state2.length === 0) endReadable(this);
      return null;
    }
    var doRead = state2.needReadable;
    debug("need readable", doRead);
    if (state2.length === 0 || state2.length - n2 < state2.highWaterMark) {
      doRead = true;
      debug("length less than watermark", doRead);
    }
    if (state2.ended || state2.reading) {
      doRead = false;
      debug("reading or ended", doRead);
    } else if (doRead) {
      debug("do read");
      state2.reading = true;
      state2.sync = true;
      if (state2.length === 0) state2.needReadable = true;
      this._read(state2.highWaterMark);
      state2.sync = false;
      if (!state2.reading) n2 = howMuchToRead(nOrig, state2);
    }
    var ret;
    if (n2 > 0) ret = fromList(n2, state2);
    else ret = null;
    if (ret === null) {
      state2.needReadable = state2.length <= state2.highWaterMark;
      n2 = 0;
    } else {
      state2.length -= n2;
      state2.awaitDrain = 0;
    }
    if (state2.length === 0) {
      if (!state2.ended) state2.needReadable = true;
      if (nOrig !== n2 && state2.ended) endReadable(this);
    }
    if (ret !== null) this.emit("data", ret);
    return ret;
  };
  function onEofChunk(stream, state2) {
    debug("onEofChunk");
    if (state2.ended) return;
    if (state2.decoder) {
      var chunk = state2.decoder.end();
      if (chunk && chunk.length) {
        state2.buffer.push(chunk);
        state2.length += state2.objectMode ? 1 : chunk.length;
      }
    }
    state2.ended = true;
    if (state2.sync) {
      emitReadable(stream);
    } else {
      state2.needReadable = false;
      if (!state2.emittedReadable) {
        state2.emittedReadable = true;
        emitReadable_(stream);
      }
    }
  }
  function emitReadable(stream) {
    var state2 = stream._readableState;
    debug("emitReadable", state2.needReadable, state2.emittedReadable);
    state2.needReadable = false;
    if (!state2.emittedReadable) {
      debug("emitReadable", state2.flowing);
      state2.emittedReadable = true;
      process.nextTick(emitReadable_, stream);
    }
  }
  function emitReadable_(stream) {
    var state2 = stream._readableState;
    debug("emitReadable_", state2.destroyed, state2.length, state2.ended);
    if (!state2.destroyed && (state2.length || state2.ended)) {
      stream.emit("readable");
      state2.emittedReadable = false;
    }
    state2.needReadable = !state2.flowing && !state2.ended && state2.length <= state2.highWaterMark;
    flow(stream);
  }
  function maybeReadMore(stream, state2) {
    if (!state2.readingMore) {
      state2.readingMore = true;
      process.nextTick(maybeReadMore_, stream, state2);
    }
  }
  function maybeReadMore_(stream, state2) {
    while (!state2.reading && !state2.ended && (state2.length < state2.highWaterMark || state2.flowing && state2.length === 0)) {
      var len = state2.length;
      debug("maybeReadMore read 0");
      stream.read(0);
      if (len === state2.length)
        break;
    }
    state2.readingMore = false;
  }
  Readable.prototype._read = function(n2) {
    errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
  };
  Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state2 = this._readableState;
    switch (state2.pipesCount) {
      case 0:
        state2.pipes = dest;
        break;
      case 1:
        state2.pipes = [state2.pipes, dest];
        break;
      default:
        state2.pipes.push(dest);
        break;
    }
    state2.pipesCount += 1;
    debug("pipe count=%d opts=%j", state2.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state2.endEmitted) process.nextTick(endFn);
    else src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
      debug("onunpipe");
      if (readable === src) {
        if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
          unpipeInfo.hasUnpiped = true;
          cleanup();
        }
      }
    }
    function onend() {
      debug("onend");
      dest.end();
    }
    var ondrain = pipeOnDrain(src);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
      debug("cleanup");
      dest.removeListener("close", onclose);
      dest.removeListener("finish", onfinish);
      dest.removeListener("drain", ondrain);
      dest.removeListener("error", onerror);
      dest.removeListener("unpipe", onunpipe);
      src.removeListener("end", onend);
      src.removeListener("end", unpipe);
      src.removeListener("data", ondata);
      cleanedUp = true;
      if (state2.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    src.on("data", ondata);
    function ondata(chunk) {
      debug("ondata");
      var ret = dest.write(chunk);
      debug("dest.write", ret);
      if (ret === false) {
        if ((state2.pipesCount === 1 && state2.pipes === dest || state2.pipesCount > 1 && indexOf(state2.pipes, dest) !== -1) && !cleanedUp) {
          debug("false write response, pause", state2.awaitDrain);
          state2.awaitDrain++;
        }
        src.pause();
      }
    }
    function onerror(er) {
      debug("onerror", er);
      unpipe();
      dest.removeListener("error", onerror);
      if (EElistenerCount(dest, "error") === 0) errorOrDestroy(dest, er);
    }
    prependListener(dest, "error", onerror);
    function onclose() {
      dest.removeListener("finish", onfinish);
      unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
      debug("onfinish");
      dest.removeListener("close", onclose);
      unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
      debug("unpipe");
      src.unpipe(dest);
    }
    dest.emit("pipe", src);
    if (!state2.flowing) {
      debug("pipe resume");
      src.resume();
    }
    return dest;
  };
  function pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
      var state2 = src._readableState;
      debug("pipeOnDrain", state2.awaitDrain);
      if (state2.awaitDrain) state2.awaitDrain--;
      if (state2.awaitDrain === 0 && EElistenerCount(src, "data")) {
        state2.flowing = true;
        flow(src);
      }
    };
  }
  Readable.prototype.unpipe = function(dest) {
    var state2 = this._readableState;
    var unpipeInfo = {
      hasUnpiped: false
    };
    if (state2.pipesCount === 0) return this;
    if (state2.pipesCount === 1) {
      if (dest && dest !== state2.pipes) return this;
      if (!dest) dest = state2.pipes;
      state2.pipes = null;
      state2.pipesCount = 0;
      state2.flowing = false;
      if (dest) dest.emit("unpipe", this, unpipeInfo);
      return this;
    }
    if (!dest) {
      var dests = state2.pipes;
      var len = state2.pipesCount;
      state2.pipes = null;
      state2.pipesCount = 0;
      state2.flowing = false;
      for (var i2 = 0; i2 < len; i2++) dests[i2].emit("unpipe", this, {
        hasUnpiped: false
      });
      return this;
    }
    var index2 = indexOf(state2.pipes, dest);
    if (index2 === -1) return this;
    state2.pipes.splice(index2, 1);
    state2.pipesCount -= 1;
    if (state2.pipesCount === 1) state2.pipes = state2.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
  };
  Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    var state2 = this._readableState;
    if (ev === "data") {
      state2.readableListening = this.listenerCount("readable") > 0;
      if (state2.flowing !== false) this.resume();
    } else if (ev === "readable") {
      if (!state2.endEmitted && !state2.readableListening) {
        state2.readableListening = state2.needReadable = true;
        state2.flowing = false;
        state2.emittedReadable = false;
        debug("on readable", state2.length, state2.reading);
        if (state2.length) {
          emitReadable(this);
        } else if (!state2.reading) {
          process.nextTick(nReadingNextTick, this);
        }
      }
    }
    return res;
  };
  Readable.prototype.addListener = Readable.prototype.on;
  Readable.prototype.removeListener = function(ev, fn) {
    var res = Stream.prototype.removeListener.call(this, ev, fn);
    if (ev === "readable") {
      process.nextTick(updateReadableListening, this);
    }
    return res;
  };
  Readable.prototype.removeAllListeners = function(ev) {
    var res = Stream.prototype.removeAllListeners.apply(this, arguments);
    if (ev === "readable" || ev === void 0) {
      process.nextTick(updateReadableListening, this);
    }
    return res;
  };
  function updateReadableListening(self2) {
    var state2 = self2._readableState;
    state2.readableListening = self2.listenerCount("readable") > 0;
    if (state2.resumeScheduled && !state2.paused) {
      state2.flowing = true;
    } else if (self2.listenerCount("data") > 0) {
      self2.resume();
    }
  }
  function nReadingNextTick(self2) {
    debug("readable nexttick read 0");
    self2.read(0);
  }
  Readable.prototype.resume = function() {
    var state2 = this._readableState;
    if (!state2.flowing) {
      debug("resume");
      state2.flowing = !state2.readableListening;
      resume(this, state2);
    }
    state2.paused = false;
    return this;
  };
  function resume(stream, state2) {
    if (!state2.resumeScheduled) {
      state2.resumeScheduled = true;
      process.nextTick(resume_, stream, state2);
    }
  }
  function resume_(stream, state2) {
    debug("resume", state2.reading);
    if (!state2.reading) {
      stream.read(0);
    }
    state2.resumeScheduled = false;
    stream.emit("resume");
    flow(stream);
    if (state2.flowing && !state2.reading) stream.read(0);
  }
  Readable.prototype.pause = function() {
    debug("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
      debug("pause");
      this._readableState.flowing = false;
      this.emit("pause");
    }
    this._readableState.paused = true;
    return this;
  };
  function flow(stream) {
    var state2 = stream._readableState;
    debug("flow", state2.flowing);
    while (state2.flowing && stream.read() !== null) ;
  }
  Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state2 = this._readableState;
    var paused = false;
    stream.on("end", function() {
      debug("wrapped end");
      if (state2.decoder && !state2.ended) {
        var chunk = state2.decoder.end();
        if (chunk && chunk.length) _this.push(chunk);
      }
      _this.push(null);
    });
    stream.on("data", function(chunk) {
      debug("wrapped data");
      if (state2.decoder) chunk = state2.decoder.write(chunk);
      if (state2.objectMode && (chunk === null || chunk === void 0)) return;
      else if (!state2.objectMode && (!chunk || !chunk.length)) return;
      var ret = _this.push(chunk);
      if (!ret) {
        paused = true;
        stream.pause();
      }
    });
    for (var i2 in stream) {
      if (this[i2] === void 0 && typeof stream[i2] === "function") {
        this[i2] = /* @__PURE__ */ (function methodWrap(method) {
          return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
          };
        })(i2);
      }
    }
    for (var n2 = 0; n2 < kProxyEvents.length; n2++) {
      stream.on(kProxyEvents[n2], this.emit.bind(this, kProxyEvents[n2]));
    }
    this._read = function(n22) {
      debug("wrapped _read", n22);
      if (paused) {
        paused = false;
        stream.resume();
      }
    };
    return this;
  };
  if (typeof Symbol === "function") {
    Readable.prototype[Symbol.asyncIterator] = function() {
      if (createReadableStreamAsyncIterator === void 0) {
        createReadableStreamAsyncIterator = requireAsync_iterator();
      }
      return createReadableStreamAsyncIterator(this);
    };
  }
  Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get2() {
      return this._readableState.highWaterMark;
    }
  });
  Object.defineProperty(Readable.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get3() {
      return this._readableState && this._readableState.buffer;
    }
  });
  Object.defineProperty(Readable.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._readableState.flowing;
    },
    set: function set2(state2) {
      if (this._readableState) {
        this._readableState.flowing = state2;
      }
    }
  });
  Readable._fromList = fromList;
  Object.defineProperty(Readable.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get5() {
      return this._readableState.length;
    }
  });
  function fromList(n2, state2) {
    if (state2.length === 0) return null;
    var ret;
    if (state2.objectMode) ret = state2.buffer.shift();
    else if (!n2 || n2 >= state2.length) {
      if (state2.decoder) ret = state2.buffer.join("");
      else if (state2.buffer.length === 1) ret = state2.buffer.first();
      else ret = state2.buffer.concat(state2.length);
      state2.buffer.clear();
    } else {
      ret = state2.buffer.consume(n2, state2.decoder);
    }
    return ret;
  }
  function endReadable(stream) {
    var state2 = stream._readableState;
    debug("endReadable", state2.endEmitted);
    if (!state2.endEmitted) {
      state2.ended = true;
      process.nextTick(endReadableNT, state2, stream);
    }
  }
  function endReadableNT(state2, stream) {
    debug("endReadableNT", state2.endEmitted, state2.length);
    if (!state2.endEmitted && state2.length === 0) {
      state2.endEmitted = true;
      stream.readable = false;
      stream.emit("end");
      if (state2.autoDestroy) {
        var wState = stream._writableState;
        if (!wState || wState.autoDestroy && wState.finished) {
          stream.destroy();
        }
      }
    }
  }
  if (typeof Symbol === "function") {
    Readable.from = function(iterable, opts) {
      if (from === void 0) {
        from = requireFromBrowser();
      }
      return from(Readable, iterable, opts);
    };
  }
  function indexOf(xs, x2) {
    for (var i2 = 0, l2 = xs.length; i2 < l2; i2++) {
      if (xs[i2] === x2) return i2;
    }
    return -1;
  }
  return _stream_readable;
}
var _stream_transform;
var hasRequired_stream_transform;
function require_stream_transform() {
  if (hasRequired_stream_transform) return _stream_transform;
  hasRequired_stream_transform = 1;
  _stream_transform = Transform;
  var _require$codes = requireErrorsBrowser().codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
  var Duplex = require_stream_duplex();
  requireInherits_browser()(Transform, Duplex);
  function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) {
      return this.emit("error", new ERR_MULTIPLE_CALLBACK());
    }
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null)
      this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
      this._read(rs.highWaterMark);
    }
  }
  function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
      afterTransform: afterTransform.bind(this),
      needTransform: false,
      transforming: false,
      writecb: null,
      writechunk: null,
      writeencoding: null
    };
    this._readableState.needReadable = true;
    this._readableState.sync = false;
    if (options) {
      if (typeof options.transform === "function") this._transform = options.transform;
      if (typeof options.flush === "function") this._flush = options.flush;
    }
    this.on("prefinish", prefinish);
  }
  function prefinish() {
    var _this = this;
    if (typeof this._flush === "function" && !this._readableState.destroyed) {
      this._flush(function(er, data) {
        done(_this, er, data);
      });
    } else {
      done(this, null, null);
    }
  }
  Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
  };
  Transform.prototype._transform = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
  };
  Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
      var rs = this._readableState;
      if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
  };
  Transform.prototype._read = function(n2) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
      ts.transforming = true;
      this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
      ts.needTransform = true;
    }
  };
  Transform.prototype._destroy = function(err, cb) {
    Duplex.prototype._destroy.call(this, err, function(err2) {
      cb(err2);
    });
  };
  function done(stream, er, data) {
    if (er) return stream.emit("error", er);
    if (data != null)
      stream.push(data);
    if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
  }
  return _stream_transform;
}
var _stream_passthrough;
var hasRequired_stream_passthrough;
function require_stream_passthrough() {
  if (hasRequired_stream_passthrough) return _stream_passthrough;
  hasRequired_stream_passthrough = 1;
  _stream_passthrough = PassThrough;
  var Transform = require_stream_transform();
  requireInherits_browser()(PassThrough, Transform);
  function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
  }
  PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
  };
  return _stream_passthrough;
}
var pipeline_1;
var hasRequiredPipeline;
function requirePipeline() {
  if (hasRequiredPipeline) return pipeline_1;
  hasRequiredPipeline = 1;
  var eos;
  function once(callback) {
    var called = false;
    return function() {
      if (called) return;
      called = true;
      callback.apply(void 0, arguments);
    };
  }
  var _require$codes = requireErrorsBrowser().codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
  function noop(err) {
    if (err) throw err;
  }
  function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
  }
  function destroyer(stream, reading, writing, callback) {
    callback = once(callback);
    var closed = false;
    stream.on("close", function() {
      closed = true;
    });
    if (eos === void 0) eos = requireEndOfStream();
    eos(stream, {
      readable: reading,
      writable: writing
    }, function(err) {
      if (err) return callback(err);
      closed = true;
      callback();
    });
    var destroyed = false;
    return function(err) {
      if (closed) return;
      if (destroyed) return;
      destroyed = true;
      if (isRequest(stream)) return stream.abort();
      if (typeof stream.destroy === "function") return stream.destroy();
      callback(err || new ERR_STREAM_DESTROYED("pipe"));
    };
  }
  function call(fn) {
    fn();
  }
  function pipe(from, to) {
    return from.pipe(to);
  }
  function popCallback(streams) {
    if (!streams.length) return noop;
    if (typeof streams[streams.length - 1] !== "function") return noop;
    return streams.pop();
  }
  function pipeline() {
    for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
      streams[_key] = arguments[_key];
    }
    var callback = popCallback(streams);
    if (Array.isArray(streams[0])) streams = streams[0];
    if (streams.length < 2) {
      throw new ERR_MISSING_ARGS("streams");
    }
    var error2;
    var destroys = streams.map(function(stream, i2) {
      var reading = i2 < streams.length - 1;
      var writing = i2 > 0;
      return destroyer(stream, reading, writing, function(err) {
        if (!error2) error2 = err;
        if (err) destroys.forEach(call);
        if (reading) return;
        destroys.forEach(call);
        callback(error2);
      });
    });
    return streams.reduce(pipe);
  }
  pipeline_1 = pipeline;
  return pipeline_1;
}
var hasRequiredReadableBrowser;
function requireReadableBrowser() {
  if (hasRequiredReadableBrowser) return readableBrowser.exports;
  hasRequiredReadableBrowser = 1;
  (function(module, exports) {
    exports = module.exports = require_stream_readable();
    exports.Stream = exports;
    exports.Readable = exports;
    exports.Writable = require_stream_writable();
    exports.Duplex = require_stream_duplex();
    exports.Transform = require_stream_transform();
    exports.PassThrough = require_stream_passthrough();
    exports.finished = requireEndOfStream();
    exports.pipeline = requirePipeline();
  })(readableBrowser, readableBrowser.exports);
  return readableBrowser.exports;
}
var keccak$1;
var hasRequiredKeccak$1;
function requireKeccak$1() {
  if (hasRequiredKeccak$1) return keccak$1;
  hasRequiredKeccak$1 = 1;
  const { Transform } = requireReadableBrowser();
  keccak$1 = (KeccakState) => class Keccak extends Transform {
    constructor(rate, capacity, delimitedSuffix, hashBitLength, options) {
      super(options);
      this._rate = rate;
      this._capacity = capacity;
      this._delimitedSuffix = delimitedSuffix;
      this._hashBitLength = hashBitLength;
      this._options = options;
      this._state = new KeccakState();
      this._state.initialize(rate, capacity);
      this._finalized = false;
    }
    _transform(chunk, encoding, callback) {
      let error2 = null;
      try {
        this.update(chunk, encoding);
      } catch (err) {
        error2 = err;
      }
      callback(error2);
    }
    _flush(callback) {
      let error2 = null;
      try {
        this.push(this.digest());
      } catch (err) {
        error2 = err;
      }
      callback(error2);
    }
    update(data, encoding) {
      if (!Buffer.isBuffer(data) && typeof data !== "string") throw new TypeError("Data must be a string or a buffer");
      if (this._finalized) throw new Error("Digest already called");
      if (!Buffer.isBuffer(data)) data = Buffer.from(data, encoding);
      this._state.absorb(data);
      return this;
    }
    digest(encoding) {
      if (this._finalized) throw new Error("Digest already called");
      this._finalized = true;
      if (this._delimitedSuffix) this._state.absorbLastFewBits(this._delimitedSuffix);
      let digest = this._state.squeeze(this._hashBitLength / 8);
      if (encoding !== void 0) digest = digest.toString(encoding);
      this._resetState();
      return digest;
    }
    // remove result from memory
    _resetState() {
      this._state.initialize(this._rate, this._capacity);
      return this;
    }
    // because sometimes we need hash right now and little later
    _clone() {
      const clone = new Keccak(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
      this._state.copy(clone._state);
      clone._finalized = this._finalized;
      return clone;
    }
  };
  return keccak$1;
}
var shake;
var hasRequiredShake;
function requireShake() {
  if (hasRequiredShake) return shake;
  hasRequiredShake = 1;
  const { Transform } = requireReadableBrowser();
  shake = (KeccakState) => class Shake extends Transform {
    constructor(rate, capacity, delimitedSuffix, options) {
      super(options);
      this._rate = rate;
      this._capacity = capacity;
      this._delimitedSuffix = delimitedSuffix;
      this._options = options;
      this._state = new KeccakState();
      this._state.initialize(rate, capacity);
      this._finalized = false;
    }
    _transform(chunk, encoding, callback) {
      let error2 = null;
      try {
        this.update(chunk, encoding);
      } catch (err) {
        error2 = err;
      }
      callback(error2);
    }
    _flush() {
    }
    _read(size2) {
      this.push(this.squeeze(size2));
    }
    update(data, encoding) {
      if (!Buffer.isBuffer(data) && typeof data !== "string") throw new TypeError("Data must be a string or a buffer");
      if (this._finalized) throw new Error("Squeeze already called");
      if (!Buffer.isBuffer(data)) data = Buffer.from(data, encoding);
      this._state.absorb(data);
      return this;
    }
    squeeze(dataByteLength, encoding) {
      if (!this._finalized) {
        this._finalized = true;
        this._state.absorbLastFewBits(this._delimitedSuffix);
      }
      let data = this._state.squeeze(dataByteLength);
      if (encoding !== void 0) data = data.toString(encoding);
      return data;
    }
    _resetState() {
      this._state.initialize(this._rate, this._capacity);
      return this;
    }
    _clone() {
      const clone = new Shake(this._rate, this._capacity, this._delimitedSuffix, this._options);
      this._state.copy(clone._state);
      clone._finalized = this._finalized;
      return clone;
    }
  };
  return shake;
}
var api;
var hasRequiredApi;
function requireApi() {
  if (hasRequiredApi) return api;
  hasRequiredApi = 1;
  const createKeccak = requireKeccak$1();
  const createShake = requireShake();
  api = function(KeccakState) {
    const Keccak = createKeccak(KeccakState);
    const Shake = createShake(KeccakState);
    return function(algorithm, options) {
      const hash2 = typeof algorithm === "string" ? algorithm.toLowerCase() : algorithm;
      switch (hash2) {
        case "keccak224":
          return new Keccak(1152, 448, null, 224, options);
        case "keccak256":
          return new Keccak(1088, 512, null, 256, options);
        case "keccak384":
          return new Keccak(832, 768, null, 384, options);
        case "keccak512":
          return new Keccak(576, 1024, null, 512, options);
        case "sha3-224":
          return new Keccak(1152, 448, 6, 224, options);
        case "sha3-256":
          return new Keccak(1088, 512, 6, 256, options);
        case "sha3-384":
          return new Keccak(832, 768, 6, 384, options);
        case "sha3-512":
          return new Keccak(576, 1024, 6, 512, options);
        case "shake128":
          return new Shake(1344, 256, 31, options);
        case "shake256":
          return new Shake(1088, 512, 31, options);
        default:
          throw new Error("Invald algorithm: " + algorithm);
      }
    };
  };
  return api;
}
var keccakStateUnroll = {};
var hasRequiredKeccakStateUnroll;
function requireKeccakStateUnroll() {
  if (hasRequiredKeccakStateUnroll) return keccakStateUnroll;
  hasRequiredKeccakStateUnroll = 1;
  const P1600_ROUND_CONSTANTS = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
  keccakStateUnroll.p1600 = function(s2) {
    for (let round2 = 0; round2 < 24; ++round2) {
      const lo0 = s2[0] ^ s2[10] ^ s2[20] ^ s2[30] ^ s2[40];
      const hi0 = s2[1] ^ s2[11] ^ s2[21] ^ s2[31] ^ s2[41];
      const lo1 = s2[2] ^ s2[12] ^ s2[22] ^ s2[32] ^ s2[42];
      const hi1 = s2[3] ^ s2[13] ^ s2[23] ^ s2[33] ^ s2[43];
      const lo2 = s2[4] ^ s2[14] ^ s2[24] ^ s2[34] ^ s2[44];
      const hi2 = s2[5] ^ s2[15] ^ s2[25] ^ s2[35] ^ s2[45];
      const lo3 = s2[6] ^ s2[16] ^ s2[26] ^ s2[36] ^ s2[46];
      const hi3 = s2[7] ^ s2[17] ^ s2[27] ^ s2[37] ^ s2[47];
      const lo4 = s2[8] ^ s2[18] ^ s2[28] ^ s2[38] ^ s2[48];
      const hi4 = s2[9] ^ s2[19] ^ s2[29] ^ s2[39] ^ s2[49];
      let lo = lo4 ^ (lo1 << 1 | hi1 >>> 31);
      let hi = hi4 ^ (hi1 << 1 | lo1 >>> 31);
      const t1slo0 = s2[0] ^ lo;
      const t1shi0 = s2[1] ^ hi;
      const t1slo5 = s2[10] ^ lo;
      const t1shi5 = s2[11] ^ hi;
      const t1slo10 = s2[20] ^ lo;
      const t1shi10 = s2[21] ^ hi;
      const t1slo15 = s2[30] ^ lo;
      const t1shi15 = s2[31] ^ hi;
      const t1slo20 = s2[40] ^ lo;
      const t1shi20 = s2[41] ^ hi;
      lo = lo0 ^ (lo2 << 1 | hi2 >>> 31);
      hi = hi0 ^ (hi2 << 1 | lo2 >>> 31);
      const t1slo1 = s2[2] ^ lo;
      const t1shi1 = s2[3] ^ hi;
      const t1slo6 = s2[12] ^ lo;
      const t1shi6 = s2[13] ^ hi;
      const t1slo11 = s2[22] ^ lo;
      const t1shi11 = s2[23] ^ hi;
      const t1slo16 = s2[32] ^ lo;
      const t1shi16 = s2[33] ^ hi;
      const t1slo21 = s2[42] ^ lo;
      const t1shi21 = s2[43] ^ hi;
      lo = lo1 ^ (lo3 << 1 | hi3 >>> 31);
      hi = hi1 ^ (hi3 << 1 | lo3 >>> 31);
      const t1slo2 = s2[4] ^ lo;
      const t1shi2 = s2[5] ^ hi;
      const t1slo7 = s2[14] ^ lo;
      const t1shi7 = s2[15] ^ hi;
      const t1slo12 = s2[24] ^ lo;
      const t1shi12 = s2[25] ^ hi;
      const t1slo17 = s2[34] ^ lo;
      const t1shi17 = s2[35] ^ hi;
      const t1slo22 = s2[44] ^ lo;
      const t1shi22 = s2[45] ^ hi;
      lo = lo2 ^ (lo4 << 1 | hi4 >>> 31);
      hi = hi2 ^ (hi4 << 1 | lo4 >>> 31);
      const t1slo3 = s2[6] ^ lo;
      const t1shi3 = s2[7] ^ hi;
      const t1slo8 = s2[16] ^ lo;
      const t1shi8 = s2[17] ^ hi;
      const t1slo13 = s2[26] ^ lo;
      const t1shi13 = s2[27] ^ hi;
      const t1slo18 = s2[36] ^ lo;
      const t1shi18 = s2[37] ^ hi;
      const t1slo23 = s2[46] ^ lo;
      const t1shi23 = s2[47] ^ hi;
      lo = lo3 ^ (lo0 << 1 | hi0 >>> 31);
      hi = hi3 ^ (hi0 << 1 | lo0 >>> 31);
      const t1slo4 = s2[8] ^ lo;
      const t1shi4 = s2[9] ^ hi;
      const t1slo9 = s2[18] ^ lo;
      const t1shi9 = s2[19] ^ hi;
      const t1slo14 = s2[28] ^ lo;
      const t1shi14 = s2[29] ^ hi;
      const t1slo19 = s2[38] ^ lo;
      const t1shi19 = s2[39] ^ hi;
      const t1slo24 = s2[48] ^ lo;
      const t1shi24 = s2[49] ^ hi;
      const t2slo0 = t1slo0;
      const t2shi0 = t1shi0;
      const t2slo16 = t1shi5 << 4 | t1slo5 >>> 28;
      const t2shi16 = t1slo5 << 4 | t1shi5 >>> 28;
      const t2slo7 = t1slo10 << 3 | t1shi10 >>> 29;
      const t2shi7 = t1shi10 << 3 | t1slo10 >>> 29;
      const t2slo23 = t1shi15 << 9 | t1slo15 >>> 23;
      const t2shi23 = t1slo15 << 9 | t1shi15 >>> 23;
      const t2slo14 = t1slo20 << 18 | t1shi20 >>> 14;
      const t2shi14 = t1shi20 << 18 | t1slo20 >>> 14;
      const t2slo10 = t1slo1 << 1 | t1shi1 >>> 31;
      const t2shi10 = t1shi1 << 1 | t1slo1 >>> 31;
      const t2slo1 = t1shi6 << 12 | t1slo6 >>> 20;
      const t2shi1 = t1slo6 << 12 | t1shi6 >>> 20;
      const t2slo17 = t1slo11 << 10 | t1shi11 >>> 22;
      const t2shi17 = t1shi11 << 10 | t1slo11 >>> 22;
      const t2slo8 = t1shi16 << 13 | t1slo16 >>> 19;
      const t2shi8 = t1slo16 << 13 | t1shi16 >>> 19;
      const t2slo24 = t1slo21 << 2 | t1shi21 >>> 30;
      const t2shi24 = t1shi21 << 2 | t1slo21 >>> 30;
      const t2slo20 = t1shi2 << 30 | t1slo2 >>> 2;
      const t2shi20 = t1slo2 << 30 | t1shi2 >>> 2;
      const t2slo11 = t1slo7 << 6 | t1shi7 >>> 26;
      const t2shi11 = t1shi7 << 6 | t1slo7 >>> 26;
      const t2slo2 = t1shi12 << 11 | t1slo12 >>> 21;
      const t2shi2 = t1slo12 << 11 | t1shi12 >>> 21;
      const t2slo18 = t1slo17 << 15 | t1shi17 >>> 17;
      const t2shi18 = t1shi17 << 15 | t1slo17 >>> 17;
      const t2slo9 = t1shi22 << 29 | t1slo22 >>> 3;
      const t2shi9 = t1slo22 << 29 | t1shi22 >>> 3;
      const t2slo5 = t1slo3 << 28 | t1shi3 >>> 4;
      const t2shi5 = t1shi3 << 28 | t1slo3 >>> 4;
      const t2slo21 = t1shi8 << 23 | t1slo8 >>> 9;
      const t2shi21 = t1slo8 << 23 | t1shi8 >>> 9;
      const t2slo12 = t1slo13 << 25 | t1shi13 >>> 7;
      const t2shi12 = t1shi13 << 25 | t1slo13 >>> 7;
      const t2slo3 = t1slo18 << 21 | t1shi18 >>> 11;
      const t2shi3 = t1shi18 << 21 | t1slo18 >>> 11;
      const t2slo19 = t1shi23 << 24 | t1slo23 >>> 8;
      const t2shi19 = t1slo23 << 24 | t1shi23 >>> 8;
      const t2slo15 = t1slo4 << 27 | t1shi4 >>> 5;
      const t2shi15 = t1shi4 << 27 | t1slo4 >>> 5;
      const t2slo6 = t1slo9 << 20 | t1shi9 >>> 12;
      const t2shi6 = t1shi9 << 20 | t1slo9 >>> 12;
      const t2slo22 = t1shi14 << 7 | t1slo14 >>> 25;
      const t2shi22 = t1slo14 << 7 | t1shi14 >>> 25;
      const t2slo13 = t1slo19 << 8 | t1shi19 >>> 24;
      const t2shi13 = t1shi19 << 8 | t1slo19 >>> 24;
      const t2slo4 = t1slo24 << 14 | t1shi24 >>> 18;
      const t2shi4 = t1shi24 << 14 | t1slo24 >>> 18;
      s2[0] = t2slo0 ^ ~t2slo1 & t2slo2;
      s2[1] = t2shi0 ^ ~t2shi1 & t2shi2;
      s2[10] = t2slo5 ^ ~t2slo6 & t2slo7;
      s2[11] = t2shi5 ^ ~t2shi6 & t2shi7;
      s2[20] = t2slo10 ^ ~t2slo11 & t2slo12;
      s2[21] = t2shi10 ^ ~t2shi11 & t2shi12;
      s2[30] = t2slo15 ^ ~t2slo16 & t2slo17;
      s2[31] = t2shi15 ^ ~t2shi16 & t2shi17;
      s2[40] = t2slo20 ^ ~t2slo21 & t2slo22;
      s2[41] = t2shi20 ^ ~t2shi21 & t2shi22;
      s2[2] = t2slo1 ^ ~t2slo2 & t2slo3;
      s2[3] = t2shi1 ^ ~t2shi2 & t2shi3;
      s2[12] = t2slo6 ^ ~t2slo7 & t2slo8;
      s2[13] = t2shi6 ^ ~t2shi7 & t2shi8;
      s2[22] = t2slo11 ^ ~t2slo12 & t2slo13;
      s2[23] = t2shi11 ^ ~t2shi12 & t2shi13;
      s2[32] = t2slo16 ^ ~t2slo17 & t2slo18;
      s2[33] = t2shi16 ^ ~t2shi17 & t2shi18;
      s2[42] = t2slo21 ^ ~t2slo22 & t2slo23;
      s2[43] = t2shi21 ^ ~t2shi22 & t2shi23;
      s2[4] = t2slo2 ^ ~t2slo3 & t2slo4;
      s2[5] = t2shi2 ^ ~t2shi3 & t2shi4;
      s2[14] = t2slo7 ^ ~t2slo8 & t2slo9;
      s2[15] = t2shi7 ^ ~t2shi8 & t2shi9;
      s2[24] = t2slo12 ^ ~t2slo13 & t2slo14;
      s2[25] = t2shi12 ^ ~t2shi13 & t2shi14;
      s2[34] = t2slo17 ^ ~t2slo18 & t2slo19;
      s2[35] = t2shi17 ^ ~t2shi18 & t2shi19;
      s2[44] = t2slo22 ^ ~t2slo23 & t2slo24;
      s2[45] = t2shi22 ^ ~t2shi23 & t2shi24;
      s2[6] = t2slo3 ^ ~t2slo4 & t2slo0;
      s2[7] = t2shi3 ^ ~t2shi4 & t2shi0;
      s2[16] = t2slo8 ^ ~t2slo9 & t2slo5;
      s2[17] = t2shi8 ^ ~t2shi9 & t2shi5;
      s2[26] = t2slo13 ^ ~t2slo14 & t2slo10;
      s2[27] = t2shi13 ^ ~t2shi14 & t2shi10;
      s2[36] = t2slo18 ^ ~t2slo19 & t2slo15;
      s2[37] = t2shi18 ^ ~t2shi19 & t2shi15;
      s2[46] = t2slo23 ^ ~t2slo24 & t2slo20;
      s2[47] = t2shi23 ^ ~t2shi24 & t2shi20;
      s2[8] = t2slo4 ^ ~t2slo0 & t2slo1;
      s2[9] = t2shi4 ^ ~t2shi0 & t2shi1;
      s2[18] = t2slo9 ^ ~t2slo5 & t2slo6;
      s2[19] = t2shi9 ^ ~t2shi5 & t2shi6;
      s2[28] = t2slo14 ^ ~t2slo10 & t2slo11;
      s2[29] = t2shi14 ^ ~t2shi10 & t2shi11;
      s2[38] = t2slo19 ^ ~t2slo15 & t2slo16;
      s2[39] = t2shi19 ^ ~t2shi15 & t2shi16;
      s2[48] = t2slo24 ^ ~t2slo20 & t2slo21;
      s2[49] = t2shi24 ^ ~t2shi20 & t2shi21;
      s2[0] ^= P1600_ROUND_CONSTANTS[round2 * 2];
      s2[1] ^= P1600_ROUND_CONSTANTS[round2 * 2 + 1];
    }
  };
  return keccakStateUnroll;
}
var keccak;
var hasRequiredKeccak;
function requireKeccak() {
  if (hasRequiredKeccak) return keccak;
  hasRequiredKeccak = 1;
  const keccakState = requireKeccakStateUnroll();
  function Keccak() {
    this.state = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    this.blockSize = null;
    this.count = 0;
    this.squeezing = false;
  }
  Keccak.prototype.initialize = function(rate, capacity) {
    for (let i2 = 0; i2 < 50; ++i2) this.state[i2] = 0;
    this.blockSize = rate / 8;
    this.count = 0;
    this.squeezing = false;
  };
  Keccak.prototype.absorb = function(data) {
    for (let i2 = 0; i2 < data.length; ++i2) {
      this.state[~~(this.count / 4)] ^= data[i2] << 8 * (this.count % 4);
      this.count += 1;
      if (this.count === this.blockSize) {
        keccakState.p1600(this.state);
        this.count = 0;
      }
    }
  };
  Keccak.prototype.absorbLastFewBits = function(bits) {
    this.state[~~(this.count / 4)] ^= bits << 8 * (this.count % 4);
    if ((bits & 128) !== 0 && this.count === this.blockSize - 1) keccakState.p1600(this.state);
    this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4);
    keccakState.p1600(this.state);
    this.count = 0;
    this.squeezing = true;
  };
  Keccak.prototype.squeeze = function(length) {
    if (!this.squeezing) this.absorbLastFewBits(1);
    const output = Buffer.alloc(length);
    for (let i2 = 0; i2 < length; ++i2) {
      output[i2] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255;
      this.count += 1;
      if (this.count === this.blockSize) {
        keccakState.p1600(this.state);
        this.count = 0;
      }
    }
    return output;
  };
  Keccak.prototype.copy = function(dest) {
    for (let i2 = 0; i2 < 50; ++i2) dest.state[i2] = this.state[i2];
    dest.blockSize = this.blockSize;
    dest.count = this.count;
    dest.squeezing = this.squeezing;
  };
  keccak = Keccak;
  return keccak;
}
var js;
var hasRequiredJs;
function requireJs() {
  if (hasRequiredJs) return js;
  hasRequiredJs = 1;
  js = requireApi()(requireKeccak());
  return js;
}
var util;
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return util;
  hasRequiredUtil = 1;
  const createKeccakHash = requireJs();
  const BN = requireBn();
  function zeros(bytes2) {
    return Buffer.allocUnsafe(bytes2).fill(0);
  }
  function setLength(msg, length, right) {
    const buf = zeros(length);
    msg = toBuffer2(msg);
    if (right) {
      if (msg.length < length) {
        msg.copy(buf);
        return buf;
      }
      return msg.slice(0, length);
    } else {
      if (msg.length < length) {
        msg.copy(buf, length - msg.length);
        return buf;
      }
      return msg.slice(-length);
    }
  }
  function setLengthRight(msg, length) {
    return setLength(msg, length, true);
  }
  function toBuffer2(v2) {
    if (!Buffer.isBuffer(v2)) {
      if (Array.isArray(v2)) {
        v2 = Buffer.from(v2);
      } else if (typeof v2 === "string") {
        if (isHexString(v2)) {
          v2 = Buffer.from(padToEven(stripHexPrefix(v2)), "hex");
        } else {
          v2 = Buffer.from(v2);
        }
      } else if (typeof v2 === "number") {
        v2 = intToBuffer(v2);
      } else if (v2 === null || v2 === void 0) {
        v2 = Buffer.allocUnsafe(0);
      } else if (BN.isBN(v2)) {
        v2 = v2.toArrayLike(Buffer);
      } else if (v2.toArray) {
        v2 = Buffer.from(v2.toArray());
      } else {
        throw new Error("invalid type");
      }
    }
    return v2;
  }
  function bufferToHex(buf) {
    buf = toBuffer2(buf);
    return "0x" + buf.toString("hex");
  }
  function keccak2(a2, bits) {
    a2 = toBuffer2(a2);
    if (!bits) bits = 256;
    return createKeccakHash("keccak" + bits).update(a2).digest();
  }
  function padToEven(str) {
    return str.length % 2 ? "0" + str : str;
  }
  function isHexString(str) {
    return typeof str === "string" && str.match(/^0x[0-9A-Fa-f]*$/);
  }
  function stripHexPrefix(str) {
    if (typeof str === "string" && str.startsWith("0x")) {
      return str.slice(2);
    }
    return str;
  }
  util = {
    zeros,
    setLength,
    setLengthRight,
    isHexString,
    stripHexPrefix,
    toBuffer: toBuffer2,
    bufferToHex,
    keccak: keccak2
  };
  return util;
}
var abi;
var hasRequiredAbi;
function requireAbi() {
  if (hasRequiredAbi) return abi;
  hasRequiredAbi = 1;
  const util2 = /* @__PURE__ */ requireUtil();
  const BN = requireBn();
  function elementaryName(name) {
    if (name.startsWith("int[")) {
      return "int256" + name.slice(3);
    } else if (name === "int") {
      return "int256";
    } else if (name.startsWith("uint[")) {
      return "uint256" + name.slice(4);
    } else if (name === "uint") {
      return "uint256";
    } else if (name.startsWith("fixed[")) {
      return "fixed128x128" + name.slice(5);
    } else if (name === "fixed") {
      return "fixed128x128";
    } else if (name.startsWith("ufixed[")) {
      return "ufixed128x128" + name.slice(6);
    } else if (name === "ufixed") {
      return "ufixed128x128";
    }
    return name;
  }
  function parseTypeN(type2) {
    return parseInt(/^\D+(\d+)$/.exec(type2)[1], 10);
  }
  function parseTypeNxM(type2) {
    var tmp = /^\D+(\d+)x(\d+)$/.exec(type2);
    return [parseInt(tmp[1], 10), parseInt(tmp[2], 10)];
  }
  function parseTypeArray(type2) {
    var tmp = type2.match(/(.*)\[(.*?)\]$/);
    if (tmp) {
      return tmp[2] === "" ? "dynamic" : parseInt(tmp[2], 10);
    }
    return null;
  }
  function parseNumber(arg) {
    var type2 = typeof arg;
    if (type2 === "string") {
      if (util2.isHexString(arg)) {
        return new BN(util2.stripHexPrefix(arg), 16);
      } else {
        return new BN(arg, 10);
      }
    } else if (type2 === "number") {
      return new BN(arg);
    } else if (arg.toArray) {
      return arg;
    } else {
      throw new Error("Argument is not a number");
    }
  }
  function encodeSingle(type2, arg) {
    var size2, num, ret, i2;
    if (type2 === "address") {
      return encodeSingle("uint160", parseNumber(arg));
    } else if (type2 === "bool") {
      return encodeSingle("uint8", arg ? 1 : 0);
    } else if (type2 === "string") {
      return encodeSingle("bytes", new Buffer(arg, "utf8"));
    } else if (isArray(type2)) {
      if (typeof arg.length === "undefined") {
        throw new Error("Not an array?");
      }
      size2 = parseTypeArray(type2);
      if (size2 !== "dynamic" && size2 !== 0 && arg.length > size2) {
        throw new Error("Elements exceed array size: " + size2);
      }
      ret = [];
      type2 = type2.slice(0, type2.lastIndexOf("["));
      if (typeof arg === "string") {
        arg = JSON.parse(arg);
      }
      for (i2 in arg) {
        ret.push(encodeSingle(type2, arg[i2]));
      }
      if (size2 === "dynamic") {
        var length = encodeSingle("uint256", arg.length);
        ret.unshift(length);
      }
      return Buffer.concat(ret);
    } else if (type2 === "bytes") {
      arg = new Buffer(arg);
      ret = Buffer.concat([encodeSingle("uint256", arg.length), arg]);
      if (arg.length % 32 !== 0) {
        ret = Buffer.concat([ret, util2.zeros(32 - arg.length % 32)]);
      }
      return ret;
    } else if (type2.startsWith("bytes")) {
      size2 = parseTypeN(type2);
      if (size2 < 1 || size2 > 32) {
        throw new Error("Invalid bytes<N> width: " + size2);
      }
      return util2.setLengthRight(arg, 32);
    } else if (type2.startsWith("uint")) {
      size2 = parseTypeN(type2);
      if (size2 % 8 || size2 < 8 || size2 > 256) {
        throw new Error("Invalid uint<N> width: " + size2);
      }
      num = parseNumber(arg);
      if (num.bitLength() > size2) {
        throw new Error("Supplied uint exceeds width: " + size2 + " vs " + num.bitLength());
      }
      if (num < 0) {
        throw new Error("Supplied uint is negative");
      }
      return num.toArrayLike(Buffer, "be", 32);
    } else if (type2.startsWith("int")) {
      size2 = parseTypeN(type2);
      if (size2 % 8 || size2 < 8 || size2 > 256) {
        throw new Error("Invalid int<N> width: " + size2);
      }
      num = parseNumber(arg);
      if (num.bitLength() > size2) {
        throw new Error("Supplied int exceeds width: " + size2 + " vs " + num.bitLength());
      }
      return num.toTwos(256).toArrayLike(Buffer, "be", 32);
    } else if (type2.startsWith("ufixed")) {
      size2 = parseTypeNxM(type2);
      num = parseNumber(arg);
      if (num < 0) {
        throw new Error("Supplied ufixed is negative");
      }
      return encodeSingle("uint256", num.mul(new BN(2).pow(new BN(size2[1]))));
    } else if (type2.startsWith("fixed")) {
      size2 = parseTypeNxM(type2);
      return encodeSingle("int256", parseNumber(arg).mul(new BN(2).pow(new BN(size2[1]))));
    }
    throw new Error("Unsupported or invalid type: " + type2);
  }
  function isDynamic(type2) {
    return type2 === "string" || type2 === "bytes" || parseTypeArray(type2) === "dynamic";
  }
  function isArray(type2) {
    return type2.lastIndexOf("]") === type2.length - 1;
  }
  function rawEncode(types, values) {
    var output = [];
    var data = [];
    var headLength = 32 * types.length;
    for (var i2 in types) {
      var type2 = elementaryName(types[i2]);
      var value = values[i2];
      var cur = encodeSingle(type2, value);
      if (isDynamic(type2)) {
        output.push(encodeSingle("uint256", headLength));
        data.push(cur);
        headLength += cur.length;
      } else {
        output.push(cur);
      }
    }
    return Buffer.concat(output.concat(data));
  }
  function solidityPack(types, values) {
    if (types.length !== values.length) {
      throw new Error("Number of types are not matching the values");
    }
    var size2, num;
    var ret = [];
    for (var i2 = 0; i2 < types.length; i2++) {
      var type2 = elementaryName(types[i2]);
      var value = values[i2];
      if (type2 === "bytes") {
        ret.push(value);
      } else if (type2 === "string") {
        ret.push(new Buffer(value, "utf8"));
      } else if (type2 === "bool") {
        ret.push(new Buffer(value ? "01" : "00", "hex"));
      } else if (type2 === "address") {
        ret.push(util2.setLength(value, 20));
      } else if (type2.startsWith("bytes")) {
        size2 = parseTypeN(type2);
        if (size2 < 1 || size2 > 32) {
          throw new Error("Invalid bytes<N> width: " + size2);
        }
        ret.push(util2.setLengthRight(value, size2));
      } else if (type2.startsWith("uint")) {
        size2 = parseTypeN(type2);
        if (size2 % 8 || size2 < 8 || size2 > 256) {
          throw new Error("Invalid uint<N> width: " + size2);
        }
        num = parseNumber(value);
        if (num.bitLength() > size2) {
          throw new Error("Supplied uint exceeds width: " + size2 + " vs " + num.bitLength());
        }
        ret.push(num.toArrayLike(Buffer, "be", size2 / 8));
      } else if (type2.startsWith("int")) {
        size2 = parseTypeN(type2);
        if (size2 % 8 || size2 < 8 || size2 > 256) {
          throw new Error("Invalid int<N> width: " + size2);
        }
        num = parseNumber(value);
        if (num.bitLength() > size2) {
          throw new Error("Supplied int exceeds width: " + size2 + " vs " + num.bitLength());
        }
        ret.push(num.toTwos(size2).toArrayLike(Buffer, "be", size2 / 8));
      } else {
        throw new Error("Unsupported or invalid type: " + type2);
      }
    }
    return Buffer.concat(ret);
  }
  function soliditySHA3(types, values) {
    return util2.keccak(solidityPack(types, values));
  }
  abi = {
    rawEncode,
    solidityPack,
    soliditySHA3
  };
  return abi;
}
var ethEip712Util;
var hasRequiredEthEip712Util;
function requireEthEip712Util() {
  if (hasRequiredEthEip712Util) return ethEip712Util;
  hasRequiredEthEip712Util = 1;
  const util2 = /* @__PURE__ */ requireUtil();
  const abi2 = /* @__PURE__ */ requireAbi();
  const TYPED_MESSAGE_SCHEMA = {
    type: "object",
    properties: {
      types: {
        type: "object",
        additionalProperties: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              type: { type: "string" }
            },
            required: ["name", "type"]
          }
        }
      },
      primaryType: { type: "string" },
      domain: { type: "object" },
      message: { type: "object" }
    },
    required: ["types", "primaryType", "domain", "message"]
  };
  const TypedDataUtils = {
    /**
     * Encodes an object by encoding and concatenating each of its members
     *
     * @param {string} primaryType - Root type
     * @param {Object} data - Object to encode
     * @param {Object} types - Type definitions
     * @returns {string} - Encoded representation of an object
     */
    encodeData(primaryType, data, types, useV4 = true) {
      const encodedTypes = ["bytes32"];
      const encodedValues = [this.hashType(primaryType, types)];
      if (useV4) {
        const encodeField = (name, type2, value) => {
          if (types[type2] !== void 0) {
            return ["bytes32", value == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : util2.keccak(this.encodeData(type2, value, types, useV4))];
          }
          if (value === void 0)
            throw new Error(`missing value for field ${name} of type ${type2}`);
          if (type2 === "bytes") {
            return ["bytes32", util2.keccak(value)];
          }
          if (type2 === "string") {
            if (typeof value === "string") {
              value = Buffer.from(value, "utf8");
            }
            return ["bytes32", util2.keccak(value)];
          }
          if (type2.lastIndexOf("]") === type2.length - 1) {
            const parsedType = type2.slice(0, type2.lastIndexOf("["));
            const typeValuePairs = value.map((item) => encodeField(name, parsedType, item));
            return ["bytes32", util2.keccak(abi2.rawEncode(
              typeValuePairs.map(([type3]) => type3),
              typeValuePairs.map(([, value2]) => value2)
            ))];
          }
          return [type2, value];
        };
        for (const field of types[primaryType]) {
          const [type2, value] = encodeField(field.name, field.type, data[field.name]);
          encodedTypes.push(type2);
          encodedValues.push(value);
        }
      } else {
        for (const field of types[primaryType]) {
          let value = data[field.name];
          if (value !== void 0) {
            if (field.type === "bytes") {
              encodedTypes.push("bytes32");
              value = util2.keccak(value);
              encodedValues.push(value);
            } else if (field.type === "string") {
              encodedTypes.push("bytes32");
              if (typeof value === "string") {
                value = Buffer.from(value, "utf8");
              }
              value = util2.keccak(value);
              encodedValues.push(value);
            } else if (types[field.type] !== void 0) {
              encodedTypes.push("bytes32");
              value = util2.keccak(this.encodeData(field.type, value, types, useV4));
              encodedValues.push(value);
            } else if (field.type.lastIndexOf("]") === field.type.length - 1) {
              throw new Error("Arrays currently unimplemented in encodeData");
            } else {
              encodedTypes.push(field.type);
              encodedValues.push(value);
            }
          }
        }
      }
      return abi2.rawEncode(encodedTypes, encodedValues);
    },
    /**
     * Encodes the type of an object by encoding a comma delimited list of its members
     *
     * @param {string} primaryType - Root type to encode
     * @param {Object} types - Type definitions
     * @returns {string} - Encoded representation of the type of an object
     */
    encodeType(primaryType, types) {
      let result = "";
      let deps = this.findTypeDependencies(primaryType, types).filter((dep) => dep !== primaryType);
      deps = [primaryType].concat(deps.sort());
      for (const type2 of deps) {
        const children = types[type2];
        if (!children) {
          throw new Error("No type definition specified: " + type2);
        }
        result += type2 + "(" + types[type2].map(({ name, type: type3 }) => type3 + " " + name).join(",") + ")";
      }
      return result;
    },
    /**
     * Finds all types within a type defintion object
     *
     * @param {string} primaryType - Root type
     * @param {Object} types - Type definitions
     * @param {Array} results - current set of accumulated types
     * @returns {Array} - Set of all types found in the type definition
     */
    findTypeDependencies(primaryType, types, results = []) {
      primaryType = primaryType.match(/^\w*/)[0];
      if (results.includes(primaryType) || types[primaryType] === void 0) {
        return results;
      }
      results.push(primaryType);
      for (const field of types[primaryType]) {
        for (const dep of this.findTypeDependencies(field.type, types, results)) {
          !results.includes(dep) && results.push(dep);
        }
      }
      return results;
    },
    /**
     * Hashes an object
     *
     * @param {string} primaryType - Root type
     * @param {Object} data - Object to hash
     * @param {Object} types - Type definitions
     * @returns {Buffer} - Hash of an object
     */
    hashStruct(primaryType, data, types, useV4 = true) {
      return util2.keccak(this.encodeData(primaryType, data, types, useV4));
    },
    /**
     * Hashes the type of an object
     *
     * @param {string} primaryType - Root type to hash
     * @param {Object} types - Type definitions
     * @returns {string} - Hash of an object
     */
    hashType(primaryType, types) {
      return util2.keccak(this.encodeType(primaryType, types));
    },
    /**
     * Removes properties from a message object that are not defined per EIP-712
     *
     * @param {Object} data - typed message object
     * @returns {Object} - typed message object with only allowed fields
     */
    sanitizeData(data) {
      const sanitizedData = {};
      for (const key in TYPED_MESSAGE_SCHEMA.properties) {
        data[key] && (sanitizedData[key] = data[key]);
      }
      if (sanitizedData.types) {
        sanitizedData.types = Object.assign({ EIP712Domain: [] }, sanitizedData.types);
      }
      return sanitizedData;
    },
    /**
     * Returns the hash of a typed message as per EIP-712 for signing
     *
     * @param {Object} typedData - Types message data to sign
     * @returns {string} - sha3 hash for signing
     */
    hash(typedData, useV4 = true) {
      const sanitizedData = this.sanitizeData(typedData);
      const parts = [Buffer.from("1901", "hex")];
      parts.push(this.hashStruct("EIP712Domain", sanitizedData.domain, sanitizedData.types, useV4));
      if (sanitizedData.primaryType !== "EIP712Domain") {
        parts.push(this.hashStruct(sanitizedData.primaryType, sanitizedData.message, sanitizedData.types, useV4));
      }
      return util2.keccak(Buffer.concat(parts));
    }
  };
  ethEip712Util = {
    TYPED_MESSAGE_SCHEMA,
    TypedDataUtils,
    hashForSignTypedDataLegacy: function(msgParams) {
      return typedSignatureHashLegacy(msgParams.data);
    },
    hashForSignTypedData_v3: function(msgParams) {
      return TypedDataUtils.hash(msgParams.data, false);
    },
    hashForSignTypedData_v4: function(msgParams) {
      return TypedDataUtils.hash(msgParams.data);
    }
  };
  function typedSignatureHashLegacy(typedData) {
    const error2 = new Error("Expect argument to be non-empty array");
    if (typeof typedData !== "object" || !typedData.length) throw error2;
    const data = typedData.map(function(e2) {
      return e2.type === "bytes" ? util2.toBuffer(e2.value) : e2.value;
    });
    const types = typedData.map(function(e2) {
      return e2.type;
    });
    const schema = typedData.map(function(e2) {
      if (!e2.name) throw error2;
      return e2.type + " " + e2.name;
    });
    return abi2.soliditySHA3(
      ["bytes32", "bytes32"],
      [
        abi2.soliditySHA3(new Array(typedData.length).fill("string"), schema),
        abi2.soliditySHA3(types, data)
      ]
    );
  }
  return ethEip712Util;
}
var FilterPolyfill = {};
var hasRequiredFilterPolyfill;
function requireFilterPolyfill() {
  if (hasRequiredFilterPolyfill) return FilterPolyfill;
  hasRequiredFilterPolyfill = 1;
  Object.defineProperty(FilterPolyfill, "__esModule", { value: true });
  FilterPolyfill.filterFromParam = FilterPolyfill.FilterPolyfill = void 0;
  const type_1 = /* @__PURE__ */ requireType$1();
  const util_1 = /* @__PURE__ */ requireUtil$1();
  const TIMEOUT = 5 * 60 * 1e3;
  const JSONRPC_TEMPLATE = {
    jsonrpc: "2.0",
    id: 0
  };
  let FilterPolyfill$1 = class FilterPolyfill {
    constructor(provider) {
      this.logFilters = /* @__PURE__ */ new Map();
      this.blockFilters = /* @__PURE__ */ new Set();
      this.pendingTransactionFilters = /* @__PURE__ */ new Set();
      this.cursors = /* @__PURE__ */ new Map();
      this.timeouts = /* @__PURE__ */ new Map();
      this.nextFilterId = (0, type_1.IntNumber)(1);
      this.REQUEST_THROTTLE_INTERVAL = 1e3;
      this.lastFetchTimestamp = /* @__PURE__ */ new Date(0);
      this.resolvers = [];
      this.provider = provider;
    }
    async newFilter(param) {
      const filter = filterFromParam(param);
      const id = this.makeFilterId();
      const cursor = await this.setInitialCursorPosition(id, filter.fromBlock);
      console.info(`Installing new log filter(${id}):`, filter, "initial cursor position:", cursor);
      this.logFilters.set(id, filter);
      this.setFilterTimeout(id);
      return (0, util_1.hexStringFromIntNumber)(id);
    }
    async newBlockFilter() {
      const id = this.makeFilterId();
      const cursor = await this.setInitialCursorPosition(id, "latest");
      console.info(`Installing new block filter (${id}) with initial cursor position:`, cursor);
      this.blockFilters.add(id);
      this.setFilterTimeout(id);
      return (0, util_1.hexStringFromIntNumber)(id);
    }
    async newPendingTransactionFilter() {
      const id = this.makeFilterId();
      const cursor = await this.setInitialCursorPosition(id, "latest");
      console.info(`Installing new block filter (${id}) with initial cursor position:`, cursor);
      this.pendingTransactionFilters.add(id);
      this.setFilterTimeout(id);
      return (0, util_1.hexStringFromIntNumber)(id);
    }
    uninstallFilter(filterId) {
      const id = (0, util_1.intNumberFromHexString)(filterId);
      console.info(`Uninstalling filter (${id})`);
      this.deleteFilter(id);
      return true;
    }
    getFilterChanges(filterId) {
      const id = (0, util_1.intNumberFromHexString)(filterId);
      if (this.timeouts.has(id)) {
        this.setFilterTimeout(id);
      }
      if (this.logFilters.has(id)) {
        return this.getLogFilterChanges(id);
      } else if (this.blockFilters.has(id)) {
        return this.getBlockFilterChanges(id);
      } else if (this.pendingTransactionFilters.has(id)) {
        return this.getPendingTransactionFilterChanges(id);
      }
      return Promise.resolve(filterNotFoundError());
    }
    async getFilterLogs(filterId) {
      const id = (0, util_1.intNumberFromHexString)(filterId);
      const filter = this.logFilters.get(id);
      if (!filter) {
        return filterNotFoundError();
      }
      return this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { method: "eth_getLogs", params: [paramFromFilter(filter)] }));
    }
    makeFilterId() {
      return (0, type_1.IntNumber)(++this.nextFilterId);
    }
    sendAsyncPromise(request) {
      return new Promise((resolve, reject) => {
        this.provider.sendAsync(request, (err, response) => {
          if (err) {
            return reject(err);
          }
          if (Array.isArray(response) || response == null) {
            return reject(new Error(`unexpected response received: ${JSON.stringify(response)}`));
          }
          resolve(response);
        });
      });
    }
    deleteFilter(id) {
      console.info(`Deleting filter (${id})`);
      this.logFilters.delete(id);
      this.blockFilters.delete(id);
      this.pendingTransactionFilters.delete(id);
      this.cursors.delete(id);
      this.timeouts.delete(id);
    }
    async getLogFilterChanges(id) {
      const filter = this.logFilters.get(id);
      const cursorPosition = this.cursors.get(id);
      if (!cursorPosition || !filter) {
        return filterNotFoundError();
      }
      const currentBlockHeight = await this.getCurrentBlockHeight();
      const toBlock = filter.toBlock === "latest" ? currentBlockHeight : filter.toBlock;
      if (cursorPosition > currentBlockHeight) {
        return emptyResult();
      }
      if (cursorPosition > Number(filter.toBlock)) {
        return emptyResult();
      }
      console.info(`Fetching logs from ${cursorPosition} to ${toBlock} for filter ${id}`);
      const response = await this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { method: "eth_getLogs", params: [
        paramFromFilter(Object.assign(Object.assign({}, filter), { fromBlock: cursorPosition, toBlock }))
      ] }));
      if (Array.isArray(response.result)) {
        const blocks = response.result.map((log) => (0, util_1.intNumberFromHexString)(log.blockNumber || "0x0"));
        const highestBlock = Math.max(...blocks);
        if (highestBlock && highestBlock > cursorPosition) {
          const newCursorPosition = (0, type_1.IntNumber)(highestBlock + 1);
          console.info(`Moving cursor position for filter (${id}) from ${cursorPosition} to ${newCursorPosition}`);
          this.cursors.set(id, newCursorPosition);
        }
      }
      return response;
    }
    async getBlockFilterChanges(id) {
      const cursorPosition = this.cursors.get(id);
      if (!cursorPosition) {
        return filterNotFoundError();
      }
      const currentBlockHeight = await this.getCurrentBlockHeight();
      if (cursorPosition > currentBlockHeight) {
        return emptyResult();
      }
      console.info(`Fetching blocks from ${cursorPosition} to ${currentBlockHeight} for filter (${id})`);
      const blocks = (await Promise.all(
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        (0, util_1.range)(cursorPosition, currentBlockHeight + 1).map((i2) => this.getBlockHashByNumber((0, type_1.IntNumber)(i2)))
      )).filter((hash2) => !!hash2);
      const newCursorPosition = (0, type_1.IntNumber)(cursorPosition + blocks.length);
      console.info(`Moving cursor position for filter (${id}) from ${cursorPosition} to ${newCursorPosition}`);
      this.cursors.set(id, newCursorPosition);
      return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { result: blocks });
    }
    async getPendingTransactionFilterChanges(_id) {
      return Promise.resolve(emptyResult());
    }
    async setInitialCursorPosition(id, startBlock) {
      const currentBlockHeight = await this.getCurrentBlockHeight();
      const initialCursorPosition = typeof startBlock === "number" && startBlock > currentBlockHeight ? startBlock : currentBlockHeight;
      this.cursors.set(id, initialCursorPosition);
      return initialCursorPosition;
    }
    setFilterTimeout(id) {
      const existing = this.timeouts.get(id);
      if (existing) {
        window.clearTimeout(existing);
      }
      const timeout = window.setTimeout(() => {
        console.info(`Filter (${id}) timed out`);
        this.deleteFilter(id);
      }, TIMEOUT);
      this.timeouts.set(id, timeout);
    }
    // throttle eth_blockNumber requests
    async getCurrentBlockHeight() {
      const now = /* @__PURE__ */ new Date();
      if (now.getTime() - this.lastFetchTimestamp.getTime() > this.REQUEST_THROTTLE_INTERVAL) {
        this.lastFetchTimestamp = now;
        const height = await this._getCurrentBlockHeight();
        this.currentBlockHeight = height;
        this.resolvers.forEach((resolve) => resolve(height));
        this.resolvers = [];
      }
      if (!this.currentBlockHeight) {
        return new Promise((resolve) => this.resolvers.push(resolve));
      }
      return this.currentBlockHeight;
    }
    async _getCurrentBlockHeight() {
      const { result } = await this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { method: "eth_blockNumber", params: [] }));
      return (0, util_1.intNumberFromHexString)((0, util_1.ensureHexString)(result));
    }
    async getBlockHashByNumber(blockNumber) {
      const response = await this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { method: "eth_getBlockByNumber", params: [(0, util_1.hexStringFromIntNumber)(blockNumber), false] }));
      if (response.result && typeof response.result.hash === "string") {
        return (0, util_1.ensureHexString)(response.result.hash);
      }
      return null;
    }
  };
  FilterPolyfill.FilterPolyfill = FilterPolyfill$1;
  function filterFromParam(param) {
    return {
      fromBlock: intBlockHeightFromHexBlockHeight(param.fromBlock),
      toBlock: intBlockHeightFromHexBlockHeight(param.toBlock),
      addresses: param.address === void 0 ? null : Array.isArray(param.address) ? param.address : [param.address],
      topics: param.topics || []
    };
  }
  FilterPolyfill.filterFromParam = filterFromParam;
  function paramFromFilter(filter) {
    const param = {
      fromBlock: hexBlockHeightFromIntBlockHeight(filter.fromBlock),
      toBlock: hexBlockHeightFromIntBlockHeight(filter.toBlock),
      topics: filter.topics
    };
    if (filter.addresses !== null) {
      param.address = filter.addresses;
    }
    return param;
  }
  function intBlockHeightFromHexBlockHeight(value) {
    if (value === void 0 || value === "latest" || value === "pending") {
      return "latest";
    } else if (value === "earliest") {
      return (0, type_1.IntNumber)(0);
    } else if ((0, util_1.isHexString)(value)) {
      return (0, util_1.intNumberFromHexString)(value);
    }
    throw new Error(`Invalid block option: ${String(value)}`);
  }
  function hexBlockHeightFromIntBlockHeight(value) {
    if (value === "latest") {
      return value;
    }
    return (0, util_1.hexStringFromIntNumber)(value);
  }
  function filterNotFoundError() {
    return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { error: { code: -32e3, message: "filter not found" } });
  }
  function emptyResult() {
    return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { result: [] });
  }
  return FilterPolyfill;
}
var SubscriptionManager = {};
var dist$4 = {};
var PollingBlockTracker = {};
var jsonRpcRandomId;
var hasRequiredJsonRpcRandomId;
function requireJsonRpcRandomId() {
  if (hasRequiredJsonRpcRandomId) return jsonRpcRandomId;
  hasRequiredJsonRpcRandomId = 1;
  jsonRpcRandomId = IdIterator;
  function IdIterator(opts) {
    opts = opts || {};
    var max2 = opts.max || Number.MAX_SAFE_INTEGER;
    var idCounter = typeof opts.start !== "undefined" ? opts.start : Math.floor(Math.random() * max2);
    return function createRandomId() {
      idCounter = idCounter % max2;
      return idCounter++;
    };
  }
  return jsonRpcRandomId;
}
var pify$1;
var hasRequiredPify$1;
function requirePify$1() {
  if (hasRequiredPify$1) return pify$1;
  hasRequiredPify$1 = 1;
  const processFn = (fn, opts) => function() {
    const P2 = opts.promiseModule;
    const args = new Array(arguments.length);
    for (let i2 = 0; i2 < arguments.length; i2++) {
      args[i2] = arguments[i2];
    }
    return new P2((resolve, reject) => {
      if (opts.errorFirst) {
        args.push(function(err, result) {
          if (opts.multiArgs) {
            const results = new Array(arguments.length - 1);
            for (let i2 = 1; i2 < arguments.length; i2++) {
              results[i2 - 1] = arguments[i2];
            }
            if (err) {
              results.unshift(err);
              reject(results);
            } else {
              resolve(results);
            }
          } else if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      } else {
        args.push(function(result) {
          if (opts.multiArgs) {
            const results = new Array(arguments.length - 1);
            for (let i2 = 0; i2 < arguments.length; i2++) {
              results[i2] = arguments[i2];
            }
            resolve(results);
          } else {
            resolve(result);
          }
        });
      }
      fn.apply(this, args);
    });
  };
  pify$1 = (obj, opts) => {
    opts = Object.assign({
      exclude: [/.+(Sync|Stream)$/],
      errorFirst: true,
      promiseModule: Promise
    }, opts);
    const filter = (key) => {
      const match = (pattern2) => typeof pattern2 === "string" ? key === pattern2 : pattern2.test(key);
      return opts.include ? opts.include.some(match) : !opts.exclude.some(match);
    };
    let ret;
    if (typeof obj === "function") {
      ret = function() {
        if (opts.excludeMain) {
          return obj.apply(this, arguments);
        }
        return processFn(obj, opts).apply(this, arguments);
      };
    } else {
      ret = Object.create(Object.getPrototypeOf(obj));
    }
    for (const key in obj) {
      const x2 = obj[key];
      ret[key] = typeof x2 === "function" && filter(key) ? processFn(x2, opts) : x2;
    }
    return ret;
  };
  return pify$1;
}
var BaseBlockTracker = {};
var cjs = {};
var hasRequiredCjs;
function requireCjs() {
  if (hasRequiredCjs) return cjs;
  hasRequiredCjs = 1;
  Object.defineProperty(cjs, "__esModule", { value: true });
  const events_1 = requireEvents();
  function safeApply(handler, context, args) {
    try {
      Reflect.apply(handler, context, args);
    } catch (err) {
      setTimeout(() => {
        throw err;
      });
    }
  }
  function arrayClone(arr) {
    const n2 = arr.length;
    const copy = new Array(n2);
    for (let i2 = 0; i2 < n2; i2 += 1) {
      copy[i2] = arr[i2];
    }
    return copy;
  }
  class SafeEventEmitter extends events_1.EventEmitter {
    emit(type2, ...args) {
      let doError = type2 === "error";
      const events = this._events;
      if (events !== void 0) {
        doError = doError && events.error === void 0;
      } else if (!doError) {
        return false;
      }
      if (doError) {
        let er;
        if (args.length > 0) {
          [er] = args;
        }
        if (er instanceof Error) {
          throw er;
        }
        const err = new Error(`Unhandled error.${er ? ` (${er.message})` : ""}`);
        err.context = er;
        throw err;
      }
      const handler = events[type2];
      if (handler === void 0) {
        return false;
      }
      if (typeof handler === "function") {
        safeApply(handler, this, args);
      } else {
        const len = handler.length;
        const listeners = arrayClone(handler);
        for (let i2 = 0; i2 < len; i2 += 1) {
          safeApply(listeners[i2], this, args);
        }
      }
      return true;
    }
  }
  cjs.default = SafeEventEmitter;
  return cjs;
}
var hasRequiredBaseBlockTracker;
function requireBaseBlockTracker() {
  if (hasRequiredBaseBlockTracker) return BaseBlockTracker;
  hasRequiredBaseBlockTracker = 1;
  var __importDefault2 = BaseBlockTracker && BaseBlockTracker.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(BaseBlockTracker, "__esModule", { value: true });
  BaseBlockTracker.BaseBlockTracker = void 0;
  const safe_event_emitter_1 = __importDefault2(requireCjs());
  const sec = 1e3;
  const calculateSum = (accumulator, currentValue) => accumulator + currentValue;
  const blockTrackerEvents = ["sync", "latest"];
  let BaseBlockTracker$1 = class BaseBlockTracker extends safe_event_emitter_1.default {
    constructor(opts) {
      super();
      this._blockResetDuration = opts.blockResetDuration || 20 * sec;
      this._usePastBlocks = opts.usePastBlocks || false;
      this._currentBlock = null;
      this._isRunning = false;
      this._onNewListener = this._onNewListener.bind(this);
      this._onRemoveListener = this._onRemoveListener.bind(this);
      this._resetCurrentBlock = this._resetCurrentBlock.bind(this);
      this._setupInternalEvents();
    }
    async destroy() {
      this._cancelBlockResetTimeout();
      await this._maybeEnd();
      super.removeAllListeners();
    }
    isRunning() {
      return this._isRunning;
    }
    getCurrentBlock() {
      return this._currentBlock;
    }
    async getLatestBlock() {
      if (this._currentBlock) {
        return this._currentBlock;
      }
      const latestBlock = await new Promise((resolve) => this.once("latest", resolve));
      return latestBlock;
    }
    // dont allow module consumer to remove our internal event listeners
    removeAllListeners(eventName) {
      if (eventName) {
        super.removeAllListeners(eventName);
      } else {
        super.removeAllListeners();
      }
      this._setupInternalEvents();
      this._onRemoveListener();
      return this;
    }
    _setupInternalEvents() {
      this.removeListener("newListener", this._onNewListener);
      this.removeListener("removeListener", this._onRemoveListener);
      this.on("newListener", this._onNewListener);
      this.on("removeListener", this._onRemoveListener);
    }
    _onNewListener(eventName) {
      if (blockTrackerEvents.includes(eventName)) {
        this._maybeStart();
      }
    }
    _onRemoveListener() {
      if (this._getBlockTrackerEventCount() > 0) {
        return;
      }
      this._maybeEnd();
    }
    async _maybeStart() {
      if (this._isRunning) {
        return;
      }
      this._isRunning = true;
      this._cancelBlockResetTimeout();
      await this._start();
      this.emit("_started");
    }
    async _maybeEnd() {
      if (!this._isRunning) {
        return;
      }
      this._isRunning = false;
      this._setupBlockResetTimeout();
      await this._end();
      this.emit("_ended");
    }
    _getBlockTrackerEventCount() {
      return blockTrackerEvents.map((eventName) => this.listenerCount(eventName)).reduce(calculateSum);
    }
    _shouldUseNewBlock(newBlock) {
      const currentBlock = this._currentBlock;
      if (!currentBlock) {
        return true;
      }
      const newBlockInt = hexToInt(newBlock);
      const currentBlockInt = hexToInt(currentBlock);
      return this._usePastBlocks && newBlockInt < currentBlockInt || newBlockInt > currentBlockInt;
    }
    _newPotentialLatest(newBlock) {
      if (!this._shouldUseNewBlock(newBlock)) {
        return;
      }
      this._setCurrentBlock(newBlock);
    }
    _setCurrentBlock(newBlock) {
      const oldBlock = this._currentBlock;
      this._currentBlock = newBlock;
      this.emit("latest", newBlock);
      this.emit("sync", { oldBlock, newBlock });
    }
    _setupBlockResetTimeout() {
      this._cancelBlockResetTimeout();
      this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration);
      if (this._blockResetTimeout.unref) {
        this._blockResetTimeout.unref();
      }
    }
    _cancelBlockResetTimeout() {
      if (this._blockResetTimeout) {
        clearTimeout(this._blockResetTimeout);
      }
    }
    _resetCurrentBlock() {
      this._currentBlock = null;
    }
  };
  BaseBlockTracker.BaseBlockTracker = BaseBlockTracker$1;
  function hexToInt(hexInt) {
    return Number.parseInt(hexInt, 16);
  }
  return BaseBlockTracker;
}
var loggingUtils = {};
var dist$3 = {};
var assert$1 = {};
class StructError extends TypeError {
  constructor(failure, failures) {
    let cached;
    const { message, explanation, ...rest } = failure;
    const { path } = failure;
    const msg = path.length === 0 ? message : `At path: ${path.join(".")} -- ${message}`;
    super(explanation ?? msg);
    if (explanation != null)
      this.cause = msg;
    Object.assign(this, rest);
    this.name = this.constructor.name;
    this.failures = () => {
      return cached ?? (cached = [failure, ...failures()]);
    };
  }
}
function isIterable(x2) {
  return isObject(x2) && typeof x2[Symbol.iterator] === "function";
}
function isObject(x2) {
  return typeof x2 === "object" && x2 != null;
}
function isPlainObject(x2) {
  if (Object.prototype.toString.call(x2) !== "[object Object]") {
    return false;
  }
  const prototype = Object.getPrototypeOf(x2);
  return prototype === null || prototype === Object.prototype;
}
function print(value) {
  if (typeof value === "symbol") {
    return value.toString();
  }
  return typeof value === "string" ? JSON.stringify(value) : `${value}`;
}
function shiftIterator(input) {
  const { done, value } = input.next();
  return done ? void 0 : value;
}
function toFailure(result, context, struct2, value) {
  if (result === true) {
    return;
  } else if (result === false) {
    result = {};
  } else if (typeof result === "string") {
    result = { message: result };
  }
  const { path, branch } = context;
  const { type: type2 } = struct2;
  const { refinement, message = `Expected a value of type \`${type2}\`${refinement ? ` with refinement \`${refinement}\`` : ""}, but received: \`${print(value)}\`` } = result;
  return {
    value,
    type: type2,
    refinement,
    key: path[path.length - 1],
    path,
    branch,
    ...result,
    message
  };
}
function* toFailures(result, context, struct2, value) {
  if (!isIterable(result)) {
    result = [result];
  }
  for (const r2 of result) {
    const failure = toFailure(r2, context, struct2, value);
    if (failure) {
      yield failure;
    }
  }
}
function* run(value, struct2, options = {}) {
  const { path = [], branch = [value], coerce: coerce2 = false, mask: mask2 = false } = options;
  const ctx = { path, branch };
  if (coerce2) {
    value = struct2.coercer(value, ctx);
    if (mask2 && struct2.type !== "type" && isObject(struct2.schema) && isObject(value) && !Array.isArray(value)) {
      for (const key in value) {
        if (struct2.schema[key] === void 0) {
          delete value[key];
        }
      }
    }
  }
  let status = "valid";
  for (const failure of struct2.validator(value, ctx)) {
    failure.explanation = options.message;
    status = "not_valid";
    yield [failure, void 0];
  }
  for (let [k2, v2, s2] of struct2.entries(value, ctx)) {
    const ts = run(v2, s2, {
      path: k2 === void 0 ? path : [...path, k2],
      branch: k2 === void 0 ? branch : [...branch, v2],
      coerce: coerce2,
      mask: mask2,
      message: options.message
    });
    for (const t2 of ts) {
      if (t2[0]) {
        status = t2[0].refinement != null ? "not_refined" : "not_valid";
        yield [t2[0], void 0];
      } else if (coerce2) {
        v2 = t2[1];
        if (k2 === void 0) {
          value = v2;
        } else if (value instanceof Map) {
          value.set(k2, v2);
        } else if (value instanceof Set) {
          value.add(v2);
        } else if (isObject(value)) {
          if (v2 !== void 0 || k2 in value)
            value[k2] = v2;
        }
      }
    }
  }
  if (status !== "not_valid") {
    for (const failure of struct2.refiner(value, ctx)) {
      failure.explanation = options.message;
      status = "not_refined";
      yield [failure, void 0];
    }
  }
  if (status === "valid") {
    yield [void 0, value];
  }
}
class Struct {
  constructor(props) {
    const { type: type2, schema, validator, refiner, coercer = (value) => value, entries = function* () {
    } } = props;
    this.type = type2;
    this.schema = schema;
    this.entries = entries;
    this.coercer = coercer;
    if (validator) {
      this.validator = (value, context) => {
        const result = validator(value, context);
        return toFailures(result, context, this, value);
      };
    } else {
      this.validator = () => [];
    }
    if (refiner) {
      this.refiner = (value, context) => {
        const result = refiner(value, context);
        return toFailures(result, context, this, value);
      };
    } else {
      this.refiner = () => [];
    }
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(value, message) {
    return assert(value, this, message);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(value, message) {
    return create(value, this, message);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(value) {
    return is(value, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(value, message) {
    return mask(value, this, message);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */
  validate(value, options = {}) {
    return validate(value, this, options);
  }
}
function assert(value, struct2, message) {
  const result = validate(value, struct2, { message });
  if (result[0]) {
    throw result[0];
  }
}
function create(value, struct2, message) {
  const result = validate(value, struct2, { coerce: true, message });
  if (result[0]) {
    throw result[0];
  } else {
    return result[1];
  }
}
function mask(value, struct2, message) {
  const result = validate(value, struct2, { coerce: true, mask: true, message });
  if (result[0]) {
    throw result[0];
  } else {
    return result[1];
  }
}
function is(value, struct2) {
  const result = validate(value, struct2);
  return !result[0];
}
function validate(value, struct2, options = {}) {
  const tuples = run(value, struct2, options);
  const tuple2 = shiftIterator(tuples);
  if (tuple2[0]) {
    const error2 = new StructError(tuple2[0], function* () {
      for (const t2 of tuples) {
        if (t2[0]) {
          yield t2[0];
        }
      }
    });
    return [error2, void 0];
  } else {
    const v2 = tuple2[1];
    return [void 0, v2];
  }
}
function assign(...Structs) {
  const isType = Structs[0].type === "type";
  const schemas = Structs.map((s2) => s2.schema);
  const schema = Object.assign({}, ...schemas);
  return isType ? type(schema) : object(schema);
}
function define(name, validator) {
  return new Struct({ type: name, schema: null, validator });
}
function deprecated(struct2, log) {
  return new Struct({
    ...struct2,
    refiner: (value, ctx) => value === void 0 || struct2.refiner(value, ctx),
    validator(value, ctx) {
      if (value === void 0) {
        return true;
      } else {
        log(value, ctx);
        return struct2.validator(value, ctx);
      }
    }
  });
}
function dynamic(fn) {
  return new Struct({
    type: "dynamic",
    schema: null,
    *entries(value, ctx) {
      const struct2 = fn(value, ctx);
      yield* struct2.entries(value, ctx);
    },
    validator(value, ctx) {
      const struct2 = fn(value, ctx);
      return struct2.validator(value, ctx);
    },
    coercer(value, ctx) {
      const struct2 = fn(value, ctx);
      return struct2.coercer(value, ctx);
    },
    refiner(value, ctx) {
      const struct2 = fn(value, ctx);
      return struct2.refiner(value, ctx);
    }
  });
}
function lazy(fn) {
  let struct2;
  return new Struct({
    type: "lazy",
    schema: null,
    *entries(value, ctx) {
      struct2 ?? (struct2 = fn());
      yield* struct2.entries(value, ctx);
    },
    validator(value, ctx) {
      struct2 ?? (struct2 = fn());
      return struct2.validator(value, ctx);
    },
    coercer(value, ctx) {
      struct2 ?? (struct2 = fn());
      return struct2.coercer(value, ctx);
    },
    refiner(value, ctx) {
      struct2 ?? (struct2 = fn());
      return struct2.refiner(value, ctx);
    }
  });
}
function omit(struct2, keys) {
  const { schema } = struct2;
  const subschema = { ...schema };
  for (const key of keys) {
    delete subschema[key];
  }
  switch (struct2.type) {
    case "type":
      return type(subschema);
    default:
      return object(subschema);
  }
}
function partial(struct2) {
  const isStruct = struct2 instanceof Struct;
  const schema = isStruct ? { ...struct2.schema } : { ...struct2 };
  for (const key in schema) {
    schema[key] = optional(schema[key]);
  }
  if (isStruct && struct2.type === "type") {
    return type(schema);
  }
  return object(schema);
}
function pick(struct2, keys) {
  const { schema } = struct2;
  const subschema = {};
  for (const key of keys) {
    subschema[key] = schema[key];
  }
  switch (struct2.type) {
    case "type":
      return type(subschema);
    default:
      return object(subschema);
  }
}
function struct(name, validator) {
  console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`.");
  return define(name, validator);
}
function any() {
  return define("any", () => true);
}
function array(Element) {
  return new Struct({
    type: "array",
    schema: Element,
    *entries(value) {
      if (Element && Array.isArray(value)) {
        for (const [i2, v2] of value.entries()) {
          yield [i2, v2, Element];
        }
      }
    },
    coercer(value) {
      return Array.isArray(value) ? value.slice() : value;
    },
    validator(value) {
      return Array.isArray(value) || `Expected an array value, but received: ${print(value)}`;
    }
  });
}
function bigint() {
  return define("bigint", (value) => {
    return typeof value === "bigint";
  });
}
function boolean() {
  return define("boolean", (value) => {
    return typeof value === "boolean";
  });
}
function date() {
  return define("date", (value) => {
    return value instanceof Date && !isNaN(value.getTime()) || `Expected a valid \`Date\` object, but received: ${print(value)}`;
  });
}
function enums(values) {
  const schema = {};
  const description = values.map((v2) => print(v2)).join();
  for (const key of values) {
    schema[key] = key;
  }
  return new Struct({
    type: "enums",
    schema,
    validator(value) {
      return values.includes(value) || `Expected one of \`${description}\`, but received: ${print(value)}`;
    }
  });
}
function func() {
  return define("func", (value) => {
    return typeof value === "function" || `Expected a function, but received: ${print(value)}`;
  });
}
function instance(Class) {
  return define("instance", (value) => {
    return value instanceof Class || `Expected a \`${Class.name}\` instance, but received: ${print(value)}`;
  });
}
function integer() {
  return define("integer", (value) => {
    return typeof value === "number" && !isNaN(value) && Number.isInteger(value) || `Expected an integer, but received: ${print(value)}`;
  });
}
function intersection(Structs) {
  return new Struct({
    type: "intersection",
    schema: null,
    *entries(value, ctx) {
      for (const S2 of Structs) {
        yield* S2.entries(value, ctx);
      }
    },
    *validator(value, ctx) {
      for (const S2 of Structs) {
        yield* S2.validator(value, ctx);
      }
    },
    *refiner(value, ctx) {
      for (const S2 of Structs) {
        yield* S2.refiner(value, ctx);
      }
    }
  });
}
function literal(constant) {
  const description = print(constant);
  const t2 = typeof constant;
  return new Struct({
    type: "literal",
    schema: t2 === "string" || t2 === "number" || t2 === "boolean" ? constant : null,
    validator(value) {
      return value === constant || `Expected the literal \`${description}\`, but received: ${print(value)}`;
    }
  });
}
function map(Key, Value) {
  return new Struct({
    type: "map",
    schema: null,
    *entries(value) {
      if (Key && Value && value instanceof Map) {
        for (const [k2, v2] of value.entries()) {
          yield [k2, k2, Key];
          yield [k2, v2, Value];
        }
      }
    },
    coercer(value) {
      return value instanceof Map ? new Map(value) : value;
    },
    validator(value) {
      return value instanceof Map || `Expected a \`Map\` object, but received: ${print(value)}`;
    }
  });
}
function never() {
  return define("never", () => false);
}
function nullable(struct2) {
  return new Struct({
    ...struct2,
    validator: (value, ctx) => value === null || struct2.validator(value, ctx),
    refiner: (value, ctx) => value === null || struct2.refiner(value, ctx)
  });
}
function number$1() {
  return define("number", (value) => {
    return typeof value === "number" && !isNaN(value) || `Expected a number, but received: ${print(value)}`;
  });
}
function object(schema) {
  const knowns = schema ? Object.keys(schema) : [];
  const Never = never();
  return new Struct({
    type: "object",
    schema: schema ? schema : null,
    *entries(value) {
      if (schema && isObject(value)) {
        const unknowns = new Set(Object.keys(value));
        for (const key of knowns) {
          unknowns.delete(key);
          yield [key, value[key], schema[key]];
        }
        for (const key of unknowns) {
          yield [key, value[key], Never];
        }
      }
    },
    validator(value) {
      return isObject(value) || `Expected an object, but received: ${print(value)}`;
    },
    coercer(value) {
      return isObject(value) ? { ...value } : value;
    }
  });
}
function optional(struct2) {
  return new Struct({
    ...struct2,
    validator: (value, ctx) => value === void 0 || struct2.validator(value, ctx),
    refiner: (value, ctx) => value === void 0 || struct2.refiner(value, ctx)
  });
}
function record(Key, Value) {
  return new Struct({
    type: "record",
    schema: null,
    *entries(value) {
      if (isObject(value)) {
        for (const k2 in value) {
          const v2 = value[k2];
          yield [k2, k2, Key];
          yield [k2, v2, Value];
        }
      }
    },
    validator(value) {
      return isObject(value) || `Expected an object, but received: ${print(value)}`;
    }
  });
}
function regexp() {
  return define("regexp", (value) => {
    return value instanceof RegExp;
  });
}
function set(Element) {
  return new Struct({
    type: "set",
    schema: null,
    *entries(value) {
      if (Element && value instanceof Set) {
        for (const v2 of value) {
          yield [v2, v2, Element];
        }
      }
    },
    coercer(value) {
      return value instanceof Set ? new Set(value) : value;
    },
    validator(value) {
      return value instanceof Set || `Expected a \`Set\` object, but received: ${print(value)}`;
    }
  });
}
function string() {
  return define("string", (value) => {
    return typeof value === "string" || `Expected a string, but received: ${print(value)}`;
  });
}
function tuple(Structs) {
  const Never = never();
  return new Struct({
    type: "tuple",
    schema: null,
    *entries(value) {
      if (Array.isArray(value)) {
        const length = Math.max(Structs.length, value.length);
        for (let i2 = 0; i2 < length; i2++) {
          yield [i2, value[i2], Structs[i2] || Never];
        }
      }
    },
    validator(value) {
      return Array.isArray(value) || `Expected an array, but received: ${print(value)}`;
    }
  });
}
function type(schema) {
  const keys = Object.keys(schema);
  return new Struct({
    type: "type",
    schema,
    *entries(value) {
      if (isObject(value)) {
        for (const k2 of keys) {
          yield [k2, value[k2], schema[k2]];
        }
      }
    },
    validator(value) {
      return isObject(value) || `Expected an object, but received: ${print(value)}`;
    },
    coercer(value) {
      return isObject(value) ? { ...value } : value;
    }
  });
}
function union(Structs) {
  const description = Structs.map((s2) => s2.type).join(" | ");
  return new Struct({
    type: "union",
    schema: null,
    coercer(value) {
      for (const S2 of Structs) {
        const [error2, coerced] = S2.validate(value, { coerce: true });
        if (!error2) {
          return coerced;
        }
      }
      return value;
    },
    validator(value, ctx) {
      const failures = [];
      for (const S2 of Structs) {
        const [...tuples] = run(value, S2, ctx);
        const [first] = tuples;
        if (!first[0]) {
          return [];
        } else {
          for (const [failure] of tuples) {
            if (failure) {
              failures.push(failure);
            }
          }
        }
      }
      return [
        `Expected the value to satisfy a union of \`${description}\`, but received: ${print(value)}`,
        ...failures
      ];
    }
  });
}
function unknown() {
  return define("unknown", () => true);
}
function coerce(struct2, condition, coercer) {
  return new Struct({
    ...struct2,
    coercer: (value, ctx) => {
      return is(value, condition) ? struct2.coercer(coercer(value, ctx), ctx) : struct2.coercer(value, ctx);
    }
  });
}
function defaulted(struct2, fallback, options = {}) {
  return coerce(struct2, unknown(), (x2) => {
    const f2 = typeof fallback === "function" ? fallback() : fallback;
    if (x2 === void 0) {
      return f2;
    }
    if (!options.strict && isPlainObject(x2) && isPlainObject(f2)) {
      const ret = { ...x2 };
      let changed = false;
      for (const key in f2) {
        if (ret[key] === void 0) {
          ret[key] = f2[key];
          changed = true;
        }
      }
      if (changed) {
        return ret;
      }
    }
    return x2;
  });
}
function trimmed(struct2) {
  return coerce(struct2, string(), (x2) => x2.trim());
}
function empty(struct2) {
  return refine(struct2, "empty", (value) => {
    const size2 = getSize(value);
    return size2 === 0 || `Expected an empty ${struct2.type} but received one with a size of \`${size2}\``;
  });
}
function getSize(value) {
  if (value instanceof Map || value instanceof Set) {
    return value.size;
  } else {
    return value.length;
  }
}
function max(struct2, threshold, options = {}) {
  const { exclusive } = options;
  return refine(struct2, "max", (value) => {
    return exclusive ? value < threshold : value <= threshold || `Expected a ${struct2.type} less than ${exclusive ? "" : "or equal to "}${threshold} but received \`${value}\``;
  });
}
function min(struct2, threshold, options = {}) {
  const { exclusive } = options;
  return refine(struct2, "min", (value) => {
    return exclusive ? value > threshold : value >= threshold || `Expected a ${struct2.type} greater than ${exclusive ? "" : "or equal to "}${threshold} but received \`${value}\``;
  });
}
function nonempty(struct2) {
  return refine(struct2, "nonempty", (value) => {
    const size2 = getSize(value);
    return size2 > 0 || `Expected a nonempty ${struct2.type} but received an empty one`;
  });
}
function pattern(struct2, regexp2) {
  return refine(struct2, "pattern", (value) => {
    return regexp2.test(value) || `Expected a ${struct2.type} matching \`/${regexp2.source}/\` but received "${value}"`;
  });
}
function size(struct2, min2, max2 = min2) {
  const expected = `Expected a ${struct2.type}`;
  const of = min2 === max2 ? `of \`${min2}\`` : `between \`${min2}\` and \`${max2}\``;
  return refine(struct2, "size", (value) => {
    if (typeof value === "number" || value instanceof Date) {
      return min2 <= value && value <= max2 || `${expected} ${of} but received \`${value}\``;
    } else if (value instanceof Map || value instanceof Set) {
      const { size: size2 } = value;
      return min2 <= size2 && size2 <= max2 || `${expected} with a size ${of} but received one with a size of \`${size2}\``;
    } else {
      const { length } = value;
      return min2 <= length && length <= max2 || `${expected} with a length ${of} but received one with a length of \`${length}\``;
    }
  });
}
function refine(struct2, name, refiner) {
  return new Struct({
    ...struct2,
    *refiner(value, ctx) {
      yield* struct2.refiner(value, ctx);
      const result = refiner(value, ctx);
      const failures = toFailures(result, ctx, struct2, value);
      for (const failure of failures) {
        yield { ...failure, refinement: name };
      }
    }
  });
}
const dist$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Struct,
  StructError,
  any,
  array,
  assert,
  assign,
  bigint,
  boolean,
  coerce,
  create,
  date,
  defaulted,
  define,
  deprecated,
  dynamic,
  empty,
  enums,
  func,
  instance,
  integer,
  intersection,
  is,
  lazy,
  literal,
  map,
  mask,
  max,
  min,
  never,
  nonempty,
  nullable,
  number: number$1,
  object,
  omit,
  optional,
  partial,
  pattern,
  pick,
  record,
  refine,
  regexp,
  set,
  size,
  string,
  struct,
  trimmed,
  tuple,
  type,
  union,
  unknown,
  validate
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(dist$2);
var hasRequiredAssert;
function requireAssert() {
  if (hasRequiredAssert) return assert$1;
  hasRequiredAssert = 1;
  Object.defineProperty(assert$1, "__esModule", { value: true });
  assert$1.assertExhaustive = assert$1.assertStruct = assert$1.assert = assert$1.AssertionError = void 0;
  const superstruct_1 = require$$1;
  function isErrorWithMessage(error2) {
    return typeof error2 === "object" && error2 !== null && "message" in error2;
  }
  function isConstructable(fn) {
    var _a, _b;
    return Boolean(typeof ((_b = (_a = fn === null || fn === void 0 ? void 0 : fn.prototype) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) === "string");
  }
  function getErrorMessage(error2) {
    const message = isErrorWithMessage(error2) ? error2.message : String(error2);
    if (message.endsWith(".")) {
      return message.slice(0, -1);
    }
    return message;
  }
  function getError(ErrorWrapper, message) {
    if (isConstructable(ErrorWrapper)) {
      return new ErrorWrapper({
        message
      });
    }
    return ErrorWrapper({
      message
    });
  }
  class AssertionError extends Error {
    constructor(options) {
      super(options.message);
      this.code = "ERR_ASSERTION";
    }
  }
  assert$1.AssertionError = AssertionError;
  function assert2(value, message = "Assertion failed.", ErrorWrapper = AssertionError) {
    if (!value) {
      if (message instanceof Error) {
        throw message;
      }
      throw getError(ErrorWrapper, message);
    }
  }
  assert$1.assert = assert2;
  function assertStruct(value, struct2, errorPrefix = "Assertion failed", ErrorWrapper = AssertionError) {
    try {
      (0, superstruct_1.assert)(value, struct2);
    } catch (error2) {
      throw getError(ErrorWrapper, `${errorPrefix}: ${getErrorMessage(error2)}.`);
    }
  }
  assert$1.assertStruct = assertStruct;
  function assertExhaustive(_object) {
    throw new Error("Invalid branch reached. Should be detected during compilation.");
  }
  assert$1.assertExhaustive = assertExhaustive;
  return assert$1;
}
var base64 = {};
var hasRequiredBase64;
function requireBase64() {
  if (hasRequiredBase64) return base64;
  hasRequiredBase64 = 1;
  Object.defineProperty(base64, "__esModule", { value: true });
  base64.base64 = void 0;
  const superstruct_1 = require$$1;
  const assert_1 = requireAssert();
  const base64$1 = (struct2, options = {}) => {
    var _a, _b;
    const paddingRequired = (_a = options.paddingRequired) !== null && _a !== void 0 ? _a : false;
    const characterSet = (_b = options.characterSet) !== null && _b !== void 0 ? _b : "base64";
    let letters;
    if (characterSet === "base64") {
      letters = String.raw`[A-Za-z0-9+\/]`;
    } else {
      (0, assert_1.assert)(characterSet === "base64url");
      letters = String.raw`[-_A-Za-z0-9]`;
    }
    let re2;
    if (paddingRequired) {
      re2 = new RegExp(`^(?:${letters}{4})*(?:${letters}{3}=|${letters}{2}==)?$`, "u");
    } else {
      re2 = new RegExp(`^(?:${letters}{4})*(?:${letters}{2,3}|${letters}{3}=|${letters}{2}==)?$`, "u");
    }
    return (0, superstruct_1.pattern)(struct2, re2);
  };
  base64.base64 = base64$1;
  return base64;
}
var bytes = {};
var hex = {};
var hasRequiredHex;
function requireHex() {
  if (hasRequiredHex) return hex;
  hasRequiredHex = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.remove0x = exports.add0x = exports.assertIsStrictHexString = exports.assertIsHexString = exports.isStrictHexString = exports.isHexString = exports.StrictHexStruct = exports.HexStruct = void 0;
    const superstruct_1 = require$$1;
    const assert_1 = requireAssert();
    exports.HexStruct = (0, superstruct_1.pattern)((0, superstruct_1.string)(), /^(?:0x)?[0-9a-f]+$/iu);
    exports.StrictHexStruct = (0, superstruct_1.pattern)((0, superstruct_1.string)(), /^0x[0-9a-f]+$/iu);
    function isHexString(value) {
      return (0, superstruct_1.is)(value, exports.HexStruct);
    }
    exports.isHexString = isHexString;
    function isStrictHexString(value) {
      return (0, superstruct_1.is)(value, exports.StrictHexStruct);
    }
    exports.isStrictHexString = isStrictHexString;
    function assertIsHexString(value) {
      (0, assert_1.assert)(isHexString(value), "Value must be a hexadecimal string.");
    }
    exports.assertIsHexString = assertIsHexString;
    function assertIsStrictHexString(value) {
      (0, assert_1.assert)(isStrictHexString(value), 'Value must be a hexadecimal string, starting with "0x".');
    }
    exports.assertIsStrictHexString = assertIsStrictHexString;
    function add0x(hexadecimal) {
      if (hexadecimal.startsWith("0x")) {
        return hexadecimal;
      }
      if (hexadecimal.startsWith("0X")) {
        return `0x${hexadecimal.substring(2)}`;
      }
      return `0x${hexadecimal}`;
    }
    exports.add0x = add0x;
    function remove0x(hexadecimal) {
      if (hexadecimal.startsWith("0x") || hexadecimal.startsWith("0X")) {
        return hexadecimal.substring(2);
      }
      return hexadecimal;
    }
    exports.remove0x = remove0x;
  })(hex);
  return hex;
}
var hasRequiredBytes;
function requireBytes() {
  if (hasRequiredBytes) return bytes;
  hasRequiredBytes = 1;
  Object.defineProperty(bytes, "__esModule", { value: true });
  bytes.createDataView = bytes.concatBytes = bytes.valueToBytes = bytes.stringToBytes = bytes.numberToBytes = bytes.signedBigIntToBytes = bytes.bigIntToBytes = bytes.hexToBytes = bytes.bytesToString = bytes.bytesToNumber = bytes.bytesToSignedBigInt = bytes.bytesToBigInt = bytes.bytesToHex = bytes.assertIsBytes = bytes.isBytes = void 0;
  const assert_1 = requireAssert();
  const hex_1 = requireHex();
  const HEX_MINIMUM_NUMBER_CHARACTER = 48;
  const HEX_MAXIMUM_NUMBER_CHARACTER = 58;
  const HEX_CHARACTER_OFFSET = 87;
  function getPrecomputedHexValuesBuilder() {
    const lookupTable = [];
    return () => {
      if (lookupTable.length === 0) {
        for (let i2 = 0; i2 < 256; i2++) {
          lookupTable.push(i2.toString(16).padStart(2, "0"));
        }
      }
      return lookupTable;
    };
  }
  const getPrecomputedHexValues = getPrecomputedHexValuesBuilder();
  function isBytes(value) {
    return value instanceof Uint8Array;
  }
  bytes.isBytes = isBytes;
  function assertIsBytes(value) {
    (0, assert_1.assert)(isBytes(value), "Value must be a Uint8Array.");
  }
  bytes.assertIsBytes = assertIsBytes;
  function bytesToHex(bytes2) {
    assertIsBytes(bytes2);
    if (bytes2.length === 0) {
      return "0x";
    }
    const lookupTable = getPrecomputedHexValues();
    const hexadecimal = new Array(bytes2.length);
    for (let i2 = 0; i2 < bytes2.length; i2++) {
      hexadecimal[i2] = lookupTable[bytes2[i2]];
    }
    return (0, hex_1.add0x)(hexadecimal.join(""));
  }
  bytes.bytesToHex = bytesToHex;
  function bytesToBigInt(bytes2) {
    assertIsBytes(bytes2);
    const hexadecimal = bytesToHex(bytes2);
    return BigInt(hexadecimal);
  }
  bytes.bytesToBigInt = bytesToBigInt;
  function bytesToSignedBigInt(bytes2) {
    assertIsBytes(bytes2);
    let value = BigInt(0);
    for (const byte of bytes2) {
      value = (value << BigInt(8)) + BigInt(byte);
    }
    return BigInt.asIntN(bytes2.length * 8, value);
  }
  bytes.bytesToSignedBigInt = bytesToSignedBigInt;
  function bytesToNumber(bytes2) {
    assertIsBytes(bytes2);
    const bigint2 = bytesToBigInt(bytes2);
    (0, assert_1.assert)(bigint2 <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead.");
    return Number(bigint2);
  }
  bytes.bytesToNumber = bytesToNumber;
  function bytesToString(bytes2) {
    assertIsBytes(bytes2);
    return new TextDecoder().decode(bytes2);
  }
  bytes.bytesToString = bytesToString;
  function hexToBytes(value) {
    var _a;
    if (((_a = value === null || value === void 0 ? void 0 : value.toLowerCase) === null || _a === void 0 ? void 0 : _a.call(value)) === "0x") {
      return new Uint8Array();
    }
    (0, hex_1.assertIsHexString)(value);
    const strippedValue = (0, hex_1.remove0x)(value).toLowerCase();
    const normalizedValue = strippedValue.length % 2 === 0 ? strippedValue : `0${strippedValue}`;
    const bytes2 = new Uint8Array(normalizedValue.length / 2);
    for (let i2 = 0; i2 < bytes2.length; i2++) {
      const c1 = normalizedValue.charCodeAt(i2 * 2);
      const c2 = normalizedValue.charCodeAt(i2 * 2 + 1);
      const n1 = c1 - (c1 < HEX_MAXIMUM_NUMBER_CHARACTER ? HEX_MINIMUM_NUMBER_CHARACTER : HEX_CHARACTER_OFFSET);
      const n2 = c2 - (c2 < HEX_MAXIMUM_NUMBER_CHARACTER ? HEX_MINIMUM_NUMBER_CHARACTER : HEX_CHARACTER_OFFSET);
      bytes2[i2] = n1 * 16 + n2;
    }
    return bytes2;
  }
  bytes.hexToBytes = hexToBytes;
  function bigIntToBytes(value) {
    (0, assert_1.assert)(typeof value === "bigint", "Value must be a bigint.");
    (0, assert_1.assert)(value >= BigInt(0), "Value must be a non-negative bigint.");
    const hexadecimal = value.toString(16);
    return hexToBytes(hexadecimal);
  }
  bytes.bigIntToBytes = bigIntToBytes;
  function bigIntFits(value, bytes2) {
    (0, assert_1.assert)(bytes2 > 0);
    const mask2 = value >> BigInt(31);
    return !((~value & mask2) + (value & ~mask2) >> BigInt(bytes2 * 8 + -1));
  }
  function signedBigIntToBytes(value, byteLength) {
    (0, assert_1.assert)(typeof value === "bigint", "Value must be a bigint.");
    (0, assert_1.assert)(typeof byteLength === "number", "Byte length must be a number.");
    (0, assert_1.assert)(byteLength > 0, "Byte length must be greater than 0.");
    (0, assert_1.assert)(bigIntFits(value, byteLength), "Byte length is too small to represent the given value.");
    let numberValue = value;
    const bytes2 = new Uint8Array(byteLength);
    for (let i2 = 0; i2 < bytes2.length; i2++) {
      bytes2[i2] = Number(BigInt.asUintN(8, numberValue));
      numberValue >>= BigInt(8);
    }
    return bytes2.reverse();
  }
  bytes.signedBigIntToBytes = signedBigIntToBytes;
  function numberToBytes(value) {
    (0, assert_1.assert)(typeof value === "number", "Value must be a number.");
    (0, assert_1.assert)(value >= 0, "Value must be a non-negative number.");
    (0, assert_1.assert)(Number.isSafeInteger(value), "Value is not a safe integer. Use `bigIntToBytes` instead.");
    const hexadecimal = value.toString(16);
    return hexToBytes(hexadecimal);
  }
  bytes.numberToBytes = numberToBytes;
  function stringToBytes(value) {
    (0, assert_1.assert)(typeof value === "string", "Value must be a string.");
    return new TextEncoder().encode(value);
  }
  bytes.stringToBytes = stringToBytes;
  function valueToBytes(value) {
    if (typeof value === "bigint") {
      return bigIntToBytes(value);
    }
    if (typeof value === "number") {
      return numberToBytes(value);
    }
    if (typeof value === "string") {
      if (value.startsWith("0x")) {
        return hexToBytes(value);
      }
      return stringToBytes(value);
    }
    if (isBytes(value)) {
      return value;
    }
    throw new TypeError(`Unsupported value type: "${typeof value}".`);
  }
  bytes.valueToBytes = valueToBytes;
  function concatBytes(values) {
    const normalizedValues = new Array(values.length);
    let byteLength = 0;
    for (let i2 = 0; i2 < values.length; i2++) {
      const value = valueToBytes(values[i2]);
      normalizedValues[i2] = value;
      byteLength += value.length;
    }
    const bytes2 = new Uint8Array(byteLength);
    for (let i2 = 0, offset = 0; i2 < normalizedValues.length; i2++) {
      bytes2.set(normalizedValues[i2], offset);
      offset += normalizedValues[i2].length;
    }
    return bytes2;
  }
  bytes.concatBytes = concatBytes;
  function createDataView(bytes2) {
    if (typeof Buffer !== "undefined" && bytes2 instanceof Buffer) {
      const buffer = bytes2.buffer.slice(bytes2.byteOffset, bytes2.byteOffset + bytes2.byteLength);
      return new DataView(buffer);
    }
    return new DataView(bytes2.buffer, bytes2.byteOffset, bytes2.byteLength);
  }
  bytes.createDataView = createDataView;
  return bytes;
}
var checksum = {};
var hasRequiredChecksum;
function requireChecksum() {
  if (hasRequiredChecksum) return checksum;
  hasRequiredChecksum = 1;
  Object.defineProperty(checksum, "__esModule", { value: true });
  checksum.ChecksumStruct = void 0;
  const superstruct_1 = require$$1;
  const base64_1 = requireBase64();
  checksum.ChecksumStruct = (0, superstruct_1.size)((0, base64_1.base64)((0, superstruct_1.string)(), { paddingRequired: true }), 44, 44);
  return checksum;
}
var coercers = {};
var hasRequiredCoercers;
function requireCoercers() {
  if (hasRequiredCoercers) return coercers;
  hasRequiredCoercers = 1;
  Object.defineProperty(coercers, "__esModule", { value: true });
  coercers.createHex = coercers.createBytes = coercers.createBigInt = coercers.createNumber = void 0;
  const superstruct_1 = require$$1;
  const assert_1 = requireAssert();
  const bytes_1 = requireBytes();
  const hex_1 = requireHex();
  const NumberLikeStruct = (0, superstruct_1.union)([(0, superstruct_1.number)(), (0, superstruct_1.bigint)(), (0, superstruct_1.string)(), hex_1.StrictHexStruct]);
  const NumberCoercer = (0, superstruct_1.coerce)((0, superstruct_1.number)(), NumberLikeStruct, Number);
  const BigIntCoercer = (0, superstruct_1.coerce)((0, superstruct_1.bigint)(), NumberLikeStruct, BigInt);
  (0, superstruct_1.union)([hex_1.StrictHexStruct, (0, superstruct_1.instance)(Uint8Array)]);
  const BytesCoercer = (0, superstruct_1.coerce)((0, superstruct_1.instance)(Uint8Array), (0, superstruct_1.union)([hex_1.StrictHexStruct]), bytes_1.hexToBytes);
  const HexCoercer = (0, superstruct_1.coerce)(hex_1.StrictHexStruct, (0, superstruct_1.instance)(Uint8Array), bytes_1.bytesToHex);
  function createNumber(value) {
    try {
      const result = (0, superstruct_1.create)(value, NumberCoercer);
      (0, assert_1.assert)(Number.isFinite(result), `Expected a number-like value, got "${value}".`);
      return result;
    } catch (error2) {
      if (error2 instanceof superstruct_1.StructError) {
        throw new Error(`Expected a number-like value, got "${value}".`);
      }
      throw error2;
    }
  }
  coercers.createNumber = createNumber;
  function createBigInt(value) {
    try {
      return (0, superstruct_1.create)(value, BigIntCoercer);
    } catch (error2) {
      if (error2 instanceof superstruct_1.StructError) {
        throw new Error(`Expected a number-like value, got "${String(error2.value)}".`);
      }
      throw error2;
    }
  }
  coercers.createBigInt = createBigInt;
  function createBytes(value) {
    if (typeof value === "string" && value.toLowerCase() === "0x") {
      return new Uint8Array();
    }
    try {
      return (0, superstruct_1.create)(value, BytesCoercer);
    } catch (error2) {
      if (error2 instanceof superstruct_1.StructError) {
        throw new Error(`Expected a bytes-like value, got "${String(error2.value)}".`);
      }
      throw error2;
    }
  }
  coercers.createBytes = createBytes;
  function createHex(value) {
    if (value instanceof Uint8Array && value.length === 0 || typeof value === "string" && value.toLowerCase() === "0x") {
      return "0x";
    }
    try {
      return (0, superstruct_1.create)(value, HexCoercer);
    } catch (error2) {
      if (error2 instanceof superstruct_1.StructError) {
        throw new Error(`Expected a bytes-like value, got "${String(error2.value)}".`);
      }
      throw error2;
    }
  }
  coercers.createHex = createHex;
  return coercers;
}
var collections = {};
var hasRequiredCollections;
function requireCollections() {
  if (hasRequiredCollections) return collections;
  hasRequiredCollections = 1;
  var __classPrivateFieldSet2 = collections && collections.__classPrivateFieldSet || function(receiver, state2, value, kind, f2) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state2 === "function" ? receiver !== state2 || !f2 : !state2.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state2.set(receiver, value), value;
  };
  var __classPrivateFieldGet2 = collections && collections.__classPrivateFieldGet || function(receiver, state2, kind, f2) {
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state2 === "function" ? receiver !== state2 || !f2 : !state2.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state2.get(receiver);
  };
  var _FrozenMap_map, _FrozenSet_set;
  Object.defineProperty(collections, "__esModule", { value: true });
  collections.FrozenSet = collections.FrozenMap = void 0;
  class FrozenMap {
    constructor(entries) {
      _FrozenMap_map.set(this, void 0);
      __classPrivateFieldSet2(this, _FrozenMap_map, new Map(entries), "f");
      Object.freeze(this);
    }
    get size() {
      return __classPrivateFieldGet2(this, _FrozenMap_map, "f").size;
    }
    [(_FrozenMap_map = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
      return __classPrivateFieldGet2(this, _FrozenMap_map, "f")[Symbol.iterator]();
    }
    entries() {
      return __classPrivateFieldGet2(this, _FrozenMap_map, "f").entries();
    }
    forEach(callbackfn, thisArg) {
      return __classPrivateFieldGet2(this, _FrozenMap_map, "f").forEach((value, key, _map) => callbackfn.call(thisArg, value, key, this));
    }
    get(key) {
      return __classPrivateFieldGet2(this, _FrozenMap_map, "f").get(key);
    }
    has(key) {
      return __classPrivateFieldGet2(this, _FrozenMap_map, "f").has(key);
    }
    keys() {
      return __classPrivateFieldGet2(this, _FrozenMap_map, "f").keys();
    }
    values() {
      return __classPrivateFieldGet2(this, _FrozenMap_map, "f").values();
    }
    toString() {
      return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map(([key, value]) => `${String(key)} => ${String(value)}`).join(", ")} ` : ""}}`;
    }
  }
  collections.FrozenMap = FrozenMap;
  class FrozenSet {
    constructor(values) {
      _FrozenSet_set.set(this, void 0);
      __classPrivateFieldSet2(this, _FrozenSet_set, new Set(values), "f");
      Object.freeze(this);
    }
    get size() {
      return __classPrivateFieldGet2(this, _FrozenSet_set, "f").size;
    }
    [(_FrozenSet_set = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
      return __classPrivateFieldGet2(this, _FrozenSet_set, "f")[Symbol.iterator]();
    }
    entries() {
      return __classPrivateFieldGet2(this, _FrozenSet_set, "f").entries();
    }
    forEach(callbackfn, thisArg) {
      return __classPrivateFieldGet2(this, _FrozenSet_set, "f").forEach((value, value2, _set) => callbackfn.call(thisArg, value, value2, this));
    }
    has(value) {
      return __classPrivateFieldGet2(this, _FrozenSet_set, "f").has(value);
    }
    keys() {
      return __classPrivateFieldGet2(this, _FrozenSet_set, "f").keys();
    }
    values() {
      return __classPrivateFieldGet2(this, _FrozenSet_set, "f").values();
    }
    toString() {
      return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map((member) => String(member)).join(", ")} ` : ""}}`;
    }
  }
  collections.FrozenSet = FrozenSet;
  Object.freeze(FrozenMap);
  Object.freeze(FrozenMap.prototype);
  Object.freeze(FrozenSet);
  Object.freeze(FrozenSet.prototype);
  return collections;
}
var encryptionTypes = {};
var hasRequiredEncryptionTypes;
function requireEncryptionTypes() {
  if (hasRequiredEncryptionTypes) return encryptionTypes;
  hasRequiredEncryptionTypes = 1;
  Object.defineProperty(encryptionTypes, "__esModule", { value: true });
  return encryptionTypes;
}
var json = {};
var hasRequiredJson;
function requireJson() {
  if (hasRequiredJson) return json;
  hasRequiredJson = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getJsonRpcIdValidator = exports.assertIsJsonRpcError = exports.isJsonRpcError = exports.assertIsJsonRpcFailure = exports.isJsonRpcFailure = exports.assertIsJsonRpcSuccess = exports.isJsonRpcSuccess = exports.assertIsJsonRpcResponse = exports.isJsonRpcResponse = exports.assertIsPendingJsonRpcResponse = exports.isPendingJsonRpcResponse = exports.JsonRpcResponseStruct = exports.JsonRpcFailureStruct = exports.JsonRpcSuccessStruct = exports.PendingJsonRpcResponseStruct = exports.assertIsJsonRpcRequest = exports.isJsonRpcRequest = exports.assertIsJsonRpcNotification = exports.isJsonRpcNotification = exports.JsonRpcNotificationStruct = exports.JsonRpcRequestStruct = exports.JsonRpcParamsStruct = exports.JsonRpcErrorStruct = exports.JsonRpcIdStruct = exports.JsonRpcVersionStruct = exports.jsonrpc2 = exports.getJsonSize = exports.isValidJson = exports.JsonStruct = exports.UnsafeJsonStruct = void 0;
    const superstruct_1 = require$$1;
    const assert_1 = requireAssert();
    const finiteNumber = () => (0, superstruct_1.define)("finite number", (value) => {
      return (0, superstruct_1.is)(value, (0, superstruct_1.number)()) && Number.isFinite(value);
    });
    exports.UnsafeJsonStruct = (0, superstruct_1.union)([
      (0, superstruct_1.literal)(null),
      (0, superstruct_1.boolean)(),
      finiteNumber(),
      (0, superstruct_1.string)(),
      (0, superstruct_1.array)((0, superstruct_1.lazy)(() => exports.UnsafeJsonStruct)),
      (0, superstruct_1.record)((0, superstruct_1.string)(), (0, superstruct_1.lazy)(() => exports.UnsafeJsonStruct))
    ]);
    exports.JsonStruct = (0, superstruct_1.define)("Json", (value, context) => {
      function checkStruct(innerValue, struct2) {
        const iterator = struct2.validator(innerValue, context);
        const errors2 = [...iterator];
        if (errors2.length > 0) {
          return errors2;
        }
        return true;
      }
      try {
        const unsafeResult = checkStruct(value, exports.UnsafeJsonStruct);
        if (unsafeResult !== true) {
          return unsafeResult;
        }
        return checkStruct(JSON.parse(JSON.stringify(value)), exports.UnsafeJsonStruct);
      } catch (error2) {
        if (error2 instanceof RangeError) {
          return "Circular reference detected";
        }
        return false;
      }
    });
    function isValidJson(value) {
      return (0, superstruct_1.is)(value, exports.JsonStruct);
    }
    exports.isValidJson = isValidJson;
    function getJsonSize(value) {
      (0, assert_1.assertStruct)(value, exports.JsonStruct, "Invalid JSON value");
      const json2 = JSON.stringify(value);
      return new TextEncoder().encode(json2).byteLength;
    }
    exports.getJsonSize = getJsonSize;
    exports.jsonrpc2 = "2.0";
    exports.JsonRpcVersionStruct = (0, superstruct_1.literal)(exports.jsonrpc2);
    exports.JsonRpcIdStruct = (0, superstruct_1.nullable)((0, superstruct_1.union)([(0, superstruct_1.number)(), (0, superstruct_1.string)()]));
    exports.JsonRpcErrorStruct = (0, superstruct_1.object)({
      code: (0, superstruct_1.integer)(),
      message: (0, superstruct_1.string)(),
      data: (0, superstruct_1.optional)(exports.JsonStruct),
      stack: (0, superstruct_1.optional)((0, superstruct_1.string)())
    });
    exports.JsonRpcParamsStruct = (0, superstruct_1.optional)((0, superstruct_1.union)([(0, superstruct_1.record)((0, superstruct_1.string)(), exports.JsonStruct), (0, superstruct_1.array)(exports.JsonStruct)]));
    exports.JsonRpcRequestStruct = (0, superstruct_1.object)({
      id: exports.JsonRpcIdStruct,
      jsonrpc: exports.JsonRpcVersionStruct,
      method: (0, superstruct_1.string)(),
      params: exports.JsonRpcParamsStruct
    });
    exports.JsonRpcNotificationStruct = (0, superstruct_1.omit)(exports.JsonRpcRequestStruct, ["id"]);
    function isJsonRpcNotification(value) {
      return (0, superstruct_1.is)(value, exports.JsonRpcNotificationStruct);
    }
    exports.isJsonRpcNotification = isJsonRpcNotification;
    function assertIsJsonRpcNotification(value, ErrorWrapper) {
      (0, assert_1.assertStruct)(value, exports.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", ErrorWrapper);
    }
    exports.assertIsJsonRpcNotification = assertIsJsonRpcNotification;
    function isJsonRpcRequest(value) {
      return (0, superstruct_1.is)(value, exports.JsonRpcRequestStruct);
    }
    exports.isJsonRpcRequest = isJsonRpcRequest;
    function assertIsJsonRpcRequest(value, ErrorWrapper) {
      (0, assert_1.assertStruct)(value, exports.JsonRpcRequestStruct, "Invalid JSON-RPC request", ErrorWrapper);
    }
    exports.assertIsJsonRpcRequest = assertIsJsonRpcRequest;
    exports.PendingJsonRpcResponseStruct = (0, superstruct_1.object)({
      id: exports.JsonRpcIdStruct,
      jsonrpc: exports.JsonRpcVersionStruct,
      result: (0, superstruct_1.optional)((0, superstruct_1.unknown)()),
      error: (0, superstruct_1.optional)(exports.JsonRpcErrorStruct)
    });
    exports.JsonRpcSuccessStruct = (0, superstruct_1.object)({
      id: exports.JsonRpcIdStruct,
      jsonrpc: exports.JsonRpcVersionStruct,
      result: exports.JsonStruct
    });
    exports.JsonRpcFailureStruct = (0, superstruct_1.object)({
      id: exports.JsonRpcIdStruct,
      jsonrpc: exports.JsonRpcVersionStruct,
      error: exports.JsonRpcErrorStruct
    });
    exports.JsonRpcResponseStruct = (0, superstruct_1.union)([
      exports.JsonRpcSuccessStruct,
      exports.JsonRpcFailureStruct
    ]);
    function isPendingJsonRpcResponse(response) {
      return (0, superstruct_1.is)(response, exports.PendingJsonRpcResponseStruct);
    }
    exports.isPendingJsonRpcResponse = isPendingJsonRpcResponse;
    function assertIsPendingJsonRpcResponse(response, ErrorWrapper) {
      (0, assert_1.assertStruct)(response, exports.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", ErrorWrapper);
    }
    exports.assertIsPendingJsonRpcResponse = assertIsPendingJsonRpcResponse;
    function isJsonRpcResponse(response) {
      return (0, superstruct_1.is)(response, exports.JsonRpcResponseStruct);
    }
    exports.isJsonRpcResponse = isJsonRpcResponse;
    function assertIsJsonRpcResponse(value, ErrorWrapper) {
      (0, assert_1.assertStruct)(value, exports.JsonRpcResponseStruct, "Invalid JSON-RPC response", ErrorWrapper);
    }
    exports.assertIsJsonRpcResponse = assertIsJsonRpcResponse;
    function isJsonRpcSuccess(value) {
      return (0, superstruct_1.is)(value, exports.JsonRpcSuccessStruct);
    }
    exports.isJsonRpcSuccess = isJsonRpcSuccess;
    function assertIsJsonRpcSuccess(value, ErrorWrapper) {
      (0, assert_1.assertStruct)(value, exports.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", ErrorWrapper);
    }
    exports.assertIsJsonRpcSuccess = assertIsJsonRpcSuccess;
    function isJsonRpcFailure(value) {
      return (0, superstruct_1.is)(value, exports.JsonRpcFailureStruct);
    }
    exports.isJsonRpcFailure = isJsonRpcFailure;
    function assertIsJsonRpcFailure(value, ErrorWrapper) {
      (0, assert_1.assertStruct)(value, exports.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", ErrorWrapper);
    }
    exports.assertIsJsonRpcFailure = assertIsJsonRpcFailure;
    function isJsonRpcError(value) {
      return (0, superstruct_1.is)(value, exports.JsonRpcErrorStruct);
    }
    exports.isJsonRpcError = isJsonRpcError;
    function assertIsJsonRpcError(value, ErrorWrapper) {
      (0, assert_1.assertStruct)(value, exports.JsonRpcErrorStruct, "Invalid JSON-RPC error", ErrorWrapper);
    }
    exports.assertIsJsonRpcError = assertIsJsonRpcError;
    function getJsonRpcIdValidator(options) {
      const { permitEmptyString, permitFractions, permitNull } = Object.assign({ permitEmptyString: true, permitFractions: false, permitNull: true }, options);
      const isValidJsonRpcId = (id) => {
        return Boolean(typeof id === "number" && (permitFractions || Number.isInteger(id)) || typeof id === "string" && (permitEmptyString || id.length > 0) || permitNull && id === null);
      };
      return isValidJsonRpcId;
    }
    exports.getJsonRpcIdValidator = getJsonRpcIdValidator;
  })(json);
  return json;
}
var keyring = {};
var hasRequiredKeyring;
function requireKeyring() {
  if (hasRequiredKeyring) return keyring;
  hasRequiredKeyring = 1;
  Object.defineProperty(keyring, "__esModule", { value: true });
  return keyring;
}
var logging = {};
var browser = { exports: {} };
var ms;
var hasRequiredMs;
function requireMs() {
  if (hasRequiredMs) return ms;
  hasRequiredMs = 1;
  var s2 = 1e3;
  var m2 = s2 * 60;
  var h2 = m2 * 60;
  var d2 = h2 * 24;
  var w2 = d2 * 7;
  var y2 = d2 * 365.25;
  ms = function(val, options) {
    options = options || {};
    var type2 = typeof val;
    if (type2 === "string" && val.length > 0) {
      return parse(val);
    } else if (type2 === "number" && isFinite(val)) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
    );
  };
  function parse(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
      str
    );
    if (!match) {
      return;
    }
    var n2 = parseFloat(match[1]);
    var type2 = (match[2] || "ms").toLowerCase();
    switch (type2) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n2 * y2;
      case "weeks":
      case "week":
      case "w":
        return n2 * w2;
      case "days":
      case "day":
      case "d":
        return n2 * d2;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n2 * h2;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n2 * m2;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n2 * s2;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n2;
      default:
        return void 0;
    }
  }
  function fmtShort(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d2) {
      return Math.round(ms2 / d2) + "d";
    }
    if (msAbs >= h2) {
      return Math.round(ms2 / h2) + "h";
    }
    if (msAbs >= m2) {
      return Math.round(ms2 / m2) + "m";
    }
    if (msAbs >= s2) {
      return Math.round(ms2 / s2) + "s";
    }
    return ms2 + "ms";
  }
  function fmtLong(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d2) {
      return plural(ms2, msAbs, d2, "day");
    }
    if (msAbs >= h2) {
      return plural(ms2, msAbs, h2, "hour");
    }
    if (msAbs >= m2) {
      return plural(ms2, msAbs, m2, "minute");
    }
    if (msAbs >= s2) {
      return plural(ms2, msAbs, s2, "second");
    }
    return ms2 + " ms";
  }
  function plural(ms2, msAbs, n2, name) {
    var isPlural = msAbs >= n2 * 1.5;
    return Math.round(ms2 / n2) + " " + name + (isPlural ? "s" : "");
  }
  return ms;
}
var common;
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common;
  hasRequiredCommon = 1;
  function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce2;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = requireMs();
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key) => {
      createDebug[key] = env[key];
    });
    createDebug.names = [];
    createDebug.skips = [];
    createDebug.formatters = {};
    function selectColor(namespace) {
      let hash2 = 0;
      for (let i2 = 0; i2 < namespace.length; i2++) {
        hash2 = (hash2 << 5) - hash2 + namespace.charCodeAt(i2);
        hash2 |= 0;
      }
      return createDebug.colors[Math.abs(hash2) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    function createDebug(namespace) {
      let prevTime;
      let enableOverride = null;
      let namespacesCache;
      let enabledCache;
      function debug(...args) {
        if (!debug.enabled) {
          return;
        }
        const self2 = debug;
        const curr = Number(/* @__PURE__ */ new Date());
        const ms2 = curr - (prevTime || curr);
        self2.diff = ms2;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        args[0] = createDebug.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        let index2 = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
          if (match === "%%") {
            return "%";
          }
          index2++;
          const formatter = createDebug.formatters[format];
          if (typeof formatter === "function") {
            const val = args[index2];
            match = formatter.call(self2, val);
            args.splice(index2, 1);
            index2--;
          }
          return match;
        });
        createDebug.formatArgs.call(self2, args);
        const logFn = self2.log || createDebug.log;
        logFn.apply(self2, args);
      }
      debug.namespace = namespace;
      debug.useColors = createDebug.useColors();
      debug.color = createDebug.selectColor(namespace);
      debug.extend = extend;
      debug.destroy = createDebug.destroy;
      Object.defineProperty(debug, "enabled", {
        enumerable: true,
        configurable: false,
        get: () => {
          if (enableOverride !== null) {
            return enableOverride;
          }
          if (namespacesCache !== createDebug.namespaces) {
            namespacesCache = createDebug.namespaces;
            enabledCache = createDebug.enabled(namespace);
          }
          return enabledCache;
        },
        set: (v2) => {
          enableOverride = v2;
        }
      });
      if (typeof createDebug.init === "function") {
        createDebug.init(debug);
      }
      return debug;
    }
    function extend(namespace, delimiter) {
      const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
      newDebug.log = this.log;
      return newDebug;
    }
    function enable(namespaces) {
      createDebug.save(namespaces);
      createDebug.namespaces = namespaces;
      createDebug.names = [];
      createDebug.skips = [];
      const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const ns of split) {
        if (ns[0] === "-") {
          createDebug.skips.push(ns.slice(1));
        } else {
          createDebug.names.push(ns);
        }
      }
    }
    function matchesTemplate(search, template) {
      let searchIndex = 0;
      let templateIndex = 0;
      let starIndex = -1;
      let matchIndex = 0;
      while (searchIndex < search.length) {
        if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
          if (template[templateIndex] === "*") {
            starIndex = templateIndex;
            matchIndex = searchIndex;
            templateIndex++;
          } else {
            searchIndex++;
            templateIndex++;
          }
        } else if (starIndex !== -1) {
          templateIndex = starIndex + 1;
          matchIndex++;
          searchIndex = matchIndex;
        } else {
          return false;
        }
      }
      while (templateIndex < template.length && template[templateIndex] === "*") {
        templateIndex++;
      }
      return templateIndex === template.length;
    }
    function disable() {
      const namespaces = [
        ...createDebug.names,
        ...createDebug.skips.map((namespace) => "-" + namespace)
      ].join(",");
      createDebug.enable("");
      return namespaces;
    }
    function enabled(name) {
      for (const skip of createDebug.skips) {
        if (matchesTemplate(name, skip)) {
          return false;
        }
      }
      for (const ns of createDebug.names) {
        if (matchesTemplate(name, ns)) {
          return true;
        }
      }
      return false;
    }
    function coerce2(val) {
      if (val instanceof Error) {
        return val.stack || val.message;
      }
      return val;
    }
    function destroy() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug.enable(createDebug.load());
    return createDebug;
  }
  common = setup;
  return common;
}
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser) return browser.exports;
  hasRequiredBrowser = 1;
  (function(module, exports) {
    var define_process_env_default = {};
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m2;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m2 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m2[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c2 = "color: " + this.color;
      args.splice(1, 0, c2, "color: inherit");
      let index2 = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index2++;
        if (match === "%c") {
          lastC = index2;
        }
      });
      args.splice(lastC, 0, c2);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error2) {
      }
    }
    function load() {
      let r2;
      try {
        r2 = exports.storage.getItem("debug") || exports.storage.getItem("DEBUG");
      } catch (error2) {
      }
      if (!r2 && typeof process !== "undefined" && "env" in process) {
        r2 = define_process_env_default.DEBUG;
      }
      return r2;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error2) {
      }
    }
    module.exports = requireCommon()(exports);
    const { formatters } = module.exports;
    formatters.j = function(v2) {
      try {
        return JSON.stringify(v2);
      } catch (error2) {
        return "[UnexpectedJSONParseError]: " + error2.message;
      }
    };
  })(browser, browser.exports);
  return browser.exports;
}
var hasRequiredLogging;
function requireLogging() {
  if (hasRequiredLogging) return logging;
  hasRequiredLogging = 1;
  var __importDefault2 = logging && logging.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(logging, "__esModule", { value: true });
  logging.createModuleLogger = logging.createProjectLogger = void 0;
  const debug_12 = __importDefault2(requireBrowser());
  const globalLogger = (0, debug_12.default)("metamask");
  function createProjectLogger(projectName) {
    return globalLogger.extend(projectName);
  }
  logging.createProjectLogger = createProjectLogger;
  function createModuleLogger(projectLogger, moduleName) {
    return projectLogger.extend(moduleName);
  }
  logging.createModuleLogger = createModuleLogger;
  return logging;
}
var misc = {};
var hasRequiredMisc;
function requireMisc() {
  if (hasRequiredMisc) return misc;
  hasRequiredMisc = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calculateNumberSize = exports.calculateStringSize = exports.isASCII = exports.isPlainObject = exports.ESCAPE_CHARACTERS_REGEXP = exports.JsonSize = exports.hasProperty = exports.isObject = exports.isNullOrUndefined = exports.isNonEmptyArray = void 0;
    function isNonEmptyArray(value) {
      return Array.isArray(value) && value.length > 0;
    }
    exports.isNonEmptyArray = isNonEmptyArray;
    function isNullOrUndefined(value) {
      return value === null || value === void 0;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isObject2(value) {
      return Boolean(value) && typeof value === "object" && !Array.isArray(value);
    }
    exports.isObject = isObject2;
    const hasProperty = (objectToCheck, name) => Object.hasOwnProperty.call(objectToCheck, name);
    exports.hasProperty = hasProperty;
    (function(JsonSize) {
      JsonSize[JsonSize["Null"] = 4] = "Null";
      JsonSize[JsonSize["Comma"] = 1] = "Comma";
      JsonSize[JsonSize["Wrapper"] = 1] = "Wrapper";
      JsonSize[JsonSize["True"] = 4] = "True";
      JsonSize[JsonSize["False"] = 5] = "False";
      JsonSize[JsonSize["Quote"] = 1] = "Quote";
      JsonSize[JsonSize["Colon"] = 1] = "Colon";
      JsonSize[JsonSize["Date"] = 24] = "Date";
    })(exports.JsonSize || (exports.JsonSize = {}));
    exports.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu;
    function isPlainObject2(value) {
      if (typeof value !== "object" || value === null) {
        return false;
      }
      try {
        let proto = value;
        while (Object.getPrototypeOf(proto) !== null) {
          proto = Object.getPrototypeOf(proto);
        }
        return Object.getPrototypeOf(value) === proto;
      } catch (_2) {
        return false;
      }
    }
    exports.isPlainObject = isPlainObject2;
    function isASCII(character) {
      return character.charCodeAt(0) <= 127;
    }
    exports.isASCII = isASCII;
    function calculateStringSize(value) {
      var _a;
      const size2 = value.split("").reduce((total, character) => {
        if (isASCII(character)) {
          return total + 1;
        }
        return total + 2;
      }, 0);
      return size2 + ((_a = value.match(exports.ESCAPE_CHARACTERS_REGEXP)) !== null && _a !== void 0 ? _a : []).length;
    }
    exports.calculateStringSize = calculateStringSize;
    function calculateNumberSize(value) {
      return value.toString().length;
    }
    exports.calculateNumberSize = calculateNumberSize;
  })(misc);
  return misc;
}
var number = {};
var hasRequiredNumber;
function requireNumber() {
  if (hasRequiredNumber) return number;
  hasRequiredNumber = 1;
  Object.defineProperty(number, "__esModule", { value: true });
  number.hexToBigInt = number.hexToNumber = number.bigIntToHex = number.numberToHex = void 0;
  const assert_1 = requireAssert();
  const hex_1 = requireHex();
  const numberToHex = (value) => {
    (0, assert_1.assert)(typeof value === "number", "Value must be a number.");
    (0, assert_1.assert)(value >= 0, "Value must be a non-negative number.");
    (0, assert_1.assert)(Number.isSafeInteger(value), "Value is not a safe integer. Use `bigIntToHex` instead.");
    return (0, hex_1.add0x)(value.toString(16));
  };
  number.numberToHex = numberToHex;
  const bigIntToHex = (value) => {
    (0, assert_1.assert)(typeof value === "bigint", "Value must be a bigint.");
    (0, assert_1.assert)(value >= 0, "Value must be a non-negative bigint.");
    return (0, hex_1.add0x)(value.toString(16));
  };
  number.bigIntToHex = bigIntToHex;
  const hexToNumber = (value) => {
    (0, hex_1.assertIsHexString)(value);
    const numberValue = parseInt(value, 16);
    (0, assert_1.assert)(Number.isSafeInteger(numberValue), "Value is not a safe integer. Use `hexToBigInt` instead.");
    return numberValue;
  };
  number.hexToNumber = hexToNumber;
  const hexToBigInt = (value) => {
    (0, hex_1.assertIsHexString)(value);
    return BigInt((0, hex_1.add0x)(value));
  };
  number.hexToBigInt = hexToBigInt;
  return number;
}
var opaque = {};
var hasRequiredOpaque;
function requireOpaque() {
  if (hasRequiredOpaque) return opaque;
  hasRequiredOpaque = 1;
  Object.defineProperty(opaque, "__esModule", { value: true });
  return opaque;
}
var time = {};
var hasRequiredTime;
function requireTime() {
  if (hasRequiredTime) return time;
  hasRequiredTime = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timeSince = exports.inMilliseconds = exports.Duration = void 0;
    (function(Duration) {
      Duration[Duration["Millisecond"] = 1] = "Millisecond";
      Duration[Duration["Second"] = 1e3] = "Second";
      Duration[Duration["Minute"] = 6e4] = "Minute";
      Duration[Duration["Hour"] = 36e5] = "Hour";
      Duration[Duration["Day"] = 864e5] = "Day";
      Duration[Duration["Week"] = 6048e5] = "Week";
      Duration[Duration["Year"] = 31536e6] = "Year";
    })(exports.Duration || (exports.Duration = {}));
    const isNonNegativeInteger = (number2) => Number.isInteger(number2) && number2 >= 0;
    const assertIsNonNegativeInteger = (number2, name) => {
      if (!isNonNegativeInteger(number2)) {
        throw new Error(`"${name}" must be a non-negative integer. Received: "${number2}".`);
      }
    };
    function inMilliseconds(count, duration) {
      assertIsNonNegativeInteger(count, "count");
      return count * duration;
    }
    exports.inMilliseconds = inMilliseconds;
    function timeSince(timestamp) {
      assertIsNonNegativeInteger(timestamp, "timestamp");
      return Date.now() - timestamp;
    }
    exports.timeSince = timeSince;
  })(time);
  return time;
}
var transactionTypes = {};
var hasRequiredTransactionTypes;
function requireTransactionTypes() {
  if (hasRequiredTransactionTypes) return transactionTypes;
  hasRequiredTransactionTypes = 1;
  Object.defineProperty(transactionTypes, "__esModule", { value: true });
  return transactionTypes;
}
var versions = {};
var re = { exports: {} };
var constants;
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  const SEMVER_SPEC_VERSION = "2.0.0";
  const MAX_LENGTH = 256;
  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991;
  const MAX_SAFE_COMPONENT_LENGTH = 16;
  const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
  const RELEASE_TYPES = [
    "major",
    "premajor",
    "minor",
    "preminor",
    "patch",
    "prepatch",
    "prerelease"
  ];
  constants = {
    MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
  return constants;
}
var debug_1;
var hasRequiredDebug;
function requireDebug() {
  if (hasRequiredDebug) return debug_1;
  hasRequiredDebug = 1;
  var define_process_env_default = {};
  const debug = typeof process === "object" && define_process_env_default && define_process_env_default.NODE_DEBUG && /\bsemver\b/i.test(define_process_env_default.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
  };
  debug_1 = debug;
  return debug_1;
}
var hasRequiredRe;
function requireRe() {
  if (hasRequiredRe) return re.exports;
  hasRequiredRe = 1;
  (function(module, exports) {
    const {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = requireConstants();
    const debug = requireDebug();
    exports = module.exports = {};
    const re2 = exports.re = [];
    const safeRe = exports.safeRe = [];
    const src = exports.src = [];
    const safeSrc = exports.safeSrc = [];
    const t2 = exports.t = {};
    let R = 0;
    const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    const safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    const makeSafeRegex = (value) => {
      for (const [token, max2] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max2}}`).split(`${token}+`).join(`${token}{1,${max2}}`);
      }
      return value;
    };
    const createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index2 = R++;
      debug(name, index2, value);
      t2[name] = index2;
      src[index2] = value;
      safeSrc[index2] = safe;
      re2[index2] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index2] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src[t2.PRERELEASEIDENTIFIER]}(?:\\.${src[t2.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t2.BUILDIDENTIFIER]}(?:\\.${src[t2.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t2.MAINVERSION]}${src[t2.PRERELEASE]}?${src[t2.BUILD]}?`);
    createToken("FULL", `^${src[t2.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t2.MAINVERSIONLOOSE]}${src[t2.PRERELEASELOOSE]}?${src[t2.BUILD]}?`);
    createToken("LOOSE", `^${src[t2.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:${src[t2.PRERELEASE]})?${src[t2.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:${src[t2.PRERELEASELOOSE]})?${src[t2.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t2.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t2.COERCEPLAIN] + `(?:${src[t2.PRERELEASE]})?(?:${src[t2.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t2.COERCE], true);
    createToken("COERCERTLFULL", src[t2.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t2.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t2.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t2.GTLT]}\\s*(${src[t2.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]}|${src[t2.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t2.XRANGEPLAIN]})\\s+-\\s+(${src[t2.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t2.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(re, re.exports);
  return re.exports;
}
var parseOptions_1;
var hasRequiredParseOptions;
function requireParseOptions() {
  if (hasRequiredParseOptions) return parseOptions_1;
  hasRequiredParseOptions = 1;
  const looseOption = Object.freeze({ loose: true });
  const emptyOpts = Object.freeze({});
  const parseOptions = (options) => {
    if (!options) {
      return emptyOpts;
    }
    if (typeof options !== "object") {
      return looseOption;
    }
    return options;
  };
  parseOptions_1 = parseOptions;
  return parseOptions_1;
}
var identifiers;
var hasRequiredIdentifiers;
function requireIdentifiers() {
  if (hasRequiredIdentifiers) return identifiers;
  hasRequiredIdentifiers = 1;
  const numeric = /^[0-9]+$/;
  const compareIdentifiers = (a2, b2) => {
    const anum = numeric.test(a2);
    const bnum = numeric.test(b2);
    if (anum && bnum) {
      a2 = +a2;
      b2 = +b2;
    }
    return a2 === b2 ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a2 < b2 ? -1 : 1;
  };
  const rcompareIdentifiers = (a2, b2) => compareIdentifiers(b2, a2);
  identifiers = {
    compareIdentifiers,
    rcompareIdentifiers
  };
  return identifiers;
}
var semver$1;
var hasRequiredSemver$1;
function requireSemver$1() {
  if (hasRequiredSemver$1) return semver$1;
  hasRequiredSemver$1 = 1;
  const debug = requireDebug();
  const { MAX_LENGTH, MAX_SAFE_INTEGER } = requireConstants();
  const { safeRe: re2, t: t2 } = requireRe();
  const parseOptions = requireParseOptions();
  const { compareIdentifiers } = requireIdentifiers();
  class SemVer {
    constructor(version2, options) {
      options = parseOptions(options);
      if (version2 instanceof SemVer) {
        if (version2.loose === !!options.loose && version2.includePrerelease === !!options.includePrerelease) {
          return version2;
        } else {
          version2 = version2.version;
        }
      } else if (typeof version2 !== "string") {
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
      }
      if (version2.length > MAX_LENGTH) {
        throw new TypeError(
          `version is longer than ${MAX_LENGTH} characters`
        );
      }
      debug("SemVer", version2, options);
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      const m2 = version2.trim().match(options.loose ? re2[t2.LOOSE] : re2[t2.FULL]);
      if (!m2) {
        throw new TypeError(`Invalid Version: ${version2}`);
      }
      this.raw = version2;
      this.major = +m2[1];
      this.minor = +m2[2];
      this.patch = +m2[3];
      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
        throw new TypeError("Invalid major version");
      }
      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
        throw new TypeError("Invalid minor version");
      }
      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
        throw new TypeError("Invalid patch version");
      }
      if (!m2[4]) {
        this.prerelease = [];
      } else {
        this.prerelease = m2[4].split(".").map((id) => {
          if (/^[0-9]+$/.test(id)) {
            const num = +id;
            if (num >= 0 && num < MAX_SAFE_INTEGER) {
              return num;
            }
          }
          return id;
        });
      }
      this.build = m2[5] ? m2[5].split(".") : [];
      this.format();
    }
    format() {
      this.version = `${this.major}.${this.minor}.${this.patch}`;
      if (this.prerelease.length) {
        this.version += `-${this.prerelease.join(".")}`;
      }
      return this.version;
    }
    toString() {
      return this.version;
    }
    compare(other) {
      debug("SemVer.compare", this.version, this.options, other);
      if (!(other instanceof SemVer)) {
        if (typeof other === "string" && other === this.version) {
          return 0;
        }
        other = new SemVer(other, this.options);
      }
      if (other.version === this.version) {
        return 0;
      }
      return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
    }
    comparePre(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      if (this.prerelease.length && !other.prerelease.length) {
        return -1;
      } else if (!this.prerelease.length && other.prerelease.length) {
        return 1;
      } else if (!this.prerelease.length && !other.prerelease.length) {
        return 0;
      }
      let i2 = 0;
      do {
        const a2 = this.prerelease[i2];
        const b2 = other.prerelease[i2];
        debug("prerelease compare", i2, a2, b2);
        if (a2 === void 0 && b2 === void 0) {
          return 0;
        } else if (b2 === void 0) {
          return 1;
        } else if (a2 === void 0) {
          return -1;
        } else if (a2 === b2) {
          continue;
        } else {
          return compareIdentifiers(a2, b2);
        }
      } while (++i2);
    }
    compareBuild(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      let i2 = 0;
      do {
        const a2 = this.build[i2];
        const b2 = other.build[i2];
        debug("build compare", i2, a2, b2);
        if (a2 === void 0 && b2 === void 0) {
          return 0;
        } else if (b2 === void 0) {
          return 1;
        } else if (a2 === void 0) {
          return -1;
        } else if (a2 === b2) {
          continue;
        } else {
          return compareIdentifiers(a2, b2);
        }
      } while (++i2);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier, identifierBase) {
      if (release.startsWith("pre")) {
        if (!identifier && identifierBase === false) {
          throw new Error("invalid increment argument: identifier is empty");
        }
        if (identifier) {
          const match = `-${identifier}`.match(this.options.loose ? re2[t2.PRERELEASELOOSE] : re2[t2.PRERELEASE]);
          if (!match || match[1] !== identifier) {
            throw new Error(`invalid identifier: ${identifier}`);
          }
        }
      }
      switch (release) {
        case "premajor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc("pre", identifier, identifierBase);
          break;
        case "preminor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc("pre", identifier, identifierBase);
          break;
        case "prepatch":
          this.prerelease.length = 0;
          this.inc("patch", identifier, identifierBase);
          this.inc("pre", identifier, identifierBase);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          if (this.prerelease.length === 0) {
            this.inc("patch", identifier, identifierBase);
          }
          this.inc("pre", identifier, identifierBase);
          break;
        case "release":
          if (this.prerelease.length === 0) {
            throw new Error(`version ${this.raw} is not a prerelease`);
          }
          this.prerelease.length = 0;
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++;
          }
          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }
          this.patch = 0;
          this.prerelease = [];
          break;
        case "patch":
          if (this.prerelease.length === 0) {
            this.patch++;
          }
          this.prerelease = [];
          break;
        // This probably shouldn't be used publicly.
        // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
        case "pre": {
          const base = Number(identifierBase) ? 1 : 0;
          if (this.prerelease.length === 0) {
            this.prerelease = [base];
          } else {
            let i2 = this.prerelease.length;
            while (--i2 >= 0) {
              if (typeof this.prerelease[i2] === "number") {
                this.prerelease[i2]++;
                i2 = -2;
              }
            }
            if (i2 === -1) {
              if (identifier === this.prerelease.join(".") && identifierBase === false) {
                throw new Error("invalid increment argument: identifier already exists");
              }
              this.prerelease.push(base);
            }
          }
          if (identifier) {
            let prerelease = [identifier, base];
            if (identifierBase === false) {
              prerelease = [identifier];
            }
            if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = prerelease;
              }
            } else {
              this.prerelease = prerelease;
            }
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${release}`);
      }
      this.raw = this.format();
      if (this.build.length) {
        this.raw += `+${this.build.join(".")}`;
      }
      return this;
    }
  }
  semver$1 = SemVer;
  return semver$1;
}
var parse_1;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse_1;
  hasRequiredParse = 1;
  const SemVer = requireSemver$1();
  const parse = (version2, options, throwErrors = false) => {
    if (version2 instanceof SemVer) {
      return version2;
    }
    try {
      return new SemVer(version2, options);
    } catch (er) {
      if (!throwErrors) {
        return null;
      }
      throw er;
    }
  };
  parse_1 = parse;
  return parse_1;
}
var valid_1;
var hasRequiredValid$1;
function requireValid$1() {
  if (hasRequiredValid$1) return valid_1;
  hasRequiredValid$1 = 1;
  const parse = requireParse();
  const valid2 = (version2, options) => {
    const v2 = parse(version2, options);
    return v2 ? v2.version : null;
  };
  valid_1 = valid2;
  return valid_1;
}
var clean_1;
var hasRequiredClean;
function requireClean() {
  if (hasRequiredClean) return clean_1;
  hasRequiredClean = 1;
  const parse = requireParse();
  const clean = (version2, options) => {
    const s2 = parse(version2.trim().replace(/^[=v]+/, ""), options);
    return s2 ? s2.version : null;
  };
  clean_1 = clean;
  return clean_1;
}
var inc_1;
var hasRequiredInc;
function requireInc() {
  if (hasRequiredInc) return inc_1;
  hasRequiredInc = 1;
  const SemVer = requireSemver$1();
  const inc = (version2, release, options, identifier, identifierBase) => {
    if (typeof options === "string") {
      identifierBase = identifier;
      identifier = options;
      options = void 0;
    }
    try {
      return new SemVer(
        version2 instanceof SemVer ? version2.version : version2,
        options
      ).inc(release, identifier, identifierBase).version;
    } catch (er) {
      return null;
    }
  };
  inc_1 = inc;
  return inc_1;
}
var diff_1;
var hasRequiredDiff;
function requireDiff() {
  if (hasRequiredDiff) return diff_1;
  hasRequiredDiff = 1;
  const parse = requireParse();
  const diff = (version1, version2) => {
    const v1 = parse(version1, null, true);
    const v2 = parse(version2, null, true);
    const comparison = v1.compare(v2);
    if (comparison === 0) {
      return null;
    }
    const v1Higher = comparison > 0;
    const highVersion = v1Higher ? v1 : v2;
    const lowVersion = v1Higher ? v2 : v1;
    const highHasPre = !!highVersion.prerelease.length;
    const lowHasPre = !!lowVersion.prerelease.length;
    if (lowHasPre && !highHasPre) {
      if (!lowVersion.patch && !lowVersion.minor) {
        return "major";
      }
      if (lowVersion.compareMain(highVersion) === 0) {
        if (lowVersion.minor && !lowVersion.patch) {
          return "minor";
        }
        return "patch";
      }
    }
    const prefix = highHasPre ? "pre" : "";
    if (v1.major !== v2.major) {
      return prefix + "major";
    }
    if (v1.minor !== v2.minor) {
      return prefix + "minor";
    }
    if (v1.patch !== v2.patch) {
      return prefix + "patch";
    }
    return "prerelease";
  };
  diff_1 = diff;
  return diff_1;
}
var major_1;
var hasRequiredMajor;
function requireMajor() {
  if (hasRequiredMajor) return major_1;
  hasRequiredMajor = 1;
  const SemVer = requireSemver$1();
  const major = (a2, loose) => new SemVer(a2, loose).major;
  major_1 = major;
  return major_1;
}
var minor_1;
var hasRequiredMinor;
function requireMinor() {
  if (hasRequiredMinor) return minor_1;
  hasRequiredMinor = 1;
  const SemVer = requireSemver$1();
  const minor = (a2, loose) => new SemVer(a2, loose).minor;
  minor_1 = minor;
  return minor_1;
}
var patch_1;
var hasRequiredPatch;
function requirePatch() {
  if (hasRequiredPatch) return patch_1;
  hasRequiredPatch = 1;
  const SemVer = requireSemver$1();
  const patch = (a2, loose) => new SemVer(a2, loose).patch;
  patch_1 = patch;
  return patch_1;
}
var prerelease_1;
var hasRequiredPrerelease;
function requirePrerelease() {
  if (hasRequiredPrerelease) return prerelease_1;
  hasRequiredPrerelease = 1;
  const parse = requireParse();
  const prerelease = (version2, options) => {
    const parsed = parse(version2, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
  };
  prerelease_1 = prerelease;
  return prerelease_1;
}
var compare_1;
var hasRequiredCompare;
function requireCompare() {
  if (hasRequiredCompare) return compare_1;
  hasRequiredCompare = 1;
  const SemVer = requireSemver$1();
  const compare = (a2, b2, loose) => new SemVer(a2, loose).compare(new SemVer(b2, loose));
  compare_1 = compare;
  return compare_1;
}
var rcompare_1;
var hasRequiredRcompare;
function requireRcompare() {
  if (hasRequiredRcompare) return rcompare_1;
  hasRequiredRcompare = 1;
  const compare = requireCompare();
  const rcompare = (a2, b2, loose) => compare(b2, a2, loose);
  rcompare_1 = rcompare;
  return rcompare_1;
}
var compareLoose_1;
var hasRequiredCompareLoose;
function requireCompareLoose() {
  if (hasRequiredCompareLoose) return compareLoose_1;
  hasRequiredCompareLoose = 1;
  const compare = requireCompare();
  const compareLoose = (a2, b2) => compare(a2, b2, true);
  compareLoose_1 = compareLoose;
  return compareLoose_1;
}
var compareBuild_1;
var hasRequiredCompareBuild;
function requireCompareBuild() {
  if (hasRequiredCompareBuild) return compareBuild_1;
  hasRequiredCompareBuild = 1;
  const SemVer = requireSemver$1();
  const compareBuild = (a2, b2, loose) => {
    const versionA = new SemVer(a2, loose);
    const versionB = new SemVer(b2, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
  };
  compareBuild_1 = compareBuild;
  return compareBuild_1;
}
var sort_1;
var hasRequiredSort;
function requireSort() {
  if (hasRequiredSort) return sort_1;
  hasRequiredSort = 1;
  const compareBuild = requireCompareBuild();
  const sort = (list, loose) => list.sort((a2, b2) => compareBuild(a2, b2, loose));
  sort_1 = sort;
  return sort_1;
}
var rsort_1;
var hasRequiredRsort;
function requireRsort() {
  if (hasRequiredRsort) return rsort_1;
  hasRequiredRsort = 1;
  const compareBuild = requireCompareBuild();
  const rsort = (list, loose) => list.sort((a2, b2) => compareBuild(b2, a2, loose));
  rsort_1 = rsort;
  return rsort_1;
}
var gt_1;
var hasRequiredGt;
function requireGt() {
  if (hasRequiredGt) return gt_1;
  hasRequiredGt = 1;
  const compare = requireCompare();
  const gt = (a2, b2, loose) => compare(a2, b2, loose) > 0;
  gt_1 = gt;
  return gt_1;
}
var lt_1;
var hasRequiredLt;
function requireLt() {
  if (hasRequiredLt) return lt_1;
  hasRequiredLt = 1;
  const compare = requireCompare();
  const lt = (a2, b2, loose) => compare(a2, b2, loose) < 0;
  lt_1 = lt;
  return lt_1;
}
var eq_1;
var hasRequiredEq;
function requireEq() {
  if (hasRequiredEq) return eq_1;
  hasRequiredEq = 1;
  const compare = requireCompare();
  const eq = (a2, b2, loose) => compare(a2, b2, loose) === 0;
  eq_1 = eq;
  return eq_1;
}
var neq_1;
var hasRequiredNeq;
function requireNeq() {
  if (hasRequiredNeq) return neq_1;
  hasRequiredNeq = 1;
  const compare = requireCompare();
  const neq = (a2, b2, loose) => compare(a2, b2, loose) !== 0;
  neq_1 = neq;
  return neq_1;
}
var gte_1;
var hasRequiredGte;
function requireGte() {
  if (hasRequiredGte) return gte_1;
  hasRequiredGte = 1;
  const compare = requireCompare();
  const gte = (a2, b2, loose) => compare(a2, b2, loose) >= 0;
  gte_1 = gte;
  return gte_1;
}
var lte_1;
var hasRequiredLte;
function requireLte() {
  if (hasRequiredLte) return lte_1;
  hasRequiredLte = 1;
  const compare = requireCompare();
  const lte = (a2, b2, loose) => compare(a2, b2, loose) <= 0;
  lte_1 = lte;
  return lte_1;
}
var cmp_1;
var hasRequiredCmp;
function requireCmp() {
  if (hasRequiredCmp) return cmp_1;
  hasRequiredCmp = 1;
  const eq = requireEq();
  const neq = requireNeq();
  const gt = requireGt();
  const gte = requireGte();
  const lt = requireLt();
  const lte = requireLte();
  const cmp = (a2, op, b2, loose) => {
    switch (op) {
      case "===":
        if (typeof a2 === "object") {
          a2 = a2.version;
        }
        if (typeof b2 === "object") {
          b2 = b2.version;
        }
        return a2 === b2;
      case "!==":
        if (typeof a2 === "object") {
          a2 = a2.version;
        }
        if (typeof b2 === "object") {
          b2 = b2.version;
        }
        return a2 !== b2;
      case "":
      case "=":
      case "==":
        return eq(a2, b2, loose);
      case "!=":
        return neq(a2, b2, loose);
      case ">":
        return gt(a2, b2, loose);
      case ">=":
        return gte(a2, b2, loose);
      case "<":
        return lt(a2, b2, loose);
      case "<=":
        return lte(a2, b2, loose);
      default:
        throw new TypeError(`Invalid operator: ${op}`);
    }
  };
  cmp_1 = cmp;
  return cmp_1;
}
var coerce_1;
var hasRequiredCoerce;
function requireCoerce() {
  if (hasRequiredCoerce) return coerce_1;
  hasRequiredCoerce = 1;
  const SemVer = requireSemver$1();
  const parse = requireParse();
  const { safeRe: re2, t: t2 } = requireRe();
  const coerce2 = (version2, options) => {
    if (version2 instanceof SemVer) {
      return version2;
    }
    if (typeof version2 === "number") {
      version2 = String(version2);
    }
    if (typeof version2 !== "string") {
      return null;
    }
    options = options || {};
    let match = null;
    if (!options.rtl) {
      match = version2.match(options.includePrerelease ? re2[t2.COERCEFULL] : re2[t2.COERCE]);
    } else {
      const coerceRtlRegex = options.includePrerelease ? re2[t2.COERCERTLFULL] : re2[t2.COERCERTL];
      let next;
      while ((next = coerceRtlRegex.exec(version2)) && (!match || match.index + match[0].length !== version2.length)) {
        if (!match || next.index + next[0].length !== match.index + match[0].length) {
          match = next;
        }
        coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
      }
      coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) {
      return null;
    }
    const major = match[2];
    const minor = match[3] || "0";
    const patch = match[4] || "0";
    const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
    const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
    return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
  };
  coerce_1 = coerce2;
  return coerce_1;
}
var lrucache;
var hasRequiredLrucache;
function requireLrucache() {
  if (hasRequiredLrucache) return lrucache;
  hasRequiredLrucache = 1;
  class LRUCache {
    constructor() {
      this.max = 1e3;
      this.map = /* @__PURE__ */ new Map();
    }
    get(key) {
      const value = this.map.get(key);
      if (value === void 0) {
        return void 0;
      } else {
        this.map.delete(key);
        this.map.set(key, value);
        return value;
      }
    }
    delete(key) {
      return this.map.delete(key);
    }
    set(key, value) {
      const deleted = this.delete(key);
      if (!deleted && value !== void 0) {
        if (this.map.size >= this.max) {
          const firstKey = this.map.keys().next().value;
          this.delete(firstKey);
        }
        this.map.set(key, value);
      }
      return this;
    }
  }
  lrucache = LRUCache;
  return lrucache;
}
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range;
  hasRequiredRange = 1;
  const SPACE_CHARACTERS = /\s+/g;
  class Range {
    constructor(range2, options) {
      options = parseOptions(options);
      if (range2 instanceof Range) {
        if (range2.loose === !!options.loose && range2.includePrerelease === !!options.includePrerelease) {
          return range2;
        } else {
          return new Range(range2.raw, options);
        }
      }
      if (range2 instanceof Comparator) {
        this.raw = range2.value;
        this.set = [[range2]];
        this.formatted = void 0;
        return this;
      }
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      this.raw = range2.trim().replace(SPACE_CHARACTERS, " ");
      this.set = this.raw.split("||").map((r2) => this.parseRange(r2.trim())).filter((c2) => c2.length);
      if (!this.set.length) {
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      }
      if (this.set.length > 1) {
        const first = this.set[0];
        this.set = this.set.filter((c2) => !isNullSet(c2[0]));
        if (this.set.length === 0) {
          this.set = [first];
        } else if (this.set.length > 1) {
          for (const c2 of this.set) {
            if (c2.length === 1 && isAny(c2[0])) {
              this.set = [c2];
              break;
            }
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let i2 = 0; i2 < this.set.length; i2++) {
          if (i2 > 0) {
            this.formatted += "||";
          }
          const comps = this.set[i2];
          for (let k2 = 0; k2 < comps.length; k2++) {
            if (k2 > 0) {
              this.formatted += " ";
            }
            this.formatted += comps[k2].toString().trim();
          }
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(range2) {
      const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
      const memoKey = memoOpts + ":" + range2;
      const cached = cache.get(memoKey);
      if (cached) {
        return cached;
      }
      const loose = this.options.loose;
      const hr = loose ? re2[t2.HYPHENRANGELOOSE] : re2[t2.HYPHENRANGE];
      range2 = range2.replace(hr, hyphenReplace(this.options.includePrerelease));
      debug("hyphen replace", range2);
      range2 = range2.replace(re2[t2.COMPARATORTRIM], comparatorTrimReplace);
      debug("comparator trim", range2);
      range2 = range2.replace(re2[t2.TILDETRIM], tildeTrimReplace);
      debug("tilde trim", range2);
      range2 = range2.replace(re2[t2.CARETTRIM], caretTrimReplace);
      debug("caret trim", range2);
      let rangeList = range2.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
      if (loose) {
        rangeList = rangeList.filter((comp) => {
          debug("loose invalid filter", comp, this.options);
          return !!comp.match(re2[t2.COMPARATORLOOSE]);
        });
      }
      debug("range list", rangeList);
      const rangeMap = /* @__PURE__ */ new Map();
      const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
      for (const comp of comparators) {
        if (isNullSet(comp)) {
          return [comp];
        }
        rangeMap.set(comp.value, comp);
      }
      if (rangeMap.size > 1 && rangeMap.has("")) {
        rangeMap.delete("");
      }
      const result = [...rangeMap.values()];
      cache.set(memoKey, result);
      return result;
    }
    intersects(range2, options) {
      if (!(range2 instanceof Range)) {
        throw new TypeError("a Range is required");
      }
      return this.set.some((thisComparators) => {
        return isSatisfiable(thisComparators, options) && range2.set.some((rangeComparators) => {
          return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
            return rangeComparators.every((rangeComparator) => {
              return thisComparator.intersects(rangeComparator, options);
            });
          });
        });
      });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version2) {
      if (!version2) {
        return false;
      }
      if (typeof version2 === "string") {
        try {
          version2 = new SemVer(version2, this.options);
        } catch (er) {
          return false;
        }
      }
      for (let i2 = 0; i2 < this.set.length; i2++) {
        if (testSet(this.set[i2], version2, this.options)) {
          return true;
        }
      }
      return false;
    }
  }
  range = Range;
  const LRU = requireLrucache();
  const cache = new LRU();
  const parseOptions = requireParseOptions();
  const Comparator = requireComparator();
  const debug = requireDebug();
  const SemVer = requireSemver$1();
  const {
    safeRe: re2,
    t: t2,
    comparatorTrimReplace,
    tildeTrimReplace,
    caretTrimReplace
  } = requireRe();
  const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = requireConstants();
  const isNullSet = (c2) => c2.value === "<0.0.0-0";
  const isAny = (c2) => c2.value === "";
  const isSatisfiable = (comparators, options) => {
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while (result && remainingComparators.length) {
      result = remainingComparators.every((otherComparator) => {
        return testComparator.intersects(otherComparator, options);
      });
      testComparator = remainingComparators.pop();
    }
    return result;
  };
  const parseComparator = (comp, options) => {
    debug("comp", comp, options);
    comp = replaceCarets(comp, options);
    debug("caret", comp);
    comp = replaceTildes(comp, options);
    debug("tildes", comp);
    comp = replaceXRanges(comp, options);
    debug("xrange", comp);
    comp = replaceStars(comp, options);
    debug("stars", comp);
    return comp;
  };
  const isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
  const replaceTildes = (comp, options) => {
    return comp.trim().split(/\s+/).map((c2) => replaceTilde(c2, options)).join(" ");
  };
  const replaceTilde = (comp, options) => {
    const r2 = options.loose ? re2[t2.TILDELOOSE] : re2[t2.TILDE];
    return comp.replace(r2, (_2, M2, m2, p2, pr) => {
      debug("tilde", comp, _2, M2, m2, p2, pr);
      let ret;
      if (isX(M2)) {
        ret = "";
      } else if (isX(m2)) {
        ret = `>=${M2}.0.0 <${+M2 + 1}.0.0-0`;
      } else if (isX(p2)) {
        ret = `>=${M2}.${m2}.0 <${M2}.${+m2 + 1}.0-0`;
      } else if (pr) {
        debug("replaceTilde pr", pr);
        ret = `>=${M2}.${m2}.${p2}-${pr} <${M2}.${+m2 + 1}.0-0`;
      } else {
        ret = `>=${M2}.${m2}.${p2} <${M2}.${+m2 + 1}.0-0`;
      }
      debug("tilde return", ret);
      return ret;
    });
  };
  const replaceCarets = (comp, options) => {
    return comp.trim().split(/\s+/).map((c2) => replaceCaret(c2, options)).join(" ");
  };
  const replaceCaret = (comp, options) => {
    debug("caret", comp, options);
    const r2 = options.loose ? re2[t2.CARETLOOSE] : re2[t2.CARET];
    const z2 = options.includePrerelease ? "-0" : "";
    return comp.replace(r2, (_2, M2, m2, p2, pr) => {
      debug("caret", comp, _2, M2, m2, p2, pr);
      let ret;
      if (isX(M2)) {
        ret = "";
      } else if (isX(m2)) {
        ret = `>=${M2}.0.0${z2} <${+M2 + 1}.0.0-0`;
      } else if (isX(p2)) {
        if (M2 === "0") {
          ret = `>=${M2}.${m2}.0${z2} <${M2}.${+m2 + 1}.0-0`;
        } else {
          ret = `>=${M2}.${m2}.0${z2} <${+M2 + 1}.0.0-0`;
        }
      } else if (pr) {
        debug("replaceCaret pr", pr);
        if (M2 === "0") {
          if (m2 === "0") {
            ret = `>=${M2}.${m2}.${p2}-${pr} <${M2}.${m2}.${+p2 + 1}-0`;
          } else {
            ret = `>=${M2}.${m2}.${p2}-${pr} <${M2}.${+m2 + 1}.0-0`;
          }
        } else {
          ret = `>=${M2}.${m2}.${p2}-${pr} <${+M2 + 1}.0.0-0`;
        }
      } else {
        debug("no pr");
        if (M2 === "0") {
          if (m2 === "0") {
            ret = `>=${M2}.${m2}.${p2}${z2} <${M2}.${m2}.${+p2 + 1}-0`;
          } else {
            ret = `>=${M2}.${m2}.${p2}${z2} <${M2}.${+m2 + 1}.0-0`;
          }
        } else {
          ret = `>=${M2}.${m2}.${p2} <${+M2 + 1}.0.0-0`;
        }
      }
      debug("caret return", ret);
      return ret;
    });
  };
  const replaceXRanges = (comp, options) => {
    debug("replaceXRanges", comp, options);
    return comp.split(/\s+/).map((c2) => replaceXRange(c2, options)).join(" ");
  };
  const replaceXRange = (comp, options) => {
    comp = comp.trim();
    const r2 = options.loose ? re2[t2.XRANGELOOSE] : re2[t2.XRANGE];
    return comp.replace(r2, (ret, gtlt, M2, m2, p2, pr) => {
      debug("xRange", comp, ret, gtlt, M2, m2, p2, pr);
      const xM = isX(M2);
      const xm = xM || isX(m2);
      const xp = xm || isX(p2);
      const anyX = xp;
      if (gtlt === "=" && anyX) {
        gtlt = "";
      }
      pr = options.includePrerelease ? "-0" : "";
      if (xM) {
        if (gtlt === ">" || gtlt === "<") {
          ret = "<0.0.0-0";
        } else {
          ret = "*";
        }
      } else if (gtlt && anyX) {
        if (xm) {
          m2 = 0;
        }
        p2 = 0;
        if (gtlt === ">") {
          gtlt = ">=";
          if (xm) {
            M2 = +M2 + 1;
            m2 = 0;
            p2 = 0;
          } else {
            m2 = +m2 + 1;
            p2 = 0;
          }
        } else if (gtlt === "<=") {
          gtlt = "<";
          if (xm) {
            M2 = +M2 + 1;
          } else {
            m2 = +m2 + 1;
          }
        }
        if (gtlt === "<") {
          pr = "-0";
        }
        ret = `${gtlt + M2}.${m2}.${p2}${pr}`;
      } else if (xm) {
        ret = `>=${M2}.0.0${pr} <${+M2 + 1}.0.0-0`;
      } else if (xp) {
        ret = `>=${M2}.${m2}.0${pr} <${M2}.${+m2 + 1}.0-0`;
      }
      debug("xRange return", ret);
      return ret;
    });
  };
  const replaceStars = (comp, options) => {
    debug("replaceStars", comp, options);
    return comp.trim().replace(re2[t2.STAR], "");
  };
  const replaceGTE0 = (comp, options) => {
    debug("replaceGTE0", comp, options);
    return comp.trim().replace(re2[options.includePrerelease ? t2.GTE0PRE : t2.GTE0], "");
  };
  const hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
    if (isX(fM)) {
      from = "";
    } else if (isX(fm)) {
      from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
    } else if (isX(fp)) {
      from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
    } else if (fpr) {
      from = `>=${from}`;
    } else {
      from = `>=${from}${incPr ? "-0" : ""}`;
    }
    if (isX(tM)) {
      to = "";
    } else if (isX(tm)) {
      to = `<${+tM + 1}.0.0-0`;
    } else if (isX(tp)) {
      to = `<${tM}.${+tm + 1}.0-0`;
    } else if (tpr) {
      to = `<=${tM}.${tm}.${tp}-${tpr}`;
    } else if (incPr) {
      to = `<${tM}.${tm}.${+tp + 1}-0`;
    } else {
      to = `<=${to}`;
    }
    return `${from} ${to}`.trim();
  };
  const testSet = (set2, version2, options) => {
    for (let i2 = 0; i2 < set2.length; i2++) {
      if (!set2[i2].test(version2)) {
        return false;
      }
    }
    if (version2.prerelease.length && !options.includePrerelease) {
      for (let i2 = 0; i2 < set2.length; i2++) {
        debug(set2[i2].semver);
        if (set2[i2].semver === Comparator.ANY) {
          continue;
        }
        if (set2[i2].semver.prerelease.length > 0) {
          const allowed = set2[i2].semver;
          if (allowed.major === version2.major && allowed.minor === version2.minor && allowed.patch === version2.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  };
  return range;
}
var comparator;
var hasRequiredComparator;
function requireComparator() {
  if (hasRequiredComparator) return comparator;
  hasRequiredComparator = 1;
  const ANY = Symbol("SemVer ANY");
  class Comparator {
    static get ANY() {
      return ANY;
    }
    constructor(comp, options) {
      options = parseOptions(options);
      if (comp instanceof Comparator) {
        if (comp.loose === !!options.loose) {
          return comp;
        } else {
          comp = comp.value;
        }
      }
      comp = comp.trim().split(/\s+/).join(" ");
      debug("comparator", comp, options);
      this.options = options;
      this.loose = !!options.loose;
      this.parse(comp);
      if (this.semver === ANY) {
        this.value = "";
      } else {
        this.value = this.operator + this.semver.version;
      }
      debug("comp", this);
    }
    parse(comp) {
      const r2 = this.options.loose ? re2[t2.COMPARATORLOOSE] : re2[t2.COMPARATOR];
      const m2 = comp.match(r2);
      if (!m2) {
        throw new TypeError(`Invalid comparator: ${comp}`);
      }
      this.operator = m2[1] !== void 0 ? m2[1] : "";
      if (this.operator === "=") {
        this.operator = "";
      }
      if (!m2[2]) {
        this.semver = ANY;
      } else {
        this.semver = new SemVer(m2[2], this.options.loose);
      }
    }
    toString() {
      return this.value;
    }
    test(version2) {
      debug("Comparator.test", version2, this.options.loose);
      if (this.semver === ANY || version2 === ANY) {
        return true;
      }
      if (typeof version2 === "string") {
        try {
          version2 = new SemVer(version2, this.options);
        } catch (er) {
          return false;
        }
      }
      return cmp(version2, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
      if (!(comp instanceof Comparator)) {
        throw new TypeError("a Comparator is required");
      }
      if (this.operator === "") {
        if (this.value === "") {
          return true;
        }
        return new Range(comp.value, options).test(this.value);
      } else if (comp.operator === "") {
        if (comp.value === "") {
          return true;
        }
        return new Range(this.value, options).test(comp.semver);
      }
      options = parseOptions(options);
      if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
        return false;
      }
      if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
        return false;
      }
      if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
        return true;
      }
      if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
        return true;
      }
      if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
        return true;
      }
      if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
        return true;
      }
      if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
        return true;
      }
      return false;
    }
  }
  comparator = Comparator;
  const parseOptions = requireParseOptions();
  const { safeRe: re2, t: t2 } = requireRe();
  const cmp = requireCmp();
  const debug = requireDebug();
  const SemVer = requireSemver$1();
  const Range = requireRange();
  return comparator;
}
var satisfies_1;
var hasRequiredSatisfies;
function requireSatisfies() {
  if (hasRequiredSatisfies) return satisfies_1;
  hasRequiredSatisfies = 1;
  const Range = requireRange();
  const satisfies = (version2, range2, options) => {
    try {
      range2 = new Range(range2, options);
    } catch (er) {
      return false;
    }
    return range2.test(version2);
  };
  satisfies_1 = satisfies;
  return satisfies_1;
}
var toComparators_1;
var hasRequiredToComparators;
function requireToComparators() {
  if (hasRequiredToComparators) return toComparators_1;
  hasRequiredToComparators = 1;
  const Range = requireRange();
  const toComparators = (range2, options) => new Range(range2, options).set.map((comp) => comp.map((c2) => c2.value).join(" ").trim().split(" "));
  toComparators_1 = toComparators;
  return toComparators_1;
}
var maxSatisfying_1;
var hasRequiredMaxSatisfying;
function requireMaxSatisfying() {
  if (hasRequiredMaxSatisfying) return maxSatisfying_1;
  hasRequiredMaxSatisfying = 1;
  const SemVer = requireSemver$1();
  const Range = requireRange();
  const maxSatisfying = (versions2, range2, options) => {
    let max2 = null;
    let maxSV = null;
    let rangeObj = null;
    try {
      rangeObj = new Range(range2, options);
    } catch (er) {
      return null;
    }
    versions2.forEach((v2) => {
      if (rangeObj.test(v2)) {
        if (!max2 || maxSV.compare(v2) === -1) {
          max2 = v2;
          maxSV = new SemVer(max2, options);
        }
      }
    });
    return max2;
  };
  maxSatisfying_1 = maxSatisfying;
  return maxSatisfying_1;
}
var minSatisfying_1;
var hasRequiredMinSatisfying;
function requireMinSatisfying() {
  if (hasRequiredMinSatisfying) return minSatisfying_1;
  hasRequiredMinSatisfying = 1;
  const SemVer = requireSemver$1();
  const Range = requireRange();
  const minSatisfying = (versions2, range2, options) => {
    let min2 = null;
    let minSV = null;
    let rangeObj = null;
    try {
      rangeObj = new Range(range2, options);
    } catch (er) {
      return null;
    }
    versions2.forEach((v2) => {
      if (rangeObj.test(v2)) {
        if (!min2 || minSV.compare(v2) === 1) {
          min2 = v2;
          minSV = new SemVer(min2, options);
        }
      }
    });
    return min2;
  };
  minSatisfying_1 = minSatisfying;
  return minSatisfying_1;
}
var minVersion_1;
var hasRequiredMinVersion;
function requireMinVersion() {
  if (hasRequiredMinVersion) return minVersion_1;
  hasRequiredMinVersion = 1;
  const SemVer = requireSemver$1();
  const Range = requireRange();
  const gt = requireGt();
  const minVersion = (range2, loose) => {
    range2 = new Range(range2, loose);
    let minver = new SemVer("0.0.0");
    if (range2.test(minver)) {
      return minver;
    }
    minver = new SemVer("0.0.0-0");
    if (range2.test(minver)) {
      return minver;
    }
    minver = null;
    for (let i2 = 0; i2 < range2.set.length; ++i2) {
      const comparators = range2.set[i2];
      let setMin = null;
      comparators.forEach((comparator2) => {
        const compver = new SemVer(comparator2.semver.version);
        switch (comparator2.operator) {
          case ">":
            if (compver.prerelease.length === 0) {
              compver.patch++;
            } else {
              compver.prerelease.push(0);
            }
            compver.raw = compver.format();
          /* fallthrough */
          case "":
          case ">=":
            if (!setMin || gt(compver, setMin)) {
              setMin = compver;
            }
            break;
          case "<":
          case "<=":
            break;
          /* istanbul ignore next */
          default:
            throw new Error(`Unexpected operation: ${comparator2.operator}`);
        }
      });
      if (setMin && (!minver || gt(minver, setMin))) {
        minver = setMin;
      }
    }
    if (minver && range2.test(minver)) {
      return minver;
    }
    return null;
  };
  minVersion_1 = minVersion;
  return minVersion_1;
}
var valid;
var hasRequiredValid;
function requireValid() {
  if (hasRequiredValid) return valid;
  hasRequiredValid = 1;
  const Range = requireRange();
  const validRange = (range2, options) => {
    try {
      return new Range(range2, options).range || "*";
    } catch (er) {
      return null;
    }
  };
  valid = validRange;
  return valid;
}
var outside_1;
var hasRequiredOutside;
function requireOutside() {
  if (hasRequiredOutside) return outside_1;
  hasRequiredOutside = 1;
  const SemVer = requireSemver$1();
  const Comparator = requireComparator();
  const { ANY } = Comparator;
  const Range = requireRange();
  const satisfies = requireSatisfies();
  const gt = requireGt();
  const lt = requireLt();
  const lte = requireLte();
  const gte = requireGte();
  const outside = (version2, range2, hilo, options) => {
    version2 = new SemVer(version2, options);
    range2 = new Range(range2, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch (hilo) {
      case ">":
        gtfn = gt;
        ltefn = lte;
        ltfn = lt;
        comp = ">";
        ecomp = ">=";
        break;
      case "<":
        gtfn = lt;
        ltefn = gte;
        ltfn = gt;
        comp = "<";
        ecomp = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (satisfies(version2, range2, options)) {
      return false;
    }
    for (let i2 = 0; i2 < range2.set.length; ++i2) {
      const comparators = range2.set[i2];
      let high = null;
      let low = null;
      comparators.forEach((comparator2) => {
        if (comparator2.semver === ANY) {
          comparator2 = new Comparator(">=0.0.0");
        }
        high = high || comparator2;
        low = low || comparator2;
        if (gtfn(comparator2.semver, high.semver, options)) {
          high = comparator2;
        } else if (ltfn(comparator2.semver, low.semver, options)) {
          low = comparator2;
        }
      });
      if (high.operator === comp || high.operator === ecomp) {
        return false;
      }
      if ((!low.operator || low.operator === comp) && ltefn(version2, low.semver)) {
        return false;
      } else if (low.operator === ecomp && ltfn(version2, low.semver)) {
        return false;
      }
    }
    return true;
  };
  outside_1 = outside;
  return outside_1;
}
var gtr_1;
var hasRequiredGtr;
function requireGtr() {
  if (hasRequiredGtr) return gtr_1;
  hasRequiredGtr = 1;
  const outside = requireOutside();
  const gtr = (version2, range2, options) => outside(version2, range2, ">", options);
  gtr_1 = gtr;
  return gtr_1;
}
var ltr_1;
var hasRequiredLtr;
function requireLtr() {
  if (hasRequiredLtr) return ltr_1;
  hasRequiredLtr = 1;
  const outside = requireOutside();
  const ltr = (version2, range2, options) => outside(version2, range2, "<", options);
  ltr_1 = ltr;
  return ltr_1;
}
var intersects_1;
var hasRequiredIntersects;
function requireIntersects() {
  if (hasRequiredIntersects) return intersects_1;
  hasRequiredIntersects = 1;
  const Range = requireRange();
  const intersects = (r1, r2, options) => {
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2, options);
  };
  intersects_1 = intersects;
  return intersects_1;
}
var simplify;
var hasRequiredSimplify;
function requireSimplify() {
  if (hasRequiredSimplify) return simplify;
  hasRequiredSimplify = 1;
  const satisfies = requireSatisfies();
  const compare = requireCompare();
  simplify = (versions2, range2, options) => {
    const set2 = [];
    let first = null;
    let prev = null;
    const v2 = versions2.sort((a2, b2) => compare(a2, b2, options));
    for (const version2 of v2) {
      const included = satisfies(version2, range2, options);
      if (included) {
        prev = version2;
        if (!first) {
          first = version2;
        }
      } else {
        if (prev) {
          set2.push([first, prev]);
        }
        prev = null;
        first = null;
      }
    }
    if (first) {
      set2.push([first, null]);
    }
    const ranges = [];
    for (const [min2, max2] of set2) {
      if (min2 === max2) {
        ranges.push(min2);
      } else if (!max2 && min2 === v2[0]) {
        ranges.push("*");
      } else if (!max2) {
        ranges.push(`>=${min2}`);
      } else if (min2 === v2[0]) {
        ranges.push(`<=${max2}`);
      } else {
        ranges.push(`${min2} - ${max2}`);
      }
    }
    const simplified = ranges.join(" || ");
    const original = typeof range2.raw === "string" ? range2.raw : String(range2);
    return simplified.length < original.length ? simplified : range2;
  };
  return simplify;
}
var subset_1;
var hasRequiredSubset;
function requireSubset() {
  if (hasRequiredSubset) return subset_1;
  hasRequiredSubset = 1;
  const Range = requireRange();
  const Comparator = requireComparator();
  const { ANY } = Comparator;
  const satisfies = requireSatisfies();
  const compare = requireCompare();
  const subset = (sub, dom, options = {}) => {
    if (sub === dom) {
      return true;
    }
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (const simpleSub of sub.set) {
      for (const simpleDom of dom.set) {
        const isSub = simpleSubset(simpleSub, simpleDom, options);
        sawNonNull = sawNonNull || isSub !== null;
        if (isSub) {
          continue OUTER;
        }
      }
      if (sawNonNull) {
        return false;
      }
    }
    return true;
  };
  const minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
  const minimumVersion = [new Comparator(">=0.0.0")];
  const simpleSubset = (sub, dom, options) => {
    if (sub === dom) {
      return true;
    }
    if (sub.length === 1 && sub[0].semver === ANY) {
      if (dom.length === 1 && dom[0].semver === ANY) {
        return true;
      } else if (options.includePrerelease) {
        sub = minimumVersionWithPreRelease;
      } else {
        sub = minimumVersion;
      }
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
      if (options.includePrerelease) {
        return true;
      } else {
        dom = minimumVersion;
      }
    }
    const eqSet = /* @__PURE__ */ new Set();
    let gt, lt;
    for (const c2 of sub) {
      if (c2.operator === ">" || c2.operator === ">=") {
        gt = higherGT(gt, c2, options);
      } else if (c2.operator === "<" || c2.operator === "<=") {
        lt = lowerLT(lt, c2, options);
      } else {
        eqSet.add(c2.semver);
      }
    }
    if (eqSet.size > 1) {
      return null;
    }
    let gtltComp;
    if (gt && lt) {
      gtltComp = compare(gt.semver, lt.semver, options);
      if (gtltComp > 0) {
        return null;
      } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
        return null;
      }
    }
    for (const eq of eqSet) {
      if (gt && !satisfies(eq, String(gt), options)) {
        return null;
      }
      if (lt && !satisfies(eq, String(lt), options)) {
        return null;
      }
      for (const c2 of dom) {
        if (!satisfies(eq, String(c2), options)) {
          return false;
        }
      }
      return true;
    }
    let higher, lower;
    let hasDomLT, hasDomGT;
    let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
      needDomLTPre = false;
    }
    for (const c2 of dom) {
      hasDomGT = hasDomGT || c2.operator === ">" || c2.operator === ">=";
      hasDomLT = hasDomLT || c2.operator === "<" || c2.operator === "<=";
      if (gt) {
        if (needDomGTPre) {
          if (c2.semver.prerelease && c2.semver.prerelease.length && c2.semver.major === needDomGTPre.major && c2.semver.minor === needDomGTPre.minor && c2.semver.patch === needDomGTPre.patch) {
            needDomGTPre = false;
          }
        }
        if (c2.operator === ">" || c2.operator === ">=") {
          higher = higherGT(gt, c2, options);
          if (higher === c2 && higher !== gt) {
            return false;
          }
        } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c2), options)) {
          return false;
        }
      }
      if (lt) {
        if (needDomLTPre) {
          if (c2.semver.prerelease && c2.semver.prerelease.length && c2.semver.major === needDomLTPre.major && c2.semver.minor === needDomLTPre.minor && c2.semver.patch === needDomLTPre.patch) {
            needDomLTPre = false;
          }
        }
        if (c2.operator === "<" || c2.operator === "<=") {
          lower = lowerLT(lt, c2, options);
          if (lower === c2 && lower !== lt) {
            return false;
          }
        } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c2), options)) {
          return false;
        }
      }
      if (!c2.operator && (lt || gt) && gtltComp !== 0) {
        return false;
      }
    }
    if (gt && hasDomLT && !lt && gtltComp !== 0) {
      return false;
    }
    if (lt && hasDomGT && !gt && gtltComp !== 0) {
      return false;
    }
    if (needDomGTPre || needDomLTPre) {
      return false;
    }
    return true;
  };
  const higherGT = (a2, b2, options) => {
    if (!a2) {
      return b2;
    }
    const comp = compare(a2.semver, b2.semver, options);
    return comp > 0 ? a2 : comp < 0 ? b2 : b2.operator === ">" && a2.operator === ">=" ? b2 : a2;
  };
  const lowerLT = (a2, b2, options) => {
    if (!a2) {
      return b2;
    }
    const comp = compare(a2.semver, b2.semver, options);
    return comp < 0 ? a2 : comp > 0 ? b2 : b2.operator === "<" && a2.operator === "<=" ? b2 : a2;
  };
  subset_1 = subset;
  return subset_1;
}
var semver;
var hasRequiredSemver;
function requireSemver() {
  if (hasRequiredSemver) return semver;
  hasRequiredSemver = 1;
  const internalRe = requireRe();
  const constants2 = requireConstants();
  const SemVer = requireSemver$1();
  const identifiers2 = requireIdentifiers();
  const parse = requireParse();
  const valid2 = requireValid$1();
  const clean = requireClean();
  const inc = requireInc();
  const diff = requireDiff();
  const major = requireMajor();
  const minor = requireMinor();
  const patch = requirePatch();
  const prerelease = requirePrerelease();
  const compare = requireCompare();
  const rcompare = requireRcompare();
  const compareLoose = requireCompareLoose();
  const compareBuild = requireCompareBuild();
  const sort = requireSort();
  const rsort = requireRsort();
  const gt = requireGt();
  const lt = requireLt();
  const eq = requireEq();
  const neq = requireNeq();
  const gte = requireGte();
  const lte = requireLte();
  const cmp = requireCmp();
  const coerce2 = requireCoerce();
  const Comparator = requireComparator();
  const Range = requireRange();
  const satisfies = requireSatisfies();
  const toComparators = requireToComparators();
  const maxSatisfying = requireMaxSatisfying();
  const minSatisfying = requireMinSatisfying();
  const minVersion = requireMinVersion();
  const validRange = requireValid();
  const outside = requireOutside();
  const gtr = requireGtr();
  const ltr = requireLtr();
  const intersects = requireIntersects();
  const simplifyRange = requireSimplify();
  const subset = requireSubset();
  semver = {
    parse,
    valid: valid2,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare,
    rcompare,
    compareLoose,
    compareBuild,
    sort,
    rsort,
    gt,
    lt,
    eq,
    neq,
    gte,
    lte,
    cmp,
    coerce: coerce2,
    Comparator,
    Range,
    satisfies,
    toComparators,
    maxSatisfying,
    minSatisfying,
    minVersion,
    validRange,
    outside,
    gtr,
    ltr,
    intersects,
    simplifyRange,
    subset,
    SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants2.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: constants2.RELEASE_TYPES,
    compareIdentifiers: identifiers2.compareIdentifiers,
    rcompareIdentifiers: identifiers2.rcompareIdentifiers
  };
  return semver;
}
var hasRequiredVersions;
function requireVersions() {
  if (hasRequiredVersions) return versions;
  hasRequiredVersions = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.satisfiesVersionRange = exports.gtRange = exports.gtVersion = exports.assertIsSemVerRange = exports.assertIsSemVerVersion = exports.isValidSemVerRange = exports.isValidSemVerVersion = exports.VersionRangeStruct = exports.VersionStruct = void 0;
    const semver_1 = requireSemver();
    const superstruct_1 = require$$1;
    const assert_1 = requireAssert();
    exports.VersionStruct = (0, superstruct_1.refine)((0, superstruct_1.string)(), "Version", (value) => {
      if ((0, semver_1.valid)(value) === null) {
        return `Expected SemVer version, got "${value}"`;
      }
      return true;
    });
    exports.VersionRangeStruct = (0, superstruct_1.refine)((0, superstruct_1.string)(), "Version range", (value) => {
      if ((0, semver_1.validRange)(value) === null) {
        return `Expected SemVer range, got "${value}"`;
      }
      return true;
    });
    function isValidSemVerVersion(version2) {
      return (0, superstruct_1.is)(version2, exports.VersionStruct);
    }
    exports.isValidSemVerVersion = isValidSemVerVersion;
    function isValidSemVerRange(versionRange) {
      return (0, superstruct_1.is)(versionRange, exports.VersionRangeStruct);
    }
    exports.isValidSemVerRange = isValidSemVerRange;
    function assertIsSemVerVersion(version2) {
      (0, assert_1.assertStruct)(version2, exports.VersionStruct);
    }
    exports.assertIsSemVerVersion = assertIsSemVerVersion;
    function assertIsSemVerRange(range2) {
      (0, assert_1.assertStruct)(range2, exports.VersionRangeStruct);
    }
    exports.assertIsSemVerRange = assertIsSemVerRange;
    function gtVersion(version1, version2) {
      return (0, semver_1.gt)(version1, version2);
    }
    exports.gtVersion = gtVersion;
    function gtRange(version2, range2) {
      return (0, semver_1.gtr)(version2, range2);
    }
    exports.gtRange = gtRange;
    function satisfiesVersionRange(version2, versionRange) {
      return (0, semver_1.satisfies)(version2, versionRange, {
        includePrerelease: true
      });
    }
    exports.satisfiesVersionRange = satisfiesVersionRange;
  })(versions);
  return versions;
}
var hasRequiredDist$4;
function requireDist$4() {
  if (hasRequiredDist$4) return dist$3;
  hasRequiredDist$4 = 1;
  (function(exports) {
    var __createBinding2 = dist$3 && dist$3.__createBinding || (Object.create ? (function(o2, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m2, k2);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k2];
        } };
      }
      Object.defineProperty(o2, k22, desc);
    }) : (function(o2, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      o2[k22] = m2[k2];
    }));
    var __exportStar2 = dist$3 && dist$3.__exportStar || function(m2, exports2) {
      for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding2(exports2, m2, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar2(requireAssert(), exports);
    __exportStar2(requireBase64(), exports);
    __exportStar2(requireBytes(), exports);
    __exportStar2(requireChecksum(), exports);
    __exportStar2(requireCoercers(), exports);
    __exportStar2(requireCollections(), exports);
    __exportStar2(requireEncryptionTypes(), exports);
    __exportStar2(requireHex(), exports);
    __exportStar2(requireJson(), exports);
    __exportStar2(requireKeyring(), exports);
    __exportStar2(requireLogging(), exports);
    __exportStar2(requireMisc(), exports);
    __exportStar2(requireNumber(), exports);
    __exportStar2(requireOpaque(), exports);
    __exportStar2(requireTime(), exports);
    __exportStar2(requireTransactionTypes(), exports);
    __exportStar2(requireVersions(), exports);
  })(dist$3);
  return dist$3;
}
var hasRequiredLoggingUtils;
function requireLoggingUtils() {
  if (hasRequiredLoggingUtils) return loggingUtils;
  hasRequiredLoggingUtils = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createModuleLogger = exports.projectLogger = void 0;
    const utils_1 = requireDist$4();
    Object.defineProperty(exports, "createModuleLogger", { enumerable: true, get: function() {
      return utils_1.createModuleLogger;
    } });
    exports.projectLogger = (0, utils_1.createProjectLogger)("eth-block-tracker");
  })(loggingUtils);
  return loggingUtils;
}
var hasRequiredPollingBlockTracker;
function requirePollingBlockTracker() {
  if (hasRequiredPollingBlockTracker) return PollingBlockTracker;
  hasRequiredPollingBlockTracker = 1;
  var __importDefault2 = PollingBlockTracker && PollingBlockTracker.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(PollingBlockTracker, "__esModule", { value: true });
  PollingBlockTracker.PollingBlockTracker = void 0;
  const json_rpc_random_id_1 = __importDefault2(requireJsonRpcRandomId());
  const pify_1 = __importDefault2(requirePify$1());
  const BaseBlockTracker_1 = requireBaseBlockTracker();
  const logging_utils_1 = requireLoggingUtils();
  const log = (0, logging_utils_1.createModuleLogger)(logging_utils_1.projectLogger, "polling-block-tracker");
  const createRandomId = (0, json_rpc_random_id_1.default)();
  const sec = 1e3;
  let PollingBlockTracker$1 = class PollingBlockTracker extends BaseBlockTracker_1.BaseBlockTracker {
    constructor(opts = {}) {
      var _a;
      if (!opts.provider) {
        throw new Error("PollingBlockTracker - no provider specified.");
      }
      super(Object.assign(Object.assign({}, opts), { blockResetDuration: (_a = opts.blockResetDuration) !== null && _a !== void 0 ? _a : opts.pollingInterval }));
      this._provider = opts.provider;
      this._pollingInterval = opts.pollingInterval || 20 * sec;
      this._retryTimeout = opts.retryTimeout || this._pollingInterval / 10;
      this._keepEventLoopActive = opts.keepEventLoopActive === void 0 ? true : opts.keepEventLoopActive;
      this._setSkipCacheFlag = opts.setSkipCacheFlag || false;
    }
    // trigger block polling
    async checkForLatestBlock() {
      await this._updateLatestBlock();
      return await this.getLatestBlock();
    }
    async _start() {
      this._synchronize();
    }
    async _end() {
    }
    async _synchronize() {
      var _a;
      while (this._isRunning) {
        try {
          await this._updateLatestBlock();
          const promise = timeout(this._pollingInterval, !this._keepEventLoopActive);
          this.emit("_waitingForNextIteration");
          await promise;
        } catch (err) {
          const newErr = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${(_a = err.stack) !== null && _a !== void 0 ? _a : err}`);
          try {
            this.emit("error", newErr);
          } catch (emitErr) {
            console.error(newErr);
          }
          const promise = timeout(this._retryTimeout, !this._keepEventLoopActive);
          this.emit("_waitingForNextIteration");
          await promise;
        }
      }
    }
    async _updateLatestBlock() {
      const latestBlock = await this._fetchLatestBlock();
      this._newPotentialLatest(latestBlock);
    }
    async _fetchLatestBlock() {
      const req = {
        jsonrpc: "2.0",
        id: createRandomId(),
        method: "eth_blockNumber",
        params: []
      };
      if (this._setSkipCacheFlag) {
        req.skipCache = true;
      }
      log("Making request", req);
      const res = await (0, pify_1.default)((cb) => this._provider.sendAsync(req, cb))();
      log("Got response", res);
      if (res.error) {
        throw new Error(`PollingBlockTracker - encountered error fetching block:
${res.error.message}`);
      }
      return res.result;
    }
  };
  PollingBlockTracker.PollingBlockTracker = PollingBlockTracker$1;
  function timeout(duration, unref) {
    return new Promise((resolve) => {
      const timeoutRef = setTimeout(resolve, duration);
      if (timeoutRef.unref && unref) {
        timeoutRef.unref();
      }
    });
  }
  return PollingBlockTracker;
}
var SubscribeBlockTracker = {};
var hasRequiredSubscribeBlockTracker;
function requireSubscribeBlockTracker() {
  if (hasRequiredSubscribeBlockTracker) return SubscribeBlockTracker;
  hasRequiredSubscribeBlockTracker = 1;
  var __importDefault2 = SubscribeBlockTracker && SubscribeBlockTracker.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(SubscribeBlockTracker, "__esModule", { value: true });
  SubscribeBlockTracker.SubscribeBlockTracker = void 0;
  const json_rpc_random_id_1 = __importDefault2(requireJsonRpcRandomId());
  const BaseBlockTracker_1 = requireBaseBlockTracker();
  const createRandomId = (0, json_rpc_random_id_1.default)();
  let SubscribeBlockTracker$1 = class SubscribeBlockTracker extends BaseBlockTracker_1.BaseBlockTracker {
    constructor(opts = {}) {
      if (!opts.provider) {
        throw new Error("SubscribeBlockTracker - no provider specified.");
      }
      super(opts);
      this._provider = opts.provider;
      this._subscriptionId = null;
    }
    async checkForLatestBlock() {
      return await this.getLatestBlock();
    }
    async _start() {
      if (this._subscriptionId === void 0 || this._subscriptionId === null) {
        try {
          const blockNumber = await this._call("eth_blockNumber");
          this._subscriptionId = await this._call("eth_subscribe", "newHeads");
          this._provider.on("data", this._handleSubData.bind(this));
          this._newPotentialLatest(blockNumber);
        } catch (e2) {
          this.emit("error", e2);
        }
      }
    }
    async _end() {
      if (this._subscriptionId !== null && this._subscriptionId !== void 0) {
        try {
          await this._call("eth_unsubscribe", this._subscriptionId);
          this._subscriptionId = null;
        } catch (e2) {
          this.emit("error", e2);
        }
      }
    }
    _call(method, ...params) {
      return new Promise((resolve, reject) => {
        this._provider.sendAsync({
          id: createRandomId(),
          method,
          params,
          jsonrpc: "2.0"
        }, (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res.result);
          }
        });
      });
    }
    _handleSubData(_2, response) {
      var _a;
      if (response.method === "eth_subscription" && ((_a = response.params) === null || _a === void 0 ? void 0 : _a.subscription) === this._subscriptionId) {
        this._newPotentialLatest(response.params.result.number);
      }
    }
  };
  SubscribeBlockTracker.SubscribeBlockTracker = SubscribeBlockTracker$1;
  return SubscribeBlockTracker;
}
var hasRequiredDist$3;
function requireDist$3() {
  if (hasRequiredDist$3) return dist$4;
  hasRequiredDist$3 = 1;
  (function(exports) {
    var __createBinding2 = dist$4 && dist$4.__createBinding || (Object.create ? (function(o2, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      Object.defineProperty(o2, k22, { enumerable: true, get: function() {
        return m2[k2];
      } });
    }) : (function(o2, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      o2[k22] = m2[k2];
    }));
    var __exportStar2 = dist$4 && dist$4.__exportStar || function(m2, exports2) {
      for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding2(exports2, m2, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar2(requirePollingBlockTracker(), exports);
    __exportStar2(requireSubscribeBlockTracker(), exports);
  })(dist$4);
  return dist$4;
}
var dist$1 = {};
var idRemapMiddleware = {};
var getUniqueId = {};
var hasRequiredGetUniqueId;
function requireGetUniqueId() {
  if (hasRequiredGetUniqueId) return getUniqueId;
  hasRequiredGetUniqueId = 1;
  Object.defineProperty(getUniqueId, "__esModule", { value: true });
  getUniqueId.getUniqueId = void 0;
  const MAX = 4294967295;
  let idCounter = Math.floor(Math.random() * MAX);
  function getUniqueId$1() {
    idCounter = (idCounter + 1) % MAX;
    return idCounter;
  }
  getUniqueId.getUniqueId = getUniqueId$1;
  return getUniqueId;
}
var hasRequiredIdRemapMiddleware;
function requireIdRemapMiddleware() {
  if (hasRequiredIdRemapMiddleware) return idRemapMiddleware;
  hasRequiredIdRemapMiddleware = 1;
  Object.defineProperty(idRemapMiddleware, "__esModule", { value: true });
  idRemapMiddleware.createIdRemapMiddleware = void 0;
  const getUniqueId_1 = requireGetUniqueId();
  function createIdRemapMiddleware() {
    return (req, res, next, _end) => {
      const originalId = req.id;
      const newId = getUniqueId_1.getUniqueId();
      req.id = newId;
      res.id = newId;
      next((done) => {
        req.id = originalId;
        res.id = originalId;
        done();
      });
    };
  }
  idRemapMiddleware.createIdRemapMiddleware = createIdRemapMiddleware;
  return idRemapMiddleware;
}
var createAsyncMiddleware = {};
var hasRequiredCreateAsyncMiddleware;
function requireCreateAsyncMiddleware() {
  if (hasRequiredCreateAsyncMiddleware) return createAsyncMiddleware;
  hasRequiredCreateAsyncMiddleware = 1;
  Object.defineProperty(createAsyncMiddleware, "__esModule", { value: true });
  createAsyncMiddleware.createAsyncMiddleware = void 0;
  function createAsyncMiddleware$1(asyncMiddleware) {
    return async (req, res, next, end) => {
      let resolveNextPromise;
      const nextPromise = new Promise((resolve) => {
        resolveNextPromise = resolve;
      });
      let returnHandlerCallback = null;
      let nextWasCalled = false;
      const asyncNext = async () => {
        nextWasCalled = true;
        next((runReturnHandlersCallback) => {
          returnHandlerCallback = runReturnHandlersCallback;
          resolveNextPromise();
        });
        await nextPromise;
      };
      try {
        await asyncMiddleware(req, res, asyncNext);
        if (nextWasCalled) {
          await nextPromise;
          returnHandlerCallback(null);
        } else {
          end(null);
        }
      } catch (error2) {
        if (returnHandlerCallback) {
          returnHandlerCallback(error2);
        } else {
          end(error2);
        }
      }
    };
  }
  createAsyncMiddleware.createAsyncMiddleware = createAsyncMiddleware$1;
  return createAsyncMiddleware;
}
var createScaffoldMiddleware = {};
var hasRequiredCreateScaffoldMiddleware;
function requireCreateScaffoldMiddleware() {
  if (hasRequiredCreateScaffoldMiddleware) return createScaffoldMiddleware;
  hasRequiredCreateScaffoldMiddleware = 1;
  Object.defineProperty(createScaffoldMiddleware, "__esModule", { value: true });
  createScaffoldMiddleware.createScaffoldMiddleware = void 0;
  function createScaffoldMiddleware$1(handlers) {
    return (req, res, next, end) => {
      const handler = handlers[req.method];
      if (handler === void 0) {
        return next();
      }
      if (typeof handler === "function") {
        return handler(req, res, next, end);
      }
      res.result = handler;
      return end();
    };
  }
  createScaffoldMiddleware.createScaffoldMiddleware = createScaffoldMiddleware$1;
  return createScaffoldMiddleware;
}
var JsonRpcEngine = {};
var safeEventEmitter = {};
var hasRequiredSafeEventEmitter;
function requireSafeEventEmitter() {
  if (hasRequiredSafeEventEmitter) return safeEventEmitter;
  hasRequiredSafeEventEmitter = 1;
  Object.defineProperty(safeEventEmitter, "__esModule", { value: true });
  const events_1 = requireEvents();
  function safeApply(handler, context, args) {
    try {
      Reflect.apply(handler, context, args);
    } catch (err) {
      setTimeout(() => {
        throw err;
      });
    }
  }
  function arrayClone(arr) {
    const n2 = arr.length;
    const copy = new Array(n2);
    for (let i2 = 0; i2 < n2; i2 += 1) {
      copy[i2] = arr[i2];
    }
    return copy;
  }
  class SafeEventEmitter extends events_1.EventEmitter {
    emit(type2, ...args) {
      let doError = type2 === "error";
      const events = this._events;
      if (events !== void 0) {
        doError = doError && events.error === void 0;
      } else if (!doError) {
        return false;
      }
      if (doError) {
        let er;
        if (args.length > 0) {
          [er] = args;
        }
        if (er instanceof Error) {
          throw er;
        }
        const err = new Error(`Unhandled error.${er ? ` (${er.message})` : ""}`);
        err.context = er;
        throw err;
      }
      const handler = events[type2];
      if (handler === void 0) {
        return false;
      }
      if (typeof handler === "function") {
        safeApply(handler, this, args);
      } else {
        const len = handler.length;
        const listeners = arrayClone(handler);
        for (let i2 = 0; i2 < len; i2 += 1) {
          safeApply(listeners[i2], this, args);
        }
      }
      return true;
    }
  }
  safeEventEmitter.default = SafeEventEmitter;
  return safeEventEmitter;
}
var dist = {};
var classes = {};
var fastSafeStringify;
var hasRequiredFastSafeStringify;
function requireFastSafeStringify() {
  if (hasRequiredFastSafeStringify) return fastSafeStringify;
  hasRequiredFastSafeStringify = 1;
  fastSafeStringify = stringify;
  stringify.default = stringify;
  stringify.stable = deterministicStringify;
  stringify.stableStringify = deterministicStringify;
  var LIMIT_REPLACE_NODE = "[...]";
  var CIRCULAR_REPLACE_NODE = "[Circular]";
  var arr = [];
  var replacerStack = [];
  function defaultOptions() {
    return {
      depthLimit: Number.MAX_SAFE_INTEGER,
      edgesLimit: Number.MAX_SAFE_INTEGER
    };
  }
  function stringify(obj, replacer, spacer, options) {
    if (typeof options === "undefined") {
      options = defaultOptions();
    }
    decirc(obj, "", 0, [], void 0, 0, options);
    var res;
    try {
      if (replacerStack.length === 0) {
        res = JSON.stringify(obj, replacer, spacer);
      } else {
        res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
      }
    } catch (_2) {
      return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally {
      while (arr.length !== 0) {
        var part = arr.pop();
        if (part.length === 4) {
          Object.defineProperty(part[0], part[1], part[3]);
        } else {
          part[0][part[1]] = part[2];
        }
      }
    }
    return res;
  }
  function setReplace(replace, val, k2, parent) {
    var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k2);
    if (propertyDescriptor.get !== void 0) {
      if (propertyDescriptor.configurable) {
        Object.defineProperty(parent, k2, { value: replace });
        arr.push([parent, k2, val, propertyDescriptor]);
      } else {
        replacerStack.push([val, k2, replace]);
      }
    } else {
      parent[k2] = replace;
      arr.push([parent, k2, val]);
    }
  }
  function decirc(val, k2, edgeIndex, stack, parent, depth, options) {
    depth += 1;
    var i2;
    if (typeof val === "object" && val !== null) {
      for (i2 = 0; i2 < stack.length; i2++) {
        if (stack[i2] === val) {
          setReplace(CIRCULAR_REPLACE_NODE, val, k2, parent);
          return;
        }
      }
      if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
        setReplace(LIMIT_REPLACE_NODE, val, k2, parent);
        return;
      }
      if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
        setReplace(LIMIT_REPLACE_NODE, val, k2, parent);
        return;
      }
      stack.push(val);
      if (Array.isArray(val)) {
        for (i2 = 0; i2 < val.length; i2++) {
          decirc(val[i2], i2, i2, stack, val, depth, options);
        }
      } else {
        var keys = Object.keys(val);
        for (i2 = 0; i2 < keys.length; i2++) {
          var key = keys[i2];
          decirc(val[key], key, i2, stack, val, depth, options);
        }
      }
      stack.pop();
    }
  }
  function compareFunction(a2, b2) {
    if (a2 < b2) {
      return -1;
    }
    if (a2 > b2) {
      return 1;
    }
    return 0;
  }
  function deterministicStringify(obj, replacer, spacer, options) {
    if (typeof options === "undefined") {
      options = defaultOptions();
    }
    var tmp = deterministicDecirc(obj, "", 0, [], void 0, 0, options) || obj;
    var res;
    try {
      if (replacerStack.length === 0) {
        res = JSON.stringify(tmp, replacer, spacer);
      } else {
        res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
      }
    } catch (_2) {
      return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally {
      while (arr.length !== 0) {
        var part = arr.pop();
        if (part.length === 4) {
          Object.defineProperty(part[0], part[1], part[3]);
        } else {
          part[0][part[1]] = part[2];
        }
      }
    }
    return res;
  }
  function deterministicDecirc(val, k2, edgeIndex, stack, parent, depth, options) {
    depth += 1;
    var i2;
    if (typeof val === "object" && val !== null) {
      for (i2 = 0; i2 < stack.length; i2++) {
        if (stack[i2] === val) {
          setReplace(CIRCULAR_REPLACE_NODE, val, k2, parent);
          return;
        }
      }
      try {
        if (typeof val.toJSON === "function") {
          return;
        }
      } catch (_2) {
        return;
      }
      if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
        setReplace(LIMIT_REPLACE_NODE, val, k2, parent);
        return;
      }
      if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
        setReplace(LIMIT_REPLACE_NODE, val, k2, parent);
        return;
      }
      stack.push(val);
      if (Array.isArray(val)) {
        for (i2 = 0; i2 < val.length; i2++) {
          deterministicDecirc(val[i2], i2, i2, stack, val, depth, options);
        }
      } else {
        var tmp = {};
        var keys = Object.keys(val).sort(compareFunction);
        for (i2 = 0; i2 < keys.length; i2++) {
          var key = keys[i2];
          deterministicDecirc(val[key], key, i2, stack, val, depth, options);
          tmp[key] = val[key];
        }
        if (typeof parent !== "undefined") {
          arr.push([parent, k2, val]);
          parent[k2] = tmp;
        } else {
          return tmp;
        }
      }
      stack.pop();
    }
  }
  function replaceGetterValues(replacer) {
    replacer = typeof replacer !== "undefined" ? replacer : function(k2, v2) {
      return v2;
    };
    return function(key, val) {
      if (replacerStack.length > 0) {
        for (var i2 = 0; i2 < replacerStack.length; i2++) {
          var part = replacerStack[i2];
          if (part[1] === key && part[0] === val) {
            val = part[2];
            replacerStack.splice(i2, 1);
            break;
          }
        }
      }
      return replacer.call(this, key, val);
    };
  }
  return fastSafeStringify;
}
var hasRequiredClasses;
function requireClasses() {
  if (hasRequiredClasses) return classes;
  hasRequiredClasses = 1;
  Object.defineProperty(classes, "__esModule", { value: true });
  classes.EthereumProviderError = classes.EthereumRpcError = void 0;
  const fast_safe_stringify_1 = requireFastSafeStringify();
  class EthereumRpcError extends Error {
    constructor(code, message, data) {
      if (!Number.isInteger(code)) {
        throw new Error('"code" must be an integer.');
      }
      if (!message || typeof message !== "string") {
        throw new Error('"message" must be a nonempty string.');
      }
      super(message);
      this.code = code;
      if (data !== void 0) {
        this.data = data;
      }
    }
    /**
     * Returns a plain object with all public class properties.
     */
    serialize() {
      const serialized = {
        code: this.code,
        message: this.message
      };
      if (this.data !== void 0) {
        serialized.data = this.data;
      }
      if (this.stack) {
        serialized.stack = this.stack;
      }
      return serialized;
    }
    /**
     * Return a string representation of the serialized error, omitting
     * any circular references.
     */
    toString() {
      return fast_safe_stringify_1.default(this.serialize(), stringifyReplacer, 2);
    }
  }
  classes.EthereumRpcError = EthereumRpcError;
  class EthereumProviderError extends EthereumRpcError {
    /**
     * Create an Ethereum Provider JSON-RPC error.
     * `code` must be an integer in the 1000 <= 4999 range.
     */
    constructor(code, message, data) {
      if (!isValidEthProviderCode(code)) {
        throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
      }
      super(code, message, data);
    }
  }
  classes.EthereumProviderError = EthereumProviderError;
  function isValidEthProviderCode(code) {
    return Number.isInteger(code) && code >= 1e3 && code <= 4999;
  }
  function stringifyReplacer(_2, value) {
    if (value === "[Circular]") {
      return void 0;
    }
    return value;
  }
  return classes;
}
var utils = {};
var errorConstants = {};
var hasRequiredErrorConstants;
function requireErrorConstants() {
  if (hasRequiredErrorConstants) return errorConstants;
  hasRequiredErrorConstants = 1;
  Object.defineProperty(errorConstants, "__esModule", { value: true });
  errorConstants.errorValues = errorConstants.errorCodes = void 0;
  errorConstants.errorCodes = {
    rpc: {
      invalidInput: -32e3,
      resourceNotFound: -32001,
      resourceUnavailable: -32002,
      transactionRejected: -32003,
      methodNotSupported: -32004,
      limitExceeded: -32005,
      parse: -32700,
      invalidRequest: -32600,
      methodNotFound: -32601,
      invalidParams: -32602,
      internal: -32603
    },
    provider: {
      userRejectedRequest: 4001,
      unauthorized: 4100,
      unsupportedMethod: 4200,
      disconnected: 4900,
      chainDisconnected: 4901
    }
  };
  errorConstants.errorValues = {
    "-32700": {
      standard: "JSON RPC 2.0",
      message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
      standard: "JSON RPC 2.0",
      message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
      standard: "JSON RPC 2.0",
      message: "The method does not exist / is not available."
    },
    "-32602": {
      standard: "JSON RPC 2.0",
      message: "Invalid method parameter(s)."
    },
    "-32603": {
      standard: "JSON RPC 2.0",
      message: "Internal JSON-RPC error."
    },
    "-32000": {
      standard: "EIP-1474",
      message: "Invalid input."
    },
    "-32001": {
      standard: "EIP-1474",
      message: "Resource not found."
    },
    "-32002": {
      standard: "EIP-1474",
      message: "Resource unavailable."
    },
    "-32003": {
      standard: "EIP-1474",
      message: "Transaction rejected."
    },
    "-32004": {
      standard: "EIP-1474",
      message: "Method not supported."
    },
    "-32005": {
      standard: "EIP-1474",
      message: "Request limit exceeded."
    },
    "4001": {
      standard: "EIP-1193",
      message: "User rejected the request."
    },
    "4100": {
      standard: "EIP-1193",
      message: "The requested account and/or method has not been authorized by the user."
    },
    "4200": {
      standard: "EIP-1193",
      message: "The requested method is not supported by this Ethereum provider."
    },
    "4900": {
      standard: "EIP-1193",
      message: "The provider is disconnected from all chains."
    },
    "4901": {
      standard: "EIP-1193",
      message: "The provider is disconnected from the specified chain."
    }
  };
  return errorConstants;
}
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serializeError = exports.isValidCode = exports.getMessageFromCode = exports.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    const error_constants_1 = requireErrorConstants();
    const classes_1 = requireClasses();
    const FALLBACK_ERROR_CODE = error_constants_1.errorCodes.rpc.internal;
    const FALLBACK_MESSAGE = "Unspecified error message. This is a bug, please report it.";
    const FALLBACK_ERROR = {
      code: FALLBACK_ERROR_CODE,
      message: getMessageFromCode(FALLBACK_ERROR_CODE)
    };
    exports.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
    function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
      if (Number.isInteger(code)) {
        const codeString = code.toString();
        if (hasKey(error_constants_1.errorValues, codeString)) {
          return error_constants_1.errorValues[codeString].message;
        }
        if (isJsonRpcServerError(code)) {
          return exports.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
      }
      return fallbackMessage;
    }
    exports.getMessageFromCode = getMessageFromCode;
    function isValidCode(code) {
      if (!Number.isInteger(code)) {
        return false;
      }
      const codeString = code.toString();
      if (error_constants_1.errorValues[codeString]) {
        return true;
      }
      if (isJsonRpcServerError(code)) {
        return true;
      }
      return false;
    }
    exports.isValidCode = isValidCode;
    function serializeError(error2, { fallbackError = FALLBACK_ERROR, shouldIncludeStack = false } = {}) {
      var _a, _b;
      if (!fallbackError || !Number.isInteger(fallbackError.code) || typeof fallbackError.message !== "string") {
        throw new Error("Must provide fallback error with integer number code and string message.");
      }
      if (error2 instanceof classes_1.EthereumRpcError) {
        return error2.serialize();
      }
      const serialized = {};
      if (error2 && typeof error2 === "object" && !Array.isArray(error2) && hasKey(error2, "code") && isValidCode(error2.code)) {
        const _error = error2;
        serialized.code = _error.code;
        if (_error.message && typeof _error.message === "string") {
          serialized.message = _error.message;
          if (hasKey(_error, "data")) {
            serialized.data = _error.data;
          }
        } else {
          serialized.message = getMessageFromCode(serialized.code);
          serialized.data = { originalError: assignOriginalError(error2) };
        }
      } else {
        serialized.code = fallbackError.code;
        const message = (_a = error2) === null || _a === void 0 ? void 0 : _a.message;
        serialized.message = message && typeof message === "string" ? message : fallbackError.message;
        serialized.data = { originalError: assignOriginalError(error2) };
      }
      const stack = (_b = error2) === null || _b === void 0 ? void 0 : _b.stack;
      if (shouldIncludeStack && error2 && stack && typeof stack === "string") {
        serialized.stack = stack;
      }
      return serialized;
    }
    exports.serializeError = serializeError;
    function isJsonRpcServerError(code) {
      return code >= -32099 && code <= -32e3;
    }
    function assignOriginalError(error2) {
      if (error2 && typeof error2 === "object" && !Array.isArray(error2)) {
        return Object.assign({}, error2);
      }
      return error2;
    }
    function hasKey(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
  })(utils);
  return utils;
}
var errors = {};
var hasRequiredErrors;
function requireErrors() {
  if (hasRequiredErrors) return errors;
  hasRequiredErrors = 1;
  Object.defineProperty(errors, "__esModule", { value: true });
  errors.ethErrors = void 0;
  const classes_1 = requireClasses();
  const utils_1 = requireUtils();
  const error_constants_1 = requireErrorConstants();
  errors.ethErrors = {
    rpc: {
      /**
       * Get a JSON RPC 2.0 Parse (-32700) error.
       */
      parse: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.parse, arg),
      /**
       * Get a JSON RPC 2.0 Invalid Request (-32600) error.
       */
      invalidRequest: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidRequest, arg),
      /**
       * Get a JSON RPC 2.0 Invalid Params (-32602) error.
       */
      invalidParams: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidParams, arg),
      /**
       * Get a JSON RPC 2.0 Method Not Found (-32601) error.
       */
      methodNotFound: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotFound, arg),
      /**
       * Get a JSON RPC 2.0 Internal (-32603) error.
       */
      internal: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.internal, arg),
      /**
       * Get a JSON RPC 2.0 Server error.
       * Permits integer error codes in the [ -32099 <= -32005 ] range.
       * Codes -32000 through -32004 are reserved by EIP-1474.
       */
      server: (opts) => {
        if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
          throw new Error("Ethereum RPC Server errors must provide single object argument.");
        }
        const { code } = opts;
        if (!Number.isInteger(code) || code > -32005 || code < -32099) {
          throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
        }
        return getEthJsonRpcError(code, opts);
      },
      /**
       * Get an Ethereum JSON RPC Invalid Input (-32000) error.
       */
      invalidInput: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidInput, arg),
      /**
       * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
       */
      resourceNotFound: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceNotFound, arg),
      /**
       * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
       */
      resourceUnavailable: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceUnavailable, arg),
      /**
       * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
       */
      transactionRejected: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.transactionRejected, arg),
      /**
       * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
       */
      methodNotSupported: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotSupported, arg),
      /**
       * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
       */
      limitExceeded: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.limitExceeded, arg)
    },
    provider: {
      /**
       * Get an Ethereum Provider User Rejected Request (4001) error.
       */
      userRejectedRequest: (arg) => {
        return getEthProviderError(error_constants_1.errorCodes.provider.userRejectedRequest, arg);
      },
      /**
       * Get an Ethereum Provider Unauthorized (4100) error.
       */
      unauthorized: (arg) => {
        return getEthProviderError(error_constants_1.errorCodes.provider.unauthorized, arg);
      },
      /**
       * Get an Ethereum Provider Unsupported Method (4200) error.
       */
      unsupportedMethod: (arg) => {
        return getEthProviderError(error_constants_1.errorCodes.provider.unsupportedMethod, arg);
      },
      /**
       * Get an Ethereum Provider Not Connected (4900) error.
       */
      disconnected: (arg) => {
        return getEthProviderError(error_constants_1.errorCodes.provider.disconnected, arg);
      },
      /**
       * Get an Ethereum Provider Chain Not Connected (4901) error.
       */
      chainDisconnected: (arg) => {
        return getEthProviderError(error_constants_1.errorCodes.provider.chainDisconnected, arg);
      },
      /**
       * Get a custom Ethereum Provider error.
       */
      custom: (opts) => {
        if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
          throw new Error("Ethereum Provider custom errors must provide single object argument.");
        }
        const { code, message, data } = opts;
        if (!message || typeof message !== "string") {
          throw new Error('"message" must be a nonempty string');
        }
        return new classes_1.EthereumProviderError(code, message, data);
      }
    }
  };
  function getEthJsonRpcError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new classes_1.EthereumRpcError(code, message || utils_1.getMessageFromCode(code), data);
  }
  function getEthProviderError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new classes_1.EthereumProviderError(code, message || utils_1.getMessageFromCode(code), data);
  }
  function parseOpts(arg) {
    if (arg) {
      if (typeof arg === "string") {
        return [arg];
      } else if (typeof arg === "object" && !Array.isArray(arg)) {
        const { message, data } = arg;
        if (message && typeof message !== "string") {
          throw new Error("Must specify string message.");
        }
        return [message || void 0, data];
      }
    }
    return [];
  }
  return errors;
}
var hasRequiredDist$2;
function requireDist$2() {
  if (hasRequiredDist$2) return dist;
  hasRequiredDist$2 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getMessageFromCode = exports.serializeError = exports.EthereumProviderError = exports.EthereumRpcError = exports.ethErrors = exports.errorCodes = void 0;
    const classes_1 = requireClasses();
    Object.defineProperty(exports, "EthereumRpcError", { enumerable: true, get: function() {
      return classes_1.EthereumRpcError;
    } });
    Object.defineProperty(exports, "EthereumProviderError", { enumerable: true, get: function() {
      return classes_1.EthereumProviderError;
    } });
    const utils_1 = requireUtils();
    Object.defineProperty(exports, "serializeError", { enumerable: true, get: function() {
      return utils_1.serializeError;
    } });
    Object.defineProperty(exports, "getMessageFromCode", { enumerable: true, get: function() {
      return utils_1.getMessageFromCode;
    } });
    const errors_1 = requireErrors();
    Object.defineProperty(exports, "ethErrors", { enumerable: true, get: function() {
      return errors_1.ethErrors;
    } });
    const error_constants_1 = requireErrorConstants();
    Object.defineProperty(exports, "errorCodes", { enumerable: true, get: function() {
      return error_constants_1.errorCodes;
    } });
  })(dist);
  return dist;
}
var hasRequiredJsonRpcEngine;
function requireJsonRpcEngine() {
  if (hasRequiredJsonRpcEngine) return JsonRpcEngine;
  hasRequiredJsonRpcEngine = 1;
  var __importDefault2 = JsonRpcEngine && JsonRpcEngine.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(JsonRpcEngine, "__esModule", { value: true });
  JsonRpcEngine.JsonRpcEngine = void 0;
  const safe_event_emitter_1 = __importDefault2(requireSafeEventEmitter());
  const eth_rpc_errors_1 = requireDist$2();
  let JsonRpcEngine$1 = class JsonRpcEngine2 extends safe_event_emitter_1.default {
    constructor() {
      super();
      this._middleware = [];
    }
    /**
     * Add a middleware function to the engine's middleware stack.
     *
     * @param middleware - The middleware function to add.
     */
    push(middleware) {
      this._middleware.push(middleware);
    }
    handle(req, cb) {
      if (cb && typeof cb !== "function") {
        throw new Error('"callback" must be a function if provided.');
      }
      if (Array.isArray(req)) {
        if (cb) {
          return this._handleBatch(req, cb);
        }
        return this._handleBatch(req);
      }
      if (cb) {
        return this._handle(req, cb);
      }
      return this._promiseHandle(req);
    }
    /**
     * Returns this engine as a middleware function that can be pushed to other
     * engines.
     *
     * @returns This engine as a middleware function.
     */
    asMiddleware() {
      return async (req, res, next, end) => {
        try {
          const [middlewareError, isComplete, returnHandlers] = await JsonRpcEngine2._runAllMiddleware(req, res, this._middleware);
          if (isComplete) {
            await JsonRpcEngine2._runReturnHandlers(returnHandlers);
            return end(middlewareError);
          }
          return next(async (handlerCallback) => {
            try {
              await JsonRpcEngine2._runReturnHandlers(returnHandlers);
            } catch (error2) {
              return handlerCallback(error2);
            }
            return handlerCallback();
          });
        } catch (error2) {
          return end(error2);
        }
      };
    }
    async _handleBatch(reqs, cb) {
      try {
        const responses = await Promise.all(
          // 1. Begin executing each request in the order received
          reqs.map(this._promiseHandle.bind(this))
        );
        if (cb) {
          return cb(null, responses);
        }
        return responses;
      } catch (error2) {
        if (cb) {
          return cb(error2);
        }
        throw error2;
      }
    }
    /**
     * A promise-wrapped _handle.
     */
    _promiseHandle(req) {
      return new Promise((resolve) => {
        this._handle(req, (_err, res) => {
          resolve(res);
        });
      });
    }
    /**
     * Ensures that the request object is valid, processes it, and passes any
     * error and the response object to the given callback.
     *
     * Does not reject.
     */
    async _handle(callerReq, cb) {
      if (!callerReq || Array.isArray(callerReq) || typeof callerReq !== "object") {
        const error3 = new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof callerReq}`, { request: callerReq });
        return cb(error3, { id: void 0, jsonrpc: "2.0", error: error3 });
      }
      if (typeof callerReq.method !== "string") {
        const error3 = new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof callerReq.method}`, { request: callerReq });
        return cb(error3, { id: callerReq.id, jsonrpc: "2.0", error: error3 });
      }
      const req = Object.assign({}, callerReq);
      const res = {
        id: req.id,
        jsonrpc: req.jsonrpc
      };
      let error2 = null;
      try {
        await this._processRequest(req, res);
      } catch (_error) {
        error2 = _error;
      }
      if (error2) {
        delete res.result;
        if (!res.error) {
          res.error = eth_rpc_errors_1.serializeError(error2);
        }
      }
      return cb(error2, res);
    }
    /**
     * For the given request and response, runs all middleware and their return
     * handlers, if any, and ensures that internal request processing semantics
     * are satisfied.
     */
    async _processRequest(req, res) {
      const [error2, isComplete, returnHandlers] = await JsonRpcEngine2._runAllMiddleware(req, res, this._middleware);
      JsonRpcEngine2._checkForCompletion(req, res, isComplete);
      await JsonRpcEngine2._runReturnHandlers(returnHandlers);
      if (error2) {
        throw error2;
      }
    }
    /**
     * Serially executes the given stack of middleware.
     *
     * @returns An array of any error encountered during middleware execution,
     * a boolean indicating whether the request was completed, and an array of
     * middleware-defined return handlers.
     */
    static async _runAllMiddleware(req, res, middlewareStack) {
      const returnHandlers = [];
      let error2 = null;
      let isComplete = false;
      for (const middleware of middlewareStack) {
        [error2, isComplete] = await JsonRpcEngine2._runMiddleware(req, res, middleware, returnHandlers);
        if (isComplete) {
          break;
        }
      }
      return [error2, isComplete, returnHandlers.reverse()];
    }
    /**
     * Runs an individual middleware.
     *
     * @returns An array of any error encountered during middleware exection,
     * and a boolean indicating whether the request should end.
     */
    static _runMiddleware(req, res, middleware, returnHandlers) {
      return new Promise((resolve) => {
        const end = (err) => {
          const error2 = err || res.error;
          if (error2) {
            res.error = eth_rpc_errors_1.serializeError(error2);
          }
          resolve([error2, true]);
        };
        const next = (returnHandler) => {
          if (res.error) {
            end(res.error);
          } else {
            if (returnHandler) {
              if (typeof returnHandler !== "function") {
                end(new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof returnHandler}" for request:
${jsonify(req)}`, { request: req }));
              }
              returnHandlers.push(returnHandler);
            }
            resolve([null, false]);
          }
        };
        try {
          middleware(req, res, next, end);
        } catch (error2) {
          end(error2);
        }
      });
    }
    /**
     * Serially executes array of return handlers. The request and response are
     * assumed to be in their scope.
     */
    static async _runReturnHandlers(handlers) {
      for (const handler of handlers) {
        await new Promise((resolve, reject) => {
          handler((err) => err ? reject(err) : resolve());
        });
      }
    }
    /**
     * Throws an error if the response has neither a result nor an error, or if
     * the "isComplete" flag is falsy.
     */
    static _checkForCompletion(req, res, isComplete) {
      if (!("result" in res) && !("error" in res)) {
        throw new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:
${jsonify(req)}`, { request: req });
      }
      if (!isComplete) {
        throw new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:
${jsonify(req)}`, { request: req });
      }
    }
  };
  JsonRpcEngine.JsonRpcEngine = JsonRpcEngine$1;
  function jsonify(request) {
    return JSON.stringify(request, null, 2);
  }
  return JsonRpcEngine;
}
var mergeMiddleware = {};
var hasRequiredMergeMiddleware;
function requireMergeMiddleware() {
  if (hasRequiredMergeMiddleware) return mergeMiddleware;
  hasRequiredMergeMiddleware = 1;
  Object.defineProperty(mergeMiddleware, "__esModule", { value: true });
  mergeMiddleware.mergeMiddleware = void 0;
  const JsonRpcEngine_1 = requireJsonRpcEngine();
  function mergeMiddleware$1(middlewareStack) {
    const engine = new JsonRpcEngine_1.JsonRpcEngine();
    middlewareStack.forEach((middleware) => engine.push(middleware));
    return engine.asMiddleware();
  }
  mergeMiddleware.mergeMiddleware = mergeMiddleware$1;
  return mergeMiddleware;
}
var hasRequiredDist$1;
function requireDist$1() {
  if (hasRequiredDist$1) return dist$1;
  hasRequiredDist$1 = 1;
  (function(exports) {
    var __createBinding2 = dist$1 && dist$1.__createBinding || (Object.create ? (function(o2, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      Object.defineProperty(o2, k22, { enumerable: true, get: function() {
        return m2[k2];
      } });
    }) : (function(o2, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      o2[k22] = m2[k2];
    }));
    var __exportStar2 = dist$1 && dist$1.__exportStar || function(m2, exports2) {
      for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding2(exports2, m2, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar2(requireIdRemapMiddleware(), exports);
    __exportStar2(requireCreateAsyncMiddleware(), exports);
    __exportStar2(requireCreateScaffoldMiddleware(), exports);
    __exportStar2(requireGetUniqueId(), exports);
    __exportStar2(requireJsonRpcEngine(), exports);
    __exportStar2(requireMergeMiddleware(), exports);
  })(dist$1);
  return dist$1;
}
var lib = {};
var Mutex = {};
var extendStatics = function(d2, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d22, b22) {
    d22.__proto__ = b22;
  } || function(d22, b22) {
    for (var p2 in b22) if (Object.prototype.hasOwnProperty.call(b22, p2)) d22[p2] = b22[p2];
  };
  return extendStatics(d2, b2);
};
function __extends(d2, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s2, e2) {
  var t2 = {};
  for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
    t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t2[p2[i2]] = s2[p2[i2]];
    }
  return t2;
}
function __decorate(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d2 = decorators[i2]) r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f2) {
    if (f2 !== void 0 && typeof f2 !== "function") throw new TypeError("Function expected");
    return f2;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    var context = {};
    for (var p2 in contextIn) context[p2] = p2 === "access" ? {} : contextIn[p2];
    for (var p2 in contextIn.access) context.access[p2] = contextIn.access[p2];
    context.addInitializer = function(f2) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f2 || null));
    };
    var result = (0, decorators[i2])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_2 = accept(result.get)) descriptor.get = _2;
      if (_2 = accept(result.set)) descriptor.set = _2;
      if (_2 = accept(result.init)) initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field") initializers.unshift(_2);
      else descriptor[key] = _2;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i2 = 0; i2 < initializers.length; i2++) {
    value = useValue ? initializers[i2].call(thisArg, value) : initializers[i2].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x2) {
  return typeof x2 === "symbol" ? x2 : "".concat(x2);
}
function __setFunctionName(f2, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f2, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1) throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2 = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g2.next = verb(0), g2["throw"] = verb(1), g2["return"] = verb(2), typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2) throw new TypeError("Generator is already executing.");
    while (g2 && (g2 = 0, op[0] && (_2 = 0)), _2) try {
      if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done) return t2;
      if (y2 = 0, t2) op = [op[0] & 2, t2.value];
      switch (op[0]) {
        case 0:
        case 1:
          t2 = op;
          break;
        case 4:
          _2.label++;
          return { value: op[1], done: false };
        case 5:
          _2.label++;
          y2 = op[1];
          op = [0];
          continue;
        case 7:
          op = _2.ops.pop();
          _2.trys.pop();
          continue;
        default:
          if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _2 = 0;
            continue;
          }
          if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
            _2.label = op[1];
            break;
          }
          if (op[0] === 6 && _2.label < t2[1]) {
            _2.label = t2[1];
            t2 = op;
            break;
          }
          if (t2 && _2.label < t2[2]) {
            _2.label = t2[2];
            _2.ops.push(op);
            break;
          }
          if (t2[2]) _2.ops.pop();
          _2.trys.pop();
          continue;
      }
      op = body.call(thisArg, _2);
    } catch (e2) {
      op = [6, e2];
      y2 = 0;
    } finally {
      f2 = t2 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var __createBinding = Object.create ? (function(o2, m2, k2, k22) {
  if (k22 === void 0) k22 = k2;
  var desc = Object.getOwnPropertyDescriptor(m2, k2);
  if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m2[k2];
    } };
  }
  Object.defineProperty(o2, k22, desc);
}) : (function(o2, m2, k2, k22) {
  if (k22 === void 0) k22 = k2;
  o2[k22] = m2[k2];
});
function __exportStar(m2, o2) {
  for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(o2, p2)) __createBinding(o2, m2, p2);
}
function __values(o2) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
  if (m2) return m2.call(o2);
  if (o2 && typeof o2.length === "number") return {
    next: function() {
      if (o2 && i2 >= o2.length) o2 = void 0;
      return { value: o2 && o2[i2++], done: !o2 };
    }
  };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o2, n2) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2) return o2;
  var i2 = m2.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done) ar.push(r2.value);
  } catch (error2) {
    e2 = { error: error2 };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i2["return"])) m2.call(i2);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
    ar = ar.concat(__read(arguments[i2]));
  return ar;
}
function __spreadArrays() {
  for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++) s2 += arguments[i2].length;
  for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)
    for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
      r2[k2] = a2[j2];
  return r2;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
    if (ar || !(i2 in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
      ar[i2] = from[i2];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v2) {
  return this instanceof __await ? (this.v = v2, this) : new __await(v2);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g2 = generator.apply(thisArg, _arguments || []), i2, q2 = [];
  return i2 = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2;
  function awaitReturn(f2) {
    return function(v2) {
      return Promise.resolve(v2).then(f2, reject);
    };
  }
  function verb(n2, f2) {
    if (g2[n2]) {
      i2[n2] = function(v2) {
        return new Promise(function(a2, b2) {
          q2.push([n2, v2, a2, b2]) > 1 || resume(n2, v2);
        });
      };
      if (f2) i2[n2] = f2(i2[n2]);
    }
  }
  function resume(n2, v2) {
    try {
      step(g2[n2](v2));
    } catch (e2) {
      settle(q2[0][3], e2);
    }
  }
  function step(r2) {
    r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f2, v2) {
    if (f2(v2), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
  }
}
function __asyncDelegator(o2) {
  var i2, p2;
  return i2 = {}, verb("next"), verb("throw", function(e2) {
    throw e2;
  }), verb("return"), i2[Symbol.iterator] = function() {
    return this;
  }, i2;
  function verb(n2, f2) {
    i2[n2] = o2[n2] ? function(v2) {
      return (p2 = !p2) ? { value: __await(o2[n2](v2)), done: false } : f2 ? f2(v2) : v2;
    } : f2;
  }
}
function __asyncValues(o2) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m2 = o2[Symbol.asyncIterator], i2;
  return m2 ? m2.call(o2) : (o2 = typeof __values === "function" ? __values(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2);
  function verb(n2) {
    i2[n2] = o2[n2] && function(v2) {
      return new Promise(function(resolve, reject) {
        v2 = o2[n2](v2), settle(resolve, reject, v2.done, v2.value);
      });
    };
  }
  function settle(resolve, reject, d2, v2) {
    Promise.resolve(v2).then(function(v22) {
      resolve({ value: v22, done: d2 });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
var __setModuleDefault = Object.create ? (function(o2, v2) {
  Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
}) : function(o2, v2) {
  o2["default"] = v2;
};
var ownKeys = function(o2) {
  ownKeys = Object.getOwnPropertyNames || function(o22) {
    var ar = [];
    for (var k2 in o22) if (Object.prototype.hasOwnProperty.call(o22, k2)) ar[ar.length] = k2;
    return ar;
  };
  return ownKeys(o2);
};
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k2 = ownKeys(mod), i2 = 0; i2 < k2.length; i2++) if (k2[i2] !== "default") __createBinding(result, mod, k2[i2]);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state2, kind, f2) {
  if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state2 === "function" ? receiver !== state2 || !f2 : !state2.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state2.get(receiver);
}
function __classPrivateFieldSet(receiver, state2, value, kind, f2) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state2 === "function" ? receiver !== state2 || !f2 : !state2.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state2.set(receiver, value), value;
}
function __classPrivateFieldIn(state2, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state2 === "function" ? receiver === state2 : state2.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e2) {
        return Promise.reject(e2);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error2, suppressed, message) {
  var e2 = new Error(message);
  return e2.name = "SuppressedError", e2.error = error2, e2.suppressed = suppressed, e2;
};
function __disposeResources(env) {
  function fail(e2) {
    env.error = env.hasError ? new _SuppressedError(e2, env.error, "An error was suppressed during disposal.") : e2;
    env.hasError = true;
  }
  var r2, s2 = 0;
  function next() {
    while (r2 = env.stack.pop()) {
      try {
        if (!r2.async && s2 === 1) return s2 = 0, env.stack.push(r2), Promise.resolve().then(next);
        if (r2.dispose) {
          var result = r2.dispose.call(r2.value);
          if (r2.async) return s2 |= 2, Promise.resolve(result).then(next, function(e2) {
            fail(e2);
            return next();
          });
        } else s2 |= 1;
      } catch (e2) {
        fail(e2);
      }
    }
    if (s2 === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m2, tsx, d2, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d2 && (!ext || !cm) ? m2 : d2 + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
const tslib_es6 = {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension
};
const tslib_es6$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource,
  get __assign() {
    return __assign;
  },
  __asyncDelegator,
  __asyncGenerator,
  __asyncValues,
  __await,
  __awaiter,
  __classPrivateFieldGet,
  __classPrivateFieldIn,
  __classPrivateFieldSet,
  __createBinding,
  __decorate,
  __disposeResources,
  __esDecorate,
  __exportStar,
  __extends,
  __generator,
  __importDefault,
  __importStar,
  __makeTemplateObject,
  __metadata,
  __param,
  __propKey,
  __read,
  __rest,
  __rewriteRelativeImportExtension,
  __runInitializers,
  __setFunctionName,
  __spread,
  __spreadArray,
  __spreadArrays,
  __values,
  default: tslib_es6
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(tslib_es6$1);
var Semaphore = {};
var hasRequiredSemaphore;
function requireSemaphore() {
  if (hasRequiredSemaphore) return Semaphore;
  hasRequiredSemaphore = 1;
  Object.defineProperty(Semaphore, "__esModule", { value: true });
  var tslib_1 = require$$0;
  var Semaphore$1 = (
    /** @class */
    (function() {
      function Semaphore2(_maxConcurrency) {
        this._maxConcurrency = _maxConcurrency;
        this._queue = [];
        if (_maxConcurrency <= 0) {
          throw new Error("semaphore must be initialized to a positive value");
        }
        this._value = _maxConcurrency;
      }
      Semaphore2.prototype.acquire = function() {
        var _this = this;
        var locked = this.isLocked();
        var ticket = new Promise(function(r2) {
          return _this._queue.push(r2);
        });
        if (!locked)
          this._dispatch();
        return ticket;
      };
      Semaphore2.prototype.runExclusive = function(callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var _a, value, release;
          return tslib_1.__generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                return [4, this.acquire()];
              case 1:
                _a = _b.sent(), value = _a[0], release = _a[1];
                _b.label = 2;
              case 2:
                _b.trys.push([2, , 4, 5]);
                return [4, callback(value)];
              case 3:
                return [2, _b.sent()];
              case 4:
                release();
                return [
                  7
                  /*endfinally*/
                ];
              case 5:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      };
      Semaphore2.prototype.isLocked = function() {
        return this._value <= 0;
      };
      Semaphore2.prototype.release = function() {
        if (this._maxConcurrency > 1) {
          throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
        }
        if (this._currentReleaser) {
          var releaser = this._currentReleaser;
          this._currentReleaser = void 0;
          releaser();
        }
      };
      Semaphore2.prototype._dispatch = function() {
        var _this = this;
        var nextConsumer = this._queue.shift();
        if (!nextConsumer)
          return;
        var released = false;
        this._currentReleaser = function() {
          if (released)
            return;
          released = true;
          _this._value++;
          _this._dispatch();
        };
        nextConsumer([this._value--, this._currentReleaser]);
      };
      return Semaphore2;
    })()
  );
  Semaphore.default = Semaphore$1;
  return Semaphore;
}
var hasRequiredMutex;
function requireMutex() {
  if (hasRequiredMutex) return Mutex;
  hasRequiredMutex = 1;
  Object.defineProperty(Mutex, "__esModule", { value: true });
  var tslib_1 = require$$0;
  var Semaphore_1 = requireSemaphore();
  var Mutex$1 = (
    /** @class */
    (function() {
      function Mutex2() {
        this._semaphore = new Semaphore_1.default(1);
      }
      Mutex2.prototype.acquire = function() {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var _a, releaser;
          return tslib_1.__generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                return [4, this._semaphore.acquire()];
              case 1:
                _a = _b.sent(), releaser = _a[1];
                return [2, releaser];
            }
          });
        });
      };
      Mutex2.prototype.runExclusive = function(callback) {
        return this._semaphore.runExclusive(function() {
          return callback();
        });
      };
      Mutex2.prototype.isLocked = function() {
        return this._semaphore.isLocked();
      };
      Mutex2.prototype.release = function() {
        this._semaphore.release();
      };
      return Mutex2;
    })()
  );
  Mutex.default = Mutex$1;
  return Mutex;
}
var withTimeout = {};
var hasRequiredWithTimeout;
function requireWithTimeout() {
  if (hasRequiredWithTimeout) return withTimeout;
  hasRequiredWithTimeout = 1;
  Object.defineProperty(withTimeout, "__esModule", { value: true });
  withTimeout.withTimeout = void 0;
  var tslib_1 = require$$0;
  function withTimeout$1(sync, timeout, timeoutError) {
    var _this = this;
    if (timeoutError === void 0) {
      timeoutError = new Error("timeout");
    }
    return {
      acquire: function() {
        return new Promise(function(resolve, reject) {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var isTimeout, ticket, release;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  isTimeout = false;
                  setTimeout(function() {
                    isTimeout = true;
                    reject(timeoutError);
                  }, timeout);
                  return [4, sync.acquire()];
                case 1:
                  ticket = _a.sent();
                  if (isTimeout) {
                    release = Array.isArray(ticket) ? ticket[1] : ticket;
                    release();
                  } else {
                    resolve(ticket);
                  }
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        });
      },
      runExclusive: function(callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var release, ticket;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                release = function() {
                  return void 0;
                };
                _a.label = 1;
              case 1:
                _a.trys.push([1, , 7, 8]);
                return [4, this.acquire()];
              case 2:
                ticket = _a.sent();
                if (!Array.isArray(ticket)) return [3, 4];
                release = ticket[1];
                return [4, callback(ticket[0])];
              case 3:
                return [2, _a.sent()];
              case 4:
                release = ticket;
                return [4, callback()];
              case 5:
                return [2, _a.sent()];
              case 6:
                return [3, 8];
              case 7:
                release();
                return [
                  7
                  /*endfinally*/
                ];
              case 8:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      },
      release: function() {
        sync.release();
      },
      isLocked: function() {
        return sync.isLocked();
      }
    };
  }
  withTimeout.withTimeout = withTimeout$1;
  return withTimeout;
}
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.withTimeout = exports.Semaphore = exports.Mutex = void 0;
    var Mutex_1 = requireMutex();
    Object.defineProperty(exports, "Mutex", { enumerable: true, get: function() {
      return Mutex_1.default;
    } });
    var Semaphore_1 = requireSemaphore();
    Object.defineProperty(exports, "Semaphore", { enumerable: true, get: function() {
      return Semaphore_1.default;
    } });
    var withTimeout_1 = requireWithTimeout();
    Object.defineProperty(exports, "withTimeout", { enumerable: true, get: function() {
      return withTimeout_1.withTimeout;
    } });
  })(lib);
  return lib;
}
var immutable;
var hasRequiredImmutable;
function requireImmutable() {
  if (hasRequiredImmutable) return immutable;
  hasRequiredImmutable = 1;
  immutable = extend;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function extend() {
    var target = {};
    for (var i2 = 0; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }
  return immutable;
}
var ethQuery;
var hasRequiredEthQuery;
function requireEthQuery() {
  if (hasRequiredEthQuery) return ethQuery;
  hasRequiredEthQuery = 1;
  const extend = requireImmutable();
  const createRandomId = requireJsonRpcRandomId()();
  ethQuery = EthQuery;
  function EthQuery(provider) {
    const self2 = this;
    self2.currentProvider = provider;
  }
  EthQuery.prototype.getBalance = generateFnWithDefaultBlockFor(2, "eth_getBalance");
  EthQuery.prototype.getCode = generateFnWithDefaultBlockFor(2, "eth_getCode");
  EthQuery.prototype.getTransactionCount = generateFnWithDefaultBlockFor(2, "eth_getTransactionCount");
  EthQuery.prototype.getStorageAt = generateFnWithDefaultBlockFor(3, "eth_getStorageAt");
  EthQuery.prototype.call = generateFnWithDefaultBlockFor(2, "eth_call");
  EthQuery.prototype.protocolVersion = generateFnFor("eth_protocolVersion");
  EthQuery.prototype.syncing = generateFnFor("eth_syncing");
  EthQuery.prototype.coinbase = generateFnFor("eth_coinbase");
  EthQuery.prototype.mining = generateFnFor("eth_mining");
  EthQuery.prototype.hashrate = generateFnFor("eth_hashrate");
  EthQuery.prototype.gasPrice = generateFnFor("eth_gasPrice");
  EthQuery.prototype.accounts = generateFnFor("eth_accounts");
  EthQuery.prototype.blockNumber = generateFnFor("eth_blockNumber");
  EthQuery.prototype.getBlockTransactionCountByHash = generateFnFor("eth_getBlockTransactionCountByHash");
  EthQuery.prototype.getBlockTransactionCountByNumber = generateFnFor("eth_getBlockTransactionCountByNumber");
  EthQuery.prototype.getUncleCountByBlockHash = generateFnFor("eth_getUncleCountByBlockHash");
  EthQuery.prototype.getUncleCountByBlockNumber = generateFnFor("eth_getUncleCountByBlockNumber");
  EthQuery.prototype.sign = generateFnFor("eth_sign");
  EthQuery.prototype.sendTransaction = generateFnFor("eth_sendTransaction");
  EthQuery.prototype.sendRawTransaction = generateFnFor("eth_sendRawTransaction");
  EthQuery.prototype.estimateGas = generateFnFor("eth_estimateGas");
  EthQuery.prototype.getBlockByHash = generateFnFor("eth_getBlockByHash");
  EthQuery.prototype.getBlockByNumber = generateFnFor("eth_getBlockByNumber");
  EthQuery.prototype.getTransactionByHash = generateFnFor("eth_getTransactionByHash");
  EthQuery.prototype.getTransactionByBlockHashAndIndex = generateFnFor("eth_getTransactionByBlockHashAndIndex");
  EthQuery.prototype.getTransactionByBlockNumberAndIndex = generateFnFor("eth_getTransactionByBlockNumberAndIndex");
  EthQuery.prototype.getTransactionReceipt = generateFnFor("eth_getTransactionReceipt");
  EthQuery.prototype.getUncleByBlockHashAndIndex = generateFnFor("eth_getUncleByBlockHashAndIndex");
  EthQuery.prototype.getUncleByBlockNumberAndIndex = generateFnFor("eth_getUncleByBlockNumberAndIndex");
  EthQuery.prototype.getCompilers = generateFnFor("eth_getCompilers");
  EthQuery.prototype.compileLLL = generateFnFor("eth_compileLLL");
  EthQuery.prototype.compileSolidity = generateFnFor("eth_compileSolidity");
  EthQuery.prototype.compileSerpent = generateFnFor("eth_compileSerpent");
  EthQuery.prototype.newFilter = generateFnFor("eth_newFilter");
  EthQuery.prototype.newBlockFilter = generateFnFor("eth_newBlockFilter");
  EthQuery.prototype.newPendingTransactionFilter = generateFnFor("eth_newPendingTransactionFilter");
  EthQuery.prototype.uninstallFilter = generateFnFor("eth_uninstallFilter");
  EthQuery.prototype.getFilterChanges = generateFnFor("eth_getFilterChanges");
  EthQuery.prototype.getFilterLogs = generateFnFor("eth_getFilterLogs");
  EthQuery.prototype.getLogs = generateFnFor("eth_getLogs");
  EthQuery.prototype.getWork = generateFnFor("eth_getWork");
  EthQuery.prototype.submitWork = generateFnFor("eth_submitWork");
  EthQuery.prototype.submitHashrate = generateFnFor("eth_submitHashrate");
  EthQuery.prototype.sendAsync = function(opts, cb) {
    const self2 = this;
    self2.currentProvider.sendAsync(createPayload(opts), function(err, response) {
      if (!err && response.error) err = new Error("EthQuery - RPC Error - " + response.error.message);
      if (err) return cb(err);
      cb(null, response.result);
    });
  };
  function generateFnFor(methodName) {
    return function() {
      const self2 = this;
      var args = [].slice.call(arguments);
      var cb = args.pop();
      self2.sendAsync({
        method: methodName,
        params: args
      }, cb);
    };
  }
  function generateFnWithDefaultBlockFor(argCount, methodName) {
    return function() {
      const self2 = this;
      var args = [].slice.call(arguments);
      var cb = args.pop();
      if (args.length < argCount) args.push("latest");
      self2.sendAsync({
        method: methodName,
        params: args
      }, cb);
    };
  }
  function createPayload(data) {
    return extend({
      // defaults
      id: createRandomId(),
      jsonrpc: "2.0",
      params: []
      // user-specified
    }, data);
  }
  return ethQuery;
}
var pify;
var hasRequiredPify;
function requirePify() {
  if (hasRequiredPify) return pify;
  hasRequiredPify = 1;
  const processFn = (fn, options, proxy, unwrapped) => function(...arguments_) {
    const P2 = options.promiseModule;
    return new P2((resolve, reject) => {
      if (options.multiArgs) {
        arguments_.push((...result) => {
          if (options.errorFirst) {
            if (result[0]) {
              reject(result);
            } else {
              result.shift();
              resolve(result);
            }
          } else {
            resolve(result);
          }
        });
      } else if (options.errorFirst) {
        arguments_.push((error2, result) => {
          if (error2) {
            reject(error2);
          } else {
            resolve(result);
          }
        });
      } else {
        arguments_.push(resolve);
      }
      const self2 = this === proxy ? unwrapped : this;
      Reflect.apply(fn, self2, arguments_);
    });
  };
  const filterCache = /* @__PURE__ */ new WeakMap();
  pify = (input, options) => {
    options = {
      exclude: [/.+(?:Sync|Stream)$/],
      errorFirst: true,
      promiseModule: Promise,
      ...options
    };
    const objectType = typeof input;
    if (!(input !== null && (objectType === "object" || objectType === "function"))) {
      throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? "null" : objectType}\``);
    }
    const filter = (target, key) => {
      let cached = filterCache.get(target);
      if (!cached) {
        cached = {};
        filterCache.set(target, cached);
      }
      if (key in cached) {
        return cached[key];
      }
      const match = (pattern2) => typeof pattern2 === "string" || typeof key === "symbol" ? key === pattern2 : pattern2.test(key);
      const desc = Reflect.getOwnPropertyDescriptor(target, key);
      const writableOrConfigurableOwn = desc === void 0 || desc.writable || desc.configurable;
      const included = options.include ? options.include.some(match) : !options.exclude.some(match);
      const shouldFilter = included && writableOrConfigurableOwn;
      cached[key] = shouldFilter;
      return shouldFilter;
    };
    const cache = /* @__PURE__ */ new WeakMap();
    const proxy = new Proxy(input, {
      apply(target, thisArg, args) {
        const cached = cache.get(target);
        if (cached) {
          return Reflect.apply(cached, thisArg, args);
        }
        const pified = options.excludeMain ? target : processFn(target, options, proxy, target);
        cache.set(target, pified);
        return Reflect.apply(pified, thisArg, args);
      },
      get(target, key) {
        const property = target[key];
        if (!filter(target, key) || property === Function.prototype[key]) {
          return property;
        }
        const cached = cache.get(property);
        if (cached) {
          return cached;
        }
        if (typeof property === "function") {
          const pified = processFn(property, options, proxy, target);
          cache.set(property, pified);
          return pified;
        }
        return property;
      }
    });
    return proxy;
  };
  return pify;
}
var baseFilter;
var hasRequiredBaseFilter;
function requireBaseFilter() {
  if (hasRequiredBaseFilter) return baseFilter;
  hasRequiredBaseFilter = 1;
  const SafeEventEmitter = requireCjs().default;
  class BaseFilter extends SafeEventEmitter {
    constructor() {
      super();
      this.updates = [];
    }
    async initialize() {
    }
    async update() {
      throw new Error("BaseFilter - no update method specified");
    }
    addResults(newResults) {
      this.updates = this.updates.concat(newResults);
      newResults.forEach((result) => this.emit("update", result));
    }
    addInitialResults(newResults) {
    }
    getChangesAndClear() {
      const updates = this.updates;
      this.updates = [];
      return updates;
    }
  }
  baseFilter = BaseFilter;
  return baseFilter;
}
var baseFilterHistory;
var hasRequiredBaseFilterHistory;
function requireBaseFilterHistory() {
  if (hasRequiredBaseFilterHistory) return baseFilterHistory;
  hasRequiredBaseFilterHistory = 1;
  const BaseFilter = requireBaseFilter();
  class BaseFilterWithHistory extends BaseFilter {
    constructor() {
      super();
      this.allResults = [];
    }
    async update() {
      throw new Error("BaseFilterWithHistory - no update method specified");
    }
    addResults(newResults) {
      this.allResults = this.allResults.concat(newResults);
      super.addResults(newResults);
    }
    addInitialResults(newResults) {
      this.allResults = this.allResults.concat(newResults);
      super.addInitialResults(newResults);
    }
    getAllResults() {
      return this.allResults;
    }
  }
  baseFilterHistory = BaseFilterWithHistory;
  return baseFilterHistory;
}
var hexUtils;
var hasRequiredHexUtils;
function requireHexUtils() {
  if (hasRequiredHexUtils) return hexUtils;
  hasRequiredHexUtils = 1;
  hexUtils = {
    minBlockRef,
    maxBlockRef,
    sortBlockRefs,
    bnToHex,
    blockRefIsNumber,
    hexToInt,
    incrementHexInt,
    intToHex,
    unsafeRandomBytes
  };
  function minBlockRef(...refs) {
    const sortedRefs = sortBlockRefs(refs);
    return sortedRefs[0];
  }
  function maxBlockRef(...refs) {
    const sortedRefs = sortBlockRefs(refs);
    return sortedRefs[sortedRefs.length - 1];
  }
  function sortBlockRefs(refs) {
    return refs.sort((refA, refB) => {
      if (refA === "latest" || refB === "earliest") return 1;
      if (refB === "latest" || refA === "earliest") return -1;
      return hexToInt(refA) - hexToInt(refB);
    });
  }
  function bnToHex(bn2) {
    return "0x" + bn2.toString(16);
  }
  function blockRefIsNumber(blockRef) {
    return blockRef && !["earliest", "latest", "pending"].includes(blockRef);
  }
  function hexToInt(hexString) {
    if (hexString === void 0 || hexString === null) return hexString;
    return Number.parseInt(hexString, 16);
  }
  function incrementHexInt(hexString) {
    if (hexString === void 0 || hexString === null) return hexString;
    const value = hexToInt(hexString);
    return intToHex(value + 1);
  }
  function intToHex(int) {
    if (int === void 0 || int === null) return int;
    let hexString = int.toString(16);
    const needsLeftPad = hexString.length % 2;
    if (needsLeftPad) hexString = "0" + hexString;
    return "0x" + hexString;
  }
  function unsafeRandomBytes(byteCount) {
    let result = "0x";
    for (let i2 = 0; i2 < byteCount; i2++) {
      result += unsafeRandomNibble();
      result += unsafeRandomNibble();
    }
    return result;
  }
  function unsafeRandomNibble() {
    return Math.floor(Math.random() * 16).toString(16);
  }
  return hexUtils;
}
var logFilter;
var hasRequiredLogFilter;
function requireLogFilter() {
  if (hasRequiredLogFilter) return logFilter;
  hasRequiredLogFilter = 1;
  const EthQuery = requireEthQuery();
  const pify2 = requirePify();
  const BaseFilterWithHistory = requireBaseFilterHistory();
  const { bnToHex, hexToInt, incrementHexInt, minBlockRef, blockRefIsNumber } = requireHexUtils();
  class LogFilter extends BaseFilterWithHistory {
    constructor({ provider, params }) {
      super();
      this.type = "log";
      this.ethQuery = new EthQuery(provider);
      this.params = Object.assign({
        fromBlock: "latest",
        toBlock: "latest",
        address: void 0,
        topics: []
      }, params);
      if (this.params.address) {
        if (!Array.isArray(this.params.address)) {
          this.params.address = [this.params.address];
        }
        this.params.address = this.params.address.map((address) => address.toLowerCase());
      }
    }
    async initialize({ currentBlock }) {
      let fromBlock = this.params.fromBlock;
      if (["latest", "pending"].includes(fromBlock)) fromBlock = currentBlock;
      if ("earliest" === fromBlock) fromBlock = "0x0";
      this.params.fromBlock = fromBlock;
      const toBlock = minBlockRef(this.params.toBlock, currentBlock);
      const params = Object.assign({}, this.params, { toBlock });
      const newLogs = await this._fetchLogs(params);
      this.addInitialResults(newLogs);
    }
    async update({ oldBlock, newBlock }) {
      const toBlock = newBlock;
      let fromBlock;
      if (oldBlock) {
        fromBlock = incrementHexInt(oldBlock);
      } else {
        fromBlock = newBlock;
      }
      const params = Object.assign({}, this.params, { fromBlock, toBlock });
      const newLogs = await this._fetchLogs(params);
      const matchingLogs = newLogs.filter((log) => this.matchLog(log));
      this.addResults(matchingLogs);
    }
    async _fetchLogs(params) {
      const newLogs = await pify2((cb) => this.ethQuery.getLogs(params, cb))();
      return newLogs;
    }
    matchLog(log) {
      if (hexToInt(this.params.fromBlock) >= hexToInt(log.blockNumber)) return false;
      if (blockRefIsNumber(this.params.toBlock) && hexToInt(this.params.toBlock) <= hexToInt(log.blockNumber)) return false;
      const normalizedLogAddress = log.address && log.address.toLowerCase();
      if (this.params.address && normalizedLogAddress && !this.params.address.includes(normalizedLogAddress)) return false;
      const topicsMatch = this.params.topics.every((topicPattern, index2) => {
        let logTopic = log.topics[index2];
        if (!logTopic) return false;
        logTopic = logTopic.toLowerCase();
        let subtopicsToMatch = Array.isArray(topicPattern) ? topicPattern : [topicPattern];
        const subtopicsIncludeWildcard = subtopicsToMatch.includes(null);
        if (subtopicsIncludeWildcard) return true;
        subtopicsToMatch = subtopicsToMatch.map((topic) => topic.toLowerCase());
        const topicDoesMatch = subtopicsToMatch.includes(logTopic);
        return topicDoesMatch;
      });
      return topicsMatch;
    }
  }
  logFilter = LogFilter;
  return logFilter;
}
var getBlocksForRange_1;
var hasRequiredGetBlocksForRange;
function requireGetBlocksForRange() {
  if (hasRequiredGetBlocksForRange) return getBlocksForRange_1;
  hasRequiredGetBlocksForRange = 1;
  getBlocksForRange_1 = getBlocksForRange;
  async function getBlocksForRange({ provider, fromBlock, toBlock }) {
    if (!fromBlock) fromBlock = toBlock;
    const fromBlockNumber = hexToInt(fromBlock);
    const toBlockNumber = hexToInt(toBlock);
    const blockCountToQuery = toBlockNumber - fromBlockNumber + 1;
    const missingBlockNumbers = Array(blockCountToQuery).fill().map((_2, index2) => fromBlockNumber + index2).map(intToHex);
    let blockBodies = await Promise.all(
      missingBlockNumbers.map((blockNum) => query(provider, "eth_getBlockByNumber", [blockNum, false]))
    );
    blockBodies = blockBodies.filter((block) => block !== null);
    return blockBodies;
  }
  function hexToInt(hexString) {
    if (hexString === void 0 || hexString === null) return hexString;
    return Number.parseInt(hexString, 16);
  }
  function intToHex(int) {
    if (int === void 0 || int === null) return int;
    const hexString = int.toString(16);
    return "0x" + hexString;
  }
  function sendAsync(provider, request) {
    return new Promise((resolve, reject) => {
      provider.sendAsync(request, (error2, response) => {
        if (error2) {
          reject(error2);
        } else if (response.error) {
          reject(response.error);
        } else if (response.result) {
          resolve(response.result);
        } else {
          reject(new Error("Result was empty"));
        }
      });
    });
  }
  async function query(provider, method, params) {
    for (let i2 = 0; i2 < 3; i2++) {
      try {
        return await sendAsync(provider, {
          id: 1,
          jsonrpc: "2.0",
          method,
          params
        });
      } catch (error2) {
        console.error(
          `provider.sendAsync failed: ${error2.stack || error2.message || error2}`
        );
      }
    }
    return null;
  }
  return getBlocksForRange_1;
}
var blockFilter;
var hasRequiredBlockFilter;
function requireBlockFilter() {
  if (hasRequiredBlockFilter) return blockFilter;
  hasRequiredBlockFilter = 1;
  const BaseFilter = requireBaseFilter();
  const getBlocksForRange = requireGetBlocksForRange();
  const { incrementHexInt } = requireHexUtils();
  class BlockFilter extends BaseFilter {
    constructor({ provider, params }) {
      super();
      this.type = "block";
      this.provider = provider;
    }
    async update({ oldBlock, newBlock }) {
      const toBlock = newBlock;
      const fromBlock = incrementHexInt(oldBlock);
      const blockBodies = await getBlocksForRange({ provider: this.provider, fromBlock, toBlock });
      const blockHashes = blockBodies.map((block) => block.hash);
      this.addResults(blockHashes);
    }
  }
  blockFilter = BlockFilter;
  return blockFilter;
}
var txFilter;
var hasRequiredTxFilter;
function requireTxFilter() {
  if (hasRequiredTxFilter) return txFilter;
  hasRequiredTxFilter = 1;
  const BaseFilter = requireBaseFilter();
  const getBlocksForRange = requireGetBlocksForRange();
  const { incrementHexInt } = requireHexUtils();
  class TxFilter extends BaseFilter {
    constructor({ provider }) {
      super();
      this.type = "tx";
      this.provider = provider;
    }
    async update({ oldBlock }) {
      const toBlock = oldBlock;
      const fromBlock = incrementHexInt(oldBlock);
      const blocks = await getBlocksForRange({ provider: this.provider, fromBlock, toBlock });
      const blockTxHashes = [];
      for (const block of blocks) {
        blockTxHashes.push(...block.transactions);
      }
      this.addResults(blockTxHashes);
    }
  }
  txFilter = TxFilter;
  return txFilter;
}
var ethJsonRpcFilters;
var hasRequiredEthJsonRpcFilters;
function requireEthJsonRpcFilters() {
  if (hasRequiredEthJsonRpcFilters) return ethJsonRpcFilters;
  hasRequiredEthJsonRpcFilters = 1;
  const Mutex2 = requireLib().Mutex;
  const { createAsyncMiddleware: createAsyncMiddleware2, createScaffoldMiddleware: createScaffoldMiddleware2 } = requireDist$1();
  const LogFilter = requireLogFilter();
  const BlockFilter = requireBlockFilter();
  const TxFilter = requireTxFilter();
  const { intToHex, hexToInt } = requireHexUtils();
  ethJsonRpcFilters = createEthFilterMiddleware;
  function createEthFilterMiddleware({ blockTracker, provider }) {
    let filterIndex = 0;
    let filters = {};
    const mutex = new Mutex2();
    const waitForFree = mutexMiddlewareWrapper({ mutex });
    const middleware = createScaffoldMiddleware2({
      // install filters
      eth_newFilter: waitForFree(toFilterCreationMiddleware(newLogFilter)),
      eth_newBlockFilter: waitForFree(toFilterCreationMiddleware(newBlockFilter)),
      eth_newPendingTransactionFilter: waitForFree(toFilterCreationMiddleware(newPendingTransactionFilter)),
      // uninstall filters
      eth_uninstallFilter: waitForFree(toAsyncRpcMiddleware(uninstallFilterHandler)),
      // checking filter changes
      eth_getFilterChanges: waitForFree(toAsyncRpcMiddleware(getFilterChanges)),
      eth_getFilterLogs: waitForFree(toAsyncRpcMiddleware(getFilterLogs))
    });
    const filterUpdater = async ({ oldBlock, newBlock }) => {
      if (filters.length === 0) return;
      const releaseLock = await mutex.acquire();
      try {
        await Promise.all(objValues(filters).map(async (filter) => {
          try {
            await filter.update({ oldBlock, newBlock });
          } catch (err) {
            console.error(err);
          }
        }));
      } catch (err) {
        console.error(err);
      }
      releaseLock();
    };
    middleware.newLogFilter = newLogFilter;
    middleware.newBlockFilter = newBlockFilter;
    middleware.newPendingTransactionFilter = newPendingTransactionFilter;
    middleware.uninstallFilter = uninstallFilterHandler;
    middleware.getFilterChanges = getFilterChanges;
    middleware.getFilterLogs = getFilterLogs;
    middleware.destroy = () => {
      uninstallAllFilters();
    };
    return middleware;
    async function newLogFilter(params) {
      const filter = new LogFilter({ provider, params });
      await installFilter(filter);
      return filter;
    }
    async function newBlockFilter() {
      const filter = new BlockFilter({ provider });
      await installFilter(filter);
      return filter;
    }
    async function newPendingTransactionFilter() {
      const filter = new TxFilter({ provider });
      await installFilter(filter);
      return filter;
    }
    async function getFilterChanges(filterIndexHex) {
      const filterIndex2 = hexToInt(filterIndexHex);
      const filter = filters[filterIndex2];
      if (!filter) {
        throw new Error(`No filter for index "${filterIndex2}"`);
      }
      const results = filter.getChangesAndClear();
      return results;
    }
    async function getFilterLogs(filterIndexHex) {
      const filterIndex2 = hexToInt(filterIndexHex);
      const filter = filters[filterIndex2];
      if (!filter) {
        throw new Error(`No filter for index "${filterIndex2}"`);
      }
      let results = [];
      if (filter.type === "log") {
        results = filter.getAllResults();
      }
      return results;
    }
    async function uninstallFilterHandler(filterIndexHex) {
      const filterIndex2 = hexToInt(filterIndexHex);
      const filter = filters[filterIndex2];
      const result = Boolean(filter);
      if (result) {
        await uninstallFilter(filterIndex2);
      }
      return result;
    }
    async function installFilter(filter) {
      const prevFilterCount = objValues(filters).length;
      const currentBlock = await blockTracker.getLatestBlock();
      await filter.initialize({ currentBlock });
      filterIndex++;
      filters[filterIndex] = filter;
      filter.id = filterIndex;
      filter.idHex = intToHex(filterIndex);
      const newFilterCount = objValues(filters).length;
      updateBlockTrackerSubs({ prevFilterCount, newFilterCount });
      return filterIndex;
    }
    async function uninstallFilter(filterIndex2) {
      const prevFilterCount = objValues(filters).length;
      delete filters[filterIndex2];
      const newFilterCount = objValues(filters).length;
      updateBlockTrackerSubs({ prevFilterCount, newFilterCount });
    }
    async function uninstallAllFilters() {
      const prevFilterCount = objValues(filters).length;
      filters = {};
      updateBlockTrackerSubs({ prevFilterCount, newFilterCount: 0 });
    }
    function updateBlockTrackerSubs({ prevFilterCount, newFilterCount }) {
      if (prevFilterCount === 0 && newFilterCount > 0) {
        blockTracker.on("sync", filterUpdater);
        return;
      }
      if (prevFilterCount > 0 && newFilterCount === 0) {
        blockTracker.removeListener("sync", filterUpdater);
        return;
      }
    }
  }
  function toFilterCreationMiddleware(createFilterFn) {
    return toAsyncRpcMiddleware(async (...args) => {
      const filter = await createFilterFn(...args);
      const result = intToHex(filter.id);
      return result;
    });
  }
  function toAsyncRpcMiddleware(asyncFn) {
    return createAsyncMiddleware2(async (req, res) => {
      const result = await asyncFn.apply(null, req.params);
      res.result = result;
    });
  }
  function mutexMiddlewareWrapper({ mutex }) {
    return (middleware) => {
      return async (req, res, next, end) => {
        const releaseLock = await mutex.acquire();
        releaseLock();
        middleware(req, res, next, end);
      };
    };
  }
  function objValues(obj, fn) {
    const values = [];
    for (let key in obj) {
      values.push(obj[key]);
    }
    return values;
  }
  return ethJsonRpcFilters;
}
var subscriptionManager;
var hasRequiredSubscriptionManager$1;
function requireSubscriptionManager$1() {
  if (hasRequiredSubscriptionManager$1) return subscriptionManager;
  hasRequiredSubscriptionManager$1 = 1;
  const SafeEventEmitter = requireCjs().default;
  const { createAsyncMiddleware: createAsyncMiddleware2, createScaffoldMiddleware: createScaffoldMiddleware2 } = requireDist$1();
  const createFilterMiddleware = requireEthJsonRpcFilters();
  const { unsafeRandomBytes, incrementHexInt } = requireHexUtils();
  const getBlocksForRange = requireGetBlocksForRange();
  subscriptionManager = createSubscriptionMiddleware;
  function createSubscriptionMiddleware({ blockTracker, provider }) {
    const subscriptions = {};
    const filterManager = createFilterMiddleware({ blockTracker, provider });
    let isDestroyed = false;
    const events = new SafeEventEmitter();
    const middleware = createScaffoldMiddleware2({
      eth_subscribe: createAsyncMiddleware2(subscribe),
      eth_unsubscribe: createAsyncMiddleware2(unsubscribe)
    });
    middleware.destroy = destroy;
    return { events, middleware };
    async function subscribe(req, res) {
      if (isDestroyed) throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
      const subscriptionType = req.params[0];
      const subId = unsafeRandomBytes(16);
      let sub;
      switch (subscriptionType) {
        case "newHeads":
          sub = createSubNewHeads({ subId });
          break;
        case "logs":
          const filterParams = req.params[1];
          const filter = await filterManager.newLogFilter(filterParams);
          sub = createSubFromFilter({ subId, filter });
          break;
        default:
          throw new Error(`SubscriptionManager - unsupported subscription type "${subscriptionType}"`);
      }
      subscriptions[subId] = sub;
      res.result = subId;
      return;
      function createSubNewHeads({ subId: subId2 }) {
        const sub2 = {
          type: subscriptionType,
          destroy: async () => {
            blockTracker.removeListener("sync", sub2.update);
          },
          update: async ({ oldBlock, newBlock }) => {
            const toBlock = newBlock;
            const fromBlock = incrementHexInt(oldBlock);
            const rawBlocks = await getBlocksForRange({ provider, fromBlock, toBlock });
            const results = rawBlocks.map(normalizeBlock).filter((block) => block !== null);
            results.forEach((value) => {
              _emitSubscriptionResult(subId2, value);
            });
          }
        };
        blockTracker.on("sync", sub2.update);
        return sub2;
      }
      function createSubFromFilter({ subId: subId2, filter }) {
        filter.on("update", (result) => _emitSubscriptionResult(subId2, result));
        const sub2 = {
          type: subscriptionType,
          destroy: async () => {
            return await filterManager.uninstallFilter(filter.idHex);
          }
        };
        return sub2;
      }
    }
    async function unsubscribe(req, res) {
      if (isDestroyed) throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
      const id = req.params[0];
      const subscription = subscriptions[id];
      if (!subscription) {
        res.result = false;
        return;
      }
      delete subscriptions[id];
      await subscription.destroy();
      res.result = true;
    }
    function _emitSubscriptionResult(filterIdHex, value) {
      events.emit("notification", {
        jsonrpc: "2.0",
        method: "eth_subscription",
        params: {
          subscription: filterIdHex,
          result: value
        }
      });
    }
    function destroy() {
      events.removeAllListeners();
      for (const id in subscriptions) {
        subscriptions[id].destroy();
        delete subscriptions[id];
      }
      isDestroyed = true;
    }
  }
  function normalizeBlock(block) {
    if (block === null || block === void 0) {
      return null;
    }
    return {
      hash: block.hash,
      parentHash: block.parentHash,
      sha3Uncles: block.sha3Uncles,
      miner: block.miner,
      stateRoot: block.stateRoot,
      transactionsRoot: block.transactionsRoot,
      receiptsRoot: block.receiptsRoot,
      logsBloom: block.logsBloom,
      difficulty: block.difficulty,
      number: block.number,
      gasLimit: block.gasLimit,
      gasUsed: block.gasUsed,
      nonce: block.nonce,
      mixHash: block.mixHash,
      timestamp: block.timestamp,
      extraData: block.extraData
    };
  }
  return subscriptionManager;
}
var hasRequiredSubscriptionManager;
function requireSubscriptionManager() {
  if (hasRequiredSubscriptionManager) return SubscriptionManager;
  hasRequiredSubscriptionManager = 1;
  Object.defineProperty(SubscriptionManager, "__esModule", { value: true });
  SubscriptionManager.SubscriptionManager = void 0;
  const eth_block_tracker_1 = requireDist$3();
  const createSubscriptionManager = requireSubscriptionManager$1();
  const noop = () => {
  };
  let SubscriptionManager$1 = class SubscriptionManager {
    constructor(provider) {
      const blockTracker = new eth_block_tracker_1.PollingBlockTracker({
        provider,
        pollingInterval: 15e3,
        setSkipCacheFlag: true
      });
      const { events, middleware } = createSubscriptionManager({
        blockTracker,
        provider
      });
      this.events = events;
      this.subscriptionMiddleware = middleware;
    }
    async handleRequest(request) {
      const result = {};
      await this.subscriptionMiddleware(request, result, noop, noop);
      return result;
    }
    destroy() {
      this.subscriptionMiddleware.destroy();
    }
  };
  SubscriptionManager.SubscriptionManager = SubscriptionManager$1;
  return SubscriptionManager;
}
var hasRequiredCoinbaseWalletProvider;
function requireCoinbaseWalletProvider() {
  if (hasRequiredCoinbaseWalletProvider) return CoinbaseWalletProvider;
  hasRequiredCoinbaseWalletProvider = 1;
  var __importDefault2 = CoinbaseWalletProvider && CoinbaseWalletProvider.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(CoinbaseWalletProvider, "__esModule", { value: true });
  CoinbaseWalletProvider.CoinbaseWalletProvider = void 0;
  const bn_js_1 = __importDefault2(requireBn());
  const eventemitter3_1 = requireEventemitter3();
  const error_1 = /* @__PURE__ */ requireError();
  const util_1 = /* @__PURE__ */ requireUtil$1();
  const MobileRelay_1 = /* @__PURE__ */ requireMobileRelay();
  const RelayAbstract_1 = /* @__PURE__ */ requireRelayAbstract();
  const Session_1 = /* @__PURE__ */ requireSession();
  const Web3Response_1 = /* @__PURE__ */ requireWeb3Response();
  const eth_eip712_util_1 = __importDefault2(/* @__PURE__ */ requireEthEip712Util());
  const DiagnosticLogger_1 = /* @__PURE__ */ requireDiagnosticLogger();
  const FilterPolyfill_1 = /* @__PURE__ */ requireFilterPolyfill();
  const SubscriptionManager_1 = /* @__PURE__ */ requireSubscriptionManager();
  const DEFAULT_CHAIN_ID_KEY = "DefaultChainId";
  const DEFAULT_JSON_RPC_URL = "DefaultJsonRpcUrl";
  let CoinbaseWalletProvider$1 = class CoinbaseWalletProvider extends eventemitter3_1.EventEmitter {
    constructor(options) {
      var _a, _b;
      super();
      this._filterPolyfill = new FilterPolyfill_1.FilterPolyfill(this);
      this._subscriptionManager = new SubscriptionManager_1.SubscriptionManager(this);
      this._relay = null;
      this._addresses = [];
      this.hasMadeFirstChainChangedEmission = false;
      this.setProviderInfo = this.setProviderInfo.bind(this);
      this.updateProviderInfo = this.updateProviderInfo.bind(this);
      this.getChainId = this.getChainId.bind(this);
      this.setAppInfo = this.setAppInfo.bind(this);
      this.enable = this.enable.bind(this);
      this.close = this.close.bind(this);
      this.send = this.send.bind(this);
      this.sendAsync = this.sendAsync.bind(this);
      this.request = this.request.bind(this);
      this._setAddresses = this._setAddresses.bind(this);
      this.scanQRCode = this.scanQRCode.bind(this);
      this.genericRequest = this.genericRequest.bind(this);
      this._chainIdFromOpts = options.chainId;
      this._jsonRpcUrlFromOpts = options.jsonRpcUrl;
      this._overrideIsMetaMask = options.overrideIsMetaMask;
      this._relayProvider = options.relayProvider;
      this._storage = options.storage;
      this._relayEventManager = options.relayEventManager;
      this.diagnostic = options.diagnosticLogger;
      this.reloadOnDisconnect = true;
      this.isCoinbaseWallet = (_a = options.overrideIsCoinbaseWallet) !== null && _a !== void 0 ? _a : true;
      this.isCoinbaseBrowser = (_b = options.overrideIsCoinbaseBrowser) !== null && _b !== void 0 ? _b : false;
      this.qrUrl = options.qrUrl;
      const chainId = this.getChainId();
      const chainIdStr = (0, util_1.prepend0x)(chainId.toString(16));
      this.emit("connect", { chainIdStr });
      const cachedAddresses = this._storage.getItem(RelayAbstract_1.LOCAL_STORAGE_ADDRESSES_KEY);
      if (cachedAddresses) {
        const addresses = cachedAddresses.split(" ");
        if (addresses[0] !== "") {
          this._addresses = addresses.map((address) => (0, util_1.ensureAddressString)(address));
          this.emit("accountsChanged", addresses);
        }
      }
      this._subscriptionManager.events.on("notification", (notification) => {
        this.emit("message", {
          type: notification.method,
          data: notification.params
        });
      });
      if (this._isAuthorized()) {
        void this.initializeRelay();
      }
      window.addEventListener("message", (event) => {
        var _a2;
        if (event.origin !== location.origin || event.source !== window) {
          return;
        }
        if (event.data.type !== "walletLinkMessage")
          return;
        if (event.data.data.action === "dappChainSwitched") {
          const _chainId = event.data.data.chainId;
          const jsonRpcUrl = (_a2 = event.data.data.jsonRpcUrl) !== null && _a2 !== void 0 ? _a2 : this.jsonRpcUrl;
          this.updateProviderInfo(jsonRpcUrl, Number(_chainId));
        }
      });
    }
    /** @deprecated Use `.request({ method: 'eth_accounts' })` instead. */
    get selectedAddress() {
      return this._addresses[0] || void 0;
    }
    /** @deprecated Use the chain ID. If you still need the network ID, use `.request({ method: 'net_version' })`. */
    get networkVersion() {
      return this.getChainId().toString(10);
    }
    /** @deprecated Use `.request({ method: 'eth_chainId' })` instead. */
    get chainId() {
      return (0, util_1.prepend0x)(this.getChainId().toString(16));
    }
    get isWalletLink() {
      return true;
    }
    /**
     * Some DApps (i.e. Alpha Homora) seem to require the window.ethereum object return
     * true for this method.
     */
    get isMetaMask() {
      return this._overrideIsMetaMask;
    }
    get host() {
      return this.jsonRpcUrl;
    }
    get connected() {
      return true;
    }
    isConnected() {
      return true;
    }
    get jsonRpcUrl() {
      var _a;
      return (_a = this._storage.getItem(DEFAULT_JSON_RPC_URL)) !== null && _a !== void 0 ? _a : this._jsonRpcUrlFromOpts;
    }
    set jsonRpcUrl(value) {
      this._storage.setItem(DEFAULT_JSON_RPC_URL, value);
    }
    disableReloadOnDisconnect() {
      this.reloadOnDisconnect = false;
    }
    setProviderInfo(jsonRpcUrl, chainId) {
      if (!this.isCoinbaseBrowser) {
        this._chainIdFromOpts = chainId;
        this._jsonRpcUrlFromOpts = jsonRpcUrl;
      }
      this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
    }
    updateProviderInfo(jsonRpcUrl, chainId) {
      this.jsonRpcUrl = jsonRpcUrl;
      const originalChainId = this.getChainId();
      this._storage.setItem(DEFAULT_CHAIN_ID_KEY, chainId.toString(10));
      const chainChanged = (0, util_1.ensureIntNumber)(chainId) !== originalChainId;
      if (chainChanged || !this.hasMadeFirstChainChangedEmission) {
        this.emit("chainChanged", this.getChainId());
        this.hasMadeFirstChainChangedEmission = true;
      }
    }
    async watchAsset(type2, address, symbol, decimals, image, chainId) {
      const relay = await this.initializeRelay();
      const result = await relay.watchAsset(type2, address, symbol, decimals, image, chainId === null || chainId === void 0 ? void 0 : chainId.toString()).promise;
      if ((0, Web3Response_1.isErrorResponse)(result))
        return false;
      return !!result.result;
    }
    async addEthereumChain(chainId, rpcUrls, blockExplorerUrls, chainName, iconUrls, nativeCurrency) {
      var _a, _b;
      if ((0, util_1.ensureIntNumber)(chainId) === this.getChainId()) {
        return false;
      }
      const relay = await this.initializeRelay();
      const isWhitelistedNetworkOrStandalone = relay.inlineAddEthereumChain(chainId.toString());
      if (!this._isAuthorized() && !isWhitelistedNetworkOrStandalone) {
        await relay.requestEthereumAccounts().promise;
      }
      const res = await relay.addEthereumChain(chainId.toString(), rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency).promise;
      if ((0, Web3Response_1.isErrorResponse)(res))
        return false;
      if (((_a = res.result) === null || _a === void 0 ? void 0 : _a.isApproved) === true) {
        this.updateProviderInfo(rpcUrls[0], chainId);
      }
      return ((_b = res.result) === null || _b === void 0 ? void 0 : _b.isApproved) === true;
    }
    async switchEthereumChain(chainId) {
      const relay = await this.initializeRelay();
      const res = await relay.switchEthereumChain(chainId.toString(10), this.selectedAddress || void 0).promise;
      if ((0, Web3Response_1.isErrorResponse)(res)) {
        if (!res.errorCode)
          return;
        if (res.errorCode === error_1.standardErrorCodes.provider.unsupportedChain) {
          throw error_1.standardErrors.provider.unsupportedChain();
        } else {
          throw error_1.standardErrors.provider.custom({
            message: res.errorMessage,
            code: res.errorCode
          });
        }
      }
      const switchResponse = res.result;
      if (switchResponse.isApproved && switchResponse.rpcUrl.length > 0) {
        this.updateProviderInfo(switchResponse.rpcUrl, chainId);
      }
    }
    setAppInfo(appName, appLogoUrl) {
      void this.initializeRelay().then((relay) => relay.setAppInfo(appName, appLogoUrl));
    }
    /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
    async enable() {
      var _a;
      (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.ETH_ACCOUNTS_STATE, {
        method: "provider::enable",
        addresses_length: this._addresses.length,
        sessionIdHash: this._relay ? Session_1.Session.hash(this._relay.session.id) : void 0
      });
      if (this._isAuthorized()) {
        return [...this._addresses];
      }
      return await this.send("eth_requestAccounts");
    }
    async close() {
      const relay = await this.initializeRelay();
      relay.resetAndReload();
    }
    send(requestOrMethod, callbackOrParams) {
      try {
        const result = this._send(requestOrMethod, callbackOrParams);
        if (result instanceof Promise) {
          return result.catch((error2) => {
            throw (0, error_1.serializeError)(error2, requestOrMethod);
          });
        }
      } catch (error2) {
        throw (0, error_1.serializeError)(error2, requestOrMethod);
      }
    }
    _send(requestOrMethod, callbackOrParams) {
      if (typeof requestOrMethod === "string") {
        const method = requestOrMethod;
        const params = Array.isArray(callbackOrParams) ? callbackOrParams : callbackOrParams !== void 0 ? [callbackOrParams] : [];
        const request = {
          jsonrpc: "2.0",
          id: 0,
          method,
          params
        };
        return this._sendRequestAsync(request).then((res) => res.result);
      }
      if (typeof callbackOrParams === "function") {
        const request = requestOrMethod;
        const callback = callbackOrParams;
        return this._sendAsync(request, callback);
      }
      if (Array.isArray(requestOrMethod)) {
        const requests = requestOrMethod;
        return requests.map((r2) => this._sendRequest(r2));
      }
      const req = requestOrMethod;
      return this._sendRequest(req);
    }
    async sendAsync(request, callback) {
      try {
        return this._sendAsync(request, callback).catch((error2) => {
          throw (0, error_1.serializeError)(error2, request);
        });
      } catch (error2) {
        return Promise.reject((0, error_1.serializeError)(error2, request));
      }
    }
    async _sendAsync(request, callback) {
      if (typeof callback !== "function") {
        throw new Error("callback is required");
      }
      if (Array.isArray(request)) {
        const arrayCb = callback;
        this._sendMultipleRequestsAsync(request).then((responses) => arrayCb(null, responses)).catch((err) => arrayCb(err, null));
        return;
      }
      const cb = callback;
      return this._sendRequestAsync(request).then((response) => cb(null, response)).catch((err) => cb(err, null));
    }
    async request(args) {
      try {
        return this._request(args).catch((error2) => {
          throw (0, error_1.serializeError)(error2, args.method);
        });
      } catch (error2) {
        return Promise.reject((0, error_1.serializeError)(error2, args.method));
      }
    }
    async _request(args) {
      if (!args || typeof args !== "object" || Array.isArray(args)) {
        throw error_1.standardErrors.rpc.invalidRequest({
          message: "Expected a single, non-array, object argument.",
          data: args
        });
      }
      const { method, params } = args;
      if (typeof method !== "string" || method.length === 0) {
        throw error_1.standardErrors.rpc.invalidRequest({
          message: "'args.method' must be a non-empty string.",
          data: args
        });
      }
      if (params !== void 0 && !Array.isArray(params) && (typeof params !== "object" || params === null)) {
        throw error_1.standardErrors.rpc.invalidRequest({
          message: "'args.params' must be an object or array if provided.",
          data: args
        });
      }
      const newParams = params === void 0 ? [] : params;
      const id = this._relayEventManager.makeRequestId();
      const result = await this._sendRequestAsync({
        method,
        params: newParams,
        jsonrpc: "2.0",
        id
      });
      return result.result;
    }
    async scanQRCode(match) {
      const relay = await this.initializeRelay();
      const res = await relay.scanQRCode((0, util_1.ensureRegExpString)(match)).promise;
      if ((0, Web3Response_1.isErrorResponse)(res)) {
        throw (0, error_1.serializeError)(res.errorMessage, "scanQRCode");
      } else if (typeof res.result !== "string") {
        throw (0, error_1.serializeError)("result was not a string", "scanQRCode");
      }
      return res.result;
    }
    async genericRequest(data, action) {
      const relay = await this.initializeRelay();
      const res = await relay.genericRequest(data, action).promise;
      if ((0, Web3Response_1.isErrorResponse)(res)) {
        throw (0, error_1.serializeError)(res.errorMessage, "generic");
      } else if (typeof res.result !== "string") {
        throw (0, error_1.serializeError)("result was not a string", "generic");
      }
      return res.result;
    }
    /**
     * @beta
     * This method is currently in beta. While it is available for use, please note that it is still under testing and may undergo significant changes.
     *
     * @remarks
     * IMPORTANT: Signature validation is not performed by this method. Users of this method are advised to perform their own signature validation.
     * Common web3 frontend libraries such as ethers.js and viem provide the `verifyMessage` utility function that can be used for signature validation.
     *
     * It combines `eth_requestAccounts` and "Sign-In with Ethereum" (EIP-4361) into a single call.
     * The returned account and signed message can be used to authenticate the user.
     *
     * @param {Object} params - An object with the following properties:
     * - `nonce` {string}: A unique string to prevent replay attacks.
     * - `statement` {string}: An optional human-readable ASCII assertion that the user will sign.
     * - `resources` {string[]}: An optional list of information the user wishes to have resolved as part of authentication by the relying party.
     *
     * @returns {Promise<ConnectAndSignInResponse>} A promise that resolves to an object with the following properties:
     * - `accounts` {string[]}: The Ethereum accounts of the user.
     * - `message` {string}: The overall message that the user signed. Hex encoded.
     * - `signature` {string}: The signature of the message, signed with the user's private key. Hex encoded.
     */
    async connectAndSignIn(params) {
      var _a;
      (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.ETH_ACCOUNTS_STATE, {
        method: "provider::connectAndSignIn",
        sessionIdHash: this._relay ? Session_1.Session.hash(this._relay.session.id) : void 0
      });
      let res;
      try {
        const relay = await this.initializeRelay();
        if (!(relay instanceof MobileRelay_1.MobileRelay)) {
          throw new Error("connectAndSignIn is only supported on mobile");
        }
        res = await relay.connectAndSignIn(params).promise;
        if ((0, Web3Response_1.isErrorResponse)(res)) {
          throw new Error(res.errorMessage);
        }
      } catch (err) {
        if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
          throw error_1.standardErrors.provider.userRejectedRequest("User denied account authorization");
        }
        throw err;
      }
      if (!res.result) {
        throw new Error("accounts received is empty");
      }
      const { accounts } = res.result;
      this._setAddresses(accounts);
      if (!this.isCoinbaseBrowser) {
        await this.switchEthereumChain(this.getChainId());
      }
      return res.result;
    }
    async selectProvider(providerOptions) {
      const relay = await this.initializeRelay();
      const res = await relay.selectProvider(providerOptions).promise;
      if ((0, Web3Response_1.isErrorResponse)(res)) {
        throw (0, error_1.serializeError)(res.errorMessage, "selectProvider");
      } else if (typeof res.result !== "string") {
        throw (0, error_1.serializeError)("result was not a string", "selectProvider");
      }
      return res.result;
    }
    supportsSubscriptions() {
      return false;
    }
    subscribe() {
      throw new Error("Subscriptions are not supported");
    }
    unsubscribe() {
      throw new Error("Subscriptions are not supported");
    }
    disconnect() {
      return true;
    }
    _sendRequest(request) {
      const response = {
        jsonrpc: "2.0",
        id: request.id
      };
      const { method } = request;
      response.result = this._handleSynchronousMethods(request);
      if (response.result === void 0) {
        throw new Error(`Coinbase Wallet does not support calling ${method} synchronously without a callback. Please provide a callback parameter to call ${method} asynchronously.`);
      }
      return response;
    }
    _setAddresses(addresses, _2) {
      if (!Array.isArray(addresses)) {
        throw new Error("addresses is not an array");
      }
      const newAddresses = addresses.map((address) => (0, util_1.ensureAddressString)(address));
      if (JSON.stringify(newAddresses) === JSON.stringify(this._addresses)) {
        return;
      }
      this._addresses = newAddresses;
      this.emit("accountsChanged", this._addresses);
      this._storage.setItem(RelayAbstract_1.LOCAL_STORAGE_ADDRESSES_KEY, newAddresses.join(" "));
    }
    _sendRequestAsync(request) {
      return new Promise((resolve, reject) => {
        try {
          const syncResult = this._handleSynchronousMethods(request);
          if (syncResult !== void 0) {
            return resolve({
              jsonrpc: "2.0",
              id: request.id,
              result: syncResult
            });
          }
          const filterPromise = this._handleAsynchronousFilterMethods(request);
          if (filterPromise !== void 0) {
            filterPromise.then((res) => resolve(Object.assign(Object.assign({}, res), { id: request.id }))).catch((err) => reject(err));
            return;
          }
          const subscriptionPromise = this._handleSubscriptionMethods(request);
          if (subscriptionPromise !== void 0) {
            subscriptionPromise.then((res) => resolve({
              jsonrpc: "2.0",
              id: request.id,
              result: res.result
            })).catch((err) => reject(err));
            return;
          }
        } catch (err) {
          return reject(err);
        }
        this._handleAsynchronousMethods(request).then((res) => res && resolve(Object.assign(Object.assign({}, res), { id: request.id }))).catch((err) => reject(err));
      });
    }
    _sendMultipleRequestsAsync(requests) {
      return Promise.all(requests.map((r2) => this._sendRequestAsync(r2)));
    }
    _handleSynchronousMethods(request) {
      const { method } = request;
      const params = request.params || [];
      switch (method) {
        case "eth_accounts":
          return this._eth_accounts();
        case "eth_coinbase":
          return this._eth_coinbase();
        case "eth_uninstallFilter":
          return this._eth_uninstallFilter(params);
        case "net_version":
          return this._net_version();
        case "eth_chainId":
          return this._eth_chainId();
        default:
          return void 0;
      }
    }
    async _handleAsynchronousMethods(request) {
      const { method } = request;
      const params = request.params || [];
      switch (method) {
        case "eth_requestAccounts":
          return this._eth_requestAccounts();
        case "eth_sign":
          return this._eth_sign(params);
        case "eth_ecRecover":
          return this._eth_ecRecover(params);
        case "personal_sign":
          return this._personal_sign(params);
        case "personal_ecRecover":
          return this._personal_ecRecover(params);
        case "eth_signTransaction":
          return this._eth_signTransaction(params);
        case "eth_sendRawTransaction":
          return this._eth_sendRawTransaction(params);
        case "eth_sendTransaction":
          return this._eth_sendTransaction(params);
        case "eth_signTypedData_v1":
          return this._eth_signTypedData_v1(params);
        case "eth_signTypedData_v2":
          return this._throwUnsupportedMethodError();
        case "eth_signTypedData_v3":
          return this._eth_signTypedData_v3(params);
        case "eth_signTypedData_v4":
        case "eth_signTypedData":
          return this._eth_signTypedData_v4(params);
        case "cbWallet_arbitrary":
          return this._cbwallet_arbitrary(params);
        case "wallet_addEthereumChain":
          return this._wallet_addEthereumChain(params);
        case "wallet_switchEthereumChain":
          return this._wallet_switchEthereumChain(params);
        case "wallet_watchAsset":
          return this._wallet_watchAsset(params);
      }
      const relay = await this.initializeRelay();
      return relay.makeEthereumJSONRPCRequest(request, this.jsonRpcUrl).catch((err) => {
        var _a;
        if (err.code === error_1.standardErrorCodes.rpc.methodNotFound || err.code === error_1.standardErrorCodes.rpc.methodNotSupported) {
          (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.METHOD_NOT_IMPLEMENTED, {
            method: request.method,
            sessionIdHash: this._relay ? Session_1.Session.hash(this._relay.session.id) : void 0
          });
        }
        throw err;
      });
    }
    _handleAsynchronousFilterMethods(request) {
      const { method } = request;
      const params = request.params || [];
      switch (method) {
        case "eth_newFilter":
          return this._eth_newFilter(params);
        case "eth_newBlockFilter":
          return this._eth_newBlockFilter();
        case "eth_newPendingTransactionFilter":
          return this._eth_newPendingTransactionFilter();
        case "eth_getFilterChanges":
          return this._eth_getFilterChanges(params);
        case "eth_getFilterLogs":
          return this._eth_getFilterLogs(params);
      }
      return void 0;
    }
    _handleSubscriptionMethods(request) {
      switch (request.method) {
        case "eth_subscribe":
        case "eth_unsubscribe":
          return this._subscriptionManager.handleRequest(request);
      }
      return void 0;
    }
    _isKnownAddress(addressString) {
      try {
        const addressStr = (0, util_1.ensureAddressString)(addressString);
        const lowercaseAddresses = this._addresses.map((address) => (0, util_1.ensureAddressString)(address));
        return lowercaseAddresses.includes(addressStr);
      } catch (_a) {
      }
      return false;
    }
    _ensureKnownAddress(addressString) {
      var _a;
      if (!this._isKnownAddress(addressString)) {
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED);
        throw new Error("Unknown Ethereum address");
      }
    }
    _prepareTransactionParams(tx) {
      const fromAddress = tx.from ? (0, util_1.ensureAddressString)(tx.from) : this.selectedAddress;
      if (!fromAddress) {
        throw new Error("Ethereum address is unavailable");
      }
      this._ensureKnownAddress(fromAddress);
      const toAddress = tx.to ? (0, util_1.ensureAddressString)(tx.to) : null;
      const weiValue = tx.value != null ? (0, util_1.ensureBN)(tx.value) : new bn_js_1.default(0);
      const data = tx.data ? (0, util_1.ensureBuffer)(tx.data) : Buffer.alloc(0);
      const nonce = tx.nonce != null ? (0, util_1.ensureIntNumber)(tx.nonce) : null;
      const gasPriceInWei = tx.gasPrice != null ? (0, util_1.ensureBN)(tx.gasPrice) : null;
      const maxFeePerGas = tx.maxFeePerGas != null ? (0, util_1.ensureBN)(tx.maxFeePerGas) : null;
      const maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? (0, util_1.ensureBN)(tx.maxPriorityFeePerGas) : null;
      const gasLimit = tx.gas != null ? (0, util_1.ensureBN)(tx.gas) : null;
      const chainId = tx.chainId ? (0, util_1.ensureIntNumber)(tx.chainId) : this.getChainId();
      return {
        fromAddress,
        toAddress,
        weiValue,
        data,
        nonce,
        gasPriceInWei,
        maxFeePerGas,
        maxPriorityFeePerGas,
        gasLimit,
        chainId
      };
    }
    _isAuthorized() {
      return this._addresses.length > 0;
    }
    _requireAuthorization() {
      if (!this._isAuthorized()) {
        throw error_1.standardErrors.provider.unauthorized({});
      }
    }
    _throwUnsupportedMethodError() {
      throw error_1.standardErrors.provider.unsupportedMethod({});
    }
    async _signEthereumMessage(message, address, addPrefix, typedDataJson) {
      this._ensureKnownAddress(address);
      try {
        const relay = await this.initializeRelay();
        const res = await relay.signEthereumMessage(message, address, addPrefix, typedDataJson).promise;
        if ((0, Web3Response_1.isErrorResponse)(res)) {
          throw new Error(res.errorMessage);
        }
        return { jsonrpc: "2.0", id: 0, result: res.result };
      } catch (err) {
        if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
          throw error_1.standardErrors.provider.userRejectedRequest("User denied message signature");
        }
        throw err;
      }
    }
    async _ethereumAddressFromSignedMessage(message, signature, addPrefix) {
      const relay = await this.initializeRelay();
      const res = await relay.ethereumAddressFromSignedMessage(message, signature, addPrefix).promise;
      if ((0, Web3Response_1.isErrorResponse)(res)) {
        throw new Error(res.errorMessage);
      }
      return { jsonrpc: "2.0", id: 0, result: res.result };
    }
    _eth_accounts() {
      return [...this._addresses];
    }
    _eth_coinbase() {
      return this.selectedAddress || null;
    }
    _net_version() {
      return this.getChainId().toString(10);
    }
    _eth_chainId() {
      return (0, util_1.hexStringFromIntNumber)(this.getChainId());
    }
    getChainId() {
      const chainIdStr = this._storage.getItem(DEFAULT_CHAIN_ID_KEY);
      if (!chainIdStr) {
        return (0, util_1.ensureIntNumber)(this._chainIdFromOpts);
      }
      const chainId = parseInt(chainIdStr, 10);
      return (0, util_1.ensureIntNumber)(chainId);
    }
    async _eth_requestAccounts() {
      var _a;
      (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.ETH_ACCOUNTS_STATE, {
        method: "provider::_eth_requestAccounts",
        addresses_length: this._addresses.length,
        sessionIdHash: this._relay ? Session_1.Session.hash(this._relay.session.id) : void 0
      });
      if (this._isAuthorized()) {
        return Promise.resolve({
          jsonrpc: "2.0",
          id: 0,
          result: this._addresses
        });
      }
      let res;
      try {
        const relay = await this.initializeRelay();
        res = await relay.requestEthereumAccounts().promise;
        if ((0, Web3Response_1.isErrorResponse)(res)) {
          throw new Error(res.errorMessage);
        }
      } catch (err) {
        if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
          throw error_1.standardErrors.provider.userRejectedRequest("User denied account authorization");
        }
        throw err;
      }
      if (!res.result) {
        throw new Error("accounts received is empty");
      }
      this._setAddresses(res.result);
      if (!this.isCoinbaseBrowser) {
        await this.switchEthereumChain(this.getChainId());
      }
      return { jsonrpc: "2.0", id: 0, result: this._addresses };
    }
    _eth_sign(params) {
      this._requireAuthorization();
      const address = (0, util_1.ensureAddressString)(params[0]);
      const message = (0, util_1.ensureBuffer)(params[1]);
      return this._signEthereumMessage(message, address, false);
    }
    _eth_ecRecover(params) {
      const message = (0, util_1.ensureBuffer)(params[0]);
      const signature = (0, util_1.ensureBuffer)(params[1]);
      return this._ethereumAddressFromSignedMessage(message, signature, false);
    }
    _personal_sign(params) {
      this._requireAuthorization();
      const message = (0, util_1.ensureBuffer)(params[0]);
      const address = (0, util_1.ensureAddressString)(params[1]);
      return this._signEthereumMessage(message, address, true);
    }
    _personal_ecRecover(params) {
      const message = (0, util_1.ensureBuffer)(params[0]);
      const signature = (0, util_1.ensureBuffer)(params[1]);
      return this._ethereumAddressFromSignedMessage(message, signature, true);
    }
    async _eth_signTransaction(params) {
      this._requireAuthorization();
      const tx = this._prepareTransactionParams(params[0] || {});
      try {
        const relay = await this.initializeRelay();
        const res = await relay.signEthereumTransaction(tx).promise;
        if ((0, Web3Response_1.isErrorResponse)(res)) {
          throw new Error(res.errorMessage);
        }
        return { jsonrpc: "2.0", id: 0, result: res.result };
      } catch (err) {
        if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
          throw error_1.standardErrors.provider.userRejectedRequest("User denied transaction signature");
        }
        throw err;
      }
    }
    async _eth_sendRawTransaction(params) {
      const signedTransaction = (0, util_1.ensureBuffer)(params[0]);
      const relay = await this.initializeRelay();
      const res = await relay.submitEthereumTransaction(signedTransaction, this.getChainId()).promise;
      if ((0, Web3Response_1.isErrorResponse)(res)) {
        throw new Error(res.errorMessage);
      }
      return { jsonrpc: "2.0", id: 0, result: res.result };
    }
    async _eth_sendTransaction(params) {
      this._requireAuthorization();
      const tx = this._prepareTransactionParams(params[0] || {});
      try {
        const relay = await this.initializeRelay();
        const res = await relay.signAndSubmitEthereumTransaction(tx).promise;
        if ((0, Web3Response_1.isErrorResponse)(res)) {
          throw new Error(res.errorMessage);
        }
        return { jsonrpc: "2.0", id: 0, result: res.result };
      } catch (err) {
        if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
          throw error_1.standardErrors.provider.userRejectedRequest("User denied transaction signature");
        }
        throw err;
      }
    }
    async _eth_signTypedData_v1(params) {
      this._requireAuthorization();
      const typedData = (0, util_1.ensureParsedJSONObject)(params[0]);
      const address = (0, util_1.ensureAddressString)(params[1]);
      this._ensureKnownAddress(address);
      const message = eth_eip712_util_1.default.hashForSignTypedDataLegacy({ data: typedData });
      const typedDataJSON = JSON.stringify(typedData, null, 2);
      return this._signEthereumMessage(message, address, false, typedDataJSON);
    }
    async _eth_signTypedData_v3(params) {
      this._requireAuthorization();
      const address = (0, util_1.ensureAddressString)(params[0]);
      const typedData = (0, util_1.ensureParsedJSONObject)(params[1]);
      this._ensureKnownAddress(address);
      const message = eth_eip712_util_1.default.hashForSignTypedData_v3({ data: typedData });
      const typedDataJSON = JSON.stringify(typedData, null, 2);
      return this._signEthereumMessage(message, address, false, typedDataJSON);
    }
    async _eth_signTypedData_v4(params) {
      this._requireAuthorization();
      const address = (0, util_1.ensureAddressString)(params[0]);
      const typedData = (0, util_1.ensureParsedJSONObject)(params[1]);
      this._ensureKnownAddress(address);
      const message = eth_eip712_util_1.default.hashForSignTypedData_v4({ data: typedData });
      const typedDataJSON = JSON.stringify(typedData, null, 2);
      return this._signEthereumMessage(message, address, false, typedDataJSON);
    }
    /** @deprecated */
    async _cbwallet_arbitrary(params) {
      const action = params[0];
      const data = params[1];
      if (typeof data !== "string") {
        throw new Error("parameter must be a string");
      }
      if (typeof action !== "object" || action === null) {
        throw new Error("parameter must be an object");
      }
      const result = await this.genericRequest(action, data);
      return { jsonrpc: "2.0", id: 0, result };
    }
    async _wallet_addEthereumChain(params) {
      var _a, _b, _c, _d;
      const request = params[0];
      if (((_a = request.rpcUrls) === null || _a === void 0 ? void 0 : _a.length) === 0) {
        return {
          jsonrpc: "2.0",
          id: 0,
          error: { code: 2, message: `please pass in at least 1 rpcUrl` }
        };
      }
      if (!request.chainName || request.chainName.trim() === "") {
        throw error_1.standardErrors.rpc.invalidParams("chainName is a required field");
      }
      if (!request.nativeCurrency) {
        throw error_1.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
      }
      const chainIdNumber = parseInt(request.chainId, 16);
      const success = await this.addEthereumChain(chainIdNumber, (_b = request.rpcUrls) !== null && _b !== void 0 ? _b : [], (_c = request.blockExplorerUrls) !== null && _c !== void 0 ? _c : [], request.chainName, (_d = request.iconUrls) !== null && _d !== void 0 ? _d : [], request.nativeCurrency);
      if (success) {
        return { jsonrpc: "2.0", id: 0, result: null };
      }
      return {
        jsonrpc: "2.0",
        id: 0,
        error: { code: 2, message: `unable to add ethereum chain` }
      };
    }
    async _wallet_switchEthereumChain(params) {
      const request = params[0];
      await this.switchEthereumChain(parseInt(request.chainId, 16));
      return { jsonrpc: "2.0", id: 0, result: null };
    }
    async _wallet_watchAsset(params) {
      const request = Array.isArray(params) ? params[0] : params;
      if (!request.type) {
        throw error_1.standardErrors.rpc.invalidParams("Type is required");
      }
      if ((request === null || request === void 0 ? void 0 : request.type) !== "ERC20") {
        throw error_1.standardErrors.rpc.invalidParams(`Asset of type '${request.type}' is not supported`);
      }
      if (!(request === null || request === void 0 ? void 0 : request.options)) {
        throw error_1.standardErrors.rpc.invalidParams("Options are required");
      }
      if (!(request === null || request === void 0 ? void 0 : request.options.address)) {
        throw error_1.standardErrors.rpc.invalidParams("Address is required");
      }
      const chainId = this.getChainId();
      const { address, symbol, image, decimals } = request.options;
      const res = await this.watchAsset(request.type, address, symbol, decimals, image, chainId);
      return { jsonrpc: "2.0", id: 0, result: res };
    }
    _eth_uninstallFilter(params) {
      const filterId = (0, util_1.ensureHexString)(params[0]);
      return this._filterPolyfill.uninstallFilter(filterId);
    }
    async _eth_newFilter(params) {
      const param = params[0];
      const filterId = await this._filterPolyfill.newFilter(param);
      return { jsonrpc: "2.0", id: 0, result: filterId };
    }
    async _eth_newBlockFilter() {
      const filterId = await this._filterPolyfill.newBlockFilter();
      return { jsonrpc: "2.0", id: 0, result: filterId };
    }
    async _eth_newPendingTransactionFilter() {
      const filterId = await this._filterPolyfill.newPendingTransactionFilter();
      return { jsonrpc: "2.0", id: 0, result: filterId };
    }
    _eth_getFilterChanges(params) {
      const filterId = (0, util_1.ensureHexString)(params[0]);
      return this._filterPolyfill.getFilterChanges(filterId);
    }
    _eth_getFilterLogs(params) {
      const filterId = (0, util_1.ensureHexString)(params[0]);
      return this._filterPolyfill.getFilterLogs(filterId);
    }
    initializeRelay() {
      if (this._relay) {
        return Promise.resolve(this._relay);
      }
      return this._relayProvider().then((relay) => {
        relay.setAccountsCallback((accounts, isDisconnect) => this._setAddresses(accounts, isDisconnect));
        relay.setChainCallback((chainId, jsonRpcUrl) => {
          this.updateProviderInfo(jsonRpcUrl, parseInt(chainId, 10));
        });
        relay.setDappDefaultChainCallback(this._chainIdFromOpts);
        this._relay = relay;
        return relay;
      });
    }
  };
  CoinbaseWalletProvider.CoinbaseWalletProvider = CoinbaseWalletProvider$1;
  return CoinbaseWalletProvider;
}
var RelayEventManager = {};
var hasRequiredRelayEventManager;
function requireRelayEventManager() {
  if (hasRequiredRelayEventManager) return RelayEventManager;
  hasRequiredRelayEventManager = 1;
  Object.defineProperty(RelayEventManager, "__esModule", { value: true });
  RelayEventManager.RelayEventManager = void 0;
  const util_1 = /* @__PURE__ */ requireUtil$1();
  let RelayEventManager$1 = class RelayEventManager {
    constructor() {
      this._nextRequestId = 0;
      this.callbacks = /* @__PURE__ */ new Map();
    }
    makeRequestId() {
      this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
      const id = this._nextRequestId;
      const idStr = (0, util_1.prepend0x)(id.toString(16));
      const callback = this.callbacks.get(idStr);
      if (callback) {
        this.callbacks.delete(idStr);
      }
      return id;
    }
  };
  RelayEventManager.RelayEventManager = RelayEventManager$1;
  return RelayEventManager;
}
var hasRequiredCoinbaseWalletSDK;
function requireCoinbaseWalletSDK() {
  if (hasRequiredCoinbaseWalletSDK) return CoinbaseWalletSDK;
  hasRequiredCoinbaseWalletSDK = 1;
  Object.defineProperty(CoinbaseWalletSDK, "__esModule", { value: true });
  CoinbaseWalletSDK.CoinbaseWalletSDK = void 0;
  const wallet_logo_1 = /* @__PURE__ */ requireWalletLogo();
  const constants_1 = /* @__PURE__ */ requireConstants$2();
  const util_1 = /* @__PURE__ */ requireUtil$1();
  const ScopedLocalStorage_1 = /* @__PURE__ */ requireScopedLocalStorage();
  const CoinbaseWalletProvider_1 = /* @__PURE__ */ requireCoinbaseWalletProvider();
  const MobileRelay_1 = /* @__PURE__ */ requireMobileRelay();
  const MobileRelayUI_1 = /* @__PURE__ */ requireMobileRelayUI();
  const RelayEventManager_1 = /* @__PURE__ */ requireRelayEventManager();
  const WalletLinkRelayUI_1 = /* @__PURE__ */ requireWalletLinkRelayUI();
  const WalletLinkRelay_1 = /* @__PURE__ */ requireWalletLinkRelay();
  const version_1 = /* @__PURE__ */ requireVersion();
  let CoinbaseWalletSDK$1 = class CoinbaseWalletSDK2 {
    /**
     * Constructor
     * @param options Coinbase Wallet SDK constructor options
     */
    constructor(options) {
      var _a, _b, _c;
      this._appName = "";
      this._appLogoUrl = null;
      this._relay = null;
      this._relayEventManager = null;
      const linkAPIUrl = options.linkAPIUrl || constants_1.LINK_API_URL;
      if (typeof options.overrideIsMetaMask === "undefined") {
        this._overrideIsMetaMask = false;
      } else {
        this._overrideIsMetaMask = options.overrideIsMetaMask;
      }
      this._overrideIsCoinbaseWallet = (_a = options.overrideIsCoinbaseWallet) !== null && _a !== void 0 ? _a : true;
      this._overrideIsCoinbaseBrowser = (_b = options.overrideIsCoinbaseBrowser) !== null && _b !== void 0 ? _b : false;
      this._diagnosticLogger = options.diagnosticLogger;
      this._reloadOnDisconnect = (_c = options.reloadOnDisconnect) !== null && _c !== void 0 ? _c : true;
      const url = new URL(linkAPIUrl);
      const origin = `${url.protocol}//${url.host}`;
      this._storage = new ScopedLocalStorage_1.ScopedLocalStorage(`-walletlink:${origin}`);
      this._storage.setItem("version", CoinbaseWalletSDK2.VERSION);
      if (this.walletExtension || this.coinbaseBrowser) {
        return;
      }
      this._relayEventManager = new RelayEventManager_1.RelayEventManager();
      const isMobile = (0, util_1.isMobileWeb)();
      const uiConstructor = options.uiConstructor || ((opts) => isMobile ? new MobileRelayUI_1.MobileRelayUI(opts) : new WalletLinkRelayUI_1.WalletLinkRelayUI(opts));
      const relayOption = {
        linkAPIUrl,
        version: version_1.LIB_VERSION,
        darkMode: !!options.darkMode,
        headlessMode: !!options.headlessMode,
        uiConstructor,
        storage: this._storage,
        relayEventManager: this._relayEventManager,
        diagnosticLogger: this._diagnosticLogger,
        reloadOnDisconnect: this._reloadOnDisconnect,
        enableMobileWalletLink: options.enableMobileWalletLink
      };
      this._relay = isMobile ? new MobileRelay_1.MobileRelay(relayOption) : new WalletLinkRelay_1.WalletLinkRelay(relayOption);
      this.setAppInfo(options.appName, options.appLogoUrl);
      if (options.headlessMode)
        return;
      this._relay.attachUI();
    }
    /**
     * Create a Web3 Provider object
     * @param jsonRpcUrl Ethereum JSON RPC URL (Default: "")
     * @param chainId Ethereum Chain ID (Default: 1)
     * @returns A Web3 Provider
     */
    makeWeb3Provider(jsonRpcUrl = "", chainId = 1) {
      const extension = this.walletExtension;
      if (extension) {
        if (!this.isCipherProvider(extension)) {
          extension.setProviderInfo(jsonRpcUrl, chainId);
        }
        if (this._reloadOnDisconnect === false && typeof extension.disableReloadOnDisconnect === "function")
          extension.disableReloadOnDisconnect();
        return extension;
      }
      const dappBrowser = this.coinbaseBrowser;
      if (dappBrowser) {
        return dappBrowser;
      }
      const relay = this._relay;
      if (!relay || !this._relayEventManager || !this._storage) {
        throw new Error("Relay not initialized, should never happen");
      }
      if (!jsonRpcUrl)
        relay.setConnectDisabled(true);
      return new CoinbaseWalletProvider_1.CoinbaseWalletProvider({
        relayProvider: () => Promise.resolve(relay),
        relayEventManager: this._relayEventManager,
        storage: this._storage,
        jsonRpcUrl,
        chainId,
        qrUrl: this.getQrUrl(),
        diagnosticLogger: this._diagnosticLogger,
        overrideIsMetaMask: this._overrideIsMetaMask,
        overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
        overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
      });
    }
    /**
     * Set application information
     * @param appName Application name
     * @param appLogoUrl Application logo image URL
     */
    setAppInfo(appName, appLogoUrl) {
      var _a;
      this._appName = appName || "DApp";
      this._appLogoUrl = appLogoUrl || (0, util_1.getFavicon)();
      const extension = this.walletExtension;
      if (extension) {
        if (!this.isCipherProvider(extension)) {
          extension.setAppInfo(this._appName, this._appLogoUrl);
        }
      } else {
        (_a = this._relay) === null || _a === void 0 ? void 0 : _a.setAppInfo(this._appName, this._appLogoUrl);
      }
    }
    /**
     * Disconnect. After disconnecting, this will reload the web page to ensure
     * all potential stale state is cleared.
     */
    disconnect() {
      var _a;
      const extension = this === null || this === void 0 ? void 0 : this.walletExtension;
      if (extension) {
        void extension.close();
      } else {
        (_a = this._relay) === null || _a === void 0 ? void 0 : _a.resetAndReload();
      }
    }
    /**
     * Return QR URL for mobile wallet connection, will return null if extension is installed
     */
    getQrUrl() {
      var _a, _b;
      return (_b = (_a = this._relay) === null || _a === void 0 ? void 0 : _a.getQRCodeUrl()) !== null && _b !== void 0 ? _b : null;
    }
    /**
     * Official Coinbase Wallet logo for developers to use on their frontend
     * @param type Type of wallet logo: "standard" | "circle" | "text" | "textWithLogo" | "textLight" | "textWithLogoLight"
     * @param width Width of the logo (Optional)
     * @returns SVG Data URI
     */
    getCoinbaseWalletLogo(type2, width = 240) {
      return (0, wallet_logo_1.walletLogo)(type2, width);
    }
    get walletExtension() {
      var _a;
      return (_a = window.coinbaseWalletExtension) !== null && _a !== void 0 ? _a : window.walletLinkExtension;
    }
    get coinbaseBrowser() {
      var _a, _b;
      try {
        const ethereum = (_a = window.ethereum) !== null && _a !== void 0 ? _a : (_b = window.top) === null || _b === void 0 ? void 0 : _b.ethereum;
        if (!ethereum) {
          return void 0;
        }
        if ("isCoinbaseBrowser" in ethereum && ethereum.isCoinbaseBrowser) {
          return ethereum;
        }
        return void 0;
      } catch (e2) {
        return void 0;
      }
    }
    isCipherProvider(provider) {
      return typeof provider.isCipher === "boolean" && provider.isCipher;
    }
  };
  CoinbaseWalletSDK.CoinbaseWalletSDK = CoinbaseWalletSDK$1;
  CoinbaseWalletSDK$1.VERSION = version_1.LIB_VERSION;
  return CoinbaseWalletSDK;
}
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist$5;
  hasRequiredDist = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CoinbaseWalletProvider = exports.CoinbaseWalletSDK = void 0;
    const CoinbaseWalletSDK_1 = /* @__PURE__ */ requireCoinbaseWalletSDK();
    const CoinbaseWalletProvider_1 = /* @__PURE__ */ requireCoinbaseWalletProvider();
    var CoinbaseWalletSDK_2 = /* @__PURE__ */ requireCoinbaseWalletSDK();
    Object.defineProperty(exports, "CoinbaseWalletSDK", { enumerable: true, get: function() {
      return CoinbaseWalletSDK_2.CoinbaseWalletSDK;
    } });
    var CoinbaseWalletProvider_2 = /* @__PURE__ */ requireCoinbaseWalletProvider();
    Object.defineProperty(exports, "CoinbaseWalletProvider", { enumerable: true, get: function() {
      return CoinbaseWalletProvider_2.CoinbaseWalletProvider;
    } });
    exports.default = CoinbaseWalletSDK_1.CoinbaseWalletSDK;
    if (typeof window !== "undefined") {
      window.CoinbaseWalletSDK = CoinbaseWalletSDK_1.CoinbaseWalletSDK;
      window.CoinbaseWalletProvider = CoinbaseWalletProvider_1.CoinbaseWalletProvider;
      window.WalletLink = CoinbaseWalletSDK_1.CoinbaseWalletSDK;
      window.WalletLinkProvider = CoinbaseWalletProvider_1.CoinbaseWalletProvider;
    }
  })(dist$5);
  return dist$5;
}
var distExports = /* @__PURE__ */ requireDist();
const index = /* @__PURE__ */ getDefaultExportFromCjs(distExports);
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
export {
  index$1 as i
};
