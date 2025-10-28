// Fonctionnalité 1 et 1 bis : Compteur de Clics sur Footer
let clickCount = 0;
const footer = document.querySelector('footer');
if (footer) {
  footer.addEventListener("click", function () {
    clickCount++;
    console.log("clique");
    console.log(`clic numéro ${clickCount}`);
  });
}


// Fonctionnalité 2 : Toggle du Hamburger Menu
const hamburgerButton = document.querySelector('.navbar-toggler');
if (hamburgerButton) {
  hamburgerButton.addEventListener('click', function () {
    // si la classe est présente, elle l'enlève ; sinon, elle l'ajoute.
    console.log("on a cliqué sur le hamburger");
    const navbarHeader = document.getElementById('navbarHeader');
    navbarHeader.classList.toggle('collapse');
  });
}


// Fonctionnalité 3 : Texte Rouge sur Card 1
// avec .card, on prend le premier élément, avec querySelectorAll, il faut le rang [0]
// const firstCard = document.querySelectorAll('.card')[0]; // on peut le faire des 2 façons
const firstCard = document.querySelector('.card');
if (firstCard) {
  const firstCardEditButton = firstCard.querySelector('.btn-outline-secondary');
  if (firstCardEditButton) {
    firstCardEditButton.addEventListener('click', function () {
      console.log("on a cliqué sur Edit sur la première card");
      const firstCardText = firstCard.querySelector('.card-text');
      if (firstCardText) {
        // modification de la couleur (jusqu'à refresh de la page)
        firstCardText.style.color = 'red';
      }
    });
  }
}


// Fonctionnalité 4 : Toggle de Texte Vert sur Card 2
// on prend le deuxième élément de la liste .card, on est donc obligé de passer par All
const secondCard = document.querySelectorAll('.card')[1];
if (secondCard) {
  // querySelector pour trouver le premier .btn-outline-secondary à l'intérieur de secondCard
  const secondCardEditButton = secondCard.querySelector('.btn-outline-secondary');
  const secondCardText = secondCard.querySelector('.card-text');
  if (secondCardEditButton && secondCardText) {
    secondCardEditButton.addEventListener('click', function () {
      console.log("on a cliqué sur Edit sur la deuxième card donc [1]");
      if (secondCardText.style.color === 'green') {
        secondCardText.style.color = ''; // couleur par défaut (héritée), on pourrait aussi forcer à black
      } else {
        secondCardText.style.color = 'green';
      }
    });
  }
}


// Fonctionnalité 5 : Toggle "Nucléaire" du CDN Bootstrap (Double-clic sur Navbar)
const navbar = document.querySelector('.navbar');
const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
const navbarBrand = document.querySelector('.navbar-brand');
if (navbar && bootstrapLink && navbarBrand) {
  navbar.addEventListener('dblclick', function () {
    console.log("on a double-cliqué sur la navbar");
    // Toggle à 'disabled' ? si oui il est retiré (false), sinon on fait l'inverse
    const isDisabled = !bootstrapLink.disabled;
    bootstrapLink.disabled = isDisabled;
    // si Bootstrap est désactivé, on s'assure que la navbar reste visible
    if (isDisabled) {
      navbar.style.backgroundColor = '#343a40'; // je change la couleur pour qu'elle soit visible
    } else {
      // Si on réactive Bootstrap, on retire nos styles pour ne pas interférer
      navbar.style.backgroundColor = ''; // couleur d'origine
    }
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
        console.log("la souris est sur le bouton View");
        // On s'assure de ne pas le faire plusieurs fois
        if (!cardText.classList.contains('collapse')) {
          cardText.classList.add('collapse');
          cardImage.style.width = '20%';
        }
      });

      // Étape 2 : Restaurer la carte au survol du bouton "Edit"
      // (en faisant mouseover cela boucle en continu, je prends donc l'autre bouton pour agrandir la card)
      editButton.addEventListener('mouseover', function() {
        console.log("la souris est sur le bouton Edit");
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
const grisButton = document.querySelectorAll('.btn-secondary')[0]; // bouton gris

// 2. Cibler le parent de toutes les cards (row)
const cardsContainer = document.querySelector('.album .container .row');

if (grisButton && cardsContainer) {
  grisButton.addEventListener('click', function (event) {
    console.log("on a cliqué sur le bouton gris");
    // À chaque clic, on recalcule quelle est la première et la dernière carte
    const allCardElements = cardsContainer.querySelectorAll('.col-md-4');
    const lastCardElement = allCardElements[allCardElements.length - 1];
    
    // On déplace la dernière carte pour qu'elle devienne la première
    cardsContainer.prepend(lastCardElement);
  });
}


// Fonctionnalité 8 : Première card -> Dernière (avec le bouton bleu <==)
// 1. Cibler le bouton (ici, le 1er bouton du "album-buttons" qui est un <a>)
const bleuButton = document.querySelectorAll('.btn-primary')[0]; // bouton bleu
// cardsContainer est déjà déclaré plus haut

if (bleuButton && cardsContainer) {
  bleuButton.addEventListener('click', function (event) {
    console.log("on a cliqué sur le bouton bleu");
    // À chaque clic, on recalcule quelle est la première et la dernière carte
    const allCardElements = cardsContainer.querySelectorAll('.col-md-4');
    const lastCardElement = allCardElements[allCardElements.length - 1];
    // On déplace le PREMIER élément avant null, ce qui le met automatiquement à la fin
    cardsContainer.appendChild(firstCardElement);
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
