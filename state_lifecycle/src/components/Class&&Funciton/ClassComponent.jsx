import { Component } from "react";

class ClassComponent extends Component {
  // Kurucu Metot
  constructor(props) {
    super(props);

    // state oluşturulması
    this.state = {
      name: "Esra",
      age: 30,
      hobbies: ["Yazılım", "Matematik", "Spor", "Müzik"],
      count: 0,
    };
  }
  // Bileşen ekrana geldiğinde
  //   componentDidMount() {
  //     console.log("Bileşen ekrana geldi");
  //   }

  //   // Bileşen güncellendiğinde
  //   componentDidUpdate() {
  //     console.log("Bileşen güncellendi");
  //   }

  //   // Bileşen ekrandan gittiğinde
  //   componentWillUnmount() {
  //     console.log("Bileşen ekrandan gitti");
  //   }

  // Ekranda renderlanacak contenti belirler
  render() {
    return (
      <div className="container mt-2 border border-4 p-5">
        <h1 className="text-center">Class Component</h1>
        <div className="d-flex justify-content-center gap-2">
          <div>
            <h1 className="text-center">{this.state.count}</h1>
            <button
              onClick={() => this.setState({ count: this.state.count + 1 })}
              className="btn btn-success mx-3"
            >
              Arttır
            </button>
            <button
              onClick={() => this.setState({ count: this.state.count - 1 })}
              className="btn btn-danger mx-3"
              disabled={this.state.count === 0}
            >
              Azalt
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
