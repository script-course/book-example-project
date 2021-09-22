<template>
    <div>
        <input
            type="text"
            :value="value"
            @input="$emit('input', $event.target.value)"
            @keyup.enter="$emit('editable')"
        />
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true,
        },
    },
};
</script>
