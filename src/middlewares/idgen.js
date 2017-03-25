let cnt = 0;

export default store => next => action => {
	if (action.generateId) {
		action = {
			...action,
			generatedId: Date.now() + Math.random()
		}
		return next(action);
	}
   
   next(action);
}