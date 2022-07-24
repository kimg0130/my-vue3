<template>
  <input :type="type"
         :class="[classNm
                  ,{'is-focus':isFocus}
                  ,{'is-error':isError}
                  ,{'is-disabled':disabled}
                  ]"
         :value="modelValue"
         :disabled="disabled"
         @blur="handleBlur"
         @focus="handleFocus"
         @keydown="handleKeydown"
         @keyup="handleKeyup"
         @input="handleInput" />
</template>

<script setup lang="ts">
import {ref, computed, reactive} from "vue";
const emit = defineEmits(['update:modelValue','keydown','keyup','blur','focus'])

const props = defineProps({
  modelValue:{},
  type:{type:String, default:'text'},
  classNm:{type:String, default:'v-input'},
  isError:{type:Boolean, default:false},
  disabled:{type:Boolean, default:false}
})

let isFocus = ref(false);

function handleInput(event: any){
  let val = event.target.value;
  emit("update:modelValue",val)
}
function handleBlur(e: any) {
  isFocus.value = false;
  emit('blur',e)
}
function handleFocus(e: any) {
  isFocus.value = true;
  emit('focus',e)
}
function handleKeyup(e: any) {
  emit("keyup",e.key,e)
}
function handleKeydown(e: any){
  emit("keydown",e.key,e)
}
</script>

<style scoped>
</style>
