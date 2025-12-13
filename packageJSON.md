{
"name": "@begenone/pkgm-settings",
"version": "1.0.0",
"private": true,
"main": "dist/index.js",
"scripts": {
"build": "babel src --out-dir dist --extensions .js,.jsx"
},
"peerDependencies": {
"@expo/vector-icons": "_",
"react": "_",
"react-native": "_"
},
"dependencies": {
"@begenone/pkgm-shared": "workspace:_",
"expo-image-picker": "^17.0.8",
"expo-video-thumbnails": "^10.0.7",
"install": "^0.13.0"
},
"devDependencies": {
"@babel/cli": "^7.28.3",
"@babel/core": "^7.28.5",
"@babel/preset-env": "^7.28.5",
"metro-react-native-babel-preset": "^0.77.0"
}
}
