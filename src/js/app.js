export default class ErrorRepository {
  constructor() {
    this.map = new Map();
  }

  mapErr(number, string) {
    this.map.set(number, string);
  }

  translate(code) {
    if (this.map.get(code) === undefined || null || '') {
      return 'Unknown error';
    }
    return this.map.get(code);
  }
}
