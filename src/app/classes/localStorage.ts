import { BehaviorSubject } from 'rxjs';
import { saveData as saveFile } from '../rl-classes/saveFile';

export class Rl_table {

  lastUsedId = 0 ;
  default: any = null ;
  table$ =  new BehaviorSubject([]) ;

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
    return this;
  }

  _push(_object): this {
    this.table = [...this.table, _object];
    this._save()
    return this
  }

  _insert(_index, _object): this {
    this.table.splice(_index, 0, {..._object});
    this._save();
    return this;
  }

  _delete(_index): this {
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
    this.table$.next(this.table)
    return this;
  }

  _load() {
    this.table = JSON.parse(localStorage.getItem( this.name)) ;
    console.log('load: ' + this.name);
    console.log( this.table );
    this.table$.next(this.table)
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

  _setTable(table) {
    this.table = [...table]
    this._save()
    return this

  }
  _export(){
    this._load()
    saveFile(this.table, 'export_' + this.name)
  }

}
