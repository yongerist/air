<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { login } from '@/api/users'
const form = reactive({
  roomId: '916',
  userId: '123456789123456789'
})
//登录
const onSubmit = async () => {
  //校验表单
  await formRef.value?.validate().catch((err) => {
    ElMessage.error('校验失败')
    throw err
  })
  //登录逻辑
  const res = login()
  console.log(res)
}
//定义表单校验规则
const rules = reactive<FormRules>({
  roomId: [
    { required: true, message: '房间号不能为空', trigger: 'blur' },
    { pattern: /^\d{3}$/, message: '房间号必须是3位数字', trigger: 'blur' }
  ],
  userId: [
    { required: true, message: '身份证号不能为空', trigger: 'blur' },
    { pattern: /^\d{18}$/, message: '身份证号必须是18位数字', trigger: 'blur' }
  ]
})
const formRef = ref<FormInstance>()
</script>

<template>
  <div class="login">
    <el-form
      :model="form"
      :rules="rules"
      label-width="120px"
      ref="formRef"
      label-position="top"
      size="large"
    >
      <h2>登录</h2>
      <el-form-item label="房间号" prop="roomId">
        <el-input v-model="form.roomId" />
      </el-form-item>
      <el-form-item label="身份证号" prop="userId">
        <el-input v-model="form.userId" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.login {
  background-color: #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.el-form {
  width: 300px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  .el-form-item {
    margin-top: 20px;
  }
  .el-button {
    width: 100%;
    margin-top: 30px;
  }
}
</style>
