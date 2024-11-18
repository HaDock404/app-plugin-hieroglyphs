module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest", // Transforme les fichiers JS/JSX et TS/TSX avec Babel
  },
  moduleFileExtensions: ["js", "jsx"],
  transformIgnorePatterns: ["/node_modules/(?!your-esm-library)"], // Si des modules ESM externes posent problème
};
