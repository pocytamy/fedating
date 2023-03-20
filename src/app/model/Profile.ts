export class Profile {
  id!:number;
  nickName!: string;
  gender!:string;
  age!: number;
  bio!: string;
  avatar!: string;
  account!:any


  constructor(id: number, nickName: string, gender: string, age: number, bio: string, avatar: string, account: any) {
    this.id = id;
    this.nickName = nickName;
    this.gender = gender;
    this.age = age;
    this.bio = bio;
    this.avatar = avatar;
    this.account = account;
  }
}
