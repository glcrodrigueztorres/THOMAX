const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot');
const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');

const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario']);

// Conjuntos Full
const flowconjuntos = addKeyword('2').addAnswer(['¡¡Fantástica elección! 😃 El Conjunto Promoción es una opción genial. Aquí te detallo todo: 🌟'],
/*'💰 Precio: $14.990',
'🎨 Características:',
//'Camiseta con diseño a elección.',
'Escudo a elección.',
'Marca a elección.',
'Sponsor frontal.',
'Nombre o frase personalizada.',
'Número personalizado.',
'Short color a elección con marca y número.'],*/
{
    media: '14990.jpeg'
}).addAnswer(['Aquí te muestro algunos ejemplos de nuestros Conjuntos Promoción y las opciones de personalización. 🌈'],
    {
        media: 'ejemplo_8990.jpeg'
    }).addAnswer(['😊 El Conjunto Semi Full es una opción versátil. Aquí te cuento todo: 🌟'],
    {
        media: '10990.jpeg'
    }).addAnswer(['Detalles de la Conjunto Semi Full:'],
 /*   '🌈 Precio: $16.990',
    '🎨 Características:',
    'Escudo a elección.',
    'Marca a elección.',
    'Sponsor frontal.,',
    'Sublimación frontal con diseño a elección.',
    'Nombre o frase personalizada.',
    'Número personalizado.',
    'Short color a elección con marca y número.'],*/
    ).addAnswer(['Aquí tienes algunos ejemplos de nuestras Conjunto Semi Full y cómo puedes personalizarlas.🌈'],
    {
        media: 'ejemplo_8990.jpeg'
    }).addAnswer(['😃 La Conjunto Full Sublimación es perfecta para ti. Aquí tienes los detalles: 🌟'],
/*    'Detalles de la Conjunto Full Sublimación:',
    '💰 Precio: $20.990',
    '🎨 Características:',
    'amiseta con diseño a elección.',
    'Escudo a elección.',
    'Marca a elección.',
    'Sponsor frontal.',
    'Nombre o frase personalizada.',
    'Número personalizado.',
'Short color a elección con marca y número.'],*/
    {
        media: '20990.jpeg'
    }).addAnswer(['Aquí te muestro algunos ejemplos de nuestras Conjunto Full Sublimación y las opciones de personalización. 🌈'],
    {
        media: 'ejemplos_20990.jpeg'
    })

/*.addAnswer(['Envio a Todo Chile por Starken o Chile Express. *Estampados THOMAX* es *Partner Starken*'],
    {
        media: 'Ubucacion.jpeg'
    }).addAnswer(['Cuenta Bancaria:',
    'Nombre: Felipe Ovando Tudela',
    'Rut: 18.079.296-1',
    'Banco: Santander',
    'Tipo de Cuenta: Corriente',
    'Número de Cuenta: 0-000-83-16079-9',
    'Correo Electrónico: estampadosthomax@gmail.com',
    'Método de Trabajo (Términos y Condiciones):',
    'Cómo Agendar:',
    'Se solicita el 50% del total de la compra como abono.',
    'Formas de Pago: Efectivo o Transferencia Bancaria.',
    'Proporcionar lista con nombres, números y tallas de jugadores.',
    'Diseño a elección.',
    'Proceso y Tiempo de Trabajo:',
    'Diseño Digital del Producto.',
    'Se solicita aprobación del cliente para comenzar con la confección.',
    'Tiempo de entrega de 8 a 10 días.',
    'Retiro en Taller o Envío a todo Chile por Starken.',
    'Thomax es partner de Starken, por lo que tendrás un 10% de descuento en el costo de envío.',
    'Ubicación y Horarios de Atención:',
    'Estamos ubicados en la Comuna de Pudahuel, Camino Bernardo OHiggins, Parcela 16B.',
    'Horarios de Atención:',
    'Lunes a Viernes: 10 am a 7 pm.',
    'Sábados: 9 am a 3 pm.',
    'Redes Sociales:',
    'Instagram:https://www.instagram.com/estampadosthomax?igsh=ZjIweHZ0ZzU0cTUw',
    'Facebook:https://www.facebook.com/profile.php?id=100064290362599&mibextid=9R9pXO',
],
    {
        media: 'TerminosyCondiciones.jpeg'
    })
.addAnswer(['Datos Transferencia. *Estampados Thomax* te enviamos nuestros datos para evitar fraudes.'],
    {
        media: 'Cuenta.jpeg'
    })*/
.addAnswer('¿Qué opción te gustó?. *¿Cantidad que buscas?*');

