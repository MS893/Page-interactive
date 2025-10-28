// Fonctionnalité 1 et 1 bis : Compteur de Clics sur Footer
let clickCount = 0;

// 1. Pointer sur le footer
const footer = document.querySelector('footer');

// 2. Ajouter l'écouteur d'événement
if (footer) {
  footer.addEventListener("click", function () {
    clickCount++;
    // Fonctionnalité 1 : Afficher "clique"
    console.log("clique");
    // Fonctionnalité 1-bis : Afficher le compteur
    console.log(`clic numéro ${clickCount}`);
  });
}


// Fonctionnalité 2 : Toggle du Hamburger Menu
// 1. Pointer sur le bouton hamburger
const hamburgerButton = document.querySelector('.navbar-toggler');

if (hamburgerButton) {
  hamburgerButton.addEventListener('click', function () {
    // La fonction toggle fait exactement ce qui est demandé :
    // si la classe est présente, elle l'enlève ; sinon, elle l'ajoute.
    console.log("on a cliqué sur le hamburger");
    // 2. Pointer sur l'élément à cacher/afficher (navbarHeader)
    const navbarHeader = document.getElementById('navbarHeader');
    navbarHeader.classList.toggle('collapse');
  });
}


// Fonctionnalité 3 : Texte Rouge sur Card 1
// 1. Cibler la première card (via .card, on prend le premier élément, avec querySelectorAll, il faut le rang [0])
// const firstCard = document.querySelectorAll('.card')[0]; // on peut le faire des 2 façons
const firstCard = document.querySelector('.card');

if (firstCard) {
  // 2. Cibler le bouton "Edit" dans cette première card
  const firstCardEditButton = firstCard.querySelector('.btn-outline-secondary');

  if (firstCardEditButton) {
    firstCardEditButton.addEventListener('click', function () {
      console.log("on a cliqué sur Edit sur la première card");
      // 3. Cibler le texte (p.card-text) à modifier (dans la première card)
      const firstCardText = firstCard.querySelector('.card-text');

      if (firstCardText) {
        // Application irréversible du style (jusqu'à refresh de la page)
        firstCardText.style.color = 'red';
      }
    });
  }
}


// Fonctionnalité 4 : Toggle de Texte Vert sur Card 2
// 1. Cibler la deuxième card (on prend le deuxième élément de la liste .card on est obligé de passer par All)
const secondCard = document.querySelectorAll('.card')[1];

if (secondCard) {
  // 2. Cibler le bouton "Edit" dans cette deuxième card
  // Note : On utilise querySelector pour trouver le premier (et seul) .btn-outline-secondary à l'intérieur de secondCard
  const secondCardEditButton = secondCard.querySelector('.btn-outline-secondary');

  // 3. Cibler le texte à modifier
  const secondCardText = secondCard.querySelector('.card-text');

  if (secondCardEditButton && secondCardText) {
    secondCardEditButton.addEventListener('click', function () {
      console.log("on a cliqué sur Edit sur la deuxième card donc [1]");
      // Utilisation du if/else pour toggle le style de couleur
      if (secondCardText.style.color === 'green') {
        secondCardText.style.color = ''; // Remet à la couleur par défaut (héritée), on pourrait aussi forcer à black
      } else {
        secondCardText.style.color = 'green'; // Passe au vert
      }
    });
  }
}


// Fonctionnalité 5 : Toggle "Nucléaire" du CDN Bootstrap (Double-clic sur Navbar)
// 1. Pointer sur la navbar
const navbar = document.querySelector('.navbar');

// 2. Pointer sur le lien CSS de Bootstrap (assumant qu'il est le seul <link> ou a un id/attribut spécifique)
// Si le HTML est bien fait, on peut le trouver par son attribut 'href' ou en prenant le premier <link> (le HTML fourni ayant un seul link vers un CDN)
const bootstrapLink = document.querySelector('link[href*="bootstrap"]');

// 3. Cibler le titre "JS & Events" pour le rendre visible
const navbarBrand = document.querySelector('.navbar-brand');

if (navbar && bootstrapLink && navbarBrand) {
  navbar.addEventListener('dblclick', function () {
    console.log("on a double-cliqué sur la navbar");
    // Toggle l'attribut 'disabled' : si il est là (true), il est retiré (false), et inversement
    const isDisabled = !bootstrapLink.disabled;
    bootstrapLink.disabled = isDisabled;

    // Si Bootstrap est désactivé, on s'assure que la navbar reste visible
    if (isDisabled) {
      navbar.style.backgroundColor = '#343a40'; // Une couleur de fond sombre
      navbar.style.padding = '1rem'; // Un peu d'espace pour la rendre cliquable
      navbarBrand.style.color = 'white'; // Forcer le texte en blanc
    } else {
      // Si on réactive Bootstrap, on retire nos styles pour ne pas interférer
      navbar.style.backgroundColor = '';
      navbar.style.padding = '';
      navbarBrand.style.color = ''; // Laisser Bootstrap gérer la couleur du texte
    }
    // Affichage pour confirmer l'action
    console.log(`Bootstrap ${bootstrapLink.disabled ? 'désactivé' : 'activé'}`);
  });
}


