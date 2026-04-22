# Cachorros Border Collie

## Estructura
```
cachorros/
├── index.html          ← la página
├── data.js             ← ACÁ editás todo
└── fotos/
    ├── madre/          ← fotos de Kimberly
    ├── padre/          ← foto del padre
    └── cachorros/      ← fotos de cada cachorro
```

## Cómo agregar un cachorro
1. Abrí `data.js`
2. Copiá el bloque de ejemplo y pegalo dentro de `CACHORROS = [ ]`
3. Completá los datos
4. Poné las fotos en `fotos/cachorros/`
5. `git add . && git commit -m "agrego cachorro" && git push`

## Cómo marcar un cachorro como reservado
1. Abrí `data.js`
2. Cambiá `status: 'available'` por `status: 'reserved'`
3. `git add . && git commit -m "reservado" && git push`

## Cómo agregar fotos nuevas día a día
1. Poné la foto en `fotos/cachorros/`
2. Agregala en el array `photos` del cachorro en `data.js`
3. `git add . && git commit -m "fotos dia X" && git push`
