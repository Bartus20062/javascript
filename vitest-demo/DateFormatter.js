export class DateFormatter {
    static format(date, inputFormat = "DDMMYYYY", outputFormat = "DD-MM-YYYY") {
        const parsedDate = this.#parseDate(date, inputFormat);
        if (!parsedDate) return "Invalid date";
        return this.#formatDate(parsedDate, outputFormat);
    }
    static fromNow(date, inputFormat = "DDMMYYYY") {
        const parsedDate = this.#parseDate(date, inputFormat);
        if (!parsedDate) return "Invalid date";
        
        const now = new Date();
        const diff = parsedDate - now;
        const absDiff = Math.abs(diff);
        
        const seconds = Math.floor(absDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        let result;
        if (years > 0) {
            result = `${years} year${years > 1 ? 's' : ''}`;
        } else if (months > 0) {
            result = `${months} month${months > 1 ? 's' : ''}`;
        } else if (days > 0) {
            result = `${days} day${days > 1 ? 's' : ''}`;
        } else if (hours > 0) {
            result = `${hours} hour${hours > 1 ? 's' : ''}`;
        } else if (minutes > 0) {
            result = `${minutes} minute${minutes > 1 ? 's' : ''}`;
        } else {
            result = "just now";
        }

        return diff < 0 ? `${result} ago` : `in ${result}`;
    }
    static #parseDate(date, format) {
        const formatRegex = format
            .replace("DD", "(\\d{2})")
            .replace("MM", "(\\d{2})")
            .replace("YYYY", "(\\d{4})");
        
        const match = new RegExp(`^${formatRegex}$`).exec(date);
        if (!match) return null;
        
        const [_, day, month, year] = match.map(Number);
        return new Date(year, month - 1, day);
    }
    static #formatDate(date, format) {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const fullYear = date.getFullYear();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        return format
            .replace("DD", day)
            .replace("MM", month)
            .replace("YYYY", fullYear)
            .replace("Month", monthNames[date.getMonth()]);
    }
}
console.log(DateFormatter.format("31102011")); 
console.log(DateFormatter.format("31102011", "DDMMYYYY", "DD Month YYYY")); 
console.log(DateFormatter.fromNow("01032023", "DDMMYYYY"));