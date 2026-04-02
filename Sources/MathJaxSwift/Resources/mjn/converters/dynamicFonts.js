/**
 * Pre-loads all dynamic font files for both SVG and CHTML output.
 *
 * MathJax lazy-loads font data for characters outside the base set (e.g.,
 * accented Latin characters like umlauts). In a headless JSContext, the async
 * retry mechanism used for lazy loading doesn't work, so we pre-load all
 * dynamic font files at bundle time and provide a synchronous loader.
 */

const {mathjax} = require('mathjax-full/js/mathjax.js');

// Pre-load all SVG dynamic font files (registers setup functions)
require('mathjax-modern-font/cjs/svg/dynamic/accents.js');
require('mathjax-modern-font/cjs/svg/dynamic/accents-b-i.js');
require('mathjax-modern-font/cjs/svg/dynamic/arrows.js');
require('mathjax-modern-font/cjs/svg/dynamic/calligraphic.js');
require('mathjax-modern-font/cjs/svg/dynamic/double-struck.js');
require('mathjax-modern-font/cjs/svg/dynamic/fraktur.js');
require('mathjax-modern-font/cjs/svg/dynamic/latin.js');
require('mathjax-modern-font/cjs/svg/dynamic/latin-b.js');
require('mathjax-modern-font/cjs/svg/dynamic/latin-bi.js');
require('mathjax-modern-font/cjs/svg/dynamic/latin-i.js');
require('mathjax-modern-font/cjs/svg/dynamic/math.js');
require('mathjax-modern-font/cjs/svg/dynamic/monospace.js');
require('mathjax-modern-font/cjs/svg/dynamic/monospace-ex.js');
require('mathjax-modern-font/cjs/svg/dynamic/monospace-l.js');
require('mathjax-modern-font/cjs/svg/dynamic/PUA.js');
require('mathjax-modern-font/cjs/svg/dynamic/sans-serif.js');
require('mathjax-modern-font/cjs/svg/dynamic/sans-serif-b.js');
require('mathjax-modern-font/cjs/svg/dynamic/sans-serif-bi.js');
require('mathjax-modern-font/cjs/svg/dynamic/sans-serif-ex.js');
require('mathjax-modern-font/cjs/svg/dynamic/sans-serif-i.js');
require('mathjax-modern-font/cjs/svg/dynamic/sans-serif-r.js');
require('mathjax-modern-font/cjs/svg/dynamic/script.js');
require('mathjax-modern-font/cjs/svg/dynamic/shapes.js');
require('mathjax-modern-font/cjs/svg/dynamic/symbols.js');
require('mathjax-modern-font/cjs/svg/dynamic/symbols-b-i.js');
require('mathjax-modern-font/cjs/svg/dynamic/variants.js');

// Pre-load all CHTML dynamic font files
require('mathjax-modern-font/cjs/chtml/dynamic/accents.js');
require('mathjax-modern-font/cjs/chtml/dynamic/accents-b-i.js');
require('mathjax-modern-font/cjs/chtml/dynamic/arrows.js');
require('mathjax-modern-font/cjs/chtml/dynamic/calligraphic.js');
require('mathjax-modern-font/cjs/chtml/dynamic/double-struck.js');
require('mathjax-modern-font/cjs/chtml/dynamic/fraktur.js');
require('mathjax-modern-font/cjs/chtml/dynamic/latin.js');
require('mathjax-modern-font/cjs/chtml/dynamic/latin-b.js');
require('mathjax-modern-font/cjs/chtml/dynamic/latin-bi.js');
require('mathjax-modern-font/cjs/chtml/dynamic/latin-i.js');
require('mathjax-modern-font/cjs/chtml/dynamic/math.js');
require('mathjax-modern-font/cjs/chtml/dynamic/monospace.js');
require('mathjax-modern-font/cjs/chtml/dynamic/monospace-ex.js');
require('mathjax-modern-font/cjs/chtml/dynamic/monospace-l.js');
require('mathjax-modern-font/cjs/chtml/dynamic/PUA.js');
require('mathjax-modern-font/cjs/chtml/dynamic/sans-serif.js');
require('mathjax-modern-font/cjs/chtml/dynamic/sans-serif-b.js');
require('mathjax-modern-font/cjs/chtml/dynamic/sans-serif-bi.js');
require('mathjax-modern-font/cjs/chtml/dynamic/sans-serif-ex.js');
require('mathjax-modern-font/cjs/chtml/dynamic/sans-serif-i.js');
require('mathjax-modern-font/cjs/chtml/dynamic/sans-serif-r.js');
require('mathjax-modern-font/cjs/chtml/dynamic/script.js');
require('mathjax-modern-font/cjs/chtml/dynamic/shapes.js');
require('mathjax-modern-font/cjs/chtml/dynamic/symbols.js');
require('mathjax-modern-font/cjs/chtml/dynamic/symbols-b-i.js');
require('mathjax-modern-font/cjs/chtml/dynamic/variants.js');

// Set asyncLoad to a no-op since all files are already loaded via webpack
mathjax.asyncLoad = function(name) {};

/**
 * Installs all pre-loaded dynamic font data into an output jax's font instance.
 *
 * @param {object} outputJax The MathJax output jax (SVG or CHTML).
 */
export function loadDynamicFonts(outputJax) {
  outputJax.font.loadDynamicFilesSync();
}
