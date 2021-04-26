# MyTinerary API Documentación

## CIUDADES

## Obtener todas las ciudades
``GET /api/cities``

El correspondiente endpoint nos devolvera el objeto ``answer`` el cual contiene un array de objeto con las diferentes ciudades.

## Agregar una nueva ciudad
``POST /api/cities``

Mediante el correspondiente endpoint podemos agregar ciudades a la base de datos. 

Campos a completar:

| Propiedad | Tipo de valor | Requerido | Descripción |
| :---: | :---: | :---: | :--- |
| `name` | String | true | Nombre de la ciudad a agregar |
| `country` | String | true | País al que pertenece la ciudad |
| `img` | String | true | Nombre del archivo de la imagen |
| `phrase` | String | true | Frase memorable de la ciudad y su autor |
 
El mismo nos devolvera mediante el objeto ``answer`` un objeto el cual sera la ciudad agregada.

Ejemplo de la respuesta con una ciudad:


```
{
  "answer": 
    {
      "_id": "6078fed4f6830e18d80b8c15",
      "name": "Barcelona",
      "country": "Spain",
      "img": "barcelona.jpg",
      "phrase": "“It’s like a dream to come to Spain and stay for a couple of years and get somebody to teach me Spanish music.” – Lenny Kravitz",
      "__v": 0
    }
}

```

## Obtener una ciudad
``GET /api/city/{idCiudad}``

El correspondiente endpoint nos devolvera el objeto ``answer`` el cual contiene un objeto con una ciudad, la cual correspondera al ``id`` que se detalle en la ruta.

## Modificar una ciudad
``PUT /api/city/{idCiudad}``

Mediante este endpoint podemos modificar la ciudad que corresponda al ``id`` ingresado en la ruta.

Se debe enviar en el ``body`` del endpoint la propiedad que se desea modificar, y el nuevo valor.

Por ejemplo, si se desea moficar la propiedad ``name`` de la ciudad utilizada en el ejemplo anterior, la cual era Barcelona, se debe enviar lo siguiente:

```
{
 "name" : "Buenos Aires"
}
```

## Borrar una ciudad
``DELETE /api/city/{idCiudad}``

Mediante este endpoint podemos borrar la ciudad que corresponda al ``id`` ingresado en la ruta, de la base de datos.

El mismo nos devolvera el objeto ``answer`` el cual contiene un objeto con la ciudad borrada.

## ITINERARIOS

## Obtener todos los itinerarios
``GET /api/itineraries``

El correspondiente endpoint nos devolvera el objeto ``response`` el cual contiene un array de objetos con todos los itinerarios.

## Agregar itinerario
``POST /api/itineraries``

Mediante el correspondiente endpoint podemos agregar itinerarios a la base de datos. 

Campos a completar:

| Propiedad | Tipo de valor | Requerido | Descripción | Ejemplo |
| :---: | :---: | :---: | :--- | :--- |
| `title` | String | true | Nombre del itinerario a agregar | `title : Arte en Buenos Aires` |
| `img` | String | true | Imagen de portada del itinerario | `img : artBuenosAires.jpg` |
| `authorName` | String | true | Nombre del autor del itinerario | `authorName : Richard Jackson` |
| `authorPic` | String | true | Enlace con la foto del autor | `authorPic : page.com/imagen008 ` |
| `price` | Number | true | `min: 1`, `max: 5` Valor entre 1 y 5 que representa el precio del itinerario | `price : 3` |
| `duration` | Number | true | `min: 1` Valor minimo 1 que representa en horas el tiempo que dura el itinerario | `duration : 2` |
| `likes` | Number | false | `default: 0` Cantidad de likes que tiene el itinerario | `likes : 2` |
| `hashtags` | Array de Strings | true | `min: 3` Hashtags que describan el itinerario | `hashtags : ["hash1", "hash2", "hash3"]` |
| `comments` | Array de Objetos con dos String | comments true | Enlace con la foto del autor | `[{ username: Maycold, text: "Hola" }]` |
| `usersLike` | Array de Strings | false | Corresponde a los `id` de los usuarios que dieron like | `usersLike : ["id1", "id2"]` |
| `cityId` | ObjectId | true | `id` de la ciudad a la que corresponde el itinerario | `"idCiudadBuenosAires"` |


El mismo nos devolvera mediante el objeto ``response`` un objeto el cual sera el itinerario agregado.

Ejemplo de la respuesta con un nuevo itinerario:

```
{
      "likes": 3,
      "hashtags": [
        "CrazyAllNight",
        "ALotOfBeer",
        "Hangover"
      ],
      "usersLike": [
        "608482457270ce135cfd25585"
      ],
      "_id": "608482457270ce135cfd2618",
      "title": "Night Life",
      "img": "buenosAiresNightLife.jpg",
      "authorName": "Richard Richardson",
      "authorPic": "https://randomuser.me/api/portraits/men/97.jpg",
      "price": 5,
      "duration": 4,
      "comments": [
        {
          "_id": "608482457270ce135cfd2619",
          "username": "Ricardo",
          "text": "Ganas de salir."
        }
      ],
      "cityId": "6078ff17f6830e18d80b8c16",
      "__v": 0
    }
```

## Obtener itinerarios correspondientes a una ciudad
``GET /api/itineraries/{idCiudad}``

Mediante este endpoint podemos obtener los deferentes itinerarios que corresponden a una ciudad en particular, se debe pasar por la ruta del mismo el `id` de la ciudad.

El mismo nos devolvera el objeto ``answer`` el cual contiene un array de objetos con los itenerarios, en el que cada objeto coresponde a un irinerario.

Ejemplo: 

```
"response" : {
  [
    {itinerario1},
    {itinerario2},
    {itinerario3}
  ]
}
```

## Obtener un itinerario en particular
``GET /api/itinerary/{idItinerario}``

El correspondiente endpoint nos devolvera el objeto ``response`` el cual contiene un objeto con un itinerario, el cual corresponde al ``id`` que se detalla en la ruta.

## Modificar un itinerario
``PUT /api/itinerary/{idItinerario}``

Mediante este endpoint podemos modificarel itinerario que corresponda al ``id`` ingresado en la ruta.

Se debe enviar en el ``body`` del endpoint la propiedad que se desea modificar, y el nuevo valor.

Por ejemplo, si se desea moficar la propiedad ``title`` del itineario, se debe enviar lo siguiente:

```
{
 "title" : "Las noches de Buenos Aires"
}
```

El endpoint nos devolvera un objeto ``response`` el cual contiene un objeto con el itinerario completo y su modificación


## Borrar un itinaraio
``DELETE /api/itinerary/{idItinerario}``

Mediante este endpoint podemos borrar un itinerario que corresponda al ``id`` ingresado en la ruta, de la base de datos.

El mismo nos devolvera el objeto ``response`` el cual contiene un objeto con el itinerario borrado.