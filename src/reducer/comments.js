import {normalizedComments} from '../fixtures'
import { CREATE_COMMENT } from '../constants'

export default (comments = normalizedComments, action) => {
    const { type, generatedId, payload } = action

    switch (type) {
        case CREATE_COMMENT:
            const comment = {
                ...payload.comment,
                id: generatedId
            }
            console.log(action, comment)
            return comments.concat(comment)
    }

    return comments
}