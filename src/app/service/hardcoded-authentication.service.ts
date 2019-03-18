import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {app;
  constructor() { }
  authenticate( username: any,  password: any) {
    // console.log('before'+this.isUserLoggedIn());
    if (username === 'Sindhu' && password === 'sindhu') {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('after'+this.isUserLoggedIn());
      return true;
  }
    return false;
}
isUserLoggedIn() {
  const user = sessionStorage.getItem('authenticatedUser');
  return !(user === null);
}
logout() {
  sessionStorage.removeItem('authenticatedUser');
}
}
