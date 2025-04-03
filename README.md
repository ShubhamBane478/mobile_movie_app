# 🎬 Mobile Movie App

A React Native mobile application for discovering, searching, and tracking trending movies.

![Scan to Preview](https://raw.githubusercontent.com/ShubhamBane478/mobile_movie_app/assets/images/qr-code.png)

## 📱 Features

- Browse popular movies
- Search for movies by title
- View detailed movie information
- Track trending searches
- Save favorite movies

## 🛠️ Technology Stack

- **Frontend**: React Native with Expo
- **API**: TMDB (The Movie Database)
- **Backend**: Appwrite for data storage and user management
- **Navigation**: Expo Router with file-based routing

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI
- Expo Go app (for mobile testing)

### Environment Setup

Create a `.env` file in the root directory with the following variables:

```
EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_appwrite_database_id
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ShubhamBane478/mobile_movie_app.git
   cd mobile_movie_app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npx expo start
   ```

4. Scan the QR code with Expo Go (Android) or the Camera app (iOS) to preview the app on your device.

## 📱 Preview

Scan the QR code below to preview the app on your device using Expo Go:


![Scan to Preview](https://raw.githubusercontent.com/ShubhamBane478/mobile_movie_app/assets/images/qr-code.png)
## 📂 Project Structure

- `app/` - Main application screens with file-based routing
- `components/` - Reusable UI components
- `constants/` - App constants including images and icons
- `services/` - API services and data fetching logic

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [TMDB](https://www.themoviedb.org/) for providing the movie data API
- [Appwrite](https://appwrite.io/) for backend services
- [Expo](https://expo.dev/) for the development framework

````

To make the QR code work, you'll need to:

1. Generate a QR code for your Expo project
2. Save it to your repository at `assets/qr-code.png`
3. Make sure to update the URL in the README to point to your actual repository path

You can generate a QR code using:

```bash
npx expo publish
````
