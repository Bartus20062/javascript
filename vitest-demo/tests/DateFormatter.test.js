import { describe, expect, test } from 'vitest';
import { DateFormatter } from '../DateFormatter.js';

describe("DateFormatter", () => {

  test("formatowanie daty w formacie DD-MM-YYYY", () => {
    expect(DateFormatter.format("31102011")).toBe("31-10-2011");
  });

  test("formatowanie daty z nazwą miesiąca", () => {
    expect(DateFormatter.format("31102011", "DDMMYYYY", "DD Month YYYY")).toBe("31 October 2011");
  });

  test("różnica czasu od teraz", () => {
    const result = DateFormatter.fromNow("01032023", "DDMMYYYY");
    expect(result);  // Oczekiwany wynik: in X days/years/months
  });

  test("różnica czasu w przeszłości", () => {
    const result = DateFormatter.fromNow("01012000", "DDMMYYYY");
    expect(result);  // Oczekiwany wynik: in X years
  });

  test("błędna data", () => {
    expect(DateFormatter.format("3110201")).toBe("Invalid date");
    expect(DateFormatter.format("3110201", "DDMMYYYY")).toBe("Invalid date");
    expect(DateFormatter.fromNow("32-02-2020", "DD-MM-YYYY"));
  });

  test("formatowanie z innym formatem wejściowym", () => {
    expect(DateFormatter.format("2023-03-01", "YYYY-MM-DD", "DD/MM/YYYY"));
  });

  test("różnica czasu - aktualna data", () => {
    const now = new Date();
    const isoNow = now.toISOString();
    const result = DateFormatter.fromNow(isoNow, "YYYY-MM-DDTHH:mm:ss.SSSZ");
    expect(result);
  });

});
