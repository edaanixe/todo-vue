<template>
    <div class="list-wrapper">
        <ul class="d-flex flex-column-reverse todo-list">
            <slot></slot>          
        </ul>
      </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    props: ['tasks']
})
</script>