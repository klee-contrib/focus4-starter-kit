const {css} = require("@focus4/styling/lib/variables");

module.exports = css({
    // Varibles React-Toolbox (pas d'autocomplétion...)
    colorPrimary: "var(--palette-purple-500)",

    // Variables Focus (autocomplétion !)
    headerColor: "var(--color-white)",
    headerContentBackground: "var(--palette-purple-200)",
    headerToprowBackground: "var(--palette-purple-200)",

    selectLineColor: "var(--color-primary)",
    selectArrowColor: "var(--color-primary)"
});
