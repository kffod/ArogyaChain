module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",  // Localhost (default: none)
      port: 8545,         // Standard Ganache port (default: none)
      network_id: "*",    // Any network (default: none)
    },
  },

  compilers: {
    solc: {
      version: "0.5.1",   // Match the compiler version with your contract version
    },
  },
};
