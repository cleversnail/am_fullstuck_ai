<template>
  <van-popup v-model:show="show" position="bottom" round>
    <van-date-picker
      v-model="currentDate"
      title="选择年月"
      :min-date="minDate"
      :max-date="maxDate"
      @cancel="() => show = false"
      :columns-type="columnsType"
      @confirm="selectTime"
    />
  </van-popup>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
const columnsType = ['year', 'month'];
const minDate = new Date(2020, 0)
const maxDate = new Date()
const currentDate = ref([new Date()])

const emits = defineEmits(['handleTime'])
const selectTime = ({selectedValues, selectedOptions, selectedIndexes}) => {
  // console.log(currentDate.value);
  // console.log(selectedValues);
  emits('handleTime', selectedValues);
  show.value = false;
}

defineExpose({
  show
})
</script>

<style lang="less" scoped>

</style>