# Our Team
![Teams](https://img.shields.io/badge/Our%20Team-Kost%20Kita-blueviolet)

<div align='center'>

<img src="assets/teams/IkhsanKhoerul.png" width="128"/>
<img src="assets/teams/ImamFirdaus.png" width="128"/>
<img src="assets/teams/MuhamadTaopik.png" width="128"/>
<img src="assets/teams/NaufalRizqullah.png" width="128"/>

<br>

[![1197050050](https://img.shields.io/badge/050-Ikhsan%20Khoerul-blue)](https://github.com/khoerulih) [![1197050051](https://img.shields.io/badge/051-Imam%20Firdaus-blue)](https://github.com/imamfirdaus-if) [![1197050081](https://img.shields.io/badge/081-Muhamad%20Taopik-blue)](https://github.com/Mr94t3z) [![1197050095](https://img.shields.io/badge/095-Naufal%20Rizqullah-blue)](https://github.com/NaufalRizqullah23)

</div>


# Arsitektur
![Arsitektur](https://img.shields.io/badge/Arsitektur-Kost%20Kita-blueviolet)


![Arsitektur_Assets](assets/arsitektur/v2.png)

# Stacks/Platforms
![Platforms](https://img.shields.io/badge/Platforms-Kost%20Kita-blueviolet)

![Platforms_Assets](assets/platforms/platforms.png)

# Documentation
![Documentation](https://img.shields.io/badge/Documentation-Kost%20Kita-blueviolet)

## Run Application
![Run_Application](https://img.shields.io/badge/Run%20Application-Kost%20Kita-orange)

```
npm run dev
```

### Customer User Interface
![Customer_User_Interface](https://img.shields.io/badge/Customer%20User%20Interface-Kost%20Kita-orange)

![POST_CUSTOMER](assets/services/ui/post-customer.jpeg)

![GET_CUSTOMERS](assets/services/ui/get-customers.jpeg)

### Employee User Interface 
![Employee_User_Interface](https://img.shields.io/badge/Employee%20User%20Interface-Kost%20Kita-orange)

![POST_EMPLOYEE](assets/services/ui/post-employee.jpeg)

![GET_EMPLOYEES](assets/services/ui/get-employees.jpeg)

### Object User Interface
![Object_User_Interface](https://img.shields.io/badge/Object%20User%20Interface-Kost%20Kita-orange)

![POST_OBJECT](assets/services/ui/post-object.jpeg)

![GET_OBJECTS](assets/services/ui/get-objects.jpeg)

## Customer Service
![Customer_Service](https://img.shields.io/badge/Customer%20Service-Kost%20Kita-green)

### Change directory to `customers`
```
cd customers
```

### Install modules
```
npm install
```

### Menjalankan Service
```
nodemon customers.js
```

### PORT
```
http://localhost:3000/
```

### [POST] Customer

`URL:`

```
http://localhost:3000/customer
```

`JSON:`

```
{
    "id_customer":"0003",
    "nama":"Ikhsan Khoerul",
    "telpon":"085156724566",
    "kota":"Bandung"
}
```

![POST_CUSTOMER](assets/services/backend/post-customer.png)

### [GET] Customers

`URL:`

```
http://localhost:3000/customer
```

![GET_CUSTOMERS](assets/services/backend/get-customers.png)

## Employee Service
![Employee_Service](https://img.shields.io/badge/Employee%20Service-Kost%20Kita-green)

### Change directory to `employees`
```
cd employees
```

### Install modules
```
npm install
```

### Menjalankan Service
```
nodemon employees.js
```

### PORT
```
http://localhost:4545/
```

### [POST] Employee

`URL:`

```
http://localhost:4545/employee
```

`JSON:`

```
{
    "employee_name":"MTech",
    "employee_birth_date":"2000-08-22",
    "shift":"Monday",
    "salary":"5000000"
}
```

![POST_EMPLOYEE](assets/services/backend/post-employee.png)

### [GET] Employees

`URL:`

```
http://localhost:4545/employees
```

![GET_EMPLOYEES](assets/services/backend/get-employees.png)

## Object Service
![Object_Service](https://img.shields.io/badge/Object%20Service-Kost%20Kita-green)

### Change directory to `objects`
```
cd objects
```

### Install modules
```
npm install
```

### Menjalankan Service
```
nodemon objects.js
```

### PORT
```
http://localhost:4000/
```

### [POST] Object

`URL:`

```
http://localhost:4000/object
```

`JSON:`

```
{
    "namaKost": "Gayo",
    "hargaSewa": 400000,
    "tipeKost": "Putra"
}
```

![POST_OBJECT](assets/services/backend/post-object.png)

### [GET] Objects

`URL:`

```
http://localhost:4000/object
```

![GET_OBJECTS](assets/services/backend/get-objects.png)

## Order Service
![Order_Service](https://img.shields.io/badge/Order%20Service-Kost%20Kita-green)

### Change directory to `orders`
```
cd orders
```

### Install modules
```
npm install
```

### Menjalankan Service
```
nodemon orders.js
```

### PORT
```
http://localhost:1201/
```

### [POST] Order

`URL:`

```
http://localhost:1201/order
```

`JSON:`

```
{
    "employeeID": "63491a36c4b3090638141c07",
    "customerID": "634911879be9039886b13a12",
    "objectID": "63491a56cd7464256ecf36e0",
    "orderCode": "ORD789"
}
```

![POST_ORDER](assets/services/backend/post-order.png)

### [GET] Orders

`URL:`

```
http://localhost:1201/orders
```

![GET_ORDERS](assets/services/backend/get-orders.png)