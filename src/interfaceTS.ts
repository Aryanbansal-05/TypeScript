type chaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function makeChai(order: chaiOrder){
    console.log(order);
}
function serveChai(order: chaiOrder){
    console.log(order);
} 

type TeaRecipe = {
    water: number;
    milk: number
}
class MasalaChai implements TeaRecipe{
        water= 100;
        milk= 50;
}

interface cupSize{
    size:"small" | "large";
}
class Chai implements cupSize{
    size: "small" | "large" = "large";
}

type baseChai = {teaLeaves: number};
type extra = {masala: number};

type normalChai = baseChai & extra;
const cup: normalChai={
    teaLeaves:2,
    masala:1
}

type user = {
    username : string;
    bio?: string;
}
const u1 : user = {username:"Aryan"};
const u2: user = {username:"Aryan", bio:"i am the winner"};

type Config = {
    readonly appName: string
    version: number;
}

const cfg: Config = {
    appName:"masterji",
    version:1
}

// cfg.appName = "bansicode";