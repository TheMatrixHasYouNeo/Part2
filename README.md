Changelog
Part 2 Updates
Home Screen Update:

Displayed the average price of menu items categorized by courses.
Added logic to calculate the average price dynamically based on the menu.
Add Menu Screen:

Moved the 'Add Menu Item' feature from the home screen to a new, dedicated screen.
Allowed the chef to add, edit, or remove menu items from this screen.
Persistent Menu Items:

Introduced state management for menu items using useState and useEffect hooks to save and remove items persistently.
Added local state management to prevent data loss when navigating between screens.
Filter by Course:

Created a new screen where guests can filter the menu items based on courses (e.g., starters, mains, desserts).
Added filtering functionality to allow sorting and viewing menu items based on their course type.
Refactoring
Code Structure Refactor:

The project was restructured to improve code readability and maintainability by breaking down components into smaller, reusable files and functions.
Components Folder: Created a folder to store reusable UI components (e.g., buttons, input fields, etc.).
Screens Folder: Organized the screens into a dedicated folder for better structure and separation of concerns.
State Management Refactor:

Refactored state management to use useState and useEffect more efficiently.
Utilized hooks to manage state across different screens, ensuring data persistence and reducing redundant code.
Componentization:

Separated UI elements into individual components to make the code more modular and easier to maintain.
For example, the Menu Item form and List components were refactored into separate files for improved readability and scalability.
Improved Navigation:

Updated the navigation flow using React Navigation, allowing for smoother transitions between screens and more flexibility in the routing logic.
Added new routes for the "Add Menu" and "Filter" screens to improve user experience.
Optimized Performance:

Reduced unnecessary re-renders by using React.memo and improving state management logic.
Ensured that the app performs smoothly even with large numbers of menu items.
Refactoring Details
During the refactoring process, the following changes were made to improve the app's overall structure and maintainability:

Componentization: The UI elements were broken into smaller, reusable components to make the codebase more modular and easier to maintain.

State Management Refactor: State management for menu items was improved. Instead of passing down props through multiple layers, context or hooks were used for better performance and easier state handling.

Code Organization: The project structure was reorganized into logical sections (e.g., components, screens, assets). This allows for easier navigation through the code and makes the app scalable for future additions.

Navigation Improvements: Refined the navigation structure using React Navigation to handle screen transitions more smoothly.
