<template>
  <div
    class="has-validation"
  >
    <slot
      name="prepend"
    />
    <slot>
      <div
        class="form-check"
        :class="{
          'form-switch': type === 'switch'
        }"
      >
        <input
          :id="id"
          ref="inputRef"
          type="checkbox"
          :readonly="readonly"
          :disabled="disabled"
          :placeholder="placeholder"
          :value="modelValue"
          :checked="isChecked"
          class="form-check-input"
          :class="{
            'is-invalid': errorMessage,
            'form-control-sm': size === 'sm',
            'form-control-lg': size === 'lg',
          }"
          @change="onChange"
        >
        <label
          v-if="label"
          :for="id"
        >
          {{ label }}
        </label>
      </div>
    </slot>
    <slot
      name="append"
    />
    <div class="invalid-feedback">
      {{ errorMessage }}
    </div>
  </div>
</template>
<script
    lang="ts"
>
export default {
  name: 'CCheckInput',
}
</script>
<script setup lang="ts">
import { computed, defineEmits, defineProps, getCurrentInstance, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { BFormProvideKey } from '@/components/commons/Form/types'
import { InputRuleType } from '@/types/commons/components/form'
import { validate } from '@/utils/bootstrap/validate'

const props = defineProps({
  id: {
    type: String,
    required: true,
    default: ''
  },
  type: {
    type: String,
    required: false,
    default: 'switch'
  },
  placeholder: {
    type: String,
    required: false,
    default: ''
  },
  label: {
    type: String,
    required: false,
    default: ''
  },
  readonly: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  size: {
    type: String,
    required: false,
    default: ''
  },
  rules: {
    type: Array,
    required: false,
    default: () => []
  },
  modelValue: {
    type: [Boolean, Object],
    required: false,
  },
})

const emits = defineEmits(['update:modelValue'])

const errorMessage = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

const isChecked = computed(() => !!props.modelValue)

const form = inject(BFormProvideKey)

onMounted(() => {
  const instance = getCurrentInstance()
  if (instance && form)
    form.register({ inputValidate, uid: instance.uid } as InstanceType<any>)
})

onBeforeUnmount(() => {
  const instance = getCurrentInstance()
  if (instance && form)
    form.unregister(instance.uid)
})

// @TODO: Event 변경
const onChange = (event: any) => {
  if (event.target) {
    const element = event.target as HTMLInputElement
    inputValidate(element.checked)
    emits('update:modelValue', element.checked)
  }
}

const inputValidate = (value = props.modelValue) => {
  const result = validate(value, props.rules as Array<InputRuleType>)

  if (typeof result === 'string') {
    errorMessage.value = result
  } else {
    errorMessage.value = result ? '' : 'invalid'
  }

  return result
}

const focus = () => {
  if (inputRef.value)
    inputRef.value.focus()
}

</script>