// Fonctionnalité 6 : Réduction de Card au survol de "View"
// 1. Cibler toutes les cards
const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
  // 2. Cibler le bouton "View" de la card courante
  const viewButton = card.querySelector('.btn-success'); // Bouton pour réduire
  const editButton = card.querySelector('.btn-outline-secondary'); // Bouton pour restaurer

  if (viewButton && editButton) {
    // 3. Cibler le texte (p) et l'image (img) pour les modifications
    const cardText = card.querySelector('.card-text');
    const cardImage = card.querySelector('.card-img-top');

    if (cardText && cardImage) {
      // Étape 1 : Réduire la carte au survol du bouton "View"
      viewButton.addEventListener('mouseover', function () {
        // On s'assure de ne pas le faire plusieurs fois
        if (!cardText.classList.contains('collapse')) {
          cardText.classList.add('collapse');
          cardImage.style.width = '20%';
        }
      });

      // Étape 2 : Restaurer la carte au survol du bouton "Edit" (en faisant mouseover cela boucle en continu, je prends donc l'autre bouton pour agrandir la card)
      editButton.addEventListener('mouseover', function() {
        // On restaure uniquement si la carte est réduite
        if (cardText.classList.contains('collapse')) {
          cardText.classList.remove('collapse');
          cardImage.style.width = ''; // Rétablir la taille par défaut
        }
      });
    }
  }
});


// Fonctionnalité 7 : Dernière card -> Première (avec le bouton gris ==> )
// 1. Cibler le bouton (ici, le 2ème bouton du "album-buttons")
const moveLastToFirstButton = document.querySelectorAll('.btn-secondary')[1]; // bouton gris

// 2. Cibler le parent de toutes les cards (row)
const cardsContainer = document.querySelector('.album .container .row');

// 3. Cibler la dernière card
const lastCard = allCards[allCards.length - 1];

if (moveLastToFirstButton && cardsContainer && lastCard) {
  moveLastToFirstButton.addEventListener('click', function (event) {
    // Déplacer le dernier enfant (lastCard) avant le premier enfant (cardsContainer.firstChild)
    // Attention : il faut s'assurer d'insérer avant le PREMIER élément .col-md-4 et non un éventuel text node
    const firstCardElement = cardsContainer.querySelector('.col-md-4');

    cardsContainer.insertBefore(lastCard.closest('.col-md-4'), firstCardElement);
  });
}


// Fonctionnalité 8 : Première card -> Dernière (avec le bouton bleu <==)
// 1. Cibler le bouton (ici, le 1er bouton du "album-buttons" qui est un <a>)
const moveFirstToLastButton = document.querySelectorAll('.btn-primary')[0]; // bouton bleu

// 2. Cibler la première card
const firstCardElement = document.querySelectorAll('.col-md-4')[0]; // On prend le conteneur col-md-4 de la card

if (moveFirstToLastButton && cardsContainer && firstCardElement) {
  moveFirstToLastButton.addEventListener('click', function (event) {
    // Indice 1 : Bloquer le comportement par défaut (l'ouverture d'une page)
    event.preventDefault();

    // Indice 2 : insertAfter(A) équivaut à insertBefore(A, B) où B est l'élément qui suit A
    // Si B n'existe pas, A devient le dernier enfant.

    // On déplace le PREMIER élément avant null, ce qui le met automatiquement à la fin
    cardsContainer.appendChild(firstCardElement);

    // NOTE: appendChild() déplace l'élément si il existe déjà dans le DOM, le mettant à la fin du parent.
    // C'est la solution la plus simple pour "insertAfter le dernier élément".
  });
}


// Fonctionnalité 9 : Condensation de la Page via Touches Clavier (a, y, p, b)
// 1. Cibler le logo/nav (élément qui est focusable, ici on peut cibler le corps entier pour plus de fiabilité)
const body = document.querySelector('body');
const mainContainer = document.querySelector('.container'); // Le conteneur principal du contenu

// 2. Écouter l'événement keydown sur le document (meilleure pratique pour les raccourcis clavier)
document.addEventListener('keydown', function (event) {

  // 3. Retirer toutes les classes de colonnes et d'offset à chaque appui pour éviter l'accumulation
  // On travaille sur le conteneur principal .container de la page
  if (mainContainer) {
    mainContainer.classList.remove('col-sm-4', 'offset-md-4', 'offset-md-8');
  }

  if (event.key === 'a') {
    // 'a' : 4 colonnes à gauche (col-4)
    if (mainContainer) {
      mainContainer.classList.add('col-sm-4');
      // NOTE: Utilisation de .col-sm-4 pour cibler correctement le conteneur bootstrap.
    }
    console.log("Page condensée à gauche (a)");
  } else if (event.key === 'y') {
    // 'y' : 4 colonnes au milieu (col-4, offset-4)
    if (mainContainer) {
      mainContainer.classList.add('col-sm-4', 'offset-md-4');
    }
    console.log("Page condensée au centre (y)");
  } else if (event.key === 'p') {
    // 'p' : 4 colonnes à droite (col-4, offset-8)
    if (mainContainer) {
      mainContainer.classList.add('col-sm-4', 'offset-md-8');
    }
    console.log("Page condensée à droite (p)");
  } else if (event.key === 'b') {
    // 'b' : Tout redevient normal (déjà fait par le retrait des classes au début)
    console.log("Page rétablie (b)");
  }
});
