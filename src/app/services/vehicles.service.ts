import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VehiclesService {

    constructor(private db: AngularFireDatabase) { }

    Get<T>(url, query?) {
        return this.db.list(url, query)
            .snapshotChanges()
            .map(this.extractData);
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

    private extractData(actions) {
        return actions.map(action => {
            const data = { key: action.key, ...action.payload.val() };
            return data;
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
