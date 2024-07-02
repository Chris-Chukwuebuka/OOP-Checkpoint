class ShoppingCart {
  constructor() {
    this.items = [];
    this.itemCount = localStorage.getItem("itemCount") || 0;
    this.totalPrice = localStorage.getItem("totalPrice") || 0;
    this.location = new Location();
    this.productColor = localStorage.getItem("productColor");

    this.initialize();
  }

  initialize() {
    this.updateDisplay();
    this.bindEvents();
  }

  updateDisplay() {
    document.getElementById("product-title").innerText = this.getProductTitle();
    document.getElementById("itemCountDisplay").innerText = this.itemCount;
    document.getElementById(
      "totalPriceDisplay"
    ).innerText = `$ ${this.totalPrice}.00`;

    if (this.productColor) {
      document.getElementById("color-box-display").style.backgroundColor =
        this.productColor;
    }

    this.location.bindEvents();
  }

  getProductTitle() {
    // Your implementation here
  }

  bindEvents() {
    // Bind any necessary events here
  }
}

class Location {
  constructor() {
    this.locations = [
      "Abuja",
      "Asaba",
      "Port Harcourt",
      "Lagos",
      "Imo",
      "Anambra",
    ];
    this.locationInput = document.getElementById("location-input");
    this.display = document.getElementById("display-delivery-fee");
    this.typingDelay = 500;
    this.typingTimeout;

    this.bindEvents();
  }

  bindEvents() {
    this.locationInput.addEventListener("input", () => {
      clearTimeout(this.typingTimeout);
      this.typingTimeout = setTimeout(() => {
        this.calculateLocationFee();
      }, this.typingDelay);
    });
  }

  calculateLocationFee() {
    // Your implementation here
  }
}

const shoppingCart = new ShoppingCart();