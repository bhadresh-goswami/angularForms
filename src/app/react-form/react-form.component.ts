import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators  } from "@angular/forms";
@Component({
  selector: "app-react-form",
  templateUrl: "./react-form.component.html",
  styleUrls: ["./react-form.component.css"]
})
export class ReactFormComponent implements OnInit {
  constructor() {}

  name = new FormControl("");
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('',Validators.required),
  });

  onSubmit()
  {
    //alert("hi!");
    console.log(this.profileForm.value);
    console.log(this.profileForm.valid);

    console.log(this.profileForm.get("firstName").value);
    console.log(this.profileForm.get("lastName").value);
  }

  ngOnInit() {}
}
