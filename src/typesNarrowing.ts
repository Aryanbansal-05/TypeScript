function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `making ${kind} chai...`
    }
    return `chai order ${kind}`
}
console.log(getChai('ginger'));
console.log(getChai(42));



function orderChai(size:'small'| 'medium' | 'large' | number){
    if(size === 'small'){
        return `small cutting chai`;
    }
    if(size === 'medium' || size === 'large'){
        return `Some extra chai`;
    }
    return `chai order #${size}`;
}
console.log(orderChai('medium'));
console.log(orderChai(43));



class khulhadChai{
    serve(){
        return `serve kulhad chai!!`;
    }
}
class cuttingChai{
    serve(){
        return`serve cutting chai!!`;
    }
}
function serve(chai: khulhadChai | cuttingChai){
    if(chai instanceof khulhadChai){
        return chai.serve();
    }
}
const k = new khulhadChai();
const c = new cuttingChai();
console.log(serve(c));




type chaiOrder = {
    type:string
    sugar: number
}
function ischaiOrder(obj:any):obj is chaiOrder{
    return(
        typeof obj === "object" && 
        obj !=null && 
        typeof obj.type === 'string' && 
        typeof obj.sugar === 'number'
    )
}
function serveOrder(item: chaiOrder | string){
        if(ischaiOrder(item)){
            return `serving ${item.type} with ${item.sugar} spoon sugar...`
        }
        return `serving ${item} custom chai...`;
}
console.log(serveOrder({
    type:"masala chai",
    sugar:2
}));
console.log(serveOrder("ginger lemon"));



type masalaChai = {type : "masala", spiceLevel:number};
type gingerChai = {type : "ginger", spiceLevel:number};
type adrakChai = {type : "adrak", spiceLevel:number};

type chai = masalaChai | gingerChai | adrakChai;

function MakeChai(order : chai){
    switch (order.type) {
        case 'masala':
            return `Masala Chai with ${order.spiceLevel} spiceLevel...`
            break;
        case 'ginger':
            return `Ginger Chai with ${order.spiceLevel} spiceLevel...`
            break;
        case 'adrak':
            return `Adrak Chai with ${order.spiceLevel} spiceLevel...`
            break;
    
        default:
            return `Normal chai...`
            break;
    }
}
console.log(MakeChai({type:"masala", spiceLevel:3}));
console.log(MakeChai({type:"ginger", spiceLevel:3}));
console.log(MakeChai({type:"adrak", spiceLevel:3}));






