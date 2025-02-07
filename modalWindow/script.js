'use strict';

const modal = document.querySelector('.modal');
// Wählt das erste Element mit der Klasse "modal" aus und speichert es in der Variable "modal".

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// Wählt alle Elemente mit der Klasse "show-modal" aus und speichert sie in einer NodeList in der Variable "btnsOpenModal".
// Würde statt querySelectorAll nur querySelector stehen, so würde nur das erste Element ausgewählt werden.

// Nun möchten wir hidden entfernen, wenn das Modal geöffnet wird
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden'); //overlay ist die unschärfe
};
// Definiert eine Funktion "openModal", die die Klasse "hidden" von den Elementen "modal" und "overlay" entfernt, um sie sichtbar zu machen.

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// Definiert eine Funktion "closeModal", die die Klasse "hidden" zu den Elementen "modal" und "overlay" hinzufügt, um sie unsichtbar zu machen.

// Fügt jedem Button mit der Klasse "show-modal" einen Event-Listener hinzu, der das Modal öffnet, wenn der Button geklickt wird.
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// Fügt dem Schließen-Button und dem Overlay einen Event-Listener hinzu, der das Modal schließt, wenn sie geklickt werden.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Jetzt fügen wir nicht mehr für "click" einen EventListener hinzu, sondern auch für einen TASTENDRUCK:
// ---------------------------------------------------------------------------------------------
// keydown = Press key down
// keyup = Lift key up
// keypress = Keep pressing key
// ---------------------------------------------------------------------------------------------

// Schließt das Modal, wenn die "Escape"-Taste gedrückt wird und das Modal sichtbar ist.
document.addEventListener('keydown', function (e) {
  //Jetzt wollen wir definieren welche Key gedrückt wird:
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // If the key that is pressed is the escape key and if the modal does not contain class hidden, then ...
    closeModal();
  }
  // Wie wissen wir aber nun welche Key gedrückt wurde. Schaue in der Konsole mit dem Code:
  // ---------------------------------------------------------------------------------------------
  // document.addEventListener("keydown", funktion  (e) {
  // console.log(e.key);
  // }
  // Jetzt kannst du eine Taste drücken und schauen wie diese heißt
  // ---------------------------------------------------------------------------------------------
});
