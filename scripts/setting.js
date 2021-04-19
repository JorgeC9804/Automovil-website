let ID;
const Cars = [
    {
        marca: 'marca1',
        modelo: 'modelo1',
        color: 'color1',
        año: 'año1',
        precio: 'precio1',
        foto: 'https://static.iris.net.co/soho/upload/images/2020/2/10/61074_1.jpg',
        id: 1
    },
    {
        marca: 'marca2',
        modelo: 'modelo2',
        color: 'color2',
        año: 'año2',
        precio: 'precio2',
        foto: 'https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/vision-boost/vb-04-media-hd.jpg.asset.1561373415018.jpg',
        id: 2
    },
    {
        marca: 'marca3',
        modelo: 'modelo3',
        color: 'color3',
        año: 'año3',
        precio: 'precio3',
        foto: 'https://www.bmw.com.co/content/dam/bmw/common/topics/fascination-bmw/concept-vehicles/bmw-vision-m-next/bmw-vision-m-next-mg-exterior-desktop-07.jpg',
        id: 3
    },
    {
        marca: 'marca4',
        modelo: 'modelo4',
        color: 'color4',
        año: 'año4',
        precio: 'precio4',
        foto: 'https://www.bmw.es/content/dam/bmw/common/topics/fascination-bmw/concept-vehicles/bmw-vision-m-next/bmw-vision-m-next-mg-exterior-desktop-03.jpg',
        id: 4
    },
    {
        marca: 'marca5',
        modelo: 'modelo5',
        color: 'color5',
        año: 'año5',
        precio: 'precio5',
        foto: 'https://www.bmw.com.co/content/dam/bmw/common/topics/fascination-bmw/concept-vehicles/bmw-vision-m-next/bmw-vision-m-next-mg-exterior-desktop-05.jpg',
        id: 5
    },
    {
        marca: 'marca6',
        modelo: 'modelo6',
        color: 'color6',
        año: 'año6',
        precio: 'precio6',
        foto: 'https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/vision-boost/vb-05-media-hd.jpg.asset.1561373414562.jpg',
        id: 6
    }
]

function automovil(car) {
    const container = document.getElementById('carsContainer');
    container.innerHTML = '';
    car.forEach(cars => {
        //console.log(cars.id);
        const carContainer = `<div>
                                <div class="label"><!---->
                                    <img src=" ${cars.foto}" alt="" class="car">
                                    <div class="information">
                                        <div class=row>
                                            <div class="information-car">
                                                <div>Marca: ${cars.marca}<!----></div>
                                                <div>Modelo: ${cars.modelo}</div>
                                                <div>Color: ${cars.color}</div>
                                                <div>Año: ${cars.año}</div>
                                                <div>Precio: ${cars.precio}</div>
                                                id: ${cars.id}
                                            </div>
                                        </div>
                                        <div class="btn-edition">
                                            <button class="btn-1-color" onclick="Toggle(${cars.id})">Update</button>
                                            <button class="btn-2-color" onclick="deleteCar(${cars.id})">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                
                              </div>`;
        container.innerHTML +=carContainer;
        ID = cars.id;
    });
}

automovil(Cars);

function deleteCar(id) {
    const index = Cars.findIndex((car) => car.id === id);
    Cars.splice(index, 1);
    UpdateId();
    automovil(Cars);
}

function AddCar() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const año = document.getElementById('año').value;
    const precio = document.getElementById('precio').value;
    const foto = document.getElementById('img').value;
    alert('Add Car');   
    ID = ID+1;
    const car = {
        marca: marca,
        modelo: modelo,
        color: color,
        año: año,
        precio: precio,
        foto: foto,
        id: ID
    }
    Cars.push(car);
    automovil(Cars);
    resetForm();
}

function Toggle(id) {
    const toggle_ = document.getElementById('information-car');
    toggle_.classList.toggle('remove');
    buttonUpdate(id);
}

function Update(id) {
    const index = Cars.findIndex((car) => car.id === id)
    const car_ = Cars[index];
    document.getElementById('marca').value =car_.marca;
    document.getElementById('modelo').value =car_.modelo;
    document.getElementById('color').value =car_.color;
    document.getElementById('año').value =car_.año;
    document.getElementById('precio').value =car_.precio;
    document.getElementById('img').value =car_.foto;
}

function buttonUpdate(id) {
    const update = document.getElementById('edit-car');
    //<button onclick="Update()">Edit Car</button>
    const htmlButton = `<button onclick="updateCar(${id})">Edit Car</button>`;
    update.innerHTML = htmlButton;
    Update(id);
}

function updateCar(id) {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const año = document.getElementById('año').value;
    const precio = document.getElementById('precio').value;
    const foto = document.getElementById('img').value;
    const car = {
        marca: marca,
        modelo: modelo,
        color: color,
        año: año,
        precio: precio,
        foto: foto
    }
    Cars[id-1] = car;
    UpdateId(); 
    automovil(Cars);
    resetForm();
}

function resetForm() {
    document.getElementById('car-form').reset();
}

function UpdateId() {
    let id = 1;
    for(let i=0; i<Cars.length; i++) {
        Cars[i].id = id++; 
    }
}