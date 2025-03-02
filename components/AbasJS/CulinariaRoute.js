import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { RadioButton, Card, TextInput, Button } from 'react-native-paper';

const CulinariaRoute = () => {
  const [selectedValue, setSelectedValue] = useState('comida1');
  const [text, setText] = useState("");

  const handleSubmit = () => {
    console.log("Comida escolhida:", selectedValue);
    console.log("Texto digitado:", text);
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Card>
        <Card.Title title="Escolha uma comida:" />
        <Card.Content>
          <RadioButton.Group
            onValueChange={(newValue) => setSelectedValue(newValue)}
            value={selectedValue}
          >
            <View style={styles.radioButtonContainer}>
              <RadioButton.Item label="Missô" value="comida1" />
              <Image
                source={{ uri: 'https://th.bing.com/th/id/R.42955d0310a608f11e84e99b95a449ad?rik=a2D1Z2PAKkGQng&pid=ImgRaw&r=0' }}
                style={styles.image}
              />
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton.Item label="Kami" value="comida2" />
              <Image
                source={{ uri: 'https://th.bing.com/th/id/OIP.NX0WATHq16HGFFwVMr5bQAHaEx?rs=1&pid=ImgDetMain' }}
                style={styles.image}
              />
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton.Item label="Sashimi" value="comida3" />
              <Image
                source={{ uri: 'https://th.bing.com/th/id/R.c0ace9d2066db997b21b92d8734af86d?rik=GwxWGE28uvTckA&pid=ImgRaw&r=0' }}
                style={styles.image}
              />
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton.Item label="Onigiri" value="comida4" />
              <Image
                source={{
                  uri: 'https://1.bp.blogspot.com/-sznzTMv4K7o/YBDb_J8MBqI/AAAAAAAAAV4/nccNVoLEEgg1nIKds8VE1BArqu5MyApsgCPcBGAYYCw/s16000/IMG_9490_polarr.jpg',
                }}
                style={styles.image}
              />
            </View>
          </RadioButton.Group>
        </Card.Content>
      </Card>

      <TextInput
        label="Comida"
        value={text}
        onChangeText={text => setText(text)}
        style={styles.textInput}
      />


      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.submitButton}
      >
        Enviar
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  image: {
    width: 50, 
    height: 50,
    marginLeft: 10,
  },
  textInput: {
    marginTop: 16, 
  },
  submitButton: {
    marginTop: 20,
  },
});

export default CulinariaRoute;
