import Vue from 'vue'
import Vuex from 'vuex'

import axios from "./axios-auth";
import globalAxios from "axios";
import router from "./router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userInfo) {
      state.idToken = userInfo.token;
      state.userId = userInfo.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
      state.userId = null;
    }
  },
  actions: {
    setLogoutTimer({commit}, expirationTime) {
      setTimeout(() => {
        commit("clearAuthData");
        router.replace("/signin");
      }, expirationTime * 1000);
    },
    signUp({commit, dispatch}, authData) {
      axios.post('/accounts:signUp?key=AIzaSyA_q140tyqfUOtp9l1f9M2VbDeZDiCDWVo', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)
          dispatch("storeUser", authData);
          dispatch("setLogoutTimer", res.data.expiresIn);
          router.replace("/dashboard");
        })
        .catch(error => console.log(error))
    },
    login({commit, dispatch}, authData) {
        axios.post('/accounts:signInWithPassword?key=AIzaSyA_q140tyqfUOtp9l1f9M2VbDeZDiCDWVo', {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
          dispatch("setLogoutTimer", res.data.expiresIn);
          router.replace("/dashboard");
        })
        .catch(error => console.log(error))
    },
    tryAutoLogin({commit, dispatch}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now >= expirationDate) {
        return
      }
      const userId = localStorage.getItem('userId');
      const expiresIn = (new Date(expirationDate).getTime() - now.getTime()) / 1000;
      commit('authUser', {
        token: token,
        userId: userId
      });
      dispatch("setLogoutTimer", expiresIn);
      router.replace("/dashboard");
    },
    logout({commit}) {
      commit("clearAuthData");
      localStorage.removeItem('expirationDate')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      router.replace("/signin");
    },
    storeUser({commit, state}, userData) {
      if (!state.idToken) {
        return
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
      .catch(error => console.log(error))
    },
    fetchUser({commit, state}) {
      if (!state.idToken) {
        return
      }
      globalAxios.get('/users.json' + '?auth=' + state.idToken)
        .then(res => {
          const data = res.data
          const users = []
          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
          }
          console.log(users)
          commit("storeUser", users[0]);
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    }
  }
})