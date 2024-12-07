# If you are using IOS simulator/ Android emulator

Please ensure u go to: Feature > Face ID / Touch ID > Enrolled

Login with Success: Feature > Face ID / Touch ID > Matching Face/Touch

Login with Failed: Feature > Face ID / Touch ID > Non-matching Face/Touch

# Basic Flow

```bash
# using Yarn
### Install All the Package ##
yarn install

## Start Metro ##
yarn start

## Run Android ##
yarn android

## Run iOS ##
yarn pod-install
yarn ios
```

Podfile
pod 'PasscodeAuth', :path => '../node_modules/@el173/react-native-passcode-auth'

Info.plist
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

Android.Manifest
<uses-permission android:name="android.permission.USE_FINGERPRINT" />

Ensure Signing & Capabilities is selected

Edit android/app/build.gradle (NOT android/build.gradle) and add:

apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
