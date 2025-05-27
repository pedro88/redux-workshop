# 🛠 Redux Workshop - Todo App

## 📋 Introduction
Bienvenue dans ce workshop Redux ! Vous allez compléter une application de gestion de tâches (Todo) en implémentant les fonctionnalités manquantes avec Redux Toolkit.

## 🎯 Objectifs
- Comprendre l'architecture Redux
- Implémenter des reducers et actions
- Gérer l'état global d'une application React

## 🔧 Fonctionnalités à implémenter

### 1. **todoSlice.tsx** *(À compléter)*
- `addTodo` : Ajouter une nouvelle tâche
- `editTodo` : Modifier une tâche existante
- `clearSelectedTodo` : Réinitialiser la sélection
- `displayAddTodo` : Gérer la visibilité de la modale

### 2. **TodoDisplayer.tsx**
- Implémenter `handleAddClick` pour ouvrir la modale d'ajout

### 3. **AddTodo.tsx**
- Gérer la soumission du formulaire :
  - Ajouter la nouvelle tâche au store
  - Fermer la modale après soumission

### 4. **Todo.tsx** *(Composant individuel)*
- Implémenter :
  - La soumission des modifications
  - La fermeture de la modale
  - La suppression d'une tâche

## 📚 Ressources utiles
- [Documentation Redux Toolkit](https://redux-toolkit.js.org/)
- [Guide Redux Essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
- [API React-Redux Hooks](https://react-redux.js.org/api/hooks)

## 💡 Conseils
1. Inspirez-vous du code existant pour comprendre la structure
2. Commencez par les reducers avant de passer aux composants
3. Utilisez les Redux DevTools pour debugger

## 🚀 Bonus
- Persistance avec `localStorage`
- Système de filtrage (par statut/priorité)
- Animations entre les états

