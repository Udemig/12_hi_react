/*
 ! Access Modifiers - Erişim Belirteçleri

 * Class propertyleri ile tutucağımız verilerin class'ın dışarısında erişilip erişilmeyeceğini belirtmek için kullandığımız yöntem.
 
 * 3 adet erişim belirteci vardır:

 * public: hem class dışarısından hem de class'ı miras alan diğer class'lardan erişilebilir.
 * protected: class'ın dışarısında erişilemez ama class'ı miras alan diğer class'lardan erişilebilir
 * private: hem cclass'ın dışarısından hem class'ı miras alan diğer class'lardan erişilemez 
  
 * not: erişim belirteci tanımlanmadıysa varsayılan değeri publictir 
*/

// Parent class
class Arac {
  public marka: string = "Honda";
  protected model: string = "Civic";
  private chasis_no: number = 82304723894723908;

  tanit() {
    console.log(this.marka, this.model, this.chasis_no);
  }
}

// Child class
class Motor extends Arac {
  calistir() {
    console.log(this.marka, this.marka);
  }
}

// Child class örneği
const honda = new Motor();
console.log(honda.marka);
// console.log(honda.model); !protected olduğu için erişemiyorum

/*
 * Not: Erişim belirteçleri ts'e özel bütün kodlarda olduğu gibi js'e derlerdiğimiz zaman ortadan kalkar.
 * Yeni berliteçler sadece **geliştirme** aşamasını daha güvenli hale getirir.

 * Erişim            Tanımlandığı Class           Miras Alan Class            Dışarıdan            
*/
