use musimundos;

-- SELCET PLAYGROUND
-- SELECT * FROM albumes WHERE id = 5;
-- SELECT * FROM clientes WHERE id = 2;

-- WHERE Y ORDER BY PLAYGROUND
-- SELECT * FROM clientes WHERE pais = 'USA';
-- SELECT * FROM canciones WHERE milisegundos between 200000 and 300000;
-- SELECT * FROM clientes WHERE pais = "Argentina" OR pais = "Spain";
-- SELECT * FROM generos ORDER BY nombre ;
-- SELECT primer_nombre FROM clientes ORDER BY pais, ciudad DESC;

-- BETWEEN Y LIKE
-- SELECT * FROM canciones WHERE compositor LIKE "a%"
-- SELECT * FROM generos WHERE nombre LIKE "%ro%"
-- SELECT * FROM canciones WHERE id BETWEEN 10 AND 20

-- LIMIT Y OFFSET
-- SELECT * FROM canciones ORDER BY  milisegundos DESC LIMIT 3
-- SELECT * FROM canciones ORDER BY nombre ASC LIMIT 5 OFFSET 5

-- ALIAS
-- SELECT nombre AS nombres_de_medios FROM tipos_de_medio 

-- FUNCIONES DE ALETERACIÓN
-- SELECT concat("La canción ",nombre, " fue compuesta por ",compositor) FROM canciones
/*SELECT id_cliente, EXTRACT(MONTH FROM fecha_factura) AS "ULTIMO MES" 
FROM facturas 
WHERE id_cliente = 2 
ORDER BY fecha_factura DESC
*/