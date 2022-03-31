const container= document.querySelector('.container');
const seats= document.querySelectorAll('.row .seat:not(.unavailable)');
const count= document.getElementById('count');
const total= document.getElementById('total');
const busselect= document.getElementById('bus');

let ticketPrice = +busselect.value;


container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('unavailable')) {
      e.target.classList.toggle('selected'); 

      updateSelectedCount();

    }
});

