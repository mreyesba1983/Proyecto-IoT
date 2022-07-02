export default {
  //Deshabilitamos el servicio de renderizado desde el servidor
  ssr: false,

  //Encabezados globales de las paginas
  head: {
    title: 'app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  //Definimos el uso del CSS para el estilo de la pagina web
  css: [

  ],

  //Plugins que deben correrse antes del renderizado de la página
  plugins: [

  ],

  //Auto importar componentes habilitado
  components: true,

  //Modulos para construir el proyecto
  buildModules: [

  ],

  //Modulos utilizados
  modules: [
    '@nuxtjs/axios'
  ],

  //Modulo de configuración
  axios: {},

  //Buikd configuration
  build: {}
}