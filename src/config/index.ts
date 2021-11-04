import * as env from "env-var";

export class AppConfig {
  static MORALIS_APPID: string = env
    .get("VUE_APP_MORALIS_APPID")
    .asString() as string;
  static MORALIS_SERVER_URL: string = env
    .get("VUE_APP_MORALIS_SERVER_URL")
    .asString() as string;
  static STARTOKENADDRESS: string = env
    .get("VUE_APP_STAR_TOKEN_ADDRESS")
    .asString() as string;
  static MASTERCHEFADDRESS: string = env
    .get("VUE_APP_MASTER_CHEF_ADDRESS")
    .asString() as string;
  static REWARDLOCKERADDRESS: string = env
    .get("VUE_APP_REWARD_LOCKER_ADDRESS")
    .asString() as string;
  static MATICTOKENADDRESS: string = env
    .get("VUE_APP_REWARD_LOCKER_ADDRESS")
    .asString() as string;
}
