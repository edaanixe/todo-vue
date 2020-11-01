<template>
    <div class="add-items d-flex">
        <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?" v-model="taskTitle" />
        <button class="add btn btn-primary font-weight-bold todo-list-add-btn" @click="$emit('add-task')">
            Add
        </button>
    </div>
</template>