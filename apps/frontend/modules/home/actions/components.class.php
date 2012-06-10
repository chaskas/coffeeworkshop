<?php

/**
 * home components.
 *
 * @package    coffeeandworkshop
 * @subpackage home
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class homeComponents extends sfComponents
{
  public function executeAddExpositor(sfWebRequest $request)
  {
    if(!isset($this->expoForm))$this->expoForm = new ExpositoresForm();
  }
}
