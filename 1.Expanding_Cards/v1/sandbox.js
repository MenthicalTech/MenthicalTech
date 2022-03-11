 // JavaScript BY Mentor Buteyo

 // Variable Declaration 
 const cards = document.querySelectorAll('.card');
 const dateEl = document.querySelectorAll('.time');

 // Days and Months 
 const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 const months = ["Jan", "Feb", "Mar", "Apri", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

 // Card Function 
 cards.forEach(card => {
     card.addEventListener('click', () => {
         removeActiveClasses();
         card.classList.add('active');
     });

 });

 // Removing Active Classes Function 
 function removeActiveClasses() {
     cards.forEach(card => {
         card.classList.remove('active');
     });
 };

 // Date Function
 addDate();

 function addDate() {
     const time = new Date();
     const date = time.getDate();
     const month = time.getMonth();
     const day = time.getDay();

     dateEl.forEach(time => {
         time.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
     });
 };