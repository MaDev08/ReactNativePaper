import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Switch, Checkbox, ProgressBar, Tooltip, IconButton, Divider, HelperText, TextInput } from 'react-native-paper';

const CulturaRoute = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const toggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [responses, setResponses] = useState({
    question1: null,
    question2: null,
    question3: null,
  });

  const [progressVisible, setProgressVisible] = useState(false);
  const [checkboxDisabled, setCheckboxDisabled] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null); // To track if the user's answer is correct

  const toggleResponse = (question, response) => {
    setResponses({ ...responses, [question]: response });
    setProgressVisible(true);
    setCheckboxDisabled(true);

    setTimeout(() => {
      setProgressVisible(false);
      setCheckboxDisabled(false);

      if (Object.values(responses).every((resp) => resp !== null)) {
        setTooltipVisible(true); 
      }
    }, 1000);
  };

  const handleInfoButtonPress = () => {
    setInfoVisible(!infoVisible);
  };

  const handleAnswerCheck = () => {
    if (userAnswer.toLowerCase() === 'fofo') {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cultura Japonesa</Text>
        <IconButton
          icon="information"
          size={24}
          onPress={handleInfoButtonPress}
        />
      </View>

      {infoVisible && (
        <Text style={styles.infoText}>
          A cultura japonesa é rica e diversa, com tradições que vão desde a cerimônia do chá até festivais vibrantes. O Japão é famoso por sua culinária, artes e arquitetura (Lembra de dar MB professor kkkk).
        </Text>
      )}

      <Switch
        value={isSwitchOn}
        onValueChange={toggleSwitch}
      />
      <Text style={styles.switchText}>
        {isSwitchOn ? 'Você está explorando a cultura japonesa! Responda umas perguntas:' : 'Desligado: Aprenda mais sobre o Japão!'}
      </Text>

      {isSwitchOn && (
        <>
          <View style={styles.questionsContainer}>
            <Text style={styles.question}>Você gosta de sushi?</Text>
            <Checkbox.Item
              label="Sim"
              status={responses.question1 === 'sim' ? 'checked' : 'unchecked'}
              onPress={() => toggleResponse('question1', 'sim')}
              disabled={checkboxDisabled}
            />
            <Checkbox.Item
              label="Não"
              status={responses.question1 === 'nao' ? 'checked' : 'unchecked'}
              onPress={() => toggleResponse('question1', 'nao')}
              disabled={checkboxDisabled}
            />
          </View>
          <Divider style={styles.divider} />

          <View style={styles.questionsContainer}>
            <Text style={styles.question}>Você já assistiu animes?</Text>
            <Checkbox.Item
              label="Sim"
              status={responses.question2 === 'sim' ? 'checked' : 'unchecked'}
              onPress={() => toggleResponse('question2', 'sim')}
              disabled={checkboxDisabled}
            />
            <Checkbox.Item
              label="Não"
              status={responses.question2 === 'nao' ? 'checked' : 'unchecked'}
              onPress={() => toggleResponse('question2', 'nao')}
              disabled={checkboxDisabled}
            />
          </View>
          <Divider style={styles.divider} />

          <View style={styles.questionsContainer}>
            <Text style={styles.question}>Você conhece festivais japoneses?</Text>
            <Checkbox.Item
              label="Sim"
              status={responses.question3 === 'sim' ? 'checked' : 'unchecked'}
              onPress={() => toggleResponse('question3', 'sim')}
              disabled={checkboxDisabled}
            />
            <Checkbox.Item
              label="Não"
              status={responses.question3 === 'nao' ? 'checked' : 'unchecked'}
              onPress={() => toggleResponse('question3', 'nao')}
              disabled={checkboxDisabled}
            />
          </View>
          <Divider style={styles.divider} />
          
          {/* HelperText para a frase japonesa */}
          <View style={styles.helperContainer}>
            <Text style={styles.helperText}>
              O que significa a palavra japonesa "Kawaii" (かわいい)?
            </Text>
            <TextInput
              label="Digite sua resposta"
              value={userAnswer}
              onChangeText={setUserAnswer}
              style={styles.input}
              onSubmitEditing={handleAnswerCheck}
            />
            {isAnswerCorrect === true && (
              <HelperText type="success">Correto! "Kawaii" significa "fofo".</HelperText>
            )}
            {isAnswerCorrect === false && (
              <HelperText type="error">Incorreto. Tente novamente!</HelperText>
            )}
          </View>
        </>
      )}

      {progressVisible && <ProgressBar indeterminate={true} style={styles.progressBar} />}

      {tooltipVisible && (
        <Tooltip
          visible={tooltipVisible}
          onDismiss={() => setTooltipVisible(false)}
          style={styles.tooltip}
        >
          Obrigado por responder as perguntas!
        </Tooltip>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  switchText: {
    marginTop: 20,
  },
  questionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  question: {
    flex: 1,
  },
  divider: {
    marginVertical: 10,
  },
  progressBar: {
    marginTop: 20,
  },
  tooltip: {
    position: 'absolute',
    bottom: 100,
    left: 20,
  },
  infoText: {
    marginVertical: 10,
    color: '#555',
  },
  helperContainer: {
    marginTop: 20,
  },
  helperText: {
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
});

export default CulturaRoute;
