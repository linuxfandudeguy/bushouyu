import { sanitize } from "./sanitizer";

// Load JSON data using Bun.file and await its JSON content
const radicalsFile = Bun.file("radicals.json");
const dictionaryFile = Bun.file("dictionary.json");

const radicals = await radicalsFile.json();
const dictionary = await dictionaryFile.json();

// Parse arguments directly from Bun.argv
const args = Bun.argv.slice(2); // Remove Bun's runtime and script path
const inputText = args.filter(arg => !arg.startsWith('--')).join('');
const isReverse = args.includes('--reverse');

// Function to get radical breakdown and pronunciation
function getRadicalBreakdown(char: string) {
  let radicalEntry = radicals.find((r: any) => r.radical === char);
  if (radicalEntry) {
    return { breakdown: radicalEntry.radical, pronunciation: radicalEntry.pinyin || "" };
  }
  let dictEntry = dictionary[char];
  if (dictEntry) {
    let breakdown = dictEntry.decomposition || char;
    let pronunciation = breakdown
      .split("")
      .map((rad) => {
        let radEntry = radicals.find((r: any) => r.radical === rad);
        return radEntry ? radEntry.pinyin : dictionary[rad]?.pinyin || "";
      })
      .filter(p => p)
      .join("");
    return { 
      breakdown: sanitize(breakdown).replace(/\s+/g, ''), 
      pronunciation: pronunciation.replace(/\s+/g, '')
    };
  }
  return { breakdown: sanitize(char).replace(/\s+/g, ''), pronunciation: "" };
}

// Function to translate Bushouyu back to Chinese
function translateBack(bushouyu: string) {
  for (let [char, entry] of Object.entries(dictionary)) {
    if (sanitize(entry.decomposition || char).replace(/\s+/g, '') === bushouyu) {
      return char;
    }
  }
  return "?"; // Placeholder for unknown translations
}

if (!inputText) {
  console.log("\nBushouyu\n(咅阝首 讠吾)\n\nPlease provide text to translate.\n");
  process.exit(1);
}

const sanitizedText = sanitize(inputText);

if (isReverse) {
  const reversedTranslation = translateBack(sanitizedText);
  console.log("\nBushouyu\n(咅阝首 讠吾)\n");
  console.log(`Reversed Translation: ${reversedTranslation}\n`);
  process.exit(0);
}

const results = sanitizedText.split("").map(char => {
  const { breakdown, pronunciation } = getRadicalBreakdown(char);
  return `${char} → ${breakdown} (${pronunciation})`;
});

console.log("\nBushouyu\n(咅阝首 讠吾)\n");
console.log(results.join("\n"));

// Display the total translation in Bushouyu
const totalBreakdown = results
  .map(r => r.split(" → ")[1].split(" ")[0])
  .join("");
const totalPronunciation = results
  .map(r => r.match(/\((.*?)\)/)?.[1] || "")
  .join("");
console.log(`\nFull Translation: ${totalBreakdown} (${totalPronunciation})\n`);
