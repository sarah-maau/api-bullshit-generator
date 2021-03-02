# API Bullshit Job Title

Cette API permet de générer des titres de poste pour briller sur LinkedIn.  
Le serveur génère une proposition à chaque rechargement de page. Chaque proposition est constituée :
- d'un adjectif
- d'un secteur d'activité 
- d'une position hierarchique

Exemples : 
- *"Professional Usability Manager"*
- *"Frontend Response Administrator"*
- *"Lead Implementation Orchestrator"*
- *"LinkedIn Quality Master"*
- *"HTML Assurance Analyst"*

Les utilisateurs peuvent soumettre des propositions via la query string. Ils ont aussi la possibilité de poster de nouvelles propositions que l'API gardera en mémoire.

Le générateur est accessible [ici](https://bullshit-job-title-generator.herokuapp.com/api/bullshit)

## Réalisation
J'ai entièrement réalisé ce projet Node.js lors de ma première semaine de spécialisation en API/data (quatrième mois de formation en développement web FS JavaScript).

Pour ce faire, j'ai utilisé Express. J'ai aussi utilisé un Swagger pour gagner en lisibilité (visible en ajoutant `/api-docs` à la suite de l'URL)

J'ai codé ce projet en une demi-journée.

## Stacks
- Node.js
- Express
- Joi (pour valider le format des données)
- JSDoc
- Express-swagger
- Heroku

## Langages utilisés
- JavaScript
- JSON

## Installation 

**Pré-requis**
- Node.js pour le télécharger c'est [ici](https://nodejs.org/en/download/)


1. Cloner le repo 
- en utilisant la clé SSH
```
git clone git@github.com:sarah-maau/api-bullshit-generator.git
```
- en utilisant HTTPS
```
git clone https://github.com/sarah-maau/api-bullshit-generator.git
```

2. Installer les dépendances 

```
npm i
```
3. Renommer le fichier `.env.example` en `.env` avec vos variables d'environnement

4. Lancer le script

```
npm start
```

5. Tester les routes via Swagger
```
http://localhost:<port>/api-docs
```
## Auteur
Sarah Maury - [GitHub](https://github.com/sarah-maau) - [LinkedIn](https://www.linkedin.com/in/sarahmaurydev/)

## Licence
Ce projet est sous licence MIT - voir le fichier `LICENSE` pour plus de détails
