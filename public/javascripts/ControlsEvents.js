/**
 * DOM and events example.
 * Essentially for client DOM and events.
 */

class ControlsEvents {
  constructor(socket) {
    // Reference on the socket
    this.socket = socket;
    // DOM elements
    this.button = document.querySelector('#button-reponse');
    this.button2 = document.querySelector('#button-joker');


    // DOM events
    this.button.onclick = (event) => this.onClickreponse(event);
    this.button2.onclick = (event) => this.onClickjoker(event);

  }

  onClickreponse(event) {
    this.socket.reponse();
    console.log('Yes ca marche reponse');
  }

  onClickjoker(event) {
    //this.socket.reponse();
    console.log('Yes ca marche joker');
  }

}
