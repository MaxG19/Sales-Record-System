class Prototype {

    go(route){

        window.location.href = ROUTES[route];

    }

    back(){

        history.back();

    }

    save(key,data){

        localStorage.setItem(
            key,
            JSON.stringify(data)
        );

    }

    get(key){

        return JSON.parse(
            localStorage.getItem(key)
        );

    }

}

window.app = new Prototype();