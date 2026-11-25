# Dylan Couto de Oliveira

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Recruteurs et responsables techniques qui évaluent un développeur full-stack TypeScript sénior pour un poste ou une mission.
- Clients potentiels qui cherchent quelqu'un pour concevoir ou reprendre une application Angular, NestJS, React ou Next.js.
- Écoles et responsables de programmes, en audience secondaire, qui découvrent l'activité de formateur de Dylan.

## Product Purpose

Montrer en une page ce que Dylan sait faire, ce qu'il a construit et comment le joindre. Un recruteur ou un client doit comprendre en dix secondes : fullstack Angular × NestJS, des projets réels en production, un parcours lisible. Chaque page se termine sur une voie courte vers le contact ou le CV.

## Positioning

Développeur full-stack TypeScript sénior, Angular × NestJS, aussi React, Next.js et SwiftUI. Six ans de micro-frontends, de microservices et de pipelines, du SaaS pour les collectivités au monitoring environnemental. Il enseigne aussi le développement en Bachelor et Mastère, et code ses cours comme des jeux.

## Site Map

- `/` : accueil, chiffres clés, projets choisis, parcours, bloc contact.
- `/experiences` : Campbell Scientific, Operis, Citizens, en parallèle l'activité de formateur, références.
- `/projets` : produits, apps iOS, plateformes de cours, sites clients, projets pour le plaisir.
- `/projets/dmt` : seule étude de cas détaillée, la médiathèque auto-hébergée DMT.
- `/a-propos` : portrait, savoir-faire, compétences techniques, formation, enseignement.
- `/contact` : email, LinkedIn, GitHub, localisation, références.
- `/cv` : CV complet en HTML, imprimable ou enregistrable en PDF depuis le navigateur.

## Capabilities and Constraints

- Site Next.js 16 et TypeScript, rendu statique, déployé en conteneur Docker depuis `main`.
- Français uniquement. L'ancienne version anglaise `/en`, les pages services `/interventions-ecoles` et `/agents-automatisations-ia` et les anciennes études de cas redirigent en 308 vers la page la plus proche (`next.config.ts`).
- Email public : contact@dylan-cdo.fr. Localisation affichée : Normandie / Paris.
- Le CV PDF d'origine contient un numéro de téléphone et une autre adresse email : il n'est pas publié. Le bouton du CV imprime la page.
- Umami mesure les interactions (`data-umami-event` sur les liens email et le bouton d'impression).
- Le design de référence est la page « Portfolio — Bento » du canvas de conception ; le site doit lui rester fidèle.

## Brand Commitments

- Marque : le monogramme `DC` sur carré bleu suivi de « Dylan. ». Le favicon reprend le carré `DC`.
- Nom complet pour le référencement : Dylan Couto de Oliveira.
- Français, tutoiement, phrases courtes : « Parlons de ton projet. »
- Des faits, pas d'adjectifs : « −30 % de temps de build », « 5 devs accompagnés ». Pas de « passionné », « expert reconnu », « solutions innovantes ».
- Pas d'emoji, pas de point d'exclamation.

## Evidence on Hand

- Contenus du site dans `lib/content.ts` : expériences, projets, compétences, formation, références.
- Chiffres publiés, tous sourcés dans le parcours : −30 % de temps de build GitLab CI (Campbell), couverture de tests au-delà de 80 % (Campbell, Operis), ~10 micro-frontends et 10 microservices (Campbell), 15 000 utilisateurs par jour et ≈ 60 % des métropoles françaises (Operis), 5 développeurs accompagnés.
- Captures disponibles dans `public/assets/` ; seules DuoShot et Cast Loop sont affichées, comme dans la maquette.
- Portrait réel fourni par Dylan : `public/portrait.jpg`.
- Pas de capture de DMT ni de Cartable pour l'instant.

## Product Principles

- Montrer un travail concret avant d'affirmer une expertise.
- Ne jamais inventer de client, de chiffre, de témoignage ou de projet.
- Un projet se décrit par ce qu'il fait pour quelqu'un, en une phrase ; la stack vient après, en étiquette.
- Ce qui manque ne s'affiche pas : pas de texte entre crochets en production.
- Accessibilité, performance et fidélité à la maquette sont des critères de livraison.

## Accessibility & Inclusion

- Texte courant au moins 4,5:1 dans les thèmes clair et sombre.
- Focus clavier visible partout, cibles tactiles d'au moins 44 px.
- Thème clair, sombre ou système au choix du visiteur ; « Système » suit le réglage de l'appareil.
- Les animations se limitent au soulèvement des tuiles et s'arrêtent avec `prefers-reduced-motion`.
