function muestroEncapsulamiento() {
    let v = 0
    return function(){
        return v++
    }
}