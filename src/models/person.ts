export default class Person {
  id: string|undefined;
  firstName: string|undefined;
  lastName: string|undefined;
  private _age: Number|undefined
  private _birthDate: Date|undefined;

  public get age() {
    if (!this._birthDate) {
      return undefined;
    }
    return this._age;
  }

  public set birthDate(birthDate: Date) {
    this._birthDate = birthDate

    if (!this._birthDate) {
      this._age = undefined
      return;
    }

    const diff = Date.now() - birthDate.getTime();
    const ageDate = new Date(diff);
    this._age = Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
