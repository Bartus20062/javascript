import { describe, it, expect } from 'vitest';
import { DateFormatter } from '../DateFormatter.js';  
describe('DateFormatter', () => {

  describe('format', () => {
    it('should format date from DDMMYYYY to DD-MM-YYYY', () => {
      const result = DateFormatter.format("31102011");
      expect(result);
    });

    it('should format date from DDMMYYYY to DD Month YYYY', () => {
      const result = DateFormatter.format("31102011", "DDMMYYYY", "DD Month YYYY");
      expect(result);
    });

    it('should format date from MMDDYYYY to MM-DD-YYYY', () => {
      const result = DateFormatter.format("10252022", "MMDDYYYY", "MM-DD-YYYY");
      expect(result);
    });

    it('should return "Invalid date" for invalid date format', () => {
      const result = DateFormatter.format("3110201X");
      expect(result);
    });
  });

  describe('fromNow', () => {
    it('should return the correct time difference from the past', () => {
      const result = DateFormatter.fromNow("01032023", "DDMMYYYY");
      expect(result);
    });

    it('should return the correct time difference from the future', () => {
      const result = DateFormatter.fromNow("01032023", "DDMMYYYY");
      expect(result);
    });

    it('should handle "just now" correctly', () => {
      const result = DateFormatter.fromNow(new Date().toISOString(), "YYYY-MM-DD");
      expect(result);
    });

    it('should return the correct difference when the date is in the past', () => {
      const result = DateFormatter.fromNow("01012021", "DDMMYYYY");
      expect(result);
    });

    it('should return "Invalid date" for invalid input date in fromNow', () => {
      const result = DateFormatter.fromNow("31022021", "DDMMYYYY");
      expect(result);
    });
  });

});
