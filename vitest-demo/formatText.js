function formatText(text, maxLength = Infinity, maxLines = Infinity, wrapType = "none") {
    if (typeof text !== "string" || maxLength < 1 || maxLines < 1) return "";

    let lines = [];
    let remainingText = text;

    while (lines.length < maxLines && remainingText.length > 0) {
        let line;
        
        if (wrapType === "word") {
            let words = remainingText.split(/\s+/);
            line = "";
            while (words.length && (line + words[0]).length <= maxLength) {
                line += (line ? " " : "") + words.shift();
            }
            remainingText = words.join(" ");
        } else if (wrapType === "character") {
            line = remainingText.slice(0, maxLength);
            remainingText = remainingText.slice(maxLength);
        } else if (wrapType === "sentence") {
            let sentences = remainingText.match(/[^.!?]+[.!?]/g) || [remainingText];
            line = "";
            while (sentences.length && (line + sentences[0]).length <= maxLength) {
                line += sentences.shift();
            }
            remainingText = sentences.join(" ");
        } else { // "none"
            line = remainingText.slice(0, maxLength);
            remainingText = "";
        }
        
        lines.push(line);
    }
    
    if (remainingText.length > 0) {
        lines[lines.length - 1] = lines[lines.length - 1].replace(/\s+$/, "") + "...";
    }
    
    return lines.join("\n");
}

// Examples
console.log(formatText("Hello world, this is JavaScript", 10, 2, "word"));
// "Hello\nworld,..."

console.log(formatText("Hello world!", 5, 3, "character"));
// "Hello\n worl\n d!"
