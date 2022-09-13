<template>
  <div class="app_container">
    <div class="message">{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

//@Componet~exportの部分全てで、vue-property-decorator式でクラスを定義している
@Component({
  //型を定義する場所
})
export default class TopPage extends Vue {
  public message = "HELLO WORLD, welcome to STAGE2";
}
</script>

<style lang="stylus" scoped>
.app_container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .message {
    font-size: 40px;
    text-slign: center;
    font-weight: bold;
  }
}
</style>
