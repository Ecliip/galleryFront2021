import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  reviews = [
    {title: '"... She works as a fireman"', text: 'My neighbor Georgine has one of these. She works as a fireman and she says it looks colorful.\n' +
        'talk about hatred.', photo: '../../../assets/images/portrait1.jpeg', name: 'Bernabe Montoya'},
    {title: '"... it but got apricot"', text: 'My dog loves to play with it.\n' +
        'I tried to belly-flop it but got Turkish Delight all over it.\n' +
        'heard about this on instrumental country radio, decided to give it a try.', photo: '../../../assets/images/portrait2.jpeg', name: 'Esther Albert'},
    {title: '"... I tried to maim"', text: 'i use it usually when i\'m in my alley.\n' +
        'heard about this on ndombolo radio, decided to give it a try.\n' +
        'This Coca-Cola works so well. It hungrily improves my basketball by a lot.', photo: '../../../assets/images/portrait3.jpeg', name: 'Mario Orozco'},
    {title: '"... got apricot all over"', text: 'I tried to kidnap it but got apricot all over it.', photo: '../../../assets/images/portrait4.jpeg', name: 'Alfredo Revuelta'},
    {title: '"... She works as a bartender"', text: 'My neighbor Julisa has one of these. She works as a bartender and she says it looks crooked.\n' +
        'this Coca-Cola is vertical.', photo: '../../../assets/images/portrait5.jpeg', name: 'Mauro Guirao'}
  ];
  counter = 0;

  constructor() { }

  ngOnInit(): void {
    this.counter = 0;
    setInterval( () => {
      if (this.counter === this.reviews.length - 1) {
        this.counter = 0;
      } else {
        this.counter ++;
      }
    }, 5000);

  }

}
