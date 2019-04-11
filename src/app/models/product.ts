export class product{
    constructor(name,email,ingredient,description,age,conservation,price,provider){
        this.name = name
        this.emailProvider = email
        this.provider = provider
        this.ingredientsList = ingredient
        this.description = description
        this.age = age
        this.conservation = conservation
        this.price = price
    }

    name : String
    provider : String
    emailProvider : String
    ingredientsList : String[]
    description : String
    age : number
    conservation : String
    price : number

}

export const listProducts : Array<product> = [new product("BBQ sauce","provider@amazon.com",["tomato","sugar","salt"],"Old school sauce",1,"dark and dry places",10,"SauceKing"),
                                                new product("cheese","cheeselover@milk.com",["milk","salt"],"french cheese",0.5,"dark place",5.5,"Cheesy"),
                                                new product("meat","meatlover@butcher.com",["meat"],"french meat",2,"dry place",1560,"FNSEA"),
                                                new product("cassoulet","cassoulet@iloveit.com",["sausage","white been","BBQ sauce"],"real cassoulet recipe",0.2,"dark place",2.7,"William Saurin"),
                                                new product("crepe","bretagne@best.com",["milk","flour","eggs","sugar"],"typical britanny dish",0.1,"no rules",1,"Mt Saint michel Breton")]
