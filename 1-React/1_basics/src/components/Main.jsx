import User from "../components/User";
const Main = () => {
  const isAdmin = false;
  const krediNotu = 86;
  const users = [
    {
      name: "Adnan Altıntaş",
      age: 19,
      job: "Full Stack Developer",
      message: "Kendisini geliştiren geleceğin başarılı Full Stack Developer",
    },
    {
      name: "Yusuf Yaman",
      age: 25,
      job: "Frontend Developer",
      message: "Kullanıcı dostu arayüzler tasarlayan bir geliştirici.",
    },
    {
      name: "Merve Yıldız",
      age: 22,
      job: "UI/UX Designer",
      message:
        "Tasarımı ve kullanıcı deneyimini ön planda tutan bir profesyonel.",
    },
    {
      name: "Emre Demir",
      age: 27,
      job: "Backend Developer",
      message: "Performans odaklı backend sistemleri geliştiren bir yazılımcı.",
    },
    {
      name: "Esra Salur",
      age: 30,
      job: "UI/UX Designer",
      message: "Performans odaklı backend sistemleri geliştiren bir yazılımcı.",
    },
  ];

  return (
    <div className="bg-warning d-flex flex-column h-100">
      <h2 className="text-center fs-1 pt-3">Main</h2>
      {/* Table Example */}
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Koşullu Renderlama
      
      - Eğerki kullanıcı adminse Admin girişi değilse kullanıcı girişi yazdır
      
      */}
      <div className="container">
        {isAdmin ? <h1>Admin giriş</h1> : <h1>Kullanıcı Girişi</h1>}
      </div>

      {/*  Koşullu Renderlama
      
      - Kullanıcının kredi notu 85'den büyükse kredi alabilir yazdırınız.
      
      
      */}

      <div className="container">
        {krediNotu > 85 && <h1>Kredi Alabilir</h1>}
      </div>

      {/* ? Ternary ve Ve operatörü arasındaki fark nedir?
      
      - Eğer bir koşulun sağlanması durumunda renderlama yapılacaksa Ve opeatörü kullanılır.Ama eğer bir koşulun hem sağlandığı hemde sağlanamadığı durumlarda renderlama yapılacaksa bu durumda Ternary operatörü kullanılır.
      
      */}
      <div className="container grid-kapsayıcı ">
        {/* <User
          name="Esra Akgündoğdu"
          age={25}
          job="React Developer"
          message="Kendisini geliştiren geleceğin başarılı  Frontend Developerı"
        />
        <User
          name="Ali Ağa"
          age={28}
          job="React Native Developer"
          message="Kendisini geliştiren geleceğin başarılı  React Native Developerı"
        />
        <User
          name="Helin Çevik"
          age={22}
          job="Backend Developer"
          message="Kendisini geliştiren geleceğin başarılı  Backend Developerı"
        />
        <User
          name="Adnan Altıntaş"
          age={19}
          job="Full Stack Developer"
          message="Kendisini geliştiren geleceğin başarılı Full Stack Developer"
        /> */}

        {users.map((user, index) => (
          <User
            key={index}
            name={user.name}
            age={user.age}
            job={user.job}
            message={user.message}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
