export const state = () => ({
    textediter:'text'
    
});

export const getters = {
    gettext(state) {
        return state.textediter
    }

};

export const mutations = {
    NewtextEditer(state,value){
        state.textediter = value
    }
};

export const actions = {
    acTextEditer(context,value){
        context.commit("NewtextEditer",value)
    }
};