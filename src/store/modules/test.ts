import {defineStore} from "pinia";


export const useTest=defineStore("test",{
    state(){
        return {
            testValue:1
        }
    },
    actions:{
        add(){
            this.testValue++;
        }
    },
})