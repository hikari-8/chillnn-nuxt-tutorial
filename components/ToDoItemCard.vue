<template>
  <div class="todo_container">
    <div>{{ name }}</div>
    <div class="button_status">
      <button @click="changeStatus" :style="style">{{ status }}</button>
    </div>
    <div class="button_remove">
      <button @click="removeItem">✖️</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { ToDoItem } from "~/types";

@Component({})
export default class ToDoItemCard extends Vue {
  //toDoという変数PropsをtoDoItemという名前(親と同じ名前)で定義し、その型を定義している
  //toDoItemの後ろの！はTSで、この値がnullではないことをTSに教えている(外すとエラーになる)
  @Prop({ required: true }) public toDoItem!: ToDoItem;

  //getter name()
  public get name(): string {
    return this.toDoItem.name;
  }

  //getter status()
  public get status(): string {
    switch (this.toDoItem.status) {
      case "PENDING":
        return "未着手";
      case "DOING":
        return "着手";
      case "DONE":
        return "完了";
    }
  }
  //getter style
  public get style() {
    switch (this.toDoItem.status) {
      case "PENDING":
        return { backgroundColor: "red", color: "white" };
      case "DOING":
        return { backgroundColor: "green", color: "white" };
      case "DONE":
        return { backgroundColor: "blue", color: "white" };
    }
  }

  public changeStatus() {
    switch (this.toDoItem.status) {
      case "PENDING":
        this.toDoItem.status = "DOING";
        break;
      case "DOING":
        this.toDoItem.status = "DONE";
        break;
      case "DONE":
        this.toDoItem.status = "PENDING";
        break;
    }
  }
  public removeItem() {
    // 引数にはカスタムイベント名を
    this.$emit("remove");
  }
}
</script>

<style lang="stylus" scoped>
.todo_container {
  display: flex;
  justify-content: center;

  .name {
    padding-right: 10px;
  }

  .button_status {
    padding-right: 10px;
  }

  .button_remove {
  }
}
</style>
