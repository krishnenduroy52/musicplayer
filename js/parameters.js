let getPerameter = (res) =>{
    let parameter = new URLSearchParams(window.location.search);
    return parameter.get(res);
}
let id = getPerameter("id");