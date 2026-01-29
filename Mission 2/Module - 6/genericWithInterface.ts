interface Developer<T, X = null> {
  // x=null this is default value for bike
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

/*
const poorDeveloper: Developer<{
  heartRate: string;
  stopWatch: boolean;
}> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "A21",
    releasedYear: "2010",
  },
  smartWatch: {
    heartRate: "100 bpm",
    stopWatch: true,
  },
};
*/

/*
here we can change type dinamically in the stopWatch  by using generics
*/

/*
const richDeveloper: Developer<{
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  aiFeature: boolean;
}> = {
  name: "Mr. Rich",
  salary: 100,
  device: {
    brand: "hp",
    model: "x34",
    releasedYear: "2030",
  },
  smartWatch: {
    heartRate: "100 bpm",
    callSupport: true,
    calculator: true,
    aiFeature: true,
  },
};
*/




// For clean code we can use this :
interface brandCharaGhori {
  // we can also use here type alias instead of interface
  heartRate: string;
  stopWatch: boolean;
}
const poorDeveloper: Developer<
  brandCharaGhori,
  {
    brand: "yahamaha";
    engineCapacity: "200cc";
  }
> = {
  // this is now clean
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "A21",
    releasedYear: "2010",
  },
  smartWatch: {
    heartRate: "100 bpm",
    stopWatch: true,
  },
};



interface appleWatch {
  // we can also use here type alias instead of interface
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  aiFeature: boolean;
}

const richDeveloper: Developer<appleWatch> = {
  // this is now clean
  name: "Mr. Rich",
  salary: 100,
  device: {
    brand: "hp",
    model: "x34",
    releasedYear: "2030",
  },
  smartWatch: {
    heartRate: "100 bpm",
    callSupport: true,
    calculator: true,
    aiFeature: true,
  },
  bike: null,
};
