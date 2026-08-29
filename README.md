# ☕ Buy Me A Coffee - Web3 dApp

A sleek, lightweight decentralized application (dApp) that enables users to support creators by tipping ETH directly via Ethereum-compatible browser wallets (e.g., MetaMask). Built as part of the Cyfrin Full-Stack Web3 curriculum using standard HTML5 and modern JavaScript with **Viem**.

---

## 🌟 Features

- 🦊 **Wallet Connection**: Connects seamlessly with MetaMask or any standard EIP-1193 browser wallet.
- ⚡ **Zero-Build Setup**: Powered by ES Modules and imported via CDN (`viem`), eliminating complex build pipelines or bundler requirements.
- 💸 **ETH Contributions**: Interactive controls for user funding, balance checks, and wallet account status display.
- 🔒 **Security Focused**: Purely client-side execution; zero private keys or secret environment variables exposed.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, ES6 JavaScript
- **Web3 Library**: [Viem](https://viem.sh/) (Modular Ethereum Library)
- **Supported Provider**: Standard EIP-1193 Browser Wallet (`window.ethereum`)

---

## 📁 Project Structure

```text
BuyMeACoffee/
├── index.html        # Front-end structure & UI components
├── index-js.js       # Web3 integration & wallet connection logic
├── .gitignore        # Rules for ignoring environment & dependency files
└── README.md         # Comprehensive project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- A Web3-enabled web browser (e.g., Chrome, Brave, Firefox) with an installed Web3 wallet extension such as [MetaMask](https://metamask.io/).

### Running Locally

Since the application uses standard ES Modules (`type="module"`), it should be served via an HTTP server (rather than opening `index.html` directly as `file://`).

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/hrshjswniii/Buy-Me-A-Coffee.git
   cd Buy-Me-A-Coffee
   ```

2. **Serve the Application**:
   You can use any standard static server:

   - **Using VS Code Live Server Extension**: Right-click `index.html` and select *Open with Live Server*.
   - **Using Node.js (`serve`)**:
     ```bash
     npx serve .
     ```
   - **Using Python**:
     ```bash
     python3 -m http.server 8000
     ```

3. **Open in Browser**:
   Navigate to `http://localhost:8000` (or the port provided by your server) in your browser.

---

## 💡 How It Works

1. Click **Connect Wallet** to initiate an authorization request with your browser extension (e.g., MetaMask).
2. Once connected, your formatted public wallet address will display on the button.
3. Enter the desired ETH amount in the input field and click **Buy Coffee** to trigger the transaction request.

---

## 🛡️ Security Audit Note

- **Safety Check Passed**: This repository contains **no sensitive information**, private keys, or API keys.
- **Client-Side Only**: All transactions are authorized client-side by the end-user's wallet extension.

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).
