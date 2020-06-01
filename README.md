# DesafioTecnico2Brains

Creado con angular 8 y Ionic 4

##  Server desarrollo

correr `ng serve` y acceder a  `http://localhost:4200/`.

## Despligue productivo

correr los siguientes comandos:

ng build --prod
ngh --no-silent --dir=DesafioTecnico2Brains (el flag --no-silent permite visualizar errores en el despliegue a github en caso de ocurrir)

el despliegue se produce en forma automatica desde la rama gh-pages
en la direccion : https://vegeta86.github.io/DesafioTecnico2Brains


Nota: intente realizar el despliegue en Heroku pero la cuenta gratuita tiene intentos limitados de depliegue,
intente realizar el despligue en Amazon pero este me pedia una tarjeta de credito (la cual no tengo :/ )al crear la cuenta.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
