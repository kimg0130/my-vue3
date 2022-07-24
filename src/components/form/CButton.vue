<template>
  <button :disabled="disabled"
          :class="[classNm
                  ,{'is-focus':isFocus}
                  ,{'is-disabled':disabled}
                  ]"
          @blur="handleBlur"
          @click="handleClick"
          @focus="handleFocus">
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(['click','blur','focus'])

const props = defineProps({
  disabled:{type:Boolean, default:false},
  classNm:{type:String, default:'v-input'},
  isError:{type:Boolean, default:false}
})

let isFocus = $ref(false);

function handleClick(e) {
  emit('click',e)
}
function handleBlur(e) {
  isFocus.value = false;
  emit('blur',e)
}
function handleFocus(e) {
  isFocus.value = true;
  emit('focus',e)
}
</script>

<style scoped>
</style>
