<?php 
include_once ('./_php/menu_manager.php');
include_once ('./_php/copiar_plantilla.php');

// Terminar nombres de rutas con "/"
	$rutaMenuConf		= './_MenuConf/';
	$rutaMenuJsx 		= './';
	$rutaMenuElements 	= './';

$manager = new menuManager();
$plantilla = new copiarPlantilla();

$plantilla->nombre = 'base'; // $argv[2]
$manager->nombreElemento = $argv[1];

if ($manager->crearDirectorio($rutaMenuElements)) {
    $salida =<<<TEXTO
	Import: {$manager->agregarImport($rutaMenuConf)}
	Export: {$manager->agregarExport($rutaMenuConf)}
	Menu.jsx: {$manager->grabarMenuJsx($rutaMenuConf, $rutaMenuJsx)}
	Plantilla: {$plantilla->copiar($rutaMenuElements.$argv[1])}
TEXTO;
    echo $salida."\n";
} else {
    echo "error al crear directorio del elemento.\n";
}