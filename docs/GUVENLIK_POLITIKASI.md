# **Güvenlik Politikası: Firavunlar ve Şifre Çözme Oyunları**

---

## **1. Amaç**

Bu doküman, "Firavunlar ve Şifre Çözme Oyunları" projesinde kullanıcı verilerinin korunması ve güvenlik açıklarının önlenmesi için uygulanacak politikaları tanımlar. Projenin güvenlik açısından güvenilir ve sürdürülebilir olması hedeflenmektedir.

---

## **2. Veri Güvenliği**

### **2.1 Kullanıcı Verileri**

**Toplanan Veriler:**
- Kullanıcı skorları.  
- Oyun içi ilerleme durumu.  
- Anonim kullanım istatistikleri.  

**Saklama Politikası:**
- Tüm kullanıcı verileri şifrelenmiş şekilde saklanacaktır.  
- Kişisel veriler toplanmaz ve paylaşılmaz.  

**Veri Transferi:**
- Veriler yalnızca HTTPS protokolü kullanılarak aktarılacaktır.  
- Kullanıcı ve sunucu arasındaki iletişim şifreli olacaktır.  

---

## **3. Sistem Güvenliği**

### **3.1 Güvenlik Önlemleri**

**Kimlik Doğrulama:**  
- Admin erişimi için güçlü şifreler ve iki faktörlü kimlik doğrulama (2FA) kullanılacaktır.  

**Yetkilendirme:**  
- Kullanıcıların yalnızca kendi oyun verilerine erişmesi sağlanacaktır.  

**Güncellemeler:**  
- Tüm güvenlik yamaları ve framework güncellemeleri düzenli olarak yapılacaktır.  

### **3.2 Güvenlik Duvarları**

- Geliştirme ve test süreçlerinde API erişimi yalnızca belirli IP adreslerine izin verecek şekilde sınırlandırılacaktır.  

---

## **4. Oyun İçi Güvenlik**

### **4.1 Girdi Kontrolleri**

- Kullanıcı girdileri güvenlik açıklarını önlemek için doğrulama süreçlerinden geçirilecektir.  

**Örnekler:**  
- Metin tabanlı cevaplar özel karakterlere karşı korunacaktır.  
- Şifre çözme oyununda matematiksel ifadelerin kontrolü yapılacaktır.  

### **4.2 Anti-Cheat Sistemleri**

- Kullanıcıların adil bir oyun deneyimi yaşaması için aşağıdaki önlemler alınacaktır:  
  - Skorların sunucu tarafında doğrulanması.  
  - Anormal oyun aktivitelerinin tespiti ve engellenmesi.  

---

## **5. Test ve İzleme**

### **5.1 Güvenlik Testleri**

- Penetrasyon testleri ile güvenlik açıkları düzenli olarak kontrol edilecektir.  
- Oyun içi güvenlik mekanizmaları için stres testleri uygulanacaktır.  

### **5.2 İzleme ve Loglama**

- Kullanıcı etkinlikleri anonim olarak loglanacaktır.  
- Sistem saldırıları ve şüpheli aktiviteler için uyarı mekanizması kurulacaktır.  

---

## **6. Kullanıcı Hakları**

- Kullanıcılar, istedikleri zaman verilerini sistemden sildirme hakkına sahiptir.  
- Kullanıcılara verilerinin nasıl saklandığı ve işlendiği hakkında açık bilgi sağlanacaktır.  

---

## **7. Sorumluluklar**

| **Rol**              | **Sorumluluk**                                                      |
|-----------------------|--------------------------------------------------------------------|
| **Proje Yöneticisi**  | Güvenlik politikalarının uygulanmasını denetler.                  |
| **Geliştiriciler**    | Kod güvenliğinden ve güvenlik açıklarını önleyecek uygulamalardan sorumludur. |
| **Test Uzmanı**       | Güvenlik testlerini gerçekleştirir ve raporlar.                   |
