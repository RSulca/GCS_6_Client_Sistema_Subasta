

export const CATEGORIES_FORMS = [
    {
        'nombre': 'Arqueología e historia natural',
        'campos': ['nombreProducto','tipos', 'conservacion', 'peso', 'dimension', 'origen','resumen'],
        'camposPlaceholder': ['Nombre descriptivo del producto','Tipo', 'Conservacion', 'Peso', 'Dimension', 'Origen','Resumen del producto']
    },
    {
        'nombre': 'Arte',
        'campos': ['nombreProducto','tipos', 'artista', 'fechaCreacion', 'tecnicaUsada', 'estado', 'dimensiones', 'marco','resumen'],
        'camposPlaceholder': ['Nombre descriptivo del producto','Tipo', 'Artista', 'Fecha de Creacion', 'Tecnica Usada', 'Estado', 'Dimensiones', 'Marco','Resumen del producto']
    },
    {
        'nombre': 'Arte asiático y tribal',
        'campos': ['nombreProducto','tipo', 'material', 'periodo', 'region', 'decoracion', 'tituloObjeto', 'estado', 'dimensiones','resumen'],
        'camposPlaceholder': ['Nombre descriptivo del producto','Tipo', 'Material', 'Periodo', 'Region', 'Decoracion', 'Titulo del Objeto', 'Estado', 'Dimensiones','Resumen del producto']
    },
    {
        'nombre': 'Coches clásicos, motos clásicos y automobilia',
        'campos': ['nombreProducto','tipos', 'calificacion', 'modelo', 'material', 'tiempoUso', 'fechaFabricacion', 'dimensiones','resumen'],
        'camposPlaceholder': ['Nombre descriptivo del producto','Tipo', 'Calificacion', 'Modelo', 'Material', 'Tiempo de uso', 'Fecha de fabricacion', 'Dimensiones','Resumen del producto']
    },
    {
        'nombre': 'Cámaras y ordenadores',
        'campos': ['nombreProducto','marca', 'modelo/tipo', 'fechaFabricacion', 'origen', 'estado','resumen'],
        'camposPlaceholder': ['Nombre descriptivo del producto','Marca', 'Modelo/Tipo', 'Fecha de fabricacion', 'Origne', 'Estado','Resumen del producto']
    },
    {
        'nombre': 'Deportes y eventos',
        'campos': ['nombreProducto','tipos', 'marca', 'idioma', 'origen', 'estado','resumen'],
        'camposPlaceholder': ['Nombre descriptivo del producto','Tipo', 'Marca', 'Idioma', 'Origen', 'Estado','Resumen del producto'],
    },
    {
        'nombre': 'Diamantes y piedras preciosas',
        'campos': ['nombreProducto','tipos', 'cantidad', 'conservacion', 'pesoQuilates', 'forma/corte', 'color', 'procedencia', 'certificado', 'dimension', 'origen', 'estado','resumen'],
        'camposPlaceholder': ['Nombre descriptivo del producto','Tipo', 'Cantidad', 'Conservacion', 'Peso en Quilates', 'Forma/Corte', 'Color', 'Procedencia', 'Certificado', 'Dimension', 'Origen', 'Estado','Resumen del producto'],
    },
    {
        'nombre': 'Interiores y decoración',
        'campos': ['nombreProducto','tipos', 'material', 'periodoEstimado', 'origen', 'dimensiones', 'estado','resumen'],
        'camposPlaceholder': ['Nombre descriptivo del producto','Tipo', 'Material', 'Periodo Estimado', 'Origen', 'Dimensiones', 'Estado','Resumen del producto'],
    },
    {
        'nombre': 'Joyería y relojes de pulsera',
        'campos': ['nombreProducto','tipos', 'material', 'conservacion', 'pesoQuilates', 'forma/corte', 'color', 'origen', 'certificado', 'dimension', 'pesoTotal','resumen'],
        'camposPlaceholder': ['Nombre descriptivo del producto','Tipo', 'Material', 'Conservacion', 'Peso en Quilates', 'Forma/Corte', 'Color', 'Origen', 'Certificado', 'Dimension', 'Peso Total','Resumen del producto'],
    },
    {
        'nombre': 'Juguetes y modelos a escala',
        'campos': ['nombreProducto','tipos', 'marca', 'escala', 'serie', 'procedencia', 'fechaFabricacion', 'estado','resumen'],
        'camposPlaceholder': ['Nombre descriptivo del producto','Tipo', 'Marca', 'Escala', 'Serie', 'Procedencia', 'Fecha de fabricacion', 'Estado','Resumen del producto'],
    },
    {
        'nombre': 'Libros y cómics',
        'campos': ['nombreProducto','tipos', 'titulo', 'anioArticulo', 'extras', 'editorial', 'artista', 'estado','resumen'],
        'camposPlaceholder': ['Nombre descriptivo del producto','Tipo', 'Titulo', 'Año del articulo', 'Extras', 'Editorial', 'Artista', 'Estado','Resumen del producto'],
    },
    {
        'nombre': 'Militaria y armas',
        'campos': ['nombreProducto','tipos', 'paisFabricante', 'modelo', 'tipoArma', 'mecanismoDisparo', 'calibre', 'fechaFabricacion', 'dimensiones', 'estado','resumen'],
        'camposPlaceholder': ['Nombre descriptivo del producto','Tipo', 'Pais de fabricacion', 'Modelo', 'Tipo de arma', 'Mecanismo de disparo', 'Calibre', 'Fecha de fabricacion', 'Dimensiones', 'Estado','Resumen del producto'],
    },
    {
        'nombre': 'Moda',
        'campos': ['nombreProducto','tipos', 'color', 'material', 'procedencia', 'periodo', 'dimensiones', 'estado','resumen'],
        'camposPlaceholder': ['Nombre descriptivo del producto','Tipo', 'Color', 'Material', 'Procedencia', 'Periodo', 'Dimensiones', 'Estado','Resumen del producto'],
    },
    {
        'nombre': 'Monedas y sellos',
        'campos': ['nombreProducto','tipos', 'paisProcedencia', 'cantidad', 'material', 'certificacion', 'estado','resumen'],
        'camposPlaceholder': ['Nombre descriptivo del producto','Tipo', 'Pais de procedencia', 'Cantidad', 'Material', 'Certificacion', 'Estado','Resumen del producto'],
    },
    {
        'nombre': 'Música',
        'campos': ['nombreProducto','fechaLanzamiento', 'genero', 'cantidadArtistas', 'tituloDisco', 'tituloAlbum', 'estado','resumen'],
        'camposPlaceholder': ['Nombre descriptivo del producto','Fecha de lanzamiento', 'Genero', 'Cantidad de artistas colaboradores', 'Titulo del Disco', 'Titulo del Album', 'Estado','Resumen del producto'],
    },
    {
        'nombre': 'Vino y whisky',
        'campos': ['nombreProducto','tipos', 'cantidadBotellas', 'tamanio', 'nombreProductor', 'tiempoReserva', 'origen', 'estadoBotella', 'porcetajeAlcohol','resumen'],
        'camposPlaceholder': ['Nombre descriptivo del producto','Tipo', 'Cantidad de botellas', 'Tamaño', 'Nombre del productor', 'Tiempo de reserva', 'Pais de origen', 'Estado de la botella', 'Porcentaje de alcohol','Resumen del producto'],
    }
]