<template>
  <div class="card shadow mb-5 text-white bg-dark">
    <!-- <div class="card-header">
      
    </div> -->
    <img src="../assets/unsplash2.jpg" class="card-img img-fluid" alt="..." />
    <div class="card-img-overlay">
      <div class="card-body p-3">
        <div class="container align-center text-center">
          <div class="row align-center">
            <div class="col md-4 align-self-center">
              <div class="card p-3 text-white cardprops">
              </div>
            </div>

            <div class="col md-4 align-self-center">
              <div class="card text-white cardprops">
                <div class="card-header">
                  <h2>Starseed Exchange App</h2>
                  <!-- <h4>Pick Login format</h4> -->
                </div>

                <div class="card-body">
                  <div class="card-body">
                    <button
                      @click.prevent="metamaskLogin"
                      class="btn btn-success"
                    >
                      Login with Metamask
                    </button>
                  </div>
                </div>
              </div>
              <div class="card text-white bg-dark mb-3" style="width: 33rem">
                <div class="card-header">
                  <h4>
                    Please make sure you are connected to the Polygon Network before
                    proceeding.
                  </h4>
                </div>

                <div class="card-body">
                  <a
                    href="https://autofarm.gitbook.io/autofarm-network/how-tos/polygon-chain-matic/metamask-add-polygon-matic-network"
                    target="_blank"
                  >
                    Follow these instructions to ensure Polygon Network is
                    added to your wallet.
                  </a>
                </div>
              </div>
            </div>
            <div class="col md-4 align-self-center">
              <div class="card p-3 text-white cardprops">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { UserModel } from "../models/User";
import { userModule } from "../store/user";

@Options({})
export default class Login extends Vue {
  async metamaskLogin(): Promise<void> {
    try {
      const user: UserModel = await this.$moralis.Web3.authenticate({
        chainId: 137,
      });
      userModule.SET_USER(user);
      console.log(user);
      this.$router.push({ name: "Prototype" });
    } catch (error) {
      console.log({ error });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles.scss";
</style>
