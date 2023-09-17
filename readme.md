# focus4-starter-kit

Starter kit pour une application Focus v4. Il s'agit d'une application exemple avec quelques écrans basiques, présentant des usages simples et courant du framework.

Une version de démo est disponible sur https://focus4-starter-kit.fly.dev

## Remarques

-   Le code généré correspondant au modèle de données (contenu de `locale`, `model` et `services`) a été généré à partir du modèle exemple des [samples de topmodel](https://github.com/klee-contrib/topmodel/tree/develop/samples/model), via la [config Focus](https://github.com/klee-contrib/topmodel/tree/develop/samples/generators/focus).
-   Le starter kit utilise `vite-plugin-mock-dev-server` pour générer des "fausses" implémentations des différents services. Il faudra le remplacer par votre propre API (dans `server.proxy` de `vite.config.ts`)
-   Le starter kit inclus des fichiers et de la config pour son déploiement vers [fly.io](https://www.fly.io) (`Dockerfile`, `.dockerignore`, `fly.toml` et la dépendance NPM à `@flydotio/dockerfile`). Ce n'est pas à reprendre également.
