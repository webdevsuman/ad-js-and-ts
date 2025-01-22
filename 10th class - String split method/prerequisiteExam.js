const a = [[2,4],[5,6]];

const b = a.reduce((acc,cur)=>{
    // console.log(acc,cur);
    let result=0;
    acc.forEach(e => result = result + e);
    cur.forEach(e => result+=e);
    // console.log(result);
    acc=result;
    return acc;
})

console.log(b);