<template>
  <div class="card shadow mb-5 text-white bg-dark">
    <img src="../assets/unsplash3.jpg" class="card-img img-fluid" alt="..." />
    <div class="card-img-overlay">
      <div class="container">
        <!-- Begin Row 1 of Dashboard -->
        <div class="row">
          <div class="card-header text-center">
            <h1>Starseed Exchange App</h1>
            <h4>Logged In as {{ user.id }}</h4>
          </div>
          <div class="col-md-3">
            <div class="card shadow-lg p-3 mb-5 border-info">
              <div class="card-header">
                <svg
                  viewBox="0 0 24 24"
                  width="24px"
                  color="text"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-bdfBwQ eNHRIG"
                >
                  <path
                    d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z"
                  ></path>
                </svg>

                <h6>Contracts</h6>
              </div>
              <div class="card-body cardprops text-white bg-dark">
                Masterchef: <a href="https://polygonscan.com/address/0x520ec271803475efa9f6a3e2eec6ea8b8629b6e2#code" target="_blank" >{{ masterchef }}</a>
              </div>
              <div class="card-body cardprops text-white bg-dark">
                StarToken: <a href="https://polygonscan.com/address/0x1E0f334468226640b0ea76e8dEf87a70012eCcA4#code" target="_blank" >{{ startoken }}</a>
              </div>
              <div class="card-body cardprops text-white bg-dark">
                Reward Locker: <a href="https://polygonscan.com/address/0xf6d838fdfecc7153313e080fb764570302015010" target="_blank" >{{ rewardlocker }}</a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card shadow-lg p-3 mb-5 border-info">
              <div class="card-header">
                <svg
                  viewBox="0 0 24 24"
                  width="24px"
                  color="text"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-bdfBwQ eNHRIG"
                >
                  <path
                    d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"
                  ></path>
                </svg>
                <h6>StarToken</h6>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item cardprops text-white bg-dark">
                    Star Token Price ${{ price.usdPrice }}
                  </li>
                  <li class="list-group-item cardprops text-white bg-dark">
                    Token Balance: {{ tokenBalance }}
                  </li>
                  <li class="list-group-item cardprops text-white bg-dark">
                    Token Allowance: {{ tokenAllowance }}
                  </li>
                </ul>
              </div>
              <div class="card-footer"></div>
            </div>
          </div>
          <!-- Begin Column 2 of row 1 -->
          <div class="col-md-3">
            <div class="card shadow-lg p-3 mb-5 border-info">
              <div class="card-header">
                <svg
                  viewBox="0 0 24 24"
                  width="24px"
                  color="text"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-bdfBwQ eNHRIG"
                >
                  <path
                    d="M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z"
                  ></path>
                  <path
                    d="M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z"
                  ></path>
                </svg>

                <h6>Reward Locker</h6>
              </div>
              <div class="card-body cardprops text-white bg-dark">
                Locked Rewards: {{ rewards }}
              </div>
              <button
                class="btn btn-info float-end"
                @click.prevent="collectandupdate"
              >
                Collect
              </button>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card shadow-lg p-3 mb-5 border-info">
              <div class="card-header">
                <img src="../assets/matic.png" width="36" height="36" />
                <h6 style="float: left vertical-align:top">Control Panel</h6>
              </div>
              <input type="number" v-model.number="swapamount" />
              <button
                class="btn btn-info float-end cardpropsbtn"
                @click.prevent="stageswap(swapamount)"
              >
                Swap MATIC > STAR
              </button>
              <button
                class="btn btn-info float-end cardpropsbtn"
                @click.prevent="stageFiat"
              >
                $ FIAT On Ramp
              </button>

              <!-- IFRAME FOR FIAT ON RAP -->
              <!-- <iframe
                id="fiatIframe"
                src=""
                width="350"
                height="650"
                style="display:{{iframedisplay}}"
              >
              </iframe> -->
              <!-- <iframe
                id="onramper-widget"
                title="Onramper widget"
                width="350"
                height="650"
                frameborder="no"
                style="display: none"
                allow="accelerometer; autoplay; camera; gyroscope; payment;"
                src="https://widget.onramper.com?color=266678&apiKey=pk_test_4l9MMBJ4X9wytrZtaI0W1sb3rTMJ9x6Yljxg8JnUfdo0"

              >
              </iframe> -->
              <button
                class="btn btn-danger float-end cardpropsbtn"
                @click.prevent="logout"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <!-- BEGIN ROW 2 -->
        <div class="row">
          <div class="col">
            <div class="card shadow-lg p-3 mb-5 border-info">
              <div class="card-header">
                <svg
                  viewBox="0 0 24 24"
                  width="24px"
                  color="text"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-bdfBwQ eNHRIG"
                >
                  <path
                    d="M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z"
                  ></path>
                </svg>

                <h6>The Master Chef</h6>
                <button
                  class="btn btn-info float-end"
                  @click.prevent="stageharvest"
                >
                  Harvest
                </button>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item cardprops text-white bg-dark">
                    Pending tokens: {{ pendingBalance }}
                  </li>
                  <li class="list-group-item cardprops text-white bg-dark">
                    Pool ID: {{ poolId }}
                  </li>
                  <li class="list-group-item cardprops text-white bg-dark">
                    Dep/With Amount:
                    <input type="number" v-model.number="amount" />
                  </li>
                </ul>
                <div class="card-footer">
                  <button
                    class="btn btn-success mx-auto"
                    @click.prevent="stagedeposit"
                  >
                    Deposit
                  </button>
                  <button
                    class="btn btn-warning mx-auto"
                    @click.prevent="stagewithdraw"
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer text-center"><h5>LyghtCode Designs 2021</h5></div>
  </div>
