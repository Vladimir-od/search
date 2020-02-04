import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  checkNumber(contNumber): any {
    let p2 = 1;
    let sum = 0;
    if (contNumber.length === 11) {
      for (let i = 0; i < 10; i++) {
        let contC = contNumber.charAt(i);
        if (contC === 'A') {
          contC = 10;
        } else if (contC === 'B') {
          contC = 12;
        } else if (contC === 'C') {
          contC = 13;
        } else if (contC === 'D') {
          contC = 14;
        } else if (contC === 'E') {
          contC = 15;
        } else if (contC === 'F') {
          contC = 16;
        } else if (contC === 'G') {
          contC = 17;
        } else if (contC === 'H') {
          contC = 18;
        } else if (contC === 'I') {
          contC = 19;
        } else if (contC === 'J') {
          contC = 20;
        } else if (contC === 'K') {
          contC = 21;
        } else if (contC === 'L') {
          contC = 23;
        } else if (contC === 'M') {
          contC = 24;
        } else if (contC === 'N') {
          contC = 25;
        } else if (contC === 'O') {
          contC = 26;
        } else if (contC === 'P') {
          contC = 27;
        } else if (contC === 'Q') {
          contC = 28;
        } else if (contC === 'R') {
          contC = 29;
        } else if (contC === 'S') {
          contC = 30;
        } else if (contC === 'T') {
          contC = 31;
        } else if (contC === 'U') {
          contC = 32;
        } else if (contC === 'V') {
          contC = 34;
        } else if (contC === 'W') {
          contC = 35;
        } else if (contC === 'X') {
          contC = 36;
        } else if (contC === 'Y') {
          contC = 37;
        } else if (contC === 'Z') {
          contC = 38;
        }
        sum = sum + contC * p2;
        p2 = p2 * 2;
      }

      sum = sum % 11;
      sum = (sum === 10) ? (0) : (sum);
      const c = contNumber.charAt(10);
      // tslint:disable-next-line:triple-equals
      if (c == sum) {
        return this.router.navigate(['/container/', contNumber]);
      }
      return alert('Контрольная сумма контейнера не верная');

    }
  }
  clear(form: NgForm) {
    form.reset();
  }
}
