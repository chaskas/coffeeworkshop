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
    $this->widgetSchema['descripcion']->setDefault('Descripci&oacute;n');

    $this->validatorSchema['nombre'] = new sfValidatorString(array('required'=>true));
    $this->validatorSchema['ocupacion'] = new sfValidatorString(array('required'=>true));
    $this->validatorSchema['titulo'] = new sfValidatorString(array('required'=>true));
    $this->validatorSchema['descripcion'] = new sfValidatorString(array('required'=>true));
    $this->validatorSchema['email'] = new sfValidatorEmail(array('required'=>true));

    unset($this['created_at'], $this['updated_at']);
  }
}
