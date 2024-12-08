# **Teknik Tasarım: Firavunlar ve Şifre Çözme Oyunları**

---

## **1. Giriş**

Bu doküman, "Firavunlar ve Şifre Çözme Oyunları" projesinin teknik tasarımını detaylandırır. Projede kullanılan teknolojiler, sistem mimarisi, modüler yapı ve veri akışı hakkında bilgi verir.

---

## **2. Teknoloji Yığını**

| **Kategori**         | **Teknoloji**           | **Açıklama**                                                |
|-----------------------|-------------------------|------------------------------------------------------------|
| **Mobil Framework**   | React Native           | Platform bağımsız mobil oyun geliştirme.                   |
| **Animasyonlar**      | Expo Animated API      | Dalga animasyonları ve oyun içi geçişler için.             |
| **Veri Depolama**     | Firebase               | Kullanıcı skorlarının ve oyun ilerlemesinin saklanması.    |
| **Görüntü İşleme**    | React Native Canvas    | Şifre çözme oyunu için dinamik çizim işlemleri.            |
| **Durum Yönetimi**    | Redux                  | Oyun durumlarının yönetimi ve global veri akışı.           |
| **API İletişimi**     | RESTful API            | Firebase veya diğer servislerle veri alışverişi.           |

---

## **3. Sistem Mimarisi**

### **3.1 Genel Mimari**

1. **Kullanıcı Arayüzü (UI):**
   - Kullanıcı dostu ve sezgisel bir tasarım sunar.
   - Zaman çizelgesi, çoktan seçmeli sorular ve dinamik şifre çözme ekranları içerir.

2. **İş Mantığı (Business Logic):**
   - Redux kullanılarak oyun içi durumlar (örn. doğru cevaplar, skorlar) yönetilir.
   - Oyun kuralları ve doğrulama mekanizmaları burada uygulanır.

3. **Veri Katmanı:**
   - Firebase ile gerçek zamanlı veri saklama ve geri çağırma.
   - Kullanıcı skorlarının saklanması ve sıralanması.

### **3.2 Modüler Yapı**

| **Modül**               | **Açıklama**                                                |
|--------------------------|------------------------------------------------------------|
| **Oyun-1 (Firavunlar Quiz)** | Firavunlar hakkındaki sorular ve zaman çizelgesi.         |
| **Oyun-2 (Şifre Çözme)**    | Matematiksel ipuçları çözerek şifre oluşturma ve eşleştirme. |
| **Giriş ve Skor Modülü**    | Kullanıcıların skorlarını görüntüleme ve sıralama ekranı.  |
| **Ortak Bileşenler**        | Button, InputField, Timer gibi tekrar kullanılabilir bileşenler. |

---

## **4. Veri Akışı**

1. **Oyun Başlatıldığında:**
   - Kullanıcı Firebase'den oyun geçmişi ve skor bilgilerini çeker.
   - Redux store'da ilk değerler atanır.

2. **Oyun Esnasında:**
   - Kullanıcı girdileri doğrulanır ve animasyonlar tetiklenir.
   - Skorlar ve oyun ilerlemesi geçici olarak Redux'ta saklanır.

3. **Oyun Sonlandığında:**
   - Final skor Firebase'e kaydedilir.
   - Sıralama ekranında güncellenmiş veriler gösterilir.

---

## **5. Performans Optimizasyonu**

| **Alan**              | **Optimizasyon Teknikleri**                                  |
|-----------------------|------------------------------------------------------------|
| **Animasyonlar**      | Expo Animated API ile düşük CPU kullanımı.                  |
| **Veri İletişimi**    | Firebase sorgularında yalnızca gerekli alanların çekilmesi. |
| **Durum Yönetimi**    | Redux'ta yalnızca gerekli bileşenlerin yeniden render edilmesi. |
| **Cihaz Uyumluluğu**  | Düşük donanımlı cihazlar için grafik optimizasyonları.      |

---

## **6. Teknik Çizimler**

### **6.1 Kullanıcı Akışı Diyagramı**
Kullanıcının oyun içindeki yolculuğunu gösterir:
- Ana menü → Oyun seçimi.
- Soruları cevaplama veya şifre çözme.
- Skor ekranı ve sıralama.

### **6.2 Bileşen Diyagramı**
Ana bileşenler:
- **QuizComponent**  
- **CipherSolver**  
- **Timeline**  
- **ScoreBoard**  

---

## **7. Gelecek Geliştirmeler**

| **Özellik**           | **Açıklama**                                                      |
|-----------------------|------------------------------------------------------------------|
| **Çoklu Dil Desteği** | Oyunların farklı dillere çevrilmesi.                            |
| **Online Skor Sıralaması** | Gerçek zamanlı kullanıcı sıralamaları için API entegrasyonu.      |
| **Yeni Oyun Modları** | Ek oyun modlarının geliştirilmesi.                              |
