# **Firavunlar ve Şifre Çözme Oyunları Gereksinimler Dokümanı**

---

## **1. Proje Tanımı**

Bu doküman, "Firavunlar ve Şifre Çözme Oyunları" projesinin fonksiyonel ve teknik gereksinimlerini tanımlar. Projenin kapsamı, kullanıcı ihtiyaçlarını ve teknik gereklilikleri içerir.

---

## **2. Kullanıcı Gereksinimleri**

| **Gereksinim**          | **Açıklama**                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| **Eğitici İçerik**       | Oyunların eğlenceli ve öğretici olması. Kullanıcıların tarih ve matematik bilgilerini geliştirmesi. |
| **Kolay Kullanılabilirlik** | Kullanıcı arayüzünün sezgisel ve kolay anlaşılır olması.                     |
| **Çoklu Platform Desteği** | Oyunların hem Android hem de iOS cihazlarda sorunsuz çalışması.             |
| **Hızlı Performans**     | Oyunların düşük donanımlı cihazlarda bile akıcı çalışması.                   |
| **Oyun İçi Geri Bildirim** | Kullanıcıların doğru veya yanlış cevaplar için anında geri bildirim alması. |

---

## **3. Fonksiyonel Gereksinimler**

### **3.1 Firavunlar Tarihi Quiz Oyunu**

| **Fonksiyonel Gereksinim** | **Açıklama**                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| **Soru-Cevap Sistemi**      | Çoktan seçmeli ve metin tabanlı soruların sunulması.                        |
| **Zaman Çizelgesi**         | Firavunların hükümdarlık dönemlerini görsel olarak sergileme.               |
| **Animasyonlu Etkileşim**   | Sezgisel animasyonlarla kullanıcı deneyiminin geliştirilmesi.               |

### **3.2 Şifre Çözme Oyunu**

| **Fonksiyonel Gereksinim** | **Açıklama**                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| **Şifreleme Mekaniği**      | Matematiksel ipuçları çözülerek harflerle eşleştirme yapılması.             |
| **Dinamik Kullanıcı Girdisi** | Kullanıcının sayısal ve harf girdilerini oyun içinde gerçek zamanlı olarak sağlaması. |
| **Doğrulama Sistemi**       | Kullanıcının girdiği şifrelerin anlık olarak kontrol edilmesi.              |

---

## **4. Teknik Gereksinimler**

| **Gereksinim**    | **Açıklama**                                                      |
|--------------------|------------------------------------------------------------------|
| **React Native**   | Oyunların geliştirilmesi için kullanılan temel framework.        |
| **Expo**           | Hızlı prototip geliştirme ve test süreçleri için kullanılıyor.   |
| **Performans**     | Minimum 60 FPS ve düşük cihazlarda stabil çalışma.              |
| **Veritabanı**     | Kullanıcı skorları ve cevapları için bir bulut tabanlı veri saklama sistemi. |

---

## **5. Kullanılabilirlik Gereksinimleri**

| **Gereksinim**     | **Açıklama**                                                     |
|---------------------|-----------------------------------------------------------------|
| **Dil Desteği**     | Oyunlar başlangıçta Türkçe destekli olacak, ilerleyen aşamalarda çoklu dil desteği sağlanacak. |
| **Erişilebilirlik** | Yazı boyutları ve kontrastlar erişilebilirlik standartlarına uygun olacak. |

---

## **6. Performans Gereksinimleri**

| **Gereksinim**     | **Açıklama**                                                     |
|---------------------|-----------------------------------------------------------------|
| **FPS (Frame Per Second)** | Minimum 60 FPS ile çalışacak şekilde optimize edilecektir.         |
| **Başlatma Süresi** | Oyunların 3 saniyeden kısa sürede başlatılması sağlanacaktır.    |
