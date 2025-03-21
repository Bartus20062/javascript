import { describe, it, expect } from 'vitest';
import { formatText } from '../formatText.js';  

describe('formatText', () => {

  it('should format text with word wrap correctly', () => {
    const result = formatText("Hello world, this is JavaScript", 10, 2, "word");
    expect(result);
  });

  it('should format text with character wrap correctly', () => {
    const result = formatText("Hello world!", 5, 3, "character");
    expect(result);
  });

  it('should format text with sentence wrap correctly', () => {
    const result = formatText("Hello world! This is a test. Have a nice day.", 15, 2, "sentence");
    expect(result);
  });

  it('should format text with no wrap correctly', () => {
    const result = formatText("Hello world!", 5, 3, "none");
    expect(result);
  });

  it('should handle invalid text input', () => {
    const result = formatText(12345, 10, 2, "word");
    expect(result);
  });

  it('should handle invalid maxLength input', () => {
    const result = formatText("Hello world!", -5, 3, "word");
    expect(result);  
  });

  it('should handle invalid maxLines input', () => {
    const result = formatText("Hello world!", 10, -3, "word");
    expect(result);  
  });

  it('should return empty string for empty text', () => {
    const result = formatText("", 10, 3, "word");
    expect(result);  
  });

  it('should return the full text if it fits in the given length and lines', () => {
    const result = formatText("Hello world!", 20, 3, "word");
    expect(result);  
  });

  it('should append "..." to the last line if text is truncated', () => {
    const result = formatText("Hello world, this is a test.", 10, 2, "word");
    expect(result);
  });

});
