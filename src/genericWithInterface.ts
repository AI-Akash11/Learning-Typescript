interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartWatch: T;
  bike?: X;
}

interface BasicWatch {
  heartRate: number;
  stopWatch: boolean;
}

interface BasicBike {
  brand: string;
  model: string;
  price: number;
}

interface BrandedWatch {
  heartRate: number;
  stopWatch: boolean;
  camera: boolean;
  aiAssistant: boolean;
}

interface BrandedBike {
  brand: string;
  model: string;
  price: number;
  gps: boolean;
  electric: boolean;
}

const poorDeveloper: Developer<BasicWatch> = {
  name: "John Doe",
  salary: 30000,
  device: {
    brand: "Dell",
    model: "XPS 13",
    releaseYear: 2022,
  },
  smartWatch: {
    heartRate: 70,
    stopWatch: true,
  },
};

const richDeveloper: Developer<BrandedWatch, BrandedBike> = {
  name: "John Doe",
  salary: 90000,
  device: {
    brand: "Dell",
    model: "XPS 13",
    releaseYear: 2022,
  },
  smartWatch: {
    heartRate: 70,
    stopWatch: true,
    camera: true,
    aiAssistant: true,
  },
  bike: {
    brand: "Trek",
    model: "Marlin 5",
    price: 300,
    gps: true,
    electric: true,
  },
};
