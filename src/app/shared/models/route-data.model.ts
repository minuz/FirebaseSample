import { UserInfo } from 'firebase/app';
import { TableHeader } from 'app/shared/models/table.models';
import { VehiclesRoutes, FirestoreCollection } from './enums';

export interface RouteData {
    tableHeaders: TableHeader[];
    firestoreCollection: FirestoreCollection;
}
