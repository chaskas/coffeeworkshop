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
    $this->expoForm = new ExpositoresForm();
  }
  public function executeCreate(sfWebRequest $request)
  {
    $this->forward404Unless($request->isMethod(sfRequest::POST));

    $this->expoForm = new ExpositoresForm();

    $this->processForm($request, $this->expoForm);

    $this->setTemplate('index');
  }
  protected function processForm(sfWebRequest $request, sfForm $form)
  {
    $form->bind($request->getParameter($form->getName()), $request->getFiles($form->getName()));
    if ($form->isValid())
    {
      $expositores = $form->save();

      //$this->redirect('expositor/edit?id='.$expositores->getId());
    }
  }
}
