let subs: number | string = '1M';

let apiRequest: 'pending' | 'success' | 'error' = 'pending';
apiRequest= 'success';

const orders = ['23','12', '28','35'];
let cuurentOrder:string | undefined;

for(let order of orders){
    if(order == '23'){
        cuurentOrder = order;
        break;
    }
}
console.log(cuurentOrder);