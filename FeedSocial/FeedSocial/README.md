

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm run web
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

## Comando para iniciar o convex

Digite esse comando no terminal em cmd:

(Primeira vez usando o convex)
```bash
npx i  convex
```

(Toda vez que for utilizá-lo)
```bash
npx convex dev
```


## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## "EXPLICANDO O PROCESSO PARA CRIAR A PÁGINA DE USUÁRIO"

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

# IMAGEM DE BANNER E DE USUÁRIO
<img width="1351" height="65" alt="image" src="https://github.com/user-attachments/assets/513830fc-104c-4bd7-9c97-0ff0f6c5dea3" />
<img width="1899" height="584" alt="image" src="https://github.com/user-attachments/assets/f5cf64fb-df09-4640-bf2e-5ecf0afa1b2e" />

- Para funcionar o ícone de usuário, é necessário importar: "import FontAwesome from 'react-native-vector-icons/FontAwesome';"

# PERFIL DO USUÁRIO

- Esse é o código no user.tsx, para colocar os textos de perfil
 <img width="641" height="82" alt="image" src="https://github.com/user-attachments/assets/f3bdfc2b-df00-4fb3-9889-e32acfd35e6e" />

- Esse é o cógigo no css do user, no user.ts, que está na pasta dos styles
 <img width="357" height="442" alt="image" src="https://github.com/user-attachments/assets/8f62e413-7f6e-46bf-8fb3-a380348b3c54" />

- Esse é o resultado na web
 <img width="1021" height="365" alt="image" src="https://github.com/user-attachments/assets/28eb6d7f-a0e6-4827-a926-bc3a5bcc7cf9" />

# HISTÓRICO DE POSTS LANÇADOS

<img width="1033" height="141" alt="image" src="https://github.com/user-attachments/assets/4a1a9dad-89f2-454b-8137-77717ceea38f" />

- A tag "<ImageBackground>", ao invés de só "Image", foi utilizado para que a imagem fosse o próprio background, e assim, o texto ficar na frente da imagem
- A cor gradient "fade" foi uma cor criada, lá no useTheme, e o processo para criar essa nova cor foi:

  - No "useTheme.tsx"
<img width="265" height="377" alt="image" src="https://github.com/user-attachments/assets/f918700a-f2c6-42de-97d5-b89bea638779" />
<img width="405" height="357" alt="image" src="https://github.com/user-attachments/assets/d31cd618-9069-4731-b2a3-373adb7e37ff" />
<img width="321" height="364" alt="image" src="https://github.com/user-attachments/assets/642cbbb8-367c-4141-a5e9-759b7ee69fd7" />

;

- No CSS, o estilo foi:
<img width="219" height="349" alt="image" src="https://github.com/user-attachments/assets/5e4e250d-1426-444b-84d4-ee1a8da3fea6" />

- E esse foi o resultado:
<img width="715" height="495" alt="image" src="https://github.com/user-attachments/assets/ede98bb3-63b3-4075-a93f-ff61f7c9b3d8" />

- Agora, você pode pilhar esses posts como quiser! Como por exemplo:
<img width="577" height="749" alt="image" src="https://github.com/user-attachments/assets/7b4706c1-abfb-425b-bf2f-ef2a63dd380f" />


  
