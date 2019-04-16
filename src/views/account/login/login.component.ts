import {Component, Vue } from "vue-property-decorator";
import {Action} from 'vuex-class';
import {get2step, getSmsCaptcha} from '@/api/login';
import {timeFix} from '@/utils/util';
import * as md5 from 'md5';



@Component({
  components: {},
})
export default class LoginComponent extends Vue {

  @Action('Login')
  Login;
  @Action('Logout')
  Logout;

  customActiveKey:string='tab1';
  loginBtn:boolean=false;
  loginType:number=0;
  requiredTwoStepCaptcha=false;
  stepCaptchaVisible=false;
  form:any;

  state={
    time: 60,
    loginBtn: false,
    // login type: 0 email, 1 username, 2 telephone
    loginType: 0,
    smsSendBtn: false
  }

  constructor() {
    super();
  }

  beforeCreate() {
    this.form = this.$form.createForm(this);
  }


  created () {

    get2step({ })
      .then(res => {
        let reponse=res as any;
        this.requiredTwoStepCaptcha = reponse.result.stepCode
      })
      .catch(() => {
        this.requiredTwoStepCaptcha = false
      })
  }


  handleUsernameOrEmail (rule, value, callback) {
    const { state } = this
    const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
    if (regex.test(value)) {
      state.loginType = 0
    } else {
      state.loginType = 1
    }
    callback()
  }

  handleTabClick (key) {
    this.customActiveKey = key
    // this.form.resetFields()
  }

  handleSubmit (e) {
    e.preventDefault()
    const {
      form: { validateFields },
      state,
      customActiveKey,
      Login
    } = this

    state.loginBtn = true

    const validateFieldsKey = customActiveKey === 'tab1' ? ['username', 'password'] : ['mobile', 'captcha']

    validateFields(validateFieldsKey, { force: true }, (err, values) => {
      if (!err) {
        console.log('login form', values)
        const loginParams = { ...values }
        delete loginParams.username
        loginParams[!state.loginType ? 'email' : 'username'] = values.username
        loginParams.password = md5(values.password)
        Login(loginParams)
          .then((res) => this.loginSuccess(res))
          .catch(err => this.requestFailed(err))
          .finally(() => {
            state.loginBtn = false
          })
      } else {
        setTimeout(() => {
          state.loginBtn = false
        }, 600)
      }
    })
  }
  getCaptcha (e) {
    e.preventDefault()
    const { form: { validateFields }, state } = this

    validateFields(['mobile'], { force: true }, (err, values) => {
      if (!err) {
        state.smsSendBtn = true

        const interval = window.setInterval(() => {
          if (state.time-- <= 0) {
            state.time = 60
            state.smsSendBtn = false
            window.clearInterval(interval)
          }
        }, 1000)


        getSmsCaptcha({ mobile: values.mobile }).then(res => {
          let response= res as any;
          setTimeout(()=>{
            this.$message.loading('验证码发送中..', 0)
          }, 2500)
          this.$notification['success']({
            message: '提示',
            description: '验证码获取成功，您的验证码为：' + response.result.captcha,
            duration: 8
          })
        }).catch(err => {
          setTimeout(()=>{
            this.$message.loading('验证码发送中..', 0)
          }, 1)
          clearInterval(interval)
          state.time = 60
          state.smsSendBtn = false
          this.requestFailed(err)
        })
      }
    })
  }
  stepCaptchaSuccess () {
    this.loginSuccess()
  }

  stepCaptchaCancel () {
    this.Logout.then(() => {
      this.loginBtn = false;
      this.stepCaptchaVisible = false;
    })
  }

  loginSuccess (res?:any) {
    console.log(res);

    this.$router.push({ name: 'dashboard' });
    // 延迟 1 秒显示欢迎信息
    setTimeout(() => {
      this.$notification.success({
        message: '欢迎',
        description: `${timeFix()}，欢迎回来`
      })
    }, 1000)
  }
  requestFailed (err) {
    this.$notification['error']({
      message: '错误',
      description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
      duration: 4
    })
  }

}
