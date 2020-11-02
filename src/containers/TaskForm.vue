<template>
    <div class="add-items d-flex">
        <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?" v-model="title" />
        <button class="add btn btn-primary font-weight-bold todo-list-add-btn" @click="addTask()" :disabled="!title">
            Add
        </button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: ''
        }
    },
    methods: {

        addTask(){
            this.$emit('add-task', this.title)
            this.title = ''
        }
        
    }
}
</script>