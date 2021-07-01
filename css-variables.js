const {css} = require("@focus4/styling/lib/variables");

// Toutes les variables ont de l'autocomplétion !
module.exports = css({
    colorPrimary: "var(--palette-purple-500)",

    headerColor: "var(--color-white)",
    headerContentBackground: "var(--palette-purple-200)",
    headerToprowBackground: "var(--palette-purple-200)",

    selectLineColor: "var(--color-primary)",
    selectArrowColor: "var(--color-primary)"
});
