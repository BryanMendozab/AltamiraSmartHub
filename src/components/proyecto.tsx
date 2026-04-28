function Proyecto() {
    return (
        <>
        <div>
            <div className="flex flex-col align-center p-10 gap-10 ">
                
                <div>
                    <p className="text-black font-bold text-2xl">Descripción General</p>

                    <p>El presente proyecto tiene como objetivo el diseño de un nodo logístico sostenible ubicado 
                        en Altamira, Tamaulipas, enfocado en la optimización del flujo de mercancías de comercio 
                        internacional mediante el uso de tecnología, seguridad y prácticas sustentables. 
                        A lo largo del documento se desarrollan los aspectos estratégicos, operativos, económicos y 
                        regulatorios necesarios para garantizar la viabilidad del nodo, así como su representación 
                        mediante un plano técnico que servirá como base para la construcción de la maqueta. 
                    </p>
                </div>

                <div className="flex flex-col gap-10">

                    <p className="text-blue-700 font-bold text-2xl  pb-2.5">Fundamentación Estratégica</p>


                    <div>
                        
                        <p className="text-black font-bold text-2xl">Geo-Estrategia</p>

                        <p>
                            El nodo logístico sostenible se ubica en un terreno estratégico en Altamira, Tamaulipas, en 
                            las coordenadas 22.4136° N, 97.8738° W, cercano al puerto industrial de Altamira. Esta 
                            ubicación permite una conexión directa con rutas terrestres, ferroviarias y marítimas, 
                            facilitando el flujo eficiente de mercancías de importación y exportación. 
                            El terreno cuenta con una extensión aproximada de 10 hectáreas (100,000 m²), lo cual 
                            permite el desarrollo de infraestructura logística suficiente para operar de manera eficiente 
                            sin generar congestión operativa.
                        </p>


                        {/* Se añade imagen ubicada en assets con ruta relativa al archivo actual */}
                        <img src="/src/assets/imagen_geo.jpg" alt="Imagen del nodo logístico" className="rounded-lg border-2 border-blue-400 w-full max-w-2xl" />
                    </div>


                    <div className="flex flex-col gap-5">
                        
                        <p className="text-black font-bold text-2xl">Defensa Legal y Aduanera</p>

                        <p>
                            El nodo operará bajo la figura de Recinto Fiscalizado Estratégico (RFE), cumpliendo con 
                            los lineamientos establecidos por las autoridades aduaneras en México.
                        </p>

                        {/* Añadido list-disc y pl-5 para mostrar los puntos de la lista */}
                        <ul className="list-disc pl-5">

                            <li>Bardas Perimetrales</li>
                            <li>Circuito cerrado de videovigilancia (CCTV)</li>
                            <li>Control de accesos</li>
                            <li>zona designada para autoridades aduaneras</li>
                        </ul>

                        <p>
                            Esto garantiza el cumplimiento de las normativas de comercio exterior y la seguridad en el manejo de mercancías.
                        </p>

                      
                    </div>


                    <div className="flex flex-col gap-5">
                        
                        <p className="text-black font-bold text-2xl">Sustentabilidad</p>

                        <p>  
                            El nodo incorpora prácticas de logística verde mediante la implementación de:
                        </p>

                        <ul className="list-disc pl-5">
                            <li>paneles solares para generación de energía</li>
                            <li>sistemas de reciclaje de residuos</li>
                            <li>planta de tratamiento de agua</li>
                        </ul>
                        <p>
                            Estas acciones permiten reducir el impacto ambiental y mejorar la eficiencia energética del 
                            nodo logístico.
                        </p>

                        
                    </div>
                </div>


                <div className="flex flex-col gap-10">
                    
                    <p className="text-blue-700 font-bold text-2xl  pb-2.5">Operación Logística</p>

                    <div className="flex flex-col gap-5">
                        
                        <p className="text-black font-bold text-2xl">Integración Smart Hub 4.0</p>

                        <p>  
                            El nodo logístico incorpora tecnologías avanzadas para optimizar sus operaciones. 
                            Los accesos inteligentes permiten el ingreso de camiones sin generar filas mediante el uso 
                            de lectores OCR para placas y contenedores, así como sistemas biométricos para la 
                            identificación de operadores. 
                            El almacén se encuentra conectado mediante un sistema WMS (Warehouse Management 
                            System), el cual permite localizar la mercancía en tiempo real. Además, se utilizan etiquetas 
                            RFID para el control automatizado del inventario. 
                            La trazabilidad se garantiza mediante plataformas digitales que permiten a los clientes 
                            monitorear el estado y ubicación de su mercancía en todo momento. 
                        </p>

                        

                        
                    </div>

                    <div className="flex flex-col gap-5">
                        
                        <p className="text-black font-bold text-2xl"> Seguridad Internacional (OEA / C-TPAT) </p>

                        <p>  
                            El nodo implementa un protocolo integral de seguridad alineado con los estándares 
                            internacionales OEA y C-TPAT.                  
                        </p>

                        <p>
                            Se incluyen medidas como:
                        </p>

                        <ul className="list-disc pl-5">
                            <li>inspección de unidades</li>
                            <li>uso de sellos de seguridad</li>
                            <li>monitoreo constante mediante CCTV</li>
                            <li>control automatizado de accesos</li>
                        </ul>

                        <p>Esto permite proteger la cadena de suministro y generar confianza en clientes internacionales.</p>

                        
                    </div>

                    <div className="flex flex-col gap-5">
                        
                        <p className="text-black font-bold text-2xl"> Simulación Operativa y DFI </p>

                        <p>  
                            El flujo operativo del nodo logístico se basa en el modelo de Distribución Física Internacional (DFI).                 
                        </p>
                        
                        <p>Para importación:</p>

                        <p>
                            la mercancía ingresa al nodo, pasa por inspección aduanera, es almacenada temporalmente y posteriormente distribuida. 
                        </p>

                       <p>Para exportación:</p>

                        <p>
                            la mercancía llega al almacén, se prepara para envío, pasa por inspección y finalmente es despachada.
                        </p>

                        <p>Este flujo permite una operación ordenada y eficiente.</p>

                        
                    </div>


                    <div className="flex flex-col gap-5">
                        
                        <p className="text-black font-bold text-2xl">Viabilidad Económica</p>

                        <p>  
                            El nodo logístico genera ingresos mediante la prestación de servicios logísticos. 
                        </p>
                        
                        <p>El tipo de mercancía principal será productos electrónicos y autopartes, debido a su alta demanda en el comercio internacional.</p>

                        <p>
                                El modelo permite recuperar la inversión mediante la operación continua del nodo y la alta 
                                demanda logística en la región.
                        </p>

                       <p>Las tarifas propuestas son:</p>

                        <ul className="list-disc pl-5">
                            <li>almacenamiento: $200 MXN por pallet por día</li>
                            <li>uso de andenes: $500 MXN por operación</li>
                            <li>consolidación: $300 MXN por operación </li>
                            <li>inspección: $250 MXN por operación  </li>
                            <li>servicios adicionales: $200 MXN</li>
                        </ul>

                        <p>Este modelo permite generar ingresos constantes y posicionar al nodo como una opción competitiva.</p>

                        
                    </div>


                    <div className="flex flex-col gap-5">
                        
                        <p className="text-black font-bold text-2xl">Marco Regulatorio</p>

                        <p>  
                            El nodo cumple con las regulaciones de: 
                        </p>

                        <ul className="list-disc pl-5">
                            <li>autoridades aduaneras</li>
                            <li>transporte federal</li>
                            <li>medio ambiente</li>
                            <li>seguridad</li>
                        </ul>

                        <p>Esto garantiza la legalidad y viabilidad del proyecto.</p>

                        
                    </div>




                    

                </div>


                <div className="flex flex-col gap-5">
                    <p className="text-blue-700 font-bold text-2xl  pb-2.5">Plano Operativo del Nodo Logístico (Vista Superior)</p>
                    
                    <img src="/src/assets/imagen_nodo.jpg" alt="Imagen del nodo logístico" className="rounded-lg border-2 border-blue-400 w-full max-w-2xl" />

                    <p>El plano del nodo logístico se presenta en vist asuperior (2D), incluyendo:</p>

                    <ul className="list-disc pl-5">
                        <li>Vialidades de 8 metros</li>
                        <li>Radio de giro de 30 metros</li>
                        <li>12 andenes de carga</li>
                        <li>Patio de maniobras</li>
                        <li>Almacén logístico</li>
                        <li>Zona aduanera</li>
                        <li>Zona sustentable</li>
                        <li>Escala: 1:100</li>
                    </ul>
                    

                    <p>Descripción</p>
                    <p>El diseño del nodo logístico garantiza la separación de flujos de importación y exportación, evitando cruces que puedan generar retrasos operativos.</p>
                    <p>El flujo de importación sigue la secuencia: Acceso → inspección → Almacenamiento → Salida</p>
                    <p>El flujo de exportación sigue la secuencia: acceso → almacenamiento → inspección → salida. </p>
                    <p>El radio de giro de 30 m se establece para permitir la maniobra de tráileres tipo full.</p>
                </div>

                

            </div>
        </div>
        </>
    )
}

export default Proyecto
