# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

"EXPLICANDO O PROCESSO PARA CRIAR A PÁGINA DE USUÁRIO"

- Para criar essa página, é necessário criar um arquivo com o nome "user.tsx" dentro da pasta "(tabs)", sendo essa pasta inserida na pasta "app"
<img width="169" height="107" alt="image" src="https://github.com/user-attachments/assets/d599be1e-059c-4309-8a0e-f8ed7b229461" />

- Logo após isso, criei o arquivo "user.styles.ts" para que eu pudesse mexer no front-end da página

- Voltando ao arquivo ".tsx", importei as seguintes tags que irei utilizar ao decorrer do código:

import { createUserStyles } from '@/assets/styles/user.styles';
import useTheme from '@/hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from 'react-native-safe-area-context';

- Digitei essas "constantes" para poder utilizar os recursos de css de outros arquivos já criados:

const user = () => {
const { toggleDarkMode, colors } = useTheme();
const userStyles = createUserStyles(colors);

- Digitando "return ()", abri a tag "<><LienarGradient>" como o "pai" de toda a página, puxando antes de fechar a tag(">") o arquivo do css que eu irei utilizar para estilizar o pojeto, usando: "style={userStyles.container}" e "colors={colors.gradients.primary}". Esse último foi para definir a cor de fundo da página de usuário, sendo o "primary" as cores pré-definidas no arquivo "useTheme".

-
<img width="1351" height="65" alt="image" src="https://github.com/user-attachments/assets/513830fc-104c-4bd7-9c97-0ff0f6c5dea3" />
<img width="1899" height="584" alt="image" src="https://github.com/user-attachments/assets/f5cf64fb-df09-4640-bf2e-5ecf0afa1b2e" />


  
