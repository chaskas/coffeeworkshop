<?php

/**
 * home actions.
 *
 * @package    coffeeandworkshop
 * @subpackage home
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class homeActions extends sfActions
{
 /**
  * Executes index action
  *
  * @param sfRequest $request A request object
  */
  public function executeIndex(sfWebRequest $request)
  {
    
  }
  public function executeAddExpositor(sfWebRequest $request)
  {
    $this->forward404Unless($request->isMethod(sfRequest::POST));

    $this->expoForm = new ExpositoresForm();

    $this->processForm($request, $this->expoForm);
    
    return sfView::NONE;
  }
  protected function processForm(sfWebRequest $request, sfForm $form)
  {
    $form->bind($request->getParameter($form->getName()), $request->getFiles($form->getName()));
    if ($form->isValid())
    {
      $expositores = $form->save();
      $this->getResponse()->setContent('<center style="margin-left: 50px;"><br/><br/><br/><br/><br/><h3>Muchas Gracias</h3><h4>Nos pondremos en contacto con usted...</h4></center>');
    } else {
      return $this->renderComponent('home','addExpositor',array('expoForm' => $form));
    }
  }
}
