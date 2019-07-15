export class RlGlobal {


  constructor( private name: string, public value: any = '' ) {

    if (JSON.parse(localStorage.getItem( this.name))) {
      console.log(`exist: ${name}`) ;
      this._load();
    } else {
      this._save();
    }

    return value;
  }

  _set(_var): this {
    this.value = _var;
    this._save();
    return this;
  }

  _log(): this {
    console.log(this.value);
    return this;
  }

  _save() {
    localStorage.setItem(this.name, JSON.stringify(this.value));
    console.log(`save: ${this.name} =`, this.value);
    return this;
  }

  _load(): any {
    this.value = JSON.parse(localStorage.getItem( this.name)) ;
    console.log(`load:  ${this.name} =`, this.value);
    return this;
  }

}
