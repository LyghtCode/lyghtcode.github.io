// import Moralis from "moralis";
// import { ref, onMounted, inject, computed } from "vue";
// import { Options, Vue } from "vue-class-component";
// import { UserModel } from "../models/User";
// import { userModule } from "../store/user";
// import starTokenAbi from "../contracts/StarTokenv2.json";
// import masterChefAbi from "../contracts/MasterChefv2.json";
// import rewardLockerAbi from "../contracts/RewardLockerv2.json";
// import { Chain } from "../config/chain";
// import { AppConfig } from "../config";

// const web3 = new this.$moralis.Web3();
// const masterChefAddress = process.env.VUE_APP_MASTER_CHEF_ADDRESS;
// const rewardLockerAddress = process.env.VUE_APP_REWARD_LOCKER_ADDRESS;
// const starTokenAddress = process.env.VUE_APP_STAR_TOKEN_ADDRESS;

// export class Chain {
//   public login = () => moralis.Web3.authenticate();

//   public logout = () => moralis.User.logout;

//   public getCurrentUser = () => moralis.User.current();

//   public getPendingStar = (poolId: string, user: UserModel) =>
//     moralis.executeFunction({
//       contractAddress: masterChefAddress,
//       functionName: "pendingStar",
//       abi: masterChefAbi,
//       params: {
//         _pid: poolId,
//         _user: user,
//       },
//     });

//   public getRewards = (user: UserModel, token: string) =>
//     Moralis.executeFunction({
//       contractAddress: rewardLockerAddress,
//       functionName: "getVestingSchedules",
//       abi: rewardLockerAbi,
//       params: {
//         account: user,
//         token: token,
//       },
//     });

//   public getAllowance = async (
//     tokenAddress: string,
//     ownerAddress: string,
//     spenderAddress: string
//   ) => {
//     const { allowance } = await moralis.Web3API.token.getTokenAllowance({
//       owner_address: ownerAddress,
//       spender_address: spenderAddress,
//       address: tokenAddress,
//       chain: "polygon",
//     });

//     return web3.utils.fromWei(allowance);
//   };

//   public getBalance = async (tokenAddress: string) => {
//     const balances = await moralis.Web3API.account.getTokenBalances({
//       chain: "polygon",
//     });

//     const token = balances.find(tokenAddress.toLowerCase());

//     return token ? web3.utils.fromWei(token.balance) : 0;
//   };

//   public getTokenPrice = async (tokenAddress: string) => {
//     const price = await moralis.Web3API.account.getTokenPrice({
//       address: tokenAddress,
//       chain: "polygon",
//     });

//     console.log(price);

//     return price;
//   };

//   public approve = (tokenAddress: string) => {
//     const tokenDecimals = web3.utils.toBN(18);
//     const tokenAmountToApprove = web3.utils.toBN(999000000000);
//     const calculatedApproveValue = web3.utils.toHex(
//       tokenAmountToApprove.mul(web3.utils.toBN(10).pow(tokenDecimals))
//     );

//     return moralis.executeFunction({
//       contractAddress: tokenAddress,
//       functionName: "approve",
//       abi: tokenAbi,
//       params: {
//         spender: masterChefAddress,
//         amount: calculatedApproveValue,
//       },
//     });
//   };

//   public deposit = (poolId: string, amount: string) =>
//     moralis.executeFunction({
//       contractAddress: masterChefAddress,
//       functionName: "deposit",
//       abi: masterChefAbi,
//       params: {
//         _pid: poolId,
//         _amount: amount,
//         _shouldHarvest: false,
//       },
//     });

//   public withdraw = (poolId: string, amount: string) =>
//     moralis.executeFunction({
//       contractAddress: masterChefAddress,
//       functionName: "withdraw",
//       abi: masterChefAbi,
//       params: {
//         _pid: poolId,
//         _amount: amount,
//         _shouldHarvest: false,
//       },
//     });

//   public harvest = (poolId: string) =>
//     moralis.executeFunction({
//       contractAddress: masterChefAddress,
//       functionName: "harvest",
//       abi: masterChefAbi,
//       params: {
//         _pid: poolId,
//       },
//     });

//   public collect = (tokenAddress: string) =>
//     moralis.executeFunction({
//       contractAddress: rewardLockerAddress,
//       functionName: "vestCompletedSchedules",
//       abi: rewardLockerAbi,
//       params: {
//         token: tokenAddress,
//       },
//     });
// }
