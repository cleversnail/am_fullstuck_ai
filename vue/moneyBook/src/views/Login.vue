<template>
  <div class="login-register">
    <div class="logo">
      <img src="@/assets/logo.png" alt="">
    </div>

    <div class="tab">
      <span v-bind:class="{'active': currentTag === 'login'}" @click="changeTag('login')">登录</span>
      <span v-bind:class="{'active': currentTag === 'register'}" @click="changeTag('register')">注册</span>
    </div>

    <div class="login" v-if="currentTag === 'login'">
      <van-form @submit="onLogin">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>

    </div>

    <div class="register" v-else>
      <van-form @submit="onRegister">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
            v-model="verifyCode"
            type="text"
            name="verifyCode"
            label="验证码"
            placeholder="验证码"
            :rules="[{ required: true, message: '请填写验证码' }]"
          >
            <template #button>
              <verifyImg ref="verifyImgRef" />
            </template>
          </van-field>
        </van-cell-group>
        
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            注册
          </van-button>
        </div>

      </van-form>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import verifyImg from '@/components/verifyCode.vue';
import axios from '@/api/index.js';
import { showSuccessToast } from 'vant';
import { useRouter } from 'vue-router'; 

const username = ref('');
const password = ref('');
const verifyCode = ref('');
const currentTag = ref('login');
const verifyImgRef = ref(null);
const router = useRouter();

const changeTag = (tag) => {
  // console.log(tag);
  currentTag.value = tag;
}


const onRegister = (values) => {
  // console.log('submit', values);
  // console.log(verifyImgRef.value.verifyCode);
  // 发注册的接口请求
  if (values.verifyCode === verifyImgRef.value.verifyCode) {  // 允许注册
    // 将账号和密码发送给后端
    axios.post('/api/user/register', {
      username: values.username,
      password: values.password
    }).then(res => {
      console.log(res);
      showSuccessToast(res.msg)
      currentTag.value = 'login';
    })

  }
};

const onLogin = async(values) => {
  console.log(values);   
  // '/api/user/login'

  const res = await axios.post('/api/user/login', {
    username: values.username,
    password: values.password
  })
  // 保存 token
  localStorage.setItem('token', res.data.token);
  router.push('/home')
  
}
</script>

<style lang="less" scoped>
.logo{
  img{
    margin: 0 auto;
    display: block;
  }
}
.tab{
  display: flex;
  padding: 0.5rem 0.7rem;
  color: rgb(54, 169, 58);
  font-size: 0.5rem;
  font-weight: bold;
  span{
    margin-right: 0.6rem;
    padding: 5px 0;
    &.active{
      border-bottom: 3px solid rgb(54, 169, 58);
      font-size: 0.55rem;
    }
  }
}
</style>