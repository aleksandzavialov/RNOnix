# React native boilerplate

## Features

- react-navigation
- i18next
- react-native-bootsplash
- react-redux
- redux-thunk
- eslint airbnb
- husky
- jest

## Installation and run

Read [Setting up the development environment](https://nodejs.org/) for your OS.

**For run android**

```sh
npx react-native run-android
```

**For run ios**

```sh
cd ios
pod install
cd ../
npx react-native run-ios
```

## Issues

**./gradlew EACCES error when running**
```sh
chmod 755 android/gradlew (sudo chmod 755 android/gradlew)
```
