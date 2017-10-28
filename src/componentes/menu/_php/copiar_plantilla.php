<?php

class copiarPlantilla {
    public $nombre = '';

    public function copiar($rutaDestino) {
        $origen = './_Plantillas/'.$this->nombre;
        $this->copiarArbol($origen, $rutaDestino);
        return $destino;
    }

    // Copia recursiva de directorios y archivos de la plantilla
    private function copiarArbol($origen,$destino) {
        $directorio = opendir($origen);
        @mkdir($destino);
        while(false !== ( $archivo = readdir($directorio)) ) {
            if (( $archivo != '.' ) && ( $archivo != '..' )) {
                if ( is_dir($origen . '/' . $archivo) ) {
                    $this->copiarArbol($origen . '/' . $archivo,$destino . '/' . $archivo);
                }
                else {
                    copy($origen . '/' . $archivo,$destino . '/' . $archivo);
                }
            }
        }
        closedir($directorio);
    }
}