<?php

/**
 * Expositores form.
 *
 * @package    coffeeandworkshop
 * @subpackage form
 * @author     Your name here
 * @version    SVN: $Id: sfDoctrineFormTemplate.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class ExpositoresForm extends BaseExpositoresForm
{
  public function configure()
  {

    $this->widgetSchema['descripcion'] = new sfWidgetFormTextarea();
    
    $this->widgetSchema['nombre']->setDefault('Nombre');
    $this->widgetSchema['ocupacion']->setDefault('Ocupaci&oacute;n');
    $this->widgetSchema['email']->setDefault('Email');
    $this->widgetSchema['fono']->setDefault('Fono');
    $this->widgetSchema['titulo']->setDefault('T&iacute;tulo de la Presentaci&oacute;n');
    $this->widgetSchema['descripcion']->setDefault('Descripci&oacute;n');

    $this->validatorSchema['nombre'] = new sfValidatorString(array('required'=>true));
    $this->validatorSchema['ocupacion'] = new sfValidatorString(array('required'=>true));
    $this->validatorSchema['titulo'] = new sfValidatorString(array('required'=>true));
    $this->validatorSchema['descripcion'] = new sfValidatorString(array('required'=>true));
    $this->validatorSchema['email'] = new sfValidatorEmail(array('required'=>true));
    
    $this->widgetSchema->setFormFormatterName('span');

    unset($this['created_at'], $this['updated_at']);
  }
}
