<template>
  <input v-model="localValue" />
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class AppInput extends Vue {
  @Prop({ required: true }) value!: string;

  public get localValue() {
    return this.value;
  }
  public set localValue(input: string) {
    this.$emit("input", input);
  }
}
</script>
