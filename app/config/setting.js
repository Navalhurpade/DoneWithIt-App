import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.87.228:9000/api",
    useBugsnag: false,
  },
  staging: {
    apiUrl: "https://done-with-it-backend-naval.herokuapp.com/api",
    useBugsnag: true,
  },
  prod: {
    apiUrl: "https://done-with-it-backend-naval.herokuapp.com/api",
    useBugsnag: true,
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  else if (Constants.manifest.releaseChannel === "staging")
    return settings.staging;
  else return settings.prod;
};

export default getCurrentSettings();
