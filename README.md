## ✨ Description
This PR implements course listing, video playback, purchase flow, user authentication with validation, and theming.

---

## ✅ Features

- [x] **CourseList component**
  - Fetch courses from **mockapi (GET /courses)** or props
  - Each course: `id`, `title`, `description`, `videoUrl`, `price`
  - Display as cards with **"Buy"** button
  - **Hover effect:** auto-play preview video (15s)

- [x] **Video Player**
  - Open modal/inline player on course click
  - HTML5 `<video>` with `videoUrl` (HLS/MP4)

- [x] **Mock Payment**
  - `handlePurchase(courseId)` function (returns success/error)
  - Purchased courses stored in **Redux state**

- [x] **State Management**
  - Implemented with **Redux Toolkit**
  - Stores purchased courses and current playing video

- [x] **Authentication**
  - Registration / Login form (Email + Password)
  - User stored in **localStorage**
  - Logout clears localStorage

- [x] **Validation**
  - Email must be valid
  - Password requirements:
    - min 6 characters
    - 1 uppercase, 1 lowercase, 1 special character

- [x] **UI/UX**
  - Added **light & dark theme**
  - Hover animations on course cards

---

## 🛠 Tech Stack
- React + Vite  
- Zustand
- mockapi.io (courses data)  
- HTML5
- Tailwind
