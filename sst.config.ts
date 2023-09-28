import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "hello-sst",
      region: "us-east-1",
      stage: "dev",
      profile: "sabaijr"
    };
  },
  stacks(app) {
    app.stack(API);
  }
} satisfies SSTConfig;
