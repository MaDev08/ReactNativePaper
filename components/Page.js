import * as React from 'react';
import { BottomNavigation, Text, Appbar, Banner } from 'react-native-paper';
import { Image, StyleSheet, View } from 'react-native';
import {
  AnimesRoute,
  CulinariaRoute,
  CulturaRoute,
  CidadesRoute,
} from './index';

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [routes] = React.useState([
    {
      key: 'animes',
      title: 'Animes',
      icon: () => (
        <Image
          source={require('./Images/animeIcon.PNG')}
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      key: 'culinaria',
      title: 'Culinária',
      icon: () => (
        <Image
          source={require('./Images/culinariaIcon.PNG')}
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      key: 'cultura',
      title: 'Cultura',
      icon: () => (
        <Image
          source={require('./Images/culturaIcon.PNG')}
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      key: 'cidades',
      title: 'Cidades',
      icon: () => (
        <Image
          source={require('./Images/cidadeIcon.PNG')}
          style={{ width: 24, height: 24 }}
        />
      ),
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    animes: AnimesRoute,
    culinaria: CulinariaRoute,
    cultura: CulturaRoute,
    cidades: CidadesRoute,
  });

  return (
    <React.Fragment>
      <Appbar.Header>
        <Appbar.Content title="App de Animes" />
      </Appbar.Header>

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />

      {/* Banner needs to be inside the Fragment */}
      <Banner
        visible={visible}
        actions={[
          {
            label: 'Continuar',
            onPress: () => setVisible(false),
          },
        ]}
        icon={({ size }) => (
          <Image
            source={{
              uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/69c45ffb-91ee-4c00-ac55-038a9c00ecf1/d5wpixt-f35f60a2-58cd-4dd2-8361-70501ef73b83.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5YzQ1ZmZiLTkxZWUtNGMwMC1hYzU1LTAzOGE5YzAwZWNmMVwvZDV3cGl4dC1mMzVmNjBhMi01OGNkLTRkZDItODM2MS03MDUwMWVmNzNiODMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FjMr5qCZqzPiMG8TjUyYWB8GZxv4bwAli3dBfFfEo7Y',
            }}
            style={{
              width: size,
              height: size,
            }}
          />
        )}>
        Seja bem-vindo ao nosso prótipo de implementação dos componentes do React Native Paper!!! 
      </Banner>
    </React.Fragment>
  );
}
