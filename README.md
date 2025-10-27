# Interactive Web Page Project

This project uses JavaScript to add several dynamic and interactive features to a static HTML page built with Bootstrap. The script targets various elements on the page to create a more engaging user experience.

## How to Use

Simply open the `index.html` file in a web browser. All the interactive features are handled by the `script.js` file, which is loaded by the HTML page.

## Features

Here is a breakdown of the implemented features:

### 1. Footer Click Counter
*   **Action:** Click anywhere on the page's footer.
*   **Result:** A counter is incremented with each click. The current count is logged to the browser's console (e.g., `clic numéro 1`).

### 2. Hamburger Menu Toggle
*   **Action:** Click the hamburger menu button in the header.
*   **Result:** The navigation menu collapses or expands, showing or hiding the navigation links.

### 3. First Card Text Color Change
*   **Action:** On the first card in the gallery, click the "Edit" button.
*   **Result:** The card's description text permanently changes its color to red.

### 4. Second Card Text Color Toggle
*   **Action:** On the second card in the gallery, click the "Edit" button.
*   **Result:** The card's description text toggles between green and its default color.

### 5. Bootstrap Stylesheet Toggle
*   **Action:** Double-click the main navigation bar at the top of the page.
*   **Result:** The entire Bootstrap CSS stylesheet is enabled or disabled. This provides a "nuclear option" to see the page without any Bootstrap styling. The status is logged to the console.

### 6. Card Preview on Hover
*   **Action:** Hover the mouse cursor over the "View" button of any card.
*   **Result:** The card's image shrinks to 20% of its original width, and the description text disappears. Moving the mouse away reverts the card to its original state.

### 7. Move Last Card to First
*   **Action:** Click the gray `==>` button located above the card gallery.
*   **Result:** The last card in the gallery moves to the first position.

### 8. Move First Card to Last
*   **Action:** Click the blue `<==` link located above the card gallery.
*   **Result:** The first card in the gallery moves to the last position. The default link behavior is prevented.

### 9. Keyboard-Controlled Layout

This feature allows you to change the layout of the main content area using your keyboard. The page must be in focus for the keys to work.

*   **Action:** Press the `a` key.
*   **Result:** The page content is condensed into a 4-column layout on the left side of the screen.

*   **Action:** Press the `y` key.
*   **Result:** The page content is condensed into a 4-column layout in the center of the screen.

*   **Action:** Press the `p` key.
*   **Result:** The page content is condensed into a 4-column layout on the right side of the screen.

*   **Action:** Press the `b` key.
*   **Result:** The page layout is reset to its default full-width state.
