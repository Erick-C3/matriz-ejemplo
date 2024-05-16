function main(){
    // matriz 3x3
    const matriz = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
   /*  process.stdout.write(String(matriz[0][1])+"\n");
    matriz[1].push("nuevo")
    matriz[1][1] = "hola";
    console.table(matriz); */

    for (let i = 0; i < matriz.length ; i++) {
        process.stdout.write("\t");
        for (let j = 0; j < matriz[i].length; j++) {
            process.stdout.write(String("("+matriz[i][j])+")");
        }
        process.stdout.write("\n");
    }

    matriz[2].splice(1,1);
}

main();