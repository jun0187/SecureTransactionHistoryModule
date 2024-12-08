# Basic Flow

```bash
# using Yarn
### Install All the Package ##
yarn install

## Run iOS ##
yarn pod-install
yarn ios

## Run Android ##
yarn android

## Start Metro ##
yarn start
```

### If you are using IOS simulator > Please ensure u go to: Feature > Face ID / Touch ID > Enrolled

Login with Success: Feature > Face ID / Touch ID > Matching Face/Touch
Login with Failed: Feature > Face ID / Touch ID > Non-matching Face/Touch

### If you are using Android emulator > Please enable your fingerprint at phone settings

Login with Success: Select the VALID fingerprint that u have set in the settings
Login with Failed: Select the INVALID fingerprint that u have set in the settings

## ISSUE

If you're having error while install, will recommend you to delete /ios and /android folder and recreate back with following cmd

```bash
## Install eject module ##
npm i react-native-eject

## Run eject command ##
npx react-native eject
```

## FOR ANDROID

File path: android/app/src/main/AndroidManifest.xml
<uses-permission android:name="android.permission.USE_FINGERPRINT" />

File path: android/app/build.gradle (NOT android/build.gradle):
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")

## FOR IOS

In case it's not included in running pod-install, we can manually add in to the file
File path: /ios/Podfile
pod 'PasscodeAuth', :path => '../node_modules/@el173/react-native-passcode-auth'
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'

File path: /ios/TransactionHistoryModule/Info.plist
<key>UIAppFonts</key>
<array>
<string>AntDesign.ttf</string>
<string>Entypo.ttf</string>
<string>EvilIcons.ttf</string>
<string>Feather.ttf</string>
<string>FontAwesome.ttf</string>
<string>FontAwesome5_Brands.ttf</string>
<string>FontAwesome5_Regular.ttf</string>
<string>FontAwesome5_Solid.ttf</string>
<string>FontAwesome6_Brands.ttf</string>
<string>FontAwesome6_Regular.ttf</string>
<string>FontAwesome6_Solid.ttf</string>
<string>Fontisto.ttf</string>
<string>Foundation.ttf</string>
<string>Ionicons.ttf</string>
<string>MaterialCommunityIcons.ttf</string>
<string>MaterialIcons.ttf</string>
<string>Octicons.ttf</string>
<string>SimpleLineIcons.ttf</string>
<string>Zocial.ttf</string>
</array>
<key>NSFaceIDUsageDescription</key>
<string>App requesting face id usage</string>

Also, please ensure Signing & Capabilities is selected

Other ISSUE for IOS

1. PhaseScriptExecution [CP-User]\ [Hermes]\ Replace\ Hermes\ for\ the\ right\ configuration,\ if\ needed /Users/junwong/Library/Developer/Xcode/DerivedData/TransactionHistoryModule-

Kindly go to ios/.xcode.env.local and update your NODE_BINARY to the correct path
eg:
export NODE_BINARY=/Users/{laptop_username}/.nvm/versions/node/{node_version}/bin/node
or u can run in your terminal to know the path

```bash
command -v node
```

OR just remove directly

```bash
rm ./ios/.xcode.env.local
```

2. Icon show as Question Mark
   Add in the fonts folder under ios/ (may refer back in GitHub under /ios/fonts)

AND

Xcode > TransactionHistoryModule > Build Phases > Copy Bundle Resources > Click on '+' > add in the fonts folder

### If there is still any issue, do reach me out!
