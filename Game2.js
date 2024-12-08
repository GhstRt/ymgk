import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView,
    Dimensions,
    Image,
} from 'react-native';
//import FastImage from 'react-native-fast-image';

const {width, height} = Dimensions.get('window');

export default function Game2() {
    const [inputValues, setInputValues] = useState({});

    // Şifreleme açıklamaları
    const cipherHints = [
        {letter: 'B', hint: "15'in %60'ı", value: '9'},
        {letter: 'C', hint: "64'ün %25'i", value: '16'},
        {letter: 'Ç', hint: "12'nin %20'si", value: '2,4'},
        {letter: 'E', hint: "50'nin %11'i", value: '5,5'},
        {letter: 'F', hint: "44'ün %75'î", value: '33'},
        {letter: 'H', hint: "96'nın %50'si", value: '48'},
        {letter: 'İ', hint: "30'un %15'i", value: '4,5'},
        {letter: 'M', hint: "25'in %10'u", value: '2,5'},
        {letter: 'N', hint: "70'in %30'u", value: '21'},
        {letter: 'Ö', hint: "10'un %80'i", value: '8'},
        {letter: 'R', hint: "90'ın %40'ı", value: '36'},
        {letter: 'S', hint: "80'in %1'i", value: '0,8'},
        {letter: 'Ş', hint: "35'in %70'i", value: '24,5'},
        {letter: 'T', hint: "60'ın %5'i", value: '3'},
        {letter: 'Ü', hint: "20'nin %21'i", value: '4,2'},
        {letter: 'Z', hint: "45'in %2'si", value: '0,9'},
    ];

    // Alt kısımda kullanılacak sayılar
    const numbers = [
        '2,5',
        '4,2',
        '3',
        '48',
        '4,5',
        '24,5',
        '9',
        '4,5',
        '36',
        '24,5',
        '4,5',
        '33',
        '36',
        '5,5',
        '2,4',
        '8',
        '0,9',
        '4,2',
        '16',
        '4,2',
        '0,8',
        '4,2',
        '21',
    ];

    const handleCheckAnswers = () => {
        let allCorrect = true;

        // Kullanıcının verdiği cevapları kontrol et
        cipherHints.forEach((hint) => {
            if (inputValues[hint.value] !== hint.letter) {
                allCorrect = false;
            }
        });

        if (allCorrect) {
            Alert.alert('Tebrikler!', 'Tüm cevaplar doğru!');
        } else {
            Alert.alert('Hatalı!', 'Bazı cevaplar yanlış. Lütfen tekrar kontrol edin.');
        }
    };

    return (
        <View style={styles.outerContainer}>
            <ScrollView contentContainerStyle={styles.container}>
                {/* Başlık */}
                <Text style={styles.title}>Şifre Çözme Oyunu</Text>

                {/* GIF Görüntüsü */}
                <Image
                    source={require('./assets/cartoon.gif')}
                    style={styles.gifImage}
                />

                {/* Üst Kısım: Şifreleme açıklamaları */}
                <View style={styles.hintsContainer}>
                    <Text style={styles.hintsTitle}>Şifreleme Açıklamaları:</Text>
                    {cipherHints.map((hint, index) => (
                        <View key={index} style={styles.hintBox}>
                            <Text style={styles.hintLetter}>{hint.letter}</Text>
                            <Text style={styles.hintText}>{hint.hint}</Text>
                        </View>
                    ))}
                </View>

                {/* Alt Kısım: Sayılar ve harf kutuları */}
                <View style={styles.numbersContainer}>
                    {numbers.map((number, index) => (
                        <View key={index} style={styles.numberBlock}>
                            <Text style={styles.numberText}>{number}</Text>
                            <TextInput
                                style={styles.inputBox}
                                value={inputValues[number] || ''}
                                onChangeText={(text) =>
                                    setInputValues((prev) => ({
                                        ...prev,
                                        [number]: text.toUpperCase(),
                                    }))
                                }
                                maxLength={1}
                                placeholder="?"
                                placeholderTextColor="#aaa"
                            />
                        </View>
                    ))}
                </View>

                {/* Kontrol Butonu */}
                <TouchableOpacity style={styles.checkButton} onPress={handleCheckAnswers}>
                    <Text style={styles.checkButtonText}>Kontrol Et</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    container: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#343a40',
        marginBottom: 20,
    },
    gifImage: {
        width: width * 0.8,
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
    hintsContainer: {
        marginBottom: 20,
        width: '100%',
    },
    hintsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#495057',
        marginBottom: 10,
    },
    hintBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e9ecef',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        borderColor: '#dee2e6',
        borderWidth: 1,
    },
    hintLetter: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#212529',
        marginRight: 10,
    },
    hintText: {
        fontSize: 16,
        color: '#495057',
    },
    numbersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: 20,
        width: '100%',
    },
    numberBlock: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 15,
    },
    numberText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6c757d',
        marginBottom: 5,
    },
    inputBox: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: '#6c757d',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 18,
        color: '#495057',
        backgroundColor: '#fff',
        elevation: 2, // Gölge efekti
    },
    checkButton: {
        backgroundColor: '#343a40',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '60%',
    },
    checkButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