// Camiseta    
const flowcamisetas = addKeyword('1').addAnswer(['¡Excelente elección! 🌟 Nuestra Camiseta Promoción es una', 'opción increíble. Aquí van los detalles: 😊"',
    'Detalles de la Camiseta Promoción:'],
//    '💰 Precio: $8.990',
//    '🎨 Características:',
    //'Camiseta con diseño a elección.',
//    'Escudo a elección.',
//    'Marca a elección.',
//    'Sponsor frontal.',
//    'Nombre o frase personalizada.',
 //   'Número personalizado.'],
    {
        media: '8990.jpeg'
    }).addAnswer(['Aquí tienes algunos ejemplos de nuestras Camisetas Promoción y cómo puedes personalizarlas.', '🌈'],
        {
            media: 'ejemplo_8990.jpeg'
        }).addAnswer(['😃 La Camiseta Semi Full es una excelente elección. Aquí tienes los detalles: 🌟'],
        {
            media: '10990.jpeg'
        }).addAnswer(['Detalles de la Camiseta Semi Full:'],
//        '🌈 Precio: $10.990'
//        '🎨 Características:',
//        'Escudo a elección.',
//        'Marca a elección.',
//        'Sponsor frontal.,',
//        'Sublimación frontal con diseño a elección.',
//        'Nombre o frase personalizada.',
//        'Número personalizado.'],
        ).addAnswer(['Aquí tienes algunos ejemplos de nuestras Camisetas Semi Full y cómo puedes personalizarlas.🌈'],
        {
            media: 'ejemplo_8990.jpeg'
        }).addAnswer(['😃 La Camiseta Full Sublimación es perfecta para ti. Aquí tienes los detalles: 🌟'],
 //       'Detalles de la Camiseta Full Sublimación:',
//        '💰 Precio: $13.990',
//        '🎨 Características:',
//        'amiseta con diseño a elección.',
//        'Escudo a elección.',
//        'Marca a elección.',
//        'Sponsor frontal.',
//        'Nombre o frase personalizada.',
//        'Número personalizado.'],
        {
            media: '13990.jpeg'
        }).addAnswer(['Aquí te muestro algunos ejemplos de nuestras Camisetas Full Sublimación y las opciones de personalización. 🌈'],
        {
            media: 'ejemplos_20990.jpeg'
        })

/*     .addAnswer(['Envio a Todo Chile por Starken o Chile Express. *Estampados THOMAX* es *Partner Starken*'],
//        {
//            media: 'Ubucacion.jpeg'
//        }).addAnswer(['Cuenta Bancaria:',
//       'Nombre: Felipe Ovando Tudela',
//        'Rut: 18.079.296-1',
//        'Banco: Santander',
//        'Tipo de Cuenta: Corriente',
//        'Número de Cuenta: 0-000-83-16079-9',
        'Correo Electrónico: estampadosthomax@gmail.com',
        'Método de Trabajo (Términos y Condiciones):',
        'Cómo Agendar:',
        'Se solicita el 50% del total de la compra como abono.',
        'Formas de Pago: Efectivo o Transferencia Bancaria.',
        'Proporcionar lista con nombres, números y tallas de jugadores.',
        'Diseño a elección.',
        'Proceso y Tiempo de Trabajo:',
        'Diseño Digital del Producto.',
        'Se solicita aprobación del cliente para comenzar con la confección.',
        'Tiempo de entrega de 8 a 10 días.',
        'Retiro en Taller o Envío a todo Chile por Starken.',
        'Thomax es partner de Starken, por lo que tendrás un 10% de descuento en el costo de envío.',
        'Ubicación y Horarios de Atención:',
        'Estamos ubicados en la Comuna de Pudahuel, Camino Bernardo OHiggins, Parcela 16B.',
        'Horarios de Atención:',
        'Lunes a Viernes: 10 am a 7 pm.',
        'Sábados: 9 am a 3 pm.',
        'Redes Sociales:'],
        {
            media: 'TerminosyCondiciones.jpeg'
        })
    .addAnswer(['Datos Transferencia. *Estampados Thomax* te enviamos nuestros datos para evitar fraudes.'],
        {
            media: 'Cuenta.jpeg'
        })*/
    .addAnswer('¿Qué opción te gustó?. *¿Cantidad que buscas?*');

const flow3 = addKeyword("3")
    .addAnswer(
        "Estamos desviando tu conversación a nuestro agente"
    )
    //    .addAction(async (ctx, { provider }) => {
    //        const nanoid = await import('nanoid');
    //        const ID_GROUP = nanoid.nanoid(5);
    //        const refProvider = await provider.getInstance();
    //        await refProvider.groupCreate(`AOT SPORT Ventas (${ID_GROUP})`, [
    //            `${ctx.from}@s.whatsapp.net`
    //        ]);
    //    })
    .addAnswer('Te hemos agregado a un grupo con un asesor! Gracias');


const flowPrincipal = addKeyword(['hola', 'ole', 'alo', 'Enlace', 'cotizar', 'Instagram', 'ola', 'Hola', 'Halo', 'Facebook...'])
    .addAnswer(['¡Hola! 👋 Bienvenido a Estampados Thomax, tu lugar para prendas personalizadas de alta', 'calidad. Estoy aquí para hacer realidad tus ideas. 😊',
    'Para ver nuestro catálogo de productos, simplemente escribe "Productos" o "Catálogo". También puedes', 'explorar nuestro trabajo en nuestro Instagram (@estampadosthomax). ¿En qué más puedo ayudarte hoy?:'],
        {
            media: 'thomax.jpeg'
        })
    .addAnswer(
        ['🛍️ Selecciona tu Opción:',
    '1️⃣ Para SOLO CAMISETAS, escribe "1".',
    '2️⃣ Para CONJUNTOS (SHORT + CAMISETA), escribe "2".',
    '3️⃣ Para hablar con un ejecutivo, escribe "3" 🤵.',
    '¡Gracias por tu interés! Esperamos tu respuesta.',
   ],
//        { capture: true },
null,
null,
[flowcamisetas, flowconjuntos, flow3]
);
    

//const flowM = addKeyword(['Menu', 'menu'])
//    .addAnswer(
//        [
//            'indicanos que necesitas: ',
//            'Para 👕 *SOLO CAMISETAS*, escribe "*1*"',
//            'Para *CONJUNTOS* 👕🩳 (*SHORT + CAMISETA*), escribe "*2*"',
//            'Para hablar con un ejecutivo, escribe "*3*"🤵.',
//        ],
//        null,
//        null,
//        [flow3]
//    );

const main = async () => {
    const adapterDB = new MockAdapter();
    const adapterFlow = createFlow([flowPrincipal]);
    const adapterProvider = createProvider(BaileysProvider);

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
        onStart: true,
    });

    QRPortalWeb();
};

main();
