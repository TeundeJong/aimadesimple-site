// scripts/verify.mjs
import fs from "node:fs";
import path from "node:path";

const fail = (msg) => { console.error("✖", msg); process.exitCode = 1; };
const ok   = (msg) => { console.log("✔", msg); };

// Helpers
const exists = (p) => fs.existsSync(p);
const read   = (p) => fs.readFileSync(p, "utf8");

// 1) Vereiste paden
const mustExist = [
  "app/layout.tsx",
  "app/page.tsx",
  "tailwind.config.ts",
  "postcss.config.js",
];
if (!exists("app/globals.css") && !exists("app/site.css")) {
  mustExist.push("app/globals.css"); // force check message
}

console.log("\n== File presence checks ==");
for (const f of mustExist) {
  exists(f) ? ok(`found ${f}`) : fail(`missing ${f}`);
}

// 2) layout.tsx → import van globale CSS
if (exists("app/layout.tsx")) {
  const L = read("app/layout.tsx");
  const hasGlobals =
    L.includes('import "./globals.css"') || L.includes('import "./site.css"');
  hasGlobals ? ok("layout imports global CSS") : fail("layout mist import van ./globals.css of ./site.css");
}

// 3) globals/site.css → juiste Tailwind-directives, geen losse utility-classes
const cssPath = exists("app/globals.css") ? "app/globals.css" :
                (exists("app/site.css") ? "app/site.css" : null);

if (cssPath) {
  const C = read(cssPath);
  if (!/@tailwind\s+base;/.test(C) || !/@tailwind\s+components;/.test(C) || !/@tailwind\s+utilities;/.test(C)) {
    fail(`${cssPath}: ontbrekende @tailwind directives (base/components/utilities)`);
  } else {
    ok(`${cssPath}: @tailwind directives OK`);
  }
  // Ruwe heuristiek: dingen die NIET in CSS horen
  if (C.includes("className=") || C.includes("<div") || C.includes("<p")) {
    fail(`${cssPath}: bevat JSX/HTML (className, <div>, <p>) — verplaats dat naar .tsx`);
  }
// Verbeterde detectie – negeert 'font-family', 'color', 'background-color', enz.
const utilityPattern = /(bg-|text-|p-|m-|rounded-|font-(?!family))[a-z0-9\-]+/;
const falsePositives = /(font-family|background-color|color|height|width)/;
const suspicious = utilityPattern.test(C) && !falsePositives.test(C) && !/@apply/.test(C);

if (suspicious) {
  fail(`${cssPath}: mogelijke losse Tailwind utilities (check even, kan ook vals alarm zijn)`);
} else {
  ok(`${cssPath}: geen verdachte losse utilities`);
}
}

// 4) tailwind.config.ts → content-globs & plugin
if (exists("tailwind.config.ts")) {
  const T = read("tailwind.config.ts");
  const needs = ["./app/", "./components/"];
  for (const n of needs) {
    T.includes(n) ? ok(`tailwind content bevat "${n}"`) : fail(`tailwind content mist "${n}"`);
  }
}

// 5) postcss.config.js → @tailwindcss/postcss aanwezig
if (exists("postcss.config.js")) {
  const P = read("postcss.config.js");
  P.includes("'@tailwindcss/postcss'") || P.includes('"@tailwindcss/postcss"')
    ? ok("postcss: @tailwindcss/postcss plugin OK")
    : fail("postcss: mis @tailwindcss/postcss plugin");
}

// 6) Hero-afbeelding check als je Image gebruikt
let usesHeroImage = false;
if (exists("app/page.tsx")) {
  const P = read("app/page.tsx");
  usesHeroImage = P.includes('src="/hero.jpg"') || P.includes("src='/hero.jpg'");
}
if (usesHeroImage) {
  if (exists("public/hero.jpg")) ok("public/hero.jpg aanwezig");
  else fail("public/hero.jpg ontbreekt terwijl page.tsx deze gebruikt");
}

// 7) Samenvatting/exit
process.on("beforeExit", (code) => {
  console.log("\n== Verify summary ==");
  if (code === 0) console.log("✅ Alles ziet er goed uit. Je kunt veilig pushen/builden.");
  else console.log("❌ Los de bovenstaande punten op en run opnieuw: npm run verify");
});
