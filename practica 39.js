/*
    <!--
<--esta es la practica dos--">
<!DOCTYPE html>
<html>
    <head>
        <title>practica 2</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <script>
            document.write('Breilan')
            document.write('<br>')
            document.write('17')
        </script>
    </body>
</html>
<'!--esta es la practica tres--">
<!DOCTYPE html>
<html>
    <head>
        <title>practica 3</title>
    </head>
    <body>
        <script>
            var empleado='Juan perez'
            var sueldo=1250
            document.write('Empleado: ' + $empleado)
            document.write('<br>')
            document.write('Sueldo: ' + $sueldo)
        </script>
    </body>
</html>
--'>
<'--esta es la practica cuatro--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 4</title>
    </head>
    <body>
        <script>
            var nombre_usuario=prompt("Escriba su nombre de usuario:")
            var mail=prompt("Escriba su mail:")
        </script>
        <script>
            document.write(nombre_usuario)
            document.write('<br>')
            document.write(mail)
        </script>
    </body>
</html>
--'>
<'--esta es la practica cinco--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 5</title>
    </head>
    <body>
        <h1>problema 1</h1>
        <script>
            var lado=prompt("Intrducir el lado de un cuadrado: (problema 1)")
            document.write("el perimetro es igual a: "+lado*4)
        </script>
        <h1>problema 2</h1>
        <script>
            var n1=prompt("Introducir primer numero: (problema 2)")
            var n2=prompt("Introducir segundo numero: (problema 2)")
            var n3=prompt("Introducir tercer numero: (problema 2)")
            var n4=prompt("Introducir cuarto numero: (problema 2)")
            var suma= parseInt(n1)+parseInt(n2)
            var producto= n3*n4;
            document.write("La suma del primer y segundo numero son: " + suma)
            document.write('<br>')
            document.write("El producto del tercer y caurto numero es: " + producto)
        </script>
        <h1>problema 3</h1>
        <script>
            var v1=prompt("Introducir valor 1: (problema 3)")
            var v2=prompt("Introducir valor 2: (problema 3)")
            var v3=prompt("Introducir valor 3: (problema 3)")
            var v4=prompt("Introducir valor 4: (problema 3)")
            var sum=parseInt(v1) + parseInt(v2) + parseInt(v3) + parseInt(v4)
            var pro=v1*v2*v3*v4
            document.write("la suma de los numeros es: " + sum)
            document.write('<br>')
            document.write("el producto de los numeros es: " + pro)
        </script>
        <h1>problema 4</h1>
        <script>
            var precio=parseInt(prompt("Escriba el precio del producto: (problema 4)"))
            var cantidad=prompt("escriba la cantad del articulo: (problema 4)")
            document.write("El comprador debe abonar: " + precio*cantidad)
        </script>
    </body>
</html>
-->
<!--esta es la practica 6--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 6</title>
    </head>
    <body>
        <h1>problema 1</h1>
        <script>
            var no1=parseInt(prompt("Escriba la primera nota: (problema 1)"))
            var no2=parseInt(prompt("Escriba la segunda nota: (problema 1)"))
            var no3=parseInt(prompt("Escriba la tercera nota: (problema 1)"))
            var promedio=parseInt((no1+no2+no3)/3)
            if (promedio>=7)
            {
                document.write("Promocionado")
            }
        </script>
        <h1>problema 2</h1>
        <script>
            var clave=prompt("Escriba su clave: (problema 2)")
            var repet=prompt("Repita su clave: (problema 2)")
            if (clave==repet)
            {
                document.write("son iguales")
            }
        </script>
    </body>
</html>
-->
<!--esta es la practica 7--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 7</title>
    </head>
    <body>
        <h1>problema 1</h1>
        <script>
            var nu1=parseInt(prompt("Escriba el primer numero: (problema 1)"))
            var nu2=parseInt(prompt("Escriba el segundo numero: (problema 1)"))
            if (nu1>nu2)
            {
                var suma=nu1+nu2
                var resta=nu1-nu2
                document.write("la suma es: " + suma)
                document.write('<br>')
                document.write("la resta es: " + resta)
            }
            else
            {
                var producto=nu1*nu2
                var division=nu1/nu2
                document.write("la mulriplicacion es: " + producto)
                document.write("<br>")
                document.write("la division es: " + division)
            }
        </script>
        <h1>problema 2</h1>
        <script>
            var no1=parseInt(prompt("Escriba la primera nota: (problema 2)"))
            var no2=parseInt(prompt("Escriba la segunda nota: (problema 2)"))
            var no3=parseInt(prompt("Escriba la tercera nota: (problema 2)"))
            var promedio=parseInt((no1+no2+no3)/3)
            if (promedio>=4)
            {
                document.write("regular")
            }
            else
            {
                document.write("reprobado")
            }
        </script>
        <h1>problema 3</h1>
        <script>
            var va=parseInt(prompt("Escriba un numero: (problema 3)"))
            if (va<10)
            {
                document.write("el numero tiene un digito")
            }
            else
            {
                document.write("el numero tiene dos digitos")
            }
        </script>
    </body>
</html>
-->
<!--esta es la practica 8--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 8</title>
    </head>
    <body>
        <h1>problema 1</h1>
        <script>
            var a=parseInt(prompt("Escriba un numero: (problema 1)"))
            var b=parseInt(prompt("Escriba otro numero: (problema 1)"))
            var c=parseInt(prompt("Escriba otro numero mas: (problema 1)"))
            if(a>b && a>c)
            {
                document.write(a + " es el mayor")
            }
            else if (b>c)
            {
                document.write(b + " es el mayor")
            }
            else
            {
                document.write(c + " es el mayor")
            }
        </script>
        <h1>problema 2</h1>
        <script>
            var x=parseInt(prompt("Escriba un numero: (problema 2)"))
            if (x==0)
            {
                document.write("el numero es cero")
            }
            else if (x<0)
            {
                document.write("el numero es negativo")
            }
            else
            {
                document.write("el numero es positivo")
            }
        </script>
        <h1>problema 3</h1>
        <script>
            var y=parseInt(prompt("Introduzca un numero: (problema 3)"))
            if (y<10)
            {
                document.write("el numero tiene un digito")
            }
            else if (y>=10 && y<100)
            {
                document.write("el numero tiene dos digito")
            }
            else
            {
                document.write("el numero tiene tres digito")
            }
        </script>
        <h1>problema 4</h1>
        <script>
            var nombre=prompt("escriba su nombre: (problema 4)")
            var total=parseInt(prompt("Introduzca el total de preguntas: (problema 4)"))
            var cor=parseInt(prompt("escriba la cantidad de preguntas respondidas correctamente: (problema 4)"))
            var porcentaje=(cor*100)/total
            if (porcentaje>=90)
            {
                document.write(nombre + " es Nivel superior")
            }
            else if (porcentaje>=75 && porcentaje<90)
            {
                document.write(nombre + " es Nivel medio")
            }
            else if (porcentaje>=50 && porcentaje<75)
            {
                document.write(nombre + " es Nivel regular")
            }
            else
            {
                document.write(nombre + " esta Fuera de nivel")
            }
        </script>
    </body>
</html>
-->
<!--esta es la practica 9--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 9</title>
    </head>
    <body>
        <h1>problema 1</h1>
        <script>
            var dia=parseInt(prompt("Introduzca un dia: (problema 1)"))
            var mes=parseInt(prompt("Introduzca un mes: (problema 1)"))
            var ano=parseInt(prompt("Introduzca un ano: (problema 1)"))
            if (dia==25 && mes==12)
            {
                document.write("Es navidad");
            }
            else
            {
                document.write("no es navidad");
            }
        </script>
        <h1>problema 2</h1>
        <script>
            var x=parseInt(prompt("escriba un numero: (problema 2)"))
            var y=parseInt(prompt("escriba otro numero: (problema 2)"))
            var z=parseInt(prompt("escribe un numero mas: (problema 2)"))
            if (x==y && y==z)
            {
                document.write((x+y)*z);
            }
            else
            {
                document.write("no son iguales")
            }
        </script>
        <h1>problema 3</h1>
        <script>
            var a=parseInt(prompt("introduzca un numero: (problema 3)"))
            var b=parseInt(prompt("introduzca otro numero: (problema 3)"))
            var c=parseInt(prompt("introduzca un numero mas: (problema 3)"))
            if (a<10 && b<10 && c<10)
            {
                document.write("Todos los números son menores a diez")
            }
            else
            {
                document.write("No todos los números son menores a diez")
            }
        </script>
        <h1>problema 4</h1>
        <script>
            var ho=parseInt(prompt("introduzca x: (problema 4)"))
            var ver=parseInt(prompt("introduzaca y: (problema 4)"))
            if (ho>0 && ver>0)
            {
                document.write("primer cuadrante")
            }
            else if (ho<0 && ver>0)
            {
                document.write("segundo cuadrante")
            }
            else if (ho<0 && ver<0)
            {
                document.write("tercer cuadrante")
            }
            else if (ho>0 && ver<0)
            {
                document.write("cuarto cuadrante")
            }
        </script>
        <h1>problema 5</h1>
        <script>
            var sueldo=parseInt(prompt("introduzca el sueldo del empleado: (problema 5)"))
            var vejez=parseInt(prompt("introduzca los años de antigüedad: (problema 5)"))
            if (sueldo<500 && vejez>=10)
            {
                document.write(sueldo+((20*sueldo)/100))
            }
            else if (sueldo<500 && vejez<10)
            {
                document.write(sueldo+((5*sueldo)/100))
            }
            else if (sueldo>=500)
            {
                document.write(sueldo)
            }
        </script>
    </body>
</html>
-->
<!--esta es la practica 10--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 10</title>
    </head>
    <body>
        <script>
            var a=parseInt(prompt("introduzca un numero:"))
            var b=parseInt(prompt("introduzca otro numero:"))
            var c=parseInt(prompt("introduzaca otro numero:"))
            if (a<10 || b<10 || c<10)
            {
                document.write("Alguno de los números es menor a diez")
            }
            else
            {
                document.write("ninguno es menor que 10")
            }
        </script>
    </body>
</html>
-->
<!--esta es la practica 13--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 12</title>
    </head>
    <body>
        <h1>problema 1</h1>
        <script>
            var x=11
            var c=0
            while (c<25)
            {
                document.write(x + "<br>")
                x+=11;
                c++
            }
        </script>
        <h1>problema 2</h1>
        <script>
            var y=8
            while(y<=500)
            {
                document.write(y + "<br>")
                y+=8
            }
        </script>
    </body>
</html>
-->
<!--esta es la practica 13--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 13</title>
    </head>
    <body>
        <h1>problema 1</h1>
        <script>
            var v=1
            var c=0
            var co=0
            while(v<=10)
            {
                var n1=parseInt(prompt("Introduce la nota " + v + ": (problema 1)"))
                if (n1>=7)
                {
                    c++
                }
                else
                {
                    co++
                }
                v++
            }
            document.write("la cantidad de alumnos que sacaron 7 o mas es: " + c)
            document.write('<br>')
            document.write("la cantidad de alumnos que sacaron menos de 7 es: " + co)
        </script>
        <h1>problema 2</h1>
        <script>
            var v=1
            var h=0
            while(v<=5)
            {
                var al=parseInt(prompt("ingrese altura " + v + ": (problema 2)"))
                h+=al
                v++
            }
            document.write("la altura promedio es: " + h/5)
        </script>
        <h1>problema 3</h1>
        <script>
            var v=1
            var po=0
            var ri=0
            var gas=0
            while (v<=5)
            {
                var em=parseInt(prompt("ingrese sueldo de empleado " + v + ": (problema 3)"))
                gas+=em
                if (em>=100 && em<=300)
                {
                    po++
                }
                else if (em>300)
                {
                    ri++
                }
                v++
            }
            document.write("hay " + po + " empleados que ganan entre 100 y 300")
            document.write('<br>')
            document.write("hay " + ri + " empleados que ganan mas de 300")
            document.write('<br>')
            document.write("la empresa gasta " + gas + " en el sueldo de los empleados")
        </script>
        <h1>problema 4</h1>
        <script>
            var v=0
            var nu=5
            while (v<20)
            {
                document.write(nu + "-")
                nu+=5
                v++
            }
        </script>
        <h1>problema 5</h1>
        <script>
            var nu=10
            while (nu<=1500)
            {
                document.write(nu + "-")
                nu+=10
            }
        </script>
        <h1>problema 6</h1>
        <script>
            var v=1
            var l1=0
            var l2=0
            while (v<=3)
            {
                var li=parseInt(prompt("ingrese elemento " + v + " de la lista 1: (problema 6)"))
                l1+=li
                v++
            }
            v=1
            while (v<=3)
            {
                var li=parseInt(prompt("ingrese elemento " + v + " de la lista 2: (problema 6"))
                l2+=li
                v++
            }
            if (l1>l2)
            {
                document.write("lista 1 mayor")
            }
            else if (l2>l1)
            {
                document.write("lista 2 mayor")
            }
            else
            {
                document.write("ambas listas estan iguales")
            }
        </script>
        <h1>problema 7</h1>
        <script>
            var v=1
            var par=0
            var impar=0
            while (v<=5)
            {
                var nu=parseInt(prompt("Introduce numero " + v + " : (problema 7)"))
                if (nu%2==0)
                {
                    par++
                }
                else
                {
                    impar++
                }
                v++
            }
            document.write("hay " + par + " numeros pares")
            document.write("<br>")
            document.write("hay " + impar + " numeros impares")
        </script>
    </body>
</html>
-->
<!--esta es la practica 14--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 14</title>
    </head>
    <body>
        <h1>problema 1</h1>
        <script>
            var su=0
            var nu
            do
            {
                nu=parseInt(prompt("Introduce un numero: (problema 1)"))
                if(nu!=9999)
                {
                    su+=nu
                }
            }while(nu!=9999)
            if (su==0)
            {
                document.write(su + " es igual a cero")
            }
            else if (su>0)
            {
                document.write(su + " es mayor que cero")
            }
            else
            {
                document.write(su + " es menor que cero")
            }
        </script>
        <h1>problema 2</h1>
        <script>
            var nu
            var nombre
            var saldo
            var c=0
            do
            {
                nu=parseInt(prompt("escriba el numero de cuenta: (problema 2)"))
                nombre=prompt("escriba el nombre del cliente: (problema 2)")
                saldo=parseInt(prompt("escriba el saldo del cliente: (problema 2)"))
                if (saldo>0 && nu>0)
                {
                    var es="acreedor"
                    c+=saldo
                }
                else if (saldo<0 && nu>0)
                {
                    var es="deudor"
                }
                else
                {
                    var es="nulo"
                }
                if (nu>0)
                {
                    document.write(nu + " " + nombre + " " + es)
                    document.write('<br>')
                }
            }while(nu>0)
            document.write("el saldo total de los acreedores es: " + c)
        </script>
        <h1>problema 3</h1>
        <script>
            var doc
            var edad
            var sexo
            var total=0
            var hombres=0
            var mujeres=0
            var adultos=0
            do
            {
                doc=parseInt(prompt("introduzca numero de documento: (problema 3)"))
                edad=parseInt(prompt("introduzca edad: (problema 3)"))
                sexo=prompt("introduzca sexo: (problema 3)")
                if (doc!=0)
                {
                    total++
                    if (sexo=='femenino')
                    {
                        mujeres++
                    }
                    else if (sexo=='masculino')
                    {
                        hombres++
                        if (edad>=16 && edad<=65)
                        {
                            adultos++
                        }
                    }
                }
            }while(doc!=0)
            document.write("Cantidad total de personas censadas: " + total)
            document.write('<br>')
            document.write("Cantidad de varones: " + hombres)
            document.write('<br>')
            document.write("Cantidad de mujeres: " + mujeres)
            document.write('<br>')
            document.write("Cantidad de varones cuya edad varía entre 16 y 65 años: " + adultos)
        </script>
    </body>
</html>
-->
<!--esta es la practica 15--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 15</title>
    </head>
    <body>
        <h1>problema 1</h1>
        <script>
            var tri=0
            for(var i=1;i<=3;i++)
            {
                var base = parseInt(prompt("introduzca base del triangulo " + i + ": (problema 1)"))
                var altura = parseInt(prompt("introduzca altura del triangulo " + i + ": (problema 1)"))
                var superficie=(base*altura)/2
                if (superficie>12)
                {
                    tri++
                }
                document.write("la base del tiangulo " + i + ": " + base)
                document.write('<br>')
                document.write("la altura del triangulo " + i + ": " + altura)
                document.write('<br>')
                document.write("la superficie del triangulo " + i + ": " + superficie)
                document.write('<br>')
            }
            document.write("la cantidad de triangulos cuya superficie es mayor que 12: " + tri)
        </script>
        <h1>problema 2</h1>
        <script>
            var total=0
            for (var i=1;i<=10;i++)
            {
                var nu=parseInt(prompt("introduzca numero " + i + ": (problema 2)"))
                if (i>5)
                {
                    total+=nu
                }
            }
            document.write("la suma de los ultimos cinco numeros es: " + total)
        </script>
        <h1>problema 3</h1>
        <script>
            for (var i=1;i<=10;i++)
            {
                document.write(5*i + '-')
            }
        </script>
        <h1>problema 4</h1>
        <script>
            var mu=parseInt(prompt("especifique la tabla de multiplicacion: (problema 4)"))
            for (var i=1;i<=12;i++)
            {
                document.write(mu*i + '-')
            }
        </script>
        <h1>problema 5</h1>
        <script>
            var equi=0
            var iso=0
            var esca=0
            for(var i=1;i<=4;i++)
            {
                var lado1=parseInt(prompt("escriba la medida del lado 1 del triangulo " + i + ": (problema 5)"))
                var lado2=parseInt(prompt("escriba la medida del lado 2 del triangulo " + i + ": (problema 5)"))
                var lado3=parseInt(prompt("escriba la medida del lado 3 del triangulo " + i + ": (problema 5)"))
                if (lado1==lado2 && lado2==lado3)
                {
                    equi++
                }
                else if (lado1==lado2 || lado1==lado3)
                {
                    iso++
                }
                else
                {
                    esca++
                }
            }
            document.write("cantidad de equilateros: " + equi)
            document.write("<br>")
            document.write("cantidad de isosceles: " + iso)
            document.write('<br>')
            document.write("cantidad de escalenos: " + esca)
            document.write("<br>")
            if (equi<iso && equi<esca)
            {
                document.write("el tipo de triangulo de menor cantidad es: equilatero")
            }
            else if (iso<esca)
            {
                document.write("el tipo de triangulo de menor cantidad es: isoseles")
            }
            else
            {
                document.write("el tipo de triangulo de menor cantidad es: escaleno")
            }
        </script>
        <h1>problema 6</h1>
        <script>
            var v=parseInt(prompt("indique la cantidad de coordenadas: (problema 6)"))
            var p=0
            var s=0
            var t=0
            var c=0
            for(var i=1;i<=v;i++)
            {
                var x=parseInt(prompt("introduzca x " + i + ": (problema 6)"))
                var y=parseInt(prompt("introduzca y " + i + ": (problema 6)"))
                if (x>0 && y>0)
                {
                    p++
                }
                else if (x<0 && y>0)
                {
                    s++
                }
                else if (x<0 && y<0)
                {
                    t++
                }
                else if (x>0 && y<0)
                {
                    c++
                }
            }
            document.write("puntos en el primer cuadrante: " + p)
            document.write('<br>')
            document.write("puntos en el segundo cuadrante: " + s)
            document.write('<br>')
            document.write("puntos en el tercer cuadrante: " + t)
            document.write('<br>')
            document.write("puntos en el cuarto cuadrante: " + c)
        </script>
        <h1>problema 7</h1>
        <script>
            var po=0
            var ne=0
            var m15=0
            var par=0
            for (var i=1;i<=10;i++)
            {
                var nu=parseInt(prompt("introduce numero " + i + ": (problema 7)"))
                if (nu>=0)
                {
                    po++
                }
                else
                {
                    ne++
                }
                if(nu%15==0)
                {
                    m15++
                }
                if(nu%2==0)
                {
                    par+=nu
                }
            }
            document.write('la cantidad de numeros negativos es: ' + ne)
            document.write('<br>')
            document.write('la cantidad de numeros positivos es: ' + po)
            document.write('<br>')
            document.write('la cantidad de numeros multiplos de 15 es: ' + m15)
            document.write('<br>')
            document.write('la cantidad acumulativa de los numeros pares es: ' + par)
        </script>
        <h1>problema 8</h1>
        <script>
            var tom=0
            var tot=0
            var ton=0
            for (var i=1;i<=5;i++)
            {
                var es=parseInt(prompt("introduzca edad de estudiante " + i + " del turno de mañana: (problema 8)"))
                tom+=es
            }
            tom/=5
            for (var i=1;i<=6;i++)
            {
                var es=parseInt(prompt("introduzca edad de estudiante " + i + " del turno de tarde: (problema 8)"))
                tot+=es
            }
            tot/=6
            for (var i=1;i<=11;i++)
            {
                var es=parseInt(prompt("introduzca edad de estudiante " + i + " del turno de noche: (problema 8)"))
                ton+=es
            }
            ton/=11
            document.write("el promedio de edad del turno de manaña es: " + tom)
            document.write('<br>')
            document.write("el promedio de edad del turno de tarde es: " + tot)
            document.write('<br>')
            document.write("el promedio de edad del turno de noche es: " + ton)
            document.write('<br>')
            if (tom>tot && tom>ton)
            {
                document.write('el mayor promedio de edad es: ' + tom)
            }
            else if (tot>ton)
            {
                document.write('el mayor promedio de edad es: ' + tot)
            }
            else
            {
                document.write('el mayor promedio de edad es: ' + ton)
            }
        </script>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 16</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <script>
            function saludo()
            {
                document.write("hola<br>");
                document.write("¿como estas?<hr>");
            }
            saludo();
            saludo();
            saludo();
        </script>        
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 17</title>
    </head>
    <body>
        <h1>problema 1</h1>
        <script>
            function menor(a,b,c)
            {
                if(a<b && a<c)
                {
                    document.write("el menor es: " + a)
                }
                else if (b<c)
                {
                    document.write("el menor es: " + b)
                }
                else
                {
                    document.write("el menor es: " + c)
                }
            }
            var uno=parseInt(prompt("Escriba el primer numero: (problema 1)"))
            var dos=parseInt(prompt("Escriba el segundo numero: (problema 1)"))
            var tres=parseInt(prompt("Escriba el tercero numero: (problema 1)"))
            menor(uno,dos,tres)
        </script>
        <h1>problema 2</h1>
        <script>
            function orden(a,b,c)
            {
                if (a<b && a<b)
                {
                    if (b<c)
                    {
                        document.write("de menor a mayor: " + a + " " + b + " " + c)
                    }
                    else
                    {
                        document.write("de menor a mayor: " + a + " " + c + " " + b)
                    }
                }
                else if (b<a && b<c)
                {
                    if (a<c)
                    {
                        document.write("de menor a mayor: " + b + " " + a + " " + c)
                    }
                    else
                    {
                        document.write("de menor a mayor: " + b + " " + c + " " + a)
                    }
                }
                else
                {
                    if (b<a)
                    {
                        document.write("de menor a mayor: " + c + " " + b + " " + a)
                    }
                    else
                    {
                        document.write("de menor a mayor: " + c + " " + a + " " + b)
                    }
                }
            }
            var I=parseInt(prompt("escriba numero 1: (problema 2)"))
            var II=parseInt(prompt("escriba numero 2: (problema 2)"))
            var III=parseInt(prompt("escriba numero 3: (problema 2)"))
            orden(I,II,III)
        </script>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 18</title>
    </head>
    <body>
        <h1>problema 1</h1>
        <script>
            function mayor(a,b,c)
            {
                if(a>b && a>c)
                {
                    return a
                }
                else if (b>c)
                {
                    return b
                }
                else
                {
                    return c
                }
            }
            var I=parseInt(prompt("escriba numero 1: (problema 1)"))
            var II=parseInt(prompt("escriba numero 2: (problema 1)"))
            var III=parseInt(prompt("escriba numero 3: (problema 1)"))
            var f=mayor(I,II,III)
            document.write("el mayor es: " + f)
        </script>
        <h1>problema 2</h1>
        <script>
            function perimetro(la)
            {
                return la*4
            }
            var lado=parseInt(prompt("escriba la medido de un lado del cuadrado: (problema 2)"))
            var p=perimetro(lado)
            document.write("su perimetro es: " + p)
        </script>
        <h1>problema 3</h1>
        <script>
            function digitos(x)
            {
                if (x<10)
                {
                    return "un digito"
                }
                else if (x>=10 && x<100)
                {
                    return "dos digitos"
                }
                else if (x>=100 && x<1000)
                {
                    return "tres digitos"
                }
                else if (x>=1000 && x<10000)
                {
                    return "cuatro digitos"
                }
                else
                {
                    return "cinco digitos"
                }
            }
            var po=parseInt(prompt("escriba un numero: (problema 3)"))
            var d=digitos(po)
            document.write("tiene " + d)
        </script>
        <h1>problema 4</h1>
        <script>
            function promedio(a,b,c)
            {
                return (a+b+c)/3
            }
            var u=parseInt(prompt("escriba numero 1: (problema 4)"))
            var d=parseInt(prompt("escriba numero 2: (problema 4)"))
            var t=parseInt(prompt("escriba numero 3: (problema 4)"))
            var p=promedio(u,d,t)
            document.write("el promedio es: " + p)
        </script>
        <h1>problema 5</h1>
        <script>
            function suma(n1,n2,n3,n4,n5)
            {
                return n1+n2+n3+n4+n5
            }
            var I=parseInt(prompt("escriba numero 1: (problema 5)"))
            var II=parseInt(prompt("escriba numero 2: (problema 5)"))
            var III=parseInt(prompt("escriba numero 3: (problema 5)"))
            var IV=parseInt(prompt("escriba numero 4: (problema 5)"))
            var V=parseInt(prompt("escriba numero 4: (problema 5)"))
            var total=suma(I,II,III,IV,V)
            document.write("la suma es: " + total)
        </script>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 20</title>
    </head>
    <body>
        <script>
            var tiempo=new Date()
            switch(tiempo.getMonth()+1)
            {
                case 1,2,3,4:
                    document.write("primer cuatrimestre")
                    break
                case 5,6,7,8:
                    document.write("segundo cuatrimestre")
                    break
                case 9,10,11,12:
                    document.write("tercer cuatrimestre")
                    break
            }
        </script>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 21</title>
    </head>
    <body>
        <h1>problema 1</h1>
        <script>
            var total=0
            var to36=0
            var m50=0
            var num=new Array(8)
            for (var i=0; i<num.length;i++)
            {
                num[i]=parseInt(prompt("Introduza numero " + (i+1) + ": (problema 1)"))
                total+=num[i]
                if (num[i]>36)
                {
                    to36+=num[i]
                }
                if (num[i]>50)
                {
                    m50++
                }
            }
            document.write("valor acumulado: " + total + "<br>")
            document.write("valor acumulado de los numeros mayores a 36: " + to36 + "<br>")
            document.write("cantidad de numeros mayores de 50: " + m50)
        </script>
        <h1>problema 2</h1>
        <script>
            var li1=new Array(5)
            var li2=new Array(5)
            var li3=new Array(5)
            for (var i=0; i<li1.length; i++)
            {
                li1[i]=parseInt(prompt("introduzaca numero " + (i+1) + " del vector 1: (problema 2)"))
            }
            for (var i=0; i<li2.length; i++)
            {
                li2[i]=parseInt(prompt("introduzaca numero " + (i+1) + " del vector 2: (problema 2)"))
            }
            for (var i=0; i<li3.length; i++)
            {
                li3[i]=li1[i]+li2[i]
            }
            document.write("vector 1: ")
            for (var i=0; i<5; i++)
            {
                document.write(li1[i] + " ")
            }
            document.write("<br>")
            document.write("vector 2: ")
            for (var i=0; i<5; i++)
            {
                document.write(li2[i] + " ")
            }
            document.write("<br>")
            document.write("vector 3: ")
            for (var i=0; i<5; i++)
            {
                document.write(li3[i] + " ")
            }
            document.write("<br>")
        </script>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 22</title>
    </head>
    <body>
        <h1>problema 1</h1>
        <script>
            var x=parseInt(prompt("introduzca un numero: (problema 1)"))
            document.write("el numero elevado al cubo es: " + Math.pow(x,3))
        </script>
        <h1>problema 2</h1>
        <script>
            var y=parseInt(prompt("introduzaca un numero: (problema 2)"))
            document.write("la raiz cuadrada del numero es: " + Math.sqrt(y))
        </script>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 23</title>
    </head>
    <body>
        <h1>problema 1</h1>
        <script>
            var p
            var t=0
            while (p!="Fin")
            {
                p=prompt("introduzca un nombre: (problema 1)")
                if (p!="Fin")
                {
                    t++
                }
            }
            document.write("se introdujeron " + t + " nombres")
        </script>
        <h1>problema 2</h1>
        <script>
            var n
            var t=0
            while (n!="fin")
            {
                n=prompt("introduzca un nombre: (problema 2)")
                n=n.toLowerCase()
                if (n!="fin")
                {
                    t++
                }
            }
            document.write("se introdujeron " + t + " nombres")
        </script>
        <h1>problema 3</h1>
        <script>
            var a=prompt("ingrese una frase o texto: (problema 3)")
            var b=prompt("ingrese la clave a buscar: (problema 3)")
            var bu=a.indexOf(b)
            if (bu!=-1)
            {
                document.write("la posicion de la clave es: " + bu)
            }
            else
            {
                document.write("la clave no esta")
            }
        </script>
        <h1>problema 4</h1>
        <script>
            var pal=prompt("escribe una palabra: (problema 4)")
            var t=pal.length-1
            var le=0
            for (var i=0; i<pal.length;i++,t--)
            {
                if (pal[i]==pal[t])
                {
                    le++
                }
            }
            if (le==pal.length)
            {
                document.write("la palabra es palindroma")
            }
            else
            {
                document.write("la palabra no es palindroma")
            }
        </script>
        <h1>problema 5</h1>
        <script>
            var e=prompt("escriba un email: (problema 5)")
            var a=e.indexOf("@")
            if (a!=-1)
            {
                document.write("el e-mail tiene @")
            }
            else
            {
                document.write("el e-mail no tiene @")
            }
        </script>
        <h1>problema 6</h1>
        <script>
            var z=prompt("introduzca una palabra o frase: (problema 6)")
            var v=0
            document.write("la primera mitad de los caracteres: ")
            for(var i=0; i<z.length/2;i++)
            {
                document.write(z[i])
            }
            document.write("<br>")
            document.write("ultimo caracter: " + z[z.length-1] + "<br>")
            document.write("escrito inverso: ")
            for (var i=z.length-1; i>=0; i--)
            {
                document.write(z[i])
            }
            document.write("<br>")
            document.write("separado por guion: " + z[0])
            for(var i=1; i<z.length; i++)
            {
                document.write("-" + z[i])
            }
            document.write("<br>")
            z=z.toLowerCase()
            for (var i=0; i<z.length; i++)
            {
                if (z[i]=="a" || z[i]=="e" || z[i]=="i" || z[i]=="o" || z[i]=="u")
                {
                    v++
                }
            }
            document.write("la cantidad de vocales: " + v)
        </script>
        <h1>problema 7</h1>
        <script>
            var or=prompt("escriba una oracion: (problema 7)")
            for (var i=0; i<or.length; i++)
            {
                if(or[i]==" ")
                {
                    document.write("<br>")
                }
                else
                {
                    document.write(or[i])
                }
            }
        </script>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 24</title>
    </head>
    <body>
        <script>
            function aviso(a)
            {
                alert(a)
            }
        </script>
        <form action="#">
            <button type="button" onclick="aviso('se presiono boton uno')">1</button>
            <button type="button" onclick="aviso('se presiono boton dos')">2</button>
            <button type="button" onclick="aviso('se presiono boton tres')">3</button>
        </form>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 25</title>
    </head>
    <body>
        <h1>problema 1</h1>
        <script>
            function cubo()
            {
                var c=document.getElementById('numero').value
                c=parseInt(c)
                alert("el numero elevado al cubo es: " + Math.pow(c,3))
            }
        </script>
        <form>
            <input type="text" id="numero">
            <br>
            <button type="button" onclick="cubo()">Elevar al cubo</button>
        </form>
        <h1>problema 2</h1>
        <script>
            function mayor()
            {
                var m=parseInt(document.getElementById('uno').value)
                var n=parseInt(document.getElementById('dos').value)
                alert("el mayor de ambos numeros es: " + Math.max(m,n))
            }
        </script>
        <form>
            <input type="text" id="uno">
            <br>
            <input type="text" id="dos">
            <br>
            <button type="button" onclick="mayor()">mayor</button>
        </form>
        <h1>problema 3</h1>
        <script>
            function juntar()
            {
                var nombre=document.getElementById('nombre').value
                var apellido=document.getElementById('apellido').value
                document.getElementById('f').value=nombre + " " + apellido
            }
        </script>
        <form>
            nombre: <input type="text" id="nombre">
            <br>
            Apellido: <input type="text" id="apellido">
            <br>
            nombre y apellido: <input type="text" id="f">
            <br>
            <button type="button" onclick="juntar()">combinar</button>
        </form>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 26</title>
    </head>
    <body>
        <script>
            function comprobar()
            {
                var a=document.getElementById('uno').value
                var b=document.getElementById('dos').value
                if (a==b)
                {
                    alert("ambas contraseñas son iguales")
                }
                else
                {
                    alert("las contraseñas son diferentes")
                }
            }
        </script>
        <form>
            escriba la contraseña: 
            <input type="password" id="uno">
            <br>
            repita la contraseña: 
            <input type="password" id="dos">
            <br>
            <button type="button" onclick="comprobar()">verificar</button>
        </form>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 27</title>
    </head>
    <body>
        <h1>problema 1</h1>
        <script>
            function pizza()
            {
                var seleccion=document.getElementById('pizzas')
                document.getElementById('precio').value=seleccion.options[seleccion.selectedIndex].value
            }
        </script>
        <form>
            pizza: 
            <select id="pizzas" onChange="pizza()">
                <option value="$1000">Jamón y Queso</option>
                <option value="$500">Muzzarella</option>
                <option value="$800">Morrones</option>
            </select>
            <br>
            precio: <input type="text" id="precio">
        </form>
        <h1>problema 2</h1>
        <script>
            function presupuesto()
            {
                var pro=document.getElementById('procesador')
                var p=pro.options[pro.selectedIndex].value
                var mo=document.getElementById('monitor')
                var m=mo.options[mo.selectedIndex].value
                var dd=document.getElementById('Disco Duro')
                var d=dd.options[dd.selectedIndex].value
                var fi=parseInt(p)+parseInt(m)+parseInt(d)
                document.getElementById('pre').value=fi
            }
        </script>
        <form>
            procesador: 
            <select id="procesador">
                <option value="400">Intel I3</option>
                <option value="600">Intel I5</option>
                <option value="800">Intel I7</option>
            </select>
            <br>
            monitor: 
            <select id="monitor">
                <option value="250">Samsung 20</option>
                <option value="350">Samsung 22</option>
                <option value="550">Samsung 26</option>
            </select>
            <br>
            disco duro: 
            <select id="Disco Duro">
                <option value="300">500 Gb</option>
                <option value="440">1 Tb</option>
                <option value="500">3 Tb</option>
            </select>
            <br>
            presupuesto: 
            <input type="text" id="pre">
            <br>
            <button type="button" onclick="presupuesto()">Calcular</button>
        </form>
        <h1>problema 3</h1>
        <script>
            function Calcular()
            {
                var si=document.getElementById('pi')
                var tipo=si.options[si.selectedIndex].value
                var ca=document.getElementById('cantidad').value
                var f=parseInt(tipo)*parseInt(ca)
                document.getElementById('total').value=f
            }
        </script>
        <form>
            pizza: 
            <select id="pi">
                <option value="4">queso</option>
                <option value="6">Jamon y queso</option>
                <option value="10">especial</option>
            </select>
            cantidad: 
            <input type="text" id="cantidad">
            <br>
            cobrar: 
            <input type="text" id="total">
            <br>
            <button type="button" onclick="Calcular()">calcular</button>
        </form>
        <h1>problema 4</h1>
        <script>
            function correctas()
            {
                var co=0
                var u=document.getElementById('uno')
                var un=u.options[u.selectedIndex].value
                if(un==1)
                {
                    co++
                }
                var dos=document.getElementById('dos')
                var se=dos.options[dos.selectedIndex].value
                if(se==1)
                {
                    co++
                }
                var tres=document.getElementById('tres')
                var te=tres.options[tres.selectedIndex].value
                if(te==1)
                {
                    co++
                }
                var cua=document.getElementById('cuatro')
                var cuar=cua.options[cua.selectedIndex].value
                if(cuar==1)
                {
                    co++
                }
                alert("tuvo " + co + " respuestas correctas")
            }
        </script>
        <form>
            ¿cual es el numero atomico del mercurio?
            <select id="uno">
                <option value="3">23</option>
                <option value="1">80</option>
                <option value="2">100</option>
            </select>
            <br>
            ¿cual es la extension de republica dominicana? en Km2
            <select id="dos">
                <option value="1">48 442</option>
                <option value="2">40 413</option>
                <option value="3">22 891</option>
            </select>
            <br>
            ¿cuanto es 4+7*2?
            <select id="tres">
                <option value="2">22</option>
                <option value="1">18</option>
            </select>
            <br>
            ¿cual el la capital de uruguay?
            <select id="cuatro">
                <option value="3">quito</option>
                <option value="2">lisboa</option>
                <option value="1">montevideo</option>
            </select>
            <br>
            <button type="button" onclick="correctas()">examinar</button>
        </form>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 28</title>
    </head>
    <body>
        <script>
            function deportes()
            {
                var d=""
                if(document.getElementById('f').checked)
                {
                    d+="Futbol "
                }
                if(document.getElementById('b').checked)
                {
                    d+="basket "
                }
                if(document.getElementById('t').checked)
                {
                    d+="tenis "
                }
                alert("los deportes que practica son: " + d)
            }
        </script>
        <form>
            <input type="checkbox" id="f"> Fútbol
            <br>
            <input type="checkbox" id="b"> Básket
            <br>
            <input type="checkbox" id="t"> Tenis
            <br>
            <button type="button" onclick="deportes()">Comprobar</button>
        </form>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 29</title>
    </head>
    <body>
        <script>
            function permitido()
            {
                if(document.getElementById('si').checked)
                {
                    alert("entrada al sitio permitida")
                }
                if(document.getElementById('no').checked)
                {
                    alert("entrada al sitio denegada")
                }
            }
        </script>
        <form>
            <input type="radio" name="adulto" id="si"> Mayor de 18 años
            <br>
            <input type="radio" name="adulto" id="no"> menor de 18 años
            <br>
            <button type="button" onclick="permitido()">Acceder</button>
        </form>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 30</title>
    </head>
    <body>
        <script>
            function mostrar()
            {
                var n=document.getElementById('nombre').value
                var m=document.getElementById('mail').value
                var c=document.getElementById('comen').value
                alert("nombre: " + n + "\napellido: " + m + "\ncomentario: " + c)
            }
        </script>
        <form>
            nombre
            <input type="text" id="nombre">
            <br>
            E-mail
            <input type="text" id="mail">
            <br>
            comentarios
            <br>
            <textarea id="comen" cols="30" rows="10"></textarea>
            <br>
            <button type="button" onclick="mostrar()">Enviar</button>
        </form>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 31</title>
    </head>
    <body>
        <script>
            function limite(pa)
            {
                if(pa.value.length<7)
                {
                    alert("en la contraseña se han ingresado menos de 7 caracteres")
                }
                else if (pa.value.length>20)
                {
                    alert("en la contraseña se han ingresado mas de 20 caracteres")
                }
            }
        </script>
        <form>
            nombre: 
            <input type="text" id="nombre">
            <br>
            contraseña: 
            <input type="password" id="clave" onblur="limite(this)">
        </form>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 32</title>
    </head>
    <body>
        <script>
            function pintar(objeto,col)
            {
              objeto.style.backgroundColor=col;
            }
          </script>
          <table border="1">
            <tr>
              <td onMouseOver="pintar(this,'#0ff')" onMouseOut="pintar(this,'#ccc')"><a href="https://www.google.com/intl/es-419/gmail/about/#">gmail</a></td>
              <td onMouseOver="pintar(this,'#0f0')" onMouseOut="pintar(this,'#ccc')"><a href="https://login.yahoo.com/?.src=ym&lang=&done=https%3A%2F%2Fmail.yahoo.com%2F%3F.intl%3De1%26.lang%3Des-US%26.partner%3Dnone%26.src%3Dfp&.partner=none">yahoo</a></td>
              <td onMouseOver="pintar(this,'#ff0')" onMouseOut="pintar(this,'#ccc')"><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1586827232&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d127de2f9-ac9b-b9d8-01c4-d2a47a12f906&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">hotmail</a></td>
            </tr>
          </table>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 33</title>
    </head>
    <body onload="mensaje()">
        <script>
            function mensaje()
            {
                alert("pagina cargada")
            }
        </script>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 34</title>
    </head>
    <body>
        <script>
            function ventana()
            {
              var ventana=open('','','status=yes,width=600,height=300,menubar=yes');
              ventana.document.write("esto es otra ventana");
            }
        </script>
        <button type="button" onClick="ventana()">abrir ventana</button>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 35</title>
    </head>
    <body>
        <script>
            function cambio()
            {
                var x=parseInt(Math.random()*3)
                if (x==0)
                {
                    window.location="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1586827232&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d127de2f9-ac9b-b9d8-01c4-d2a47a12f906&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015"
                }
                else if (x==1)
                {
                    window.location="https://www.google.com/intl/es-419/gmail/about/#"
                }
                else if (x==2)
                {
                    window.location="https://login.yahoo.com/?.src=ym&lang=&done=https%3A%2F%2Fmail.yahoo.com%2F%3F.intl%3De1%26.lang%3Des-US%26.partner%3Dnone%26.src%3Dfp&.partner=none"
                }
            }
        </script>
        <button type="button" onclick="cambio()">mail</button>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>Practica 36-1</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <script>
            function avanzar()
            {
                window.history.go(1);
            }
        </script>
        <a href="practica 36-2.html">Ir a la página 2</a>
        <hr>
        <a href="javascript:avanzar()">Extraer del cache la segunda página</a>
    </body>
</html>
<!DOCTYPE html>
<html>
    <head>
        <title>Practica 36-2</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <script>
            function retornar()
            {
                window.history.go(-1);
            }
        </script>
        esta es la pagina 2
        <hr>
        <a href="javascript:retornar()">Retornar</a>
    </body>
</html>
--'>
<!DOCTYPE html>
<html>
    <head>
        <title>practica 37</title>
    </head>
    <body>
        <script>
            function pantalla()
            {
                var ventana=open('','','status=yes,width=' + screen.availWidth + ',height=' + screen.availHeight/2 + ',menubar=yes');
                ventana.document.write("esto es otra ventana");
            }
        </script>
        <button type="button" onClick="pantalla()">abrir ventana</button>
    </body>
</html>
-->
<!DOCTYPE html>
<html>
    <head>
        <title>practica 38</title>
    </head>
    <body onload="cookie()">
        <script>
            function cookie()
            {
                if(navigator.cookieEnabled)
                {
                    alert("las cookies estan activadas")
                }
                else
                {
                    alert("las cookies no estan activadas")
                }
            }
        </script>
    </body>
</html>
*/
function retornarFecha()
{
    var fecha=new Date();
    var dia=fecha.getDay()
    var f
    switch(dia)
    {
        case 0:
            f="domingo"
            break
        case 1:
            f="lunes"
            break
        case 2:
            f="martes"
            break
        case 3:
            f="miercoles"
            break
        case 4:
            f="jueves"
            break
        case 5:
            f="viernes"
            break
        case 6:
            f="sabado"
            break
    }
    var mes=fecha.getMonth()+1
    var m
    switch(mes)
    {
        case 1:
            m="enero"
            break
        case 2:
            m="febrero"
            break
        case 3:
            m="marzo"
            break
        case 4:
            m="abril"
            break
        case 5:
            m="mayo"
            break
        case 6:
            m="junio"
            break
        case 7:
            m="julio"
            break
        case 8:
            m="agosto"
            break
        case 9:
            m="septiembre"
            break
        case 10:
            m="octubre"
            break
        case 11:
            m="noviembre"
            break
        case 12:
            m="diciembre"
            break
    }
    var cadena= f + " " + fecha.getDate() + ' de ' + m + ' del ' + fecha.getFullYear();
    return cadena;
}
function retornarHora()
{
    var fecha=new Date();
    var hora=fecha.getHours()
    var m
    if(hora>12)
    {
        m="PM"
        hora-=12
    }
    else
    {
        m="AM"
    }
    var cadena=hora + ':' + fecha.getMinutes() + ':' + fecha.getSeconds() + " " + m;
    return cadena;
}