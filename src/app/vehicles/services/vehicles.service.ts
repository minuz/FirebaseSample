import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { IVehicle } from 'app/shared/models/vehicles';
import { FirestoreCollection } from 'app/shared/models/enums';

@Injectable()
export class VehiclesService {

    constructor(private db: AngularFirestore) { }

    GetWhere(collection: FirestoreCollection, fieldPath: string, whereOperator: any, value: any) {
        return this.db.collection<IVehicle>(collection, ref => ref.where(fieldPath, whereOperator, value))
            .snapshotChanges()
            .map(actions => {
                return actions.map(document => {
                    const data = document.payload.doc.data() as IVehicle;
                    const id = document.payload.doc.id;
                    return { id, ...data };
                });
            });
    }

    Put(collection: FirestoreCollection, document: any) {
        const docRef = this.db.doc<IVehicle>(`${collection}/${document.id}`);
        return docRef.update(document);
    }

    Post(collection: FirestoreCollection, document?: IVehicle) {
        return this.db.collection<IVehicle>(collection).add(document);
    }

    Delete(collection: FirestoreCollection, id: string) {
        const docRef = this.db.doc<IVehicle>(`${collection}/${id}`);
        return docRef.delete();
    }
}
