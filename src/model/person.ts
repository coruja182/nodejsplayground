export class Person {
  id: string;
  firstName: string;
  lastName: string;
  private _age: Number
  private _birthDate: Date;

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
