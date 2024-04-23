<template>
  <div class="root">
    <div class="login">
      <h4>ELADMN 后台管理后台</h4>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="auto"
        class="demo-ruleForm"
        status-icon
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" />
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="ruleForm.code" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)" style="width: 100%">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { loginApi } from '@/api/api'
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<any>({
  username: '',
  password: '',
  code: ''
})

const rules = reactive<FormRules<any>>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid: any, fields: any) => {
    if (valid) {
      loginApi(ruleForm).then((res: any) => {
        console.log(res)
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>
<style scoped lang="scss">
.root {
  width: 100vw;
  height: 100vh;
  background-image: url(../../assets/background.4a692a58.jpeg);
  background-size: 100% 100%;
  position: relative;
  .login {
    padding: 15px;
    width: 385px;
    height: 347px;
    background-color: #fff;
    border-radius: 10px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    h4 {
      padding-bottom: 20px;
    }
  }
}
</style>
