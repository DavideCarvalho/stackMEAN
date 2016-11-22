angular.module('primeiroprojeto')
  .controller('UsuariosController',UsuariosController);

function UsuariosController(){
  vm = this;
  
  vm.titulo="Registro de Pessoas - Grupo de Estudo MEAN";
  
  vm.users=[
    {nome:'Raquel',curso:'ADS'},
    {nome:'Mateus',curso:'ADS'},
    {nome:'Will.I.Am',curso:'ADS'},
    {nome:'Carla',curso:'ADS'},
    {nome:'Rodolpho',curso:'ADS'}
  ];
  
}