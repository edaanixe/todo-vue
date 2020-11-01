<template>
    <li :class="{ completed: completed }">
    <div class="form-check">
        <label class="form-check-label">
        <input class="checkbox" type="checkbox" :checked="completed" @click="$emit('resolved', id)" />
        {{title}} <i class="input-helper"></i></label>
    </div>
    <i class="remove fas fa-trash-alt fa-xs" 
    @click="$emit('remove', id)">
    </i>
    </li>  
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    completed: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'N/A'
    },
    id: {
      type: Number,
      default: 0
    },
    onRemove: {
        type: Function
    }
  }
})
</script>