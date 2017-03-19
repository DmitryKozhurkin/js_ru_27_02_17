import {CHANGE_DATE_RANGE_FILTER} from '../../constants'

export default (state = { from: null, to: null }, action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_DATE_RANGE_FILTER:
            return payload.range

    }

    return state
}