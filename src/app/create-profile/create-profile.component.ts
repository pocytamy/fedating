import {Component, OnInit} from '@angular/core';
import {ImageService} from "../service/imageService";
import {ImageSnippet} from "../model/ImageSnippet";
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../service/LoginService";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  selectedFile!: ImageSnippet;
  formCreate!: FormGroup
  profile!: any;
  account: any;
  src = "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/hinh-avatar-anh-dai-dien-FB-mac-dinh.jpg?ssl=1";

  ngOnInit() {
    this.formCreate = new FormGroup({
      id: new FormControl(''),
      nickName: new FormControl(''),
      gender: new FormControl(''),
      age: new FormControl(''),
      bio: new FormControl(''),
      avatar: new FormControl(''),
    })
    this.showProfile()
  }

  constructor(private imageService: ImageService, private loginService: LoginService) {
  }

  accountId: number = this.loginService.getUserToken().id;


  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    this.profile = this.formCreate.value;
    this.profile.account = this.account;

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.imageService.uploadImage(this.selectedFile.file).subscribe(res => {
        this.profile.avatar = res.img;
        console.log(this.profile)
        this.imageService.creatProfile(this.profile).subscribe(data => {
          alert("ok")
        })
      })
    });
    reader.readAsDataURL(file);
  }


  showProfile() {
    this.loginService.myProfile(this.accountId).subscribe((data) => {

      this.formCreate.setValue({
        id: data.id,
        nickName: data.nickName,
        gender: data.gender,
        age: data.age,
        bio: data.bio,
        avatar: data.avatar,
      });
      this.account = data.account;
      if (data.avatar!=null){
        this.src = data.avatar
      }

    })
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file1] = event.target.files;
      reader.readAsDataURL(file1);

      reader.onload = () => {

        this.src = reader.result as string;

      };

    }
  }
}
