
const numeromayor=(a)=>{if(a.length ===0)return undefined
    let mayor = a[0]
    for (let i =1 ;i<a.length;i++){
        if (a[i]>mayor){
            mayor = a[i]
        }
    }
    return mayor
}
console.log(numeromayor([5,10,3,0,25,25]))
console.log(numeromayor([]))