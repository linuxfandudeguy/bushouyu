export function sanitize(input: string): string {
    const ideographicSymbols = /[⿰⿱⿲⿳⿴⿵⿶⿷⿸⿹⿺⿻]/g;
    return input.replace(ideographicSymbols, "");
}
