<?php

class menuManager
{
    public $nombreElemento;

    public function crearDirectorio($rutaMenuElements)
    {
// Crear Directorio para el Elemento
        return mkdir($rutaMenuElements . $this->nombreElemento);
    }

    public function agregarImport($rutaMenuConf)
    {
        $accion = "import $this->nombreElemento from './$this->nombreElemento'" . PHP_EOL;
        $archivo = fopen($rutaMenuConf . 'import.txt', 'a');
        $res = fwrite($archivo, $accion);
        fclose($archivo);
        return $res;
    }

    public function agregarExport($rutaMenuConf)
    {
        $accion = $this->nombreElemento . ',' . PHP_EOL;
        $archivo = fopen($rutaMenuConf . 'export.txt', 'a');
        $res = fwrite($archivo, $accion);
        fclose($archivo);
        return $res;
    }

    public function grabarMenuJsx($rutaMenuConf, $rutaMenuJsx) {
        $import = file_get_contents($rutaMenuConf.'import.txt');
        $export = file_get_contents($rutaMenuConf.'export.txt');
        return file_put_contents($rutaMenuJsx.'Menu.jsx', "$import\nexport {\n$export}");
    }
}