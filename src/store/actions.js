let actions = {

    getActionsValue(context, playload) {
        setTimeout(function () {
            context.commit("getValue", playload);
        }, 2000)
    }
}

export default actions;