# @wereform/pkgm-settings

Settings and management layouts for users, channels, and content in the WeReform / BEGENONE platform.

This package provides structured React Native layouts for user settings, channel settings, general settings overview, and video upload flows. It focuses purely on UI and state orchestration, leaving data persistence and business logic to the consuming app.

---

## Install

```bash
npm install @wereform/pkgm-settings
# or
yarn add @wereform/pkgm-settings
# or
pnpm add @wereform/pkgm-settings
```

---

## What this package gives you

- Settings layouts for:

  - User profile and account settings
  - Channel creation and channel management
  - General settings overview and shortcuts
  - Video upload and publishing flow

- Built with:

  - React Native / Expo
  - Shared UI primitives from `@wereform/pkgm-shared`
  - Mobile-first interaction patterns

- Designed to be:

  - UI-only
  - Fully controlled via props and callbacks
  - Easy to integrate with existing API layers

---

## Exports

From `@wereform/pkgm-settings` you can import:

```ts
import {
  ChannelSettingsLayout,
  UserSettingsLayout,
  GeneralSettingsOverviewLayout,
  VideoUploadSettingsLayout,
} from "@wereform/pkgm-settings";
```

---

## Layouts

## ChannelSettingsLayout

UI for creating or updating a channel. Handles name, username, and about fields, and exposes callbacks for save, create, or delete actions.

### Props

```ts
ChannelSettingsLayout({
  userName,
  profilePic,
  onPressUserSettingsText,
  handleChannelUpdateCreate,
  channelExist,
});
```

- `userName` Channel display name
- `profilePic` Channel profile image URL
- `onPressUserSettingsText` Callback to navigate to user settings
- `handleChannelUpdateCreate` Handler called with `{ name, username, about }`
- `channelExist` Boolean to toggle Create vs Save/Delete behavior

---

## UserSettingsLayout

Layout for updating user profile information and signing out.

### Props

```ts
UserSettingsLayout({
  userName,
  profilePic,
  onPressChannelSettingsText,
  onPressUserSignoutFunction,
  onPressUserUpdateDetailsFunction,
});
```

- `userName` User display name
- `profilePic` User profile image URL
- `onPressChannelSettingsText` Navigate to channel settings
- `onPressUserSignoutFunction` Logout handler
- `onPressUserUpdateDetailsFunction` Called with updated form data

---

## GeneralSettingsOverviewLayout

High-level overview screen combining recent history and quick access to settings sections.

### Props

```ts
GeneralSettingsOverviewLayout({
  timeAgo,
  viewsText,
  titleText,
  userNameText,
  contentThumbUrl,
  channelLogo,
  onPressUserSettings,
  onPressChannelSettings,
  onPressPricings,
});
```

- Renders a horizontal history section
- Provides quick navigation buttons for:

  - Likes / Dislikes
  - User Settings
  - Channel Settings
  - Pricings

---

## VideoUploadSettingsLayout

UI for uploading and publishing videos with thumbnail generation support.

### Props

```ts
VideoUploadSettingsLayout({
  profilePic,
  userName,
  onPressWireUploadScreen,
  onPressVideoUploadAsync,
});
```

- Supports video picking via device library
- Generates thumbnails using `expo-video-thumbnails`
- Handles platform differences between iOS and Android
- Returns structured upload payload via callback

---

## Typical usage

```ts
<ChannelSettingsLayout
  userName="WeReform"
  channelExist={true}
  handleChannelUpdateCreate={handleSave}
/>

<UserSettingsLayout
  userName="Areesh"
  onPressUserSignoutFunction={logout}
/>

<VideoUploadSettingsLayout
  userName="Areesh"
  onPressVideoUploadAsync={uploadVideo}
/>
```

---

## Design philosophy

- No API calls inside the package
- No navigation assumptions
- State is local and ephemeral
- All side effects are delegated to parent app
- Optimized for reuse across multiple screens

---

## License

MIT License

Copyright (c) 2025 WeReform / BEGENONE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
