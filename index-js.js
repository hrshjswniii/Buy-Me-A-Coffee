import { createWalletClient, custom } from "https://esm.sh/viem";

const connectButton = document.getElementById('connectButton');
let walletClient;

// Make the function async
async function connect() {
  if (typeof window.ethereum !== "undefined") {
    console.log("Connecting...");

    walletClient = createWalletClient({
      transport: custom(window.ethereum),
    });

    try {
      // Wait for the user to connect their wallet
      const addresses = await walletClient.requestAddresses();
      console.log("Connected accounts:", addresses); // Log the connected address(es)

      // This code now runs ONLY AFTER the await completes successfully
      connectButton.innerHTML = `Connected: ${addresses[0].slice(0, 6)}...`; // Show part of address
      console.log("Connection successful!");

    } catch (error) {
      // Handle errors, like the user rejecting the connection
      console.error("Connection failed:", error);
      connectButton.innerHTML = "Connect"; // Reset button text on failure
    }

  } else {
    connectButton.innerHTML = "Please install MetaMask!";
  }
}

connectButton.onclick = connect;