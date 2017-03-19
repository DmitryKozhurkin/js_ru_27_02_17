import {INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE_FILTER, CHANGE_ARTICLES_SELECT_FILTER} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}


export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeDateRange(range) {
    return {
        type: CHANGE_DATE_RANGE_FILTER,
        payload: { range }
    }
}

export function changeArticlesSelect(ids) {
    return {
        type: CHANGE_ARTICLES_SELECT_FILTER,
        payload: { ids }
    }
}