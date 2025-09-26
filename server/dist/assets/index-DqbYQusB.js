import { p as proxy, q as ref, O as OptionsController, t as subscribe, u as subscribeKey, a as i, f as customElement, c as i$1, A as AccountController, x, r, M as ModalController, E as EventsController, N as NetworkController, W as W3mFrameRpcConstants, S as SnackController, v as ConnectionController, R as RouterController } from "./index-4gQN8Xzs.js";
import { Y, G } from "./index-4gQN8Xzs.js";
const state = proxy({
  status: "uninitialized"
});
const SIWEController = {
  state,
  subscribeKey(key, callback) {
    return subscribeKey(state, key, callback);
  },
  subscribe(callback) {
    return subscribe(state, () => callback(state));
  },
  _getClient() {
    if (!state._client) {
      throw new Error("SIWEController client not set");
    }
    return state._client;
  },
  async getNonce(address) {
    const client = this._getClient();
    const nonce = await client.getNonce(address);
    this.setNonce(nonce);
    return nonce;
  },
  async getSession() {
    try {
      const client = this._getClient();
      const session = await client.getSession();
      if (session) {
        this.setSession(session);
        this.setStatus("success");
      }
      return session;
    } catch {
      return void 0;
    }
  },
  createMessage(args) {
    const client = this._getClient();
    const message = client.createMessage(args);
    this.setMessage(message);
    return message;
  },
  async verifyMessage(args) {
    const client = this._getClient();
    const isValid = await client.verifyMessage(args);
    return isValid;
  },
  async signIn() {
    const client = this._getClient();
    const session = await client.signIn();
    return session;
  },
  async signOut() {
    const client = this._getClient();
    await client.signOut();
    this.setStatus("ready");
    this.setSession(void 0);
    client.onSignOut?.();
  },
  onSignIn(args) {
    const client = this._getClient();
    client.onSignIn?.(args);
  },
  onSignOut() {
    const client = this._getClient();
    client.onSignOut?.();
  },
  setSIWEClient(client) {
    state._client = ref(client);
    state.status = "ready";
    OptionsController.setIsSiweEnabled(client.options.enabled);
  },
  setNonce(nonce) {
    state.nonce = nonce;
  },
  setStatus(status) {
    state.status = status;
  },
  setMessage(message) {
    state.message = message;
  },
  setSession(session) {
    state.session = session;
    state.status = session ? "success" : "ready";
  }
};
const styles = i`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;
var __decorate$1 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mConnectingSiwe = class W3mConnectingSiwe2 extends i$1 {
  constructor() {
    super(...arguments);
    this.dappImageUrl = OptionsController.state.metadata?.icons;
    this.walletImageUrl = AccountController.state.connectedWalletInfo?.icon;
  }
  firstUpdated() {
    const visuals = this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");
    if (visuals?.[0]) {
      this.createAnimation(visuals[0], "translate(18px)");
    }
    if (visuals?.[1]) {
      this.createAnimation(visuals[1], "translate(-18px)");
    }
  }
  render() {
    return x`
      <wui-visual-thumbnail
        ?borderRadiusFull=${true}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `;
  }
  createAnimation(element, translation) {
    element.animate([{ transform: "translateX(0px)" }, { transform: translation }], {
      duration: 1600,
      easing: "cubic-bezier(0.56, 0, 0.48, 1)",
      direction: "alternate",
      iterations: Infinity
    });
  }
};
W3mConnectingSiwe.styles = styles;
W3mConnectingSiwe = __decorate$1([
  customElement("w3m-connecting-siwe")
], W3mConnectingSiwe);
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mConnectingSiweView = class W3mConnectingSiweView2 extends i$1 {
  constructor() {
    super(...arguments);
    this.dappName = OptionsController.state.metadata?.name;
    this.isSigning = false;
    this.isCancelling = false;
  }
  render() {
    this.onRender();
    return x`
      <wui-flex justifyContent="center" .padding=${["2xl", "0", "xxl", "0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0", "4xl", "l", "4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName ?? "Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0", "3xl", "l", "3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l", "xl", "xl", "xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning ? "Signing..." : "Sign"}
        </wui-button>
      </wui-flex>
    `;
  }
  onRender() {
    if (SIWEController.state.session) {
      ModalController.close();
    }
  }
  async onSign() {
    this.isSigning = true;
    EventsController.sendEvent({
      event: "CLICK_SIGN_SIWE_MESSAGE",
      type: "track",
      properties: {
        network: NetworkController.state.caipNetwork?.id || "",
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
    try {
      SIWEController.setStatus("loading");
      const session = await SIWEController.signIn();
      SIWEController.setStatus("success");
      EventsController.sendEvent({
        event: "SIWE_AUTH_SUCCESS",
        type: "track",
        properties: {
          network: NetworkController.state.caipNetwork?.id || "",
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      return session;
    } catch (error) {
      const preferredAccountType = AccountController.state.preferredAccountType;
      const isSmartAccount = preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT;
      if (isSmartAccount) {
        SnackController.showError("This application might not support Smart Accounts");
      } else {
        SnackController.showError("Signature declined");
      }
      SIWEController.setStatus("error");
      return EventsController.sendEvent({
        event: "SIWE_AUTH_ERROR",
        type: "track",
        properties: {
          network: NetworkController.state.caipNetwork?.id || "",
          isSmartAccount
        }
      });
    } finally {
      this.isSigning = false;
    }
  }
  async onCancel() {
    this.isCancelling = true;
    const isConnected = AccountController.state.isConnected;
    if (isConnected) {
      await ConnectionController.disconnect();
      ModalController.close();
    } else {
      RouterController.push("Connect");
    }
    this.isCancelling = false;
    EventsController.sendEvent({
      event: "CLICK_CANCEL_SIWE",
      type: "track",
      properties: {
        network: NetworkController.state.caipNetwork?.id || "",
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
  }
};
__decorate([
  r()
], W3mConnectingSiweView.prototype, "isSigning", void 0);
__decorate([
  r()
], W3mConnectingSiweView.prototype, "isCancelling", void 0);
W3mConnectingSiweView = __decorate([
  customElement("w3m-connecting-siwe-view")
], W3mConnectingSiweView);
export {
  SIWEController,
  W3mConnectingSiwe,
  W3mConnectingSiweView,
  Y as getDidAddress,
  G as getDidChainId
};
