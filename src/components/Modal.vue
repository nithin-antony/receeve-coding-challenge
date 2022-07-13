<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-header">
        <div>
          <h2>{{ header }}</h2>
        </div>
        <button type="button" class="btn-close" @click="onClose">
          <span class="icon"><font-awesome-icon icon="xmark"/></span>
        </button>
      </div>
      <div v-if="content" class="modal-body">
        <div>{{ content }}</div>
      </div>
      <div class="modal-footer">
        <button
          v-if="closeButton"
          type="button"
          class="btn btn-secondary"
          @click="onClose"
        >
          Close
        </button>
        <button
          v-if="okButton"
          type="button"
          class="btn btn-primary"
          @click="onOk"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
@Component
export default class Modal extends Vue {
  @Prop({ default: "Modal" }) readonly header!: string;
  @Prop() readonly content!: string;
  @Prop({ default: false })
  readonly okButton!: boolean;
  @Prop({ default: false })
  readonly closeButton!: boolean;
  @Emit("onClose")
  onClose() {
    return true;
  }
  @Emit("onOk")
  onOk() {
    return true;
  }
}
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  height: auto;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  justify-content: space-between;
}

.modal-footer {
  flex-direction: row;
  justify-content: space-between;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}

.btn-close:hover {
  color: #cf2e2e;
}

.modal .btn {
  height: 35px;
  width: 100px;
  color: white;
  border-radius: 2px;
  font-weight: bold;
}
.btn:hover {
  cursor: pointer;
}

.btn.btn-primary {
  background: #3c6ad2;
  border: 1px solid #3c6ad2;
  /* 205adf */
}

.btn.btn-secondary {
  background: #7d7d7d;
  border: 1px solid #7d7d7d;
}
.btn.btn-secondary:hover {
  background: #636363;
}

.btn.btn-primary:hover {
  background: #205adf;
}
</style>
