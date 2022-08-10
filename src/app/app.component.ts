import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  toshow = '0';
  value ='';

  write(value:string) {
    this.value = this.value + value
    this.toshow = this.value
  }

  clear() {
    this.value = "";
    this.toshow = this.value;
  };

  resolve() {
    try {
      this.toshow = eval(this.value);
    } catch (error) {
      this.toshow = "Error"
      this.value = ""
    }
  }

  back() {
    this.value = this.value.slice(0 , -1)
    if (this.value == "") {this.value="0"}
    this.toshow = this.value
  }
}
