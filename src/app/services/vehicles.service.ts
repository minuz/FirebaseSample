import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VehiclesService {

    constructor(private db: AngularFireDatabase) { }

    Get<T>(url, query?) {
        return this.db.list(url, query).valueChanges()
            // .map(this.extractData)
            .catch(this.handleError);
    }

    Put<T>(url: string, key: string, model: any) {
        const list = this.db.list(url);
        list.update(key, model);
        return list.valueChanges();
    }

    Post<T>(url: string, body?: T) {
        const list = this.db.list(url);
        list.push(body);
        return list.valueChanges();
    }

    Delete<T>(url: string, key: string) {
        const list = this.db.list(url);
        list.remove(key);
        return list.valueChanges();
    }

    private extractData<T>(res) {
        return res.map(obj => {
            const values = JSON.parse(obj.$value);
            const item = Object.assign({}, { key: obj.$key }, values);
            return item;
        });
    }

    private handleError(error: any) {
        let msg;
        if (error.status > 400) {
            msg = error._body;
        } else {
            msg = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        }
        console.error(msg);
        return Observable.throw(msg);
    }

}
