// Problem 21 (Remove Character From String)
function removeCharFromString(str, char) {
    return str
        .split("")
        .filter((ele) => {
            return ele !== char.toLowerCase() && ele !== char.toUpperCase()
                ? ele
                : "";
        })
        .join("");
}
console.log(removeCharFromString("ElddzeroD WebDD ddSchool", "d")); // Elzero Web School
console.log(removeCharFromString("ElxzeroX Web Sxchool", "x")); // Elzero Web School
console.log(removeCharFromString("Elzero@ Web@@ @@School", "@")); // Elzero Web School
