import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text, Snackbar, Button } from 'react-native-paper';

const AnimesRoute = () => {
  const [visible, setVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  const showSnackBar = (animeTitle) => {
    setSnackbarMessage(`Você selecionou: ${animeTitle}`);
    setVisible(true);
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Card style={{ marginBottom: 16 }}>
        <Card.Cover
          source={{
            uri: 'https://th.bing.com/th/id/OIP.cx2oOi-jYZJe5mASatCFwgHaEK?w=1280&h=720&rs=1&pid=ImgDetMain',
          }}
        />
        <Card.Title title="Dragon Ball Super" />
        <Button onPress={() => showSnackBar('Dragon Ball Super')}>
          Selecionar
        </Button>
      </Card>

      <Card style={{ marginBottom: 16 }}>
        <Card.Cover
          source={{
            uri: 'https://th.bing.com/th/id/OIP.rKo2milyeidBLjXLWu0YBQHaFj?rs=1&pid=ImgDetMain',
          }}
        />
        <Card.Title title="Darling in The Franxx" />
        <Button onPress={() => showSnackBar('Darling in The Franxx')}>
          Selecionar
        </Button>
      </Card>

      <Card style={{ marginBottom: 16 }}>
        <Card.Cover
          source={{
            uri: 'https://th.bing.com/th/id/OIP.gd9vlOIZb79SdH3oLQEEFAHaKc?w=1200&h=1692&rs=1&pid=ImgDetMain',
          }}
        />
        <Card.Title title="Gimai Seikatsu" />
        <Button onPress={() => showSnackBar('Gimai Seikatsu')}>
          Selecionar
        </Button>
      </Card>

      <Card style={{ marginBottom: 16 }}>
        <Card.Cover
          source={{
            uri: 'https://th.bing.com/th/id/OIP.4q4eAFg9W2Xw83k1yDn2swHaEK?rs=1&pid=ImgDetMain',
          }}
        />
        <Card.Title title="Spy X Family" />
        <Button onPress={() => showSnackBar('Spy X Family')}>Selecionar</Button>
      </Card>

      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={3000}
        action={{
          label: 'Fechar',
          onPress: () => {
            setVisible(false);
          },
        }}>
        {snackbarMessage}
      </Snackbar>
    </ScrollView>
  );
};

export default AnimesRoute;
