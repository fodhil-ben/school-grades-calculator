let coef = document.getElementsByClassName("coef") 
let emd1 = document.getElementsByClassName("emd1") 
let emd2 = document.getElementsByClassName("emd2")
let td = document.getElementsByClassName("td")
let moy = document.getElementsByClassName("moy")
let mod = document.getElementsByClassName("mod")

let coef_res = document.getElementById("coef_result")
let emd1_res = document.getElementById("emd1_result")
let emd2_res = document.getElementById("emd2_result")
let td_res = document.getElementById("td_result")
let moy_res = document.getElementById("moy_result")

let moy_sum = 0
let submit = document.getElementById("submit")
let average = document.getElementById("average")

submit.addEventListener("click", ()=>{
    let sum_coef = 0
    let sum_emd1 = 0
    let sum_emd2 = 0
    let sum_td = 0
    for (let i = 0; i < td.length; i++){
        sum_coef += parseInt(coef[i].value)
        sum_emd1 += parseInt(emd1[i].value) * parseInt(coef[i].value)
        sum_emd2 += parseInt(emd2[i].value) * parseInt(coef[i].value)
        sum_td += parseInt(td[i].value) * parseInt(coef[i].value)
    }

    // if ((!isNaN(sum_coef)) && (!isNaN(sum_emd1)) && (!isNaN(sum_emd2)) && (!isNaN(sum_td)) ){
        coef_res.value = sum_coef
        emd1_res.value = (sum_emd1 / sum_coef).toFixed(2)
        emd2_res.value = (sum_emd2 / sum_coef).toFixed(2)
        td_res.value = (sum_td / sum_coef).toFixed(2)   
        update_moy()
        moy_sum = calc_moy_sum(moy, coef)
        moy_res.value = (moy_sum / sum_coef).toFixed(2)
        average.innerHTML = moy_res.value
    // }
    // else{
        // for (let j = 0; j < mod.length ; j++){
        //     moy[j].value = 0
        // }
        // coef_res.value = 0
        // emd1_res.value = 0
        // emd2_res.value = 0 
        // td_res.value = 0
    }
// }
)

const update_moy = ()=>{
    for (let j = 0; j < mod.length; j++){
        moy[j].value = calc_moy(mod[j].innerHTML, parseFloat(emd1[j].value), parseFloat(emd2[j].value)
        , parseFloat(td[j].value))
    }
}


function calc_moy(mod, emd1, emd2, td){
    let archi = ["Archi"]
    let systeme = ["Systeme"]
    let mod33 = ["Analyse", "Algebre", "Elec", "Francais", "BW", "Algo"]
    if (systeme.includes(mod)){
        return (emd1 * .25 + emd2 * .25 + td * .5).toFixed(2)
    }
    else if (mod33.includes(mod)){
        return (((emd1 + emd2 + td) / 3).toFixed(2)) 
    }
    else if (archi.includes(mod)){
        return (emd1 * .2 + emd2 *.3 + td *.5)
    }
}
function calc_moy_sum(m, c){
    let sum = 0
    for(i = 0; i<m.length;i++ ){
        sum += m[i].value * c[i].value
    }
    return sum.toFixed(2)
}