</template>
<style lang="scss" scoped>
@import "../styles.scss";
</style>

<script lang="ts">
import Moralis from "moralis";
import { ref, onMounted, inject, computed } from "vue";
import { Options, Vue } from "vue-class-component";
import { UserModel } from "../models/User";
import { userModule } from "../store/user";
import starTokenAbi from "../contracts/StarTokenv2.json";
import masterChefAbi from "../contracts/MasterChefv2.json";
import rewardLockerAbi from "../contracts/RewardLockerv2.json";
// import { Chain } from "../config/chain";
import { AppConfig } from "../config";
let dex;


export default class Prototype extends Vue {
  // !LyghtCode 2021 wepa ya tu sabe Puerto Rico in the code!

  // Instantiate all necessary dynamic variables
  starbalance = {};
  price = {};
  rewards = {};
  rewardbal = ref(0);
  currentUser = ref({});
  tokenBalance = ref(0);
  tokenAllowance = ref(0);
  pendingBalance = ref(0);
  poolId = "0";
  amount = ref(0);
  swapamount = ref(0);
  masterchef = AppConfig.MASTERCHEFADDRESS;
  startoken = AppConfig.STARTOKENADDRESS;
  rewardlocker = AppConfig.REWARDLOCKERADDRESS;
  web3 = new Moralis.Web3();
  iframedisplay = ref({});
  iframesrc = "";

  // To get ethAddress > this.$moralis.User.current().get('ethAddress');
  // How to instatiate Chain figure out later.
  // C = new Chain();

  get user(): UserModel {
    return userModule.user as UserModel;
  }
  
  ///// Initialization of some basic functions //////
  created(): void {
    console.log("Intializing Moralis Plugins...");
    this.loadPlugins();
    console.log("Getting token logs...");
    this.getTokenPrice(this.startoken);
    console.log("User address is:" + this.user.get("ethAddress"));
    console.log("Updating token balance:...");
    this.updateTokenBalance();
    console.log("Updating token allowance...");
    this.updateTokenAllowance();
    console.log("Updating pending balance...");
    this.updatePendingBalance();
    console.log("Updating rewards...");
    this.updateRewards(this.user.get("ethAddress"));
  }

  ///// Essential //////

  fromWei(value: string): string {
    return this.$moralis.Units.FromWei(value, 18).toString();
  }

  async logout(): Promise<void> {
    await this.$moralis.User.logOut();
    this.$router.push({ name: "Login" });
  }

  async loadPlugins(): Promise<void> {
    await Moralis.initPlugins();
    const dex = Moralis.Plugins.oneInch;
    const result = await dex.getSupportedTokens({ chain: "polygon" });
    console.log(result);
  }

  async swapMatic(swapamount: string): Promise<any> {
    const dex = Moralis.Plugins.oneInch;
    console.log("Amount your swapping is: " + swapamount);
    const options = {
      chain: "polygon",
      fromTokenAddress: AppConfig.MATICTOKENADDRESS,
      toTokenAddress: AppConfig.STARTOKENADDRESS,
      amount: Moralis.Units.ETH(swapamount),
      fromAddress: this.user.get("ethAddress"),
      slippage: 1,
    };
    var receipt = await dex.swap(options);
    console.log(receipt);
  }

  ////// Farm & Pool Functions //////

  async getTokenPrice(tokenAddress: string): Promise<any> {
    const price = await this.$moralis.Web3API.token.getTokenPrice({
      chain: "polygon",
      address: tokenAddress,
    });

    console.log(price);

    this.price = price;

    return price;
  }

  async updateRewards(userAddress: string): Promise<any> {
    const rewards = await this.getRewards(
      userAddress,
      AppConfig.STARTOKENADDRESS
    );

    console.log("Rewards are: " + rewards);

    this.rewards = rewards;

    return rewards;
  }

  async collectandupdate(): Promise<any> {
    await this.collect(AppConfig.STARTOKENADDRESS);
    this.updateRewards(this.user.get("ethAddress"));
    this.updateTokenBalance();
  }

  async updateTokenBalance(): Promise<any> {
    this.tokenBalance = await this.getBalance(AppConfig.STARTOKENADDRESS);
    console.log("Token Balance is: " + this.tokenBalance);
  }

  async updatePendingBalance(): Promise<any> {
    this.pendingBalance = await this.getPendingStar(
      this.poolId,
      this.user.get("ethAddress")
    );
    console.log("Pending Balance is: " + this.pendingBalance);
  }

