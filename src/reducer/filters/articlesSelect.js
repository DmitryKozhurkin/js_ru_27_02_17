import {CHANGE_ARTICLES_SELECT_FILTER} from '../../constants'

export default (state = [], action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_ARTICLES_SELECT_FILTER:
            return payload.ids

    }

    return state
}