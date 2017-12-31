import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { UserInfo, auth } from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { AppRoutes } from './../shared/models/enums';

@Injectable()
export class AuthService {

    constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

    isAuthenticated(): Observable<boolean> {
        return this.firebaseAuth.authState
            .map(user => user ? true : false);
    }

    getUserInfo(): Observable<UserInfo> {
        return this.firebaseAuth.authState
            .map(user => user ? <UserInfo>user : null)
            .catch(err => {
                console.log(err);
                return Observable.throw(err);
            });
    }

    loginEmail(email: string, password: string) {
        return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    }

    loginGoogle() {
        return this.firebaseAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    }

    logout() {
        return this.firebaseAuth.auth.signOut();
    }
}
