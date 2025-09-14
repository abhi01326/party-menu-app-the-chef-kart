# 🍽️ Party Menu Selection App

A ReactJS application that allows users to **browse, search, and select dishes** for a party.  
Users can view dishes by category, filter Veg/Non-Veg, see ingredients, and track their selected dishes.

---

## 🚀 Features

### ✅ Menu Categories
- Four tabs: **Starter, Main Course, Dessert, Sides**  
- Switching tabs updates the displayed dishes.

### ✅ Dish List
- Each dish card shows:
  - Dish name
  - Short description
  - Image
  - Button to **Add / Remove**
  - **View Ingredients** button (navigates to details page)
- Selected dishes are visually highlighted.
- Selection count updates dynamically.

### ✅ Search Functionality
- Search bar at the top.  
- Filters dishes **case-insensitively** by name.  
- Applies **only within the active category**.  

### ✅ Veg / Non-Veg Filter
- Toggle filters for Veg and Non-Veg dishes.  
- Updates the dish list instantly.

### ✅ Dish Selection Summary
- Shows:
  - Count of selected dishes in each category.
  - Total selected count at the bottom.
- "Continue" button available (dummy, no navigation).  

### ✅ Ingredient Detail Screen
- Clicking **Ingredients** shows:
  - Dish name + description
  - Ingredient list with quantities
- Clean UI with modal and navigation.

---

## 🛠️ Tech Stack

- **React 18** with Hooks (`useState`, `useContext`)  
- **React Router v6** for navigation  
- **Redux Toolkit** for cart/selection management  
- **Tailwind CSS** for UI styling  
- **React Icons** for UI icons  

---

## 📂 Project Structure
```
src/
 ├── components/
 │    ├── Dishes.jsx
 │    ├── DishItem.jsx
 │    ├── Modal.jsx
 │    └── Header/
 │
 ├── store/
 │    ├── store.js
 │    └── CartSlice.js
 │
 ├── context/
 │    └── MenuContext.js
 │
 ├── constants/
 │    └── data.js   # mock menu data (60 dishes)
 │
 ├── App.jsx
 ├── main.jsx
 ├── Ingredients.jsx
 └── index.css
```

---

## ⚡ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/party-menu-app.git
cd party-menu-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the app
```bash
npm run dev
```

The app will be available at **http://localhost:5173/** (Vite default).  

---

## 📖 Usage
- Select a category tab (Starters, Main Course, Dessert, Sides).  
- Use the search bar to filter dishes.  
- Toggle **Veg/Non-Veg** to refine the list.  
- Add/Remove dishes to track selections.  
- Click **Ingredients** to view full details.  

---

## 🎨 Design
The design follows the provided **Figma mock**.  
All components are responsive and styled with Tailwind CSS.  

---

## ✅ Future Improvements
- Persist selected dishes in **localStorage**.  
- Add multi-user session support.  
- Integrate with backend API for live menu data.  
