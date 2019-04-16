import Vue from 'vue';
import { Message } from 'ant-design-vue/types/message';
import { Form } from 'ant-design-vue/types/form/form';
import {message, Modal, notification} from 'ant-design-vue';
import VueClipboard from 'vue-clipboard2'

declare module 'vue/types/vue' {
  interface Vue {
    $message: Message;
    $form: Form;
    // @ts-ignore
    $confirm: Modal.confirm,
    // @ts-ignore
    $notification: notification,
    // @ts-ignore
    $info: Modal.info,
    // @ts-ignore
    $success: Modal.success,
    // @ts-ignore
    $error: Modal.error,
    // @ts-ignore
    $warning: Modal.warning,
    // @ts-ignore
    $copyText: (...args)=>Promise,
    // @ts-ignore
    $http:any,
  }
}
