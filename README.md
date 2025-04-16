# VivaTrend

## Product Showcase

> _[Screenshot placeholder – update with your image]_

## Description

**VivaTrend** is a full-featured e-commerce web application built using **React**, **Vite**, **TailwindCSS**, and **TypeScript**. It connects to the [Noroff API (v2)](https://v2.api.noroff.dev/) to fetch and manage product data, and it supports user registration, authentication, shopping cart functionality, and contact form.

---

## Features

- **User Authentication**

  - Register using a valid `@stud.noroff.no` email.
  - Login/logout system with token handling.
  - User profile page with details.

- **Product Showcase**

  - Grid layout with image, title, price (discounted and original), rating, and tags.
  - Discount badge shown dynamically.

- **Product Details Page**

  - Display full product information.
  - “Add to Cart” with toast notifications.

- **Search & Sort Functionality**

  - Search products by name.
  - Sort by title and price.

- **Shopping Cart System**

  - Add, remove, adjust quantity of products.
  - Cart stored in localStorage.
  - Total cost calculation and checkout system.

- **Checkout Page**

  - Success message and cleared cart.
  - Toast on successful checkout.

- **Contact Page**

  - Validated contact form with full name, subject, email, and message.
  - Form powered by TypeScript.
  - Toasts for submission success/failure.

- **Responsive Design**

  - Mobile-friendly and accessible design.

- **TypeScript Integration**
  - Fully typed API calls, components, and states.

---

## Technologies Used

- React + Vite
- Tailwind CSS
- TypeScript
- React Router DOM
- Custom API Integration
- LocalStorage

---

## API Integration

```ts
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || "https://v2.api.noroff.dev/",
  ENDPOINTS: {
    AUTH: {
      REGISTER: "auth/register",
      LOGIN: "auth/login",
    },
    PRODUCTS: {
      ALL: "online-shop",
      SINGLE: (id: string) => `online-shop/${id}`,
    },
  },
  DEFAULT_HEADERS: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
} as const;
```

**API Key:**  
Add this in a `.env` file at the root of the project:

```
VITE_API_KEY=your-api-key
```

---

## Setup & Run

1. **Clone repo**:

```bash
git clone https://github.com/YOUR_USERNAME/vivatrend.git
cd vivatrend
```

2. **Install dependencies**:

```bash
npm install
```

3. **Add environment variables**:
   Create a `.env` file in root with this content:

```
VITE_API_KEY=your-api-key
VITE_API_BASE_URL=https://v2.api.noroff.dev/
```

4. **Run dev server**:

```bash
npm run dev
```

5. **Build for production**:

```bash
npm run build
```

6. **Preview build**:

```bash
npm run preview
```

---

## Links

- **Live Site**: _Coming soon_
- **GitHub Repo**: _Coming soon_
