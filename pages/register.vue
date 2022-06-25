<template>
  <v-container>
   <v-form
      ref="form"
      v-model="valid"
      lazy-validation
   >
      <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="名前"
      required
      ></v-text-field>

      <v-text-field
      v-model="email"
      :rules="emailRules"
      label="住所"
      required
      ></v-text-field>

      <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="カメラの接続方法"
      required
      ></v-select>

      <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
      ></v-checkbox>

      <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
      >
      Validate
      </v-btn>

      <v-btn
      color="error"
      class="mr-4"
      @click="reset"
      >
      Reset Form
      </v-btn>

      <v-btn
      color="warning"
      @click="resetValidation"
      >
      Reset Validation
      </v-btn>
   </v-form>
   <v-divider />
  </v-container>
</template>

<script lang="ts">
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'ライブカメラ',
        'YOUTUBE的な？'
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<script setup lang="ts">
   const { title } = useArticleTitle()
   onMounted(() => title.value = '登録画面')

   const { data: props } = await useFetch('/api/deal')
</script>