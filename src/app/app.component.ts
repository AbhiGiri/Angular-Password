import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = "";

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  generatePwd() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()_+";

    let validChars = "";

    if(this.includeLetters) {
      validChars += letters;
    }

    if(this.includeNumbers) {
      validChars += numbers;
    }

    if(this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = "";
    for (let i = 0; i < this.length; i++) {
      const element = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[element];
    }

    this.password = generatedPassword;
  }
}
