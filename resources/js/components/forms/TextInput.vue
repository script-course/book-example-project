<template>
    <div>
        <input
            type="text"
            :value="value"
            v-on:input="$emit('input', $event.target.value)"
            v-on:keyup.enter="$emit('editable')"
        />
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String
        },
        editable: {
            type: String
        }
    }
};
</script>
