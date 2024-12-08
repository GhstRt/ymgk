# **Test Planı: Firavunlar ve Şifre Çözme Oyunları**

---

## **1. Amaç**

Bu doküman, "Firavunlar ve Şifre Çözme Oyunları" projesinin test süreçlerini tanımlar. Test planı, oyunların teknik ve kullanıcı gereksinimlerine uygunluğunu doğrulamayı amaçlar.

---

## **2. Test Edilecek Özellikler**

### **2.1 Firavunlar Tarihi Quiz Oyunu**

- Zaman çizelgesinin doğru sıralanması.  
- Çoktan seçmeli soruların doğru çalışması ve yanıtların doğrulanması.  
- Metin tabanlı sorularda kullanıcı girdisinin doğru analiz edilmesi.  
- Animasyonların ve görsel efektlerin akıcı çalışması.  

### **2.2 Şifre Çözme Oyunu**

- Şifreleme ipuçlarının doğru hesaplanması ve harf eşleştirmelerinin doğrulanması.  
- Kullanıcı girdilerinin dinamik olarak işlenmesi.  
- Hatalı girdilerde doğru uyarıların gösterilmesi.  

### **2.3 Genel Özellikler**

- Ana menü ve navigasyonun çalışması.  
- Skorların doğru şekilde hesaplanması ve Firebase'e kaydedilmesi.  
- Tüm ekranların farklı cihaz çözünürlüklerinde uyumlu olması.  

---

## **3. Test Türleri**

| **Test Türü**        | **Açıklama**                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **Fonksiyonel Test**  | Oyunların özelliklerinin beklenen şekilde çalıştığını doğrulamak.           |
| **Performans Testi**  | Oyunların düşük donanımlı cihazlarda bile akıcı çalışmasını sağlamak.       |
| **Kullanıcı Testi**   | Sezgisel arayüz ve kolay kullanım hedeflerini test etmek.                  |
| **Güvenlik Testi**    | Kullanıcı verilerinin güvenliğini ve sistemin güvenlik açıklarına karşı dayanıklılığını doğrulamak. |

---

## **4. Test Süreci**

| **Aşama**              | **Aktivite**                                      | **Sorumlu**          |
|-------------------------|--------------------------------------------------|----------------------|
| **Test Planlama**       | Test senaryolarının hazırlanması ve önceliklendirilmesi. | Test Uzmanı          |
| **Test Uygulama**       | Belirlenen senaryoların uygulanması.             | Test Ekibi           |
| **Hata Raporlama**      | Tespit edilen hataların detaylı bir şekilde raporlanması. | Test Uzmanı          |
| **Düzeltme ve Retest**  | Raporlanan hataların düzeltilmesi ve yeniden test edilmesi. | Geliştirici Ekibi    |
| **Onay ve Yayın**       | Testlerin tamamlanması ve ürünün yayın onayı verilmesi.   | Proje Yöneticisi     |

---

## **5. Test Senaryoları**

### **5.1 Fonksiyonel Test Senaryoları**

| **ID**   | **Senaryo**                                    | **Beklenen Sonuç**                                             |
|----------|------------------------------------------------|----------------------------------------------------------------|
| **FT-01** | Çoktan seçmeli bir soruya doğru cevap verilmesi. | "Doğru!" mesajı gösterilmeli ve sonraki soruya geçilmeli.       |
| **FT-02** | Zaman çizelgesinde firavun isimleri sıralanması. | İsimler başlangıç tarihine göre sıralanmalı.                   |
| **FT-03** | Şifreleme ipucu çözülerek doğru harf girilmesi.  | Doğru harf yerine yerleşmeli.                                  |
| **FT-04** | Yanlış cevap verilmesi.                         | "Yanlış!" mesajı gösterilmeli ve kullanıcı tekrar deneyebilmeli. |

### **5.2 Performans Testi**

| **ID**   | **Senaryo**                                    | **Beklenen Sonuç**                                             |
|----------|------------------------------------------------|----------------------------------------------------------------|
| **PT-01** | Oyun düşük donanımlı bir cihazda çalıştırılır.   | FPS 60 ve üzeri olmalı, animasyonlar akıcı çalışmalı.           |
| **PT-02** | Çok sayıda kullanıcı Firebase'e veri kaydeder.  | Veri kaydı gecikme olmadan gerçekleşmeli.                      |

### **5.3 Kullanıcı Testi**

| **ID**   | **Senaryo**                                    | **Beklenen Sonuç**                                             |
|----------|------------------------------------------------|----------------------------------------------------------------|
| **UT-01** | Kullanıcı ilk kez oyunu oynar.                  | Tüm özellikler kolayca anlaşılabilir ve kullanılabilir olmalı.  |
| **UT-02** | Şifre çözme oyununda ipucu anlaşılmazsa kullanıcı yardım alır. | Yardım menüsü açık ve erişilebilir olmalı.                     |

---

## **6. Test Araçları**

| **Araç**              | **Kullanım Amacı**                                                    |
|-----------------------|----------------------------------------------------------------------|
| **Jest**             | Unit testlerin uygulanması.                                         |
| **BrowserStack**     | Farklı cihaz ve ekran çözünürlüklerinde test yapılması.             |
| **Firebase Console** | Veri aktarımının ve entegrasyonların test edilmesi.                |

---

## **7. Test Çıktıları**

Her test sonucunda aşağıdaki bilgiler raporlanacaktır:

- **Senaryo ID'si**  
- **Başarı Durumu (Başarılı/Başarısız)**  
- **Hata Detayı (Varsa)**  
- **Düzeltme Durumu**  
