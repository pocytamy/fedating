export class Account{
  userName!:string;
  password!:string;
  number!:string;

  constructor(userName: string, password: string, number: string) {
    this.userName = userName;
    this.password = password;
    this.number = number;
  }
}
