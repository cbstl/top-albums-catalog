<script setup lang="ts">
    defineProps<{
        title: string;
        artist: string;
    }>();
</script>

<template>
    <div class="card">
        <div class="card-body">
            <div class="card-title">{{ artist }}</div>
            <div class="card-text">
                {{ title }}
            </div>
        </div>
        <br/>
    </div>
</template>

<style scoped>
.card-title {
    font-weight: bold;
}
</style>
