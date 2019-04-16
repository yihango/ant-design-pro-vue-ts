import Vue from 'vue';
import {getInfo, login, logout} from '@/api/login';
import {ACCESS_TOKEN} from '@/store/mutation-types';
import {welcome} from '@/utils/util';
import ls from 'vue-ls';
import {MutationTree, ActionTree, GetterTree, ActionContext, Module} from 'vuex';
import {RootState} from '@/store/interface';
import {IAppState} from '@/store/modules/app';
const v= Vue as any;

export interface IUserState {
    token: string,
    name: string,
    welcome: string,
    avatar: string,
    roles: any[],
    info: any,
}

const mutations:MutationTree<IUserState> = {
    SET_TOKEN: (state: IUserState, token) => {
        state.token = token;
    },
    SET_NAME: (state: IUserState, {name, welcome}) => {
        state.name = name;
        state.welcome = welcome;
    },
    SET_AVATAR: (state: IUserState, avatar) => {
        state.avatar = avatar;
    },
    SET_ROLES: (state: IUserState, roles) => {
        state.roles = roles;
    },
    SET_INFO: (state: IUserState, info) => {
        state.info = info;
    },
};

const actions:ActionTree<IUserState,RootState> = {
    Login(context:ActionContext<IUserState,RootState>,userInfo){
        return new Promise((resolve, reject) => {
            login(userInfo).then(res => {
                const response:any=res;
                const result = response.result;
                v.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000);
                context.commit('SET_TOKEN', result.token);
                resolve();
            }).catch(error => {
                reject(error);
            });
        });
    },
    GetInfo(context){
        return new Promise((resolve, reject) => {
            getInfo().then(res => {
              const response:any=res;
                const result = response.result;

                if (result.role && result.role.permissions.length > 0) {
                    const role = result.role;
                    role.permissions = result.role.permissions;
                    role.permissions.map(per => {
                        if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                            const action = per.actionEntitySet.map(action => {
                                return action.action;
                            });
                            per.actionList = action;
                        }
                    });
                    role.permissionList = role.permissions.map(permission => {
                        return permission.permissionId;
                    });
                    context.commit('SET_ROLES', result.role);
                    context.commit('SET_INFO', result);
                } else {
                    reject(new Error('getInfo: roles must be a non-null array !'));
                }

                context.commit('SET_NAME', {name: result.name, welcome: welcome()});
                context.commit('SET_AVATAR', result.avatar);

                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },
    Logout(context){
        return new Promise((resolve) => {
            context.commit('SET_TOKEN', '');
            context.commit('SET_ROLES', []);
            v.ls.remove(ACCESS_TOKEN);

            logout().then(() => {
                resolve();
            }).catch(() => {
                resolve();
            });
        });
    }
};


const getters: GetterTree<IUserState, RootState> = {

};

const userState: IUserState = {
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    info: {}
};

const user: Module<IUserState, RootState> = {
    namespaced: false,
    state: userState,
    getters: getters,
    actions: actions,
    mutations: mutations,
};

export default user;