  async updateTokenAllowance(): Promise<any> {
    this.tokenAllowance = await this.getAllowance(
      AppConfig.STARTOKENADDRESS,
      this.user.get("ethAddress"),
      AppConfig.MASTERCHEFADDRESS
    );
    console.log("Token Balance is: " + this.tokenAllowance);
  }

  ////// Staging Functions for transactions //////
  async stagedeposit(): Promise<any> {
    console.log("Amount your depositing is: " + this.amount);

    let amountstring = this.amount.toString();

    console.log("Amount is now a string: " + amountstring);

    await this.deposit(this.poolId, amountstring);
    this.updatePendingBalance();
  }

  async stagewithdraw(): Promise<any> {
    console.log("Amount your withdrawing is: " + this.amount);

    let amountstring = this.amount.toString();

    console.log("Amount is now a string: " + amountstring);

    await this.withdraw(this.poolId, amountstring);
    this.updatePendingBalance();
  }

  async stageharvest(): Promise<any> {
    await this.harvest(this.poolId);
    this.updatePendingBalance();
  }

  async stageapprove(): Promise<any> {
    await this.approve(AppConfig.STARTOKENADDRESS);
    this.updateTokenAllowance();
  }

  async stageswap(): Promise<any> {
    console.log("Amount your swapping is: " + this.swapamount);

    let swapamountstring = this.swapamount.toString();

    console.log("Amount is now a string: " + swapamountstring);

    await this.swapMatic(swapamountstring);
  }

  async stageFiat(): Promise<any> {
    Moralis.Plugins.fiat.buy();
  }

  // async iframefiat(): Promise<any> {
  //   let display = document.getElementById("onramper-widget")?.style.display
  //   let src = document.getElementById("onramper-widget")?.src
  //   const receipt = await Moralis.Plugins.fiat.buy(
  //     {},
  //     { disableTriggers: true }
  //   );
  //   display = "block";
  // }

  ////// Moralis Functions //////

  public collect = (tokenAddress: string) =>
    Moralis.executeFunction({
      contractAddress: AppConfig.REWARDLOCKERADDRESS,
      functionName: "vestCompletedSchedules",
      abi: rewardLockerAbi,
      params: {
        token: tokenAddress,
      },
    });

  public getRewards = (userAddress: string, token: string) =>
    Moralis.executeFunction({
      contractAddress: AppConfig.REWARDLOCKERADDRESS,
      functionName: "getVestingSchedules",
      abi: rewardLockerAbi,
      params: {
        account: userAddress,
        token: token,
      },
    });

  public getPendingStar = (poolId: string, userAddress: string) =>
    Moralis.executeFunction({
      contractAddress: AppConfig.MASTERCHEFADDRESS,
      functionName: "pendingStar",
      abi: masterChefAbi,
      params: {
        _pid: poolId,
        _user: userAddress,
      },
    });

  async getBalance(tokenAddress: string): Promise<any> {
    const balances = await Moralis.Web3API.account.getTokenBalances({
      chain: "matic",
      address: tokenAddress,
    });

    return balances;
  }

  async getAllowance(
    tokenAddress: string,
    ownerAddress: string,
    spenderAddress: string
  ): Promise<any> {
    const { allowance } = await Moralis.Web3API.token.getTokenAllowance({
      owner_address: ownerAddress,
      spender_address: spenderAddress,
      address: tokenAddress,
      chain: "matic",
    });

    console.log("Allowance is: " + allowance);

    return this.fromWei(allowance);
  }

  ////// Moralis Transaction Functions //////

  public deposit = (poolId: string, amount: string) =>
    Moralis.executeFunction({
      contractAddress: AppConfig.MASTERCHEFADDRESS,
      functionName: "deposit",
      abi: masterChefAbi,
      params: {
        _pid: poolId,
        _amount: Moralis.Units.ETH(amount),
        _shouldHarvest: "false",
      },
    });

  public withdraw = (poolId: string, amount: string) =>
    Moralis.executeFunction({
      contractAddress: AppConfig.MASTERCHEFADDRESS,
      functionName: "withdraw",
      abi: masterChefAbi,
      params: {
        _pid: poolId,
        _amount: Moralis.Units.ETH(amount),
        _shouldHarvest: "false",
      },
    });

  public harvest = (poolId: string) =>
    Moralis.executeFunction({
      contractAddress: AppConfig.MASTERCHEFADDRESS,
      functionName: "harvest",
      abi: masterChefAbi,
      params: {
        _pid: poolId,
      },
    });

  public approve = (tokenAddress: string) => {
    const tokenDecimals = this.web3.utils.toBN(18);
    const tokenAmountToApprove = this.web3.utils.toBN(999000000000);
    const calculatedApproveValue = this.web3.utils.toHex(
      tokenAmountToApprove.mul(this.web3.utils.toBN(10).pow(tokenDecimals))
    );

    ////// Might just need to use Moralis.Units.ETH() //////

    return Moralis.executeFunction({
      contractAddress: tokenAddress,
      functionName: "approve",
      abi: starTokenAbi,
      params: {
        spender: AppConfig.MASTERCHEFADDRESS,
        amount: calculatedApproveValue,
      },
    });
  };
}
</script>
