<?php

/**
 * BaseExpositores
 * 
 * This class has been auto-generated by the Doctrine ORM Framework
 * 
 * @property text $nombre
 * @property text $ocupacion
 * @property varchar $email
 * @property text $fono
 * @property text $titulo
 * @property text $descripcion
 * 
 * @method text        getNombre()      Returns the current record's "nombre" value
 * @method text        getOcupacion()   Returns the current record's "ocupacion" value
 * @method varchar     getEmail()       Returns the current record's "email" value
 * @method text        getFono()        Returns the current record's "fono" value
 * @method text        getTitulo()      Returns the current record's "titulo" value
 * @method text        getDescripcion() Returns the current record's "descripcion" value
 * @method Expositores setNombre()      Sets the current record's "nombre" value
 * @method Expositores setOcupacion()   Sets the current record's "ocupacion" value
 * @method Expositores setEmail()       Sets the current record's "email" value
 * @method Expositores setFono()        Sets the current record's "fono" value
 * @method Expositores setTitulo()      Sets the current record's "titulo" value
 * @method Expositores setDescripcion() Sets the current record's "descripcion" value
 * 
 * @package    coffeeandworkshop
 * @subpackage model
 * @author     Your name here
 * @version    SVN: $Id: Builder.php 7490 2010-03-29 19:53:27Z jwage $
 */
abstract class BaseExpositores extends sfDoctrineRecord
{
    public function setTableDefinition()
    {
        $this->setTableName('expositores');
        $this->hasColumn('nombre', 'text', null, array(
             'type' => 'text',
             'notnull' => true,
             ));
        $this->hasColumn('ocupacion', 'text', null, array(
             'type' => 'text',
             'notnull' => true,
             ));
        $this->hasColumn('email', 'varchar', 30, array(
             'type' => 'varchar',
             'notnull' => true,
             'unique' => true,
             'length' => 30,
             ));
        $this->hasColumn('fono', 'text', null, array(
             'type' => 'text',
             'notnull' => true,
             ));
        $this->hasColumn('titulo', 'text', null, array(
             'type' => 'text',
             'notnull' => true,
             ));
        $this->hasColumn('descripcion', 'text', null, array(
             'type' => 'text',
             'notnull' => true,
             ));
    }

    public function setUp()
    {
        parent::setUp();
        $timestampable0 = new Doctrine_Template_Timestampable();
        $this->actAs($timestampable0);
    }
}