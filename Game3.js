import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Button, Alert, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

const Game3 = () => {
  const [showIntro, setShowIntro] = useState(true);

  const leftImages = [
    { id: 1, source: require('./assets/Yarımarus.png'), name: 'Yarımarus' },
    { id: 2, source: require('./assets/Üçarus.png'), name: 'Üçarus' },
    { id: 3, source: require('./assets/Altarus.png'), name: 'Altarus' },
  ];

  const rightImages = [
    { id: 1, source: require('./assets/kek.png'), name: 'Kek' },
    { id: 2, source: require('./assets/cikolata.png'), name: 'Çikolata' },
    { id: 3, source: require('./assets/turta.png'), name: 'Turta' },
    { id: 4, source: require('./assets/cikolata.png'), name: 'Çikolata' },
    { id: 5, source: require('./assets/turta.png'), name: 'Turta' },
    { id: 6, source: require('./assets/kek.png'), name: 'Kek' },
  ];

  const [matches, setMatches] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState(null);

  const handleLeftSelect = (leftId) => {
    setSelectedLeft(leftId);
  };

  const handleRightSelect = (rightId) => {
    if (selectedLeft !== null) {
      setMatches((prev) => [...prev, { leftId: selectedLeft, rightId }]);
      setSelectedLeft(null);
    }
  };

  const checkMatches = () => {
    const correctMatches = [
      { leftId: 1, rightId: 1 },
      { leftId: 1, rightId: 6 },
      { leftId: 2, rightId: 2 },
      { leftId: 2, rightId: 4 },
      { leftId: 3, rightId: 5 },
      { leftId: 3, rightId: 3 },
    ];

    const isCorrect = matches.every(
      (match) =>
        correctMatches.some(
          (correct) =>
            correct.leftId === match.leftId && correct.rightId === match.rightId
        )
    );

    if (isCorrect && matches.length === correctMatches.length) {
      Alert.alert('Tebrikler!', 'Tüm eşleştirmeler doğru.');
    } else {
      Alert.alert('Hata!', 'Bazı eşleştirmeler yanlış.');
    }
  };

  const resetMatches = () => {
    setMatches([]);
    setSelectedLeft(null);
    Alert.alert('Sıfırlandı', 'Tüm eşleştirmeler sıfırlandı.');
  };

  const getRightMatchNumber = (rightId) => {
    const match = matches.find((m) => m.rightId === rightId);
    return match ? match.leftId : null;
  };

  if (showIntro) {
    return (
      <View style={styles.introContainer}>
        <Text style={styles.title}>Karakter - Yemek Eşleştirme Oyunu</Text>
        <Text style={styles.description}>
          Oyunda, aşağıdaki karakterlerin en sevdiği yemekleri bulmalısın.
        </Text>

        <View style={styles.matchInfo}>
          {leftImages.map((left) => (
            <View key={left.id} style={styles.matchRow}>
              <Image source={left.source} style={styles.smallImage} />
              <Text style={styles.matchText}>➡</Text>
              <Text style={styles.foodText}>
                {rightImages
                  .filter((right) =>
                    [
                      { leftId: 1, rightId: 1 },
                      { leftId: 2, rightId: 2 },
                      { leftId: 3, rightId: 5 }
                    ].some(
                      (match) =>
                        match.leftId === left.id && match.rightId === right.id
                    )
                  )
                  .map((right) => right.name)
                  .join(' & ')}
              </Text>
            </View>
          ))}
        </View>

        <Button title="Oyuna Başla" onPress={() => setShowIntro(false)} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {leftImages.map((image) => (
          <TouchableOpacity key={image.id} onPress={() => handleLeftSelect(image.id)}>
            <Image source={image.source} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.rightContainer}>
        {rightImages.map((image) => (
          <View key={image.id} style={styles.rightItem}>
            <TouchableOpacity onPress={() => handleRightSelect(image.id)}>
              <Image source={image.source} style={styles.rightImage} />
            </TouchableOpacity>
            <Text style={styles.matchText}>{getRightMatchNumber(image.id)}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title="Sıfırla" color="red" onPress={resetMatches} />
        <Button title="Eşleştirmeleri Kontrol Et" onPress={checkMatches} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  introContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  matchInfo: {
    marginBottom: 30,
  },
  matchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  smallImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  matchText: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  foodText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  rightContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  rightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 120,
    height: 120,
    margin: 10,
    resizeMode: 'contain',
  },
  rightImage: {
    width: 80,
    height: 80,
    margin: 10,
    resizeMode: 'contain',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Game3;
