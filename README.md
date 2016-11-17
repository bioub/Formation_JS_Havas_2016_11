# Formation JS Fullstack

## Exercice Langage

* Générer un entier aléatoire entre 0 et 100 (API Math sur MDN)
* Demander et récupérer la saisie, afficher si le nombre est plus grand, plus petit ou trouvé (API Readline sur Node.js)
* Pouvoir trouver en plusieurs tentative (problème d'asynchronisme)
* Stocker les essais dans un tableau et les réafficher entre chaque tour (API Array sur MDN)
* Afficher une erreur si la saisie n'est pas un nombre (API Number sur MDN)

# Exercices Angular + Express

## Ajouter un contact

* Ajouter un controller ContactAddCtrl associé au template contact-add.template.html
* Créer un formulaire sur le template avec prenom et nom
* Créer un fonction ajouter sur le scope
* Appeler la fonction ajouter au ng-submit d'un formulaire
* Faire une requête POST au serveur en passant le contact en entrée
* Facultatif : En cas de succès rediriger vers la liste avec le service $location

## Supprimer un contact

* Côté serveur, créer en s'inspirant des autres pages, créer un controleur pour supprimer un contact, retourner le contact qui vient d'être supprimé
* Supprimer le contact du tableau côté Express
* En cas de succès, le supprimer du tableau côté Angular

## Afficher le détail d'un contact

* Créer un contrôleur et un template
* Charger le contrôleur dans app.module
* Créer une route pour afficher un contact avec un paramètres, les URL des routes avec paramètres sont sous la forme /une_url/:param
* Dans le controller récupérer l'id saisi dans l'URL grâce au service $routeParams (voir la doc sur angularjs.org)
* Créer le controller côté express qui retourne un contact par id
* Récupérer le contact en envoyant une requete GET à l'API REST
* Afficher le contact dans le template

