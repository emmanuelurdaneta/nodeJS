const _ = require('underscore')

function asyncForLoop(cantIteraciones, callBack, onFinish) {
    if (onFinish === undefined) {
        onFinish = z => {}
    }
    (function innerFunction(iteracionActual) {
        if (cantIteraciones === iteracionActual) {
            onFinish(null)
            return;
        }
        callBack(iteracionActual, () => {
            // next
            setTimeout(()=>{
                innerFunction(iteracionActual+1)
            },0)
        }, (err) => {
            // abort
            onFinish(err)
        })
    })(0)
}

module.exports = asyncForLoop