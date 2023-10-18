import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  users: User[] = [
    { id: 0, email: 'admin@admin.com', password: 'admin' },
    { id: 1, email: 'user1@user.com', password: 'user1' },
    { id: 2, email: 'user2@user.com', password: 'user2' },
  ];

  loadUser = () => {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  };

  randomnum = (n = 1000): number => {
    return Math.floor(n * Math.random());
  };

  uniqueId = () => {
    let rannum = this.randomnum();
    let id = this.users.find((user) => user.id === rannum);

    if (id) {
      this.uniqueId();
      return 0;
    } else {
      return rannum;
    }
  };

  login = (user: User): void => {
    this.users = JSON.parse(localStorage.getItem('users')!);
    let id = this.users.find((data) => data.email === user.email)?.id;
    console.log(user.email);

    sessionStorage.setItem('logged user', JSON.stringify(id));
  };
  logout = (): void => {
    sessionStorage.removeItem('logged user');
  };
  isLoggedIn = (): boolean => {
    return sessionStorage.getItem('logged user') !== null;
  };

  validate = (user: User): boolean => {
    return (
      (JSON.parse(localStorage.getItem('users') as string) as User[]).findIndex(
        (u) => u.email === user.email && u.password === user.password
      ) !== -1
    );
  };

  signup = (user: User): void => {
    this.users = JSON.parse(localStorage.getItem('users')!);
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  };
}
