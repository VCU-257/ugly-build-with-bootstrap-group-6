# Student Name: Braeden Ferguson

## 1. My Assigned Work

*[Align bullets with your team’s Table 3—replace or edit lines as needed.]*

- **`frontend/src/pages/Home.jsx`** — Home screen layout: listings section with responsive grid of placeholder cards, plus existing placeholder rows for other team components (`CartPopup`, `CheckoutPopup`, `ChangeAdress`).
- **`frontend/src/components/ListingCard.jsx`** — Reusable **ListingCard** component: Bootstrap **card** with image area (**`ratio ratio-4x3`** + **`img`**), **title**, and **description** placeholders for each listing.

## 2. Bootstrap Implementation

*Briefly explain the standard components you used for your assigned areas.*

The homepage listings use **Bootstrap 5** (CSS/JS from the `bootstrap` package in our Vite app). **`ListingCard`** is a **card** with a **`ratio`** wrapper and **`object-fit-cover`** on the **`img`**; **`Home`** places cards in a responsive grid (**`row`**, **`row-cols-*`**, **`col`**, gutters).

[cite_start]*Did you stick to the plan from Table 1?* *[Add your answer after comparing to Table 1.]*

* **Components Used:**
  * **Layout:** **`container`** (via `App.jsx` `main`), **`row`**, **`col`**, **`row-cols-1`**, **`row-cols-md-2`**, **`row-cols-lg-3`**, **`g-4`** / **`g-3`** gutters, **`d-flex`**, **`flex-column`**, **`gap-4`**
  * **Listing UI:** **`card`**, **`card-body`**, **`card-title`**, **`card-text`**, **`h-100`** (equal-height cards in a row)
  * **Media:** **`ratio`**, **`ratio-4x3`**, **`object-fit-cover`** on the listing image


## 3. Technical Challenges & Solutions

[cite_start]*Look back at Table 4: Technical Risks. Did you build any of those risky components? How did you solve the challenge? If you didn't face those specific risks, what was the hardest part of your assigned work?*



- **Risk overlap:** *[If Table 4 listed e.g. “responsive grid” or “shared components,” say whether ListingCard/home fell in that bucket.]*
- **What was hard:** Coordinating a **reusable card** with a **responsive grid** so each card stays **`h-100`** while columns go **1 → 2 → 3** across breakpoints; keeping the **image** inside **`ratio`** so aspect ratio stays consistent.
- **How it was solved:** One **`ListingCard`** component renders the same markup for every cell; **`Home`** maps a fixed count into a **`row`** with **`row-cols-*`** so Bootstrap handles breakpoints without custom CSS. This will change in final iteration where it will pull x amount per page and paginate them so it will be responsive with more listings.

## 4. AI / LLM Usage

*Did you use an AI tool to help write or debug your code?*

* **What I asked the AI:**  how to structure a **Bootstrap card** with a **responsive image** (**`ratio`** + **`object-fit-cover`**).

* **How it helped & What I learned:** It suggested concrete **Bootstrap class names** and patterns (card + ratio + grid row) and pointed out pitfalls (e.g., **empty** placeholder blocks collapsing without content). I walked through the generated JSX in the repo, ran **`vite build`** / **`npm run dev`** to verify, and adjusted copy/structure to match our **team plan** and course requirements so I could explain every class and tag in a review.

## 5. Live Site Link

*Provide the GitHub Pages link to the specific page(s) you built.*

* **Live URL:** [link]https://vcu-257.github.io/ugly-build-with-bootstrap-group-6/
* I worked on the Home page at root '/' and the listing cards that appeard on them, I also assisted in the Navbar global component.

