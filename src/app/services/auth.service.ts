import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { BehaviorSubject, Observable } from 'rxjs/rx';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(private firebase: AngularFireAuth, private router: Router) { }

    isAuthenticated(): Observable<boolean> {
        return this.firebase.authState.map(user => {
            if (user) {
                return true;
            } else {
                this.router.navigate(['/login']);
                return false;
            }
        });
    }

    getUserInfo() {
        return this.firebase.authState.map(user => {
            return user ? { displayName: user.displayName, userId: user.uid } : null;
        });
    }

    loginEmail(email: string, password: string) {
        return this.firebase.auth.signInWithEmailAndPassword(email, password);
    }

    loginGoogle() {
        return this.firebase.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }

    logout() {
        return this.firebase.auth.signOut();
    }
}
