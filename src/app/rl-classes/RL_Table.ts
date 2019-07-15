export class RlTable {

  lastUsedId = 0 ;
  default ;

  constructor( private name: string, public table: any = [] ) {

    if (JSON.parse(localStorage.getItem( this.name))) {
      console.log('exist: ' + name) ;
      this._load();
      this.default = {...this.table[0]} ;
    } else {
      this._save();
    }
  }

  _add(_object): this {
    this.default = {..._object}
    this.table.splice(0, 0, {..._object});
    this._save();
    this._load();
    return this;
  }

  _duplicate(_index, _object): this {
    this.table.splice(_index, 0, {..._object});
    this._save();
    this._load();
    return this;
  }

  _delete(_index): this {
    this.table.splice(_index, 1);
    this._save();
    this._load();
    return this;
  }

  _log(): this {
    console.log(this.table);
    return this;
  }

  _save() {
    localStorage.setItem(this.name, JSON.stringify(this.table));
    console.log('save: ' + this.name);
    console.log( this.table );
    return this;
  }

  _load(): any {
    this.table = JSON.parse(localStorage.getItem( this.name)) ;
    console.log('load: ' + this.name);
    console.log( this.table );
    return this;
  }

  _table(): any {
    return [...this.table] ;
  }

  _setDefault(_object) {
    this.default = {..._object}
  }

  _clear() {
    this.lastUsedId = 0 ;
    this.table.length = 0 ;
    return this
  }

  _set_table_ ( tab ){
    let _table = tab
    setTimeout(() => {
        this.table = _table.map(e => e);
        this._save();
        console.log('SET')
        console.log(this.table)
      }, 500) ;
  }

  _set_table( tab ) {
    this.table = [...tab] ;
    this._save();
    console.log('SET')
    console.log(this.table)
    return this
  }

  _getById( _id ) {
    this.lastUsedId = _id ;
    this.table.map(( e, i ) => e ) ;
   return this.lastUsedId = _id ;
  }

}

export class Rl_global {

  constructor(private name: string = '_default_global', public object: any = {}) {

    if (JSON.parse(localStorage.getItem(this.name))) {
      console.log('exist: ' + name);
      this._load();
    }
    else {
      // this._save();
    }

  }

  _save() {
    localStorage.setItem(this.name, JSON.stringify(this.object));
    console.log('global save: ' + this.name)
    console.log( this.object );
    return this;
  }

  _load(){
    this.object = JSON.parse(localStorage.getItem(this.name)) ;
    // console.log('global load: ' + this.name);
    // console.log( this.object );
    return this;
  }

  _setValue(_value){
    this.object = _value;
    this._save();
    return this
  }

}

export class Rl_opTables {

  lastUsedId = 0 ;

  constructor( private name: string, public table = [] ) {

    if (JSON.parse(localStorage.getItem( this.name))) {
      console.log('exist: ' + name) ;
      this._load();
    } else {
      // this._save();
    }

  }

  _add(_object): this {
    this.lastUsedId = 0 ;
    this.table.splice(0, 0, {..._object});
    this._save();
    return this;
  }

  _duplicate(_index, _object): this {
    this.lastUsedId = _index;
    this.table.splice(_index, 0, {..._object});
    this._save();
    return this;
  }

  _delete(_index): this {
    if ( this.lastUsedId>0 ) { this.lastUsedId = this.lastUsedId - 1 }
    this.table.splice(_index, 1);
    this._save();
    return this;
  }

  _log(): this {
    console.log(this.table);
    return this;
  }

  _save() {
    localStorage.setItem(this.name, JSON.stringify(this.table));
    console.log('save: ' + this.name);
    console.log( this.table );
    return this;
  }

  _load(){
    this.table = JSON.parse(localStorage.getItem( this.name)) ;
    console.log('load: ' + this.name);
    console.log( this.table );
    return this;
  }

  _table(): any {
    return [...this.table] ;
  }


  _clear() {
    this.table.length = 0 ;
  }

  _set_table( tab ) {
    this.table = [...tab];
    this._save();
    console.log('SET')
    console.log(this.table);
    return this
  }

  _getById( _id ) {
    this.lastUsedId = _id ;
    this.table.map(( e, i ) => e ) ;
    return this.lastUsedId = _id ;
  }

}
