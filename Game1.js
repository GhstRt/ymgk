import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Animated,
  Alert,
} from 'react-native';
import MummySvg from './assets/extended_may_1_10.svg'; // SVG dosyasını içe aktar

const { width } = Dimensions.get('window');

export default function Game1() {
  const pharaohs = [
    { name: 'Tutankhamun', reign: '1334-1325 MÖ', start: 1332, end: 1323 },
    { name: 'Ay', reign: '1325-1321 MÖ', start: 1279, end: 1213 },
    { name: 'Horemheb', reign: '1321-1295 MÖ', start: 51, end: 30 },
    { name: '1. Ramses', reign: '1295-1294 MÖ', start: 1353, end: 1336 },
    { name: '1. Seti', reign: '1294-1279 MÖ', start: 1479, end: 1458 },
    { name: '2. Ramses', reign: '1279-1213 MÖ', start: 1479, end: 1458 },
  ];

  const sortedPharaohs = [...pharaohs].sort((a, b) => a.start - b.start);

  const questions = [
    { type: 'choice', question: '1- En kısa süre hükümdarlık yapan firavun kimdir?', correctAnswer: '2. Ramses' },
    { type: 'choice', question: '2- En uzun süre hükümdarlık yapan firavun kimdir?', correctAnswer: '1. Ramses' },
    { type: 'text', question: '3- Horemheb kaç yıl hüküm sürmüştür?', correctAnswer: '26' },
    { type: 'text', question: '4- Tutankamun tahta çıktığında 9 yaşındaysa öldüğünde kaç yaşındaydı?', correctAnswer: '9' },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [inputAnswer, setInputAnswer] = useState('');
  const [result, setResult] = useState(null);

  const waveAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(waveAnimation, {
          toValue: 15,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(waveAnimation, {
          toValue: -15,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(waveAnimation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const handleAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.type === 'choice') {
      if (selected === currentQuestion.correctAnswer) {
        setResult('Doğru!');
        goToNextQuestion();
      } else {
        setResult('Yanlış!');
        Alert.alert('Yanlış Cevap', 'Lütfen tekrar deneyin!');
      }
    }

    if (currentQuestion.type === 'text') {
      if (inputAnswer.trim() === currentQuestion.correctAnswer) {
        setResult('Doğru!');
        goToNextQuestion();
      } else {
        setResult('Yanlış!');
        Alert.alert('Yanlış Cevap', 'Lütfen tekrar deneyin!');
      }
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelected(null);
        setInputAnswer('');
        setResult(null);
      }, 1000);
    } else {
      Alert.alert('Tebrikler!', 'Tüm soruları doğru cevapladınız!');
    }
  };

  const renderPharaoh = ({ item, index }) => (
    <View style={styles.timelineItem}>
      {index > 0 && <View style={styles.timelineConnector} />}
      <View style={styles.timelineCircle}>
        <Text style={styles.timelineYear}>{item.reign}</Text>
      </View>
      <Text style={styles.timelineName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Firavun Oyunu</Text>
      {/* Zaman Çizelgesi */}
      <FlatList
        data={sortedPharaohs}
        renderItem={renderPharaoh}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        contentContainerStyle={styles.timeline}
        showsHorizontalScrollIndicator={false}
      />

      {/* Mumya Animasyonu
      <Animated.View
        style={[
          styles.mummyContainer,
          {
            transform: [
              {
                rotate: waveAnimation.interpolate({
                  inputRange: [-15, 0, 15],
                  outputRange: ['-15deg', '0deg', '15deg'],
                }),
              },
            ],
          },
        ]}
      >
        <MummySvg width={200} height={200} />
      </Animated.View>*/}

      {/* Soru */}
      <Text style={styles.questionText}>{questions[currentQuestionIndex].question}</Text>

      {/* Çoktan Seçmeli Sorular */}
      {questions[currentQuestionIndex].type === 'choice' && (
        <View style={styles.options}>
          {sortedPharaohs.map((pharaoh, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionCircle,
                selected === pharaoh.name && styles.optionSelected,
              ]}
              onPress={() => setSelected(pharaoh.name)}
            >
              <Text style={styles.optionText}>{pharaoh.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Metin Soruları */}
      {questions[currentQuestionIndex].type === 'text' && (
        <TextInput
          style={styles.textInput}
          value={inputAnswer}
          onChangeText={setInputAnswer}
          placeholder="Cevabınızı yazın"
          keyboardType="numeric"
        />
      )}

      {/* Cevapla Butonu */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleAnswer}
        disabled={
          questions[currentQuestionIndex].type === 'choice'
            ? !selected
            : !inputAnswer.trim()
        }
      >
        <Text style={styles.submitText}>Cevapla</Text>
      </TouchableOpacity>

      {/* Sonuç */}
      {result && <Text style={styles.result}>{result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fffbe6',
  },
  title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#343a40',
        marginBottom: 20,
        
    },
  timeline: {
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 100,
  },
  timelineItem: {
    alignItems: 'center',
    marginHorizontal: 10,
    position: 'relative',
  },
  timelineCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#d1a374',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  timelineYear: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timelineName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5d4037',
  },
  timelineConnector: {
    position: 'absolute',
    top: 30,
    left: -15,
    width: 30,
    height: 2,
    backgroundColor: '#d1a374',
    zIndex: -1,
  },
  mummyContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#5d4037',
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  optionCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderColor: '#d1a374',
  },
  optionSelected: {
    backgroundColor: '#d1a374',
    borderColor: '#5d4037',
  },
  optionText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5d4037',
  },
  textInput: {
    height: 50,
    borderColor: '#d1a374',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    marginVertical: 20,
  },
  submitButton: {
    backgroundColor: '#d1a374',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  result: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});
