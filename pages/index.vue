<template>
  <div class="app_container">
    <div class="button_container">
      <app-input v-model="newToDoName" />
      <button @click="addToDo" :disabled="!newToDoName">ToDoを追加</button>
    </div>
    <div class="todo_container">
      <div v-for="toDo of toDoItems" :key="toDo.createdAt">
        <!-- "toDo"という変数を子コンポーネントに渡している(:がついたら""の中身は変数) -->
        <to-do-item-card :toDoItem="toDo" @remove="removeItem(toDo)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { ToDoItem } from "@/types";
//component
import ToDoItemCard from "@/components/ToDoItemCard.vue";
import AppInput from "~/components/AppInput.vue";

//@Componet~exportの部分全てで、vue-property-decorator式でクラスを定義している
@Component({
  components: {
    ToDoItemCard,
    AppInput,
  },
})
export default class TopPage extends Vue {
  public message = "HELLO WORLD, welcome to STAGE2";
  public toDoItems: ToDoItem[] = [];
  public newToDoName = "";

  public addToDo() {
    if (this.newToDoName) {
      this.toDoItems.push({
        name: this.newToDoName,
        status: "PENDING",
        createdAt: new Date().getTime(),
      });
    }
    this.newToDoName = "";
  }
  public removeItem(toDo: ToDoItem) {
    this.toDoItems = this.toDoItems.filter((item) => item !== toDo);
  }
}
</script>

<!-- scopedで、CSSの影響をこのコンポーネント内部に止めることができる -->
<style lang="stylus" scoped>
.app_container {
  .button_container {
    margin: 100px 0 60px;
    text-align: center;
    width: 100%;
  }
  .todo_container {
    text-align: center;
    width: 100%;
  }
}
</style>
