# 👑 SPICE KINGS - Authentic Telugu Heritage Pickles

A modern, responsive React web application for premium Telugu pickles with Google Authentication and beautiful UI.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🛠️ Tech Stack

- **Frontend**: React 18, Material-UI (MUI)
- **Authentication**: Firebase Auth (Google OAuth)
- **Database**: Firebase Realtime Database  
- **Styling**: Material-UI with custom themes
- **Icons**: Material-UI Icons

## 📁 Project Structure

```
src/
├── components/
│   ├── Firebase.js          # Firebase config & auth context
│   ├── Hero/
│   │   └── Hero.js           # Main hero banner component
│   ├── Navbar/
│   │   └── Navbar.js         # Navigation with auth
│   └── Products/
│       └── Products.js       # Product catalog
├── pages/
│   └── Home/
│       └── Home.js           # Home page layout
├── App.js                   # Main app component
└── index.js                # App entry point
```

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project
2. Enable Authentication (Google provider)
3. Enable Realtime Database
4. Update Firebase config in `src/components/Firebase.js`

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-domain.firebaseapp.com",
  databaseURL: "your-database-url",
  projectId: "your-project-id",
  storageBucket: "your-bucket.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

## 🎨 Features

- ✅ **Responsive Design** - Works on all devices
- ✅ **Google Authentication** - Secure user login
- ✅ **Product Catalog** - Beautiful product cards with ratings
- ✅ **Shopping Cart** - Add/remove items functionality
- ✅ **Wishlist** - Save favorite products
- ✅ **Crown Logo** - Clean royal branding
- ✅ **Telugu Heritage** - Authentic cultural design
- ✅ **PWA Ready** - Progressive web app capabilities

## 🌶️ Brand Colors

- **Primary Orange**: `#FF6B35`
- **Gold**: `#FFD700` 
- **Dark Brown**: `#3E2723`
- **Medium Brown**: `#654321`

## 📱 Deployment

### Build & Deploy
```bash
# Create production build
npm run build

# Deploy to Firebase Hosting
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Environment Variables
No environment variables needed - all Firebase config is in the code.

## 🔥 Development Tips

1. **Hot Reload**: Changes auto-refresh during development
2. **Material-UI**: Use MUI components for consistency
3. **Firebase**: All data syncs in real-time
4. **Icons**: Use Material-UI icons for best performance
5. **Responsive**: Test on mobile devices frequently

## 🛡️ Security

- Firebase Security Rules configured
- Google OAuth for secure authentication
- No sensitive data in frontend code
- HTTPS enforced in production

## 📈 Performance

- Optimized bundle size (removed unused dependencies)
- Lazy loading ready
- PWA optimization for mobile
- Google Fonts preloaded

---

**Built with ❤️ for Telugu pickle lovers everywhere! 🌶️👑**
