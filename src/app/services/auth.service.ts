import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { AppRoutes } from './../shared/models/enums';

@Injectable()
export class AuthService {

    constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

    isAuthenticated(): Observable<boolean> {
        return this.firebaseAuth.authState
            .map(user => user ? true : false);
    }

    getUserInfo() {
        return this.firebaseAuth.authState.map(user => {
            return user ? { displayName: user.displayName, userId: user.uid } : null;
        });
    }

    loginEmail(email: string, password: string) {
        return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    }

    loginGoogle() {
        return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }

    logout() {
        return this.firebaseAuth.auth.signOut();
    }
}
