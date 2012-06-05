<?php

/**
 * Expositores form base class.
 *
 * @method Expositores getObject() Returns the current form's model object
 *
 * @package    coffeeandworkshop
 * @subpackage form
 * @author     Your name here
 * @version    SVN: $Id: sfDoctrineFormGeneratedTemplate.php 29553 2010-05-20 14:33:00Z Kris.Wallsmith $
 */
abstract class BaseExpositoresForm extends BaseFormDoctrine
{
  public function setup()
  {
    $this->setWidgets(array(
      'id'          => new sfWidgetFormInputHidden(),
      'nombre'      => new sfWidgetFormInputText(),
      'ocupacion'   => new sfWidgetFormInputText(),
      'email'       => new sfWidgetFormInputText(),
      'fono'        => new sfWidgetFormInputText(),
      'titulo'      => new sfWidgetFormInputText(),
      'descripcion' => new sfWidgetFormInputText(),
      'created_at'  => new sfWidgetFormDateTime(),
      'updated_at'  => new sfWidgetFormDateTime(),
    ));

    $this->setValidators(array(
      'id'          => new sfValidatorChoice(array('choices' => array($this->getObject()->get('id')), 'empty_value' => $this->getObject()->get('id'), 'required' => false)),
      'nombre'      => new sfValidatorPass(),
      'ocupacion'   => new sfValidatorPass(),
      'email'       => new sfValidatorPass(),
      'fono'        => new sfValidatorPass(),
      'titulo'      => new sfValidatorPass(),
      'descripcion' => new sfValidatorPass(),
      'created_at'  => new sfValidatorDateTime(),
      'updated_at'  => new sfValidatorDateTime(),
    ));

    $this->validatorSchema->setPostValidator(
      new sfValidatorDoctrineUnique(array('model' => 'Expositores', 'column' => array('email')))
    );

    $this->widgetSchema->setNameFormat('expositores[%s]');

    $this->errorSchema = new sfValidatorErrorSchema($this->validatorSchema);

    $this->setupInheritance();

    parent::setup();
  }

  public function getModelName()
  {
    return 'Expositores';
  }

}
