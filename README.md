# ReactJS Tech Test – Flex Business Solutions

This is a ReactJS-based inventory management interface built as part of a technical test for Flex Business Solutions.

The app allows you to:

- View a list of job sites with their statuses  
- Create a new job site  
- Click on a job site to open its inventory dashboard  
- Filter/search job sites and inventory items  
- Edit inventory items inside categories using a modal

---

## 🚀 Getting Started

To run the app locally:

```bash
npm install
npm run dev
```

Then open your browser at: [http://localhost:5173](http://localhost:5173)

---

## 🧪 Running Unit Tests

Unit tests are written using **Vitest** and **React Testing Library**.

To run all tests:

```bash
npx vitest run
```

### ✅ Tested Components and Pages

- `JobSiteList`  
- `CreateJobSiteModal`  
- `EditItemModal`  
- `JobSitesPage`  
- `InventoryPage`  
- `JobStats`  
- `CreateButton`  
- `SaveButton`  
- `CancelButton`  
- `GoBackButton`

---

## 📌 Technical Questions

### 1. How might you make this app more secure?

- Sanitize user input on the frontend before submitting.
- Add server-side validation and authentication.
- Use HTTPS and protect against XSS/CSRF vulnerabilities.

### 2. How would you make this solution scale to millions of records?

- Implement pagination or infinite scroll for large datasets.
- Optimize rendering with virtualization (e.g., react-window).
- Fetch data from paginated APIs and cache where possible.