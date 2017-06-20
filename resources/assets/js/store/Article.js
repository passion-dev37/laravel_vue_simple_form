export const UPDATE_ARTICLES_MUTATION = 'UPDATE_ARTICLES_MUTATION'

//todo some getter
//todo some actions
export default {
    //todo ??
    namespaced: false,
    state: {
        articles: [],
        loaded: false,
    },
    mutations: {
        [UPDATE_ARTICLES_MUTATION] (state, articles) {
            state.articles = articles
            state.loaded = true
        }
    },
}