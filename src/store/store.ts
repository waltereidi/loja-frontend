import { Module, createStore } from 'vuex';
import { StoreController } from './Controllers/storeController';
import { EnumMessageType , MessageInterface , StoreConfig , State } from './Entity/store';

const storeController = new StoreController() ; 

const state :State={
  message : [] ,
  appConfig : storeController.getAppConfig() ,
};

const mutations = {
  test(state:State )
  {
    state.appConfig.authorization ='Bearer Token';
  }
};

const getters = {
  getAuthorization(state:State)
  {
    return state.appConfig.authorization;
  }
}

export default createStore({
  state : state , 
  mutations : mutations , 
  getters : getters , 
  
}) ; 
